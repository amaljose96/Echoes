<?php
require 'connect.php';
$r=execute_MYSQL("SELECT * FROM SITE_CONTENT WHERE TAG='ABOUT'");
$data['about']=utf8_decode($r->fetch_assoc()['CONTENT']);
$r=execute_MYSQL("SELECT * FROM SITE_CONTENT WHERE TAG='CP'");
$data['cp']=utf8_decode($r->fetch_assoc()['CONTENT']);
$r=execute_MYSQL("SELECT * FROM SITE_CONTENT WHERE TAG='CONTACT'");
$data['contact']=utf8_decode($r->fetch_assoc()['CONTENT']);
echo json_encode($data);

 ?>
