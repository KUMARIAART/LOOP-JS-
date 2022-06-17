// Write a program where it will do the following things with 1 to 20 numbers:
// When number is divisible by 3 print “Nav”
// When number is divisible by 7 print “Gurukul”
// The numbers which is divisible by 3 and 7 print “NavGurukul”
// If it is not coming in any case above print number only.

// var i=1;
// while (i<=20){
//     if (i%3==0){
//         console.log(i,"nav");
//     }
//     else if (i%7==0){
//         console.log(i,"gurukul");
//     }
//     else if (i%3==0 && i%7==0){
//         console.log(i,"navgurukul");
//     }
//     else{
//         console.log(i)
//     }
//     i++
    
// }

// var i=20;
// do{
//     if (i%3==0){
//         console.log(i,"nav");
//     }
//     else if (i%7==0){
//         console.log(i,"gurukul");
//     }
//     else if (i%3==0 && i%7==0){
//         console.log(i,"navgurukul");
//     }
//     else{
//         console.log(i)
//     }
//     i--
    
// }while (i>=1)


for (var i=1;(i<=20); i++ ){
    if (i%3==0){
        console.log(i,"nav");
    }
    else if (i%7==0){
        console.log(i,"gurukul");
    }
    else if (i%3==0 && i%7==0){
        console.log(i,"navgurukul");
    }
    else{
        console.log(i)
    }

}


