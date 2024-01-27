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