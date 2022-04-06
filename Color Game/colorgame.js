var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisp=document.querySelector("#colorDisp");
var messageDisp=document.querySelector("#message");
var resetButton=document.querySelector("#reset");
var h1=document.querySelector("h1");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
colorDisp.textContent=pickedColor;



easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
	h1.style.backgroundColor="steelblue";
	colorDisp.textContent=pickedColor;
	messageDisp.textContent="";

});
hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
	}
	h1.style.backgroundColor="steelblue";
	colorDisp.textContent=pickedColor;
	messageDisp.textContent="";
});
for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];


	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
			messageDisp.textContent="Correct!";
			resetButton.textContent="Play Again?";
		}
		else{
			this.style.backgroundColor= "#232323";
			messageDisp.textContent="Try Again";
		}
	})
}
function changeColors(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}
function pickColor()
{
	var random=Math.floor(Math.random()*colors.length +1);
	return colors[random];

}
function generateRandomColors(num)
{
	var arr=[];
	for (var i = 0; i < num; i++) {
		arr.push(randomColors());
		}

		return arr;
}
function randomColors()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return  "rgb(" + r + ", " + g + ", " + b + ")";
}
resetButton.addEventListener("click",function(){
	colors=generateRandomColors(6);
	pickedColor=pickColor();
	colorDisp.textContent=pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	messageDisp.textContent="";
	resetButton.textContent="New Colors"


});