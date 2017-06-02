function Triangle(name, a, b, c) {
    if (a + b > c && b + c > a && a + c > b) {
        Shape.call(this, name, 'Triangle');
    } else {
        Shape.call(this, name);
    }

    this.a = a || 0;
    this.b = b || 0;
    this.c = c || 0;
}

Triangle.prototype = Object.create(Shape);
Triangle.prototype.constructor = Triangle;