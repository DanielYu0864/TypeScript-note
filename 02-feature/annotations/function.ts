//* /type annatation for function (aways
// const add: (a:number, b: number) => number
const add = (a: number, b: number /*giving the argument type*/ ): number /*giving the return value type*/ => {
  return a + b;
};
// function divide(a: number, b: number) => number
function divide (a: number, b: number): number {
  return a / b;
};
// const multiply: (a:number, b: number) => number
const multiply = function(a: number, b: number): number {
  return a * b;
};
// use void if no need return value
// const logger: (messate: string) => void
const logger = (message: string): void => {
  console.log(message);
};
// 'never' is not going to return anything
const throwError1 = (message: string): never => {
  throw new Error(message);
}
// better way to write error function
const throwError2 = (message: string): string => {
  if(message) {
    throw new Error(message);
  }
  return message;
}

// obj in argument
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};
// whole obj
const logWeather1 = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
logWeather1(todaysWeather);
// Destructuring obj (argument and type separate by ':')
const logWeather2 = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
};
logWeather2(todaysWeather);

//* type inference for function
// 1)
const decrease = (a, b /*TS assign argument type to any*/ ) /*TS auto assign return value type*/ => {
  return a - b;
};
// 2)
const err = (i: number, j: number) => {
  i + j;
  // err will not return anything 'cause the type TS assign err tobe 'void'
};
