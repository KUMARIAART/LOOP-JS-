// Write a program to accept 10 numbers from the user and display the largest & smallest number.

const userInput=require("readline-sync");
let i=1;
max=0;
min=0;
while(i<=10){
    var num=userInput.questionInt("enter any number:-");
    if(num>max || i==1){
        max=num;
    }
    if(num<min || i==1){
        min=num;
    }
    i++
}
console.log(max,"largest number");
console.log(min,"smallest number");
