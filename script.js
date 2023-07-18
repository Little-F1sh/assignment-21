const title = document.getElementsByTagName('h3');

console.log(title);

for(const h3 of title) {
    console.log(h3.innerText);
};

// const paragraphs = document.getElementsByTagName('p');

// console.log(paragraphs);

// for(const p of paragraphs) {
//     console.log(p.innerText);
// };

const secondTitle = document.getElementById('second-Title');

console.log(secondTitle);

console.log(secondTitle.innerText);

const lastTitle = document.getElementById('last-Title');

console.log(lastTitle);

console.log(lastTitle.innerText);

const blogs = document.getElementsByClassName('blog');

console.log(blogs);

for(const blog of blogs) {
    console.log(blog.innerText);
};

const blogs1 = document.getElementsByClassName('blog');


for(const blog of blogs1) {
    blog.style.border =  '1px solid green';
    blog.style.margin = '50px';
    blog.style.padding = '50px';
    blog.style.textAlign = 'center';
};

console.log(document.querySelector('.blog'));

// console.log(document.querySelectorAll('.blog'));

const firstTitle = document.querySelector('h3');

// console.log(firstTitle);

firstTitle.style.backgroundColor = 'blue';

const allP = document.querySelectorAll('p');

// console.log(description);

allP.style.backgroundColor = 'green';
