class Shape2 {
    constructor(name, type) {
        var name = name || 'No name';
        var type = type || 'No type';
    }

    // TODO: get and set
    get perimeter(){
        var result = 0;
                    for (var key in this) {
                        if (/^[abcdefg]\d?$/i.test(key)) {
                            result += this[key];
                        }
                    }
                    return result;
    }

    setType(value) {
        type = value;
    }

    getType() {
        return type;
    };

    setName(value) {
        name = value;
    }

    getName() {
        return name;
    };

    draw() {
        console.log(name);
    };

    getVolume() {
        return Math.pow(this.a, 3);
    };
}