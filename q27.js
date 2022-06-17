//10. Write a program to check whether a number is prime or not.
//a number that is divisible only by itself and 1 (e.g. 2, 3, 5, 7, 11).

const userinput=require("readline-sync");
let prime_num=userinput.questionInt("enter any number:-");
var i=1;
var count=0
while(i<=prime_num){
    if(prime_num%i==0){
        count+=1
        
    }
    i++
}
if(count==2){
    console.log(prime_num,"prime number");
}
else{
    console.log(prime_num," not a prime number");
}