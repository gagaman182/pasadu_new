<?php
 header('Content-Type:application/json');
 header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Methods: PUT');
 header('Access-Control-Allow-Headers: Acess-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization');
 $data = json_decode(file_get_contents('php://input'),true);
 $pasaduid = $data['pasaduid'];
 $noid = $data['noid'];
 $name = $data['name'];
 $modem = $data['modem'];
 $serialno = $data['serialno'];
 $company = $data['company'];
 $type = $data['type'];
 $place = $data['place'];
 $receive = $data['receive'];
 $perunit = $data['perunit'];
 $kmoney = $data['kmoney'];
 $tmoney = $data['tmoney'];
 $engname = $data['engname'];
 $status = $data['status'];
 $type_group = $data['type_group'];

//  $pasaduid = "10092";
//  $name = "55";
 include 'conn.php';

 
  $query = "UPDATE pasadu
SET pasaduid = '" . $pasaduid ."',
noid = '" . $noid ."',
name = '" . $name ."',
modem = '" . $modem ."',
serialno = '" . $serialno ."',
company = '" . $company ."',
type = '" . $type ."',
place = '" . $place ."',
receive = '" . $receive ."',
perunit = '" . $perunit ."',
kmoney = '" . $kmoney ."',
tmoney = '" . $tmoney ."',
engname = '" . $engname ."',
status = '" . $status ."',
type_group = '" . $type_group ."'
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