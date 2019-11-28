// // #!/usr/bin/env node

// // const addition = (a, b, ...args) => {
// //   console.time("addition");
// //   let sum = a + b;

// //   for (let arg of args) sum += arg;
// //   console.timeEnd("addition");

// //   return sum;
// // };

// // for (i = 0; i < 10; i++) {
// //   addition(2, 2, 4, 6, 8, [4, 6]);
// //   %OptimizeFunctionOnNextCall(addition);
// // }

// //node --allow-natives-syntax -trace_opt -trace_deopt index.js

// let testObject = [
//   {
//     category: "anti-social-behaviour",
//     location_type: "Force",
//     location: {
//       latitude: "53.723429",
//       street: { id: 1286362, name: "On or near Old Market" },
//       longitude: "-1.859855"
//     },
//     context: "",
//     outcome_status: null,
//     persistent_id:
//       "503ecbfe018138bdfa15eadd3c1bf284fc65f2d7668522b9c9cfb3b3755042a4",
//     id: 54272521,
//     location_subtype: "",
//     month: "2017-01"
//   }
// ];

// function mapKeysFromData(data, key) {
//   let keys = data && data.map(item => item[key]);
//   return keys;
// }

// // let test = mapDataFromKey(testObject, "category");

// let test = mapKeysFromData(testObject, "category");

// let count = {};

// test &&
//   test.forEach(function(i) {
//     count[i] = (count[i] || 0) + 1;
//   });

// // Object.entries(count).map(([key, value]) => {});
// console.log(count);

// // let content = Object.entries(count).map((identifier, value) => {
// //   return identifier.toString(), parseInt(value);
// // });

// let content = Object.entries(count).map(([key, value]) => {
//   console.log(key);
//   console.log(count[key]);
// });

// console.log(content);

// console.log(testObject.map(({ category, id }) => [category]));

// let crimeTypes =
//   crimeData && crimeData.map(({ category, id }) => [category, id]);

// let count = {};

// console.log(
//   testObject &&
//     testObject.forEach(function(i) {
//       count[i] = (count[i] || 0) + 1;
//     })
// );

// function solution(A, B, K) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   let i = 0;
//   if (B >= A) {
//     let i = A;
//     let divisable = [];
//     for (i = A; i <= B; i++) {
//       if (i % K) {
//         divisable.push(i);
//       }
//     }
//     return divisable;
//   }
// }

// console.log(solution(6, 11, 2));

// coin flip

let coins = [1, 0, 1, 0, 0, 1];
// even 0 or odd 1
// odd 1 or even 0

// function checkLeft(index, coin, changes, A) {
//   if (coin === A[index - 1]) {
//     if (coin === 0) {
//       A[index - 1] = 1;
//       changes += 1;
//     }
//     if (coin === 1) {
//       A[index - 1] = 0;
//       changes += 1;
//     }
//   }
//   return changes, A;
// }

// function checkRight(index, coin, changes, A) {
//   if (coin === A[index + 1]) {
//     if (coin === 0) {
//       A[index + 1] = 1;
//       changes += 1;
//     }
//     if (coin === 1) {
//       A[index + 1] = 0;
//       changes += 1;
//     }
//   }
//   return changes, A;
// }

// function checkBoth(index, coin, changes, A) {
//   if (coin === A[index + 1] && coin === A[index - 1]) {
//     if (coin === 0) {
//       A[index] = 1;
//       changes += 1;
//     }
//     if (coin === 1) {
//       A[index] = 0;
//       changes += 1;
//     }
//   }
//   return changes, A;
// }

// function flipper(A) {
//   let changes = 0;
//   A.forEach(function(coin, index) {
//     if (index === 0) {
//       result = checkRight(index, coin, changes, A);
//     }
//     if (index > 0 && index < A.length - 1) {
//       result = checkBoth(index, coin, changes, A)[0];
//     }
//     if (index === A.length - 1) {
//       result = checkLeft(index, coin, changes, A)[0];
//     }
//   });
//   return result;
// }

// flipper(coins);
// console.log(flipper(coins));

let test = {
  location:
    '{"coords":{"altitude":0,"altitudeAccuracy":-1,"latitude":37.785834,"accuracy":5,"longitude":-122.406417,"heading":-1,"speed":-1},"timestamp":1574808862520.262}'
};

console.log(test.coords.latitude);
