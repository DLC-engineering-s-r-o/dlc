(()=>{"use strict";var e={898:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initAnim=void 0,t.initAnim=function(){const e=document.querySelectorAll(".card");let t=0;document.addEventListener("scroll",(()=>{t=window.scrollY,window.requestAnimationFrame((()=>{!function(t){for(let n=0;n<e.length;n++){let i=e[n],o=1,l=50;1==n?(o=100,l=100):2==n&&(l=1e3/3),t>=i.offsetTop+window.innerHeight/3&&i.classList.add("card--visible")}}(t)}))}))}},629:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initEmail=void 0,t.initEmail=function(){const e=document.getElementById("fullName"),t=document.getElementById("phone"),n=document.getElementById("email"),i=document.getElementById("msg"),o=document.getElementById("submitBtn");let l="",r="",d="",a="";o.addEventListener("click",(()=>{e.value&&(l=e.value),t.value&&(d=t.value),n.value&&(r=n.value),i.value&&(a=i.value),""!=l&&""!=r&&""!=a?window.location.href=`https://dlcafsendgrid20220328153355.azurewebsites.net/api/SendEmail?fullName=${l}&email=${r}&phone=${d}&body=${a}&website=DLC management`:console.log("%cPlease fill in the required fields!","color:red;")}))}},39:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initNav=void 0;const n=document.getElementById("menuBtn"),i=document.querySelector(".nav__menu"),o=document.querySelector("nav"),l=document.querySelectorAll(".nav__item"),r=document.querySelector("body");function d(){n.classList.toggle("burger--open"),i.classList.toggle("nav__menu--open"),o.classList.toggle("nav--open"),r.classList.toggle("overflow-hidden")}t.initNav=function(){n.addEventListener("click",(()=>{d()})),l.forEach((e=>{e.addEventListener("click",(()=>{d()}))}))}},226:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setCurentYear=void 0,t.setCurentYear=function(){document.querySelectorAll("time.year").forEach((e=>{e.innerHTML=(new Date).getFullYear().toString()}))}}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var l=t[i]={exports:{}};return e[i](l,l.exports,n),l.exports}(()=>{const e=n(39),t=n(898),i=n(226),o=n(629);document.addEventListener("DOMContentLoaded",(()=>{(0,e.initNav)(),(0,t.initAnim)(),(0,i.setCurentYear)(),(0,o.initEmail)()}))})()})();
//# sourceMappingURL=init.js.map