'use strict';
import modal from './modules/modal';
import loadPaitingStyles from './modules/showContent';
import tabs from './modules/tabs';
import workHover from './modules/hover';
import workAccordion from './modules/accordion';
import workMenu from './modules/menu';
import Swiper from 'swiper/bundle';



document.addEventListener("DOMContentLoaded", () => {

    modal();
    loadPaitingStyles('.button-styles', '#styles .row');
    tabs('.portfolio-menu', '.portfolio-block', '.portfolio-no');
    workHover('.sizes-block', 'not-hide');
    workAccordion('.accordion-heading', '.accordion-block', 'ui-accordion-header-active', 'ui-accordion-content-active');
    workMenu('.burger', '.burger-menu');
   
    const mainSwiper = new Swiper( '.main-slider', {
        direction: 'vertical',
        loop: true,
        height: 700,
        autoplay: {
          delay: 3000
        }
    });

    const feedBackSwiper = new Swiper(".feedback-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    navigation: {
    nextEl: '.main-next-btn',
        prevEl: '.main-prev-btn',
    },
  });
  


 

  
   
});