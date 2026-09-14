<script>
    /**
     * Componente BarraNavegacion
     * Responsabilidad: Gestión de la navegación flotante, efectos de scroll y menú móvil.
     */
    import { onMount } from 'svelte';
    import { datosNavegacion } from '$lib/datos/datos-sitio.js';
    import Boton from '$lib/componentes/ui/Boton.svelte';

    let menuAbierto = $state(false);
    let haHechoScroll = $state(false);

    onMount(() => {
        const manejarScroll = () => {
            haHechoScroll = window.scrollY > 40;
        };

        window.addEventListener('scroll', manejarScroll, { passive: true });
        return () => window.removeEventListener('scroll', manejarScroll);
    });

    function alternarMenu() {
        menuAbierto = !menuAbierto;
    }

    function cerrarMenu() {
        menuAbierto = false;
    }
</script>

<header class="barra-navegacion-envoltorio">
    <nav class="barra-navegacion" class:con-scroll={haHechoScroll} aria-label="Navegación principal">
        <!-- Logo -->
        <a href="#inicio" class="logo-sitio" onclick={cerrarMenu} aria-label="Solaris Energy Inicio">
            <div class="logo-icono-envoltorio">
                <svg class="logo-icono" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="5"></circle>
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </div>
            <span>Solaris</span>
        </a>

        <!-- Enlaces Desktop -->
        <div class="enlaces-navegacion">
            {#each datosNavegacion as enlace}
                <a href={enlace.href} class="enlace-nav">
                    {enlace.etiqueta}
                </a>
            {/each}
        </div>

        <!-- Botón CTA y Menú Hamburguesa -->
        <div class="acciones-nav">
            <Boton href="#consulta" variante="acento" clase="boton-nav-cta">
                <span>Solicitar Consulta</span>
                <svg class="boton-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </Boton>

            <button 
                type="button" 
                class="menu-movil-boton" 
                onclick={alternarMenu} 
                aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={menuAbierto}
            >
                {#if menuAbierto}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                {:else}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="4" y1="12" x2="20" y2="12"></line>
                        <line x1="4" y1="6" x2="20" y2="6"></line>
                        <line x1="4" y1="18" x2="20" y2="18"></line>
                    </svg>
                {/if}
            </button>
        </div>

        <!-- Menú Móvil Desplegable -->
        {#if menuAbierto}
            <div class="menu-movil-desplegable">
                {#each datosNavegacion as enlace}
                    <a href={enlace.href} class="enlace-nav-movil" onclick={cerrarMenu}>
                        {enlace.etiqueta}
                    </a>
                {/each}
                <div style="padding-top: 10px;">
                    <Boton href="#consulta" variante="acento" onClick={cerrarMenu} clase="w-full">
                        <span>Solicitar Consulta</span>
                    </Boton>
                </div>
            </div>
        {/if}
    </nav>
</header>

<style>
    .barra-navegacion-envoltorio {
        position: fixed;
        top: 20px;
        left: 0;
        right: 0;
        z-index: 1000;
        display: flex;
        justify-content: center;
        pointer-events: none;
        padding: 0 16px;
    }

    .barra-navegacion {
        pointer-events: auto;
        width: 100%;
        max-width: 980px;
        background-color: var(--color-vidrio);
        backdrop-filter: var(--filtro-desenfoque);
        -webkit-backdrop-filter: var(--filtro-desenfoque);
        border: 1px solid var(--color-vidrio-borde);
        border-radius: var(--radio-pill);
        padding: 7px 10px 7px 22px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: var(--sombra-flotante);
        transition: var(--transicion-fluida);
        position: relative;
    }

    .barra-navegacion.con-scroll {
        background-color: rgba(255, 255, 255, 0.88);
        border-color: rgba(17, 17, 17, 0.12);
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.09);
    }

    .logo-sitio {
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: var(--fuente-titulos);
        font-weight: 700;
        font-size: 1.15rem;
        color: var(--color-oscuro);
        letter-spacing: -0.02em;
    }

    .logo-icono-envoltorio {
        width: 32px;
        height: 32px;
        background-color: var(--color-oscuro);
        color: var(--color-acento);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo-icono {
        width: 18px;
        height: 18px;
    }

    .enlaces-navegacion {
        display: flex;
        align-items: center;
        gap: 26px;
    }

    .enlace-nav {
        font-size: 0.92rem;
        font-weight: 500;
        color: var(--color-texto-secundario);
        transition: color 0.2s ease, transform 0.2s ease;
        padding: 6px 4px;
    }

    .enlace-nav:hover {
        color: var(--color-oscuro);
        transform: translateY(-1px);
    }

    .acciones-nav {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .menu-movil-boton {
        display: none;
        background: transparent;
        border: none;
        color: var(--color-oscuro);
        padding: 8px;
        cursor: pointer;
        border-radius: 50%;
    }

    .menu-movil-desplegable {
        position: absolute;
        top: calc(100% + 12px);
        left: 0;
        right: 0;
        background: var(--color-blanco);
        border: 1px solid var(--color-borde);
        border-radius: var(--radio-xl);
        padding: 24px;
        box-shadow: 0 20px 45px rgba(0, 0, 0, 0.12);
        display: flex;
        flex-direction: column;
        gap: 16px;
        pointer-events: auto;
        animation: entradaMenu 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    @keyframes entradaMenu {
        from {
            opacity: 0;
            transform: translateY(-10px) scale(0.98);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    .enlace-nav-movil {
        font-size: 1.05rem;
        font-weight: 600;
        color: var(--color-oscuro);
        padding: 8px 0;
        border-bottom: 1px solid var(--color-borde);
    }

    @media (max-width: 768px) {
        .enlaces-navegacion {
            display: none;
        }
        .menu-movil-boton {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .barra-navegacion {
            padding: 6px 8px 6px 16px;
        }
        :global(.boton-nav-cta) {
            padding: 9px 18px !important;
            font-size: 0.85rem !important;
        }
    }
</style>
