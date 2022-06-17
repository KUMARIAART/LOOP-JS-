// p
// p y
// p y t
// p y t h
// p y t h o
// p y t h o n

let s="python";
let str="";
for(let i=0;i<s.length;i++){
    for(let j=0;j<=i;j++){
        str+=s[j]+" "
    }
    str+="\n"
}
console.log(str);