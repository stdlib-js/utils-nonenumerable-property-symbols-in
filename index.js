// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).nonEnumerablePropertySymbolsIn=r()}(this,(function(){"use strict";var t,r=void 0!==Object.getOwnPropertySymbols,e=Object.getOwnPropertySymbols;t=r?function(t){return e(Object(t))}:function(){return[]};var n=t,o=/./,u="function"==typeof Object.defineProperty?Object.defineProperty:null;var i,c=Object.defineProperty,f=Object.prototype,l=f.toString,a=f.__defineGetter__,p=f.__defineSetter__,y=f.__lookupGetter__,b=f.__lookupSetter__;i=function(){try{return u({},"x",{}),!0}catch(t){return!1}}()?c:function(t,r,e){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===l.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===l.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(y.call(t,r)||b.call(t,r)?(n=t.__proto__,t.__proto__=f,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&a&&a.call(t,r,e.get),i&&p&&p.call(t,r,e.set),t};var s=i;function v(t,r,e){s(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function d(t){return"boolean"==typeof t}var j="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return j&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;function O(t,r){return null!=t&&_.call(t,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var h=m()?function(t){var r,e,n;if(null==t)return g.call(t);e=t[w],r=O(t,w);try{t[w]=void 0}catch(r){return g.call(t)}return n=g.call(t),r?t[w]=e:delete t[w],n}:function(t){return g.call(t)},S=Boolean.prototype.toString;var P=m();function E(t){return"object"==typeof t&&(t instanceof Boolean||(P?function(t){try{return S.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function I(t){return d(t)||E(t)}function T(){return new Function("return this;")()}v(I,"isPrimitive",d),v(I,"isObject",E);var A="object"==typeof self?self:null,N="object"==typeof window?window:null,B="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},V="object"==typeof B?B:null;var x=function(t){if(arguments.length){if(!d(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return T()}if(A)return A;if(N)return N;if(V)return V;throw new Error("unexpected error. Unable to resolve global object.")}(),F=x.document&&x.document.childNodes,G=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var C,L=/^\s*function\s*([^(]*)/i;v(k,"REGEXP",L),C=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};var M=C;function Y(t){return null!==t&&"object"==typeof t}var R=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!M(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Y);function U(t){var r,e,n,o;if(("Object"===(e=h(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=L.exec(n.toString()))return r[1]}return Y(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}v(Y,"isObjectLikeArray",R);var X="function"==typeof o||"object"==typeof G||"function"==typeof F?function(t){return U(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?U(t).toLowerCase():r};var q,z,D=Object.getPrototypeOf;z=Object.getPrototypeOf,q="function"===X(z)?D:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===h(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var H=q;function J(t){return null==t?null:(t=Object(t),H(t))}function K(t){return"string"==typeof t}var Q=String.prototype.valueOf;var W=m();function Z(t){return"object"==typeof t&&(t instanceof String||(W?function(t){try{return Q.call(t),!0}catch(t){return!1}}(t):"[object String]"===h(t)))}function $(t){return K(t)||Z(t)}function tt(t){return"number"==typeof t}v($,"isPrimitive",K),v($,"isObject",Z);var rt=Number,et=rt.prototype.toString;var nt=m();function ot(t){return"object"==typeof t&&(t instanceof rt||(nt?function(t){try{return et.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function ut(t){return tt(t)||ot(t)}function it(t){return t!=t}function ct(t){return tt(t)&&it(t)}function ft(t){return ot(t)&&it(t.valueOf())}function lt(t){return ct(t)||ft(t)}v(ut,"isPrimitive",tt),v(ut,"isObject",ot),v(lt,"isPrimitive",ct),v(lt,"isObject",ft);var at=Number.POSITIVE_INFINITY,pt=rt.NEGATIVE_INFINITY,yt=Math.floor;function bt(t){return t<at&&t>pt&&yt(r=t)===r;var r}function st(t){return tt(t)&&bt(t)}function vt(t){return ot(t)&&bt(t.valueOf())}function dt(t){return st(t)||vt(t)}v(dt,"isPrimitive",st),v(dt,"isObject",vt);var jt=Object.prototype.propertyIsEnumerable;var mt=!jt.call("beep","0");function gt(t,r){return!1!==O(t,r)&&!1===function(t,r){var e;return null!=t&&(!(e=jt.call(t,r))&&mt&&$(t)?!ct(r=+r)&&st(r)&&r>=0&&r<t.length:e)}(t,r)}return function(t){var r,e,o,u,i,c;if(null==t)return[];o=Object(t),r=[],e={};do{for(u=n(o),c=0;c<u.length;c++)!1===O(e,i=u[c])&&gt(o,i)&&r.push(i),e[i]=!0;o=J(o)}while(o);return r}}));
//# sourceMappingURL=index.js.map
