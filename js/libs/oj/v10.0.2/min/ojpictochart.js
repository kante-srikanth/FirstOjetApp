/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base","ojs/ojcomponentcore","jquery","ojs/ojpictochart-toolkit","ojs/ojdvt-base"],function(t,e,o,n,r){"use strict";
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */var a;t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,(a={properties:{animationDuration:{type:"number"},animationOnDataChange:{type:"string",enumValues:["auto","none"],value:"none"},animationOnDisplay:{type:"string",enumValues:["alphaFade","auto","none","popIn","zoom"],value:"none"},as:{type:"string",value:""},columnCount:{type:"number"},columnWidth:{type:"number"},data:{type:"object"},drilling:{type:"string",enumValues:["off","on"],value:"off"},hiddenCategories:{type:"Array<string>",writeback:!0,value:[]},highlightMatch:{type:"string",enumValues:["all","any"],value:"all"},highlightedCategories:{type:"Array<string>",writeback:!0,value:[]},hoverBehavior:{type:"string",enumValues:["dim","none"],value:"none"},hoverBehaviorDelay:{type:"number",value:200},items:{type:"Array<Object>|Promise"},layout:{type:"string",enumValues:["horizontal","vertical"],value:"horizontal"},layoutOrigin:{type:"string",enumValues:["bottomEnd","bottomStart","topEnd","topStart"],value:"topStart"},rowCount:{type:"number"},rowHeight:{type:"number"},selection:{type:"Array<any>",writeback:!0,value:[]},selectionMode:{type:"string",enumValues:["multiple","none","single"],value:"none"},tooltip:{type:"object",properties:{renderer:{type:"function"}}},trackResize:{type:"string",enumValues:["off","on"],value:"on"},translations:{type:"object",value:{},properties:{componentName:{type:"string"},labelAndValue:{type:"string"},labelClearSelection:{type:"string"},labelCountWithTotal:{type:"string"},labelDataVisualization:{type:"string"},labelInvalidData:{type:"string"},labelNoData:{type:"string"},stateCollapsed:{type:"string"},stateDrillable:{type:"string"},stateExpanded:{type:"string"},stateHidden:{type:"string"},stateIsolated:{type:"string"},stateMaximized:{type:"string"},stateMinimized:{type:"string"},stateSelected:{type:"string"},stateUnselected:{type:"string"},stateVisible:{type:"string"}}}},methods:{getContextByNode:{},getItem:{},getItemCount:{},getProperty:{},refresh:{},setProperties:{},setProperty:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojDrill:{}},extension:{}}).extension._WIDGET_NAME="ojPictoChart",t.CustomElementBridge.register("oj-picto-chart",{metadata:a});var i={properties:{borderColor:{type:"string",value:""},borderWidth:{type:"number",value:0},categories:{type:"Array<string>",value:[]},color:{type:"string",value:""},columnSpan:{type:"number",value:1},count:{type:"number",value:1},drilling:{type:"string",enumValues:["inherit","off","on"],value:"inherit"},name:{type:"string",value:""},rowSpan:{type:"number",value:1},shape:{type:"string",value:"rectangle"},shortDesc:{type:"string"},source:{type:"string",value:""},sourceHover:{type:"string",value:""},sourceHoverSelected:{type:"string",value:""},sourceSelected:{type:"string",value:""},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}}},extension:{}};i.extension._CONSTRUCTOR=function(){},t.CustomElementBridge.register("oj-picto-chart-item",{metadata:i}),
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
t.__registerWidget("oj.ojPictoChart",o.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{animationDuration:void 0,animationOnDataChange:"none",animationOnDisplay:"none",as:"",columnCount:null,columnWidth:null,data:null,drilling:"off",hiddenCategories:[],highlightedCategories:[],highlightMatch:"all",hoverBehavior:"none",hoverBehaviorDelay:200,items:null,layout:"horizontal",layoutOrigin:"topStart",rowCount:null,rowHeight:null,selection:[],selectionMode:"none",tooltip:{renderer:null},drill:null},_CreateDvtComponent:function(t,e,o){return n.PictoChart.newInstance(t,e,o)},_GetSimpleDataProviderConfigs:function(){return{data:{templateName:"itemTemplate",templateElementName:"oj-picto-chart-item",resultPath:"items"}}},_ConvertLocatorToSubId:function(t){var e=t.subId;return"oj-pictochart-item"===e?e="item["+t.index+"]":"oj-pictochart-tooltip"===e&&(e="tooltip"),e},_ConvertSubIdToLocator:function(t){var e={};return 0===t.indexOf("item")?(e.subId="oj-pictochart-item",e.index=this._GetFirstIndex(t)):"tooltip"===t&&(e.subId="oj-pictochart-tooltip"),e},_GetComponentStyleClasses:function(){var t=this._super();return t.push("oj-pictochart"),t},_GetChildStyleClasses:function(){var t=this._super();return t["oj-pictochart-item"]={path:"_defaultColor",property:"background-color"},t["oj-dvtbase oj-pictochart"]={path:"animationDuration",property:"ANIM_DUR"},t["oj-dvt-selectable-inner-shape"]={path:"_innerColor",property:"stroke"},t["oj-dvt-selectable oj-selected"]={path:"_outerColor",property:"stroke"},t},_GetEventTypes:function(){return["optionChange"]},_HandleEvent:function(t){"drill"===t.type?this._trigger("drill",null,{id:t.id}):this._super(t)},getItem:function(t){return this._component.getAutomation().getItem(t)},getItemCount:function(){return this._component.getAutomation().getItemCount()},getContextByNode:function(t){var e=this.getSubIdByNode(t);return e&&"oj-pictochart-tooltip"!==e.subId?e:null},_GetComponentDeferredDataPaths:function(){return{root:["items","data"]}},_IsFlowingLayoutSupported:function(){return!0}})});
//# sourceMappingURL=ojpictochart.js.map