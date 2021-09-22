const arr = [
  0, 3, 2, 5, 6, 8, 1, 9, 3, 8, 6, 4, 32, 6, 8, 3, 67, 34, 26, -1, -2, -13, 76,
];

let count = 0;

function BubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
      count++;
    }
  }
  return array;
}

console.log(BubbleSort(arr));
console.log(`count = ${count}`);
