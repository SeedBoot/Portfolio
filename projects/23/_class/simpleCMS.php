<?php

class simpleCMS {
  var $host;
  var $username;
  var $password
  var $table;

  public function display_public() {
    $q = "SELECT * FROM testDB ORDER BY created DESC LIMIT 3";
    $r = mysqli_query($q);
    
    if ( $r !== false && mysqli_num_rows($r) > 0 ) {
      while ( $a = mysqli_fetch_assoc($r) ) {
        $title = stripslashes($a['title']);
        $bodytext = stripslashes($a['bodytext']);
        
        $entry_display .= <<<ENTRY_DISPLAY
        
        <h2>$title</h2>
        <p>
          $bodytext
        </p>
        
ENTRY_DISPLAY;
      }
    } else {
      $entry_display = <<<ENTRY_DISPLAY
      
      <h2>This Page Is Under Construction</h2>
      <p>
        No entries have been made on this page. Please check back soon, or click the link below to add an entry
      </p>
      
ENTRY_DISPLAY;
    }
    $entry_display .= <<<ADMIN_OPTION
    
    <p class="admin_link">
      <a href="{$_SERVER['PHP_SELF']}?admin=1">Add a New Entry</a>
    </p>
    
ADMIN_OPTION;
    
    return $entry_display;
  }
  
  public function display_admin() {
    return <<<ADMIN_FORM

    <form action="{$_SERVER['PHP_SELF']}" method="post">
      <label for="title">Title:</label>
      <input name="title" id="title" type="text" maxlength="150" />
      <label for="bodytext">Body Text:</label>
      <textarea name="bodytext" id="bodytext"></textarea>
      <input type="submit" value="Create This Entry!" />
    </form>

ADMIN_FORM;
  }
  
  public function write($p) {
    if ( $p['title'] )
      $title = mysqli_real_escape_string($p['title']);
    if ( $p['bodytext'] )
      $bodytext = mysqli_real_escape_string($p['bodytext']);
    if ( $title && $bodytext ) {
      $created = time();
      $sql = "INSERT INTO testDB VALUES('$title','$bodytext','$created')";
      return mysqli_query($sql);
    } else {
      return false;
    }

  }
  
  public function connect() {
    mysqli_connect($this->host,$this->username,$this->password) or die("Could not connect. " . mysqli_error());
    mysqli_select_db($this->table) or die("Could not select database. " . mysqli_error());

    return $this->buildDB();
  }

  private function buildDB() {
    $sql = <<<MYSQLI_QUERY
      CREATE TABLE IF NOT EXISTS testDB (
        title VARCHAR(150),
        bodytext TEXT,
        created VARCHAR(100)
    )
MYSQLI_QUERY;

    return mysqli_query($sql);
  }

}

?>