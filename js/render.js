function createPersonCard(person, showIcons = false) {
  return `
    <div class="card">
      <div class="profile">
        <img src="${person.image}" alt="${person.name}">
        <div class="profile-info">
          <h3>
            <a href="${person.website || '#'}" target="_blank">${person.name}</a>
          </h3>
          <p>${person.role || ""}</p>
          <p>${person.lab || person.interests || ""}</p>
          ${
            showIcons
              ? `
              <div class="icons">
                ${person.scholar ? `<a href="${person.scholar}" target="_blank"><i class="fa-solid fa-graduation-cap"></i></a>` : ""}
                ${person.email ? `<a href="${person.email}"><i class="fa-solid fa-envelope"></i></a>` : ""}
                ${person.linkedin ? `<a href="${person.linkedin}" target="_blank"><i class="fa-brands fa-linkedin"></i></a>` : ""}
              </div>
            `
              : ""
          }
        </div>
      </div>
    </div>
  `;
}

function renderPeople() {
  const container = document.getElementById("people-content");
  container.innerHTML = `
    <h3>Directors</h3>
    <div class="cards">
      ${peopleData.directors.map(person => createPersonCard(person, true)).join("")}
    </div>

    <h3>Graduate Students</h3>
    <div class="cards">
      ${peopleData.graduateStudents.map(person => createPersonCard(person)).join("")}
    </div>

    <h3>Undergraduate Students</h3>
    <div class="cards">
      ${peopleData.undergraduateStudents.map(person => createPersonCard(person)).join("")}
    </div>
  `;
}

function renderProjects() {
  const container = document.getElementById("projects-content");
  container.innerHTML = `
    <div class="cards">
      ${projectsData.map(project => `
        <div class="card">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function renderPublications() {
  const container = document.getElementById("publications-content");
  container.innerHTML = `
    <h3>Manuscripts under Review</h3>
    <ol>
      ${publicationsData.underReview.map(pub => `<li>${pub.text}</li>`).join("")}
    </ol>

    <h3>Journals</h3>
    <ol>
      ${publicationsData.journals.map(pub => `
        <li>
          ${pub.link ? `<a href="${pub.link}" target="_blank">${pub.text}</a>` : pub.text}
        </li>
      `).join("")}
    </ol>
  `;
}

renderPeople();
renderProjects();
renderPublications();