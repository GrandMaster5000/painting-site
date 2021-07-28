'use strict';
import workModal from './modules/modal';
import loadPaitingStyles from './modules/loadPaitingStyles';
import tabs from './modules/tabs';


document.addEventListener("DOMContentLoaded", () => {

    workModal('.button-design', '.popup-design' , '.popup-design .popup-close');
    workModal('.button-consultation', '.popup-consultation' , '.popup-consultation .popup-close');
    workModal('.fixed-gift', '.popup-gift' , '.popup-gift .popup-close', true, true);
    loadPaitingStyles('.button-styles', '#styles .row');
    tabs('.portfolio-menu', '.portfolio-block', '.portfolio-no');
});