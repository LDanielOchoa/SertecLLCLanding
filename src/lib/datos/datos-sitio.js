/**
 * Datos del Sitio Web - SERTEC LLC
 * Centraliza toda la información, servicios comerciales, métricas, proyectos, proceso, testimonios y contacto.
 */

export const datosNavegacion = [
    { etiqueta: 'Inicio', href: '#inicio' },
    { etiqueta: 'Nosotros', href: '#nosotros' },
    { etiqueta: 'Servicios', href: '#servicios' },
    { etiqueta: 'Beneficios', href: '#beneficios' },
    { etiqueta: 'Proyectos', href: '#proyectos' },
    { etiqueta: 'Preguntas', href: '#faq' }
];

export const datosHero = {
    pruebaSocial: {
        texto: '+17 años manteniendo cocinas comerciales 24/7 en DC, VA y MD',
        avatares: [
            'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=150&q=80',
            'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=150&q=80',
            'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=150&q=80'
        ]
    },
    titulo: 'Mantenimiento y Reparación de Equipos para Restaurantes y Cocinas Comerciales',
    subtitulo: 'Tu socio estratégico para reparación, instalación y mantenimiento preventivo 24/7 de equipos críticos. Servicio el mismo día para restaurantes, cadenas nacionales, hoteles, escuelas y hospitales.',
    ctaPrincipal: 'Llamar a Emergencias (888) 621-1115',
    ctaSecundario: 'Explorar Servicios',
    imagenPrincipal: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=85'
};

export const datosMetricas = [
    {
        meta: 17,
        sufijo: '+',
        titulo: 'Años de Trayectoria',
        descripcion: 'Manteniendo cocinas comerciales y restaurantes operando sin interrupciones con el más alto estándar de la industria.'
    },
    {
        meta: 1200,
        sufijo: '+',
        titulo: 'Equipos e Instalaciones Atendidas',
        descripcion: 'Reparaciones e instalaciones certificadas en restaurantes, cadenas nacionales, hoteles y hospitales en DC, VA y MD.'
    },
    {
        meta: 24,
        sufijo: '/7',
        titulo: 'Respuesta Rápida y Emergencias',
        descripcion: 'Servicio en el mismo día y atención para que tu cocina nunca detenga su producción en horas pico.'
    }
];

export const datosSoluciones = [
    {
        id: 'refrigeracion',
        titulo: 'Refrigeración Comercial',
        descripcion: 'Reparación y mantenimiento de cámaras frigoríficas (walk-in coolers/freezers), máquinas de hielo, vitrinas y congeladores industriales.',
        icono: 'frio'
    },
    {
        id: 'cocina',
        titulo: 'Equipos de Cocina y Food Service',
        descripcion: 'Servicio técnico especializado para hornos combinados, freidoras de alto rendimiento, parrillas, estufas y lavavajillas industriales.',
        icono: 'fuego'
    },
    {
        id: 'hvac',
        titulo: 'Climatización, HVAC y Extracción',
        descripcion: 'Sistemas de aire acondicionado comercial, calefacción, ventilación y campanas de extracción de humos para cocinas de alto volumen.',
        icono: 'viento'
    },
    {
        id: 'plomeria',
        titulo: 'Fontanería y Calentadores Comerciales',
        descripcion: 'Líneas de agua industrial, calentadores de agua de gran capacidad, grifería de alta presión y bombas de circulación.',
        icono: 'agua'
    },
    {
        id: 'grasas',
        titulo: 'Trampas de Grasa (Grease Trap)',
        descripcion: 'Limpieza, mantenimiento, inspección y reemplazo de trampas de grasa cumpliendo con todas las normativas medioambientales.',
        icono: 'filtro'
    },
    {
        id: 'drenajes',
        titulo: 'Drenaje y Alcantarillado Comercial',
        descripcion: 'Desazolve de líneas principales, hidro-lavado a alta presión (hydro-jetting) e inspección por video cámara de tuberías.',
        icono: 'tuberia'
    },
    {
        id: 'backflow',
        titulo: 'Prevención de Reflujo (Backflow)',
        descripcion: 'Certificación anual obligatoria, inspección técnica, reparación e instalación de dispositivos de prevención de reflujo de agua potable.',
        icono: 'escudo'
    },
    {
        id: 'exterior',
        titulo: 'Infraestructura y Facilidades',
        descripcion: 'Construcción y mantenimiento de plataformas exteriores, cerramientos para equipos, bases de concreto y adecuaciones comerciales.',
        icono: 'construccion'
    }
];

