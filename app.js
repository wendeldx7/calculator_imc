function clear() {
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
}

function IMC() {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let IMC = peso / (altura * altura);

  if (peso === "" || isNaN(peso) || altura === "" || isNaN(altura)) {
    alert("Algo deu errado");
  } else if (IMC > 0 && IMC < 17) {
    alert("Muito abaixo do peso\nIMC: " + IMC.toFixed(2));
  } else if (IMC >= 17 && IMC < 18.4) {
    alert("Magreza\nIMC: " + IMC.toFixed(2));
  } else if (IMC >= 18.5 && IMC < 25) {
    alert("Peso ideal\nIMC: " + IMC.toFixed(2));
  } else if (IMC >= 25 && IMC < 30) {
    alert("SObrepeso\nIMC: " + IMC.toFixed(2));
  } else if (IMC >= 30.0 && IMC < 35) {
    alert("Obesidade grau I\nIMC: " + IMC.toFixed(2));
  } else if (IMC >= 35 && IMC < 40) {
    alert("Obesidade grau II\nIMC: " + IMC.toFixed(2));
  } else if (IMC >= 40) {
    alert("Obesidade grau III\nIMC: " + IMC.toFixed(2));
  } else {
    alert("Número inválido");
  }
  clear();
}
