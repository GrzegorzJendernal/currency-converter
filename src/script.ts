{
    const helloWorld = () => {
        console.log("Hej! Życzę miłego przeglądania kodu :)");
    };

    const calculateResult = (amount: number, currency: string) => {
        const EUR = 4.7021;
        const USD = 4.5919;
        const COP = 0.0011;
        switch (currency) {
            case "EUR":
                return amount / EUR;
            case "USD":
                return amount / USD;
            case "COP":
                return amount / COP;
        }
    };

    const changeResultText = (amount: number, currency: string, result: number) => {
        const resultElement = <HTMLSpanElement>document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event: Event) => {
        event.preventDefault();
        const plnElement = <HTMLInputElement>document.querySelector(".js-PLN");
        const currencyElement = <HTMLSelectElement>document.querySelector(".js-currency");
        const amount = Number(plnElement.value);
        const currency = currencyElement.value;
        const result = <number>calculateResult(amount, currency);
        changeResultText(amount, currency, result);
    };

    const init = () => {
        const formElement = <HTMLFormElement>document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
        helloWorld();
    };
    init();
}