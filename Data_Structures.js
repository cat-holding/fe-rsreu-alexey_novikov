// NUMBER
console.info('NUMBER');

function isNumber(num) {
    'use strict';

    return !isNaN(num) && typeof num === 'number';
}

function isNegative(num) {
    'use strict';

    if (isNumber(num)) {
        return num < 0;
    } else {
        throw new Error('Input is not a number!');
    }
}

function isPositive(num) {
    'use strict';

    if (isNumber(num)) {
        return num > 0;
    } else {
        throw new Error('Input is not a number!');
    }
}

// Write a function which calculates a factorial for a given number (use recursion in your algorithm). 
// Do not forget to check if the given value is a number.
function factorial(num) {
    'use strict';

    if (isPositive(num)) {
        return num === 0 ? num * factorial(num - 1) : 1;
    } else {
        throw new Error('Input is not a positive number!');
    }
}

// Write a function which returns if the number is prime or not. 
// Do not forget to check if the given value is a number.
function isPrime(num) {
    'use strict';

    if (isNumber(num)) {
        var d = num - 1;

        while (d > 1) {
            if ((num % d) == 0) {
                return false;
            }

            d--;
        }

        return true;
    } else {
        throw new Error('Input is not a number!');
    }
}

console.log('isNumber(2):', isNumber(2)); // true
console.log('isNegative(2):', isNegative(2)); // false
console.log('isPositive(2):', isPositive(2)); // true
console.log('factorial(5):', factorial(5));
console.log('isPrime(11):', isPrime(11));

// STRING
console.info('STRING');

function isString(string) {
    'use strict';

    return typeof string === 'string';
}

// Write a function which defines if a given value can be casted to a number;
function canParseToNumber(string) {
    'use strict';

    if (isString(string)) {
        return isNumber(+string);
    } else {
        throw new Error('Input is not a string!');
    }
}

// Write a function which returns a given string length. 
// Do not forget to check if the given value is a string;
function getStringLength(string) {
    'use strict';

    if (isString(string)) {
        return string.length;
    } else {
        throw new Error('Input is not a string!');
    }
}

// Write a JavaScript function to convert a string into camel case;
function camelize(string) {
    'use strict';

    if (isString(string)) {
        var string = string.trim().toLowerCase();
        var outString = '';

        for (var i = 0; i < string.length; i++) {
            if (string[i] == ' ' && i < string.length - 1 && string[i + 1] != ' ') {
                outString += string[i + 1].toUpperCase();
                i++;
            } else if (string[i] != ' ') {
                outString += string[i];
            }
        }

        return outString;
    } else {
        throw new Error('Input is not a string!');
    }
}

// Write a JavaScript function to capitalize the first letter of a string;
function capitalize(string) {
    'use strict';

    if (isString(string)) {
        return string.length ? string[0].toUpperCase() + string.substring(1, string.length) : '';
    } else {
        throw new Error('Input is not a string!');
    }
}

// Write a JavaScript function which return the number of occurrences of a given substring in a string.
function findOccurrences(substring, string) {
    'use strict';

    if (isString(string) && isString(substring)) {
        return string.match(new RegExp(substring, 'g')).length;
    } else {
        throw new Error('Input is not a string!');
    }
}

console.log('isString("JavaScript"):', isString("JavaScript")); // true
console.log('canParseToNumber("2"):', canParseToNumber("2")); // true
console.log('getStringLength("JS"):', getStringLength("JS")); // 2
console.log('camelize("java script"):', camelize("java script")); // "JavaScript"
console.log('capitalize("javaScript"):', capitalize("javaScript \n front-end")); // "JavaScript"
console.log('findOccurrences("a", "JavaScript" ):', findOccurrences("a", "JavaScript")); // 2

// ARRAYS
console.info('ARRAYS');

// Write a function which defines if a given value is an array. Use this function in the next tasks to define if a given value is an array;
function isArray(array) {
    'use strict';

    return array instanceof Array;
}

// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array
function filterArray(array) {
    'use strict';

    if (isArray(array)) {
        var outArray = [];
        
        for (var i = 0; i < array.length; i++) {
            var value = array[i];

            if (value) {
                outArray.push(value);
            }
        }

        return outArray;
    } else {
        throw new Error('Input is not a array!');
    }
}

// My function
// Replace for with array built-in method
function isArrayOfNumbers(array) {
    'use strict';

    if (isArray(array)) {
        return array.every(isNumber);
    } else {
        throw new Error('Input is not a array!');
    }
}

// Write a JavaScript function to find the highest value in an array
function maxValueArray(array) {
    'use strict';

    if (isArray(array) && isArrayOfNumbers(array)) {
        var maxValue = array[0];

        for (var i = 1; i < array.length; i++) {
            if (array[i] > maxValue) {
                maxValue = array[i];
            }
        }

        return maxValue;
    } else {
        throw new Error('Input is not a array of numbers!');
    }
}

// Write a JavaScript function to find the lowest value in an array
function minValueArray(array) {
    'use strict';

    if (isArrayOfNumbers(array)) {
        var minValue = array[0];
        for (var i = 1; i < array.length; i++) {
            if (array[i] < minValue) {
                minValue = array[i];
            }
        }

        return minValue;
    } else {
        throw new Error('Input is not a array of numbers!');
    }
}

// Write a JavaScript function to split a string and convert it into an array of words;
function arrayOfWords(string) {
    'use strict';

    if (isString(string)) {
        return string.split(/\s+/g);
    } else {
        throw new Error('Input is not a string!');
    }
}

// Write a JavaScript function to find the most frequent item of an array.
function frequentItemOfArray(array) {
    'use strict';

    if (isArray(array)) {
        // default maximum frequency
        var mf = 1;
        // counter
        var m = 0;
        // to store item with maximum frequency
        var item;

        for (var i = 0; i < array.length; i++) {
            for (var j = i; j < array.length; j++) {
                if (array[i] == array[j]) {
                    m++;
                }
                if (mf < m) {
                    mf = m;
                    item = array[i];
                }
            }

            m = 0;
        }

        return item;
    } else {
        throw new Error('Input is not a array!');
    }
}

// Write a JavaScript function to clone an array
function cloneArray(array) {
    'use strict';

    if (isArray(array)) {
        return array.slice();
    } else {
        throw new Error('Input is not a array!');
    }
}

// Write a JavaScript program to remove duplicate strings from a string array (ignore case sensitivity)
function removeDuplicates(array) {
    'use strict';

    if (!isArray(array)) {
        throw new Error('Input is not a array!');
    }

    array = array.slice();

    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                array.splice(j, 1);
            }
        }
    }

    return array;
}

// Write a JavaScript function to merge two arrays and removes all duplicates elements
function mergeArrays(arrayA, arrayB) {
    'use strict';

    if (!isArray(arrayA)) {
        throw new Error('The first parameter is not an array!');
    }

    if (!isArray(arrayB)) {
        throw new Error('The second parameter is not an array!');
    }

    var arrayC = arrayA.concat(arrayB);

    return removeDuplicates(arrayC);
}

// Write a JavaScript function to remove a specific element from an array
function removeElementFromArray(array, elem) {
    'use strict';

    if (!isArray(array)) {
        throw new Error('Input is not a array!');
    }

    var resultArr = array.slice();

    for (var i = array.length - 1; i--;) {
        if (resultArr[i] === elem || (isNaN(elem) && isNaN(resultArr[i])) || (isArray(elem) && isArray(resultArr[i]))) {
            resultArr.splice(i, 1);
        }
    }

    return resultArr;
}

// Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method
function sortBy(array, attr) {
    'use strict';

    if (!isArray(array)) {
        throw new Error('The first parameter not a array!');
    }

    if (!isString(attr) && attr.length == 0) {
        throw new Error('The second parameter is not a string or its length is zero!');
    }

    return array
        .slice()
        .sort(function (a, b) {
            return (a[attr] > b[attr]) ? 1 : ((b[attr] > a[attr]) ? -1 : 0);
        });
}

