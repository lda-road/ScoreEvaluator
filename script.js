// the button and result
let startButton = document.getElementById("startBtn");
let result = document.getElementById("result");

// Function to evaluate the score input
function evaluateScore(score) {
  // Check if score is empty
  if (score === "") {
    return "Invalid score";
  }

  // Convert the input to a number
  let scoreNumber = Number(score);

  // Check if the input is not a number
  if (isNaN(scoreNumber)) {
    return "Invalid score";
  }

  // Check for zero or negative input
  if (scoreNumber <= 0) {
    return "Invalid score";
  }

  // Check if score is beyond 100
  if (scoreNumber > 100) {
    return "Invalid score";
  }

  // Conditional branching
  if (scoreNumber >= 90) {
    return "Excellent";
  } else if (scoreNumber >= 75) {
    return "Passed";
  } else {
    return "Failed";
  }
}

// Run the program when the button is clicked
startButton.addEventListener("click", function () {
  // Display welcome message
  alert("Welcome to the Score Evaluator! Want to evaluate your score?");

  // Asking for the name of the user
  let name = prompt("Please enter your name:");

  // Ask the user for their score
  let score = prompt("Please enter your score (0-100):");

  // Ask if the user wants to continue
  let proceed = confirm("Do you want to continue and evaluate your score?");

  // Check if the user clicked Cancel
  if (!proceed) {
    result.innerHTML = `
            <h2>Cancelled</h2>
            <p>You chose not to continue.</p>
        `;
    return;
  }

  // Check if the name is empty
  if (name === null || name.trim() === "") {
    result.innerHTML = `
            <h2>Invalid Input</h2>
            <p>Please enter your name.</p>
        `;
    return;
  }

  // Handle Cancel or empty score
  if (score === null || score.trim() === "") {
    result.innerHTML = `
            <h2>Invalid Score</h2>
            <p>Please enter a score.</p>
        `;
    return;
  }

  // Evaluate the score
  let remark = evaluateScore(score);

  // Display the final result
  result.innerHTML = `
        <h2>Result</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Score:</strong> ${score}</p>
        <p><strong>Remark:</strong> ${remark}</p>
    `;
});
