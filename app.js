let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');


val = list;
val = listItem;


// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[5].nodeType;

// 1 - Element
// 2 - Atribute (deprecated)
// 3 - Text node
// 4 - Comment
// 5 - Document itself
// 6 - Doctye

// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

//Children of children
val = list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

//First Child
val = list.firstChild;
val = list.firstElementChild;

//Last Child
val = list.lastChild;
val = list.lastElementChild;

//Count child elements
val = list.childElementCount;

//Get parent node
val = list.parentNode;
val = list.parentElement;
val = list.parentElement.parentElement;

val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

//Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
val = listItem.nextElementSibling.previousElementSibling;


console.log(val);
