<script>
    /**
     * Componente HeroSeccion
     * Responsabilidad: Presentación de alto impacto para SERTEC LLC con GSAP y diseño limpio sin bordes.
     */
    import { onMount } from 'svelte';
    import { datosHero, datosContacto } from '$lib/datos/datos-sitio.js';
    import { animarHero } from '$lib/animaciones/animaciones-gsap.js';
    import Boton from '$lib/componentes/ui/Boton.svelte';
    import Insignia from '$lib/componentes/ui/Insignia.svelte';

    let contenedorHero;

    onMount(() => {
        animarHero(contenedorHero);
    });
</script>

<section class="seccion-hero" bind:this={contenedorHero} id="inicio">
    <!-- Luz de Fondo Acento -->
    <div class="luz-fondo-acento" aria-hidden="true"></div>

    <div class="contenedor hero-contenido">
        <!-- Insignia Social Proof -->
        <div data-animar-hero>
            <Insignia variante="social">
                <div class="avatares-grupo">
                    {#each datosHero.pruebaSocial.avatares as avatar, i}
                        <img src={avatar} alt="Cliente SERTEC {i + 1}" class="avatar-mini" width="28" height="28" loading="eager">
                    {/each}
                </div>
                <span class="texto-social">{datosHero.pruebaSocial.texto}</span>
            </Insignia>
        </div>

        <!-- Título Principal -->
        <h1 class="hero-titulo" data-animar-hero>
            {datosHero.titulo}
        </h1>

        <!-- Subtítulo -->
        <p class="hero-subtitulo" data-animar-hero>
            {datosHero.subtitulo}
        </p>

        <!-- Botones de Acción -->
        <div class="hero-acciones" data-animar-hero>
            <Boton href={datosContacto.telefonoLink} variante="acento">
                <svg class="boton-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>{datosHero.ctaPrincipal}</span>
            </Boton>
            <Boton href="#servicios" variante="secundario">
                <span>{datosHero.ctaSecundario}</span>
            </Boton>
        </div>

        <!-- Imagen Visual de Cocina Comercial / Equipos -->
        <div class="hero-visual-contenedor">
            <img 
                src={datosHero.imagenPrincipal} 
                alt="Mantenimiento y equipos de cocina comercial de alto volumen" 
                class="hero-visual-imagen"
                loading="eager"
            >
            <div class="hero-badge-flotante">
                <div class="punto-en-vivo"></div>
                <span>Técnicos de guardia disponibles hoy en DC / VA / MD</span>
            </div>
        </div>
    </div>
</section>

<style>
    .seccion-hero {
        padding-top: 140px;
        padding-bottom: 70px;
        position: relative;
        overflow: hidden;
        background-color: var(--color-blanco);
    }

    .luz-fondo-acento {
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        width: 750px;
        height: 420px;
        background: radial-gradient(circle, rgba(226, 250, 90, 0.28) 0%, rgba(226, 250, 90, 0.04) 50%, rgba(255, 255, 255, 0) 75%);
        filter: blur(60px);
        pointer-events: none;
        z-index: 0;
    }

    .hero-contenido {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .avatares-grupo {
        display: flex;
        align-items: center;
    }

    .avatar-mini {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 2px solid var(--color-blanco);
        margin-left: -8px;
        object-fit: cover;
    }

    .avatar-mini:first-child {
        margin-left: 0;
    }

    .texto-social {
        font-size: 0.88rem;
        font-weight: 500;
        color: var(--color-oscuro);
    }

    .hero-titulo {
        max-width: 920px;
        margin-top: 24px;
        margin-bottom: 20px;
        font-weight: 500;
    }

    .hero-subtitulo {
        max-width: 680px;
        margin-bottom: 36px;
        font-size: clamp(1.05rem, 1.5vw, 1.22rem);
        color: var(--color-texto-secundario);
    }

    .hero-acciones {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 50px;
    }

    .hero-visual-contenedor {
        width: 100%;
        max-width: 1200px;
        border-radius: var(--radio-2xl);
        overflow: hidden;
        box-shadow: 0 30px 70px -20px rgba(0, 0, 0, 0.12);
        position: relative;
        background-color: var(--color-superficie);
    }

    .hero-visual-imagen {
        width: 100%;
        height: 520px;
        object-fit: cover;
        display: block;
        transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .hero-visual-contenedor:hover .hero-visual-imagen {
        transform: scale(1.02);
    }

    .hero-badge-flotante {
        position: absolute;
        bottom: 24px;
        left: 24px;
        background: rgba(15, 15, 17, 0.85);
        color: var(--color-blanco);
        backdrop-filter: var(--filtro-desenfoque);
        padding: 10px 20px;
        border-radius: var(--radio-pill);
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.88rem;
        font-weight: 500;
    }

    .punto-en-vivo {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--color-acento);
        box-shadow: 0 0 10px var(--color-acento);
        animation: pulsoPunto 2s infinite;
    }

    @keyframes pulsoPunto {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.4; transform: scale(1.3); }
    }

    @media (max-width: 768px) {
        .seccion-hero {
            padding-top: 105px;
            padding-bottom: 45px;
        }
        .hero-visual-imagen {
            height: 320px;
        }
        .hero-acciones {
            flex-direction: column;
            width: 100%;
            gap: 12px;
        }
        .hero-acciones :global(.boton) {
            width: 100%;
        }
        .hero-badge-flotante {
            left: 12px;
            right: 12px;
            bottom: 12px;
            font-size: 0.78rem;
            justify-content: center;
        }
    }
</style>
