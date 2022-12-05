let form = document.querySelector(".form");
let passInput = document.querySelector("#password");

let numberSecCheck = 0;

form.password.addEventListener("keyup", (e) => {
  if (e.target.value) {
    let ep = 0;
    ep += /[a-z]/.test(e.target.value) ? 1 : 0;
    ep += /[A-Z]/.test(e.target.value) ? 1 : 0;
    ep += /[0-9]/.test(e.target.value) ? 1 : 0;
    ep += /[\W]/.test(e.target.value) ? 1 : 0;
    ep += e.target.value.length >= 8 ? 1 : 0;

    if (ep === 5) {
      passInput.style["border-color"] = "green";
      passInput.style["background-color"] = "#c0fdb7";
    } else {
      passInput.style["border-color"] = "red";
      passInput.style["background-color"] = "#fdb7b7";
    }
  }
});
