

// API number 2
var secondQuery =
  "https://api.spoonacular.com/recipes/random?apiKey=041f273766a645ff84a69b8f48e0e2da";

async function randomAPI() {
  const spoonacular = secondQuery;
  const response = await fetch(spoonacular);
  console.log("@nd Query", response);

  const data = await response.json();

  console.log(data);

  // title
  var title = document.querySelector(".title0");
  // console.log(img);
  title.textContent = data.recipes[0].title;
  console.log(data.recipes[0].title);

  // image
  var img0 = document.querySelector(".img0");
  img0.src = data.recipes[0].image;
  console.log(data.recipes[0].image);

  // direction
  var direction = document.querySelector(".direction")
  direction.innerHTML = data.recipes[0].instructions;

  // direction.innerHTML(data.recipes[0].instructions);

  console.log(data.recipes[0].instructions);



  // prep
  var prep = document.querySelector(".prep0");
  // console.log(img);
  prep.textContent = "Prep: " + data.recipes[0].readyInMinutes + " mins";
  console.log(data.recipes[0].readyInMinutes);

};
randomAPI();



randomAPI();