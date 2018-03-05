var subTotal = document.getElementById("subTotal");
var tipAmountPercent = document.getElementById("tipAmountPercent");
var totalTip = document.getElementById("totalTip");
var grandTotal = document.getElementById("grandTotal");

submitButton.onclick = function() {
  subTotalValue = document.getElementById("subTotal").value;
  tipAmountValue = document.getElementById("tipAmountPercent").value;
  var tipAmountDecimal = tipAmountValue / 100;
  console.log("BUTTON WORKS");
  calculateTip(Number(subTotalValue), tipAmountDecimal);
}

function calculateTip(subTotalValue, tipAmountDecimal) {
  var tipAmountFinal = subTotalValue * tipAmountDecimal;
  console.log(tipAmountFinal);
  var totalCheckAmount = tipAmountFinal + subTotalValue;
  console.log(totalCheckAmount);
  totalTip.innerHTML = "Tip Total:<br>$ " + tipAmountFinal.toFixed(2);
  grandTotal.innerHTML = "Grand Total:<br>$ " + totalCheckAmount.toFixed(2);
}
