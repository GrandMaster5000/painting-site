'use strict';
import removeElemTrigger from "./removeElemTrigger";


const modal = () => {

    let isOpenModal = false;

    const allModals = document.querySelectorAll('[data-modal]');

    allModals.forEach(modal => {
        modal.classList.add('animate__animated', 'animate__fadeIn');
    });

    function workModal(triggerSelector , modalSelector, closeSelector, closeClickOverlay = true, isRemoveTrigger = false) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              scrollWindow = calcScroll();
    
    
        if(modalSelector == '.popup-consultation') {
            showModalByTime(modal, 60000);
        }
    
        function showModalByTime(modal, time) {
            setTimeout(() => {
                if(!checkedOpenModal()) {
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    isOpenModal = true;
                }
            }, time);
        }
    
        function openModal(trigger, modal, scrollWindow) {
           trigger.forEach(item => {
                item.addEventListener('click', () => {
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden'; 
                    document.body.style.marginRight = `${scrollWindow}px`;
                    isOpenModal = true;
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

    function checkedOpenModal() {
        let boolean = false;
        allModals.forEach(item => {
            if(getComputedStyle(item).display == 'block') {
                boolean = true;
            }
        });
        return boolean;
    }

    function calcScroll() {
        let div = document.createElement('div');
    
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
    
        document.body.appendChild(div);
    
        let scrollWidth = div.offsetWidth - div.clientWidth;
    
        div.remove();
    
        return scrollWidth;
    }
    
    function showModalByScroll(selector) {
        window.addEventListener('scroll', () => {
            const documentHeight = document.documentElement.scrollHeight,
            currentHeight = window.pageYOffset + document.documentElement.clientHeight,
            isScrollEnd =  Math.abs(documentHeight - currentHeight) < 10;

            if(!isOpenModal && isScrollEnd) {
                document.querySelector(selector).click();
            }
        });
    }

    workModal('.button-design', '.popup-design' , '.popup-design .popup-close');
    workModal('.button-consultation', '.popup-consultation' , '.popup-consultation .popup-close');
    workModal('.fixed-gift', '.popup-gift' , '.popup-gift .popup-close', true, true);
    showModalByScroll('.fixed-gift');
};

export default modal;