<?php
session_start();
if($_POST['username']=='ADMIN'&&$_POST['password']=='***'){
  $_SESSION['auth']='yes';
  echo "Success";
}
else{
  echo "Fail";
}


 ?>
