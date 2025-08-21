interface Shape {
  area(): number;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

// Ejemplo
const circle = new Circle(5);
console.log("Área del círculo:", circle.area());
