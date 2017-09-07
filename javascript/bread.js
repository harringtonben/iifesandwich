var SandwichBuilder = (function(oldSandwichBuilder) {
	const breads = [{bread: "White Bread", price: 1.99},{ bread: "Wheat Bread", price: 1.99},{meat: "Garlic Bread", price: 2.99}, {meat: "Parmesean Bread", price: 2.99}];
	
	oldSandwichBuilder.getBreads = function() {
		return breads;
	};

	oldSandwichBuilder.addBreadToSandwich = function(event) {
		if (event.target.parentNode.childNodes[1].childNodes[3].checked === true) {
			mySandwich.push(breads[0]);
		} if (event.target.parentNode.childNodes[1].childNodes[7].checked === true) {
			mySandwich.push(breads[1]);
		} if (event.target.parentNode.childNodes[1].childNodes[11].checked === true) {
			mySandwich.push(breads[2]);
		} if (event.target.parentNode.childNodes[1].childNodes[15].checked === true) {
			mySandwich.push(breads[3]);
		} 
	};

	return oldSandwichBuilder;
})(SandwichBuilder || {});