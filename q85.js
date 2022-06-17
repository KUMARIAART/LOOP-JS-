let i=1;
let str="";
do{
    let b=1;
    while(b<=5-i){
        str+=" "
        b++
    }
    let j=1
    while(j<=i){
        str+="*"
        j++
    }
    str+="\n"
        i++
}while(i<=5)
console.log(str);