// Write a program to calculate the sum of the numbers of 1 to 100 .
// Like this 1+2+3+4 +5+6+7….+95+96+97+98+99+100
// then console sum of the numbers.
// Sample : input 100
// Samput : output 5050

const user=require("readline-sync");
var number=user.questionInt("enter any number:-");
// var sum=0;
// for (var i=1; i<=number; i++){
//     sum+=i
// }
// console.log("sum of numbers is ",sum);


// var i=1;
// var sum=0;
// while (i<=number){
//     sum+=i
//     i++
// }
// console.log("sum of numbers is",sum);


var i=number;
var sum=0;
do{ console.log("sum of numbers is",sum);
    sum+=i
    i--
}while (i>=1);
// console.log("sum of numbers is",sum);
