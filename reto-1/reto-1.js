let numeroUn = 1;
let stringUn = '1';
let numeroTreinta = 30;
let stringTreinta = '30';
let numeroDiez = 10;
let stringDiez = '10';

let salida = '';

// Comparación de numeroUn y stringUn
if (numeroUn === stringUn) {
  salida += 'Las variables numeroUn y stringUn tienen el mismo valor y mismo tipo<br>';
} else if (numeroUn == stringUn) {
  salida += 'Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes<br>';
} else {
  salida += 'Las variables numeroUn y stringUn no tienen el mismo valor<br>';
}

// Comparación de numeroTreinta y stringTreinta
if (numeroTreinta === stringTreinta) {
  salida += 'Las variables numeroTreinta y stringTreinta tienen el mismo valor y mismo tipo<br>';
} else if (numeroTreinta == stringTreinta) {
  salida += 'Las variables numeroTreinta y stringTreinta tienen el mismo valor, pero tipos diferentes<br>';
} else {
  salida += 'Las variables numeroTreinta y stringTreinta no tienen el mismo valor<br>';
}

// Comparación de numeroDiez y stringDiez
if (numeroDiez === stringDiez) {
  salida += 'Las variables numeroDiez y stringDiez tienen el mismo valor y mismo tipo<br>';
} else if (numeroDiez == stringDiez) {
  salida += 'Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes<br>';
} else {
  salida += 'Las variables numeroDiez y stringDiez no tienen el mismo valor<br>';
}

document.getElementById('resultado').innerHTML = salida;
