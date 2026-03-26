function	filterInPlace(arr, a, b)
{
	let	i;

	i = 0;
	while (i < arr.length)
	{
		if (arr[i] < a || arr[i] > b)
			arr.splice(i--, 1); // Move backward to test the new value in place
		i++;
	}
}

function	main()
{
	const	arr = [5, 3, 7, 2, 5, 9, 10 , 1];

	filterInPlace(arr, 1, 6);
	console.log(arr);
	return (0);
}

// Execution
const returnValue = main();
console.log("Return value: " + returnValue);