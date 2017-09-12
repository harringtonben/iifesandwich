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

let clearSandwich = document.getElementById("clear");
clearSandwich.addEventListener("click", function() {
	SandwichBuilder.clearMySandwich();
})



