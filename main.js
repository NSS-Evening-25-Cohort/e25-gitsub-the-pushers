import { renderToDom } from "./utlities/renderToDom.js";
import { repos } from "./data/reference.js";
import { card } from "./components/card.js";
import { navbar } from "./components/navbar.js";
import { footer } from "./components/footer.js";
import { overviewPage } from "./components/overviewPage.js";

// TODO: form.js
let projectsArray = [
  {
    id: 1,
    name: "First Project",
    description: "This is a description of the first project",
    public: true,
  },
  {
    id: 2,
    name: "Second Project",
    description: "This is a description of the second project",
    public: true,
  },
  {
    id: 3,
    name: "Third Project",
    description: "This is a description of the third project",
    public: true,
  },
  {
    id: 4,
    name: "Fourth Project",
    description: "This is a description of the fourth project",
    public: true,
  },
  {
    id: 5,
    name: "Fifth Project",
    description: "This is a description of the fifth project",
    public: true,
  },
];

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
   
        <div id="${taco.public}"></div>
      
    </div>
  </div>`;
  }

  let newForm = `<div class="mb-3"><form>
  <label for="projectName-label" class="projectName">Project Name</label>
  <input type="form-label" class="form-control" id="projectName-label" placeholder="New Project"></input>
</div>
<div class="mb-3">
  <label for="projDescription" class="form-label">Example textarea</label>
  <input type="text" class="projectDescriptionform-label" id="projDescription"></input>
  <input type="text" class="publicForm-control" id="exampleFormControlTextarea1" rows="3">
  </input>
  <button id="createProject" type"bg-primary">Create Project</button>
  </form>
</div>`;
  domString += newForm;
  const app = document.querySelector("#app");
  app.innerHTML = domString;
};

const projBtn = document.querySelector("#projectsBtn");

projBtn.addEventListener("click", renderProjects(projectsArray));
console.log("hello world");

const projectForm = document.querySelector("#createProject");

const createProjectForm = (e) => {
  e.preventDefault();
  let newProjectObj = {
    id: projectsArray.length + 1,
    name: document.querySelector("#projectName-label").value,
    description: document.querySelector(".projectDescriptionform-label").value,
    public: true,
  };

  // if (projectsArray[projectsArray.length - 1].public === true) {
  //   ("Public");
  // } else {
  //   ("Private");
  // }
  projectsArray.push(newProjectObj);
  renderToDom("#app", projectsArray);
  // form.reset();
};

projectForm.addEventListener("click", createProjectForm);
