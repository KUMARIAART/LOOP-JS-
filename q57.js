// 5 4 3 2 1
// 5 4 3 2
// 5 4 3
// 5 4
// 5

let i=1;
let s="";
while(i<=5){
    j=5;
    while(j>=i){
        s+=j+" "
        j--
    }
    s+="\n"
    i++
}
console.log(s);