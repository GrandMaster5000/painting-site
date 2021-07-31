'use strict';

function workAccordion(triggerSelector, contentSelector, activeTriggerClass, activeContentClass) {
    const triggers = document.querySelectorAll(triggerSelector),
    contents = document.querySelectorAll(contentSelector);

    contents.forEach(item => {
        item.style.display = 'none';
        item.style.transition = '.5s all';
        item.style.opacity = '0';
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
        setTimeout(() => {content.style.opacity = '1';}, 5);
        content.classList.add(activeContentClass);
    }

    function disableContent(trigger, content) {
        trigger.classList.remove(activeTriggerClass);

        setTimeout(() => {content.style.display = 'none';}, 150);
        content.style.opacity = '0';
        content.classList.remove(activeContentClass);
    }
}

export default workAccordion;