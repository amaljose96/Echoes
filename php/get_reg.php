<?php
session_start();
if(!isset($_SESSION['auth'])||$_SESSION['auth']!='yes'){
  $data['auth']='bad';
  echo json_encode($data);
  exit();
}
date_default_timezone_set('UTC');
require 'connect.php';
$r=execute_MYSQL("SELECT EVENT_TEXT,REGISTRATION.* FROM REGISTRATION,EVENTS WHERE EVENTS.EVENT_ID=REGISTRATION.EVENT ORDER BY EVENT_TEXT,REGISTRATION.TIME ASC ");
$output=[];
while($row=$r->fetch_assoc()){
  $reg['event']=utf8_decode($row['EVENT_TEXT']);
  $reg['name']=utf8_decode($row['NAME']);
  $reg['college']=utf8_decode($row['COLLEGE']);
  $reg['year']=utf8_decode($row['YEAR']);
  $reg['phone']=utf8_decode($row['PHONE']);
  $reg['email']=utf8_decode($row['EMAIL']);
  $reg['detail']=utf8_decode($row['DETAILS']);
  $reg['time']=date('jS, F Y h:i:s A',$row['TIME']);
  array_push($output,$reg);
}
$data['auth']='good';
$data['data']=$output;
echo json_encode($data);
 ?>
