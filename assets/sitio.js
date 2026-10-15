// Menú del celular y año del pie. Sin servicios externos.
(function () {
  var b = document.getElementById('menu-btn'), m = document.getElementById('menu-movil');
  if (b && m) {
    b.addEventListener('click', function () { var abrir = m.hidden; m.hidden = !abrir; b.setAttribute('aria-expanded', abrir); });
    m.addEventListener('click', function (e) { if (e.target.closest('a')) { m.hidden = true; b.setAttribute('aria-expanded', 'false'); } });
    var cerrar = function () { if (!m.hidden) { m.hidden = true; b.setAttribute('aria-expanded', 'false'); } };
    document.addEventListener('click', function (e) { if (!e.target.closest('#menu-movil') && !e.target.closest('#menu-btn')) cerrar(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { cerrar(); b.focus(); } });
  }
  var a = document.getElementById('anio'); if (a) a.textContent = new Date().getFullYear();
})();

// Formulario de contacto: se guarda en el Worker y entra al Radar de prospectos. Nadie contesta en automático.
(function () {
  var f = document.getElementById('contacto-form');
  if (!f) return;
  var API = 'https://formulario-avandco.modocoyote.workers.dev/contacto';
  var msj = document.getElementById('contacto-msj'), btn = document.getElementById('contacto-btn');
  var $ = function (id) { return document.getElementById(id); };
  var TEXTOS = {
    faltan: 'Escribe tu nombre, tu negocio y tu mensaje.',
    whatsapp: 'Revisa tu WhatsApp: necesitamos 10 dígitos.',
    correo: 'Revisa tu correo.',
    aviso: 'Activa la aceptación del aviso de privacidad para enviar.',
    demasiados_intentos: 'Hiciste muchos intentos. Espera unos minutos y vuelve a probar.',
    red: 'No pudimos enviar tu mensaje. Revisa tu conexión o escríbenos por WhatsApp.'
  };
  function aviso(texto, tipo) { msj.textContent = texto; msj.className = 'contacto-msj ' + (tipo || 'error'); }
  function marcar(id, mal) { var c = $(id).closest('.campo'); if (c) c.classList.toggle('invalido', mal); }
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var d = {
      nombre: $('c-nombre').value.trim(), negocio: $('c-negocio').value.trim(),
      whatsapp: $('c-whatsapp').value.trim(), correo: $('c-correo').value.trim(),
      canal: $('c-canal').value, mensaje: $('c-mensaje').value.trim(),
      aviso: $('c-aviso').checked, aviso_version: f.getAttribute('data-aviso') || '', sitio: $('c-sitio').value
    };
    marcar('c-nombre', !d.nombre); marcar('c-negocio', !d.negocio); marcar('c-mensaje', !d.mensaje);
    var tel = d.whatsapp.replace(/\D/g, '').length >= 10; marcar('c-whatsapp', !tel);
    var mail = !d.correo || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.correo); marcar('c-correo', !mail);
    if (!d.nombre || !d.negocio || !d.mensaje) return aviso(TEXTOS.faltan);
    if (!tel) return aviso(TEXTOS.whatsapp);
    if (!mail) return aviso(TEXTOS.correo);
    if (!d.aviso) return aviso(TEXTOS.aviso);
    btn.disabled = true; btn.textContent = 'Enviando…'; aviso('', '');
    fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) })
      .then(function (r) { return r.json(); })
      .then(function (r) {
        if (r.ok) {
          f.reset();
          aviso('Gracias, ' + d.nombre.split(' ')[0] + '. Recibimos tu mensaje y te contactamos por ' + (d.canal === 'WhatsApp' ? 'WhatsApp' : d.canal.toLowerCase()) + ' en horario hábil.', 'ok');
          btn.textContent = 'Mensaje enviado';
          return;
        }
        aviso(TEXTOS[r.motivo] || TEXTOS.red);
        btn.disabled = false; btn.textContent = 'Enviar mensaje';
      })
      .catch(function () { aviso(TEXTOS.red); btn.disabled = false; btn.textContent = 'Enviar mensaje'; });
  });
})();
