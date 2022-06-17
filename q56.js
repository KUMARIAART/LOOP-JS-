// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// var string="";
// for(let i=1; i<=5;i++){
//     for(let j=1; j<=i; j++){
//         string+=j+" "
//     }
//     string+="\n"
// }
// console.log(string)


var string="";
let i=1;
do{
    let j=1;
    while(j<=i){
        string+=j+" "
        j++
    }
    string+="\n"
    i++
}while(i<=5)
console.log(string)


