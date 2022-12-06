const student = "Алтухов Максим Иванович";

function onlyOneNumberOnInputs(data = 0, i) {
    let days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    for (i = 1; i < 5; i++) { 
        if (data !== 7) {      
        document.querySelector(`#${days[data]}${i}`).addEventListener('input',                         
            function(e) {
            this.value = this.value.replace(/[^\d]/g, 0);
                if (this.value.length > 1) {
            this.value = this.value[1].replace(/[^a-z]/, 0);
                };
        });
        } else {
            break;
        };  
    };
     if (i == 5) {
         onlyOneNumberOnInputs(data = data + 1);
     };
};

onlyOneNumberOnInputs();

function onlyNumbersOnInputs() {
    const inputs = ['#priceOfConsole', '#priceOfTravel', '#sumOfMoneyForTravel', '#sumOfMoneyForDinner'];
    for (let i = 0; i < 4; i++) {
        document.querySelector(inputs[i]).addEventListener('input',                         
        function(){
            this.value = this.value.replace(/[^\d]/g, '');
        });
    };
 };

onlyNumbersOnInputs();

function getResult(priceOfConsole, priceOfTravel, sumOfMoneyForTravel, sumOfMoneyForDinner, timetable) {
    const countOfWeeksForFirstsemester = 16;
    const countOfWeeksHolidays = 2;
    const countOfWeeksForSecondsemester = 23;
    const countDaysOfStudies = (countOfWeeksForFirstsemester + 1) * 7 + countOfWeeksHolidays * 7 + (countOfWeeksForSecondsemester + 1) * 7;
    let countForAccumulation = 0;
    let countDays = 0;
    let sumOfProfitForTravel = 0;
    if (priceOfConsole <= 0 || sumOfMoneyForDinner <= 0 || +sumOfMoneyForTravel < +priceOfTravel) {
        return 'Ошибка!'
    } else {
        let countForTravel = sumOfMoneyForTravel - priceOfTravel;
        for (let week = 0; week < 4; week++) {
            let days = [timetable[week].monday, timetable[week].tuesday, timetable[week].wednesday, timetable[week].thursday, timetable[week].friday, timetable[week].saturday, timetable[week].sunday];
            if (week == 0) {
                for (let weeks = 0; weeks < countOfWeeksForFirstsemester; weeks++) {
                    for (let i = 0; i < 7; i++) {
                        if (days[i] <= 3 && days[i] > 0) {
                            countForAccumulation = countForAccumulation + 1;
                        } else {
                            countDays = countDays + 1;
                        };
                        if (days[i] > 0) {
                            sumOfProfitForTravel = sumOfProfitForTravel + countForTravel;
                        };
                        if (countForAccumulation * sumOfMoneyForDinner + sumOfProfitForTravel >= priceOfConsole) {
                            return `Накопить получится за ${countForAccumulation + countDays} дней с начала учебного года.`;
                        };     
                    };
                };
            } else if (week == 1) {                
                    for (let i = 0; i < 7; i++) {
                        if (days[i] <= 3 && days[i] > 0) {
                            countForAccumulation = countForAccumulation + 1;
                        } else {
                            countDays = countDays + 1;
                        };
                        if (days[i] > 0) {
                            sumOfProfitForTravel = sumOfProfitForTravel + countForTravel;
                        };   
                        if (countForAccumulation * sumOfMoneyForDinner + sumOfProfitForTravel >= priceOfConsole) {
                            return `Накопить получится за ${countForAccumulation + countDays} дней с начала учебного года.`;
                        };    
                    };               
                    countDays = countDays + countOfWeeksHolidays * 7;
            } else if (week == 2) {
                for (let weeks = 0; weeks < countOfWeeksForSecondsemester; weeks++) {
                    for (let i = 0; i < 7; i++) {
                        if (days[i] <= 3 && days[i] > 0) {
                            countForAccumulation = countForAccumulation + 1;
                        } else {
                            countDays = countDays + 1;
                        };
                        if (days[i] > 0) {
                            sumOfProfitForTravel = sumOfProfitForTravel + countForTravel;
                        };
                        if (countForAccumulation * sumOfMoneyForDinner + sumOfProfitForTravel >= priceOfConsole) {
                            return `Накопить получится за ${countForAccumulation + countDays} дней с начала учебного года.`;
                        };     
                    };
                };
            } else {
                    for (let i = 0; i < 7; i++) {
                        if (days[i] <= 3 && days[i] > 0) {
                            countForAccumulation = countForAccumulation + 1;
                        } else {
                            countDays = countDays + 1;
                        };
                        if (days[i] > 0) {
                            sumOfProfitForTravel = sumOfProfitForTravel + countForTravel;
                        };
                        if (countForAccumulation * sumOfMoneyForDinner + sumOfProfitForTravel >= priceOfConsole) {
                            return `Накопить получится за ${countForAccumulation + countDays} дней с начала учебного года.`;
                        };     
                    };
                };
            console.log(countForAccumulation);
            console.log(countDays);
            console.log(countDaysOfStudies);
        };
    };
    if (countForAccumulation + countDays == countDaysOfStudies) {
        return `Накопить не получилось, но на последний день учебного года получится накопить ${countForAccumulation * sumOfMoneyForDinner + sumOfProfitForTravel} рублей.`;
        }; 
};

document.querySelector('#submit').addEventListener('click', function() {             
    let timetable = [{ 
        monday: document.getElementById("mon1").value,
        tuesday: document.getElementById("tue1").value,
        wednesday: document.getElementById("wed1").value,
        thursday: document.getElementById("thu1").value,
        friday: document.getElementById("fri1").value,
        saturday: document.getElementById("sat1").value,
        sunday: document.getElementById("sun1").value,
    }, {
        monday: document.getElementById("mon2").value,
        tuesday: document.getElementById("tue2").value,
        wednesday: document.getElementById("wed2").value,
        thursday: document.getElementById("thu2").value,
        friday: document.getElementById("fri2").value,
        saturday: document.getElementById("sat2").value,
        sunday: document.getElementById("sun2").value,
    }, {
        monday: document.getElementById("mon3").value,
        tuesday: document.getElementById("tue3").value,
        wednesday: document.getElementById("wed3").value,
        thursday: document.getElementById("thu3").value,
        friday: document.getElementById("fri3").value,
        saturday: document.getElementById("sat3").value,
        sunday: document.getElementById("sun3").value,
    }, {
        monday: document.getElementById("mon4").value,
        tuesday: document.getElementById("tue4").value,
        wednesday: document.getElementById("wed4").value,
        thursday: document.getElementById("thu4").value,
        friday: document.getElementById("fri4").value,
        saturday: document.getElementById("sat4").value,
        sunday: document.getElementById("sun4").value,
    }]; 
    let priceOfConsole = document.querySelector('#priceOfConsole').value; 
    let priceOfTravel = document.querySelector('#priceOfTravel').value; 
    let sumOfMoneyForTravel = document.querySelector('#sumOfMoneyForTravel').value; 
    let sumOfMoneyForDinner = document.querySelector('#sumOfMoneyForDinner').value;
    document.getElementById("result").innerHTML = getResult(priceOfConsole, priceOfTravel, sumOfMoneyForTravel, sumOfMoneyForDinner, timetable);  
});

document.getElementById("student").innerHTML = student;