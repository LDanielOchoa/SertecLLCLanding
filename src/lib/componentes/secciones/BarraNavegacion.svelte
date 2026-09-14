<script>
    /**
     * Componente BarraNavegacion
     * Responsabilidad: Gestión de la navegación flotante para SERTEC LLC con diseño limpio y sin bordes.
     */
    import { onMount } from 'svelte';
    import { datosNavegacion, datosContacto } from '$lib/datos/datos-sitio.js';
    import Boton from '$lib/componentes/ui/Boton.svelte';

    let menuAbierto = $state(false);
    let haHechoScroll = $state(false);

    onMount(() => {
        const manejarScroll = () => {
            haHechoScroll = window.scrollY > 30;
        };

        const manejarTeclado = (e) => {
            if (e.key === 'Escape' && menuAbierto) {
                menuAbierto = false;
                document.body.style.overflow = '';
            }
        };

        window.addEventListener('scroll', manejarScroll, { passive: true });
        window.addEventListener('keydown', manejarTeclado);

        return () => {
            window.removeEventListener('scroll', manejarScroll);
            window.removeEventListener('keydown', manejarTeclado);
        };
    });

    function alternarMenu() {
        menuAbierto = !menuAbierto;
        document.body.style.overflow = menuAbierto ? 'hidden' : '';
    }

    function cerrarMenu() {
        menuAbierto = false;
        document.body.style.overflow = '';
    }
</script>

<header class="barra-navegacion-envoltorio">
    <nav class="barra-navegacion" class:con-scroll={haHechoScroll} aria-label="Navegación principal">
        <!-- Logo SERTEC LLC -->
        <a href="#inicio" class="logo-sitio" onclick={cerrarMenu} aria-label="SERTEC LLC Inicio">
            <div class="logo-icono-envoltorio">
                <svg class="logo-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
            </div>
            <span class="logo-texto">SERTEC<span class="logo-sufijo">LLC</span></span>
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
            <Boton href={datosContacto.telefonoLink} variante="acento" clase="boton-nav-cta">
                <svg class="boton-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>{datosContacto.telefono}</span>
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
                    <Boton href={datosContacto.telefonoLink} variante="acento" onClick={cerrarMenu} clase="w-full">
                        <span>Llamar Emergencias: {datosContacto.telefono}</span>
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
        max-width: 1020px;
        background-color: var(--color-vidrio);
        backdrop-filter: var(--filtro-desenfoque);
        -webkit-backdrop-filter: var(--filtro-desenfoque);
        border-radius: var(--radio-pill);
        padding: 6px 8px 6px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: var(--sombra-flotante);
        transition: var(--transicion-fluida);
        position: relative;
    }

    .barra-navegacion.con-scroll {
        background-color: rgba(255, 255, 255, 0.94);
        box-shadow: 0 16px 38px rgba(0, 0, 0, 0.08);
    }

    .logo-sitio {
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: var(--fuente-titulos);
        font-weight: 700;
        font-size: 1.2rem;
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
        width: 17px;
        height: 17px;
    }

    .logo-sufijo {
        font-size: 0.75rem;
        font-weight: 700;
        background-color: var(--color-acento);
        color: var(--color-oscuro);
        padding: 2px 6px;
        border-radius: 6px;
        margin-left: 4px;
    }

    .enlaces-navegacion {
        display: flex;
        align-items: center;
        gap: 24px;
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
        border-radius: var(--radio-xl);
        padding: 24px;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        display: flex;
        flex-direction: column;
        gap: 16px;
        pointer-events: auto;
    }

    .enlace-nav-movil {
        font-size: 1.05rem;
        font-weight: 600;
        color: var(--color-oscuro);
        padding: 8px 0;
        border-bottom: 1px solid var(--color-superficie);
    }

    @media (max-width: 820px) {
        .enlaces-navegacion {
            display: none;
        }
        .menu-movil-boton {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        :global(.boton-nav-cta) {
            padding: 9px 18px !important;
            font-size: 0.85rem !important;
        }
    }
</style>
