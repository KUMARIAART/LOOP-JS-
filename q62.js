// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

let i=5;
str="";
do{
    let j=5;
    while(j>=i){
        str+=j+" "
        j--
    }
    str+="\n"
    i--
}while(i>0)
console.log(str);
