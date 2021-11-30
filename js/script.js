let randomNumber = 0;

$(".play").click(function() {
  let input = $(".input").val();
  $(".userChoice").text(input);
  
  randomNumber = Math.ceil(Math.random() * 4);
  
  if (randomNumber == 1) {
    $(".computerChoice").text("paper");
  }
  else if (randomNumber == 2) {
    $(".computerChoice").text("rock");
  }
  else {
    $(".computerChoice").text("scissors");
  }
  
  if (input != "") {
    if (input == "rock" && randomNumber == 3) {
    $(".result").text("User wins!");
  }
  else if (input == "paper" && randomNumber == 2) {
    $(".result").text("User wins!");
  }
  else if (input == "scissors" && randomNumber == 1) {
    $(".result").text("User wins!");
  }
  else if ((randomNumber == 1 && input == "rock") || (randomNumber == 2 && input == "scissors") || (randomNumber == 3 && input == "paper")) {
    $(".result").text("Computer wins!");
  }
  else {
    $(".result").text("Draw!");
  }
  
  //clear input
  
  
  $(".input").val = "";
} else {
  $(".result").text("Computer wins by default!");               
}
})    

