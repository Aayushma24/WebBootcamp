// // // forEach loop
//   const studentList=["ices","aayushma","prakriti"]
// // studentList.forEach(student => {
// //     console.log("Student name is:",student);
// // });
// // //for loop
// // for(let i=0;i<studentList.length;i++){
// //     console.log("Student name is:",studentList[i]);
// // }

// Array methods
// 1.push
// 2.pop
// 3.shift
// 4.unshift
// 5.slice
// 6.splice
// 7.map
// 8.filter
// 9.reduce
// 10.find
// 11.findIndex
// 12.sort
// 13.reverse  

// const studentarray=["ices","aayushma","prakriti","gopal","sita","ram"];
// //push method
// studentarray.push("hari");
// console.log(studentarray);
// //pop method
// studentarray.pop();
// console.log(studentarray);
// //shift method
// studentarray.shift();
// console.log(studentarray);
// //unshift method
// studentarray.unshift("hari");
// console.log(studentarray);
// //slice method
// const slicedArray=studentarray.slice(1,4);// 1 ra 4 index samma ko element lai rakhxa
// console.log(slicedArray);
// //splice method2
// const splicedArray=studentarray.splice(1,2);//1 ra 2 index  paxi  ko element lai remove garxa
// console.log(splicedArray);  
     
//other important methods


// // 1.forEach //access garna ko lagi sabai lai access dinxa
//     studentList.forEach(student=>{    
//         console.log("student name:",student)
//    });

// // map method // manipulate garna ko lagi use garinxa like sab value lai aafai call garxa 
// const newArray=studentList.map(student=>{
//     return student.toUpperCase();
// });
// console.log(newArray);
//  const studentList=["ices","aayushma","prakriti"]
//  function mapValue(value,index){
//     return value + "wrc" +"index:" + index;
//  }
//  console.log(mapValue("ices",0));



// 3.reduce
// const total=[1,2,3,4,5,6,7,8,9,10].reduce((total,value)=>{  //reduce method le total value calculate garxa
//     return total+value;
// });
// console.log(total);
// // 4.filter
// const evennumber=[1,2,3,4,5,6,7,8,9,10];
// const evennumber1=evennumber.filter(number=>{
//     return number%2==0;
// });
// console.log(evennumber1);


//objects
const student={
    name:"Aayushma",
    age:20,
    gender:"female",
    address:"syangja",
    greet :()=>{
        console.log(`Hello ${ student.name}`)
    }
}
student.greet();
console.log(student.name);