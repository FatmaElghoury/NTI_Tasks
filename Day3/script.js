// //////////========1.============ 
//  var full_name = "FatmaElghoury";
//  console.log(full_name.length);
//   //////////========2.===========
//  var message = "I am learning javaScript";
//  console.log(message.toUpperCase());
//  console.log(message.toLowerCase());
//   //////////========3.===========
//  var email = "fatma@gmail.com";
//  var exist = email.includes("@");
//  console.log(exist ? "The string contain @" :
//      "The string doesn't contain @");
//   //////////========4.===========
//  var s ="javaScript";
//  console.log(`in javascript first char is ${s[0]},and last char is  ${s[s.length-1]}`);
//   //////////========5.===========
//   var str1 = "This is a bad day.";
//   console.log(str1.replace("bad","good"));
//   //////////========6.===========
//   var str2 = "I love coding";
//   var strArr=str2.split(" ");
//   var str3 = strArr.join("_");
//   console.log(`the orignal string is: ${str2}.`);
//   console.log(`the string to array is: ${strArr}.`);
//   console.log(`the array to string is: ${str3}.`);
//   //////////========7.===========
//   var str4 = " nti egypt training ";
//   console.log(str4.trim());
//   console.log(str4.toUpperCase());
//   console.log(str4.replace("egypt","CAIRO"));
//   //////////========8.===========
//   var num = "45.8";
//   console.log(`${Number(num)} is ${typeof(Number(num))}`);
//   //////////========9.===========
//   var num1 = 7.6;
//   console.log(Math.round(num1));
//   console.log(Math.floor(num1));
//   console.log(Math.ceil(num1));
//   //////////========10.===========
//   console.log(Math.max(12,5,28,9));
//   console.log(Math.min(12,5,28,9));
//   //////////========11.===========
//   console.log(Math.random()*19+1);
//   //////////========12.===========
//   console.log((19.4567).toFixed(2));
//   //////////========13.===========
//   var sum = 0;
//   var n1=Math.random()*49+1;
//   var n2=Math.random()*49+1;
//   var n3=Math.random()*49+1;
//   var n4=Math.random()*49+1;
//   var n5=Math.random()*49+1;
//   sum=n1+n2+n3+n4+n5;
//   console.log(Math.max(n1,n2,n3,n4,n5));
//   console.log(Math.min(n1,n2,n3,n4,n5));
//   console.log(sum/5);
//   //////////========14.===========
//   for(var i=1;i<=20;i++){console.log(i);}
//   //////////========15.===========
//   for(var i=1;i<=15;i++){
//      if(i%2!=0)
//          console.log(i);
//      }
//   //////////========16.===========
//    var count = 10;
//    while(count>0){ 
//        console.log(count);
//        count--
//    }
//   //////////========17.===========
//   var names = ["Sara","Omar","Mona","Youssef"];
//   for (var item of names) {
//       console.log(item);  
//   }
//   //////////========18.===========
//   for (var i = 1; i<=10; i++) {
//     if(i==7)
//       break;
//   else
//        console.log(i);    
//   }
//   //////////========19.===========
//   for (var i = 1; i <= 3; i++) {
//       for (var j = 1; j <= 3; j++) {
//           console.log(`${i} * ${j} = ${i * j}`);
//       }
//       console.log("");
//   }
//   //////////========20.===========
//   for (var i = 1; i<=30; i++)
//       {
//           if(i%3==0)
//               continue;
//           if(i==25)
//               break;
//           console.log(i);
        
//     }
//   //////////========21.===========
//    var word = "HELLO";
//    var wordArr = word.split("");
//    for (var i = 0; i<wordArr.length; i++){
//        console.log(wordArr[i]); 
//    }
//   //////////========22.===========
//   var total = 0;
//   var numArr = [10,20,30,40];
//   numArr.forEach(function (item) {
//       total += item;
//   }); 
//   console.log(total);
//   //////////========23.===========
//   var str5 = "JavaScript is Amazing and awesome"
//   var count = 0;
//   for (var i = 0; i<str5.length; i++)
//   { 
//       if (str5[i].toLowerCase()=="a")
//           count++;

//   }
//   console.log(count);

//   //////////========24.===========
//   var gradeArr = [70,85,92,77,88];
//   gradeArr.forEach(element => {
//       if(element%2==0)
//       console.log(element);

//   });
//   //////////========25.===========
//   for (var i = 1; i <= 4; i++) {
//       var stars = "";
//         for (var j = 1; j <= i; j++) {
//             stars +="*"
//         }
//         console.log(stars);
//     }
//   //////////========26.===========
var studentsNames = ["Sara","Omar","ahmed","Youssef","laila","hassan"];
studentsNames.forEach(element => {
    var item = element.toUpperCase();
    if(item.startsWith("A")||item.startsWith("S"))
        console.log(item);
        

});