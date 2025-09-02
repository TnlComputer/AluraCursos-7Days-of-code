document.addEventListener('DOMContentLoaded', function () {
  // Objeto para organizar los alimentos por categoría
  let listaCompras = {
    Frutas: [],
    Lácteos: [],
    Congelados: [],
    Dulces: [],
    Otros: []
  };

  const alimentoInput = document.getElementById('alimento');
  const categoriaSelect = document.getElementById('categoria');
  const resultadoDiv = document.getElementById('resultado');

  document.getElementById('agregarBtn').addEventListener('click', () => {
    let alimento = alimentoInput.value.trim();
    let categoria = categoriaSelect.value;

    if (alimento === '') {
      alert('Por favor, escribe un alimento antes de agregar.');
      return;
    }

    listaCompras[categoria].push(alimento);
    alimentoInput.value = ''; // limpiar input
    alimentoInput.focus();
  });

  document.getElementById('mostrarBtn').addEventListener('click', () => {
    let salida = '<h3>📋 Lista de Compras:</h3>';

    for (let categoria in listaCompras) {
      let items = listaCompras[categoria];
      if (items.length > 0) {
        salida += `<p><strong>${categoria}:</strong> ${items.join(', ')}</p>`;
      } else {
        salida += `<p><strong>${categoria}:</strong> (vacío)</p>`;
      }
    }

    resultadoDiv.innerHTML = salida;
  });

  // Navegación (menu + anterior + siguiente reto)
  const nav = document.querySelector('nav');
  nav.innerHTML = `
    <a href="../index.html">Volver al Menú</a>
    <a href="../reto-4/reto-4.html">Anterior (Reto 4)</a>
    <a href="../reto-6/reto-6.html">Siguiente (Reto 6)</a>
  `;
});
