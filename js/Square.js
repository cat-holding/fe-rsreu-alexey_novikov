function Square(name, side) {
    if (side > 0) {
        Shape.call(this, name, 'Square');
    } else {
        Shape.call(this, name);
    }

    this.a = side || 0;
    this.b = side || 0;
    this.c = side || 0;
    this.d = side || 0;
}

Square.prototype = Object.create(Shape);
Square.prototype.constructor = Square;


// TODO: Constructor
// TODO: ES6 class