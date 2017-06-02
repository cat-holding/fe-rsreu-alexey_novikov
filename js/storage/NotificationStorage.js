function NotificationStorage() {
    this.data = [
        // new Notification(9, new Date('1:40 5/15/1017')),
        // new Notification(10, new Date('1:35 5/15/1017'))
    ];
}

NotificationStorage.prototype = (function () {
    'use strict';

    function addNotification(idBook) {
        this.data.unshift(new Notification(idBook));
    }

    function getNotification(count) {
        return this.data.slice(0, count || 2);
    }

    return {
        constructor: NotificationStorage,
        addNotification: addNotification,
        getNotification: getNotification
    };
}());