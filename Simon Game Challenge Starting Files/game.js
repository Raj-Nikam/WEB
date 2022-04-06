var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var c=0;
var started=false;

$(".btn").click(function(){
		var userChosenColour=$(this).attr("id");
		// var userChosenColour=this.id;
		userClickedPattern.push(userChosenColour);
		sound(userChosenColour);
		animatePress(userChosenColour);
		checkAnswer(userClickedPattern.length-1);
		// nextSequence();


	});
$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + c);
    nextSequence();
    started = true;
  }
});

function nextSequence()
{
	userClickedPattern = [];
	c++;
	$("h1").text("Level "+c);
	var randomNumber=Math.floor(Math.random()*4);
	var randomChosenColour=buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);
	$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
	sound(randomChosenColour);
	
	
	
}
function animatePress(currentColour){
	$("."+currentColour).addClass("pressed");
	setTimeout(function()
	{
      $("."+currentColour).removeClass("pressed");  
	},100);
}
function sound(name)
{
	var e=new Audio("sounds/"+name+".mp3");
	e.play();
}
function checkAnswer(c1)
{
   if(gamePattern[c1]===userClickedPattern[c1])
   {
       console.log("S");
   
    if(gamePattern.length===userClickedPattern.length)
   {
       setTimeout(function () {
          nextSequence();
        }, 1000);

   }}
   else
   {
   	console.log("W");
   	sound("wrong");
   	$("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

     $("#level-title").text("Game Over, Press Any Key to Restart");
     startOver();
   }

}
function startOver()
{
	c=0;
	started=false;
	gamePattern=[];
}