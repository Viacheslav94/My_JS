let startBtn = document.querySelector('#start'),
    budget = document.querySelector('.budget-value'),
    dayDudget = document.querySelector('.daybudget-value'),
    level = document.querySelector('.level-value'),
    expensesV = document.querySelector('.expenses-value'),
    optionalExpensesV = document.querySelector('.optionalexpenses-value'),
    income = document.querySelector('.income-value'),
    monthSavings = document.querySelector('.monthsavings-value'),
    yearSavings = document.querySelector('.yearsavings-value'),
    expensesItem = document.querySelectorAll('.expenses-item'),
    button = document.querySelectorAll('button'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    choose = document.querySelector('.choose-income'),
    check = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

let money, time;

startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.tineData = time;
    budget.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
});

button[0].addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    }
    expensesV.textContent = sum;
});

button[1].addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesV.textContent += appData.optionalExpenses[i] + ' ';
    }
});

button[2].addEventListener('click', function() {
    if(appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - expensesV.textContent) / 30).toFixed();
        dayDudget.textContent = appData.moneyPerDay;
    
        if(appData.moneyPerDay < 100) {
            level.textContent = "Минимальный уровень дохода";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            level.textContent = "Достаточный уровень заработка";
        } else if (appData.moneyPerDay > 2000) {
            level.textContent = "Большой уровень заработка";
        } else {
            level.textContent = "Произошла ошибка";
        }
    } else {
        dayDudget.textContent = "Произошла ошибка";
    }
});

choose.addEventListener('input', function () {
    let items = choose.value;
    appData.income = items.split(', ');
    income.textContent = appData.income;
});

check.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
        percent = +choosePercent.value;

    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthSavings.textContent = appData.monthIncome.toFixed(1);
    yearSavings.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    tineData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

// budget.textContent = money = +prompt('Ваш бюджет на месяц?', '');
// dayDudget.textContent = money / 30;
// level.textContent function() {
//     if(dayDudget < 100) {
//         console.log("Минимальный уровень дохода");
//     } else if (dayDudget > 100 && dayDudget < 2000) {
//         console.log("Достаточный уровень заработка");
//     } else if (dayDudget > 2000) {
//         console.log("Большой уровень заработка");
//     } else {
//         console.log("Произошла ошибка");
//     }
// };

// year.placeholder = prompt('Какой сегодня год?', '');
// month.placeholder = prompt('Какой сегодня месяц?', '');
// day.placeholder = prompt('Какое сегодня число?', '');

// button[0].addEventListener('click', function(a, b) {
//     a = expensesItem[1];
//     b = expensesItem[3];
//     return (a + b);
// });
// expenses.textContent = button[0];
// console.log(expensesItem[1]);