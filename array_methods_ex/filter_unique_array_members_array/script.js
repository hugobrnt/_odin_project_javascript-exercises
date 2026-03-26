function	filterUniqueMembers(arr)
{
	return (
		arr.filter((item, i, arr) => {
			let	j = 0;
		
			while (j < arr.length)
			{
				if (arr[j] === item && j != i)
					return (false);
				j++;
			}
			return (true);
		})
	);
}

function	removeDuplicate(arr)
{
	let	result = [];

	for(let str of arr)
	{
		if (!result.includes(str))
			result.push(str);
	}
	return (result);
}

function	main()
{
	const	arr = ["hello", "hello", "mec", "yo", "oui", "oui"];

	console.log(arr);
	console.log(filterUniqueMembers(arr));
	console.log(removeDuplicate(arr));

	return (0);
}

main();