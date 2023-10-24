"use strict";
var _a;
console.log('////////// Types Annotations //////////');
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
const employee1 = {
    id: 2,
    name: 'Peter',
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));
const textBox = {
    drag: () => { },
    rezise: () => { },
};
let quantityA = 100;
let quantityb = 50;
function upperCaseWord(str) {
    if (str)
        return str.toUpperCase();
    else
        return 'Life is unexpected!';
}
upperCaseWord('carlos');
upperCaseWord(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
const customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
const arr = [1, 2, 3];
console.log(arr === null || arr === void 0 ? void 0 : arr[4]);
const log = null;
log === null || log === void 0 ? void 0 : log('a');
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
function renderDocument(document) {
    console.log(typeof document);
}
function processEvent() {
    while (true) {
    }
}
//# sourceMappingURL=index.js.map