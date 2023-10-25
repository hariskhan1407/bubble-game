

console.log("bubble game!");
var hV = 0;
var timer = 15;
var score = 0;
var no = 0;
 function makeBubble(){
    var clutter = "";
for(var i = 0; i<=151; i++){
    var n = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${n}</div>`;
}
document.querySelector("#pbottom").innerHTML = clutter;
 }
 function runTimer(){
     var timerinterval = setInterval(function (){
         if(timer>0){
             timer--;
             document.querySelector("#timer").textContent=timer;
            }
            else{
                clearInterval(timerinterval);
                document.querySelector("#pbottom").innerHTML=`<h1>Tumse na ho pae ga!</h1>`;
            }
    },1000)
 }
 function hitVal(){
     hV = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hV;
 }
 function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent=score;
 }
 document.querySelector("#pbottom")
 .addEventListener('click',function(det){
    no=Number(det.target.textContent);
    if(no==hV){
      increaseScore();
      makeBubble();
      hitVal();
    }
 })
 makeBubble();
 runTimer();
 hitVal();
 
 
