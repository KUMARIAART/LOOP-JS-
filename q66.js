// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1

var string="";
let i=1;
do{
    let j=i;
    while(j>0){
        string+=j+" "
        j--
    }
    string+="\n"
    i++
}while(i<=5)
console.log(string)

