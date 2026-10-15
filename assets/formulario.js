/* AV&CO · Formulario CCA
 * Flujo: código → aviso de privacidad → 6 bloques (30 preguntas) → envío al Worker de Cloudflare.
 * Lo único que hay que configurar es API (la dirección del Worker, cuando esté publicado).
 */
(function () {
  'use strict';

  // ⚙️ Cambia esto por la dirección de tu Worker (Cloudflare › Workers › formulario-avandco).
  var API = 'https://formulario-avandco.modocoyote.workers.dev';

  var BLOQUES = [
 {
  "id": "datos",
  "titulo": "Tus datos",
  "descripcion": "Para saber a quién le escribimos.",
  "preguntas": [
   {
    "id": "p1",
    "texto": "Nombre completo",
    "tipo": "texto"
   },
   {
    "id": "p2",
    "texto": "Nombre del negocio",
    "tipo": "texto"
   },
   {
    "id": "p3",
    "texto": "¿Dónde está tu negocio?",
    "tipo": "ubicacion",
    "estados": {
     "Aguascalientes": [
      "Aguascalientes",
      "Jesús María",
      "Calvillo"
     ],
     "Baja California": [
      "Tijuana",
      "Mexicali",
      "Ensenada",
      "Tecate",
      "Rosarito"
     ],
     "Baja California Sur": [
      "La Paz",
      "Los Cabos",
      "Comondú",
      "Loreto"
     ],
     "Campeche": [
      "Campeche",
      "Ciudad del Carmen",
      "Champotón"
     ],
     "Chiapas": [
      "Tuxtla Gutiérrez",
      "Tapachula",
      "San Cristóbal de las Casas",
      "Comitán"
     ],
     "Chihuahua": [
      "Chihuahua",
      "Ciudad Juárez",
      "Delicias",
      "Cuauhtémoc",
      "Parral"
     ],
     "Ciudad de México": [
      "Ciudad de México"
     ],
     "Coahuila": [
      "Saltillo",
      "Torreón",
      "Monclova",
      "Piedras Negras",
      "Ramos Arizpe"
     ],
     "Colima": [
      "Colima",
      "Manzanillo",
      "Villa de Álvarez",
      "Tecomán"
     ],
     "Durango": [
      "Durango",
      "Gómez Palacio",
      "Lerdo"
     ],
     "Estado de México": [
      "Toluca",
      "Naucalpan",
      "Tlalnepantla",
      "Ecatepec",
      "Huixquilucan",
      "Metepec",
      "Nezahualcóyotl"
     ],
     "Guanajuato": [
      "León",
      "Irapuato",
      "Celaya",
      "Guanajuato",
      "Salamanca",
      "San Miguel de Allende"
     ],
     "Guerrero": [
      "Acapulco",
      "Chilpancingo",
      "Zihuatanejo",
      "Iguala",
      "Taxco"
     ],
     "Hidalgo": [
      "Pachuca",
      "Tulancingo",
      "Tula"
     ],
     "Jalisco": [
      "Guadalajara",
      "Zapopan",
      "Tlaquepaque",
      "Tonalá",
      "Puerto Vallarta",
      "Tlajomulco"
     ],
     "Michoacán": [
      "Morelia",
      "Uruapan",
      "Zamora",
      "Lázaro Cárdenas"
     ],
     "Morelos": [
      "Cuernavaca",
      "Jiutepec",
      "Cuautla"
     ],
     "Nayarit": [
      "Tepic",
      "Bahía de Banderas",
      "Compostela"
     ],
     "Nuevo León": [
      "Monterrey",
      "San Pedro Garza García",
      "San Nicolás de los Garza",
      "Guadalupe",
      "Apodaca",
      "Santa Catarina"
     ],
     "Oaxaca": [
      "Oaxaca de Juárez",
      "Salina Cruz",
      "Juchitán",
      "Puerto Escondido"
     ],
     "Puebla": [
      "Puebla",
      "San Andrés Cholula",
      "Tehuacán",
      "Atlixco"
     ],
     "Querétaro": [
      "Querétaro",
      "San Juan del Río",
      "Corregidora",
      "El Marqués"
     ],
     "Quintana Roo": [
      "Cancún",
      "Playa del Carmen",
      "Chetumal",
      "Tulum",
      "Cozumel"
     ],
     "San Luis Potosí": [
      "San Luis Potosí",
      "Soledad de Graciano Sánchez",
      "Ciudad Valles",
      "Matehuala"
     ],
     "Sinaloa": [
      "Culiacán",
      "Mazatlán",
      "Los Mochis",
      "Guasave",
      "Guamúchil",
      "Navolato"
     ],
     "Sonora": [
      "Hermosillo",
      "Ciudad Obregón",
      "Nogales",
      "San Luis Río Colorado",
      "Navojoa",
      "Guaymas"
     ],
     "Tabasco": [
      "Villahermosa",
      "Cárdenas",
      "Comalcalco"
     ],
     "Tamaulipas": [
      "Reynosa",
      "Matamoros",
      "Nuevo Laredo",
      "Tampico",
      "Ciudad Victoria",
      "Ciudad Madero"
     ],
     "Tlaxcala": [
      "Tlaxcala",
      "Apizaco",
      "Huamantla"
     ],
     "Veracruz": [
      "Veracruz",
      "Xalapa",
      "Boca del Río",
      "Coatzacoalcos",
      "Córdoba",
      "Orizaba",
      "Poza Rica"
     ],
     "Yucatán": [
      "Mérida",
      "Valladolid",
      "Progreso"
     ],
     "Zacatecas": [
      "Zacatecas",
      "Guadalupe",
      "Fresnillo"
     ]
    }
   },
   {
    "id": "p4",
    "texto": "WhatsApp",
    "tipo": "tel"
   },
   {
    "id": "p5",
    "texto": "Correo",
    "tipo": "email"
   }
  ]
 },
 {
  "id": "negocio",
  "titulo": "Tu negocio",
  "descripcion": "Qué vendes y cómo se decide la compra.",
  "preguntas": [
   {
    "id": "p6",
    "texto": "¿A qué se dedica tu negocio?",
    "tipo": "unica",
    "opciones": [
     "Inmobiliaria",
     "Clínica o servicio médico",
     "Escuela privada",
     "Comercio o tienda",
     "Restaurante o alimentos",
     "Servicios profesionales",
     "Otro"
    ],
    "extra": {
     "texto": "Cuéntanos en una frase (opcional)"
    }
   },
   {
    "id": "p7",
    "texto": "¿Qué es lo que más vendes?",
    "tipo": "largo"
   },
   {
    "id": "p8",
    "texto": "¿Cuánto cuesta en promedio una venta? (pesos mexicanos, MXN)",
    "tipo": "unica",
    "opciones": [
     "Menos de $1,000",
     "$1,000 a $5,000",
     "$5,000 a $20,000",
     "$20,000 a $100,000",
     "Más de $100,000"
    ]
   },
   {
    "id": "p9",
    "texto": "¿Cuántas personas venden en el negocio, incluyéndote?",
    "tipo": "unica",
    "opciones": [
     "Solo yo",
     "2 o 3",
     "4 a 10",
     "Más de 10"
    ]
   },
   {
    "id": "p10",
    "texto": "¿Quién decide la compra del lado del cliente?",
    "tipo": "unica",
    "opciones": [
     "La misma persona que pregunta",
     "En pareja o en familia",
     "Un gerente o área de compras",
     "Varias personas",
     "Otro"
    ]
   },
   {
    "id": "p11",
    "texto": "¿Cuánto tarda alguien en decidirse, desde que pregunta hasta que compra?",
    "tipo": "unica",
    "opciones": [
     "El mismo día",
     "1 a 7 días",
     "1 a 4 semanas",
     "1 a 3 meses",
     "Más de 3 meses"
    ]
   }
  ]
 },
 {
  "id": "llegada",
  "titulo": "Cómo te llegan los interesados",
  "descripcion": "De dónde vienen y cuántos son.",
  "preguntas": [
   {
    "id": "p12",
    "texto": "¿Por dónde te llegan hoy los interesados?",
    "tipo": "multiple",
    "ayuda": "Puedes marcar varias.",
    "opciones": [
     "WhatsApp",
     "Facebook",
     "Instagram",
     "TikTok",
     "Google",
     "Página web",
     "Recomendación",
     "Llamadas",
     "Visitas al local",
     "Otro"
    ]
   },
   {
    "id": "p13",
    "texto": "¿Cuántas personas te preguntan al mes, aproximadamente?",
    "tipo": "numero"
   },
   {
    "id": "p14",
    "texto": "¿Inviertes en publicidad?",
    "tipo": "sino",
    "si": {
     "tipo": "unica",
     "texto": "¿Cuánto al mes, en pesos mexicanos (MXN)?",
     "opciones": [
      "Menos de $2,000 MXN",
      "$2,000 a $5,000 MXN",
      "$5,000 a $15,000 MXN",
      "Más de $15,000 MXN"
     ]
    }
   },
   {
    "id": "p15",
    "texto": "¿Les das algo de valor antes de que te compren?",
    "tipo": "sino",
    "si": {
     "tipo": "texto",
     "texto": "¿Qué les das?"
    }
   }
  ]
 },
 {
  "id": "atencion",
  "titulo": "Cómo los atienden",
  "descripcion": "Quién contesta, cuánto tardan y con qué.",
  "preguntas": [
   {
    "id": "p16",
    "texto": "¿Quién contesta los mensajes y las llamadas?",
    "tipo": "unica",
    "opciones": [
     "Yo",
     "Un vendedor",
     "Una recepcionista o asistente",
     "Varios, según quién esté",
     "Nadie fijo"
    ]
   },
   {
    "id": "p17",
    "texto": "¿En cuánto tiempo contestan normalmente?",
    "tipo": "unica",
    "opciones": [
     "Menos de 5 minutos",
     "Menos de 1 hora",
     "El mismo día",
     "Al día siguiente",
     "Más de un día"
    ]
   },
   {
    "id": "p18",
    "texto": "¿Usas WhatsApp normal o WhatsApp Business?",
    "tipo": "unica",
    "opciones": [
     "WhatsApp normal",
     "WhatsApp Business",
     "No uso WhatsApp"
    ]
   },
   {
    "id": "p19",
    "texto": "Escribe las tres preguntas que más te repiten los interesados",
    "tipo": "tres",
    "ayuda": "Una pregunta en cada casilla."
   },
   {
    "id": "p20",
    "texto": "¿Tienen esas respuestas escritas en algún lado?",
    "tipo": "unica",
    "opciones": [
     "Sí, todas",
     "Algunas",
     "No, cada quien contesta como puede"
    ]
   }
  ]
 },
 {
  "id": "seguimiento",
  "titulo": "Ventas y seguimiento",
  "descripcion": "Qué pasa con los que compran y con los que no.",
  "preguntas": [
   {
    "id": "p21",
    "texto": "¿Qué es lo que más te tumba una venta?",
    "tipo": "multiple",
    "ayuda": "Marca hasta 3.",
    "max": 3,
    "opciones": [
     "El precio",
     "Tardamos en contestar",
     "No les damos seguimiento",
     "Se van con otro",
     "No era el cliente indicado",
     "No les generamos confianza",
     "Otro"
    ]
   },
   {
    "id": "p22",
    "texto": "De los que te preguntan al mes, ¿cuántos te compran, aproximadamente?",
    "tipo": "numero"
   },
   {
    "id": "p23",
    "texto": "¿Qué pasa con los que no compran?",
    "tipo": "unica",
    "opciones": [
     "Nada, se quedan ahí",
     "Les escribo una vez",
     "Les doy varios seguimientos",
     "Los guardo para escribirles después"
    ]
   },
   {
    "id": "p24",
    "texto": "¿Les vuelves a escribir a los que no compraron?",
    "tipo": "sino",
    "si": {
     "tipo": "unica",
     "texto": "¿Después de cuánto tiempo?",
     "opciones": [
      "Al día siguiente",
      "A los 2 o 3 días",
      "A la semana",
      "Más de una semana después"
     ]
    }
   },
   {
    "id": "p25",
    "texto": "¿Qué les escribes cuando les vuelves a escribir?",
    "tipo": "multiple",
    "ayuda": "Puedes marcar varias.",
    "opciones": [
     "Les pregunto si siguen interesados",
     "Les recuerdo el precio o la propuesta",
     "Les mando una promoción o descuento",
     "Les comparto información o contenido útil",
     "Les pregunto qué los detuvo",
     "Otro"
    ],
    "depende": "p24"
   },
   {
    "id": "p26",
    "texto": "¿Cuántos de ellos te contestan?",
    "tipo": "unica",
    "opciones": [
     "Casi ninguno",
     "Menos de la mitad",
     "Como la mitad",
     "La mayoría"
    ],
    "depende": "p24"
   },
   {
    "id": "p27",
    "texto": "¿Llevas un registro de los interesados que no compraron?",
    "tipo": "sino",
    "si": {
     "tipo": "unica",
     "texto": "¿Dónde?",
     "opciones": [
      "En una libreta",
      "En Excel o Google Sheets",
      "Con etiquetas de WhatsApp",
      "En un CRM",
      "Otro"
     ]
    }
   }
  ]
 },
 {
  "id": "cierre",
  "titulo": "Lo que sigue",
  "descripcion": "Lo que ya probaste y lo que quieres lograr.",
  "preguntas": [
   {
    "id": "p28",
    "texto": "¿Qué has intentado antes para resolver esto?",
    "tipo": "multiple",
    "ayuda": "Puedes marcar varias.",
    "sola": "Nada todavía",
    "opciones": [
     "Nada todavía",
     "Publicidad pagada",
     "Contratar más vendedores",
     "Capacitar a mi equipo de ventas",
     "Un CRM o sistema de seguimiento",
     "Bajar precios o hacer promociones",
     "Contratar una agencia de marketing",
     "Otro"
    ]
   },
   {
    "id": "p29",
    "texto": "¿Qué sí te está funcionando y no quieres cambiar?",
    "tipo": "largo"
   },
   {
    "id": "p30",
    "texto": "Si pudieras arreglar una sola cosa de tu proceso de venta, ¿cuál sería?",
    "tipo": "largo"
   }
  ]
 }
];

  var $ = function (id) { return document.getElementById(id); };
  var estado = { codigo: '', negocio: '', bloque: 0, respuestas: {}, portal: null };

  // ---------- guardado local (solo en el navegador del cliente) ----------
  function claveBorrador() { return 'avco-formulario-v3-' + estado.codigo; }
  function guardarBorrador() {
    try {
      localStorage.setItem(claveBorrador(), JSON.stringify({ respuestas: estado.respuestas, bloque: estado.bloque }));
      $('guardado').textContent = 'Avance guardado en este dispositivo';
    } catch (e) { /* sin almacenamiento: el formulario sigue funcionando */ }
  }
  function leerBorrador() {
    try { return JSON.parse(localStorage.getItem(claveBorrador()) || 'null'); } catch (e) { return null; }
  }
  function borrarBorrador() { try { localStorage.removeItem(claveBorrador()); } catch (e) {} }

  // ---------- utilidades ----------
  function mostrar(id) {
    ['pantalla-codigo', 'pantalla-portal', 'pantalla-preguntas', 'pantalla-gracias', 'pantalla-final'].forEach(function (p) {
      $(p).hidden = (p !== id);
    });
    $('ruta').hidden = (id === 'pantalla-codigo');
    if (id !== 'pantalla-codigo') pintarRuta();
    window.scrollTo(0, 0);
  }
  function mensaje(contenedor, texto, tipo) {
    $(contenedor).innerHTML = '';
    if (!texto) return;
    var d = document.createElement('div');
    d.className = 'mensaje ' + (tipo || 'error');
    d.textContent = texto;
    $(contenedor).appendChild(d);
  }
  function normalizarCodigo(v) { return (v || '').toUpperCase().replace(/[^A-Z0-9-]/g, '').trim(); }
  function llamar(ruta, cuerpo) {
    return fetch(API + ruta, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cuerpo)
    }).then(function (r) {
      return r.json().catch(function () { return { ok: false, motivo: 'servidor' }; });
    });
  }
  var MOTIVOS = {
    no_existe: 'No encontramos ese código. Revísalo o escríbenos por WhatsApp al 667 411 1515.',
    usado: 'Este código ya se usó. Si necesitas corregir algo, escríbenos por WhatsApp al 667 411 1515.',
    demasiados_intentos: 'Hubo demasiados intentos. Espera unos minutos y vuelve a intentarlo.',
    incompleto: 'Faltan respuestas. Revisa los bloques del formulario.',
    ocupado: 'Ese horario se acaba de ocupar. Elige otro, por favor.',
    correo: 'Revisa el correo: ahí te llega la invitación con el enlace de la videollamada.',
    muy_tarde: 'Faltan menos de 24 horas para tu sesión, ya no se puede mover en línea. Escríbenos por WhatsApp al 667 411 1515.',
    ya_agendada: 'Tu sesión de entrega ya estaba agendada.',
    no_disponible: 'Las sesiones de implementación se agendan después de tu sesión de entrega.',
    sin_cita: 'Primero agenda tu sesión de entrega; con eso se desbloquea tu guía.',
    sin_autorizar: 'Primero acepta el contrato, los términos y el aviso de privacidad.',
    sin_pago: 'Tu formulario se abre cuando confirmemos tu pago. Te avisamos por WhatsApp.',
    orden: 'Vamos en orden: primero el contrato, luego los términos y al final el aviso.',
    version_nueva: 'Este documento se acaba de actualizar. Te mostramos la versión nueva para que la leas antes de aceptar.',
    sin_documento: 'No pudimos cargar este documento. Escríbenos por WhatsApp al 667 411 1515 y te ayudamos.',
    faltan: 'Elige una calificación del 1 al 5.',
    servidor: 'No pudimos conectar. Revisa tu internet e inténtalo otra vez; tu avance está guardado.'
  };

  // ---------- paso 0: código ----------
  $('form-codigo').addEventListener('submit', function (ev) {
    ev.preventDefault();
    var codigo = normalizarCodigo($('codigo').value);
    if (codigo.length < 6) { mensaje('msg-codigo', 'Escribe el código completo.'); return; }
    $('btn-codigo').disabled = true;
    mensaje('msg-codigo', 'Revisando tu código…', 'info');
    llamar('/verificar', { codigo: codigo }).then(function (r) {
      $('btn-codigo').disabled = false;
      if (!r.ok) { mensaje('msg-codigo', MOTIVOS[r.motivo] || MOTIVOS.servidor); return; }
      estado.codigo = codigo;
      estado.portal = r.portal || null;
      if (r.enviado) { mensaje('msg-codigo', ''); borrarBorrador(); abrirGracias(r, true); return; }
      estado.negocio = r.negocio || '';
      var b = leerBorrador();
      if (b) {
        estado.respuestas = b.respuestas || {};
        estado.bloque = b.bloque || 0;
      }
      mensaje('msg-codigo', '');
      irAlPortal();
    }).catch(function () {
      $('btn-codigo').disabled = false;
      mensaje('msg-codigo', MOTIVOS.servidor);
    });
  });

  // ---------- portal: autorizaciones (contrato con anexo B, términos, aviso) y datos de pago ----------
  // Los textos salen de la Bóveda (Notion) a través del Worker; el contrato y los términos no tienen página pública.
  var DOCS = {
    contrato: { paso: 1, corto: 'Contrato', etiqueta: 'Paso 1 de 3 · Contrato',
      intro: 'Léelo con calma. Abajo están las autorizaciones opcionales y el botón para aceptar.',
      acepto: 'Acepto el contrato de servicios', texto: 'Leí el contrato y sus anexos y acepto sus condiciones.' },
    terminos: { paso: 2, corto: 'Términos', etiqueta: 'Paso 2 de 3 · Términos del servicio',
      intro: 'Cómo funciona el servicio en el día a día: plazos, sesiones y cambios.',
      acepto: 'Acepto los términos del servicio', texto: 'Leí los términos y los acepto.' },
    aviso: { paso: 3, corto: 'Aviso de privacidad', etiqueta: 'Paso 3 de 3 · Aviso de privacidad',
      intro: 'Cómo cuidamos tus datos. También está publicado en avandco.mx/privacidad.',
      acepto: 'Acepto el aviso de privacidad', texto: 'He leído el aviso y acepto el tratamiento de mis datos para las finalidades necesarias.' }
  };
  var ANEXO_B = [
    { v: 'Grabar sesiones', t: 'Grabar mis sesiones', d: 'Para compartírtelas después. Google Meet gratis no graba, así que es opcional.' },
    { v: 'Hallazgos anónimos', t: 'Usar hallazgos anónimos', d: 'Datos agregados de tu Diagnóstico, sin nombres, en el contenido de AV&CO.' },
    { v: 'Mención como cliente', t: 'Mencionar a tu negocio como cliente', d: 'Siempre con tu revisión previa del texto.' },
    { v: 'Llamada de referencia', t: 'Tomar una llamada de referencia', d: 'Con un prospecto de AV&CO que quiera conocer tu experiencia.' }
  ];
  var docActual = null;

  function irAlPortal(aviso) {
    var p = estado.portal || {};
    if (!p.autorizado) { abrirDocumento(p.siguiente || 'contrato', aviso); return; }
    if (!p.pagoConfirmado) { abrirPago(aviso); return; }
    abrirBloque(estado.bloque || 0);
  }

  function pintarPasosPortal(actual) {
    var a = (estado.portal && estado.portal.aceptaciones) || {};
    var lista = $('portal-pasos');
    lista.innerHTML = '';
    ['contrato', 'terminos', 'aviso', 'pago'].forEach(function (k, n) {
      var hecho = k === 'pago' ? !!(estado.portal && estado.portal.pagoConfirmado) : !!a[k];
      var li = el('li', { className: hecho ? 'hecho' : (k === actual ? 'actual' : '') });
      var bola = el('span', { className: 'bola' });
      if (hecho) bola.innerHTML = PALOMITA; else bola.textContent = String(n + 1);
      li.appendChild(bola);
      li.appendChild(el('span', { className: 't', text: k === 'pago' ? 'Datos de pago' : DOCS[k].corto }));
      lista.appendChild(li);
    });
    $('portal-movil').textContent = actual === 'pago' ? 'Autorizaciones listas · datos de pago' : DOCS[actual].etiqueta;
  }

  function abrirDocumento(tipo, aviso) {
    var d = DOCS[tipo];
    docActual = { tipo: tipo, version: '' };
    $('doc-etiqueta').textContent = estado.negocio ? 'Hola, ' + estado.negocio + ' · ' + d.etiqueta : d.etiqueta;
    $('doc-titulo').textContent = tipo === 'contrato' ? 'Contrato de servicios' : tipo === 'terminos' ? 'Términos del servicio' : 'Aviso de privacidad';
    $('doc-intro').textContent = d.intro;
    $('doc-acepto-titulo').textContent = d.acepto;
    $('doc-acepto-texto').textContent = d.texto;
    $('doc-acepto').checked = false;
    $('btn-doc').disabled = true;
    $('doc-aceptar').hidden = false;
    $('pago-espera').hidden = true;
    $('anexo-b').hidden = tipo !== 'contrato';
    if (tipo === 'contrato') pintarAnexoB();
    mensaje('msg-doc', aviso || '', aviso ? 'info' : '');
    $('doc-contenido').innerHTML = '<p>Cargando…</p>';
    pintarPasosPortal(tipo);
    mostrar('pantalla-portal');
    llamar('/documento', { codigo: estado.codigo, tipo: tipo }).then(function (r) {
      if (!r.ok) { $('doc-contenido').innerHTML = ''; mensaje('msg-doc', MOTIVOS[r.motivo] || MOTIVOS.servidor); return; }
      docActual.version = r.version;
      pintarBloques($('doc-contenido'), r.bloques, { sinCasillas: tipo === 'contrato' });
      $('doc-contenido').scrollTop = 0;
    }).catch(function () { mensaje('msg-doc', MOTIVOS.servidor); });
  }

  function pintarAnexoB() {
    var caja = $('anexo-b-lista');
    caja.innerHTML = '';
    ANEXO_B.forEach(function (o, k) {
      var lab = el('label', { className: 'interruptor', 'for': 'anexo-' + k });
      lab.appendChild(el('input', { type: 'checkbox', id: 'anexo-' + k, value: o.v }));
      lab.appendChild(el('span', { className: 'riel' }));
      var txt = el('span', { className: 'txt' });
      txt.appendChild(el('b', { text: o.t }));
      txt.appendChild(el('span', { text: o.d }));
      lab.appendChild(txt);
      caja.appendChild(lab);
    });
  }

  $('doc-acepto').addEventListener('change', function () { $('btn-doc').disabled = !this.checked || !docActual || !docActual.version; });
  $('btn-doc').addEventListener('click', function () {
    if (!$('doc-acepto').checked || !docActual || !docActual.version) return;
    var btn = this, tipo = docActual.tipo;
    var anexo = tipo === 'contrato'
      ? Array.prototype.map.call(document.querySelectorAll('#anexo-b-lista input:checked'), function (i) { return i.value; })
      : [];
    btn.disabled = true;
    mensaje('msg-doc', 'Guardando tu aceptación…', 'info');
    llamar('/aceptar', { codigo: estado.codigo, tipo: tipo, version: docActual.version, anexoB: anexo }).then(function (r) {
      if (r.ok) { estado.portal = r.portal; mensaje('msg-doc', ''); irAlPortal(); return; }
      if (r.motivo === 'version_nueva') { abrirDocumento(tipo, MOTIVOS.version_nueva); return; }
      if (r.motivo === 'orden') {
        return llamar('/verificar', { codigo: estado.codigo }).then(function (v) { if (v.ok) estado.portal = v.portal; irAlPortal(MOTIVOS.orden); });
      }
      btn.disabled = false;
      mensaje('msg-doc', MOTIVOS[r.motivo] || MOTIVOS.servidor);
    }).catch(function () { btn.disabled = false; mensaje('msg-doc', MOTIVOS.servidor); });
  });

  function abrirPago(aviso) {
    docActual = null;
    $('doc-etiqueta').textContent = 'Autorizaciones listas';
    $('doc-titulo').textContent = 'Datos para tu pago';
    $('doc-intro').textContent = 'Ya aceptaste el contrato, los términos y el aviso. Estos son los datos para tu transferencia.';
    $('doc-aceptar').hidden = true;
    $('anexo-b').hidden = true;
    $('pago-espera').hidden = false;
    pintarPagoAvisado();
    mensaje('msg-doc', aviso || '', 'info');
    $('doc-contenido').hidden = false;
    $('doc-contenido').innerHTML = '<p>Cargando…</p>';
    pintarPasosPortal('pago');
    mostrar('pantalla-portal');
    llamar('/documento', { codigo: estado.codigo, tipo: 'pago' }).then(function (r) {
      if (!r.ok) {
        $('doc-contenido').innerHTML = '';
        $('doc-contenido').appendChild(el('p', { text: 'Te mandamos los datos para tu transferencia por WhatsApp. Si no los tienes, escríbenos al 667 411 1515.' }));
        return;
      }
      pintarBloques($('doc-contenido'), r.bloques, {});
    }).catch(function () { mensaje('msg-doc', MOTIVOS.servidor); });
  }

  function pintarPagoAvisado() {
    var en = estado.portal && estado.portal.pagoAvisado, t = $('pago-avisado-txt'), b = $('btn-pago-avisado');
    t.hidden = !en; b.hidden = !!en;
    if (en) t.textContent = 'Nos avisaste de tu transferencia el ' + new Date(en).toLocaleString('es-MX', { day: 'numeric', month: 'long', hour: 'numeric', minute: '2-digit' }) + '. La revisamos y te avisamos por WhatsApp en cuanto se abra tu formulario.';
  }

  $('btn-pago-avisado').addEventListener('click', function () {
    var btn = this;
    btn.disabled = true;
    llamar('/pago-avisado', { codigo: estado.codigo }).then(function (r) {
      btn.disabled = false;
      if (!r.ok) { mensaje('msg-doc', MOTIVOS[r.motivo] || MOTIVOS.servidor); return; }
      estado.portal = r.portal;
      if (r.portal && r.portal.pagoConfirmado) { irAlPortal(); return; }
      pintarPagoAvisado();
      mensaje('msg-doc', 'Listo, ya nos llegó tu aviso. No olvides mandar tu comprobante por WhatsApp.', 'info');
    }).catch(function () { btn.disabled = false; mensaje('msg-doc', MOTIVOS.servidor); });
  });

  $('btn-revisar-pago').addEventListener('click', function () {
    var btn = this;
    btn.disabled = true;
    llamar('/verificar', { codigo: estado.codigo }).then(function (v) {
      btn.disabled = false;
      if (!v.ok) { mensaje('msg-doc', MOTIVOS[v.motivo] || MOTIVOS.servidor); return; }
      estado.portal = v.portal;
      if (v.enviado) { abrirGracias(v, true); return; }
      if (v.portal && v.portal.pagoConfirmado) { irAlPortal(); return; }
      mensaje('msg-doc', 'Todavía no vemos tu pago confirmado. Te avisamos por WhatsApp en cuanto lo confirmemos.', 'info');
    }).catch(function () { btn.disabled = false; mensaje('msg-doc', MOTIVOS.servidor); });
  });

  // Bloques de la Bóveda a HTML (solo texto, negritas, cursivas y enlaces seguros).
  function pintarBloques(caja, bloques, op) {
    caja.innerHTML = '';
    var lista = null, tipoLista = '';
    (bloques || []).forEach(function (b) {
      if (b.t === 'todo' && op.sinCasillas) return;           // el anexo B se contesta con los interruptores
      if (b.t === 'ul' || b.t === 'ol' || b.t === 'todo') {
        var tl = b.t === 'ol' ? 'ol' : 'ul';
        if (!lista || tipoLista !== tl) { lista = el(tl); tipoLista = tl; caja.appendChild(lista); }
        var li = el('li');
        if (b.t === 'todo') li.appendChild(document.createTextNode(op.marcas && op.marcas.shift() ? '☑ ' : '☐ '));
        lista.appendChild(conTexto(li, b.r, op));
        return;
      }
      lista = null;
      if (b.t === 'hr') { caja.appendChild(el('hr')); return; }
      caja.appendChild(conTexto(el({ h1: 'h2', h2: 'h3', h3: 'h4', q: 'blockquote' }[b.t] || 'p'), b.r, op));
    });
  }
  function conTexto(nodo, partes, op) {
    (partes || []).forEach(function (x) {
      var t = op && op.reemplazos ? Object.keys(op.reemplazos).reduce(function (s, k) { return s.split(k).join(op.reemplazos[k]); }, x.x) : x.x;
      var n = document.createTextNode(t);
      if (x.i) { var i = document.createElement('i'); i.appendChild(n); n = i; }
      if (x.b) { var b = document.createElement('b'); b.appendChild(n); n = b; }
      if (x.h && /^(https?:|mailto:)/.test(x.h)) { var a = document.createElement('a'); a.href = x.h; a.target = '_blank'; a.rel = 'noopener'; a.appendChild(n); n = a; }
      nodo.appendChild(n);
    });
    return nodo;
  }

  // ---------- mapa del servicio (arriba, en todas las pantallas) ----------
  var RUTA = ['Autorizaciones', 'Pago', 'Formulario', 'Sesión de entrega', 'Implementación', 'Cierre'];
  function pasoActual() {
    var p = estado.portal || {}, i = agenda.info;
    if (i) {
      if (i.final) return 5;
      if (i.entrega && i.entrega.pasada) return 4;
      return 3;
    }
    if (!p.autorizado) return 0;
    if (!p.pagoConfirmado) return 1;
    return 2;
  }
  function pintarRuta() {
    var lista = $('ruta-lista'), actual = pasoActual();
    lista.innerHTML = '';
    RUTA.forEach(function (t, k) {
      var li = el('li', { className: k < actual ? 'hecho' : (k === actual ? 'actual' : '') });
      var bola = el('span', { className: 'bola' });
      if (k < actual) bola.innerHTML = PALOMITA; else bola.textContent = String(k + 1);
      li.appendChild(bola);
      li.appendChild(el('span', { className: 't', text: t }));
      if (k === actual) li.setAttribute('aria-current', 'step');
      lista.appendChild(li);
    });
    $('ruta-movil').textContent = 'Paso ' + (actual + 1) + ' de ' + RUTA.length + ' · ' + RUTA[actual];
  }

  // ---------- contrato en PDF (el navegador lo guarda como PDF desde la ventana de impresión) ----------
  function fechaHora(iso) {
    try {
      return new Intl.DateTimeFormat('es-MX', { timeZone: 'America/Mazatlan', dateStyle: 'long', timeStyle: 'short' }).format(new Date(iso));
    } catch (e) { return iso; }
  }
  function botonContrato() {
    var b = el('button', { type: 'button', className: 'btn btn-linea btn-chico', text: 'Descargar contrato (PDF)' });
    b.addEventListener('click', function () { imprimirContrato(b); });
    return b;
  }
  function imprimirContrato(boton) {
    var texto = boton.textContent;
    boton.disabled = true; boton.textContent = 'Preparando…';
    llamar('/documento', { codigo: estado.codigo, tipo: 'contrato' }).then(function (r) {
      boton.disabled = false; boton.textContent = texto;
      if (!r.ok || !r.aceptado) { alertaGuia(MOTIVOS[r.motivo] || 'Tu contrato todavía no está listo para descargar. Escríbenos por WhatsApp al 667 411 1515.'); return; }
      var c = $('impresion'), fecha = fechaHora(r.aceptado.en), anexo = r.aceptado.anexoB || [];
      c.innerHTML = '';
      var cab = el('div', { className: 'imp-cab' });
      cab.appendChild(el('img', { src: '/assets/marca/logo.png', alt: 'AV&CO' }));
      cab.appendChild(el('div', { className: 'imp-meta', text: 'Cliente: ' + (r.nombre || estado.negocio) + ' · Código: ' + estado.codigo }));
      cab.appendChild(el('div', { className: 'imp-meta', text: 'Contrato versión ' + r.version + ' · Aceptado en línea el ' + fecha + ' (hora de Culiacán)' }));
      cab.appendChild(el('div', { className: 'imp-meta', text: 'Autorizaciones del anexo B: ' + (anexo.length ? anexo.join(', ') : 'ninguna') }));
      c.appendChild(cab);
      var cuerpo = el('div', { className: 'imp-cuerpo' });
      pintarBloques(cuerpo, r.bloques, {
        reemplazos: { '[fecha y hora de aceptación]': fecha + ' (hora de Culiacán)' },
        marcas: ANEXO_B.map(function (o) { return anexo.indexOf(o.v) >= 0; })
      });
      c.appendChild(cuerpo);
      var titulo = document.title;
      document.title = 'Contrato AV&CO · ' + (r.nombre || estado.negocio || estado.codigo);
      window.addEventListener('afterprint', function volver() { document.title = titulo; window.removeEventListener('afterprint', volver); });
      window.print();
    }).catch(function () {
      boton.disabled = false; boton.textContent = texto;
      alertaGuia(MOTIVOS.servidor);
    });
  }

  // ---------- cierre del servicio ----------
  function abrirFinal(info) {
    var p = estado.portal || {};
    var nombre = info.negocio || p.nombre || '';
    $('final-titulo').textContent = nombre ? 'Servicio terminado, ' + nombre : 'Servicio terminado';
    var hoy = new Date().toISOString().slice(0, 10);
    if (p.extrasHasta && hoy <= p.extrasHasta) {
      var f = new Date(p.extrasHasta + 'T12:00:00Z').toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
      $('final-extras').textContent = 'Puedes sumar sesiones de $990 + IVA cada una, al mismo precio de tu propuesta, hasta el ' + f + '. Escríbenos y te las activamos aquí mismo, en tu portal.';
    } else {
      $('final-extras').textContent = 'Escríbenos y te compartimos el precio vigente de las sesiones adicionales. Se activan aquí mismo, en tu portal.';
    }
    $('final-whatsapp').href = 'https://wa.me/526674111515?text=' + encodeURIComponent('Hola, soy de ' + (nombre || 'mi negocio') + ' (código ' + estado.codigo + '). Quiero más sesiones de implementación.');
    pintarOpinion(!!info.opinion);
    var d = $('final-descargas');
    d.innerHTML = '';
    d.appendChild(el('h3', { text: 'Tus documentos' }));
    var fila = el('div', { className: 'botones-descarga' });
    var g = el('button', { type: 'button', className: 'btn btn-linea btn-chico', text: 'Descargar guía (PDF)' });
    g.addEventListener('click', function () { descargarGuia(g); });
    fila.appendChild(g);
    fila.appendChild(botonContrato());
    d.appendChild(fila);
    mostrar('pantalla-final');
  }

  function pintarOpinion(enviada) {
    if (enviada) {
      $('opinion').innerHTML = '';
      $('opinion').appendChild(el('h3', { text: 'Gracias por tu opinión' }));
      $('opinion').appendChild(el('p', { className: 'final-texto', text: 'Nos ayuda a mejorar el servicio para los siguientes negocios.' }));
      return;
    }
    var caja = $('op-satisfaccion');
    if (caja.childNodes.length) return;
    [1, 2, 3, 4, 5].forEach(function (n) {
      var lab = el('label', { className: 'opcion' });
      lab.appendChild(el('input', { type: 'radio', name: 'satisfaccion', value: String(n) }));
      lab.appendChild(document.createTextNode(String(n)));
      caja.appendChild(lab);
    });
  }
  $('op-recomienda').addEventListener('change', function () { $('op-recomienda-txt').textContent = this.checked ? 'Sí' : 'No'; });
  $('form-opinion').addEventListener('submit', function (ev) {
    ev.preventDefault();
    var s = document.querySelector('input[name="satisfaccion"]:checked');
    if (!s) { mensaje('msg-opinion', MOTIVOS.faltan); return; }
    var btn = $('btn-opinion');
    btn.disabled = true;
    llamar('/opinion', {
      codigo: estado.codigo, satisfaccion: Number(s.value),
      recomendaria: $('op-recomienda').checked, comentario: $('op-comentario').value
    }).then(function (r) {
      btn.disabled = false;
      if (!r.ok) { mensaje('msg-opinion', MOTIVOS[r.motivo] || MOTIVOS.servidor); return; }
      pintarOpinion(true);
    }).catch(function () { btn.disabled = false; mensaje('msg-opinion', MOTIVOS.servidor); });
  });

  // ---------- pasos 2 a 7: bloques ----------
  // Cada respuesta se guarda «en crudo» (lo que el cliente marcó) y se arma el texto final al enviar.
  var OTRO = { 'Otro': true, 'Otra': true };

  function el(tag, props, hijos) {
    var e = document.createElement(tag);
    if (props) Object.keys(props).forEach(function (k) {
      if (k === 'text') e.textContent = props[k];
      else if (k === 'className') e.className = props[k];
      else e.setAttribute(k, props[k]);
    });
    (hijos || []).forEach(function (h) { if (h) e.appendChild(h); });
    return e;
  }
  function campoTexto(nombre, valor, marcador, largo) {
    var i = el(largo ? 'textarea' : 'input', { name: nombre, placeholder: marcador || '' });
    if (!largo) i.type = 'text';
    i.maxLength = largo ? 1800 : 300;
    if (valor) i.value = valor;
    return i;
  }
  function titulo(p, num, comoLeyenda) {
    var t = el(comoLeyenda ? 'legend' : 'label');
    t.appendChild(el('span', { className: 'num-p', text: num + '.' }));
    t.appendChild(document.createTextNode(p.texto));
    if (p.ayuda) t.appendChild(el('span', { className: 'ayuda', text: p.ayuda }));
    return t;
  }

  // Desplegable de opción única, con «Elige una opción» al inicio.
  function desplegable(nombre, opciones, elegida, etiqueta) {
    var s = el('select', { name: nombre, 'aria-label': etiqueta }, [el('option', { value: '', text: 'Elige una opción' })]);
    opciones.forEach(function (op) { var o = el('option', { value: op, text: op }); if (op === elegida) o.selected = true; s.appendChild(o); });
    return s;
  }

  function crearCampo(p, num) {
    var cont = el('div', { className: 'campo', 'data-id': p.id });
    var r = estado.respuestas[p.id];

    if (p.tipo === 'unica') {
      var lt = titulo(p, num);
      var sel = desplegable(p.id, p.opciones, r && r.v, p.texto);
      sel.id = 'c-' + p.id; lt.setAttribute('for', sel.id);
      cont.appendChild(lt); cont.appendChild(sel);
      if (p.opciones.some(function (o) { return OTRO[o]; })) {
        var otroU = campoTexto(p.id + '__otro', r && r.otro, 'Escribe cuál (obligatorio)');
        otroU.className = 'sub-campo'; otroU.dataset.rol = 'otro';
        cont.appendChild(otroU);
      }
      if (p.extra) {
        var exU = campoTexto(p.id + '__extra', r && r.extra, p.extra.texto);
        exU.className = 'sub-campo'; exU.dataset.rol = 'extra';
        cont.appendChild(exU);
      }
    } else if (p.tipo === 'sino') {
      // Interruptor de activado o desactivado, como el del aviso de privacidad.
      r = r || { v: 'No' };
      cont.appendChild(titulo(p, num));
      var chk = el('input', { type: 'checkbox', name: p.id, id: 'c-' + p.id });
      chk.checked = r.v === 'Sí';
      cont.appendChild(el('label', { className: 'interruptor sino', for: chk.id }, [chk, el('span', { className: 'riel' }),
        el('span', { className: 'txt' }, [el('b', { text: chk.checked ? 'Sí' : 'No' })])]));
      var si = el('div', { className: 'sub-campo si-detalle' });
      si.dataset.rol = 'si';
      si.appendChild(el('label', { className: 'sub-titulo', for: 'c-' + p.id + '__d', text: p.si.texto }));
      var d;
      if (p.si.tipo === 'unica') d = desplegable(p.id + '__d', p.si.opciones, r.d, p.si.texto);
      else d = campoTexto(p.id + '__d', r.d, 'Escríbelo aquí (obligatorio)');
      d.id = 'c-' + p.id + '__d';
      si.appendChild(d);
      if (p.si.opciones && p.si.opciones.some(function (o) { return OTRO[o]; })) {
        var otroS = campoTexto(p.id + '__otro', r.otro, 'Escribe cuál (obligatorio)');
        otroS.className = 'sub-campo'; otroS.dataset.rol = 'otro';
        si.appendChild(otroS);
      }
      cont.appendChild(si);
    } else if (p.tipo === 'multiple') {
      var fs = el('fieldset', null, [titulo(p, num, true)]);
      var ops = el('div', { className: 'opciones' });
      var marcados = (r && r.v) || [];
      p.opciones.forEach(function (op) {
        var i = el('input', { type: 'checkbox', name: p.id, value: op });
        if (marcados.indexOf(op) > -1) i.checked = true;
        ops.appendChild(el('label', { className: 'opcion' }, [i, document.createTextNode(op)]));
      });
      fs.appendChild(ops);
      cont.appendChild(fs);
      if (p.opciones.some(function (o) { return OTRO[o]; })) {
        var otro = campoTexto(p.id + '__otro', r && r.otro, 'Escribe cuál (obligatorio)');
        otro.className = 'sub-campo'; otro.dataset.rol = 'otro';
        cont.appendChild(otro);
      }
    } else if (p.tipo === 'ubicacion') {
      r = r || {};
      cont.appendChild(titulo(p, num));
      var selEstado = el('select', { name: p.id + '__estado', 'aria-label': 'Estado' }, [el('option', { value: '', text: 'Elige el estado' })]);
      Object.keys(p.estados).forEach(function (e) {
        var o = el('option', { value: e, text: e }); if (r.estado === e) o.selected = true; selEstado.appendChild(o);
      });
      var selCiudad = el('select', { name: p.id + '__ciudad', 'aria-label': 'Ciudad' });
      var fila = el('div', { className: 'fila-doble' }, [selEstado, selCiudad]);
      cont.appendChild(fila);
      var otra = campoTexto(p.id + '__otra', r.otra, 'Escribe tu ciudad (obligatorio)');
      otra.className = 'sub-campo'; otra.dataset.rol = 'otra';
      cont.appendChild(otra);
      llenarCiudades(p, cont, r.ciudad);
      selEstado.addEventListener('change', function () { llenarCiudades(p, cont, ''); });
    } else if (p.tipo === 'tres') {
      r = r || ['', '', ''];
      cont.appendChild(titulo(p, num));
      var lista = el('div', { className: 'tres' });
      [0, 1, 2].forEach(function (k) {
        var i = campoTexto(p.id + '__' + k, r[k], 'Pregunta ' + (k + 1));
        i.setAttribute('aria-label', 'Pregunta ' + (k + 1));
        lista.appendChild(i);
      });
      cont.appendChild(lista);
    } else {
      var t = titulo(p, num);
      var campo;
      if (p.tipo === 'largo') { campo = el('textarea'); campo.maxLength = 1800; }
      else {
        campo = el('input');
        campo.type = { tel: 'tel', email: 'email', numero: 'number' }[p.tipo] || 'text';
        if (p.tipo === 'numero') { campo.min = '0'; campo.step = '1'; campo.inputMode = 'numeric'; }
        if (p.tipo === 'tel') campo.autocomplete = 'tel';
        if (p.tipo === 'email') campo.autocomplete = 'email';
        if (p.id === 'p1') campo.autocomplete = 'name';
        campo.maxLength = 300;
      }
      campo.id = 'c-' + p.id; campo.name = p.id;
      t.setAttribute('for', campo.id);
      if (r != null) campo.value = r;
      cont.appendChild(t); cont.appendChild(campo);
    }
    return cont;
  }

  function llenarCiudades(p, cont, elegida) {
    var e = cont.querySelector('[name="' + p.id + '__estado"]').value;
    var sel = cont.querySelector('[name="' + p.id + '__ciudad"]');
    sel.innerHTML = '';
    sel.appendChild(el('option', { value: '', text: e ? 'Elige la ciudad' : 'Primero elige el estado' }));
    sel.disabled = !e;
    if (e) p.estados[e].concat(['Otra']).forEach(function (c) {
      var o = el('option', { value: c, text: c }); if (c === elegida) o.selected = true; sel.appendChild(o);
    });
    mostrarSubcampos();
  }

  // Muestra el campo «escribe cuál» solo cuando se eligió Otro/Otra (o «Sí» en las que piden detalle).
  function mostrarSubcampos() {
    BLOQUES[estado.bloque].preguntas.forEach(function (p) {
      var cont = document.querySelector('.campo[data-id="' + p.id + '"]');
      if (!cont) return;
      var r = estado.respuestas[p.id] || {};
      if (p.depende) cont.hidden = !aplica(p);
      var otro = cont.querySelector('[data-rol="otro"]');
      if (otro) otro.hidden = !(p.tipo === 'multiple' ? (r.v || []).some(function (x) { return OTRO[x]; }) : OTRO[p.tipo === 'sino' ? r.d : r.v]);
      if (p.tipo === 'sino') {
        cont.querySelector('[data-rol="si"]').hidden = r.v !== 'Sí';
        cont.querySelector('.interruptor .txt b').textContent = r.v === 'Sí' ? 'Sí' : 'No';
      }
      var ex = cont.querySelector('[data-rol="extra"]');
      if (ex) ex.hidden = !r.v;
      var otra = cont.querySelector('[data-rol="otra"]');
      if (otra) otra.hidden = r.ciudad !== 'Otra';
    });
  }

  function numeroInicial(indice) {
    var n = 1;
    for (var i = 0; i < indice; i++) n += BLOQUES[i].preguntas.length;
    return n;
  }

  function abrirBloque(i) {
    estado.bloque = i;
    var b = BLOQUES[i];
    var av = $('avance'); av.innerHTML = '';
    BLOQUES.forEach(function (bq, k) {
      var li = el('li', { className: k < i ? 'hecho' : (k === i ? 'actual' : '') });
      var bola = el('span', { className: 'bola' });
      if (k < i) bola.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
      else bola.textContent = String(k + 1);
      li.appendChild(bola); li.appendChild(el('span', { className: 't', text: bq.titulo }));
      if (k === i) li.setAttribute('aria-current', 'step');
      av.appendChild(li);
    });
    $('avance-texto').textContent = 'Bloque ' + (i + 1) + ' de ' + BLOQUES.length;
    $('paso-movil').textContent = 'Bloque ' + (i + 1) + ' de ' + BLOQUES.length + ' · ' + b.titulo;
    $('bloque-etiqueta').textContent = b.descripcion;
    $('bloque-titulo').textContent = b.titulo;
    mensaje('msg-bloque', '');
    var f = $('form-bloque'); f.innerHTML = '';
    var n = numeroInicial(i);
    b.preguntas.forEach(function (p, k) { f.appendChild(crearCampo(p, n + k)); });
    mostrarSubcampos();
    $('btn-atras').style.visibility = i === 0 ? 'hidden' : 'visible';
    $('btn-siguiente').textContent = i === BLOQUES.length - 1 ? 'Enviar mis respuestas' : 'Siguiente';
    $('btn-siguiente').disabled = false;
    mostrar('pantalla-preguntas');
  }

  // Una pregunta con «depende» solo aplica si la anterior se contestó que sí.
  function aplica(p) { return !p.depende || (estado.respuestas[p.depende] || {}).v === 'Sí'; }

  function valorDe(nombre) {
    var x = document.querySelector('[name="' + nombre + '"]');
    return x ? (x.value || '').trim() : '';
  }

  function leerBloque() {
    BLOQUES[estado.bloque].preguntas.forEach(function (p) {
      if (p.tipo === 'unica') {
        estado.respuestas[p.id] = { v: valorDe(p.id), otro: valorDe(p.id + '__otro'), extra: valorDe(p.id + '__extra') };
      } else if (p.tipo === 'sino') {
        var c = document.querySelector('input[name="' + p.id + '"]');
        estado.respuestas[p.id] = { v: c && c.checked ? 'Sí' : 'No', d: valorDe(p.id + '__d'), otro: valorDe(p.id + '__otro') };
      } else if (p.tipo === 'multiple') {
        var sel = Array.prototype.map.call(document.querySelectorAll('input[name="' + p.id + '"]:checked'), function (x) { return x.value; });
        estado.respuestas[p.id] = { v: sel, otro: valorDe(p.id + '__otro') };
      } else if (p.tipo === 'ubicacion') {
        estado.respuestas[p.id] = { estado: valorDe(p.id + '__estado'), ciudad: valorDe(p.id + '__ciudad'), otra: valorDe(p.id + '__otra') };
      } else if (p.tipo === 'tres') {
        estado.respuestas[p.id] = [0, 1, 2].map(function (k) { return valorDe(p.id + '__' + k); });
      } else {
        estado.respuestas[p.id] = valorDe(p.id);
      }
    });
  }

  function errorDe(p, r) {
    if (!aplica(p)) return false;
    if (p.tipo === 'unica') {
      if (!r || !r.v) return true;
      if (OTRO[r.v] && !r.otro) return true;
      return false;
    }
    if (p.tipo === 'sino') {
      if (!r || r.v !== 'Sí') return false;
      if (!r.d) return true;
      return !!(OTRO[r.d] && !r.otro);
    }
    if (p.tipo === 'multiple') {
      if (!r || !r.v.length) return true;
      if (p.max && r.v.length > p.max) return true;
      if (r.v.some(function (x) { return OTRO[x]; }) && !r.otro) return true;
      return false;
    }
    if (p.tipo === 'ubicacion') return !r.estado || !r.ciudad || (r.ciudad === 'Otra' && !r.otra);
    if (p.tipo === 'tres') return r.some(function (x) { return !x; });
    if (!r) return !p.opcional;
    if (p.tipo === 'email') return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r);
    if (p.tipo === 'tel') return r.replace(/\D/g, '').length < 10;
    if (p.tipo === 'numero') return !/^\d+$/.test(String(r));
    return false;
  }

  function validarBloque() {
    var primero = null;
    BLOQUES[estado.bloque].preguntas.forEach(function (p) {
      var mal = errorDe(p, estado.respuestas[p.id]);
      var c = document.querySelector('.campo[data-id="' + p.id + '"]');
      c.classList.toggle('invalido', mal);
      if (mal && !primero) primero = c;
    });
    if (primero) {
      var p0 = BLOQUES[estado.bloque].preguntas.filter(function (p) { return p.max && (estado.respuestas[p.id] || {}).v && estado.respuestas[p.id].v.length > p.max; })[0];
      mensaje('msg-bloque', p0 ? 'En la pregunta marcada elige máximo ' + p0.max + ' opciones.' : 'Revisa las preguntas marcadas en rojo.');
      primero.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return false;
    }
    return true;
  }

  // Arma el texto final de cada respuesta para enviarlo.
  function componer() {
    var salida = {};
    BLOQUES.forEach(function (b) {
      b.preguntas.forEach(function (p) {
        var r = estado.respuestas[p.id];
        if (!aplica(p)) {
          salida[p.id] = 'No aplica';
        } else if (p.tipo === 'sino') {
          salida[p.id] = r && r.v === 'Sí' ? 'Sí: ' + (OTRO[r.d] ? r.d + ': ' + r.otro : r.d) : 'No';
        } else if (p.tipo === 'unica') {
          var v = OTRO[r.v] ? r.v + ': ' + r.otro : r.v;
          if (p.extra && r.extra) v += ' — ' + r.extra;
          salida[p.id] = v;
        } else if (p.tipo === 'multiple') {
          salida[p.id] = r.v.map(function (x) { return OTRO[x] ? x + ': ' + r.otro : x; });
        } else if (p.tipo === 'ubicacion') {
          salida[p.id] = (r.ciudad === 'Otra' ? r.otra : r.ciudad) + ', ' + r.estado;
        } else {
          salida[p.id] = r;
        }
      });
    });
    return salida;
  }

  $('form-bloque').addEventListener('input', function () { leerBloque(); mostrarSubcampos(); guardarBorrador(); });
  // «No les escribo» / «Nada todavía» no se combinan con otras opciones.
  function opcionSola(e) {
    var i = e.target;
    if (i.type !== 'checkbox') return;
    var p = BLOQUES[estado.bloque].preguntas.filter(function (q) { return q.id === i.name; })[0];
    if (!p || !p.sola || !i.checked) return;
    document.querySelectorAll('input[name="' + p.id + '"]').forEach(function (o) {
      if (o !== i && (i.value === p.sola || o.value === p.sola)) o.checked = false;
    });
  }
  $('form-bloque').addEventListener('change', function (e) { opcionSola(e); leerBloque(); mostrarSubcampos(); guardarBorrador(); });

  $('btn-atras').addEventListener('click', function () {
    leerBloque(); guardarBorrador();
    if (estado.bloque > 0) abrirBloque(estado.bloque - 1);
  });

  $('btn-siguiente').addEventListener('click', function () {
    leerBloque(); guardarBorrador();
    if (!validarBloque()) return;
    if (estado.bloque < BLOQUES.length - 1) { abrirBloque(estado.bloque + 1); return; }
    enviar();
  });

  function enviar() {
    var btn = $('btn-siguiente');
    var textoBtn = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Enviando…';
    mensaje('msg-bloque', 'Enviando tus respuestas…', 'info');
    llamar('/enviar', { codigo: estado.codigo, respuestas: componer() }).then(function (r) {
      if (r.ok) { borrarBorrador(); estado.portal = r.portal || estado.portal; abrirGracias(r, false); return; }
      if (r.motivo === 'sin_pago' || r.motivo === 'sin_autorizar') {
        btn.disabled = false; btn.textContent = textoBtn;
        return llamar('/verificar', { codigo: estado.codigo }).then(function (v) { if (v.ok) estado.portal = v.portal; irAlPortal(MOTIVOS[r.motivo]); });
      }
      if (r.motivo === 'usado') {
        // Ya se había enviado (por ejemplo, desde otro dispositivo): pasa directo a la pantalla de gracias.
        return llamar('/verificar', { codigo: estado.codigo }).then(function (v) {
          if (v.ok && v.enviado) { borrarBorrador(); estado.portal = v.portal || estado.portal; abrirGracias(v, true); return; }
          btn.disabled = false; btn.textContent = textoBtn;
          mensaje('msg-bloque', MOTIVOS.usado);
        });
      }
      btn.disabled = false; btn.textContent = textoBtn;
      mensaje('msg-bloque', MOTIVOS[r.motivo] || MOTIVOS.servidor);
    }).catch(function () {
      btn.disabled = false; btn.textContent = textoBtn;
      mensaje('msg-bloque', MOTIVOS.servidor);
    });
  }

  // ---------- pantalla de gracias: paso 2 (agenda) y paso 3 (guía) ----------
  // Todo sale del Worker; con el código el cliente puede volver cuando quiera a agendar, mover o descargar.
  var agenda = { info: null, elegirPara: null };
  var CANDADO = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';
  var PALOMITA = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

  function abrirGracias(info, deVuelta) {
    agenda.info = info;
    agenda.elegirPara = null;
    if (info.final) { abrirFinal(info); return; }
    if (deVuelta) {
      $('gracias-titulo').textContent = info.negocio ? 'Hola de nuevo, ' + info.negocio : 'Hola de nuevo';
      $('gracias-texto').textContent = 'Ya tenemos tus respuestas. Desde aquí agendas o mueves tu sesión y descargas tu guía.';
    }
    pintarGracias();
    mostrar('pantalla-gracias');
  }

  function pintarGracias() {
    var i = agenda.info;
    var paso2 = $('paso-agenda'), paso3 = $('paso-guia');
    paso2.className = 'paso-g ' + (i.entrega ? 'hecho' : 'actual');
    paso2.querySelector('.bola').innerHTML = i.entrega ? PALOMITA : '2';
    paso2.querySelector('p').textContent = i.entrega
      ? 'Tu videollamada de unos 30 minutos para explicarte tu diagnóstico y el plan a seguir.'
      : 'Una videollamada de unos 30 minutos para explicarte tu diagnóstico y el plan a seguir. Elige el día y la hora que te queden mejor.';
    paso3.className = 'paso-g ' + (i.guia && i.guia.veces ? 'hecho' : (i.entrega ? 'actual' : ''));
    paso3.querySelector('.bola').innerHTML = i.guia && i.guia.veces ? PALOMITA : '3';
    pintarAgenda();
    pintarGuia();
    pintarImplementacion();
    pintarRuta();
  }

  function textoCita(c) { return c.fecha + ' · ' + c.hora + ' h'; }

  function tarjetaCita(c, etiqueta) {
    var t = el('div', { className: 'cita' });
    if (etiqueta) t.appendChild(el('span', { className: 'tipo', text: etiqueta }));
    t.appendChild(el('div', { className: 'cuando', text: textoCita(c) }));
    t.appendChild(el('div', { className: 'detalle', text: c.pasada ? 'Sesión realizada.' :
      (c.tipo === 'entrega' ? 'Unos 30 minutos' : 'Hasta 50 minutos') + ', hora de Culiacán. ' + (c.invitacion === 'enviada'
        ? 'La invitación con el enlace de la videollamada está en ' + c.correo + '.'
        : 'La invitación con el enlace de la videollamada llega a ' + c.correo + ' en unos minutos.') }));
    if (!c.pasada) {
      var acc = el('div', { className: 'acciones' });
      if (c.meet) acc.appendChild(el('a', { className: 'btn btn-oscuro btn-chico', href: c.meet, target: '_blank', rel: 'noopener', text: 'Entrar a la videollamada' }));
      if (c.movible) {
        var mover = el('button', { type: 'button', className: 'btn btn-linea btn-chico', text: 'Mover sesión' });
        mover.addEventListener('click', function () { agenda.elegirPara = { tipo: c.tipo, mover: c.id }; pintarGracias(); });
        acc.appendChild(mover);
      } else {
        acc.appendChild(el('span', { className: 'detalle', text: 'Faltan menos de 24 horas: para cambiarla escríbenos por WhatsApp.' }));
      }
      t.appendChild(acc);
    }
    return t;
  }

  function pintarAgenda() {
    var caja = $('agenda');
    caja.innerHTML = '';
    var i = agenda.info, e = agenda.elegirPara;
    if (i.entrega && !(e && e.tipo === 'entrega')) { caja.appendChild(tarjetaCita(i.entrega)); return; }
    if (!i.entrega || (e && e.tipo === 'entrega')) selector(caja, e && e.tipo === 'entrega' ? e : { tipo: 'entrega' });
  }

  function pintarImplementacion() {
    var caja = $('implementacion'), i = agenda.info, e = agenda.elegirPara;
    var impl = i.implementacion || [];
    caja.innerHTML = '';
    caja.hidden = !(i.entrega && i.entrega.pasada) && !impl.length;
    if (caja.hidden) return;
    caja.appendChild(el('h3', { text: 'Sesiones de implementación' }));
    var total = i.implMax || 2;
    caja.appendChild(el('p', { text: total > 2
      ? 'Tienes ' + total + ' sesiones de hasta 50 minutos: las 2 incluidas y ' + (total - 2) + ' adicional' + (total - 2 > 1 ? 'es' : '') + '. Las 2 primeras van en la semana siguiente a tu entrega, con un día de margen; las adicionales, según la frecuencia que acordamos.'
      : 'Tienes 2 sesiones de hasta 50 minutos para resolver dudas mientras aplicas tu plan. Se agendan dentro de la semana siguiente a tu entrega, con un día de margen.' }));
    impl.forEach(function (c, k) {
      if (e && e.mover === c.id) return;
      caja.appendChild(tarjetaCita(c, 'Implementación ' + (k + 1)));
    });
    if (e && e.tipo === 'implementacion') { selector(caja, e); return; }
    if (i.puedeImplementacion) {
      var b = el('button', { type: 'button', className: 'btn btn-oscuro btn-chico', text: 'Agendar sesión de implementación' });
      b.style.marginTop = '12px';
      b.addEventListener('click', function () { agenda.elegirPara = { tipo: 'implementacion' }; pintarGracias(); });
      caja.appendChild(b);
    }
  }

  // Elegir día y hora (para agendar o para mover).
  function selector(caja, para) {
    var cont = el('div');
    caja.appendChild(cont);
    cont.appendChild(el('div', { className: 'mensaje info', text: 'Buscando horarios libres…' }));
    llamar('/horarios', { codigo: estado.codigo, tipo: para.tipo, mover: para.mover || '' }).then(function (r) {
      cont.innerHTML = '';
      if (!r.ok) { cont.appendChild(el('div', { className: 'mensaje error', text: MOTIVOS[r.motivo] || MOTIVOS.servidor })); return; }
      if (!r.dias.length) {
        cont.appendChild(el('p', { className: 'vacio', text: 'Por ahora no hay horarios libres. Escríbenos por WhatsApp al 667 411 1515 y te encontramos un espacio.' }));
        return;
      }
      cont.appendChild(el('div', { className: 'sub-et', text: 'Día' }));
      var dias = el('div', { className: 'opciones dias', role: 'radiogroup', 'aria-label': 'Día' });
      var horas = el('div', { className: 'opciones horas', role: 'radiogroup', 'aria-label': 'Hora' });
      var nombre = 'h-' + para.tipo;
      function pintarHoras(d) {
        horas.innerHTML = '';
        d.horas.forEach(function (h) {
          var inp = el('input', { type: 'radio', name: nombre, value: h.inicio });
          horas.appendChild(el('label', { className: 'opcion' }, [inp, document.createTextNode(h.hora)]));
        });
      }
      r.dias.forEach(function (d, k) {
        var partes = d.etiqueta.split(' ');
        var inp = el('input', { type: 'radio', name: 'd-' + para.tipo, value: d.fecha });
        if (k === 0) inp.checked = true;
        inp.addEventListener('change', function () { pintarHoras(d); });
        dias.appendChild(el('label', { className: 'opcion' }, [inp, el('small', { text: partes[0] }), document.createTextNode(partes.slice(1).join(' '))]));
      });
      cont.appendChild(dias);
      cont.appendChild(el('div', { className: 'sub-et', text: 'Hora (Culiacán)' }));
      cont.appendChild(horas);
      pintarHoras(r.dias[0]);

      var correo = null;
      if (!para.mover) {
        cont.appendChild(el('div', { className: 'sub-et', text: 'Correo para la invitación' }));
        correo = el('input', { type: 'email', autocomplete: 'email', 'aria-label': 'Correo para la invitación' });
        correo.value = agenda.info.correo || '';
        cont.appendChild(correo);
      }
      var msg = el('div');
      var acc = el('div', { className: 'acciones' });
      var ok = el('button', { type: 'button', className: 'btn btn-oscuro', text: para.mover ? 'Confirmar nuevo horario' : 'Agendar sesión' });
      acc.appendChild(ok);
      if (para.mover || para.tipo === 'implementacion') {
        var cancelar = el('button', { type: 'button', className: 'btn btn-linea', text: 'Cancelar' });
        cancelar.addEventListener('click', function () { agenda.elegirPara = null; pintarGracias(); });
        acc.appendChild(cancelar);
      }
      cont.appendChild(acc);
      cont.appendChild(msg);

      ok.addEventListener('click', function () {
        var elegido = cont.querySelector('input[name="' + nombre + '"]:checked');
        msg.innerHTML = '';
        if (!elegido) { msg.appendChild(el('div', { className: 'mensaje error', text: 'Elige una hora.' })); return; }
        if (correo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim())) { msg.appendChild(el('div', { className: 'mensaje error', text: MOTIVOS.correo })); return; }
        ok.disabled = true; ok.textContent = 'Agendando…';
        var ruta = para.mover ? '/reagendar' : '/agendar';
        var cuerpo = para.mover ? { codigo: estado.codigo, id: para.mover, inicio: elegido.value }
          : { codigo: estado.codigo, tipo: para.tipo, inicio: elegido.value, correo: correo.value.trim() };
        llamar(ruta, cuerpo).then(function (res) {
          if (res.ok) {
            agenda.info = Object.assign({}, agenda.info, res);
            agenda.elegirPara = null;
            pintarGracias();
            var cita = para.tipo === 'entrega' ? res.entrega
              : (res.implementacion || []).filter(function (c) { return c.inicio === elegido.value; })[0];
            if (cita) abrirModal(cita, para);
            return;
          }
          if (res.motivo === 'ocupado') { selectorDeNuevo(caja, para, MOTIVOS.ocupado); return; }
          ok.disabled = false; ok.textContent = para.mover ? 'Confirmar nuevo horario' : 'Agendar sesión';
          msg.appendChild(el('div', { className: 'mensaje error', text: MOTIVOS[res.motivo] || MOTIVOS.servidor }));
        }).catch(function () {
          ok.disabled = false; ok.textContent = para.mover ? 'Confirmar nuevo horario' : 'Agendar sesión';
          msg.appendChild(el('div', { className: 'mensaje error', text: MOTIVOS.servidor }));
        });
      });
    }).catch(function () {
      cont.innerHTML = '';
      cont.appendChild(el('div', { className: 'mensaje error', text: MOTIVOS.servidor }));
    });
  }
  function selectorDeNuevo(caja, para, aviso) {
    pintarGracias();
    var destino = para.tipo === 'entrega' ? $('agenda') : $('implementacion');
    destino.insertBefore(el('div', { className: 'mensaje error', text: aviso }), destino.firstChild);
  }

  function pintarGuia() {
    var caja = $('guia-caja'), g = agenda.info.guia || {};
    caja.innerHTML = '';
    if (!g.disponible) {
      var c = el('div', { className: 'candado' });
      c.innerHTML = CANDADO;
      c.appendChild(el('span', { text: 'Se desbloquea al agendar tu sesión de entrega.' }));
      caja.appendChild(c);
      return;
    }
    var fila = el('div', { className: 'botones-descarga' });
    var b = el('button', { type: 'button', className: 'btn ' + (g.veces ? 'btn-linea' : 'btn-oscuro') + ' btn-chico', text: g.veces ? 'Descargar guía de nuevo' : 'Descargar guía (PDF)' });
    b.addEventListener('click', function () { descargarGuia(b); });
    fila.appendChild(b);
    fila.appendChild(botonContrato());
    caja.appendChild(fila);
    if (g.veces) caja.appendChild(el('div', { className: 'veces', text: 'Ya descargaste la guía. Puedes volver a bajarla cuando quieras.' }));
  }

  function descargarGuia(boton) {
    var texto = boton.textContent;
    boton.disabled = true; boton.textContent = 'Preparando…';
    // La pestaña se abre en el clic (si no, el navegador la bloquea) y el PDF se carga en ella, sin sacar al cliente del portal.
    var pestana = null;
    try { pestana = window.open('', '_blank'); } catch (e) { pestana = null; }
    if (pestana) { try { pestana.document.title = 'Preparando tu guía…'; pestana.document.body.innerHTML = '<p style="font:16px system-ui;padding:24px;color:#2a2019">Preparando tu guía…</p>'; } catch (e) {} }
    return llamar('/guia', { codigo: estado.codigo }).then(function (r) {
      boton.disabled = false; boton.textContent = texto;
      if (!r.ok) { if (pestana) pestana.close(); alertaGuia(MOTIVOS[r.motivo] || MOTIVOS.servidor); return; }
      var g = agenda.info.guia || {};
      agenda.info.guia = { disponible: true, veces: (g.veces || 0) + 1, ultima: new Date().toISOString() };
      cerrarModal();
      pintarGracias();
      if (pestana && !pestana.closed) pestana.location.href = r.url;
      else { var enlace = document.createElement('a'); enlace.href = r.url; enlace.target = '_blank'; enlace.rel = 'noopener'; enlace.download = 'Guia-Diagnostico-Comercial-AVCO.pdf'; document.body.appendChild(enlace); enlace.click(); enlace.remove(); }
    }).catch(function () {
      if (pestana) pestana.close();
      boton.disabled = false; boton.textContent = texto;
      alertaGuia(MOTIVOS.servidor);
    });
  }
  function alertaGuia(t) {
    var caja = $('pantalla-final').hidden ? $('guia-caja') : $('final-descargas');
    var viejo = caja.querySelector('.mensaje'); if (viejo) viejo.remove();
    caja.appendChild(el('div', { className: 'mensaje error', text: t }));
  }

  function abrirModal(cita, para) {
    $('modal-titulo').textContent = para.mover ? 'Listo, movimos tu sesión' : 'Gracias por agendar';
    $('modal-cita').textContent = (para.tipo === 'entrega' ? 'Sesión de entrega: ' : 'Sesión de implementación: ') + textoCita(cita) + ' (Culiacán)';
    $('modal-correo').textContent = para.mover
      ? 'Te mandamos la invitación actualizada a ' + cita.correo + '.'
      : 'Te llega a ' + cita.correo + ' la invitación de Google Calendar con el enlace de la videollamada.';
    var guiaLista = para.tipo === 'entrega' && !para.mover;
    $('modal-guia').hidden = !guiaLista;
    $('modal-guia').parentNode.previousElementSibling.hidden = !guiaLista;
    $('velo-agenda').hidden = false;
    (guiaLista ? $('modal-guia') : $('modal-cerrar')).focus();
  }
  function cerrarModal() { $('velo-agenda').hidden = true; }
  $('modal-cerrar').addEventListener('click', cerrarModal);
  $('velo-agenda').addEventListener('click', function (ev) { if (ev.target === this) cerrarModal(); });
  document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape' && !$('velo-agenda').hidden) cerrarModal(); });
  $('modal-guia').addEventListener('click', function () { descargarGuia(this); });

  // Enlace directo: avandco.mx/formulario/?c=AVCO-XXXX-XXXX llena el código solo.
  var c = new URLSearchParams(location.search).get('c');
  if (c) $('codigo').value = normalizarCodigo(c);
})();
