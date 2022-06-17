//8. Write a program to print a table of a number entered from the user.

const user=require("readline-sync");
let number=user.questionInt("enter any number fore table:-");

var i=1
do{
    console.log(number+"x"+i+"="+number*i);
    i++

}while(i<=10)