export const overviewPage = () => {
  return `<div class="pinned-card">
  <h2>Pinned</h2>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <h5 class="card-title">${repos.name}</h5>
    <p class="card-text">${repos.description}</p>
    <a href="#" class="btn btn-primary">${repos.language}</a>
    <footer class="card-text">"${repos.pinned}"</footer>
  </div>`;
};
