//14. Write a program to display the number names of the digits of if the number is 231 
//then output should be Two a number entered by user, for example Three One.


const user=require("readline-sync");
let number=user.question("enter any number:-");
var i=0;
var sum=""
while (i<number.length){
    if(number[i]=="0"){
        sum+="zero "
    }
    else if(number[i]=="1"){
        sum+="one "
    }
    else if(number[i]=="2"){
        sum+="two "
    }
    else if(number[i]=="3"){
        sum+="three "
    }
    else if(number[i]=="4"){
        sum+="four "
    }
    else if(number[i]=="5"){
        sum+="five "
    }
    else if(number[i]=="6"){
        sum+="six "
    }
    else if(number[i]=="7"){
        sum+="seven "
    }
    else if(number[i]=="8"){
        sum+="eight "
    }
    else if(number[i]=="9"){
        sum+="nine "
    }
    else{
        console.log("invalid number");
    }
    i++

}
console.log(sum)


