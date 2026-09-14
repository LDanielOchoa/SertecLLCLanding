<script>
    /**
     * Componente HeroSeccion
     * Responsabilidad: Presentación visual de alto impacto con animación GSAP.
     */
    import { onMount } from 'svelte';
    import { datosHero } from '$lib/datos/datos-sitio.js';
    import { animarHero } from '$lib/animaciones/animaciones-gsap.js';
    import Boton from '$lib/componentes/ui/Boton.svelte';
    import Insignia from '$lib/componentes/ui/Insignia.svelte';

    let contenedorHero;

    onMount(() => {
        animarHero(contenedorHero);
    });
</script>

<section class="seccion-hero" bind:this={contenedorHero} id="inicio">
    <!-- Efecto de Luz de Fondo (Glow Mesh) -->
    <div class="luz-fondo-acento" aria-hidden="true"></div>

    <div class="contenedor hero-contenido">
        <!-- Insignia Social Proof -->
        <div data-animar-hero>
            <Insignia variante="social">
                <div class="avatares-grupo">
                    {#each datosHero.pruebaSocial.avatares as avatar, i}
                        <img src={avatar} alt="Usuario {i + 1}" class="avatar-mini" width="26" height="26" loading="eager">
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
            <Boton href="#consulta" variante="acento">
                <span>{datosHero.ctaPrincipal}</span>
                <svg class="boton-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </Boton>
            <Boton href="#soluciones" variante="secundario">
                <span>{datosHero.ctaSecundario}</span>
            </Boton>
        </div>

        <!-- Imagen Visual Principal con Animación GSAP -->
        <div class="hero-visual-contenedor">
            <div class="hero-visual-brillo" aria-hidden="true"></div>
            <img 
                src={datosHero.imagenPrincipal} 
                alt="Instalación de paneles solares residenciales" 
                class="hero-visual-imagen"
                loading="eager"
            >
        </div>
    </div>
</section>

<style>
    .seccion-hero {
        padding-top: 145px;
        padding-bottom: 70px;
        position: relative;
        overflow: hidden;
        background-color: var(--color-blanco);
    }

    .luz-fondo-acento {
        position: absolute;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
        width: 700px;
        height: 380px;
        background: radial-gradient(circle, rgba(226, 250, 90, 0.28) 0%, rgba(226, 250, 90, 0.05) 50%, rgba(255, 255, 255, 0) 75%);
        filter: blur(50px);
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
        width: 26px;
        height: 26px;
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
        max-width: 880px;
        margin-top: 24px;
        margin-bottom: 20px;
        font-weight: 500;
    }

    .hero-subtitulo {
        max-width: 620px;
        margin-bottom: 36px;
        font-size: clamp(1.05rem, 1.6vw, 1.25rem);
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
        border: 1px solid var(--color-borde);
        box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.08);
        position: relative;
        background-color: var(--color-superficie);
    }

    .hero-visual-brillo {
        position: absolute;
        inset: 0;
        border-radius: var(--radio-2xl);
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5);
        pointer-events: none;
        z-index: 2;
    }

    .hero-visual-imagen {
        width: 100%;
        height: auto;
        display: block;
        transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .hero-visual-contenedor:hover .hero-visual-imagen {
        transform: scale(1.02);
    }

    @media (max-width: 768px) {
        .seccion-hero {
            padding-top: 110px;
            padding-bottom: 45px;
        }
        .hero-acciones {
            flex-direction: column;
            width: 100%;
            gap: 12px;
        }
        .hero-acciones :global(.boton) {
            width: 100%;
        }
    }
</style>
