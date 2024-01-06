
const callBackFunction=()=>{
    console.log('this is callBack fucntion');
}


const higherOrderFunction=(callBack)=>{
    console.log('inside higher order fn');
    callBack();
}

higherOrderFunction(callBackFunction);


const returningFromHigherOrderFunction=()=>{
    console.log('inside higher order..');
    return  function xyz(){
        console.log('returned function');
    };
}

returningFromHigherOrderFunction()();


function sum(a,b){
    console.log(a+b);
}

sum(3,4);