// variables 

var  computerGuess = "";

var letterUserGuess = 0;


// Counters
var rightguessCount = 0;
var guessremaing = 9;
var winCount = 0;
var loseCount = 0;
var totalGuessedLetter = []

//===================//

// hold wrong letter as array
var  wrongLetters = [];
// hold the right letters
var wrightLetters = [];
// hold numer of blanks
var numBlanks = 0;
// word to guess 
var wordBank = ["Danny", "Melesse", "Las", "Vegas"];
// hold blanks and succesful guess
var blankssuccesses = [];
// hold letter in word
var letterInWord = [];
// hold random chosson word 
var choosenWord = "";

// double world 
// doubleWord      = ["a", "b", "c", "d", "e", "f", "g",];
//========================///

function reset()
{
    // choosenWord = wordBank[Math.floor(Math.random() * wordBank)];

    // letterInWord = choosenWord.split('');
    
    letterUserGuess = 0;
    rightguessCount = 0;
    guessRemaing    = 9;
    wrongLetters    = [];
    blankssuccesses = [];
    doubleWord      = [
                        "a", "b", "c", "d", "e", "f", "g", 
                        "h","i", "j", "k", "l", "m", "n", "o", "p",
                        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                    ];
   
    startGame();
}




//funcation start game 

function startGame()
{
    choosenWord = wordBank[(Math.floor(Math.random() * wordBank.length))];
    // split the chosen word into individual letters
    letterInWord = choosenWord.split("");
    //get the numeber of under score 
    numBlanks = letterInWord.length;

    // Reset game 
    //========
    rightguessCount = 0;
    guessRemaing    = 9;
    wrongLetters    = [];
    blankssuccesses = [];
    doubleWord      = ["a", "b", "c", "d", "e", "f", "g", 
                        "h","i", "j", "k", "l", "m", "n", "o", "p",
                        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                    ];
    


    // populate blanks 
    for(var i = 0; i < numBlanks; i ++)
    {
        blankssuccesses.push('_');
        document.getElementById("wordToGuess").innerHTML = blankssuccesses;
    }

    document.getElementById("wordToGuess").innerHTML = blankssuccesses.join(' ');
    // win countxxs
    document.getElementById('userScore').innerHTML = winCount;
    // loss count
    document.getElementById('computerScore').innerHTML = loseCount;
    // wrong letter
    document.getElementById("wrongLetter").innerHTML = wrongLetters;

    document.getElementById("userGuessed").innerHTML = wrongLetters;

        console.log("user score " + winCount);
        console.log("computer score " + loseCount);
        console.log(" guess remaing " + guessRemaing);
        console.log("computer guess  " + computerGuess);
        console.log("this is the under score for a word " + blankssuccesses);
        console.log("This is the choosen word " + choosenWord);
}


function compareLetters(userKey)
{

    console.log("Starting compareLetters funcation");
        console.log("i think user pressed this "+ userKey);
            console.log("am Working at this line!");
            // if user key exit in the coosen word then do this 
            if(choosenWord.indexOf(userKey) > - 1)
            {
                console.log("user input " + userKey);
                // loops depending on hte amount of blanks
                for(i = 0; i < numBlanks; i++)
                {
                    console.log("am Working at this line! + 1");
                    /// fills in rights index with user key 
                    if(numBlanks[i] === userKey){
                        console.log("is this true?")
                        rightguessCount ++;
                        blankssuccesses[i] = userKey;
                        document.getElementById('wordtoGuess').innerHTML = blankssuccesses.join(' ');
                        console.log("am Working at this line! + 2");
                    }
                }
                // test keys 
                console.log("am Working at this line! + 3");
                console.log("is this wright guess " + blankssuccesses);
            }
            // wrong key 
            else
            {
                wrongLetters.push(userKey);
                guessRemaing --;
                //update user with wrong count 
                document.getElementById("guessRemaing").innerHTML = guessRemaing;
                document.getElementById("wrongLetter").innerHTML = wrongLetters;
                // test  is wrong count working
                console.log("wrong letter =  " + wrongLetters);
                console.log("guessed letter lerft" + guessRemaing);
            } 
}

function winLose()
{
    /// when number blamks if filled with right words then you win 
    
    if(rightguessCount === numBlanks)
    {
        // update win count 
        winCount ++;
        // upate front end let user know they won
        document.getElementById("userScore").innerHTML = winCount;
        alert("You have won the game")
        reset();
    }
}
    
    document.onkeyup = function(event)
    {
        // save user event 
        var letterUserGuess = event.key;
        console.log("This is what i guessed Danny " + letterUserGuess);
        // for(var i = 0; i < wrongLetters.length; i ++){
        //     console.log("this is first loop")
        //     if(!letterUserGuess === wrongLetters.length[i] ){
        //         console.log("checking for doublicate one")
        //         for(var i = 0; i <  wrightLetters.length; i++){
        //             console.log("this is secound loop")
        //             if(!letterUserGuess === wrightLetters.length[i]){
                        console.log("why is this not working work");
                        compareLetters(letterUserGuess);
                        winLose();
        //             }
        //         }
        //     }

        // }
        
    }

