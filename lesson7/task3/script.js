const array = [1, 3, 4, 6, 2, 5, 7];
const removeElement = (array, item) => array.filter((element) => element !== item);
const result = removeElement(array, 4);
console.log(result);