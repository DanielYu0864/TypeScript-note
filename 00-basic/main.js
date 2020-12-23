"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Hey';
// console.log('string: ',message);
//? $ npm install -g typescript ts-node
//? can just change the file name from .js to .ts
//? $ tsc -v => to check the version
//? $ tsc main.ts (filename) => to turn the typescript to js file
//? $ tsc main (filename) --watch => when the .ts file save auto compiler into .js file
//* 1:  Variable Declarations
var x = 10;
var sum;
x = 20;
var y = 20;
//! const declarations has to be initiallize
//! const can not be change
var title = 1;
//* variable types
var isBeginner = true;
var total = 0;
var name = 'Daniel';
var sentence = "My name is " + name;
// console.log('string: ',sentence);
//! intelligence: only suggest the related coode
//! EX1: name.charCodeAt
//! EX2: total.toExponential
//* *******************************************************************************************
//* 2: Variable Type
//* null or undefined
var n = null;
var u = undefined;
//* null and undefined can be assign a value of all type
var isNew = null;
var myName = undefined;
//* two syntaxes to declaring an array type
//* number
var list1 = [1, 2, 3];
var list2 = [4, 5, 6];
//* string
var list3 = ['Hey', 'bro'];
var list4 = ['How\'s', 'going'];
// console.log('array: ',list1, list2);
// console.log('arry: ', list3, list4);
//*  tuple type
//! tuple type has to match each item
//! Ex: can't be [string, number] = [1, 2, 'str'] or ['str', 2, 2]
var person1 = ['Yu', 25];
//* enum type
//! set of numeric value
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
//* initial value will start 0;
//* red = 0, green = 1, blue = 2
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 5] = "Red";
    Color2[Color2["Green"] = 50] = "Green";
    Color2[Color2["Blue"] = 51] = "Blue";
})(Color2 || (Color2 = {}));
;
var c = Color.Green;
var c2 = Color2.Green;
// console.log(c);
// console.log(c2);
//* any type => allow var to be any attribute
var randomValue = 10;
randomValue = true;
randomValue = 'string';
// console.log(randomValue.name);
// randomValue();
//* unknown => same like any but need to assign the attribute when change
var myVariable = 10;
//! check the name exist in object or not
function hasName(obj) {
    return !!obj &&
        typeof obj === 'object' && 'name' in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// (myVariable as string).toUpperCase();
//* if the variable without any initial value
//! let a; is equal to let a: any;
var a;
a = 10;
a = true;
//* if the variable set any initial value
//! let b = 20; is equal to let b: number = 20;
var b = 20;
//* can set variable has multiple attributes
var multiType;
multiType = 20;
multiType = true;
//! the multiple will has intellisense(autocomplete) support
//! Ex: multiType.valueOf
//* can set variable to any type
var anyType;
anyType = 20;
anyType = true;
// ! will not be have any intellisense (autocomplete) support for the any type
//* *******************************************************************************************
//* 3: Function
//* in Js
function add1(num1, num2) {
    return num1 + num2;
}
;
//* in Ts
//* type with function
function add2(num1, num2) {
    return num1 + num2;
}
;
add2(5, 10);
//! make sure the input will be number
//! add2('5', 10); => error
//* optional parameters
//! optional parameter can not be the first argument
// ! Ex: num1?: number, num2: number => will cause error
function add3(num1, num2 /* add ? in the end to make num2 arg optional */) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
;
add3(5); //* num2 = undefined
//* defaule parameters
function add4(num1, num2 /* asign num2 defaule value to be 10 */) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
;
add4(5); //* num1 = 5, num2 = 10
//* *******************************************************************************************
//* 4: Interface
//* in function
function fullName1(person) {
    console.log(person.firstName + " " + person.lastName);
}
function fullName2(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
// fullName1(p);
// fullName2(p);
//* *******************************************************************************************
//* 5: Class
var Employee1 = /** @class */ (function () {
    function Employee1(name) {
        this.employeeName = name;
    }
    Employee1.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee1;
}());
var emp1 = new Employee1('Daneil');
console.log(emp1.employeeName);
emp1.greet();
//* extend class in typescript
var Manager1 = /** @class */ (function (_super) {
    __extends(Manager1, _super);
    function Manager1(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager1.prototype.delegateWork = function () {
        console.log("Manager1 delegating test");
    };
    return Manager1;
}(Employee1));
var m1 = new Manager1("Bruce");
console.log(m1.employeeName);
m1.delegateWork();
m1.greet();
//* 6: Access Modifiers
var Employee2 = /** @class */ (function () {
    function Employee2(name, role) {
        this.employeeName = name;
        this.employeeRole = role;
    }
    Employee2.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
        console.log("Your job is " + this.employeeRole); //* can accessed in the same class
    };
    return Employee2;
}());
var emp2 = new Employee2('Yu', 'Web developer');
console.log(emp2.employeeName);
console.log(emp2.employeeRole); //* undefined
emp2.greet();
//* extend class in typescript
var Manager2 = /** @class */ (function (_super) {
    __extends(Manager2, _super);
    function Manager2(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager2.prototype.delegateWork = function () {
        console.log("Manager2 delegating test");
    };
    return Manager2;
}(Employee2));
var m2 = new Manager2("Wayne");
console.log(m2.employeeName);
m2.delegateWork();
m2.greet();
//* employeeRole will be undefined 'cause is not in the same class
