// q2 [Set operands]

let set1 = new Set();

set1.add(42);

const iterator1 = set1.values();

// Returns 42 for

console.log(iterator1.next().value);

// ========================================================================================================================================

// q3 [Short circuit operators]

function q2() {
  false || console.log("hello");
}

// NOTE: short circuiting exists for && and ||, where || runs the function if the LHS is falsy.

q2();

// ========================================================================================================================================

// q4 [A function which invokes immediatley]

(function() {
  console.log("runs immediatly");
})();

// ========================================================================================================================================

// q5 [RegExp]

// RegExp has been in JS, not just ECMA, can be initiated with using new RegExp('^\d+$'); or as /^\d+$/

// ========================================================================================================================================

// q6 [Assigning context to an object using a function]:

function greet() {
  var reply = this.animal;
}

var obj = {
  animal: "cats"
};

greet.call(obj);

// Replaces the reply with animal: 'cats' as an object.

greet();

// ========================================================================================================================================

// q7 [Short circuiting chains]

let q7 = false || true || false;

console.log(q7);

// The chain will break once the first truthy argument it reached, then it returns true.

// ========================================================================================================================================

// q9 [Creating a dom element]

//var myNewListElement = document.createElement("li");

// ========================================================================================================================================

// q11 [InstanceOf]

// To see if X is one of a given class:

class SomeClass {}

let x = new SomeClass();

// you do:

console.log(x instanceof SomeClass); // Returns true.

// ========================================================================================================================================

// q12 [Passing a function as an argument in a function being invoked]

//getScore(latestScore());

// ========================================================================================================================================

// q13 [Bar is a constructor function, and Bar prototype must inherit the prototype of another object, but must display something different when foo is invoked]

// Bar.prototype.foo = function = function() { //new foo() body}

// ========================================================================================================================================

// q15 [Binding a prototype]

// Using a Function.prototype.bind method:

// func.bind(this)

// ========================================================================================================================================

// q16 [Reducer]

const reducer = (accumalator, currentValue) => accumalator + currentValue;

console.log([1, 2, 3].reduce(reducer));

console.log([1, 2, 3, 4].reduce(reducer));
