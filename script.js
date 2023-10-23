var hitrn = 0;
var score = 0;
var timer = 40;

function makebubble(){
    var clutter = "";

for(var i=1; i<=84; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div id="bubble">${rn}</div>`;
}

document.querySelector(".bottom-panel").innerHTML = clutter;

}

function settimer(){

    let timeint = setInterval(() => {
        if(timer>0){
        timer--;
        document.querySelector("#timex").textContent = timer;
        }
        else{
            clearInterval(timeint);
            document.querySelector(".bottom-panel").innerHTML = "";
            document.querySelector(".bottom-panel").innerHTML = "<h1>Game Over</h1>";
        }
    }, 1000);
}

function gethit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#getnew").textContent = hitrn;

}

function increasenum(){
    score += 10;
    var inc = document.querySelector("#scoreid").textContent = score;
}

document.querySelector(".bottom-panel")
.addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum == hitrn){
        increasenum();
        gethit();
        makebubble();
    }
})

makebubble();

settimer();

gethit();
