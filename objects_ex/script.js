
// 1. Map to names

function	map_to_names()
{
	let	john = { name: "John", age: 25 };
	let	pete = { name: "Pete", age: 30 };
	let	mary = { name: "Mary", age: 28 };

	let	users = [ john, pete, mary ];

	let names = users.map(user => ` ${user.name}`);
	alert( names );
}
//map_to_names();

// 2. Map to objects

function	map_to_objects()
{
	let john = { name: "John", surname: "Smith", id: 1 };
	let pete = { name: "Pete", surname: "Hunt", id: 2 };
	let mary = { name: "Mary", surname: "Key", id: 3 };

	let users = [ john, pete, mary ];

	let usersMapped = users.map(user => 
	(
		{
			id: user.id,
			fullName: user.name + " " + user.surname
		}
	));

	alert( usersMapped[0].id ) // 1
	alert( usersMapped[0].fullName ) // John Smith
}

//map_to_objects();

// 3. Sort users by age

function	sortByAge(arr)
{
	arr.sort((a, b) => a.age - b.age);
}

function	sort_users_by_age()
{
	let john = { name: "John", age: 225 };
	let pete = { name: "Pete", age: 30 };
	let mary = { name: "Mary", age: 28 };

	let arr = [ pete, john, mary ];

	sortByAge(arr);

	// now: [john, mary, pete]
	alert(arr[0].name); // John
	alert(arr[1].name); // Mary
	alert(arr[2].name); // Pete
}

//sort_users_by_age();

// 4. Get average age

function	getAverageAge(users)
{

	const	length = users.length;
	const	ageSum = users.reduce((prev, curr) => {
		return (prev + curr.age);
	}, 0);
	console.log(`l: ${length}\nageSum: ${ageSum}`);
	return (ageSum / length);
}

function	get_average_age()
{
	let john = { name: "John", age: 25 };
	let pete = { name: "Pete", age: 300 };
	let mary = { name: "Mary", age: 29 };

	let arr = [ john, pete, mary ];

	alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
}

//get_average_age();

// 5. Createkeyed object from array

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}

function	create_keyed_object_from_array()
{
	let	users = [
		{id: 'john', name: "John Smith", age: 20},
		{id: 'ann', name: "Ann Smith", age: 20},
		{id: 'pete', name: "Pete Peterson", age: 20},
	];

	let	usersById = groupById(users);
	console.log(usersById);
	console.log(usersById[0]);
}

create_keyed_object_from_array();