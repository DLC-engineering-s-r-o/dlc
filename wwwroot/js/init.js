/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Resources/Scripts/boxAnim.ts":
/*!**************************************!*\
  !*** ./Resources/Scripts/boxAnim.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initAnim = void 0;
function initAnim() {
    const aboutCards = document.querySelectorAll(".card");
    const cardsText = document.querySelectorAll(".card__number");
    let lastKnownScrollPosition = 0;
    let ticking = false;
    const animLength = 1000;
    function incrementNumbers(element, step, timeInterval) {
        let maxNumber = element.getAttribute('data-number');
        let cardNumber = 0;
        if (maxNumber) {
            let interval = setInterval(() => {
                element.innerText = cardNumber;
                if (cardNumber >= maxNumber)
                    clearInterval(interval);
                cardNumber = cardNumber + step;
            }, timeInterval);
        }
        element.removeAttribute('data-number');
    }
    function addClassToCards(scrollPos) {
        for (let i = 0; i < aboutCards.length; i++) {
            let card = aboutCards[i];
            let cardText = cardsText[i];
            let step = 1;
            let interval = animLength / 12;
            if (i == 1) {
                step = 100;
                interval = animLength / 11;
            }
            else if (i == 2)
                interval = animLength / 4;
            if (scrollPos >= card.offsetTop + window.innerHeight / 3) {
                card.classList.add("card--visible");
                incrementNumbers(cardText, step, interval);
            }
        }
    }
    document.addEventListener("scroll", () => {
        lastKnownScrollPosition = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                addClassToCards(lastKnownScrollPosition);
                ticking;
            });
            !ticking;
        }
    });
}
exports.initAnim = initAnim;


/***/ }),

/***/ "./Resources/Scripts/navigation.ts":
/*!*****************************************!*\
  !*** ./Resources/Scripts/navigation.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initNav = void 0;
const menuBtn = document.getElementById('menuBtn');
const menu = document.querySelector('.nav__menu');
const nav = document.querySelector('nav');
const navItems = document.querySelectorAll('.nav__item');
const htmlDoc = document.querySelector('body');
function toggleOpenMenuClasses() {
    menuBtn.classList.toggle('burger--open');
    menu.classList.toggle('nav__menu--open');
    nav.classList.toggle('nav--open');
    htmlDoc.classList.toggle('overflow-hidden');
}
function initNav() {
    menuBtn.addEventListener('click', () => {
        toggleOpenMenuClasses();
    });
    navItems.forEach(navItems => {
        navItems.addEventListener('click', () => {
            toggleOpenMenuClasses();
        });
    });
}
exports.initNav = initNav;


/***/ }),

/***/ "./Resources/Scripts/year.ts":
/*!***********************************!*\
  !*** ./Resources/Scripts/year.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setCurentYear = void 0;
function setCurentYear() {
    const years = document.querySelectorAll('time.year');
    years.forEach(year => {
        year.innerHTML = new Date().getFullYear().toString();
    });
}
exports.setCurentYear = setCurentYear;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***********************************!*\
  !*** ./Resources/Scripts/init.ts ***!
  \***********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const navigation_1 = __webpack_require__(/*! ./navigation */ "./Resources/Scripts/navigation.ts");
const boxAnim_1 = __webpack_require__(/*! ./boxAnim */ "./Resources/Scripts/boxAnim.ts");
const year_1 = __webpack_require__(/*! ./year */ "./Resources/Scripts/year.ts");
document.addEventListener("DOMContentLoaded", function () {
    (0, navigation_1.initNav)();
    (0, boxAnim_1.initAnim)();
    (0, year_1.setCurentYear)();
});

})();

/******/ })()
;
//# sourceMappingURL=init.js.map