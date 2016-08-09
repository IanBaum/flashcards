jQuery(document).ready(function(){

  var currentTitleIndex = 0;
  var cardState = 0; // 0 is front

  var titles = ["JavaScript", "Operators", "Variables", "Variable Naming Conventions", "Functions", "Methods", "Arguments", "Parameters", "Return", "Chaining Methods", "Strings", "Booleans", "Undefined", "NaN", "Escape", "Alert", "Comments", "jQuery", "Attributes"];

  var definitions = [];

  $("#cardTitle").text(titles[0]);
  $(".currentIndex").text((currentTitleIndex + 1));
  $(".maxIndex").text(titles.length);

  $("#card").click(function(){
    $("#cardTitle").toggle();
    $("#cardDef").toggle();

    var userHeight = $(".chatUser").height();
    var chatHeight = $("#chatBox").height() - 100;

    if (!cardState) {
      $(".chatUser").prepend("<li>" + titles[currentTitleIndex] + "</li>")

      cardState = 1;
    }
    else {
      cardState = 0;
    }

    if (userHeight >= (chatHeight)) {
      $(".chatUser").children("li").last().remove();
    }

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

      if (cardState) {
        cardState = 0;
        $("#cardTitle").toggle();
        $("#cardDef").toggle();
      }
    }
  });


});
