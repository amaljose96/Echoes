<?php
session_start();
if(isset($_SESSION['auth'])&&$_SESSION['auth']=='yes'){
  $auth="Yes";
}
else{
  $auth="No";
}


 ?>
<!DOCTYPE html>
<html lang='en' >
<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width'>
  <title>Echoes 18 Registration_Panel</title>
  <link rel='stylesheet' href='../css/materialize.min.css'>
  <link rel='stylesheet' href='../css/material.min.css'>

<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <style>
    body{
      background-color: #fff;
    }
  </style>
</head>
<body>
  <div id='main_page'>

</div>
  <script type='text/javascript' src='../js/jquery.js'></script>
  <script  src='../js/materialize.min.js'></script>
  <script  src='../js/material.min.js'></script>
  <script>
        function load_login(){
          var html="";
          html+="<div class='container'>";
          html+="  <div class='card-panel'>";
          html+="    <div class='container'>";
          html+="       <h1 style='text-align:center'>Echoes Admin Panel</h1>"
          html+="      <div class='row'>";
          html+="        <form class='col s12'>";
          html+="          <div class='row'>";
          html+="            <div class='input-field col s12'>";
          html+="              <input id='last_name' type='text' class='validate'>";
          html+="              <label for='last_name'>Username</label>";
          html+="            </div>";
          html+="          </div>";
          html+="          <div class='row'>";
          html+="            <div class='input-field col s12'>";
          html+="              <input id='password' type='password' class='validate'>";
          html+="              <label for='password'>Password</label>";
          html+="            </div>";
          html+="          </div>";
          html+="          <div class='btn' onclick='auth()'>Login</div>";
          html+="        </form>";
          html+="      </div>";
          html+="    </div>";
          html+="  </div>";
          html+="</div>";
          $("#main_page").html(html);
        }
        function auth(){
          var username=$("#last_name").val();
          var password=$("#password").val();
          $.ajax({
             url: "../php/auth.php",
             method: "POST",
             data:"username="+username+"&password="+password,
             success:function(response){
               if(response=='Success'){
                 load_panels();
               }
               else{
                 alert("Invalid Password");
               }
             },
             complete:function(data){
              console.log("Brain sent");
              console.log(data.responseText);
             }
          });
        }
        function load_panels(){
          html="";
        html+='  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">';
        html+='  <header class="mdl-layout__header">';
        html+='    <div class="mdl-layout__header-row">';
        html+='      <span class="mdl-layout-title">Echoes 18 Admin Panel</span>';
        html+='    </div>';
        html+='    <div class="mdl-layout__tab-bar mdl-js-ripple-effect">';
        html+='      <a href="#content_management" class="mdl-layout__tab is-active">Content Management</a>';
        html+='      <a href="#reg_management" class="mdl-layout__tab" onclick="get_reg()">Registrations</a>';
        html+='    </div>';
        html+='  </header>';
        html+='  <main class="mdl-layout__content">';
        html+='    <section class="mdl-layout__tab-panel is-active" id="content_management">';
        html+='      <div class="page-content">';
      /*  html+='        <div class="container">';
        html+='          <div class="row">';
        html+='            <div class="card-panel">';
        html+='              <div class="container">';
        html+='                <div class="heading">About Section</div>';
        html+='                <div class="row">';
        html+='                  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">';
        html+='                    <input class="mdl-textfield__input" type="text" id="sample3">';
        html+='                    <label class="mdl-textfield__label" for="sample3">About Content</label>';
        html+='                  </div>';
        html+='                </div>';
        html+='                <div class="btn indigo">Change</div>';
        html+='              </div>';
        html+='            </div>';
        html+='          </div>';
        html+='        </div>';*/
        html+='      </div>';
        html+='    </section>';
        html+='    <section class="mdl-layout__tab-panel" id="reg_management">';
        html+='      <div class="page-content container">';
        html+='        <div class="card-panel">';
        html+='          <table class="responsive-table centered highlight bordered">';
        html+='            <thead>';
        html+='              <tr>';
        html+='                <th>Event</th>';
          html+='              <th>College</th>';
          html+='              <th>Name</th>';
          html+='              <th>Year</th>';
          html+='              <th>Phone</th>';
          html+='              <th>Email</th>';
          html+='              <th>Details</th>';
          html+='              <th>Time</th>';
          html+='            </tr>';
          html+='          </thead>';
          html+='          <tbody id="registrations_list">      ';
          html+='          </tbody>';

          html+='        </table>';
          html+='      </div>';
          html+='    </div>';
          html+='  </section>';
          html+='  <section class="mdl-layout__tab-panel" id="fixed-tab-3">';
          html+='    <div class="page-content"><!-- Your content goes here --></div>';
          html+='  </section>';
          html+='</main>';
          html+='</div>';
          $("#main_page").html(html);
          get_reg();
        }
        function get_reg(){
          $.ajax({
        		 url: "../php/get_reg.php",
        		 method: "POST",
             dataType:'json',
        		 success:function(registrations){
               if(registrations.auth!=='good'){
                 return;
               }
               registrations=registrations.data;
               var html="";
               registrations.forEach(function(reg){
                html+="<tr>";
                html+="   <td>"+reg.event+"</td>";
                html+="   <td>"+reg.college+"</td>";
                html+="   <td>"+reg.name+"</td>";
                html+="   <td>"+reg.year+"</td>";
                html+="   <td>"+reg.phone+"</td>";
                html+="   <td>"+reg.email+"</td>";
                html+="   <td>"+reg.detail+"</td>";
                html+="   <td>"+reg.time+"</td>";
                html+=" </tr>";
               });
               $("#registrations_list").html(html);
        		 },
        		 complete:function(data){
        			console.log("Brain sent");
        			console.log(data.responseText);
        		 }
        	});
        }
        $("document").ready(function(){
          <?php
            /*if($auth=='Yes'){
              echo "load_panels();";
            }
            else{*/
              echo "load_login();";
            //}
           ?>
        });
  </script>
</body>
</html>
