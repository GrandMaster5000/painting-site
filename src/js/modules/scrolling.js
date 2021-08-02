'use strict';

const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop > 1650) {
            upElem.classList.remove('animate__fadeOut');
            upElem.classList.add('animate__animated', 'animate__fadeIn');
        } else {
            upElem.classList.remove('animate__fadeIn');
            upElem.classList.add('animate__fadeOut');
        }
    });

    const smoothLinks = document.querySelectorAll('a[href^="#"]');
        smoothLinks.forEach(smoothLink => {
            smoothLink.addEventListener('click', (e) => {
                e.preventDefault();
                const id = smoothLink.getAttribute('href');

                if(document.querySelector(id)) {
                    document.querySelector(id).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        

};

export default scrolling;