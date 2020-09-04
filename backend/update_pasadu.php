<?php
 header('Content-Type:application/json');
 header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Methods: PUT');
 header('Access-Control-Allow-Headers: Acess-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization');
 $data = json_decode(file_get_contents('php://input'),true);
 $pasaduid = $data['pasaduid'];
 $name = $data['name'];

//  $pasaduid = "10092";
//  $name = "55";
 include 'conn.php';

 
  $query = "UPDATE pasadu
SET name = '" . $name ."'
WHERE pasaduid = '" . $pasaduid ."' ";




$return_arr = array();

if ($result = mysqli_query( $conn, $query )){
  
  $row_array['message'] = 'อัพเดทข้อมูลสำเร็จ';
  array_push($return_arr,$row_array);
  
 }else{
  $row_array['message'] = 'ไม่สามารถอัพเดทข้อมูลได้';
  array_push($return_arr,$row_array);
 }

mysqli_close($conn);

echo json_encode($return_arr);


?>