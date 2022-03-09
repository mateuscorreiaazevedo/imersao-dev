function converter() {

    var elementValue = document.getElementById("conversor");
    var valueNumber = parseFloat(elementValue.value);
    var valueConvert = (valueNumber * 5.06).toFixed(2);

    var textConvert = document.getElementById("txt-convert");
    var text = "O valor em reais é: R$" + valueConvert;

    textConvert.innerHTML = text;

    console.log(text)
}