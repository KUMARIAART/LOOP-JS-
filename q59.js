// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

let i=5;
let s="";
do{
    j=1;
    while(j<=i){
        s+=j+" "
        j++
    }
    s+="\n"
    i--
}while(i>0)
console.log(s);