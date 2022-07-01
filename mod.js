// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var t=r.default;if("function"==typeof t){var e=function(){return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var t=void 0!==Object.getOwnPropertySymbols,e=Object.getOwnPropertySymbols;var n=t?function(r){return e(Object(r))}:function(){return[]},o=/./,u="function"==typeof Object.defineProperty?Object.defineProperty:null;var i=function(){try{return u({},"x",{}),!0}catch(r){return!1}},c=Object.defineProperty,a=Object.prototype,f=a.toString,l=a.__defineGetter__,v=a.__defineSetter__,p=a.__lookupGetter__,y=a.__lookupSetter__;var b=function(r,t,e){var n,o,u,i;if("object"!=typeof r||null===r||"[object Array]"===f.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===f.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(p.call(r,t)||y.call(r,t)?(n=r.__proto__,r.__proto__=a,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&l&&l.call(r,t,e.get),i&&v&&v.call(r,t,e.set),r},s=c,j=b,d=i()?s:j;var m=function(r,t,e){d(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},_=m;var O=function(r){return"boolean"==typeof r};var g=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var w=function(){return g&&"symbol"==typeof Symbol.toStringTag},P=Object.prototype.toString,h=P;var S=function(r){return h.call(r)},E=Object.prototype.hasOwnProperty;var I=function(r,t){return null!=r&&E.call(r,t)},A="function"==typeof Symbol?Symbol.toStringTag:"",T=I,N=A,B=P;var V=S,x=function(r){var t,e,n;if(null==r)return B.call(r);e=r[N],t=T(r,N);try{r[N]=void 0}catch(t){return B.call(r)}return n=B.call(r),t?r[N]=e:delete r[N],n},F=w()?x:V,G=Boolean.prototype.toString;var k=F,M=function(r){try{return G.call(r),!0}catch(r){return!1}},C=w();var L=function(r){return"object"==typeof r&&(r instanceof Boolean||(C?M(r):"[object Boolean]"===k(r)))},R=O,X=L;var Y=_,z=function(r){return R(r)||X(r)},D=L;Y(z,"isPrimitive",O),Y(z,"isObject",D);var U=z;var q=function(){return new Function("return this;")()},H="object"==typeof self?self:null,J="object"==typeof window?window:null,K="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Q="object"==typeof K?K:null;module.exports=Q;var W=U.isPrimitive,Z=q,$=H,rr=J,tr=r(Object.freeze({__proto__:null}));var er=function(r){if(arguments.length){if(!W(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Z()}if($)return $;if(rr)return rr;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")},nr=er(),or=nr.document&&nr.document.childNodes,ur=Int8Array,ir=o,cr=or,ar=ur;var fr=function(){return"function"==typeof ir||"object"==typeof ar||"function"==typeof cr};var lr=function(){return/^\s*function\s*([^(]*)/i},vr=lr;_(vr,"REGEXP",lr());var pr=vr,yr=F;var br=Array.isArray?Array.isArray:function(r){return"[object Array]"===yr(r)};var sr=function(r){return null!==r&&"object"==typeof r};_(sr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!br(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(sr));var jr=sr;var dr=F,mr=pr.REGEXP,_r=function(r){return jr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Or=function(r){var t,e,n;if(("Object"===(e=dr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=mr.exec(n.toString()))return t[1]}return _r(r)?"Buffer":e},gr=Or;var wr=Or;var Pr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?gr(r).toLowerCase():t},hr=function(r){return wr(r).toLowerCase()},Sr=fr()?hr:Pr;var Er=function(r){return"function"===Sr(r)},Ir=Object.getPrototypeOf;var Ar=function(r){return r.__proto__},Tr=F,Nr=Ar;var Br=function(r){var t=Nr(r);return t||null===t?t:"[object Function]"===Tr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Vr=Ir,xr=Br,Fr=Er(Object.getPrototypeOf)?Vr:xr;var Gr=function(r){return null==r?null:(r=Object(r),Fr(r))};var kr=function(r){return"string"==typeof r},Mr=String.prototype.valueOf;var Cr=F,Lr=function(r){try{return Mr.call(r),!0}catch(r){return!1}},Rr=w();var Xr=function(r){return"object"==typeof r&&(r instanceof String||(Rr?Lr(r):"[object String]"===Cr(r)))},Yr=kr,zr=Xr;var Dr=_,Ur=function(r){return Yr(r)||zr(r)},qr=Xr;Dr(Ur,"isPrimitive",kr),Dr(Ur,"isObject",qr);var Hr=Ur;var Jr=function(r){return"number"==typeof r},Kr=Number,Qr=Kr.prototype.toString;var Wr=F,Zr=Kr,$r=function(r){try{return Qr.call(r),!0}catch(r){return!1}},rt=w();var tt=function(r){return"object"==typeof r&&(r instanceof Zr||(rt?$r(r):"[object Number]"===Wr(r)))},et=Jr,nt=tt;var ot=_,ut=function(r){return et(r)||nt(r)},it=tt;ot(ut,"isPrimitive",Jr),ot(ut,"isObject",it);var ct=ut;var at=function(r){return r!=r},ft=ct.isPrimitive,lt=at;var vt=function(r){return ft(r)&&lt(r)},pt=ct.isObject,yt=at;var bt=function(r){return pt(r)&&yt(r.valueOf())},st=vt,jt=bt;var dt=_,mt=function(r){return st(r)||jt(r)},_t=bt;dt(mt,"isPrimitive",vt),dt(mt,"isObject",_t);var Ot=mt,gt=Number.POSITIVE_INFINITY,wt=Kr.NEGATIVE_INFINITY,Pt=Math.floor;var ht=gt,St=wt,Et=function(r){return Pt(r)===r};var It=function(r){return r<ht&&r>St&&Et(r)},At=ct.isPrimitive,Tt=It;var Nt=function(r){return At(r)&&Tt(r)},Bt=ct.isObject,Vt=It;var xt=function(r){return Bt(r)&&Vt(r.valueOf())},Ft=Nt,Gt=xt;var kt=_,Mt=function(r){return Ft(r)||Gt(r)},Ct=xt;kt(Mt,"isPrimitive",Nt),kt(Mt,"isObject",Ct);var Lt,Rt=Mt,Xt=Object.prototype.propertyIsEnumerable;Lt=!Xt.call("beep","0");var Yt=Hr,zt=Ot.isPrimitive,Dt=Rt.isPrimitive,Ut=Xt,qt=Lt;var Ht=function(r,t){var e;return null!=r&&(!(e=Ut.call(r,t))&&qt&&Yt(r)?!zt(t=+t)&&Dt(t)&&t>=0&&t<r.length:e)},Jt=I,Kt=Ht;var Qt=function(r,t){return!1!==Jt(r,t)&&!1===Kt(r,t)};function Wt(r){var t,e,o,u,i,c;if(null==r)return[];o=Object(r),t=[],e={};do{for(u=n(o),c=0;c<u.length;c++)i=u[c],!1===I(e,i)&&Qt(o,i)&&t.push(i),e[i]=!0;o=Gr(o)}while(o);return t}export{Wt as default};
//# sourceMappingURL=mod.js.map
