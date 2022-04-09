const displayInput = document.getElementById("display-input");
const buttons = Array.from(document.getElementsByClassName("calc-btn"));
const errorMessage = document.getElementById("err-message");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.textContent) {
      case "C":
        displayInput.textContent = "";
        break;
      case "←":
        displayInput.textContent = displayInput.textContent.slice(0, -1);
        break;
      case "=":
        getResult();
        break;
      default:
        displayInput.textContent += button.textContent;
    }
  });
});

const getResult = () => {
  try {
    const result = eval(displayInput.textContent);
    result !== Infinity
      ? (displayInput.textContent = result)
      : getError("Divide by zero error encountered!");
  } catch (e) {
    getError("Something went wrong!");
  }
};

const getError = (message) => {
  errorMessage.style.display = "block";
  errorMessage.textContent = message;
  setTimeout(() => (errorMessage.style.display = "none"), 5000);
};
