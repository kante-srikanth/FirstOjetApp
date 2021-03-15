/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojthemeutils","ojs/ojcore-base","jquery"],function(e,t,n,o){"use strict";n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o;
/**
   * @license
   * Copyright (c) 2004 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var i,r,a,l,s,c,u,d={_HTML_START_TAG:"<html>",_HTML_END_TAG:"</html>",_LEGAL_ELEMENTS:{SPAN:1,B:1,I:1,EM:1,BR:1,HR:1,LI:1,OL:1,UL:1,P:1,TT:1,BIG:1,SMALL:1,PRE:1},_LEGAL_ATTRIBUTES:{class:1,style:1},isHTMLContent:function(e){return 0===e.indexOf(d._HTML_START_TAG)&&e.lastIndexOf(d._HTML_END_TAG)===e.length-7},cleanHtml:function(e){var t=o(document.createElement("span")).get(0);return t.innerHTML=e,e&&e.indexOf("<")>=0&&d._cleanElementHtml(t),t},_cleanElementHtml:function(e){for(var t=e.childNodes,n=t.length-1;n>=0;n--){var i=t.item(n);if(i&&1===i.nodeType)if(d._LEGAL_ELEMENTS[i.nodeName]){for(var r=i.attributes,a=r.length-1;a>=0;a--){var l=r[a];void 0!==o(i).attr(l.name)&&(d._LEGAL_ATTRIBUTES[l.name]||i.removeAttribute(l.nodeName))}d._cleanElementHtml(i)}else i&&e.removeChild(i)}},isAncestor:function(e,t){for(var n=t.parentNode;n;){if(n===e)return!0;n=n.parentNode}return!1},isAncestorOrSelf:function(e,t){return t===e||d.isAncestor(e,t)},addResizeListener:function(e,t,n,o){var i=d._RSZ_TRKR;o&&(i=d._RSZ_TRKR_OBS,d._OBS_BASED.set(t,!0));var r=i.get(e);null==r&&(r=new d._ResizeTracker(e,o),i.set(e,r),r.start()),r.addListener(t,n)},removeResizeListener:function(e,t){var n=d._OBS_BASED.get(t)?d._RSZ_TRKR_OBS:d._RSZ_TRKR,o=n.get(e);null!=o&&(o.removeListener(t),o.isEmpty()&&(o.stop(),n.delete(e)))},fixResizeListeners:function(e){o(e).find(".oj-helper-detect-expansion").parent().each(function(e,t){var n=d._RSZ_TRKR.get(t);null!=n&&n.init(!0)})},isMetaKeyPressed:function(e){var t=n.AgentUtils.getAgentInfo();return n.AgentUtils.OS.MAC===t.os?e.metaKey:e.ctrlKey},dispatchEvent:function(e,t){var n="disabled",o=e[n];try{e[n]=!1,e.dispatchEvent(t)}finally{e[n]=o}}};d._invokeAfterPaint=(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){return window.setTimeout(e,0)}).bind(window),d._cancelInvokeAfterPaint=(window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||function(e){return window.clearTimeout(e)}).bind(window),d._ResizeTracker=function(e,t){e instanceof o&&(e=e[0]);var n=o.Callbacks(),i=[],r=[],a=0,l=null,s=null,c=null,u=null,f=null,v=null,h=null;function g(e){var t=!1;if(null!=u.offsetParent){var n=u.offsetWidth,o=u.offsetHeight;s===n&&c===o||(a=2,E(n,o),t=!0,e&&L(!0))}return t}function m(t){var n=t[0].borderBoxSize;L(!1,[n?(n[0]||n).inlineSize:e.offsetWidth,n?(n[0]||n).blockSize:e.offsetHeight])}function L(t,o){var r=o?o[0]:e.offsetWidth,a=o?o[1]:e.offsetHeight;n.has()&&(t?(null!==l&&d._cancelInvokeAfterPaint(l),l=d._invokeAfterPaint(function(){l=null,n.fire(r,a)})):n.fire(r,a));for(var s=0;s<i.length;s++)i[s].getCallback()(r,a)}function p(e){e.stopPropagation(),g(!0)||a>0&&null!=u.offsetParent&&(0===u.scrollLeft||0===u.scrollTop)&&(a-=1,E(s,c))}function E(e,t){s=e,c=t;var n=u.firstChild.style,o=1;do{n.width=e+o+"px",n.height=t+o+"px",u.scrollLeft=o,u.scrollTop=o,o+=1}while((0===u.scrollTop||0===u.scrollLeft)&&o<=5);f.scrollLeft=e,f.scrollTop=t}this.addListener=function(e,t){void 0===t||isNaN(t)||0===t?n.add(e):(i.push(new d._collapsingListenerManager(e,t)),r.push(e))},this.removeListener=function(e){var t=r.indexOf(e);t>=0?(r.splice(t,1),i.splice(t,1)[0].stop()):n.remove(e)},this.isEmpty=function(){return!n.has()&&0===r.length},this.start=function(){if(t&&window.ResizeObserver instanceof Function)(h=new ResizeObserver(m)).observe(e,{box:"border-box"});else{v=p;var n=e.childNodes[0];(u=document.createElement("div")).className="oj-helper-detect-expansion";var o=document.createElement("div");u.appendChild(o),null!=n?e.insertBefore(u,n):e.appendChild(u),u.addEventListener("scroll",v,!1),(f=document.createElement("div")).className="oj-helper-detect-contraction";var i=document.createElement("div");i.style.width="200%",i.style.height="200%",f.appendChild(i),e.insertBefore(f,u),f.addEventListener("scroll",v,!1),this.init(!1)}},this.stop=function(){null!=l&&(d._cancelInvokeAfterPaint(l),l=null),null!=h?(h.disconnect(),h=null):null!=u&&(u.removeEventListener("scroll",v),f.removeEventListener("scroll",v),u.parentNode&&e.removeChild(u),f.parentNode&&e.removeChild(f))},this.init=function(e){if(u){var t=g(e);e&&!t&&null!=u.offsetParent&&E(s,c)}}},d._RSZ_TRKR=new WeakMap,d._RSZ_TRKR_OBS=new WeakMap,d._OBS_BASED=new WeakMap,d.isValidIdentifier=function(e){return/^[A-Za-z][0-9A-Z_a-z-]*$/.test(e)},d._collapsingListenerManager=function(e,t){var n=null,o=null,i=function(){e.apply(null,n),o=null},r=function(){n=Array.prototype.slice.call(arguments),null==o&&(o=window.setTimeout(i,t))};this.getCallback=function(){return r},this.stop=function(){null!=o&&(window.clearTimeout(o),o=null)}},d.isTouchSupported=function(){return"ontouchstart"in window||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints>0},d.setInKoCleanExternal=function(e){d._koCleanNode=e},d.unwrap=function(e,t){var n=d._koCleanNode;n&&e.get(0)===n||(t?t.replaceWith(e):e.unwrap())},d.isChromeEvent=function(e){function t(e){var t=e.target,n=o(t),i=t.getBoundingClientRect(),r=d.getScrollBarWidth(),a="ltr"===d.getReadingDirection();return!(!a||"HTML"!==t.nodeName&&"visible"===n.css("overflow-x")||!(e.clientX>i.right-r))||!a&&"HTML"===t.nodeName&&e.clientX>i.left-r||!a&&"visible"!==n.css("overflow-x")&&e.clientX<i.left+r||("HTML"===t.nodeName||"visible"!==n.css("overflow-y"))&&e.clientY>i.bottom-r}if(!("clientX"in e)||!("clientY"in e))return!1;var i=n.AgentUtils.getAgentInfo();return n.AgentUtils.OS.ANDROID!==i.os&&n.AgentUtils.OS.IOS!==i.os&&(n.AgentUtils.ENGINE.GECKO===i.engine?function(e){try{return!e.originalTarget.localName}catch(e){return!0}}(e):(n.AgentUtils.ENGINE.WEBKIT===i.engine||n.AgentUtils.ENGINE.BLINK===i.engine||n.AgentUtils.BROWSER.IE===i.browser)&&t(e))},d.getScrollBarWidth=function(){var e=d._scrollBarWidth;if(o.isNumeric(e))return e;var t=o("<div></div>");o(document.body).append(t),t.width(50).height(50).css({overflow:"scroll",visibility:"hidden",position:"absolute"});var n=o("<div></div>");n.height(1),t.append(n);var i=n.width(),r=t.width();return t.remove(),e=r-i,d._scrollBarWidth=e,e},d.getReadingDirection=function(){var e=document.documentElement.getAttribute("dir");return e&&(e=e.toLowerCase()),"rtl"===e?"rtl":"ltr"},d.setScrollLeft=function(e,t){if("rtl"===d.getReadingDirection()){var o=n.AgentUtils.getAgentInfo().browser;o===n.AgentUtils.BROWSER.IE||o===n.AgentUtils.BROWSER.EDGE?e.scrollLeft=t:e.scrollLeft=-t}else e.scrollLeft=t},d.getCSSLengthAsInt=function(e){if(!isNaN(e))return parseInt(e,10);if(e&&e.length>0&&"auto"!==e){var t=parseInt(e,10);return isNaN(t)&&(t=0),t}return 0},d.getCSSLengthAsFloat=function(e){if(!isNaN(e))return parseFloat(e);if(e&&e.length>0){var t=parseFloat(e);return isNaN(t)&&(t=0),t}return 0},d._LOGICAL_PARENT_DATA="oj-logical-parent",d.getLogicalParent=function(e){if(e)return e.data(d._LOGICAL_PARENT_DATA)},d.setLogicalParent=function(e,t){e&&(null===t?e.removeData(d._LOGICAL_PARENT_DATA):e.data(d._LOGICAL_PARENT_DATA,t))},d.isLogicalAncestorOrSelf=function(e,t){n.Assert.assertDomElement(e),n.Assert.assertDomElement(t);for(var i=t;i;){if(i===e)return!0;var r=d.getLogicalParent(o(i));i=r?r[0]:i.parentNode}return!1},d.validateURL=function(e,t){var n=t||["http:","https:"],o=document.createElement("a");o.href=e;var i=o.protocol;if(null!=i&&(i=i.toLowerCase()),n.indexOf(i)<0&&""!==i)throw new Error(i+" is not a valid URL protocol")},d._suppressNativeContextMenu=function(){o(document.body).hasClass("oj-hybrid")&&!o(document.body).hasClass("oj-hybrid-show-context-menu")&&document.body.addEventListener("contextmenu",function(e){"INPUT"!==e.target.nodeName&&"TEXTAREA"!==e.target.nodeName&&e.preventDefault()},!0)},d._suppressNativeContextMenu(),d.PRESS_HOLD_THRESHOLD=750,d.recentTouchEnd=function(){var e=0;function t(){e=Date.now()}return document.addEventListener("touchend",t,!0),document.addEventListener("touchcancel",t,!0),function(){return Date.now()-e<500}}(),d.recentTouchStart=(i=0,r=d.PRESS_HOLD_THRESHOLD+50,document.addEventListener("touchstart",function(){i=Date.now()},{passive:!0,capture:!0}),function(){return Date.now()-i<r}),d.recentPointer=(l=0,s=d.PRESS_HOLD_THRESHOLD+600,document.addEventListener("mousedown",function(){var e=Date.now();(!a||e>l+d.PRESS_HOLD_THRESHOLD)&&(l=e,a=!1)},!0),document.addEventListener("touchstart",function(){l=Date.now(),a=!0},{passive:!0,capture:!0}),document.addEventListener("mouseup",function(){l=Date.now(),a=!1},!0),document.addEventListener("touchend",function(){l=Date.now(),a=!1},!0),function(){return Date.now()-l<(a?s:600)}),d.makeFocusable=(c=0,u=(t.parseJSONFromFontFamily("oj-focus-config")||{}).focusHighlightPolicy,function(e){var t=e.element,n="ojFocusable";if(e.remove){t.removeClass("oj-focus oj-focus-highlight");var i=t.data(n);if(null==i)return;var r=".ojFocusable"+(""+i).split(",").join(" .ojFocusable");t.off(r).removeData(n)}else{var a=e.afterToggle||o.noop,l=e.applyHighlight?function(t){t.addClass("oj-focus"),function(e,t){switch(e?e():u){case"all":return!0;case"none":return!1;default:return!(d.recentPointer()||t&&t())}}(e.getFocusHighlightPolicy,e.recentPointer)&&t.addClass("oj-focus-highlight"),a("focusin")}:function(e){e.addClass("oj-focus"),a("focusin")},s=!1;(e.setupHandlers||function(i,r){var a=e.component,l=function(e){i(o(e.currentTarget)),s=!0},u=function(e){s&&(r(o(e.currentTarget)),s=!1)};if(a)a._on(t,{focusin:l,focusout:u});else{var d=c;c+=1;var f=t.data(n);t.data(n,null==f?d:f+","+d);var v={},h=".ojFocusable"+d;v["focusin"+h]=l,v["focusout"+h]=u,t.on(v)}})(l,function(e){e.removeClass("oj-focus oj-focus-highlight"),a("focusout")})}});var f=d.isHTMLContent,v=d.cleanHtml,h=d.isAncestor,g=d.isAncestorOrSelf,m=d.addResizeListener,L=d.removeResizeListener,p=d.fixResizeListeners,E=d.isMetaKeyPressed,_=d.dispatchEvent,A=d.isValidIdentifier,S=d.isTouchSupported,T=d.setInKoCleanExternal,R=d.unwrap,w=d.isChromeEvent,N=d.getScrollBarWidth,O=d.getReadingDirection,C=d.setScrollLeft,P=d.getCSSLengthAsInt,b=d.getCSSLengthAsFloat,D=d.getLogicalParent,H=d.setLogicalParent,I=d.isLogicalAncestorOrSelf,y=d.validateURL,B=d.PRESS_HOLD_THRESHOLD,M=d.recentTouchEnd,j=d.recentTouchStart,x=d.recentPointer,F=d.makeFocusable;e.PRESS_HOLD_THRESHOLD=B,e.addResizeListener=m,e.cleanHtml=v,e.dispatchEvent=_,e.fixResizeListeners=p,e.getCSSLengthAsFloat=b,e.getCSSLengthAsInt=P,e.getLogicalParent=D,e.getReadingDirection=O,e.getScrollBarWidth=N,e.isAncestor=h,e.isAncestorOrSelf=g,e.isChromeEvent=w,e.isHTMLContent=f,e.isLogicalAncestorOrSelf=I,e.isMetaKeyPressed=E,e.isTouchSupported=S,e.isValidIdentifier=A,e.makeFocusable=F,e.recentPointer=x,e.recentTouchEnd=M,e.recentTouchStart=j,e.removeResizeListener=L,e.setInKoCleanExternal=T,e.setLogicalParent=H,e.setScrollLeft=C,e.unwrap=R,e.validateURL=y,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojdomutils.js.map