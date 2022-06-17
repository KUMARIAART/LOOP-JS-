//Write a Python program to find those numbers which are divisible by 7 and multiple of 5,
// between 1500 and 2700 (both included).`

var i=1500;
do{
    if(i%7==0 && i%5==0){
        console.log(i);
    }i++

}while(i<=2700)