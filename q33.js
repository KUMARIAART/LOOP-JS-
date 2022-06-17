//16. Write a program to print the factorial of a number accepted by the user.
//(The factorial is always found for a positive integer by multiplying all the integers 
//starting from 1 till the given number.)


const user=require("readline-sync");
let number=user.questionInt("enter any number:-");
var i=1;
var factorial=1;

if(number<0){
     console.log("Factorial does not exist for negative numbers");
}
else if(number==0){
    console.log("factorial of 0 is a 1");
}
else{
    while(i<=number){
        factorial=factorial*i
        i++
    }console.log("factorial of",number,"is a",factorial)
}

// const user=require("readline-sync");
// let number=user.questionInt("enter any number:-");
// var factorial=1;
// if(number<0){
//     console.log("Factorial does not exist for negative numbers");
// }
// else if(number==0){
//     console.log("factorial of 0 is a 1");
// }
// else{
//     for(var i=1; i<=number;i++){
//         factorial=factorial*i
//     }console.log("factorial of",number,"is a",factorial);
// }

