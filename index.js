const button = document.getElementById("buttonMain");
const buton = document.getElementById("buttonNext");
let a = button;
let b = buton;
let score1,
score2 = 0;
const total = document.getElementById("result");
const pl1 = document.getElementById("PlayerFirst");
const pl2 = document.getElementById("PlayerSecond");
button.addEventListener("click", () =>{
    score1 = Math.floor(Math.random() * 100);
    pl1.textContent = score1;
});
buton.addEventListener("click", () =>{
    score2 = Math.floor(Math.random() * 100);
    pl2.textContent = score2;
});
total.addEventListener("click", () =>{
    if(score1 == score2){
        alert("Winner is equal");
    }else if(score1 > score2){
        alert("Winner is a Player1");
    }else if(score1 < score2){
        alert("Winner is a Player2");
    }
});