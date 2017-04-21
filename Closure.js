var Calculator = (function (initNumber) {
    "use strict";

    var currentState = isNumber(initNumber) ? initNumber : 0;

    function executeOperation(nameOperation, args) {
        var args = convertObjectToArray(args);
        var operations = {
            add: function (num) {
                currentState += num;
            },
            subtract: function (num) {
                currentState -= num;
            },
            multiply: function (num) {
                currentState *= num;
            },
            divide: function (num) {
                currentState /= num;
            }
        };

        if (isArrayOfNumbers(args)) {
            args.forEach(function (num) {
                if (isString(nameOperation) && nameOperation in operations) {
                    operations[nameOperation](num);
                } else {
                    throw new Error("Arithmetic operation does not exist!");
                }
            });
        } else {
            throw new Error("Input is not a number!");
        }
    }

    function add() {
        executeOperation('add', arguments);

        return add;
    }

    function subtract() {
        executeOperation('subtract', arguments);

        return subtract;
    }

    function multiply() {
        executeOperation('multiply', arguments);

        return multiply;
    }

    function divide() {
        executeOperation('divide', arguments);

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