//Question1 Program to check whether a given string is a palindrome or not.

const n=require("readline-sync");
var name=n.question("enter name: ")
const store=name;
var string=""
for (let i=name.length-1;i>=0;i--) {
   string=string+name[i]
}
if (store===string) {
   console.log("its palindrome string")
}
else {
   console.log("it's not a palindrome string")
}


//Question2 Program to check whether the given number is a prime or not?
//PRIME NUMBER:-a number that is divisible only by itself and 1 (e.g. 2, 3, 5, 7, 11).

// var n=require("readline-sync");
// const num=n.question("enter number: ");
// let i=2
// var count=0;
// while (i<num){
//     if (num%i===0) {
//        count=count+1
//        }
//        i++;
// }
// if (count===0) {
//        console.log("prime number")
// }
// else {
//    console.log("not prime number")
// }


//Question3 What is the ouput of the following code?

// for (var j=0;i<10;) {
//    console.log(j)
// }



//Question4 Program to print table of a given number
// let n=require("readline-sync");
// let number=parseInt(n.question("enter number: "));
// for (let i=1;i<=10;i++) {
//        multi=number*i;
//        console.log(number + " *" + i + "=" + multi)
//    }










