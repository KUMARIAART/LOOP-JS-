// 0
// 0 1
// 0 1 4
// 0 1 4 9
// 0 1 4 9 16


var str="";
var i=0;
do{
    var j=0;
    while(j<=i){
        str+=j**2+" "
        j++
    }
    str+='\n'
    i++

}while(i<5);
console.log(str);