// @ts-nocheck
var words = ["jupiter", "comet", "star", "sun", "sky", "pluto", "eclipse", "nebula", "supernova", "zodiac", "galaxy"];
var randomWord;
var score = 0; 
var wrongGuess = [];
var lifes = 0;
var userGuess = [];
var wordToGuess = [];
var rightWord = []; 
var randomWord = "";
var life = 10; 


// Generates a new random word and reset the wordToGuess variable
function underscore() {  
    wordToGuess = [];  
    randomWord = words[Math.floor(Math.random()* words.length)] 
    console.log(randomWord); 
    for (var i = 0; i < randomWord.length; i++){
        //create the _ in the page 
        wordToGuess.push(" _ "); 
    }
    
    document.getElementById("wordToGuess").innerHTML = wordToGuess.join(" ");
    document.getElementById("lifes").innerHTML = life;
   
   


    //user press a key and key is saved on userGuess variable
    document.onkeyup = function gameStart (event) { 
        userGuess = event.key.toString().toLowerCase();
           
  
        
             
            //compare the user guess with random word    
            if (randomWord.indexOf(userGuess) >-1) {
            //if user guess is correct add the letter to variable rightWord 
                rightWord.push(userGuess); 

                // replace _ with correspondent letter 
                wordToGuess[randomWord.indexOf(userGuess)] = userGuess; 
            // print the letter on _
                document.getElementById("wordToGuess").innerHTML = wordToGuess.join(" ")    ;
                    if (randomWord.length == rightWord.length) {
                    score++;  
                    rightWord.splice(0,rightWord.length);    
                    underscore(); 
                    }
            // Print score to the page 
            document.getElementById("wins").innerHTML = score; 
            } else {
            //add wrong guess to var
            document.getElementById("userGuess").innerHTML= " " + wrongGuess; 
                wrongGuess.push(userGuess)
                console.log(wrongGuess);
                if (wrongGuess.length > 9){
                    // alert("You lost!")
                    life --;
                    console.log("this is the life " + life); 
                    wrongGuess.splice(0,wrongGuess.length);    
                    underscore();  
                }
                             
                    
            }
        }

    } 
 
    
    underscore();    
    