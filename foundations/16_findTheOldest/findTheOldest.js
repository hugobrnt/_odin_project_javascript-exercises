const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
	  {
        name: "Joe",
        yearOfBirth: 1999,
      },
    ];

const	getAge = function(person)
{
	const	date = new Date();
	const	currentYear =  date.getFullYear();
	const	yearOfDeath = person?.yearOfDeath;
	const	yearOfBirth = person?.yearOfBirth;

	if (yearOfBirth === undefined && yearOfDeath === undefined)
		return (0);
	if (yearOfDeath === undefined)
	{
		// console.log(currentYear - yearOfBirth);
		return (currentYear - yearOfBirth);
	}
	else
	{
		// console.log(yearOfDeath - yearOfBirth);
		return (yearOfDeath - yearOfBirth);
	}
}

const findTheOldest = function(people) {
	return (people.reduce((prev, person) => {
		const	age = getAge(person);
		console.log(age);
		if (age > getAge(prev))
			return (person);
	}, {}))
};

console.log(findTheOldest(people));

// // Do not edit below this line
// module.exports = findTheOldest;
