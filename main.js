(()=>{var e={562:()=>{const e=document.querySelectorAll(".cell"),t=document.querySelector(".vin"),o=document.querySelector(".lose");console.log(o);const n=document.createElement("img");n.src="https://raw.githubusercontent.com/netology-code/ahj-homeworks/master/dom/pic/goblin.png",n.alt="тут",n.classList.add("goblin"),console.log(e),console.log(n);let r=0,l=0;function c(){l+=1,o.textContent=l,5===l&&(alert("GameOver"),r=0,l=0,t.textContent=r,o.textContent=l)}t.textContent=r,o.textContent=l,window.setInterval((()=>{const t=Math.round(Math.random()*(e.length-1));e[t].insertBefore(n,null)}),1e3),n.addEventListener("click",(function(){r+=1,l-=1,t.textContent=r,n.remove()}));for(let t=0;t<e.length;t++)console.log(e[t]),e[t].addEventListener("click",c)}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,o),l.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(562)})()})();