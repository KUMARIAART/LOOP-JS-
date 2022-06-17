//11. Write a program to find the sum of the digits of a number accepted from the user.

const user=require("readline-sync");
let number=user.questionInt("enter any number:-");
var i=number;
var sum=0;
do{
    a=number%10
    sum=sum+a
    number=Math.floor(number/10)
}while(0<number)
console.log(sum);
