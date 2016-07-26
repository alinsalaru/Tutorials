function globalFunc() {
	var a = "a";

	function innerFunc(outerFunc){
		outerFunc(a);
	}

	innerFunc(outerFunc);

}

function outerFunc(a){
	console.log(a);
}

globalFunc();

