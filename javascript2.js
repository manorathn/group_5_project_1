// Edamame API setup
var APIKey = "458ba6347df752837e263807d257869b";
appId = "14bab965";
var edamameURL = "https://api.edamam.com/search?q=";
const APIKey = "458ba6347df752837e263807d257869b"
const appId = "14bab965"
const edamameURL = "https://api.edamam.com/search?q="


var searchForm = document.querySelector('form');
var searchEl = document.querySelector("#searchBtn");
let searchQuery = '';

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
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    searchQuery = event.target.querySelector("input").value;
    console.log(searchQuery);
    fetchAPI()
});

async function fetchAPI() {
    const edamame = edamameURL + searchQuery + '&app_id=' + appId + '&app_key=' + APIKey + '&to=10';
    // console.log(edamame);
    const response = await fetch(edamame);
    console.log(response);
    const data = await response.json();
    // generateHTML(data.hits);
    console.log(data);
};

var secondQuery = "https://api.spoonacular.com/recipes/random?apiKey=81188f168e174959b542fc55bff0ccd6"

async function randomAPI(){
    const spoonacular = secondQuery
    const response = await fetch(spoonacular);
    console.log("@nd Query" , response);

    const data = await response.json();

    console.log(data);
};

// function generateHTML(results) {
//     const generateHTML = '';
//     results.map(result => {
//         generateHTML += ""

//     })
// }

searchEl.addEventListener("click", fetchAPI);
