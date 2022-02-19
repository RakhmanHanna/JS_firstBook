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

