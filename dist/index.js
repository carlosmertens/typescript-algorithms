"use strict";
let age = 44;
if (age < 50) {
    age += 10;
}
console.log(`My age is ${age}`);
let sales = 950000000;
let course = 'TypeScript';
let published = true;
let income = 2000;
let firstName = 'Carlos';
let numbers = [1, 2, 3];
const letters = ['a', 'b', 'c'];
let ages = [18, 25, 23];
const vowels = ['a', 'e', 'i', 'o', 'u'];
const user = [1, 'Mertens'];
const skill = [true, 'TypeScript'];
let mysize = 2;
console.log(mysize);
function calculateTax(income, age = 30) {
    const factor = 1.2;
    if (age > 30) {
        return income * factor;
    }
    return income;
}
console.log(calculateTax(3000, 35));
console.log(calculateTax(3000));
function render(document) {
    console.log(document);
}
const employee = {
    id: 1,
    name: 'Edgar',
    retire: (date) => {
        console.log(date);
    },
};
employee.name = 'Mertens';
console.log(employee);
//# sourceMappingURL=index.js.map