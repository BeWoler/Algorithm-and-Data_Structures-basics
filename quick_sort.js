const arr = [
  0, 3, 2, 5, 6, 8, 1, 9, 3, 8, 6, 4, 32, 6, 8, 3, 67, 34, 26, -1, -2, -13, 76,
];

let count = 0;

function quickSort(array) {
  if (array.length < 1) {
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < array.length; i++) {
    count++;
    if (i === pivotIndex) continue;
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(arr));
console.log(`count = ${count}`);
