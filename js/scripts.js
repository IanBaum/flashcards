jQuery(document).ready(function(){

  var currentTitleIndex = 0;

  var titles = ["JavaScript", "Operators", "Variables", "Variable Naming Conventions", "Functions", "Methods", "Arguments", "Parameters", "Return", "Chaining Methods", "Strings", "Booleans", "Undefined", "NaN", "Escape", "Alert", "Comments", "jQuery", "Attributes"];

  var definitions = [];

  $("#cardTitle").text(titles[0]);
  $(".currentIndex").text((currentTitleIndex + 1));
  $(".maxIndex").text(titles.length);

  $("#card").click(function(){
    $("#cardTitle").toggle();
    $("#cardDef").toggle();
  });

  $(".prev").click(function(){
    if (currentTitleIndex >= 1){
      currentTitleIndex--;
      $("#cardTitle").text(titles[currentTitleIndex]);
      $(".currentIndex").text((currentTitleIndex + 1));
    }
  });

  $(".next").click(function(){
    if (currentTitleIndex < titles.length){
      currentTitleIndex++;
      $("#cardTitle").text(titles[currentTitleIndex]);
      $(".currentIndex").text((currentTitleIndex + 1));
    }
  });


});
