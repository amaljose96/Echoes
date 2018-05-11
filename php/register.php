<?php
require 'connect.php';
$event=$_POST['eventid'];
$name=$_POST['name'];
$college=$_POST['college'];
$year=$_POST['year'];
$phone=$_POST['phone'];
$email=$_POST['email'];
$detail=$_POST['detail'];
$time=time();
$regid=$event.$time;
if($event==""){
  $data["status"]='failure';
  $data['message']='Event data is wrong';
  echo json_encode($data);
  exit();
}
if($college==""){
  $data["status"]='failure';
  $data['message']='College is missing';
  echo json_encode($data);
  exit();
}
if($year==""){
  $data["status"]='failure';
  $data['message']='Year is missing';
  echo json_encode($data);
  exit();
}
if($phone==""){
  $data["status"]='failure';
  $data['message']='Phone is missing';
  echo json_encode($data);
  exit();
}
if($email==""){
  $data["status"]='failure';
  $data['message']='Email is missing';
  echo json_encode($data);
  exit();
}
$r=execute_MYSQL("INSERT INTO REGISTRATION VALUES('$regid','$event','$name','$college','$year','$phone','$email','$detail','$time')");
$data["status"]='success';
$data['message']='Registration successful.';
echo json_encode($data);
?>
