
   
  
  // ========================== Local Student Data ==========================
  const studentData = [




    { Name: "Navraj Ghimire", Course: "IDD", Year: "Second Year", Semester: "Sem 1", Subject: "DIGI 300 - Digital Imaging" , Email: "navrajmahaprasad.ghimire@edu.sait.ca" },
    { Name: "Navraj Ghimire", Course: "IDD", Year: "Second Year", Semester: "Sem 1", Subject: "DSGN 304 - Advanced Visual Design" },
    { Name: "Navraj Ghimire", Course: "IDD", Year: "Second Year", Semester: "Sem 1", Subject: "DSGN 313 - Typography" },
    { Name: "Navraj Ghimire", Course: "IDD", Year: "Second Year", Semester: "Sem 1", Subject: "PRNT 300 - Print Production" },
    { Name: "Navraj Ghimire", Course: "IDD", Year: "Second Year", Semester: "Sem 1", Subject: "DSGN 306 - Design Studio 1" },
    
    { Name: "Navraj Ghimire", Course: "IDD", Year: "Second Year", Semester: "Sem 2", Subject: "DSGN 308 - Design Studio 2" , Email: "navrajmahaprasad.ghimire@edu.sait.ca" },
    { Name: "Navraj Ghimire", Course: "IDD", Year: "Second Year", Semester: "Sem 2", Subject: "DSGN 309 - Future of Design" },
    { Name: "Navraj Ghimire", Course: "IDD", Year: "Second Year", Semester: "Sem 2", Subject: "PROJ 309 - Capstone Project" },
    { Name: "Navraj Ghimire", Course: "IDD", Year: "Second Year", Semester: "Sem 2", Subject: "DIGI 301 - Digital Marketing" },
    
    
    
    
    { Name: "Jashanpreet Kaur", Course: "IDD", Year: "First Year", Semester: "Sem 1", Subject: "COMM 238 - Technical Communications I", Email: "Jashanpreet.Kaur04@edu.sait.ca" },
    { Name: "Jashanpreet Kaur", Course: "IDD", Year: "First Year", Semester: "Sem 1", Subject: "CPRG 219 - Introduction to Web Communications" },
    { Name: "Jashanpreet Kaur", Course: "IDD", Year: "First Year", Semester: "Sem 1", Subject: "DSGN 228 - Introduction to Visual Design" },
    { Name: "Jashanpreet Kaur", Course: "IDD", Year: "First Year", Semester: "Sem 1", Subject: "MMDA 202 - Digital Media Foundations" },
    { Name: "Jashanpreet Kaur", Course: "IDD", Year: "First Year", Semester: "Sem 1", Subject: "PHIL 241 - Critical Thinking" },
    
    
    { Name: "Jashanpreet Kaur", Course: "IDD", Year: "First Year", Semester: "Sem 2", Subject: "CPRG 218 - Intermediate Web Communications", Email: "Jashanpreet.Kaur04@edu.sait.ca" },
    { Name: "Jashanpreet Kaur", Course: "IDD", Year: "First Year", Semester: "Sem 2", Subject: "PMGT 200 - Product Management" },
    { Name: "Jashanpreet Kaur", Course: "IDD", Year: "First Year", Semester: "Sem 2", Subject: "DSGN 221 - Intermediate Visual Design" },
    { Name: "Jashanpreet Kaur", Course: "IDD", Year: "First Year", Semester: "Sem 2", Subject: "DSGN 227 - Introduction to User Experience (UX)" },
    { Name: "Jashanpreet Kaur", Course: "IDD", Year: "First Year", Semester: "Sem 2", Subject: "MMDA 203 - Intermediate Digital Media Production" },
    
    
    
    
    
    { Name: "Mankirat Kaur", Course: "IDD", Year: "First Year", Semester: "Sem 1", Subject: "COMM 238 - Technical Communications I", Email: "Mankirat.Kaur@edu.sait.ca" },
    { Name: "Mankirat Kaur", Course: "IDD", Year: "First Year", Semester: "Sem 1", Subject: "CPRG 219 - Introduction to Web Communications" },
    { Name: "Mankirat Kaur", Course: "IDD", Year: "First Year", Semester: "Sem 1", Subject: "DSGN 228 - Introduction to Visual Design" },
    { Name: "Mankirat Kaur", Course: "IDD", Year: "First Year", Semester: "Sem 1", Subject: "MMDA 202 - Digital Media Foundations" },
    { Name: "Mankirat Kaur", Course: "IDD", Year: "First Year", Semester: "Sem 1", Subject: "PHIL 241 - Critical Thinking" },
    
    
    { Name: "Mankirat Kaur", Course: "IDD", Year: "First Year", Semester: "Sem 2", Subject: "CPRG 218 - Intermediate Web Communications", Email: "Mankirat.Kaur@edu.sait.ca" },
    { Name: "Mankirat Kaur", Course: "IDD", Year: "First Year", Semester: "Sem 2", Subject: "PMGT 200 - Product Management" },
    { Name: "Mankirat Kaur", Course: "IDD", Year: "First Year", Semester: "Sem 2", Subject: "DSGN 221 - Intermediate Visual Design" },
    { Name: "Mankirat Kaur", Course: "IDD", Year: "First Year", Semester: "Sem 2", Subject: "DSGN 227 - Introduction to User Experience (UX)" },
    { Name: "Mankirat Kaur", Course: "IDD", Year: "First Year", Semester: "Sem 2", Subject: "MMDA 203 - Intermediate Digital Media Production" },
    
    
    
    
    
    
    { Name: "Rajdeep Narela", Course: "IDD", Year: "Second Year", Semester: "Sem 1", Subject: "DIGI 300 - Digital Imaging" , Email: "RajdeepShaktidan.Narela@edu.sait.ca" },
    { Name: "Rajdeep Narela", Course: "IDD", Year: "Second Year", Semester: "Sem 1", Subject: "DSGN 304 - Advanced Visual Design" },
    { Name: "Rajdeep Narela", Course: "IDD", Year: "Second Year", Semester: "Sem 1", Subject: "DSGN 313 - Typography" },
    { Name: "Rajdeep Narela", Course: "IDD", Year: "Second Year", Semester: "Sem 1", Subject: "PRNT 300 - Print Production" },
    { Name: "Rajdeep Narela", Course: "IDD", Year: "Second Year", Semester: "Sem 1", Subject: "DSGN 306 - Design Studio 1" },
    
    { Name: "Rajdeep Narela", Course: "IDD", Year: "Second Year", Semester: "Sem 2", Subject: "DSGN 308 - Design Studio 2" , Email: "RajdeepShaktidan.Narela@edu.sait.ca" },
    { Name: "Rajdeep Narela", Course: "IDD", Year: "Second Year", Semester: "Sem 2", Subject: "DSGN 309 - Future of Design" },
    { Name: "Rajdeep Narela", Course: "IDD", Year: "Second Year", Semester: "Sem 2", Subject: "PROJ 309 - Capstone Project" },
    { Name: "Rajdeep Narela", Course: "IDD", Year: "Second Year", Semester: "Sem 2", Subject: "DIGI 301 - Digital Marketing" },
    
    
    
    
    
    
    
    { Name: "Zachery Favel", Course: "SD", Year: "First Year", Semester: "Sem 1", Subject: "COMM 238 - Technical Communications I", Email: "zachery.favel@edu.sait.ca" },																	
    { Name: "Zachery Favel", Course: "SD", Year: "First Year", Semester: "Sem 1", Subject: "CPNT 217 - Introduction to Network Systems" },																	
    { Name: "Zachery Favel", Course: "SD", Year: "First Year", Semester: "Sem 1", Subject: "CPRG 213 - Web Development 1" },																	
    { Name: "Zachery Favel", Course: "SD", Year: "First Year", Semester: "Sem 1", Subject: "CPRG 216 - Object-Oriented Programming 1" },																	
    { Name: "Zachery Favel", Course: "SD", Year: "First Year", Semester: "Sem 1", Subject: "MATH 237 - Mathematics for Technologists" },
    
    { Name: "Zachery Favel", Course: "SD", Year: "First Year", Semester: "Sem 2", Subject: "CPRG 211 - Object-Oriented Programming 2", Email: "zachery.favel@edu.sait.ca" },																		
    { Name: "Zachery Favel", Course: "SD", Year: "First Year", Semester: "Sem 2", Subject: "CPRG 250 - Database Design and Programming" },																	
    { Name: "Zachery Favel", Course: "SD", Year: "First Year", Semester: "Sem 2", Subject: "CPSY 200 - Software Analysis and Design" },																	
    { Name: "Zachery Favel", Course: "SD", Year: "First Year", Semester: "Sem 2", Subject: "CPSY 202 - User Experience and Design" },																	
    { Name: "Zachery Favel", Course: "SD", Year: "First Year", Semester: "Sem 2", Subject: "PHIL 241 - Critical Thinking" },	
    



    { Name: "MitanshiKetul Pandya", Course: "SD", Year: "Second Year", Semester: "Sem 1", Subject: "CPRG 303 - Mobile Application Development", Email: "MitanshiKetul.Pandya@edu.sait.ca" },																	
    { Name: "MitanshiKetul Pandya", Course: "SD", Year: "Second Year", Semester: "Sem 1", Subject: "CPRG 304 - Object-Oriented Programming 3" },
    { Name: "MitanshiKetul Pandya", Course: "SD", Year: "Second Year", Semester: "Sem 1", Subject: "CPRG 306 - Web Development 2" },
    { Name: "MitanshiKetul Pandya", Course: "SD", Year: "Second Year", Semester: "Sem 1", Subject: "CPRG 307 - Database Programming" },
    { Name: "MitanshiKetul Pandya", Course: "SD", Year: "Second Year", Semester: "Sem 1", Subject: "CPSY 301 - Software Projects: Analysis, Design, and Management" },
    
    { Name: "MitanshiKetul Pandya", Course: "SD", Year: "Second Year", Semester: "Sem 2", Subject: "CPRG 305 - Software Testing and Deployment", Email: "MitanshiKetul.Pandya@edu.sait.ca" },	
    { Name: "MitanshiKetul Pandya", Course: "SD", Year: "Second Year", Semester: "Sem 2", Subject: "CPSY 300 - Cloud Computing for Software Development" },
    { Name: "MitanshiKetul Pandya", Course: "SD", Year: "Second Year", Semester: "Sem 2", Subject: "INTP 302 - Emerging Trends in Software Development" },
    { Name: "MitanshiKetul Pandya", Course: "SD", Year: "Second Year", Semester: "Sem 2", Subject: "ITSC 320 - Software Security" },
    { Name: "MitanshiKetul Pandya", Course: "SD", Year: "Second Year", Semester: "Sem 2", Subject: "PROJ 309 - Capstone Project" },
    
    
    
    { Name: "Jakon Cornell", Course: "ITS", Year: "First Year", Semester: "Sem 1", Subject: "CMPH 209 - Introduction to Hardware", Email: "jakob.cornell@edu.sait.ca" },	
    


    { Name: "PrabhnoorSingh Lubana", Course: "ITS", Year: "First Year", Semester: "Sem 1", Subject: "CMPH 209 - Introduction to Hardware", Email: "PrabhnoorSingh.Lubana@edu.sait.ca" },
    { Name: "PrabhnoorSingh Lubana", Course: "ITS", Year: "First Year", Semester: "Sem 1", Subject: "CMPH 209 - Introduction to Hardware", Email: "PrabhnoorSingh.Lubana@edu.sait.ca" },	
    { Name: "PrabhnoorSingh Lubana", Course: "ITS", Year: "First Year", Semester: "Sem 1", Subject: "COMM 238 - Technical Communications I" },	
    { Name: "PrabhnoorSingh Lubana", Course: "ITS", Year: "First Year", Semester: "Sem 1", Subject: "CPNT 219 - Introduction to Networks" },	
    { Name: "PrabhnoorSingh Lubana", Course: "ITS", Year: "First Year", Semester: "Sem 1", Subject: "CPRG 216 - Object-Oriented Programming 1" },	
    { Name: "PrabhnoorSingh Lubana", Course: "ITS", Year: "First Year", Semester: "Sem 1", Subject: "MATH 237 - Mathematics for Technologists" },	
    
    { Name: "PrabhnoorSingh Lubana", Course: "ITS", Year: "First Year", Semester: "Sem 2", Subject: "CPNT 224 - Switching and Routing Essentials", Email: "PrabhnoorSingh.Lubana@edu.sait.ca" },	
    { Name: "PrabhnoorSingh Lubana", Course: "ITS", Year: "First Year", Semester: "Sem 2", Subject: "CPRG 217 - Scripting" },
    { Name: "PrabhnoorSingh Lubana", Course: "ITS", Year: "First Year", Semester: "Sem 2", Subject: "CPSY 204 - Server Fundamentals" },
    { Name: "PrabhnoorSingh Lubana", Course: "ITS", Year: "First Year", Semester: "Sem 2", Subject: "CPSY 206 - Virtualization Fundamentals" },
    { Name: "PrabhnoorSingh Lubana", Course: "ITS", Year: "First Year", Semester: "Sem 2", Subject: "PHIL 241 - Critical Thinking" },
    
    { Name: "Riya Patel", Course: "ITS", Year: "Second Year", Semester: "Sem 1", Subject: "CPNT 300 - Enterprise Networking, Security, and Automation", Email: "riya.patel@edu.sait.ca" },	
    { Name: "Riya Patel", Course: "ITS", Year: "Second Year", Semester: "Sem 1", Subject: "CPNT 302 - Wireless Networking Fundamentals" },
    { Name: "Riya Patel", Course: "ITS", Year: "Second Year", Semester: "Sem 1", Subject: "INTP 301 - Emerging Technologies" },
    { Name: "Riya Patel", Course: "ITS", Year: "Second Year", Semester: "Sem 1", Subject: "ITSC 300 - IT Security Fundamentals" },
    { Name: "Riya Patel", Course: "ITS", Year: "Second Year", Semester: "Sem 1", Subject: "ITSC 350 - Intermediate IT Security" },
    
    { Name: "Riya Patel", Course: "ITS", Year: "Second Year", Semester: "Sem 2", Subject: "CPSY 302 - Advanced Servers" },
    { Name: "Riya Patel", Course: "ITS", Year: "Second Year", Semester: "Sem 2", Subject: "CPSY 304 - Cloud Computing" },
    { Name: "Riya Patel", Course: "ITS", Year: "Second Year", Semester: "Sem 2", Subject: "CPSY 350 - Intermediate Virtualization", Email: "riya.patel@edu.sait.ca" },	
    { Name: "Riya Patel", Course: "ITS", Year: "Second Year", Semester: "Sem 2", Subject: "CPSY 352 - IT Service Management" },
    { Name: "Riya Patel", Course: "ITS", Year: "Second Year", Semester: "Sem 2", Subject: "PROJ 309 - Capstone Project" }
    
     
      
      
      ];

      





