// ==========1.===================
// function test1() {
// name = "fatma";
// console.log(name);   
// }
// test();//print fatma
// console.log(name);//print fatma

//==========2.===================
// function test2() {
//     "use strict"
// try{
// var x = "fatma";
// console.log(x);  
// }
// catch (error){console.log("Error",error.message);
// };

// }
// test2();//fatma
// console.log(x);//error

//==========3.===================
// function test3() {
//     "use strict"
//     var localVar = "test"
//     try{
//         delete localVar;//error
//     }
//     catch(error){
//         console.log("Error",error.message);

//     }

// }

// var obj={name:"fatma"}
// console.log(obj);
// delete obj.name;
// console.log(obj);
//==========4.==================
// console.log(x);//undefined
//  var x = 10; 
//  console.log(x);//10
//==========5.==================
// // //Case 1 
//  sayHi();//Hi
//  function sayHi() { 
// console.log("Hi"); }
// //  // Case 2 
//  //sayBye();//not function
//   var sayBye = function () {
//      console.log("Bye"); };
//==========6.==================
// console.log(a);
//  let a = 5;//Error let==> مش بيتعمله hoisting
//==========7.==================
// var n = 1;
//  function demo() {
//       console.log(n);//undefined
//         var n = 2; 
//          console.log(n); //2
//     }
//        demo();
//         console.log(n);//1
//==========8.==================
// function test4(){


// if(5>4)
// {
//     var s="fatma";
//     console.log(s);
// }
// console.log(s);
// }
// test4();
// console.log(s);//error
//==========9.==================
// function test4(){


// if(5>4)
// {
//     let s="fatma";
//     console.log(s);
// }
// console.log(s);//error
// }
// test4();

//==========10.==================
// var num=5;
// var num= "fstma";
// let x=4;
// let x="fatma";//error
//==========11.==================
// const student = {name:"fatma",age:20,city:"cairo"};
// console.log(student);

// student.age=21;
// console.log(student);
// student.grade=90;
// console.log(student);
// delete student.city;
// console.log(student);
// try{
//     student={fname:"fatma"}
// }
// catch(error){console.log("Error",error.message);//assign to const
// }
//==========12.==================
// const nums = [1,2,3]
// console.log(nums);

// nums.push(4);//allowed
// console.log(nums);
// nums[0]=10;//allowed
// console.log(nums);
// nums=[20,30,40];//not allowed
//==========13.==================
// var a; //valid
// let b; //valid
// const c; //not valid===>must assign value 
//==========14.==================
//  var g1 = "var global";
//  let g2 = "let global";
//  const g3 = "const global";
//  console.log(window.g1);//exist
//  console.log(window.g2);//not exist
//  console.log(window.g3);//not exist
//==========15.==================
// const handlers = {};
// for (let i = 0; i < 3; i++) { //let is block scope, var is function scope
//     handlers["fn" + i] = function () {
//         return "index: " + i;
//     };
// }
// console.log(handlers.fn0());
// console.log(handlers.fn2());
//==========16.==================
// function welcome(name) {
//      return "Welcome, " + name + "!"; }


//  var welcome = name =>`Welcome,${name} !`;
//  console.log(welcome("fatma"));


//==========17.==================
// var fullInfo = (first, last, age)  => `${first} ${last} is ${age} years old`;
// console.log(fullInfo("fatma","Elghoury",21));

//==========18.==================
// var multiply = (a,b)=>a*b;
// var sum = (a,b)=>`${a} + ${b} = ${a+b}`
// console.log(multiply(2,4));
// console.log(sum(2,4));
//==========19.==================
// const product = {
//     title: "Laptop",
//     price: 15000,
//     inStock: true,
//     brand: "Dell"
// };
// const {title,price,inStock}=product;
// console.log(title);
// console.log(price);
// console.log(inStock);

//==========20.==================
// var arr = ["HTML", "CSS", "JS", "React"];
// var [item1,item2]=arr;
// console.log(item1);
// console.log(item2);
//==========21.==================
// function  greet (name = "Guest", message = "Hello")
// {
//     return `${message}, ${name}`;
// }
// console.log(greet("fatma","welcome"));
// console.log(greet("fatma"));
// console.log(greet());
//==========22.==================
// function sumAll(...numbers){
//     var total=0;
//     for(let i=0;i<numbers.length;i++){
//         total+=numbers[i];
//     }
//     return total;
// }
// console.log(sumAll(1, 2, 3));
// console.log(sumAll(10, 20, 30, 40));


//==========23.==================
// var arr1 =[1,2];
// var arr2 =[3,4,5];
// var merge =[...arr1,...arr2];
// console.log(merge);
// var arr4 =  [10, 20, 30];
// var arr4copy=[...arr4];
// arr4copy.push(40);
// console.log(arr4);
// console.log(arr4copy);

//==========24.==================
// const user = { name: "Sara", age: 22 }; 
// const contact = { email: "sara@nti.com", age: 23 };
// var merged={...contact,...user};//take the age of first item
// console.log(merged);

//==========25.==================
// const values = [2, 4, 6, 8];
//  function total(a, b, c, d) {
//      return a + b + c + d; }
//      console.log(total(...values));

//==========26.==================
// let person1 = { name: "Ali", child: { age: 5 } };
// //  let person2 = person1;//not copy,bpth of two object see the same reference in memory
// //   person2.name = "Omar"; //person1.name ="Omar"
// // console.log(person1.name);

// let person2={...person1};//right copy
// person2.name = "Omar"; 
// console.log(person1.name);//Ali 
//==========27.==================
// const original = {
//     name: "Mona",
//     details: { city: "Cairo" }
// };

// let shallow_copy = { ...original };//copy on one level
// shallow_copy.name = "fatma";//original no affect
// shallow_copy.details.city = "giza";//original affect
// console.log(original);
// console.log(shallow_copy);

//==========28.==================
// const original = {
//     name: "Mona",
//     details: { city: "Cairo" }
// };

// let shallow_copy = structuredClone(original);
// shallow_copy.name = "fatma";//original no affect
// shallow_copy.details.city = "giza";//original no affect
// console.log(original);
//  console.log(shallow_copy);
//==========29.==================
// var obj = {
//     name: "Ahmed",
//     age: 26,
//     city: "Alex"
// }
// let stringObj= JSON.stringify(obj);
// localStorage.setItem("userdata",stringObj);
// localStorage.getItem("userdata");
// let reternObj=JSON.parse(stringObj);
// console.log(`${reternObj}: ${typeof(reternObj)}`);

// localStorage.clear();
//==========30.==================
// const  APP_CONFIG={
//      name :"mvc",
//       version:5,
//       api: { 
//         baseUrl:"http:google.com",
//         timeout:5
//      }
// }
// APP_CONFIG.api.timeout=6;
// APP_CONFIG.features=[1,2,3,4];
// console.log(APP_CONFIG);
// try{
//     var obj={};
//     APP_CONFIG=obj;

// }
// catch(error){console.log("error",error.message);
// };

//==========31.==================
// function  createCard(title, price = 0, ...tags){
//     var obj= {
//         Title : title,
//         Price : price,
//         Tags:tags

//     }
//     console.log(`${obj.Title} - ${obj.Price} EGP`);
//     return obj;
// }
// var obj2= createCard("TimeManagement",250)
// console.log(obj2);
// var obj2= createCard("Laptop",15000)
// console.log(obj2);

//==========32.==================
const students = [ 
    { name: "Omar", grade: 80 }, 
    { name: "Mona", grade: 90 }, 
    { name: "Ali", grade: 70 } 
];

for(const { name, grade } of students){
    console.log(`${name} scored ${grade}`);
}