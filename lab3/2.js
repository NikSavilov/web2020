// Реализуйте функцию sum

function sum(input){
    let total = 0;
    for(var i=0; i<input.length; i++)
    {
        total += Number(input[i]);
    }
    return total
};

console.log(sum([5, 5, 5, 5, 5, 5, 5, 5, 5]));

