const customBtn = document.getElementById("custom-button");
const customInput = document.getElementById("custom-input");
const tipBtns = document.getElementsByClassName("tip");
const tipForm = document.getElementById("tip-form");
const tipsArray = [...tipBtns];
const styles = window.getComputedStyle(customBtn);
const billInputElement = document.getElementById("bill-amount");
const peopleInputElement = document.getElementById("people-no");
const billErrorElement = document.getElementById("bill-amount-error");
const peopleErrorElement = document.getElementById("people-no-error");

const tipFigure = document.getElementById("tip-figure");
const totalFigure = document.getElementById("total-figure");

// error functions
function billValueError(value) {
  if (value <= 0) {
    billErrorElement.style.display = "inline-block";
    billInputElement.style.border = "2px solid hsl(0,100%,50%)";
    return false;
  }
  return true;
}

function noOfPeopleError(value) {
  if (value <= 0) {
    peopleErrorElement.style.display = "inline-block";
    peopleInputElement.style.border = "2px solid hsl(0,100%,50%)";
    return false;
  }
  return true;
}

// functions to reset input states
function resetBillInput() {
  resetSelectTip();
  billErrorElement.style.display = "none";
  billInputElement.style.border = "2px solid hsl(172, 67%, 45%)";
}

function resetPeopleNumber() {
  resetSelectTip();
  peopleErrorElement.style.display = "none";
  peopleInputElement.style.border = "2px solid hsl(172, 67%, 45%)";

}

// function to remove the custom button and show the custom input field
function customBtnOn() {
  if (styles.display === "block") {
    customBtn.style.display = "none";
    customInput.style.display = "block";
    customInput.style.border = "2px solid hsl(172, 67%, 45%)";
    customInput.focus();
    resetSelectTip();
  }
}

// function to switch back to custom button after tip button pressed
function customBtnOff() {
  if (styles.display === "none") {
    customBtn.style.display = "block";
    customInput.style.display = "none";
    customInput.value = "";
  }
}

// handle custom input
function customSubmit(e) {
  handleFormInputs(e.target.value);
}

// function to reset all tip buttons
function resetSelectTip() {
  for (let i = 0; i < tipsArray.length; i++) {
    tipsArray[i].style.backgroundColor = "hsl(183, 100%, 15%)";
    tipsArray[i].style.color = "white";
  }
}

// function to toggle on and off individual tip buttons
function toggleTip(e) {
  resetSelectTip();
  customBtnOff();
  handleFormInputs(e.target.id);
  let currentBtn = document.getElementById(e.target.id);
  currentBtn.style.color = "hsl(183, 100%, 15%)";
  currentBtn.style.backgroundColor = "hsl(172, 67%, 45%)";
}

// calculation function
function calcTip(dataObj) {
  console.log("dataObj", dataObj);

  const billToNumber = Number(dataObj["bill-amount"]);
  const peopleToNumber = Number(dataObj["people-no"]);
  const tipPercentageToNumber = Number(`.${dataObj["tip"]}`);

  const tipPerPerson = (billToNumber * tipPercentageToNumber) / peopleToNumber;
  const totalPerPerson = (billToNumber + tipPerPerson) / peopleToNumber;
  console.log("tipPerPerson", tipPerPerson);
  console.log("totalPerPerson", totalPerPerson);
  tipFigure.innerHTML = `$${tipPerPerson.toFixed(2)}`;
  totalFigure.innerHTML = `$${totalPerPerson.toFixed(2)}`;
}

// function to handle form data
function handleFormInputs(percentage) {
  const data = Object.fromEntries(new FormData(tipForm));
  data["tip"] = percentage;
  const validBill = billValueError(Number(data["bill-amount"]));
  const validPeople = noOfPeopleError(Number(data["people-no"]));

  console.log("validBill", validBill);
  console.log("validPeople", validPeople);

  if (validBill && validPeople) {
    calcTip(data);
  }
}

// event listeners
tipsArray.forEach((tip) => {
  tip.addEventListener("click", toggleTip);
});

customBtn.addEventListener("click", customBtnOn);
customInput.addEventListener("click", customSubmit);
billInputElement.addEventListener("input", resetBillInput);
peopleInputElement.addEventListener("input", resetPeopleNumber);
