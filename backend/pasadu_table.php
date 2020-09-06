<?php
	 header('Access-Control-Allow-Origin: *');
   
	 include 'conn.php';
   $type_group = $_GET["type_group"];
   if($type_group == "all" ){
    $sql = "SELECT * from pasadu where pasaduid is not null ";
    
   }else{
    $sql =  $sql = "SELECT * from pasadu where type_group = '".$type_group."' and pasaduid is not null ";

   }




$return_arr = array();

if ($result = mysqli_query( $conn, $sql )){
    while ($row = mysqli_fetch_assoc($result)) {
	
     array_push($return_arr,$row);
   }
 }

mysqli_close($conn);

echo json_encode($return_arr);








?>
