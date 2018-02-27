# VacSurvey


var buttons = ["One", "Two", "Three", "Four", "Final"];
  buttons.forEach(function(button) {
    $(".Button" + button).click(function(event) {
    var userinput = $(".Button" + button).val();
    var questions = ["1", "2", "3", "4", "5"];
    questions.forEach(function(question) {
      $("#Q" + question).hide();
      questions.shift();
      $("#Q" + question).show();
        event.preventDefault();
    });