export const datosBeneficios = [
    {
        titulo: 'Servicio el Mismo Día (Same-Day Emergency)',
        descripcion: 'Entendemos que un equipo fuera de servicio representa pérdidas directas. Nuestros técnicos responden con rapidez en horas críticas.'
    },
    {
        titulo: 'Técnicos Certificados y Altamente Capacitados',
        descripcion: 'Personal experto con dominio de todas las marcas líderes de equipos para restaurantes, refrigeración y sistemas electromecánicos.'
    },
    {
        titulo: 'Mantenimiento Preventivo sin Interrupciones',
        descripcion: 'Programamos los servicios preventivos en horarios estratégicos para que tu cocina opere al 100% durante el servicio a clientes.'
    },
    {
        titulo: 'Garantía Integral en Mano de Obra y Repuestos',
        descripcion: 'Respaldamos cada intervención con una garantía integral que te brinda total tranquilidad y seguridad operativa.'
    },
    {
        titulo: 'Tranquilidad Total (Peace of Mind)',
        descripcion: 'Un solo proveedor de confianza para refrigeración, cocina, HVAC, fontanería y drenajes en toda tu operación comercial.'
    }
];

export const datosProyectos = [
    {
        id: 'p1',
        titulo: 'Restauración Integral de Cocina en Cadena Nacional',
        categoria: 'Cadenas de Restaurantes · DC Metro',
        descripcion: 'Mantenimiento y calibración completa de 8 freidoras industriales, hornos de convección y sistema de extracción en tiempo récord.',
        imagen: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'p2',
        titulo: 'Reemplazo de Cámaras Frigoríficas en Hotel Boutique',
        categoria: 'Hospitality & Hoteles · Alexandria, VA',
        descripcion: 'Instalación de dos cámaras walk-in con compresores ultra silenciosos y monitoreo térmico automatizado de temperatura.',
        imagen: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'p3',
        titulo: 'Optimización de Climatización y Campanas de Humo',
        categoria: 'Cocina Central · Tysons Corner, VA',
        descripcion: 'Adecuación de flujo de aire y reemplazo de motores de extracción para cocina de producción continua con 15 chefs simultáneos.',
        imagen: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'p4',
        titulo: 'Plan Preventivo de Drenajes y Trampas de Grasa',
        categoria: 'Residencia de Retiro y Salud · Bethesda, MD',
        descripcion: 'Hidro-lavado preventivo de líneas principales y certificación de dispositivos de reflujo para asegurar continuidad 100% higiénica.',
        imagen: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
    }
];

export const datosProceso = [
    {
        paso: '01',
        titulo: 'Contacto Directo o Emergencia 24/7',
        puntos: [
            'Línea de atención telefónica inmediata',
            'Atención para restaurantes y facilidades',
            'Despacho de técnicos el mismo día'
        ]
    },
    {
        paso: '02',
        titulo: 'Diagnóstico en Sitio',
        puntos: [
            'Inspección técnica exhaustiva',
            'Presupuesto transparente sin sorpresas',
            'Repuestos originales certificados'
        ]
    },
    {
        paso: '03',
        titulo: 'Reparación e Instalación Experta',
        puntos: [
            'Trabajo limpio y sin interrupciones operativas',
            'Cumplimiento de códigos locales de salud y seguridad',
            'Pruebas de rendimiento en caliente/frío'
        ]
    },
    {
        paso: '04',
        titulo: 'Garantía y Mantenimiento Continuo',
        puntos: [
            'Garantía por escrito en piezas y labor',
            'Planes preventivos personalizados',
            'Soporte permanente para tu tranquilidad'
        ]
    }
];

