var words = ["jupiter", "comet", "star", "moon", "sky", "pluto", "eclipse", "nebula", "supernova", "zodiac", "galaxy"];
var score; 
var letterGuessed = 0;
var computerChoice;
//user press any key to start the game
document.onkeyup = function(event){
    //computer pick a word
    computerChoice = words[0]; 
};
//user press a key to choose a word from the computer choice
document.onkeyup = function (event) {
    var userGuess = event.key;
      //add to lettterGuessed if the letter matches any letter on computerChoice
      if (computerChoice.indexOf(userGuess) == -1 ){
          // if letter that user choose don't exist in the computer choice string it adds 1;  
        console.log(letterGuessed=+1);
               }
               else {
                   //score goes up
                   score++; 
                   //display the letter on the screen
               }; 
    //when the letter Guessed reach 10 game stop            
      if (letterGuessed > 11){
          alert("Game Over !");
      };
      
      
}
console.log(letterGuessed); 
     
   
       
  //Why my letterGuessed variable is not saving 1 whenn function runs ?
  //should I put the function inside a while loop ?
  //How can I display the length of computer choice as _ and when user guess the right lettter review the letter guessed ?

        



