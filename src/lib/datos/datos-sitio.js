/**
 * Datos del Sitio Web - Solaris Energy
 * Centraliza el contenido, métricas, soluciones, proyectos, proceso, testimonios y preguntas frecuentes.
 */

export const datosNavegacion = [
    { etiqueta: 'Inicio', href: '#inicio' },
    { etiqueta: 'Nosotros', href: '#nosotros' },
    { etiqueta: 'Soluciones', href: '#soluciones' },
    { etiqueta: 'Calculadora', href: '#calculadora' },
    { etiqueta: 'Proyectos', href: '#proyectos' },
    { etiqueta: 'Preguntas', href: '#faq' }
];

export const datosHero = {
    pruebaSocial: {
        texto: 'Con la confianza de +500 hogares',
        avatares: [
            'https://framerusercontent.com/images/vNBcifoGCmAEmxetYuSO67NOcU.jpg',
            'https://framerusercontent.com/images/P5SaOdJhtAFwAXieRt7XgB1hTA.jpg',
            'https://framerusercontent.com/images/crtAPSC4ymJakXu1CagocBeUlUw.jpg'
        ]
    },
    titulo: 'Energía solar que impulsa al mundo hacia adelante',
    subtitulo: 'Alimentando hogares y empresas con soluciones solares limpias y renovables. Reduce tu huella de carbono y tus costos energéticos hoy mismo.',
    ctaPrincipal: 'Solicitar Consulta',
    ctaSecundario: 'Explorar Soluciones',
    imagenPrincipal: 'https://framerusercontent.com/images/Ss87WdLoqtNCvaghtqpXQxsznjk.png?width=1376'
};

export const datosMetricas = [
    {
        meta: 10,
        sufijo: '+',
        titulo: 'Años de Experiencia',
        descripcion: 'Brindando soluciones de ingeniería solar confiables con años de liderazgo en instalaciones residenciales y comerciales.'
    },
    {
        meta: 500,
        sufijo: '+',
        titulo: 'Proyectos Instalados',
        descripcion: 'Sistemas solares implementados con éxito, generando energía limpia y reduciendo emisiones globales.'
    },
    {
        meta: 25,
        sufijo: ' Años',
        titulo: 'Garantía de Rendimiento',
        descripcion: 'Paneles de alta eficiencia diseñados para brindar durabilidad y máxima producción garantizada a largo plazo.'
    }
];

export const datosSoluciones = [
    {
        id: 'residencial',
        titulo: 'Instalación Solar Residencial',
        descripcion: 'Sistemas solares personalizados para tejados, diseñados con algoritmos de captación para la máxima producción energética.',
        icono: 'hogar'
    },
    {
        id: 'ahorro',
        titulo: 'Ahorro Garantizado de Costos',
        descripcion: 'Disfruta de hasta un 70% de reducción en tus facturas eléctricas combinando paneles solares y baterías inteligentes.',
        icono: 'ahorro'
    },
    {
        id: 'monitoreo',
        titulo: 'Monitoreo Inteligente 24/7',
        descripcion: 'Plataforma con inteligencia artificial para supervisar en tiempo real tu consumo, producción y estado del sistema.',
        icono: 'pantalla'
    },
    {
        id: 'instalacion',
        titulo: 'Instalación Rápida y Segura',
        descripcion: 'Montaje profesional ejecutado por ingenieros y técnicos certificados en un plazo récord sin interrumpir tus actividades.',
        icono: 'rayo'
    },
    {
        id: 'sostenibilidad',
        titulo: 'Sostenibilidad y Futuro Verde',
        descripcion: 'Genera energía 100% limpia para reducir drásticamente tu huella de carbono y proteger el medio ambiente.',
        icono: 'escudo'
    },
    {
        id: 'eficiencia',
        titulo: 'Eficiencia Energética Total',
        descripcion: 'Optimiza y distribuye el flujo eléctrico entre tus electrodomésticos y sistemas de almacenamiento con gestión inteligente.',
        icono: 'engranaje'
    }
];

export const datosBeneficios = [
    {
        titulo: 'Menores Facturas de Electricidad',
        descripcion: 'Genera tu propia energía y disminuye el impacto de los aumentos continuos de tarifas eléctricas desde el primer día.'
    },
    {
        titulo: 'Independencia Energética y Respaldo',
        descripcion: 'Mantén tu hogar y negocio siempre iluminados frente a cortes de suministro con almacenamiento por batería.'
    },
    {
        titulo: 'Incremento en el Valor del Inmueble',
        descripcion: 'Las propiedades con infraestructura solar certificada aumentan significativamente su valor comercial y plusvalía.'
    },
    {
        titulo: 'Impacto Ecológico Positivo y Medible',
        descripcion: 'Cada instalación evita toneladas de emisiones contaminantes de CO2 al año para las futuras generaciones.'
    },
    {
        titulo: 'Incentivos Fiscales y Deducciones',
        descripcion: 'Aprovecha créditos tributarios, deducciones y programas de financiamiento diseñados para energías limpias.'
    }
];

