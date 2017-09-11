var SandwichBuilder = (function(oldSandwichBuilder) {
	const condiments = [{ingredient: "Mayo", price: 0.50},{ingredient: "Mustard", price: 0.50},{ingredient: "Hot Sauce", price: 0.50}, {ingredient: "Oil and Vinegar", price: 1.00}, {ingredient: "I don't need no stinkin' condiments!", price: 0}];
	const sandwichCondiments = [];

	oldSandwichBuilder.getCondiments = function() {
		return sandwichCondiments;
	};

	oldSandwichBuilder.addCondimentToSandwich = function(event) {
		if (event.target.parentNode.childNodes[9].childNodes[3].checked === true) {
			sandwichCondiments.push(condiments[0]);
		} if (event.target.parentNode.childNodes[9].childNodes[7].checked === true) {
			sandwichCondiments.push(condiments[1]);
		} if (event.target.parentNode.childNodes[9].childNodes[11].checked === true) {
			sandwichCondiments.push(condiments[2]);
		} if (event.target.parentNode.childNodes[9].childNodes[15].checked === true) {
			sandwichCondiments.push(condiments[3]);
		} 
	};

	return oldSandwichBuilder;
})(SandwichBuilder || {});