function calculateTax() {
  var income = document.getElementById("income").value;
  var annualIncome = income * 12;
  var taxExpense = 0;
  var epf = 0;
  
  if (annualIncome > 1200000 && annualIncome <= 1700000) {
    taxExpense = ((annualIncome - 1200000) * 0.06) / 12;
  } else if (annualIncome > 1700000 && annualIncome <= 2200000) {
    taxExpense = ((annualIncome - 1700000) * 0.12 + 500000 * 0.06) / 12;
  } else if (annualIncome > 2200000 && annualIncome <= 2700000) {
    taxExpense = ((annualIncome - 2200000) * 0.18 + 500000 * 0.12 + 500000 * 0.06) / 12;
  } else if (annualIncome > 2700000 && annualIncome <= 3200000) {
    taxExpense = ((annualIncome - 2700000) * 0.24 + 500000 * 0.18 + 500000 * 0.12 + 500000 * 0.06) / 12;
  } else if (annualIncome > 3200000 && annualIncome <= 3700000) {
    taxExpense = ((annualIncome - 3200000) * 0.30 + 500000 * 0.24 + 500000 * 0.18 + 500000 * 0.12 + 500000 * 0.06) / 12;
  } else if (annualIncome > 3700000) {
    taxExpense = ((annualIncome - 3700000) * 0.36 + 500000 * 0.30 + 500000 * 0.24 + 500000 * 0.18 + 500000 * 0.12 + 500000 * 0.06) / 12;
  }
  
  epf = (income * 0.08).toFixed(2);
  var takeHomeSalary = (income - taxExpense - epf).toFixed(2);
  
  document.getElementById("taxExpense").innerHTML = "Monthly tax expense: RM " + taxExpense.toFixed(2);
  document.getElementById("epf").innerHTML = "EPF 8%: RM " + epf;
  document.getElementById("takeHomeSalary").innerHTML = "Take home salary: RM " + takeHomeSalary;
}

var incomeInput = document.getElementById("income");
incomeInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    calculateTax();
  }
});
