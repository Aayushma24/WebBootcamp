// // try and catch error syntax
// try{

// }catch(error){

// }
// finally {

// }
//error handling
//  try{
//     let result=10/0;

//  }catch(error){
//     console.error("An error occurred:", `${error.message}`);
//  }
// finally{
//     console.log("Error handling complete.");
// }
// promise is a way to handle asynchronous operations in JavaScript. It represents a value that may be available now, 
// or in the future, or never. Promises have three states: pending, fulfilled, and rejected. 
// PROMISE SYNTAX
// const promise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     if (/* operation successful */) {
//         resolve(result); // Fulfilled state
//     } else {
//         reject(error); // Rejected state
//     }
// });

// promise.then((result) => {
//     // Handle fulfilled state
// }).catch((error) => {
//     // Handle rejected state
// });
//Promise Combinators in JavaScript are methods that allow you to work with multiple promises simultaneously. 
// They help you manage and coordinate the execution of multiple asynchronous operations. 
// Promise.all();
//Promise.race();
//Promise.allSettled();
//Promise.any();
async function studentList(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve(['STUDENT 1', 'STUDENT 2', 'STUDENT 3']);
        }, 2000);
});
}
async function teacherList() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['TEACHER 1', 'TEACHER 2', 'TEACHER 3']);
        }, 1000);
    });
}
 const result =await Promise.all([studentList(), teacherList()]) 
 console.log(result); // yesle certain time linxa so we use await