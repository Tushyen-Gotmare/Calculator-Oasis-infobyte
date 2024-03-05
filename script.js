

const btn = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";
const display = document.querySelector(".Show-data");

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  }  else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else if (btnValue === "AC") {
    output = "";
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

btn.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});