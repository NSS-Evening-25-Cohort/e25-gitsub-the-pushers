export const navbar = () => {
return`
<nav class="navbar fixed-top bg-body-tertiary">
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" id="overviewBtn" aria-current="page" href="#">Overview</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" id="reposBtn" href="#">Repos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" id="projectsBtn" href="#">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" id="packagesBtn" href="#">Packages</a>
        </li>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  </nav>
</nav>`;
}