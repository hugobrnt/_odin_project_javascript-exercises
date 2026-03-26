const removeFromArray = function(arr, ...args) {
	const	result = [];
	let		i;

	if (arr === undefined)
		return ;
	if (args === undefined)
		return (arr);

	arr.forEach((item) => {
		if (!args.includes(item))
			result.push(item);
	});
	return (result);
};

function	main()
{
	console.log(removeFromArray([1, 2, 3, 5, 44, 3], 3, 2));
	return (0);
}
main();
// Do not edit below this line
module.exports = removeFromArray;
