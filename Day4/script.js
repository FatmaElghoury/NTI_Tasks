//  // ==============1.================
//  var car = {
//      brand : "BMW",
//      model : "X5",
//     // year : 2025,
//      color : "Red"
//  }
//  console.log(car);
//  // ==============2.=================
//  console.log(`car brand is ${car.brand}.`);
//  //console.log(`car year is ${car["year"]}.`);
//  // ==============3.=================
//  car.color = "Black";
//  car.price = 500000;
//  console.log(car);
//  // ==============4.=================
//  console.log(car.year);//undefined
//  //==============5.=================
//  var student = {
//      ["student-name"]:"Sara",
//      age : 20
//  }
//  console.log(`student-name is ${student["student-name"]}`);
//  //==============6.=================
//  var book = {
//      title : "time Magement",
//      auther : {
//          firstName : "fatma",
//          lastName : "elghoury"
//       }
//  }
//  console.log(book.auther.lastName);
//  //==============7.=================
//  var data = { name: "Ali", age: 25, city: "Cairo" }
//  console.log(Object.keys(data));
//  console.log(Object.values(data));
//  console.log(data.hasOwnProperty("jop"));
//  //==============8.=================
//  var settings = {
//      theme: "dark",
//      lang: "en"
//  }
//  Object.freeze(settings);
//  settings.theme = "light";//مش هتاثر
//  settings.fontSize = 16;//مش هتاثر
//  console.log(settings);//هيطبع الاوبجيكت بالقيم الأولى 
//  // ==============9.=================
//  var city_names = ["cairo","alex","giza","aswan","sharm"];
//  console.log(city_names);
//  console.log(`number of them is: ${city_names.length}`);
//  //==============10.================
// console.log(` first city ${city_names[0]}, the second city ${city_names[1]}, and the last city ${city_names[city_names.length-1]}`);
// //==============11.================
// console.log(city_names);
// city_names.push("faiuom");
// console.log(city_names);
// city_names.unshift("siwa");
// console.log(city_names);
// //==============12.================
// city_names.pop();
// console.log(city_names);
// city_names.shift();
// console.log(city_names);
// //==============13.================
// var front = ["HTML", "CSS", "JS", "React"];
// console.log(front.indexOf("JS"));
// console.log(front.includes("Python"));
// //==============14.================
// var suplies = ["pen", "book", "bag"] ;
// suplies.forEach(element => {
//     console.log(element,`${suplies.indexOf(element)}`);

// });
// //==============15.================
//  var colors = ["red", "green", "blue", "yellow"];
//  for (const element of colors) {
//     if(element=="blue")
//         break;
//     console.log(element);

//  }
// //==============16.================
// var char = ["A", "B", "C"];
// char.push("D","E");
// char.shift();
// console.log(char);
// //==============17.================
// var fruits = ["apple", "banana", "cherry"];
// var upper = fruits.map(function(val){return val.toUpperCase()});
// console.log(fruits);
// console.log(upper);
// //==============18.================
// var numbers = [10, 55, 30, 80, 45, 90];
// var filtered = numbers.filter(function(val){return val>50});
// console.log(numbers);
// console.log(filtered);
// //==============19.================
// var gov = ["Cairo", "Giza", "Alex", "Aswan"];
// console.log(gov.findIndex(function(val){return val.startsWith("A")}));
// //==============20.================
// var ch = ["a", "b", "c", "d", "e"];
// var s = ch.slice(1,4);
// console.log(ch);
// console.log(s);
// //==============21.================
// var nums = ["one", "two", "three", "four", "five"];
// var spliced = nums.splice(1,2);
//  console.log(nums);
//  console.log(spliced);
// //==============22.================
// var unsortedarr = [40, 100, 1, 5, 25];
// var sortedarr = unsortedarr.toSorted(function(a,b){return a-b});//a-b==>ascending, b-a==>descending
// console.log(unsortedarr);
// console.log(sortedarr);
// //==============23.================
// var ages = [16, 21, 17, 19];
// console.log(ages.some(function(val){return val>=18}));//true
// console.log(ages.every(function(val){return val>=18}));//false
// //==============24.================
// var arr = [5, 10, 15, 20];
// console.log(arr.reduce(function(acc,n){return acc+=n},0));
// //==============25.================
// var students = [
//      { name: "Omar", grade: 80 },
//      { name: "Mona", grade: 90 }, 
//      { name: "Ali", grade: 70 }]
//      students.forEach(element => {

//         console.log(element.name,element.grade);

//      });
// //==============26.================
// var x = students.filter(function(obj){return obj.grade>=80});
// console.log(x.map(student=>student.name));
// //==============27.================
// var product = [
//     {
//         name: "book",
//         price: 100
//     },
// {
//         name: "labtop",
//         price: 15000
//     },
// {
//         name: "phone",
//         price: 9000
//     },
// {
//         name: "chair",
//         price: 500
//     },
// {
//         name: "car",
//         price: 500000
//     }]
//   var  total =  product.reduce(function(acc,n){return acc+=n.price},0);
//   console.log(total);

// //==============28.================
// var arr1 = ["js", "html", "css", "js", "react", "js"];
// var count=0;
// for (var i = 0; i<arr1.length; i++) {
//     if(arr1[i]=="js")
//         count++;
// }
// console.log(count);

// //==============29.================
// var classroom = {
//     teacher: "sabrin",
//     students: ["farah", "sondos", "msk", "sara"]
// }
// console.log("teacher name: ", classroom.teacher,
//     ". number of students: ", classroom.students.length,
//     ". last student name: ", classroom.students[classroom.students.length - 1]);

// //==============30.================
// var details = [{ id: 1, title: "Pen", price: 10 },
// { id: 2, title: "Book", price: 50 },
// { id: 3, title: "Bag", price: 25 }];

// var tit = details.map(val => val.title.toUpperCase());
// console.log(tit);

// var price = details.reduce(function(acc,n){return acc+=n.price},0)
// console.log(price);
