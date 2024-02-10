


const promise=Promise.resolve('sucess');
console.log(promise);
console.log(Promise.reject('failure').catch(function(error){
    console.log(error);
}));



const pr=new Promise((resolve,reject)=>{
    reject('rejected');
})


const handleFailure= (e)=>{
    console.log('handleFailure called',e);
}

const handleSuccess=()=>{
    console.log('handleSuccess called');
}

// .then is a handler which attaches two callbacks, The first callback runs if the promise is fulfilled and 2nd runs if the promise fails.
pr.then(handleSuccess,handleFailure);

const data={
    msg:'success'
}
Promise.resolve(data).then(data => console.log(data));
// Successful

//Promise.reject('failed').then( (msg)=> console.log(msg));
// Error: Uncaught (in promise)


//The error in the rejected promise is because you need to define a separate callback to handle a rejected promise.
Promise.reject('rejected').then( ()=> {} /*Empty Callback if Promise is fulfilled*/, (err)=>console.error(err));

Promise.reject('failure').catch(function(error){
    console.log(error);
})


/*
Promise.reject(new Error()).catch((reason) => console.error(reason));
// Er

function orderPizza (name,crust){

    placeorder(url,function(error,result){
        if(!error){
            proceedToPay(cartId,function(error,result){
                if(!error){
                    addGiftCard(id,function(error,result){
                        console.log('order placed ');
                    })
                }
                else{
                    console.log('pizaa not placed');
                }
            })
        }
    });
}


orderPizza(farmhouse,cheeseBurst);


calling promises does not require a nested syntax.
fetchResource(url)
  .then(handleResult, failureCallback)
  .then(handleNewResult, failureCallback)
  .then(handleAnotherResult, failureCallback);

*/


const pr1=new Promise((resolve,reject)=>{
    resolve ('first promise succeeded');
})
.then( (data)=>{
    console.log(data); //first promise succeeded
    return 'second callback succeeded';
})
.then((data)=>{
    console.log(data); //second callback succeeded
})
.catch(err=>console.log(err))
.finally(()=>{
    console.log('finally');
})

console.log(pr1,'pr1');
//The finally method in a JavaScript Promise is used to specify a function that will be executed when the Promise is settled, whether it's fulfilled (resolved) or rejected. The finally block allows you to perform cleanup operations or tasks that need to be executed regardless of the promise's outcome.


/*
Here are the available methods that can help us achieve this:

Promise.all()
Promise.race()
Promise.any()
Promise.allSettled()

*/


const promise1=new Promise( (resolve,reject)=>{
    setTimeout( ()=> resolve('first rejected after 1 sec'),1000);
})


const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('2nd rejected after 4sec');
    },4000);
})

const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('3rd rejected after 2 sec')
    },2000);
})

//returns promise object with result as array where each index is a resolved value of each promise, if any one the promise rejects it returns the first failed promise error
const allAns=Promise.all([promise1,promise2,promise3]);

console.log('allAns',allAns);


Promise.all([promise1,promise2,promise3])
.then((ans)=>{
    console.log(ans);
})
.catch((err)=>{
    console.log(err);
});
// Output on the console

// First Promise's Value
// Second Promise's Value
// Third Promise's Value

//return first setlled promise irrespective of resolved or failed
Promise.race([promise1,promise2,promise3])
.then(ans=>console.log(ans,'from race',))
.catch(err=>console.error(err,'from race'));


//returns first reolved promise -- if all rejects it return aggregate err
Promise.any([promise1,promise2,promise3])
.then(ans=>console.log(ans,'from any'))
.catch(err=>console.log('err from any: ',err));


//It setlles all the promises, unlike promise.all, it completed execution of all the promises even if any 1 gets rejected ...IN result - it returns array of objects and each object has status and value property
Promise.allSettled([promise1,promise2,promise3])
.then(ans=>console.log(ans,'from allSettled')) //arr of obj
.catch(err=>console.error('err from allSettled: ',err));











// /The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

/*
A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.




Promises allow errors to be passed down the chain and handled in one common place without having to put in layers of manual error handling.
1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
2. Inversion of control is overcome by using promise.
  2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
  2.2) A promise has 3 states: pending | fulfilled | rejected.
  2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
  2.4) A promise resolves only once and it is immutable. 
  2.5) Using .then() we can control when we call the cb(callback) function.

3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()



1. Promise can be created using a new Promise() constructor function.
2. This constructor function takes a callback function as argument. 
3. The callback function has 2 arguments named 'resolve' and 'reject'. Resolve and reject are the keywords provided by JS.
4. We can only resolve or reject a promise. Nothing else can be done.
5. An error can also be created using new Error('error message').
6. There is also .catch() which is used to attach a failure callback function that handles any error that pops up during the execution of promise chain.
7. .catch only handles error of .then() that are present above it. If there is any .then() below it, catch will not handle any error for that, also that ,then will get executed no matter what.
8. It can be useful in a way if we want to catch error for a particular portion of a chain.
9. We can have multiple catch based on requirement and then a general catch at the end.
10. Always remember to return a value in the promise chain for the next .then to use .
11. If it returns a value => It will be  used as an argument in next function. If it is a promise then the next .then in the promise chain is attached to the promise returned by the current callback function.



*/


