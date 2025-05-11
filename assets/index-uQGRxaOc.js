(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();var $2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wb(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Vp={exports:{}},iu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_;function nR(){if(X_)return iu;X_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,s,l){var c=null;if(l!==void 0&&(c=""+l),s.key!==void 0&&(c=""+s.key),"key"in s){l={};for(var d in s)d!=="key"&&(l[d]=s[d])}else l=s;return s=l.ref,{$$typeof:r,type:i,key:c,ref:s!==void 0?s:null,props:l}}return iu.Fragment=e,iu.jsx=t,iu.jsxs=t,iu}var W_;function rR(){return W_||(W_=1,Vp.exports=nR()),Vp.exports}var U=rR(),Up={exports:{}},ke={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function iR(){if(Z_)return ke;Z_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.iterator;function T(L){return L===null||typeof L!="object"?null:(L=b&&L[b]||L["@@iterator"],typeof L=="function"?L:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,V={};function P(L,te,de){this.props=L,this.context=te,this.refs=V,this.updater=de||w}P.prototype.isReactComponent={},P.prototype.setState=function(L,te){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,te,"setState")},P.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function B(){}B.prototype=P.prototype;function K(L,te,de){this.props=L,this.context=te,this.refs=V,this.updater=de||w}var Q=K.prototype=new B;Q.constructor=K,O(Q,P.prototype),Q.isPureReactComponent=!0;var ie=Array.isArray,D={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function C(L,te,de,oe,be,_e){return de=_e.ref,{$$typeof:r,type:L,key:te,ref:de!==void 0?de:null,props:_e}}function R(L,te){return C(L.type,te,void 0,void 0,void 0,L.props)}function x(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function N(L){var te={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(de){return te[de]})}var k=/\/+/g;function j(L,te){return typeof L=="object"&&L!==null&&L.key!=null?N(""+L.key):te.toString(36)}function I(){}function pe(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(I,I):(L.status="pending",L.then(function(te){L.status==="pending"&&(L.status="fulfilled",L.value=te)},function(te){L.status==="pending"&&(L.status="rejected",L.reason=te)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function Oe(L,te,de,oe,be){var _e=typeof L;(_e==="undefined"||_e==="boolean")&&(L=null);var Se=!1;if(L===null)Se=!0;else switch(_e){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(L.$$typeof){case r:case e:Se=!0;break;case v:return Se=L._init,Oe(Se(L._payload),te,de,oe,be)}}if(Se)return be=be(L),Se=oe===""?"."+j(L,0):oe,ie(be)?(de="",Se!=null&&(de=Se.replace(k,"$&/")+"/"),Oe(be,te,de,"",function(qn){return qn})):be!=null&&(x(be)&&(be=R(be,de+(be.key==null||L&&L.key===be.key?"":(""+be.key).replace(k,"$&/")+"/")+Se)),te.push(be)),1;Se=0;var St=oe===""?".":oe+":";if(ie(L))for(var et=0;et<L.length;et++)oe=L[et],_e=St+j(oe,et),Se+=Oe(oe,te,de,_e,be);else if(et=T(L),typeof et=="function")for(L=et.call(L),et=0;!(oe=L.next()).done;)oe=oe.value,_e=St+j(oe,et++),Se+=Oe(oe,te,de,_e,be);else if(_e==="object"){if(typeof L.then=="function")return Oe(pe(L),te,de,oe,be);throw te=String(L),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return Se}function J(L,te,de){if(L==null)return L;var oe=[],be=0;return Oe(L,oe,"","",function(_e){return te.call(de,_e,be++)}),oe}function ce(L){if(L._status===-1){var te=L._result;te=te(),te.then(function(de){(L._status===0||L._status===-1)&&(L._status=1,L._result=de)},function(de){(L._status===0||L._status===-1)&&(L._status=2,L._result=de)}),L._status===-1&&(L._status=0,L._result=te)}if(L._status===1)return L._result.default;throw L._result}var fe=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Pe(){}return ke.Children={map:J,forEach:function(L,te,de){J(L,function(){te.apply(this,arguments)},de)},count:function(L){var te=0;return J(L,function(){te++}),te},toArray:function(L){return J(L,function(te){return te})||[]},only:function(L){if(!x(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},ke.Component=P,ke.Fragment=t,ke.Profiler=s,ke.PureComponent=K,ke.StrictMode=i,ke.Suspense=p,ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,ke.__COMPILER_RUNTIME={__proto__:null,c:function(L){return D.H.useMemoCache(L)}},ke.cache=function(L){return function(){return L.apply(null,arguments)}},ke.cloneElement=function(L,te,de){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var oe=O({},L.props),be=L.key,_e=void 0;if(te!=null)for(Se in te.ref!==void 0&&(_e=void 0),te.key!==void 0&&(be=""+te.key),te)!G.call(te,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&te.ref===void 0||(oe[Se]=te[Se]);var Se=arguments.length-2;if(Se===1)oe.children=de;else if(1<Se){for(var St=Array(Se),et=0;et<Se;et++)St[et]=arguments[et+2];oe.children=St}return C(L.type,be,void 0,void 0,_e,oe)},ke.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:l,_context:L},L},ke.createElement=function(L,te,de){var oe,be={},_e=null;if(te!=null)for(oe in te.key!==void 0&&(_e=""+te.key),te)G.call(te,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(be[oe]=te[oe]);var Se=arguments.length-2;if(Se===1)be.children=de;else if(1<Se){for(var St=Array(Se),et=0;et<Se;et++)St[et]=arguments[et+2];be.children=St}if(L&&L.defaultProps)for(oe in Se=L.defaultProps,Se)be[oe]===void 0&&(be[oe]=Se[oe]);return C(L,_e,void 0,void 0,null,be)},ke.createRef=function(){return{current:null}},ke.forwardRef=function(L){return{$$typeof:d,render:L}},ke.isValidElement=x,ke.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:ce}},ke.memo=function(L,te){return{$$typeof:m,type:L,compare:te===void 0?null:te}},ke.startTransition=function(L){var te=D.T,de={};D.T=de;try{var oe=L(),be=D.S;be!==null&&be(de,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(Pe,fe)}catch(_e){fe(_e)}finally{D.T=te}},ke.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},ke.use=function(L){return D.H.use(L)},ke.useActionState=function(L,te,de){return D.H.useActionState(L,te,de)},ke.useCallback=function(L,te){return D.H.useCallback(L,te)},ke.useContext=function(L){return D.H.useContext(L)},ke.useDebugValue=function(){},ke.useDeferredValue=function(L,te){return D.H.useDeferredValue(L,te)},ke.useEffect=function(L,te,de){var oe=D.H;if(typeof de=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return oe.useEffect(L,te)},ke.useId=function(){return D.H.useId()},ke.useImperativeHandle=function(L,te,de){return D.H.useImperativeHandle(L,te,de)},ke.useInsertionEffect=function(L,te){return D.H.useInsertionEffect(L,te)},ke.useLayoutEffect=function(L,te){return D.H.useLayoutEffect(L,te)},ke.useMemo=function(L,te){return D.H.useMemo(L,te)},ke.useOptimistic=function(L,te){return D.H.useOptimistic(L,te)},ke.useReducer=function(L,te,de){return D.H.useReducer(L,te,de)},ke.useRef=function(L){return D.H.useRef(L)},ke.useState=function(L){return D.H.useState(L)},ke.useSyncExternalStore=function(L,te,de){return D.H.useSyncExternalStore(L,te,de)},ke.useTransition=function(){return D.H.useTransition()},ke.version="19.1.0",ke}var J_;function Bu(){return J_||(J_=1,Up.exports=iR()),Up.exports}var M=Bu();const aR=wb(M);var jp={exports:{}},au={},zp={exports:{}},Bp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eE;function sR(){return eE||(eE=1,function(r){function e(J,ce){var fe=J.length;J.push(ce);e:for(;0<fe;){var Pe=fe-1>>>1,L=J[Pe];if(0<s(L,ce))J[Pe]=ce,J[fe]=L,fe=Pe;else break e}}function t(J){return J.length===0?null:J[0]}function i(J){if(J.length===0)return null;var ce=J[0],fe=J.pop();if(fe!==ce){J[0]=fe;e:for(var Pe=0,L=J.length,te=L>>>1;Pe<te;){var de=2*(Pe+1)-1,oe=J[de],be=de+1,_e=J[be];if(0>s(oe,fe))be<L&&0>s(_e,oe)?(J[Pe]=_e,J[be]=fe,Pe=be):(J[Pe]=oe,J[de]=fe,Pe=de);else if(be<L&&0>s(_e,fe))J[Pe]=_e,J[be]=fe,Pe=be;else break e}}return ce}function s(J,ce){var fe=J.sortIndex-ce.sortIndex;return fe!==0?fe:J.id-ce.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();r.unstable_now=function(){return c.now()-d}}var p=[],m=[],v=1,b=null,T=3,w=!1,O=!1,V=!1,P=!1,B=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function ie(J){for(var ce=t(m);ce!==null;){if(ce.callback===null)i(m);else if(ce.startTime<=J)i(m),ce.sortIndex=ce.expirationTime,e(p,ce);else break;ce=t(m)}}function D(J){if(V=!1,ie(J),!O)if(t(p)!==null)O=!0,G||(G=!0,j());else{var ce=t(m);ce!==null&&Oe(D,ce.startTime-J)}}var G=!1,C=-1,R=5,x=-1;function N(){return P?!0:!(r.unstable_now()-x<R)}function k(){if(P=!1,G){var J=r.unstable_now();x=J;var ce=!0;try{e:{O=!1,V&&(V=!1,K(C),C=-1),w=!0;var fe=T;try{t:{for(ie(J),b=t(p);b!==null&&!(b.expirationTime>J&&N());){var Pe=b.callback;if(typeof Pe=="function"){b.callback=null,T=b.priorityLevel;var L=Pe(b.expirationTime<=J);if(J=r.unstable_now(),typeof L=="function"){b.callback=L,ie(J),ce=!0;break t}b===t(p)&&i(p),ie(J)}else i(p);b=t(p)}if(b!==null)ce=!0;else{var te=t(m);te!==null&&Oe(D,te.startTime-J),ce=!1}}break e}finally{b=null,T=fe,w=!1}ce=void 0}}finally{ce?j():G=!1}}}var j;if(typeof Q=="function")j=function(){Q(k)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,pe=I.port2;I.port1.onmessage=k,j=function(){pe.postMessage(null)}}else j=function(){B(k,0)};function Oe(J,ce){C=B(function(){J(r.unstable_now())},ce)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(J){J.callback=null},r.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<J?Math.floor(1e3/J):5},r.unstable_getCurrentPriorityLevel=function(){return T},r.unstable_next=function(J){switch(T){case 1:case 2:case 3:var ce=3;break;default:ce=T}var fe=T;T=ce;try{return J()}finally{T=fe}},r.unstable_requestPaint=function(){P=!0},r.unstable_runWithPriority=function(J,ce){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var fe=T;T=J;try{return ce()}finally{T=fe}},r.unstable_scheduleCallback=function(J,ce,fe){var Pe=r.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?Pe+fe:Pe):fe=Pe,J){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=fe+L,J={id:v++,callback:ce,priorityLevel:J,startTime:fe,expirationTime:L,sortIndex:-1},fe>Pe?(J.sortIndex=fe,e(m,J),t(p)===null&&J===t(m)&&(V?(K(C),C=-1):V=!0,Oe(D,fe-Pe))):(J.sortIndex=L,e(p,J),O||w||(O=!0,G||(G=!0,j()))),J},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(J){var ce=T;return function(){var fe=T;T=ce;try{return J.apply(this,arguments)}finally{T=fe}}}}(Bp)),Bp}var tE;function oR(){return tE||(tE=1,zp.exports=sR()),zp.exports}var Hp={exports:{}},yn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nE;function lR(){if(nE)return yn;nE=1;var r=Bu();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(p,m,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:b==null?null:""+b,children:p,containerInfo:m,implementation:v}}var c=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,yn.createPortal=function(p,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return l(p,m,null,v)},yn.flushSync=function(p){var m=c.T,v=i.p;try{if(c.T=null,i.p=2,p)return p()}finally{c.T=m,i.p=v,i.d.f()}},yn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,i.d.C(p,m))},yn.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},yn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var v=m.as,b=d(v,m.crossOrigin),T=typeof m.integrity=="string"?m.integrity:void 0,w=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?i.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:T,fetchPriority:w}):v==="script"&&i.d.X(p,{crossOrigin:b,integrity:T,fetchPriority:w,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},yn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=d(m.as,m.crossOrigin);i.d.M(p,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&i.d.M(p)},yn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,b=d(v,m.crossOrigin);i.d.L(p,v,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},yn.preloadModule=function(p,m){if(typeof p=="string")if(m){var v=d(m.as,m.crossOrigin);i.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else i.d.m(p)},yn.requestFormReset=function(p){i.d.r(p)},yn.unstable_batchedUpdates=function(p,m){return p(m)},yn.useFormState=function(p,m,v){return c.H.useFormState(p,m,v)},yn.useFormStatus=function(){return c.H.useHostTransitionStatus()},yn.version="19.1.0",yn}var rE;function uR(){if(rE)return Hp.exports;rE=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Hp.exports=lR(),Hp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iE;function cR(){if(iE)return au;iE=1;var r=oR(),e=Bu(),t=uR();function i(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)a+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var a=n,o=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(o=a.return),n=a.return;while(n)}return a.tag===3?o:null}function c(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function d(n){if(l(n)!==n)throw Error(i(188))}function p(n){var a=n.alternate;if(!a){if(a=l(n),a===null)throw Error(i(188));return a!==n?null:n}for(var o=n,u=a;;){var h=o.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===o)return d(h),n;if(g===u)return d(h),a;g=g.sibling}throw Error(i(188))}if(o.return!==u.return)o=h,u=g;else{for(var E=!1,S=h.child;S;){if(S===o){E=!0,o=h,u=g;break}if(S===u){E=!0,u=h,o=g;break}S=S.sibling}if(!E){for(S=g.child;S;){if(S===o){E=!0,o=g,u=h;break}if(S===u){E=!0,u=g,o=h;break}S=S.sibling}if(!E)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?n:a}function m(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=m(n),a!==null)return a;n=n.sibling}return null}var v=Object.assign,b=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),K=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function j(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var I=Symbol.for("react.client.reference");function pe(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===I?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case P:return"Profiler";case V:return"StrictMode";case D:return"Suspense";case G:return"SuspenseList";case x:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case w:return"Portal";case Q:return(n.displayName||"Context")+".Provider";case K:return(n._context.displayName||"Context")+".Consumer";case ie:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case C:return a=n.displayName||null,a!==null?a:pe(n.type)||"Memo";case R:a=n._payload,n=n._init;try{return pe(n(a))}catch{}}return null}var Oe=Array.isArray,J=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},Pe=[],L=-1;function te(n){return{current:n}}function de(n){0>L||(n.current=Pe[L],Pe[L]=null,L--)}function oe(n,a){L++,Pe[L]=n.current,n.current=a}var be=te(null),_e=te(null),Se=te(null),St=te(null);function et(n,a){switch(oe(Se,a),oe(_e,n),oe(be,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?A_(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=A_(a),n=w_(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}de(be),oe(be,n)}function qn(){de(be),de(_e),de(Se)}function yr(n){n.memoizedState!==null&&oe(St,n);var a=be.current,o=w_(a,n.type);a!==o&&(oe(_e,n),oe(be,o))}function Wn(n){_e.current===n&&(de(be),de(_e)),St.current===n&&(de(St),Jl._currentValue=fe)}var kn=Object.prototype.hasOwnProperty,vr=r.unstable_scheduleCallback,Sn=r.unstable_cancelCallback,di=r.unstable_shouldYield,$i=r.unstable_requestPaint,Vt=r.unstable_now,Qi=r.unstable_getCurrentPriorityLevel,Mr=r.unstable_ImmediatePriority,pi=r.unstable_UserBlockingPriority,Lr=r.unstable_NormalPriority,al=r.unstable_LowPriority,Vr=r.unstable_IdlePriority,_r=r.log,Er=r.unstable_setDisableYieldValue,tt=null,Qe=null;function pn(n){if(typeof _r=="function"&&Er(n),Qe&&typeof Qe.setStrictMode=="function")try{Qe.setStrictMode(tt,n)}catch{}}var Ut=Math.clz32?Math.clz32:Zn,Xi=Math.log,Ms=Math.LN2;function Zn(n){return n>>>=0,n===0?32:31-(Xi(n)/Ms|0)|0}var Jn=256,sn=4194304;function $t(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ur(n,a,o){var u=n.pendingLanes;if(u===0)return 0;var h=0,g=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var S=u&134217727;return S!==0?(u=S&~g,u!==0?h=$t(u):(E&=S,E!==0?h=$t(E):o||(o=S&~n,o!==0&&(h=$t(o))))):(S=u&~g,S!==0?h=$t(S):E!==0?h=$t(E):o||(o=u&~n,o!==0&&(h=$t(o)))),h===0?0:a!==0&&a!==h&&(a&g)===0&&(g=h&-h,o=a&-a,g>=o||g===32&&(o&4194048)!==0)?a:h}function br(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function Ha(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jr(){var n=Jn;return Jn<<=1,(Jn&4194048)===0&&(Jn=256),n}function zr(){var n=sn;return sn<<=1,(sn&62914560)===0&&(sn=4194304),n}function Tr(n){for(var a=[],o=0;31>o;o++)a.push(n);return a}function An(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Fa(n,a,o,u,h,g){var E=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var S=n.entanglements,q=n.expirationTimes,X=n.hiddenUpdates;for(o=E&~o;0<o;){var ne=31-Ut(o),ae=1<<ne;S[ne]=0,q[ne]=-1;var W=X[ne];if(W!==null)for(X[ne]=null,ne=0;ne<W.length;ne++){var Z=W[ne];Z!==null&&(Z.lane&=-536870913)}o&=~ae}u!==0&&er(n,u,0),g!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=g&~(E&~a))}function er(n,a,o){n.pendingLanes|=a,n.suspendedLanes&=~a;var u=31-Ut(a);n.entangledLanes|=a,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194090}function mt(n,a){var o=n.entangledLanes|=a;for(n=n.entanglements;o;){var u=31-Ut(o),h=1<<u;h&a|n[u]&a&&(n[u]|=a),o&=~h}}function wn(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Wi(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Sr(){var n=ce.p;return n!==0?n:(n=window.event,n===void 0?32:F_(n.type))}function Zi(n,a){var o=ce.p;try{return ce.p=n,a()}finally{ce.p=o}}var ut=Math.random().toString(36).slice(2),At="__reactFiber$"+ut,wt="__reactProps$"+ut,vt="__reactContainer$"+ut,Br="__reactEvents$"+ut,Ls="__reactListeners$"+ut,Ar="__reactHandles$"+ut,Ji="__reactResources$"+ut,Hr="__reactMarker$"+ut;function Qt(n){delete n[At],delete n[wt],delete n[Br],delete n[Ls],delete n[Ar]}function tr(n){var a=n[At];if(a)return a;for(var o=n.parentNode;o;){if(a=o[vt]||o[At]){if(o=a.alternate,a.child!==null||o!==null&&o.child!==null)for(n=x_(n);n!==null;){if(o=n[At])return o;n=x_(n)}return a}n=o,o=n.parentNode}return null}function Un(n){if(n=n[At]||n[vt]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function jn(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(i(33))}function Xt(n){var a=n[Ji];return a||(a=n[Ji]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function _t(n){n[Hr]=!0}var ve=new Set,H={};function le(n,a){me(n,a),me(n+"Capture",a)}function me(n,a){for(H[n]=a,n=0;n<a.length;n++)ve.add(a[n])}var nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),It={},ht={};function jt(n){return kn.call(ht,n)?!0:kn.call(It,n)?!1:nt.test(n)?ht[n]=!0:(It[n]=!0,!1)}function zt(n,a,o){if(jt(a))if(o===null)n.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var u=a.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+o)}}function mn(n,a,o){if(o===null)n.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+o)}}function $e(n,a,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(a,o,""+u)}}var Fr,Ga;function mi(n){if(Fr===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);Fr=a&&a[1]||"",Ga=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fr+n+Ga}var Vs=!1;function Us(n,a){if(!n||Vs)return"";Vs=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(a){var ae=function(){throw Error()};if(Object.defineProperty(ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ae,[])}catch(Z){var W=Z}Reflect.construct(n,[],ae)}else{try{ae.call()}catch(Z){W=Z}n.call(ae.prototype)}}else{try{throw Error()}catch(Z){W=Z}(ae=n())&&typeof ae.catch=="function"&&ae.catch(function(){})}}catch(Z){if(Z&&W&&typeof Z.stack=="string")return[Z.stack,W.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=u.DetermineComponentFrameRoot(),E=g[0],S=g[1];if(E&&S){var q=E.split(`
`),X=S.split(`
`);for(h=u=0;u<q.length&&!q[u].includes("DetermineComponentFrameRoot");)u++;for(;h<X.length&&!X[h].includes("DetermineComponentFrameRoot");)h++;if(u===q.length||h===X.length)for(u=q.length-1,h=X.length-1;1<=u&&0<=h&&q[u]!==X[h];)h--;for(;1<=u&&0<=h;u--,h--)if(q[u]!==X[h]){if(u!==1||h!==1)do if(u--,h--,0>h||q[u]!==X[h]){var ne=`
`+q[u].replace(" at new "," at ");return n.displayName&&ne.includes("<anonymous>")&&(ne=ne.replace("<anonymous>",n.displayName)),ne}while(1<=u&&0<=h);break}}}finally{Vs=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?mi(o):""}function sl(n){switch(n.tag){case 26:case 27:case 5:return mi(n.type);case 16:return mi("Lazy");case 13:return mi("Suspense");case 19:return mi("SuspenseList");case 0:case 15:return Us(n.type,!1);case 11:return Us(n.type.render,!1);case 1:return Us(n.type,!0);case 31:return mi("Activity");default:return""}}function js(n){try{var a="";do a+=sl(n),n=n.return;while(n);return a}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Rn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ol(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Bh(n){var a=ol(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),u=""+n[a];if(!n.hasOwnProperty(a)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,g=o.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return h.call(this)},set:function(E){u=""+E,g.call(this,E)}}),Object.defineProperty(n,a,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function zs(n){n._valueTracker||(n._valueTracker=Bh(n))}function ll(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var o=a.getValue(),u="";return n&&(u=ol(n)?n.checked?"true":"false":n.value),n=u,n!==o?(a.setValue(n),!0):!1}function Ya(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Hh=/[\n"\\]/g;function kt(n){return n.replace(Hh,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function zn(n,a,o,u,h,g,E,S){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),a!=null?E==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+Rn(a)):n.value!==""+Rn(a)&&(n.value=""+Rn(a)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),a!=null?ea(n,E,Rn(a)):o!=null?ea(n,E,Rn(o)):u!=null&&n.removeAttribute("value"),h==null&&g!=null&&(n.defaultChecked=!!g),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?n.name=""+Rn(S):n.removeAttribute("name")}function Ka(n,a,o,u,h,g,E,S){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.type=g),a!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||a!=null))return;o=o!=null?""+Rn(o):"",a=a!=null?""+Rn(a):o,S||a===n.value||(n.value=a),n.defaultValue=a}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=S?n.checked:!!u,n.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function ea(n,a,o){a==="number"&&Ya(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function gi(n,a,o,u){if(n=n.options,a){a={};for(var h=0;h<o.length;h++)a["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=a.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Rn(o),a=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}a!==null||n[h].disabled||(a=n[h])}a!==null&&(a.selected=!0)}}function at(n,a,o){if(a!=null&&(a=""+Rn(a),a!==n.value&&(n.value=a),o==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=o!=null?""+Rn(o):""}function $a(n,a,o,u){if(a==null){if(u!=null){if(o!=null)throw Error(i(92));if(Oe(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),a=o}o=Rn(a),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function nr(n,a){if(a){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=a;return}}n.textContent=a}var Qa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tc(n,a,o){var u=a.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":u?n.setProperty(a,o):typeof o!="number"||o===0||Qa.has(a)?a==="float"?n.cssFloat=o:n[a]=(""+o).trim():n[a]=o+"px"}function ul(n,a,o){if(a!=null&&typeof a!="object")throw Error(i(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||a!=null&&a.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var h in a)u=a[h],a.hasOwnProperty(h)&&o[h]!==u&&tc(n,h,u)}else for(var g in a)a.hasOwnProperty(g)&&tc(n,g,a[g])}function cl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bs(n){return Gh.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var yi=null;function rr(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var vi=null,_i=null;function fl(n){var a=Un(n);if(a&&(n=a.stateNode)){var o=n[wt]||null;e:switch(n=a.stateNode,a.type){case"input":if(zn(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),a=o.name,o.type==="radio"&&a!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+kt(""+a)+'"][type="radio"]'),a=0;a<o.length;a++){var u=o[a];if(u!==n&&u.form===n.form){var h=u[wt]||null;if(!h)throw Error(i(90));zn(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(a=0;a<o.length;a++)u=o[a],u.form===n.form&&ll(u)}break e;case"textarea":at(n,o.value,o.defaultValue);break e;case"select":a=o.value,a!=null&&gi(n,!!o.multiple,a,!1)}}}var Gr=!1;function nc(n,a,o){if(Gr)return n(a,o);Gr=!0;try{var u=n(a);return u}finally{if(Gr=!1,(vi!==null||_i!==null)&&(Qc(),vi&&(a=vi,n=_i,_i=vi=null,fl(a),n)))for(a=0;a<n.length;a++)fl(n[a])}}function Xa(n,a){var o=n.stateNode;if(o===null)return null;var u=o[wt]||null;if(u===null)return null;o=u[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(i(231,a,typeof o));return o}var wr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ir=!1;if(wr)try{var Wa={};Object.defineProperty(Wa,"passive",{get:function(){ir=!0}}),window.addEventListener("test",Wa,Wa),window.removeEventListener("test",Wa,Wa)}catch{ir=!1}var Yr=null,ta=null,Ei=null;function hl(){if(Ei)return Ei;var n,a=ta,o=a.length,u,h="value"in Yr?Yr.value:Yr.textContent,g=h.length;for(n=0;n<o&&a[n]===h[n];n++);var E=o-n;for(u=1;u<=E&&a[o-u]===h[g-u];u++);return Ei=h.slice(n,1<u?1-u:void 0)}function Kr(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function $r(){return!0}function dl(){return!1}function Wt(n){function a(o,u,h,g,E){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(o=n[S],this[S]=o?o(g):g[S]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?$r:dl,this.isPropagationStopped=dl,this}return v(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=$r)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=$r)},persist:function(){},isPersistent:$r}),a}var Ze={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hs=Wt(Ze),Za=v({},Ze,{view:0,detail:0}),rc=Wt(Za),Fs,Gs,Qr,Ja=v({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ns,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Qr&&(Qr&&n.type==="mousemove"?(Fs=n.screenX-Qr.screenX,Gs=n.screenY-Qr.screenY):Gs=Fs=0,Qr=n),Fs)},movementY:function(n){return"movementY"in n?n.movementY:Gs}}),ar=Wt(Ja),ic=v({},Ja,{dataTransfer:0}),Yh=Wt(ic),es=v({},Za,{relatedTarget:0}),Ys=Wt(es),pl=v({},Ze,{animationName:0,elapsedTime:0,pseudoElement:0}),Ks=Wt(pl),ac=v({},Ze,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),$s=Wt(ac),Kh=v({},Ze,{data:0}),ml=Wt(Kh),ts={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gl(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=oc[n])?!!a[n]:!1}function ns(){return gl}var lc=v({},Za,{key:function(n){if(n.key){var a=ts[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=Kr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?sc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ns,charCode:function(n){return n.type==="keypress"?Kr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Kr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Qs=Wt(lc),uc=v({},Ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yl=Wt(uc),bi=v({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ns}),cc=Wt(bi),fc=v({},Ze,{propertyName:0,elapsedTime:0,pseudoElement:0}),hc=Wt(fc),dc=v({},Ja,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Xs=Wt(dc),Cn=v({},Ze,{newState:0,oldState:0}),pc=Wt(Cn),mc=[9,13,27,32],Xr=wr&&"CompositionEvent"in window,f=null;wr&&"documentMode"in document&&(f=document.documentMode);var y=wr&&"TextEvent"in window&&!f,_=wr&&(!Xr||f&&8<f&&11>=f),A=" ",Y=!1;function ee(n,a){switch(n){case"keyup":return mc.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function he(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Fe=!1;function Bt(n,a){switch(n){case"compositionend":return he(a);case"keypress":return a.which!==32?null:(Y=!0,A);case"textInput":return n=a.data,n===A&&Y?null:n;default:return null}}function Ge(n,a){if(Fe)return n==="compositionend"||!Xr&&ee(n,a)?(n=hl(),Ei=ta=Yr=null,Fe=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return _&&a.locale!=="ko"?null:a.data;default:return null}}var Zt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ht(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!Zt[n.type]:a==="textarea"}function Ti(n,a,o,u){vi?_i?_i.push(u):_i=[u]:vi=u,a=tf(a,"onChange"),0<a.length&&(o=new Hs("onChange","change",null,o,u),n.push({event:o,listeners:a}))}var on=null,Wr=null;function vl(n){__(n,0)}function gc(n){var a=jn(n);if(ll(a))return n}function jg(n,a){if(n==="change")return a}var zg=!1;if(wr){var $h;if(wr){var Qh="oninput"in document;if(!Qh){var Bg=document.createElement("div");Bg.setAttribute("oninput","return;"),Qh=typeof Bg.oninput=="function"}$h=Qh}else $h=!1;zg=$h&&(!document.documentMode||9<document.documentMode)}function Hg(){on&&(on.detachEvent("onpropertychange",Fg),Wr=on=null)}function Fg(n){if(n.propertyName==="value"&&gc(Wr)){var a=[];Ti(a,Wr,n,rr(n)),nc(vl,a)}}function qA(n,a,o){n==="focusin"?(Hg(),on=a,Wr=o,on.attachEvent("onpropertychange",Fg)):n==="focusout"&&Hg()}function kA(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return gc(Wr)}function NA(n,a){if(n==="click")return gc(a)}function PA(n,a){if(n==="input"||n==="change")return gc(a)}function MA(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var Bn=typeof Object.is=="function"?Object.is:MA;function _l(n,a){if(Bn(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var o=Object.keys(n),u=Object.keys(a);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!kn.call(a,h)||!Bn(n[h],a[h]))return!1}return!0}function Gg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Yg(n,a){var o=Gg(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=a&&u>=a)return{node:o,offset:a-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Gg(o)}}function Kg(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?Kg(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function $g(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=Ya(n.document);a instanceof n.HTMLIFrameElement;){try{var o=typeof a.contentWindow.location.href=="string"}catch{o=!1}if(o)n=a.contentWindow;else break;a=Ya(n.document)}return a}function Xh(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var LA=wr&&"documentMode"in document&&11>=document.documentMode,Ws=null,Wh=null,El=null,Zh=!1;function Qg(n,a,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Zh||Ws==null||Ws!==Ya(u)||(u=Ws,"selectionStart"in u&&Xh(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),El&&_l(El,u)||(El=u,u=tf(Wh,"onSelect"),0<u.length&&(a=new Hs("onSelect","select",null,a,o),n.push({event:a,listeners:u}),a.target=Ws)))}function rs(n,a){var o={};return o[n.toLowerCase()]=a.toLowerCase(),o["Webkit"+n]="webkit"+a,o["Moz"+n]="moz"+a,o}var Zs={animationend:rs("Animation","AnimationEnd"),animationiteration:rs("Animation","AnimationIteration"),animationstart:rs("Animation","AnimationStart"),transitionrun:rs("Transition","TransitionRun"),transitionstart:rs("Transition","TransitionStart"),transitioncancel:rs("Transition","TransitionCancel"),transitionend:rs("Transition","TransitionEnd")},Jh={},Xg={};wr&&(Xg=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function is(n){if(Jh[n])return Jh[n];if(!Zs[n])return n;var a=Zs[n],o;for(o in a)if(a.hasOwnProperty(o)&&o in Xg)return Jh[n]=a[o];return n}var Wg=is("animationend"),Zg=is("animationiteration"),Jg=is("animationstart"),VA=is("transitionrun"),UA=is("transitionstart"),jA=is("transitioncancel"),ey=is("transitionend"),ty=new Map,ed="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ed.push("scrollEnd");function Rr(n,a){ty.set(n,a),le(a,[n])}var ny=new WeakMap;function sr(n,a){if(typeof n=="object"&&n!==null){var o=ny.get(n);return o!==void 0?o:(a={value:n,source:a,stack:js(a)},ny.set(n,a),a)}return{value:n,source:a,stack:js(a)}}var or=[],Js=0,td=0;function yc(){for(var n=Js,a=td=Js=0;a<n;){var o=or[a];or[a++]=null;var u=or[a];or[a++]=null;var h=or[a];or[a++]=null;var g=or[a];if(or[a++]=null,u!==null&&h!==null){var E=u.pending;E===null?h.next=h:(h.next=E.next,E.next=h),u.pending=h}g!==0&&ry(o,h,g)}}function vc(n,a,o,u){or[Js++]=n,or[Js++]=a,or[Js++]=o,or[Js++]=u,td|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function nd(n,a,o,u){return vc(n,a,o,u),_c(n)}function eo(n,a){return vc(n,null,null,a),_c(n)}function ry(n,a,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var h=!1,g=n.return;g!==null;)g.childLanes|=o,u=g.alternate,u!==null&&(u.childLanes|=o),g.tag===22&&(n=g.stateNode,n===null||n._visibility&1||(h=!0)),n=g,g=g.return;return n.tag===3?(g=n.stateNode,h&&a!==null&&(h=31-Ut(o),n=g.hiddenUpdates,u=n[h],u===null?n[h]=[a]:u.push(a),a.lane=o|536870912),g):null}function _c(n){if(50<Gl)throw Gl=0,lp=null,Error(i(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var to={};function zA(n,a,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(n,a,o,u){return new zA(n,a,o,u)}function rd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Si(n,a){var o=n.alternate;return o===null?(o=Hn(n.tag,a,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=a,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,a=n.dependencies,o.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function iy(n,a){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,a=o.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function Ec(n,a,o,u,h,g){var E=0;if(u=n,typeof n=="function")rd(n)&&(E=1);else if(typeof n=="string")E=Hw(n,o,be.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case x:return n=Hn(31,o,a,h),n.elementType=x,n.lanes=g,n;case O:return as(o.children,h,g,a);case V:E=8,h|=24;break;case P:return n=Hn(12,o,a,h|2),n.elementType=P,n.lanes=g,n;case D:return n=Hn(13,o,a,h),n.elementType=D,n.lanes=g,n;case G:return n=Hn(19,o,a,h),n.elementType=G,n.lanes=g,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case B:case Q:E=10;break e;case K:E=9;break e;case ie:E=11;break e;case C:E=14;break e;case R:E=16,u=null;break e}E=29,o=Error(i(130,n===null?"null":typeof n,"")),u=null}return a=Hn(E,o,a,h),a.elementType=n,a.type=u,a.lanes=g,a}function as(n,a,o,u){return n=Hn(7,n,u,a),n.lanes=o,n}function id(n,a,o){return n=Hn(6,n,null,a),n.lanes=o,n}function ad(n,a,o){return a=Hn(4,n.children!==null?n.children:[],n.key,a),a.lanes=o,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var no=[],ro=0,bc=null,Tc=0,lr=[],ur=0,ss=null,Ai=1,wi="";function os(n,a){no[ro++]=Tc,no[ro++]=bc,bc=n,Tc=a}function ay(n,a,o){lr[ur++]=Ai,lr[ur++]=wi,lr[ur++]=ss,ss=n;var u=Ai;n=wi;var h=32-Ut(u)-1;u&=~(1<<h),o+=1;var g=32-Ut(a)+h;if(30<g){var E=h-h%5;g=(u&(1<<E)-1).toString(32),u>>=E,h-=E,Ai=1<<32-Ut(a)+h|o<<h|u,wi=g+n}else Ai=1<<g|o<<h|u,wi=n}function sd(n){n.return!==null&&(os(n,1),ay(n,1,0))}function od(n){for(;n===bc;)bc=no[--ro],no[ro]=null,Tc=no[--ro],no[ro]=null;for(;n===ss;)ss=lr[--ur],lr[ur]=null,wi=lr[--ur],lr[ur]=null,Ai=lr[--ur],lr[ur]=null}var In=null,Rt=null,We=!1,ls=null,Zr=!1,ld=Error(i(519));function us(n){var a=Error(i(418,""));throw Sl(sr(a,n)),ld}function sy(n){var a=n.stateNode,o=n.type,u=n.memoizedProps;switch(a[At]=n,a[wt]=u,o){case"dialog":je("cancel",a),je("close",a);break;case"iframe":case"object":case"embed":je("load",a);break;case"video":case"audio":for(o=0;o<Kl.length;o++)je(Kl[o],a);break;case"source":je("error",a);break;case"img":case"image":case"link":je("error",a),je("load",a);break;case"details":je("toggle",a);break;case"input":je("invalid",a),Ka(a,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),zs(a);break;case"select":je("invalid",a);break;case"textarea":je("invalid",a),$a(a,u.value,u.defaultValue,u.children),zs(a)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||a.textContent===""+o||u.suppressHydrationWarning===!0||S_(a.textContent,o)?(u.popover!=null&&(je("beforetoggle",a),je("toggle",a)),u.onScroll!=null&&je("scroll",a),u.onScrollEnd!=null&&je("scrollend",a),u.onClick!=null&&(a.onclick=nf),a=!0):a=!1,a||us(n)}function oy(n){for(In=n.return;In;)switch(In.tag){case 5:case 13:Zr=!1;return;case 27:case 3:Zr=!0;return;default:In=In.return}}function bl(n){if(n!==In)return!1;if(!We)return oy(n),We=!0,!1;var a=n.tag,o;if((o=a!==3&&a!==27)&&((o=a===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||Ap(n.type,n.memoizedProps)),o=!o),o&&Rt&&us(n),oy(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));e:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(a===0){Rt=Ir(n.nextSibling);break e}a--}else o!=="$"&&o!=="$!"&&o!=="$?"||a++;n=n.nextSibling}Rt=null}}else a===27?(a=Rt,ya(n.type)?(n=Ip,Ip=null,Rt=n):Rt=a):Rt=In?Ir(n.stateNode.nextSibling):null;return!0}function Tl(){Rt=In=null,We=!1}function ly(){var n=ls;return n!==null&&(Mn===null?Mn=n:Mn.push.apply(Mn,n),ls=null),n}function Sl(n){ls===null?ls=[n]:ls.push(n)}var ud=te(null),cs=null,Ri=null;function na(n,a,o){oe(ud,a._currentValue),a._currentValue=o}function Ci(n){n._currentValue=ud.current,de(ud)}function cd(n,a,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,u!==null&&(u.childLanes|=a)):u!==null&&(u.childLanes&a)!==a&&(u.childLanes|=a),n===o)break;n=n.return}}function fd(n,a,o,u){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var g=h.dependencies;if(g!==null){var E=h.child;g=g.firstContext;e:for(;g!==null;){var S=g;g=h;for(var q=0;q<a.length;q++)if(S.context===a[q]){g.lanes|=o,S=g.alternate,S!==null&&(S.lanes|=o),cd(g.return,o,n),u||(E=null);break e}g=S.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(i(341));E.lanes|=o,g=E.alternate,g!==null&&(g.lanes|=o),cd(E,o,n),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===n){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function Al(n,a,o,u){n=null;for(var h=a,g=!1;h!==null;){if(!g){if((h.flags&524288)!==0)g=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(i(387));if(E=E.memoizedProps,E!==null){var S=h.type;Bn(h.pendingProps.value,E.value)||(n!==null?n.push(S):n=[S])}}else if(h===St.current){if(E=h.alternate,E===null)throw Error(i(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(Jl):n=[Jl])}h=h.return}n!==null&&fd(a,n,o,u),a.flags|=262144}function Sc(n){for(n=n.firstContext;n!==null;){if(!Bn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function fs(n){cs=n,Ri=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function gn(n){return uy(cs,n)}function Ac(n,a){return cs===null&&fs(n),uy(n,a)}function uy(n,a){var o=a._currentValue;if(a={context:a,memoizedValue:o,next:null},Ri===null){if(n===null)throw Error(i(308));Ri=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else Ri=Ri.next=a;return o}var BA=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){a.aborted=!0,n.forEach(function(o){return o()})}},HA=r.unstable_scheduleCallback,FA=r.unstable_NormalPriority,Ft={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hd(){return{controller:new BA,data:new Map,refCount:0}}function wl(n){n.refCount--,n.refCount===0&&HA(FA,function(){n.controller.abort()})}var Rl=null,dd=0,io=0,ao=null;function GA(n,a){if(Rl===null){var o=Rl=[];dd=0,io=mp(),ao={status:"pending",value:void 0,then:function(u){o.push(u)}}}return dd++,a.then(cy,cy),a}function cy(){if(--dd===0&&Rl!==null){ao!==null&&(ao.status="fulfilled");var n=Rl;Rl=null,io=0,ao=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function YA(n,a){var o=[],u={status:"pending",value:null,reason:null,then:function(h){o.push(h)}};return n.then(function(){u.status="fulfilled",u.value=a;for(var h=0;h<o.length;h++)(0,o[h])(a)},function(h){for(u.status="rejected",u.reason=h,h=0;h<o.length;h++)(0,o[h])(void 0)}),u}var fy=J.S;J.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&GA(n,a),fy!==null&&fy(n,a)};var hs=te(null);function pd(){var n=hs.current;return n!==null?n:ft.pooledCache}function wc(n,a){a===null?oe(hs,hs.current):oe(hs,a.pool)}function hy(){var n=pd();return n===null?null:{parent:Ft._currentValue,pool:n}}var Cl=Error(i(460)),dy=Error(i(474)),Rc=Error(i(542)),md={then:function(){}};function py(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Cc(){}function my(n,a,o){switch(o=n[o],o===void 0?n.push(a):o!==a&&(a.then(Cc,Cc),a=o),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,yy(n),n;default:if(typeof a.status=="string")a.then(Cc,Cc);else{if(n=ft,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=a,n.status="pending",n.then(function(u){if(a.status==="pending"){var h=a;h.status="fulfilled",h.value=u}},function(u){if(a.status==="pending"){var h=a;h.status="rejected",h.reason=u}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,yy(n),n}throw Il=a,Cl}}var Il=null;function gy(){if(Il===null)throw Error(i(459));var n=Il;return Il=null,n}function yy(n){if(n===Cl||n===Rc)throw Error(i(483))}var ra=!1;function gd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yd(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ia(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function aa(n,a,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(rt&2)!==0){var h=u.pending;return h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a,a=_c(n),ry(n,null,o),a}return vc(n,u,a,o),_c(n)}function xl(n,a,o){if(a=a.updateQueue,a!==null&&(a=a.shared,(o&4194048)!==0)){var u=a.lanes;u&=n.pendingLanes,o|=u,a.lanes=o,mt(n,o)}}function vd(n,a){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?h=g=E:g=g.next=E,o=o.next}while(o!==null);g===null?h=g=a:g=g.next=a}else h=g=a;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=a:n.next=a,o.lastBaseUpdate=a}var _d=!1;function Ol(){if(_d){var n=ao;if(n!==null)throw n}}function Dl(n,a,o,u){_d=!1;var h=n.updateQueue;ra=!1;var g=h.firstBaseUpdate,E=h.lastBaseUpdate,S=h.shared.pending;if(S!==null){h.shared.pending=null;var q=S,X=q.next;q.next=null,E===null?g=X:E.next=X,E=q;var ne=n.alternate;ne!==null&&(ne=ne.updateQueue,S=ne.lastBaseUpdate,S!==E&&(S===null?ne.firstBaseUpdate=X:S.next=X,ne.lastBaseUpdate=q))}if(g!==null){var ae=h.baseState;E=0,ne=X=q=null,S=g;do{var W=S.lane&-536870913,Z=W!==S.lane;if(Z?(Ye&W)===W:(u&W)===W){W!==0&&W===io&&(_d=!0),ne!==null&&(ne=ne.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var xe=n,we=S;W=a;var lt=o;switch(we.tag){case 1:if(xe=we.payload,typeof xe=="function"){ae=xe.call(lt,ae,W);break e}ae=xe;break e;case 3:xe.flags=xe.flags&-65537|128;case 0:if(xe=we.payload,W=typeof xe=="function"?xe.call(lt,ae,W):xe,W==null)break e;ae=v({},ae,W);break e;case 2:ra=!0}}W=S.callback,W!==null&&(n.flags|=64,Z&&(n.flags|=8192),Z=h.callbacks,Z===null?h.callbacks=[W]:Z.push(W))}else Z={lane:W,tag:S.tag,payload:S.payload,callback:S.callback,next:null},ne===null?(X=ne=Z,q=ae):ne=ne.next=Z,E|=W;if(S=S.next,S===null){if(S=h.shared.pending,S===null)break;Z=S,S=Z.next,Z.next=null,h.lastBaseUpdate=Z,h.shared.pending=null}}while(!0);ne===null&&(q=ae),h.baseState=q,h.firstBaseUpdate=X,h.lastBaseUpdate=ne,g===null&&(h.shared.lanes=0),da|=E,n.lanes=E,n.memoizedState=ae}}function vy(n,a){if(typeof n!="function")throw Error(i(191,n));n.call(a)}function _y(n,a){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)vy(o[n],a)}var so=te(null),Ic=te(0);function Ey(n,a){n=Ni,oe(Ic,n),oe(so,a),Ni=n|a.baseLanes}function Ed(){oe(Ic,Ni),oe(so,so.current)}function bd(){Ni=Ic.current,de(so),de(Ic)}var sa=0,Me=null,st=null,Nt=null,xc=!1,oo=!1,ds=!1,Oc=0,ql=0,lo=null,KA=0;function xt(){throw Error(i(321))}function Td(n,a){if(a===null)return!1;for(var o=0;o<a.length&&o<n.length;o++)if(!Bn(n[o],a[o]))return!1;return!0}function Sd(n,a,o,u,h,g){return sa=g,Me=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,J.H=n===null||n.memoizedState===null?rv:iv,ds=!1,g=o(u,h),ds=!1,oo&&(g=Ty(a,o,u,h)),by(n),g}function by(n){J.H=Mc;var a=st!==null&&st.next!==null;if(sa=0,Nt=st=Me=null,xc=!1,ql=0,lo=null,a)throw Error(i(300));n===null||Jt||(n=n.dependencies,n!==null&&Sc(n)&&(Jt=!0))}function Ty(n,a,o,u){Me=n;var h=0;do{if(oo&&(lo=null),ql=0,oo=!1,25<=h)throw Error(i(301));if(h+=1,Nt=st=null,n.updateQueue!=null){var g=n.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}J.H=ew,g=a(o,u)}while(oo);return g}function $A(){var n=J.H,a=n.useState()[0];return a=typeof a.then=="function"?kl(a):a,n=n.useState()[0],(st!==null?st.memoizedState:null)!==n&&(Me.flags|=1024),a}function Ad(){var n=Oc!==0;return Oc=0,n}function wd(n,a,o){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~o}function Rd(n){if(xc){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}xc=!1}sa=0,Nt=st=Me=null,oo=!1,ql=Oc=0,lo=null}function Nn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?Me.memoizedState=Nt=n:Nt=Nt.next=n,Nt}function Pt(){if(st===null){var n=Me.alternate;n=n!==null?n.memoizedState:null}else n=st.next;var a=Nt===null?Me.memoizedState:Nt.next;if(a!==null)Nt=a,st=n;else{if(n===null)throw Me.alternate===null?Error(i(467)):Error(i(310));st=n,n={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},Nt===null?Me.memoizedState=Nt=n:Nt=Nt.next=n}return Nt}function Cd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function kl(n){var a=ql;return ql+=1,lo===null&&(lo=[]),n=my(lo,n,a),a=Me,(Nt===null?a.memoizedState:Nt.next)===null&&(a=a.alternate,J.H=a===null||a.memoizedState===null?rv:iv),n}function Dc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return kl(n);if(n.$$typeof===Q)return gn(n)}throw Error(i(438,String(n)))}function Id(n){var a=null,o=Me.updateQueue;if(o!==null&&(a=o.memoCache),a==null){var u=Me.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(a={data:u.data.map(function(h){return h.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),o===null&&(o=Cd(),Me.updateQueue=o),o.memoCache=a,o=a.data[a.index],o===void 0)for(o=a.data[a.index]=Array(n),u=0;u<n;u++)o[u]=N;return a.index++,o}function Ii(n,a){return typeof a=="function"?a(n):a}function qc(n){var a=Pt();return xd(a,st,n)}function xd(n,a,o){var u=n.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var h=n.baseQueue,g=u.pending;if(g!==null){if(h!==null){var E=h.next;h.next=g.next,g.next=E}a.baseQueue=h=g,u.pending=null}if(g=n.baseState,h===null)n.memoizedState=g;else{a=h.next;var S=E=null,q=null,X=a,ne=!1;do{var ae=X.lane&-536870913;if(ae!==X.lane?(Ye&ae)===ae:(sa&ae)===ae){var W=X.revertLane;if(W===0)q!==null&&(q=q.next={lane:0,revertLane:0,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null}),ae===io&&(ne=!0);else if((sa&W)===W){X=X.next,W===io&&(ne=!0);continue}else ae={lane:0,revertLane:X.revertLane,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},q===null?(S=q=ae,E=g):q=q.next=ae,Me.lanes|=W,da|=W;ae=X.action,ds&&o(g,ae),g=X.hasEagerState?X.eagerState:o(g,ae)}else W={lane:ae,revertLane:X.revertLane,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},q===null?(S=q=W,E=g):q=q.next=W,Me.lanes|=ae,da|=ae;X=X.next}while(X!==null&&X!==a);if(q===null?E=g:q.next=S,!Bn(g,n.memoizedState)&&(Jt=!0,ne&&(o=ao,o!==null)))throw o;n.memoizedState=g,n.baseState=E,n.baseQueue=q,u.lastRenderedState=g}return h===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function Od(n){var a=Pt(),o=a.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var u=o.dispatch,h=o.pending,g=a.memoizedState;if(h!==null){o.pending=null;var E=h=h.next;do g=n(g,E.action),E=E.next;while(E!==h);Bn(g,a.memoizedState)||(Jt=!0),a.memoizedState=g,a.baseQueue===null&&(a.baseState=g),o.lastRenderedState=g}return[g,u]}function Sy(n,a,o){var u=Me,h=Pt(),g=We;if(g){if(o===void 0)throw Error(i(407));o=o()}else o=a();var E=!Bn((st||h).memoizedState,o);E&&(h.memoizedState=o,Jt=!0),h=h.queue;var S=Ry.bind(null,u,h,n);if(Nl(2048,8,S,[n]),h.getSnapshot!==a||E||Nt!==null&&Nt.memoizedState.tag&1){if(u.flags|=2048,uo(9,kc(),wy.bind(null,u,h,o,a),null),ft===null)throw Error(i(349));g||(sa&124)!==0||Ay(u,a,o)}return o}function Ay(n,a,o){n.flags|=16384,n={getSnapshot:a,value:o},a=Me.updateQueue,a===null?(a=Cd(),Me.updateQueue=a,a.stores=[n]):(o=a.stores,o===null?a.stores=[n]:o.push(n))}function wy(n,a,o,u){a.value=o,a.getSnapshot=u,Cy(a)&&Iy(n)}function Ry(n,a,o){return o(function(){Cy(a)&&Iy(n)})}function Cy(n){var a=n.getSnapshot;n=n.value;try{var o=a();return!Bn(n,o)}catch{return!0}}function Iy(n){var a=eo(n,2);a!==null&&$n(a,n,2)}function Dd(n){var a=Nn();if(typeof n=="function"){var o=n;if(n=o(),ds){pn(!0);try{o()}finally{pn(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:n},a}function xy(n,a,o,u){return n.baseState=o,xd(n,st,typeof u=="function"?u:Ii)}function QA(n,a,o,u,h){if(Pc(n))throw Error(i(485));if(n=a.action,n!==null){var g={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){g.listeners.push(E)}};J.T!==null?o(!0):g.isTransition=!1,u(g),o=a.pending,o===null?(g.next=a.pending=g,Oy(a,g)):(g.next=o.next,a.pending=o.next=g)}}function Oy(n,a){var o=a.action,u=a.payload,h=n.state;if(a.isTransition){var g=J.T,E={};J.T=E;try{var S=o(h,u),q=J.S;q!==null&&q(E,S),Dy(n,a,S)}catch(X){qd(n,a,X)}finally{J.T=g}}else try{g=o(h,u),Dy(n,a,g)}catch(X){qd(n,a,X)}}function Dy(n,a,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){qy(n,a,u)},function(u){return qd(n,a,u)}):qy(n,a,o)}function qy(n,a,o){a.status="fulfilled",a.value=o,ky(a),n.state=o,a=n.pending,a!==null&&(o=a.next,o===a?n.pending=null:(o=o.next,a.next=o,Oy(n,o)))}function qd(n,a,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do a.status="rejected",a.reason=o,ky(a),a=a.next;while(a!==u)}n.action=null}function ky(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function Ny(n,a){return a}function Py(n,a){if(We){var o=ft.formState;if(o!==null){e:{var u=Me;if(We){if(Rt){t:{for(var h=Rt,g=Zr;h.nodeType!==8;){if(!g){h=null;break t}if(h=Ir(h.nextSibling),h===null){h=null;break t}}g=h.data,h=g==="F!"||g==="F"?h:null}if(h){Rt=Ir(h.nextSibling),u=h.data==="F!";break e}}us(u)}u=!1}u&&(a=o[0])}}return o=Nn(),o.memoizedState=o.baseState=a,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ny,lastRenderedState:a},o.queue=u,o=ev.bind(null,Me,u),u.dispatch=o,u=Dd(!1),g=Ld.bind(null,Me,!1,u.queue),u=Nn(),h={state:a,dispatch:null,action:n,pending:null},u.queue=h,o=QA.bind(null,Me,h,g,o),h.dispatch=o,u.memoizedState=n,[a,o,!1]}function My(n){var a=Pt();return Ly(a,st,n)}function Ly(n,a,o){if(a=xd(n,a,Ny)[0],n=qc(Ii)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var u=kl(a)}catch(E){throw E===Cl?Rc:E}else u=a;a=Pt();var h=a.queue,g=h.dispatch;return o!==a.memoizedState&&(Me.flags|=2048,uo(9,kc(),XA.bind(null,h,o),null)),[u,g,n]}function XA(n,a){n.action=a}function Vy(n){var a=Pt(),o=st;if(o!==null)return Ly(a,o,n);Pt(),a=a.memoizedState,o=Pt();var u=o.queue.dispatch;return o.memoizedState=n,[a,u,!1]}function uo(n,a,o,u){return n={tag:n,create:o,deps:u,inst:a,next:null},a=Me.updateQueue,a===null&&(a=Cd(),Me.updateQueue=a),o=a.lastEffect,o===null?a.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,a.lastEffect=n),n}function kc(){return{destroy:void 0,resource:void 0}}function Uy(){return Pt().memoizedState}function Nc(n,a,o,u){var h=Nn();u=u===void 0?null:u,Me.flags|=n,h.memoizedState=uo(1|a,kc(),o,u)}function Nl(n,a,o,u){var h=Pt();u=u===void 0?null:u;var g=h.memoizedState.inst;st!==null&&u!==null&&Td(u,st.memoizedState.deps)?h.memoizedState=uo(a,g,o,u):(Me.flags|=n,h.memoizedState=uo(1|a,g,o,u))}function jy(n,a){Nc(8390656,8,n,a)}function zy(n,a){Nl(2048,8,n,a)}function By(n,a){return Nl(4,2,n,a)}function Hy(n,a){return Nl(4,4,n,a)}function Fy(n,a){if(typeof a=="function"){n=n();var o=a(n);return function(){typeof o=="function"?o():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function Gy(n,a,o){o=o!=null?o.concat([n]):null,Nl(4,4,Fy.bind(null,a,n),o)}function kd(){}function Yy(n,a){var o=Pt();a=a===void 0?null:a;var u=o.memoizedState;return a!==null&&Td(a,u[1])?u[0]:(o.memoizedState=[n,a],n)}function Ky(n,a){var o=Pt();a=a===void 0?null:a;var u=o.memoizedState;if(a!==null&&Td(a,u[1]))return u[0];if(u=n(),ds){pn(!0);try{n()}finally{pn(!1)}}return o.memoizedState=[u,a],u}function Nd(n,a,o){return o===void 0||(sa&1073741824)!==0?n.memoizedState=a:(n.memoizedState=o,n=Xv(),Me.lanes|=n,da|=n,o)}function $y(n,a,o,u){return Bn(o,a)?o:so.current!==null?(n=Nd(n,o,u),Bn(n,a)||(Jt=!0),n):(sa&42)===0?(Jt=!0,n.memoizedState=o):(n=Xv(),Me.lanes|=n,da|=n,a)}function Qy(n,a,o,u,h){var g=ce.p;ce.p=g!==0&&8>g?g:8;var E=J.T,S={};J.T=S,Ld(n,!1,a,o);try{var q=h(),X=J.S;if(X!==null&&X(S,q),q!==null&&typeof q=="object"&&typeof q.then=="function"){var ne=YA(q,u);Pl(n,a,ne,Kn(n))}else Pl(n,a,u,Kn(n))}catch(ae){Pl(n,a,{then:function(){},status:"rejected",reason:ae},Kn())}finally{ce.p=g,J.T=E}}function WA(){}function Pd(n,a,o,u){if(n.tag!==5)throw Error(i(476));var h=Xy(n).queue;Qy(n,h,a,fe,o===null?WA:function(){return Wy(n),o(u)})}function Xy(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:fe},next:null};var o={};return a.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:o},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function Wy(n){var a=Xy(n).next.queue;Pl(n,a,{},Kn())}function Md(){return gn(Jl)}function Zy(){return Pt().memoizedState}function Jy(){return Pt().memoizedState}function ZA(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var o=Kn();n=ia(o);var u=aa(a,n,o);u!==null&&($n(u,a,o),xl(u,a,o)),a={cache:hd()},n.payload=a;return}a=a.return}}function JA(n,a,o){var u=Kn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Pc(n)?tv(a,o):(o=nd(n,a,o,u),o!==null&&($n(o,n,u),nv(o,a,u)))}function ev(n,a,o){var u=Kn();Pl(n,a,o,u)}function Pl(n,a,o,u){var h={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Pc(n))tv(a,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=a.lastRenderedReducer,g!==null))try{var E=a.lastRenderedState,S=g(E,o);if(h.hasEagerState=!0,h.eagerState=S,Bn(S,E))return vc(n,a,h,0),ft===null&&yc(),!1}catch{}finally{}if(o=nd(n,a,h,u),o!==null)return $n(o,n,u),nv(o,a,u),!0}return!1}function Ld(n,a,o,u){if(u={lane:2,revertLane:mp(),action:u,hasEagerState:!1,eagerState:null,next:null},Pc(n)){if(a)throw Error(i(479))}else a=nd(n,o,u,2),a!==null&&$n(a,n,2)}function Pc(n){var a=n.alternate;return n===Me||a!==null&&a===Me}function tv(n,a){oo=xc=!0;var o=n.pending;o===null?a.next=a:(a.next=o.next,o.next=a),n.pending=a}function nv(n,a,o){if((o&4194048)!==0){var u=a.lanes;u&=n.pendingLanes,o|=u,a.lanes=o,mt(n,o)}}var Mc={readContext:gn,use:Dc,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useLayoutEffect:xt,useInsertionEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useSyncExternalStore:xt,useId:xt,useHostTransitionStatus:xt,useFormState:xt,useActionState:xt,useOptimistic:xt,useMemoCache:xt,useCacheRefresh:xt},rv={readContext:gn,use:Dc,useCallback:function(n,a){return Nn().memoizedState=[n,a===void 0?null:a],n},useContext:gn,useEffect:jy,useImperativeHandle:function(n,a,o){o=o!=null?o.concat([n]):null,Nc(4194308,4,Fy.bind(null,a,n),o)},useLayoutEffect:function(n,a){return Nc(4194308,4,n,a)},useInsertionEffect:function(n,a){Nc(4,2,n,a)},useMemo:function(n,a){var o=Nn();a=a===void 0?null:a;var u=n();if(ds){pn(!0);try{n()}finally{pn(!1)}}return o.memoizedState=[u,a],u},useReducer:function(n,a,o){var u=Nn();if(o!==void 0){var h=o(a);if(ds){pn(!0);try{o(a)}finally{pn(!1)}}}else h=a;return u.memoizedState=u.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},u.queue=n,n=n.dispatch=JA.bind(null,Me,n),[u.memoizedState,n]},useRef:function(n){var a=Nn();return n={current:n},a.memoizedState=n},useState:function(n){n=Dd(n);var a=n.queue,o=ev.bind(null,Me,a);return a.dispatch=o,[n.memoizedState,o]},useDebugValue:kd,useDeferredValue:function(n,a){var o=Nn();return Nd(o,n,a)},useTransition:function(){var n=Dd(!1);return n=Qy.bind(null,Me,n.queue,!0,!1),Nn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,o){var u=Me,h=Nn();if(We){if(o===void 0)throw Error(i(407));o=o()}else{if(o=a(),ft===null)throw Error(i(349));(Ye&124)!==0||Ay(u,a,o)}h.memoizedState=o;var g={value:o,getSnapshot:a};return h.queue=g,jy(Ry.bind(null,u,g,n),[n]),u.flags|=2048,uo(9,kc(),wy.bind(null,u,g,o,a),null),o},useId:function(){var n=Nn(),a=ft.identifierPrefix;if(We){var o=wi,u=Ai;o=(u&~(1<<32-Ut(u)-1)).toString(32)+o,a="«"+a+"R"+o,o=Oc++,0<o&&(a+="H"+o.toString(32)),a+="»"}else o=KA++,a="«"+a+"r"+o.toString(32)+"»";return n.memoizedState=a},useHostTransitionStatus:Md,useFormState:Py,useActionState:Py,useOptimistic:function(n){var a=Nn();a.memoizedState=a.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=o,a=Ld.bind(null,Me,!0,o),o.dispatch=a,[n,a]},useMemoCache:Id,useCacheRefresh:function(){return Nn().memoizedState=ZA.bind(null,Me)}},iv={readContext:gn,use:Dc,useCallback:Yy,useContext:gn,useEffect:zy,useImperativeHandle:Gy,useInsertionEffect:By,useLayoutEffect:Hy,useMemo:Ky,useReducer:qc,useRef:Uy,useState:function(){return qc(Ii)},useDebugValue:kd,useDeferredValue:function(n,a){var o=Pt();return $y(o,st.memoizedState,n,a)},useTransition:function(){var n=qc(Ii)[0],a=Pt().memoizedState;return[typeof n=="boolean"?n:kl(n),a]},useSyncExternalStore:Sy,useId:Zy,useHostTransitionStatus:Md,useFormState:My,useActionState:My,useOptimistic:function(n,a){var o=Pt();return xy(o,st,n,a)},useMemoCache:Id,useCacheRefresh:Jy},ew={readContext:gn,use:Dc,useCallback:Yy,useContext:gn,useEffect:zy,useImperativeHandle:Gy,useInsertionEffect:By,useLayoutEffect:Hy,useMemo:Ky,useReducer:Od,useRef:Uy,useState:function(){return Od(Ii)},useDebugValue:kd,useDeferredValue:function(n,a){var o=Pt();return st===null?Nd(o,n,a):$y(o,st.memoizedState,n,a)},useTransition:function(){var n=Od(Ii)[0],a=Pt().memoizedState;return[typeof n=="boolean"?n:kl(n),a]},useSyncExternalStore:Sy,useId:Zy,useHostTransitionStatus:Md,useFormState:Vy,useActionState:Vy,useOptimistic:function(n,a){var o=Pt();return st!==null?xy(o,st,n,a):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:Id,useCacheRefresh:Jy},co=null,Ml=0;function Lc(n){var a=Ml;return Ml+=1,co===null&&(co=[]),my(co,n,a)}function Ll(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function Vc(n,a){throw a.$$typeof===b?Error(i(525)):(n=Object.prototype.toString.call(a),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function av(n){var a=n._init;return a(n._payload)}function sv(n){function a(F,z){if(n){var $=F.deletions;$===null?(F.deletions=[z],F.flags|=16):$.push(z)}}function o(F,z){if(!n)return null;for(;z!==null;)a(F,z),z=z.sibling;return null}function u(F){for(var z=new Map;F!==null;)F.key!==null?z.set(F.key,F):z.set(F.index,F),F=F.sibling;return z}function h(F,z){return F=Si(F,z),F.index=0,F.sibling=null,F}function g(F,z,$){return F.index=$,n?($=F.alternate,$!==null?($=$.index,$<z?(F.flags|=67108866,z):$):(F.flags|=67108866,z)):(F.flags|=1048576,z)}function E(F){return n&&F.alternate===null&&(F.flags|=67108866),F}function S(F,z,$,re){return z===null||z.tag!==6?(z=id($,F.mode,re),z.return=F,z):(z=h(z,$),z.return=F,z)}function q(F,z,$,re){var ye=$.type;return ye===O?ne(F,z,$.props.children,re,$.key):z!==null&&(z.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===R&&av(ye)===z.type)?(z=h(z,$.props),Ll(z,$),z.return=F,z):(z=Ec($.type,$.key,$.props,null,F.mode,re),Ll(z,$),z.return=F,z)}function X(F,z,$,re){return z===null||z.tag!==4||z.stateNode.containerInfo!==$.containerInfo||z.stateNode.implementation!==$.implementation?(z=ad($,F.mode,re),z.return=F,z):(z=h(z,$.children||[]),z.return=F,z)}function ne(F,z,$,re,ye){return z===null||z.tag!==7?(z=as($,F.mode,re,ye),z.return=F,z):(z=h(z,$),z.return=F,z)}function ae(F,z,$){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=id(""+z,F.mode,$),z.return=F,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case T:return $=Ec(z.type,z.key,z.props,null,F.mode,$),Ll($,z),$.return=F,$;case w:return z=ad(z,F.mode,$),z.return=F,z;case R:var re=z._init;return z=re(z._payload),ae(F,z,$)}if(Oe(z)||j(z))return z=as(z,F.mode,$,null),z.return=F,z;if(typeof z.then=="function")return ae(F,Lc(z),$);if(z.$$typeof===Q)return ae(F,Ac(F,z),$);Vc(F,z)}return null}function W(F,z,$,re){var ye=z!==null?z.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return ye!==null?null:S(F,z,""+$,re);if(typeof $=="object"&&$!==null){switch($.$$typeof){case T:return $.key===ye?q(F,z,$,re):null;case w:return $.key===ye?X(F,z,$,re):null;case R:return ye=$._init,$=ye($._payload),W(F,z,$,re)}if(Oe($)||j($))return ye!==null?null:ne(F,z,$,re,null);if(typeof $.then=="function")return W(F,z,Lc($),re);if($.$$typeof===Q)return W(F,z,Ac(F,$),re);Vc(F,$)}return null}function Z(F,z,$,re,ye){if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return F=F.get($)||null,S(z,F,""+re,ye);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case T:return F=F.get(re.key===null?$:re.key)||null,q(z,F,re,ye);case w:return F=F.get(re.key===null?$:re.key)||null,X(z,F,re,ye);case R:var Ve=re._init;return re=Ve(re._payload),Z(F,z,$,re,ye)}if(Oe(re)||j(re))return F=F.get($)||null,ne(z,F,re,ye,null);if(typeof re.then=="function")return Z(F,z,$,Lc(re),ye);if(re.$$typeof===Q)return Z(F,z,$,Ac(z,re),ye);Vc(z,re)}return null}function xe(F,z,$,re){for(var ye=null,Ve=null,Ee=z,Re=z=0,tn=null;Ee!==null&&Re<$.length;Re++){Ee.index>Re?(tn=Ee,Ee=null):tn=Ee.sibling;var Xe=W(F,Ee,$[Re],re);if(Xe===null){Ee===null&&(Ee=tn);break}n&&Ee&&Xe.alternate===null&&a(F,Ee),z=g(Xe,z,Re),Ve===null?ye=Xe:Ve.sibling=Xe,Ve=Xe,Ee=tn}if(Re===$.length)return o(F,Ee),We&&os(F,Re),ye;if(Ee===null){for(;Re<$.length;Re++)Ee=ae(F,$[Re],re),Ee!==null&&(z=g(Ee,z,Re),Ve===null?ye=Ee:Ve.sibling=Ee,Ve=Ee);return We&&os(F,Re),ye}for(Ee=u(Ee);Re<$.length;Re++)tn=Z(Ee,F,Re,$[Re],re),tn!==null&&(n&&tn.alternate!==null&&Ee.delete(tn.key===null?Re:tn.key),z=g(tn,z,Re),Ve===null?ye=tn:Ve.sibling=tn,Ve=tn);return n&&Ee.forEach(function(Ta){return a(F,Ta)}),We&&os(F,Re),ye}function we(F,z,$,re){if($==null)throw Error(i(151));for(var ye=null,Ve=null,Ee=z,Re=z=0,tn=null,Xe=$.next();Ee!==null&&!Xe.done;Re++,Xe=$.next()){Ee.index>Re?(tn=Ee,Ee=null):tn=Ee.sibling;var Ta=W(F,Ee,Xe.value,re);if(Ta===null){Ee===null&&(Ee=tn);break}n&&Ee&&Ta.alternate===null&&a(F,Ee),z=g(Ta,z,Re),Ve===null?ye=Ta:Ve.sibling=Ta,Ve=Ta,Ee=tn}if(Xe.done)return o(F,Ee),We&&os(F,Re),ye;if(Ee===null){for(;!Xe.done;Re++,Xe=$.next())Xe=ae(F,Xe.value,re),Xe!==null&&(z=g(Xe,z,Re),Ve===null?ye=Xe:Ve.sibling=Xe,Ve=Xe);return We&&os(F,Re),ye}for(Ee=u(Ee);!Xe.done;Re++,Xe=$.next())Xe=Z(Ee,F,Re,Xe.value,re),Xe!==null&&(n&&Xe.alternate!==null&&Ee.delete(Xe.key===null?Re:Xe.key),z=g(Xe,z,Re),Ve===null?ye=Xe:Ve.sibling=Xe,Ve=Xe);return n&&Ee.forEach(function(tR){return a(F,tR)}),We&&os(F,Re),ye}function lt(F,z,$,re){if(typeof $=="object"&&$!==null&&$.type===O&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case T:e:{for(var ye=$.key;z!==null;){if(z.key===ye){if(ye=$.type,ye===O){if(z.tag===7){o(F,z.sibling),re=h(z,$.props.children),re.return=F,F=re;break e}}else if(z.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===R&&av(ye)===z.type){o(F,z.sibling),re=h(z,$.props),Ll(re,$),re.return=F,F=re;break e}o(F,z);break}else a(F,z);z=z.sibling}$.type===O?(re=as($.props.children,F.mode,re,$.key),re.return=F,F=re):(re=Ec($.type,$.key,$.props,null,F.mode,re),Ll(re,$),re.return=F,F=re)}return E(F);case w:e:{for(ye=$.key;z!==null;){if(z.key===ye)if(z.tag===4&&z.stateNode.containerInfo===$.containerInfo&&z.stateNode.implementation===$.implementation){o(F,z.sibling),re=h(z,$.children||[]),re.return=F,F=re;break e}else{o(F,z);break}else a(F,z);z=z.sibling}re=ad($,F.mode,re),re.return=F,F=re}return E(F);case R:return ye=$._init,$=ye($._payload),lt(F,z,$,re)}if(Oe($))return xe(F,z,$,re);if(j($)){if(ye=j($),typeof ye!="function")throw Error(i(150));return $=ye.call($),we(F,z,$,re)}if(typeof $.then=="function")return lt(F,z,Lc($),re);if($.$$typeof===Q)return lt(F,z,Ac(F,$),re);Vc(F,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,z!==null&&z.tag===6?(o(F,z.sibling),re=h(z,$),re.return=F,F=re):(o(F,z),re=id($,F.mode,re),re.return=F,F=re),E(F)):o(F,z)}return function(F,z,$,re){try{Ml=0;var ye=lt(F,z,$,re);return co=null,ye}catch(Ee){if(Ee===Cl||Ee===Rc)throw Ee;var Ve=Hn(29,Ee,null,F.mode);return Ve.lanes=re,Ve.return=F,Ve}finally{}}}var fo=sv(!0),ov=sv(!1),cr=te(null),Jr=null;function oa(n){var a=n.alternate;oe(Gt,Gt.current&1),oe(cr,n),Jr===null&&(a===null||so.current!==null||a.memoizedState!==null)&&(Jr=n)}function lv(n){if(n.tag===22){if(oe(Gt,Gt.current),oe(cr,n),Jr===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(Jr=n)}}else la()}function la(){oe(Gt,Gt.current),oe(cr,cr.current)}function xi(n){de(cr),Jr===n&&(Jr=null),de(Gt)}var Gt=te(0);function Uc(n){for(var a=n;a!==null;){if(a.tag===13){var o=a.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Cp(o)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function Vd(n,a,o,u){a=n.memoizedState,o=o(u,a),o=o==null?a:v({},a,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Ud={enqueueSetState:function(n,a,o){n=n._reactInternals;var u=Kn(),h=ia(u);h.payload=a,o!=null&&(h.callback=o),a=aa(n,h,u),a!==null&&($n(a,n,u),xl(a,n,u))},enqueueReplaceState:function(n,a,o){n=n._reactInternals;var u=Kn(),h=ia(u);h.tag=1,h.payload=a,o!=null&&(h.callback=o),a=aa(n,h,u),a!==null&&($n(a,n,u),xl(a,n,u))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var o=Kn(),u=ia(o);u.tag=2,a!=null&&(u.callback=a),a=aa(n,u,o),a!==null&&($n(a,n,o),xl(a,n,o))}};function uv(n,a,o,u,h,g,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,E):a.prototype&&a.prototype.isPureReactComponent?!_l(o,u)||!_l(h,g):!0}function cv(n,a,o,u){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(o,u),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(o,u),a.state!==n&&Ud.enqueueReplaceState(a,a.state,null)}function ps(n,a){var o=a;if("ref"in a){o={};for(var u in a)u!=="ref"&&(o[u]=a[u])}if(n=n.defaultProps){o===a&&(o=v({},o));for(var h in n)o[h]===void 0&&(o[h]=n[h])}return o}var jc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function fv(n){jc(n)}function hv(n){console.error(n)}function dv(n){jc(n)}function zc(n,a){try{var o=n.onUncaughtError;o(a.value,{componentStack:a.stack})}catch(u){setTimeout(function(){throw u})}}function pv(n,a,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function jd(n,a,o){return o=ia(o),o.tag=3,o.payload={element:null},o.callback=function(){zc(n,a)},o}function mv(n){return n=ia(n),n.tag=3,n}function gv(n,a,o,u){var h=o.type.getDerivedStateFromError;if(typeof h=="function"){var g=u.value;n.payload=function(){return h(g)},n.callback=function(){pv(a,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){pv(a,o,u),typeof h!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function tw(n,a,o,u,h){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(a=o.alternate,a!==null&&Al(a,o,h,!0),o=cr.current,o!==null){switch(o.tag){case 13:return Jr===null?cp():o.alternate===null&&Ct===0&&(Ct=3),o.flags&=-257,o.flags|=65536,o.lanes=h,u===md?o.flags|=16384:(a=o.updateQueue,a===null?o.updateQueue=new Set([u]):a.add(u),hp(n,u,h)),!1;case 22:return o.flags|=65536,u===md?o.flags|=16384:(a=o.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=a):(o=a.retryQueue,o===null?a.retryQueue=new Set([u]):o.add(u)),hp(n,u,h)),!1}throw Error(i(435,o.tag))}return hp(n,u,h),cp(),!1}if(We)return a=cr.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=h,u!==ld&&(n=Error(i(422),{cause:u}),Sl(sr(n,o)))):(u!==ld&&(a=Error(i(423),{cause:u}),Sl(sr(a,o))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,u=sr(u,o),h=jd(n.stateNode,u,h),vd(n,h),Ct!==4&&(Ct=2)),!1;var g=Error(i(520),{cause:u});if(g=sr(g,o),Fl===null?Fl=[g]:Fl.push(g),Ct!==4&&(Ct=2),a===null)return!0;u=sr(u,o),o=a;do{switch(o.tag){case 3:return o.flags|=65536,n=h&-h,o.lanes|=n,n=jd(o.stateNode,u,n),vd(o,n),!1;case 1:if(a=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(pa===null||!pa.has(g))))return o.flags|=65536,h&=-h,o.lanes|=h,h=mv(h),gv(h,n,o,u),vd(o,h),!1}o=o.return}while(o!==null);return!1}var yv=Error(i(461)),Jt=!1;function ln(n,a,o,u){a.child=n===null?ov(a,null,o,u):fo(a,n.child,o,u)}function vv(n,a,o,u,h){o=o.render;var g=a.ref;if("ref"in u){var E={};for(var S in u)S!=="ref"&&(E[S]=u[S])}else E=u;return fs(a),u=Sd(n,a,o,E,g,h),S=Ad(),n!==null&&!Jt?(wd(n,a,h),Oi(n,a,h)):(We&&S&&sd(a),a.flags|=1,ln(n,a,u,h),a.child)}function _v(n,a,o,u,h){if(n===null){var g=o.type;return typeof g=="function"&&!rd(g)&&g.defaultProps===void 0&&o.compare===null?(a.tag=15,a.type=g,Ev(n,a,g,u,h)):(n=Ec(o.type,null,u,a,a.mode,h),n.ref=a.ref,n.return=a,a.child=n)}if(g=n.child,!$d(n,h)){var E=g.memoizedProps;if(o=o.compare,o=o!==null?o:_l,o(E,u)&&n.ref===a.ref)return Oi(n,a,h)}return a.flags|=1,n=Si(g,u),n.ref=a.ref,n.return=a,a.child=n}function Ev(n,a,o,u,h){if(n!==null){var g=n.memoizedProps;if(_l(g,u)&&n.ref===a.ref)if(Jt=!1,a.pendingProps=u=g,$d(n,h))(n.flags&131072)!==0&&(Jt=!0);else return a.lanes=n.lanes,Oi(n,a,h)}return zd(n,a,o,u,h)}function bv(n,a,o){var u=a.pendingProps,h=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((a.flags&128)!==0){if(u=g!==null?g.baseLanes|o:o,n!==null){for(h=a.child=n.child,g=0;h!==null;)g=g|h.lanes|h.childLanes,h=h.sibling;a.childLanes=g&~u}else a.childLanes=0,a.child=null;return Tv(n,a,u,o)}if((o&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&wc(a,g!==null?g.cachePool:null),g!==null?Ey(a,g):Ed(),lv(a);else return a.lanes=a.childLanes=536870912,Tv(n,a,g!==null?g.baseLanes|o:o,o)}else g!==null?(wc(a,g.cachePool),Ey(a,g),la(),a.memoizedState=null):(n!==null&&wc(a,null),Ed(),la());return ln(n,a,h,o),a.child}function Tv(n,a,o,u){var h=pd();return h=h===null?null:{parent:Ft._currentValue,pool:h},a.memoizedState={baseLanes:o,cachePool:h},n!==null&&wc(a,null),Ed(),lv(a),n!==null&&Al(n,a,u,!0),null}function Bc(n,a){var o=a.ref;if(o===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(n===null||n.ref!==o)&&(a.flags|=4194816)}}function zd(n,a,o,u,h){return fs(a),o=Sd(n,a,o,u,void 0,h),u=Ad(),n!==null&&!Jt?(wd(n,a,h),Oi(n,a,h)):(We&&u&&sd(a),a.flags|=1,ln(n,a,o,h),a.child)}function Sv(n,a,o,u,h,g){return fs(a),a.updateQueue=null,o=Ty(a,u,o,h),by(n),u=Ad(),n!==null&&!Jt?(wd(n,a,g),Oi(n,a,g)):(We&&u&&sd(a),a.flags|=1,ln(n,a,o,g),a.child)}function Av(n,a,o,u,h){if(fs(a),a.stateNode===null){var g=to,E=o.contextType;typeof E=="object"&&E!==null&&(g=gn(E)),g=new o(u,g),a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=Ud,a.stateNode=g,g._reactInternals=a,g=a.stateNode,g.props=u,g.state=a.memoizedState,g.refs={},gd(a),E=o.contextType,g.context=typeof E=="object"&&E!==null?gn(E):to,g.state=a.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Vd(a,o,E,u),g.state=a.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(E=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),E!==g.state&&Ud.enqueueReplaceState(g,g.state,null),Dl(a,u,g,h),Ol(),g.state=a.memoizedState),typeof g.componentDidMount=="function"&&(a.flags|=4194308),u=!0}else if(n===null){g=a.stateNode;var S=a.memoizedProps,q=ps(o,S);g.props=q;var X=g.context,ne=o.contextType;E=to,typeof ne=="object"&&ne!==null&&(E=gn(ne));var ae=o.getDerivedStateFromProps;ne=typeof ae=="function"||typeof g.getSnapshotBeforeUpdate=="function",S=a.pendingProps!==S,ne||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(S||X!==E)&&cv(a,g,u,E),ra=!1;var W=a.memoizedState;g.state=W,Dl(a,u,g,h),Ol(),X=a.memoizedState,S||W!==X||ra?(typeof ae=="function"&&(Vd(a,o,ae,u),X=a.memoizedState),(q=ra||uv(a,o,q,u,W,X,E))?(ne||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(a.flags|=4194308)):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=u,a.memoizedState=X),g.props=u,g.state=X,g.context=E,u=q):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),u=!1)}else{g=a.stateNode,yd(n,a),E=a.memoizedProps,ne=ps(o,E),g.props=ne,ae=a.pendingProps,W=g.context,X=o.contextType,q=to,typeof X=="object"&&X!==null&&(q=gn(X)),S=o.getDerivedStateFromProps,(X=typeof S=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==ae||W!==q)&&cv(a,g,u,q),ra=!1,W=a.memoizedState,g.state=W,Dl(a,u,g,h),Ol();var Z=a.memoizedState;E!==ae||W!==Z||ra||n!==null&&n.dependencies!==null&&Sc(n.dependencies)?(typeof S=="function"&&(Vd(a,o,S,u),Z=a.memoizedState),(ne=ra||uv(a,o,ne,u,W,Z,q)||n!==null&&n.dependencies!==null&&Sc(n.dependencies))?(X||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,Z,q),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,Z,q)),typeof g.componentDidUpdate=="function"&&(a.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof g.componentDidUpdate!="function"||E===n.memoizedProps&&W===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&W===n.memoizedState||(a.flags|=1024),a.memoizedProps=u,a.memoizedState=Z),g.props=u,g.state=Z,g.context=q,u=ne):(typeof g.componentDidUpdate!="function"||E===n.memoizedProps&&W===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&W===n.memoizedState||(a.flags|=1024),u=!1)}return g=u,Bc(n,a),u=(a.flags&128)!==0,g||u?(g=a.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:g.render(),a.flags|=1,n!==null&&u?(a.child=fo(a,n.child,null,h),a.child=fo(a,null,o,h)):ln(n,a,o,h),a.memoizedState=g.state,n=a.child):n=Oi(n,a,h),n}function wv(n,a,o,u){return Tl(),a.flags|=256,ln(n,a,o,u),a.child}var Bd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hd(n){return{baseLanes:n,cachePool:hy()}}function Fd(n,a,o){return n=n!==null?n.childLanes&~o:0,a&&(n|=fr),n}function Rv(n,a,o){var u=a.pendingProps,h=!1,g=(a.flags&128)!==0,E;if((E=g)||(E=n!==null&&n.memoizedState===null?!1:(Gt.current&2)!==0),E&&(h=!0,a.flags&=-129),E=(a.flags&32)!==0,a.flags&=-33,n===null){if(We){if(h?oa(a):la(),We){var S=Rt,q;if(q=S){e:{for(q=S,S=Zr;q.nodeType!==8;){if(!S){S=null;break e}if(q=Ir(q.nextSibling),q===null){S=null;break e}}S=q}S!==null?(a.memoizedState={dehydrated:S,treeContext:ss!==null?{id:Ai,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},q=Hn(18,null,null,0),q.stateNode=S,q.return=a,a.child=q,In=a,Rt=null,q=!0):q=!1}q||us(a)}if(S=a.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return Cp(S)?a.lanes=32:a.lanes=536870912,null;xi(a)}return S=u.children,u=u.fallback,h?(la(),h=a.mode,S=Hc({mode:"hidden",children:S},h),u=as(u,h,o,null),S.return=a,u.return=a,S.sibling=u,a.child=S,h=a.child,h.memoizedState=Hd(o),h.childLanes=Fd(n,E,o),a.memoizedState=Bd,u):(oa(a),Gd(a,S))}if(q=n.memoizedState,q!==null&&(S=q.dehydrated,S!==null)){if(g)a.flags&256?(oa(a),a.flags&=-257,a=Yd(n,a,o)):a.memoizedState!==null?(la(),a.child=n.child,a.flags|=128,a=null):(la(),h=u.fallback,S=a.mode,u=Hc({mode:"visible",children:u.children},S),h=as(h,S,o,null),h.flags|=2,u.return=a,h.return=a,u.sibling=h,a.child=u,fo(a,n.child,null,o),u=a.child,u.memoizedState=Hd(o),u.childLanes=Fd(n,E,o),a.memoizedState=Bd,a=h);else if(oa(a),Cp(S)){if(E=S.nextSibling&&S.nextSibling.dataset,E)var X=E.dgst;E=X,u=Error(i(419)),u.stack="",u.digest=E,Sl({value:u,source:null,stack:null}),a=Yd(n,a,o)}else if(Jt||Al(n,a,o,!1),E=(o&n.childLanes)!==0,Jt||E){if(E=ft,E!==null&&(u=o&-o,u=(u&42)!==0?1:wn(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==q.retryLane))throw q.retryLane=u,eo(n,u),$n(E,n,u),yv;S.data==="$?"||cp(),a=Yd(n,a,o)}else S.data==="$?"?(a.flags|=192,a.child=n.child,a=null):(n=q.treeContext,Rt=Ir(S.nextSibling),In=a,We=!0,ls=null,Zr=!1,n!==null&&(lr[ur++]=Ai,lr[ur++]=wi,lr[ur++]=ss,Ai=n.id,wi=n.overflow,ss=a),a=Gd(a,u.children),a.flags|=4096);return a}return h?(la(),h=u.fallback,S=a.mode,q=n.child,X=q.sibling,u=Si(q,{mode:"hidden",children:u.children}),u.subtreeFlags=q.subtreeFlags&65011712,X!==null?h=Si(X,h):(h=as(h,S,o,null),h.flags|=2),h.return=a,u.return=a,u.sibling=h,a.child=u,u=h,h=a.child,S=n.child.memoizedState,S===null?S=Hd(o):(q=S.cachePool,q!==null?(X=Ft._currentValue,q=q.parent!==X?{parent:X,pool:X}:q):q=hy(),S={baseLanes:S.baseLanes|o,cachePool:q}),h.memoizedState=S,h.childLanes=Fd(n,E,o),a.memoizedState=Bd,u):(oa(a),o=n.child,n=o.sibling,o=Si(o,{mode:"visible",children:u.children}),o.return=a,o.sibling=null,n!==null&&(E=a.deletions,E===null?(a.deletions=[n],a.flags|=16):E.push(n)),a.child=o,a.memoizedState=null,o)}function Gd(n,a){return a=Hc({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function Hc(n,a){return n=Hn(22,n,null,a),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Yd(n,a,o){return fo(a,n.child,null,o),n=Gd(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function Cv(n,a,o){n.lanes|=a;var u=n.alternate;u!==null&&(u.lanes|=a),cd(n.return,a,o)}function Kd(n,a,o,u,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(g.isBackwards=a,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=h)}function Iv(n,a,o){var u=a.pendingProps,h=u.revealOrder,g=u.tail;if(ln(n,a,u.children,o),u=Gt.current,(u&2)!==0)u=u&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Cv(n,o,a);else if(n.tag===19)Cv(n,o,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(oe(Gt,u),h){case"forwards":for(o=a.child,h=null;o!==null;)n=o.alternate,n!==null&&Uc(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=a.child,a.child=null):(h=o.sibling,o.sibling=null),Kd(a,!1,h,o,g);break;case"backwards":for(o=null,h=a.child,a.child=null;h!==null;){if(n=h.alternate,n!==null&&Uc(n)===null){a.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}Kd(a,!0,o,null,g);break;case"together":Kd(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Oi(n,a,o){if(n!==null&&(a.dependencies=n.dependencies),da|=a.lanes,(o&a.childLanes)===0)if(n!==null){if(Al(n,a,o,!1),(o&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(i(153));if(a.child!==null){for(n=a.child,o=Si(n,n.pendingProps),a.child=o,o.return=a;n.sibling!==null;)n=n.sibling,o=o.sibling=Si(n,n.pendingProps),o.return=a;o.sibling=null}return a.child}function $d(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&Sc(n)))}function nw(n,a,o){switch(a.tag){case 3:et(a,a.stateNode.containerInfo),na(a,Ft,n.memoizedState.cache),Tl();break;case 27:case 5:yr(a);break;case 4:et(a,a.stateNode.containerInfo);break;case 10:na(a,a.type,a.memoizedProps.value);break;case 13:var u=a.memoizedState;if(u!==null)return u.dehydrated!==null?(oa(a),a.flags|=128,null):(o&a.child.childLanes)!==0?Rv(n,a,o):(oa(a),n=Oi(n,a,o),n!==null?n.sibling:null);oa(a);break;case 19:var h=(n.flags&128)!==0;if(u=(o&a.childLanes)!==0,u||(Al(n,a,o,!1),u=(o&a.childLanes)!==0),h){if(u)return Iv(n,a,o);a.flags|=128}if(h=a.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),oe(Gt,Gt.current),u)break;return null;case 22:case 23:return a.lanes=0,bv(n,a,o);case 24:na(a,Ft,n.memoizedState.cache)}return Oi(n,a,o)}function xv(n,a,o){if(n!==null)if(n.memoizedProps!==a.pendingProps)Jt=!0;else{if(!$d(n,o)&&(a.flags&128)===0)return Jt=!1,nw(n,a,o);Jt=(n.flags&131072)!==0}else Jt=!1,We&&(a.flags&1048576)!==0&&ay(a,Tc,a.index);switch(a.lanes=0,a.tag){case 16:e:{n=a.pendingProps;var u=a.elementType,h=u._init;if(u=h(u._payload),a.type=u,typeof u=="function")rd(u)?(n=ps(u,n),a.tag=1,a=Av(null,a,u,n,o)):(a.tag=0,a=zd(null,a,u,n,o));else{if(u!=null){if(h=u.$$typeof,h===ie){a.tag=11,a=vv(null,a,u,n,o);break e}else if(h===C){a.tag=14,a=_v(null,a,u,n,o);break e}}throw a=pe(u)||u,Error(i(306,a,""))}}return a;case 0:return zd(n,a,a.type,a.pendingProps,o);case 1:return u=a.type,h=ps(u,a.pendingProps),Av(n,a,u,h,o);case 3:e:{if(et(a,a.stateNode.containerInfo),n===null)throw Error(i(387));u=a.pendingProps;var g=a.memoizedState;h=g.element,yd(n,a),Dl(a,u,null,o);var E=a.memoizedState;if(u=E.cache,na(a,Ft,u),u!==g.cache&&fd(a,[Ft],o,!0),Ol(),u=E.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:E.cache},a.updateQueue.baseState=g,a.memoizedState=g,a.flags&256){a=wv(n,a,u,o);break e}else if(u!==h){h=sr(Error(i(424)),a),Sl(h),a=wv(n,a,u,o);break e}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Rt=Ir(n.firstChild),In=a,We=!0,ls=null,Zr=!0,o=ov(a,null,u,o),a.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Tl(),u===h){a=Oi(n,a,o);break e}ln(n,a,u,o)}a=a.child}return a;case 26:return Bc(n,a),n===null?(o=k_(a.type,null,a.pendingProps,null))?a.memoizedState=o:We||(o=a.type,n=a.pendingProps,u=rf(Se.current).createElement(o),u[At]=a,u[wt]=n,cn(u,o,n),_t(u),a.stateNode=u):a.memoizedState=k_(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return yr(a),n===null&&We&&(u=a.stateNode=O_(a.type,a.pendingProps,Se.current),In=a,Zr=!0,h=Rt,ya(a.type)?(Ip=h,Rt=Ir(u.firstChild)):Rt=h),ln(n,a,a.pendingProps.children,o),Bc(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&We&&((h=u=Rt)&&(u=Ow(u,a.type,a.pendingProps,Zr),u!==null?(a.stateNode=u,In=a,Rt=Ir(u.firstChild),Zr=!1,h=!0):h=!1),h||us(a)),yr(a),h=a.type,g=a.pendingProps,E=n!==null?n.memoizedProps:null,u=g.children,Ap(h,g)?u=null:E!==null&&Ap(h,E)&&(a.flags|=32),a.memoizedState!==null&&(h=Sd(n,a,$A,null,null,o),Jl._currentValue=h),Bc(n,a),ln(n,a,u,o),a.child;case 6:return n===null&&We&&((n=o=Rt)&&(o=Dw(o,a.pendingProps,Zr),o!==null?(a.stateNode=o,In=a,Rt=null,n=!0):n=!1),n||us(a)),null;case 13:return Rv(n,a,o);case 4:return et(a,a.stateNode.containerInfo),u=a.pendingProps,n===null?a.child=fo(a,null,u,o):ln(n,a,u,o),a.child;case 11:return vv(n,a,a.type,a.pendingProps,o);case 7:return ln(n,a,a.pendingProps,o),a.child;case 8:return ln(n,a,a.pendingProps.children,o),a.child;case 12:return ln(n,a,a.pendingProps.children,o),a.child;case 10:return u=a.pendingProps,na(a,a.type,u.value),ln(n,a,u.children,o),a.child;case 9:return h=a.type._context,u=a.pendingProps.children,fs(a),h=gn(h),u=u(h),a.flags|=1,ln(n,a,u,o),a.child;case 14:return _v(n,a,a.type,a.pendingProps,o);case 15:return Ev(n,a,a.type,a.pendingProps,o);case 19:return Iv(n,a,o);case 31:return u=a.pendingProps,o=a.mode,u={mode:u.mode,children:u.children},n===null?(o=Hc(u,o),o.ref=a.ref,a.child=o,o.return=a,a=o):(o=Si(n.child,u),o.ref=a.ref,a.child=o,o.return=a,a=o),a;case 22:return bv(n,a,o);case 24:return fs(a),u=gn(Ft),n===null?(h=pd(),h===null&&(h=ft,g=hd(),h.pooledCache=g,g.refCount++,g!==null&&(h.pooledCacheLanes|=o),h=g),a.memoizedState={parent:u,cache:h},gd(a),na(a,Ft,h)):((n.lanes&o)!==0&&(yd(n,a),Dl(a,null,null,o),Ol()),h=n.memoizedState,g=a.memoizedState,h.parent!==u?(h={parent:u,cache:u},a.memoizedState=h,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=h),na(a,Ft,u)):(u=g.cache,na(a,Ft,u),u!==h.cache&&fd(a,[Ft],o,!0))),ln(n,a,a.pendingProps.children,o),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}function Di(n){n.flags|=4}function Ov(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!V_(a)){if(a=cr.current,a!==null&&((Ye&4194048)===Ye?Jr!==null:(Ye&62914560)!==Ye&&(Ye&536870912)===0||a!==Jr))throw Il=md,dy;n.flags|=8192}}function Fc(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?zr():536870912,n.lanes|=a,go|=a)}function Vl(n,a){if(!We)switch(n.tailMode){case"hidden":a=n.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Et(n){var a=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(a)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&65011712,u|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=o,a}function rw(n,a,o){var u=a.pendingProps;switch(od(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(a),null;case 1:return Et(a),null;case 3:return o=a.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),a.memoizedState.cache!==u&&(a.flags|=2048),Ci(Ft),qn(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(bl(a)?Di(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,ly())),Et(a),null;case 26:return o=a.memoizedState,n===null?(Di(a),o!==null?(Et(a),Ov(a,o)):(Et(a),a.flags&=-16777217)):o?o!==n.memoizedState?(Di(a),Et(a),Ov(a,o)):(Et(a),a.flags&=-16777217):(n.memoizedProps!==u&&Di(a),Et(a),a.flags&=-16777217),null;case 27:Wn(a),o=Se.current;var h=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==u&&Di(a);else{if(!u){if(a.stateNode===null)throw Error(i(166));return Et(a),null}n=be.current,bl(a)?sy(a):(n=O_(h,u,o),a.stateNode=n,Di(a))}return Et(a),null;case 5:if(Wn(a),o=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==u&&Di(a);else{if(!u){if(a.stateNode===null)throw Error(i(166));return Et(a),null}if(n=be.current,bl(a))sy(a);else{switch(h=rf(Se.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?h.createElement("select",{is:u.is}):h.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?h.createElement(o,{is:u.is}):h.createElement(o)}}n[At]=a,n[wt]=u;e:for(h=a.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===a)break e;for(;h.sibling===null;){if(h.return===null||h.return===a)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}a.stateNode=n;e:switch(cn(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Di(a)}}return Et(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==u&&Di(a);else{if(typeof u!="string"&&a.stateNode===null)throw Error(i(166));if(n=Se.current,bl(a)){if(n=a.stateNode,o=a.memoizedProps,u=null,h=In,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}n[At]=a,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||S_(n.nodeValue,o)),n||us(a)}else n=rf(n).createTextNode(u),n[At]=a,a.stateNode=n}return Et(a),null;case 13:if(u=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=bl(a),u!==null&&u.dehydrated!==null){if(n===null){if(!h)throw Error(i(318));if(h=a.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[At]=a}else Tl(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Et(a),h=!1}else h=ly(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return a.flags&256?(xi(a),a):(xi(a),null)}if(xi(a),(a.flags&128)!==0)return a.lanes=o,a;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=a.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool);var g=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(g=u.memoizedState.cachePool.pool),g!==h&&(u.flags|=2048)}return o!==n&&o&&(a.child.flags|=8192),Fc(a,a.updateQueue),Et(a),null;case 4:return qn(),n===null&&_p(a.stateNode.containerInfo),Et(a),null;case 10:return Ci(a.type),Et(a),null;case 19:if(de(Gt),h=a.memoizedState,h===null)return Et(a),null;if(u=(a.flags&128)!==0,g=h.rendering,g===null)if(u)Vl(h,!1);else{if(Ct!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(g=Uc(n),g!==null){for(a.flags|=128,Vl(h,!1),n=g.updateQueue,a.updateQueue=n,Fc(a,n),a.subtreeFlags=0,n=o,o=a.child;o!==null;)iy(o,n),o=o.sibling;return oe(Gt,Gt.current&1|2),a.child}n=n.sibling}h.tail!==null&&Vt()>Kc&&(a.flags|=128,u=!0,Vl(h,!1),a.lanes=4194304)}else{if(!u)if(n=Uc(g),n!==null){if(a.flags|=128,u=!0,n=n.updateQueue,a.updateQueue=n,Fc(a,n),Vl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!g.alternate&&!We)return Et(a),null}else 2*Vt()-h.renderingStartTime>Kc&&o!==536870912&&(a.flags|=128,u=!0,Vl(h,!1),a.lanes=4194304);h.isBackwards?(g.sibling=a.child,a.child=g):(n=h.last,n!==null?n.sibling=g:a.child=g,h.last=g)}return h.tail!==null?(a=h.tail,h.rendering=a,h.tail=a.sibling,h.renderingStartTime=Vt(),a.sibling=null,n=Gt.current,oe(Gt,u?n&1|2:n&1),a):(Et(a),null);case 22:case 23:return xi(a),bd(),u=a.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(a.flags|=8192):u&&(a.flags|=8192),u?(o&536870912)!==0&&(a.flags&128)===0&&(Et(a),a.subtreeFlags&6&&(a.flags|=8192)):Et(a),o=a.updateQueue,o!==null&&Fc(a,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==o&&(a.flags|=2048),n!==null&&de(hs),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),Ci(Ft),Et(a),null;case 25:return null;case 30:return null}throw Error(i(156,a.tag))}function iw(n,a){switch(od(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return Ci(Ft),qn(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return Wn(a),null;case 13:if(xi(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(i(340));Tl()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return de(Gt),null;case 4:return qn(),null;case 10:return Ci(a.type),null;case 22:case 23:return xi(a),bd(),n!==null&&de(hs),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return Ci(Ft),null;case 25:return null;default:return null}}function Dv(n,a){switch(od(a),a.tag){case 3:Ci(Ft),qn();break;case 26:case 27:case 5:Wn(a);break;case 4:qn();break;case 13:xi(a);break;case 19:de(Gt);break;case 10:Ci(a.type);break;case 22:case 23:xi(a),bd(),n!==null&&de(hs);break;case 24:Ci(Ft)}}function Ul(n,a){try{var o=a.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&n)===n){u=void 0;var g=o.create,E=o.inst;u=g(),E.destroy=u}o=o.next}while(o!==h)}}catch(S){ct(a,a.return,S)}}function ua(n,a,o){try{var u=a.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var g=h.next;u=g;do{if((u.tag&n)===n){var E=u.inst,S=E.destroy;if(S!==void 0){E.destroy=void 0,h=a;var q=o,X=S;try{X()}catch(ne){ct(h,q,ne)}}}u=u.next}while(u!==g)}}catch(ne){ct(a,a.return,ne)}}function qv(n){var a=n.updateQueue;if(a!==null){var o=n.stateNode;try{_y(a,o)}catch(u){ct(n,n.return,u)}}}function kv(n,a,o){o.props=ps(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){ct(n,a,u)}}function jl(n,a){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(h){ct(n,a,h)}}function ei(n,a){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(h){ct(n,a,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(h){ct(n,a,h)}else o.current=null}function Nv(n){var a=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(h){ct(n,n.return,h)}}function Qd(n,a,o){try{var u=n.stateNode;ww(u,n.type,o,a),u[wt]=a}catch(h){ct(n,n.return,h)}}function Pv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&ya(n.type)||n.tag===4}function Xd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Pv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&ya(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Wd(n,a,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,a?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,a):(a=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,a.appendChild(n),o=o._reactRootContainer,o!=null||a.onclick!==null||(a.onclick=nf));else if(u!==4&&(u===27&&ya(n.type)&&(o=n.stateNode,a=null),n=n.child,n!==null))for(Wd(n,a,o),n=n.sibling;n!==null;)Wd(n,a,o),n=n.sibling}function Gc(n,a,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,a?o.insertBefore(n,a):o.appendChild(n);else if(u!==4&&(u===27&&ya(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(Gc(n,a,o),n=n.sibling;n!==null;)Gc(n,a,o),n=n.sibling}function Mv(n){var a=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,h=a.attributes;h.length;)a.removeAttributeNode(h[0]);cn(a,u,o),a[At]=n,a[wt]=o}catch(g){ct(n,n.return,g)}}var qi=!1,Ot=!1,Zd=!1,Lv=typeof WeakSet=="function"?WeakSet:Set,en=null;function aw(n,a){if(n=n.containerInfo,Tp=cf,n=$g(n),Xh(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var E=0,S=-1,q=-1,X=0,ne=0,ae=n,W=null;t:for(;;){for(var Z;ae!==o||h!==0&&ae.nodeType!==3||(S=E+h),ae!==g||u!==0&&ae.nodeType!==3||(q=E+u),ae.nodeType===3&&(E+=ae.nodeValue.length),(Z=ae.firstChild)!==null;)W=ae,ae=Z;for(;;){if(ae===n)break t;if(W===o&&++X===h&&(S=E),W===g&&++ne===u&&(q=E),(Z=ae.nextSibling)!==null)break;ae=W,W=ae.parentNode}ae=Z}o=S===-1||q===-1?null:{start:S,end:q}}else o=null}o=o||{start:0,end:0}}else o=null;for(Sp={focusedElem:n,selectionRange:o},cf=!1,en=a;en!==null;)if(a=en,n=a.child,(a.subtreeFlags&1024)!==0&&n!==null)n.return=a,en=n;else for(;en!==null;){switch(a=en,g=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&g!==null){n=void 0,o=a,h=g.memoizedProps,g=g.memoizedState,u=o.stateNode;try{var xe=ps(o.type,h,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(xe,g),u.__reactInternalSnapshotBeforeUpdate=n}catch(we){ct(o,o.return,we)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,o=n.nodeType,o===9)Rp(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Rp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=a.sibling,n!==null){n.return=a.return,en=n;break}en=a.return}}function Vv(n,a,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:ca(n,o),u&4&&Ul(5,o);break;case 1:if(ca(n,o),u&4)if(n=o.stateNode,a===null)try{n.componentDidMount()}catch(E){ct(o,o.return,E)}else{var h=ps(o.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(h,a,n.__reactInternalSnapshotBeforeUpdate)}catch(E){ct(o,o.return,E)}}u&64&&qv(o),u&512&&jl(o,o.return);break;case 3:if(ca(n,o),u&64&&(n=o.updateQueue,n!==null)){if(a=null,o.child!==null)switch(o.child.tag){case 27:case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}try{_y(n,a)}catch(E){ct(o,o.return,E)}}break;case 27:a===null&&u&4&&Mv(o);case 26:case 5:ca(n,o),a===null&&u&4&&Nv(o),u&512&&jl(o,o.return);break;case 12:ca(n,o);break;case 13:ca(n,o),u&4&&zv(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=pw.bind(null,o),qw(n,o))));break;case 22:if(u=o.memoizedState!==null||qi,!u){a=a!==null&&a.memoizedState!==null||Ot,h=qi;var g=Ot;qi=u,(Ot=a)&&!g?fa(n,o,(o.subtreeFlags&8772)!==0):ca(n,o),qi=h,Ot=g}break;case 30:break;default:ca(n,o)}}function Uv(n){var a=n.alternate;a!==null&&(n.alternate=null,Uv(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&Qt(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var gt=null,Pn=!1;function ki(n,a,o){for(o=o.child;o!==null;)jv(n,a,o),o=o.sibling}function jv(n,a,o){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(tt,o)}catch{}switch(o.tag){case 26:Ot||ei(o,a),ki(n,a,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Ot||ei(o,a);var u=gt,h=Pn;ya(o.type)&&(gt=o.stateNode,Pn=!1),ki(n,a,o),Ql(o.stateNode),gt=u,Pn=h;break;case 5:Ot||ei(o,a);case 6:if(u=gt,h=Pn,gt=null,ki(n,a,o),gt=u,Pn=h,gt!==null)if(Pn)try{(gt.nodeType===9?gt.body:gt.nodeName==="HTML"?gt.ownerDocument.body:gt).removeChild(o.stateNode)}catch(g){ct(o,a,g)}else try{gt.removeChild(o.stateNode)}catch(g){ct(o,a,g)}break;case 18:gt!==null&&(Pn?(n=gt,I_(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),ru(n)):I_(gt,o.stateNode));break;case 4:u=gt,h=Pn,gt=o.stateNode.containerInfo,Pn=!0,ki(n,a,o),gt=u,Pn=h;break;case 0:case 11:case 14:case 15:Ot||ua(2,o,a),Ot||ua(4,o,a),ki(n,a,o);break;case 1:Ot||(ei(o,a),u=o.stateNode,typeof u.componentWillUnmount=="function"&&kv(o,a,u)),ki(n,a,o);break;case 21:ki(n,a,o);break;case 22:Ot=(u=Ot)||o.memoizedState!==null,ki(n,a,o),Ot=u;break;default:ki(n,a,o)}}function zv(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{ru(n)}catch(o){ct(a,a.return,o)}}function sw(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new Lv),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new Lv),a;default:throw Error(i(435,n.tag))}}function Jd(n,a){var o=sw(n);a.forEach(function(u){var h=mw.bind(null,n,u);o.has(u)||(o.add(u),u.then(h,h))})}function Fn(n,a){var o=a.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u],g=n,E=a,S=E;e:for(;S!==null;){switch(S.tag){case 27:if(ya(S.type)){gt=S.stateNode,Pn=!1;break e}break;case 5:gt=S.stateNode,Pn=!1;break e;case 3:case 4:gt=S.stateNode.containerInfo,Pn=!0;break e}S=S.return}if(gt===null)throw Error(i(160));jv(g,E,h),gt=null,Pn=!1,g=h.alternate,g!==null&&(g.return=null),h.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)Bv(a,n),a=a.sibling}var Cr=null;function Bv(n,a){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Fn(a,n),Gn(n),u&4&&(ua(3,n,n.return),Ul(3,n),ua(5,n,n.return));break;case 1:Fn(a,n),Gn(n),u&512&&(Ot||o===null||ei(o,o.return)),u&64&&qi&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var h=Cr;if(Fn(a,n),Gn(n),u&512&&(Ot||o===null||ei(o,o.return)),u&4){var g=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,h=h.ownerDocument||h;t:switch(u){case"title":g=h.getElementsByTagName("title")[0],(!g||g[Hr]||g[At]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=h.createElement(u),h.head.insertBefore(g,h.querySelector("head > title"))),cn(g,u,o),g[At]=n,_t(g),u=g;break e;case"link":var E=M_("link","href",h).get(u+(o.href||""));if(E){for(var S=0;S<E.length;S++)if(g=E[S],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(S,1);break t}}g=h.createElement(u),cn(g,u,o),h.head.appendChild(g);break;case"meta":if(E=M_("meta","content",h).get(u+(o.content||""))){for(S=0;S<E.length;S++)if(g=E[S],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(S,1);break t}}g=h.createElement(u),cn(g,u,o),h.head.appendChild(g);break;default:throw Error(i(468,u))}g[At]=n,_t(g),u=g}n.stateNode=u}else L_(h,n.type,n.stateNode);else n.stateNode=P_(h,u,n.memoizedProps);else g!==u?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,u===null?L_(h,n.type,n.stateNode):P_(h,u,n.memoizedProps)):u===null&&n.stateNode!==null&&Qd(n,n.memoizedProps,o.memoizedProps)}break;case 27:Fn(a,n),Gn(n),u&512&&(Ot||o===null||ei(o,o.return)),o!==null&&u&4&&Qd(n,n.memoizedProps,o.memoizedProps);break;case 5:if(Fn(a,n),Gn(n),u&512&&(Ot||o===null||ei(o,o.return)),n.flags&32){h=n.stateNode;try{nr(h,"")}catch(Z){ct(n,n.return,Z)}}u&4&&n.stateNode!=null&&(h=n.memoizedProps,Qd(n,h,o!==null?o.memoizedProps:h)),u&1024&&(Zd=!0);break;case 6:if(Fn(a,n),Gn(n),u&4){if(n.stateNode===null)throw Error(i(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(Z){ct(n,n.return,Z)}}break;case 3:if(of=null,h=Cr,Cr=af(a.containerInfo),Fn(a,n),Cr=h,Gn(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{ru(a.containerInfo)}catch(Z){ct(n,n.return,Z)}Zd&&(Zd=!1,Hv(n));break;case 4:u=Cr,Cr=af(n.stateNode.containerInfo),Fn(a,n),Gn(n),Cr=u;break;case 12:Fn(a,n),Gn(n);break;case 13:Fn(a,n),Gn(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(ap=Vt()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Jd(n,u)));break;case 22:h=n.memoizedState!==null;var q=o!==null&&o.memoizedState!==null,X=qi,ne=Ot;if(qi=X||h,Ot=ne||q,Fn(a,n),Ot=ne,qi=X,Gn(n),u&8192)e:for(a=n.stateNode,a._visibility=h?a._visibility&-2:a._visibility|1,h&&(o===null||q||qi||Ot||ms(n)),o=null,a=n;;){if(a.tag===5||a.tag===26){if(o===null){q=o=a;try{if(g=q.stateNode,h)E=g.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{S=q.stateNode;var ae=q.memoizedProps.style,W=ae!=null&&ae.hasOwnProperty("display")?ae.display:null;S.style.display=W==null||typeof W=="boolean"?"":(""+W).trim()}}catch(Z){ct(q,q.return,Z)}}}else if(a.tag===6){if(o===null){q=a;try{q.stateNode.nodeValue=h?"":q.memoizedProps}catch(Z){ct(q,q.return,Z)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;o===a&&(o=null),a=a.return}o===a&&(o=null),a.sibling.return=a.return,a=a.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Jd(n,o))));break;case 19:Fn(a,n),Gn(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Jd(n,u)));break;case 30:break;case 21:break;default:Fn(a,n),Gn(n)}}function Gn(n){var a=n.flags;if(a&2){try{for(var o,u=n.return;u!==null;){if(Pv(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var h=o.stateNode,g=Xd(n);Gc(n,g,h);break;case 5:var E=o.stateNode;o.flags&32&&(nr(E,""),o.flags&=-33);var S=Xd(n);Gc(n,S,E);break;case 3:case 4:var q=o.stateNode.containerInfo,X=Xd(n);Wd(n,X,q);break;default:throw Error(i(161))}}catch(ne){ct(n,n.return,ne)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function Hv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;Hv(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function ca(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Vv(n,a.alternate,a),a=a.sibling}function ms(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:ua(4,a,a.return),ms(a);break;case 1:ei(a,a.return);var o=a.stateNode;typeof o.componentWillUnmount=="function"&&kv(a,a.return,o),ms(a);break;case 27:Ql(a.stateNode);case 26:case 5:ei(a,a.return),ms(a);break;case 22:a.memoizedState===null&&ms(a);break;case 30:ms(a);break;default:ms(a)}n=n.sibling}}function fa(n,a,o){for(o=o&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var u=a.alternate,h=n,g=a,E=g.flags;switch(g.tag){case 0:case 11:case 15:fa(h,g,o),Ul(4,g);break;case 1:if(fa(h,g,o),u=g,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(X){ct(u,u.return,X)}if(u=g,h=u.updateQueue,h!==null){var S=u.stateNode;try{var q=h.shared.hiddenCallbacks;if(q!==null)for(h.shared.hiddenCallbacks=null,h=0;h<q.length;h++)vy(q[h],S)}catch(X){ct(u,u.return,X)}}o&&E&64&&qv(g),jl(g,g.return);break;case 27:Mv(g);case 26:case 5:fa(h,g,o),o&&u===null&&E&4&&Nv(g),jl(g,g.return);break;case 12:fa(h,g,o);break;case 13:fa(h,g,o),o&&E&4&&zv(h,g);break;case 22:g.memoizedState===null&&fa(h,g,o),jl(g,g.return);break;case 30:break;default:fa(h,g,o)}a=a.sibling}}function ep(n,a){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&wl(o))}function tp(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&wl(n))}function ti(n,a,o,u){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Fv(n,a,o,u),a=a.sibling}function Fv(n,a,o,u){var h=a.flags;switch(a.tag){case 0:case 11:case 15:ti(n,a,o,u),h&2048&&Ul(9,a);break;case 1:ti(n,a,o,u);break;case 3:ti(n,a,o,u),h&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&wl(n)));break;case 12:if(h&2048){ti(n,a,o,u),n=a.stateNode;try{var g=a.memoizedProps,E=g.id,S=g.onPostCommit;typeof S=="function"&&S(E,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(q){ct(a,a.return,q)}}else ti(n,a,o,u);break;case 13:ti(n,a,o,u);break;case 23:break;case 22:g=a.stateNode,E=a.alternate,a.memoizedState!==null?g._visibility&2?ti(n,a,o,u):zl(n,a):g._visibility&2?ti(n,a,o,u):(g._visibility|=2,ho(n,a,o,u,(a.subtreeFlags&10256)!==0)),h&2048&&ep(E,a);break;case 24:ti(n,a,o,u),h&2048&&tp(a.alternate,a);break;default:ti(n,a,o,u)}}function ho(n,a,o,u,h){for(h=h&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var g=n,E=a,S=o,q=u,X=E.flags;switch(E.tag){case 0:case 11:case 15:ho(g,E,S,q,h),Ul(8,E);break;case 23:break;case 22:var ne=E.stateNode;E.memoizedState!==null?ne._visibility&2?ho(g,E,S,q,h):zl(g,E):(ne._visibility|=2,ho(g,E,S,q,h)),h&&X&2048&&ep(E.alternate,E);break;case 24:ho(g,E,S,q,h),h&&X&2048&&tp(E.alternate,E);break;default:ho(g,E,S,q,h)}a=a.sibling}}function zl(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var o=n,u=a,h=u.flags;switch(u.tag){case 22:zl(o,u),h&2048&&ep(u.alternate,u);break;case 24:zl(o,u),h&2048&&tp(u.alternate,u);break;default:zl(o,u)}a=a.sibling}}var Bl=8192;function po(n){if(n.subtreeFlags&Bl)for(n=n.child;n!==null;)Gv(n),n=n.sibling}function Gv(n){switch(n.tag){case 26:po(n),n.flags&Bl&&n.memoizedState!==null&&Gw(Cr,n.memoizedState,n.memoizedProps);break;case 5:po(n);break;case 3:case 4:var a=Cr;Cr=af(n.stateNode.containerInfo),po(n),Cr=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=Bl,Bl=16777216,po(n),Bl=a):po(n));break;default:po(n)}}function Yv(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function Hl(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];en=u,$v(u,n)}Yv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Kv(n),n=n.sibling}function Kv(n){switch(n.tag){case 0:case 11:case 15:Hl(n),n.flags&2048&&ua(9,n,n.return);break;case 3:Hl(n);break;case 12:Hl(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,Yc(n)):Hl(n);break;default:Hl(n)}}function Yc(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];en=u,$v(u,n)}Yv(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:ua(8,a,a.return),Yc(a);break;case 22:o=a.stateNode,o._visibility&2&&(o._visibility&=-3,Yc(a));break;default:Yc(a)}n=n.sibling}}function $v(n,a){for(;en!==null;){var o=en;switch(o.tag){case 0:case 11:case 15:ua(8,o,a);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:wl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,en=u;else e:for(o=n;en!==null;){u=en;var h=u.sibling,g=u.return;if(Uv(u),u===o){en=null;break e}if(h!==null){h.return=g,en=h;break e}en=g}}}var ow={getCacheForType:function(n){var a=gn(Ft),o=a.data.get(n);return o===void 0&&(o=n(),a.data.set(n,o)),o}},lw=typeof WeakMap=="function"?WeakMap:Map,rt=0,ft=null,Ue=null,Ye=0,it=0,Yn=null,ha=!1,mo=!1,np=!1,Ni=0,Ct=0,da=0,gs=0,rp=0,fr=0,go=0,Fl=null,Mn=null,ip=!1,ap=0,Kc=1/0,$c=null,pa=null,un=0,ma=null,yo=null,vo=0,sp=0,op=null,Qv=null,Gl=0,lp=null;function Kn(){if((rt&2)!==0&&Ye!==0)return Ye&-Ye;if(J.T!==null){var n=io;return n!==0?n:mp()}return Sr()}function Xv(){fr===0&&(fr=(Ye&536870912)===0||We?jr():536870912);var n=cr.current;return n!==null&&(n.flags|=32),fr}function $n(n,a,o){(n===ft&&(it===2||it===9)||n.cancelPendingCommit!==null)&&(_o(n,0),ga(n,Ye,fr,!1)),An(n,o),((rt&2)===0||n!==ft)&&(n===ft&&((rt&2)===0&&(gs|=o),Ct===4&&ga(n,Ye,fr,!1)),ni(n))}function Wv(n,a,o){if((rt&6)!==0)throw Error(i(327));var u=!o&&(a&124)===0&&(a&n.expiredLanes)===0||br(n,a),h=u?fw(n,a):fp(n,a,!0),g=u;do{if(h===0){mo&&!u&&ga(n,a,0,!1);break}else{if(o=n.current.alternate,g&&!uw(o)){h=fp(n,a,!1),g=!1;continue}if(h===2){if(g=a,n.errorRecoveryDisabledLanes&g)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){a=E;e:{var S=n;h=Fl;var q=S.current.memoizedState.isDehydrated;if(q&&(_o(S,E).flags|=256),E=fp(S,E,!1),E!==2){if(np&&!q){S.errorRecoveryDisabledLanes|=g,gs|=g,h=4;break e}g=Mn,Mn=h,g!==null&&(Mn===null?Mn=g:Mn.push.apply(Mn,g))}h=E}if(g=!1,h!==2)continue}}if(h===1){_o(n,0),ga(n,a,0,!0);break}e:{switch(u=n,g=h,g){case 0:case 1:throw Error(i(345));case 4:if((a&4194048)!==a)break;case 6:ga(u,a,fr,!ha);break e;case 2:Mn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((a&62914560)===a&&(h=ap+300-Vt(),10<h)){if(ga(u,a,fr,!ha),Ur(u,0,!0)!==0)break e;u.timeoutHandle=R_(Zv.bind(null,u,o,Mn,$c,ip,a,fr,gs,go,ha,g,2,-0,0),h);break e}Zv(u,o,Mn,$c,ip,a,fr,gs,go,ha,g,0,-0,0)}}break}while(!0);ni(n)}function Zv(n,a,o,u,h,g,E,S,q,X,ne,ae,W,Z){if(n.timeoutHandle=-1,ae=a.subtreeFlags,(ae&8192||(ae&16785408)===16785408)&&(Zl={stylesheets:null,count:0,unsuspend:Fw},Gv(a),ae=Yw(),ae!==null)){n.cancelPendingCommit=ae(a_.bind(null,n,a,g,o,u,h,E,S,q,ne,1,W,Z)),ga(n,g,E,!X);return}a_(n,a,g,o,u,h,E,S,q)}function uw(n){for(var a=n;;){var o=a.tag;if((o===0||o===11||o===15)&&a.flags&16384&&(o=a.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var h=o[u],g=h.getSnapshot;h=h.value;try{if(!Bn(g(),h))return!1}catch{return!1}}if(o=a.child,a.subtreeFlags&16384&&o!==null)o.return=a,a=o;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ga(n,a,o,u){a&=~rp,a&=~gs,n.suspendedLanes|=a,n.pingedLanes&=~a,u&&(n.warmLanes|=a),u=n.expirationTimes;for(var h=a;0<h;){var g=31-Ut(h),E=1<<g;u[g]=-1,h&=~E}o!==0&&er(n,o,a)}function Qc(){return(rt&6)===0?(Yl(0),!1):!0}function up(){if(Ue!==null){if(it===0)var n=Ue.return;else n=Ue,Ri=cs=null,Rd(n),co=null,Ml=0,n=Ue;for(;n!==null;)Dv(n.alternate,n),n=n.return;Ue=null}}function _o(n,a){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,Cw(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),up(),ft=n,Ue=o=Si(n.current,null),Ye=a,it=0,Yn=null,ha=!1,mo=br(n,a),np=!1,go=fr=rp=gs=da=Ct=0,Mn=Fl=null,ip=!1,(a&8)!==0&&(a|=a&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=a;0<u;){var h=31-Ut(u),g=1<<h;a|=n[h],u&=~g}return Ni=a,yc(),o}function Jv(n,a){Me=null,J.H=Mc,a===Cl||a===Rc?(a=gy(),it=3):a===dy?(a=gy(),it=4):it=a===yv?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Yn=a,Ue===null&&(Ct=1,zc(n,sr(a,n.current)))}function e_(){var n=J.H;return J.H=Mc,n===null?Mc:n}function t_(){var n=J.A;return J.A=ow,n}function cp(){Ct=4,ha||(Ye&4194048)!==Ye&&cr.current!==null||(mo=!0),(da&134217727)===0&&(gs&134217727)===0||ft===null||ga(ft,Ye,fr,!1)}function fp(n,a,o){var u=rt;rt|=2;var h=e_(),g=t_();(ft!==n||Ye!==a)&&($c=null,_o(n,a)),a=!1;var E=Ct;e:do try{if(it!==0&&Ue!==null){var S=Ue,q=Yn;switch(it){case 8:up(),E=6;break e;case 3:case 2:case 9:case 6:cr.current===null&&(a=!0);var X=it;if(it=0,Yn=null,Eo(n,S,q,X),o&&mo){E=0;break e}break;default:X=it,it=0,Yn=null,Eo(n,S,q,X)}}cw(),E=Ct;break}catch(ne){Jv(n,ne)}while(!0);return a&&n.shellSuspendCounter++,Ri=cs=null,rt=u,J.H=h,J.A=g,Ue===null&&(ft=null,Ye=0,yc()),E}function cw(){for(;Ue!==null;)n_(Ue)}function fw(n,a){var o=rt;rt|=2;var u=e_(),h=t_();ft!==n||Ye!==a?($c=null,Kc=Vt()+500,_o(n,a)):mo=br(n,a);e:do try{if(it!==0&&Ue!==null){a=Ue;var g=Yn;t:switch(it){case 1:it=0,Yn=null,Eo(n,a,g,1);break;case 2:case 9:if(py(g)){it=0,Yn=null,r_(a);break}a=function(){it!==2&&it!==9||ft!==n||(it=7),ni(n)},g.then(a,a);break e;case 3:it=7;break e;case 4:it=5;break e;case 7:py(g)?(it=0,Yn=null,r_(a)):(it=0,Yn=null,Eo(n,a,g,7));break;case 5:var E=null;switch(Ue.tag){case 26:E=Ue.memoizedState;case 5:case 27:var S=Ue;if(!E||V_(E)){it=0,Yn=null;var q=S.sibling;if(q!==null)Ue=q;else{var X=S.return;X!==null?(Ue=X,Xc(X)):Ue=null}break t}}it=0,Yn=null,Eo(n,a,g,5);break;case 6:it=0,Yn=null,Eo(n,a,g,6);break;case 8:up(),Ct=6;break e;default:throw Error(i(462))}}hw();break}catch(ne){Jv(n,ne)}while(!0);return Ri=cs=null,J.H=u,J.A=h,rt=o,Ue!==null?0:(ft=null,Ye=0,yc(),Ct)}function hw(){for(;Ue!==null&&!di();)n_(Ue)}function n_(n){var a=xv(n.alternate,n,Ni);n.memoizedProps=n.pendingProps,a===null?Xc(n):Ue=a}function r_(n){var a=n,o=a.alternate;switch(a.tag){case 15:case 0:a=Sv(o,a,a.pendingProps,a.type,void 0,Ye);break;case 11:a=Sv(o,a,a.pendingProps,a.type.render,a.ref,Ye);break;case 5:Rd(a);default:Dv(o,a),a=Ue=iy(a,Ni),a=xv(o,a,Ni)}n.memoizedProps=n.pendingProps,a===null?Xc(n):Ue=a}function Eo(n,a,o,u){Ri=cs=null,Rd(a),co=null,Ml=0;var h=a.return;try{if(tw(n,h,a,o,Ye)){Ct=1,zc(n,sr(o,n.current)),Ue=null;return}}catch(g){if(h!==null)throw Ue=h,g;Ct=1,zc(n,sr(o,n.current)),Ue=null;return}a.flags&32768?(We||u===1?n=!0:mo||(Ye&536870912)!==0?n=!1:(ha=n=!0,(u===2||u===9||u===3||u===6)&&(u=cr.current,u!==null&&u.tag===13&&(u.flags|=16384))),i_(a,n)):Xc(a)}function Xc(n){var a=n;do{if((a.flags&32768)!==0){i_(a,ha);return}n=a.return;var o=rw(a.alternate,a,Ni);if(o!==null){Ue=o;return}if(a=a.sibling,a!==null){Ue=a;return}Ue=a=n}while(a!==null);Ct===0&&(Ct=5)}function i_(n,a){do{var o=iw(n.alternate,n);if(o!==null){o.flags&=32767,Ue=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!a&&(n=n.sibling,n!==null)){Ue=n;return}Ue=n=o}while(n!==null);Ct=6,Ue=null}function a_(n,a,o,u,h,g,E,S,q){n.cancelPendingCommit=null;do Wc();while(un!==0);if((rt&6)!==0)throw Error(i(327));if(a!==null){if(a===n.current)throw Error(i(177));if(g=a.lanes|a.childLanes,g|=td,Fa(n,o,g,E,S,q),n===ft&&(Ue=ft=null,Ye=0),yo=a,ma=n,vo=o,sp=g,op=h,Qv=u,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,gw(Lr,function(){return c_(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||u){u=J.T,J.T=null,h=ce.p,ce.p=2,E=rt,rt|=4;try{aw(n,a,o)}finally{rt=E,ce.p=h,J.T=u}}un=1,s_(),o_(),l_()}}function s_(){if(un===1){un=0;var n=ma,a=yo,o=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||o){o=J.T,J.T=null;var u=ce.p;ce.p=2;var h=rt;rt|=4;try{Bv(a,n);var g=Sp,E=$g(n.containerInfo),S=g.focusedElem,q=g.selectionRange;if(E!==S&&S&&S.ownerDocument&&Kg(S.ownerDocument.documentElement,S)){if(q!==null&&Xh(S)){var X=q.start,ne=q.end;if(ne===void 0&&(ne=X),"selectionStart"in S)S.selectionStart=X,S.selectionEnd=Math.min(ne,S.value.length);else{var ae=S.ownerDocument||document,W=ae&&ae.defaultView||window;if(W.getSelection){var Z=W.getSelection(),xe=S.textContent.length,we=Math.min(q.start,xe),lt=q.end===void 0?we:Math.min(q.end,xe);!Z.extend&&we>lt&&(E=lt,lt=we,we=E);var F=Yg(S,we),z=Yg(S,lt);if(F&&z&&(Z.rangeCount!==1||Z.anchorNode!==F.node||Z.anchorOffset!==F.offset||Z.focusNode!==z.node||Z.focusOffset!==z.offset)){var $=ae.createRange();$.setStart(F.node,F.offset),Z.removeAllRanges(),we>lt?(Z.addRange($),Z.extend(z.node,z.offset)):($.setEnd(z.node,z.offset),Z.addRange($))}}}}for(ae=[],Z=S;Z=Z.parentNode;)Z.nodeType===1&&ae.push({element:Z,left:Z.scrollLeft,top:Z.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<ae.length;S++){var re=ae[S];re.element.scrollLeft=re.left,re.element.scrollTop=re.top}}cf=!!Tp,Sp=Tp=null}finally{rt=h,ce.p=u,J.T=o}}n.current=a,un=2}}function o_(){if(un===2){un=0;var n=ma,a=yo,o=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||o){o=J.T,J.T=null;var u=ce.p;ce.p=2;var h=rt;rt|=4;try{Vv(n,a.alternate,a)}finally{rt=h,ce.p=u,J.T=o}}un=3}}function l_(){if(un===4||un===3){un=0,$i();var n=ma,a=yo,o=vo,u=Qv;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?un=5:(un=0,yo=ma=null,u_(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(pa=null),Wi(o),a=a.stateNode,Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(tt,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=J.T,h=ce.p,ce.p=2,J.T=null;try{for(var g=n.onRecoverableError,E=0;E<u.length;E++){var S=u[E];g(S.value,{componentStack:S.stack})}}finally{J.T=a,ce.p=h}}(vo&3)!==0&&Wc(),ni(n),h=n.pendingLanes,(o&4194090)!==0&&(h&42)!==0?n===lp?Gl++:(Gl=0,lp=n):Gl=0,Yl(0)}}function u_(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,wl(a)))}function Wc(n){return s_(),o_(),l_(),c_()}function c_(){if(un!==5)return!1;var n=ma,a=sp;sp=0;var o=Wi(vo),u=J.T,h=ce.p;try{ce.p=32>o?32:o,J.T=null,o=op,op=null;var g=ma,E=vo;if(un=0,yo=ma=null,vo=0,(rt&6)!==0)throw Error(i(331));var S=rt;if(rt|=4,Kv(g.current),Fv(g,g.current,E,o),rt=S,Yl(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(tt,g)}catch{}return!0}finally{ce.p=h,J.T=u,u_(n,a)}}function f_(n,a,o){a=sr(o,a),a=jd(n.stateNode,a,2),n=aa(n,a,2),n!==null&&(An(n,2),ni(n))}function ct(n,a,o){if(n.tag===3)f_(n,n,o);else for(;a!==null;){if(a.tag===3){f_(a,n,o);break}else if(a.tag===1){var u=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(pa===null||!pa.has(u))){n=sr(o,n),o=mv(2),u=aa(a,o,2),u!==null&&(gv(o,u,a,n),An(u,2),ni(u));break}}a=a.return}}function hp(n,a,o){var u=n.pingCache;if(u===null){u=n.pingCache=new lw;var h=new Set;u.set(a,h)}else h=u.get(a),h===void 0&&(h=new Set,u.set(a,h));h.has(o)||(np=!0,h.add(o),n=dw.bind(null,n,a,o),a.then(n,n))}function dw(n,a,o){var u=n.pingCache;u!==null&&u.delete(a),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,ft===n&&(Ye&o)===o&&(Ct===4||Ct===3&&(Ye&62914560)===Ye&&300>Vt()-ap?(rt&2)===0&&_o(n,0):rp|=o,go===Ye&&(go=0)),ni(n)}function h_(n,a){a===0&&(a=zr()),n=eo(n,a),n!==null&&(An(n,a),ni(n))}function pw(n){var a=n.memoizedState,o=0;a!==null&&(o=a.retryLane),h_(n,o)}function mw(n,a){var o=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(a),h_(n,o)}function gw(n,a){return vr(n,a)}var Zc=null,bo=null,dp=!1,Jc=!1,pp=!1,ys=0;function ni(n){n!==bo&&n.next===null&&(bo===null?Zc=bo=n:bo=bo.next=n),Jc=!0,dp||(dp=!0,vw())}function Yl(n,a){if(!pp&&Jc){pp=!0;do for(var o=!1,u=Zc;u!==null;){if(n!==0){var h=u.pendingLanes;if(h===0)var g=0;else{var E=u.suspendedLanes,S=u.pingedLanes;g=(1<<31-Ut(42|n)+1)-1,g&=h&~(E&~S),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,g_(u,g))}else g=Ye,g=Ur(u,u===ft?g:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(g&3)===0||br(u,g)||(o=!0,g_(u,g));u=u.next}while(o);pp=!1}}function yw(){d_()}function d_(){Jc=dp=!1;var n=0;ys!==0&&(Rw()&&(n=ys),ys=0);for(var a=Vt(),o=null,u=Zc;u!==null;){var h=u.next,g=p_(u,a);g===0?(u.next=null,o===null?Zc=h:o.next=h,h===null&&(bo=o)):(o=u,(n!==0||(g&3)!==0)&&(Jc=!0)),u=h}Yl(n)}function p_(n,a){for(var o=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes&-62914561;0<g;){var E=31-Ut(g),S=1<<E,q=h[E];q===-1?((S&o)===0||(S&u)!==0)&&(h[E]=Ha(S,a)):q<=a&&(n.expiredLanes|=S),g&=~S}if(a=ft,o=Ye,o=Ur(n,n===a?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===a&&(it===2||it===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&Sn(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||br(n,o)){if(a=o&-o,a===n.callbackPriority)return a;switch(u!==null&&Sn(u),Wi(o)){case 2:case 8:o=pi;break;case 32:o=Lr;break;case 268435456:o=Vr;break;default:o=Lr}return u=m_.bind(null,n),o=vr(o,u),n.callbackPriority=a,n.callbackNode=o,a}return u!==null&&u!==null&&Sn(u),n.callbackPriority=2,n.callbackNode=null,2}function m_(n,a){if(un!==0&&un!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(Wc()&&n.callbackNode!==o)return null;var u=Ye;return u=Ur(n,n===ft?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(Wv(n,u,a),p_(n,Vt()),n.callbackNode!=null&&n.callbackNode===o?m_.bind(null,n):null)}function g_(n,a){if(Wc())return null;Wv(n,a,!0)}function vw(){Iw(function(){(rt&6)!==0?vr(Mr,yw):d_()})}function mp(){return ys===0&&(ys=jr()),ys}function y_(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Bs(""+n)}function v_(n,a){var o=a.ownerDocument.createElement("input");return o.name=a.name,o.value=a.value,n.id&&o.setAttribute("form",n.id),a.parentNode.insertBefore(o,a),n=new FormData(n),o.parentNode.removeChild(o),n}function _w(n,a,o,u,h){if(a==="submit"&&o&&o.stateNode===h){var g=y_((h[wt]||null).action),E=u.submitter;E&&(a=(a=E[wt]||null)?y_(a.formAction):E.getAttribute("formAction"),a!==null&&(g=a,E=null));var S=new Hs("action","action",null,u,h);n.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(ys!==0){var q=E?v_(h,E):new FormData(h);Pd(o,{pending:!0,data:q,method:h.method,action:g},null,q)}}else typeof g=="function"&&(S.preventDefault(),q=E?v_(h,E):new FormData(h),Pd(o,{pending:!0,data:q,method:h.method,action:g},g,q))},currentTarget:h}]})}}for(var gp=0;gp<ed.length;gp++){var yp=ed[gp],Ew=yp.toLowerCase(),bw=yp[0].toUpperCase()+yp.slice(1);Rr(Ew,"on"+bw)}Rr(Wg,"onAnimationEnd"),Rr(Zg,"onAnimationIteration"),Rr(Jg,"onAnimationStart"),Rr("dblclick","onDoubleClick"),Rr("focusin","onFocus"),Rr("focusout","onBlur"),Rr(VA,"onTransitionRun"),Rr(UA,"onTransitionStart"),Rr(jA,"onTransitionCancel"),Rr(ey,"onTransitionEnd"),me("onMouseEnter",["mouseout","mouseover"]),me("onMouseLeave",["mouseout","mouseover"]),me("onPointerEnter",["pointerout","pointerover"]),me("onPointerLeave",["pointerout","pointerover"]),le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),le("onBeforeInput",["compositionend","keypress","textInput","paste"]),le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Kl));function __(n,a){a=(a&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],h=u.event;u=u.listeners;e:{var g=void 0;if(a)for(var E=u.length-1;0<=E;E--){var S=u[E],q=S.instance,X=S.currentTarget;if(S=S.listener,q!==g&&h.isPropagationStopped())break e;g=S,h.currentTarget=X;try{g(h)}catch(ne){jc(ne)}h.currentTarget=null,g=q}else for(E=0;E<u.length;E++){if(S=u[E],q=S.instance,X=S.currentTarget,S=S.listener,q!==g&&h.isPropagationStopped())break e;g=S,h.currentTarget=X;try{g(h)}catch(ne){jc(ne)}h.currentTarget=null,g=q}}}}function je(n,a){var o=a[Br];o===void 0&&(o=a[Br]=new Set);var u=n+"__bubble";o.has(u)||(E_(a,n,2,!1),o.add(u))}function vp(n,a,o){var u=0;a&&(u|=4),E_(o,n,u,a)}var ef="_reactListening"+Math.random().toString(36).slice(2);function _p(n){if(!n[ef]){n[ef]=!0,ve.forEach(function(o){o!=="selectionchange"&&(Tw.has(o)||vp(o,!1,n),vp(o,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[ef]||(a[ef]=!0,vp("selectionchange",!1,a))}}function E_(n,a,o,u){switch(F_(a)){case 2:var h=Qw;break;case 8:h=Xw;break;default:h=kp}o=h.bind(null,a,o,n),h=void 0,!ir||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(a,o,{capture:!0,passive:h}):n.addEventListener(a,o,!0):h!==void 0?n.addEventListener(a,o,{passive:h}):n.addEventListener(a,o,!1)}function Ep(n,a,o,u,h){var g=u;if((a&1)===0&&(a&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var S=u.stateNode.containerInfo;if(S===h)break;if(E===4)for(E=u.return;E!==null;){var q=E.tag;if((q===3||q===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;S!==null;){if(E=tr(S),E===null)return;if(q=E.tag,q===5||q===6||q===26||q===27){u=g=E;continue e}S=S.parentNode}}u=u.return}nc(function(){var X=g,ne=rr(o),ae=[];e:{var W=ty.get(n);if(W!==void 0){var Z=Hs,xe=n;switch(n){case"keypress":if(Kr(o)===0)break e;case"keydown":case"keyup":Z=Qs;break;case"focusin":xe="focus",Z=Ys;break;case"focusout":xe="blur",Z=Ys;break;case"beforeblur":case"afterblur":Z=Ys;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=ar;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=Yh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=cc;break;case Wg:case Zg:case Jg:Z=Ks;break;case ey:Z=hc;break;case"scroll":case"scrollend":Z=rc;break;case"wheel":Z=Xs;break;case"copy":case"cut":case"paste":Z=$s;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=yl;break;case"toggle":case"beforetoggle":Z=pc}var we=(a&4)!==0,lt=!we&&(n==="scroll"||n==="scrollend"),F=we?W!==null?W+"Capture":null:W;we=[];for(var z=X,$;z!==null;){var re=z;if($=re.stateNode,re=re.tag,re!==5&&re!==26&&re!==27||$===null||F===null||(re=Xa(z,F),re!=null&&we.push($l(z,re,$))),lt)break;z=z.return}0<we.length&&(W=new Z(W,xe,null,o,ne),ae.push({event:W,listeners:we}))}}if((a&7)===0){e:{if(W=n==="mouseover"||n==="pointerover",Z=n==="mouseout"||n==="pointerout",W&&o!==yi&&(xe=o.relatedTarget||o.fromElement)&&(tr(xe)||xe[vt]))break e;if((Z||W)&&(W=ne.window===ne?ne:(W=ne.ownerDocument)?W.defaultView||W.parentWindow:window,Z?(xe=o.relatedTarget||o.toElement,Z=X,xe=xe?tr(xe):null,xe!==null&&(lt=l(xe),we=xe.tag,xe!==lt||we!==5&&we!==27&&we!==6)&&(xe=null)):(Z=null,xe=X),Z!==xe)){if(we=ar,re="onMouseLeave",F="onMouseEnter",z="mouse",(n==="pointerout"||n==="pointerover")&&(we=yl,re="onPointerLeave",F="onPointerEnter",z="pointer"),lt=Z==null?W:jn(Z),$=xe==null?W:jn(xe),W=new we(re,z+"leave",Z,o,ne),W.target=lt,W.relatedTarget=$,re=null,tr(ne)===X&&(we=new we(F,z+"enter",xe,o,ne),we.target=$,we.relatedTarget=lt,re=we),lt=re,Z&&xe)t:{for(we=Z,F=xe,z=0,$=we;$;$=To($))z++;for($=0,re=F;re;re=To(re))$++;for(;0<z-$;)we=To(we),z--;for(;0<$-z;)F=To(F),$--;for(;z--;){if(we===F||F!==null&&we===F.alternate)break t;we=To(we),F=To(F)}we=null}else we=null;Z!==null&&b_(ae,W,Z,we,!1),xe!==null&&lt!==null&&b_(ae,lt,xe,we,!0)}}e:{if(W=X?jn(X):window,Z=W.nodeName&&W.nodeName.toLowerCase(),Z==="select"||Z==="input"&&W.type==="file")var ye=jg;else if(Ht(W))if(zg)ye=PA;else{ye=kA;var Ve=qA}else Z=W.nodeName,!Z||Z.toLowerCase()!=="input"||W.type!=="checkbox"&&W.type!=="radio"?X&&cl(X.elementType)&&(ye=jg):ye=NA;if(ye&&(ye=ye(n,X))){Ti(ae,ye,o,ne);break e}Ve&&Ve(n,W,X),n==="focusout"&&X&&W.type==="number"&&X.memoizedProps.value!=null&&ea(W,"number",W.value)}switch(Ve=X?jn(X):window,n){case"focusin":(Ht(Ve)||Ve.contentEditable==="true")&&(Ws=Ve,Wh=X,El=null);break;case"focusout":El=Wh=Ws=null;break;case"mousedown":Zh=!0;break;case"contextmenu":case"mouseup":case"dragend":Zh=!1,Qg(ae,o,ne);break;case"selectionchange":if(LA)break;case"keydown":case"keyup":Qg(ae,o,ne)}var Ee;if(Xr)e:{switch(n){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else Fe?ee(n,o)&&(Re="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(Re="onCompositionStart");Re&&(_&&o.locale!=="ko"&&(Fe||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Fe&&(Ee=hl()):(Yr=ne,ta="value"in Yr?Yr.value:Yr.textContent,Fe=!0)),Ve=tf(X,Re),0<Ve.length&&(Re=new ml(Re,n,null,o,ne),ae.push({event:Re,listeners:Ve}),Ee?Re.data=Ee:(Ee=he(o),Ee!==null&&(Re.data=Ee)))),(Ee=y?Bt(n,o):Ge(n,o))&&(Re=tf(X,"onBeforeInput"),0<Re.length&&(Ve=new ml("onBeforeInput","beforeinput",null,o,ne),ae.push({event:Ve,listeners:Re}),Ve.data=Ee)),_w(ae,n,X,o,ne)}__(ae,a)})}function $l(n,a,o){return{instance:n,listener:a,currentTarget:o}}function tf(n,a){for(var o=a+"Capture",u=[];n!==null;){var h=n,g=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||g===null||(h=Xa(n,o),h!=null&&u.unshift($l(n,h,g)),h=Xa(n,a),h!=null&&u.push($l(n,h,g))),n.tag===3)return u;n=n.return}return[]}function To(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function b_(n,a,o,u,h){for(var g=a._reactName,E=[];o!==null&&o!==u;){var S=o,q=S.alternate,X=S.stateNode;if(S=S.tag,q!==null&&q===u)break;S!==5&&S!==26&&S!==27||X===null||(q=X,h?(X=Xa(o,g),X!=null&&E.unshift($l(o,X,q))):h||(X=Xa(o,g),X!=null&&E.push($l(o,X,q)))),o=o.return}E.length!==0&&n.push({event:a,listeners:E})}var Sw=/\r\n?/g,Aw=/\u0000|\uFFFD/g;function T_(n){return(typeof n=="string"?n:""+n).replace(Sw,`
`).replace(Aw,"")}function S_(n,a){return a=T_(a),T_(n)===a}function nf(){}function ot(n,a,o,u,h,g){switch(o){case"children":typeof u=="string"?a==="body"||a==="textarea"&&u===""||nr(n,u):(typeof u=="number"||typeof u=="bigint")&&a!=="body"&&nr(n,""+u);break;case"className":mn(n,"class",u);break;case"tabIndex":mn(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":mn(n,o,u);break;case"style":ul(n,u,g);break;case"data":if(a!=="object"){mn(n,"data",u);break}case"src":case"href":if(u===""&&(a!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Bs(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(a!=="input"&&ot(n,a,"name",h.name,h,null),ot(n,a,"formEncType",h.formEncType,h,null),ot(n,a,"formMethod",h.formMethod,h,null),ot(n,a,"formTarget",h.formTarget,h,null)):(ot(n,a,"encType",h.encType,h,null),ot(n,a,"method",h.method,h,null),ot(n,a,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Bs(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=nf);break;case"onScroll":u!=null&&je("scroll",n);break;case"onScrollEnd":u!=null&&je("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(h.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=Bs(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":je("beforetoggle",n),je("toggle",n),zt(n,"popover",u);break;case"xlinkActuate":$e(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":$e(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":$e(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":$e(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":$e(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":$e(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":$e(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":$e(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":$e(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":zt(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Fh.get(o)||o,zt(n,o,u))}}function bp(n,a,o,u,h,g){switch(o){case"style":ul(n,u,g);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(h.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"children":typeof u=="string"?nr(n,u):(typeof u=="number"||typeof u=="bigint")&&nr(n,""+u);break;case"onScroll":u!=null&&je("scroll",n);break;case"onScrollEnd":u!=null&&je("scrollend",n);break;case"onClick":u!=null&&(n.onclick=nf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!H.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(h=o.endsWith("Capture"),a=o.slice(2,h?o.length-7:void 0),g=n[wt]||null,g=g!=null?g[o]:null,typeof g=="function"&&n.removeEventListener(a,g,h),typeof u=="function")){typeof g!="function"&&g!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(a,u,h);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):zt(n,o,u)}}}function cn(n,a,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":je("error",n),je("load",n);var u=!1,h=!1,g;for(g in o)if(o.hasOwnProperty(g)){var E=o[g];if(E!=null)switch(g){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:ot(n,a,g,E,o,null)}}h&&ot(n,a,"srcSet",o.srcSet,o,null),u&&ot(n,a,"src",o.src,o,null);return;case"input":je("invalid",n);var S=g=E=h=null,q=null,X=null;for(u in o)if(o.hasOwnProperty(u)){var ne=o[u];if(ne!=null)switch(u){case"name":h=ne;break;case"type":E=ne;break;case"checked":q=ne;break;case"defaultChecked":X=ne;break;case"value":g=ne;break;case"defaultValue":S=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(i(137,a));break;default:ot(n,a,u,ne,o,null)}}Ka(n,g,S,q,X,E,h,!1),zs(n);return;case"select":je("invalid",n),u=E=g=null;for(h in o)if(o.hasOwnProperty(h)&&(S=o[h],S!=null))switch(h){case"value":g=S;break;case"defaultValue":E=S;break;case"multiple":u=S;default:ot(n,a,h,S,o,null)}a=g,o=E,n.multiple=!!u,a!=null?gi(n,!!u,a,!1):o!=null&&gi(n,!!u,o,!0);return;case"textarea":je("invalid",n),g=h=u=null;for(E in o)if(o.hasOwnProperty(E)&&(S=o[E],S!=null))switch(E){case"value":u=S;break;case"defaultValue":h=S;break;case"children":g=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(i(91));break;default:ot(n,a,E,S,o,null)}$a(n,u,h,g),zs(n);return;case"option":for(q in o)if(o.hasOwnProperty(q)&&(u=o[q],u!=null))switch(q){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ot(n,a,q,u,o,null)}return;case"dialog":je("beforetoggle",n),je("toggle",n),je("cancel",n),je("close",n);break;case"iframe":case"object":je("load",n);break;case"video":case"audio":for(u=0;u<Kl.length;u++)je(Kl[u],n);break;case"image":je("error",n),je("load",n);break;case"details":je("toggle",n);break;case"embed":case"source":case"link":je("error",n),je("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(X in o)if(o.hasOwnProperty(X)&&(u=o[X],u!=null))switch(X){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:ot(n,a,X,u,o,null)}return;default:if(cl(a)){for(ne in o)o.hasOwnProperty(ne)&&(u=o[ne],u!==void 0&&bp(n,a,ne,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&ot(n,a,S,u,o,null))}function ww(n,a,o,u){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,g=null,E=null,S=null,q=null,X=null,ne=null;for(Z in o){var ae=o[Z];if(o.hasOwnProperty(Z)&&ae!=null)switch(Z){case"checked":break;case"value":break;case"defaultValue":q=ae;default:u.hasOwnProperty(Z)||ot(n,a,Z,null,u,ae)}}for(var W in u){var Z=u[W];if(ae=o[W],u.hasOwnProperty(W)&&(Z!=null||ae!=null))switch(W){case"type":g=Z;break;case"name":h=Z;break;case"checked":X=Z;break;case"defaultChecked":ne=Z;break;case"value":E=Z;break;case"defaultValue":S=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,a));break;default:Z!==ae&&ot(n,a,W,Z,u,ae)}}zn(n,E,S,q,X,ne,g,h);return;case"select":Z=E=S=W=null;for(g in o)if(q=o[g],o.hasOwnProperty(g)&&q!=null)switch(g){case"value":break;case"multiple":Z=q;default:u.hasOwnProperty(g)||ot(n,a,g,null,u,q)}for(h in u)if(g=u[h],q=o[h],u.hasOwnProperty(h)&&(g!=null||q!=null))switch(h){case"value":W=g;break;case"defaultValue":S=g;break;case"multiple":E=g;default:g!==q&&ot(n,a,h,g,u,q)}a=S,o=E,u=Z,W!=null?gi(n,!!o,W,!1):!!u!=!!o&&(a!=null?gi(n,!!o,a,!0):gi(n,!!o,o?[]:"",!1));return;case"textarea":Z=W=null;for(S in o)if(h=o[S],o.hasOwnProperty(S)&&h!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:ot(n,a,S,null,u,h)}for(E in u)if(h=u[E],g=o[E],u.hasOwnProperty(E)&&(h!=null||g!=null))switch(E){case"value":W=h;break;case"defaultValue":Z=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(i(91));break;default:h!==g&&ot(n,a,E,h,u,g)}at(n,W,Z);return;case"option":for(var xe in o)if(W=o[xe],o.hasOwnProperty(xe)&&W!=null&&!u.hasOwnProperty(xe))switch(xe){case"selected":n.selected=!1;break;default:ot(n,a,xe,null,u,W)}for(q in u)if(W=u[q],Z=o[q],u.hasOwnProperty(q)&&W!==Z&&(W!=null||Z!=null))switch(q){case"selected":n.selected=W&&typeof W!="function"&&typeof W!="symbol";break;default:ot(n,a,q,W,u,Z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var we in o)W=o[we],o.hasOwnProperty(we)&&W!=null&&!u.hasOwnProperty(we)&&ot(n,a,we,null,u,W);for(X in u)if(W=u[X],Z=o[X],u.hasOwnProperty(X)&&W!==Z&&(W!=null||Z!=null))switch(X){case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(i(137,a));break;default:ot(n,a,X,W,u,Z)}return;default:if(cl(a)){for(var lt in o)W=o[lt],o.hasOwnProperty(lt)&&W!==void 0&&!u.hasOwnProperty(lt)&&bp(n,a,lt,void 0,u,W);for(ne in u)W=u[ne],Z=o[ne],!u.hasOwnProperty(ne)||W===Z||W===void 0&&Z===void 0||bp(n,a,ne,W,u,Z);return}}for(var F in o)W=o[F],o.hasOwnProperty(F)&&W!=null&&!u.hasOwnProperty(F)&&ot(n,a,F,null,u,W);for(ae in u)W=u[ae],Z=o[ae],!u.hasOwnProperty(ae)||W===Z||W==null&&Z==null||ot(n,a,ae,W,u,Z)}var Tp=null,Sp=null;function rf(n){return n.nodeType===9?n:n.ownerDocument}function A_(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function w_(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function Ap(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var wp=null;function Rw(){var n=window.event;return n&&n.type==="popstate"?n===wp?!1:(wp=n,!0):(wp=null,!1)}var R_=typeof setTimeout=="function"?setTimeout:void 0,Cw=typeof clearTimeout=="function"?clearTimeout:void 0,C_=typeof Promise=="function"?Promise:void 0,Iw=typeof queueMicrotask=="function"?queueMicrotask:typeof C_<"u"?function(n){return C_.resolve(null).then(n).catch(xw)}:R_;function xw(n){setTimeout(function(){throw n})}function ya(n){return n==="head"}function I_(n,a){var o=a,u=0,h=0;do{var g=o.nextSibling;if(n.removeChild(o),g&&g.nodeType===8)if(o=g.data,o==="/$"){if(0<u&&8>u){o=u;var E=n.ownerDocument;if(o&1&&Ql(E.documentElement),o&2&&Ql(E.body),o&4)for(o=E.head,Ql(o),E=o.firstChild;E;){var S=E.nextSibling,q=E.nodeName;E[Hr]||q==="SCRIPT"||q==="STYLE"||q==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=S}}if(h===0){n.removeChild(g),ru(a);return}h--}else o==="$"||o==="$?"||o==="$!"?h++:u=o.charCodeAt(0)-48;else u=0;o=g}while(o);ru(a)}function Rp(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var o=a;switch(a=a.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Rp(o),Qt(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function Ow(n,a,o,u){for(;n.nodeType===1;){var h=o;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[Hr])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(g=n.getAttribute("rel"),g==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(g!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(g=n.getAttribute("src"),(g!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&g&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var g=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===g)return n}else return n;if(n=Ir(n.nextSibling),n===null)break}return null}function Dw(n,a,o){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=Ir(n.nextSibling),n===null))return null;return n}function Cp(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function qw(n,a){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")a();else{var u=function(){a(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function Ir(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}var Ip=null;function x_(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(a===0)return n;a--}else o==="/$"&&a++}n=n.previousSibling}return null}function O_(n,a,o){switch(a=rf(o),n){case"html":if(n=a.documentElement,!n)throw Error(i(452));return n;case"head":if(n=a.head,!n)throw Error(i(453));return n;case"body":if(n=a.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function Ql(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);Qt(n)}var hr=new Map,D_=new Set;function af(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Pi=ce.d;ce.d={f:kw,r:Nw,D:Pw,C:Mw,L:Lw,m:Vw,X:jw,S:Uw,M:zw};function kw(){var n=Pi.f(),a=Qc();return n||a}function Nw(n){var a=Un(n);a!==null&&a.tag===5&&a.type==="form"?Wy(a):Pi.r(n)}var So=typeof document>"u"?null:document;function q_(n,a,o){var u=So;if(u&&typeof a=="string"&&a){var h=kt(a);h='link[rel="'+n+'"][href="'+h+'"]',typeof o=="string"&&(h+='[crossorigin="'+o+'"]'),D_.has(h)||(D_.add(h),n={rel:n,crossOrigin:o,href:a},u.querySelector(h)===null&&(a=u.createElement("link"),cn(a,"link",n),_t(a),u.head.appendChild(a)))}}function Pw(n){Pi.D(n),q_("dns-prefetch",n,null)}function Mw(n,a){Pi.C(n,a),q_("preconnect",n,a)}function Lw(n,a,o){Pi.L(n,a,o);var u=So;if(u&&n&&a){var h='link[rel="preload"][as="'+kt(a)+'"]';a==="image"&&o&&o.imageSrcSet?(h+='[imagesrcset="'+kt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(h+='[imagesizes="'+kt(o.imageSizes)+'"]')):h+='[href="'+kt(n)+'"]';var g=h;switch(a){case"style":g=Ao(n);break;case"script":g=wo(n)}hr.has(g)||(n=v({rel:"preload",href:a==="image"&&o&&o.imageSrcSet?void 0:n,as:a},o),hr.set(g,n),u.querySelector(h)!==null||a==="style"&&u.querySelector(Xl(g))||a==="script"&&u.querySelector(Wl(g))||(a=u.createElement("link"),cn(a,"link",n),_t(a),u.head.appendChild(a)))}}function Vw(n,a){Pi.m(n,a);var o=So;if(o&&n){var u=a&&typeof a.as=="string"?a.as:"script",h='link[rel="modulepreload"][as="'+kt(u)+'"][href="'+kt(n)+'"]',g=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=wo(n)}if(!hr.has(g)&&(n=v({rel:"modulepreload",href:n},a),hr.set(g,n),o.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Wl(g)))return}u=o.createElement("link"),cn(u,"link",n),_t(u),o.head.appendChild(u)}}}function Uw(n,a,o){Pi.S(n,a,o);var u=So;if(u&&n){var h=Xt(u).hoistableStyles,g=Ao(n);a=a||"default";var E=h.get(g);if(!E){var S={loading:0,preload:null};if(E=u.querySelector(Xl(g)))S.loading=5;else{n=v({rel:"stylesheet",href:n,"data-precedence":a},o),(o=hr.get(g))&&xp(n,o);var q=E=u.createElement("link");_t(q),cn(q,"link",n),q._p=new Promise(function(X,ne){q.onload=X,q.onerror=ne}),q.addEventListener("load",function(){S.loading|=1}),q.addEventListener("error",function(){S.loading|=2}),S.loading|=4,sf(E,a,u)}E={type:"stylesheet",instance:E,count:1,state:S},h.set(g,E)}}}function jw(n,a){Pi.X(n,a);var o=So;if(o&&n){var u=Xt(o).hoistableScripts,h=wo(n),g=u.get(h);g||(g=o.querySelector(Wl(h)),g||(n=v({src:n,async:!0},a),(a=hr.get(h))&&Op(n,a),g=o.createElement("script"),_t(g),cn(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(h,g))}}function zw(n,a){Pi.M(n,a);var o=So;if(o&&n){var u=Xt(o).hoistableScripts,h=wo(n),g=u.get(h);g||(g=o.querySelector(Wl(h)),g||(n=v({src:n,async:!0,type:"module"},a),(a=hr.get(h))&&Op(n,a),g=o.createElement("script"),_t(g),cn(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(h,g))}}function k_(n,a,o,u){var h=(h=Se.current)?af(h):null;if(!h)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(a=Ao(o.href),o=Xt(h).hoistableStyles,u=o.get(a),u||(u={type:"style",instance:null,count:0,state:null},o.set(a,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=Ao(o.href);var g=Xt(h).hoistableStyles,E=g.get(n);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(n,E),(g=h.querySelector(Xl(n)))&&!g._p&&(E.instance=g,E.state.loading=5),hr.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},hr.set(n,o),g||Bw(h,n,o,E.state))),a&&u===null)throw Error(i(528,""));return E}if(a&&u!==null)throw Error(i(529,""));return null;case"script":return a=o.async,o=o.src,typeof o=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=wo(o),o=Xt(h).hoistableScripts,u=o.get(a),u||(u={type:"script",instance:null,count:0,state:null},o.set(a,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function Ao(n){return'href="'+kt(n)+'"'}function Xl(n){return'link[rel="stylesheet"]['+n+"]"}function N_(n){return v({},n,{"data-precedence":n.precedence,precedence:null})}function Bw(n,a,o,u){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?u.loading=1:(a=n.createElement("link"),u.preload=a,a.addEventListener("load",function(){return u.loading|=1}),a.addEventListener("error",function(){return u.loading|=2}),cn(a,"link",o),_t(a),n.head.appendChild(a))}function wo(n){return'[src="'+kt(n)+'"]'}function Wl(n){return"script[async]"+n}function P_(n,a,o){if(a.count++,a.instance===null)switch(a.type){case"style":var u=n.querySelector('style[data-href~="'+kt(o.href)+'"]');if(u)return a.instance=u,_t(u),u;var h=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),_t(u),cn(u,"style",h),sf(u,o.precedence,n),a.instance=u;case"stylesheet":h=Ao(o.href);var g=n.querySelector(Xl(h));if(g)return a.state.loading|=4,a.instance=g,_t(g),g;u=N_(o),(h=hr.get(h))&&xp(u,h),g=(n.ownerDocument||n).createElement("link"),_t(g);var E=g;return E._p=new Promise(function(S,q){E.onload=S,E.onerror=q}),cn(g,"link",u),a.state.loading|=4,sf(g,o.precedence,n),a.instance=g;case"script":return g=wo(o.src),(h=n.querySelector(Wl(g)))?(a.instance=h,_t(h),h):(u=o,(h=hr.get(g))&&(u=v({},o),Op(u,h)),n=n.ownerDocument||n,h=n.createElement("script"),_t(h),cn(h,"link",u),n.head.appendChild(h),a.instance=h);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(u=a.instance,a.state.loading|=4,sf(u,o.precedence,n));return a.instance}function sf(n,a,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,g=h,E=0;E<u.length;E++){var S=u[E];if(S.dataset.precedence===a)g=S;else if(g!==h)break}g?g.parentNode.insertBefore(n,g.nextSibling):(a=o.nodeType===9?o.head:o,a.insertBefore(n,a.firstChild))}function xp(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function Op(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var of=null;function M_(n,a,o){if(of===null){var u=new Map,h=of=new Map;h.set(o,u)}else h=of,u=h.get(o),u||(u=new Map,h.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),h=0;h<o.length;h++){var g=o[h];if(!(g[Hr]||g[At]||n==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var E=g.getAttribute(a)||"";E=n+E;var S=u.get(E);S?S.push(g):u.set(E,[g])}}return u}function L_(n,a,o){n=n.ownerDocument||n,n.head.insertBefore(o,a==="title"?n.querySelector("head > title"):null)}function Hw(n,a,o){if(o===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function V_(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Zl=null;function Fw(){}function Gw(n,a,o){if(Zl===null)throw Error(i(475));var u=Zl;if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=Ao(o.href),g=n.querySelector(Xl(h));if(g){n=g._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=lf.bind(u),n.then(u,u)),a.state.loading|=4,a.instance=g,_t(g);return}g=n.ownerDocument||n,o=N_(o),(h=hr.get(h))&&xp(o,h),g=g.createElement("link"),_t(g);var E=g;E._p=new Promise(function(S,q){E.onload=S,E.onerror=q}),cn(g,"link",o),a.instance=g}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(u.count++,a=lf.bind(u),n.addEventListener("load",a),n.addEventListener("error",a))}}function Yw(){if(Zl===null)throw Error(i(475));var n=Zl;return n.stylesheets&&n.count===0&&Dp(n,n.stylesheets),0<n.count?function(a){var o=setTimeout(function(){if(n.stylesheets&&Dp(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(o)}}:null}function lf(){if(this.count--,this.count===0){if(this.stylesheets)Dp(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var uf=null;function Dp(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,uf=new Map,a.forEach(Kw,n),uf=null,lf.call(n))}function Kw(n,a){if(!(a.state.loading&4)){var o=uf.get(n);if(o)var u=o.get(null);else{o=new Map,uf.set(n,o);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<h.length;g++){var E=h[g];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}h=a.instance,E=h.getAttribute("data-precedence"),g=o.get(E)||u,g===u&&o.set(null,h),o.set(E,h),this.count++,u=lf.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),g?g.parentNode.insertBefore(h,g.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),a.state.loading|=4}}var Jl={$$typeof:Q,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function $w(n,a,o,u,h,g,E,S){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tr(0),this.hiddenUpdates=Tr(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=g,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function U_(n,a,o,u,h,g,E,S,q,X,ne,ae){return n=new $w(n,a,o,E,S,q,X,ae),a=1,g===!0&&(a|=24),g=Hn(3,null,null,a),n.current=g,g.stateNode=n,a=hd(),a.refCount++,n.pooledCache=a,a.refCount++,g.memoizedState={element:u,isDehydrated:o,cache:a},gd(g),n}function j_(n){return n?(n=to,n):to}function z_(n,a,o,u,h,g){h=j_(h),u.context===null?u.context=h:u.pendingContext=h,u=ia(a),u.payload={element:o},g=g===void 0?null:g,g!==null&&(u.callback=g),o=aa(n,u,a),o!==null&&($n(o,n,a),xl(o,n,a))}function B_(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<a?o:a}}function qp(n,a){B_(n,a),(n=n.alternate)&&B_(n,a)}function H_(n){if(n.tag===13){var a=eo(n,67108864);a!==null&&$n(a,n,67108864),qp(n,67108864)}}var cf=!0;function Qw(n,a,o,u){var h=J.T;J.T=null;var g=ce.p;try{ce.p=2,kp(n,a,o,u)}finally{ce.p=g,J.T=h}}function Xw(n,a,o,u){var h=J.T;J.T=null;var g=ce.p;try{ce.p=8,kp(n,a,o,u)}finally{ce.p=g,J.T=h}}function kp(n,a,o,u){if(cf){var h=Np(u);if(h===null)Ep(n,a,u,ff,o),G_(n,u);else if(Zw(h,n,a,o,u))u.stopPropagation();else if(G_(n,u),a&4&&-1<Ww.indexOf(n)){for(;h!==null;){var g=Un(h);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var E=$t(g.pendingLanes);if(E!==0){var S=g;for(S.pendingLanes|=2,S.entangledLanes|=2;E;){var q=1<<31-Ut(E);S.entanglements[1]|=q,E&=~q}ni(g),(rt&6)===0&&(Kc=Vt()+500,Yl(0))}}break;case 13:S=eo(g,2),S!==null&&$n(S,g,2),Qc(),qp(g,2)}if(g=Np(u),g===null&&Ep(n,a,u,ff,o),g===h)break;h=g}h!==null&&u.stopPropagation()}else Ep(n,a,u,null,o)}}function Np(n){return n=rr(n),Pp(n)}var ff=null;function Pp(n){if(ff=null,n=tr(n),n!==null){var a=l(n);if(a===null)n=null;else{var o=a.tag;if(o===13){if(n=c(a),n!==null)return n;n=null}else if(o===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return ff=n,null}function F_(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qi()){case Mr:return 2;case pi:return 8;case Lr:case al:return 32;case Vr:return 268435456;default:return 32}default:return 32}}var Mp=!1,va=null,_a=null,Ea=null,eu=new Map,tu=new Map,ba=[],Ww="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function G_(n,a){switch(n){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":eu.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":tu.delete(a.pointerId)}}function nu(n,a,o,u,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:a,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},a!==null&&(a=Un(a),a!==null&&H_(a)),n):(n.eventSystemFlags|=u,a=n.targetContainers,h!==null&&a.indexOf(h)===-1&&a.push(h),n)}function Zw(n,a,o,u,h){switch(a){case"focusin":return va=nu(va,n,a,o,u,h),!0;case"dragenter":return _a=nu(_a,n,a,o,u,h),!0;case"mouseover":return Ea=nu(Ea,n,a,o,u,h),!0;case"pointerover":var g=h.pointerId;return eu.set(g,nu(eu.get(g)||null,n,a,o,u,h)),!0;case"gotpointercapture":return g=h.pointerId,tu.set(g,nu(tu.get(g)||null,n,a,o,u,h)),!0}return!1}function Y_(n){var a=tr(n.target);if(a!==null){var o=l(a);if(o!==null){if(a=o.tag,a===13){if(a=c(o),a!==null){n.blockedOn=a,Zi(n.priority,function(){if(o.tag===13){var u=Kn();u=wn(u);var h=eo(o,u);h!==null&&$n(h,o,u),qp(o,u)}});return}}else if(a===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function hf(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var o=Np(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);yi=u,o.target.dispatchEvent(u),yi=null}else return a=Un(o),a!==null&&H_(a),n.blockedOn=o,!1;a.shift()}return!0}function K_(n,a,o){hf(n)&&o.delete(a)}function Jw(){Mp=!1,va!==null&&hf(va)&&(va=null),_a!==null&&hf(_a)&&(_a=null),Ea!==null&&hf(Ea)&&(Ea=null),eu.forEach(K_),tu.forEach(K_)}function df(n,a){n.blockedOn===a&&(n.blockedOn=null,Mp||(Mp=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Jw)))}var pf=null;function $_(n){pf!==n&&(pf=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){pf===n&&(pf=null);for(var a=0;a<n.length;a+=3){var o=n[a],u=n[a+1],h=n[a+2];if(typeof u!="function"){if(Pp(u||o)===null)continue;break}var g=Un(o);g!==null&&(n.splice(a,3),a-=3,Pd(g,{pending:!0,data:h,method:o.method,action:u},u,h))}}))}function ru(n){function a(q){return df(q,n)}va!==null&&df(va,n),_a!==null&&df(_a,n),Ea!==null&&df(Ea,n),eu.forEach(a),tu.forEach(a);for(var o=0;o<ba.length;o++){var u=ba[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<ba.length&&(o=ba[0],o.blockedOn===null);)Y_(o),o.blockedOn===null&&ba.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var h=o[u],g=o[u+1],E=h[wt]||null;if(typeof g=="function")E||$_(o);else if(E){var S=null;if(g&&g.hasAttribute("formAction")){if(h=g,E=g[wt]||null)S=E.formAction;else if(Pp(h)!==null)continue}else S=E.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),$_(o)}}}function Lp(n){this._internalRoot=n}mf.prototype.render=Lp.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(i(409));var o=a.current,u=Kn();z_(o,u,n,a,null,null)},mf.prototype.unmount=Lp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;z_(n.current,2,null,n,null,null),Qc(),a[vt]=null}};function mf(n){this._internalRoot=n}mf.prototype.unstable_scheduleHydration=function(n){if(n){var a=Sr();n={blockedOn:null,target:n,priority:a};for(var o=0;o<ba.length&&a!==0&&a<ba[o].priority;o++);ba.splice(o,0,n),o===0&&Y_(n)}};var Q_=e.version;if(Q_!=="19.1.0")throw Error(i(527,Q_,"19.1.0"));ce.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=p(a),n=n!==null?m(n):null,n=n===null?null:n.stateNode,n};var eR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:J,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gf.isDisabled&&gf.supportsFiber)try{tt=gf.inject(eR),Qe=gf}catch{}}return au.createRoot=function(n,a){if(!s(n))throw Error(i(299));var o=!1,u="",h=fv,g=hv,E=dv,S=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(S=a.unstable_transitionCallbacks)),a=U_(n,1,!1,null,null,o,u,h,g,E,S,null),n[vt]=a.current,_p(n),new Lp(a)},au.hydrateRoot=function(n,a,o){if(!s(n))throw Error(i(299));var u=!1,h="",g=fv,E=hv,S=dv,q=null,X=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(q=o.unstable_transitionCallbacks),o.formState!==void 0&&(X=o.formState)),a=U_(n,1,!0,a,o??null,u,h,g,E,S,q,X),a.context=j_(null),o=a.current,u=Kn(),u=wn(u),h=ia(u),h.callback=null,aa(o,h,u),o=u,a.current.lanes=o,An(a,o),ni(a),n[vt]=a.current,_p(n),new mf(a)},au.version="19.1.0",au}var aE;function fR(){if(aE)return jp.exports;aE=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),jp.exports=cR(),jp.exports}var hR=fR(),su={},sE;function dR(){if(sE)return su;sE=1,Object.defineProperty(su,"__esModule",{value:!0}),su.parse=c,su.serialize=m;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,l=(()=>{const T=function(){};return T.prototype=Object.create(null),T})();function c(T,w){const O=new l,V=T.length;if(V<2)return O;const P=(w==null?void 0:w.decode)||v;let B=0;do{const K=T.indexOf("=",B);if(K===-1)break;const Q=T.indexOf(";",B),ie=Q===-1?V:Q;if(K>ie){B=T.lastIndexOf(";",K-1)+1;continue}const D=d(T,B,K),G=p(T,K,D),C=T.slice(D,G);if(O[C]===void 0){let R=d(T,K+1,ie),x=p(T,ie,R);const N=P(T.slice(R,x));O[C]=N}B=ie+1}while(B<V);return O}function d(T,w,O){do{const V=T.charCodeAt(w);if(V!==32&&V!==9)return w}while(++w<O);return O}function p(T,w,O){for(;w>O;){const V=T.charCodeAt(--w);if(V!==32&&V!==9)return w+1}return O}function m(T,w,O){const V=(O==null?void 0:O.encode)||encodeURIComponent;if(!r.test(T))throw new TypeError(`argument name is invalid: ${T}`);const P=V(w);if(!e.test(P))throw new TypeError(`argument val is invalid: ${w}`);let B=T+"="+P;if(!O)return B;if(O.maxAge!==void 0){if(!Number.isInteger(O.maxAge))throw new TypeError(`option maxAge is invalid: ${O.maxAge}`);B+="; Max-Age="+O.maxAge}if(O.domain){if(!t.test(O.domain))throw new TypeError(`option domain is invalid: ${O.domain}`);B+="; Domain="+O.domain}if(O.path){if(!i.test(O.path))throw new TypeError(`option path is invalid: ${O.path}`);B+="; Path="+O.path}if(O.expires){if(!b(O.expires)||!Number.isFinite(O.expires.valueOf()))throw new TypeError(`option expires is invalid: ${O.expires}`);B+="; Expires="+O.expires.toUTCString()}if(O.httpOnly&&(B+="; HttpOnly"),O.secure&&(B+="; Secure"),O.partitioned&&(B+="; Partitioned"),O.priority)switch(typeof O.priority=="string"?O.priority.toLowerCase():void 0){case"low":B+="; Priority=Low";break;case"medium":B+="; Priority=Medium";break;case"high":B+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${O.priority}`)}if(O.sameSite)switch(typeof O.sameSite=="string"?O.sameSite.toLowerCase():O.sameSite){case!0:case"strict":B+="; SameSite=Strict";break;case"lax":B+="; SameSite=Lax";break;case"none":B+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${O.sameSite}`)}return B}function v(T){if(T.indexOf("%")===-1)return T;try{return decodeURIComponent(T)}catch{return T}}function b(T){return s.call(T)==="[object Date]"}return su}dR();var oE="popstate";function pR(r={}){function e(i,s){let{pathname:l,search:c,hash:d}=i.location;return hm("",{pathname:l,search:c,hash:d},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(i,s){return typeof s=="string"?s:Iu(s)}return gR(e,t,null,r)}function bt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function ui(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mR(){return Math.random().toString(36).substring(2,10)}function lE(r,e){return{usr:r.state,key:r.key,idx:e}}function hm(r,e,t=null,i){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Ko(e):e,state:t,key:e&&e.key||i||mR()}}function Iu({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Ko(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let i=r.indexOf("?");i>=0&&(e.search=r.substring(i),r=r.substring(0,i)),r&&(e.pathname=r)}return e}function gR(r,e,t,i={}){let{window:s=document.defaultView,v5Compat:l=!1}=i,c=s.history,d="POP",p=null,m=v();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function v(){return(c.state||{idx:null}).idx}function b(){d="POP";let P=v(),B=P==null?null:P-m;m=P,p&&p({action:d,location:V.location,delta:B})}function T(P,B){d="PUSH";let K=hm(V.location,P,B);m=v()+1;let Q=lE(K,m),ie=V.createHref(K);try{c.pushState(Q,"",ie)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;s.location.assign(ie)}l&&p&&p({action:d,location:V.location,delta:1})}function w(P,B){d="REPLACE";let K=hm(V.location,P,B);m=v();let Q=lE(K,m),ie=V.createHref(K);c.replaceState(Q,"",ie),l&&p&&p({action:d,location:V.location,delta:0})}function O(P){let B=s.location.origin!=="null"?s.location.origin:s.location.href,K=typeof P=="string"?P:Iu(P);return K=K.replace(/ $/,"%20"),bt(B,`No window.location.(origin|href) available to create URL for href: ${K}`),new URL(K,B)}let V={get action(){return d},get location(){return r(s,c)},listen(P){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(oE,b),p=P,()=>{s.removeEventListener(oE,b),p=null}},createHref(P){return e(s,P)},createURL:O,encodeLocation(P){let B=O(P);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:T,replace:w,go(P){return c.go(P)}};return V}function Rb(r,e,t="/"){return yR(r,e,t,!1)}function yR(r,e,t,i){let s=typeof e=="string"?Ko(e):e,l=zi(s.pathname||"/",t);if(l==null)return null;let c=Cb(r);vR(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let m=xR(l);d=CR(c[p],m,i)}return d}function Cb(r,e=[],t=[],i=""){let s=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(bt(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let m=ji([i,p.relativePath]),v=t.concat(p);l.children&&l.children.length>0&&(bt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Cb(l.children,e,v,m)),!(l.path==null&&!l.index)&&e.push({path:m,score:wR(m,l.index),routesMeta:v})};return r.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))s(l,c);else for(let p of Ib(l.path))s(l,c,p)}),e}function Ib(r){let e=r.split("/");if(e.length===0)return[];let[t,...i]=e,s=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return s?[l,""]:[l];let c=Ib(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),s&&d.push(...c),d.map(p=>r.startsWith("/")&&p===""?"/":p)}function vR(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:RR(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var _R=/^:[\w-]+$/,ER=3,bR=2,TR=1,SR=10,AR=-2,uE=r=>r==="*";function wR(r,e){let t=r.split("/"),i=t.length;return t.some(uE)&&(i+=AR),e&&(i+=bR),t.filter(s=>!uE(s)).reduce((s,l)=>s+(_R.test(l)?ER:l===""?TR:SR),i)}function RR(r,e){return r.length===e.length&&r.slice(0,-1).every((i,s)=>i===e[s])?r[r.length-1]-e[e.length-1]:0}function CR(r,e,t=!1){let{routesMeta:i}=r,s={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],m=d===i.length-1,v=l==="/"?e:e.slice(l.length)||"/",b=Yf({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},v),T=p.route;if(!b&&m&&t&&!i[i.length-1].route.index&&(b=Yf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!b)return null;Object.assign(s,b.params),c.push({params:s,pathname:ji([l,b.pathname]),pathnameBase:kR(ji([l,b.pathnameBase])),route:T}),b.pathnameBase!=="/"&&(l=ji([l,b.pathnameBase]))}return c}function Yf(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,i]=IR(r.path,r.caseSensitive,r.end),s=e.match(t);if(!s)return null;let l=s[0],c=l.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:i.reduce((m,{paramName:v,isOptional:b},T)=>{if(v==="*"){let O=d[T]||"";c=l.slice(0,l.length-O.length).replace(/(.)\/+$/,"$1")}const w=d[T];return b&&!w?m[v]=void 0:m[v]=(w||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:c,pattern:r}}function IR(r,e=!1,t=!0){ui(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let i=[],s="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(i.push({paramName:"*"}),s+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":r!==""&&r!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),i]}function xR(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ui(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function zi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=r.charAt(t);return i&&i!=="/"?null:r.slice(t)||"/"}function OR(r,e="/"){let{pathname:t,search:i="",hash:s=""}=typeof r=="string"?Ko(r):r;return{pathname:t?t.startsWith("/")?t:DR(t,e):e,search:NR(i),hash:PR(s)}}function DR(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Fp(r,e,t,i){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function qR(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function xb(r){let e=qR(r);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Ob(r,e,t,i=!1){let s;typeof r=="string"?s=Ko(r):(s={...r},bt(!s.pathname||!s.pathname.includes("?"),Fp("?","pathname","search",s)),bt(!s.pathname||!s.pathname.includes("#"),Fp("#","pathname","hash",s)),bt(!s.search||!s.search.includes("#"),Fp("#","search","hash",s)));let l=r===""||s.pathname==="",c=l?"/":s.pathname,d;if(c==null)d=t;else{let b=e.length-1;if(!i&&c.startsWith("..")){let T=c.split("/");for(;T[0]==="..";)T.shift(),b-=1;s.pathname=T.join("/")}d=b>=0?e[b]:"/"}let p=OR(s,d),m=c&&c!=="/"&&c.endsWith("/"),v=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(m||v)&&(p.pathname+="/"),p}var ji=r=>r.join("/").replace(/\/\/+/g,"/"),kR=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),NR=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,PR=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function MR(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Db=["POST","PUT","PATCH","DELETE"];new Set(Db);var LR=["GET",...Db];new Set(LR);var $o=M.createContext(null);$o.displayName="DataRouter";var mh=M.createContext(null);mh.displayName="DataRouterState";var qb=M.createContext({isTransitioning:!1});qb.displayName="ViewTransition";var VR=M.createContext(new Map);VR.displayName="Fetchers";var UR=M.createContext(null);UR.displayName="Await";var hi=M.createContext(null);hi.displayName="Navigation";var Hu=M.createContext(null);Hu.displayName="Location";var Yi=M.createContext({outlet:null,matches:[],isDataRoute:!1});Yi.displayName="Route";var Gm=M.createContext(null);Gm.displayName="RouteError";function jR(r,{relative:e}={}){bt(Fu(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=M.useContext(hi),{hash:s,pathname:l,search:c}=Gu(r,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:ji([t,l])),i.createHref({pathname:d,search:c,hash:s})}function Fu(){return M.useContext(Hu)!=null}function xs(){return bt(Fu(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(Hu).location}var kb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Nb(r){M.useContext(hi).static||M.useLayoutEffect(r)}function Ym(){let{isDataRoute:r}=M.useContext(Yi);return r?JR():zR()}function zR(){bt(Fu(),"useNavigate() may be used only in the context of a <Router> component.");let r=M.useContext($o),{basename:e,navigator:t}=M.useContext(hi),{matches:i}=M.useContext(Yi),{pathname:s}=xs(),l=JSON.stringify(xb(i)),c=M.useRef(!1);return Nb(()=>{c.current=!0}),M.useCallback((p,m={})=>{if(ui(c.current,kb),!c.current)return;if(typeof p=="number"){t.go(p);return}let v=Ob(p,JSON.parse(l),s,m.relative==="path");r==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:ji([e,v.pathname])),(m.replace?t.replace:t.push)(v,m.state,m)},[e,t,l,s,r])}M.createContext(null);function Gu(r,{relative:e}={}){let{matches:t}=M.useContext(Yi),{pathname:i}=xs(),s=JSON.stringify(xb(t));return M.useMemo(()=>Ob(r,JSON.parse(s),i,e==="path"),[r,s,i,e])}function BR(r,e){return Pb(r,e)}function Pb(r,e,t,i){var K;bt(Fu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s,static:l}=M.useContext(hi),{matches:c}=M.useContext(Yi),d=c[c.length-1],p=d?d.params:{},m=d?d.pathname:"/",v=d?d.pathnameBase:"/",b=d&&d.route;{let Q=b&&b.path||"";Mb(m,!b||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let T=xs(),w;if(e){let Q=typeof e=="string"?Ko(e):e;bt(v==="/"||((K=Q.pathname)==null?void 0:K.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),w=Q}else w=T;let O=w.pathname||"/",V=O;if(v!=="/"){let Q=v.replace(/^\//,"").split("/");V="/"+O.replace(/^\//,"").split("/").slice(Q.length).join("/")}let P=!l&&t&&t.matches&&t.matches.length>0?t.matches:Rb(r,{pathname:V});ui(b||P!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),ui(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=KR(P&&P.map(Q=>Object.assign({},Q,{params:Object.assign({},p,Q.params),pathname:ji([v,s.encodeLocation?s.encodeLocation(Q.pathname).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?v:ji([v,s.encodeLocation?s.encodeLocation(Q.pathnameBase).pathname:Q.pathnameBase])})),c,t,i);return e&&B?M.createElement(Hu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},B):B}function HR(){let r=ZR(),e=MR(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,i="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:l},"ErrorBoundary")," or"," ",M.createElement("code",{style:l},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),t?M.createElement("pre",{style:s},t):null,c)}var FR=M.createElement(HR,null),GR=class extends M.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?M.createElement(Yi.Provider,{value:this.props.routeContext},M.createElement(Gm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function YR({routeContext:r,match:e,children:t}){let i=M.useContext($o);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),M.createElement(Yi.Provider,{value:r},t)}function KR(r,e=[],t=null,i=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let s=r,l=t==null?void 0:t.errors;if(l!=null){let p=s.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);bt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),s=s.slice(0,Math.min(s.length,p+1))}let c=!1,d=-1;if(t)for(let p=0;p<s.length;p++){let m=s[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:v,errors:b}=t,T=m.route.loader&&!v.hasOwnProperty(m.route.id)&&(!b||b[m.route.id]===void 0);if(m.route.lazy||T){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((p,m,v)=>{let b,T=!1,w=null,O=null;t&&(b=l&&m.route.id?l[m.route.id]:void 0,w=m.route.errorElement||FR,c&&(d<0&&v===0?(Mb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,O=null):d===v&&(T=!0,O=m.route.hydrateFallbackElement||null)));let V=e.concat(s.slice(0,v+1)),P=()=>{let B;return b?B=w:T?B=O:m.route.Component?B=M.createElement(m.route.Component,null):m.route.element?B=m.route.element:B=p,M.createElement(YR,{match:m,routeContext:{outlet:p,matches:V,isDataRoute:t!=null},children:B})};return t&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?M.createElement(GR,{location:t.location,revalidation:t.revalidation,component:w,error:b,children:P(),routeContext:{outlet:null,matches:V,isDataRoute:!0}}):P()},null)}function Km(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $R(r){let e=M.useContext($o);return bt(e,Km(r)),e}function QR(r){let e=M.useContext(mh);return bt(e,Km(r)),e}function XR(r){let e=M.useContext(Yi);return bt(e,Km(r)),e}function $m(r){let e=XR(r),t=e.matches[e.matches.length-1];return bt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function WR(){return $m("useRouteId")}function ZR(){var i;let r=M.useContext(Gm),e=QR("useRouteError"),t=$m("useRouteError");return r!==void 0?r:(i=e.errors)==null?void 0:i[t]}function JR(){let{router:r}=$R("useNavigate"),e=$m("useNavigate"),t=M.useRef(!1);return Nb(()=>{t.current=!0}),M.useCallback(async(s,l={})=>{ui(t.current,kb),t.current&&(typeof s=="number"?r.navigate(s):await r.navigate(s,{fromRouteId:e,...l}))},[r,e])}var cE={};function Mb(r,e,t){!e&&!cE[r]&&(cE[r]=!0,ui(!1,t))}M.memo(e1);function e1({routes:r,future:e,state:t}){return Pb(r,void 0,t,e)}function Or(r){bt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function t1({basename:r="/",children:e=null,location:t,navigationType:i="POP",navigator:s,static:l=!1}){bt(!Fu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=r.replace(/^\/*/,"/"),d=M.useMemo(()=>({basename:c,navigator:s,static:l,future:{}}),[c,s,l]);typeof t=="string"&&(t=Ko(t));let{pathname:p="/",search:m="",hash:v="",state:b=null,key:T="default"}=t,w=M.useMemo(()=>{let O=zi(p,c);return O==null?null:{location:{pathname:O,search:m,hash:v,state:b,key:T},navigationType:i}},[c,p,m,v,b,T,i]);return ui(w!=null,`<Router basename="${c}"> is not able to match the URL "${p}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:M.createElement(hi.Provider,{value:d},M.createElement(Hu.Provider,{children:e,value:w}))}function Lb({children:r,location:e}){return BR(dm(r),e)}function dm(r,e=[]){let t=[];return M.Children.forEach(r,(i,s)=>{if(!M.isValidElement(i))return;let l=[...e,s];if(i.type===M.Fragment){t.push.apply(t,dm(i.props.children,l));return}bt(i.type===Or,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),bt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=dm(i.props.children,l)),t.push(c)}),t}var Df="get",qf="application/x-www-form-urlencoded";function gh(r){return r!=null&&typeof r.tagName=="string"}function n1(r){return gh(r)&&r.tagName.toLowerCase()==="button"}function r1(r){return gh(r)&&r.tagName.toLowerCase()==="form"}function i1(r){return gh(r)&&r.tagName.toLowerCase()==="input"}function a1(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function s1(r,e){return r.button===0&&(!e||e==="_self")&&!a1(r)}var yf=null;function o1(){if(yf===null)try{new FormData(document.createElement("form"),0),yf=!1}catch{yf=!0}return yf}var l1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gp(r){return r!=null&&!l1.has(r)?(ui(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qf}"`),null):r}function u1(r,e){let t,i,s,l,c;if(r1(r)){let d=r.getAttribute("action");i=d?zi(d,e):null,t=r.getAttribute("method")||Df,s=Gp(r.getAttribute("enctype"))||qf,l=new FormData(r)}else if(n1(r)||i1(r)&&(r.type==="submit"||r.type==="image")){let d=r.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||d.getAttribute("action");if(i=p?zi(p,e):null,t=r.getAttribute("formmethod")||d.getAttribute("method")||Df,s=Gp(r.getAttribute("formenctype"))||Gp(d.getAttribute("enctype"))||qf,l=new FormData(d,r),!o1()){let{name:m,type:v,value:b}=r;if(v==="image"){let T=m?`${m}.`:"";l.append(`${T}x`,"0"),l.append(`${T}y`,"0")}else m&&l.append(m,b)}}else{if(gh(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Df,i=null,s=qf,c=r}return l&&s==="text/plain"&&(c=l,l=void 0),{action:i,method:t.toLowerCase(),encType:s,formData:l,body:c}}function Qm(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function c1(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function f1(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function h1(r,e,t){let i=await Promise.all(r.map(async s=>{let l=e.routes[s.route.id];if(l){let c=await c1(l,t);return c.links?c.links():[]}return[]}));return g1(i.flat(1).filter(f1).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function fE(r,e,t,i,s,l){let c=(p,m)=>t[m]?p.route.id!==t[m].route.id:!0,d=(p,m)=>{var v;return t[m].pathname!==p.pathname||((v=t[m].route.path)==null?void 0:v.endsWith("*"))&&t[m].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,m)=>c(p,m)||d(p,m)):l==="data"?e.filter((p,m)=>{var b;let v=i.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(c(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let T=p.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((b=t[0])==null?void 0:b.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function d1(r,e,{includeHydrateFallback:t}={}){return p1(r.map(i=>{let s=e.routes[i.route.id];if(!s)return[];let l=[s.module];return s.clientActionModule&&(l=l.concat(s.clientActionModule)),s.clientLoaderModule&&(l=l.concat(s.clientLoaderModule)),t&&s.hydrateFallbackModule&&(l=l.concat(s.hydrateFallbackModule)),s.imports&&(l=l.concat(s.imports)),l}).flat(1))}function p1(r){return[...new Set(r)]}function m1(r){let e={},t=Object.keys(r).sort();for(let i of t)e[i]=r[i];return e}function g1(r,e){let t=new Set;return new Set(e),r.reduce((i,s)=>{let l=JSON.stringify(m1(s));return t.has(l)||(t.add(l),i.push({key:l,link:s})),i},[])}var y1=new Set([100,101,204,205]);function v1(r,e){let t=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t.pathname==="/"?t.pathname="_root.data":e&&zi(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function Vb(){let r=M.useContext($o);return Qm(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function _1(){let r=M.useContext(mh);return Qm(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Xm=M.createContext(void 0);Xm.displayName="FrameworkContext";function Ub(){let r=M.useContext(Xm);return Qm(r,"You must render this element inside a <HydratedRouter> element"),r}function E1(r,e){let t=M.useContext(Xm),[i,s]=M.useState(!1),[l,c]=M.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:v,onTouchStart:b}=e,T=M.useRef(null);M.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let V=B=>{B.forEach(K=>{c(K.isIntersecting)})},P=new IntersectionObserver(V,{threshold:.5});return T.current&&P.observe(T.current),()=>{P.disconnect()}}},[r]),M.useEffect(()=>{if(i){let V=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(V)}}},[i]);let w=()=>{s(!0)},O=()=>{s(!1),c(!1)};return t?r!=="intent"?[l,T,{}]:[l,T,{onFocus:ou(d,w),onBlur:ou(p,O),onMouseEnter:ou(m,w),onMouseLeave:ou(v,O),onTouchStart:ou(b,w)}]:[!1,T,{}]}function ou(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function b1({page:r,...e}){let{router:t}=Vb(),i=M.useMemo(()=>Rb(t.routes,r,t.basename),[t.routes,r,t.basename]);return i?M.createElement(S1,{page:r,matches:i,...e}):null}function T1(r){let{manifest:e,routeModules:t}=Ub(),[i,s]=M.useState([]);return M.useEffect(()=>{let l=!1;return h1(r,e,t).then(c=>{l||s(c)}),()=>{l=!0}},[r,e,t]),i}function S1({page:r,matches:e,...t}){let i=xs(),{manifest:s,routeModules:l}=Ub(),{basename:c}=Vb(),{loaderData:d,matches:p}=_1(),m=M.useMemo(()=>fE(r,e,p,s,i,"data"),[r,e,p,s,i]),v=M.useMemo(()=>fE(r,e,p,s,i,"assets"),[r,e,p,s,i]),b=M.useMemo(()=>{if(r===i.pathname+i.search+i.hash)return[];let O=new Set,V=!1;if(e.forEach(B=>{var Q;let K=s.routes[B.route.id];!K||!K.hasLoader||(!m.some(ie=>ie.route.id===B.route.id)&&B.route.id in d&&((Q=l[B.route.id])!=null&&Q.shouldRevalidate)||K.hasClientLoader?V=!0:O.add(B.route.id))}),O.size===0)return[];let P=v1(r,c);return V&&O.size>0&&P.searchParams.set("_routes",e.filter(B=>O.has(B.route.id)).map(B=>B.route.id).join(",")),[P.pathname+P.search]},[c,d,i,s,m,e,r,l]),T=M.useMemo(()=>d1(v,s),[v,s]),w=T1(v);return M.createElement(M.Fragment,null,b.map(O=>M.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...t})),T.map(O=>M.createElement("link",{key:O,rel:"modulepreload",href:O,...t})),w.map(({key:O,link:V})=>M.createElement("link",{key:O,...V})))}function A1(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var jb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{jb&&(window.__reactRouterVersion="7.5.2")}catch{}function w1({basename:r,children:e,window:t}){let i=M.useRef();i.current==null&&(i.current=pR({window:t,v5Compat:!0}));let s=i.current,[l,c]=M.useState({action:s.action,location:s.location}),d=M.useCallback(p=>{M.startTransition(()=>c(p))},[c]);return M.useLayoutEffect(()=>s.listen(d),[s,d]),M.createElement(t1,{basename:r,children:e,location:l.location,navigationType:l.action,navigator:s})}var zb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mi=M.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:s,reloadDocument:l,replace:c,state:d,target:p,to:m,preventScrollReset:v,viewTransition:b,...T},w){let{basename:O}=M.useContext(hi),V=typeof m=="string"&&zb.test(m),P,B=!1;if(typeof m=="string"&&V&&(P=m,jb))try{let x=new URL(window.location.href),N=m.startsWith("//")?new URL(x.protocol+m):new URL(m),k=zi(N.pathname,O);N.origin===x.origin&&k!=null?m=k+N.search+N.hash:B=!0}catch{ui(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let K=jR(m,{relative:s}),[Q,ie,D]=E1(i,T),G=x1(m,{replace:c,state:d,target:p,preventScrollReset:v,relative:s,viewTransition:b});function C(x){e&&e(x),x.defaultPrevented||G(x)}let R=M.createElement("a",{...T,...D,href:P||K,onClick:B||l?e:C,ref:A1(w,ie),target:p,"data-discover":!V&&t==="render"?"true":void 0});return Q&&!V?M.createElement(M.Fragment,null,R,M.createElement(b1,{page:K})):R});Mi.displayName="Link";var R1=M.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:s=!1,style:l,to:c,viewTransition:d,children:p,...m},v){let b=Gu(c,{relative:m.relative}),T=xs(),w=M.useContext(mh),{navigator:O,basename:V}=M.useContext(hi),P=w!=null&&N1(b)&&d===!0,B=O.encodeLocation?O.encodeLocation(b).pathname:b.pathname,K=T.pathname,Q=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;t||(K=K.toLowerCase(),Q=Q?Q.toLowerCase():null,B=B.toLowerCase()),Q&&V&&(Q=zi(Q,V)||Q);const ie=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let D=K===B||!s&&K.startsWith(B)&&K.charAt(ie)==="/",G=Q!=null&&(Q===B||!s&&Q.startsWith(B)&&Q.charAt(B.length)==="/"),C={isActive:D,isPending:G,isTransitioning:P},R=D?e:void 0,x;typeof i=="function"?x=i(C):x=[i,D?"active":null,G?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let N=typeof l=="function"?l(C):l;return M.createElement(Mi,{...m,"aria-current":R,className:x,ref:v,style:N,to:c,viewTransition:d},typeof p=="function"?p(C):p)});R1.displayName="NavLink";var C1=M.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:s,state:l,method:c=Df,action:d,onSubmit:p,relative:m,preventScrollReset:v,viewTransition:b,...T},w)=>{let O=q1(),V=k1(d,{relative:m}),P=c.toLowerCase()==="get"?"get":"post",B=typeof d=="string"&&zb.test(d),K=Q=>{if(p&&p(Q),Q.defaultPrevented)return;Q.preventDefault();let ie=Q.nativeEvent.submitter,D=(ie==null?void 0:ie.getAttribute("formmethod"))||c;O(ie||Q.currentTarget,{fetcherKey:e,method:D,navigate:t,replace:s,state:l,relative:m,preventScrollReset:v,viewTransition:b})};return M.createElement("form",{ref:w,method:P,action:V,onSubmit:i?p:K,...T,"data-discover":!B&&r==="render"?"true":void 0})});C1.displayName="Form";function I1(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bb(r){let e=M.useContext($o);return bt(e,I1(r)),e}function x1(r,{target:e,replace:t,state:i,preventScrollReset:s,relative:l,viewTransition:c}={}){let d=Ym(),p=xs(),m=Gu(r,{relative:l});return M.useCallback(v=>{if(s1(v,e)){v.preventDefault();let b=t!==void 0?t:Iu(p)===Iu(m);d(r,{replace:b,state:i,preventScrollReset:s,relative:l,viewTransition:c})}},[p,d,m,t,i,e,r,s,l,c])}var O1=0,D1=()=>`__${String(++O1)}__`;function q1(){let{router:r}=Bb("useSubmit"),{basename:e}=M.useContext(hi),t=WR();return M.useCallback(async(i,s={})=>{let{action:l,method:c,encType:d,formData:p,body:m}=u1(i,e);if(s.navigate===!1){let v=s.fetcherKey||D1();await r.fetch(v,t,s.action||l,{preventScrollReset:s.preventScrollReset,formData:p,body:m,formMethod:s.method||c,formEncType:s.encType||d,flushSync:s.flushSync})}else await r.navigate(s.action||l,{preventScrollReset:s.preventScrollReset,formData:p,body:m,formMethod:s.method||c,formEncType:s.encType||d,replace:s.replace,state:s.state,fromRouteId:t,flushSync:s.flushSync,viewTransition:s.viewTransition})},[r,e,t])}function k1(r,{relative:e}={}){let{basename:t}=M.useContext(hi),i=M.useContext(Yi);bt(i,"useFormAction must be used inside a RouteContext");let[s]=i.matches.slice(-1),l={...Gu(r||".",{relative:e})},c=xs();if(r==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(v=>v==="")){d.delete("index"),p.filter(b=>b).forEach(b=>d.append("index",b));let v=d.toString();l.search=v?`?${v}`:""}}return(!r||r===".")&&s.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:ji([t,l.pathname])),Iu(l)}function N1(r,e={}){let t=M.useContext(qb);bt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Bb("useViewTransitionState"),s=Gu(r,{relative:e.relative});if(!t.isTransitioning)return!1;let l=zi(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=zi(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Yf(s.pathname,c)!=null||Yf(s.pathname,l)!=null}new TextEncoder;[...y1];const P1=()=>{};var hE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let s=r.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},M1=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const s=r[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const l=r[t++];e[i++]=String.fromCharCode((s&31)<<6|l&63)}else if(s>239&&s<365){const l=r[t++],c=r[t++],d=r[t++],p=((s&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=r[t++],c=r[t++];e[i++]=String.fromCharCode((s&15)<<12|(l&63)<<6|c&63)}}return e.join("")},Fb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<r.length;s+=3){const l=r[s],c=s+1<r.length,d=c?r[s+1]:0,p=s+2<r.length,m=p?r[s+2]:0,v=l>>2,b=(l&3)<<4|d>>4;let T=(d&15)<<2|m>>6,w=m&63;p||(w=64,c||(T=64)),i.push(t[v],t[b],t[T],t[w])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Hb(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):M1(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<r.length;){const l=t[r.charAt(s++)],d=s<r.length?t[r.charAt(s)]:0;++s;const m=s<r.length?t[r.charAt(s)]:64;++s;const b=s<r.length?t[r.charAt(s)]:64;if(++s,l==null||d==null||m==null||b==null)throw new L1;const T=l<<2|d>>4;if(i.push(T),m!==64){const w=d<<4&240|m>>2;if(i.push(w),b!==64){const O=m<<6&192|b;i.push(O)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class L1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const V1=function(r){const e=Hb(r);return Fb.encodeByteArray(e,!0)},Kf=function(r){return V1(r).replace(/\./g,"")},Gb=function(r){try{return Fb.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=()=>U1().__FIREBASE_DEFAULTS__,z1=()=>{if(typeof process>"u"||typeof hE>"u")return;const r=hE.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},B1=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Gb(r[1]);return e&&JSON.parse(e)},yh=()=>{try{return P1()||j1()||z1()||B1()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Yb=r=>{var e,t;return(t=(e=yh())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},H1=r=>{const e=Yb(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Kb=()=>{var r;return(r=yh())===null||r===void 0?void 0:r.config},$b=r=>{var e;return(e=yh())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Kf(JSON.stringify(t)),Kf(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Y1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tn())}function K1(){var r;const e=(r=yh())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Q1(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function X1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function W1(){const r=Tn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Z1(){return!K1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function J1(){try{return typeof indexedDB=="object"}catch{return!1}}function eC(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var l;e(((l=s.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC="FirebaseError";class Ki extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=tC,Object.setPrototypeOf(this,Ki.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yu.prototype.create)}}class Yu{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,l=this.errors[e],c=l?nC(l,i):"Error",d=`${this.serviceName}: ${c} (${s}).`;return new Ki(s,d,i)}}function nC(r,e){return r.replace(rC,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const rC=/\{\$([^}]+)}/g;function iC(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function As(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const l=r[s],c=e[s];if(dE(l)&&dE(c)){if(!As(l,c))return!1}else if(l!==c)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function dE(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function vu(r){const e={};return r.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,l]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(l)}}),e}function _u(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function aC(r,e){const t=new sC(r,e);return t.subscribe.bind(t)}class sC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");oC(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Yp),s.error===void 0&&(s.error=Yp),s.complete===void 0&&(s.complete=Yp);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oC(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Yp(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(r){return r&&r._delegate?r._delegate:r}class ws{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new F1;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cC(e))try{this.getOrInitializeService({instanceIdentifier:Es})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:s});i.resolve(l)}catch{}}}}clearInstance(e=Es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Es){return this.instances.has(e)}getOptions(e=Es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(s,l);const c=this.instances.get(s);return c&&e(c,s),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:uC(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Es){return this.component?this.component.multipleInstances?e:Es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uC(r){return r===Es?void 0:r}function cC(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new lC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Be||(Be={}));const hC={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},dC=Be.INFO,pC={[Be.DEBUG]:"log",[Be.VERBOSE]:"log",[Be.INFO]:"info",[Be.WARN]:"warn",[Be.ERROR]:"error"},mC=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),s=pC[e];if(s)console[s](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wm{constructor(e){this.name=e,this._logLevel=dC,this._logHandler=mC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Be.DEBUG,...e),this._logHandler(this,Be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Be.VERBOSE,...e),this._logHandler(this,Be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Be.INFO,...e),this._logHandler(this,Be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Be.WARN,...e),this._logHandler(this,Be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Be.ERROR,...e),this._logHandler(this,Be.ERROR,...e)}}const gC=(r,e)=>e.some(t=>r instanceof t);let pE,mE;function yC(){return pE||(pE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vC(){return mE||(mE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qb=new WeakMap,pm=new WeakMap,Xb=new WeakMap,Kp=new WeakMap,Zm=new WeakMap;function _C(r){const e=new Promise((t,i)=>{const s=()=>{r.removeEventListener("success",l),r.removeEventListener("error",c)},l=()=>{t(xa(r.result)),s()},c=()=>{i(r.error),s()};r.addEventListener("success",l),r.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Qb.set(t,r)}).catch(()=>{}),Zm.set(e,r),e}function EC(r){if(pm.has(r))return;const e=new Promise((t,i)=>{const s=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",c),r.removeEventListener("abort",c)},l=()=>{t(),s()},c=()=>{i(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",l),r.addEventListener("error",c),r.addEventListener("abort",c)});pm.set(r,e)}let mm={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return pm.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Xb.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xa(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function bC(r){mm=r(mm)}function TC(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call($p(this),e,...t);return Xb.set(i,e.sort?e.sort():[e]),xa(i)}:vC().includes(r)?function(...e){return r.apply($p(this),e),xa(Qb.get(this))}:function(...e){return xa(r.apply($p(this),e))}}function SC(r){return typeof r=="function"?TC(r):(r instanceof IDBTransaction&&EC(r),gC(r,yC())?new Proxy(r,mm):r)}function xa(r){if(r instanceof IDBRequest)return _C(r);if(Kp.has(r))return Kp.get(r);const e=SC(r);return e!==r&&(Kp.set(r,e),Zm.set(e,r)),e}const $p=r=>Zm.get(r);function AC(r,e,{blocked:t,upgrade:i,blocking:s,terminated:l}={}){const c=indexedDB.open(r,e),d=xa(c);return i&&c.addEventListener("upgradeneeded",p=>{i(xa(c.result),p.oldVersion,p.newVersion,xa(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),s&&p.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const wC=["get","getKey","getAll","getAllKeys","count"],RC=["put","add","delete","clear"],Qp=new Map;function gE(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Qp.get(e))return Qp.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=RC.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||wC.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,s?"readwrite":"readonly");let m=p.store;return i&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),s&&p.done]))[0]};return Qp.set(e,l),l}bC(r=>({...r,get:(e,t,i)=>gE(e,t)||r.get(e,t,i),has:(e,t)=>!!gE(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(IC(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function IC(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gm="@firebase/app",yE="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new Wm("@firebase/app"),xC="@firebase/app-compat",OC="@firebase/analytics-compat",DC="@firebase/analytics",qC="@firebase/app-check-compat",kC="@firebase/app-check",NC="@firebase/auth",PC="@firebase/auth-compat",MC="@firebase/database",LC="@firebase/data-connect",VC="@firebase/database-compat",UC="@firebase/functions",jC="@firebase/functions-compat",zC="@firebase/installations",BC="@firebase/installations-compat",HC="@firebase/messaging",FC="@firebase/messaging-compat",GC="@firebase/performance",YC="@firebase/performance-compat",KC="@firebase/remote-config",$C="@firebase/remote-config-compat",QC="@firebase/storage",XC="@firebase/storage-compat",WC="@firebase/firestore",ZC="@firebase/vertexai",JC="@firebase/firestore-compat",eI="firebase",tI="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym="[DEFAULT]",nI={[gm]:"fire-core",[xC]:"fire-core-compat",[DC]:"fire-analytics",[OC]:"fire-analytics-compat",[kC]:"fire-app-check",[qC]:"fire-app-check-compat",[NC]:"fire-auth",[PC]:"fire-auth-compat",[MC]:"fire-rtdb",[LC]:"fire-data-connect",[VC]:"fire-rtdb-compat",[UC]:"fire-fn",[jC]:"fire-fn-compat",[zC]:"fire-iid",[BC]:"fire-iid-compat",[HC]:"fire-fcm",[FC]:"fire-fcm-compat",[GC]:"fire-perf",[YC]:"fire-perf-compat",[KC]:"fire-rc",[$C]:"fire-rc-compat",[QC]:"fire-gcs",[XC]:"fire-gcs-compat",[WC]:"fire-fst",[JC]:"fire-fst-compat",[ZC]:"fire-vertex","fire-js":"fire-js",[eI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=new Map,rI=new Map,vm=new Map;function vE(r,e){try{r.container.addComponent(e)}catch(t){Bi.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Vo(r){const e=r.name;if(vm.has(e))return Bi.debug(`There were multiple attempts to register component ${e}.`),!1;vm.set(e,r);for(const t of $f.values())vE(t,r);for(const t of rI.values())vE(t,r);return!0}function Jm(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Dr(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Oa=new Yu("app","Firebase",iI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ws("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Oa.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=tI;function Wb(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i=Object.assign({name:ym,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Oa.create("bad-app-name",{appName:String(s)});if(t||(t=Kb()),!t)throw Oa.create("no-options");const l=$f.get(s);if(l){if(As(t,l.options)&&As(i,l.config))return l;throw Oa.create("duplicate-app",{appName:s})}const c=new fC(s);for(const p of vm.values())c.addComponent(p);const d=new aI(t,i,c);return $f.set(s,d),d}function Zb(r=ym){const e=$f.get(r);if(!e&&r===ym&&Kb())return Wb();if(!e)throw Oa.create("no-app",{appName:r});return e}function Da(r,e,t){var i;let s=(i=nI[r])!==null&&i!==void 0?i:r;t&&(s+=`-${t}`);const l=s.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${s}" with version "${e}":`];l&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bi.warn(d.join(" "));return}Vo(new ws(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI="firebase-heartbeat-database",oI=1,xu="firebase-heartbeat-store";let Xp=null;function Jb(){return Xp||(Xp=AC(sI,oI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(xu)}catch(t){console.warn(t)}}}}).catch(r=>{throw Oa.create("idb-open",{originalErrorMessage:r.message})})),Xp}async function lI(r){try{const t=(await Jb()).transaction(xu),i=await t.objectStore(xu).get(eT(r));return await t.done,i}catch(e){if(e instanceof Ki)Bi.warn(e.message);else{const t=Oa.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bi.warn(t.message)}}}async function _E(r,e){try{const i=(await Jb()).transaction(xu,"readwrite");await i.objectStore(xu).put(e,eT(r)),await i.done}catch(t){if(t instanceof Ki)Bi.warn(t.message);else{const i=Oa.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Bi.warn(i.message)}}}function eT(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=1024,cI=30;class fI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dI(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=EE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:s}),this._heartbeatsCache.heartbeats.length>cI){const c=pI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Bi.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=EE(),{heartbeatsToSend:i,unsentEntries:s}=hI(this._heartbeatsCache.heartbeats),l=Kf(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Bi.warn(t),""}}}function EE(){return new Date().toISOString().substring(0,10)}function hI(r,e=uI){const t=[];let i=r.slice();for(const s of r){const l=t.find(c=>c.agent===s.agent);if(l){if(l.dates.push(s.date),bE(t)>e){l.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),bE(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class dI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return J1()?eC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await lI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return _E(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return _E(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function bE(r){return Kf(JSON.stringify({version:2,heartbeats:r})).length}function pI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let i=1;i<r.length;i++)r[i].date<t&&(t=r[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(r){Vo(new ws("platform-logger",e=>new CC(e),"PRIVATE")),Vo(new ws("heartbeat",e=>new fI(e),"PRIVATE")),Da(gm,yE,r),Da(gm,yE,"esm2017"),Da("fire-js","")}mI("");function eg(r,e){var t={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.indexOf(i)<0&&(t[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(r);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(r,i[s])&&(t[i[s]]=r[i[s]]);return t}function tT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gI=tT,nT=new Yu("auth","Firebase",tT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=new Wm("@firebase/auth");function yI(r,...e){Qf.logLevel<=Be.WARN&&Qf.warn(`Auth (${Qo}): ${r}`,...e)}function kf(r,...e){Qf.logLevel<=Be.ERROR&&Qf.error(`Auth (${Qo}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(r,...e){throw tg(r,...e)}function ii(r,...e){return tg(r,...e)}function rT(r,e,t){const i=Object.assign(Object.assign({},gI()),{[e]:t});return new Yu("auth","Firebase",i).create(e,{appName:r.name})}function qa(r){return rT(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tg(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return nT.create(r,...e)}function Ce(r,e,...t){if(!r)throw tg(e,...t)}function Li(r){const e="INTERNAL ASSERTION FAILED: "+r;throw kf(e),new Error(e)}function Hi(r,e){r||Li(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function vI(){return TE()==="http:"||TE()==="https:"}function TE(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vI()||Q1()||"connection"in navigator)?navigator.onLine:!0}function EI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t){this.shortDelay=e,this.longDelay=t,Hi(t>e,"Short delay should be less than long delay!"),this.isMobile=Y1()||X1()}get(){return _I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(r,e){Hi(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Li("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Li("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Li("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],SI=new $u(3e4,6e4);function Os(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ba(r,e,t,i,s={}){return aT(r,s,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=Ku(Object.assign({key:r.config.apiKey},c)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const m=Object.assign({method:e,headers:p},l);return $1()||(m.referrerPolicy="no-referrer"),iT.fetch()(await sT(r,r.config.apiHost,t,d),m)})}async function aT(r,e,t){r._canInitEmulator=!1;const i=Object.assign(Object.assign({},bI),e);try{const s=new wI(r),l=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw vf(r,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,m]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw vf(r,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw vf(r,"email-already-in-use",c);if(p==="USER_DISABLED")throw vf(r,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw rT(r,v,m);Pr(r,v)}}catch(s){if(s instanceof Ki)throw s;Pr(r,"network-request-failed",{message:String(s)})}}async function vh(r,e,t,i,s={}){const l=await Ba(r,e,t,i,s);return"mfaPendingCredential"in l&&Pr(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function sT(r,e,t,i){const s=`${e}${t}?${i}`,l=r,c=l.config.emulator?ng(r.config,s):`${r.config.apiScheme}://${s}`;return TI.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function AI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ii(this.auth,"network-request-failed")),SI.get())})}}function vf(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=ii(r,e,i);return s.customData._tokenResponse=t,s}function SE(r){return r!==void 0&&r.enterprise!==void 0}class RI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return AI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function CI(r,e){return Ba(r,"GET","/v2/recaptchaConfig",Os(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(r,e){return Ba(r,"POST","/v1/accounts:delete",e)}async function Xf(r,e){return Ba(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xI(r,e=!1){const t=Qn(r),i=await t.getIdToken(e),s=rg(i);Ce(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const l=typeof s.firebase=="object"?s.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:s,token:i,authTime:Su(Wp(s.auth_time)),issuedAtTime:Su(Wp(s.iat)),expirationTime:Su(Wp(s.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Wp(r){return Number(r)*1e3}function rg(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return kf("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gb(t);return s?JSON.parse(s):(kf("Failed to decode base64 JWT payload"),null)}catch(s){return kf("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function AE(r){const e=rg(r);return Ce(e,"internal-error"),Ce(typeof e.exp<"u","internal-error"),Ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ou(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ki&&OI(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function OI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Su(this.lastLoginAt),this.creationTime=Su(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wf(r){var e;const t=r.auth,i=await r.getIdToken(),s=await Ou(r,Xf(t,{idToken:i}));Ce(s==null?void 0:s.users.length,t,"internal-error");const l=s.users[0];r._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?oT(l.providerUserInfo):[],d=kI(r.providerData,c),p=r.isAnonymous,m=!(r.email&&l.passwordHash)&&!(d!=null&&d.length),v=p?m:!1,b={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Em(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(r,b)}async function qI(r){const e=Qn(r);await Wf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kI(r,e){return[...r.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function oT(r){return r.map(e=>{var{providerId:t}=e,i=eg(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(r,e){const t=await aT(r,{},async()=>{const i=Ku({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:l}=r.config,c=await sT(r,s,"/v1/token",`key=${l}`),d=await r._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",iT.fetch()(c,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function PI(r,e){return Ba(r,"POST","/v2/accounts:revokeToken",Os(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ce(e.idToken,"internal-error"),Ce(typeof e.idToken<"u","internal-error"),Ce(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):AE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ce(e.length!==0,"internal-error");const t=AE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:l}=await NI(e,t);this.updateTokensAndExpiration(i,s,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:l}=t,c=new No;return i&&(Ce(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),s&&(Ce(typeof s=="string","internal-error",{appName:e}),c.accessToken=s),l&&(Ce(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new No,this.toJSON())}_performRefresh(){return Li("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(r,e){Ce(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class qr{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,l=eg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Em(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Ou(this,this.stsTokenManager.getToken(this.auth,e));return Ce(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return xI(this,e)}reload(){return qI(this)}_assign(e){this!==e&&(Ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Wf(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dr(this.auth.app))return Promise.reject(qa(this.auth));const e=await this.getIdToken();return await Ou(this,II(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,l,c,d,p,m,v;const b=(i=t.displayName)!==null&&i!==void 0?i:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,w=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,O=(c=t.photoURL)!==null&&c!==void 0?c:void 0,V=(d=t.tenantId)!==null&&d!==void 0?d:void 0,P=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,B=(m=t.createdAt)!==null&&m!==void 0?m:void 0,K=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:Q,emailVerified:ie,isAnonymous:D,providerData:G,stsTokenManager:C}=t;Ce(Q&&C,e,"internal-error");const R=No.fromJSON(this.name,C);Ce(typeof Q=="string",e,"internal-error"),Sa(b,e.name),Sa(T,e.name),Ce(typeof ie=="boolean",e,"internal-error"),Ce(typeof D=="boolean",e,"internal-error"),Sa(w,e.name),Sa(O,e.name),Sa(V,e.name),Sa(P,e.name),Sa(B,e.name),Sa(K,e.name);const x=new qr({uid:Q,auth:e,email:T,emailVerified:ie,displayName:b,isAnonymous:D,photoURL:O,phoneNumber:w,tenantId:V,stsTokenManager:R,createdAt:B,lastLoginAt:K});return G&&Array.isArray(G)&&(x.providerData=G.map(N=>Object.assign({},N))),P&&(x._redirectEventId=P),x}static async _fromIdTokenResponse(e,t,i=!1){const s=new No;s.updateFromServerResponse(t);const l=new qr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Wf(l),l}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];Ce(s.localId!==void 0,"internal-error");const l=s.providerUserInfo!==void 0?oT(s.providerUserInfo):[],c=!(s.email&&s.passwordHash)&&!(l!=null&&l.length),d=new No;d.updateFromIdToken(i);const p=new qr({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:c}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Em(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,m),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=new Map;function Vi(r){Hi(r instanceof Function,"Expected a class definition");let e=wE.get(r);return e?(Hi(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,wE.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}lT.type="NONE";const RE=lT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(r,e,t){return`firebase:${r}:${e}:${t}`}class Po{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:l}=this.auth;this.fullUserKey=Nf(this.userKey,s.apiKey,l),this.fullPersistenceKey=Nf("persistence",s.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Xf(this.auth,{idToken:e}).catch(()=>{});return t?qr._fromGetAccountInfoResponse(this.auth,t,e):null}return qr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Po(Vi(RE),e,i);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let l=s[0]||Vi(RE);const c=Nf(i,e.config.apiKey,e.name);let d=null;for(const m of t)try{const v=await m._get(c);if(v){let b;if(typeof v=="string"){const T=await Xf(e,{idToken:v}).catch(()=>{});if(!T)break;b=await qr._fromGetAccountInfoResponse(e,T,v)}else b=qr._fromJSON(e,v);m!==l&&(d=b),l=m;break}}catch{}const p=s.filter(m=>m._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Po(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==l)try{await m._remove(c)}catch{}})),new Po(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pT(e))return"Blackberry";if(mT(e))return"Webos";if(cT(e))return"Safari";if((e.includes("chrome/")||fT(e))&&!e.includes("edge/"))return"Chrome";if(dT(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function uT(r=Tn()){return/firefox\//i.test(r)}function cT(r=Tn()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fT(r=Tn()){return/crios\//i.test(r)}function hT(r=Tn()){return/iemobile/i.test(r)}function dT(r=Tn()){return/android/i.test(r)}function pT(r=Tn()){return/blackberry/i.test(r)}function mT(r=Tn()){return/webos/i.test(r)}function ig(r=Tn()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function MI(r=Tn()){var e;return ig(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LI(){return W1()&&document.documentMode===10}function gT(r=Tn()){return ig(r)||dT(r)||mT(r)||pT(r)||/windows phone/i.test(r)||hT(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(r,e=[]){let t;switch(r){case"Browser":t=CE(Tn());break;case"Worker":t=`${CE(Tn())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Qo}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UI(r,e={}){return Ba(r,"GET","/v2/passwordPolicy",Os(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=6;class zI{constructor(e){var t,i,s,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:jI,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(s=p.containsLowercaseLetter)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new IE(this),this.idTokenSubscription=new IE(this),this.beforeStateQueue=new VI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Vi(t)),this._initializationPromise=this.queue(async()=>{var i,s,l;if(!this._deleted&&(this.persistenceManager=await Po.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xf(this,{idToken:e}),i=await qr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Dr(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(s=p.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Wf(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=EI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dr(this.app))return Promise.reject(qa(this));const t=e?Qn(e):null;return t&&Ce(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dr(this.app)?Promise.reject(qa(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dr(this.app)?Promise.reject(qa(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await UI(this),t=new zI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Yu("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await PI(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Vi(e)||this._popupRedirectResolver;Ce(t,this,"argument-error"),this.redirectPersistenceManager=await Po.create(this,[Vi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ce(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,s);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Dr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&yI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Xo(r){return Qn(r)}class IE{constructor(e){this.auth=e,this.observer=null,this.addObserver=aC(t=>this.observer=t)}get next(){return Ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _h={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HI(r){_h=r}function vT(r){return _h.loadJS(r)}function FI(){return _h.recaptchaEnterpriseScript}function GI(){return _h.gapiScript}function YI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class KI{constructor(){this.enterprise=new $I}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class $I{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const QI="recaptcha-enterprise",_T="NO_RECAPTCHA";class XI{constructor(e){this.type=QI,this.auth=Xo(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{CI(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new RI(p);return l.tenantId==null?l._agentRecaptchaConfig=m:l._tenantRecaptchaConfigs[l.tenantId]=m,c(m.siteKey)}}).catch(p=>{d(p)})})}function s(l,c,d){const p=window.grecaptcha;SE(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(m=>{c(m)}).catch(()=>{c(_T)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new KI().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(d=>{if(!t&&SE(window.grecaptcha))s(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=FI();p.length!==0&&(p+=d),vT(p).then(()=>{s(d,l,c)}).catch(m=>{c(m)})}}).catch(d=>{c(d)})})}}async function xE(r,e,t,i=!1,s=!1){const l=new XI(r);let c;if(s)c=_T;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function OE(r,e,t,i,s){var l;if(!((l=r._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await xE(r,e,t,t==="getOobCode");return i(r,c)}else return i(r,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await xE(r,e,t,t==="getOobCode");return i(r,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(r,e){const t=Jm(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),l=t.getOptions();if(As(l,e??{}))return s;Pr(s,"already-initialized")}return t.initialize({options:e})}function ZI(r,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Vi);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function JI(r,e,t){const i=Xo(r);Ce(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,l=ET(e),{host:c,port:d}=ex(e),p=d===null?"":`:${d}`,m={url:`${l}//${c}${p}/`},v=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){Ce(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Ce(As(m,i.config.emulator)&&As(v,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=m,i.emulatorConfig=v,i.settings.appVerificationDisabledForTesting=!0,tx()}function ET(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function ex(r){const e=ET(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const l=s[1];return{host:l,port:DE(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:DE(c)}}}function DE(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function tx(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Li("not implemented")}_getIdTokenResponse(e){return Li("not implemented")}_linkToIdToken(e,t){return Li("not implemented")}_getReauthenticationResolver(e){return Li("not implemented")}}async function nx(r,e){return Ba(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rx(r,e){return vh(r,"POST","/v1/accounts:signInWithPassword",Os(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ix(r,e){return vh(r,"POST","/v1/accounts:signInWithEmailLink",Os(r,e))}async function ax(r,e){return vh(r,"POST","/v1/accounts:signInWithEmailLink",Os(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends ag{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Du(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Du(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return OE(e,t,"signInWithPassword",rx);case"emailLink":return ix(e,{email:this._email,oobCode:this._password});default:Pr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return OE(e,i,"signUpPassword",nx);case"emailLink":return ax(e,{idToken:t,email:this._email,oobCode:this._password});default:Pr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(r,e){return vh(r,"POST","/v1/accounts:signInWithIdp",Os(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx="http://localhost";class Rs extends ag{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Pr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,l=eg(t,["providerId","signInMethod"]);if(!i||!s)return null;const c=new Rs(i,s);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Mo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Mo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Mo(e,t)}buildRequest(){const e={requestUri:sx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ku(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lx(r){const e=vu(_u(r)).link,t=e?vu(_u(e)).deep_link_id:null,i=vu(_u(r)).deep_link_id;return(i?vu(_u(i)).link:null)||i||t||e||r}class sg{constructor(e){var t,i,s,l,c,d;const p=vu(_u(e)),m=(t=p.apiKey)!==null&&t!==void 0?t:null,v=(i=p.oobCode)!==null&&i!==void 0?i:null,b=ox((s=p.mode)!==null&&s!==void 0?s:null);Ce(m&&v&&b,"argument-error"),this.apiKey=m,this.operation=b,this.code=v,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=lx(e);try{return new sg(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this.providerId=Wo.PROVIDER_ID}static credential(e,t){return Du._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=sg.parseLink(t);return Ce(i,"argument-error"),Du._fromEmailAndCode(e,i.code,i.tenantId)}}Wo.PROVIDER_ID="password";Wo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu extends bT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends Qu{constructor(){super("facebook.com")}static credential(e){return Rs._fromParams({providerId:Aa.PROVIDER_ID,signInMethod:Aa.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Aa.credentialFromTaggedObject(e)}static credentialFromError(e){return Aa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Aa.credential(e.oauthAccessToken)}catch{return null}}}Aa.FACEBOOK_SIGN_IN_METHOD="facebook.com";Aa.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa extends Qu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Rs._fromParams({providerId:wa.PROVIDER_ID,signInMethod:wa.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return wa.credentialFromTaggedObject(e)}static credentialFromError(e){return wa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return wa.credential(t,i)}catch{return null}}}wa.GOOGLE_SIGN_IN_METHOD="google.com";wa.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra extends Qu{constructor(){super("github.com")}static credential(e){return Rs._fromParams({providerId:Ra.PROVIDER_ID,signInMethod:Ra.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ra.credentialFromTaggedObject(e)}static credentialFromError(e){return Ra.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ra.credential(e.oauthAccessToken)}catch{return null}}}Ra.GITHUB_SIGN_IN_METHOD="github.com";Ra.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca extends Qu{constructor(){super("twitter.com")}static credential(e,t){return Rs._fromParams({providerId:Ca.PROVIDER_ID,signInMethod:Ca.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ca.credentialFromTaggedObject(e)}static credentialFromError(e){return Ca.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ca.credential(t,i)}catch{return null}}}Ca.TWITTER_SIGN_IN_METHOD="twitter.com";Ca.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const l=await qr._fromIdTokenResponse(e,i,s),c=qE(i);return new Uo({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=qE(i);return new Uo({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function qE(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf extends Ki{constructor(e,t,i,s){var l;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Zf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Zf(e,t,i,s)}}function TT(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Zf._fromErrorAndOperation(r,l,e,i):l})}async function ux(r,e,t=!1){const i=await Ou(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Uo._forOperation(r,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cx(r,e,t=!1){const{auth:i}=r;if(Dr(i.app))return Promise.reject(qa(i));const s="reauthenticate";try{const l=await Ou(r,TT(i,s,e,r),t);Ce(l.idToken,i,"internal-error");const c=rg(l.idToken);Ce(c,i,"internal-error");const{sub:d}=c;return Ce(r.uid===d,i,"user-mismatch"),Uo._forOperation(r,s,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Pr(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ST(r,e,t=!1){if(Dr(r.app))return Promise.reject(qa(r));const i="signIn",s=await TT(r,i,e),l=await Uo._fromIdTokenResponse(r,i,s);return t||await r._updateCurrentUser(l.user),l}async function fx(r,e){return ST(Xo(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hx(r){const e=Xo(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function dx(r,e,t){return Dr(r.app)?Promise.reject(qa(r)):fx(Qn(r),Wo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&hx(r),i})}function px(r,e,t,i){return Qn(r).onIdTokenChanged(e,t,i)}function mx(r,e,t){return Qn(r).beforeAuthStateChanged(e,t)}function AT(r,e,t,i){return Qn(r).onAuthStateChanged(e,t,i)}const Jf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Jf,"1"),this.storage.removeItem(Jf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx=1e3,yx=10;class RT extends wT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);LI()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,yx):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},gx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}RT.type="LOCAL";const vx=RT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT extends wT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}CT.type="SESSION";const IT=CT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _x(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Eh(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:l}=t.data,c=this.handlersMap[s];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const d=Array.from(c).map(async m=>m(t.origin,l)),p=await _x(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Eh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const m=og("",20);s.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:s,onMessage(b){const T=b;if(T.data.eventId===m)switch(T.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(T.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),s.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[s.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(){return window}function bx(r){ai().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(){return typeof ai().WorkerGlobalScope<"u"&&typeof ai().importScripts=="function"}async function Tx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sx(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Ax(){return xT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT="firebaseLocalStorageDb",wx=1,eh="firebaseLocalStorage",DT="fbase_key";class Xu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bh(r,e){return r.transaction([eh],e?"readwrite":"readonly").objectStore(eh)}function Rx(){const r=indexedDB.deleteDatabase(OT);return new Xu(r).toPromise()}function bm(){const r=indexedDB.open(OT,wx);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(eh,{keyPath:DT})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(eh)?e(i):(i.close(),await Rx(),e(await bm()))})})}async function kE(r,e,t){const i=bh(r,!0).put({[DT]:e,value:t});return new Xu(i).toPromise()}async function Cx(r,e){const t=bh(r,!1).get(e),i=await new Xu(t).toPromise();return i===void 0?null:i.value}function NE(r,e){const t=bh(r,!0).delete(e);return new Xu(t).toPromise()}const Ix=800,xx=3;class qT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>xx)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Eh._getInstance(Ax()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Tx(),!this.activeServiceWorker)return;this.sender=new Ex(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bm();return await kE(e,Jf,"1"),await NE(e,Jf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>kE(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Cx(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>NE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const l=bh(s,!1).getAll();return new Xu(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:l}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(l)&&(this.notifyListeners(s,l),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ix)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qT.type="LOCAL";const Ox=qT;new $u(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(r,e){return e?Vi(e):(Ce(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg extends ag{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Mo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Mo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qx(r){return ST(r.auth,new lg(r),r.bypassAuthState)}function kx(r){const{auth:e,user:t}=r;return Ce(t,e,"internal-error"),cx(t,new lg(r),r.bypassAuthState)}async function Nx(r){const{auth:e,user:t}=r;return Ce(t,e,"internal-error"),ux(t,new lg(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,t,i,s,l=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qx;case"linkViaPopup":case"linkViaRedirect":return Nx;case"reauthViaPopup":case"reauthViaRedirect":return kx;default:Pr(this.auth,"internal-error")}}resolve(e){Hi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px=new $u(2e3,1e4);class ko extends kT{constructor(e,t,i,s,l){super(e,t,s,l),this.provider=i,this.authWindow=null,this.pollId=null,ko.currentPopupAction&&ko.currentPopupAction.cancel(),ko.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ce(e,this.auth,"internal-error"),e}async onExecution(){Hi(this.filter.length===1,"Popup operations only handle one event");const e=og();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ii(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ii(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ko.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ii(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Px.get())};e()}}ko.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx="pendingRedirect",Pf=new Map;class Lx extends kT{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Pf.get(this.auth._key());if(!e){try{const i=await Vx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Pf.set(this.auth._key(),e)}return this.bypassAuthState||Pf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vx(r,e){const t=zx(e),i=jx(r);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Ux(r,e){Pf.set(r._key(),e)}function jx(r){return Vi(r._redirectPersistence)}function zx(r){return Nf(Mx,r.config.apiKey,r.name)}async function Bx(r,e,t=!1){if(Dr(r.app))return Promise.reject(qa(r));const i=Xo(r),s=Dx(i,e),c=await new Lx(i,s,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx=10*60*1e3;class Fx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gx(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!NT(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ii(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hx&&this.cachedEventUids.clear(),this.cachedEventUids.has(PE(e))}saveEventToCache(e){this.cachedEventUids.add(PE(e)),this.lastProcessedEventTime=Date.now()}}function PE(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function NT({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gx(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return NT(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yx(r,e={}){return Ba(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$x=/^https?/;async function Qx(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Yx(r);for(const t of e)try{if(Xx(t))return}catch{}Pr(r,"unauthorized-domain")}function Xx(r){const e=_m(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const c=new URL(r);return c.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!$x.test(t))return!1;if(Kx.test(r))return i===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=new $u(3e4,6e4);function ME(){const r=ai().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Zx(r){return new Promise((e,t)=>{var i,s,l;function c(){ME(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ME(),t(ii(r,"network-request-failed"))},timeout:Wx.get()})}if(!((s=(i=ai().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((l=ai().gapi)===null||l===void 0)&&l.load)c();else{const d=YI("iframefcb");return ai()[d]=()=>{gapi.load?c():t(ii(r,"network-request-failed"))},vT(`${GI()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw Mf=null,e})}let Mf=null;function Jx(r){return Mf=Mf||Zx(r),Mf}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO=new $u(5e3,15e3),tO="__/auth/iframe",nO="emulator/auth/iframe",rO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aO(r){const e=r.config;Ce(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?ng(e,nO):`https://${r.config.authDomain}/${tO}`,i={apiKey:e.apiKey,appName:r.name,v:Qo},s=iO.get(r.config.apiHost);s&&(i.eid=s);const l=r._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Ku(i).slice(1)}`}async function sO(r){const e=await Jx(r),t=ai().gapi;return Ce(t,r,"internal-error"),e.open({where:document.body,url:aO(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rO,dontclear:!0},i=>new Promise(async(s,l)=>{await i.restyle({setHideOnLeave:!1});const c=ii(r,"network-request-failed"),d=ai().setTimeout(()=>{l(c)},eO.get());function p(){ai().clearTimeout(d),s(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lO=500,uO=600,cO="_blank",fO="http://localhost";class LE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hO(r,e,t,i=lO,s=uO){const l=Math.max((window.screen.availHeight-s)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},oO),{width:i.toString(),height:s.toString(),top:l,left:c}),m=Tn().toLowerCase();t&&(d=fT(m)?cO:t),uT(m)&&(e=e||fO,p.scrollbars="yes");const v=Object.entries(p).reduce((T,[w,O])=>`${T}${w}=${O},`,"");if(MI(m)&&d!=="_self")return dO(e||"",d),new LE(null);const b=window.open(e||"",d,v);Ce(b,r,"popup-blocked");try{b.focus()}catch{}return new LE(b)}function dO(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO="__/auth/handler",mO="emulator/auth/handler",gO=encodeURIComponent("fac");async function VE(r,e,t,i,s,l){Ce(r.config.authDomain,r,"auth-domain-config-required"),Ce(r.config.apiKey,r,"invalid-api-key");const c={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:Qo,eventId:s};if(e instanceof bT){e.setDefaultLanguage(r.languageCode),c.providerId=e.providerId||"",iC(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,b]of Object.entries({}))c[v]=b}if(e instanceof Qu){const v=e.getScopes().filter(b=>b!=="");v.length>0&&(c.scopes=v.join(","))}r.tenantId&&(c.tid=r.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await r._getAppCheckToken(),m=p?`#${gO}=${encodeURIComponent(p)}`:"";return`${yO(r)}?${Ku(d).slice(1)}${m}`}function yO({config:r}){return r.emulator?ng(r,mO):`https://${r.authDomain}/${pO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="webStorageSupport";class vO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=IT,this._completeRedirectFn=Bx,this._overrideRedirectResult=Ux}async _openPopup(e,t,i,s){var l;Hi((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await VE(e,t,i,_m(),s);return hO(e,c,og())}async _openRedirect(e,t,i,s){await this._originValidation(e);const l=await VE(e,t,i,_m(),s);return bx(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:l}=this.eventManagers[t];return s?Promise.resolve(s):(Hi(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await sO(e),i=new Fx(e);return t.register("authEvent",s=>(Ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zp,{type:Zp},s=>{var l;const c=(l=s==null?void 0:s[0])===null||l===void 0?void 0:l[Zp];c!==void 0&&t(!!c),Pr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Qx(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return gT()||cT()||ig()}}const _O=vO;var UE="@firebase/auth",jE="1.10.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TO(r){Vo(new ws("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;Ce(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yT(r)},m=new BI(i,s,l,p);return ZI(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Vo(new ws("auth-internal",e=>{const t=Xo(e.getProvider("auth").getImmediate());return(i=>new EO(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Da(UE,jE,bO(r)),Da(UE,jE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SO=5*60,AO=$b("authIdTokenMaxAge")||SO;let zE=null;const wO=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>AO)return;const s=t==null?void 0:t.token;zE!==s&&(zE=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Th(r=Zb()){const e=Jm(r,"auth");if(e.isInitialized())return e.getImmediate();const t=WI(r,{popupRedirectResolver:_O,persistence:[Ox,vx,IT]}),i=$b("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=wO(l.toString());mx(t,c,()=>c(t.currentUser)),px(t,d=>c(d))}}const s=Yb("auth");return s&&JI(t,`http://${s}`),t}function RO(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}HI({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=s=>{const l=ii("internal-error");l.customData=s,t(l)},i.type="text/javascript",i.charset="UTF-8",RO().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TO("Browser");const PT=M.createContext();function CO({children:r}){const[e,t]=M.useState(()=>localStorage.getItem("theme")||"light"),i=()=>{t(s=>{const l=s==="light"?"dark":"light";return localStorage.setItem("theme",l),l})};return M.useEffect(()=>{localStorage.setItem("theme",e)},[e]),U.jsx(PT.Provider,{value:{theme:e,toggleTheme:i},children:r})}function IO(){return M.useContext(PT)}var BE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ka,MT;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,R){function x(){}x.prototype=R.prototype,C.D=R.prototype,C.prototype=new x,C.prototype.constructor=C,C.C=function(N,k,j){for(var I=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)I[pe-2]=arguments[pe];return R.prototype[k].apply(N,I)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(C,R,x){x||(x=0);var N=Array(16);if(typeof R=="string")for(var k=0;16>k;++k)N[k]=R.charCodeAt(x++)|R.charCodeAt(x++)<<8|R.charCodeAt(x++)<<16|R.charCodeAt(x++)<<24;else for(k=0;16>k;++k)N[k]=R[x++]|R[x++]<<8|R[x++]<<16|R[x++]<<24;R=C.g[0],x=C.g[1],k=C.g[2];var j=C.g[3],I=R+(j^x&(k^j))+N[0]+3614090360&4294967295;R=x+(I<<7&4294967295|I>>>25),I=j+(k^R&(x^k))+N[1]+3905402710&4294967295,j=R+(I<<12&4294967295|I>>>20),I=k+(x^j&(R^x))+N[2]+606105819&4294967295,k=j+(I<<17&4294967295|I>>>15),I=x+(R^k&(j^R))+N[3]+3250441966&4294967295,x=k+(I<<22&4294967295|I>>>10),I=R+(j^x&(k^j))+N[4]+4118548399&4294967295,R=x+(I<<7&4294967295|I>>>25),I=j+(k^R&(x^k))+N[5]+1200080426&4294967295,j=R+(I<<12&4294967295|I>>>20),I=k+(x^j&(R^x))+N[6]+2821735955&4294967295,k=j+(I<<17&4294967295|I>>>15),I=x+(R^k&(j^R))+N[7]+4249261313&4294967295,x=k+(I<<22&4294967295|I>>>10),I=R+(j^x&(k^j))+N[8]+1770035416&4294967295,R=x+(I<<7&4294967295|I>>>25),I=j+(k^R&(x^k))+N[9]+2336552879&4294967295,j=R+(I<<12&4294967295|I>>>20),I=k+(x^j&(R^x))+N[10]+4294925233&4294967295,k=j+(I<<17&4294967295|I>>>15),I=x+(R^k&(j^R))+N[11]+2304563134&4294967295,x=k+(I<<22&4294967295|I>>>10),I=R+(j^x&(k^j))+N[12]+1804603682&4294967295,R=x+(I<<7&4294967295|I>>>25),I=j+(k^R&(x^k))+N[13]+4254626195&4294967295,j=R+(I<<12&4294967295|I>>>20),I=k+(x^j&(R^x))+N[14]+2792965006&4294967295,k=j+(I<<17&4294967295|I>>>15),I=x+(R^k&(j^R))+N[15]+1236535329&4294967295,x=k+(I<<22&4294967295|I>>>10),I=R+(k^j&(x^k))+N[1]+4129170786&4294967295,R=x+(I<<5&4294967295|I>>>27),I=j+(x^k&(R^x))+N[6]+3225465664&4294967295,j=R+(I<<9&4294967295|I>>>23),I=k+(R^x&(j^R))+N[11]+643717713&4294967295,k=j+(I<<14&4294967295|I>>>18),I=x+(j^R&(k^j))+N[0]+3921069994&4294967295,x=k+(I<<20&4294967295|I>>>12),I=R+(k^j&(x^k))+N[5]+3593408605&4294967295,R=x+(I<<5&4294967295|I>>>27),I=j+(x^k&(R^x))+N[10]+38016083&4294967295,j=R+(I<<9&4294967295|I>>>23),I=k+(R^x&(j^R))+N[15]+3634488961&4294967295,k=j+(I<<14&4294967295|I>>>18),I=x+(j^R&(k^j))+N[4]+3889429448&4294967295,x=k+(I<<20&4294967295|I>>>12),I=R+(k^j&(x^k))+N[9]+568446438&4294967295,R=x+(I<<5&4294967295|I>>>27),I=j+(x^k&(R^x))+N[14]+3275163606&4294967295,j=R+(I<<9&4294967295|I>>>23),I=k+(R^x&(j^R))+N[3]+4107603335&4294967295,k=j+(I<<14&4294967295|I>>>18),I=x+(j^R&(k^j))+N[8]+1163531501&4294967295,x=k+(I<<20&4294967295|I>>>12),I=R+(k^j&(x^k))+N[13]+2850285829&4294967295,R=x+(I<<5&4294967295|I>>>27),I=j+(x^k&(R^x))+N[2]+4243563512&4294967295,j=R+(I<<9&4294967295|I>>>23),I=k+(R^x&(j^R))+N[7]+1735328473&4294967295,k=j+(I<<14&4294967295|I>>>18),I=x+(j^R&(k^j))+N[12]+2368359562&4294967295,x=k+(I<<20&4294967295|I>>>12),I=R+(x^k^j)+N[5]+4294588738&4294967295,R=x+(I<<4&4294967295|I>>>28),I=j+(R^x^k)+N[8]+2272392833&4294967295,j=R+(I<<11&4294967295|I>>>21),I=k+(j^R^x)+N[11]+1839030562&4294967295,k=j+(I<<16&4294967295|I>>>16),I=x+(k^j^R)+N[14]+4259657740&4294967295,x=k+(I<<23&4294967295|I>>>9),I=R+(x^k^j)+N[1]+2763975236&4294967295,R=x+(I<<4&4294967295|I>>>28),I=j+(R^x^k)+N[4]+1272893353&4294967295,j=R+(I<<11&4294967295|I>>>21),I=k+(j^R^x)+N[7]+4139469664&4294967295,k=j+(I<<16&4294967295|I>>>16),I=x+(k^j^R)+N[10]+3200236656&4294967295,x=k+(I<<23&4294967295|I>>>9),I=R+(x^k^j)+N[13]+681279174&4294967295,R=x+(I<<4&4294967295|I>>>28),I=j+(R^x^k)+N[0]+3936430074&4294967295,j=R+(I<<11&4294967295|I>>>21),I=k+(j^R^x)+N[3]+3572445317&4294967295,k=j+(I<<16&4294967295|I>>>16),I=x+(k^j^R)+N[6]+76029189&4294967295,x=k+(I<<23&4294967295|I>>>9),I=R+(x^k^j)+N[9]+3654602809&4294967295,R=x+(I<<4&4294967295|I>>>28),I=j+(R^x^k)+N[12]+3873151461&4294967295,j=R+(I<<11&4294967295|I>>>21),I=k+(j^R^x)+N[15]+530742520&4294967295,k=j+(I<<16&4294967295|I>>>16),I=x+(k^j^R)+N[2]+3299628645&4294967295,x=k+(I<<23&4294967295|I>>>9),I=R+(k^(x|~j))+N[0]+4096336452&4294967295,R=x+(I<<6&4294967295|I>>>26),I=j+(x^(R|~k))+N[7]+1126891415&4294967295,j=R+(I<<10&4294967295|I>>>22),I=k+(R^(j|~x))+N[14]+2878612391&4294967295,k=j+(I<<15&4294967295|I>>>17),I=x+(j^(k|~R))+N[5]+4237533241&4294967295,x=k+(I<<21&4294967295|I>>>11),I=R+(k^(x|~j))+N[12]+1700485571&4294967295,R=x+(I<<6&4294967295|I>>>26),I=j+(x^(R|~k))+N[3]+2399980690&4294967295,j=R+(I<<10&4294967295|I>>>22),I=k+(R^(j|~x))+N[10]+4293915773&4294967295,k=j+(I<<15&4294967295|I>>>17),I=x+(j^(k|~R))+N[1]+2240044497&4294967295,x=k+(I<<21&4294967295|I>>>11),I=R+(k^(x|~j))+N[8]+1873313359&4294967295,R=x+(I<<6&4294967295|I>>>26),I=j+(x^(R|~k))+N[15]+4264355552&4294967295,j=R+(I<<10&4294967295|I>>>22),I=k+(R^(j|~x))+N[6]+2734768916&4294967295,k=j+(I<<15&4294967295|I>>>17),I=x+(j^(k|~R))+N[13]+1309151649&4294967295,x=k+(I<<21&4294967295|I>>>11),I=R+(k^(x|~j))+N[4]+4149444226&4294967295,R=x+(I<<6&4294967295|I>>>26),I=j+(x^(R|~k))+N[11]+3174756917&4294967295,j=R+(I<<10&4294967295|I>>>22),I=k+(R^(j|~x))+N[2]+718787259&4294967295,k=j+(I<<15&4294967295|I>>>17),I=x+(j^(k|~R))+N[9]+3951481745&4294967295,C.g[0]=C.g[0]+R&4294967295,C.g[1]=C.g[1]+(k+(I<<21&4294967295|I>>>11))&4294967295,C.g[2]=C.g[2]+k&4294967295,C.g[3]=C.g[3]+j&4294967295}i.prototype.u=function(C,R){R===void 0&&(R=C.length);for(var x=R-this.blockSize,N=this.B,k=this.h,j=0;j<R;){if(k==0)for(;j<=x;)s(this,C,j),j+=this.blockSize;if(typeof C=="string"){for(;j<R;)if(N[k++]=C.charCodeAt(j++),k==this.blockSize){s(this,N),k=0;break}}else for(;j<R;)if(N[k++]=C[j++],k==this.blockSize){s(this,N),k=0;break}}this.h=k,this.o+=R},i.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var R=1;R<C.length-8;++R)C[R]=0;var x=8*this.o;for(R=C.length-8;R<C.length;++R)C[R]=x&255,x/=256;for(this.u(C),C=Array(16),R=x=0;4>R;++R)for(var N=0;32>N;N+=8)C[x++]=this.g[R]>>>N&255;return C};function l(C,R){var x=d;return Object.prototype.hasOwnProperty.call(x,C)?x[C]:x[C]=R(C)}function c(C,R){this.h=R;for(var x=[],N=!0,k=C.length-1;0<=k;k--){var j=C[k]|0;N&&j==R||(x[k]=j,N=!1)}this.g=x}var d={};function p(C){return-128<=C&&128>C?l(C,function(R){return new c([R|0],0>R?-1:0)}):new c([C|0],0>C?-1:0)}function m(C){if(isNaN(C)||!isFinite(C))return b;if(0>C)return P(m(-C));for(var R=[],x=1,N=0;C>=x;N++)R[N]=C/x|0,x*=4294967296;return new c(R,0)}function v(C,R){if(C.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(C.charAt(0)=="-")return P(v(C.substring(1),R));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=m(Math.pow(R,8)),N=b,k=0;k<C.length;k+=8){var j=Math.min(8,C.length-k),I=parseInt(C.substring(k,k+j),R);8>j?(j=m(Math.pow(R,j)),N=N.j(j).add(m(I))):(N=N.j(x),N=N.add(m(I)))}return N}var b=p(0),T=p(1),w=p(16777216);r=c.prototype,r.m=function(){if(V(this))return-P(this).m();for(var C=0,R=1,x=0;x<this.g.length;x++){var N=this.i(x);C+=(0<=N?N:4294967296+N)*R,R*=4294967296}return C},r.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(O(this))return"0";if(V(this))return"-"+P(this).toString(C);for(var R=m(Math.pow(C,6)),x=this,N="";;){var k=ie(x,R).g;x=B(x,k.j(R));var j=((0<x.g.length?x.g[0]:x.h)>>>0).toString(C);if(x=k,O(x))return j+N;for(;6>j.length;)j="0"+j;N=j+N}},r.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function O(C){if(C.h!=0)return!1;for(var R=0;R<C.g.length;R++)if(C.g[R]!=0)return!1;return!0}function V(C){return C.h==-1}r.l=function(C){return C=B(this,C),V(C)?-1:O(C)?0:1};function P(C){for(var R=C.g.length,x=[],N=0;N<R;N++)x[N]=~C.g[N];return new c(x,~C.h).add(T)}r.abs=function(){return V(this)?P(this):this},r.add=function(C){for(var R=Math.max(this.g.length,C.g.length),x=[],N=0,k=0;k<=R;k++){var j=N+(this.i(k)&65535)+(C.i(k)&65535),I=(j>>>16)+(this.i(k)>>>16)+(C.i(k)>>>16);N=I>>>16,j&=65535,I&=65535,x[k]=I<<16|j}return new c(x,x[x.length-1]&-2147483648?-1:0)};function B(C,R){return C.add(P(R))}r.j=function(C){if(O(this)||O(C))return b;if(V(this))return V(C)?P(this).j(P(C)):P(P(this).j(C));if(V(C))return P(this.j(P(C)));if(0>this.l(w)&&0>C.l(w))return m(this.m()*C.m());for(var R=this.g.length+C.g.length,x=[],N=0;N<2*R;N++)x[N]=0;for(N=0;N<this.g.length;N++)for(var k=0;k<C.g.length;k++){var j=this.i(N)>>>16,I=this.i(N)&65535,pe=C.i(k)>>>16,Oe=C.i(k)&65535;x[2*N+2*k]+=I*Oe,K(x,2*N+2*k),x[2*N+2*k+1]+=j*Oe,K(x,2*N+2*k+1),x[2*N+2*k+1]+=I*pe,K(x,2*N+2*k+1),x[2*N+2*k+2]+=j*pe,K(x,2*N+2*k+2)}for(N=0;N<R;N++)x[N]=x[2*N+1]<<16|x[2*N];for(N=R;N<2*R;N++)x[N]=0;return new c(x,0)};function K(C,R){for(;(C[R]&65535)!=C[R];)C[R+1]+=C[R]>>>16,C[R]&=65535,R++}function Q(C,R){this.g=C,this.h=R}function ie(C,R){if(O(R))throw Error("division by zero");if(O(C))return new Q(b,b);if(V(C))return R=ie(P(C),R),new Q(P(R.g),P(R.h));if(V(R))return R=ie(C,P(R)),new Q(P(R.g),R.h);if(30<C.g.length){if(V(C)||V(R))throw Error("slowDivide_ only works with positive integers.");for(var x=T,N=R;0>=N.l(C);)x=D(x),N=D(N);var k=G(x,1),j=G(N,1);for(N=G(N,2),x=G(x,2);!O(N);){var I=j.add(N);0>=I.l(C)&&(k=k.add(x),j=I),N=G(N,1),x=G(x,1)}return R=B(C,k.j(R)),new Q(k,R)}for(k=b;0<=C.l(R);){for(x=Math.max(1,Math.floor(C.m()/R.m())),N=Math.ceil(Math.log(x)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),j=m(x),I=j.j(R);V(I)||0<I.l(C);)x-=N,j=m(x),I=j.j(R);O(j)&&(j=T),k=k.add(j),C=B(C,I)}return new Q(k,C)}r.A=function(C){return ie(this,C).h},r.and=function(C){for(var R=Math.max(this.g.length,C.g.length),x=[],N=0;N<R;N++)x[N]=this.i(N)&C.i(N);return new c(x,this.h&C.h)},r.or=function(C){for(var R=Math.max(this.g.length,C.g.length),x=[],N=0;N<R;N++)x[N]=this.i(N)|C.i(N);return new c(x,this.h|C.h)},r.xor=function(C){for(var R=Math.max(this.g.length,C.g.length),x=[],N=0;N<R;N++)x[N]=this.i(N)^C.i(N);return new c(x,this.h^C.h)};function D(C){for(var R=C.g.length+1,x=[],N=0;N<R;N++)x[N]=C.i(N)<<1|C.i(N-1)>>>31;return new c(x,C.h)}function G(C,R){var x=R>>5;R%=32;for(var N=C.g.length-x,k=[],j=0;j<N;j++)k[j]=0<R?C.i(j+x)>>>R|C.i(j+x+1)<<32-R:C.i(j+x);return new c(k,C.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,MT=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=m,c.fromString=v,ka=c}).apply(typeof BE<"u"?BE:typeof self<"u"?self:typeof window<"u"?window:{});var _f=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var LT,Eu,VT,Lf,Tm,UT,jT,zT;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(f,y,_){return f==Array.prototype||f==Object.prototype||(f[y]=_.value),f};function t(f){f=[typeof globalThis=="object"&&globalThis,f,typeof window=="object"&&window,typeof self=="object"&&self,typeof _f=="object"&&_f];for(var y=0;y<f.length;++y){var _=f[y];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function s(f,y){if(y)e:{var _=i;f=f.split(".");for(var A=0;A<f.length-1;A++){var Y=f[A];if(!(Y in _))break e;_=_[Y]}f=f[f.length-1],A=_[f],y=y(A),y!=A&&y!=null&&e(_,f,{configurable:!0,writable:!0,value:y})}}function l(f,y){f instanceof String&&(f+="");var _=0,A=!1,Y={next:function(){if(!A&&_<f.length){var ee=_++;return{value:y(ee,f[ee]),done:!1}}return A=!0,{done:!0,value:void 0}}};return Y[Symbol.iterator]=function(){return Y},Y}s("Array.prototype.values",function(f){return f||function(){return l(this,function(y,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(f){var y=typeof f;return y=y!="object"?y:f?Array.isArray(f)?"array":y:"null",y=="array"||y=="object"&&typeof f.length=="number"}function m(f){var y=typeof f;return y=="object"&&f!=null||y=="function"}function v(f,y,_){return f.call.apply(f.bind,arguments)}function b(f,y,_){if(!f)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var Y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(Y,A),f.apply(y,Y)}}return function(){return f.apply(y,arguments)}}function T(f,y,_){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:b,T.apply(null,arguments)}function w(f,y){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),f.apply(this,A)}}function O(f,y){function _(){}_.prototype=y.prototype,f.aa=y.prototype,f.prototype=new _,f.prototype.constructor=f,f.Qb=function(A,Y,ee){for(var he=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)he[Fe-2]=arguments[Fe];return y.prototype[Y].apply(A,he)}}function V(f){const y=f.length;if(0<y){const _=Array(y);for(let A=0;A<y;A++)_[A]=f[A];return _}return[]}function P(f,y){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(p(A)){const Y=f.length||0,ee=A.length||0;f.length=Y+ee;for(let he=0;he<ee;he++)f[Y+he]=A[he]}else f.push(A)}}class B{constructor(y,_){this.i=y,this.j=_,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function K(f){return/^[\s\xa0]*$/.test(f)}function Q(){var f=d.navigator;return f&&(f=f.userAgent)?f:""}function ie(f){return ie[" "](f),f}ie[" "]=function(){};var D=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function G(f,y,_){for(const A in f)y.call(_,f[A],A,f)}function C(f,y){for(const _ in f)y.call(void 0,f[_],_,f)}function R(f){const y={};for(const _ in f)y[_]=f[_];return y}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(f,y){let _,A;for(let Y=1;Y<arguments.length;Y++){A=arguments[Y];for(_ in A)f[_]=A[_];for(let ee=0;ee<x.length;ee++)_=x[ee],Object.prototype.hasOwnProperty.call(A,_)&&(f[_]=A[_])}}function k(f){var y=1;f=f.split(":");const _=[];for(;0<y&&f.length;)_.push(f.shift()),y--;return f.length&&_.push(f.join(":")),_}function j(f){d.setTimeout(()=>{throw f},0)}function I(){var f=Pe;let y=null;return f.g&&(y=f.g,f.g=f.g.next,f.g||(f.h=null),y.next=null),y}class pe{constructor(){this.h=this.g=null}add(y,_){const A=Oe.get();A.set(y,_),this.h?this.h.next=A:this.g=A,this.h=A}}var Oe=new B(()=>new J,f=>f.reset());class J{constructor(){this.next=this.g=this.h=null}set(y,_){this.h=y,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,fe=!1,Pe=new pe,L=()=>{const f=d.Promise.resolve(void 0);ce=()=>{f.then(te)}};var te=()=>{for(var f;f=I();){try{f.h.call(f.g)}catch(_){j(_)}var y=Oe;y.j(f),100>y.h&&(y.h++,f.next=y.g,y.g=f)}fe=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(f,y){this.type=f,this.g=this.target=y,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var be=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var f=!1,y=Object.defineProperty({},"passive",{get:function(){f=!0}});try{const _=()=>{};d.addEventListener("test",_,y),d.removeEventListener("test",_,y)}catch{}return f}();function _e(f,y){if(oe.call(this,f?f.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,f){var _=this.type=f.type,A=f.changedTouches&&f.changedTouches.length?f.changedTouches[0]:null;if(this.target=f.target||f.srcElement,this.g=y,y=f.relatedTarget){if(D){e:{try{ie(y.nodeName);var Y=!0;break e}catch{}Y=!1}Y||(y=null)}}else _=="mouseover"?y=f.fromElement:_=="mouseout"&&(y=f.toElement);this.relatedTarget=y,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0),this.button=f.button,this.key=f.key||"",this.ctrlKey=f.ctrlKey,this.altKey=f.altKey,this.shiftKey=f.shiftKey,this.metaKey=f.metaKey,this.pointerId=f.pointerId||0,this.pointerType=typeof f.pointerType=="string"?f.pointerType:Se[f.pointerType]||"",this.state=f.state,this.i=f,f.defaultPrevented&&_e.aa.h.call(this)}}O(_e,oe);var Se={2:"touch",3:"pen",4:"mouse"};_e.prototype.h=function(){_e.aa.h.call(this);var f=this.i;f.preventDefault?f.preventDefault():f.returnValue=!1};var St="closure_listenable_"+(1e6*Math.random()|0),et=0;function qn(f,y,_,A,Y){this.listener=f,this.proxy=null,this.src=y,this.type=_,this.capture=!!A,this.ha=Y,this.key=++et,this.da=this.fa=!1}function yr(f){f.da=!0,f.listener=null,f.proxy=null,f.src=null,f.ha=null}function Wn(f){this.src=f,this.g={},this.h=0}Wn.prototype.add=function(f,y,_,A,Y){var ee=f.toString();f=this.g[ee],f||(f=this.g[ee]=[],this.h++);var he=vr(f,y,A,Y);return-1<he?(y=f[he],_||(y.fa=!1)):(y=new qn(y,this.src,ee,!!A,Y),y.fa=_,f.push(y)),y};function kn(f,y){var _=y.type;if(_ in f.g){var A=f.g[_],Y=Array.prototype.indexOf.call(A,y,void 0),ee;(ee=0<=Y)&&Array.prototype.splice.call(A,Y,1),ee&&(yr(y),f.g[_].length==0&&(delete f.g[_],f.h--))}}function vr(f,y,_,A){for(var Y=0;Y<f.length;++Y){var ee=f[Y];if(!ee.da&&ee.listener==y&&ee.capture==!!_&&ee.ha==A)return Y}return-1}var Sn="closure_lm_"+(1e6*Math.random()|0),di={};function $i(f,y,_,A,Y){if(Array.isArray(y)){for(var ee=0;ee<y.length;ee++)$i(f,y[ee],_,A,Y);return null}return _=Er(_),f&&f[St]?f.K(y,_,m(A)?!!A.capture:!1,Y):Vt(f,y,_,!1,A,Y)}function Vt(f,y,_,A,Y,ee){if(!y)throw Error("Invalid event type");var he=m(Y)?!!Y.capture:!!Y,Fe=Vr(f);if(Fe||(f[Sn]=Fe=new Wn(f)),_=Fe.add(y,_,A,he,ee),_.proxy)return _;if(A=Qi(),_.proxy=A,A.src=f,A.listener=_,f.addEventListener)be||(Y=he),Y===void 0&&(Y=!1),f.addEventListener(y.toString(),A,Y);else if(f.attachEvent)f.attachEvent(Lr(y.toString()),A);else if(f.addListener&&f.removeListener)f.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Qi(){function f(_){return y.call(f.src,f.listener,_)}const y=al;return f}function Mr(f,y,_,A,Y){if(Array.isArray(y))for(var ee=0;ee<y.length;ee++)Mr(f,y[ee],_,A,Y);else A=m(A)?!!A.capture:!!A,_=Er(_),f&&f[St]?(f=f.i,y=String(y).toString(),y in f.g&&(ee=f.g[y],_=vr(ee,_,A,Y),-1<_&&(yr(ee[_]),Array.prototype.splice.call(ee,_,1),ee.length==0&&(delete f.g[y],f.h--)))):f&&(f=Vr(f))&&(y=f.g[y.toString()],f=-1,y&&(f=vr(y,_,A,Y)),(_=-1<f?y[f]:null)&&pi(_))}function pi(f){if(typeof f!="number"&&f&&!f.da){var y=f.src;if(y&&y[St])kn(y.i,f);else{var _=f.type,A=f.proxy;y.removeEventListener?y.removeEventListener(_,A,f.capture):y.detachEvent?y.detachEvent(Lr(_),A):y.addListener&&y.removeListener&&y.removeListener(A),(_=Vr(y))?(kn(_,f),_.h==0&&(_.src=null,y[Sn]=null)):yr(f)}}}function Lr(f){return f in di?di[f]:di[f]="on"+f}function al(f,y){if(f.da)f=!0;else{y=new _e(y,this);var _=f.listener,A=f.ha||f.src;f.fa&&pi(f),f=_.call(A,y)}return f}function Vr(f){return f=f[Sn],f instanceof Wn?f:null}var _r="__closure_events_fn_"+(1e9*Math.random()>>>0);function Er(f){return typeof f=="function"?f:(f[_r]||(f[_r]=function(y){return f.handleEvent(y)}),f[_r])}function tt(){de.call(this),this.i=new Wn(this),this.M=this,this.F=null}O(tt,de),tt.prototype[St]=!0,tt.prototype.removeEventListener=function(f,y,_,A){Mr(this,f,y,_,A)};function Qe(f,y){var _,A=f.F;if(A)for(_=[];A;A=A.F)_.push(A);if(f=f.M,A=y.type||y,typeof y=="string")y=new oe(y,f);else if(y instanceof oe)y.target=y.target||f;else{var Y=y;y=new oe(A,f),N(y,Y)}if(Y=!0,_)for(var ee=_.length-1;0<=ee;ee--){var he=y.g=_[ee];Y=pn(he,A,!0,y)&&Y}if(he=y.g=f,Y=pn(he,A,!0,y)&&Y,Y=pn(he,A,!1,y)&&Y,_)for(ee=0;ee<_.length;ee++)he=y.g=_[ee],Y=pn(he,A,!1,y)&&Y}tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var f=this.i,y;for(y in f.g){for(var _=f.g[y],A=0;A<_.length;A++)yr(_[A]);delete f.g[y],f.h--}}this.F=null},tt.prototype.K=function(f,y,_,A){return this.i.add(String(f),y,!1,_,A)},tt.prototype.L=function(f,y,_,A){return this.i.add(String(f),y,!0,_,A)};function pn(f,y,_,A){if(y=f.i.g[String(y)],!y)return!0;y=y.concat();for(var Y=!0,ee=0;ee<y.length;++ee){var he=y[ee];if(he&&!he.da&&he.capture==_){var Fe=he.listener,Bt=he.ha||he.src;he.fa&&kn(f.i,he),Y=Fe.call(Bt,A)!==!1&&Y}}return Y&&!A.defaultPrevented}function Ut(f,y,_){if(typeof f=="function")_&&(f=T(f,_));else if(f&&typeof f.handleEvent=="function")f=T(f.handleEvent,f);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:d.setTimeout(f,y||0)}function Xi(f){f.g=Ut(()=>{f.g=null,f.i&&(f.i=!1,Xi(f))},f.l);const y=f.h;f.h=null,f.m.apply(null,y)}class Ms extends de{constructor(y,_){super(),this.m=y,this.l=_,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Xi(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zn(f){de.call(this),this.h=f,this.g={}}O(Zn,de);var Jn=[];function sn(f){G(f.g,function(y,_){this.g.hasOwnProperty(_)&&pi(y)},f),f.g={}}Zn.prototype.N=function(){Zn.aa.N.call(this),sn(this)},Zn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $t=d.JSON.stringify,Ur=d.JSON.parse,br=class{stringify(f){return d.JSON.stringify(f,void 0)}parse(f){return d.JSON.parse(f,void 0)}};function Ha(){}Ha.prototype.h=null;function jr(f){return f.h||(f.h=f.i())}function zr(){}var Tr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function An(){oe.call(this,"d")}O(An,oe);function Fa(){oe.call(this,"c")}O(Fa,oe);var er={},mt=null;function wn(){return mt=mt||new tt}er.La="serverreachability";function Wi(f){oe.call(this,er.La,f)}O(Wi,oe);function Sr(f){const y=wn();Qe(y,new Wi(y))}er.STAT_EVENT="statevent";function Zi(f,y){oe.call(this,er.STAT_EVENT,f),this.stat=y}O(Zi,oe);function ut(f){const y=wn();Qe(y,new Zi(y,f))}er.Ma="timingevent";function At(f,y){oe.call(this,er.Ma,f),this.size=y}O(At,oe);function wt(f,y){if(typeof f!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){f()},y)}function vt(){this.g=!0}vt.prototype.xa=function(){this.g=!1};function Br(f,y,_,A,Y,ee){f.info(function(){if(f.g)if(ee)for(var he="",Fe=ee.split("&"),Bt=0;Bt<Fe.length;Bt++){var Ge=Fe[Bt].split("=");if(1<Ge.length){var Zt=Ge[0];Ge=Ge[1];var Ht=Zt.split("_");he=2<=Ht.length&&Ht[1]=="type"?he+(Zt+"="+Ge+"&"):he+(Zt+"=redacted&")}}else he=null;else he=ee;return"XMLHTTP REQ ("+A+") [attempt "+Y+"]: "+y+`
`+_+`
`+he})}function Ls(f,y,_,A,Y,ee,he){f.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+Y+"]: "+y+`
`+_+`
`+ee+" "+he})}function Ar(f,y,_,A){f.info(function(){return"XMLHTTP TEXT ("+y+"): "+Hr(f,_)+(A?" "+A:"")})}function Ji(f,y){f.info(function(){return"TIMEOUT: "+y})}vt.prototype.info=function(){};function Hr(f,y){if(!f.g)return y;if(!y)return null;try{var _=JSON.parse(y);if(_){for(f=0;f<_.length;f++)if(Array.isArray(_[f])){var A=_[f];if(!(2>A.length)){var Y=A[1];if(Array.isArray(Y)&&!(1>Y.length)){var ee=Y[0];if(ee!="noop"&&ee!="stop"&&ee!="close")for(var he=1;he<Y.length;he++)Y[he]=""}}}}return $t(_)}catch{return y}}var Qt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},tr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Un;function jn(){}O(jn,Ha),jn.prototype.g=function(){return new XMLHttpRequest},jn.prototype.i=function(){return{}},Un=new jn;function Xt(f,y,_,A){this.j=f,this.i=y,this.l=_,this.R=A||1,this.U=new Zn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _t}function _t(){this.i=null,this.g="",this.h=!1}var ve={},H={};function le(f,y,_){f.L=1,f.v=$a(zn(y)),f.m=_,f.P=!0,me(f,null)}function me(f,y){f.F=Date.now(),ht(f),f.A=zn(f.v);var _=f.A,A=f.R;Array.isArray(A)||(A=[String(A)]),fl(_.i,"t",A),f.C=0,_=f.j.J,f.h=new _t,f.g=hc(f.j,_?y:null,!f.m),0<f.O&&(f.M=new Ms(T(f.Y,f,f.g),f.O)),y=f.U,_=f.g,A=f.ca;var Y="readystatechange";Array.isArray(Y)||(Y&&(Jn[0]=Y.toString()),Y=Jn);for(var ee=0;ee<Y.length;ee++){var he=$i(_,Y[ee],A||y.handleEvent,!1,y.h||y);if(!he)break;y.g[he.key]=he}y=f.H?R(f.H):{},f.m?(f.u||(f.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",f.g.ea(f.A,f.u,f.m,y)):(f.u="GET",f.g.ea(f.A,f.u,null,y)),Sr(),Br(f.i,f.u,f.A,f.l,f.R,f.m)}Xt.prototype.ca=function(f){f=f.target;const y=this.M;y&&ar(f)==3?y.j():this.Y(f)},Xt.prototype.Y=function(f){try{if(f==this.g)e:{const Ht=ar(this.g);var y=this.g.Ba();const Ti=this.g.Z();if(!(3>Ht)&&(Ht!=3||this.g&&(this.h.h||this.g.oa()||ic(this.g)))){this.J||Ht!=4||y==7||(y==8||0>=Ti?Sr(3):Sr(2)),zt(this);var _=this.g.Z();this.X=_;t:if(nt(this)){var A=ic(this.g);f="";var Y=A.length,ee=ar(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$e(this),mn(this);var he="";break t}this.h.i=new d.TextDecoder}for(y=0;y<Y;y++)this.h.h=!0,f+=this.h.i.decode(A[y],{stream:!(ee&&y==Y-1)});A.length=0,this.h.g+=f,this.C=0,he=this.h.g}else he=this.g.oa();if(this.o=_==200,Ls(this.i,this.u,this.A,this.l,this.R,Ht,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,Bt=this.g;if((Fe=Bt.g?Bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(Fe)){var Ge=Fe;break t}}Ge=null}if(_=Ge)Ar(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fr(this,_);else{this.o=!1,this.s=3,ut(12),$e(this),mn(this);break e}}if(this.P){_=!0;let on;for(;!this.J&&this.C<he.length;)if(on=It(this,he),on==H){Ht==4&&(this.s=4,ut(14),_=!1),Ar(this.i,this.l,null,"[Incomplete Response]");break}else if(on==ve){this.s=4,ut(15),Ar(this.i,this.l,he,"[Invalid Chunk]"),_=!1;break}else Ar(this.i,this.l,on,null),Fr(this,on);if(nt(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ht!=4||he.length!=0||this.h.h||(this.s=1,ut(16),_=!1),this.o=this.o&&_,!_)Ar(this.i,this.l,he,"[Invalid Chunked Response]"),$e(this),mn(this);else if(0<he.length&&!this.W){this.W=!0;var Zt=this.j;Zt.g==this&&Zt.ba&&!Zt.M&&(Zt.j.info("Great, no buffering proxy detected. Bytes received: "+he.length),ns(Zt),Zt.M=!0,ut(11))}}else Ar(this.i,this.l,he,null),Fr(this,he);Ht==4&&$e(this),this.o&&!this.J&&(Ht==4?uc(this.j,this):(this.o=!1,ht(this)))}else Yh(this.g),_==400&&0<he.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),$e(this),mn(this)}}}catch{}finally{}};function nt(f){return f.g?f.u=="GET"&&f.L!=2&&f.j.Ca:!1}function It(f,y){var _=f.C,A=y.indexOf(`
`,_);return A==-1?H:(_=Number(y.substring(_,A)),isNaN(_)?ve:(A+=1,A+_>y.length?H:(y=y.slice(A,A+_),f.C=A+_,y)))}Xt.prototype.cancel=function(){this.J=!0,$e(this)};function ht(f){f.S=Date.now()+f.I,jt(f,f.I)}function jt(f,y){if(f.B!=null)throw Error("WatchDog timer not null");f.B=wt(T(f.ba,f),y)}function zt(f){f.B&&(d.clearTimeout(f.B),f.B=null)}Xt.prototype.ba=function(){this.B=null;const f=Date.now();0<=f-this.S?(Ji(this.i,this.A),this.L!=2&&(Sr(),ut(17)),$e(this),this.s=2,mn(this)):jt(this,this.S-f)};function mn(f){f.j.G==0||f.J||uc(f.j,f)}function $e(f){zt(f);var y=f.M;y&&typeof y.ma=="function"&&y.ma(),f.M=null,sn(f.U),f.g&&(y=f.g,f.g=null,y.abort(),y.ma())}function Fr(f,y){try{var _=f.j;if(_.G!=0&&(_.g==f||sl(_.h,f))){if(!f.K&&sl(_.h,f)&&_.G==3){try{var A=_.Da.g.parse(y)}catch{A=null}if(Array.isArray(A)&&A.length==3){var Y=A;if(Y[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<f.F)Qs(_),Ks(_);else break e;gl(_),ut(18)}}else _.za=Y[1],0<_.za-_.T&&37500>Y[2]&&_.F&&_.v==0&&!_.C&&(_.C=wt(T(_.Za,_),6e3));if(1>=Us(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else bi(_,11)}else if((f.K||_.g==f)&&Qs(_),!K(y))for(Y=_.Da.g.parse(y),y=0;y<Y.length;y++){let Ge=Y[y];if(_.T=Ge[0],Ge=Ge[1],_.G==2)if(Ge[0]=="c"){_.K=Ge[1],_.ia=Ge[2];const Zt=Ge[3];Zt!=null&&(_.la=Zt,_.j.info("VER="+_.la));const Ht=Ge[4];Ht!=null&&(_.Aa=Ht,_.j.info("SVER="+_.Aa));const Ti=Ge[5];Ti!=null&&typeof Ti=="number"&&0<Ti&&(A=1.5*Ti,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const on=f.g;if(on){const Wr=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wr){var ee=A.h;ee.g||Wr.indexOf("spdy")==-1&&Wr.indexOf("quic")==-1&&Wr.indexOf("h2")==-1||(ee.j=ee.l,ee.g=new Set,ee.h&&(js(ee,ee.h),ee.h=null))}if(A.D){const vl=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;vl&&(A.ya=vl,at(A.I,A.D,vl))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-f.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var he=f;if(A.qa=fc(A,A.J?A.ia:null,A.W),he.K){Rn(A.h,he);var Fe=he,Bt=A.L;Bt&&(Fe.I=Bt),Fe.B&&(zt(Fe),ht(Fe)),A.g=he}else oc(A);0<_.i.length&&$s(_)}else Ge[0]!="stop"&&Ge[0]!="close"||bi(_,7);else _.G==3&&(Ge[0]=="stop"||Ge[0]=="close"?Ge[0]=="stop"?bi(_,7):pl(_):Ge[0]!="noop"&&_.l&&_.l.ta(Ge),_.v=0)}}Sr(4)}catch{}}var Ga=class{constructor(f,y){this.g=f,this.map=y}};function mi(f){this.l=f||10,d.PerformanceNavigationTiming?(f=d.performance.getEntriesByType("navigation"),f=0<f.length&&(f[0].nextHopProtocol=="hq"||f[0].nextHopProtocol=="h2")):f=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=f?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vs(f){return f.h?!0:f.g?f.g.size>=f.j:!1}function Us(f){return f.h?1:f.g?f.g.size:0}function sl(f,y){return f.h?f.h==y:f.g?f.g.has(y):!1}function js(f,y){f.g?f.g.add(y):f.h=y}function Rn(f,y){f.h&&f.h==y?f.h=null:f.g&&f.g.has(y)&&f.g.delete(y)}mi.prototype.cancel=function(){if(this.i=ol(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const f of this.g.values())f.cancel();this.g.clear()}};function ol(f){if(f.h!=null)return f.i.concat(f.h.D);if(f.g!=null&&f.g.size!==0){let y=f.i;for(const _ of f.g.values())y=y.concat(_.D);return y}return V(f.i)}function Bh(f){if(f.V&&typeof f.V=="function")return f.V();if(typeof Map<"u"&&f instanceof Map||typeof Set<"u"&&f instanceof Set)return Array.from(f.values());if(typeof f=="string")return f.split("");if(p(f)){for(var y=[],_=f.length,A=0;A<_;A++)y.push(f[A]);return y}y=[],_=0;for(A in f)y[_++]=f[A];return y}function zs(f){if(f.na&&typeof f.na=="function")return f.na();if(!f.V||typeof f.V!="function"){if(typeof Map<"u"&&f instanceof Map)return Array.from(f.keys());if(!(typeof Set<"u"&&f instanceof Set)){if(p(f)||typeof f=="string"){var y=[];f=f.length;for(var _=0;_<f;_++)y.push(_);return y}y=[],_=0;for(const A in f)y[_++]=A;return y}}}function ll(f,y){if(f.forEach&&typeof f.forEach=="function")f.forEach(y,void 0);else if(p(f)||typeof f=="string")Array.prototype.forEach.call(f,y,void 0);else for(var _=zs(f),A=Bh(f),Y=A.length,ee=0;ee<Y;ee++)y.call(void 0,A[ee],_&&_[ee],f)}var Ya=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hh(f,y){if(f){f=f.split("&");for(var _=0;_<f.length;_++){var A=f[_].indexOf("="),Y=null;if(0<=A){var ee=f[_].substring(0,A);Y=f[_].substring(A+1)}else ee=f[_];y(ee,Y?decodeURIComponent(Y.replace(/\+/g," ")):"")}}}function kt(f){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,f instanceof kt){this.h=f.h,Ka(this,f.j),this.o=f.o,this.g=f.g,ea(this,f.s),this.l=f.l;var y=f.i,_=new yi;_.i=y.i,y.g&&(_.g=new Map(y.g),_.h=y.h),gi(this,_),this.m=f.m}else f&&(y=String(f).match(Ya))?(this.h=!1,Ka(this,y[1]||"",!0),this.o=nr(y[2]||""),this.g=nr(y[3]||"",!0),ea(this,y[4]),this.l=nr(y[5]||"",!0),gi(this,y[6]||"",!0),this.m=nr(y[7]||"")):(this.h=!1,this.i=new yi(null,this.h))}kt.prototype.toString=function(){var f=[],y=this.j;y&&f.push(Qa(y,ul,!0),":");var _=this.g;return(_||y=="file")&&(f.push("//"),(y=this.o)&&f.push(Qa(y,ul,!0),"@"),f.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&f.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&f.push("/"),f.push(Qa(_,_.charAt(0)=="/"?Fh:cl,!0))),(_=this.i.toString())&&f.push("?",_),(_=this.m)&&f.push("#",Qa(_,Bs)),f.join("")};function zn(f){return new kt(f)}function Ka(f,y,_){f.j=_?nr(y,!0):y,f.j&&(f.j=f.j.replace(/:$/,""))}function ea(f,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);f.s=y}else f.s=null}function gi(f,y,_){y instanceof yi?(f.i=y,nc(f.i,f.h)):(_||(y=Qa(y,Gh)),f.i=new yi(y,f.h))}function at(f,y,_){f.i.set(y,_)}function $a(f){return at(f,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),f}function nr(f,y){return f?y?decodeURI(f.replace(/%25/g,"%2525")):decodeURIComponent(f):""}function Qa(f,y,_){return typeof f=="string"?(f=encodeURI(f).replace(y,tc),_&&(f=f.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f):null}function tc(f){return f=f.charCodeAt(0),"%"+(f>>4&15).toString(16)+(f&15).toString(16)}var ul=/[#\/\?@]/g,cl=/[#\?:]/g,Fh=/[#\?]/g,Gh=/[#\?@]/g,Bs=/#/g;function yi(f,y){this.h=this.g=null,this.i=f||null,this.j=!!y}function rr(f){f.g||(f.g=new Map,f.h=0,f.i&&Hh(f.i,function(y,_){f.add(decodeURIComponent(y.replace(/\+/g," ")),_)}))}r=yi.prototype,r.add=function(f,y){rr(this),this.i=null,f=Gr(this,f);var _=this.g.get(f);return _||this.g.set(f,_=[]),_.push(y),this.h+=1,this};function vi(f,y){rr(f),y=Gr(f,y),f.g.has(y)&&(f.i=null,f.h-=f.g.get(y).length,f.g.delete(y))}function _i(f,y){return rr(f),y=Gr(f,y),f.g.has(y)}r.forEach=function(f,y){rr(this),this.g.forEach(function(_,A){_.forEach(function(Y){f.call(y,Y,A,this)},this)},this)},r.na=function(){rr(this);const f=Array.from(this.g.values()),y=Array.from(this.g.keys()),_=[];for(let A=0;A<y.length;A++){const Y=f[A];for(let ee=0;ee<Y.length;ee++)_.push(y[A])}return _},r.V=function(f){rr(this);let y=[];if(typeof f=="string")_i(this,f)&&(y=y.concat(this.g.get(Gr(this,f))));else{f=Array.from(this.g.values());for(let _=0;_<f.length;_++)y=y.concat(f[_])}return y},r.set=function(f,y){return rr(this),this.i=null,f=Gr(this,f),_i(this,f)&&(this.h-=this.g.get(f).length),this.g.set(f,[y]),this.h+=1,this},r.get=function(f,y){return f?(f=this.V(f),0<f.length?String(f[0]):y):y};function fl(f,y,_){vi(f,y),0<_.length&&(f.i=null,f.g.set(Gr(f,y),V(_)),f.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const f=[],y=Array.from(this.g.keys());for(var _=0;_<y.length;_++){var A=y[_];const ee=encodeURIComponent(String(A)),he=this.V(A);for(A=0;A<he.length;A++){var Y=ee;he[A]!==""&&(Y+="="+encodeURIComponent(String(he[A]))),f.push(Y)}}return this.i=f.join("&")};function Gr(f,y){return y=String(y),f.j&&(y=y.toLowerCase()),y}function nc(f,y){y&&!f.j&&(rr(f),f.i=null,f.g.forEach(function(_,A){var Y=A.toLowerCase();A!=Y&&(vi(this,A),fl(this,Y,_))},f)),f.j=y}function Xa(f,y){const _=new vt;if(d.Image){const A=new Image;A.onload=w(ir,_,"TestLoadImage: loaded",!0,y,A),A.onerror=w(ir,_,"TestLoadImage: error",!1,y,A),A.onabort=w(ir,_,"TestLoadImage: abort",!1,y,A),A.ontimeout=w(ir,_,"TestLoadImage: timeout",!1,y,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=f}else y(!1)}function wr(f,y){const _=new vt,A=new AbortController,Y=setTimeout(()=>{A.abort(),ir(_,"TestPingServer: timeout",!1,y)},1e4);fetch(f,{signal:A.signal}).then(ee=>{clearTimeout(Y),ee.ok?ir(_,"TestPingServer: ok",!0,y):ir(_,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(Y),ir(_,"TestPingServer: error",!1,y)})}function ir(f,y,_,A,Y){try{Y&&(Y.onload=null,Y.onerror=null,Y.onabort=null,Y.ontimeout=null),A(_)}catch{}}function Wa(){this.g=new br}function Yr(f,y,_){const A=_||"";try{ll(f,function(Y,ee){let he=Y;m(Y)&&(he=$t(Y)),y.push(A+ee+"="+encodeURIComponent(he))})}catch(Y){throw y.push(A+"type="+encodeURIComponent("_badmap")),Y}}function ta(f){this.l=f.Ub||null,this.j=f.eb||!1}O(ta,Ha),ta.prototype.g=function(){return new Ei(this.l,this.j)},ta.prototype.i=function(f){return function(){return f}}({});function Ei(f,y){tt.call(this),this.D=f,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(Ei,tt),r=Ei.prototype,r.open=function(f,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=f,this.A=y,this.readyState=1,$r(this)},r.send=function(f){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};f&&(y.body=f),(this.D||d).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kr(this)),this.readyState=0},r.Sa=function(f){if(this.g&&(this.l=f,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=f.headers,this.readyState=2,$r(this)),this.g&&(this.readyState=3,$r(this),this.g)))if(this.responseType==="arraybuffer")f.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in f){if(this.j=f.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hl(this)}else f.text().then(this.Ra.bind(this),this.ga.bind(this))};function hl(f){f.j.read().then(f.Pa.bind(f)).catch(f.ga.bind(f))}r.Pa=function(f){if(this.g){if(this.o&&f.value)this.response.push(f.value);else if(!this.o){var y=f.value?f.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!f.done}))&&(this.response=this.responseText+=y)}f.done?Kr(this):$r(this),this.readyState==3&&hl(this)}},r.Ra=function(f){this.g&&(this.response=this.responseText=f,Kr(this))},r.Qa=function(f){this.g&&(this.response=f,Kr(this))},r.ga=function(){this.g&&Kr(this)};function Kr(f){f.readyState=4,f.l=null,f.j=null,f.v=null,$r(f)}r.setRequestHeader=function(f,y){this.u.append(f,y)},r.getResponseHeader=function(f){return this.h&&this.h.get(f.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const f=[],y=this.h.entries();for(var _=y.next();!_.done;)_=_.value,f.push(_[0]+": "+_[1]),_=y.next();return f.join(`\r
`)};function $r(f){f.onreadystatechange&&f.onreadystatechange.call(f)}Object.defineProperty(Ei.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(f){this.m=f?"include":"same-origin"}});function dl(f){let y="";return G(f,function(_,A){y+=A,y+=":",y+=_,y+=`\r
`}),y}function Wt(f,y,_){e:{for(A in _){var A=!1;break e}A=!0}A||(_=dl(_),typeof f=="string"?_!=null&&encodeURIComponent(String(_)):at(f,y,_))}function Ze(f){tt.call(this),this.headers=new Map,this.o=f||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(Ze,tt);var Hs=/^https?$/i,Za=["POST","PUT"];r=Ze.prototype,r.Ha=function(f){this.J=f},r.ea=function(f,y,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+f);y=y?y.toUpperCase():"GET",this.D=f,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Un.g(),this.v=this.o?jr(this.o):jr(Un),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(y,String(f),!0),this.B=!1}catch(ee){rc(this,ee);return}if(f=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var Y in A)_.set(Y,A[Y]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const ee of A.keys())_.set(ee,A.get(ee));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(ee=>ee.toLowerCase()=="content-type"),Y=d.FormData&&f instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Za,y,void 0))||A||Y||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[ee,he]of _)this.g.setRequestHeader(ee,he);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ja(this),this.u=!0,this.g.send(f),this.u=!1}catch(ee){rc(this,ee)}};function rc(f,y){f.h=!1,f.g&&(f.j=!0,f.g.abort(),f.j=!1),f.l=y,f.m=5,Fs(f),Qr(f)}function Fs(f){f.A||(f.A=!0,Qe(f,"complete"),Qe(f,"error"))}r.abort=function(f){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=f||7,Qe(this,"complete"),Qe(this,"abort"),Qr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qr(this,!0)),Ze.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Gs(this):this.bb())},r.bb=function(){Gs(this)};function Gs(f){if(f.h&&typeof c<"u"&&(!f.v[1]||ar(f)!=4||f.Z()!=2)){if(f.u&&ar(f)==4)Ut(f.Ea,0,f);else if(Qe(f,"readystatechange"),ar(f)==4){f.h=!1;try{const he=f.Z();e:switch(he){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var _;if(!(_=y)){var A;if(A=he===0){var Y=String(f.D).match(Ya)[1]||null;!Y&&d.self&&d.self.location&&(Y=d.self.location.protocol.slice(0,-1)),A=!Hs.test(Y?Y.toLowerCase():"")}_=A}if(_)Qe(f,"complete"),Qe(f,"success");else{f.m=6;try{var ee=2<ar(f)?f.g.statusText:""}catch{ee=""}f.l=ee+" ["+f.Z()+"]",Fs(f)}}finally{Qr(f)}}}}function Qr(f,y){if(f.g){Ja(f);const _=f.g,A=f.v[0]?()=>{}:null;f.g=null,f.v=null,y||Qe(f,"ready");try{_.onreadystatechange=A}catch{}}}function Ja(f){f.I&&(d.clearTimeout(f.I),f.I=null)}r.isActive=function(){return!!this.g};function ar(f){return f.g?f.g.readyState:0}r.Z=function(){try{return 2<ar(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(f){if(this.g){var y=this.g.responseText;return f&&y.indexOf(f)==0&&(y=y.substring(f.length)),Ur(y)}};function ic(f){try{if(!f.g)return null;if("response"in f.g)return f.g.response;switch(f.H){case"":case"text":return f.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in f.g)return f.g.mozResponseArrayBuffer}return null}catch{return null}}function Yh(f){const y={};f=(f.g&&2<=ar(f)&&f.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<f.length;A++){if(K(f[A]))continue;var _=k(f[A]);const Y=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const ee=y[Y]||[];y[Y]=ee,ee.push(_)}C(y,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function es(f,y,_){return _&&_.internalChannelParams&&_.internalChannelParams[f]||y}function Ys(f){this.Aa=0,this.i=[],this.j=new vt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=es("failFast",!1,f),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=es("baseRetryDelayMs",5e3,f),this.cb=es("retryDelaySeedMs",1e4,f),this.Wa=es("forwardChannelMaxRetries",2,f),this.wa=es("forwardChannelRequestTimeoutMs",2e4,f),this.pa=f&&f.xmlHttpFactory||void 0,this.Xa=f&&f.Tb||void 0,this.Ca=f&&f.useFetchStreams||!1,this.L=void 0,this.J=f&&f.supportsCrossDomainXhr||!1,this.K="",this.h=new mi(f&&f.concurrentRequestLimit),this.Da=new Wa,this.P=f&&f.fastHandshake||!1,this.O=f&&f.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=f&&f.Rb||!1,f&&f.xa&&this.j.xa(),f&&f.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&f&&f.detectBufferingProxy||!1,this.ja=void 0,f&&f.longPollingTimeout&&0<f.longPollingTimeout&&(this.ja=f.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ys.prototype,r.la=8,r.G=1,r.connect=function(f,y,_,A){ut(0),this.W=f,this.H=y||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=fc(this,null,this.W),$s(this)};function pl(f){if(ac(f),f.G==3){var y=f.U++,_=zn(f.I);if(at(_,"SID",f.K),at(_,"RID",y),at(_,"TYPE","terminate"),ts(f,_),y=new Xt(f,f.j,y),y.L=2,y.v=$a(zn(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(y.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=y.v,_=!0),_||(y.g=hc(y.j,null),y.g.ea(y.v)),y.F=Date.now(),ht(y)}cc(f)}function Ks(f){f.g&&(ns(f),f.g.cancel(),f.g=null)}function ac(f){Ks(f),f.u&&(d.clearTimeout(f.u),f.u=null),Qs(f),f.h.cancel(),f.s&&(typeof f.s=="number"&&d.clearTimeout(f.s),f.s=null)}function $s(f){if(!Vs(f.h)&&!f.s){f.s=!0;var y=f.Ga;ce||L(),fe||(ce(),fe=!0),Pe.add(y,f),f.B=0}}function Kh(f,y){return Us(f.h)>=f.h.j-(f.s?1:0)?!1:f.s?(f.i=y.D.concat(f.i),!0):f.G==1||f.G==2||f.B>=(f.Va?0:f.Wa)?!1:(f.s=wt(T(f.Ga,f,y),yl(f,f.B)),f.B++,!0)}r.Ga=function(f){if(this.s)if(this.s=null,this.G==1){if(!f){this.U=Math.floor(1e5*Math.random()),f=this.U++;const Y=new Xt(this,this.j,f);let ee=this.o;if(this.S&&(ee?(ee=R(ee),N(ee,this.S)):ee=this.S),this.m!==null||this.O||(Y.H=ee,ee=null),this.P)e:{for(var y=0,_=0;_<this.i.length;_++){t:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(y+=A,4096<y){y=_;break e}if(y===4096||_===this.i.length-1){y=_+1;break e}}y=1e3}else y=1e3;y=sc(this,Y,y),_=zn(this.I),at(_,"RID",f),at(_,"CVER",22),this.D&&at(_,"X-HTTP-Session-Id",this.D),ts(this,_),ee&&(this.O?y="headers="+encodeURIComponent(String(dl(ee)))+"&"+y:this.m&&Wt(_,this.m,ee)),js(this.h,Y),this.Ua&&at(_,"TYPE","init"),this.P?(at(_,"$req",y),at(_,"SID","null"),Y.T=!0,le(Y,_,null)):le(Y,_,y),this.G=2}}else this.G==3&&(f?ml(this,f):this.i.length==0||Vs(this.h)||ml(this))};function ml(f,y){var _;y?_=y.l:_=f.U++;const A=zn(f.I);at(A,"SID",f.K),at(A,"RID",_),at(A,"AID",f.T),ts(f,A),f.m&&f.o&&Wt(A,f.m,f.o),_=new Xt(f,f.j,_,f.B+1),f.m===null&&(_.H=f.o),y&&(f.i=y.D.concat(f.i)),y=sc(f,_,1e3),_.I=Math.round(.5*f.wa)+Math.round(.5*f.wa*Math.random()),js(f.h,_),le(_,A,y)}function ts(f,y){f.H&&G(f.H,function(_,A){at(y,A,_)}),f.l&&ll({},function(_,A){at(y,A,_)})}function sc(f,y,_){_=Math.min(f.i.length,_);var A=f.l?T(f.l.Na,f.l,f):null;e:{var Y=f.i;let ee=-1;for(;;){const he=["count="+_];ee==-1?0<_?(ee=Y[0].g,he.push("ofs="+ee)):ee=0:he.push("ofs="+ee);let Fe=!0;for(let Bt=0;Bt<_;Bt++){let Ge=Y[Bt].g;const Zt=Y[Bt].map;if(Ge-=ee,0>Ge)ee=Math.max(0,Y[Bt].g-100),Fe=!1;else try{Yr(Zt,he,"req"+Ge+"_")}catch{A&&A(Zt)}}if(Fe){A=he.join("&");break e}}}return f=f.i.splice(0,_),y.D=f,A}function oc(f){if(!f.g&&!f.u){f.Y=1;var y=f.Fa;ce||L(),fe||(ce(),fe=!0),Pe.add(y,f),f.v=0}}function gl(f){return f.g||f.u||3<=f.v?!1:(f.Y++,f.u=wt(T(f.Fa,f),yl(f,f.v)),f.v++,!0)}r.Fa=function(){if(this.u=null,lc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var f=2*this.R;this.j.info("BP detection timer enabled: "+f),this.A=wt(T(this.ab,this),f)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),Ks(this),lc(this))};function ns(f){f.A!=null&&(d.clearTimeout(f.A),f.A=null)}function lc(f){f.g=new Xt(f,f.j,"rpc",f.Y),f.m===null&&(f.g.H=f.o),f.g.O=0;var y=zn(f.qa);at(y,"RID","rpc"),at(y,"SID",f.K),at(y,"AID",f.T),at(y,"CI",f.F?"0":"1"),!f.F&&f.ja&&at(y,"TO",f.ja),at(y,"TYPE","xmlhttp"),ts(f,y),f.m&&f.o&&Wt(y,f.m,f.o),f.L&&(f.g.I=f.L);var _=f.g;f=f.ia,_.L=1,_.v=$a(zn(y)),_.m=null,_.P=!0,me(_,f)}r.Za=function(){this.C!=null&&(this.C=null,Ks(this),gl(this),ut(19))};function Qs(f){f.C!=null&&(d.clearTimeout(f.C),f.C=null)}function uc(f,y){var _=null;if(f.g==y){Qs(f),ns(f),f.g=null;var A=2}else if(sl(f.h,y))_=y.D,Rn(f.h,y),A=1;else return;if(f.G!=0){if(y.o)if(A==1){_=y.m?y.m.length:0,y=Date.now()-y.F;var Y=f.B;A=wn(),Qe(A,new At(A,_)),$s(f)}else oc(f);else if(Y=y.s,Y==3||Y==0&&0<y.X||!(A==1&&Kh(f,y)||A==2&&gl(f)))switch(_&&0<_.length&&(y=f.h,y.i=y.i.concat(_)),Y){case 1:bi(f,5);break;case 4:bi(f,10);break;case 3:bi(f,6);break;default:bi(f,2)}}}function yl(f,y){let _=f.Ta+Math.floor(Math.random()*f.cb);return f.isActive()||(_*=2),_*y}function bi(f,y){if(f.j.info("Error code "+y),y==2){var _=T(f.fb,f),A=f.Xa;const Y=!A;A=new kt(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ka(A,"https"),$a(A),Y?Xa(A.toString(),_):wr(A.toString(),_)}else ut(2);f.G=0,f.l&&f.l.sa(y),cc(f),ac(f)}r.fb=function(f){f?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function cc(f){if(f.G=0,f.ka=[],f.l){const y=ol(f.h);(y.length!=0||f.i.length!=0)&&(P(f.ka,y),P(f.ka,f.i),f.h.i.length=0,V(f.i),f.i.length=0),f.l.ra()}}function fc(f,y,_){var A=_ instanceof kt?zn(_):new kt(_);if(A.g!="")y&&(A.g=y+"."+A.g),ea(A,A.s);else{var Y=d.location;A=Y.protocol,y=y?y+"."+Y.hostname:Y.hostname,Y=+Y.port;var ee=new kt(null);A&&Ka(ee,A),y&&(ee.g=y),Y&&ea(ee,Y),_&&(ee.l=_),A=ee}return _=f.D,y=f.ya,_&&y&&at(A,_,y),at(A,"VER",f.la),ts(f,A),A}function hc(f,y,_){if(y&&!f.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=f.Ca&&!f.pa?new Ze(new ta({eb:_})):new Ze(f.pa),y.Ha(f.J),y}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function dc(){}r=dc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Xs(){}Xs.prototype.g=function(f,y){return new Cn(f,y)};function Cn(f,y){tt.call(this),this.g=new Ys(y),this.l=f,this.h=y&&y.messageUrlParams||null,f=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(f?f["X-Client-Protocol"]="webchannel":f={"X-Client-Protocol":"webchannel"}),this.g.o=f,f=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(f?f["X-WebChannel-Content-Type"]=y.messageContentType:f={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(f?f["X-WebChannel-Client-Profile"]=y.va:f={"X-WebChannel-Client-Profile":y.va}),this.g.S=f,(f=y&&y.Sb)&&!K(f)&&(this.g.m=f),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!K(y)&&(this.g.D=y,f=this.h,f!==null&&y in f&&(f=this.h,y in f&&delete f[y])),this.j=new Xr(this)}O(Cn,tt),Cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Cn.prototype.close=function(){pl(this.g)},Cn.prototype.o=function(f){var y=this.g;if(typeof f=="string"){var _={};_.__data__=f,f=_}else this.u&&(_={},_.__data__=$t(f),f=_);y.i.push(new Ga(y.Ya++,f)),y.G==3&&$s(y)},Cn.prototype.N=function(){this.g.l=null,delete this.j,pl(this.g),delete this.g,Cn.aa.N.call(this)};function pc(f){An.call(this),f.__headers__&&(this.headers=f.__headers__,this.statusCode=f.__status__,delete f.__headers__,delete f.__status__);var y=f.__sm__;if(y){e:{for(const _ in y){f=_;break e}f=void 0}(this.i=f)&&(f=this.i,y=y!==null&&f in y?y[f]:void 0),this.data=y}else this.data=f}O(pc,An);function mc(){Fa.call(this),this.status=1}O(mc,Fa);function Xr(f){this.g=f}O(Xr,dc),Xr.prototype.ua=function(){Qe(this.g,"a")},Xr.prototype.ta=function(f){Qe(this.g,new pc(f))},Xr.prototype.sa=function(f){Qe(this.g,new mc)},Xr.prototype.ra=function(){Qe(this.g,"b")},Xs.prototype.createWebChannel=Xs.prototype.g,Cn.prototype.send=Cn.prototype.o,Cn.prototype.open=Cn.prototype.m,Cn.prototype.close=Cn.prototype.close,zT=function(){return new Xs},jT=function(){return wn()},UT=er,Tm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Qt.NO_ERROR=0,Qt.TIMEOUT=8,Qt.HTTP_ERROR=6,Lf=Qt,tr.COMPLETE="complete",VT=tr,zr.EventType=Tr,Tr.OPEN="a",Tr.CLOSE="b",Tr.ERROR="c",Tr.MESSAGE="d",tt.prototype.listen=tt.prototype.K,Eu=zr,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,LT=Ze}).apply(typeof _f<"u"?_f:typeof self<"u"?self:typeof window<"u"?window:{});const HE="@firebase/firestore",FE="4.7.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}En.UNAUTHENTICATED=new En(null),En.GOOGLE_CREDENTIALS=new En("google-credentials-uid"),En.FIRST_PARTY=new En("first-party-uid"),En.MOCK_USER=new En("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo="11.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new Wm("@firebase/firestore");function xo(){return Cs.logLevel}function ge(r,...e){if(Cs.logLevel<=Be.DEBUG){const t=e.map(ug);Cs.debug(`Firestore (${Zo}): ${r}`,...t)}}function Fi(r,...e){if(Cs.logLevel<=Be.ERROR){const t=e.map(ug);Cs.error(`Firestore (${Zo}): ${r}`,...t)}}function jo(r,...e){if(Cs.logLevel<=Be.WARN){const t=e.map(ug);Cs.warn(`Firestore (${Zo}): ${r}`,...t)}}function ug(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(r,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,BT(r,i,t)}function BT(r,e,t){let i=`FIRESTORE (${Zo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Fi(i),new Error(i)}function Je(r,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,r||BT(e,s,i)}function qe(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Te extends Ki{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(En.UNAUTHENTICATED))}shutdown(){}}class OO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class DO{constructor(e){this.t=e,this.currentUser=En.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Je(this.o===void 0,42304);let i=this.i;const s=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Na;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Na,e.enqueueRetryable(()=>s(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await s(this.currentUser)})},d=p=>{ge("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ge("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Na)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(ge("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Je(typeof i.accessToken=="string",31837,{l:i}),new HT(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Je(e===null||typeof e=="string",2055,{h:e}),new En(e)}}class qO{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=En.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class kO{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new qO(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(En.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class GE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NO{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Je(this.o===void 0,3512);const i=l=>{l.error!=null&&ge("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,ge("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const s=l=>{ge("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>s(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?s(l):ge("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new GE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Je(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new GE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PO(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=PO(40);for(let l=0;l<s.length;++l)i.length<20&&s[l]<t&&(i+=e.charAt(s[l]%62))}return i}}function Le(r,e){return r<e?-1:r>e?1:0}function Sm(r,e){let t=0;for(;t<r.length&&t<e.length;){const i=r.codePointAt(t),s=e.codePointAt(t);if(i!==s){if(i<128&&s<128)return Le(i,s);{const l=FT(),c=MO(l.encode(YE(r,t)),l.encode(YE(e,t)));return c!==0?c:Le(i,s)}}t+=i>65535?2:1}return Le(r.length,e.length)}function YE(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function MO(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Le(r[t],e[t]);return Le(r.length,e.length)}function zo(r,e,t){return r.length===e.length&&r.every((i,s)=>t(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=-62135596800,$E=1e6;class pt{static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*$E);return new pt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Te(ue.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Te(ue.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<KE)throw new Te(ue.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Te(ue.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$E}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-KE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{static fromTimestamp(e){return new De(e)}static min(){return new De(new pt(0,0))}static max(){return new De(new pt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE="__name__";class ri{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ie(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Ie(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ri.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ri?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const l=ri.compareSegments(e.get(s),t.get(s));if(l!==0)return l}return Le(e.length,t.length)}static compareSegments(e,t){const i=ri.isNumericId(e),s=ri.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?ri.extractNumericId(e).compare(ri.extractNumericId(t)):Sm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ka.fromString(e.substring(4,e.length-2))}}class yt extends ri{construct(e,t,i){return new yt(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new Te(ue.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new yt(t)}static emptyPath(){return new yt([])}}const LO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class hn extends ri{construct(e,t,i){return new hn(e,t,i)}static isValidIdentifier(e){return LO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),hn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===QE}static keyField(){return new hn([QE])}static fromServerFormat(e){const t=[];let i="",s=0;const l=()=>{if(i.length===0)throw new Te(ue.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new Te(ue.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[s+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new Te(ue.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,s+=2}else d==="`"?(c=!c,s++):d!=="."||c?(i+=d,s++):(l(),s++)}if(l(),c)throw new Te(ue.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new hn(t)}static emptyPath(){return new hn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.path=e}static fromPath(e){return new Ae(yt.fromString(e))}static fromName(e){return new Ae(yt.fromString(e).popFirst(5))}static empty(){return new Ae(yt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&yt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return yt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ae(new yt(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=-1;function VO(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,s=De.fromTimestamp(i===1e9?new pt(t+1,0):new pt(t,i));return new Ma(s,Ae.empty(),e)}function UO(r){return new Ma(r.readTime,r.key,qu)}class Ma{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ma(De.min(),Ae.empty(),qu)}static max(){return new Ma(De.max(),Ae.empty(),qu)}}function jO(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=Ae.comparator(r.documentKey,e.documentKey),t!==0?t:Le(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(r){if(r.code!==ue.FAILED_PRECONDITION||r.message!==zO)throw r;ge("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new se((i,s)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,s)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof se?t:se.resolve(t)}catch(t){return se.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):se.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):se.reject(t)}static resolve(e){return new se((t,i)=>{t(e)})}static reject(e){return new se((t,i)=>{i(e)})}static waitFor(e){return new se((t,i)=>{let s=0,l=0,c=!1;e.forEach(d=>{++s,d.next(()=>{++l,c&&l===s&&t()},p=>i(p))}),c=!0,l===s&&t()})}static or(e){let t=se.resolve(!1);for(const i of e)t=t.next(s=>s?se.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,l)=>{i.push(t.call(this,s,l))}),this.waitFor(i)}static mapArray(e,t){return new se((i,s)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const m=p;t(e[m]).next(v=>{c[m]=v,++d,d===l&&i(c)},v=>s(v))}})}static doWhile(e,t){return new se((i,s)=>{const l=()=>{e()===!0?t().next(()=>{l()},s):i()};l()})}}function HO(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function el(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ue(i),this.ce=i=>t.writeSequenceNumber(i))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Sh.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=-1;function Ah(r){return r==null}function th(r){return r===0&&1/r==-1/0}function FO(r){return typeof r=="number"&&Number.isInteger(r)&&!th(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT="";function GO(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=XE(e)),e=YO(r.get(t),e);return XE(e)}function YO(r,e){let t=e;const i=r.length;for(let s=0;s<i;s++){const l=r.charAt(s);switch(l){case"\0":t+="";break;case YT:t+="";break;default:t+=l}}return t}function XE(r){return r+YT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Ds(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function KT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t){this.comparator=e,this.root=t||fn.EMPTY}insert(e,t){return new Tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,fn.BLACK,null,null))}remove(e){return new Tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,fn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ef(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ef(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ef(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ef(this.root,e,this.comparator,!0)}}class Ef{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&s&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class fn{constructor(e,t,i,s,l){this.key=e,this.value=t,this.color=i??fn.RED,this.left=s??fn.EMPTY,this.right=l??fn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,l){return new fn(e??this.key,t??this.value,i??this.color,s??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const l=i(e,s.key);return s=l<0?s.copy(null,null,null,s.left.insert(e,t,i),null):l===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return fn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return fn.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ie(27949);return e+(this.isRed()?0:1)}}fn.EMPTY=null,fn.RED=!0,fn.BLACK=!1;fn.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie(57766)}get value(){throw Ie(16141)}get color(){throw Ie(16727)}get left(){throw Ie(29726)}get right(){throw Ie(36894)}copy(e,t,i,s,l){return this}insert(e,t,i){return new fn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.comparator=e,this.data=new Tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ZE(this.data.getIterator())}getIteratorFrom(e){return new ZE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Kt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,l=i.getNext().key;if(this.comparator(s,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Kt(this.comparator);return t.data=e,t}}class ZE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.fields=e,e.sort(hn.comparator)}static empty(){return new kr([])}unionWith(e){let t=new Kt(hn.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new kr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return zo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new $T("Invalid base64 string: "+l):l}}(e);return new dn(t)}static fromUint8Array(e){const t=function(s){let l="";for(let c=0;c<s.length;++c)l+=String.fromCharCode(s[c]);return l}(e);return new dn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dn.EMPTY_BYTE_STRING=new dn("");const KO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function La(r){if(Je(!!r,39018),typeof r=="string"){let e=0;const t=KO.exec(r);if(Je(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Dt(r.seconds),nanos:Dt(r.nanos)}}function Dt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Va(r){return typeof r=="string"?dn.fromBase64String(r):dn.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT="server_timestamp",XT="__type__",WT="__previous_value__",ZT="__local_write_time__";function fg(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[XT])===null||t===void 0?void 0:t.stringValue)===QT}function wh(r){const e=r.mapValue.fields[WT];return fg(e)?wh(e):e}function ku(r){const e=La(r.mapValue.fields[ZT].timestampValue);return new pt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e,t,i,s,l,c,d,p,m){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=m}}const nh="(default)";class Nu{constructor(e,t){this.projectId=e,this.database=t||nh}static empty(){return new Nu("","")}get isDefaultDatabase(){return this.database===nh}isEqual(e){return e instanceof Nu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT="__type__",QO="__max__",bf={mapValue:{}},eS="__vector__",rh="value";function Ua(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?fg(r)?4:WO(r)?9007199254740991:XO(r)?10:11:Ie(28295,{value:r})}function ci(r,e){if(r===e)return!0;const t=Ua(r);if(t!==Ua(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ku(r).isEqual(ku(e));case 3:return function(s,l){if(typeof s.timestampValue=="string"&&typeof l.timestampValue=="string"&&s.timestampValue.length===l.timestampValue.length)return s.timestampValue===l.timestampValue;const c=La(s.timestampValue),d=La(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,l){return Va(s.bytesValue).isEqual(Va(l.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,l){return Dt(s.geoPointValue.latitude)===Dt(l.geoPointValue.latitude)&&Dt(s.geoPointValue.longitude)===Dt(l.geoPointValue.longitude)}(r,e);case 2:return function(s,l){if("integerValue"in s&&"integerValue"in l)return Dt(s.integerValue)===Dt(l.integerValue);if("doubleValue"in s&&"doubleValue"in l){const c=Dt(s.doubleValue),d=Dt(l.doubleValue);return c===d?th(c)===th(d):isNaN(c)&&isNaN(d)}return!1}(r,e);case 9:return zo(r.arrayValue.values||[],e.arrayValue.values||[],ci);case 10:case 11:return function(s,l){const c=s.mapValue.fields||{},d=l.mapValue.fields||{};if(WE(c)!==WE(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!ci(c[p],d[p])))return!1;return!0}(r,e);default:return Ie(52216,{left:r})}}function Pu(r,e){return(r.values||[]).find(t=>ci(t,e))!==void 0}function Bo(r,e){if(r===e)return 0;const t=Ua(r),i=Ua(e);if(t!==i)return Le(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Le(r.booleanValue,e.booleanValue);case 2:return function(l,c){const d=Dt(l.integerValue||l.doubleValue),p=Dt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(r,e);case 3:return JE(r.timestampValue,e.timestampValue);case 4:return JE(ku(r),ku(e));case 5:return Sm(r.stringValue,e.stringValue);case 6:return function(l,c){const d=Va(l),p=Va(c);return d.compareTo(p)}(r.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let m=0;m<d.length&&m<p.length;m++){const v=Le(d[m],p[m]);if(v!==0)return v}return Le(d.length,p.length)}(r.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Le(Dt(l.latitude),Dt(c.latitude));return d!==0?d:Le(Dt(l.longitude),Dt(c.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return e0(r.arrayValue,e.arrayValue);case 10:return function(l,c){var d,p,m,v;const b=l.fields||{},T=c.fields||{},w=(d=b[rh])===null||d===void 0?void 0:d.arrayValue,O=(p=T[rh])===null||p===void 0?void 0:p.arrayValue,V=Le(((m=w==null?void 0:w.values)===null||m===void 0?void 0:m.length)||0,((v=O==null?void 0:O.values)===null||v===void 0?void 0:v.length)||0);return V!==0?V:e0(w,O)}(r.mapValue,e.mapValue);case 11:return function(l,c){if(l===bf.mapValue&&c===bf.mapValue)return 0;if(l===bf.mapValue)return 1;if(c===bf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),m=c.fields||{},v=Object.keys(m);p.sort(),v.sort();for(let b=0;b<p.length&&b<v.length;++b){const T=Sm(p[b],v[b]);if(T!==0)return T;const w=Bo(d[p[b]],m[v[b]]);if(w!==0)return w}return Le(p.length,v.length)}(r.mapValue,e.mapValue);default:throw Ie(23264,{Pe:t})}}function JE(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Le(r,e);const t=La(r),i=La(e),s=Le(t.seconds,i.seconds);return s!==0?s:Le(t.nanos,i.nanos)}function e0(r,e){const t=r.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const l=Bo(t[s],i[s]);if(l)return l}return Le(t.length,i.length)}function Ho(r){return Am(r)}function Am(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const i=La(t);return`time(${i.seconds},${i.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Va(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return Ae.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let i="[",s=!0;for(const l of t.values||[])s?s=!1:i+=",",i+=Am(l);return i+"]"}(r.arrayValue):"mapValue"in r?function(t){const i=Object.keys(t.fields||{}).sort();let s="{",l=!0;for(const c of i)l?l=!1:s+=",",s+=`${c}:${Am(t.fields[c])}`;return s+"}"}(r.mapValue):Ie(61005,{value:r})}function Vf(r){switch(Ua(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=wh(r);return e?16+Vf(e):16;case 5:return 2*r.stringValue.length;case 6:return Va(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,l)=>s+Vf(l),0)}(r.arrayValue);case 10:case 11:return function(i){let s=0;return Ds(i.fields,(l,c)=>{s+=l.length+Vf(c)}),s}(r.mapValue);default:throw Ie(13486,{value:r})}}function wm(r){return!!r&&"integerValue"in r}function hg(r){return!!r&&"arrayValue"in r}function t0(r){return!!r&&"nullValue"in r}function n0(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Uf(r){return!!r&&"mapValue"in r}function XO(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[JT])===null||t===void 0?void 0:t.stringValue)===eS}function Au(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Ds(r.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Au(i)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Au(r.arrayValue.values[t]);return e}return Object.assign({},r)}function WO(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===QO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this.value=e}static empty(){return new pr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Uf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Au(t)}setAll(e){let t=hn.emptyPath(),i={},s=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,s),i={},s=[],t=d.popLast()}c?i[d.lastSegment()]=Au(c):s.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,s)}delete(e){const t=this.field(e.popLast());Uf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ci(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];Uf(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){Ds(t,(s,l)=>e[s]=l);for(const s of i)delete e[s]}clone(){return new pr(Au(this.value))}}function tS(r){const e=[];return Ds(r.fields,(t,i)=>{const s=new hn([t]);if(Uf(i)){const l=tS(i.mapValue).fields;if(l.length===0)e.push(s);else for(const c of l)e.push(s.child(c))}else e.push(s)}),new kr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t,i,s,l,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new bn(e,0,De.min(),De.min(),De.min(),pr.empty(),0)}static newFoundDocument(e,t,i,s){return new bn(e,1,t,De.min(),i,s,0)}static newNoDocument(e,t){return new bn(e,2,t,De.min(),De.min(),pr.empty(),0)}static newUnknownDocument(e,t){return new bn(e,3,t,De.min(),De.min(),pr.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(De.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=De.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,t){this.position=e,this.inclusive=t}}function r0(r,e,t){let i=0;for(let s=0;s<r.position.length;s++){const l=e[s],c=r.position[s];if(l.field.isKeyField()?i=Ae.comparator(Ae.fromName(c.referenceValue),t.key):i=Bo(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function i0(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!ci(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,t="asc"){this.field=e,this.dir=t}}function ZO(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{}class Yt extends nS{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new eD(e,t,i):t==="array-contains"?new rD(e,i):t==="in"?new iD(e,i):t==="not-in"?new aD(e,i):t==="array-contains-any"?new sD(e,i):new Yt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new tD(e,i):new nD(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Bo(t,this.value)):t!==null&&Ua(this.value)===Ua(t)&&this.matchesComparison(Bo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fi extends nS{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new fi(e,t)}matches(e){return rS(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function rS(r){return r.op==="and"}function iS(r){return JO(r)&&rS(r)}function JO(r){for(const e of r.filters)if(e instanceof fi)return!1;return!0}function Rm(r){if(r instanceof Yt)return r.field.canonicalString()+r.op.toString()+Ho(r.value);if(iS(r))return r.filters.map(e=>Rm(e)).join(",");{const e=r.filters.map(t=>Rm(t)).join(",");return`${r.op}(${e})`}}function aS(r,e){return r instanceof Yt?function(i,s){return s instanceof Yt&&i.op===s.op&&i.field.isEqual(s.field)&&ci(i.value,s.value)}(r,e):r instanceof fi?function(i,s){return s instanceof fi&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((l,c,d)=>l&&aS(c,s.filters[d]),!0):!1}(r,e):void Ie(19439)}function sS(r){return r instanceof Yt?function(t){return`${t.field.canonicalString()} ${t.op} ${Ho(t.value)}`}(r):r instanceof fi?function(t){return t.op.toString()+" {"+t.getFilters().map(sS).join(" ,")+"}"}(r):"Filter"}class eD extends Yt{constructor(e,t,i){super(e,t,i),this.key=Ae.fromName(i.referenceValue)}matches(e){const t=Ae.comparator(e.key,this.key);return this.matchesComparison(t)}}class tD extends Yt{constructor(e,t){super(e,"in",t),this.keys=oS("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class nD extends Yt{constructor(e,t){super(e,"not-in",t),this.keys=oS("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function oS(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>Ae.fromName(i.referenceValue))}class rD extends Yt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return hg(t)&&Pu(t.arrayValue,this.value)}}class iD extends Yt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Pu(this.value.arrayValue,t)}}class aD extends Yt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Pu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Pu(this.value.arrayValue,t)}}class sD extends Yt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!hg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Pu(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e,t=null,i=[],s=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=l,this.startAt=c,this.endAt=d,this.Ie=null}}function a0(r,e=null,t=[],i=[],s=null,l=null,c=null){return new oD(r,e,t,i,s,l,c)}function dg(r){const e=qe(r);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Rm(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Ah(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Ho(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Ho(i)).join(",")),e.Ie=t}return e.Ie}function pg(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!ZO(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!aS(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!i0(r.startAt,e.startAt)&&i0(r.endAt,e.endAt)}function Cm(r){return Ae.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,t=null,i=[],s=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function lD(r,e,t,i,s,l,c,d){return new Rh(r,e,t,i,s,l,c,d)}function lS(r){return new Rh(r)}function s0(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function uD(r){return r.collectionGroup!==null}function wu(r){const e=qe(r);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Kt(hn.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new ah(l,i))}),t.has(hn.keyField().canonicalString())||e.Ee.push(new ah(hn.keyField(),i))}return e.Ee}function si(r){const e=qe(r);return e.de||(e.de=cD(e,wu(r))),e.de}function cD(r,e){if(r.limitType==="F")return a0(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const l=s.dir==="desc"?"asc":"desc";return new ah(s.field,l)});const t=r.endAt?new ih(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new ih(r.startAt.position,r.startAt.inclusive):null;return a0(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function Im(r,e,t){return new Rh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Ch(r,e){return pg(si(r),si(e))&&r.limitType===e.limitType}function uS(r){return`${dg(si(r))}|lt:${r.limitType}`}function Oo(r){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(s=>sS(s)).join(", ")}]`),Ah(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(s=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(s)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(s=>Ho(s)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(s=>Ho(s)).join(",")),`Target(${i})`}(si(r))}; limitType=${r.limitType})`}function Ih(r,e){return e.isFoundDocument()&&function(i,s){const l=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):Ae.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(r,e)&&function(i,s){for(const l of wu(i))if(!l.field.isKeyField()&&s.data.field(l.field)===null)return!1;return!0}(r,e)&&function(i,s){for(const l of i.filters)if(!l.matches(s))return!1;return!0}(r,e)&&function(i,s){return!(i.startAt&&!function(c,d,p){const m=r0(c,d,p);return c.inclusive?m<=0:m<0}(i.startAt,wu(i),s)||i.endAt&&!function(c,d,p){const m=r0(c,d,p);return c.inclusive?m>=0:m>0}(i.endAt,wu(i),s))}(r,e)}function fD(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function cS(r){return(e,t)=>{let i=!1;for(const s of wu(r)){const l=hD(s,e,t);if(l!==0)return l;i=i||s.field.isKeyField()}return 0}}function hD(r,e,t){const i=r.field.isKeyField()?Ae.comparator(e.key,t.key):function(l,c,d){const p=c.data.field(l),m=d.data.field(l);return p!==null&&m!==null?Bo(p,m):Ie(42886)}(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return Ie(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,l]of i)if(this.equalsFn(s,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<s.length;l++)if(this.equalsFn(s[l][0],e))return void(s[l]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ds(this.inner,(t,i)=>{for(const[s,l]of i)e(s,l)})}isEmpty(){return KT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD=new Tt(Ae.comparator);function Gi(){return dD}const fS=new Tt(Ae.comparator);function bu(...r){let e=fS;for(const t of r)e=e.insert(t.key,t);return e}function hS(r){let e=fS;return r.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Ts(){return Ru()}function dS(){return Ru()}function Ru(){return new qs(r=>r.toString(),(r,e)=>r.isEqual(e))}const pD=new Tt(Ae.comparator),mD=new Kt(Ae.comparator);function He(...r){let e=mD;for(const t of r)e=e.add(t);return e}const gD=new Kt(Le);function yD(){return gD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:th(e)?"-0":e}}function pS(r){return{integerValue:""+r}}function vD(r,e){return FO(e)?pS(e):mg(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(){this._=void 0}}function _D(r,e,t){return r instanceof sh?function(s,l){const c={fields:{[XT]:{stringValue:QT},[ZT]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return l&&fg(l)&&(l=wh(l)),l&&(c.fields[WT]=l),{mapValue:c}}(t,e):r instanceof Mu?gS(r,e):r instanceof Lu?yS(r,e):function(s,l){const c=mS(s,l),d=o0(c)+o0(s.Re);return wm(c)&&wm(s.Re)?pS(d):mg(s.serializer,d)}(r,e)}function ED(r,e,t){return r instanceof Mu?gS(r,e):r instanceof Lu?yS(r,e):t}function mS(r,e){return r instanceof oh?function(i){return wm(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class sh extends xh{}class Mu extends xh{constructor(e){super(),this.elements=e}}function gS(r,e){const t=vS(e);for(const i of r.elements)t.some(s=>ci(s,i))||t.push(i);return{arrayValue:{values:t}}}class Lu extends xh{constructor(e){super(),this.elements=e}}function yS(r,e){let t=vS(e);for(const i of r.elements)t=t.filter(s=>!ci(s,i));return{arrayValue:{values:t}}}class oh extends xh{constructor(e,t){super(),this.serializer=e,this.Re=t}}function o0(r){return Dt(r.integerValue||r.doubleValue)}function vS(r){return hg(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function bD(r,e){return r.field.isEqual(e.field)&&function(i,s){return i instanceof Mu&&s instanceof Mu||i instanceof Lu&&s instanceof Lu?zo(i.elements,s.elements,ci):i instanceof oh&&s instanceof oh?ci(i.Re,s.Re):i instanceof sh&&s instanceof sh}(r.transform,e.transform)}class TD{constructor(e,t){this.version=e,this.transformResults=t}}class oi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new oi}static exists(e){return new oi(void 0,e)}static updateTime(e){return new oi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jf(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Oh{}function _S(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new gg(r.key,oi.none()):new Wu(r.key,r.data,oi.none());{const t=r.data,i=pr.empty();let s=new Kt(hn.comparator);for(let l of e.fields)if(!s.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),s=s.add(l)}return new ks(r.key,i,new kr(s.toArray()),oi.none())}}function SD(r,e,t){r instanceof Wu?function(s,l,c){const d=s.value.clone(),p=u0(s.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(r,e,t):r instanceof ks?function(s,l,c){if(!jf(s.precondition,l))return void l.convertToUnknownDocument(c.version);const d=u0(s.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(ES(s)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(r,e,t):function(s,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Cu(r,e,t,i){return r instanceof Wu?function(l,c,d,p){if(!jf(l.precondition,c))return d;const m=l.value.clone(),v=c0(l.fieldTransforms,p,c);return m.setAll(v),c.convertToFoundDocument(c.version,m).setHasLocalMutations(),null}(r,e,t,i):r instanceof ks?function(l,c,d,p){if(!jf(l.precondition,c))return d;const m=c0(l.fieldTransforms,p,c),v=c.data;return v.setAll(ES(l)),v.setAll(m),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(b=>b.field))}(r,e,t,i):function(l,c,d){return jf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(r,e,t)}function AD(r,e){let t=null;for(const i of r.fieldTransforms){const s=e.data.field(i.field),l=mS(i.transform,s||null);l!=null&&(t===null&&(t=pr.empty()),t.set(i.field,l))}return t||null}function l0(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&zo(i,s,(l,c)=>bD(l,c))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Wu extends Oh{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ks extends Oh{constructor(e,t,i,s,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function ES(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}}),e}function u0(r,e,t){const i=new Map;Je(r.length===t.length,32656,{Ve:t.length,me:r.length});for(let s=0;s<t.length;s++){const l=r[s],c=l.transform,d=e.data.field(l.field);i.set(l.field,ED(c,d,t[s]))}return i}function c0(r,e,t){const i=new Map;for(const s of r){const l=s.transform,c=t.data.field(s.field);i.set(s.field,_D(l,c,e))}return i}class gg extends Oh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wD extends Oh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const l=this.mutations[s];l.key.isEqual(e.key)&&SD(l,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Cu(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Cu(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=dS();return this.mutations.forEach(s=>{const l=e.get(s.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(s.key)?null:d;const p=_S(c,d);p!==null&&i.set(s.key,p),c.isValidDocument()||c.convertToNoDocument(De.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),He())}isEqual(e){return this.batchId===e.batchId&&zo(this.mutations,e.mutations,(t,i)=>l0(t,i))&&zo(this.baseMutations,e.baseMutations,(t,i)=>l0(t,i))}}class yg{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){Je(e.mutations.length===i.length,58842,{fe:e.mutations.length,ge:i.length});let s=function(){return pD}();const l=e.mutations;for(let c=0;c<l.length;c++)s=s.insert(l[c].key,i[c].version);return new yg(e,t,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mt,Ke;function xD(r){switch(r){case ue.OK:return Ie(64938);case ue.CANCELLED:case ue.UNKNOWN:case ue.DEADLINE_EXCEEDED:case ue.RESOURCE_EXHAUSTED:case ue.INTERNAL:case ue.UNAVAILABLE:case ue.UNAUTHENTICATED:return!1;case ue.INVALID_ARGUMENT:case ue.NOT_FOUND:case ue.ALREADY_EXISTS:case ue.PERMISSION_DENIED:case ue.FAILED_PRECONDITION:case ue.ABORTED:case ue.OUT_OF_RANGE:case ue.UNIMPLEMENTED:case ue.DATA_LOSS:return!0;default:return Ie(15467,{code:r})}}function bS(r){if(r===void 0)return Fi("GRPC error has no .code"),ue.UNKNOWN;switch(r){case Mt.OK:return ue.OK;case Mt.CANCELLED:return ue.CANCELLED;case Mt.UNKNOWN:return ue.UNKNOWN;case Mt.DEADLINE_EXCEEDED:return ue.DEADLINE_EXCEEDED;case Mt.RESOURCE_EXHAUSTED:return ue.RESOURCE_EXHAUSTED;case Mt.INTERNAL:return ue.INTERNAL;case Mt.UNAVAILABLE:return ue.UNAVAILABLE;case Mt.UNAUTHENTICATED:return ue.UNAUTHENTICATED;case Mt.INVALID_ARGUMENT:return ue.INVALID_ARGUMENT;case Mt.NOT_FOUND:return ue.NOT_FOUND;case Mt.ALREADY_EXISTS:return ue.ALREADY_EXISTS;case Mt.PERMISSION_DENIED:return ue.PERMISSION_DENIED;case Mt.FAILED_PRECONDITION:return ue.FAILED_PRECONDITION;case Mt.ABORTED:return ue.ABORTED;case Mt.OUT_OF_RANGE:return ue.OUT_OF_RANGE;case Mt.UNIMPLEMENTED:return ue.UNIMPLEMENTED;case Mt.DATA_LOSS:return ue.DATA_LOSS;default:return Ie(39323,{code:r})}}(Ke=Mt||(Mt={}))[Ke.OK=0]="OK",Ke[Ke.CANCELLED=1]="CANCELLED",Ke[Ke.UNKNOWN=2]="UNKNOWN",Ke[Ke.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ke[Ke.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ke[Ke.NOT_FOUND=5]="NOT_FOUND",Ke[Ke.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ke[Ke.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ke[Ke.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ke[Ke.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ke[Ke.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ke[Ke.ABORTED=10]="ABORTED",Ke[Ke.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ke[Ke.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ke[Ke.INTERNAL=13]="INTERNAL",Ke[Ke.UNAVAILABLE=14]="UNAVAILABLE",Ke[Ke.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD=new ka([4294967295,4294967295],0);function f0(r){const e=FT().encode(r),t=new MT;return t.update(e),new Uint8Array(t.digest())}function h0(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ka([t,i],0),new ka([s,l],0)]}class vg{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Tu(`Invalid padding: ${t}`);if(i<0)throw new Tu(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Tu(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Tu(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=ka.fromNumber(this.pe)}we(e,t,i){let s=e.add(t.multiply(ka.fromNumber(i)));return s.compare(OD)===1&&(s=new ka([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=f0(e),[i,s]=h0(t);for(let l=0;l<this.hashCount;l++){const c=this.we(i,s,l);if(!this.be(c))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new vg(l,s,t);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.pe===0)return;const t=f0(e),[i,s]=h0(t);for(let l=0;l<this.hashCount;l++){const c=this.we(i,s,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Tu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,t,i,s,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,Zu.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Dh(De.min(),s,new Tt(Le),Gi(),He())}}class Zu{constructor(e,t,i,s,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Zu(i,t,He(),He(),He())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,t,i,s){this.De=e,this.removedTargetIds=t,this.key=i,this.ve=s}}class TS{constructor(e,t){this.targetId=e,this.Ce=t}}class SS{constructor(e,t,i=dn.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class d0{constructor(){this.Fe=0,this.Me=p0(),this.xe=dn.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=He(),t=He(),i=He();return this.Me.forEach((s,l)=>{switch(l){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:Ie(38017,{changeType:l})}}),new Zu(this.xe,this.Oe,e,t,i)}Qe(){this.Ne=!1,this.Me=p0()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Je(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class DD{constructor(e){this.ze=e,this.je=new Map,this.He=Gi(),this.Je=Tf(),this.Ye=Tf(),this.Ze=new Tt(Le)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const i=this.rt(t);switch(e.state){case 0:this.it(t)&&i.ke(e.resumeToken);break;case 1:i.We(),i.Be||i.Qe(),i.ke(e.resumeToken);break;case 2:i.We(),i.Be||this.removeTarget(t);break;case 3:this.it(t)&&(i.Ge(),i.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),i.ke(e.resumeToken));break;default:Ie(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((i,s)=>{this.it(s)&&t(s)})}ot(e){const t=e.targetId,i=e.Ce.count,s=this._t(t);if(s){const l=s.target;if(Cm(l))if(i===0){const c=new Ae(l.path);this.tt(t,c,bn.newNoDocument(c,De.min()))}else Je(i===1,20013,{expectedCount:i});else{const c=this.ut(t);if(c!==i){const d=this.ct(e),p=d?this.lt(d,e,c):1;if(p!==0){this.st(t);const m=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,m)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:l=0}=t;let c,d;try{c=Va(i).toUint8Array()}catch(p){if(p instanceof $T)return jo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new vg(c,s,l)}catch(p){return jo(p instanceof Tu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.pe===0?null:d}lt(e,t,i){return t.Ce.count===i-this.Tt(e,t.targetId)?0:2}Tt(e,t){const i=this.ze.getRemoteKeysForTarget(t);let s=0;return i.forEach(l=>{const c=this.ze.Pt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.tt(t,l,null),s++)}),s}It(e){const t=new Map;this.je.forEach((l,c)=>{const d=this._t(c);if(d){if(l.current&&Cm(d.target)){const p=new Ae(d.target.path);this.Et(p).has(c)||this.dt(c,p)||this.tt(c,p,bn.newNoDocument(p,e))}l.Le&&(t.set(c,l.qe()),l.Qe())}});let i=He();this.Ye.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const m=this._t(p);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.He.forEach((l,c)=>c.setReadTime(e));const s=new Dh(e,t,this.Ze,this.He,i);return this.He=Gi(),this.Je=Tf(),this.Ye=Tf(),this.Ze=new Tt(Le),s}et(e,t){if(!this.it(e))return;const i=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,i),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,i){if(!this.it(e))return;const s=this.rt(e);this.dt(e,t)?s.$e(t,1):s.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),i&&(this.He=this.He.insert(t,i))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new d0,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Kt(Le),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Kt(Le),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||ge("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new d0),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Tf(){return new Tt(Ae.comparator)}function p0(){return new Tt(Ae.comparator)}const qD={asc:"ASCENDING",desc:"DESCENDING"},kD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ND={and:"AND",or:"OR"};class PD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function xm(r,e){return r.useProto3Json||Ah(e)?e:{value:e}}function lh(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function AS(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function MD(r,e){return lh(r,e.toTimestamp())}function li(r){return Je(!!r,49232),De.fromTimestamp(function(t){const i=La(t);return new pt(i.seconds,i.nanos)}(r))}function _g(r,e){return Om(r,e).canonicalString()}function Om(r,e){const t=function(s){return new yt(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function wS(r){const e=yt.fromString(r);return Je(OS(e),10190,{key:e.toString()}),e}function Dm(r,e){return _g(r.databaseId,e.path)}function Jp(r,e){const t=wS(e);if(t.get(1)!==r.databaseId.projectId)throw new Te(ue.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new Te(ue.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new Ae(CS(t))}function RS(r,e){return _g(r.databaseId,e)}function LD(r){const e=wS(r);return e.length===4?yt.emptyPath():CS(e)}function qm(r){return new yt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function CS(r){return Je(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function m0(r,e,t){return{name:Dm(r,e),fields:t.value.mapValue.fields}}function VD(r,e){let t;if("targetChange"in e){e.targetChange;const i=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Ie(39313,{state:m})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],l=function(m,v){return m.useProto3Json?(Je(v===void 0||typeof v=="string",58123),dn.fromBase64String(v||"")):(Je(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),dn.fromUint8Array(v||new Uint8Array))}(r,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(m){const v=m.code===void 0?ue.UNKNOWN:bS(m.code);return new Te(v,m.message||"")}(c);t=new SS(i,s,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Jp(r,i.document.name),l=li(i.document.updateTime),c=i.document.createTime?li(i.document.createTime):De.min(),d=new pr({mapValue:{fields:i.document.fields}}),p=bn.newFoundDocument(s,l,c,d),m=i.targetIds||[],v=i.removedTargetIds||[];t=new zf(m,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Jp(r,i.document),l=i.readTime?li(i.readTime):De.min(),c=bn.newNoDocument(s,l),d=i.removedTargetIds||[];t=new zf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Jp(r,i.document),l=i.removedTargetIds||[];t=new zf([],l,s,null)}else{if(!("filter"in e))return Ie(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:l}=i,c=new ID(s,l),d=i.targetId;t=new TS(d,c)}}return t}function UD(r,e){let t;if(e instanceof Wu)t={update:m0(r,e.key,e.value)};else if(e instanceof gg)t={delete:Dm(r,e.key)};else if(e instanceof ks)t={update:m0(r,e.key,e.data),updateMask:$D(e.fieldMask)};else{if(!(e instanceof wD))return Ie(16599,{ft:e.type});t={verify:Dm(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof sh)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Mu)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Lu)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof oh)return{fieldPath:c.field.canonicalString(),increment:d.Re};throw Ie(20930,{transform:c.transform})}(0,i))),e.precondition.isNone||(t.currentDocument=function(s,l){return l.updateTime!==void 0?{updateTime:MD(s,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ie(27497)}(r,e.precondition)),t}function jD(r,e){return r&&r.length>0?(Je(e!==void 0,14353),r.map(t=>function(s,l){let c=s.updateTime?li(s.updateTime):li(l);return c.isEqual(De.min())&&(c=li(l)),new TD(c,s.transformResults||[])}(t,e))):[]}function zD(r,e){return{documents:[RS(r,e.path)]}}function BD(r,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=RS(r,s);const l=function(m){if(m.length!==0)return xS(fi.create(m,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(m){if(m.length!==0)return m.map(v=>function(T){return{field:Do(T.field),direction:GD(T.dir)}}(v))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=xm(r,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{gt:t,parent:s}}function HD(r){let e=LD(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){Je(i===1,65062);const v=t.from[0];v.allDescendants?s=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=function(b){const T=IS(b);return T instanceof fi&&iS(T)?T.getFilters():[T]}(t.where));let c=[];t.orderBy&&(c=function(b){return b.map(T=>function(O){return new ah(qo(O.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(T))}(t.orderBy));let d=null;t.limit&&(d=function(b){let T;return T=typeof b=="object"?b.value:b,Ah(T)?null:T}(t.limit));let p=null;t.startAt&&(p=function(b){const T=!!b.before,w=b.values||[];return new ih(w,T)}(t.startAt));let m=null;return t.endAt&&(m=function(b){const T=!b.before,w=b.values||[];return new ih(w,T)}(t.endAt)),lD(e,s,c,l,d,"F",p,m)}function FD(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ie(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function IS(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=qo(t.unaryFilter.field);return Yt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=qo(t.unaryFilter.field);return Yt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=qo(t.unaryFilter.field);return Yt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=qo(t.unaryFilter.field);return Yt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ie(61313);default:return Ie(60726)}}(r):r.fieldFilter!==void 0?function(t){return Yt.create(qo(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ie(58110);default:return Ie(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return fi.create(t.compositeFilter.filters.map(i=>IS(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Ie(1026)}}(t.compositeFilter.op))}(r):Ie(30097,{filter:r})}function GD(r){return qD[r]}function YD(r){return kD[r]}function KD(r){return ND[r]}function Do(r){return{fieldPath:r.canonicalString()}}function qo(r){return hn.fromServerFormat(r.fieldPath)}function xS(r){return r instanceof Yt?function(t){if(t.op==="=="){if(n0(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NAN"}};if(t0(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(n0(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NOT_NAN"}};if(t0(t.value))return{unaryFilter:{field:Do(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Do(t.field),op:YD(t.op),value:t.value}}}(r):r instanceof fi?function(t){const i=t.getFilters().map(s=>xS(s));return i.length===1?i[0]:{compositeFilter:{op:KD(t.op),filters:i}}}(r):Ie(54877,{filter:r})}function $D(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function OS(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t,i,s,l=De.min(),c=De.min(),d=dn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Ia(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ia(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ia(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ia(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e){this.wt=e}}function XD(r){const e=HD({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Im(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(){this.yn=new ZD}addToCollectionParentIndex(e,t){return this.yn.add(t),se.resolve()}getCollectionParents(e,t){return se.resolve(this.yn.getEntries(t))}addFieldIndex(e,t){return se.resolve()}deleteFieldIndex(e,t){return se.resolve()}deleteAllFieldIndexes(e){return se.resolve()}createTargetIndexes(e,t){return se.resolve()}getDocumentsMatchingTarget(e,t){return se.resolve(null)}getIndexType(e,t){return se.resolve(0)}getFieldIndexes(e,t){return se.resolve([])}getNextCollectionGroupToUpdate(e){return se.resolve(null)}getMinOffset(e,t){return se.resolve(Ma.min())}getMinOffsetFromCollectionGroup(e,t){return se.resolve(Ma.min())}updateCollectionGroup(e,t,i){return se.resolve()}updateIndexEntries(e,t){return se.resolve()}}class ZD{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Kt(yt.comparator),l=!s.has(i);return this.index[t]=s.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Kt(yt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},DS=41943040;class Ln{static withCacheSize(e){return new Ln(e,Ln.DEFAULT_COLLECTION_PERCENTILE,Ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ln.DEFAULT_COLLECTION_PERCENTILE=10,Ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ln.DEFAULT=new Ln(DS,Ln.DEFAULT_COLLECTION_PERCENTILE,Ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ln.DISABLED=new Ln(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new Fo(0)}static ir(){return new Fo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0="LruGarbageCollector",JD=1048576;function v0([r,e],[t,i]){const s=Le(r,t);return s===0?Le(e,i):s}class eq{constructor(e){this.cr=e,this.buffer=new Kt(v0),this.lr=0}hr(){return++this.lr}Pr(e){const t=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();v0(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class tq{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){ge(y0,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){el(t)?ge(y0,"Ignoring IndexedDB error during garbage collection: ",t):await Jo(t)}await this.Ir(3e5)})}}class nq{constructor(e,t){this.Er=e,this.params=t}calculateTargetCount(e,t){return this.Er.dr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return se.resolve(Sh.le);const i=new eq(t);return this.Er.forEachTarget(e,s=>i.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(e,s=>i.Pr(s))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Er.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Er.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ge("LruGarbageCollector","Garbage collection skipped; disabled"),se.resolve(g0)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(ge("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),g0):this.Rr(e,t))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,t){let i,s,l,c,d,p,m;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(ge("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),s=this.params.maximumSequenceNumbersToCollect):s=b,c=Date.now(),this.nthSequenceNumber(e,s))).next(b=>(i=b,d=Date.now(),this.removeTargets(e,i,t))).next(b=>(l=b,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(b=>(m=Date.now(),xo()<=Be.DEBUG&&ge("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${s} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${b} documents in `+(m-p)+`ms
Total Duration: ${m-v}ms`),se.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:l,documentsRemoved:b})))}}function rq(r,e){return new nq(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iq{constructor(){this.changes=new qs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,bn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?se.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aq{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sq{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(i!==null&&Cu(i.mutation,s,kr.empty(),pt.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,He()).next(()=>i))}getLocalViewOfDocuments(e,t,i=He()){const s=Ts();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,i).next(l=>{let c=bu();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=Ts();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,He()))}populateOverlays(e,t,i){const s=[];return i.forEach(l=>{t.has(l)||s.push(l)}),this.documentOverlayCache.getOverlays(e,s).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,i,s){let l=Gi();const c=Ru(),d=function(){return Ru()}();return t.forEach((p,m)=>{const v=i.get(m.key);s.has(m.key)&&(v===void 0||v.mutation instanceof ks)?l=l.insert(m.key,m):v!==void 0?(c.set(m.key,v.mutation.getFieldMask()),Cu(v.mutation,m,v.mutation.getFieldMask(),pt.now())):c.set(m.key,kr.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((m,v)=>c.set(m,v)),t.forEach((m,v)=>{var b;return d.set(m,new aq(v,(b=c.get(m))!==null&&b!==void 0?b:null))}),d))}recalculateAndSaveOverlays(e,t){const i=Ru();let s=new Tt((c,d)=>c-d),l=He();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const m=t.get(p);if(m===null)return;let v=i.get(p)||kr.empty();v=d.applyToLocalView(m,v),i.set(p,v);const b=(s.get(d.batchId)||He()).add(p);s=s.insert(d.batchId,b)})}).next(()=>{const c=[],d=s.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),m=p.key,v=p.value,b=dS();v.forEach(T=>{if(!l.has(T)){const w=_S(t.get(T),i.get(T));w!==null&&b.set(T,w),l=l.add(T)}}),c.push(this.documentOverlayCache.saveOverlays(e,m,b))}return se.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,s){return function(c){return Ae.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):uD(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next(l=>{const c=s-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-l.size):se.resolve(Ts());let d=qu,p=l;return c.next(m=>se.forEach(m,(v,b)=>(d<b.largestBatchId&&(d=b.largestBatchId),l.get(v)?se.resolve():this.remoteDocumentCache.getEntry(e,v).next(T=>{p=p.insert(v,T)}))).next(()=>this.populateOverlays(e,m,l)).next(()=>this.computeViews(e,p,m,He())).next(v=>({batchId:d,changes:hS(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ae(t)).next(i=>{let s=bu();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const l=t.collectionGroup;let c=bu();return this.indexManager.getCollectionParents(e,l).next(d=>se.forEach(d,p=>{const m=function(b,T){return new Rh(T,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,m,i,s).next(v=>{v.forEach((b,T)=>{c=c.insert(b,T)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,s){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,s))).next(c=>{l.forEach((p,m)=>{const v=m.getKey();c.get(v)===null&&(c=c.insert(v,bn.newInvalidDocument(v)))});let d=bu();return c.forEach((p,m)=>{const v=l.get(p);v!==void 0&&Cu(v.mutation,m,kr.empty(),pt.now()),Ih(t,m)&&(d=d.insert(p,m))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oq{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,t){return se.resolve(this.Fr.get(t))}saveBundleMetadata(e,t){return this.Fr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:li(s.createTime)}}(t)),se.resolve()}getNamedQuery(e,t){return se.resolve(this.Mr.get(t))}saveNamedQuery(e,t){return this.Mr.set(t.name,function(s){return{name:s.name,query:XD(s.bundledQuery),readTime:li(s.readTime)}}(t)),se.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lq{constructor(){this.overlays=new Tt(Ae.comparator),this.Or=new Map}getOverlay(e,t){return se.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Ts();return se.forEach(t,s=>this.getOverlay(e,s).next(l=>{l!==null&&i.set(s,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((s,l)=>{this.St(e,t,l)}),se.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Or.get(i);return s!==void 0&&(s.forEach(l=>this.overlays=this.overlays.remove(l)),this.Or.delete(i)),se.resolve()}getOverlaysForCollection(e,t,i){const s=Ts(),l=t.length+1,c=new Ae(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,m=p.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===l&&p.largestBatchId>i&&s.set(p.getKey(),p)}return se.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let l=new Tt((m,v)=>m-v);const c=this.overlays.getIterator();for(;c.hasNext();){const m=c.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>i){let v=l.get(m.largestBatchId);v===null&&(v=Ts(),l=l.insert(m.largestBatchId,v)),v.set(m.getKey(),m)}}const d=Ts(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((m,v)=>d.set(m,v)),!(d.size()>=s)););return se.resolve(d)}St(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const c=this.Or.get(s.largestBatchId).delete(i.key);this.Or.set(s.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new CD(t,i));let l=this.Or.get(t);l===void 0&&(l=He(),this.Or.set(t,l)),this.Or.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uq{constructor(){this.sessionToken=dn.EMPTY_BYTE_STRING}getSessionToken(e){return se.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,se.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(){this.Nr=new Kt(rn.Br),this.Lr=new Kt(rn.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,t){const i=new rn(e,t);this.Nr=this.Nr.add(i),this.Lr=this.Lr.add(i)}qr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Qr(new rn(e,t))}$r(e,t){e.forEach(i=>this.removeReference(i,t))}Ur(e){const t=new Ae(new yt([])),i=new rn(t,e),s=new rn(t,e+1),l=[];return this.Lr.forEachInRange([i,s],c=>{this.Qr(c),l.push(c.key)}),l}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const t=new Ae(new yt([])),i=new rn(t,e),s=new rn(t,e+1);let l=He();return this.Lr.forEachInRange([i,s],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new rn(e,0),i=this.Nr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class rn{constructor(e,t){this.key=e,this.Gr=t}static Br(e,t){return Ae.comparator(e.key,t.key)||Le(e.Gr,t.Gr)}static kr(e,t){return Le(e.Gr,t.Gr)||Ae.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cq{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Jn=1,this.zr=new Kt(rn.Br)}checkEmpty(e){return se.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const l=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new RD(l,t,i,s);this.mutationQueue.push(c);for(const d of s)this.zr=this.zr.add(new rn(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return se.resolve(c)}lookupMutationBatch(e,t){return se.resolve(this.jr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Hr(i),l=s<0?0:s;return se.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return se.resolve(this.mutationQueue.length===0?cg:this.Jn-1)}getAllMutationBatches(e){return se.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new rn(t,0),s=new rn(t,Number.POSITIVE_INFINITY),l=[];return this.zr.forEachInRange([i,s],c=>{const d=this.jr(c.Gr);l.push(d)}),se.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Kt(Le);return t.forEach(s=>{const l=new rn(s,0),c=new rn(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([l,c],d=>{i=i.add(d.Gr)})}),se.resolve(this.Jr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let l=i;Ae.isDocumentKey(l)||(l=l.child(""));const c=new rn(new Ae(l),0);let d=new Kt(Le);return this.zr.forEachWhile(p=>{const m=p.key.path;return!!i.isPrefixOf(m)&&(m.length===s&&(d=d.add(p.Gr)),!0)},c),se.resolve(this.Jr(d))}Jr(e){const t=[];return e.forEach(i=>{const s=this.jr(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Je(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.zr;return se.forEach(t.mutations,s=>{const l=new rn(s.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.zr=i})}Xn(e){}containsKey(e,t){const i=new rn(t,0),s=this.zr.firstAfterOrEqual(i);return se.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,se.resolve()}Yr(e,t){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const t=this.Hr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fq{constructor(e){this.Zr=e,this.docs=function(){return new Tt(Ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),l=s?s.size:0,c=this.Zr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return se.resolve(i?i.document.mutableCopy():bn.newInvalidDocument(t))}getEntries(e,t){let i=Gi();return t.forEach(s=>{const l=this.docs.get(s);i=i.insert(s,l?l.document.mutableCopy():bn.newInvalidDocument(s))}),se.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let l=Gi();const c=t.path,d=new Ae(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:m,value:{document:v}}=p.getNext();if(!c.isPrefixOf(m.path))break;m.path.length>c.length+1||jO(UO(v),i)<=0||(s.has(v.key)||Ih(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return se.resolve(l)}getAllFromCollectionGroup(e,t,i,s){Ie(9500)}Xr(e,t){return se.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new hq(this)}getSize(e){return se.resolve(this.size)}}class hq extends iq{constructor(e){super(),this.vr=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?t.push(this.vr.addEntry(e,s)):this.vr.removeEntry(i)}),se.waitFor(t)}getFromCache(e,t){return this.vr.getEntry(e,t)}getAllFromCache(e,t){return this.vr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dq{constructor(e){this.persistence=e,this.ei=new qs(t=>dg(t),pg),this.lastRemoteSnapshotVersion=De.min(),this.highestTargetId=0,this.ti=0,this.ni=new Eg,this.targetCount=0,this.ri=Fo.rr()}forEachTarget(e,t){return this.ei.forEach((i,s)=>t(s)),se.resolve()}getLastRemoteSnapshotVersion(e){return se.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return se.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),se.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ti&&(this.ti=t),se.resolve()}ar(e){this.ei.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ri=new Fo(t),this.highestTargetId=t),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,t){return this.ar(t),this.targetCount+=1,se.resolve()}updateTargetData(e,t){return this.ar(t),se.resolve()}removeTargetData(e,t){return this.ei.delete(t.target),this.ni.Ur(t.targetId),this.targetCount-=1,se.resolve()}removeTargets(e,t,i){let s=0;const l=[];return this.ei.forEach((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.ei.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)}),se.waitFor(l).next(()=>s)}getTargetCount(e){return se.resolve(this.targetCount)}getTargetData(e,t){const i=this.ei.get(t)||null;return se.resolve(i)}addMatchingKeys(e,t,i){return this.ni.qr(t,i),se.resolve()}removeMatchingKeys(e,t,i){this.ni.$r(t,i);const s=this.persistence.referenceDelegate,l=[];return s&&t.forEach(c=>{l.push(s.markPotentiallyOrphaned(e,c))}),se.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.ni.Ur(t),se.resolve()}getMatchingKeysForTargetId(e,t){const i=this.ni.Wr(t);return se.resolve(i)}containsKey(e,t){return se.resolve(this.ni.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,t){this.ii={},this.overlays={},this.si=new Sh(0),this.oi=!1,this.oi=!0,this._i=new uq,this.referenceDelegate=e(this),this.ai=new dq(this),this.indexManager=new WD,this.remoteDocumentCache=function(s){return new fq(s)}(i=>this.referenceDelegate.ui(i)),this.serializer=new QD(t),this.ci=new oq(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new lq,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ii[e.toKey()];return i||(i=new cq(t,this.referenceDelegate),this.ii[e.toKey()]=i),i}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,t,i){ge("MemoryPersistence","Starting transaction:",e);const s=new pq(this.si.next());return this.referenceDelegate.li(),i(s).next(l=>this.referenceDelegate.hi(s).next(()=>l)).toPromise().then(l=>(s.raiseOnCommittedEvent(),l))}Pi(e,t){return se.or(Object.values(this.ii).map(i=>()=>i.containsKey(e,t)))}}class pq extends BO{constructor(e){super(),this.currentSequenceNumber=e}}class bg{constructor(e){this.persistence=e,this.Ti=new Eg,this.Ii=null}static Ei(e){return new bg(e)}get di(){if(this.Ii)return this.Ii;throw Ie(60996)}addReference(e,t,i){return this.Ti.addReference(i,t),this.di.delete(i.toString()),se.resolve()}removeReference(e,t,i){return this.Ti.removeReference(i,t),this.di.add(i.toString()),se.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),se.resolve()}removeTarget(e,t){this.Ti.Ur(t.targetId).forEach(s=>this.di.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(l=>this.di.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}li(){this.Ii=new Set}hi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return se.forEach(this.di,i=>{const s=Ae.fromPath(i);return this.Ai(e,s).next(l=>{l||t.removeEntry(s,De.min())})}).next(()=>(this.Ii=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ai(e,t).next(i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())})}ui(e){return 0}Ai(e,t){return se.or([()=>se.resolve(this.Ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Pi(e,t)])}}class uh{constructor(e,t){this.persistence=e,this.Ri=new qs(i=>GO(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=rq(this,t)}static Ei(e,t){return new uh(e,t)}li(){}hi(e){return se.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(s=>i+s))}Vr(e){let t=0;return this.Ar(e,i=>{t++}).next(()=>t)}Ar(e,t){return se.forEach(this.Ri,(i,s)=>this.gr(e,i,s).next(l=>l?se.resolve():t(s)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),l=s.newChangeBuffer();return s.Xr(e,c=>this.gr(e,c,t).next(d=>{d||(i++,l.removeEntry(c,De.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.Ri.set(t,e.currentSequenceNumber),se.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.Ri.set(i,e.currentSequenceNumber),se.resolve()}removeReference(e,t,i){return this.Ri.set(i,e.currentSequenceNumber),se.resolve()}updateLimboDocument(e,t){return this.Ri.set(t,e.currentSequenceNumber),se.resolve()}ui(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Vf(e.data.value)),t}gr(e,t,i){return se.or([()=>this.persistence.Pi(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.Ri.get(t);return se.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.ls=i,this.hs=s}static Ps(e,t){let i=He(),s=He();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:s=s.add(l.doc.key)}return new Tg(e,t.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mq{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gq{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return Z1()?8:HO(Tn())>0?6:4}()}initialize(e,t){this.As=e,this.indexManager=t,this.Ts=!0}getDocumentsMatchingQuery(e,t,i,s){const l={result:null};return this.Rs(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.Vs(e,t,s,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new mq;return this.fs(e,t,c).next(d=>{if(l.result=d,this.Is)return this.gs(e,t,c,d.size)})}).next(()=>l.result)}gs(e,t,i,s){return i.documentReadCount<this.Es?(xo()<=Be.DEBUG&&ge("QueryEngine","SDK will not create cache indexes for query:",Oo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),se.resolve()):(xo()<=Be.DEBUG&&ge("QueryEngine","Query:",Oo(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(xo()<=Be.DEBUG&&ge("QueryEngine","The SDK decides to create cache indexes for query:",Oo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,si(t))):se.resolve())}Rs(e,t){if(s0(t))return se.resolve(null);let i=si(t);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Im(t,null,"F"),i=si(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=He(...l);return this.As.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const m=this.ps(t,d);return this.ys(t,m,c,p.readTime)?this.Rs(e,Im(t,null,"F")):this.ws(e,m,t,p)}))})))}Vs(e,t,i,s){return s0(t)||s.isEqual(De.min())?se.resolve(null):this.As.getDocuments(e,i).next(l=>{const c=this.ps(t,l);return this.ys(t,c,i,s)?se.resolve(null):(xo()<=Be.DEBUG&&ge("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Oo(t)),this.ws(e,c,t,VO(s,qu)).next(d=>d))})}ps(e,t){let i=new Kt(cS(e));return t.forEach((s,l)=>{Ih(e,l)&&(i=i.add(l))}),i}ys(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(s)>0)}fs(e,t,i){return xo()<=Be.DEBUG&&ge("QueryEngine","Using full collection scan to execute query:",Oo(t)),this.As.getDocumentsMatchingQuery(e,t,Ma.min(),i)}ws(e,t,i,s){return this.As.getDocumentsMatchingQuery(e,i,s).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="LocalStore",yq=3e8;class vq{constructor(e,t,i,s){this.persistence=e,this.bs=t,this.serializer=s,this.Ss=new Tt(Le),this.Ds=new qs(l=>dg(l),pg),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(i)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sq(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ss))}}function _q(r,e,t,i){return new vq(r,e,t,i)}async function kS(r,e){const t=qe(r);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next(l=>(s=l,t.Fs(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=He();for(const m of s){c.push(m.batchId);for(const v of m.mutations)p=p.add(v.key)}for(const m of l){d.push(m.batchId);for(const v of m.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(i,p).next(m=>({Ms:m,removedBatchIds:c,addedBatchIds:d}))})})}function Eq(r,e){const t=qe(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),l=t.Cs.newChangeBuffer({trackRemovals:!0});return function(d,p,m,v){const b=m.batch,T=b.keys();let w=se.resolve();return T.forEach(O=>{w=w.next(()=>v.getEntry(p,O)).next(V=>{const P=m.docVersions.get(O);Je(P!==null,48541),V.version.compareTo(P)<0&&(b.applyToRemoteDocument(V,m),V.isValidDocument()&&(V.setReadTime(m.commitVersion),v.addEntry(V)))})}),w.next(()=>d.mutationQueue.removeMutationBatch(p,b))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=He();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(p=p.add(d.batch.mutations[m].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,s))})}function NS(r){const e=qe(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ai.getLastRemoteSnapshotVersion(t))}function bq(r,e){const t=qe(r),i=e.snapshotVersion;let s=t.Ss;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.Cs.newChangeBuffer({trackRemovals:!0});s=t.Ss;const d=[];e.targetChanges.forEach((v,b)=>{const T=s.get(b);if(!T)return;d.push(t.ai.removeMatchingKeys(l,v.removedDocuments,b).next(()=>t.ai.addMatchingKeys(l,v.addedDocuments,b)));let w=T.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(b)!==null?w=w.withResumeToken(dn.EMPTY_BYTE_STRING,De.min()).withLastLimboFreeSnapshotVersion(De.min()):v.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(v.resumeToken,i)),s=s.insert(b,w),function(V,P,B){return V.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=yq?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(T,w,v)&&d.push(t.ai.updateTargetData(l,w))});let p=Gi(),m=He();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))}),d.push(Tq(l,c,e.documentUpdates).next(v=>{p=v.xs,m=v.Os})),!i.isEqual(De.min())){const v=t.ai.getLastRemoteSnapshotVersion(l).next(b=>t.ai.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(v)}return se.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,m)).next(()=>p)}).then(l=>(t.Ss=s,l))}function Tq(r,e,t){let i=He(),s=He();return t.forEach(l=>i=i.add(l)),e.getEntries(r,i).next(l=>{let c=Gi();return t.forEach((d,p)=>{const m=l.get(d);p.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(d)),p.isNoDocument()&&p.version.isEqual(De.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!m.isValidDocument()||p.version.compareTo(m.version)>0||p.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):ge(Sg,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",p.version)}),{xs:c,Os:s}})}function Sq(r,e){const t=qe(r);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=cg),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function Aq(r,e){const t=qe(r);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.ai.getTargetData(i,e).next(l=>l?(s=l,se.resolve(s)):t.ai.allocateTargetId(i).next(c=>(s=new Ia(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.ai.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.Ss.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ss=t.Ss.insert(i.targetId,i),t.Ds.set(e,i.targetId)),i})}async function km(r,e,t){const i=qe(r),s=i.Ss.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,s))}catch(c){if(!el(c))throw c;ge(Sg,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Ss=i.Ss.remove(e),i.Ds.delete(s.target)}function _0(r,e,t){const i=qe(r);let s=De.min(),l=He();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,m,v){const b=qe(p),T=b.Ds.get(v);return T!==void 0?se.resolve(b.Ss.get(T)):b.ai.getTargetData(m,v)}(i,c,si(e)).next(d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,i.ai.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i.bs.getDocumentsMatchingQuery(c,e,t?s:De.min(),t?l:He())).next(d=>(wq(i,fD(e),d),{documents:d,Ns:l})))}function wq(r,e,t){let i=r.vs.get(e)||De.min();t.forEach((s,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),r.vs.set(e,i)}class E0{constructor(){this.activeTargetIds=yD()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Rq{constructor(){this.So=new E0,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,t,i){this.Do[e]=t}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new E0,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cq{vo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0="ConnectivityMonitor";class T0{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){ge(b0,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){ge(b0,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sf=null;function Nm(){return Sf===null?Sf=function(){return 268435456+Math.round(2147483648*Math.random())}():Sf++,"0x"+Sf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="RestConnection",Iq={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class xq{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=t+"://"+e.host,this.ko=`projects/${i}/databases/${s}`,this.qo=this.databaseId.database===nh?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Qo(e,t,i,s,l){const c=Nm(),d=this.$o(e,t.toUriEncodedString());ge(em,`Sending RPC '${e}' ${c}:`,d,i);const p={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(p,s,l),this.Ko(e,d,p,i).then(m=>(ge(em,`Received RPC '${e}' ${c}: `,m),m),m=>{throw jo(em,`RPC '${e}' ${c} failed with error: `,m,"url: ",d,"request:",i),m})}Wo(e,t,i,s,l,c){return this.Qo(e,t,i,s,l)}Uo(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,l)=>e[l]=s),i&&i.headers.forEach((s,l)=>e[l]=s)}$o(e,t){const i=Iq[e];return`${this.Lo}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oq{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="WebChannelConnection";class Dq extends xq{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,t,i,s){const l=Nm();return new Promise((c,d)=>{const p=new LT;p.setWithCredentials(!0),p.listenOnce(VT.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Lf.NO_ERROR:const v=p.getResponseJson();ge(vn,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(v)),c(v);break;case Lf.TIMEOUT:ge(vn,`RPC '${e}' ${l} timed out`),d(new Te(ue.DEADLINE_EXCEEDED,"Request time out"));break;case Lf.HTTP_ERROR:const b=p.getStatus();if(ge(vn,`RPC '${e}' ${l} failed with status:`,b,"response text:",p.getResponseText()),b>0){let T=p.getResponseJson();Array.isArray(T)&&(T=T[0]);const w=T==null?void 0:T.error;if(w&&w.status&&w.message){const O=function(P){const B=P.toLowerCase().replace(/_/g,"-");return Object.values(ue).indexOf(B)>=0?B:ue.UNKNOWN}(w.status);d(new Te(O,w.message))}else d(new Te(ue.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new Te(ue.UNAVAILABLE,"Connection failed."));break;default:Ie(9055,{s_:e,streamId:l,o_:p.getLastErrorCode(),__:p.getLastError()})}}finally{ge(vn,`RPC '${e}' ${l} completed.`)}});const m=JSON.stringify(s);ge(vn,`RPC '${e}' ${l} sending request:`,s),p.send(t,"POST",m,i,15)})}a_(e,t,i){const s=Nm(),l=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=zT(),d=jT(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(p.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Uo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const v=l.join("");ge(vn,`Creating RPC '${e}' stream ${s}: ${v}`,p);const b=c.createWebChannel(v,p);let T=!1,w=!1;const O=new Oq({Go:P=>{w?ge(vn,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(T||(ge(vn,`Opening RPC '${e}' stream ${s} transport.`),b.open(),T=!0),ge(vn,`RPC '${e}' stream ${s} sending:`,P),b.send(P))},zo:()=>b.close()}),V=(P,B,K)=>{P.listen(B,Q=>{try{K(Q)}catch(ie){setTimeout(()=>{throw ie},0)}})};return V(b,Eu.EventType.OPEN,()=>{w||(ge(vn,`RPC '${e}' stream ${s} transport opened.`),O.t_())}),V(b,Eu.EventType.CLOSE,()=>{w||(w=!0,ge(vn,`RPC '${e}' stream ${s} transport closed`),O.r_())}),V(b,Eu.EventType.ERROR,P=>{w||(w=!0,jo(vn,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),O.r_(new Te(ue.UNAVAILABLE,"The operation could not be completed")))}),V(b,Eu.EventType.MESSAGE,P=>{var B;if(!w){const K=P.data[0];Je(!!K,16349);const Q=K,ie=(Q==null?void 0:Q.error)||((B=Q[0])===null||B===void 0?void 0:B.error);if(ie){ge(vn,`RPC '${e}' stream ${s} received error:`,ie);const D=ie.status;let G=function(x){const N=Mt[x];if(N!==void 0)return bS(N)}(D),C=ie.message;G===void 0&&(G=ue.INTERNAL,C="Unknown error status: "+D+" with message "+ie.message),w=!0,O.r_(new Te(G,C)),b.close()}else ge(vn,`RPC '${e}' stream ${s} received:`,K),O.i_(K)}}),V(d,UT.STAT_EVENT,P=>{P.stat===Tm.PROXY?ge(vn,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===Tm.NOPROXY&&ge(vn,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{O.n_()},0),O}}function tm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(r){return new PD(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,t,i=1e3,s=1.5,l=6e4){this.bi=e,this.timerId=t,this.u_=i,this.c_=s,this.l_=l,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const t=Math.floor(this.h_+this.d_()),i=Math.max(0,Date.now()-this.T_),s=Math.max(0,t-i);s>0&&ge("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.h_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0="PersistentStream";class MS{constructor(e,t,i,s,l,c,d,p){this.bi=e,this.R_=i,this.V_=s,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new PS(e,t)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,t){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():t&&t.code===ue.RESOURCE_EXHAUSTED?(Fi(t.toString()),Fi("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):t&&t.code===ue.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(t)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),t=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.m_===t&&this.B_(i,s)},i=>{e(()=>{const s=new Te(ue.UNKNOWN,"Fetching auth token failed: "+i.message);return this.L_(s)})})}B_(e,t){const i=this.N_(this.m_);this.stream=this.k_(e,t),this.stream.jo(()=>{i(()=>this.listener.jo())}),this.stream.Jo(()=>{i(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{i(()=>this.L_(s))}),this.stream.onMessage(s=>{i(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return ge(S0,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return t=>{this.bi.enqueueAndForget(()=>this.m_===e?t():(ge(S0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qq extends MS{constructor(e,t,i,s,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,c),this.serializer=l}k_(e,t){return this.connection.a_("Listen",e,t)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const t=VD(this.serializer,e),i=function(l){if(!("targetChange"in l))return De.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?De.min():c.readTime?li(c.readTime):De.min()}(e);return this.listener.Q_(t,i)}U_(e){const t={};t.database=qm(this.serializer),t.addTarget=function(l,c){let d;const p=c.target;if(d=Cm(p)?{documents:zD(l,p)}:{query:BD(l,p).gt},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=AS(l,c.resumeToken);const m=xm(l,c.expectedCount);m!==null&&(d.expectedCount=m)}else if(c.snapshotVersion.compareTo(De.min())>0){d.readTime=lh(l,c.snapshotVersion.toTimestamp());const m=xm(l,c.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const i=FD(this.serializer,e);i&&(t.labels=i),this.F_(t)}K_(e){const t={};t.database=qm(this.serializer),t.removeTarget=e,this.F_(t)}}class kq extends MS{constructor(e,t,i,s,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,c),this.serializer=l}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,t){return this.connection.a_("Write",e,t)}q_(e){return Je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Je(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){Je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const t=jD(e.writeResults,e.commitTime),i=li(e.commitTime);return this.listener.j_(i,t)}H_(){const e={};e.database=qm(this.serializer),this.F_(e)}G_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>UD(this.serializer,i))};this.F_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nq{}class Pq extends Nq{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new Te(ue.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,t,i,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Qo(e,Om(t,i),s,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ue.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new Te(ue.UNKNOWN,l.toString())})}Wo(e,t,i,s,l){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Wo(e,Om(t,i),s,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===ue.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new Te(ue.UNKNOWN,c.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class Mq{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Fi(t),this.ea=!1):ge("OnlineStateTracker",t)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is="RemoteStore";class Lq{constructor(e,t,i,s,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=l,this.ca.vo(c=>{i.enqueueAndForget(async()=>{Ns(this)&&(ge(Is,"Restarting streams for network reachability change."),await async function(p){const m=qe(p);m.aa.add(4),await Ju(m),m.la.set("Unknown"),m.aa.delete(4),await kh(m)}(this))})}),this.la=new Mq(i,s)}}async function kh(r){if(Ns(r))for(const e of r.ua)await e(!0)}async function Ju(r){for(const e of r.ua)await e(!1)}function LS(r,e){const t=qe(r);t._a.has(e.targetId)||(t._a.set(e.targetId,e),Cg(t)?Rg(t):tl(t).b_()&&wg(t,e))}function Ag(r,e){const t=qe(r),i=tl(t);t._a.delete(e),i.b_()&&VS(t,e),t._a.size===0&&(i.b_()?i.v_():Ns(t)&&t.la.set("Unknown"))}function wg(r,e){if(r.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(De.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}tl(r).U_(e)}function VS(r,e){r.ha.Ke(e),tl(r).K_(e)}function Rg(r){r.ha=new DD({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>r._a.get(e)||null,Pt:()=>r.datastore.serializer.databaseId}),tl(r).start(),r.la.ta()}function Cg(r){return Ns(r)&&!tl(r).w_()&&r._a.size>0}function Ns(r){return qe(r).aa.size===0}function US(r){r.ha=void 0}async function Vq(r){r.la.set("Online")}async function Uq(r){r._a.forEach((e,t)=>{wg(r,e)})}async function jq(r,e){US(r),Cg(r)?(r.la.ia(e),Rg(r)):r.la.set("Unknown")}async function zq(r,e,t){if(r.la.set("Online"),e instanceof SS&&e.state===2&&e.cause)try{await async function(s,l){const c=l.cause;for(const d of l.targetIds)s._a.has(d)&&(await s.remoteSyncer.rejectListen(d,c),s._a.delete(d),s.ha.removeTarget(d))}(r,e)}catch(i){ge(Is,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await ch(r,i)}else if(e instanceof zf?r.ha.Xe(e):e instanceof TS?r.ha.ot(e):r.ha.nt(e),!t.isEqual(De.min()))try{const i=await NS(r.localStore);t.compareTo(i)>=0&&await function(l,c){const d=l.ha.It(c);return d.targetChanges.forEach((p,m)=>{if(p.resumeToken.approximateByteSize()>0){const v=l._a.get(m);v&&l._a.set(m,v.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,m)=>{const v=l._a.get(p);if(!v)return;l._a.set(p,v.withResumeToken(dn.EMPTY_BYTE_STRING,v.snapshotVersion)),VS(l,p);const b=new Ia(v.target,p,m,v.sequenceNumber);wg(l,b)}),l.remoteSyncer.applyRemoteEvent(d)}(r,t)}catch(i){ge(Is,"Failed to raise snapshot:",i),await ch(r,i)}}async function ch(r,e,t){if(!el(e))throw e;r.aa.add(1),await Ju(r),r.la.set("Offline"),t||(t=()=>NS(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ge(Is,"Retrying IndexedDB access"),await t(),r.aa.delete(1),await kh(r)})}function jS(r,e){return e().catch(t=>ch(r,t,e))}async function Nh(r){const e=qe(r),t=ja(e);let i=e.oa.length>0?e.oa[e.oa.length-1].batchId:cg;for(;Bq(e);)try{const s=await Sq(e.localStore,i);if(s===null){e.oa.length===0&&t.v_();break}i=s.batchId,Hq(e,s)}catch(s){await ch(e,s)}zS(e)&&BS(e)}function Bq(r){return Ns(r)&&r.oa.length<10}function Hq(r,e){r.oa.push(e);const t=ja(r);t.b_()&&t.W_&&t.G_(e.mutations)}function zS(r){return Ns(r)&&!ja(r).w_()&&r.oa.length>0}function BS(r){ja(r).start()}async function Fq(r){ja(r).H_()}async function Gq(r){const e=ja(r);for(const t of r.oa)e.G_(t.mutations)}async function Yq(r,e,t){const i=r.oa.shift(),s=yg.from(i,e,t);await jS(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Nh(r)}async function Kq(r,e){e&&ja(r).W_&&await async function(i,s){if(function(c){return xD(c)&&c!==ue.ABORTED}(s.code)){const l=i.oa.shift();ja(i).D_(),await jS(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,s)),await Nh(i)}}(r,e),zS(r)&&BS(r)}async function A0(r,e){const t=qe(r);t.asyncQueue.verifyOperationInProgress(),ge(Is,"RemoteStore received new credentials");const i=Ns(t);t.aa.add(3),await Ju(t),i&&t.la.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.aa.delete(3),await kh(t)}async function $q(r,e){const t=qe(r);e?(t.aa.delete(2),await kh(t)):e||(t.aa.add(2),await Ju(t),t.la.set("Unknown"))}function tl(r){return r.Pa||(r.Pa=function(t,i,s){const l=qe(t);return l.Y_(),new qq(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,s)}(r.datastore,r.asyncQueue,{jo:Vq.bind(null,r),Jo:Uq.bind(null,r),Zo:jq.bind(null,r),Q_:zq.bind(null,r)}),r.ua.push(async e=>{e?(r.Pa.D_(),Cg(r)?Rg(r):r.la.set("Unknown")):(await r.Pa.stop(),US(r))})),r.Pa}function ja(r){return r.Ta||(r.Ta=function(t,i,s){const l=qe(t);return l.Y_(),new kq(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,s)}(r.datastore,r.asyncQueue,{jo:()=>Promise.resolve(),Jo:Fq.bind(null,r),Zo:Kq.bind(null,r),z_:Gq.bind(null,r),j_:Yq.bind(null,r)}),r.ua.push(async e=>{e?(r.Ta.D_(),await Nh(r)):(await r.Ta.stop(),r.oa.length>0&&(ge(Is,`Stopping write stream with ${r.oa.length} pending writes`),r.oa=[]))})),r.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,t,i,s,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=l,this.deferred=new Na,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,l){const c=Date.now()+i,d=new Ig(e,t,c,s,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Te(ue.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xg(r,e){if(Fi("AsyncQueue",`${e}: ${r}`),el(r))return new Te(ue.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{static emptySet(e){return new Lo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||Ae.comparator(t.key,i.key):(t,i)=>Ae.comparator(t.key,i.key),this.keyedMap=bu(),this.sortedSet=new Tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Lo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,l=i.getNext().key;if(!s.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Lo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(){this.Ia=new Tt(Ae.comparator)}track(e){const t=e.doc.key,i=this.Ia.get(t);i?e.type!==0&&i.type===3?this.Ia=this.Ia.insert(t,e):e.type===3&&i.type!==1?this.Ia=this.Ia.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Ia=this.Ia.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Ia=this.Ia.remove(t):e.type===1&&i.type===2?this.Ia=this.Ia.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):Ie(63341,{Vt:e,Ea:i}):this.Ia=this.Ia.insert(t,e)}da(){const e=[];return this.Ia.inorderTraversal((t,i)=>{e.push(i)}),e}}class Go{constructor(e,t,i,s,l,c,d,p,m){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=m}static fromInitialDocuments(e,t,i,s,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new Go(e,t,Lo.emptySet(t),c,i,s,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ch(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qq{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class Xq{constructor(){this.queries=R0(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(t,i){const s=qe(t),l=s.queries;s.queries=R0(),l.forEach((c,d)=>{for(const p of d.Ra)p.onError(i)})})(this,new Te(ue.ABORTED,"Firestore shutting down"))}}function R0(){return new qs(r=>uS(r),Ch)}async function Wq(r,e){const t=qe(r);let i=3;const s=e.query;let l=t.queries.get(s);l?!l.Va()&&e.ma()&&(i=2):(l=new Qq,i=e.ma()?0:1);try{switch(i){case 0:l.Aa=await t.onListen(s,!0);break;case 1:l.Aa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(c){const d=xg(c,`Initialization of query '${Oo(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,l),l.Ra.push(e),e.ga(t.onlineState),l.Aa&&e.pa(l.Aa)&&Og(t)}async function Zq(r,e){const t=qe(r),i=e.query;let s=3;const l=t.queries.get(i);if(l){const c=l.Ra.indexOf(e);c>=0&&(l.Ra.splice(c,1),l.Ra.length===0?s=e.ma()?0:1:!l.Va()&&e.ma()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Jq(r,e){const t=qe(r);let i=!1;for(const s of e){const l=s.query,c=t.queries.get(l);if(c){for(const d of c.Ra)d.pa(s)&&(i=!0);c.Aa=s}}i&&Og(t)}function ek(r,e,t){const i=qe(r),s=i.queries.get(e);if(s)for(const l of s.Ra)l.onError(t);i.queries.delete(e)}function Og(r){r.fa.forEach(e=>{e.next()})}var Pm,C0;(C0=Pm||(Pm={})).ya="default",C0.Cache="cache";class tk{constructor(e,t,i){this.query=e,this.wa=t,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=i||{}}pa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Go(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ba?this.Da(e)&&(this.wa.next(e),t=!0):this.va(e,this.onlineState)&&(this.Ca(e),t=!0),this.Sa=e,t}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let t=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),t=!0),t}va(e,t){if(!e.fromCache||!this.ma())return!0;const i=t!=="Offline";return(!this.options.Fa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const t=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ca(e){e=Go.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==Pm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this.key=e}}class FS{constructor(e){this.key=e}}class nk{constructor(e,t){this.query=e,this.qa=t,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=He(),this.mutatedKeys=He(),this.Ua=cS(e),this.Ka=new Lo(this.Ua)}get Wa(){return this.qa}Ga(e,t){const i=t?t.za:new w0,s=t?t.Ka:this.Ka;let l=t?t.mutatedKeys:this.mutatedKeys,c=s,d=!1;const p=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((v,b)=>{const T=s.get(v),w=Ih(this.query,b)?b:null,O=!!T&&this.mutatedKeys.has(T.key),V=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let P=!1;T&&w?T.data.isEqual(w.data)?O!==V&&(i.track({type:3,doc:w}),P=!0):this.ja(T,w)||(i.track({type:2,doc:w}),P=!0,(p&&this.Ua(w,p)>0||m&&this.Ua(w,m)<0)&&(d=!0)):!T&&w?(i.track({type:0,doc:w}),P=!0):T&&!w&&(i.track({type:1,doc:T}),P=!0,(p||m)&&(d=!0)),P&&(w?(c=c.add(w),l=V?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{Ka:c,za:i,ys:d,mutatedKeys:l}}ja(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const l=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const c=e.za.da();c.sort((v,b)=>function(w,O){const V=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie(20277,{Vt:P})}};return V(w)-V(O)}(v.type,b.type)||this.Ua(v.doc,b.doc)),this.Ha(i),s=s!=null&&s;const d=t&&!s?this.Ja():[],p=this.$a.size===0&&this.current&&!s?1:0,m=p!==this.Qa;return this.Qa=p,c.length!==0||m?{snapshot:new Go(this.query,e.Ka,l,c,e.mutatedKeys,p===0,m,!1,!!i&&i.resumeToken.approximateByteSize()>0),Ya:d}:{Ya:d}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new w0,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(t=>this.qa=this.qa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qa=this.qa.delete(t)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=He(),this.Ka.forEach(i=>{this.Za(i.key)&&(this.$a=this.$a.add(i.key))});const t=[];return e.forEach(i=>{this.$a.has(i)||t.push(new FS(i))}),this.$a.forEach(i=>{e.has(i)||t.push(new HS(i))}),t}Xa(e){this.qa=e.Ns,this.$a=He();const t=this.Ga(e.documents);return this.applyChanges(t,!0)}eu(){return Go.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const Dg="SyncEngine";class rk{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class ik{constructor(e){this.key=e,this.tu=!1}}class ak{constructor(e,t,i,s,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.nu={},this.ru=new qs(d=>uS(d),Ch),this.iu=new Map,this.su=new Set,this.ou=new Tt(Ae.comparator),this._u=new Map,this.au=new Eg,this.uu={},this.cu=new Map,this.lu=Fo.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function sk(r,e,t=!0){const i=XS(r);let s;const l=i.ru.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),s=l.view.eu()):s=await GS(i,e,t,!0),s}async function ok(r,e){const t=XS(r);await GS(t,e,!0,!1)}async function GS(r,e,t,i){const s=await Aq(r.localStore,si(e)),l=s.targetId,c=r.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await lk(r,e,l,c==="current",s.resumeToken)),r.isPrimaryClient&&t&&LS(r.remoteStore,s),d}async function lk(r,e,t,i,s){r.Pu=(b,T,w)=>async function(V,P,B,K){let Q=P.view.Ga(B);Q.ys&&(Q=await _0(V.localStore,P.query,!1).then(({documents:C})=>P.view.Ga(C,Q)));const ie=K&&K.targetChanges.get(P.targetId),D=K&&K.targetMismatches.get(P.targetId)!=null,G=P.view.applyChanges(Q,V.isPrimaryClient,ie,D);return x0(V,P.targetId,G.Ya),G.snapshot}(r,b,T,w);const l=await _0(r.localStore,e,!0),c=new nk(e,l.Ns),d=c.Ga(l.documents),p=Zu.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",s),m=c.applyChanges(d,r.isPrimaryClient,p);x0(r,t,m.Ya);const v=new rk(e,t,c);return r.ru.set(e,v),r.iu.has(t)?r.iu.get(t).push(e):r.iu.set(t,[e]),m.snapshot}async function uk(r,e,t){const i=qe(r),s=i.ru.get(e),l=i.iu.get(s.targetId);if(l.length>1)return i.iu.set(s.targetId,l.filter(c=>!Ch(c,e))),void i.ru.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await km(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),t&&Ag(i.remoteStore,s.targetId),Mm(i,s.targetId)}).catch(Jo)):(Mm(i,s.targetId),await km(i.localStore,s.targetId,!0))}async function ck(r,e){const t=qe(r),i=t.ru.get(e),s=t.iu.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Ag(t.remoteStore,i.targetId))}async function fk(r,e,t){const i=vk(r);try{const s=await function(c,d){const p=qe(c),m=pt.now(),v=d.reduce((w,O)=>w.add(O.key),He());let b,T;return p.persistence.runTransaction("Locally write mutations","readwrite",w=>{let O=Gi(),V=He();return p.Cs.getEntries(w,v).next(P=>{O=P,O.forEach((B,K)=>{K.isValidDocument()||(V=V.add(B))})}).next(()=>p.localDocuments.getOverlayedDocuments(w,O)).next(P=>{b=P;const B=[];for(const K of d){const Q=AD(K,b.get(K.key).overlayedDocument);Q!=null&&B.push(new ks(K.key,Q,tS(Q.value.mapValue),oi.exists(!0)))}return p.mutationQueue.addMutationBatch(w,m,B,d)}).next(P=>{T=P;const B=P.applyToLocalDocumentSet(b,V);return p.documentOverlayCache.saveOverlays(w,P.batchId,B)})}).then(()=>({batchId:T.batchId,changes:hS(b)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(c,d,p){let m=c.uu[c.currentUser.toKey()];m||(m=new Tt(Le)),m=m.insert(d,p),c.uu[c.currentUser.toKey()]=m}(i,s.batchId,t),await ec(i,s.changes),await Nh(i.remoteStore)}catch(s){const l=xg(s,"Failed to persist write");t.reject(l)}}async function YS(r,e){const t=qe(r);try{const i=await bq(t.localStore,e);e.targetChanges.forEach((s,l)=>{const c=t._u.get(l);c&&(Je(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?c.tu=!0:s.modifiedDocuments.size>0?Je(c.tu,14607):s.removedDocuments.size>0&&(Je(c.tu,42227),c.tu=!1))}),await ec(t,i,e)}catch(i){await Jo(i)}}function I0(r,e,t){const i=qe(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.ru.forEach((l,c)=>{const d=c.view.ga(e);d.snapshot&&s.push(d.snapshot)}),function(c,d){const p=qe(c);p.onlineState=d;let m=!1;p.queries.forEach((v,b)=>{for(const T of b.Ra)T.ga(d)&&(m=!0)}),m&&Og(p)}(i.eventManager,e),s.length&&i.nu.Q_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function hk(r,e,t){const i=qe(r);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i._u.get(e),l=s&&s.key;if(l){let c=new Tt(Ae.comparator);c=c.insert(l,bn.newNoDocument(l,De.min()));const d=He().add(l),p=new Dh(De.min(),new Map,new Tt(Le),c,d);await YS(i,p),i.ou=i.ou.remove(l),i._u.delete(e),qg(i)}else await km(i.localStore,e,!1).then(()=>Mm(i,e,t)).catch(Jo)}async function dk(r,e){const t=qe(r),i=e.batch.batchId;try{const s=await Eq(t.localStore,e);$S(t,i,null),KS(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await ec(t,s)}catch(s){await Jo(s)}}async function pk(r,e,t){const i=qe(r);try{const s=await function(c,d){const p=qe(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let v;return p.mutationQueue.lookupMutationBatch(m,d).next(b=>(Je(b!==null,37113),v=b.keys(),p.mutationQueue.removeMutationBatch(m,b))).next(()=>p.mutationQueue.performConsistencyCheck(m)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(m,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,v)).next(()=>p.localDocuments.getDocuments(m,v))})}(i.localStore,e);$S(i,e,t),KS(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await ec(i,s)}catch(s){await Jo(s)}}function KS(r,e){(r.cu.get(e)||[]).forEach(t=>{t.resolve()}),r.cu.delete(e)}function $S(r,e,t){const i=qe(r);let s=i.uu[i.currentUser.toKey()];if(s){const l=s.get(e);l&&(t?l.reject(t):l.resolve(),s=s.remove(e)),i.uu[i.currentUser.toKey()]=s}}function Mm(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.iu.get(e))r.ru.delete(i),t&&r.nu.Tu(i,t);r.iu.delete(e),r.isPrimaryClient&&r.au.Ur(e).forEach(i=>{r.au.containsKey(i)||QS(r,i)})}function QS(r,e){r.su.delete(e.path.canonicalString());const t=r.ou.get(e);t!==null&&(Ag(r.remoteStore,t),r.ou=r.ou.remove(e),r._u.delete(t),qg(r))}function x0(r,e,t){for(const i of t)i instanceof HS?(r.au.addReference(i.key,e),mk(r,i)):i instanceof FS?(ge(Dg,"Document no longer in limbo: "+i.key),r.au.removeReference(i.key,e),r.au.containsKey(i.key)||QS(r,i.key)):Ie(19791,{Iu:i})}function mk(r,e){const t=e.key,i=t.path.canonicalString();r.ou.get(t)||r.su.has(i)||(ge(Dg,"New document in limbo: "+t),r.su.add(i),qg(r))}function qg(r){for(;r.su.size>0&&r.ou.size<r.maxConcurrentLimboResolutions;){const e=r.su.values().next().value;r.su.delete(e);const t=new Ae(yt.fromString(e)),i=r.lu.next();r._u.set(i,new ik(t)),r.ou=r.ou.insert(t,i),LS(r.remoteStore,new Ia(si(lS(t.path)),i,"TargetPurposeLimboResolution",Sh.le))}}async function ec(r,e,t){const i=qe(r),s=[],l=[],c=[];i.ru.isEmpty()||(i.ru.forEach((d,p)=>{c.push(i.Pu(p,e,t).then(m=>{var v;if((m||t)&&i.isPrimaryClient){const b=m?!m.fromCache:(v=t==null?void 0:t.targetChanges.get(p.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,b?"current":"not-current")}if(m){s.push(m);const b=Tg.Ps(p.targetId,m);l.push(b)}}))}),await Promise.all(c),i.nu.Q_(s),await async function(p,m){const v=qe(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>se.forEach(m,T=>se.forEach(T.ls,w=>v.persistence.referenceDelegate.addReference(b,T.targetId,w)).next(()=>se.forEach(T.hs,w=>v.persistence.referenceDelegate.removeReference(b,T.targetId,w)))))}catch(b){if(!el(b))throw b;ge(Sg,"Failed to update sequence numbers: "+b)}for(const b of m){const T=b.targetId;if(!b.fromCache){const w=v.Ss.get(T),O=w.snapshotVersion,V=w.withLastLimboFreeSnapshotVersion(O);v.Ss=v.Ss.insert(T,V)}}}(i.localStore,l))}async function gk(r,e){const t=qe(r);if(!t.currentUser.isEqual(e)){ge(Dg,"User change. New user:",e.toKey());const i=await kS(t.localStore,e);t.currentUser=e,function(l,c){l.cu.forEach(d=>{d.forEach(p=>{p.reject(new Te(ue.CANCELLED,c))})}),l.cu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ec(t,i.Ms)}}function yk(r,e){const t=qe(r),i=t._u.get(e);if(i&&i.tu)return He().add(i.key);{let s=He();const l=t.iu.get(e);if(!l)return s;for(const c of l){const d=t.ru.get(c);s=s.unionWith(d.view.Wa)}return s}}function XS(r){const e=qe(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=YS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hk.bind(null,e),e.nu.Q_=Jq.bind(null,e.eventManager),e.nu.Tu=ek.bind(null,e.eventManager),e}function vk(r){const e=qe(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pk.bind(null,e),e}class fh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qh(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,t){return null}fu(e,t){return null}Vu(e){return _q(this.persistence,new gq,e.initialUser,this.serializer)}Ru(e){return new qS(bg.Ei,this.serializer)}Au(e){return new Rq}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fh.provider={build:()=>new fh};class _k extends fh{constructor(e){super(),this.cacheSizeBytes=e}mu(e,t){Je(this.persistence.referenceDelegate instanceof uh,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new tq(i,e.asyncQueue,t)}Ru(e){const t=this.cacheSizeBytes!==void 0?Ln.withCacheSize(this.cacheSizeBytes):Ln.DEFAULT;return new qS(i=>uh.Ei(i,t),this.serializer)}}class Lm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>I0(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=gk.bind(null,this.syncEngine),await $q(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Xq}()}createDatastore(e){const t=qh(e.databaseInfo.databaseId),i=function(l){return new Dq(l)}(e.databaseInfo);return function(l,c,d,p){return new Pq(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,s,l,c,d){return new Lq(i,s,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>I0(this.syncEngine,t,0),function(){return T0.C()?new T0:new Cq}())}createSyncEngine(e,t){return function(s,l,c,d,p,m,v){const b=new ak(s,l,c,d,p,m);return v&&(b.hu=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const l=qe(s);ge(Is,"RemoteStore shutting down."),l.aa.add(5),await Ju(l),l.ca.shutdown(),l.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Lm.provider={build:()=>new Lm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):Fi("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="FirestoreClient";class bk{constructor(e,t,i,s,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=En.UNAUTHENTICATED,this.clientId=GT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{ge(za,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(ge(za,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Na;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=xg(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function nm(r,e){r.asyncQueue.verifyOperationInProgress(),ge(za,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener(async s=>{i.isEqual(s)||(await kS(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function O0(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Tk(r);ge(za,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(i=>A0(e.remoteStore,i)),r.setAppCheckTokenChangeListener((i,s)=>A0(e.remoteStore,s)),r._onlineComponents=e}async function Tk(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ge(za,"Using user provided OfflineComponentProvider");try{await nm(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===ue.FAILED_PRECONDITION||s.code===ue.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;jo("Error using user provided cache. Falling back to memory cache: "+t),await nm(r,new fh)}}else ge(za,"Using default OfflineComponentProvider"),await nm(r,new _k(void 0));return r._offlineComponents}async function WS(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ge(za,"Using user provided OnlineComponentProvider"),await O0(r,r._uninitializedComponentsProvider._online)):(ge(za,"Using default OnlineComponentProvider"),await O0(r,new Lm))),r._onlineComponents}function Sk(r){return WS(r).then(e=>e.syncEngine)}async function Ak(r){const e=await WS(r),t=e.eventManager;return t.onListen=sk.bind(null,e.syncEngine),t.onUnlisten=uk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ok.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ck.bind(null,e.syncEngine),t}function wk(r,e,t={}){const i=new Na;return r.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,m){const v=new Ek({next:T=>{v.yu(),c.enqueueAndForget(()=>Zq(l,b)),T.fromCache&&p.source==="server"?m.reject(new Te(ue.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(T)},error:T=>m.reject(T)}),b=new tk(d,v,{includeMetadataChanges:!0,Fa:!0});return Wq(l,b)}(await Ak(r),r.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(r,e,t){if(!t)throw new Te(ue.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Rk(r,e,t,i){if(e===!0&&i===!0)throw new Te(ue.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function q0(r){if(!Ae.isDocumentKey(r))throw new Te(ue.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function k0(r){if(Ae.isDocumentKey(r))throw new Te(ue.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function kg(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ie(12329,{type:typeof r})}function Vu(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new Te(ue.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=kg(r);throw new Te(ue.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA="firestore.googleapis.com",N0=!0;class P0{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new Te(ue.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=eA,this.ssl=N0}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:N0;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=DS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<JD)throw new Te(ue.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Rk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ZS((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new Te(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new Te(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new Te(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ph{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new P0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Te(ue.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Te(ue.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new P0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new xO;switch(i.type){case"firstParty":return new kO(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Te(ue.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=D0.get(t);i&&(ge("ComponentProvider","Removing Datastore"),D0.delete(t),i.terminate())}(this),Promise.resolve()}}function Ck(r,e,t,i={}){var s;const l=(r=Vu(r,Ph))._getSettings(),c=Object.assign(Object.assign({},l),{emulatorOptions:r._getEmulatorOptions()}),d=`${e}:${t}`;l.host!==eA&&l.host!==d&&jo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},l),{host:d,ssl:!1,emulatorOptions:i});if(!As(p,c)&&(r._setSettings(p),i.mockUserToken)){let m,v;if(typeof i.mockUserToken=="string")m=i.mockUserToken,v=En.MOCK_USER;else{m=G1(i.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const b=i.mockUserToken.sub||i.mockUserToken.user_id;if(!b)throw new Te(ue.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new En(b)}r._authCredentials=new OO(new HT(m,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Mh(this.firestore,e,this._query)}}class Nr{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nr(this.firestore,e,this._key)}}class Pa extends Mh{constructor(e,t,i){super(e,t,lS(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nr(this.firestore,null,new Ae(e))}withConverter(e){return new Pa(this.firestore,e,this._path)}}function gr(r,e,...t){if(r=Qn(r),JS("collection","path",e),r instanceof Ph){const i=yt.fromString(e,...t);return k0(i),new Pa(r,null,i)}{if(!(r instanceof Nr||r instanceof Pa))throw new Te(ue.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(yt.fromString(e,...t));return k0(i),new Pa(r.firestore,null,i)}}function Ps(r,e,...t){if(r=Qn(r),arguments.length===1&&(e=GT.newId()),JS("doc","path",e),r instanceof Ph){const i=yt.fromString(e,...t);return q0(i),new Nr(r,null,new Ae(i))}{if(!(r instanceof Nr||r instanceof Pa))throw new Te(ue.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(yt.fromString(e,...t));return q0(i),new Nr(r.firestore,r instanceof Pa?r.converter:null,new Ae(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="AsyncQueue";class L0{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new PS(this,"async_queue_retry"),this.ju=()=>{const i=tm();i&&ge(M0,"Visibility state changed to "+i.visibilityState),this.y_.A_()},this.Hu=e;const t=tm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const t=tm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const t=new Na;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!el(e))throw e;ge(M0,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const t=this.Hu.then(()=>(this.Wu=!0,e().catch(i=>{throw this.Ku=i,this.Wu=!1,Fi("INTERNAL UNHANDLED ERROR: ",V0(i)),i}).then(i=>(this.Wu=!1,i))));return this.Hu=t,t}enqueueAfterDelay(e,t,i){this.Ju(),this.zu.indexOf(e)>-1&&(t=0);const s=Ig.createAndSchedule(this,e,t,i,l=>this.Xu(l));return this.Uu.push(s),s}Ju(){this.Ku&&Ie(47125,{ec:V0(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const t of this.Uu)if(t.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Uu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const t=this.Uu.indexOf(e);this.Uu.splice(t,1)}}function V0(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Lh extends Ph{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new L0,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new L0(e),this._firestoreClient=void 0,await e}}}function Ik(r,e){const t=typeof r=="object"?r:Zb(),i=typeof r=="string"?r:nh,s=Jm(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const l=H1("firestore");l&&Ck(s,...l)}return s}function tA(r){if(r._terminated)throw new Te(ue.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||xk(r),r._firestoreClient}function xk(r){var e,t,i;const s=r._freezeSettings(),l=function(d,p,m,v){return new $O(d,p,m,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,ZS(v.experimentalLongPollingOptions),v.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new bk(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yo(dn.fromBase64String(e))}catch(t){throw new Te(ue.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Yo(dn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Te(ue.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new hn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Te(ue.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Te(ue.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,s){if(i.length!==s.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==s[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=/^__.*__$/;class Dk{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new ks(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wu(e,this.data,t,this.fieldTransforms)}}function rA(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie(40011,{oc:r})}}class Lg{constructor(e,t,i,s,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,l===void 0&&this._c(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new Lg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ac({path:i,cc:!1});return s.lc(e),s}hc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ac({path:i,cc:!1});return s._c(),s}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return hh(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(rA(this.oc)&&Ok.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class qk{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||qh(e)}dc(e,t,i,s=!1){return new Lg({oc:e,methodName:t,Ec:i,path:hn.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kk(r){const e=r._freezeSettings(),t=qh(r._databaseId);return new qk(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Nk(r,e,t,i,s,l={}){const c=r.dc(l.merge||l.mergeFields?2:0,e,t,s);oA("Data must be an object, but it was:",c,i);const d=aA(i,c);let p,m;if(l.merge)p=new kr(c.fieldMask),m=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const b of l.mergeFields){const T=Pk(e,b,t);if(!c.contains(T))throw new Te(ue.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Lk(v,T)||v.push(T)}p=new kr(v),m=c.fieldTransforms.filter(b=>p.covers(b.field))}else p=null,m=c.fieldTransforms;return new Dk(new pr(d),p,m)}function iA(r,e){if(sA(r=Qn(r)))return oA("Unsupported field value:",e,r),aA(r,e);if(r instanceof nA)return function(i,s){if(!rA(s.oc))throw s.Tc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(s);l&&s.fieldTransforms.push(l)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(i,s){const l=[];let c=0;for(const d of i){let p=iA(d,s.Pc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(r,e)}return function(i,s){if((i=Qn(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return vD(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=pt.fromDate(i);return{timestampValue:lh(s.serializer,l)}}if(i instanceof pt){const l=new pt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:lh(s.serializer,l)}}if(i instanceof Pg)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Yo)return{bytesValue:AS(s.serializer,i._byteString)};if(i instanceof Nr){const l=s.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw s.Tc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:_g(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof Mg)return function(c,d){return{mapValue:{fields:{[JT]:{stringValue:eS},[rh]:{arrayValue:{values:c.toArray().map(m=>{if(typeof m!="number")throw d.Tc("VectorValues must only contain numeric values.");return mg(d.serializer,m)})}}}}}}(i,s);throw s.Tc(`Unsupported field value: ${kg(i)}`)}(r,e)}function aA(r,e){const t={};return KT(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ds(r,(i,s)=>{const l=iA(s,e.uc(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function sA(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof pt||r instanceof Pg||r instanceof Yo||r instanceof Nr||r instanceof nA||r instanceof Mg)}function oA(r,e,t){if(!sA(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const i=kg(t);throw i==="an object"?e.Tc(r+" a custom object"):e.Tc(r+" "+i)}}function Pk(r,e,t){if((e=Qn(e))instanceof Ng)return e._internalPath;if(typeof e=="string")return lA(r,e);throw hh("Field path arguments must be of type string or ",r,!1,void 0,t)}const Mk=new RegExp("[~\\*/\\[\\]]");function lA(r,e,t){if(e.search(Mk)>=0)throw hh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Ng(...e.split("."))._internalPath}catch{throw hh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function hh(r,e,t,i,s){const l=i&&!i.isEmpty(),c=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${s}`),p+=")"),new Te(ue.INVALID_ARGUMENT,d+r+p)}function Lk(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,t,i,s,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Nr(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Vk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(cA("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Vk extends uA{data(){return super.data()}}function cA(r,e){return typeof e=="string"?lA(r,e):e instanceof Ng?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new Te(ue.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jk{convertValue(e,t="none"){switch(Ua(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Va(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ie(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ds(e,(s,l)=>{i[s]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,s;const l=(s=(i=(t=e.fields)===null||t===void 0?void 0:t[rh].arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map(c=>Dt(c.doubleValue));return new Mg(l)}convertGeoPoint(e){return new Pg(Dt(e.latitude),Dt(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=wh(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ku(e));default:return null}}convertTimestamp(e){const t=La(e);return new pt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=yt.fromString(e);Je(OS(i),9688,{name:e});const s=new Nu(i.get(1),i.get(3)),l=new Ae(i.popFirst(5));return s.isEqual(t)||Fi(`Document ${l} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(r,e,t){let i;return i=r?r.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Bk extends uA{constructor(e,t,i,s,l,c){super(e,t,i,s,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(cA("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Bf extends Bk{data(e={}){return super.data(e)}}class Hk{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Af(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Bf(this._firestore,this._userDataWriter,i.key,i,new Af(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Te(ue.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,l){if(s._snapshot.oldDocs.isEmpty()){let c=0;return s._snapshot.docChanges.map(d=>{const p=new Bf(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Af(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new Bf(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Af(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,v=-1;return d.type!==0&&(m=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:Fk(d.type),doc:p,oldIndex:m,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Fk(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ie(61501,{type:r})}}class Gk extends jk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Nr(this.firestore,null,t)}}function nl(r){r=Vu(r,Mh);const e=Vu(r.firestore,Lh),t=tA(e),i=new Gk(e);return Uk(r._query),wk(t,r._query).then(s=>new Hk(e,i,r,s))}function rl(r){return fA(Vu(r.firestore,Lh),[new gg(r._key,oi.none())])}function il(r,e){const t=Vu(r.firestore,Lh),i=Ps(r),s=zk(r.converter,e);return fA(t,[Nk(kk(r.firestore),"addDoc",i._key,s,r.converter!==null,{}).toMutation(i._key,oi.exists(!1))]).then(()=>i)}function fA(r,e){return function(i,s){const l=new Na;return i.asyncQueue.enqueueAndForget(async()=>fk(await Sk(i),s,l)),l.promise}(tA(r),e)}(function(e,t=!0){(function(s){Zo=s})(Qo),Vo(new ws("firestore",(i,{instanceIdentifier:s,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new Lh(new DO(i.getProvider("auth-internal")),new NO(c,i.getProvider("app-check-internal")),function(m,v){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new Te(ue.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nu(m.options.projectId,v)}(c,s),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Da(HE,FE,e),Da(HE,FE,"esm2017")})();var Yk="firebase",Kk="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Da(Yk,Kk,"app");const $k={apiKey:"AIzaSyCUVm7leozDlDscDoxYlHR2CHoZ_cQTq1U",authDomain:"my-port-7.firebaseapp.com",projectId:"my-port-7",storageBucket:"my-port-7.firebasestorage.app",messagingSenderId:"512161823675",appId:"1:512161823675:web:59a6679900ad6bc1d7a29e",measurementId:"G-H88JDEG9C8"},Qk=Wb($k),an=Ik(Qk);function Xk(){const[r,e]=M.useState(null),[t,i]=M.useState(!0),s=Th();return M.useEffect(()=>AT(s,c=>{e(c),i(!1)}),[s]),{currentUser:r,loading:t}}const Wk="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAIK8vMtGcFg41fpEHnQ1ndzth2JpjTM4z9iYpvFfbZ4F-NAb6SkNludIrfR3B1a65I8&usqp=CAU";function Zk(){const[r,e]=M.useState(""),[t,i]=M.useState(""),[s,l]=M.useState(""),[c,d]=M.useState(""),[p,m]=M.useState(""),[v,b]=M.useState(""),T=async w=>{if(w.preventDefault(),v&&new Date(v)<new Date(p)){alert("End date cannot be before the start date.");return}try{await il(gr(an,"education"),{degree:r,fieldOfStudy:t,institution:s,logoURL:c||Wk,startDate:pt.fromDate(new Date(p)),...v&&{endDate:pt.fromDate(new Date(v))}}),e(""),i(""),l(""),d(""),m(""),b(""),alert("Education added successfully!")}catch(O){console.error("Error adding document: ",O),alert("Error adding education")}};return U.jsxs("div",{style:{marginBottom:"2rem"},children:[U.jsx("h2",{children:"🎓 Add Education"}),U.jsxs("form",{onSubmit:T,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[U.jsx("input",{type:"text",value:r,onChange:w=>e(w.target.value),placeholder:"Degree",required:!0}),U.jsx("input",{type:"text",value:t,onChange:w=>i(w.target.value),placeholder:"Field of Study",required:!0}),U.jsx("input",{type:"text",value:s,onChange:w=>l(w.target.value),placeholder:"Institution",required:!0}),U.jsx("input",{type:"text",value:c,onChange:w=>d(w.target.value),placeholder:"Logo URL"}),U.jsx("input",{type:"date",value:p,onChange:w=>m(w.target.value),required:!0}),U.jsx("input",{type:"date",value:v,onChange:w=>b(w.target.value),placeholder:"End Date (optional)"}),U.jsx("button",{type:"submit",children:"Add Education"})]})]})}function Jk(){const[r,e]=M.useState([]),t=async()=>{const l=(await nl(gr(an,"education"))).docs.map(c=>({id:c.id,...c.data()}));e(l)},i=async s=>{window.confirm("Are you sure you want to delete this education entry?")&&(await rl(Ps(an,"education",s)),t())};return M.useEffect(()=>{t()},[]),U.jsxs("div",{style:{marginTop:"2rem"},children:[U.jsx("h2",{children:"🎓 Your Education"}),r.length===0?U.jsx("p",{children:"No education entries found."}):U.jsx("ul",{style:{listStyle:"none",padding:0},children:r.map(s=>{var l;return U.jsxs("li",{style:{border:"1px solid #ccc",padding:"1rem",marginBottom:"1rem"},children:[U.jsxs("h3",{children:[s.degree," in ",s.fieldOfStudy]}),U.jsx("p",{children:s.institution}),U.jsx("img",{src:s.logoURL,alt:s.institution,style:{height:"40px",marginBottom:"0.5rem"}}),U.jsxs("p",{children:[(l=s.startDate)==null?void 0:l.toDate().toLocaleDateString()," -"," ",s.endDate?s.endDate.toDate().toLocaleDateString():"Present"]}),U.jsx("button",{style:{marginTop:"0.5rem",backgroundColor:"crimson",color:"white"},onClick:()=>i(s.id),children:"Delete"})]},s.id)})})]})}function eN(){return U.jsxs("div",{children:[U.jsx("h2",{children:"Education"}),U.jsx(Zk,{}),U.jsx(Jk,{})]})}const tN="modulepreload",nN=function(r){return"/my-port-admin/"+r},U0={},rN=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let c=function(m){return Promise.all(m.map(v=>Promise.resolve(v).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));s=c(t.map(m=>{if(m=nN(m),m in U0)return;U0[m]=!0;const v=m.endsWith(".css"),b=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${b}`))return;const T=document.createElement("link");if(T.rel=v?"stylesheet":tN,v||(T.as="script"),T.crossOrigin="",T.href=m,p&&T.setAttribute("nonce",p),document.head.appendChild(T),v)return new Promise((w,O)=>{T.addEventListener("load",w),T.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${m}`)))})}))}function l(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return s.then(c=>{for(const d of c||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})};var iN={};function aN(r){if(Array.isArray(r))return r}function sN(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var i,s,l,c,d=[],p=!0,m=!1;try{if(l=(t=t.call(r)).next,e!==0)for(;!(p=(i=l.call(t)).done)&&(d.push(i.value),d.length!==e);p=!0);}catch(v){m=!0,s=v}finally{try{if(!p&&t.return!=null&&(c=t.return(),Object(c)!==c))return}finally{if(m)throw s}}return d}}function Vm(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,i=Array(e);t<e;t++)i[t]=r[t];return i}function hA(r,e){if(r){if(typeof r=="string")return Vm(r,e);var t={}.toString.call(r).slice(8,-1);return t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set"?Array.from(r):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Vm(r,e):void 0}}function oN(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hf(r,e){return aN(r)||sN(r,e)||hA(r,e)||oN()}function dt(r){"@babel/helpers - typeof";return dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dt(r)}function dh(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];if(e){for(var i=[],s=0;s<e.length;s++){var l=e[s];if(l){var c=dt(l);if(c==="string"||c==="number")i.push(l);else if(c==="object"){var d=Array.isArray(l)?l:Object.entries(l).map(function(p){var m=Hf(p,2),v=m[0],b=m[1];return b?v:null});i=d.length?i.concat(d.filter(function(p){return!!p})):i}}}return i.join(" ").trim()}}function lN(r){if(Array.isArray(r))return Vm(r)}function uN(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function cN(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Um(r){return lN(r)||uN(r)||hA(r)||cN()}function dA(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function fN(r,e){if(dt(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(dt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function pA(r){var e=fN(r,"string");return dt(e)=="symbol"?e:e+""}function hN(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,pA(i.key),i)}}function mA(r,e,t){return t&&hN(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function Vg(r,e,t){return(e=pA(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function rm(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=dN(r))||e){t&&(r=t);var i=0,s=function(){};return{s,n:function(){return i>=r.length?{done:!0}:{done:!1,value:r[i++]}},e:function(m){throw m},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l,c=!0,d=!1;return{s:function(){t=t.call(r)},n:function(){var m=t.next();return c=m.done,m},e:function(m){d=!0,l=m},f:function(){try{c||t.return==null||t.return()}finally{if(d)throw l}}}}function dN(r,e){if(r){if(typeof r=="string")return j0(r,e);var t={}.toString.call(r).slice(8,-1);return t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set"?Array.from(r):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?j0(r,e):void 0}}function j0(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,i=Array(e);t<e;t++)i[t]=r[t];return i}var Ss=function(){function r(){dA(this,r)}return mA(r,null,[{key:"innerWidth",value:function(t){if(t){var i=t.offsetWidth,s=getComputedStyle(t);return i=i+(parseFloat(s.paddingLeft)+parseFloat(s.paddingRight)),i}return 0}},{key:"width",value:function(t){if(t){var i=t.offsetWidth,s=getComputedStyle(t);return i=i-(parseFloat(s.paddingLeft)+parseFloat(s.paddingRight)),i}return 0}},{key:"getBrowserLanguage",value:function(){return navigator.userLanguage||navigator.languages&&navigator.languages.length&&navigator.languages[0]||navigator.language||navigator.browserLanguage||navigator.systemLanguage||"en"}},{key:"getWindowScrollTop",value:function(){var t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}},{key:"getWindowScrollLeft",value:function(){var t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}},{key:"getOuterWidth",value:function(t,i){if(t){var s=t.getBoundingClientRect().width||t.offsetWidth;if(i){var l=getComputedStyle(t);s=s+(parseFloat(l.marginLeft)+parseFloat(l.marginRight))}return s}return 0}},{key:"getOuterHeight",value:function(t,i){if(t){var s=t.getBoundingClientRect().height||t.offsetHeight;if(i){var l=getComputedStyle(t);s=s+(parseFloat(l.marginTop)+parseFloat(l.marginBottom))}return s}return 0}},{key:"getClientHeight",value:function(t,i){if(t){var s=t.clientHeight;if(i){var l=getComputedStyle(t);s=s+(parseFloat(l.marginTop)+parseFloat(l.marginBottom))}return s}return 0}},{key:"getClientWidth",value:function(t,i){if(t){var s=t.clientWidth;if(i){var l=getComputedStyle(t);s=s+(parseFloat(l.marginLeft)+parseFloat(l.marginRight))}return s}return 0}},{key:"getViewport",value:function(){var t=window,i=document,s=i.documentElement,l=i.getElementsByTagName("body")[0],c=t.innerWidth||s.clientWidth||l.clientWidth,d=t.innerHeight||s.clientHeight||l.clientHeight;return{width:c,height:d}}},{key:"getOffset",value:function(t){if(t){var i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}},{key:"index",value:function(t){if(t)for(var i=t.parentNode.childNodes,s=0,l=0;l<i.length;l++){if(i[l]===t)return s;i[l].nodeType===1&&s++}return-1}},{key:"addMultipleClasses",value:function(t,i){if(t&&i)if(t.classList)for(var s=i.split(" "),l=0;l<s.length;l++)t.classList.add(s[l]);else for(var c=i.split(" "),d=0;d<c.length;d++)t.className=t.className+(" "+c[d])}},{key:"removeMultipleClasses",value:function(t,i){if(t&&i)if(t.classList)for(var s=i.split(" "),l=0;l<s.length;l++)t.classList.remove(s[l]);else for(var c=i.split(" "),d=0;d<c.length;d++)t.className=t.className.replace(new RegExp("(^|\\b)"+c[d].split(" ").join("|")+"(\\b|$)","gi")," ")}},{key:"addClass",value:function(t,i){t&&i&&(t.classList?t.classList.add(i):t.className=t.className+(" "+i))}},{key:"removeClass",value:function(t,i){t&&i&&(t.classList?t.classList.remove(i):t.className=t.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," "))}},{key:"hasClass",value:function(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}},{key:"addStyles",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};t&&Object.entries(i).forEach(function(s){var l=Hf(s,2),c=l[0],d=l[1];return t.style[c]=d})}},{key:"find",value:function(t,i){return t?Array.from(t.querySelectorAll(i)):[]}},{key:"findSingle",value:function(t,i){return t?t.querySelector(i):null}},{key:"setAttributes",value:function(t){var i=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t){var l=function(d,p){var m,v,b=t!=null&&(m=t.$attrs)!==null&&m!==void 0&&m[d]?[t==null||(v=t.$attrs)===null||v===void 0?void 0:v[d]]:[];return[p].flat().reduce(function(T,w){if(w!=null){var O=dt(w);if(O==="string"||O==="number")T.push(w);else if(O==="object"){var V=Array.isArray(w)?l(d,w):Object.entries(w).map(function(P){var B=Hf(P,2),K=B[0],Q=B[1];return d==="style"&&(Q||Q===0)?"".concat(K.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),":").concat(Q):Q?K:void 0});T=V.length?T.concat(V.filter(function(P){return!!P})):T}}return T},b)};Object.entries(s).forEach(function(c){var d=Hf(c,2),p=d[0],m=d[1];if(m!=null){var v=p.match(/^on(.+)/);v?t.addEventListener(v[1].toLowerCase(),m):p==="p-bind"?i.setAttributes(t,m):(m=p==="class"?Um(new Set(l("class",m))).join(" ").trim():p==="style"?l("style",m).join(";").trim():m,(t.$attrs=t.$attrs||{})&&(t.$attrs[p]=m),t.setAttribute(p,m))}})}}},{key:"getAttribute",value:function(t,i){if(t){var s=t.getAttribute(i);return isNaN(s)?s==="true"||s==="false"?s==="true":s:+s}}},{key:"isAttributeEquals",value:function(t,i,s){return t?this.getAttribute(t,i)===s:!1}},{key:"isAttributeNotEquals",value:function(t,i,s){return!this.isAttributeEquals(t,i,s)}},{key:"getHeight",value:function(t){if(t){var i=t.offsetHeight,s=getComputedStyle(t);return i=i-(parseFloat(s.paddingTop)+parseFloat(s.paddingBottom)+parseFloat(s.borderTopWidth)+parseFloat(s.borderBottomWidth)),i}return 0}},{key:"getWidth",value:function(t){if(t){var i=t.offsetWidth,s=getComputedStyle(t);return i=i-(parseFloat(s.paddingLeft)+parseFloat(s.paddingRight)+parseFloat(s.borderLeftWidth)+parseFloat(s.borderRightWidth)),i}return 0}},{key:"alignOverlay",value:function(t,i,s){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;t&&i&&(s==="self"?this.relativePosition(t,i):(l&&(t.style.minWidth=r.getOuterWidth(i)+"px"),this.absolutePosition(t,i)))}},{key:"absolutePosition",value:function(t,i){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"left";if(t&&i){var l=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),c=l.height,d=l.width,p=i.offsetHeight,m=i.offsetWidth,v=i.getBoundingClientRect(),b=this.getWindowScrollTop(),T=this.getWindowScrollLeft(),w=this.getViewport(),O,V;v.top+p+c>w.height?(O=v.top+b-c,O<0&&(O=b),t.style.transformOrigin="bottom"):(O=p+v.top+b,t.style.transformOrigin="top");var P=v.left;s==="left"?P+d>w.width?V=Math.max(0,P+T+m-d):V=P+T:P+m-d<0?V=T:V=P+m-d+T,t.style.top=O+"px",t.style.left=V+"px"}}},{key:"relativePosition",value:function(t,i){if(t&&i){var s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),l=i.offsetHeight,c=i.getBoundingClientRect(),d=this.getViewport(),p,m;c.top+l+s.height>d.height?(p=-1*s.height,c.top+p<0&&(p=-1*c.top),t.style.transformOrigin="bottom"):(p=l,t.style.transformOrigin="top"),s.width>d.width?m=c.left*-1:c.left+s.width>d.width?m=(c.left+s.width-d.width)*-1:m=0,t.style.top=p+"px",t.style.left=m+"px"}}},{key:"flipfitCollision",value:function(t,i){var s=this,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"left top",c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"left bottom",d=arguments.length>4?arguments[4]:void 0;if(t&&i){var p=i.getBoundingClientRect(),m=this.getViewport(),v=l.split(" "),b=c.split(" "),T=function(B,K){return K?+B.substring(B.search(/(\+|-)/g))||0:B.substring(0,B.search(/(\+|-)/g))||B},w={my:{x:T(v[0]),y:T(v[1]||v[0]),offsetX:T(v[0],!0),offsetY:T(v[1]||v[0],!0)},at:{x:T(b[0]),y:T(b[1]||b[0]),offsetX:T(b[0],!0),offsetY:T(b[1]||b[0],!0)}},O={left:function(){var B=w.my.offsetX+w.at.offsetX;return B+p.left+(w.my.x==="left"?0:-1*(w.my.x==="center"?s.getOuterWidth(t)/2:s.getOuterWidth(t)))},top:function(){var B=w.my.offsetY+w.at.offsetY;return B+p.top+(w.my.y==="top"?0:-1*(w.my.y==="center"?s.getOuterHeight(t)/2:s.getOuterHeight(t)))}},V={count:{x:0,y:0},left:function(){var B=O.left(),K=r.getWindowScrollLeft();t.style.left=B+K+"px",this.count.x===2?(t.style.left=K+"px",this.count.x=0):B<0&&(this.count.x++,w.my.x="left",w.at.x="right",w.my.offsetX*=-1,w.at.offsetX*=-1,this.right())},right:function(){var B=O.left()+r.getOuterWidth(i),K=r.getWindowScrollLeft();t.style.left=B+K+"px",this.count.x===2?(t.style.left=m.width-r.getOuterWidth(t)+K+"px",this.count.x=0):B+r.getOuterWidth(t)>m.width&&(this.count.x++,w.my.x="right",w.at.x="left",w.my.offsetX*=-1,w.at.offsetX*=-1,this.left())},top:function(){var B=O.top(),K=r.getWindowScrollTop();t.style.top=B+K+"px",this.count.y===2?(t.style.left=K+"px",this.count.y=0):B<0&&(this.count.y++,w.my.y="top",w.at.y="bottom",w.my.offsetY*=-1,w.at.offsetY*=-1,this.bottom())},bottom:function(){var B=O.top()+r.getOuterHeight(i),K=r.getWindowScrollTop();t.style.top=B+K+"px",this.count.y===2?(t.style.left=m.height-r.getOuterHeight(t)+K+"px",this.count.y=0):B+r.getOuterHeight(i)>m.height&&(this.count.y++,w.my.y="bottom",w.at.y="top",w.my.offsetY*=-1,w.at.offsetY*=-1,this.top())},center:function(B){if(B==="y"){var K=O.top()+r.getOuterHeight(i)/2;t.style.top=K+r.getWindowScrollTop()+"px",K<0?this.bottom():K+r.getOuterHeight(i)>m.height&&this.top()}else{var Q=O.left()+r.getOuterWidth(i)/2;t.style.left=Q+r.getWindowScrollLeft()+"px",Q<0?this.left():Q+r.getOuterWidth(t)>m.width&&this.right()}}};V[w.at.x]("x"),V[w.at.y]("y"),this.isFunction(d)&&d(w)}}},{key:"findCollisionPosition",value:function(t){if(t){var i=t==="top"||t==="bottom",s=t==="left"?"right":"left",l=t==="top"?"bottom":"top";return i?{axis:"y",my:"center ".concat(l),at:"center ".concat(t)}:{axis:"x",my:"".concat(s," center"),at:"".concat(t," center")}}}},{key:"getParents",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return t.parentNode===null?i:this.getParents(t.parentNode,i.concat([t.parentNode]))}},{key:"getScrollableParents",value:function(t){var i=this,s=[];if(t){var l=this.getParents(t),c=/(auto|scroll)/,d=function(ie){var D=ie?getComputedStyle(ie):null;return D&&(c.test(D.getPropertyValue("overflow"))||c.test(D.getPropertyValue("overflow-x"))||c.test(D.getPropertyValue("overflow-y")))},p=function(ie){s.push(ie.nodeName==="BODY"||ie.nodeName==="HTML"||i.isDocument(ie)?window:ie)},m=rm(l),v;try{for(m.s();!(v=m.n()).done;){var b,T=v.value,w=T.nodeType===1&&((b=T.dataset)===null||b===void 0?void 0:b.scrollselectors);if(w){var O=w.split(","),V=rm(O),P;try{for(V.s();!(P=V.n()).done;){var B=P.value,K=this.findSingle(T,B);K&&d(K)&&p(K)}}catch(Q){V.e(Q)}finally{V.f()}}T.nodeType===1&&d(T)&&p(T)}}catch(Q){m.e(Q)}finally{m.f()}}return s}},{key:"getHiddenElementOuterHeight",value:function(t){if(t){t.style.visibility="hidden",t.style.display="block";var i=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",i}return 0}},{key:"getHiddenElementOuterWidth",value:function(t){if(t){t.style.visibility="hidden",t.style.display="block";var i=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",i}return 0}},{key:"getHiddenElementDimensions",value:function(t){var i={};return t&&(t.style.visibility="hidden",t.style.display="block",i.width=t.offsetWidth,i.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible"),i}},{key:"fadeIn",value:function(t,i){if(t){t.style.opacity=0;var s=+new Date,l=0,c=function(){l=+t.style.opacity+(new Date().getTime()-s)/i,t.style.opacity=l,s=+new Date,+l<1&&(window.requestAnimationFrame&&requestAnimationFrame(c)||setTimeout(c,16))};c()}}},{key:"fadeOut",value:function(t,i){if(t)var s=1,l=50,c=l/i,d=setInterval(function(){s=s-c,s<=0&&(s=0,clearInterval(d)),t.style.opacity=s},l)}},{key:"getUserAgent",value:function(){return navigator.userAgent}},{key:"isIOS",value:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}},{key:"isAndroid",value:function(){return/(android)/i.test(navigator.userAgent)}},{key:"isChrome",value:function(){return/(chrome)/i.test(navigator.userAgent)}},{key:"isClient",value:function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}},{key:"isTouchDevice",value:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}},{key:"isFunction",value:function(t){return!!(t&&t.constructor&&t.call&&t.apply)}},{key:"appendChild",value:function(t,i){if(this.isElement(i))i.appendChild(t);else if(i.el&&i.el.nativeElement)i.el.nativeElement.appendChild(t);else throw new Error("Cannot append "+i+" to "+t)}},{key:"removeChild",value:function(t,i){if(this.isElement(i))i.removeChild(t);else if(i.el&&i.el.nativeElement)i.el.nativeElement.removeChild(t);else throw new Error("Cannot remove "+t+" from "+i)}},{key:"isElement",value:function(t){return(typeof HTMLElement>"u"?"undefined":dt(HTMLElement))==="object"?t instanceof HTMLElement:t&&dt(t)==="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}},{key:"isDocument",value:function(t){return(typeof Document>"u"?"undefined":dt(Document))==="object"?t instanceof Document:t&&dt(t)==="object"&&t!==null&&t.nodeType===9}},{key:"scrollInView",value:function(t,i){var s=getComputedStyle(t).getPropertyValue("border-top-width"),l=s?parseFloat(s):0,c=getComputedStyle(t).getPropertyValue("padding-top"),d=c?parseFloat(c):0,p=t.getBoundingClientRect(),m=i.getBoundingClientRect(),v=m.top+document.body.scrollTop-(p.top+document.body.scrollTop)-l-d,b=t.scrollTop,T=t.clientHeight,w=this.getOuterHeight(i);v<0?t.scrollTop=b+v:v+w>T&&(t.scrollTop=b+v-T+w)}},{key:"clearSelection",value:function(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}},{key:"calculateScrollbarWidth",value:function(t){if(t){var i=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;var s=document.createElement("div");s.className="p-scrollbar-measure",document.body.appendChild(s);var l=s.offsetWidth-s.clientWidth;return document.body.removeChild(s),this.calculatedScrollbarWidth=l,l}},{key:"calculateBodyScrollbarWidth",value:function(){return window.innerWidth-document.documentElement.offsetWidth}},{key:"getBrowser",value:function(){if(!this.browser){var t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}},{key:"resolveUserAgent",value:function(){var t=navigator.userAgent.toLowerCase(),i=/(chrome)[ ]([\w.]+)/.exec(t)||/(webkit)[ ]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:i[1]||"",version:i[2]||"0"}}},{key:"blockBodyScroll",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden",i=!!document.body.style.getPropertyValue("--scrollbar-width");!i&&document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}},{key:"unblockBodyScroll",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden";document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}},{key:"isVisible",value:function(t){return t&&(t.clientHeight!==0||t.getClientRects().length!==0||getComputedStyle(t).display!=="none")}},{key:"isExist",value:function(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode)}},{key:"getFocusableElements",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",s=r.find(t,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(i,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(i,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(i,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(i,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(i,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(i,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(i)),l=[],c=rm(s),d;try{for(c.s();!(d=c.n()).done;){var p=d.value;getComputedStyle(p).display!=="none"&&getComputedStyle(p).visibility!=="hidden"&&l.push(p)}}catch(m){c.e(m)}finally{c.f()}return l}},{key:"getFirstFocusableElement",value:function(t,i){var s=r.getFocusableElements(t,i);return s.length>0?s[0]:null}},{key:"getLastFocusableElement",value:function(t,i){var s=r.getFocusableElements(t,i);return s.length>0?s[s.length-1]:null}},{key:"focus",value:function(t,i){var s=i===void 0?!0:!i;t&&document.activeElement!==t&&t.focus({preventScroll:s})}},{key:"focusFirstElement",value:function(t,i){if(t){var s=r.getFirstFocusableElement(t);return s&&r.focus(s,i),s}}},{key:"getCursorOffset",value:function(t,i,s,l){if(t){var c=getComputedStyle(t),d=document.createElement("div");d.style.position="absolute",d.style.top="0px",d.style.left="0px",d.style.visibility="hidden",d.style.pointerEvents="none",d.style.overflow=c.overflow,d.style.width=c.width,d.style.height=c.height,d.style.padding=c.padding,d.style.border=c.border,d.style.overflowWrap=c.overflowWrap,d.style.whiteSpace=c.whiteSpace,d.style.lineHeight=c.lineHeight,d.innerHTML=i.replace(/\r\n|\r|\n/g,"<br />");var p=document.createElement("span");p.textContent=l,d.appendChild(p);var m=document.createTextNode(s);d.appendChild(m),document.body.appendChild(d);var v=p.offsetLeft,b=p.offsetTop,T=p.clientHeight;return document.body.removeChild(d),{left:Math.abs(v-t.scrollLeft),top:Math.abs(b-t.scrollTop)+T}}return{top:"auto",left:"auto"}}},{key:"invokeElementMethod",value:function(t,i,s){t[i].apply(t,s)}},{key:"isClickable",value:function(t){var i=t.nodeName,s=t.parentElement&&t.parentElement.nodeName;return i==="INPUT"||i==="TEXTAREA"||i==="BUTTON"||i==="A"||s==="INPUT"||s==="TEXTAREA"||s==="BUTTON"||s==="A"||this.hasClass(t,"p-button")||this.hasClass(t.parentElement,"p-button")||this.hasClass(t.parentElement,"p-checkbox")||this.hasClass(t.parentElement,"p-radiobutton")}},{key:"applyStyle",value:function(t,i){if(typeof i=="string")t.style.cssText=i;else for(var s in i)t.style[s]=i[s]}},{key:"exportCSV",value:function(t,i){var s=new Blob([t],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(s,i+".csv");else{var l=r.saveAs({name:i+".csv",src:URL.createObjectURL(s)});l||(t="data:text/csv;charset=utf-8,"+t,window.open(encodeURI(t)))}}},{key:"saveAs",value:function(t){if(t){var i=document.createElement("a");if(i.download!==void 0){var s=t.name,l=t.src;return i.setAttribute("href",l),i.setAttribute("download",s),i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),!0}}return!1}},{key:"createInlineStyle",value:function(t,i){var s=document.createElement("style");return r.addNonce(s,t),i||(i=document.head),i.appendChild(s),s}},{key:"removeInlineStyle",value:function(t){if(this.isExist(t)){try{t.parentNode.removeChild(t)}catch{}t=null}return t}},{key:"addNonce",value:function(t,i){try{i||(i=iN.REACT_APP_CSS_NONCE)}catch{}i&&t.setAttribute("nonce",i)}},{key:"getTargetElement",value:function(t){if(!t)return null;if(t==="document")return document;if(t==="window")return window;if(dt(t)==="object"&&t.hasOwnProperty("current"))return this.isExist(t.current)?t.current:null;var i=function(c){return!!(c&&c.constructor&&c.call&&c.apply)},s=i(t)?t():t;return this.isDocument(s)||this.isExist(s)?s:null}},{key:"getAttributeNames",value:function(t){var i,s,l;for(s=[],l=t.attributes,i=0;i<l.length;++i)s.push(l[i].nodeName);return s.sort(),s}},{key:"isEqualElement",value:function(t,i){var s,l,c,d,p;if(s=r.getAttributeNames(t),l=r.getAttributeNames(i),s.join(",")!==l.join(","))return!1;for(var m=0;m<s.length;++m)if(c=s[m],c==="style")for(var v=t.style,b=i.style,T=/^\d+$/,w=0,O=Object.keys(v);w<O.length;w++){var V=O[w];if(!T.test(V)&&v[V]!==b[V])return!1}else if(t.getAttribute(c)!==i.getAttribute(c))return!1;for(d=t.firstChild,p=i.firstChild;d&&p;d=d.nextSibling,p=p.nextSibling){if(d.nodeType!==p.nodeType)return!1;if(d.nodeType===1){if(!r.isEqualElement(d,p))return!1}else if(d.nodeValue!==p.nodeValue)return!1}return!(d||p)}},{key:"hasCSSAnimation",value:function(t){if(t){var i=getComputedStyle(t),s=parseFloat(i.getPropertyValue("animation-duration")||"0");return s>0}return!1}},{key:"hasCSSTransition",value:function(t){if(t){var i=getComputedStyle(t),s=parseFloat(i.getPropertyValue("transition-duration")||"0");return s>0}return!1}}])}();Vg(Ss,"DATA_PROPS",["data-"]);Vg(Ss,"ARIA_PROPS",["aria","focus-target"]);function z0(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=pN(r))||e){t&&(r=t);var i=0,s=function(){};return{s,n:function(){return i>=r.length?{done:!0}:{done:!1,value:r[i++]}},e:function(m){throw m},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l,c=!0,d=!1;return{s:function(){t=t.call(r)},n:function(){var m=t.next();return c=m.done,m},e:function(m){d=!0,l=m},f:function(){try{c||t.return==null||t.return()}finally{if(d)throw l}}}}function pN(r,e){if(r){if(typeof r=="string")return B0(r,e);var t={}.toString.call(r).slice(8,-1);return t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set"?Array.from(r):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?B0(r,e):void 0}}function B0(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,i=Array(e);t<e;t++)i[t]=r[t];return i}var qt=function(){function r(){dA(this,r)}return mA(r,null,[{key:"equals",value:function(t,i,s){return s&&t&&dt(t)==="object"&&i&&dt(i)==="object"?this.deepEquals(this.resolveFieldData(t,s),this.resolveFieldData(i,s)):this.deepEquals(t,i)}},{key:"deepEquals",value:function(t,i){if(t===i)return!0;if(t&&i&&dt(t)==="object"&&dt(i)==="object"){var s=Array.isArray(t),l=Array.isArray(i),c,d,p;if(s&&l){if(d=t.length,d!==i.length)return!1;for(c=d;c--!==0;)if(!this.deepEquals(t[c],i[c]))return!1;return!0}if(s!==l)return!1;var m=t instanceof Date,v=i instanceof Date;if(m!==v)return!1;if(m&&v)return t.getTime()===i.getTime();var b=t instanceof RegExp,T=i instanceof RegExp;if(b!==T)return!1;if(b&&T)return t.toString()===i.toString();var w=Object.keys(t);if(d=w.length,d!==Object.keys(i).length)return!1;for(c=d;c--!==0;)if(!Object.prototype.hasOwnProperty.call(i,w[c]))return!1;for(c=d;c--!==0;)if(p=w[c],!this.deepEquals(t[p],i[p]))return!1;return!0}return t!==t&&i!==i}},{key:"resolveFieldData",value:function(t,i){if(!t||!i)return null;try{var s=t[i];if(this.isNotEmpty(s))return s}catch{}if(Object.keys(t).length){if(this.isFunction(i))return i(t);if(this.isNotEmpty(t[i]))return t[i];if(i.indexOf(".")===-1)return t[i];for(var l=i.split("."),c=t,d=0,p=l.length;d<p;++d){if(c==null)return null;c=c[l[d]]}return c}return null}},{key:"findDiffKeys",value:function(t,i){return!t||!i?{}:Object.keys(t).filter(function(s){return!i.hasOwnProperty(s)}).reduce(function(s,l){return s[l]=t[l],s},{})}},{key:"reduceKeys",value:function(t,i){var s={};return!t||!i||i.length===0||Object.keys(t).filter(function(l){return i.some(function(c){return l.startsWith(c)})}).forEach(function(l){s[l]=t[l],delete t[l]}),s}},{key:"reorderArray",value:function(t,i,s){t&&i!==s&&(s>=t.length&&(s=s%t.length,i=i%t.length),t.splice(s,0,t.splice(i,1)[0]))}},{key:"findIndexInList",value:function(t,i,s){var l=this;return i?s?i.findIndex(function(c){return l.equals(c,t,s)}):i.findIndex(function(c){return c===t}):-1}},{key:"getJSXElement",value:function(t){for(var i=arguments.length,s=new Array(i>1?i-1:0),l=1;l<i;l++)s[l-1]=arguments[l];return this.isFunction(t)?t.apply(void 0,s):t}},{key:"getItemValue",value:function(t){for(var i=arguments.length,s=new Array(i>1?i-1:0),l=1;l<i;l++)s[l-1]=arguments[l];return this.isFunction(t)?t.apply(void 0,s):t}},{key:"getProp",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=t?t[i]:void 0;return l===void 0?s[i]:l}},{key:"getPropCaseInsensitive",value:function(t,i){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=this.toFlatCase(i);for(var c in t)if(t.hasOwnProperty(c)&&this.toFlatCase(c)===l)return t[c];for(var d in s)if(s.hasOwnProperty(d)&&this.toFlatCase(d)===l)return s[d]}},{key:"getMergedProps",value:function(t,i){return Object.assign({},i,t)}},{key:"getDiffProps",value:function(t,i){return this.findDiffKeys(t,i)}},{key:"getPropValue",value:function(t){if(!this.isFunction(t))return t;for(var i=arguments.length,s=new Array(i>1?i-1:0),l=1;l<i;l++)s[l-1]=arguments[l];if(s.length===1){var c=s[0];return t(Array.isArray(c)?c[0]:c)}return t.apply(void 0,s)}},{key:"getComponentProp",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.isNotEmpty(t)?this.getProp(t.props,i,s):void 0}},{key:"getComponentProps",value:function(t,i){return this.isNotEmpty(t)?this.getMergedProps(t.props,i):void 0}},{key:"getComponentDiffProps",value:function(t,i){return this.isNotEmpty(t)?this.getDiffProps(t.props,i):void 0}},{key:"isValidChild",value:function(t,i,s){if(t){var l,c=this.getComponentProp(t,"__TYPE")||(t.type?t.type.displayName:void 0);!c&&t!==null&&t!==void 0&&(l=t.type)!==null&&l!==void 0&&(l=l._payload)!==null&&l!==void 0&&l.value&&(c=t.type._payload.value.find(function(m){return m===i}));var d=c===i;try{var p}catch{}return d}return!1}},{key:"getRefElement",value:function(t){return t?dt(t)==="object"&&t.hasOwnProperty("current")?t.current:t:null}},{key:"combinedRefs",value:function(t,i){t&&i&&(typeof i=="function"?i(t.current):i.current=t.current)}},{key:"removeAccents",value:function(t){return t&&t.search(/[\xC0-\xFF]/g)>-1&&(t=t.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),t}},{key:"toFlatCase",value:function(t){return this.isNotEmpty(t)&&this.isString(t)?t.replace(/(-|_)/g,"").toLowerCase():t}},{key:"toCapitalCase",value:function(t){return this.isNotEmpty(t)&&this.isString(t)?t[0].toUpperCase()+t.slice(1):t}},{key:"trim",value:function(t){return this.isNotEmpty(t)&&this.isString(t)?t.trim():t}},{key:"isEmpty",value:function(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&dt(t)==="object"&&Object.keys(t).length===0}},{key:"isNotEmpty",value:function(t){return!this.isEmpty(t)}},{key:"isFunction",value:function(t){return!!(t&&t.constructor&&t.call&&t.apply)}},{key:"isObject",value:function(t){return t!==null&&t instanceof Object&&t.constructor===Object}},{key:"isDate",value:function(t){return t!==null&&t instanceof Date&&t.constructor===Date}},{key:"isArray",value:function(t){return t!==null&&Array.isArray(t)}},{key:"isString",value:function(t){return t!==null&&typeof t=="string"}},{key:"isPrintableCharacter",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return this.isNotEmpty(t)&&t.length===1&&t.match(/\S| /)}},{key:"isLetter",value:function(t){return/^[a-zA-Z\u00C0-\u017F]$/.test(t)}},{key:"isScalar",value:function(t){return t!=null&&(typeof t=="string"||typeof t=="number"||typeof t=="bigint"||typeof t=="boolean")}},{key:"findLast",value:function(t,i){var s;if(this.isNotEmpty(t))try{s=t.findLast(i)}catch{s=Um(t).reverse().find(i)}return s}},{key:"findLastIndex",value:function(t,i){var s=-1;if(this.isNotEmpty(t))try{s=t.findLastIndex(i)}catch{s=t.lastIndexOf(Um(t).reverse().find(i))}return s}},{key:"sort",value:function(t,i){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,l=arguments.length>3?arguments[3]:void 0,c=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,d=this.compare(t,i,l,s),p=s;return(this.isEmpty(t)||this.isEmpty(i))&&(p=c===1?s:c),p*d}},{key:"compare",value:function(t,i,s){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,c=-1,d=this.isEmpty(t),p=this.isEmpty(i);return d&&p?c=0:d?c=l:p?c=-l:typeof t=="string"&&typeof i=="string"?c=s(t,i):c=t<i?-1:t>i?1:0,c}},{key:"localeComparator",value:function(t){return new Intl.Collator(t,{numeric:!0}).compare}},{key:"findChildrenByKey",value:function(t,i){var s=z0(t),l;try{for(s.s();!(l=s.n()).done;){var c=l.value;if(c.key===i)return c.children||[];if(c.children){var d=this.findChildrenByKey(c.children,i);if(d.length>0)return d}}}catch(p){s.e(p)}finally{s.f()}return[]}},{key:"mutateFieldData",value:function(t,i,s){if(!(dt(t)!=="object"||typeof i!="string"))for(var l=i.split("."),c=t,d=0,p=l.length;d<p;++d){if(d+1-p===0){c[l[d]]=s;break}c[l[d]]||(c[l[d]]={}),c=c[l[d]]}}},{key:"getNestedValue",value:function(t,i){return i.split(".").reduce(function(s,l){return s&&s[l]!==void 0?s[l]:void 0},t)}},{key:"absoluteCompare",value:function(t,i){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;if(!t||!i||l>s)return!0;if(dt(t)!==dt(i))return!1;var c=Object.keys(t),d=Object.keys(i);if(c.length!==d.length)return!1;for(var p=0,m=c;p<m.length;p++){var v=m[p],b=t[v],T=i[v],w=r.isObject(b)&&r.isObject(T),O=r.isFunction(b)&&r.isFunction(T);if((w||O)&&!this.absoluteCompare(b,T,s,l+1)||!w&&b!==T)return!1}return!0}},{key:"selectiveCompare",value:function(t,i,s){if(t===i)return!0;if(!t||!i||dt(t)!=="object"||dt(i)!=="object")return!1;if(!s)return this.absoluteCompare(t,i,1);var l=z0(s),c;try{for(l.s();!(c=l.n()).done;){var d=c.value,p=this.getNestedValue(t,d),m=this.getNestedValue(i,d),v=dt(p)==="object"&&p!==null&&dt(m)==="object"&&m!==null;if(v&&!this.absoluteCompare(p,m,1)||!v&&p!==m)return!1}}catch(b){l.e(b)}finally{l.f()}return!0}}])}();function H0(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),t.push.apply(t,i)}return t}function F0(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?H0(Object(t),!0).forEach(function(i){Vg(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):H0(Object(t)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}function ph(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(r){var t=function(c){return typeof c=="function"},i=e.classNameMergeFunction,s=t(i);return r.reduce(function(l,c){if(!c)return l;var d=function(){var v=c[p];if(p==="style")l.style=F0(F0({},l.style),c.style);else if(p==="className"){var b="";s?b=i(l.className,c.className):b=[l.className,c.className].join(" ").trim(),l.className=b||void 0}else if(t(v)){var T=l[p];l[p]=T?function(){T.apply(void 0,arguments),v.apply(void 0,arguments)}:v}else l[p]=v};for(var p in c)d();return l},{})}}var _n=Object.freeze({STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter",CUSTOM:"custom"});function Uu(r){"@babel/helpers - typeof";return Uu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Uu(r)}function mN(r,e){if(Uu(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Uu(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function gN(r){var e=mN(r,"string");return Uu(e)=="symbol"?e:e+""}function Xn(r,e,t){return(e=gN(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function yN(r,e,t){return Object.defineProperty(r,"prototype",{writable:!1}),r}function vN(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}var Vn=yN(function r(){vN(this,r)});Xn(Vn,"ripple",!1);Xn(Vn,"inputStyle","outlined");Xn(Vn,"locale","en");Xn(Vn,"appendTo",null);Xn(Vn,"cssTransition",!0);Xn(Vn,"autoZIndex",!0);Xn(Vn,"hideOverlaysOnDocumentScrolling",!1);Xn(Vn,"nonce",null);Xn(Vn,"nullSortOrder",1);Xn(Vn,"zIndex",{modal:1100,overlay:1e3,menu:1e3,tooltip:1100,toast:1200});Xn(Vn,"pt",void 0);Xn(Vn,"filterMatchModeOptions",{text:[_n.STARTS_WITH,_n.CONTAINS,_n.NOT_CONTAINS,_n.ENDS_WITH,_n.EQUALS,_n.NOT_EQUALS],numeric:[_n.EQUALS,_n.NOT_EQUALS,_n.LESS_THAN,_n.LESS_THAN_OR_EQUAL_TO,_n.GREATER_THAN,_n.GREATER_THAN_OR_EQUAL_TO],date:[_n.DATE_IS,_n.DATE_IS_NOT,_n.DATE_BEFORE,_n.DATE_AFTER]});Xn(Vn,"changeTheme",function(r,e,t,i){var s,l=document.getElementById(t);if(!l)throw Error("Element with id ".concat(t," not found."));var c=l.getAttribute("href").replace(r,e),d=document.createElement("link");d.setAttribute("rel","stylesheet"),d.setAttribute("id",t),d.setAttribute("href",c),d.addEventListener("load",function(){i&&i()}),(s=l.parentNode)===null||s===void 0||s.replaceChild(d,l)});var Ug=aR.createContext(),Vh=Vn;function _N(r){if(Array.isArray(r))return r}function EN(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var i,s,l,c,d=[],p=!0,m=!1;try{if(l=(t=t.call(r)).next,e!==0)for(;!(p=(i=l.call(t)).done)&&(d.push(i.value),d.length!==e);p=!0);}catch(v){m=!0,s=v}finally{try{if(!p&&t.return!=null&&(c=t.return(),Object(c)!==c))return}finally{if(m)throw s}}return d}}function G0(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,i=Array(e);t<e;t++)i[t]=r[t];return i}function bN(r,e){if(r){if(typeof r=="string")return G0(r,e);var t={}.toString.call(r).slice(8,-1);return t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set"?Array.from(r):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?G0(r,e):void 0}}function TN(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function SN(r,e){return _N(r)||EN(r,e)||bN(r,e)||TN()}var AN=function(e){return M.useEffect(function(){return e},[])},wN=function(){var e=M.useContext(Ug);return function(){for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return ph(i,e==null?void 0:e.ptOptions)}},gA=function(e){var t=M.useRef(!1);return M.useEffect(function(){if(!t.current)return t.current=!0,e&&e()},[])},RN=0,wf=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=M.useState(!1),s=SN(i,2),l=s[0],c=s[1],d=M.useRef(null),p=M.useContext(Ug),m=Ss.isClient()?window.document:void 0,v=t.document,b=v===void 0?m:v,T=t.manual,w=T===void 0?!1:T,O=t.name,V=O===void 0?"style_".concat(++RN):O,P=t.id,B=P===void 0?void 0:P,K=t.media,Q=K===void 0?void 0:K,ie=function(x){var N=x.querySelector('style[data-primereact-style-id="'.concat(V,'"]'));if(N)return N;if(B!==void 0){var k=b.getElementById(B);if(k)return k}return b.createElement("style")},D=function(x){l&&e!==x&&(d.current.textContent=x)},G=function(){if(!(!b||l)){var x=(p==null?void 0:p.styleContainer)||b.head;d.current=ie(x),d.current.isConnected||(d.current.type="text/css",B&&(d.current.id=B),Q&&(d.current.media=Q),Ss.addNonce(d.current,p&&p.nonce||Vh.nonce),x.appendChild(d.current),V&&d.current.setAttribute("data-primereact-style-id",V)),d.current.textContent=e,c(!0)}},C=function(){!b||!d.current||(Ss.removeInlineStyle(d.current),c(!1))};return M.useEffect(function(){w||G()},[w]),{id:B,name:V,update:D,unload:C,load:G,isLoaded:l}},Ff=function(e,t){var i=M.useRef(!1);return M.useEffect(function(){if(!i.current){i.current=!0;return}return e&&e()},t)};function jm(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,i=Array(e);t<e;t++)i[t]=r[t];return i}function CN(r){if(Array.isArray(r))return jm(r)}function IN(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function xN(r,e){if(r){if(typeof r=="string")return jm(r,e);var t={}.toString.call(r).slice(8,-1);return t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set"?Array.from(r):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?jm(r,e):void 0}}function ON(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y0(r){return CN(r)||IN(r)||xN(r)||ON()}function ju(r){"@babel/helpers - typeof";return ju=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ju(r)}function DN(r,e){if(ju(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(ju(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function qN(r){var e=DN(r,"string");return ju(e)=="symbol"?e:e+""}function zm(r,e,t){return(e=qN(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function K0(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),t.push.apply(t,i)}return t}function nn(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?K0(Object(t),!0).forEach(function(i){zm(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):K0(Object(t)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}var kN=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`,NN=`
.p-button {
    margin: 0;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.p-button-label {
    flex: 1 1 auto;
}

.p-button-icon-right {
    order: 1;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-only {
    justify-content: center;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
    flex: 0 0 auto;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-group .p-button {
    margin: 0;
}

.p-button-group .p-button:not(:last-child) {
    border-right: 0 none;
}

.p-button-group .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-button-group .p-button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-button-group .p-button:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-button-group .p-button:focus {
    position: relative;
    z-index: 1;
}

.p-button-group-single .p-button:first-of-type {
    border-top-right-radius: var(--border-radius) !important;
    border-bottom-right-radius: var(--border-radius) !important;
}

.p-button-group-single .p-button:last-of-type {
    border-top-left-radius: var(--border-radius) !important;
    border-bottom-left-radius: var(--border-radius) !important;
}
`,PN=`
.p-inputtext {
    margin: 0;
}

.p-fluid .p-inputtext {
    width: 100%;
}

/* InputGroup */
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}

/* Floating Label */
.p-float-label {
    display: block;
    position: relative;
}

.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -0.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
}

.p-float-label textarea ~ label,
.p-float-label .p-mention ~ label {
    top: 1rem;
}

.p-float-label input:focus ~ label,
.p-float-label input:-webkit-autofill ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label,
.p-float-label .p-tooltip-target-wrapper ~ label {
    top: -0.75rem;
    font-size: 12px;
}

.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
}

.p-input-icon-left > i,
.p-input-icon-right > i,
.p-input-icon-left > svg,
.p-input-icon-right > svg,
.p-input-icon-left > .p-input-prefix,
.p-input-icon-right > .p-input-suffix {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-fluid .p-input-icon-left,
.p-fluid .p-input-icon-right {
    display: block;
    width: 100%;
}
`,MN=`
.p-icon {
    display: inline-block;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

svg.p-icon {
    pointer-events: auto;
}

svg.p-icon g,
.p-disabled svg.p-icon {
    pointer-events: none;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,LN=`
@layer primereact {
    .p-component, .p-component * {
        box-sizing: border-box;
    }

    .p-hidden {
        display: none;
    }

    .p-hidden-space {
        visibility: hidden;
    }

    .p-reset {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        text-decoration: none;
        font-size: 100%;
        list-style: none;
    }

    .p-disabled, .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-component-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-unselectable-text {
        user-select: none;
    }

    .p-scrollbar-measure {
        width: 100px;
        height: 100px;
        overflow: scroll;
        position: absolute;
        top: -9999px;
    }

    @-webkit-keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }

    .p-link {
        text-align: left;
        background-color: transparent;
        margin: 0;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-link:disabled {
        cursor: default;
    }

    /* Non react overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity .1s linear;
    }

    /* React based overlay animations */
    .p-connected-overlay-enter {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-enter-active {
        opacity: 1;
        transform: scaleY(1);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-enter-done {
        transform: none;
    }

    .p-connected-overlay-exit {
        opacity: 1;
    }

    .p-connected-overlay-exit-active {
        opacity: 0;
        transition: opacity .1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter {
        max-height: 0;
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        max-height: 1000px;
        transition: max-height 1s ease-in-out;
    }

    .p-toggleable-content-enter-done {
        transform: none;
    }

    .p-toggleable-content-exit {
        max-height: 1000px;
    }

    .p-toggleable-content-exit-active {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    /* @todo Refactor */
    .p-menu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    `.concat(NN,`
    `).concat(PN,`
    `).concat(MN,`
}
`),Lt={cProps:void 0,cParams:void 0,cName:void 0,defaultProps:{pt:void 0,ptOptions:void 0,unstyled:!1},context:{},globalCSS:void 0,classes:{},styles:"",extend:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.css,i=nn(nn({},e.defaultProps),Lt.defaultProps),s={},l=function(v){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Lt.context=b,Lt.cProps=v,qt.getMergedProps(v,i)},c=function(v){return qt.getDiffProps(v,i)},d=function(){var v,b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},O=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;b.hasOwnProperty("pt")&&b.pt!==void 0&&(b=b.pt);var V=T,P=/./g.test(V)&&!!w[V.split(".")[0]],B=P?qt.toFlatCase(V.split(".")[1]):qt.toFlatCase(V),K=w.hostName&&qt.toFlatCase(w.hostName),Q=K||w.props&&w.props.__TYPE&&qt.toFlatCase(w.props.__TYPE)||"",ie=B==="transition",D="data-pc-",G=function(fe){return fe!=null&&fe.props?fe.hostName?fe.props.__TYPE===fe.hostName?fe.props:G(fe.parent):fe.parent:void 0},C=function(fe){var Pe,L;return((Pe=w.props)===null||Pe===void 0?void 0:Pe[fe])||((L=G(w))===null||L===void 0?void 0:L[fe])};Lt.cParams=w,Lt.cName=Q;var R=C("ptOptions")||Lt.context.ptOptions||{},x=R.mergeSections,N=x===void 0?!0:x,k=R.mergeProps,j=k===void 0?!1:k,I=function(){var fe=Ui.apply(void 0,arguments);return Array.isArray(fe)?{className:dh.apply(void 0,Y0(fe))}:qt.isString(fe)?{className:fe}:fe!=null&&fe.hasOwnProperty("className")&&Array.isArray(fe.className)?{className:dh.apply(void 0,Y0(fe.className))}:fe},pe=O?P?yA(I,V,w):vA(I,V,w):void 0,Oe=P?void 0:jh(Uh(b,Q),I,V,w),J=!ie&&nn(nn({},B==="root"&&zm({},"".concat(D,"name"),w.props&&w.props.__parentMetadata?qt.toFlatCase(w.props.__TYPE):Q)),{},zm({},"".concat(D,"section"),B));return N||!N&&Oe?j?ph([pe,Oe,Object.keys(J).length?J:{}],{classNameMergeFunction:(v=Lt.context.ptOptions)===null||v===void 0?void 0:v.classNameMergeFunction}):nn(nn(nn({},pe),Oe),Object.keys(J).length?J:{}):nn(nn({},Oe),Object.keys(J).length?J:{})},p=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},b=v.props,T=v.state,w=function(){var Q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return d((b||{}).pt,Q,nn(nn({},v),ie))},O=function(){var Q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return d(Q,ie,D,!1)},V=function(){return Lt.context.unstyled||Vh.unstyled||b.unstyled},P=function(){var Q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return V()?void 0:Ui(t&&t.classes,Q,nn({props:b,state:T},ie))},B=function(){var Q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(D){var G,C=Ui(t&&t.inlineStyles,Q,nn({props:b,state:T},ie)),R=Ui(s,Q,nn({props:b,state:T},ie));return ph([R,C],{classNameMergeFunction:(G=Lt.context.ptOptions)===null||G===void 0?void 0:G.classNameMergeFunction})}};return{ptm:w,ptmo:O,sx:B,cx:P,isUnstyled:V}};return nn(nn({getProps:l,getOtherProps:c,setMetaData:p},e),{},{defaultProps:i})}},Ui=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=String(qt.toFlatCase(t)).split("."),l=s.shift(),c=qt.isNotEmpty(e)?Object.keys(e).find(function(d){return qt.toFlatCase(d)===l}):"";return l?qt.isObject(e)?Ui(qt.getItemValue(e[c],i),s.join("."),i):void 0:qt.getItemValue(e,i)},Uh=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,s=e==null?void 0:e._usept,l=function(d){var p,m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,v=i?i(d):d,b=qt.toFlatCase(t);return(p=m?b!==Lt.cName?v==null?void 0:v[b]:void 0:v==null?void 0:v[b])!==null&&p!==void 0?p:v};return qt.isNotEmpty(s)?{_usept:s,originalValue:l(e.originalValue),value:l(e.value)}:l(e,!0)},jh=function(e,t,i,s){var l=function(V){return t(V,i,s)};if(e!=null&&e.hasOwnProperty("_usept")){var c=e._usept||Lt.context.ptOptions||{},d=c.mergeSections,p=d===void 0?!0:d,m=c.mergeProps,v=m===void 0?!1:m,b=c.classNameMergeFunction,T=l(e.originalValue),w=l(e.value);return T===void 0&&w===void 0?void 0:qt.isString(w)?w:qt.isString(T)?T:p||!p&&w?v?ph([T,w],{classNameMergeFunction:b}):nn(nn({},T),w):w}return l(e)},VN=function(){return Uh(Lt.context.pt||Vh.pt,void 0,function(e){return qt.getItemValue(e,Lt.cParams)})},UN=function(){return Uh(Lt.context.pt||Vh.pt,void 0,function(e){return Ui(e,Lt.cName,Lt.cParams)||qt.getItemValue(e,Lt.cParams)})},yA=function(e,t,i){return jh(VN(),e,t,i)},vA=function(e,t,i){return jh(UN(),e,t,i)},jN=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){},i=arguments.length>2?arguments[2]:void 0,s=i.name,l=i.styled,c=l===void 0?!1:l,d=i.hostName,p=d===void 0?"":d,m=yA(Ui,"global.css",Lt.cParams),v=qt.toFlatCase(s),b=wf(kN,{name:"base",manual:!0}),T=b.load,w=wf(LN,{name:"common",manual:!0}),O=w.load,V=wf(m,{name:"global",manual:!0}),P=V.load,B=wf(e,{name:s,manual:!0}),K=B.load,Q=function(D){if(!p){var G=jh(Uh((Lt.cProps||{}).pt,v),Ui,"hooks.".concat(D)),C=vA(Ui,"hooks.".concat(D));G==null||G(),C==null||C()}};Q("useMountEffect"),gA(function(){T(),P(),t()||(O(),c||K())}),Ff(function(){Q("useUpdateEffect")}),AN(function(){Q("useUnmountEffect")})};function Bm(){return Bm=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},Bm.apply(null,arguments)}function zu(r){"@babel/helpers - typeof";return zu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zu(r)}function zN(r,e){if(zu(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(zu(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function BN(r){var e=zN(r,"string");return zu(e)=="symbol"?e:e+""}function HN(r,e,t){return(e=BN(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function FN(r){if(Array.isArray(r))return r}function GN(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var i,s,l,c,d=[],p=!0,m=!1;try{if(l=(t=t.call(r)).next,e!==0)for(;!(p=(i=l.call(t)).done)&&(d.push(i.value),d.length!==e);p=!0);}catch(v){m=!0,s=v}finally{try{if(!p&&t.return!=null&&(c=t.return(),Object(c)!==c))return}finally{if(m)throw s}}return d}}function $0(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,i=Array(e);t<e;t++)i[t]=r[t];return i}function YN(r,e){if(r){if(typeof r=="string")return $0(r,e);var t={}.toString.call(r).slice(8,-1);return t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set"?Array.from(r):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?$0(r,e):void 0}}function KN(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $N(r,e){return FN(r)||GN(r,e)||YN(r,e)||KN()}var QN={root:function(e){var t=e.props;return dh("",t.className)},toolbar:"",content:""},XN=`
/*!
 * Quill Editor v2.0.2
 * https://quilljs.com
 * Copyright (c) 2017-2024, Slab
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
.ql-container {
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  height: 100%;
  margin: 0;
  position: relative;
}
.ql-container.ql-disabled .ql-tooltip {
  visibility: hidden;
}
.ql-container:not(.ql-disabled) li[data-list="checked"] > .ql-ui,
.ql-container:not(.ql-disabled) li[data-list="unchecked"] > .ql-ui {
  cursor: pointer;
}
.ql-clipboard {
  left: -100000px;
  height: 1px;
  overflow-y: hidden;
  position: absolute;
  top: 50%;
}
.ql-clipboard p {
  margin: 0;
  padding: 0;
}
.ql-editor {
  box-sizing: border-box;
  counter-reset: list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8
    list-9;
  line-height: 1.42;
  height: 100%;
  outline: none;
  overflow-y: auto;
  padding: 12px 15px;
  tab-size: 4;
  -moz-tab-size: 4;
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.ql-editor > * {
  cursor: text;
}
.ql-editor p,
.ql-editor ol,
.ql-editor pre,
.ql-editor blockquote,
.ql-editor h1,
.ql-editor h2,
.ql-editor h3,
.ql-editor h4,
.ql-editor h5,
.ql-editor h6 {
  margin: 0;
  padding: 0;
}
@supports (counter-set: none) {
  .ql-editor p,
  .ql-editor h1,
  .ql-editor h2,
  .ql-editor h3,
  .ql-editor h4,
  .ql-editor h5,
  .ql-editor h6 {
    counter-set: list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8
      list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor p,
  .ql-editor h1,
  .ql-editor h2,
  .ql-editor h3,
  .ql-editor h4,
  .ql-editor h5,
  .ql-editor h6 {
    counter-reset: list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7
      list-8 list-9;
  }
}
.ql-editor table {
  border-collapse: collapse;
}
.ql-editor td {
  border: 1px solid #000;
  padding: 2px 5px;
}
.ql-editor ol {
  padding-left: 1.5em;
}
.ql-editor li {
  list-style-type: none;
  padding-left: 1.5em;
  position: relative;
}
.ql-editor li > .ql-ui:before {
  display: inline-block;
  margin-left: -1.5em;
  margin-right: 0.3em;
  text-align: right;
  white-space: nowrap;
  width: 1.2em;
}
.ql-editor li[data-list="checked"] > .ql-ui,
.ql-editor li[data-list="unchecked"] > .ql-ui {
  color: #777;
}
.ql-editor li[data-list="bullet"] > .ql-ui:before {
  content: "\\2022";
}
.ql-editor li[data-list="checked"] > .ql-ui:before {
  content: "\\2611";
}
.ql-editor li[data-list="unchecked"] > .ql-ui:before {
  content: "\\2610";
}
@supports (counter-set: none) {
  .ql-editor li[data-list] {
    counter-set: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list] {
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8
      list-9;
  }
}
.ql-editor li[data-list="ordered"] {
  counter-increment: list-0;
}
.ql-editor li[data-list="ordered"] > .ql-ui:before {
  content: counter(list-0, decimal) ". ";
}
.ql-editor li[data-list="ordered"].ql-indent-1 {
  counter-increment: list-1;
}
.ql-editor li[data-list="ordered"].ql-indent-1 > .ql-ui:before {
  content: counter(list-1, lower-alpha) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-1 {
    counter-set: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-1 {
    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-2 {
  counter-increment: list-2;
}
.ql-editor li[data-list="ordered"].ql-indent-2 > .ql-ui:before {
  content: counter(list-2, lower-roman) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-2 {
    counter-set: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-2 {
    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-3 {
  counter-increment: list-3;
}
.ql-editor li[data-list="ordered"].ql-indent-3 > .ql-ui:before {
  content: counter(list-3, decimal) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-3 {
    counter-set: list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-3 {
    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-4 {
  counter-increment: list-4;
}
.ql-editor li[data-list="ordered"].ql-indent-4 > .ql-ui:before {
  content: counter(list-4, lower-alpha) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-4 {
    counter-set: list-5 list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-4 {
    counter-reset: list-5 list-6 list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-5 {
  counter-increment: list-5;
}
.ql-editor li[data-list="ordered"].ql-indent-5 > .ql-ui:before {
  content: counter(list-5, lower-roman) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-5 {
    counter-set: list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-5 {
    counter-reset: list-6 list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-6 {
  counter-increment: list-6;
}
.ql-editor li[data-list="ordered"].ql-indent-6 > .ql-ui:before {
  content: counter(list-6, decimal) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-6 {
    counter-set: list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-6 {
    counter-reset: list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-7 {
  counter-increment: list-7;
}
.ql-editor li[data-list="ordered"].ql-indent-7 > .ql-ui:before {
  content: counter(list-7, lower-alpha) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-7 {
    counter-set: list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-7 {
    counter-reset: list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-8 {
  counter-increment: list-8;
}
.ql-editor li[data-list="ordered"].ql-indent-8 > .ql-ui:before {
  content: counter(list-8, lower-roman) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-8 {
    counter-set: list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-8 {
    counter-reset: list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-9 {
  counter-increment: list-9;
}
.ql-editor li[data-list="ordered"].ql-indent-9 > .ql-ui:before {
  content: counter(list-9, decimal) ". ";
}
.ql-editor .ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 3em;
}
.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 4.5em;
}
.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 3em;
}
.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 4.5em;
}
.ql-editor .ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 6em;
}
.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 7.5em;
}
.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 6em;
}
.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 7.5em;
}
.ql-editor .ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 9em;
}
.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 10.5em;
}
.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 9em;
}
.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 10.5em;
}
.ql-editor .ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 12em;
}
.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 13.5em;
}
.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 12em;
}
.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 13.5em;
}
.ql-editor .ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 15em;
}
.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 16.5em;
}
.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 15em;
}
.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 16.5em;
}
.ql-editor .ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 18em;
}
.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 19.5em;
}
.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 18em;
}
.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 19.5em;
}
.ql-editor .ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 21em;
}
.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 22.5em;
}
.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 21em;
}
.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 22.5em;
}
.ql-editor .ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 24em;
}
.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 25.5em;
}
.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 24em;
}
.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 25.5em;
}
.ql-editor .ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 27em;
}
.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 28.5em;
}
.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 27em;
}
.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 28.5em;
}
.ql-editor li.ql-direction-rtl {
  padding-right: 1.5em;
}
.ql-editor li.ql-direction-rtl > .ql-ui:before {
  margin-left: 0.3em;
  margin-right: -1.5em;
  text-align: left;
}
.ql-editor table {
  table-layout: fixed;
  width: 100%;
}
.ql-editor table td {
  outline: none;
}
.ql-editor .ql-code-block-container {
  font-family: monospace;
}
.ql-editor .ql-video {
  display: block;
  max-width: 100%;
}
.ql-editor .ql-video.ql-align-center {
  margin: 0 auto;
}
.ql-editor .ql-video.ql-align-right {
  margin: 0 0 0 auto;
}
.ql-editor .ql-bg-black {
  background-color: #000;
}
.ql-editor .ql-bg-red {
  background-color: #e60000;
}
.ql-editor .ql-bg-orange {
  background-color: #f90;
}
.ql-editor .ql-bg-yellow {
  background-color: #ff0;
}
.ql-editor .ql-bg-green {
  background-color: #008a00;
}
.ql-editor .ql-bg-blue {
  background-color: #06c;
}
.ql-editor .ql-bg-purple {
  background-color: #93f;
}
.ql-editor .ql-color-white {
  color: #fff;
}
.ql-editor .ql-color-red {
  color: #e60000;
}
.ql-editor .ql-color-orange {
  color: #f90;
}
.ql-editor .ql-color-yellow {
  color: #ff0;
}
.ql-editor .ql-color-green {
  color: #008a00;
}
.ql-editor .ql-color-blue {
  color: #06c;
}
.ql-editor .ql-color-purple {
  color: #93f;
}
.ql-editor .ql-font-serif {
  font-family: Georgia, Times New Roman, serif;
}
.ql-editor .ql-font-monospace {
  font-family: Monaco, Courier New, monospace;
}
.ql-editor .ql-size-small {
  font-size: 0.75em;
}
.ql-editor .ql-size-large {
  font-size: 1.5em;
}
.ql-editor .ql-size-huge {
  font-size: 2.5em;
}
.ql-editor .ql-direction-rtl {
  direction: rtl;
  text-align: inherit;
}
.ql-editor .ql-align-center {
  text-align: center;
}
.ql-editor .ql-align-justify {
  text-align: justify;
}
.ql-editor .ql-align-right {
  text-align: right;
}
.ql-editor .ql-ui {
  position: absolute;
}
.ql-editor.ql-blank::before {
  color: rgba(0, 0, 0, 0.6);
  content: attr(data-placeholder);
  font-style: italic;
  left: 15px;
  pointer-events: none;
  position: absolute;
  right: 15px;
}
.ql-snow.ql-toolbar:after,
.ql-snow .ql-toolbar:after {
  clear: both;
  content: "";
  display: table;
}
.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button {
  background: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  float: left;
  height: 24px;
  padding: 3px 5px;
  width: 28px;
}
.ql-snow.ql-toolbar button svg,
.ql-snow .ql-toolbar button svg {
  float: left;
  height: 100%;
}
.ql-snow.ql-toolbar button:active:hover,
.ql-snow .ql-toolbar button:active:hover {
  outline: none;
}
.ql-snow.ql-toolbar input.ql-image[type="file"],
.ql-snow .ql-toolbar input.ql-image[type="file"] {
  display: none;
}
.ql-snow.ql-toolbar button:hover,
.ql-snow .ql-toolbar button:hover,
.ql-snow.ql-toolbar button:focus,
.ql-snow .ql-toolbar button:focus,
.ql-snow.ql-toolbar button.ql-active,
.ql-snow .ql-toolbar button.ql-active,
.ql-snow.ql-toolbar .ql-picker-label:hover,
.ql-snow .ql-toolbar .ql-picker-label:hover,
.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-snow .ql-toolbar .ql-picker-label.ql-active,
.ql-snow.ql-toolbar .ql-picker-item:hover,
.ql-snow .ql-toolbar .ql-picker-item:hover,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected {
  color: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-fill,
.ql-snow .ql-toolbar button:hover .ql-fill,
.ql-snow.ql-toolbar button:focus .ql-fill,
.ql-snow .ql-toolbar button:focus .ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
  fill: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-stroke,
.ql-snow .ql-toolbar button:hover .ql-stroke,
.ql-snow.ql-toolbar button:focus .ql-stroke,
.ql-snow .ql-toolbar button:focus .ql-stroke,
.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow.ql-toolbar button:hover .ql-stroke-miter,
.ql-snow .ql-toolbar button:hover .ql-stroke-miter,
.ql-snow.ql-toolbar button:focus .ql-stroke-miter,
.ql-snow .ql-toolbar button:focus .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
  stroke: #06c;
}
@media (pointer: coarse) {
  .ql-snow.ql-toolbar button:hover:not(.ql-active),
  .ql-snow .ql-toolbar button:hover:not(.ql-active) {
    color: #444;
  }
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
    fill: #444;
  }
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
    stroke: #444;
  }
}
.ql-snow {
  box-sizing: border-box;
}
.ql-snow * {
  box-sizing: border-box;
}
.ql-snow .ql-hidden {
  display: none;
}
.ql-snow .ql-out-bottom,
.ql-snow .ql-out-top {
  visibility: hidden;
}
.ql-snow .ql-tooltip {
  position: absolute;
  transform: translateY(10px);
}
.ql-snow .ql-tooltip a {
  cursor: pointer;
  text-decoration: none;
}
.ql-snow .ql-tooltip.ql-flip {
  transform: translateY(-10px);
}
.ql-snow .ql-formats {
  display: inline-block;
  vertical-align: middle;
}
.ql-snow .ql-formats:after {
  clear: both;
  content: "";
  display: table;
}
.ql-snow .ql-stroke {
  fill: none;
  stroke: #444;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}
.ql-snow .ql-stroke-miter {
  fill: none;
  stroke: #444;
  stroke-miterlimit: 10;
  stroke-width: 2;
}
.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
  fill: #444;
}
.ql-snow .ql-empty {
  fill: none;
}
.ql-snow .ql-even {
  fill-rule: evenodd;
}
.ql-snow .ql-thin,
.ql-snow .ql-stroke.ql-thin {
  stroke-width: 1;
}
.ql-snow .ql-transparent {
  opacity: 0.4;
}
.ql-snow .ql-direction svg:last-child {
  display: none;
}
.ql-snow .ql-direction.ql-active svg:last-child {
  display: inline;
}
.ql-snow .ql-direction.ql-active svg:first-child {
  display: none;
}
.ql-snow .ql-editor h1 {
  font-size: 2em;
}
.ql-snow .ql-editor h2 {
  font-size: 1.5em;
}
.ql-snow .ql-editor h3 {
  font-size: 1.17em;
}
.ql-snow .ql-editor h4 {
  font-size: 1em;
}
.ql-snow .ql-editor h5 {
  font-size: 0.83em;
}
.ql-snow .ql-editor h6 {
  font-size: 0.67em;
}
.ql-snow .ql-editor a {
  text-decoration: underline;
}
.ql-snow .ql-editor blockquote {
  border-left: 4px solid #ccc;
  margin-bottom: 5px;
  margin-top: 5px;
  padding-left: 16px;
}
.ql-snow .ql-editor code,
.ql-snow .ql-editor .ql-code-block-container {
  background-color: #f0f0f0;
  border-radius: 3px;
}
.ql-snow .ql-editor .ql-code-block-container {
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 5px 10px;
}
.ql-snow .ql-editor code {
  font-size: 85%;
  padding: 2px 4px;
}
.ql-snow .ql-editor .ql-code-block-container {
  background-color: #23241f;
  color: #f8f8f2;
  overflow: visible;
}
.ql-snow .ql-editor img {
  max-width: 100%;
}
.ql-snow .ql-picker {
  color: #444;
  display: inline-block;
  float: left;
  font-size: 14px;
  font-weight: 500;
  height: 24px;
  position: relative;
  vertical-align: middle;
}
.ql-snow .ql-picker-label {
  cursor: pointer;
  display: inline-block;
  height: 100%;
  padding-left: 8px;
  padding-right: 2px;
  position: relative;
  width: 100%;
}
.ql-snow .ql-picker-label::before {
  display: inline-block;
  line-height: 22px;
}
.ql-snow .ql-picker-options {
  background-color: #fff;
  display: none;
  min-width: 100%;
  padding: 4px 8px;
  position: absolute;
  white-space: nowrap;
}
.ql-snow .ql-picker-options .ql-picker-item {
  cursor: pointer;
  display: block;
  padding-bottom: 5px;
  padding-top: 5px;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label {
  color: #ccc;
  z-index: 2;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
  fill: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
  stroke: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-options {
  display: block;
  margin-top: -1px;
  top: 100%;
  z-index: 1;
}
.ql-snow .ql-color-picker,
.ql-snow .ql-icon-picker {
  width: 28px;
}
.ql-snow .ql-color-picker .ql-picker-label,
.ql-snow .ql-icon-picker .ql-picker-label {
  padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-label svg,
.ql-snow .ql-icon-picker .ql-picker-label svg {
  right: 4px;
}
.ql-snow .ql-icon-picker .ql-picker-options {
  padding: 4px 0;
}
.ql-snow .ql-icon-picker .ql-picker-item {
  height: 24px;
  width: 24px;
  padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-options {
  padding: 3px 5px;
  width: 152px;
}
.ql-snow .ql-color-picker .ql-picker-item {
  border: 1px solid transparent;
  float: left;
  height: 16px;
  margin: 2px;
  padding: 0;
  width: 16px;
}
.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
  position: absolute;
  margin-top: -9px;
  right: 0;
  top: 50%;
  width: 18px;
}
.ql-snow
  .ql-picker.ql-header
  .ql-picker-label[data-label]:not([data-label=""])::before,
.ql-snow
  .ql-picker.ql-font
  .ql-picker-label[data-label]:not([data-label=""])::before,
.ql-snow
  .ql-picker.ql-size
  .ql-picker-label[data-label]:not([data-label=""])::before,
.ql-snow
  .ql-picker.ql-header
  .ql-picker-item[data-label]:not([data-label=""])::before,
.ql-snow
  .ql-picker.ql-font
  .ql-picker-item[data-label]:not([data-label=""])::before,
.ql-snow
  .ql-picker.ql-size
  .ql-picker-item[data-label]:not([data-label=""])::before {
  content: attr(data-label);
}
.ql-snow .ql-picker.ql-header {
  width: 98px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
  content: "Normal";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  content: "Heading 1";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  content: "Heading 2";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  content: "Heading 3";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  content: "Heading 4";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  content: "Heading 5";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  content: "Heading 6";
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  font-size: 2em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  font-size: 1.5em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  font-size: 1.17em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  font-size: 1em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  font-size: 0.83em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  font-size: 0.67em;
}
.ql-snow .ql-picker.ql-font {
  width: 108px;
}
.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
  content: "Sans Serif";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
  content: "Serif";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
  content: "Monospace";
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
  font-family: Georgia, Times New Roman, serif;
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
  font-family: Monaco, Courier New, monospace;
}
.ql-snow .ql-picker.ql-size {
  width: 98px;
}
.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
  content: "Normal";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
  content: "Small";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
  content: "Large";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
  content: "Huge";
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
  font-size: 10px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
  font-size: 18px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
  font-size: 32px;
}
.ql-snow .ql-color-picker.ql-background .ql-picker-item {
  background-color: #fff;
}
.ql-snow .ql-color-picker.ql-color .ql-picker-item {
  background-color: #000;
}
.ql-code-block-container {
  position: relative;
}
.ql-code-block-container .ql-ui {
  right: 5px;
  top: 5px;
}
.ql-toolbar.ql-snow {
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  padding: 8px;
}
.ql-toolbar.ql-snow .ql-formats {
  margin-right: 15px;
}
.ql-toolbar.ql-snow .ql-picker-label {
  border: 1px solid transparent;
}
.ql-toolbar.ql-snow .ql-picker-options {
  border: 1px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
  border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
  border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
  border-color: #000;
}
.ql-toolbar.ql-snow + .ql-container.ql-snow {
  border-top: 0;
}
.ql-snow .ql-tooltip {
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px #ddd;
  color: #444;
  padding: 5px 12px;
  white-space: nowrap;
}
.ql-snow .ql-tooltip::before {
  content: "Visit URL:";
  line-height: 26px;
  margin-right: 8px;
}
.ql-snow .ql-tooltip input[type="text"] {
  display: none;
  border: 1px solid #ccc;
  font-size: 13px;
  height: 26px;
  margin: 0;
  padding: 3px 5px;
  width: 170px;
}
.ql-snow .ql-tooltip a.ql-preview {
  display: inline-block;
  max-width: 200px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
}
.ql-snow .ql-tooltip a.ql-action::after {
  border-right: 1px solid #ccc;
  content: "Edit";
  margin-left: 16px;
  padding-right: 8px;
}
.ql-snow .ql-tooltip a.ql-remove::before {
  content: "Remove";
  margin-left: 8px;
}
.ql-snow .ql-tooltip a {
  line-height: 26px;
}
.ql-snow .ql-tooltip.ql-editing a.ql-preview,
.ql-snow .ql-tooltip.ql-editing a.ql-remove {
  display: none;
}
.ql-snow .ql-tooltip.ql-editing input[type="text"] {
  display: inline-block;
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
  border-right: 0;
  content: "Save";
  padding-right: 0;
}
.ql-snow .ql-tooltip[data-mode="link"]::before {
  content: "Enter link:";
}
.ql-snow .ql-tooltip[data-mode="formula"]::before {
  content: "Enter formula:";
}
.ql-snow .ql-tooltip[data-mode="video"]::before {
  content: "Enter video:";
}
.ql-snow a {
  color: #06c;
}
.ql-container.ql-snow {
  border: 1px solid #ccc;
}
`,Rf=Lt.extend({defaultProps:{__TYPE:"Editor",id:null,value:null,style:null,className:null,placeholder:null,readOnly:!1,modules:null,formats:null,theme:"snow",showHeader:!0,headerTemplate:null,onTextChange:null,onSelectionChange:null,onLoad:null,maxLength:null,children:void 0},css:{classes:QN,styles:XN}});function Q0(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),t.push.apply(t,i)}return t}function X0(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Q0(Object(t),!0).forEach(function(i){HN(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):Q0(Object(t)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}var WN=function(){try{return Quill}catch{return null}}(),zh=M.memo(M.forwardRef(function(r,e){var t=wN(),i=M.useContext(Ug),s=Rf.getProps(r,i),l=Rf.setMetaData({props:s}),c=l.ptm,d=l.cx,p=l.isUnstyled;jN(Rf.css.styles,p,{name:"editor"});var m=M.useRef(null),v=M.useRef(null),b=M.useRef(null),T=M.useRef(null),w=M.useRef(!1),O=M.useState(!1),V=$N(O,2),P=V[0],B=V[1];gA(function(){if(!w.current){var k={modules:X0({toolbar:s.showHeader?b.current:!1},s.modules),placeholder:s.placeholder,readOnly:s.readOnly,theme:s.theme,formats:s.formats};WN?D(new Quill(v.current,k)):rN(()=>import("./quill-D-O8QO0k.js"),[]).then(function(j){if(j&&Ss.isExist(v.current)){var I;j.default?I=new j.default(v.current,k):I=new j(v.current,k),D(I)}}),w.current=!0}});var K=function(j,I,pe){var Oe=v.current.children[0],J=Oe?Oe.innerHTML:null,ce=T.current.getText();if(J==="<p><br></p>"&&(J=null),pe==="api"){var fe=v.current.children[0],Pe=document.createElement("div");if(Pe.innerHTML=s.value||"",Ss.isEqualElement(fe,Pe))return}if(s.maxLength){var L=T.current.getLength();L>s.maxLength&&T.current.deleteText(s.maxLength,L)}s.onTextChange&&s.onTextChange({htmlValue:J,textValue:ce,delta:j,source:pe})},Q=function(j,I,pe){s.onSelectionChange&&s.onSelectionChange({range:j,oldRange:I,source:pe})},ie=M.useRef(s.value);ie.current=s.value;var D=function(j){T.current=j,ie.current&&j.setContents(j.clipboard.convert({html:ie.current,text:""})),B(!0)};Ff(function(){if(P)return T.current.on("text-change",K),T.current.on("selection-change",Q),function(){T.current.off("text-change",K),T.current.off("selection-change",Q)}}),Ff(function(){P&&T.current&&T.current.getModule("toolbar")&&s.onLoad&&s.onLoad(T.current)},[P]),Ff(function(){T.current&&!T.current.hasFocus()&&(s.value?T.current.setContents(T.current.clipboard.convert({html:s.value,text:""})):T.current.setText(""))},[s.value]),M.useImperativeHandle(e,function(){return{props:s,getQuill:function(){return T.current},getElement:function(){return m.current},getContent:function(){return v.current},getToolbar:function(){return b.current}}});var G=function(){var j=t({ref:b,className:d("toolbar")},c("toolbar"));if(s.showHeader===!1)return null;if(s.headerTemplate)return M.createElement("div",j,s.headerTemplate);var I=function(J,ce){return t(J&&X0({},J),c(ce))},pe=t({className:"ql-formats"},c("formats"));return M.createElement("div",j,M.createElement("span",pe,M.createElement("select",I({className:"ql-header",defaultValue:"0"},"header"),M.createElement("option",I({value:"1"},"option"),"Heading"),M.createElement("option",I({value:"2"},"option"),"Subheading"),M.createElement("option",I({value:"0"},"option"),"Normal")),M.createElement("select",I({className:"ql-font"},"font"),M.createElement("option",I(void 0,"option")),M.createElement("option",I({value:"serif"},"option")),M.createElement("option",I({value:"monospace"},"option")))),M.createElement("span",pe,M.createElement("button",I({type:"button",className:"ql-bold","aria-label":"Bold"},"bold")),M.createElement("button",I({type:"button",className:"ql-italic","aria-label":"Italic"},"italic")),M.createElement("button",I({type:"button",className:"ql-underline","aria-label":"Underline"},"underline"))),M.createElement("span",pe,M.createElement("select",I({className:"ql-color"},"color")),M.createElement("select",I({className:"ql-background"},"background"))),M.createElement("span",pe,M.createElement("button",I({type:"button",className:"ql-list",value:"ordered","aria-label":"Ordered List"},"list")),M.createElement("button",I({type:"button",className:"ql-list",value:"bullet","aria-label":"Unordered List"},"list")),M.createElement("select",I({className:"ql-align"},"select"),M.createElement("option",I({defaultValue:!0},"option")),M.createElement("option",I({value:"center"},"option")),M.createElement("option",I({value:"right"},"option")),M.createElement("option",I({value:"justify"},"option")))),M.createElement("span",pe,M.createElement("button",I({type:"button",className:"ql-link","aria-label":"Insert Link"},"link")),M.createElement("button",I({type:"button",className:"ql-image","aria-label":"Insert Image"},"image")),M.createElement("button",I({type:"button",className:"ql-code-block","aria-label":"Insert Code Block"},"codeBlock"))),M.createElement("span",pe,M.createElement("button",I({type:"button",className:"ql-clean","aria-label":"Remove Styles"},"clean"))))},C=G(),R=t({ref:v,className:d("content"),style:s.style},c("content")),x=M.createElement("div",R),N=t({className:dh(s.className,d("root"))},Rf.getOtherProps(s),c("root"));return M.createElement("div",Bm({id:s.id,ref:m},N),C,x)}));zh.displayName="Editor";function ZN(){const[r,e]=M.useState(""),[t,i]=M.useState(""),[s,l]=M.useState(""),[c,d]=M.useState(""),p=async m=>{m.preventDefault();try{await il(gr(an,"projects"),{title:r,description:t,techStack:s.split(",").map(v=>v.trim()),github:c,createdAt:new Date}),alert("✅ Project added!"),e(""),i(""),l(""),d("")}catch(v){alert("❌ Error: "+v.message)}};return U.jsxs("div",{style:{marginBottom:"2rem"},children:[U.jsx("h2",{children:"🛠 Add Project"}),U.jsxs("form",{onSubmit:p,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[U.jsx("input",{type:"text",value:r,onChange:m=>e(m.target.value),placeholder:"Project Title",required:!0}),U.jsx(zh,{value:t,onTextChange:m=>i(m.htmlValue),style:{height:"320px",background:"white",color:"black",fontSize:"16px"},className:"resizable-editor",placeholder:"Description",required:!0}),U.jsx("input",{type:"text",value:s,onChange:m=>l(m.target.value),placeholder:"Tech Stack (comma separated)"}),U.jsx("input",{type:"url",value:c,onChange:m=>d(m.target.value),placeholder:"Project Location URL"}),U.jsx("button",{type:"submit",children:"Add Project"})]})]})}function JN(){const[r,e]=M.useState([]),t=async()=>{const l=(await nl(gr(an,"projects"))).docs.map(c=>({id:c.id,...c.data()}));e(l)},i=async s=>{window.confirm("Are you sure you want to delete this project?")&&(await rl(Ps(an,"projects",s)),t())};return M.useEffect(()=>{t()},[]),U.jsxs("div",{style:{marginTop:"2rem"},children:[U.jsx("h2",{children:"📋 Your Projects"}),r.length===0?U.jsx("p",{children:"No projects found."}):U.jsx("ul",{style:{listStyle:"none",padding:0},children:r.map(s=>{var l;return U.jsxs("li",{style:{border:"1px solid #ccc",padding:"1rem",marginBottom:"1rem"},children:[U.jsx("h3",{children:s.title}),U.jsx("div",{dangerouslySetInnerHTML:{__html:s.description.replace(/<ol>/g,"<ul>").replace(/<\/ol>/g,"</ul>")},style:{color:"inherit"}}),U.jsxs("small",{children:["Tech Stack: ",(l=s.techStack)==null?void 0:l.join(", ")]}),U.jsx("br",{}),U.jsx("a",{href:s.github||"#",target:s.github?"_blank":void 0,rel:s.github?"noreferrer":void 0,style:{pointerEvents:s.github?"auto":"none",color:s.github?"blue":"gray"},children:"Project Link"}),U.jsx("br",{}),U.jsx("button",{style:{marginTop:"0.5rem",backgroundColor:"crimson",color:"white"},onClick:()=>i(s.id),children:"Delete"})]},s.id)})})]})}function e2(){return U.jsxs("div",{children:[U.jsx("h2",{children:"Projects"}),U.jsx(ZN,{}),U.jsx(JN,{})]})}/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */const{entries:_A,setPrototypeOf:W0,isFrozen:t2,getPrototypeOf:n2,getOwnPropertyDescriptor:r2}=Object;let{freeze:On,seal:mr,create:EA}=Object,{apply:Hm,construct:Fm}=typeof Reflect<"u"&&Reflect;On||(On=function(e){return e});mr||(mr=function(e){return e});Hm||(Hm=function(e,t,i){return e.apply(t,i)});Fm||(Fm=function(e,t){return new e(...t)});const Cf=Dn(Array.prototype.forEach),i2=Dn(Array.prototype.lastIndexOf),Z0=Dn(Array.prototype.pop),lu=Dn(Array.prototype.push),a2=Dn(Array.prototype.splice),Gf=Dn(String.prototype.toLowerCase),im=Dn(String.prototype.toString),J0=Dn(String.prototype.match),uu=Dn(String.prototype.replace),s2=Dn(String.prototype.indexOf),o2=Dn(String.prototype.trim),xr=Dn(Object.prototype.hasOwnProperty),xn=Dn(RegExp.prototype.test),cu=l2(TypeError);function Dn(r){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];return Hm(r,e,i)}}function l2(r){return function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return Fm(r,t)}}function ze(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Gf;W0&&W0(r,null);let i=e.length;for(;i--;){let s=e[i];if(typeof s=="string"){const l=t(s);l!==s&&(t2(e)||(e[i]=l),s=l)}r[s]=!0}return r}function u2(r){for(let e=0;e<r.length;e++)xr(r,e)||(r[e]=null);return r}function bs(r){const e=EA(null);for(const[t,i]of _A(r))xr(r,t)&&(Array.isArray(i)?e[t]=u2(i):i&&typeof i=="object"&&i.constructor===Object?e[t]=bs(i):e[t]=i);return e}function fu(r,e){for(;r!==null;){const i=r2(r,e);if(i){if(i.get)return Dn(i.get);if(typeof i.value=="function")return Dn(i.value)}r=n2(r)}function t(){return null}return t}const eb=On(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),am=On(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),sm=On(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),c2=On(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),om=On(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),f2=On(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),tb=On(["#text"]),nb=On(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),lm=On(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),rb=On(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),If=On(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),h2=mr(/\{\{[\w\W]*|[\w\W]*\}\}/gm),d2=mr(/<%[\w\W]*|[\w\W]*%>/gm),p2=mr(/\$\{[\w\W]*/gm),m2=mr(/^data-[\-\w.\u00B7-\uFFFF]+$/),g2=mr(/^aria-[\-\w]+$/),bA=mr(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),y2=mr(/^(?:\w+script|data):/i),v2=mr(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),TA=mr(/^html$/i),_2=mr(/^[a-z][.\w]*(-[.\w]+)+$/i);var ib=Object.freeze({__proto__:null,ARIA_ATTR:g2,ATTR_WHITESPACE:v2,CUSTOM_ELEMENT:_2,DATA_ATTR:m2,DOCTYPE_NAME:TA,ERB_EXPR:d2,IS_ALLOWED_URI:bA,IS_SCRIPT_OR_DATA:y2,MUSTACHE_EXPR:h2,TMPLIT_EXPR:p2});const hu={element:1,text:3,progressingInstruction:7,comment:8,document:9},E2=function(){return typeof window>"u"?null:window},b2=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let i=null;const s="data-tt-policy-suffix";t&&t.hasAttribute(s)&&(i=t.getAttribute(s));const l="dompurify"+(i?"#"+i:"");try{return e.createPolicy(l,{createHTML(c){return c},createScriptURL(c){return c}})}catch{return console.warn("TrustedTypes policy "+l+" could not be created."),null}},ab=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function SA(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:E2();const e=ve=>SA(ve);if(e.version="3.2.5",e.removed=[],!r||!r.document||r.document.nodeType!==hu.document||!r.Element)return e.isSupported=!1,e;let{document:t}=r;const i=t,s=i.currentScript,{DocumentFragment:l,HTMLTemplateElement:c,Node:d,Element:p,NodeFilter:m,NamedNodeMap:v=r.NamedNodeMap||r.MozNamedAttrMap,HTMLFormElement:b,DOMParser:T,trustedTypes:w}=r,O=p.prototype,V=fu(O,"cloneNode"),P=fu(O,"remove"),B=fu(O,"nextSibling"),K=fu(O,"childNodes"),Q=fu(O,"parentNode");if(typeof c=="function"){const ve=t.createElement("template");ve.content&&ve.content.ownerDocument&&(t=ve.content.ownerDocument)}let ie,D="";const{implementation:G,createNodeIterator:C,createDocumentFragment:R,getElementsByTagName:x}=t,{importNode:N}=i;let k=ab();e.isSupported=typeof _A=="function"&&typeof Q=="function"&&G&&G.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:j,ERB_EXPR:I,TMPLIT_EXPR:pe,DATA_ATTR:Oe,ARIA_ATTR:J,IS_SCRIPT_OR_DATA:ce,ATTR_WHITESPACE:fe,CUSTOM_ELEMENT:Pe}=ib;let{IS_ALLOWED_URI:L}=ib,te=null;const de=ze({},[...eb,...am,...sm,...om,...tb]);let oe=null;const be=ze({},[...nb,...lm,...rb,...If]);let _e=Object.seal(EA(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Se=null,St=null,et=!0,qn=!0,yr=!1,Wn=!0,kn=!1,vr=!0,Sn=!1,di=!1,$i=!1,Vt=!1,Qi=!1,Mr=!1,pi=!0,Lr=!1;const al="user-content-";let Vr=!0,_r=!1,Er={},tt=null;const Qe=ze({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let pn=null;const Ut=ze({},["audio","video","img","source","image","track"]);let Xi=null;const Ms=ze({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Zn="http://www.w3.org/1998/Math/MathML",Jn="http://www.w3.org/2000/svg",sn="http://www.w3.org/1999/xhtml";let $t=sn,Ur=!1,br=null;const Ha=ze({},[Zn,Jn,sn],im);let jr=ze({},["mi","mo","mn","ms","mtext"]),zr=ze({},["annotation-xml"]);const Tr=ze({},["title","style","font","a","script"]);let An=null;const Fa=["application/xhtml+xml","text/html"],er="text/html";let mt=null,wn=null;const Wi=t.createElement("form"),Sr=function(H){return H instanceof RegExp||H instanceof Function},Zi=function(){let H=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(wn&&wn===H)){if((!H||typeof H!="object")&&(H={}),H=bs(H),An=Fa.indexOf(H.PARSER_MEDIA_TYPE)===-1?er:H.PARSER_MEDIA_TYPE,mt=An==="application/xhtml+xml"?im:Gf,te=xr(H,"ALLOWED_TAGS")?ze({},H.ALLOWED_TAGS,mt):de,oe=xr(H,"ALLOWED_ATTR")?ze({},H.ALLOWED_ATTR,mt):be,br=xr(H,"ALLOWED_NAMESPACES")?ze({},H.ALLOWED_NAMESPACES,im):Ha,Xi=xr(H,"ADD_URI_SAFE_ATTR")?ze(bs(Ms),H.ADD_URI_SAFE_ATTR,mt):Ms,pn=xr(H,"ADD_DATA_URI_TAGS")?ze(bs(Ut),H.ADD_DATA_URI_TAGS,mt):Ut,tt=xr(H,"FORBID_CONTENTS")?ze({},H.FORBID_CONTENTS,mt):Qe,Se=xr(H,"FORBID_TAGS")?ze({},H.FORBID_TAGS,mt):{},St=xr(H,"FORBID_ATTR")?ze({},H.FORBID_ATTR,mt):{},Er=xr(H,"USE_PROFILES")?H.USE_PROFILES:!1,et=H.ALLOW_ARIA_ATTR!==!1,qn=H.ALLOW_DATA_ATTR!==!1,yr=H.ALLOW_UNKNOWN_PROTOCOLS||!1,Wn=H.ALLOW_SELF_CLOSE_IN_ATTR!==!1,kn=H.SAFE_FOR_TEMPLATES||!1,vr=H.SAFE_FOR_XML!==!1,Sn=H.WHOLE_DOCUMENT||!1,Vt=H.RETURN_DOM||!1,Qi=H.RETURN_DOM_FRAGMENT||!1,Mr=H.RETURN_TRUSTED_TYPE||!1,$i=H.FORCE_BODY||!1,pi=H.SANITIZE_DOM!==!1,Lr=H.SANITIZE_NAMED_PROPS||!1,Vr=H.KEEP_CONTENT!==!1,_r=H.IN_PLACE||!1,L=H.ALLOWED_URI_REGEXP||bA,$t=H.NAMESPACE||sn,jr=H.MATHML_TEXT_INTEGRATION_POINTS||jr,zr=H.HTML_INTEGRATION_POINTS||zr,_e=H.CUSTOM_ELEMENT_HANDLING||{},H.CUSTOM_ELEMENT_HANDLING&&Sr(H.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(_e.tagNameCheck=H.CUSTOM_ELEMENT_HANDLING.tagNameCheck),H.CUSTOM_ELEMENT_HANDLING&&Sr(H.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(_e.attributeNameCheck=H.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),H.CUSTOM_ELEMENT_HANDLING&&typeof H.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(_e.allowCustomizedBuiltInElements=H.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),kn&&(qn=!1),Qi&&(Vt=!0),Er&&(te=ze({},tb),oe=[],Er.html===!0&&(ze(te,eb),ze(oe,nb)),Er.svg===!0&&(ze(te,am),ze(oe,lm),ze(oe,If)),Er.svgFilters===!0&&(ze(te,sm),ze(oe,lm),ze(oe,If)),Er.mathMl===!0&&(ze(te,om),ze(oe,rb),ze(oe,If))),H.ADD_TAGS&&(te===de&&(te=bs(te)),ze(te,H.ADD_TAGS,mt)),H.ADD_ATTR&&(oe===be&&(oe=bs(oe)),ze(oe,H.ADD_ATTR,mt)),H.ADD_URI_SAFE_ATTR&&ze(Xi,H.ADD_URI_SAFE_ATTR,mt),H.FORBID_CONTENTS&&(tt===Qe&&(tt=bs(tt)),ze(tt,H.FORBID_CONTENTS,mt)),Vr&&(te["#text"]=!0),Sn&&ze(te,["html","head","body"]),te.table&&(ze(te,["tbody"]),delete Se.tbody),H.TRUSTED_TYPES_POLICY){if(typeof H.TRUSTED_TYPES_POLICY.createHTML!="function")throw cu('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof H.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw cu('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');ie=H.TRUSTED_TYPES_POLICY,D=ie.createHTML("")}else ie===void 0&&(ie=b2(w,s)),ie!==null&&typeof D=="string"&&(D=ie.createHTML(""));On&&On(H),wn=H}},ut=ze({},[...am,...sm,...c2]),At=ze({},[...om,...f2]),wt=function(H){let le=Q(H);(!le||!le.tagName)&&(le={namespaceURI:$t,tagName:"template"});const me=Gf(H.tagName),nt=Gf(le.tagName);return br[H.namespaceURI]?H.namespaceURI===Jn?le.namespaceURI===sn?me==="svg":le.namespaceURI===Zn?me==="svg"&&(nt==="annotation-xml"||jr[nt]):!!ut[me]:H.namespaceURI===Zn?le.namespaceURI===sn?me==="math":le.namespaceURI===Jn?me==="math"&&zr[nt]:!!At[me]:H.namespaceURI===sn?le.namespaceURI===Jn&&!zr[nt]||le.namespaceURI===Zn&&!jr[nt]?!1:!At[me]&&(Tr[me]||!ut[me]):!!(An==="application/xhtml+xml"&&br[H.namespaceURI]):!1},vt=function(H){lu(e.removed,{element:H});try{Q(H).removeChild(H)}catch{P(H)}},Br=function(H,le){try{lu(e.removed,{attribute:le.getAttributeNode(H),from:le})}catch{lu(e.removed,{attribute:null,from:le})}if(le.removeAttribute(H),H==="is")if(Vt||Qi)try{vt(le)}catch{}else try{le.setAttribute(H,"")}catch{}},Ls=function(H){let le=null,me=null;if($i)H="<remove></remove>"+H;else{const ht=J0(H,/^[\r\n\t ]+/);me=ht&&ht[0]}An==="application/xhtml+xml"&&$t===sn&&(H='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+H+"</body></html>");const nt=ie?ie.createHTML(H):H;if($t===sn)try{le=new T().parseFromString(nt,An)}catch{}if(!le||!le.documentElement){le=G.createDocument($t,"template",null);try{le.documentElement.innerHTML=Ur?D:nt}catch{}}const It=le.body||le.documentElement;return H&&me&&It.insertBefore(t.createTextNode(me),It.childNodes[0]||null),$t===sn?x.call(le,Sn?"html":"body")[0]:Sn?le.documentElement:It},Ar=function(H){return C.call(H.ownerDocument||H,H,m.SHOW_ELEMENT|m.SHOW_COMMENT|m.SHOW_TEXT|m.SHOW_PROCESSING_INSTRUCTION|m.SHOW_CDATA_SECTION,null)},Ji=function(H){return H instanceof b&&(typeof H.nodeName!="string"||typeof H.textContent!="string"||typeof H.removeChild!="function"||!(H.attributes instanceof v)||typeof H.removeAttribute!="function"||typeof H.setAttribute!="function"||typeof H.namespaceURI!="string"||typeof H.insertBefore!="function"||typeof H.hasChildNodes!="function")},Hr=function(H){return typeof d=="function"&&H instanceof d};function Qt(ve,H,le){Cf(ve,me=>{me.call(e,H,le,wn)})}const tr=function(H){let le=null;if(Qt(k.beforeSanitizeElements,H,null),Ji(H))return vt(H),!0;const me=mt(H.nodeName);if(Qt(k.uponSanitizeElement,H,{tagName:me,allowedTags:te}),H.hasChildNodes()&&!Hr(H.firstElementChild)&&xn(/<[/\w!]/g,H.innerHTML)&&xn(/<[/\w!]/g,H.textContent)||H.nodeType===hu.progressingInstruction||vr&&H.nodeType===hu.comment&&xn(/<[/\w]/g,H.data))return vt(H),!0;if(!te[me]||Se[me]){if(!Se[me]&&jn(me)&&(_e.tagNameCheck instanceof RegExp&&xn(_e.tagNameCheck,me)||_e.tagNameCheck instanceof Function&&_e.tagNameCheck(me)))return!1;if(Vr&&!tt[me]){const nt=Q(H)||H.parentNode,It=K(H)||H.childNodes;if(It&&nt){const ht=It.length;for(let jt=ht-1;jt>=0;--jt){const zt=V(It[jt],!0);zt.__removalCount=(H.__removalCount||0)+1,nt.insertBefore(zt,B(H))}}}return vt(H),!0}return H instanceof p&&!wt(H)||(me==="noscript"||me==="noembed"||me==="noframes")&&xn(/<\/no(script|embed|frames)/i,H.innerHTML)?(vt(H),!0):(kn&&H.nodeType===hu.text&&(le=H.textContent,Cf([j,I,pe],nt=>{le=uu(le,nt," ")}),H.textContent!==le&&(lu(e.removed,{element:H.cloneNode()}),H.textContent=le)),Qt(k.afterSanitizeElements,H,null),!1)},Un=function(H,le,me){if(pi&&(le==="id"||le==="name")&&(me in t||me in Wi))return!1;if(!(qn&&!St[le]&&xn(Oe,le))){if(!(et&&xn(J,le))){if(!oe[le]||St[le]){if(!(jn(H)&&(_e.tagNameCheck instanceof RegExp&&xn(_e.tagNameCheck,H)||_e.tagNameCheck instanceof Function&&_e.tagNameCheck(H))&&(_e.attributeNameCheck instanceof RegExp&&xn(_e.attributeNameCheck,le)||_e.attributeNameCheck instanceof Function&&_e.attributeNameCheck(le))||le==="is"&&_e.allowCustomizedBuiltInElements&&(_e.tagNameCheck instanceof RegExp&&xn(_e.tagNameCheck,me)||_e.tagNameCheck instanceof Function&&_e.tagNameCheck(me))))return!1}else if(!Xi[le]){if(!xn(L,uu(me,fe,""))){if(!((le==="src"||le==="xlink:href"||le==="href")&&H!=="script"&&s2(me,"data:")===0&&pn[H])){if(!(yr&&!xn(ce,uu(me,fe,"")))){if(me)return!1}}}}}}return!0},jn=function(H){return H!=="annotation-xml"&&J0(H,Pe)},Xt=function(H){Qt(k.beforeSanitizeAttributes,H,null);const{attributes:le}=H;if(!le||Ji(H))return;const me={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:oe,forceKeepAttr:void 0};let nt=le.length;for(;nt--;){const It=le[nt],{name:ht,namespaceURI:jt,value:zt}=It,mn=mt(ht);let $e=ht==="value"?zt:o2(zt);if(me.attrName=mn,me.attrValue=$e,me.keepAttr=!0,me.forceKeepAttr=void 0,Qt(k.uponSanitizeAttribute,H,me),$e=me.attrValue,Lr&&(mn==="id"||mn==="name")&&(Br(ht,H),$e=al+$e),vr&&xn(/((--!?|])>)|<\/(style|title)/i,$e)){Br(ht,H);continue}if(me.forceKeepAttr||(Br(ht,H),!me.keepAttr))continue;if(!Wn&&xn(/\/>/i,$e)){Br(ht,H);continue}kn&&Cf([j,I,pe],Ga=>{$e=uu($e,Ga," ")});const Fr=mt(H.nodeName);if(Un(Fr,mn,$e)){if(ie&&typeof w=="object"&&typeof w.getAttributeType=="function"&&!jt)switch(w.getAttributeType(Fr,mn)){case"TrustedHTML":{$e=ie.createHTML($e);break}case"TrustedScriptURL":{$e=ie.createScriptURL($e);break}}try{jt?H.setAttributeNS(jt,ht,$e):H.setAttribute(ht,$e),Ji(H)?vt(H):Z0(e.removed)}catch{}}}Qt(k.afterSanitizeAttributes,H,null)},_t=function ve(H){let le=null;const me=Ar(H);for(Qt(k.beforeSanitizeShadowDOM,H,null);le=me.nextNode();)Qt(k.uponSanitizeShadowNode,le,null),tr(le),Xt(le),le.content instanceof l&&ve(le.content);Qt(k.afterSanitizeShadowDOM,H,null)};return e.sanitize=function(ve){let H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},le=null,me=null,nt=null,It=null;if(Ur=!ve,Ur&&(ve="<!-->"),typeof ve!="string"&&!Hr(ve))if(typeof ve.toString=="function"){if(ve=ve.toString(),typeof ve!="string")throw cu("dirty is not a string, aborting")}else throw cu("toString is not a function");if(!e.isSupported)return ve;if(di||Zi(H),e.removed=[],typeof ve=="string"&&(_r=!1),_r){if(ve.nodeName){const zt=mt(ve.nodeName);if(!te[zt]||Se[zt])throw cu("root node is forbidden and cannot be sanitized in-place")}}else if(ve instanceof d)le=Ls("<!---->"),me=le.ownerDocument.importNode(ve,!0),me.nodeType===hu.element&&me.nodeName==="BODY"||me.nodeName==="HTML"?le=me:le.appendChild(me);else{if(!Vt&&!kn&&!Sn&&ve.indexOf("<")===-1)return ie&&Mr?ie.createHTML(ve):ve;if(le=Ls(ve),!le)return Vt?null:Mr?D:""}le&&$i&&vt(le.firstChild);const ht=Ar(_r?ve:le);for(;nt=ht.nextNode();)tr(nt),Xt(nt),nt.content instanceof l&&_t(nt.content);if(_r)return ve;if(Vt){if(Qi)for(It=R.call(le.ownerDocument);le.firstChild;)It.appendChild(le.firstChild);else It=le;return(oe.shadowroot||oe.shadowrootmode)&&(It=N.call(i,It,!0)),It}let jt=Sn?le.outerHTML:le.innerHTML;return Sn&&te["!doctype"]&&le.ownerDocument&&le.ownerDocument.doctype&&le.ownerDocument.doctype.name&&xn(TA,le.ownerDocument.doctype.name)&&(jt="<!DOCTYPE "+le.ownerDocument.doctype.name+`>
`+jt),kn&&Cf([j,I,pe],zt=>{jt=uu(jt,zt," ")}),ie&&Mr?ie.createHTML(jt):jt},e.setConfig=function(){let ve=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Zi(ve),di=!0},e.clearConfig=function(){wn=null,di=!1},e.isValidAttribute=function(ve,H,le){wn||Zi({});const me=mt(ve),nt=mt(H);return Un(me,nt,le)},e.addHook=function(ve,H){typeof H=="function"&&lu(k[ve],H)},e.removeHook=function(ve,H){if(H!==void 0){const le=i2(k[ve],H);return le===-1?void 0:a2(k[ve],le,1)[0]}return Z0(k[ve])},e.removeHooks=function(ve){k[ve]=[]},e.removeAllHooks=function(){k=ab()},e}var AA=SA();function T2(){const[r,e]=M.useState(""),[t,i]=M.useState(""),[s,l]=M.useState(""),[c,d]=M.useState(""),[p,m]=M.useState(""),[v,b]=M.useState(""),T="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAIK8vMtGcFg41fpEHnQ1ndzth2JpjTM4z9iYpvFfbZ4F-NAb6SkNludIrfR3B1a65I8&usqp=CAU",w=async O=>{if(O.preventDefault(),v&&new Date(v)<new Date(p)){alert("End date cannot be before the start date.");return}try{const V=AA.sanitize(c,{FORBID_ATTR:["style"],ALLOWED_TAGS:["b","i","u","strong","em","ul","ol","li","p","br","div","span","code"]});await il(gr(an,"experience"),{company:r,logoURL:t||T,role:s,description:V,startDate:pt.fromDate(new Date(p)),...v&&{endDate:pt.fromDate(new Date(v))}}),e(""),i(""),l(""),d(""),m(""),b(""),alert("Experience added successfully!")}catch(V){console.error("Error adding document: ",V),alert("Error adding experience")}};return U.jsxs("div",{style:{marginBottom:"2rem"},children:[U.jsx("h2",{children:"💼 Add Experience"}),U.jsxs("form",{onSubmit:w,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[U.jsx("input",{type:"text",value:r,onChange:O=>e(O.target.value),placeholder:"Company",required:!0}),U.jsx("input",{type:"text",value:t,onChange:O=>i(O.target.value),placeholder:"Logo URL"}),U.jsx("input",{type:"text",value:s,onChange:O=>l(O.target.value),placeholder:"Role",required:!0}),U.jsx(zh,{value:c,onTextChange:O=>d(O.htmlValue),style:{height:"320px",background:"white",color:"black",fontSize:"16px"},className:"resizable-editor",placeholder:"Description",required:!0}),U.jsx("input",{type:"date",value:p,onChange:O=>m(O.target.value),required:!0}),U.jsx("input",{type:"date",value:v,onChange:O=>b(O.target.value),placeholder:"End Date (optional)"}),U.jsx("button",{type:"submit",style:{padding:"0.5rem 1rem",fontSize:"1rem",backgroundColor:"#007BFF",color:"white",border:"none",borderRadius:"5px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",transition:"transform 0.2s, box-shadow 0.2s",cursor:"pointer"},onMouseEnter:O=>{O.target.style.transform="scale(1.05)",O.target.style.boxShadow="0 6px 8px rgba(0, 0, 0, 0.2)"},onMouseLeave:O=>{O.target.style.transform="scale(1)",O.target.style.boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"},children:"Add Experience"})]})]})}function S2(){const[r,e]=M.useState([]),t=async()=>{const l=(await nl(gr(an,"experience"))).docs.map(c=>({id:c.id,...c.data()}));e(l)},i=async s=>{window.confirm("Are you sure you want to delete this experience entry?")&&(await rl(Ps(an,"experience",s)),t())};return M.useEffect(()=>{t()},[]),U.jsxs("div",{style:{marginTop:"2rem"},children:[U.jsx("h2",{children:"💼 Your Experiences"}),r.length===0?U.jsx("p",{children:"No experience entries found."}):U.jsx("ul",{style:{listStyle:"none",padding:0},children:r.map(s=>{var l;return U.jsxs("li",{style:{border:"1px solid #ccc",padding:"1rem",marginBottom:"1rem"},children:[U.jsx("h3",{children:s.company}),U.jsx("img",{src:s.logoURL,alt:s.company,style:{height:"40px",marginBottom:"0.5rem"}}),U.jsx("p",{children:s.role}),U.jsx("div",{dangerouslySetInnerHTML:{__html:s.description.replace(/<ol>/g,"<ul>").replace(/<\/ol>/g,"</ul>")},style:{color:"inherit"}}),U.jsxs("p",{children:[(l=s.startDate)==null?void 0:l.toDate().toLocaleDateString()," - "," ",s.endDate?s.endDate.toDate().toLocaleDateString():"Present"]}),U.jsx("button",{style:{marginTop:"0.5rem",backgroundColor:"crimson",color:"white"},onClick:()=>i(s.id),children:"Delete"})]},s.id)})})]})}function A2(){return U.jsxs("div",{children:[U.jsx("h2",{children:"Experience"}),U.jsx(T2,{}),U.jsx(S2,{})]})}function w2(){const[r,e]=M.useState(""),[t,i]=M.useState(""),[s,l]=M.useState(""),c=async d=>{d.preventDefault();try{await il(gr(an,"publications"),{title:r,url:t,date:pt.fromDate(new Date(s))}),e(""),i(""),l(""),alert("Publication added successfully!")}catch(p){console.error("Error adding document: ",p),alert("Error adding publication")}};return U.jsxs("div",{style:{marginBottom:"2rem"},children:[U.jsx("h2",{children:"📚 Add Publication"}),U.jsxs("form",{onSubmit:c,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[U.jsx("input",{type:"text",value:r,onChange:d=>e(d.target.value),placeholder:"Publication Title",required:!0}),U.jsx("input",{type:"url",value:t,onChange:d=>i(d.target.value),placeholder:"Publication URL",required:!0}),U.jsx("input",{type:"date",value:s,onChange:d=>l(d.target.value),required:!0}),U.jsx("button",{type:"submit",children:"Add Publication"})]})]})}function R2(){const[r,e]=M.useState([]),t=async()=>{const l=(await nl(gr(an,"publications"))).docs.map(c=>({id:c.id,...c.data()}));e(l)},i=async s=>{window.confirm("Are you sure you want to delete this publication?")&&(await rl(Ps(an,"publications",s)),t())};return M.useEffect(()=>{t()},[]),U.jsxs("div",{style:{marginTop:"2rem"},children:[U.jsx("h2",{children:"📚 Your Publications"}),r.length===0?U.jsx("p",{children:"No publications found."}):U.jsx("ul",{style:{listStyle:"none",padding:0},children:r.map(s=>{var l;return U.jsxs("li",{style:{border:"1px solid #ccc",padding:"1rem",marginBottom:"1rem"},children:[U.jsx("h3",{children:s.title}),U.jsx("p",{children:U.jsx("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",children:s.url})}),U.jsx("p",{children:(l=s.date)==null?void 0:l.toDate().toLocaleDateString()}),U.jsx("button",{style:{marginTop:"0.5rem",backgroundColor:"crimson",color:"white"},onClick:()=>i(s.id),children:"Delete"})]},s.id)})})]})}function C2(){return U.jsxs("div",{children:[U.jsx("h2",{children:"Publication"}),U.jsx(w2,{}),U.jsx(R2,{})]})}function I2(){const[r,e]=M.useState(""),[t,i]=M.useState(""),[s,l]=M.useState([""]),[c,d]=M.useState(""),p=(T,w)=>{const O=[...s];O[T]=w,l(O)},m=()=>{l([...s,""])},v=T=>{const w=s.filter((O,V)=>V!==T);l(w)},b=async T=>{T.preventDefault();try{const w=AA.sanitize(t,{FORBID_ATTR:["style"],ALLOWED_TAGS:["b","i","u","strong","em","ul","ol","li","p","br","div","span","code"]});await il(gr(an,"blogs"),{title:r,description:w,imageURLs:s,date:pt.fromDate(new Date(c))}),e(""),i(""),l([""]),d(""),alert("Blog added successfully!")}catch(w){console.error("Error adding document: ",w),alert("Error adding blog")}};return U.jsxs("div",{style:{marginBottom:"2rem"},children:[U.jsx("h2",{children:"📝 Add Blog"}),U.jsxs("form",{onSubmit:b,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[U.jsx("input",{type:"text",value:r,onChange:T=>e(T.target.value),placeholder:"Blog Title",required:!0}),U.jsx(zh,{value:t,onTextChange:T=>i(T.htmlValue),style:{height:"320px",background:"white",color:"blue",fontSize:"16px"},className:"resizable-editor",placeholder:"Description",required:!0}),U.jsxs("div",{children:[U.jsx("label",{children:"Image URLs:"}),s.map((T,w)=>U.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[U.jsx("input",{type:"url",value:T,onChange:O=>p(w,O.target.value),placeholder:"Image URL",required:!0}),s.length>1&&U.jsx("button",{type:"button",onClick:()=>v(w),children:"Remove"})]},w)),U.jsx("button",{type:"button",onClick:m,style:{marginTop:"0.5rem"},children:"Add Image URL"})]}),U.jsx("input",{type:"date",value:c,onChange:T=>d(T.target.value),required:!0}),U.jsx("button",{type:"submit",children:"Add Blog"})]})]})}var du={},Ro={},xf={},vs={},_s={},um={},sb;function wA(){return sb||(sb=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Doctype=r.CDATA=r.Tag=r.Style=r.Script=r.Comment=r.Directive=r.Text=r.Root=r.isTag=r.ElementType=void 0;var e;(function(i){i.Root="root",i.Text="text",i.Directive="directive",i.Comment="comment",i.Script="script",i.Style="style",i.Tag="tag",i.CDATA="cdata",i.Doctype="doctype"})(e=r.ElementType||(r.ElementType={}));function t(i){return i.type===e.Tag||i.type===e.Script||i.type===e.Style}r.isTag=t,r.Root=e.Root,r.Text=e.Text,r.Directive=e.Directive,r.Comment=e.Comment,r.Script=e.Script,r.Style=e.Style,r.Tag=e.Tag,r.CDATA=e.CDATA,r.Doctype=e.Doctype}(um)),um}var Ne={},ob;function lb(){if(ob)return Ne;ob=1;var r=Ne&&Ne.__extends||function(){var D=function(G,C){return D=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(R,x){R.__proto__=x}||function(R,x){for(var N in x)Object.prototype.hasOwnProperty.call(x,N)&&(R[N]=x[N])},D(G,C)};return function(G,C){if(typeof C!="function"&&C!==null)throw new TypeError("Class extends value "+String(C)+" is not a constructor or null");D(G,C);function R(){this.constructor=G}G.prototype=C===null?Object.create(C):(R.prototype=C.prototype,new R)}}(),e=Ne&&Ne.__assign||function(){return e=Object.assign||function(D){for(var G,C=1,R=arguments.length;C<R;C++){G=arguments[C];for(var x in G)Object.prototype.hasOwnProperty.call(G,x)&&(D[x]=G[x])}return D},e.apply(this,arguments)};Object.defineProperty(Ne,"__esModule",{value:!0}),Ne.cloneNode=Ne.hasChildren=Ne.isDocument=Ne.isDirective=Ne.isComment=Ne.isText=Ne.isCDATA=Ne.isTag=Ne.Element=Ne.Document=Ne.CDATA=Ne.NodeWithChildren=Ne.ProcessingInstruction=Ne.Comment=Ne.Text=Ne.DataNode=Ne.Node=void 0;var t=wA(),i=function(){function D(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(D.prototype,"parentNode",{get:function(){return this.parent},set:function(G){this.parent=G},enumerable:!1,configurable:!0}),Object.defineProperty(D.prototype,"previousSibling",{get:function(){return this.prev},set:function(G){this.prev=G},enumerable:!1,configurable:!0}),Object.defineProperty(D.prototype,"nextSibling",{get:function(){return this.next},set:function(G){this.next=G},enumerable:!1,configurable:!0}),D.prototype.cloneNode=function(G){return G===void 0&&(G=!1),Q(this,G)},D}();Ne.Node=i;var s=function(D){r(G,D);function G(C){var R=D.call(this)||this;return R.data=C,R}return Object.defineProperty(G.prototype,"nodeValue",{get:function(){return this.data},set:function(C){this.data=C},enumerable:!1,configurable:!0}),G}(i);Ne.DataNode=s;var l=function(D){r(G,D);function G(){var C=D!==null&&D.apply(this,arguments)||this;return C.type=t.ElementType.Text,C}return Object.defineProperty(G.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),G}(s);Ne.Text=l;var c=function(D){r(G,D);function G(){var C=D!==null&&D.apply(this,arguments)||this;return C.type=t.ElementType.Comment,C}return Object.defineProperty(G.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),G}(s);Ne.Comment=c;var d=function(D){r(G,D);function G(C,R){var x=D.call(this,R)||this;return x.name=C,x.type=t.ElementType.Directive,x}return Object.defineProperty(G.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),G}(s);Ne.ProcessingInstruction=d;var p=function(D){r(G,D);function G(C){var R=D.call(this)||this;return R.children=C,R}return Object.defineProperty(G.prototype,"firstChild",{get:function(){var C;return(C=this.children[0])!==null&&C!==void 0?C:null},enumerable:!1,configurable:!0}),Object.defineProperty(G.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(G.prototype,"childNodes",{get:function(){return this.children},set:function(C){this.children=C},enumerable:!1,configurable:!0}),G}(i);Ne.NodeWithChildren=p;var m=function(D){r(G,D);function G(){var C=D!==null&&D.apply(this,arguments)||this;return C.type=t.ElementType.CDATA,C}return Object.defineProperty(G.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),G}(p);Ne.CDATA=m;var v=function(D){r(G,D);function G(){var C=D!==null&&D.apply(this,arguments)||this;return C.type=t.ElementType.Root,C}return Object.defineProperty(G.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),G}(p);Ne.Document=v;var b=function(D){r(G,D);function G(C,R,x,N){x===void 0&&(x=[]),N===void 0&&(N=C==="script"?t.ElementType.Script:C==="style"?t.ElementType.Style:t.ElementType.Tag);var k=D.call(this,x)||this;return k.name=C,k.attribs=R,k.type=N,k}return Object.defineProperty(G.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(G.prototype,"tagName",{get:function(){return this.name},set:function(C){this.name=C},enumerable:!1,configurable:!0}),Object.defineProperty(G.prototype,"attributes",{get:function(){var C=this;return Object.keys(this.attribs).map(function(R){var x,N;return{name:R,value:C.attribs[R],namespace:(x=C["x-attribsNamespace"])===null||x===void 0?void 0:x[R],prefix:(N=C["x-attribsPrefix"])===null||N===void 0?void 0:N[R]}})},enumerable:!1,configurable:!0}),G}(p);Ne.Element=b;function T(D){return(0,t.isTag)(D)}Ne.isTag=T;function w(D){return D.type===t.ElementType.CDATA}Ne.isCDATA=w;function O(D){return D.type===t.ElementType.Text}Ne.isText=O;function V(D){return D.type===t.ElementType.Comment}Ne.isComment=V;function P(D){return D.type===t.ElementType.Directive}Ne.isDirective=P;function B(D){return D.type===t.ElementType.Root}Ne.isDocument=B;function K(D){return Object.prototype.hasOwnProperty.call(D,"children")}Ne.hasChildren=K;function Q(D,G){G===void 0&&(G=!1);var C;if(O(D))C=new l(D.data);else if(V(D))C=new c(D.data);else if(T(D)){var R=G?ie(D.children):[],x=new b(D.name,e({},D.attribs),R);R.forEach(function(I){return I.parent=x}),D.namespace!=null&&(x.namespace=D.namespace),D["x-attribsNamespace"]&&(x["x-attribsNamespace"]=e({},D["x-attribsNamespace"])),D["x-attribsPrefix"]&&(x["x-attribsPrefix"]=e({},D["x-attribsPrefix"])),C=x}else if(w(D)){var R=G?ie(D.children):[],N=new m(R);R.forEach(function(pe){return pe.parent=N}),C=N}else if(B(D)){var R=G?ie(D.children):[],k=new v(R);R.forEach(function(pe){return pe.parent=k}),D["x-mode"]&&(k["x-mode"]=D["x-mode"]),C=k}else if(P(D)){var j=new d(D.name,D.data);D["x-name"]!=null&&(j["x-name"]=D["x-name"],j["x-publicId"]=D["x-publicId"],j["x-systemId"]=D["x-systemId"]),C=j}else throw new Error("Not implemented yet: ".concat(D.type));return C.startIndex=D.startIndex,C.endIndex=D.endIndex,D.sourceCodeLocation!=null&&(C.sourceCodeLocation=D.sourceCodeLocation),C}Ne.cloneNode=Q;function ie(D){for(var G=D.map(function(R){return Q(R,!0)}),C=1;C<G.length;C++)G[C].prev=G[C-1],G[C-1].next=G[C];return G}return Ne}var ub;function RA(){return ub||(ub=1,function(r){var e=_s&&_s.__createBinding||(Object.create?function(d,p,m,v){v===void 0&&(v=m);var b=Object.getOwnPropertyDescriptor(p,m);(!b||("get"in b?!p.__esModule:b.writable||b.configurable))&&(b={enumerable:!0,get:function(){return p[m]}}),Object.defineProperty(d,v,b)}:function(d,p,m,v){v===void 0&&(v=m),d[v]=p[m]}),t=_s&&_s.__exportStar||function(d,p){for(var m in d)m!=="default"&&!Object.prototype.hasOwnProperty.call(p,m)&&e(p,d,m)};Object.defineProperty(r,"__esModule",{value:!0}),r.DomHandler=void 0;var i=wA(),s=lb();t(lb(),r);var l={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},c=function(){function d(p,m,v){this.dom=[],this.root=new s.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof m=="function"&&(v=m,m=l),typeof p=="object"&&(m=p,p=void 0),this.callback=p??null,this.options=m??l,this.elementCB=v??null}return d.prototype.onparserinit=function(p){this.parser=p},d.prototype.onreset=function(){this.dom=[],this.root=new s.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},d.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},d.prototype.onerror=function(p){this.handleCallback(p)},d.prototype.onclosetag=function(){this.lastNode=null;var p=this.tagStack.pop();this.options.withEndIndices&&(p.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(p)},d.prototype.onopentag=function(p,m){var v=this.options.xmlMode?i.ElementType.Tag:void 0,b=new s.Element(p,m,void 0,v);this.addNode(b),this.tagStack.push(b)},d.prototype.ontext=function(p){var m=this.lastNode;if(m&&m.type===i.ElementType.Text)m.data+=p,this.options.withEndIndices&&(m.endIndex=this.parser.endIndex);else{var v=new s.Text(p);this.addNode(v),this.lastNode=v}},d.prototype.oncomment=function(p){if(this.lastNode&&this.lastNode.type===i.ElementType.Comment){this.lastNode.data+=p;return}var m=new s.Comment(p);this.addNode(m),this.lastNode=m},d.prototype.oncommentend=function(){this.lastNode=null},d.prototype.oncdatastart=function(){var p=new s.Text(""),m=new s.CDATA([p]);this.addNode(m),p.parent=m,this.lastNode=p},d.prototype.oncdataend=function(){this.lastNode=null},d.prototype.onprocessinginstruction=function(p,m){var v=new s.ProcessingInstruction(p,m);this.addNode(v)},d.prototype.handleCallback=function(p){if(typeof this.callback=="function")this.callback(p,this.dom);else if(p)throw p},d.prototype.addNode=function(p){var m=this.tagStack[this.tagStack.length-1],v=m.children[m.children.length-1];this.options.withStartIndices&&(p.startIndex=this.parser.startIndex),this.options.withEndIndices&&(p.endIndex=this.parser.endIndex),m.children.push(p),v&&(p.prev=v,v.next=p),p.parent=m,this.lastNode=null},d}();r.DomHandler=c,r.default=c}(_s)),_s}var cm={},cb;function x2(){return cb||(cb=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.CARRIAGE_RETURN_PLACEHOLDER_REGEX=r.CARRIAGE_RETURN_PLACEHOLDER=r.CARRIAGE_RETURN_REGEX=r.CARRIAGE_RETURN=r.CASE_SENSITIVE_TAG_NAMES_MAP=r.CASE_SENSITIVE_TAG_NAMES=void 0,r.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],r.CASE_SENSITIVE_TAG_NAMES_MAP=r.CASE_SENSITIVE_TAG_NAMES.reduce(function(e,t){return e[t.toLowerCase()]=t,e},{}),r.CARRIAGE_RETURN="\r",r.CARRIAGE_RETURN_REGEX=new RegExp(r.CARRIAGE_RETURN,"g"),r.CARRIAGE_RETURN_PLACEHOLDER="__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_".concat(Date.now(),"__"),r.CARRIAGE_RETURN_PLACEHOLDER_REGEX=new RegExp(r.CARRIAGE_RETURN_PLACEHOLDER,"g")}(cm)),cm}var fb;function CA(){if(fb)return vs;fb=1,Object.defineProperty(vs,"__esModule",{value:!0}),vs.formatAttributes=i,vs.escapeSpecialCharacters=l,vs.revertEscapedCharacters=c,vs.formatDOM=d;var r=RA(),e=x2();function t(p){return e.CASE_SENSITIVE_TAG_NAMES_MAP[p]}function i(p){for(var m={},v=0,b=p.length;v<b;v++){var T=p[v];m[T.name]=T.value}return m}function s(p){p=p.toLowerCase();var m=t(p);return m||p}function l(p){return p.replace(e.CARRIAGE_RETURN_REGEX,e.CARRIAGE_RETURN_PLACEHOLDER)}function c(p){return p.replace(e.CARRIAGE_RETURN_PLACEHOLDER_REGEX,e.CARRIAGE_RETURN)}function d(p,m,v){m===void 0&&(m=null);for(var b=[],T,w=0,O=p.length;w<O;w++){var V=p[w];switch(V.nodeType){case 1:{var P=s(V.nodeName);T=new r.Element(P,i(V.attributes)),T.children=d(P==="template"?V.content.childNodes:V.childNodes,T);break}case 3:T=new r.Text(c(V.nodeValue));break;case 8:T=new r.Comment(V.nodeValue);break;default:continue}var B=b[w-1]||null;B&&(B.next=T),T.parent=m,T.prev=B,T.next=null,b.push(T)}return v&&(T=new r.ProcessingInstruction(v.substring(0,v.indexOf(" ")).toLowerCase(),v),T.next=b[0]||null,T.parent=m,b.unshift(T),b[1]&&(b[1].prev=b[0])),b}return vs}var hb;function O2(){if(hb)return xf;hb=1,Object.defineProperty(xf,"__esModule",{value:!0}),xf.default=V;var r=CA(),e="html",t="head",i="body",s=/<([a-zA-Z]+[0-9]?)/,l=/<head[^]*>/i,c=/<body[^]*>/i,d=function(P,B){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},p=function(P,B){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},m=typeof window=="object"&&window.DOMParser;if(typeof m=="function"){var v=new m,b="text/html";p=function(P,B){return B&&(P="<".concat(B,">").concat(P,"</").concat(B,">")),v.parseFromString(P,b)},d=p}if(typeof document=="object"&&document.implementation){var T=document.implementation.createHTMLDocument();d=function(P,B){if(B){var K=T.documentElement.querySelector(B);return K&&(K.innerHTML=P),T}return T.documentElement.innerHTML=P,T}}var w=typeof document=="object"&&document.createElement("template"),O;w&&w.content&&(O=function(P){return w.innerHTML=P,w.content.childNodes});function V(P){var B,K;P=(0,r.escapeSpecialCharacters)(P);var Q=P.match(s),ie=Q&&Q[1]?Q[1].toLowerCase():"";switch(ie){case e:{var D=p(P);if(!l.test(P)){var G=D.querySelector(t);(B=G==null?void 0:G.parentNode)===null||B===void 0||B.removeChild(G)}if(!c.test(P)){var G=D.querySelector(i);(K=G==null?void 0:G.parentNode)===null||K===void 0||K.removeChild(G)}return D.querySelectorAll(e)}case t:case i:{var C=d(P).querySelectorAll(ie);return c.test(P)&&l.test(P)?C[0].parentNode.childNodes:C}default:{if(O)return O(P);var G=d(P,i).querySelector(i);return G.childNodes}}}return xf}var db;function D2(){if(db)return Ro;db=1;var r=Ro&&Ro.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(Ro,"__esModule",{value:!0}),Ro.default=s;var e=r(O2()),t=CA(),i=/<(![a-zA-Z\s]+)>/;function s(l){if(typeof l!="string")throw new TypeError("First argument must be a string");if(!l)return[];var c=l.match(i),d=c?c[1]:void 0;return(0,t.formatDOM)((0,e.default)(l),null,d)}return Ro}var Of={},dr={},pu={},pb;function q2(){if(pb)return pu;pb=1;var r=0;pu.SAME=r;var e=1;return pu.CAMELCASE=e,pu.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1},pu}var mb;function k2(){if(mb)return dr;mb=1;const r=0,e=1,t=2,i=3,s=4,l=5,c=6;function d(D){return m.hasOwnProperty(D)?m[D]:null}function p(D,G,C,R,x,N,k){this.acceptsBooleans=G===t||G===i||G===s,this.attributeName=R,this.attributeNamespace=x,this.mustUseProperty=C,this.propertyName=D,this.type=G,this.sanitizeURL=N,this.removeEmptyString=k}const m={};["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"].forEach(D=>{m[D]=new p(D,r,!1,D,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(([D,G])=>{m[D]=new p(D,e,!1,G,null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(D=>{m[D]=new p(D,t,!1,D.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(D=>{m[D]=new p(D,t,!1,D,null,!1,!1)}),["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(D=>{m[D]=new p(D,i,!1,D.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(D=>{m[D]=new p(D,i,!0,D,null,!1,!1)}),["capture","download"].forEach(D=>{m[D]=new p(D,s,!1,D,null,!1,!1)}),["cols","rows","size","span"].forEach(D=>{m[D]=new p(D,c,!1,D,null,!1,!1)}),["rowSpan","start"].forEach(D=>{m[D]=new p(D,l,!1,D.toLowerCase(),null,!1,!1)});const b=/[\-\:]([a-z])/g,T=D=>D[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(D=>{const G=D.replace(b,T);m[G]=new p(G,e,!1,D,null,!1,!1)}),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(D=>{const G=D.replace(b,T);m[G]=new p(G,e,!1,D,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(D=>{const G=D.replace(b,T);m[G]=new p(G,e,!1,D,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(D=>{m[D]=new p(D,e,!1,D.toLowerCase(),null,!1,!1)});const w="xlinkHref";m[w]=new p("xlinkHref",e,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(D=>{m[D]=new p(D,e,!1,D.toLowerCase(),null,!0,!0)});const{CAMELCASE:O,SAME:V,possibleStandardNames:P}=q2(),K=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD"+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",Q=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+K+"]*$")),ie=Object.keys(P).reduce((D,G)=>{const C=P[G];return C===V?D[G]=G:C===O?D[G.toLowerCase()]=G:D[G]=C,D},{});return dr.BOOLEAN=i,dr.BOOLEANISH_STRING=t,dr.NUMERIC=l,dr.OVERLOADED_BOOLEAN=s,dr.POSITIVE_NUMERIC=c,dr.RESERVED=r,dr.STRING=e,dr.getPropertyInfo=d,dr.isCustomAttribute=Q,dr.possibleStandardNames=ie,dr}var mu={},Co={},fm,gb;function N2(){if(gb)return fm;gb=1;var r=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,e=/\n/g,t=/^\s*/,i=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,s=/^:\s*/,l=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,d=/^\s+|\s+$/g,p=`
`,m="/",v="*",b="",T="comment",w="declaration";fm=function(V,P){if(typeof V!="string")throw new TypeError("First argument must be a string");if(!V)return[];P=P||{};var B=1,K=1;function Q(I){var pe=I.match(e);pe&&(B+=pe.length);var Oe=I.lastIndexOf(p);K=~Oe?I.length-Oe:K+I.length}function ie(){var I={line:B,column:K};return function(pe){return pe.position=new D(I),R(),pe}}function D(I){this.start=I,this.end={line:B,column:K},this.source=P.source}D.prototype.content=V;function G(I){var pe=new Error(P.source+":"+B+":"+K+": "+I);if(pe.reason=I,pe.filename=P.source,pe.line=B,pe.column=K,pe.source=V,!P.silent)throw pe}function C(I){var pe=I.exec(V);if(pe){var Oe=pe[0];return Q(Oe),V=V.slice(Oe.length),pe}}function R(){C(t)}function x(I){var pe;for(I=I||[];pe=N();)pe!==!1&&I.push(pe);return I}function N(){var I=ie();if(!(m!=V.charAt(0)||v!=V.charAt(1))){for(var pe=2;b!=V.charAt(pe)&&(v!=V.charAt(pe)||m!=V.charAt(pe+1));)++pe;if(pe+=2,b===V.charAt(pe-1))return G("End of comment missing");var Oe=V.slice(2,pe-2);return K+=2,Q(Oe),V=V.slice(pe),K+=2,I({type:T,comment:Oe})}}function k(){var I=ie(),pe=C(i);if(pe){if(N(),!C(s))return G("property missing ':'");var Oe=C(l),J=I({type:w,property:O(pe[0].replace(r,b)),value:Oe?O(Oe[0].replace(r,b)):b});return C(c),J}}function j(){var I=[];x(I);for(var pe;pe=k();)pe!==!1&&(I.push(pe),x(I));return I}return R(),j()};function O(V){return V?V.replace(d,b):b}return fm}var yb;function P2(){if(yb)return Co;yb=1;var r=Co&&Co.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(Co,"__esModule",{value:!0}),Co.default=t;var e=r(N2());function t(i,s){var l=null;if(!i||typeof i!="string")return l;var c=(0,e.default)(i),d=typeof s=="function";return c.forEach(function(p){if(p.type==="declaration"){var m=p.property,v=p.value;d?s(m,v,p):v&&(l=l||{},l[m]=v)}}),l}return Co}var gu={},vb;function M2(){if(vb)return gu;vb=1,Object.defineProperty(gu,"__esModule",{value:!0}),gu.camelCase=void 0;var r=/^--[a-zA-Z0-9_-]+$/,e=/-([a-z])/g,t=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,s=/^-(ms)-/,l=function(m){return!m||t.test(m)||r.test(m)},c=function(m,v){return v.toUpperCase()},d=function(m,v){return"".concat(v,"-")},p=function(m,v){return v===void 0&&(v={}),l(m)?m:(m=m.toLowerCase(),v.reactCompat?m=m.replace(s,d):m=m.replace(i,d),m.replace(e,c))};return gu.camelCase=p,gu}var yu,_b;function L2(){if(_b)return yu;_b=1;var r=yu&&yu.__importDefault||function(s){return s&&s.__esModule?s:{default:s}},e=r(P2()),t=M2();function i(s,l){var c={};return!s||typeof s!="string"||(0,e.default)(s,function(d,p){d&&p&&(c[(0,t.camelCase)(d,l)]=p)}),c}return i.default=i,yu=i,yu}var Eb;function IA(){return Eb||(Eb=1,function(r){var e=mu&&mu.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(r,"__esModule",{value:!0}),r.returnFirstArg=r.canTextBeChildOfNode=r.ELEMENTS_WITH_NO_TEXT_CHILDREN=r.PRESERVE_CUSTOM_ATTRIBUTES=void 0,r.isCustomComponent=l,r.setStyleProp=d;var t=Bu(),i=e(L2()),s=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);function l(v,b){return v.includes("-")?!s.has(v):!!(b&&typeof b.is=="string")}var c={reactCompat:!0};function d(v,b){if(typeof v=="string"){if(!v.trim()){b.style={};return}try{b.style=(0,i.default)(v,c)}catch{b.style={}}}}r.PRESERVE_CUSTOM_ATTRIBUTES=Number(t.version.split(".")[0])>=16,r.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);var p=function(v){return!r.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(v.name)};r.canTextBeChildOfNode=p;var m=function(v){return v};r.returnFirstArg=m}(mu)),mu}var bb;function xA(){if(bb)return Of;bb=1,Object.defineProperty(Of,"__esModule",{value:!0}),Of.default=l;var r=k2(),e=IA(),t=["checked","value"],i=["input","select","textarea"],s={reset:!0,submit:!0};function l(d,p){d===void 0&&(d={});var m={},v=!!(d.type&&s[d.type]);for(var b in d){var T=d[b];if((0,r.isCustomAttribute)(b)){m[b]=T;continue}var w=b.toLowerCase(),O=c(w);if(O){var V=(0,r.getPropertyInfo)(O);switch(t.includes(O)&&i.includes(p)&&!v&&(O=c("default"+w)),m[O]=T,V&&V.type){case r.BOOLEAN:m[O]=!0;break;case r.OVERLOADED_BOOLEAN:T===""&&(m[O]=!0);break}continue}e.PRESERVE_CUSTOM_ATTRIBUTES&&(m[b]=T)}return(0,e.setStyleProp)(d.style,m),m}function c(d){return r.possibleStandardNames[d]}return Of}var Io={},Tb;function V2(){if(Tb)return Io;Tb=1;var r=Io&&Io.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(Io,"__esModule",{value:!0}),Io.default=l;var e=Bu(),t=r(xA()),i=IA(),s={cloneElement:e.cloneElement,createElement:e.createElement,isValidElement:e.isValidElement};function l(d,p){p===void 0&&(p={});for(var m=[],v=typeof p.replace=="function",b=p.transform||i.returnFirstArg,T=p.library||s,w=T.cloneElement,O=T.createElement,V=T.isValidElement,P=d.length,B=0;B<P;B++){var K=d[B];if(v){var Q=p.replace(K,B);if(V(Q)){P>1&&(Q=w(Q,{key:Q.key||B})),m.push(b(Q,K,B));continue}}if(K.type==="text"){var ie=!K.data.trim().length;if(ie&&K.parent&&!(0,i.canTextBeChildOfNode)(K.parent)||p.trim&&ie)continue;m.push(b(K.data,K,B));continue}var D=K,G={};c(D)?((0,i.setStyleProp)(D.attribs.style,D.attribs),G=D.attribs):D.attribs&&(G=(0,t.default)(D.attribs,D.name));var C=void 0;switch(K.type){case"script":case"style":K.children[0]&&(G.dangerouslySetInnerHTML={__html:K.children[0].data});break;case"tag":K.name==="textarea"&&K.children[0]?G.defaultValue=K.children[0].data:K.children&&K.children.length&&(C=l(K.children,p));break;default:continue}P>1&&(G.key=B),m.push(b(O(K.name,G,C),K,B))}return m.length===1?m[0]:m}function c(d){return i.PRESERVE_CUSTOM_ATTRIBUTES&&d.type==="tag"&&(0,i.isCustomComponent)(d.name,d.attribs)}return Io}var Sb;function U2(){return Sb||(Sb=1,function(r){var e=du&&du.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(r,"__esModule",{value:!0}),r.htmlToDOM=r.domToReact=r.attributesToProps=r.Text=r.ProcessingInstruction=r.Element=r.Comment=void 0,r.default=d;var t=e(D2());r.htmlToDOM=t.default;var i=e(xA());r.attributesToProps=i.default;var s=e(V2());r.domToReact=s.default;var l=RA();Object.defineProperty(r,"Comment",{enumerable:!0,get:function(){return l.Comment}}),Object.defineProperty(r,"Element",{enumerable:!0,get:function(){return l.Element}}),Object.defineProperty(r,"ProcessingInstruction",{enumerable:!0,get:function(){return l.ProcessingInstruction}}),Object.defineProperty(r,"Text",{enumerable:!0,get:function(){return l.Text}});var c={lowerCaseAttributeNames:!1};function d(p,m){if(typeof p!="string")throw new TypeError("First argument must be a string");return p?(0,s.default)((0,t.default)(p,(m==null?void 0:m.htmlparser2)||c),m):[]}}(du)),du}var j2=U2();const Ab=wb(j2);Ab.default;function z2(){const[r,e]=M.useState([]),t=async()=>{const l=(await nl(gr(an,"blogs"))).docs.map(c=>({id:c.id,...c.data()}));e(l)},i=async s=>{window.confirm("Are you sure you want to delete this blog?")&&(await rl(Ps(an,"blogs",s)),t())};return M.useEffect(()=>{t()},[]),U.jsxs("div",{style:{marginTop:"2rem"},children:[U.jsx("h2",{children:"📝 Your Blogs"}),r.length===0?U.jsx("p",{children:"No blogs found."}):U.jsx("ul",{style:{listStyle:"none",padding:0},children:r.map(s=>{var l;return U.jsxs("li",{style:{border:"1px solid #ccc",padding:"1rem",marginBottom:"1rem"},children:[U.jsx("h3",{children:s.title}),U.jsx("div",{dangerouslySetInnerHTML:{__html:s.description.replace(/<ol>/g,"<ul>").replace(/<\/ol>/g,"</ul>")},style:{color:"inherit"}}),U.jsx("div",{children:Array.isArray(s.imageURLs)&&s.imageURLs.map((c,d)=>U.jsx("img",{src:c,alt:`Blog Image ${d+1}`,style:{maxWidth:"100px",marginRight:"0.5rem"}},d))}),U.jsx("p",{children:(l=s.date)==null?void 0:l.toDate().toLocaleDateString()}),U.jsx("button",{style:{marginTop:"0.5rem",backgroundColor:"crimson",color:"white"},onClick:()=>i(s.id),children:"Delete"})]},s.id)})})]})}function B2(){return U.jsxs("div",{children:[U.jsx("h2",{children:"Blogs"}),U.jsx(I2,{}),U.jsx(z2,{})]})}function H2(){const[r,e]=M.useState(""),[t,i]=M.useState(""),s=async l=>{if(l.preventDefault(),!r||!t){alert("Please provide both a name and a URL.");return}try{await il(gr(an,"links"),{URLmap:{[r]:t}}),e(""),i(""),alert("Link added successfully!")}catch(c){console.error("Error adding link:",c),alert("Failed to add link.")}};return U.jsxs("div",{style:{marginBottom:"2rem"},children:[U.jsx("h2",{children:"🔗 Add Link"}),U.jsxs("form",{onSubmit:s,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[U.jsx("input",{type:"text",value:r,onChange:l=>e(l.target.value),placeholder:"Link Name",required:!0}),U.jsx("input",{type:"url",value:t,onChange:l=>i(l.target.value),placeholder:"Link URL",required:!0}),U.jsx("button",{type:"submit",children:"Add Link"})]})]})}function F2(){const[r,e]=M.useState([]),t=async()=>{const l=(await nl(gr(an,"links"))).docs.map(c=>({id:c.id,...c.data()}));e(l)},i=async s=>{window.confirm("Are you sure you want to delete this link?")&&(await rl(Ps(an,"links",s)),t())};return M.useEffect(()=>{t()},[]),U.jsxs("div",{style:{marginTop:"2rem"},children:[U.jsx("h2",{children:"🔗 Your Links"}),r.length===0?U.jsx("p",{children:"No links found."}):U.jsx("ul",{style:{listStyle:"none",padding:0},children:r.map(s=>{const[l,c]=Object.entries(s.URLmap)[0];return U.jsxs("li",{style:{border:"1px solid #ccc",padding:"1rem",marginBottom:"1rem"},children:[U.jsx("h3",{children:l}),U.jsx("p",{children:U.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:c})}),U.jsx("button",{style:{marginTop:"0.5rem",backgroundColor:"crimson",color:"white"},onClick:()=>i(s.id),children:"Delete"})]},s.id)})})]})}function G2(){return U.jsxs("div",{children:[U.jsx("h2",{children:"Links"}),U.jsx(H2,{}),U.jsx(F2,{})]})}function OA(){const[r,e]=M.useState(""),[t,i]=M.useState(""),[s,l]=M.useState(!1),[c,d]=M.useState(""),p=Ym(),m=async v=>{v.preventDefault();const b=Th();try{await dx(b,r,t),p("/home")}catch{d("Invalid email or password")}};return U.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh"},children:[U.jsxs("form",{onSubmit:m,style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[U.jsxs("h2",{style:{textAlign:"center",marginBottom:"1rem"},children:["This is"," ",U.jsx("span",{style:{background:"linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",backgroundSize:"200% auto",color:"white",backgroundClip:"text",WebkitTextFillColor:"transparent",animation:"gradientMove 5s ease infinite"},children:"🛠 my-port/Admin"}),", login to continue"]}),U.jsxs("p",{style:{textAlign:"center",fontSize:"0.9rem",color:"white"},children:[U.jsx("span",{role:"img","aria-label":"info",children:"ℹ️"})," Please use the email and password you added to the 🔥Firebase Console to log in."]}),c&&U.jsx("p",{style:{color:"red"},children:c}),U.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"100%"},children:[U.jsx("input",{type:"email",placeholder:"Email",value:r,onChange:v=>e(v.target.value),required:!0,style:{width:"100%",padding:"1rem",fontSize:"1rem",border:"1px solid var(--border-color, #ccc)",borderRadius:"5px",backgroundColor:"var(--background-color, #ffffff)",color:"var(--text-color, #000000)",transition:"background-color 0.3s, color 0.3s, border-color 0.3s",boxSizing:"border-box"}}),U.jsx("input",{type:"password",placeholder:"Password",value:t,onChange:v=>i(v.target.value),required:!0,style:{width:"100%",padding:"1rem",fontSize:"1rem",border:"1px solid var(--border-color, #ccc)",borderRadius:"5px",backgroundColor:"var(--background-color, #ffffff)",color:"var(--text-color, #000000)",transition:"background-color 0.3s, color 0.3s, border-color 0.3s",boxSizing:"border-box"}})]}),U.jsx("button",{type:"submit",style:{padding:"0.5rem 1rem",fontSize:"1rem",background:"linear-gradient(90deg, #007BFF, #00C6FF)",color:"white",border:"none",borderRadius:"5px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",transition:"transform 0.2s, box-shadow 0.2s",cursor:"pointer"},children:"Login"})]}),U.jsx("style",{children:`
          @keyframes gradientMove {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 200% 50%;
            }
          }
        `})]})}function DA(){const{currentUser:r,loading:e}=Xk(),t=Ym(),i=()=>{Th().signOut().then(()=>{t("/login")})};return e?U.jsx("p",{children:"Loading..."}):r?U.jsxs("div",{style:{marginTop:"2rem"},children:[U.jsx("h1",{style:{background:"linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",backgroundSize:"200% auto",color:"white",backgroundClip:"text",WebkitTextFillColor:"transparent",animation:"gradientMove 5s ease infinite"},children:"Welcome, build your portfolio from here ✨"}),U.jsxs("p",{style:{fontSize:"1.5rem"},children:["firebase-user:"," ",U.jsx("span",{style:{color:"#0909e8"},children:(r==null?void 0:r.email)||"User"})]}),U.jsx("button",{onClick:i,style:{marginTop:"1rem",padding:"0.5rem 1rem",fontSize:"1rem",backgroundColor:"crimson",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},children:"Logout"}),U.jsx("style",{children:`
          @keyframes gradientMove {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 200% 50%;
            }
          }
        `})]}):U.jsx("p",{children:"User not authenticated."})}function Y2(){const{theme:r,toggleTheme:e}=IO(),[t,i]=M.useState(null),[s,l]=M.useState(!0),c=Th();return M.useEffect(()=>{const d=AT(c,p=>{i(p),l(!1)});return()=>d()},[c]),s?U.jsx("p",{children:"Loading..."}):t?U.jsx("div",{"data-theme":r,style:{backgroundColor:r==="light"?"#ffffff":"#121212",color:r==="light"?"#000000":"#ffffff",minHeight:"100vh"},children:U.jsxs("div",{style:{padding:"10px",maxWidth:"600px",margin:"auto"},children:[U.jsx("h1",{children:"🛠 my-port/Admin"}),U.jsxs("nav",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem"},children:[U.jsxs("div",{children:[U.jsx(Mi,{to:"/home",style:{marginRight:"1rem"},children:"Home"}),U.jsx(Mi,{to:"/education",style:{marginRight:"1rem"},children:"Education"}),U.jsx(Mi,{to:"/projects",style:{marginRight:"1rem"},children:"Projects"}),U.jsx(Mi,{to:"/experience",style:{marginRight:"1rem"},children:"Experience"}),U.jsx(Mi,{to:"/publication",style:{marginRight:"1rem"},children:"Publication"}),U.jsx(Mi,{to:"/blog",style:{marginRight:"1rem"},children:"Blogs"}),U.jsx(Mi,{to:"/links",style:{marginRight:"1rem"},children:"Links"})]}),U.jsx("button",{onClick:e,"aria-label":"Toggle Theme",style:{all:"unset",cursor:"pointer",fontSize:"1.5rem",marginLeft:"auto"},children:r==="light"?"☀️":"🌙"})]}),U.jsxs(Lb,{children:[U.jsx(Or,{path:"/education",element:U.jsx(eN,{})}),U.jsx(Or,{path:"/projects",element:U.jsx(e2,{})}),U.jsx(Or,{path:"/experience",element:U.jsx(A2,{})}),U.jsx(Or,{path:"/publication",element:U.jsx(C2,{})}),U.jsx(Or,{path:"/blog",element:U.jsx(B2,{})}),U.jsx(Or,{path:"/links",element:U.jsx(G2,{})}),U.jsx(Or,{path:"/home",element:U.jsx(DA,{})})]}),U.jsx("footer",{style:{marginTop:"2rem",textAlign:"center"},children:U.jsx("p",{children:"© 2025 my-port/Admin"})})]})}):U.jsx(OA,{})}function K2(){return U.jsx(CO,{children:U.jsx(w1,{children:U.jsxs(Lb,{children:[U.jsx(Or,{path:"/login",element:U.jsx(OA,{})}),U.jsx(Or,{path:"/",element:U.jsx(DA,{})}),U.jsx(Or,{path:"/*",element:U.jsx(Y2,{})})]})})})}hR.createRoot(document.getElementById("root")).render(U.jsx(M.StrictMode,{children:U.jsx(K2,{})}));export{$2 as c,wb as g};
