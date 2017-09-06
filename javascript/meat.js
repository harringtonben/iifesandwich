console.log('meat');

var SandwichBuilder = (function(oldSandwichBuilder) {
	const meats = ["Turkey", "Ham", "Roast Beef", "Tuna Salad", "I'm an L7 weenie and don't eat meat"];
	let mySandwich = [];
	
	oldSandwichBuilder.getMeats = function() {
		return meats;
	};

	oldSandwichBuilder.addToSandwich = function(event) {
		console.log(event);
		console.log(event.target.parentNode.children.meat.childNodes[3].checked);
		console.log(event.target.parentNode.children.meat.childNodes[7].checked);
		console.log(event.target.parentNode.children.meat.childNodes[11].checked);
		console.log(event.target.parentNode.children.meat.childNodes[15].checked);
		console.log(event.target.parentNode.children.meat.childNodes[19].checked);
		console.log(event.target.parentNode.children.meat.childNodes[3].name);
		console.log(event.target.parentNode.children.meat.childNodes[7].name);
		console.log(event.target.parentNode.children.meat.childNodes[11].name);
		console.log(event.target.parentNode.children.meat.childNodes[15].name);
		console.log(event.target.parentNode.children.meat.childNodes[19].name);
	
	};

	return oldSandwichBuilder;
})(SandwichBuilder || {});