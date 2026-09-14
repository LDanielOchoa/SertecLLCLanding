<script>
    /**
     * Layout Principal - SERTEC LLC
     * Aplica los estilos globales y envuelve la aplicación con la barra de navegación y el pie de página.
     */
    import '$lib/estilos/global.css';
    import BarraNavegacion from '$lib/componentes/secciones/BarraNavegacion.svelte';
    import PiePagina from '$lib/componentes/secciones/PiePagina.svelte';

    let { children } = $props();
</script>

<svelte:head>
    <title>SERTEC LLC | Mantenimiento y Reparación de Equipos para Restaurantes 24/7</title>
    <meta name="description" content="Servicio de emergencia 24/7 y mantenimiento preventivo para cocinas comerciales, refrigeración, HVAC, fontanería y trampas de grasa en DC, Virginia y Maryland." />
    <meta name="keywords" content="reparación de cocinas comerciales, refrigeración comercial DC, mantenimiento restaurantes Alexandria VA, HVAC comercial, trampas de grasa, backflow prevention" />
    <meta property="og:title" content="SERTEC LLC - Mantenimiento y Reparación de Equipos de Cocina Comercial" />
    <meta property="og:description" content="Atención de emergencia 24/7 el mismo día para cadenas de restaurantes, hoteles y cocinas industriales en DC, VA y MD." />
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
        background-color: var(--color-blanco);
    }

    main {
        flex: 1;
    }
</style>
