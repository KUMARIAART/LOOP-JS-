// A
// A  B
// A  B  B
// A  B  C  D
// A  B  C  D  E

let str="";
for(let i=1;i<=5;i++){
    let char=65;
    for(let j=1;j<=i;j++){
        a=String.fromCharCode(char);
        char++
        str+=a+" "
    }
    str+="\n"
}
console.log(str);