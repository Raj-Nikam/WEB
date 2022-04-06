var a=document.querySelectorAll(".drum");
var l=a.length;
for(var i=0;i<l;i++)
{
	a[i].addEventListener("click",function(){
		var s=this.innerHTML;
		makeSound(s);
		makeAnimation(s);
		

	});
}

document.addEventListener("keydown",function(event)
{
    var z=event.key;
    makeSound(z);
    makeAnimation(z);
});

function makeSound(key)
{
   switch(key)
   {
   	case "w":
   	   var e=new Audio("sounds/crash.mp3");
	   e.play();
	   break;
	case "a":
   	   var e=new Audio("sounds/kick-bass.mp3");
	   e.play();
	   break;
	case "s":
   	   var e=new Audio("sounds/snare.mp3");
	   e.play();
	   break;
	case "d":
   	   var e=new Audio("sounds/tom-1.mp3");
	   e.play();
	   break;
	case "j":
   	   var e=new Audio("sounds/tom-2.mp3");
	   e.play();
	   break;
	case "k":
   	   var e=new Audio("sounds/tom-3.mp3");
	   e.play();
	   break;
	 case "l":
   	   var e=new Audio("sounds/tom-4.mp3");
	   e.play();
	   break;
	 default: console.log("No use");
   }
}
function makeAnimation(key)
{
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function()
    {
    	 document.querySelector("."+key).classList.remove("pressed");
    },100);
}

// var e=new Audio("sounds/tom-1.mp3");
// 		e.play();