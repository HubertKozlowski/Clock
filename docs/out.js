!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),$(document).ready(function(){!function(){for(var e=new Date,t=e.getSeconds(),n=e.getMinutes(),r=[{hand:"hourhand",angle:30*e.getHours()+n/2},{hand:"minutehand",angle:6*n},{hand:"secondhand",angle:6*t}],o=0;o<r.length;o++)for(var a=document.querySelectorAll("."+r[o].hand),l=0;l<a.length;l++)a[l].style.webkitTransform="rotateZ("+r[o].angle+"deg)",a[l].style.transform="rotateZ("+r[o].angle+"deg)","minutehand"===r[o].hand&&a[l].parentElement.setAttribute("data-second-angle",r[o+1].angle)}(),function(){var e=document.querySelector(".minutes-container"),t=e.getAttribute("data-second-angle");if(t>0){var n=1e3*((360-t)/6+.1);setTimeout(function(){!function(e){e.style.webkitTransform="rotateZ(6deg)",e.style.transform="rotateZ(6deg)",setInterval(function(){void 0===e.angle?e.angle=12:e.angle+=6,e.style.webkitTransform="rotateZ("+e.angle+"deg)",e.style.transform="rotateZ("+e.angle+"deg)"},6e4)}(e)},n)}}(),function(){var e=document.querySelector(".seconds-container");setInterval(function(){void 0===e.angle?e.angle=6:e.angle+=6,e.style.webkitTransform="rotateZ("+e.angle+"deg)",e.style.transform="rotateZ("+e.angle+"deg)"},1e3)}()})},function(e,t,n){}]);