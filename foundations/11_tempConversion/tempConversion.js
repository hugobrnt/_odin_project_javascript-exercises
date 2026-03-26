const	roundTo = function(num, precision){
	const	floatNumber = Number.parseFloat(num);;
	const	factor = Math.pow(10, precision);

	if (Number.isNaN(floatNumber)
		|| !Number.isInteger(precision))
		return ("Error");
	return (Math.round(floatNumber * factor) / factor);
};

const	convertToCelsius = function(tempInFahrenheit) {
	if (!Number.isInteger(tempInFahrenheit)
		&& Number.isNaN(Number.parseFloat(tempInFahrenheit)))
		return ("Error");
	return (roundTo(tempInFahrenheit -= 32, 1));
};

const	convertToFahrenheit = function(tempInCelsius) {
	if (!Number.isInteger(tempInCelsius)
		&& Number.isNaN(Number.parseFloat(tempInCelsius)))
		return ("Error");
	return (roundTo(tempInCelsius += 32, 1));
};

function	main()
{
	const	celsius = parseFloat(prompt("Celsius temp:"));
	const	fahrenheit = parseFloat(prompt("Fahrenheit temp: "));

	console.log(`${celsius} celsius is ${convertToCelsius(celsius)} in fahrenheit`);
	console.log(`${fahrenheit} fahrenheit is ${convertToFahrenheit(fahrenheit)} in celsius`);
	return (0);
}

main();
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
