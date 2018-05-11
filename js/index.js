var animations=true;
	var colors = ["#c0392b","#e74c3c", "#d35400","#e67e22", "#f39c12","#f1c40f","#1abc9c","#16a085","#2ecc71","#27ae60","#3498db","#2980b9","#9b59b6","#8e44ad","#999","#eee"];

	  particlesJS.load('particles-js', 'assets/particles.json', function() {
	  console.log('callback - particles.js config loaded');
	});

tops={};

function goToByScroll(id){
	console.log("Moving to "+id+" at "+(tops[id]-50));
	    $('#main_page').animate({scrollTop: tops[id]-50},'slow');
	}

function scrollToTop(){
	console.log("Moving to Top");
	$('#main_page').animate({
			scrollTop: 0
		},
			'slow');
}



var ishome=true;



function load_home_page(callback){
	ishome=true;
	$("#back_button").fadeOut();
	close_overlay(none);
	$.ajax({
		 url: "php/get_sitestuff.php",
		 method: "POST",
		 dataType:'json',
		 success:function(data){
			 var html="";
		 		html+="<div id='landing'><img id='landing_con' src='img/landing/landing_confetti.png'></img><img id='landing_diamond' src='img/landing/landing_main.png'></img><img id='landing_text' src='img/landing/landing_text.png'></div>";


								html+="					<div style='text-align:center'><a id='register_main_button' class='btn modal-trigger register_button' href='#reg_main'>Register</a></div>";

		 		html+="<div class='card-panel animated bounceOutDown' id='about'>";
		 		html+="	<div class='container'>"
		 		html+="		<div class='main_heading'>About</div>"
		 		html+="		<div class='main_text'>"+data.about+"</div>";
		 		html+="	</div>";
		 		html+="</div>";

				html+="<div id='quadrangle'>Events and Shows<div id='tiles'>";
				if(mobile()){
					html+="	<div id='topleft' class='main_page_image tile_element' onclick='load_categories(\"NONE\",none)'>Events</div>";
				}
				else{
					html+="	<div id='topleft' class='main_page_image tile_element' onclick='open_categories()'>Events</div>";
				}
				html+="	<div id='topright' class='main_page_image tile_element' onclick='load_pronites()'>Farhan &nbsp;Live</div>";
				html+="	<div id='bottomleft' class='main_page_image tile_element' onclick='load_cp()'>Campus &nbsp;Princess</div>";
				html+="	<div id='bottomright' class='main_page_image tile_element' onclick='load_pronites()'><br><br><br>Pronites</div>";
				html+="</div>";
				if(!mobile()){
					html+="<div id='diamond_holder'>";
					html+="	<div class='diamond diamond_right' id='diamond_back' onclick='close_categories()' ><div id='do0' class='diamond_overlay'>Back</div></div>";
					html+="	<div class='diamond diamond_left' id='diamond8'  onclick='load_events(\"MUSIC\")'><div class='diamond_overlay diamond_overlay_left' id='do8'>Music</div></div>";
					html+="	<div class='diamond diamond_left' id='diamond7'  onclick='load_events(\"DANCE\")'><div class='diamond_overlay diamond_overlay_left' id='do7'>Dance</div></div>";
					html+="	<div class='diamond diamond_left' id='diamond6'  onclick='load_events(\"FASHION\")'><div class='diamond_overlay diamond_overlay_left' id='do6'>Fashion</div></div>";
					html+="	<div class='diamond diamond_left' id='diamond5'  onclick='load_events(\"FINE_ARTS\")'><div class='diamond_overlay diamond_overlay_left' id='do5'>Fine Arts</div></div>";
					html+="	<div class='diamond diamond_right' id='diamond4' onclick='load_events(\"LITERARY\")'><div class='diamond_overlay diamond_overlay_right' id='do4'>Literary</div></div>";
					html+="	<div class='diamond diamond_right' id='diamond3' onclick='load_events(\"QUIZING\")'><div class='diamond_overlay diamond_overlay_right' id='do3'>Quizzing</div></div>";
					html+="	<div class='diamond diamond_right' id='diamond2' onclick='load_events(\"STREETPLAY\")'><div class='diamond_overlay diamond_overlay_right' id='do2'>StreetPlay</div></div>";
					html+="	<div class='diamond diamond_left' id='diamond1' onclick='load_events(\"INFORMALS\")'><div class='diamond_overlay diamond_overlay_left' id='do1'>Gaming</div></div>";
					html+="</div>";
				}
				html+="</div>";

















		 		html+="<div class='card-panel' id='sponsors'>";
		 		html+="	<div class='container'>";
		 		html+="		<div class='main_heading'>Sponsors</div>"
		 		html+="		<div class='main_text'>";




				html+="			<div style='margin-left:15%;width:70%;display:flex;flex-direction:row;justify-content:space-around;align-items:center'>";
					html+="		<img class='sponsor_image' src='img/sponsors/1.jpg' style='width:100%;'>&nbsp;</img>";
				html+="			</div>";
				html+="<div style='text-align:center; font-size:1.4em;margin-top:20px;'>Title Sponsor</div><br>";

				html+="			<div style='display:flex;flex-direction:row;justify-content:space-around;align-items:center'>";
					html+="		<img class='sponsor_image' src='img/sponsors/2.jpg' style='width:18%'>&nbsp;</img>";
					html+="		<img class='sponsor_image' src='img/sponsors/3.jpg' style='width:18%'>&nbsp;</img>";
					html+="		<img class='sponsor_image' src='img/sponsors/4.jpg' style='width:18%'>&nbsp;</img>";
					html+="		<img class='sponsor_image' src='img/sponsors/5.jpg' style='width:18%'>&nbsp;</img>";
					html+="		<img class='sponsor_image' src='img/sponsors/6.jpg' style='width:18%'>&nbsp;</img>";
				html+="			</div>";

				html+="<br>";

				html+="			<div style='display:flex;flex-direction:row;justify-content:space-around;align-items:center'>";
					html+="		<img class='sponsor_image' src='img/sponsors/7.jpg' style='width:18%'>&nbsp;</img>";
					html+="		<img class='sponsor_image' src='img/sponsors/8.jpg' style='width:18%'>&nbsp;</img>";
					html+="		<img class='sponsor_image' src='img/sponsors/9.jpg' style='width:18%'>&nbsp;</img>";
					html+="		<img class='sponsor_image' src='img/sponsors/10.jpg' style='width:18%'>&nbsp;</img>";
					html+="		<img class='sponsor_image' src='img/sponsors/11.jpg' style='width:18%'>&nbsp;</img>";
				html+="			</div>";


				html+="<br>";

				html+="			<div style='display:flex;flex-direction:row;justify-content:space-around;align-items:center'>";
					html+="		<img class='sponsor_image' src='img/sponsors/12.jpg' style='width:18%'>&nbsp;</img>";
					html+="		<img class='sponsor_image' src='img/sponsors/13.jpg' style='width:18%'>&nbsp;</img>";
					html+="		<img class='sponsor_image' src='img/sponsors/14.jpg' style='width:18%'>&nbsp;</img>";
					html+="		<img class='sponsor_image' src='img/sponsors/15.jpg' style='width:18%'>&nbsp;</img>";
					html+="		<img class='sponsor_image' src='img/sponsors/16.jpg' style='width:18%'>&nbsp;</img>";
				html+="			</div>";

				html+="<br>";

				html+="			<div style='display:flex;flex-direction:row;justify-content:space-around;align-items:center'>";
					html+="		<img class='sponsor_image' src='img/sponsors/17.jpg' style='width:18%'>&nbsp;</img>";
					html+="		<img class='sponsor_image' src='img/sponsors/18.jpg' style='width:18%'>&nbsp;</img>";
					html+="		<img class='sponsor_image' src='img/sponsors/19.jpg' style='width:18%'>&nbsp;</img>";
					html+="		<img class='sponsor_image' src='img/sponsors/20.jpg' style='width:18%'>&nbsp;</img>";
					html+="		<img class='sponsor_image' src='img/sponsors/21.jpg' style='width:18%'>&nbsp;</img>";
				html+="			</div>";





				html+="</div>";
		 		html+="	</div>";
		 		html+="</div>";





		 		html+="<div class='card-panel' id='team'>";
		 		html+="		<div class='main_heading'>Our Team</div>"
		 		html+="		<div class='main_text'>";
		 		team=['Abhimanyu','Akbar','Anjali','Ayush','Bhargava','Divya','Durga','Hamza','Himanshu','Karthik','Naman','Priya','Rahul','Raj','Sandeep','Shivangi','Swati','Swetalina','Thai','Yogendra'];

		 		html+="<div id='team_row'>";


		 		team.forEach(function(member){
		 			html+="<div class='team_member' style='width:150px;'>";
		 			html+="		<div class='team_member_image' style='background-image:url(img/team/"+member+".jpg);'></div>";
		 			html+="		<div class='team_member_name'>"+member+"</div>";
		 			html+="</div>";
		 		})

		 		html+="</div>";
		 		html+="	</div>";
		 		html+="</div>";

		 		html+="<div class='card-panel' id='contact'>";
		 		html+="		<div class='main_text'>";
				html+="		<div class='row'>";
				html+="			<div id='contact_left' class='col m3 s12 animated bounceOutLeft'>";
				html+="				<div class='main_heading'>Venue</div>";
				html+="				<div class='main_text'>IIM Kozhikode<br>Kerala-673750<br><Br></div>";
				html+="			</div>";
				html+="			<div id='iimk' class='col m6 s12 animated bounceOutLeft' style='height:250px;background-image:url(img/sketch.png);background-size:cover;margin-bottom:30px;'><br>";
				html+="			</div>";
				html+="			<div id='contact_right' class='col m3 s12 animated bounceOutLeft'>";
				html+="				<div class='main_heading'>Contact Us</div>"
		 		html+="				<div class='main_text'>";
				html+="<div style='font-weight:bold'>Naman Jaiswal</div>+91 78287 80111<div style='font-weight:bold'>Rahul Dubey</div>+91 90387 68030<br><br><div style='width:60%;margin-left:20%;display:flex;flex-direction:row;justify-content:space-around'><a class='material-icons icon ion-social-facebook' href='https://www.facebook.com/Echoes.IIMK/'></a><a class='material-icons ion-social-instagram' href='https://www.instagram.com/echoes.iimk/'></a></div><a href='mailto:culcom@iimk.ac.in?Subject=Enquiry%20regarding' target='_top'>culcom@iimk.ac.in</a><br>";
				html+="				</div>";
				html+="			</div>";
				html+="		</div>";
				html+="</div>";
		     html+="</div>";

		 		html+="<footer class='page-footer grey darken-3'>";
		     html+="      <div class='footer-copyright grey darken-4'>";
		     html+="        <div class='container centered'>";
		     html+="        © 2018 Amal Jose.";
		     html+="        </div>";
		     html+="</footer>";

				 html+="<div id='reg_main' class='modal modal-fixed-footer'>";
				 html+="  <div class='modal-content'>";
				 html+="					<div id='reg_heading'>Registration</div>";
				 html+="					<div id='reg_form'>";
				 html+="						<div class='row'>";
				 html+="							<div class='input-field col s12'>";
				 html+="								<input id='reg_name_main' type='text' class='validate'>";
				 html+="								<label for='reg_name'>Name</label>";
				 html+="							</div>";
				 html+="						</div>";
				 html+="						<div class='row'>";
				 html+="							<div class='input-field col s12'>";
				 html+="								<input id='reg_college_main' type='text' class='validate'>";
				 html+="								<label for='reg_college'>College</label>";
				 html+="							</div>";
				 html+="						</div>";
				 html+="						<div class='col s12'>";
				 html+="							<select id='reg_year_main'>";
				 html+="								<option value='None' disabled selected>Year</option>";
				 html+="								<option value='First'>First Year</option>";
				 html+="								<option value='Second'>Second Year</option>";
				 html+="								<option value='Third'>Third Year</option>";
				 html+="								<option value='Fourth'>Fourth Year</option>";
				 html+="								<option value='Other'>Other</option>";
				 html+="							</select>";
				 html+="							<label>Choose your Year</label>";
				 html+="						</div>";
				 html+="						<div class='row'>";
				 html+="							<div class='input-field col s12'>";
				 html+="								<input id='reg_phone_main' type='text' class='validate'>";
				 html+="								<label for='reg_phone_main'>Phone Number</label>";
				 html+="							</div>";
				 html+="						</div>";
				 html+="						<div class='row'>";
				 html+="							<div class='input-field col s12'>";
				 html+="								<input id='reg_email_main' type='text' class='validate'>";
				 html+="								<label for='reg_email_main'>Email</label>";
				 html+="							</div>";
				 html+="						</div>";
				 html+="					</div>";
				 html+="  </div>";
				 html+="  <div class='modal-footer' style='background-color: rgba(0, 0, 0, 0.7);'>";
				 html+="							<span class='btn green center-align' id='register_action' onclick='register(\"MAIN\",\"main\")'>Register</span>";
				 html+="							<a class='modal-close waves-effect waves-red btn-flat center-align white-text'>Close</a>";
				 html+="  </div>";
				 html+="</div>";


		 	$("#main_page").html(html);

		 	/*SETTING UP TOPS*/
		 	if(tops['about']==undefined){
		 		tops['about']=$("#about").position().top;
		 		tops['sponsors']=$("#sponsors").position().top;
		 		tops['team']=$("#team").position().top;
		 		tops['contact']=$("#contact").position().top;
		 	}



			$('.modal').modal({
				 dismissible: false,
				 ready:function(modal,trigger){
					 $(".modal-overlay").fadeOut();
					$('select').material_select();
				 }
			});
		 	$(document).mousemove(function(e) {
				$('#landing_diamond').css('transform', 'rotateX(0deg) rotateY(0deg)');
				if(animations==true){
			 		var left_bias=(e.pageX-(window.innerWidth/2))/window.innerWidth;
			 		var top_bias=(e.pageY-(window.innerHeight/2))/window.innerHeight;
			 		var background_X=(-(0.05*window.innerWidth)-left_bias*(0.05*window.innerWidth));
			 		var background_Y=(-(0.05*window.innerHeight)-top_bias*(0.05*window.innerWidth));
			     rotate_X = e.pageX;
			     rotate_Y = -e.pageY;
			 		$("#landing").css('background-position',background_X+'px '+background_Y+'px');
				 $("#tiles").css('transform','rotateX(' + top_bias*20 + 'deg) rotateY(' + left_bias*20 + 'deg)');
			 		if(!isSafari()){
			 			$('#landing_diamond').css('transform', 'rotateX(' + top_bias*30 + 'deg) rotateY(' + left_bias*30 + 'deg)');
			 			$('#landing_text').css('transform', 'rotateX(' + top_bias*40 + 'deg) rotateY(' + left_bias*40 + 'deg)');
						$('.main_page_image').css('transform', 'rotateX(' + -top_bias*20 + 'deg) rotateY(' + -left_bias*20 + 'deg)');
			 		}
				}
		 	});
		 	window.addEventListener("deviceorientation", function(e){
					$('#landing_diamond').css('transform', 'rotateX(0deg) rotateY(0deg)');
 		 		if(animations==true){
			 		var left_bias=e.gamma/100;
			 		var top_bias=e.beta/90;
			 		var background_X=(-(0.1*window.innerWidth)-left_bias*(0.05*window.innerWidth));
			 		var background_Y=(-(0.1*window.innerHeight)-top_bias*(0.05*window.innerWidth));
			     rotate_X = e.pageX;
			     rotate_Y = -e.pageY;
					 $("#landing").css('background-position',background_X+'px '+background_Y+'px');
	 		 		if(!isSafari()){
	 		 			$('#landing_diamond').css('transform', 'rotateX(' + top_bias*30 + 'deg) rotateY(' + left_bias*30 + 'deg)');
	 		 			$('#landing_text').css('transform', 'rotateX(' + top_bias*40 + 'deg) rotateY(' + left_bias*40 + 'deg)');
	 		 			$('.main_page_image').css('transform', 'rotateX(' + -top_bias*30 + 'deg) rotateY(' + -left_bias*30 + 'deg)');
	 		 		}
 		 		}
		 	}, true);



			$("#main_page").scroll(scrollByTop);
			$(".tile_element").hover(function(e){
				$(".tile_element").css("filter","grayscale(1)");
				if(e.type=='mouseenter'){
					$(this).css("filter","grayscale(0)");
				}
				if(e.type=='mouseleave'){
					$(".tile_element").css("filter","grayscale(0)");
				}
			});
			$("#team_row").slick({
				infinite: true,
			  speed: 600,
				dots:true,
				arrows:true,
				slidesToShow: 8,
				slidesToScroll: 4,
				autoplay: true,
				autoplaySpeed: 2000,
				responsive: [
								    {
								      breakpoint: 1024,
								      settings: {
								        slidesToShow: 6,
								        slidesToScroll: 6,
								        infinite: true,
								        dots: true
								      }
								    },
								    {
								      breakpoint: 600,
								      settings: {
								        slidesToShow: 3,
								        slidesToScroll: 3
								      }
								    },
								    {
								      breakpoint: 480,
								      settings: {
								        slidesToShow: 2,
								        slidesToScroll: 2
								      }
								    }
								],
			});
		 	if(mobile()){
		 		html="  <div class='menu_item' onclick='load_home_page(function(){scrollToTop();})'>Home</div>";
		 	  html+="  <div class='menu_item' onclick='load_about()'>About</div>";
		 		html+="	<div class='menu_item' onclick='load_categories(\"NONE\",none)'>Events</div>";
		 		html+="	<div class='menu_item' onclick='load_cp()'>Campus Princess</div>";
		 		html+="	<div class='menu_item' onclick='load_pronites()'>Pro Nites</div>";
		 		html+="	<div class='menu_item' onclick='load_sponsors()'>Sponsors</div>";
		 		html+="	<div class='menu_item' onclick='load_schedule()'>Schedule</div>";
		 		html+="	<div class='menu_item' onclick='load_team()'>Our Team</div>";
		 		html+="	<div class='menu_item' onclick='load_contacts()'>Contact</div>";
		 		html+="	<div class='menu_item' onclick='close_menu()'>Back</div>";
		 		$("#menu").html(html);
		 		$("#menu").fadeOut();
		 				if(mobile()){
		 					close_menu();
		 				}
		 	}
		 	stop_loading();
		 	callback();
		 },
		 complete:function(data){
			 if(debugmode==true){
					console.log("Brain sent");
					console.log(data.responseText);
			 }
		 }
	});
}







