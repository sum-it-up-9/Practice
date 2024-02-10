const pare2=document.querySelector('#child');
console.log(pare2.previousSibling,'pare2');

console.log(pare2.previousElementSibling);
console.log(pare2.nextElementSibling);

//DOm is an object which contains representations of all the content on a page (html content in form of tree where it converts each tag inot js object)
// plus it provides tons of useful methods and proerties like event listeners and all


//console.dir(document); //console.dir is a method in JavaScript that is used to display an interactive list of the properties of a specified JavaScript object.

//finds first elemnt with given id  and returns
const pardivObj=document.getElementById('par');
console.log( pardivObj,'as');
console.dir(pardivObj);


//It returns HTMLCollection which is like arr but not arr but its iterable
const children=document.getElementsByClassName('child');
console.log(children);

const tag=document.getElementsByTagName('div');
console.log(tag);

//ByTagName
document.querySelector('div');
//ById
document.querySelector('#par');
//ByClassName
document.querySelector('.cr');

//querySelector finds first element and returns it
const child1=document.querySelector('div:nth-child(2)');
console.log(child1);

const atag=document.querySelector('a[title="google"]');
console.log(atag);


//querySelectorAll- same idea but returns collection of all matching  elements
console.log(document.querySelectorAll('div')); //returns nodelist

const alinks=document.querySelectorAll('p a'); //returns nodelist

for(let link of alinks){
    console.log(link.href);
}



// The DOMContentLoaded event is fired after the HTML document has been completely parsed and the DOM (Document Object Model) tree has been constructed, but before external resources like images and stylesheets are fully loaded. The term "render tree" is typically associated with the rendering engine of a browser, and it's closely related to the DOM tree.

// Here's a step-by-step breakdown:

// HTML Parsing and DOM Construction:

// The browser parses the HTML document and constructs the DOM tree, which represents the structure of the document.
// During this process, the browser encounters HTML tags and builds the corresponding nodes in the DOM tree.
// DOMContentLoaded Event:

// The DOMContentLoaded event is fired once the entire HTML document has been parsed, and the DOM tree is fully constructed.
// At this point, the DOM is ready for manipulation with JavaScript, and the event signals that it's safe to execute scripts that interact with the DOM.
// External Resources Loading:

// While the DOM is ready, external resources like images, stylesheets, and scripts referenced in the HTML document may still be loading.
// The DOMContentLoaded event doesn't wait for these external resources to finish loading; it fires as soon as the initial HTML parsing and DOM construction are complete.
// Load Event:

// The load event, on the other hand, is fired later in the page-loading process when all external resources, including images and stylesheets, have been fully loaded.
// In summary, the DOMContentLoaded event is called after the render tree (DOM tree) has been constructed, but it doesn't wait for external resources to finish loading. It provides a signal to JavaScript that the initial document structure is ready for manipulation. If your JavaScript code doesn't depend on external resources, using the DOMContentLoaded event is often preferred for faster execution.

// beforeunload:

// This event is fired just before the user navigates away from the page (closes the tab or browser, clicks a link, etc.).
// It can be used to show a confirmation message to the user or perform cleanup operations.

// The unload event is triggered when the page is being unloaded, either because the user is navigating away or closing the browser.
// It's generally not recommended to rely on this event for critical functionality because not all browsers handle it consistently


document.addEventListener('DOMContentLoaded', function() {
    // DOM manipulation or other actions
});


window.addEventListener('load', function() {
    // Code to run after the entire page has loaded
});

window.addEventListener('beforeunload', function(event) {
    // Code to run before the page is unloaded
    // (e.g., show a confirmation message)
    event.returnValue = 'Are you sure you want to leave?';
});


window.addEventListener('unload', function() {
    // Code to run before the page is completely unloaded
});


// Using innerText
// var element = document.getElementById("example");
// var visibleText = element.innerText;  // Gets the visible text (if display:none it ignores that text)
// element.innerText = "New Text";      // Sets the visible text

// // Using textContent
// var allText = element.textContent;    // Gets all text, including hidden text
// element.textContent = "New Text";    // Sets all text

document.querySelector('.links').innerText+='<b>heeyeyeyeyy'

document.querySelector('h1').innerHTML+=' <i>hello from h1</i>';

const input=document.querySelector('input[type=text]');
console.log(input);

//change the attirbutes like this (this are js objects so we can use properties like this)
// input.type='email';
// console.log(input);

//another way to do this using getAttribute and setAttribute methods

