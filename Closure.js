window.Calculator = (function () {
    "use strict";

    var currentState = 0;

    function add(num) {
        if (isNumber(num)) {
            currentState += num;
        } else {
            throw new Error("Input is not a number!");
        }

        return add;
    }

    function subtract(num) {
        if (isNumber(num)) {
            currentState -= num;
        } else {
            throw new Error("Input is not a number!");
        }

        return subtract;
    }

    function multiply(num) {
        if (isNumber(num)) {
            currentState *= num;
        } else {
            throw new Error("Input is not a number!");
        }

        return multiply;
    }

    function divide(num) {
        if (isNumber(num)) {
            currentState = currentState / num;
        } else {
            throw new Error("Input is not a number!");
        }

        return divide;
    }

    function getResult() {
        return currentState;
    }

    function reset() {
        currentState = 0;

        return currentState;
    }

    return {
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide,
        getResult: getResult,
        reset: reset
    };

}());

Calculator.add(3)(7);
Calculator.divide(2);
console.log('Calculator', Calculator.getResult());