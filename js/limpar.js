document.getElementById("limpar").onclick = function () {
  document.getElementById("inputNumero1").value = "";
  document.getElementById("inputNumero2").value = "";

  var spanResultado = document.getElementById("spanResultado");
  if (spanResultado.firstChild) {
    spanResultado.removeChild(spanResultado.firstChild);
  }
  document.getElementById("selectOperacao").value = "+";
};

//jQuery
// $('#limpar').click(function() {
//     $('#inputNumero1').val('');
//     $('#inputNumero2').val('');
//     $('#spanResultado').remove();
//     $('#selectOperacao').val('+');
// });
