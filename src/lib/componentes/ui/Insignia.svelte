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
        padding: 6px 16px;
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
        border: 1px solid var(--color-borde);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        font-size: 0.75rem;
        font-weight: 600;
    }

    .insignia-social {
        background-color: rgba(255, 255, 255, 0.95);
        border: 1px solid var(--color-borde);
        backdrop-filter: var(--filtro-desenfoque);
        box-shadow: var(--sombra-tarjeta);
        padding: 6px 18px 6px 8px;
    }

    .insignia-destacada {
        background-color: rgba(226, 250, 90, 0.15);
        color: #617006;
        border: 1px solid rgba(226, 250, 90, 0.5);
    }
</style>
