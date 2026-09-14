<script>
    /**
     * Componente FaqSeccion
     * Responsabilidad: Acordeón accesible de preguntas frecuentes con animación fluida.
     */
    import { onMount } from 'svelte';
    import { datosFaqs } from '$lib/datos/datos-sitio.js';
    import { animarAparicionScroll } from '$lib/animaciones/animaciones-gsap.js';
    import Insignia from '$lib/componentes/ui/Insignia.svelte';
    import Boton from '$lib/componentes/ui/Boton.svelte';

    let itemAbierto = $state(0);
    let contenedorFaq;

    function alternarItem(indice) {
        itemAbierto = itemAbierto === indice ? -1 : indice;
    }

    onMount(() => {
        const items = contenedorFaq.querySelectorAll('.acordeon-item');
        animarAparicionScroll(items, { stagger: 0.1 });
    });
</script>

<section class="seccion-espaciado seccion-faq" bind:this={contenedorFaq} id="faq">
    <div class="contenedor cuadricula-faq">
        <!-- Tarjeta de Soporte Izquierda -->
        <div class="tarjeta-soporte">
            <Insignia variante="seccion">Preguntas Frecuentes</Insignia>
            <h2>Resolvemos tus Dudas</h2>
            <p>
                ¿Tienes preguntas sobre financiamiento, ahorro estimado o el tiempo de instalación? Nuestro equipo de ingenieros está listo para orientarte.
            </p>
            <div style="margin-top: 10px;">
                <Boton href="#consulta" variante="acento">
                    <span>Solicitar Consulta</span>
                    <svg class="boton-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </Boton>
            </div>
        </div>

        <!-- Lista de Acordeones -->
        <div class="lista-acordeon">
            {#each datosFaqs as faq, i}
                <div class="acordeon-item" class:abierto={itemAbierto === i}>
                    <button 
                        type="button" 
                        class="acordeon-encabezado" 
                        onclick={() => alternarItem(i)}
                        aria-expanded={itemAbierto === i}
                    >
                        <span>{faq.pregunta}</span>
                        <div class="icono-acordeon-envoltorio">
                            <span class="icono-acordeon">+</span>
                        </div>
                    </button>

                    <div class="acordeon-cuerpo" style="max-height: {itemAbierto === i ? '280px' : '0px'}">
                        <p class="acordeon-respuesta">{faq.respuesta}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .seccion-faq {
        background-color: var(--color-blanco);
        border-top: 1px solid var(--color-borde);
    }

    .cuadricula-faq {
        display: grid;
        grid-template-columns: 1fr 1.4fr;
        gap: 60px;
        align-items: flex-start;
    }

    .tarjeta-soporte {
        background-color: var(--color-superficie-card);
        border: 1px solid var(--color-borde);
        border-radius: var(--radio-2xl);
        padding: 40px 34px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        position: sticky;
        top: 120px;
    }

    .lista-acordeon {
        display: flex;
        flex-direction: column;
    }

    .acordeon-item {
        border-bottom: 1px solid var(--color-borde);
        padding: 22px 0;
        transition: border-color 0.3s ease;
    }

    .acordeon-item:first-child {
        padding-top: 0;
    }

    .acordeon-encabezado {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: none;
        border: none;
        cursor: pointer;
        text-align: left;
        font-family: var(--fuente-titulos);
        font-size: 1.18rem;
        font-weight: 600;
        color: var(--color-oscuro);
        padding: 0;
        gap: 16px;
    }

    .icono-acordeon-envoltorio {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: var(--color-superficie);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        transition: var(--transicion-fluida);
    }

    .icono-acordeon {
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 1;
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .acordeon-item.abierto .icono-acordeon {
        transform: rotate(45deg);
    }

    .acordeon-item.abierto .icono-acordeon-envoltorio {
        background-color: var(--color-acento);
    }

    .acordeon-cuerpo {
        overflow: hidden;
        transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .acordeon-respuesta {
        padding-top: 14px;
        font-size: 0.98rem;
        line-height: 1.6;
        color: var(--color-texto-secundario);
    }

    @media (max-width: 900px) {
        .cuadricula-faq {
            grid-template-columns: 1fr;
            gap: 40px;
        }
        .tarjeta-soporte {
            position: static;
        }
    }
</style>
