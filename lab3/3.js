const object1 = {
    name: 'Boris',
    weight: 15
};

const object2 = {
    name: 'Boris',
    weight: 15
};

const object3 = {
    name: 'Rex',
    weight: 20,
};

function isEquivalent(obj1, obj2){
    return obj1.name === obj2.name && obj1.weight === obj2.weight;
};

function fastIsEquivalent(obj1, obj2){
    return JSON.stringify(obj1) === JSON.stringify(obj2);
};
// Реализуйте функцию isEquivalent

console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false