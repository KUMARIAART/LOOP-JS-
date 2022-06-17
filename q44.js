//Write a program to check whether a number is palindrome or not.

const userInput=require("readline-sync");
let num=userInput.questionInt("enter any number:-");
let i=num;
let string="";
do{
    x=i%10;
    i=Math.floor(i/10)
    string+=x
}while(0<i)
if(string==num){
    console.log(num,"palindome number");
}
else{
    console.log(num,"not a palindrome number");
}
