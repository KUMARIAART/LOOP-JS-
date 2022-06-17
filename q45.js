//Write a program to accept 10 numbers from the user and display it’s average.


const user=require("readline-sync");
var i=1;
var sum=0;
do{
    let numbers=user.questionInt("enter any number:-");
    sum=sum+numbers
    i++
}while(i<=10)
var average=sum/10;
console.log("average of 10 numbers",average);
