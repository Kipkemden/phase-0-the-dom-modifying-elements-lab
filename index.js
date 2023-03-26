// Remove the main element with id 'main'
const main = document.querySelector('#main');
main.remove();

// Create a new h1 element with id 'victory' and text content
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion';

// Append the new h1 element to the body of the document
document.body.appendChild(newHeader);
