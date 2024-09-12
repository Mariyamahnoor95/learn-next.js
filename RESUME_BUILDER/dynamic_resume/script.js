// Function to dynamically add education fields
function addEducationFields() {
    var educationSection = document.getElementById('education-section');
    var newEntry = document.createElement('div');
    newEntry.classList.add('education-entry');
    newEntry.innerHTML = "\n      <label for=\"degree\">Degree</label>\n      <input type=\"text\" class=\"degree\" required>\n  \n      <label for=\"institution\">Institution</label>\n      <input type=\"text\" class=\"institution\" required>\n  \n      <label for=\"year\">Year</label>\n      <input type=\"text\" class=\"year\" required>\n    ";
    educationSection.appendChild(newEntry);
}
// Function to dynamically add work experience fields
function addWorkFields() {
    var workSection = document.getElementById('work-section');
    var newEntry = document.createElement('div');
    newEntry.classList.add('work-entry');
    newEntry.innerHTML = "\n      <label for=\"position\">Position</label>\n      <input type=\"text\" class=\"position\" required>\n  \n      <label for=\"company\">Company</label>\n      <input type=\"text\" class=\"company\" required>\n  \n      <label for=\"work-years\">Years</label>\n      <input type=\"text\" class=\"work-years\" required>\n    ";
    workSection.appendChild(newEntry);
}
// Function to dynamically add skill fields
function addSkillFields() {
    var skillsSection = document.getElementById('skills-section');
    var newEntry = document.createElement('input');
    newEntry.type = 'text';
    newEntry.classList.add('skills');
    newEntry.required = true;
    skillsSection.appendChild(newEntry);
}
// Function to generate the resume
function generateResume(event) {
    event.preventDefault(); // Prevent form submission
    // Fetch personal info
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    // Fetch multiple education entries
    var educationEntries = document.querySelectorAll('.education-entry');
    var educationHTML = '';
    educationEntries.forEach(function (entry) {
        var degree = entry.querySelector('.degree').value;
        var institution = entry.querySelector('.institution').value;
        var year = entry.querySelector('.year').value;
        educationHTML += "<p><strong>".concat(degree, "</strong>, ").concat(institution, " (").concat(year, ")</p>");
    });
    // Fetch multiple work experience entries
    var workEntries = document.querySelectorAll('.work-entry');
    var workHTML = '';
    workEntries.forEach(function (entry) {
        var position = entry.querySelector('.position').value;
        var company = entry.querySelector('.company').value;
        var workYears = entry.querySelector('.work-years').value;
        workHTML += "<p><strong>".concat(position, "</strong>, ").concat(company, " (").concat(workYears, ")</p>");
    });
    // Fetch multiple skills
    var skills = document.querySelectorAll('.skills');
    var skillsHTML = '<ul>';
    skills.forEach(function (skill) {
        skillsHTML += "<li>".concat(skill.value, "</li>");
    });
    skillsHTML += '</ul>';
    // Populate the resume section
    var resumeContent = document.getElementById('resume-content');
    resumeContent.innerHTML = "\n      <h3>".concat(name, "</h3>\n      <p>Email: <a href=\"mailto:").concat(email, "\">").concat(email, "</a></p>\n      <p>Phone: ").concat(phone, "</p>\n      \n      <h4>Education</h4>\n      ").concat(educationHTML, "\n  \n      <h4>Work Experience</h4>\n      ").concat(workHTML, "\n  \n      <h4>Skills</h4>\n      ").concat(skillsHTML, "\n    ");
    // Show the resume section
    var resumeSection = document.getElementById('resume-section');
    resumeSection.classList.remove('hidden');
}
// Add event listeners to the form and buttons
var form = document.getElementById('resume-form');
form.addEventListener('submit', generateResume);
document.getElementById('add-education-btn').addEventListener('click', addEducationFields);
document.getElementById('add-work-btn').addEventListener('click', addWorkFields);
document.getElementById('add-skill-btn').addEventListener('click', addSkillFields);
