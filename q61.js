// 5
// 4 4
// 3 3 3
// 2 2 2 2
// 1 1 1 1 1

var string="";
for(let i=5; i>0;i--){
    for(let j=5; j>=i; j--){
        string+=i+" "
    }
    string+="\n"
}
console.log(string)