function none(){}

function open_menu(){
	$("#menu").fadeIn();
	$("#main_page").css("filter","blur(3px)");
	$("#overlay_page").css("filter","blur(3px)");
	$("#menu_trigger").fadeOut();
}
function close_menu(){
	$("#menu").fadeOut();
	$("#main_page").css("filter","blur(0px)");
	$("#overlay_page").css("filter","blur(0px)");
	$("#menu_trigger").fadeIn();
}
function open_overlay(p){
	$("#overlay_page").fadeIn(function(){
			p();
	});
}
function close_overlay(p){
	$("#overlay_page").fadeOut(p);
}
function mobile(){
	 if( navigator.userAgent.match(/Android/i)
	 || navigator.userAgent.match(/webOS/i)
	 || navigator.userAgent.match(/iPhone/i)
	 || navigator.userAgent.match(/iPad/i)
	 || navigator.userAgent.match(/iPod/i)
	 || navigator.userAgent.match(/BlackBerry/i)
	 || navigator.userAgent.match(/Windows Phone/i)
	 || window.innerWidth < 600
	 ){
	    return true;
	  }
	 else {
	    return false;
	  }
}

function isSafari(){
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
				return true;
		}
	 else {
	    return false;
	  }
}
categories=[];
function load_categories(categoryid,callback){
	ishome=false;
	$("#back_button").fadeOut();
	$("#main_page").html("");
	start_loading();
	$.ajax({
     url: "php/get_categories.php",
     method: "POST",
     dataType:'json',
     success:function(data){
			 categories=data;
					var html="<div class='slider' id='slider' style='--img-prev:url("+data[0].img+")'>";
		      html+="  <div class='slider__content' id='slider-content'>";
		      html+="    <div class='slider__images'>";
		      var  count=0;
					var browseto=0;
					if(categoryid!=undefined){
						data.forEach(function(category){
							console.log("searching for "+categoryid+" and "+category.id);
							if(category.id==categoryid){
								browseto=count;
							}
							count+=1;
						});
					}
					else{
						browseto=0;
					}
					count=0;
		      data.forEach(function(category){
		        if(count==browseto){
		          html+="<div class='slider__images-item slider__images-item--active' data-id='"+(count+1)+"'><img src='"+category.img+"'/></div>";
		        }
		        else{
		          html+="<div class='slider__images-item' data-id='"+(count+1)+"'><img src='"+category.img+"'/></div>";
		        }
		        count=count+1;
		      })
		      html+="</div>";
		      html+="<div class='slider__text'>";
		      count=0;
		      data.forEach(function(category){
		        if(count==browseto){
		          html+="<div class='slider__text-item slider__text-item--active' data-id='"+(count+1)+"'>";
		          html+="  <div class='slider__text-item-head'>";
		          html+="    <h3>"+category.category+"</h3>";
		          html+="  </div>";
		          html+="  <div class='slider__text-item-info'>";
		          html+="    <p>"+category.caption+"</p>";
		          html+="  </div>";
		          html+="</div>";
		        }
		        else{
		          html+="<div class='slider__text-item' data-id='"+(count+1)+"'>";
		          html+="  <div class='slider__text-item-head'>";
		          html+="    <h3>"+category.category+"</h3>";
		          html+="  </div>";
		          html+="  <div class='slider__text-item-info'>";
		          html+="    <p>"+category.caption+"</p>";
		          html+="  </div>";
		          html+="</div>";
		        }
		        count=count+1;
		      });
		      html+=" </div>";
		      html+="</div>";
		      html+="<div class='slider__nav'>";
		      html+="<div class='slider__nav-arrows'>";
		      html+="<div class='slider__nav-arrow slider__nav-arrow--left' id='left'>to left</div>";
		      html+="<div class='slider__nav-arrow slider__nav-arrow--right' id='right'>to right</div>";
		      html+="</div>";
		      html+="<div class='slider__nav-dots' id='slider-dots'>";
		      count=0;
		      data.forEach(function(category){
		        if(count==browseto){
		          html+="<div class='slider__nav-dot slider__nav-dot--active' data-id='"+(count+1)+"'></div>";
		        }
		        else{
		          html+="<div class='slider__nav-dot' data-id='"+(count+1)+"'></div>";
		        }
		        count=count+1;
		      });
		      html+="</div>";
		      html+="</div>";
		      html+="</div>";
					if(categoryid=='MUSIC'||categoryid=='DANCE'||categoryid=='FINE_ARTS'||categoryid=='LITERARY'||categoryid=='FASHION'||categoryid=='QUIZING'||categoryid=='INFORMALS'){
						html+="<div id='warp_in_button' onclick='load_events(\""+categoryid+"\")'>Details</div>";
					}
					else{
						html+="<div id='warp_in_button' onclick='load_events(\"DANCE\")'>Details</div>";
					}
					$("#overlay_page").html(html);
					console.log("Loading");
						open_overlay(function(){
									if(mobile()){
										close_menu();
									}
							start_slider();
							stop_loading();

						});
						currentBack=back_to_home;
					$("#warp_in_button").css("transform","translateY(30px) translateZ(30px)");
     },
     complete:function(data){
			 if(debugmode==true){
		      console.log("Brain sent");
		      console.log(data.responseText);
				}
     }
  });
}
function warpInChange(count){
	console.log(categories);
	var category=categories[count-1].id;
	$("#warp_in_button").attr("onclick","load_events('"+category+"')");
}
var events=[
	{
		id:"AOR2018",
		name:"Loading",
		tag:"Loading",
		description:"<br>Loading",
		rules:"Rules are rules.",
		registration:"Only on desk",
		schedule:"Coming Soon.",
		contacts:"AJ.",
		img:"img/events/altar.jpg"
	}
];
var global_category='';
var currentBack=none;
function load_events(category){
	ishome=false;
	$("#back_button").fadeIn(function(){
		$("#back_button").click(function(){
			$("back_button").fadeOut();
			load_categories(category,none);
		});
	});
	start_loading();
	if ( $( 'html' ).hasClass( 'fp-enabled' ) ) {
	  $.fn.fullpage.destroy('all');
	}
	$.ajax({
		 url: "php/get_events.php",
		 method: "POST",
		 data: "categoryid="+category,
		 dataType:'json',
		 success:function(downloaded_events){
			 events=downloaded_events;
			 var html="<div class='row' id='events_page'>";
		       html+="<div id='fullpage'>";
		       html+="  <div class='section'>";
		 			var count=0;
		 		events.forEach(function(event){
		 			html+="<div id='event_"+count+"' class='slide event_page'>";
		 			if (count%2==1){
		 				html+="	<div class='event_pane pane_left'>";
		 			}
		 			else{
		 				html+="	<div class='event_pane pane_right'>";
		 			}
		 			html+="		<div class='centeralize_events'>";
		 			html+="			<div class='container'>";
		 			html+="				<div class='event_pane_contents'>";
		 			html+="					<div class='event_heading'>"+event.name+"</div>";
		 			html+="					<div class='event_tag'>"+event.tag+"</div>";
		 			html+="					<div class='event_bar'>";
		 			html+="						<div id='desc_trig_"+count+"' class='event_bar_item' onclick='load_event_pane_content("+count+",1)'>Description</div>";
		 			html+="						<div id='rule_trig_"+count+"' class='event_bar_item' onclick='load_event_pane_content("+count+",2)'>Rules</div>";
		 			html+="						<div id='regi_trig_"+count+"' class='event_bar_item' onclick='load_event_pane_content("+count+",3)'>Registration</div>";
		 			html+="						<div id='sche_trig_"+count+"' class='event_bar_item' onclick='load_event_pane_content("+count+",4)'>Schedule</div>";
		 			html+="						<div id='cont_trig_"+count+"' class='event_bar_item' onclick='load_event_pane_content("+count+",5)'>Contacts</div>";
		 			html+="					</div>";
		 			html+="					<div class='event_content ' id='event"+count+"_content' style='overflow-y:scroll;height:40%;'>";
		 			html+=event.description;
		 			html+="					</div>";
		 			html+="					<div style='text-align:center'><a class='btn modal-trigger register_button' href='#reg_"+count+"'>Register</a></div>";
		 			html+="				</div>";
		 			html+="			</div>";
		 			html+="		</div>";
		 			html+="	</div>";
		 			html+="</div>";
					html+="<div id='reg_"+count+"' class='modal modal-fixed-footer'>";
				  html+="  <div class='modal-content'>";
					html+="					<div id='reg_heading'>Registration</div>";
					html+="					<div id='reg_form'>";
					html+="						<div class='row'>";
					html+="							<div class='input-field col s12'>";
					html+="								<input id='reg_name_"+count+"' type='text' class='validate'>";
					html+="								<label for='reg_name'>Name</label>";
					html+="							</div>";
					html+="						</div>";
					html+="						<div class='row'>";
					html+="							<div class='input-field col s12'>";
					html+="								<input id='reg_college_"+count+"' type='text' class='validate'>";
					html+="								<label for='reg_college'>College</label>";
					html+="							</div>";
					html+="						</div>";
					html+="						<div class='col s12'>";
					html+="							<select id='reg_year_"+count+"'>";
					html+="								<option value='None' disabled selected>Year</option>";
					html+="								<option value='First'>First Year</option>";
					html+="								<option value='Second'>Second Year</option>";
					html+="								<option value='Third'>Third Year</option>";
					html+="								<option value='Fourth'>Fourth Year</option>";
					html+="								<option value='Other'>Other</option>";
					html+="							</select>";
					html+="							<label>Choose your Year</label>";
					html+="						</div>";
					html+="						<div class='row'>";
					html+="							<div class='input-field col s12'>";
					html+="								<input id='reg_phone_"+count+"' type='text' class='validate'>";
					html+="								<label for='reg_phone_"+count+"'>Phone Number</label>";
					html+="							</div>";
					html+="						</div>";
					html+="						<div class='row'>";
					html+="							<div class='input-field col s12'>";
					html+="								<input id='reg_email_"+count+"' type='text' class='validate'>";
					html+="								<label for='reg_email_"+count+"'>Email</label>";
					html+="							</div>";
					html+="						</div>";

					if(event.id=="AOR2018"){
						html+="						<div class='row'>";
						html+="							<div class='input-field col s12'>";
						html+="								<input id='reg_team_"+count+"' type='text' class='validate'>";
						html+="								<label for='reg_team_"+count+"'>Team Name</label>";
						html+="							</div>";
						html+="						</div>";
					}
					if(event.id=="RAM2018"){
							html+="						<div class='row'>";
							html+="							<label>Height</label>";
							html+="							<div class='input-field col s12'>";
							html+="								<input id='reg_height_feet_"+count+"' type='text' class='validate'>";
							html+="								<label for='reg_height_feet_"+count+"'>Feet</label>";
							html+="							</div>";
							html+="							<div class='input-field col s12'>";
							html+="								<input id='reg_height_inches_"+count+"' type='text' class='validate'>";
							html+="								<label for='reg_height_inches_"+count+"'>Inches</label>";
							html+="							</div>";
							html+="						</div>";
							html+="							<label>Or</label>";
							html+="						<div class='row'>";
							html+="							<div class='input-field col s12'>";
							html+="								<input id='reg_height_cm_"+count+"' type='text' class='validate'>";
							html+="								<label for='reg_height_cm_"+count+"'>Centimeters</label>";
							html+="							</div>";
							html+="						</div>";
					}




					html+="					</div>";










				  html+="  </div>";
				  html+="  <div class='modal-footer' style='background-color: rgba(0, 0, 0, 0.7);'>";
					html+="							<span class='btn green center-align' id='register_action' onclick='register(\""+event.id+"\","+count+")'>Register</span>";
					html+="							<a class='modal-close waves-effect waves-red btn-flat center-align white-text'>Close</a>";
				  html+="  </div>";
				  html+="</div>";
					html+="<div class='event_bg' id='event_bg"+count+"' style='background-image:url("+event.img+"); opacity:0.8'></div>"
					count=count+1;
		 		});
				html+="		</div>";
				html+="	</div>";
				html+="</div>";

				html+="<img id='left_arrow' width='25px' height='50px' src='img/left.png' onclick='$.fn.fullpage.moveSlideLeft();'>";
				html+="<img id='right_arrow' width='25px' height='50px' src='img/right.png' onclick='$.fn.fullpage.moveSlideRight();'>";
		 		close_overlay();
		 		$("#main_page").html(html);
				count=0;
				load_event_pane_content(count,1);
				$("#event_bg0").fadeIn();
				events.forEach(function(event){
					console.log("loaded");
					count=count+1;
				});
				$('.modal').modal({
					 dismissible: false,
					 ready:function(modal,trigger){
						 $(".modal-overlay").fadeOut();
		 				$('select').material_select();
					 }
				});
				$("#overlay_page").html("");
		 		$('#fullpage').fullpage({
					scrollingSpeed: 500,
							parallax: true,
							parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
							normalScrollElements : '.event_content,.modal-content',
							lazyLoading: false,
							controlArrows : true,
							onSlideLeave:function(a,zeroes, index, direction,nextIndex){
								//alert(index+" to "+nextIndex);
								load_event_pane_content(nextIndex,1);
								$("#event_bg"+index).fadeOut();
								$("#event_bg"+nextIndex).fadeIn();
							}
				});
				global_category=category;
				currentBack=back_to_categories;
				stop_loading();
		 },
		 complete:function(data){
			 if(debugmode==true){
					console.log("Brain sent");
					console.log(data.responseText);
				}
		 }
	});
}



