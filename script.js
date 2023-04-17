function calculate() {
  // Get the input value
  let monthlyIncome = document.getElementById("monthly-income").value;

  // Calculate the annual income
  let annualIncome = monthlyIncome * 12;

  // Calculate the tax expense based on the annual income
  let taxExpense = 0;
  if (annualIncome <= 1200000) {
    taxExpense = 0;
  } else if (annualIncome <= 1700000) {
    taxExpense = (annualIncome - 1200000) * 0.06;
  } else if (annualIncome <= 2200000) {
    taxExpense = (annualIncome - 1700000) * 0.12 + 30000;
  } else if (annualIncome <= 2700000) {
    taxExpense = (annualIncome - 2200000) * 0.18 + 90000;
  } else if (annualIncome <= 3200000) {
    taxExpense = (annualIncome - 2700000) * 0.24 + 180000;
  } else if (annualIncome <= 3700000) {
    taxExpense = (annualIncome - 3200000) * 0.30 + 300000;
  } else {
    taxExpense = (annualIncome - 3700000) * 0.36 + 450000;
  }

  // Display the result
  let result = document.getElementById("result");
  result.innerHTML = "Monthly Tax Expense: " + taxExpense.toFixed(2);
}
