/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojdomutils","ojs/ojgestureutils","ojs/ojvcomponent-element","ojs/ojvmenu","ojs/ojvcomponent-binding","ojs/ojthemeutils"],function(t,e,o,n,s,l,i){"use strict";var u,a=function(t,e,o,n){var s,l=arguments.length,i=l<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var u=t.length-1;u>=0;u--)(s=t[u])&&(i=(l<3?s(i):l>3?s(e,o,i):s(e,o))||i);return l>3&&i&&Object.defineProperty(e,o,i),i};class r{constructor(){this.disabled=!1,this.display="all",this.translations={}}}a([n.dynamicDefault(function(){return(i.parseJSONFromFontFamily("oj-button-option-defaults")||{}).chroming||"solid"})],r.prototype,"chroming",void 0),t.Button2=u=class extends n.ElementVComponent{constructor(t){super(t),this._handleContextMenuGesture=(t,e)=>{const o={event:t,eventType:e};t.preventDefault(),this.updateState({contextMenuTriggerEvent:o})},this._onCloseCallback=t=>{this.state.contextMenuTriggerEvent&&this.updateState({contextMenuTriggerEvent:null})},this.state={}}render(){const t=this.props,e=t.children,o=this._processIcon(t.startIcon,"oj-button-icon oj-start"),s=this._processIcon(t.endIcon,"oj-button-icon oj-end");let l=this.props["aria-label"],i=this.props["aria-labelledby"];const u=l||i;let a=t.title,r=null,h=null,d=null;const c=t.label||e;c&&(a=a||t.label||this.state.derivedTitle,"icons"===t.display&&(o||s)?t.label?u||(l=t.label):(u||(d=this.uniqueId()+"|text",i=d),r=n.h("span",{class:"oj-button-text oj-helper-hidden-accessible",id:d},c)):(u||(d=this.uniqueId()+"|text",i=d),r=n.h("span",{class:"oj-button-text",id:d},c))),r=n.h("span",{ref:t=>this._defaultSlotRef=t},r);const p=n.h("div",{class:"oj-button-label"},o,r,s);let _;t.disabled?_=n.h("button",{class:"oj-button-button","aria-labelledby":i,"aria-label":l,disabled:!0},p):(h=this._handleClick,_=n.h("button",{class:"oj-button-button",ref:t=>this._buttonRef=t,"aria-labelledby":i,"aria-label":l,onTouchstart:this._handleTouchstart,onTouchend:this._handleTouchend,onTouchcancel:this._handleTouchend,onMouseenter:this._handleMouseenter,onMouseleave:this._handleMouseleave,onMousedown:this._handleMousedown,onMouseup:this._handleMouseup,onKeydown:this._handleKeydown,onKeyup:this._handleKeyup,onFocusin:this._handleFocusin,onFocusout:this._handleFocusout,onFocus:this._handleFocus,onBlur:this._handleBlur},p));const b=this._getRootClasses(o,s);return n.h("oj-button",{class:b,title:a,onClick:h,ref:t=>this._rootRef=t},_,this._renderContextMenu())}_renderContextMenu(){return this.state.contextMenuTriggerEvent&&this.props.contextMenu?n.h(s.VMenu,{eventObj:this.state.contextMenuTriggerEvent,launcherElement:this._buttonRef,onCloseCallback:this._onCloseCallback},[this.props.contextMenu]):null}_processIcon(t,e){let o;return Array.isArray(t)?o=t.map(t=>this._processIcon(t,e)):t&&(o=n.h("span",{class:e},t)),o}_getRootClasses(t,o){let n=!0,s="oj-button "+u._chromingMap[this.props.chroming];return s+=" "+this._getDisplayOptionClass(t,o),this.props.disabled?(n=!1,s+=" oj-disabled"):(s+=" oj-enabled",this.state.hover&&(n=!1,s+=" oj-hover"),this.state.active&&(n=!1,s+=" oj-active"),this.state.focus&&(n&&(s+=" oj-focus-only"),n=!1,s+=" oj-focus",e.recentPointer()||(s+=" oj-focus-highlight"))),n&&(s+=" oj-default"),s}_getDisplayOptionClass(t,e){const o=t&&e,n=t||e,s="icons"===this.props.display;let l;return l=n?s?o?"oj-button-icons-only":"oj-button-icon-only":o?"oj-button-text-icons":t?"oj-button-text-icon-start":"oj-button-text-icon-end":"oj-button-text-only",l}_addMutationObserver(){if(this._mutationObserver)return;this._mutationObserver=new MutationObserver(()=>{const t=this._getTextContent();t!=this.state.derivedTitle&&this.updateState({derivedTitle:t})}),this._mutationObserver.observe(this._defaultSlotRef,{subtree:!0,characterData:!0})}_needsContextMenuDetection(t){return t.contextMenu&&!t.disabled}mounted(){this._updateDerivedTitle(),this._needsContextMenuDetection(this.props)&&o.startDetectContextMenuGesture(this._rootRef,this._handleContextMenuGesture)}updated(t){this._updateDerivedTitle(),this._updateContextMenuDetection(t)}_updateDerivedTitle(){const t=this.props;let e;"icons"!==t.display||!t.startIcon&&!t.endIcon||t.label||t.title||(e=this._getTextContent(),this._addMutationObserver()),e!=this.state.derivedTitle&&this.updateState({derivedTitle:e})}_updateContextMenuDetection(t){const e=this._needsContextMenuDetection(t),n=this._needsContextMenuDetection(this.props);e!=n&&(n?o.startDetectContextMenuGesture(this._rootRef,this._handleContextMenuGesture):o.stopDetectContextMenuGesture(this._rootRef))}static updateStateFromProps(t){return t.disabled?{contextMenuTriggerEvent:null}:null}_getTextContent(){let t=this._defaultSlotRef.textContent;return t=t.trim(),""!==t?t:null}unmounted(){this._mutationObserver&&(this._mutationObserver.disconnect(),this._mutationObserver=null),o.stopDetectContextMenuGesture(this._rootRef)}_handleTouchstart(t){this.updateState({active:!0})}_handleTouchend(t){this.updateState({active:!1})}_handleMouseenter(t){e.recentTouchEnd()||(this===u._lastActive&&this.updateState({active:!0}),this.updateState({hover:!0}))}_handleMouseleave(t){this.updateState({hover:!1,active:!1})}_handleMousedown(t){if(1===t.which&&!e.recentTouchEnd()){this.updateState({active:!0}),u._lastActive=this;const t=()=>{u._lastActive=null,document.removeEventListener("mouseup",t,!0)};document.addEventListener("mouseup",t,!0)}}_handleMouseup(t){this.updateState({active:!1})}_handleClick(t){var e,o;t.detail<=1&&(null===(o=(e=this.props).onOjAction)||void 0===o||o.call(e,{originalEvent:t}))}_handleKeydown(t){32!==t.keyCode&&13!==t.keyCode||this.updateState({active:!0})}_handleKeyup(t){this.updateState({active:!1})}_handleFocusin(t){this.updateState({focus:!0})}_handleFocusout(t){this.updateState({focus:!1})}_handleFocus(t){var e;null===(e=this._rootRef)||void 0===e||e.dispatchEvent(new FocusEvent("focus",{relatedTarget:t.relatedTarget}))}_handleBlur(t){var e;this.updateState({active:!1}),null===(e=this._rootRef)||void 0===e||e.dispatchEvent(new FocusEvent("blur",{relatedTarget:t.relatedTarget}))}refresh(){this.render()}focus(){var t;null===(t=this._buttonRef)||void 0===t||t.focus()}blur(){var t;null===(t=this._buttonRef)||void 0===t||t.blur()}},t.Button2._chromingMap={solid:"oj-button-full-chrome",outlined:"oj-button-outlined-chrome",borderless:"oj-button-half-chrome",full:"oj-button-full-chrome",half:"oj-button-half-chrome",callToAction:"oj-button-cta-chrome"},t.Button2.metadata={extension:{_DEFAULTS:r,_ROOT_PROPS_MAP:{title:1,"aria-label":1,"aria-labelledby":1}},slots:{"":{},startIcon:{},endIcon:{},contextMenu:{}},properties:{disabled:{type:"boolean",value:!1},display:{type:"string",enumValues:["all","icons"],value:"all"},label:{type:"string"},translations:{type:"object|null",value:{}},chroming:{type:"string",enumValues:["borderless","callToAction","full","half","outlined","solid"],binding:{consume:{name:"containerChroming"}}}},events:{ojAction:{bubbles:!0}},methods:{refresh:{},focus:{},blur:{}}},a([n.listener({passive:!0})],t.Button2.prototype,"_handleTouchstart",null),a([n.listener()],t.Button2.prototype,"_handleTouchend",null),a([n.listener()],t.Button2.prototype,"_handleMouseenter",null),a([n.listener()],t.Button2.prototype,"_handleMouseleave",null),a([n.listener()],t.Button2.prototype,"_handleMousedown",null),a([n.listener()],t.Button2.prototype,"_handleMouseup",null),a([n.listener()],t.Button2.prototype,"_handleClick",null),a([n.listener()],t.Button2.prototype,"_handleKeydown",null),a([n.listener()],t.Button2.prototype,"_handleKeyup",null),a([n.listener()],t.Button2.prototype,"_handleFocusin",null),a([n.listener()],t.Button2.prototype,"_handleFocusout",null),a([n.listener()],t.Button2.prototype,"_handleFocus",null),a([n.listener()],t.Button2.prototype,"_handleBlur",null),t.Button2=u=a([n.customElement("oj-button")],t.Button2),Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ojbutton2.js.map