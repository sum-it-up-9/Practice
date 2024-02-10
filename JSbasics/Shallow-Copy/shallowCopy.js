//A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of 
//the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.

//The term "shallow copy" refers to the process of creating a new object or array and populating it with references to the same elements or values as the original object or array. In the context of the slice() method in JavaScript, when it's used on an array, it creates a shallow copy of a portion of that array.

//In a shallow copy:

//Primitive Values: If the array contains primitive values (like numbers or strings), the shallow copy creates new instances of those primitive values. Changing these values in the original array won't affect the values in the copied array, and vice versa.

///References to Objects: If the array contains objects or arrays (non-primitive values), the shallow copy creates new references to those objects or arrays. However, these references point to the same objects or arrays as in the original array. Therefore, while the copied array is new, the objects or arrays it references are the same as those in the original array. Changes made to the properties of these objects or arrays in either the original or copied array will be reflected in both, as they refer to the same underlying objects.

//Consider an example:


const originalArray = [{ name: 'John' }, { name: 'Alice' }, { name: 'Bob' }];
const shallowCopy = originalArray.slice();

shallowCopy[0].name = 'Sarah';

console.log(originalArray); // Output: [{ name: 'Sarah' }, { name: 'Alice' }, { name: 'Bob' }]
console.log(shallowCopy); // Output: [{ name: 'Sarah' }, { name: 'Alice' }, { name: 'Bob' }]
//In this example, slice() creates a shallow copy of originalArray. When the name of the first object in shallowCopy is changed to 'Sarah', it also affects the same object in the originalArray. This demonstrates that although a new array is created, the objects within both arrays are still references to the same underlying objects.

//Therefore, it's important to note that while slice() creates a new array, it doesn’t deeply clone or copy nested objects within the array. If a deep copy is needed (wherein nested objects are also cloned), additional methods or functions would be required to achieve that, as a shallow copy won't suffice.


/* Javascript data types

Primitive Vs Structural

Primitve:
Boolean
String
Number
Symbol
BigInt
undefined


Structural:
 1)Object: (new) Object, Array, Map, Set, WeakMap, Date
 2)Function


value vs Reference

Primitve data types pass by values

let x=2;
let y=x;
y+=1;
console.log(x); x=2
console.loy(y); y=3


Structural data types use references
 
let XArr=[1,2,3,4];
let Yarr=XArr

Yarr[0]=11;
console.log(XArr==Yarr) //true



//Mutable vs immutable (immutable means cannot change value after declaration)

//Primitives are immutable
let name="jhon";
name[0]='K'; not posssible as it is immutable

//Reassignemnet is not same as mutable

name="zareen" //this is Reassignemnet and is possible


//Structures contain mutable data

//pure functions reqire you to avoid mutating the data
impure function mutattes the data ex. map


spread does not create shallow copy
const Zarr=[...XArr];
XArr==Zarr; false


The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.


const newObj=Object.assign([],XArr);
console.log(newObj==Xarr) //false


//But if there are nested arrays or Objects, nested structural data types still share a refernce!

Xarr.push([8,9,10]); [1,2,3,4,[8,9,10]] //nested objects - arr in arr
const Varr=[...Xarr];
console.log(Xarr==Varr)//false
Varr[4].push(11);

console.log(Varr); //same as Xarr
console.log(Xarr); //same as Varr

VIMP- only nested objects i.e. nested structure shares the same refernce
in this case Varr[4] and XArr[4] is arr so only that will be shared

lets say we do 
XArr[4]=1 --this will not change anything in Varr[4] becoz we are reasigning the value 
only the nested arr refernce is shared between to Xarr & Varr so if we do changes in any one od these chnages means updating, deleting not reassigning

Array.from() and slice() creates shallow


Object.freez() makes the object non-writable.  Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.



What is "shallow freeze"?
The result of calling Object.freeze(object) only applies to the immediate properties of object itself and will prevent future property addition, removal or value re-assignment operations only on object. If the value of those properties are objects themselves, those objects are not frozen and may be the target of property addition, removal or value re-assignment operations.

const employee = {
  name: "Mayank",
  designation: "Developer",
  address: {
    street: "Rohini",
    city: "Delhi",
  },
};

Object.freeze(employee);

employee.name = "Dummy"; // fails silently in non-strict mode
employee.address.city = "Noida"; // attributes of child object can be modified

console.log(employee.address.city); // "Noida"


So to avoid these mutations Deep copy is needed which will be completely independent
several libraries like Lodash, Ramda & others have this feature built-in.


One way to create deep copy is this solution -
const newArr= JSON.parse(JSON.stringyfy(XArr));

but this does not work with dates, functions, undefined, Infinity, RegExp, Maps, Sets, FileLists and etc

//lets creates function which creates a deep copy


function deepClone(obj){

    //handle primitive types 
    if(typeof obj !=='object || typeof obj=== null) return obj

    const newObject= Array.isArray(obj) ? [] :{};

    for(let key in Obj){
        newObject[key]=deepClone(Obj[key]);
    }

    return newObject;
}

*/


const arr=[1,2,3,{name:'ram'}];
//console.log(arr,'arr');
const x=[...arr];

x[3]["name"]='sham';
console.log(arr,'arr');
console.log(x,'x');