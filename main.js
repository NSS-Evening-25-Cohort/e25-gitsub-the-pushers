import { renderToDom } from "./utlities/renderToDom.js";
import { repos } from "./data/reference.js";
import { card } from "./components/card.js";
import { navbar } from "./components/navbar.js";
import { footer } from "./components/footer.js";
import { overviewPage } from "./components/overviewPage.js";
import { profileDom } from "./components/profile.js";
import { projects } from "./components/projects.js";
// THIS IS FOR PROJECTS PAGE
renderToDom("#navbar", navbar());

renderToDom("#profile", profileDom());

const renderProjects = (array) => {
  let domString = "";
  for (let taco of array) {
    domString += `<div id="${taco.id}" class="card">
    <div class="card-header">
      ${taco.name}
    </div>
    <div class="card-body">
      
        <p>${taco.description}</p>
        <footer class="blockquote-footer">${taco.type}<cite title="Source Title">Source Title</cite></footer>
        <div id="${taco.pinned}"></div>
      
    </div>
  </div>`;
  }
  renderToDom("#app", domString);
};

let newForm = `<form id="formOne"><div class="mb-3">
<label for="projectName" class="form-label">Project board name</label>
<input type="text" class="form-control" id="projectName" placeholder="Project Name">
</div>
<div class="mb-3">
<label for="projectDescription" class="form-label">Description</label>
<input type="text" class="form-control" id="projectDescription" placeholder="Project Description">
<input type="text" class="form-control" id="projectType" placeholder="Type">
<button id="createProjectBtn" type class ="btn bg-primary">Create Project</button>
</div></form>`;

// const renderProjectForm = () => {
//   let formString = "";
//   formString += `<form><div class="mb-3">
//     <label for="projectName" class="form-label">Project board name</label>
//     <input type="text" class="form-control" id="projectName" placeholder="Project Name">
//   </div>
//   <div class="mb-3">
//     <label for="projectDescription" class="form-label">Description</label>
//     <input type="text" class="form-control" id="projectDescription" placeholder="Project Description">
//     <input type="text" class="form-control" id="projectType" placeholder="Type">
//     <button id="createProjectBtn" type class ="btn bg-primary">Create Project</button>
//   </div></form>`;
//   renderToDom("#formDiv", formString);
// };

console.log("hello world");

renderToDom("#footer", footer());
renderToDom("#navbar", navbar());
renderToDom("#profile", profileDom());
// renderProjectForm();
renderToDom("#formDiv", newForm);
let formRes = document.querySelector("#formOne");

let createProject = (e) => {
  e.preventDefault();

  let projectObj = {
    id: projects.length + 1,
    name: document.querySelector("#projectName").value,
    description: document.querySelector("#projectDescription").value,
    type: document.querySelector("#projectType").value,
    pinned: true,
  };
  console.log("sorted!");

  projects.push(projectObj);

  renderProjects(projects);

  formRes.reset();
};

const navBtn = document.querySelector("#projectsBtn");

navBtn.addEventListener("click", renderProjects(projects));

const createProjBtn = document.querySelector("#createProjectBtn");
createProjBtn.addEventListener("click", createProject);
// THIS IS FOR PROJECTS PAGE
