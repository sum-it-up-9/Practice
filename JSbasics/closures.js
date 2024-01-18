
//module pattern - it mimics the class behavoir in c++/java where we can create  public and private methods/variables & for outer world will have acess to only public functions .

//IIFE
const modulePattern= (function(){
    
    let marks=[98,23,45,67,89];
    //private function
    function Total(){
        return marks.reduce((acc,mark)=>acc+mark);
    }


    function HighestMark(){
        return marks.reduce((acc,mark)=> Math.max(acc,mark));
    }

    return {
        //public function
        CalculateAvg: ()=>{
            return (Total()/marks.length);
        },
        HighestMark:HighestMark
    }
})();


modulePattern.HighestMark();
modulePattern.CalculateAvg();



//since var is function scope it will only create on evairbale and update it in every iteration so output will be 3 times 3
for(var i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i); // 3 3 3
    },i*1000);
}


//since let is block scope it will create separate block scoped variable for every iteration
for(let i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i);// 0 1 2
    },i*1000);
}


//to ptint the same beahviour with var i.e. 0 1 2 we can make use of closures

for(var i=0;i<3;i++){

    function varClosure(i){
        setTimeout(()=>{
            console.log(i); 
        },i*1000)
    }
    
    varClosure(i);
}


//make counter using closures..i.e from outer world we should only have access to increment and decrement methods;

var counter;



//make this function run only once

let view="sachin";

function likeview(){
    console.log(view);
}

likeview();

//ans
function likeviewOnlyOnce(){
    let count=0;


    return ()=>{
        if(count){
            console.log('alredy subscribed');
            return;
        }
    
        console.log('liking first time');
        count++;
    }
   
}

var ans=likeviewOnlyOnce();
ans();
ans();



//polyfill for map

//arr.map((x,idx,this)=>{})
Array.prototype.myMap=function(cb){
    let ans=[];
    for(let i=0;i<this.length;i++){
        ans.push(cb(this[i],i,this));
    }
    return ans;
}

let scores=[1,2,3,4,5];

console.log(scores.myMap(x=>x*2));

//arr.filter( (x,idx,this)=>{ })
Array.prototype.myFilter=function(cb){
    let ans=[];
    for(let i=0;i<this.length;i++){
        ans.push(cb(this[i],i,this));
    }
    return ans;
}

console.log(scores.filter(x=>x>2));

//arr.reduce((acc,x,idx,this)=>{},intialValue)

Array.prototype.myReduce=function(cb,initialValue){
    let accumulator=initialValue;
    for(let i=0;i<this.length;i++){
        if(i===0){
            accumulator=accumulator? accumulator :this[0];
            continue;
        }
        accumulator= cb(accumulator,this[i],i,this);

        /*
        accumulator= accumulator ? cb(accumulator,this[i],i,this) : this[0];
        */
    }   

    return accumulator;
}

console.log(scores.myReduce((acc,x)=>x+acc));
console.log(scores.reduce((acc,x)=>x+acc));