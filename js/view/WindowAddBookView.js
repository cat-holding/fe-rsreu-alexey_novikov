function WindowAddBookView(controller) {}

WindowAddBookView.prototype = (function () {
    'use strict';

    function getDataNewBook() {
        var title;
        var author;
        var image;

        title = prompt('Введите название книги', 'War and Peace');
        author = prompt('Введите название автора', 'Lev Nikolaevich Tolstoy');
        image = prompt('Введите ссылку на изображение', 'img/book2.jpg');
        // (idBook, title, author, image, stars)
        return new Book(-1, title, author, image, 0);
    }

    return {
        constructor: WindowAddBookView,
        getDataNewBook: getDataNewBook
    };
}());