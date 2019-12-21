let fahrenheitOf = (fahrenheit) => {
	let celcius = (fahrenheit - 32) * 5/9;
	let kelvin = celcius + 273.15;
	return {
		fahrenheit : fahrenheit,
		celcius : celcius,
		kelvin : kelvin
	}
}

console.log(fahrenheitOf(50).celcius);
console.log(fahrenheitOf(50).kelvin);
