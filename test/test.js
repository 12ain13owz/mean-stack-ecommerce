// let counter = { count: 0 };
// let newCounter = { ...counter };
// let newCounterAgain = counter;

// newCounter.count = 1;
// newCounterAgain.count = 5;

// console.log(counter.count, newCounter.count, newCounterAgain.count);

// 1. clone array
let arr_1 = [{ counter: 0 }, { counter: 1 }, { counter: 2 }];

let arr_2 = structuredClone(arr_1);

arr_2[0].counter = 3;

// console.log(arr_1[0].counter, arr_2[0].counter);

//----------------------------------------------------------------

// 2. binary search
const arr = [];

for (let i = 0; i <= 100; i++) {
  arr.push(i);
}

const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    console.log(low, high, mid);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
};

const result = binarySearch(arr, 75);

console.log(result);
