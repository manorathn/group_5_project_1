// Edamame API setup
var APIKey = "458ba6347df752837e263807d257869b";
appId = "14bab965";
var edamameURL = "https://api.edamam.com/search?q=";

var searchEl = document.querySelector("#searchBtn");
var diet = document.querySelector("#dietSearch");

function getRecipe(event) {
  event.preventDefault();

  var edamame = edamameURL + diet + appId + APIKey;

  console.log(edamame);

  fetch(edamame)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var recipes = document.querySelector("#food");
      console.log(recipes);
    });
}
searchEl.addEventListener("click", getRecipe);
