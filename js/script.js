// Get form and idea list
const ideaForm = document.getElementById("ideaForm");
const ideaList = document.getElementById("ideaList");

// Load saved ideas from Local Storage on page load
document.addEventListener("DOMContentLoaded", loadIdeas);

// Handle form submission
ideaForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  // Get user input
  const name = document.getElementById("name").value;
  const idea = document.getElementById("idea").value;

  // Create idea object
  const newIdea = { name, idea };

  // Add to Local Storage
  saveIdeaToLocalStorage(newIdea);

  // Display the idea
  displayIdea(newIdea);

  // Clear the form
  ideaForm.reset();
});

// Function to save idea to Local Storage
function saveIdeaToLocalStorage(idea) {
  let ideas = JSON.parse(localStorage.getItem("ideas")) || []; // Retrieve existing ideas or initialize an empty array
  ideas.push(idea); // Add new idea
  localStorage.setItem("ideas", JSON.stringify(ideas)); // Save back to Local Storage
}

// Function to load ideas from Local Storage
function loadIdeas() {
  const ideas = JSON.parse(localStorage.getItem("ideas")) || [];
  ideas.forEach((idea) => displayIdea(idea));
}

// Function to display an idea on the page
function displayIdea(idea) {
  const ideaCard = document.createElement("div");
  ideaCard.classList.add("idea-card");
  ideaCard.innerHTML = `
    <h3>${idea.name}'s idea:</h3>
    <p>${idea.idea}</p>
  `;
  ideaList.appendChild(ideaCard);
}
