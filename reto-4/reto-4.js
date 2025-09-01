document.addEventListener('DOMContentLoaded', function () {
  let numeroSecreto;
  let intentos;

  const guessInput = document.getElementById('guessInput');
  const guessButton = document.getElementById('guessButton');
  const resetButton = document.getElementById('resetButton');
  const message = document.getElementById('message');

  function iniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 11); // Número aleatorio 0-10
    intentos = 3;
    message.textContent = '';
    guessInput.value = '';
    guessButton.disabled = false;
    guessInput.disabled = false;
    guessInput.focus();
  }

  // Validación y lógica del juego
  guessButton.addEventListener('click', () => {
    const adivinanza = parseInt(guessInput.value);

    if (isNaN(adivinanza) || adivinanza < 0 || adivinanza > 10) {
      message.textContent = '⚠️ Por favor ingresa un número válido entre 0 y 10.';
      guessInput.value = '';
      guessInput.focus();
      return;
    }

    if (adivinanza === numeroSecreto) {
      message.textContent = '🎉 ¡Felicidades! ¡Adivinaste el número!';
      guessButton.disabled = true;
      guessInput.disabled = true;
    } else {
      intentos--;
      if (intentos > 0) {
        message.textContent = `❌ Incorrecto. Te quedan ${intentos} intento(s).`;
      } else {
        message.textContent = `😢 Lo siento, no adivinaste. El número era ${numeroSecreto}.`;
        guessButton.disabled = true;
        guessInput.disabled = true;
      }
    }

    guessInput.value = '';
    guessInput.focus();
  });

  // Reiniciar juego
  resetButton.addEventListener('click', iniciarJuego);

  // Iniciar juego al cargar la página
  iniciarJuego();

  // Navegación (menu + anterior + siguiente reto)
  const nav = document.querySelector('nav');
  nav.innerHTML = `
    <a href="../index.html">Volver al Menú</a>
    <a href="../reto-3/reto-3.html">Anterior (Reto 3)</a>
    <a href="../reto-5/reto-5.html">Siguiente (Reto 5)</a>
  `;
});
