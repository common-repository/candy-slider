!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){"use strict";r(/*! ./block-slider/block.slider.js */1)},
/*!******************************************!*\
  !*** ./src/block-slider/block.slider.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r(/*! ./style.scss */2),r(/*! ./editor.scss */3);var i=wp.i18n.__,c=wp.blocks.registerBlockType,s=wp.editor.MediaUpload;c("csgb/slider-block",{title:i("Candy Slider"),icon:"slides",category:"common",keywords:[i("Candy Slider"),i("slider"),i("carousel")],attributes:{id:{source:"attribute",selector:".candy-slider",attribute:"id"},slides:{source:"query",default:[],selector:".candy-slider__item",query:{image:{source:"attribute",selector:".slide-image-src",attribute:"src"},index:{source:"text",selector:"span.slide-index"}}}},edit:function(e){var t=e.attributes.slides;if(!e.attributes.id){var r="slider".concat(Math.floor(100*Math.random()));e.setAttributes({id:r})}var a=t.sort((function(e,t){return e.index-t.index})).map((function(r){return React.createElement("div",{className:"csgb-testimonial-block"},React.createElement("div",null,React.createElement("span",null,"Slide ",Number(r.index)+1,":"),React.createElement("span",{className:"remove-testimonial",onClick:function(){var n=t.filter((function(e){return e.index!=r.index})).map((function(e){return e.index>r.index&&(e.index-=1),e}));e.setAttributes({slides:n})}},React.createElement("i",{className:"fa fa-times"}))),React.createElement("div",{className:"csgb-slider"},React.createElement("div",{className:"csgb__picture"},React.createElement(s,{onSelect:function(a){var i=a.url,c=Object.assign({},r,{image:i});e.setAttributes({slides:[].concat(n(t.filter((function(e){return e.index!=r.index}))),[c])})},type:"image",value:r.image,render:function(a){var i=a.open;return r.image?React.createElement("div",{className:"csgb__image-wrap csgb__image-wrap--has-image"},e.isSelected&&React.createElement("div",{className:"csgb__picture__actions"},React.createElement("a",{href:"#",onClick:function(){var a=Object.assign({},r,{image:null});e.setAttributes({slides:[].concat(n(t.filter((function(e){return e.index!=r.index}))),[a])})}},"× Remove")),React.createElement("img",{className:"csgb__image",src:r.image,onClick:i})):React.createElement("div",{className:"csgb__image-wrap"},React.createElement("a",{href:"#",className:"csgb__select-image",onClick:i},"Select image"))}}))))}));return React.createElement("div",{className:e.className},a,React.createElement("button",{className:"add-more-slide",onClick:function(t){return e.setAttributes({slides:[].concat(n(e.attributes.slides),[{index:e.attributes.slides.length}])})}},React.createElement("svg",{"aria-hidden":"true",role:"img",focusable:"false",class:"dashicon dashicons-insert",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},React.createElement("path",{d:"M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"})),"Add a slide"))},save:function(e){var t=e.attributes,r=t.id,n=t.slides,a=n.map((function(e){return React.createElement("div",{key:e.index,className:"candy-slider__item swiper-slide",style:{backgroundImage:"url(".concat(e.image,")")}},React.createElement("img",{src:e.image,className:"slide-image-src",alt:"Hidden image for src.",style:{display:"none"}}),React.createElement("span",{className:"slide-index",style:{display:"none"}},e.index))}));return n.length>0?React.createElement("div",{id:r,className:"candy-slider swiper-container"},React.createElement("div",{className:"swiper-wrapper"},a),React.createElement("div",{className:"swiper-button-next"}),React.createElement("div",{className:"swiper-button-prev"}),React.createElement("div",{className:"swiper-pagination"})):null}})},
/*!*************************************!*\
  !*** ./src/block-slider/style.scss ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){},
/*!**************************************!*\
  !*** ./src/block-slider/editor.scss ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){}]);