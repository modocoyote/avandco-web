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
    "texto": "¿Inviertes en publicidad? ¿Cuánto al mes, en pesos mexicanos (MXN)?",
    "tipo": "unica",
    "opciones": [
     "No invierto",
     "Menos de $2,000 MXN",
     "$2,000 a $5,000 MXN",
     "$5,000 a $15,000 MXN",
     "Más de $15,000 MXN"
    ]
   },
   {
    "id": "p15",
    "texto": "¿Les das algo de valor antes de que te compren?",
    "tipo": "unica",
    "opciones": [
     "No",
     "Sí"
    ],
    "detalle": {
     "opcion": "Sí",
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
    "texto": "¿Les vuelves a escribir? ¿Después de cuánto tiempo?",
    "tipo": "unica",
    "opciones": [
     "No les vuelvo a escribir",
     "Al día siguiente",
     "A los 2 o 3 días",
     "A la semana",
     "Más de una semana después"
    ]
   },
   {
    "id": "p25",
    "texto": "¿Qué les escribes cuando les vuelves a escribir?",
    "tipo": "multiple",
    "ayuda": "Puedes marcar varias.",
    "sola": "No les escribo",
    "opciones": [
     "No les escribo",
     "Les pregunto si siguen interesados",
     "Les recuerdo el precio o la propuesta",
     "Les mando una promoción o descuento",
     "Les comparto información o contenido útil",
     "Les pregunto qué los detuvo",
     "Otro"
    ]
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
    ]
   },
   {
    "id": "p27",
    "texto": "¿Llevas un registro de los interesados que no compraron? ¿Dónde?",
    "tipo": "unica",
    "opciones": [
     "No",
     "En una libreta",
     "En Excel o Google Sheets",
     "Con etiquetas de WhatsApp",
     "En un CRM",
     "Otro"
    ]
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
  var estado = { codigo: '', negocio: '', avisoVersion: '', avisoAceptadoEn: '', bloque: 0, respuestas: {} };

  // ---------- guardado local (solo en el navegador del cliente) ----------
  function claveBorrador() { return 'avco-formulario-v2-' + estado.codigo; }
  function guardarBorrador() {
    try {
      localStorage.setItem(claveBorrador(), JSON.stringify({
        respuestas: estado.respuestas, bloque: estado.bloque,
        avisoVersion: estado.avisoVersion, avisoAceptadoEn: estado.avisoAceptadoEn
      }));
      $('guardado').textContent = 'Avance guardado en este dispositivo';
    } catch (e) { /* sin almacenamiento: el formulario sigue funcionando */ }
  }
  function leerBorrador() {
    try { return JSON.parse(localStorage.getItem(claveBorrador()) || 'null'); } catch (e) { return null; }
  }
  function borrarBorrador() { try { localStorage.removeItem(claveBorrador()); } catch (e) {} }

  // ---------- utilidades ----------
  function mostrar(id) {
    ['pantalla-codigo', 'pantalla-aviso', 'pantalla-preguntas', 'pantalla-gracias'].forEach(function (p) {
      $(p).hidden = (p !== id);
    });
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
      estado.negocio = r.negocio || '';
      var b = leerBorrador();
      if (b) {
        estado.respuestas = b.respuestas || {};
        estado.bloque = b.bloque || 0;
        estado.avisoVersion = b.avisoVersion || '';
        estado.avisoAceptadoEn = b.avisoAceptadoEn || '';
      }
      mensaje('msg-codigo', '');
      if (estado.avisoAceptadoEn) { abrirBloque(estado.bloque); } else { abrirAviso(); }
    }).catch(function () {
      $('btn-codigo').disabled = false;
      mensaje('msg-codigo', MOTIVOS.servidor);
    });
  });

  // ---------- paso 1: aviso de privacidad (se lee de /privacidad/ para que sea el mismo texto) ----------
  function abrirAviso() {
    $('saludo').textContent = estado.negocio ? 'Hola, ' + estado.negocio : 'Antes de empezar';
    mostrar('pantalla-aviso');
    fetch('/privacidad/').then(function (r) { return r.text(); }).then(function (html) {
      var doc = new DOMParser().parseFromString(html, 'text/html');
      var art = doc.getElementById('aviso');
      if (!art) throw new Error('sin aviso');
      estado.avisoVersion = art.getAttribute('data-version') || '';
      var h1 = art.querySelector('h1'); if (h1) h1.remove();
      $('aviso-contenido').innerHTML = '';
      $('aviso-contenido').appendChild(document.importNode(art, true));
    }).catch(function () {
      $('aviso-contenido').innerHTML = '<p>No pudimos cargar el aviso aquí. Puedes leerlo en <a href="/privacidad/" target="_blank" rel="noopener">avandco.mx/privacidad</a>.</p>';
    });
  }
  $('acepto').addEventListener('change', function () { $('btn-aviso').disabled = !this.checked; });
  $('btn-aviso').addEventListener('click', function () {
    if (!$('acepto').checked) return;
    estado.avisoAceptadoEn = new Date().toISOString();
    guardarBorrador();
    abrirBloque(0);
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

  function crearCampo(p, num) {
    var cont = el('div', { className: 'campo', 'data-id': p.id });
    var r = estado.respuestas[p.id];

    if (p.tipo === 'unica' || p.tipo === 'multiple') {
      var fs = el('fieldset', null, [titulo(p, num, true)]);
      var ops = el('div', { className: 'opciones' });
      var marcados = p.tipo === 'multiple' ? ((r && r.v) || []) : [r && r.v];
      p.opciones.forEach(function (op) {
        var i = el('input', { type: p.tipo === 'multiple' ? 'checkbox' : 'radio', name: p.id, value: op });
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
      if (p.detalle || p.extra) {
        var info = p.detalle || p.extra;
        var ex = campoTexto(p.id + '__extra', r && r.extra, info.texto + (p.detalle ? ' (obligatorio)' : ''));
        ex.className = 'sub-campo'; ex.dataset.rol = p.detalle ? 'detalle' : 'extra';
        cont.appendChild(ex);
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
      var otro = cont.querySelector('[data-rol="otro"]');
      if (otro) otro.hidden = !(p.tipo === 'multiple' ? (r.v || []).some(function (x) { return OTRO[x]; }) : OTRO[r.v]);
      var det = cont.querySelector('[data-rol="detalle"]');
      if (det) det.hidden = r.v !== p.detalle.opcion;
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
    BLOQUES.forEach(function (_, k) { var s = document.createElement('span'); if (k <= i) s.className = 'hecho'; av.appendChild(s); });
    $('avance-texto').textContent = 'Bloque ' + (i + 1) + ' de ' + BLOQUES.length;
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

  function valorDe(nombre) {
    var x = document.querySelector('[name="' + nombre + '"]');
    return x ? (x.value || '').trim() : '';
  }

  function leerBloque() {
    BLOQUES[estado.bloque].preguntas.forEach(function (p) {
      if (p.tipo === 'unica' || p.tipo === 'multiple') {
        var sel = Array.prototype.map.call(document.querySelectorAll('input[name="' + p.id + '"]:checked'), function (x) { return x.value; });
        estado.respuestas[p.id] = {
          v: p.tipo === 'multiple' ? sel : (sel[0] || ''),
          otro: valorDe(p.id + '__otro'),
          extra: valorDe(p.id + '__extra')
        };
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
    if (p.tipo === 'unica') {
      if (!r || !r.v) return true;
      if (OTRO[r.v] && !r.otro) return true;
      if (p.detalle && r.v === p.detalle.opcion && !r.extra) return true;
      return false;
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
        if (p.tipo === 'unica') {
          var v = OTRO[r.v] ? r.v + ': ' + r.otro : r.v;
          if (p.detalle && r.v === p.detalle.opcion) v += ': ' + r.extra;
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
    llamar('/enviar', {
      codigo: estado.codigo,
      aviso: { version: estado.avisoVersion, aceptado_en: estado.avisoAceptadoEn },
      respuestas: componer()
    }).then(function (r) {
      if (r.ok) { borrarBorrador(); mostrar('pantalla-gracias'); return; }
      btn.disabled = false; btn.textContent = textoBtn;
      mensaje('msg-bloque', MOTIVOS[r.motivo] || MOTIVOS.servidor);
    }).catch(function () {
      btn.disabled = false; btn.textContent = textoBtn;
      mensaje('msg-bloque', MOTIVOS.servidor);
    });
  }

  // Enlace directo: avandco.mx/formulario/?c=AVCO-XXXX-XXXX llena el código solo.
  var c = new URLSearchParams(location.search).get('c');
  if (c) $('codigo').value = normalizarCodigo(c);
})();
