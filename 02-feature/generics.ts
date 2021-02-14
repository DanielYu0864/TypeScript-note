class ArrayOfNumbers {
  constructor(public collection: number[]) { }

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) { }

  get(index: number): string {
    return this.collection[index];
  }
}

//* generics class

class ArrayOfAnything<T> {
  constructor(public collection: T[]) { }

  get(index: number): T {
    return this.collection[index];
  }
}

//* array of string
new ArrayOfAnything<string>(['a', 'b', 'c']);
// also works ('cause type inference)
const strArr = new ArrayOfAnything(['d', 'e', 'f']);

//* Example of generics with functions

function printString(arr: string[]): void {
  arr.forEach(e => {
    console.log(e);
  });
}

function printNumbers(arr: number[]): void {
  arr.forEach(e => {
    console.log(e);
  });
}

function printAnything<T>(arr: T[]): void {
  arr.forEach(e => {
    console.log(e);
  });
}

printAnything<string>(['a', 'b', 'c']); // same
printAnything(['a', 'b', 'c']);// same
//! do not do this printAnything<string[]>(['a', 'b', 'c']);

//* Generic Constraints: limit the types that function can pass in for <T>

class Car {
  print() {
    console.log('I am a car');
  }
}
class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

const printHouseOrCars = <T extends Printable>(arr: T[]): void => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHouseOrCars<House>([new House(), new House()]);
printHouseOrCars<Car>([new Car(), new Car()]);
printHouseOrCars([1, 'b']); // wrong type