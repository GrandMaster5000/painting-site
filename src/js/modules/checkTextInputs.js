'use strict';

const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(item => {
        item.addEventListener('keypress', e => {
            if(e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
        item.addEventListener('input', e => {
            e.target.value = e.target.value.replace(/[a-z]/gi,'');
        });
    });
};

export default checkTextInputs;