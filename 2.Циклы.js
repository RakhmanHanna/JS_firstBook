// четные числа
for (i = 1; i < 21; i++) {
  if (i % 2 !== 0) continue;
  else console.log(i);
}

for (i = 1; i < 11; i++) {
  if (i == 5) break;
  console.log(i);
}
//
for (let i = 0; i < 10; i++) {
  saySomething();
}
function saySomething() {
  console.log('hello');
}

//
let floors = 28;

for (let i = 1; i <= floors; i++) {
  if (i == 13) {
    continue;
  }
  console.log('At floor: ' + i);
}

//
let count = 0;

while (count < 10) {
  console.log('looping away!');

  count++;
}

//
let count = 0;

do {
  console.log('i am');

  count++;
} while (count < 10);
