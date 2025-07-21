const customBtn = document.getElementById("custom-button");
const customInput = document.getElementById("custom-input");
const percentLabels = document.getElementsByClassName("percent-label");

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
  for (let i = 0; i < percentLabels.length; i++) {
    percentLabels[i].style.backgroundColor = "hsl(183, 100%, 15%)";
    percentLabels[i].style.color="white"
  }
}

customBtn.addEventListener("click", toggleCustomBtn);
