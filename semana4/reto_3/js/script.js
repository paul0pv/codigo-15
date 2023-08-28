'use strict';
AOS.init();

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    const navIconMenu = document.getElementById('navIconMenu');
    const navIconClose = document.querySelector('#navIconClose');
    const menuLinks = document.querySelectorAll('.menu__link');

    const closeMenu = () => {
        nav.classList.remove('nav--open');
    };

    document.addEventListener('scroll', () => {
        header.classList.toggle('header--scroll', scrollY > 0);
        nav.classList.toggle('nav--scroll', scrollY > 0);
    });


    navIconMenu.addEventListener('click', () => {
        nav.classList.add('nav--open');
    });

    navIconClose.addEventListener('click', closeMenu);

    menuLinks.forEach((element) => {
        element.addEventListener('click', closeMenu);
    });
});

