//take 10 user input and print 10 names.

const userInput=require("readline-sync");
let string="";
for(let i=1; i<=10;i++){
    var Name=userInput.question("enter any string:-");
    string+=i+Name+"\n"
}
console.log(string);

