<script>
    /**
     * Componente Botón Reutilizable Accesible
     * Principio de Responsabilidad Única: Renderizar botones y enlaces consistentes.
     */
    let { 
        href = '', 
        variante = 'acento', 
        tipo = 'button', 
        onClick = () => {},
        clase = '',
        ariaLabel = '',
        disabled = false,
        children
    } = $props();
</script>

{#if href}
    <a 
        {href} 
        class="boton boton-{variante} {clase}"
        aria-label={ariaLabel || undefined}
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
        aria-label={ariaLabel || undefined}
        {disabled}
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
        padding: 13px 28px;
        border-radius: var(--radio-pill);
        font-family: var(--fuente-cuerpo);
        font-size: 0.95rem;
        font-weight: 500;
        cursor: pointer;
        border: none;
        transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, box-shadow 0.2s ease;
        text-decoration: none;
        white-space: nowrap;
        position: relative;
        user-select: none;
    }

    .boton:active {
        transform: scale(0.97);
    }

    .boton:focus-visible {
        outline: 2px solid var(--color-foco-anillo);
        outline-offset: 3px;
    }

    .boton-acento {
        background-color: var(--color-acento);
        color: var(--color-oscuro);
        box-shadow: 0 4px 18px rgba(226, 250, 90, 0.3);
    }

    .boton-acento:hover {
        background-color: var(--color-acento-hover);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(226, 250, 90, 0.5);
    }

    .boton-oscuro {
        background-color: var(--color-oscuro);
        color: var(--color-blanco);
    }

    .boton-oscuro:hover {
        background-color: var(--color-oscuro-hover);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.18);
    }

    .boton-secundario {
        background-color: var(--color-superficie);
        color: var(--color-oscuro);
    }

    .boton-secundario:hover {
        background-color: var(--color-superficie-hover);
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
