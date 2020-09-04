<?php
	 header('Access-Control-Allow-Origin: *');
   
	 include 'conn.php';

   $pasaduid = $_GET["pasaduid"];

 $sql = "SELECT  pasadu.* ,typecom.name as typegroup_name FROM pasadu 
 INNER JOIN typecom on pasadu.type_group = typecom.id
 
where pasaduid = '" . $pasaduid ."' ";


$return_arr = array();

if ($result = mysqli_query( $conn, $sql )){
    while ($row = mysqli_fetch_assoc($result)) {
	
     array_push($return_arr,$row);
   }
 }

mysqli_close($conn);

echo json_encode($return_arr);








?>
