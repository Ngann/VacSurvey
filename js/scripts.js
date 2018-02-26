$(document).ready(function() {

  $(".ButtonOne").click(function(event) {
    $("#Q1").hide();
    $("#Q2").show();
    event.preventDefault();
  });

  $(".ButtonTwo").click(function(event){
    $("#Q2").hide();
    $("#Q3").show();
    event.preventDefault();
  });

  $(".ButtonThree").click(function(event){
    $("#Q3").hide();
    $("#Q4").show();
    event.preventDefault();
  });

  $(".ButtonFour").click(function(event){
    $("#Q4").hide();
    $("#Q5").show();
    event.preventDefault();
  });

  $(".ButtonFinal").click(function(event){
    $("#Q5").hide();
    alert("YESSSSS");
    event.preventDefault();
  });
/*   alert("I told you, THIS IS A HEADER!");  */

/*
    $("ButtonOne").submit(function(event) {
     event.preventDefault();
      var number1 = parseInt($("#add1").val());
      var number1 = parseInt($("#add1").val());
      var number2 = parseInt($("#add2").val());
      var result = add(number1, number2);
      $("#output").text(result);
    });

  */




});
