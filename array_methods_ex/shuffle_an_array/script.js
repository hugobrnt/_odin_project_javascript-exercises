function	getRandomInteger(min, max)
{
	//min = Math.ceil(min);
	//max = Math.floor(max);

	return (Math.round(Math.random() * (max - min) + min));
}

function	shuffleArray(arr)
{
	// Fisher-Yates Shuffle Algorithm
	const	arrLength = arr.length;
	let		randomIndex;
	let		temp;
	let		i;

	if (arrLength === 0 || arrLength === 1)
		return ;
	i = arrLength - 1;
	while (i >= 0)
	{
		randomIndex = getRandomInteger(0, arrLength - 1);
		temp = arr[randomIndex];
		arr[randomIndex] = arr[i];
		arr[i] = temp;
		i--;
	}
}

function	testShuffle()
{
	const	round = 1000000;
	let 	count = {
	'123': 0,
	'132': 0,
	'213': 0,
	'231': 0,
	'321': 0,
	'312': 0
	};

	for (let i = 0; i < round; i++) {
	let array = [1, 2, 3];
	shuffleArray(array);
	count[array.join('')]++;
	}

	// show counts of all possible permutations
	for (let key in count) {
		console.log(`${key}: ${Math.trunc(count[key] / round * 100)}%`);
	}
}

function	main()
{
	// const	arr = [1, 2, 3];
	
	// shuffleArray(arr);
	// console.log(arr);

	// shuffleArray(arr);
	// console.log(arr);

	// shuffleArray(arr);
	// console.log(arr);
	testShuffle();
	return (0);
}

main();