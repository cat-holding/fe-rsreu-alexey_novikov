        function Cube(name, side, color) {
            Square.call(this, name, side);
            this.color = color || 'No color';
            this.a1 = side;
            this.b1 = side;
            this.c1 = side;
            this.d1 = side;
            this.a3 = side;
            this.b3 = side;
            this.c3 = side;
            this.d3 = side;
        }

        Cube.prototype = Object.create(Square);
        Cube.prototype.constructor = Cube;

        // Cube.prototype.getVolume = function () {

        // }; 