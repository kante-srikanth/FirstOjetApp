/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojcore-base","jquery","ojs/ojcomponentcore","ojs/ojlogger","ojs/ojdomutils","jqueryui-amd/position","ojs/ojcontext","ojs/ojvcomponent"],function(e,t,r,o,n,i,s,a,l){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a;
/**
   * @license
   * Copyright (c) 2004 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
const p=function(e){this._tapCallback=e,this.Init()};t._registerLegacyNamespaceProp("SimpleTapRecognizer",p),t.Object.createSubclass(p,t.Object,"oj.SimpleTapRecognizer"),p.prototype.Init=function(){p.superclass.Init.call(this);var e=this._eventHandler.bind(this);this._eventHandlerCallback=e;for(var t,r=document.documentElement,o=0;o<p._TOUCHEVENTS.length;o++)"touchstart"===(t=p._TOUCHEVENTS[o])||"touchmove"===t?r.addEventListener(t,e,{passive:!1,capture:!0}):r.addEventListener(t,e,!0)},p.prototype._eventHandler=function(e){var t=this._tapCallback,r=e.type;if("touchstart"===r)this._touchStartEvent=e,this._touchStartEvent._tapStart=(new Date).getTime();else if("touchmove"===r||"touchcancel"===r)this._touchStartEvent=null;else if("touchend"===r){if(this._touchStartEvent){var o=this._touchStartEvent._tapStart;if(isNaN(o))t(this._touchStartEvent);else(new Date).getTime()-o<p._PRESSHOLDTHRESSHOLD&&t(this._touchStartEvent)}this._touchStartEvent=null}},p.prototype.destroy=function(){this._tapCallback=null;var e=this._eventHandlerCallback;this._eventHandlerCallback=null;for(var t,r=document.documentElement,o=0;o<p._TOUCHEVENTS.length;o++)"touchstart"===(t=p._TOUCHEVENTS[o])||"touchmove"===t?r.removeEventListener(t,e,{passive:!1,capture:!0}):r.removeEventListener(t,e,!0)},p._TOUCHEVENTS=["touchstart","touchmove","touchcancel","touchend"],p._PRESSHOLDTHRESSHOLD=700;const c=function(){this.Init()};t._registerLegacyNamespaceProp("PopupService",c),t.Object.createSubclass(c,t.Object,"oj.PopupService");const u=function(){this.Init()},_={};c.prototype.Init=function(){c.superclass.Init.call(this)},c.getInstance=function(e){return c._popupService||(c._popupService=new u),c._popupService},c.prototype.open=function(e){t.Assert.failedInAbstractFunction()},c.prototype.close=function(e){t.Assert.failedInAbstractFunction()},c.prototype.changeOptions=function(e){t.Assert.failedInAbstractFunction()},c.prototype.triggerOnDescendents=function(e,r,o){t.Assert.failedInAbstractFunction()},c.prototype.destroy=function(){c._popupService=null},c.MODALITY={NONE:"none",MODAL:"modal",MODELESS:"modeless"},c.EVENT={POPUP_REMOVE:"ojPopupRemove",POPUP_CLOSE:"ojPopupClose",POPUP_REFRESH:"ojPopupRefresh",POPUP_AUTODISMISS:"ojPopupAutoDismiss",POPUP_BEFORE_OPEN:"ojPopupBeforeOpen",POPUP_AFTER_OPEN:"ojPopupAfterOpen",POPUP_BEFORE_CLOSE:"ojPopupBeforeClose",POPUP_AFTER_CLOSE:"ojPopupAfterClose"},c.LAYER_LEVEL={TOP_LEVEL:"topLevel",NEAREST_ANCESTOR:"nearestAncestor"},c.OPTION={POPUP:"popup",EVENTS:"events",MODALITY:"modality",LAUNCHER:"launcher",POSITION:"position",LAYER_SELECTORS:"layerSelectors",LAYER_LEVEL:"layerLevel",CONTEXT:"context",CUSTOM_ELEMENT:"customElement"},t.__registerWidget("oj.ojSurrogate",r.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{beforeDestroy:null},_ComponentCreate:function(){this._super(),this.element.uniqueId()},_invokeBeforeDestroy:function(){var e=this.options.beforeDestroy;this.options.beforeDestroy=null,e&&e()},_destroy:function(){this._invokeBeforeDestroy(),this.element.removeUniqueId(),this._super()},_NotifyDetached:function(){this._invokeBeforeDestroy(),this._super()}});t.CustomElementBridge.register("oj-surrogate",{metadata:{properties:{beforeDestroy:{type:"function"}},extension:{_WIDGET_NAME:"ojSurrogate"}}}),t._registerLegacyNamespaceProp("PopupServiceImpl",u),t.Object.createSubclass(u,c,"oj.PopupServiceImpl"),u.prototype.open=function(e){t.Assert.assertObject(e);var s=e[c.OPTION.POPUP];t.Assert.assertPrototype(s,r);var a=_.getStatus(s);if(a===_.STATUS.UNKNOWN||a===_.STATUS.BEFORE_OPEN||a===_.STATUS.CLOSE){var l=e[c.OPTION.LAUNCHER];t.Assert.assertPrototype(l,r);var p=e[c.OPTION.POSITION];t.Assert.assertObjectOrNull(p);var E=e[c.OPTION.EVENTS];t.Assert.assertObject(E);var h=e[c.OPTION.MODALITY];(!h||c.MODALITY.MODELESS!==h&&c.MODALITY.MODAL!==h)&&(h=c.MODALITY.NONE);var f=e[c.OPTION.LAYER_SELECTORS];t.Assert.assertString(f);var d=e[c.OPTION.CUSTOM_ELEMENT],T=e[c.OPTION.LAYER_LEVEL];(!T||c.LAYER_LEVEL.TOP_LEVEL!==T&&c.LAYER_LEVEL.NEAREST_ANCESTOR!==T)&&(T=c.LAYER_LEVEL.NEAREST_ANCESTOR);var v=E[c.EVENT.POPUP_BEFORE_OPEN];v&&r.isFunction(v)||(v=u._defaultBeforeOpenCallback);var O=E[c.EVENT.POPUP_AFTER_OPEN];_.setStatus(s,_.STATUS.OPENING),i.setLogicalParent(s,l),_.addToAncestorLayer(s,l,h,f,T,d);var S,g=function(){try{s.removeAttr("aria-hidden"),this._assertEventSink(),o.subtreeShown(s[0])}catch(e){n.error("Error opening popup:\n%o",e)}finally{_.setStatus(s,_.STATUS.OPEN),O&&O(e);var i=_.getFirstAncestorLayer(s);if(t.Assert.assertPrototype(i,r),_.applyEvents(i,E),!_._getSurrogate(i)&&r.isFunction(E[c.EVENT.POPUP_REMOVE]))(0,E[c.EVENT.POPUP_REMOVE])()}};g=g.bind(this);try{S=v(e)}catch(e){n.error("Error before open popup:\n%o",e)}finally{S&&S instanceof Promise?S.then(g):g()}}else this._assertEventSink()},u._defaultBeforeOpenCallback=function(e){var o=e[c.OPTION.POPUP];t.Assert.assertPrototype(o,r);var n=e[c.OPTION.POSITION];o.show(),n&&o.position(n)},u.prototype.close=function(e){t.Assert.assertObject(e);var s=e[c.OPTION.POPUP];t.Assert.assertPrototype(s,r);var a=_.getOpenPopupLayer(s);t.Assert.assertPrototype(a,r);var l=e[c.OPTION.EVENTS];l?l=r.extend(_.getEvents(a),l):(l=_.getEvents(a),e[c.OPTION.EVENTS]=l);var p=_.getStatus(s);if(p!==_.STATUS.OPEN&&p!==_.STATUS.BEFORE_CLOSE||!l)this._assertEventSink();else{var E=l[c.EVENT.POPUP_BEFORE_CLOSE];E&&r.isFunction(E)||(E=u._defaultBeforeCloseCallback);var h=l[c.EVENT.POPUP_AFTER_CLOSE];_.setStatus(s,_.STATUS.CLOSING),_.applyEvents(a,{});var f,d=function(){try{s.hide(),s.attr("aria-hidden","true"),s.css({top:"auto",bottom:"auto",left:"auto",right:"auto"}),_.removeFromAncestorLayer(s),i.setLogicalParent(s,null),this._assertEventSink(),o.subtreeHidden(s[0])}catch(e){n.error("Error closing popup:\n%o",e)}finally{_.setStatus(s,_.STATUS.CLOSE),h&&r.isFunction(h)&&h(e)}};d=d.bind(this);try{f=E(e)}catch(e){n.error("Error before close popup:\n%o",e)}finally{f&&f instanceof Promise?f.then(d):d()}}},u._defaultBeforeCloseCallback=function(e){var o=e[c.OPTION.POPUP];t.Assert.assertPrototype(o,r),o.hide()},u.prototype.changeOptions=function(e){t.Assert.assertObject(e);var o=e[c.OPTION.POPUP];if(t.Assert.assertPrototype(o,r),_.getStatus(o)===_.STATUS.OPEN){var n=_.getOpenPopupLayer(o);t.Assert.assertPrototype(n,r);var i=e[c.OPTION.EVENTS];i&&_.applyEvents(n,i);var s=e[c.OPTION.MODALITY];s&&_.applyModality(n,s);var a=e[c.OPTION.LAYER_SELECTORS];t.StringUtils.isEmptyOrUndefined(a)||n.attr("class",a)}},u.prototype.triggerOnDescendents=function(e,t,r){if(_.isPopupOpen(e)){var o={};o.event=t,o.argsArray=r;var n=_.getFirstAncestorLayer(e);_.postOrderVisit(n,this._triggerOnDescendentsVisitCallback,o)}},u.prototype._triggerOnDescendentsVisitCallback=function(e,t){var o=t.event,n=t.argsArray,i=_.getEvents(e);return i&&r.isFunction(i[o])&&i[o].apply(this,n),_.VISIT_RESULT.ACCEPT},u.prototype._assertEventSink=function(){var e,t,r,o=_.hasPopupsOpen(),n=this._callbackEventFilter;if(!o&&n){for(window.removeEventListener("resize",u._refreshCallback,!0),window.removeEventListener("scroll",u._refreshCallback,!0),(t=document.documentElement).removeEventListener("mousewheel",u._refreshCallback,{passive:!0,capture:!0}),t.removeEventListener("DOMMouseScroll",u._refreshCallback,!0),this._callbackEventFilter=null,e=0;e<u._REDISTRIBUTE_EVENTS.length;e++)r=u._REDISTRIBUTE_EVENTS[e],t.removeEventListener(r,n,!0);var s=this._simpleTapRecognizer;s&&(s.destroy(),this._simpleTapRecognizer=null)}else if(o&&!n){for(window.addEventListener("resize",u._refreshCallback,!0),window.addEventListener("scroll",u._refreshCallback,!0),(t=document.documentElement).addEventListener("mousewheel",u._refreshCallback,{passive:!0,capture:!0}),t.addEventListener("DOMMouseScroll",u._refreshCallback,!0),n=this._eventFilterCallback.bind(this),this._callbackEventFilter=n,e=0;e<u._REDISTRIBUTE_EVENTS.length;e++)r=u._REDISTRIBUTE_EVENTS[e],t.addEventListener(r,n,!0);i.isTouchSupported()&&(this._simpleTapRecognizer=new p(n))}},u.prototype._eventFilterCallback=function(e){var t=r(e.target);if(_.hasPopupsOpen()){if(!i.isChromeEvent(e)&&("focus"!==e.type||t.is(":focusable"))){var o=_.getDefaultLayer();if("keydown"!==e.type||!_.hasModalDialogOpen()||i.isAncestor(o[0],t[0])){var n,s=_.getFirstAncestorLayer(t);if(o[0]!==s[0]?s.hasClass(u._FOCUS_WITHIN_SELECTOR)||((n=this._lastFocusLayer)&&n.removeClass(u._FOCUS_WITHIN_SELECTOR),s.addClass(u._FOCUS_WITHIN_SELECTOR),this._lastFocusLayer=s):(n=this._lastFocusLayer)&&(n.removeClass(u._FOCUS_WITHIN_SELECTOR),this._lastFocusLayer=null),"focus"!==e.type||"-1"!==t.attr("tabindex")){for(var a={},l=u._COPY_SAFE_EVENT_PROPERTIES,p={},c=0;c<l.length;c++){var E=l[c],h=e[E];void 0===h||r.isFunction(h)||(p[E]=h)}a.event=r.Event(e,p),_.postOrderVisit(o,u._redistributeVisitCallback,a)}}else _.eatEvent(e)}}else this._assertEventSink()},u._redistributeVisitCallback=function(e,t){var o=_.getEvents(e),n=t.event;return o&&r.isFunction(o[c.EVENT.POPUP_AUTODISMISS])&&o[c.EVENT.POPUP_AUTODISMISS](n),_.VISIT_RESULT.ACCEPT},u._refreshCallback=function(e){isNaN(u._refreshTimerId)&&(u._refreshTimerId=window.setTimeout(function(){u._refreshTimerId=Number.NaN;var e=_.getDefaultLayer();r.isFunction(window.requestAnimationFrame)?u._afRequestId=window.requestAnimationFrame(function(){u._afRequestId=null,_.postOrderVisit(e,u._refreshVisitCallback)}):_.postOrderVisit(e,u._refreshVisitCallback)},u._REFRESH_DELAY))},u._refreshVisitCallback=function(e,t){if(t.level>0)return _.VISIT_RESULT.REJECT;var o=_.getEvents(e);return o&&r.isFunction(o[c.EVENT.POPUP_REFRESH])&&o[c.EVENT.POPUP_REFRESH](),_.VISIT_RESULT.ACCEPT},u.prototype.destroy=function(){u.superclass.destroy.call(this)},u._FOCUS_WITHIN_SELECTOR="oj-focus-within",u._REDISTRIBUTE_EVENTS=["focus","mousedown","keydown"],u._COPY_SAFE_EVENT_PROPERTIES=["altKey","bubbles","cancelable","ctrlKey","currentTarget","eventPhase","metaKey","relatedTarget","shiftKey","target","timeStamp","view","which","button","buttons","clientX","clientY","offsetX","offsetY","pageX","pageY","screenX","screenY","toElement","char","charCode","key","keyCode"],u._REFRESH_DELAY=10,t._registerLegacyNamespaceProp("ZOrderUtils",_),_.STATUS={UNKNOWN:0,BEFORE_OPEN:.5,OPENING:1,OPEN:2,BEFORE_CLOSE:2.5,CLOSING:3,CLOSE:4},_._STATUS_DATA="oj-popup-status",_.getStatus=function(e){e instanceof Element&&(e=r(e));var t=e.data(_._STATUS_DATA);return isNaN(t)?_.STATUS.UNKNOWN:t},_.setStatus=function(e,t){e instanceof Element&&(e=r(e)),t>_.STATUS.UNKNOWN&&t<=_.STATUS.CLOSE&&e.data(_._STATUS_DATA,t)},_.getFirstAncestorLayer=function(e){if(!e)return _.getDefaultLayer();for(var t=e;t&&t.length>0&&t.attr(_._SURROGATE_ATTR)!==_._DEFAULT_LAYER_ID;){if(_._hasSurrogate(t[0]))return t;t=t.parent()}return _.getDefaultLayer()},_.getDefaultLayer=function(){var e=r(document.getElementById(_._DEFAULT_LAYER_ID));return e.length>0||((e=r("<div>")).attr("role","presentation"),e.attr("id",_._DEFAULT_LAYER_ID),e.prependTo(r(document.body))),e},_.addToAncestorLayer=function(e,n,i,s,a,l){var p=e[0];if(_._hasSurrogate(p.parentNode))throw new Error("JET Popup is already open - id: "+p.getAttribute("id"));var u=_.getFirstAncestorLayer(a===c.LAYER_LEVEL.TOP_LEVEL?null:n),E=r("<div>"),h=e.attr("id");t.StringUtils.isEmptyOrUndefined(h)?E.uniqueId():E.attr("id",[h,"layer"].join("_")),E.attr("role","presentation"),E.addClass(s),e.after(E),_._createSurrogate(E,l),o.subtreeDetached(p),e.appendTo(E),e.data(_._LAYER_ID_DATA,E.attr("id")),E.appendTo(u),o.subtreeAttached(p),_.applyModality(E,i)},_._getSurrogate=function(e){var t=e.attr(_._SURROGATE_ATTR);if(t)return document.getElementById(t)},_.applyEvents=function(e,t,n){n||(n=r(_._getSurrogate(e))),e.data(_._EVENTS_DATA,t),n.length>0&&t&&r.isFunction(t[c.EVENT.POPUP_REMOVE])&&o.setComponentOption(n[0],"beforeDestroy",t[c.EVENT.POPUP_REMOVE])},_.getEvents=function(e){return e.data(_._EVENTS_DATA)},_._createSurrogate=function(e,o){var n="script";o&&(n="oj-surrogate");var i=r(document.createElement(n)),s=e.attr("id");t.StringUtils.isEmptyOrUndefined(s)||i.attr("id",[s,"surrogate"].join("_")),o&&i.attr("data-oj-binding-provider","none"),i.insertBefore(e),o||i.ojSurrogate();var a=i.attr("id");return e.attr(_._SURROGATE_ATTR,a),i},_._removeSurrogate=function(e){var t=e.attr(_._SURROGATE_ATTR);e.removeAttr(_._SURROGATE_ATTR);var n=r(document.getElementById(t)),i=n.length>0;return i&&(e.insertAfter(n),o.setComponentOption(n[0],"beforeDestroy",null),n.remove()),i},_.getOpenPopupLayer=function(e){var t=e.parent();if(!t||0===t.length){var o=e.data(_._LAYER_ID_DATA);t=r(document.getElementById(o))}return t},_.removeFromAncestorLayer=function(e){var t=_.getOpenPopupLayer(e);_.preOrderVisit(t,_._closeDescendantPopupsCallback),_._removeOverlayFromAncestorLayer(t),t.removeData(_._EVENTS_DATA),t.removeData(_._MODALITY_DATA),e.removeData(_._LAYER_ID_DATA);var r=e[0];o.subtreeDetached(r),_._removeSurrogate(t)&&r&&r.parentElement?(i.unwrap(e,t),o.subtreeAttached(r)):t.remove()},_._closeDescendantPopupsCallback=function(e,t){if(t.level>0)return _.VISIT_RESULT.REJECT;var o=e.data(_._EVENTS_DATA);return o&&r.isFunction(o[c.EVENT.POPUP_CLOSE])&&o[c.EVENT.POPUP_CLOSE](),_.VISIT_RESULT.ACCEPT},_.applyModality=function(e,r){var o=e.data(_._MODALITY_DATA);e.data(_._MODALITY_DATA,r),t.StringUtils.isEmptyOrUndefined(o)?c.MODALITY.MODAL===r?_._addOverlayToAncestorLayer(e):_._removeOverlayFromAncestorLayer(e):o!==r&&(r!==o&&r===c.MODALITY.MODAL?_._addOverlayToAncestorLayer(e):_._removeOverlayFromAncestorLayer(e)),r===c.MODALITY.MODAL?e.attr("aria-modal","true"):e.removeAttr("aria-modal")},_.hasModalDialogOpen=function(){for(var e=_.getDefaultLayer().children(),t=e.length-1;t>-1;t--){if(r(e[t]).hasClass(_._OVERLAY_SELECTOR))return!0}return!1},_._addOverlayToAncestorLayer=function(e){var o=r("<div>");o.addClass(_._OVERLAY_SELECTOR),o.addClass(e[0].className),o.attr("role","presentation");var n=e.attr("id");t.StringUtils.isEmptyOrUndefined(n)?o.uniqueId():o.attr("id",[n,"overlay"].join("_")),e.before(o);var i=o.attr("id");e.attr(_._OVERLAY_ATTR,i)},_._removeOverlayFromAncestorLayer=function(e){var o=e.attr(_._OVERLAY_ATTR);t.StringUtils.isEmptyOrUndefined(o)||(e.removeAttr(_._OVERLAY_ATTR),r(document.getElementById(o)).remove())},_.VISIT_RESULT={ACCEPT:0,REJECT:1,COMPLETE:2},_._VISIT_TRAVERSAL={PRE_ORDER:0,POST_ORDER:1},_.postOrderVisit=function(e,t,r){var o=r;r||(o={}),o.level=0,o.type=_._VISIT_TRAVERSAL.POST_ORDER,_._visitTree(e,t,o)},_.preOrderVisit=function(e,t,r){var o=r;r||(o={}),o.level=0,o.type=_._VISIT_TRAVERSAL.PRE_ORDER,_._visitTree(e,t,o)},_._visitTree=function(e,t,o){for(var n=o.level,i=e.children(),s=i.length-1;s>-1;s--){var a=r(i[s]);if(_._hasSurrogate(a[0])){var l;if(o.type===_._VISIT_TRAVERSAL.PRE_ORDER){if((l=t(a,o))===_.VISIT_RESULT.COMPLETE)return l;if(l===_.VISIT_RESULT.REJECT)break}if(o.level=n+1,l=_._visitTree(a,t,o),o.level=n,l===_.VISIT_RESULT.COMPLETE)return l;if(o.type===_._VISIT_TRAVERSAL.POST_ORDER){if((l=t(a,o))===_.VISIT_RESULT.COMPLETE)return l;if(l===_.VISIT_RESULT.REJECT)break}}}return _.VISIT_RESULT.ACCEPT},_._hasSurrogate=function(e){return!(!e||1!==e.nodeType||!e.hasAttribute(_._SURROGATE_ATTR))},_.hasPopupsOpen=function(){return _.getDefaultLayer().children().length>0},_.getOpenPopupCount=function(){var e={popupCount:0},t=_.getDefaultLayer();return _.preOrderVisit(t,_._openPopupCountCallback,e),e.popupCount},_._openPopupCountCallback=function(e,t){return t.popupCount+=1,_.VISIT_RESULT.ACCEPT},_.findOpenPopups=function(){var e={},t=[];e.popups=t;var o=_.getDefaultLayer();return _.preOrderVisit(o,_._openPopupsCallback,e),t=e.popups,r(t)},_._openPopupsCallback=function(e,t){return t.popups.push(e[0]),_.VISIT_RESULT.ACCEPT},_.isAboveTopModalLayer=function(e){if(!e||!_.hasPopupsOpen())return!0;var t=function(){var e={topLayer:null},t=_.getDefaultLayer();if(_.preOrderVisit(t,function(e,t){if(t.level>0)return _.VISIT_RESULT.REJECT;var o=t.topLayer;return o?_.compareStackingContexts(r(e),r(o))>0&&(t.topLayer=e):t.topLayer=e,_.VISIT_RESULT.ACCEPT},e),e.topLayer)return e.topLayer[0]}();if(!t)return!0;var o=function(e){var t={topModalPopup:null};if(e.hasAttribute(_._OVERLAY_ATTR)&&(t.topModalPopup=r(e)),_.postOrderVisit(r(e),function(e,t){return e[0].hasAttribute(_._OVERLAY_ATTR)?(t.topModalPopup=e,_.VISIT_RESULT.COMPLETE):_.VISIT_RESULT.ACCEPT},t),t.topModalPopup)return t.topModalPopup[0]}(t);return!o||(i.isAncestorOrSelf(o,e)||_.compareStackingContexts(r(o),r(e))<0)},_.compareStackingContexts=function(e,o){function n(e,t){var o,n=["absolute","relative","fixed"],s=e.parents(),a=[];for(o=s.length-1;o>-1;o--)a.push(r(s[o]));(s=a).push(e);var l=[],p=0;for(o=0;o<s.length;o++){var c=s[o],u=c.css("position"),_=i.getCSSLengthAsFloat(c.css("opacity")),E=i.getCSSLengthAsInt(c.css("z-index")),h=r.inArray(c[0],c.parent().children());r.inArray(u,n)>-1&&E>0?(l.push({weight:[p,E,h],order:[h]}),p+=1):_<1?(l.push({weight:[p,1,h],order:[h]}),p+=1):t&&l.push({weight:[0,0,h],order:[h]})}return l}function s(e,t){for(var r=Math.max(e.length,t.length),o=0;o<r;o++){var n=o<e.length?e[o]:0,i=o<t.length?t[o]:0;if(n!==i)return n<i?-1:1}return 0}t.Assert.assertPrototype(e,r),t.Assert.assertPrototype(o,r);var a,l,p=n(e,!1),c=n(o,!1),u=Math.max(p.length,c.length);for(a=0;a<u;a++)if(0!==(l=s(a<p.length?p[a].weight:[-1],a<c.length?c[a].weight:[-1])))return l;for(p=n(e,!0),c=n(o,!0),u=Math.max(p.length,c.length),a=0;a<u;a++)if(0!==(l=s(a<p.length?p[a].order:[-1],a<c.length?c[a].order:[-1])))return l;return 0},_.eatEvent=function(e){e.stopPropagation(),e.preventDefault()},_.isPopupOpen=function(e){var t=e.parent();return!(!t||1!==t.length||!_._hasSurrogate(t[0]))},_._EVENTS_DATA="oj-popup-events",_._MODALITY_DATA="oj-popup-modality",_._DEFAULT_LAYER_ID="__oj_zorder_container",_._SURROGATE_ATTR="data-oj-surrogate-id",_._LAYER_ID_DATA="oj-popup-layer-id",_._OVERLAY_ATTR="data-oj-overlayid",_._OVERLAY_SELECTOR="oj-component-overlay";const E={};t._registerLegacyNamespaceProp("PositionUtils",E),E.normalizeHorizontalAlignment=function(e,o){for(var n=r.extend({},e),i=0;i<E._ALIGN_RULE_PROPERTIES.length;i++){var s=E._ALIGN_RULE_PROPERTIES[i],a=n[s];if(a)if(t.StringUtils.isString(a))n[s]=a.replace("start",o?"right":"left").replace("end",o?"left":"right").replace("<",o?"+":"-").replace(">",o?"-":"+");else for(var l=0;l<E._SUB_ALIGN_RULE_PROPERTIES.length;l++){var p=E._SUB_ALIGN_RULE_PROPERTIES[l],c=a[p];t.StringUtils.isString(c)&&(a[p]=c.replace("start",o?"right":"left").replace("end",o?"left":"right").replace("<",o?"+":"-").replace(">",o?"-":"+"))}}return n},E.normalizePositionOf=function(e,t,r){return"event"===e?r:null==e||"launcher"===e?t:e},E._normalizeEventForPosition=function(e){r.each(["pageX","pageY"],function(t,r){if(e&&void 0===e[r]&&e.originalEvent){var o,n=e.originalEvent,i=n.type;if(o="touchstart"===i||"touchmove"===i?"touches":"touchend"===i?"changedTouches":null){var s=n[o][0];s&&(e[r]=s[r])}}})},E._ALIGN_RULE_PROPERTIES=["my","at"],E._SUB_ALIGN_RULE_PROPERTIES=["vertical","horizontal"],E.isAligningPositionClipped=function(e){if(e.target&&e.target.height>0&&e.target.width>0){var t=e.target.element;return!E.isWithinViewport(t)}return!1},E.isWithinViewport=function(e){function t(e,t){var r;if(["hidden","scroll","auto"].indexOf(t.overflowY)>-1){if(e.bottom-t.top<-1)return!1;if(r="auto"===t.overflowX&&t.scrollWidth>t.innerWidth||"scroll"===t.overflowX?i.getScrollBarWidth():0,t.bottom-r-e.top<1)return!1}return!(["hidden","scroll","auto"].indexOf(t.overflowX)>-1&&(r="auto"===t.overflowY&&t.scrollHeight>t.innerHeight||"scroll"===t.overflowY?i.getScrollBarWidth():0,e.right-(t.left+("rtl"===i.getReadingDirection()?r:0))<-1||e.left-(t.right-("ltr"===i.getReadingDirection()?r:0))>-1))}function o(e){var t=e[0];if(1===t.nodeType){var o=r.extend({},t.getBoundingClientRect());return o.overflowX=e.css("overflow-x"),o.overflowY=e.css("overflow-y"),o.innerHeight=e.innerHeight(),o.innerWidth=e.innerWidth(),o.scrollHeight=t.scrollHeight,o.scrollWidth=t.scrollWidth,o}return{height:0,width:0}}function n(e){return["fixed","absolute","relative"].indexOf(e.css("position"))>-1&&(Math.abs(i.getCSSLengthAsInt(e.css("top")))>0||Math.abs(i.getCSSLengthAsInt(e.css("bottom")))>0||Math.abs(i.getCSSLengthAsInt(e.css("left")))>0||Math.abs(i.getCSSLengthAsInt(e.css("right")))>0)}if(!e)return!1;if(r.isWindow(e[0])||n(e))return!0;for(var s,a=o(e),l=!0,p=e.parent();l&&p&&p.length>0&&"BODY"!==p[0].nodeName&&1===p[0].nodeType&&!n(p);){if("visible"!==(s=p).css("overflow-x")||"visible"!==s.css("overflow-y")){var c=o(p);c.height>0&&c.width>0&&(l=t(a,c))}p=p.parent()}return l},E._ANIMATION_TRANSFORM_ORIGIN_RULES={"right-top":"right top","right-middle":"right center","right-bottom":"right bottom","left-top":"left top","left-middle":"left center","left-bottom":"left bottom","center-top":"center top","center-middle":"center center","center-bottom":"center bottom"},E._ALIGN_MNEMONIC_DATA="oj-popup-align-mnemonic",E.captureTransformOriginAnimationEffectsOption=function(e,t){var r=[t.horizontal,t.vertical].join("-");e.data(E._ALIGN_MNEMONIC_DATA,r)},E.addTransformOriginAnimationEffectsOption=function(e,r){var o,n;t.StringUtils.isString(r)?(n=!0,o=r):(n=!1,o=JSON.stringify(r));var i=/#myPosition/g;if(o.match(i)){var s=e.data(E._ALIGN_MNEMONIC_DATA);t.StringUtils.isEmptyOrUndefined(s)&&(s="center-middle");var a=E._ANIMATION_TRANSFORM_ORIGIN_RULES[s];o=o.replace(i,a),r=n?o:JSON.parse(o)}return r},E._JQUI_MNEMONIC_GRP_REGX=/^(\w+)(\+|-)?(\d+)?/,E._VERTICAL_ENUM_TST_REGX=/^top$|^center$|^bottom$/,E._HORIZONTAL_ENUM_TST_REGX=/^start$|^left$|^center$|^end$|^right$/,E._COLLISION_ENUM_TST_REGX=/^none$|^flip$|^flipfit$|^fit$|^flipcenter$/,E._parsePositionNmnemonic=function(e,t){var r=[null,Number.NaN],o=E._JQUI_MNEMONIC_GRP_REGX.exec(e);if(o[1]&&t.test(o[1])&&(r[0]=o[1],o[2])){var n=parseInt(o[3],10);isNaN(n)||(n*="-"===o[2]?-1:1,r[1]=n)}return r},E._parseJSON=function(e){if(t.StringUtils.isString(e)&&/^{/.test(e)&&/}$/.test(e))try{return JSON.parse(e)}catch(e){}return null},E._coerceMyAtToJet=function(e,o,n,s){var a=E._parseJSON(o);a&&(o=a),(a=E._parseJSON(n))&&(n=a),s||(s={});var l,p=r.extend({},s),c={x:0,y:0};if(n&&"x"in n&&"y"in n&&(c.x=i.getCSSLengthAsInt(n.x),c.y=i.getCSSLengthAsInt(n.y)),t.StringUtils.isString(o)){var u=o.split(/\s/);u.length>0&&!t.StringUtils.isEmpty(u[0])&&(l=E._parsePositionNmnemonic(u[0],E._HORIZONTAL_ENUM_TST_REGX))[0]&&(p.horizontal=l[0],isNaN(l[1])||(c.x=l[1])),u.length>1&&!t.StringUtils.isEmpty(u[1])&&(l=E._parsePositionNmnemonic(u[1],E._VERTICAL_ENUM_TST_REGX))[0]&&(p.vertical=l[0],isNaN(l[1])||(c.y=l[1]))}else o&&("horizontal"in o&&(l=E._parsePositionNmnemonic(o.horizontal,E._HORIZONTAL_ENUM_TST_REGX))[0]&&(p.horizontal=l[0],isNaN(l[1])||(c.x=l[1])),"vertical"in o&&(l=E._parsePositionNmnemonic(o.vertical,E._VERTICAL_ENUM_TST_REGX))[0]&&(p.vertical=l[0],isNaN(l[1])||(c.y=l[1])));var _={};return _[e]=p,_.offset=c,_},E._coerceCollisionToJet=function(e,t){var r=t;return E._COLLISION_ENUM_TST_REGX.test(e)&&(r=e),{collision:r}},E._coerceOfToJet=function(e,o){var n=E._parseJSON(e);n&&(e=n);var s=o;if(t.StringUtils.isString(e))s=e;else if(r.isWindow(e))s="window";else if(e instanceof Element||e instanceof r){(e=r(e)).uniqueId(),s="#"+function(e){for(var t=[],r=/\w|_|-/,o=0;o<e.length;o++){var n=e.substring(o,o+1);r.test(n)?t.push(n):t.push("\\"+n)}return t.join("")}(e.attr("id"))}else e instanceof Event||e instanceof r.Event?("pageX"in e||"pageY"in e)&&((s={}).x=i.getCSSLengthAsFloat(e.pageX),s.y=i.getCSSLengthAsFloat(e.pageY)):e&&("x"in e||"y"in e)&&((s={}).x=i.getCSSLengthAsFloat(e.x),s.y=i.getCSSLengthAsFloat(e.y));return{of:s}},E.coerceToJet=function(e,t){e||(e={});var o=E._parseJSON(e);o&&(e=o),t||(t={});var n=t.my,i=t.at,s=t.collision,a=t.of,l=E._coerceMyAtToJet("my",e.my,e.offset,n),p=E._coerceMyAtToJet("at",e.at,null,i),c={offset:{x:l.offset.x+p.offset.x,y:l.offset.y+p.offset.y}};return delete l.offset,delete p.offset,r.extend({},l,p,c,E._coerceCollisionToJet(e.collision,s),E._coerceOfToJet(e.of,a),function(e,t){return{using:r.isFunction(e)?e:t}}(e.using,void 0))},E.coerceToJqUi=function(e){function o(t,r){var o=[];if(e[t][r]?o.push(e[t][r]):o.push("center"),"my"===t&&e.offset){var n="horizontal"===r?"x":"y",i=e.offset[n];isNaN(i)||0===i||(o.push(i>0?"+":""),o.push(Math.floor(i).toString()))}return o.join("")}var n={};["my","at"].forEach(function(t){if(e[t]){var r=[];r.push(o(t,"horizontal")),r.push(" "),r.push(o(t,"vertical")),n[t]=r.join("")}});var i=e.of;if(t.StringUtils.isString(i))n.of="window"===i?window:i;else if(i&&!t.StringUtils.isString(i)&&"x"in i&&"y"in i){var s=i.x,a=i.y,l=document.createEvent("MouseEvents");l.initMouseEvent("click",!0,!0,window,1,s,a,s,a,!1,!1,!1,!1,0,null),n.of=r.Event(l,{pageX:s,pageY:a})}else n.of=i;return e.collision&&(n.collision=e.collision),e.using&&(n.using=e.using),n},E.calcAvailablePopupSize=function(e,t,o){var n,s,a,l,p=r.position.getWithinInfo(o||window),c=r.position.getScrollInfo(p),u="rtl"===i.getReadingDirection(),_=u?c.width:0,E=u?0:c.width,h=t.element,f=t.target,d=p.isWindow?p.scrollLeft:0,T=p.isWindow?p.scrollTop:0,v=h.left,O=h.left+h.width,S=h.top,g=h.top+h.height,P=f.left,A=f.left+f.width,y=f.top,R=f.top+f.height,m=p.offset.left+d+_,L=p.offset.left+p.width+d-E,I=p.offset.top+T,N=p.offset.top+p.height+T-c.height;return v<P?(n=m,s=O<=P?P:O<=A?Math.min(A,L):L):v===P?P-m>L-A?(n=m,s=A):(n=P,s=L):v<A?(n=P,s=O<=A?A:L):(n=A,s=L),S<y?(a=I,l=g<=y?y:g<=R?Math.min(R,N):N):S===y?(a=y,l=N):S<R?(a=y,l=g<=R?R:N):(a=R,l=N),{width:s-n,height:l-a}},r.ui.position.flipcenter={left:function(e,t){var o=e.left;r.ui.position.flip.left.call(this,e,t);var n=t.within,s=n.isWindow?n.scrollLeft:n.offset.left,a=n.width,l=e.left-t.collisionPosition.marginLeft,p=s-l,c=l+t.collisionWidth-a-s;(p>0||c>0)&&("right"===t.at[0]?o-=t.targetWidth/2:"left"===t.at[0]&&(o+=t.targetWidth/2),o-=("rtl"===i.getReadingDirection()?-1:1)*(t.elemWidth/2),e.left=Math.max(0,o))},top:function(e,t){var o=e.top;r.ui.position.flip.top.call(this,e,t);var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,a=e.top-t.collisionPosition.marginTop,l=i-a,p=a+t.collisionHeight-s-i;(l>0||p>0)&&("top"===t.at[1]?o+=t.targetHeight/2:"bottom"===t.at[1]&&(o-=t.targetHeight/2),o+=t.elemHeight/2,e.top=Math.max(0,o))}};var h=r.ui.position.flip.left;r.ui.position.flip={left:h.bind(null),top:function(e,t){var r,o,n=t.within,i=n.offset.top+n.scrollTop,s=n.height,a=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,p=l-a,c=l+t.collisionHeight-s-a;r="top"===t.my[1]?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,o="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0;var u,_,E=-2*t.offset[1];p<0?((u=e.top+r+o+E+t.collisionHeight-s-i)<0||u<Math.abs(p))&&c<0&&p>c&&(e.top+=r+o+E):c>0&&((_=e.top-t.collisionPosition.marginTop+r+o+E-a)>0||Math.abs(_)<c)&&(e.top+=r+o+E)}};
/**
   * @license
   * Copyright (c) 2004 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
const f=function(){this.Init()};t._registerLegacyNamespaceProp("PopupLiveRegion",f),t.Object.createSubclass(f,t.Object,"oj.PopupLiveRegion"),f.prototype.Init=function(){f.superclass.Init.call(this),isNaN(f._refCounter)?f._refCounter=1:f._refCounter+=1},f.prototype.destroy=function(){if(!isNaN(f._refCounter)&&(f._refCounter-=1)<1){var e=r(document.getElementById(f._POPUP_LIVE_REGION_ID));e.length>0&&e.remove()}},f.prototype.announce=function(e){if(!t.StringUtils.isEmpty(e)){var o=f._getLiveRegion();o.children().remove(),setTimeout(function(){r("<div>").text(e).appendTo(o)},20)}},f._getLiveRegion=function(){var e=r(document.getElementById(f._POPUP_LIVE_REGION_ID));return 0===e.length&&((e=r("<div>")).attr({id:f._POPUP_LIVE_REGION_ID,role:"log","aria-live":"polite","aria-relevant":"additions"}),e.addClass("oj-helper-hidden-accessible"),e.appendTo(document.body)),e},f._POPUP_LIVE_REGION_ID="__oj_popup_arialiveregion";
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
const d=function(e,o,n,i,s){t.Assert.assertPrototype(e,r),t.Assert.assertString(o),t.Assert.assertFunction(n),t.Assert.assertStringOrNull(i),this._options={insertBefore:!1,preventKeyEvents:!0},s&&(this._options=Object.assign({},this._options,s)),this._sibling=e,this._message=o,this._callback=n,this._id=i,this.Init()};t._registerLegacyNamespaceProp("PopupSkipLink",d),t.Object.createSubclass(d,t.Object,"oj.PopupSkipLink"),d.prototype.Init=function(){d.superclass.Init.call(this);var e=this._sibling,t=this._callback,o=this._message,n=this._options.insertBefore,i=this._options.preventKeyEvents;this._message=null;var s=this._id;this._id=null;var a=r(document.getElementById(s));a.length<1&&(a=r("<a>").attr({tabindex:"-1",href:"#",role:"link"})),a.attr("id",s),a.addClass("oj-helper-hidden-accessible"),a.text(o),n?a.insertBefore(e):a.insertAfter(e),a.on("click",d._activateHandler.bind(this,t)),i&&a.on("keydown keyup keypress",d._keyHandler),e.data(d._SKIPLINK_ATTR,a)},d._activateHandler=function(e,t){_.eatEvent(t),window.setImmediate(e)},d._keyHandler=function(e){e.keyCode===r.ui.keyCode.ENTER&&_.eatEvent(e)},d.prototype.destroy=function(){var e=this._sibling;if(delete this._sibling,delete this._callback,e){var t=e.data(d._SKIPLINK_ATTR);e.removeData(d._SKIPLINK_ATTR),t&&(t.off("click keydown keyup keypress"),t.remove())}},d.prototype.getLink=function(){var e,t=this._sibling;return t&&(e=t.data(d._SKIPLINK_ATTR)),e},d._SKIPLINK_ATTR="oj-skiplink";
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
const T=function(e,t,r,o){this._element=e,this._operation=t,this._widgetName=r,this._isCustomElement=!!o,this.Init()};t._registerLegacyNamespaceProp("PopupWhenReadyMediator",T),t.Object.createSubclass(T,t.Object,"oj.PopupWhenReadyMediator"),T.prototype.Init=function(){T.superclass.Init.call(this),this._resolvedQueue=[],this._callback=this._eventHandler.bind(this);var e=this._operation,t=["oj"];this._isCustomElement?(t.push(e.charAt(0).toUpperCase()),t.push(e.slice(1))):t.push(e);var r=t.join("");this._eventType=r,this._element.on(r,this._callback);var o=a.getContext(this._element[0]).getBusyContext(),n={description:this._getBusyStateDescription.bind(this,this._element,this._operation,this._widgetName)},i=o.addBusyState(n);this.AddPromiseExecutor(i),this._whenReadyPromise=new Promise(this.AddPromiseExecutor.bind(this))},T.prototype._getBusyStateDescription=function(e,t,r){return r+" identified by '"+e.attr("id")+"' is busy animating on the '"+t+"' operation."},T.prototype._deliverResolved=function(e){var t=this._resolvedQueue;this._resolvedQueue=null;var r=e||this._operation;this._operation=null;for(var o=0;o<t.length;o++)try{t[o](r)}catch(e){n.error("Error resolving whenReady promises:\n%o",e)}this._whenReadyPromise=Promise.resolve("none")},T.prototype.destroy=function(){if(this._resolvedQueue&&this._deliverResolved("none"),this._callback){var e=this._eventType;this._element.off(e,this._callback)}this._callback=null,this._element=null,this._operation=null,this._whenReadyPromise=null,this._widgetName=null,this._eventType=null},T.prototype.getWhenReadyPromise=function(){return this._whenReadyPromise},T.prototype._eventHandler=function(e){e.target===this._element[0]&&(this._element.off(e.type,this._callback),this._deliverResolved(),this._callback=null)},T.prototype._getPendingOperation=function(){return this._operation?this._operation:"none"},T.prototype.AddPromiseExecutor=function(e,t){this._resolvedQueue&&this._resolvedQueue.push(e)},T.prototype.isOperationPending=function(e,t,r,o){var i=!1,s=this._widgetName,a=this._getPendingOperation();if(t===a)n.info("An %s instance invoked a '%s' operation while pending animation of the same type of operation.  The second request will be ignored.",s,t),i=!0;else if("none"!==a){n.info("An %s instance invoked a '%s' operation while pending animation of a '%s' operation. The second request will be invoked after the pending operation completes.",s,t,a),new Promise(this.AddPromiseExecutor.bind(this)).then(function(){this[r].apply(this,o)}.bind(e)),i=!0}return i};class v extends l.VComponent{constructor(e){super(e),this._setRootRef=this._setRootRef.bind(this)}render(){return l.h("div",{style:{display:"none"},ref:this._setRootRef},this.props.children)}mounted(){this._popup=r(this._rootRef.firstChild);const e={[c.OPTION.POPUP]:this._popup,[c.OPTION.EVENTS]:{[c.EVENT.POPUP_AUTODISMISS]:this.props.autoDismiss,[c.EVENT.POPUP_REFRESH]:function(){this._popup.position(this._getPosition())}.bind(this)},[c.OPTION.LAYER_SELECTORS]:this.props.layerSelectors,[c.OPTION.CUSTOM_ELEMENT]:!0,[c.OPTION.LAUNCHER]:r(this._rootRef),[c.OPTION.POSITION]:this._getPosition()};c.getInstance().open(e)}unmounted(){c.getInstance().close({[c.OPTION.POPUP]:this._popup})}updated(){this._popup.position(this._getPosition())}_setRootRef(e){this._rootRef=e}_getPosition(){return E.normalizeHorizontalAlignment(this.props.position,"rtl"===i.getReadingDirection())}}v.metadata={extension:{_DEFAULTS:class{constructor(){this.autoDismiss=null,this.layerSelectors="",this.position={}}}}},e.PopupLiveRegion=f,e.PopupService=c,e.PopupSkipLink=d,e.PopupWhenReadyMediator=T,e.PositionUtils=E,e.VPopup=v,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojpopupcore.js.map