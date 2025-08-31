// const nombre = prompt("¿Cuál es tu nombre?");
// const edad = prompt("¿Cuántos años tienes?");
// const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

// alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

// const respuesta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);

// if (respuesta == 1) {
//   alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito. 🚀");
// } else if (respuesta == 2) {
//   alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
// } else {
//   alert("Respuesta no válida. 😅");
// }
function mostrarMensaje() {
  const nombre = document.getElementById('nombre').value;
  const edad = document.getElementById('edad').value;
  const lenguaje = document.getElementById('lenguaje').value;

  const mensaje = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`;
  document.getElementById('resultado').textContent = mensaje;

  // Ejercicio opcional
  setTimeout(() => {
    const respuesta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con 1 para SÍ o 2 para NO.`);
    if (respuesta == 1) {
      document.getElementById('resultado').textContent += ' 😃 ¡Muy bien! Sigue estudiando y tendrás mucho éxito.';
    } else if (respuesta == 2) {
      document.getElementById('resultado').textContent +=
        ' 😕 Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?';
    }
  }, 500);
}
