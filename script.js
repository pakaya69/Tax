// Get the HTML elements
const incomeInput = document.getElementById("income-input");
const calculateButton = document.getElementById("calculate-button");
const resultOutput = document.getElementById("result-output");

// Function to calculate the tax expense
function calculateTaxExpense(income) {
  const annualIncome = income * 12;
  let taxExpense = 0;
  if (annualIncome > 1200000) {
    if (annualIncome <= 1700000) {
      const taxableAmount = annualIncome - 1200000;
      taxExpense = taxableAmount * 0.06;
    } else if (annualIncome <= 2200000) {
      const taxableAmount = annualIncome - 1700000;
      taxExpense = taxableAmount * 0.12 + 500000 * 0.06;
    } else if (annualIncome <= 2700000) {
      const taxableAmount = annualIncome - 2200000;
      taxExpense = taxableAmount * 0.18 + 500000 * 0.12 + 500000 * 0.06;
    } else if (annualIncome <= 3200000) {
      const taxableAmount = annualIncome - 2700000;
      taxExpense = taxableAmount * 0.24 + 500000 * 0.18 + 500000 * 0.12 + 500000 * 0.06;
    } else if (annualIncome <= 3700000) {
      const taxableAmount = annualIncome - 3200000;
      taxExpense = taxableAmount * 0.30 + 500000 * 0.24 + 500000 * 0.18 + 500000 * 0.12 + 500000 * 0.06;
    } else {
      const taxableAmount = annualIncome - 3700000;
      taxExpense = taxableAmount * 0.36 + 500000 * 0.30 + 500000 * 0.24 + 500000 * 0.18 + 500000 * 0.12 + 500000 * 0.06;
    }
  }
  return taxExpense;
}

// Event listener for the calculate button
calculateButton.addEventListener("click", function() {
  const income = incomeInput.value;
  const taxExpense = calculateTaxExpense(income);
  resultOutput.innerHTML = `Monthly tax expense: ${taxExpense.toFixed(2)}`;
});
