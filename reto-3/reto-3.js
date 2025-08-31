document.addEventListener('DOMContentLoaded', function () {
  const contenido = document.getElementById('contenido');

  // Navegación (menu + anterior + siguiente reto)
  const nav = document.querySelector('nav');
  nav.innerHTML = `
    <a href="../index.html">Volver al Menú</a>
    <a href="../reto-2/reto-2.html">Anterior (Reto 2)</a>
    <a href="../reto-4/reto-4.html">Siguiente (Reto 4)</a>
  `;
});
