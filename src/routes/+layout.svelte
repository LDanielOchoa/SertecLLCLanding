<script>
    /**
     * Layout Principal
     * Aplica los estilos globales y envuelve la aplicación con la barra de navegación y el pie de página.
     */
    import '$lib/estilos/global.css';
    import BarraNavegacion from '$lib/componentes/secciones/BarraNavegacion.svelte';
    import PiePagina from '$lib/componentes/secciones/PiePagina.svelte';

    let { children } = $props();
</script>

<svelte:head>
    <title>Solaris Energy - Soluciones Solares Inteligentes</title>
    <meta name="description" content="Energía solar limpia y de alto rendimiento para hogares y empresas. Diseñado con SvelteKit y GSAP." />
</svelte:head>

<div class="aplicacion-contenedor">
    <BarraNavegacion />
    
    <main>
        {@render children()}
    </main>

    <PiePagina />
</div>

<style>
    .aplicacion-contenedor {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
    }
</style>
