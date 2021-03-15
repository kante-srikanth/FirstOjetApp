/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base"],function(e){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;
/**
   * @license
   * Copyright (c) 2016 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var l=/^\s+/,r=/\s+$/,t=Math.round,n=Math.min,a=Math.max;function b(e){var t;t=function(e){var t={r:0,g:0,b:0},b=1,u=null,w=null,O=null,A=!1;"string"==typeof e&&(e=function(e){if("transparent"===(e=e.replace(l,"").replace(r,"").toLowerCase()))return{r:0,g:0,b:0,a:0};var t=c.rgb.exec(e);if(t)return{r:t[1],g:t[2],b:t[3]};if(t=c.rgba.exec(e))return{r:t[1],g:t[2],b:t[3],a:t[4]};if(t=c.hsl.exec(e))return{h:t[1],s:t[2],l:t[3]};if(t=c.hsla.exec(e))return{h:t[1],s:t[2],l:t[3],a:t[4]};if(t=c.hsv.exec(e))return{h:t[1],s:t[2],v:t[3]};if(t=c.hsva.exec(e))return{h:t[1],s:t[2],v:t[3],a:t[4]};if(t=c.hex6.exec(e))return{r:f(t[1]),g:f(t[2]),b:f(t[3])};if(t=c.hex3.exec(e))return{r:f(t[1]+""+t[1]),g:f(t[2]+""+t[2]),b:f(t[3]+""+t[3])};return!1}(e));"object"==typeof e&&(R(e.r)&&R(e.g)&&R(e.b)?(d=e.r,L=e.g,o=e.b,t={r:255*E(d,255),g:255*E(L,255),b:255*E(o,255)},A=!0):R(e.h)&&R(e.s)&&R(e.v)?(u=i(e.s),w=i(e.v),t=function(e,l,r){e=6*E(e,360),l=E(l,100),r=E(r,100);var t=Math.floor(e),n=e-t,a=r*(1-l),b=r*(1-n*l),f=r*(1-(1-n)*l),i=t%6;return{r:255*[r,b,a,a,f,r][i],g:255*[f,r,r,b,a,a][i],b:255*[a,a,f,r,r,b][i]}}(e.h,u,w),A=!0):R(e.h)&&R(e.s)&&R(e.l)&&(u=i(e.s),O=i(e.l),t=function(e,l,r){var t,n,a;function b(e,l,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(l-e)*r:r<.5?l:r<2/3?e+(l-e)*(2/3-r)*6:e}if(e=E(e,360),l=E(l,100),r=E(r,100),0===l)t=r,n=r,a=r;else{var f=r<.5?r*(1+l):r+l-r*l,i=2*r-f;t=b(i,f,e+1/3),n=b(i,f,e),a=b(i,f,e-1/3)}return{r:255*t,g:255*n,b:255*a}}(e.h,u,O),A=!0),void 0!==e.a&&(b=e.a));var d,L,o;if(!A)throw new Error("Invalid Color format");return b=function(e){var l=parseFloat(e);(isNaN(l)||l<0||l>1)&&(l=1);return l}(b),{r:n(255,a(t.r,0)),g:n(255,a(t.g,0)),b:n(255,a(t.b,0)),a:b}}(e=e||""),this._r=t.r,this._g=t.g,this._b=t.b,this._a=Math.round(100*t.a)/100}function E(e,l){var r=e;(function(e){return"string"==typeof e&&-1!==e.indexOf(".")&&1===parseFloat(e)})(r)&&(r="100%");var t=function(e){return"string"==typeof e&&-1!==e.indexOf("%")}(r);return r=n(l,a(0,parseFloat(r))),t&&(r=parseInt(r*l,10)/100),Math.abs(r-l)<1e-6?1:r%l/parseFloat(l)}function f(e){return parseInt(e,16)}function i(e){var l=e;return l<=1&&(l=100*l+"%"),l}b.prototype.getRed=function(e){return e?this._r:t(this._r)},b.prototype.getGreen=function(e){return e?this._g:t(this._g)},b.prototype.getBlue=function(e){return e?this._b:t(this._b)},b.prototype.getAlpha=function(){return this._a},b.prototype.toString=function(){return"rgb"+((l=(e=this)._a<1)?"a(":"(")+t(e._r)+", "+t(e._g)+", "+t(e._b)+(l?", "+e._a:"")+")";var e,l},b.prototype.isEqual=function(e){var l=!1;return e instanceof b&&(l=this._r===e._r&&this._g===e._g&&this._b===e._b&&this._a===e._a),l},b.ALICEBLUE=null,b.ANTIQUEWHITE=null,b.AQUA=null,b.AQUAMARINE=null,b.AZURE=null,b.BEIGE=null,b.BISQUE=null,b.BLACK=null,b.BLANCHEDALMOND=null,b.BLUE=null,b.BLUEVIOLET=null,b.BROWN=null,b.BURLYWOOD=null,b.CADETBLUE=null,b.CHARTREUSE=null,b.CHOCOLATE=null,b.CORAL=null,b.CORNFLOWERBLUE=null,b.CORNSILK=null,b.CRIMSON=null,b.CYAN=null,b.DARKBLUE=null,b.DARKCYAN=null,b.DARKGOLDENROD=null,b.DARKGRAY=null,b.DARKGREY=null,b.DARKGREEN=null,b.DARKKHAKI=null,b.DARKMAGENTA=null,b.DARKOLIVEGREEN=null,b.DARKORANGE=null,b.DARKORCHID=null,b.DARKRED=null,b.DARKSALMON=null,b.DARKSEAGREEN=null,b.DARKSLATEBLUE=null,b.DARKSLATEGRAY=null,b.DARKSLATEGREY=null,b.DARKTURQUOISE=null,b.DARKVIOLET=null,b.DEEPPINK=null,b.DEEPSKYBLUE=null,b.DIMGRAY=null,b.DIMGREY=null,b.DODGERBLUE=null,b.FIREBRICK=null,b.FLORALWHITE=null,b.FORESTGREEN=null,b.FUCHSIA=null,b.GAINSBORO=null,b.GHOSTWHITE=null,b.GOLD=null,b.GOLDENROD=null,b.GRAY=null,b.GREEN=null,b.GREENYELLOW=null,b.GREY=null,b.HONEYDEW=null,b.HOTPINK=null,b.INDIANRED=null,b.INDIGO=null,b.IVORY=null,b.KHAKI=null,b.LAVENDER=null,b.LAVENDERBLUSH=null,b.LAWNGREEN=null,b.LEMONCHIFFON=null,b.LIGHTBLUE=null,b.LIGHTCORAL=null,b.LIGHTCYAN=null,b.LIGHTGOLDENRODYELLOW=null,b.LIGHTGRAY=null,b.LIGHTGREEN=null,b.LIGHTGREY=null,b.LIGHTPINK=null,b.LIGHTSALMON=null,b.LIGHTSEAGREEN=null,b.LIGHTSKYBLUE=null,b.LIGHTSLATEGRAY=null,b.LIGHTSLATEGREY=null,b.LIGHTSTEELBLUE=null,b.LIGHTYELLOW=null,b.LIME=null,b.LIMEGREEN=null,b.LINEN=null,b.MAGENTA=null,b.MAROON=null,b.MEDIUMAQUAMARINE=null,b.MEDIUMBLUE=null,b.MEDIUMORCHID=null,b.MEDIUMPURPLE=null,b.MEDIUMSEAGREEN=null,b.MEDIUMSLATEBLUE=null,b.MEDIUMSPRINGGREEN=null,b.MEDIUMTURQUOISE=null,b.MEDIUMVIOLETRED=null,b.MIDNIGHTBLUE=null,b.MINTCREAM=null,b.MISTYROSE=null,b.MOCCASIN=null,b.NAVAJOWHITE=null,b.NAVY=null,b.OLDLACE=null,b.OLIVE=null,b.OLIVEDRAB=null,b.ORANGE=null,b.ORANGERED=null,b.ORCHID=null,b.PALEGOLDENROD=null,b.PALEGREEN=null,b.PALETURQUOISE=null,b.PALEVIOLETRED=null,b.PAPAYAWHIP=null,b.PEACHPUFF=null,b.PERU=null,b.PINK=null,b.PLUM=null,b.POWDERBLUE=null,b.PURPLE=null,b.REBECCAPURPLE=null,b.RED=null,b.ROSYBROWN=null,b.ROYALBLUE=null,b.SADDLEBROWN=null,b.SALMON=null,b.SANDYBROWN=null,b.SEAGREEN=null,b.SEASHELL=null,b.SIENNA=null,b.SILVER=null,b.SKYBLUE=null,b.SLATEBLUE=null,b.SLATEGRAY=null,b.SLATEGREY=null,b.SNOW=null,b.SPRINGGREEN=null,b.STEELBLUE=null,b.TAN=null,b.TEAL=null,b.THISTLE=null,b.TOMATO=null,b.TURQUOISE=null,b.VIOLET=null,b.WHEAT=null,b.WHITE=null,b.WHITESMOKE=null,b.YELLOW=null,b.YELLOWGREEN=null,b.TRANSPARENT=null;var u,w,O,c=(w="[\\s|\\(]+("+(u="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+u+")[,|\\s]+("+u+")\\s*\\)?",O="[\\s|\\(]+("+u+")[,|\\s]+("+u+")[,|\\s]+("+u+")[,|\\s]+("+u+")\\s*\\)?",{CSS_UNIT:new RegExp(u),rgb:new RegExp("rgb"+w),rgba:new RegExp("rgba"+O),hsl:new RegExp("hsl"+w),hsla:new RegExp("hsla"+O),hsv:new RegExp("hsv"+w),hsva:new RegExp("hsva"+O),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function R(e){return!!c.CSS_UNIT.exec(e)}return Object.defineProperty(b,"ALICEBLUE",{writable:!1,value:new b("f0f8ff")}),Object.defineProperty(b,"ANTIQUEWHITE",{writable:!1,value:new b("faebd7")}),Object.defineProperty(b,"AQUA",{writable:!1,value:new b("0ff")}),Object.defineProperty(b,"AQUAMARINE",{writable:!1,value:new b("7fffd4")}),Object.defineProperty(b,"AZURE",{writable:!1,value:new b("f0ffff")}),Object.defineProperty(b,"BEIGE",{writable:!1,value:new b("f5f5dc")}),Object.defineProperty(b,"BISQUE",{writable:!1,value:new b("ffe4c4")}),Object.defineProperty(b,"BLACK",{writable:!1,value:new b("000")}),Object.defineProperty(b,"BLANCHEDALMOND",{writable:!1,value:new b("ffebcd")}),Object.defineProperty(b,"BLUE",{writable:!1,value:new b("00f")}),Object.defineProperty(b,"BLUEVIOLET",{writable:!1,value:new b("8a2be2")}),Object.defineProperty(b,"BROWN",{writable:!1,value:new b("a52a2a")}),Object.defineProperty(b,"BURLYWOOD",{writable:!1,value:new b("deb887")}),Object.defineProperty(b,"CADETBLUE",{writable:!1,value:new b("5f9ea0")}),Object.defineProperty(b,"CHARTREUSE",{writable:!1,value:new b("7fff00")}),Object.defineProperty(b,"CHOCOLATE",{writable:!1,value:new b("d2691e")}),Object.defineProperty(b,"CORAL",{writable:!1,value:new b("ff7f50")}),Object.defineProperty(b,"CORNFLOWERBLUE",{writable:!1,value:new b("6495ed")}),Object.defineProperty(b,"CORNSILK",{writable:!1,value:new b("fff8dc")}),Object.defineProperty(b,"CRIMSON",{writable:!1,value:new b("dc143c")}),Object.defineProperty(b,"CYAN",{writable:!1,value:new b("0ff")}),Object.defineProperty(b,"DARKBLUE",{writable:!1,value:new b("00008b")}),Object.defineProperty(b,"DARKCYAN",{writable:!1,value:new b("008b8b")}),Object.defineProperty(b,"DARKGOLDENROD",{writable:!1,value:new b("b8860b")}),Object.defineProperty(b,"DARKGRAY",{writable:!1,value:new b("a9a9a9")}),Object.defineProperty(b,"DARKGREY",{writable:!1,value:new b("a9a9a9")}),Object.defineProperty(b,"DARKGREEN",{writable:!1,value:new b("006400")}),Object.defineProperty(b,"DARKKHAKI",{writable:!1,value:new b("bdb76b")}),Object.defineProperty(b,"DARKMAGENTA",{writable:!1,value:new b("8b008b")}),Object.defineProperty(b,"DARKOLIVEGREEN",{writable:!1,value:new b("556b2f")}),Object.defineProperty(b,"DARKORANGE",{writable:!1,value:new b("ff8c00")}),Object.defineProperty(b,"DARKORCHID",{writable:!1,value:new b("9932cc")}),Object.defineProperty(b,"DARKRED",{writable:!1,value:new b("8b0000")}),Object.defineProperty(b,"DARKSALMON",{writable:!1,value:new b("e9967a")}),Object.defineProperty(b,"DARKSEAGREEN",{writable:!1,value:new b("8fbc8f")}),Object.defineProperty(b,"DARKSLATEBLUE",{writable:!1,value:new b("483d8b")}),Object.defineProperty(b,"DARKSLATEGRAY",{writable:!1,value:new b("2f4f4f")}),Object.defineProperty(b,"DARKSLATEGREY",{writable:!1,value:new b("2f4f4f")}),Object.defineProperty(b,"DARKTURQUOISE",{writable:!1,value:new b("00ced1")}),Object.defineProperty(b,"DARKVIOLET",{writable:!1,value:new b("9400d3")}),Object.defineProperty(b,"DEEPPINK",{writable:!1,value:new b("ff1493")}),Object.defineProperty(b,"DEEPSKYBLUE",{writable:!1,value:new b("00bfff")}),Object.defineProperty(b,"DIMGRAY",{writable:!1,value:new b("696969")}),Object.defineProperty(b,"DIMGREY",{writable:!1,value:new b("696969")}),Object.defineProperty(b,"DODGERBLUE",{writable:!1,value:new b("1e90ff")}),Object.defineProperty(b,"FIREBRICK",{writable:!1,value:new b("b22222")}),Object.defineProperty(b,"FLORALWHITE",{writable:!1,value:new b("fffaf0")}),Object.defineProperty(b,"FORESTGREEN",{writable:!1,value:new b("228b22")}),Object.defineProperty(b,"FUCHSIA",{writable:!1,value:new b("f0f")}),Object.defineProperty(b,"GAINSBORO",{writable:!1,value:new b("dcdcdc")}),Object.defineProperty(b,"GHOSTWHITE",{writable:!1,value:new b("f8f8ff")}),Object.defineProperty(b,"GOLD",{writable:!1,value:new b("ffd700")}),Object.defineProperty(b,"GOLDENROD",{writable:!1,value:new b("daa520")}),Object.defineProperty(b,"GRAY",{writable:!1,value:new b("808080")}),Object.defineProperty(b,"GREY",{writable:!1,value:new b("808080")}),Object.defineProperty(b,"GREEN",{writable:!1,value:new b("008000")}),Object.defineProperty(b,"GREENYELLOW",{writable:!1,value:new b("adff2f")}),Object.defineProperty(b,"HONEYDEW",{writable:!1,value:new b("f0fff0")}),Object.defineProperty(b,"HOTPINK",{writable:!1,value:new b("ff69b4")}),Object.defineProperty(b,"INDIANRED",{writable:!1,value:new b("cd5c5c")}),Object.defineProperty(b,"INDIGO",{writable:!1,value:new b("4b0082")}),Object.defineProperty(b,"IVORY",{writable:!1,value:new b("fffff0")}),Object.defineProperty(b,"KHAKI",{writable:!1,value:new b("f0e68c")}),Object.defineProperty(b,"LAVENDER",{writable:!1,value:new b("e6e6fa")}),Object.defineProperty(b,"LAVENDERBLUSH",{writable:!1,value:new b("fff0f5")}),Object.defineProperty(b,"LAWNGREEN",{writable:!1,value:new b("7cfc00")}),Object.defineProperty(b,"LEMONCHIFFON",{writable:!1,value:new b("fffacd")}),Object.defineProperty(b,"LIGHTBLUE",{writable:!1,value:new b("add8e6")}),Object.defineProperty(b,"LIGHTCORAL",{writable:!1,value:new b("f08080")}),Object.defineProperty(b,"LIGHTCYAN",{writable:!1,value:new b("e0ffff")}),Object.defineProperty(b,"LIGHTGOLDENRODYELLOW",{writable:!1,value:new b("fafad2")}),Object.defineProperty(b,"LIGHTGRAY",{writable:!1,value:new b("d3d3d3")}),Object.defineProperty(b,"LIGHTGREY",{writable:!1,value:new b("d3d3d3")}),Object.defineProperty(b,"LIGHTGREEN",{writable:!1,value:new b("90ee90")}),Object.defineProperty(b,"LIGHTPINK",{writable:!1,value:new b("ffb6c1")}),Object.defineProperty(b,"LIGHTSALMON",{writable:!1,value:new b("ffa07a")}),Object.defineProperty(b,"LIGHTSEAGREEN",{writable:!1,value:new b("20b2aa")}),Object.defineProperty(b,"LIGHTSKYBLUE",{writable:!1,value:new b("87cefa")}),Object.defineProperty(b,"LIGHTSLATEGRAY",{writable:!1,value:new b("789")}),Object.defineProperty(b,"LIGHTSLATEGREY",{writable:!1,value:new b("789")}),Object.defineProperty(b,"LIGHTSTEELBLUE",{writable:!1,value:new b("b0c4de")}),Object.defineProperty(b,"LIGHTYELLOW",{writable:!1,value:new b("ffffe0")}),Object.defineProperty(b,"LIME",{writable:!1,value:new b("0f0")}),Object.defineProperty(b,"LIMEGREEN",{writable:!1,value:new b("32cd32")}),Object.defineProperty(b,"LINEN",{writable:!1,value:new b("faf0e6")}),Object.defineProperty(b,"MAGENTA",{writable:!1,value:new b("f0f")}),Object.defineProperty(b,"MAROON",{writable:!1,value:new b("800000")}),Object.defineProperty(b,"MEDIUMAQUAMARINE",{writable:!1,value:new b("66cdaa")}),Object.defineProperty(b,"MEDIUMBLUE",{writable:!1,value:new b("0000cd")}),Object.defineProperty(b,"MEDIUMORCHID",{writable:!1,value:new b("ba55d3")}),Object.defineProperty(b,"MEDIUMPURPLE",{writable:!1,value:new b("9370db")}),Object.defineProperty(b,"MEDIUMSEAGREEN",{writable:!1,value:new b("3cb371")}),Object.defineProperty(b,"MEDIUMSLATEBLUE",{writable:!1,value:new b("7b68ee")}),Object.defineProperty(b,"MEDIUMSPRINGGREEN",{writable:!1,value:new b("00fa9a")}),Object.defineProperty(b,"MEDIUMTURQUOISE",{writable:!1,value:new b("48d1cc")}),Object.defineProperty(b,"MEDIUMVIOLETRED",{writable:!1,value:new b("c71585")}),Object.defineProperty(b,"MIDNIGHTBLUE",{writable:!1,value:new b("191970")}),Object.defineProperty(b,"MINTCREAM",{writable:!1,value:new b("f5fffa")}),Object.defineProperty(b,"MISTYROSE",{writable:!1,value:new b("ffe4e1")}),Object.defineProperty(b,"MOCCASIN",{writable:!1,value:new b("ffe4b5")}),Object.defineProperty(b,"NAVAJOWHITE",{writable:!1,value:new b("ffdead")}),Object.defineProperty(b,"NAVY",{writable:!1,value:new b("000080")}),Object.defineProperty(b,"OLDLACE",{writable:!1,value:new b("fdf5e6")}),Object.defineProperty(b,"OLIVE",{writable:!1,value:new b("808000")}),Object.defineProperty(b,"OLIVEDRAB",{writable:!1,value:new b("6b8e23")}),Object.defineProperty(b,"ORANGE",{writable:!1,value:new b("ffa500")}),Object.defineProperty(b,"ORANGERED",{writable:!1,value:new b("ff4500")}),Object.defineProperty(b,"ORCHID",{writable:!1,value:new b("da70d6")}),Object.defineProperty(b,"PALEGOLDENROD",{writable:!1,value:new b("eee8aa")}),Object.defineProperty(b,"PALEGREEN",{writable:!1,value:new b("98fb98")}),Object.defineProperty(b,"PALETURQUOISE",{writable:!1,value:new b("afeeee")}),Object.defineProperty(b,"PALEVIOLETRED",{writable:!1,value:new b("db7093")}),Object.defineProperty(b,"PAPAYAWHIP",{writable:!1,value:new b("ffefd5")}),Object.defineProperty(b,"PEACHPUFF",{writable:!1,value:new b("ffdab9")}),Object.defineProperty(b,"PERU",{writable:!1,value:new b("cd853f")}),Object.defineProperty(b,"PINK",{writable:!1,value:new b("ffc0cb")}),Object.defineProperty(b,"PLUM",{writable:!1,value:new b("dda0dd")}),Object.defineProperty(b,"POWDERBLUE",{writable:!1,value:new b("b0e0e6")}),Object.defineProperty(b,"PURPLE",{writable:!1,value:new b("800080")}),Object.defineProperty(b,"REBECCAPURPLE",{writable:!1,value:new b("663399")}),Object.defineProperty(b,"RED",{writable:!1,value:new b("f00")}),Object.defineProperty(b,"ROSYBROWN",{writable:!1,value:new b("bc8f8f")}),Object.defineProperty(b,"ROYALBLUE",{writable:!1,value:new b("4169e1")}),Object.defineProperty(b,"SADDLEBROWN",{writable:!1,value:new b("8b4513")}),Object.defineProperty(b,"SALMON",{writable:!1,value:new b("fa8072")}),Object.defineProperty(b,"SANDYBROWN",{writable:!1,value:new b("f4a460")}),Object.defineProperty(b,"SEAGREEN",{writable:!1,value:new b("2e8b57")}),Object.defineProperty(b,"SEASHELL",{writable:!1,value:new b("fff5ee")}),Object.defineProperty(b,"SIENNA",{writable:!1,value:new b("a0522d")}),Object.defineProperty(b,"SILVER",{writable:!1,value:new b("c0c0c0")}),Object.defineProperty(b,"SKYBLUE",{writable:!1,value:new b("87ceeb")}),Object.defineProperty(b,"SLATEBLUE",{writable:!1,value:new b("6a5acd")}),Object.defineProperty(b,"SLATEGRAY",{writable:!1,value:new b("708090")}),Object.defineProperty(b,"SLATEGREY",{writable:!1,value:new b("708090")}),Object.defineProperty(b,"SNOW",{writable:!1,value:new b("fffafa")}),Object.defineProperty(b,"SPRINGGREEN",{writable:!1,value:new b("00ff7f")}),Object.defineProperty(b,"STEELBLUE",{writable:!1,value:new b("4682b4")}),Object.defineProperty(b,"TAN",{writable:!1,value:new b("d2b48c")}),Object.defineProperty(b,"TEAL",{writable:!1,value:new b("008080")}),Object.defineProperty(b,"THISTLE",{writable:!1,value:new b("d8bfd8")}),Object.defineProperty(b,"TOMATO",{writable:!1,value:new b("ff6347")}),Object.defineProperty(b,"TURQUOISE",{writable:!1,value:new b("40e0d0")}),Object.defineProperty(b,"VIOLET",{writable:!1,value:new b("ee82ee")}),Object.defineProperty(b,"WHEAT",{writable:!1,value:new b("f5deb3")}),Object.defineProperty(b,"WHITE",{writable:!1,value:new b("fff")}),Object.defineProperty(b,"WHITESMOKE",{writable:!1,value:new b("f5f5f5")}),Object.defineProperty(b,"YELLOW",{writable:!1,value:new b("ff0")}),Object.defineProperty(b,"YELLOWGREEN",{writable:!1,value:new b("9acd32")}),Object.defineProperty(b,"TRANSPARENT",{writable:!1,value:new b("rgba(0,0,0,0)")}),e._registerLegacyNamespaceProp("Color",b),b});
//# sourceMappingURL=ojcolor.js.map