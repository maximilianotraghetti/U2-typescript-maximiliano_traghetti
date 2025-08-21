class CarPrivate {
  private make: string;

  constructor(make: string) {
    this.make = make;
  }

  drive(): void {
    console.log(`Driving a ${this.make}`);
  }

  getMake(): string {
    return this.make;
  }
}

const car = new CarPrivate("Honda");
car.drive(); 
console.log(car.getMake()); 
