function Shape(name, type) {

    var name = name || 'No name';
    var type = type || 'No type';

    this.setType = function (value) {
        type = value;
    }

    this.getType = function () {
        return type;
    };

    this.setName = function (value) {
        name = value;
    }

    this.getName = function () {
        return name;
    };

    Object.defineProperty(this, 'perimeter',
        {
            get: function () {
                var result = 0;
                for (var key in this) {
                    if (/^[abcdefg]\d?$/i.test(key)) {
                        result += this[key];
                    }
                }
                return result;
            }

        });

    this.draw = function () {
        console.log(name);
    };

    this.getVolume = function () {
                return Math.pow(this.a, 3);
            };
}