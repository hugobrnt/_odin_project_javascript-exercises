const	displayAlert = function(){
	alert('You clicked AGAIN!');
}

const	main = function(){
	const	btn2 = document.getElementById("btn2");
	btn2.addEventListener("click", (e) => {
		e.target.style["border"] = "2px dotted red";
		console.log(e);
	});
	const	btn = document.getElementById("btn");
	btn.onclick = displayAlert;
	return (0);
}

main();