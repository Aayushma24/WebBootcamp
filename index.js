console.log("Hello world");
console.warn("I am throwing a error");
console.log("My name is Aayushma Khanal");
const name="I am robot";
console.log("Name:",name);

age=10; //conditional statement 
if(false){
    console.log("name is 10");
}else{
    console.log("name is not 10");
}
//scope of let and var
let a=10;
if (true){
    let a=20;
    console.log(a);

}
console.log(a);
//  let b=10;
// if (true){
//     var b=20;
//     console.log(b);

// }
// console.log(b);
//function
// function myfunction(){
//     console.log("I am a function");

// }
// myfunction();
function summationMethod(number1,number2){
    return number1+number2
}
 const result =summationMethod(5,1);
 console.log(result);

//ternary operator 
// condition ? true : false;
// let age1=10;
// let result=age1>18 ? "You are eligible to vote" : "You are not eligible to vote";
// console.log(result);

//ternary operator
console.log(1>2?"smaller":"greater");
//otp generation method
function generate0tp(){
    
    let  z= Math.random()*20000;
    let a =Math.ceil(z)
    let b = Math.floor(z)
    console.log(a,b)
    
}
generate0tp()

 
