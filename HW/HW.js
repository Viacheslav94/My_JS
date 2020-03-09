let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    tineData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExspenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = +prompt("Во сколько обойдется?", ""); 
    
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
        }
    };
}
chooseExspenses();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let a = i,
            b = prompt("Статья необезательных расходов?", ""); 
    
        if ((typeof(b)) === 'string' && (typeof(b)) != null
            && b != '' && b.length < 50) {
                appData.optionalExpenses[a] = b;
        }
    };
}
chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на 1 день " + appData.moneyPerDay);
}
detectDayBudget();


if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень дохода");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Достаточный уровень заработка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Большой уровень заработка");
} else {
    console.log("Произошла ошибка");
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой %?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();