<?php
 header('Content-Type:application/json');
 header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Methods: POST');
 header('Access-Control-Allow-Headers: Acess-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization');
 $data = json_decode(file_get_contents('php://input'),true);
 $pasaduid = $data['pasaduid'];


 include 'conn.php';

 


$query = "DELETE FROM pasadu 
WHERE pasaduid = '".$pasaduid."'";


$return_arr = array();

if ($result = mysqli_query( $conn, $query )){
  
  $row_array['message'] = 'ลบข้อมูลสำเร็จ';
  array_push($return_arr,$row_array);
  
 }else{
  $row_array['message'] = 'ไม่สามารถลบข้อมูลได้/ไม่พบข้อมูล';
  array_push($return_arr,$row_array);
 }

mysqli_close($conn);

echo json_encode($return_arr);


?>