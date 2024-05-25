// * selectors :
const inputs = document.querySelectorAll(
  `input:is([type="text"],[type="email"])`
);
const radioBox = document.querySelectorAll("input[type='radio'");
const textarea = document.querySelector("textarea");
const form = document.querySelector("form");
const checkBoxFeild = document.querySelector(`input[type="checkbox"]`);
const alertElement = document.querySelector("body article");
// * global variables
let radioChoice = "";
let checkBox = false;
let isCorrectForm = true;
// * methodes
function checkInput(input) {
  if (input.value === "") {
    input.parentElement.classList.add("error");
    return false;
  } else {
    input.parentElement.classList.remove("error");
    return true;
  }
}
function submit(e) {
  e.preventDefault();
  isCorrectForm = true;
  for (let i = 0; i < inputs.length; i++) {
    let ele = inputs[i];
    if (!checkInput(ele)) isCorrectForm = false;
  }
  if (radioChoice === "") {
    isCorrectForm = false;
    document.getElementsByClassName("radiobox")[0].classList.add("error");
  } else
    document.getElementsByClassName("radiobox")[0].classList.remove("error");
  if (!checkInput(textarea)) isCorrectForm = false;
  if (!checkBoxFeild.checked) {
    checkBoxFeild.parentElement.classList.add("checkbox-error");
    isCorrectForm = false;
  } else checkBoxFeild.parentElement.classList.remove("checkbox-error");
  if (isCorrectForm) document.body.classList.add("submit");
}
function radioChange(e) {
  radioChoice = e.target.id;
}
// * events
form.addEventListener("submit", submit);
radioBox.forEach((ele) => ele.addEventListener("change", radioChange));
alertElement.addEventListener("click", () => {
  document.body.classList.remove("submit");
});
