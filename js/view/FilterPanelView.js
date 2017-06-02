function FilterPanelView(controller) {
    var _controller = controller;

    this.setController = function (controller) {
        _controller = controller;
    };

    this.getController = function () {
        return _controller;
    }
}

FilterPanelView.prototype = (function () {
    'use strict';

    function _onBtnFilterClick (event){
        var divParent = event.target.parentElement;

        divParent.querySelector('.filters__button--active').classList.remove('filters__button--active');
        event.target.classList += ' filters__button--active';
    }

    function renderFilterPanel (){
        var container = document.querySelector('.container-fluid__navigation');
        var divFilterBox = document.createElement('div');
        
        divFilterBox.className = 'filters';
        divFilterBox.innerHTML =
            `<a href="#" class="filters__button btn-all-books filters__button--active">All Books</a>
            <a href="#" class="filters__button">Most Recent</a>
            <a href="#" class="filters__button btn-most-popular">Most Popular</a>
            <a href="#" class="filters__button">Free Books</a>`;
        [].forEach.call( divFilterBox.querySelectorAll('.filters__button'), function(el) {
            el.addEventListener('click', _onBtnFilterClick);
        });
        divFilterBox.querySelector('.btn-all-books')
            .addEventListener('click', this.getController().onAllBooksBtnClick.bind(this.getController()));
        divFilterBox.querySelector('.btn-most-popular')
            .addEventListener('click', this.getController().onMostPopularBtnClick.bind(this.getController()));
        container.insertAdjacentElement('afterbegin', divFilterBox);
    }

    return {
        constructor: FilterPanelView,
        renderFilterPanel: renderFilterPanel
    };
}());