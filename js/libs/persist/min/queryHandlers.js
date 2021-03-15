define(["./persistenceManager","./persistenceStoreManager","./persistenceUtils","./impl/logger","./impl/sql-where-parser.min"],function(a,b,c,d,e){"use strict";function f(a,b,e){b=b||function(a){return h(a)};var f=function(a){var b,c,d,e,f,g=-1,h=0,i=a.split("?");c="undefined"==typeof URLSearchParams?k(i[1]):new URLSearchParams(i[1]).entries();do{d=c.next(),null!=d.value&&(e=d.value[0],f=d.value[1],"q"==e?b=f:"limit"==e?g=parseInt(f,10):"offset"==e&&(h=parseInt(f,10)))}while(!d.done);return{offset:h,limit:g,searchCriteria:b}},i=function(h,i){if("GET"==h.method||"HEAD"==h.method){d.log("Offline Persistence Toolkit queryHandlers: OracleRestQueryHandler processing request");var j,k,l=f(h.url),m=c._mapFindQuery(b(l.searchCriteria),e);if(null!=i.jsonProcessor&&(j=i.jsonProcessor.shredder,k=i.jsonProcessor.unshredder),null!=j&&null!=k)return g(h,a,m,j,k,l.offset,l.limit).then(function(a){if(a){return a.clone().text().then(function(b){if(null!=b&&b.length>0)try{var d=JSON.parse(b);return d.links?a:(d.links=[{rel:"self",href:h.url}],c.setResponsePayload(a,d).then(function(a){return a}))}catch(a){}})}})}return Promise.resolve()};return i.normalizeQueryParameter=f,i}function g(e,f,g,h,i,j,k){return a.getCache()._internalMatch(e,{ignoreSearch:!0,ignoreBody:!0}).then(function(h){if(h)return"unknown"===h.resourceType?null:"single"===h.resourceType?a.getCache()._matchByKey(e,h.key):b.openStore(f).then(function(a){return a.find(g)}).then(function(b){var g=!1,l=b.length;j&&j>0&&(b=j<l?b.slice(j):[]),k&&k>0&&b.length>0&&k<b.length&&(g=!0,b=b.slice(0,k));var m={name:f,data:b,resourceType:"collection"};return a.getCache()._matchByKey(e,h.key,{ignoreBody:!0}).then(function(a){return i([m],a).then(function(b){return b.clone().text().then(function(e){if(!(null!=e&&e.length>0))return b;try{var f=JSON.parse(e);return null!=f.items?(k&&(f.limit=parseInt(k,10)),j&&(f.offset=parseInt(j,10)),f.hasMore=g,f.totalResults=l,c.setResponsePayload(a,f)):b}catch(a){d.log("JSON parse error on payload: "+e)}})})})});var l=m(e);return l?b.openStore(f).then(function(a){return a.findByKey(l)}).then(function(b){if(b){var d=n(e);return d?c.requestToJSON(e).then(function(e){return e.url=d,c.requestFromJSON(e).then(function(c){return a.getCache().match(c,{ignoreSearch:!0,ignoreBody:!0}).then(function(a){if(a){return i([{name:f,data:[b],resourceType:"single"}],a)}})})}):void 0}}):void 0})}function h(a){var b={};if(a){var c=e.defaultConfig;c.operators[5]["<>"]=2,c.tokenizer.shouldTokenize.push("<>");var d,f=new e(c),g=a.split(";"),h={},i=[],j={};for(d=0;d<g.length;d++)j=f.parse(g[d],function(a,b){"AND"!=(a=a.toUpperCase())&&"OR"!=a&&","!=a&&(b[0]="value."+b[0]);var c=b[0],d=b[1],e={};switch(a){case">":e[c]={$gt:d};break;case"<":e[c]={$lt:d};break;case">=":e[c]={$gte:d};break;case"<=":e[c]={$lte:d};break;case"=":e[c]={$eq:d};break;case"!=":e[c]={$ne:d};break;case"AND":e={$and:b};break;case"OR":e={$or:b};break;case"LIKE":d=d.replace(/%/g,".*"),e[c]={$regex:RegExp(d,"i")};break;case"BETWEEN":var f=[];f[0]={},f[1]={},f[0][c]={$gte:b[1]},f[1][c]={$lte:b[2]},e={$and:f};break;case"<>":e[c]={$ne:d};break;case"IS":if(null===d){var g=[];g[0]={},g[1]={},g[0][c]={$eq:null},g[1][c]={$eq:void 0},e={$or:g}}break;case"IN":e[c]={$in:[].concat(d)};break;case",":return[d].concat(c)}return e}),i.push(j);i.length>1?h.$and=i:1==i.length&&(h=i[0]),Object.keys(h).length>0&&(b.selector=h)}return b}function i(a,b,e){var f=function(a){var b,c=a.split("?");return c.length>1&&(b=c[1]),{offset:0,limit:-1,searchCriteria:b}},h=function(h,i){if("GET"==h.method||"HEAD"==h.method){d.log("Offline Persistence Toolkit queryHandlers: SimpleQueryHandler processing request");var k,l,m=f(h.url),n=c._mapFindQuery(j(m.searchCriteria,b),e);if(null!=i.jsonProcessor&&(k=i.jsonProcessor.shredder,l=i.jsonProcessor.unshredder),null!=k&&null!=l)return g(h,a,n,k,l)}return Promise.resolve()};return h.normalizeQueryParameter=f,h}function j(a,b){var c={};if(a){var d,e={};d="undefined"==typeof URLSearchParams?k(a):new URLSearchParams(a).entries();var f,g,h;do{f=d.next(),null!=f.value&&(g=f.value[0],h=f.value[1],b&&-1!=b.indexOf(g)||(e["value."+g]=h))}while(!f.done);Object.keys(e).length>0&&(c.selector=e)}return c}function k(a){var b=[];if(null!=a){"?"===a.charAt(0)&&(a=a.slice(1)),a=a||"";var c,d,e,f=a.split("&");b=f.map(function(a){return e=a.indexOf("="),e>-1?(c=a.slice(0,e),d=a.slice(e+1),d=l(d)):(c=a,d=""),c=l(c),[c,d]})}return{next:function(){var a=b.shift();return{done:void 0===a,value:a}}}}function l(a){return decodeURIComponent(a.replace(/\+/g," "))}function m(a){var b=a.url.split("/");return b.length>1?b[b.length-1].split("?")[0]:null}function n(a){var b=a.url.split("/");return b.length>1?(b.pop(),b.join("/")):null}return{getSimpleQueryHandler:i,getOracleRestQueryHandler:f}});