console.log('isArray([]):', isArray([])); // true
console.log('filterArray([NaN, 0, 15, false, -22, \'\', undefined, 47, null]):', filterArray([NaN, 0, 15, false, -22, '', undefined, 47, null]));
console.log('maxValueArray([2, 1, 5, -3, 3, 7, 0]):', maxValueArray([2, 1, 5, -3, 3, 7, 0])); // 7
console.log('minValueArray([2, 1, 5, -3, 3, 7, 0]):', minValueArray([2, 1, 5, -3, 3, 7, 0])); // -3
console.log('arrayOfWords(\'convert string into an array of words\'):', arrayOfWords('convert string into an array of words'));

console.log("frequentItemOfArray([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]):",
    frequentItemOfArray([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])); // "a"

console.log('cloneArray([5, 4, 5]):', cloneArray([5, 4, 5])); // [5, 4, 5]
console.log("removeDuplicates(['8', '8', 7, 7, 'text']):", removeDuplicates(['8', '8', 7, 7, 'text'])); // ["8", 7, "text"]
console.log('mergeArrays([1, 2, 3, 4, 5], [0, 4, 5]):', mergeArrays([1, 2, 3, 4, 5], [0, 4, 5])); // [1, 2, 3, 4, 5, 0]
console.log('removeElementFromArray([8, 9, 9, 6, "", false, NaN, true], NaN):', removeElementFromArray([8, 9, 9, 6, "", false, NaN, true], NaN)); // true
// console.log(':', ); // true
console.log('sortBy([{title:"..."},...], "title"):', sortBy([
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
], 'title'));

// OBJECTS
console.info('OBJECTS');

// My function
function isObject(obj) {
    'use strict';

    return typeof obj === 'object' && !isArray(obj);
}

// Write a JavaScript program to get the length of a JavaScript object
// Count inner objects length
function lengthOfObject(obj) {
    'use strict';

    if (isObject(obj)) {
        var size = 0;
        var key;

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                size++;

                if (isObject(obj[key])) {
                    size += lengthOfObject(obj[key]);
                }
            }
        }

        return size;
    } else {
        throw new Error('Input is not a JavaScript object!');
    }
};

// Write a JavaScript program to list the properties of a JavaScript object
function propertiesOfObject(obj) {
    'use strict';

    if (isObject(obj)) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                console.log(key + ':', obj[key].toString());

                if (isObject(obj[key])) {
                    propertiesOfObject(obj[key]);
                }
            }
        }
    } else {
        throw new Error('Input is not a JavaScript object!');
    }
};

var object = {
    a: 1,
    b: 2,
    c: 3,
    d: {
        a: 1,
        b: 2,
        c: 3
    }
};

console.log('lengthOfObject(obj):', lengthOfObject(object)); // 7
console.log('>>>>>>>>>>>');
console.log('propertiesOfObject(obj):', propertiesOfObject(object));
console.log('>>>>>>>>>>>');

// DATE
console.info('DATE');

// Write a JavaScript function to get difference between two dates in days.
function getDifferenceInDays(date1, date2) {
    'use strict';

    var difference = Math.abs(date1.getTime() - date2.getTime());
    return Math.ceil(difference / (1000 * 3600 * 24));
}

// Write a JavaScript function gets the current date.
function getCurrentDate() {
    'use strict';

    var date = new Date();
    // date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

// Write a JavaScript function which displays the current day and time in the following format.
// Replace string with string literals
function formatDate() {
    'use strict';

    var date = new Date();
    var month = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()];

    // month + ' ' + date.getDate() + ' ' + date.getFullYear() + ', ' + date.getHours() + ':' + date.getMinutes();
    return `${month} ${date.getDate()} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
}

console.log('getDifferenceInDays():', getDifferenceInDays(new Date("4/1/2017"), new Date("4/10/2017")));
console.log('formatDate():', formatDate(new Date("4/1/2017")));
console.log('getCurrentDate():', getCurrentDate());
console.log('formatDate():', formatDate(new Date())); // Oct 22 2016, 11:45