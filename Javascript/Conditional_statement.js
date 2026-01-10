console.log("Hello");

// let age=20;

// if(age >18){
//     console.log("Eligible to vote");
// }
// else{
//     console.log("You are not eligible");
// }
// console.log("End the Code");


// let cost=150;

// if(cost>200){
//     console.log("You have free Dilevery")
// }
// else{
//     console.log("your total amount");
//     console.log(cost+90);
// }


// let userpaswword =Number(prompt("please enter your password"));
// let failed_attempt = 0;

// if(userpaswword === "1234" && failed_attempt <3){
//     console.log("Wlecome to web");
// }
// else{
//     failed_attempt ++;
//     console.log("Logiend fail");
// }


// let tenth=85;
// let twelth=75;
// let college=5;
// let placemnet_exam="Pass";

// if(tenth > 80){
//     if(twelth>70){
//         if(college>7){
//             if(placemnet_exam =="Pass"){
//                 console.log("Placement Done");
//             }
//             else{
//                 console.log("Better luck next time")
//             }
//         }
//     }
// }


// let Salary=Number(prompt("Enter your salray"))
// let expirens= 5;
// let rateing=8;
// if(expirens >=2){
//     if(rateing >=5)
//     {
//         console.log("You have Bonus allocated");           
//     }
//     else{
//         console.log("Your rating is less than 5");
//     }   
// }
// else{
//     console.log("your expirens is less than 2");
// }


// let salray=30000;
// let cridit_scored=800;

// if(salray>=25000){
//     if(cridit_scored >=750)
//     {
//         console.log("you have allowed loan");
//     }
//     else{
//         console.log("Your creadit scored is less than 750");
//     }
// }
// else{
//     console.log("Your salary is less than 25000");
// }



// let userpaswword =Number(prompt("please enter your password"));
// let failed_attempt = 0;

// if(userpaswword === "1234" && failed_attempt <3){
//     console.log("Welcome to web");
// }
// else{
//     failed_attempt ++;
//     console.log("Logiend fail");
// }

// let num1=5
// let num2=10
// let num3=7

// if(num1>num2 && num1>num3){
//     console.log("Number 3 is greater")
// }
// else if(num2>num1 && num2>num3){
//     console.log("Number 3 is greater")
// }
// else{
//     console.log("Number 3 is greater")
// }

// let score=85;
// if(score>90){
//     console.log("A")
// }
// else if(score>80 && score<90){
//     console.log("B")
// }
// else if(score>70 && score<80){
//     console.log("C")
// }
// else if(score>60 && score<70){
//     console.log("D")
// }
// else{
//     console.log("Fail")
// }

// let score=85;
// if(score>90){
//     console.log("A")
// }
// if(score>80 && score<90){
//     console.log("B")
// }
// if(score>70 && score<80){
//     console.log("C")
// }
// if(score>60 && score<70){
//     console.log("D");
// }


// let units=350;

// if(units >1 && units <=100){
//     console.log(units*1);
// }
// else if(units >100 && units <=200){
//     console.log(((units-100)*2)+100)
// }
// else if(units >200 && units <=300){
//     console.log(((units-200)*3)+200+100)
// }
// else{
//     console.log(units*5)
// }


// let distance = 8
// let time = "yes"
// let peek_time = "5pm"


// if (distance > 1 && distance <= 5) {
//     if (peek_time == "5pm") {
//         if (time === "yes") {
//             let total = (((distance * 10) + 100) % 100) * 20
//             console.log(((distance * 10) + 100) + total)
//         }
//         else {
//             console.log((distance * 10) + 100)
//         }

//     }
//     else {
//         if (time === "yes") {
//             let total = (((distance * 10) + 50) % 100) * 20
//             console.log(((distance * 10) + 50) + total)
//         }
//         else {
//             console.log((distance * 10) + 50)
//         }
//     }
// }


// if (distance > 5) {
//     if (peek_time === "5pm") {
//         if (time === "yes") {
//             let total = (((distance * 8) + 100) % 100) * 20
//             console.log(((distance * 80) + 100) + total)
//         }
//         else {
//             console.log((distance * 8) + 100)
//         }
//     }
//     else{
//         if( time === "yes"){
//         let total=(((distance*8)+50)%100)*20
//         console.log(((distance*80)+50)+total)
//     }
//     else{
//         console.log((distance*8)+50)
//     }
//     }



// }



// swtich stastements

console.log("1.creadit");
console.log("2.deabita");
console.log("3.show Balance");
let n = Number(prompt("You can chooses it:- "));
balance = 25000;

switch ( n ) {
    case 1:
        let x = Number(prompt("how many amount credited:- "));
        console.log(balance + x);
        break;

    case 2:
        let y = Number(prompt("How many add amount:- "))
        if (y <= balance) {
            console.log(balance - y);
        }
        else {
            console.log("Please checekd your balnaced");
        }
        break;

    case 3:
        console.log(balance);
        break;

    default:
        console.log("Please choose in menu");
}