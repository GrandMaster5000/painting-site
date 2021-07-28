'use strict';
import removeElemTrigger from "./removeElemTrigger";


function workModal(triggerSelector , modalSelector, closeSelector, closeClickOverlay = true, isRemoveTrigger = false) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector);

    function openModal(trigger, modal) {
       trigger.forEach(item => {
            item.addEventListener('click', () => {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; 
            });
       });
    }

    function closeModal(closeTrigger, modal, trigger) {
        closeTrigger.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                removeElemTrigger(trigger[0], isRemoveTrigger);
        });

        modal.addEventListener('click', (e) => {
           if(e.target === modal && closeClickOverlay) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                removeElemTrigger(trigger[0], isRemoveTrigger);
           }
        });

        document.body.addEventListener('keydown', e => {
            if(e.key == 'Escape') {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                removeElemTrigger(trigger[0], isRemoveTrigger);
            }
        });
    }

    

    openModal(trigger, modal);
    closeModal(close, modal, trigger);
}

export default workModal;