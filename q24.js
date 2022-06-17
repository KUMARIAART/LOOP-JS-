//7. Write a program to print the sum of the first 10 Even numbers.

var i=1;
sum=0;
while(i<=20){
    if(i%2==0){
        sum=sum+i    
    }
    i++
}
console.log("first 10 even numbers  sum are",sum);