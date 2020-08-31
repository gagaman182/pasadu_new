<?php
	 header('Access-Control-Allow-Origin: *');
   
	 include 'conn.php';


 $sql = "select * from (
  SELECT
   pasadu.tmoney as label,
  count(pasadu.pasaduid) as value
  
  
  
  FROM
   pasadu
  
  
  GROUP BY pasadu.tmoney
  ORDER BY count(pasadu.pasaduid) desc
  )x
  where x.label <> ''
  limit 10
  
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
