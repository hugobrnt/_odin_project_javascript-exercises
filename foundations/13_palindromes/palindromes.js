const palindromes = function (s) {
	let	i;

	i = 0;
	while (s[i] === s[s.length - i - 1] && i < (s.length - 1) / 2)
		i++;
	console.log(i);
	if (i === (s.length - 1) / 2)
		return (true);
	return (false);
};

console.log(palindromes("racecar"));
console.log(palindromes("kayak"));
console.log(palindromes("kouik"));
console.log(palindromes("coucou"));


// Do not edit below this line
// module.exports = palindromes;
