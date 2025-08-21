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

class ElectricCar extends CarPrivate {
  batteryLife: number;

  constructor(make: string, batteryLife: number) {
    super(make); 
    this.batteryLife = batteryLife;
  }

  charge(): void {
    console.log(`El coche eléctrico ${this.getMake()} se está cargando 🔋 (Batería: ${this.batteryLife}%)`);
  }
}


const tesla = new ElectricCar("Tesla", 90);
tesla.drive();   
tesla.charge();  
