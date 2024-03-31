function expenseInput(inputId) {
  const getInput = document.getElementById(inputId);
  if (getInput.value == "") {
    getInput.value = 0;
  }
  const expenses = parseFloat(getInput.value);
  if (expenses >= 0) {
    return expenses;
  } else if (isNaN(expenses)) {
    throw "please inter only number";
  } else {
    throw "please inter only positive number";
  }
}
function savingFunction(percent) {
  return (expenseInput("income") * percent) / 100;
}
// DOM element catch
function domElement(elementId) {
  return document.getElementById(elementId);
}
document
  .getElementById("secondCalculation")
  .addEventListener("focusout", (event) => {
    if (event.target.id == "Calculate") {
      const totalExpenses = domElement("totalExpenses");
      const balance = domElement("balance");
      try {
        const totalExpensesCost =
          expenseInput("food") + expenseInput("rent") + expenseInput("clothe");

        if (expenseInput("income") > totalExpensesCost) {
          totalExpenses.innerText = totalExpensesCost;
          balance.innerText = expenseInput("income") - totalExpensesCost;
        } else {
          throw "excess spand money";
        }
      } catch (e) {
        alert(e);
      }
    } else if (event.target.id == "calculateSaving") {
      const saving = domElement("saving");
      const remainingBalance = domElement("remainingBalance");
      const balance = domElement("balance").innerText;
      const totalBalance = parseFloat(balance);

      const savingInput = expenseInput("savingInput");
      const totalSaving = savingFunction(savingInput);

      try {
        if (totalBalance > totalSaving) {
          saving.innerText = totalSaving;
          remainingBalance.innerText = totalBalance - totalSaving;
        } else {
          throw "excess saving money";
        }
      } catch (e) {
        alert(e);
      }
    } else {
      const expenses = parseFloat(event.target.value);
      if (expenses >= 0) {
        // console.log(expenses);
        //   return expenses;
      } else if (isNaN(expenses)) {
        // document.getElementsByClassName("invalid-feedback").style.display =
        //   "block";
        // getInput.value = "";
        throw "please inter only number";
      } else {
        // getInput.value = "";
        throw "please inter only positive number";
      }
    }
    // console.log(typeof event.target.id);
  });
/* domElement("Calculate").addEventListener("click", () => {
  const totalExpenses = domElement("totalExpenses");
  const balance = domElement("balance");
  try {
    const totalExpensesCost =
      expenseInput("food") + expenseInput("rent") + expenseInput("clothe");

    if (expenseInput("income") > totalExpensesCost) {
      totalExpenses.innerText = totalExpensesCost;
      balance.innerText = expenseInput("income") - totalExpensesCost;
    } else {
      throw "excess spand money";
    }
  } catch (e) {
    alert(e);
  }
}); */

// domElement("calculateSaving").addEventListener("click", () => {
//   const saving = domElement("saving");
//   const remainingBalance = domElement("remainingBalance");
//   const balance = domElement("balance").innerText;
//   const totalBalance = parseFloat(balance);

//   const savingInput = expenseInput("savingInput");
//   const totalSaving = savingFunction(savingInput);

//   try {
//     if (totalBalance > totalSaving) {
//       saving.innerText = totalSaving;
//       remainingBalance.innerText = totalBalance - totalSaving;
//     } else {
//       throw "excess saving money";
//     }
//   } catch (e) {
//     alert(e);
//   }
//   //   console.log(totalSaving);
//   //   saving.innerText = totalSaving;
// });