function load_event_pane_content(eventno,data){
	var event=events[eventno];
	var to_put='';
	$(".event_bar_item").removeClass('highlightTab');
	if(data==1){
		$("#desc_trig_"+eventno).addClass('highlightTab');
		to_put=event.description;
	}
	else if(data==2){
		$("#rule_trig_"+eventno).addClass('highlightTab');
		to_put=event.rules;
	}
	else if(data==3){
		$("#regi_trig_"+eventno).addClass('highlightTab');
		to_put=event.registration;
	}
	else if(data==4){
		$("#sche_trig_"+eventno).addClass('highlightTab');
		to_put="Coming soon";
	}
	else if(data==5){
		$("#cont_trig_"+eventno).addClass('highlightTab');
		to_put=event.contacts;
	}
	$("#event"+eventno+"_content").html(to_put);
}




function register(eventid,no){
	var name=$("#reg_name_"+no).val();
	var college=$("#reg_college_"+no).val();
	var phone=$("#reg_phone_"+no).val();
	var email=$("#reg_email_"+no).val();
	var year=$("#reg_year_"+no).val();
	var detail="none";
	if(eventid=="AOR2018"){
		detail="TEAM NAME : "+$("#reg_team_"+no).val();
		if($("#reg_team_"+no).val()==""){
			alert("Team name missing");
			return;
		}
	}
	if(eventid=="RAM2018"){
		detail="HEIGHT : "+$("#reg_height_feet_"+no).val()+" feet "+$("#reg_height_inches_"+no).val()+" inches / "+$("#reg_height_cm_"+no).val()+"cm";
		if(!($("#reg_height_feet_"+no).val()!=""||$("#reg_height_inches_"+no).val()!=""||$("#reg_height_cm_"+no).val()!="")){
			alert("Height missing");
			return;
		}
	}

	$.ajax({
		 url: "php/register.php",
		 method: "POST",
		 data: "eventid="+eventid+"&name="+name+"&college="+college+"&phone="+phone+"&email="+email+"&year="+year+"&detail="+detail,
		 dataType:'json',
		 success:function(response){
					alert(response.message);
					if(response.status=='success'){
						$("#reg_"+no).modal('close');
					}
		 },
		 complete:function(data){
			 if(debugmode==true){
				console.log("Brain sent");
				console.log(data.responseText);
			}
		 }
	});
}