//// Function to get query parameter from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get student details from URL parameters
const studentName = getQueryParam("name") || "N/A";

// Find all records of the student by name (if they exist in the array)
const studentRecords = studentData.filter(student => student.Name === studentName);

// Check if there are any records found for the student
if (studentRecords.length > 0) {
    const student = studentRecords[0];  // Pick the first record (you can modify this logic if needed)

    // Update HTML content dynamically
    document.getElementById("studentName").textContent = student.Name;
    document.getElementById("studentEmail").textContent = student.Email || "N/A";

 // HIDEN AT THE MOMENT

    //  document.getElementById("studentYear").textContent = student.Year || "N/A";
    //  document.getElementById("studentSemester").textContent = student.Semester || "N/A";

    // Construct the photo source URL
    const photoSrc = `assets/studentsphoto/${encodeURIComponent(student.Name)}.jpg`;

    // Debugging log to see the image path
    console.log("Trying to load photo from:", photoSrc); 

    const studentPhoto = document.getElementById("studentPhoto");

    // Set the image source to the constructed path
    studentPhoto.src = photoSrc;

    // Create a new Image object to check if the image exists
    const img = new Image();
    img.src = photoSrc;

    img.onload = function() {
        // If the image loads successfully, log it
        console.log("Photo loaded successfully!");
    };

    img.onerror = function() {
        // If the image fails to load, log it and set the default image
        console.log("Error: Photo not found. Using default image.");
        studentPhoto.src = 'assets/studentsphoto/default.jpg';
    };
} else {
    // If the student isn't found, display a default message
    document.getElementById("studentName").textContent = "Student not found.";
    document.getElementById("studentEmail").textContent = "N/A";

     // HIDEN AT THE MOMENT
     
    //document.getElementById("studentYear").textContent = "N/A";
   // document.getElementById("studentSemester").textContent = "N/A";
    
    // Set the default photo
    document.getElementById("studentPhoto").src = 'assets/studentsphoto/default.jpg';
}
function goBack() {
    // Check if there's a previous page in the history stack
    if (window.history.length > 1) {
        window.history.back();  // Go back if there's history
    } else {
        window.location.href = 'connect.html';  // Redirect to connect.html if no history
    }
}






// Connect button function to open Microsoft Teams desktop chat directly

document.getElementById("connectButton").addEventListener("click", function() {
    if (studentRecords.length > 0 && studentRecords[0].Email) {
        const teamsUrl = `msteams:/l/chat/0/0?users=${encodeURIComponent(studentRecords[0].Email)}`;

        // Try to open Microsoft Teams
        const newWindow = window.open(teamsUrl, "_self");

        // Check if Teams opened successfully
        setTimeout(() => {
            if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
                alert("If Microsoft Teams did not open, please install Teams, log in with your SAIT account, and try again.");
            }
        }, 3000);
    } else {
        alert("No email available for this student.");
    }
});
