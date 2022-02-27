<?php
// error_reporting(E_ERROR | E_PARSE);
$input = $_GET["input"];
$tampil = $_GET["tampil"];
?>
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="?input">
      <img src="https://tfkhdyt.my.id/assets/img/profile-img.jpg" class="rounded-circle mx-2 d-inline-block align-text-top" width="30"/>
      Encapsulation
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <a class="nav-link 
            <?php if (isset($input) || $_GET == null) {
                echo "active";
            } ?>" aria-current="page" href="/?input"><i class="fas fa-plus-square"></i> Input Data</a>
        </li>
        <li class="nav-item">
          <a class="nav-link
            <?php if (isset($tampil)) {
                echo "active";
            } ?>" href="/?tampil"><i class="fas fa-th-list"></i> Tampil Data</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://tfkhdyt.my.id/" target="_blank"><i class="fas fa-user"></i> About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/tfkhdyt/tugas-kuliah/tree/main/Semester%203/Pemrograman%20Berorientasi%20Objek/Encapsulation/Source%20Code/PHP" target="_blank"><i class="fas fa-code"></i> Source Code</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
