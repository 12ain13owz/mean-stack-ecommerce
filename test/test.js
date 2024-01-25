// const arr = [
//   { id: 1, name: "foo" },
//   { id: 2, name: "Test" },
//   { id: 3, name: "QWERT" },
// ];

// const q = [...arr];

// console.log(0, arr);

// q.forEach((item) => {
//   item.name = "555";
// });

// console.log(1, arr);
// console.log(2, q);

const arr = [1, 2, 3, 4, 5];
const arr2 = [...arr];

arr2[0] = 5;

console.log(arr, arr2);
