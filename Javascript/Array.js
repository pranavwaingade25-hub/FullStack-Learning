console.log("Hello ji....!");

// let Studentlist = ["Pankaj" , "Shruti","Pranav","Sakashi"];
// console.log(Studentlist[0]);

// !__________________________________________________________________________________________________!

// let Studentinfo = ["Vishal" ,22 , true ,"OM"];
// console.log(Studentinfo);
// Studentinfo[1]=21;
// console.log(Studentinfo);

// !__________________________________________________________________________________________________!

// key =10 
// let key=10;
// const arr =[12,11,2,8,3,10,4];
// let flag=false
// for(let i=0;i<=arr.length; i++){
//     if(arr[i] == key){
//         console.log(`The Given value is found at index `+i);
//         flag=true  
//     } 
// }
// if(flag == false){
//     console.log("Elemnt not Found");
// }

// !__________________________________________________________________________________________________!

// let sum=0;
// let arr =[12,11,2,8,3,10,4];
// for(let i=0 ; i<=arr.length;i++){
//     sum+=arr[i];
//     console.log(sum);
// }

// !__________________________________________________________________________________________________!

// let Names=["Pankaj" , "Pranav " ,"Shruti" , "Sakashi"]
// for(let i=0 ;i<=Names.length;i++){
//     console.log(Names[i].toUpperCase());
// }

// !__________________________________________________________________________________________________!

// let attandance=["p","a","p","p","a"];
// let max=5
// let attend=0
// for(let i=0 ; i<=attandance.length;i++){
//     if("p" == attandance[i]){
//         attend++;
//     }
// }
// console.log(attend/max*100);

// !__________________________________________________________________________________________________!

// let elements=[12,50,30,31,22,90]
// let max =elements[0];
// let min = elements[0];
// for(let i=0; i<=elements.length;i++){
//     if(elements[i] >max){
//         max=elements[i];
//     }
//     if(elements[i]<min){
//         min=elements[i];
//     }
// }
// console.log(max);
// console.log(min);

// !__________________________________________________________________________________________________!

// let Duplicates =[2,4,5,2,7,4];
// for(let i=0; i<Duplicates.length;i++){
//     for(let j =i+1;j<Duplicates.length;j++){
//         if(Duplicates[i]== Duplicates[j]){
//             console.log(Duplicates[i]+" is Dupilc");
//         }
//     }
// }

// !__________________________________________________________________________________________________!

// let Friends =["Yash", "Anu","Panu",];
// console.log(Friends.push("Vishal"));
// console.log(Friends);
// console.log(Friends.unshift("Virat"));
// console.log(Friends);
// console.log(Friends.pop());
// console.log(Friends);
// console.log(Friends.shift());
// console.log(Friends);
// console.log(Friends.indexOf("Anu"));
// console.log(Friends.includes("Panu"));

// !__________________________________________________________________________________________________!

// let items= new Array("Mobile", "Headphones","Cover")
// console.log(items);

// !__________________________________________________________________________________________________!

// let stock=[10,0,5,0,8];
// let instock=[];
// stock.forEach((item) =>{
//     if(item != 0){
//         instock.push(item);
//     }
// });
// console.log(instock);

// !__________________________________________________________________________________________________!

// let inventary =["Mobile" ,"Tv"];
// let user=prompt("Enter the inevtary");
// inventary.forEach((item) =>{
//     if(inventary.includes(user) == true){
//         console.log("The give inventary is pressent");
//     }
// }) 

// !__________________________________________________________________________________________________!

// let wishlist=["Glasses","Shoes","Watch"];
// let user=prompt("Enter the demand:- ");
// let flag=false;
// // console.log(wishlist.includes(user));
// wishlist.forEach((item) =>{
//     if(wishlist.includes(user)==false){
//         wishlist.push(user);
//         flag=true;
//     }
// })
// if(flag == true){
//     console.log("The your recomdination are add");
//     console.log(wishlist);
// }
// else{
//     console.log("The item already exist");
//     console.log(wishlist)
// }

// !__________________________________________________________________________________________________!

// let arr= [10,0,5,0,8];

// arr.forEach((item) =>{
//      arr.reverse();

// });
// console.log(arr);
// let i=0
// let j=arr.length-1

// while(i<j){
//     let temp =0
//     temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;
//     i++;
//     j--;
// }
// console.log(arr);

// !__________________________________________________________________________________________________!


// let arr= [5,5,1,2];
// let temp;

// for(let i=0 ;i<arr.length-1;i++){
//     for(let j=i+1;j<arr.length;i++){
//         if(arr[i]>arr[j]){
//             temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// console.log(arr);

// !__________________________________________________________________________________________________!

// let arr = [1,2,3,4,0,5,9,7];
// let temp;


// for (let i = 0; i < arr.length; i++) {
//     let flag=false;
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//             flag=true
//         } 
//         if(flag== false){
//             break;
//         }   
//     }

// }

// console.log(arr);
// !__________________________________________________________________________________________________!


// MAPPING

// let arr=[2,6,1,8,5]

// console.log(
//     arr.map((element) =>{
//     return element*2;
// })
// ) ;

// console.log(arr);

// let ans=arr.map((element) =>{
//     return element*2;
// })
// console.log(ans);



// !__________________________________________________________________________________________________!

// let salaries=[10000,30000,40000,50000]


// let incremnts=salaries.map((salarie) =>{
//     return salarie+1000;
// })
// console.log(incremnts);

// !__________________________________________________________________________________________________!

// let fruits=["Apple","Banana","litchi","Kiwi"];

// let count= fruits.map((len) =>{
//     return len.length;
// })
// console.log(count);

// !__________________________________________________________________________________________________!

// Filter

// let marks=[50,20,75,10,65]

// let output=marks.filter((element) =>{
//     return element>30;
// })
// console.log(output);


// let nam =["Pankaj", "Anu" ,"Pranav" ,"Sonu"]

// let coun= nam.filter((element) =>{
//     return (element.length > 3)
// })
// console.log(coun);


// let marks = [50, 15, 10, 60]

// function final(arr) {
//     let addm = marks.map((mark) => {
//         return mark + 20;
//     })
//     return results = addm.filter((result) => {
//         return result > 40;
//     });
// }
// console.log(final(marks));

// !__________________________________________________________________________________________________!

// Reduse

// let arr = [10,50, 15, 5, 60]
// let Total=arr.reduce((sum,current) => {
//     sum =sum+current;
//     return sum;
// },0);
// console.log(Total);


// let arr = [10,50, 15, 5, 60]
// let Total=arr.reduce((sum,current) => {
//     sum =sum+current;
//     return sum/arr.length;
// },0);
// console.log(Total);

// let arr=[10,50,15,5,60]
// let final =arr.reduce((max,elments)=>{
//     if(elments > max){
//         max =elments
//     }
//     return max;
// },arr[0]);
// console.log(final);

// !__________________________________________________________________________________________________!


