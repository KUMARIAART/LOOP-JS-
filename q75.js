 
//          *
//         * *
//       *  *  *
//     *  *  *  *
//   * *  *  *   *

let str="";
for(let i=1;i<=5;i++){
    for(let b=1;b<=5-i;b++){
        str+=" "
    }
    for(let j=1;j<=i;j++){
        str+="* "
    }
    str+="\n"
}
console.log(str);
