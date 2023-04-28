<template>
<button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModalOne" style="background-image: linear-gradient(135deg, #C33764 10%, #1D2671 100%);">
  REGISTER
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModalOne" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Thank you for Register</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h3 class="p-3">REGISTER  <i class="fa-solid fa-user"></i></h3>
          <label class="form-label" style="padding-right: 80%;">UserEmail <i class="fa-solid fa-envelope"></i></label>
          <input type="text" class="form-control" />
          <label class="form-label" style="padding-right: 80%;">Password   <i class="fa-solid fa-key"></i></label>
          <input type="password" class="form-control" />
          <label class="form-label" style="padding-right: 67%;">Confirm Password   <i class="fa-solid fa-key"></i></label>
          <input type="password" class="form-control" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">REGISTER</button>
      </div>
    </div>
  </div>
</div>
</template>