function back_to_categories(){
	window.location.href='http://www.iimkechoes.com/index.php?url=categories&category='+global_category;
}
function back_to_home(){
window.location.href='http://www.iimkechoes.com/index.php';
}
function load_about(){
	if(ishome==true){
		if(mobile()){
			close_menu();
		}
		goToByScroll('about');
	}
	else{
		load_home_page(function(){
				if(mobile()){
					close_menu();
				}
				goToByScroll('about');
		});
	}
}

function load_sponsors(){
	if(ishome==true){
		if(mobile()){
			close_menu();
		}
		goToByScroll('sponsors');
	}
	else{
		load_home_page(function(){
				if(mobile()){
					close_menu();
				}
				goToByScroll('sponsors');
		});
	}
	currentBack=back_to_home;
}

function load_team(){
	if(ishome==true){
		if(mobile()){
			close_menu();
		}
		goToByScroll('team');
	}
	else{
		load_home_page(function(){
				if(mobile()){
					close_menu();
				}
				goToByScroll('team');
		});
	}
}

function load_contacts(){
	if(ishome==true){
		if(mobile()){
			close_menu();
		}
		goToByScroll('contact');
	}
	else{
		load_home_page(function(){
				if(mobile()){
					close_menu();
				}
				goToByScroll('contact');
		});
	}
}
function load_cp(){
	ishome=false;
	close_overlay(none);
	if(mobile()){
		close_menu();
	}
		$("#back_button").fadeOut();
	start_loading();
		var html="<div class='card-panel' id='cp_main_page'>";
		html+="		<div class='main_text'>";
		html+="				<div class='flex_row' style='display:flex;flex-direction:row;margin-top:50px;justify-content:space-around;'>";
		html+="						<div class='main_page_image animated slideInRight' id='cp_right'>&nbsp;";
		html+="						</div>";
		html+="						<div class='animated slideInLeft' id='cp_left'  class='left-align'>";
		html+="								<div class='main_heading'>Campus Princess</div>"
		html+="								<div>Ever wanted to be a princess? Do you think you are unique and beautiful? Yes, we all have our treasured dreams and all we need are opportunities to realize them. ECHOES 2018 in association with FBB presents Campus Princess - The Road to Miss India. The winner will get an entry into the prestigious Miss India program and win the chance to be groomed by the exclusive Miss India Organisation Grooming School. Grab your chance, be confident and smile! You might just be the next Miss Universe India!</div> <br>";
		html+="								<div class='btn' onclick='open_cp()'>Register</div>";
		html+="						</div>";
		html+="				</div>";
		html+="		</div>";
		html+="</div>";
		stop_loading();
	$("#main_page").html(html);scrollToTop();

	currentBack=back_to_home;
}


