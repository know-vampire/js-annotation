!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).JsMark=t()}(this,(function(){"use strict";var e;function t(n){let o=[],r=n.childNodes;for(let n=0;n<r.length;n++){let l=r[n];l.nodeType!==e.TEXT_NODE?o.push(...t(l)):o.push(l)}return o}function n(e,n){let o=t(n),r=o.indexOf(e),l=0;for(let e=0;e<r;e++)o[e]&&null!==o[e].nodeValue&&(l+=o[e].nodeValue.length);return l}function o(e,n){let o=null,r=0,l=t(e);for(let e=0;e<l.length;e++)if(l[e]&&null!==l[e].nodeValue&&(r+=l[e].nodeValue.length),n<=r){o=l[e];break}return o}!function(e){e[e.ELEMENT_NODE=1]="ELEMENT_NODE",e[e.TEXT_NODE=3]="TEXT_NODE"}(e||(e={}));var r={isCover:!0};return class{constructor(e){var t,n;if(console.warn(3434),this._element=e.el,this._selection=window.getSelection(),1!==this._element.nodeType)throw new Error("\u8bf7\u6302\u8f7ddom\u8282\u70b9");if(!this._selection)throw new Error("\u6d4f\u89c8\u5668\u6682\u4e0d\u652f\u6301\u6807\u6ce8\uff0c\u8bf7\u67e5\u770b\u6587\u6863\u652f\u6301\u6d4f\u89c8\u5668\u7248\u672c");r.isCover=null!==(n=null===(t=null==e?void 0:e.options)||void 0===t?void 0:t.isCover)&&void 0!==n?n:r.isCover,this._onMouseUp=null,this._onClick=null,this._onSelected=null,this.onSelected=null,this.onClick=null,this._initEvent(),this._addEvent()}_initEvent(){let e=this;e._onMouseUp=function(t){e._captureSelection(void 0,t)},e._onClick=function(t){if(null!==t.target&&"dataset"in t.target){let n=t.target.dataset.selector;n&&e.onClick&&e.onClick(n)}},e._onSelected=function(e){if("string"==typeof e)throw new Error(e);this.onSelected&&this.onSelected(e)}}_addEvent(){this._element.addEventListener("mouseup",this._onMouseUp)}destroyEvent(){this._element.removeEventListener("mouseup",this._onMouseUp)}renderStore(e){e.map((e=>{let t=o(this._element,e.offset+1),r=o(this._element,e.offset+e.text.length);r&&t&&this._captureSelection({collapsed:!1,commonAncestorContainer:this._element,endContainer:r,endOffset:e.offset+e.text.length-n(r,this._element),startContainer:t,startOffset:e.offset-n(t,this._element),storeRenderOther:e})}))}findWord(e){return e?function(e,n){let o=t(n),r=0;return o.map((t=>{let n=t.data,o=new RegExp(`${e}`,"g"),l=null,i=[];for(;l=o.exec(n);)i.push({offset:l.index+r,text:e}),o.lastIndex=o.lastIndex-e.length+1;return r+=t.length,i})).flat(1/0)}(e,this._element):null}_captureSelection(e,o){let l=this._selection;if(null==l)return;let i=e||l.getRangeAt(0);if(i.collapsed)return void(this._onClick&&this._onClick(o));let s={startContainer:i.startContainer,endContainer:i.endContainer,startOffset:i.startOffset,endOffset:i.endOffset};if(!r.isCover&&(s.startContainer.parentNode.dataset.selector||s.endContainer.parentNode.dataset.selector))return l.removeAllRanges(),this._onSelected&&this._onSelected("\u4e0d\u5141\u8bb8\u8986\u76d6\u6807\u6ce8\uff0c\u8be6\u7ec6\u8bf7\u770b\u914d\u7f6e\u6587\u6863\uff0c\u6216\u8bbe\u7f6eisCover\u4e3atrue");if(s.startContainer!==s.endContainer){l.removeAllRanges();let e=s.endContainer.splitText(s.endOffset);s.endContainer=e.previousSibling,s.startContainer=s.startContainer.splitText(s.startOffset)}else{let e=s.endContainer.splitText(s.endOffset);s.startContainer=s.startContainer.splitText(s.startOffset),s.endContainer=e.previousSibling}let a=t(i.commonAncestorContainer);const d=n(s.startContainer,this._element);let c=this.getSelectTextNode(a,s),f="";for(let e=0;e<c.length;e++){f+=c[e].nodeValue}let u=!0;e||(u=!1,l.removeAllRanges()),this._onSelected&&this._onSelected({text:f,offset:d,hasStoreRender:u,textNodes:c,storeRenderOther:e&&e.storeRenderOther?e.storeRenderOther:{}})}getSelectTextNode(e,t){let n=e.indexOf(t.startContainer),o=e.indexOf(t.endContainer);return e.filter(((e,t)=>n<=t&&o>=t))}repaintRange(e){let{uuid:t,className:n,textNodes:o}=e,r=t||"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}));return o.forEach((e=>{if(e.parentNode){let t=document.createElement("span");n?t.className=n:t.style.background="rgba(255, 255, 0, 0.3)",t.setAttribute("data-selector",r),e.parentNode.replaceChild(t,e),t.appendChild(e)}})),t}clearMark(e){document.querySelectorAll(`span[data-selector="${e}"]`).forEach((e=>{if(e.parentNode){const t=document.createDocumentFragment();let n=e.childNodes;for(let e=0;e<n.length;e++){const o=n[e];t.appendChild(o.cloneNode(!0))}e.parentNode.replaceChild(t,e)}}))}}}));
