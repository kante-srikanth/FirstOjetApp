/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["require","exports","ojs/ojcore-base","ojL10n!ojtranslations/nls/ojtranslations"],function(e,n,o,t){"use strict";function r(e){if(e&&e.__esModule)return e;var n={};return e&&Object.keys(e).forEach(function(o){var t=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(n,o,t.get?t:{enumerable:!0,get:function(){return e[o]}})}),n.default=e,n}o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;
/**
   * @license
   * Copyright (c) 2008 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var i={},a=t;i.getDeviceRenderMode=function(){return document.body.getAttribute("data-oj-device-render-mode")||i.getDeviceType()},i.getDeviceType=function(){return o.AgentUtils.getAgentInfo().deviceType},i.getLocale=function(){if(o.__isAmdLoaderPresent()){o.Assert.assert(void 0!==a,"ojtranslations module must be defined");var e=a._ojLocale_;return"root"===e?"en":e}var n=i._locale;return null==n&&((n=document.documentElement.lang)||(n=void 0===navigator?"en":(navigator.language||navigator.userLanguage||"en").toLowerCase()),n=n.toLowerCase(),i._locale=n),n},i.setLocale=function(n,t){if(o.__isAmdLoaderPresent()){var s="ojL10n!ojtranslations/nls/",u=s+n+"/ojtranslations",l=[new Promise(function(n,o){e([u],function(e){n(r(e))},o)}).then(function(e){a=e})];if(o.LocaleData){var c=s+n+"/localeElements",f=new Promise(function(n,o){e([c],function(e){n(r(e))},o)}).then(function(e){e&&o.LocaleData.__updateBundle(e)});if(l.push(f),o.TimezoneData){var g=o.TimezoneData.__getBundleNames().map(function(o){return new Promise(function(t,i){e(["".concat(s).concat(n).concat(o)],function(e){t(r(e))},i)})});l.push(Promise.all(g).then(function(e){o.TimezoneData.__mergeIntoLocaleElements(e)}))}}Promise.all(l).then(function(){t&&t()})}else i._locale=n,t&&t()},i.getResourceUrl=function(e){if(null==e||/^\/|:/.test(e))return e;var n=i._resourceBaseUrl;null==n&&(n=i._getOjBaseUrl()||"");var o=n.length;return n+(0===o||"/"===n.charAt(o-1)?"":"/")+e},i.setResourceBaseUrl=function(e){i._resourceBaseUrl=e},i.setAutomationMode=function(e){i._automationMode=e},i.getAutomationMode=function(){return i._automationMode},i.getVersionInfo=function(){var e="Oracle JET Version: "+o.version+"\n";e+="Oracle JET Revision: "+o.revision+"\n";var n="undefined"!=typeof window;return n&&window.navigator&&(e+="Browser: "+window.navigator.userAgent+"\n",e+="Browser Platform: "+window.navigator.platform+"\n"),$&&($.fn&&(e+="jQuery Version: "+$.fn.jquery+"\n"),$.ui&&$.ui.version&&(e+="jQuery UI Version: "+$.ui.version+"\n")),o.ComponentBinding&&(e+="Knockout Version: "+o.ComponentBinding.__getKnockoutVersion()+"\n"),n&&window.require&&(e+="Require Version: "+window.require.version+"\n"),e},i.logVersionInfo=function(){},i._getOjBaseUrl=function(){var n=null;return o.__isAmdLoaderPresent()&&(n=e.toUrl("ojs/_foo_").replace(/[^/]*$/,"../")),n},i.__getTemplateEngine=function(){if(!i._templateEnginePromise){if(!o.__isAmdLoaderPresent())throw new Error("JET Template engine cannot be loaded without an AMD loader");i._templateEnginePromise=new Promise(function(n,o){e(["ojs/ojtemplateengine"],function(e){n(r(e))},o)}).then(function(e){return e.default})}return i._templateEnginePromise},i.getConfigBundle=function(){return a},i.getExpressionEvaluator=function(){return i._expressionEvaluator},i.setExpressionEvaluator=function(e){if(i._expressionEvaluator)throw new Error("JET Expression evaluator can't be set more than once.");i._expressionEvaluator=e};var s=i.getDeviceRenderMode,u=i.getDeviceType,l=i.getLocale,c=i.setLocale,f=i.getResourceUrl,g=i.setResourceBaseUrl,d=i.setAutomationMode,m=i.getAutomationMode,v=i.getVersionInfo,_=i.logVersionInfo,p=i.setExpressionEvaluator,E=i.getExpressionEvaluator,w=i.getConfigBundle,j=i.__getTemplateEngine;n.__getTemplateEngine=j,n.getAutomationMode=m,n.getConfigBundle=w,n.getDeviceRenderMode=s,n.getDeviceType=u,n.getExpressionEvaluator=E,n.getLocale=l,n.getResourceUrl=f,n.getVersionInfo=v,n.logVersionInfo=_,n.setAutomationMode=d,n.setExpressionEvaluator=p,n.setLocale=c,n.setResourceBaseUrl=g,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=ojconfig.js.map