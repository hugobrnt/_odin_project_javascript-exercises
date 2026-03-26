function	sortInDecreasingOrder(arr)
{
	return (arr.sort((a, b) => b - a));
}

function	main()
{
	const	arr = [2, 3, 4, 4, 56, -12, 0];

	sortInDecreasingOrder(arr);
	console.log(arr);
	return (0);
}

main();
console.log("Hello");