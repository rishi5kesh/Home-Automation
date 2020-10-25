<?php 

  //--------------------------------------------------------------------------
  // Example php script for fetching data from mysql database
  // by Trystan Lea : openenergymonitor.org : GNU GPL
  //--------------------------------------------------------------------------
  $host = "192.168.200.55";
  $user = "home";
  $pass = "home";

  $databaseName = "home";
  $tableName = "Room";

  //--------------------------------------------------------------------------
  // 1) Connect to mysql database
  //--------------------------------------------------------------------------
  include 'DB.php';
  $con = mysql_connect($host,$user,$pass);
  $dbs = mysql_select_db($databaseName, $con);

  //--------------------------------------------------------------------------
  // 2) Query database for data
  //--------------------------------------------------------------------------
  $result = mysql_query("SELECT * FROM $tableName WHERE roomid=1");            //query
  $array = mysql_fetch_row($result);                          //fetch result    

  //--------------------------------------------------------------------------
  // 3) echo result as json 
  //--------------------------------------------------------------------------
  echo json_encode($array);

?>
