let randomNumber = 0;

function findWinner(userChoice, computerChoice) {
  if (computerChoice == 1) {
      $(".computerChoice").text("paper");
    } else if (computerChoice == 2) {
      $(".computerChoice").text("rock");
    } else if (computerChoice == 3) {
      $(".computerChoice").text("scissors");
    }

    if (userChoice != "") {
      if (
        (computerChoice == 1 && userChoice == "paper") ||
        (computerChoice == 2 && userChoice == "rock") ||
        (computerChoice == 3 && userChoice == "scissors")
      ) {
        $(".result").text("Draw!");
        $(".resultImg").attr(
          "src",
          "https://cdn.glitch.me/02c15105-1a40-4af0-bdf0-5afa9920acbc%2Feca1073c-0d69-4695-a87e-667508a38a54.image.png?v=1638918770764"
        );
      } else {
        // 1 - paper 2 - rock 3 - scissors
        // not a draw
        if (userChoice == "rock" && computerChoice == 3) {
          $(".result").text("User wins!");
          $(".resultImg").attr(
            "src",
            "https://cdn.glitch.me/02c15105-1a40-4af0-bdf0-5afa9920acbc%2F1105ef55-dbb7-4163-82fe-15e1b6b7ab77.image.png?v=1638918357034"
          );
        } else if (userChoice == "paper" && computerChoice == 2) {
          $(".result").text("User wins!");
          $(".resultImg").attr(
            "src",
            "https://cdn.glitch.me/02c15105-1a40-4af0-bdf0-5afa9920acbc%2F1105ef55-dbb7-4163-82fe-15e1b6b7ab77.image.png?v=1638918357034"
          );
        } else if (userChoice == "scissors" && computerChoice == 1) {
          $(".result").text("User wins!");
          $(".resultImg").attr(
            "src",
            "https://cdn.glitch.me/02c15105-1a40-4af0-bdf0-5afa9920acbc%2F1105ef55-dbb7-4163-82fe-15e1b6b7ab77.image.png?v=1638918357034"
          );
        } else {
          $(".result").text("Computer Wins!");
          $(".resultImg").attr(
            "src",
            "https://cdn.glitch.me/02c15105-1a40-4af0-bdf0-5afa9920acbc%2Ffeb5e17b-8d9a-42dd-ac27-dba177b9d35f.image.png?v=1638918535402"
          );
        }

        //clear input
      }
    }
   else {
    $(".resultImg").attr(
      "src",
      "https://cdn.glitch.me/02c15105-1a40-4af0-bdf0-5afa9920acbc%2FBsodwindows10.png?v=1638917621780"
    );
    $(".userChoice").text("Invalid Response...");
    $(".result").text("Unable to determine result...");
  }
}

$(".play").click(function () {
  let input = $(".input").val();
  if (input === "paper" || input === "rock" || input === "scissors") {
    $(".userChoice").text(input);

    randomNumber = Math.ceil(Math.random() * 4);
    
    findWinner(input,randomNumber);
    
  }
    
});
