//list(array)// index based destructuring
const result=[[ "Student1", "Student2", "Student3" ], [ "Teacher1", "Teacher2", "Teacher3" ]];
const [studentList, teacherList] = result;
console.log(studentList); // Output: [ 'Student1', 'Student2', 'Student3' ]
console.log(teacherList); // Output: [ 'Teacher1', 'Teacher2', 'Teacher3' ]

// object destructuring - fetch through key
const storeRoom ={
    electronics: ["TV", "Laptop", "Mobile"],
    furniture: ["Chair", "Table", "Sofa"],
    clothing: ["Shirt", "Pants", "Jacket"]
}
const{ electronics, furniture, clothing } = storeRoom;//destructuring
console.log(electronics); // Output: [ 'TV', 'Laptop', 'Mobile' ]
console.log(furniture); // Output: [ 'Chair', 'Table', 'Sofa' ]
console.log(clothing); // Output: [ 'Shirt', 'Pants', 'Jacket' ]



// Spread operator & Rest operator 
// Spread operator
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combinedNumbers = [...numbers1, ...numbers2];//... is spread operator which is used to combine two arrays into one.
console.log(combinedNumbers); // Output: [1, 2, 3, 4, 5, 6]
const listValues = [1, 2, 3, 4, 5];
const newList =[...listValues, 6, 7, 8];//... is spread operator which is used to combine two arrays into one.
console.log(newList); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log("spread operator", ...newList); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
 
// Rest operator

const [first, second, ...rest] = newList; 
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(...rest); // Output: [3, 4, 5, 6, 7, 8]


const newStoreRoom = {
    ...storeRoom,
    food: ["Rice", "Wheat", "Pulses"],
    beverages: ["Tea", "Coffee", "Juice"],
    snacks: ["Chips", "Cookies", "Nuts"]
};
const { food, beverages, snacks, ...otherItems } = newStoreRoom;
console.log(...food); // Output: [ 'TV', 'Laptop', 'Mobile' ]
console.log(...beverages); // Output: [ 'Chair', 'Table', 'Sofa' ]
console.log(...snacks); // Output: [ 'Shirt', 'Pants', 'Jacket' ]
 // Output: { food: [ 'Rice', 'Wheat', 'Pulses' ], beverages: [ 'Tea', 'Coffee', 'Juice' ], snacks: [ 'Chips', 'Cookies', 'Nuts' ] }