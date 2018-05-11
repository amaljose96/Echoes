<?php
require 'connect.php';
$r=execute_MYSQL("SELECT * FROM CATEGORIES");
$output=[];
while($row=$r->fetch_assoc()){
  $category=$row['CATEGORY_ID'];
  $data=array(
          "id"        =>  $row['CATEGORY_ID'],
          "category"  =>  $row['CATEGORY_TEXT'],
          "img"       =>  $row['CATEGORY_IMAGE'],
          "caption"   =>  $row['CATEGORY_CAPTION']
        );
  array_push($output,$data);
}

echo json_encode($output);


 ?>
