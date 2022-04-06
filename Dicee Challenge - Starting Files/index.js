
var rno1=Math.floor(Math.random()*6 +1);
var a1="images/dice"+rno1+".png";
document.querySelector(".dice .img1").setAttribute("src",a1);

var rno2=Math.floor(Math.random()*6 +1);
var a2="images/dice"+rno2+".png";
document.querySelector(".dice .img2").setAttribute("src",a2);

if(rno1>rno2){
	document.querySelector("h1").innerHTML="Player 1 Wins!🚩";
}
else if(rno1===rno2){
	document.querySelector("h1").innerHTML="Draw!";
}
else{
document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}

