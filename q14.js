// 5 5 5 5 5
// 4 4 4 4 4
// 3 3 3 3 3
// 2 2 2 2 2
// 1 1 1 1 1


const userInput=require("readline-sync");
let n=userInput.questionInt("enter any number :-" );
// var i=n;
// let string = "";

// while(i>0){
//     var j=0;
//     while(j<n){
//         string += i;
//         j++
//     }
//     string += "\n";
//     i--
// }
// console.log(string);


var i=n;
let string = "";
do{
    var j=0;
    do{
        string += i;
        j++
    }while(j<n)
    string += "\n";
    i--
}while(i>0)
console.log(string);



// const userInput=require("readline-sync");
// let n=userInput.questionInt("enter any number :-" );
// let string = "";

// for(let i = n; i >0; i--) {
//     for(let j = 0; j < n; j++) { 
//       string += i;
//     }
//     string += "\n";
// }
// console.log(string);