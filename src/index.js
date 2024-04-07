import html from "./index.html";
import './style.css';
import { initPageLoad } from './home.js';
import { menuPage } from './menu.js';
import { aboutPage } from './about.js';

initPageLoad();

const tabSwitching = (loadPage) => {
    const currentPage = document.querySelector('.page');
    currentPage.remove();
    loadPage();
}

const headerBtnHandler = () => {
    const homeBtn = document.querySelector('.homeBtn');
    const menuBtn = document.querySelector('.menuBtn');
    const aboutBtn = document.querySelector('.aboutBtn');

    homeBtn.addEventListener('click', () => {
        console.log('LOADED');
        tabSwitching(initPageLoad);
    });

    menuBtn.addEventListener('click', () => {
        tabSwitching(menuPage);
    });

    aboutBtn.addEventListener('click', () => {
        tabSwitching(aboutPage);
    });
}

headerBtnHandler();