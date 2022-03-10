var secretNumber = parseInt(Math.random() * 10);

function Number() {
  //pushs do HTML
  //Push <h2>
  var result = document.getElementById("output");
  //Push <input>
  var number = parseFloat(document.getElementById("number").value);
  // se chute for igual ao numeroSecreto

  if (number == secretNumber) {

    result.innerHTML = "✅Acertou Miseravi✅";
  }

   else if (number > 10 || number < 0) {
    result.innerHTML = "❗VOCÊ DEVE DIGITAR UM NÚMERO DE 0 À 10❗";
  }

   else {
    result.innerHTML = "❌ Errado!!!❌";
  }


}
