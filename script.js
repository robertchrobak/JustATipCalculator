var subTotal = document.getElementById("subTotal");
var tipAmountSlide = document.getElementById("tipAmountSlide");
var totalTip = document.getElementById("totalTip");
var grandTotal = document.getElementById("grandTotal");


submitButton.onclick = function() {
  subTotalValue = document.getElementById("subTotal").value;
  tipAmountValue = document.getElementById("tipAmountSlide").value;
  var tipAmountDecimal = tipAmountValue/100;
  console.log("BUTTON WORKS");
  calculateTip(Number(subTotalValue), tipAmountDecimal);
}


function calculateTip(subTotalValue, tipAmountDecimal) {
  var tipAmountFinal = subTotalValue * tipAmountDecimal;
  console.log(tipAmountFinal);
  var totalCheckAmount = tipAmountFinal + subTotalValue;
  console.log(totalCheckAmount);

  totalTip.innerHTML = "Tip Total: 💲" + tipAmountFinal.toFixed(2);
  grandTotal.innerHTML = "Check Total: 💲" + totalCheckAmount.toFixed(2);

}
