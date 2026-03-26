function	getRandomInteger(min, max)
{
	min = Math.ceil(min);
	max = Math.floor(max);

	return (Math.round(Math.random() * (max - min) + min));
}

function	shuffleArray(arr)
{
	const	arrLength = arr.length;
	const	pickedIndex = getRandomInteger(0, arrLength - 1);
	let		temp;

	if (arrLength === 0 || arrLength === 1)
		return ;
	temp = arr[0];
	arr[0] = arr[pickedIndex];
	arr[pickedIndex] = temp;
}

function	main()
{
	const	arr = [2, 5, 9, 87];
	
	shuffleArray(arr);
	console.log(arr);

	shuffleArray(arr);
	console.log(arr);

	shuffleArray(arr);
	console.log(arr);
	
	return (0);
}

main();