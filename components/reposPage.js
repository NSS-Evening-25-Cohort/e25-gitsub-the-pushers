import { repos } from "../data/reference.js";

export const reposCard = (object) => {
    return`<div class="repoCard" class="card w-75 mb-3">
  <div class="card-body">
    <h5 class="card-title">"${object.name}"</h5>
    <p class="card-text">"${object.description}"</p>
    <section class="card-text">"${object.language}" </section>
    <footer class="card-text">"${object.pinned}"</footer>
  </div>
</div>
    `
};

const app = document.querySelector('#app')
const form = document.querySelector('form')

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
  

form.addEventListener ('submit', (event) => {
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
    form.reset()
})

const search = (event) => {
  const userInput = event.target.value.toLowerCase()
  const searchResult = repos.filter(repo =>
    repo.name.toLowerCase().includes(userInput) ||
    repo.description.toLowerCase().includes(userInput) ||
    repo.language.toLowerCase().includes(userInput)
    )
    renderToRepoDom(searchResult)
}
//  may need to make new separate render for search results, in lieu of renderToReposDom
