// 1
// 4 4
// 9 9 9
// 16 16 16 16
// 25 25 25 25 25

let i=1;
str="";
while(i<=5){
    let j=1;
    while(j<=i){
        str+=i**2+" "
        j++
    }
    str+='\n'
    i++
}
console.log(str);
