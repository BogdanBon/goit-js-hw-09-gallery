parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/icon-close.svg":[["icon-close.bb7ed7e5.svg","cAq2"],"cAq2"]}],"sNn3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var e=n(require("./ js/app"));function n(e){return e&&e.__esModule?e:{default:e}}const t=document.querySelector(".js-gallery"),o=r(e.default);function r(e){return e.map(({preview:e,original:n,description:t})=>`<li class="gallery__item">\n  <a\n    class="gallery__link"\n    href="#"\n  >\n    <img\n      class="gallery__image"\n      src="${e}"\n      data-source="${n}"\n      alt="${t}"\n    />\n  </a>\n</li>`).join("")}t.insertAdjacentHTML("beforeend",o),t.addEventListener("click",d);const i=document.querySelector(".lightbox__image"),s=document.querySelector(".gallery__link"),c=document.querySelector(".lightbox"),a=[];for(const f of e.default)a.push(f.original);let l=a.indexOf(i.src);function d(e){e.target.classList.contains("gallery__image")&&(c.classList.add("is-open"),i.src=e.target.dataset.source,i.alt=e.target.alt,window.addEventListener("keydown",u),window.addEventListener("keydown",y),u(e),y(e))}function u(e){39===e.keyCode&&l<a.length-1&&(i.src=a[l+=1])}function y(e){37===e.keyCode&&l>0&&(i.src=a[l-=1])}const g=document.querySelector(".lightbox__button");g.addEventListener("click",m);const _=document.querySelector(".lightbox__overlay");function m(){c.classList.remove("is-open"),window.removeEventListener("keydown",u),window.removeEventListener("keydown",y),i.src="",i.alt=""}function w(e){27===e.keyCode&&m()}_.addEventListener("click",m),window.addEventListener("keydown",w);
},{"./sass/main.scss":"clu1","./ js/app":"sNn3"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery/src.efb041cc.js.map