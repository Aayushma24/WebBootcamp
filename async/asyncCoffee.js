// async function coffeeMachine() {
//     setTimeout(() => {
//         console.log("Coffee is ready!");
//     }, 3000);
// }
// function wrcCafe() {
//     console.log("Welcome to WRC Cafe");
//     coffeeMachine();
//     console.log("Please wait while we prepare your coffee...");
// }
// wrcCafe();


async function  introduction() {
    setTimeout(() => {
        console.log("My name is Aayushma Khanal");
    }, 2000);

    return "Introduction complete";
}
//await
const intro =  await introduction();
console.log(intro);