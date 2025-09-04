document.addEventListener('DOMContentLoaded', function () {
  const display = document.getElementById('display');
  const botonesNum = document.querySelectorAll('.num');
  const botonesOp = document.querySelectorAll('.op');
  const btnIgual = document.getElementById('igual');
  const btnClear = document.getElementById('clear');

  let valorActual = "";
  let operacion = null;
  let primerNumero = null;

  // === FUNCIONES ===
  function sumar(a, b) { return a + b; }
  function restar(a, b) { return a - b; }
  function multiplicar(a, b) { return a * b; }
  function dividir(a, b) { return b === 0 ? "❌ Error" : a / b; }

  function calcular(a, b, op) {
    switch (op) {
      case '+': return sumar(a, b);
      case '-': return restar(a, b);
      case '*': return multiplicar(a, b);
      case '/': return dividir(a, b);
      default: return b;
    }
  }

  // === EVENTOS ===
  botonesNum.forEach(btn => {
    btn.addEventListener('click', () => {
      valorActual += btn.textContent;
      display.value = valorActual;
    });
  });

  botonesOp.forEach(btn => {
    btn.addEventListener('click', () => {
      if (valorActual === "") return;
      if (primerNumero === null) {
        primerNumero = parseFloat(valorActual);
      } else {
        primerNumero = calcular(primerNumero, parseFloat(valorActual), operacion);
      }
      operacion = btn.textContent;
      valorActual = "";
      display.value = "";
    });
  });

  btnIgual.addEventListener('click', () => {
    if (primerNumero !== null && valorActual !== "" && operacion) {
      const segundoNumero = parseFloat(valorActual);
      const res = calcular(primerNumero, segundoNumero, operacion);
      display.value = res;
      primerNumero = res;
      valorActual = "";
      operacion = null;
    }
  });

  btnClear.addEventListener('click', () => {
    valorActual = "";
    primerNumero = null;
    operacion = null;
    display.value = "";
  });

  // === NAVEGACIÓN ===
  const nav = document.querySelector('nav');
  nav.innerHTML = `
    <a href="../reto-6/reto-6.html">⬅️ Anterior</a>
    <a href="../index.html">🏠 Menú</a>
  `;
});

