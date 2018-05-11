<html>
<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width'>
  <title>Echoes 18</title>

  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet">

  <link rel='stylesheet' href='css/slider.css'>
  <link rel='stylesheet' href='css/materialize.min.css'>
  <link rel='stylesheet' href='css/jquery.fullPage.css'>
  <link rel='stylesheet' href='css/slick.css'>
  <link rel='stylesheet' href='css/slick-theme.css'>
  <link rel='stylesheet' href='css/animate.css'>
  <link rel='stylesheet' href='css/diamond.css'>
  <link rel='stylesheet' href='css/style.css'>
</head>
<body>
  <div id='bg'></div>
  <div id='menu_trigger' onclick='open_menu()'></div>
  <div id='menu'>
    <div class='menu_item' onclick='load_home_page(function(){scrollToTop();})'>Home</div>|
    <div class='menu_item' onclick='load_about()'>About</div>|
		<div class='menu_item' onclick='load_categories(none)'>Events</div>|
		<div class='menu_item' onclick='load_cp()'>Campus Princess</div>|
		<div class='menu_item' onclick='load_pronites()'>Pro Nites</div>|
		<div class='menu_item' onclick='load_sponsors()'>Sponsors</div>|
		<div class='menu_item tooltipped' onclick='load_schedule()'>Schedule</div>|
		<div class='menu_item' onclick='load_team()'>Our Team</div>|
		<div class='menu_item' onclick='load_contacts()'>Contact</div>
	</div>
  <div id='main_page'>






  </div>
  <div id='overlay_page'>

  </div>
  <div id='back_button'></div>
  <div id='loading_overlay'></div>
  <div id='loading_section'>
    <img id='loading_image' src='img/loading.gif'>
    <div id='loading_text'>Loading..</div>
  </div>
    <div id='particles-js'></div>
    <script type='text/javascript' src='js/jquery.js'></script>
    <script  src='js/particles.js'></script>
    <script  src='js/materialize.min.js'></script>
    <script  src='js/jquery.fullPage.js'></script>
    <script  src='js/slider.js'></script>
    <script  src='js/slick.min.js'></script>
    <script  src='js/velocity.min.js'></script>
    <script  src='js/index.js'></script>
    <script>
      $(document).ready(function(){
          <?php
            if(array_key_exists('url',$_GET)){
              $type=$_GET['url'];
              if($type=='home_page'||$type==''){
                echo "load_home_page(none);";
              }
              else if($type=='categories')
              {
                if(array_key_exists('category',$_GET)){
                  $category=$_GET['category'];
                  echo "load_categories('".$category."',none);";
                }
                else{
                  echo "load_categories(undefined,none);";
                }

              }
            }
            else{
              echo "load_home_page(none);";
            }

           ?>
      });
    </script>
</body>
</html>
