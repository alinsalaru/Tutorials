//working with arrow functions
var adderes5 = {
  // the problem here is that the this binds to the window
  base : 1,
  
  add : function(a) {
    var f = function(v) {
    v= v + this.base;
    return v;
    }
	return f(a);
  }
};

console.log(adderes5.add(2));

var adder = {
  // here we get rid of 'object method'
  base : 1,
    
  add : function(a) {
    var f = v => v + this.base;
    return f(a);
  }
}

console.log(adder.add(2));

// (bar => ({foo: bar}))(2)
// es6 arrows:
//  - shorter syntax
//  - lexical this