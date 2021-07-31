'use strict';
import modal from './modules/modal';
import loadPaitingStyles from './modules/showContent';
import tabs from './modules/tabs';
import workHover from './modules/hover';
import workAccordion from './modules/accordion';
import workMenu from './modules/menu';


document.addEventListener("DOMContentLoaded", () => {

    modal();
    loadPaitingStyles('.button-styles', '#styles .row');
    tabs('.portfolio-menu', '.portfolio-block', '.portfolio-no');
    workHover('.sizes-block', 'not-hide');
    workAccordion('.accordion-heading', '.accordion-block', 'ui-accordion-header-active', 'ui-accordion-content-active');
    workMenu('.burger', '.burger-menu');
});