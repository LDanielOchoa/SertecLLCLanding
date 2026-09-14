<script>
    /**
     * Componente CtaBanner
     * Responsabilidad: Sección de llamado a la acción final con alto impacto visual y contacto directo para emergencias.
     */
    import { onMount } from 'svelte';
    import { datosContacto } from '$lib/datos/datos-sitio.js';
    import { animarAparicionScroll } from '$lib/animaciones/animaciones-gsap.js';
    import Boton from '$lib/componentes/ui/Boton.svelte';
    import Insignia from '$lib/componentes/ui/Insignia.svelte';

    let bannerElemento;

    onMount(() => {
        animarAparicionScroll(bannerElemento);
    });
</script>

<section class="seccion-espaciado seccion-cta" id="contacto">
    <div class="contenedor">
        <div class="banner-cta-final" bind:this={bannerElemento}>
            <!-- Luces de fondo decorativas -->
            <div class="luz-cta luz-cta-1" aria-hidden="true"></div>
            <div class="luz-cta luz-cta-2" aria-hidden="true"></div>

            <div class="contenido-cta">
                <Insignia variante="destacada">
                    <span style="color: var(--color-acento);">EMERGENCIA 24/7</span>
                </Insignia>

                <h2 class="titulo-cta">¿Tu Cocina o Refrigeración se Detuvo? Recupera tu Operación Hoy Mismo</h2>
                
                <p class="subtitulo-cta">
                    Brindamos servicio técnico de respuesta rápida y contratos preventivos para restaurantes, hoteles y cadenas en Washington DC, Virginia y Maryland.
                </p>

                <div class="acciones-cta">
                    <Boton href={datosContacto.telefonoLink} variante="acento" clase="boton-cta-grande">
                        <svg class="boton-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span>Llamar a Emergencias {datosContacto.telefono}</span>
                    </Boton>
                    
                    <Boton href="mailto:{datosContacto.email}" variante="secundario" clase="boton-cta-secundario">
                        <span>Escribir a {datosContacto.email}</span>
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
        padding: 90px 48px;
        color: var(--color-blanco);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: relative;
        overflow: hidden;
        border: none;
        box-shadow: 0 35px 80px -15px rgba(0, 0, 0, 0.35);
    }

    .luz-cta {
        position: absolute;
        width: 420px;
        height: 420px;
        border-radius: 50%;
        filter: blur(90px);
        pointer-events: none;
    }

    .luz-cta-1 {
        top: -120px;
        left: 8%;
        background: radial-gradient(circle, rgba(226, 250, 90, 0.22) 0%, rgba(226, 250, 90, 0) 70%);
    }

    .luz-cta-2 {
        bottom: -120px;
        right: 8%;
        background: radial-gradient(circle, rgba(226, 250, 90, 0.16) 0%, rgba(226, 250, 90, 0) 70%);
    }

    .contenido-cta {
        position: relative;
        z-index: 1;
        max-width: 820px;
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
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.15rem;
        max-width: 640px;
        line-height: 1.65;
    }

    .acciones-cta {
        margin-top: 14px;
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        justify-content: center;
    }

    :global(.boton-cta-grande) {
        padding: 18px 38px !important;
        font-size: 1.05rem !important;
        font-weight: 600 !important;
    }

    :global(.boton-cta-secundario) {
        background-color: rgba(255, 255, 255, 0.12) !important;
        color: #ffffff !important;
        border: none !important;
        padding: 18px 32px !important;
        font-size: 1.02rem !important;
    }

    :global(.boton-cta-secundario:hover) {
        background-color: rgba(255, 255, 255, 0.2) !important;
    }

    .boton-icono {
        width: 20px;
        height: 20px;
    }

    @media (max-width: 768px) {
        .banner-cta-final {
            padding: 55px 24px;
        }

        .acciones-cta {
            flex-direction: column;
            width: 100%;
        }

        :global(.boton-cta-grande),
        :global(.boton-cta-secundario) {
            width: 100%;
            justify-content: center;
        }
    }
</style>
