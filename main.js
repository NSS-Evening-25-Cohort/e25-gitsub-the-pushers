import { renderToDom } from "./utlities/renderToDom.js";
import { repos } from "./data/reference.js";
import { card } from "./components/card.js";
import { navbar } from "./components/navbar.js";
import { footer } from "./components/footer.js";
import { overviewPage } from "./components/overviewPage.js";
import { packagesList } from "./data/packagesRefrence.js";
import { profileDom } from "./components/profile.js";

renderToDom("#navbar", navbar());

const renderProjects = (array) => {
  let domString = "";
  for (let taco of array) {
    domString += `<div id="${taco.id}" class="card">
    <div class="card-header">
      ${taco.name}
    </div>
    <div class="card-body">
      
        <p>${taco.description}</p>
        <footer class="blockquote-footer">${taco.language}<cite title="Source Title">Source Title</cite></footer>
        <div id="${taco.pinned}"></div>
      
    </div>
  </div>`;
  }
renderToDom("#app", domString)
};

const renderProjectForm = () => {
  let formString = "";
  formString += `<div class="mb-3">
    <label for="projectName" class="form-label">Project board name</label>
    <input type="text" class="form-control" id="projectName" placeholder="Project Name">
  </div>
  <div class="mb-3">
    <label for="projectDescription" class="form-label">Description</label>
    <textarea class="form-control" id="projectDescription" rows="3"></textarea>
    <button id="createProject" type class ="btn bg-primary">Create Project</button>
  </div>`;
  renderToDom("#formDiv", formString);
};



const navBtn = document.querySelector("#projectsBtn");

navBtn.addEventListener("click", renderProjects(repos));
console.log("hello world");

renderToDom("#footer", footer());
renderToDom("#navbar", navbar());
renderToDom("#profile", profileDom());
renderProjectForm();
