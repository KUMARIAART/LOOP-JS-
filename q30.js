//13. Write a program to reverse the number accepted by the user.

const user=require("readline-sync");
let number=user.questionInt("enter any number:-");
var i=number;
var rev=0;
do{
    a=number%10
    number=Math.floor(number/10)
    rev=rev*10+a
}while(0<number)
console.log(rev);
