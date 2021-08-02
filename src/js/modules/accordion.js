'use strict';

function workAccordion(triggerSelector, contentSelector, activeTriggerClass, activeContentClass) {
    const triggers = document.querySelectorAll(triggerSelector),
    contents = document.querySelectorAll(contentSelector);

    contents.forEach(item => {
        item.style.display = 'none';
        // item.style.transition = '.5s all';
        // item.style.opacity = '0';
       
    });

    

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            if(trigger.classList.contains(activeTriggerClass)) {
                disableContent(trigger, trigger.nextElementSibling);
            } else {
                activateContent(trigger, trigger.nextElementSibling);
            }
        });
    });


    function activateContent(trigger, content) {
        trigger.classList.add(activeTriggerClass);
        trigger.style.marginBottom = '4rem';
        

        content.style.display = 'block';
        content.classList.add('animate__animated', 'animate__fadeIn');
        content.classList.remove('animate__fadeOut');
        content.classList.add(activeContentClass);
    }

    function disableContent(trigger, content) {
        trigger.classList.remove(activeTriggerClass);

        content.classList.remove('animate__fadeIn');
        content.style.display = 'none';
        
        content.classList.remove(activeContentClass);
    }
}

export default workAccordion;