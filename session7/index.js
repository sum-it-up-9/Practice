let ans=34;

let count=0;
const submitBtn=document.querySelector('#submit');
const lowHigh=document.createElement('div');
const StartGame=document.createElement('button');
const Historyy=document.createElement('div');
submitBtn.after(lowHigh);      
Historyy.innerText='History: ';

StartGame.addEventListener('click',resetGame);

function resetGame(){   
    ans=44;
    count=0;
    Historyy.innerText='';
    Historyy.remove();
    lowHigh.remove();
    StartGame.remove();
   

}

function handlesubmit(e){

    if(count==5){
        //alert('you lost');
        lowHigh.innerText='You Lost';
        StartGame.innerHTML='Start Game';
        submitBtn.after(StartGame);
        return;
    }

    const inputvalue= Number(document.querySelector('input').value);
  
    if(inputvalue==='' || inputvalue<0 || inputvalue>100) return ;

  
    //console.log(typeof  inputvalue);
    if(inputvalue===ans){
       // alert('You won!!');
        StartGame.innerHTML='Start Game';
        submitBtn.after(StartGame);
       
        lowHigh.innerText='You Won'
        return;
    }
   //console.log('in');
    if(count===0){
      
        submitBtn.after(Historyy);
    }
    count++;
    if(inputvalue < ans){
        lowHigh.innerText="Too low!";
        //count++;
        Historyy.innerText+= ` ${inputvalue},`;
    }
    else if(inputvalue >ans){
        lowHigh.innerText="Too High!";
        //count++;
        Historyy.innerText+= ` ${inputvalue},`;
    }
   
        
    
}

submitBtn.addEventListener('click',handlesubmit);