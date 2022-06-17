 
    //           1    
    //         1 2  
    //       1 2 3 
    //     1 2 3 4 
    //   1 2 3 4 5

let i=1;
let str="";
while(i<=5){
    let b=1;
    while(b<=5-i){
        str+=" "
        b++
    }
    let j=1
    while(j<=i){
        str+=j
        j++
    }
    str+="\n"
        i++
}
console.log(str);