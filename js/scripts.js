$(document).ready(function() {

/*
  $(".button").click(function() {
    $("#destination1").toggle();
   alert("I told you, THIS IS A HEADER!");  */

    $("button").submit(function(event) {
     event.preventDefault();
      var number1 = parseInt($("#add1").val());
      var number1 = parseInt($("#add1").val());
      var number2 = parseInt($("#add2").val());
      var result = add(number1, number2);
      $("#output").text(result);
    });
  });


});
