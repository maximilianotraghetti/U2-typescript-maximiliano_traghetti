function identity<T>(arg: T): T {
  return arg;
}
console.log(identity<number>(42));        
console.log(identity<string>("Hola"));    
console.log(identity<boolean>(true));     
console.log(identity<number[]>([1,2,3])); 
