document.addEventListener("DOMContentLoaded", function () {
  // Example: Changing the background color of the page
  document.body.style.backgroundColor = "#f0f0f0"; // Set a light gray background

  // Example: Display a welcome message in the console
  console.log("Welcome to the main page!");

  // Example: Add event listener for a button click (you can add a button in main.html)
  var welcomeButton = document.getElementById("welcome-btn");
  if (welcomeButton) {
      welcomeButton.addEventListener("click", function () {
          alert("Welcome to the dashboard!");
      });
  }

  // You can add more interactivity or logic here for your main page
});


