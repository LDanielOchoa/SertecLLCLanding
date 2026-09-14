/**
 * Módulo de Cálculo Solar y Financiero
 * Arquitectura SOLID: Principio de Responsabilidad Única (SRP) y Abierto/Cerrado (OCP).
 * Realiza cálculos técnicos de dimensionamiento fotovoltaico, proyecciones financieras e impacto ecológico.
 */

/**
 * Configuración predeterminada para los cálculos del sistema solar fotovoltaico.
 * Permite extensión sin modificar el código base (Open/Closed Principle).
 */
export const CONFIGURACION_SOLAR_PREDETERMINADA = {
    // Tarifa promedio por kilovatio-hora en USD
    tarifaKwhPromedio: 0.18,
    // Porcentaje promedio de ahorro/cobertura energética directa (75%)
    porcentajeAhorroEstimado: 0.75,
    // Horas de Sol Pico (HSP) promedio diarias
    horasSolPicoDiarias: 4.5,
    // Factor de rendimiento del sistema considerando pérdidas técnicas (82%)
    factorRendimientoSistema: 0.82,
    // Potencia nominal por módulo solar en Watts (450W tecnología monocristalina)
    potenciaPanelWatts: 450,
    // Factor de emisión de CO2 evitado por kWh generado (0.42 kg CO2 / kWh)
    factorEmisionCo2PorKwhKg: 0.42,
    // Tasa anual de absorción de CO2 por árbol promedio (21 kg CO2 / año)
    co2AbsorbidoPorArbolKgAno: 21,
    // Tasa anual promedio de inflación o incremento de tarifas de la red (2.5%)
    inflacionAnualTarifa: 0.025,
    // Horizonte de vida útil garantizada del sistema en años
    anosVidaUtil: 25,
    // Límites de entrada permitidos para cálculos
    costoMinimoMensual: 20,
    costoMaximoMensual: 5000
};

/**
 * Calcula el consumo estimado en kWh a partir del gasto monetario mensual.
 * @param {number} costoMensual - Gasto mensual en electricidad.
 * @param {number} tarifaPorKwh - Tarifa promedio por kWh.
 * @returns {number} Consumo mensual estimado en kWh.
 */
export function calcularConsumoKwhMensual(costoMensual, tarifaPorKwh = CONFIGURACION_SOLAR_PREDETERMINADA.tarifaKwhPromedio) {
    if (!costoMensual || costoMensual <= 0 || tarifaPorKwh <= 0) return 0;
    return costoMensual / tarifaPorKwh;
}

/**
 * Calcula el dimensionamiento del sistema y cantidad de módulos fotovoltaicos requeridos.
 * @param {number} consumoKwhMensual - Consumo mensual del usuario en kWh.
 * @param {typeof CONFIGURACION_SOLAR_PREDETERMINADA} config - Parámetros de configuración.
 * @returns {{ numeroPaneles: number, potenciaSistemaKw: number, generacionAnualKwh: number }}
 */
export function calcularDimensionamientoFotovoltaico(consumoKwhMensual, config = CONFIGURACION_SOLAR_PREDETERMINADA) {
    if (!consumoKwhMensual || consumoKwhMensual <= 0) {
        return {
            numeroPaneles: 0,
            potenciaSistemaKw: 0,
            generacionAnualKwh: 0
        };
    }

    const generacionMensualObjetivo = consumoKwhMensual * config.porcentajeAhorroEstimado;
    const diasMes = 30.41;
    const factorConversion = config.horasSolPicoDiarias * diasMes * config.factorRendimientoSistema;
    
    // Potencia del sistema en kWp requerida
    const potenciaRequeridaKw = generacionMensualObjetivo / factorConversion;
    const potenciaPanelKw = config.potenciaPanelWatts / 1000;
    
    // Cantidad de paneles redondeada al entero superior
    const numeroPaneles = Math.max(2, Math.ceil(potenciaRequeridaKw / potenciaPanelKw));
    const potenciaSistemaRealKw = Number((numeroPaneles * potenciaPanelKw).toFixed(2));
    
    // Generación anual estimada en kWh
    const generacionAnualKwh = Math.round(
        potenciaSistemaRealKw * config.horasSolPicoDiarias * 365 * config.factorRendimientoSistema
    );

    return {
        numeroPaneles,
        potenciaSistemaKw: potenciaSistemaRealKw,
        generacionAnualKwh
    };
}

/**
 * Calcula el ahorro financiero proyectado a corto y largo plazo.
 * @param {number} costoMensual - Gasto mensual actual.
 * @param {typeof CONFIGURACION_SOLAR_PREDETERMINADA} config - Parámetros de configuración.
 * @returns {{ ahorroMensual: number, nuevaFacturaMensual: number, ahorroAnual: number, ahorroAcumulado25Anos: number }}
 */
