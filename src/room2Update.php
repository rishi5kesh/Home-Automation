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

  if (is_ajax()) {
  
    $s1 = $_POST["sw1"];
    if($s1=="1")
	{
	mysql_query("UPDATE Room SET sw1=1 WHERE roomid=2;");
	}
	if($s1=="0")
	{
	mysql_query("UPDATE Room SET sw1=0 WHERE roomid=2;");
	
	}
  
 

    $s2 = $_POST["sw2"];
    if($s2=="1")
	{
	mysql_query("UPDATE Room SET sw2=1 WHERE roomid=2;");
	}
	if($s2=="0")
	{
	mysql_query("UPDATE Room SET sw2=0 WHERE roomid=2;");
	
	}
  
 
  
    $s3 = $_POST["sw3"];
    if($s3=="1")
	{
	mysql_query("UPDATE Room SET sw3=1 WHERE roomid=2;");
	}
	if($s3=="0")
	{
	mysql_query("UPDATE Room SET sw3=0 WHERE roomid=2;");
	
	}
  
 }


//Function to check if the request is an AJAX request
function is_ajax() {
  return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
}
  
  
  
?>
