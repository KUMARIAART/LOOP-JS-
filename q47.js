// Write a program to display sum of odd numbers and even numbers separately that fall between
//  two numbers accepted from the user.(including both numbers) 100 and 500.


const user=require("readline-sync");
let number1=user.questionInt("enter first number:-");
let number2=user.questionInt("enter second number:-");
var i=number1;
var even=0;
var odd=0;
while(i<=number2){
    if(i%2==0){
        even+=i
    }
    else{
        odd+=i
    }i++
}
console.log("sum of even numbers are",even);
console.log("sum of odd numbers are",odd);