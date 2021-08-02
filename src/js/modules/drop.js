'use strict';

const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input =>{
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) {
        item.closest('.file_upload').querySelector('button').style.border = '2px dashed red';
        item.closest('.file_upload').querySelector('button').style.color = 'red';
    }

    function unHighlight(item) {
        item.closest('.file_upload').querySelector('button').style.border = '2px dashed #c51abb';
        item.closest('.file_upload').querySelector('button').style.color = '#c51abb';
    }

    ['dragenter',  'dragover'].forEach(eventName => {
        fileInputs.forEach(input =>{
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave',  'drop'].forEach(eventName => {
        fileInputs.forEach(input =>{
            input.addEventListener(eventName, () => unHighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots;
            let arr =  input.files[0].name.split('.');
            arr[0].length > 7 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;
        });
    });

};

export default drop;

