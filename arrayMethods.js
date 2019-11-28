var array = ["hello", "horse", "man", "george", "brad", "six", "1", 4];
var array2 = ["twelve", "hen", "fifty"];
var arrayNums = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 23, 23, 6, 55, 532, 21, 2];

console.log("Array original", array);

/// Concat: sticks two arrays together.
var concat = array.concat(array2);

console.log("concat", concat);

/// Constructor: returns constructor object

var constructor = array.constructor;

console.log("constructor", constructor);

/// CopyWithin: copies elements to anothor position.

var copyWithin = array.copyWithin(2, 0);

console.log("copyWithin", copyWithin);

// This overwrites the first two after the target index
// copyWithin(target, start, end) :: target = 2 onwards, copying from 0 onwards

/// Entries: returns key value pairs [index, value] of an array:

var entries = array.entries();

console.log(entries);

for (x of entries) {
  console.log(x);
}

/// Every: can have it run a function for each element of an array
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

/// Fill: fills the array with a certain element with a (value, start, end)

var fill = array.fill(0, 1, 3);
// from between [1] and [3]
console.log(fill);

/// Filter: Filters through the array:

var filter = array.filter(function(element) {
  return element.length > 3;
});

console.log(filter);

// Filtering when length > 3 for each.

function findNums(element) {
  return element > 3;
}

var find = arrayNums.find(findNums);
console.log(arrayNums);
console.log(find);

// First element that is > 3 is returned.

/// findIndex: finds the index of the element that matches the find.

var findIndex = arrayNums.findIndex(findNums);

console.log(findIndex);

/// forEach: run a function on each element of the array:

let a = arrayNums.forEach(multiplyBy2);

function multiplyBy2(element, index, arr) {
  arr[index] = element * 10;
}

console.log(a);

/// From: Creating an array from a string:

var myArr = Array.from("HIOHIO LSOSOS");
// Seperated by character.
console.log(myArr);

/// Includes: Checking if an array contains something:

var n = array.includes("hello");
// CASE SENSITIVE
console.log(n);

var indOf = array.indexOf("hello");

console.log(indOf);

/// Join: joining an array by a seperator defined, default is ","
var join = array.join(" ");

console.log(join);

/// Keys: Turns an array into a key value pair iterator.

var keys = array.keys();

for (x of keys) {
  console.log(x);
}

console.log(keys);

/// Map: Makes a new array from an iterated function.

var mapped = arrayNums.map(num => num * 2);

console.log(mapped);

/// Pop: Removes the last element of an array.
/// Shift: removes the first element of an array.

var popped = arrayNums.pop();

console.log(popped);

/// Prototype: Define a new function for types.

Array.prototype.UpperCase = function() {
  return this.map(element => element * 20);
};

arrayNums.UpperCase();

console.log(arrayNums);

/// Push: add to end of an array

arrayNums.push(2);

console.log("pushed", arrayNums);

/// Reduce: starting from the beginning:
/// ReduceRight : starts from the end.

const adder = (num, total) => total + num;

let adde = arrayNums.reduce(adder);

console.log("reduced", adde);

/// Reverse: reverse the order of an array

var reversed = arrayNums.reverse();

console.log("reversed", reversed);

/// Slice: selects items from an array in a range.

var sliced = arrayNums.slice(0, 3);

console.log("sliced", sliced);

/// Some: Checks if ANY values in an array meet requirements.

const overCheck = elem => elem > 20;

var over20 = arrayNums.some(overCheck);

console.log("any over 20?", over20);

/// Sort: sorts by alphabetical order, numerical is screwy but can be sorted with
// compare function.

var inOrder = array.sort();

console.log(inOrder); // strings

var inReverseOrder = array.reverse();

console.log("reversed", inReverseOrder);

const numOrder = (elem, elem2) => elem2 - elem;

// elem2 - elem for descending
// elem - elem2 for ascending

var numInOrder = arrayNums.sort(numOrder);

console.log(numInOrder);

/// Splice:

var spliced = array.splice(2, 2, "hi", "yo");
console.log("normal", array);
console.log("spliced", spliced);

// takes the element out beginning from position 2, and returns it
// and adds the items after, including hi and yo.

/// Unshift: adds an element to beginning of array:

var unshifted = array.unshift("hi", "eads");

console.log(unshifted);

// and returns the length of the array afterwards.
// adding to the end use PUSH
