// Write a function that sums up the triple of each even number of an array.

// Using the .map method

function sumOfTripleEvensWithMap(arr)
{
	let		i = 0;
	let		sum = 0;
	const	tripleEvensArr = arr.map((item => {
		if (item % 2 === 0)
			return (item * 3);
	}))

	while (i < tripleEvensArr.length)
	{
		if  (tripleEvensArr[i] != undefined)
			sum += tripleEvensArr[i];
		i++;
	}
	return (sum);
}

// Using the .filter method
function sumOfTripleEvensWithFilter(arr)
{
	let		i = 0;
	let		sum = 0;
	const	tripleEvensArr = arr.filter((item) => (item % 2 === 0));

	console.log(tripleEvensArr);
	while (i < tripleEvensArr.length)
	{
			sum += tripleEvensArr[i] * 3;
		i++;
	}
	return (sum);
}

// Using the .reduce method
function sumOfTripleEvensWithReduce(arr)
{
	const	tripleEvensSum = arr.reduce((sum, item) => {
		if (item % 2 === 0)
			return (sum + item * 3);
		return (sum);
	}, 0);

	console.log(tripleEvensSum);
	return (tripleEvensSum);
}

function	main()
{
	const	arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	console.log(arr);
	console.log(sumOfTripleEvensWithMap(arr));
	console.log(sumOfTripleEvensWithFilter(arr));
	console.log(sumOfTripleEvensWithReduce(arr));
}

// Execution
main();