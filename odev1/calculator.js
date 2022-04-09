const displayInput = document.getElementById("display-input");
const buttons = Array.from(document.getElementsByClassName("calc-btn"));

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
      : alert("Divide by zero error encountered!");
  } catch (e) {
    displayInput.textContent = "";
    alert("Something went wrong!");
  }
};
