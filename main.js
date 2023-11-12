import { renderToDom } from "./utlities/renderToDom.js";
import { repos } from "./data/reference.js";
import { card } from "./components/card.js";
import { navbar } from "./components/navbar.js";
import { footer } from "./components/footer.js";
import { profileDom } from "./components/profile.js";
// import { renderToPackageDom}  from "./components/packages.js";
import { packageForm} from "./components/packageform.js";
import { packagesList} from "./data/packagesRefrence.js";

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

// moving packages to main.js
// const packageForm = document.querySelector('form')
 
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
  
packageForm.addEventListener('submit', (event) => {
  event.preventDefault()
  
  const newPackage ={
    id: packagesList.length + 1,
    name: document.querySelector('#packageName').value,
    description: document.querySelector('#packageDescription').value,
  }
    packagesList.push(newPackage)
    // renderToPackageDom(packagesList)
    packageForm.reset()
})



app.addEventListener('click', (event) => {
  if (event.target.id.includes("delete")){

    const [, id] = event.target.id.split("--")

    const index = packagesList.findIndex(object => object.id === Number(id))

    packagesList.splice(index, 1)

    // renderToPackageDom(packagesList)
  }
})


renderToDom("#footer", footer());
renderToDom("#navbar", navbar());
renderToDom("#profile", profileDom());
renderProjectForm();


packagesBtn.addEventListener("click", (pkgCard) => {
  console.log("line 58")
  renderToPackageDom(packagesList)
});
console.log(packagesBtn);
