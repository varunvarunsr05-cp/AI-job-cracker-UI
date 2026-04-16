
function scrollToMain() {
  window.scrollTo({
    top: 600,
    behavior: "smooth"
  });
}

function scrollToMain() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
}

function analyzeResume() {
  const text = document.getElementById("resumeText").value;
  const file = document.getElementById("resumeFile").files[0];
  const resultBox = document.getElementById("resultBox");

  if (!text && !file) {
    alert("Please upload or paste resume");
    return;
  }

  // 🔥 Temporary dummy result (API later)
  resultBox.innerHTML = `
    <h3>ATS Score: 78%</h3>
    <p>✔ Improve keywords</p>
    <p>✔ Add more projects</p>
  `;
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const message = input.value.trim();
  if (!message) return;

  // User message
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.innerText = message;
  chatBox.appendChild(userMsg);

  input.value = "";

  // 🔥 Dummy bot reply (API later)
  const botMsg = document.createElement("div");
  botMsg.className = "message bot";
  botMsg.innerText = "AI is thinking...";
  chatBox.appendChild(botMsg);

  // Auto scroll
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    botMsg.innerText = "This is a sample AI response.";
  }, 1000);
}

// 🔥 Dummy Job Data (API later)
const jobs = [
  {
    title: "Frontend Developer",
    skills: "HTML, CSS, JavaScript, React",
    match: "85%"
  },
  {
    title: "Backend Developer",
    skills: "Node.js, Express, MongoDB",
    match: "78%"
  },
  {
    title: "Full Stack Developer",
    skills: "React, Node.js, APIs",
    match: "90%"
  }
];

// Load jobs
function loadJobs() {
  const container = document.getElementById("jobContainer");

  jobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "job-card";

    card.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Skills:</strong> ${job.skills}</p>
      <p class="match">Match: ${job.match}</p>
    `;

    container.appendChild(card);
  });
}

// Call on load
window.onload = loadJobs;

function sendMessageForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill all fields");
    return;
  }

  // 🔥 For now (no backend)
  alert("Message sent successfully!");

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
