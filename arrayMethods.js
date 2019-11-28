var array = ["hello", "horse", "man", "george", "brad", "six", "1", 4];
var array2 = ["twelve", "hen", "fifty"];

console.log("Array original", array);

// Concat: sticks two arrays together.
var concat = array.concat(array2);

console.log("concat", concat);

// Constructor: returns constructor object

var constructor = array.constructor;

console.log("constructor", constructor);

// CopyWithin: copies elements to anothor position.

var copyWithin = array.copyWithin(2, 0);

console.log("copyWithin", copyWithin);

// This overwrites the first two after the target index
// copyWithin(target, start, end) :: target = 2 onwards, copying from 0 onwards

// Entries: returns key value pairs [index, value] of an array:

var entries = array.entries();

console.log(entries);

for (x of entries) {
  console.log(x);
}

// Every: can have it run a function for each element of an array
// or you can have it run a check for each element of an array.

function checkContainsHello(element) {
  var regex = new RegExp(/hello/g);
  if (element.match(regex) !== null) {
    return element.match(regex).toString();
  } else {
    return false;
  }
}

var every = array.every(checkContainsHello);

console.log(every);
// Returns false, as every array doesn't contain "hello".

// Fill: fills the array with a certain element with a (value, start, end)

var fill = array.fill(0, 1, 3);
// from between [1] and [3]
console.log(fill);

// Filter: Filters through the array:

var filter = array.filter(function(element) {
  return element.length > 3;
});

console.log(filter);

// Filtering when length > 3 for each.

var find = array.find(element => {
  return element.length;
});
