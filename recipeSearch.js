// Edamame API setup
const APIKey = "458ba6347df752837e263807d257869b"
const appId = "14bab965"
const edamameURL = "https://api.edamam.com/search?q="


var searchForm = document.querySelector('form');
var searchEl = document.querySelector("#searchBtn");
let searchQuery = '';

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  searchQuery = event.target.querySelector("input").value;

  // if (searchQuery !== keto || vegan || balanced || pescetarian) {
  //     alert("Please select Keto, Vegan, Balanced, Pescetarian");
  // }
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

  // Recipe 0

  // IMG
  var img = document.querySelector(".img0");
  // console.log(img);
  img.src = data.hits[0].recipe.image;
  console.log(data.hits[0].recipe.image);

  // title
  var title = document.querySelector(".title0");
  // console.log(img);
  title.textContent = data.hits[0].recipe.label;
  console.log(data.hits[0].recipe.label);

  // calories
  var calories = document.querySelector(".calories0");
  // console.log(img);
  calories.textContent = "Calories: " + data.hits[0].recipe.calories.toFixed(0);
  console.log(data.hits[0].recipe.calories);

  // prep
  var prep = document.querySelector(".prep0");
  // console.log(img);
  prep.textContent = "Prep: " + data.hits[0].recipe.totalTime + " mins";
  console.log(data.hits[0].recipe.totalTime);

  // Recipe 1

  // IMG
  var img = document.querySelector(".img1");
  // console.log(img);
  img.src = data.hits[1].recipe.image;
  console.log(data.hits[1].recipe.image);

  // title
  var title = document.querySelector(".title1");
  // console.log(img);
  title.textContent = data.hits[1].recipe.label;
  console.log(data.hits[1].recipe.label);

  // calories
  var calories = document.querySelector(".calories1");
  // console.log(img);
  calories.textContent = "Calories: " + data.hits[1].recipe.calories.toFixed(0);
  console.log(data.hits[1].recipe.calories);

  // prep
  var prep = document.querySelector(".prep1");
  // console.log(img);
  prep.textContent = "Prep: " + data.hits[1].recipe.totalTime + " mins";
  console.log(data.hits[1].recipe.totalTime);

  // Recipe 2

  // IMG
  var img = document.querySelector(".img2");
  // console.log(img);
  img.src = data.hits[2].recipe.image;
  console.log(data.hits[2].recipe.image);

  // title
  var title = document.querySelector(".title2");
  // console.log(img);
  title.textContent = data.hits[2].recipe.label;
  console.log(data.hits[2].recipe.label);

  // calories
  var calories = document.querySelector(".calories2");
  // console.log(img);
  calories.textContent = "Calories: " + data.hits[2].recipe.calories.toFixed(0);
  console.log(data.hits[2].recipe.calories);

  // prep
  var prep = document.querySelector(".prep2");
  // console.log(img);
  prep.textContent = "Prep: " + data.hits[2].recipe.totalTime + " mins";
  console.log(data.hits[2].recipe.totalTime);

  // Recipe 3

  // IMG
  var img = document.querySelector(".img3");
  // console.log(img);
  img.src = data.hits[3].recipe.image;
  console.log(data.hits[3].recipe.image);

  // title
  var title = document.querySelector(".title3");
  // console.log(img);
  title.textContent = data.hits[3].recipe.label;
  console.log(data.hits[3].recipe.label);

  // calories
  var calories = document.querySelector(".calories3");
  // console.log(img);
  calories.textContent = "Calories: " + data.hits[3].recipe.calories.toFixed(0);
  console.log(data.hits[3].recipe.calories);

  // prep
  var prep = document.querySelector(".prep3");
  // console.log(img);
  prep.textContent = "Prep: " + data.hits[3].recipe.totalTime + " mins";
  console.log(data.hits[3].recipe.totalTime);

  // Recipe 4

  // IMG
  var img = document.querySelector(".img4");
  // console.log(img);
  img.src = data.hits[4].recipe.image;
  console.log(data.hits[4].recipe.image);

  // title
  var title = document.querySelector(".title4");
  // console.log(img);
  title.textContent = data.hits[4].recipe.label;
  console.log(data.hits[4].recipe.label);

  // calories
  var calories = document.querySelector(".calories4");
  // console.log(img);
  calories.textContent = "Calories: " + data.hits[4].recipe.calories.toFixed(0);
  console.log(data.hits[4].recipe.calories);

  // prep
  var prep = document.querySelector(".prep4");
  // console.log(img);
  prep.textContent = "Prep: " + data.hits[4].recipe.totalTime + " mins";
  console.log(data.hits[4].recipe.totalTime);

  // Recipe 5

  // IMG
  var img = document.querySelector(".img5");
  // console.log(img);
  img.src = data.hits[5].recipe.image;
  console.log(data.hits[5].recipe.image);

  // title
  var title = document.querySelector(".title5");
  // console.log(img);
  title.textContent = data.hits[5].recipe.label;
  console.log(data.hits[5].recipe.label);

  // calories
  var calories = document.querySelector(".calories5");
  // console.log(img);
  calories.textContent = "Calories: " + data.hits[5].recipe.calories.toFixed(0);
  console.log(data.hits[5].recipe.calories);

  // prep
  var prep = document.querySelector(".prep5");
  // console.log(img);
  prep.textContent = "Prep: " + data.hits[5].recipe.totalTime + " mins";
  console.log(data.hits[5].recipe.totalTime);

}


searchEl.addEventListener("click", fetchAPI);

