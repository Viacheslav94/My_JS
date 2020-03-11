let rec = document.querySelector('.adv'),
    body = document.querySelector('body'),
    title = document.querySelector('.title'),
    menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    des = document.querySelector('#prompt');

menuItem[1].textContent = 'Второй пункт';
menuItem[2].textContent = 'Третий пункт';

body.style.backgroundImage = "url(../img/apple_true.jpg)";

title.textContent = 'Мы продаем только подлинную технику Apple';

let li = document.createElement('li');
menu.appendChild(li);
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';

rec.style.display = "none";

des.textContent = (prompt('Как вы относитесь к технике Apple?', ''));