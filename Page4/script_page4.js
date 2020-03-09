let box = document.querySelector('.box'),
    btn = document.querySelector('button');

let width = box.clientWidth,
    height = box.clientHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

btn.addEventListener('click', function() {
    // box.style.height = box.scrollHeight + 'px';
    box.scrollTop = 0;
});

// Переместит на 200px вниз с любой точки
scrollBy(0, 200);
// Переместит на 200рх вниз от начала страницы
scrollTo(0, 200);