export const card = (object) => {
  return `<div class="card">
  <div class="card-body">
    <h5 class="card-title">${object.name}</h5>
    <p class="card-text">${object.description}</p>
    <div class="text-body-secondary">
    ${object.language}
  </div>
  </div>
</div>
</div>`
};
