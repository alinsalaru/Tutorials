function someFunc() {
	function insideFunc(){
		console.log(this);
	}
	insideFunc();
}

function someOtherFunc() {
	function insideFunc(){
		console.log(this);
	}
	this.insideFunc = insideFunc;
}

var x = new someFunc();
var y = new someOtherFunc();