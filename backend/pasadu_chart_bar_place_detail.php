<?php
	 header('Access-Control-Allow-Origin: *');
   
	 include 'conn.php';
   $type_group = $_GET["type_group"];

 $sql = "SELECT
 pasadu.place AS label,
 count(typecom.id) AS value
FROM
 pasadu
INNER JOIN typecom ON pasadu.type_group = typecom.id
WHERE
 type_group = '".$type_group."' 
GROUP BY
 pasadu.place
ORDER BY
 count(typecom.id)DESC
LIMIT 10
 ";


$return_arr = array();
$final = array();
if ($result = mysqli_query( $conn, $sql )){
    while ($row = mysqli_fetch_assoc($result)) {
      $row_array['label'] =  $row['label'];    
      $row_array['value'] = intval($row['value']);
    
     array_push($return_arr,$row_array);
   }
 }

 $data_array = array("name" => "จำนวน");
 $data_array2 = array("data" => $return_arr);
  $result = array_merge($data_array,$data_array2);
  array_push($final,$result);

mysqli_close($conn);

echo json_encode($final);







?>
