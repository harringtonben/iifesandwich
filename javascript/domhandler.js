var SandwichBuilder = (function(oldSandwichBuilder) {
	let mySandwich = [];

	oldSandwichBuilder.buildMySandwich = (sandwichStuff) => {
	let sammyBreads = SandwichBuilder.getBreads();
	let sammyMeats = SandwichBuilder.getMeats();
	let sammyCheeses = SandwichBuilder.getCheeses();
	let sammyVeggies = SandwichBuilder.getVeggies();
	let sammyCondiments = SandwichBuilder.getCondiments();
	

	let sandwichBuild = mySandwich.concat(sammyBreads, sammyMeats, sammyCheeses, sammyVeggies, sammyCondiments);
	// console.log("my sandwich", sandwichBuild);
	SandwichBuilder.makeMySandwich(sandwichBuild);
}

	oldSandwichBuilder.makeMySandwich = (sandwich) => {
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


	oldSandwichBuilder.clearMySandwich = () => {
		document.getElementById("finalsandwich").innerHTML = ``;
		mySandwich = [];
		console.log(mySandwich);
	}

	return oldSandwichBuilder;
})(SandwichBuilder || {});