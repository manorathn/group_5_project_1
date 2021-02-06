// Edamame API setup
const APIKey = "458ba6347df752837e263807d257869b";
const appId = "14bab965";
const edamameURL = "https://api.edamam.com/search?q=";

// DOM
var searchForm = document.querySelector("form");
var searchEl = document.querySelector("#searchBtn");
let searchQuery = "";

async function fetchAPI() {
  const edamame =
    edamameURL +
    searchQuery +
    "&app_id=" +
    appId +
    "&app_key=" +
    APIKey +
    "&to=10";
  // console.log(edamame);
  const response = await fetch(edamame);
  console.log(response);
  const data = await response.json();
  // generateHTML(data.hits);
  console.log(data);
}

//Randomizer API

var randomQuery = "https://api.spoonacular.com/recipes/random?apiKey=81188f168e174959b542fc55bff0ccd6"
// var APIKey2 = "81188f168e174959b542fc55bff0ccd6"
async function randomAPI(){
    const spoonnacular = randomQuery



}





// function generateHTML(results) {
//     const generateHTML = '';
//     results.map(result => {
//         generateHTML += ""


searchEl.addEventListener("click", fetchAPI);


//modal//
$("#modalLauncher").click(function (e) {
    $('#myModal').foundation('reveal', 'open');
});
