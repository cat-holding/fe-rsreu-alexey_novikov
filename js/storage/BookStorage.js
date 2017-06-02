function BookStorage() {
    this.data = [
        // new Book(1, 'Jewels of Nizam', 'Geeta Devi', 'img/book10.jpg', 4.5),
        // new Book(2, 'Cakes & Bakes', 'Sanjeev Kapoor', 'img/book9.jpg', 1.5),
        // new Book(3, 'Jamie`s Kitchen', 'Jamie Oliver', 'img/book8.jpg', 2.0),
        // new Book(4, 'Inexpensive Family Meals', 'Simon Holst', 'img/book7.jpg', 3.5),
        // new Book(5, 'Paleo Slow Cooking', 'Chrissy Gower', 'img/book6.jpg', 5.0),
        // new Book(6, 'Cook Like an Italian', 'Tobie Puttock', 'img/book5.jpg', 2.5),
        // new Book(7, 'Suneeta Vaswani', 'Geeta Devi', 'img/book4.jpg', 0.0),
        // new Book(8, 'Jamie Does', 'Jamie Oliver', 'img/book3.jpg', 1.0),
        // new Book(9, 'Suneeta Vaswani', 'Jamie Oliver', 'img/book2.jpg', 2.5),
        // new Book(10, 'Vegetables Cookbook', 'Matthew Biggs', 'img/book1.jpg', 4.0)
    ];
    this.mostPopular = false;
    this.searchString = '';
}

BookStorage.prototype = (function () {
    'use strict';

    function _promiseTimeout(ms, promise) {
        var id;
        var timeout = new Promise(
            function (resolve, reject) {
                id = setTimeout(function () {
                    clearTimeout(id);
                    reject('Timed out in ' + ms + 'ms.');
                }, ms);
            }
        );

        return Promise.race([
            promise.then(function (res) {
                clearTimeout(id);
                return res;
            }),
            timeout
        ]);
    }

    function _maxIdBook() {
        var maxValue = 0;

        for (var i = 0; i < this.data.length; i++) {
            if (maxValue < this.data[i].idBook) {
                maxValue = this.data[i].idBook;
            }
        }

        return maxValue;
    }

    function _isValidParamBook(title, author, image) {
        return Utils.isString(title) && title.length > 5 && title.length < 35 &&
            Utils.isString(author) && author.length > 5 && author.length < 35 &&
            Utils.isString(image) && /^img\/book[1-9].jpg$/.test(image);
    }

    function _isBookInArray(idBook) {
        var result = -1;

        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].idBook == idBook) {
                result = i;
            }
        }

        return result;
    }

    function addBook(title, author, image, stars, successful, error, timeout) {
        var ns = this;

        if (_isValidParamBook(title, author, image)) {
            var xhr = new XMLHttpRequest();

            xhr.open('POST', 'addBook', true);
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.timeout = 30000;
            xhr.send(JSON.stringify(new Book(0, title, author, image, stars)));

            if (typeof timeout === 'function') {
                xhr.ontimeout = timeout;
            }

            xhr.onreadystatechange = function () {
                if (this.readyState != 4) return;

                if (this.status != 200) {
                    if (typeof error === 'function') {
                        error(this.status);
                    }

                    return;
                } else {
                    try {
                        var res = JSON.parse(xhr.responseText);

                        if (res.response && typeof successful === 'function') {
                            ns.data.push(new Book(res.idBook, title, author, image, 0.0));
                            successful(res.idBook);
                        } else {
                            if (typeof error === 'function') {
                                error();
                            }
                        }
                    } catch (e) {
                        console.log(e.message);
                    }
                }
            }
        }
    }

    function loadBooks(successful, error) {
        var ns = this;
        var promise = fetch("getBooks",
            {
                method: 'GET'
            })
            .then(function (res) {
                return res.json();
            });

        return _promiseTimeout(5000, promise).then(function (resolve, reject) {
            if (!resolve.response && Array.isArray(resolve)) {
                ns.data = resolve;
                return true;
            } else {
                return false;
            }
        });
    }

    function getBook(id) {
        for (var i = 0; i < this.data.length; i++) {
            if (id == this.data[i].idBook) {
                return this.data[i];
            }
        }
    }

    function searchBooks(searchString) {
        var searchString = searchString.toUpperCase();
        var resultArr = [];

        if (searchString.length) {
            this.data.forEach(function (el, ind, arr) {
                if (el.title.toUpperCase().indexOf(searchString) >= 0) {
                    resultArr.push(arr[ind]);
                }
            });
        } else {
            return this.data;
        }

        return resultArr;
    }

    function setRating(idBook, stars) {
        var indexBookInArray = _isBookInArray.call(this, idBook);

        if (indexBookInArray >= 0) {
            // TODO: Add timeout handling
            // TODO: Remove callbacks
            var ns = this;
            var promise = fetch("rateBook",
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({ idBook: idBook, stars: stars })
                });

            return _promiseTimeout(5000, promise)
                .then(function (res) {
                    return res.json();
                })
                .then(function (resolve, reject) {
                    if (resolve.response) {
                        ns.data[indexBookInArray].stars = stars;
                        return true;
                    }
                });
        }
    }

    function getMostPopularBooks() {
        var resultArr = [];

        this.data.forEach(function (el, ind, arr) {
            if (arr[ind].stars > 4) {
                resultArr.push(arr[ind]);
            }
        });

        return resultArr;
    }

    function getFilteredBooks() {
        var result = [];

        if (this.mostPopular) {
            result = getMostPopularBooks.call(this);
        } else {
            result = this.data;
        }

        if (this.searchString.length > 0) {
            result = searchBooks.call({ data: result }, this.searchString);
        }

        return result;
    }

    // Read about prototype 'constructor' field
    return {
        constructor: BookStorage,
        loadBooks: loadBooks,
        addBook: addBook,
        getBook: getBook,
        searchBooks: searchBooks,
        setRating: setRating,
        getMostPopularBooks: getMostPopularBooks,
        getFilteredBooks: getFilteredBooks
    };
}());