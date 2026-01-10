console.log("Good Morining ji....!");

// abstraction -> incapulations -> Polymorphisum -> 

// functions signature how many pass parrametter


// Object

// const profile={
//     firstName:"Panakj",
//     lastName:"Oberoi",
//     age:25,
//     jobstatus:true,
//     add:["Hinjiwadi","pune"],
// };

// console.log(profile);
// console.log(profile.Name);
// console.log(profile.add);
// console.log(profile["age"]);
// Dot or brackets(expression) opeartor...!

// console.log(profile["add" ,"lastName"]);

// let manager=prompt("Enter the value you want to access any key");
// console.log(profile[manager]);


// let namekey ="Name";
// console.log(profile["first"+namekey]);
// console.log(profile["last"+ namekey]);

// console.log(profile["add"][1]);

// json = [{},{},{}]

// profile.gmail = "abc@gmail.com";

// console.log(profile);

// profile["insta"] = "pankajpberoi112";

// console.log(profile);

// profile.firstName = "Khushi";

// profile.jobStatus = false;

// console.log(profile);

// const profile = {
//   firstName: "Pankaj",
//   lastName: "Oberoi",
//   age: 25,
//   jobStatus: true,
//   address: ["hinjewade", "Pune"],
//   salary: 95000,
// };

// let key = prompt("Enter the key you want to access");

// if (profile[key] > 90000) {
//   profile.jobStatus = false;
//   console.log("1 month notice period");
//   console.log(profile);
// }

// let student = {
//   Name: "Chinki",
//   rollno: 101,
//   marks: {
//     math: 10,
//     science: 20,
//     english: 30,
//   },
// };

// let total = student.marks.math + student.marks.science + student.marks.english;
// let percentage = (total / 300) * 100;

// if (percentage > 40) {
//   console.log(
//     `Student ${student.Name} with roll no ${student.rollno} have ${percentage}% number`
//   );
// } else {
//   console.log(`${student.Name} is failed`);
// }

// let haldiram = [
//   {
//     Sweet: "Jalebi",
//     price: 50,
//     stock: "1KG",
//   },
//   {
//     Sweet: "Gulab jMaun",
//     price: 510,
//     stock: "2KG",
//   },
//   {
//     Sweet: "Halwa",
//     price: 500,
//     stock: "2KG",
//   },
// ];

// let output = haldiram.map((i) => {
//   return i;
// });

// console.log(output);

// let product = {
//   Sweet: "Jalebi",
//   price: 50,
//   stock: "1KG",
// };

// console.log(product);

// for (let i in product) {
//   console.log(product[i]);
// }

// let product = {
//   Sweet: "Jalebi",
//   price: 50,
//   stock: "1KG",
// };

// console.log(product);

// let keys = Object.keys(product);
// console.log(keys);

// let values = Object.values(product);
// console.log(values);

// for (let [key, value] of Object.entries(product)) {
//   console.log(key, value);
// }

// console.log(Object.entries(product));

// const orders = [
//   { orderId: 1, customer: "Amit", items: ["Burger", "Pizza"], total: 450, delivered: true },
//   { orderId: 2, customer: "Neha", items: ["Pasta"], total: 250, delivered: false },
//   { orderId: 3, customer: "Ravi", items: ["Burger", "Fries"], total: 300, delivered: true },
//   { orderId: 4, customer: "Pooja", items: ["Pizza"], total: 350, delivered: true }
// ];


// // Q-Online Learning Platform

// // Each student has taken multiple tests:

// const students = [
//   { name: "Amit", scores: [80, 70, 60], active: true },
//   { name: "Neha", scores: [40, 30, 50], active: true },
//   { name: "Raj", scores: [90, 95, 88], active: false },
//   { name: "Pooja", scores: [70, 75, 72], active: true }
// ];



// Write a function generateStudentReport(students) that:

// Only considers active students

// Calculates average score for each

// Students with average ≥ 60 pass



// function generateStudentReport(students){
//   let activeStudents=students.filter((students)=>{
//     return (students.active==true)
//   })
 
// // console.log(activeStudents)
//      let passStudents=[];
//     let failedStudents=[];
//     let allAverage=[];

//   students.forEach(student=>{
//     const sum= student.scores.reduce((total,score)=>total+score,0);
//     const avg= sum/student.scores.length;
//     // console.log(avg)
//     allAverage.push(avg)
//     // let passStudents=[];
//     // let failedStudents=[];
//     if(avg>=60){
//       passStudents.push(student.name)
//     }
//     else {
//       failedStudents.push(student.name)
//     }
    
//   })
//   const CalAvg=(allAverage.reduce((t ,a)=>t +a,0)/allAverage.length)

// // console.log(passStudents)
// // console.log(failedStudents)
 
// let output= {
//   totalActiveStudents:activeStudents.length ,
//   passStudents: passStudents,
//   failedStudents: failedStudents,
//   classAverage: CalAvg
// }
// return output
//   }

//    console.log(generateStudentReport(students));
  


// ==========================================================================



// Q-E-Commerce Discount Engine

// An e-commerce site stores cart data:

// const cart = [
//   { name: "Laptop", price: 50000, quantity: 1, category: "electronics" },
//   { name: "Shirt", price: 2000, quantity: 2, category: "fashion" },
//   { name: "Headphones", price: 3000, quantity: 1, category: "electronics" }
// ];

// Rules:

// Electronics → 10% discount

// Fashion → 20% discount

// If final cart value > 60000 → extra 5% discount

// Write calculateFinalBill(cart) that returns:

// function calculateFinalBill(cart){

//  let TotalDiscount=0
//   cart.map((i)=>{
//     if(i.category=="electronics"){
//       discount=(price/10)*100

//     }
//     else if(i.category=="fashion"){
//       discount=(price/20)*100
//     }

//   }
// )

// let totalBeforeDiscount=0;
// let discount;
// let finalcart = 0;
// let finalBill;
// for(i in cart){
//    totalBeforeDiscount+=(cart[i].price *cart[i].quantity)
//    if(cart[i].category=="electronics"){
//       discount=(cart[i].price *cart[i].quantity)*0.10

//     }
//     else if(cart[i].category=="fashion"){
//       discount=(cart[i].price*cart[i].quantity)*0.20
//     }

//   TotalDiscount+=discount
 

    
//   }
//  finalcart=totalBeforeDiscount-TotalDiscount;

// if(finalcart>60000){

//  finalBill= finalcart -(finalcart*0.05)
//             //finalcart*0.95

// }
// else{
//   finalBill=finalcart
  
// }


// let output =
//   {
//   totalBeforeDiscount:totalBeforeDiscount ,
//   totalDiscount:TotalDiscount,
//   finalAmount: finalBill
// }
// return output
//   }


// console.log(calculateFinalBill(cart));


// {
//   totalBeforeDiscount: 57000,
//   totalDiscount: 8500,
//   finalAmount: 48500
// }

// ==========================================================================

// Q-Bank Account Fraud Detector

// Bank transactions:

// const transactions = [
//   { user: "Amit", amount: 5000, type: "debit" },
//   { user: "Amit", amount: 3000, type: "debit" },
//   { user: "Neha", amount: 20000, type: "debit" },
//   { user: "Amit", amount: 10000, type: "credit" },
//   { user: "Neha", amount: 5000, type: "credit" }
// ];


// Fraud Rule:
// If total debit of a user > 2 × total credit → mark as Fraud

// Write detectFraud(transactions) that returns:

// ["Amit"]



