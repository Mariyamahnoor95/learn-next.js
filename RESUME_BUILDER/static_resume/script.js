// Resume data
var personalInfo = {
    name: "Mariyam Mahnoor",
    email: "mariyamahnoor@gamil.com",
    phone: "+1234567890",
};
var education = [
    {
        degree: "B.E in Electronics",
        institution: "NED University",
        year: "2015 - 2019",
    },
    { degree: "Researcher", institution: "NED  University", year: "2020 - 2022" },
];
var skills = [
    { name: "HTML, CSS, JavaScript" },
    { name: "TypeScript, React.js" },
    { name: "Python, SQL" },
];
var experiences = [
    {
        position: "Software Developer",
        company: "Tech Solutions",
        period: "2020 - Present",
    },
    { position: "Intern", company: "Data Analytics Corp", period: "2019 - 2020" },
];
// Function to dynamically add skills
function addSkills() {
    var skillList = document
        .getElementById("skills")
        .getElementsByTagName("ul")[0];
    skills.forEach(function (skill) {
        var li = document.createElement("li");
        li.textContent = skill.name;
        skillList.appendChild(li);
    });
}
// Function to toggle visibility of a section
function toggleVisibility(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        var content = section.querySelectorAll("p, ul")[0]; // Typecasting to HTMLElement
        if (content) {
            var display = content.style.display;
            content.style.display = display === "none" ? "block" : "none";
        }
    }
}
// Add event listeners and initial setup
window.onload = function () {
    addSkills();
};
