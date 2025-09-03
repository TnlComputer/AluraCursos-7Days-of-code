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
  const eliminarInput = document.getElementById('eliminar');
  const resultadoDiv = document.getElementById('resultado');

  // Agregar alimentos
  document.getElementById('agregarBtn').addEventListener('click', () => {
    let alimento = alimentoInput.value.trim();
    let categoria = categoriaSelect.value;

    if (alimento === '') {
      alert('Por favor, escribe un alimento antes de agregar.');
      return;
    }

    listaCompras[categoria].push(alimento);
    alimentoInput.value = '';
    alimentoInput.focus();
  });

  // Eliminar alimentos
  document.getElementById('eliminarBtn').addEventListener('click', () => {
    let alimentoEliminar = eliminarInput.value.trim();
    let encontrado = false;

    if (alimentoEliminar === '') {
      alert('Escribe el nombre del alimento que quieres eliminar.');
      return;
    }

    for (let categoria in listaCompras) {
      let index = listaCompras[categoria].indexOf(alimentoEliminar);
      if (index !== -1) {
        listaCompras[categoria].splice(index, 1);
        alert(`✅ "${alimentoEliminar}" fue eliminado de ${categoria}.`);
        encontrado = true;
        break;
      }
    }

    if (!encontrado) {
      alert('❌ No fue posible encontrar el elemento en la lista.');
    }

    eliminarInput.value = '';
  });

  // Mostrar lista
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
    <a href="../reto-5/reto-5.html">Anterior (Reto 5)</a>
    <a href="../reto-7/reto-7.html">Siguiente (Reto 7)</a>
  `;
});
