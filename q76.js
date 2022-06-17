// 1  2  3  4  5
// 1  2  3  4  5
// 1  2  3  4  5
// 1  2  3  4  5
// 1  2  3  4  5

let s=""
let i=1;
while(i<=5){
    let j=1;
    while(j<=5){
        s+=j+" "
        j++
    }
    s+="\n"
    i++
}
console.log(s)