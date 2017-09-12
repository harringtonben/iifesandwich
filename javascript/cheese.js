var SandwichBuilder = (function(oldSandwichBuilder) {
	const cheeses = [{ingredient: "American", price: 0.99},{ingredient: "Swiss", price: 1.99},{ingredient: "Provolone", price: 1.99}, {ingredient: "I can't eat cheese...it makes me poop", price: 0}];
	let sandwichCheeses = [];

	oldSandwichBuilder.getCheeses = function() {
		return sandwichCheeses;
	};

	oldSandwichBuilder.addCheeseToSandwich = function(event) {
		if (event.target.parentNode.childNodes[5].childNodes[3].checked === true) {
			sandwichCheeses.push(cheeses[0]);
		} if (event.target.parentNode.childNodes[5].childNodes[7].checked === true) {
			sandwichCheeses.push(cheeses[1]);
		} if (event.target.parentNode.childNodes[5].childNodes[11].checked === true) {
			sandwichCheeses.push(cheeses[2]);
		} if (event.target.parentNode.childNodes[5].childNodes[15].checked === true) {
			sandwichCheeses.push(cheeses[3]);
		} 
	};

	oldSandwichBuilder.resetSandwichCheeses = function() {
		sandwichCheeses = [];
	}

	return oldSandwichBuilder;
})(SandwichBuilder || {});