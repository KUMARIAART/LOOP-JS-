// Write a program to find the sum of following series
// 1 + 8 + 27 …………n terms

const userInput=require("readline-sync");
let num=userInput.questionInt("enter any number:-");
let i=1;
let string="";
do{
    let seri=i**3;
    string+=seri+" + "
    i++
}while(i<=num)
console.log(string);
