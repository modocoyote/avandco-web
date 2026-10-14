// Menú del celular y año del pie. Sin servicios externos.
(function () {
  var b = document.getElementById('menu-btn'), m = document.getElementById('menu-movil');
  if (b && m) {
    b.addEventListener('click', function () { var abrir = m.hidden; m.hidden = !abrir; b.setAttribute('aria-expanded', abrir); });
    m.addEventListener('click', function (e) { if (e.target.closest('a')) { m.hidden = true; b.setAttribute('aria-expanded', 'false'); } });
  }
  var a = document.getElementById('anio'); if (a) a.textContent = new Date().getFullYear();
})();
