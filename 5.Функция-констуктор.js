function Human(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function () {
    var fullName = this.firstName + this.lastName;
    return fullName;
  };
}
const John = new Human('John', 'Doe');
const Ivan = new Human('Ivan', 'Ivanov');

// Цикл for...in
for (let P in John) {
  console.log(P + ' = ' + John[P]);
}

if ('firstName' in John) {
  console.log(John.firstName);
}

//
function firstLastName(first, last) {
  console.log(first + last);
}
firstLastName(Anna, Rakhman);
