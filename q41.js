//Write a program to print all the factors of a number using a while loop .
//The factors of numbers  are the numbers that divide Number exactly without leaving any remainder

const userInput=require("readline-sync");
let number=userInput.questionInt("enter any number:-");
let i=1;
do{
    if(number%i==0){
        console.log("factors of",number,"is",i);
    }
    i++
}while(i<=number)