function createCounter() {
    // Реализуйте функцию, чтобы программа вывела на консоль ожидаемый результат
    var current = 1;
    return function () {
    return current++;
    }
}

const count = createCounter();

count(); // 1
count(); // 2
count(); // 3
count(); // 4

console.log(count()); // 5