export function calcularProyeccionFinanciera(costoMensual, config = CONFIGURACION_SOLAR_PREDETERMINADA) {
    if (!costoMensual || costoMensual <= 0) {
        return {
            ahorroMensual: 0,
            nuevaFacturaMensual: 0,
            ahorroAnual: 0,
            ahorroAcumulado25Anos: 0
        };
    }

    const ahorroMensual = Math.round(costoMensual * config.porcentajeAhorroEstimado);
    const nuevaFacturaMensual = Math.round(costoMensual - ahorroMensual);
    const ahorroAnual = ahorroMensual * 12;

    // Cálculo del ahorro acumulado considerando incremento anual de tarifas de red
    let ahorroAcumulado = 0;
    let ahorroAnoActual = ahorroAnual;

    for (let ano = 1; ano <= config.anosVidaUtil; ano++) {
        ahorroAcumulado += ahorroAnoActual;
        ahorroAnoActual *= (1 + config.inflacionAnualTarifa);
    }

    return {
        ahorroMensual,
        nuevaFacturaMensual,
        ahorroAnual,
        ahorroAcumulado25Anos: Math.round(ahorroAcumulado)
    };
}

/**
 * Calcula el impacto ambiental positivo del sistema solar.
 * @param {number} generacionAnualKwh - Generación limpia anual en kWh.
 * @param {typeof CONFIGURACION_SOLAR_PREDETERMINADA} config - Parámetros de configuración.
 * @returns {{ toneladasCo2Anual: number, toneladasCo225Anos: number, arbolesEquivalentesAnual: number }}
 */
export function calcularImpactoAmbiental(generacionAnualKwh, config = CONFIGURACION_SOLAR_PREDETERMINADA) {
    if (!generacionAnualKwh || generacionAnualKwh <= 0) {
        return {
            toneladasCo2Anual: 0,
            toneladasCo225Anos: 0,
            arbolesEquivalentesAnual: 0
        };
    }

    // Emisiones de CO2 evitadas en kilogramos
    const co2EvitadoKgAnual = generacionAnualKwh * config.factorEmisionCo2PorKwhKg;
    const toneladasCo2Anual = Number((co2EvitadoKgAnual / 1000).toFixed(1));
    const toneladasCo225Anos = Number(((co2EvitadoKgAnual * config.anosVidaUtil) / 1000).toFixed(1));
    
    // Árboles equivalentes plantados
    const arbolesEquivalentesAnual = Math.round(co2EvitadoKgAnual / config.co2AbsorbidoPorArbolKgAno);

    return {
        toneladasCo2Anual,
        toneladasCo225Anos,
        arbolesEquivalentesAnual
    };
}

/**
 * Orquestador principal que ejecuta todas las estimaciones integradas.
 * Principio de Responsabilidad Única: Coordina los cálculos sin acoplarse a la interfaz.
 * @param {number} costoMensual - Gasto mensual en electricidad.
 * @param {Partial<typeof CONFIGURACION_SOLAR_PREDETERMINADA>} [opcionesPersonalizadas] - Opciones opcionales de configuración.
 * @returns {object} Objeto consolidado con todas las métricas calculadas.
 */
export function calcularEstimacionSolar(costoMensual, opcionesPersonalizadas = {}) {
    const config = { ...CONFIGURACION_SOLAR_PREDETERMINADA, ...opcionesPersonalizadas };
    
    // Saneamiento de la entrada
    const costoSaneado = Math.min(
        Math.max(Number(costoMensual) || 0, config.costoMinimoMensual),
        config.costoMaximoMensual
    );

    const consumoKwhMensual = Math.round(calcularConsumoKwhMensual(costoSaneado, config.tarifaKwhPromedio));
    const dimensionamiento = calcularDimensionamientoFotovoltaico(consumoKwhMensual, config);
    const finanzas = calcularProyeccionFinanciera(costoSaneado, config);
    const ecologia = calcularImpactoAmbiental(dimensionamiento.generacionAnualKwh, config);

    return {
        costoMensualEntrada: costoSaneado,
        consumoKwhMensual,
        porcentajeAhorro: Math.round(config.porcentajeAhorroEstimado * 100),
        ...finanzas,
        ...dimensionamiento,
        ...ecologia
    };
}

/**
 * Formatea un número como moneda en formato legible ($ USD).
 * @param {number} valor - Cantidad numérica.
 * @returns {string} Texto formateado en moneda.
 */
export function formatearMoneda(valor) {
    return new Intl.NumberFormat('es-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(valor || 0);
}

/**
 * Formatea un número con separadores de miles estándar.
 * @param {number} valor - Cantidad numérica.
 * @returns {string} Texto formateado con separadores.
 */
export function formatearNumero(valor) {
    return new Intl.NumberFormat('es-ES').format(valor || 0);
}
