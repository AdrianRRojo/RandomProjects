let form = document.getElementById('calculatorForm')

function calculateTip(tipRate) {
    let preTipValue = document.getElementById("preTipValue").value;
    let result = preTipValue * tipRate;
    document.getElementById("result").innerHTML = "Tip: $" + result;
  }
