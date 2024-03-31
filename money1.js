function getMessage(g, outputMessage) {
  //   console.log(g.nextElementSibling);
  const span = g.nextElementSibling;

  span.innerText = outputMessage;
}

function expenseInput(inputId) {
  //   debugger;
  const getInput = document.getElementById(inputId);
  if (getInput.value == "") {
    getInput.value = 0;
  }
  //   console.log(getInput.value);
  const expenses = parseFloat(getInput.value);
  if (isNaN(expenses)) {
    getMessage(getInput, "*please inter only number");
    return false;
  } else if (expenses >= 0) {
    getMessage(getInput, "");
    return expenses;
  } else {
    getMessage(getInput, "*please inter only positive number");
    return false;
  }
}
// Percentage calculation
function savingFunction(percent) {
  return (expenseInput("income") * percent) / 100;
}
// DOM element catch
function domElement(elementId) {
  return document.getElementById(elementId);
}
domElement("Calculate").addEventListener("click", () => {
  const totalExpenses = domElement("totalExpenses");
  const balance = domElement("balance");

  const totalExpensesCost =
    expenseInput("food") + expenseInput("rent") + expenseInput("clothe");
  console.log(expenseInput("income"));
  if (expenseInput("income") >= totalExpensesCost) {
    getMessage(totalExpenses, "");
    totalExpenses.innerText = totalExpensesCost;
    balance.innerText = expenseInput("income") - totalExpensesCost;
  } else if (expenseInput("income") != false) {
    getMessage(totalExpenses, "*excess spand money");
  }
});

domElement("calculateSaving").addEventListener("click", () => {
  const saving = domElement("saving");
  const remainingBalance = domElement("remainingBalance");
  const balance = domElement("balance").innerText;
  const totalBalance = parseFloat(balance);

  const savingInput = expenseInput("savingInput");
  const totalSaving = savingFunction(savingInput);

  if (totalBalance > totalSaving) {
    getMessage(saving, "");
    saving.innerText = totalSaving;
    remainingBalance.innerText = totalBalance - totalSaving;
  } else {
    getMessage(saving, "*excess saving money");
  }
});
