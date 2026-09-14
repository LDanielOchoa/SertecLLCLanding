<script>
    /**
     * Componente CalculadoraSolar
     * Principio de Responsabilidad Única (SRP): Presentar la interfaz interactiva de cálculo y proyecciones solares.
     */
    import { onMount } from 'svelte';
    import { 
        calcularEstimacionSolar, 
        formatearMoneda, 
        formatearNumero 
    } from '$lib/servicios/calculadora-solar.js';
    import { animarAparicionScroll, configurarEfectoGlow } from '$lib/animaciones/animaciones-gsap.js';
    import Insignia from '$lib/componentes/ui/Insignia.svelte';
    import Boton from '$lib/componentes/ui/Boton.svelte';

    // Estado reactivo con runes de Svelte 5
    let costoMensual = $state(220);
    let contenedorCalculadora = $state();

    // Cálculo reactivo derivado del servicio matemático
    let resultado = $derived(calcularEstimacionSolar(costoMensual));

    // Opciones rápidas de configuración de gasto mensual
    const preajustesConsumo = [
        { etiqueta: 'Básico', valor: 100, descripcion: 'Apartamento o consumo moderado' },
        { etiqueta: 'Familiar', valor: 220, descripcion: 'Hogar promedio 3-4 personas' },
        { etiqueta: 'Residencial Alto', valor: 450, descripcion: 'Casa amplia con climatización' },
        { etiqueta: 'Comercial', valor: 850, descripcion: 'Negocio, oficina o taller' }
    ];

    onMount(() => {
        if (contenedorCalculadora) {
            const elementosAnimables = contenedorCalculadora.querySelectorAll('.tarjeta-calculadora');
            animarAparicionScroll(elementosAnimables, { stagger: 0.1 });
            elementosAnimables.forEach(tarjeta => configurarEfectoGlow(tarjeta));
        }
    });

    /**
     * Ajusta el costo mensual desde los botones de preajuste
     */
    function seleccionarPreajuste(valor) {
        costoMensual = valor;
    }
</script>

