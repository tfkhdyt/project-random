<?php
// error_reporting(E_ERROR | E_PARSE);
$input = $_GET["input"] || null;
$tampil = $_GET["tampil"] || null;
$_404 = $_GET["404"] || null;
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Encapsulation pada PHP</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <!--<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css" />-->
  <link rel="stylesheet" href="dist/css/bootstrap.min.css" />
  <link rel="stylesheet" href="dist/css/style.css" />
  <link rel="stylesheet" href="dist/css/bg.css" />
  <link rel="icon" href="https://raw.githubusercontent.com/tfkhdyt/tfkhdyt-portfolio/main/assets/img/favicon.ico" /> 
</head>
<body>
  <?php require "views/navbar.php"; ?>
  <?php if (isset($input) || $_GET == null) {
      require "views/input.php";
  } elseif (isset($tampil)) {
      require "views/tampil.php";
  } elseif (isset($_404)) {
      require "views/404.php";
  } ?>
  <script src="dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
