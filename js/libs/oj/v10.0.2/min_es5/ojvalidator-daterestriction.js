/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","ojs/ojtranslation","ojs/ojvalidator","ojs/ojvalidation-error","ojs/ojconverter-datetime","ojs/ojconverterutils-i18n","ojs/ojconverterutils"],function(t,e,r,a,o,n,i){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i;
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var s=function(t){this.Init(t)};return t.Object.createSubclass(s,r,"oj.DateRestrictionValidator"),s.prototype.Init=function(t){s.superclass.Init.call(this),this._dayFormatter=t.dayFormatter,this._converter=i.getConverterInstance(t.converter),this._converter||(this._converter=new o.IntlDateTimeConverter),t&&(this._messageSummary=t.messageSummary||null,this._messageDetail=t.messageDetail||null)},s.prototype._inDisabled=function(t){var e=this._dayFormatter;if(e){var r=e({fullYear:t.fullYear,month:t.month+1,date:t.date});return r&&r.disabled}return!1},s.prototype.validate=function(t){var r="",o="",i=e,s=this._messageSummary,l=this._messageDetail,u=t?n.IntlConverterUtils._dateTime(t,["fullYear","month","date"],!0):null;if(null===t)return t;if(this._inDisabled(u)){var c=function(t){return r=s?i.applyParameters(s,{value:t}):i.getTranslatedString("oj-validator.restriction.date.messageSummary",{value:t}),o=l?i.applyParameters(l,{value:t}):i.getTranslatedString("oj-validator.restriction.date.messageDetail",{value:t}),[r,o]}(t?this._converter.format(t):t);throw new a.ValidatorError(c[0],c[1])}return t},s.prototype.getHint=function(){return null},s});
//# sourceMappingURL=ojvalidator-daterestriction.js.map