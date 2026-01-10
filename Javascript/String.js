console.log("Hello jii....!");

// let str1="Pranav";
// let str2='Pranav';
// console.log(str1 == str2)

// String TEMPLATE literals  `....`

// let str3=`Pranav`;
// console.log(str1==str3)
// console.log(str2==str3)



// let str1= new String("Good Morning");
// console.log(str1);
// console.log(typeof str1);

// let str2=String("Good Morning");
// type coersion ---> it can automaticaly converts your data type

// console.log(str2);
// console.log(typeof str2);

// console.log(str1===str2);


// convertion menas changed manualy
// coersion menas changed automaticaly

// console.log('25'-'10'+3)
// console.log('25'+'10'+3)
// console.log('25'-'10'-3)


// console.log("20"*2);
// console.log('20'*'20');
// let num="2"+5;
// num -=1;
// console.log(num);


// let str1="I am str1";
// let str2="I am str2";
// console.log(str1);
// console.log(str1 .concat (str2))
// console.log(str1);
// console.log("Bherry" < "Cherry");
// console.log("Berry" < "Bingo");

// console.log("berry" < "Berry");
// console.log("$" < "&");


// let quote1="Hello ji Good Morning";
// let quote2="Hello  ji Good Morning!";
// console.log(quote1>quote2)

// let str1=`You are learning strings today
//         and we are enroll in mern stact`
// console.log(str1)


// let student1="Vishal"
// let student2="Shruti"
// let list= `List of my students include ${student1} and ${student2}`;
// console.log(list);

// let currentyear=2025;
// let birthyear=2000;
// let myintro =`My name is Pranav and I'll have ${currentyear - birthyear >20 ? "Wine" : "Water"} `;
// console.log(myintro)


// let youname= prompt("Enter you name");
// console.log(youname);
// console.log(youname.toUpperCase());
// console.log(youname.toLowerCase());


// let youname= prompt("Enter you name") .toUpperCase();
// console.log(youname)


// let sentence= "I am an Avenger called Ironman";
// console.log(sentence.includes("Avenger"));

// console.log(sentence.indexOf("a"))


// let sentence= "I am an Avenger called Ironman";

// console.log(sentence.slice(4));
// console.log(sentence.slice(-4));
// console.log(sentence.slice(4,15));
// console.log(sentence.slice(0,15));

// console.log(sentence.slice(15,4));
// console.log(sentence.substring(15,4));


// let Name = "Bantu"
// let reverse=Name.split("").reverse().join(" ");
// console.log(reverse);



// let str='I am leran in javav script';
//  console.log(str.replaceAll(" ","_"));




// let str2="aabbbcccc"
// let fre={};
// for(let i=0; i< str2.length ;i++){
//     let ch=str2[i];
//     fre[ch] = (fre[ch] || 0) + 1;
// }
// console.log(fre);


// Password -> special , Upper case , number

// let password = prompt("Please enter your password");
// let hasUpper = false;
// let hasLower = false;
// let hasNumber = false;
// let hasSymbol = false;

// for (let i = 0; i < password.length; i++) {
//     let ch = password[i];

//     if (ch >= 'A' && ch <= 'Z') {
//         hasUpper = true;
//     } else if (ch >= 'a' && ch <= 'z') {
//         hasLower = true;
//     } else if (ch >= '0' && ch <= '9') {
//         hasNumber = true;
//     } else {
//         hasSymbol = true;
//     }
// }

// if (hasUpper && hasLower && hasNumber && hasSymbol) {
//     console.log("Password is Strong");
// } else {
//     console.log("Password is Weak");
// }


// let str="Shruti madam zindabaad";
// let count=0;
// let longest_length=0;

// for(let i=0 ; i < str.length; i++){
//     count++;
//     if(str.charAt(i) ==" "){
//         if(count > longest_length){
//             longest_length=count -1;
//         } count=0;
//     }     
// }
// if(count >longest_length){
//     longest_length=count;
// }
// console.log(longest_length)

