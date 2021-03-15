/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcomponentcore","ojs/ojcustomelement","ojs/ojcustomelement-utils"],function(e,t,o){"use strict";
/**
   * @license
   * Copyright (c) 2017 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */var i,n=function(t){var i=this,n=t.element,s=!0,r=null;function l(){r=null}function d(t,o){var i=n.value;void 0===t._ojSwitcher_orig_display_style&&Object.defineProperty(t,"_ojSwitcher_orig_display_style",{value:t.style.display}),o===i?function(t){"none"!==t.style.display?s&&e.subtreeShown(t,{initialRender:!0}):(t.style.display="",e.subtreeShown(t,s?{initialRender:!0}:void 0))}(t):function(t){"none"!==t.style.display&&(t.style.display="none",e.subtreeHidden(t))}(t)}i._caseElementMutationObserver=new MutationObserver(function(e){e.forEach(function(e){"childList"===e.type&&(e.addedNodes&&Array.prototype.forEach.call(e.addedNodes,function(e){if(1===e.nodeType){var t=e.getAttribute("slot");d(e,t),l()}}),e.removedNodes&&Array.prototype.forEach.call(e.removedNodes,function(e){1===e.nodeType&&(void 0!==e._ojSwitcher_orig_display_style&&(e.style.display=e._ojSwitcher_orig_display_style),l())}))})}),this.createDOM=function(){i._caseElementMutationObserver.observe(n,{childList:!0})},this.updateDOM=function(){for(var e=(r||(r=o.CustomElementUtils.getSlotMap(n)),r),t=Object.keys(e),i=0;i<t.length;i++)for(var l=t[i],a=e[l],c=0;c<a.length;c++)d(a[c],l);s&&(s=!1)}};
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */(i={properties:{value:{type:"string",value:""}},methods:{getProperty:{},refresh:{},setProperties:{},setProperty:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}}).extension._CONSTRUCTOR=n,i.extension._CONTROLS_SUBTREE_HIDDEN=!0,oj.CustomElementBridge.register("oj-switcher",{metadata:i})});
//# sourceMappingURL=ojswitcher.js.map