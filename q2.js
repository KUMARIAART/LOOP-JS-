//Example 2: Sum of Positive Numbers Only
// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

let sum = 0;

// take input from the user
let number = parseInt(prompt('Enter a number: '));

while(number >= 0) {

    // add all positive numbers
    sum += number;

    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));
}

// display the sum
console.log(`The sum is ${sum}.`);


//Example 4: Sum of Positive Numbers
// to find the sum of positive numbers
// if the user enters negative number, the loop terminates
// negative number is not added to sum

let sum1 = 0;
let number1 = 0;

do {
    sum1 += number1;
    number1 = parseInt(prompt('Enter a number: '));
} while(number1 >= 0)

console.log(`The sum is ${sum1}.`);


// infinite do...while loop
const count1 = 1;
do {
   // body of loop
} while(count1 == 1)


var count = 1;
while (count < 10) {
   console.log(count);
   count +=2;
}


var i=0;
while (i<7){
    if(i%2==0){
console.log(i)
    }
    i++;
}

var i=1
do{
  if(i%2==1){
  console.log(i)
  }
  i++
}
while (i <=10)


let m=5;
let n=1
do{
   console.log(m*n)
n++
}        
while(n<=4)


let s=0
let i=0
do{
  s=s+i 
  console.log(s)
  i++
}
while(i<=10)


// let v=0
// do{
//    console.log(v)
// }
// v++
// while(v<=3)
// SyntaxError: Unexpected identifier


let v=0
  do{
   console.log(v)
}
while(v<=3)
v++
//loop will run to infinity


let i=2
do{
   console.log(i);
}
while (i >10)
 
 
while(i>10){
   console.log(i);
}










