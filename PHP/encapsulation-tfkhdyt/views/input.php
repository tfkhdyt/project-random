<div class="container">
  <div class="row">
    <div class="col col-md-6 m-3 mx-md-0">
      <h4>Input Data Mahasiswa</h4>
      <?php if (isset($_GET["error"])): ?>
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <i class="fas fa-exclamation-triangle"></i> Anda harus menginput data terlebih dahulu!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <?php endif; ?>
      <form action="?tampil" method="post" autocomplete="off">
        <div class="mb-3">
          <label for="nama">Nama</label>
          <input type="text" class="form-control" id="nama" name="nama" placeholder=" " required>
        </div>
        <div class="mb-3">
          <label for="nim">NIM</label>
          <input type="number" class="form-control" id="nim" name="nim" placeholder=" " required>
        </div>
        <div class="mb-3">
          <label for="prodi">Prodi</label>
          <!--<input type="text" class="form-control" id="prodi" name="prodi" placeholder=" ">-->
          <select required class="form-select" aria-label="Default select example" id="prodi" name="prodi">
            <option selected disabled value="">--- Pilih ---</option>
            <option value="Sistem Informasi">Sistem Informasi</option>
            <option value="Teknik Informatika">Teknik Informatika</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" name="email" placeholder=" " required>
        </div>
        <button type="submit" class="btn btn-primary mt-1"><i class="fas fa-sign-in-alt"></i> Submit</button>
      </form>
    </div>
  </div>
</div>