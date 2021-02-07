var secondQuery =
  "https://api.spoonacular.com/recipes/random?apiKey=81188f168e174959b542fc55bff0ccd6";

async function randomAPI() {
  const spoonacular = secondQuery;
  const response = await fetch(spoonacular);
  console.log("@nd Query", response);

  const data = await response.json();

  console.log(data);
}


searchEl.addEventListener("click", randomAPI);