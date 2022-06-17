// Write a python program  to sum the sequence:
// 1 + 1/1! + 1/2! + 1/3! + …….. + 1/n!

const user=require("readline-sync");
let n=user.questionInt("enter a nth term =");
var f = 1
var s = 1
var i=1
while(i<=n){
    f=f*i
    s=s+1/f
    i++
}
console.log("sum of sequence = ", s);
