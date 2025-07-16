const array = [3, 6, 1, 12, 52, 31, 9, 4, 7, 42]

//let revers = false

function bubbleSort(arr, revers = false) {
  const arrayCopy = [...arr];
  if (revers === true) {
    return bubbleSortDescending(arrayCopy)
  } else {
    return bubbleSortIncrease(arrayCopy)
  }
}




function bubbleSortIncrease(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}


function bubbleSortDescending(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log(bubbleSortDescending(array));
console.log(bubbleSortIncrease(array));
console.log(bubbleSort(array, true));
console.log(bubbleSort(array));