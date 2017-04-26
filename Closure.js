var Calculator = (function (initNumber) {
    "use strict";

    var currentState = isNumber(initNumber) ? initNumber : 0;

    function executeOperation(args, callback) {
        var args = convertObjectToArray(args);

        if (isArrayOfNumbers(args)) {
            if (typeof callback === 'function') {
                args.forEach(callback);
            } else {
                throw new Error("The second argument is not a function!");
            }
        } else {
            throw new Error("The first argument is not a number!");
        }
    }

    function add() {
        executeOperation(arguments, function (num) {
            currentState += num;
        });

        return add;
    }

    function subtract() {
        executeOperation(arguments, function (num) {
            currentState -= num;
        });

        return subtract;
    }

    function multiply() {
        executeOperation(arguments, function (num) {
            currentState *= num;
        });

        return multiply;
    }

    function divide() {
        executeOperation(arguments, function (num) {
            currentState /= num;
        });

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
}(50));

Calculator.add(3, 3)(4);
console.log('Calculator', Calculator.getResult());
Calculator.divide(2, 3);
console.log('Calculator', Calculator.getResult());
Calculator.multiply(0.5);
console.log('Calculator', Calculator.getResult());