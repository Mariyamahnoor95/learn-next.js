// Resume data model
interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface Skill {
  name: string;
}

interface Experience {
  position: string;
  company: string;
  period: string;
}

// Resume data
const personalInfo: PersonalInfo = {
  name: "Mariyam Mahnoor",
  email: "mariyamahnoor@gamil.com",
  phone: "+1234567890",
};

const education: Education[] = [
  {
    degree: "B.E in Electronics",
    institution: "NED University",
    year: "2015 - 2019",
  },
  { degree: "Researcher", institution: "NED  University", year: "2020 - 2022" },
];

const skills: Skill[] = [
  { name: "HTML, CSS, JavaScript" },
  { name: "TypeScript, React.js" },
  { name: "Python, SQL" },
];

const experiences: Experience[] = [
  {
    position: "Software Developer",
    company: "Tech Solutions",
    period: "2020 - Present",
  },
  { position: "Intern", company: "Data Analytics Corp", period: "2019 - 2020" },
];

// Function to dynamically add skills
function addSkills(): void {
  const skillList = document
    .getElementById("skills")!
    .getElementsByTagName("ul")[0];
  skills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill.name;
    skillList.appendChild(li);
  });
}

// Function to toggle visibility of a section
function toggleVisibility(sectionId: string): void {
  const section = document.getElementById(sectionId);
  if (section) {
    const content = section.querySelectorAll("p, ul")[0] as HTMLElement; // Typecasting to HTMLElement
    if (content) {
      const display = content.style.display;
      content.style.display = display === "none" ? "block" : "none";
    }
  }
}

// Add event listeners and initial setup
window.onload = () => {
  addSkills();
};