function open_cp(){
	window.location.href='https://goo.gl/forms/SJRDZHdNYJASgJzl1';
}
function load_pronites(){
	ishome=false;
	$("#back_button").fadeOut();
	start_loading();
	close_overlay(none);
			if(mobile()){
				close_menu();
			}
		var html="<div class='card-panel' id='pronites_main_page' style='text-align:center'>";
 		html+="		<div class='main_heading' style='margin-top:50px;'>Pronites</div>"
 		html+="		<div class='main_text'>";
 		html+="				<div class='container'>";
 		html+="				  <div class='flex_row' style='display:flex;flex-direction:row;justify-content:space-around;'>";
 		html+="						<div id='pronite_left' class='main_page_image animated fadeInUp' style='margin-bottom:40px'></div>";
		html+="						<div style='width:10%'></div>";
		html+="						<div id='pronite_right'>"
 		html+="							<div id='pronite_right_up' class='main_page_image animated fadeInUp' style='margin-bottom:40px'></div>";
 		html+="							<div id='pronite_right_down' class='main_page_image animated fadeInUp' style='margin-bottom:40px'></div>";
		html+="						</div>"
 		html+="				  </div>";
 		html+="				</div>";
 		html+="		</div>";
 		html+="<br>";
 		html+="</div>";

		$("#main_page").html(html);
		stop_loading();scrollToTop();

		currentBack=back_to_home;
}
function load_schedule(){
	ishome=false;
	$("#back_button").fadeOut();
	start_loading();
	close_overlay(none);
	if(mobile()){
		close_menu();
	}
		var html="<div class='card-panel' id='pronites_main_page' style='text-align:center'>";
 		html+="		<div class='main_heading' style='margin-top:50px;'>Schedule</div>"
 		html+="		<div class='main_text' style='text-align:center'>";
 		html+="				<div id='schedule_image'></div>";
 		html+="		</div>";
 		html+="<br>";
 		html+="</div>";

		$("#main_page").html(html);
		stop_loading();scrollToTop();
		currentBack=back_to_home;
}
function start_loading(){
	$("#loading_overlay").fadeIn();
	$("#loading_section").fadeIn();
}
function stop_loading(){
	$("#loading_overlay").fadeOut();
	$("#loading_section").fadeOut();
}





