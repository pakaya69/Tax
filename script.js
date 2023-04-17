function calculateTax() {
  const monthlyIncome = Number(document.getElementById("income").value);
  const annualIncome = monthlyIncome * 12;
  let monthlyTax = 0;
  
  if (annualIncome > 1200000 && annualIncome <= 1700000) {
    monthlyTax = ((annualIncome - 1200000) * 0.06 / 12).toFixed(2);
  } else if (annualIncome > 1700000 && annualIncome <= 2200000) {
    monthlyTax = (((annualIncome - 1700000) * 0.12) + 30000) / 12;
  } else if (annualIncome > 2200000 && annualIncome <= 2700000) {
    monthlyTax = (((annualIncome - 2200000) * 0.18) + 90000) / 12;
  } else if (annualIncome > 2700000 && annualIncome <= 3200000) {
    monthlyTax = (((annualIncome - 2700000) * 0.24) + 180000) / 12;
  } else if (annualIncome > 3200000 && annualIncome <= 3700000) {
    monthlyTax = (((annualIncome - 3200000) * 0.3) + 300000) / 12;
  } else if (annualIncome > 3700000) {
    monthlyTax = (((annualIncome - 3700000) * 0.36) + 450000) / 12;
  }

  document.getElementById("tax").value = monthlyTax.toFixed(2);
}
