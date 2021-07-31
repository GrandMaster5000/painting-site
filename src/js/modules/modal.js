'use strict';
import removeElemTrigger from "./removeElemTrigger";
import calcScroll from "./calcScroll";
import checkedOpenModal from './chekedOpenModal';


function workModal(triggerSelector , modalSelector, closeSelector, closeClickOverlay = true, isRemoveTrigger = false) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          scrollWindow = calcScroll();


    if(modalSelector == '.popup-consultation') {
        showModalByTime(modal, 5000);
    }

    function showModalByTime(modal, time) {
        setTimeout(() => {
            if(!checkedOpenModal('[data-modal]')) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }, time);
    }

    function openModal(trigger, modal, scrollWindow) {
       trigger.forEach(item => {
            item.addEventListener('click', () => {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; 
                document.body.style.marginRight = `${scrollWindow}px`;
            });
       });
    }

    function closeModal(closeTrigger, modal, trigger) {
        closeTrigger.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                removeElemTrigger(trigger[0], isRemoveTrigger);
                document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) => {
           if(e.target === modal && closeClickOverlay) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                removeElemTrigger(trigger[0], isRemoveTrigger);
                document.body.style.marginRight = `0px`;
           }
        });

        document.body.addEventListener('keydown', e => {
            if(e.key == 'Escape') {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                removeElemTrigger(trigger[0], isRemoveTrigger);
                document.body.style.marginRight = `0px`;
            }
        });
    }

    

    openModal(trigger, modal, scrollWindow);
    closeModal(close, modal, trigger);
}

export default workModal;