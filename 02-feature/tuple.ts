const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};
//* type alias
type Drink = [string, boolean, number];
//* tuple has to be sorted by order
//* by giving the specific type for each element make pepsi as tuple
const pepsi: Drink = ['brown', true, 40];
