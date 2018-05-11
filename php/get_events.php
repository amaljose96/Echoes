<?php
require 'connect.php';
$category_id=$_POST['categoryid'];
$r=execute_MYSQL("SELECT * FROM EVENTS where EVENT_CATEGORY='$category_id'");
$output=[];
while($row=$r->fetch_assoc()){
  $event['id']=utf8_decode($row['EVENT_ID']);
  $event['img']=utf8_decode($row['EVENT_IMAGE']);
  $event['name']=utf8_decode($row['EVENT_TEXT']);
  $event['tag']=utf8_decode($row['EVENT_TAG']);
  $event['description']=utf8_decode($row['EVENT_DESCRIPTION']);
  $event['registration']=utf8_decode($row['EVENT_REGISTRATION']);
  $event['rules']=utf8_decode($row['EVENT_RULES']);
  $event['contacts']=utf8_decode($row['EVENT_CONTACTS']);
  array_push($output,$event);
}

echo json_encode($output);
 ?>
