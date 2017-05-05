(function (init) {
    'use strict';

    var articleBlock = `
        <div class="article">
            <h3 class="article__title">Header</h3>
            <div class="article__content">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </div>
        </div>        
    `;

    document.body.insertAdjacentHTML('beforeEnd', articleBlock);

    document
        .querySelector('.article')
        .style.cssText = `
        width: 90%;
        margin: 30px auto;
        border: 2px solid #89d9ca;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0px 0px 0px 5px #a0dfd1;
    `;


    document
        .querySelector('.article__title')
        .style.cssText = `
        background: #fbc92b;
        width: 100%;
        padding: 5px 10px;
        box-sizing: border-box;
    `;

    var articleContent = document.querySelector('.article__content');

    articleContent.style.cssText = `
        position: relative;
        background: #edecde;
        color: #668897;
        padding: 15px 10px;
        box-sizing: border-box;
    `;

    var after = document.createElement('div');

    after
        .style.cssText = `
        position: absolute;
        top: 0;
        display: block;
        width: 0;
        height: 0;
        border-width: 10px 10px 0 10px;
        border-style: solid;
        border-color: #ffba00 transparent transparent transparent;
    `;
    articleContent.appendChild(after);
}())

