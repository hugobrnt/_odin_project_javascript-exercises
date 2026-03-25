
function	capitalizeFirstLetter(string)
{
	return (string.charAt(0).toUpperCase() + string.slice(1));
}

function	camelize(str)
{
	let		i = 0;
	const	camelizedStr = str.split('-')
						.map(capitalizeFirstLetter)
						.join("");

	return (camelizedStr.charAt(0).toLowerCase() + camelizedStr.slice(1));
}

function	main()
{
	console.log('coucou');
	console.log(camelize("coucou-mec-ca-va"));
	console.log(camelize("COUCOU-mec-ca-va"));	
	console.log(camelize("--coucou-mec-ca-va--"));
}

main();