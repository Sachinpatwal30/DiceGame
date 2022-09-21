var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;

var address1="images/dice"+randomNumber1+".png";
var address2="images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",address1);
document.querySelector(".img2").setAttribute("src",address2);


if(randomNumber1===randomNumber2)
   document.querySelector(".container h1").textContent="DRAW";
else if (randomNumber1>randomNumber2)
   document.querySelector(".container h1").textContent="Player 1 Wins";
else
   document.querySelector(".container h1").textContent="Player 2 Wins";  

