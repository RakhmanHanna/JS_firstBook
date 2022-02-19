function Human(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Human.prototype.getFullName = function () {
  let fullName = this.firstName + this.lastName;
  return fullName;
};

let Anna = new Human('Anna', 'Rakhman');
console.log(Anna.getFullName());

let Alex = new Human('Alex', 'Koval');
console.log(Alex.getFullName());
