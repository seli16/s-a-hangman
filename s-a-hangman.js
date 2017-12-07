var word;
var guesses= 16;
var guessedLetters=[];
var EASY= ["snake", "tree", "sun", "car", "blue", "summer"];
var MEDIUM= ["california", "lemons", "school", "cloud", "ocean", "beach", "party"];
var HARD= ["mountain", "scorpio", "christmas", "puppy", "love", "snow", "peach"];




function startGame(){
    document.getElementById("Guesses").style.display = "block";
    guessedLetters=[];

    var level = document.getElementById("level").value;
    if(level==="1"){
        word= EASY[Math.floor(Math.random() *EASY.length)];
    }
    if(level=== "2"){
        word= MEDIUM[Math.floor(Math.random() * MEDIUM.length)];
    }
    if(level=== "3"){
        word= HARD[Math.floor(Math.random() * HARD.length)];
    }
    console.log(word);
    //guessLetter();
    printWord();
}

function guessLetter(){


    var letter= document.getElementById("letters").value;

    if(guessedLetters.indexOf(letter)> -1){
        document.getElementById("answers2").innerHTML= "Sorry, you already guessed that :/ Try again!"
    }else{
        if(word.indexOf(letter)>-1){
            if(guesses<=15){
                guesses+= 1;
            }
        }else{
            guesses-=1;

        }
        document.getElementById("guessesLeft").innerHTML=guesses.toString();

        guessedLetters.push(letter);
        console.log(guessedLetters);

        printWord();
    }


}


//document.getElementById("letters").innerHTML= output;


function printWord() {
    var lettersMissing = 0;
    var answer = "";
    for (var i = 0; i < word.length; i++) {
        if (guessedLetters.indexOf(word[i]) > -1) {
            answer += word[i];
        } else {
            answer += "_ ";
            lettersMissing++;
        }
    }
    document.getElementById("answers1").innerHTML = answer;

    var results= "";
    if(lettersMissing===0){
        results= "Yay! You got it right! Great job! :)";
        document.getElementById("Guesses").style.display = "none";

    }
    if(guesses===0){
        results= "Sorry, you lost :( Try again! Your word was: " + word;
        document.getElementById("Guesses").style.display = "none";
    }
    document.getElementById("answers2").innerHTML= results;

}








