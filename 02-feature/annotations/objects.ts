//* Destructuring obj
const profile = {
  name: 'dan',
  age: 25,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};
// destructuring obj : expect structures from obj
//1)
const { age }: {age: number} = profile;
//2)
const {
  coords: { lat, lng }
}: {coords: {lat: number, lng: number}} = profile;