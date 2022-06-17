//9. Write a program to display all even numbers that fall between two numbers 
//(exclusive both numbers) entered by the user.

const user=require("readline-sync");
let number1=user.questionInt("enter any number:-");
let number2=user.questionInt("enter any number:-");

for (var i=number1; i<=number2; i++){
    if(i%2==0){
        console.log("even Numbers are",i);
    }
}