export const datosProyectos = [
    {
        id: 'p1',
        titulo: 'Sistema Solar Residencial en Tejado',
        categoria: 'Residencial · 10 kW',
        descripcion: 'Sistema fotovoltaico de 10kW para una residencia moderna, reduciendo en un 75% su dependencia de la red eléctrica.',
        imagen: 'https://framerusercontent.com/images/y20gbmvWCf91BsDb3MiOzpYwKQ.png?width=1328'
    },
    {
        id: 'p2',
        titulo: 'Instalación Solar Comercial de Alta Capacidad',
        categoria: 'Comercial · 40 kW',
        descripcion: 'Sistema de 40kW instalado sobre nave comercial para abastecer la operación diurna completa de maquinaria y oficinas.',
        imagen: 'https://framerusercontent.com/images/zSsNc6A7TsxzWG0fw5Xha8eu3Q.png?width=1328'
    },
    {
        id: 'p3',
        titulo: 'Configuración con Microinversores Inteligentes',
        categoria: 'Residencial Avanzado · 15 kW',
        descripcion: 'Módulos monocristalinos integrados con tecnología de optimización individual para tejados con orientación mixta.',
        imagen: 'https://framerusercontent.com/images/SpbvEPTkWhMgwMirh9WYaeeVbV8.png?width=1328'
    },
    {
        id: 'p4',
        titulo: 'Diagnóstico e Inspección Preventiva',
        categoria: 'Mantenimiento y Rendimiento',
        descripcion: 'Servicio de termografía y calibración de inversores que restauró al 100% la eficiencia operativa de la planta.',
        imagen: 'https://framerusercontent.com/images/PbMWA2lrkziF7IzfURSETqJLjys.png?width=1232'
    }
];

export const datosProceso = [
    {
        paso: '01',
        titulo: 'Evaluación del Hogar',
        puntos: [
            'Evaluación técnica virtual o presencial',
            'Diseño de ingeniería solar a la medida',
            'Análisis financiero y proyección de ahorro'
        ]
    },
    {
        paso: '02',
        titulo: 'Cotización Personalizada',
        puntos: [
            'Especificaciones y costos transparentes',
            'Opciones flexibles de financiamiento',
            'Gestión total de licencias y permisos'
        ]
    },
    {
        paso: '03',
        titulo: 'Instalación Experta',
        puntos: [
            'Equipo de ingenieros y técnicos certificados',
            'Montaje seguro en 1 a 3 días hábiles',
            'Control de calidad e inspección de seguridad'
        ]
    },
    {
        paso: '04',
        titulo: 'Activación del Sistema',
        puntos: [
            'Interconexión a la red y pruebas de carga',
            'Sincronización con la app de monitoreo',
            'Inicio inmediato de generación limpia'
        ]
    }
];

export const datosTestimonios = [
    {
        nombre: 'Daniel Carter',
        rol: 'Propietario de Vivienda',
        avatar: 'https://framerusercontent.com/images/vNBcifoGCmAEmxetYuSO67NOcU.jpg',
        cita: 'Cambiar a solar con este equipo fue facilísimo. Nuestras facturas de electricidad cayeron drásticamente desde el primer mes.',
        estrellas: 5
    },
    {
        nombre: 'Michael Brooks',
        rol: 'Gerente Comercial',
        avatar: 'https://framerusercontent.com/images/P5SaOdJhtAFwAXieRt7XgB1hTA.jpg',
        cita: 'Instalación impecable y soporte continuo en cada fase del proyecto. La inversión ya está rindiendo frutos.',
        estrellas: 5
    },
    {
        nombre: 'Emily Parker',
        rol: 'Cliente Residencial',
        avatar: 'https://framerusercontent.com/images/crtAPSC4ymJakXu1CagocBeUlUw.jpg',
        cita: 'El sistema funciona de maravilla y la aplicación móvil nos permite ver en vivo cuánta energía generamos diariamente.',
        estrellas: 5
    },
    {
        nombre: 'Ethan Walker',
        rol: 'Arquitecto y Diseñador',
        avatar: 'https://framerusercontent.com/images/u0s4V4MeDEaLubizTBg0qAdAWA.jpg',
        cita: 'Excelente estética y pulcritud en la instalación en tejado. Gran profesionalismo de todo el equipo técnico.',
        estrellas: 5
    },
    {
        nombre: 'James Walker',
        rol: 'Empresario Local',
        avatar: 'https://framerusercontent.com/images/Bf5PpwlHezvzdhBMuCDaUnAlihI.png',
        cita: 'Atención personalizada de primer nivel. Nos guiaron paso a paso con los trámites y la instalación fue rápida.',
        estrellas: 5
    }
];

export const datosFaqs = [
    {
        pregunta: '¿Qué servicios solares ofrecen?',
        respuesta: 'Ofrecemos soluciones solares integrales llave en mano: consultoría energética, diseño personalizado de ingeniería, suministro e instalación de paneles e inversores premium, trámites de interconexión y planes de mantenimiento.'
    },
    {
        pregunta: '¿Cuánto dinero puedo ahorrar con paneles solares?',
        respuesta: 'Dependiendo de tu consumo actual, la tarifa de tu proveedor eléctrico y la radiación solar, la mayoría de los usuarios ahorran entre un 60% y un 80% en su gasto de electricidad.'
    },
    {
        pregunta: '¿Cuánto tiempo toma la instalación física?',
        respuesta: 'Para instalaciones residenciales estándar, el montaje físico se realiza en tan solo 1 a 3 días hábiles una vez aprobados los permisos correspondientes.'
    },
    {
        pregunta: '¿Los paneles solares funcionan en días nublados o con lluvia?',
        respuesta: 'Sí, los paneles fotovoltaicos captan tanto la luz solar directa como la radiación difusa a través de las nubes, asegurando una producción continua de energía.'
    },
    {
        pregunta: '¿Cuál es la vida útil y garantía de los paneles?',
        respuesta: 'Nuestros paneles cuentan con una garantía de rendimiento de 25 años y están diseñados para operar de manera óptima por más de 30 años con mantenimiento mínimo.'
    },
    {
        pregunta: '¿Qué tipo de mantenimiento requieren los paneles?',
        respuesta: 'El mantenimiento es muy simple y consiste principalmente en limpiezas periódicas para retirar polvo y revisiones anuales del inversor y cableado, las cuales ofrecemos en nuestros planes de servicio.'
    }
];
