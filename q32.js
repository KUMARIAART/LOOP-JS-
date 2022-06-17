//15. Write a program to print the Fibonacci series till n terms (Accept n from user)
// (a series of numbers in which each number ( Fibonacci number ) is the sum of the two
//  preceding numbers. The simplest is the series 0,1, 1, 2, 3, 5, 8, etc.)

const user=require("readline-sync");
let number=user.questionInt("enter any number:-");
var x=0;
var y=1;
var z=0;
do{
    console.log(z)
    x=y
    y=z
    z=x+y
}while(z<=number)



var x=0;
var y=1;
for(var z=0; z<=number;z=x+y){
    console.log(z)
    x=y
    y=z
}
