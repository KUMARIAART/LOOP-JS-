//Write a program to print only odd numbers from the given list using  a while loop . 

const L = [23, 45, 32, 25, 46, 33, 71, 90];
let i=0;
while(i< L.length){
    if(L[i]%2==1){
        console.log(L[i]);
    }i++
}

