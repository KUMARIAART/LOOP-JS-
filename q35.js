//18. Write a program to convert binary to decimal.

const userInput=require("readline-sync");
let binary_num=userInput.questionInt("enter any number:-");
let sum=0;
let power=0;
for(let i=binary_num; 0<i; i=Math.floor(i/10)){
    a=i%10;
    sum=sum+(a*(2**power));
    power++
}
console.log(sum);