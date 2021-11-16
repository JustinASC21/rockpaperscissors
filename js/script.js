let randomNumber = 0;

$(".play").click(function() {
  let input = $(".input").val();
  $(".userChoice").text(input);
  
  randomNumber = Math.random();
  
  if (randomNumber < 0.333) {
    $(".computerChoice").text("paper");
  }
  else if (randomNumber > 0.333 && randomNumber < 0.6667) {
    $(".computerChoice").text("rock");
  }
  else {
    $(".computerChoice").text("scissors");
  }
  
  if (input == "rock" && randomNumber > 0.6667) {
    $(".result").text("User wins!");
  }
  else if (input == "paper" && randomNumber > 0.333 && randomNumber < 0.66667) {
    $(".result").text("User wins!");
  }
  else if (input == "scissors" && randomNumber < 0.3333) {
    $(".result").text("User wins!");
  }
  else if ((randomNumber < 0.3333 && input == "rock") || (randomNumber > 0.333 && randomNumber < 0.666667 && input == "scissors") || (randomNumber > 0.666667 && input == "paper")) {
    $(".result").text("Computer wins!");
  }
  else {
    $(".result").text("Draw!");
  }
})
