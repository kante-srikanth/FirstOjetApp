/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","ojs/ojcomponentcore","ojs/ojslider","jqueryui-amd/widgets/draggable","ojs/ojtouchproxy","ojs/ojeditablevalue","ojs/ojcore-base","jquery","ojs/ojcolor","ojs/ojdomutils","ojs/ojlogger","ojs/ojlabelledbyutils"],function(t,e,s,i,a,r,l,h,u,o,n,d){"use strict";
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */var _;l=l&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l,h=h&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h,u=u&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u,d=d&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d,
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
function(){function t(t){var e=function(t,e,s){t/=255,e/=255,s/=255;var i,a,r=Math.max(t,e,s),l=Math.min(t,e,s),h=(r+l)/2;if(r===l)i=0,a=0;else{var u=r-l;switch(a=h>.5?u/(2-r-l):u/(r+l),r){case t:i=(e-s)/u+(e<s?6:0);break;case e:i=(s-t)/u+2;break;case s:i=(t-e)/u+4}i/=6}return[i,a,h]}(t.getRed(),t.getGreen(),t.getBlue());return e[0]*=360,e[1]*=100,e[2]*=100,e.push(t.getAlpha()),e}l.__registerWidget("oj.ojColorSpectrum",h.oj.editableValue,{widgetEventPrefix:"oj",defaultElement:"<input>",options:{labelledBy:null,value:null,rawValue:null},getNodeBySubId:function(t){if(null===t)return this.element?this.element[0]:null;var e=t.subId,s=this._super(t);if(!s)switch(e){case"oj-spectrum":s=this._$spectrum[0];break;case"oj-spectrum-thumb":s=this._$spectrumThumb[0];break;case"oj-hue-slider-bar":s=this._$hueSlider.ojSlider("getNodeBySubId",{subId:"oj-slider-bar"});break;case"oj-hue-slider-bar-value":s=this._$hueSlider.ojSlider("getNodeBySubId",{subId:"oj-slider-bar-value"});break;case"oj-hue-slider-thumb":s=this._$hueSlider.ojSlider("getNodeBySubId",{subId:"oj-slider-thumb-0"});break;case"oj-opacity-slider-bar":s=this._$alphaSlider.ojSlider("getNodeBySubId",{subId:"oj-slider-bar"});break;case"oj-opacity-slider-bar-value":s=this._$alphaSlider.ojSlider("getNodeBySubId",{subId:"oj-slider-bar-value"});break;case"oj-opacity-slider-thumb":s=this._$alphaSlider.ojSlider("getNodeBySubId",{subId:"oj-slider-thumb-0"})}return s},getSubIdByNode:function(t){if(!t)return null;var e,s=h(t),i=null;return s.hasClass("oj-colorspectrum-spectrum")?i="oj-spectrum":s.hasClass("oj-colorspectrum-thumb")?i="oj-spectrum-thumb":(e=s.closest(".oj-slider").hasClass("oj-slider-vertical")?"hue":"opacity",s.hasClass("oj-slider-bar")?i="oj-"+e+"-slider-bar":s.hasClass("oj-slider-bar-value")?i="oj-"+e+"-slider-bar-value":s.hasClass("oj-slider-thumb")&&(i="oj-"+e+"-slider-thumb")),null!=i?{subId:i}:this._super(t)},_destroy:function(){this._$boundElem&&(this._clearListeners(),this._destroySliders(),this._removeMarkup(),this._$boundElem.removeClass("oj-colorspectrum"),this._clear()),this._super()},_ComponentCreate:function(){this._super(),this._initEditor()},_AfterCreate:function(){var t;if(this._super(),this._labelledByUpdatedForSet(this.element[0].id,null,this.options.labelledBy,this._$spectrumThumb),this._IsCustomElement()||(t=this._GetLabelElement()),t){var e=t.attr("id");e?this._$spectrumThumb.attr("aria-labelledby",e):n.warn("JET Color Spectrum: The label for this component needs an id in order to be accessible")}else{var s=this.element.attr("aria-label");s&&this._$spectrumThumb.attr("aria-label",s)}},_setOption:function(t,e,s){var i=this.options.labelledBy;switch(t){case"value":this._setOptValue(e);break;case"disabled":this._setOptDisabled(e,!0);break;case"labelledBy":this._labelledByUpdatedForSet(this.element[0].id,i,e,this._$spectrumThumb)}this._super(t,e,s)},_SetRawValue:function(t,e){var s=t;if("string"==typeof t)try{s=new u(t)}catch(e){n.error("ojColorSpectrum (id='"+this.element.attr("id")+"'): invalid "+this._transientValueName+" ("+t+"), defaulting to black"),s=u.BLACK}var i={};i._context={originalEvent:e,writeback:!0,internalSet:!0,readOnly:!0},this._comparedRoundedColor(this.options[this._transientValueName],s)||this.option(this._transientValueName,s,i)},_labelledByUpdatedForSet:d._labelledByUpdatedForSet,_comparedRoundedColor:function(t,e){return t.getRed()===e.getRed()&&t.getGreen()===e.getGreen()&&t.getBlue()===e.getBlue()&&t.getAlpha()===e.getAlpha()},_compareColorValues:function(t,e){return t instanceof u&&e instanceof u&&t.isEqual(e)},_setOptDisabled:function(t,e){var s=!e||e&&t!==this._disabled;return s&&(this._enableSliders(!t),t?(this.element.addClass("oj-disabled"),this._makeThumbDraggable(!1)):(this.element.removeClass("oj-disabled"),this._makeThumbDraggable(!0)),this._disabled=t),s},_setOptValue:function(t){t instanceof u&&(this._compareColorValues(this._value,t)||(this._setColorVals(t),this._setSliderValue(this._hueVal,!0),this._setSliderValue(this._alphaVal,!1),this._setSpectrumHue(this._hueVal,this._satVal,this._lumVal,this._alphaVal,!0)))},_onSliderOptionChange:function(t,e){var s,i,a,r,l,o,n,d;this._sliderSetup&&("rawValue"!==e.option&&"value"!==e.option||void 0===e.value||("value"===e.option&&(this._isOrigEvent=!!t.originalEvent),o=(d=h(t.target)).hasClass("oj-colorspectrum-hue"),n=d.hasClass("oj-colorspectrum-alpha"),(o||n)&&(i=this._hueVal,a=this._satVal,r=this._lumVal,l=this._alphaVal,o?(i=e.value,this._updateAlphaBG(i,a,r),this._setSpectrumHue(i,a,r,l,!1)):(l=e.value,this._setAriaText(i,a,r,l)),s=new u({h:i,s:a,l:r,a:l}),(t.originalEvent||this._isOrigEvent)&&(this._isOrigEvent=!1,"rawValue"===e.option?this._SetRawValue(s,t):"value"===e.option&&this._SetValue(s,t)),this._setColorVals(s))))},_setSliderValue:function(t,e){(e?this._$hueSlider:this._$alphaSlider).ojSlider("option","value",t)},_setSpectrumHue:function(t,e,s,i,a){var r="hsl("+t+", 100%, 50%)";if(this._$spectrum.css("background-color",r),a){var l=this._getSatLumSpectrumPosition(e,s);this._setThumbPosition(l.x,l.y)}this._setAriaText(t,e,s,i)},_setSpectrumMask:function(){var t,e=" -___-linear-gradient(top, hsl(0, 0%, 100%) 0%, hsla(0, 0%, 100%, 0) 50%, hsla(0, 0%, 0%, 0) 50%, hsl(0, 0%, 0%) 100%), -___-linear-gradient(left, hsl(0, 0%, 50%) 0%, hsla(0, 0%, 50%, 0) 100%)";switch(l.AgentUtils.getAgentInfo().browser){case l.AgentUtils.BROWSER.FIREFOX:t="moz";break;case l.AgentUtils.BROWSER.CHROME:case l.AgentUtils.BROWSER.SAFARI:case l.AgentUtils.BROWSER.EDGE_CHROMIUM:default:t="webkit";break;case l.AgentUtils.BROWSER.IE:t="ms"}e=(e=" -___-linear-gradient(top, hsl(0, 0%, 100%) 0%, hsla(0, 0%, 100%, 0) 50%, hsla(0, 0%, 0%, 0) 50%, hsl(0, 0%, 0%) 100%), -___-linear-gradient(left, hsl(0, 0%, 50%) 0%, hsla(0, 0%, 50%, 0) 100%)").replace(/___/g,t),this._$spectrum.css("backgroundImage",e)},_setThumbPosition:function(t,e){isNaN(t)||(this._xThumb=t),this._yThumb=e,this._moveThumb(0,0)},_getSatLumSpectrumPosition:function(t,e){var s=Math.min(t/100*this._spectrumWidth,this._spectrumWidth),i=this._spectrumHeight-Math.min(e/100*this._spectrumHeight,this._spectrumHeight);return{x:Math.round(s),y:Math.round(i)}},_moveThumb:function(t,e){var s,i;(s=this._xThumb+t)<0&&(s=0),(i=this._yThumb+e)<0&&(i=0),s>=this._spectrumWidth&&(s=this._spectrumWidth-1),i>=this._spectrumHeight&&(i=this._spectrumHeight-1),this._xThumb=s,this._yThumb=i,s=s-this._spectrumThumbRadius+"px",i=i-this._spectrumThumbRadius+"px",this._$spectrumThumb[0].style.left=s,this._$spectrumThumb[0].style.top=i},_spectrumClick:function(t){if(!this._disabled){var e,s,i,a,r=this._$spectrum.offset(),l=t.pageX-r.left,h=t.pageY-r.top;l=Math.round(l),h=Math.round(h),s=(a=this._getSatLumFromPosition(l,h)).s,i=a.l,e=this._hueVal,this._updateAlphaBG(e,s,i);var o=new u({h:e,s:s,l:i,a:this._alphaVal});this._SetRawValue(o,t),this._SetValue(o,t),this._setAriaText(e,s,i,this._alphaVal),this._value=o,this._setSatLum(s,i),this._setThumbPosition(l,h),this._$spectrumThumb.focus()}},_keyDown:function(t){var e,s,i,a,r=1;if(this._keyNow=(new Date).getTime(),this._keyStart<0&&(this._keyStart=this._keyNow,this._keyCount=0),a=this._keyNow-this._keyStart,this._keyCount+=1,(a>1400||this._keyCount>25)&&(r=3),s=0,i=0,40===(e=t.keyCode))i=r;else if(38===e)i=-r;else if(39===e)s=r;else if(37===e)s=-r;else if(36===e)this._setThumbPosition(0,0),this._keyStart=-1;else if(35===e)this._setThumbPosition(this._spectrumWidth-1,this._spectrumHeight-1),this._keyStart=-1;else if(33===e)this._setThumbPosition(NaN,0),this._keyStart=-1;else{if(34!==e)return;this._setThumbPosition(NaN,this._spectrumHeight-1),this._keyStart=-1}return this._moveThumb(s,i),this._handleThumbMoved(t,this._xThumb,this._yThumb),t.preventDefault(),!1},_keyUp:function(t){this._keyStart=-1;var e=this._getSatLumFromPosition(this._xThumb,this._yThumb);this._setAriaText(this._hueVal,e.s,e.l,this._alphaVal);var s=this.options[this._transientValueName];this._SetValue(s,t)},_initThumbDraggable:function(){this._thumbDragHandler||(this._thumbDragHandler=this._thumbDrag.bind(this)),this._$spectrumThumb.draggable({drag:this._thumbDragHandler,stop:this._thumbDragHandler})},_makeThumbDraggable:function(t){this._$spectrumThumb.draggable(t?"enable":"disable")},_thumbDrag:function(t,e){var s,i,a,r;e.position.left<-this._spectrumThumbRadius?(e.position.left=-this._spectrumThumbRadius,s=0):e.position.left+this._spectrumThumbRadius>=this._spectrumWidth&&(e.position.left=this._spectrumWidth-1-this._spectrumThumbRadius,i=this._spectrumWidth-1),e.position.top<-this._spectrumThumbRadius?(e.position.top=-this._spectrumThumbRadius,i=0):e.position.top+this._spectrumThumbRadius>=this._spectrumHeight&&(e.position.top=this._spectrumHeight-1-this._spectrumThumbRadius,i=this._spectrumHeight-1),a=this._$spectrumThumb.offset(),r=this._$spectrum.offset(),0!==s&&(s=a.left+this._spectrumThumbRadius-r.left),0!==i&&(i=a.top+this._spectrumThumbRadius-r.top),"dragstop"!==t.type&&this._xThumb===s&&this._yThumb===i||("drag"===t.type?(this._xThumb=s,this._yThumb=i):(s=this._xThumb,i=this._yThumb),this._handleThumbMoved(t,s,i))},_handleThumbMoved:function(t,e,s){var i=!1,a=this._hueVal,r=this._getSatLumFromPosition(e,s),l=r.s,h=r.l;this._updateAlphaBG(a,l,h);var o=new u({h:a,s:l,l:h,a:this._alphaVal});this._SetRawValue(o,t),"dragstop"===t.type&&(this._SetValue(o,t.originalEvent),i=!0),this._value=o,this._setSatLum(l,h),i&&this._setAriaText(a,l,h,this._alphaVal)},_getSatLumFromPosition:function(t,e){return{s:t/(this._spectrumWidth-1)*100,l:100-e/(this._spectrumHeight-1)*100}},_updateAlphaBG:function(t,e,s){var i,a="hsla("+t+","+e+"%,"+s+"%, 0)",r="hsla("+t+","+e+"%,"+s+"%, 1.0)";this._isRtl&&(i=r,r=a,a=i),i=(i="linear-gradient(90deg, "+a+", "+r+")")+","+this._alphaBgUrl,this._disabledAlphaBG=i,this._$alphaBarBack.css("background",i)},_getRoundedHsl:function(t,e,s,i){var a="hsl",r="number"==typeof i&&i<1;return a+=r?"a(":"(",a+=Math.round(t)+", "+Math.round(100*e)/100+"%, "+Math.round(100*s)/100+"%"+(r?","+i:"")+")"},_setSatLum:function(t,e){this._satVal=t,this._lumVal=e},_setColorVals:function(e){if(e){this._value=e;var s=t(e);this._hueVal=s[0],this._satVal=s[1],this._lumVal=s[2],this._alphaVal=s[3]}},_setAriaText:function(t,e,s,i){var a=this._getRoundedHsl(t,e,s,i);this._$spectrumThumb.attr("aria-valuetext",a)},_initEditor:function(){this._initData(),this._setup()},_setup:function(){this._$boundElem.append(this._markup),this._$boundElem.addClass("oj-colorspectrum"),h(".oj-colorspectrum-hue").uniqueId(),h(".oj-colorspectrum-alpha").uniqueId(),this._$editorContainer=this._$boundElem.find(".oj-colorspectrum-container"),this._$hueSlider=this._$boundElem.find(".oj-colorspectrum-hue"),this._$alphaSlider=this._$boundElem.find(".oj-colorspectrum-alpha"),this._$spectrum=this._$boundElem.find(".oj-colorspectrum-spectrum"),this._$spectrumThumb=this._$boundElem.find(".oj-colorspectrum-thumb"),this._$spectrumThumb.css({left:"-9999px",top:"-9999px"}),this._spectrumThumbRadius=this._$spectrumThumb[0].offsetWidth/2,this._spectrumThumbRadius<=0&&(this._spectrumThumbRadius=this._$spectrumThumb.width()/2),this._isTouch=o.isTouchSupported(),this._spectrumWidth=this._$spectrum.width(),this._spectrumHeight=this._$spectrum.height(),this._$spectrumThumb.attr("aria-describedby",this._$boundElem.find(".oj-colorspectrum-thumb-description").uniqueId().attr("id"));var e=document.createElement("div");e.className="oj-colorspectrum-alpha-bg",this._$boundElem[0].appendChild(e),this._alphaBgUrl=window.getComputedStyle(e,null).getPropertyValue("background-image"),this._$boundElem[0].removeChild(e);var s=!!this._disabled,i=t(this._value);this._hueVal=i[0],this._satVal=i[1],this._lumVal=i[2],this._alphaVal=i[3],this._sliderSetup=!1,this._$hueSlider.ojSlider({max:360,min:0,step:1,value:this._hueVal,orientation:"vertical",displayOptions:{messages:"none"},optionChange:this._onSliderOptionChange.bind(this),rootAttributes:{class:"oj-slider-color-picker"}}).attr("data-oj-internal",""),this._$alphaSlider.ojSlider({max:1,min:0,step:.01,value:this._alphaVal,orientation:"horizontal",displayOptions:{messages:"none"},optionChange:this._onSliderOptionChange.bind(this),rootAttributes:{class:"oj-slider-color-picker"}}).attr("data-oj-internal",""),this._initSliders(),this._setSpectrumMask(),this._setSpectrumHue(this._hueVal,this._satVal,this._lumVal,this._alphaVal,!0),this._$spectrum.click(this._spectrumClick.bind(this)),this._initThumbDraggable(),this._setOptDisabled(s),this._$spectrumThumb.keydown(this._keyDown.bind(this)),this._$spectrumThumb.keyup(this._keyUp.bind(this)),this._$spectrum.focus(this._nofocus.bind(this)),this._focusable({element:this._$spectrumThumb,applyHighlight:!0}),o.isTouchSupported()&&this._setupTouch(this._$spectrumThumb)},_nofocus:function(t){return this._$spectrumThumb.focus(),!1},_initSliders:function(){var t={subId:"oj-slider-bar"};this._$hueBarBack=h(this._$hueSlider.ojSlider("getNodeBySubId",t)),this._$alphaBarBack=h(this._$alphaSlider.ojSlider("getNodeBySubId",t)),t.subId="oj-slider-bar-value",this._$hueBarValue=h(this._$hueSlider.ojSlider("getNodeBySubId",t)),this._$alphaBarValue=h(this._$alphaSlider.ojSlider("getNodeBySubId",t));var e="linear-gradient(0deg, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)";this._$hueBarBack.css("background",e),this._disabledHueBG=e,this._updateAlphaBG(this._hueVal,this._satVal,this._lumVal),this._sliderSetup=!0},_initData:function(){this._applyOptions(),this._xThumb=0,this._yThumb=0;var t=this._EscapeXSS(this.getTranslatedString("labelHue")),e=this._EscapeXSS(this.getTranslatedString("labelOpacity")),s=this._EscapeXSS(this.getTranslatedString("labelThumbDesc"));this._markup=["<div class='oj-colorspectrum-container oj-form-control-container'>","<div class='oj-colorspectrum-spectrum' tabindex='-1'>","<div class='oj-colorspectrum-thumb' role='slider' aria-describedby='' tabIndex='0'></div>","</div>","<div class='oj-colorspectrum-thumb-description oj-helper-hidden-accessible'>"+s+"</div>","<input class='oj-colorspectrum-hue' aria-label='"+t+"'></input>","<input class='oj-colorspectrum-alpha' aria-label='"+e+"'></input>","</div>"].join(""),this._keyStart=-1,this._isRtl="rtl"===this._GetReadingDirection()},_applyOptions:function(){var t,e=this.options;this._doc=this.element[0].ownerDocument,this._body=this._doc.body,this._$boundElem=h(this.element),this._disabled=!1,this._transientValueName=this._IsCustomElement()?"transientValue":"rawValue",(t=e.value)instanceof u||(t=null),this._value=t||u.BLACK,e[this._transientValueName]=this._value,t=e.disabled,this._disabled="boolean"==typeof t&&t},_enableSliders:function(t){var e=!t;if(t){this._$hueSlider.ojSlider("option","disabled",e),this._$alphaSlider.ojSlider("option","disabled",e);var s={subId:"oj-slider-bar"};this._$hueSlider=this._$boundElem.find(".oj-colorspectrum-hue"),this._$alphaSlider=this._$boundElem.find(".oj-colorspectrum-alpha"),this._$hueBarBack=h(this._$hueSlider.ojSlider("getNodeBySubId",s)),this._$alphaBarBack=h(this._$alphaSlider.ojSlider("getNodeBySubId",s)),this._disabledAlphaBG&&this._$alphaBarBack.css("background",this._disabledAlphaBG),this._disabledHueBG&&this._$hueBarBack.css("background",this._disabledHueBG)}else{var i=this._$hueBarBack.css("background");i&&i.length>0&&(this._disabledHueBG=i),(i=this._$alphaBarBack.css("background"))&&i.length>0&&(this._disabledAlphaBG=i),this._$hueBarBack.css("background",""),this._$alphaBarBack.css("background",""),this._$hueSlider.ojSlider("option","disabled",e),this._$alphaSlider.ojSlider("option","disabled",e)}},_destroySliders:function(){this._$hueSlider.ojSlider("destroy"),this._$alphaSlider.ojSlider("destroy")},_removeMarkup:function(){this._$boundElem.empty()},_clearListeners:function(){this._$spectrum.off("click"),this._$spectrumThumb.off("mousedown"),this._$spectrumThumb.off("keydown"),this._$spectrumThumb.off("keyup"),this._touchProxy&&this._tearDownTouch(this._$spectrumThumb)},_clear:function(){this._markup=null,this._$boundElem=null,this._$editorContainer=null,this._$hue=null,this._$alpha=null,this._$editorContainer=null,this._$hueSlider=null,this._$alphaSlider=null,this._$spectrum=null,this._$spectrumThumb=null,this._spectrumThumbSize=null,this._strings=null,this._mouseMoveHandler=null,this._mouseUpHandler=null},_setupTouch:function(t){this._touchProxy=l._TouchProxy.addTouchListeners(t)},_tearDownTouch:function(t){l._TouchProxy.removeTouchListeners(t)},_GetMessagingLauncherElement:function(){return this.element},_GetContentElement:function(){return this._$spectrumThumb},_GetElementValue:function(){return this._value},_SetDisplayValue:function(t){this._value="string"==typeof t?new u(t):t},_GetDisplayValue:function(){return this._value.toString()},_GetDefaultStyleClass:function(){return"oj-colorspectrum"},_EscapeXSS:function(t){return h("<span>"+t+"</span>").text()}})}(),(_={properties:{describedBy:{type:"string"},disabled:{type:"boolean",value:!1},displayOptions:{type:"object",properties:{converterHint:{type:"Array<string>|string"},helpInstruction:{type:"Array<string>|string",value:["notewindow"]},messages:{type:"Array<string>|string"},validatorHint:{type:"Array<string>|string"}}},help:{type:"object",properties:{instruction:{type:"string",value:""}}},helpHints:{type:"object",properties:{definition:{type:"string",value:""},source:{type:"string",value:""}}},labelEdge:{type:"string",enumValues:["inside","none","provided"]},labelHint:{type:"string",value:""},labelledBy:{type:"string"},messagesCustom:{type:"Array<Object>",writeback:!0,value:[]},transientValue:{type:"object",writeback:!0,readOnly:!0},translations:{type:"object",value:{},properties:{labelHue:{type:"string"},labelOpacity:{type:"string"},labelSatLum:{type:"string"},labelThumbDesc:{type:"string"}}},userAssistanceDensity:{type:"string",enumValues:["compact","efficient","reflow"],value:"reflow"},valid:{type:"string",writeback:!0,enumValues:["invalidHidden","invalidShown","pending","valid"],readOnly:!0},value:{type:"object",writeback:!0}},methods:{getProperty:{},refresh:{},reset:{},setProperties:{},setProperty:{},showMessages:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojAnimateEnd:{},ojAnimateStart:{}},extension:{}}).extension._WIDGET_NAME="ojColorSpectrum",l.CustomElementBridge.register("oj-color-spectrum",{metadata:l.CollectionUtils.mergeDeep(_,{properties:{readonly:{binding:{consume:{name:"readonly"}}},userAssistanceDensity:{binding:{consume:{name:"userAssistanceDensity"}}},labelEdge:{binding:{consume:{name:"labelEdge"}}}}})})});
//# sourceMappingURL=ojcolorspectrum.js.map