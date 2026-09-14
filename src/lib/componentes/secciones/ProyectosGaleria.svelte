<script>
    /**
     * Componente ProyectosGaleria
     * Responsabilidad: Mostrar el catálogo de proyectos recientes con animaciones e interactividad.
     */
    import { onMount } from 'svelte';
    import { datosProyectos } from '$lib/datos/datos-sitio.js';
    import { animarAparicionScroll } from '$lib/animaciones/animaciones-gsap.js';
    import Insignia from '$lib/componentes/ui/Insignia.svelte';

    let contenedorProyectos;

    onMount(() => {
        const tarjetas = contenedorProyectos.querySelectorAll('.tarjeta-proyecto');
        animarAparicionScroll(tarjetas, { stagger: 0.15 });
    });
</script>

<section class="seccion-espaciado seccion-proyectos" bind:this={contenedorProyectos} id="proyectos">
    <div class="contenedor">
        <!-- Encabezado Centrado -->
        <div class="encabezado-seccion-centro">
            <Insignia variante="seccion">Proyectos Recientes</Insignia>
            <h2>Instalaciones Solares Recientes</h2>
            <p>Conoce algunos de nuestros casos de éxito residenciales y comerciales con ingeniería de primer nivel.</p>
        </div>

        <!-- Cuadrícula de Proyectos -->
        <div class="cuadricula-proyectos">
            {#each datosProyectos as proyecto}
                <article class="tarjeta-proyecto">
                    <div class="imagen-contenedor">
                        <img 
                            src={proyecto.imagen} 
                            alt={proyecto.titulo} 
                            class="imagen-proyecto"
                            loading="lazy"
                        >
                        <span class="badge-categoria">{proyecto.categoria}</span>
                    </div>

                    <div class="cuerpo-proyecto">
                        <h3 class="titulo-proyecto">{proyecto.titulo}</h3>
                        <p class="descripcion-proyecto">{proyecto.descripcion}</p>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>

<style>
    .seccion-proyectos {
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

    .cuadricula-proyectos {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 32px;
    }

    .tarjeta-proyecto {
        background-color: var(--color-blanco);
        border: 1px solid var(--color-borde);
        border-radius: var(--radio-2xl);
        overflow: hidden;
        transition: var(--transicion-fluida);
        display: flex;
        flex-direction: column;
        box-shadow: var(--sombra-tarjeta);
    }

    .tarjeta-proyecto:hover {
        transform: translateY(-6px);
        border-color: var(--color-borde-fuerte);
        box-shadow: var(--sombra-flotante);
    }

    .imagen-contenedor {
        width: 100%;
        height: 270px;
        position: relative;
        overflow: hidden;
        background-color: var(--color-superficie);
    }

    .imagen-proyecto {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .tarjeta-proyecto:hover .imagen-proyecto {
        transform: scale(1.06);
    }

    .badge-categoria {
        position: absolute;
        bottom: 16px;
        left: 16px;
        background-color: rgba(17, 17, 17, 0.85);
        color: var(--color-acento);
        font-size: 0.78rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        padding: 6px 14px;
        border-radius: var(--radio-pill);
        backdrop-filter: var(--filtro-desenfoque);
    }

    .cuerpo-proyecto {
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .titulo-proyecto {
        font-size: 1.35rem;
        font-weight: 600;
        color: var(--color-oscuro);
    }

    .descripcion-proyecto {
        font-size: 0.95rem;
        line-height: 1.6;
    }

    @media (max-width: 860px) {
        .cuadricula-proyectos {
            grid-template-columns: 1fr;
        }
        .imagen-contenedor {
            height: 220px;
        }
    }
</style>
