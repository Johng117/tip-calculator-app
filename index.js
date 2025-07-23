const customBtn = document.getElementById("custom-button");
const customInput = document.getElementById("custom-input");
const tipBtns = document.getElementsByClassName("tip");
const tipForm = document.getElementById("tip-form");
const tipsArray = [...tipBtns];
const styles = window.getComputedStyle(customBtn);

// function to remove the custom button and show the custom input field
function customBtnOn() {
  if (styles.display === "block") {
    customBtn.style.display = "none";
    customInput.style.display = "block";
    customInput.style.border ="2px solid hsl(172, 67%, 45%)"
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
function customSubmit() {
  
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



// function to handle form data
function handleFormInputs(percentage) {
  const data = Object.fromEntries(new FormData(tipForm));
  data["tip"] = percentage;
  console.log("data", data);
}

// event listeners
tipsArray.forEach((tip) => {
  tip.addEventListener("click", toggleTip);
});

customBtn.addEventListener("click", customBtnOn);
customInput.addEventListener("click", customSubmit);