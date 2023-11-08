<<<<<<< HEAD
import { renderToDom } from "./utlities/renderToDom.js";
import { repos } from "./data/reference.js";
import { card } from "./components/card.js";
import { navbar } from "./components/navbar.js";
import { footer } from "./components/footer.js";
=======
import { renderToDom } from "./utlities/renderToDom";
import { repos } from "./data/reference";
import { card } from "./components/card";
import { navbar } from "./components/navbar";
import { footer } from "./components/footer";
import { overviewPage } from "./components/overviewPage";

>>>>>>> de3fb6f1d1e4b535390c4a509b6799cf06cc9d28

// TODO: form.js

const renderProjects = (array) => {
  let domString = "";
  {
    domString += `<div class="card">
    <div class="card-header">
      Quote
    </div>
    <div class="card-body">
      
        <p>A well-known quote, contained in a blockquote element.</p>
        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
      
    </div>
  </div>`;
  }

  let newForm = `<form class="row g-3">
  <div class="col-auto">
    <label for="staticEmail2" class="visually-hidden">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
  </div>
</form>`;

  domString += newForm;

  const app = document.querySelector("#app");
  app.innerHTML = domString;
};
console.log("hello world");
renderProjects(repos);
