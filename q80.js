// A
// B  B
// C  C  C
// D  D  D  D
// E   E  E   E   E

let char=65;
let str="";
let i=1;
while(i<=5){
    let j=1;
    while(j<=i){
        a=String.fromCharCode(char);
        str+=a+" "
        j++
    }
    str+='\n'
    i++
    char++
}
console.log(str);

