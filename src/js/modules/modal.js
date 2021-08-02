'use strict';
import removeElemTrigger from "./removeElemTrigger";


const modal = (exceptionSelector) => {

    let isOpenModal = false;

    const allModals = document.querySelectorAll('[data-modal]'),
            exception = document.querySelector(exceptionSelector);

    allModals.forEach(modal => {
        if(modal != exception) {
            modal.classList.add('animate__animated', 'animate__fadeIn');
        }
    });

    function workModal(triggerSelector , modalSelector, closeSelector, closeClickOverlay = true, isRemoveTrigger = false, exception = false) {
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
        function openModal(trigger, modal, scrollWindow, exception) {
            if(exception) {
                exception.querySelector('.button-order').addEventListener('click', (e) => {
                    if(document.querySelector('#size').value != '' && document.querySelector('#material').value != '') {
                        modal.style.display = 'block';
                        document.body.style.overflow = 'hidden'; 
                        document.body.style.marginRight = `${scrollWindow}px`;
                        isOpenModal = true;
                    }
                });
            } 
            else {
                trigger.forEach(item => {
                     item.addEventListener('click', () => {
                         modal.style.display = 'block';
                         document.body.style.overflow = 'hidden'; 
                         document.body.style.marginRight = `${scrollWindow}px`;
                         isOpenModal = true;
                     });
                });
            }
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
    
        
    
        openModal(trigger, modal, scrollWindow, exception);
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
    workModal('.calc-form .button-order','.popup-design ', '.popup-design  .popup-close', true, false , exception);
    showModalByScroll('.fixed-gift');
};

export default modal;