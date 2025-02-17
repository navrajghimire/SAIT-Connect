 
 // Footer
 document.addEventListener('DOMContentLoaded', function() {
  const currentYear = new Date().getFullYear();
  document.getElementById('current-year').innerText = currentYear;
});



 // NavBAR

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('menu-open');
  });
});





  // Do not edit any thing above this 



  







// ========================== Local Student Data ==========================
const studentData = [
  { Name: "Navraj Ghimire", Course: "IDD", Year: "First Year", Semester: "Sem 1", Subject: "COMM 238 - Technical Communications I", Email: "navrajghimire@gmail.com" },
  { Name: "Zachery Favel", Course: "SD", Year: "First Year", Semester: "Sem 1", Subject: "COMM 238 - Technical Communications I", Email: "ZacheryFavel@gmail.com" },
  { Name: "Riya Patel", Course: "ITS", Year: "First Year", Semester: "Sem 1", Subject: "CMPH 209 - Introduction to Hardware", Email: "Riyapatel@gmail.com" },
  { Name: "Navraj Ghimire", Course: "IDD", Year: "First Year", Semester: "Sem 1", Subject: "COMM 238 - Technical Communications I",Email: "navrajghimire@gmail.com" },
  { Name: "Navraj Ghimire", Course: "IDD", Year: "First Year", Semester: "Sem 1", Subject: "CPRG 219 - Introduction to Web Communications" },
  { Name: "Navraj Ghimire", Course: "IDD", Year: "First Year", Semester: "Sem 1", Subject: "DSGN 228 - Introduction to Visual Design" },
  { Name: "Navraj Ghimire", Course: "IDD", Year: "First Year", Semester: "Sem 1", Subject: "MMDA 202 - Digital Media Foundations" },
  { Name: "Navraj Ghimire", Course: "IDD", Year: "First Year", Semester: "Sem 1", Subject: "PHIL 241 - Critical Thinking" },
  { Name: "Navraj Ghimire", Course: "IDD", Year: "First Year", Semester: "Sem 2", Subject: "CPRG 218 - Intermediate Web Communications" },
  { Name: "Navraj Ghimire", Course: "IDD", Year: "First Year", Semester: "Sem 2", Subject: "PMGT 200 - Product Management" },
  { Name: "Navraj Ghimire", Course: "IDD", Year: "First Year", Semester: "Sem 2", Subject: "DSGN 221 - Intermediate Visual Design" },
  { Name: "Navraj Ghimire", Course: "IDD", Year: "First Year", Semester: "Sem 2", Subject: "DSGN 227 - Introduction to User Experience (UX)" },
  { Name: "Navraj Ghimire", Course: "IDD", Year: "First Year", Semester: "Sem 2", Subject: "MMDA 203 - Intermediate Digital Media Production" },
  { Name: "Navraj Ghimire", Course: "IDD", Year: "Second Year", Semester: "Sem 3", Subject: "DIGI 300 - Digital Imaging" },
  { Name: "Navraj Ghimire", Course: "IDD", Year: "Second Year", Semester: "Sem 3", Subject: "DSGN 304 - Advanced Visual Design" },
  { Name: "Navraj Ghimire", Course: "IDD", Year: "Second Year", Semester: "Sem 3", Subject: "DSGN 313 - Typography" },
  { Name: "Navraj Ghimire", Course: "IDD", Year: "Second Year", Semester: "Sem 3", Subject: "PRNT 300 - Print Production" },
  { Name: "Navraj Ghimire", Course: "IDD", Year: "Second Year", Semester: "Sem 3", Subject: "DSGN 306 - Design Studio 1" },
  { Name: "Navraj Ghimire", Course: "IDD", Year: "Second Year", Semester: "Sem 4", Subject: "DSGN 308 - Design Studio 2" },
  { Name: "Navraj Ghimire", Course: "IDD", Year: "Second Year", Semester: "Sem 4", Subject: "DSGN 309 - Future of Design" },
  { Name: "Navraj Ghimire", Course: "IDD", Year: "Second Year", Semester: "Sem 4", Subject: "PROJ 309 - Capstone Project" }














];

// ========================== Search Function by Name ==========================
function searchByName() {
  let input = document.getElementById("searchInput").value.toLowerCase().trim();
  const container = document.getElementById("resultContainer");

  // If the search field is empty, show an alert and exit the function
  if (!input) {
      alert("Please enter a name to search.");
      return;
  }

  console.log("🔍 Searching for:", input);

  // Filter student data to find matches based on name
  let results = studentData.filter(student => 
      student.Name.toLowerCase().includes(input)
  );

  console.log("🔍 Search Results:", results);
  displayResults(results);  // Call function to display results
}







// ========================== Search Function by Year ==========================
function searchByYear() {
  let selectedYear = document.getElementById("studentDropdown").value;
  const container = document.getElementById("resultContainer");

  // Clear previous results
  container.innerHTML = "";

  // If no year is selected, show an alert and exit
  if (!selectedYear) {
      alert("Please select a year.");
      return;
  }

  console.log("📜 Searching for students in:", selectedYear);

  // Filter student data to get students of the selected year
  let results = studentData.filter(student => student.Year === selectedYear);

  console.log("📜 Filtered Results (Before Removing Duplicates):", results);

  // Use a Set to remove duplicate names
  let uniqueStudents = [];
  let seenNames = new Set();

  results.forEach(student => {
      if (!seenNames.has(student.Name)) {
          seenNames.add(student.Name);
          uniqueStudents.push(student);
      }
  });

  console.log("📜 Filtered Results (After Removing Duplicates):", uniqueStudents);

  // If no students are found for the selected year, display a message
  if (uniqueStudents.length === 0) {
      container.innerHTML = "<p>No students found for the selected year.</p>";
      return;
  }

  // Display results in a list format
  let resultHTML = `<h3>Students in ${selectedYear}:</h3><ul>`;
  uniqueStudents.forEach(student => {
      let email = student.Email || "N/A"; // Handle missing emails
      resultHTML += `<li><strong>Name:</strong> ${student.Name}, <strong>Email:</strong> ${email}</li>`;
  });
  resultHTML += `</ul>`;

  container.innerHTML = resultHTML;
}








// ========================== Function to Display Results (Name & Email) ==========================
function displayResults(results) {
  const container = document.getElementById("resultContainer");
  container.innerHTML = ""; // Clear previous results

  if (results.length === 0) {
      container.innerHTML = "<p>No results found</p>";
      return;
  }

  // Extract name and email (assuming the first match contains the correct email)
  let name = results[0].Name;
  let email = results[0].Email || "N/A"; // Handle missing emails

  // Display name and email
  container.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
  `;
}
