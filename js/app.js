(function () {
    'use strict';

    // Views
    var bookView = new BookView();
    var filterPanelView = new FilterPanelView();
    var notificationView = new NotificationView();
    var searchFormView = new SearchFormView();
    var windowAddBookView = new WindowAddBookView();
    // Storages
    var bookStorage = new BookStorage();
    var notificationStorage = new NotificationStorage();
    // Controllers
    var controller = new Controller();
    window.kk = bookStorage;
    controller
        .setBookView(bookView)
        .setFilterPanelView(filterPanelView)
        .setNotificationView(notificationView)
        .setSearchFormView(searchFormView)
        .setWindowAddBookView(windowAddBookView)
        .setBookStorage(bookStorage)
        .setNotificationStorage(notificationStorage);
    bookView
        .setController(controller);
    filterPanelView
        .setController(controller);
    searchFormView
        .setController(controller);
    addEventListener('DOMContentLoaded', controller.onLoadDocument.bind(controller));
    document.querySelector('.box button.add_book')
        .addEventListener('click', controller.onAddBookClick.bind(controller));

window.kk = JSON.stringify(bookStorage.data);

// fetch("rateBook",
//     {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         method: "POST",
//         body: JSON.stringify({ idBook: 1, stars: 2 })
//     })
//     .then(function (res) { 
//         return res.json();
//     })
//     .then(function (books) { 
//         console.log(books);
//     })
//     .catch(function (res) { 
//         console.log(res) 
//     });


// fetch("getBooks",
//     {
//         method: 'GET'
//     })
//     .then(function (res) { 
//         return res.json();
//     })
//     .then(function (books) { 
//         console.log(books);
//     })
//     .catch(function (res) { 
//         console.log(res) 
//     });

// fetch("addBook",
//     {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         method: "POST",
//         body: JSON.stringify(new Book(0, 'New BOOK', '#######', 'img/book1.jpg', 1.0))
//     })
//     .then(function (res) { 
//         return res.json();
//     })
//     .then(function (books) { 
//         console.log(books);
//     })
//     .catch(function (res) { 
//         console.log(res) 
//     });


}());