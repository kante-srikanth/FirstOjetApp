/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["accUtils","knockout","jquery","ojs/ojarraydataprovider","ojs/ojlabel","ojs/ojselectsingle","ojs/ojchart","ojs/ojlistview"],(function(e,r,i,a){return function(){var o=this;o.chartDataProvider=new a([{id:0,series:"Baseball",group:"Group A",value:42},{id:1,series:"Baseball",group:"Group B",value:34},{id:2,series:"Bicycling",group:"Group A",value:55},{id:3,series:"Bicycling",group:"Group B",value:30},{id:4,series:"Skiing",group:"Group A",value:36},{id:5,series:"Skiing",group:"Group B",value:50},{id:6,series:"Soccer",group:"Group A",value:22},{id:7,series:"Soccer",group:"Group B",value:46}],{keyAttributes:"id"}),o.chartTypes=new a([{value:"pie",label:"Pie"},{value:"bar",label:"Bar"}],{keyAttributes:"value"}),o.val=r.observable("bar"),o.activityDataProvider=r.observable(),i.getJSON("js/store_data.json").then((function(e){var r=e;o.activityDataProvider(new a(r,{keyAttributes:"id"}))})),this.connected=()=>{e.announce("Dashboard page loaded.","assertive"),document.title="Dashboard"},this.disconnected=()=>{},this.transitionCompleted=()=>{}}}));