const inputUsing=input.getAttribute('type');
console.log(inputUsing)//text

input.setAttribute('type','email');
console.log(input.type)//email


const img=document.createElement('img');//creatre js obj
img.src="https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";


//append a node as the last child of a specified parent node.
const cr=document.querySelector('.cr');
cr.appendChild(img);
//cr.appendChild('hey'); we cannot pass string objects to appendCHild only node objects
// img.setAttribute('width','100%');//
img.style.width='100%';

console.log(img);


//how to style
const banner=document.querySelector('#banner');
banner.style.width='100%';

//add class
cr.classList.add('class1', 'class2', 'class3')
cr.classList.remove('class3');
cr.classList.toggle('class2');//false so removes
cr.classList.toggle('class2');//true so add
console.log(cr.classList.contains('class3'))//false

//element.append() allows to insert string objects as well as node objects & it can take multiple objects at once

const par=document.querySelector('#parent');

par.append('hello appending a string');
const h2=document.createElement('h2');
h2.innerText='inner from h2';
par.append('some text',h2);
par.append(h2);
console.log(par);

//append add it as a last child
//prepend adds it as first child
const prependElement=document.createElement('h1');
prependElement.innerText='this is prepend';
par.prepend(prependElement);

//Element.insertAdjacentElement()
const silkie=document.querySelector('#silkie');
const newInsert=document.createElement('h3');
newInsert.append('inserting some text');


// position
// A string representing the position relative to the targetElement; must match (case-insensitively) one of the following strings:

// 'beforebegin': Before the targetElement itself.
// 'afterbegin': Just inside the targetElement, before its first child.
// 'beforeend': Just inside the targetElement, after its last child.
// 'afterend': After the targetElement itself.
silkie.insertAdjacentElement('afterbegin',newInsert);
silkie.insertAdjacentElement('beforebegin',newInsert);

const newText=document.createElement('h3');
newText.append('appending some random text');
silkie.after(newText);
silkie.before(newText);



// // Select the parent node
// var parent = document.getElementById("myList");

// // Create a new list item
// var newItem = document.createElement("li");
// newItem.textContent = "Item 3";

// // Get a reference to an existing list item
// var referenceNode = parent.firstChild; // This will get the first <li> element

// Insert the new list item before the reference node
parent.insertBefore(newItem, referenceNode);
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");
// const throwawayNode = parent.removeChild(child);


//events - repsonds to user input/actions like click, hover, keypress
const btn=document.querySelector('#btn');
btn.onclick = function(){
    console.log('btn got clicked');
}

btn.onmouseenter=function(){
    console.log('mouse entered')
}

btn.onmouseleave=function(){
    console.log('mouse left')
}

//this will just execute alert when the page gets loaded but it wont attach function to onlick
//document.querySelector('#btn2').onclick=alert('clicked');

const btn3=document.querySelector('#btn3');
btn3.addEventListener('click',function(){
    console.log('btn 3 is clicked')
});

btn3.addEventListener('mouseup',()=>{
    console.log(' Occurs when the mouse button is released over an element.')
})

// Define the event handler function
var mouseDownHandler = () => {
    console.log('Occurs when the mouse button is pressed over an element.');
};

// Add the event listener
btn3.addEventListener('mousedown', mouseDownHandler);


function call(){
    console.log('cc');
}

function shout(){
    console.log('sht');
}

const btn4=document.querySelector('#btn4');
btn4.onclick=call; 
btn4.onclick=shout;//since onlclick is an property it will overwrite the funciton attached to it, so only one function will be attached to it, we cant apply more thatn one fucntion byt with addEventListener we can attach more than 1 function


const btn5=document.querySelector('#btn5');
btn5.addEventListener('click',call,{once:true});
btn5.addEventListener('click',shout);


btn3.removeEventListener('mousedown',mouseDownHandler);

//document.body.style.backgroundColor='blue'
//document.body -short

const inpt=document.querySelector('#input');
inpt.addEventListener('keydown',function(e){
    console.log(e.code,'code'); //it is code based on location of keys on keyboard it will same in all ketboards as based on language keys might be different on differnt laptops
    console.log(e.key,'key') 
    console.log(e);//
});

// inpt.addEventListener('keyup',function(){
//     console.log('keyup')
// });




// In JavaScript, when an event occurs (e.g., a click, keypress, or mouse movement), an Event object is automatically created and passed as an argument to the event handler function. This object provides information about the event and allows you to interact with it. The event object contains various properties and methods that you can use to get details about the event, such as the type of the event, the target element, mouse coordinates, key codes, etc.

