var num;
var counter=0;
var input =document.getElementById("numInput");

function randomNum(){
    num = Math.floor(Math.random()*100);
    console.log(num);
}
function guessNum(){
    counter++;
    var numberOfGuess =document.getElementsByClassName(guessButton);
    numberOfGuess.in=counter;
    

    var guess =input.value;
    console.log(guess);
    var icon =document.getElementById("theIcon")

    if (guess>num){
        icon.className =" fas fa-arrow-down";
        document.body.style.backgroundColor ="red";

    }
    else if (guess<num){
        icon.className =" fas fa-arrow-up";
        document.body.style.backgroundColor ="red";

    }
    else{
        document.body.style.backgroundColor ="green";
        icon.className =" fas fa-check-circle";
        var guessingblock =document.getElementById("theGuessing")
        guessingblock.style.display="none";
        document.getElementById("congo").style.display = "block";

    }
}