const customBtn = document.getElementById("custom-button");
const customInput = document.getElementById("custom-input");
const tipBtns = document.getElementsByClassName("tip");
const tipsArray = [...tipBtns];

// function to show/unshow the custom input field
function toggleCustomBtn() {
  const styles = window.getComputedStyle(customBtn);
  if (styles.display === "block") {
    customBtn.style.display = "none";
    customInput.style.display = "block";
    resetSelectTip();
  }
}

// function to reset background color for all tip buttons
function resetSelectTip() {
  for (let i = 0; i < tipsArray.length; i++) {
    tipsArray[i].style.backgroundColor = "hsl(183, 100%, 15%)";
    tipsArray[i].style.color = "white";
  }
}

// function to toggle on and off individual tip buttons
function toggleTip(e) {
  resetSelectTip();
  let currentBtn = document.getElementById(e.target.id);
  currentBtn.style.color = "hsl(183, 100%, 15%)";
  currentBtn.style.backgroundColor = "hsl(172, 67%, 45%)";
}

tipsArray.forEach((tip) => {
  tip.addEventListener("click", toggleTip);
});

customBtn.addEventListener("click", toggleCustomBtn);