// Here's a brief overview of some common properties of the Event object:

// type: A string indicating the type of the event (e.g., "click", "keydown").

// target: The DOM element that triggered the event.

// currentTarget: The DOM element to which the event handler is attached.

// keyCode or key: For keyboard events, these properties provide information about the pressed key.

// clientX and clientY: For mouse events, these properties give the coordinates of the mouse pointer in the browser window.

// preventDefault(): A method that, when called, prevents the default action associated with the event from taking place (e.g., preventing a form from being submitted).

// Here's an example of using the event object in a click event:
// event.currentTarget tells us on which element the event was attached or the element whose eventListener triggered the event.

// event.target tells where the event started.



//deafault behaviour of form is , When a user submits a form by clicking a submit button (or pressing Enter in a text field), the form will navigate to the url provided in action attribute and if no url mentioned then it will refrresh the page
//thats why we use e.preventDefault() to stop this refresh/navigation
const ul=document.querySelector('#formlist');
const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.dir(form);
    // console.log(e);
    let fname=form.elements.fname.value;
    let lname=form.elements.lname.value;
    const li=document.createElement('li');
    li.innerText=fname+lname;
    ul.append(li);
    form.elements.fname.value='';
    form.elements.lname.value='';
})

// The onchange event is a JavaScript event that is triggered when the value of an input element, such as <input>, <select>, <textarea>, or other form elements, is changed by the user. It is a part of the DOM (Document Object Model) and allows developers to execute custom JavaScript code or functions in response to user interactions.

// Here are key aspects and details about the onchange event:

// Triggering Conditions:

// For <input> elements, the onchange event typically occurs when the user modifies the content of the input field and moves the focus out of it (e.g., by pressing the Tab key or clicking outside the input).
// For <select> elements, the event is triggered when the user selects a different option from the dropdown list.
// For <textarea> elements, it is triggered when the user modifies the content and moves the focus out of the textarea.
const inputCheckOnchnage=document.querySelector('#onchnageCheck');
inputCheckOnchnage.addEventListener('change',function(e){
    console.log('changed');
    console.log(e.target.value);
})

// input:

// The input event is triggered as soon as the value of an <input>, <select>, or <textarea> element changes, unlike onchange, which typically triggers when the element loses focus.


const  inputEvent=document.querySelector('#inputEvent');
inputEvent.addEventListener('input',function(e){
    console.log('input event occured');
    console.log(e.target.value);
})

const eventDelegation=document.querySelector('#eventDelegation');
const form2=document.querySelector('#form2');
form2.addEventListener('submit',function(e){
    e.preventDefault();
    const value1=form2.elements.fname.value;
    const value2=form2.elements.lname.value;
    let li=document.createElement('li');
    li.innerText=value1+value2;
    eventDelegation.append(li);
})

// Event delegation is a programming technique in JavaScript where you attach a single event listener to a common ancestor of multiple elements, instead of attaching individual event listeners to each specific element. 
const UleventDelegation=document.querySelector('#eventDelegation');
UleventDelegation.addEventListener('click',function(e){
    //console.log(e.target.nodeName); LI
    if(e.target.nodeName==='LI'){
        e.target.remove();
    }
});


const eventBubblingBtn=document.querySelector('#eventBubbling');
eventBubblingBtn.addEventListener('click',function(e){
    alert('eventBubbling btn clicked');
    e.stopPropagation();
})

function toggleClass() {
    // Your function logic goes here
   
    document.querySelector('#abc').classList.toggle('hide');
    console.log("Toggle class function executed.");
}


// stopImmediatePropagation() method:
// In DOM, we can have multiple handlers for the same event and they are
// independent of each other. So stopping the execution of one event handler
// generally doesn’t affect the other handlers of the same target.
// So when you want to stop further propagations as well as to stop any other
// event handler of the same event from executing, then you can use
// 'stopImmediatePropagation()' method.
// You can stop propagation using the following statementevent.
// stopImmediatePropagation();


//  // Get the button element
//  var button = document.getElementById('myButton');

//  // Add two event listeners for the click event
//  button.addEventListener('click', function(event) {
//      console.log('First event handler');
//      // Stop propagation immediately
//      event.stopImmediatePropagation();
//  });

//  button.addEventListener('click', function(event) {
//      console.log('Second event handler');
//  });

//  button.addEventListener('click', function(event) {
//      console.log('Third event handler');
//  });