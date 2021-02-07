

// API number 2
var secondQuery =
  "https://api.spoonacular.com/recipes/random?apiKey=81188f168e174959b542fc55bff0ccd6";

async function randomAPI() {
  const spoonacular = secondQuery;
  const response = await fetch(spoonacular);
  console.log("@nd Query", response);

  const data = await response.json();

  console.log(data);
};

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
