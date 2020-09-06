<?php
	 header('Access-Control-Allow-Origin: *');
   
	 include 'conn.php';

   $type_group = $_GET["type_group"];
   

 $sql = "SELECT * FROM typecom
where id = '".$type_group."' 

 ";


$return_arr = array();

if ($result = mysqli_query( $conn, $sql )){
    while ($row = mysqli_fetch_assoc($result)) {
	
     array_push($return_arr,$row);
   }
 }

mysqli_close($conn);

echo json_encode($return_arr);








?>
