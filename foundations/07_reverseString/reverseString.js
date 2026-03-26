const reverseString = function(string) {
	const	strArr = string.split("");
	const	strLen = strArr.length;
	let		i = 0;
	let		j = strLen - 1;
	let		temp;

	console.log(strArr);
	//debugger;
	while (i < strLen / 2)
	{
		temp = strArr[i];
		strArr[i] = strArr[j];
		strArr[j] = temp;
		j--;
		i++;
	}
	console.log(strArr);
	return (strArr.join(""));
};

function	main()
{
	const	str = "Coucou mec";

	console.log(str);
	console.log(reverseString(str));
	return (0);
}

main();

// Do not edit below this line
module.exports = reverseString;
