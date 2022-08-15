let plnElement = document.querySelector(".js-PLN");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = plnElement.value;
    let currency = currencyElement.value;

    let result = amount / currency;

    resultElement.innerText = result.toFixed(2);
});