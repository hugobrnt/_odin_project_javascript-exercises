function	main()
{
	const	body = document.querySelector("body");
	const	container = document.querySelector("#container");

	const	para = document.createElement("p");
	para.textContent = "Hey, I'm red!";
	para.style.color = "red";
	container.appendChild(para);

	const	title = document.createElement("h3");
	title.textContent = "I'm a blue h3!";
	title.style["color"] = "blue";
	container.insertBefore(title, container.firstElementChild);

	const	newDiv = document.createElement("div");
	newDiv.setAttribute("style", "border: 1px solid black; background-color: pink;");
	const	newTitle = document.createElement("h1");
	newTitle.textContent= "I'm in a div";
	newDiv.appendChild(newTitle);
	const	newPara = document.createElement("p");
	newPara.textContent= "Me too!";
	newDiv.appendChild(newPara);

	body.appendChild(newDiv);
}

main();


    // a <p> with red text that says “Hey I’m red!”
    // an <h3> with blue text that says “I’m a blue h3!”
    // a <div> with a black border and pink background color with the following elements inside of it:
    //     another <h1> that says “I’m in a div”
    //     a <p> that says “ME TOO!”
    //     Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
