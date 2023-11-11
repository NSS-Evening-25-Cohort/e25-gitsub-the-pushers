import { repos } from "../data/reference";

export const reposCard = (object) => {
    return`<div class="card w-75 mb-3">
  <div class="card-body">
    <h5 class="card-title">"${object.name}"</h5>
    <p class="card-text">"${object.description}"</p>
    <section class="card-text">"${object.language}" </section>
    <footer class="card-text">"${object.pinned}"</footer>
  </div>
</div>
    `
};

const renderToRepoDom = (array) => {
  let repoDomString = ""
  
  for (let object of array) {
    repoDomString += `<div class="card w-75 mb-3">
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
  

form.addEventListener ('submit', (event) => {
  event.preventDefault()
  
  const newRepo ={
    id: repos.length + 1,
    name: document.querySelector('#repoName').value,
    description: document.querySelector('#repoDescription').value,
    language: document.querySelector("#repoLanguage").value,
    pinned: true
  }
    repos.push(newRepo)
    renderToRepoDom(repos)
    form.reset()
})
