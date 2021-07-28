'use strict';

function workTabs(tabsCoverSelector, contentSelector, notElemSelector) {
    const tabsCover = document.querySelector(tabsCoverSelector),
          tabs = tabsCover.children,
          contents = document.querySelectorAll(contentSelector),
          notElem = document.querySelector(notElemSelector);

    let counter = 0;

    tabsCover.addEventListener('click', e => {
        let target = e.target;
        if(target && target.tagName == 'LI') {
            tabs.forEach(item => {
                if(item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });
            
            target.classList.add('active');
            contents.forEach(item => {
               hideElem(item);
                if(checkClass(target, item)) {
                   showElem(item);
                   counter++;
                }
            });

            if (counter == 0) {
                notElem.style.display = 'block';
            }
            counter = 0;
        }
    });

    function checkClass(checkingElem, verifiableElem) {
        if (verifiableElem.classList.contains(checkingElem.classList.item(0))) {
            return true;
        }
        return false;
    }

    function hideElem(elem) {
        elem.style.display = 'none';
        notElem.style.display = 'none';
    }
    function showElem(elem) {
        elem.style.display = 'block';
    }

}

export default workTabs;