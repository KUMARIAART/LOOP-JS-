// 0  
// 0 1  
// 0 2 4  
// 0 3 6 9  
// 0 4 8 12 16  

var str="";
for(var i=0;i<5;++i){
    for(var j=0;j<=i;++j){
        str+=i*j+" "
    }
    str+='\n'
}
console.log(str);