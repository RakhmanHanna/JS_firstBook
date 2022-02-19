const Human = new Object();
Human.firstName = 'John';
Human.lastName = 'Doe';
// формируем метод объекта
Human.getFullName = function() {
    var fname = this.firstName + this.lastName;
    return fname;
};
// выводим значения
console.log(Human.firstName)
console.log(Human.lastName)
console.log(Human.getFullName)



var Human = {
    firstName = 'Anna',
    lastName = 'Rakhman',
    getFullName: function() {
        var fullName = this.firstName + this.lastName;
        return fullName;
    }

}
console.log(getFullName);