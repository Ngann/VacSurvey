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

  $(".ButtonFive").click(function(event){
    $("#Q5").hide();
    $(".info").show();
    event.preventDefault();
  });

  $(".ButtonFinal").click(function (event){
    $(".info").hide();
    $(".result").show();
    $("span#firstname").text($("input#firstname").val())
    $("span#lastname").text($("input#lastname").val())
    $("span#place").text($("input#place").val())
    $("span#packing").text($("input#packing").val())
    event.preventDefault();
  });

/*
  $("form#insurance").submit(function(event) {
   var age = parseInt($("input#age").val());
   var gender = $("select#gender").val();

   if (age) {
     var quote = (100 - age) * 3;
     if (gender === 'male' && age < 26) {
       quote += 50;
     }

     $("#rate").empty().append(quote);
     $("#quote").show();
   } else {
     alert('Please enter your age.');
   }

   event.preventDefault();

*/

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
