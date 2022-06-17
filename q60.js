// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// let i=1;
// str="";
// while(i<=5){
//     let j=1
//     while(j<=i){
//         str+=i+" "
//         ++j
//     }
//     str+="\n"
//     ++i
// }
// console.log(str);


let i=1;
str="";
do{
    let j=1
    while(j<=i){
        str+=i+" "
        ++j
    }
    str+="\n"
    ++i
}while(i<=5)
console.log(str);
