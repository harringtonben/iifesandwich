var SandwichBuilder = (function(oldSandwichBuilder) {
	const cheeses = [{cheese: "American", price: 0.99},{ cheese: "Swiss", price: 1.99},{cheese: "Provolone", price: 1.99}, {cheese: "I can't eat cheese...it makes me poop", price: 0}];

	oldSandwichBuilder.getCheeses = function() {
		return cheeses;
	};

	oldSandwichBuilder.addCheeseToSandwich = function(event) {
		if (event.target.parentNode.childNodes[5].childNodes[3].checked === true) {
			mySandwich.push(cheeses[0]);
		} if (event.target.parentNode.childNodes[5].childNodes[7].checked === true) {
			mySandwich.push(cheeses[1]);
		} if (event.target.parentNode.childNodes[5].childNodes[11].checked === true) {
			mySandwich.push(cheeses[2]);
		} if (event.target.parentNode.childNodes[5].childNodes[15].checked === true) {
			mySandwich.push(cheeses[3]);
		} 
	};

	return oldSandwichBuilder;
})(SandwichBuilder || {});