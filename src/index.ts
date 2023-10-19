let age: number = 44;

if (age < 50) {
  age += 10;
}

console.log(`My age is ${age}`);

// Annotate primitive values
let sales: number = 950_000_000;
let course: string = 'TypeScript';
let published: boolean = true;

let income = 2_000;
let firstName = 'Carlos';

// Annotate arrays
let numbers: number[] = [1, 2, 3];
const letters: string[] = ['a', 'b', 'c'];

let ages = [18, 25, 23];
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Annotate tuples
const user: [number, string] = [1, 'Mertens'];
const skill: [boolean, string] = [true, 'TypeScript'];

// Annotate enums
const enum Size {
  Small = 1,
  Medium,
  Large,
}

let mysize: Size = Size.Medium;
console.log(mysize);

// Annotate functions
function calculateTax(income: number, age = 30): number {
  const factor = 1.2;
  if (age > 30) {
    return income * factor;
  }

  return income;
}

console.log(calculateTax(3000, 35));
console.log(calculateTax(3000));

// Annotate functions with any type
function render(document: any) {
  console.log(document);
}

// Annotate objects

const employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: 'Edgar',
  retire: (date: Date) => {
    console.log(date);
  },
};

employee.name = 'Mertens';

console.log(employee);
