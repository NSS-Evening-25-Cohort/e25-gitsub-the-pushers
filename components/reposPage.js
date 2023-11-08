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