/*

const cart=['item1','item2','item3','item4'];

createOrder = (cart) =>{
    return new Promise( (resolve,reject)=>{
        const data={
            id:123,
            items:cart,
            created:true,
            err:false
        }
        reject(data);
    })
}

createOrder(cart)
.then((data)=>{
    if(data.created){
        return {...data,payment:true}
    }
})
.then(data=>{
    if(data.payment){
        return {...data,OrderSummary:true}
    }
})
.then(data=>{
    console.log(data,'data');
})
.catch(err=>console.log(err,'err'));

*/


//async and await

fetchData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('fetched after 2sec');
        },2000);
    })
}

async function test(){
  console.log('before calling')
  const data=await fetchData();
  console.log(data,'data');
}

test();

const url='https://jsonplaceholder.typicode.com/users';
//if you are returning from async function it will alwasys returns a promise, even if you are returning single value like string or variable it will be wrapped in a promise
//await resolves the promise

const getUser = async ()=>{
    try{
        //fetch returns a promise object which resolves to response object
        const res=await fetch(url);
        console.log(typeof res, ` res`);

        //when we do response.json() it returns a  promise which resolves to json object
        const data=await res.json();
        console.log(data,'fecthdata');
        console.log(typeof data);
    }catch(err){
        console.log(err);
    }
}

getUser();





const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('resolved after 4 sec')
    },4000);
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('resolved after 1 sec')
    },1000);
})

function getdata(){
    //js engine puts it into job queue and moves forward 
    //but in case of async await js engine actually waits i.e. it removes theis async function from call stack and continue to execute other code and when stack becomes empty and promise has been resolved it come sback into call stack
    p.then(res=>console.log(res));
    console.log('who prints first in case of chaining using then');
}

async function getDataUsingasync(){
    //js engine will wait here i.e. it will throw this function  out of call stack
    const data=await p;
    console.log(data);

    const data2=await p2;
    console.log(data2);

}


getdata();

const da= fetch("https://jsonplaceholder.typicode.com/users");
console.log(da);
const pd=Promise.resolve('reoslved');
console.log(pd);
console.log('3rd')


console.log(fn()); //fn will be undefined so it gives err saying fn is not a function
var fn=()=>{
    console.log('dd');
}

//arrow function and normla function diff -
// hositing , this keyword & we cannot access arguments keyword in arrow function


function abc(){
    console.log(arguments); // 1,2,3
}

var xyx = ()=>{
    console.log(arguments); //cant access
}
abc(1,2,3);
// xyx(1,2,3);//throws error arguments not defined
// async/await provides a more readable and synchronous-looking syntax for handling asynchronous code compared to chaining .then() and .catch().

// In summary, promises are a low-level abstraction for handling asynchronous operations, and async/await is a higher-level syntactic sugar built on top of promises to make asynchronous code more readable and easier to work with. You often use async/await when dealing with asynchronous code that returns promises.



function job(){
    return new Promise((resolve,reject)=>{
        ;
    })
}

let promiise=job();


//ans - a b middle rejecting
const ab=new Promise((resolve,reject)=>{
    console.log('a');
    reject('rejecting');
    console.log('b');
})
console.log('midddle');

ab.then(res=>console.log(res,'hey')).catch((e)=>{console.log(e)})



//throw new Error('j'); throw will stop execution of program
// const err=new Error('hey err');//this will just return Object od Error class and wont stop execution
// console.log( err);



//Imp
const a=new Promise((resolve,reject)=>{
    console.log('a');
})

//we are not resolving anything in promise so it wont excute .then handler 
a.then(res=>console.log(res,'hey'))
//


// script async defer

// In case of <script src=""></script> -browser will parse html and when it sees script tag it will stop the html parsing ,fetch the script and execute it imemeditely and then html parsing will continue

//In case of <script async src=""></script> - broswer will parse html and when it sees script async  it will fetch the script parallely along wiht html parsing and as soon as script is aviablable it will stop the html parsing and execute the script

//Incase of <script defer src=""></script> - browser will parse htmll and when it sees the script defer it wil; fetch is parllely and whenever html parsing is finished then only it will execute the script

/*
when to use async and defer?

when one script depends on another i.e. order of execution is important use defer bcoz defer make sure all scripts will execute in order as they appaered in document.

and when order of execution is not imp then use async


Scripts with the defer attribute will be executed in the order they appear in the document.
Use async when the script doesn't depend on the order of execution or on other scripts.
*/



//polyfill for all;
Promise.prototype.myall=function(arrOfAllPromises){
    return new Promise((resolve,reject)=>{
    let result=[];
    let count=0;
    for(let i=0;i<arrOfAllPromises.length;i++){
        Promise.resolve(promise).then((res)=>{
            result[i]=res;
            count++;
            if(count===arrOfAllPromises.length){
                resolve(result);
            }
        }).catch((error)=>{
            reject(error);
        })          
    }
   
})};


function like(){
    return Promise.resolve('like');
}

function comment(){
    return Promise.resolve('comment');
}

console.log(Promise.myall[like,comment,10]);
console.log(Promise.all[like,comment,10])

//runs it
const abv=new Promise((resolve,reject)=>{
    console.log('2');
    resolve(222);
  })
  


