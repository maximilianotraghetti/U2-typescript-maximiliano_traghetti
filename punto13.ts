enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue"
}

function showColor(color: Color): string {
  return `El color elegido es ${color}`;
}

console.log(showColor(Color.Red));
console.log(showColor(Color.Green));
