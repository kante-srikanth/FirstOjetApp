/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["accUtils"],(function(e){return function(){this.connected=()=>{e.announce("Customers page loaded.","assertive"),document.title="Customers"},this.disconnected=()=>{},this.transitionCompleted=()=>{}}}));