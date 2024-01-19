


function print(name,age){
    console.log(`name is ${name} and age is ${age}`);
}

print('jhon',23);

const add=(n1,n2)=>{
    console.log(n1+n2);
}

add(12,23);






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

const a=()=>{
    console.log('arrow function');
}

sum(3,4);



function outer(x){
    let a=10;
    function inner(){
        console.log(a,x);
    }
    return inner;

}

const ret=outer();


//currying

//Function currying is a technique in functional programming where a function is transformed into a sequence of functions, each taking a single argument. The process of currying involves breaking down a function that takes multiple arguments into a series of functions, each taking one argument, and returning another function that takes the next argument.


//function abc(a,b,c,d)
function currying(a){
    return function(b){
        return function(c){
            return function(d){
                console.log(a+b+c+d);
                return (a+b+c+d);
            }
        }
    }
}


//currying(a)(b)(c)(d);
currying(2)(3)(4)(5);


function gfg(x,y){
    console.log(x+y);
}

const bindWithOneArgument=gfg.bind(null,3);
bindWithOneArgument(4); //prints 3+4 = 7
