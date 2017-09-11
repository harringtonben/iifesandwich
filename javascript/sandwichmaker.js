// let mySandwich = [];
let submitSandwich = document.getElementById("submit");
submitSandwich.addEventListener("click", function(event) {
	SandwichBuilder.addBreadToSandwich(event);
	SandwichBuilder.addMeatToSandwich(event);
	SandwichBuilder.addCheeseToSandwich(event);
	SandwichBuilder.addVeggieToSandwich(event);
	SandwichBuilder.addCondimentToSandwich(event);
	SandwichBuilder.buildMySandwich();
});





