 
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
{ Name: "Navraj Ghimire", Course: "IDD", Year: "First Year", Semester: "Sem 1", Subject: "CPRG 219 - Introduction to Web Communications" },
{ Name: "Navraj Ghimire", Course: "IDD", Year: "First Year", Semester: "Sem 1", Subject: "DSGN 228 - Introduction to Visual Design" },
{ Name: "Navraj Ghimire", Course: "IDD", Year: "First Year", Semester: "Sem 1", Subject: "MMDA 202 - Digital Media Foundations" },
{ Name: "Navraj Ghimire", Course: "IDD", Year: "First Year", Semester: "Sem 1", Subject: "PHIL 241 - Critical Thinking" },

{ Name: "Navraj Ghimire", Course: "IDD", Year: "First Year", Semester: "Sem 2", Subject: "CPRG 218 - Intermediate Web Communications", Email: "navrajghimire@gmail.com" },
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
{ Name: "Navraj Ghimire", Course: "IDD", Year: "Second Year", Semester: "Sem 4", Subject: "PROJ 309 - Capstone Project" },
{ Name: "Navraj Ghimire", Course: "IDD", Year: "Second Year", Semester: "Sem 4", Subject: "DIGI 301 - Digital Marketing" },



{ Name: "Zachery Favel", Course: "SD", Year: "First Year", Semester: "Sem 1", Subject: "COMM 238 - Technical Communications I", Email: "ZacheryFavel@gmail.com" },																	
{ Name: "Zachery Favel", Course: "SD", Year: "First Year", Semester: "Sem 1", Subject: "CPNT 217 - Introduction to Network Systems" },																	
{ Name: "Zachery Favel", Course: "SD", Year: "First Year", Semester: "Sem 1", Subject: "CPRG 213 - Web Development 1" },																	
{ Name: "Zachery Favel", Course: "SD", Year: "First Year", Semester: "Sem 1", Subject: "CPRG 216 - Object-Oriented Programming 1" },																	
{ Name: "Zachery Favel", Course: "SD", Year: "First Year", Semester: "Sem 1", Subject: "MATH 237 - Mathematics for Technologists" },

{ Name: "Zachery Favel", Course: "SD", Year: "First Year", Semester: "Sem 2", Subject: "CPRG 211 - Object-Oriented Programming 2" },																	
{ Name: "Zachery Favel", Course: "SD", Year: "First Year", Semester: "Sem 2", Subject: "CPRG 250 - Database Design and Programming" },																	
{ Name: "Zachery Favel", Course: "SD", Year: "First Year", Semester: "Sem 2", Subject: "CPSY 200 - Software Analysis and Design" },																	
{ Name: "Zachery Favel", Course: "SD", Year: "First Year", Semester: "Sem 2", Subject: "CPSY 202 - User Experience and Design" },																	
{ Name: "Zachery Favel", Course: "SD", Year: "First Year", Semester: "Sem 2", Subject: "PHIL 241 - Critical Thinking" },	

{ Name: "Zachery Favel", Course: "SD", Year: "Second Year", Semester: "Sem 3", Subject: "CPRG 303 - Mobile Application Development" },
{ Name: "Zachery Favel", Course: "SD", Year: "Second Year", Semester: "Sem 3", Subject: "CPRG 304 - Object-Oriented Programming 3" },
{ Name: "Zachery Favel", Course: "SD", Year: "Second Year", Semester: "Sem 3", Subject: "CPRG 306 - Web Development 2" },
{ Name: "Zachery Favel", Course: "SD", Year: "Second Year", Semester: "Sem 3", Subject: "CPRG 307 - Database Programming" },
{ Name: "Zachery Favel", Course: "SD", Year: "Second Year", Semester: "Sem 3", Subject: "CPSY 301 - Software Projects: Analysis, Design, and Management" },

{ Name: "Zachery Favel", Course: "SD", Year: "Second Year", Semester: "Sem 4", Subject: "CPRG 305 - Software Testing and Deployment" },
{ Name: "Zachery Favel", Course: "SD", Year: "Second Year", Semester: "Sem 4", Subject: "CPSY 300 - Cloud Computing for Software Development" },
{ Name: "Zachery Favel", Course: "SD", Year: "Second Year", Semester: "Sem 4", Subject: "INTP 302 - Emerging Trends in Software Development" },
{ Name: "Zachery Favel", Course: "SD", Year: "Second Year", Semester: "Sem 4", Subject: "ITSC 320 - Software Security" },
{ Name: "Zachery Favel", Course: "SD", Year: "Second Year", Semester: "Sem 4", Subject: "PROJ 309 - Capstone Project" },



{ Name: "Riya Patel", Course: "ITS", Year: "First Year", Semester: "Sem 1", Subject: "CMPH 209 - Introduction to Hardware", Email: "Riyapatel@gmail.com" },	
{ Name: "Riya Patel", Course: "ITS", Year: "First Year", Semester: "Sem 1", Subject: "COMM 238 - Technical Communications I" },	
{ Name: "Riya Patel", Course: "ITS", Year: "First Year", Semester: "Sem 1", Subject: "CPNT 219 - Introduction to Networks" },	
{ Name: "Riya Patel", Course: "ITS", Year: "First Year", Semester: "Sem 1", Subject: "CPRG 216 - Object-Oriented Programming 1" },	
{ Name: "Riya Patel", Course: "ITS", Year: "First Year", Semester: "Sem 1", Subject: "MATH 237 - Mathematics for Technologists" },	

