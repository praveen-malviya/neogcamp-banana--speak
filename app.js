var btnTranslate = document.querySelector("#btn-translate");
var userInput = document.querySelector("#userInput");
console.log(btnTranslate);

function clickHandler(){
    // console.log("clicked");
    console.log(userInput.value);
};

btnTranslate.addEventListener("click", clickHandler);