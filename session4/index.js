

// console.log(typeof foo);
// function foo() {
//     return "sam";
// }

// var foo ;
// console.log(typeof foo); 


// function HOF(add,sub){
//     console.log(add*sub);
// } 

// function add(a,b){
//     return (a+b);
// }

// function sub(a,b){
//     return (a-b);
// }

// HOF(add(3,4),sub(3,4));


// let arr=[5,1,3,12,2,78,4,7,87];   // 5 1

// function sortCust(arr){
//    let greaterThan5=[];
//    let lessThan5=[];
//     for(let i=0;i<arr.length-1;i++){
//         let maxiIndex=i;
       
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[maxiIndex] < arr[j]){
//                 maxiIndex=j;
//             }
//         }
//         let temp=arr[i];
//         arr[i]=arr[maxiIndex];
//         arr[maxiIndex]=temp;
//     }

//    for(let i=0;i<arr.length;i++){
//         if(arr[i]>=5){
//             greaterThan5.push(arr[i]);
//         }
//         else{
//             lessThan5.push(arr[i]);
//         }
//    }
  
//     console.log(greaterThan5,'greater');
//     console.log(lessThan5,'less');
   
// }

// sortCust(arr);
// console.log(arr);


//objects, this, call, bind, apply , closures

function merge(left,right){
    let res=[];
    let leftIndex=0;
    let rightIndex=0;
    while(leftIndex<left.length &&  rightIndex<right.length){
        if(left[leftIndex] < right[rightIndex]){
            res.push(left[leftIndex]);
            leftIndex++;
        }
        else{
            res.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return res.concat(left.slice(leftIndex),right.slice(rightIndex));
}


function mergeSort(arr){

    if(arr.length <=1) return arr;

    let middle=Math.floor(arr.length/2);
    let sortedLeft=mergeSort(arr.slice(0,middle));
    let sortedRight=mergeSort(arr.slice(middle));

    return merge(sortedLeft,sortedRight);
}

const arr=[5, 2, 9, 1, 5, 6];
console.log(mergeSort(arr));










function foo(){
    return {
        bar:'heu'
    };
}

//VIMP
function foo2(){
    return  //see carefully we have not added semicolon here so js will add semicolon for us and wont return anything
    {
        bar:'hello';
    };
}

console.log(foo());
console.log(foo2());


var x=12;
var girl=function(){
    console.log(x);
    var x=10; //undefined
}
girl();


//VIMP
var b=1;
function outer(){
    var b=2;
    function inner(){
        b++; //here b is undefined so when we do undefined++ it will give us NaN but it wont throw any error so code will keep on executing 
        var b=3;
        console.log(b); // it will print 3
    }
    inner();
}
outer();