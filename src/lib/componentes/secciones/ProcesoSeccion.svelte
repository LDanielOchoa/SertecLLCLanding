<script>
    /**
     * Componente ProcesoSeccion
     * Responsabilidad: Describir el proceso en 4 pasos con animaciones escalonadas de GSAP.
     */
    import { onMount } from 'svelte';
    import { datosProceso } from '$lib/datos/datos-sitio.js';
    import { animarAparicionScroll } from '$lib/animaciones/animaciones-gsap.js';
    import Insignia from '$lib/componentes/ui/Insignia.svelte';

    let contenedorProceso;

    onMount(() => {
        const tarjetas = contenedorProceso.querySelectorAll('.tarjeta-paso');
        animarAparicionScroll(tarjetas, { stagger: 0.15 });
    });
</script>

<section class="seccion-espaciado seccion-proceso" bind:this={contenedorProceso}>
    <div class="contenedor">
        <!-- Encabezado Centrado -->
        <div class="encabezado-seccion-centro">
            <Insignia variante="seccion">Cómo Funciona</Insignia>
            <h2>De la Consulta a la Energía Limpia en 4 Simples Pasos</h2>
            <p>Hacemos que el cambio hacia la autosuficiencia solar sea transparente, ágil y garantizado.</p>
        </div>

        <!-- Cuadrícula de 4 Pasos -->
        <div class="cuadricula-proceso">
            {#each datosProceso as paso}
                <div class="tarjeta-paso">
                    <div class="paso-cabecera">
                        <span class="numero-paso">{paso.paso}</span>
                        <div class="paso-linea-decorativa" aria-hidden="true"></div>
                    </div>

                    <h3 class="titulo-paso">{paso.titulo}</h3>

                    <ul class="lista-puntos-paso">
                        {#each paso.puntos as punto}
                            <li class="item-punto">
                                <svg class="icono-check" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span>{punto}</span>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .seccion-proceso {
        background-color: var(--color-blanco);
        border-top: 1px solid var(--color-borde);
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

    .cuadricula-proceso {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
    }

    .tarjeta-paso {
        background-color: var(--color-superficie-card);
        border: 1px solid var(--color-borde);
        border-radius: var(--radio-xl);
        padding: 34px 26px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        transition: var(--transicion-fluida);
        position: relative;
    }

    .tarjeta-paso:hover {
        background-color: var(--color-blanco);
        border-color: var(--color-borde-fuerte);
        transform: translateY(-5px);
        box-shadow: var(--sombra-flotante);
    }

    .paso-cabecera {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .numero-paso {
        font-family: var(--fuente-titulos);
        font-size: 2.4rem;
        font-weight: 700;
        color: var(--color-oscuro);
        line-height: 1;
        letter-spacing: -0.04em;
    }

    .paso-linea-decorativa {
        width: 32px;
        height: 2px;
        background-color: var(--color-acento);
        border-radius: 2px;
    }

    .titulo-paso {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--color-oscuro);
    }

    .lista-puntos-paso {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 4px;
    }

    .item-punto {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        font-size: 0.92rem;
        color: var(--color-texto-secundario);
        line-height: 1.45;
    }

    .icono-check {
        width: 17px;
        height: 17px;
        color: var(--color-oscuro);
        flex-shrink: 0;
        margin-top: 2px;
    }

    @media (max-width: 1024px) {
        .cuadricula-proceso {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 640px) {
        .cuadricula-proceso {
            grid-template-columns: 1fr;
        }
    }
</style>
