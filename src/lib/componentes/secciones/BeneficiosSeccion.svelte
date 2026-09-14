<script>
    /**
     * Componente BeneficiosSeccion
     * Responsabilidad: Presentar las ventajas de trabajar con SERTEC LLC con columna lateral sticky y diseño sin bordes.
     */
    import { onMount } from 'svelte';
    import { datosBeneficios, datosContacto } from '$lib/datos/datos-sitio.js';
    import { animarAparicionScroll } from '$lib/animaciones/animaciones-gsap.js';
    import Insignia from '$lib/componentes/ui/Insignia.svelte';
    import Boton from '$lib/componentes/ui/Boton.svelte';

    let contenedorBeneficios;

    onMount(() => {
        const items = contenedorBeneficios.querySelectorAll('.item-beneficio');
        animarAparicionScroll(items, { stagger: 0.1 });
    });
</script>

<section class="seccion-espaciado seccion-beneficios" bind:this={contenedorBeneficios} id="beneficios">
    <div class="contenedor cuadricula-beneficios">
        <!-- Columna Fija (Sticky) -->
        <div class="beneficios-fijo">
            <Insignia variante="seccion">Por Qué Elegir SERTEC</Insignia>
            <h2>La Tranquilidad de Mantener Tu Cocina Siempre Operativa</h2>
            <p>
                En el sector gastronómico y comercial, cada minuto de inactividad cuesta dinero y reputación. Desarrollamos planes a la medida de tu operación para que nunca tengas que preocuparte por fallas imprevistas.
            </p>
            <div style="margin-top: 10px;">
                <Boton href={datosContacto.telefonoLink} variante="oscuro">
                    <span>Hablar con un Ingeniero</span>
                    <svg class="boton-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </Boton>
            </div>
        </div>

        <!-- Lista de Beneficios -->
        <div class="lista-beneficios">
            {#each datosBeneficios as beneficio, i}
                <div class="item-beneficio">
                    <div class="beneficio-numero">0{i + 1}</div>
                    <div class="beneficio-texto">
                        <h3 class="titulo-beneficio">{beneficio.titulo}</h3>
                        <p class="descripcion-beneficio">{beneficio.descripcion}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .seccion-beneficios {
        background-color: var(--color-superficie);
    }

    .cuadricula-beneficios {
        display: grid;
        grid-template-columns: 1fr 1.25fr;
        gap: 65px;
        align-items: flex-start;
    }

    .beneficios-fijo {
        position: sticky;
        top: 120px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .lista-beneficios {
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    .item-beneficio {
        background-color: var(--color-blanco);
        border-radius: var(--radio-xl);
        padding: 30px;
        display: flex;
        align-items: flex-start;
        gap: 22px;
        transition: var(--transicion-fluida);
        box-shadow: var(--sombra-tarjeta);
    }

    .item-beneficio:hover {
        transform: translateX(6px);
        box-shadow: var(--sombra-hover);
    }

    .beneficio-numero {
        font-family: var(--fuente-titulos);
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--color-oscuro);
        background-color: var(--color-acento);
        width: 44px;
        height: 44px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .beneficio-texto {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .titulo-beneficio {
        font-size: 1.22rem;
        font-weight: 600;
        color: var(--color-oscuro);
    }

    .descripcion-beneficio {
        font-size: 0.95rem;
        line-height: 1.55;
    }

    @media (max-width: 1024px) {
        .cuadricula-beneficios {
            grid-template-columns: 1fr;
            gap: 40px;
        }
        .beneficios-fijo {
            position: static;
        }
    }
</style>
