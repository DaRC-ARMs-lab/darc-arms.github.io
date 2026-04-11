function createIconLinks(person) {
  const icons = [
    person.scholar
      ? `<a href="${person.scholar}" target="_blank" aria-label="Google Scholar"><i class="fa-solid fa-graduation-cap"></i></a>`
      : "",
    person.email
      ? `<a href="${person.email}" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>`
      : "",
    person.linkedin
      ? `<a href="${person.linkedin}" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>`
      : "",
    person.github
      ? `<a href="${person.github}" target="_blank" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>`
      : "",
    person.orcid
      ? `<a href="${person.orcid}" target="_blank" aria-label="ORCID"><i class="fa-brands fa-orcid"></i></a>`
      : ""
  ].filter(Boolean);

  if (icons.length === 0) return "";
  return `<div class="icons">${icons.join("")}</div>`;
}

function createPersonCard(person) {
  const nameHtml = person.website && person.website !== "#"
    ? `<a href="${person.website}" target="_blank">${person.name}</a>`
    : person.name;

  const subtitle = person.lab || person.interests || "";
  const image = person.image || "images/default.jpg";

  return `
    <div class="card">
      <div class="profile">
        <img src="${image}" alt="${person.name}">
        <div class="profile-info">
          <h3>${nameHtml}</h3>
          ${person.role ? `<p>${person.role}</p>` : ""}
          ${subtitle ? `<p>${subtitle}</p>` : ""}
          ${createIconLinks(person)}
        </div>
      </div>
    </div>
  `;
}

function createPeopleGroup(title, peopleArray) {
  if (!peopleArray || peopleArray.length === 0) return "";

  return `
    <h3 class="group-title">${title}</h3>
    <div class="cards">
      ${peopleArray.map(person => createPersonCard(person)).join("")}
    </div>
  `;
}

function renderPeople() {
  const container = document.getElementById("people-content");
  container.innerHTML = `
    ${createPeopleGroup("Directors", peopleData.directors)}
    ${createPeopleGroup("Graduate Students", peopleData.graduateStudents)}
    ${createPeopleGroup("Undergraduate Students", peopleData.undergraduateStudents)}
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

function renderPublicationList(title, items) {
  if (!items || items.length === 0) return "";

  return `
    <h3>${title}</h3>
    <ol>
      ${items.map(pub => `
        <li>
          ${pub.link ? `<a href="${pub.link}" target="_blank">${pub.text}</a>` : pub.text}
        </li>
      `).join("")}
    </ol>
  `;
}

function renderPublications() {
  const container = document.getElementById("publications-content");
  container.innerHTML = `
    ${renderPublicationList("Manuscripts under Review", publicationsData.underReview)}
    ${renderPublicationList("Journals", publicationsData.journals)}
    ${renderPublicationList("Conferences", publicationsData.conferences)}
  `;
}

renderPeople();
renderProjects();
renderPublications();