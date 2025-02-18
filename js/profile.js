function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Populate profile details dynamically
document.getElementById("studentName").textContent = getQueryParam("name") || "N/A";
document.getElementById("studentEmail").textContent = getQueryParam("email") || "N/A";
document.getElementById("studentYear").textContent = getQueryParam("year") || "N/A";
document.getElementById("studentSemester").textContent = getQueryParam("semester") || "N/A";

// Load the student photo
let photoUrl = getQueryParam("photo") || "default.jpg";
document.getElementById("studentPhoto").src = decodeURIComponent(photoUrl);
