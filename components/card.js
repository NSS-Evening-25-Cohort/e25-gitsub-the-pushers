export const card = (object) => {
  return `<div class="card">
  <div class="card-body">
    <h5 class="card-title">${repos.name}</h5>
    <p class="card-text">${repos.description}</p>
    <div class="text-body-secondary">
    ${repos.language}
  </div>
  </div>
</div>
</div>`
};
