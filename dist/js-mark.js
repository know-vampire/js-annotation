!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).JsMark=t()}(this,(function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var r;function o(e){for(var n=[],i=e.childNodes,a=0;a<i.length;a++){var l=i[a];l.nodeType!==r.TEXT_NODE?n.push.apply(n,t(o(l))):n.push(l)}return n}function i(e,t){for(var n=o(t),r=n.indexOf(e),i=0,a=0;a<r;a++)n[a]&&null!==n[a].nodeValue&&(i+=n[a].nodeValue.length);return i}function a(e,t){for(var n=null,r=0,i=o(e),a=0;a<i.length;a++)if(i[a]&&null!==i[a].nodeValue&&(r+=i[a].nodeValue.length),t<=r){n=i[a];break}return n}!function(e){e[e.ELEMENT_NODE=1]="ELEMENT_NODE",e[e.TEXT_NODE=3]="TEXT_NODE"}(r||(r={}));var l={isCover:!0};return function(){function t(e){var n,r;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._element=e.el,this._selection=window.getSelection(),1!==this._element.nodeType)throw new Error("\u8bf7\u6302\u8f7ddom\u8282\u70b9");if(!this._selection)throw new Error("\u6d4f\u89c8\u5668\u6682\u4e0d\u652f\u6301\u6807\u6ce8\uff0c\u8bf7\u67e5\u770b\u6587\u6863\u652f\u6301\u6d4f\u89c8\u5668\u7248\u672c");l.isCover=null!==(r=null===(n=null==e?void 0:e.options)||void 0===n?void 0:n.isCover)&&void 0!==r?r:l.isCover,this._onMouseUp=null,this._onClick=null,this._onSelected=null,this.onSelected=null,this.onClick=null,this._initEvent(),this._addEvent()}var n,r,s;return n=t,(r=[{key:"_initEvent",value:function(){var e=this;e._onMouseUp=function(t){e._captureSelection(void 0,t)},e._onClick=function(t){if(null!==t.target&&"dataset"in t.target){var n=t.target.dataset.selector;n&&e.onClick&&e.onClick(n)}},e._onSelected=function(e){if("string"==typeof e)throw new Error(e);this.onSelected&&this.onSelected(e)}}},{key:"_addEvent",value:function(){this._element.addEventListener("mouseup",this._onMouseUp)}},{key:"destroyEvent",value:function(){this._element.removeEventListener("mouseup",this._onMouseUp)}},{key:"renderStore",value:function(e){var t=this;e.map((function(e){var n=a(t._element,e.offset+1),r=a(t._element,e.offset+e.text.length);r&&n&&t._captureSelection({collapsed:!1,commonAncestorContainer:t._element,endContainer:r,endOffset:e.offset+e.text.length-i(r,t._element),startContainer:n,startOffset:e.offset-i(n,t._element),storeRenderOther:e})}))}},{key:"findWord",value:function(e){return e?(t=e,n=this._element,r=o(n),i=0,r.map((function(e){for(var n=e.data,r=new RegExp("".concat(t),"g"),o=null,a=[];o=r.exec(n);)a.push({offset:o.index+i,text:t}),r.lastIndex=r.lastIndex-t.length+1;return i+=e.length,a})).flat(1/0)):null;var t,n,r,i}},{key:"_captureSelection",value:function(e,t){var n=this._selection;if(null!=n){var r=e||n.getRangeAt(0);if(r.collapsed)this._onClick&&this._onClick(t);else{var a={startContainer:r.startContainer,endContainer:r.endContainer,startOffset:r.startOffset,endOffset:r.endOffset};if(!l.isCover&&(a.startContainer.parentNode.dataset.selector||a.endContainer.parentNode.dataset.selector))return n.removeAllRanges(),this._onSelected&&this._onSelected("\u4e0d\u5141\u8bb8\u8986\u76d6\u6807\u6ce8\uff0c\u8be6\u7ec6\u8bf7\u770b\u914d\u7f6e\u6587\u6863\uff0c\u6216\u8bbe\u7f6eisCover\u4e3atrue");if(a.startContainer!==a.endContainer){n.removeAllRanges();var s=a.endContainer.splitText(a.endOffset);a.endContainer=s.previousSibling,a.startContainer=a.startContainer.splitText(a.startOffset)}else{var u=a.endContainer.splitText(a.endOffset);a.startContainer=a.startContainer.splitText(a.startOffset),a.endContainer=u.previousSibling}for(var f=o(r.commonAncestorContainer),c=i(a.startContainer,this._element),d=this.getSelectTextNode(f,a),h="",v=0;v<d.length;v++)h+=d[v].nodeValue;var p=!0;e||(p=!1,n.removeAllRanges()),this._onSelected&&this._onSelected({text:h,offset:c,hasStoreRender:p,textNodes:d,storeRenderOther:e&&e.storeRenderOther?e.storeRenderOther:{}})}}}},{key:"getSelectTextNode",value:function(e,t){var n=e.indexOf(t.startContainer),r=e.indexOf(t.endContainer);return e.filter((function(e,t){return n<=t&&r>=t}))}},{key:"repaintRange",value:function(e){var t=e.uuid,n=e.className,r=e.textNodes,o=t||"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}));return r.forEach((function(e){if(e.parentNode){var t=document.createElement("span");n?t.className=n:t.style.background="rgba(255, 255, 0, 0.3)",t.setAttribute("data-selector",o),e.parentNode.replaceChild(t,e),t.appendChild(e)}})),t}},{key:"clearMark",value:function(e){document.querySelectorAll('span[data-selector="'.concat(e,'"]')).forEach((function(e){if(e.parentNode){for(var t=document.createDocumentFragment(),n=e.childNodes,r=0;r<n.length;r++){var o=n[r];t.appendChild(o.cloneNode(!0))}e.parentNode.replaceChild(t,e)}}))}}])&&e(n.prototype,r),s&&e(n,s),t}()}));
