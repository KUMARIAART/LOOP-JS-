// You will be given a number and you need to return it as a string in Expanded Form. For example:
// 12  # Should return '10 + 2'
// 42 # Should return '40 + 2'
// 70304  # Should return '70000 + 300 + 4'

const user_input=require("readline-sync");
let str=user_input.question("enter any number:-");
let string=""
for(let i=0;i<(str.length);i++){
    a=str[i]*(10**(str.length-(i+1)))
        string+=a+" + "
}
console.log(string);

