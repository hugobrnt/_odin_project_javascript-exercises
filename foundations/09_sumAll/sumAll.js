const sumAll = function(a, b) {
	let	sum;
	let	start;
	let	end;

	if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
	sum = 0;
	min = a < b ? a : b;
	max = a > b ? a : b;
	console.log(`min: ${min}\nmax: ${max}`);
	while (min < max)
	{
		if (min != max)
			console.log(`${min} + `);
		else
			console.log(`${min} `);
		sum += min++;
	}
	console.log(`= ${sum}`);
	return (sum);
};

console.log(sumAll(1, 5));
console.log(sumAll(5, -3));
console.log(sumAll(0, 0));
console.log(sumAll("coucou", 0));

// Do not edit below this line
module.exports = sumAll;
