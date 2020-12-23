//* type annatation: tell typescript only assign this variable to the giving type value
//* number
let apples: number = 5;
// can only assign the apples to number
apples = 10;
//? error: apples = 'lsfjwoe';
//* string
let speed: string = 'fast';
// can only assign the speed to string
//* boolean
let hasName: boolean = true;
// can only assign the hasName to boolean (true, false)
//* null / undefined
let nothingMuch: null = null;
let nothing: undefined = undefined;

//* built in objects we can our custom type
// assign type to Date in TS
let now: Date = new Date();

//* Array
// tells typescript that assign an array indecated by the square brackets going to contain nothing but string inside of array
let coors: string[] = ['red', 'green', 'blue'];
let myNum: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, true];

//* Classes
class Car {}
// new Car to create new instance
let car: Car = new Car();

//* Object literal
// create an obj and adding in a type notaion for it so the point obj only can assgin number properties
let point: {x: number;/*semicolon(';') to separat different type*/y: number} = {
  x: 10,
  //? error-> x: 'ten'
  y: 20
};

//* Function
// a: (everything on the left of "=" is description of function) tells typescript what annotation(type of values) are go into the function
// b: (everything on the right of "=" is real function) tells types of values we expect the function to return
// c: void means nothing
const logNumber: (i: number /* a */) => void /* c */ = (i: number /* b */) => {
  console.log(i)
};

//* any
//* When to use annations
//* 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
// give the type manually to avoid the any type
const coordinates: { x: number, y: number } = JSON.parse(json);
console.log(coordinates); // { x: 10, y: 20 }

//* 2) When we declare a variable on one line and initalizate it later
let words = ['red', 'green', 'blue'];
// tell typescript what type of variable will be to avoid type 'any'
let foundWord: boolean; // or let foundWord = false

for (let i = 0; i < words.length; i++) {
  if(words[i] === 'green') {
    foundWord = true;
  }
}

//* 3) Variable whose type cannot be inferred correctly
// if numbers[i] > 0 assign numberAboveZero to numbers[i] else assign numberAboveZero to false (need to assign two different types)
let numbers = [-10, -1, 12];
// tell typescript the numberAboveZero will be boolean or(|) number type
let numberAboveZero: boolean | number = false;

for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}