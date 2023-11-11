export const packages = (object) => {
  return `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h4 class="card-title"><b>${object.name}</b></h4>
    <p class="card-text">${object.description}</p>
    <a href="#" class="btn btn-secondary">Learn More</a>
  </div>
</div>`
}

  
const app = document.querySelector('#packagesApp')
const form = document.querySelector('form')
  
const renderToPackageDom = (array) => {
  let packageDomString = ""
  
  for (let object of array) {
    packageDomString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h4 class="card-title"><b>${object.name}</b></h4>
    <p class="card-text">${object.description}</p>
    <a href="#" class="btn btn-secondary">Learn More</a>
  </div>
  </div>`
  }
  app.innerHTML = packageDomString
}
renderToPackageDom(packagesList)
  

  
form.addEventListener ('submit', (event) => {
  event.preventDefault()
  
  const newPackage ={
    id: packagesList.length + 1,
    name: document.querySelector('#packageName').value,
    description: document.querySelector('#packageDescription').value,
  }
    packagesList.push(newPackage)
    renderToPackageDom(packagesList)
    form.reset()
})

app.addEventListener('click', (event) => {
  if (event.target.id.includes("delete")){

    const [, id] = event.target.id.split("--")

    const index = packagesList.findIndex(object => object.id === Number(id))

    packagesList.splice(index, 1)

    renderToPackageDom(packagesList)
  }
})
