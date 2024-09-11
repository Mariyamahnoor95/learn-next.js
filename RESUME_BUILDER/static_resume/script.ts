// Function to generate the resume
function generateResume(event: Event): void {
    event.preventDefault(); // Prevent form submission
  
    // Fetch form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLInputElement).value;
    const position = (document.getElementById('position') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const workYears = (document.getElementById('work-years') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
  
    // Populate the resume section
    const resumeContent = document.getElementById('resume-content') as HTMLElement;
    resumeContent.innerHTML = `
      <h3>${name}</h3>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <h4>Education</h4>
      <p>${degree}, ${institution} (${year})</p>
      <h4>Work Experience</h4>
      <p>${position}, ${company} (${workYears})</p>
      <h4>Skills</h4>
      <ul>
        ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
      </ul>
    `;
  
    // Show the resume section
    const resumeSection = document.getElementById('resume-section') as HTMLElement;
    resumeSection.classList.remove('hidden');
  }
  
  // Add event listener to the form
  const form = document.getElementById('resume-form') as HTMLFormElement;
  form.addEventListener('submit', generateResume);
  