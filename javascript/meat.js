var SandwichBuilder = (function(oldSandwichBuilder) {
	const meats = [{ingredient: "Turkey", price: 2.99},{ingredient: "Ham", price: 2.99},{ingredient: "Roast Beef", price: 3.99}, {ingredient: "Tuna Salad", price: 2.99}, {ingredient:"I'm an L7 weenie and don't eat meat", price: 0}];
	const sandwichMeats = [];

	oldSandwichBuilder.getMeats = function() {
		return sandwichMeats;
	};

	oldSandwichBuilder.addMeatToSandwich = function(event) {
		if (event.target.parentNode.childNodes[3].childNodes[3].checked === true) {
			sandwichMeats.push(meats[0]);
		} if (event.target.parentNode.childNodes[3].childNodes[7].checked === true) {
			sandwichMeats.push(meats[1]);
		} if (event.target.parentNode.childNodes[3].childNodes[11].checked === true) {
			sandwichMeats.push(meats[2]);
		} if (event.target.parentNode.childNodes[3].childNodes[15].checked === true) {
			sandwichMeats.push(meats[3]);
		} if (event.target.parentNode.childNodes[3].childNodes[19].checked === true) {
			sandwichMeats.push(meats[4])
		}
	};

	return oldSandwichBuilder;
})(SandwichBuilder || {});