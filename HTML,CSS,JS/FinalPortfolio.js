// Skills toggle with images
const typeSkills = {
  backend: [
    { name: "Core Java", img: "Images/Java.avif" },
    { name: "JDBC", img: "Images/JDBC.avif" },
    { name: "Servlets", img: "Images/Servlets.avif" },
    { name: "JSP", img: "Images/JSP.avif" },
     { name: "JEE", img: "Images/JDBC.avif" }
  ],
  frontend: [
    { name: "HTML", img: "Images/HTML.avif" },
    { name: "CSS", img: "Images/CSS.avif" },
    { name: "JavaScript", img: "Images/JS.avif" }
  ],
  database: [
    { name: "MySQL", img: "Images/DB.jpg" }
  ]
};

function showSkills(type) {
  const skillsDisplay = document.getElementById("skills-display");
  skillsDisplay.innerHTML = "";
  const list = document.createElement("ul");
  typeSkills[type].forEach(skill => {
    const item = document.createElement("li");
    item.style.listStyle = "none";  // optional: no bullet
    item.style.marginBottom = "10px";
    item.innerHTML = `<img src="${skill.img}" alt="${skill.name}" style="width:40px; height:40px; vertical-align:middle; margin-right:10px;" /> ${skill.name}`;
    list.appendChild(item);
  });
  skillsDisplay.appendChild(list);
}

// Projects
const projects = [
  {
    title: "Banking Management System",
    description: "The Banking Management System is a Java-based application developed by me to simulate essential banking operations like account creation, balance inquiry, deposits, and withdrawals. It aims to provide a secure and efficient platform for managing customer transactions and account details using Core Java and JDBC.",
    link: "https://github.com/AbdullahJavaDev/library-management"
  },
  {
    title: "Sign-In Web Application",
    description: "The Sign-In Web Application is a secure and user-friendly web-based platform developed by me to authenticate users through email and password credentials. It ensures login validation using form inputs, JavaScript validations, and backend verification using Java Servlets and JDBC connected to a MySQL database.",
    link: "https://github.com/AbdullahJavaDev/quiz-app"
  },
  {
    title: "Portfolio Website",
    description: "The Portfolio Website is a fully responsive personal website developed by me to showcase my technical skills, academic background, and Java-based projects in an organized and interactive way. It highlights my expertise in frontend development using HTML, CSS, and JavaScript, and integrates sections like About, Skills, Projects, Resume, and Contact for a complete professional presentation.",
    link: "https://github.com/AbdullahJavaDev/portfolio"
  },
  {
    title: "Food Delivery UI",
    description: "Responsive UI for a food delivery service using HTML, CSS, JS.Currently working",
    link: "https://github.com/AbdullahJavaDev/food-delivery-ui"
  },
   {
    title: "Academic Project- Iot Based Prepaid Energy Meter",
    description: "The IoT-Based Prepaid Energy Meter is an embedded system project developed to monitor and control energy usage in real-time. It enables consumers to recharge electricity balance online and automatically cuts power when the balance is exhausted, promoting energy awareness and efficient billing.",
    link: "https://github.com/AbdullahJavaDev/food-delivery-ui"
  }
];

const projectContainer = document.querySelector(".project-list");
projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
  `;
  projectContainer.appendChild(card);
});

// Education toggle
const typeEducation = {
  tenth: {
    text: "I completed my 10th standard at Zilla Parishad High School, D.M. Puram, securing 95% in the year [2019]. This strong academic foundation helped me build discipline, curiosity, and problem-solving skills early in my education.",
    img: "Images/school.avif"
  },
  inter: {
    text: "I completed my Intermediate (MPC) from Vedavyasa Junior College, Puttur, with 84% in the year 2021. This phase of my academic journey strengthened my analytical thinking and laid the groundwork for my engineering studies.",
    img: "Images/Vedavyasa.png"
  },
  grad: {
    text: "I completed my B.Tech in Electrical and Electronics Engineering from Sri Venkatesa Perumal College of Engineering and Technology with 92% in 2025. During my graduation, I developed a strong foundation in technical subjects and completed projects that combined core engineering with real-world applications like IoT and Java development.",
    img: "Images/svpcet.jpg"
  }
};

function showEducation(level) {
  const eduDisplay = document.getElementById("edu-display");
  eduDisplay.innerHTML = `
    <img src="${typeEducation[level].img}" alt="${level}" style="width:40px; height:40px; vertical-align:middle; margin-right:10px;" />
    ${typeEducation[level].text}
  `;
}

// Optional: Initialize with backend skills shown by default on page load
window.onload = () => {
  showSkills('backend');
  showEducation('tenth');
};
