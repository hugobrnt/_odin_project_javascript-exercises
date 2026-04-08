const fibonacci = function(index) {
	let	result;

	if (index < 0)
		return ("error");
	if (index === 0 || index == 1)
		return (1);
	result = fibonacci(index - 1) + fibonacci(index - 2);
	return (result);
};

console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(7));
console.log(fibonacci(1));
console.log(fibonacci(0));
console.log(fibonacci(-3));
console.log(fibonacci(10));





// // Do not edit below this line
// module.exports = fibonacci;
