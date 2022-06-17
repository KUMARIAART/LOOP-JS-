// Write a program to find the sum of following series:
// S = 1 + 4 – 9 + 16 – 25 + 36 – … … n terms

const user=require("readline-sync");
let n=user.questionInt("enter any number:-");
let i=1;
let string=""
do{
    if(i%2==0){
        string+=i*i+"-"
    }
    else{
        string+=i*i+"+"
    }i++

}while(i<=n)
console.log(string);

