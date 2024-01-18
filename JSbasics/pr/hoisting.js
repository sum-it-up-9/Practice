
/*
myfn();
console.log(myfn);
var myfn=function (){
    console.log('first');
}

myfn();
console.log(myfn);

function myfn(){
    console.log('second');
}
console.log(myfn);
myfn();


/*
var x=10;
console.log(x);

var x;
console.log(x);
*/

for(var i=0;i<10;i++){
    setTimeout(()=> console.log(i),0); //var is a global, so after the loop finishes var's value will be 10 , and when setTimeout starts executing all setTimeouts functions will refer to same var i which is 10 in global space;
}
 

for(let i=0;i<10;i++){
    setTimeout( ()=> console.log(i),0 ); //let creates a separate i variable for each iteration of the loop, maintaining their individual values in memory. This block-level scoping behavior ensures that the value of i in each closure corresponds to the value it had at the time of the iteration, 
}


function x(){
    var i=1;
    setTimeout(()=>{
        console.log(i)
    },0);
}
x();

/*
function x(){
    var i=1;
    setTimeout(conosle.log(x),0);
}
x();
*/