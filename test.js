'use strict';

alert('Задание 1');
let number = +prompt('Введите число', '');
if ( number >= 7 ) {
    alert('Привет');
}

alert('Задание 2');
let userName = prompt('Введите имя', '');
if ( userName == 'Вячеслав' ) {
    alert(`Привет, ${userName}`);
} else {
    alert('Нет такого имени');
}

alert('Задание 3');
alert('Вам потребуется ввести количество чисел, которое будет содержаться в массиве, а также заполнить его');
let numArray = [];
let n = prompt('Введите число равное количеству числел в массиве', '7');
for (let i = 0; i < n; i++) {
    numArray[i] = +prompt('Вводите значения массива по одному', '');
}
for ( let i = 0; i < 10 ; i++ ) {
    if ((numArray[i] % 3) == 0 && numArray[i] != 0) {
        alert(numArray[i]);
    }
}

