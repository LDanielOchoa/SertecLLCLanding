/**
 * Módulo de Animaciones GSAP
 * Encapsula la lógica de animaciones avanzadas, transiciones y ScrollTrigger.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * Anima la entrada inicial de la sección Hero
 */
export function animarHero(contenedor) {
    if (!contenedor || typeof window === 'undefined') return;

    const elementos = contenedor.querySelectorAll('[data-animar-hero]');
    const imagenHero = contenedor.querySelector('.hero-visual-contenedor');

    const lineaTiempo = gsap.timeline({ defaults: { ease: 'power3.out' } });

    lineaTiempo
        .fromTo(
            elementos,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.15 }
        )
        .fromTo(
            imagenHero,
            { scale: 0.94, opacity: 0, y: 40 },
            { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' },
            '-=0.7'
        );

    // Efecto de flotación sutil continuo
    gsap.to(imagenHero, {
        y: -10,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
}

/**
 * Anima la aparición escalonada de elementos al hacer scroll
 */
export function animarAparicionScroll(elementos, opciones = {}) {
    if (!elementos || typeof window === 'undefined') return;

    gsap.fromTo(
        elementos,
        { y: 35, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: opciones.stagger || 0.12,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: elementos[0] || elementos,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        }
    );
}

/**
 * Anima contadores numéricos al entrar en pantalla
 */
export function animarContadores(elementos) {
    if (!elementos || typeof window === 'undefined') return;

    elementos.forEach(elemento => {
        const meta = parseFloat(elemento.getAttribute('data-meta') || '0');
        const sufijo = elemento.getAttribute('data-sufijo') || '';
        const objetoConteo = { valor: 0 };

        gsap.to(objetoConteo, {
            valor: meta,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: elemento,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            onUpdate: () => {
                elemento.textContent = `${Math.floor(objetoConteo.valor)}${sufijo}`;
            }
        });
    });
}

/**
 * Efecto de iluminación interactiva (Glow) al mover el cursor sobre tarjetas
 */
export function configurarEfectoGlow(tarjeta) {
    if (!tarjeta || typeof window === 'undefined') return;

    tarjeta.addEventListener('mousemove', (evento) => {
        const rectangulo = tarjeta.getBoundingClientRect();
        const x = evento.clientX - rectangulo.left;
        const y = evento.clientY - rectangulo.top;

        tarjeta.style.setProperty('--cursor-x', `${x}px`);
        tarjeta.style.setProperty('--cursor-y', `${y}px`);
    });
}