function scrollByTop(){
	var scroll=$("#main_page").scrollTop();
	if($("#quadrangle").position()==undefined){
		return;
	}
	var start_animation=$("#quadrangle").position().top-window.innerHeight*0.2;
	var end_animation=start_animation+$("#quadrangle").height()+window.innerHeight*0.8;
	if(scroll>start_animation&&scroll<end_animation){
		var percentage=(scroll-start_animation)/(end_animation-start_animation);
		if(!mobile()){
			var top_right_width=36.5944444444444+(26.0416666666667-36.5944444444444)*percentage;
			percentage=1-percentage;
			var top_left_transX=(26.5277777777778)*percentage;
			var top_right_transX=(-5.23333333333333)*percentage;
		}
		else{
			var top_right_width=60.3864734299517+(48.3091787439614-60.3864734299517)*percentage;
			percentage=1-percentage;
			var top_left_transX=(29.2270531400966)*percentage;
			var top_right_transX=(-6.03864734299517)*percentage;
		}
		$("#topright").css({width:top_right_width+"vw"});
		$("#topleft").css("transform","translateX("+top_left_transX+"vw)");
		$("#topright").css("transform","translateX("+top_right_transX+"vw)");
	}
	else if(scroll>end_animation){
		if(!mobile()){
		$("#topright").css("width","26.0416666666667vw");
		}
		else{
		$("#topright").css("width","48.3091787439614vw");
		}
		$("#topleft").css("transform","translateX(0vw)");
		$("#topright").css("transform","translateX(0vw)");
	}


	if((scroll-window.innerWidth*0.3)>start_animation&&(scroll-window.innerWidth*0.3)<end_animation){
		var offset_scroll=(scroll-window.innerWidth*0.3);
		var percentage=(offset_scroll-start_animation)/(end_animation-start_animation);
		if(!mobile()){
			var bottom_left_width=36.5944444444444+(26.0416666666667-36.5944444444444)*percentage;
			percentage=1-percentage;
			var bottom_right_transX=-(26.5277777777778)*percentage;
			var bottom_left_transX=(-5.23333333333333)*percentage;
		}
		else{
			var bottom_left_width=60.3864734299517+(48.3091787439614-60.3864734299517)*percentage;
			percentage=1-percentage;
			var bottom_right_transX=(-29.2270531400966)*percentage;
			var bottom_left_transX=(-6.03864734299517)*percentage;
		}
		$("#bottomleft").css({width:bottom_left_width+"vw"});
		$("#bottomright").css("transform","translateX("+bottom_right_transX+"vw)");
		$("#bottomleft").css("transform","translateX("+bottom_left_transX+"vw)");
	}
	else if((scroll-window.innerWidth*0.4)>end_animation){
		if(!mobile()){
		$("#bottomleft").css("width","26.0416666666667vw");
		}
		else{
		$("#bottomleft").css("width","48.3091787439614vw");
		}
		$("#bottomright").css("transform","translateX(0vw)");
		$("#bottomleft").css("transform","translateX(0vw)");
	}







	if(scroll>tops['about']-window.innerHeight*0.5){
		$("#about").removeClass("animated bounceOutDown");
		$("#about").addClass("animated bounceInUp");
	}



	if(scroll>tops['team']){
		$("#contact_left").removeClass("animated bounceOutLeft");
		$("#contact_left").addClass("animated fadeInDown");
		$("#contact_right").removeClass("animated bounceOutLeft");
		$("#contact_right").addClass("animated fadeInDown");
		$("#iimk").removeClass("animated bounceOutLeft");
		$("#iimk").addClass("animated fadeInUp");
	}
}







