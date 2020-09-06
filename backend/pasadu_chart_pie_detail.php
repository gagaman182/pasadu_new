<?php
	 header('Access-Control-Allow-Origin: *');
   
	 include 'conn.php';
   $type_group = $_GET["type_group"];

   if($type_group == "all" ){
    $sql = "SELECT
    pasadu.status as name,
   count(pasadu.pasaduid) as value
   
   
   FROM
    pasadu
   
   
   GROUP BY pasadu.status
   ORDER BY pasadu.status
    ";
    
   }else{
    $sql = "SELECT
    pasadu.status as name,
   count(pasadu.pasaduid) as value
   
   
   FROM
    pasadu
    where type_group = '".$type_group."'
   
   GROUP BY pasadu.status
   ORDER BY pasadu.status
    ";

   }


 


$return_arr = array();

if ($result = mysqli_query( $conn, $sql )){
    while ($row = mysqli_fetch_assoc($result)) {
      $row_array['name'] =  $row['name'];    
      $row_array['value'] = intval($row['value']);
    
     array_push($return_arr,$row_array);
   }
 }

mysqli_close($conn);

echo json_encode($return_arr);








?>
