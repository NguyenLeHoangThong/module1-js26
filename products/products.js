const counterValue = document.getElementById("counter-value2");
const increaseBtn = document.getElementById("increase");

counterValue.innerText = localStorage.getItem("counterValue");

let value = localStorage.getItem("counterValue");;


counterValue.addEventListener("click", () => {
    value++;
    counterValue.innerText = value;
    localStorage.setItem("counterValue", value);
})
