// Function to dynamically add education fields
function addEducationFields(): void {
  const educationSection = document.getElementById('education-section') as HTMLElement;

  const newEntry = document.createElement('div');
  newEntry.classList.add('education-entry');
  newEntry.innerHTML = `
    <label for="degree">Degree</label>
    <input type="text" class="degree" required>

    <label for="institution">Institution</label>
    <input type="text" class="institution" required>

    <label for="year">Year</label>
    <input type="text" class="year" required>
  `;
  educationSection.appendChild(newEntry);
}

// Function to dynamically add work experience fields
function addWorkFields(): void {
  const workSection = document.getElementById('work-section') as HTMLElement;

  const newEntry = document.createElement('div');
  newEntry.classList.add('work-entry');
  newEntry.innerHTML = `
    <label for="position">Position</label>
    <input type="text" class="position" required>

    <label for="company">Company</label>
    <input type="text" class="company" required>

    <label for="work-years">Years</label>
    <input type="text" class="work-years" required>
  `;
  workSection.appendChild(newEntry);
}

// Function to dynamically add skill fields
function addSkillFields(): void {
  const skillsSection = document.getElementById('skills-section') as HTMLElement;

  const newEntry = document.createElement('input');
  newEntry.type = 'text';
  newEntry.classList.add('skills');
  newEntry.required = true;

  skillsSection.appendChild(newEntry);
}

// Function to generate the resume
function generateResume(event: Event): void {
  event.preventDefault(); // Prevent form submission

  // Fetch personal info
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;

  // Fetch multiple education entries
  const educationEntries = document.querySelectorAll('.education-entry');
  let educationHTML = '';
  educationEntries.forEach(entry => {
    const degree = (entry.querySelector('.degree') as HTMLInputElement).value;
    const institution = (entry.querySelector('.institution') as HTMLInputElement).value;
    const year = (entry.querySelector('.year') as HTMLInputElement).value;
    educationHTML += `<p><strong>${degree}</strong>, ${institution} (${year})</p>`;
  });

  // Fetch multiple work experience entries
  const workEntries = document.querySelectorAll('.work-entry');
  let workHTML = '';
  workEntries.forEach(entry => {
    const position = (entry.querySelector('.position') as HTMLInputElement).value;
    const company = (entry.querySelector('.company') as HTMLInputElement).value;
    const workYears = (entry.querySelector('.work-years') as HTMLInputElement).value;
    workHTML += `<p><strong>${position}</strong>, ${company} (${workYears})</p>`;
  });

  // Fetch multiple skills
  const skills = document.querySelectorAll('.skills');
  let skillsHTML = '<ul>';
  skills.forEach(skill => {
    skillsHTML += `<li>${(skill as HTMLInputElement).value}</li>`;
  });
  skillsHTML += '</ul>';

  // Populate the resume section
  const resumeContent = document.getElementById('resume-content') as HTMLElement;
  resumeContent.innerHTML = `
    <h3>${name}</h3>
    <p>Email: <a href="mailto:${email}">${email}</a></p>
    <p>Phone: ${phone}</p>
    
    <h4>Education</h4>
    ${educationHTML}

    <h4>Work Experience</h4>
    ${workHTML}

    <h4>Skills</h4>
    ${skillsHTML}
  `;

  // Show the resume section
  const resumeSection = document.getElementById('resume-section') as HTMLElement;
  resumeSection.classList.remove('hidden');
}

// Add event listeners to the form and buttons
const form = document.getElementById('resume-form') as HTMLFormElement;
form.addEventListener('submit', generateResume);

document.getElementById('add-education-btn')!.addEventListener('click', addEducationFields);
document.getElementById('add-work-btn')!.addEventListener('click', addWorkFields);
document.getElementById('add-skill-btn')!.addEventListener('click', addSkillFields);
