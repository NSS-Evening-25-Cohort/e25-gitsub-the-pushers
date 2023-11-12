export const form = (object) => {
  return `<div class="mb-3">
  <label for="projectName" class="form-label">Project board name</label>
  <input type="text" class="form-control" id="projectName" placeholder="Sorting Hat">
</div>
<div class="mb-3">
  <label for="projectDescription" class="form-label">Description</label>
  <textarea class="form-control" id="projectDescription" rows="3"></textarea>
</div>`;
};
