import { renderToDom } from "./utlities/renderToDom.js";
import { repos } from "./data/reference.js";
import { card } from "./components/card.js";
import { navbar } from "./components/navbar.js";
import { footer } from "./components/footer.js";
import { profileDom } from "./components/profile.js";
import { projects } from "./data/projects.js";
import { packagesList } from "../data/packagesRefrence.js"


// THIS IS FOR PROJECTS PAGE
renderToDom("#navbar", navbar());

renderToDom("#profile", profileDom());

const renderProjects = (array) => {
  let projectDomString = "";
  for (let taco of array) {
    projectDomString += `<div id="${taco.id}" class="card">
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
  app.innerHTML = projectDomString;
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
//Repos

let repoForm = document.querySelector("#formOne")
const renderToRepoDom = (array) => {
  let repoDomString = ""
  
  for (let object of array) {
    repoDomString += `<div class="repoCard" class="card w-75 mb-3">
    <div class="card-body">
      <h5 class="card-title">"${object.name}"</h5>
      <p class="card-text">"${object.description}"</p>
      <section class="card-text">"${object.language}" </section>
      <footer class="card-text">"${object.pinned}"</footer>
    </div>
  </div>
      `
  }
  app.innerHTML = repoDomString
}
renderToRepoDom(repos)
repoForm.addEventListener ('submit', (event) => {
  event.preventDefault()
  
  const newRepo ={
    id: repos.length + 1,
    name: document.querySelector('#repoName').value,
    description: document.querySelector('#repoDescription').value,
    language: document.querySelector('#repoLanguage').value,
    pinned: true
  }
    repos.push(newRepo)
    renderToRepoDom(repos)
    repoForm.reset()
})

//packages
let packForm  = document.querySelector("#formOne")
const renderToPackageDom = (array) => {
  let packageDomString = ""
  
  for (let object of array) {
    packageDomString += `<div class="pkgCard" class="card" style="width: 18rem;">
    <div class="card-body">
    <h4 class="card-title"><b>${object.name}</b></h4>
    <p class="card-text">${object.description}</p>
    <a href="#" class="btn btn-outline-danger" id="delete--${object.id}">Delete</a>
  </div>
  </div>`
  }
  app.innerHTML = packageDomString
}
renderToPackageDom(packagesList)
  

  
packForm.addEventListener ('submit', (event) => {
  event.preventDefault()
  
  const newPackage ={
    id: packagesList.length + 1,
    name: document.querySelector('#packageName').value,
    description: document.querySelector('#packageDescription').value,
  }
    packagesList.push(newPackage)
    renderToPackageDom(packagesList)
    packForm.reset()
})

app.addEventListener('click', (event) => {
  if (event.target.id.includes("delete")){

    const [, id] = event.target.id.split("--")

    const index = packagesList.findIndex(object => object.id === Number(id))

    packagesList.splice(index, 1)

    renderToPackageDom(packagesList)
  }
})
//Overview page
const overviewPage = (array) => {
  let overviewDomString = "";

  for (let object of array) {
    overviewDomString += `<div id="${object.id}" class="card">
    <div class="card-header">
      ${object.name}
    </div>
    <div class="card-body">
      
        <p>${object.description}</p>
        <footer class="blockquote-footer">${object.type}<cite title="Source Title">Source Title</cite></footer>
        <div id="${object.pinned}"></div>
      
    </div>
  </div>`;
  }
 renderToDom("#app", overviewDomString);
}

const navBtn = document.querySelector("#projectsBtn");

// navBtn.addEventListener("click", renderProjects(projects));

const createProjBtn = document.querySelector("#createProjectBtn");
createProjBtn.addEventListener("click", createProject);
// THIS IS FOR PROJECTS PAGE

// PACKAGES 
const packagesBtn = document.querySelector("#packagesBtn")
packagesBtn.addEventListener("click", () => {
  renderToPackageDom(packagesList)
}) 

// PROJECTS
const projectsBtn = document.querySelector("#projectsBtn");
projectsBtn.addEventListener("click", () => {
  renderProjects(projects)
})

// REPOS
const reposBtn = document.querySelector("#reposBtn");
reposBtn.addEventListener("click", () => {
  renderToRepoDom(repos)
})

// Overview
const overviewBtn = document.querySelector("#overviewBtn");
overviewBtn.addEventListener("click", () => {
  overviewPage(projects)
  console.log("Overview button has been clicked in navbar");
})
