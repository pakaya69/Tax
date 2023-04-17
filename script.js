const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", () => {
  const monthlyIncome = parseFloat(document.getElementById("monthlyIncome").value);

  // calculate monthly tax expense
  let monthlyTaxExpense = 0;
  const annualIncome = monthlyIncome * 12;
  
  if (annualIncome > 1200000 && annualIncome <= 1700000) {
    monthlyTaxExpense = ((annualIncome - 1200000) * 0.06) / 12;
  } else if (annualIncome > 1700000 && annualIncome <= 2200000) {
    monthlyTaxExpense = (((annualIncome - 1700000) * 0.12) + (500000 * 0.06)) / 12;
  } else if (annualIncome > 2200000 && annualIncome <= 2700000) {
    monthlyTaxExpense = (((annualIncome - 2200000) * 0.18) + (500000 * 0.06) + (500000 * 0.12)) / 12;
  } else if (annualIncome > 2700000 && annualIncome <= 3200000) {
    monthlyTaxExpense = (((annualIncome - 2700000) * 0.24) + (500000 * 0.06) + (500000 * 0.12) + (500000 * 0.18)) / 12;
  } else if (annualIncome > 3200000 && annualIncome <= 3700000) {
    monthlyTaxExpense = (((annualIncome - 3200000) * 0.3) + (500000 * 0.06) + (500000 * 0.12) + (500000 * 0.18) + (500000 * 0.24)) / 12;
  } else if (annualIncome > 3700000) {
    monthlyTaxExpense = (((annualIncome - 3700000) * 0.36) + (500000 * 0.06) + (500000 * 0.12) + (500000 * 0.18) + (500000 * 0.24) + (500000 * 0.3)) / 12;
  }
  
  const epf = (monthlyIncome * 0.08);
  const takeHomeSalary = monthlyIncome - monthlyTaxExpense - epf;

  document.getElementById("monthlyTaxExpense").value = monthlyTaxExpense.toFixed(2);
  document.getElementById("epf").value = epf.toFixed(2);
  document.getElementById("takeHomeSalary").value = takeHomeSalary.toFixed(2);
});
