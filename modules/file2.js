// optional chaining operator (?.) is a safe way to access nested object properties.
//if the value is not undefined or null, it will return the value, otherwise it will return undefined.
const name="Aayushma";
const value= name?? "Guest"
console.log(value); // Output: Aayushma