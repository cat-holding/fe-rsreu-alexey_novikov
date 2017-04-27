var Utils = (function () {
    'use strict';

    function Utils() {
        this.isNumber = function (num) {
            return !isNaN(num) && typeof num === 'number';
        }

        this.isArray = function (array) {
            return array instanceof Array;
        }

        this.isObject = function (obj) {
            return typeof obj === 'object' && !this.isArray(obj);
        }

        this.isPositive = function (num) {
            if (this.isNumber(num)) {
                return num > 0;
            } else {
                throw new Error('Input is not a number!');
            }
        }

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

        this.isArrayOfNumbers = function (array) {
            if (this.isArray(array)) {
                return array.every(this.isNumber);
            } else {
                throw new Error('Input is not a array!');
            }
        }
    }

    return new Utils();
}());