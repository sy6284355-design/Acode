let player = document.getElementById("player");
let coin = document.getElementById("coin");
let score = 0;

let x = 10;
let y = 10;

document.addEventListener("keydown", function(e){

  if(e.key=="ArrowRight") x+=10;
  if(e.key=="ArrowLeft") x-=10;
  if(e.key=="ArrowUp") y-=10;
  if(e.key=="ArrowDown") y+=10;

  x=Math.max(0,Math.min(370,x));
  y=Math.max(0,Math.min(370,y));

  player.style.left=x+"px";
  player.style.top=y+"px";

  let coinX=coin.offsetLeft;
  let coinY=coin.offsetTop;

  if(Math.abs(x-coinX)<20 && Math.abs(y-coinY)<20){
    score++;
    document.getElementById("score").innerText=score;

    coin.style.left=Math.floor(Math.random()*380)+"px";
    coin.style.top=Math.floor(Math.random()*380)+"px";
  }
});
