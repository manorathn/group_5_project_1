

// API number 2
var secondQuery =
  "https://api.spoonacular.com/recipes/random?apiKey=81188f168e174959b542fc55bff0ccd6";

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
  direction.textContent = data.recipes[0].instructions;
  console.log(data.recipes[0].instructionss);



  // prep
  var prep = document.querySelector(".prep0");
  // console.log(img);
  prep.textContent = "Prep: " + data.recipes[0].readyInMinutes + " mins";
  console.log(data.recipes[0].readyInMinutes);

};
randomAPI();


// Modal Javascript
var modal = document.getElementById("simple-modal");
var modalBtn = document.getElementById("modal-button");
var closeBtn = document.getElementsByClassName("close-button")[0];


modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);


function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
function outsideClick(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

searchEl.addEventListener("click", randomAPI);
