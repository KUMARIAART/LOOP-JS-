//           1
//         2 2 2
//      3 3 3 3 3
//   4 4 4 4 4 4 4
// 5 5 5 5 5 5 5 5 5

let i=1;
let str="";
let k=1;
do{
    let b=1;
    while(b<=5-i){
        str+=" "
        b++
    }
    let j=1
    while(j<=k){
        str+=i
        j++
    }
    k+=2
    str+="\n"
    i++
}while(i<=5)
console.log(str);