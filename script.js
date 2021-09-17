'use strict';

const naviTabs = document.querySelectorAll('.navbar li'),
    naviBar = document.querySelector('.navbar');

function hideActive() {
    naviTabs.forEach(tab => {
        tab.classList.remove('active');
    });
}

function activeTab() {
    naviBar.addEventListener('click', (e) => {
        const target = e.target;
        naviTabs.forEach(tab => {
            if (tab === target) {
                hideActive();
                target.classList.add('active');
            }
        });
    });
}

activeTab();
