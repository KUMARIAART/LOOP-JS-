// Write a program to add first n terms of the following series using a while loop :
// 1/1! + 1/2! + 1/3! + …….. + 1/n!

const user=require("readline-sync");
let num=user.questionInt("enter any number:-");
let sum = 0;
let fact = 1;
let i = 1;
do{
    fact= fact*i
    sum= sum + i/fact
    i++
}while(i < num);
console.log("Sum is       :    ",Math.round(sum, 2));


