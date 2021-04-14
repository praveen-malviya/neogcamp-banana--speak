var btnTranslate = document.querySelector("#btn-translate");
console.log(btnTranslate);

// btnTranslate.addEventListener("click", function clickHandler(){
//     console.log("clicked")
// });

function clickHandler(){
    console.log("clicked");
};

// btnTranslate.addEventListener("click", function (){
//     clickHandler()}
//     );

btnTranslate.addEventListener("click", clickHandler);