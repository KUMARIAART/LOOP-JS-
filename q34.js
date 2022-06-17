//17. Write a program to check whether a number is Armstrong or not. (Armstrong number is 
//a number that is equal to the sum of cubes of its digits, for example : 153 = 1^3 + 5^3 + 3^3.)

const userInput=require("readline-sync");
let num=userInput.questionInt("enter any number:-");
let sum=0;
let i=num;
while(0<i){
    a=i%10;
    sum=sum+(a**3);
    i=Math.floor(i/10);
}
if (num==sum){
    console.log(num," is a Armstrong number");
}
else{
    console.log(num," is not a Armstrong number")
}
