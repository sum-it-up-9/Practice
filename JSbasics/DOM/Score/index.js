const p1=document.querySelector('#p1Display');
const p2=document.querySelector('#p2Display');
const score=document.querySelector('#winingScore');
const resetBtn=document.querySelector('#reset');

let p1Score=0;
let p2Score=0;
let winningScore=5;
let gameOver=false;

score.addEventListener('change',function(e){
    console.log(e.target.value);
    winningScore=Number(e.target.value);
    gameOver=false;
})

resetBtn.addEventListener('click',(e)=>{
    p1Score=0;
    p2Score=0;
    winningScore=5;
    p1.innerText=p1Score;
    p2.innerText=p2Score;
    gameOver=false;
})

p1.addEventListener('click',function(e){
    if(gameOver){
        alert('game over');
        return;
    }
    p1Score++;
    p1.innerText=p1Score;
    console.log(p1Score);
    console.log(winningScore,'ww');
    console.log(typeof winningScore);
    console.log(typeof p1Score);
    if(p1Score===winningScore || p2Score===winningScore){
        alert('game over');
        gameOver=true;
        return;
    }
   
})


p2.addEventListener('click',function(e){
    if(gameOver){
        alert('game over');
        return;
    }
    p2Score++;
    p2.innerText=p2Score;
    if(p2Score===winningScore || p1Score===winningScore){
        alert('game over');
        gameOver=true;
        return;
    }
 
   
})


