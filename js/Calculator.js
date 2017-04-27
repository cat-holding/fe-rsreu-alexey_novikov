var Calculator = (function Calculator(initNumber) {
    "use strict";

    function Calculator(initNumber) {
        var currentState = Utils.isNumber(initNumber) ? initNumber : 0;

        function executeOperation(args, callback) {
            var args = Utils.convertObjectToArray(args);

            if (Utils.isArrayOfNumbers(args)) {
                if (typeof callback === 'function') {
                    args.forEach(callback);
                } else {
                    throw new Error('The second argument is not a function!');
                }
            } else {
                throw new Error('The first argument is not a number!');
            }
        }

        this.add = function () {
            executeOperation(arguments, function (num) {
                currentState += num;
            });

            return this;
        }

        this.subtract = function () {
            executeOperation(arguments, function (num) {
                currentState -= num;
            });

            return this;
        }

        this.multiply = function () {
            executeOperation(arguments, function (num) {
                currentState *= num;
            });

            return this;
        }

        this.divide = function () {
            executeOperation(arguments, function (num) {
                currentState /= num;
            });

            return this;
        }

        this.getResult = function () {
            return currentState;
        }

        this.reset = function () {
            currentState = 0;

            return this;
        }

        this.getInitialState = function (callback) {
            // Setting timeout to emulate a request to a server
            setTimeout(function () {
                // Set calculator state here
                this.result = 5;

                callback.apply(this);
            }.bind(this), 1000);
        }
    }

    return new Calculator();
}());

console.log('Calculator:', Calculator.add(4, 4).reset().add(1).getResult());

Calculator.getInitialState(function () {
    console.log('this.result:', this.result);
});