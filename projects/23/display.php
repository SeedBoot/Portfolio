<!DOCTYPE html>
<html>
  <head>
    <title>SimpleCMS</title>
  </head>
  <body>
    <?php
      include_once('_class/simpleCMS.php');
      $obj = new simpleCMS();
      $obj->host = '127.0.0.1';
      $obj->username = 'root';
      $obj->password = 'root';
      $obj->table = 'DB123456789';
      $obj->connect();
    
      if ( $_POST)
        $obj->write($_POST);
    
      echo ( $_GET['admin'] == 1) ? $obj->display_admin() : $obj->display_public();
    ?>
  </body>
</html>