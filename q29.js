//12. Write a program to find the product of the digits of a number accepted from the user.

const user=require("readline-sync");
let number=user.questionInt("enter any number:-");
var product=1;
for(var i=number; 0<number; number=Math.floor(number/10)){
    a=number%10
    product=product*a
}
console.log(product);