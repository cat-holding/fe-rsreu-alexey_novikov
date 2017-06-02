function SearchFormView(controller) {
    var _controller = controller;

    this.setController = function (controller) {
        _controller = controller;
    };

    this.getController = function () {
        return _controller;
    }
}

SearchFormView.prototype = (function () {
    'use strict';

    function renderSearchForm() {
        var html = 
            `<form class="search">
                <input class="search__input" type="text" placeholder="Enter Keywords">
            </form>`;
        var formEl = document.createElement('form');
        var inputEl = document.createElement('input');
        formEl.classList = 'search';
        inputEl.classList = 'search__input';
        inputEl.setAttribute('type', 'text');
        inputEl.setAttribute('placeholder', 'Enter Keywords');
        inputEl.addEventListener('keyup', this.getController().searchBooks.bind(this.getController()));
        formEl.appendChild(inputEl);
        document.querySelector('.container-fluid__navigation').insertAdjacentElement('beforeend', formEl);
    }

    function getKeywords() {
        return document.querySelector('input.search__input').value;
    }

    function setKeywords(string){
        document.querySelector('input.search__input').value = string || '';
    }

    return {
        constructor: SearchFormView,
        renderSearchForm: renderSearchForm,
        getKeywords: getKeywords,
        setKeywords: setKeywords
    };
}());