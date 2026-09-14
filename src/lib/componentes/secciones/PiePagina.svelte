<script>
    /**
     * Componente PiePagina (Footer)
     * Responsabilidad: Pie de página accesible con enlaces de navegación, servicios de SERTEC LLC y datos de contacto oficiales.
     */
    import { datosNavegacion, datosContacto, datosSoluciones } from '$lib/datos/datos-sitio.js';
</script>

<footer class="pie-pagina">
    <div class="contenedor">
        <div class="cuadricula-footer">
            <!-- Columna Marca -->
            <div class="columna-footer">
                <a href="#inicio" class="logo-sitio" aria-label="SERTEC LLC Inicio">
                    <div class="logo-icono-envoltorio">
                        <svg class="logo-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                        </svg>
                    </div>
                    <span>SERTEC<span style="color: #666; font-weight: 400; font-size: 0.9em;"> LLC</span></span>
                </a>
                <p class="descripcion-marca">
                    Servicio integral de mantenimiento preventivo, emergencias 24/7 e instalación de equipos gastronómicos y electromecánicos para restaurantes en DC, Maryland y Virginia.
                </p>
                <div class="badge-cobertura">
                    <span>📍 Alexandria, VA · DC Metro · MD</span>
                </div>
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
                <span class="titulo-columna-footer">Servicios Principales</span>
                {#each datosSoluciones.slice(0, 5) as solucion}
                    <a href="#servicios" class="enlace-footer">{solucion.titulo}</a>
                {/each}
            </div>

            <!-- Columna Contacto -->
            <div class="columna-footer">
                <span class="titulo-columna-footer">Contacto y Emergencias</span>
                <p class="info-contacto-destacada">{datosContacto.telefono}</p>
                <p class="info-contacto">{datosContacto.email}</p>
                <p class="info-contacto">{datosContacto.direccion}</p>
                <p class="info-contacto" style="margin-top: 6px; font-weight: 600; color: #10b981;">⚡ Respuesta Inmediata 24/7</p>
            </div>
        </div>

        <!-- Parte Inferior -->
        <div class="footer-inferior">
            <div>© 2025 SERTEC LLC. Todos los derechos reservados.</div>
            <div class="enlaces-legales">
                <a href="#inicio" class="enlace-legal">Términos de Servicio</a>
                <a href="#inicio" class="enlace-legal">Privacidad</a>
            </div>
        </div>
    </div>
</footer>

<style>
    .pie-pagina {
        background-color: var(--color-superficie);
        padding-top: 85px;
        padding-bottom: 45px;
    }

    .cuadricula-footer {
        display: grid;
        grid-template-columns: 2fr 1fr 1.2fr 1.4fr;
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
        font-size: 1.25rem;
        color: var(--color-oscuro);
    }

    .logo-icono-envoltorio {
        width: 34px;
        height: 34px;
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

    .badge-cobertura {
        font-size: 0.82rem;
        color: var(--color-texto-atenuado);
        background-color: var(--color-blanco);
        padding: 6px 12px;
        border-radius: var(--radio-completo);
        width: fit-content;
    }

    .titulo-columna-footer {
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--color-oscuro);
    }

    .enlace-footer {
        color: var(--color-texto-secundario);
        font-size: 0.9rem;
        transition: color 0.2s ease, transform 0.2s ease;
        text-decoration: none;
    }

    .enlace-footer:hover {
        color: var(--color-oscuro);
        transform: translateX(3px);
    }

    .info-contacto-destacada {
        font-family: var(--fuente-titulos);
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--color-oscuro);
    }

    .info-contacto {
        font-size: 0.9rem;
        color: var(--color-texto-secundario);
        line-height: 1.45;
    }

    .footer-inferior {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid rgba(0, 0, 0, 0.06);
        padding-top: 25px;
        font-size: 0.85rem;
        color: var(--color-texto-atenuado);
    }

    .enlaces-legales {
        display: flex;
        gap: 20px;
    }

    .enlace-legal {
        color: var(--color-texto-atenuado);
        font-size: 0.85rem;
        text-decoration: none;
        transition: color 0.2s ease;
    }

    .enlace-legal:hover {
        color: var(--color-oscuro);
    }

    @media (max-width: 1024px) {
        .cuadricula-footer {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 640px) {
        .cuadricula-footer {
            grid-template-columns: 1fr;
            gap: 36px;
        }
        .footer-inferior {
            flex-direction: column;
            gap: 14px;
            text-align: center;
        }
    }
</style>
