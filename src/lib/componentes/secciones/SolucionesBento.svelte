<script>
    /**
     * Componente SolucionesBento
     * Responsabilidad: Presentar la gama de 8 servicios comerciales de SERTEC LLC con diseño Bento limpio sin bordes.
     */
    import { onMount } from 'svelte';
    import { datosSoluciones } from '$lib/datos/datos-sitio.js';
    import { animarAparicionScroll, configurarEfectoGlow } from '$lib/animaciones/animaciones-gsap.js';
    import Insignia from '$lib/componentes/ui/Insignia.svelte';

    let contenedorBento;

    onMount(() => {
        const tarjetas = contenedorBento.querySelectorAll('.tarjeta-bento');
        animarAparicionScroll(tarjetas, { stagger: 0.08 });
        tarjetas.forEach(tarjeta => configurarEfectoGlow(tarjeta));
    });
</script>

<section class="seccion-espaciado seccion-soluciones" bind:this={contenedorBento} id="servicios">
    <div class="contenedor">
        <!-- Encabezado Centrado -->
        <div class="encabezado-seccion-centro">
            <Insignia variante="seccion">Nuestros Servicios</Insignia>
            <h2>Soluciones Integrales para Restaurantes y Equipos Comerciales</h2>
            <p>Mantenimiento preventivo, reparación de emergencia e instalación con técnicos certificados.</p>
        </div>

        <!-- Cuadrícula Bento de 8 Servicios -->
        <div class="cuadricula-soluciones">
            {#each datosSoluciones as solucion}
                <div class="tarjeta-bento">
                    <div class="efecto-resplandor" aria-hidden="true"></div>
                    
                    <div class="tarjeta-contenido">
                        <div class="icono-contenedor">
                            {#if solucion.icono === 'frio'}
                                <svg class="icono-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6M2 12h20"></path>
                                </svg>
                            {:else if solucion.icono === 'fuego'}
                                <svg class="icono-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                                </svg>
                            {:else if solucion.icono === 'viento'}
                                <svg class="icono-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
                                </svg>
                            {:else if solucion.icono === 'agua'}
                                <svg class="icono-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                                </svg>
                            {:else if solucion.icono === 'filtro'}
                                <svg class="icono-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                </svg>
                            {:else if solucion.icono === 'tuberia'}
                                <svg class="icono-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="2" y="8" width="20" height="8" rx="2"></rect>
                                    <path d="M6 8V4M18 8V4M6 16v4M18 16v4"></path>
                                </svg>
                            {:else if solucion.icono === 'escudo'}
                                <svg class="icono-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            {:else}
                                <svg class="icono-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
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
        max-width: 740px;
        margin: 0 auto 55px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }

    .cuadricula-soluciones {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 22px;
    }

    .tarjeta-bento {
        background-color: var(--color-superficie-card);
        border-radius: var(--radio-xl);
        padding: 34px 26px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: var(--transicion-fluida);
        position: relative;
        overflow: hidden;
        box-shadow: var(--sombra-tarjeta);
    }

    .tarjeta-bento:hover {
        transform: translateY(-5px);
        box-shadow: var(--sombra-hover);
        background-color: var(--color-superficie);
    }

    .efecto-resplandor {
        position: absolute;
        width: 260px;
        height: 260px;
        top: var(--cursor-y, -260px);
        left: var(--cursor-x, -260px);
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, rgba(226, 250, 90, 0.22) 0%, rgba(226, 250, 90, 0) 70%);
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
        width: 50px;
        height: 50px;
        background-color: var(--color-blanco);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 8px;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
        transition: var(--transicion-fluida);
    }

    .tarjeta-bento:hover .icono-contenedor {
        background-color: var(--color-acento);
        transform: scale(1.06);
    }

    .icono-svg {
        width: 22px;
        height: 22px;
        stroke: var(--color-oscuro);
    }

    .titulo-solucion {
        font-size: 1.18rem;
        font-weight: 600;
        color: var(--color-oscuro);
    }

    .descripcion-solucion {
        font-size: 0.92rem;
        line-height: 1.55;
    }

    @media (max-width: 1200px) {
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
