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
		const resultElement = document.querySelector(".js-result") as HTMLSpanElement;
		resultElement.innerText = `${result.toFixed(2)} ${currency}`;
	};

	const onFormSubmit = (event: Event) => {
		event.preventDefault();
		const plnElement = document.querySelector(".js-PLN") as HTMLInputElement;
		const currencyElement = document.querySelector(".js-currency") as HTMLSelectElement;
		const amount = Number(plnElement.value);
		const currency = currencyElement.value;
		const result = calculateResult(amount, currency) as number;
		changeResultText(amount, currency, result);
	};

	const init = () => {
		const formElement = document.querySelector(".js-form") as HTMLFormElement;
		formElement.addEventListener("submit", onFormSubmit);
		helloWorld();
	};
	init();
}