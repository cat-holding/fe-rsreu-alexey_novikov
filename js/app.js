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
}());