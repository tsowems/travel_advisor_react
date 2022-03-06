<?php
include_once("connection.php");
	$usercode = $_GET['pid'];
    echo "hio";
    echo usercode;


    $sql = "DELETE FROM MyGuests WHERE id=$usercode";

    echo $sql;
// if(isset($_GET['pid']) && $_GET['pid']!=''){

   

//     echo usercode;
// }


?>