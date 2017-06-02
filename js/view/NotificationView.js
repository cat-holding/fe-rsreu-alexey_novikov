function NotificationView(controller) {
    var _controller = controller;

    this.setController = function (controller) {
        _controller = controller;
    };

    this.getController = function () {
        return _controller;
    }
}

NotificationView.prototype = (function () {
    'use strict';

    function renderNotifications(notifications) {
        var html = '';

        for (var key in notifications) {
            var data = notifications[key];
            var interval = new Date(Date.now() - data.date);
            var dateTitle = interval.getUTCDate() - 1 > 1 ? interval.getUTCDate() - 1 + ' days' :
                (interval.getUTCHours() > 1 ? interval.getUTCHours() + ' hours' : interval.getUTCMinutes() + ' minutes');

            html +=
                `<li>
                    <p>
                        You added <a href="#">${data.title}</a> by
                        <a href="#">${data.author}</a> to your
                        <a href="#">${data.section}</a>.
                    </p>
                    <time datetime="${data.date}">${dateTitle} ago</time>
                </li>`;
        }

        document.querySelector('.box.recent ul').innerHTML = html;
    }

    function showNotificationText(text){
        alert(text);
    }

    return {
        constructor: NotificationView,
        renderNotifications: renderNotifications,
        showNotificationText: showNotificationText
    };
}());