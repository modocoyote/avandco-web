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
          "texto": "Ciudad",
          "tipo": "texto"
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
          "tipo": "largo"
        },
        {
          "id": "p7",
          "texto": "¿Qué es lo que más vendes?",
          "tipo": "largo"
        },
        {
          "id": "p8",
          "texto": "¿Cuánto cuesta en promedio una venta?",
          "tipo": "texto",
          "ayuda": "Puede ser un rango, por ejemplo: de $5,000 a $8,000."
        },
        {
          "id": "p9",
          "texto": "¿Cuántas personas venden en el negocio, incluyéndote?",
          "tipo": "numero"
        },
        {
          "id": "p10",
          "texto": "¿Quién decide la compra del lado del cliente?",
          "tipo": "texto"
        },
        {
          "id": "p11",
          "texto": "¿Cuánto tarda alguien en decidirse, desde que pregunta hasta que compra?",
          "tipo": "texto"
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
          "texto": "¿Inviertes en publicidad hoy? ¿Cuánto al mes, aproximadamente?",
          "tipo": "texto",
          "opcional": true
        },
        {
          "id": "p15",
          "texto": "¿Les das algo de valor antes de que te compren? ¿Qué?",
          "tipo": "largo"
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
          "tipo": "texto"
        },
        {
          "id": "p17",
          "texto": "¿En cuánto tiempo contestan normalmente?",
          "tipo": "texto"
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
          "tipo": "largo"
        },
        {
          "id": "p20",
          "texto": "¿Tienen esas respuestas escritas en algún lado, o cada quien contesta como puede?",
          "tipo": "largo"
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
          "tipo": "largo"
        },
        {
          "id": "p22",
          "texto": "De los que te preguntan al mes, ¿cuántos te compran, aproximadamente?",
          "tipo": "numero"
        },
        {
          "id": "p23",
          "texto": "¿Qué pasa con los que no compran?",
          "tipo": "largo"
        },
        {
          "id": "p24",
          "texto": "¿Les vuelves a escribir? ¿Después de cuánto tiempo?",
          "tipo": "texto"
        },
        {
          "id": "p25",
          "texto": "¿Qué les escribes cuando les vuelves a escribir?",
          "tipo": "largo"
        },
        {
          "id": "p26",
          "texto": "¿Cuántos de ellos te contestan?",
          "tipo": "texto"
        },
        {
          "id": "p27",
          "texto": "¿Llevas un registro de los interesados que no compraron? ¿Dónde?",
          "tipo": "texto"
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
          "tipo": "largo"
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
  function claveBorrador() { return 'avco-formulario-' + estado.codigo; }
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
  function crearCampo(p, num) {
    var cont = document.createElement('div');
    cont.className = 'campo';
    cont.dataset.id = p.id;
    var valor = estado.respuestas[p.id];
    var titulo = document.createElement(p.tipo === 'multiple' || p.tipo === 'unica' ? 'legend' : 'label');
    var n = document.createElement('span'); n.className = 'num-p'; n.textContent = num + '.';
    titulo.appendChild(n);
    titulo.appendChild(document.createTextNode(p.texto + (p.opcional ? ' (opcional)' : '')));
    if (p.ayuda) { var a = document.createElement('span'); a.className = 'ayuda'; a.textContent = p.ayuda; titulo.appendChild(a); }

    if (p.tipo === 'multiple' || p.tipo === 'unica') {
      var fs = document.createElement('fieldset');
      fs.appendChild(titulo);
      var ops = document.createElement('div'); ops.className = 'opciones';
      p.opciones.forEach(function (op) {
        var l = document.createElement('label'); l.className = 'opcion';
        var i = document.createElement('input');
        i.type = p.tipo === 'multiple' ? 'checkbox' : 'radio';
        i.name = p.id; i.value = op;
        if (p.tipo === 'multiple' ? (valor || []).indexOf(op) > -1 : valor === op) i.checked = true;
        l.appendChild(i); l.appendChild(document.createTextNode(op));
        ops.appendChild(l);
      });
      fs.appendChild(ops);
      cont.appendChild(fs);
      return cont;
    }
    var campo;
    if (p.tipo === 'largo') { campo = document.createElement('textarea'); campo.maxLength = 1800; }
    else {
      campo = document.createElement('input');
      campo.type = { tel: 'tel', email: 'email', numero: 'number' }[p.tipo] || 'text';
      if (p.tipo === 'numero') { campo.min = '0'; campo.step = '1'; campo.inputMode = 'numeric'; }
      if (p.tipo === 'tel') campo.autocomplete = 'tel';
      if (p.tipo === 'email') campo.autocomplete = 'email';
      if (p.id === 'p1') campo.autocomplete = 'name';
      campo.maxLength = 300;
    }
    campo.id = 'c-' + p.id; campo.name = p.id;
    titulo.setAttribute('for', campo.id);
    if (valor != null) campo.value = valor;
    cont.appendChild(titulo);
    cont.appendChild(campo);
    return cont;
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
    $('btn-atras').style.visibility = i === 0 ? 'hidden' : 'visible';
    $('btn-siguiente').textContent = i === BLOQUES.length - 1 ? 'Enviar mis respuestas' : 'Siguiente';
    $('btn-siguiente').disabled = false;
    mostrar('pantalla-preguntas');
  }

  function leerBloque() {
    BLOQUES[estado.bloque].preguntas.forEach(function (p) {
      if (p.tipo === 'multiple') {
        estado.respuestas[p.id] = Array.prototype.map.call(
          document.querySelectorAll('input[name="' + p.id + '"]:checked'), function (x) { return x.value; });
      } else if (p.tipo === 'unica') {
        var s = document.querySelector('input[name="' + p.id + '"]:checked');
        estado.respuestas[p.id] = s ? s.value : '';
      } else {
        estado.respuestas[p.id] = ($('c-' + p.id).value || '').trim();
      }
    });
  }

  function validarBloque() {
    var primero = null;
    BLOQUES[estado.bloque].preguntas.forEach(function (p) {
      var v = estado.respuestas[p.id];
      var mal = false;
      if (!p.opcional) mal = Array.isArray(v) ? v.length === 0 : !v;
      if (!mal && v && p.tipo === 'email') mal = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      if (!mal && v && p.tipo === 'tel') mal = v.replace(/\D/g, '').length < 10;
      if (!mal && v !== '' && p.tipo === 'numero') mal = !/^\d+$/.test(String(v));
      var el = document.querySelector('.campo[data-id="' + p.id + '"]');
      el.classList.toggle('invalido', mal);
      if (mal && !primero) primero = el;
    });
    if (primero) {
      mensaje('msg-bloque', 'Revisa las preguntas marcadas en rojo.');
      primero.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return false;
    }
    return true;
  }

  $('form-bloque').addEventListener('input', function () { leerBloque(); guardarBorrador(); });
  $('form-bloque').addEventListener('change', function () { leerBloque(); guardarBorrador(); });

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
    btn.disabled = true;
    mensaje('msg-bloque', 'Enviando tus respuestas…', 'info');
    llamar('/enviar', {
      codigo: estado.codigo,
      aviso: { version: estado.avisoVersion, aceptado_en: estado.avisoAceptadoEn },
      respuestas: estado.respuestas
    }).then(function (r) {
      if (r.ok) { borrarBorrador(); mostrar('pantalla-gracias'); return; }
      btn.disabled = false;
      mensaje('msg-bloque', MOTIVOS[r.motivo] || MOTIVOS.servidor);
    }).catch(function () {
      btn.disabled = false;
      mensaje('msg-bloque', MOTIVOS.servidor);
    });
  }

  // Enlace directo: avandco.mx/formulario/?c=AVCO-XXXX-XXXX llena el código solo.
  var c = new URLSearchParams(location.search).get('c');
  if (c) $('codigo').value = normalizarCodigo(c);
})();
