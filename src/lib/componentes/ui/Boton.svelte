<script>
    /**
     * Componente Botón Reutilizable
     * Principio de Responsabilidad Única: Renderizar botones y enlaces consistentes.
     */
    let { 
        href = '', 
        variante = 'acento', 
        tipo = 'button', 
        onClick = () => {},
        clase = '',
        children
    } = $props();
</script>

{#if href}
    <a 
        {href} 
        class="boton boton-{variante} {clase}"
    >
        {#if children}
            {@render children()}
        {/if}
    </a>
{:else}
    <button 
        type={tipo} 
        onclick={onClick} 
        class="boton boton-{variante} {clase}"
    >
        {#if children}
            {@render children()}
        {/if}
    </button>
{/if}

<style>
    .boton {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 12px 26px;
        border-radius: var(--radio-pill);
        font-family: var(--fuente-cuerpo);
        font-size: 0.95rem;
        font-weight: 500;
        cursor: pointer;
        border: 1px solid transparent;
        transition: var(--transicion-fluida);
        text-decoration: none;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
    }

    .boton-acento {
        background-color: var(--color-acento);
        color: var(--color-oscuro);
        border-color: var(--color-acento);
        box-shadow: 0 4px 15px rgba(226, 250, 90, 0.25);
    }

    .boton-acento:hover {
        background-color: var(--color-acento-hover);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(226, 250, 90, 0.45);
    }

    .boton-oscuro {
        background-color: var(--color-oscuro);
        color: var(--color-blanco);
        border-color: var(--color-oscuro);
    }

    .boton-oscuro:hover {
        background-color: var(--color-oscuro-hover);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }

    .boton-secundario {
        background-color: var(--color-blanco);
        color: var(--color-oscuro);
        border-color: var(--color-borde);
    }

    .boton-secundario:hover {
        background-color: var(--color-superficie);
        border-color: var(--color-borde-fuerte);
        transform: translateY(-2px);
    }

    :global(.boton-icono) {
        width: 18px;
        height: 18px;
        transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .boton:hover :global(.boton-icono) {
        transform: translateX(4px);
    }
</style>
