const noOfTimesClicked=document.querySelector('#noOfTimesClicked');
const noOfTimesTriggered=document.querySelector('#noOfTimesTriggered');
const btn=document.querySelector('#btn');

let TimesClicked=0;
let TimesTriggered=0;

function Debouncing(cb,delay,...args){  
    let timer;
    let arg=arguments;

    return function(...args){
        console.log('button clicked');
        noOfTimesClicked.innerHTML= ++TimesClicked;
        if(timer){
            clearTimeout(timer);
        }
        timer=setTimeout(()=>{
            cb(...args,...arg);
           // console.log(...args);
        },delay);
    }
   
}




function handleClick(e,a,b,c){
   // console.log('in');
   // console.log(a,b,c);
    noOfTimesTriggered.innerHTML+= ++TimesTriggered;
}


btn.addEventListener('click',Debouncing(handleClick,1000,12,13,14));