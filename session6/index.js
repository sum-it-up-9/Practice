// Array.prototype.twoSum=function(target){
//     let arr=this;
//     if(arr.length <= 1)return null;

//     const nums=arr.map((num,index)=> [num,index]);
//     nums.sort((a,b)=> a[0]-b[0]);

//     let fIndex=0;
//     let lIndex=arr.length-1;

//     while(fIndex<lIndex){
//         if(nums[fIndex][0] + nums[lIndex][0] < target){
//             fIndex++;
//         }
//         else if(nums[fIndex][0] + nums[lIndex][0] > target){
//             lIndex--;
//         }
//         else{
//             return [nums[fIndex][1],nums[lIndex][1]];
//         }
//     }

//     return [];

//   } 


// let arr=[6,13,4,12];
// console.log(arr.twoSum(-10));

// console.log('1');

// // const a=new Promise((resolve,reject)=>{
// //    resolve(2);
// // })

// setTimeout(()=>{
//     console.log('2'); 
// })

// Promise.resolve().then((res)=>{
//     setTimeout(()=>{
//       console.log('3'); 
//     },0);
// })

// console.log('4');


// async function name(){
//     console.log('start');
//     const p=await new Promise((resolve,reject)=>{
//         resolve(2);
//     });
//     console.log(p);
//     console.log('end');
// }

// name(); 


function printname(){
    return 'sam';
}

const doSomething = (time) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (time > 2000) res(`done ${time}`);
            else rej("error");
        }, [time]);
    })
} 



Promise.all([printname(),doSomething(3000)]).then(res=>console.log(res)).catch(err=>console.log(err));


//timer counter - use differnt differnt elements and methods

