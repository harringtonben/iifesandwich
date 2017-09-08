let mySandwich = [];
let submitSandwich = document.getElementById("submit");
submitSandwich.addEventListener("click", function(event) {
	SandwichBuilder.addBreadToSandwich(event);
	SandwichBuilder.addMeatToSandwich(event);
	SandwichBuilder.addCheeseToSandwich(event);
	SandwichBuilder.addVeggieToSandwich(event);
	SandwichBuilder.addCondimentToSandwich(event);
	buildMySandwich(mySandwich);
});

const buildMySandwich = (sandwichStuff) => {
	// console.log(sandwichStuff);
	makeMySandwich(sandwichStuff);
}

const makeMySandwich = (sandwich) => {
	console.log(sandwich);
	let sandwichStrang = `<h1>Here is your order</h1>`;
	let sandwichFinalPrice = 0;
	for (let i=0; i<sandwich.length; i++) {
		// debugger;
		sandwichFinalPrice += sandwich[i].price;
	}

	for (let i=0; i<sandwich.length; i++) {	
		sandwichStrang += `<h4>${sandwich[i].ingredient} $${sandwich[i].price}</h4>`;

	}
	
	let sandwichPriceRounded = parseFloat(sandwichFinalPrice).toFixed(2);

	sandwichStrang += `<h4>Your final price: $${sandwichPriceRounded}</h4>`
	
	document.getElementById("finalsandwich").innerHTML = sandwichStrang;
}



