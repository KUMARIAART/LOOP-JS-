//Write a Python program to guess a number between 1 to 9

const user=require("readline-sync");
let number=user.questionInt("guess any number hint beetween 1 to 9:-");
var i=1;
while(i<=9){
    if(number==4){
        console.log("congratulation you won the game you gues ryt number",number);
        break;
    }
    else{
        console.log("you loss the game you gues wrong number try again",number);
        break;
    }i++
}
  