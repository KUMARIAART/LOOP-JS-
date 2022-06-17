// Write a program to print the following series till n terms.
// 2 , 22 , 222 , 2222 _ _ _ _ _ n terms

const user=require("readline-sync");
let n=user.questionInt("enter any number:-");
let i=1;
let str="^_^"
let string1=""
do{
    string1+=str.repeat(i)+" , "
    i++
}while(i<=n)
console.log(string1);


// a='aarti'
// b=a.repeat(11)
// console.log(b)