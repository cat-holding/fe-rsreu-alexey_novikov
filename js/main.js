(function (init) {
    'use strict';

    var menuBlock = `
        <ul id="topmenu">
            <li>
                <menuitem><a href="#">Menu 1</a></menuitem>
                <menuitem><a href="#">Menu 2</a></menuitem>
                <menuitem><a href="#">Menu 3</a></menuitem>
                <menuitem><a href="#">Menu 4</a></menuitem>
                <menuitem><a href="#">Menu 5</a></menuitem>
                <menuitem><a href="#">Top menu 1</a></menuitem>
            </li>
            <li>
                <menuitem><a href="#">Menu 6</a></menuitem>
                <menuitem><a href="#">Menu 7</a></menuitem>
                <menuitem><a href="#">Menu 8</a></menuitem>
                <menuitem><a href="#">Menu 9</a></menuitem>
                <menuitem><a href="#">Menu 10</a></menuitem>
                <menuitem><a href="#">Top menu 2</a></menuitem>
            </li>
	    </ul>
    `;

    document.body.insertAdjacentHTML('afterBegin', menuBlock);

    document
        .querySelectorAll('*')
        .forEach(function (item) {
            item.style.cssText = `
            margin: 0;
            padding: 0;
            text-decoration: none;
            border: 0;
            outline: 0;
            font-family: "Proxima Nova Rg";
        `;
        });

    document
        .querySelectorAll('a')
        .forEach(function (item) {
            item.style.cssText = `
            color: #fff;
            text-decoration: none;
        `;
        });

    document
        .getElementById('topmenu')
        .style.cssText = `
            float: left;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            height: 300px;
    `;

    document
        .querySelectorAll('#topmenu li')
        .forEach(function (item) {
            item.style.cssText = `
            display: flex;
            flex-direction: column;
            background: #35baf6;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            margin: 0 -190px 0 200px;
        `;
        });

    document
        .querySelectorAll('#topmenu menuitem')
        .forEach(function (item) {
            item.style.cssText = `
            display: none;
            justify-content: center;
            color: white;
            padding: 5px 15px;
            cursor: pointer;
        `;
        });

    document
        .querySelectorAll('#topmenu menuitem:last-child')
        .forEach(function (item) {
            item.style.display = 'flex';
            item.style.borderTop = '2px solid #7bb9f9';
        });

    function toggleStyle(elem, style, a, b) {
        elem.style[style] = elem.style[style] == b ? a : b;
    }

    function onLastMenuItemClick(menuItems) {
        return function () {
            menuItems.forEach(function (el) {
                toggleStyle(el, 'display', 'flex', 'none');
            });
        }
    }

    function onMenuItemHover() {
        return function () {
            toggleStyle(this, 'boxShadow', '0px 2px 6px 0px #a8a9af', '');
        }
    }

    function onMenuItemBgColorHover() {
        return function () {
            toggleStyle(this, 'backgroundColor', '#7a82e2', '');
        }
    }

    document
        .querySelectorAll('#topmenu li')
        .forEach(function (itemLi) {
            var menuItems = itemLi.querySelectorAll('menuitem:not(:last-child)');

            // Hover effect
            itemLi.addEventListener('mouseover', onMenuItemHover());
            itemLi.addEventListener('mouseout', onMenuItemHover());

            // Dropdown effect
            itemLi
                .querySelector('menuitem:last-child')
                .addEventListener('click', onLastMenuItemClick(menuItems));

            // Background color effect
            menuItems.forEach(function (el) {
                el.addEventListener('mouseover', onMenuItemBgColorHover());
                el.addEventListener('mouseout', onMenuItemBgColorHover());
            });
        });
}());
