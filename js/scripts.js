$(document).ready(function() {
  $("form#animals").submit(function(event) {
    event.preventDefault();
    const animals = $("#animals").val();
  });
});




