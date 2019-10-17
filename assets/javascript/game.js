var words = ["jupiter", "comet", "star", "moon", "sky", "pluto", "eclipse", "nebula", "supernova", "zodiac", "galaxy"];
var score 
var wordGuessed = 0;
//user press any key to start the game
document.onkeyup = function(event){
    //computer pick a word
     var computerChoice = words[0]; 
    
    //save the user guess 
     var userGuess = event.key;
    
     
     console.log(computerChoice); 
     console.log(userGuess); 
     //add to wordGuessed if the letter matches any letter on computerChoice
     if (computerChoice.indexOf(userGuess) !== -1 ){
     wordGuessed++ ;
            }
       
       
        };
     



