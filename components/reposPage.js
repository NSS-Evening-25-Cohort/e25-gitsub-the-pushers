export const repos = () => {
    return`<div class="card w-75 mb-3">
  <div class="card-body">
    <h5 class="card-title">"${repos.name}"</h5>
    <p class="card-text">"${repos.description}"</p>
    <section class="card-text">"${repos.language}" </section>
    <footer class="card-text">"${repos.pinned}"</footer>
  </div>
</div>
    `
};