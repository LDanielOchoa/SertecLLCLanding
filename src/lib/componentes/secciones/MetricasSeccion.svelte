<script>
    /**
     * Componente MetricasSeccion
     * Responsabilidad: Mostrar trayectoria, credibilidad y métricas de SERTEC LLC.
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
        animarAparicionScroll(tarjetas, { stagger: 0.12 });
    });
</script>

<section class="seccion-espaciado seccion-nosotros" bind:this={seccionMetricas} id="nosotros">
    <div class="contenedor">
        <!-- Encabezado de Sección -->
        <div class="cuadricula-nosotros-superior">
            <div class="bloque-titulo">
                <Insignia variante="seccion">Sobre Nosotros</Insignia>
                <h2>Tu Socio Integral en Mantenimiento de Cocinas Comerciales</h2>
            </div>
            <p class="texto-nosotros">
                Durante más de 17 años, SERTEC LLC ha sido el aliado de confianza para restaurantes independientes, franquicias nacionales, hoteles, residencias y escuelas en toda el área de Washington DC, Virginia y Maryland. Ofrecemos servicio el mismo día, prevención sin paradas operativas y garantía total en cada intervención.
            </p>
        </div>

        <!-- Tarjetas de Métricas Sin Bordes Duros -->
        <div class="cuadricula-metricas">
            {#each datosMetricas as metrica}
                <div class="tarjeta-metrica">
                    <span 
                        class="numero-metrica" 
                        data-meta={metrica.meta} 
                        data-sufijo={metrica.sufijo}
                    >
                        0{metrica.sufijo}
                    </span>
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
    }

    .cuadricula-nosotros-superior {
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 45px;
        align-items: center;
        margin-bottom: 50px;
    }

    .bloque-titulo {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .texto-nosotros {
        font-size: 1.12rem;
        line-height: 1.65;
    }

    .cuadricula-metricas {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }

    .tarjeta-metrica {
        background-color: var(--color-superficie-card);
        border-radius: var(--radio-xl);
        padding: 38px 30px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        transition: var(--transicion-fluida);
        box-shadow: var(--sombra-tarjeta);
    }

    .tarjeta-metrica:hover {
        transform: translateY(-4px);
        box-shadow: var(--sombra-hover);
        background-color: var(--color-superficie);
    }

    .numero-metrica {
        font-family: var(--fuente-titulos);
        font-size: clamp(2.8rem, 4.2vw, 3.6rem);
        font-weight: 700;
        color: var(--color-oscuro);
        line-height: 1;
        letter-spacing: -0.04em;
    }

    .etiqueta-metrica {
        font-size: 1.15rem;
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
