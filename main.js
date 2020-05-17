alert('SIEMA!!');
console.log('WTF');
console.log('siema');

const name = 'Adriana';
const age = '29';
const secandNane = 'Katarzyna'
const nowAge = '30'

console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam ${age} lat.`)

const heading = document.querySelector('.header__title--js');

console.log(heading.innerHTML);

heading.innerHTML = `Nazywam się ${name} i mam ${age} lat.`;

console.log(heading.innerHTML);

console.log(heading);

const navigation = document.querySelector('.header__link');

console.log(navigation);

function greet (secandNane, nowAge) {
    console.log(
        `Nazywam się ${secandNane} i mam ${nowAge} lat.`);
    }

greet('Katarzyna', '30')

function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}

createContent('.article__subtitle--js', 'Dużo notatek.... i będzie więcej');

function helloWorld() {
    console.log('Witaj świecie!')
}

helloWorld();