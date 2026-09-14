<script>
    /**
     * Componente SolucionesBento
     * Responsabilidad: Cuadrícula Bento de 6 soluciones con interacción visual y animación.
     */
    import { onMount } from 'svelte';
    import { datosSoluciones } from '$lib/datos/datos-sitio.js';
    import { animarAparicionScroll, configurarEfectoGlow } from '$lib/animaciones/animaciones-gsap.js';
    import Insignia from '$lib/componentes/ui/Insignia.svelte';

    let contenedorBento;

    onMount(() => {
        const tarjetas = contenedorBento.querySelectorAll('.tarjeta-bento');
        animarAparicionScroll(tarjetas, { stagger: 0.1 });
        tarjetas.forEach(tarjeta => configurarEfectoGlow(tarjeta));
    });
</script>

<section class="seccion-espaciado seccion-soluciones" bind:this={contenedorBento} id="soluciones">
    <div class="contenedor">
        <!-- Encabezado Centrado -->
        <div class="encabezado-seccion-centro">
            <Insignia variante="seccion">Nuestras Soluciones</Insignia>
            <h2>Soluciones Solares Inteligentes Diseñadas para Hogares y Empresas</h2>
            <p>Tecnología de última generación y proyectos a la medida para maximizar el ahorro y la eficiencia.</p>
        </div>

        <!-- Cuadrícula Bento -->
        <div class="cuadricula-soluciones">
            {#each datosSoluciones as solucion}
                <div class="tarjeta-bento">
                    <div class="efecto-resplandor" aria-hidden="true"></div>
                    
                    <div class="tarjeta-contenido">
                        <div class="icono-contenedor">
                            {#if solucion.icono === 'hogar'}
                                <svg class="icono-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                            {:else if solucion.icono === 'ahorro'}
                                <svg class="icono-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="12" y1="1" x2="12" y2="23"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                            {:else if solucion.icono === 'pantalla'}
                                <svg class="icono-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <line x1="8" y1="21" x2="16" y2="21"></line>
                                    <line x1="12" y1="17" x2="12" y2="21"></line>
                                </svg>
                            {:else if solucion.icono === 'rayo'}
                                <svg class="icono-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                </svg>
                            {:else if solucion.icono === 'escudo'}
                                <svg class="icono-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            {:else}
                                <svg class="icono-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                </svg>
                            {/if}
                        </div>

                        <h3 class="titulo-solucion">{solucion.titulo}</h3>
                        <p class="descripcion-solucion">{solucion.descripcion}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .seccion-soluciones {
        background-color: var(--color-blanco);
    }

    .encabezado-seccion-centro {
        text-align: center;
        max-width: 720px;
        margin: 0 auto 55px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }

    .cuadricula-soluciones {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }

    .tarjeta-bento {
        background-color: var(--color-superficie-card);
        border: 1px solid var(--color-borde);
        border-radius: var(--radio-xl);
        padding: 36px 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: var(--transicion-fluida);
        position: relative;
        overflow: hidden;
    }

    .tarjeta-bento:hover {
        transform: translateY(-5px);
        border-color: var(--color-borde-fuerte);
        box-shadow: 0 16px 36px rgba(0, 0, 0, 0.05);
        background-color: var(--color-blanco);
    }

    /* Efecto de Luz / Resplandor interactivo */
    .efecto-resplandor {
        position: absolute;
        width: 250px;
        height: 250px;
        top: var(--cursor-y, -250px);
        left: var(--cursor-x, -250px);
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, rgba(226, 250, 90, 0.25) 0%, rgba(226, 250, 90, 0) 70%);
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
        border-radius: 50%;
    }

    .tarjeta-bento:hover .efecto-resplandor {
        opacity: 1;
    }

    .tarjeta-contenido {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .icono-contenedor {
        width: 52px;
        height: 52px;
        background-color: var(--color-blanco);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--color-borde);
        margin-bottom: 12px;
        box-shadow: var(--sombra-tarjeta);
        transition: var(--transicion-fluida);
    }

    .tarjeta-bento:hover .icono-contenedor {
        background-color: var(--color-acento);
        border-color: var(--color-acento);
        transform: scale(1.06);
    }

    .icono-svg {
        width: 24px;
        height: 24px;
        stroke: var(--color-oscuro);
    }

    .titulo-solucion {
        font-size: 1.3rem;
        font-weight: 600;
        color: var(--color-oscuro);
    }

    .descripcion-solucion {
        font-size: 0.95rem;
        line-height: 1.55;
    }

    @media (max-width: 1024px) {
        .cuadricula-soluciones {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 640px) {
        .cuadricula-soluciones {
            grid-template-columns: 1fr;
        }
    }
</style>
