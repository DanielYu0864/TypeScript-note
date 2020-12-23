//* Class in TS
class Vehicle {

  //* constructor Vehicle(color: string): Vehicle
  constructor(public color: string) {}

  //* modifier
  //* public modifier: globally
  public run(): void {
    console.log('chugga');
  }
  //* protected modifier: only can be called by same class or by child classes
  protected honk(): void {
    console.log('beep')
  }
  wannaHonk(): void {
    this.honk();
  }
};
//* extends: take everything inside Vehicle than assign to Car
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color /* the color belong to the Vehicle class */);
  }

  //* private modifier: locally
  private drive(): void { // change drive to log 'vroom'
    console.log('vroom')
  };

  starDrivingProcess(): void {
    this.drive();
  };
  //* honk() can also be called in child class
  wannaHonkFromClass(): void{
    this.honk();
  }
};

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
vehicle.run();
vehicle.wannaHonk();

const car = new Car(5, 'red');
car.starDrivingProcess();
car.wannaHonkFromClass();