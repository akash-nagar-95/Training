// // making a simple calculator : 

// function add(a,b) {
//     return a + b;
// }
// function subtract(a,b){
//     return a - b;
// }
// function multiply(a,b){
//     return a * b;
// }
// function division(a,b){
//     if(b == 0){
//         return "Cannot divide by zero !";
//     }
//     return a/b;
// }
// function modulus(a,b){
//     return a%b;
// }
// function exponential(a,b){
//     return a**b;
// }

// function Calculator(a,b,operation){
//     return operation(a,b);
// }
// console.log(Calculator(10,5,add));
// console.log(Calculator(10,5,subtract));
// console.log(Calculator(10,5,multiply));
// console.log(Calculator(10,0,division));
// console.log(Calculator(10,5,modulus));
// console.log(Calculator(10,5,exponential));





// using the call(), apply(), bind() : 

// function sayHello(message){
//     console.log(`${message}, ${this.name}`);
// }
// const person = {name : 'Happy'};

// sayHello.call(person, 'with call method');
// sayHello.apply(person, ['Hi, hello']);

// const greetPerson = sayHello.bind(person);

// greetPerson('greeting from bind method');




// callbacks : 

// function fetchData(callback) {
//     setTimeout(()=>{
//         console.log("Data fetched");
//         callback();
//     }, 2000);
// }
// fetchData(()=>{
//     console.log('callback executed');
// });




// Promises : 

// function fetchData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             let success = !true;
//             if(success){
//                 resolve("Data fetched successfully.");
//             }
//             else{
//                 reject("Error in fetching the data. ");
//             }
//         }, 2000);
//     });
// }

// fetchData()
// .then((message)=> console.log(message))
// .catch((error)=>console.log(error));



// async/await : 

// async function print() {
//     try{
//         let response = await new Promise((resolve, reject) => { 
//             setTimeout(()=>{
//                 console.log('bound to give the error');
//             }, 2000)
//         });
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// print();


// Static methods of Promises : 

// let p1 = Promise.resolve(10);
// let p2 = Promise.resolve(20);
// let p3 = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         console.log("it is p3 promise");
//         reject(30);
//     },2000);
// });
// let p4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('it is p4 promise which is neither rejected nor resolved');
//         resolve();
//     }, 4000);
// });

// Promise.allSettled([p1, p2, p3, p4]).then((value) => {
//     console.log(value);
// });


// spread operator :

// const number = [1,2,3];
// const newNumbers = [...number, 4,5,6];
// console.log(number);
// console.log(newNumbers);
// const copy = [...number];
// console.log(copy);

// const obj = {
//     name : "Akash",
//     age : "23",
//     height: "5.10",
// };
// const newObj = {
//     ...obj,
//     city : "indore",
// };
// console.log(obj);
// console.log(newObj);


// rest operator : 
// function sum(...numbers){
//     return numbers.reduce((acc, num) => acc + num, 0);
// }
// console.log(sum(1,2,3,4,5));

// function counter() {
//     let count = 0;
//     return function() {
//         count++;
//         console.log(count);
//     };
// }
// const increment = counter();
// increment();
// increment();
// increment();
// increment();


