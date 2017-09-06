console.log('sandwichmaker');

let submitSandwich = document.getElementById("submit");
submitSandwich.addEventListener("click", function(event) {
	SandwichBuilder.addToSandwich(event);
})