var words = ["jupiter", "comet", "star", "moon", "sky", "pluto", "eclipse", "nebula", "supernova", "zodiac", "galaxy"];
var score; 
var wrongGuess = [];
var wrongTries = 0;
var userGuess = [];
var wordToGuess = [];
var rightWord = []; 
 
//user press any key to start the game

    
var randomWord = words[Math.floor(Math.random()* words.length)]
    console.log(randomWord); 
    for (var i = 0; i < randomWord.length; i++){
        //create the _ in the page 
        wordToGuess.push(" _ "); 
    }

    //user press a key and key is saved on userGuess variable
    document.onkeyup = function (event) {
        var userGuess = event.key.toString();
        
     
     //compare the user guess with random word    
        if (randomWord.indexOf(userGuess) >-1) {
            //if user guess is correct add the letter to variable rightWord 
             rightWord.push(userGuess); 

            // replace _ with correspondent letter 
            wordToGuess[randomWord.indexOf(userGuess)] = userGuess; 
            // console.log(wordToGuess)
            if (randomWord.length == rightWord.length) {
                score++    
            }
        } 
        else {
            //add wrong guess to var
            wrongGuess.push(userGuess);  
            if (wrongGuess.length >10){
                alert("You lost!");}
        }
    
      
}


          //user press a key to choose a word from the computer choice
        //   document.onkeyup = function(event) {
        //     userGuess.push(event.key);
        //     console.log(userGuess)
        //   }
      
        
        //* /if (userGuess.indexOf(wordToGuess) !== -1) {
            // console.log(wordToGuess.push(i))
            
        // } else {
        //  console.log(userGuess);
        
     
// }

//










      //add to lettterGuessed if the letter matches any letter on computerChoice
    //   if (computerChoice.indexOf(userGuess) == -1 ){
    //       // if letter guessed is diferent from computer word adds the letter to the array  
    //     // console.log(wrongGuess.push());
    //     wrongGuess.push(userGuess);
    //     console.log("Wrong Guess: " + wrongGuess);
    //     //adds to wrongTries 1 to wrong tries  
    //       wrongTries++; 
    //         }

        // if (userGuess !== computerChoice) {
        //     wrongGuess.push(userGuess);
        //     console.log("Wrong Guess: " + wrongGuess);

        // }
               
       //else {
            //display the letter ??? and subtract a letter from computer choice ???
            //for (var i = 0; index < rightTries.length; index++) {
                //const element = array[index];
                
           // }
            //rightTries.push();
            //var answerArray = [];
            /* for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
            } */
    //var remainingLetters = word.length;
            //add a if statement if the lenght is met or all the letters are displayed the user win score goes up
            //if (rightTries.length == computerChoice.length){
            //alert("you win!")
             //break 
            //  }; 
    
            //} //funtion end 
      
//} //while loop end

     
   
       
  //Why my letterGuessed variable is not saving when function runs ?
  //should I put the function inside a while loop ?
  //How can I display the length of computer choice as _ and when user guess the right lettter review the letter guessed ?

        



