function	copyAndSortArray(arr)
{
	return (arr.slice().sort());
}

function	main()
{
	//const	arr = [3, 6, 2, 7, 345, -1234, 576, 246, 0];
	const	arr = ["AA", "ZZ", "BB", "AAA", "CC"];
	const	sortedCopy = copyAndSortArray(arr);
	console.log(arr);
	console.log(sortedCopy);
}

main();