// The game is about guessing a number between 1 to 10, you can choose how many times you want
// to guess and guess those many times, if you are able to guess the secret number you won the
// game, or if your chances are completed means you completely lost the game.

console.log("WELCOME TO THE OUR GUESSING GAME!...");
const userinput=require("readline-sync");
let start=userinput.question("WOULD YOU LIKE TO START A GAME (YES/NO)");
if (start=="YES"){
    let level=userinput.question("PICK A LEVEL (EASY/HARD)")
    if(level=="EASY"){
        var a=Math.floor(Math.random() * 10)+1;
        console.log("YOU HAVE ONLY 5 CHANCE & CHOOSE THE NUMBER BEETWEEN 1 TO 10");
        for(i=1; i<5; i++ ){
            let guess_numbers=userinput.questionInt("GUESS NUMBERS:-")
            if (guess_numbers==a){
                console.log("CONGRATULATION YOU WON THE GAME");
                break;
            }
            else{
                console.log("you lose the",i ,"chance");
                if (guess_numbers>a){
                    console.log("HINT:-NUMBER IS SMALLER THAN",guess_numbers);
                }
                else{if(i<=4){
                    console.log("HINT:-NUMBER IS GREATER THAN",guess_numbers);  
                }
                }
            }
        }if (i==6){
            console.log("YOU LOSE THE GAME YOUR SECRET NUMBER IS",a);
        }

    }
    else if (level=="HARD"){
        var a=Math.floor(Math.random() * 100)+1;
        console.log("YOU HAVE ONLY 5 CHANCE & CHOOSE THE NUMBER BEETWEEN 1 TO 100");
        for(i=1; i<=5; i++ ){
            let guess_numbers=userinput.questionInt("GUESS NUMBERS:-")
            if (guess_numbers==a){
                console.log("CONGRATULATION YOU WON THE GAME");
                break;
            }
            else{
                console.log("you lose the",i ,"chance");
                if (guess_numbers>a){
                    console.log("HINT:-NUMBER IS SMALLER THAN",guess_numbers);
                }
                else{
                    console.log("HINT:-NUMBER IS GREATER THAN",guess_numbers);
                }
                
            }
        }if (i==6){
            console.log("YOU LOSE THE GAME YOUR SECRET NUMBER IS",a);
        }
   
    }
    else{
        console.log("CHOOSE CORRECT LEVEL")
    }
}else{
    console.log("IF YOU DONT WANT TO PLAY IT'S OK ^_^");
}
