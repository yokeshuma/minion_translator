//Declaring Variables
var inputText = document.querySelector("#input");
var btnTranslate = document.querySelector("#translate-button");
var outputDiv = document.querySelector("#translated-output");

//API URL
var serverURL = "https://api.funtranslations.com/translate/minion.json?text=";

//API Main Function
function translatetext() {
  //Getting Fetch Request
  fetch(serverURL + inputText.value)
    .then((res) => res.json())
    .then((json) => {
      if (inputText.value === "") {
        alert("Please enter some text!");
      } else {
        outputDiv.innerHTML = json.contents.translated;
      }
    })
    //In Case of error
    .catch((err) => {
      alert("Something went wrong", err);
    });
}

//Button Click Event Handler
btnTranslate.addEventListener("click", translatetext);
