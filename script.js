// Напишите как вы понимаете рекурсию. Для чего она используется на практике?
// Рекурсивная функция это функция которая вызывает сама себя. 
// На практике используется когда некий алгоритм поиска решения проще выразить разбивая его на меньшие и меньшие части с помощью одного и того же метода
// Часто используется в функциональном программировании, обходе графов, глубоком копировании объектов
// В браузерных движках JS есть ограничения (~10 000) по количеству рекурсивных вызовов которые сохраняются в стеке.

let number = parseInt(prompt('please enter number', '8'));

let notValidNum = num => isNaN (num);

while (number < 1 || notValidNum(number)) {
    number = parseInt(prompt('Please enter positive integer number once again', '8'));
}

let factorial = (num) => {
    if (num === 1) {
        return num;
    } else { return (num = num * factorial(num - 1))}
}

document.getElementById('main').innerHTML = `The factorial of ${number} is: ${factorial(number)}`;
