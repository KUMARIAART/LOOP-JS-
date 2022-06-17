// Write a program to find the sum of the following series(accept values of x and n from user)
 
// x + x2/2 + ……….xn/n

const user=require("readline-sync");
let n=user.questionInt("enter a nth term :-");
let x=user.questionInt("enter value of x:-");
var sum = 0;
var i = 1;
while(i<=n){
    sum = sum + 2**i/i
    i++
}
console.log(Math.round(sum,2));

