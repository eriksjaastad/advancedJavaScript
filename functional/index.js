//functional prorgamming

//function declaration, is hoisted to the top so you can use if before declaring it
function x(y) {

};

//function expression, not hoisted
var f = function(y) {
	var x = y;
	x += 12;
	return x;
};

var x = f(1); // x == 13


var g = function(fn) {
	var result = fn(1);
	console.log(result);
};


var fibonacci = [1, 1, 2, 3, 5, 8];
fibonaccii.forEach(function(item) {
	console.log(item * 2);
});


fibonacci.sort(function(a, b) {
	if(a < b) return 1;
	if(b < a) return -1;
	return 0;
});


var adder = function(first) {
	return function(second) {
		return first + second;
	}
};

var add5 = adder(5);
add5(10); //15
console.log("add + 10", result);


//@param list An array to be processed
//@param f A function called on each item
var each = function(list, f) {
	//loop through list
	for(var i = 0; i < list.length; i++) {
		//f is passed an item and its index
		var item = list[i];
		f(item, i);
	}
};

var names = ['name1', 'name2', 'name3'];
var greet = function(name, index) {
	console.log("hello, " + name + "(#" + index ")");
};
each(names, greet);






