<script>
    /**
     * Componente MetricasSeccion
     * Responsabilidad: Mostrar información sobre nosotros y contadores animados con GSAP.
     */
    import { onMount } from 'svelte';
    import { datosMetricas } from '$lib/datos/datos-sitio.js';
    import { animarContadores, animarAparicionScroll } from '$lib/animaciones/animaciones-gsap.js';
    import Insignia from '$lib/componentes/ui/Insignia.svelte';

    let seccionMetricas;

    onMount(() => {
        const elementosConteo = seccionMetricas.querySelectorAll('.numero-metrica');
        animarContadores(elementosConteo);

        const tarjetas = seccionMetricas.querySelectorAll('.tarjeta-metrica');
        animarAparicionScroll(tarjetas, { stagger: 0.15 });
    });
</script>

<section class="seccion-espaciado seccion-nosotros" bind:this={seccionMetricas} id="nosotros">
    <div class="contenedor">
        <!-- Encabezado de Sección -->
        <div class="cuadricula-nosotros-superior">
            <div class="bloque-titulo">
                <Insignia variante="seccion">Sobre Nosotros</Insignia>
                <h2>Soluciones Solares Inteligentes para Hogares Modernos</h2>
            </div>
            <p class="texto-nosotros">
                Diseñamos e instalamos sistemas solares de alto rendimiento que ayudan a los propietarios a reducir sus facturas de electricidad y hacer una transición fluida hacia una energía 100% limpia y sostenible.
            </p>
        </div>

        <!-- Tarjetas de Métricas -->
        <div class="cuadricula-metricas">
            {#each datosMetricas as metrica}
                <div class="tarjeta-metrica">
                    <div class="metrica-cabecera">
                        <span 
                            class="numero-metrica" 
                            data-meta={metrica.meta} 
                            data-sufijo={metrica.sufijo}
                        >
                            0{metrica.sufijo}
                        </span>
                    </div>
                    <span class="etiqueta-metrica">{metrica.titulo}</span>
                    <p class="descripcion-metrica">{metrica.descripcion}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .seccion-nosotros {
        background-color: var(--color-blanco);
        border-top: 1px solid var(--color-borde);
    }

    .cuadricula-nosotros-superior {
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 40px;
        align-items: center;
        margin-bottom: 50px;
    }

    .bloque-titulo {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .texto-nosotros {
        font-size: 1.15rem;
        line-height: 1.65;
    }

    .cuadricula-metricas {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }

    .tarjeta-metrica {
        background-color: var(--color-superficie-card);
        border: 1px solid var(--color-borde);
        border-radius: var(--radio-xl);
        padding: 36px 30px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        transition: var(--transicion-fluida);
        position: relative;
        overflow: hidden;
    }

    .tarjeta-metrica:hover {
        transform: translateY(-4px);
        border-color: var(--color-borde-fuerte);
        box-shadow: var(--sombra-flotante);
        background-color: var(--color-blanco);
    }

    .numero-metrica {
        font-family: var(--fuente-titulos);
        font-size: clamp(2.6rem, 4vw, 3.4rem);
        font-weight: 700;
        color: var(--color-oscuro);
        line-height: 1;
        letter-spacing: -0.04em;
    }

    .etiqueta-metrica {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--color-oscuro);
    }

    .descripcion-metrica {
        font-size: 0.95rem;
        line-height: 1.55;
    }

    @media (max-width: 1024px) {
        .cuadricula-nosotros-superior {
            grid-template-columns: 1fr;
            gap: 20px;
        }
        .cuadricula-metricas {
            grid-template-columns: 1fr;
        }
    }
</style>
