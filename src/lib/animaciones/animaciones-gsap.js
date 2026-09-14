/**
 * Módulo de Animaciones GSAP
 * Encapsula la lógica de animaciones avanzadas, transiciones y ScrollTrigger respetando accesibilidad.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * Verifica si el usuario tiene activada la preferencia de reducción de movimiento
 */
export function prefiereMovimientoReducido() {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Anima la entrada inicial de la sección Hero
 */
export function animarHero(contenedor) {
    if (!contenedor || typeof window === 'undefined') return;

    const elementos = contenedor.querySelectorAll('[data-animar-hero]');
    const imagenHero = contenedor.querySelector('.hero-visual-contenedor');

    if (prefiereMovimientoReducido()) {
        gsap.set(elementos, { opacity: 1, y: 0 });
        if (imagenHero) gsap.set(imagenHero, { opacity: 1, y: 0, scale: 1 });
        return;
    }

    const lineaTiempo = gsap.timeline({ defaults: { ease: 'power3.out' } });

    lineaTiempo
        .fromTo(
            elementos,
            { y: 28, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 }
        )
        .fromTo(
            imagenHero,
            { scale: 0.96, opacity: 0, y: 30 },
            { scale: 1, opacity: 1, y: 0, duration: 1.1, ease: 'power2.out' },
            '-=0.6'
        );
}

/**
 * Anima la aparición escalonada de elementos al hacer scroll
 */
export function animarAparicionScroll(elementos, opciones = {}) {
    if (!elementos || typeof window === 'undefined') return;

    if (prefiereMovimientoReducido()) {
        gsap.set(elementos, { opacity: 1, y: 0 });
        return;
    }

    gsap.fromTo(
        elementos,
        { y: 30, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: opciones.stagger || 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: elementos[0] || elementos,
                start: 'top 88%',
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

        if (prefiereMovimientoReducido()) {
            elemento.textContent = `${meta}${sufijo}`;
            return;
        }

        const objetoConteo = { valor: 0 };

        gsap.to(objetoConteo, {
            valor: meta,
            duration: 1.8,
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
 * Efecto de iluminación interactiva sutil (Glow) al mover el cursor sobre tarjetas
 */
export function configurarEfectoGlow(tarjeta) {
    if (!tarjeta || typeof window === 'undefined' || prefiereMovimientoReducido()) return;

    tarjeta.addEventListener('mousemove', (evento) => {
        const rectangulo = tarjeta.getBoundingClientRect();
        const x = evento.clientX - rectangulo.left;
        const y = evento.clientY - rectangulo.top;

        tarjeta.style.setProperty('--cursor-x', `${x}px`);
        tarjeta.style.setProperty('--cursor-y', `${y}px`);
    });
}
