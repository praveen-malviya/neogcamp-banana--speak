var btnTranslate = document.querySelector("#btn-translate");
var userInput = document.querySelector("#userInput");
var output = document.querySelector("#outputText");

function clickHandler(){
    // console.log("clicked");
    // console.log(userInput.value);
    output.innerHTML="you typed "+ userInput.value;
};

btnTranslate.addEventListener("click", clickHandler);