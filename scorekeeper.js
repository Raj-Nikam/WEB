var p1b=document.querySelector("#p1");
var p2b=document.getElementById("p2");
var p1d=document.getElementById("p1D");
var p2d=document.querySelector("#p2D");
var res=document.querySelector("reset");
var input=document.querySelector("input");
var winSS=document.querySelector("p span");
var p1S=0;
var p2S=0;
var winS=5;
var gameOver=false;
p1b.addEventListener("click",function(){
	if(!gameOver)
	{
		p1S++;
		if(p1S===winS)
		{ 
			p1d.classList.add("winner");
			gameOver=true;
		}
	}
	
	p1d.textContent=p1S;
});
p2b.addEventListener("click",function(){
	if(!gameOver)
	{
		p2S++;
		if(p2S===winS)
		{ 
			p2d.classList.add("winner");
			gameOver=true;
		}
	}
	
	p2d.textContent=p2S;
});
reset.addEventListener("click",function(){
	// p1S=0;
	// p2S=0;
	// p1d.textContent=p1S;
	// p2d.textContent=p2S;
	// p2d.classList.remove("winner");
	// p1d.classList.remove("winner");
	// gameOver=false;
	reset1();
});
input.addEventListener("change",function(){
	winSS.textContent=input.value;
	winS=Number(input.value);
	reset1();

});
function reset1(){
	p1S=0;
	p2S=0;
	p1d.textContent=p1S;
	p2d.textContent=p2S;
	p2d.classList.remove("winner");
	p1d.classList.remove("winner");
	gameOver=false;
}