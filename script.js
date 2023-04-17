// Get the input element
const incomeInput = document.getElementById("income-input");

// Get the output elements
const taxOutput = document.getElementById("tax-output");
const epfOutput = document.getElementById("epf-output");
const takeHomeSalaryOutput = document.getElementById("take-home-salary-output");

// Function to calculate tax expense
function calculateTax(income) {
  let tax = 0;
  const annualIncome = income * 12;

  if (annualIncome > 1200000) {
    if (annualIncome <= 1700000) {
      tax = (annualIncome - 1200000) * 0.06;
    } else if (annualIncome <= 2200000) {
      tax = (50000 * 0.06) + ((annualIncome - 1700000) * 0.12);
    } else if (annualIncome <= 2700000) {
      tax = (50000 * 0.06) + (50000 * 0.12) + ((annualIncome - 2200000) * 0.18);
    } else if (annualIncome <= 3200000) {
      tax = (50000 * 0.06) + (50000 * 0.12) + (50000 * 0.18) + ((annualIncome - 2700000) * 0.24);
    } else if (annualIncome <= 3700000) {
      tax = (50000 * 0.06) + (50000 * 0.12) + (50000 * 0.18) + (50000 * 0.24) + ((annualIncome - 3200000) * 0.30);
    } else {
      tax = (50000 * 0.06) + (50000 * 0.12) + (50000 * 0.18) + (50000 * 0.24) + (50000 * 0.30) + ((annualIncome - 3700000) * 0.36);
    }
  }

  // Return the tax expense
  return tax / 12;
}

// Function to calculate EPF contribution
function calculateEPF(income) {
  return income * 0.08;
}

// Function to calculate take home salary
function calculateTakeHomeSalary(income) {
  const tax = calculateTax(income);
  const epf = calculateEPF(income);

  return income - tax - epf;
}

// Update the outputs on input change
incomeInput.addEventListener("input", () => {
  const income = incomeInput.value;

  const tax = calculateTax(income);
  taxOutput.innerHTML = tax.toFixed(2);

  const epf = calculateEPF(income);
  epfOutput.innerHTML = epf.toFixed(2);

  const takeHomeSalary = calculateTakeHomeSalary(income);
  takeHomeSalaryOutput.innerHTML = takeHomeSalary.toFixed(2);
});
