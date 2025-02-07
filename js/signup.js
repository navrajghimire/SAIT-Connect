document.addEventListener("DOMContentLoaded", function () {
  var signupForm = document.getElementById("signup-form");

  if (signupForm) {
      signupForm.addEventListener("submit", function (event) {
          event.preventDefault(); // Prevent default form submission behavior
          
          // Get user input values
          var name = document.getElementById("name").value;
          var email = document.getElementById("email").value;
          var course = document.getElementById("course").value;
          var year = document.getElementById("current-year").value;
          var semester = document.getElementById("current-semester").value;

          // Validate (Optional: Add advanced validation here)
          if (name && email && course && year && semester) {
              alert("Signup successful! Redirecting to main page...");
              window.location.href = "main.html"; // Redirect to main page
          } else {
              alert("Please fill out all required fields.");
          }
      });
  }
});
