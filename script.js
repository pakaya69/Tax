// Get the input element and buttons
const monthlyIncomeInput = document.getElementById('monthly-income');
const calculateButton = document.getElementById('calculate');
const resetButton = document.getElementById('reset');

// Get the output elements
const monthlyTaxOutput = document.getElementById('monthly-tax');
const epfOutput = document.getElementById('epf');
const takeHomeSalaryOutput = document.getElementById('take-home-salary');

// Add event listeners to the buttons
calculateButton.addEventListener('click', calculate);
resetButton.addEventListener('click', reset);

function calculate() {
  // Get the monthly income
  const monthlyIncome = Number(monthlyIncomeInput.value);
  
  // Calculate the monthly tax
  let monthlyTax = 0;
  const annualIncome = monthlyIncome * 12;
  
  if (annualIncome > 1200000) {
    const remainingIncome = annualIncome - 1200000;
    if (remainingIncome <= 500000) {
      monthlyTax = remainingIncome * 0.06;
    } else if (remainingIncome <= 1000000) {
      monthlyTax = (remainingIncome - 500000) * 0.12 + (500000 * 0.06);
    } else if (remainingIncome <= 1500000) {
      monthlyTax = (remainingIncome - 1000000) * 0.18 + (500000 * 0.12) + (500000 * 0.06);
    } else if (remainingIncome <= 2000000) {
      monthlyTax = (remainingIncome - 1500000) * 0.24 + (500000 * 0.18) + (500000 * 0.12) + (500000 * 0.06);
    } else if (remainingIncome <= 2500000) {
      monthlyTax = (remainingIncome - 2000000) * 0.30 + (500000 * 0.24) + (500000 * 0.18) + (500000 * 0.12) + (500000 * 0.06);
    } else {
      monthlyTax = (remainingIncome - 2500000) * 0.36 + (500000 * 0.30) + (500000 * 0.24) + (500000 * 0.18) + (500000 * 0.12) + (500000 * 0.06);
    }
  }
  
  // Calculate the EPF
  const epf = monthlyIncome * 0.08;
  
  // Calculate the take-home salary
  const takeHomeSalary = monthlyIncome - monthlyTax - epf;
  
  // Display the outputs
  monthlyTaxOutput.textContent = `Monthly Tax Expense: RM ${monthlyTax.toFixed(2)}`;
  epfOutput.textContent = `EPF 8%: RM ${epf.toFixed(2)}`;
  takeHomeSalaryOutput.textContent = `Take Home Salary: RM ${takeHomeSalary.toFixed(2)}`;
}

function reset() {
  // Clear the input and outputs
  monthlyIncomeInput.value = '';
  monthlyTaxOutput.textContent = '';
  epfOutput.textContent = '';
  takeHomeSalaryOutput.textContent = '';
}
