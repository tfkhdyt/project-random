<?php
class Mahasiswa {
    private $nama, $nim, $prodi, $email;
    public function setNama($nama) {
        $this->nama = $nama;
    }
    public function setNim($nim) {
        $this->nim = $nim;
    }
    public function setProdi($prodi) {
        $this->prodi = $prodi;
    }
    public function setEmail($email) {
        $this->email = $email;
    }
    public function getNama() {
        return $this->nama;
    }
    public function getNim() {
        return $this->nim;
    }
    public function getProdi() {
        return $this->prodi;
    }
    public function getEmail() {
        return $this->email;
    }
}
$mhs = new Mahasiswa();
$mhs->setNama($_POST["nama"]);
$mhs->setNim($_POST["nim"]);
$mhs->setProdi($_POST["prodi"]);
$mhs->setEmail($_POST["email"]);

if (empty($_POST["nama"])): ?>
<script>location.replace("?input&error")</script>
<?php endif;
?>
<div class="container">
  <div class="row">
    <div class="col col-md-6 m-3 mx-md-0">
      <h4>Data Mahasiswa</h4>
      <!-- Nama -->
      <div class="row mb-2">
        <div class="col fw-bold">
          Nama
        </div>
        <div class="col-9">
          : <?= $mhs->getNama() ?>
        </div>
      </div>
      <!-- NIM -->
      <div class="row mb-2">
        <div class="col fw-bold">
          NIM
        </div>
        <div class="col-9">
          : <?= $mhs->getNim() ?>
        </div>
      </div>
      <!-- Prodi -->
      <div class="row mb-2">
        <div class="col fw-bold">
          Prodi
        </div>
        <div class="col-9">
          : <?= $mhs->getProdi() ?>
        </div>
      </div>
      <!-- Email -->
      <div class="row mb-3">
        <div class="col fw-bold">
          Email
        </div>
        <div class="col-9">
          : <?= $mhs->getEmail() ?>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <a class="btn btn-primary btn-sm" href="/?input"><i class="fas fa-chevron-left"></i> Kembali</a>
        </div>
      </div>
    </div>
  </div>
</div>