console.log('////////// Types Annotations //////////');

let age: number = 44;

if (age < 50) {
  age += 10;
}

console.log(`My age is ${age}`);

// ANNOTATE PRIMITIVE VALUES
let sales: number = 950_000_000;
let course: string = 'TypeScript';
let published: boolean = true;

let income = 2_000;
let firstName = 'Carlos';

// ANNOTATE ARRAYS
let numbers: number[] = [1, 2, 3];
const letters: string[] = ['a', 'b', 'c'];

let ages = [18, 25, 23];
const vowels = ['a', 'e', 'i', 'o', 'u'];

// ANNOTATE TUPLES
const user: [number, string] = [1, 'Mertens'];
const skill: [boolean, string] = [true, 'TypeScript'];

// ANNOTATE ENUMS
const enum Size {
  Small = 1,
  Medium,
  Large,
}

let mysize: Size = Size.Medium;
console.log(mysize);

// ANNOTATE FUNCTIONS
function calculateTax(income: number, age = 30): number {
  const factor = 1.2;
  if (age > 30) {
    return income * factor;
  }

  return income;
}

console.log(calculateTax(3000, 35));
console.log(calculateTax(3000));

// FUNCTION WITH ANY TYPE
function render(document: any) {
  console.log(document);
}

// ANNOTATE OBJECTS
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

// TYPE ALIAS
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

const employee1: Employee = {
  id: 2,
  name: 'Peter',
  retire: (date: Date) => {
    console.log(date);
  },
};

// UNION TYPES
function kgToLbs(weight: number | string): number {
  if (typeof weight === 'number') return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));

// TYPE INTERSECTION
type Draggable = {
  drag: () => void;
};

type Resizable = {
  rezise: () => void;
};

type UIWidget = Draggable & Resizable;

const textBox: UIWidget = {
  drag: () => {},
  rezise: () => {},
};

// LITERAL TYPES
type Quantity = 50 | 100;

let quantityA: Quantity = 100;
let quantityb: Quantity = 50;

type Metric = 'cm' | 'inch';

// NULLABLE TYPES
function upperCaseWord(str: string | null | undefined): string {
  if (str) return str.toUpperCase();
  else return 'Life is unexpected!';
}

upperCaseWord('carlos');
upperCaseWord(null);

// OPTIONAL CHAINING
// Optional property operator (?.)
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

const customer = getCustomer(1);
// optional property operator
console.log(customer?.birthday?.getFullYear());

const arr = [1, 2, 3];
// optional element access operator
console.log(arr?.[4]);

const log: any = null;
// optional call operator
log?.('a');

// NULLISH COAELSCING OPERATOR (null or undefined)
let speed: number | null = null;
let ride = {
  speed: speed ?? 30, // checck for null or undefined
};

// TYPE ASSERTIONS (as)
// let phone = document.getElementById('phone') as HTMLInputElement;
// console.log(phone.value);

// or
// let street = <HTMLInputElement>document.getElementById('street');
// console.log(street.value);

// UNKNOWN TYPE (prefer than any type)

function renderDocument(document: unknown) {
  console.log(typeof document);
}

// NEVER TYPE
// To annotate a function that will never return and create infinity loop

function processEvent(): never {
  while (true) {
    // Do something
  }
}
