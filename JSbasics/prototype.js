// Prototypes are the mechanism by which JavaScript objects inherit features from one another. whenever we create any object it gets linked with the Prototype like if its arr then newley created array will satrt pointing towards Array.Prototype using __proto__ property, __proto__ is basically refernce to actual Array.prototype ..we can also cahnge prototype of objects using setPrototypeOf property ...Prototype Chain:



function Person(name){
    this.name=name;
}

Person.prototype.sayHello=function(){
    console.log('hey im '+ this.name);
}


const fname=new Person('Alice'); //new --constructor ..creates new object of Person ---proto of fname is Person

Object.getPrototypeOf(fname);

console.log(fname);
console.log(fname.sayHello());

const obj={
    fname:'hey from obj',
    lname:'bye'
}

const ProtoOfObj={
    fname:'protoname',
    printName:function(){
        console.log(this.fname);
    }
}

Object.setPrototypeOf(obj,ProtoOfObj);
console.log('obj:',obj); 
console.log(obj.printName());  // The prototype chain is a series of linked objects where each object serves as the prototype for the next one in the chain. // When you access a property or method on an object, JavaScript looks for it in the object itself. If it doesn't find it, it looks in the object's prototype, and this process continues up the prototype chain until it reaches the Object.prototype

//Under the hood, classes in JavaScript still involve prototypes, this class syntax is just syntactic sugar over its existing prototype-based inheritance system.
class Dog{
    //constructor fn --creates new object of class Dog i.e. instance of class Dog
    constructor(name,age){
        this.name=name; //this referes to instance of class i.e. newely created object
        this.age=age;
    }

    //this function gets added to prototype of Dog .
    greet(){
        console.log(`hi im ${this.name} & im ${this.age} yrs old ${this.breed}`);
    }
}

const Tommy=new Dog('Austin',5);
console.log(Tommy);
console.log(Tommy.greet());


//extend
class Labra extends Dog{
    constructor(name,age,breed){
        super(name,age);//call its parent and take proerties form parent constructor
        this.breed=breed;
    }

    bark(){
        console.log(this.name + 'is barking');
    }
    greet(){
       // console.log(`${this.breed} dog`)
        super.greet();
    }
}

const b=new Labra('tom',9,'goldlen retriver');
console.log(b.greet());
console.log(b);
