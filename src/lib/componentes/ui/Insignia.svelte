<script>
    /**
     * Componente Insignia / Pill Reutilizable
     */
    let { 
        variante = 'seccion',
        clase = '',
        children 
    } = $props();
</script>

<div class="insignia insignia-{variante} {clase}">
    {#if children}
        {@render children()}
    {/if}
</div>

<style>
    .insignia {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 7px 18px;
        border-radius: var(--radio-pill);
        font-size: 0.85rem;
        font-weight: 500;
        line-height: 1;
        width: fit-content;
        transition: var(--transicion-rapida);
    }

    .insignia-seccion {
        background-color: var(--color-superficie);
        color: var(--color-oscuro);
        text-transform: uppercase;
        letter-spacing: 0.07em;
        font-size: 0.75rem;
        font-weight: 600;
    }

    .insignia-social {
        background-color: var(--color-superficie);
        backdrop-filter: var(--filtro-desenfoque);
        padding: 6px 18px 6px 8px;
    }

    .insignia-destacada {
        background-color: rgba(226, 250, 90, 0.2);
        color: var(--color-acento);
    }
</style>
