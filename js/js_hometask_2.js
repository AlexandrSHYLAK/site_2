//выборка уникальных элементов
const array = [3, 6, 1, 2, 2, 1, 9, 4, 7, 4];
const newArray = [];
for (let index = 0; index < array.length; index++) {
  if (!newArray.includes(array[index])) {
    newArray.push(array[index]);
  }
}
console.log(newArray);
