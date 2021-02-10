// Local Storage
// if (localStorage.getItem("image0") === true){

var recipeList = JSON.parse(localStorage.getItem("recipes"));
// var newRecipeList = [recipeList];

// };
// console.log($(".recipe-container"))
$(".recipe-loaded").click(function () {
  for (i = 0; i < recipeList.length; i++) {
     var newEL = $("<img class='img-loaded'>")
      .attr("src", recipeList[i].savedImgUrl)
      .appendTo(".recipe-container");
    // console.log(newRecipeList[i].savedImgUrl);
    var newTitle = $("<p>").text(recipeList[i].savedTitle).appendTo(".recipe-container");

  }
});
