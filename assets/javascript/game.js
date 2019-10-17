var words = ["jupiter", "comet", "star", "moon", "sky", "pluto", "eclipse", "nebula", "supernova", "zodiac", "galaxy"];
var score; 
var wrongGuess = [];
var wrongTries = 0;
var rightTries = [];
var computerChoice;
var rightLetter;  
//user press any key to start the game
document.onkeyup = function(event){
    //computer pick a word
    computerChoice = words[0]; //can I use a for loop to the computer pick a item in the array instead of [0]
};
while (wrongTries >11 ) {
    

//user press a key to choose a word from the computer choice
document.onkeyup = function (event) {
    var userGuess = event.key;
      //add to lettterGuessed if the letter matches any letter on computerChoice
      if (computerChoice.indexOf(userGuess) == -1 ){
          // if letter guessed is diferent from computer word adds the letter to the array  
        console.log(wrongGuess.push);
        //adds to wrongTries 1 to wrong tries  
          wrongTries++; 
            }
               
        else if  {
            //display the letter ??? and subtract a letter from computer choice ???
            rightTries.push;
            //var answerArray = [];
            /* for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
            } */
    var remainingLetters = word.length;
            //add a if statement if the lenght is met or all the letters are displayed the user win score goes up
            if (rightTries.lenght == computerChoice.lenght){
            alert("you win!")
             break 
             }; 
    
            } //funtion end 
      
} //while loop end

     
   
       
  //Why my letterGuessed variable is not saving 1 whenn function runs ?
  //should I put the function inside a while loop ?
  //How can I display the length of computer choice as _ and when user guess the right lettter review the letter guessed ?

        



