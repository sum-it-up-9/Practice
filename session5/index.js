const abv=new Promise((resolve,reject)=>{
  console.log('2');
  resolve(222);
})
console.log(typeof abv);
//throw new Error('j'); throw will stop execution of program
// const err=new Error('hey err');//this will just return Object od Error class and wont stop execution
// console.log( err);

//polyfill for all;
// Promise.myall=function(arrOfAllPromises){
//     return new Promise((resolve,reject)=>{
//     let result=[];
//     let count=0;
//     for(let promise of arrOfAllPromises){
//         Promise.resolve(promise).then((res)=>{
//             result.push(res);
//             count++;
//             if(count===arrOfAllPromises.length){
//                 resolve(result);
//             }
//         }).catch((error)=>{
//             reject(error);
//         })          
//     }
   
// })};


// //polyfill for Promise.any

// Promise.myany=function(arrOfAllPromises){
//     return new Promise((resolve,reject)=>{
//         let count=0;
//         let errors=[];
//         for(let promise of arrOfAllPromises){
//             Promise.resolve(promise).then(res=>{
//                 resolve(res);
//             }).catch(err=>{
//                 errors.push(err);
//                 count++;
//                 if(count===arrOfAllPromises.length){
//                     const e=new AggregateError(err,'All promises were rejected');
//                     reject(e);
//                 }
//             })
//         }
//     })
// }

// Promise.myrace=function(arrOfAllPromises){
//     return new Promise((resolve,reject)=>{
//         for(let promise of arrOfAllPromises){
//             Promise.resolve(promise).then(res=>resolve(res)).catch(e=>reject(e));
//         }
//     })
// }

// Promise.allSettled=function(arrOfAllPromises){
//     return new Promise((resolve,reject)=>{
//         let result=[];
//         let count=0;
//         for(let promise of arrOfAllPromises){
//             Promise.resolve(promise).then(res=>{
//                 result.push(res);
//                 count++;
//                 if(count===arrOfAllPromises.length){
//                     resolve(result);
//                 }
//             }).catch((e)=>{
//                 result.push(e);
//                 count++;
//                 if(count===arrOfAllPromises.length){
//                     resolve(result);
//                 }
//             })
//         }
//     })
// }

// function like(){
//     return Promise.resolve('like');
// }

// function comment(){
//     return Promise.resolve('comment');
// }
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Promise 1 resolved');
//     }, 2000);
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('Promise 2 resolved');
//     }, 1000);
//   });
  
//   console.log(Promise.allSettled([promise1,promise2]));
 // console.log(Promise.myany([promise1,promise2]));
 // console.log(Promise.any([promise1,promise2]));
//console.log(Promise.myall([like(),comment(),10]));
 //const s=Promise.all([like(),promise2,10])
 //console.log(s);


// let abc=Promise.resolve('2'); //returns promise object 
// console.log(abc);


// //VIMP
// let pr2=new Promise((resolve,reject)=>{
//     reject('rejected');
// })
// const ab=new Promise((resolve,reject)=>{
//     let result=[];
//    let arrOfAllPromises=[pr2];
//     let allSetlled=true;
//     for(let prmoise of arrOfAllPromises){  
//         prmoise.then((res)=>{
//             console.log('resolving')
//             result.push(res);
//         }).catch((error)=>{
//             console.log('rejecting')
//             reject(error);
//             allSetlled=false;
//         })          
//     }
//   console.log('outside loop'); //outside loop will be executed first and then callback in promises.then inside for loop will be executed ..keep in mind
//   if(allSetlled) resolve(result);
// });



// const a=new Promise((resolve,reject)=>{
//     console.log('a');
//     reject('rejecting');
//     console.log('b');
// })
// console.log('midddle');

// a.then(res=>console.log(res,'hey')).catch(()=>{})
//
// function displayName(param2){
//     console.log(`the name is ${this.name} with roll as ${param2}`)
// }

// const obj={
//     name:'jhon'
// }

// // console.log(displayName(obj,12));

// console.log(displayName.call(obj,12));

// displayName.apply(obj,[12]);

// const cb=displayName.bind(obj,12);
// cb();


// let a = 3;
// let b = new Number(3); //creates object
// console.log(typeof b);
// let c = 3;


