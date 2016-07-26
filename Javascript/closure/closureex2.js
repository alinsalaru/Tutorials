function foo() {
	var bar="bar";
	return function() {
		baz(bar);
	}
}

function baz(argument) {
	console.log(argument);
}

foo()();