function open_categories(){
	console.log("OPENING CAT");
	$("#tiles").css("filter","blur(3px)");
	$("#diamond_holder").fadeIn(function(){
		$("#diamond1").velocity({
			marginLeft:"40.45602605863198vw",
			marginTop:"16.742671009772vw"
		});
		$("#diamond2").velocity({
			marginLeft:"39.528990228013vw",
			marginTop:"38.0817589576547vw"
		});
		$("#diamond3").velocity({
			marginLeft:"50.2247557003257vw",
			marginTop:"28.34332247557vw"
		});
		$("#diamond4").velocity({
			marginLeft:"59.9348534201954vw",
			marginTop:"13.0110749185668vw"
		});
		$("#diamond5").velocity({
			marginLeft:"26.871009771987vw",
			marginTop:"12.9947882736156vw"
		});
		$("#diamond6").velocity({
			marginLeft:"46.514657980456vw",
			marginTop:"3.64820846905537vw"
		});
		$("#diamond7").velocity({
			marginLeft:"17.9153094462541vw",
			marginTop:"3.06188925081433vw"
		});
		$("#diamond8").velocity({
			marginLeft:"17.9153094462541vw",
			marginTop:"30.7491856677524vw"
		});
		$("#diamond_back").velocity({
			marginLeft:"66.1889250814332vw",
			marginTop:"25.6677524429967vw"
		});
	});
}

