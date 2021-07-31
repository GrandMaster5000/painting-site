'use strict';
import workModal from './modules/modal';
import loadPaitingStyles from './modules/showContent';
import tabs from './modules/tabs';
import workHover from './modules/hover';
import workAccordion from './modules/accordion';
import workMenu from './modules/menu';


document.addEventListener("DOMContentLoaded", () => {

    workModal('.button-design', '.popup-design' , '.popup-design .popup-close');
    workModal('.button-consultation', '.popup-consultation' , '.popup-consultation .popup-close');
    workModal('.fixed-gift', '.popup-gift' , '.popup-gift .popup-close', true, true);
    loadPaitingStyles('.button-styles', '#styles .row');
    tabs('.portfolio-menu', '.portfolio-block', '.portfolio-no');
    workHover('.sizes-block', 'not-hide');
    workAccordion('.accordion-heading', '.accordion-block', 'ui-accordion-header-active', 'ui-accordion-content-active');
    workMenu('.burger', '.burger-menu');
});