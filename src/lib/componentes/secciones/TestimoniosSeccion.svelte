<script>
    /**
     * Componente TestimoniosSeccion
     * Responsabilidad: Mostrar testimonios de clientes con interacción de arrastre y animaciones.
     */
    import { onMount } from 'svelte';
    import { datosTestimonios } from '$lib/datos/datos-sitio.js';
    import { animarAparicionScroll } from '$lib/animaciones/animaciones-gsap.js';
    import Insignia from '$lib/componentes/ui/Insignia.svelte';

    let contenedorTestimonios;
    let deslizador;
    let estaPresionado = false;
    let inicioX = 0;
    let desplazamientoIzquierda = 0;

    onMount(() => {
        const tarjetas = contenedorTestimonios.querySelectorAll('.tarjeta-testimonio');
        animarAparicionScroll(tarjetas, { stagger: 0.12 });

        if (!deslizador) return;

        deslizador.addEventListener('mousedown', (e) => {
            estaPresionado = true;
            deslizador.style.cursor = 'grabbing';
            inicioX = e.pageX - deslizador.offsetLeft;
            desplazamientoIzquierda = deslizador.scrollLeft;
        });

        window.addEventListener('mouseup', () => {
            estaPresionado = false;
            if (deslizador) deslizador.style.cursor = 'grab';
        });

        deslizador.addEventListener('mousemove', (e) => {
            if (!estaPresionado) return;
            e.preventDefault();
            const x = e.pageX - deslizador.offsetLeft;
            const caminar = (x - inicioX) * 1.5;
            deslizador.scrollLeft = desplazamientoIzquierda - caminar;
        });
    });
</script>

<section class="seccion-espaciado seccion-testimonios" bind:this={contenedorTestimonios}>
    <div class="contenedor" style="margin-bottom: 45px;">
        <div class="encabezado-seccion-centro">
            <Insignia variante="seccion">Testimonios</Insignia>
            <h2>Soluciones Solares Confiables para una Vida Sostenible</h2>
            <p>Historias reales de familias y comercios que ya disfrutan de la libertad y el ahorro solar.</p>
        </div>
    </div>

    <!-- Deslizador de Testimonios -->
    <div class="deslizador-testimonios-envoltorio">
        <div class="deslizador-testimonios" bind:this={deslizador}>
            {#each datosTestimonios as testimonio}
                <div class="tarjeta-testimonio">
                    <!-- Calificación de Estrellas -->
                    <div class="estrellas-grupo">
                        {#each Array(testimonio.estrellas) as _}
                            <svg class="icono-estrella" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                        {/each}
                    </div>

                    <!-- Cita -->
                    <p class="cita-testimonio">"{testimonio.cita}"</p>

                    <!-- Autor -->
                    <div class="autor-info">
                        <img src={testimonio.avatar} alt={testimonio.nombre} class="avatar-autor" loading="lazy">
                        <div>
                            <div class="nombre-autor">{testimonio.nombre}</div>
                            <div class="rol-autor">{testimonio.rol}</div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .seccion-testimonios {
        background-color: var(--color-superficie);
        overflow: hidden;
        border-top: 1px solid var(--color-borde);
    }

    .encabezado-seccion-centro {
        text-align: center;
        max-width: 720px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }

    .deslizador-testimonios-envoltorio {
        width: 100%;
        max-width: var(--ancho-maximo);
        margin: 0 auto;
        padding: 0 24px;
    }

    .deslizador-testimonios {
        display: flex;
        gap: 24px;
        overflow-x: auto;
        padding-bottom: 25px;
        padding-top: 10px;
        scroll-snap-type: x mandatory;
        scrollbar-width: none;
        cursor: grab;
        user-select: none;
    }

    .deslizador-testimonios::-webkit-scrollbar {
        display: none;
    }

    .tarjeta-testimonio {
        flex: 0 0 380px;
        scroll-snap-align: start;
        background-color: var(--color-blanco);
        border: 1px solid var(--color-borde);
        border-radius: var(--radio-xl);
        padding: 34px 28px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 22px;
        box-shadow: var(--sombra-tarjeta);
        transition: var(--transicion-fluida);
    }

    .tarjeta-testimonio:hover {
        transform: translateY(-4px);
        border-color: var(--color-borde-fuerte);
        box-shadow: var(--sombra-flotante);
    }

    .estrellas-grupo {
        display: flex;
        gap: 4px;
        color: var(--color-oscuro);
    }

    .icono-estrella {
        width: 17px;
        height: 17px;
    }

    .cita-testimonio {
        font-size: 1.02rem;
        line-height: 1.6;
        color: var(--color-oscuro);
        font-weight: 400;
    }

    .autor-info {
        display: flex;
        align-items: center;
        gap: 14px;
        padding-top: 10px;
        border-top: 1px solid var(--color-borde);
    }

    .avatar-autor {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        object-fit: cover;
    }

    .nombre-autor {
        font-size: 0.98rem;
        font-weight: 600;
        color: var(--color-oscuro);
    }

    .rol-autor {
        font-size: 0.82rem;
        color: var(--color-texto-atenuado);
    }

    @media (max-width: 640px) {
        .tarjeta-testimonio {
            flex: 0 0 300px;
            padding: 26px 20px;
        }
        .deslizador-testimonios-envoltorio {
            padding: 0 16px;
        }
    }
</style>
