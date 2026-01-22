console.log("hello");

// function sum(a, b) {
//   return a + b;
// }

// function calculator(a, b, callback) {
//   return callback(a, b);
// }

// console.log(
//   calculator(2, 3, (a, b) => {
//     return 2 + 3;
//   }),
// );

// console.log(
//   calculator(5, 3, function (a, b) {
//     return a - b;
//   }),
// );

//call back function means the parents function innerside functions is called as callback functions.



//========================================================================================================================
//callback hell
// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("Data for" + " " + dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 3000)
// }

// console.log("getting data for id 1");
// getData(1, () => {
//     console.log("getting data for id 2");
//     getData(2, () => {
//         console.log("getting data for id 3");
//         getData(3, () => {
//             console.log("getting data for id 4");
//             getData(4, () => {
//                 console.log("getting data for id 5");
//                 getData(5);
//             });

//         });

//     });

// });


//========================================================================================================================
//Promises  -> APt call
//   |
//   |        -->pending
// Object ---|-->fullfill   --->.then
//            --> reject    --->.catch

// const result= new Promise((resolve,reject)=>{
//     console.log("hello user your phone is deliverd");
//     setTimeout(() => {
//         const re=true;
//         if(re){
//             resolve("Order deliver on time");
//         }
//         else{
//             reject("Order nor deliver due to rain")
//         }
        
//     }, 10000);
// })

// result.then((resolve)=>{
//    console.log(resolve);
//    console.log("Mail is sent in your inbox");
// })

// result.catch((reject)=>{
//     console.log(reject);
//     console.log("Refund is applied for your order..!");

// })

//****************************************************************************************************************

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data for: "+dataId);
//             resolve("Success");
           
//         },2000);
//     })
// }
// console.log("getting Data for id 1");
// getData(1).then(()=>{
//     console.log("getting Data for id 2");
//     getData(2).then(()=>{
//         console.log("getting Data for id 3");
//         getData(3).then(()=>{
//             console.log("getting Data for id 4");
//             getData(4);
//         });
//     });
// });


//===============================================================================================================

//

// async function instagram(){
//     console.log("welcome user");
// }

// let result=instagram();
// console.log(result);


// function apiDelhi(){
//      return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather data for Delhi");
//             resolve("Data captured");
//         }, 6000);
//      })
// }

// function apiPune(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather data for Pune");
//             resolve("Data captured");
//         }, 3000);
//      })

// }

// function apiChennai(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather data for Chennai");
//             resolve("Data captured");
//         }, 4000);
//      })

// }

// console.log("Template loading")

// async function weatherApplication(){
//     await apiDelhi()
//     await apiPune()
//     await apiChennai();
// }

// console.log("Template loaded ,program exit");
// weatherApplication();


function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data for : " + dataId);
      resolve("Success");
    }, 2000);
  });
}

async function getAllData() {
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4);
}

getAllData();

