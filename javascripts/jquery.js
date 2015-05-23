var menuByMouse = false; //whether nav menu has been opened my mouse movement to left side of screen
var menuByNav = false; //whether nav menu has been opened my clicking on nav 

$(document).ready(function(){

  $("button.nav").on("click", function(event){
    $("body").toggleClass("open-menu");
    $("button.nav").hide();
    menuByNav = true;
  });

  $("body").on("mousemove",function(event) {
      if (menuByNav !== true && menuByMouse !== true && event.pageX < 20) {
        $("body").toggleClass("open-menu");
        $("button.nav").hide(); 
        menuByMouse = true;     
      } else if (menuByMouse && event.pageX >= 199) { //nav bar closes if mouse leaves the nav bar's dimensions
        $("body").removeClass("open-menu");
        $("button.nav").show("slow");
        menuByMouse = false;
      }
  });

  $(".push").on("click", function(event){

    if($(event.target).is(".push")){
      $("body").removeClass("open-menu");
      if (menuByNav === true) {
        menuByNav = false;
      }
      $("button.nav").show("slow");
    }

  });

  $("li.home").on("click", function(event){
    event.preventDefault;
    $("body").toggleClass("open-menu");
    menuByNav = false;
    $("div.home-page").show("fast");
    $("div.about").hide("slow");
    $("div.projects").hide("slow");
    $("button.nav").show("slow");
  });

  $("li.projects").on("click", function(event){
  	event.preventDefault;
  	$("body").toggleClass("open-menu");
    menuByNav = false;
    $("div.about").hide("slow"); 
  	$("div.home-page").hide("slow");
    $("div.projects").show("fast");
    $("button.nav").show("fast");
  });

  $("a.projects").on("click", function(event){
    event.preventDefault;
    $("div.about").hide("slow");
    $("div.projects").show("fast");
  });

  // $("li.resume").on("click", function(event){
  //   event.preventDefault;
  //   $("body").toggleClass("open-menu");
  //   $("div.about").hide("slow");
  //   $("div.home-page").hide("slow");
  //   $("div.projects").hide("slow");
  //   $("div.resume").show("fast")
  //   $("button.nav").show("fast");
  // });

    $("li.about").on("click", function(event){
    event.preventDefault;
    $("body").toggleClass("open-menu");
    menuByNav = false;
    $("div.about").show("fast");   
    $("div.home-page").hide("slow");
    $("div.projects").hide("slow");
    $("button.nav").show("fast");
  });

  $("button.projects").on("click", function(event){
    event.preventDefault;
    $("div.home-page").hide("slow");
    $("div.projects").show("fast");
  });
  
  var skills = ["RAILS", 
  				"RUBY", 
				"BACKBONE.JS", 
				"TDD",
				"jQUERY",
				"GIT",
				"CSS",
				"HTML",
				"JAVASCRIPT",
				"SQL",
				"OOP"];
	
  setInterval(function(){
    $("h2 span.gray").html(skills[Math.floor(Math.random()*skills.length)]);
  }, 1400);
});