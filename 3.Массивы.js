// минимум массива
var M = [7, 66, 55, 4, 88, 1, 8, 99, 3];

min = M[0]; // Минимум
// minInd = 0; // Индекс min

for (i = 1; i < M.length; i++) {
  if (M[i] < min) {
    min = M[i];
    // minInd = i;
  } // if
} // for
console.log('Минимум: ' + min);
// console.log('Индекс: ' + minInd);

// max
var M = [7, 66, 55, 4, 88, 1, 8, 99, 3];

max = M[0];

for (i = 1; i < M.length; i++) {
  if (M[i] > max) {
    max = M[i];
  }
  //   console.log(M[i]);
}
console.log('max: ' + max);

//
let names = ['anna', 'alex', 'egor', 'liza'];

let newNames = [];

for (let i = 0; i < names.length; i++) {
  let name = names[i];
  let firstLetter = name.charAt(0).toLocaleUpperCase();
  newNames.push(firstLetter + name.slice(1));
}

console.log(newNames);

//
let names = ['anna', 'alex', 'egor', 'liza'];

function capitalizeItUp(item) {
  let firstLetter = item.charAt(0).toUpperCase();
  return firstLetter + item.slice(1);
}

let newNames = names.map(capitalizeItUp);
console.log(newNames);

//
let numbers = [1, 2, 3, 4, 5];

let evenNumbers = numbers.filter(function (item) {
  return item % 2 == 0;
});

console.log(evenNumbers);
