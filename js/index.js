let button = document.getElementById("showCode");
let code = document.getElementById("code");

button.addEventListener("click", () => {
    code.classList.toggle("hide");
})