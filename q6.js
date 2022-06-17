// Question5 Given a string, write a program to check if it is palindrome or not.
// A string is said to be palindrome if the reverse of the string is the same as the string.
// For example :
// “RADAR” is a palindrome, but “RADIX” is not a palindrome

// const userInput=require("readline-sync");
// let name=userInput.question("enter any name:-");
// var store=name
// var string=""
// let i=name.length-1;
// while (i>=0){
//     string=string+name[i]
//     i--
// }
// if (store===string){
//     console.log(string,"it is palindrome");
// }
// else{
//     console.log(string,"it is not a palindrome")
// }

const userInput=require("readline-sync");
let name=userInput.question("enter any name:-");
var store=name
var string=""
let i=name.length-1;

do{string=string+name[i]
        i--
}while (i>=0)
if (store===string){
    console.log(string,"it is palindrome");
}
else{
    console.log(string,"it is not a palindrome");
}

    