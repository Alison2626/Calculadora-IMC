function calcularIMC() {
    // Obter valores de peso e altura
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
  
    // Calcular o IMC
    let imc = peso / (altura * altura);
  
    // Determinar a classificação
    let classificacao;
    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc < 25) {
      classificacao = "Peso normal";
    } else if (imc < 30) {
      classificacao = "Sobrepeso";
    } else {
      classificacao = "Obesidade";
    }
  
    // Exibir o resultado
    let resultado = document.getElementById("resultado");
    resultado.textContent = `Seu IMC é: ${imc.toFixed(2)} (${classificacao})`;
  }