<section class="seccion-espaciado seccion-calculadora" bind:this={contenedorCalculadora} id="calculadora">
    <div class="contenedor">
        <!-- Encabezado de la Sección -->
        <div class="encabezado-seccion-centro">
            <Insignia variante="seccion">Calculadora Solar Inteligente</Insignia>
            <h2>Calcula tu Ahorro y Proyecta tu Independencia Energética</h2>
            <p>
                Ajusta tu factura de luz actual para estimar la cantidad de paneles solares que necesitas, tu ahorro inmediato y el impacto ambiental positivo.
            </p>
        </div>

        <!-- Panel Interactivo Principal -->
        <div class="cuadricula-calculadora">
            <!-- Columna de Control Interactivo -->
            <div class="tarjeta-calculadora tarjeta-control">
                <div class="efecto-resplandor" aria-hidden="true"></div>
                
                <div class="encabezado-control">
                    <span class="etiqueta-control">Tu Gasto Eléctrico Mensual</span>
                    <div class="valor-gasto-contenedor">
                        <span class="simbolo-moneda">$</span>
                        <input 
                            type="number" 
                            min="20" 
                            max="3000" 
                            bind:value={costoMensual} 
                            class="input-gasto-directo"
                            aria-label="Gasto mensual en electricidad"
                        />
                        <span class="sufijo-tiempo">USD / mes</span>
                    </div>
                </div>

                <!-- Slider Deslizante Personalizado -->
                <div class="contenedor-slider">
                    <div class="slider-pista-fondo">
                        <input 
                            type="range" 
                            min="30" 
                            max="1200" 
                            step="10" 
                            bind:value={costoMensual} 
                            class="slider-solar"
                            style="--progreso: {((costoMensual - 30) / (1200 - 30)) * 100}%"
                            aria-label="Deslizador de gasto mensual"
                        />
                    </div>
                    <div class="rango-extremos">
                        <span>$30 USD</span>
                        <span>$600 USD</span>
                        <span>$1,200+ USD</span>
                    </div>
                </div>

                <!-- Botones de Preajuste Rápido -->
                <div class="seccion-preajustes">
                    <span class="titulo-preajustes">Perfiles frecuentes:</span>
                    <div class="grupo-preajustes">
                        {#each preajustesConsumo as perfil}
                            <button 
                                type="button"
                                class="boton-perfil {costoMensual === perfil.valor ? 'perfil-activo' : ''}"
                                onclick={() => seleccionarPreajuste(perfil.valor)}
                                title={perfil.descripcion}
                            >
                                <span class="perfil-nombre">{perfil.etiqueta}</span>
                                <span class="perfil-valor">${perfil.valor}</span>
                            </button>
                        {/each}
                    </div>
                </div>

                <!-- Comparativa Gráfica de Barras: Antes vs Después -->
                <div class="comparativa-factura">
                    <div class="comparativa-fila">
                        <div class="comparativa-info">
                            <span class="comparativa-etiqueta">Factura Eléctrica Tradicional</span>
                            <span class="comparativa-monto">{formatearMoneda(resultado.costoMensualEntrada)}</span>
                        </div>
                        <div class="barra-contenedor">
                            <div class="barra-relleno barra-roja" style="width: 100%;"></div>
                        </div>
                    </div>

                    <div class="comparativa-fila">
                        <div class="comparativa-info">
                            <span class="comparativa-etiqueta">Con Sistema Solar Solaris (Ahorras {resultado.porcentajeAhorro}%)</span>
                            <span class="comparativa-monto texto-acento">{formatearMoneda(resultado.nuevaFacturaMensual)}</span>
                        </div>
                        <div class="barra-contenedor">
                            <div 
                                class="barra-relleno barra-verde" 
                                style="width: {Math.max(15, 100 - resultado.porcentajeAhorro)}%;"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Columna de Resultados y Métricas Clave -->
            <div class="panel-resultados">
                <!-- Tarjeta Destacada de Ahorro Financiero -->
                <div class="tarjeta-calculadora tarjeta-ahorro-destacada">
                    <div class="efecto-resplandor" aria-hidden="true"></div>
                    <div class="contenido-tarjeta-destacada">
                        <div class="cabecera-ahorro">
                            <Insignia variante="destacada">
                                <span class="badge-texto">Ahorro Estimado del {resultado.porcentajeAhorro}%</span>
                            </Insignia>
                            <span class="insignia-garantia">Garantía 25 Años</span>
                        </div>

                        <div class="bloque-ahorro-principal">
                            <span class="etiqueta-ahorro-principal">Ahorro Mensual Estimado</span>
                            <div class="monto-ahorro-gigante">
                                {formatearMoneda(resultado.ahorroMensual)}
                                <span class="frecuencia">/ mes</span>
                            </div>
                        </div>

                        <div class="cuadricula-submetricas-ahorro">
                            <div class="submetrica-item">
                                <span class="submetrica-titulo">Ahorro Anual</span>
                                <span class="submetrica-valor">{formatearMoneda(resultado.ahorroAnual)}</span>
                            </div>
                            <div class="submetrica-item">
                                <span class="submetrica-titulo">Ahorro Proyectado a 25 Años</span>
                                <span class="submetrica-valor valor-dorado">{formatearMoneda(resultado.ahorroAcumulado25Anos)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Subcuadrícula de Métricas Técnicas y Ecológicas -->
                <div class="subcuadricula-tecnica">
                    <!-- Dimensionamiento de Paneles -->
                    <div class="tarjeta-calculadora tarjeta-secundaria">
                        <div class="efecto-resplandor" aria-hidden="true"></div>
                        <div class="icono-tarjeta-secundaria">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="3" y1="9" x2="21" y2="9"></line>
                                <line x1="3" y1="15" x2="21" y2="15"></line>
                                <line x1="9" y1="3" x2="9" y2="21"></line>
                                <line x1="15" y1="3" x2="15" y2="21"></line>
                            </svg>
                        </div>
                        <div class="detalles-tecnicos">
                            <span class="etiqueta-metrica">Paneles Recomendados</span>
                            <div class="valor-metrica-numero">
                                {resultado.numeroPaneles}
                                <span class="unidad-metrica">módulos</span>
                            </div>
                            <p class="descripcion-metrica">
                                Sistema de <strong>{resultado.potenciaSistemaKw} kWp</strong> (~{formatearNumero(resultado.generacionAnualKwh)} kWh/año de energía limpia).
                            </p>
                        </div>

                        <!-- Micro Matriz Gráfica de Paneles -->
                        <div class="matriz-paneles-visual" aria-hidden="true">
                            {#each Array(Math.min(18, resultado.numeroPaneles)) as _, i}
                                <div class="celda-panel-solar" style="animation-delay: {i * 30}ms;"></div>
                            {/each}
                            {#if resultado.numeroPaneles > 18}
                                <div class="celda-panel-extra">+{resultado.numeroPaneles - 18}</div>
                            {/if}
                        </div>
                    </div>

                    <!-- Impacto Ambiental -->
                    <div class="tarjeta-calculadora tarjeta-secundaria">
                        <div class="efecto-resplandor" aria-hidden="true"></div>
                        <div class="icono-tarjeta-secundaria icono-eco">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 22v-9"></path>
                                <path d="M12 13c-3-3-5-2-7-6 4 0 7 2 7 6z"></path>
                                <path d="M12 13c3-3 5-2 7-6-4 0-7 2-7 6z"></path>
                            </svg>
                        </div>
                        <div class="detalles-tecnicos">
                            <span class="etiqueta-metrica">Reducción de CO₂</span>
                            <div class="valor-metrica-numero">
                                {resultado.toneladasCo2Anual}
                                <span class="unidad-metrica">Ton / año</span>
                            </div>
                            <p class="descripcion-metrica">
                                Equivalente a plantar <strong>{formatearNumero(resultado.arbolesEquivalentesAnual)} árboles</strong> y evitar {resultado.toneladasCo225Anos} ton de CO₂ en 25 años.
                            </p>
                        </div>

                        <!-- Barra de impacto ecológico -->
                        <div class="progreso-eco-contenedor">
                            <div class="progreso-eco-barra" style="width: {Math.min(100, resultado.numeroPaneles * 5)}%;"></div>
                        </div>
                    </div>
                </div>

                <!-- Llamado a la Acción Directo con los Datos Calculados -->
                <div class="tarjeta-calculadora tarjeta-cta-calculadora">
                    <div class="cta-calculadora-texto">
                        <h4>¿Deseas formalizar tu proyecto solar a la medida?</h4>
                        <p>Nuestros ingenieros diseñarán un plano fotovoltaico personalizado para tu techo sin costo alguno.</p>
                    </div>
                    <div class="cta-calculadora-boton">
                        <Boton href="#consulta" variante="acento">
                            <span>Solicitar Cotización de este Sistema</span>
                            <svg class="boton-icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Boton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .seccion-calculadora {
        background-color: var(--color-blanco);
        border-bottom: 1px solid var(--color-borde);
    }

    .encabezado-seccion-centro {
        text-align: center;
        max-width: 760px;
        margin: 0 auto 50px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }

    .cuadricula-calculadora {
        display: grid;
        grid-template-columns: 1fr 1.35fr;
        gap: 28px;
        align-items: stretch;
    }

    /* Tarjetas base con efecto resplandor */
    .tarjeta-calculadora {
        background-color: var(--color-superficie-card);
        border: 1px solid var(--color-borde);
        border-radius: var(--radio-2xl);
        position: relative;
        overflow: hidden;
        transition: var(--transicion-fluida);
    }

    .efecto-resplandor {
        position: absolute;
        width: 280px;
        height: 280px;
        top: var(--cursor-y, -280px);
        left: var(--cursor-x, -280px);
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, rgba(226, 250, 90, 0.22) 0%, rgba(226, 250, 90, 0) 70%);
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
        border-radius: 50%;
    }

    .tarjeta-calculadora:hover .efecto-resplandor {
        opacity: 1;
    }

    /* Columna de Controles */
    .tarjeta-control {
        padding: 38px 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 32px;
        background-color: #fafafa;
    }

    .encabezado-control {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .etiqueta-control {
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--color-texto-secundario);
        text-transform: uppercase;
        letter-spacing: 0.04em;
    }

    .valor-gasto-contenedor {
        display: flex;
        align-items: baseline;
        gap: 6px;
    }

    .simbolo-moneda {
        font-family: var(--fuente-titulos);
        font-size: 2.2rem;
        font-weight: 700;
        color: var(--color-oscuro);
    }

    .input-gasto-directo {
        font-family: var(--fuente-titulos);
        font-size: clamp(2.4rem, 4vw, 3.2rem);
        font-weight: 700;
        color: var(--color-oscuro);
        background: transparent;
        border: none;
        outline: none;
        width: 170px;
        padding: 0;
    }

    .input-gasto-directo::-webkit-inner-spin-button,
    .input-gasto-directo::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .sufijo-tiempo {
        font-size: 1.1rem;
        color: var(--color-texto-atenuado);
        font-weight: 500;
    }

    /* Slider Interactivo */
    .contenedor-slider {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .slider-pista-fondo {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
    }

    .slider-solar {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 12px;
        border-radius: var(--radio-pill);
        background: linear-gradient(to right, var(--color-acento) 0%, var(--color-acento) var(--progreso), #e0e0e0 var(--progreso), #e0e0e0 100%);
        outline: none;
        cursor: pointer;
        transition: background 0.15s ease;
    }

    .slider-solar::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: var(--color-oscuro);
        border: 4px solid var(--color-acento);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        cursor: grab;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .slider-solar::-webkit-slider-thumb:hover,
    .slider-solar::-webkit-slider-thumb:active {
        transform: scale(1.18);
        box-shadow: 0 0 16px var(--color-acento-glow);
    }

    .slider-solar::-moz-range-thumb {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: var(--color-oscuro);
        border: 4px solid var(--color-acento);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        cursor: grab;
    }

    .rango-extremos {
        display: flex;
        justify-content: space-between;
        font-size: 0.85rem;
        color: var(--color-texto-atenuado);
        font-weight: 500;
    }

    /* Preajustes */
    .seccion-preajustes {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .titulo-preajustes {
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--color-texto-secundario);
    }

    .grupo-preajustes {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .boton-perfil {
        background-color: var(--color-blanco);
        border: 1px solid var(--color-borde);
        border-radius: var(--radio-md);
        padding: 10px 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        transition: var(--transicion-rapida);
        font-family: var(--fuente-cuerpo);
    }

    .boton-perfil:hover {
        border-color: var(--color-oscuro);
        background-color: var(--color-superficie);
    }

    .perfil-activo {
        border-color: var(--color-oscuro);
        background-color: var(--color-oscuro);
        color: var(--color-blanco);
    }

    .perfil-activo .perfil-valor {
        color: var(--color-acento);
    }

    .perfil-nombre {
        font-size: 0.85rem;
        font-weight: 500;
    }

    .perfil-valor {
        font-size: 0.85rem;
        font-weight: 700;
        color: var(--color-oscuro);
    }

    /* Barras comparativas */
    .comparativa-factura {
        background-color: var(--color-blanco);
        border: 1px solid var(--color-borde);
        border-radius: var(--radio-lg);
        padding: 18px 20px;
        display: flex;
        flex-direction: column;
        gap: 14px;
    }

    .comparativa-fila {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .comparativa-info {
        display: flex;
        justify-content: space-between;
        font-size: 0.85rem;
        font-weight: 500;
    }

    .comparativa-etiqueta {
        color: var(--color-texto-secundario);
    }

    .comparativa-monto {
        font-weight: 700;
        color: var(--color-oscuro);
    }

    .texto-acento {
        color: #6a7b00;
    }

    .barra-contenedor {
        width: 100%;
        height: 8px;
        background-color: var(--color-superficie);
        border-radius: var(--radio-pill);
        overflow: hidden;
    }

    .barra-relleno {
        height: 100%;
        border-radius: var(--radio-pill);
        transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .barra-roja {
        background-color: #f87171;
    }

    .barra-verde {
        background-color: var(--color-acento);
    }

    /* Columna de Resultados */
    .panel-resultados {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    /* Tarjeta Ahorro Principal (Estilo Oscuro Premium) */
    .tarjeta-ahorro-destacada {
        background-color: var(--color-oscuro);
        color: var(--color-blanco);
        padding: 34px 32px;
        border-color: rgba(255, 255, 255, 0.12);
        box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
    }

    .contenido-tarjeta-destacada {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        gap: 22px;
    }

    .cabecera-ahorro {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
    }

    .badge-texto {
        color: var(--color-oscuro);
        font-weight: 700;
        letter-spacing: 0.02em;
    }

    .insignia-garantia {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.6);
        background-color: rgba(255, 255, 255, 0.08);
        padding: 4px 12px;
        border-radius: var(--radio-pill);
        font-weight: 500;
    }

    .bloque-ahorro-principal {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .etiqueta-ahorro-principal {
        font-size: 0.95rem;
        color: rgba(255, 255, 255, 0.7);
        font-weight: 500;
    }

    .monto-ahorro-gigante {
        font-family: var(--fuente-titulos);
        font-size: clamp(2.4rem, 4.5vw, 3.4rem);
        font-weight: 700;
        color: var(--color-acento);
        line-height: 1.05;
        letter-spacing: -0.03em;
        display: flex;
        align-items: baseline;
        gap: 8px;
    }

    .frecuencia {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.5);
        font-weight: 400;
    }

    .cuadricula-submetricas-ahorro {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        padding-top: 18px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .submetrica-item {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .submetrica-titulo {
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.6);
    }

    .submetrica-valor {
        font-family: var(--fuente-titulos);
        font-size: 1.35rem;
        font-weight: 700;
        color: var(--color-blanco);
    }

    .valor-dorado {
        color: var(--color-acento);
    }

    /* Subcuadrícula Técnica */
    .subcuadricula-tecnica {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    .tarjeta-secundaria {
        background-color: var(--color-superficie-card);
        padding: 26px 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 18px;
    }

    .icono-tarjeta-secundaria {
        width: 44px;
        height: 44px;
        background-color: var(--color-blanco);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--color-borde);
        box-shadow: var(--sombra-tarjeta);
    }

    .icono-tarjeta-secundaria svg {
        width: 22px;
        height: 22px;
        stroke: var(--color-oscuro);
    }

    .icono-eco {
        background-color: rgba(226, 250, 90, 0.2);
        border-color: rgba(226, 250, 90, 0.5);
    }

    .icono-eco svg {
        stroke: #5d6c04;
    }

    .detalles-tecnicos {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .etiqueta-metrica {
        font-size: 0.85rem;
        color: var(--color-texto-secundario);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
    }

    .valor-metrica-numero {
        font-family: var(--fuente-titulos);
        font-size: 1.9rem;
        font-weight: 700;
        color: var(--color-oscuro);
        display: flex;
        align-items: baseline;
        gap: 6px;
    }

    .unidad-metrica {
        font-size: 0.9rem;
        color: var(--color-texto-atenuado);
        font-weight: 500;
    }

    .descripcion-metrica {
        font-size: 0.88rem;
        line-height: 1.45;
        color: var(--color-texto-secundario);
    }

    /* Visualizador gráfico de micro paneles */
    .matriz-paneles-visual {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        padding-top: 10px;
    }

    .celda-panel-solar {
        width: 14px;
        height: 18px;
        background-color: var(--color-oscuro);
        border: 1px solid var(--color-acento);
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease;
    }

    .celda-panel-solar:hover {
        transform: scale(1.2);
        background-color: var(--color-acento);
    }

    .celda-panel-extra {
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--color-oscuro);
        background-color: var(--color-acento);
        border-radius: var(--radio-pill);
        padding: 2px 6px;
        display: flex;
        align-items: center;
    }

    .progreso-eco-contenedor {
        width: 100%;
        height: 8px;
        background-color: rgba(17, 17, 17, 0.08);
        border-radius: var(--radio-pill);
        overflow: hidden;
        margin-top: 8px;
    }

    .progreso-eco-barra {
        height: 100%;
        background-color: var(--color-acento);
        border-radius: var(--radio-pill);
        transition: width 0.4s ease;
    }

    /* Tarjeta CTA de Acción Rápida */
    .tarjeta-cta-calculadora {
        background-color: var(--color-blanco);
        border: 1px solid var(--color-borde);
        padding: 24px 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        box-shadow: var(--sombra-flotante);
    }

    .cta-calculadora-texto h4 {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--color-oscuro);
        margin-bottom: 4px;
    }

    .cta-calculadora-texto p {
        font-size: 0.88rem;
        color: var(--color-texto-secundario);
    }

    .cta-calculadora-boton {
        flex-shrink: 0;
    }

    /* Adaptabilidad Responsiva */
    @media (max-width: 1080px) {
        .cuadricula-calculadora {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 640px) {
        .tarjeta-control {
            padding: 26px 20px;
        }

        .tarjeta-ahorro-destacada {
            padding: 26px 20px;
        }

        .subcuadricula-tecnica {
            grid-template-columns: 1fr;
        }

        .tarjeta-cta-calculadora {
            flex-direction: column;
            align-items: flex-start;
            padding: 20px;
        }

        .cta-calculadora-boton {
            width: 100%;
        }

        .cta-calculadora-boton :global(.boton) {
            width: 100%;
        }

        .grupo-preajustes {
            grid-template-columns: 1fr;
        }
    }
</style>
