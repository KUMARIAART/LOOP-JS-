// 5 5 5 5 5
// 4 4 4 4
// 3 3 3
// 2 2
// 1

let i=5;
let s="";
do{
    j=1;
    while(j<=i){
        s+=i+" "
        j++
    }
    s+="\n"
    i--
}while(i>0)
console.log(s);