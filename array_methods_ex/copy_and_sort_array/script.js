function	copyAndSortArray(arr)
{
	return (arr.toSorted((a, b) => a - b));
}

function	main()
{
	const	arr = [3, 6, 2, 7, 345, -1234, 576, 246, 0];
	const	sortedCopy = copyAndSortArray(arr);
	console.log(arr);
	console.log(sortedCopy);
}

main();