function close_categories(){
	$("#diamond1").velocity({
		marginLeft:"37.6547231270358vw",
		marginTop:"21.8892508143322vw"
	});
	$("#diamond2").velocity({
		marginLeft:"37.6547231270358vw",
		marginTop:"21.8241042345277vw"
	});
	$("#diamond3").velocity({
		marginLeft:"35.8957654723127vw",
		marginTop:"20.1302931596091vw"
	});
	$("#diamond4").velocity({
		marginLeft:"39.1530944625407vw",
		marginTop:"23.3876221498371vw"
	});
	$("#diamond5").velocity({
		marginLeft:"32.3127035830619vw",
		marginTop:"16.8078175895765vw"
	});
	$("#diamond6").velocity({
		marginLeft:"38.8273615635179vw",
		marginTop:"23.1270358306189vw"
	});
	$("#diamond7").velocity({
		marginLeft:"37.3941368078176vw",
		marginTop:"21.8241042345277vw"
	});
	$("#diamond8").velocity({
		marginLeft:"39.6742671009772vw",
		marginTop:"23.9087947882736vw"
	});
	$("#diamond_back").velocity({
		marginLeft:"38.2410423452769vw",
		marginTop:"22.7361563517915vw"
	});
	$("#diamond_holder").fadeOut(function(){
		$("#tiles").css("filter","blur(0px)");
	});
}

if( window.history && window.history.pushState ){
        history.pushState( "nohb", null, "" );
        $(window).on( "popstate", function(event){
            if( !event.originalEvent.state ){
	currentBack();
	            history.pushState( "nohb", null, "" );
	            return;
            }
        });
}
