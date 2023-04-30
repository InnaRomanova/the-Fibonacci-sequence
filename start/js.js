/* 

ЗАДАЧА:

1. - Вам необходимо создать последовательность Фибоначи.

Последовательность выглядит так:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ...

Каждое число в этой последовательности - это сумма двух пред ведущих чисел.

0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
...
И так далее.

2. - Создайте функцию, которая будет принимать в себя 1 параметр. 
1 параметр - это количество чисел которые вы хотите получить в вашей последовательности.


ПОДСКАЗКА:
1. - Задачу можно решить разными способами. Можно создать условное ветвление с помощью только else if. Можно вместе с else if использовать цикл for. 
2. - Попробуйте сначала, прописать логику вашей функции на листке бумаги, то как она будет работать, шаг за шагом.
3. Результат вашей последовательности запишите в пустую переменную - массив, например output = []

*/

'use strict'

function fibonacci(n) {
    let output = [];
    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
         output = [0, 1];
        for (let i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}

let res = fibonacci(25);
console.log(res);

//////////////////////////////////////
//2-ой способ

function fib(n) {
    let result = [0, 1];
    
    for(let i = 2; i < n; i++) {
result.push(result[result.length - 2] + result[result.length - 1]);
    }
    return result;
}

let output = fib(10);
console.log(output);

//////////////////////////////////////
//3-ий способ, немного сокращенная запись

function fibo(n) {
    let data = [0, 1];
    
    for(let i = 2; i < n; i++) {
        data.push(data.at(- 2) + data.at(- 1));
    }
    return data;
}

let item = fibo(10);
console.log(output);


var arr = [0,1,2,4];
console.log(arr.indexOf(3));