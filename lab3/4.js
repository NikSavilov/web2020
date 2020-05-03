function User(name) {
    this.name = name;
}

// Допишите код здесь, чтобы программа вывела на консоль ожидаемый результат


const me = new User('Rex');
me.getName = function(){return this.name}

console.log(me.getName()); // Rex