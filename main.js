import { renderToDom } from "./utlities/renderToDom.js";
import { repos } from "./data/reference.js";
import { card } from "./components/card.js";
import { navbar } from "./components/navbar.js";
import { footer } from "./components/footer.js";
import { overviewPage } from "./components/overviewPage.js";

// TODO: form.js


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

  let newForm = `<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button id="createProject" type"bg-primary">Create Project</button>
</div>`;
  domString += newForm;
  const app = document.querySelector("#app");
  app.innerHTML = domString;
};

const navBtn = document.querySelector("#projectsBtn");

navBtn.addEventListener("click", renderProjects(repos));
console.log("hello world");
