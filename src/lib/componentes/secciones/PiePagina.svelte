<script>
    /**
     * Componente PiePagina (Footer)
     * Responsabilidad: Pie de página accesible con enlaces de navegación, servicios y contacto.
     */
    import { datosNavegacion } from '$lib/datos/datos-sitio.js';
</script>

<footer class="pie-pagina">
    <div class="contenedor">
        <div class="cuadricula-footer">
            <!-- Columna Marca -->
            <div class="columna-footer">
                <a href="#inicio" class="logo-sitio" aria-label="Solaris Energy Inicio">
                    <div class="logo-icono-envoltorio">
                        <svg class="logo-icono" viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="12" r="5"></circle>
                            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                        </svg>
                    </div>
                    <span>Solaris</span>
                </a>
                <p class="descripcion-marca">
                    Soluciones integrales de energía solar limpia y renovable diseñadas para ayudar a hogares y empresas a maximizar su ahorro y sostenibilidad.
                </p>
            </div>

            <!-- Columna Navegación -->
            <div class="columna-footer">
                <span class="titulo-columna-footer">Navegación</span>
                {#each datosNavegacion as enlace}
                    <a href={enlace.href} class="enlace-footer">{enlace.etiqueta}</a>
                {/each}
            </div>

            <!-- Columna Servicios -->
            <div class="columna-footer">
                <span class="titulo-columna-footer">Soluciones</span>
                <a href="#soluciones" class="enlace-footer">Solar Residencial</a>
                <a href="#soluciones" class="enlace-footer">Solar Comercial</a>
                <a href="#soluciones" class="enlace-footer">Almacenamiento y Baterías</a>
                <a href="#soluciones" class="enlace-footer">Monitoreo con IA</a>
                <a href="#soluciones" class="enlace-footer">Mantenimiento Preventivo</a>
            </div>

            <!-- Columna Contacto -->
            <div class="columna-footer">
                <span class="titulo-columna-footer">Contacto Directo</span>
                <p class="info-contacto">projects@solaris.com</p>
                <p class="info-contacto">+1 (415) 555-0198</p>
                <p class="info-contacto">123 Scheduler St, Tech City, USA</p>
            </div>
        </div>

        <!-- Parte Inferior -->
        <div class="footer-inferior">
            <div>© 2025 Solaris Energy. Todos los derechos reservados.</div>
            <div class="enlaces-legales">
                <a href="#inicio" class="enlace-footer">Política de Privacidad</a>
                <a href="#inicio" class="enlace-footer">Términos de Servicio</a>
            </div>
        </div>
    </div>
</footer>

<style>
    .pie-pagina {
        background-color: var(--color-superficie);
        padding-top: 80px;
        padding-bottom: 40px;
        border-top: 1px solid var(--color-borde);
    }

    .cuadricula-footer {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1.4fr;
        gap: 45px;
        margin-bottom: 50px;
    }

    .columna-footer {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .logo-sitio {
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: var(--fuente-titulos);
        font-weight: 700;
        font-size: 1.2rem;
        color: var(--color-oscuro);
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

    .descripcion-marca {
        font-size: 0.92rem;
        line-height: 1.6;
        color: var(--color-texto-secundario);
        max-width: 340px;
    }

    .titulo-columna-footer {
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--color-oscuro);
    }

    .enlace-footer {
        color: var(--color-texto-secundario);
        font-size: 0.9rem;
        transition: color 0.2s ease;
    }

    .enlace-footer:hover {
        color: var(--color-oscuro);
    }

    .info-contacto {
        font-size: 0.9rem;
        color: var(--color-texto-secundario);
    }

    .footer-inferior {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid var(--color-borde);
        padding-top: 25px;
        font-size: 0.85rem;
        color: var(--color-texto-atenuado);
    }

    .enlaces-legales {
        display: flex;
        gap: 20px;
    }

    @media (max-width: 1024px) {
        .cuadricula-footer {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 640px) {
        .cuadricula-footer {
            grid-template-columns: 1fr;
        }
        .footer-inferior {
            flex-direction: column;
            gap: 12px;
            text-align: center;
        }
    }
</style>
