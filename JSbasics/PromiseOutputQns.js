function job2(){
    return new Promise((resolve,reject)=>{
        return 'hello';
    })
}

let promiise=job2();
console.log(promiise);
//if we dont settle promise i.e. neither resolved nor reject, .then function will never be executed
promiise.then(()=>{
    console.log('inside')
})

function job(state){
    return new Promise((resolve,reject)=>{
        if(state){
            resolve("success");
        }
        else{
            reject("error occured");
        }
    })
}

let Pr=job(true);

Pr.then((data)=>{
    console.log(data);//sucess
    return job(false);
})
.catch((error)=>{
    console.log(error)//error occured
    return "Error caught";
})
.then((data)=>{
    console.log(data);//Error caught
    return job(true);
})
.catch(error=>console.log(error));


const err=new Error('this is error message'); //new error does not throw error it generates object 
console.log( err.message);


const pr1=new Promise((resolve,reject)=>{
    resolve('first')
});

const pr2=new Promise((resolve,reject)=>{
    resolve(pr1);
})

pr2.then((data)=>{
    console.log(data,'pr1');
    return data;
}).then()


//imp Qn
console.log('start');

const promise1=new Promise((resolve,reject)=>{ //it will run this code syncronously only resolve(2) will go into job queue so that is asynchronous operation here..rest all cosnole.log(1) and 2 will be printed
    console.log(1);
    resolve(2);
    console.log(3);
})
promiise1.then((res)=>{
    console.log(res);
})

console.log(end);

/*ans
start
1
3
end
2
*/

console.log('first');
const fn=()=>{
    new Promise((resolve,reject)=>{ 
        console.log(1);
        resolve('succeeded');
        
    })
}

console.log('middle');

fn().then(res=>console.log(res))

console.log(end);
// first middle 1 end succeeded


const asyncfn=()=>{
    return new Promise((resolve,reject)=>{
        console.log(1);
        resolve('ss');
        console.log(2);
    })
}
//this is asycnfn().then so we are calling this fucntion thats why 1 & 2 will be printed;
asyncfn().then(()=>console.log('then'));
console.log('p end');

//it will print -- 1 2 p end then


const fnn=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            alert("from setTimout");
            resolve('resolved');
            console.log(1111);
        },1000);
    })
}

fnn().then((data)=>{
    console.log("wait for promise to resolve");
    console.log(data);
})

console.log('p end');


//ViMP
const fnn=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            alert("from setTimout");
            resolve('resolved');
            console.log(1111);
        },1000);
    })
}

fnn().then((data)=>{
    console.log("wait for promise to resolve");
    console.log(data);
})

console.log('p end');

// output--
// p end 
// from setTimout
// 1111
// wait for promise to resolve
// resolved

//first fnn() will execute, it is returning promise obj and inside that there is a setimout so it will push callback function into task queue
//after that 'p end' will excute and then call back function will come into call satck after 1 sec, it will execute alert and then rejester promise in job queue i.e. resolve and then prints 1111
//now when promise is resolved it will come into call satck and execute .then handler
