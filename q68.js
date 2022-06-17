// 1
// 2 3 4
// 5 6 7 8 9

let k=1;
let i=1;
let str="";
do{
    let j=1;
    while(j<=i){
        str+=k+" "
        k++
        j++
    }
    str+='\n'
    i+=2

}while(i<=5)
console.log(str);



