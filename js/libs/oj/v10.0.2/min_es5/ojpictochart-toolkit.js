/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojdvt-toolkit"],function(t,e){"use strict";
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */var i=function t(e,i,n,o,r,s,a,l,h,c){t.superclass.Init.call(this,e.getCtx(),i,n,o,r,null,s,a,l,h,c),this._picto=e};e.Obj.createSubclass(i,e.ImageMarker),i.prototype.animateUpdate=function(t,i){var n=new e.CustomAnimation(this.getCtx(),this,.75*this._picto.getAnimationDuration()),o=n.getAnimator(),r=this._getAnimationParams();this._setAnimationParams(i._getAnimationParams()),o.addProp(e.Animator.TYPE_NUMBER_ARRAY,this,this._getAnimationParams,this._setAnimationParams,r),i.setAlpha(0),t.add(n,1)},i.prototype.animateDelete=function(t){t.add(new e.AnimFadeOut(this.getCtx(),this,.5*this._picto.getAnimationDuration()),0)},i.prototype.animateInsert=function(t){this.setAlpha(0),t.add(new e.AnimFadeIn(this.getCtx(),this,.5*this._picto.getAnimationDuration()),2)},i.prototype._getAnimationParams=function(){return[this.getCx(),this.getCy(),this.getWidth(),this.getHeight()]},i.prototype._setAnimationParams=function(t){this.setCx(t[0]),this.setCy(t[1]),this.setWidth(t[2]),this.setHeight(t[3])};
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var n=function t(e,i,n,o,r,s,a){t.superclass.Init.call(this,e.getCtx(),"none"==i?null:i,n,o,r,s,null,!0,!0,a),this._picto=e};e.Obj.createSubclass(n,e.SimpleMarker),n.prototype.animateUpdate=function(t,i){var n=new e.CustomAnimation(this.getCtx(),this,.75*this._picto.getAnimationDuration()),o=n.getAnimator(),r=this.getFill(),s=i.getFill();s.equals(r)||(this.setFill(s),o.addProp(e.Animator.TYPE_FILL,this,this.getFill,this.setFill,r));var a=this._getAnimationParams();this._setAnimationParams(i._getAnimationParams()),o.addProp(e.Animator.TYPE_NUMBER_ARRAY,this,this._getAnimationParams,this._setAnimationParams,a),i.setAlpha(0),t.add(n,1)},n.prototype.animateDelete=function(t){t.add(new e.AnimFadeOut(this.getCtx(),this,.5*this._picto.getAnimationDuration()),0)},n.prototype.animateInsert=function(t){this.setAlpha(0),t.add(new e.AnimFadeIn(this.getCtx(),this,.5*this._picto.getAnimationDuration()),2)},n.prototype._getAnimationParams=function(){return[this.getCx(),this.getCy(),this.getWidth(),this.getHeight()]},n.prototype._setAnimationParams=function(t){this.setCx(t[0]),this.setCy(t[1]),this.setWidth(t[2]),this.setHeight(t[3])},n.prototype.setDataColor=function(t,i){if("redwood"===this.getCtx().getThemeBehavior()){if(this._dataColor=t,!i){var o=t,r=this._picto.getOptions()._innerColor,s=this._picto.getOptions()._outerColor;this.setHoverStroke(new e.Stroke(r,1,1.5,!0),new e.Stroke(o,1,4.5,!0)),this.setSelectedStroke(new e.Stroke(r,1,1.5,!0),new e.Stroke(s,1,4.5,!0)),this.setSelectedHoverStroke(new e.Stroke(r,1,1.5,!0),new e.Stroke(s,1,4.5,!0))}}else n.superclass.setDataColor.call(this,t,i)};
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var o=function(t){return"vertical"==t.getOptions().layout},r=function(t){var e=t.getOptions().layoutOrigin;return"bottomStart"==e||"bottomEnd"==e},s=function(t){var i=t.getOptions().layoutOrigin,n="topEnd"==i||"bottomEnd"==i;return e.Agent.isRightToLeft(t.getCtx())?!n:n},a=function(t){this.Init(t)};
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */e.Obj.createSubclass(a,e.KeyboardHandler),a.prototype.isSelectionEvent=function(t){return this.isNavigationEvent(t)&&!t.ctrlKey},a.prototype.isMultiSelectEvent=function(t){return t.keyCode==e.KeyboardEvent.SPACE&&t.ctrlKey},a.getNextNavigable=function(t,i,n,l){var h=t.getItems();if(l||(l=i),"none"==i.getShape()&&i!=l){var c=h.indexOf(i);if(0==c||c==h.length-1)return l}var p=s(t),g=r(t),u=o(t),d=i,m=n.keyCode==e.KeyboardEvent.LEFT_ARROW&&p||n.keyCode==e.KeyboardEvent.RIGHT_ARROW&&!p||n.keyCode==e.KeyboardEvent.UP_ARROW&&g||n.keyCode==e.KeyboardEvent.DOWN_ARROW&&!g,_=n.keyCode==e.KeyboardEvent.LEFT_ARROW&&u||n.keyCode==e.KeyboardEvent.RIGHT_ARROW&&u||n.keyCode==e.KeyboardEvent.UP_ARROW&&!u||n.keyCode==e.KeyboardEvent.DOWN_ARROW&&!u,f=h.indexOf(i)+(m?1:-1);return _?d=e.KeyboardHandler.getNextNavigable(i,n,h):f<h.length&&f>=0&&(d=h[f]),"none"==d.getShape()&&(d=d!=i?a.getNextNavigable(t,d,n,l):l),d},a.prototype.processKeyDown=function(t){var i=this._eventManager.getFocus();return i&&t.keyCode==e.KeyboardEvent.ENTER?(this._eventManager.processDrillEvent(i),e.EventManager.consumeEvent(t),i):a.superclass.processKeyDown.call(this,t)};
/**
   * @license
   * Copyright (c) 2008 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var l=function(t,e){this.Init(t,e)};e.Obj.createSubclass(l,e.Container),l._counter=0,l.prototype.Init=function(t,i){l.superclass.Init.call(this,t.getCtx(),null,i.id),this._picto=t,this._item=i,this._id=null!=i.id?i.id:null!=i.name?i.name:"_defaultId"+l._counter,l._counter++,this._isNoneShape="none"==i.shape,this._isSelected=!1,this._isShowingKeyboardFocusEffect=!1,this._keyboardTooltipLocation=new e.Point(0,0),(this.isSelectable()||this.isDrillable())&&this.setCursor(e.SelectionEffectUtils.getSelectingCursor()),t.getEventManager().associate(this,this)},l.prototype.getColSpan=function(){var t=this._item.columnSpan;return null!=t&&t>=0?Math.round(t):1},l.prototype.getRowSpan=function(){var t=this._item.rowSpan;return null!=t&&t>=0?Math.round(t):1},l.prototype.getCount=function(){var t=this._item.count;return null!=t?Math.max(t,0):1},l.prototype.getShape=function(){return this._item.shape||this._picto.getOptions()._defaultShape},l.prototype.getColor=function(){return this._isNoneShape?this._picto.getOptions()._noneShapeColor:this._item.color||this._picto.getOptions()._defaultColor},l.prototype.getBorderColor=function(){return this._item.borderColor},l.prototype.getBorderWidth=function(){return this._item.borderWidth},l.prototype.getClassName=function(){return this._item.className||this._item.svgClassName},l.prototype.getStyle=function(){return this._item.style||this._item.svgStyle},l.prototype.getSource=function(){return this._item.source},l.prototype.getSourceSelected=function(){return this._item.sourceSelected},l.prototype.getSourceHover=function(){return this._item.sourceHover},l.prototype.getSourceHoverSelected=function(){return this._item.sourceHoverSelected},l.prototype.getName=function(){return this._item.name},l.prototype.getId=function(){return this._id},l.prototype.getShortDesc=function(){return this._item.shortDesc},l.prototype.isDrillable=function(){if(this._isNoneShape)return!1;var t=this._item.drilling;return t&&"inherit"!=t?"on"==t:"on"==this._picto.getOptions().drilling},l.prototype.isDoubleClickable=function(){return this.isSelectable()&&this.isDrillable()&&!this._isNoneShape},l.prototype.updateAriaAttributes=function(){this.setAriaRole("img"),this._updateAriaLabel()},l.prototype.getDatatip=function(t){if(this._isNoneShape)return"";var i=this._picto.getOptions(),n=this._picto.getOptions().tooltip,o=n?n.renderer:null;if(o){var r=this._picto.getCtx().getTooltipManager(),s={id:this.getId(),name:this.getName(),count:this.getCount(),color:this.getColor()};return r.getCustomTooltip(o,s)}if(null!=this.getShortDesc())return this.getShortDesc();var a=[],l=this.getName();l&&a.push(e.HtmlTooltipManager.createElement("td",i._tooltipLabelStyle,l,["oj-dvt-datatip-label"])),a.push(e.HtmlTooltipManager.createElement("td",i._tooltipValueStyle,this._getCountString(),["oj-dvt-datatip-value"]));var h=e.HtmlTooltipManager.createElement("tr",null,a);return e.HtmlTooltipManager.createElement("table",null,[h],["oj-dvt-datatip-table"])},l.prototype.getDatatipColor=function(){return this.getColor()},l.prototype._getCountString=function(){return e.ResourceUtils.format(this._picto.getOptions().translations.labelCountWithTotal,[this.getCount(),this._picto.getTotalCount()])},l.prototype.isSelectable=function(){return"none"!=this._picto.getOptions().selectionMode&&!this._isNoneShape},l.prototype.isSelected=function(){return this._isSelected},l.prototype.setSelected=function(t){this._isSelected=t,this._updateAriaLabel();for(var e=0;e<this.getNumChildren();e++){var o=this.getChildAt(e);(o instanceof n||o instanceof i)&&o.setSelected(t)}},l.prototype.showHoverEffect=function(){for(var t=0;t<this.getNumChildren();t++){var e=this.getChildAt(t);(e instanceof n||e instanceof i)&&e.showHoverEffect()}},l.prototype.hideHoverEffect=function(){for(var t=0;t<this.getNumChildren();t++){var e=this.getChildAt(t);(e instanceof n||e instanceof i)&&e.hideHoverEffect()}},l.prototype.getDisplayables=function(){return[this]},l.prototype.getAriaLabel=function(){var t,i=[],n=this._picto.getOptions().translations;this.isSelectable()&&i.push(n[this.isSelected()?"stateSelected":"stateUnselected"]),this.isDrillable()&&i.push(n.stateDrillable);var o=this.getName();return t=null!=this.getShortDesc()?this.getShortDesc():null==o?this._getCountString():e.ResourceUtils.format(n.labelAndValue,[o,this._getCountString()]),e.Displayable.generateAriaLabel(t,i)},l.prototype._updateAriaLabel=function(){e.Agent.deferAriaCreation()||this.setAriaProperty("label",this.getAriaLabel())},l.prototype.getCategories=function(t){return this._item._itemData?this._item.categories:this._item.categories||[this.getId()]},l.prototype.getNextNavigable=function(t){var i=this._picto.getEventManager().getKeyboardHandler();return t.type==e.MouseEvent.CLICK||i.isMultiSelectEvent(t)?this:i.isNavigationEvent(t)?a.getNextNavigable(this._picto,this,t):null},l.prototype.getKeyboardBoundingBox=function(t){return this.getDimensions(t)},l.prototype.getTargetElem=function(){return this.getElem()},l.prototype.showKeyboardFocusEffect=function(){this._isNoneShape||(this._isShowingKeyboardFocusEffect=!0,this.showHoverEffect())},l.prototype.hideKeyboardFocusEffect=function(){this._isNoneShape||(this._isShowingKeyboardFocusEffect=!1,this.hideHoverEffect())},l.prototype.isShowingKeyboardFocusEffect=function(){return this._isShowingKeyboardFocusEffect},l.prototype.setKeyboardTooltipLocation=function(t){this._keyboardTooltipLocation=t},l.prototype.getKeyboardTooltipLocation=function(){return this._keyboardTooltipLocation};
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var h=function(t){this._picto=t};e.Obj.createSubclass(h,e.Automation),h.prototype.GetSubIdForDomElement=function(t){var e=this._picto.getEventManager().GetLogicalObject(t);return e&&e instanceof l?"item["+this._picto.getItems().indexOf(e)+"]":null},h.prototype.getDomElementForSubId=function(t){if(t==e.Automation.TOOLTIP_SUBID)return this.GetTooltipElement(this._picto);var i=t.indexOf("[");if(i>0&&"item"===t.substring(0,i)){var n=parseInt(t.substring(i+1,t.length-1)),o=this._picto.getItems()[n];return o?o.getElem():null}return null},h.prototype.getItem=function(t){var e=this._picto.getItems()[t];if(e){var i={};return i.color=e.getDatatipColor(),i.tooltip=e.getDatatip(),i.id=e.getId(),i.name=e.getName(),i.count=e.getCount(),i.selected=e.isSelected(),i}return null},h.prototype.getItemCount=function(){return this._picto.getItems().length};
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var c=function t(e){this.Init({alta:t.VERSION_1},e)};e.Obj.createSubclass(c,e.BaseComponentDefaults),c.VERSION_1={animationOnDisplay:"none",animationOnDataChange:"none",animationDuration:750,drilling:"off",hiddenCategories:[],highlightedCategories:[],highlightMatch:"all",hoverBehavior:"none",hoverBehaviorDelay:200,layout:"horizontal",layoutOrigin:"topStart",selection:[],selectionMode:"none",_defaultColor:"#a6acb1",_noneShapeColor:"rgba(255,255,255,0)",_defaultSize:32,_defaultShape:"rectangle",_gapRatio:.25,_textStyle:new e.CSSStyle(e.BaseComponentDefaults.FONT_FAMILY_ALTA_13+"color: #252525;"),_statusMessageStyle:new e.CSSStyle(e.BaseComponentDefaults.FONT_FAMILY_ALTA_13+"color: #252525;"),_tooltipLabelStyle:new e.CSSStyle(""),_tooltipValueStyle:new e.CSSStyle("")},c.prototype.getAnimationDuration=function(t){return t.animationDuration};
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var p=function(t){this.Init(t.getCtx(),t.dispatchEvent,t,t),this._picto=t};e.Obj.createSubclass(p,e.EventManager),p.prototype.ProcessRolloverEvent=function(t,i,n){var o=this._picto.getOptions();if("none"!=o.hoverBehavior){var r=i.getCategories?i.getCategories():[];o.highlightedCategories=n?r.slice():null;var s=e.EventFactory.newCategoryHighlightEvent(o.highlightedCategories,n),a=e.CSSStyle.getTimeMilliseconds(o.hoverBehaviorDelay);this.RolloverHandler.processEvent(s,this._picto.getItems(),a,"any"==o.highlightMatch)}},p.prototype.OnClickInternal=function(t){var e=this.GetLogicalObject(t.target);e&&(e.isSelectable&&e.isSelectable()||this.processDrillEvent(e))},p.prototype.OnDblClickInternal=function(t){var e=this.GetLogicalObject(t.target);e&&e.isSelectable&&e.isSelectable()&&this.processDrillEvent(e)},p.prototype.HandleTouchHoverEndInternal=function(t){var e=this.GetLogicalObject(t.target);e&&(e.isSelectable&&e.isSelectable()||this.processDrillEvent(e))},p.prototype.HandleTouchClickInternal=function(t){var e=this.GetLogicalObject(t.target);e&&(e.isSelectable&&e.isSelectable()||this.processDrillEvent(e))},p.prototype.HandleTouchDblClickInternal=function(t){var e=this.GetLogicalObject(t.target);e&&e.isSelectable&&e.isSelectable()&&(t.preventDefault(),t.stopPropagation(),this.processDrillEvent(e))},p.prototype.processDrillEvent=function(t){t instanceof l&&t.isDrillable()&&this.FireEvent(e.EventFactory.newDrillEvent(t.getId()))};
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var g={};e.Obj.createSubclass(g,e.Obj),g.render=function(t,a,l,h){var c=t.getCtx(),p=new e.Rect(c,l.x,l.y,l.w,l.h);if(p.setInvisibleFill(),a.addChild(p),h||(h=g.getInfo(t,l.w,l.h)),h.items){t.registerItems(h.items);for(var u=t.getOptions()._gapRatio*h.minSpan,d=o(t),m=r(t),_=s(t),f=new e.Map2D,v=0,y=0,S=0,C=0;C<h.items.length;C++){var b=h.items[C],A=b.getColSpan(),E=b.getRowSpan();if(!(A<=0||E<=0)){for(var O,w=A*h.colWidth,D=E*h.rowHeight,H=b.getCount(),I=0,M=!0;H>0&&(A==v&&E==y||(S=0),0==S&&(O=g._findNextAvailableCell(f,A,E,h.colCount,h.rowCount,d)),null!=O);){var x,T,k,R,N,P,L=O.col*h.colWidth+w/2,W=O.row*h.rowHeight+D/2,F=l.x+(_?l.w-L:L),K=l.y+(m?l.h-W:W),B=Math.min(1-S,H);if(d?(x=F-w/2,T=m?K+D*(.5-B-S):K+D*(S-.5),k=w,R=D*B):(x=_?F+w*(.5-B-S):F+w*(S-.5),T=K-D/2,k=w*B,R=D),1==B?(N=b.getId()+"_"+I,I++):N=Math.random(),b.getSource())P=new i(t,F,K,w,D,b.getSource(),b.getSourceSelected(),b.getSourceHover(),b.getSourceHoverSelected(),N+"_I");else{var U=new e.Rect(c,x,T,k,R);U.setInvisibleFill(),b.addChild(U),(P=new n(t,b.getShape(),F,K,w-h.colWidth*u,D-h.rowHeight*u,N+"_S")).setSolidFill(b.getColor()),P.setSolidStroke(b.getBorderColor(),null,b.getBorderWidth()),P.setDataColor(b.getColor()),P.setClassName(b.getClassName()),P.setStyle(b.getStyle())}if(B<1){var j=new e.ClipPath;j.addRect(x,T,k,R),P.setClipPath(j)}M&&(b.setKeyboardTooltipLocation(new e.Point(F,K)),M=!1),b.addChild(P),t.registerMarker(P),H-=B,S=(S+B)%1}a.addChild(b),b.updateAriaAttributes(),v=A,y=E}}}else g.renderEmptyText(t,a,l)},g.getInfo=function(t,i,n){var r=t.getOptions(),s=r.items;if(!s)return{};for(var a=e.ArrayUtils.createBooleanMap(r.hiddenCategories),h=[],c=0,p=1,u=1,d=1/0,m=0;m<s.length;m++)if(null!=s[m]){var _=new l(t,s[m]);if(!a||!e.ArrayUtils.hasAnyMapItem(a,_.getCategories())){var f=_.getColSpan(),v=_.getRowSpan();f<=0||v<=0||(f>p&&(p=f),v>u&&(u=v),f<d&&(d=f),v<d&&(d=v),c+=f*v*_.getCount(),h.push(_))}}if(0==c)return{};var y=r.columnWidth,S=r.rowHeight;i&&n||(y||(y=S||r._defaultSize),S||(S=y));var C=o(t),b=r.columnCount,A=r.rowCount;return b||A||(i&&n?C?A=g._ceil(Math.sqrt(c*n/i),u):b=g._ceil(Math.sqrt(c*i/n),p):i?b=Math.max(Math.floor(i/y),1):n?A=Math.max(Math.floor(n/S),1):C?A=g._ceil(Math.sqrt(c),u):b=g._ceil(Math.sqrt(c),p)),b?A||(A=g._ceil(c/b,u)):b=g._ceil(c/A,p),i&&n&&(y||(y=S||Math.min(i/b,n/A)),S||(S=y)),b<=0||A<=0||y<=0||S<=0?{}:{items:h,colCount:b,rowCount:A,colWidth:y,rowHeight:S,minSpan:d}},g._ceil=function(t,e){return Math.ceil(t/e)*e},g._findNextAvailableCell=function(t,e,i,n,o,r){if(r){var s=g._findNextAvailableCell(t,i,e,o,n,!1);return s?{col:s.row,row:s.col}:null}for(var a=0;a<o-i+1;a++)for(var l=0;l<n-e+1;l++)if(g._areCellsAvailable(t,l,a,e,i))return g._occupyCells(t,l,a,e,i),{col:l,row:a};return null},g._areCellsAvailable=function(t,e,i,n,o){for(var r=0;r<o;r++)for(var s=0;s<n;s++)if(t.get(e+s,i+r))return!1;return!0},g._occupyCells=function(t,e,i,n,o){for(var r=0;r<o;r++)for(var s=0;s<n;s++)t.put(e+s,i+r,!0)},g.renderEmptyText=function(t,e,i){var n=t.getOptions(),o=n.translations.labelNoData,r=t.renderEmptyText(e,o,i.clone(),t.getEventManager(),n._statusMessageStyle);t.registerEmptyText(r)};
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var u=function(t,e,i){this.Init(t,e,i)};e.Obj.createSubclass(u,e.BaseComponent),u.newInstance=function(t,e,i){return new u(t,e,i)},u.prototype.Init=function(t,i,n){u.superclass.Init.call(this,t,i,n),this.EventManager=new p(this),this.EventManager.addListeners(this),e.Agent.isTouchDevice()||this.EventManager.setKeyboardHandler(new a(this.EventManager)),this.Defaults=new c(t),this._items=[],"blink"!==e.Agent.engine&&"safari"!==e.Agent.browser||this.getCtx().removeSizingSvg()},u.prototype._getPreferredSize=function(t,i){if(!t||!i){var n=g.getInfo(this,t,i);this._info=n,t||(t=n.items?n.colCount*n.colWidth:0),i||(i=n.items?n.rowCount*n.rowHeight:0)}return new e.Dimension(t,i)},u.prototype.render=function(t,i,n){this._oldContainer=this._container;var o=this._markers,r=this.Width?this.Width:0,s=this.Height?this.Height:0;this.EventManager.hideTooltip(),this._items=[],this._markers=[],this._info=null,this._emptyText&&(this._container.removeChild(this._emptyText),this._emptyText=null),this.StopAnimation(),this.SetOptions(t);var a=this.getCtx();if(i||n)this.Width=i,this.Height=n;else{a.getSvgDocument().style.display="block";var l=this._getPreferredSize();e.ToolkitUtils.setSvgSize(a,l.w,l.h);var h=e.ToolkitUtils.getOuterDivSize(a);l.w==h.w&&l.h!=h.h?(this.Height=h.h,l=this._getPreferredSize(null,this.Height),e.ToolkitUtils.setSvgSize(a,l.w,this.Height),this.Width=e.ToolkitUtils.getOuterDivSize(a).w):l.w!=h.w&&l.h==h.h?(this.Width=h.w,l=this._getPreferredSize(this.Width,null),e.ToolkitUtils.setSvgSize(a,this.Width,l.h),this.Height=e.ToolkitUtils.getOuterDivSize(a).h):(this.Width=h.w,this.Height=h.h),this.Width==l.w&&this.Height==l.h||(this._info=null)}if(this._container=new e.Container(a),this.addChild(this._container),g.render(this,this._container,new e.Rectangle(0,0,this.Width,this.Height),this._info),this._oldContainer){if("none"!=this.Options.animationOnDataChange&&t){var c=new e.DataAnimationHandler(a,null);c.constructAnimation(o,this._markers),this.Animation=c.getAnimation()}}else this.Animation=this._getAnimationOnDisplay();this.Animation?(e.ToolkitUtils.setSvgSize(a,Math.max(r,this.Width),Math.max(s,this.Height)),this.EventManager.removeListeners(this),this._emptyText&&this._container.removeChild(this._emptyText),this.Animation.setOnEnd(this._onRenderEnd,this),this.Animation.play()):this._onRenderEnd()},u.prototype.SetOptions=function(t){t?this.Options=this.Defaults.calcOptions(t):this.Options||(this.Options=this.GetDefaults()),e.Agent.isEnvironmentTest()&&(this.Options.animationOnDisplay="none",this.Options.animationOnDataChange="none");var i=this.Options.selectionMode;this._selectionHandler="single"==i?new e.SelectionHandler(this.getCtx(),e.SelectionHandler.TYPE_SINGLE):"multiple"==i?new e.SelectionHandler(this.getCtx(),e.SelectionHandler.TYPE_MULTIPLE):null,this.EventManager.setSelectionHandler(this._selectionHandler)},u.prototype._onRenderEnd=function(){var t;this._oldContainer&&(this.removeChild(this._oldContainer),this._oldContainer.destroy(),this._oldContainer=null),this.Animation&&(this.EventManager.addListeners(this),this._emptyText&&this._container.addChild(this._emptyText)),e.ToolkitUtils.setSvgSize(this.getCtx(),this.Width,this.Height);for(var i=0;i<this._items.length&&"none"==(t=this._items[i]).getShape();i++);this.EventManager.setFocusObj(t),this._selectionHandler&&this._selectionHandler.processInitialSelections(this.Options.selection,this._items),e.CategoryRolloverHandler.highlight(this.Options.highlightedCategories,this._items,"any"==this.Options.highlightMatch),this.UpdateAriaAttributes(),this.AnimationStopped||this.RenderComplete(),this.Animation=null,this.AnimationStopped=!1},u.prototype.registerItems=function(t){this._items=t},u.prototype.getItems=function(){return this._items},u.prototype.registerMarker=function(t){this._markers.push(t)},u.prototype.registerEmptyText=function(t){this._emptyText=t},u.prototype.getTotalCount=function(){for(var t=0,e=0;e<this._items.length;e++)t+=this._items[e].getCount();return t},u.prototype.getAnimationDuration=function(){return e.CSSStyle.getTimeMilliseconds(this.Options.animationDuration)/1e3},u.prototype._getAnimationOnDisplay=function(){var t=this.Options.animationOnDisplay,i=this.getAnimationDuration(),n=this.getCtx(),a=new e.Rectangle(0,0,this.Width,this.Height);if(e.BlackBoxAnimationHandler.isSupported(t))return e.BlackBoxAnimationHandler.getInAnimation(n,t,this._container,a,i);var l=[];if("popIn"==t)for(var h=0;h<this._markers.length;h++){var c=this._markers[h];l.push(new e.AnimPopIn(n,c,!0,i))}else if("none"!=t){for(h=0;h<this._markers.length;h++){c=this._markers[h];var p,g,u=new e.CustomAnimation(n,c,i);o(this)?(p=s(this)?this.Width:0,g=c.getCx(),c.setCx(p),u.getAnimator().addProp(e.Animator.TYPE_NUMBER,c,c.getCx,c.setCx,g)):(p=r(this)?this.Height:0,g=c.getCy(),c.setCy(p),u.getAnimator().addProp(e.Animator.TYPE_NUMBER,c,c.getCy,c.setCy,g)),l.push(u)}l.push(e.BlackBoxAnimationHandler.getInAnimation(n,e.BlackBoxAnimationHandler.ALPHA_FADE,this._container,a,i))}return l.length>0?new e.ParallelPlayable(n,l):null},u.prototype.highlight=function(t){var i=this.getOptions();i.highlightedCategories=e.JsonUtils.clone(t),e.CategoryRolloverHandler.highlight(t,this.getItems(),"any"==i.highlightMatch)},u.prototype.select=function(t){this.getOptions().selection=e.JsonUtils.clone(t),this._selectionHandler&&this._selectionHandler.processInitialSelections(t,this.getItems())},u.prototype.getAutomation=function(){return this._automation||(this._automation=new h(this)),this._automation},t.PictoChart=u,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ojpictochart-toolkit.js.map