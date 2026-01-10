console.log("Hello ")
console.log("lets start......!")

// for(let i=1 ;i<=5;i++){
//     console.log("Pranav"); 
// }
// let sum=0;
// for(let i=1;i<=10;i++){



//   if(i%2==0){
//     sum=sum+i;
//     console.log(sum);
//   }
// }

// let Y=2;
// for(let i=1 ; i<=10 ; i++){
//     let product=Y*i;
//     console.log(Y+"X"+i +"="+product);
// }

// for(i=1;i<=50;i++){
//     if(i%5==0){
//         if(i%3==0){
//             console.log(i);
//         }
//     }
// }

// let x= Number(prompt());
// let a=0;
// let b=1;
// let c;
// console.log(a)
// console.log(b)

// for(let i=1;i<=x;i++){
//     c=a+b;
//     console.log(c);
//     a=b
//     b=c

// }


// for(let i=1;i<=20 ;i++){
//     if(i%3==0 && i%5==0){
//         console.log(i);
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }



// for(let i=1 ; i<=5;i++){
//     if(i==3){
//         continue;
//     }else{
//         console.log("copy checked for:"+i);
//     }
// }


// reverse a Number

// let num=123;
// let reverse=0;

// while(num !=0){
//     let rem=num%10;
//     reverse = reverse*10 +rem;
//     num=Math.floor(num/10);
// }
// console.log(reverse);

// if(num===reverse){
//     console.log("The given number is palidrome");
// }
// else{
//     console.log("The given number is not palidrome");
// }


// let pass = 123;
// attempt = 0;
// while (attempt != 3) {
//     let user = Number(prompt("Enterh the password:- "));
//     if (pass === user) {
//         let balance = 25000;
//         while (true) {
//             console.log("Choose in the menuu:-");
//             console.log("1.creadit");
//             console.log("2.deabita");
//             console.log("3.show Balance");
//             console.log("4.exit");
//             let n = Number(prompt("You can chooses it:- "));

//             switch (n) {
//                 case 1:
//                     let x = Number(prompt("how many amount credited:- "));
//                     console.log(balance += x);
//                     break;

//                 case 2:
//                     let y = Number(prompt("How many add amount:- "))
//                     if (y <= balance) {
//                         console.log(balance -= y);
//                     }
//                     else {
//                         console.log("Please checekd your balnaced");
//                     }
//                     break;

//                 case 3:
//                     console.log("Your balanced is:-" + balance);
//                     break;

//                 case 4:
//                     break;

//                 default:
//                     console.log("Please choose in menu");
//             }

//         }
//         break;
//     }
//     else {
//         attempt++;
//     }
//     if (attempt === 3) {
//         console.log("You can come in 24hrs.");
//         break;
//     }

// }



// for(let i=5;i>=1;i--){
//      let output= "";
//      for(let j=1 ; j<=i-1;j++){
//          output+=j+"";
//      }
//      console.log(output)   
// }



// for(let i=1;i<=5;i++){
//      let output= "";
//      for(let j=1 ; j<=i;j++){
//          output+=j+"";
//      }
//      console.log(output)   
// }


// let row=5
// for(let i=1;i<=row;i++){
//     let spaces="";
//     for(let k=1; k<=row-i;k++){
//         spaces+=" ";
//     }
//      let output= "";
//      for(let j=1 ; j<=i;j++){
//          output+=j+"";
//      }
//      console.log(spaces+output)   
// }


// let user1 = Number(prompt("the number:- "));
// let Guess_status="Unmatched";
// let attempt=0;

// do{
//     let user2=Number(prompt("Guess the number:-"));
//     attempt++;
//     if(user2>user1){
//         alert("Guess a smaller number");
//     }else if(user2<user1){
//         alert("Guess the grater number");
//     }
//     else{
//         alert("hurry....!")
//         Guess_status ="mathched";
//     }

// }while(Guess_status != "mathched");

// console.log("Total attempts:- "+attempt);

