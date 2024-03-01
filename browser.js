// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r=void 0!==Object.getOwnPropertySymbols,t=Object,n=t.getOwnPropertySymbols;e=r?function(e){return n(t(e))}:function(){return[]};var i=e,o=/./,a="function"==typeof Object.defineProperty?Object.defineProperty:null,c=Object.defineProperty;function u(e){return"number"==typeof e}function l(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function s(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+l(i):l(i)+e,n&&(e="-"+e)),e}var f=String.prototype.toLowerCase,p=String.prototype.toUpperCase;function g(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!u(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=s(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=s(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===p.call(e.specifier)?p.call(t):f.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var b=Math.abs,d=String.prototype.toLowerCase,y=String.prototype.toUpperCase,h=String.prototype.replace,v=/e\+(\d)$/,w=/e-(\d)$/,m=/^(\d+)$/,j=/^(\d+)e/,_=/\.0$/,O=/\.0*e/,S=/(\..*[^0])0*e/;function E(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!u(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":b(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=h.call(t,S,"$1e"),t=h.call(t,O,"e"),t=h.call(t,_,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=h.call(t,v,"e+0$1"),t=h.call(t,w,"e-0$1"),e.alternate&&(t=h.call(t,m,"$1."),t=h.call(t,j,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===y.call(e.specifier)?y.call(t):d.call(t)}function x(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var I=String.fromCharCode,T=isNaN,k=Array.isArray;function P(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,n,i,o,a,c,u,l,f,p,b,d;if(!k(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,u=0;u<e.length;u++)if("string"==typeof(n=e[u]))a+=n;else{if(r=void 0!==n.precision,!(n=P(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,T(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=g(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!T(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(o)?String(n.arg):I(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=E(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=s(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,p=n.width,b=n.padRight,d=void 0,(d=p-f.length)<0?f:f=b?f+x(d):x(d)+f)),a+=n.arg||"",c+=1}return a}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function N(e){var r,t,n,i;for(t=[],i=0,n=V.exec(e);n;)(r=e.slice(i,V.lastIndex-n[0].length)).length&&t.push(r),t.push(F(n)),i=V.lastIndex,n=V.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function $(e){var r,t;if("string"!=typeof e)throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[N(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return A.apply(null,r)}var C,B=Object.prototype,R=B.toString,G=B.__defineGetter__,L=B.__defineSetter__,Z=B.__lookupGetter__,M=B.__lookupSetter__;C=function(){try{return a({},"x",{}),!0}catch(e){return!1}}()?c:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(e,r)||M.call(e,r)?(n=e.__proto__,e.__proto__=B,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(e,r,t.get),a&&L&&L.call(e,r,t.set),e};var W=C;function U(e,r,t){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e){return"boolean"==typeof e}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return Y&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString,D=Object.prototype.hasOwnProperty;function H(e,r){return null!=e&&D.call(e,r)}var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"",Q=z()?function(e){var r,t,n;if(null==e)return q.call(e);t=e[K],r=H(e,K);try{e[K]=void 0}catch(r){return q.call(e)}return n=q.call(e),r?e[K]=t:delete e[K],n}:function(e){return q.call(e)},ee=Boolean,re=Boolean.prototype.toString,te=z();function ne(e){return"object"==typeof e&&(e instanceof ee||(te?function(e){try{return re.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Q(e)))}function ie(e){return X(e)||ne(e)}U(ie,"isPrimitive",X),U(ie,"isObject",ne);var oe="object"==typeof self?self:null,ae="object"==typeof window?window:null,ce="object"==typeof globalThis?globalThis:null,ue=function(e){if(arguments.length){if(!X(e))throw new TypeError($("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ce)return ce;if(oe)return oe;if(ae)return ae;throw new Error("unexpected error. Unable to resolve global object.")}(),le=ue.document&&ue.document.childNodes,se=Int8Array;function fe(){return/^\s*function\s*([^(]*)/i}var pe,ge=/^\s*function\s*([^(]*)/i;U(fe,"REGEXP",ge),pe=Array.isArray?Array.isArray:function(e){return"[object Array]"===Q(e)};var be=pe;function de(e){return null!==e&&"object"==typeof e}var ye=function(e){if("function"!=typeof e)throw new TypeError($("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!be(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(de);function he(e){var r,t,n,i;if(("Object"===(t=Q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ge.exec(n.toString()))return r[1]}return de(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}U(de,"isObjectLikeArray",ye);var ve,we,me="function"==typeof o||"object"==typeof se||"function"==typeof le?function(e){return he(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?he(e).toLowerCase():r},je=Object.getPrototypeOf;we=Object.getPrototypeOf,ve="function"===me(we)?je:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===Q(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var _e=ve;function Oe(e){return null==e?null:(e=t(e),_e(e))}function Se(e){return"string"==typeof e}var Ee=String.prototype.valueOf,xe=z();function Ie(e){return"object"==typeof e&&(e instanceof String||(xe?function(e){try{return Ee.call(e),!0}catch(e){return!1}}(e):"[object String]"===Q(e)))}function Te(e){return Se(e)||Ie(e)}function ke(e){return"number"==typeof e}U(Te,"isPrimitive",Se),U(Te,"isObject",Ie);var Pe=Number,Ae=Pe.prototype.toString,Ve=z();function Fe(e){return"object"==typeof e&&(e instanceof Pe||(Ve?function(e){try{return Ae.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Q(e)))}function Ne(e){return ke(e)||Fe(e)}function $e(e){return e!=e}function Ce(e){return ke(e)&&$e(e)}function Be(e){return Fe(e)&&$e(e.valueOf())}function Re(e){return Ce(e)||Be(e)}U(Ne,"isPrimitive",ke),U(Ne,"isObject",Fe),U(Re,"isPrimitive",Ce),U(Re,"isObject",Be);var Ge=Number.POSITIVE_INFINITY,Le=Pe.NEGATIVE_INFINITY,Ze=Math.floor;function Me(e){return e<Ge&&e>Le&&Ze(r=e)===r;var r}function We(e){return ke(e)&&Me(e)}function Ue(e){return Fe(e)&&Me(e.valueOf())}function Xe(e){return We(e)||Ue(e)}U(Xe,"isPrimitive",We),U(Xe,"isObject",Ue);var Ye=Object.prototype.propertyIsEnumerable,ze=!Ye.call("beep","0");function qe(e,r){return!1!==H(e,r)&&!1===function(e,r){var t;return null!=e&&(!(t=Ye.call(e,r))&&ze&&Te(e)?!Ce(r=+r)&&We(r)&&r>=0&&r<e.length:t)}(e,r)}return function(e){var r,n,o,a,c,u;if(null==e)return[];o=t(e),r=[],n={};do{for(a=i(o),u=0;u<a.length;u++)!1===H(n,c=a[u])&&qe(o,c)&&r.push(c),n[c]=!0;o=Oe(o)}while(o);return r}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).nonEnumerablePropertySymbolsIn=r();
//# sourceMappingURL=browser.js.map