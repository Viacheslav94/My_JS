// let num = 20;

// function showFirstMessage(text) {
//    alert(text);
//    let num = 10;
//    console.log(num);
// }

// showFirstMessage("Hellow World!");
// console.log(num);

// let calc = function(a,b) {
//    return (a + b);
// }

let calc = (a,b) => a+b

console.log(calc(3,4));

console.log(calc(8,4));

function retVar () {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";

//console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));

//Объекты
let optoins = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(optoins.name);
// добавить элемент
optoins.bool = false;
optoins.colors = {
    border: "black",
    bg: "red"
};

delete optoins.bool;

console.log(optoins);

for (let key in optoins) {
    console.log("Свойство " + key + " имеет значение " + optoins[key]);
}
console.log(Object.keys(optoins).length);

// Масивы и псевдо массивы
let arr = ["first", 2, 3, "four", 5];

// arr.pop(); //Удаляет последний елемент
// arr.push("5"); //Добавляет последний элемент
// arr.shift(); // Удаляет первый элемент
// arr.unshift("1"); // Добавляет последний элемент 
// arr[99] = 99; // добавить елемент 99

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

arr.forEach(function(item, i, mass) {
    console.log(i + ": " + item + " (массив: " + mass + ")");
});

console.log(arr);

let mass = [1, 3, 4, 6, 7];

for (let key of mass) {   // порядковый номер for (let key in mass) {
    console.log(key);
}

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(",");
// console.log(arr);


// let arr = ["rdsr", "dnbdnb", "avg", "brf"],
//     i = arr.join(", ");

// console.log(i);


//сортировать по алфавиту
// let arr = ["rdsr", "dnbdnb", "avg", "brf"],
//     i = arr.join(", ");

// console.log(i);


// let arr = [1,15,4],
//     i = arr.sort(compareNum);

// function compareNum(a,b) {
//     return a-b;
// }

// console.log(arr);

// объектно орентированное програмирование
let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);