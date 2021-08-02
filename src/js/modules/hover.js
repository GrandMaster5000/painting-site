'use strict';

function workHover(wrapperContentSelector, notHideElemClass) {
    const wrapperContent = document.querySelectorAll(wrapperContentSelector);
               
    let img,
    src;

    wrapperContent.forEach(item => {
        item.addEventListener('pointerover', () => {
            item.children.forEach(item => {
                if(item.tagName == 'IMG') {
                    img = item;
                    src = img.getAttribute('src');
                } else if (item.tagName == 'P' && !item.classList.contains(notHideElemClass)) {
                    item.style.visibility = 'hidden';
                }
            });
    
            
            img.setAttribute('src', `${src.slice(0,src.length - 4)}-1.png`);
    
        });
    });

   wrapperContent.forEach(item => {
        item.addEventListener('pointerout', () => {
            img.setAttribute('src', `${src}`);
            item.children.forEach(item => {
                item.style.visibility = '';
            });
        });
   });
}

export default workHover;