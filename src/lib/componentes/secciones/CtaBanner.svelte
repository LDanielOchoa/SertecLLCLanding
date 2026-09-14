<script>
    /**
     * Componente CtaBanner
     * Responsabilidad: Sección de llamado a la acción final con alto contraste y efecto glow.
     */
    import { onMount } from 'svelte';
    import { animarAparicionScroll } from '$lib/animaciones/animaciones-gsap.js';
    import Boton from '$lib/componentes/ui/Boton.svelte';
    import Insignia from '$lib/componentes/ui/Insignia.svelte';

    let bannerElemento;

    onMount(() => {
        animarAparicionScroll(bannerElemento);
    });
</script>

<section class="seccion-espaciado seccion-cta" id="consulta">
    <div class="contenedor">
        <div class="banner-cta-final" bind:this={bannerElemento}>
            <!-- Luces de fondo decorativas -->
            <div class="luz-cta luz-cta-1" aria-hidden="true"></div>
            <div class="luz-cta luz-cta-2" aria-hidden="true"></div>

            <div class="contenido-cta">
                <Insignia variante="destacada">
                    <span style="color: var(--color-acento);">EMPIEZA HOY</span>
                </Insignia>

                <h2 class="titulo-cta">Soluciones Solares Innovadoras para una Vida Sostenible</h2>
                
                <p class="subtitulo-cta">
                    Alimenta tu hogar o negocio con energía limpia, reduce tus gastos de electricidad y da el salto definitivo hacia la independencia energética.
                </p>

                <div class="acciones-cta">
                    <Boton href="mailto:contacto@solaris.com" variante="acento" clase="boton-cta-grande">
                        <span>Solicitar Consulta Gratuita</span>
                        <svg class="boton-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Boton>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .seccion-cta {
        background-color: var(--color-blanco);
    }

    .banner-cta-final {
        background-color: var(--color-oscuro);
        border-radius: var(--radio-2xl);
        padding: 85px 50px;
        color: var(--color-blanco);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: relative;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 35px 70px -15px rgba(0, 0, 0, 0.25);
    }

    .luz-cta {
        position: absolute;
        width: 380px;
        height: 380px;
        border-radius: 50%;
        filter: blur(80px);
        pointer-events: none;
    }

    .luz-cta-1 {
        top: -100px;
        left: 10%;
        background: radial-gradient(circle, rgba(226, 250, 90, 0.18) 0%, rgba(226, 250, 90, 0) 70%);
    }

    .luz-cta-2 {
        bottom: -100px;
        right: 10%;
        background: radial-gradient(circle, rgba(226, 250, 90, 0.14) 0%, rgba(226, 250, 90, 0) 70%);
    }

    .contenido-cta {
        position: relative;
        z-index: 1;
        max-width: 800px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
    }

    .titulo-cta {
        color: var(--color-blanco);
        font-size: clamp(2.2rem, 4.2vw, 3.2rem);
        font-weight: 500;
        line-height: 1.15;
    }

    .subtitulo-cta {
        color: rgba(255, 255, 255, 0.75);
        font-size: 1.15rem;
        max-width: 600px;
        line-height: 1.6;
    }

    .acciones-cta {
        margin-top: 10px;
    }

    :global(.boton-cta-grande) {
        padding: 16px 36px !important;
        font-size: 1.05rem !important;
    }

    @media (max-width: 768px) {
        .banner-cta-final {
            padding: 50px 24px;
        }
    }
</style>
