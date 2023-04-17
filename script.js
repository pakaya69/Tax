const calculateTax = (income) => {
  let annualIncome = income * 12;
  let tax = 0;

  if (annualIncome > 1200000) {
    if (annualIncome <= 1700000) {
      tax = (annualIncome - 1200000) * 0.06;
    } else if (annualIncome <= 2200000) {
      tax = (annualIncome - 1700000) * 0.12 + 30000; // 500000 * 0.06
    } else if (annualIncome <= 2700000) {
      tax = (annualIncome - 2200000) * 0.18 + 90000; // 500000 * 0.06 + 500000 * 0.12
    } else if (annualIncome <= 3200000) {
      tax = (annualIncome - 2700000) * 0.24 + 180000; // 500000 * 0.06 + 500000 * 0.12 + 500000 * 0.18
    } else if (annualIncome <= 3700000) {
      tax = (annualIncome - 3200000) * 0.3 + 300000; // 500000 * 0.06 + 500000 * 0.12 + 500000 * 0.18 + 500000 * 0.24
    } else {
      tax = (annualIncome - 3700000) * 0.36 + 510000; // 500000 * 0.06 + 500000 * 0.12 + 500000 * 0.18 + 500000 * 0.24 + 500000 * 0.3
    }
  }

  return tax / 12; // Convert back to monthly tax expense
}

const calculateEPF = (income) => {
  return income * 0.08;
}

const calculateTakeHomeSalary = (income) => {
  const tax = calculateTax(income);
  const epf = calculateEPF(income);

  return income - tax - epf;
}

const calculate = () => {
  const income = document.getElementById('income').value;
  const tax = calculateTax(income);
  const epf = calculateEPF(income);
  const takeHomeSalary = calculateTakeHomeSalary(income);

  document.getElementById('tax').textContent = `Monthly Tax Expense: ${tax.toFixed(2)}`;
  document.getElementById('epf').textContent = `EPF (8%): ${epf.toFixed(2)}`;
  document.getElementById('take-home-salary').textContent = `Take Home Salary: ${takeHomeSalary.toFixed(2)}`;
}

document.getElementById('calculate-btn').addEventListener('click', calculate);
