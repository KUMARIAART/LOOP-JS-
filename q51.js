//Write a program to print the following series till n terms.1 4 9 16 25 _ _ _ _ _ n  terms

const user=require("readline-sync");
let num=user.questionInt("enter any number:-");
let string=""
for(var i=1; i<=num; ++i){
    let series=i**2;
    string=string+series+" "
}
console.log(string);