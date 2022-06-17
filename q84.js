// A
// B    C
// D    E    F
// G    H    I    J

let char=65;
let str="";
let i=1;
while(i<=4){
    let j=1;
    while(j<=i){
        a=String.fromCharCode(char);
        str+=a+"  "
        j++
        char++
    }
    str+='\n'
    i++
}
console.log(str);


