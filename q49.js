// Write a program to find the sum of following series:
// 1 + 2 + 6 + 24 + 120 . . . . . n terms

const user=require("readline-sync");
let number=user.questionInt("enter any number:-");
var i=1;
var factorial=1;
var string="";
while(i<=number){
    factorial=factorial*i
    string+=factorial+" + "
    i++
}
console.log("factorial of",number,"is a",string);
