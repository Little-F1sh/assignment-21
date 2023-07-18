const title = document.getElementsByTagName('h3');

console.log(title);

for(const h3 of title) {
    console.log(h3.innerText);
};

const paragraphs = document.getElementsByTagName('p');

console.log(paragraphs);

for(const p of paragraphs) {
    console.log(p.innerText);
};

const secondTitle = document.getElementById('second-Title');

console.log(secondTitle);

console.log(secondTitle.innerText);

const lastTitle = document.getElementById('last-Title');

console.log(lastTitle);

console.log(lastTitle.innerText);