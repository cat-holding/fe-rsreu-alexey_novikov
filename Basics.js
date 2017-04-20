function isNumber(num) {
    return !isNaN(num) && typeof num === 'number';
}

// Declare two variables and show them
var a;
var b;

console.log(a, b);

// Write a function that can find triangle's area
function triangleArea(a, b, c) {
    if (isNumber(a) && isNumber(b) && isNumber(c)) {
        if (a + b > c && b + c > a && a + c > b) {
            var semiperimeter = (a + b + c) / 2;

            return Math.sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c));
        } else {
            throw new Error('The amount of any two parties must be greater than the third!');
        }
    } else {
        throw new Error('Input is not a number!');
    }
}

console.log(triangleArea(2, 4, 4));

// Write a function that reverse the given array using three kind of loops
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function reverseWhile(array) {
    var i = 0;

    if (!Array.isArray(array)) {
        throw new Error('Input is not a array!');
    }

    var reversedArray = [];

    while (reversedArray.length < array.length) {
        ++i;
        reversedArray.push(array[array.length - i]);
    }

    return reversedArray;
}

console.log('reverseWhile:', reverseWhile(array));

function reverseDoWhile(array) {
    var i = 0;

    if (!Array.isArray(array)) {
        throw new Error('Input is not a array!');
    }

    var reversedArray = [];

    do {
        ++i;
        reversedArray.push(array[array.length - i]);
    } while (reversedArray.length < array.length);

    return reversedArray;
}

console.log('reverseDoWhile:', reverseDoWhile(array));

function reverseFor(array) {
    if (!Array.isArray(array)) {
        throw new Error('Input is not a array!');
    }

    var reversedArray = [];

    for (var i = 1; reversedArray.length < array.length; i++) {
        reversedArray.push(array[array.length - i]);
    }

    return reversedArray;
}

console.log('reverseFor:', reverseFor(array));

// Explain the difference between ++i and i++ with example
var i = 0;
console.log(i++);
console.log(i);

i = 0;
console.log(++i);
console.log(i);


// Write a function that checks if the given arguments is positive number or negative number or is 0
function isNumberType(num) {
    if (isNumber(num)) {
        if (num < 0) {
            return 'negative';
        } else if (num > 0) {
            return 'positive';
        } else if (num === 0) {
            return 'This number is 0';
        }
    } else {
        throw new Error('Input is not a number!');
    }
}

console.log('isNumberType:', isNumberType(0));

// Create a page that asks the user his name and alert it back
var name = prompt('What\'s your name?', 'Enter your name');
alert('Your name is ' + name + '.');

// Write a function that calculates factorial
function factorial(num) {
    if (isPositive(num)) {
        return num === 0 ? num * factorial(num - 1) : 1;
    } else {
        throw new Error('Input is not a positive number!');
    }
}

console.log(factorial(5));