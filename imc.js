
function calcular() {
    let nome = document.getElementById("nome").value;
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;

    if ((nome !== '') && (altura !== '') && (peso !== '')) {
        let imc = (peso / altura ** 2).toFixed(2);

        if (imc < 18.5) {
            document.getElementById("resultado").innerHTML = nome + " a classificação do seu peso é " + "'Magreza'." + " Seu IMC é: " + imc;
        } else if (imc < 25) {
            document.getElementById("resultado").innerHTML = nome + " a classificação do seu peso é " + "'Normal'." + " Seu IMC é: " + imc;
        } else if (imc < 30) {
            document.getElementById("resultado").innerHTML = nome + " a classificação do seu peso é " + "'Sobrepeso'." + " Seu IMC é: " + imc;
        } else if (imc < 35) {
            document.getElementById("resultado").innerHTML = nome + " a classificação do seu peso é " + "'Obesidade'." + " Seu IMC é: " + imc;
        } else if (imc < 40) {
            document.getElementById("resultado").innerHTML = nome + " a classificação do seu peso é " + "'Obesidade Grau II'." + " Seu IMC é: " + imc;
        }

    } else {
        alert("Por favor preencha todos os campos.");

    }


}