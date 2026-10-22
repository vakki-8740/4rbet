function kk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ck(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _E={exports:{}},kh={},vE={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jl=Symbol.for("react.element"),xk=Symbol.for("react.portal"),bk=Symbol.for("react.fragment"),Nk=Symbol.for("react.strict_mode"),Dk=Symbol.for("react.profiler"),Vk=Symbol.for("react.provider"),Ok=Symbol.for("react.context"),Lk=Symbol.for("react.forward_ref"),Mk=Symbol.for("react.suspense"),Fk=Symbol.for("react.memo"),jk=Symbol.for("react.lazy"),av=Symbol.iterator;function Uk(t){return t===null||typeof t!="object"?null:(t=av&&t[av]||t["@@iterator"],typeof t=="function"?t:null)}var wE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},IE=Object.assign,EE={};function Mo(t,e,n){this.props=t,this.context=e,this.refs=EE,this.updater=n||wE}Mo.prototype.isReactComponent={};Mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function TE(){}TE.prototype=Mo.prototype;function Rm(t,e,n){this.props=t,this.context=e,this.refs=EE,this.updater=n||wE}var km=Rm.prototype=new TE;km.constructor=Rm;IE(km,Mo.prototype);km.isPureReactComponent=!0;var lv=Array.isArray,SE=Object.prototype.hasOwnProperty,Cm={current:null},AE={key:!0,ref:!0,__self:!0,__source:!0};function PE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)SE.call(e,r)&&!AE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Jl,type:t,key:s,ref:o,props:i,_owner:Cm.current}}function Bk(t,e){return{$$typeof:Jl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Jl}function zk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var uv=/\/+/g;function Jd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zk(""+t.key):e.toString(36)}function cc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Jl:case xk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Jd(o,0):r,lv(i)?(n="",t!=null&&(n=t.replace(uv,"$&/")+"/"),cc(i,e,n,"",function(c){return c})):i!=null&&(xm(i)&&(i=Bk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(uv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",lv(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Jd(s,a);o+=cc(s,e,n,u,i)}else if(u=Uk(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Jd(s,a++),o+=cc(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ju(t,e,n){if(t==null)return t;var r=[],i=0;return cc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function $k(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Dt={current:null},hc={transition:null},qk={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:hc,ReactCurrentOwner:Cm};function RE(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:ju,forEach:function(t,e,n){ju(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ju(t,function(){e++}),e},toArray:function(t){return ju(t,function(e){return e})||[]},only:function(t){if(!xm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=Mo;se.Fragment=bk;se.Profiler=Dk;se.PureComponent=Rm;se.StrictMode=Nk;se.Suspense=Mk;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qk;se.act=RE;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=IE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Cm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)SE.call(e,u)&&!AE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Jl,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:Ok,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Vk,_context:t},t.Consumer=t};se.createElement=PE;se.createFactory=function(t){var e=PE.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:Lk,render:t}};se.isValidElement=xm;se.lazy=function(t){return{$$typeof:jk,_payload:{_status:-1,_result:t},_init:$k}};se.memo=function(t,e){return{$$typeof:Fk,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=hc.transition;hc.transition={};try{t()}finally{hc.transition=e}};se.unstable_act=RE;se.useCallback=function(t,e){return Dt.current.useCallback(t,e)};se.useContext=function(t){return Dt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return Dt.current.useDeferredValue(t)};se.useEffect=function(t,e){return Dt.current.useEffect(t,e)};se.useId=function(){return Dt.current.useId()};se.useImperativeHandle=function(t,e,n){return Dt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return Dt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return Dt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return Dt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return Dt.current.useReducer(t,e,n)};se.useRef=function(t){return Dt.current.useRef(t)};se.useState=function(t){return Dt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return Dt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return Dt.current.useTransition()};se.version="18.3.1";vE.exports=se;var O=vE.exports;const Wk=Ck(O),Gk=kk({__proto__:null,default:Wk},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kk=O,Hk=Symbol.for("react.element"),Qk=Symbol.for("react.fragment"),Yk=Object.prototype.hasOwnProperty,Jk=Kk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xk={key:!0,ref:!0,__self:!0,__source:!0};function kE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Yk.call(e,r)&&!Xk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Hk,type:t,key:s,ref:o,props:i,_owner:Jk.current}}kh.Fragment=Qk;kh.jsx=kE;kh.jsxs=kE;_E.exports=kh;var m=_E.exports,CE={exports:{}},tn={},xE={exports:{}},bE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,Q){var X=U.length;U.push(Q);e:for(;0<X;){var le=X-1>>>1,fe=U[le];if(0<i(fe,Q))U[le]=Q,U[X]=fe,X=le;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var Q=U[0],X=U.pop();if(X!==Q){U[0]=X;e:for(var le=0,fe=U.length,Se=fe>>>1;le<Se;){var Gt=2*(le+1)-1,Wn=U[Gt],Gn=Gt+1,Kn=U[Gn];if(0>i(Wn,X))Gn<fe&&0>i(Kn,Wn)?(U[le]=Kn,U[Gn]=X,le=Gn):(U[le]=Wn,U[Gt]=X,le=Gt);else if(Gn<fe&&0>i(Kn,X))U[le]=Kn,U[Gn]=X,le=Gn;else break e}}return Q}function i(U,Q){var X=U.sortIndex-Q.sortIndex;return X!==0?X:U.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,g=3,v=!1,R=!1,k=!1,x=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(U){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=U)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function V(U){if(k=!1,T(U),!R)if(n(u)!==null)R=!0,Pn(j);else{var Q=n(c);Q!==null&&B(V,Q.startTime-U)}}function j(U,Q){R=!1,k&&(k=!1,E(_),_=-1),v=!0;var X=g;try{for(T(Q),f=n(u);f!==null&&(!(f.expirationTime>Q)||U&&!C());){var le=f.callback;if(typeof le=="function"){f.callback=null,g=f.priorityLevel;var fe=le(f.expirationTime<=Q);Q=t.unstable_now(),typeof fe=="function"?f.callback=fe:f===n(u)&&r(u),T(Q)}else r(u);f=n(u)}if(f!==null)var Se=!0;else{var Gt=n(c);Gt!==null&&B(V,Gt.startTime-Q),Se=!1}return Se}finally{f=null,g=X,v=!1}}var F=!1,I=null,_=-1,S=5,A=-1;function C(){return!(t.unstable_now()-A<S)}function b(){if(I!==null){var U=t.unstable_now();A=U;var Q=!0;try{Q=I(!0,U)}finally{Q?P():(F=!1,I=null)}}else F=!1}var P;if(typeof w=="function")P=function(){w(b)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,Wt=at.port2;at.port1.onmessage=b,P=function(){Wt.postMessage(null)}}else P=function(){x(b,0)};function Pn(U){I=U,F||(F=!0,P())}function B(U,Q){_=x(function(){U(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){R||v||(R=!0,Pn(j))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(U){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var X=g;g=Q;try{return U()}finally{g=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,Q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var X=g;g=U;try{return Q()}finally{g=X}},t.unstable_scheduleCallback=function(U,Q,X){var le=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?le+X:le):X=le,U){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=X+fe,U={id:d++,callback:Q,priorityLevel:U,startTime:X,expirationTime:fe,sortIndex:-1},X>le?(U.sortIndex=X,e(c,U),n(u)===null&&U===n(c)&&(k?(E(_),_=-1):k=!0,B(V,X-le))):(U.sortIndex=fe,e(u,U),R||v||(R=!0,Pn(j))),U},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(U){var Q=g;return function(){var X=g;g=Q;try{return U.apply(this,arguments)}finally{g=X}}}})(bE);xE.exports=bE;var Zk=xE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eC=O,Zt=Zk;function q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var NE=new Set,cl={};function gs(t,e){fo(t,e),fo(t+"Capture",e)}function fo(t,e){for(cl[t]=e,t=0;t<e.length;t++)NE.add(e[t])}var or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qf=Object.prototype.hasOwnProperty,tC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cv={},hv={};function nC(t){return qf.call(hv,t)?!0:qf.call(cv,t)?!1:tC.test(t)?hv[t]=!0:(cv[t]=!0,!1)}function rC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function iC(t,e,n,r){if(e===null||typeof e>"u"||rC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ft[t]=new Vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ft[e]=new Vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ft[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ft[t]=new Vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ft[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ft[t]=new Vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ft[t]=new Vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ft[t]=new Vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ft[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var bm=/[\-:]([a-z])/g;function Nm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bm,Nm);ft[e]=new Vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bm,Nm);ft[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bm,Nm);ft[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ft[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)});ft.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ft[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dm(t,e,n,r){var i=ft.hasOwnProperty(e)?ft[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(iC(e,n,i,r)&&(n=null),r||i===null?nC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pr=eC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Uu=Symbol.for("react.element"),Bs=Symbol.for("react.portal"),zs=Symbol.for("react.fragment"),Vm=Symbol.for("react.strict_mode"),Wf=Symbol.for("react.profiler"),DE=Symbol.for("react.provider"),VE=Symbol.for("react.context"),Om=Symbol.for("react.forward_ref"),Gf=Symbol.for("react.suspense"),Kf=Symbol.for("react.suspense_list"),Lm=Symbol.for("react.memo"),br=Symbol.for("react.lazy"),OE=Symbol.for("react.offscreen"),dv=Symbol.iterator;function ya(t){return t===null||typeof t!="object"?null:(t=dv&&t[dv]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,Xd;function Oa(t){if(Xd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xd=e&&e[1]||""}return`
`+Xd+t}var Zd=!1;function ef(t,e){if(!t||Zd)return"";Zd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Zd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oa(t):""}function sC(t){switch(t.tag){case 5:return Oa(t.type);case 16:return Oa("Lazy");case 13:return Oa("Suspense");case 19:return Oa("SuspenseList");case 0:case 2:case 15:return t=ef(t.type,!1),t;case 11:return t=ef(t.type.render,!1),t;case 1:return t=ef(t.type,!0),t;default:return""}}function Hf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zs:return"Fragment";case Bs:return"Portal";case Wf:return"Profiler";case Vm:return"StrictMode";case Gf:return"Suspense";case Kf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case VE:return(t.displayName||"Context")+".Consumer";case DE:return(t._context.displayName||"Context")+".Provider";case Om:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lm:return e=t.displayName||null,e!==null?e:Hf(t.type)||"Memo";case br:e=t._payload,t=t._init;try{return Hf(t(e))}catch{}}return null}function oC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hf(e);case 8:return e===Vm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ei(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function LE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function aC(t){var e=LE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bu(t){t._valueTracker||(t._valueTracker=aC(t))}function ME(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=LE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Oc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qf(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ei(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function FE(t,e){e=e.checked,e!=null&&Dm(t,"checked",e,!1)}function Yf(t,e){FE(t,e);var n=ei(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Jf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Jf(t,e.type,ei(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Jf(t,e,n){(e!=="number"||Oc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var La=Array.isArray;function eo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ei(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Xf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(q(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(q(92));if(La(n)){if(1<n.length)throw Error(q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ei(n)}}function jE(t,e){var n=ei(e.value),r=ei(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function gv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function UE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?UE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zu,BE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zu=zu||document.createElement("div"),zu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function hl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lC=["Webkit","ms","Moz","O"];Object.keys(Wa).forEach(function(t){lC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wa[e]=Wa[t]})});function zE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wa.hasOwnProperty(t)&&Wa[t]?(""+e).trim():e+"px"}function $E(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=zE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var uC=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ep(t,e){if(e){if(uC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(q(62))}}function tp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var np=null;function Mm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rp=null,to=null,no=null;function yv(t){if(t=eu(t)){if(typeof rp!="function")throw Error(q(280));var e=t.stateNode;e&&(e=Dh(e),rp(t.stateNode,t.type,e))}}function qE(t){to?no?no.push(t):no=[t]:to=t}function WE(){if(to){var t=to,e=no;if(no=to=null,yv(t),e)for(t=0;t<e.length;t++)yv(e[t])}}function GE(t,e){return t(e)}function KE(){}var tf=!1;function HE(t,e,n){if(tf)return t(e,n);tf=!0;try{return GE(t,e,n)}finally{tf=!1,(to!==null||no!==null)&&(KE(),WE())}}function dl(t,e){var n=t.stateNode;if(n===null)return null;var r=Dh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(q(231,e,typeof n));return n}var ip=!1;if(or)try{var _a={};Object.defineProperty(_a,"passive",{get:function(){ip=!0}}),window.addEventListener("test",_a,_a),window.removeEventListener("test",_a,_a)}catch{ip=!1}function cC(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ga=!1,Lc=null,Mc=!1,sp=null,hC={onError:function(t){Ga=!0,Lc=t}};function dC(t,e,n,r,i,s,o,a,u){Ga=!1,Lc=null,cC.apply(hC,arguments)}function fC(t,e,n,r,i,s,o,a,u){if(dC.apply(this,arguments),Ga){if(Ga){var c=Lc;Ga=!1,Lc=null}else throw Error(q(198));Mc||(Mc=!0,sp=c)}}function ys(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function QE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _v(t){if(ys(t)!==t)throw Error(q(188))}function pC(t){var e=t.alternate;if(!e){if(e=ys(t),e===null)throw Error(q(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _v(i),t;if(s===r)return _v(i),e;s=s.sibling}throw Error(q(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?t:e}function YE(t){return t=pC(t),t!==null?JE(t):null}function JE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=JE(t);if(e!==null)return e;t=t.sibling}return null}var XE=Zt.unstable_scheduleCallback,vv=Zt.unstable_cancelCallback,mC=Zt.unstable_shouldYield,gC=Zt.unstable_requestPaint,ze=Zt.unstable_now,yC=Zt.unstable_getCurrentPriorityLevel,Fm=Zt.unstable_ImmediatePriority,ZE=Zt.unstable_UserBlockingPriority,Fc=Zt.unstable_NormalPriority,_C=Zt.unstable_LowPriority,eT=Zt.unstable_IdlePriority,Ch=null,Mn=null;function vC(t){if(Mn&&typeof Mn.onCommitFiberRoot=="function")try{Mn.onCommitFiberRoot(Ch,t,void 0,(t.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:EC,wC=Math.log,IC=Math.LN2;function EC(t){return t>>>=0,t===0?32:31-(wC(t)/IC|0)|0}var $u=64,qu=4194304;function Ma(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ma(a):(s&=o,s!==0&&(r=Ma(s)))}else o=n&~i,o!==0?r=Ma(o):s!==0&&(r=Ma(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wn(e),i=1<<n,r|=t[n],e&=~i;return r}function TC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function SC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=TC(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function op(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tT(){var t=$u;return $u<<=1,!($u&4194240)&&($u=64),t}function nf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wn(e),t[e]=n}function AC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-wn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function jm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function nT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var rT,Um,iT,sT,oT,ap=!1,Wu=[],$r=null,qr=null,Wr=null,fl=new Map,pl=new Map,Dr=[],PC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wv(t,e){switch(t){case"focusin":case"focusout":$r=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":fl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pl.delete(e.pointerId)}}function va(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=eu(e),e!==null&&Um(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function RC(t,e,n,r,i){switch(e){case"focusin":return $r=va($r,t,e,n,r,i),!0;case"dragenter":return qr=va(qr,t,e,n,r,i),!0;case"mouseover":return Wr=va(Wr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return fl.set(s,va(fl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,pl.set(s,va(pl.get(s)||null,t,e,n,r,i)),!0}return!1}function aT(t){var e=Ui(t.target);if(e!==null){var n=ys(e);if(n!==null){if(e=n.tag,e===13){if(e=QE(n),e!==null){t.blockedOn=e,oT(t.priority,function(){iT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);np=r,n.target.dispatchEvent(r),np=null}else return e=eu(n),e!==null&&Um(e),t.blockedOn=n,!1;e.shift()}return!0}function Iv(t,e,n){dc(t)&&n.delete(e)}function kC(){ap=!1,$r!==null&&dc($r)&&($r=null),qr!==null&&dc(qr)&&(qr=null),Wr!==null&&dc(Wr)&&(Wr=null),fl.forEach(Iv),pl.forEach(Iv)}function wa(t,e){t.blockedOn===e&&(t.blockedOn=null,ap||(ap=!0,Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority,kC)))}function ml(t){function e(i){return wa(i,t)}if(0<Wu.length){wa(Wu[0],t);for(var n=1;n<Wu.length;n++){var r=Wu[n];r.blockedOn===t&&(r.blockedOn=null)}}for($r!==null&&wa($r,t),qr!==null&&wa(qr,t),Wr!==null&&wa(Wr,t),fl.forEach(e),pl.forEach(e),n=0;n<Dr.length;n++)r=Dr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Dr.length&&(n=Dr[0],n.blockedOn===null);)aT(n),n.blockedOn===null&&Dr.shift()}var ro=pr.ReactCurrentBatchConfig,Uc=!0;function CC(t,e,n,r){var i=me,s=ro.transition;ro.transition=null;try{me=1,Bm(t,e,n,r)}finally{me=i,ro.transition=s}}function xC(t,e,n,r){var i=me,s=ro.transition;ro.transition=null;try{me=4,Bm(t,e,n,r)}finally{me=i,ro.transition=s}}function Bm(t,e,n,r){if(Uc){var i=lp(t,e,n,r);if(i===null)ff(t,e,r,Bc,n),wv(t,r);else if(RC(i,t,e,n,r))r.stopPropagation();else if(wv(t,r),e&4&&-1<PC.indexOf(t)){for(;i!==null;){var s=eu(i);if(s!==null&&rT(s),s=lp(t,e,n,r),s===null&&ff(t,e,r,Bc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ff(t,e,r,null,n)}}var Bc=null;function lp(t,e,n,r){if(Bc=null,t=Mm(r),t=Ui(t),t!==null)if(e=ys(t),e===null)t=null;else if(n=e.tag,n===13){if(t=QE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bc=t,null}function lT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yC()){case Fm:return 1;case ZE:return 4;case Fc:case _C:return 16;case eT:return 536870912;default:return 16}default:return 16}}var Mr=null,zm=null,fc=null;function uT(){if(fc)return fc;var t,e=zm,n=e.length,r,i="value"in Mr?Mr.value:Mr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return fc=i.slice(t,1<r?1-r:void 0)}function pc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gu(){return!0}function Ev(){return!1}function nn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Gu:Ev,this.isPropagationStopped=Ev,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gu)},persist:function(){},isPersistent:Gu}),e}var Fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$m=nn(Fo),Zl=De({},Fo,{view:0,detail:0}),bC=nn(Zl),rf,sf,Ia,xh=De({},Zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ia&&(Ia&&t.type==="mousemove"?(rf=t.screenX-Ia.screenX,sf=t.screenY-Ia.screenY):sf=rf=0,Ia=t),rf)},movementY:function(t){return"movementY"in t?t.movementY:sf}}),Tv=nn(xh),NC=De({},xh,{dataTransfer:0}),DC=nn(NC),VC=De({},Zl,{relatedTarget:0}),of=nn(VC),OC=De({},Fo,{animationName:0,elapsedTime:0,pseudoElement:0}),LC=nn(OC),MC=De({},Fo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),FC=nn(MC),jC=De({},Fo,{data:0}),Sv=nn(jC),UC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $C(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=zC[t])?!!e[t]:!1}function qm(){return $C}var qC=De({},Zl,{key:function(t){if(t.key){var e=UC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?BC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qm,charCode:function(t){return t.type==="keypress"?pc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),WC=nn(qC),GC=De({},xh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Av=nn(GC),KC=De({},Zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qm}),HC=nn(KC),QC=De({},Fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),YC=nn(QC),JC=De({},xh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XC=nn(JC),ZC=[9,13,27,32],Wm=or&&"CompositionEvent"in window,Ka=null;or&&"documentMode"in document&&(Ka=document.documentMode);var ex=or&&"TextEvent"in window&&!Ka,cT=or&&(!Wm||Ka&&8<Ka&&11>=Ka),Pv=" ",Rv=!1;function hT(t,e){switch(t){case"keyup":return ZC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $s=!1;function tx(t,e){switch(t){case"compositionend":return dT(e);case"keypress":return e.which!==32?null:(Rv=!0,Pv);case"textInput":return t=e.data,t===Pv&&Rv?null:t;default:return null}}function nx(t,e){if($s)return t==="compositionend"||!Wm&&hT(t,e)?(t=uT(),fc=zm=Mr=null,$s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cT&&e.locale!=="ko"?null:e.data;default:return null}}var rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rx[t.type]:e==="textarea"}function fT(t,e,n,r){qE(r),e=zc(e,"onChange"),0<e.length&&(n=new $m("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ha=null,gl=null;function ix(t){ST(t,0)}function bh(t){var e=Gs(t);if(ME(e))return t}function sx(t,e){if(t==="change")return e}var pT=!1;if(or){var af;if(or){var lf="oninput"in document;if(!lf){var Cv=document.createElement("div");Cv.setAttribute("oninput","return;"),lf=typeof Cv.oninput=="function"}af=lf}else af=!1;pT=af&&(!document.documentMode||9<document.documentMode)}function xv(){Ha&&(Ha.detachEvent("onpropertychange",mT),gl=Ha=null)}function mT(t){if(t.propertyName==="value"&&bh(gl)){var e=[];fT(e,gl,t,Mm(t)),HE(ix,e)}}function ox(t,e,n){t==="focusin"?(xv(),Ha=e,gl=n,Ha.attachEvent("onpropertychange",mT)):t==="focusout"&&xv()}function ax(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bh(gl)}function lx(t,e){if(t==="click")return bh(e)}function ux(t,e){if(t==="input"||t==="change")return bh(e)}function cx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tn=typeof Object.is=="function"?Object.is:cx;function yl(t,e){if(Tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qf.call(e,i)||!Tn(t[i],e[i]))return!1}return!0}function bv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nv(t,e){var n=bv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bv(n)}}function gT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yT(){for(var t=window,e=Oc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Oc(t.document)}return e}function Gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hx(t){var e=yT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gT(n.ownerDocument.documentElement,n)){if(r!==null&&Gm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Nv(n,s);var o=Nv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dx=or&&"documentMode"in document&&11>=document.documentMode,qs=null,up=null,Qa=null,cp=!1;function Dv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cp||qs==null||qs!==Oc(r)||(r=qs,"selectionStart"in r&&Gm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qa&&yl(Qa,r)||(Qa=r,r=zc(up,"onSelect"),0<r.length&&(e=new $m("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=qs)))}function Ku(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ws={animationend:Ku("Animation","AnimationEnd"),animationiteration:Ku("Animation","AnimationIteration"),animationstart:Ku("Animation","AnimationStart"),transitionend:Ku("Transition","TransitionEnd")},uf={},_T={};or&&(_T=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function Nh(t){if(uf[t])return uf[t];if(!Ws[t])return t;var e=Ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _T)return uf[t]=e[n];return t}var vT=Nh("animationend"),wT=Nh("animationiteration"),IT=Nh("animationstart"),ET=Nh("transitionend"),TT=new Map,Vv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fi(t,e){TT.set(t,e),gs(e,[t])}for(var cf=0;cf<Vv.length;cf++){var hf=Vv[cf],fx=hf.toLowerCase(),px=hf[0].toUpperCase()+hf.slice(1);fi(fx,"on"+px)}fi(vT,"onAnimationEnd");fi(wT,"onAnimationIteration");fi(IT,"onAnimationStart");fi("dblclick","onDoubleClick");fi("focusin","onFocus");fi("focusout","onBlur");fi(ET,"onTransitionEnd");fo("onMouseEnter",["mouseout","mouseover"]);fo("onMouseLeave",["mouseout","mouseover"]);fo("onPointerEnter",["pointerout","pointerover"]);fo("onPointerLeave",["pointerout","pointerover"]);gs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gs("onBeforeInput",["compositionend","keypress","textInput","paste"]);gs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fa));function Ov(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,fC(r,e,void 0,t),t.currentTarget=null}function ST(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Ov(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Ov(i,a,c),s=u}}}if(Mc)throw t=sp,Mc=!1,sp=null,t}function Ie(t,e){var n=e[mp];n===void 0&&(n=e[mp]=new Set);var r=t+"__bubble";n.has(r)||(AT(e,t,2,!1),n.add(r))}function df(t,e,n){var r=0;e&&(r|=4),AT(n,t,r,e)}var Hu="_reactListening"+Math.random().toString(36).slice(2);function _l(t){if(!t[Hu]){t[Hu]=!0,NE.forEach(function(n){n!=="selectionchange"&&(mx.has(n)||df(n,!1,t),df(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hu]||(e[Hu]=!0,df("selectionchange",!1,e))}}function AT(t,e,n,r){switch(lT(e)){case 1:var i=CC;break;case 4:i=xC;break;default:i=Bm}n=i.bind(null,e,n,t),i=void 0,!ip||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ff(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ui(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}HE(function(){var c=s,d=Mm(n),f=[];e:{var g=TT.get(t);if(g!==void 0){var v=$m,R=t;switch(t){case"keypress":if(pc(n)===0)break e;case"keydown":case"keyup":v=WC;break;case"focusin":R="focus",v=of;break;case"focusout":R="blur",v=of;break;case"beforeblur":case"afterblur":v=of;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Tv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=DC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=HC;break;case vT:case wT:case IT:v=LC;break;case ET:v=YC;break;case"scroll":v=bC;break;case"wheel":v=XC;break;case"copy":case"cut":case"paste":v=FC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Av}var k=(e&4)!==0,x=!k&&t==="scroll",E=k?g!==null?g+"Capture":null:g;k=[];for(var w=c,T;w!==null;){T=w;var V=T.stateNode;if(T.tag===5&&V!==null&&(T=V,E!==null&&(V=dl(w,E),V!=null&&k.push(vl(w,V,T)))),x)break;w=w.return}0<k.length&&(g=new v(g,R,null,n,d),f.push({event:g,listeners:k}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",g&&n!==np&&(R=n.relatedTarget||n.fromElement)&&(Ui(R)||R[ar]))break e;if((v||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,v?(R=n.relatedTarget||n.toElement,v=c,R=R?Ui(R):null,R!==null&&(x=ys(R),R!==x||R.tag!==5&&R.tag!==6)&&(R=null)):(v=null,R=c),v!==R)){if(k=Tv,V="onMouseLeave",E="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(k=Av,V="onPointerLeave",E="onPointerEnter",w="pointer"),x=v==null?g:Gs(v),T=R==null?g:Gs(R),g=new k(V,w+"leave",v,n,d),g.target=x,g.relatedTarget=T,V=null,Ui(d)===c&&(k=new k(E,w+"enter",R,n,d),k.target=T,k.relatedTarget=x,V=k),x=V,v&&R)t:{for(k=v,E=R,w=0,T=k;T;T=xs(T))w++;for(T=0,V=E;V;V=xs(V))T++;for(;0<w-T;)k=xs(k),w--;for(;0<T-w;)E=xs(E),T--;for(;w--;){if(k===E||E!==null&&k===E.alternate)break t;k=xs(k),E=xs(E)}k=null}else k=null;v!==null&&Lv(f,g,v,k,!1),R!==null&&x!==null&&Lv(f,x,R,k,!0)}}e:{if(g=c?Gs(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var j=sx;else if(kv(g))if(pT)j=ux;else{j=ax;var F=ox}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=lx);if(j&&(j=j(t,c))){fT(f,j,n,d);break e}F&&F(t,g,c),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&Jf(g,"number",g.value)}switch(F=c?Gs(c):window,t){case"focusin":(kv(F)||F.contentEditable==="true")&&(qs=F,up=c,Qa=null);break;case"focusout":Qa=up=qs=null;break;case"mousedown":cp=!0;break;case"contextmenu":case"mouseup":case"dragend":cp=!1,Dv(f,n,d);break;case"selectionchange":if(dx)break;case"keydown":case"keyup":Dv(f,n,d)}var I;if(Wm)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else $s?hT(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(cT&&n.locale!=="ko"&&($s||_!=="onCompositionStart"?_==="onCompositionEnd"&&$s&&(I=uT()):(Mr=d,zm="value"in Mr?Mr.value:Mr.textContent,$s=!0)),F=zc(c,_),0<F.length&&(_=new Sv(_,t,null,n,d),f.push({event:_,listeners:F}),I?_.data=I:(I=dT(n),I!==null&&(_.data=I)))),(I=ex?tx(t,n):nx(t,n))&&(c=zc(c,"onBeforeInput"),0<c.length&&(d=new Sv("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=I))}ST(f,e)})}function vl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=dl(t,n),s!=null&&r.unshift(vl(t,s,i)),s=dl(t,e),s!=null&&r.push(vl(t,s,i))),t=t.return}return r}function xs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=dl(n,s),u!=null&&o.unshift(vl(n,u,a))):i||(u=dl(n,s),u!=null&&o.push(vl(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gx=/\r\n?/g,yx=/\u0000|\uFFFD/g;function Mv(t){return(typeof t=="string"?t:""+t).replace(gx,`
`).replace(yx,"")}function Qu(t,e,n){if(e=Mv(e),Mv(t)!==e&&n)throw Error(q(425))}function $c(){}var hp=null,dp=null;function fp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pp=typeof setTimeout=="function"?setTimeout:void 0,_x=typeof clearTimeout=="function"?clearTimeout:void 0,Fv=typeof Promise=="function"?Promise:void 0,vx=typeof queueMicrotask=="function"?queueMicrotask:typeof Fv<"u"?function(t){return Fv.resolve(null).then(t).catch(wx)}:pp;function wx(t){setTimeout(function(){throw t})}function pf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ml(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ml(e)}function Gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var jo=Math.random().toString(36).slice(2),Cn="__reactFiber$"+jo,wl="__reactProps$"+jo,ar="__reactContainer$"+jo,mp="__reactEvents$"+jo,Ix="__reactListeners$"+jo,Ex="__reactHandles$"+jo;function Ui(t){var e=t[Cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ar]||n[Cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jv(t);t!==null;){if(n=t[Cn])return n;t=jv(t)}return e}t=n,n=t.parentNode}return null}function eu(t){return t=t[Cn]||t[ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(q(33))}function Dh(t){return t[wl]||null}var gp=[],Ks=-1;function pi(t){return{current:t}}function Te(t){0>Ks||(t.current=gp[Ks],gp[Ks]=null,Ks--)}function _e(t,e){Ks++,gp[Ks]=t.current,t.current=e}var ti={},Et=pi(ti),zt=pi(!1),Ji=ti;function po(t,e){var n=t.type.contextTypes;if(!n)return ti;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $t(t){return t=t.childContextTypes,t!=null}function qc(){Te(zt),Te(Et)}function Uv(t,e,n){if(Et.current!==ti)throw Error(q(168));_e(Et,e),_e(zt,n)}function PT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(q(108,oC(t)||"Unknown",i));return De({},n,r)}function Wc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ti,Ji=Et.current,_e(Et,t),_e(zt,zt.current),!0}function Bv(t,e,n){var r=t.stateNode;if(!r)throw Error(q(169));n?(t=PT(t,e,Ji),r.__reactInternalMemoizedMergedChildContext=t,Te(zt),Te(Et),_e(Et,t)):Te(zt),_e(zt,n)}var Jn=null,Vh=!1,mf=!1;function RT(t){Jn===null?Jn=[t]:Jn.push(t)}function Tx(t){Vh=!0,RT(t)}function mi(){if(!mf&&Jn!==null){mf=!0;var t=0,e=me;try{var n=Jn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Jn=null,Vh=!1}catch(i){throw Jn!==null&&(Jn=Jn.slice(t+1)),XE(Fm,mi),i}finally{me=e,mf=!1}}return null}var Hs=[],Qs=0,Gc=null,Kc=0,sn=[],on=0,Xi=null,Xn=1,Zn="";function xi(t,e){Hs[Qs++]=Kc,Hs[Qs++]=Gc,Gc=t,Kc=e}function kT(t,e,n){sn[on++]=Xn,sn[on++]=Zn,sn[on++]=Xi,Xi=t;var r=Xn;t=Zn;var i=32-wn(r)-1;r&=~(1<<i),n+=1;var s=32-wn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xn=1<<32-wn(e)+i|n<<i|r,Zn=s+t}else Xn=1<<s|n<<i|r,Zn=t}function Km(t){t.return!==null&&(xi(t,1),kT(t,1,0))}function Hm(t){for(;t===Gc;)Gc=Hs[--Qs],Hs[Qs]=null,Kc=Hs[--Qs],Hs[Qs]=null;for(;t===Xi;)Xi=sn[--on],sn[on]=null,Zn=sn[--on],sn[on]=null,Xn=sn[--on],sn[on]=null}var Xt=null,Yt=null,Ae=!1,vn=null;function CT(t,e){var n=an(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Xt=t,Yt=Gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Xt=t,Yt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xi!==null?{id:Xn,overflow:Zn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=an(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Xt=t,Yt=null,!0):!1;default:return!1}}function yp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _p(t){if(Ae){var e=Yt;if(e){var n=e;if(!zv(t,e)){if(yp(t))throw Error(q(418));e=Gr(n.nextSibling);var r=Xt;e&&zv(t,e)?CT(r,n):(t.flags=t.flags&-4097|2,Ae=!1,Xt=t)}}else{if(yp(t))throw Error(q(418));t.flags=t.flags&-4097|2,Ae=!1,Xt=t}}}function $v(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xt=t}function Yu(t){if(t!==Xt)return!1;if(!Ae)return $v(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fp(t.type,t.memoizedProps)),e&&(e=Yt)){if(yp(t))throw xT(),Error(q(418));for(;e;)CT(t,e),e=Gr(e.nextSibling)}if($v(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Yt=Gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Yt=null}}else Yt=Xt?Gr(t.stateNode.nextSibling):null;return!0}function xT(){for(var t=Yt;t;)t=Gr(t.nextSibling)}function mo(){Yt=Xt=null,Ae=!1}function Qm(t){vn===null?vn=[t]:vn.push(t)}var Sx=pr.ReactCurrentBatchConfig;function Ea(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,t))}return t}function Ju(t,e){throw t=Object.prototype.toString.call(e),Error(q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qv(t){var e=t._init;return e(t._payload)}function bT(t){function e(E,w){if(t){var T=E.deletions;T===null?(E.deletions=[w],E.flags|=16):T.push(w)}}function n(E,w){if(!t)return null;for(;w!==null;)e(E,w),w=w.sibling;return null}function r(E,w){for(E=new Map;w!==null;)w.key!==null?E.set(w.key,w):E.set(w.index,w),w=w.sibling;return E}function i(E,w){return E=Yr(E,w),E.index=0,E.sibling=null,E}function s(E,w,T){return E.index=T,t?(T=E.alternate,T!==null?(T=T.index,T<w?(E.flags|=2,w):T):(E.flags|=2,w)):(E.flags|=1048576,w)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,w,T,V){return w===null||w.tag!==6?(w=Ef(T,E.mode,V),w.return=E,w):(w=i(w,T),w.return=E,w)}function u(E,w,T,V){var j=T.type;return j===zs?d(E,w,T.props.children,V,T.key):w!==null&&(w.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===br&&qv(j)===w.type)?(V=i(w,T.props),V.ref=Ea(E,w,T),V.return=E,V):(V=Ic(T.type,T.key,T.props,null,E.mode,V),V.ref=Ea(E,w,T),V.return=E,V)}function c(E,w,T,V){return w===null||w.tag!==4||w.stateNode.containerInfo!==T.containerInfo||w.stateNode.implementation!==T.implementation?(w=Tf(T,E.mode,V),w.return=E,w):(w=i(w,T.children||[]),w.return=E,w)}function d(E,w,T,V,j){return w===null||w.tag!==7?(w=Ki(T,E.mode,V,j),w.return=E,w):(w=i(w,T),w.return=E,w)}function f(E,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Ef(""+w,E.mode,T),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Uu:return T=Ic(w.type,w.key,w.props,null,E.mode,T),T.ref=Ea(E,null,w),T.return=E,T;case Bs:return w=Tf(w,E.mode,T),w.return=E,w;case br:var V=w._init;return f(E,V(w._payload),T)}if(La(w)||ya(w))return w=Ki(w,E.mode,T,null),w.return=E,w;Ju(E,w)}return null}function g(E,w,T,V){var j=w!==null?w.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return j!==null?null:a(E,w,""+T,V);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Uu:return T.key===j?u(E,w,T,V):null;case Bs:return T.key===j?c(E,w,T,V):null;case br:return j=T._init,g(E,w,j(T._payload),V)}if(La(T)||ya(T))return j!==null?null:d(E,w,T,V,null);Ju(E,T)}return null}function v(E,w,T,V,j){if(typeof V=="string"&&V!==""||typeof V=="number")return E=E.get(T)||null,a(w,E,""+V,j);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Uu:return E=E.get(V.key===null?T:V.key)||null,u(w,E,V,j);case Bs:return E=E.get(V.key===null?T:V.key)||null,c(w,E,V,j);case br:var F=V._init;return v(E,w,T,F(V._payload),j)}if(La(V)||ya(V))return E=E.get(T)||null,d(w,E,V,j,null);Ju(w,V)}return null}function R(E,w,T,V){for(var j=null,F=null,I=w,_=w=0,S=null;I!==null&&_<T.length;_++){I.index>_?(S=I,I=null):S=I.sibling;var A=g(E,I,T[_],V);if(A===null){I===null&&(I=S);break}t&&I&&A.alternate===null&&e(E,I),w=s(A,w,_),F===null?j=A:F.sibling=A,F=A,I=S}if(_===T.length)return n(E,I),Ae&&xi(E,_),j;if(I===null){for(;_<T.length;_++)I=f(E,T[_],V),I!==null&&(w=s(I,w,_),F===null?j=I:F.sibling=I,F=I);return Ae&&xi(E,_),j}for(I=r(E,I);_<T.length;_++)S=v(I,E,_,T[_],V),S!==null&&(t&&S.alternate!==null&&I.delete(S.key===null?_:S.key),w=s(S,w,_),F===null?j=S:F.sibling=S,F=S);return t&&I.forEach(function(C){return e(E,C)}),Ae&&xi(E,_),j}function k(E,w,T,V){var j=ya(T);if(typeof j!="function")throw Error(q(150));if(T=j.call(T),T==null)throw Error(q(151));for(var F=j=null,I=w,_=w=0,S=null,A=T.next();I!==null&&!A.done;_++,A=T.next()){I.index>_?(S=I,I=null):S=I.sibling;var C=g(E,I,A.value,V);if(C===null){I===null&&(I=S);break}t&&I&&C.alternate===null&&e(E,I),w=s(C,w,_),F===null?j=C:F.sibling=C,F=C,I=S}if(A.done)return n(E,I),Ae&&xi(E,_),j;if(I===null){for(;!A.done;_++,A=T.next())A=f(E,A.value,V),A!==null&&(w=s(A,w,_),F===null?j=A:F.sibling=A,F=A);return Ae&&xi(E,_),j}for(I=r(E,I);!A.done;_++,A=T.next())A=v(I,E,_,A.value,V),A!==null&&(t&&A.alternate!==null&&I.delete(A.key===null?_:A.key),w=s(A,w,_),F===null?j=A:F.sibling=A,F=A);return t&&I.forEach(function(b){return e(E,b)}),Ae&&xi(E,_),j}function x(E,w,T,V){if(typeof T=="object"&&T!==null&&T.type===zs&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Uu:e:{for(var j=T.key,F=w;F!==null;){if(F.key===j){if(j=T.type,j===zs){if(F.tag===7){n(E,F.sibling),w=i(F,T.props.children),w.return=E,E=w;break e}}else if(F.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===br&&qv(j)===F.type){n(E,F.sibling),w=i(F,T.props),w.ref=Ea(E,F,T),w.return=E,E=w;break e}n(E,F);break}else e(E,F);F=F.sibling}T.type===zs?(w=Ki(T.props.children,E.mode,V,T.key),w.return=E,E=w):(V=Ic(T.type,T.key,T.props,null,E.mode,V),V.ref=Ea(E,w,T),V.return=E,E=V)}return o(E);case Bs:e:{for(F=T.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===T.containerInfo&&w.stateNode.implementation===T.implementation){n(E,w.sibling),w=i(w,T.children||[]),w.return=E,E=w;break e}else{n(E,w);break}else e(E,w);w=w.sibling}w=Tf(T,E.mode,V),w.return=E,E=w}return o(E);case br:return F=T._init,x(E,w,F(T._payload),V)}if(La(T))return R(E,w,T,V);if(ya(T))return k(E,w,T,V);Ju(E,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,w!==null&&w.tag===6?(n(E,w.sibling),w=i(w,T),w.return=E,E=w):(n(E,w),w=Ef(T,E.mode,V),w.return=E,E=w),o(E)):n(E,w)}return x}var go=bT(!0),NT=bT(!1),Hc=pi(null),Qc=null,Ys=null,Ym=null;function Jm(){Ym=Ys=Qc=null}function Xm(t){var e=Hc.current;Te(Hc),t._currentValue=e}function vp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function io(t,e){Qc=t,Ym=Ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ft=!0),t.firstContext=null)}function dn(t){var e=t._currentValue;if(Ym!==t)if(t={context:t,memoizedValue:e,next:null},Ys===null){if(Qc===null)throw Error(q(308));Ys=t,Qc.dependencies={lanes:0,firstContext:t}}else Ys=Ys.next=t;return e}var Bi=null;function Zm(t){Bi===null?Bi=[t]:Bi.push(t)}function DT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zm(e)):(n.next=i.next,i.next=n),e.interleaved=n,lr(t,r)}function lr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Nr=!1;function eg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function VT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ir(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Kr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,lr(t,n)}return i=r.interleaved,i===null?(e.next=e,Zm(r)):(e.next=i.next,i.next=e),r.interleaved=e,lr(t,n)}function mc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jm(t,n)}}function Wv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yc(t,e,n,r){var i=t.updateQueue;Nr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var g=a.lane,v=a.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var R=t,k=a;switch(g=e,v=n,k.tag){case 1:if(R=k.payload,typeof R=="function"){f=R.call(v,f,g);break e}f=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=k.payload,g=typeof R=="function"?R.call(v,f,g):R,g==null)break e;f=De({},f,g);break e;case 2:Nr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,u=f):d=d.next=v,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);es|=o,t.lanes=o,t.memoizedState=f}}function Gv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var tu={},Fn=pi(tu),Il=pi(tu),El=pi(tu);function zi(t){if(t===tu)throw Error(q(174));return t}function tg(t,e){switch(_e(El,e),_e(Il,t),_e(Fn,tu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zf(e,t)}Te(Fn),_e(Fn,e)}function yo(){Te(Fn),Te(Il),Te(El)}function OT(t){zi(El.current);var e=zi(Fn.current),n=Zf(e,t.type);e!==n&&(_e(Il,t),_e(Fn,n))}function ng(t){Il.current===t&&(Te(Fn),Te(Il))}var xe=pi(0);function Jc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gf=[];function rg(){for(var t=0;t<gf.length;t++)gf[t]._workInProgressVersionPrimary=null;gf.length=0}var gc=pr.ReactCurrentDispatcher,yf=pr.ReactCurrentBatchConfig,Zi=0,be=null,Qe=null,et=null,Xc=!1,Ya=!1,Tl=0,Ax=0;function _t(){throw Error(q(321))}function ig(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tn(t[n],e[n]))return!1;return!0}function sg(t,e,n,r,i,s){if(Zi=s,be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gc.current=t===null||t.memoizedState===null?Cx:xx,t=n(r,i),Ya){s=0;do{if(Ya=!1,Tl=0,25<=s)throw Error(q(301));s+=1,et=Qe=null,e.updateQueue=null,gc.current=bx,t=n(r,i)}while(Ya)}if(gc.current=Zc,e=Qe!==null&&Qe.next!==null,Zi=0,et=Qe=be=null,Xc=!1,e)throw Error(q(300));return t}function og(){var t=Tl!==0;return Tl=0,t}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?be.memoizedState=et=t:et=et.next=t,et}function fn(){if(Qe===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var e=et===null?be.memoizedState:et.next;if(e!==null)et=e,Qe=t;else{if(t===null)throw Error(q(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},et===null?be.memoizedState=et=t:et=et.next=t}return et}function Sl(t,e){return typeof e=="function"?e(t):e}function _f(t){var e=fn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=Qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((Zi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,be.lanes|=d,es|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Tn(r,e.memoizedState)||(Ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,be.lanes|=s,es|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vf(t){var e=fn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Tn(s,e.memoizedState)||(Ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function LT(){}function MT(t,e){var n=be,r=fn(),i=e(),s=!Tn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ft=!0),r=r.queue,ag(UT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,Al(9,jT.bind(null,n,r,i,e),void 0,null),nt===null)throw Error(q(349));Zi&30||FT(n,e,i)}return i}function FT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function jT(t,e,n,r){e.value=n,e.getSnapshot=r,BT(e)&&zT(t)}function UT(t,e,n){return n(function(){BT(e)&&zT(t)})}function BT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tn(t,n)}catch{return!0}}function zT(t){var e=lr(t,1);e!==null&&In(e,t,1,-1)}function Kv(t){var e=kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sl,lastRenderedState:t},e.queue=t,t=t.dispatch=kx.bind(null,be,t),[e.memoizedState,t]}function Al(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function $T(){return fn().memoizedState}function yc(t,e,n,r){var i=kn();be.flags|=t,i.memoizedState=Al(1|e,n,void 0,r===void 0?null:r)}function Oh(t,e,n,r){var i=fn();r=r===void 0?null:r;var s=void 0;if(Qe!==null){var o=Qe.memoizedState;if(s=o.destroy,r!==null&&ig(r,o.deps)){i.memoizedState=Al(e,n,s,r);return}}be.flags|=t,i.memoizedState=Al(1|e,n,s,r)}function Hv(t,e){return yc(8390656,8,t,e)}function ag(t,e){return Oh(2048,8,t,e)}function qT(t,e){return Oh(4,2,t,e)}function WT(t,e){return Oh(4,4,t,e)}function GT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function KT(t,e,n){return n=n!=null?n.concat([t]):null,Oh(4,4,GT.bind(null,e,t),n)}function lg(){}function HT(t,e){var n=fn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ig(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function QT(t,e){var n=fn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ig(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function YT(t,e,n){return Zi&21?(Tn(n,e)||(n=tT(),be.lanes|=n,es|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ft=!0),t.memoizedState=n)}function Px(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=yf.transition;yf.transition={};try{t(!1),e()}finally{me=n,yf.transition=r}}function JT(){return fn().memoizedState}function Rx(t,e,n){var r=Qr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},XT(t))ZT(e,n);else if(n=DT(t,e,n,r),n!==null){var i=kt();In(n,t,r,i),e0(n,e,r)}}function kx(t,e,n){var r=Qr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(XT(t))ZT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Tn(a,o)){var u=e.interleaved;u===null?(i.next=i,Zm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=DT(t,e,i,r),n!==null&&(i=kt(),In(n,t,r,i),e0(n,e,r))}}function XT(t){var e=t.alternate;return t===be||e!==null&&e===be}function ZT(t,e){Ya=Xc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function e0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jm(t,n)}}var Zc={readContext:dn,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},Cx={readContext:dn,useCallback:function(t,e){return kn().memoizedState=[t,e===void 0?null:e],t},useContext:dn,useEffect:Hv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yc(4194308,4,GT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yc(4194308,4,t,e)},useInsertionEffect:function(t,e){return yc(4,2,t,e)},useMemo:function(t,e){var n=kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Rx.bind(null,be,t),[r.memoizedState,t]},useRef:function(t){var e=kn();return t={current:t},e.memoizedState=t},useState:Kv,useDebugValue:lg,useDeferredValue:function(t){return kn().memoizedState=t},useTransition:function(){var t=Kv(!1),e=t[0];return t=Px.bind(null,t[1]),kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=be,i=kn();if(Ae){if(n===void 0)throw Error(q(407));n=n()}else{if(n=e(),nt===null)throw Error(q(349));Zi&30||FT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Hv(UT.bind(null,r,s,t),[t]),r.flags|=2048,Al(9,jT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=kn(),e=nt.identifierPrefix;if(Ae){var n=Zn,r=Xn;n=(r&~(1<<32-wn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Tl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ax++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},xx={readContext:dn,useCallback:HT,useContext:dn,useEffect:ag,useImperativeHandle:KT,useInsertionEffect:qT,useLayoutEffect:WT,useMemo:QT,useReducer:_f,useRef:$T,useState:function(){return _f(Sl)},useDebugValue:lg,useDeferredValue:function(t){var e=fn();return YT(e,Qe.memoizedState,t)},useTransition:function(){var t=_f(Sl)[0],e=fn().memoizedState;return[t,e]},useMutableSource:LT,useSyncExternalStore:MT,useId:JT,unstable_isNewReconciler:!1},bx={readContext:dn,useCallback:HT,useContext:dn,useEffect:ag,useImperativeHandle:KT,useInsertionEffect:qT,useLayoutEffect:WT,useMemo:QT,useReducer:vf,useRef:$T,useState:function(){return vf(Sl)},useDebugValue:lg,useDeferredValue:function(t){var e=fn();return Qe===null?e.memoizedState=t:YT(e,Qe.memoizedState,t)},useTransition:function(){var t=vf(Sl)[0],e=fn().memoizedState;return[t,e]},useMutableSource:LT,useSyncExternalStore:MT,useId:JT,unstable_isNewReconciler:!1};function yn(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function wp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lh={isMounted:function(t){return(t=t._reactInternals)?ys(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=kt(),i=Qr(t),s=ir(r,i);s.payload=e,n!=null&&(s.callback=n),e=Kr(t,s,i),e!==null&&(In(e,t,i,r),mc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=kt(),i=Qr(t),s=ir(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Kr(t,s,i),e!==null&&(In(e,t,i,r),mc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=kt(),r=Qr(t),i=ir(n,r);i.tag=2,e!=null&&(i.callback=e),e=Kr(t,i,r),e!==null&&(In(e,t,r,n),mc(e,t,r))}};function Qv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!yl(n,r)||!yl(i,s):!0}function t0(t,e,n){var r=!1,i=ti,s=e.contextType;return typeof s=="object"&&s!==null?s=dn(s):(i=$t(e)?Ji:Et.current,r=e.contextTypes,s=(r=r!=null)?po(t,i):ti),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Lh.enqueueReplaceState(e,e.state,null)}function Ip(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},eg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=dn(s):(s=$t(e)?Ji:Et.current,i.context=po(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Lh.enqueueReplaceState(i,i.state,null),Yc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function _o(t,e){try{var n="",r=e;do n+=sC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function wf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ep(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Nx=typeof WeakMap=="function"?WeakMap:Map;function n0(t,e,n){n=ir(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){th||(th=!0,Np=r),Ep(t,e)},n}function r0(t,e,n){n=ir(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ep(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ep(t,e),typeof r!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Nx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Gx.bind(null,t,e,n),e.then(t,t))}function Xv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ir(-1,1),e.tag=2,Kr(n,e,1))),n.lanes|=1),t)}var Dx=pr.ReactCurrentOwner,Ft=!1;function At(t,e,n,r){e.child=t===null?NT(e,null,n,r):go(e,t.child,n,r)}function ew(t,e,n,r,i){n=n.render;var s=e.ref;return io(e,i),r=sg(t,e,n,r,s,i),n=og(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ur(t,e,i)):(Ae&&n&&Km(e),e.flags|=1,At(t,e,r,i),e.child)}function tw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,i0(t,e,s,r,i)):(t=Ic(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:yl,n(o,r)&&t.ref===e.ref)return ur(t,e,i)}return e.flags|=1,t=Yr(s,r),t.ref=e.ref,t.return=e,e.child=t}function i0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(yl(s,r)&&t.ref===e.ref)if(Ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ft=!0);else return e.lanes=t.lanes,ur(t,e,i)}return Tp(t,e,n,r,i)}function s0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Xs,Ht),Ht|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(Xs,Ht),Ht|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(Xs,Ht),Ht|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(Xs,Ht),Ht|=r;return At(t,e,i,n),e.child}function o0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Tp(t,e,n,r,i){var s=$t(n)?Ji:Et.current;return s=po(e,s),io(e,i),n=sg(t,e,n,r,s,i),r=og(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ur(t,e,i)):(Ae&&r&&Km(e),e.flags|=1,At(t,e,n,i),e.child)}function nw(t,e,n,r,i){if($t(n)){var s=!0;Wc(e)}else s=!1;if(io(e,i),e.stateNode===null)_c(t,e),t0(e,n,r),Ip(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=dn(c):(c=$t(n)?Ji:Et.current,c=po(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Yv(e,o,r,c),Nr=!1;var g=e.memoizedState;o.state=g,Yc(e,r,o,i),u=e.memoizedState,a!==r||g!==u||zt.current||Nr?(typeof d=="function"&&(wp(e,n,d,r),u=e.memoizedState),(a=Nr||Qv(e,n,a,r,g,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,VT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:yn(e.type,a),o.props=c,f=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=dn(u):(u=$t(n)?Ji:Et.current,u=po(e,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||g!==u)&&Yv(e,o,r,u),Nr=!1,g=e.memoizedState,o.state=g,Yc(e,r,o,i);var R=e.memoizedState;a!==f||g!==R||zt.current||Nr?(typeof v=="function"&&(wp(e,n,v,r),R=e.memoizedState),(c=Nr||Qv(e,n,c,r,g,R,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Sp(t,e,n,r,s,i)}function Sp(t,e,n,r,i,s){o0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Bv(e,n,!1),ur(t,e,s);r=e.stateNode,Dx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=go(e,t.child,null,s),e.child=go(e,null,a,s)):At(t,e,a,s),e.memoizedState=r.state,i&&Bv(e,n,!0),e.child}function a0(t){var e=t.stateNode;e.pendingContext?Uv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Uv(t,e.context,!1),tg(t,e.containerInfo)}function rw(t,e,n,r,i){return mo(),Qm(i),e.flags|=256,At(t,e,n,r),e.child}var Ap={dehydrated:null,treeContext:null,retryLane:0};function Pp(t){return{baseLanes:t,cachePool:null,transitions:null}}function l0(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(xe,i&1),t===null)return _p(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=jh(o,r,0,null),t=Ki(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Pp(n),e.memoizedState=Ap,t):ug(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Vx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Yr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Yr(a,s):(s=Ki(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Pp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ap,r}return s=t.child,t=s.sibling,r=Yr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ug(t,e){return e=jh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xu(t,e,n,r){return r!==null&&Qm(r),go(e,t.child,null,n),t=ug(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Vx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=wf(Error(q(422))),Xu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=jh({mode:"visible",children:r.children},i,0,null),s=Ki(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&go(e,t.child,null,o),e.child.memoizedState=Pp(o),e.memoizedState=Ap,s);if(!(e.mode&1))return Xu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(q(419)),r=wf(s,r,void 0),Xu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ft||a){if(r=nt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,lr(t,i),In(r,t,i,-1))}return mg(),r=wf(Error(q(421))),Xu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Kx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Yt=Gr(i.nextSibling),Xt=e,Ae=!0,vn=null,t!==null&&(sn[on++]=Xn,sn[on++]=Zn,sn[on++]=Xi,Xn=t.id,Zn=t.overflow,Xi=e),e=ug(e,r.children),e.flags|=4096,e)}function iw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),vp(t.return,e,n)}function If(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function u0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(At(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&iw(t,n,e);else if(t.tag===19)iw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Jc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),If(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Jc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}If(e,!0,n,null,s);break;case"together":If(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _c(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ur(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),es|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(q(153));if(e.child!==null){for(t=e.child,n=Yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ox(t,e,n){switch(e.tag){case 3:a0(e),mo();break;case 5:OT(e);break;case 1:$t(e.type)&&Wc(e);break;case 4:tg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(Hc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?l0(t,e,n):(_e(xe,xe.current&1),t=ur(t,e,n),t!==null?t.sibling:null);_e(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return u0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,s0(t,e,n)}return ur(t,e,n)}var c0,Rp,h0,d0;c0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rp=function(){};h0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,zi(Fn.current);var s=null;switch(n){case"input":i=Qf(t,i),r=Qf(t,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=Xf(t,i),r=Xf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=$c)}ep(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(cl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(cl.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ie("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};d0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ta(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Lx(t,e,n){var r=e.pendingProps;switch(Hm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(e),null;case 1:return $t(e.type)&&qc(),vt(e),null;case 3:return r=e.stateNode,yo(),Te(zt),Te(Et),rg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Yu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vn!==null&&(Op(vn),vn=null))),Rp(t,e),vt(e),null;case 5:ng(e);var i=zi(El.current);if(n=e.type,t!==null&&e.stateNode!=null)h0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(q(166));return vt(e),null}if(t=zi(Fn.current),Yu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Cn]=e,r[wl]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<Fa.length;i++)Ie(Fa[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":fv(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":mv(r,s),Ie("invalid",r)}ep(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qu(r.textContent,a,t),i=["children",""+a]):cl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":Bu(r),pv(r,s,!0);break;case"textarea":Bu(r),gv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=$c)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=UE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Cn]=e,t[wl]=r,c0(t,e,!1,!1),e.stateNode=t;e:{switch(o=tp(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<Fa.length;i++)Ie(Fa[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":fv(t,r),i=Qf(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":mv(t,r),i=Xf(t,r),Ie("invalid",t);break;default:i=r}ep(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?$E(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&BE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&hl(t,u):typeof u=="number"&&hl(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(cl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ie("scroll",t):u!=null&&Dm(t,s,u,o))}switch(n){case"input":Bu(t),pv(t,r,!1);break;case"textarea":Bu(t),gv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ei(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?eo(t,!!r.multiple,s,!1):r.defaultValue!=null&&eo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=$c)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return vt(e),null;case 6:if(t&&e.stateNode!=null)d0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(q(166));if(n=zi(El.current),zi(Fn.current),Yu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Cn]=e,(s=r.nodeValue!==n)&&(t=Xt,t!==null))switch(t.tag){case 3:Qu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Cn]=e,e.stateNode=r}return vt(e),null;case 13:if(Te(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&Yt!==null&&e.mode&1&&!(e.flags&128))xT(),mo(),e.flags|=98560,s=!1;else if(s=Yu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(q(317));s[Cn]=e}else mo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;vt(e),s=!1}else vn!==null&&(Op(vn),vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?Ye===0&&(Ye=3):mg())),e.updateQueue!==null&&(e.flags|=4),vt(e),null);case 4:return yo(),Rp(t,e),t===null&&_l(e.stateNode.containerInfo),vt(e),null;case 10:return Xm(e.type._context),vt(e),null;case 17:return $t(e.type)&&qc(),vt(e),null;case 19:if(Te(xe),s=e.memoizedState,s===null)return vt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ta(s,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Jc(t),o!==null){for(e.flags|=128,Ta(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&ze()>vo&&(e.flags|=128,r=!0,Ta(s,!1),e.lanes=4194304)}else{if(!r)if(t=Jc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ta(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ae)return vt(e),null}else 2*ze()-s.renderingStartTime>vo&&n!==1073741824&&(e.flags|=128,r=!0,Ta(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ze(),e.sibling=null,n=xe.current,_e(xe,r?n&1|2:n&1),e):(vt(e),null);case 22:case 23:return pg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ht&1073741824&&(vt(e),e.subtreeFlags&6&&(e.flags|=8192)):vt(e),null;case 24:return null;case 25:return null}throw Error(q(156,e.tag))}function Mx(t,e){switch(Hm(e),e.tag){case 1:return $t(e.type)&&qc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return yo(),Te(zt),Te(Et),rg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ng(e),null;case 13:if(Te(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(q(340));mo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(xe),null;case 4:return yo(),null;case 10:return Xm(e.type._context),null;case 22:case 23:return pg(),null;case 24:return null;default:return null}}var Zu=!1,It=!1,Fx=typeof WeakSet=="function"?WeakSet:Set,J=null;function Js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function kp(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var sw=!1;function jx(t,e){if(hp=Uc,t=yT(),Gm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,g=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)g=f,f=v;for(;;){if(f===t)break t;if(g===n&&++c===i&&(a=o),g===s&&++d===r&&(u=o),(v=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=v}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(dp={focusedElem:t,selectionRange:n},Uc=!1,J=e;J!==null;)if(e=J,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,J=t;else for(;J!==null;){e=J;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var k=R.memoizedProps,x=R.memoizedState,E=e.stateNode,w=E.getSnapshotBeforeUpdate(e.elementType===e.type?k:yn(e.type,k),x);E.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(V){Oe(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,J=t;break}J=e.return}return R=sw,sw=!1,R}function Ja(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&kp(e,n,s)}i=i.next}while(i!==r)}}function Mh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Cp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function f0(t){var e=t.alternate;e!==null&&(t.alternate=null,f0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Cn],delete e[wl],delete e[mp],delete e[Ix],delete e[Ex])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function p0(t){return t.tag===5||t.tag===3||t.tag===4}function ow(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||p0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$c));else if(r!==4&&(t=t.child,t!==null))for(xp(t,e,n),t=t.sibling;t!==null;)xp(t,e,n),t=t.sibling}function bp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(bp(t,e,n),t=t.sibling;t!==null;)bp(t,e,n),t=t.sibling}var ut=null,_n=!1;function Ar(t,e,n){for(n=n.child;n!==null;)m0(t,e,n),n=n.sibling}function m0(t,e,n){if(Mn&&typeof Mn.onCommitFiberUnmount=="function")try{Mn.onCommitFiberUnmount(Ch,n)}catch{}switch(n.tag){case 5:It||Js(n,e);case 6:var r=ut,i=_n;ut=null,Ar(t,e,n),ut=r,_n=i,ut!==null&&(_n?(t=ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ut.removeChild(n.stateNode));break;case 18:ut!==null&&(_n?(t=ut,n=n.stateNode,t.nodeType===8?pf(t.parentNode,n):t.nodeType===1&&pf(t,n),ml(t)):pf(ut,n.stateNode));break;case 4:r=ut,i=_n,ut=n.stateNode.containerInfo,_n=!0,Ar(t,e,n),ut=r,_n=i;break;case 0:case 11:case 14:case 15:if(!It&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&kp(n,e,o),i=i.next}while(i!==r)}Ar(t,e,n);break;case 1:if(!It&&(Js(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,e,a)}Ar(t,e,n);break;case 21:Ar(t,e,n);break;case 22:n.mode&1?(It=(r=It)||n.memoizedState!==null,Ar(t,e,n),It=r):Ar(t,e,n);break;default:Ar(t,e,n)}}function aw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Fx),e.forEach(function(r){var i=Hx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ut=a.stateNode,_n=!1;break e;case 3:ut=a.stateNode.containerInfo,_n=!0;break e;case 4:ut=a.stateNode.containerInfo,_n=!0;break e}a=a.return}if(ut===null)throw Error(q(160));m0(s,o,i),ut=null,_n=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Oe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)g0(e,t),e=e.sibling}function g0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gn(e,t),Rn(t),r&4){try{Ja(3,t,t.return),Mh(3,t)}catch(k){Oe(t,t.return,k)}try{Ja(5,t,t.return)}catch(k){Oe(t,t.return,k)}}break;case 1:gn(e,t),Rn(t),r&512&&n!==null&&Js(n,n.return);break;case 5:if(gn(e,t),Rn(t),r&512&&n!==null&&Js(n,n.return),t.flags&32){var i=t.stateNode;try{hl(i,"")}catch(k){Oe(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&FE(i,s),tp(a,o);var c=tp(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?$E(i,f):d==="dangerouslySetInnerHTML"?BE(i,f):d==="children"?hl(i,f):Dm(i,d,f,c)}switch(a){case"input":Yf(i,s);break;case"textarea":jE(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?eo(i,!!s.multiple,v,!1):g!==!!s.multiple&&(s.defaultValue!=null?eo(i,!!s.multiple,s.defaultValue,!0):eo(i,!!s.multiple,s.multiple?[]:"",!1))}i[wl]=s}catch(k){Oe(t,t.return,k)}}break;case 6:if(gn(e,t),Rn(t),r&4){if(t.stateNode===null)throw Error(q(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Oe(t,t.return,k)}}break;case 3:if(gn(e,t),Rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ml(e.containerInfo)}catch(k){Oe(t,t.return,k)}break;case 4:gn(e,t),Rn(t);break;case 13:gn(e,t),Rn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(dg=ze())),r&4&&aw(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(It=(c=It)||d,gn(e,t),It=c):gn(e,t),Rn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(J=t,d=t.child;d!==null;){for(f=J=d;J!==null;){switch(g=J,v=g.child,g.tag){case 0:case 11:case 14:case 15:Ja(4,g,g.return);break;case 1:Js(g,g.return);var R=g.stateNode;if(typeof R.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(k){Oe(r,n,k)}}break;case 5:Js(g,g.return);break;case 22:if(g.memoizedState!==null){uw(f);continue}}v!==null?(v.return=g,J=v):uw(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=zE("display",o))}catch(k){Oe(t,t.return,k)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(k){Oe(t,t.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gn(e,t),Rn(t),r&4&&aw(t);break;case 21:break;default:gn(e,t),Rn(t)}}function Rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(p0(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(hl(i,""),r.flags&=-33);var s=ow(t);bp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ow(t);xp(t,a,o);break;default:throw Error(q(161))}}catch(u){Oe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ux(t,e,n){J=t,y0(t)}function y0(t,e,n){for(var r=(t.mode&1)!==0;J!==null;){var i=J,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Zu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||It;a=Zu;var c=It;if(Zu=o,(It=u)&&!c)for(J=i;J!==null;)o=J,u=o.child,o.tag===22&&o.memoizedState!==null?cw(i):u!==null?(u.return=o,J=u):cw(i);for(;s!==null;)J=s,y0(s),s=s.sibling;J=i,Zu=a,It=c}lw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,J=s):lw(t)}}function lw(t){for(;J!==null;){var e=J;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:It||Mh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!It)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:yn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ml(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}It||e.flags&512&&Cp(e)}catch(g){Oe(e,e.return,g)}}if(e===t){J=null;break}if(n=e.sibling,n!==null){n.return=e.return,J=n;break}J=e.return}}function uw(t){for(;J!==null;){var e=J;if(e===t){J=null;break}var n=e.sibling;if(n!==null){n.return=e.return,J=n;break}J=e.return}}function cw(t){for(;J!==null;){var e=J;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Mh(4,e)}catch(u){Oe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Oe(e,i,u)}}var s=e.return;try{Cp(e)}catch(u){Oe(e,s,u)}break;case 5:var o=e.return;try{Cp(e)}catch(u){Oe(e,o,u)}}}catch(u){Oe(e,e.return,u)}if(e===t){J=null;break}var a=e.sibling;if(a!==null){a.return=e.return,J=a;break}J=e.return}}var Bx=Math.ceil,eh=pr.ReactCurrentDispatcher,cg=pr.ReactCurrentOwner,cn=pr.ReactCurrentBatchConfig,ce=0,nt=null,He=null,dt=0,Ht=0,Xs=pi(0),Ye=0,Pl=null,es=0,Fh=0,hg=0,Xa=null,Mt=null,dg=0,vo=1/0,Yn=null,th=!1,Np=null,Hr=null,ec=!1,Fr=null,nh=0,Za=0,Dp=null,vc=-1,wc=0;function kt(){return ce&6?ze():vc!==-1?vc:vc=ze()}function Qr(t){return t.mode&1?ce&2&&dt!==0?dt&-dt:Sx.transition!==null?(wc===0&&(wc=tT()),wc):(t=me,t!==0||(t=window.event,t=t===void 0?16:lT(t.type)),t):1}function In(t,e,n,r){if(50<Za)throw Za=0,Dp=null,Error(q(185));Xl(t,n,r),(!(ce&2)||t!==nt)&&(t===nt&&(!(ce&2)&&(Fh|=n),Ye===4&&Vr(t,dt)),qt(t,r),n===1&&ce===0&&!(e.mode&1)&&(vo=ze()+500,Vh&&mi()))}function qt(t,e){var n=t.callbackNode;SC(t,e);var r=jc(t,t===nt?dt:0);if(r===0)n!==null&&vv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&vv(n),e===1)t.tag===0?Tx(hw.bind(null,t)):RT(hw.bind(null,t)),vx(function(){!(ce&6)&&mi()}),n=null;else{switch(nT(r)){case 1:n=Fm;break;case 4:n=ZE;break;case 16:n=Fc;break;case 536870912:n=eT;break;default:n=Fc}n=A0(n,_0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _0(t,e){if(vc=-1,wc=0,ce&6)throw Error(q(327));var n=t.callbackNode;if(so()&&t.callbackNode!==n)return null;var r=jc(t,t===nt?dt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=rh(t,r);else{e=r;var i=ce;ce|=2;var s=w0();(nt!==t||dt!==e)&&(Yn=null,vo=ze()+500,Gi(t,e));do try{qx();break}catch(a){v0(t,a)}while(!0);Jm(),eh.current=s,ce=i,He!==null?e=0:(nt=null,dt=0,e=Ye)}if(e!==0){if(e===2&&(i=op(t),i!==0&&(r=i,e=Vp(t,i))),e===1)throw n=Pl,Gi(t,0),Vr(t,r),qt(t,ze()),n;if(e===6)Vr(t,r);else{if(i=t.current.alternate,!(r&30)&&!zx(i)&&(e=rh(t,r),e===2&&(s=op(t),s!==0&&(r=s,e=Vp(t,s))),e===1))throw n=Pl,Gi(t,0),Vr(t,r),qt(t,ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(q(345));case 2:bi(t,Mt,Yn);break;case 3:if(Vr(t,r),(r&130023424)===r&&(e=dg+500-ze(),10<e)){if(jc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){kt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=pp(bi.bind(null,t,Mt,Yn),e);break}bi(t,Mt,Yn);break;case 4:if(Vr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-wn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bx(r/1960))-r,10<r){t.timeoutHandle=pp(bi.bind(null,t,Mt,Yn),r);break}bi(t,Mt,Yn);break;case 5:bi(t,Mt,Yn);break;default:throw Error(q(329))}}}return qt(t,ze()),t.callbackNode===n?_0.bind(null,t):null}function Vp(t,e){var n=Xa;return t.current.memoizedState.isDehydrated&&(Gi(t,e).flags|=256),t=rh(t,e),t!==2&&(e=Mt,Mt=n,e!==null&&Op(e)),t}function Op(t){Mt===null?Mt=t:Mt.push.apply(Mt,t)}function zx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vr(t,e){for(e&=~hg,e&=~Fh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wn(e),r=1<<n;t[n]=-1,e&=~r}}function hw(t){if(ce&6)throw Error(q(327));so();var e=jc(t,0);if(!(e&1))return qt(t,ze()),null;var n=rh(t,e);if(t.tag!==0&&n===2){var r=op(t);r!==0&&(e=r,n=Vp(t,r))}if(n===1)throw n=Pl,Gi(t,0),Vr(t,e),qt(t,ze()),n;if(n===6)throw Error(q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,bi(t,Mt,Yn),qt(t,ze()),null}function fg(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(vo=ze()+500,Vh&&mi())}}function ts(t){Fr!==null&&Fr.tag===0&&!(ce&6)&&so();var e=ce;ce|=1;var n=cn.transition,r=me;try{if(cn.transition=null,me=1,t)return t()}finally{me=r,cn.transition=n,ce=e,!(ce&6)&&mi()}}function pg(){Ht=Xs.current,Te(Xs)}function Gi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_x(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(Hm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qc();break;case 3:yo(),Te(zt),Te(Et),rg();break;case 5:ng(r);break;case 4:yo();break;case 13:Te(xe);break;case 19:Te(xe);break;case 10:Xm(r.type._context);break;case 22:case 23:pg()}n=n.return}if(nt=t,He=t=Yr(t.current,null),dt=Ht=e,Ye=0,Pl=null,hg=Fh=es=0,Mt=Xa=null,Bi!==null){for(e=0;e<Bi.length;e++)if(n=Bi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Bi=null}return t}function v0(t,e){do{var n=He;try{if(Jm(),gc.current=Zc,Xc){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xc=!1}if(Zi=0,et=Qe=be=null,Ya=!1,Tl=0,cg.current=null,n===null||n.return===null){Ye=1,Pl=e,He=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=dt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Xv(o);if(v!==null){v.flags&=-257,Zv(v,o,a,s,e),v.mode&1&&Jv(s,c,e),e=v,u=c;var R=e.updateQueue;if(R===null){var k=new Set;k.add(u),e.updateQueue=k}else R.add(u);break e}else{if(!(e&1)){Jv(s,c,e),mg();break e}u=Error(q(426))}}else if(Ae&&a.mode&1){var x=Xv(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Zv(x,o,a,s,e),Qm(_o(u,a));break e}}s=u=_o(u,a),Ye!==4&&(Ye=2),Xa===null?Xa=[s]:Xa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=n0(s,u,e);Wv(s,E);break e;case 1:a=u;var w=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Hr===null||!Hr.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=r0(s,a,e);Wv(s,V);break e}}s=s.return}while(s!==null)}E0(n)}catch(j){e=j,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function w0(){var t=eh.current;return eh.current=Zc,t===null?Zc:t}function mg(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),nt===null||!(es&268435455)&&!(Fh&268435455)||Vr(nt,dt)}function rh(t,e){var n=ce;ce|=2;var r=w0();(nt!==t||dt!==e)&&(Yn=null,Gi(t,e));do try{$x();break}catch(i){v0(t,i)}while(!0);if(Jm(),ce=n,eh.current=r,He!==null)throw Error(q(261));return nt=null,dt=0,Ye}function $x(){for(;He!==null;)I0(He)}function qx(){for(;He!==null&&!mC();)I0(He)}function I0(t){var e=S0(t.alternate,t,Ht);t.memoizedProps=t.pendingProps,e===null?E0(t):He=e,cg.current=null}function E0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Mx(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,He=null;return}}else if(n=Lx(n,e,Ht),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Ye===0&&(Ye=5)}function bi(t,e,n){var r=me,i=cn.transition;try{cn.transition=null,me=1,Wx(t,e,n,r)}finally{cn.transition=i,me=r}return null}function Wx(t,e,n,r){do so();while(Fr!==null);if(ce&6)throw Error(q(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(q(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(AC(t,s),t===nt&&(He=nt=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ec||(ec=!0,A0(Fc,function(){return so(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=cn.transition,cn.transition=null;var o=me;me=1;var a=ce;ce|=4,cg.current=null,jx(t,n),g0(n,t),hx(dp),Uc=!!hp,dp=hp=null,t.current=n,Ux(n),gC(),ce=a,me=o,cn.transition=s}else t.current=n;if(ec&&(ec=!1,Fr=t,nh=i),s=t.pendingLanes,s===0&&(Hr=null),vC(n.stateNode),qt(t,ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(th)throw th=!1,t=Np,Np=null,t;return nh&1&&t.tag!==0&&so(),s=t.pendingLanes,s&1?t===Dp?Za++:(Za=0,Dp=t):Za=0,mi(),null}function so(){if(Fr!==null){var t=nT(nh),e=cn.transition,n=me;try{if(cn.transition=null,me=16>t?16:t,Fr===null)var r=!1;else{if(t=Fr,Fr=null,nh=0,ce&6)throw Error(q(331));var i=ce;for(ce|=4,J=t.current;J!==null;){var s=J,o=s.child;if(J.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(J=c;J!==null;){var d=J;switch(d.tag){case 0:case 11:case 15:Ja(8,d,s)}var f=d.child;if(f!==null)f.return=d,J=f;else for(;J!==null;){d=J;var g=d.sibling,v=d.return;if(f0(d),d===c){J=null;break}if(g!==null){g.return=v,J=g;break}J=v}}}var R=s.alternate;if(R!==null){var k=R.child;if(k!==null){R.child=null;do{var x=k.sibling;k.sibling=null,k=x}while(k!==null)}}J=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,J=o;else e:for(;J!==null;){if(s=J,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ja(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,J=E;break e}J=s.return}}var w=t.current;for(J=w;J!==null;){o=J;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,J=T;else e:for(o=w;J!==null;){if(a=J,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mh(9,a)}}catch(j){Oe(a,a.return,j)}if(a===o){J=null;break e}var V=a.sibling;if(V!==null){V.return=a.return,J=V;break e}J=a.return}}if(ce=i,mi(),Mn&&typeof Mn.onPostCommitFiberRoot=="function")try{Mn.onPostCommitFiberRoot(Ch,t)}catch{}r=!0}return r}finally{me=n,cn.transition=e}}return!1}function dw(t,e,n){e=_o(n,e),e=n0(t,e,1),t=Kr(t,e,1),e=kt(),t!==null&&(Xl(t,1,e),qt(t,e))}function Oe(t,e,n){if(t.tag===3)dw(t,t,n);else for(;e!==null;){if(e.tag===3){dw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hr===null||!Hr.has(r))){t=_o(n,t),t=r0(e,t,1),e=Kr(e,t,1),t=kt(),e!==null&&(Xl(e,1,t),qt(e,t));break}}e=e.return}}function Gx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=kt(),t.pingedLanes|=t.suspendedLanes&n,nt===t&&(dt&n)===n&&(Ye===4||Ye===3&&(dt&130023424)===dt&&500>ze()-dg?Gi(t,0):hg|=n),qt(t,e)}function T0(t,e){e===0&&(t.mode&1?(e=qu,qu<<=1,!(qu&130023424)&&(qu=4194304)):e=1);var n=kt();t=lr(t,e),t!==null&&(Xl(t,e,n),qt(t,n))}function Kx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),T0(t,n)}function Hx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(e),T0(t,n)}var S0;S0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||zt.current)Ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ft=!1,Ox(t,e,n);Ft=!!(t.flags&131072)}else Ft=!1,Ae&&e.flags&1048576&&kT(e,Kc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;_c(t,e),t=e.pendingProps;var i=po(e,Et.current);io(e,n),i=sg(null,e,r,t,i,n);var s=og();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$t(r)?(s=!0,Wc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eg(e),i.updater=Lh,e.stateNode=i,i._reactInternals=e,Ip(e,r,t,n),e=Sp(null,e,r,!0,s,n)):(e.tag=0,Ae&&s&&Km(e),At(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(_c(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Yx(r),t=yn(r,t),i){case 0:e=Tp(null,e,r,t,n);break e;case 1:e=nw(null,e,r,t,n);break e;case 11:e=ew(null,e,r,t,n);break e;case 14:e=tw(null,e,r,yn(r.type,t),n);break e}throw Error(q(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),Tp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),nw(t,e,r,i,n);case 3:e:{if(a0(e),t===null)throw Error(q(387));r=e.pendingProps,s=e.memoizedState,i=s.element,VT(t,e),Yc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=_o(Error(q(423)),e),e=rw(t,e,r,n,i);break e}else if(r!==i){i=_o(Error(q(424)),e),e=rw(t,e,r,n,i);break e}else for(Yt=Gr(e.stateNode.containerInfo.firstChild),Xt=e,Ae=!0,vn=null,n=NT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mo(),r===i){e=ur(t,e,n);break e}At(t,e,r,n)}e=e.child}return e;case 5:return OT(e),t===null&&_p(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,fp(r,i)?o=null:s!==null&&fp(r,s)&&(e.flags|=32),o0(t,e),At(t,e,o,n),e.child;case 6:return t===null&&_p(e),null;case 13:return l0(t,e,n);case 4:return tg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=go(e,null,r,n):At(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),ew(t,e,r,i,n);case 7:return At(t,e,e.pendingProps,n),e.child;case 8:return At(t,e,e.pendingProps.children,n),e.child;case 12:return At(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(Hc,r._currentValue),r._currentValue=o,s!==null)if(Tn(s.value,o)){if(s.children===i.children&&!zt.current){e=ur(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=ir(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),vp(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(q(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),vp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}At(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,io(e,n),i=dn(i),r=r(i),e.flags|=1,At(t,e,r,n),e.child;case 14:return r=e.type,i=yn(r,e.pendingProps),i=yn(r.type,i),tw(t,e,r,i,n);case 15:return i0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),_c(t,e),e.tag=1,$t(r)?(t=!0,Wc(e)):t=!1,io(e,n),t0(e,r,i),Ip(e,r,i,n),Sp(null,e,r,!0,t,n);case 19:return u0(t,e,n);case 22:return s0(t,e,n)}throw Error(q(156,e.tag))};function A0(t,e){return XE(t,e)}function Qx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(t,e,n,r){return new Qx(t,e,n,r)}function gg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yx(t){if(typeof t=="function")return gg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Om)return 11;if(t===Lm)return 14}return 2}function Yr(t,e){var n=t.alternate;return n===null?(n=an(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ic(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case zs:return Ki(n.children,i,s,e);case Vm:o=8,i|=8;break;case Wf:return t=an(12,n,e,i|2),t.elementType=Wf,t.lanes=s,t;case Gf:return t=an(13,n,e,i),t.elementType=Gf,t.lanes=s,t;case Kf:return t=an(19,n,e,i),t.elementType=Kf,t.lanes=s,t;case OE:return jh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case DE:o=10;break e;case VE:o=9;break e;case Om:o=11;break e;case Lm:o=14;break e;case br:o=16,r=null;break e}throw Error(q(130,t==null?t:typeof t,""))}return e=an(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ki(t,e,n,r){return t=an(7,t,r,e),t.lanes=n,t}function jh(t,e,n,r){return t=an(22,t,r,e),t.elementType=OE,t.lanes=n,t.stateNode={isHidden:!1},t}function Ef(t,e,n){return t=an(6,t,null,e),t.lanes=n,t}function Tf(t,e,n){return e=an(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Jx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nf(0),this.expirationTimes=nf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yg(t,e,n,r,i,s,o,a,u){return t=new Jx(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=an(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eg(s),t}function Xx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function P0(t){if(!t)return ti;t=t._reactInternals;e:{if(ys(t)!==t||t.tag!==1)throw Error(q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(q(171))}if(t.tag===1){var n=t.type;if($t(n))return PT(t,n,e)}return e}function R0(t,e,n,r,i,s,o,a,u){return t=yg(n,r,!0,t,i,s,o,a,u),t.context=P0(null),n=t.current,r=kt(),i=Qr(n),s=ir(r,i),s.callback=e??null,Kr(n,s,i),t.current.lanes=i,Xl(t,i,r),qt(t,r),t}function Uh(t,e,n,r){var i=e.current,s=kt(),o=Qr(i);return n=P0(n),e.context===null?e.context=n:e.pendingContext=n,e=ir(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Kr(i,e,o),t!==null&&(In(t,i,o,s),mc(t,i,o)),o}function ih(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _g(t,e){fw(t,e),(t=t.alternate)&&fw(t,e)}function Zx(){return null}var k0=typeof reportError=="function"?reportError:function(t){console.error(t)};function vg(t){this._internalRoot=t}Bh.prototype.render=vg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(q(409));Uh(t,e,null,null)};Bh.prototype.unmount=vg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ts(function(){Uh(null,t,null,null)}),e[ar]=null}};function Bh(t){this._internalRoot=t}Bh.prototype.unstable_scheduleHydration=function(t){if(t){var e=sT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Dr.length&&e!==0&&e<Dr[n].priority;n++);Dr.splice(n,0,t),n===0&&aT(t)}};function wg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pw(){}function eb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ih(o);s.call(c)}}var o=R0(e,r,t,0,null,!1,!1,"",pw);return t._reactRootContainer=o,t[ar]=o.current,_l(t.nodeType===8?t.parentNode:t),ts(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ih(u);a.call(c)}}var u=yg(t,0,!1,null,null,!1,!1,"",pw);return t._reactRootContainer=u,t[ar]=u.current,_l(t.nodeType===8?t.parentNode:t),ts(function(){Uh(e,u,n,r)}),u}function $h(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=ih(o);a.call(u)}}Uh(e,o,t,i)}else o=eb(n,e,t,i,r);return ih(o)}rT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ma(e.pendingLanes);n!==0&&(jm(e,n|1),qt(e,ze()),!(ce&6)&&(vo=ze()+500,mi()))}break;case 13:ts(function(){var r=lr(t,1);if(r!==null){var i=kt();In(r,t,1,i)}}),_g(t,1)}};Um=function(t){if(t.tag===13){var e=lr(t,134217728);if(e!==null){var n=kt();In(e,t,134217728,n)}_g(t,134217728)}};iT=function(t){if(t.tag===13){var e=Qr(t),n=lr(t,e);if(n!==null){var r=kt();In(n,t,e,r)}_g(t,e)}};sT=function(){return me};oT=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};rp=function(t,e,n){switch(e){case"input":if(Yf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Dh(r);if(!i)throw Error(q(90));ME(r),Yf(r,i)}}}break;case"textarea":jE(t,n);break;case"select":e=n.value,e!=null&&eo(t,!!n.multiple,e,!1)}};GE=fg;KE=ts;var tb={usingClientEntryPoint:!1,Events:[eu,Gs,Dh,qE,WE,fg]},Sa={findFiberByHostInstance:Ui,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nb={bundleType:Sa.bundleType,version:Sa.version,rendererPackageName:Sa.rendererPackageName,rendererConfig:Sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=YE(t),t===null?null:t.stateNode},findFiberByHostInstance:Sa.findFiberByHostInstance||Zx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tc.isDisabled&&tc.supportsFiber)try{Ch=tc.inject(nb),Mn=tc}catch{}}tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tb;tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wg(e))throw Error(q(200));return Xx(t,e,null,n)};tn.createRoot=function(t,e){if(!wg(t))throw Error(q(299));var n=!1,r="",i=k0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=yg(t,1,!1,null,null,n,!1,r,i),t[ar]=e.current,_l(t.nodeType===8?t.parentNode:t),new vg(e)};tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(q(188)):(t=Object.keys(t).join(","),Error(q(268,t)));return t=YE(e),t=t===null?null:t.stateNode,t};tn.flushSync=function(t){return ts(t)};tn.hydrate=function(t,e,n){if(!zh(e))throw Error(q(200));return $h(null,t,e,!0,n)};tn.hydrateRoot=function(t,e,n){if(!wg(t))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=k0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=R0(e,null,t,1,n??null,i,!1,s,o),t[ar]=e.current,_l(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Bh(e)};tn.render=function(t,e,n){if(!zh(e))throw Error(q(200));return $h(null,t,e,!1,n)};tn.unmountComponentAtNode=function(t){if(!zh(t))throw Error(q(40));return t._reactRootContainer?(ts(function(){$h(null,null,t,!1,function(){t._reactRootContainer=null,t[ar]=null})}),!0):!1};tn.unstable_batchedUpdates=fg;tn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!zh(n))throw Error(q(200));if(t==null||t._reactInternals===void 0)throw Error(q(38));return $h(t,e,n,!1,r)};tn.version="18.3.1-next-f1338f8080-20240426";function C0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C0)}catch(t){console.error(t)}}C0(),CE.exports=tn;var rb=CE.exports,x0,mw=rb;x0=mw.createRoot,mw.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rl(){return Rl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Rl.apply(null,arguments)}var jr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(jr||(jr={}));const gw="popstate";function ib(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:u=""}=_s(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Lp("",{pathname:o,search:a,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");a=c===-1?u:u.slice(0,c)}return a+"#"+(typeof s=="string"?s:sh(s))}function r(i,s){Ig(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return ob(e,n,r,t)}function qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ig(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function sb(){return Math.random().toString(36).substr(2,8)}function yw(t,e){return{usr:t.state,key:t.key,idx:e}}function Lp(t,e,n,r){return n===void 0&&(n=null),Rl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?_s(e):e,{state:n,key:e&&e.key||r||sb()})}function sh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function _s(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ob(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=jr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Rl({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=jr.Pop;let x=d(),E=x==null?null:x-c;c=x,u&&u({action:a,location:k.location,delta:E})}function g(x,E){a=jr.Push;let w=Lp(k.location,x,E);n&&n(w,x),c=d()+1;let T=yw(w,c),V=k.createHref(w);try{o.pushState(T,"",V)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(V)}s&&u&&u({action:a,location:k.location,delta:1})}function v(x,E){a=jr.Replace;let w=Lp(k.location,x,E);n&&n(w,x),c=d();let T=yw(w,c),V=k.createHref(w);o.replaceState(T,"",V),s&&u&&u({action:a,location:k.location,delta:0})}function R(x){let E=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof x=="string"?x:sh(x);return w=w.replace(/ $/,"%20"),qe(E,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,E)}let k={get action(){return a},get location(){return t(i,o)},listen(x){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(gw,f),u=x,()=>{i.removeEventListener(gw,f),u=null}},createHref(x){return e(i,x)},createURL:R,encodeLocation(x){let E=R(x);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:g,replace:v,go(x){return o.go(x)}};return k}var _w;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_w||(_w={}));function ab(t,e,n){return n===void 0&&(n="/"),lb(t,e,n)}function lb(t,e,n,r){let i=typeof e=="string"?_s(e):e,s=Eg(i.pathname||"/",n);if(s==null)return null;let o=b0(t);ub(o);let a=null,u=Ib(s);for(let c=0;a==null&&c<o.length;++c)a=_b(o[c],u);return a}function b0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(qe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Jr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(qe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),b0(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:gb(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of N0(s.path))i(s,o,u)}),e}function N0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=N0(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function ub(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:yb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const cb=/^:[\w-]+$/,hb=3,db=2,fb=1,pb=10,mb=-2,vw=t=>t==="*";function gb(t,e){let n=t.split("/"),r=n.length;return n.some(vw)&&(r+=mb),e&&(r+=db),n.filter(i=>!vw(i)).reduce((i,s)=>i+(cb.test(s)?hb:s===""?fb:pb),r)}function yb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function _b(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=vb({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),g=u.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Jr([s,f.pathname]),pathnameBase:Sb(Jr([s,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(s=Jr([s,f.pathnameBase]))}return o}function vb(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=wb(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:g,isOptional:v}=d;if(g==="*"){let k=a[f]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const R=a[f];return v&&!R?c[g]=void 0:c[g]=(R||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function wb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ig(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Ib(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ig(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Eg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Eb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?_s(t):t,s;return n?(n=D0(n),n.startsWith("/")?s=ww(n.substring(1),"/"):s=ww(n,e)):s=e,{pathname:s,search:Ab(r),hash:Pb(i)}}function ww(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Tb(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Tg(t,e){let n=Tb(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Sg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=_s(t):(i=Rl({},t),qe(!i.pathname||!i.pathname.includes("?"),Sf("?","pathname","search",i)),qe(!i.pathname||!i.pathname.includes("#"),Sf("#","pathname","hash",i)),qe(!i.search||!i.search.includes("#"),Sf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}a=f>=0?e[f]:"/"}let u=Eb(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const D0=t=>t.replace(/\/\/+/g,"/"),Jr=t=>D0(t.join("/")),Sb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Ab=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Pb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Rb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const V0=["post","put","patch","delete"];new Set(V0);const kb=["get",...V0];new Set(kb);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kl(){return kl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},kl.apply(null,arguments)}const Ag=O.createContext(null),Cb=O.createContext(null),gi=O.createContext(null),qh=O.createContext(null),mr=O.createContext({outlet:null,matches:[],isDataRoute:!1}),O0=O.createContext(null);function xb(t,e){let{relative:n}=e===void 0?{}:e;Uo()||qe(!1);let{basename:r,navigator:i}=O.useContext(gi),{hash:s,pathname:o,search:a}=F0(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Jr([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Uo(){return O.useContext(qh)!=null}function yi(){return Uo()||qe(!1),O.useContext(qh).location}function L0(t){O.useContext(gi).static||O.useLayoutEffect(t)}function gr(){let{isDataRoute:t}=O.useContext(mr);return t?$b():bb()}function bb(){Uo()||qe(!1);let t=O.useContext(Ag),{basename:e,future:n,navigator:r}=O.useContext(gi),{matches:i}=O.useContext(mr),{pathname:s}=yi(),o=JSON.stringify(Tg(i,n.v7_relativeSplatPath)),a=O.useRef(!1);return L0(()=>{a.current=!0}),O.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Sg(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Jr([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}function M0(){let{matches:t}=O.useContext(mr),e=t[t.length-1];return e?e.params:{}}function F0(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(gi),{matches:i}=O.useContext(mr),{pathname:s}=yi(),o=JSON.stringify(Tg(i,r.v7_relativeSplatPath));return O.useMemo(()=>Sg(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Nb(t,e){return Db(t,e)}function Db(t,e,n,r){Uo()||qe(!1);let{navigator:i}=O.useContext(gi),{matches:s}=O.useContext(mr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=yi(),d;if(e){var f;let x=typeof e=="string"?_s(e):e;u==="/"||(f=x.pathname)!=null&&f.startsWith(u)||qe(!1),d=x}else d=c;let g=d.pathname||"/",v=g;if(u!=="/"){let x=u.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(x.length).join("/")}let R=ab(t,{pathname:v}),k=Fb(R&&R.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:Jr([u,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?u:Jr([u,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,r);return e&&k?O.createElement(qh.Provider,{value:{location:kl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:jr.Pop}},k):k}function Vb(){let t=zb(),e=Rb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,null)}const Ob=O.createElement(Vb,null);class Lb extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(mr.Provider,{value:this.props.routeContext},O.createElement(O0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Mb(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(Ag);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(mr.Provider,{value:e},r)}function Fb(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||qe(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:g,errors:v}=n,R=f.route.loader&&g[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||R){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,g)=>{let v,R=!1,k=null,x=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,k=f.route.errorElement||Ob,u&&(c<0&&g===0?(qb("route-fallback"),R=!0,x=null):c===g&&(R=!0,x=f.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,g+1)),w=()=>{let T;return v?T=k:R?T=x:f.route.Component?T=O.createElement(f.route.Component,null):f.route.element?T=f.route.element:T=d,O.createElement(Mb,{match:f,routeContext:{outlet:d,matches:E,isDataRoute:n!=null},children:T})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?O.createElement(Lb,{location:n.location,revalidation:n.revalidation,component:k,error:v,children:w(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):w()},null)}var j0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(j0||{}),U0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(U0||{});function jb(t){let e=O.useContext(Ag);return e||qe(!1),e}function Ub(t){let e=O.useContext(Cb);return e||qe(!1),e}function Bb(t){let e=O.useContext(mr);return e||qe(!1),e}function B0(t){let e=Bb(),n=e.matches[e.matches.length-1];return n.route.id||qe(!1),n.route.id}function zb(){var t;let e=O.useContext(O0),n=Ub(),r=B0();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function $b(){let{router:t}=jb(j0.UseNavigateStable),e=B0(U0.UseNavigateStable),n=O.useRef(!1);return L0(()=>{n.current=!0}),O.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,kl({fromRouteId:e},s)))},[t,e])}const Iw={};function qb(t,e,n){Iw[t]||(Iw[t]=!0)}function Wb(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function z0(t){let{to:e,replace:n,state:r,relative:i}=t;Uo()||qe(!1);let{future:s,static:o}=O.useContext(gi),{matches:a}=O.useContext(mr),{pathname:u}=yi(),c=gr(),d=Sg(e,Tg(a,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return O.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function xr(t){qe(!1)}function Gb(t){let{basename:e="/",children:n=null,location:r,navigationType:i=jr.Pop,navigator:s,static:o=!1,future:a}=t;Uo()&&qe(!1);let u=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:u,navigator:s,static:o,future:kl({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=_s(r));let{pathname:d="/",search:f="",hash:g="",state:v=null,key:R="default"}=r,k=O.useMemo(()=>{let x=Eg(d,u);return x==null?null:{location:{pathname:x,search:f,hash:g,state:v,key:R},navigationType:i}},[u,d,f,g,v,R,i]);return k==null?null:O.createElement(gi.Provider,{value:c},O.createElement(qh.Provider,{children:n,value:k}))}function Kb(t){let{children:e,location:n}=t;return Nb(Mp(e),n)}new Promise(()=>{});function Mp(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let s=[...e,i];if(r.type===O.Fragment){n.push.apply(n,Mp(r.props.children,s));return}r.type!==xr&&qe(!1),!r.props.index||!r.props.children||qe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Mp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fp(){return Fp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fp.apply(null,arguments)}function Hb(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function Qb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Yb(t,e){return t.button===0&&(!e||e==="_self")&&!Qb(t)}function jp(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function Jb(t,e){let n=jp(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const Xb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Zb="6";try{window.__reactRouterVersion=Zb}catch{}const eN="startTransition",Ew=Gk[eN];function tN(t){let{basename:e,children:n,future:r,window:i}=t,s=O.useRef();s.current==null&&(s.current=ib({window:i,v5Compat:!0}));let o=s.current,[a,u]=O.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=O.useCallback(f=>{c&&Ew?Ew(()=>u(f)):u(f)},[u,c]);return O.useLayoutEffect(()=>o.listen(d),[o,d]),O.useEffect(()=>Wb(r),[r]),O.createElement(Gb,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const nN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ur=O.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d,viewTransition:f}=e,g=Hb(e,Xb),{basename:v}=O.useContext(gi),R,k=!1;if(typeof c=="string"&&rN.test(c)&&(R=c,nN))try{let T=new URL(window.location.href),V=c.startsWith("//")?new URL(T.protocol+c):new URL(c),j=Eg(V.pathname,v);V.origin===T.origin&&j!=null?c=j+V.search+V.hash:k=!0}catch{}let x=xb(c,{relative:i}),E=iN(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i,viewTransition:f});function w(T){r&&r(T),T.defaultPrevented||E(T)}return O.createElement("a",Fp({},g,{href:R||x,onClick:k||s?r:w,ref:n,target:u}))});var Tw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Tw||(Tw={}));var Sw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Sw||(Sw={}));function iN(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,u=gr(),c=yi(),d=F0(t,{relative:o});return O.useCallback(f=>{if(Yb(f,n)){f.preventDefault();let g=r!==void 0?r:sh(c)===sh(d);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,u,d,r,i,n,t,s,o,a])}function sN(t){let e=O.useRef(jp(t)),n=O.useRef(!1),r=yi(),i=O.useMemo(()=>Jb(r.search,n.current?null:e.current),[r.search]),s=gr(),o=O.useCallback((a,u)=>{const c=jp(typeof a=="function"?a(i):a);n.current=!0,s("?"+c,u)},[s,i]);return[i,o]}var Aw={};/**
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
 */const $0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},oN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},q0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let g=(a&15)<<2|c>>6,v=c&63;u||(v=64,o||(g=64)),r.push(n[d],n[f],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new aN;const g=s<<2|a>>4;if(r.push(g),c!==64){const v=a<<4&240|c>>2;if(r.push(v),f!==64){const R=c<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lN=function(t){const e=$0(t);return q0.encodeByteArray(e,!0)},oh=function(t){return lN(t).replace(/\./g,"")},W0=function(t){try{return q0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ah(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!uN(n)||(t[n]=ah(t[n],e[n]));return t}function uN(t){return t!=="__proto__"}/**
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
 */function cN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hN=()=>cN().__FIREBASE_DEFAULTS__,dN=()=>{if(typeof process>"u"||typeof Aw>"u")return;const t=Aw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&W0(t[1]);return e&&JSON.parse(e)},Pg=()=>{try{return hN()||dN()||fN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},G0=()=>{var t;return(t=Pg())===null||t===void 0?void 0:t.config},pN=t=>{var e;return(e=Pg())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class mN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function gN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[oh(JSON.stringify(n)),oh(JSON.stringify(o)),""].join(".")}/**
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
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Rg(){var t;const e=(t=Pg())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function K0(){return typeof self=="object"&&self.self===self}function H0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Q0(){const t=Ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Y0(){return!Rg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Cl(){try{return typeof indexedDB=="object"}catch{return!1}}function _N(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const vN="FirebaseError";class Ct extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vN,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vs.prototype.create)}}class vs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ct(i,a,r)}}function wN(t,e){return t.replace(IN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const IN=/\{\$([^}]+)}/g;/**
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
 */function Pw(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function EN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Rw(s)&&Rw(o)){if(!xl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Rw(t){return t!==null&&typeof t=="object"}/**
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
 */function Bo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ja(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function J0(t,e){const n=new TN(t,e);return n.subscribe.bind(n)}class TN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");SN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Af),i.error===void 0&&(i.error=Af),i.complete===void 0&&(i.complete=Af);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Af(){}/**
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
 */function te(t){return t&&t._delegate?t._delegate:t}class Bn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ni="[DEFAULT]";/**
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
 */class AN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RN(e))try{this.getOrInitializeService({instanceIdentifier:Ni})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ni){return this.instances.has(e)}getOptions(e=Ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ni){return this.component?this.component.multipleInstances?e:Ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PN(t){return t===Ni?void 0:t}function RN(t){return t.instantiationMode==="EAGER"}/**
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
 */class X0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Cg=[];var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const Z0={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},kN=ie.INFO,CN={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},xN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=CN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wh{constructor(e){this.name=e,this._logLevel=kN,this._logHandler=xN,this._userLogHandler=null,Cg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Z0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}function bN(t){Cg.forEach(e=>{e.setLogLevel(t)})}function NN(t,e){for(const n of Cg){let r=null;e&&e.level&&(r=Z0[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&t({level:ie[s].toLowerCase(),message:a,args:o,type:i.name})}}}const DN=(t,e)=>e.some(n=>t instanceof n);let kw,Cw;function VN(){return kw||(kw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ON(){return Cw||(Cw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eS=new WeakMap,Up=new WeakMap,tS=new WeakMap,Pf=new WeakMap,xg=new WeakMap;function LN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Xr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&eS.set(n,t)}).catch(()=>{}),xg.set(e,t),e}function MN(t){if(Up.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Up.set(t,e)}let Bp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Up.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FN(t){Bp=t(Bp)}function jN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rf(this),e,...n);return tS.set(r,e.sort?e.sort():[e]),Xr(r)}:ON().includes(t)?function(...e){return t.apply(Rf(this),e),Xr(eS.get(this))}:function(...e){return Xr(t.apply(Rf(this),e))}}function UN(t){return typeof t=="function"?jN(t):(t instanceof IDBTransaction&&MN(t),DN(t,VN())?new Proxy(t,Bp):t)}function Xr(t){if(t instanceof IDBRequest)return LN(t);if(Pf.has(t))return Pf.get(t);const e=UN(t);return e!==t&&(Pf.set(t,e),xg.set(e,t)),e}const Rf=t=>xg.get(t);function BN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Xr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Xr(o.result),u.oldVersion,u.newVersion,Xr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const zN=["get","getKey","getAll","getAllKeys","count"],$N=["put","add","delete","clear"],kf=new Map;function xw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kf.get(e))return kf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=$N.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zN.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return kf.set(e,s),s}FN(t=>({...t,get:(e,n,r)=>xw(e,n)||t.get(e,n,r),has:(e,n)=>!!xw(e,n)||t.has(e,n)}));/**
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
 */class qN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function WN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lh="@firebase/app",zp="0.10.5";/**
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
 */const ns=new Wh("@firebase/app"),GN="@firebase/app-compat",KN="@firebase/analytics-compat",HN="@firebase/analytics",QN="@firebase/app-check-compat",YN="@firebase/app-check",JN="@firebase/auth",XN="@firebase/auth-compat",ZN="@firebase/database",e1="@firebase/database-compat",t1="@firebase/functions",n1="@firebase/functions-compat",r1="@firebase/installations",i1="@firebase/installations-compat",s1="@firebase/messaging",o1="@firebase/messaging-compat",a1="@firebase/performance",l1="@firebase/performance-compat",u1="@firebase/remote-config",c1="@firebase/remote-config-compat",h1="@firebase/storage",d1="@firebase/storage-compat",f1="@firebase/firestore",p1="@firebase/vertexai-preview",m1="@firebase/firestore-compat",g1="firebase",y1="10.12.2";/**
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
 */const ni="[DEFAULT]",_1={[lh]:"fire-core",[GN]:"fire-core-compat",[HN]:"fire-analytics",[KN]:"fire-analytics-compat",[YN]:"fire-app-check",[QN]:"fire-app-check-compat",[JN]:"fire-auth",[XN]:"fire-auth-compat",[ZN]:"fire-rtdb",[e1]:"fire-rtdb-compat",[t1]:"fire-fn",[n1]:"fire-fn-compat",[r1]:"fire-iid",[i1]:"fire-iid-compat",[s1]:"fire-fcm",[o1]:"fire-fcm-compat",[a1]:"fire-perf",[l1]:"fire-perf-compat",[u1]:"fire-rc",[c1]:"fire-rc-compat",[h1]:"fire-gcs",[d1]:"fire-gcs-compat",[f1]:"fire-fst",[m1]:"fire-fst-compat",[p1]:"fire-vertex","fire-js":"fire-js",[g1]:"fire-js-all"};/**
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
 */const ri=new Map,wo=new Map,Io=new Map;function bl(t,e){try{t.container.addComponent(e)}catch(n){ns.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function nS(t,e){t.container.addOrOverwriteComponent(e)}function ii(t){const e=t.name;if(Io.has(e))return ns.debug(`There were multiple attempts to register component ${e}.`),!1;Io.set(e,t);for(const n of ri.values())bl(n,t);for(const n of wo.values())bl(n,t);return!0}function rS(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function v1(t,e,n=ni){rS(t,e).clearInstance(n)}function iS(t){return t.options!==void 0}function Me(t){return t.settings!==void 0}function w1(){Io.clear()}/**
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
 */const I1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hn=new vs("app","Firebase",I1);/**
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
 */let sS=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hn.create("app-deleted",{appName:this._name})}};/**
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
 */class E1 extends sS{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,En(lh,zp,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Ng(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw hn.create("server-app-deleted")}}/**
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
 */const _i=y1;function bg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ni,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw hn.create("bad-app-name",{appName:String(i)});if(n||(n=G0()),!n)throw hn.create("no-options");const s=ri.get(i);if(s){if(xl(n,s.options)&&xl(r,s.config))return s;throw hn.create("duplicate-app",{appName:i})}const o=new X0(i);for(const u of Io.values())o.addComponent(u);const a=new sS(n,r,o);return ri.set(i,a),a}function T1(t,e){if(K0())throw hn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;iS(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((d,f)=>Math.imul(31,d)+f.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw hn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=wo.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new X0(s);for(const c of Io.values())a.addComponent(c);const u=new E1(n,e,s,a);return wo.set(s,u),u}function S1(t=ni){const e=ri.get(t);if(!e&&t===ni&&G0())return bg();if(!e)throw hn.create("no-app",{appName:t});return e}function A1(){return Array.from(ri.values())}async function Ng(t){let e=!1;const n=t.name;ri.has(n)?(e=!0,ri.delete(n)):wo.has(n)&&t.decRefCount()<=0&&(wo.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function En(t,e,n){var r;let i=(r=_1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ns.warn(a.join(" "));return}ii(new Bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function oS(t,e){if(t!==null&&typeof t!="function")throw hn.create("invalid-log-argument");NN(t,e)}function aS(t){bN(t)}/**
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
 */const P1="firebase-heartbeat-database",R1=1,Nl="firebase-heartbeat-store";let Cf=null;function lS(){return Cf||(Cf=BN(P1,R1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Nl)}catch(n){console.warn(n)}}}}).catch(t=>{throw hn.create("idb-open",{originalErrorMessage:t.message})})),Cf}async function k1(t){try{const n=(await lS()).transaction(Nl),r=await n.objectStore(Nl).get(uS(t));return await n.done,r}catch(e){if(e instanceof Ct)ns.warn(e.message);else{const n=hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ns.warn(n.message)}}}async function bw(t,e){try{const r=(await lS()).transaction(Nl,"readwrite");await r.objectStore(Nl).put(e,uS(t)),await r.done}catch(n){if(n instanceof Ct)ns.warn(n.message);else{const r=hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ns.warn(r.message)}}}function uS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const C1=1024,x1=30*24*60*60*1e3;class b1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new D1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Nw();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=x1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nw(),{heartbeatsToSend:r,unsentEntries:i}=N1(this._heartbeatsCache.heartbeats),s=oh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Nw(){return new Date().toISOString().substring(0,10)}function N1(t,e=C1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Dw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class D1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cl()?_N().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await k1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dw(t){return oh(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function V1(t){ii(new Bn("platform-logger",e=>new qN(e),"PRIVATE")),ii(new Bn("heartbeat",e=>new b1(e),"PRIVATE")),En(lh,zp,t),En(lh,zp,"esm2017"),En("fire-js","")}V1("");const O1=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Ct,SDK_VERSION:_i,_DEFAULT_ENTRY_NAME:ni,_addComponent:bl,_addOrOverwriteComponent:nS,_apps:ri,_clearComponents:w1,_components:Io,_getProvider:rS,_isFirebaseApp:iS,_isFirebaseServerApp:Me,_registerComponent:ii,_removeServiceInstance:v1,_serverApps:wo,deleteApp:Ng,getApp:S1,getApps:A1,initializeApp:bg,initializeServerApp:T1,onLog:oS,registerVersion:En,setLogLevel:aS},Symbol.toStringTag,{value:"Module"}));/**
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
 */class L1{constructor(e,n){this._delegate=e,this.firebase=n,bl(e,new Bn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Ng(this._delegate)))}_getService(e,n=ni){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=ni){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){bl(this._delegate,e)}_addOrOverwriteComponent(e){nS(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const M1={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Vw=new vs("app-compat","Firebase",M1);/**
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
 */function F1(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:En,setLogLevel:aS,onLog:oS,apps:null,SDK_VERSION:_i,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:O1}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||ni,!Pw(e,c))throw Vw.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,d={}){const f=bg(c,d);if(Pw(e,f.name))return e[f.name];const g=new t(f,n);return e[f.name]=g,g}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const d=c.name,f=d.replace("-compat","");if(ii(c)&&c.type==="PUBLIC"){const g=(v=i())=>{if(typeof v[f]!="function")throw Vw.create("invalid-app-argument",{appName:d});return v[f]()};c.serviceProps!==void 0&&ah(g,c.serviceProps),n[f]=g,t.prototype[f]=function(...v){return this._getService.bind(this,d).apply(this,c.multipleInstances?v:[])}}return c.type==="PUBLIC"?n[f]:null}function u(c,d){return d==="serverAuth"?null:d}return n}/**
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
 */function cS(){const t=F1(L1);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:cS,extendNamespace:e,createSubscribe:J0,ErrorFactory:vs,deepExtend:ah});function e(n){ah(t,n)}return t}const j1=cS();/**
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
 */const Ow=new Wh("@firebase/app-compat"),U1="@firebase/app-compat",B1="0.2.35";/**
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
 */function z1(t){En(U1,B1,t)}/**
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
 */if(K0()&&self.firebase!==void 0){Ow.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Ow.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ln=j1;z1();var $1="firebase",q1="10.12.2";/**
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
 */ln.registerVersion($1,q1,"app-compat");var Lw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hi,hS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function S(){}S.prototype=_.prototype,I.D=_.prototype,I.prototype=new S,I.prototype.constructor=I,I.C=function(A,C,b){for(var P=Array(arguments.length-2),at=2;at<arguments.length;at++)P[at-2]=arguments[at];return _.prototype[C].apply(A,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,_,S){S||(S=0);var A=Array(16);if(typeof _=="string")for(var C=0;16>C;++C)A[C]=_.charCodeAt(S++)|_.charCodeAt(S++)<<8|_.charCodeAt(S++)<<16|_.charCodeAt(S++)<<24;else for(C=0;16>C;++C)A[C]=_[S++]|_[S++]<<8|_[S++]<<16|_[S++]<<24;_=I.g[0],S=I.g[1],C=I.g[2];var b=I.g[3],P=_+(b^S&(C^b))+A[0]+3614090360&4294967295;_=S+(P<<7&4294967295|P>>>25),P=b+(C^_&(S^C))+A[1]+3905402710&4294967295,b=_+(P<<12&4294967295|P>>>20),P=C+(S^b&(_^S))+A[2]+606105819&4294967295,C=b+(P<<17&4294967295|P>>>15),P=S+(_^C&(b^_))+A[3]+3250441966&4294967295,S=C+(P<<22&4294967295|P>>>10),P=_+(b^S&(C^b))+A[4]+4118548399&4294967295,_=S+(P<<7&4294967295|P>>>25),P=b+(C^_&(S^C))+A[5]+1200080426&4294967295,b=_+(P<<12&4294967295|P>>>20),P=C+(S^b&(_^S))+A[6]+2821735955&4294967295,C=b+(P<<17&4294967295|P>>>15),P=S+(_^C&(b^_))+A[7]+4249261313&4294967295,S=C+(P<<22&4294967295|P>>>10),P=_+(b^S&(C^b))+A[8]+1770035416&4294967295,_=S+(P<<7&4294967295|P>>>25),P=b+(C^_&(S^C))+A[9]+2336552879&4294967295,b=_+(P<<12&4294967295|P>>>20),P=C+(S^b&(_^S))+A[10]+4294925233&4294967295,C=b+(P<<17&4294967295|P>>>15),P=S+(_^C&(b^_))+A[11]+2304563134&4294967295,S=C+(P<<22&4294967295|P>>>10),P=_+(b^S&(C^b))+A[12]+1804603682&4294967295,_=S+(P<<7&4294967295|P>>>25),P=b+(C^_&(S^C))+A[13]+4254626195&4294967295,b=_+(P<<12&4294967295|P>>>20),P=C+(S^b&(_^S))+A[14]+2792965006&4294967295,C=b+(P<<17&4294967295|P>>>15),P=S+(_^C&(b^_))+A[15]+1236535329&4294967295,S=C+(P<<22&4294967295|P>>>10),P=_+(C^b&(S^C))+A[1]+4129170786&4294967295,_=S+(P<<5&4294967295|P>>>27),P=b+(S^C&(_^S))+A[6]+3225465664&4294967295,b=_+(P<<9&4294967295|P>>>23),P=C+(_^S&(b^_))+A[11]+643717713&4294967295,C=b+(P<<14&4294967295|P>>>18),P=S+(b^_&(C^b))+A[0]+3921069994&4294967295,S=C+(P<<20&4294967295|P>>>12),P=_+(C^b&(S^C))+A[5]+3593408605&4294967295,_=S+(P<<5&4294967295|P>>>27),P=b+(S^C&(_^S))+A[10]+38016083&4294967295,b=_+(P<<9&4294967295|P>>>23),P=C+(_^S&(b^_))+A[15]+3634488961&4294967295,C=b+(P<<14&4294967295|P>>>18),P=S+(b^_&(C^b))+A[4]+3889429448&4294967295,S=C+(P<<20&4294967295|P>>>12),P=_+(C^b&(S^C))+A[9]+568446438&4294967295,_=S+(P<<5&4294967295|P>>>27),P=b+(S^C&(_^S))+A[14]+3275163606&4294967295,b=_+(P<<9&4294967295|P>>>23),P=C+(_^S&(b^_))+A[3]+4107603335&4294967295,C=b+(P<<14&4294967295|P>>>18),P=S+(b^_&(C^b))+A[8]+1163531501&4294967295,S=C+(P<<20&4294967295|P>>>12),P=_+(C^b&(S^C))+A[13]+2850285829&4294967295,_=S+(P<<5&4294967295|P>>>27),P=b+(S^C&(_^S))+A[2]+4243563512&4294967295,b=_+(P<<9&4294967295|P>>>23),P=C+(_^S&(b^_))+A[7]+1735328473&4294967295,C=b+(P<<14&4294967295|P>>>18),P=S+(b^_&(C^b))+A[12]+2368359562&4294967295,S=C+(P<<20&4294967295|P>>>12),P=_+(S^C^b)+A[5]+4294588738&4294967295,_=S+(P<<4&4294967295|P>>>28),P=b+(_^S^C)+A[8]+2272392833&4294967295,b=_+(P<<11&4294967295|P>>>21),P=C+(b^_^S)+A[11]+1839030562&4294967295,C=b+(P<<16&4294967295|P>>>16),P=S+(C^b^_)+A[14]+4259657740&4294967295,S=C+(P<<23&4294967295|P>>>9),P=_+(S^C^b)+A[1]+2763975236&4294967295,_=S+(P<<4&4294967295|P>>>28),P=b+(_^S^C)+A[4]+1272893353&4294967295,b=_+(P<<11&4294967295|P>>>21),P=C+(b^_^S)+A[7]+4139469664&4294967295,C=b+(P<<16&4294967295|P>>>16),P=S+(C^b^_)+A[10]+3200236656&4294967295,S=C+(P<<23&4294967295|P>>>9),P=_+(S^C^b)+A[13]+681279174&4294967295,_=S+(P<<4&4294967295|P>>>28),P=b+(_^S^C)+A[0]+3936430074&4294967295,b=_+(P<<11&4294967295|P>>>21),P=C+(b^_^S)+A[3]+3572445317&4294967295,C=b+(P<<16&4294967295|P>>>16),P=S+(C^b^_)+A[6]+76029189&4294967295,S=C+(P<<23&4294967295|P>>>9),P=_+(S^C^b)+A[9]+3654602809&4294967295,_=S+(P<<4&4294967295|P>>>28),P=b+(_^S^C)+A[12]+3873151461&4294967295,b=_+(P<<11&4294967295|P>>>21),P=C+(b^_^S)+A[15]+530742520&4294967295,C=b+(P<<16&4294967295|P>>>16),P=S+(C^b^_)+A[2]+3299628645&4294967295,S=C+(P<<23&4294967295|P>>>9),P=_+(C^(S|~b))+A[0]+4096336452&4294967295,_=S+(P<<6&4294967295|P>>>26),P=b+(S^(_|~C))+A[7]+1126891415&4294967295,b=_+(P<<10&4294967295|P>>>22),P=C+(_^(b|~S))+A[14]+2878612391&4294967295,C=b+(P<<15&4294967295|P>>>17),P=S+(b^(C|~_))+A[5]+4237533241&4294967295,S=C+(P<<21&4294967295|P>>>11),P=_+(C^(S|~b))+A[12]+1700485571&4294967295,_=S+(P<<6&4294967295|P>>>26),P=b+(S^(_|~C))+A[3]+2399980690&4294967295,b=_+(P<<10&4294967295|P>>>22),P=C+(_^(b|~S))+A[10]+4293915773&4294967295,C=b+(P<<15&4294967295|P>>>17),P=S+(b^(C|~_))+A[1]+2240044497&4294967295,S=C+(P<<21&4294967295|P>>>11),P=_+(C^(S|~b))+A[8]+1873313359&4294967295,_=S+(P<<6&4294967295|P>>>26),P=b+(S^(_|~C))+A[15]+4264355552&4294967295,b=_+(P<<10&4294967295|P>>>22),P=C+(_^(b|~S))+A[6]+2734768916&4294967295,C=b+(P<<15&4294967295|P>>>17),P=S+(b^(C|~_))+A[13]+1309151649&4294967295,S=C+(P<<21&4294967295|P>>>11),P=_+(C^(S|~b))+A[4]+4149444226&4294967295,_=S+(P<<6&4294967295|P>>>26),P=b+(S^(_|~C))+A[11]+3174756917&4294967295,b=_+(P<<10&4294967295|P>>>22),P=C+(_^(b|~S))+A[2]+718787259&4294967295,C=b+(P<<15&4294967295|P>>>17),P=S+(b^(C|~_))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(C+(P<<21&4294967295|P>>>11))&4294967295,I.g[2]=I.g[2]+C&4294967295,I.g[3]=I.g[3]+b&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var S=_-this.blockSize,A=this.B,C=this.h,b=0;b<_;){if(C==0)for(;b<=S;)i(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<_;)if(A[C++]=I.charCodeAt(b++),C==this.blockSize){i(this,A),C=0;break}}else for(;b<_;)if(A[C++]=I[b++],C==this.blockSize){i(this,A),C=0;break}}this.h=C,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var S=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=S&255,S/=256;for(this.u(I),I=Array(16),_=S=0;4>_;++_)for(var A=0;32>A;A+=8)I[S++]=this.g[_]>>>A&255;return I};function s(I,_){var S=a;return Object.prototype.hasOwnProperty.call(S,I)?S[I]:S[I]=_(I)}function o(I,_){this.h=_;for(var S=[],A=!0,C=I.length-1;0<=C;C--){var b=I[C]|0;A&&b==_||(S[C]=b,A=!1)}this.g=S}var a={};function u(I){return-128<=I&&128>I?s(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return x(c(-I));for(var _=[],S=1,A=0;I>=S;A++)_[A]=I/S|0,S*=4294967296;return new o(_,0)}function d(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return x(d(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(_,8)),A=f,C=0;C<I.length;C+=8){var b=Math.min(8,I.length-C),P=parseInt(I.substring(C,C+b),_);8>b?(b=c(Math.pow(_,b)),A=A.j(b).add(c(P))):(A=A.j(S),A=A.add(c(P)))}return A}var f=u(0),g=u(1),v=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-x(this).m();for(var I=0,_=1,S=0;S<this.g.length;S++){var A=this.i(S);I+=(0<=A?A:4294967296+A)*_,_*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(k(this))return"-"+x(this).toString(I);for(var _=c(Math.pow(I,6)),S=this,A="";;){var C=V(S,_).g;S=E(S,C.j(_));var b=((0<S.g.length?S.g[0]:S.h)>>>0).toString(I);if(S=C,R(S))return b+A;for(;6>b.length;)b="0"+b;A=b+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function k(I){return I.h==-1}t.l=function(I){return I=E(this,I),k(I)?-1:R(I)?0:1};function x(I){for(var _=I.g.length,S=[],A=0;A<_;A++)S[A]=~I.g[A];return new o(S,~I.h).add(g)}t.abs=function(){return k(this)?x(this):this},t.add=function(I){for(var _=Math.max(this.g.length,I.g.length),S=[],A=0,C=0;C<=_;C++){var b=A+(this.i(C)&65535)+(I.i(C)&65535),P=(b>>>16)+(this.i(C)>>>16)+(I.i(C)>>>16);A=P>>>16,b&=65535,P&=65535,S[C]=P<<16|b}return new o(S,S[S.length-1]&-2147483648?-1:0)};function E(I,_){return I.add(x(_))}t.j=function(I){if(R(this)||R(I))return f;if(k(this))return k(I)?x(this).j(x(I)):x(x(this).j(I));if(k(I))return x(this.j(x(I)));if(0>this.l(v)&&0>I.l(v))return c(this.m()*I.m());for(var _=this.g.length+I.g.length,S=[],A=0;A<2*_;A++)S[A]=0;for(A=0;A<this.g.length;A++)for(var C=0;C<I.g.length;C++){var b=this.i(A)>>>16,P=this.i(A)&65535,at=I.i(C)>>>16,Wt=I.i(C)&65535;S[2*A+2*C]+=P*Wt,w(S,2*A+2*C),S[2*A+2*C+1]+=b*Wt,w(S,2*A+2*C+1),S[2*A+2*C+1]+=P*at,w(S,2*A+2*C+1),S[2*A+2*C+2]+=b*at,w(S,2*A+2*C+2)}for(A=0;A<_;A++)S[A]=S[2*A+1]<<16|S[2*A];for(A=_;A<2*_;A++)S[A]=0;return new o(S,0)};function w(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function T(I,_){this.g=I,this.h=_}function V(I,_){if(R(_))throw Error("division by zero");if(R(I))return new T(f,f);if(k(I))return _=V(x(I),_),new T(x(_.g),x(_.h));if(k(_))return _=V(I,x(_)),new T(x(_.g),_.h);if(30<I.g.length){if(k(I)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var S=g,A=_;0>=A.l(I);)S=j(S),A=j(A);var C=F(S,1),b=F(A,1);for(A=F(A,2),S=F(S,2);!R(A);){var P=b.add(A);0>=P.l(I)&&(C=C.add(S),b=P),A=F(A,1),S=F(S,1)}return _=E(I,C.j(_)),new T(C,_)}for(C=f;0<=I.l(_);){for(S=Math.max(1,Math.floor(I.m()/_.m())),A=Math.ceil(Math.log(S)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),b=c(S),P=b.j(_);k(P)||0<P.l(I);)S-=A,b=c(S),P=b.j(_);R(b)&&(b=g),C=C.add(b),I=E(I,P)}return new T(C,I)}t.A=function(I){return V(this,I).h},t.and=function(I){for(var _=Math.max(this.g.length,I.g.length),S=[],A=0;A<_;A++)S[A]=this.i(A)&I.i(A);return new o(S,this.h&I.h)},t.or=function(I){for(var _=Math.max(this.g.length,I.g.length),S=[],A=0;A<_;A++)S[A]=this.i(A)|I.i(A);return new o(S,this.h|I.h)},t.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),S=[],A=0;A<_;A++)S[A]=this.i(A)^I.i(A);return new o(S,this.h^I.h)};function j(I){for(var _=I.g.length+1,S=[],A=0;A<_;A++)S[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(S,I.h)}function F(I,_){var S=_>>5;_%=32;for(var A=I.g.length-S,C=[],b=0;b<A;b++)C[b]=0<_?I.i(b+S)>>>_|I.i(b+S+1)<<32-_:I.i(b+S);return new o(C,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,hS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Hi=o}).apply(typeof Lw<"u"?Lw:typeof self<"u"?self:typeof window<"u"?window:{});var nc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dS,fS,Ua,pS,Ec,$p,mS,gS,yS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof nc=="object"&&nc];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var N=l[y];if(!(N in p))break e;p=p[N]}l=l[l.length-1],y=p[l],h=h(y),h!=y&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,y=!1,N={next:function(){if(!y&&p<l.length){var M=p++;return{value:h(M,l[M]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,p){return l.call.apply(l.bind,arguments)}function f(l,h,p){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,y),l.apply(h,N)}}return function(){return l.apply(h,arguments)}}function g(l,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,g.apply(null,arguments)}function v(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function R(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(y,N,M){for(var G=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)G[ye-2]=arguments[ye];return h.prototype[N].apply(y,G)}}function k(l){const h=l.length;if(0<h){const p=Array(h);for(let y=0;y<h;y++)p[y]=l[y];return p}return[]}function x(l,h){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(u(y)){const N=l.length||0,M=y.length||0;l.length=N+M;for(let G=0;G<M;G++)l[N+G]=y[G]}else l.push(y)}}class E{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(l){return/^[\s\xa0]*$/.test(l)}function T(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function V(l){return V[" "](l),l}V[" "]=function(){};var j=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function F(l,h,p){for(const y in l)h.call(p,l[y],y,l)}function I(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function _(l){const h={};for(const p in l)h[p]=l[p];return h}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,h){let p,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(p in y)l[p]=y[p];for(let M=0;M<S.length;M++)p=S[M],Object.prototype.hasOwnProperty.call(y,p)&&(l[p]=y[p])}}function C(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function b(l){a.setTimeout(()=>{throw l},0)}function P(){var l=Q;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class at{constructor(){this.h=this.g=null}add(h,p){const y=Wt.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var Wt=new E(()=>new Pn,l=>l.reset());class Pn{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let B,U=!1,Q=new at,X=()=>{const l=a.Promise.resolve(void 0);B=()=>{l.then(le)}};var le=()=>{for(var l;l=P();){try{l.h.call(l.g)}catch(p){b(p)}var h=Wt;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}U=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var Gt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function Wn(l,h){if(Se.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(j){e:{try{V(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Gn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Wn.aa.h.call(this)}}R(Wn,Se);var Gn={2:"touch",3:"pen",4:"mouse"};Wn.prototype.h=function(){Wn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Kn="closure_listenable_"+(1e6*Math.random()|0),JR=0;function XR(l,h,p,y,N){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=N,this.key=++JR,this.da=this.fa=!1}function Eu(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Tu(l){this.src=l,this.g={},this.h=0}Tu.prototype.add=function(l,h,p,y,N){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var G=Cd(l,h,y,N);return-1<G?(h=l[G],p||(h.fa=!1)):(h=new XR(h,this.src,M,!!y,N),h.fa=p,l.push(h)),h};function kd(l,h){var p=h.type;if(p in l.g){var y=l.g[p],N=Array.prototype.indexOf.call(y,h,void 0),M;(M=0<=N)&&Array.prototype.splice.call(y,N,1),M&&(Eu(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function Cd(l,h,p,y){for(var N=0;N<l.length;++N){var M=l[N];if(!M.da&&M.listener==h&&M.capture==!!p&&M.ha==y)return N}return-1}var xd="closure_lm_"+(1e6*Math.random()|0),bd={};function l_(l,h,p,y,N){if(Array.isArray(h)){for(var M=0;M<h.length;M++)l_(l,h[M],p,y,N);return null}return p=h_(p),l&&l[Kn]?l.K(h,p,c(y)?!!y.capture:!1,N):ZR(l,h,p,!1,y,N)}function ZR(l,h,p,y,N,M){if(!h)throw Error("Invalid event type");var G=c(N)?!!N.capture:!!N,ye=Dd(l);if(ye||(l[xd]=ye=new Tu(l)),p=ye.add(h,p,y,G,M),p.proxy)return p;if(y=ek(),p.proxy=y,y.src=l,y.listener=p,l.addEventListener)Gt||(N=G),N===void 0&&(N=!1),l.addEventListener(h.toString(),y,N);else if(l.attachEvent)l.attachEvent(c_(h.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function ek(){function l(p){return h.call(l.src,l.listener,p)}const h=tk;return l}function u_(l,h,p,y,N){if(Array.isArray(h))for(var M=0;M<h.length;M++)u_(l,h[M],p,y,N);else y=c(y)?!!y.capture:!!y,p=h_(p),l&&l[Kn]?(l=l.i,h=String(h).toString(),h in l.g&&(M=l.g[h],p=Cd(M,p,y,N),-1<p&&(Eu(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete l.g[h],l.h--)))):l&&(l=Dd(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Cd(h,p,y,N)),(p=-1<l?h[l]:null)&&Nd(p))}function Nd(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Kn])kd(h.i,l);else{var p=l.type,y=l.proxy;h.removeEventListener?h.removeEventListener(p,y,l.capture):h.detachEvent?h.detachEvent(c_(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=Dd(h))?(kd(p,l),p.h==0&&(p.src=null,h[xd]=null)):Eu(l)}}}function c_(l){return l in bd?bd[l]:bd[l]="on"+l}function tk(l,h){if(l.da)l=!0;else{h=new Wn(h,this);var p=l.listener,y=l.ha||l.src;l.fa&&Nd(l),l=p.call(y,h)}return l}function Dd(l){return l=l[xd],l instanceof Tu?l:null}var Vd="__closure_events_fn_"+(1e9*Math.random()>>>0);function h_(l){return typeof l=="function"?l:(l[Vd]||(l[Vd]=function(h){return l.handleEvent(h)}),l[Vd])}function mt(){fe.call(this),this.i=new Tu(this),this.M=this,this.F=null}R(mt,fe),mt.prototype[Kn]=!0,mt.prototype.removeEventListener=function(l,h,p,y){u_(this,l,h,p,y)};function Tt(l,h){var p,y=l.F;if(y)for(p=[];y;y=y.F)p.push(y);if(l=l.M,y=h.type||h,typeof h=="string")h=new Se(h,l);else if(h instanceof Se)h.target=h.target||l;else{var N=h;h=new Se(y,l),A(h,N)}if(N=!0,p)for(var M=p.length-1;0<=M;M--){var G=h.g=p[M];N=Su(G,y,!0,h)&&N}if(G=h.g=l,N=Su(G,y,!0,h)&&N,N=Su(G,y,!1,h)&&N,p)for(M=0;M<p.length;M++)G=h.g=p[M],N=Su(G,y,!1,h)&&N}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],y=0;y<p.length;y++)Eu(p[y]);delete l.g[h],l.h--}}this.F=null},mt.prototype.K=function(l,h,p,y){return this.i.add(String(l),h,!1,p,y)},mt.prototype.L=function(l,h,p,y){return this.i.add(String(l),h,!0,p,y)};function Su(l,h,p,y){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,M=0;M<h.length;++M){var G=h[M];if(G&&!G.da&&G.capture==p){var ye=G.listener,lt=G.ha||G.src;G.fa&&kd(l.i,G),N=ye.call(lt,y)!==!1&&N}}return N&&!y.defaultPrevented}function d_(l,h,p){if(typeof l=="function")p&&(l=g(l,p));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function f_(l){l.g=d_(()=>{l.g=null,l.i&&(l.i=!1,f_(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class nk extends fe{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:f_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ra(l){fe.call(this),this.h=l,this.g={}}R(ra,fe);var p_=[];function m_(l){F(l.g,function(h,p){this.g.hasOwnProperty(p)&&Nd(h)},l),l.g={}}ra.prototype.N=function(){ra.aa.N.call(this),m_(this)},ra.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Od=a.JSON.stringify,rk=a.JSON.parse,ik=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Ld(){}Ld.prototype.h=null;function g_(l){return l.h||(l.h=l.i())}function y_(){}var ia={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Md(){Se.call(this,"d")}R(Md,Se);function Fd(){Se.call(this,"c")}R(Fd,Se);var Si={},__=null;function Au(){return __=__||new mt}Si.La="serverreachability";function v_(l){Se.call(this,Si.La,l)}R(v_,Se);function sa(l){const h=Au();Tt(h,new v_(h))}Si.STAT_EVENT="statevent";function w_(l,h){Se.call(this,Si.STAT_EVENT,l),this.stat=h}R(w_,Se);function St(l){const h=Au();Tt(h,new w_(h,l))}Si.Ma="timingevent";function I_(l,h){Se.call(this,Si.Ma,l),this.size=h}R(I_,Se);function oa(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function aa(){this.g=!0}aa.prototype.xa=function(){this.g=!1};function sk(l,h,p,y,N,M){l.info(function(){if(l.g)if(M)for(var G="",ye=M.split("&"),lt=0;lt<ye.length;lt++){var de=ye[lt].split("=");if(1<de.length){var gt=de[0];de=de[1];var yt=gt.split("_");G=2<=yt.length&&yt[1]=="type"?G+(gt+"="+de+"&"):G+(gt+"=redacted&")}}else G=null;else G=M;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+h+`
`+p+`
`+G})}function ok(l,h,p,y,N,M,G){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+h+`
`+p+`
`+M+" "+G})}function Ps(l,h,p,y){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+lk(l,p)+(y?" "+y:"")})}function ak(l,h){l.info(function(){return"TIMEOUT: "+h})}aa.prototype.info=function(){};function lk(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var y=p[l];if(!(2>y.length)){var N=y[1];if(Array.isArray(N)&&!(1>N.length)){var M=N[0];if(M!="noop"&&M!="stop"&&M!="close")for(var G=1;G<N.length;G++)N[G]=""}}}}return Od(p)}catch{return h}}var Pu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},E_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},jd;function Ru(){}R(Ru,Ld),Ru.prototype.g=function(){return new XMLHttpRequest},Ru.prototype.i=function(){return{}},jd=new Ru;function Er(l,h,p,y){this.j=l,this.i=h,this.l=p,this.R=y||1,this.U=new ra(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new T_}function T_(){this.i=null,this.g="",this.h=!1}var S_={},Ud={};function Bd(l,h,p){l.L=1,l.v=bu(Hn(h)),l.m=p,l.P=!0,A_(l,null)}function A_(l,h){l.F=Date.now(),ku(l),l.A=Hn(l.v);var p=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),j_(p.i,"t",y),l.C=0,p=l.j.J,l.h=new T_,l.g=rv(l.j,p?h:null,!l.m),0<l.O&&(l.M=new nk(g(l.Y,l,l.g),l.O)),h=l.U,p=l.g,y=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(p_[0]=N.toString()),N=p_);for(var M=0;M<N.length;M++){var G=l_(p,N[M],y||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),sa(),sk(l.i,l.u,l.A,l.l,l.R,l.m)}Er.prototype.ca=function(l){l=l.target;const h=this.M;h&&Qn(l)==3?h.j():this.Y(l)},Er.prototype.Y=function(l){try{if(l==this.g)e:{const yt=Qn(this.g);var h=this.g.Ba();const Cs=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||G_(this.g)))){this.J||yt!=4||h==7||(h==8||0>=Cs?sa(3):sa(2)),zd(this);var p=this.g.Z();this.X=p;t:if(P_(this)){var y=G_(this.g);l="";var N=y.length,M=Qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ai(this),la(this);var G="";break t}this.h.i=new a.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,l+=this.h.i.decode(y[h],{stream:!(M&&h==N-1)});y.length=0,this.h.g+=l,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=p==200,ok(this.i,this.u,this.A,this.l,this.R,yt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,lt=this.g;if((ye=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ye)){var de=ye;break t}}de=null}if(p=de)Ps(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$d(this,p);else{this.o=!1,this.s=3,St(12),Ai(this),la(this);break e}}if(this.P){p=!0;let mn;for(;!this.J&&this.C<G.length;)if(mn=uk(this,G),mn==Ud){yt==4&&(this.s=4,St(14),p=!1),Ps(this.i,this.l,null,"[Incomplete Response]");break}else if(mn==S_){this.s=4,St(15),Ps(this.i,this.l,G,"[Invalid Chunk]"),p=!1;break}else Ps(this.i,this.l,mn,null),$d(this,mn);if(P_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||G.length!=0||this.h.h||(this.s=1,St(16),p=!1),this.o=this.o&&p,!p)Ps(this.i,this.l,G,"[Invalid Chunked Response]"),Ai(this),la(this);else if(0<G.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Qd(gt),gt.M=!0,St(11))}}else Ps(this.i,this.l,G,null),$d(this,G);yt==4&&Ai(this),this.o&&!this.J&&(yt==4?Z_(this.j,this):(this.o=!1,ku(this)))}else Pk(this.g),p==400&&0<G.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Ai(this),la(this)}}}catch{}finally{}};function P_(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function uk(l,h){var p=l.C,y=h.indexOf(`
`,p);return y==-1?Ud:(p=Number(h.substring(p,y)),isNaN(p)?S_:(y+=1,y+p>h.length?Ud:(h=h.slice(y,y+p),l.C=y+p,h)))}Er.prototype.cancel=function(){this.J=!0,Ai(this)};function ku(l){l.S=Date.now()+l.I,R_(l,l.I)}function R_(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=oa(g(l.ba,l),h)}function zd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Er.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(ak(this.i,this.A),this.L!=2&&(sa(),St(17)),Ai(this),this.s=2,la(this)):R_(this,this.S-l)};function la(l){l.j.G==0||l.J||Z_(l.j,l)}function Ai(l){zd(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,m_(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function $d(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||qd(p.h,l))){if(!l.K&&qd(p.h,l)&&p.G==3){try{var y=p.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)Lu(p),Vu(p);else break e;Hd(p),St(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=oa(g(p.Za,p),6e3));if(1>=x_(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Ri(p,11)}else if((l.K||p.g==l)&&Lu(p),!w(h))for(N=p.Da.g.parse(h),h=0;h<N.length;h++){let de=N[h];if(p.T=de[0],de=de[1],p.G==2)if(de[0]=="c"){p.K=de[1],p.ia=de[2];const gt=de[3];gt!=null&&(p.la=gt,p.j.info("VER="+p.la));const yt=de[4];yt!=null&&(p.Aa=yt,p.j.info("SVER="+p.Aa));const Cs=de[5];Cs!=null&&typeof Cs=="number"&&0<Cs&&(y=1.5*Cs,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const mn=l.g;if(mn){const Fu=mn.g?mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fu){var M=y.h;M.g||Fu.indexOf("spdy")==-1&&Fu.indexOf("quic")==-1&&Fu.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Wd(M,M.h),M.h=null))}if(y.D){const Yd=mn.g?mn.g.getResponseHeader("X-HTTP-Session-Id"):null;Yd&&(y.ya=Yd,we(y.I,y.D,Yd))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var G=l;if(y.qa=nv(y,y.J?y.ia:null,y.W),G.K){b_(y.h,G);var ye=G,lt=y.L;lt&&(ye.I=lt),ye.B&&(zd(ye),ku(ye)),y.g=G}else J_(y);0<p.i.length&&Ou(p)}else de[0]!="stop"&&de[0]!="close"||Ri(p,7);else p.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Ri(p,7):Kd(p):de[0]!="noop"&&p.l&&p.l.ta(de),p.v=0)}}sa(4)}catch{}}var ck=class{constructor(l,h){this.g=l,this.map=h}};function k_(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function C_(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function x_(l){return l.h?1:l.g?l.g.size:0}function qd(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function Wd(l,h){l.g?l.g.add(h):l.h=h}function b_(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}k_.prototype.cancel=function(){if(this.i=N_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function N_(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return k(l.i)}function hk(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],p=l.length,y=0;y<p;y++)h.push(l[y]);return h}h=[],p=0;for(y in l)h[p++]=l[y];return h}function dk(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const y in l)h[p++]=y;return h}}}function D_(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=dk(l),y=hk(l),N=y.length,M=0;M<N;M++)h.call(void 0,y[M],p&&p[M],l)}var V_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fk(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var y=l[p].indexOf("="),N=null;if(0<=y){var M=l[p].substring(0,y);N=l[p].substring(y+1)}else M=l[p];h(M,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Pi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Pi){this.h=l.h,Cu(this,l.j),this.o=l.o,this.g=l.g,xu(this,l.s),this.l=l.l;var h=l.i,p=new ha;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),O_(this,p),this.m=l.m}else l&&(h=String(l).match(V_))?(this.h=!1,Cu(this,h[1]||"",!0),this.o=ua(h[2]||""),this.g=ua(h[3]||"",!0),xu(this,h[4]),this.l=ua(h[5]||"",!0),O_(this,h[6]||"",!0),this.m=ua(h[7]||"")):(this.h=!1,this.i=new ha(null,this.h))}Pi.prototype.toString=function(){var l=[],h=this.j;h&&l.push(ca(h,L_,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(ca(h,L_,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(ca(p,p.charAt(0)=="/"?gk:mk,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",ca(p,_k)),l.join("")};function Hn(l){return new Pi(l)}function Cu(l,h,p){l.j=p?ua(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function xu(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function O_(l,h,p){h instanceof ha?(l.i=h,vk(l.i,l.h)):(p||(h=ca(h,yk)),l.i=new ha(h,l.h))}function we(l,h,p){l.i.set(h,p)}function bu(l){return we(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ua(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ca(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,pk),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function pk(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var L_=/[#\/\?@]/g,mk=/[#\?:]/g,gk=/[#\?]/g,yk=/[#\?@]/g,_k=/#/g;function ha(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function Tr(l){l.g||(l.g=new Map,l.h=0,l.i&&fk(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=ha.prototype,t.add=function(l,h){Tr(this),this.i=null,l=Rs(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function M_(l,h){Tr(l),h=Rs(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function F_(l,h){return Tr(l),h=Rs(l,h),l.g.has(h)}t.forEach=function(l,h){Tr(this),this.g.forEach(function(p,y){p.forEach(function(N){l.call(h,N,y,this)},this)},this)},t.na=function(){Tr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let y=0;y<h.length;y++){const N=l[y];for(let M=0;M<N.length;M++)p.push(h[y])}return p},t.V=function(l){Tr(this);let h=[];if(typeof l=="string")F_(this,l)&&(h=h.concat(this.g.get(Rs(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return Tr(this),this.i=null,l=Rs(this,l),F_(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function j_(l,h,p){M_(l,h),0<p.length&&(l.i=null,l.g.set(Rs(l,h),k(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var y=h[p];const M=encodeURIComponent(String(y)),G=this.V(y);for(y=0;y<G.length;y++){var N=M;G[y]!==""&&(N+="="+encodeURIComponent(String(G[y]))),l.push(N)}}return this.i=l.join("&")};function Rs(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function vk(l,h){h&&!l.j&&(Tr(l),l.i=null,l.g.forEach(function(p,y){var N=y.toLowerCase();y!=N&&(M_(this,y),j_(this,N,p))},l)),l.j=h}function wk(l,h){const p=new aa;if(a.Image){const y=new Image;y.onload=v(Sr,p,"TestLoadImage: loaded",!0,h,y),y.onerror=v(Sr,p,"TestLoadImage: error",!1,h,y),y.onabort=v(Sr,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=v(Sr,p,"TestLoadImage: timeout",!1,h,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else h(!1)}function Ik(l,h){const p=new aa,y=new AbortController,N=setTimeout(()=>{y.abort(),Sr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:y.signal}).then(M=>{clearTimeout(N),M.ok?Sr(p,"TestPingServer: ok",!0,h):Sr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Sr(p,"TestPingServer: error",!1,h)})}function Sr(l,h,p,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(p)}catch{}}function Ek(){this.g=new ik}function Tk(l,h,p){const y=p||"";try{D_(l,function(N,M){let G=N;c(N)&&(G=Od(N)),h.push(y+M+"="+encodeURIComponent(G))})}catch(N){throw h.push(y+"type="+encodeURIComponent("_badmap")),N}}function da(l){this.l=l.Ub||null,this.j=l.eb||!1}R(da,Ld),da.prototype.g=function(){return new Nu(this.l,this.j)},da.prototype.i=function(l){return function(){return l}}({});function Nu(l,h){mt.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Nu,mt),t=Nu.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,pa(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fa(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,pa(this)),this.g&&(this.readyState=3,pa(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;U_(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function U_(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?fa(this):pa(this),this.readyState==3&&U_(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,fa(this))},t.Qa=function(l){this.g&&(this.response=l,fa(this))},t.ga=function(){this.g&&fa(this)};function fa(l){l.readyState=4,l.l=null,l.j=null,l.v=null,pa(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function pa(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Nu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function B_(l){let h="";return F(l,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function Gd(l,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=B_(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):we(l,h,p))}function Ve(l){mt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ve,mt);var Sk=/^https?$/i,Ak=["POST","PUT"];t=Ve.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():jd.g(),this.v=this.o?g_(this.o):g_(jd),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(M){z_(this,M);return}if(l=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)p.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())p.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Ak,h,void 0))||y||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,G]of p)this.g.setRequestHeader(M,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{W_(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){z_(this,M)}};function z_(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,$_(l),Du(l)}function $_(l){l.A||(l.A=!0,Tt(l,"complete"),Tt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Tt(this,"complete"),Tt(this,"abort"),Du(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Du(this,!0)),Ve.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?q_(this):this.bb())},t.bb=function(){q_(this)};function q_(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Qn(l)!=4||l.Z()!=2)){if(l.u&&Qn(l)==4)d_(l.Ea,0,l);else if(Tt(l,"readystatechange"),Qn(l)==4){l.h=!1;try{const G=l.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=G===0){var N=String(l.D).match(V_)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),y=!Sk.test(N?N.toLowerCase():"")}p=y}if(p)Tt(l,"complete"),Tt(l,"success");else{l.m=6;try{var M=2<Qn(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",$_(l)}}finally{Du(l)}}}}function Du(l,h){if(l.g){W_(l);const p=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Tt(l,"ready");try{p.onreadystatechange=y}catch{}}}function W_(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Qn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Qn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),rk(h)}};function G_(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Pk(l){const h={};l=(l.g&&2<=Qn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(w(l[y]))continue;var p=C(l[y]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=h[N]||[];h[N]=M,M.push(p)}I(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ma(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function K_(l){this.Aa=0,this.i=[],this.j=new aa,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ma("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ma("baseRetryDelayMs",5e3,l),this.cb=ma("retryDelaySeedMs",1e4,l),this.Wa=ma("forwardChannelMaxRetries",2,l),this.wa=ma("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new k_(l&&l.concurrentRequestLimit),this.Da=new Ek,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=K_.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,y){St(0),this.W=l,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=nv(this,null,this.W),Ou(this)};function Kd(l){if(H_(l),l.G==3){var h=l.U++,p=Hn(l.I);if(we(p,"SID",l.K),we(p,"RID",h),we(p,"TYPE","terminate"),ga(l,p),h=new Er(l,l.j,h),h.L=2,h.v=bu(Hn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=rv(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ku(h)}tv(l)}function Vu(l){l.g&&(Qd(l),l.g.cancel(),l.g=null)}function H_(l){Vu(l),l.u&&(a.clearTimeout(l.u),l.u=null),Lu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Ou(l){if(!C_(l.h)&&!l.s){l.s=!0;var h=l.Ga;B||X(),U||(B(),U=!0),Q.add(h,l),l.B=0}}function Rk(l,h){return x_(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=oa(g(l.Ga,l,h),ev(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new Er(this,this.j,l);let M=this.o;if(this.S&&(M?(M=_(M),A(M,this.S)):M=this.S),this.m!==null||this.O||(N.H=M,M=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Y_(this,N,h),p=Hn(this.I),we(p,"RID",l),we(p,"CVER",22),this.D&&we(p,"X-HTTP-Session-Id",this.D),ga(this,p),M&&(this.O?h="headers="+encodeURIComponent(String(B_(M)))+"&"+h:this.m&&Gd(p,this.m,M)),Wd(this.h,N),this.Ua&&we(p,"TYPE","init"),this.P?(we(p,"$req",h),we(p,"SID","null"),N.T=!0,Bd(N,p,null)):Bd(N,p,h),this.G=2}}else this.G==3&&(l?Q_(this,l):this.i.length==0||C_(this.h)||Q_(this))};function Q_(l,h){var p;h?p=h.l:p=l.U++;const y=Hn(l.I);we(y,"SID",l.K),we(y,"RID",p),we(y,"AID",l.T),ga(l,y),l.m&&l.o&&Gd(y,l.m,l.o),p=new Er(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=Y_(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Wd(l.h,p),Bd(p,y,h)}function ga(l,h){l.H&&F(l.H,function(p,y){we(h,y,p)}),l.l&&D_({},function(p,y){we(h,y,p)})}function Y_(l,h,p){p=Math.min(l.i.length,p);var y=l.l?g(l.l.Na,l.l,l):null;e:{var N=l.i;let M=-1;for(;;){const G=["count="+p];M==-1?0<p?(M=N[0].g,G.push("ofs="+M)):M=0:G.push("ofs="+M);let ye=!0;for(let lt=0;lt<p;lt++){let de=N[lt].g;const gt=N[lt].map;if(de-=M,0>de)M=Math.max(0,N[lt].g-100),ye=!1;else try{Tk(gt,G,"req"+de+"_")}catch{y&&y(gt)}}if(ye){y=G.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,y}function J_(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;B||X(),U||(B(),U=!0),Q.add(h,l),l.v=0}}function Hd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=oa(g(l.Fa,l),ev(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,X_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=oa(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),Vu(this),X_(this))};function Qd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function X_(l){l.g=new Er(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Hn(l.qa);we(h,"RID","rpc"),we(h,"SID",l.K),we(h,"AID",l.T),we(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&we(h,"TO",l.ja),we(h,"TYPE","xmlhttp"),ga(l,h),l.m&&l.o&&Gd(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=bu(Hn(h)),p.m=null,p.P=!0,A_(p,l)}t.Za=function(){this.C!=null&&(this.C=null,Vu(this),Hd(this),St(19))};function Lu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Z_(l,h){var p=null;if(l.g==h){Lu(l),Qd(l),l.g=null;var y=2}else if(qd(l.h,h))p=h.D,b_(l.h,h),y=1;else return;if(l.G!=0){if(h.o)if(y==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var N=l.B;y=Au(),Tt(y,new I_(y,p)),Ou(l)}else J_(l);else if(N=h.s,N==3||N==0&&0<h.X||!(y==1&&Rk(l,h)||y==2&&Hd(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),N){case 1:Ri(l,5);break;case 4:Ri(l,10);break;case 3:Ri(l,6);break;default:Ri(l,2)}}}function ev(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function Ri(l,h){if(l.j.info("Error code "+h),h==2){var p=g(l.fb,l),y=l.Xa;const N=!y;y=new Pi(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Cu(y,"https"),bu(y),N?wk(y.toString(),p):Ik(y.toString(),p)}else St(2);l.G=0,l.l&&l.l.sa(h),tv(l),H_(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function tv(l){if(l.G=0,l.ka=[],l.l){const h=N_(l.h);(h.length!=0||l.i.length!=0)&&(x(l.ka,h),x(l.ka,l.i),l.h.i.length=0,k(l.i),l.i.length=0),l.l.ra()}}function nv(l,h,p){var y=p instanceof Pi?Hn(p):new Pi(p);if(y.g!="")h&&(y.g=h+"."+y.g),xu(y,y.s);else{var N=a.location;y=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var M=new Pi(null);y&&Cu(M,y),h&&(M.g=h),N&&xu(M,N),p&&(M.l=p),y=M}return p=l.D,h=l.ya,p&&h&&we(y,p,h),we(y,"VER",l.la),ga(l,y),y}function rv(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Ve(new da({eb:p})):new Ve(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function iv(){}t=iv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Mu(){}Mu.prototype.g=function(l,h){return new Kt(l,h)};function Kt(l,h){mt.call(this),this.g=new K_(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!w(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new ks(this)}R(Kt,mt),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){Kd(this.g)},Kt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=Od(l),l=p);h.i.push(new ck(h.Ya++,l)),h.G==3&&Ou(h)},Kt.prototype.N=function(){this.g.l=null,delete this.j,Kd(this.g),delete this.g,Kt.aa.N.call(this)};function sv(l){Md.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}R(sv,Md);function ov(){Fd.call(this),this.status=1}R(ov,Fd);function ks(l){this.g=l}R(ks,iv),ks.prototype.ua=function(){Tt(this.g,"a")},ks.prototype.ta=function(l){Tt(this.g,new sv(l))},ks.prototype.sa=function(l){Tt(this.g,new ov)},ks.prototype.ra=function(){Tt(this.g,"b")},Mu.prototype.createWebChannel=Mu.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,yS=function(){return new Mu},gS=function(){return Au()},mS=Si,$p={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pu.NO_ERROR=0,Pu.TIMEOUT=8,Pu.HTTP_ERROR=6,Ec=Pu,E_.COMPLETE="complete",pS=E_,y_.EventType=ia,ia.OPEN="a",ia.CLOSE="b",ia.ERROR="c",ia.MESSAGE="d",mt.prototype.listen=mt.prototype.K,Ua=y_,fS=da,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,dS=Ve}).apply(typeof nc<"u"?nc:typeof self<"u"?self:typeof window<"u"?window:{});const Mw="@firebase/firestore";/**
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
 */let tt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
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
 */let zo="10.12.1";/**
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
 */const si=new Wh("@firebase/firestore");function Ls(){return si.logLevel}function W1(t){si.setLogLevel(t)}function $(t,...e){if(si.logLevel<=ie.DEBUG){const n=e.map(Dg);si.debug(`Firestore (${zo}): ${t}`,...n)}}function $e(t,...e){if(si.logLevel<=ie.ERROR){const n=e.map(Dg);si.error(`Firestore (${zo}): ${t}`,...n)}}function Sn(t,...e){if(si.logLevel<=ie.WARN){const n=e.map(Dg);si.warn(`Firestore (${zo}): ${t}`,...n)}}function Dg(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${zo}) INTERNAL ASSERTION FAILED: `+t;throw $e(e),new Error(e)}function Z(t,e){t||Y()}function G1(t,e){t||Y()}function H(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Ct{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class rt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class _S{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class K1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class H1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Q1{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new rt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new rt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new rt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new _S(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string"),new tt(e)}}class Y1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class J1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Y1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class X1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Z1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Z(typeof n.token=="string"),this.R=n.token,new X1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function eD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class vS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=eD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function Eo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function wS(t){return t+"\0"}/**
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
 */class ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new ke(0,0))}static max(){return new ee(new ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Dl{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Dl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Dl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class oe extends Dl{construct(e,n,r){return new oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new oe(n)}static emptyPath(){return new oe([])}}const tD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends Dl{construct(e,n,r){return new Pe(e,n,r)}static isValidIdentifier(e){return tD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(n)}static emptyPath(){return new Pe([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(oe.fromString(e))}static fromName(e){return new K(oe.fromString(e).popFirst(5))}static empty(){return new K(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new oe(e.slice()))}}/**
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
 */class uh{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function qp(t){return t.fields.find(e=>e.kind===2)}function Di(t){return t.fields.filter(e=>e.kind!==2)}uh.UNKNOWN_ID=-1;class Tc{constructor(e,n){this.fieldPath=e,this.kind=n}}class Vl{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Vl(0,en.min())}}function IS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new en(i,K.empty(),e)}function ES(t){return new en(t.readTime,t.key,-1)}class en{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new en(ee.min(),K.empty(),-1)}static max(){return new en(ee.max(),K.empty(),-1)}}function Vg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const TS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function vi(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==TS)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):D.reject(n)}static resolve(e){return new D((n,r)=>{n(e)})}static reject(e){return new D((n,r)=>{r(e)})}static waitFor(e){return new D((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=D.resolve(!1);for(const r of e)n=n.next(i=>i?D.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new D((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new D((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class Gh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new rt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new el(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Og(r.target.error);this.V.reject(new el(e,i))}}static open(e,n,r,i){try{return new Gh(n,e.transaction(i,r))}catch(s){throw new el(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||($("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new rD(n)}}class jn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,jn.S(Ce())===12.2&&$e("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return $("SimpleDb","Removing database:",e),Vi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Cl())return!1;if(jn.C())return!0;const e=Ce(),n=jn.S(e),r=0<n&&n<10,i=AS(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||($("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new el(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new z(L.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new z(L.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new el(e,o))},i.onupgradeneeded=s=>{$("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{$("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Gh.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),D.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if($("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function AS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class nD{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Vi(this.B.delete())}}class el extends z{constructor(e,n){super(L.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function wi(t){return t.name==="IndexedDbTransactionError"}class rD{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?($("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):($("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Vi(r)}add(e){return $("SimpleDb","ADD",this.store.name,e,e),Vi(this.store.add(e))}get(e){return Vi(this.store.get(e)).next(n=>(n===void 0&&(n=null),$("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return $("SimpleDb","DELETE",this.store.name,e),Vi(this.store.delete(e))}count(){return $("SimpleDb","COUNT",this.store.name),Vi(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new D((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,u)=>{o.push(u)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new D((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){$("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new D((r,i)=>{n.onerror=s=>{const o=Og(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new D((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new nD(a),c=n(a.primaryKey,a.value,u);if(c instanceof D){const d=c.catch(f=>(u.done(),D.reject(f)));r.push(d)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>D.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Vi(t){return new D((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Og(r.target.error);n(i)}})}let Fw=!1;function Og(t){const e=jn.S(Ce());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new z("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Fw||(Fw=!0,setTimeout(()=>{throw r},0)),r}}return t}class iD{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){$("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{$("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){wi(n)?$("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await vi(n)}await this.X(6e4)})}}class sD{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return D.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return $("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>($("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=ES(s);Vg(o,r)>0&&(r=o)}),new en(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class jt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}jt.oe=-1;function nu(t){return t==null}function Ol(t){return t===0&&1/t==-1/0}function PS(t){return typeof t=="number"&&Number.isInteger(t)&&!Ol(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function xt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=jw(e)),e=oD(t.get(n),e);return jw(e)}function oD(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function jw(t){return t+""}function Vn(t){const e=t.length;if(Z(e>=2),e===2)return Z(t.charAt(0)===""&&t.charAt(1)===""),oe.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&Y(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:Y()}s=o+2}return new oe(r)}/**
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
 */const Uw=["userId","batchId"];/**
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
 */function Sc(t,e){return[t,xt(e)]}function RS(t,e,n){return[t,xt(e),n]}const aD={},lD=["prefixPath","collectionGroup","readTime","documentId"],uD=["prefixPath","collectionGroup","documentId"],cD=["collectionGroup","readTime","prefixPath","documentId"],hD=["canonicalId","targetId"],dD=["targetId","path"],fD=["path","targetId"],pD=["collectionId","parent"],mD=["indexId","uid"],gD=["uid","sequenceNumber"],yD=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],_D=["indexId","uid","orderedDocumentKey"],vD=["userId","collectionPath","documentId"],wD=["userId","collectionPath","largestBatchId"],ID=["userId","collectionGroup","largestBatchId"],kS=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ED=[...kS,"documentOverlays"],CS=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],xS=CS,bS=[...xS,"indexConfiguration","indexState","indexEntries"],TD=bS;/**
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
 */class Wp extends SS{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function st(t,e){const n=H(t);return jn.F(n._e,e)}/**
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
 */function Bw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ws(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function NS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ve{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rc(this.root,e,this.comparator,!1)}getReverseIterator(){return new rc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rc(this.root,e,this.comparator,!0)}}class rc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ct.RED,this.left=i??ct.EMPTY,this.right=s??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ct(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ct(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ge{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new zw(this.data.getIterator())}getIteratorFrom(e){return new zw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ge(this.comparator);return n.data=e,n}}class zw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function bs(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Ut{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new ge(Pe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Eo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class DS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function SD(){return typeof atob<"u"}/**
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
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new DS("Invalid base64 string: "+s):s}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const AD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cr(t){if(Z(!!t),typeof t=="string"){let e=0;const n=AD.exec(t);if(Z(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function oi(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
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
 */function Kh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Lg(t){const e=t.mapValue.fields.__previous_value__;return Kh(e)?Lg(e):e}function Ll(t){const e=cr(t.mapValue.fields.__local_write_time__.timestampValue);return new ke(e.seconds,e.nanos)}/**
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
 */class PD{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class ai{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ai("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ai&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Br={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ac={nullValue:"NULL_VALUE"};function rs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kh(t)?4:VS(t)?9007199254740991:10:Y()}function zn(t,e){if(t===e)return!0;const n=rs(t);if(n!==rs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ll(t).isEqual(Ll(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=cr(i.timestampValue),a=cr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return oi(i.bytesValue).isEqual(oi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Le(i.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(i.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Le(i.integerValue)===Le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Le(i.doubleValue),a=Le(s.doubleValue);return o===a?Ol(o)===Ol(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Eo(t.arrayValue.values||[],e.arrayValue.values||[],zn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Bw(o)!==Bw(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!zn(o[u],a[u])))return!1;return!0}(t,e);default:return Y()}}function Ml(t,e){return(t.values||[]).find(n=>zn(n,e))!==void 0}function li(t,e){if(t===e)return 0;const n=rs(t),r=rs(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Le(s.integerValue||s.doubleValue),u=Le(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return $w(t.timestampValue,e.timestampValue);case 4:return $w(Ll(t),Ll(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(s,o){const a=oi(s),u=oi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=ne(a[c],u[c]);if(d!==0)return d}return ne(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ne(Le(s.latitude),Le(o.latitude));return a!==0?a:ne(Le(s.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const d=li(a[c],u[c]);if(d)return d}return ne(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Br.mapValue&&o===Br.mapValue)return 0;if(s===Br.mapValue)return 1;if(o===Br.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const g=ne(u[f],d[f]);if(g!==0)return g;const v=li(a[u[f]],c[d[f]]);if(v!==0)return v}return ne(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Y()}}function $w(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=cr(t),r=cr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function To(t){return Gp(t)}function Gp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return oi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Gp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Gp(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function is(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Kp(t){return!!t&&"integerValue"in t}function Fl(t){return!!t&&"arrayValue"in t}function qw(t){return!!t&&"nullValue"in t}function Ww(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pc(t){return!!t&&"mapValue"in t}function tl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ws(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=tl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=tl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function RD(t){return"nullValue"in t?Ac:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?is(ai.empty(),K.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:Y()}function kD(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?is(ai.empty(),K.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Br:Y()}function Gw(t,e){const n=li(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Kw(t,e){const n=li(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Pc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=tl(n)}setAll(e){let n=Pe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=tl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Pc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Pc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ws(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ht(tl(this.value))}}function OS(t){const e=[];return ws(t.fields,(n,r)=>{const i=new Pe([n]);if(Pc(r)){const s=OS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ut(e)}/**
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
 */class Ee{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ee(e,0,ee.min(),ee.min(),ee.min(),ht.empty(),0)}static newFoundDocument(e,n,r,i){return new Ee(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new Ee(e,2,n,ee.min(),ee.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new Ee(e,3,n,ee.min(),ee.min(),ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ui{constructor(e,n){this.position=e,this.inclusive=n}}function Hw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=li(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!zn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class jl{constructor(e,n="asc"){this.field=e,this.dir=n}}function CD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class LS{}class ae extends LS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xD(e,n,r):n==="array-contains"?new DD(e,r):n==="in"?new zS(e,r):n==="not-in"?new VD(e,r):n==="array-contains-any"?new OD(e,r):new ae(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new bD(e,r):new ND(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(li(n,this.value)):n!==null&&rs(this.value)===rs(n)&&this.matchesComparison(li(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pe extends LS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new pe(e,n)}matches(e){return So(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function So(t){return t.op==="and"}function Hp(t){return t.op==="or"}function Mg(t){return MS(t)&&So(t)}function MS(t){for(const e of t.filters)if(e instanceof pe)return!1;return!0}function Qp(t){if(t instanceof ae)return t.field.canonicalString()+t.op.toString()+To(t.value);if(Mg(t))return t.filters.map(e=>Qp(e)).join(",");{const e=t.filters.map(n=>Qp(n)).join(",");return`${t.op}(${e})`}}function FS(t,e){return t instanceof ae?function(r,i){return i instanceof ae&&r.op===i.op&&r.field.isEqual(i.field)&&zn(r.value,i.value)}(t,e):t instanceof pe?function(r,i){return i instanceof pe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&FS(o,i.filters[a]),!0):!1}(t,e):void Y()}function jS(t,e){const n=t.filters.concat(e);return pe.create(n,t.op)}function US(t){return t instanceof ae?function(n){return`${n.field.canonicalString()} ${n.op} ${To(n.value)}`}(t):t instanceof pe?function(n){return n.op.toString()+" {"+n.getFilters().map(US).join(" ,")+"}"}(t):"Filter"}class xD extends ae{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class bD extends ae{constructor(e,n){super(e,"in",n),this.keys=BS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ND extends ae{constructor(e,n){super(e,"not-in",n),this.keys=BS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function BS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class DD extends ae{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fl(n)&&Ml(n.arrayValue,this.value)}}class zS extends ae{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ml(this.value.arrayValue,n)}}class VD extends ae{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ml(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ml(this.value.arrayValue,n)}}class OD extends ae{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ml(this.value.arrayValue,r))}}/**
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
 */class LD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Yp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new LD(t,e,n,r,i,s,o)}function ss(t){const e=H(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Qp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),nu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>To(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>To(r)).join(",")),e.ue=n}return e.ue}function ru(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!FS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qw(t.startAt,e.startAt)&&Qw(t.endAt,e.endAt)}function ch(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function hh(t,e){return t.filters.filter(n=>n instanceof ae&&n.field.isEqual(e))}function Yw(t,e,n){let r=Ac,i=!0;for(const s of hh(t,e)){let o=Ac,a=!0;switch(s.op){case"<":case"<=":o=RD(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Ac}Gw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Gw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function Jw(t,e,n){let r=Br,i=!0;for(const s of hh(t,e)){let o=Br,a=!0;switch(s.op){case">=":case">":o=kD(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Br}Kw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Kw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class yr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function $S(t,e,n,r,i,s,o,a){return new yr(t,e,n,r,i,s,o,a)}function $o(t){return new yr(t)}function Xw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Fg(t){return t.collectionGroup!==null}function oo(t){const e=H(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ge(Pe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new jl(s,r))}),n.has(Pe.keyField().canonicalString())||e.ce.push(new jl(Pe.keyField(),r))}return e.ce}function bt(t){const e=H(t);return e.le||(e.le=MD(e,oo(t))),e.le}function MD(t,e){if(t.limitType==="F")return Yp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new jl(i.field,s)});const n=t.endAt?new ui(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ui(t.startAt.position,t.startAt.inclusive):null;return Yp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Jp(t,e){const n=t.filters.concat([e]);return new yr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function dh(t,e,n){return new yr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function iu(t,e){return ru(bt(t),bt(e))&&t.limitType===e.limitType}function qS(t){return`${ss(bt(t))}|lt:${t.limitType}`}function Ms(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>US(i)).join(", ")}]`),nu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>To(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>To(i)).join(",")),`Target(${r})`}(bt(t))}; limitType=${t.limitType})`}function su(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of oo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Hw(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,oo(r),i)||r.endAt&&!function(o,a,u){const c=Hw(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,oo(r),i))}(t,e)}function WS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function GS(t){return(e,n)=>{let r=!1;for(const i of oo(t)){const s=FD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function FD(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?li(u,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class Ii{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ws(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return NS(this.inner)}size(){return this.innerSize}}/**
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
 */const jD=new ve(K.comparator);function Bt(){return jD}const KS=new ve(K.comparator);function Ba(...t){let e=KS;for(const n of t)e=e.insert(n.key,n);return e}function HS(t){let e=KS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function On(){return nl()}function QS(){return nl()}function nl(){return new Ii(t=>t.toString(),(t,e)=>t.isEqual(e))}const UD=new ve(K.comparator),BD=new ge(K.comparator);function re(...t){let e=BD;for(const n of t)e=e.add(n);return e}const zD=new ge(ne);function jg(){return zD}/**
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
 */function YS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ol(e)?"-0":e}}function JS(t){return{integerValue:""+t}}function XS(t,e){return PS(e)?JS(e):YS(t,e)}/**
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
 */class Hh{constructor(){this._=void 0}}function $D(t,e,n){return t instanceof Ao?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Kh(s)&&(s=Lg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof os?eA(t,e):t instanceof as?tA(t,e):function(i,s){const o=ZS(i,s),a=Zw(o)+Zw(i.Pe);return Kp(o)&&Kp(i.Pe)?JS(a):YS(i.serializer,a)}(t,e)}function qD(t,e,n){return t instanceof os?eA(t,e):t instanceof as?tA(t,e):n}function ZS(t,e){return t instanceof Po?function(r){return Kp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ao extends Hh{}class os extends Hh{constructor(e){super(),this.elements=e}}function eA(t,e){const n=nA(e);for(const r of t.elements)n.some(i=>zn(i,r))||n.push(r);return{arrayValue:{values:n}}}class as extends Hh{constructor(e){super(),this.elements=e}}function tA(t,e){let n=nA(e);for(const r of t.elements)n=n.filter(i=>!zn(i,r));return{arrayValue:{values:n}}}class Po extends Hh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Zw(t){return Le(t.integerValue||t.doubleValue)}function nA(t){return Fl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class ou{constructor(e,n){this.field=e,this.transform=n}}function WD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof os&&i instanceof os||r instanceof as&&i instanceof as?Eo(r.elements,i.elements,zn):r instanceof Po&&i instanceof Po?zn(r.Pe,i.Pe):r instanceof Ao&&i instanceof Ao}(t.transform,e.transform)}class GD{constructor(e,n){this.version=e,this.transformResults=n}}class Re{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Re}static exists(e){return new Re(void 0,e)}static updateTime(e){return new Re(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qh{}function rA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Wo(t.key,Re.none()):new qo(t.key,t.data,Re.none());{const n=t.data,r=ht.empty();let i=new ge(Pe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new _r(t.key,r,new Ut(i.toArray()),Re.none())}}function KD(t,e,n){t instanceof qo?function(i,s,o){const a=i.value.clone(),u=tI(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof _r?function(i,s,o){if(!Rc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=tI(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(iA(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function rl(t,e,n,r){return t instanceof qo?function(s,o,a,u){if(!Rc(s.precondition,o))return a;const c=s.value.clone(),d=nI(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof _r?function(s,o,a,u){if(!Rc(s.precondition,o))return a;const c=nI(s.fieldTransforms,u,o),d=o.data;return d.setAll(iA(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Rc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function HD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=ZS(r.transform,i||null);s!=null&&(n===null&&(n=ht.empty()),n.set(r.field,s))}return n||null}function eI(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Eo(r,i,(s,o)=>WD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qo extends Qh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _r extends Qh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function iA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function tI(t,e,n){const r=new Map;Z(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,qD(o,a,n[i]))}return r}function nI(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,$D(s,o,e))}return r}class Wo extends Qh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ug extends Qh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Bg{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&KD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=rl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=rl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=QS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=rA(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Eo(this.mutations,e.mutations,(n,r)=>eI(n,r))&&Eo(this.baseMutations,e.baseMutations,(n,r)=>eI(n,r))}}class zg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Z(e.mutations.length===r.length);let i=function(){return UD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new zg(e,n,r,i)}}/**
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
 */class $g{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class QD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ge,ue;function sA(t){switch(t){default:return Y();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function oA(t){if(t===void 0)return $e("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ge.OK:return L.OK;case Ge.CANCELLED:return L.CANCELLED;case Ge.UNKNOWN:return L.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return L.INTERNAL;case Ge.UNAVAILABLE:return L.UNAVAILABLE;case Ge.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ge.NOT_FOUND:return L.NOT_FOUND;case Ge.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ge.ABORTED:return L.ABORTED;case Ge.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ge.DATA_LOSS:return L.DATA_LOSS;default:return Y()}}(ue=Ge||(Ge={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function aA(){return new TextEncoder}/**
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
 */const YD=new Hi([4294967295,4294967295],0);function rI(t){const e=aA().encode(t),n=new hS;return n.update(e),new Uint8Array(n.digest())}function iI(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Hi([n,r],0),new Hi([i,s],0)]}class qg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new za(`Invalid padding: ${n}`);if(r<0)throw new za(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new za(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new za(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Hi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Hi.fromNumber(r)));return i.compare(YD)===1&&(i=new Hi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=rI(e),[r,i]=iI(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new qg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=rI(e),[r,i]=iI(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class za extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class au{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,lu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new au(ee.min(),i,new ve(ne),Bt(),re())}}class lu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new lu(r,n,re(),re(),re())}}/**
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
 */class kc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class lA{constructor(e,n){this.targetId=e,this.me=n}}class uA{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class sI{constructor(){this.fe=0,this.ge=aI(),this.pe=Xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=re(),n=re(),r=re();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new lu(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=aI()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Z(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class JD{constructor(e){this.Le=e,this.Be=new Map,this.ke=Bt(),this.qe=oI(),this.Qe=new ve(ne)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(ch(s))if(r===0){const o=new K(s.path);this.Ue(n,o,Ee.newNoDocument(o,ee.min()))}else Z(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=oi(r).toUint8Array()}catch(u){if(u instanceof DS)return Sn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new qg(o,i,s)}catch(u){return Sn(u instanceof za?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&ch(a.target)){const u=new K(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ee.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=re();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new au(e,n,this.Qe,this.ke,r);return this.ke=Bt(),this.qe=oI(),this.Qe=new ve(ne),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new sI,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ge(ne),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new sI),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function oI(){return new ve(K.comparator)}function aI(){return new ve(K.comparator)}const XD={asc:"ASCENDING",desc:"DESCENDING"},ZD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eV={and:"AND",or:"OR"};class tV{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xp(t,e){return t.useProto3Json||nu(e)?e:{value:e}}function Ro(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function nV(t,e){return Ro(t,e.toTimestamp())}function We(t){return Z(!!t),ee.fromTimestamp(function(n){const r=cr(n);return new ke(r.seconds,r.nanos)}(t))}function Wg(t,e){return Zp(t,e).canonicalString()}function Zp(t,e){const n=function(i){return new oe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function hA(t){const e=oe.fromString(t);return Z(IA(e)),e}function Ul(t,e){return Wg(t.databaseId,e.path)}function Un(t,e){const n=hA(e);if(n.get(1)!==t.databaseId.projectId)throw new z(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(pA(n))}function dA(t,e){return Wg(t.databaseId,e)}function fA(t){const e=hA(t);return e.length===4?oe.emptyPath():pA(e)}function em(t){return new oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pA(t){return Z(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function lI(t,e,n){return{name:Ul(t,e),fields:n.value.mapValue.fields}}function mA(t,e,n){const r=Un(t,e.name),i=We(e.updateTime),s=e.createTime?We(e.createTime):ee.min(),o=new ht({mapValue:{fields:e.fields}}),a=Ee.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function rV(t,e){return"found"in e?function(r,i){Z(!!i.found),i.found.name,i.found.updateTime;const s=Un(r,i.found.name),o=We(i.found.updateTime),a=i.found.createTime?We(i.found.createTime):ee.min(),u=new ht({mapValue:{fields:i.found.fields}});return Ee.newFoundDocument(s,o,a,u)}(t,e):"missing"in e?function(r,i){Z(!!i.missing),Z(!!i.readTime);const s=Un(r,i.missing),o=We(i.readTime);return Ee.newNoDocument(s,o)}(t,e):Y()}function iV(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Z(d===void 0||typeof d=="string"),Xe.fromBase64String(d||"")):(Z(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Xe.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?L.UNKNOWN:oA(c.code);return new z(d,c.message||"")}(o);n=new uA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Un(t,r.document.name),s=We(r.document.updateTime),o=r.document.createTime?We(r.document.createTime):ee.min(),a=new ht({mapValue:{fields:r.document.fields}}),u=Ee.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new kc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Un(t,r.document),s=r.readTime?We(r.readTime):ee.min(),o=Ee.newNoDocument(i,s),a=r.removedTargetIds||[];n=new kc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Un(t,r.document),s=r.removedTargetIds||[];n=new kc([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new QD(i,s),a=r.targetId;n=new lA(a,o)}}return n}function Bl(t,e){let n;if(e instanceof qo)n={update:lI(t,e.key,e.value)};else if(e instanceof Wo)n={delete:Ul(t,e.key)};else if(e instanceof _r)n={update:lI(t,e.key,e.data),updateMask:cV(e.fieldMask)};else{if(!(e instanceof Ug))return Y();n={verify:Ul(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Ao)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof os)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof as)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Po)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:nV(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function tm(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Re.updateTime(We(s.updateTime)):s.exists!==void 0?Re.exists(s.exists):Re.none()}(e.currentDocument):Re.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)Z(a.setToServerValue==="REQUEST_TIME"),u=new Ao;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];u=new os(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];u=new as(d)}else"increment"in a?u=new Po(o,a.increment):Y();const c=Pe.fromServerFormat(a.fieldPath);return new ou(c,u)}(t,i)):[];if(e.update){e.update.name;const i=Un(t,e.update.name),s=new ht({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new Ut(c.map(d=>Pe.fromServerFormat(d)))}(e.updateMask);return new _r(i,s,o,n,r)}return new qo(i,s,n,r)}if(e.delete){const i=Un(t,e.delete);return new Wo(i,n)}if(e.verify){const i=Un(t,e.verify);return new Ug(i,n)}return Y()}function sV(t,e){return t&&t.length>0?(Z(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?We(i.updateTime):We(s);return o.isEqual(ee.min())&&(o=We(s)),new GD(o,i.transformResults||[])}(n,e))):[]}function gA(t,e){return{documents:[dA(t,e.path)]}}function yA(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=dA(t,i);const s=function(c){if(c.length!==0)return wA(pe.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(g){return{field:Fs(g.field),direction:aV(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Xp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function _A(t){let e=fA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Z(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const g=vA(f);return g instanceof pe&&Mg(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(g=>function(R){return new jl(js(R.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(f){let g;return g=typeof f=="object"?f.value:f,nu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(f){const g=!!f.before,v=f.values||[];return new ui(v,g)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const g=!f.before,v=f.values||[];return new ui(v,g)}(n.endAt)),$S(e,i,o,s,a,"F",u,c)}function oV(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function vA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=js(n.unaryFilter.field);return ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=js(n.unaryFilter.field);return ae.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=js(n.unaryFilter.field);return ae.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=js(n.unaryFilter.field);return ae.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return ae.create(js(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pe.create(n.compositeFilter.filters.map(r=>vA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function aV(t){return XD[t]}function lV(t){return ZD[t]}function uV(t){return eV[t]}function Fs(t){return{fieldPath:t.canonicalString()}}function js(t){return Pe.fromServerFormat(t.fieldPath)}function wA(t){return t instanceof ae?function(n){if(n.op==="=="){if(Ww(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NAN"}};if(qw(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ww(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NOT_NAN"}};if(qw(n.value))return{unaryFilter:{field:Fs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fs(n.field),op:lV(n.op),value:n.value}}}(t):t instanceof pe?function(n){const r=n.getFilters().map(i=>wA(i));return r.length===1?r[0]:{compositeFilter:{op:uV(n.op),filters:r}}}(t):Y()}function cV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function IA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class er{constructor(e,n,r,i,s=ee.min(),o=ee.min(),a=Xe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class EA{constructor(e){this.ct=e}}function hV(t,e){let n;if(e.document)n=mA(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=K.fromSegments(e.noDocument.path),i=us(e.noDocument.readTime);n=Ee.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return Y();{const r=K.fromSegments(e.unknownDocument.path),i=us(e.unknownDocument.version);n=Ee.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new ke(i[0],i[1]);return ee.fromTimestamp(s)}(e.readTime)),n}function uI(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:fh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Ul(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Ro(s,o.version.toTimestamp()),createTime:Ro(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ls(e.version)};else{if(!e.isUnknownDocument())return Y();r.unknownDocument={path:n.path.toArray(),version:ls(e.version)}}return r}function fh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ls(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function us(t){const e=new ke(t.seconds,t.nanoseconds);return ee.fromTimestamp(e)}function Oi(t,e){const n=(e.baseMutations||[]).map(s=>tm(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>tm(t.ct,s)),i=ke.fromMillis(e.localWriteTimeMs);return new Bg(e.batchId,i,n,r)}function $a(t){const e=us(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?us(t.lastLimboFreeSnapshotVersion):ee.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return Z(s.documents.length===1),bt($o(fA(s.documents[0])))}(t.query):function(s){return bt(_A(s))}(t.query),new er(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Xe.fromBase64String(t.resumeToken))}function TA(t,e){const n=ls(e.snapshotVersion),r=ls(e.lastLimboFreeSnapshotVersion);let i;i=ch(e.target)?gA(t.ct,e.target):yA(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ss(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Gg(t){const e=_A({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?dh(e,e.limit,"L"):e}function xf(t,e){return new $g(e.largestBatchId,tm(t.ct,e.overlayMutation))}function cI(t,e){const n=e.path.lastSegment();return[t,xt(e.path.popLast()),n]}function hI(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:ls(r.readTime),documentKey:xt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class dV{getBundleMetadata(e,n){return dI(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:us(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return dI(e).put(function(i){return{bundleId:i.id,createTime:ls(We(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return fI(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:Gg(s.bundledQuery),readTime:us(s.readTime)}}(r)})}saveNamedQuery(e,n){return fI(e).put(function(i){return{name:i.name,readTime:ls(We(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function dI(t){return st(t,"bundles")}function fI(t){return st(t,"namedQueries")}/**
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
 */class Yh{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Yh(e,r)}getOverlay(e,n){return Aa(e).get(cI(this.userId,n)).next(r=>r?xf(this.serializer,r):null)}getOverlays(e,n){const r=On();return D.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new $g(n,o);i.push(this.ht(e,a))}),D.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(xt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Aa(e).j("collectionPathOverlayIndex",a))}),D.waitFor(s)}getOverlaysForCollection(e,n,r){const i=On(),s=xt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Aa(e).U("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=xf(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=On();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Aa(e).J({index:"collectionGroupOverlayIndex",range:a},(u,c,d)=>{const f=xf(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):d.done()}).next(()=>s)}ht(e,n){return Aa(e).put(function(i,s,o){const[a,u,c]=cI(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Bl(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Aa(t){return st(t,"documentOverlays")}/**
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
 */class Li{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Le(e.integerValue));else if("doubleValue"in e){const r=Le(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),Ol(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(n,20),typeof r=="string"&&(r=cr(r)),n.At(`${r.seconds||""}`),n.dt(r.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(oi(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?VS(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):Y()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),K.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}Li.bt=new Li;function fV(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function pI(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=fV(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class pV{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Lt(e){const n=this.Bt(e),r=pI(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Bt(e),r=pI(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class mV{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}}class gV{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Pa{constructor(){this.Gt=new pV,this.zt=new mV(this.Gt),this.jt=new gV(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class Mi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Mi(this.indexId,this.documentKey,this.arrayValue,r)}}function Pr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=mI(t.arrayValue,e.arrayValue),n!==0?n:(n=mI(t.directionalValue,e.directionalValue),n!==0?n:K.comparator(t.documentKey,e.documentKey)))}function mI(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class gI{constructor(e){this.Yt=new ge((n,r)=>Pe.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(Z(e.collectionGroup===this.collectionId),this.en)return!1;const n=qp(e);if(n!==void 0&&!this.nn(n))return!1;const r=Di(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const u=r[s];if(!this.rn(a,u)||!this.sn(this.Zt[o++],u))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new ge(Pe.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Tc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Tc(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Tc(r.field,r.dir==="asc"?0:1)));return new uh(uh.UNKNOWN_ID,this.collectionId,n,Vl.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function SA(t){var e,n;if(Z(t instanceof ae||t instanceof pe),t instanceof ae){if(t instanceof zS){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ae.create(t.field,"==",s)))||[];return pe.create(i,"or")}return t}const r=t.filters.map(i=>SA(i));return pe.create(r,t.op)}function yV(t){if(t.getFilters().length===0)return[];const e=im(SA(t));return Z(AA(e)),nm(e)||rm(e)?[e]:e.getFilters()}function nm(t){return t instanceof ae}function rm(t){return t instanceof pe&&Mg(t)}function AA(t){return nm(t)||rm(t)||function(n){if(n instanceof pe&&Hp(n)){for(const r of n.getFilters())if(!nm(r)&&!rm(r))return!1;return!0}return!1}(t)}function im(t){if(Z(t instanceof ae||t instanceof pe),t instanceof ae)return t;if(t.filters.length===1)return im(t.filters[0]);const e=t.filters.map(r=>im(r));let n=pe.create(e,t.op);return n=ph(n),AA(n)?n:(Z(n instanceof pe),Z(So(n)),Z(n.filters.length>1),n.filters.reduce((r,i)=>Kg(r,i)))}function Kg(t,e){let n;return Z(t instanceof ae||t instanceof pe),Z(e instanceof ae||e instanceof pe),n=t instanceof ae?e instanceof ae?function(i,s){return pe.create([i,s],"and")}(t,e):yI(t,e):e instanceof ae?yI(e,t):function(i,s){if(Z(i.filters.length>0&&s.filters.length>0),So(i)&&So(s))return jS(i,s.getFilters());const o=Hp(i)?i:s,a=Hp(i)?s:i,u=o.filters.map(c=>Kg(c,a));return pe.create(u,"or")}(t,e),ph(n)}function yI(t,e){if(So(e))return jS(e,t.getFilters());{const n=e.filters.map(r=>Kg(t,r));return pe.create(n,"or")}}function ph(t){if(Z(t instanceof ae||t instanceof pe),t instanceof ae)return t;const e=t.getFilters();if(e.length===1)return ph(e[0]);if(MS(t))return t;const n=e.map(i=>ph(i)),r=[];return n.forEach(i=>{i instanceof ae?r.push(i):i instanceof pe&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:pe.create(r,t.op)}/**
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
 */class _V{constructor(){this._n=new Hg}addToCollectionParentIndex(e,n){return this._n.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(en.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(en.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class Hg{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ge(oe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ge(oe.comparator)).toArray()}}/**
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
 */const ic=new Uint8Array(0);class vV{constructor(e,n){this.databaseId=n,this.an=new Hg,this.un=new Ii(r=>ss(r),(r,i)=>ru(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:xt(i)};return _I(e).put(s)}return D.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[wS(n),""],!1,!0);return _I(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Vn(o.parent))}return r})}addFieldIndex(e,n){const r=Ra(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Ds(e);return s.next(a=>{o.put(hI(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Ra(e),i=Ds(e),s=Ns(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Ra(e),r=Ns(e),i=Ds(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return D.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new gI(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Ns(e);let i=!0;const s=new Map;return D.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=re();const a=[];return D.forEach(s,(u,c)=>{$("IndexedDbIndexManager",`Using index ${function(T){return`id=${T.indexId}|cg=${T.collectionGroup}|f=${T.fields.map(V=>`${V.fieldPath}:${V.kind}`).join(",")}`}(u)} to execute ${ss(n)}`);const d=function(T,V){const j=qp(V);if(j===void 0)return null;for(const F of hh(T,j.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(c,u),f=function(T,V){const j=new Map;for(const F of Di(V))for(const I of hh(T,F.fieldPath))switch(I.op){case"==":case"in":j.set(F.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return j.set(F.fieldPath.canonicalString(),I.value),Array.from(j.values())}return null}(c,u),g=function(T,V){const j=[];let F=!0;for(const I of Di(V)){const _=I.kind===0?Yw(T,I.fieldPath,T.startAt):Jw(T,I.fieldPath,T.startAt);j.push(_.value),F&&(F=_.inclusive)}return new ui(j,F)}(c,u),v=function(T,V){const j=[];let F=!0;for(const I of Di(V)){const _=I.kind===0?Jw(T,I.fieldPath,T.endAt):Yw(T,I.fieldPath,T.endAt);j.push(_.value),F&&(F=_.inclusive)}return new ui(j,F)}(c,u),R=this.hn(u,c,g),k=this.hn(u,c,v),x=this.Pn(u,c,f),E=this.In(u.indexId,d,R,g.inclusive,k,v.inclusive,x);return D.forEach(E,w=>r.G(w,n.limit).next(T=>{T.forEach(V=>{const j=K.fromSegments(V.documentKey);o.has(j)||(o=o.add(j),a.push(j))})}))}).next(()=>a)}return D.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=yV(pe.create(e.filters,"and")).map(r=>Yp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),c=u/(n!=null?n.length:1),d=[];for(let f=0;f<u;++f){const g=n?this.Tn(n[f/c]):ic,v=this.En(e,g,r[f%c],i),R=this.dn(e,g,s[f%c],o),k=a.map(x=>this.En(e,g,x,!0));d.push(...this.createRange(v,R,k))}return d}En(e,n,r,i){const s=new Mi(e,K.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new Mi(e,K.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new gI(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return D.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new ge(Pe.comparator),d=!1;for(const f of u.filters)for(const g of f.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?d=!0:c=c.add(g.field));for(const f of u.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new Pa;for(const i of Di(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);Li.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new Pa;return Li.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new Pa;return Li.bt.Pt(is(this.databaseId,n),r.Ht(function(s){const o=Di(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new Pa);let s=0;for(const o of Di(e)){const a=r[s++];for(const u of i)if(this.Vn(n,o.fieldPath)&&Fl(a))i=this.mn(i,o,a);else{const c=u.Ht(o.kind);Li.bt.Pt(a,c)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new Pa;u.seed(a.Wt()),Li.bt.Pt(o,u.Ht(n.kind)),s.push(u)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof ae&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Ra(e),i=Ds(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return D.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(d,f){const g=f?new Vl(f.sequenceNumber,new en(us(f.readTime),new K(Vn(f.documentKey)),f.largestBatchId)):Vl.empty(),v=d.fields.map(([R,k])=>new Tc(Pe.fromServerFormat(R),k));return new uh(d.indexId,d.collectionGroup,v,g)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ne(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Ra(e),s=Ds(e);return this.gn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>D.forEach(a,u=>s.put(hI(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return D.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?D.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),D.forEach(a,u=>this.pn(e,i,u).next(c=>{const d=this.yn(s,u);return c.isEqual(d)?D.resolve():this.wn(e,s,u,c,d)}))))})}Sn(e,n,r,i){return Ns(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return Ns(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=Ns(e);let s=new ge(Pr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new Mi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new ge(Pr);const i=this.An(n,e);if(i==null)return r;const s=qp(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Fl(o))for(const a of o.arrayValue.values||[])r=r.add(new Mi(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new Mi(n.indexId,e.key,ic,i));return r}wn(e,n,r,i,s){$("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(u,c,d,f,g){const v=u.getIterator(),R=c.getIterator();let k=bs(v),x=bs(R);for(;k||x;){let E=!1,w=!1;if(k&&x){const T=d(k,x);T<0?w=!0:T>0&&(E=!0)}else k!=null?w=!0:E=!0;E?(f(x),x=bs(R)):w?(g(k),k=bs(v)):(k=bs(v),x=bs(R))}}(i,s,Pr,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),D.waitFor(o)}gn(e){let n=1;return Ds(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Pr(o,a)).filter((o,a,u)=>!a||Pr(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Pr(o,e),u=Pr(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&u<0)i.push(o),i.push(o.Jt());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,ic,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,ic,[]];s.push(IDBKeyRange.bound(a,u))}return s}Dn(e,n){return Pr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(vI)}getMinOffset(e,n){return D.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||Y())).next(vI)}}function _I(t){return st(t,"collectionParents")}function Ns(t){return st(t,"indexEntries")}function Ra(t){return st(t,"indexConfiguration")}function Ds(t){return st(t,"indexState")}function vI(t){Z(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Vg(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new en(e.readTime,e.documentKey,n)}/**
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
 */const wI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ot{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ot(e,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function PA(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.J({range:o},(d,f,g)=>(a++,g.delete()));s.push(u.next(()=>{Z(a===1)}));const c=[];for(const d of n.mutations){const f=RS(e,d.key.path,n.batchId);s.push(i.delete(f)),c.push(d.key)}return D.waitFor(s).next(()=>c)}function mh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw Y();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Ot.DEFAULT_COLLECTION_PERCENTILE=10,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ot.DEFAULT=new Ot(41943040,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ot.DISABLED=new Ot(-1,0,0);class Jh{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){Z(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Jh(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Rr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Us(e),o=Rr(e);return o.add({}).next(a=>{Z(typeof a=="number");const u=new Bg(a,n,r,i),c=function(v,R,k){const x=k.baseMutations.map(w=>Bl(v.ct,w)),E=k.mutations.map(w=>Bl(v.ct,w));return{userId:R,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:x,mutations:E}}(this.serializer,this.userId,u),d=[];let f=new ge((g,v)=>ne(g.canonicalString(),v.canonicalString()));for(const g of i){const v=RS(this.userId,g.key.path,a);f=f.add(g.key.path.popLast()),d.push(o.put(c)),d.push(s.put(v,aD))}return f.forEach(g=>{d.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Cn[a]=u.keys()}),D.waitFor(d).next(()=>u)})}lookupMutationBatch(e,n){return Rr(e).get(n).next(r=>r?(Z(r.userId===this.userId),Oi(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?D.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Rr(e).J({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(Z(a.batchId>=r),s=Oi(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Rr(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Rr(e).U("userMutationsIndex",n).next(r=>r.map(i=>Oi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Sc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Us(e).J({range:i},(o,a,u)=>{const[c,d,f]=o,g=Vn(d);if(c===this.userId&&n.path.isEqual(g))return Rr(e).get(f).next(v=>{if(!v)throw Y();Z(v.userId===this.userId),s.push(Oi(this.serializer,v))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ge(ne);const i=[];return n.forEach(s=>{const o=Sc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=Us(e).J({range:a},(c,d,f)=>{const[g,v,R]=c,k=Vn(v);g===this.userId&&s.path.isEqual(k)?r=r.add(R):f.done()});i.push(u)}),D.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Sc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ge(ne);return Us(e).J({range:o},(u,c,d)=>{const[f,g,v]=u,R=Vn(g);f===this.userId&&r.isPrefixOf(R)?R.length===i&&(a=a.add(v)):d.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Rr(e).get(s).next(o=>{if(o===null)throw Y();Z(o.userId===this.userId),r.push(Oi(this.serializer,o))}))}),D.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return PA(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),D.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return D.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Us(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=Vn(s[1]);i.push(u)}else a.done()}).next(()=>{Z(i.length===0)})})}containsKey(e,n){return RA(e,this.userId,n)}xn(e){return kA(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function RA(t,e,n){const r=Sc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Us(t).J({range:s,H:!0},(a,u,c)=>{const[d,f,g]=a;d===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function Rr(t){return st(t,"mutations")}function Us(t){return st(t,"documentMutations")}function kA(t){return st(t,"mutationQueues")}/**
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
 */class cs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new cs(0)}static Ln(){return new cs(-1)}}/**
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
 */class wV{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new cs(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>ee.fromTimestamp(new ke(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Vs(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(Z(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Vs(e).J((o,a)=>{const u=$a(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>D.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Vs(e).J((r,i)=>{const s=$a(i);n(s)})}Bn(e){return II(e).get("targetGlobalKey").next(n=>(Z(n!==null),n))}kn(e,n){return II(e).put("targetGlobalKey",n)}qn(e,n){return Vs(e).put(TA(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=ss(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Vs(e).J({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const c=$a(a);ru(n,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Or(e);return n.forEach(o=>{const a=xt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),D.waitFor(i)}removeMatchingKeys(e,n,r){const i=Or(e);return D.forEach(n,s=>{const o=xt(s.path);return D.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Or(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Or(e);let s=re();return i.J({range:r,H:!0},(o,a,u)=>{const c=Vn(o[1]),d=new K(c);s=s.add(d)}).next(()=>s)}containsKey(e,n){const r=xt(n.path),i=IDBKeyRange.bound([r],[wS(r)],!1,!0);let s=0;return Or(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return Vs(e).get(n).next(r=>r?$a(r):null)}}function Vs(t){return st(t,"targets")}function II(t){return st(t,"targetGlobal")}function Or(t){return st(t,"targetDocuments")}/**
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
 */function EI([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class IV{constructor(e){this.Kn=e,this.buffer=new ge(EI),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();EI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class EV{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){$("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){wi(n)?$("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await vi(n)}await this.zn(3e5)})}}class TV{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return D.resolve(jt.oe);const r=new IV(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(wI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wI):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Ls()<=ie.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function SV(t,e){return new TV(t,e)}/**
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
 */class AV{constructor(e,n){this.db=e,this.garbageCollector=SV(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return sc(e,r)}removeReference(e,n,r){return sc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return sc(e,n)}er(e,n){return function(i,s){let o=!1;return kA(i).Y(a=>RA(i,a,s).next(u=>(u&&(o=!0),D.resolve(!u)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const u=this.er(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,ee.min()),Or(e).delete(function(f){return[0,xt(f.path)]}(o))))});i.push(u)}}).next(()=>D.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return sc(e,n)}Xn(e,n){const r=Or(e);let i,s=jt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(s!==jt.oe&&n(new K(Vn(i)),s),s=c,i=u):s=jt.oe}).next(()=>{s!==jt.oe&&n(new K(Vn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function sc(t,e){return Or(t).put(function(r,i){return{targetId:0,path:xt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class CA{constructor(){this.changes=new Ii(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class PV{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return ki(e).put(r)}removeEntry(e,n,r){return ki(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],fh(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=Ee.newInvalidDocument(n);return ki(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ka(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:Ee.newInvalidDocument(n)};return ki(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ka(n))},(i,s)=>{r={document:this.nr(n,s),size:mh(s)}}).next(()=>r)}getEntries(e,n){let r=Bt();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=Bt(),i=new ve(K.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,mh(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return D.resolve();let i=new ge(AI);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(ka(i.first()),ka(i.last())),o=i.getIterator();let a=o.getNext();return ki(e).J({index:"documentKeyIndex",range:s},(u,c,d)=>{const f=K.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&AI(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?d.$(ka(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),fh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ki(e).U(IDBKeyRange.bound(a,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let d=Bt();for(const f of c){const g=this.nr(K.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);g.isFoundDocument()&&(su(n,g)||i.has(g.key))&&(d=d.insert(g.key,g))}return d})}getAllFromCollectionGroup(e,n,r,i){let s=Bt();const o=SI(n,r),a=SI(n,en.max());return ki(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,d)=>{const f=this.nr(K.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new RV(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return TI(e).get("remoteDocumentGlobalKey").next(n=>(Z(!!n),n))}tr(e,n){return TI(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=hV(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(ee.min())))return r}return Ee.newInvalidDocument(e)}}function xA(t){return new PV(t)}class RV extends CA{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new Ii(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ge((s,o)=>ne(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=uI(this.ar.serializer,o);i=i.add(s.path.popLast());const c=mh(u);r+=c-a.size,n.push(this.ar.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=uI(this.ar.serializer,o.convertToNoDocument(ee.min()));n.push(this.ar.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),D.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function TI(t){return st(t,"remoteDocumentGlobal")}function ki(t){return st(t,"remoteDocumentsV14")}function ka(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function SI(t,e){const n=e.documentKey.path.toArray();return[t,fh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function AI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ne(n[s],r[s]),i)return i;return i=ne(n.length,r.length),i||(i=ne(n[n.length-2],r[r.length-2]),i||ne(n[n.length-1],r[r.length-1]))}/**
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
 */class kV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class bA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&rl(r.mutation,i,Ut.empty(),ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=On();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ba();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=On();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Bt();const o=nl(),a=function(){return nl()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof _r)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),rl(d.mutation,c,d.mutation.getFieldMask(),ke.now())):o.set(c.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new kV(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=nl();let i=new ve((o,a)=>o-a),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Ut.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||re()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=QS();d.forEach(g=>{if(!s.has(g)){const v=rA(n.get(g),r.get(g));v!==null&&f.set(g,v),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Fg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):D.resolve(On());let a=-1,u=s;return o.next(c=>D.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?D.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(d=>({batchId:a,changes:HS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Ba();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ba();return this.indexManager.getCollectionParents(e,s).next(a=>D.forEach(a,u=>{const c=function(f,g){return new yr(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Ee.newInvalidDocument(d)))});let a=Ba();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&rl(d.mutation,c,Ut.empty(),ke.now()),su(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class CV{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return D.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:We(i.createTime)}}(n)),D.resolve()}getNamedQuery(e,n){return D.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:Gg(i.bundledQuery),readTime:We(i.readTime)}}(n)),D.resolve()}}/**
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
 */class xV{constructor(){this.overlays=new ve(K.comparator),this.hr=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=On();return D.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),D.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const i=On(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return D.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ve((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=On(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=On(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return D.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $g(n,r));let s=this.hr.get(n);s===void 0&&(s=re(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class Qg{constructor(){this.Pr=new ge(Ze.Ir),this.Tr=new ge(Ze.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ze(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new K(new oe([])),r=new Ze(n,e),i=new Ze(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new K(new oe([])),r=new Ze(n,e),i=new Ze(n,e+1);let s=re();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ze(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return K.comparator(e.key,n.key)||ne(e.pr,n.pr)}static Er(e,n){return ne(e.pr,n.pr)||K.comparator(e.key,n.key)}}/**
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
 */class bV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ge(Ze.Ir)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Bg(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),i=new Ze(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ge(ne);return n.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),D.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new K(s),0);let a=new ge(ne);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),D.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Z(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return D.forEach(n.mutations,i=>{const s=new Ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ze(n,0),i=this.wr.firstAfterOrEqual(r);return D.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class NV{constructor(e){this.vr=e,this.docs=function(){return new ve(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(n))}getEntries(e,n){let r=Bt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ee.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Bt();const o=n.path,a=new K(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Vg(ES(d),r)<=0||(i.has(d.key)||su(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Fr(e,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new DV(this)}getSize(e){return D.resolve(this.size)}}class DV extends CA{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),D.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class VV{constructor(e){this.persistence=e,this.Mr=new Ii(n=>ss(n),ru),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Qg,this.targetCount=0,this.Lr=cs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),D.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new cs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.qn(n),D.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.Nr.containsKey(n))}}/**
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
 */class NA{constructor(e,n){this.Br={},this.overlays={},this.kr=new jt(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new VV(this),this.indexManager=new _V,this.remoteDocumentCache=function(i){return new NV(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new EA(n),this.$r=new CV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new bV(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new OV(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return D.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class OV extends SS{constructor(e){super(),this.currentSequenceNumber=e}}class Xh{constructor(e){this.persistence=e,this.zr=new Qg,this.jr=null}static Hr(e){return new Xh(e)}get Jr(){if(this.jr)return this.jr;throw Y()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),D.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Jr,r=>{const i=K.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return D.or([()=>D.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class LV{constructor(e){this.serializer=e}O(e,n,r,i){const s=new Gh("createOrUpgrade",n);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Uw,{unique:!0}),u.createObjectStore("documentMutations")}(e),PI(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=D.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),PI(e)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ee.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").U().next(d=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Uw,{unique:!0});const f=c.store("mutations"),g=d.map(v=>f.put(v));return D.waitFor(g)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:vD});c.createIndex("collectionPathOverlayIndex",wD,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",ID,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:lD});c.createIndex("documentKeyIndex",uD),c.createIndex("collectionGroupIndex",cD)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:mD}).createIndex("sequenceNumberIndex",gD,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:yD}).createIndex("documentKeyIndex",_D,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),o}ei(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=mh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>D.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>D.forEach(a,u=>{Z(u.userId===s.userId);const c=Oi(this.serializer,u);return PA(e,s.userId,c).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const u=new oe(o),c=function(f){return[0,xt(f)]}(u);s.push(n.get(c).next(d=>d?D.resolve():(f=>n.put({targetId:0,path:xt(f),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>D.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:pD});const r=n.store("collectionParents"),i=new Hg,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:xt(u)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const u=new oe(o);return s(u.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,u],c)=>{const d=Vn(a);return s(d.popLast())}))}ri(e){const n=e.store("targets");return n.J((r,i)=>{const s=$a(i),o=TA(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),u=function(f){return f.document?new K(oe.fromString(f.document.name).popFirst(5)):f.noDocument?K.fromSegments(f.noDocument.path):f.unknownDocument?K.fromSegments(f.unknownDocument.path):Y()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>D.waitFor(i))}si(e,n){const r=n.store("mutations"),i=xA(this.serializer),s=new NA(Xh.Hr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(u=>{var c;let d=(c=a.get(u.userId))!==null&&c!==void 0?c:re();Oi(this.serializer,u).keys().forEach(f=>d=d.add(f)),a.set(u.userId,d)}),D.forEach(a,(u,c)=>{const d=new tt(c),f=Yh.lt(this.serializer,d),g=s.getIndexManager(d),v=Jh.lt(d,this.serializer,g,s.referenceDelegate);return new bA(i,v,f,g).recalculateAndSaveOverlaysForDocumentKeys(new Wp(n,jt.oe),u).next()})})}}function PI(t){t.createObjectStore("targetDocuments",{keyPath:dD}).createIndex("documentTargetsIndex",fD,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",hD,{unique:!0}),t.createObjectStore("targetGlobal")}const bf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Yg{constructor(e,n,r,i,s,o,a,u,c,d,f=16){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=c,this.ai=d,this.ui=f,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=g=>Promise.resolve(),!Yg.D())throw new z(L.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new AV(this,i),this.Ti=n+"main",this.serializer=new EA(u),this.Ei=new jn(this.Ti,this.ui,new LV(this.serializer)),this.Qr=new wV(this.referenceDelegate,this.serializer),this.remoteDocumentCache=xA(this.serializer),this.$r=new dV,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,d===!1&&$e("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new z(L.FAILED_PRECONDITION,bf);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new jt(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>oc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(wi(e))return $("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return $("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return Ca(e).get("owner").next(n=>D.resolve(this.Si(n)))}bi(e){return oc(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=st(n,"clientMetadata");return r.U().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return D.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?D.resolve(!0):Ca(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new z(L.FAILED_PRECONDITION,bf);return!1}}return!(!this.networkEnabled||!this.inForeground)||oc(e).U().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&$("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Wp(e,jt.oe);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Li()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>oc(e).U().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return Jh.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new vV(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Yh.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){$("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(u){return u===16?TD:u===15?bS:u===14?xS:u===13?CS:u===12?ED:u===11?kS:void Y()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new Wp(a,this.kr?this.kr.next():jt.oe),n==="readwrite-primary"?this.gi(o).next(u=>!!u||this.pi(o)).next(u=>{if(!u)throw $e(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new z(L.FAILED_PRECONDITION,TS);return r(o)}).next(u=>this.wi(o).next(()=>u)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return Ca(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new z(L.FAILED_PRECONDITION,bf)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ca(e).put("owner",n)}static D(){return jn.D()}yi(e){const n=Ca(e);return n.get("owner").next(r=>this.Si(r)?($("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):D.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||($e(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;Y0()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return $("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return $e("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){$e("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ca(t){return st(t,"owner")}function oc(t){return st(t,"clientMetadata")}function Jg(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Xg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Xg(e,n.fromCache,r,i)}}/**
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
 */class MV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class DA{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Y0()?8:AS(Ce())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new MV;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Ls()<=ie.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Ms(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),D.resolve()):(Ls()<=ie.DEBUG&&$("QueryEngine","Query:",Ms(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Ls()<=ie.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Ms(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bt(n))):D.resolve())}ji(e,n){if(Xw(n))return D.resolve(null);let r=bt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=dh(n,null,"F"),r=bt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(e,dh(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return Xw(n)||i.isEqual(ee.min())?D.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?D.resolve(null):(Ls()<=ie.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ms(n)),this.es(e,o,n,IS(i,-1)).next(a=>a))})}Zi(e,n){let r=new ge(GS(e));return n.forEach((i,s)=>{su(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Ls()<=ie.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Ms(n)),this.zi.getDocumentsMatchingQuery(e,n,en.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class FV{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ve(ne),this.rs=new Ii(s=>ss(s),ru),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bA(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function VA(t,e,n,r){return new FV(t,e,n,r)}async function OA(t,e){const n=H(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=re();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function jV(t,e){const n=H(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,g=f.keys();let v=D.resolve();return g.forEach(R=>{v=v.next(()=>d.getEntry(u,R)).next(k=>{const x=c.docVersions.get(R);Z(x!==null),k.version.compareTo(x)<0&&(f.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=re();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function LA(t){const e=H(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function UV(t,e){const n=H(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((d,f)=>{const g=i.get(f);if(!g)return;a.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,f)));let v=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?v=v.withResumeToken(Xe.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),i=i.insert(f,v),function(k,x,E){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,v,d)&&a.push(n.Qr.updateTargetData(s,v))});let u=Bt(),c=re();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(MA(s,o,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!r.isEqual(ee.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return D.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function MA(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Bt();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function BV(t,e){const n=H(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ko(t,e){const n=H(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Co(t,e,n){const r=H(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!wi(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function gh(t,e,n){const r=H(t);let i=ee.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=H(u),g=f.rs.get(d);return g!==void 0?D.resolve(f.ns.get(g)):f.Qr.getTargetData(c,d)}(r,o,bt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:re())).next(a=>(UA(r,WS(e),a),{documents:a,hs:s})))}function FA(t,e){const n=H(t),r=H(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function jA(t,e){const n=H(t),r=n.ss.get(e)||ee.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,IS(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(UA(n,e,i),i))}function UA(t,e,n){let r=t.ss.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function zV(t,e,n,r){const i=H(t);let s=re(),o=Bt();for(const c of n){const d=e.Ps(c.metadata.name);c.document&&(s=s.add(d));const f=e.Is(c);f.setReadTime(e.Ts(c.metadata.readTime)),o=o.insert(d,f)}const a=i.os.newChangeBuffer({trackRemovals:!0}),u=await ko(i,function(d){return bt($o(oe.fromString(`__bundle__/docs/${d}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>MA(c,a,o).next(d=>(a.apply(c),d)).next(d=>i.Qr.removeMatchingKeysForTargetId(c,u.targetId).next(()=>i.Qr.addMatchingKeys(c,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,d.cs,d.ls)).next(()=>d.cs)))}async function $V(t,e,n=re()){const r=await ko(t,bt(Gg(e.bundledQuery))),i=H(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=We(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(Xe.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function RI(t,e){return`firestore_clients_${t}_${e}`}function kI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Nf(t,e){return`firestore_targets_${t}_${e}`}class yh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new z(i.error.code,i.error.message))),o?new yh(e,n,i.state,s):($e("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class il{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new z(r.error.code,r.error.message))),s?new il(e,r.state,i):($e("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class _h{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=jg();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=PS(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new _h(e,s):($e("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Zg{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Zg(n.clientId,n.onlineState):($e("SharedClientState",`Failed to parse online state: ${e}`),null)}}class sm{constructor(){this.activeTargetIds=jg()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Df{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new ve(ne),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=RI(this.persistenceKey,this.Vs),this.Ss=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new sm),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Fs=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(RI(this.persistenceKey,r));if(i){const s=_h.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,n,r){this.Ls(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Nf(this.persistenceKey,e));if(r){const i=il.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Nf(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return $("SharedClientState","READ",e,n),n}setItem(e,n){$("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){$("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if($("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void $e("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=jt.oe;if(s!=null)try{const a=JSON.parse(s);Z(typeof a=="number"),o=a}catch(a){$e("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==jt.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(e,n,r){const i=new yh(this.currentUser,e,n,r),s=kI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Bs(e){const n=kI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=Nf(this.persistenceKey,e),s=new il(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return _h.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return yh.Es(new tt(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return il.Es(i,n)}xs(e){return Zg.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);$("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=jg();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class BA{constructor(){this.no=new sm,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new sm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class qV{io(e){}shutdown(){}}/**
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
 */class CI{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ac=null;function Vf(){return ac===null?ac=function(){return 268435456+Math.round(2147483648*Math.random())}():ac++,"0x"+ac.toString(16)}/**
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
 */const WV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class GV{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const wt="WebChannelConnection";class KV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Vf(),u=this.vo(n,r.toUriEncodedString());$("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(d=>($("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Sn("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=WV[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Vf();return new Promise((o,a)=>{const u=new dS;u.setWithCredentials(!0),u.listenOnce(pS.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ec.NO_ERROR:const d=u.getResponseJson();$(wt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Ec.TIMEOUT:$(wt,`RPC '${e}' ${s} timed out`),a(new z(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ec.HTTP_ERROR:const f=u.getStatus();if($(wt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const R=function(x){const E=x.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(E)>=0?E:L.UNKNOWN}(v.status);a(new z(R,v.message))}else a(new z(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new z(L.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{$(wt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);$(wt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Vf(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yS(),a=gS(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new fS({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");$(wt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let g=!1,v=!1;const R=new GV({lo:x=>{v?$(wt,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(g||($(wt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),g=!0),$(wt,`RPC '${e}' stream ${i} sending:`,x),f.send(x))},ho:()=>f.close()}),k=(x,E,w)=>{x.listen(E,T=>{try{w(T)}catch(V){setTimeout(()=>{throw V},0)}})};return k(f,Ua.EventType.OPEN,()=>{v||($(wt,`RPC '${e}' stream ${i} transport opened.`),R.mo())}),k(f,Ua.EventType.CLOSE,()=>{v||(v=!0,$(wt,`RPC '${e}' stream ${i} transport closed`),R.po())}),k(f,Ua.EventType.ERROR,x=>{v||(v=!0,Sn(wt,`RPC '${e}' stream ${i} transport errored:`,x),R.po(new z(L.UNAVAILABLE,"The operation could not be completed")))}),k(f,Ua.EventType.MESSAGE,x=>{var E;if(!v){const w=x.data[0];Z(!!w);const T=w,V=T.error||((E=T[0])===null||E===void 0?void 0:E.error);if(V){$(wt,`RPC '${e}' stream ${i} received error:`,V);const j=V.status;let F=function(S){const A=Ge[S];if(A!==void 0)return oA(A)}(j),I=V.message;F===void 0&&(F=L.INTERNAL,I="Unknown error status: "+j+" with message "+V.message),v=!0,R.po(new z(F,I)),f.close()}else $(wt,`RPC '${e}' stream ${i} received:`,w),R.yo(w)}}),k(a,mS.STAT_EVENT,x=>{x.stat===$p.PROXY?$(wt,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===$p.NOPROXY&&$(wt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.fo()},0),R}}/**
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
 */function zA(){return typeof window<"u"?window:null}function Cc(){return typeof document<"u"?document:null}/**
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
 */function uu(t){return new tV(t,!0)}/**
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
 */class ey{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class $A{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new ey(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===L.RESOURCE_EXHAUSTED?($e(n.toString()),$e("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new z(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HV extends $A{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=iV(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?We(o.readTime):ee.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=em(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=ch(u)?{documents:gA(s,u)}:{query:yA(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=cA(s,o.resumeToken);const c=Xp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=Ro(s,o.snapshotVersion.toTimestamp());const c=Xp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=oV(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=em(this.serializer),n.removeTarget=e,this.i_(n)}}class QV extends $A{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=sV(e.writeResults,e.commitTime),r=We(e.commitTime);return this.listener.A_(r,n)}return Z(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=em(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Bl(this.serializer,r))};this.i_(n)}}/**
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
 */class YV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,Zp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(L.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,Zp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(L.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class JV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?($e(n),this.y_=!1):$("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class XV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Ei(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=H(u);c.M_.add(4),await Go(c),c.N_.set("Unknown"),c.M_.delete(4),await cu(c)}(this))})}),this.N_=new JV(r,i)}}async function cu(t){if(Ei(t))for(const e of t.x_)await e(!0)}async function Go(t){for(const e of t.x_)await e(!1)}function Zh(t,e){const n=H(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),ry(n)?ny(n):Ho(n).Xo()&&ty(n,e))}function xo(t,e){const n=H(t),r=Ho(n);n.F_.delete(e),r.Xo()&&qA(n,e),n.F_.size===0&&(r.Xo()?r.n_():Ei(n)&&n.N_.set("Unknown"))}function ty(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ho(t).P_(e)}function qA(t,e){t.L_.xe(e),Ho(t).I_(e)}function ny(t){t.L_=new JD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ho(t).start(),t.N_.w_()}function ry(t){return Ei(t)&&!Ho(t).Zo()&&t.F_.size>0}function Ei(t){return H(t).M_.size===0}function WA(t){t.L_=void 0}async function ZV(t){t.N_.set("Online")}async function eO(t){t.F_.forEach((e,n)=>{ty(t,e)})}async function tO(t,e){WA(t),ry(t)?(t.N_.D_(e),ny(t)):t.N_.set("Unknown")}async function nO(t,e,n){if(t.N_.set("Online"),e instanceof uA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await vh(t,r)}else if(e instanceof kc?t.L_.Ke(e):e instanceof lA?t.L_.He(e):t.L_.We(e),!n.isEqual(ee.min()))try{const r=await LA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.F_.get(u);if(!d)return;s.F_.set(u,d.withResumeToken(Xe.EMPTY_BYTE_STRING,d.snapshotVersion)),qA(s,u);const f=new er(d.target,u,c,d.sequenceNumber);ty(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await vh(t,r)}}async function vh(t,e,n){if(!wi(e))throw e;t.M_.add(1),await Go(t),t.N_.set("Offline"),n||(n=()=>LA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await cu(t)})}function GA(t,e){return e().catch(n=>vh(t,n,e))}async function Ko(t){const e=H(t),n=ci(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;rO(e);)try{const i=await BV(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,iO(e,i)}catch(i){await vh(e,i)}KA(e)&&HA(e)}function rO(t){return Ei(t)&&t.v_.length<10}function iO(t,e){t.v_.push(e);const n=ci(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function KA(t){return Ei(t)&&!ci(t).Zo()&&t.v_.length>0}function HA(t){ci(t).start()}async function sO(t){ci(t).V_()}async function oO(t){const e=ci(t);for(const n of t.v_)e.d_(n.mutations)}async function aO(t,e,n){const r=t.v_.shift(),i=zg.from(r,e,n);await GA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ko(t)}async function lO(t,e){e&&ci(t).E_&&await async function(r,i){if(function(o){return sA(o)&&o!==L.ABORTED}(i.code)){const s=r.v_.shift();ci(r).t_(),await GA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ko(r)}}(t,e),KA(t)&&HA(t)}async function xI(t,e){const n=H(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=Ei(n);n.M_.add(3),await Go(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await cu(n)}async function om(t,e){const n=H(t);e?(n.M_.delete(2),await cu(n)):e||(n.M_.add(2),await Go(n),n.N_.set("Unknown"))}function Ho(t){return t.B_||(t.B_=function(n,r,i){const s=H(n);return s.f_(),new HV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:ZV.bind(null,t),To:eO.bind(null,t),Ao:tO.bind(null,t),h_:nO.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),ry(t)?ny(t):t.N_.set("Unknown")):(await t.B_.stop(),WA(t))})),t.B_}function ci(t){return t.k_||(t.k_=function(n,r,i){const s=H(n);return s.f_(),new QV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:sO.bind(null,t),Ao:lO.bind(null,t),R_:oO.bind(null,t),A_:aO.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Ko(t)):(await t.k_.stop(),t.v_.length>0&&($("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class iy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new iy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qo(t,e){if($e("AsyncQueue",`${e}: ${t}`),wi(t))return new z(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ao{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Ba(),this.sortedSet=new ve(this.comparator)}static emptySet(e){return new ao(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ao)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ao;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class bI{constructor(){this.q_=new ve(K.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):Y():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class bo{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new bo(e,n,ao.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&iu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class uO{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class cO{constructor(){this.queries=new Ii(e=>qS(e),iu),this.onlineState="Unknown",this.z_=new Set}}async function sy(t,e){const n=H(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new uO,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Qo(o,`Initialization of query '${Ms(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&ay(n)}async function oy(t,e){const n=H(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function hO(t,e){const n=H(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&ay(n)}function dO(t,e,n){const r=H(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function ay(t){t.z_.forEach(e=>{e.next()})}var am,NI;(NI=am||(am={})).J_="default",NI.Cache="cache";class ly{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new bo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=bo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==am.Cache}}/**
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
 */class fO{constructor(e,n){this.ia=e,this.byteLength=n}sa(){return"metadata"in this.ia}}/**
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
 */class DI{constructor(e){this.serializer=e}Ps(e){return Un(this.serializer,e)}Is(e){return e.metadata.exists?mA(this.serializer,e.document,!1):Ee.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return We(e)}}class pO{constructor(e,n,r){this.oa=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=QA(e)}_a(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ia.namedQuery)this.queries.push(e.ia.namedQuery);else if(e.ia.documentMetadata){this.documents.push({metadata:e.ia.documentMetadata}),e.ia.documentMetadata.exists||++n;const r=oe.fromString(e.ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ia.document&&(this.documents[this.documents.length-1].document=e.ia.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}aa(e){const n=new Map,r=new DI(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||re()).add(s);n.set(o,a)}}return n}async complete(){const e=await zV(this.localStore,new DI(this.serializer),this.documents,this.oa.id),n=this.aa(this.documents);for(const r of this.queries)await $V(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ua:this.collectionGroups,ca:e}}}function QA(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class YA{constructor(e){this.key=e}}class JA{constructor(e){this.key=e}}class XA{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=re(),this.mutatedKeys=re(),this.Ia=GS(e),this.Ta=new ao(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new bI,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const g=i.get(d),v=su(this.query,f)?f:null,R=!!g&&this.mutatedKeys.has(g.key),k=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let x=!1;g&&v?g.data.isEqual(v.data)?R!==k&&(r.track({type:3,doc:v}),x=!0):this.Ra(g,v)||(r.track({type:2,doc:v}),x=!0,(u&&this.Ia(v,u)>0||c&&this.Ia(v,c)<0)&&(a=!0)):!g&&v?(r.track({type:0,doc:v}),x=!0):g&&!v&&(r.track({type:1,doc:g}),x=!0,(u||c)&&(a=!0)),x&&(v?(o=o.add(v),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,f)=>function(v,R){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return k(v)-k(R)}(d.type,f.type)||this.Ia(d.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new bo(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new bI,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=re(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new JA(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new YA(r))}),n}pa(e){this.la=e.hs,this.Pa=re();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return bo.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class mO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gO{constructor(e){this.key=e,this.wa=!1}}class yO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Ii(a=>qS(a),iu),this.Da=new Map,this.Ca=new Set,this.va=new ve(K.comparator),this.Fa=new Map,this.Ma=new Qg,this.xa={},this.Oa=new Map,this.Na=cs.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function _O(t,e,n=!0){const r=ed(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await ZA(r,e,n,!0),i}async function vO(t,e){const n=ed(t);await ZA(n,e,!0,!1)}async function ZA(t,e,n,r){const i=await ko(t.localStore,bt(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await uy(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Zh(t.remoteStore,i),a}async function uy(t,e,n,r,i){t.Ba=(f,g,v)=>async function(k,x,E,w){let T=x.view.da(E);T.Xi&&(T=await gh(k.localStore,x.query,!1).then(({documents:I})=>x.view.da(I,T)));const V=w&&w.targetChanges.get(x.targetId),j=w&&w.targetMismatches.get(x.targetId)!=null,F=x.view.applyChanges(T,k.isPrimaryClient,V,j);return lm(k,x.targetId,F.fa),F.snapshot}(t,f,g,v);const s=await gh(t.localStore,e,!0),o=new XA(e,s.hs),a=o.da(s.documents),u=lu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);lm(t,n,c.fa);const d=new mO(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function wO(t,e,n){const r=H(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!iu(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Co(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&xo(r.remoteStore,i.targetId),No(r,i.targetId)}).catch(vi)):(No(r,i.targetId),await Co(r.localStore,i.targetId,!0))}async function IO(t,e){const n=H(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),xo(n.remoteStore,r.targetId))}async function EO(t,e,n){const r=fy(t);try{const i=await function(o,a){const u=H(o),c=ke.now(),d=a.reduce((v,R)=>v.add(R.key),re());let f,g;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let R=Bt(),k=re();return u.os.getEntries(v,d).next(x=>{R=x,R.forEach((E,w)=>{w.isValidDocument()||(k=k.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,R)).next(x=>{f=x;const E=[];for(const w of a){const T=HD(w,f.get(w.key).overlayedDocument);T!=null&&E.push(new _r(w.key,T,OS(T.value.mapValue),Re.exists(!0)))}return u.mutationQueue.addMutationBatch(v,c,E,a)}).next(x=>{g=x;const E=x.applyToLocalDocumentSet(f,k);return u.documentOverlayCache.saveOverlays(v,x.batchId,E)})}).then(()=>({batchId:g.batchId,changes:HS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.xa[o.currentUser.toKey()];c||(c=new ve(ne)),c=c.insert(a,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await vr(r,i.changes),await Ko(r.remoteStore)}catch(i){const s=Qo(i,"Failed to persist write");n.reject(s)}}async function eP(t,e){const n=H(t);try{const r=await UV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Z(o.wa):i.removedDocuments.size>0&&(Z(o.wa),o.wa=!1))}),await vr(n,r,e)}catch(r){await vi(r)}}function VI(t,e,n){const r=H(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=H(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const g of f.U_)g.j_(a)&&(c=!0)}),c&&ay(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function TO(t,e,n){const r=H(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new ve(K.comparator);o=o.insert(s,Ee.newNoDocument(s,ee.min()));const a=re().add(s),u=new au(ee.min(),new Map,new ve(ne),o,a);await eP(r,u),r.va=r.va.remove(s),r.Fa.delete(e),dy(r)}else await Co(r.localStore,e,!1).then(()=>No(r,e,n)).catch(vi)}async function SO(t,e){const n=H(t),r=e.batch.batchId;try{const i=await jV(n.localStore,e);hy(n,r,null),cy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await vr(n,i)}catch(i){await vi(i)}}async function AO(t,e,n){const r=H(t);try{const i=await function(o,a){const u=H(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(Z(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);hy(r,e,n),cy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await vr(r,i)}catch(i){await vi(i)}}async function PO(t,e){const n=H(t);Ei(n.remoteStore)||$("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=H(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Oa.get(r)||[];i.push(e),n.Oa.set(r,i)}catch(r){const i=Qo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function cy(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function hy(t,e,n){const r=H(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function No(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||tP(t,r)})}function tP(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(xo(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),dy(t))}function lm(t,e,n){for(const r of n)r instanceof YA?(t.Ma.addReference(r.key,e),RO(t,r)):r instanceof JA?($("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||tP(t,r.key)):Y()}function RO(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||($("SyncEngine","New document in limbo: "+n),t.Ca.add(r),dy(t))}function dy(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new K(oe.fromString(e)),r=t.Na.next();t.Fa.set(r,new gO(n)),t.va=t.va.insert(n,r),Zh(t.remoteStore,new er(bt($o(n.path)),r,"TargetPurposeLimboResolution",jt.oe))}}async function vr(t,e,n){const r=H(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{o.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const d=c&&!c.fromCache;r.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(c){i.push(c);const d=Xg.Ki(u.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const d=H(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>D.forEach(c,g=>D.forEach(g.qi,v=>d.persistence.referenceDelegate.addReference(f,g.targetId,v)).next(()=>D.forEach(g.Qi,v=>d.persistence.referenceDelegate.removeReference(f,g.targetId,v)))))}catch(f){if(!wi(f))throw f;$("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const g=f.targetId;if(!f.fromCache){const v=d.ns.get(g),R=v.snapshotVersion,k=v.withLastLimboFreeSnapshotVersion(R);d.ns=d.ns.insert(g,k)}}}(r.localStore,s))}async function kO(t,e){const n=H(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await OA(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(u=>{u.reject(new z(L.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await vr(n,r.us)}}function CO(t,e){const n=H(t),r=n.Fa.get(e);if(r&&r.wa)return re().add(r.key);{let i=re();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}async function xO(t,e){const n=H(t),r=await gh(n.localStore,e.query,!0),i=e.view.pa(r);return n.isPrimaryClient&&lm(n,e.targetId,i.fa),i}async function bO(t,e){const n=H(t);return jA(n.localStore,e).then(r=>vr(n,r))}async function NO(t,e,n,r){const i=H(t),s=await function(a,u){const c=H(a),d=H(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>d.vn(f,u).next(g=>g?c.localDocuments.getDocuments(f,g):D.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Ko(i.remoteStore):n==="acknowledged"||n==="rejected"?(hy(i,e,r||null),cy(i,e),function(a,u){H(H(a).mutationQueue).Mn(u)}(i.localStore,e)):Y(),await vr(i,s)):$("SyncEngine","Cannot apply mutation batch with id: "+e)}async function DO(t,e){const n=H(t);if(ed(n),fy(n),e===!0&&n.La!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await OI(n,r.toArray());n.La=!0,await om(n.remoteStore,!0);for(const s of i)Zh(n.remoteStore,s)}else if(e===!1&&n.La!==!1){const r=[];let i=Promise.resolve();n.Da.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(No(n,o),Co(n.localStore,o,!0))),xo(n.remoteStore,o)}),await i,await OI(n,r),function(o){const a=H(o);a.Fa.forEach((u,c)=>{xo(a.remoteStore,c)}),a.Ma.mr(),a.Fa=new Map,a.va=new ve(K.comparator)}(n),n.La=!1,await om(n.remoteStore,!1)}}async function OI(t,e,n){const r=H(t),i=[],s=[];for(const o of e){let a;const u=r.Da.get(o);if(u&&u.length!==0){a=await ko(r.localStore,bt(u[0]));for(const c of u){const d=r.ba.get(c),f=await xO(r,d);f.snapshot&&s.push(f.snapshot)}}else{const c=await FA(r.localStore,o);a=await ko(r.localStore,c),await uy(r,nP(c),o,!1,a.resumeToken)}i.push(a)}return r.Sa.h_(s),i}function nP(t){return $S(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function VO(t){return function(n){return H(H(n).persistence).Bi()}(H(t).localStore)}async function OO(t,e,n,r){const i=H(t);if(i.La)return void $("SyncEngine","Ignoring unexpected query state notification.");const s=i.Da.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await jA(i.localStore,WS(s[0])),a=au.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Xe.EMPTY_BYTE_STRING);await vr(i,o,a);break}case"rejected":await Co(i.localStore,e,!0),No(i,e,r);break;default:Y()}}async function LO(t,e,n){const r=ed(t);if(r.La){for(const i of e){if(r.Da.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){$("SyncEngine","Adding an already active target "+i);continue}const s=await FA(r.localStore,i),o=await ko(r.localStore,s);await uy(r,nP(s),o.targetId,!1,o.resumeToken),Zh(r.remoteStore,o)}for(const i of n)r.Da.has(i)&&await Co(r.localStore,i,!1).then(()=>{xo(r.remoteStore,i),No(r,i)}).catch(vi)}}function ed(t){const e=H(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=eP.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TO.bind(null,e),e.Sa.h_=hO.bind(null,e.eventManager),e.Sa.ka=dO.bind(null,e.eventManager),e}function fy(t){const e=H(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=SO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AO.bind(null,e),e}function MO(t,e,n){const r=H(t);(async function(s,o,a){try{const u=await o.getMetadata();if(await function(v,R){const k=H(v),x=We(R.createTime);return k.persistence.runTransaction("hasNewerBundle","readonly",E=>k.$r.getBundleMetadata(E,R.id)).then(E=>!!E&&E.createTime.compareTo(x)>=0)}(s.localStore,u))return await o.close(),a._completeWith(function(v){return{taskState:"Success",documentsLoaded:v.totalDocuments,bytesLoaded:v.totalBytes,totalDocuments:v.totalDocuments,totalBytes:v.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(QA(u));const c=new pO(u,s.localStore,o.serializer);let d=await o.qa();for(;d;){const g=await c._a(d);g&&a._updateProgress(g),d=await o.qa()}const f=await c.complete();return await vr(s,f.ca,void 0),await function(v,R){const k=H(v);return k.persistence.runTransaction("Save bundle","readwrite",x=>k.$r.saveBundleMetadata(x,R))}(s.localStore,u),a._completeWith(f.progress),Promise.resolve(f.ua)}catch(u){return Sn("SyncEngine",`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class um{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=uu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return VA(this.persistence,new DA,e.initialUser,this.serializer)}createPersistence(e){return new NA(Xh.Hr,this.serializer)}createSharedClientState(e){return new BA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rP extends um{constructor(e,n,r){super(),this.Qa=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Qa.initialize(this,e),await fy(this.Qa.syncEngine),await Ko(this.Qa.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return VA(this.persistence,new DA,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new EV(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new sD(n,this.persistence);return new iD(e.asyncQueue,r)}createPersistence(e){const n=Jg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ot.withCacheSize(this.cacheSizeBytes):Ot.DEFAULT;return new Yg(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,zA(),Cc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new BA}}class FO extends rP{constructor(e,n){super(e,n,!1),this.Qa=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Qa.syncEngine;this.sharedClientState instanceof Df&&(this.sharedClientState.syncEngine={Zs:NO.bind(null,n),Xs:OO.bind(null,n),eo:LO.bind(null,n),Bi:VO.bind(null,n),Ys:bO.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await DO(this.Qa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=zA();if(!Df.D(n))throw new z(L.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Jg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Df(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class py{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>VI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kO.bind(null,this.syncEngine),await om(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new cO}()}createDatastore(e){const n=uu(e.databaseInfo.databaseId),r=function(s){return new KV(s)}(e.databaseInfo);return function(s,o,a,u){return new YV(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new XV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>VI(this.syncEngine,n,0),function(){return CI.D()?new CI:new qV}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new yO(i,s,o,a,u,c);return d&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=H(r);$("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Go(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */function LI(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class td{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):$e("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class jO{constructor(e,n){this.Ua=e,this.serializer=n,this.metadata=new rt,this.buffer=new Uint8Array,this.Wa=function(){return new TextDecoder("utf-8")}(),this.Ga().then(r=>{r&&r.sa()?this.metadata.resolve(r.ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ia)}`))},r=>this.metadata.reject(r))}close(){return this.Ua.cancel()}async getMetadata(){return this.metadata.promise}async qa(){return await this.getMetadata(),this.Ga()}async Ga(){const e=await this.za();if(e===null)return null;const n=this.Wa.decode(e),r=Number(n);isNaN(r)&&this.ja(`length string (${n}) is not valid number`);const i=await this.Ha(r);return new fO(JSON.parse(i),e.length+r)}Ja(){return this.buffer.findIndex(e=>e===123)}async za(){for(;this.Ja()<0&&!await this.Ya(););if(this.buffer.length===0)return null;const e=this.Ja();e<0&&this.ja("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ha(e){for(;this.buffer.length<e;)await this.Ya()&&this.ja("Reached the end of bundle when more is expected.");const n=this.Wa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ja(e){throw this.Ua.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ya(){const e=await this.Ua.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class UO{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new z(L.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=H(i),a={documents:s.map(f=>Ul(o.serializer,f))},u=await o.xo("BatchGetDocuments",o.serializer.databaseId,oe.emptyPath(),a,s.length),c=new Map;u.forEach(f=>{const g=rV(o.serializer,f);c.set(g.key.toString(),g)});const d=[];return s.forEach(f=>{const g=c.get(f.toString());Z(!!g),d.push(g)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Wo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=K.fromPath(r);this.mutations.push(new Ug(i,this.precondition(i)))}),await async function(r,i){const s=H(r),o={writes:i.map(a=>Bl(s.serializer,a))};await s.Co("Commit",s.serializer.databaseId,oe.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw Y();n=ee.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new z(L.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(ee.min())?Re.exists(!1):Re.updateTime(n):Re.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(ee.min()))throw new z(L.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Re.updateTime(n)}return Re.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class BO{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Za=r.maxAttempts,this.Yo=new ey(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const e=new UO(this.datastore),n=this.tu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.nu(i)}))}).catch(r=>{this.nu(r)})})}tu(e){try{const n=this.updateFunction(e);return!nu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!sA(n)}return!1}}/**
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
 */class zO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=vS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{$("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>($("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xc(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await OA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function cm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await my(t);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>xI(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>xI(e.remoteStore,i)),t._onlineComponents=e}function iP(t){return t.name==="FirebaseError"?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function my(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await xc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!iP(n))throw n;Sn("Error using user provided cache. Falling back to memory cache: "+n),await xc(t,new um)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await xc(t,new um);return t._offlineComponents}async function nd(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await cm(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await cm(t,new py))),t._onlineComponents}function sP(t){return my(t).then(e=>e.persistence)}function gy(t){return my(t).then(e=>e.localStore)}function oP(t){return nd(t).then(e=>e.remoteStore)}function yy(t){return nd(t).then(e=>e.syncEngine)}function $O(t){return nd(t).then(e=>e.datastore)}async function Do(t){const e=await nd(t),n=e.eventManager;return n.onListen=_O.bind(null,e.syncEngine),n.onUnlisten=wO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=vO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=IO.bind(null,e.syncEngine),n}function qO(t){return t.asyncQueue.enqueue(async()=>{const e=await sP(t),n=await oP(t);return e.setNetworkEnabled(!0),function(i){const s=H(i);return s.M_.delete(0),cu(s)}(n)})}function WO(t){return t.asyncQueue.enqueue(async()=>{const e=await sP(t),n=await oP(t);return e.setNetworkEnabled(!1),async function(i){const s=H(i);s.M_.add(0),await Go(s),s.N_.set("Offline")}(n)})}function GO(t,e){const n=new rt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,d){const f=H(c);return f.persistence.runTransaction("read document","readonly",g=>f.localDocuments.getDocument(g,d))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new z(L.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=Qo(a,`Failed to get document '${s} from cache`);o.reject(u)}}(await gy(t),e,n)),n.promise}function aP(t,e,n={}){const r=new rt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new td({next:g=>{o.enqueueAndForget(()=>oy(s,f));const v=g.docs.has(a);!v&&g.fromCache?c.reject(new z(L.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&u&&u.source==="server"?c.reject(new z(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),f=new ly($o(a.path),d,{includeMetadataChanges:!0,ra:!0});return sy(s,f)}(await Do(t),t.asyncQueue,e,n,r)),r.promise}function KO(t,e){const n=new rt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await gh(i,s,!0),u=new XA(s,a.hs),c=u.da(a.documents),d=u.applyChanges(c,!1);o.resolve(d.snapshot)}catch(a){const u=Qo(a,`Failed to execute query '${s} against cache`);o.reject(u)}}(await gy(t),e,n)),n.promise}function lP(t,e,n={}){const r=new rt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new td({next:g=>{o.enqueueAndForget(()=>oy(s,f)),g.fromCache&&u.source==="server"?c.reject(new z(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),f=new ly(a,d,{includeMetadataChanges:!0,ra:!0});return sy(s,f)}(await Do(t),t.asyncQueue,e,n,r)),r.promise}function HO(t,e){const n=new td(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){H(i).z_.add(s),s.next()}(await Do(t),n)),()=>{n.$a(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){H(i).z_.delete(s)}(await Do(t),n))}}function QO(t,e,n,r){const i=function(o,a){let u;return u=typeof o=="string"?aA().encode(o):o,function(d,f){return new jO(d,f)}(function(d,f){if(d instanceof Uint8Array)return LI(d,f);if(d instanceof ArrayBuffer)return LI(new Uint8Array(d),f);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(n,uu(e));t.asyncQueue.enqueueAndForget(async()=>{MO(await yy(t),i,r)})}function YO(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=H(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await gy(t),e))}/**
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
 */function uP(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const MI=new Map;/**
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
 */function _y(t,e,n){if(!n)throw new z(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cP(t,e,n,r){if(e===!0&&r===!0)throw new z(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function FI(t){if(!K.isDocumentKey(t))throw new z(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jI(t){if(K.isDocumentKey(t))throw new z(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function rd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function he(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rd(t);throw new z(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function hP(t,e){if(e<=0)throw new z(L.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class UI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uP((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new UI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new UI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new K1;switch(r.type){case"firstParty":return new J1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=MI.get(n);r&&($("ComponentProvider","Removing Datastore"),MI.delete(n),r.terminate())}(this),Promise.resolve()}}function JO(t,e,n,r={}){var i;const s=(t=he(t,hu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Sn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=tt.MOCK_USER;else{a=gN(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new z(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new tt(c)}t._authCredentials=new H1(new _S(a,u))}}/**
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
 */let Nt=class dP{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new dP(this.firestore,e,this._query)}},Ne=class fP{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fP(this.firestore,e,this._key)}},Zr=class pP extends Nt{constructor(e,n,r){super(e,n,$o(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new K(e))}withConverter(e){return new pP(this.firestore,e,this._path)}};function mP(t,e,...n){if(t=te(t),_y("collection","path",e),t instanceof hu){const r=oe.fromString(e,...n);return jI(r),new Zr(t,null,r)}{if(!(t instanceof Ne||t instanceof Zr))throw new z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return jI(r),new Zr(t.firestore,null,r)}}function XO(t,e){if(t=he(t,hu),_y("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new z(L.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Nt(t,null,function(r){return new yr(oe.emptyPath(),r)}(e))}function wh(t,e,...n){if(t=te(t),arguments.length===1&&(e=vS.newId()),_y("doc","path",e),t instanceof hu){const r=oe.fromString(e,...n);return FI(r),new Ne(t,null,new K(r))}{if(!(t instanceof Ne||t instanceof Zr))throw new z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return FI(r),new Ne(t.firestore,t instanceof Zr?t.converter:null,new K(r))}}function gP(t,e){return t=te(t),e=te(e),(t instanceof Ne||t instanceof Zr)&&(e instanceof Ne||e instanceof Zr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function yP(t,e){return t=te(t),e=te(e),t instanceof Nt&&e instanceof Nt&&t.firestore===e.firestore&&iu(t._query,e._query)&&t.converter===e.converter}/**
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
 */class ZO{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new ey(this,"async_queue_retry"),this.hu=()=>{const n=Cc();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Cc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Cc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new rt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!wi(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw $e("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=iy.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&Y()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function hm(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class eL{constructor(){this._progressObserver={},this._taskCompletionResolver=new rt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const tL=-1;let Fe=class extends hu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new ZO}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_P(this),this._firestoreClient.terminate()}};function ot(t){return t._firestoreClient||_P(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function _P(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new PD(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,uP(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new zO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function nL(t,e){wP(t=he(t,Fe));const n=ot(t);if(n._uninitializedComponentsProvider)throw new z(L.FAILED_PRECONDITION,"SDK cache is already specified.");Sn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new py;return vP(n,i,new rP(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function rL(t){wP(t=he(t,Fe));const e=ot(t);if(e._uninitializedComponentsProvider)throw new z(L.FAILED_PRECONDITION,"SDK cache is already specified.");Sn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new py;return vP(e,r,new FO(r,n.cacheSizeBytes))}function vP(t,e,n){const r=new rt;return t.asyncQueue.enqueue(async()=>{try{await xc(t,n),await cm(t,e),r.resolve()}catch(i){const s=i;if(!iP(s))throw s;Sn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function iL(t){if(t._initialized&&!t._terminated)throw new z(L.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new rt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!jn.D())return Promise.resolve();const i=r+"main";await jn.delete(i)}(Jg(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function sL(t){return function(n){const r=new rt;return n.asyncQueue.enqueueAndForget(async()=>PO(await yy(n),r)),r.promise}(ot(t=he(t,Fe)))}function oL(t){return qO(ot(t=he(t,Fe)))}function aL(t){return WO(ot(t=he(t,Fe)))}function lL(t,e){const n=ot(t=he(t,Fe)),r=new eL;return QO(n,t._databaseId,e,r),r}function uL(t,e){return YO(ot(t=he(t,Fe)),e).then(n=>n?new Nt(t,null,n.query):null)}function wP(t){if(t._initialized||t._terminated)throw new z(L.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class $n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $n(Xe.fromBase64String(e))}catch(n){throw new z(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $n(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let hi=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let Is=class{constructor(e){this._methodName=e}};/**
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
 */class id{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
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
 */const cL=/^__.*__$/;class hL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _r(e,this.data,this.fieldMask,n,this.fieldTransforms):new qo(e,this.data,n,this.fieldTransforms)}}class IP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new _r(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function EP(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class sd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new sd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Ih(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(EP(this.fu)&&cL.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class dL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||uu(e)}Fu(e,n,r,i=!1){return new sd({fu:e,methodName:n,vu:r,path:Pe.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Es(t){const e=t._freezeSettings(),n=uu(t._databaseId);return new dL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function od(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);Ay("Data must be an object, but it was:",o,r);const a=AP(r,o);let u,c;if(s.merge)u=new Ut(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const g=dm(e,f,n);if(!o.contains(g))throw new z(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);RP(d,g)||d.push(g)}u=new Ut(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new hL(new ht(a),u,c)}class du extends Is{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof du}}function TP(t,e,n){return new sd({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class vy extends Is{_toFieldTransform(e){return new ou(e.path,new Ao)}isEqual(e){return e instanceof vy}}class wy extends Is{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=TP(this,e,!0),r=this.Mu.map(s=>Ts(s,n)),i=new os(r);return new ou(e.path,i)}isEqual(e){return e instanceof wy&&xl(this.Mu,e.Mu)}}class Iy extends Is{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=TP(this,e,!0),r=this.Mu.map(s=>Ts(s,n)),i=new as(r);return new ou(e.path,i)}isEqual(e){return e instanceof Iy&&xl(this.Mu,e.Mu)}}class Ey extends Is{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new Po(e.serializer,XS(e.serializer,this.xu));return new ou(e.path,n)}isEqual(e){return e instanceof Ey&&this.xu===e.xu}}function Ty(t,e,n,r){const i=t.Fu(1,e,n);Ay("Data must be an object, but it was:",i,r);const s=[],o=ht.empty();ws(r,(u,c)=>{const d=Py(e,u,n);c=te(c);const f=i.Su(d);if(c instanceof du)s.push(d);else{const g=Ts(c,f);g!=null&&(s.push(d),o.set(d,g))}});const a=new Ut(s);return new IP(o,a,i.fieldTransforms)}function Sy(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[dm(e,r,n)],u=[i];if(s.length%2!=0)throw new z(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)a.push(dm(e,s[g])),u.push(s[g+1]);const c=[],d=ht.empty();for(let g=a.length-1;g>=0;--g)if(!RP(c,a[g])){const v=a[g];let R=u[g];R=te(R);const k=o.Su(v);if(R instanceof du)c.push(v);else{const x=Ts(R,k);x!=null&&(c.push(v),d.set(v,x))}}const f=new Ut(c);return new IP(d,f,o.fieldTransforms)}function SP(t,e,n,r=!1){return Ts(n,t.Fu(r?4:3,e))}function Ts(t,e){if(PP(t=te(t)))return Ay("Unsupported field value:",e,t),AP(t,e);if(t instanceof Is)return function(r,i){if(!EP(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Ts(a,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return XS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ke.fromDate(r);return{timestampValue:Ro(i.serializer,s)}}if(r instanceof ke){const s=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ro(i.serializer,s)}}if(r instanceof id)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $n)return{bytesValue:cA(i.serializer,r._byteString)};if(r instanceof Ne){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Wg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${rd(r)}`)}(t,e)}function AP(t,e){const n={};return NS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ws(t,(r,i)=>{const s=Ts(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function PP(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof id||t instanceof $n||t instanceof Ne||t instanceof Is)}function Ay(t,e,n){if(!PP(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=rd(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function dm(t,e,n){if((e=te(e))instanceof hi)return e._internalPath;if(typeof e=="string")return Py(t,e);throw Ih("Field path arguments must be of type string or ",t,!1,void 0,n)}const fL=new RegExp("[~\\*/\\[\\]]");function Py(t,e,n){if(e.search(fL)>=0)throw Ih(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hi(...e.split("."))._internalPath}catch{throw Ih(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ih(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new z(L.INVALID_ARGUMENT,a+t+u)}function RP(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class zl{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ad("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pL extends zl{data(){return super.data()}}function ad(t,e){return typeof e=="string"?Py(t,e):e instanceof hi?e._internalPath:e._delegate._internalPath}/**
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
 */function kP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ry{}class fu extends Ry{}function kr(t,e,...n){let r=[];e instanceof Ry&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof ky).length,a=s.filter(u=>u instanceof ld).length;if(o>1||o>0&&a>0)throw new z(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class ld extends fu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ld(e,n,r)}_apply(e){const n=this._parse(e);return xP(e._query,n),new Nt(e.firestore,e.converter,Jp(e._query,n))}_parse(e){const n=Es(e.firestore);return function(s,o,a,u,c,d,f){let g;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new z(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){zI(f,d);const v=[];for(const R of f)v.push(BI(u,s,R));g={arrayValue:{values:v}}}else g=BI(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||zI(f,d),g=SP(a,o,f,d==="in"||d==="not-in");return ae.create(c,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function mL(t,e,n){const r=e,i=ad("where",t);return ld._create(i,r,n)}class ky extends Ry{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ky(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:pe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)xP(o,u),o=Jp(o,u)}(e._query,n),new Nt(e.firestore,e.converter,Jp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cy extends fu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Cy(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new jl(s,o)}(e._query,this._field,this._direction);return new Nt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new yr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function gL(t,e="asc"){const n=e,r=ad("orderBy",t);return Cy._create(r,n)}class ud extends fu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new ud(e,n,r)}_apply(e){return new Nt(e.firestore,e.converter,dh(e._query,this._limit,this._limitType))}}function yL(t){return hP("limit",t),ud._create("limit",t,"F")}function _L(t){return hP("limitToLast",t),ud._create("limitToLast",t,"L")}class cd extends fu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new cd(e,n,r)}_apply(e){const n=CP(e,this.type,this._docOrFields,this._inclusive);return new Nt(e.firestore,e.converter,function(i,s){return new yr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function vL(...t){return cd._create("startAt",t,!0)}function wL(...t){return cd._create("startAfter",t,!1)}class hd extends fu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new hd(e,n,r)}_apply(e){const n=CP(e,this.type,this._docOrFields,this._inclusive);return new Nt(e.firestore,e.converter,function(i,s){return new yr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function IL(...t){return hd._create("endBefore",t,!1)}function EL(...t){return hd._create("endAt",t,!0)}function CP(t,e,n,r){if(n[0]=te(n[0]),n[0]instanceof zl)return function(s,o,a,u,c){if(!u)throw new z(L.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of oo(s))if(f.field.isKeyField())d.push(is(o,u.key));else{const g=u.data.field(f.field);if(Kh(g))throw new z(L.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const v=f.field.canonicalString();throw new z(L.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${v}' (used as the orderBy) does not exist.`)}d.push(g)}return new ui(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Es(t.firestore);return function(o,a,u,c,d,f){const g=o.explicitOrderBy;if(d.length>g.length)throw new z(L.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const v=[];for(let R=0;R<d.length;R++){const k=d[R];if(g[R].field.isKeyField()){if(typeof k!="string")throw new z(L.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof k}`);if(!Fg(o)&&k.indexOf("/")!==-1)throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${k}' contains a slash.`);const x=o.path.child(oe.fromString(k));if(!K.isDocumentKey(x))throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${x}' is not because it contains an odd number of segments.`);const E=new K(x);v.push(is(a,E))}else{const x=SP(u,c,k);v.push(x)}}return new ui(v,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function BI(t,e,n){if(typeof(n=te(n))=="string"){if(n==="")throw new z(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fg(e)&&n.indexOf("/")!==-1)throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(oe.fromString(n));if(!K.isDocumentKey(r))throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return is(t,new K(r))}if(n instanceof Ne)return is(t,n._key);throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${rd(n)}.`)}function zI(t,e){if(!Array.isArray(t)||t.length===0)throw new z(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xP(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class xy{convertValue(e,n="none"){switch(rs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ws(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new id(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Lg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ll(e));default:return null}}convertTimestamp(e){const n=cr(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=oe.fromString(e);Z(IA(r));const i=new ai(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||$e(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function dd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class TL extends xy{constructor(e){super(),this.firestore=e}convertBytes(e){return new $n(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}/**
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
 */class $i{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let hr=class extends zl{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new sl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ad("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},sl=class extends hr{data(e={}){return super.data(e)}},di=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new $i(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new sl(this._firestore,this._userDataWriter,r.key,r,new $i(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new sl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new $i(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new sl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new $i(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:SL(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function SL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}function bP(t,e){return t instanceof hr&&e instanceof hr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof di&&e instanceof di&&t._firestore===e._firestore&&yP(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function AL(t){t=he(t,Ne);const e=he(t.firestore,Fe);return aP(ot(e),t._key).then(n=>by(e,t,n))}class Ss extends xy{constructor(e){super(),this.firestore=e}convertBytes(e){return new $n(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}function PL(t){t=he(t,Ne);const e=he(t.firestore,Fe),n=ot(e),r=new Ss(e);return GO(n,t._key).then(i=>new hr(e,r,t._key,i,new $i(i!==null&&i.hasLocalMutations,!0),t.converter))}function RL(t){t=he(t,Ne);const e=he(t.firestore,Fe);return aP(ot(e),t._key,{source:"server"}).then(n=>by(e,t,n))}function kL(t){t=he(t,Nt);const e=he(t.firestore,Fe),n=ot(e),r=new Ss(e);return kP(t._query),lP(n,t._query).then(i=>new di(e,r,t,i))}function CL(t){t=he(t,Nt);const e=he(t.firestore,Fe),n=ot(e),r=new Ss(e);return KO(n,t._query).then(i=>new di(e,r,t,i))}function xL(t){t=he(t,Nt);const e=he(t.firestore,Fe),n=ot(e),r=new Ss(e);return lP(n,t._query,{source:"server"}).then(i=>new di(e,r,t,i))}function $I(t,e,n){t=he(t,Ne);const r=he(t.firestore,Fe),i=dd(t.converter,e,n);return pu(r,[od(Es(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Re.none())])}function qI(t,e,n,...r){t=he(t,Ne);const i=he(t.firestore,Fe),s=Es(i);let o;return o=typeof(e=te(e))=="string"||e instanceof hi?Sy(s,"updateDoc",t._key,e,n,r):Ty(s,"updateDoc",t._key,e),pu(i,[o.toMutation(t._key,Re.exists(!0))])}function bL(t){return pu(he(t.firestore,Fe),[new Wo(t._key,Re.none())])}function NL(t,e){const n=he(t.firestore,Fe),r=wh(t),i=dd(t.converter,e);return pu(n,[od(Es(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Re.exists(!1))]).then(()=>r)}function NP(t,...e){var n,r,i;t=te(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||hm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(hm(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,d;if(t instanceof Ne)c=he(t.firestore,Fe),d=$o(t._key.path),u={next:f=>{e[o]&&e[o](by(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=he(t,Nt);c=he(f.firestore,Fe),d=f._query;const g=new Ss(c);u={next:v=>{e[o]&&e[o](new di(c,g,f,v))},error:e[o+1],complete:e[o+2]},kP(t._query)}return function(g,v,R,k){const x=new td(k),E=new ly(v,x,R);return g.asyncQueue.enqueueAndForget(async()=>sy(await Do(g),E)),()=>{x.$a(),g.asyncQueue.enqueueAndForget(async()=>oy(await Do(g),E))}}(ot(c),d,a,u)}function DL(t,e){return HO(ot(t=he(t,Fe)),hm(e)?e:{next:e})}function pu(t,e){return function(r,i){const s=new rt;return r.asyncQueue.enqueueAndForget(async()=>EO(await yy(r),i,s)),s.promise}(ot(t),e)}function by(t,e,n){const r=n.docs.get(e._key),i=new Ss(t);return new hr(t,i,e._key,r,new $i(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const VL={maxAttempts:5};/**
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
 */let OL=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Es(e)}set(e,n,r){this._verifyNotCommitted();const i=Lr(e,this._firestore),s=dd(i.converter,n,r),o=od(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Re.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Lr(e,this._firestore);let o;return o=typeof(n=te(n))=="string"||n instanceof hi?Sy(this._dataReader,"WriteBatch.update",s._key,n,r,i):Ty(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Re.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Lr(e,this._firestore);return this._mutations=this._mutations.concat(new Wo(n._key,Re.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Lr(t,e){if((t=te(t)).firestore!==e)throw new z(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */let LL=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Es(n)}get(n){const r=Lr(n,this._firestore),i=new TL(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return Y();const o=s[0];if(o.isFoundDocument())return new zl(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new zl(this._firestore,i,r._key,null,r.converter);throw Y()})}set(n,r,i){const s=Lr(n,this._firestore),o=dd(s.converter,r,i),a=od(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Lr(n,this._firestore);let a;return a=typeof(r=te(r))=="string"||r instanceof hi?Sy(this._dataReader,"Transaction.update",o._key,r,i,s):Ty(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Lr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Lr(e,this._firestore),r=new Ss(this._firestore);return super.get(e).then(i=>new hr(this._firestore,r,n._key,i._document,new $i(!1,!1),n.converter))}};function ML(t,e,n){t=he(t,Fe);const r=Object.assign(Object.assign({},VL),n);return function(s){if(s.maxAttempts<1)throw new z(L.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new rt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await $O(s);new BO(s.asyncQueue,c,a,o,u).Xa()}),u.promise}(ot(t),i=>e(new LL(t,i)),r)}/**
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
 */function FL(){return new du("deleteField")}function jL(){return new vy("serverTimestamp")}function UL(...t){return new wy("arrayUnion",t)}function BL(...t){return new Iy("arrayRemove",t)}function zL(t){return new Ey("increment",t)}(function(e,n=!0){(function(i){zo=i})(_i),ii(new Bn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Fe(new Q1(r.getProvider("auth-internal")),new Z1(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ai(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),En(Mw,"4.6.3",e),En(Mw,"4.6.3","esm2017")})();const $L="@firebase/firestore-compat",qL="0.3.32";/**
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
 */function Ny(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new z("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function WI(){if(typeof Uint8Array>"u")throw new z("unimplemented","Uint8Arrays are not available in this environment.")}function GI(){if(!SD())throw new z("unimplemented","Blobs are unavailable in Firestore in this environment.")}let DP=class fm{constructor(e){this._delegate=e}static fromBase64String(e){return GI(),new fm($n.fromBase64String(e))}static fromUint8Array(e){return WI(),new fm($n.fromUint8Array(e))}toBase64(){return GI(),this._delegate.toBase64()}toUint8Array(){return WI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function pm(t){return WL(t,["next","error","complete"])}function WL(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class GL{enableIndexedDbPersistence(e,n){return nL(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return rL(e._delegate)}clearIndexedDbPersistence(e){return iL(e._delegate)}}class VP{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ai||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Sn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){JO(this._delegate,e,n,r)}enableNetwork(){return oL(this._delegate)}disableNetwork(){return aL(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,cP("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return sL(this._delegate)}onSnapshotsInSync(e){return DL(this._delegate,e)}get app(){if(!this._appCompat)throw new z("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Vo(this,mP(this._delegate,e))}catch(n){throw Rt(n,"collection()","Firestore.collection()")}}doc(e){try{return new un(this,wh(this._delegate,e))}catch(n){throw Rt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Pt(this,XO(this._delegate,e))}catch(n){throw Rt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return ML(this._delegate,n=>e(new OP(this,n)))}batch(){return ot(this._delegate),new LP(new OL(this._delegate,e=>pu(this._delegate,e)))}loadBundle(e){return lL(this._delegate,e)}namedQuery(e){return uL(this._delegate,e).then(n=>n?new Pt(this,n):null)}}class fd extends xy{constructor(e){super(),this.firestore=e}convertBytes(e){return new DP(new $n(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return un.forKey(n,this.firestore,null)}}function KL(t){W1(t)}class OP{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new fd(e)}get(e){const n=qi(e);return this._delegate.get(n).then(r=>new $l(this._firestore,new hr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=qi(e);return r?(Ny("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=qi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=qi(e);return this._delegate.delete(n),this}}class LP{constructor(e){this._delegate=e}set(e,n,r){const i=qi(e);return r?(Ny("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=qi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=qi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class hs{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new sl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ql(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=hs.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new hs(e,new fd(e),n),i.set(n,s)),s}}hs.INSTANCES=new WeakMap;class un{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new fd(e)}static forPath(e,n,r){if(e.length%2!==0)throw new z("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new un(n,new Ne(n._delegate,r,new K(e)))}static forKey(e,n,r){return new un(n,new Ne(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Vo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Vo(this.firestore,mP(this._delegate,e))}catch(n){throw Rt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=te(e),e instanceof Ne?gP(this._delegate,e):!1}set(e,n){n=Ny("DocumentReference.set",n);try{return n?$I(this._delegate,e,n):$I(this._delegate,e)}catch(r){throw Rt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?qI(this._delegate,e):qI(this._delegate,e,n,...r)}catch(i){throw Rt(i,"updateDoc()","DocumentReference.update()")}}delete(){return bL(this._delegate)}onSnapshot(...e){const n=MP(e),r=FP(e,i=>new $l(this.firestore,new hr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return NP(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=PL(this._delegate):(e==null?void 0:e.source)==="server"?n=RL(this._delegate):n=AL(this._delegate),n.then(r=>new $l(this.firestore,new hr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new un(this.firestore,e?this._delegate.withConverter(hs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Rt(t,e,n){return t.message=t.message.replace(e,n),t}function MP(t){for(const e of t)if(typeof e=="object"&&!pm(e))return e;return{}}function FP(t,e){var n,r;let i;return pm(t[0])?i=t[0]:pm(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class $l{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new un(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return bP(this._delegate,e._delegate)}}class ql extends $l{data(e){const n=this._delegate.data(e);return this._delegate._converter||G1(n!==void 0),n}}class Pt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new fd(e)}where(e,n,r){try{return new Pt(this.firestore,kr(this._delegate,mL(e,n,r)))}catch(i){throw Rt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Pt(this.firestore,kr(this._delegate,gL(e,n)))}catch(r){throw Rt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Pt(this.firestore,kr(this._delegate,yL(e)))}catch(n){throw Rt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Pt(this.firestore,kr(this._delegate,_L(e)))}catch(n){throw Rt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Pt(this.firestore,kr(this._delegate,vL(...e)))}catch(n){throw Rt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Pt(this.firestore,kr(this._delegate,wL(...e)))}catch(n){throw Rt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Pt(this.firestore,kr(this._delegate,IL(...e)))}catch(n){throw Rt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Pt(this.firestore,kr(this._delegate,EL(...e)))}catch(n){throw Rt(n,"endAt()","Query.endAt()")}}isEqual(e){return yP(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=CL(this._delegate):(e==null?void 0:e.source)==="server"?n=xL(this._delegate):n=kL(this._delegate),n.then(r=>new mm(this.firestore,new di(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=MP(e),r=FP(e,i=>new mm(this.firestore,new di(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return NP(this._delegate,n,r)}withConverter(e){return new Pt(this.firestore,e?this._delegate.withConverter(hs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class HL{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new ql(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class mm{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Pt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new ql(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new HL(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new ql(this._firestore,r))})}isEqual(e){return bP(this._delegate,e._delegate)}}class Vo extends Pt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new un(this.firestore,e):null}doc(e){try{return e===void 0?new un(this.firestore,wh(this._delegate)):new un(this.firestore,wh(this._delegate,e))}catch(n){throw Rt(n,"doc()","CollectionReference.doc()")}}add(e){return NL(this._delegate,e).then(n=>new un(this.firestore,n))}isEqual(e){return gP(this._delegate,e._delegate)}withConverter(e){return new Vo(this.firestore,e?this._delegate.withConverter(hs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function qi(t){return he(t,Ne)}/**
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
 */class Dy{constructor(...e){this._delegate=new hi(...e)}static documentId(){return new Dy(Pe.keyField().canonicalString())}isEqual(e){return e=te(e),e instanceof hi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Fi{constructor(e){this._delegate=e}static serverTimestamp(){const e=jL();return e._methodName="FieldValue.serverTimestamp",new Fi(e)}static delete(){const e=FL();return e._methodName="FieldValue.delete",new Fi(e)}static arrayUnion(...e){const n=UL(...e);return n._methodName="FieldValue.arrayUnion",new Fi(n)}static arrayRemove(...e){const n=BL(...e);return n._methodName="FieldValue.arrayRemove",new Fi(n)}static increment(e){const n=zL(e);return n._methodName="FieldValue.increment",new Fi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const QL={Firestore:VP,GeoPoint:id,Timestamp:ke,Blob:DP,Transaction:OP,WriteBatch:LP,DocumentReference:un,DocumentSnapshot:$l,Query:Pt,QueryDocumentSnapshot:ql,QuerySnapshot:mm,CollectionReference:Vo,FieldPath:Dy,FieldValue:Fi,setLogLevel:KL,CACHE_SIZE_UNLIMITED:tL};function YL(t,e){t.INTERNAL.registerComponent(new Bn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},QL)))}/**
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
 */function JL(t){YL(t,(e,n)=>new VP(e,n,new GL)),t.registerVersion($L,qL)}JL(ln);function Vy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const xa={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Os={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function XL(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function jP(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZL=XL,e2=jP,UP=new vs("auth","Firebase",jP());/**
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
 */const Eh=new Wh("@firebase/auth");function t2(t,...e){Eh.logLevel<=ie.WARN&&Eh.warn(`Auth (${_i}): ${t}`,...e)}function bc(t,...e){Eh.logLevel<=ie.ERROR&&Eh.error(`Auth (${_i}): ${t}`,...e)}/**
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
 */function pt(t,...e){throw Ly(t,...e)}function Je(t,...e){return Ly(t,...e)}function Oy(t,e,n){const r=Object.assign(Object.assign({},e2()),{[e]:n});return new vs("auth","Firebase",r).create(e,{appName:t.name})}function it(t){return Oy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&pt(t,"argument-error"),Oy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ly(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return UP.create(t,...e)}function W(t,e,...n){if(!t)throw Ly(e,...n)}function Ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bc(e),new Error(e)}function An(t,e){t||Ln(e)}/**
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
 */function Wl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function My(){return KI()==="http:"||KI()==="https:"}function KI(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function n2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(My()||H0()||"connection"in navigator)?navigator.onLine:!0}function r2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class mu{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=yN()||kg()}get(){return n2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fy(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class BP{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const i2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const s2=new mu(3e4,6e4);function Ue(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Be(t,e,n,r,i={}){return zP(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Bo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),BP.fetch()($P(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function zP(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},i2),e);try{const i=new a2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw qa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw qa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw qa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw qa(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Oy(t,d,c);pt(t,d)}}catch(i){if(i instanceof Ct)throw i;pt(t,"network-request-failed",{message:String(i)})}}async function wr(t,e,n,r,i={}){const s=await Be(t,e,n,r,i);return"mfaPendingCredential"in s&&pt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function $P(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Fy(t.config,i):`${t.config.apiScheme}://${i}`}function o2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class a2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Je(this.auth,"network-request-failed")),s2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Je(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function HI(t){return t!==void 0&&t.getResponse!==void 0}function QI(t){return t!==void 0&&t.enterprise!==void 0}class l2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return o2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function u2(t){return(await Be(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function c2(t,e){return Be(t,"GET","/v2/recaptchaConfig",Ue(t,e))}/**
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
 */async function h2(t,e){return Be(t,"POST","/v1/accounts:delete",e)}async function d2(t,e){return Be(t,"POST","/v1/accounts:update",e)}async function qP(t,e){return Be(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ol(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function f2(t,e=!1){const n=te(t),r=await n.getIdToken(e),i=pd(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ol(Of(i.auth_time)),issuedAtTime:ol(Of(i.iat)),expirationTime:ol(Of(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Of(t){return Number(t)*1e3}function pd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bc("JWT malformed, contained fewer than 3 sections"),null;try{const i=W0(n);return i?JSON.parse(i):(bc("Failed to decode base64 JWT payload"),null)}catch(i){return bc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function YI(t){const e=pd(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function dr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ct&&p2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function p2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class m2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ol(this.lastLoginAt),this.creationTime=ol(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await dr(t,qP(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?WP(s.providerUserInfo):[],a=y2(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gm(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function g2(t){const e=te(t);await Gl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function y2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function WP(t){return t.map(e=>{var{providerId:n}=e,r=Vy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _2(t,e){const n=await zP(t,{},async()=>{const r=Bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=$P(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",BP.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function v2(t,e){return Be(t,"POST","/v2/accounts:revokeToken",Ue(t,e))}/**
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
 */class lo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):YI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=YI(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new lo;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lo,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
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
 */function Cr(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Vy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new m2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await dr(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return f2(this,e)}reload(){return g2(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Gl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(it(this.auth));const e=await this.getIdToken();return await dr(this,h2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:T,emailVerified:V,isAnonymous:j,providerData:F,stsTokenManager:I}=n;W(T&&I,e,"internal-error");const _=lo.fromJSON(this.name,I);W(typeof T=="string",e,"internal-error"),Cr(f,e.name),Cr(g,e.name),W(typeof V=="boolean",e,"internal-error"),W(typeof j=="boolean",e,"internal-error"),Cr(v,e.name),Cr(R,e.name),Cr(k,e.name),Cr(x,e.name),Cr(E,e.name),Cr(w,e.name);const S=new tr({uid:T,auth:e,email:g,emailVerified:V,displayName:f,isAnonymous:j,photoURL:R,phoneNumber:v,tenantId:k,stsTokenManager:_,createdAt:E,lastLoginAt:w});return F&&Array.isArray(F)&&(S.providerData=F.map(A=>Object.assign({},A))),x&&(S._redirectEventId=x),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new lo;i.updateFromServerResponse(n);const s=new tr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Gl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?WP(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new lo;a.updateFromIdToken(r);const u=new tr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new gm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const JI=new Map;function Jt(t){An(t instanceof Function,"Expected a class definition");let e=JI.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,JI.set(t,e),e)}/**
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
 */class GP{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}GP.type="NONE";const Oo=GP;/**
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
 */function Qi(t,e,n){return`firebase:${t}:${e}:${n}`}class uo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new uo(Jt(Oo),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Jt(Oo);const o=Qi(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=tr._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new uo(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new uo(s,e,r))}}/**
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
 */function XI(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(QP(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(KP(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(YP(e))return"Blackberry";if(JP(e))return"Webos";if(jy(e))return"Safari";if((e.includes("chrome/")||HP(e))&&!e.includes("edge/"))return"Chrome";if(gu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function KP(t=Ce()){return/firefox\//i.test(t)}function jy(t=Ce()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function HP(t=Ce()){return/crios\//i.test(t)}function QP(t=Ce()){return/iemobile/i.test(t)}function gu(t=Ce()){return/android/i.test(t)}function YP(t=Ce()){return/blackberry/i.test(t)}function JP(t=Ce()){return/webos/i.test(t)}function Jo(t=Ce()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function w2(t=Ce()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function I2(t=Ce()){var e;return Jo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function E2(){return Q0()&&document.documentMode===10}function XP(t=Ce()){return Jo(t)||gu(t)||JP(t)||YP(t)||/windows phone/i.test(t)||QP(t)}function T2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ZP(t,e=[]){let n;switch(t){case"Browser":n=XI(Ce());break;case"Worker":n=`${XI(Ce())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_i}/${r}`}/**
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
 */class S2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function A2(t,e={}){return Be(t,"GET","/v2/passwordPolicy",Ue(t,e))}/**
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
 */const P2=6;class R2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:P2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class k2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ZI(this),this.idTokenSubscription=new ZI(this),this.beforeStateQueue=new S2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=UP,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await uo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await qP(this,{idToken:e}),r=await tr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Me(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=r2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(it(this));const n=e?te(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(it(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(it(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await A2(this),n=new R2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await v2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jt(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await uo.create(this,[Jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ZP(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&t2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function je(t){return te(t)}class ZI{constructor(e){this.auth=e,this.observer=null,this.addObserver=J0(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let yu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function C2(t){yu=t}function Uy(t){return yu.loadJS(t)}function x2(){return yu.recaptchaV2Script}function b2(){return yu.recaptchaEnterpriseScript}function N2(){return yu.gapiScript}function eR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const D2="recaptcha-enterprise",V2="NO_RECAPTCHA";class O2{constructor(e){this.type=D2,this.auth=je(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{c2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new l2(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;QI(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(V2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&QI(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=b2();u.length!==0&&(u+=a),Uy(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function eE(t,e,n,r=!1){const i=new O2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Kl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await eE(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await eE(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function L2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function M2(t,e,n){const r=je(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=tR(e),{host:o,port:a}=F2(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||j2()}function tR(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function F2(t){const e=tR(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:tE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:tE(o)}}}function tE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function j2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Xo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ln("not implemented")}_getIdTokenResponse(e){return Ln("not implemented")}_linkToIdToken(e,n){return Ln("not implemented")}_getReauthenticationResolver(e){return Ln("not implemented")}}/**
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
 */async function nR(t,e){return Be(t,"POST","/v1/accounts:resetPassword",Ue(t,e))}async function U2(t,e){return Be(t,"POST","/v1/accounts:update",e)}async function B2(t,e){return Be(t,"POST","/v1/accounts:signUp",e)}async function z2(t,e){return Be(t,"POST","/v1/accounts:update",Ue(t,e))}/**
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
 */async function $2(t,e){return wr(t,"POST","/v1/accounts:signInWithPassword",Ue(t,e))}async function md(t,e){return Be(t,"POST","/v1/accounts:sendOobCode",Ue(t,e))}async function q2(t,e){return md(t,e)}async function W2(t,e){return md(t,e)}async function G2(t,e){return md(t,e)}async function K2(t,e){return md(t,e)}/**
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
 */async function H2(t,e){return wr(t,"POST","/v1/accounts:signInWithEmailLink",Ue(t,e))}async function Q2(t,e){return wr(t,"POST","/v1/accounts:signInWithEmailLink",Ue(t,e))}/**
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
 */class Hl extends Xo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Hl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Hl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kl(e,n,"signInWithPassword",$2);case"emailLink":return H2(e,{email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kl(e,r,"signUpPassword",B2);case"emailLink":return Q2(e,{idToken:n,email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function sr(t,e){return wr(t,"POST","/v1/accounts:signInWithIdp",Ue(t,e))}/**
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
 */const Y2="http://localhost";class qn extends Xo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Vy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new qn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return sr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,sr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,sr(e,n)}buildRequest(){const e={requestUri:Y2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bo(n)}return e}}/**
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
 */async function J2(t,e){return Be(t,"POST","/v1/accounts:sendVerificationCode",Ue(t,e))}async function X2(t,e){return wr(t,"POST","/v1/accounts:signInWithPhoneNumber",Ue(t,e))}async function Z2(t,e){const n=await wr(t,"POST","/v1/accounts:signInWithPhoneNumber",Ue(t,e));if(n.temporaryProof)throw qa(t,"account-exists-with-different-credential",n);return n}const eM={USER_NOT_FOUND:"user-not-found"};async function tM(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return wr(t,"POST","/v1/accounts:signInWithPhoneNumber",Ue(t,n),eM)}/**
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
 */class Yi extends Xo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Yi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Yi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return X2(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Z2(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return tM(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Yi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function nM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rM(t){const e=Zs(ja(t)).link,n=e?Zs(ja(e)).deep_link_id:null,r=Zs(ja(t)).deep_link_id;return(r?Zs(ja(r)).link:null)||r||n||e||t}class gd{constructor(e){var n,r,i,s,o,a;const u=Zs(ja(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=nM((i=u.mode)!==null&&i!==void 0?i:null);W(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=rM(e);try{return new gd(n)}catch{return null}}}/**
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
 */class Ti{constructor(){this.providerId=Ti.PROVIDER_ID}static credential(e,n){return Hl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gd.parseLink(n);return W(r,"argument-error"),Hl._fromEmailAndCode(e,r.code,r.tenantId)}}Ti.PROVIDER_ID="password";Ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ir{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zo extends Ir{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class co extends Zo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return W("providerId"in n&&"signInMethod"in n,"argument-error"),qn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return W(e.idToken||e.accessToken,"argument-error"),qn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return co.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return co.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new co(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class xn extends Zo{constructor(){super("facebook.com")}static credential(e){return qn._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
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
 */class bn extends Zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qn._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
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
 */class Nn extends Zo{constructor(){super("github.com")}static credential(e){return qn._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
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
 */const iM="http://localhost";class Lo extends Xo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return sr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,sr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,sr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Lo(r,s)}static _create(e,n){return new Lo(e,n)}buildRequest(){return{requestUri:iM,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const sM="saml.";class Th extends Ir{constructor(e){W(e.startsWith(sM),"argument-error"),super(e)}static credentialFromResult(e){return Th.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Th.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Lo.fromJSON(e);return W(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Lo._create(r,n)}catch{return null}}}/**
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
 */class Dn extends Zo{constructor(){super("twitter.com")}static credential(e,n){return qn._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
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
 */async function rR(t,e){return wr(t,"POST","/v1/accounts:signUp",Ue(t,e))}/**
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
 */class pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await tr._fromIdTokenResponse(e,r,i),o=nE(r);return new pn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=nE(r);return new pn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function nE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function oM(t){var e;if(Me(t.app))return Promise.reject(it(t));const n=je(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new pn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await rR(n,{returnSecureToken:!0}),i=await pn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Sh extends Ct{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Sh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Sh(e,n,r,i)}}function iR(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Sh._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function sR(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function aM(t,e){const n=te(t);await yd(!0,n,e);const{providerUserInfo:r}=await d2(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=sR(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function By(t,e,n=!1){const r=await dr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pn._forOperation(t,"link",r)}async function yd(t,e,n){await Gl(e);const r=sR(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";W(r.has(n)===t,e.auth,i)}/**
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
 */async function oR(t,e,n=!1){const{auth:r}=t;if(Me(r.app))return Promise.reject(it(r));const i="reauthenticate";try{const s=await dr(t,iR(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=pd(s.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),pn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&pt(r,"user-mismatch"),s}}/**
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
 */async function aR(t,e,n=!1){if(Me(t.app))return Promise.reject(it(t));const r="signIn",i=await iR(t,r,e),s=await pn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function _d(t,e){return aR(je(t),e)}async function lR(t,e){const n=te(t);return await yd(!1,n,e.providerId),By(n,e)}async function uR(t,e){return oR(te(t),e)}/**
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
 */async function lM(t,e){return wr(t,"POST","/v1/accounts:signInWithCustomToken",Ue(t,e))}/**
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
 */async function uM(t,e){if(Me(t.app))return Promise.reject(it(t));const n=je(t),r=await lM(n,{token:e,returnSecureToken:!0}),i=await pn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class _u{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?zy._fromServerResponse(e,n):"totpInfo"in n?$y._fromServerResponse(e,n):pt(e,"internal-error")}}class zy extends _u{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new zy(n)}}class $y extends _u{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new $y(n)}}/**
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
 */function vd(t,e,n){var r;W(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),W(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(W(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(W(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function qy(t){const e=je(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cM(t,e,n){const r=je(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&vd(r,i,n),await Kl(r,i,"getOobCode",W2)}async function hM(t,e,n){await nR(te(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qy(t),r})}async function dM(t,e){await z2(te(t),{oobCode:e})}async function cR(t,e){const n=te(t),r=await nR(n,{oobCode:e}),i=r.requestType;switch(W(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":W(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":W(r.mfaInfo,n,"internal-error");default:W(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=_u._fromServerResponse(je(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function fM(t,e){const{data:n}=await cR(te(t),e);return n.email}async function pM(t,e,n){if(Me(t.app))return Promise.reject(it(t));const r=je(t),o=await Kl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&qy(t),u}),a=await pn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function mM(t,e,n){return Me(t.app)?Promise.reject(it(t)):_d(te(t),Ti.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qy(t),r})}/**
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
 */async function gM(t,e,n){const r=je(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){W(a.handleCodeInApp,r,"argument-error"),a&&vd(r,o,a)}s(i,n),await Kl(r,i,"getOobCode",G2)}function yM(t,e){const n=gd.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function _M(t,e,n){if(Me(t.app))return Promise.reject(it(t));const r=te(t),i=Ti.credentialWithLink(e,n||Wl());return W(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),_d(r,i)}/**
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
 */async function vM(t,e){return Be(t,"POST","/v1/accounts:createAuthUri",Ue(t,e))}/**
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
 */async function wM(t,e){const n=My()?Wl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await vM(te(t),r);return i||[]}async function IM(t,e){const n=te(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&vd(n.auth,i,e);const{email:s}=await q2(n.auth,i);s!==t.email&&await t.reload()}async function EM(t,e,n){const r=te(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&vd(r.auth,s,n);const{email:o}=await K2(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function TM(t,e){return Be(t,"POST","/v1/accounts:update",e)}/**
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
 */async function SM(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=te(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await dr(r,TM(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function AM(t,e){const n=te(t);return Me(n.auth.app)?Promise.reject(it(n.auth)):hR(n,e,null)}function PM(t,e){return hR(te(t),null,e)}async function hR(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await dr(t,U2(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function RM(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=pd(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ho(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new kM(s,i);case"github.com":return new CM(s,i);case"google.com":return new xM(s,i);case"twitter.com":return new bM(s,i,t.screenName||null);case"custom":case"anonymous":return new ho(s,null);default:return new ho(s,r,i)}}class ho{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class dR extends ho{constructor(e,n,r,i){super(e,n,r),this.username=i}}class kM extends ho{constructor(e,n){super(e,"facebook.com",n)}}class CM extends dR{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class xM extends ho{constructor(e,n){super(e,"google.com",n)}}class bM extends dR{constructor(e,n,r){super(e,"twitter.com",n,r)}}function NM(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:RM(n)}/**
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
 */class Wi{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Wi("enroll",e,n)}static _fromMfaPendingCredential(e){return new Wi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Wi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Wi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Wy{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=je(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>_u._fromServerResponse(r,a));W(i.mfaPendingCredential,r,"internal-error");const o=Wi._fromMfaPendingCredential(i.mfaPendingCredential);return new Wy(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const d=await pn._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return W(n.user,r,"internal-error"),pn._forOperation(n.user,n.operationType,c);default:pt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function DM(t,e){var n;const r=te(t),i=e;return W(e.customData.operationType,r,"argument-error"),W((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Wy._fromError(r,i)}/**
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
 */function VM(t,e){return Be(t,"POST","/v2/accounts/mfaEnrollment:start",Ue(t,e))}function OM(t,e){return Be(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ue(t,e))}function LM(t,e){return Be(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ue(t,e))}class Gy{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>_u._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Gy(e)}async getSession(){return Wi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await dr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await dr(this.user,LM(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Lf=new WeakMap;function MM(t){const e=te(t);return Lf.has(e)||Lf.set(e,Gy._fromUser(e)),Lf.get(e)}const Ah="__sak";/**
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
 */class fR{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ah,"1"),this.storage.removeItem(Ah),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function FM(){const t=Ce();return jy(t)||Jo(t)}const jM=1e3,UM=10;class pR extends fR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=FM()&&T2(),this.fallbackToPolling=XP(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);E2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,UM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pR.type="LOCAL";const Ky=pR;/**
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
 */class mR extends fR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mR.type="SESSION";const ds=mR;/**
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
 */function BM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await BM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wd.receivers=[];/**
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
 */function vu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class zM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=vu("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ke(){return window}function $M(t){Ke().location.href=t}/**
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
 */function Hy(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function qM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GM(){return Hy()?self:null}/**
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
 */const gR="firebaseLocalStorageDb",KM=1,Ph="firebaseLocalStorage",yR="fbase_key";class wu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Id(t,e){return t.transaction([Ph],e?"readwrite":"readonly").objectStore(Ph)}function HM(){const t=indexedDB.deleteDatabase(gR);return new wu(t).toPromise()}function ym(){const t=indexedDB.open(gR,KM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ph,{keyPath:yR})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ph)?e(r):(r.close(),await HM(),e(await ym()))})})}async function rE(t,e,n){const r=Id(t,!0).put({[yR]:e,value:n});return new wu(r).toPromise()}async function QM(t,e){const n=Id(t,!1).get(e),r=await new wu(n).toPromise();return r===void 0?null:r.value}function iE(t,e){const n=Id(t,!0).delete(e);return new wu(n).toPromise()}const YM=800,JM=3;class _R{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ym(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>JM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wd._getInstance(GM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qM(),!this.activeServiceWorker)return;this.sender=new zM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ym();return await rE(e,Ah,"1"),await iE(e,Ah),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>iE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Id(i,!1).getAll();return new wu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_R.type="LOCAL";const Ql=_R;/**
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
 */function XM(t,e){return Be(t,"POST","/v2/accounts/mfaSignIn:start",Ue(t,e))}function ZM(t,e){return Be(t,"POST","/v2/accounts/mfaSignIn:finalize",Ue(t,e))}/**
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
 */const eF=500,tF=6e4,lc=1e12;class nF{constructor(e){this.auth=e,this.counter=lc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new rF(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||lc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||lc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||lc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class rF{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;W(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=iF(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},tF)},eF))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function iF(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Mf=eR("rcb"),sF=new mu(3e4,6e4);class oF{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ke().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return W(aF(n),e,"argument-error"),this.shouldResolveImmediately(n)&&HI(Ke().grecaptcha)?Promise.resolve(Ke().grecaptcha):new Promise((r,i)=>{const s=Ke().setTimeout(()=>{i(Je(e,"network-request-failed"))},sF.get());Ke()[Mf]=()=>{Ke().clearTimeout(s),delete Ke()[Mf];const a=Ke().grecaptcha;if(!a||!HI(a)){i(Je(e,"internal-error"));return}const u=a.render;a.render=(c,d)=>{const f=u(c,d);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${x2()}?${Bo({onload:Mf,render:"explicit",hl:n})}`;Uy(o).catch(()=>{clearTimeout(s),i(Je(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Ke().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function aF(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class lF{async load(e){return new nF(e)}clearedOneInstance(){}}/**
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
 */const vR="recaptcha",uF={theme:"light",type:"image"};let cF=class{constructor(e,n,r=Object.assign({},uF)){this.parameters=r,this.type=vR,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=je(e),this.isInvisible=this.parameters.size==="invisible",W(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;W(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new lF:new oF,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){W(!this.parameters.sitekey,this.auth,"argument-error"),W(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),W(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ke()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){W(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){W(My()&&!Hy(),this.auth,"internal-error"),await hF(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await u2(this.auth);W(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return W(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function hF(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Qy{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Yi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function dF(t,e,n){if(Me(t.app))return Promise.reject(it(t));const r=je(t),i=await Ed(r,e,te(n));return new Qy(i,s=>_d(r,s))}async function fF(t,e,n){const r=te(t);await yd(!1,r,"phone");const i=await Ed(r.auth,e,te(n));return new Qy(i,s=>lR(r,s))}async function pF(t,e,n){const r=te(t);if(Me(r.auth.app))return Promise.reject(it(r.auth));const i=await Ed(r.auth,e,te(n));return new Qy(i,s=>uR(r,s))}async function Ed(t,e,n){var r;const i=await n.verify();try{W(typeof i=="string",t,"argument-error"),W(n.type===vR,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return W(o.type==="enroll",t,"internal-error"),(await VM(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{W(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return W(a,t,"missing-multi-factor-info"),(await XM(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await J2(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function mF(t,e){const n=te(t);if(Me(n.auth.app))return Promise.reject(it(n.auth));await By(n,e)}/**
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
 */let fs=class Nc{constructor(e){this.providerId=Nc.PROVIDER_ID,this.auth=je(e)}verifyPhoneNumber(e,n){return Ed(this.auth,e,te(n))}static credential(e,n){return Yi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Nc.credentialFromTaggedObject(n)}static credentialFromError(e){return Nc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Yi._fromTokenResponse(n,r):null}};fs.PROVIDER_ID="phone";fs.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function As(t,e){return e?Jt(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yy extends Xo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return sr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gF(t){return aR(t.auth,new Yy(t),t.bypassAuthState)}function yF(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),oR(n,new Yy(t),t.bypassAuthState)}async function _F(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),By(n,new Yy(t),t.bypassAuthState)}/**
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
 */class wR{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gF;case"linkViaPopup":case"linkViaRedirect":return _F;case"reauthViaPopup":case"reauthViaRedirect":return yF;default:pt(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vF=new mu(2e3,1e4);async function wF(t,e,n){if(Me(t.app))return Promise.reject(Je(t,"operation-not-supported-in-this-environment"));const r=je(t);Yo(t,e,Ir);const i=As(r,n);return new nr(r,"signInViaPopup",e,i).executeNotNull()}async function IF(t,e,n){const r=te(t);if(Me(r.auth.app))return Promise.reject(Je(r.auth,"operation-not-supported-in-this-environment"));Yo(r.auth,e,Ir);const i=As(r.auth,n);return new nr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function EF(t,e,n){const r=te(t);Yo(r.auth,e,Ir);const i=As(r.auth,n);return new nr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class nr extends wR{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=vu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vF.get())};e()}}nr.currentPopupAction=null;/**
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
 */const TF="pendingRedirect",al=new Map;class SF extends wR{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=al.get(this.auth._key());if(!e){try{const r=await AF(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}al.set(this.auth._key(),e)}return this.bypassAuthState||al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AF(t,e){const n=ER(e),r=IR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Jy(t,e){return IR(t)._set(ER(e),"true")}function PF(){al.clear()}function Xy(t,e){al.set(t._key(),e)}function IR(t){return Jt(t._redirectPersistence)}function ER(t){return Qi(TF,t.config.apiKey,t.name)}/**
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
 */function RF(t,e,n){return kF(t,e,n)}async function kF(t,e,n){if(Me(t.app))return Promise.reject(it(t));const r=je(t);Yo(t,e,Ir),await r._initializationPromise;const i=As(r,n);return await Jy(i,r),i._openRedirect(r,e,"signInViaRedirect")}function CF(t,e,n){return xF(t,e,n)}async function xF(t,e,n){const r=te(t);if(Yo(r.auth,e,Ir),Me(r.auth.app))return Promise.reject(it(r.auth));await r.auth._initializationPromise;const i=As(r.auth,n);await Jy(i,r.auth);const s=await TR(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function bF(t,e,n){return NF(t,e,n)}async function NF(t,e,n){const r=te(t);Yo(r.auth,e,Ir),await r.auth._initializationPromise;const i=As(r.auth,n);await yd(!1,r,e.providerId),await Jy(i,r.auth);const s=await TR(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function DF(t,e){return await je(t)._initializationPromise,Td(t,e,!1)}async function Td(t,e,n=!1){if(Me(t.app))return Promise.reject(it(t));const r=je(t),i=As(r,e),o=await new SF(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function TR(t){const e=vu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const VF=10*60*1e3;class SR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OF(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!AR(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Je(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VF&&this.cachedEventUids.clear(),this.cachedEventUids.has(sE(e))}saveEventToCache(e){this.cachedEventUids.add(sE(e)),this.lastProcessedEventTime=Date.now()}}function sE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function AR({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OF(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return AR(t);default:return!1}}/**
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
 */async function PR(t,e={}){return Be(t,"GET","/v1/projects",e)}/**
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
 */const LF=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MF=/^https?/;async function FF(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PR(t);for(const n of e)try{if(jF(n))return}catch{}pt(t,"unauthorized-domain")}function jF(t){const e=Wl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MF.test(n))return!1;if(LF.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const UF=new mu(3e4,6e4);function oE(){const t=Ke().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BF(t){return new Promise((e,n)=>{var r,i,s;function o(){oE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oE(),n(Je(t,"network-request-failed"))},timeout:UF.get()})}if(!((i=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ke().gapi)===null||s===void 0)&&s.load)o();else{const a=eR("iframefcb");return Ke()[a]=()=>{gapi.load?o():n(Je(t,"network-request-failed"))},Uy(`${N2()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Dc=null,e})}let Dc=null;function zF(t){return Dc=Dc||BF(t),Dc}/**
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
 */const $F=new mu(5e3,15e3),qF="__/auth/iframe",WF="emulator/auth/iframe",GF={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KF=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HF(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fy(e,WF):`https://${t.config.authDomain}/${qF}`,r={apiKey:e.apiKey,appName:t.name,v:_i},i=KF.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Bo(r).slice(1)}`}async function QF(t){const e=await zF(t),n=Ke().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:HF(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GF,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Je(t,"network-request-failed"),a=Ke().setTimeout(()=>{s(o)},$F.get());function u(){Ke().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const YF={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JF=500,XF=600,ZF="_blank",ej="http://localhost";class aE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tj(t,e,n,r=JF,i=XF){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},YF),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ce().toLowerCase();n&&(a=HP(c)?ZF:n),KP(c)&&(e=e||ej,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[v,R])=>`${g}${v}=${R},`,"");if(I2(c)&&a!=="_self")return nj(e||"",a),new aE(null);const f=window.open(e||"",a,d);W(f,t,"popup-blocked");try{f.focus()}catch{}return new aE(f)}function nj(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const rj="__/auth/handler",ij="emulator/auth/handler",sj=encodeURIComponent("fac");async function _m(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_i,eventId:i};if(e instanceof Ir){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",EN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof Zo){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${sj}=${encodeURIComponent(u)}`:"";return`${oj(t)}?${Bo(a).slice(1)}${c}`}function oj({config:t}){return t.emulator?Fy(t,ij):`https://${t.authDomain}/${rj}`}/**
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
 */const Ff="webStorageSupport";class aj{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ds,this._completeRedirectFn=Td,this._overrideRedirectResult=Xy}async _openPopup(e,n,r,i){var s;An((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await _m(e,n,r,Wl(),i);return tj(e,o,vu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await _m(e,n,r,Wl(),i);return $M(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(An(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await QF(e),r=new SR(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ff,{type:Ff},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ff];o!==void 0&&n(!!o),pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FF(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return XP()||jy()||Jo()}}const lj=aj;class uj{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Ln("unexpected MultiFactorSessionType")}}}class Zy extends uj{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Zy(e)}_finalizeEnroll(e,n,r){return OM(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return ZM(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class RR{constructor(){}static assertion(e){return Zy._fromCredential(e)}}RR.FACTOR_ID="phone";var lE="@firebase/auth",uE="1.7.4";/**
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
 */class cj{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hj(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dj(t){ii(new Bn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ZP(t)},c=new k2(r,i,s,u);return L2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ii(new Bn("auth-internal",e=>{const n=je(e.getProvider("auth").getImmediate());return(r=>new cj(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(lE,uE,hj(t)),En(lE,uE,"esm2017")}/**
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
 */const fj=5*60;pN("authIdTokenMaxAge");function pj(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}C2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Je("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",pj().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dj("Browser");/**
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
 */function ps(){return window}/**
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
 */const mj=2e3;async function gj(t,e,n){var r;const{BuildInfo:i}=ps();An(e.sessionId,"AuthEvent did not contain a session ID");const s=await Ij(e.sessionId),o={};return Jo()?o.ibi=i.packageName:gu()?o.apn=i.packageName:pt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,_m(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function yj(t){const{BuildInfo:e}=ps(),n={};Jo()?n.iosBundleId=e.packageName:gu()?n.androidPackageName=e.packageName:pt(t,"operation-not-supported-in-this-environment"),await PR(t,n)}function _j(t){const{cordova:e}=ps();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,w2()?"_blank":"_system","location=yes"),n(i)})})}async function vj(t,e,n){const{cordova:r}=ps();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var f;s();const g=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof g=="function"&&g(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(Je(t,"redirect-cancelled-by-user"))},mj))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(u),document.addEventListener("resume",c,!1),gu()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function wj(t){var e,n,r,i,s,o,a,u,c,d;const f=ps();W(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),W(typeof((n=f==null?void 0:f.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),W(typeof((s=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),W(typeof((u=(a=(o=f==null?void 0:f.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),W(typeof((d=(c=f==null?void 0:f.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Ij(t){const e=Ej(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function Ej(t){if(An(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const Tj=20;class Sj extends SR{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Aj(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:kj(),postBody:null,tenantId:t.tenantId,error:Je(t,"no-auth-event")}}function Pj(t,e){return vm()._set(wm(t),e)}async function cE(t){const e=await vm()._get(wm(t));return e&&await vm()._remove(wm(t)),e}function Rj(t,e){var n,r;const i=xj(e);if(i.includes("/__/auth/callback")){const s=Vc(i),o=s.firebaseError?Cj(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?Je(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function kj(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<Tj;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function vm(){return Jt(Ky)}function wm(t){return Qi("authEvent",t.config.apiKey,t.name)}function Cj(t){try{return JSON.parse(t)}catch{return null}}function xj(t){const e=Vc(t),n=e.link?decodeURIComponent(e.link):void 0,r=Vc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Vc(i).link||i||r||n||t}function Vc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Zs(n.join("?"))}/**
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
 */const bj=500;class Nj{constructor(){this._redirectPersistence=ds,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Td,this._overrideRedirectResult=Xy}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new Sj(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){pt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){wj(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),PF(),await this._originValidation(e);const o=Aj(e,r,i);await Pj(e,o);const a=await gj(e,o,n),u=await _j(a);return vj(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yj(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ps(),o=setTimeout(async()=>{await cE(e),n.onEvent(hE())},bj),a=async d=>{clearTimeout(o);const f=await cE(e);let g=null;f&&(d!=null&&d.url)&&(g=Rj(f,d.url)),n.onEvent(g||hE())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,c=`${s.packageName.toLowerCase()}://`;ps().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(c)&&a({url:d}),typeof u=="function")try{u(d)}catch(f){console.error(f)}}}}const Dj=Nj;function hE(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Je("no-auth-event")}}/**
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
 */function Vj(t,e){je(t)._logFramework(e)}var Oj="@firebase/auth-compat",Lj="0.5.9";/**
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
 */const Mj=1e3;function ll(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function Fj(){return ll()==="http:"||ll()==="https:"}function kR(t=Ce()){return!!((ll()==="file:"||ll()==="ionic:"||ll()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function jj(){return kg()||Rg()}function Uj(){return Q0()&&(document==null?void 0:document.documentMode)===11}function Bj(t=Ce()){return/Edge\/\d+/.test(t)}function zj(t=Ce()){return Uj()||Bj(t)}function CR(){try{const t=self.localStorage,e=vu();if(t)return t.setItem(e,"1"),t.removeItem(e),zj()?Cl():!0}catch{return e_()&&Cl()}return!1}function e_(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function jf(){return(Fj()||H0()||kR())&&!jj()&&CR()&&!e_()}function xR(){return kR()&&typeof document<"u"}async function $j(){return xR()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},Mj);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function qj(){return typeof window<"u"?window:null}/**
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
 */const Qt={LOCAL:"local",NONE:"none",SESSION:"session"},ba=W,bR="persistence";function Wj(t,e){if(ba(Object.values(Qt).includes(e),t,"invalid-persistence-type"),kg()){ba(e!==Qt.SESSION,t,"unsupported-persistence-type");return}if(Rg()){ba(e===Qt.NONE,t,"unsupported-persistence-type");return}if(e_()){ba(e===Qt.NONE||e===Qt.LOCAL&&Cl(),t,"unsupported-persistence-type");return}ba(e===Qt.NONE||CR(),t,"unsupported-persistence-type")}async function Im(t){await t._initializationPromise;const e=NR(),n=Qi(bR,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function Gj(t,e){const n=NR();if(!n)return[];const r=Qi(bR,t,e);switch(n.getItem(r)){case Qt.NONE:return[Oo];case Qt.LOCAL:return[Ql,ds];case Qt.SESSION:return[ds];default:return[]}}function NR(){var t;try{return((t=qj())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const Kj=W;class zr{constructor(){this.browserResolver=Jt(lj),this.cordovaResolver=Jt(Dj),this.underlyingResolver=null,this._redirectPersistence=ds,this._completeRedirectFn=Td,this._overrideRedirectResult=Xy}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return xR()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Kj(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await $j();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function DR(t){return t.unwrap()}function Hj(t){return t.wrapped()}/**
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
 */function Qj(t){return VR(t)}function Yj(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new Jj(t,DM(t,e))}else if(r){const i=VR(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function VR(t){const{_tokenResponse:e}=t instanceof Ct?t.customData:t;if(!e)return null;if(!(t instanceof Ct)&&"temporaryProof"in e&&"phoneNumber"in e)return fs.credentialFromResult(t);const n=e.providerId;if(!n||n===xa.PASSWORD)return null;let r;switch(n){case xa.GOOGLE:r=bn;break;case xa.FACEBOOK:r=xn;break;case xa.GITHUB:r=Nn;break;case xa.TWITTER:r=Dn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Lo._create(n,a):qn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new co(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof Ct?r.credentialFromError(t):r.credentialFromResult(t)}function Lt(t,e){return e.catch(n=>{throw n instanceof Ct&&Yj(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:Qj(n),additionalUserInfo:NM(n),user:rr.getOrCreate(i)}})}async function Em(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Lt(t,n.confirm(r))}}class Jj{constructor(e,n){this.resolver=n,this.auth=Hj(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Lt(DR(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class rr{constructor(e){this._delegate=e,this.multiFactor=MM(e)}static getOrCreate(e){return rr.USER_MAP.has(e)||rr.USER_MAP.set(e,new rr(e)),rr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Lt(this.auth,lR(this._delegate,e))}async linkWithPhoneNumber(e,n){return Em(this.auth,fF(this._delegate,e,n))}async linkWithPopup(e){return Lt(this.auth,EF(this._delegate,e,zr))}async linkWithRedirect(e){return await Im(je(this.auth)),bF(this._delegate,e,zr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Lt(this.auth,uR(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Em(this.auth,pF(this._delegate,e,n))}reauthenticateWithPopup(e){return Lt(this.auth,IF(this._delegate,e,zr))}async reauthenticateWithRedirect(e){return await Im(je(this.auth)),CF(this._delegate,e,zr)}sendEmailVerification(e){return IM(this._delegate,e)}async unlink(e){return await aM(this._delegate,e),this}updateEmail(e){return AM(this._delegate,e)}updatePassword(e){return PM(this._delegate,e)}updatePhoneNumber(e){return mF(this._delegate,e)}updateProfile(e){return SM(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return EM(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}rr.USER_MAP=new WeakMap;/**
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
 */const Na=W;class Tm{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Na(r,"invalid-api-key",{appName:e.name}),Na(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?zr:void 0;this._delegate=n.initialize({options:{persistence:Xj(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(ZL),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?rr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){M2(this._delegate,e,n)}applyActionCode(e){return dM(this._delegate,e)}checkActionCode(e){return cR(this._delegate,e)}confirmPasswordReset(e,n){return hM(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Lt(this._delegate,pM(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return wM(this._delegate,e)}isSignInWithEmailLink(e){return yM(this._delegate,e)}async getRedirectResult(){Na(jf(),this._delegate,"operation-not-supported-in-this-environment");const e=await DF(this._delegate,zr);return e?Lt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Vj(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=dE(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=dE(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return gM(this._delegate,e,n)}sendPasswordResetEmail(e,n){return cM(this._delegate,e,n||void 0)}async setPersistence(e){Wj(this._delegate,e);let n;switch(e){case Qt.SESSION:n=ds;break;case Qt.LOCAL:n=await Jt(Ql)._isAvailable()?Ql:Ky;break;case Qt.NONE:n=Oo;break;default:return pt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Lt(this._delegate,oM(this._delegate))}signInWithCredential(e){return Lt(this._delegate,_d(this._delegate,e))}signInWithCustomToken(e){return Lt(this._delegate,uM(this._delegate,e))}signInWithEmailAndPassword(e,n){return Lt(this._delegate,mM(this._delegate,e,n))}signInWithEmailLink(e,n){return Lt(this._delegate,_M(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Em(this._delegate,dF(this._delegate,e,n))}async signInWithPopup(e){return Na(jf(),this._delegate,"operation-not-supported-in-this-environment"),Lt(this._delegate,wF(this._delegate,e,zr))}async signInWithRedirect(e){return Na(jf(),this._delegate,"operation-not-supported-in-this-environment"),await Im(this._delegate),RF(this._delegate,e,zr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return fM(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Tm.Persistence=Qt;function dE(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&rr.getOrCreate(o)),error:e,complete:n}}function Xj(t,e){const n=Gj(t,e);if(typeof self<"u"&&!n.includes(Ql)&&n.push(Ql),typeof window<"u")for(const r of[Ky,ds])n.includes(r)||n.push(r);return n.includes(Oo)||n.push(Oo),n}/**
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
 */class t_{constructor(){this.providerId="phone",this._delegate=new fs(DR(ln.auth()))}static credential(e,n){return fs.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}t_.PHONE_SIGN_IN_METHOD=fs.PHONE_SIGN_IN_METHOD;t_.PROVIDER_ID=fs.PROVIDER_ID;/**
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
 */const Zj=W;class eU{constructor(e,n,r=ln.app()){var i;Zj((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new cF(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const tU="auth-compat";function nU(t){t.INTERNAL.registerComponent(new Bn(tU,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Tm(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Os.EMAIL_SIGNIN,PASSWORD_RESET:Os.PASSWORD_RESET,RECOVER_EMAIL:Os.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Os.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Os.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Os.VERIFY_EMAIL}},EmailAuthProvider:Ti,FacebookAuthProvider:xn,GithubAuthProvider:Nn,GoogleAuthProvider:bn,OAuthProvider:co,SAMLAuthProvider:Th,PhoneAuthProvider:t_,PhoneMultiFactorGenerator:RR,RecaptchaVerifier:eU,TwitterAuthProvider:Dn,Auth:Tm,AuthCredential:Xo,Error:Ct}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(Oj,Lj)}nU(ln);const OR=ln,rU="4r@admin.com";let uc=null;function LR(){if(uc)return uc;const t=window.FIREBASE_CONFIG;if(!t)throw new Error("firebase-config.js missing hai");return uc=ln.apps&&ln.apps.length?ln.app():ln.initializeApp(t),uc}let Uf=null;function MR(){return Uf||(Uf=ln.firestore(LR())),Uf}let Bf=null;function n_(){return Bf||(Bf=ln.auth(LR())),Bf}let Sm="";function iU(t){const e=t&&t.code||"",n=t&&t.message||String(t);return e==="permission-denied"||/permission/i.test(n)?"Firestore rules me allowed nahi hai (firestore.rules update karein)":e==="unavailable"||/network|offline|fetch/i.test(n)?"Internet nahi hai. Connection check karein.":/exceed|too large|1 ?MiB|1048576/i.test(n)?"Document 1MB se bada ho gaya":n}function rn(t){return Sm=iU(t),Sm}function zf(){return Sm}function fE(t,e){switch(t){case"auth/configuration-not-found":case"auth/operation-not-allowed":return'Login abhi band hai. Firebase Console > Authentication > Sign-in method me "Email/Password" ON karke wapas aayein.';case"auth/user-not-found":case"auth/wrong-password":case"auth/invalid-credential":case"auth/invalid-login-credentials":return"Email ya password galat hai.";case"auth/email-already-in-use":return"Ye email pehle se registered hai. Apna password daalein.";case"auth/invalid-email":return"Email sahi nahi hai.";case"auth/weak-password":return"Password kam se kam 6 characters ka rakhein.";case"auth/too-many-requests":return"Bahut zyada try kiye gaye. Thodi der baad koshish karein.";case"auth/network-request-failed":return"Internet nahi hai. Connection check karein.";case"auth/api-key-not-valid":return"Firebase API key sahi nahi hai (firebase-config.js dekhein)."}return e||"Login nahi hua. Dobara koshish karein."}function FR(t){try{return t.setPersistence(OR.auth.Auth.Persistence.LOCAL).then(()=>!0).catch(()=>!1)}catch{return Promise.resolve(!1)}}function sU(t,e){const n=n_();return FR(n).then(()=>n.signInWithEmailAndPassword(t,e)).catch(r=>{const i=r&&r.code,s=r&&r.message?" ("+r.message+")":"";if(i==="auth/user-not-found"||i==="auth/invalid-credential"||i==="auth/wrong-password")return n.createUserWithEmailAndPassword(t,e).then(o=>({user:o.user,created:!0})).catch(o=>{throw new Error(fE(o&&o.code,o&&o.message)+(o&&o.code?" ["+o.code+"]":""))});throw new Error(fE(i,r&&r.message)+s)})}function oU(){return n_().signOut()}function aU(t){const e=n_();return FR(e),e.onAuthStateChanged(t)}const jR=O.createContext({user:null,ready:!1,error:""});function lU({children:t}){const[e,n]=O.useState(null),[r,i]=O.useState(!1),[s,o]=O.useState("");return O.useEffect(()=>{let a=!0,u=()=>{};try{u=aU(c=>{a&&(n(c||null),i(!0))})}catch(c){o(c&&c.message?c.message:String(c)),i(!0)}return()=>{a=!1,u&&u()}},[]),m.jsx(jR.Provider,{value:{user:e,ready:r,error:s},children:t})}function UR(){return O.useContext(jR)}const BR=O.createContext(()=>{});function Sd(){return O.useContext(BR)}function uU({children:t}){const[e,n]=O.useState(""),[r,i]=O.useState(!1),[s,o]=O.useState(!1),a=O.useRef(null),u=O.useCallback((c,d)=>{n(c),i(!!d),o(!0),clearTimeout(a.current),a.current=setTimeout(()=>o(!1),2200)},[]);return m.jsxs(BR.Provider,{value:u,children:[t,m.jsx("div",{className:"adm-toast"+(r?" adm-toast--err":"")+(s?" is-show":""),"aria-live":"polite",children:e})]})}const zR="4rbet_ui",Ad={pending:"Pending",previewing:"Previewing",successful:"Successful"},$f="4R Support";function ji(){try{const t=localStorage.getItem(zR),e=t?JSON.parse(t):{};return{splash:e.splash!==!1,showPassword:e.showPassword===!0}}catch{return{splash:!0,showPassword:!1}}}function pE(t){const e={splash:t.splash!==void 0?!!t.splash:ji().splash,showPassword:t.showPassword!==void 0?!!t.showPassword:ji().showPassword};try{return localStorage.setItem(zR,JSON.stringify(e)),!0}catch{return!1}}function Da(){try{let t=0;return["4rbet_complaints","4rbet_telegram","4rbet_ui","4rbet_tg_queue"].forEach(e=>{const n=localStorage.getItem(e);n&&(t+=n.length+e.length)}),(t/1024).toFixed(1)}catch{return"0"}}function ul(t){return Ad[t&&t.status]?t.status:"pending"}function cU(t){const e=new Date(t);if(isNaN(e))return!1;const n=new Date;return e.getFullYear()===n.getFullYear()&&e.getMonth()===n.getMonth()&&e.getDate()===n.getDate()}function hU(t){return{total:t.length,today:t.filter(e=>cU(e.submittedAt)).length,pending:t.filter(e=>ul(e)==="pending").length,preview:t.filter(e=>ul(e)==="previewing").length,success:t.filter(e=>ul(e)==="successful").length}}function Rh(t){return t<10?"0"+t:""+t}function $R(t){const e=new Date(t);if(isNaN(e))return"-";const n=e.getHours(),r=n%12||12;return e.getDate()+"/"+Rh(e.getMonth()+1)+"/"+e.getFullYear()+", "+r+":"+Rh(e.getMinutes())+" "+(n>=12?"PM":"AM")}function r_(t){const e=new Date(t);if(isNaN(e))return"-";const n=e.getHours(),r=n%12||12;return e.getDate()+"/"+Rh(e.getMonth()+1)+"/"+e.getFullYear()+" · "+r+":"+Rh(e.getMinutes())+" "+(n>=12?"PM":"AM")}function dU(t){return"Guest #"+String(t||"").slice(0,4).toUpperCase()}function qR(t){return t&&t.userName?t.userName:dU(t&&t.id)}const fU=[{key:"userName",label:"User Name"},{key:"mobile",label:"Mobile Number"},{key:"email",label:"Email ID"},{key:"password",label:"Game Account Password",secret:!0},{key:"problem",label:"Select Your Problem"},{key:"amount",label:"Amount"},{key:"verifyEmail",label:"Email To Verify"},{key:"docType",label:"Document Type"},{key:"docNo",label:"Document No."},{key:"accountNo",label:"Account Number"},{key:"utr",label:"Transaction / UTR"},{key:"detail",label:"Detail"}],WR="4rbet_complaints",Iu=window.FIREBASE_COLLECTION||"complaints";function fr(){try{const t=localStorage.getItem(WR);return t?JSON.parse(t):[]}catch{return[]}}function ms(t){try{return localStorage.setItem(WR,JSON.stringify(t)),!0}catch{return!1}}function pU(t,e){const n=fr();return n.forEach(r=>{r.id===t&&Object.assign(r,e)}),ms(n),n}function mU(t){const e=fr().filter(n=>n.id!==t);return ms(e),e}function Yl(){try{window.dispatchEvent(new CustomEvent("4r-sync"))}catch{}}function ea(){try{return MR()}catch(t){return rn(t),null}}function gU(){return!!ea()}function Am(){const t=ea();return t?t.collection(Iu).orderBy("submittedAt","desc").get().then(e=>{const n=e.docs.map(r=>{const i=r.data()||{};return i.id=i.id||r.id,i});return ms(n),Yl(),n}).catch(e=>(rn(e),fr())):Promise.resolve(fr())}function yU(t,e,n){const r=new Date().toISOString();pU(t,{status:e,statusAt:r}),Yl();const i=ea();return i?i.collection(Iu).doc(t).update({status:e,statusAt:r}).then(()=>({ok:!0,offline:!1})).catch(s=>(rn(s),{ok:!1,offline:!0,error:s.message})):Promise.resolve({ok:!1,offline:!0})}function _U(t){mU(t),Yl();const e=ea();return e?e.collection(Iu).doc(t).delete().then(()=>({ok:!0,offline:!1})).catch(n=>(rn(n),{ok:!1,offline:!0,error:n.message})):Promise.resolve({ok:!1,offline:!0})}function vU(){const t=ea();return t?t.collection(Iu).get().then(e=>{const n=t.batch();return e.docs.forEach(r=>n.delete(r.ref)),n.commit()}).then(()=>(ms([]),Yl(),{ok:!0,offline:!1})).catch(e=>(rn(e),{ok:!1,offline:!0,error:e.message})):(ms([]),Yl(),Promise.resolve({ok:!1,offline:!0}))}function wU(t){const e=ea();if(!e)return()=>{};try{return e.collection(Iu).orderBy("submittedAt","desc").onSnapshot(n=>{const r=n.docs.map(i=>{const s=i.data()||{};return s.id=s.id||i.id,s});ms(r),t(r,!0)},n=>{rn(n),t(fr(),!1)})}catch{return()=>{}}}function i_(){const[t,e]=O.useState(fr),[n,r]=O.useState(!1),i=O.useCallback(()=>Am().then(s=>(e(s),r(!0),s)),[]);return O.useEffect(()=>{let s=!0;const o=wU(c=>{s&&e(c)});i();const a=()=>{s&&e(fr())},u=()=>{i()};return window.addEventListener("4r-sync",a),window.addEventListener("focus",u),()=>{s=!1,o&&o(),window.removeEventListener("4r-sync",a),window.removeEventListener("focus",u)}},[i]),{list:t,ready:n,refresh:i}}const IU=window.FIREBASE_CHAT_COLLECTION||"chats",EU="messages",mE=700*1024,TU=350*1024;function Pd(){try{return MR()}catch(t){return rn(t),null}}function SU(){return!!Pd()}function GR(){const t=Pd();return t?t.collection(IU):null}function ta(t){const e=GR();return e?e.doc(t):null}function s_(t){const e=ta(t);return e?e.collection(EU):null}function AU(t){const e=ta(t);return e?e.get().then(n=>{if(!n.exists)return{ok:!0,offline:!1,chat:null};const r=n.data()||{};return r.id=r.id||n.id,{ok:!0,offline:!1,chat:r}}).catch(n=>(rn(n),{ok:!1,offline:!0,chat:null})):Promise.resolve({ok:!1,offline:!0,chat:null})}function PU(t,e){const n=ta(t);return n?n.onSnapshot(r=>{if(!r.exists){e(null,!0);return}const i=r.data()||{};i.id=i.id||r.id,e(i,!0)},r=>{rn(r),e(null,!1)}):(e(null,!1),()=>{})}function KR(t){const e=GR();return e?e.orderBy("updatedAt","desc").limit(200).onSnapshot(n=>{const r=n.docs.map(i=>{const s=i.data()||{};return s.id=s.id||i.id,s});t(r,!0)},n=>{rn(n),t([],!1)}):(t([],!1),()=>{})}function RU(t,e){const n=s_(t);return n?n.orderBy("at","asc").limit(500).onSnapshot(r=>{const i=r.docs.map(s=>{const o=s.data()||{};return o.id=s.id,o});e(i,!0)},r=>{rn(r),e([],!1)}):(e([],!1),()=>{})}function kU(t){return t.text?String(t.text).slice(0,90):t.image?"Photo":t.fileName?"File: "+t.fileName:""}function CU(t,e){const n=Pd(),r=ta(t),i=s_(t);if(!n||!r||!i)return Promise.resolve({ok:!1,offline:!0});const s=e.who==="admin"?"admin":"user",o=new Date().toISOString(),a={who:s,text:String(e.text||"").slice(0,4e3),at:o,name:e.name||(s==="admin"?"4R Support":"")};e.image&&(a.image=e.image),e.fileName&&(a.fileName=String(e.fileName).slice(0,120)),e.fileData&&(a.fileData=e.fileData);const u={id:t,updatedAt:o,lastText:kU(a),lastWho:s};try{const d=OR.firestore.FieldValue.increment(1);s==="user"?u.unreadAdmin=d:u.unreadUser=d}catch{s==="user"?u.unreadAdmin=1:u.unreadUser=1}const c=n.batch();return c.set(i.doc(),a),c.set(r,u,{merge:!0}),c.commit().then(()=>({ok:!0,offline:!1})).catch(d=>(rn(d),{ok:!1,offline:!0,error:d.message}))}function xU(t,e){const n=ta(t);if(!n)return Promise.resolve(!1);const r={};return r.unreadAdmin=0,n.set(r,{merge:!0}).then(()=>!0).catch(()=>!1)}function bU(t){const e=Pd(),n=ta(t),r=s_(t);return!e||!n||!r?Promise.resolve({ok:!1,offline:!0}):r.limit(400).get().then(i=>{const s=e.batch();return i.docs.forEach(o=>s.delete(o.ref)),s.delete(n),s.commit()}).then(()=>({ok:!0})).catch(i=>(rn(i),{ok:!1,error:i.message}))}function NU(t){return new Promise((e,n)=>{if(!t||!/^image\//.test(t.type||"")){n(new Error("Sirf image file chunein."));return}const r=new FileReader;r.onerror=()=>n(new Error("File padhi nahi ja saki.")),r.onload=()=>{const i=String(r.result||""),s=new Image;s.onerror=()=>e({dataUrl:i,name:t.name}),s.onload=()=>{const a=Math.min(1,1e3/Math.max(s.width,s.height)),u=Math.max(1,Math.round(s.width*a)),c=Math.max(1,Math.round(s.height*a)),d=document.createElement("canvas");d.width=u,d.height=c,d.getContext("2d").drawImage(s,0,0,u,c);let f=i;try{f=d.toDataURL("image/jpeg",.72)}catch{f=i}if(f.length>mE)try{f=d.toDataURL("image/jpeg",.5)}catch{}if(f.length>mE){n(new Error("Image bahut badi hai, chhoti image chunein."));return}e({dataUrl:f,name:t.name})},s.src=i},r.readAsDataURL(t)})}function DU(t){return new Promise((e,n)=>{if(!t){n(new Error("File chunein."));return}if(t.size>TU){n(new Error("File 350KB se badi hai. Chhoti file bhejein."));return}const r=new FileReader;r.onerror=()=>n(new Error("File padhi nahi ja saki.")),r.onload=()=>{e({dataUrl:String(r.result||""),name:t.name})},r.readAsDataURL(t)})}const Pm=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||22,height:t.size||22,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M22 12h-6l-2 3h-4l-2-3H2"}),m.jsx("path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z"})]}),VU=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||22,height:t.size||22,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M12 2v10l3 2"}),m.jsx("circle",{cx:"12",cy:"12",r:"9.5"})]}),gE=t=>m.jsx("svg",{viewBox:"0 0 24 24",width:t.size||22,height:t.size||22,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:m.jsx("path",{d:"M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.6-.8L3 21l1.9-5.2a8.4 8.4 0 0 1-.9-3.8 8.4 8.4 0 0 1 8.5-8.4 8.4 8.4 0 0 1 8.5 7.9Z"})}),OU=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||22,height:t.size||22,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"}),m.jsx("path",{d:"M13.7 21a2 2 0 0 1-3.4 0"})]}),HR=t=>m.jsx("svg",{viewBox:"0 0 24 24",width:t.size||17,height:t.size||17,fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:m.jsx("path",{d:"M9 18l6-6-6-6"})}),o_=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||16,height:t.size||16,fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M19 12H5"}),m.jsx("path",{d:"m12 19-7-7 7-7"})]}),QR=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||16,height:t.size||16,fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"}),m.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),LU=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||16,height:t.size||16,fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("rect",{x:"4",y:"10.5",width:"16",height:"10.5",rx:"2"}),m.jsx("path",{d:"M8 10.5V7a4 4 0 0 1 8 0v3.5"})]}),MU=t=>m.jsx("svg",{viewBox:"0 0 24 24",width:t.size||18,height:t.size||18,fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:m.jsx("path",{d:"M20 6 9 17l-5-5"})}),FU=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||26,height:t.size||26,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M12 9v4"}),m.jsx("path",{d:"M12 17h.01"}),m.jsx("path",{d:"M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"})]}),a_=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||18,height:t.size||18,fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),m.jsx("path",{d:"M7 10l5 5 5-5"}),m.jsx("path",{d:"M12 15V3"})]}),YR=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||18,height:t.size||18,fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",children:[m.jsx("path",{d:"M18 6 6 18"}),m.jsx("path",{d:"m6 6 12 12"})]}),jU=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||17,height:t.size||17,fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M3 6h18"}),m.jsx("path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),m.jsx("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),m.jsx("path",{d:"M10 11v6"}),m.jsx("path",{d:"M14 11v6"})]}),UU=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||17,height:t.size||17,fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2.5"}),m.jsx("circle",{cx:"8.5",cy:"9.5",r:"1.6"}),m.jsx("path",{d:"M21 16l-5-5-6.5 6.5"})]}),yE=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||17,height:t.size||17,fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z"}),m.jsx("path",{d:"M14 2.5V7a.5.5 0 0 0 .5.5H19"})]}),BU=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||20,height:t.size||20,fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M12 5v14"}),m.jsx("path",{d:"m19 12-7 7-7-7"})]}),zU=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||16,height:t.size||16,fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("rect",{x:"6",y:"2",width:"12",height:"20",rx:"2.5"}),m.jsx("path",{d:"M11 18h2"})]}),$U="./";function qU(){return m.jsxs("div",{className:"adm-desktop-note",children:[m.jsx(zU,{}),"Admin Panel mobile ke liye design kiya gaya hai — best result ke liye phone par kholein."]})}function WU(){return m.jsx("footer",{className:"site-footer",children:m.jsxs("p",{children:["© ",new Date().getFullYear()," 4R BET — All Rights Reserved"]})})}function GU({simple:t}){const[e,n]=O.useState(!1),[r,i]=O.useState(0),s=O.useRef(null),o=yi(),a=gr(),u=o.pathname;O.useEffect(()=>{const f=KR(g=>{let v=0;g.forEach(R=>{v+=Number(R.unreadAdmin||0)}),i(v)});return()=>f&&f()},[]),O.useEffect(()=>{if(!e)return;const f=v=>{s.current&&!s.current.contains(v.target)&&n(!1)},g=v=>{v.key==="Escape"&&n(!1)};return document.addEventListener("click",f),document.addEventListener("keydown",g),()=>{document.removeEventListener("click",f),document.removeEventListener("keydown",g)}},[e]),O.useEffect(()=>{n(!1)},[u]);const c=f=>f==="/"?u==="/":u===f||u.startsWith(f+"/"),d=async f=>{if(f.preventDefault(),n(!1),!!window.confirm("Logout karein?")){try{await oU()}catch{}a("/login",{replace:!0})}};return m.jsx("header",{className:"site-header",children:m.jsxs("div",{className:"header-inner adm-header",children:[m.jsxs("div",{className:"menu-wrap",ref:s,children:[m.jsxs("button",{type:"button",className:"menu-btn"+(e?" is-open":""),"aria-label":"Open menu","aria-expanded":e,"aria-controls":"menuDrop",onClick:f=>{f.stopPropagation(),n(g=>!g)},children:[m.jsx("span",{}),m.jsx("span",{}),m.jsx("span",{})]}),m.jsx("nav",{className:"menu-drop"+(e?" is-open":""),id:"menuDrop",children:t?m.jsx("a",{className:"menu-item",href:"../index.html",children:"User Panel"}):m.jsxs(m.Fragment,{children:[m.jsx(Ur,{className:"menu-item"+(c("/")?" is-active":""),to:"/",children:"Home"}),m.jsxs(Ur,{className:"menu-item"+(c("/chats")?" is-active":""),to:"/chats",children:["Chats",r>0&&m.jsx("span",{className:"menu-badge",children:r>99?"99+":r})]}),m.jsx(Ur,{className:"menu-item"+(c("/settings")?" is-active":""),to:"/settings",children:"Settings"}),m.jsx("a",{className:"menu-item",href:"../index.html",children:"User Panel"}),m.jsx("a",{className:"menu-item",href:"#","data-install":!0,style:{display:"none"},children:"Install App"}),m.jsx("a",{className:"menu-item",href:"#",onClick:d,children:"Logout"})]})})]}),m.jsx(Ur,{className:"logo",to:t?"/login":"/",children:m.jsx("img",{className:"logo-img adm-logo",src:$U+"FAVICON/admin-logo-photo_2026-10-01_23-26-57.jpg",alt:"4R-ADMIN"})})]})})}function na({children:t,simple:e,footer:n=!0}){return m.jsxs(m.Fragment,{children:[m.jsx(qU,{}),m.jsx(GU,{simple:e}),t,n&&m.jsx(WU,{})]})}const KU="./",HU=KU+"USER-ICON/2288510.png";function Rd({className:t="adm-ava"}){const[e,n]=O.useState(!1);return m.jsx("span",{className:t,children:e?m.jsx("span",{className:"adm-ava-fb",children:m.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),m.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}):m.jsx("img",{src:HU,alt:"",onError:()=>n(!0)})})}function QU(){const{list:t}=i_(),e=gr(),n=hU(t);return m.jsx(na,{children:m.jsxs("main",{className:"adm",children:[m.jsxs("div",{className:"adm-head",children:[m.jsx("h1",{children:"Admin Home"}),m.jsx("p",{children:"Saari complaints yahan dekhein aur status update karein."})]}),m.jsxs("section",{className:"adm-stats",children:[m.jsxs("div",{className:"adm-stat",children:[m.jsx("span",{className:"adm-stat-ico",children:m.jsx(Pm,{})}),m.jsx("b",{children:n.total}),m.jsx("small",{children:"Total Complaints"})]}),m.jsxs("div",{className:"adm-stat adm-stat--today",children:[m.jsx("span",{className:"adm-stat-ico",children:m.jsx(VU,{})}),m.jsx("b",{children:n.today}),m.jsx("small",{children:"Today Complaints"})]})]}),m.jsxs("section",{className:"adm-box",children:[m.jsxs("div",{className:"adm-box-head",children:[m.jsx("h2",{children:"All Complain"}),m.jsx("span",{children:n.total})]}),m.jsx("div",{className:"adm-box-body",children:t.length?t.map(r=>{const i=ul(r),s=r.data||{};return m.jsxs("button",{type:"button",className:"adm-card",onClick:()=>e("/complaint/"+encodeURIComponent(r.id)),children:[m.jsx(Rd,{}),m.jsxs("span",{className:"adm-cmid",children:[m.jsx("span",{className:"adm-cname",children:s.userName||"Unknown User"}),m.jsx("span",{className:"adm-cat",children:r.category||"Complaint"}),m.jsx("span",{className:"adm-cwhen",children:r_(r.submittedAt)})]}),m.jsxs("span",{className:"adm-cright",children:[m.jsx("span",{className:"adm-status adm-status--"+i,children:Ad[i]}),m.jsx("span",{className:"adm-chev",children:m.jsx(HR,{})})]})]},r.id)}):m.jsxs("div",{className:"adm-empty",children:[m.jsx("div",{className:"adm-empty-ico",children:m.jsx(Pm,{size:26})}),m.jsx("h3",{children:"Koi complaint nahi mili"}),m.jsx("p",{children:"Jab user complaint bhejega wo yahan dikhegi."}),m.jsx("a",{className:"btn",href:"../index.html",children:"Open User Panel"})]})})]})]})})}const YU="./";function JU(){const{user:t}=UR(),e=gr(),n=Sd(),[r]=sN(),i=r.get("next")||"/",s=i.startsWith("/")?i:"/",[o,a]=O.useState(rU),[u,c]=O.useState(""),[d,f]=O.useState(!1),[g,v]=O.useState(r.get("err")==="sdk"?"Firebase load nahi hua. Internet check karein.":""),[R,k]=O.useState(!1),[x,E]=O.useState(""),[w,T]=O.useState(!1);O.useEffect(()=>{t&&e(s,{replace:!0})},[t,s,e]),O.useEffect(()=>{const j=window.FourRPwa;if(!j)return;j.init();const F=()=>T(!0);window.addEventListener("beforeinstallprompt",F);const I=setTimeout(()=>{j.installed()||(j.canInstall()?E("Install karne ke liye upar wala button dabahein."):j.isIOS()?E("iPhone par: Share → Add to Home Screen."):location.protocol!=="file:"&&E("Ya Chrome menu (3 dot) → Install app."))},2e3);return()=>{clearTimeout(I),window.removeEventListener("beforeinstallprompt",F)}},[]);const V=j=>{j.preventDefault(),v("");const F=o.trim();if(!F){v("Email daalein.");return}if(!u){v("Password daalein.");return}if(u.length<6){v("Password kam se kam 6 characters ka rakhein.");return}k(!0),sU(F,u).then(()=>{n("Login Successful"),setTimeout(()=>e(s,{replace:!0}),400)}).catch(I=>{k(!1),v(I&&I.message?I.message:"Login nahi hua.")})};return m.jsx(na,{simple:!0,children:m.jsxs("main",{className:"adm-login",children:[m.jsx("img",{className:"adm-login-logo",src:YU+"FAVICON/admin-logo-photo_2026-10-01_23-26-57.jpg",alt:"4R-ADMIN"}),m.jsxs("h1",{children:["4R",m.jsx("small",{children:"ADMIN"})]}),m.jsx("p",{className:"sub",children:"Panel me login karein"}),m.jsxs("div",{className:"panel",children:[m.jsx("h2",{className:"panel-title",children:"Admin Login"}),m.jsxs("form",{className:"form",onSubmit:V,noValidate:!0,children:[m.jsx("div",{className:"adm-err"+(g?" is-show":""),children:g}),m.jsxs("label",{className:"field",children:[m.jsx("span",{className:"label",children:"Email ID"}),m.jsx("input",{type:"email",placeholder:"4r@admin.com",autoComplete:"username",value:o,onChange:j=>{a(j.target.value),v("")}})]}),m.jsxs("label",{className:"field",children:[m.jsx("span",{className:"label",children:"Password"}),m.jsxs("span",{className:"pwd-wrap",children:[m.jsx("input",{type:d?"text":"password",placeholder:"Apna password daalein",autoComplete:"current-password",value:u,onChange:j=>{c(j.target.value),v("")}}),m.jsx("button",{type:"button",className:"pwd-eye","aria-label":d?"Hide password":"Show password",onClick:()=>f(j=>!j),children:m.jsx(QR,{size:19})})]})]}),m.jsx("button",{type:"submit",className:"btn btn--block"+(R?" is-loading":""),disabled:R,children:m.jsx("span",{className:"btn-text",children:"Login"})})]})]}),m.jsx("p",{className:"adm-login-foot",children:"Sirf admin email hi login kar sakti hai."}),m.jsxs("button",{type:"button",className:"btn btn--block",style:{display:w?"flex":"none",maxWidth:400},onClick:()=>{const j=window.FourRPwa;j&&j.promptInstall()},children:[m.jsx(a_,{}),"Install App on Phone"]}),x&&m.jsx("p",{className:"adm-login-foot",style:{maxWidth:400},children:x})]})})}const XU=[{key:"pending",label:"Pending"},{key:"previewing",label:"Previewing"},{key:"successful",label:"Successful"}];function ZU({open:t,current:e,onClose:n,onUpdate:r}){const[i,s]=O.useState(e||null);return O.useEffect(()=>{t&&s(e||null)},[t,e]),O.useEffect(()=>{if(!t)return;const o=a=>{a.key==="Escape"&&n()};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[t,n]),t?m.jsx("div",{className:"adm-pop is-open",onClick:o=>{o.target===o.currentTarget&&n()},children:m.jsxs("div",{className:"adm-pop-box",role:"dialog","aria-modal":"true",children:[m.jsxs("div",{className:"adm-pop-head",children:[m.jsx("h3",{children:"Update Status"}),m.jsx("p",{children:"Ek status choose karein, phir Update dabayein."})]}),m.jsxs("div",{className:"adm-pop-body",children:[XU.map(o=>m.jsxs("button",{type:"button",className:"adm-opt adm-opt--"+o.key+(i===o.key?" is-on":""),onClick:()=>s(o.key),children:[m.jsx("i",{}),Ad[o.key]]},o.key)),m.jsx("button",{type:"button",className:"btn btn--block",disabled:!i,style:{opacity:i?1:.45},onClick:()=>{i&&(n(),r(i))},children:"Update"}),m.jsx("button",{type:"button",className:"adm-pop-close",onClick:n,children:"Cancel"})]})]})}):null}function e4({image:t,onClose:e}){if(O.useEffect(()=>{if(!t)return;const r=i=>{i.key==="Escape"&&e()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[t,e]),!t)return null;const n=()=>{let r=(t.name||"image").replace(/[^\w.\- ]+/g,"_");/\.[a-z0-9]{2,4}$/i.test(r)||(r+=".jpg");const i=document.createElement("a");i.href=t.src,i.download=r,document.body.appendChild(i),i.click(),i.remove()};return m.jsxs("div",{className:"adm-viewer is-open",role:"dialog","aria-modal":"true",children:[m.jsx("div",{className:"adm-viewer-img-wrap",children:m.jsx("img",{alt:"Complaint image",src:t.src})}),m.jsx("p",{className:"adm-viewer-name",children:t.name||""}),m.jsxs("div",{className:"adm-viewer-acts",children:[m.jsxs("button",{type:"button",className:"adm-vact adm-vact--close",onClick:e,children:[m.jsx(YR,{}),"Close"]}),m.jsxs("button",{type:"button",className:"adm-vact adm-vact--down",onClick:n,children:[m.jsx(a_,{}),"Download"]})]})]})}function t4(){const{id:t}=M0(),e=gr(),n=Sd(),{list:r,ready:i}=i_(),[s,o]=O.useState(null),[a,u]=O.useState(!1),[c,d]=O.useState(!1),[f,g]=O.useState(null),v=r.find(F=>F.id===t)||null;O.useEffect(()=>{v&&o(v)},[v]);const R=!s&&!i,k=!s&&i,x=(s&&s.images||[]).filter(F=>F&&F.dataUrl),E=s&&s.data||{},w=ul(s),T=x.length>=2,V=F=>{yU(s.id,F).then(I=>{I.ok?(o(_=>_&&{..._,status:F,statusAt:new Date().toISOString()}),n("Update Successful")):n("Update nahi hua — "+(I.error||"storage full"),!0)})},j=()=>{window.confirm("Ye complaint permanently delete karein?")&&_U(s.id).then(F=>{F.ok?e("/",{replace:!0}):n("Delete nahi hua — "+(F.error||"storage full"),!0)})};return m.jsxs(na,{children:[m.jsxs("main",{className:"adm",children:[m.jsx("div",{className:"adm-top",children:m.jsxs(Ur,{className:"adm-back",to:"/",children:[m.jsx(o_,{}),"Home"]})}),(R||k)&&m.jsx("div",{className:"adm-box",children:m.jsxs("div",{className:"adm-empty",style:{padding:"44px 20px"},children:[m.jsx("div",{className:"adm-empty-ico",children:k?m.jsx(FU,{size:26}):m.jsx(Pm,{size:26})}),m.jsx("h3",{children:k?"Complaint nahi mili":"Loading complaint..."}),m.jsx("p",{children:k?"Ye complaint delete ho chuki hai ya link galat hai.":"Cloud se data aa raha hai."}),k&&m.jsx(Ur,{className:"btn",to:"/",children:"Back to Home"})]})}),s&&m.jsxs(m.Fragment,{children:[m.jsxs("section",{className:"adm-detail-head",children:[m.jsx(Rd,{className:"adm-ava adm-detail-ava"}),m.jsxs("div",{className:"adm-detail-who",children:[m.jsx("h1",{children:E.userName||"Unknown User"}),m.jsxs("p",{children:[$R(s.submittedAt)," · ",s.id||""]})]}),m.jsx("span",{className:"adm-status adm-status--"+w,children:Ad[w]})]}),m.jsxs("section",{className:"adm-box",style:{marginBottom:14},children:[m.jsxs("div",{className:"adm-box-head",children:[m.jsx("h2",{children:"Status"}),m.jsx("span",{children:"User panel me bhi dikhega"})]}),m.jsx("div",{className:"adm-statusbtn-wrap",children:m.jsxs("button",{type:"button",className:"btn adm-status-btn",onClick:()=>d(!0),children:[m.jsx(MU,{}),"Status Update"]})})]}),m.jsxs("section",{className:"adm-box",style:{marginBottom:14},children:[m.jsxs("div",{className:"adm-box-head",children:[m.jsx("h2",{children:"Complaint Details"}),m.jsx("span",{children:s.category||"Complaint"})]}),m.jsx("div",{className:"adm-rows",children:fU.map(F=>{const I=E[F.key];return I==null||String(I).trim()===""?null:F.secret?m.jsxs("div",{className:"adm-row",children:[m.jsx("span",{className:"adm-row-k",children:F.label}),m.jsx("span",{className:"adm-row-v is-secret",children:a?String(I):"•".repeat(String(I).length)})]},F.key):m.jsxs("div",{className:"adm-row",children:[m.jsx("span",{className:"adm-row-k",children:F.label}),m.jsx("span",{className:"adm-row-v"+(F.key==="detail"?" is-plain":""),children:String(I)})]},F.key)})}),m.jsx("div",{className:"adm-acts",children:!E.password&&!x.length?m.jsx("p",{className:"adm-none",children:"Is complaint me password aur image kuch nahi hai."}):m.jsxs(m.Fragment,{children:[E.password&&m.jsxs("button",{type:"button",className:"adm-act adm-act--soft",onClick:()=>u(F=>!F),children:[!T&&m.jsx(LU,{}),m.jsx("span",{children:T?a?"Hide":"Password":a?"Hide Password":"Show Password"})]}),x.map((F,I)=>m.jsxs("button",{type:"button",className:"adm-act",onClick:()=>g({src:F.dataUrl,name:F.name}),children:[m.jsx(QR,{}),"Image ",I+1]},I))]})})]}),m.jsxs("section",{className:"adm-box adm-danger",children:[m.jsx("div",{className:"adm-note",children:"Complaint delete karne se wo user ke mailbox se bhi hat jayegi."}),m.jsx("div",{className:"adm-form",children:m.jsx("button",{type:"button",className:"btn btn--block",onClick:j,children:"Delete This Complaint"})})]})]})]}),m.jsx(ZU,{open:c,current:w,onClose:()=>d(!1),onUpdate:V}),m.jsx(e4,{image:f,onClose:()=>g(null)})]})}function n4(){const[t,e]=O.useState([]),n=gr();O.useEffect(()=>{const i=KR(s=>e(s));return()=>i&&i()},[]);let r=0;return t.forEach(i=>{r+=Number(i.unreadAdmin||0)}),O.useEffect(()=>(document.title=(r?"("+r+") ":"")+"Chats — 4R-ADMIN",()=>{document.title="4R-ADMIN"}),[r]),m.jsx(na,{children:m.jsxs("main",{className:"adm",children:[m.jsxs("div",{className:"adm-head",children:[m.jsx("h1",{children:"Chats"}),m.jsx("p",{children:"Jis user se baat karni ho us par tap karein."})]}),m.jsxs("section",{className:"adm-stats",children:[m.jsxs("div",{className:"adm-stat",children:[m.jsx("span",{className:"adm-stat-ico",children:m.jsx(gE,{})}),m.jsx("b",{children:t.length}),m.jsx("small",{children:"Total Chats"})]}),m.jsxs("div",{className:"adm-stat adm-stat--today",children:[m.jsx("span",{className:"adm-stat-ico",children:m.jsx(OU,{})}),m.jsx("b",{children:r}),m.jsx("small",{children:"Unread"})]})]}),m.jsxs("section",{className:"adm-box",children:[m.jsxs("div",{className:"adm-box-head",children:[m.jsx("h2",{children:"Users"}),m.jsx("span",{children:t.length})]}),m.jsx("div",{className:"adm-box-body",children:t.length?t.map(i=>{const s=Number(i.unreadAdmin||0),o=i.lastText||"Chat shuru karein",a=i.lastWho==="admin"?"You: ":"";return m.jsxs("button",{type:"button",className:"adm-card adm-chat",onClick:()=>n("/chats/"+encodeURIComponent(i.id)),children:[m.jsx(Rd,{}),m.jsxs("span",{className:"adm-cmid",children:[m.jsx("span",{className:"adm-cname",children:qR(i)}),m.jsx("span",{className:"adm-chat-last",children:a+o}),m.jsx("span",{className:"adm-cwhen",children:r_(i.updatedAt||i.createdAt)})]}),m.jsxs("span",{className:"adm-cright",children:[s>0&&m.jsx("span",{className:"adm-unread",children:s>99?"99+":s}),m.jsx("span",{className:"adm-chev",children:m.jsx(HR,{})})]})]},i.id)}):m.jsxs("div",{className:"adm-empty",children:[m.jsx("div",{className:"adm-empty-ico",children:m.jsx(gE,{size:26})}),m.jsx("h3",{children:"Abhi koi chat nahi hai"}),m.jsx("p",{children:"Jab user Online Chat page se message bhejega, wo yahan dikhega."}),m.jsx("a",{className:"btn",href:"../online-chat.html",children:"Open User Chat"})]})})]})]})})}function r4(){const{id:t}=M0(),e=gr(),n=Sd(),[r,i]=O.useState(null),[s,o]=O.useState([]),[a,u]=O.useState(""),[c,d]=O.useState(!1),[f,g]=O.useState(!1),[v,R]=O.useState(null),[k,x]=O.useState(!1),E=O.useRef(null),w=O.useRef(!0),T=O.useRef(!0),V=O.useRef(null),j=O.useRef(null);O.useEffect(()=>(document.body.classList.add("adm-room-page"),()=>document.body.classList.remove("adm-room-page")),[]),O.useEffect(()=>{let B=!0;AU(t).then(X=>{B&&X.chat&&i(X.chat)});const U=PU(t,X=>{!B||!X||(i(X),Number(X.unreadAdmin||0)>0&&xU(t))}),Q=RU(t,(X,le)=>{B&&(g(!le),le&&o(X))});return()=>{B=!1,U&&U(),Q&&Q()}},[t]);const F=()=>{const B=E.current;return B?B.scrollHeight-B.scrollTop-B.clientHeight<90:!0},I=B=>{const U=E.current;if(U)try{U.scrollTo({top:U.scrollHeight,behavior:B?"smooth":"auto"})}catch{U.scrollTop=U.scrollHeight}},_=()=>{const B=F();w.current=B,x(!B)};O.useEffect(()=>{s.length&&w.current&&(I(!T.current),T.current=!1)},[s]),O.useEffect(()=>{if(!window.visualViewport)return;const B=()=>{setTimeout(()=>{w.current&&I(!1)},80)};return window.visualViewport.addEventListener("resize",B),()=>window.visualViewport.removeEventListener("resize",B)},[]);const S=B=>(d(!0),CU(t,B).then(U=>(d(!1),U.ok||n(U.error||"Message nahi gaya",!0),U))),A=B=>{B.preventDefault();const U=a.trim();if(U){if(!SU()){n("Internet nahi hai. Connection check karein.");return}u(""),S({who:"admin",text:U,name:$f})}},C=B=>{const U=B.target.files&&B.target.files[0];B.target.value="",U&&NU(U).then(Q=>S({who:"admin",image:Q.dataUrl,fileName:Q.name,name:$f})).catch(Q=>n(Q.message||"Image nahi gayi"))},b=B=>{const U=B.target.files&&B.target.files[0];B.target.value="",U&&DU(U).then(Q=>S({who:"admin",fileName:Q.name,fileData:Q.dataUrl,name:$f})).catch(Q=>n(Q.message||"File nahi gayi"))},P=()=>{window.confirm("Is user ki poori chat delete karein?")&&bU(t).then(B=>{B.ok?e("/chats",{replace:!0}):n(B.error||"Delete nahi hua")})},at=B=>{R({m:B,time:$R(B.at)})},Wt=r?qR(r):"Loading...",Pn=r?"Chat ID: "+String(r.id||t).slice(0,6).toUpperCase()+" · "+r_(r.updatedAt||r.createdAt):f?"Offline — internet check karein":"Chat khul rahi hai";return m.jsx(na,{footer:!1,children:m.jsxs("main",{className:"adm-room",children:[m.jsxs("div",{className:"adm-room-bar",children:[m.jsx(Ur,{className:"adm-back adm-back--ico",to:"/chats","aria-label":"Back to chats",children:m.jsx(o_,{})}),m.jsx(Rd,{className:"adm-ava adm-ava--sm"}),m.jsxs("div",{className:"adm-room-who",children:[m.jsx("strong",{children:Wt}),m.jsx("small",{children:Pn})]}),m.jsx("button",{type:"button",className:"adm-room-del",title:"Delete chat","aria-label":"Delete chat",onClick:P,children:m.jsx(jU,{})})]}),m.jsx("div",{className:"chat-messages adm-room-msgs",ref:E,onScroll:_,children:s.length?s.map(B=>{const U=B.who==="admin";return m.jsxs("div",{className:"msg "+(U?"msg--user":"msg--agent")+(B.image||B.fileName?" msg--file":""),role:"button",tabIndex:0,onClick:()=>at(B),onKeyDown:Q=>{(Q.key==="Enter"||Q.key===" ")&&(Q.preventDefault(),at(B))},children:[m.jsx("span",{className:"msg-name",children:U?"You (Support)":Wt}),B.image?m.jsxs(m.Fragment,{children:[m.jsx("img",{className:"msg-image",src:B.image,alt:B.fileName||"image"}),m.jsx("span",{className:"msg-file-cap",children:B.fileName||"Photo"})]}):B.fileName?m.jsxs(m.Fragment,{children:[m.jsx("span",{className:"msg-file-ico",children:m.jsx(yE,{size:20})}),B.fileData?m.jsx("a",{className:"msg-file-name",href:B.fileData,download:B.fileName,onClick:Q=>Q.stopPropagation(),children:B.fileName}):m.jsx("span",{className:"msg-file-name",children:B.fileName})]}):m.jsxs(m.Fragment,{children:[m.jsx("p",{className:"msg-text",children:B.text||""}),B.editedAt&&m.jsx("span",{className:"msg-edited",children:"edited"})]})]},B.id)}):m.jsxs("div",{className:"adm-room-empty",children:[m.jsx("p",{children:"Abhi koi message nahi hai."}),m.jsx("small",{children:"Neeche se reply bhejein."})]})}),m.jsx("button",{type:"button",className:"chat-latest"+(k?" is-show":""),"aria-label":"Latest messages",onClick:()=>{I(!0),w.current=!0,x(!1)},children:m.jsx(BU,{})}),m.jsxs("div",{className:"chat-actions",children:[m.jsxs("button",{type:"button",className:"chat-act",title:"Send image",onClick:()=>V.current&&V.current.click(),children:[m.jsx(UU,{}),m.jsx("span",{children:"Image"})]}),m.jsxs("button",{type:"button",className:"chat-act",title:"Send file or PDF",onClick:()=>j.current&&j.current.click(),children:[m.jsx(yE,{}),m.jsx("span",{children:"File / PDF"})]}),m.jsx("input",{ref:V,type:"file",accept:"image/*",hidden:!0,onChange:C}),m.jsx("input",{ref:j,type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.txt,.zip",hidden:!0,onChange:b})]}),m.jsxs("form",{className:"chat-input",onSubmit:A,children:[m.jsx("input",{type:"text",placeholder:"Reply likhiye...",autoComplete:"off",value:a,onChange:B=>u(B.target.value)}),m.jsx("button",{type:"submit",className:"btn btn--send",disabled:c,children:"Send"})]}),v&&m.jsx("div",{className:"modal-backdrop is-open",onClick:B=>{B.target===B.currentTarget&&R(null)},children:m.jsxs("div",{className:"modal chat-popup",children:[m.jsx("button",{type:"button",className:"popup-x","aria-label":"Close",onClick:()=>R(null),children:m.jsx(YR,{})}),m.jsx("h3",{className:"modal-title chat-popup-title",children:v.m.who==="admin"?"Your Message":Wt}),m.jsxs("p",{className:"chat-popup-when",children:[m.jsx("strong",{children:"Sent:"})," ",v.time]}),m.jsx("div",{className:"chat-popup-body",children:v.m.image?m.jsxs(m.Fragment,{children:[m.jsx("img",{className:"popup-img",src:v.m.image,alt:v.m.fileName||"image"}),m.jsx("p",{className:"popup-file-name",children:v.m.fileName||""})]}):m.jsx("p",{className:"popup-text",children:v.m.text||v.m.fileName||""})}),m.jsx("button",{type:"button",className:"btn btn--block popup-close",onClick:()=>R(null),children:"Close"})]})})]})})}function Ci(){return window.FourRTelegram}function i4(){const t=Sd(),{list:e,refresh:n}=i_(),[r,i]=O.useState(e.length);O.useEffect(()=>{i(e.length)},[e]);const[s,o]=O.useState({state:"CHECKING",color:"#6b7280",note:"",canInstall:!1}),a=()=>{const B=window.FourRPwa;if(B){if(B.installed()){B.showInstallButtons(!1),o({state:"INSTALLED",color:"#157a4d",note:"App phone par install ho chuka hai. Ab ise app icon se kholein &mdash; login apne aap ho jayega.",canInstall:!1});return}B.canInstall()?o({state:"READY",color:"#4f6bed",note:"Neeche <b>Install App on Phone</b> dabaein, phir apne phone ka logo par <b>Install</b> / <b>Add</b> chunein.",canInstall:!0}):B.isIOS()?o({state:"MANUAL",color:"#c2740a",note:"iPhone par: Chrome me <b>Share</b> button dabayein, phir <b>Add to Home Screen</b> chunein.",canInstall:!1}):location.protocol==="file:"?o({state:"NEEDS HTTPS",color:"#e5484d",note:"Install sirf <b>https://</b> ya live server par hota hai. Project ko hosting par daalein (jaise GitHub Pages) phir kholein.",canInstall:!1}):o({state:"NOT AVAILABLE",color:"#c2740a",note:"Chrome ka menu (3 dot) kholein aur <b>Install app</b> ya <b>Add to Home screen</b> chunein.",canInstall:!1})}};O.useEffect(()=>{const B=window.FourRPwa;if(!B)return;B.init(),a();const U=setTimeout(a,2e3);return()=>clearTimeout(U)},[]);const[u,c]=O.useState({online:!1,error:"",count:0}),d=B=>{c({online:gU(),error:zf(),count:(B||fr()).length})};O.useEffect(()=>{d(),Am().then(U=>d(U));const B=()=>d();return window.addEventListener("4r-sync",B),()=>window.removeEventListener("4r-sync",B)},[]);const f=async B=>{const U=B.currentTarget;U.classList.add("is-loading");const Q=await Am();d(Q),U.classList.remove("is-loading"),t(zf()?"Cloud error — rules check karein":"Sync Done · "+Q.length+" complaints",!!zf())},[g,v]=O.useState({botToken:"",chatId:"",enabled:!0}),[R,k]=O.useState(0),[x,E]=O.useState(!1),w=()=>{const B=Ci();if(!B)return;const U=B.getSettings();v(U),k(B.queueSize())};O.useEffect(()=>{w()},[]);const T=B=>{B.preventDefault();const U=Ci();if(!U)return;if(!U.saveSettings({botToken:g.botToken.trim(),chatId:g.chatId.trim()})){t("Save nahi hua — storage full hai",!0);return}w(),t("Update Successful"),U.flushQueue()},V=()=>{const B=Ci();if(B){if(!B.isReady()){t("Pehle Bot Token aur Chat ID update karein",!0);return}E(!0),B.sendText(`✅ <b>4R-ADMIN</b> connection test
━━━━━━━━━━
Telegram alerts <b>ON</b> hai.
Ab har nayi complaint yahan aa jayegi.`).then(()=>t("Test Message Sent")).catch(U=>t("Fail: "+U.message,!0)).then(()=>E(!1))}},j=()=>{const B=Ci();if(!B)return;const U=B.getSettings();B.saveSettings({enabled:!U.enabled}),w(),U.enabled||B.flushQueue()},F=()=>{const B=Ci();if(B){if(!B.queueSize()){t("Koi pending message nahi hai");return}E(!0),B.flushQueue().then(U=>t(U?U+" Message Sent":"Abhi bhi nahi gaya — settings check karein",!U)).then(()=>{E(!1),w()})}},[I,_]=O.useState(ji()),[S,A]=O.useState(Da());O.useEffect(()=>{A(Da())},[e]);const C=()=>{pE({showPassword:!ji().showPassword}),_(ji()),A(Da()),t("Update Successful")},b=O.useRef(null),P=()=>{const B=Ci(),U={app:"4R-ADMIN",version:1,exportedAt:new Date().toISOString(),complaints:fr(),telegram:B?B.getSettings():{},ui:ji()},Q=new Blob([JSON.stringify(U,null,2)],{type:"application/json"}),X=URL.createObjectURL(Q),le=document.createElement("a"),fe=new Date,Se=Gt=>Gt<10?"0"+Gt:""+Gt;le.href=X,le.download="4r-admin-backup-"+fe.getFullYear()+Se(fe.getMonth()+1)+Se(fe.getDate())+".json",document.body.appendChild(le),le.click(),le.remove(),setTimeout(()=>URL.revokeObjectURL(X),1e3)},at=B=>{const U=B.target.files&&B.target.files[0];if(!U)return;const Q=new FileReader;Q.onload=()=>{try{const X=JSON.parse(Q.result);if(!X||!Array.isArray(X.complaints))throw new Error("bad file");ms(X.complaints);const le=Ci();X.telegram&&le&&le.saveSettings(X.telegram),X.ui&&pE(X.ui),w(),_(ji()),A(Da()),i(X.complaints.length),n&&n(),t("Update Successful")}catch{t("File sahi nahi hai",!0)}B.target.value=""},Q.readAsText(U)},Wt=()=>{window.confirm("SAARI complaints permanently delete ho jayengi (Firestore + browser dono se). Pakka?")&&vU().then(()=>{n&&n(),d([]),A(Da()),t("All Complaints Deleted")})},Pn=g.enabled&&g.botToken&&g.chatId;return m.jsx(na,{children:m.jsxs("main",{className:"adm",children:[m.jsx("div",{className:"adm-top",children:m.jsxs(Ur,{className:"adm-back",to:"/",children:[m.jsx(o_,{}),"Home"]})}),m.jsxs("div",{className:"adm-head",children:[m.jsx("h1",{children:"Settings"}),m.jsx("p",{children:"Telegram alerts aur panel ki basic settings yahan se update karein."})]}),m.jsxs("section",{className:"adm-box",style:{marginBottom:14},children:[m.jsxs("div",{className:"adm-box-head",children:[m.jsx("h2",{children:"Install App"}),m.jsx("span",{style:{color:s.color},children:s.state})]}),m.jsx("div",{className:"adm-hint",children:"Phone par app install karne se 4R-ADMIN apna hi icon khulta hai — browser ka bar nahi dikhta, aur full screen me chalta hai."}),m.jsxs("div",{className:"adm-form",children:[s.canInstall&&m.jsxs("button",{type:"button",className:"btn btn--block",onClick:()=>{const B=window.FourRPwa;B&&B.promptInstall().then(a)},children:[m.jsx(a_,{}),"Install App on Phone"]}),m.jsx("p",{className:"adm-note",style:{border:"1px solid var(--line)",borderRadius:8},dangerouslySetInnerHTML:{__html:s.note}})]})]}),m.jsxs("section",{className:"adm-box",style:{marginBottom:14},children:[m.jsxs("div",{className:"adm-box-head",children:[m.jsx("h2",{children:"Cloud Database"}),m.jsx("span",{style:{color:u.error?"#e5484d":u.online?"#157a4d":"#c2740a"},children:u.error?"RULES ERROR":u.online?"ONLINE":"OFFLINE"})]}),m.jsxs("div",{className:"adm-set-row",children:[m.jsxs("span",{className:"adm-row-k",children:["Firebase (Firestore)",m.jsx("small",{children:u.error?u.error:u.online?"Connected · collection: complaints":"SDK load nahi hua (internet check karein)"})]}),m.jsx("span",{className:"adm-set-val",children:r})]}),m.jsx("div",{className:"adm-form",children:m.jsx("button",{type:"button",className:"btn btn--ghost",style:{width:"100%"},onClick:f,children:"Sync Now"})}),m.jsx("div",{className:"adm-note",style:{borderTop:"1px solid var(--line)"},children:u.error?m.jsxs(m.Fragment,{children:[m.jsx("b",{style:{color:"#e5484d"},children:"Cloud save nahi ho raha."}),m.jsx("br",{}),"Project ",m.jsx("b",{children:"rbet-6770a"})," ke liye rules publish nahi hui. Firebase Console > Firestore Database > Rules me project ki ",m.jsx("b",{children:"firestore.rules"})," paste karke"," ",m.jsx("b",{children:"Publish"})," dabayein. Tab tak complaint browser me hi save hoti rahegi."]}):m.jsx(m.Fragment,{children:"Complaint ab Firebase me save hoti hai, isliye admin panel kisi bhi device par sabhi complaints dekh sakta hai. Internet na ho to data browser me hi rehta hai."})})]}),m.jsxs("section",{className:"adm-box",style:{marginBottom:14},children:[m.jsxs("div",{className:"adm-box-head",children:[m.jsx("h2",{children:"Telegram Alerts"}),m.jsx("span",{style:{color:Pn?"#157a4d":"#c2740a"},children:Pn?"ON":"OFF"})]}),m.jsxs("div",{className:"adm-hint",children:[m.jsx("b",{children:"Kaise set karein:"}),m.jsx("br",{}),"1. Telegram me ",m.jsx("b",{children:"@BotFather"})," kholein aur ",m.jsx("b",{children:"/newbot"})," se bot banayein.",m.jsx("br",{}),"2. Bot token copy karke neeche paste karein.",m.jsx("br",{}),"3. Apni notification group banayein, bot ko us group me add karein.",m.jsx("br",{}),"4. Group ka ",m.jsx("b",{children:"chat ID"})," neeche daalein."]}),m.jsxs("form",{className:"adm-form",onSubmit:T,children:[m.jsxs("div",{className:"field",children:[m.jsx("label",{className:"label",htmlFor:"botToken",children:"Bot Token"}),m.jsx("input",{type:"text",id:"botToken",placeholder:"1234567890:AAExxxxxxxxxxxxxxxxxxxxx",autoComplete:"off",spellCheck:"false",value:g.botToken,onChange:B=>v({...g,botToken:B.target.value})})]}),m.jsxs("div",{className:"field",children:[m.jsx("label",{className:"label",htmlFor:"chatId",children:"Chat ID"}),m.jsx("input",{type:"text",id:"chatId",placeholder:"-1001234567890",autoComplete:"off",spellCheck:"false",value:g.chatId,onChange:B=>v({...g,chatId:B.target.value})})]}),m.jsxs("div",{className:"adm-btn-row",children:[m.jsx("button",{type:"submit",className:"btn btn--block",children:m.jsx("span",{className:"btn-text",children:"Update"})}),m.jsx("button",{type:"button",className:"btn btn--ghost"+(x?" is-loading":""),onClick:V,disabled:x,children:"Test"})]})]}),m.jsxs("div",{className:"adm-set-row",children:[m.jsxs("span",{className:"adm-row-k",children:["Telegram Alerts",m.jsx("small",{children:"Har nayi complaint par message bhejein"})]}),m.jsx("button",{type:"button",className:"adm-switch"+(g.enabled?" is-on":""),role:"switch","aria-checked":g.enabled,onClick:j})]}),m.jsxs("div",{className:"adm-set-row",children:[m.jsxs("span",{className:"adm-row-k",children:["Pending Messages",m.jsx("small",{children:R?R+" message waiting":"Bheje ja chuke hain"})]}),m.jsx("button",{type:"button",className:"btn btn--ghost"+(x?" is-loading":""),style:{margin:0,padding:"9px 14px",fontSize:13.5,flex:"0 0 auto"},onClick:F,disabled:x,children:"Retry"})]})]}),m.jsxs("section",{className:"adm-box",style:{marginBottom:14},children:[m.jsxs("div",{className:"adm-box-head",children:[m.jsx("h2",{children:"Panel Preferences"}),m.jsx("span",{children:"Working"})]}),m.jsxs("div",{className:"adm-set-row",children:[m.jsxs("span",{className:"adm-row-k",children:["Show Password in User Mailbox",m.jsx("small",{children:"Band rahe to password chhupa hua dikhega"})]}),m.jsx("button",{type:"button",className:"adm-switch"+(I.showPassword?" is-on":""),role:"switch","aria-checked":I.showPassword,onClick:C})]}),m.jsxs("div",{className:"adm-set-row",children:[m.jsxs("span",{className:"adm-row-k",children:["Storage Used",m.jsx("small",{children:"Browser me saved data"})]}),m.jsxs("span",{className:"adm-set-val",children:[S," KB"]})]}),m.jsxs("div",{className:"adm-set-row",children:[m.jsxs("span",{className:"adm-row-k",children:["Total Complaints",m.jsx("small",{children:"Panel me saved"})]}),m.jsx("span",{className:"adm-set-val",children:r})]})]}),m.jsxs("section",{className:"adm-box",style:{marginBottom:14},children:[m.jsxs("div",{className:"adm-box-head",children:[m.jsx("h2",{children:"Backup & Restore"}),m.jsx("span",{children:"JSON"})]}),m.jsxs("div",{className:"adm-form",children:[m.jsxs("div",{className:"adm-btn-row",children:[m.jsx("button",{type:"button",className:"btn btn--block",onClick:P,children:m.jsx("span",{className:"btn-text",children:"Export Backup"})}),m.jsx("button",{type:"button",className:"btn btn--ghost",onClick:()=>b.current&&b.current.click(),children:"Import"})]}),m.jsx("input",{ref:b,type:"file",accept:".json,application/json",hidden:!0,onChange:at}),m.jsx("p",{className:"adm-note",style:{border:"1px solid var(--line)",borderRadius:8},children:"Export se saari complaints ke data aur images ek file me mil jayenge."})]})]}),m.jsxs("section",{className:"adm-box adm-danger",children:[m.jsxs("div",{className:"adm-box-head",children:[m.jsx("h2",{children:"Danger Zone"}),m.jsx("span",{children:"Careful"})]}),m.jsx("div",{className:"adm-form",children:m.jsx("button",{type:"button",className:"btn btn--block",onClick:Wt,children:"Delete All Complaints"})})]})]})})}function Va({children:t}){const{user:e,ready:n}=UR(),r=yi();return n?e?t:m.jsx(z0,{to:"/login?next="+encodeURIComponent(r.pathname),replace:!0}):null}function s4(){return m.jsx(tN,{children:m.jsx(lU,{children:m.jsx(uU,{children:m.jsxs(Kb,{children:[m.jsx(xr,{path:"/login",element:m.jsx(JU,{})}),m.jsx(xr,{path:"/",element:m.jsx(Va,{children:m.jsx(QU,{})})}),m.jsx(xr,{path:"/complaint/:id",element:m.jsx(Va,{children:m.jsx(t4,{})})}),m.jsx(xr,{path:"/chats",element:m.jsx(Va,{children:m.jsx(n4,{})})}),m.jsx(xr,{path:"/chats/:id",element:m.jsx(Va,{children:m.jsx(r4,{})})}),m.jsx(xr,{path:"/settings",element:m.jsx(Va,{children:m.jsx(i4,{})})}),m.jsx(xr,{path:"*",element:m.jsx(z0,{to:"/",replace:!0})})]})})})})}x0(document.getElementById("root")).render(m.jsx(O.StrictMode,{children:m.jsx(s4,{})}));
