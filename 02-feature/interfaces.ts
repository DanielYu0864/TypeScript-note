//* interfaces: the minimum of requirement for the value type and key
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string; // function return a string
}
//* set the new variable
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `My car is ${ this.name }`
  }
};
const notOldCivic = {
  name: 'civic0.5',
  year: new Date(),
  broken: false,
  summary(): string {
    return `My car is ${ this.name }`
  },
  price: 8000
};
const newCivic = {
  name: 'civic1.0',
  year: 2020,
  isBroken: false
};
// void = a function return nothing
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`${vehicle.name}${vehicle.year}${vehicle.broken}`);
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
printVehicle(notOldCivic); //* has extra pre 'price' but not getting any error 'cause reach every value type in Vehicle interface
printVehicle(newCivic); //* has to be follow by the interface Vehicle type (string, Date, boolean) and key (name, year, broken)
//* more reuseable interface setup
interface Reportable {
  summary(): string; // function return a string
};
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${ this.sugar } grams of sugar`
  }
};
const printSummary = (item: Reportable): void => {
  //* notice all the calling obj has prop summary()
  console.log(item.summary());
};
//* by create a generic looking interface the developer can re-use it to the different looking/struture obj/function
printSummary(oldCivic);
printSummary(notOldCivic);
printSummary(drink);