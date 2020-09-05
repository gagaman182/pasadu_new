<?php
 header('Content-Type:application/json');
 header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Methods: POST');
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


 include 'conn.php';

 


$query = "INSERT INTO pasadu (pasaduid, noid, name, modem, serialno, company,type,place,receive,perunit,kmoney,tmoney,engname,status,type_group)

VALUES ('".$pasaduid."','".$noid."','".$name."','".$modem."','".$serialno."','".$company."','".$type."','".$place."','".$receive."',
'".$perunit."','".$kmoney."','".$tmoney."','".$engname."','".$status."','".$type_group."')";


$return_arr = array();

if ($result = mysqli_query( $conn, $query )){
  
  $row_array['message'] = 'บันทึกข้อมูลสำเร็จ';
  array_push($return_arr,$row_array);
  
 }else{
  $row_array['message'] = 'ไม่สามารถบันทึกข้อมูลได้/ข้อมูลซ้ำ';
  array_push($return_arr,$row_array);
 }

mysqli_close($conn);

echo json_encode($return_arr);


?>