<?php

$r1s1=$r1s2=$r1s3=$r1s4=$r1s5="";
$r2s1=$r2s2=$r2s3=$r2s4=$r2s5="";
if ($_SERVER["REQUEST_METHOD"] == "POST") 
$r1s1= isset($_POST["room1sw1"]);
$r1s2= isset($_POST["room1sw2"]);
$r1s3= isset($_POST["room1sw3"]);
$r1s4= isset($_POST["room1sw4"]);
$r1s5= isset($_POST["room1sw5"]);

$r2s1= isset($_POST["room2sw1"]);
$r2s2= isset($_POST["room2sw2"]);
$r2s3= isset($_POST["room2sw3"]);
$r2s4= isset($_POST["room2sw4"]);
$r2s5= isset($_POST["room2sw5"]);

	 system ( "gpio write 0 0" );
     system ( "gpio write 1".$r1s1 );
	 system ( "gpio write 3".$r1s2 );
     system ( "gpio write 4".$r1s3 );
	 system ( "gpio write 5".$r1s4 );
     system ( "gpio write 6".$r1s5 );
	 
	 system ( "gpio write 0 1" );
     system ( "gpio write 1".$r2s1 );
	 system ( "gpio write 3".$r2s2 );
     system ( "gpio write 4".$r2s3 );
	 system ( "gpio write 5".$r2s4 );
     system ( "gpio write 6".$r2s5 );
	 
	 echo $r1s1;
	 ?>