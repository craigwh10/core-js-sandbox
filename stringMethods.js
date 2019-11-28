const test = "dfkflsdkfdsfjkfjhellodfksfjlkdjfkddmfdmds";

var regex = new RegExp(/hello/g);

var regexTest = test.match(regex);

console.log(regexTest);

// Returns null if no match, and the string in an array if match.

var splitted = test.split("d", 3);

console.log(splitted);

var sliced = test.slice(3);

// a, b: sets the range to slice between, or if is 3 it returns all after position 3

console.log(sliced);

// Returns the array after position 3.

var startsWith = test.startsWith("dfk");

console.log(startsWith);

// Returns bool if the string starts with a certain thing.

var lastOccurence = test.lastIndexOf("hello");

console.log(lastOccurence);

// Returns the start index of the last occurence of the string in question.
