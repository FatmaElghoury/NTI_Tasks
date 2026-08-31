console.log("JS is running successfully");

window.alert("Ready to practice!");


var productName = "Laptop";
var price = 15000;
var isAvailable = true;
console.log("type of " + productName + " is " + typeof (productName));
console.log("type of  " + price + " is " + typeof price);
console.log("type of  " + isAvailable + " is " + typeof isAvailable);

document.getElementById("mainTitle").innerHTML = "Practice Time";

var city = "Cairo";
var country = "Egypt";

console.log(city , country);
console.log(`Location: ${city} - ${country}`);


var itemPrice = 120;
var quantity = 3;
console.log(itemPrice * quantity);
console.log(400-(itemPrice * quantity));
console.log(itemPrice * quantity);
console.log(itemPrice / quantity);
console.log(itemPrice % quantity);
console.log(quantity**2);
//Your favorite color is: COLOR 
var COLOR=window.prompt("Enter Your Favorite color.");
console.log(`Your favorite color is:  ${COLOR} `);

var score = 20 ;
var textScore = "20";
console.log(score == textScore );
console.log(score === textScore );
console.log("== check only the value, but === check the value and datatype.");

var item=window.prompt("Enter number of items.");
console.log(typeof(+item) );
console.log(typeof(parseInt (item)));
console.log(typeof(Number(item)));


var fruits = ["apple", "banana", "mango"];
console.log(fruits[1]);
fruits[1]="orange";
fruits.push("grape");
console.log(fruits);

var course = {title : "front-end" , hours : 120, level:3};
course.title="database";
console.log(course.hours);
console.log(course);

var hasAccount = true;
var isVerified = false;

console.log(hasAccount && isVerified);
console.log(hasAccount || isVerified);
console.log(!isVerified);

var balance = 50;
balance += 30;
balance *= 2;
balance -= 20;
console.log(balance);

var Hotel = window.prompt("Enter Hotel Name: ");
var Nights = window.prompt("Enter Number Of Nights: ");
var Confirmed = window.confirm("Is Confirmed: ");
var message = `Hotel: ${Hotel}, Nights: ${Nights}, Confirmed: ${Confirmed}`
console.log(message);
window.alert(message)


console.log(2 + 8 + "0"); //100
console.log("2" + 8 + 0); //280
console.log(2 + "8" + 0); //280

var city1 = "Alex";//متغير اسمه city1 فيه قيمة Alex
var city2 = city1;//متغير تانى هياخد قيمته نسخة من المتغير الاول 
city2 = "Giza";//غير قيمة المتغير التانى الى  الجيزة ودة مش هيأثر على المتغير الاول
//اprimitive  ===>value type not refrence 
console.log(city1, city2);

//nonprimitive  ===>refrence type   
var car1 = { brand: "Toyota" };
var car2 = Object.assign({},car1);
car2.brand = "Honda";
console.log(car1, car2);


var mixedBag = ["fatma", 21,true,null,undefined,{age:30},[1,2,5]];

console.log(typeof(mixedBag[0]));
console.log(typeof(mixedBag[1]));
console.log(typeof(mixedBag[2]));
console.log(typeof(mixedBag[3]));///historical bug
console.log(typeof(mixedBag[4]));
console.log(typeof(mixedBag[5]));
console.log(typeof(mixedBag[6]));

var Name = window.prompt("Enter Your Name: ");
var Cost = Number(window.prompt("Enter Price: "));
var isConfirmed = window.confirm("Is Confirmed: ");
console.log(typeof(Cost));
var message = `Name is: ${Name}, Price is: ${Cost}, Confirmed: ${isConfirmed}`
console.log(message);
window.alert(message);
document.getElementById("result").innerText =message;




var num1 = Number(window.prompt("Enter First Number: "));
var num2 = Number(window.prompt("Enter Second Number: "));
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;
console.log(a + b + c + d + e);//90603030
console.log(a + b + +c + d + e);//210

var a = "15";
var b = 15;
var c = null;
var d;
var e = [15];
var f = { value: 15 };
console.log("a =",a , typeof(a) , a== 15 , a=== 15);
console.log("b =",b , typeof(b) , b== 15 , b=== 15);
console.log("c =",c , typeof(c) , c== 15 , c=== 15);
console.log("d =",d , typeof(d) , d== 15 , d=== 15);
console.log("e =",e , typeof(e) , e== 15 , e=== 15);
console.log("f =",f , typeof(f) , f== 15 , f=== 15);

var product = window.prompt("Enter productName:");
var b = window.prompt("Enter brand");
var p = Number(window.prompt("Enter price"));
var cat = window.prompt("Enter category");
var confirmation = window.confirm("Is this product in stock?");

var productInfo =
{
    productName : product,       
    brand:b,
    price:p,
    category:cat
};

var m = `productName = ${productInfo.productName},
brand = ${productInfo.brand},
 price = ${productInfo.price},
 category = ${productInfo.category},`
console.log(m);
window.alert(m);
document.getElementById("result").innerText =m;
