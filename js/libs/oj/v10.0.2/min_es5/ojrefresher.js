/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["touchr","ojs/ojcore-base","jquery","ojs/ojcontext","ojs/ojpulltorefresh","ojs/ojlogger"],function(e,t,r,s,o,n){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,s=s&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s;
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var l={properties:{refreshContent:{type:"function"},target:{type:"Element"},text:{type:"string",value:""},threshold:{type:"number",value:0},translations:{type:"object",value:{},properties:{ariaRefreshCompleteLink:{type:"string"},ariaRefreshLink:{type:"string"},ariaRefreshingLink:{type:"string"}}}},methods:{getProperty:{},refresh:{},setProperties:{},setProperty:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}};l.extension._WIDGET_NAME="ojRefresher",t.CustomElementBridge.register("oj-refresher",{metadata:l}),t.__registerWidget("oj.ojRefresher",r.oj.baseComponent,{widgetEventPrefix:"oj",options:{refreshContent:null,threshold:0,target:null,text:""},_SetupResources:function(){this._super(),this.element.addClass("oj-component"),this._setupRefresh()},_ReleaseResources:function(){this._super(),this._checkObserver(),o.tearDownPullToRefresh(this.scrollerElement)},refresh:function(){this._super(),this._checkObserver(),this._setupRefresh()},_checkObserver:function(){this.observer&&(this.observer.disconnect(),this.observer=null)},_setupRefresh:function(){var e=this;this._setupScrollerElement(),this.scrollerElement?s.getContext(this.scrollerElement).getBusyContext().whenReady().then(function(){e._setupObserver(e),e._setupPullToRefresh()}):n.error("Issue with the target selected: Target missing or not found")},_setupPullToRefresh:function(){var e=0===this.options.threshold?null:this.options.threshold;o.setupPullToRefresh(this.scrollerElement,this.options.refreshContent,{threshold:e,primaryText:this.options.text,refresherElement:this.element[0]})},_setupScrollerElement:function(){if(null!=this.options.target)this.scrollerElement=this.options.target;else if(this.element[0]){var e=this.element[0].getElementsByClassName("oj-scroller");this.scrollerElement=e.length>0?e[0]:null,this.scrollerElement||0===this.element[0].children.length||(this.scrollerElement=this.element[0].children[0])}else this.scrollerElement=null},_setupObserver:function(e){e.scrollerElement&&(e.observer=new MutationObserver(function(t){t.forEach(function(t){t.removedNodes.length>0&&t.removedNodes[0]===e.scrollerElement&&(e.observer.disconnect(),e.observer=null,o.tearDownPullToRefresh(e.scrollerElement))})}),e.parentNode=e.scrollerElement.parentNode,e.parentNode?e.observer.observe(e.parentNode,{childList:!0}):e.observer.observe(document,{childList:!0}))}})});
//# sourceMappingURL=ojrefresher.js.map