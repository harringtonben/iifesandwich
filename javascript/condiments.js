var SandwichBuilder = (function(oldSandwichBuilder) {
	const condiments = [{ingredient: "Mayo", price: 0.50},{ingredient: "Mustard", price: 0.50},{ingredient: "Hot Sauce", price: 0.50}, {ingredient: "Oil and Vinegar", price: 1.00}, {ingredient: "I don't need no stinkin' condiments!", price: 0}];
	oldSandwichBuilder.getCondiments = function() {
		return condiments;
	};

	oldSandwichBuilder.addCondimentToSandwich = function(event) {
		if (event.target.parentNode.childNodes[9].childNodes[3].checked === true) {
			mySandwich.push(condiments[0]);
		} if (event.target.parentNode.childNodes[9].childNodes[7].checked === true) {
			mySandwich.push(condiments[1]);
		} if (event.target.parentNode.childNodes[9].childNodes[11].checked === true) {
			mySandwich.push(condiments[2]);
		} if (event.target.parentNode.childNodes[9].childNodes[15].checked === true) {
			mySandwich.push(condiments[3]);
		} 
	};

	return oldSandwichBuilder;
})(SandwichBuilder || {});