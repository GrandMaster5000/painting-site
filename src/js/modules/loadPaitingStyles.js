'use strict';
import removeElemTrigger from "./removeElemTrigger";

function loadPaitingStyles(triggerSelector, stylesContainerSelector) {
    const trigger = document.querySelector(triggerSelector),
          styles = document.querySelector(stylesContainerSelector).children;


    trigger.addEventListener('click', () => {
        removeElemTrigger(trigger, true);
        styles.forEach(item => {
            if(item.classList.contains('hidden-lg')) {
                item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
                item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            }
        });

    });
   
}

export default loadPaitingStyles;