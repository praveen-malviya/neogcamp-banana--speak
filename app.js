var btnTranslate = document.querySelector("#btn-translate");
var userInput = document.querySelector("#userInput");
var outputDiv = document.querySelector("#outputText");

var serverURL = "https://serverapi.praveenmalviya.repl.co/translate/pm.json"

// console.log(serverURL);

// var callingapi = serverURL+"?text="+userInput.value;




function clickHandler(){
    var callingapi = serverURL+"?text="+userInput.value;
    fetch(callingapi)
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    
};

btnTranslate.addEventListener("click", clickHandler);