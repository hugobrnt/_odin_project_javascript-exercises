const leapYears = function(year) {
	if (!Number.isInteger(year))
		return (`Error, ${year} is not an integer`);
	if (year % 4 === 0
		&& !(year % 100 === 0
			&& year % 400 != 0))
		return (true);
	return (false);
};

console.log("2000: " + leapYears(2000));
console.log("1948: " + leapYears(1948));
console.log("1999: " + leapYears(1999));
console.log("1800: " + leapYears(1800));
console.log("1996: " + leapYears(1996));
console.log("text: " + leapYears("text"));

// Do not edit below this line
module.exports = leapYears;
