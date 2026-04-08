const	arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(arr) {
	let	sum;

	sum = arr.reduce((sum, nb) => sum += nb, 0);
	return (sum);
};

const multiply = function(arr) {
	let	mul;

	mul = arr.reduce((mul, nb) => mul *= nb, 1);
	return (mul);
};

const power = function(base, exponent) {
	let	result;

	if (exponent < 0)
		return ("error");
	if (exponent === 0)
		return (1);
	result = base * power(base, exponent - 1);
	return (result);
};

const factorial = function(n) {
	
	let	result;

	if (n < 0)
		return ("error");
	else if (n <= 1)
		return (1);
	result =  n * factorial (n - 1);
	return (result); 
};

console.log(`add: ${add(2, 6)}`);
console.log(`substract: ${subtract(2, 6)}`);
console.log(`sum: ${sum([1, 2, -3])}`);
console.log(`multiply: ${multiply([1, 2, 3, 4, 5])}`);
console.log(`power: ${power(2, 6)}`);
console.log(`factorial: ${factorial(5)}`);
// Do not edit below this line
// module.exports = {
//   add,
//   subtract,
//   sum,
//   multiply,
//   power,
//   factorial
// };
