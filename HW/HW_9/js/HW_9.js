window.addEventListener('DOMContentLoaded', function() {

    'use strict';
// ТАБЫ
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        } 
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // ТАймер
    let deadLine = '2020-04-25';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
         seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));
            // hours = Math.floor((t/(1000/60/60) % 24)); 
            // days = Math.floor((t/(1000*60*60*24)));
        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }
    function setClock (id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock () {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadLine);

    //Модельные окна
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        this.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    let body = document.querySelector('body');
    class Options {
        constructor (height = 100, width = 500, bg, fontSize, textAlign) {
        //     this.height = 'height: 100px;';
        //     this.width = 'width: 50px;';
        //     this.bg = 'background: #ccc;';
        //     this.fontSize = 'font-size: 30px;';
        //     this.textAlign = 'text-align: center;';
        // }
        // createDiv () {
        //     let div = document.createElement('div');
        //         div.textContent = (prompt('Введите текс для нового блока', ''));
        //         div.cssText = (this.height, this.width, this.bg, this.fontSize, this.textAlign);
        //     return div;
        // }
            this.height = 'height: ' + height + 'px';
            this.width = 'width: ' + width + 'px';
            this.bg = 'background: ' + bg;
            this.fontSize = 'font-size: ' + fontSize + 'px';
            this.textAlign = 'text-align :' + textAlign;
        }
        createDiv () {
            let div = document.createElement('div');
            body.appendChild(div);
            div.textContent = (prompt('Введите текс для нового блока', ''));
            div.style.cssText = `${this.height}; ${this.width}; ${this.bg}; ${this.fontSize}; ${this.textAlign};`;
            return div;
        }
    }

    const block = new Options(100, 800, '#ccc', 50, 'center');
    console.log(block.createDiv());
});