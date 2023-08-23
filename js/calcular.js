var numero1 = 0;
var numero2 = 0;
var operacao = "+";

function setNumero1(input) {
  numero1 = +input.value;
  console.log("Número 1: ", numero1);
}

function setNumero2(input) {
  numero2 = +input.value;
  console.log("Número 2: ", numero2);
}

function setOperacao(select) {
  operacao = select.value;
  console.log("Operação: ", numero2);
}

function calcular() {
  console.log(numero1, operacao, numero2);
  var resultado;
  switch (operacao) {
    case "+":
      resultado = numero1 + numero2;
      break;
    case "-":
      resultado = numero1 - numero2;
      break;
    case "*":
      resultado = numero1 * numero2;
      break;
    case "/":
      resultado = numero1 / numero2;
      break;
  }
  console.log('Resultado: ', resultado);

  // document.getElementById('id-da-tag');
  const spanResultado = document.getElementsByTagName('span')[0];
  console.log('spanResultado: ', spanResultado);
  
  const textResultado = document.createTextNode(resultado);
  console.log('textResultado: ', textResultado);
  spanResultado.appendChild(textResultado);

//   spanResultado.innerHTML = resultado;

}


