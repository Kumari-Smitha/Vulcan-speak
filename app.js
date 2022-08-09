var inputText = document.querySelector("#input-textarea");

var btnTranslate = document.querySelector("#click");

var outputText = document.querySelector("#output-textarea");

var url = "https://api.funtranslations.com/translate/vulcan.json"


function handleClick(url){
    var input = inputText.value;
    var url2 = constructURL(input);

    fetch(url2)
    .then(res => res.json())
    .then(val => {
        outputText.innerText = val.contents.translated;
    })
    .catch(errorhandler)

}

function errorhandler(error){
    alert("Oops!! Something is wrong!");
}

function constructURL(input){
    var url2 = url + "?text=" + input;
    return url2
}

btnTranslate.addEventListener("click", handleClick)