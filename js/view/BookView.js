function BookView(controller) {
    var _controller = controller;

    this.setController = function (controller) {
        _controller = controller;
    };

    this.getController = function () {
        return _controller;
    }
}

BookView.prototype = (function () {
    'use strict';

    function _onStarClick (event){
        var input = event.target.previousSibling;
        var newRating = input.getAttribute('rating');
        var idBook = input.getAttribute('idBook');
        
        this.getController().onStarClick.call(this.getController(), idBook, newRating);

        return false;
    }

    function renderBooks(books) {
        var divContent = document.querySelector('.container-fluid .content');

        divContent.innerHTML = '';

        for (var key in books) {
            var data = books[key];
            var idBook = key;
            var divBook = document.createElement('div');
            var divStar;

            divBook.className = 'book';
            divBook.innerHTML = 
                    `<img class="book__image" src="${data.image}" alt="${data.title}">
                    <h3 class="book__title">${data.title}</h3>
                    <span class="book__author">by ${data.author}</span>
                    <div class="stars"></div>`;
            divStar = divBook.getElementsByClassName('stars')[0];

            for (var idElStar = 10, rating = 5.0; idElStar > 0; idElStar-- , rating -= 0.5) {
                var attrId = `stars__star none star-${idElStar}`;
                var inputStar;
                var labelStar;

                inputStar = document.createElement('input');
                labelStar = document.createElement('label');
                inputStar.className = attrId;
                inputStar.setAttribute('id', `star${data.idBook}-${idElStar}`);
                inputStar.setAttribute('type', 'radio');
                inputStar.name = `star${data.idBook}`;
                inputStar.setAttribute('idBook', data.idBook);
                inputStar.setAttribute('rating', rating);
                labelStar = document.createElement('label');
                labelStar.className = `stars__lbl-star star-${idElStar}`;
                labelStar.setAttribute('for', inputStar.id);
                labelStar.addEventListener('click', _onStarClick.bind(this));

                if (data.stars == rating) {
                    inputStar.setAttribute('checked', '');
                }

                divStar.appendChild(inputStar);
                divStar.appendChild(labelStar);
            }

            divContent.appendChild(divBook);
        }
    }

    return {
        constructor: BookView,
        renderBooks: renderBooks
    };
}());