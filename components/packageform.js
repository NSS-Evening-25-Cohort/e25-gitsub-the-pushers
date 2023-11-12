export const packageForm = () => {
  return `<form><div class="mb-3">
  <label for="packageName" class="form-label">PackageName</label>
  <input type="text" class="form-control" id="packageName" placeholder="npm">
</div>
<div class="mb-3">
  <label for="packageDescription" class="form-label">Description</label>
  <textarea class="form-control" id="packageDescription" rows="3"></textarea>
</div></form>`;
};


// added new file for package form instead of form.js
