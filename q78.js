// 1  1  1  1  1
// 2  2  2  2  2
// 3  3  3  3  3
// 4  4  4  4  4
// 5  5  5  5  5

let s=""
let i=1;
do{
    let j=1;
    while(j<=5){
        s+=i+" "
        j++
    }
    s+="\n"
    i++
}while(i<=5)
console.log(s)