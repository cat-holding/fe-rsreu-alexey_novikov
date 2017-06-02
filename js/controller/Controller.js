function Controller(bookView, filterPanelView, notificationView, searchFormView, windowAddBookView, bookStorage, notificationStorage) {
    var _bookView = bookView;
    var _filterPanelView = filterPanelView;
    var _notificationView = notificationView;
    var _searchFormView = searchFormView;
    var _windowAddBookView = windowAddBookView;
    var _bookStorage = bookStorage;
    var _notificationStorage = notificationStorage;

    this.setBookView = function (obj) {
        _view = obj;
        return this;
    };

    this.getBookView = function () {
        return _view;
    };

    this.setFilterPanelView = function (obj) {
        _filterPanelView = obj;
        return this;
    };

    this.getFilterPanelView = function () {
        return _filterPanelView;
    };

    this.setNotificationView = function (obj) {
        _notificationView = obj;
        return this;
    };

    this.getNotificationView = function () {
        return _notificationView;
    };

    this.setSearchFormView = function (obj) {
        _searchFormView = obj;
        return this;
    };

    this.getSearchFormView = function () {
        return _searchFormView;
    };

    this.setWindowAddBookView = function (obj) {
        _windowAddBookView = obj;
        return this;
    };

    this.getWindowAddBookView = function () {
        return _windowAddBookView;
    };

    this.setBookStorage = function (bookStorage) {
        _bookStorage = bookStorage;
        return this;
    };

    this.getBookStorage = function () {
        return _bookStorage;
    }

    this.setNotificationStorage = function (notificationStorage) {
        _notificationStorage = notificationStorage;
        return this;
    };

    this.getNotificationStorage = function () {
        return _notificationStorage;
    }
}

Controller.prototype = (function () {
    'use strict';

    function fullNotification(arrNotific) {
        var arrResult = [];
        var book;

        for (var key in arrNotific) {
            if (Utils.isObject(arrNotific[key])) {
                book = this.getBookStorage().getBook(arrNotific[key].idBook);
                arrResult.push({ title: book.title, author: book.author, date: arrNotific[key].date, section: book.section });
            }
        }

        return arrResult;
    }

    function onLoadDocument() {
        var ns = this;

        this.getBookStorage()
            // .loadBooks(function () {
            //     // successful
            //     this.getBookView()
            //         .renderBooks(this.getBookStorage().data);
            // }.bind(this), function () {
            //     // error
            //     this.getNotificationView()
            //         .showNotificationText('The book list could not be loaded!');
            // }.bind(this));
            .loadBooks().then(
            function (res) {
                if (res) {
                    // successful
                    ns.getBookView()
                        .renderBooks(ns.getBookStorage().getFilteredBooks());
                } else {
                    // error
                    ns.getNotificationView()
                        .showNotificationText('The book list could not be loaded!');
                }
            }
            ).catch(function(ex){
                console.log(ex);
            });

        this.getFilterPanelView().renderFilterPanel();
        this.getSearchFormView().renderSearchForm();
        var arrNotific = fullNotification.call(this, this.getNotificationStorage().getNotification());
        this.getNotificationView().renderNotifications(arrNotific);
    }

    function onAddBookClick() {
        var ns = this;
        var newBook = this.getWindowAddBookView().getDataNewBook();
        var result = this
            .getBookStorage()
            .addBook(
            newBook.title,
            newBook.author,
            newBook.image,
            newBook.stars,
            function (idNewBook) {
                // successful
                var arrNotific;
                ns.getNotificationStorage().addNotification(idNewBook);
                arrNotific = fullNotification.call(ns, ns.getNotificationStorage().getNotification());
                ns.getBookView().renderBooks(ns.getBookStorage().getFilteredBooks());
                ns.getNotificationView().renderNotifications(arrNotific);

                setTimeout(function () {
                    ns.getNotificationView().renderNotifications([]);
                }, 3000);

                console.log('The book was added');
            }, function () {
                // error
                console.log('The book was not added.');
            }
            );
    }

    function searchBooks() {
        var keyWords = this.getSearchFormView().getKeywords();
        this.getBookStorage().searchString = keyWords;
        //var books = this.getBookStorage().searchBooks(keyWords);
        this.getBookView().
            renderBooks(
            this.getBookStorage().getFilteredBooks()
            );
    }

    function onStarClick(idBook, newRating) {
        var ns = this;

        // TODO: Use promises
        this.getBookStorage().setRating(idBook, newRating).then(
            function (res) {
                if (!res) {
                    // error
                    ns.getBookView()
                        .renderBooks(ns.getBookStorage().getFilteredBooks());
                    ns.getNotificationView()
                        .showNotificationText('Rating could not be changed!');
                }
            }
        );


        // this.getBookStorage().setRating(idBook, newRating, function () {
        //     // successful
        //     console.log('Rating changed!');
        //     ns.getBookView().renderBooks(ns.getBookStorage().getFilteredBooks());
        // }, function () {
        //     // error
        //     this.getNotificationView()
        //         .showNotificationText('Rating could not be changed!');
        // }.bind(this));
    }

    function onMostPopularBtnClick() {
        this.getBookStorage().mostPopular = true;
        this.getBookView().renderBooks(this.getBookStorage().getFilteredBooks());
    }

    function onAllBooksBtnClick() {
        this.getBookStorage().mostPopular = false;
        this.getBookView().renderBooks(this.getBookStorage().getFilteredBooks());
    }

    return {
        onLoadDocument: onLoadDocument,
        onAddBookClick: onAddBookClick,
        searchBooks: searchBooks,
        onStarClick: onStarClick,
        onMostPopularBtnClick: onMostPopularBtnClick,
        onAllBooksBtnClick: onAllBooksBtnClick
    };
}());