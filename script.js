function calculateTax() {
  var monthlyIncome = document.getElementById("monthly-income").value;
  var annualIncome = monthlyIncome * 12;
  var tax = 0;

  if (annualIncome <= 1200000) {
    tax = 0;
  } else if (annualIncome <= 1700000) {
    tax = (annualIncome - 1200000) * 0.06;
  } else if (annualIncome <= 2200000) {
    tax = (annualIncome - 1700000) * 0.12 + 500000 * 0.06;
  } else if (annualIncome <= 2700000) {
    tax = (annualIncome - 2200000) * 0.18 + 500000 * 0.12 + 500000 * 0.06;
  } else if (annualIncome <= 3200000) {
    tax = (annualIncome - 2700000) * 0.24 + 500000 * 0.18 + 500000 * 0.12 + 500000 * 0.06;
  } else if (annualIncome <= 3700000) {
    tax = (annualIncome - 3200000) * 0.3 + 500000 * 0.24 + 500000 * 0.18 + 500000 * 0.12 + 500000 * 0.06;
  } else {
    tax = (annualIncome - 3700000) * 0.36 + 500000 * 0.3 + 500000 * 0.24 + 500000 * 0.18 + 500000 * 0.12 + 500000 * 0.06;
  }

  var monthlyTax = tax / 12;
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Monthly Tax Expense: " + monthlyTax.toFixed(2);
}
