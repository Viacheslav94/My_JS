// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//         size: '16px',
//         color: '#fff'
//     }
// };

// console.log(JSON.parse(JSON.stringify(options)));

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass)
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    // status
    // statusText
    // responseText  / response
    // readyState

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value= "Что-то пошло не так!";
        }
    });
});

// localStorage.setItem("number", 1);
// console.log(localStorage.getItem("number"));
// // Удалить значение
// localStorage.removeItem("number");
// // Очистить все хранилище
// localStorage.clear();

window.addEventListener("DOMContentLoaded", function() {
    let checkbox = document.getElementById('rememberMe'),
        change = document.getElementById("change"),
        form = document.getElementsByTagName("form")[0];
    
    if(localStorage.getItem("isChecked") === "true") {
        checkbox.checked = true;
    };

    if(localStorage.getItem("bg") === "changed") {
        form.style.backgroundColor = "#ff4766"
    };

    checkbox.addEventListener("click", function() {
        localStorage.setItem("isChecked", true);
    });

    change.addEventListener('click', function() {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = "#ff4766"
    });

    let persone = {
        name: "Alex",
        age: 25,
        tech: ['mobile', 'notebook']
    }

    let serializedPersone = JSON.stringify(persone);
    localStorage.setItem("Alex", serializedPersone);
    console.log(JSON.parse(localStorage.getItem("Alex")));

})