var SandwichBuilder = (function(oldSandwichBuilder) {
	const meats = [{meat: "Turkey", price: 2.99},{ meat: "Ham", price: 2.99},{meat: "Roast Beef", price: 3.99}, 	{meat: "Tuna Salad", price: 2.99}, {meat:"I'm an L7 weenie and don't eat meat", price: 0}];
	
	oldSandwichBuilder.getMeats = function() {
		return meats;
	};

	oldSandwichBuilder.addMeatToSandwich = function(event) {
		if (event.target.parentNode.childNodes[3].childNodes[3].checked === true) {
			mySandwich.push(meats[0]);
		} if (event.target.parentNode.childNodes[3].childNodes[7].checked === true) {
			mySandwich.push(meats[1]);
		} if (event.target.parentNode.childNodes[3].childNodes[11].checked === true) {
			mySandwich.push(meats[2]);
		} if (event.target.parentNode.childNodes[3].childNodes[15].checked === true) {
			mySandwich.push(meats[3]);
		} if (event.target.parentNode.childNodes[3].childNodes[19].checked === true) {
			mySandwich.push(meats[4])
		}
	};

	return oldSandwichBuilder;
})(SandwichBuilder || {});