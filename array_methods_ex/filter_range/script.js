// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)

const	filterRange = (arr, min, max) => arr.filter((n) => n >= min && n <= max);

function	main()
{
	const	arr = [5, 3, 8, -1, 2, 3, 10];
	const	filtered = filterRange(arr, 2, 7);
	console.log(arr);
	console.log(filtered);
}

main();