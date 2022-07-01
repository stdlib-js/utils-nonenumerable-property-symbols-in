// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).nonEnumerablePropertySymbolsIn=r()}(this,(function(){"use strict";function t(t){var r=t.default;if("function"==typeof r){var e=function(){return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var r=void 0!==Object.getOwnPropertySymbols,e=Object.getOwnPropertySymbols;var n=r?function(t){return e(Object(t))}:function(){return[]},o=/./,i="function"==typeof Object.defineProperty?Object.defineProperty:null;var u=function(){try{return i({},"x",{}),!0}catch(t){return!1}},c=Object.defineProperty,f=Object.prototype,a=f.toString,l=f.__defineGetter__,p=f.__defineSetter__,v=f.__lookupGetter__,y=f.__lookupSetter__;var b=function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(v.call(t,r)||y.call(t,r)?(n=t.__proto__,t.__proto__=f,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&l&&l.call(t,r,e.get),u&&p&&p.call(t,r,e.set),t},s=c,j=b,d=u()?s:j;var m=function(t,r,e){d(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},_=m;var O=function(t){return"boolean"==typeof t};var g=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var w=function(){return g&&"symbol"==typeof Symbol.toStringTag},h=Object.prototype.toString,P=h;var S=function(t){return P.call(t)},E=Object.prototype.hasOwnProperty;var I=function(t,r){return null!=t&&E.call(t,r)},T="function"==typeof Symbol?Symbol.toStringTag:"",A=I,N=T,B=h;var x=S,V=function(t){var r,e,n;if(null==t)return B.call(t);e=t[N],r=A(t,N);try{t[N]=void 0}catch(r){return B.call(t)}return n=B.call(t),r?t[N]=e:delete t[N],n},F=w()?V:x,G=Boolean.prototype.toString;var k=F,M=function(t){try{return G.call(t),!0}catch(t){return!1}},C=w();var L=function(t){return"object"==typeof t&&(t instanceof Boolean||(C?M(t):"[object Boolean]"===k(t)))},R=O,X=L;var Y=_,z=function(t){return R(t)||X(t)},D=L;Y(z,"isPrimitive",O),Y(z,"isObject",D);var U=z;var q=function(){return new Function("return this;")()},H="object"==typeof self?self:null,J="object"==typeof window?window:null,K="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Q="object"==typeof K?K:null;module.exports=Q;var W=U.isPrimitive,Z=q,$=H,tt=J,rt=t(Object.freeze({__proto__:null}));var et=function(t){if(arguments.length){if(!W(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Z()}if($)return $;if(tt)return tt;if(rt)return rt;throw new Error("unexpected error. Unable to resolve global object.")},nt=et(),ot=nt.document&&nt.document.childNodes,it=Int8Array,ut=o,ct=ot,ft=it;var at=function(){return"function"==typeof ut||"object"==typeof ft||"function"==typeof ct};var lt=function(){return/^\s*function\s*([^(]*)/i},pt=lt;_(pt,"REGEXP",lt());var vt=pt,yt=F;var bt=Array.isArray?Array.isArray:function(t){return"[object Array]"===yt(t)};var st=function(t){return null!==t&&"object"==typeof t};_(st,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!bt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(st));var jt=st;var dt=F,mt=vt.REGEXP,_t=function(t){return jt(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var Ot=function(t){var r,e,n;if(("Object"===(e=dt(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=mt.exec(n.toString()))return r[1]}return _t(t)?"Buffer":e},gt=Ot;var wt=Ot;var ht=function(t){var r;return null===t?"null":"object"===(r=typeof t)?gt(t).toLowerCase():r},Pt=function(t){return wt(t).toLowerCase()},St=at()?Pt:ht;var Et=function(t){return"function"===St(t)},It=Object.getPrototypeOf;var Tt=function(t){return t.__proto__},At=F,Nt=Tt;var Bt=function(t){var r=Nt(t);return r||null===r?r:"[object Function]"===At(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},xt=It,Vt=Bt,Ft=Et(Object.getPrototypeOf)?xt:Vt;var Gt=function(t){return null==t?null:(t=Object(t),Ft(t))};var kt=function(t){return"string"==typeof t},Mt=String.prototype.valueOf;var Ct=F,Lt=function(t){try{return Mt.call(t),!0}catch(t){return!1}},Rt=w();var Xt=function(t){return"object"==typeof t&&(t instanceof String||(Rt?Lt(t):"[object String]"===Ct(t)))},Yt=kt,zt=Xt;var Dt=_,Ut=function(t){return Yt(t)||zt(t)},qt=Xt;Dt(Ut,"isPrimitive",kt),Dt(Ut,"isObject",qt);var Ht=Ut;var Jt=function(t){return"number"==typeof t},Kt=Number,Qt=Kt.prototype.toString;var Wt=F,Zt=Kt,$t=function(t){try{return Qt.call(t),!0}catch(t){return!1}},tr=w();var rr=function(t){return"object"==typeof t&&(t instanceof Zt||(tr?$t(t):"[object Number]"===Wt(t)))},er=Jt,nr=rr;var or=_,ir=function(t){return er(t)||nr(t)},ur=rr;or(ir,"isPrimitive",Jt),or(ir,"isObject",ur);var cr=ir;var fr=function(t){return t!=t},ar=cr.isPrimitive,lr=fr;var pr=function(t){return ar(t)&&lr(t)},vr=cr.isObject,yr=fr;var br=function(t){return vr(t)&&yr(t.valueOf())},sr=pr,jr=br;var dr=_,mr=function(t){return sr(t)||jr(t)},_r=br;dr(mr,"isPrimitive",pr),dr(mr,"isObject",_r);var Or=mr,gr=Number.POSITIVE_INFINITY,wr=Kt.NEGATIVE_INFINITY,hr=Math.floor;var Pr=gr,Sr=wr,Er=function(t){return hr(t)===t};var Ir=function(t){return t<Pr&&t>Sr&&Er(t)},Tr=cr.isPrimitive,Ar=Ir;var Nr=function(t){return Tr(t)&&Ar(t)},Br=cr.isObject,xr=Ir;var Vr=function(t){return Br(t)&&xr(t.valueOf())},Fr=Nr,Gr=Vr;var kr=_,Mr=function(t){return Fr(t)||Gr(t)},Cr=Vr;kr(Mr,"isPrimitive",Nr),kr(Mr,"isObject",Cr);var Lr,Rr=Mr,Xr=Object.prototype.propertyIsEnumerable;Lr=!Xr.call("beep","0");var Yr=Ht,zr=Or.isPrimitive,Dr=Rr.isPrimitive,Ur=Xr,qr=Lr;var Hr=function(t,r){var e;return null!=t&&(!(e=Ur.call(t,r))&&qr&&Yr(t)?!zr(r=+r)&&Dr(r)&&r>=0&&r<t.length:e)},Jr=I,Kr=Hr;var Qr=function(t,r){return!1!==Jr(t,r)&&!1===Kr(t,r)};return function(t){var r,e,o,i,u,c;if(null==t)return[];o=Object(t),r=[],e={};do{for(i=n(o),c=0;c<i.length;c++)u=i[c],!1===I(e,u)&&Qr(o,u)&&r.push(u),e[u]=!0;o=Gt(o)}while(o);return r}}));
//# sourceMappingURL=index.js.map
