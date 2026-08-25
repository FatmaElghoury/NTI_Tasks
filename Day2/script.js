//////==========practice in the session
function sayHello(){

    window.alert("Hello");
}

var x=Number(window.prompt("Enter number"));
switch(x){
case 1:
    console.log("number is one");
    break;

    case 2:
    console.log("number is two");
    break;
default:
console.log("number not one or two");

}

var x=[10,20,30];
var sum =0;
for(var item of x){
sum+=item;

}

var len =x.length;
var avg = sum/len;
console.log(avg);

//////===========task

for(var i=1;i<=10;i++){console.log(i);}

//////===========

for(var i=2;i<=20;i+=2){console.log(i);}

//////===========

var total_Sales = 0;
for(var i=1;i<=15;i++)
    {total_Sales+=i;}
console.log(total_Sales);

//////===========

var i=1;
while(i<=7){console.log(i);i++}

//////===========

var i=8;
while(i>=1){console.log(i);i--}

//////===========

var i=1;
do{console.log(i);
    i++
}while(i<=5);

//////===========

var itemsInCart = 10;
do {///هتشتغل مرة واحدة
    console.log("Start Shopping");
    itemsInCart--;
} while (itemsInCart < 5);
////========
while (itemsInCart < 5) {//مش هتشتغل عشان الشرط مش متحقق
    console.log("Start Shopping");
    itemsInCart--;
}

////=======================

 var userName = "Ali";
 var userAge = 22 ;
 var isStudent = true;

 console.log(`UserName: ${userName} its type is ${typeof(userName)}`);
 console.log(`UserAge: ${userAge} its type is ${typeof(userAge)}`);
 console.log(`IsStudent: ${isStudent} its type is ${typeof(isStudent)} `);

//////===========

var dbPrice = 10 ;
var inputPrice = "10";
console.log(dbPrice==inputPrice);//هيقارن القيمة فط و هيطلع true
console.log(dbPrice===inputPrice);//هيقارن القيمة و النوع وهيطلع false

////===========

var name = window.prompt("what is your name: ");
console.log(`Welcome, ${name}`);
window.alert(`Welcome, ${name}`)

///============

var items = window.prompt("what is the number of items: ");
var itemNumer1=+items;
console.log(typeof(itemNumer1));
var itemNumer2=Number(items);
console.log(typeof(itemNumer2));
var itemNumer3=parseInt(items);
console.log(typeof(itemNumer3));

/////////=============

 var a = 10;
 var b = 3;

 console.log(`${a} + ${b} = ${a+b}`);
 console.log(`${a} - ${b} = ${a-b}`);
 console.log(`${a} * ${b} = ${a*b}`);
 console.log(`${a} / ${b} = ${a/b}`);
 console.log(`${a} % ${b} = ${a%b}`);
 console.log(`${a} ** ${b} =${a**b}`);


///////============

var Age = Number(window.prompt("what is your Age: "));
if(Age >= 18 )
{console.log("You can enter");}
else{console.log("Sorry, underage");}

///=============

var grade = Number(window.prompt("what is your grade : "));
if(grade>=90)
{console.log("A");}
else if(grade>=80)
{console.log("B");}
else if(grade>=70)
{console.log("C");}
else if(grade>=60)
{console.log("F");}

////=============

 var age = Number(window.prompt("what is your Age: "));
 console.log(age>=18?"Adult":"Minor");

//////===========

var day = window.prompt("Enter a day: ");
switch(day)
{
    case "Sunday":
        console.log(" Sunday weekend");
        break;

    case "Saturday":
        console.log(" Saturday weekend");
        break;

    case "Monday":
        console.log(" Monday ");
        break;

    case "Friday":
        console.log(" Friday ");
        break;

    default:
        console.log(" not a day");
        break;
}

/////============

for(var i=1; i<11;i++)
    {
        console.log(`${i} * 50 = ${i*50}`);

    }


/////============

var size = Number(window.prompt("Enter file's size: "));

if(size > 0)
    {
        for(var i=1;i<=size;i++)
            {
                console.log(i);

            }
    }
else console.log("Invalid file size");

//////===========

var start = Number(window.prompt("Enter a start number: "));
var end = Number(window.prompt("Enter an end number: "));
for (var i = start; i<=end ; i++) {
    if(i%2==0)
        console.log(`${i},express`);
    else
        console.log(`${i}:normal`);
}

/////==========

var names = ["fatma","assma","sondus","adm","anas","aser"];
for (var i = 0; i < names.length; i++) {
   console.log(`Student ${i+1}: ${names[i]}`);

}
///////////=======

var sum = 0;
for(var i=1;i<=5;i++)
{
   var num = Number(window.prompt(`Enter ${i} number`)) ;
    sum+=num;
}

console.log(`sum is: ${sum}, avg is: ${sum/5}`);

///////============

var correctPin = "1234" ;
var attempts = 0;
while(attempts<3)
    {
        var pin = window.prompt("Enter your Pin: ");
        if(pin==correctPin)
        {console.log("login succesfully.");
            break;
        }
        else console.log("failed");

        attempts++

    }

/////========

var hasAccount = true;
var isVerified = false;

if(hasAccount)
 {
    if(isVerified)
        console.log("Welcome back");
    else
        console.log("Please verify your account");   
 }
 else
    console.log("Please sign up");

///////============

var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;
var sum = a + b + +c + d + e;
console.log(sum);
if(sum<=20)
{
    for(var i=1; i<=sum;i++)
        console.log(i);

}
else console.log("Too big to print line by");

//////////===========

var n = Number(window.prompt("enter a number:"));
console.log(n);

var fact = 1;

if (n == 0) {
    console.log(1);
}

else if (n > 0) {

    for (var i = n; i > 1; i--) {
        fact *= i;
    }
    console.log(`${n}! = ${fact}`);
    window.alert(`${n}! = ${fact}`);
}

else
    {console.log("invalid");}



