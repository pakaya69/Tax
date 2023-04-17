const monthlyIncomeInput = document.getElementById("monthly-income");
const monthlyTaxExpenseOutput = document.getElementById("monthly-tax-expense");
const epfOutput = document.getElementById("epf");
const takeHomeSalaryOutput = document.getElementById("take-home-salary");

monthlyIncomeInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    calculate();
  }
});

function calculate() {
  const monthlyIncome = monthlyIncomeInput.value;
  
  let monthlyTaxExpense = 0;
  if (monthlyIncome * 12 > 3700000) {
    monthlyTaxExpense = (monthlyIncome * 12 - 3700000) * 0.36 +
      500000 * 0.3 + 500000 * 0.24 + 500000 * 0.18 + 500000 * 0.12 + 500000 * 0.06;
  } else if (monthlyIncome * 12 > 3200000) {
    monthlyTaxExpense = (monthlyIncome * 12 - 3200000) * 0.3 +
      500000 * 0.24 + 500000 * 0.18 + 500000 * 0.12 + 500000 * 0.06;
  } else if (monthlyIncome * 12 > 2700000) {
    monthlyTaxExpense = (monthlyIncome * 12 - 2700000) * 0.24 +
      500000 * 0.18 + 500000 * 0.12 + 500000 * 0.06;
  } else if (monthlyIncome * 12 > 2200000) {
    monthlyTaxExpense = (monthlyIncome * 12 - 2200000) * 0.18 +
      500000 * 0.12 + 500000 * 0.06;
  } else if (monthlyIncome * 12 > 1700000) {
    monthlyTaxExpense = (monthlyIncome * 12 - 1700000) * 0.12 +
      500000 * 0.06;
  } else if (monthlyIncome * 12 > 1200000) {
    monthlyTaxExpense = (monthlyIncome * 12 - 1200000) * 0.06;
  }
  
  const epf = monthlyIncome * 0.08;
  
  const takeHomeSalary = monthlyIncome - monthlyTaxExpense - epf;
  
  monthlyTaxExpenseOutput.textContent = monthlyTaxExpense.toFixed(2);
  epfOutput.textContent = epf.toFixed(2);
  takeHomeSalaryOutput.textContent = takeHomeSalary.toFixed(2);
}
