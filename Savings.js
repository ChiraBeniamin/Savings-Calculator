function calculateSavings() {
  var earnings = document.getElementById("earnings").value;
  var consumption = document.getElementById("consumption").value;
  var parsedConsumption = parseInt(consumption);
  var parsedEarnings = parseInt(earnings);
  // var savings = document.getElementById("result").innerHTML;

//   if (parsedEarnings === 0) {
//     alert("Earnings can't be 0");
//   }
//   if (parsedConsumption === null) {
//     alert("Consumption can't be 0");
//   }

  var savingsCalc = earnings - consumption;

    // var savings = savings + savingsCalc + "RON";
  document.getElementById("result").innerHTML =
    "The savings are " + savingsCalc + " RON";
}
