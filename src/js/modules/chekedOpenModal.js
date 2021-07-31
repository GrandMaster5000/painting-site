'use strict';

function checkedOpenModal(modalsSelector) {
    const modals = document.querySelectorAll(modalsSelector);

    let boolean = false;
    modals.forEach(item => {
        if(getComputedStyle(item).display == 'block') {
            boolean = true;
        }
    });
    return boolean;
}

export default checkedOpenModal;