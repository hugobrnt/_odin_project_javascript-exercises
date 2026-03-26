const repeatString = function(string, num) {
	let	result;

	if (num < 0)
		return ("Error");
	result = "";
	while (num > 0)
	{
		result += string;
		num--;
	}
	return (result);
};

console.log(repeatString("Coucou", 5));
// Do not edit below this line
module.exports = repeatString;