export const datosTestimonios = [
    {
        nombre: 'Carlos Mendoza',
        rol: 'Chef Ejecutivo · Restaurante de Cadena en DC',
        avatar: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=150&q=80',
        cita: 'Cuando el walk-in freezer falló un viernes en la noche, el equipo de SERTEC llegó en menos de 2 horas y salvó todo nuestro inventario. Son unos verdaderos salvavidas.',
        estrellas: 5
    },
    {
        nombre: 'Marcus Vance',
        rol: 'Director de Operaciones · Hotel en Alexandria, VA',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        cita: 'Llevamos más de 6 años confiando en SERTEC para la refrigeración, hornos y trampas de grasa. Su mantenimiento preventivo redujo nuestras fallas de emergencia a cero.',
        estrellas: 5
    },
    {
        nombre: 'Elena Rostova',
        rol: 'Gerente General · Restaurante Italiano',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
        cita: 'Profesionalismo de principio a fin. Trabajan limpio, con respeto por las normas de cocina y siempre con repuestos originales. Altamente recomendados.',
        estrellas: 5
    },
    {
        nombre: 'David Thompson',
        rol: 'Administrador de Instalaciones · Centro Educativo',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        cita: 'SERTEC se encarga de nuestras certificaciones de Backflow, HVAC y lavavajillas. Excelente servicio al cliente y facturación transparente.',
        estrellas: 5
    }
];

export const datosFaqs = [
    {
        pregunta: '¿Ofrecen servicio de emergencia el mismo día?',
        respuesta: 'Sí. Atendemos emergencias críticas las 24 horas del día, los 7 días de la semana. Entendemos que una falla en refrigeración o cocina detiene tu facturación, por lo que priorizamos las respuestas inmediatas en toda el área metropolitana de DC, Virginia y Maryland.'
    },
    {
        pregunta: '¿Qué tipo de equipos comerciales reparan e instalan?',
        respuesta: 'Cubrimos la gama completa de equipos gastronómicos y comerciales: cuartos fríos, máquinas de hielo, freidoras, hornos combinados, parrillas, estufas, lavavajillas de alta temperatura, campanas de extracción, sistemas HVAC, fontanería comercial, calentadores y trampas de grasa.'
    },
    {
        pregunta: '¿Trabajan con cadenas nacionales y establecimientos institucionales?',
        respuesta: 'Sí. Entre nuestros clientes habituales se encuentran cadenas de restaurantes a nivel nacional, hoteles, residencias de retiro, hospitales y centros educativos en Washington DC, Alexandria, Arlington, Fairfax, Bethesda y alrededores.'
    },
    {
        pregunta: '¿Ofrecen planes de mantenimiento preventivo?',
        respuesta: 'Sí. Diseñamos programas personalizados de mantenimiento preventivo mensual, trimestral o semestral adaptados al volumen de tu cocina para prevenir costosas fallas imprevistas y alargar la vida útil de tus equipos.'
    },
    {
        pregunta: '¿Realizan certificaciones anuales de Prevención de Reflujo (Backflow)?',
        respuesta: 'Sí. Contamos con técnicos certificados para realizar las pruebas anuales obligatorias de dispositivos de prevención de reflujo, tramitar la documentación ante las autoridades locales de agua y realizar reparaciones inmediatas si se detecta alguna fuga.'
    },
    {
        pregunta: '¿Qué garantía tienen los trabajos de SERTEC LLC?',
        respuesta: 'Todos nuestros servicios de reparación e instalación cuentan con una garantía completa por escrito tanto en mano de obra como en repuestos originales de fábrica.'
    }
];

export const datosContacto = {
    empresa: 'SERTEC LLC',
    telefono: '(888) 621-1115',
    telefonoLink: 'tel:8886211115',
    email: 'admin@sertecllc.net',
    direccion: '5510 Vine Street, Alexandria, VA 22310',
    areaServicio: 'Washington D.C., Virginia y Maryland'
};
