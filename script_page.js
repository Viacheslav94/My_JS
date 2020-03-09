let box = document.getElementById("box"),
    btn = document.getElementsByTagName("button"),
    circle = document.getElementsByClassName("circle"),
    heart = document.querySelectorAll(".heart"),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');


box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// этот метод лучше чем первый
// heart.forEach(function(item, i, hearts) {
//     item.style.backgroundColor = 'blue';
// });

// добавить блок на страницу
let div = document.createElement('div');
    text  = document.createTextNode('Тут был я ');

div.classList.add('black');

// добавить блок в конец страницы
// document.body.appendChild(div);
// добавить блок в другой блок
// wrapper.appendChild(div);

// добавить код в блок
// div.innerHTML = '<h1>Hellow world!</h1>';
div.textContent = 'Hellow world!';

// добавить блок перед другим блоком
document.body.insertBefore(div, circle[0]);
// удалить блок
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);

// заменить блок
document.body.replaceChild(btn[1], circle[1]);

console.log(div);