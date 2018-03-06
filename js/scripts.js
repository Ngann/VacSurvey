var choice_a = 0;
var choice_b = 0;
var choice_c = 0;

$(document).ready(function() {

  $(".ButtonOne").click(function(event) {
    event.preventDefault();
    $("#Q1").hide();
    $("#Q2").show();

    var input = $('#Q1 input:checked').val();
    if (input === 'A') {
      choice_a += 1;
    } else if (input === 'B') {
      choice_b += 1;
    } else if (input === 'C') {
      choice_c += 1;
    }
    console.log('a', choice_a, 'b', choice_b, 'c', choice_c);
  });

  $(".ButtonTwo").click(function(event){
    event.preventDefault();
    $("#Q2").hide();
    $("#Q3").show();

    var input = $('#Q2 input:checked').val();
    if (input === 'A') {
      choice_a += 1;
    } else if (input === 'B') {
      choice_b += 1;
    } else if (input === 'C') {
      choice_c += 1;
    }
    console.log('a', choice_a, 'b', choice_b, 'c', choice_c);
  });

  $(".ButtonThree").click(function(event){
    event.preventDefault();
    $("#Q3").hide();
    $("#Q4").show();

    var input = $('#Q3 input:checked').val();
    if (input === 'A') {
      choice_a += 1;
    } else if (input === 'B') {
      choice_b += 1;
    } else if (input === 'C') {
      choice_c += 1;
    }
    console.log('a', choice_a, 'b', choice_b, 'c', choice_c);
  });

  $(".ButtonFour").click(function(event){
    event.preventDefault();
    $("#Q4").hide();
    $("#Q5").show();

    var input = $('#Q4 input:checked').val();
    if (input === 'A') {
      choice_a += 1;
    } else if (input === 'B') {
      choice_b += 1;
    } else if (input === 'C') {
      choice_c += 1;
    }
    console.log('a', choice_a, 'b', choice_b, 'c', choice_c);
  });

  $(".ButtonFive").click(function(event){
    event.preventDefault();
    $("#Q5").hide();
    $(".info").show();

    var input = $('#Q5 input:checked').val();
    if (input === 'A') {
      choice_a += 1;
    } else if (input === 'B') {
      choice_b += 1;
    } else if (input === 'C') {
      choice_c += 1;
    }
    console.log('a', choice_a, 'b', choice_b, 'c', choice_c);
  });

  $(".ButtonFinal").click(function (event){
    event.preventDefault();
    var placeResult;
    var packingResult;
//    var choices = [choice_a,choice_b,choice_c];
    var total = choice_a + 3 * choice_b + 5 * choice_c;

    if ( total < 5) {
      placeResult = 'New York'
      packingResult= 'dancing shoes'
    } else if (total < 15) {
      placeResult = 'California';
      packingResult = 'camping boots'
    } else {
      placeResult = 'Hawaii';
      packingResult = 'flip flops'
    }

    $(".info").hide();
    $(".result").show();
    $("span#firstname").text($("input#firstname").val())
    $("span#lastname").text($("input#lastname").val())
    $("span#place").text(placeResult)
    $("span#packing").text(packingResult)
  });
});
