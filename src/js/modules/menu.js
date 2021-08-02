'use strict';

function workMenu(hambergerSelector, menuSelector) {
    const hamburger = document.querySelector(hambergerSelector),
          menu = document.querySelector(menuSelector);

    function openMenu(menu) {
         menu.style.display = 'block';
    }

    function closeMenu(menu) {   
        menu.style.display = 'none';
    }

    hamburger.addEventListener('click', () => {
        if(document.documentElement.clientWidth <= 992 && getComputedStyle(menu).display == 'none') {
            openMenu(menu);
        } 
        else if(getComputedStyle(menu).display == 'block') {
            closeMenu(menu);
        }
    });

    window.addEventListener('resize', () => {
        if(document.documentElement.clientWidth > 992) {
            closeMenu(menu);
        }
    });
}

export default workMenu;