//* Array in TypeScript
// carMakers is only going to contain string type element
const carMakers: string[] = ['Ford', 'Toyota', 'Chevy'];
// giving emptyArr 'string' type to avoid assign array to 'any' type
const emptyArr: string[] = [];
const anyArr = [];

const dates = [new Date(), new Date()];
// assign the array inside of array by [][]
const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

//* Help with inference when extracting values
const car = carMakers[0]; // 'Ford'
const myCar = carMakers.pop(); // 'Chevy'

//* Prevent incompatible values
carMakers.push(100); //carMakers only contain 'string'

//* Help with 'map'
carMakers.map((car: string): string => {
  return car.toLocaleUpperCase();
});

//* Flexible types (multiple type)
// const importantDates1: (string | Date) []
const importantDates1 = [new Date(), '2030-12-30'];
const importantDates2: (string | Date)[] = [new Date()];
const importantDates3: (string | Date)[] = [];
importantDates3.push('2030-10-10');
importantDates3.push(new Date());
importantDates3.push(1010);
