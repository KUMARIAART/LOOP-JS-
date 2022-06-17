// 1
// 3 3
// 5 5 5
// 7 7 7 7
// 9 9 9 9 9

let i=1;
let str="";
let k=1;
do{
    let j=1;
    while(j<=i){
        str+=k+" "
        j++
    }
    str+='\n'
    k+=2
    i++
}while(i<=5)
console.log(str);
