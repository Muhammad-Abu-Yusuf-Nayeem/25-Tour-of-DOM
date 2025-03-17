// where to add
const mainContainer = document.getElementById('main-content');

// what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'my food list';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText= 'biriani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText= 'borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText= 'kacchi';
ul.appendChild(li3);

mainContainer.appendChild(section);
section.appendChild(ul);