const arr = [
  0, 3, 2, 5, 6, 8, 1, 9, 3, 8, 6, 4, 32, 6, 8, 3, 67, 34, 26, -1, -2, -13, 76,
];

let count = 0;

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    count++;
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
    }
    let tmp = arr[i];
    arr[i] = arr[indexMin];
    arr[indexMin] = tmp;
  }
  return arr;
}

console.log(selectionSort(arr));
console.log(`count = ${count}`);