{ Name: "Riya Patel", Course: "ITS", Year: "First Year", Semester: "Sem 2", Subject: "CPNT 224 - Switching and Routing Essentials" },
{ Name: "Riya Patel", Course: "ITS", Year: "First Year", Semester: "Sem 2", Subject: "CPRG 217 - Scripting" },
{ Name: "Riya Patel", Course: "ITS", Year: "First Year", Semester: "Sem 2", Subject: "CPSY 204 - Server Fundamentals" },
{ Name: "Riya Patel", Course: "ITS", Year: "First Year", Semester: "Sem 2", Subject: "CPSY 206 - Virtualization Fundamentals" },
{ Name: "Riya Patel", Course: "ITS", Year: "First Year", Semester: "Sem 2", Subject: "PHIL 241 - Critical Thinking" },

{ Name: "Riya Patel", Course: "ITS", Year: "Second Year", Semester: "Sem 3", Subject: "CPNT 300 - Enterprise Networking, Security, and Automation" },
{ Name: "Riya Patel", Course: "ITS", Year: "Second Year", Semester: "Sem 3", Subject: "CPNT 302 - Wireless Networking Fundamentals" },
{ Name: "Riya Patel", Course: "ITS", Year: "Second Year", Semester: "Sem 3", Subject: "INTP 301 - Emerging Technologies" },
{ Name: "Riya Patel", Course: "ITS", Year: "Second Year", Semester: "Sem 3", Subject: "ITSC 300 - IT Security Fundamentals" },
{ Name: "Riya Patel", Course: "ITS", Year: "Second Year", Semester: "Sem 3", Subject: "ITSC 350 - Intermediate IT Security" },

{ Name: "Riya Patel", Course: "ITS", Year: "Second Year", Semester: "Sem 4", Subject: "CPSY 302 - Advanced Servers" },
{ Name: "Riya Patel", Course: "ITS", Year: "Second Year", Semester: "Sem 4", Subject: "CPSY 304 - Cloud Computing" },
{ Name: "Riya Patel", Course: "ITS", Year: "Second Year", Semester: "Sem 4", Subject: "CPSY 350 - Intermediate Virtualization" },
{ Name: "Riya Patel", Course: "ITS", Year: "Second Year", Semester: "Sem 4", Subject: "CPSY 352 - IT Service Management" },
{ Name: "Riya Patel", Course: "ITS", Year: "Second Year", Semester: "Sem 4", Subject: "PROJ 309 - Capstone Project" }

  
  
  
  
  
  
  
  
  
  
  
  
  
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










  // ========================== Function to Display Results with search filters ==========================




  function searchDropdown() {
    let selectedCourse = document.getElementById("courseDropdown").value.trim();
    let selectedYear = document.getElementById("yearDropdown").value.trim();
    let selectedSemester = document.getElementById("semesterDropdown").value.trim();
    let selectedSubject = document.getElementById("subjectDropdown").value.trim();
    const container = document.getElementById("resultContainerDropdown");

    // Clear previous results
    container.innerHTML = "";

    console.log("🔎 Selected Filters Before Normalization:", {
        Course: selectedCourse,
        Year: selectedYear,
        Semester: selectedSemester,
        Subject: selectedSubject
    });

    // ✅ Normalize filter values (Fix Dropdown Values)
    const courseMap = {
        "graphic_design": "IDD",
        "software_engineering": "SD",
        "business_management": "ITS"
    };
    const yearMap = {
        "first_year": "First Year",
        "second_year": "Second Year",
        "third_year": "Third Year",
        "fourth_year": "Fourth Year"
    };
    const semesterMap = {
        "semester_1": "Sem 1",
        "semester_2": "Sem 2"
    };

    selectedCourse = courseMap[selectedCourse] || "";
    selectedYear = yearMap[selectedYear] || "";
    selectedSemester = semesterMap[selectedSemester] || "";

    console.log("✅ Normalized Filters:", {
        Course: selectedCourse,
        Year: selectedYear,
        Semester: selectedSemester,
        Subject: selectedSubject
    });

    // ✅ Apply Filters - Ensure all filters work correctly
    let filteredResults = studentData.filter(student => {
        let courseMatch = !selectedCourse || student.Course === selectedCourse;
        let yearMatch = !selectedYear || student.Year === selectedYear;
        let semesterMatch = !selectedSemester || student.Semester === selectedSemester;
        let subjectMatch = !selectedSubject || student.Subject === selectedSubject;

        // Debugging Individual Matches
        if (!courseMatch) console.log(`🚨 Course Mismatch: Expected ${selectedCourse}, Found ${student.Course}`);
        if (!yearMatch) console.log(`🚨 Year Mismatch: Expected ${selectedYear}, Found ${student.Year}`);
        if (!semesterMatch) console.log(`🚨 Semester Mismatch: Expected ${selectedSemester}, Found ${student.Semester}`);
        if (!subjectMatch) console.log(`🚨 Subject Mismatch: Expected ${selectedSubject}, Found ${student.Subject}`);

        return courseMatch && yearMatch && semesterMatch && subjectMatch;
    });

    console.log("🔍 Filtered Results After Fix:", filteredResults);

    // ✅ Remove duplicates based on Name
    let uniqueStudents = [];
    let seenNames = new Set();

    filteredResults.forEach(student => {
        if (!seenNames.has(student.Name)) {
            seenNames.add(student.Name);
            uniqueStudents.push(student);
        }
    });

    console.log("✅ Unique Filtered Students:", uniqueStudents);

    // ✅ Display results
    if (uniqueStudents.length === 0) {
        container.innerHTML = "<p>No students found for the selected criteria.</p>";
        return;
    }

    let resultHTML = `<h3>Matching Students:</h3><ul>`;
    uniqueStudents.forEach(student => {
        let email = student.Email || "N/A";
        resultHTML += `<li><strong>Name:</strong> ${student.Name}, <strong>Email:</strong> ${email}</li>`;
    });
    resultHTML += `</ul>`;

    container.innerHTML = resultHTML;
}
