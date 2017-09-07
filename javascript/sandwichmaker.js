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
	console.log(sandwichStuff);
}