// console.log(a == b);
// console.log(a === b);
// console.log(b === c); 


// //even if we return obj still same ref

// //delete arr[4] //undefined



// const displayNumber=function(cb,value){
   
//     let lastAns=1;
//     let count=0;
//     let limit=value;
//     return function(num){
//         if(count<limit){
//             lastAns=cb(num);
//             console.log(lastAns);
//             count++;
            
          
//         }
//         else{
//             console.log(lastAns);
//         }
//     }
// }

// // const clos=displayNumber(3);
// // clos(4);
// // clos(53);
// // clos(64);

// // clos(98);
// // clos(22);
// // clos(22);


// const fn=function(num){
//     return ++num;
// }

// const clos=displayNumber(fn,3);
// clos(4);
// clos(53);
// clos(64);

// clos(98);
// clos(22);
// clos(22);

//once get lodash polyfill
//two sum polyfill leetcode - arr
//even loop - promises
//promises polyfill - Promise.all imp



function get(obj,path,defaultvalue){
    path= Array.isArray(path) ? path.join('.') : path ;    //c[0].b.c   -- c 0 b c

    let keys=[];
    for(let key of path){
        if(key!=='.' && key!=='[' && key!==']'){
            keys.push(key);
        }
    }

    let result=obj;
    for(let key of keys){
        if(result && typeof result==='object'  && key in result){
            result=result[key];
        }
        else{
            return defaultvalue;
        }
    } 
   
    return result;
}


// const obj = {
//     a: {
//       b: {
//         c: [1,2,3]
//       }
//     }
//   };
  
//   console.log(get(obj, 'a.b.c')); 
//   console.log(get(obj, 'a.b.c.0')); 
//   console.log(get(obj, 'a.b.c[1]')); 
//   console.log(get(obj, ['a', 'b', 'c', '2']));
//   console.log(get(obj, 'a.b.c[3]'));
//   console.log(get(obj, 'a.c','hey')); 


//   //nlogn
   Array.prototype.twoSum=function(target){
    let arr=this;
    if(arr.length <= 1)return null;

    const nums=arr.map((num,index)=> [num,index]);
    nums.sort((a,b)=> a[0]-b[0]);

    let fIndex=0;
    let lIndex=arr.length-1;

    while(fIndex<lIndex){
        if(nums[fIndex][0] + nums[lIndex][0] < target){
            fIndex++;
        }
        else if(nums[fIndex][0] + nums[lIndex][0] > target){
            lIndex--;
        }
        else{
            return [nums[fIndex][1],nums[lIndex][1]];
        }
    }

    return [];

  } 

  //two pass solution - O(n)
  function twoSum2(arr,target){
    const obj={};

    for(let i=0;i<arr.length;i++){
        obj[arr[i]]=i;
    }

    for(let i=0;i<arr.length;i++){
        if(obj[target-arr[i]] && obj[target-arr[i]]!==i){
            return [obj[target-arr[i]],i];
        }
    }
    return [];
  }


  //once
  function once(cb){
    let called=false;
    let lans=undefined;

    return function(){
        if(!called){
            called=true;
            lans=cb.call(this,...arguments);
            return lans;
        }
        return lans;
    }
  }

  function print(a,b,c,d){
    console.log(this.name);
    return a+b+c+d;
  }


    const fn=once(print);
    // console.log(fn(1,2,3,4));
    // console.log(fn(1,12,3,5));  

  const ans= fn.call({name:'myname'},1,2,3,4);
  console.log(ans);









  // function isEqual(obj1,obj2){
  //   if(typeof obj1!=='object' || typeof obj2!=='object' )  return obj1===obj2;
    
  //   let keys1=Object.keys(obj1);
  //   let keys2=Object.keys(obj2);

  //   if(keys1.length !== keys2.length) return false;

  //   for(let key of keys1){
  //       //if(obj2.hasOwnProperty(key))
  //       if(!key in obj2) return false;
  //       let value2=obj2[key];
  //       let value1=obj1[key];

  //       if(!isEqual(value1,value2)) return false;
  //   }

  //   return true;
  // }

  // const obj1={a:1,b:2,c:{z:5},d:[]};
  // const b={a:1,b:2,c:{z:5},d:[]};


  // console.log(isEqual(obj1,b));


