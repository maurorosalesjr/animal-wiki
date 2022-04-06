$(document).ready(function() {
  $("form#animal").submit(function(event) {
    event.preventDefault();
    const animals = $("#animals").val();
    if (animals === "turtles") {
      $("#turtles").show();
      $("#snakes").hide();
      $("#alligators").hide();
    } else if (animals === "snakes") {
      $("#snakes").show();
      $("#turtles").hide();
      $("#alligators").hide();
    } else if (animals === "alligators") {
      $("#alligators").show();
      $("#turtles").hide();
      $("#snakes").hide();
    }
    
  });
});






