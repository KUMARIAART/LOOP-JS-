//Accept two numbers from the user and display sum of even numbers between them(including both)

const user=require("readline-sync");
let number1=user.questionInt("enter first number:-");
let number2=user.questionInt("enter second number:-");
var even=0;
for(var i=number1; i<=number2;i++){
    if(i%2==0){
        even+=i
    }
}
console.log("sum of even numbers are",even);