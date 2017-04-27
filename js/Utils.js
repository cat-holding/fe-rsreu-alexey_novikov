var Utils = (function () {
    'use strict';

    function Utils() {
        this.isNumber = function (num) {
            return !isNaN(num) && typeof num === 'number';
        }

        this.isNegative = function (num) {
            if (this.isNumber(num)) {
                return num < 0;
            } else {
                throw new Error('Input is not a number!');
            }
        }

        this.isPositive = function (num) {
            if (this.isNumber(num)) {
                return num > 0;
            } else {
                throw new Error('Input is not a number!');
            }
        }

        // Write a function which calculates a factorial for a given number (use recursion in your algorithm). 
        // Do not forget to check if the given value is a number.
        this.factorial = function (num) {
            if (this.isPositive(num)) {
                return num === 0 ? num * this.factorial(num - 1) : 1;
            } else {
                throw new Error('Input is not a positive number!');
            }
        }

        // Write a function which returns if the number is prime or not. 
        // Do not forget to check if the given value is a number.
        this.isPrime = function (num) {
            if (this.isNumber(num)) {
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

        this.isString = function (string) {
            return typeof string === 'string';
        }

        // Write a function which defines if a given value can be casted to a number;
        this.canParseToNumber = function (string) {
            if (this.isString(string)) {
                return this.isNumber(+string);
            } else {
                throw new Error('Input is not a string!');
            }
        }

        // Write a function which returns a given string length. 
        // Do not forget to check if the given value is a string;
        this.getStringLength = function (string) {
            if (this.isString(string)) {
                return string.length;
            } else {
                throw new Error('Input is not a string!');
            }
        }

        // Write a JavaScript function to convert a string into camel case;
        this.camelize = function (string) {
            if (this.isString(string)) {
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
        this.capitalize = function (string) {
            if (this.isString(string)) {
                return string.length ? string[0].toUpperCase() + string.substring(1, string.length) : '';
            } else {
                throw new Error('Input is not a string!');
            }
        }

        // Write a JavaScript function which return the number of occurrences of a given substring in a string.
        this.findOccurrences = function (substring, string) {
            if (this.isString(string) && this.isString(substring)) {
                return string.match(new RegExp(substring, 'g')).length;
            } else {
                throw new Error('Input is not a string!');
            }
        }

        // Write a function which defines if a given value is an array. Use this function in the next tasks to define if a given value is an array;
        this.isArray = function (array) {
            return array instanceof Array;
        }

        // Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array
        this.filterArray = function (array) {
            if (this.isArray(array)) {
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
        this.isArrayOfNumbers = function (array) {
            if (this.isArray(array)) {
                return array.every(this.isNumber);
            } else {
                throw new Error('Input is not a array!');
            }
        }

        // My function
        this.convertObjectToArray = function (obj) {
            if (this.isObject(obj)) {
                if ('length' in obj && this.isPositive(obj.length)) {
                    return Array.prototype.slice.call(obj);
                } else {
                    throw new Error('The object does not have the length property or it is not a positive number!');
                }
            } else {
                throw new Error('Input is not a object!');
            }
        }

        // Write a JavaScript function to find the highest value in an array
        this.maxValueArray = function (array) {
            if (this.isArray(array) && this.isArrayOfNumbers(array)) {
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
        this.minValueArray = function (array) {
            if (this.isArrayOfNumbers(array)) {
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
        this.arrayOfWords = function (string) {
            if (this.isString(string)) {
                return string.split(/\s+/g);
            } else {
                throw new Error('Input is not a string!');
            }
        }


        // Write a JavaScript function to find the most frequent item of an array.
        this.frequentItemOfArray = function (array) {
            if (this.isArray(array)) {
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
        this.cloneArray = function (array) {
            if (this.isArray(array)) {
                return array.slice();
            } else {
                throw new Error('Input is not a array!');
            }
        }

        // Write a JavaScript program to remove duplicate strings from a string array (ignore case sensitivity)
        this.removeDuplicates = function (array) {
            if (!this.isArray(array)) {
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
        this.mergeArrays = function (arrayA, arrayB) {
            if (!this.isArray(arrayA)) {
                throw new Error('The first parameter is not an array!');
            }

            if (!this.isArray(arrayB)) {
                throw new Error('The second parameter is not an array!');
            }

            var arrayC = arrayA.concat(arrayB);

            return this.removeDuplicates(arrayC);
        }

        // Write a JavaScript function to remove a specific element from an array
        this.removeElementFromArray = function (array, elem) {
            if (!this.isArray(array)) {
                throw new Error('Input is not a array!');
            }

            var resultArr = array.slice();

            for (var i = array.length - 1; i--;) {
                if (resultArr[i] === elem || (isNaN(elem) && isNaN(resultArr[i])) || (this.isArray(elem) && this.isArray(resultArr[i]))) {
                    resultArr.splice(i, 1);
                }
            }

            return resultArr;
        }

        // Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method
        this.sortBy = function (array, attr) {
            if (!this.isArray(array)) {
                throw new Error('The first parameter not a array!');
            }

            if (!this.isString(attr) && attr.length == 0) {
                throw new Error('The second parameter is not a string or its length is zero!');
            }

            return array
                .slice()
                .sort(function (a, b) {
                    return (a[attr] > b[attr]) ? 1 : ((b[attr] > a[attr]) ? -1 : 0);
                });
        }

        // My function
        this.isObject = function (obj) {
            return typeof obj === 'object' && !this.isArray(obj);
        }

        // Write a JavaScript program to get the length of a JavaScript object
        // Count inner objects length
        this.lengthOfObject = function (obj) {
            if (this.isObject(obj)) {
                var size = 0;
                var key;

                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        size++;

                        if (this.isObject(obj[key])) {
                            size += this.lengthOfObject(obj[key]);
                        }
                    }
                }

                return size;
            } else {
                throw new Error('Input is not a JavaScript object!');
            }
        };

        // Write a JavaScript program to list the properties of a JavaScript object
        this.propertiesOfObject = function (obj) {
            if (this.isObject(obj)) {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        console.log(key + ':', obj[key].toString());

                        if (this.isObject(obj[key])) {
                            this.propertiesOfObject(obj[key]);
                        }
                    }
                }
            } else {
                throw new Error('Input is not a JavaScript object!');
            }
        };

        // Write a JavaScript function to get difference between two dates in days.
        this.getDifferenceInDays = function (date1, date2) {
            var difference = Math.abs(date1.getTime() - date2.getTime());
            return Math.ceil(difference / (1000 * 3600 * 24));
        }

        // Write a JavaScript function gets the current date.
        this.getCurrentDate = function getCurrentDate() {
            var date = new Date();
            // date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        }

        // Write a JavaScript function which displays the current day and time in the following format.
        // Replace string with string literals
        this.formatDate = function formatDate() {
            var date = new Date();
            var month = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()];

            // month + ' ' + date.getDate() + ' ' + date.getFullYear() + ', ' + date.getHours() + ':' + date.getMinutes();
            return `${month} ${date.getDate()} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
        }
    }

    return new Utils();
}());