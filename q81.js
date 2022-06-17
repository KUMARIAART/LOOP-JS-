
//           *  
//         * * * 
//       * * * * *  
//    * * * * * * *

let i=1;
let str="";
let k=1;
while(i<=4){
    let b=1;
    while(b<=4-i){
        str+=" "
        b++
    }
    let j=1
    while(j<=k){
        str+="*"
        j++
    }
    k+=2
    str+="\n"
    i++
}
console.log(str);