// import { packagesList } from "../data/packagesRefrence.js"

export const packages = (object) => {
  return `<div class="pkgCard" class="card" style="width: 18rem;">
    <div class="card-body">
    <h4 class="card-title"><b>${object.name}</b></h4>
    <p class="card-text">${object.description}</p>
    <a href="#" class="btn btn-outline-danger" id="delete--${object.id}">Delete</a>
  </div>
</div>`
}

// const packagesForm = document.querySelector('#form')
