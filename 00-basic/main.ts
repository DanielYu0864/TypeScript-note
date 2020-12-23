export {}
let message = 'Hey';
// console.log('string: ',message);
//? $ npm install -g typescript ts-node
//? can just change the file name from .js to .ts
//? $ tsc -v => to check the version
//? $ tsc main.ts (filename) => to turn the typescript to js file
//? $ tsc main (filename) --watch => when the .ts file save auto compiler into .js file

//* 1:  Variable Declarations

let x = 10;
let sum;
x = 20;
const y = 20;
//! const declarations has to be initiallize
//! const can not be change
const title = 1;

//* variable types
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Daniel';

let sentence: string = `My name is ${ name }`;
// console.log('string: ',sentence);

//! intelligence: only suggest the related coode
//! EX1: name.charCodeAt
//! EX2: total.toExponential
//* *******************************************************************************************
//* 2: Variable Type

//* null or undefined
let n: null = null;
let u: undefined = undefined;
//* null and undefined can be assign a value of all type
let isNew: boolean = null;
let myName: string = undefined;

//* two syntaxes to declaring an array type
//* number
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [4, 5, 6];
//* string
let list3: string[] = ['Hey', 'bro'];
let list4: Array<string> = ['How\'s', 'going']
// console.log('array: ',list1, list2);
// console.log('arry: ', list3, list4);

//*  tuple type
//! tuple type has to match each item
//! Ex: can't be [string, number] = [1, 2, 'str'] or ['str', 2, 2]
let person1: [string, number] = ['Yu', 25];

//* enum type
//! set of numeric value
enum Color {Red, Green, Blue};
//* initial value will start 0;
//* red = 0, green = 1, blue = 2
enum Color2 {Red = 5, Green = 50, Blue};


let c: Color = Color.Green;
let c2: Color2 = Color2.Green;
// console.log(c);
// console.log(c2);

//* any type => allow var to be any attribute
let randomValue: any = 10;
randomValue = true;
randomValue = 'string';
// console.log(randomValue.name);
// randomValue();
//* unknown => same like any but need to assign the attribute when change
let myVariable: unknown = 10;
//! check the name exist in object or not
function hasName(obj: any): obj is { name: string } {
  return !! obj &&
    typeof obj === 'object' && 'name' in obj
}
if (hasName(myVariable)) {
  console.log(myVariable.name);
}
// (myVariable as string).toUpperCase();

//* if the variable without any initial value
//! let a; is equal to let a: any;
let a;
a = 10;
a = true;
//* if the variable set any initial value
//! let b = 20; is equal to let b: number = 20;
let b = 20;

//* can set variable has multiple attributes
let multiType: number | boolean;
multiType = 20;
multiType = true;
//! the multiple will has intellisense(autocomplete) support
//! Ex: multiType.valueOf

//* can set variable to any type
let anyType: any;
anyType = 20;
anyType = true;
// ! will not be have any intellisense (autocomplete) support for the any type


//* *******************************************************************************************

//* 3: Function
//* in Js
function add1(num1, num2) {
  return num1 + num2;
};

//* in Ts
//* type with function
function add2(num1: number, num2: number): number /* return type here */ {
  return num1 + num2;
};

add2(5, 10);
//! make sure the input will be number
//! add2('5', 10); => error

//* optional parameters
//! optional parameter can not be the first argument
// ! Ex: num1?: number, num2: number => will cause error
function add3(num1: number, num2?: number  /* add ? in the end to make num2 arg optional */ ): number {
  if(num2)
    return num1 + num2;
  else
    return num1;
};
add3(5); //* num2 = undefined


//* defaule parameters
function add4(num1: number, num2: number = 10  /* asign num2 defaule value to be 10 */ ): number {
  return num1 + num2;
};
add4(5); //* num1 = 5, num2 = 10

//* *******************************************************************************************

//* 4: Interface

//* in function
function fullName1(person: {firstName: string, lastName: string}) {
  console.log(`${person.firstName} ${person.lastName}`);
}

//* in interface
interface Person {
  firstName: string;
  lastName?: string; //* last name is optional input
}

function fullName2(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: 'Bruce',
  lastName: 'Wayne'
}

// fullName1(p);
// fullName2(p);

//* *******************************************************************************************

//* 5: Class
class Employee1 {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good Morning ${ this.employeeName }`);
  }
}


let emp1 = new Employee1('Daneil');
console.log(emp1.employeeName);
emp1.greet();
//* extend class in typescript
class Manager1 extends Employee1 {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`Manager1 delegating test`)
  }
}

let m1 = new Manager1(`Bruce`);
console.log(m1.employeeName)
m1.delegateWork();
m1.greet();

//* 6: Access Modifiers

class Employee2 {
  public employeeName: string;
  //* if set up private employeeName: string => can not accessed from outside of the containing class
  private employeeRole: string;
  constructor(name: string, role?: string) {
    this.employeeName = name;
    this.employeeRole = role
  }

  greet() {
    console.log(`Good Morning ${ this.employeeName }`);
    console.log(`Your job is ${ this.employeeRole }`);//* can accessed in the same class
  }
}


let emp2 = new Employee2('Yu', 'Web developer');

console.log(emp2.employeeName);
console.log(emp2.employeeRole); //* undefined
emp2.greet();
//* extend class in typescript
class Manager2 extends Employee2 {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`Manager2 delegating test`)
  }
}

let m2 = new Manager2(`Wayne`);
console.log(m2.employeeName)
m2.delegateWork();
m2.greet();
//* employeeRole will be undefined 'cause is not in the same class