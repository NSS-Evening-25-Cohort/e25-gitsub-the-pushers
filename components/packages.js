export const packages = (object) => {
  return `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h4 class="card-title"><b>${object.name}</b></h4>
    <p class="card-text">${object.description}</p>
    <a href="#" class="btn btn-secondary">Learn More</a>
  </div>
</div>`
}
