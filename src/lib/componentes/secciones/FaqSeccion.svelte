<script>
    /**
     * Componente FaqSeccion
     * Responsabilidad: Acordeón accesible de preguntas frecuentes con diseño limpio y animación fluida.
     */
    import { onMount } from 'svelte';
    import { datosFaqs, datosContacto } from '$lib/datos/datos-sitio.js';
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
            <h2>Resolvemos tus Dudas Técnicas</h2>
            <p>
                ¿Tienes preguntas sobre tiempos de respuesta, contratos de mantenimiento preventivo o certificación de equipos? Nuestro equipo está listo para ayudarte.
            </p>
            
            <div class="caja-contacto-rapido">
                <span class="etiqueta-emergencia">Línea de Emergencia 24/7</span>
                <a href={datosContacto.telefonoLink} class="enlace-telefono-emergencia">{datosContacto.telefono}</a>
                <span class="texto-cobertura">Cobertura en DC, VA y Maryland</span>
            </div>

            <div style="margin-top: 5px;">
                <Boton href={datosContacto.telefonoLink} variante="acento">
                    <span>Llamar Ahora</span>
                    <svg class="boton-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
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
    }

    .cuadricula-faq {
        display: grid;
        grid-template-columns: 1fr 1.4fr;
        gap: 60px;
        align-items: flex-start;
    }

    .tarjeta-soporte {
        background-color: var(--color-superficie);
        border: none;
        border-radius: var(--radio-2xl);
        padding: 42px 36px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        position: sticky;
        top: 120px;
        box-shadow: var(--sombra-tarjeta);
    }

    .caja-contacto-rapido {
        background-color: var(--color-blanco);
        border-radius: var(--radio-lg);
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .etiqueta-emergencia {
        font-size: 0.82rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-texto-atenuado);
    }

    .enlace-telefono-emergencia {
        font-family: var(--fuente-titulos);
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--color-oscuro);
        transition: color 0.2s ease;
    }

    .enlace-telefono-emergencia:hover {
        color: #000;
    }

    .texto-cobertura {
        font-size: 0.85rem;
        color: var(--color-texto-secundario);
    }

    .lista-acordeon {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .acordeon-item {
        background-color: var(--color-superficie);
        border-radius: var(--radio-lg);
        padding: 24px 28px;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }

    .acordeon-item.abierto {
        background-color: var(--color-superficie-card);
        box-shadow: var(--sombra-tarjeta);
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
        font-size: 1.15rem;
        font-weight: 600;
        color: var(--color-oscuro);
        padding: 0;
        gap: 16px;
    }

    .icono-acordeon-envoltorio {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: var(--color-blanco);
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
        line-height: 1.65;
        color: var(--color-texto-secundario);
    }

    .boton-icono {
        width: 18px;
        height: 18px;
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
