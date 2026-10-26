function Dk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Vk(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var EE={exports:{}},bh={},TE={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eu=Symbol.for("react.element"),Ok=Symbol.for("react.portal"),Lk=Symbol.for("react.fragment"),Mk=Symbol.for("react.strict_mode"),Fk=Symbol.for("react.profiler"),jk=Symbol.for("react.provider"),Uk=Symbol.for("react.context"),Bk=Symbol.for("react.forward_ref"),zk=Symbol.for("react.suspense"),$k=Symbol.for("react.memo"),qk=Symbol.for("react.lazy"),cv=Symbol.iterator;function Wk(t){return t===null||typeof t!="object"?null:(t=cv&&t[cv]||t["@@iterator"],typeof t=="function"?t:null)}var SE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},AE=Object.assign,PE={};function jo(t,e,n){this.props=t,this.context=e,this.refs=PE,this.updater=n||SE}jo.prototype.isReactComponent={};jo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};jo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function RE(){}RE.prototype=jo.prototype;function xm(t,e,n){this.props=t,this.context=e,this.refs=PE,this.updater=n||SE}var bm=xm.prototype=new RE;bm.constructor=xm;AE(bm,jo.prototype);bm.isPureReactComponent=!0;var hv=Array.isArray,kE=Object.prototype.hasOwnProperty,Nm={current:null},CE={key:!0,ref:!0,__self:!0,__source:!0};function xE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)kE.call(e,r)&&!CE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:eu,type:t,key:s,ref:o,props:i,_owner:Nm.current}}function Gk(t,e){return{$$typeof:eu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dm(t){return typeof t=="object"&&t!==null&&t.$$typeof===eu}function Kk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dv=/\/+/g;function ef(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Kk(""+t.key):e.toString(36)}function fc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case eu:case Ok:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ef(o,0):r,hv(i)?(n="",t!=null&&(n=t.replace(dv,"$&/")+"/"),fc(i,e,n,"",function(c){return c})):i!=null&&(Dm(i)&&(i=Gk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(dv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",hv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ef(s,a);o+=fc(s,e,n,l,i)}else if(l=Wk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ef(s,a++),o+=fc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function zu(t,e,n){if(t==null)return t;var r=[],i=0;return fc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Hk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Vt={current:null},pc={transition:null},Qk={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:pc,ReactCurrentOwner:Nm};function bE(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:zu,forEach:function(t,e,n){zu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return zu(t,function(){e++}),e},toArray:function(t){return zu(t,function(e){return e})||[]},only:function(t){if(!Dm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=jo;ae.Fragment=Lk;ae.Profiler=Fk;ae.PureComponent=xm;ae.StrictMode=Mk;ae.Suspense=zk;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qk;ae.act=bE;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=AE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Nm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)kE.call(e,l)&&!CE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:eu,type:t.type,key:i,ref:s,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:Uk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jk,_context:t},t.Consumer=t};ae.createElement=xE;ae.createFactory=function(t){var e=xE.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:Bk,render:t}};ae.isValidElement=Dm;ae.lazy=function(t){return{$$typeof:qk,_payload:{_status:-1,_result:t},_init:Hk}};ae.memo=function(t,e){return{$$typeof:$k,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=pc.transition;pc.transition={};try{t()}finally{pc.transition=e}};ae.unstable_act=bE;ae.useCallback=function(t,e){return Vt.current.useCallback(t,e)};ae.useContext=function(t){return Vt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return Vt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return Vt.current.useEffect(t,e)};ae.useId=function(){return Vt.current.useId()};ae.useImperativeHandle=function(t,e,n){return Vt.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return Vt.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return Vt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return Vt.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return Vt.current.useReducer(t,e,n)};ae.useRef=function(t){return Vt.current.useRef(t)};ae.useState=function(t){return Vt.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return Vt.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return Vt.current.useTransition()};ae.version="18.3.1";TE.exports=ae;var V=TE.exports;const Yk=Vk(V),Jk=Dk({__proto__:null,default:Yk},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xk=V,Zk=Symbol.for("react.element"),eC=Symbol.for("react.fragment"),tC=Object.prototype.hasOwnProperty,nC=Xk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rC={key:!0,ref:!0,__self:!0,__source:!0};function NE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)tC.call(e,r)&&!rC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Zk,type:t,key:s,ref:o,props:i,_owner:nC.current}}bh.Fragment=eC;bh.jsx=NE;bh.jsxs=NE;EE.exports=bh;var m=EE.exports,DE={exports:{}},en={},VE={exports:{}},OE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,U){var K=$.length;$.push(U);e:for(;0<K;){var te=K-1>>>1,se=$[te];if(0<i(se,U))$[te]=U,$[K]=se,K=te;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var U=$[0],K=$.pop();if(K!==U){$[0]=K;e:for(var te=0,se=$.length,ge=se>>>1;te<ge;){var Tt=2*(te+1)-1,Gn=$[Tt],Kn=Tt+1,Hn=$[Kn];if(0>i(Gn,K))Kn<se&&0>i(Hn,Gn)?($[te]=Hn,$[Kn]=K,te=Kn):($[te]=Gn,$[Tt]=K,te=Tt);else if(Kn<se&&0>i(Hn,K))$[te]=Hn,$[Kn]=K,te=Kn;else break e}}return U}function i($,U){var K=$.sortIndex-U.sortIndex;return K!==0?K:$.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,g=3,w=!1,R=!1,k=!1,x=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T($){for(var U=n(c);U!==null;){if(U.callback===null)r(c);else if(U.startTime<=$)r(c),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(c)}}function O($){if(k=!1,T($),!R)if(n(l)!==null)R=!0,mn(j);else{var U=n(c);U!==null&&X(O,U.startTime-$)}}function j($,U){R=!1,k&&(k=!1,E(_),_=-1),w=!0;var K=g;try{for(T(U),f=n(l);f!==null&&(!(f.expirationTime>U)||$&&!C());){var te=f.callback;if(typeof te=="function"){f.callback=null,g=f.priorityLevel;var se=te(f.expirationTime<=U);U=t.unstable_now(),typeof se=="function"?f.callback=se:f===n(l)&&r(l),T(U)}else r(l);f=n(l)}if(f!==null)var ge=!0;else{var Tt=n(c);Tt!==null&&X(O,Tt.startTime-U),ge=!1}return ge}finally{f=null,g=K,w=!1}}var F=!1,I=null,_=-1,S=5,A=-1;function C(){return!(t.unstable_now()-A<S)}function b(){if(I!==null){var $=t.unstable_now();A=$;var U=!0;try{U=I(!0,$)}finally{U?P():(F=!1,I=null)}}else F=!1}var P;if(typeof v=="function")P=function(){v(b)};else if(typeof MessageChannel<"u"){var pt=new MessageChannel,pn=pt.port2;pt.port1.onmessage=b,P=function(){pn.postMessage(null)}}else P=function(){x(b,0)};function mn($){I=$,F||(F=!0,P())}function X($,U){_=x(function(){$(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){R||w||(R=!0,mn(j))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var U=3;break;default:U=g}var K=g;g=U;try{return $()}finally{g=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,U){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var K=g;g=$;try{return U()}finally{g=K}},t.unstable_scheduleCallback=function($,U,K){var te=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?te+K:te):K=te,$){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=K+se,$={id:d++,callback:U,priorityLevel:$,startTime:K,expirationTime:se,sortIndex:-1},K>te?($.sortIndex=K,e(c,$),n(l)===null&&$===n(c)&&(k?(E(_),_=-1):k=!0,X(O,K-te))):($.sortIndex=se,e(l,$),R||w||(R=!0,mn(j))),$},t.unstable_shouldYield=C,t.unstable_wrapCallback=function($){var U=g;return function(){var K=g;g=U;try{return $.apply(this,arguments)}finally{g=K}}}})(OE);VE.exports=OE;var iC=VE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sC=V,Xt=iC;function q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var LE=new Set,fl={};function _s(t,e){mo(t,e),mo(t+"Capture",e)}function mo(t,e){for(fl[t]=e,t=0;t<e.length;t++)LE.add(e[t])}var ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kf=Object.prototype.hasOwnProperty,oC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fv={},pv={};function aC(t){return Kf.call(pv,t)?!0:Kf.call(fv,t)?!1:oC.test(t)?pv[t]=!0:(fv[t]=!0,!1)}function lC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uC(t,e,n,r){if(e===null||typeof e>"u"||lC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){dt[t]=new Ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];dt[e]=new Ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){dt[t]=new Ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){dt[t]=new Ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){dt[t]=new Ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){dt[t]=new Ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){dt[t]=new Ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){dt[t]=new Ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){dt[t]=new Ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vm=/[\-:]([a-z])/g;function Om(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vm,Om);dt[e]=new Ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vm,Om);dt[e]=new Ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vm,Om);dt[e]=new Ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){dt[t]=new Ot(t,1,!1,t.toLowerCase(),null,!1,!1)});dt.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){dt[t]=new Ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lm(t,e,n,r){var i=dt.hasOwnProperty(e)?dt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uC(e,n,i,r)&&(n=null),r||i===null?aC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var mr=sC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$u=Symbol.for("react.element"),$s=Symbol.for("react.portal"),qs=Symbol.for("react.fragment"),Mm=Symbol.for("react.strict_mode"),Hf=Symbol.for("react.profiler"),ME=Symbol.for("react.provider"),FE=Symbol.for("react.context"),Fm=Symbol.for("react.forward_ref"),Qf=Symbol.for("react.suspense"),Yf=Symbol.for("react.suspense_list"),jm=Symbol.for("react.memo"),Nr=Symbol.for("react.lazy"),jE=Symbol.for("react.offscreen"),mv=Symbol.iterator;function wa(t){return t===null||typeof t!="object"?null:(t=mv&&t[mv]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,tf;function Fa(t){if(tf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tf=e&&e[1]||""}return`
`+tf+t}var nf=!1;function rf(t,e){if(!t||nf)return"";nf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{nf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fa(t):""}function cC(t){switch(t.tag){case 5:return Fa(t.type);case 16:return Fa("Lazy");case 13:return Fa("Suspense");case 19:return Fa("SuspenseList");case 0:case 2:case 15:return t=rf(t.type,!1),t;case 11:return t=rf(t.type.render,!1),t;case 1:return t=rf(t.type,!0),t;default:return""}}function Jf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qs:return"Fragment";case $s:return"Portal";case Hf:return"Profiler";case Mm:return"StrictMode";case Qf:return"Suspense";case Yf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case FE:return(t.displayName||"Context")+".Consumer";case ME:return(t._context.displayName||"Context")+".Provider";case Fm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jm:return e=t.displayName||null,e!==null?e:Jf(t.type)||"Memo";case Nr:e=t._payload,t=t._init;try{return Jf(t(e))}catch{}}return null}function hC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jf(e);case 8:return e===Mm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ti(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function UE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dC(t){var e=UE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qu(t){t._valueTracker||(t._valueTracker=dC(t))}function BE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=UE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Fc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xf(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ti(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zE(t,e){e=e.checked,e!=null&&Lm(t,"checked",e,!1)}function Zf(t,e){zE(t,e);var n=ti(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ep(t,e.type,n):e.hasOwnProperty("defaultValue")&&ep(t,e.type,ti(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function yv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ep(t,e,n){(e!=="number"||Fc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ja=Array.isArray;function no(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ti(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function tp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(q(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _v(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(q(92));if(ja(n)){if(1<n.length)throw Error(q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ti(n)}}function $E(t,e){var n=ti(e.value),r=ti(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function vv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function np(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wu,WE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wu=Wu||document.createElement("div"),Wu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function pl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fC=["Webkit","ms","Moz","O"];Object.keys(Ha).forEach(function(t){fC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ha[e]=Ha[t]})});function GE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ha.hasOwnProperty(t)&&Ha[t]?(""+e).trim():e+"px"}function KE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=GE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var pC=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rp(t,e){if(e){if(pC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(q(62))}}function ip(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sp=null;function Um(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var op=null,ro=null,io=null;function wv(t){if(t=ru(t)){if(typeof op!="function")throw Error(q(280));var e=t.stateNode;e&&(e=Lh(e),op(t.stateNode,t.type,e))}}function HE(t){ro?io?io.push(t):io=[t]:ro=t}function QE(){if(ro){var t=ro,e=io;if(io=ro=null,wv(t),e)for(t=0;t<e.length;t++)wv(e[t])}}function YE(t,e){return t(e)}function JE(){}var sf=!1;function XE(t,e,n){if(sf)return t(e,n);sf=!0;try{return YE(t,e,n)}finally{sf=!1,(ro!==null||io!==null)&&(JE(),QE())}}function ml(t,e){var n=t.stateNode;if(n===null)return null;var r=Lh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(q(231,e,typeof n));return n}var ap=!1;if(ar)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){ap=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{ap=!1}function mC(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Qa=!1,jc=null,Uc=!1,lp=null,gC={onError:function(t){Qa=!0,jc=t}};function yC(t,e,n,r,i,s,o,a,l){Qa=!1,jc=null,mC.apply(gC,arguments)}function _C(t,e,n,r,i,s,o,a,l){if(yC.apply(this,arguments),Qa){if(Qa){var c=jc;Qa=!1,jc=null}else throw Error(q(198));Uc||(Uc=!0,lp=c)}}function vs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ZE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Iv(t){if(vs(t)!==t)throw Error(q(188))}function vC(t){var e=t.alternate;if(!e){if(e=vs(t),e===null)throw Error(q(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Iv(i),t;if(s===r)return Iv(i),e;s=s.sibling}throw Error(q(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?t:e}function eT(t){return t=vC(t),t!==null?tT(t):null}function tT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=tT(t);if(e!==null)return e;t=t.sibling}return null}var nT=Xt.unstable_scheduleCallback,Ev=Xt.unstable_cancelCallback,wC=Xt.unstable_shouldYield,IC=Xt.unstable_requestPaint,ze=Xt.unstable_now,EC=Xt.unstable_getCurrentPriorityLevel,Bm=Xt.unstable_ImmediatePriority,rT=Xt.unstable_UserBlockingPriority,Bc=Xt.unstable_NormalPriority,TC=Xt.unstable_LowPriority,iT=Xt.unstable_IdlePriority,Nh=null,Fn=null;function SC(t){if(Fn&&typeof Fn.onCommitFiberRoot=="function")try{Fn.onCommitFiberRoot(Nh,t,void 0,(t.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:RC,AC=Math.log,PC=Math.LN2;function RC(t){return t>>>=0,t===0?32:31-(AC(t)/PC|0)|0}var Gu=64,Ku=4194304;function Ua(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ua(a):(s&=o,s!==0&&(r=Ua(s)))}else o=n&~i,o!==0?r=Ua(o):s!==0&&(r=Ua(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-In(e),i=1<<n,r|=t[n],e&=~i;return r}function kC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function CC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-In(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=kC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function up(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sT(){var t=Gu;return Gu<<=1,!(Gu&4194240)&&(Gu=64),t}function of(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function tu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-In(e),t[e]=n}function xC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-In(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-In(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function oT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var aT,$m,lT,uT,cT,cp=!1,Hu=[],qr=null,Wr=null,Gr=null,gl=new Map,yl=new Map,Vr=[],bC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tv(t,e){switch(t){case"focusin":case"focusout":qr=null;break;case"dragenter":case"dragleave":Wr=null;break;case"mouseover":case"mouseout":Gr=null;break;case"pointerover":case"pointerout":gl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(e.pointerId)}}function Ea(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ru(e),e!==null&&$m(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function NC(t,e,n,r,i){switch(e){case"focusin":return qr=Ea(qr,t,e,n,r,i),!0;case"dragenter":return Wr=Ea(Wr,t,e,n,r,i),!0;case"mouseover":return Gr=Ea(Gr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return gl.set(s,Ea(gl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,yl.set(s,Ea(yl.get(s)||null,t,e,n,r,i)),!0}return!1}function hT(t){var e=Bi(t.target);if(e!==null){var n=vs(e);if(n!==null){if(e=n.tag,e===13){if(e=ZE(n),e!==null){t.blockedOn=e,cT(t.priority,function(){lT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);sp=r,n.target.dispatchEvent(r),sp=null}else return e=ru(n),e!==null&&$m(e),t.blockedOn=n,!1;e.shift()}return!0}function Sv(t,e,n){mc(t)&&n.delete(e)}function DC(){cp=!1,qr!==null&&mc(qr)&&(qr=null),Wr!==null&&mc(Wr)&&(Wr=null),Gr!==null&&mc(Gr)&&(Gr=null),gl.forEach(Sv),yl.forEach(Sv)}function Ta(t,e){t.blockedOn===e&&(t.blockedOn=null,cp||(cp=!0,Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority,DC)))}function _l(t){function e(i){return Ta(i,t)}if(0<Hu.length){Ta(Hu[0],t);for(var n=1;n<Hu.length;n++){var r=Hu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qr!==null&&Ta(qr,t),Wr!==null&&Ta(Wr,t),Gr!==null&&Ta(Gr,t),gl.forEach(e),yl.forEach(e),n=0;n<Vr.length;n++)r=Vr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Vr.length&&(n=Vr[0],n.blockedOn===null);)hT(n),n.blockedOn===null&&Vr.shift()}var so=mr.ReactCurrentBatchConfig,$c=!0;function VC(t,e,n,r){var i=me,s=so.transition;so.transition=null;try{me=1,qm(t,e,n,r)}finally{me=i,so.transition=s}}function OC(t,e,n,r){var i=me,s=so.transition;so.transition=null;try{me=4,qm(t,e,n,r)}finally{me=i,so.transition=s}}function qm(t,e,n,r){if($c){var i=hp(t,e,n,r);if(i===null)gf(t,e,r,qc,n),Tv(t,r);else if(NC(i,t,e,n,r))r.stopPropagation();else if(Tv(t,r),e&4&&-1<bC.indexOf(t)){for(;i!==null;){var s=ru(i);if(s!==null&&aT(s),s=hp(t,e,n,r),s===null&&gf(t,e,r,qc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else gf(t,e,r,null,n)}}var qc=null;function hp(t,e,n,r){if(qc=null,t=Um(r),t=Bi(t),t!==null)if(e=vs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ZE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qc=t,null}function dT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(EC()){case Bm:return 1;case rT:return 4;case Bc:case TC:return 16;case iT:return 536870912;default:return 16}default:return 16}}var Fr=null,Wm=null,gc=null;function fT(){if(gc)return gc;var t,e=Wm,n=e.length,r,i="value"in Fr?Fr.value:Fr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return gc=i.slice(t,1<r?1-r:void 0)}function yc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qu(){return!0}function Av(){return!1}function tn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qu:Av,this.isPropagationStopped=Av,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qu)},persist:function(){},isPersistent:Qu}),e}var Uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gm=tn(Uo),nu=De({},Uo,{view:0,detail:0}),LC=tn(nu),af,lf,Sa,Dh=De({},nu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Km,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Sa&&(Sa&&t.type==="mousemove"?(af=t.screenX-Sa.screenX,lf=t.screenY-Sa.screenY):lf=af=0,Sa=t),af)},movementY:function(t){return"movementY"in t?t.movementY:lf}}),Pv=tn(Dh),MC=De({},Dh,{dataTransfer:0}),FC=tn(MC),jC=De({},nu,{relatedTarget:0}),uf=tn(jC),UC=De({},Uo,{animationName:0,elapsedTime:0,pseudoElement:0}),BC=tn(UC),zC=De({},Uo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$C=tn(zC),qC=De({},Uo,{data:0}),Rv=tn(qC),WC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=KC[t])?!!e[t]:!1}function Km(){return HC}var QC=De({},nu,{key:function(t){if(t.key){var e=WC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Km,charCode:function(t){return t.type==="keypress"?yc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),YC=tn(QC),JC=De({},Dh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kv=tn(JC),XC=De({},nu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Km}),ZC=tn(XC),ex=De({},Uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),tx=tn(ex),nx=De({},Dh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rx=tn(nx),ix=[9,13,27,32],Hm=ar&&"CompositionEvent"in window,Ya=null;ar&&"documentMode"in document&&(Ya=document.documentMode);var sx=ar&&"TextEvent"in window&&!Ya,pT=ar&&(!Hm||Ya&&8<Ya&&11>=Ya),Cv=" ",xv=!1;function mT(t,e){switch(t){case"keyup":return ix.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ws=!1;function ox(t,e){switch(t){case"compositionend":return gT(e);case"keypress":return e.which!==32?null:(xv=!0,Cv);case"textInput":return t=e.data,t===Cv&&xv?null:t;default:return null}}function ax(t,e){if(Ws)return t==="compositionend"||!Hm&&mT(t,e)?(t=fT(),gc=Wm=Fr=null,Ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return pT&&e.locale!=="ko"?null:e.data;default:return null}}var lx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lx[t.type]:e==="textarea"}function yT(t,e,n,r){HE(r),e=Wc(e,"onChange"),0<e.length&&(n=new Gm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ja=null,vl=null;function ux(t){kT(t,0)}function Vh(t){var e=Hs(t);if(BE(e))return t}function cx(t,e){if(t==="change")return e}var _T=!1;if(ar){var cf;if(ar){var hf="oninput"in document;if(!hf){var Nv=document.createElement("div");Nv.setAttribute("oninput","return;"),hf=typeof Nv.oninput=="function"}cf=hf}else cf=!1;_T=cf&&(!document.documentMode||9<document.documentMode)}function Dv(){Ja&&(Ja.detachEvent("onpropertychange",vT),vl=Ja=null)}function vT(t){if(t.propertyName==="value"&&Vh(vl)){var e=[];yT(e,vl,t,Um(t)),XE(ux,e)}}function hx(t,e,n){t==="focusin"?(Dv(),Ja=e,vl=n,Ja.attachEvent("onpropertychange",vT)):t==="focusout"&&Dv()}function dx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vh(vl)}function fx(t,e){if(t==="click")return Vh(e)}function px(t,e){if(t==="input"||t==="change")return Vh(e)}function mx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Sn=typeof Object.is=="function"?Object.is:mx;function wl(t,e){if(Sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kf.call(e,i)||!Sn(t[i],e[i]))return!1}return!0}function Vv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ov(t,e){var n=Vv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vv(n)}}function wT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?wT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function IT(){for(var t=window,e=Fc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fc(t.document)}return e}function Qm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gx(t){var e=IT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&wT(n.ownerDocument.documentElement,n)){if(r!==null&&Qm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ov(n,s);var o=Ov(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yx=ar&&"documentMode"in document&&11>=document.documentMode,Gs=null,dp=null,Xa=null,fp=!1;function Lv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fp||Gs==null||Gs!==Fc(r)||(r=Gs,"selectionStart"in r&&Qm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xa&&wl(Xa,r)||(Xa=r,r=Wc(dp,"onSelect"),0<r.length&&(e=new Gm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Gs)))}function Yu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ks={animationend:Yu("Animation","AnimationEnd"),animationiteration:Yu("Animation","AnimationIteration"),animationstart:Yu("Animation","AnimationStart"),transitionend:Yu("Transition","TransitionEnd")},df={},ET={};ar&&(ET=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function Oh(t){if(df[t])return df[t];if(!Ks[t])return t;var e=Ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ET)return df[t]=e[n];return t}var TT=Oh("animationend"),ST=Oh("animationiteration"),AT=Oh("animationstart"),PT=Oh("transitionend"),RT=new Map,Mv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pi(t,e){RT.set(t,e),_s(e,[t])}for(var ff=0;ff<Mv.length;ff++){var pf=Mv[ff],_x=pf.toLowerCase(),vx=pf[0].toUpperCase()+pf.slice(1);pi(_x,"on"+vx)}pi(TT,"onAnimationEnd");pi(ST,"onAnimationIteration");pi(AT,"onAnimationStart");pi("dblclick","onDoubleClick");pi("focusin","onFocus");pi("focusout","onBlur");pi(PT,"onTransitionEnd");mo("onMouseEnter",["mouseout","mouseover"]);mo("onMouseLeave",["mouseout","mouseover"]);mo("onPointerEnter",["pointerout","pointerover"]);mo("onPointerLeave",["pointerout","pointerover"]);_s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_s("onBeforeInput",["compositionend","keypress","textInput","paste"]);_s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ba));function Fv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,_C(r,e,void 0,t),t.currentTarget=null}function kT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Fv(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Fv(i,a,c),s=l}}}if(Uc)throw t=lp,Uc=!1,lp=null,t}function Ee(t,e){var n=e[_p];n===void 0&&(n=e[_p]=new Set);var r=t+"__bubble";n.has(r)||(CT(e,t,2,!1),n.add(r))}function mf(t,e,n){var r=0;e&&(r|=4),CT(n,t,r,e)}var Ju="_reactListening"+Math.random().toString(36).slice(2);function Il(t){if(!t[Ju]){t[Ju]=!0,LE.forEach(function(n){n!=="selectionchange"&&(wx.has(n)||mf(n,!1,t),mf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ju]||(e[Ju]=!0,mf("selectionchange",!1,e))}}function CT(t,e,n,r){switch(dT(e)){case 1:var i=VC;break;case 4:i=OC;break;default:i=qm}n=i.bind(null,e,n,t),i=void 0,!ap||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function gf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Bi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}XE(function(){var c=s,d=Um(n),f=[];e:{var g=RT.get(t);if(g!==void 0){var w=Gm,R=t;switch(t){case"keypress":if(yc(n)===0)break e;case"keydown":case"keyup":w=YC;break;case"focusin":R="focus",w=uf;break;case"focusout":R="blur",w=uf;break;case"beforeblur":case"afterblur":w=uf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Pv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=FC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=ZC;break;case TT:case ST:case AT:w=BC;break;case PT:w=tx;break;case"scroll":w=LC;break;case"wheel":w=rx;break;case"copy":case"cut":case"paste":w=$C;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=kv}var k=(e&4)!==0,x=!k&&t==="scroll",E=k?g!==null?g+"Capture":null:g;k=[];for(var v=c,T;v!==null;){T=v;var O=T.stateNode;if(T.tag===5&&O!==null&&(T=O,E!==null&&(O=ml(v,E),O!=null&&k.push(El(v,O,T)))),x)break;v=v.return}0<k.length&&(g=new w(g,R,null,n,d),f.push({event:g,listeners:k}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",g&&n!==sp&&(R=n.relatedTarget||n.fromElement)&&(Bi(R)||R[lr]))break e;if((w||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,w?(R=n.relatedTarget||n.toElement,w=c,R=R?Bi(R):null,R!==null&&(x=vs(R),R!==x||R.tag!==5&&R.tag!==6)&&(R=null)):(w=null,R=c),w!==R)){if(k=Pv,O="onMouseLeave",E="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(k=kv,O="onPointerLeave",E="onPointerEnter",v="pointer"),x=w==null?g:Hs(w),T=R==null?g:Hs(R),g=new k(O,v+"leave",w,n,d),g.target=x,g.relatedTarget=T,O=null,Bi(d)===c&&(k=new k(E,v+"enter",R,n,d),k.target=T,k.relatedTarget=x,O=k),x=O,w&&R)t:{for(k=w,E=R,v=0,T=k;T;T=Ns(T))v++;for(T=0,O=E;O;O=Ns(O))T++;for(;0<v-T;)k=Ns(k),v--;for(;0<T-v;)E=Ns(E),T--;for(;v--;){if(k===E||E!==null&&k===E.alternate)break t;k=Ns(k),E=Ns(E)}k=null}else k=null;w!==null&&jv(f,g,w,k,!1),R!==null&&x!==null&&jv(f,x,R,k,!0)}}e:{if(g=c?Hs(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var j=cx;else if(bv(g))if(_T)j=px;else{j=dx;var F=hx}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=fx);if(j&&(j=j(t,c))){yT(f,j,n,d);break e}F&&F(t,g,c),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&ep(g,"number",g.value)}switch(F=c?Hs(c):window,t){case"focusin":(bv(F)||F.contentEditable==="true")&&(Gs=F,dp=c,Xa=null);break;case"focusout":Xa=dp=Gs=null;break;case"mousedown":fp=!0;break;case"contextmenu":case"mouseup":case"dragend":fp=!1,Lv(f,n,d);break;case"selectionchange":if(yx)break;case"keydown":case"keyup":Lv(f,n,d)}var I;if(Hm)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ws?mT(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(pT&&n.locale!=="ko"&&(Ws||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ws&&(I=fT()):(Fr=d,Wm="value"in Fr?Fr.value:Fr.textContent,Ws=!0)),F=Wc(c,_),0<F.length&&(_=new Rv(_,t,null,n,d),f.push({event:_,listeners:F}),I?_.data=I:(I=gT(n),I!==null&&(_.data=I)))),(I=sx?ox(t,n):ax(t,n))&&(c=Wc(c,"onBeforeInput"),0<c.length&&(d=new Rv("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=I))}kT(f,e)})}function El(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ml(t,n),s!=null&&r.unshift(El(t,s,i)),s=ml(t,e),s!=null&&r.push(El(t,s,i))),t=t.return}return r}function Ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=ml(n,s),l!=null&&o.unshift(El(n,l,a))):i||(l=ml(n,s),l!=null&&o.push(El(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ix=/\r\n?/g,Ex=/\u0000|\uFFFD/g;function Uv(t){return(typeof t=="string"?t:""+t).replace(Ix,`
`).replace(Ex,"")}function Xu(t,e,n){if(e=Uv(e),Uv(t)!==e&&n)throw Error(q(425))}function Gc(){}var pp=null,mp=null;function gp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yp=typeof setTimeout=="function"?setTimeout:void 0,Tx=typeof clearTimeout=="function"?clearTimeout:void 0,Bv=typeof Promise=="function"?Promise:void 0,Sx=typeof queueMicrotask=="function"?queueMicrotask:typeof Bv<"u"?function(t){return Bv.resolve(null).then(t).catch(Ax)}:yp;function Ax(t){setTimeout(function(){throw t})}function yf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),_l(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_l(e)}function Kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bo=Math.random().toString(36).slice(2),xn="__reactFiber$"+Bo,Tl="__reactProps$"+Bo,lr="__reactContainer$"+Bo,_p="__reactEvents$"+Bo,Px="__reactListeners$"+Bo,Rx="__reactHandles$"+Bo;function Bi(t){var e=t[xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[lr]||n[xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zv(t);t!==null;){if(n=t[xn])return n;t=zv(t)}return e}t=n,n=t.parentNode}return null}function ru(t){return t=t[xn]||t[lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(q(33))}function Lh(t){return t[Tl]||null}var vp=[],Qs=-1;function mi(t){return{current:t}}function Se(t){0>Qs||(t.current=vp[Qs],vp[Qs]=null,Qs--)}function ve(t,e){Qs++,vp[Qs]=t.current,t.current=e}var ni={},Et=mi(ni),$t=mi(!1),Xi=ni;function go(t,e){var n=t.type.contextTypes;if(!n)return ni;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qt(t){return t=t.childContextTypes,t!=null}function Kc(){Se($t),Se(Et)}function $v(t,e,n){if(Et.current!==ni)throw Error(q(168));ve(Et,e),ve($t,n)}function xT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(q(108,hC(t)||"Unknown",i));return De({},n,r)}function Hc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ni,Xi=Et.current,ve(Et,t),ve($t,$t.current),!0}function qv(t,e,n){var r=t.stateNode;if(!r)throw Error(q(169));n?(t=xT(t,e,Xi),r.__reactInternalMemoizedMergedChildContext=t,Se($t),Se(Et),ve(Et,t)):Se($t),ve($t,n)}var Xn=null,Mh=!1,_f=!1;function bT(t){Xn===null?Xn=[t]:Xn.push(t)}function kx(t){Mh=!0,bT(t)}function gi(){if(!_f&&Xn!==null){_f=!0;var t=0,e=me;try{var n=Xn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Xn=null,Mh=!1}catch(i){throw Xn!==null&&(Xn=Xn.slice(t+1)),nT(Bm,gi),i}finally{me=e,_f=!1}}return null}var Ys=[],Js=0,Qc=null,Yc=0,rn=[],sn=0,Zi=null,Zn=1,er="";function bi(t,e){Ys[Js++]=Yc,Ys[Js++]=Qc,Qc=t,Yc=e}function NT(t,e,n){rn[sn++]=Zn,rn[sn++]=er,rn[sn++]=Zi,Zi=t;var r=Zn;t=er;var i=32-In(r)-1;r&=~(1<<i),n+=1;var s=32-In(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Zn=1<<32-In(e)+i|n<<i|r,er=s+t}else Zn=1<<s|n<<i|r,er=t}function Ym(t){t.return!==null&&(bi(t,1),NT(t,1,0))}function Jm(t){for(;t===Qc;)Qc=Ys[--Js],Ys[Js]=null,Yc=Ys[--Js],Ys[Js]=null;for(;t===Zi;)Zi=rn[--sn],rn[sn]=null,er=rn[--sn],rn[sn]=null,Zn=rn[--sn],rn[sn]=null}var Jt=null,Qt=null,Ae=!1,wn=null;function DT(t,e){var n=on(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Jt=t,Qt=Kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Jt=t,Qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zi!==null?{id:Zn,overflow:er}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=on(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Jt=t,Qt=null,!0):!1;default:return!1}}function wp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ip(t){if(Ae){var e=Qt;if(e){var n=e;if(!Wv(t,e)){if(wp(t))throw Error(q(418));e=Kr(n.nextSibling);var r=Jt;e&&Wv(t,e)?DT(r,n):(t.flags=t.flags&-4097|2,Ae=!1,Jt=t)}}else{if(wp(t))throw Error(q(418));t.flags=t.flags&-4097|2,Ae=!1,Jt=t}}}function Gv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Jt=t}function Zu(t){if(t!==Jt)return!1;if(!Ae)return Gv(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gp(t.type,t.memoizedProps)),e&&(e=Qt)){if(wp(t))throw VT(),Error(q(418));for(;e;)DT(t,e),e=Kr(e.nextSibling)}if(Gv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qt=Kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qt=null}}else Qt=Jt?Kr(t.stateNode.nextSibling):null;return!0}function VT(){for(var t=Qt;t;)t=Kr(t.nextSibling)}function yo(){Qt=Jt=null,Ae=!1}function Xm(t){wn===null?wn=[t]:wn.push(t)}var Cx=mr.ReactCurrentBatchConfig;function Aa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,t))}return t}function ec(t,e){throw t=Object.prototype.toString.call(e),Error(q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kv(t){var e=t._init;return e(t._payload)}function OT(t){function e(E,v){if(t){var T=E.deletions;T===null?(E.deletions=[v],E.flags|=16):T.push(v)}}function n(E,v){if(!t)return null;for(;v!==null;)e(E,v),v=v.sibling;return null}function r(E,v){for(E=new Map;v!==null;)v.key!==null?E.set(v.key,v):E.set(v.index,v),v=v.sibling;return E}function i(E,v){return E=Jr(E,v),E.index=0,E.sibling=null,E}function s(E,v,T){return E.index=T,t?(T=E.alternate,T!==null?(T=T.index,T<v?(E.flags|=2,v):T):(E.flags|=2,v)):(E.flags|=1048576,v)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,v,T,O){return v===null||v.tag!==6?(v=Af(T,E.mode,O),v.return=E,v):(v=i(v,T),v.return=E,v)}function l(E,v,T,O){var j=T.type;return j===qs?d(E,v,T.props.children,O,T.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Nr&&Kv(j)===v.type)?(O=i(v,T.props),O.ref=Aa(E,v,T),O.return=E,O):(O=Sc(T.type,T.key,T.props,null,E.mode,O),O.ref=Aa(E,v,T),O.return=E,O)}function c(E,v,T,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==T.containerInfo||v.stateNode.implementation!==T.implementation?(v=Pf(T,E.mode,O),v.return=E,v):(v=i(v,T.children||[]),v.return=E,v)}function d(E,v,T,O,j){return v===null||v.tag!==7?(v=Hi(T,E.mode,O,j),v.return=E,v):(v=i(v,T),v.return=E,v)}function f(E,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Af(""+v,E.mode,T),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $u:return T=Sc(v.type,v.key,v.props,null,E.mode,T),T.ref=Aa(E,null,v),T.return=E,T;case $s:return v=Pf(v,E.mode,T),v.return=E,v;case Nr:var O=v._init;return f(E,O(v._payload),T)}if(ja(v)||wa(v))return v=Hi(v,E.mode,T,null),v.return=E,v;ec(E,v)}return null}function g(E,v,T,O){var j=v!==null?v.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return j!==null?null:a(E,v,""+T,O);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case $u:return T.key===j?l(E,v,T,O):null;case $s:return T.key===j?c(E,v,T,O):null;case Nr:return j=T._init,g(E,v,j(T._payload),O)}if(ja(T)||wa(T))return j!==null?null:d(E,v,T,O,null);ec(E,T)}return null}function w(E,v,T,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return E=E.get(T)||null,a(v,E,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case $u:return E=E.get(O.key===null?T:O.key)||null,l(v,E,O,j);case $s:return E=E.get(O.key===null?T:O.key)||null,c(v,E,O,j);case Nr:var F=O._init;return w(E,v,T,F(O._payload),j)}if(ja(O)||wa(O))return E=E.get(T)||null,d(v,E,O,j,null);ec(v,O)}return null}function R(E,v,T,O){for(var j=null,F=null,I=v,_=v=0,S=null;I!==null&&_<T.length;_++){I.index>_?(S=I,I=null):S=I.sibling;var A=g(E,I,T[_],O);if(A===null){I===null&&(I=S);break}t&&I&&A.alternate===null&&e(E,I),v=s(A,v,_),F===null?j=A:F.sibling=A,F=A,I=S}if(_===T.length)return n(E,I),Ae&&bi(E,_),j;if(I===null){for(;_<T.length;_++)I=f(E,T[_],O),I!==null&&(v=s(I,v,_),F===null?j=I:F.sibling=I,F=I);return Ae&&bi(E,_),j}for(I=r(E,I);_<T.length;_++)S=w(I,E,_,T[_],O),S!==null&&(t&&S.alternate!==null&&I.delete(S.key===null?_:S.key),v=s(S,v,_),F===null?j=S:F.sibling=S,F=S);return t&&I.forEach(function(C){return e(E,C)}),Ae&&bi(E,_),j}function k(E,v,T,O){var j=wa(T);if(typeof j!="function")throw Error(q(150));if(T=j.call(T),T==null)throw Error(q(151));for(var F=j=null,I=v,_=v=0,S=null,A=T.next();I!==null&&!A.done;_++,A=T.next()){I.index>_?(S=I,I=null):S=I.sibling;var C=g(E,I,A.value,O);if(C===null){I===null&&(I=S);break}t&&I&&C.alternate===null&&e(E,I),v=s(C,v,_),F===null?j=C:F.sibling=C,F=C,I=S}if(A.done)return n(E,I),Ae&&bi(E,_),j;if(I===null){for(;!A.done;_++,A=T.next())A=f(E,A.value,O),A!==null&&(v=s(A,v,_),F===null?j=A:F.sibling=A,F=A);return Ae&&bi(E,_),j}for(I=r(E,I);!A.done;_++,A=T.next())A=w(I,E,_,A.value,O),A!==null&&(t&&A.alternate!==null&&I.delete(A.key===null?_:A.key),v=s(A,v,_),F===null?j=A:F.sibling=A,F=A);return t&&I.forEach(function(b){return e(E,b)}),Ae&&bi(E,_),j}function x(E,v,T,O){if(typeof T=="object"&&T!==null&&T.type===qs&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case $u:e:{for(var j=T.key,F=v;F!==null;){if(F.key===j){if(j=T.type,j===qs){if(F.tag===7){n(E,F.sibling),v=i(F,T.props.children),v.return=E,E=v;break e}}else if(F.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Nr&&Kv(j)===F.type){n(E,F.sibling),v=i(F,T.props),v.ref=Aa(E,F,T),v.return=E,E=v;break e}n(E,F);break}else e(E,F);F=F.sibling}T.type===qs?(v=Hi(T.props.children,E.mode,O,T.key),v.return=E,E=v):(O=Sc(T.type,T.key,T.props,null,E.mode,O),O.ref=Aa(E,v,T),O.return=E,E=O)}return o(E);case $s:e:{for(F=T.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===T.containerInfo&&v.stateNode.implementation===T.implementation){n(E,v.sibling),v=i(v,T.children||[]),v.return=E,E=v;break e}else{n(E,v);break}else e(E,v);v=v.sibling}v=Pf(T,E.mode,O),v.return=E,E=v}return o(E);case Nr:return F=T._init,x(E,v,F(T._payload),O)}if(ja(T))return R(E,v,T,O);if(wa(T))return k(E,v,T,O);ec(E,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,v!==null&&v.tag===6?(n(E,v.sibling),v=i(v,T),v.return=E,E=v):(n(E,v),v=Af(T,E.mode,O),v.return=E,E=v),o(E)):n(E,v)}return x}var _o=OT(!0),LT=OT(!1),Jc=mi(null),Xc=null,Xs=null,Zm=null;function eg(){Zm=Xs=Xc=null}function tg(t){var e=Jc.current;Se(Jc),t._currentValue=e}function Ep(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function oo(t,e){Xc=t,Zm=Xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(jt=!0),t.firstContext=null)}function hn(t){var e=t._currentValue;if(Zm!==t)if(t={context:t,memoizedValue:e,next:null},Xs===null){if(Xc===null)throw Error(q(308));Xs=t,Xc.dependencies={lanes:0,firstContext:t}}else Xs=Xs.next=t;return e}var zi=null;function ng(t){zi===null?zi=[t]:zi.push(t)}function MT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ng(e)):(n.next=i.next,i.next=n),e.interleaved=n,ur(t,r)}function ur(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Dr=!1;function rg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function FT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ur(t,n)}return i=r.interleaved,i===null?(e.next=e,ng(r)):(e.next=i.next,i.next=e),r.interleaved=e,ur(t,n)}function _c(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zm(t,n)}}function Hv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zc(t,e,n,r){var i=t.updateQueue;Dr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=c=l=null,a=s;do{var g=a.lane,w=a.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var R=t,k=a;switch(g=e,w=n,k.tag){case 1:if(R=k.payload,typeof R=="function"){f=R.call(w,f,g);break e}f=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=k.payload,g=typeof R=="function"?R.call(w,f,g):R,g==null)break e;f=De({},f,g);break e;case 2:Dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else w={eventTime:w,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=w,l=f):d=d.next=w,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ts|=o,t.lanes=o,t.memoizedState=f}}function Qv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var iu={},jn=mi(iu),Sl=mi(iu),Al=mi(iu);function $i(t){if(t===iu)throw Error(q(174));return t}function ig(t,e){switch(ve(Al,e),ve(Sl,t),ve(jn,iu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:np(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=np(e,t)}Se(jn),ve(jn,e)}function vo(){Se(jn),Se(Sl),Se(Al)}function jT(t){$i(Al.current);var e=$i(jn.current),n=np(e,t.type);e!==n&&(ve(Sl,t),ve(jn,n))}function sg(t){Sl.current===t&&(Se(jn),Se(Sl))}var xe=mi(0);function eh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vf=[];function og(){for(var t=0;t<vf.length;t++)vf[t]._workInProgressVersionPrimary=null;vf.length=0}var vc=mr.ReactCurrentDispatcher,wf=mr.ReactCurrentBatchConfig,es=0,be=null,Qe=null,et=null,th=!1,Za=!1,Pl=0,xx=0;function _t(){throw Error(q(321))}function ag(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Sn(t[n],e[n]))return!1;return!0}function lg(t,e,n,r,i,s){if(es=s,be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vc.current=t===null||t.memoizedState===null?Vx:Ox,t=n(r,i),Za){s=0;do{if(Za=!1,Pl=0,25<=s)throw Error(q(301));s+=1,et=Qe=null,e.updateQueue=null,vc.current=Lx,t=n(r,i)}while(Za)}if(vc.current=nh,e=Qe!==null&&Qe.next!==null,es=0,et=Qe=be=null,th=!1,e)throw Error(q(300));return t}function ug(){var t=Pl!==0;return Pl=0,t}function Cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?be.memoizedState=et=t:et=et.next=t,et}function dn(){if(Qe===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var e=et===null?be.memoizedState:et.next;if(e!==null)et=e,Qe=t;else{if(t===null)throw Error(q(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},et===null?be.memoizedState=et=t:et=et.next=t}return et}function Rl(t,e){return typeof e=="function"?e(t):e}function If(t){var e=dn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=Qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((es&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,be.lanes|=d,ts|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Sn(r,e.memoizedState)||(jt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,be.lanes|=s,ts|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ef(t){var e=dn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Sn(s,e.memoizedState)||(jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function UT(){}function BT(t,e){var n=be,r=dn(),i=e(),s=!Sn(r.memoizedState,i);if(s&&(r.memoizedState=i,jt=!0),r=r.queue,cg(qT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,kl(9,$T.bind(null,n,r,i,e),void 0,null),nt===null)throw Error(q(349));es&30||zT(n,e,i)}return i}function zT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $T(t,e,n,r){e.value=n,e.getSnapshot=r,WT(e)&&GT(t)}function qT(t,e,n){return n(function(){WT(e)&&GT(t)})}function WT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Sn(t,n)}catch{return!0}}function GT(t){var e=ur(t,1);e!==null&&En(e,t,1,-1)}function Yv(t){var e=Cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rl,lastRenderedState:t},e.queue=t,t=t.dispatch=Dx.bind(null,be,t),[e.memoizedState,t]}function kl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function KT(){return dn().memoizedState}function wc(t,e,n,r){var i=Cn();be.flags|=t,i.memoizedState=kl(1|e,n,void 0,r===void 0?null:r)}function Fh(t,e,n,r){var i=dn();r=r===void 0?null:r;var s=void 0;if(Qe!==null){var o=Qe.memoizedState;if(s=o.destroy,r!==null&&ag(r,o.deps)){i.memoizedState=kl(e,n,s,r);return}}be.flags|=t,i.memoizedState=kl(1|e,n,s,r)}function Jv(t,e){return wc(8390656,8,t,e)}function cg(t,e){return Fh(2048,8,t,e)}function HT(t,e){return Fh(4,2,t,e)}function QT(t,e){return Fh(4,4,t,e)}function YT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function JT(t,e,n){return n=n!=null?n.concat([t]):null,Fh(4,4,YT.bind(null,e,t),n)}function hg(){}function XT(t,e){var n=dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ag(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ZT(t,e){var n=dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ag(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function e0(t,e,n){return es&21?(Sn(n,e)||(n=sT(),be.lanes|=n,ts|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,jt=!0),t.memoizedState=n)}function bx(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=wf.transition;wf.transition={};try{t(!1),e()}finally{me=n,wf.transition=r}}function t0(){return dn().memoizedState}function Nx(t,e,n){var r=Yr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},n0(t))r0(e,n);else if(n=MT(t,e,n,r),n!==null){var i=Ct();En(n,t,r,i),i0(n,e,r)}}function Dx(t,e,n){var r=Yr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(n0(t))r0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Sn(a,o)){var l=e.interleaved;l===null?(i.next=i,ng(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=MT(t,e,i,r),n!==null&&(i=Ct(),En(n,t,r,i),i0(n,e,r))}}function n0(t){var e=t.alternate;return t===be||e!==null&&e===be}function r0(t,e){Za=th=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function i0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zm(t,n)}}var nh={readContext:hn,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},Vx={readContext:hn,useCallback:function(t,e){return Cn().memoizedState=[t,e===void 0?null:e],t},useContext:hn,useEffect:Jv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wc(4194308,4,YT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wc(4194308,4,t,e)},useInsertionEffect:function(t,e){return wc(4,2,t,e)},useMemo:function(t,e){var n=Cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Nx.bind(null,be,t),[r.memoizedState,t]},useRef:function(t){var e=Cn();return t={current:t},e.memoizedState=t},useState:Yv,useDebugValue:hg,useDeferredValue:function(t){return Cn().memoizedState=t},useTransition:function(){var t=Yv(!1),e=t[0];return t=bx.bind(null,t[1]),Cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=be,i=Cn();if(Ae){if(n===void 0)throw Error(q(407));n=n()}else{if(n=e(),nt===null)throw Error(q(349));es&30||zT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Jv(qT.bind(null,r,s,t),[t]),r.flags|=2048,kl(9,$T.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Cn(),e=nt.identifierPrefix;if(Ae){var n=er,r=Zn;n=(r&~(1<<32-In(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Pl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ox={readContext:hn,useCallback:XT,useContext:hn,useEffect:cg,useImperativeHandle:JT,useInsertionEffect:HT,useLayoutEffect:QT,useMemo:ZT,useReducer:If,useRef:KT,useState:function(){return If(Rl)},useDebugValue:hg,useDeferredValue:function(t){var e=dn();return e0(e,Qe.memoizedState,t)},useTransition:function(){var t=If(Rl)[0],e=dn().memoizedState;return[t,e]},useMutableSource:UT,useSyncExternalStore:BT,useId:t0,unstable_isNewReconciler:!1},Lx={readContext:hn,useCallback:XT,useContext:hn,useEffect:cg,useImperativeHandle:JT,useInsertionEffect:HT,useLayoutEffect:QT,useMemo:ZT,useReducer:Ef,useRef:KT,useState:function(){return Ef(Rl)},useDebugValue:hg,useDeferredValue:function(t){var e=dn();return Qe===null?e.memoizedState=t:e0(e,Qe.memoizedState,t)},useTransition:function(){var t=Ef(Rl)[0],e=dn().memoizedState;return[t,e]},useMutableSource:UT,useSyncExternalStore:BT,useId:t0,unstable_isNewReconciler:!1};function _n(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Tp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jh={isMounted:function(t){return(t=t._reactInternals)?vs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ct(),i=Yr(t),s=sr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Hr(t,s,i),e!==null&&(En(e,t,i,r),_c(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ct(),i=Yr(t),s=sr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hr(t,s,i),e!==null&&(En(e,t,i,r),_c(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ct(),r=Yr(t),i=sr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Hr(t,i,r),e!==null&&(En(e,t,r,n),_c(e,t,r))}};function Xv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!wl(n,r)||!wl(i,s):!0}function s0(t,e,n){var r=!1,i=ni,s=e.contextType;return typeof s=="object"&&s!==null?s=hn(s):(i=qt(e)?Xi:Et.current,r=e.contextTypes,s=(r=r!=null)?go(t,i):ni),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&jh.enqueueReplaceState(e,e.state,null)}function Sp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},rg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=hn(s):(s=qt(e)?Xi:Et.current,i.context=go(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Tp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&jh.enqueueReplaceState(i,i.state,null),Zc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function wo(t,e){try{var n="",r=e;do n+=cC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Tf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ap(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Mx=typeof WeakMap=="function"?WeakMap:Map;function o0(t,e,n){n=sr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ih||(ih=!0,Op=r),Ap(t,e)},n}function a0(t,e,n){n=sr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ap(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ap(t,e),typeof r!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ew(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Mx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Jx.bind(null,t,e,n),e.then(t,t))}function tw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function nw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sr(-1,1),e.tag=2,Hr(n,e,1))),n.lanes|=1),t)}var Fx=mr.ReactCurrentOwner,jt=!1;function Pt(t,e,n,r){e.child=t===null?LT(e,null,n,r):_o(e,t.child,n,r)}function rw(t,e,n,r,i){n=n.render;var s=e.ref;return oo(e,i),r=lg(t,e,n,r,s,i),n=ug(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):(Ae&&n&&Ym(e),e.flags|=1,Pt(t,e,r,i),e.child)}function iw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!vg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,l0(t,e,s,r,i)):(t=Sc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wl,n(o,r)&&t.ref===e.ref)return cr(t,e,i)}return e.flags|=1,t=Jr(s,r),t.ref=e.ref,t.return=e,e.child=t}function l0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(wl(s,r)&&t.ref===e.ref)if(jt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(jt=!0);else return e.lanes=t.lanes,cr(t,e,i)}return Pp(t,e,n,r,i)}function u0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(eo,Kt),Kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(eo,Kt),Kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(eo,Kt),Kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ve(eo,Kt),Kt|=r;return Pt(t,e,i,n),e.child}function c0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pp(t,e,n,r,i){var s=qt(n)?Xi:Et.current;return s=go(e,s),oo(e,i),n=lg(t,e,n,r,s,i),r=ug(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):(Ae&&r&&Ym(e),e.flags|=1,Pt(t,e,n,i),e.child)}function sw(t,e,n,r,i){if(qt(n)){var s=!0;Hc(e)}else s=!1;if(oo(e,i),e.stateNode===null)Ic(t,e),s0(e,n,r),Sp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=hn(c):(c=qt(n)?Xi:Et.current,c=go(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Zv(e,o,r,c),Dr=!1;var g=e.memoizedState;o.state=g,Zc(e,r,o,i),l=e.memoizedState,a!==r||g!==l||$t.current||Dr?(typeof d=="function"&&(Tp(e,n,d,r),l=e.memoizedState),(a=Dr||Xv(e,n,a,r,g,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,FT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:_n(e.type,a),o.props=c,f=e.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=hn(l):(l=qt(n)?Xi:Et.current,l=go(e,l));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||g!==l)&&Zv(e,o,r,l),Dr=!1,g=e.memoizedState,o.state=g,Zc(e,r,o,i);var R=e.memoizedState;a!==f||g!==R||$t.current||Dr?(typeof w=="function"&&(Tp(e,n,w,r),R=e.memoizedState),(c=Dr||Xv(e,n,c,r,g,R,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Rp(t,e,n,r,s,i)}function Rp(t,e,n,r,i,s){c0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&qv(e,n,!1),cr(t,e,s);r=e.stateNode,Fx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=_o(e,t.child,null,s),e.child=_o(e,null,a,s)):Pt(t,e,a,s),e.memoizedState=r.state,i&&qv(e,n,!0),e.child}function h0(t){var e=t.stateNode;e.pendingContext?$v(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$v(t,e.context,!1),ig(t,e.containerInfo)}function ow(t,e,n,r,i){return yo(),Xm(i),e.flags|=256,Pt(t,e,n,r),e.child}var kp={dehydrated:null,treeContext:null,retryLane:0};function Cp(t){return{baseLanes:t,cachePool:null,transitions:null}}function d0(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(xe,i&1),t===null)return Ip(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zh(o,r,0,null),t=Hi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Cp(n),e.memoizedState=kp,t):dg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return jx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Jr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Jr(a,s):(s=Hi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Cp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=kp,r}return s=t.child,t=s.sibling,r=Jr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function dg(t,e){return e=zh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function tc(t,e,n,r){return r!==null&&Xm(r),_o(e,t.child,null,n),t=dg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Tf(Error(q(422))),tc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=zh({mode:"visible",children:r.children},i,0,null),s=Hi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&_o(e,t.child,null,o),e.child.memoizedState=Cp(o),e.memoizedState=kp,s);if(!(e.mode&1))return tc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(q(419)),r=Tf(s,r,void 0),tc(t,e,o,r)}if(a=(o&t.childLanes)!==0,jt||a){if(r=nt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ur(t,i),En(r,t,i,-1))}return _g(),r=Tf(Error(q(421))),tc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Xx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Qt=Kr(i.nextSibling),Jt=e,Ae=!0,wn=null,t!==null&&(rn[sn++]=Zn,rn[sn++]=er,rn[sn++]=Zi,Zn=t.id,er=t.overflow,Zi=e),e=dg(e,r.children),e.flags|=4096,e)}function aw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ep(t.return,e,n)}function Sf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function f0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pt(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&aw(t,n,e);else if(t.tag===19)aw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&eh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&eh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sf(e,!0,n,null,s);break;case"together":Sf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ic(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ts|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(q(153));if(e.child!==null){for(t=e.child,n=Jr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Jr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ux(t,e,n){switch(e.tag){case 3:h0(e),yo();break;case 5:jT(e);break;case 1:qt(e.type)&&Hc(e);break;case 4:ig(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(Jc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?d0(t,e,n):(ve(xe,xe.current&1),t=cr(t,e,n),t!==null?t.sibling:null);ve(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return f0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,u0(t,e,n)}return cr(t,e,n)}var p0,xp,m0,g0;p0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xp=function(){};m0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,$i(jn.current);var s=null;switch(n){case"input":i=Xf(t,i),r=Xf(t,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=tp(t,i),r=tp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Gc)}rp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};g0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Pa(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Bx(t,e,n){var r=e.pendingProps;switch(Jm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(e),null;case 1:return qt(e.type)&&Kc(),vt(e),null;case 3:return r=e.stateNode,vo(),Se($t),Se(Et),og(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,wn!==null&&(Fp(wn),wn=null))),xp(t,e),vt(e),null;case 5:sg(e);var i=$i(Al.current);if(n=e.type,t!==null&&e.stateNode!=null)m0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(q(166));return vt(e),null}if(t=$i(jn.current),Zu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[xn]=e,r[Tl]=s,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<Ba.length;i++)Ee(Ba[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":gv(r,s),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",r);break;case"textarea":_v(r,s),Ee("invalid",r)}rp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xu(r.textContent,a,t),i=["children",""+a]):fl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ee("scroll",r)}switch(n){case"input":qu(r),yv(r,s,!0);break;case"textarea":qu(r),vv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Gc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[xn]=e,t[Tl]=r,p0(t,e,!1,!1),e.stateNode=t;e:{switch(o=ip(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),i=r;break;case"iframe":case"object":case"embed":Ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ba.length;i++)Ee(Ba[i],t);i=r;break;case"source":Ee("error",t),i=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),i=r;break;case"details":Ee("toggle",t),i=r;break;case"input":gv(t,r),i=Xf(t,r),Ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":_v(t,r),i=tp(t,r),Ee("invalid",t);break;default:i=r}rp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?KE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&WE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&pl(t,l):typeof l=="number"&&pl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ee("scroll",t):l!=null&&Lm(t,s,l,o))}switch(n){case"input":qu(t),yv(t,r,!1);break;case"textarea":qu(t),vv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ti(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?no(t,!!r.multiple,s,!1):r.defaultValue!=null&&no(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Gc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return vt(e),null;case 6:if(t&&e.stateNode!=null)g0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(q(166));if(n=$i(Al.current),$i(jn.current),Zu(e)){if(r=e.stateNode,n=e.memoizedProps,r[xn]=e,(s=r.nodeValue!==n)&&(t=Jt,t!==null))switch(t.tag){case 3:Xu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xn]=e,e.stateNode=r}return vt(e),null;case 13:if(Se(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&Qt!==null&&e.mode&1&&!(e.flags&128))VT(),yo(),e.flags|=98560,s=!1;else if(s=Zu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(q(317));s[xn]=e}else yo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;vt(e),s=!1}else wn!==null&&(Fp(wn),wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?Ye===0&&(Ye=3):_g())),e.updateQueue!==null&&(e.flags|=4),vt(e),null);case 4:return vo(),xp(t,e),t===null&&Il(e.stateNode.containerInfo),vt(e),null;case 10:return tg(e.type._context),vt(e),null;case 17:return qt(e.type)&&Kc(),vt(e),null;case 19:if(Se(xe),s=e.memoizedState,s===null)return vt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Pa(s,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=eh(t),o!==null){for(e.flags|=128,Pa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&ze()>Io&&(e.flags|=128,r=!0,Pa(s,!1),e.lanes=4194304)}else{if(!r)if(t=eh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Pa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ae)return vt(e),null}else 2*ze()-s.renderingStartTime>Io&&n!==1073741824&&(e.flags|=128,r=!0,Pa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ze(),e.sibling=null,n=xe.current,ve(xe,r?n&1|2:n&1),e):(vt(e),null);case 22:case 23:return yg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Kt&1073741824&&(vt(e),e.subtreeFlags&6&&(e.flags|=8192)):vt(e),null;case 24:return null;case 25:return null}throw Error(q(156,e.tag))}function zx(t,e){switch(Jm(e),e.tag){case 1:return qt(e.type)&&Kc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vo(),Se($t),Se(Et),og(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sg(e),null;case 13:if(Se(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(q(340));yo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(xe),null;case 4:return vo(),null;case 10:return tg(e.type._context),null;case 22:case 23:return yg(),null;case 24:return null;default:return null}}var nc=!1,It=!1,$x=typeof WeakSet=="function"?WeakSet:Set,J=null;function Zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function bp(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var lw=!1;function qx(t,e){if(pp=$c,t=IT(),Qm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,g=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(w=f.firstChild)!==null;)g=f,f=w;for(;;){if(f===t)break t;if(g===n&&++c===i&&(a=o),g===s&&++d===r&&(l=o),(w=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=w}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mp={focusedElem:t,selectionRange:n},$c=!1,J=e;J!==null;)if(e=J,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,J=t;else for(;J!==null;){e=J;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var k=R.memoizedProps,x=R.memoizedState,E=e.stateNode,v=E.getSnapshotBeforeUpdate(e.elementType===e.type?k:_n(e.type,k),x);E.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(O){Oe(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,J=t;break}J=e.return}return R=lw,lw=!1,R}function el(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&bp(e,n,s)}i=i.next}while(i!==r)}}function Uh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Np(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function y0(t){var e=t.alternate;e!==null&&(t.alternate=null,y0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xn],delete e[Tl],delete e[_p],delete e[Px],delete e[Rx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _0(t){return t.tag===5||t.tag===3||t.tag===4}function uw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gc));else if(r!==4&&(t=t.child,t!==null))for(Dp(t,e,n),t=t.sibling;t!==null;)Dp(t,e,n),t=t.sibling}function Vp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Vp(t,e,n),t=t.sibling;t!==null;)Vp(t,e,n),t=t.sibling}var lt=null,vn=!1;function Pr(t,e,n){for(n=n.child;n!==null;)v0(t,e,n),n=n.sibling}function v0(t,e,n){if(Fn&&typeof Fn.onCommitFiberUnmount=="function")try{Fn.onCommitFiberUnmount(Nh,n)}catch{}switch(n.tag){case 5:It||Zs(n,e);case 6:var r=lt,i=vn;lt=null,Pr(t,e,n),lt=r,vn=i,lt!==null&&(vn?(t=lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):lt.removeChild(n.stateNode));break;case 18:lt!==null&&(vn?(t=lt,n=n.stateNode,t.nodeType===8?yf(t.parentNode,n):t.nodeType===1&&yf(t,n),_l(t)):yf(lt,n.stateNode));break;case 4:r=lt,i=vn,lt=n.stateNode.containerInfo,vn=!0,Pr(t,e,n),lt=r,vn=i;break;case 0:case 11:case 14:case 15:if(!It&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bp(n,e,o),i=i.next}while(i!==r)}Pr(t,e,n);break;case 1:if(!It&&(Zs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,e,a)}Pr(t,e,n);break;case 21:Pr(t,e,n);break;case 22:n.mode&1?(It=(r=It)||n.memoizedState!==null,Pr(t,e,n),It=r):Pr(t,e,n);break;default:Pr(t,e,n)}}function cw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $x),e.forEach(function(r){var i=Zx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:lt=a.stateNode,vn=!1;break e;case 3:lt=a.stateNode.containerInfo,vn=!0;break e;case 4:lt=a.stateNode.containerInfo,vn=!0;break e}a=a.return}if(lt===null)throw Error(q(160));v0(s,o,i),lt=null,vn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Oe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)w0(e,t),e=e.sibling}function w0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yn(e,t),Rn(t),r&4){try{el(3,t,t.return),Uh(3,t)}catch(k){Oe(t,t.return,k)}try{el(5,t,t.return)}catch(k){Oe(t,t.return,k)}}break;case 1:yn(e,t),Rn(t),r&512&&n!==null&&Zs(n,n.return);break;case 5:if(yn(e,t),Rn(t),r&512&&n!==null&&Zs(n,n.return),t.flags&32){var i=t.stateNode;try{pl(i,"")}catch(k){Oe(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&zE(i,s),ip(a,o);var c=ip(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?KE(i,f):d==="dangerouslySetInnerHTML"?WE(i,f):d==="children"?pl(i,f):Lm(i,d,f,c)}switch(a){case"input":Zf(i,s);break;case"textarea":$E(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?no(i,!!s.multiple,w,!1):g!==!!s.multiple&&(s.defaultValue!=null?no(i,!!s.multiple,s.defaultValue,!0):no(i,!!s.multiple,s.multiple?[]:"",!1))}i[Tl]=s}catch(k){Oe(t,t.return,k)}}break;case 6:if(yn(e,t),Rn(t),r&4){if(t.stateNode===null)throw Error(q(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Oe(t,t.return,k)}}break;case 3:if(yn(e,t),Rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_l(e.containerInfo)}catch(k){Oe(t,t.return,k)}break;case 4:yn(e,t),Rn(t);break;case 13:yn(e,t),Rn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(mg=ze())),r&4&&cw(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(It=(c=It)||d,yn(e,t),It=c):yn(e,t),Rn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(J=t,d=t.child;d!==null;){for(f=J=d;J!==null;){switch(g=J,w=g.child,g.tag){case 0:case 11:case 14:case 15:el(4,g,g.return);break;case 1:Zs(g,g.return);var R=g.stateNode;if(typeof R.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(k){Oe(r,n,k)}}break;case 5:Zs(g,g.return);break;case 22:if(g.memoizedState!==null){dw(f);continue}}w!==null?(w.return=g,J=w):dw(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=GE("display",o))}catch(k){Oe(t,t.return,k)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(k){Oe(t,t.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:yn(e,t),Rn(t),r&4&&cw(t);break;case 21:break;default:yn(e,t),Rn(t)}}function Rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_0(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pl(i,""),r.flags&=-33);var s=uw(t);Vp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=uw(t);Dp(t,a,o);break;default:throw Error(q(161))}}catch(l){Oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Wx(t,e,n){J=t,I0(t)}function I0(t,e,n){for(var r=(t.mode&1)!==0;J!==null;){var i=J,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||nc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||It;a=nc;var c=It;if(nc=o,(It=l)&&!c)for(J=i;J!==null;)o=J,l=o.child,o.tag===22&&o.memoizedState!==null?fw(i):l!==null?(l.return=o,J=l):fw(i);for(;s!==null;)J=s,I0(s),s=s.sibling;J=i,nc=a,It=c}hw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,J=s):hw(t)}}function hw(t){for(;J!==null;){var e=J;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:It||Uh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!It)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:_n(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&_l(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}It||e.flags&512&&Np(e)}catch(g){Oe(e,e.return,g)}}if(e===t){J=null;break}if(n=e.sibling,n!==null){n.return=e.return,J=n;break}J=e.return}}function dw(t){for(;J!==null;){var e=J;if(e===t){J=null;break}var n=e.sibling;if(n!==null){n.return=e.return,J=n;break}J=e.return}}function fw(t){for(;J!==null;){var e=J;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uh(4,e)}catch(l){Oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Oe(e,i,l)}}var s=e.return;try{Np(e)}catch(l){Oe(e,s,l)}break;case 5:var o=e.return;try{Np(e)}catch(l){Oe(e,o,l)}}}catch(l){Oe(e,e.return,l)}if(e===t){J=null;break}var a=e.sibling;if(a!==null){a.return=e.return,J=a;break}J=e.return}}var Gx=Math.ceil,rh=mr.ReactCurrentDispatcher,fg=mr.ReactCurrentOwner,un=mr.ReactCurrentBatchConfig,he=0,nt=null,He=null,ht=0,Kt=0,eo=mi(0),Ye=0,Cl=null,ts=0,Bh=0,pg=0,tl=null,Ft=null,mg=0,Io=1/0,Jn=null,ih=!1,Op=null,Qr=null,rc=!1,jr=null,sh=0,nl=0,Lp=null,Ec=-1,Tc=0;function Ct(){return he&6?ze():Ec!==-1?Ec:Ec=ze()}function Yr(t){return t.mode&1?he&2&&ht!==0?ht&-ht:Cx.transition!==null?(Tc===0&&(Tc=sT()),Tc):(t=me,t!==0||(t=window.event,t=t===void 0?16:dT(t.type)),t):1}function En(t,e,n,r){if(50<nl)throw nl=0,Lp=null,Error(q(185));tu(t,n,r),(!(he&2)||t!==nt)&&(t===nt&&(!(he&2)&&(Bh|=n),Ye===4&&Or(t,ht)),Wt(t,r),n===1&&he===0&&!(e.mode&1)&&(Io=ze()+500,Mh&&gi()))}function Wt(t,e){var n=t.callbackNode;CC(t,e);var r=zc(t,t===nt?ht:0);if(r===0)n!==null&&Ev(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ev(n),e===1)t.tag===0?kx(pw.bind(null,t)):bT(pw.bind(null,t)),Sx(function(){!(he&6)&&gi()}),n=null;else{switch(oT(r)){case 1:n=Bm;break;case 4:n=rT;break;case 16:n=Bc;break;case 536870912:n=iT;break;default:n=Bc}n=C0(n,E0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function E0(t,e){if(Ec=-1,Tc=0,he&6)throw Error(q(327));var n=t.callbackNode;if(ao()&&t.callbackNode!==n)return null;var r=zc(t,t===nt?ht:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=oh(t,r);else{e=r;var i=he;he|=2;var s=S0();(nt!==t||ht!==e)&&(Jn=null,Io=ze()+500,Ki(t,e));do try{Qx();break}catch(a){T0(t,a)}while(!0);eg(),rh.current=s,he=i,He!==null?e=0:(nt=null,ht=0,e=Ye)}if(e!==0){if(e===2&&(i=up(t),i!==0&&(r=i,e=Mp(t,i))),e===1)throw n=Cl,Ki(t,0),Or(t,r),Wt(t,ze()),n;if(e===6)Or(t,r);else{if(i=t.current.alternate,!(r&30)&&!Kx(i)&&(e=oh(t,r),e===2&&(s=up(t),s!==0&&(r=s,e=Mp(t,s))),e===1))throw n=Cl,Ki(t,0),Or(t,r),Wt(t,ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(q(345));case 2:Ni(t,Ft,Jn);break;case 3:if(Or(t,r),(r&130023424)===r&&(e=mg+500-ze(),10<e)){if(zc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=yp(Ni.bind(null,t,Ft,Jn),e);break}Ni(t,Ft,Jn);break;case 4:if(Or(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-In(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gx(r/1960))-r,10<r){t.timeoutHandle=yp(Ni.bind(null,t,Ft,Jn),r);break}Ni(t,Ft,Jn);break;case 5:Ni(t,Ft,Jn);break;default:throw Error(q(329))}}}return Wt(t,ze()),t.callbackNode===n?E0.bind(null,t):null}function Mp(t,e){var n=tl;return t.current.memoizedState.isDehydrated&&(Ki(t,e).flags|=256),t=oh(t,e),t!==2&&(e=Ft,Ft=n,e!==null&&Fp(e)),t}function Fp(t){Ft===null?Ft=t:Ft.push.apply(Ft,t)}function Kx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Sn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Or(t,e){for(e&=~pg,e&=~Bh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-In(e),r=1<<n;t[n]=-1,e&=~r}}function pw(t){if(he&6)throw Error(q(327));ao();var e=zc(t,0);if(!(e&1))return Wt(t,ze()),null;var n=oh(t,e);if(t.tag!==0&&n===2){var r=up(t);r!==0&&(e=r,n=Mp(t,r))}if(n===1)throw n=Cl,Ki(t,0),Or(t,e),Wt(t,ze()),n;if(n===6)throw Error(q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ni(t,Ft,Jn),Wt(t,ze()),null}function gg(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(Io=ze()+500,Mh&&gi())}}function ns(t){jr!==null&&jr.tag===0&&!(he&6)&&ao();var e=he;he|=1;var n=un.transition,r=me;try{if(un.transition=null,me=1,t)return t()}finally{me=r,un.transition=n,he=e,!(he&6)&&gi()}}function yg(){Kt=eo.current,Se(eo)}function Ki(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Tx(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(Jm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kc();break;case 3:vo(),Se($t),Se(Et),og();break;case 5:sg(r);break;case 4:vo();break;case 13:Se(xe);break;case 19:Se(xe);break;case 10:tg(r.type._context);break;case 22:case 23:yg()}n=n.return}if(nt=t,He=t=Jr(t.current,null),ht=Kt=e,Ye=0,Cl=null,pg=Bh=ts=0,Ft=tl=null,zi!==null){for(e=0;e<zi.length;e++)if(n=zi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}zi=null}return t}function T0(t,e){do{var n=He;try{if(eg(),vc.current=nh,th){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}th=!1}if(es=0,et=Qe=be=null,Za=!1,Pl=0,fg.current=null,n===null||n.return===null){Ye=1,Cl=e,He=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=tw(o);if(w!==null){w.flags&=-257,nw(w,o,a,s,e),w.mode&1&&ew(s,c,e),e=w,l=c;var R=e.updateQueue;if(R===null){var k=new Set;k.add(l),e.updateQueue=k}else R.add(l);break e}else{if(!(e&1)){ew(s,c,e),_g();break e}l=Error(q(426))}}else if(Ae&&a.mode&1){var x=tw(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),nw(x,o,a,s,e),Xm(wo(l,a));break e}}s=l=wo(l,a),Ye!==4&&(Ye=2),tl===null?tl=[s]:tl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=o0(s,l,e);Hv(s,E);break e;case 1:a=l;var v=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Qr===null||!Qr.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=a0(s,a,e);Hv(s,O);break e}}s=s.return}while(s!==null)}P0(n)}catch(j){e=j,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function S0(){var t=rh.current;return rh.current=nh,t===null?nh:t}function _g(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),nt===null||!(ts&268435455)&&!(Bh&268435455)||Or(nt,ht)}function oh(t,e){var n=he;he|=2;var r=S0();(nt!==t||ht!==e)&&(Jn=null,Ki(t,e));do try{Hx();break}catch(i){T0(t,i)}while(!0);if(eg(),he=n,rh.current=r,He!==null)throw Error(q(261));return nt=null,ht=0,Ye}function Hx(){for(;He!==null;)A0(He)}function Qx(){for(;He!==null&&!wC();)A0(He)}function A0(t){var e=k0(t.alternate,t,Kt);t.memoizedProps=t.pendingProps,e===null?P0(t):He=e,fg.current=null}function P0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zx(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,He=null;return}}else if(n=Bx(n,e,Kt),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Ye===0&&(Ye=5)}function Ni(t,e,n){var r=me,i=un.transition;try{un.transition=null,me=1,Yx(t,e,n,r)}finally{un.transition=i,me=r}return null}function Yx(t,e,n,r){do ao();while(jr!==null);if(he&6)throw Error(q(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(q(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(xC(t,s),t===nt&&(He=nt=null,ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rc||(rc=!0,C0(Bc,function(){return ao(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=un.transition,un.transition=null;var o=me;me=1;var a=he;he|=4,fg.current=null,qx(t,n),w0(n,t),gx(mp),$c=!!pp,mp=pp=null,t.current=n,Wx(n),IC(),he=a,me=o,un.transition=s}else t.current=n;if(rc&&(rc=!1,jr=t,sh=i),s=t.pendingLanes,s===0&&(Qr=null),SC(n.stateNode),Wt(t,ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ih)throw ih=!1,t=Op,Op=null,t;return sh&1&&t.tag!==0&&ao(),s=t.pendingLanes,s&1?t===Lp?nl++:(nl=0,Lp=t):nl=0,gi(),null}function ao(){if(jr!==null){var t=oT(sh),e=un.transition,n=me;try{if(un.transition=null,me=16>t?16:t,jr===null)var r=!1;else{if(t=jr,jr=null,sh=0,he&6)throw Error(q(331));var i=he;for(he|=4,J=t.current;J!==null;){var s=J,o=s.child;if(J.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(J=c;J!==null;){var d=J;switch(d.tag){case 0:case 11:case 15:el(8,d,s)}var f=d.child;if(f!==null)f.return=d,J=f;else for(;J!==null;){d=J;var g=d.sibling,w=d.return;if(y0(d),d===c){J=null;break}if(g!==null){g.return=w,J=g;break}J=w}}}var R=s.alternate;if(R!==null){var k=R.child;if(k!==null){R.child=null;do{var x=k.sibling;k.sibling=null,k=x}while(k!==null)}}J=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,J=o;else e:for(;J!==null;){if(s=J,s.flags&2048)switch(s.tag){case 0:case 11:case 15:el(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,J=E;break e}J=s.return}}var v=t.current;for(J=v;J!==null;){o=J;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,J=T;else e:for(o=v;J!==null;){if(a=J,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Uh(9,a)}}catch(j){Oe(a,a.return,j)}if(a===o){J=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,J=O;break e}J=a.return}}if(he=i,gi(),Fn&&typeof Fn.onPostCommitFiberRoot=="function")try{Fn.onPostCommitFiberRoot(Nh,t)}catch{}r=!0}return r}finally{me=n,un.transition=e}}return!1}function mw(t,e,n){e=wo(n,e),e=o0(t,e,1),t=Hr(t,e,1),e=Ct(),t!==null&&(tu(t,1,e),Wt(t,e))}function Oe(t,e,n){if(t.tag===3)mw(t,t,n);else for(;e!==null;){if(e.tag===3){mw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qr===null||!Qr.has(r))){t=wo(n,t),t=a0(e,t,1),e=Hr(e,t,1),t=Ct(),e!==null&&(tu(e,1,t),Wt(e,t));break}}e=e.return}}function Jx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ct(),t.pingedLanes|=t.suspendedLanes&n,nt===t&&(ht&n)===n&&(Ye===4||Ye===3&&(ht&130023424)===ht&&500>ze()-mg?Ki(t,0):pg|=n),Wt(t,e)}function R0(t,e){e===0&&(t.mode&1?(e=Ku,Ku<<=1,!(Ku&130023424)&&(Ku=4194304)):e=1);var n=Ct();t=ur(t,e),t!==null&&(tu(t,e,n),Wt(t,n))}function Xx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),R0(t,n)}function Zx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(e),R0(t,n)}var k0;k0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return jt=!1,Ux(t,e,n);jt=!!(t.flags&131072)}else jt=!1,Ae&&e.flags&1048576&&NT(e,Yc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ic(t,e),t=e.pendingProps;var i=go(e,Et.current);oo(e,n),i=lg(null,e,r,t,i,n);var s=ug();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(r)?(s=!0,Hc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rg(e),i.updater=jh,e.stateNode=i,i._reactInternals=e,Sp(e,r,t,n),e=Rp(null,e,r,!0,s,n)):(e.tag=0,Ae&&s&&Ym(e),Pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ic(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=tb(r),t=_n(r,t),i){case 0:e=Pp(null,e,r,t,n);break e;case 1:e=sw(null,e,r,t,n);break e;case 11:e=rw(null,e,r,t,n);break e;case 14:e=iw(null,e,r,_n(r.type,t),n);break e}throw Error(q(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),Pp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),sw(t,e,r,i,n);case 3:e:{if(h0(e),t===null)throw Error(q(387));r=e.pendingProps,s=e.memoizedState,i=s.element,FT(t,e),Zc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=wo(Error(q(423)),e),e=ow(t,e,r,n,i);break e}else if(r!==i){i=wo(Error(q(424)),e),e=ow(t,e,r,n,i);break e}else for(Qt=Kr(e.stateNode.containerInfo.firstChild),Jt=e,Ae=!0,wn=null,n=LT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yo(),r===i){e=cr(t,e,n);break e}Pt(t,e,r,n)}e=e.child}return e;case 5:return jT(e),t===null&&Ip(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,gp(r,i)?o=null:s!==null&&gp(r,s)&&(e.flags|=32),c0(t,e),Pt(t,e,o,n),e.child;case 6:return t===null&&Ip(e),null;case 13:return d0(t,e,n);case 4:return ig(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=_o(e,null,r,n):Pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),rw(t,e,r,i,n);case 7:return Pt(t,e,e.pendingProps,n),e.child;case 8:return Pt(t,e,e.pendingProps.children,n),e.child;case 12:return Pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ve(Jc,r._currentValue),r._currentValue=o,s!==null)if(Sn(s.value,o)){if(s.children===i.children&&!$t.current){e=cr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=sr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ep(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(q(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ep(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,oo(e,n),i=hn(i),r=r(i),e.flags|=1,Pt(t,e,r,n),e.child;case 14:return r=e.type,i=_n(r,e.pendingProps),i=_n(r.type,i),iw(t,e,r,i,n);case 15:return l0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),Ic(t,e),e.tag=1,qt(r)?(t=!0,Hc(e)):t=!1,oo(e,n),s0(e,r,i),Sp(e,r,i,n),Rp(null,e,r,!0,t,n);case 19:return f0(t,e,n);case 22:return u0(t,e,n)}throw Error(q(156,e.tag))};function C0(t,e){return nT(t,e)}function eb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(t,e,n,r){return new eb(t,e,n,r)}function vg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tb(t){if(typeof t=="function")return vg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fm)return 11;if(t===jm)return 14}return 2}function Jr(t,e){var n=t.alternate;return n===null?(n=on(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")vg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qs:return Hi(n.children,i,s,e);case Mm:o=8,i|=8;break;case Hf:return t=on(12,n,e,i|2),t.elementType=Hf,t.lanes=s,t;case Qf:return t=on(13,n,e,i),t.elementType=Qf,t.lanes=s,t;case Yf:return t=on(19,n,e,i),t.elementType=Yf,t.lanes=s,t;case jE:return zh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ME:o=10;break e;case FE:o=9;break e;case Fm:o=11;break e;case jm:o=14;break e;case Nr:o=16,r=null;break e}throw Error(q(130,t==null?t:typeof t,""))}return e=on(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Hi(t,e,n,r){return t=on(7,t,r,e),t.lanes=n,t}function zh(t,e,n,r){return t=on(22,t,r,e),t.elementType=jE,t.lanes=n,t.stateNode={isHidden:!1},t}function Af(t,e,n){return t=on(6,t,null,e),t.lanes=n,t}function Pf(t,e,n){return e=on(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function nb(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=of(0),this.expirationTimes=of(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=of(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wg(t,e,n,r,i,s,o,a,l){return t=new nb(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=on(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rg(s),t}function rb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$s,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function x0(t){if(!t)return ni;t=t._reactInternals;e:{if(vs(t)!==t||t.tag!==1)throw Error(q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(q(171))}if(t.tag===1){var n=t.type;if(qt(n))return xT(t,n,e)}return e}function b0(t,e,n,r,i,s,o,a,l){return t=wg(n,r,!0,t,i,s,o,a,l),t.context=x0(null),n=t.current,r=Ct(),i=Yr(n),s=sr(r,i),s.callback=e??null,Hr(n,s,i),t.current.lanes=i,tu(t,i,r),Wt(t,r),t}function $h(t,e,n,r){var i=e.current,s=Ct(),o=Yr(i);return n=x0(n),e.context===null?e.context=n:e.pendingContext=n,e=sr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Hr(i,e,o),t!==null&&(En(t,i,o,s),_c(t,i,o)),o}function ah(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ig(t,e){gw(t,e),(t=t.alternate)&&gw(t,e)}function ib(){return null}var N0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Eg(t){this._internalRoot=t}qh.prototype.render=Eg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(q(409));$h(t,e,null,null)};qh.prototype.unmount=Eg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ns(function(){$h(null,t,null,null)}),e[lr]=null}};function qh(t){this._internalRoot=t}qh.prototype.unstable_scheduleHydration=function(t){if(t){var e=uT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vr.length&&e!==0&&e<Vr[n].priority;n++);Vr.splice(n,0,t),n===0&&hT(t)}};function Tg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yw(){}function sb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ah(o);s.call(c)}}var o=b0(e,r,t,0,null,!1,!1,"",yw);return t._reactRootContainer=o,t[lr]=o.current,Il(t.nodeType===8?t.parentNode:t),ns(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ah(l);a.call(c)}}var l=wg(t,0,!1,null,null,!1,!1,"",yw);return t._reactRootContainer=l,t[lr]=l.current,Il(t.nodeType===8?t.parentNode:t),ns(function(){$h(e,l,n,r)}),l}function Gh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ah(o);a.call(l)}}$h(e,o,t,i)}else o=sb(n,e,t,i,r);return ah(o)}aT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ua(e.pendingLanes);n!==0&&(zm(e,n|1),Wt(e,ze()),!(he&6)&&(Io=ze()+500,gi()))}break;case 13:ns(function(){var r=ur(t,1);if(r!==null){var i=Ct();En(r,t,1,i)}}),Ig(t,1)}};$m=function(t){if(t.tag===13){var e=ur(t,134217728);if(e!==null){var n=Ct();En(e,t,134217728,n)}Ig(t,134217728)}};lT=function(t){if(t.tag===13){var e=Yr(t),n=ur(t,e);if(n!==null){var r=Ct();En(n,t,e,r)}Ig(t,e)}};uT=function(){return me};cT=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};op=function(t,e,n){switch(e){case"input":if(Zf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Lh(r);if(!i)throw Error(q(90));BE(r),Zf(r,i)}}}break;case"textarea":$E(t,n);break;case"select":e=n.value,e!=null&&no(t,!!n.multiple,e,!1)}};YE=gg;JE=ns;var ob={usingClientEntryPoint:!1,Events:[ru,Hs,Lh,HE,QE,gg]},Ra={findFiberByHostInstance:Bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ab={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=eT(t),t===null?null:t.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||ib,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{Nh=ic.inject(ab),Fn=ic}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ob;en.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tg(e))throw Error(q(200));return rb(t,e,null,n)};en.createRoot=function(t,e){if(!Tg(t))throw Error(q(299));var n=!1,r="",i=N0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wg(t,1,!1,null,null,n,!1,r,i),t[lr]=e.current,Il(t.nodeType===8?t.parentNode:t),new Eg(e)};en.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(q(188)):(t=Object.keys(t).join(","),Error(q(268,t)));return t=eT(e),t=t===null?null:t.stateNode,t};en.flushSync=function(t){return ns(t)};en.hydrate=function(t,e,n){if(!Wh(e))throw Error(q(200));return Gh(null,t,e,!0,n)};en.hydrateRoot=function(t,e,n){if(!Tg(t))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=N0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=b0(e,null,t,1,n??null,i,!1,s,o),t[lr]=e.current,Il(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new qh(e)};en.render=function(t,e,n){if(!Wh(e))throw Error(q(200));return Gh(null,t,e,!1,n)};en.unmountComponentAtNode=function(t){if(!Wh(t))throw Error(q(40));return t._reactRootContainer?(ns(function(){Gh(null,null,t,!1,function(){t._reactRootContainer=null,t[lr]=null})}),!0):!1};en.unstable_batchedUpdates=gg;en.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Wh(n))throw Error(q(200));if(t==null||t._reactInternals===void 0)throw Error(q(38));return Gh(t,e,n,!1,r)};en.version="18.3.1-next-f1338f8080-20240426";function D0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D0)}catch(t){console.error(t)}}D0(),DE.exports=en;var lb=DE.exports,V0,_w=lb;V0=_w.createRoot,_w.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xl(){return xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xl.apply(null,arguments)}var Ur;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ur||(Ur={}));const vw="popstate";function ub(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=ws(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),jp("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:lh(s))}function r(i,s){Sg(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return hb(e,n,r,t)}function qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Sg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cb(){return Math.random().toString(36).substr(2,8)}function ww(t,e){return{usr:t.state,key:t.key,idx:e}}function jp(t,e,n,r){return n===void 0&&(n=null),xl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ws(e):e,{state:n,key:e&&e.key||r||cb()})}function lh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ws(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function hb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ur.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(xl({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Ur.Pop;let x=d(),E=x==null?null:x-c;c=x,l&&l({action:a,location:k.location,delta:E})}function g(x,E){a=Ur.Push;let v=jp(k.location,x,E);n&&n(v,x),c=d()+1;let T=ww(v,c),O=k.createHref(v);try{o.pushState(T,"",O)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(O)}s&&l&&l({action:a,location:k.location,delta:1})}function w(x,E){a=Ur.Replace;let v=jp(k.location,x,E);n&&n(v,x),c=d();let T=ww(v,c),O=k.createHref(v);o.replaceState(T,"",O),s&&l&&l({action:a,location:k.location,delta:0})}function R(x){let E=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof x=="string"?x:lh(x);return v=v.replace(/ $/,"%20"),qe(E,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,E)}let k={get action(){return a},get location(){return t(i,o)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(vw,f),l=x,()=>{i.removeEventListener(vw,f),l=null}},createHref(x){return e(i,x)},createURL:R,encodeLocation(x){let E=R(x);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:g,replace:w,go(x){return o.go(x)}};return k}var Iw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Iw||(Iw={}));function db(t,e,n){return n===void 0&&(n="/"),fb(t,e,n)}function fb(t,e,n,r){let i=typeof e=="string"?ws(e):e,s=Ag(i.pathname||"/",n);if(s==null)return null;let o=O0(t);pb(o);let a=null,l=Pb(s);for(let c=0;a==null&&c<o.length;++c)a=Tb(o[c],l);return a}function O0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(qe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Xr([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(qe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),O0(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Ib(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of L0(s.path))i(s,o,l)}),e}function L0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=L0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function pb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Eb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mb=/^:[\w-]+$/,gb=3,yb=2,_b=1,vb=10,wb=-2,Ew=t=>t==="*";function Ib(t,e){let n=t.split("/"),r=n.length;return n.some(Ew)&&(r+=wb),e&&(r+=yb),n.filter(i=>!Ew(i)).reduce((i,s)=>i+(mb.test(s)?gb:s===""?_b:vb),r)}function Eb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Tb(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Sb({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),g=l.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Xr([s,f.pathname]),pathnameBase:Cb(Xr([s,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(s=Xr([s,f.pathnameBase]))}return o}function Sb(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Ab(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:g,isOptional:w}=d;if(g==="*"){let k=a[f]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const R=a[f];return w&&!R?c[g]=void 0:c[g]=(R||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Ab(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Sg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Pb(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Sg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ag(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Rb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ws(t):t,s;return n?(n=M0(n),n.startsWith("/")?s=Tw(n.substring(1),"/"):s=Tw(n,e)):s=e,{pathname:s,search:xb(r),hash:bb(i)}}function Tw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kb(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Pg(t,e){let n=kb(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Rg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ws(t):(i=xl({},t),qe(!i.pathname||!i.pathname.includes("?"),Rf("?","pathname","search",i)),qe(!i.pathname||!i.pathname.includes("#"),Rf("#","pathname","hash",i)),qe(!i.search||!i.search.includes("#"),Rf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}a=f>=0?e[f]:"/"}let l=Rb(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const M0=t=>t.replace(/\/\/+/g,"/"),Xr=t=>M0(t.join("/")),Cb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),xb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,bb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Nb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const F0=["post","put","patch","delete"];new Set(F0);const Db=["get",...F0];new Set(Db);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bl(){return bl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bl.apply(null,arguments)}const kg=V.createContext(null),Vb=V.createContext(null),yi=V.createContext(null),Kh=V.createContext(null),gr=V.createContext({outlet:null,matches:[],isDataRoute:!1}),j0=V.createContext(null);function Ob(t,e){let{relative:n}=e===void 0?{}:e;zo()||qe(!1);let{basename:r,navigator:i}=V.useContext(yi),{hash:s,pathname:o,search:a}=z0(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Xr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function zo(){return V.useContext(Kh)!=null}function _i(){return zo()||qe(!1),V.useContext(Kh).location}function U0(t){V.useContext(yi).static||V.useLayoutEffect(t)}function yr(){let{isDataRoute:t}=V.useContext(gr);return t?Hb():Lb()}function Lb(){zo()||qe(!1);let t=V.useContext(kg),{basename:e,future:n,navigator:r}=V.useContext(yi),{matches:i}=V.useContext(gr),{pathname:s}=_i(),o=JSON.stringify(Pg(i,n.v7_relativeSplatPath)),a=V.useRef(!1);return U0(()=>{a.current=!0}),V.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Rg(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Xr([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}function B0(){let{matches:t}=V.useContext(gr),e=t[t.length-1];return e?e.params:{}}function z0(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=V.useContext(yi),{matches:i}=V.useContext(gr),{pathname:s}=_i(),o=JSON.stringify(Pg(i,r.v7_relativeSplatPath));return V.useMemo(()=>Rg(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Mb(t,e){return Fb(t,e)}function Fb(t,e,n,r){zo()||qe(!1);let{navigator:i}=V.useContext(yi),{matches:s}=V.useContext(gr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=_i(),d;if(e){var f;let x=typeof e=="string"?ws(e):e;l==="/"||(f=x.pathname)!=null&&f.startsWith(l)||qe(!1),d=x}else d=c;let g=d.pathname||"/",w=g;if(l!=="/"){let x=l.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(x.length).join("/")}let R=db(t,{pathname:w}),k=$b(R&&R.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:Xr([l,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Xr([l,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,r);return e&&k?V.createElement(Kh.Provider,{value:{location:bl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Ur.Pop}},k):k}function jb(){let t=Kb(),e=Nb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),n?V.createElement("pre",{style:i},n):null,null)}const Ub=V.createElement(jb,null);class Bb extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?V.createElement(gr.Provider,{value:this.props.routeContext},V.createElement(j0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zb(t){let{routeContext:e,match:n,children:r}=t,i=V.useContext(kg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),V.createElement(gr.Provider,{value:e},r)}function $b(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||qe(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:g,errors:w}=n,R=f.route.loader&&g[f.route.id]===void 0&&(!w||w[f.route.id]===void 0);if(f.route.lazy||R){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,g)=>{let w,R=!1,k=null,x=null;n&&(w=a&&f.route.id?a[f.route.id]:void 0,k=f.route.errorElement||Ub,l&&(c<0&&g===0?(Qb("route-fallback"),R=!0,x=null):c===g&&(R=!0,x=f.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,g+1)),v=()=>{let T;return w?T=k:R?T=x:f.route.Component?T=V.createElement(f.route.Component,null):f.route.element?T=f.route.element:T=d,V.createElement(zb,{match:f,routeContext:{outlet:d,matches:E,isDataRoute:n!=null},children:T})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?V.createElement(Bb,{location:n.location,revalidation:n.revalidation,component:k,error:w,children:v(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):v()},null)}var $0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}($0||{}),q0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(q0||{});function qb(t){let e=V.useContext(kg);return e||qe(!1),e}function Wb(t){let e=V.useContext(Vb);return e||qe(!1),e}function Gb(t){let e=V.useContext(gr);return e||qe(!1),e}function W0(t){let e=Gb(),n=e.matches[e.matches.length-1];return n.route.id||qe(!1),n.route.id}function Kb(){var t;let e=V.useContext(j0),n=Wb(),r=W0();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Hb(){let{router:t}=qb($0.UseNavigateStable),e=W0(q0.UseNavigateStable),n=V.useRef(!1);return U0(()=>{n.current=!0}),V.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,bl({fromRouteId:e},s)))},[t,e])}const Sw={};function Qb(t,e,n){Sw[t]||(Sw[t]=!0)}function Yb(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function G0(t){let{to:e,replace:n,state:r,relative:i}=t;zo()||qe(!1);let{future:s,static:o}=V.useContext(yi),{matches:a}=V.useContext(gr),{pathname:l}=_i(),c=yr(),d=Rg(e,Pg(a,s.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(d);return V.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function br(t){qe(!1)}function Jb(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ur.Pop,navigator:s,static:o=!1,future:a}=t;zo()&&qe(!1);let l=e.replace(/^\/*/,"/"),c=V.useMemo(()=>({basename:l,navigator:s,static:o,future:bl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=ws(r));let{pathname:d="/",search:f="",hash:g="",state:w=null,key:R="default"}=r,k=V.useMemo(()=>{let x=Ag(d,l);return x==null?null:{location:{pathname:x,search:f,hash:g,state:w,key:R},navigationType:i}},[l,d,f,g,w,R,i]);return k==null?null:V.createElement(yi.Provider,{value:c},V.createElement(Kh.Provider,{children:n,value:k}))}function Xb(t){let{children:e,location:n}=t;return Mb(Up(e),n)}new Promise(()=>{});function Up(t,e){e===void 0&&(e=[]);let n=[];return V.Children.forEach(t,(r,i)=>{if(!V.isValidElement(r))return;let s=[...e,i];if(r.type===V.Fragment){n.push.apply(n,Up(r.props.children,s));return}r.type!==br&&qe(!1),!r.props.index||!r.props.children||qe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Up(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bp(){return Bp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bp.apply(null,arguments)}function Zb(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function eN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function tN(t,e){return t.button===0&&(!e||e==="_self")&&!eN(t)}function zp(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function nN(t,e){let n=zp(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const rN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],iN="6";try{window.__reactRouterVersion=iN}catch{}const sN="startTransition",Aw=Jk[sN];function oN(t){let{basename:e,children:n,future:r,window:i}=t,s=V.useRef();s.current==null&&(s.current=ub({window:i,v5Compat:!0}));let o=s.current,[a,l]=V.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=V.useCallback(f=>{c&&Aw?Aw(()=>l(f)):l(f)},[l,c]);return V.useLayoutEffect(()=>o.listen(d),[o,d]),V.useEffect(()=>Yb(r),[r]),V.createElement(Jb,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const aN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Br=V.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:d,viewTransition:f}=e,g=Zb(e,rN),{basename:w}=V.useContext(yi),R,k=!1;if(typeof c=="string"&&lN.test(c)&&(R=c,aN))try{let T=new URL(window.location.href),O=c.startsWith("//")?new URL(T.protocol+c):new URL(c),j=Ag(O.pathname,w);O.origin===T.origin&&j!=null?c=j+O.search+O.hash:k=!0}catch{}let x=Ob(c,{relative:i}),E=uN(c,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:f});function v(T){r&&r(T),T.defaultPrevented||E(T)}return V.createElement("a",Bp({},g,{href:R||x,onClick:k||s?r:v,ref:n,target:l}))});var Pw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Pw||(Pw={}));var Rw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Rw||(Rw={}));function uN(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=yr(),c=_i(),d=z0(t,{relative:o});return V.useCallback(f=>{if(tN(f,n)){f.preventDefault();let g=r!==void 0?r:lh(c)===lh(d);l(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,d,r,i,n,t,s,o,a])}function cN(t){let e=V.useRef(zp(t)),n=V.useRef(!1),r=_i(),i=V.useMemo(()=>nN(r.search,n.current?null:e.current),[r.search]),s=yr(),o=V.useCallback((a,l)=>{const c=zp(typeof a=="function"?a(i):a);n.current=!0,s("?"+c,l)},[s,i]);return[i,o]}var kw={};/**
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
 */const K0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},H0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let g=(a&15)<<2|c>>6,w=c&63;l||(w=64,o||(g=64)),r.push(n[d],n[f],n[g],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(K0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new dN;const g=s<<2|a>>4;if(r.push(g),c!==64){const w=a<<4&240|c>>2;if(r.push(w),f!==64){const R=c<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fN=function(t){const e=K0(t);return H0.encodeByteArray(e,!0)},uh=function(t){return fN(t).replace(/\./g,"")},Q0=function(t){try{return H0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ch(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!pN(n)||(t[n]=ch(t[n],e[n]));return t}function pN(t){return t!=="__proto__"}/**
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
 */function mN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gN=()=>mN().__FIREBASE_DEFAULTS__,yN=()=>{if(typeof process>"u"||typeof kw>"u")return;const t=kw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_N=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Q0(t[1]);return e&&JSON.parse(e)},Cg=()=>{try{return gN()||yN()||_N()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Y0=()=>{var t;return(t=Cg())===null||t===void 0?void 0:t.config},vN=t=>{var e;return(e=Cg())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class wN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function IN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[uh(JSON.stringify(n)),uh(JSON.stringify(o)),""].join(".")}/**
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
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function EN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function xg(){var t;const e=(t=Cg())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function J0(){return typeof self=="object"&&self.self===self}function X0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Z0(){const t=Ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eS(){return!xg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nl(){try{return typeof indexedDB=="object"}catch{return!1}}function TN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const SN="FirebaseError";class xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SN,Object.setPrototypeOf(this,xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Is.prototype.create)}}class Is{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?AN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xt(i,a,r)}}function AN(t,e){return t.replace(PN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const PN=/\{\$([^}]+)}/g;/**
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
 */function Cw(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function RN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(xw(s)&&xw(o)){if(!Dl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xw(t){return t!==null&&typeof t=="object"}/**
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
 */function $o(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function to(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function za(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tS(t,e){const n=new kN(t,e);return n.subscribe.bind(n)}class kN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");CN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=kf),i.error===void 0&&(i.error=kf),i.complete===void 0&&(i.complete=kf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kf(){}/**
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
 */function ne(t){return t&&t._delegate?t._delegate:t}class zn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Di="[DEFAULT]";/**
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
 */class xN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NN(e))try{this.getOrInitializeService({instanceIdentifier:Di})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Di){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Di){return this.instances.has(e)}getOptions(e=Di){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Di){return this.component?this.component.multipleInstances?e:Di:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bN(t){return t===Di?void 0:t}function NN(t){return t.instantiationMode==="EAGER"}/**
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
 */class nS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Ng=[];var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const rS={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},DN=oe.INFO,VN={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},ON=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=VN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hh{constructor(e){this.name=e,this._logLevel=DN,this._logHandler=ON,this._userLogHandler=null,Ng.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}function LN(t){Ng.forEach(e=>{e.setLogLevel(t)})}function MN(t,e){for(const n of Ng){let r=null;e&&e.level&&(r=rS[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:oe[s].toLowerCase(),message:a,args:o,type:i.name})}}}const FN=(t,e)=>e.some(n=>t instanceof n);let bw,Nw;function jN(){return bw||(bw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UN(){return Nw||(Nw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iS=new WeakMap,$p=new WeakMap,sS=new WeakMap,Cf=new WeakMap,Dg=new WeakMap;function BN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Zr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&iS.set(n,t)}).catch(()=>{}),Dg.set(e,t),e}function zN(t){if($p.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});$p.set(t,e)}let qp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $p.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $N(t){qp=t(qp)}function qN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xf(this),e,...n);return sS.set(r,e.sort?e.sort():[e]),Zr(r)}:UN().includes(t)?function(...e){return t.apply(xf(this),e),Zr(iS.get(this))}:function(...e){return Zr(t.apply(xf(this),e))}}function WN(t){return typeof t=="function"?qN(t):(t instanceof IDBTransaction&&zN(t),FN(t,jN())?new Proxy(t,qp):t)}function Zr(t){if(t instanceof IDBRequest)return BN(t);if(Cf.has(t))return Cf.get(t);const e=WN(t);return e!==t&&(Cf.set(t,e),Dg.set(e,t)),e}const xf=t=>Dg.get(t);function GN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Zr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Zr(o.result),l.oldVersion,l.newVersion,Zr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const KN=["get","getKey","getAll","getAllKeys","count"],HN=["put","add","delete","clear"],bf=new Map;function Dw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bf.get(e))return bf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=HN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||KN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return bf.set(e,s),s}$N(t=>({...t,get:(e,n,r)=>Dw(e,n)||t.get(e,n,r),has:(e,n)=>!!Dw(e,n)||t.has(e,n)}));/**
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
 */class QN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function YN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hh="@firebase/app",Wp="0.10.5";/**
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
 */const rs=new Hh("@firebase/app"),JN="@firebase/app-compat",XN="@firebase/analytics-compat",ZN="@firebase/analytics",e1="@firebase/app-check-compat",t1="@firebase/app-check",n1="@firebase/auth",r1="@firebase/auth-compat",i1="@firebase/database",s1="@firebase/database-compat",o1="@firebase/functions",a1="@firebase/functions-compat",l1="@firebase/installations",u1="@firebase/installations-compat",c1="@firebase/messaging",h1="@firebase/messaging-compat",d1="@firebase/performance",f1="@firebase/performance-compat",p1="@firebase/remote-config",m1="@firebase/remote-config-compat",g1="@firebase/storage",y1="@firebase/storage-compat",_1="@firebase/firestore",v1="@firebase/vertexai-preview",w1="@firebase/firestore-compat",I1="firebase",E1="10.12.2";/**
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
 */const ri="[DEFAULT]",T1={[hh]:"fire-core",[JN]:"fire-core-compat",[ZN]:"fire-analytics",[XN]:"fire-analytics-compat",[t1]:"fire-app-check",[e1]:"fire-app-check-compat",[n1]:"fire-auth",[r1]:"fire-auth-compat",[i1]:"fire-rtdb",[s1]:"fire-rtdb-compat",[o1]:"fire-fn",[a1]:"fire-fn-compat",[l1]:"fire-iid",[u1]:"fire-iid-compat",[c1]:"fire-fcm",[h1]:"fire-fcm-compat",[d1]:"fire-perf",[f1]:"fire-perf-compat",[p1]:"fire-rc",[m1]:"fire-rc-compat",[g1]:"fire-gcs",[y1]:"fire-gcs-compat",[_1]:"fire-fst",[w1]:"fire-fst-compat",[v1]:"fire-vertex","fire-js":"fire-js",[I1]:"fire-js-all"};/**
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
 */const ii=new Map,Eo=new Map,To=new Map;function Vl(t,e){try{t.container.addComponent(e)}catch(n){rs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function oS(t,e){t.container.addOrOverwriteComponent(e)}function si(t){const e=t.name;if(To.has(e))return rs.debug(`There were multiple attempts to register component ${e}.`),!1;To.set(e,t);for(const n of ii.values())Vl(n,t);for(const n of Eo.values())Vl(n,t);return!0}function aS(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function S1(t,e,n=ri){aS(t,e).clearInstance(n)}function lS(t){return t.options!==void 0}function Me(t){return t.settings!==void 0}function A1(){To.clear()}/**
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
 */const P1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cn=new Is("app","Firebase",P1);/**
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
 */let uS=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cn.create("app-deleted",{appName:this._name})}};/**
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
 */class R1 extends uS{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,Tn(hh,Wp,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Og(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw cn.create("server-app-deleted")}}/**
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
 */const vi=E1;function Vg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ri,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw cn.create("bad-app-name",{appName:String(i)});if(n||(n=Y0()),!n)throw cn.create("no-options");const s=ii.get(i);if(s){if(Dl(n,s.options)&&Dl(r,s.config))return s;throw cn.create("duplicate-app",{appName:i})}const o=new nS(i);for(const l of To.values())o.addComponent(l);const a=new uS(n,r,o);return ii.set(i,a),a}function k1(t,e){if(J0())throw cn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;lS(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((d,f)=>Math.imul(31,d)+f.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw cn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=Eo.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new nS(s);for(const c of To.values())a.addComponent(c);const l=new R1(n,e,s,a);return Eo.set(s,l),l}function C1(t=ri){const e=ii.get(t);if(!e&&t===ri&&Y0())return Vg();if(!e)throw cn.create("no-app",{appName:t});return e}function x1(){return Array.from(ii.values())}async function Og(t){let e=!1;const n=t.name;ii.has(n)?(e=!0,ii.delete(n)):Eo.has(n)&&t.decRefCount()<=0&&(Eo.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function Tn(t,e,n){var r;let i=(r=T1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rs.warn(a.join(" "));return}si(new zn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function cS(t,e){if(t!==null&&typeof t!="function")throw cn.create("invalid-log-argument");MN(t,e)}function hS(t){LN(t)}/**
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
 */const b1="firebase-heartbeat-database",N1=1,Ol="firebase-heartbeat-store";let Nf=null;function dS(){return Nf||(Nf=GN(b1,N1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ol)}catch(n){console.warn(n)}}}}).catch(t=>{throw cn.create("idb-open",{originalErrorMessage:t.message})})),Nf}async function D1(t){try{const n=(await dS()).transaction(Ol),r=await n.objectStore(Ol).get(fS(t));return await n.done,r}catch(e){if(e instanceof xt)rs.warn(e.message);else{const n=cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rs.warn(n.message)}}}async function Vw(t,e){try{const r=(await dS()).transaction(Ol,"readwrite");await r.objectStore(Ol).put(e,fS(t)),await r.done}catch(n){if(n instanceof xt)rs.warn(n.message);else{const r=cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rs.warn(r.message)}}}function fS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const V1=1024,O1=30*24*60*60*1e3;class L1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new F1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ow();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=O1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ow(),{heartbeatsToSend:r,unsentEntries:i}=M1(this._heartbeatsCache.heartbeats),s=uh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ow(){return new Date().toISOString().substring(0,10)}function M1(t,e=V1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Lw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Lw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class F1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nl()?TN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await D1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Lw(t){return uh(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function j1(t){si(new zn("platform-logger",e=>new QN(e),"PRIVATE")),si(new zn("heartbeat",e=>new L1(e),"PRIVATE")),Tn(hh,Wp,t),Tn(hh,Wp,"esm2017"),Tn("fire-js","")}j1("");const U1=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:xt,SDK_VERSION:vi,_DEFAULT_ENTRY_NAME:ri,_addComponent:Vl,_addOrOverwriteComponent:oS,_apps:ii,_clearComponents:A1,_components:To,_getProvider:aS,_isFirebaseApp:lS,_isFirebaseServerApp:Me,_registerComponent:si,_removeServiceInstance:S1,_serverApps:Eo,deleteApp:Og,getApp:C1,getApps:x1,initializeApp:Vg,initializeServerApp:k1,onLog:cS,registerVersion:Tn,setLogLevel:hS},Symbol.toStringTag,{value:"Module"}));/**
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
 */class B1{constructor(e,n){this._delegate=e,this.firebase=n,Vl(e,new zn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Og(this._delegate)))}_getService(e,n=ri){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=ri){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Vl(this._delegate,e)}_addOrOverwriteComponent(e){oS(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const z1={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Mw=new Is("app-compat","Firebase",z1);/**
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
 */function $1(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Tn,setLogLevel:hS,onLog:cS,apps:null,SDK_VERSION:vi,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:U1}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||ri,!Cw(e,c))throw Mw.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,d={}){const f=Vg(c,d);if(Cw(e,f.name))return e[f.name];const g=new t(f,n);return e[f.name]=g,g}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const d=c.name,f=d.replace("-compat","");if(si(c)&&c.type==="PUBLIC"){const g=(w=i())=>{if(typeof w[f]!="function")throw Mw.create("invalid-app-argument",{appName:d});return w[f]()};c.serviceProps!==void 0&&ch(g,c.serviceProps),n[f]=g,t.prototype[f]=function(...w){return this._getService.bind(this,d).apply(this,c.multipleInstances?w:[])}}return c.type==="PUBLIC"?n[f]:null}function l(c,d){return d==="serverAuth"?null:d}return n}/**
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
 */function pS(){const t=$1(B1);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:pS,extendNamespace:e,createSubscribe:tS,ErrorFactory:Is,deepExtend:ch});function e(n){ch(t,n)}return t}const q1=pS();/**
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
 */const Fw=new Hh("@firebase/app-compat"),W1="@firebase/app-compat",G1="0.2.35";/**
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
 */function K1(t){Tn(W1,G1,t)}/**
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
 */if(J0()&&self.firebase!==void 0){Fw.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Fw.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const an=q1;K1();var H1="firebase",Q1="10.12.2";/**
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
 */an.registerVersion(H1,Q1,"app-compat");var jw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qi,mS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function S(){}S.prototype=_.prototype,I.D=_.prototype,I.prototype=new S,I.prototype.constructor=I,I.C=function(A,C,b){for(var P=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)P[pt-2]=arguments[pt];return _.prototype[C].apply(A,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,_,S){S||(S=0);var A=Array(16);if(typeof _=="string")for(var C=0;16>C;++C)A[C]=_.charCodeAt(S++)|_.charCodeAt(S++)<<8|_.charCodeAt(S++)<<16|_.charCodeAt(S++)<<24;else for(C=0;16>C;++C)A[C]=_[S++]|_[S++]<<8|_[S++]<<16|_[S++]<<24;_=I.g[0],S=I.g[1],C=I.g[2];var b=I.g[3],P=_+(b^S&(C^b))+A[0]+3614090360&4294967295;_=S+(P<<7&4294967295|P>>>25),P=b+(C^_&(S^C))+A[1]+3905402710&4294967295,b=_+(P<<12&4294967295|P>>>20),P=C+(S^b&(_^S))+A[2]+606105819&4294967295,C=b+(P<<17&4294967295|P>>>15),P=S+(_^C&(b^_))+A[3]+3250441966&4294967295,S=C+(P<<22&4294967295|P>>>10),P=_+(b^S&(C^b))+A[4]+4118548399&4294967295,_=S+(P<<7&4294967295|P>>>25),P=b+(C^_&(S^C))+A[5]+1200080426&4294967295,b=_+(P<<12&4294967295|P>>>20),P=C+(S^b&(_^S))+A[6]+2821735955&4294967295,C=b+(P<<17&4294967295|P>>>15),P=S+(_^C&(b^_))+A[7]+4249261313&4294967295,S=C+(P<<22&4294967295|P>>>10),P=_+(b^S&(C^b))+A[8]+1770035416&4294967295,_=S+(P<<7&4294967295|P>>>25),P=b+(C^_&(S^C))+A[9]+2336552879&4294967295,b=_+(P<<12&4294967295|P>>>20),P=C+(S^b&(_^S))+A[10]+4294925233&4294967295,C=b+(P<<17&4294967295|P>>>15),P=S+(_^C&(b^_))+A[11]+2304563134&4294967295,S=C+(P<<22&4294967295|P>>>10),P=_+(b^S&(C^b))+A[12]+1804603682&4294967295,_=S+(P<<7&4294967295|P>>>25),P=b+(C^_&(S^C))+A[13]+4254626195&4294967295,b=_+(P<<12&4294967295|P>>>20),P=C+(S^b&(_^S))+A[14]+2792965006&4294967295,C=b+(P<<17&4294967295|P>>>15),P=S+(_^C&(b^_))+A[15]+1236535329&4294967295,S=C+(P<<22&4294967295|P>>>10),P=_+(C^b&(S^C))+A[1]+4129170786&4294967295,_=S+(P<<5&4294967295|P>>>27),P=b+(S^C&(_^S))+A[6]+3225465664&4294967295,b=_+(P<<9&4294967295|P>>>23),P=C+(_^S&(b^_))+A[11]+643717713&4294967295,C=b+(P<<14&4294967295|P>>>18),P=S+(b^_&(C^b))+A[0]+3921069994&4294967295,S=C+(P<<20&4294967295|P>>>12),P=_+(C^b&(S^C))+A[5]+3593408605&4294967295,_=S+(P<<5&4294967295|P>>>27),P=b+(S^C&(_^S))+A[10]+38016083&4294967295,b=_+(P<<9&4294967295|P>>>23),P=C+(_^S&(b^_))+A[15]+3634488961&4294967295,C=b+(P<<14&4294967295|P>>>18),P=S+(b^_&(C^b))+A[4]+3889429448&4294967295,S=C+(P<<20&4294967295|P>>>12),P=_+(C^b&(S^C))+A[9]+568446438&4294967295,_=S+(P<<5&4294967295|P>>>27),P=b+(S^C&(_^S))+A[14]+3275163606&4294967295,b=_+(P<<9&4294967295|P>>>23),P=C+(_^S&(b^_))+A[3]+4107603335&4294967295,C=b+(P<<14&4294967295|P>>>18),P=S+(b^_&(C^b))+A[8]+1163531501&4294967295,S=C+(P<<20&4294967295|P>>>12),P=_+(C^b&(S^C))+A[13]+2850285829&4294967295,_=S+(P<<5&4294967295|P>>>27),P=b+(S^C&(_^S))+A[2]+4243563512&4294967295,b=_+(P<<9&4294967295|P>>>23),P=C+(_^S&(b^_))+A[7]+1735328473&4294967295,C=b+(P<<14&4294967295|P>>>18),P=S+(b^_&(C^b))+A[12]+2368359562&4294967295,S=C+(P<<20&4294967295|P>>>12),P=_+(S^C^b)+A[5]+4294588738&4294967295,_=S+(P<<4&4294967295|P>>>28),P=b+(_^S^C)+A[8]+2272392833&4294967295,b=_+(P<<11&4294967295|P>>>21),P=C+(b^_^S)+A[11]+1839030562&4294967295,C=b+(P<<16&4294967295|P>>>16),P=S+(C^b^_)+A[14]+4259657740&4294967295,S=C+(P<<23&4294967295|P>>>9),P=_+(S^C^b)+A[1]+2763975236&4294967295,_=S+(P<<4&4294967295|P>>>28),P=b+(_^S^C)+A[4]+1272893353&4294967295,b=_+(P<<11&4294967295|P>>>21),P=C+(b^_^S)+A[7]+4139469664&4294967295,C=b+(P<<16&4294967295|P>>>16),P=S+(C^b^_)+A[10]+3200236656&4294967295,S=C+(P<<23&4294967295|P>>>9),P=_+(S^C^b)+A[13]+681279174&4294967295,_=S+(P<<4&4294967295|P>>>28),P=b+(_^S^C)+A[0]+3936430074&4294967295,b=_+(P<<11&4294967295|P>>>21),P=C+(b^_^S)+A[3]+3572445317&4294967295,C=b+(P<<16&4294967295|P>>>16),P=S+(C^b^_)+A[6]+76029189&4294967295,S=C+(P<<23&4294967295|P>>>9),P=_+(S^C^b)+A[9]+3654602809&4294967295,_=S+(P<<4&4294967295|P>>>28),P=b+(_^S^C)+A[12]+3873151461&4294967295,b=_+(P<<11&4294967295|P>>>21),P=C+(b^_^S)+A[15]+530742520&4294967295,C=b+(P<<16&4294967295|P>>>16),P=S+(C^b^_)+A[2]+3299628645&4294967295,S=C+(P<<23&4294967295|P>>>9),P=_+(C^(S|~b))+A[0]+4096336452&4294967295,_=S+(P<<6&4294967295|P>>>26),P=b+(S^(_|~C))+A[7]+1126891415&4294967295,b=_+(P<<10&4294967295|P>>>22),P=C+(_^(b|~S))+A[14]+2878612391&4294967295,C=b+(P<<15&4294967295|P>>>17),P=S+(b^(C|~_))+A[5]+4237533241&4294967295,S=C+(P<<21&4294967295|P>>>11),P=_+(C^(S|~b))+A[12]+1700485571&4294967295,_=S+(P<<6&4294967295|P>>>26),P=b+(S^(_|~C))+A[3]+2399980690&4294967295,b=_+(P<<10&4294967295|P>>>22),P=C+(_^(b|~S))+A[10]+4293915773&4294967295,C=b+(P<<15&4294967295|P>>>17),P=S+(b^(C|~_))+A[1]+2240044497&4294967295,S=C+(P<<21&4294967295|P>>>11),P=_+(C^(S|~b))+A[8]+1873313359&4294967295,_=S+(P<<6&4294967295|P>>>26),P=b+(S^(_|~C))+A[15]+4264355552&4294967295,b=_+(P<<10&4294967295|P>>>22),P=C+(_^(b|~S))+A[6]+2734768916&4294967295,C=b+(P<<15&4294967295|P>>>17),P=S+(b^(C|~_))+A[13]+1309151649&4294967295,S=C+(P<<21&4294967295|P>>>11),P=_+(C^(S|~b))+A[4]+4149444226&4294967295,_=S+(P<<6&4294967295|P>>>26),P=b+(S^(_|~C))+A[11]+3174756917&4294967295,b=_+(P<<10&4294967295|P>>>22),P=C+(_^(b|~S))+A[2]+718787259&4294967295,C=b+(P<<15&4294967295|P>>>17),P=S+(b^(C|~_))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(C+(P<<21&4294967295|P>>>11))&4294967295,I.g[2]=I.g[2]+C&4294967295,I.g[3]=I.g[3]+b&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var S=_-this.blockSize,A=this.B,C=this.h,b=0;b<_;){if(C==0)for(;b<=S;)i(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<_;)if(A[C++]=I.charCodeAt(b++),C==this.blockSize){i(this,A),C=0;break}}else for(;b<_;)if(A[C++]=I[b++],C==this.blockSize){i(this,A),C=0;break}}this.h=C,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var S=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=S&255,S/=256;for(this.u(I),I=Array(16),_=S=0;4>_;++_)for(var A=0;32>A;A+=8)I[S++]=this.g[_]>>>A&255;return I};function s(I,_){var S=a;return Object.prototype.hasOwnProperty.call(S,I)?S[I]:S[I]=_(I)}function o(I,_){this.h=_;for(var S=[],A=!0,C=I.length-1;0<=C;C--){var b=I[C]|0;A&&b==_||(S[C]=b,A=!1)}this.g=S}var a={};function l(I){return-128<=I&&128>I?s(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return x(c(-I));for(var _=[],S=1,A=0;I>=S;A++)_[A]=I/S|0,S*=4294967296;return new o(_,0)}function d(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return x(d(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(_,8)),A=f,C=0;C<I.length;C+=8){var b=Math.min(8,I.length-C),P=parseInt(I.substring(C,C+b),_);8>b?(b=c(Math.pow(_,b)),A=A.j(b).add(c(P))):(A=A.j(S),A=A.add(c(P)))}return A}var f=l(0),g=l(1),w=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-x(this).m();for(var I=0,_=1,S=0;S<this.g.length;S++){var A=this.i(S);I+=(0<=A?A:4294967296+A)*_,_*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(k(this))return"-"+x(this).toString(I);for(var _=c(Math.pow(I,6)),S=this,A="";;){var C=O(S,_).g;S=E(S,C.j(_));var b=((0<S.g.length?S.g[0]:S.h)>>>0).toString(I);if(S=C,R(S))return b+A;for(;6>b.length;)b="0"+b;A=b+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function k(I){return I.h==-1}t.l=function(I){return I=E(this,I),k(I)?-1:R(I)?0:1};function x(I){for(var _=I.g.length,S=[],A=0;A<_;A++)S[A]=~I.g[A];return new o(S,~I.h).add(g)}t.abs=function(){return k(this)?x(this):this},t.add=function(I){for(var _=Math.max(this.g.length,I.g.length),S=[],A=0,C=0;C<=_;C++){var b=A+(this.i(C)&65535)+(I.i(C)&65535),P=(b>>>16)+(this.i(C)>>>16)+(I.i(C)>>>16);A=P>>>16,b&=65535,P&=65535,S[C]=P<<16|b}return new o(S,S[S.length-1]&-2147483648?-1:0)};function E(I,_){return I.add(x(_))}t.j=function(I){if(R(this)||R(I))return f;if(k(this))return k(I)?x(this).j(x(I)):x(x(this).j(I));if(k(I))return x(this.j(x(I)));if(0>this.l(w)&&0>I.l(w))return c(this.m()*I.m());for(var _=this.g.length+I.g.length,S=[],A=0;A<2*_;A++)S[A]=0;for(A=0;A<this.g.length;A++)for(var C=0;C<I.g.length;C++){var b=this.i(A)>>>16,P=this.i(A)&65535,pt=I.i(C)>>>16,pn=I.i(C)&65535;S[2*A+2*C]+=P*pn,v(S,2*A+2*C),S[2*A+2*C+1]+=b*pn,v(S,2*A+2*C+1),S[2*A+2*C+1]+=P*pt,v(S,2*A+2*C+1),S[2*A+2*C+2]+=b*pt,v(S,2*A+2*C+2)}for(A=0;A<_;A++)S[A]=S[2*A+1]<<16|S[2*A];for(A=_;A<2*_;A++)S[A]=0;return new o(S,0)};function v(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function T(I,_){this.g=I,this.h=_}function O(I,_){if(R(_))throw Error("division by zero");if(R(I))return new T(f,f);if(k(I))return _=O(x(I),_),new T(x(_.g),x(_.h));if(k(_))return _=O(I,x(_)),new T(x(_.g),_.h);if(30<I.g.length){if(k(I)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var S=g,A=_;0>=A.l(I);)S=j(S),A=j(A);var C=F(S,1),b=F(A,1);for(A=F(A,2),S=F(S,2);!R(A);){var P=b.add(A);0>=P.l(I)&&(C=C.add(S),b=P),A=F(A,1),S=F(S,1)}return _=E(I,C.j(_)),new T(C,_)}for(C=f;0<=I.l(_);){for(S=Math.max(1,Math.floor(I.m()/_.m())),A=Math.ceil(Math.log(S)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),b=c(S),P=b.j(_);k(P)||0<P.l(I);)S-=A,b=c(S),P=b.j(_);R(b)&&(b=g),C=C.add(b),I=E(I,P)}return new T(C,I)}t.A=function(I){return O(this,I).h},t.and=function(I){for(var _=Math.max(this.g.length,I.g.length),S=[],A=0;A<_;A++)S[A]=this.i(A)&I.i(A);return new o(S,this.h&I.h)},t.or=function(I){for(var _=Math.max(this.g.length,I.g.length),S=[],A=0;A<_;A++)S[A]=this.i(A)|I.i(A);return new o(S,this.h|I.h)},t.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),S=[],A=0;A<_;A++)S[A]=this.i(A)^I.i(A);return new o(S,this.h^I.h)};function j(I){for(var _=I.g.length+1,S=[],A=0;A<_;A++)S[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(S,I.h)}function F(I,_){var S=_>>5;_%=32;for(var A=I.g.length-S,C=[],b=0;b<A;b++)C[b]=0<_?I.i(b+S)>>>_|I.i(b+S+1)<<32-_:I.i(b+S);return new o(C,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,mS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Qi=o}).apply(typeof jw<"u"?jw:typeof self<"u"?self:typeof window<"u"?window:{});var sc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gS,yS,$a,_S,Ac,Gp,vS,wS,IS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,h,p){return u==Array.prototype||u==Object.prototype||(u[h]=p.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof sc=="object"&&sc];for(var h=0;h<u.length;++h){var p=u[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(u,h){if(h)e:{var p=r;u=u.split(".");for(var y=0;y<u.length-1;y++){var N=u[y];if(!(N in p))break e;p=p[N]}u=u[u.length-1],y=p[u],h=h(y),h!=y&&h!=null&&e(p,u,{configurable:!0,writable:!0,value:h})}}function s(u,h){u instanceof String&&(u+="");var p=0,y=!1,N={next:function(){if(!y&&p<u.length){var M=p++;return{value:h(M,u[M]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(u){return u||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var h=typeof u;return h=h!="object"?h:u?Array.isArray(u)?"array":h:"null",h=="array"||h=="object"&&typeof u.length=="number"}function c(u){var h=typeof u;return h=="object"&&u!=null||h=="function"}function d(u,h,p){return u.call.apply(u.bind,arguments)}function f(u,h,p){if(!u)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,y),u.apply(h,N)}}return function(){return u.apply(h,arguments)}}function g(u,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,g.apply(null,arguments)}function w(u,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),u.apply(this,y)}}function R(u,h){function p(){}p.prototype=h.prototype,u.aa=h.prototype,u.prototype=new p,u.prototype.constructor=u,u.Qb=function(y,N,M){for(var G=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)G[_e-2]=arguments[_e];return h.prototype[N].apply(y,G)}}function k(u){const h=u.length;if(0<h){const p=Array(h);for(let y=0;y<h;y++)p[y]=u[y];return p}return[]}function x(u,h){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(l(y)){const N=u.length||0,M=y.length||0;u.length=N+M;for(let G=0;G<M;G++)u[N+G]=y[G]}else u.push(y)}}class E{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(u){return/^[\s\xa0]*$/.test(u)}function T(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function O(u){return O[" "](u),u}O[" "]=function(){};var j=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function F(u,h,p){for(const y in u)h.call(p,u[y],y,u)}function I(u,h){for(const p in u)h.call(void 0,u[p],p,u)}function _(u){const h={};for(const p in u)h[p]=u[p];return h}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(u,h){let p,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(p in y)u[p]=y[p];for(let M=0;M<S.length;M++)p=S[M],Object.prototype.hasOwnProperty.call(y,p)&&(u[p]=y[p])}}function C(u){var h=1;u=u.split(":");const p=[];for(;0<h&&u.length;)p.push(u.shift()),h--;return u.length&&p.push(u.join(":")),p}function b(u){a.setTimeout(()=>{throw u},0)}function P(){var u=U;let h=null;return u.g&&(h=u.g,u.g=u.g.next,u.g||(u.h=null),h.next=null),h}class pt{constructor(){this.h=this.g=null}add(h,p){const y=pn.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var pn=new E(()=>new mn,u=>u.reset());class mn{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let X,$=!1,U=new pt,K=()=>{const u=a.Promise.resolve(void 0);X=()=>{u.then(te)}};var te=()=>{for(var u;u=P();){try{u.h.call(u.g)}catch(p){b(p)}var h=pn;h.j(u),100>h.h&&(h.h++,u.next=h.g,h.g=u)}$=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(u,h){this.type=u,this.g=this.target=h,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var Tt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,h=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return u}();function Gn(u,h){if(ge.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var p=this.type=u.type,y=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=h,h=u.relatedTarget){if(j){e:{try{O(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else p=="mouseover"?h=u.fromElement:p=="mouseout"&&(h=u.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Kn[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Gn.aa.h.call(this)}}R(Gn,ge);var Kn={2:"touch",3:"pen",4:"mouse"};Gn.prototype.h=function(){Gn.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Hn="closure_listenable_"+(1e6*Math.random()|0),nk=0;function rk(u,h,p,y,N){this.listener=u,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=N,this.key=++nk,this.da=this.fa=!1}function Au(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Pu(u){this.src=u,this.g={},this.h=0}Pu.prototype.add=function(u,h,p,y,N){var M=u.toString();u=this.g[M],u||(u=this.g[M]=[],this.h++);var G=Nd(u,h,y,N);return-1<G?(h=u[G],p||(h.fa=!1)):(h=new rk(h,this.src,M,!!y,N),h.fa=p,u.push(h)),h};function bd(u,h){var p=h.type;if(p in u.g){var y=u.g[p],N=Array.prototype.indexOf.call(y,h,void 0),M;(M=0<=N)&&Array.prototype.splice.call(y,N,1),M&&(Au(h),u.g[p].length==0&&(delete u.g[p],u.h--))}}function Nd(u,h,p,y){for(var N=0;N<u.length;++N){var M=u[N];if(!M.da&&M.listener==h&&M.capture==!!p&&M.ha==y)return N}return-1}var Dd="closure_lm_"+(1e6*Math.random()|0),Vd={};function h_(u,h,p,y,N){if(Array.isArray(h)){for(var M=0;M<h.length;M++)h_(u,h[M],p,y,N);return null}return p=p_(p),u&&u[Hn]?u.K(h,p,c(y)?!!y.capture:!1,N):ik(u,h,p,!1,y,N)}function ik(u,h,p,y,N,M){if(!h)throw Error("Invalid event type");var G=c(N)?!!N.capture:!!N,_e=Ld(u);if(_e||(u[Dd]=_e=new Pu(u)),p=_e.add(h,p,y,G,M),p.proxy)return p;if(y=sk(),p.proxy=y,y.src=u,y.listener=p,u.addEventListener)Tt||(N=G),N===void 0&&(N=!1),u.addEventListener(h.toString(),y,N);else if(u.attachEvent)u.attachEvent(f_(h.toString()),y);else if(u.addListener&&u.removeListener)u.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function sk(){function u(p){return h.call(u.src,u.listener,p)}const h=ok;return u}function d_(u,h,p,y,N){if(Array.isArray(h))for(var M=0;M<h.length;M++)d_(u,h[M],p,y,N);else y=c(y)?!!y.capture:!!y,p=p_(p),u&&u[Hn]?(u=u.i,h=String(h).toString(),h in u.g&&(M=u.g[h],p=Nd(M,p,y,N),-1<p&&(Au(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete u.g[h],u.h--)))):u&&(u=Ld(u))&&(h=u.g[h.toString()],u=-1,h&&(u=Nd(h,p,y,N)),(p=-1<u?h[u]:null)&&Od(p))}function Od(u){if(typeof u!="number"&&u&&!u.da){var h=u.src;if(h&&h[Hn])bd(h.i,u);else{var p=u.type,y=u.proxy;h.removeEventListener?h.removeEventListener(p,y,u.capture):h.detachEvent?h.detachEvent(f_(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=Ld(h))?(bd(p,u),p.h==0&&(p.src=null,h[Dd]=null)):Au(u)}}}function f_(u){return u in Vd?Vd[u]:Vd[u]="on"+u}function ok(u,h){if(u.da)u=!0;else{h=new Gn(h,this);var p=u.listener,y=u.ha||u.src;u.fa&&Od(u),u=p.call(y,h)}return u}function Ld(u){return u=u[Dd],u instanceof Pu?u:null}var Md="__closure_events_fn_"+(1e9*Math.random()>>>0);function p_(u){return typeof u=="function"?u:(u[Md]||(u[Md]=function(h){return u.handleEvent(h)}),u[Md])}function mt(){se.call(this),this.i=new Pu(this),this.M=this,this.F=null}R(mt,se),mt.prototype[Hn]=!0,mt.prototype.removeEventListener=function(u,h,p,y){d_(this,u,h,p,y)};function St(u,h){var p,y=u.F;if(y)for(p=[];y;y=y.F)p.push(y);if(u=u.M,y=h.type||h,typeof h=="string")h=new ge(h,u);else if(h instanceof ge)h.target=h.target||u;else{var N=h;h=new ge(y,u),A(h,N)}if(N=!0,p)for(var M=p.length-1;0<=M;M--){var G=h.g=p[M];N=Ru(G,y,!0,h)&&N}if(G=h.g=u,N=Ru(G,y,!0,h)&&N,N=Ru(G,y,!1,h)&&N,p)for(M=0;M<p.length;M++)G=h.g=p[M],N=Ru(G,y,!1,h)&&N}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var u=this.i,h;for(h in u.g){for(var p=u.g[h],y=0;y<p.length;y++)Au(p[y]);delete u.g[h],u.h--}}this.F=null},mt.prototype.K=function(u,h,p,y){return this.i.add(String(u),h,!1,p,y)},mt.prototype.L=function(u,h,p,y){return this.i.add(String(u),h,!0,p,y)};function Ru(u,h,p,y){if(h=u.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,M=0;M<h.length;++M){var G=h[M];if(G&&!G.da&&G.capture==p){var _e=G.listener,at=G.ha||G.src;G.fa&&bd(u.i,G),N=_e.call(at,y)!==!1&&N}}return N&&!y.defaultPrevented}function m_(u,h,p){if(typeof u=="function")p&&(u=g(u,p));else if(u&&typeof u.handleEvent=="function")u=g(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(u,h||0)}function g_(u){u.g=m_(()=>{u.g=null,u.i&&(u.i=!1,g_(u))},u.l);const h=u.h;u.h=null,u.m.apply(null,h)}class ak extends se{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:g_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oa(u){se.call(this),this.h=u,this.g={}}R(oa,se);var y_=[];function __(u){F(u.g,function(h,p){this.g.hasOwnProperty(p)&&Od(h)},u),u.g={}}oa.prototype.N=function(){oa.aa.N.call(this),__(this)},oa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fd=a.JSON.stringify,lk=a.JSON.parse,uk=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function jd(){}jd.prototype.h=null;function v_(u){return u.h||(u.h=u.i())}function w_(){}var aa={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ud(){ge.call(this,"d")}R(Ud,ge);function Bd(){ge.call(this,"c")}R(Bd,ge);var Ai={},I_=null;function ku(){return I_=I_||new mt}Ai.La="serverreachability";function E_(u){ge.call(this,Ai.La,u)}R(E_,ge);function la(u){const h=ku();St(h,new E_(h))}Ai.STAT_EVENT="statevent";function T_(u,h){ge.call(this,Ai.STAT_EVENT,u),this.stat=h}R(T_,ge);function At(u){const h=ku();St(h,new T_(h,u))}Ai.Ma="timingevent";function S_(u,h){ge.call(this,Ai.Ma,u),this.size=h}R(S_,ge);function ua(u,h){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},h)}function ca(){this.g=!0}ca.prototype.xa=function(){this.g=!1};function ck(u,h,p,y,N,M){u.info(function(){if(u.g)if(M)for(var G="",_e=M.split("&"),at=0;at<_e.length;at++){var fe=_e[at].split("=");if(1<fe.length){var gt=fe[0];fe=fe[1];var yt=gt.split("_");G=2<=yt.length&&yt[1]=="type"?G+(gt+"="+fe+"&"):G+(gt+"=redacted&")}}else G=null;else G=M;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+h+`
`+p+`
`+G})}function hk(u,h,p,y,N,M,G){u.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+h+`
`+p+`
`+M+" "+G})}function ks(u,h,p,y){u.info(function(){return"XMLHTTP TEXT ("+h+"): "+fk(u,p)+(y?" "+y:"")})}function dk(u,h){u.info(function(){return"TIMEOUT: "+h})}ca.prototype.info=function(){};function fk(u,h){if(!u.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(u=0;u<p.length;u++)if(Array.isArray(p[u])){var y=p[u];if(!(2>y.length)){var N=y[1];if(Array.isArray(N)&&!(1>N.length)){var M=N[0];if(M!="noop"&&M!="stop"&&M!="close")for(var G=1;G<N.length;G++)N[G]=""}}}}return Fd(p)}catch{return h}}var Cu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},A_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zd;function xu(){}R(xu,jd),xu.prototype.g=function(){return new XMLHttpRequest},xu.prototype.i=function(){return{}},zd=new xu;function Tr(u,h,p,y){this.j=u,this.i=h,this.l=p,this.R=y||1,this.U=new oa(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new P_}function P_(){this.i=null,this.g="",this.h=!1}var R_={},$d={};function qd(u,h,p){u.L=1,u.v=Vu(Qn(h)),u.m=p,u.P=!0,k_(u,null)}function k_(u,h){u.F=Date.now(),bu(u),u.A=Qn(u.v);var p=u.A,y=u.R;Array.isArray(y)||(y=[String(y)]),z_(p.i,"t",y),u.C=0,p=u.j.J,u.h=new P_,u.g=ov(u.j,p?h:null,!u.m),0<u.O&&(u.M=new ak(g(u.Y,u,u.g),u.O)),h=u.U,p=u.g,y=u.ca;var N="readystatechange";Array.isArray(N)||(N&&(y_[0]=N.toString()),N=y_);for(var M=0;M<N.length;M++){var G=h_(p,N[M],y||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=u.H?_(u.H):{},u.m?(u.u||(u.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,h)):(u.u="GET",u.g.ea(u.A,u.u,null,h)),la(),ck(u.i,u.u,u.A,u.l,u.R,u.m)}Tr.prototype.ca=function(u){u=u.target;const h=this.M;h&&Yn(u)==3?h.j():this.Y(u)},Tr.prototype.Y=function(u){try{if(u==this.g)e:{const yt=Yn(this.g);var h=this.g.Ba();const bs=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||Q_(this.g)))){this.J||yt!=4||h==7||(h==8||0>=bs?la(3):la(2)),Wd(this);var p=this.g.Z();this.X=p;t:if(C_(this)){var y=Q_(this.g);u="";var N=y.length,M=Yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pi(this),ha(this);var G="";break t}this.h.i=new a.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,u+=this.h.i.decode(y[h],{stream:!(M&&h==N-1)});y.length=0,this.h.g+=u,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=p==200,hk(this.i,this.u,this.A,this.l,this.R,yt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,at=this.g;if((_e=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(_e)){var fe=_e;break t}}fe=null}if(p=fe)ks(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gd(this,p);else{this.o=!1,this.s=3,At(12),Pi(this),ha(this);break e}}if(this.P){p=!0;let gn;for(;!this.J&&this.C<G.length;)if(gn=pk(this,G),gn==$d){yt==4&&(this.s=4,At(14),p=!1),ks(this.i,this.l,null,"[Incomplete Response]");break}else if(gn==R_){this.s=4,At(15),ks(this.i,this.l,G,"[Invalid Chunk]"),p=!1;break}else ks(this.i,this.l,gn,null),Gd(this,gn);if(C_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||G.length!=0||this.h.h||(this.s=1,At(16),p=!1),this.o=this.o&&p,!p)ks(this.i,this.l,G,"[Invalid Chunked Response]"),Pi(this),ha(this);else if(0<G.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Xd(gt),gt.M=!0,At(11))}}else ks(this.i,this.l,G,null),Gd(this,G);yt==4&&Pi(this),this.o&&!this.J&&(yt==4?nv(this.j,this):(this.o=!1,bu(this)))}else bk(this.g),p==400&&0<G.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),Pi(this),ha(this)}}}catch{}finally{}};function C_(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function pk(u,h){var p=u.C,y=h.indexOf(`
`,p);return y==-1?$d:(p=Number(h.substring(p,y)),isNaN(p)?R_:(y+=1,y+p>h.length?$d:(h=h.slice(y,y+p),u.C=y+p,h)))}Tr.prototype.cancel=function(){this.J=!0,Pi(this)};function bu(u){u.S=Date.now()+u.I,x_(u,u.I)}function x_(u,h){if(u.B!=null)throw Error("WatchDog timer not null");u.B=ua(g(u.ba,u),h)}function Wd(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Tr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(dk(this.i,this.A),this.L!=2&&(la(),At(17)),Pi(this),this.s=2,ha(this)):x_(this,this.S-u)};function ha(u){u.j.G==0||u.J||nv(u.j,u)}function Pi(u){Wd(u);var h=u.M;h&&typeof h.ma=="function"&&h.ma(),u.M=null,__(u.U),u.g&&(h=u.g,u.g=null,h.abort(),h.ma())}function Gd(u,h){try{var p=u.j;if(p.G!=0&&(p.g==u||Kd(p.h,u))){if(!u.K&&Kd(p.h,u)&&p.G==3){try{var y=p.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<u.F)ju(p),Mu(p);else break e;Jd(p),At(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=ua(g(p.Za,p),6e3));if(1>=D_(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ki(p,11)}else if((u.K||p.g==u)&&ju(p),!v(h))for(N=p.Da.g.parse(h),h=0;h<N.length;h++){let fe=N[h];if(p.T=fe[0],fe=fe[1],p.G==2)if(fe[0]=="c"){p.K=fe[1],p.ia=fe[2];const gt=fe[3];gt!=null&&(p.la=gt,p.j.info("VER="+p.la));const yt=fe[4];yt!=null&&(p.Aa=yt,p.j.info("SVER="+p.Aa));const bs=fe[5];bs!=null&&typeof bs=="number"&&0<bs&&(y=1.5*bs,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const gn=u.g;if(gn){const Bu=gn.g?gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bu){var M=y.h;M.g||Bu.indexOf("spdy")==-1&&Bu.indexOf("quic")==-1&&Bu.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Hd(M,M.h),M.h=null))}if(y.D){const Zd=gn.g?gn.g.getResponseHeader("X-HTTP-Session-Id"):null;Zd&&(y.ya=Zd,Ie(y.I,y.D,Zd))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-u.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var G=u;if(y.qa=sv(y,y.J?y.ia:null,y.W),G.K){V_(y.h,G);var _e=G,at=y.L;at&&(_e.I=at),_e.B&&(Wd(_e),bu(_e)),y.g=G}else ev(y);0<p.i.length&&Fu(p)}else fe[0]!="stop"&&fe[0]!="close"||ki(p,7);else p.G==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?ki(p,7):Yd(p):fe[0]!="noop"&&p.l&&p.l.ta(fe),p.v=0)}}la(4)}catch{}}var mk=class{constructor(u,h){this.g=u,this.map=h}};function b_(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function N_(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function D_(u){return u.h?1:u.g?u.g.size:0}function Kd(u,h){return u.h?u.h==h:u.g?u.g.has(h):!1}function Hd(u,h){u.g?u.g.add(h):u.h=h}function V_(u,h){u.h&&u.h==h?u.h=null:u.g&&u.g.has(h)&&u.g.delete(h)}b_.prototype.cancel=function(){if(this.i=O_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function O_(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let h=u.i;for(const p of u.g.values())h=h.concat(p.D);return h}return k(u.i)}function gk(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var h=[],p=u.length,y=0;y<p;y++)h.push(u[y]);return h}h=[],p=0;for(y in u)h[p++]=u[y];return h}function yk(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var h=[];u=u.length;for(var p=0;p<u;p++)h.push(p);return h}h=[],p=0;for(const y in u)h[p++]=y;return h}}}function L_(u,h){if(u.forEach&&typeof u.forEach=="function")u.forEach(h,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,h,void 0);else for(var p=yk(u),y=gk(u),N=y.length,M=0;M<N;M++)h.call(void 0,y[M],p&&p[M],u)}var M_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _k(u,h){if(u){u=u.split("&");for(var p=0;p<u.length;p++){var y=u[p].indexOf("="),N=null;if(0<=y){var M=u[p].substring(0,y);N=u[p].substring(y+1)}else M=u[p];h(M,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Ri(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ri){this.h=u.h,Nu(this,u.j),this.o=u.o,this.g=u.g,Du(this,u.s),this.l=u.l;var h=u.i,p=new pa;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),F_(this,p),this.m=u.m}else u&&(h=String(u).match(M_))?(this.h=!1,Nu(this,h[1]||"",!0),this.o=da(h[2]||""),this.g=da(h[3]||"",!0),Du(this,h[4]),this.l=da(h[5]||"",!0),F_(this,h[6]||"",!0),this.m=da(h[7]||"")):(this.h=!1,this.i=new pa(null,this.h))}Ri.prototype.toString=function(){var u=[],h=this.j;h&&u.push(fa(h,j_,!0),":");var p=this.g;return(p||h=="file")&&(u.push("//"),(h=this.o)&&u.push(fa(h,j_,!0),"@"),u.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&u.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&u.push("/"),u.push(fa(p,p.charAt(0)=="/"?Ik:wk,!0))),(p=this.i.toString())&&u.push("?",p),(p=this.m)&&u.push("#",fa(p,Tk)),u.join("")};function Qn(u){return new Ri(u)}function Nu(u,h,p){u.j=p?da(h,!0):h,u.j&&(u.j=u.j.replace(/:$/,""))}function Du(u,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);u.s=h}else u.s=null}function F_(u,h,p){h instanceof pa?(u.i=h,Sk(u.i,u.h)):(p||(h=fa(h,Ek)),u.i=new pa(h,u.h))}function Ie(u,h,p){u.i.set(h,p)}function Vu(u){return Ie(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function da(u,h){return u?h?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function fa(u,h,p){return typeof u=="string"?(u=encodeURI(u).replace(h,vk),p&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function vk(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var j_=/[#\/\?@]/g,wk=/[#\?:]/g,Ik=/[#\?]/g,Ek=/[#\?@]/g,Tk=/#/g;function pa(u,h){this.h=this.g=null,this.i=u||null,this.j=!!h}function Sr(u){u.g||(u.g=new Map,u.h=0,u.i&&_k(u.i,function(h,p){u.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=pa.prototype,t.add=function(u,h){Sr(this),this.i=null,u=Cs(this,u);var p=this.g.get(u);return p||this.g.set(u,p=[]),p.push(h),this.h+=1,this};function U_(u,h){Sr(u),h=Cs(u,h),u.g.has(h)&&(u.i=null,u.h-=u.g.get(h).length,u.g.delete(h))}function B_(u,h){return Sr(u),h=Cs(u,h),u.g.has(h)}t.forEach=function(u,h){Sr(this),this.g.forEach(function(p,y){p.forEach(function(N){u.call(h,N,y,this)},this)},this)},t.na=function(){Sr(this);const u=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let y=0;y<h.length;y++){const N=u[y];for(let M=0;M<N.length;M++)p.push(h[y])}return p},t.V=function(u){Sr(this);let h=[];if(typeof u=="string")B_(this,u)&&(h=h.concat(this.g.get(Cs(this,u))));else{u=Array.from(this.g.values());for(let p=0;p<u.length;p++)h=h.concat(u[p])}return h},t.set=function(u,h){return Sr(this),this.i=null,u=Cs(this,u),B_(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[h]),this.h+=1,this},t.get=function(u,h){return u?(u=this.V(u),0<u.length?String(u[0]):h):h};function z_(u,h,p){U_(u,h),0<p.length&&(u.i=null,u.g.set(Cs(u,h),k(p)),u.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var y=h[p];const M=encodeURIComponent(String(y)),G=this.V(y);for(y=0;y<G.length;y++){var N=M;G[y]!==""&&(N+="="+encodeURIComponent(String(G[y]))),u.push(N)}}return this.i=u.join("&")};function Cs(u,h){return h=String(h),u.j&&(h=h.toLowerCase()),h}function Sk(u,h){h&&!u.j&&(Sr(u),u.i=null,u.g.forEach(function(p,y){var N=y.toLowerCase();y!=N&&(U_(this,y),z_(this,N,p))},u)),u.j=h}function Ak(u,h){const p=new ca;if(a.Image){const y=new Image;y.onload=w(Ar,p,"TestLoadImage: loaded",!0,h,y),y.onerror=w(Ar,p,"TestLoadImage: error",!1,h,y),y.onabort=w(Ar,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=w(Ar,p,"TestLoadImage: timeout",!1,h,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=u}else h(!1)}function Pk(u,h){const p=new ca,y=new AbortController,N=setTimeout(()=>{y.abort(),Ar(p,"TestPingServer: timeout",!1,h)},1e4);fetch(u,{signal:y.signal}).then(M=>{clearTimeout(N),M.ok?Ar(p,"TestPingServer: ok",!0,h):Ar(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Ar(p,"TestPingServer: error",!1,h)})}function Ar(u,h,p,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(p)}catch{}}function Rk(){this.g=new uk}function kk(u,h,p){const y=p||"";try{L_(u,function(N,M){let G=N;c(N)&&(G=Fd(N)),h.push(y+M+"="+encodeURIComponent(G))})}catch(N){throw h.push(y+"type="+encodeURIComponent("_badmap")),N}}function ma(u){this.l=u.Ub||null,this.j=u.eb||!1}R(ma,jd),ma.prototype.g=function(){return new Ou(this.l,this.j)},ma.prototype.i=function(u){return function(){return u}}({});function Ou(u,h){mt.call(this),this.D=u,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ou,mt),t=Ou.prototype,t.open=function(u,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=h,this.readyState=1,ya(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(h.body=u),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ga(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ya(this)),this.g&&(this.readyState=3,ya(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$_(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function $_(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var h=u.value?u.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!u.done}))&&(this.response=this.responseText+=h)}u.done?ga(this):ya(this),this.readyState==3&&$_(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,ga(this))},t.Qa=function(u){this.g&&(this.response=u,ga(this))},t.ga=function(){this.g&&ga(this)};function ga(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ya(u)}t.setRequestHeader=function(u,h){this.u.append(u,h)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,u.push(p[0]+": "+p[1]),p=h.next();return u.join(`\r
`)};function ya(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ou.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function q_(u){let h="";return F(u,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function Qd(u,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=q_(p),typeof u=="string"?p!=null&&encodeURIComponent(String(p)):Ie(u,h,p))}function Ve(u){mt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ve,mt);var Ck=/^https?$/i,xk=["POST","PUT"];t=Ve.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);h=h?h.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zd.g(),this.v=this.o?v_(this.o):v_(zd),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(u),!0),this.B=!1}catch(M){W_(this,M);return}if(u=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)p.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())p.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),N=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(xk,h,void 0))||y||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,G]of p)this.g.setRequestHeader(M,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{H_(this),this.u=!0,this.g.send(u),this.u=!1}catch(M){W_(this,M)}};function W_(u,h){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=h,u.m=5,G_(u),Lu(u)}function G_(u){u.A||(u.A=!0,St(u,"complete"),St(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,St(this,"complete"),St(this,"abort"),Lu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lu(this,!0)),Ve.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?K_(this):this.bb())},t.bb=function(){K_(this)};function K_(u){if(u.h&&typeof o<"u"&&(!u.v[1]||Yn(u)!=4||u.Z()!=2)){if(u.u&&Yn(u)==4)m_(u.Ea,0,u);else if(St(u,"readystatechange"),Yn(u)==4){u.h=!1;try{const G=u.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=G===0){var N=String(u.D).match(M_)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),y=!Ck.test(N?N.toLowerCase():"")}p=y}if(p)St(u,"complete"),St(u,"success");else{u.m=6;try{var M=2<Yn(u)?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.Z()+"]",G_(u)}}finally{Lu(u)}}}}function Lu(u,h){if(u.g){H_(u);const p=u.g,y=u.v[0]?()=>{}:null;u.g=null,u.v=null,h||St(u,"ready");try{p.onreadystatechange=y}catch{}}}function H_(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function Yn(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<Yn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var h=this.g.responseText;return u&&h.indexOf(u)==0&&(h=h.substring(u.length)),lk(h)}};function Q_(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function bk(u){const h={};u=(u.g&&2<=Yn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<u.length;y++){if(v(u[y]))continue;var p=C(u[y]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=h[N]||[];h[N]=M,M.push(p)}I(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _a(u,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[u]||h}function Y_(u){this.Aa=0,this.i=[],this.j=new ca,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_a("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_a("baseRetryDelayMs",5e3,u),this.cb=_a("retryDelaySeedMs",1e4,u),this.Wa=_a("forwardChannelMaxRetries",2,u),this.wa=_a("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new b_(u&&u.concurrentRequestLimit),this.Da=new Rk,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Y_.prototype,t.la=8,t.G=1,t.connect=function(u,h,p,y){At(0),this.W=u,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=sv(this,null,this.W),Fu(this)};function Yd(u){if(J_(u),u.G==3){var h=u.U++,p=Qn(u.I);if(Ie(p,"SID",u.K),Ie(p,"RID",h),Ie(p,"TYPE","terminate"),va(u,p),h=new Tr(u,u.j,h),h.L=2,h.v=Vu(Qn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=ov(h.j,null),h.g.ea(h.v)),h.F=Date.now(),bu(h)}iv(u)}function Mu(u){u.g&&(Xd(u),u.g.cancel(),u.g=null)}function J_(u){Mu(u),u.u&&(a.clearTimeout(u.u),u.u=null),ju(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Fu(u){if(!N_(u.h)&&!u.s){u.s=!0;var h=u.Ga;X||K(),$||(X(),$=!0),U.add(h,u),u.B=0}}function Nk(u,h){return D_(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=h.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=ua(g(u.Ga,u,h),rv(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const N=new Tr(this,this.j,u);let M=this.o;if(this.S&&(M?(M=_(M),A(M,this.S)):M=this.S),this.m!==null||this.O||(N.H=M,M=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Z_(this,N,h),p=Qn(this.I),Ie(p,"RID",u),Ie(p,"CVER",22),this.D&&Ie(p,"X-HTTP-Session-Id",this.D),va(this,p),M&&(this.O?h="headers="+encodeURIComponent(String(q_(M)))+"&"+h:this.m&&Qd(p,this.m,M)),Hd(this.h,N),this.Ua&&Ie(p,"TYPE","init"),this.P?(Ie(p,"$req",h),Ie(p,"SID","null"),N.T=!0,qd(N,p,null)):qd(N,p,h),this.G=2}}else this.G==3&&(u?X_(this,u):this.i.length==0||N_(this.h)||X_(this))};function X_(u,h){var p;h?p=h.l:p=u.U++;const y=Qn(u.I);Ie(y,"SID",u.K),Ie(y,"RID",p),Ie(y,"AID",u.T),va(u,y),u.m&&u.o&&Qd(y,u.m,u.o),p=new Tr(u,u.j,p,u.B+1),u.m===null&&(p.H=u.o),h&&(u.i=h.D.concat(u.i)),h=Z_(u,p,1e3),p.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Hd(u.h,p),qd(p,y,h)}function va(u,h){u.H&&F(u.H,function(p,y){Ie(h,y,p)}),u.l&&L_({},function(p,y){Ie(h,y,p)})}function Z_(u,h,p){p=Math.min(u.i.length,p);var y=u.l?g(u.l.Na,u.l,u):null;e:{var N=u.i;let M=-1;for(;;){const G=["count="+p];M==-1?0<p?(M=N[0].g,G.push("ofs="+M)):M=0:G.push("ofs="+M);let _e=!0;for(let at=0;at<p;at++){let fe=N[at].g;const gt=N[at].map;if(fe-=M,0>fe)M=Math.max(0,N[at].g-100),_e=!1;else try{kk(gt,G,"req"+fe+"_")}catch{y&&y(gt)}}if(_e){y=G.join("&");break e}}}return u=u.i.splice(0,p),h.D=u,y}function ev(u){if(!u.g&&!u.u){u.Y=1;var h=u.Fa;X||K(),$||(X(),$=!0),U.add(h,u),u.v=0}}function Jd(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=ua(g(u.Fa,u),rv(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,tv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=ua(g(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),Mu(this),tv(this))};function Xd(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function tv(u){u.g=new Tr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var h=Qn(u.qa);Ie(h,"RID","rpc"),Ie(h,"SID",u.K),Ie(h,"AID",u.T),Ie(h,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ie(h,"TO",u.ja),Ie(h,"TYPE","xmlhttp"),va(u,h),u.m&&u.o&&Qd(h,u.m,u.o),u.L&&(u.g.I=u.L);var p=u.g;u=u.ia,p.L=1,p.v=Vu(Qn(h)),p.m=null,p.P=!0,k_(p,u)}t.Za=function(){this.C!=null&&(this.C=null,Mu(this),Jd(this),At(19))};function ju(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function nv(u,h){var p=null;if(u.g==h){ju(u),Xd(u),u.g=null;var y=2}else if(Kd(u.h,h))p=h.D,V_(u.h,h),y=1;else return;if(u.G!=0){if(h.o)if(y==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var N=u.B;y=ku(),St(y,new S_(y,p)),Fu(u)}else ev(u);else if(N=h.s,N==3||N==0&&0<h.X||!(y==1&&Nk(u,h)||y==2&&Jd(u)))switch(p&&0<p.length&&(h=u.h,h.i=h.i.concat(p)),N){case 1:ki(u,5);break;case 4:ki(u,10);break;case 3:ki(u,6);break;default:ki(u,2)}}}function rv(u,h){let p=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(p*=2),p*h}function ki(u,h){if(u.j.info("Error code "+h),h==2){var p=g(u.fb,u),y=u.Xa;const N=!y;y=new Ri(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Nu(y,"https"),Vu(y),N?Ak(y.toString(),p):Pk(y.toString(),p)}else At(2);u.G=0,u.l&&u.l.sa(h),iv(u),J_(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function iv(u){if(u.G=0,u.ka=[],u.l){const h=O_(u.h);(h.length!=0||u.i.length!=0)&&(x(u.ka,h),x(u.ka,u.i),u.h.i.length=0,k(u.i),u.i.length=0),u.l.ra()}}function sv(u,h,p){var y=p instanceof Ri?Qn(p):new Ri(p);if(y.g!="")h&&(y.g=h+"."+y.g),Du(y,y.s);else{var N=a.location;y=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var M=new Ri(null);y&&Nu(M,y),h&&(M.g=h),N&&Du(M,N),p&&(M.l=p),y=M}return p=u.D,h=u.ya,p&&h&&Ie(y,p,h),Ie(y,"VER",u.la),va(u,y),y}function ov(u,h,p){if(h&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=u.Ca&&!u.pa?new Ve(new ma({eb:p})):new Ve(u.pa),h.Ha(u.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function av(){}t=av.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Uu(){}Uu.prototype.g=function(u,h){return new Gt(u,h)};function Gt(u,h){mt.call(this),this.g=new Y_(h),this.l=u,this.h=h&&h.messageUrlParams||null,u=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(u?u["X-WebChannel-Content-Type"]=h.messageContentType:u={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(u?u["X-WebChannel-Client-Profile"]=h.va:u={"X-WebChannel-Client-Profile":h.va}),this.g.S=u,(u=h&&h.Sb)&&!v(u)&&(this.g.m=u),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,u=this.h,u!==null&&h in u&&(u=this.h,h in u&&delete u[h])),this.j=new xs(this)}R(Gt,mt),Gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gt.prototype.close=function(){Yd(this.g)},Gt.prototype.o=function(u){var h=this.g;if(typeof u=="string"){var p={};p.__data__=u,u=p}else this.u&&(p={},p.__data__=Fd(u),u=p);h.i.push(new mk(h.Ya++,u)),h.G==3&&Fu(h)},Gt.prototype.N=function(){this.g.l=null,delete this.j,Yd(this.g),delete this.g,Gt.aa.N.call(this)};function lv(u){Ud.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var h=u.__sm__;if(h){e:{for(const p in h){u=p;break e}u=void 0}(this.i=u)&&(u=this.i,h=h!==null&&u in h?h[u]:void 0),this.data=h}else this.data=u}R(lv,Ud);function uv(){Bd.call(this),this.status=1}R(uv,Bd);function xs(u){this.g=u}R(xs,av),xs.prototype.ua=function(){St(this.g,"a")},xs.prototype.ta=function(u){St(this.g,new lv(u))},xs.prototype.sa=function(u){St(this.g,new uv)},xs.prototype.ra=function(){St(this.g,"b")},Uu.prototype.createWebChannel=Uu.prototype.g,Gt.prototype.send=Gt.prototype.o,Gt.prototype.open=Gt.prototype.m,Gt.prototype.close=Gt.prototype.close,IS=function(){return new Uu},wS=function(){return ku()},vS=Ai,Gp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Cu.NO_ERROR=0,Cu.TIMEOUT=8,Cu.HTTP_ERROR=6,Ac=Cu,A_.COMPLETE="complete",_S=A_,w_.EventType=aa,aa.OPEN="a",aa.CLOSE="b",aa.ERROR="c",aa.MESSAGE="d",mt.prototype.listen=mt.prototype.K,$a=w_,yS=ma,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,gS=Ve}).apply(typeof sc<"u"?sc:typeof self<"u"?self:typeof window<"u"?window:{});const Uw="@firebase/firestore";/**
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
 */let qo="10.12.1";/**
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
 */const oi=new Hh("@firebase/firestore");function Fs(){return oi.logLevel}function Y1(t){oi.setLogLevel(t)}function z(t,...e){if(oi.logLevel<=oe.DEBUG){const n=e.map(Lg);oi.debug(`Firestore (${qo}): ${t}`,...n)}}function $e(t,...e){if(oi.logLevel<=oe.ERROR){const n=e.map(Lg);oi.error(`Firestore (${qo}): ${t}`,...n)}}function An(t,...e){if(oi.logLevel<=oe.WARN){const n=e.map(Lg);oi.warn(`Firestore (${qo}): ${t}`,...n)}}function Lg(t){if(typeof t=="string")return t;try{/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${qo}) INTERNAL ASSERTION FAILED: `+t;throw $e(e),new Error(e)}function Z(t,e){t||Y()}function J1(t,e){t||Y()}function Q(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends xt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ES{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class X1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class Z1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eD{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new rt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new rt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new rt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new ES(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string"),new tt(e)}}class tD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class nD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new tD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Z(typeof n.token=="string"),this.R=n.token,new rD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function sD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class TS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=sD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function So(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function SS(t){return t+"\0"}/**
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
 */class ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ll{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ll.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ll?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class le extends Ll{construct(e,n,r){return new le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new le(n)}static emptyPath(){return new le([])}}const oD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends Ll{construct(e,n,r){return new Pe(e,n,r)}static isValidIdentifier(e){return oD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new B(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new B(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(n)}static emptyPath(){return new Pe([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(le.fromString(e))}static fromName(e){return new H(le.fromString(e).popFirst(5))}static empty(){return new H(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new le(e.slice()))}}/**
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
 */class dh{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Kp(t){return t.fields.find(e=>e.kind===2)}function Vi(t){return t.fields.filter(e=>e.kind!==2)}dh.UNKNOWN_ID=-1;class Pc{constructor(e,n){this.fieldPath=e,this.kind=n}}class Ml{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Ml(0,Zt.min())}}function AS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new Zt(i,H.empty(),e)}function PS(t){return new Zt(t.readTime,t.key,-1)}class Zt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zt(ee.min(),H.empty(),-1)}static max(){return new Zt(ee.max(),H.empty(),-1)}}function Mg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
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
 */const RS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function wi(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==RS)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):D.reject(n)}static resolve(e){return new D((n,r)=>{n(e)})}static reject(e){return new D((n,r)=>{r(e)})}static waitFor(e){return new D((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=D.resolve(!1);for(const r of e)n=n.next(i=>i?D.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new D((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new D((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class Qh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new rt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new rl(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Fg(r.target.error);this.V.reject(new rl(e,i))}}static open(e,n,r,i){try{return new Qh(n,e.transaction(i,r))}catch(s){throw new rl(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(z("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new lD(n)}}class Un{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Un.S(Ce())===12.2&&$e("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return z("SimpleDb","Removing database:",e),Oi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Nl())return!1;if(Un.C())return!0;const e=Ce(),n=Un.S(e),r=0<n&&n<10,i=CS(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(z("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new rl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new B(L.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new B(L.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new rl(e,o))},i.onupgradeneeded=s=>{z("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{z("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Qh.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),D.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(z("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function CS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class aD{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Oi(this.B.delete())}}class rl extends B{constructor(e,n){super(L.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ii(t){return t.name==="IndexedDbTransactionError"}class lD{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(z("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(z("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Oi(r)}add(e){return z("SimpleDb","ADD",this.store.name,e,e),Oi(this.store.add(e))}get(e){return Oi(this.store.get(e)).next(n=>(n===void 0&&(n=null),z("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return z("SimpleDb","DELETE",this.store.name,e),Oi(this.store.delete(e))}count(){return z("SimpleDb","COUNT",this.store.name),Oi(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new D((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new D((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){z("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new D((r,i)=>{n.onerror=s=>{const o=Fg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new D((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new aD(a),c=n(a.primaryKey,a.value,l);if(c instanceof D){const d=c.catch(f=>(l.done(),D.reject(f)));r.push(d)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>D.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Oi(t){return new D((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Fg(r.target.error);n(i)}})}let Bw=!1;function Fg(t){const e=Un.S(Ce());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Bw||(Bw=!0,setTimeout(()=>{throw r},0)),r}}return t}class uD{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){z("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{z("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){Ii(n)?z("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await wi(n)}await this.X(6e4)})}}class cD{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return D.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return z("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(z("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=PS(s);Mg(o,r)>0&&(r=o)}),new Zt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Ut{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ut.oe=-1;function su(t){return t==null}function Fl(t){return t===0&&1/t==-1/0}function xS(t){return typeof t=="number"&&Number.isInteger(t)&&!Fl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function bt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=zw(e)),e=hD(t.get(n),e);return zw(e)}function hD(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function zw(t){return t+""}function On(t){const e=t.length;if(Z(e>=2),e===2)return Z(t.charAt(0)===""&&t.charAt(1)===""),le.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&Y(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:Y()}s=o+2}return new le(r)}/**
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
 */const $w=["userId","batchId"];/**
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
 */function Rc(t,e){return[t,bt(e)]}function bS(t,e,n){return[t,bt(e),n]}const dD={},fD=["prefixPath","collectionGroup","readTime","documentId"],pD=["prefixPath","collectionGroup","documentId"],mD=["collectionGroup","readTime","prefixPath","documentId"],gD=["canonicalId","targetId"],yD=["targetId","path"],_D=["path","targetId"],vD=["collectionId","parent"],wD=["indexId","uid"],ID=["uid","sequenceNumber"],ED=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],TD=["indexId","uid","orderedDocumentKey"],SD=["userId","collectionPath","documentId"],AD=["userId","collectionPath","largestBatchId"],PD=["userId","collectionGroup","largestBatchId"],NS=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],RD=[...NS,"documentOverlays"],DS=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],VS=DS,OS=[...VS,"indexConfiguration","indexState","indexEntries"],kD=OS;/**
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
 */class Hp extends kS{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function st(t,e){const n=Q(t);return Un.F(n._e,e)}/**
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
 */function qw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function LS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class we{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oc(this.root,e,this.comparator,!1)}getReverseIterator(){return new oc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oc(this.root,e,this.comparator,!0)}}class oc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ut.RED,this.left=i??ut.EMPTY,this.right=s??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ut(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ut.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ye{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ww(this.data.getIterator())}getIteratorFrom(e){return new Ww(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ye(this.comparator);return n.data=e,n}}class Ww{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ds(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Bt{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new ye(Pe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return So(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class MS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function CD(){return typeof atob<"u"}/**
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
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new MS("Invalid base64 string: "+s):s}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const xD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(t){if(Z(!!t),typeof t=="string"){let e=0;const n=xD.exec(t);if(Z(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ai(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
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
 */function Yh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function jg(t){const e=t.mapValue.fields.__previous_value__;return Yh(e)?jg(e):e}function jl(t){const e=hr(t.mapValue.fields.__local_write_time__.timestampValue);return new ke(e.seconds,e.nanos)}/**
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
 */class bD{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class li{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new li("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof li&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const zr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},kc={nullValue:"NULL_VALUE"};function is(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yh(t)?4:FS(t)?9007199254740991:10:Y()}function $n(t,e){if(t===e)return!0;const n=is(t);if(n!==is(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return jl(t).isEqual(jl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=hr(i.timestampValue),a=hr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ai(i.bytesValue).isEqual(ai(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Le(i.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(i.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Le(i.integerValue)===Le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Le(i.doubleValue),a=Le(s.doubleValue);return o===a?Fl(o)===Fl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return So(t.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(qw(o)!==qw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!$n(o[l],a[l])))return!1;return!0}(t,e);default:return Y()}}function Ul(t,e){return(t.values||[]).find(n=>$n(n,e))!==void 0}function ui(t,e){if(t===e)return 0;const n=is(t),r=is(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Le(s.integerValue||s.doubleValue),l=Le(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Gw(t.timestampValue,e.timestampValue);case 4:return Gw(jl(t),jl(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ai(s),l=ai(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const d=re(a[c],l[c]);if(d!==0)return d}return re(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=re(Le(s.latitude),Le(o.latitude));return a!==0?a:re(Le(s.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const d=ui(a[c],l[c]);if(d)return d}return re(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===zr.mapValue&&o===zr.mapValue)return 0;if(s===zr.mapValue)return 1;if(o===zr.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},d=Object.keys(c);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const g=re(l[f],d[f]);if(g!==0)return g;const w=ui(a[l[f]],c[d[f]]);if(w!==0)return w}return re(l.length,d.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Gw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=hr(t),r=hr(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function Ao(t){return Qp(t)}function Qp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ai(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Qp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Qp(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function ss(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Yp(t){return!!t&&"integerValue"in t}function Bl(t){return!!t&&"arrayValue"in t}function Kw(t){return!!t&&"nullValue"in t}function Hw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Cc(t){return!!t&&"mapValue"in t}function il(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=il(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=il(t.arrayValue.values[n]);return e}return Object.assign({},t)}function FS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function ND(t){return"nullValue"in t?kc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?ss(li.empty(),H.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:Y()}function DD(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?ss(li.empty(),H.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?zr:Y()}function Qw(t,e){const n=ui(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Yw(t,e){const n=ui(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Cc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=il(n)}setAll(e){let n=Pe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=il(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Cc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Cc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Es(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(il(this.value))}}function jS(t){const e=[];return Es(t.fields,(n,r)=>{const i=new Pe([n]);if(Cc(r)){const s=jS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Bt(e)}/**
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
 */class Te{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Te(e,0,ee.min(),ee.min(),ee.min(),ct.empty(),0)}static newFoundDocument(e,n,r,i){return new Te(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new Te(e,2,n,ee.min(),ee.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new Te(e,3,n,ee.min(),ee.min(),ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ci{constructor(e,n){this.position=e,this.inclusive=n}}function Jw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=ui(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class zl{constructor(e,n="asc"){this.field=e,this.dir=n}}function VD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class US{}class ue extends US{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new OD(e,n,r):n==="array-contains"?new FD(e,r):n==="in"?new GS(e,r):n==="not-in"?new jD(e,r):n==="array-contains-any"?new UD(e,r):new ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new LD(e,r):new MD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ui(n,this.value)):n!==null&&is(this.value)===is(n)&&this.matchesComparison(ui(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pe extends US{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new pe(e,n)}matches(e){return Po(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Po(t){return t.op==="and"}function Jp(t){return t.op==="or"}function Ug(t){return BS(t)&&Po(t)}function BS(t){for(const e of t.filters)if(e instanceof pe)return!1;return!0}function Xp(t){if(t instanceof ue)return t.field.canonicalString()+t.op.toString()+Ao(t.value);if(Ug(t))return t.filters.map(e=>Xp(e)).join(",");{const e=t.filters.map(n=>Xp(n)).join(",");return`${t.op}(${e})`}}function zS(t,e){return t instanceof ue?function(r,i){return i instanceof ue&&r.op===i.op&&r.field.isEqual(i.field)&&$n(r.value,i.value)}(t,e):t instanceof pe?function(r,i){return i instanceof pe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&zS(o,i.filters[a]),!0):!1}(t,e):void Y()}function $S(t,e){const n=t.filters.concat(e);return pe.create(n,t.op)}function qS(t){return t instanceof ue?function(n){return`${n.field.canonicalString()} ${n.op} ${Ao(n.value)}`}(t):t instanceof pe?function(n){return n.op.toString()+" {"+n.getFilters().map(qS).join(" ,")+"}"}(t):"Filter"}class OD extends ue{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class LD extends ue{constructor(e,n){super(e,"in",n),this.keys=WS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class MD extends ue{constructor(e,n){super(e,"not-in",n),this.keys=WS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function WS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class FD extends ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bl(n)&&Ul(n.arrayValue,this.value)}}class GS extends ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ul(this.value.arrayValue,n)}}class jD extends ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ul(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ul(this.value.arrayValue,n)}}class UD extends ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ul(this.value.arrayValue,r))}}/**
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
 */class BD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Zp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new BD(t,e,n,r,i,s,o)}function os(t){const e=Q(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Xp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),su(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ao(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ao(r)).join(",")),e.ue=n}return e.ue}function ou(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!VD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xw(t.startAt,e.startAt)&&Xw(t.endAt,e.endAt)}function fh(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function ph(t,e){return t.filters.filter(n=>n instanceof ue&&n.field.isEqual(e))}function Zw(t,e,n){let r=kc,i=!0;for(const s of ph(t,e)){let o=kc,a=!0;switch(s.op){case"<":case"<=":o=ND(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=kc}Qw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Qw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function eI(t,e,n){let r=zr,i=!0;for(const s of ph(t,e)){let o=zr,a=!0;switch(s.op){case">=":case">":o=DD(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=zr}Yw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Yw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class _r{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function KS(t,e,n,r,i,s,o,a){return new _r(t,e,n,r,i,s,o,a)}function Wo(t){return new _r(t)}function tI(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Bg(t){return t.collectionGroup!==null}function lo(t){const e=Q(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ye(Pe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new zl(s,r))}),n.has(Pe.keyField().canonicalString())||e.ce.push(new zl(Pe.keyField(),r))}return e.ce}function Nt(t){const e=Q(t);return e.le||(e.le=zD(e,lo(t))),e.le}function zD(t,e){if(t.limitType==="F")return Zp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new zl(i.field,s)});const n=t.endAt?new ci(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ci(t.startAt.position,t.startAt.inclusive):null;return Zp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function em(t,e){const n=t.filters.concat([e]);return new _r(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function mh(t,e,n){return new _r(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function au(t,e){return ou(Nt(t),Nt(e))&&t.limitType===e.limitType}function HS(t){return`${os(Nt(t))}|lt:${t.limitType}`}function js(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>qS(i)).join(", ")}]`),su(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ao(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ao(i)).join(",")),`Target(${r})`}(Nt(t))}; limitType=${t.limitType})`}function lu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of lo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=Jw(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,lo(r),i)||r.endAt&&!function(o,a,l){const c=Jw(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,lo(r),i))}(t,e)}function QS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function YS(t){return(e,n)=>{let r=!1;for(const i of lo(t)){const s=$D(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function $D(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?ui(l,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class Ei{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Es(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return LS(this.inner)}size(){return this.innerSize}}/**
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
 */const qD=new we(H.comparator);function zt(){return qD}const JS=new we(H.comparator);function qa(...t){let e=JS;for(const n of t)e=e.insert(n.key,n);return e}function XS(t){let e=JS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ln(){return sl()}function ZS(){return sl()}function sl(){return new Ei(t=>t.toString(),(t,e)=>t.isEqual(e))}const WD=new we(H.comparator),GD=new ye(H.comparator);function ie(...t){let e=GD;for(const n of t)e=e.add(n);return e}const KD=new ye(re);function zg(){return KD}/**
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
 */function eA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fl(e)?"-0":e}}function tA(t){return{integerValue:""+t}}function nA(t,e){return xS(e)?tA(e):eA(t,e)}/**
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
 */class Jh{constructor(){this._=void 0}}function HD(t,e,n){return t instanceof Ro?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Yh(s)&&(s=jg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof as?iA(t,e):t instanceof ls?sA(t,e):function(i,s){const o=rA(i,s),a=nI(o)+nI(i.Pe);return Yp(o)&&Yp(i.Pe)?tA(a):eA(i.serializer,a)}(t,e)}function QD(t,e,n){return t instanceof as?iA(t,e):t instanceof ls?sA(t,e):n}function rA(t,e){return t instanceof ko?function(r){return Yp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ro extends Jh{}class as extends Jh{constructor(e){super(),this.elements=e}}function iA(t,e){const n=oA(e);for(const r of t.elements)n.some(i=>$n(i,r))||n.push(r);return{arrayValue:{values:n}}}class ls extends Jh{constructor(e){super(),this.elements=e}}function sA(t,e){let n=oA(e);for(const r of t.elements)n=n.filter(i=>!$n(i,r));return{arrayValue:{values:n}}}class ko extends Jh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function nI(t){return Le(t.integerValue||t.doubleValue)}function oA(t){return Bl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class uu{constructor(e,n){this.field=e,this.transform=n}}function YD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof as&&i instanceof as||r instanceof ls&&i instanceof ls?So(r.elements,i.elements,$n):r instanceof ko&&i instanceof ko?$n(r.Pe,i.Pe):r instanceof Ro&&i instanceof Ro}(t.transform,e.transform)}class JD{constructor(e,n){this.version=e,this.transformResults=n}}class Re{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Re}static exists(e){return new Re(void 0,e)}static updateTime(e){return new Re(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xh{}function aA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ko(t.key,Re.none()):new Go(t.key,t.data,Re.none());{const n=t.data,r=ct.empty();let i=new ye(Pe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new vr(t.key,r,new Bt(i.toArray()),Re.none())}}function XD(t,e,n){t instanceof Go?function(i,s,o){const a=i.value.clone(),l=iI(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof vr?function(i,s,o){if(!xc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=iI(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(lA(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ol(t,e,n,r){return t instanceof Go?function(s,o,a,l){if(!xc(s.precondition,o))return a;const c=s.value.clone(),d=sI(s.fieldTransforms,l,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof vr?function(s,o,a,l){if(!xc(s.precondition,o))return a;const c=sI(s.fieldTransforms,l,o),d=o.data;return d.setAll(lA(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return xc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function ZD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=rA(r.transform,i||null);s!=null&&(n===null&&(n=ct.empty()),n.set(r.field,s))}return n||null}function rI(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&So(r,i,(s,o)=>YD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Go extends Xh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vr extends Xh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function lA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function iI(t,e,n){const r=new Map;Z(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,QD(o,a,n[i]))}return r}function sI(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,HD(s,o,e))}return r}class Ko extends Xh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $g extends Xh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class qg{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&XD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ol(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ol(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ZS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=aA(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&So(this.mutations,e.mutations,(n,r)=>rI(n,r))&&So(this.baseMutations,e.baseMutations,(n,r)=>rI(n,r))}}class Wg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Z(e.mutations.length===r.length);let i=function(){return WD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Wg(e,n,r,i)}}/**
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
 */class Gg{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class eV{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ge,ce;function uA(t){switch(t){default:return Y();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function cA(t){if(t===void 0)return $e("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ge.OK:return L.OK;case Ge.CANCELLED:return L.CANCELLED;case Ge.UNKNOWN:return L.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return L.INTERNAL;case Ge.UNAVAILABLE:return L.UNAVAILABLE;case Ge.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ge.NOT_FOUND:return L.NOT_FOUND;case Ge.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ge.ABORTED:return L.ABORTED;case Ge.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ge.DATA_LOSS:return L.DATA_LOSS;default:return Y()}}(ce=Ge||(Ge={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function hA(){return new TextEncoder}/**
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
 */const tV=new Qi([4294967295,4294967295],0);function oI(t){const e=hA().encode(t),n=new mS;return n.update(e),new Uint8Array(n.digest())}function aI(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Qi([n,r],0),new Qi([i,s],0)]}class Kg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Wa(`Invalid padding: ${n}`);if(r<0)throw new Wa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Wa(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Qi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Qi.fromNumber(r)));return i.compare(tV)===1&&(i=new Qi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=oI(e),[r,i]=aI(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Kg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=oI(e),[r,i]=aI(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Wa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class cu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,hu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new cu(ee.min(),i,new we(re),zt(),ie())}}class hu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new hu(r,n,ie(),ie(),ie())}}/**
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
 */class bc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class dA{constructor(e,n){this.targetId=e,this.me=n}}class fA{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class lI{constructor(){this.fe=0,this.ge=cI(),this.pe=Xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ie(),n=ie(),r=ie();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new hu(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=cI()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Z(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class nV{constructor(e){this.Le=e,this.Be=new Map,this.ke=zt(),this.qe=uI(),this.Qe=new we(re)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(fh(s))if(r===0){const o=new H(s.path);this.Ue(n,o,Te.newNoDocument(o,ee.min()))}else Z(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ai(r).toUint8Array()}catch(l){if(l instanceof MS)return An("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Kg(o,i,s)}catch(l){return An(l instanceof Wa?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&fh(a.target)){const l=new H(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Te.newNoDocument(l,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ie();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new cu(e,n,this.Qe,this.ke,r);return this.ke=zt(),this.qe=uI(),this.Qe=new we(re),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new lI,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ye(re),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new lI),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function uI(){return new we(H.comparator)}function cI(){return new we(H.comparator)}const rV={asc:"ASCENDING",desc:"DESCENDING"},iV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sV={and:"AND",or:"OR"};class oV{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function tm(t,e){return t.useProto3Json||su(e)?e:{value:e}}function Co(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function aV(t,e){return Co(t,e.toTimestamp())}function We(t){return Z(!!t),ee.fromTimestamp(function(n){const r=hr(n);return new ke(r.seconds,r.nanos)}(t))}function Hg(t,e){return nm(t,e).canonicalString()}function nm(t,e){const n=function(i){return new le(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function mA(t){const e=le.fromString(t);return Z(AA(e)),e}function $l(t,e){return Hg(t.databaseId,e.path)}function Bn(t,e){const n=mA(e);if(n.get(1)!==t.databaseId.projectId)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(_A(n))}function gA(t,e){return Hg(t.databaseId,e)}function yA(t){const e=mA(t);return e.length===4?le.emptyPath():_A(e)}function rm(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _A(t){return Z(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function hI(t,e,n){return{name:$l(t,e),fields:n.value.mapValue.fields}}function vA(t,e,n){const r=Bn(t,e.name),i=We(e.updateTime),s=e.createTime?We(e.createTime):ee.min(),o=new ct({mapValue:{fields:e.fields}}),a=Te.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function lV(t,e){return"found"in e?function(r,i){Z(!!i.found),i.found.name,i.found.updateTime;const s=Bn(r,i.found.name),o=We(i.found.updateTime),a=i.found.createTime?We(i.found.createTime):ee.min(),l=new ct({mapValue:{fields:i.found.fields}});return Te.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){Z(!!i.missing),Z(!!i.readTime);const s=Bn(r,i.missing),o=We(i.readTime);return Te.newNoDocument(s,o)}(t,e):Y()}function uV(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Z(d===void 0||typeof d=="string"),Xe.fromBase64String(d||"")):(Z(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Xe.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?L.UNKNOWN:cA(c.code);return new B(d,c.message||"")}(o);n=new fA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Bn(t,r.document.name),s=We(r.document.updateTime),o=r.document.createTime?We(r.document.createTime):ee.min(),a=new ct({mapValue:{fields:r.document.fields}}),l=Te.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new bc(c,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Bn(t,r.document),s=r.readTime?We(r.readTime):ee.min(),o=Te.newNoDocument(i,s),a=r.removedTargetIds||[];n=new bc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Bn(t,r.document),s=r.removedTargetIds||[];n=new bc([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new eV(i,s),a=r.targetId;n=new dA(a,o)}}return n}function ql(t,e){let n;if(e instanceof Go)n={update:hI(t,e.key,e.value)};else if(e instanceof Ko)n={delete:$l(t,e.key)};else if(e instanceof vr)n={update:hI(t,e.key,e.data),updateMask:mV(e.fieldMask)};else{if(!(e instanceof $g))return Y();n={verify:$l(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Ro)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof as)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ls)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ko)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:aV(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function im(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Re.updateTime(We(s.updateTime)):s.exists!==void 0?Re.exists(s.exists):Re.none()}(e.currentDocument):Re.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)Z(a.setToServerValue==="REQUEST_TIME"),l=new Ro;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];l=new as(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];l=new ls(d)}else"increment"in a?l=new ko(o,a.increment):Y();const c=Pe.fromServerFormat(a.fieldPath);return new uu(c,l)}(t,i)):[];if(e.update){e.update.name;const i=Bn(t,e.update.name),s=new ct({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const c=l.fieldPaths||[];return new Bt(c.map(d=>Pe.fromServerFormat(d)))}(e.updateMask);return new vr(i,s,o,n,r)}return new Go(i,s,n,r)}if(e.delete){const i=Bn(t,e.delete);return new Ko(i,n)}if(e.verify){const i=Bn(t,e.verify);return new $g(i,n)}return Y()}function cV(t,e){return t&&t.length>0?(Z(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?We(i.updateTime):We(s);return o.isEqual(ee.min())&&(o=We(s)),new JD(o,i.transformResults||[])}(n,e))):[]}function wA(t,e){return{documents:[gA(t,e.path)]}}function IA(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=gA(t,i);const s=function(c){if(c.length!==0)return SA(pe.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(g){return{field:Us(g.field),direction:dV(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=tm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function EA(t){let e=yA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Z(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const g=TA(f);return g instanceof pe&&Ug(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(g=>function(R){return new zl(Bs(R.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(f){let g;return g=typeof f=="object"?f.value:f,su(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(f){const g=!!f.before,w=f.values||[];return new ci(w,g)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const g=!f.before,w=f.values||[];return new ci(w,g)}(n.endAt)),KS(e,i,o,s,a,"F",l,c)}function hV(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function TA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Bs(n.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Bs(n.unaryFilter.field);return ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Bs(n.unaryFilter.field);return ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Bs(n.unaryFilter.field);return ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return ue.create(Bs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pe.create(n.compositeFilter.filters.map(r=>TA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function dV(t){return rV[t]}function fV(t){return iV[t]}function pV(t){return sV[t]}function Us(t){return{fieldPath:t.canonicalString()}}function Bs(t){return Pe.fromServerFormat(t.fieldPath)}function SA(t){return t instanceof ue?function(n){if(n.op==="=="){if(Hw(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NAN"}};if(Kw(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hw(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NOT_NAN"}};if(Kw(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Us(n.field),op:fV(n.op),value:n.value}}}(t):t instanceof pe?function(n){const r=n.getFilters().map(i=>SA(i));return r.length===1?r[0]:{compositeFilter:{op:pV(n.op),filters:r}}}(t):Y()}function mV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function AA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class tr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),a=Xe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class PA{constructor(e){this.ct=e}}function gV(t,e){let n;if(e.document)n=vA(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=H.fromSegments(e.noDocument.path),i=cs(e.noDocument.readTime);n=Te.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return Y();{const r=H.fromSegments(e.unknownDocument.path),i=cs(e.unknownDocument.version);n=Te.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new ke(i[0],i[1]);return ee.fromTimestamp(s)}(e.readTime)),n}function dI(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:gh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:$l(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Co(s,o.version.toTimestamp()),createTime:Co(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:us(e.version)};else{if(!e.isUnknownDocument())return Y();r.unknownDocument={path:n.path.toArray(),version:us(e.version)}}return r}function gh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function us(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function cs(t){const e=new ke(t.seconds,t.nanoseconds);return ee.fromTimestamp(e)}function Li(t,e){const n=(e.baseMutations||[]).map(s=>im(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>im(t.ct,s)),i=ke.fromMillis(e.localWriteTimeMs);return new qg(e.batchId,i,n,r)}function Ga(t){const e=cs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?cs(t.lastLimboFreeSnapshotVersion):ee.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return Z(s.documents.length===1),Nt(Wo(yA(s.documents[0])))}(t.query):function(s){return Nt(EA(s))}(t.query),new tr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Xe.fromBase64String(t.resumeToken))}function RA(t,e){const n=us(e.snapshotVersion),r=us(e.lastLimboFreeSnapshotVersion);let i;i=fh(e.target)?wA(t.ct,e.target):IA(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:os(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Qg(t){const e=EA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?mh(e,e.limit,"L"):e}function Df(t,e){return new Gg(e.largestBatchId,im(t.ct,e.overlayMutation))}function fI(t,e){const n=e.path.lastSegment();return[t,bt(e.path.popLast()),n]}function pI(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:us(r.readTime),documentKey:bt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class yV{getBundleMetadata(e,n){return mI(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:cs(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return mI(e).put(function(i){return{bundleId:i.id,createTime:us(We(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return gI(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:Qg(s.bundledQuery),readTime:cs(s.readTime)}}(r)})}saveNamedQuery(e,n){return gI(e).put(function(i){return{name:i.name,readTime:us(We(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function mI(t){return st(t,"bundles")}function gI(t){return st(t,"namedQueries")}/**
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
 */class Zh{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Zh(e,r)}getOverlay(e,n){return ka(e).get(fI(this.userId,n)).next(r=>r?Df(this.serializer,r):null)}getOverlays(e,n){const r=Ln();return D.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Gg(n,o);i.push(this.ht(e,a))}),D.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(bt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ka(e).j("collectionPathOverlayIndex",a))}),D.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Ln(),s=bt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ka(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const c=Df(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Ln();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return ka(e).J({index:"collectionGroupOverlayIndex",range:a},(l,c,d)=>{const f=Df(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):d.done()}).next(()=>s)}ht(e,n){return ka(e).put(function(i,s,o){const[a,l,c]=fI(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:ql(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function ka(t){return st(t,"documentOverlays")}/**
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
 */class Mi{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Le(e.integerValue));else if("doubleValue"in e){const r=Le(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),Fl(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(n,20),typeof r=="string"&&(r=hr(r)),n.At(`${r.seconds||""}`),n.dt(r.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(ai(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?FS(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):Y()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),H.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}Mi.bt=new Mi;function _V(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function yI(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=_V(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class vV{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Lt(e){const n=this.Bt(e),r=yI(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Bt(e),r=yI(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class wV{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}}class IV{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Ca{constructor(){this.Gt=new vV,this.zt=new wV(this.Gt),this.jt=new IV(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class Fi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Fi(this.indexId,this.documentKey,this.arrayValue,r)}}function Rr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=_I(t.arrayValue,e.arrayValue),n!==0?n:(n=_I(t.directionalValue,e.directionalValue),n!==0?n:H.comparator(t.documentKey,e.documentKey)))}function _I(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class vI{constructor(e){this.Yt=new ye((n,r)=>Pe.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(Z(e.collectionGroup===this.collectionId),this.en)return!1;const n=Kp(e);if(n!==void 0&&!this.nn(n))return!1;const r=Vi(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.rn(a,l)||!this.sn(this.Zt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new ye(Pe.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Pc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Pc(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Pc(r.field,r.dir==="asc"?0:1)));return new dh(dh.UNKNOWN_ID,this.collectionId,n,Ml.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function kA(t){var e,n;if(Z(t instanceof ue||t instanceof pe),t instanceof ue){if(t instanceof GS){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ue.create(t.field,"==",s)))||[];return pe.create(i,"or")}return t}const r=t.filters.map(i=>kA(i));return pe.create(r,t.op)}function EV(t){if(t.getFilters().length===0)return[];const e=am(kA(t));return Z(CA(e)),sm(e)||om(e)?[e]:e.getFilters()}function sm(t){return t instanceof ue}function om(t){return t instanceof pe&&Ug(t)}function CA(t){return sm(t)||om(t)||function(n){if(n instanceof pe&&Jp(n)){for(const r of n.getFilters())if(!sm(r)&&!om(r))return!1;return!0}return!1}(t)}function am(t){if(Z(t instanceof ue||t instanceof pe),t instanceof ue)return t;if(t.filters.length===1)return am(t.filters[0]);const e=t.filters.map(r=>am(r));let n=pe.create(e,t.op);return n=yh(n),CA(n)?n:(Z(n instanceof pe),Z(Po(n)),Z(n.filters.length>1),n.filters.reduce((r,i)=>Yg(r,i)))}function Yg(t,e){let n;return Z(t instanceof ue||t instanceof pe),Z(e instanceof ue||e instanceof pe),n=t instanceof ue?e instanceof ue?function(i,s){return pe.create([i,s],"and")}(t,e):wI(t,e):e instanceof ue?wI(e,t):function(i,s){if(Z(i.filters.length>0&&s.filters.length>0),Po(i)&&Po(s))return $S(i,s.getFilters());const o=Jp(i)?i:s,a=Jp(i)?s:i,l=o.filters.map(c=>Yg(c,a));return pe.create(l,"or")}(t,e),yh(n)}function wI(t,e){if(Po(e))return $S(e,t.getFilters());{const n=e.filters.map(r=>Yg(t,r));return pe.create(n,"or")}}function yh(t){if(Z(t instanceof ue||t instanceof pe),t instanceof ue)return t;const e=t.getFilters();if(e.length===1)return yh(e[0]);if(BS(t))return t;const n=e.map(i=>yh(i)),r=[];return n.forEach(i=>{i instanceof ue?r.push(i):i instanceof pe&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:pe.create(r,t.op)}/**
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
 */class TV{constructor(){this._n=new Jg}addToCollectionParentIndex(e,n){return this._n.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(Zt.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(Zt.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class Jg{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ye(le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ye(le.comparator)).toArray()}}/**
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
 */const ac=new Uint8Array(0);class SV{constructor(e,n){this.databaseId=n,this.an=new Jg,this.un=new Ei(r=>os(r),(r,i)=>ou(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:bt(i)};return II(e).put(s)}return D.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[SS(n),""],!1,!0);return II(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(On(o.parent))}return r})}addFieldIndex(e,n){const r=xa(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Os(e);return s.next(a=>{o.put(pI(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=xa(e),i=Os(e),s=Vs(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=xa(e),r=Vs(e),i=Os(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return D.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new vI(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Vs(e);let i=!0;const s=new Map;return D.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ie();const a=[];return D.forEach(s,(l,c)=>{z("IndexedDbIndexManager",`Using index ${function(T){return`id=${T.indexId}|cg=${T.collectionGroup}|f=${T.fields.map(O=>`${O.fieldPath}:${O.kind}`).join(",")}`}(l)} to execute ${os(n)}`);const d=function(T,O){const j=Kp(O);if(j===void 0)return null;for(const F of ph(T,j.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(c,l),f=function(T,O){const j=new Map;for(const F of Vi(O))for(const I of ph(T,F.fieldPath))switch(I.op){case"==":case"in":j.set(F.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return j.set(F.fieldPath.canonicalString(),I.value),Array.from(j.values())}return null}(c,l),g=function(T,O){const j=[];let F=!0;for(const I of Vi(O)){const _=I.kind===0?Zw(T,I.fieldPath,T.startAt):eI(T,I.fieldPath,T.startAt);j.push(_.value),F&&(F=_.inclusive)}return new ci(j,F)}(c,l),w=function(T,O){const j=[];let F=!0;for(const I of Vi(O)){const _=I.kind===0?eI(T,I.fieldPath,T.endAt):Zw(T,I.fieldPath,T.endAt);j.push(_.value),F&&(F=_.inclusive)}return new ci(j,F)}(c,l),R=this.hn(l,c,g),k=this.hn(l,c,w),x=this.Pn(l,c,f),E=this.In(l.indexId,d,R,g.inclusive,k,w.inclusive,x);return D.forEach(E,v=>r.G(v,n.limit).next(T=>{T.forEach(O=>{const j=H.fromSegments(O.documentKey);o.has(j)||(o=o.add(j),a.push(j))})}))}).next(()=>a)}return D.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=EV(pe.create(e.filters,"and")).map(r=>Zp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),c=l/(n!=null?n.length:1),d=[];for(let f=0;f<l;++f){const g=n?this.Tn(n[f/c]):ac,w=this.En(e,g,r[f%c],i),R=this.dn(e,g,s[f%c],o),k=a.map(x=>this.En(e,g,x,!0));d.push(...this.createRange(w,R,k))}return d}En(e,n,r,i){const s=new Fi(e,H.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new Fi(e,H.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new vI(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return D.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let c=new ye(Pe.comparator),d=!1;for(const f of l.filters)for(const g of f.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?d=!0:c=c.add(g.field));for(const f of l.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new Ca;for(const i of Vi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);Mi.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new Ca;return Mi.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new Ca;return Mi.bt.Pt(ss(this.databaseId,n),r.Ht(function(s){const o=Vi(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new Ca);let s=0;for(const o of Vi(e)){const a=r[s++];for(const l of i)if(this.Vn(n,o.fieldPath)&&Bl(a))i=this.mn(i,o,a);else{const c=l.Ht(o.kind);Mi.bt.Pt(a,c)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Ca;l.seed(a.Wt()),Mi.bt.Pt(o,l.Ht(n.kind)),s.push(l)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof ue&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=xa(e),i=Os(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return D.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(d,f){const g=f?new Ml(f.sequenceNumber,new Zt(cs(f.readTime),new H(On(f.documentKey)),f.largestBatchId)):Ml.empty(),w=d.fields.map(([R,k])=>new Pc(Pe.fromServerFormat(R),k));return new dh(d.indexId,d.collectionGroup,w,g)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:re(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=xa(e),s=Os(e);return this.gn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>D.forEach(a,l=>s.put(pI(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return D.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?D.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),D.forEach(a,l=>this.pn(e,i,l).next(c=>{const d=this.yn(s,l);return c.isEqual(d)?D.resolve():this.wn(e,s,l,c,d)}))))})}Sn(e,n,r,i){return Vs(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return Vs(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=Vs(e);let s=new ye(Rr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new Fi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new ye(Rr);const i=this.An(n,e);if(i==null)return r;const s=Kp(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Bl(o))for(const a of o.arrayValue.values||[])r=r.add(new Fi(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new Fi(n.indexId,e.key,ac,i));return r}wn(e,n,r,i,s){z("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,c,d,f,g){const w=l.getIterator(),R=c.getIterator();let k=Ds(w),x=Ds(R);for(;k||x;){let E=!1,v=!1;if(k&&x){const T=d(k,x);T<0?v=!0:T>0&&(E=!0)}else k!=null?v=!0:E=!0;E?(f(x),x=Ds(R)):v?(g(k),k=Ds(w)):(k=Ds(w),x=Ds(R))}}(i,s,Rr,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),D.waitFor(o)}gn(e){let n=1;return Os(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Rr(o,a)).filter((o,a,l)=>!a||Rr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Rr(o,e),l=Rr(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&l<0)i.push(o),i.push(o.Jt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,ac,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,ac,[]];s.push(IDBKeyRange.bound(a,l))}return s}Dn(e,n){return Rr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(EI)}getMinOffset(e,n){return D.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||Y())).next(EI)}}function II(t){return st(t,"collectionParents")}function Vs(t){return st(t,"indexEntries")}function xa(t){return st(t,"indexConfiguration")}function Os(t){return st(t,"indexState")}function EI(t){Z(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Mg(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Zt(e.readTime,e.documentKey,n)}/**
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
 */const TI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Lt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Lt(e,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function xA(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.J({range:o},(d,f,g)=>(a++,g.delete()));s.push(l.next(()=>{Z(a===1)}));const c=[];for(const d of n.mutations){const f=bS(e,d.key.path,n.batchId);s.push(i.delete(f)),c.push(d.key)}return D.waitFor(s).next(()=>c)}function _h(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw Y();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Lt.DEFAULT_COLLECTION_PERCENTILE=10,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Lt.DEFAULT=new Lt(41943040,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Lt.DISABLED=new Lt(-1,0,0);class ed{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){Z(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new ed(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return kr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=zs(e),o=kr(e);return o.add({}).next(a=>{Z(typeof a=="number");const l=new qg(a,n,r,i),c=function(w,R,k){const x=k.baseMutations.map(v=>ql(w.ct,v)),E=k.mutations.map(v=>ql(w.ct,v));return{userId:R,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:x,mutations:E}}(this.serializer,this.userId,l),d=[];let f=new ye((g,w)=>re(g.canonicalString(),w.canonicalString()));for(const g of i){const w=bS(this.userId,g.key.path,a);f=f.add(g.key.path.popLast()),d.push(o.put(c)),d.push(s.put(w,dD))}return f.forEach(g=>{d.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Cn[a]=l.keys()}),D.waitFor(d).next(()=>l)})}lookupMutationBatch(e,n){return kr(e).get(n).next(r=>r?(Z(r.userId===this.userId),Li(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?D.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return kr(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(Z(a.batchId>=r),s=Li(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return kr(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return kr(e).U("userMutationsIndex",n).next(r=>r.map(i=>Li(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Rc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return zs(e).J({range:i},(o,a,l)=>{const[c,d,f]=o,g=On(d);if(c===this.userId&&n.path.isEqual(g))return kr(e).get(f).next(w=>{if(!w)throw Y();Z(w.userId===this.userId),s.push(Li(this.serializer,w))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ye(re);const i=[];return n.forEach(s=>{const o=Rc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=zs(e).J({range:a},(c,d,f)=>{const[g,w,R]=c,k=On(w);g===this.userId&&s.path.isEqual(k)?r=r.add(R):f.done()});i.push(l)}),D.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Rc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ye(re);return zs(e).J({range:o},(l,c,d)=>{const[f,g,w]=l,R=On(g);f===this.userId&&r.isPrefixOf(R)?R.length===i&&(a=a.add(w)):d.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(kr(e).get(s).next(o=>{if(o===null)throw Y();Z(o.userId===this.userId),r.push(Li(this.serializer,o))}))}),D.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return xA(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),D.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return D.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return zs(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=On(s[1]);i.push(l)}else a.done()}).next(()=>{Z(i.length===0)})})}containsKey(e,n){return bA(e,this.userId,n)}xn(e){return NA(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function bA(t,e,n){const r=Rc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return zs(t).J({range:s,H:!0},(a,l,c)=>{const[d,f,g]=a;d===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function kr(t){return st(t,"mutations")}function zs(t){return st(t,"documentMutations")}function NA(t){return st(t,"mutationQueues")}/**
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
 */class hs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new hs(0)}static Ln(){return new hs(-1)}}/**
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
 */class AV{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new hs(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>ee.fromTimestamp(new ke(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Ls(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(Z(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Ls(e).J((o,a)=>{const l=Ga(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>D.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Ls(e).J((r,i)=>{const s=Ga(i);n(s)})}Bn(e){return SI(e).get("targetGlobalKey").next(n=>(Z(n!==null),n))}kn(e,n){return SI(e).put("targetGlobalKey",n)}qn(e,n){return Ls(e).put(RA(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=os(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Ls(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const c=Ga(a);ou(n,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Lr(e);return n.forEach(o=>{const a=bt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),D.waitFor(i)}removeMatchingKeys(e,n,r){const i=Lr(e);return D.forEach(n,s=>{const o=bt(s.path);return D.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Lr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Lr(e);let s=ie();return i.J({range:r,H:!0},(o,a,l)=>{const c=On(o[1]),d=new H(c);s=s.add(d)}).next(()=>s)}containsKey(e,n){const r=bt(n.path),i=IDBKeyRange.bound([r],[SS(r)],!1,!0);let s=0;return Lr(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return Ls(e).get(n).next(r=>r?Ga(r):null)}}function Ls(t){return st(t,"targets")}function SI(t){return st(t,"targetGlobal")}function Lr(t){return st(t,"targetDocuments")}/**
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
 */function AI([t,e],[n,r]){const i=re(t,n);return i===0?re(e,r):i}class PV{constructor(e){this.Kn=e,this.buffer=new ye(AI),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();AI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class RV{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ii(n)?z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await wi(n)}await this.zn(3e5)})}}class kV{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return D.resolve(Ut.oe);const r=new PV(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(TI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),TI):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,l,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Fs()<=oe.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(c-l)+`ms
Total Duration: ${c-d}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function CV(t,e){return new kV(t,e)}/**
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
 */class xV{constructor(e,n){this.db=e,this.garbageCollector=CV(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return lc(e,r)}removeReference(e,n,r){return lc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return lc(e,n)}er(e,n){return function(i,s){let o=!1;return NA(i).Y(a=>bA(i,a,s).next(l=>(l&&(o=!0),D.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const l=this.er(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,ee.min()),Lr(e).delete(function(f){return[0,bt(f.path)]}(o))))});i.push(l)}}).next(()=>D.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return lc(e,n)}Xn(e,n){const r=Lr(e);let i,s=Ut.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:c})=>{o===0?(s!==Ut.oe&&n(new H(On(i)),s),s=c,i=l):s=Ut.oe}).next(()=>{s!==Ut.oe&&n(new H(On(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function lc(t,e){return Lr(t).put(function(r,i){return{targetId:0,path:bt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class DA{constructor(){this.changes=new Ei(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Te.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class bV{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Ci(e).put(r)}removeEntry(e,n,r){return Ci(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],gh(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=Te.newInvalidDocument(n);return Ci(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ba(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:Te.newInvalidDocument(n)};return Ci(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ba(n))},(i,s)=>{r={document:this.nr(n,s),size:_h(s)}}).next(()=>r)}getEntries(e,n){let r=zt();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=zt(),i=new we(H.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,_h(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return D.resolve();let i=new ye(kI);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(ba(i.first()),ba(i.last())),o=i.getIterator();let a=o.getNext();return Ci(e).J({index:"documentKeyIndex",range:s},(l,c,d)=>{const f=H.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&kI(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?d.$(ba(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),gh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ci(e).U(IDBKeyRange.bound(a,l,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let d=zt();for(const f of c){const g=this.nr(H.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);g.isFoundDocument()&&(lu(n,g)||i.has(g.key))&&(d=d.insert(g.key,g))}return d})}getAllFromCollectionGroup(e,n,r,i){let s=zt();const o=RI(n,r),a=RI(n,Zt.max());return Ci(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,c,d)=>{const f=this.nr(H.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new NV(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return PI(e).get("remoteDocumentGlobalKey").next(n=>(Z(!!n),n))}tr(e,n){return PI(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=gV(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(ee.min())))return r}return Te.newInvalidDocument(e)}}function VA(t){return new bV(t)}class NV extends DA{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new Ei(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ye((s,o)=>re(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=dI(this.ar.serializer,o);i=i.add(s.path.popLast());const c=_h(l);r+=c-a.size,n.push(this.ar.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=dI(this.ar.serializer,o.convertToNoDocument(ee.min()));n.push(this.ar.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),D.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function PI(t){return st(t,"remoteDocumentGlobal")}function Ci(t){return st(t,"remoteDocumentsV14")}function ba(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function RI(t,e){const n=e.documentKey.path.toArray();return[t,gh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function kI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=re(n[s],r[s]),i)return i;return i=re(n.length,r.length),i||(i=re(n[n.length-2],r[r.length-2]),i||re(n[n.length-1],r[r.length-1]))}/**
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
 */class DV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class OA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ol(r.mutation,i,Bt.empty(),ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=Ln();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=qa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ln();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=zt();const o=sl(),a=function(){return sl()}();return n.forEach((l,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof vr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ol(d.mutation,c,d.mutation.getFieldMask(),ke.now())):o.set(c.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new DV(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=sl();let i=new we((o,a)=>o-a),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let d=r.get(l)||Bt.empty();d=a.applyToLocalView(c,d),r.set(l,d);const f=(i.get(a.batchId)||ie()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,d=l.value,f=ZS();d.forEach(g=>{if(!s.has(g)){const w=aA(n.get(g),r.get(g));w!==null&&f.set(g,w),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Bg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):D.resolve(Ln());let a=-1,l=s;return o.next(c=>D.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?D.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{l=l.insert(d,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ie())).next(d=>({batchId:a,changes:XS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=qa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=qa();return this.indexManager.getCollectionParents(e,s).next(a=>D.forEach(a,l=>{const c=function(f,g){return new _r(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Te.newInvalidDocument(d)))});let a=qa();return o.forEach((l,c)=>{const d=s.get(l);d!==void 0&&ol(d.mutation,c,Bt.empty(),ke.now()),lu(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class VV{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return D.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:We(i.createTime)}}(n)),D.resolve()}getNamedQuery(e,n){return D.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:Qg(i.bundledQuery),readTime:We(i.readTime)}}(n)),D.resolve()}}/**
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
 */class OV{constructor(){this.overlays=new we(H.comparator),this.hr=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ln();return D.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),D.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const i=Ln(),s=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return D.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Ln(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=Ln(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return D.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Gg(n,r));let s=this.hr.get(n);s===void 0&&(s=ie(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class Xg{constructor(){this.Pr=new ye(Ze.Ir),this.Tr=new ye(Ze.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ze(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new H(new le([])),r=new Ze(n,e),i=new Ze(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new H(new le([])),r=new Ze(n,e),i=new Ze(n,e+1);let s=ie();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ze(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return H.comparator(e.key,n.key)||re(e.pr,n.pr)}static Er(e,n){return re(e.pr,n.pr)||H.comparator(e.key,n.key)}}/**
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
 */class LV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ye(Ze.Ir)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new qg(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),i=new Ze(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ye(re);return n.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),D.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new H(s),0);let a=new ye(re);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),D.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Z(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return D.forEach(n.mutations,i=>{const s=new Ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ze(n,0),i=this.wr.firstAfterOrEqual(r);return D.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class MV{constructor(e){this.vr=e,this.docs=function(){return new we(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():Te.newInvalidDocument(n))}getEntries(e,n){let r=zt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Te.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=zt();const o=n.path,a=new H(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:d}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Mg(PS(d),r)<=0||(i.has(d.key)||lu(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Fr(e,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new FV(this)}getSize(e){return D.resolve(this.size)}}class FV extends DA{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),D.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class jV{constructor(e){this.persistence=e,this.Mr=new Ei(n=>os(n),ou),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Xg,this.targetCount=0,this.Lr=hs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),D.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new hs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.qn(n),D.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.Nr.containsKey(n))}}/**
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
 */class LA{constructor(e,n){this.Br={},this.overlays={},this.kr=new Ut(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new jV(this),this.indexManager=new TV,this.remoteDocumentCache=function(i){return new MV(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new PA(n),this.$r=new VV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new OV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new LV(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new UV(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return D.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class UV extends kS{constructor(e){super(),this.currentSequenceNumber=e}}class td{constructor(e){this.persistence=e,this.zr=new Xg,this.jr=null}static Hr(e){return new td(e)}get Jr(){if(this.jr)return this.jr;throw Y()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),D.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Jr,r=>{const i=H.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return D.or([()=>D.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class BV{constructor(e){this.serializer=e}O(e,n,r,i){const s=new Qh("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",$w,{unique:!0}),l.createObjectStore("documentMutations")}(e),CI(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=D.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),CI(e)),o=o.next(()=>function(l){const c=l.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ee.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,c){return c.store("mutations").U().next(d=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",$w,{unique:!0});const f=c.store("mutations"),g=d.map(w=>f.put(w));return D.waitFor(g)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const c=l.createObjectStore("documentOverlays",{keyPath:SD});c.createIndex("collectionPathOverlayIndex",AD,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",PD,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const c=l.createObjectStore("remoteDocumentsV14",{keyPath:fD});c.createIndex("documentKeyIndex",pD),c.createIndex("collectionGroupIndex",mD)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:wD}).createIndex("sequenceNumberIndex",ID,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:ED}).createIndex("documentKeyIndex",TD,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),o}ei(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=_h(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>D.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>D.forEach(a,l=>{Z(l.userId===s.userId);const c=Li(this.serializer,l);return xA(e,s.userId,c).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new le(o),c=function(f){return[0,bt(f)]}(l);s.push(n.get(c).next(d=>d?D.resolve():(f=>n.put({targetId:0,path:bt(f),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>D.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:vD});const r=n.store("collectionParents"),i=new Jg,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:bt(l)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new le(o);return s(l.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,l],c)=>{const d=On(a);return s(d.popLast())}))}ri(e){const n=e.store("targets");return n.J((r,i)=>{const s=Ga(i),o=RA(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(f){return f.document?new H(le.fromString(f.document.name).popFirst(5)):f.noDocument?H.fromSegments(f.noDocument.path):f.unknownDocument?H.fromSegments(f.unknownDocument.path):Y()}(o).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>D.waitFor(i))}si(e,n){const r=n.store("mutations"),i=VA(this.serializer),s=new LA(td.Hr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var c;let d=(c=a.get(l.userId))!==null&&c!==void 0?c:ie();Li(this.serializer,l).keys().forEach(f=>d=d.add(f)),a.set(l.userId,d)}),D.forEach(a,(l,c)=>{const d=new tt(c),f=Zh.lt(this.serializer,d),g=s.getIndexManager(d),w=ed.lt(d,this.serializer,g,s.referenceDelegate);return new OA(i,w,f,g).recalculateAndSaveOverlaysForDocumentKeys(new Hp(n,Ut.oe),l).next()})})}}function CI(t){t.createObjectStore("targetDocuments",{keyPath:yD}).createIndex("documentTargetsIndex",_D,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",gD,{unique:!0}),t.createObjectStore("targetGlobal")}const Vf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Zg{constructor(e,n,r,i,s,o,a,l,c,d,f=16){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=c,this.ai=d,this.ui=f,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=g=>Promise.resolve(),!Zg.D())throw new B(L.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new xV(this,i),this.Ti=n+"main",this.serializer=new PA(l),this.Ei=new Un(this.Ti,this.ui,new BV(this.serializer)),this.Qr=new AV(this.referenceDelegate,this.serializer),this.remoteDocumentCache=VA(this.serializer),this.$r=new yV,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,d===!1&&$e("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new B(L.FAILED_PRECONDITION,Vf);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new Ut(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>uc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(Ii(e))return z("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return z("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return Na(e).get("owner").next(n=>D.resolve(this.Si(n)))}bi(e){return uc(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=st(n,"clientMetadata");return r.U().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return D.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?D.resolve(!0):Na(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new B(L.FAILED_PRECONDITION,Vf);return!1}}return!(!this.networkEnabled||!this.inForeground)||uc(e).U().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&z("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Hp(e,Ut.oe);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Li()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>uc(e).U().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return ed.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new SV(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Zh.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){z("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===16?kD:l===15?OS:l===14?VS:l===13?DS:l===12?RD:l===11?NS:void Y()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new Hp(a,this.kr?this.kr.next():Ut.oe),n==="readwrite-primary"?this.gi(o).next(l=>!!l||this.pi(o)).next(l=>{if(!l)throw $e(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new B(L.FAILED_PRECONDITION,RS);return r(o)}).next(l=>this.wi(o).next(()=>l)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return Na(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new B(L.FAILED_PRECONDITION,Vf)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Na(e).put("owner",n)}static D(){return Un.D()}yi(e){const n=Na(e);return n.get("owner").next(r=>this.Si(r)?(z("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):D.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||($e(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;eS()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return z("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return $e("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){$e("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Na(t){return st(t,"owner")}function uc(t){return st(t,"clientMetadata")}function ey(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class ty{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ty(e,n.fromCache,r,i)}}/**
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
 */class zV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class MA{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return eS()?8:CS(Ce())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new zV;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Fs()<=oe.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",js(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),D.resolve()):(Fs()<=oe.DEBUG&&z("QueryEngine","Query:",js(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Fs()<=oe.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",js(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nt(n))):D.resolve())}ji(e,n){if(tI(n))return D.resolve(null);let r=Nt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=mh(n,null,"F"),r=Nt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,mh(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,i){return tI(n)||i.isEqual(ee.min())?D.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?D.resolve(null):(Fs()<=oe.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),js(n)),this.es(e,o,n,AS(i,-1)).next(a=>a))})}Zi(e,n){let r=new ye(YS(e));return n.forEach((i,s)=>{lu(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Fs()<=oe.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",js(n)),this.zi.getDocumentsMatchingQuery(e,n,Zt.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class $V{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new we(re),this.rs=new Ei(s=>os(s),ou),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OA(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function FA(t,e,n,r){return new $V(t,e,n,r)}async function jA(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ie();for(const c of i){o.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function qV(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,d){const f=c.batch,g=f.keys();let w=D.resolve();return g.forEach(R=>{w=w.next(()=>d.getEntry(l,R)).next(k=>{const x=c.docVersions.get(R);Z(x!==null),k.version.compareTo(x)<0&&(f.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),w.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ie();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function UA(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function WV(t,e){const n=Q(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((d,f)=>{const g=i.get(f);if(!g)return;a.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,f)));let w=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?w=w.withResumeToken(Xe.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(f,w),function(k,x,E){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,w,d)&&a.push(n.Qr.updateTargetData(s,w))});let l=zt(),c=ie();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(BA(s,o,e.documentUpdates).next(d=>{l=d.cs,c=d.ls})),!r.isEqual(ee.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return D.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ns=i,s))}function BA(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=zt();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function GV(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function xo(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function bo(t,e,n){const r=Q(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ii(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function vh(t,e,n){const r=Q(t);let i=ee.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,d){const f=Q(l),g=f.rs.get(d);return g!==void 0?D.resolve(f.ns.get(g)):f.Qr.getTargetData(c,d)}(r,o,Nt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:ie())).next(a=>(qA(r,QS(e),a),{documents:a,hs:s})))}function zA(t,e){const n=Q(t),r=Q(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function $A(t,e){const n=Q(t),r=n.ss.get(e)||ee.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,AS(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(qA(n,e,i),i))}function qA(t,e,n){let r=t.ss.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function KV(t,e,n,r){const i=Q(t);let s=ie(),o=zt();for(const c of n){const d=e.Ps(c.metadata.name);c.document&&(s=s.add(d));const f=e.Is(c);f.setReadTime(e.Ts(c.metadata.readTime)),o=o.insert(d,f)}const a=i.os.newChangeBuffer({trackRemovals:!0}),l=await xo(i,function(d){return Nt(Wo(le.fromString(`__bundle__/docs/${d}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>BA(c,a,o).next(d=>(a.apply(c),d)).next(d=>i.Qr.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.Qr.addMatchingKeys(c,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,d.cs,d.ls)).next(()=>d.cs)))}async function HV(t,e,n=ie()){const r=await xo(t,Nt(Qg(e.bundledQuery))),i=Q(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=We(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(Xe.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function xI(t,e){return`firestore_clients_${t}_${e}`}function bI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Of(t,e){return`firestore_targets_${t}_${e}`}class wh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new B(i.error.code,i.error.message))),o?new wh(e,n,i.state,s):($e("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class al{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new B(r.error.code,r.error.message))),s?new al(e,r.state,i):($e("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ih{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=zg();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=xS(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Ih(e,s):($e("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class ny{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new ny(n.clientId,n.onlineState):($e("SharedClientState",`Failed to parse online state: ${e}`),null)}}class lm{constructor(){this.activeTargetIds=zg()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Lf{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new we(re),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=xI(this.persistenceKey,this.Vs),this.Ss=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new lm),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Fs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(xI(this.persistenceKey,r));if(i){const s=Ih.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,n,r){this.Ls(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Of(this.persistenceKey,e));if(r){const i=al.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Of(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return z("SharedClientState","READ",e,n),n}setItem(e,n){z("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){z("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if(z("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void $e("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=Ut.oe;if(s!=null)try{const a=JSON.parse(s);Z(typeof a=="number"),o=a}catch(a){$e("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Ut.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(e,n,r){const i=new wh(this.currentUser,e,n,r),s=bI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Bs(e){const n=bI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=Of(this.persistenceKey,e),s=new al(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return Ih.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return wh.Es(new tt(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return al.Es(i,n)}xs(e){return ny.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);z("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=zg();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class WA{constructor(){this.no=new lm,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new lm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class QV{io(e){}shutdown(){}}/**
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
 */class NI{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let cc=null;function Mf(){return cc===null?cc=function(){return 268435456+Math.round(2147483648*Math.random())}():cc++,"0x"+cc.toString(16)}/**
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
 */const YV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class JV{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const wt="WebChannelConnection";class XV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Mf(),l=this.vo(n,r.toUriEncodedString());z("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,l,c,i).then(d=>(z("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw An("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",i),d})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=YV[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Mf();return new Promise((o,a)=>{const l=new gS;l.setWithCredentials(!0),l.listenOnce(_S.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ac.NO_ERROR:const d=l.getResponseJson();z(wt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Ac.TIMEOUT:z(wt,`RPC '${e}' ${s} timed out`),a(new B(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ac.HTTP_ERROR:const f=l.getStatus();if(z(wt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const w=g==null?void 0:g.error;if(w&&w.status&&w.message){const R=function(x){const E=x.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(E)>=0?E:L.UNKNOWN}(w.status);a(new B(R,w.message))}else a(new B(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new B(L.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{z(wt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);z(wt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Mf(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=IS(),a=wS(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new yS({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=s.join("");z(wt,`Creating RPC '${e}' stream ${i}: ${d}`,l);const f=o.createWebChannel(d,l);let g=!1,w=!1;const R=new JV({lo:x=>{w?z(wt,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(g||(z(wt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),g=!0),z(wt,`RPC '${e}' stream ${i} sending:`,x),f.send(x))},ho:()=>f.close()}),k=(x,E,v)=>{x.listen(E,T=>{try{v(T)}catch(O){setTimeout(()=>{throw O},0)}})};return k(f,$a.EventType.OPEN,()=>{w||(z(wt,`RPC '${e}' stream ${i} transport opened.`),R.mo())}),k(f,$a.EventType.CLOSE,()=>{w||(w=!0,z(wt,`RPC '${e}' stream ${i} transport closed`),R.po())}),k(f,$a.EventType.ERROR,x=>{w||(w=!0,An(wt,`RPC '${e}' stream ${i} transport errored:`,x),R.po(new B(L.UNAVAILABLE,"The operation could not be completed")))}),k(f,$a.EventType.MESSAGE,x=>{var E;if(!w){const v=x.data[0];Z(!!v);const T=v,O=T.error||((E=T[0])===null||E===void 0?void 0:E.error);if(O){z(wt,`RPC '${e}' stream ${i} received error:`,O);const j=O.status;let F=function(S){const A=Ge[S];if(A!==void 0)return cA(A)}(j),I=O.message;F===void 0&&(F=L.INTERNAL,I="Unknown error status: "+j+" with message "+O.message),w=!0,R.po(new B(F,I)),f.close()}else z(wt,`RPC '${e}' stream ${i} received:`,v),R.yo(v)}}),k(a,vS.STAT_EVENT,x=>{x.stat===Gp.PROXY?z(wt,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===Gp.NOPROXY&&z(wt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.fo()},0),R}}/**
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
 */function GA(){return typeof window<"u"?window:null}function Nc(){return typeof document<"u"?document:null}/**
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
 */function du(t){return new oV(t,!0)}/**
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
 */class ry{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class KA{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new ry(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===L.RESOURCE_EXHAUSTED?($e(n.toString()),$e("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new B(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZV extends KA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=uV(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?We(o.readTime):ee.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=rm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=fh(l)?{documents:wA(s,l)}:{query:IA(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=pA(s,o.resumeToken);const c=tm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=Co(s,o.snapshotVersion.toTimestamp());const c=tm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=hV(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=rm(this.serializer),n.removeTarget=e,this.i_(n)}}class eO extends KA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=cV(e.writeResults,e.commitTime),r=We(e.commitTime);return this.listener.A_(r,n)}return Z(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=rm(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ql(this.serializer,r))};this.i_(n)}}/**
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
 */class tO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,nm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(L.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,nm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(L.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class nO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?($e(n),this.y_=!1):z("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class rO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Ti(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=Q(l);c.M_.add(4),await Ho(c),c.N_.set("Unknown"),c.M_.delete(4),await fu(c)}(this))})}),this.N_=new nO(r,i)}}async function fu(t){if(Ti(t))for(const e of t.x_)await e(!0)}async function Ho(t){for(const e of t.x_)await e(!1)}function nd(t,e){const n=Q(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),oy(n)?sy(n):Yo(n).Xo()&&iy(n,e))}function No(t,e){const n=Q(t),r=Yo(n);n.F_.delete(e),r.Xo()&&HA(n,e),n.F_.size===0&&(r.Xo()?r.n_():Ti(n)&&n.N_.set("Unknown"))}function iy(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Yo(t).P_(e)}function HA(t,e){t.L_.xe(e),Yo(t).I_(e)}function sy(t){t.L_=new nV({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Yo(t).start(),t.N_.w_()}function oy(t){return Ti(t)&&!Yo(t).Zo()&&t.F_.size>0}function Ti(t){return Q(t).M_.size===0}function QA(t){t.L_=void 0}async function iO(t){t.N_.set("Online")}async function sO(t){t.F_.forEach((e,n)=>{iy(t,e)})}async function oO(t,e){QA(t),oy(t)?(t.N_.D_(e),sy(t)):t.N_.set("Unknown")}async function aO(t,e,n){if(t.N_.set("Online"),e instanceof fA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Eh(t,r)}else if(e instanceof bc?t.L_.Ke(e):e instanceof dA?t.L_.He(e):t.L_.We(e),!n.isEqual(ee.min()))try{const r=await UA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const d=s.F_.get(l);if(!d)return;s.F_.set(l,d.withResumeToken(Xe.EMPTY_BYTE_STRING,d.snapshotVersion)),HA(s,l);const f=new tr(d.target,l,c,d.sequenceNumber);iy(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await Eh(t,r)}}async function Eh(t,e,n){if(!Ii(e))throw e;t.M_.add(1),await Ho(t),t.N_.set("Offline"),n||(n=()=>UA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await fu(t)})}function YA(t,e){return e().catch(n=>Eh(t,n,e))}async function Qo(t){const e=Q(t),n=hi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;lO(e);)try{const i=await GV(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,uO(e,i)}catch(i){await Eh(e,i)}JA(e)&&XA(e)}function lO(t){return Ti(t)&&t.v_.length<10}function uO(t,e){t.v_.push(e);const n=hi(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function JA(t){return Ti(t)&&!hi(t).Zo()&&t.v_.length>0}function XA(t){hi(t).start()}async function cO(t){hi(t).V_()}async function hO(t){const e=hi(t);for(const n of t.v_)e.d_(n.mutations)}async function dO(t,e,n){const r=t.v_.shift(),i=Wg.from(r,e,n);await YA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Qo(t)}async function fO(t,e){e&&hi(t).E_&&await async function(r,i){if(function(o){return uA(o)&&o!==L.ABORTED}(i.code)){const s=r.v_.shift();hi(r).t_(),await YA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Qo(r)}}(t,e),JA(t)&&XA(t)}async function DI(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=Ti(n);n.M_.add(3),await Ho(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await fu(n)}async function um(t,e){const n=Q(t);e?(n.M_.delete(2),await fu(n)):e||(n.M_.add(2),await Ho(n),n.N_.set("Unknown"))}function Yo(t){return t.B_||(t.B_=function(n,r,i){const s=Q(n);return s.f_(),new ZV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:iO.bind(null,t),To:sO.bind(null,t),Ao:oO.bind(null,t),h_:aO.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),oy(t)?sy(t):t.N_.set("Unknown")):(await t.B_.stop(),QA(t))})),t.B_}function hi(t){return t.k_||(t.k_=function(n,r,i){const s=Q(n);return s.f_(),new eO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:cO.bind(null,t),Ao:fO.bind(null,t),R_:hO.bind(null,t),A_:dO.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Qo(t)):(await t.k_.stop(),t.v_.length>0&&(z("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class ay{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ay(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jo(t,e){if($e("AsyncQueue",`${e}: ${t}`),Ii(t))return new B(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class uo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=qa(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new uo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof uo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new uo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class VI{constructor(){this.q_=new we(H.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):Y():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Do{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Do(e,n,uo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&au(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class pO{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class mO{constructor(){this.queries=new Ei(e=>HS(e),au),this.onlineState="Unknown",this.z_=new Set}}async function ly(t,e){const n=Q(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new pO,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Jo(o,`Initialization of query '${js(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&cy(n)}async function uy(t,e){const n=Q(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function gO(t,e){const n=Q(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&cy(n)}function yO(t,e,n){const r=Q(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function cy(t){t.z_.forEach(e=>{e.next()})}var cm,OI;(OI=cm||(cm={})).J_="default",OI.Cache="cache";class hy{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Do(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Do.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==cm.Cache}}/**
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
 */class _O{constructor(e,n){this.ia=e,this.byteLength=n}sa(){return"metadata"in this.ia}}/**
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
 */class LI{constructor(e){this.serializer=e}Ps(e){return Bn(this.serializer,e)}Is(e){return e.metadata.exists?vA(this.serializer,e.document,!1):Te.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return We(e)}}class vO{constructor(e,n,r){this.oa=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=ZA(e)}_a(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ia.namedQuery)this.queries.push(e.ia.namedQuery);else if(e.ia.documentMetadata){this.documents.push({metadata:e.ia.documentMetadata}),e.ia.documentMetadata.exists||++n;const r=le.fromString(e.ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ia.document&&(this.documents[this.documents.length-1].document=e.ia.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}aa(e){const n=new Map,r=new LI(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ie()).add(s);n.set(o,a)}}return n}async complete(){const e=await KV(this.localStore,new LI(this.serializer),this.documents,this.oa.id),n=this.aa(this.documents);for(const r of this.queries)await HV(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ua:this.collectionGroups,ca:e}}}function ZA(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class eP{constructor(e){this.key=e}}class tP{constructor(e){this.key=e}}class nP{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ie(),this.mutatedKeys=ie(),this.Ia=YS(e),this.Ta=new uo(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new VI,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const g=i.get(d),w=lu(this.query,f)?f:null,R=!!g&&this.mutatedKeys.has(g.key),k=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let x=!1;g&&w?g.data.isEqual(w.data)?R!==k&&(r.track({type:3,doc:w}),x=!0):this.Ra(g,w)||(r.track({type:2,doc:w}),x=!0,(l&&this.Ia(w,l)>0||c&&this.Ia(w,c)<0)&&(a=!0)):!g&&w?(r.track({type:0,doc:w}),x=!0):g&&!w&&(r.track({type:1,doc:g}),x=!0,(l||c)&&(a=!0)),x&&(w?(o=o.add(w),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,f)=>function(w,R){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return k(w)-k(R)}(d.type,f.type)||this.Ia(d.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,c=l!==this.ha;return this.ha=l,o.length!==0||c?{snapshot:new Do(this.query,e.Ta,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new VI,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ie(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new tP(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new eP(r))}),n}pa(e){this.la=e.hs,this.Pa=ie();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Do.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class wO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class IO{constructor(e){this.key=e,this.wa=!1}}class EO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Ei(a=>HS(a),au),this.Da=new Map,this.Ca=new Set,this.va=new we(H.comparator),this.Fa=new Map,this.Ma=new Xg,this.xa={},this.Oa=new Map,this.Na=hs.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function TO(t,e,n=!0){const r=rd(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await rP(r,e,n,!0),i}async function SO(t,e){const n=rd(t);await rP(n,e,!0,!1)}async function rP(t,e,n,r){const i=await xo(t.localStore,Nt(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await dy(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&nd(t.remoteStore,i),a}async function dy(t,e,n,r,i){t.Ba=(f,g,w)=>async function(k,x,E,v){let T=x.view.da(E);T.Xi&&(T=await vh(k.localStore,x.query,!1).then(({documents:I})=>x.view.da(I,T)));const O=v&&v.targetChanges.get(x.targetId),j=v&&v.targetMismatches.get(x.targetId)!=null,F=x.view.applyChanges(T,k.isPrimaryClient,O,j);return hm(k,x.targetId,F.fa),F.snapshot}(t,f,g,w);const s=await vh(t.localStore,e,!0),o=new nP(e,s.hs),a=o.da(s.documents),l=hu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);hm(t,n,c.fa);const d=new wO(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function AO(t,e,n){const r=Q(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!au(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await bo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&No(r.remoteStore,i.targetId),Vo(r,i.targetId)}).catch(wi)):(Vo(r,i.targetId),await bo(r.localStore,i.targetId,!0))}async function PO(t,e){const n=Q(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),No(n.remoteStore,r.targetId))}async function RO(t,e,n){const r=gy(t);try{const i=await function(o,a){const l=Q(o),c=ke.now(),d=a.reduce((w,R)=>w.add(R.key),ie());let f,g;return l.persistence.runTransaction("Locally write mutations","readwrite",w=>{let R=zt(),k=ie();return l.os.getEntries(w,d).next(x=>{R=x,R.forEach((E,v)=>{v.isValidDocument()||(k=k.add(E))})}).next(()=>l.localDocuments.getOverlayedDocuments(w,R)).next(x=>{f=x;const E=[];for(const v of a){const T=ZD(v,f.get(v.key).overlayedDocument);T!=null&&E.push(new vr(v.key,T,jS(T.value.mapValue),Re.exists(!0)))}return l.mutationQueue.addMutationBatch(w,c,E,a)}).next(x=>{g=x;const E=x.applyToLocalDocumentSet(f,k);return l.documentOverlayCache.saveOverlays(w,x.batchId,E)})}).then(()=>({batchId:g.batchId,changes:XS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.xa[o.currentUser.toKey()];c||(c=new we(re)),c=c.insert(a,l),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await wr(r,i.changes),await Qo(r.remoteStore)}catch(i){const s=Jo(i,"Failed to persist write");n.reject(s)}}async function iP(t,e){const n=Q(t);try{const r=await WV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Z(o.wa):i.removedDocuments.size>0&&(Z(o.wa),o.wa=!1))}),await wr(n,r,e)}catch(r){await wi(r)}}function MI(t,e,n){const r=Q(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Q(o);l.onlineState=a;let c=!1;l.queries.forEach((d,f)=>{for(const g of f.U_)g.j_(a)&&(c=!0)}),c&&cy(l)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kO(t,e,n){const r=Q(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new we(H.comparator);o=o.insert(s,Te.newNoDocument(s,ee.min()));const a=ie().add(s),l=new cu(ee.min(),new Map,new we(re),o,a);await iP(r,l),r.va=r.va.remove(s),r.Fa.delete(e),my(r)}else await bo(r.localStore,e,!1).then(()=>Vo(r,e,n)).catch(wi)}async function CO(t,e){const n=Q(t),r=e.batch.batchId;try{const i=await qV(n.localStore,e);py(n,r,null),fy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wr(n,i)}catch(i){await wi(i)}}async function xO(t,e,n){const r=Q(t);try{const i=await function(o,a){const l=Q(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(Z(f!==null),d=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>l.localDocuments.getDocuments(c,d))})}(r.localStore,e);py(r,e,n),fy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await wr(r,i)}catch(i){await wi(i)}}async function bO(t,e){const n=Q(t);Ti(n.remoteStore)||z("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=Q(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Oa.get(r)||[];i.push(e),n.Oa.set(r,i)}catch(r){const i=Jo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function fy(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function py(t,e,n){const r=Q(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Vo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||sP(t,r)})}function sP(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(No(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),my(t))}function hm(t,e,n){for(const r of n)r instanceof eP?(t.Ma.addReference(r.key,e),NO(t,r)):r instanceof tP?(z("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||sP(t,r.key)):Y()}function NO(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(z("SyncEngine","New document in limbo: "+n),t.Ca.add(r),my(t))}function my(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new H(le.fromString(e)),r=t.Na.next();t.Fa.set(r,new IO(n)),t.va=t.va.insert(n,r),nd(t.remoteStore,new tr(Nt(Wo(n.path)),r,"TargetPurposeLimboResolution",Ut.oe))}}async function wr(t,e,n){const r=Q(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const d=c&&!c.fromCache;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(c){i.push(c);const d=ty.Ki(l.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(l,c){const d=Q(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>D.forEach(c,g=>D.forEach(g.qi,w=>d.persistence.referenceDelegate.addReference(f,g.targetId,w)).next(()=>D.forEach(g.Qi,w=>d.persistence.referenceDelegate.removeReference(f,g.targetId,w)))))}catch(f){if(!Ii(f))throw f;z("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const g=f.targetId;if(!f.fromCache){const w=d.ns.get(g),R=w.snapshotVersion,k=w.withLastLimboFreeSnapshotVersion(R);d.ns=d.ns.insert(g,k)}}}(r.localStore,s))}async function DO(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await jA(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new B(L.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await wr(n,r.us)}}function VO(t,e){const n=Q(t),r=n.Fa.get(e);if(r&&r.wa)return ie().add(r.key);{let i=ie();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}async function OO(t,e){const n=Q(t),r=await vh(n.localStore,e.query,!0),i=e.view.pa(r);return n.isPrimaryClient&&hm(n,e.targetId,i.fa),i}async function LO(t,e){const n=Q(t);return $A(n.localStore,e).then(r=>wr(n,r))}async function MO(t,e,n,r){const i=Q(t),s=await function(a,l){const c=Q(a),d=Q(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>d.vn(f,l).next(g=>g?c.localDocuments.getDocuments(f,g):D.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Qo(i.remoteStore):n==="acknowledged"||n==="rejected"?(py(i,e,r||null),fy(i,e),function(a,l){Q(Q(a).mutationQueue).Mn(l)}(i.localStore,e)):Y(),await wr(i,s)):z("SyncEngine","Cannot apply mutation batch with id: "+e)}async function FO(t,e){const n=Q(t);if(rd(n),gy(n),e===!0&&n.La!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await FI(n,r.toArray());n.La=!0,await um(n.remoteStore,!0);for(const s of i)nd(n.remoteStore,s)}else if(e===!1&&n.La!==!1){const r=[];let i=Promise.resolve();n.Da.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Vo(n,o),bo(n.localStore,o,!0))),No(n.remoteStore,o)}),await i,await FI(n,r),function(o){const a=Q(o);a.Fa.forEach((l,c)=>{No(a.remoteStore,c)}),a.Ma.mr(),a.Fa=new Map,a.va=new we(H.comparator)}(n),n.La=!1,await um(n.remoteStore,!1)}}async function FI(t,e,n){const r=Q(t),i=[],s=[];for(const o of e){let a;const l=r.Da.get(o);if(l&&l.length!==0){a=await xo(r.localStore,Nt(l[0]));for(const c of l){const d=r.ba.get(c),f=await OO(r,d);f.snapshot&&s.push(f.snapshot)}}else{const c=await zA(r.localStore,o);a=await xo(r.localStore,c),await dy(r,oP(c),o,!1,a.resumeToken)}i.push(a)}return r.Sa.h_(s),i}function oP(t){return KS(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function jO(t){return function(n){return Q(Q(n).persistence).Bi()}(Q(t).localStore)}async function UO(t,e,n,r){const i=Q(t);if(i.La)return void z("SyncEngine","Ignoring unexpected query state notification.");const s=i.Da.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await $A(i.localStore,QS(s[0])),a=cu.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Xe.EMPTY_BYTE_STRING);await wr(i,o,a);break}case"rejected":await bo(i.localStore,e,!0),Vo(i,e,r);break;default:Y()}}async function BO(t,e,n){const r=rd(t);if(r.La){for(const i of e){if(r.Da.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){z("SyncEngine","Adding an already active target "+i);continue}const s=await zA(r.localStore,i),o=await xo(r.localStore,s);await dy(r,oP(s),o.targetId,!1,o.resumeToken),nd(r.remoteStore,o)}for(const i of n)r.Da.has(i)&&await bo(r.localStore,i,!1).then(()=>{No(r.remoteStore,i),Vo(r,i)}).catch(wi)}}function rd(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=iP.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kO.bind(null,e),e.Sa.h_=gO.bind(null,e.eventManager),e.Sa.ka=yO.bind(null,e.eventManager),e}function gy(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xO.bind(null,e),e}function zO(t,e,n){const r=Q(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(w,R){const k=Q(w),x=We(R.createTime);return k.persistence.runTransaction("hasNewerBundle","readonly",E=>k.$r.getBundleMetadata(E,R.id)).then(E=>!!E&&E.createTime.compareTo(x)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(w){return{taskState:"Success",documentsLoaded:w.totalDocuments,bytesLoaded:w.totalBytes,totalDocuments:w.totalDocuments,totalBytes:w.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(ZA(l));const c=new vO(l,s.localStore,o.serializer);let d=await o.qa();for(;d;){const g=await c._a(d);g&&a._updateProgress(g),d=await o.qa()}const f=await c.complete();return await wr(s,f.ca,void 0),await function(w,R){const k=Q(w);return k.persistence.runTransaction("Save bundle","readwrite",x=>k.$r.saveBundleMetadata(x,R))}(s.localStore,l),a._completeWith(f.progress),Promise.resolve(f.ua)}catch(l){return An("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class dm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=du(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return FA(this.persistence,new MA,e.initialUser,this.serializer)}createPersistence(e){return new LA(td.Hr,this.serializer)}createSharedClientState(e){return new WA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aP extends dm{constructor(e,n,r){super(),this.Qa=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Qa.initialize(this,e),await gy(this.Qa.syncEngine),await Qo(this.Qa.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return FA(this.persistence,new MA,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new RV(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new cD(n,this.persistence);return new uD(e.asyncQueue,r)}createPersistence(e){const n=ey(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Lt.withCacheSize(this.cacheSizeBytes):Lt.DEFAULT;return new Zg(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,GA(),Nc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new WA}}class $O extends aP{constructor(e,n){super(e,n,!1),this.Qa=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Qa.syncEngine;this.sharedClientState instanceof Lf&&(this.sharedClientState.syncEngine={Zs:MO.bind(null,n),Xs:UO.bind(null,n),eo:BO.bind(null,n),Bi:jO.bind(null,n),Ys:LO.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await FO(this.Qa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=GA();if(!Lf.D(n))throw new B(L.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=ey(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Lf(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class yy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>MI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DO.bind(null,this.syncEngine),await um(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mO}()}createDatastore(e){const n=du(e.databaseInfo.databaseId),r=function(s){return new XV(s)}(e.databaseInfo);return function(s,o,a,l){return new tO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new rO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>MI(this.syncEngine,n,0),function(){return NI.D()?new NI:new QV}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,d){const f=new EO(i,s,o,a,l,c);return d&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=Q(r);z("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Ho(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */function jI(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class id{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):$e("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class qO{constructor(e,n){this.Ua=e,this.serializer=n,this.metadata=new rt,this.buffer=new Uint8Array,this.Wa=function(){return new TextDecoder("utf-8")}(),this.Ga().then(r=>{r&&r.sa()?this.metadata.resolve(r.ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ia)}`))},r=>this.metadata.reject(r))}close(){return this.Ua.cancel()}async getMetadata(){return this.metadata.promise}async qa(){return await this.getMetadata(),this.Ga()}async Ga(){const e=await this.za();if(e===null)return null;const n=this.Wa.decode(e),r=Number(n);isNaN(r)&&this.ja(`length string (${n}) is not valid number`);const i=await this.Ha(r);return new _O(JSON.parse(i),e.length+r)}Ja(){return this.buffer.findIndex(e=>e===123)}async za(){for(;this.Ja()<0&&!await this.Ya(););if(this.buffer.length===0)return null;const e=this.Ja();e<0&&this.ja("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ha(e){for(;this.buffer.length<e;)await this.Ya()&&this.ja("Reached the end of bundle when more is expected.");const n=this.Wa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ja(e){throw this.Ua.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ya(){const e=await this.Ua.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class WO{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new B(L.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=Q(i),a={documents:s.map(f=>$l(o.serializer,f))},l=await o.xo("BatchGetDocuments",o.serializer.databaseId,le.emptyPath(),a,s.length),c=new Map;l.forEach(f=>{const g=lV(o.serializer,f);c.set(g.key.toString(),g)});const d=[];return s.forEach(f=>{const g=c.get(f.toString());Z(!!g),d.push(g)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ko(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=H.fromPath(r);this.mutations.push(new $g(i,this.precondition(i)))}),await async function(r,i){const s=Q(r),o={writes:i.map(a=>ql(s.serializer,a))};await s.Co("Commit",s.serializer.databaseId,le.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw Y();n=ee.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new B(L.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(ee.min())?Re.exists(!1):Re.updateTime(n):Re.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(ee.min()))throw new B(L.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Re.updateTime(n)}return Re.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class GO{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Za=r.maxAttempts,this.Yo=new ry(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const e=new WO(this.datastore),n=this.tu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.nu(i)}))}).catch(r=>{this.nu(r)})})}tu(e){try{const n=this.updateFunction(e);return!su(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!uA(n)}return!1}}/**
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
 */class KO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=TS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Jo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Dc(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await jA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function fm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _y(t);z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>DI(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>DI(e.remoteStore,i)),t._onlineComponents=e}function lP(t){return t.name==="FirebaseError"?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function _y(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Dc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!lP(n))throw n;An("Error using user provided cache. Falling back to memory cache: "+n),await Dc(t,new dm)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Dc(t,new dm);return t._offlineComponents}async function sd(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await fm(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await fm(t,new yy))),t._onlineComponents}function uP(t){return _y(t).then(e=>e.persistence)}function vy(t){return _y(t).then(e=>e.localStore)}function cP(t){return sd(t).then(e=>e.remoteStore)}function wy(t){return sd(t).then(e=>e.syncEngine)}function HO(t){return sd(t).then(e=>e.datastore)}async function Oo(t){const e=await sd(t),n=e.eventManager;return n.onListen=TO.bind(null,e.syncEngine),n.onUnlisten=AO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=SO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=PO.bind(null,e.syncEngine),n}function QO(t){return t.asyncQueue.enqueue(async()=>{const e=await uP(t),n=await cP(t);return e.setNetworkEnabled(!0),function(i){const s=Q(i);return s.M_.delete(0),fu(s)}(n)})}function YO(t){return t.asyncQueue.enqueue(async()=>{const e=await uP(t),n=await cP(t);return e.setNetworkEnabled(!1),async function(i){const s=Q(i);s.M_.add(0),await Ho(s),s.N_.set("Offline")}(n)})}function JO(t,e){const n=new rt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,d){const f=Q(c);return f.persistence.runTransaction("read document","readonly",g=>f.localDocuments.getDocument(g,d))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new B(L.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=Jo(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await vy(t),e,n)),n.promise}function hP(t,e,n={}){const r=new rt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const d=new id({next:g=>{o.enqueueAndForget(()=>uy(s,f));const w=g.docs.has(a);!w&&g.fromCache?c.reject(new B(L.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&l&&l.source==="server"?c.reject(new B(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),f=new hy(Wo(a.path),d,{includeMetadataChanges:!0,ra:!0});return ly(s,f)}(await Oo(t),t.asyncQueue,e,n,r)),r.promise}function XO(t,e){const n=new rt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await vh(i,s,!0),l=new nP(s,a.hs),c=l.da(a.documents),d=l.applyChanges(c,!1);o.resolve(d.snapshot)}catch(a){const l=Jo(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await vy(t),e,n)),n.promise}function dP(t,e,n={}){const r=new rt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const d=new id({next:g=>{o.enqueueAndForget(()=>uy(s,f)),g.fromCache&&l.source==="server"?c.reject(new B(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),f=new hy(a,d,{includeMetadataChanges:!0,ra:!0});return ly(s,f)}(await Oo(t),t.asyncQueue,e,n,r)),r.promise}function ZO(t,e){const n=new id(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){Q(i).z_.add(s),s.next()}(await Oo(t),n)),()=>{n.$a(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){Q(i).z_.delete(s)}(await Oo(t),n))}}function eL(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?hA().encode(o):o,function(d,f){return new qO(d,f)}(function(d,f){if(d instanceof Uint8Array)return jI(d,f);if(d instanceof ArrayBuffer)return jI(new Uint8Array(d),f);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,du(e));t.asyncQueue.enqueueAndForget(async()=>{zO(await wy(t),i,r)})}function tL(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=Q(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await vy(t),e))}/**
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
 */function fP(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const UI=new Map;/**
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
 */function Iy(t,e,n){if(!n)throw new B(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pP(t,e,n,r){if(e===!0&&r===!0)throw new B(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function BI(t){if(!H.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function zI(t){if(H.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function od(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function de(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=od(t);throw new B(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function mP(t,e){if(e<=0)throw new B(L.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class $I{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fP((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $I({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $I(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new X1;switch(r.type){case"firstParty":return new nD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=UI.get(n);r&&(z("ComponentProvider","Removing Datastore"),UI.delete(n),r.terminate())}(this),Promise.resolve()}}function nL(t,e,n,r={}){var i;const s=(t=de(t,pu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&An("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=tt.MOCK_USER;else{a=IN(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new B(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new tt(c)}t._authCredentials=new Z1(new ES(a,l))}}/**
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
 */let Dt=class gP{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gP(this.firestore,e,this._query)}},Ne=class yP{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yP(this.firestore,e,this._key)}},ei=class _P extends Dt{constructor(e,n,r){super(e,n,Wo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new H(e))}withConverter(e){return new _P(this.firestore,e,this._path)}};function vP(t,e,...n){if(t=ne(t),Iy("collection","path",e),t instanceof pu){const r=le.fromString(e,...n);return zI(r),new ei(t,null,r)}{if(!(t instanceof Ne||t instanceof ei))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return zI(r),new ei(t.firestore,null,r)}}function rL(t,e){if(t=de(t,pu),Iy("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new B(L.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Dt(t,null,function(r){return new _r(le.emptyPath(),r)}(e))}function Th(t,e,...n){if(t=ne(t),arguments.length===1&&(e=TS.newId()),Iy("doc","path",e),t instanceof pu){const r=le.fromString(e,...n);return BI(r),new Ne(t,null,new H(r))}{if(!(t instanceof Ne||t instanceof ei))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return BI(r),new Ne(t.firestore,t instanceof ei?t.converter:null,new H(r))}}function wP(t,e){return t=ne(t),e=ne(e),(t instanceof Ne||t instanceof ei)&&(e instanceof Ne||e instanceof ei)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function IP(t,e){return t=ne(t),e=ne(e),t instanceof Dt&&e instanceof Dt&&t.firestore===e.firestore&&au(t._query,e._query)&&t.converter===e.converter}/**
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
 */class iL{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new ry(this,"async_queue_retry"),this.hu=()=>{const n=Nc();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Nc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Nc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new rt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Ii(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw $e("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=ay.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&Y()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function pm(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class sL{constructor(){this._progressObserver={},this._taskCompletionResolver=new rt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const oL=-1;let Fe=class extends pu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new iL}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||EP(this),this._firestoreClient.terminate()}};function ot(t){return t._firestoreClient||EP(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function EP(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,d){return new bD(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,fP(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new KO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function aL(t,e){SP(t=de(t,Fe));const n=ot(t);if(n._uninitializedComponentsProvider)throw new B(L.FAILED_PRECONDITION,"SDK cache is already specified.");An("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new yy;return TP(n,i,new aP(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function lL(t){SP(t=de(t,Fe));const e=ot(t);if(e._uninitializedComponentsProvider)throw new B(L.FAILED_PRECONDITION,"SDK cache is already specified.");An("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new yy;return TP(e,r,new $O(r,n.cacheSizeBytes))}function TP(t,e,n){const r=new rt;return t.asyncQueue.enqueue(async()=>{try{await Dc(t,n),await fm(t,e),r.resolve()}catch(i){const s=i;if(!lP(s))throw s;An("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function uL(t){if(t._initialized&&!t._terminated)throw new B(L.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new rt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Un.D())return Promise.resolve();const i=r+"main";await Un.delete(i)}(ey(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function cL(t){return function(n){const r=new rt;return n.asyncQueue.enqueueAndForget(async()=>bO(await wy(n),r)),r.promise}(ot(t=de(t,Fe)))}function hL(t){return QO(ot(t=de(t,Fe)))}function dL(t){return YO(ot(t=de(t,Fe)))}function fL(t,e){const n=ot(t=de(t,Fe)),r=new sL;return eL(n,t._databaseId,e,r),r}function pL(t,e){return tL(ot(t=de(t,Fe)),e).then(n=>n?new Dt(t,null,n.query):null)}function SP(t){if(t._initialized||t._terminated)throw new B(L.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class qn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qn(Xe.fromBase64String(e))}catch(n){throw new B(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qn(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let di=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let Ts=class{constructor(e){this._methodName=e}};/**
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
 */class ad{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
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
 */const mL=/^__.*__$/;class gL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new vr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Go(e,this.data,n,this.fieldTransforms)}}class AP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new vr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function PP(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class ld{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new ld(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Sh(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(PP(this.fu)&&mL.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class yL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||du(e)}Fu(e,n,r,i=!1){return new ld({fu:e,methodName:n,vu:r,path:Pe.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ss(t){const e=t._freezeSettings(),n=du(t._databaseId);return new yL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ud(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);ky("Data must be an object, but it was:",o,r);const a=CP(r,o);let l,c;if(s.merge)l=new Bt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const g=mm(e,f,n);if(!o.contains(g))throw new B(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);bP(d,g)||d.push(g)}l=new Bt(d),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new gL(new ct(a),l,c)}class mu extends Ts{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mu}}function RP(t,e,n){return new ld({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ey extends Ts{_toFieldTransform(e){return new uu(e.path,new Ro)}isEqual(e){return e instanceof Ey}}class Ty extends Ts{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=RP(this,e,!0),r=this.Mu.map(s=>As(s,n)),i=new as(r);return new uu(e.path,i)}isEqual(e){return e instanceof Ty&&Dl(this.Mu,e.Mu)}}class Sy extends Ts{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=RP(this,e,!0),r=this.Mu.map(s=>As(s,n)),i=new ls(r);return new uu(e.path,i)}isEqual(e){return e instanceof Sy&&Dl(this.Mu,e.Mu)}}class Ay extends Ts{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new ko(e.serializer,nA(e.serializer,this.xu));return new uu(e.path,n)}isEqual(e){return e instanceof Ay&&this.xu===e.xu}}function Py(t,e,n,r){const i=t.Fu(1,e,n);ky("Data must be an object, but it was:",i,r);const s=[],o=ct.empty();Es(r,(l,c)=>{const d=Cy(e,l,n);c=ne(c);const f=i.Su(d);if(c instanceof mu)s.push(d);else{const g=As(c,f);g!=null&&(s.push(d),o.set(d,g))}});const a=new Bt(s);return new AP(o,a,i.fieldTransforms)}function Ry(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[mm(e,r,n)],l=[i];if(s.length%2!=0)throw new B(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)a.push(mm(e,s[g])),l.push(s[g+1]);const c=[],d=ct.empty();for(let g=a.length-1;g>=0;--g)if(!bP(c,a[g])){const w=a[g];let R=l[g];R=ne(R);const k=o.Su(w);if(R instanceof mu)c.push(w);else{const x=As(R,k);x!=null&&(c.push(w),d.set(w,x))}}const f=new Bt(c);return new AP(d,f,o.fieldTransforms)}function kP(t,e,n,r=!1){return As(n,t.Fu(r?4:3,e))}function As(t,e){if(xP(t=ne(t)))return ky("Unsupported field value:",e,t),CP(t,e);if(t instanceof Ts)return function(r,i){if(!PP(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=As(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ke.fromDate(r);return{timestampValue:Co(i.serializer,s)}}if(r instanceof ke){const s=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Co(i.serializer,s)}}if(r instanceof ad)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qn)return{bytesValue:pA(i.serializer,r._byteString)};if(r instanceof Ne){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Hg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${od(r)}`)}(t,e)}function CP(t,e){const n={};return LS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Es(t,(r,i)=>{const s=As(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function xP(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof ad||t instanceof qn||t instanceof Ne||t instanceof Ts)}function ky(t,e,n){if(!xP(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=od(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function mm(t,e,n){if((e=ne(e))instanceof di)return e._internalPath;if(typeof e=="string")return Cy(t,e);throw Sh("Field path arguments must be of type string or ",t,!1,void 0,n)}const _L=new RegExp("[~\\*/\\[\\]]");function Cy(t,e,n){if(e.search(_L)>=0)throw Sh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new di(...e.split("."))._internalPath}catch{throw Sh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new B(L.INVALID_ARGUMENT,a+t+l)}function bP(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Wl{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vL extends Wl{data(){return super.data()}}function cd(t,e){return typeof e=="string"?Cy(t,e):e instanceof di?e._internalPath:e._delegate._internalPath}/**
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
 */function NP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xy{}class gu extends xy{}function Cr(t,e,...n){let r=[];e instanceof xy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof by).length,a=s.filter(l=>l instanceof hd).length;if(o>1||o>0&&a>0)throw new B(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class hd extends gu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new hd(e,n,r)}_apply(e){const n=this._parse(e);return VP(e._query,n),new Dt(e.firestore,e.converter,em(e._query,n))}_parse(e){const n=Ss(e.firestore);return function(s,o,a,l,c,d,f){let g;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new B(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){WI(f,d);const w=[];for(const R of f)w.push(qI(l,s,R));g={arrayValue:{values:w}}}else g=qI(l,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||WI(f,d),g=kP(a,o,f,d==="in"||d==="not-in");return ue.create(c,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function wL(t,e,n){const r=e,i=cd("where",t);return hd._create(i,r,n)}class by extends xy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new by(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:pe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)VP(o,l),o=em(o,l)}(e._query,n),new Dt(e.firestore,e.converter,em(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ny extends gu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ny(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zl(s,o)}(e._query,this._field,this._direction);return new Dt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new _r(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function IL(t,e="asc"){const n=e,r=cd("orderBy",t);return Ny._create(r,n)}class dd extends gu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new dd(e,n,r)}_apply(e){return new Dt(e.firestore,e.converter,mh(e._query,this._limit,this._limitType))}}function EL(t){return mP("limit",t),dd._create("limit",t,"F")}function TL(t){return mP("limitToLast",t),dd._create("limitToLast",t,"L")}class fd extends gu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new fd(e,n,r)}_apply(e){const n=DP(e,this.type,this._docOrFields,this._inclusive);return new Dt(e.firestore,e.converter,function(i,s){return new _r(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function SL(...t){return fd._create("startAt",t,!0)}function AL(...t){return fd._create("startAfter",t,!1)}class pd extends gu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new pd(e,n,r)}_apply(e){const n=DP(e,this.type,this._docOrFields,this._inclusive);return new Dt(e.firestore,e.converter,function(i,s){return new _r(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function PL(...t){return pd._create("endBefore",t,!1)}function RL(...t){return pd._create("endAt",t,!0)}function DP(t,e,n,r){if(n[0]=ne(n[0]),n[0]instanceof Wl)return function(s,o,a,l,c){if(!l)throw new B(L.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of lo(s))if(f.field.isKeyField())d.push(ss(o,l.key));else{const g=l.data.field(f.field);if(Yh(g))throw new B(L.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const w=f.field.canonicalString();throw new B(L.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${w}' (used as the orderBy) does not exist.`)}d.push(g)}return new ci(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ss(t.firestore);return function(o,a,l,c,d,f){const g=o.explicitOrderBy;if(d.length>g.length)throw new B(L.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const w=[];for(let R=0;R<d.length;R++){const k=d[R];if(g[R].field.isKeyField()){if(typeof k!="string")throw new B(L.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof k}`);if(!Bg(o)&&k.indexOf("/")!==-1)throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${k}' contains a slash.`);const x=o.path.child(le.fromString(k));if(!H.isDocumentKey(x))throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${x}' is not because it contains an odd number of segments.`);const E=new H(x);w.push(ss(a,E))}else{const x=kP(l,c,k);w.push(x)}}return new ci(w,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function qI(t,e,n){if(typeof(n=ne(n))=="string"){if(n==="")throw new B(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bg(e)&&n.indexOf("/")!==-1)throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(le.fromString(n));if(!H.isDocumentKey(r))throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ss(t,new H(r))}if(n instanceof Ne)return ss(t,n._key);throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${od(n)}.`)}function WI(t,e){if(!Array.isArray(t)||t.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function VP(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Dy{convertValue(e,n="none"){switch(is(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Es(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new ad(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=jg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(jl(e));default:return null}}convertTimestamp(e){const n=hr(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=le.fromString(e);Z(AA(r));const i=new li(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||$e(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function md(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class kL extends Dy{constructor(e){super(),this.firestore=e}convertBytes(e){return new qn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}/**
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
 */class qi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let dr=class extends Wl{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ll(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(cd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},ll=class extends dr{data(e={}){return super.data(e)}},fi=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new qi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ll(this._firestore,this._userDataWriter,r.key,r,new qi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new ll(i._firestore,i._userDataWriter,a.doc.key,a.doc,new qi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new ll(i._firestore,i._userDataWriter,a.doc.key,a.doc,new qi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:CL(a.type),doc:l,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function CL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}function OP(t,e){return t instanceof dr&&e instanceof dr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof fi&&e instanceof fi&&t._firestore===e._firestore&&IP(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function xL(t){t=de(t,Ne);const e=de(t.firestore,Fe);return hP(ot(e),t._key).then(n=>Vy(e,t,n))}class Ps extends Dy{constructor(e){super(),this.firestore=e}convertBytes(e){return new qn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}function bL(t){t=de(t,Ne);const e=de(t.firestore,Fe),n=ot(e),r=new Ps(e);return JO(n,t._key).then(i=>new dr(e,r,t._key,i,new qi(i!==null&&i.hasLocalMutations,!0),t.converter))}function NL(t){t=de(t,Ne);const e=de(t.firestore,Fe);return hP(ot(e),t._key,{source:"server"}).then(n=>Vy(e,t,n))}function DL(t){t=de(t,Dt);const e=de(t.firestore,Fe),n=ot(e),r=new Ps(e);return NP(t._query),dP(n,t._query).then(i=>new fi(e,r,t,i))}function VL(t){t=de(t,Dt);const e=de(t.firestore,Fe),n=ot(e),r=new Ps(e);return XO(n,t._query).then(i=>new fi(e,r,t,i))}function OL(t){t=de(t,Dt);const e=de(t.firestore,Fe),n=ot(e),r=new Ps(e);return dP(n,t._query,{source:"server"}).then(i=>new fi(e,r,t,i))}function GI(t,e,n){t=de(t,Ne);const r=de(t.firestore,Fe),i=md(t.converter,e,n);return yu(r,[ud(Ss(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Re.none())])}function KI(t,e,n,...r){t=de(t,Ne);const i=de(t.firestore,Fe),s=Ss(i);let o;return o=typeof(e=ne(e))=="string"||e instanceof di?Ry(s,"updateDoc",t._key,e,n,r):Py(s,"updateDoc",t._key,e),yu(i,[o.toMutation(t._key,Re.exists(!0))])}function LL(t){return yu(de(t.firestore,Fe),[new Ko(t._key,Re.none())])}function ML(t,e){const n=de(t.firestore,Fe),r=Th(t),i=md(t.converter,e);return yu(n,[ud(Ss(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Re.exists(!1))]).then(()=>r)}function LP(t,...e){var n,r,i;t=ne(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||pm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(pm(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,d;if(t instanceof Ne)c=de(t.firestore,Fe),d=Wo(t._key.path),l={next:f=>{e[o]&&e[o](Vy(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=de(t,Dt);c=de(f.firestore,Fe),d=f._query;const g=new Ps(c);l={next:w=>{e[o]&&e[o](new fi(c,g,f,w))},error:e[o+1],complete:e[o+2]},NP(t._query)}return function(g,w,R,k){const x=new id(k),E=new hy(w,x,R);return g.asyncQueue.enqueueAndForget(async()=>ly(await Oo(g),E)),()=>{x.$a(),g.asyncQueue.enqueueAndForget(async()=>uy(await Oo(g),E))}}(ot(c),d,a,l)}function FL(t,e){return ZO(ot(t=de(t,Fe)),pm(e)?e:{next:e})}function yu(t,e){return function(r,i){const s=new rt;return r.asyncQueue.enqueueAndForget(async()=>RO(await wy(r),i,s)),s.promise}(ot(t),e)}function Vy(t,e,n){const r=n.docs.get(e._key),i=new Ps(t);return new dr(t,i,e._key,r,new qi(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const jL={maxAttempts:5};/**
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
 */let UL=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ss(e)}set(e,n,r){this._verifyNotCommitted();const i=Mr(e,this._firestore),s=md(i.converter,n,r),o=ud(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Re.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Mr(e,this._firestore);let o;return o=typeof(n=ne(n))=="string"||n instanceof di?Ry(this._dataReader,"WriteBatch.update",s._key,n,r,i):Py(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Re.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Mr(e,this._firestore);return this._mutations=this._mutations.concat(new Ko(n._key,Re.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Mr(t,e){if((t=ne(t)).firestore!==e)throw new B(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */let BL=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Ss(n)}get(n){const r=Mr(n,this._firestore),i=new kL(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return Y();const o=s[0];if(o.isFoundDocument())return new Wl(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Wl(this._firestore,i,r._key,null,r.converter);throw Y()})}set(n,r,i){const s=Mr(n,this._firestore),o=md(s.converter,r,i),a=ud(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Mr(n,this._firestore);let a;return a=typeof(r=ne(r))=="string"||r instanceof di?Ry(this._dataReader,"Transaction.update",o._key,r,i,s):Py(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Mr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Mr(e,this._firestore),r=new Ps(this._firestore);return super.get(e).then(i=>new dr(this._firestore,r,n._key,i._document,new qi(!1,!1),n.converter))}};function zL(t,e,n){t=de(t,Fe);const r=Object.assign(Object.assign({},jL),n);return function(s){if(s.maxAttempts<1)throw new B(L.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new rt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await HO(s);new GO(s.asyncQueue,c,a,o,l).Xa()}),l.promise}(ot(t),i=>e(new BL(t,i)),r)}/**
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
 */function $L(){return new mu("deleteField")}function qL(){return new Ey("serverTimestamp")}function WL(...t){return new Ty("arrayUnion",t)}function GL(...t){return new Sy("arrayRemove",t)}function KL(t){return new Ay("increment",t)}(function(e,n=!0){(function(i){qo=i})(vi),si(new zn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Fe(new eD(r.getProvider("auth-internal")),new iD(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new B(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new li(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Tn(Uw,"4.6.3",e),Tn(Uw,"4.6.3","esm2017")})();const HL="@firebase/firestore-compat",QL="0.3.32";/**
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
 */function Oy(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new B("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function HI(){if(typeof Uint8Array>"u")throw new B("unimplemented","Uint8Arrays are not available in this environment.")}function QI(){if(!CD())throw new B("unimplemented","Blobs are unavailable in Firestore in this environment.")}let MP=class gm{constructor(e){this._delegate=e}static fromBase64String(e){return QI(),new gm(qn.fromBase64String(e))}static fromUint8Array(e){return HI(),new gm(qn.fromUint8Array(e))}toBase64(){return QI(),this._delegate.toBase64()}toUint8Array(){return HI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function ym(t){return YL(t,["next","error","complete"])}function YL(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class JL{enableIndexedDbPersistence(e,n){return aL(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return lL(e._delegate)}clearIndexedDbPersistence(e){return uL(e._delegate)}}class FP{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof li||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&An("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){nL(this._delegate,e,n,r)}enableNetwork(){return hL(this._delegate)}disableNetwork(){return dL(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,pP("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return cL(this._delegate)}onSnapshotsInSync(e){return FL(this._delegate,e)}get app(){if(!this._appCompat)throw new B("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Lo(this,vP(this._delegate,e))}catch(n){throw kt(n,"collection()","Firestore.collection()")}}doc(e){try{return new ln(this,Th(this._delegate,e))}catch(n){throw kt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Rt(this,rL(this._delegate,e))}catch(n){throw kt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return zL(this._delegate,n=>e(new jP(this,n)))}batch(){return ot(this._delegate),new UP(new UL(this._delegate,e=>yu(this._delegate,e)))}loadBundle(e){return fL(this._delegate,e)}namedQuery(e){return pL(this._delegate,e).then(n=>n?new Rt(this,n):null)}}class gd extends Dy{constructor(e){super(),this.firestore=e}convertBytes(e){return new MP(new qn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return ln.forKey(n,this.firestore,null)}}function XL(t){Y1(t)}class jP{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new gd(e)}get(e){const n=Wi(e);return this._delegate.get(n).then(r=>new Gl(this._firestore,new dr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Wi(e);return r?(Oy("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Wi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Wi(e);return this._delegate.delete(n),this}}class UP{constructor(e){this._delegate=e}set(e,n,r){const i=Wi(e);return r?(Oy("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Wi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Wi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class ds{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new ll(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Kl(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=ds.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new ds(e,new gd(e),n),i.set(n,s)),s}}ds.INSTANCES=new WeakMap;class ln{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new gd(e)}static forPath(e,n,r){if(e.length%2!==0)throw new B("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new ln(n,new Ne(n._delegate,r,new H(e)))}static forKey(e,n,r){return new ln(n,new Ne(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Lo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Lo(this.firestore,vP(this._delegate,e))}catch(n){throw kt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=ne(e),e instanceof Ne?wP(this._delegate,e):!1}set(e,n){n=Oy("DocumentReference.set",n);try{return n?GI(this._delegate,e,n):GI(this._delegate,e)}catch(r){throw kt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?KI(this._delegate,e):KI(this._delegate,e,n,...r)}catch(i){throw kt(i,"updateDoc()","DocumentReference.update()")}}delete(){return LL(this._delegate)}onSnapshot(...e){const n=BP(e),r=zP(e,i=>new Gl(this.firestore,new dr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return LP(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=bL(this._delegate):(e==null?void 0:e.source)==="server"?n=NL(this._delegate):n=xL(this._delegate),n.then(r=>new Gl(this.firestore,new dr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new ln(this.firestore,e?this._delegate.withConverter(ds.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function kt(t,e,n){return t.message=t.message.replace(e,n),t}function BP(t){for(const e of t)if(typeof e=="object"&&!ym(e))return e;return{}}function zP(t,e){var n,r;let i;return ym(t[0])?i=t[0]:ym(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Gl{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new ln(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return OP(this._delegate,e._delegate)}}class Kl extends Gl{data(e){const n=this._delegate.data(e);return this._delegate._converter||J1(n!==void 0),n}}class Rt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new gd(e)}where(e,n,r){try{return new Rt(this.firestore,Cr(this._delegate,wL(e,n,r)))}catch(i){throw kt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Rt(this.firestore,Cr(this._delegate,IL(e,n)))}catch(r){throw kt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Rt(this.firestore,Cr(this._delegate,EL(e)))}catch(n){throw kt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Rt(this.firestore,Cr(this._delegate,TL(e)))}catch(n){throw kt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Rt(this.firestore,Cr(this._delegate,SL(...e)))}catch(n){throw kt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Rt(this.firestore,Cr(this._delegate,AL(...e)))}catch(n){throw kt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Rt(this.firestore,Cr(this._delegate,PL(...e)))}catch(n){throw kt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Rt(this.firestore,Cr(this._delegate,RL(...e)))}catch(n){throw kt(n,"endAt()","Query.endAt()")}}isEqual(e){return IP(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=VL(this._delegate):(e==null?void 0:e.source)==="server"?n=OL(this._delegate):n=DL(this._delegate),n.then(r=>new _m(this.firestore,new fi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=BP(e),r=zP(e,i=>new _m(this.firestore,new fi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return LP(this._delegate,n,r)}withConverter(e){return new Rt(this.firestore,e?this._delegate.withConverter(ds.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class ZL{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Kl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class _m{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Rt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Kl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new ZL(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Kl(this._firestore,r))})}isEqual(e){return OP(this._delegate,e._delegate)}}class Lo extends Rt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new ln(this.firestore,e):null}doc(e){try{return e===void 0?new ln(this.firestore,Th(this._delegate)):new ln(this.firestore,Th(this._delegate,e))}catch(n){throw kt(n,"doc()","CollectionReference.doc()")}}add(e){return ML(this._delegate,e).then(n=>new ln(this.firestore,n))}isEqual(e){return wP(this._delegate,e._delegate)}withConverter(e){return new Lo(this.firestore,e?this._delegate.withConverter(ds.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Wi(t){return de(t,Ne)}/**
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
 */class Ly{constructor(...e){this._delegate=new di(...e)}static documentId(){return new Ly(Pe.keyField().canonicalString())}isEqual(e){return e=ne(e),e instanceof di?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class ji{constructor(e){this._delegate=e}static serverTimestamp(){const e=qL();return e._methodName="FieldValue.serverTimestamp",new ji(e)}static delete(){const e=$L();return e._methodName="FieldValue.delete",new ji(e)}static arrayUnion(...e){const n=WL(...e);return n._methodName="FieldValue.arrayUnion",new ji(n)}static arrayRemove(...e){const n=GL(...e);return n._methodName="FieldValue.arrayRemove",new ji(n)}static increment(e){const n=KL(e);return n._methodName="FieldValue.increment",new ji(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const e2={Firestore:FP,GeoPoint:ad,Timestamp:ke,Blob:MP,Transaction:jP,WriteBatch:UP,DocumentReference:ln,DocumentSnapshot:Gl,Query:Rt,QueryDocumentSnapshot:Kl,QuerySnapshot:_m,CollectionReference:Lo,FieldPath:Ly,FieldValue:ji,setLogLevel:XL,CACHE_SIZE_UNLIMITED:oL};function t2(t,e){t.INTERNAL.registerComponent(new zn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},e2)))}/**
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
 */function n2(t){t2(t,(e,n)=>new FP(e,n,new JL)),t.registerVersion(HL,QL)}n2(an);function My(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Da={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Ms={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function r2(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function $P(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const i2=r2,s2=$P,qP=new Is("auth","Firebase",$P());/**
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
 */const Ah=new Hh("@firebase/auth");function o2(t,...e){Ah.logLevel<=oe.WARN&&Ah.warn(`Auth (${vi}): ${t}`,...e)}function Vc(t,...e){Ah.logLevel<=oe.ERROR&&Ah.error(`Auth (${vi}): ${t}`,...e)}/**
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
 */function ft(t,...e){throw jy(t,...e)}function Je(t,...e){return jy(t,...e)}function Fy(t,e,n){const r=Object.assign(Object.assign({},s2()),{[e]:n});return new Is("auth","Firebase",r).create(e,{appName:t.name})}function it(t){return Fy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ft(t,"argument-error"),Fy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qP.create(t,...e)}function W(t,e,...n){if(!t)throw jy(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vc(e),new Error(e)}function Pn(t,e){t||Mn(e)}/**
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
 */function Hl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Uy(){return YI()==="http:"||YI()==="https:"}function YI(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function a2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uy()||X0()||"connection"in navigator)?navigator.onLine:!0}function l2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _u{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=EN()||bg()}get(){return a2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function By(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class WP{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const u2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const c2=new _u(3e4,6e4);function Ue(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Be(t,e,n,r,i={}){return GP(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=$o(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),WP.fetch()(KP(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function GP(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},u2),e);try{const i=new d2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ka(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ka(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ka(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ka(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Fy(t,d,c);ft(t,d)}}catch(i){if(i instanceof xt)throw i;ft(t,"network-request-failed",{message:String(i)})}}async function Ir(t,e,n,r,i={}){const s=await Be(t,e,n,r,i);return"mfaPendingCredential"in s&&ft(t,"multi-factor-auth-required",{_serverResponse:s}),s}function KP(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?By(t.config,i):`${t.config.apiScheme}://${i}`}function h2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class d2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Je(this.auth,"network-request-failed")),c2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ka(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Je(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function JI(t){return t!==void 0&&t.getResponse!==void 0}function XI(t){return t!==void 0&&t.enterprise!==void 0}class f2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return h2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function p2(t){return(await Be(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function m2(t,e){return Be(t,"GET","/v2/recaptchaConfig",Ue(t,e))}/**
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
 */async function g2(t,e){return Be(t,"POST","/v1/accounts:delete",e)}async function y2(t,e){return Be(t,"POST","/v1/accounts:update",e)}async function HP(t,e){return Be(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ul(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _2(t,e=!1){const n=ne(t),r=await n.getIdToken(e),i=yd(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ul(Ff(i.auth_time)),issuedAtTime:ul(Ff(i.iat)),expirationTime:ul(Ff(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ff(t){return Number(t)*1e3}function yd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Q0(n);return i?JSON.parse(i):(Vc("Failed to decode base64 JWT payload"),null)}catch(i){return Vc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ZI(t){const e=yd(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function fr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xt&&v2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function v2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class w2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ul(this.lastLoginAt),this.creationTime=ul(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ql(t){var e;const n=t.auth,r=await t.getIdToken(),i=await fr(t,HP(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?QP(s.providerUserInfo):[],a=E2(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new vm(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function I2(t){const e=ne(t);await Ql(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function E2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function QP(t){return t.map(e=>{var{providerId:n}=e,r=My(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function T2(t,e){const n=await GP(t,{},async()=>{const r=$o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=KP(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",WP.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function S2(t,e){return Be(t,"POST","/v2/accounts:revokeToken",Ue(t,e))}/**
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
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ZI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=ZI(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await T2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new co;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
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
 */function xr(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=My(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new w2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await fr(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _2(this,e)}reload(){return I2(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ql(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(it(this.auth));const e=await this.getIdToken();return await fr(this,g2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:T,emailVerified:O,isAnonymous:j,providerData:F,stsTokenManager:I}=n;W(T&&I,e,"internal-error");const _=co.fromJSON(this.name,I);W(typeof T=="string",e,"internal-error"),xr(f,e.name),xr(g,e.name),W(typeof O=="boolean",e,"internal-error"),W(typeof j=="boolean",e,"internal-error"),xr(w,e.name),xr(R,e.name),xr(k,e.name),xr(x,e.name),xr(E,e.name),xr(v,e.name);const S=new nr({uid:T,auth:e,email:g,emailVerified:O,displayName:f,isAnonymous:j,photoURL:R,phoneNumber:w,tenantId:k,stsTokenManager:_,createdAt:E,lastLoginAt:v});return F&&Array.isArray(F)&&(S.providerData=F.map(A=>Object.assign({},A))),x&&(S._redirectEventId=x),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new co;i.updateFromServerResponse(n);const s=new nr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ql(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?QP(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new co;a.updateFromIdToken(r);const l=new nr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const eE=new Map;function Yt(t){Pn(t instanceof Function,"Expected a class definition");let e=eE.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,eE.set(t,e),e)}/**
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
 */class YP{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}YP.type="NONE";const Mo=YP;/**
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
 */function Yi(t,e,n){return`firebase:${t}:${e}:${n}`}class ho{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Yi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Yi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ho(Yt(Mo),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Yt(Mo);const o=Yi(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=nr._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ho(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ho(s,e,r))}}/**
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
 */function tE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ZP(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(JP(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(eR(e))return"Blackberry";if(tR(e))return"Webos";if(zy(e))return"Safari";if((e.includes("chrome/")||XP(e))&&!e.includes("edge/"))return"Chrome";if(vu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function JP(t=Ce()){return/firefox\//i.test(t)}function zy(t=Ce()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function XP(t=Ce()){return/crios\//i.test(t)}function ZP(t=Ce()){return/iemobile/i.test(t)}function vu(t=Ce()){return/android/i.test(t)}function eR(t=Ce()){return/blackberry/i.test(t)}function tR(t=Ce()){return/webos/i.test(t)}function Zo(t=Ce()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function A2(t=Ce()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function P2(t=Ce()){var e;return Zo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function R2(){return Z0()&&document.documentMode===10}function nR(t=Ce()){return Zo(t)||vu(t)||tR(t)||eR(t)||/windows phone/i.test(t)||ZP(t)}function k2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function rR(t,e=[]){let n;switch(t){case"Browser":n=tE(Ce());break;case"Worker":n=`${tE(Ce())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vi}/${r}`}/**
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
 */class C2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function x2(t,e={}){return Be(t,"GET","/v2/passwordPolicy",Ue(t,e))}/**
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
 */const b2=6;class N2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:b2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class D2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nE(this),this.idTokenSubscription=new nE(this),this.beforeStateQueue=new C2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qP,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ho.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await HP(this,{idToken:e}),r=await nr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Me(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ql(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=l2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(it(this));const n=e?ne(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(it(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(it(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await x2(this),n=new N2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Is("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await S2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await ho.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&o2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function je(t){return ne(t)}class nE{constructor(e){this.auth=e,this.observer=null,this.addObserver=tS(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let wu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function V2(t){wu=t}function $y(t){return wu.loadJS(t)}function O2(){return wu.recaptchaV2Script}function L2(){return wu.recaptchaEnterpriseScript}function M2(){return wu.gapiScript}function iR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const F2="recaptcha-enterprise",j2="NO_RECAPTCHA";class U2{constructor(e){this.type=F2,this.auth=je(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{m2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new f2(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;XI(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(j2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&XI(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=L2();l.length!==0&&(l+=a),$y(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function rE(t,e,n,r=!1){const i=new U2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Yl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await rE(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await rE(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function B2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function z2(t,e,n){const r=je(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=sR(e),{host:o,port:a}=$2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||q2()}function sR(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $2(t){const e=sR(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:iE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:iE(o)}}}function iE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function q2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ea{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}/**
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
 */async function oR(t,e){return Be(t,"POST","/v1/accounts:resetPassword",Ue(t,e))}async function W2(t,e){return Be(t,"POST","/v1/accounts:update",e)}async function G2(t,e){return Be(t,"POST","/v1/accounts:signUp",e)}async function K2(t,e){return Be(t,"POST","/v1/accounts:update",Ue(t,e))}/**
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
 */async function H2(t,e){return Ir(t,"POST","/v1/accounts:signInWithPassword",Ue(t,e))}async function _d(t,e){return Be(t,"POST","/v1/accounts:sendOobCode",Ue(t,e))}async function Q2(t,e){return _d(t,e)}async function Y2(t,e){return _d(t,e)}async function J2(t,e){return _d(t,e)}async function X2(t,e){return _d(t,e)}/**
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
 */async function Z2(t,e){return Ir(t,"POST","/v1/accounts:signInWithEmailLink",Ue(t,e))}async function eM(t,e){return Ir(t,"POST","/v1/accounts:signInWithEmailLink",Ue(t,e))}/**
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
 */class Jl extends ea{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Jl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Jl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yl(e,n,"signInWithPassword",H2);case"emailLink":return Z2(e,{email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yl(e,r,"signUpPassword",G2);case"emailLink":return eM(e,{idToken:n,email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function or(t,e){return Ir(t,"POST","/v1/accounts:signInWithIdp",Ue(t,e))}/**
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
 */const tM="http://localhost";class Wn extends ea{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=My(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Wn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,or(e,n)}buildRequest(){const e={requestUri:tM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$o(n)}return e}}/**
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
 */async function nM(t,e){return Be(t,"POST","/v1/accounts:sendVerificationCode",Ue(t,e))}async function rM(t,e){return Ir(t,"POST","/v1/accounts:signInWithPhoneNumber",Ue(t,e))}async function iM(t,e){const n=await Ir(t,"POST","/v1/accounts:signInWithPhoneNumber",Ue(t,e));if(n.temporaryProof)throw Ka(t,"account-exists-with-different-credential",n);return n}const sM={USER_NOT_FOUND:"user-not-found"};async function oM(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Ir(t,"POST","/v1/accounts:signInWithPhoneNumber",Ue(t,n),sM)}/**
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
 */class Ji extends ea{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ji({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ji({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return rM(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return iM(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return oM(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ji({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function aM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lM(t){const e=to(za(t)).link,n=e?to(za(e)).deep_link_id:null,r=to(za(t)).deep_link_id;return(r?to(za(r)).link:null)||r||n||e||t}class vd{constructor(e){var n,r,i,s,o,a;const l=to(za(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=aM((i=l.mode)!==null&&i!==void 0?i:null);W(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=lM(e);try{return new vd(n)}catch{return null}}}/**
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
 */class Si{constructor(){this.providerId=Si.PROVIDER_ID}static credential(e,n){return Jl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vd.parseLink(n);return W(r,"argument-error"),Jl._fromEmailAndCode(e,r.code,r.tenantId)}}Si.PROVIDER_ID="password";Si.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Si.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Er{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ta extends Er{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class fo extends ta{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return W("providerId"in n&&"signInMethod"in n,"argument-error"),Wn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return W(e.idToken||e.accessToken,"argument-error"),Wn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return fo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return fo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new fo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class bn extends ta{constructor(){super("facebook.com")}static credential(e){return Wn._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
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
 */class Nn extends ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wn._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
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
 */class Dn extends ta{constructor(){super("github.com")}static credential(e){return Wn._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.GITHUB_SIGN_IN_METHOD="github.com";Dn.PROVIDER_ID="github.com";/**
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
 */const uM="http://localhost";class Fo extends ea{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,or(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Fo(r,s)}static _create(e,n){return new Fo(e,n)}buildRequest(){return{requestUri:uM,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const cM="saml.";class Ph extends Er{constructor(e){W(e.startsWith(cM),"argument-error"),super(e)}static credentialFromResult(e){return Ph.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ph.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Fo.fromJSON(e);return W(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Fo._create(r,n)}catch{return null}}}/**
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
 */class Vn extends ta{constructor(){super("twitter.com")}static credential(e,n){return Wn._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
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
 */async function aR(t,e){return Ir(t,"POST","/v1/accounts:signUp",Ue(t,e))}/**
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
 */class fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await nr._fromIdTokenResponse(e,r,i),o=sE(r);return new fn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=sE(r);return new fn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function sE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function hM(t){var e;if(Me(t.app))return Promise.reject(it(t));const n=je(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new fn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await aR(n,{returnSecureToken:!0}),i=await fn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Rh extends xt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Rh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Rh(e,n,r,i)}}function lR(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Rh._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function uR(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function dM(t,e){const n=ne(t);await wd(!0,n,e);const{providerUserInfo:r}=await y2(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=uR(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function qy(t,e,n=!1){const r=await fr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fn._forOperation(t,"link",r)}async function wd(t,e,n){await Ql(e);const r=uR(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";W(r.has(n)===t,e.auth,i)}/**
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
 */async function cR(t,e,n=!1){const{auth:r}=t;if(Me(r.app))return Promise.reject(it(r));const i="reauthenticate";try{const s=await fr(t,lR(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=yd(s.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),fn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ft(r,"user-mismatch"),s}}/**
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
 */async function hR(t,e,n=!1){if(Me(t.app))return Promise.reject(it(t));const r="signIn",i=await lR(t,r,e),s=await fn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Id(t,e){return hR(je(t),e)}async function dR(t,e){const n=ne(t);return await wd(!1,n,e.providerId),qy(n,e)}async function fR(t,e){return cR(ne(t),e)}/**
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
 */async function fM(t,e){return Ir(t,"POST","/v1/accounts:signInWithCustomToken",Ue(t,e))}/**
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
 */async function pM(t,e){if(Me(t.app))return Promise.reject(it(t));const n=je(t),r=await fM(n,{token:e,returnSecureToken:!0}),i=await fn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class Iu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Wy._fromServerResponse(e,n):"totpInfo"in n?Gy._fromServerResponse(e,n):ft(e,"internal-error")}}class Wy extends Iu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Wy(n)}}class Gy extends Iu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Gy(n)}}/**
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
 */function Ed(t,e,n){var r;W(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),W(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(W(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(W(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Ky(t){const e=je(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function mM(t,e,n){const r=je(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Ed(r,i,n),await Yl(r,i,"getOobCode",Y2)}async function gM(t,e,n){await oR(ne(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ky(t),r})}async function yM(t,e){await K2(ne(t),{oobCode:e})}async function pR(t,e){const n=ne(t),r=await oR(n,{oobCode:e}),i=r.requestType;switch(W(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":W(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":W(r.mfaInfo,n,"internal-error");default:W(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Iu._fromServerResponse(je(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function _M(t,e){const{data:n}=await pR(ne(t),e);return n.email}async function vM(t,e,n){if(Me(t.app))return Promise.reject(it(t));const r=je(t),o=await Yl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",aR).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ky(t),l}),a=await fn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function wM(t,e,n){return Me(t.app)?Promise.reject(it(t)):Id(ne(t),Si.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ky(t),r})}/**
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
 */async function IM(t,e,n){const r=je(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){W(a.handleCodeInApp,r,"argument-error"),a&&Ed(r,o,a)}s(i,n),await Yl(r,i,"getOobCode",J2)}function EM(t,e){const n=vd.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function TM(t,e,n){if(Me(t.app))return Promise.reject(it(t));const r=ne(t),i=Si.credentialWithLink(e,n||Hl());return W(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Id(r,i)}/**
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
 */async function SM(t,e){return Be(t,"POST","/v1/accounts:createAuthUri",Ue(t,e))}/**
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
 */async function AM(t,e){const n=Uy()?Hl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await SM(ne(t),r);return i||[]}async function PM(t,e){const n=ne(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Ed(n.auth,i,e);const{email:s}=await Q2(n.auth,i);s!==t.email&&await t.reload()}async function RM(t,e,n){const r=ne(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Ed(r.auth,s,n);const{email:o}=await X2(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function kM(t,e){return Be(t,"POST","/v1/accounts:update",e)}/**
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
 */async function CM(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ne(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await fr(r,kM(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function xM(t,e){const n=ne(t);return Me(n.auth.app)?Promise.reject(it(n.auth)):mR(n,e,null)}function bM(t,e){return mR(ne(t),null,e)}async function mR(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await fr(t,W2(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function NM(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=yd(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new po(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new DM(s,i);case"github.com":return new VM(s,i);case"google.com":return new OM(s,i);case"twitter.com":return new LM(s,i,t.screenName||null);case"custom":case"anonymous":return new po(s,null);default:return new po(s,r,i)}}class po{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class gR extends po{constructor(e,n,r,i){super(e,n,r),this.username=i}}class DM extends po{constructor(e,n){super(e,"facebook.com",n)}}class VM extends gR{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class OM extends po{constructor(e,n){super(e,"google.com",n)}}class LM extends gR{constructor(e,n,r){super(e,"twitter.com",n,r)}}function MM(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:NM(n)}/**
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
 */class Gi{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Gi("enroll",e,n)}static _fromMfaPendingCredential(e){return new Gi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Gi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Gi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Hy{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=je(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Iu._fromServerResponse(r,a));W(i.mfaPendingCredential,r,"internal-error");const o=Gi._fromMfaPendingCredential(i.mfaPendingCredential);return new Hy(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const d=await fn._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return W(n.user,r,"internal-error"),fn._forOperation(n.user,n.operationType,c);default:ft(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function FM(t,e){var n;const r=ne(t),i=e;return W(e.customData.operationType,r,"argument-error"),W((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Hy._fromError(r,i)}/**
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
 */function jM(t,e){return Be(t,"POST","/v2/accounts/mfaEnrollment:start",Ue(t,e))}function UM(t,e){return Be(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ue(t,e))}function BM(t,e){return Be(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ue(t,e))}class Qy{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Iu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Qy(e)}async getSession(){return Gi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await fr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await fr(this.user,BM(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const jf=new WeakMap;function zM(t){const e=ne(t);return jf.has(e)||jf.set(e,Qy._fromUser(e)),jf.get(e)}const kh="__sak";/**
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
 */class yR{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(kh,"1"),this.storage.removeItem(kh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function $M(){const t=Ce();return zy(t)||Zo(t)}const qM=1e3,WM=10;class _R extends yR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$M()&&k2(),this.fallbackToPolling=nR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);R2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,WM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_R.type="LOCAL";const Yy=_R;/**
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
 */class vR extends yR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vR.type="SESSION";const fs=vR;/**
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
 */function GM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Td{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Td(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await GM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Td.receivers=[];/**
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
 */function Eu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class KM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Eu("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ke(){return window}function HM(t){Ke().location.href=t}/**
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
 */function Jy(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function QM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function JM(){return Jy()?self:null}/**
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
 */const wR="firebaseLocalStorageDb",XM=1,Ch="firebaseLocalStorage",IR="fbase_key";class Tu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sd(t,e){return t.transaction([Ch],e?"readwrite":"readonly").objectStore(Ch)}function ZM(){const t=indexedDB.deleteDatabase(wR);return new Tu(t).toPromise()}function wm(){const t=indexedDB.open(wR,XM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ch,{keyPath:IR})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ch)?e(r):(r.close(),await ZM(),e(await wm()))})})}async function oE(t,e,n){const r=Sd(t,!0).put({[IR]:e,value:n});return new Tu(r).toPromise()}async function eF(t,e){const n=Sd(t,!1).get(e),r=await new Tu(n).toPromise();return r===void 0?null:r.value}function aE(t,e){const n=Sd(t,!0).delete(e);return new Tu(n).toPromise()}const tF=800,nF=3;class ER{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>nF)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Td._getInstance(JM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await QM(),!this.activeServiceWorker)return;this.sender=new KM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wm();return await oE(e,kh,"1"),await aE(e,kh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>oE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>eF(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>aE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Sd(i,!1).getAll();return new Tu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ER.type="LOCAL";const Xl=ER;/**
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
 */function rF(t,e){return Be(t,"POST","/v2/accounts/mfaSignIn:start",Ue(t,e))}function iF(t,e){return Be(t,"POST","/v2/accounts/mfaSignIn:finalize",Ue(t,e))}/**
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
 */const sF=500,oF=6e4,hc=1e12;class aF{constructor(e){this.auth=e,this.counter=hc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new lF(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||hc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||hc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||hc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class lF{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;W(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=uF(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},oF)},sF))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function uF(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Uf=iR("rcb"),cF=new _u(3e4,6e4);class hF{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ke().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return W(dF(n),e,"argument-error"),this.shouldResolveImmediately(n)&&JI(Ke().grecaptcha)?Promise.resolve(Ke().grecaptcha):new Promise((r,i)=>{const s=Ke().setTimeout(()=>{i(Je(e,"network-request-failed"))},cF.get());Ke()[Uf]=()=>{Ke().clearTimeout(s),delete Ke()[Uf];const a=Ke().grecaptcha;if(!a||!JI(a)){i(Je(e,"internal-error"));return}const l=a.render;a.render=(c,d)=>{const f=l(c,d);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${O2()}?${$o({onload:Uf,render:"explicit",hl:n})}`;$y(o).catch(()=>{clearTimeout(s),i(Je(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Ke().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function dF(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class fF{async load(e){return new aF(e)}clearedOneInstance(){}}/**
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
 */const TR="recaptcha",pF={theme:"light",type:"image"};let mF=class{constructor(e,n,r=Object.assign({},pF)){this.parameters=r,this.type=TR,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=je(e),this.isInvisible=this.parameters.size==="invisible",W(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;W(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new fF:new hF,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){W(!this.parameters.sitekey,this.auth,"argument-error"),W(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),W(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ke()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){W(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){W(Uy()&&!Jy(),this.auth,"internal-error"),await gF(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await p2(this.auth);W(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return W(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function gF(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Xy{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ji._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function yF(t,e,n){if(Me(t.app))return Promise.reject(it(t));const r=je(t),i=await Ad(r,e,ne(n));return new Xy(i,s=>Id(r,s))}async function _F(t,e,n){const r=ne(t);await wd(!1,r,"phone");const i=await Ad(r.auth,e,ne(n));return new Xy(i,s=>dR(r,s))}async function vF(t,e,n){const r=ne(t);if(Me(r.auth.app))return Promise.reject(it(r.auth));const i=await Ad(r.auth,e,ne(n));return new Xy(i,s=>fR(r,s))}async function Ad(t,e,n){var r;const i=await n.verify();try{W(typeof i=="string",t,"argument-error"),W(n.type===TR,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return W(o.type==="enroll",t,"internal-error"),(await jM(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{W(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return W(a,t,"missing-multi-factor-info"),(await rF(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await nM(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function wF(t,e){const n=ne(t);if(Me(n.auth.app))return Promise.reject(it(n.auth));await qy(n,e)}/**
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
 */let ps=class Oc{constructor(e){this.providerId=Oc.PROVIDER_ID,this.auth=je(e)}verifyPhoneNumber(e,n){return Ad(this.auth,e,ne(n))}static credential(e,n){return Ji._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Oc.credentialFromTaggedObject(n)}static credentialFromError(e){return Oc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ji._fromTokenResponse(n,r):null}};ps.PROVIDER_ID="phone";ps.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Rs(t,e){return e?Yt(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zy extends ea{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return or(e,this._buildIdpRequest())}_linkToIdToken(e,n){return or(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return or(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IF(t){return hR(t.auth,new Zy(t),t.bypassAuthState)}function EF(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),cR(n,new Zy(t),t.bypassAuthState)}async function TF(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),qy(n,new Zy(t),t.bypassAuthState)}/**
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
 */class SR{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IF;case"linkViaPopup":case"linkViaRedirect":return TF;case"reauthViaPopup":case"reauthViaRedirect":return EF;default:ft(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const SF=new _u(2e3,1e4);async function AF(t,e,n){if(Me(t.app))return Promise.reject(Je(t,"operation-not-supported-in-this-environment"));const r=je(t);Xo(t,e,Er);const i=Rs(r,n);return new rr(r,"signInViaPopup",e,i).executeNotNull()}async function PF(t,e,n){const r=ne(t);if(Me(r.auth.app))return Promise.reject(Je(r.auth,"operation-not-supported-in-this-environment"));Xo(r.auth,e,Er);const i=Rs(r.auth,n);return new rr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function RF(t,e,n){const r=ne(t);Xo(r.auth,e,Er);const i=Rs(r.auth,n);return new rr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class rr extends SR{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,rr.currentPopupAction&&rr.currentPopupAction.cancel(),rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=Eu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SF.get())};e()}}rr.currentPopupAction=null;/**
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
 */const kF="pendingRedirect",cl=new Map;class CF extends SR{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=cl.get(this.auth._key());if(!e){try{const r=await xF(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}cl.set(this.auth._key(),e)}return this.bypassAuthState||cl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xF(t,e){const n=PR(e),r=AR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function e_(t,e){return AR(t)._set(PR(e),"true")}function bF(){cl.clear()}function t_(t,e){cl.set(t._key(),e)}function AR(t){return Yt(t._redirectPersistence)}function PR(t){return Yi(kF,t.config.apiKey,t.name)}/**
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
 */function NF(t,e,n){return DF(t,e,n)}async function DF(t,e,n){if(Me(t.app))return Promise.reject(it(t));const r=je(t);Xo(t,e,Er),await r._initializationPromise;const i=Rs(r,n);return await e_(i,r),i._openRedirect(r,e,"signInViaRedirect")}function VF(t,e,n){return OF(t,e,n)}async function OF(t,e,n){const r=ne(t);if(Xo(r.auth,e,Er),Me(r.auth.app))return Promise.reject(it(r.auth));await r.auth._initializationPromise;const i=Rs(r.auth,n);await e_(i,r.auth);const s=await RR(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function LF(t,e,n){return MF(t,e,n)}async function MF(t,e,n){const r=ne(t);Xo(r.auth,e,Er),await r.auth._initializationPromise;const i=Rs(r.auth,n);await wd(!1,r,e.providerId),await e_(i,r.auth);const s=await RR(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function FF(t,e){return await je(t)._initializationPromise,Pd(t,e,!1)}async function Pd(t,e,n=!1){if(Me(t.app))return Promise.reject(it(t));const r=je(t),i=Rs(r,e),o=await new CF(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function RR(t){const e=Eu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const jF=10*60*1e3;class kR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UF(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!CR(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Je(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jF&&this.cachedEventUids.clear(),this.cachedEventUids.has(lE(e))}saveEventToCache(e){this.cachedEventUids.add(lE(e)),this.lastProcessedEventTime=Date.now()}}function lE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function CR({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UF(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return CR(t);default:return!1}}/**
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
 */async function xR(t,e={}){return Be(t,"GET","/v1/projects",e)}/**
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
 */const BF=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zF=/^https?/;async function $F(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xR(t);for(const n of e)try{if(qF(n))return}catch{}ft(t,"unauthorized-domain")}function qF(t){const e=Hl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!zF.test(n))return!1;if(BF.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const WF=new _u(3e4,6e4);function uE(){const t=Ke().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function GF(t){return new Promise((e,n)=>{var r,i,s;function o(){uE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uE(),n(Je(t,"network-request-failed"))},timeout:WF.get()})}if(!((i=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ke().gapi)===null||s===void 0)&&s.load)o();else{const a=iR("iframefcb");return Ke()[a]=()=>{gapi.load?o():n(Je(t,"network-request-failed"))},$y(`${M2()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Lc=null,e})}let Lc=null;function KF(t){return Lc=Lc||GF(t),Lc}/**
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
 */const HF=new _u(5e3,15e3),QF="__/auth/iframe",YF="emulator/auth/iframe",JF={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XF=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZF(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?By(e,YF):`https://${t.config.authDomain}/${QF}`,r={apiKey:e.apiKey,appName:t.name,v:vi},i=XF.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${$o(r).slice(1)}`}async function ej(t){const e=await KF(t),n=Ke().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:ZF(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JF,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Je(t,"network-request-failed"),a=Ke().setTimeout(()=>{s(o)},HF.get());function l(){Ke().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const tj={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nj=500,rj=600,ij="_blank",sj="http://localhost";class cE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oj(t,e,n,r=nj,i=rj){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},tj),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ce().toLowerCase();n&&(a=XP(c)?ij:n),JP(c)&&(e=e||sj,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[w,R])=>`${g}${w}=${R},`,"");if(P2(c)&&a!=="_self")return aj(e||"",a),new cE(null);const f=window.open(e||"",a,d);W(f,t,"popup-blocked");try{f.focus()}catch{}return new cE(f)}function aj(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const lj="__/auth/handler",uj="emulator/auth/handler",cj=encodeURIComponent("fac");async function Im(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vi,eventId:i};if(e instanceof Er){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",RN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof ta){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${cj}=${encodeURIComponent(l)}`:"";return`${hj(t)}?${$o(a).slice(1)}${c}`}function hj({config:t}){return t.emulator?By(t,uj):`https://${t.authDomain}/${lj}`}/**
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
 */const Bf="webStorageSupport";class dj{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fs,this._completeRedirectFn=Pd,this._overrideRedirectResult=t_}async _openPopup(e,n,r,i){var s;Pn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Im(e,n,r,Hl(),i);return oj(e,o,Eu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Im(e,n,r,Hl(),i);return HM(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Pn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ej(e),r=new kR(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bf,{type:Bf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Bf];o!==void 0&&n(!!o),ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$F(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nR()||zy()||Zo()}}const fj=dj;class pj{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Mn("unexpected MultiFactorSessionType")}}}class n_ extends pj{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n_(e)}_finalizeEnroll(e,n,r){return UM(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return iF(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class bR{constructor(){}static assertion(e){return n_._fromCredential(e)}}bR.FACTOR_ID="phone";var hE="@firebase/auth",dE="1.7.4";/**
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
 */class mj{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gj(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yj(t){si(new zn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rR(t)},c=new D2(r,i,s,l);return B2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),si(new zn("auth-internal",e=>{const n=je(e.getProvider("auth").getImmediate());return(r=>new mj(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(hE,dE,gj(t)),Tn(hE,dE,"esm2017")}/**
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
 */const _j=5*60;vN("authIdTokenMaxAge");function vj(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}V2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Je("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vj().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yj("Browser");/**
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
 */function ms(){return window}/**
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
 */const wj=2e3;async function Ij(t,e,n){var r;const{BuildInfo:i}=ms();Pn(e.sessionId,"AuthEvent did not contain a session ID");const s=await Pj(e.sessionId),o={};return Zo()?o.ibi=i.packageName:vu()?o.apn=i.packageName:ft(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Im(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function Ej(t){const{BuildInfo:e}=ms(),n={};Zo()?n.iosBundleId=e.packageName:vu()?n.androidPackageName=e.packageName:ft(t,"operation-not-supported-in-this-environment"),await xR(t,n)}function Tj(t){const{cordova:e}=ms();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,A2()?"_blank":"_system","location=yes"),n(i)})})}async function Sj(t,e,n){const{cordova:r}=ms();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var f;s();const g=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof g=="function"&&g(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(Je(t,"redirect-cancelled-by-user"))},wj))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),vu()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function Aj(t){var e,n,r,i,s,o,a,l,c,d;const f=ms();W(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),W(typeof((n=f==null?void 0:f.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),W(typeof((s=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),W(typeof((l=(a=(o=f==null?void 0:f.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),W(typeof((d=(c=f==null?void 0:f.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Pj(t){const e=Rj(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function Rj(t){if(Pn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const kj=20;class Cj extends kR{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function xj(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:Dj(),postBody:null,tenantId:t.tenantId,error:Je(t,"no-auth-event")}}function bj(t,e){return Em()._set(Tm(t),e)}async function fE(t){const e=await Em()._get(Tm(t));return e&&await Em()._remove(Tm(t)),e}function Nj(t,e){var n,r;const i=Oj(e);if(i.includes("/__/auth/callback")){const s=Mc(i),o=s.firebaseError?Vj(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Je(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function Dj(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<kj;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Em(){return Yt(Yy)}function Tm(t){return Yi("authEvent",t.config.apiKey,t.name)}function Vj(t){try{return JSON.parse(t)}catch{return null}}function Oj(t){const e=Mc(t),n=e.link?decodeURIComponent(e.link):void 0,r=Mc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Mc(i).link||i||r||n||t}function Mc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return to(n.join("?"))}/**
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
 */const Lj=500;class Mj{constructor(){this._redirectPersistence=fs,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Pd,this._overrideRedirectResult=t_}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new Cj(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ft(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){Aj(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),bF(),await this._originValidation(e);const o=xj(e,r,i);await bj(e,o);const a=await Ij(e,o,n),l=await Tj(a);return Sj(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ej(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ms(),o=setTimeout(async()=>{await fE(e),n.onEvent(pE())},Lj),a=async d=>{clearTimeout(o);const f=await fE(e);let g=null;f&&(d!=null&&d.url)&&(g=Nj(f,d.url)),n.onEvent(g||pE())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,c=`${s.packageName.toLowerCase()}://`;ms().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(c)&&a({url:d}),typeof l=="function")try{l(d)}catch(f){console.error(f)}}}}const Fj=Mj;function pE(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Je("no-auth-event")}}/**
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
 */function jj(t,e){je(t)._logFramework(e)}var Uj="@firebase/auth-compat",Bj="0.5.9";/**
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
 */const zj=1e3;function hl(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function $j(){return hl()==="http:"||hl()==="https:"}function NR(t=Ce()){return!!((hl()==="file:"||hl()==="ionic:"||hl()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function qj(){return bg()||xg()}function Wj(){return Z0()&&(document==null?void 0:document.documentMode)===11}function Gj(t=Ce()){return/Edge\/\d+/.test(t)}function Kj(t=Ce()){return Wj()||Gj(t)}function DR(){try{const t=self.localStorage,e=Eu();if(t)return t.setItem(e,"1"),t.removeItem(e),Kj()?Nl():!0}catch{return r_()&&Nl()}return!1}function r_(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function zf(){return($j()||X0()||NR())&&!qj()&&DR()&&!r_()}function VR(){return NR()&&typeof document<"u"}async function Hj(){return VR()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},zj);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function Qj(){return typeof window<"u"?window:null}/**
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
 */const Ht={LOCAL:"local",NONE:"none",SESSION:"session"},Va=W,OR="persistence";function Yj(t,e){if(Va(Object.values(Ht).includes(e),t,"invalid-persistence-type"),bg()){Va(e!==Ht.SESSION,t,"unsupported-persistence-type");return}if(xg()){Va(e===Ht.NONE,t,"unsupported-persistence-type");return}if(r_()){Va(e===Ht.NONE||e===Ht.LOCAL&&Nl(),t,"unsupported-persistence-type");return}Va(e===Ht.NONE||DR(),t,"unsupported-persistence-type")}async function Sm(t){await t._initializationPromise;const e=LR(),n=Yi(OR,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function Jj(t,e){const n=LR();if(!n)return[];const r=Yi(OR,t,e);switch(n.getItem(r)){case Ht.NONE:return[Mo];case Ht.LOCAL:return[Xl,fs];case Ht.SESSION:return[fs];default:return[]}}function LR(){var t;try{return((t=Qj())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const Xj=W;class $r{constructor(){this.browserResolver=Yt(fj),this.cordovaResolver=Yt(Fj),this.underlyingResolver=null,this._redirectPersistence=fs,this._completeRedirectFn=Pd,this._overrideRedirectResult=t_}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return VR()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Xj(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Hj();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function MR(t){return t.unwrap()}function Zj(t){return t.wrapped()}/**
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
 */function eU(t){return FR(t)}function tU(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new nU(t,FM(t,e))}else if(r){const i=FR(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function FR(t){const{_tokenResponse:e}=t instanceof xt?t.customData:t;if(!e)return null;if(!(t instanceof xt)&&"temporaryProof"in e&&"phoneNumber"in e)return ps.credentialFromResult(t);const n=e.providerId;if(!n||n===Da.PASSWORD)return null;let r;switch(n){case Da.GOOGLE:r=Nn;break;case Da.FACEBOOK:r=bn;break;case Da.GITHUB:r=Dn;break;case Da.TWITTER:r=Vn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Fo._create(n,a):Wn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new fo(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof xt?r.credentialFromError(t):r.credentialFromResult(t)}function Mt(t,e){return e.catch(n=>{throw n instanceof xt&&tU(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:eU(n),additionalUserInfo:MM(n),user:ir.getOrCreate(i)}})}async function Am(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Mt(t,n.confirm(r))}}class nU{constructor(e,n){this.resolver=n,this.auth=Zj(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Mt(MR(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class ir{constructor(e){this._delegate=e,this.multiFactor=zM(e)}static getOrCreate(e){return ir.USER_MAP.has(e)||ir.USER_MAP.set(e,new ir(e)),ir.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Mt(this.auth,dR(this._delegate,e))}async linkWithPhoneNumber(e,n){return Am(this.auth,_F(this._delegate,e,n))}async linkWithPopup(e){return Mt(this.auth,RF(this._delegate,e,$r))}async linkWithRedirect(e){return await Sm(je(this.auth)),LF(this._delegate,e,$r)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Mt(this.auth,fR(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Am(this.auth,vF(this._delegate,e,n))}reauthenticateWithPopup(e){return Mt(this.auth,PF(this._delegate,e,$r))}async reauthenticateWithRedirect(e){return await Sm(je(this.auth)),VF(this._delegate,e,$r)}sendEmailVerification(e){return PM(this._delegate,e)}async unlink(e){return await dM(this._delegate,e),this}updateEmail(e){return xM(this._delegate,e)}updatePassword(e){return bM(this._delegate,e)}updatePhoneNumber(e){return wF(this._delegate,e)}updateProfile(e){return CM(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return RM(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ir.USER_MAP=new WeakMap;/**
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
 */const Oa=W;class Pm{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Oa(r,"invalid-api-key",{appName:e.name}),Oa(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?$r:void 0;this._delegate=n.initialize({options:{persistence:rU(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(i2),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ir.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){z2(this._delegate,e,n)}applyActionCode(e){return yM(this._delegate,e)}checkActionCode(e){return pR(this._delegate,e)}confirmPasswordReset(e,n){return gM(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Mt(this._delegate,vM(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return AM(this._delegate,e)}isSignInWithEmailLink(e){return EM(this._delegate,e)}async getRedirectResult(){Oa(zf(),this._delegate,"operation-not-supported-in-this-environment");const e=await FF(this._delegate,$r);return e?Mt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){jj(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=mE(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=mE(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return IM(this._delegate,e,n)}sendPasswordResetEmail(e,n){return mM(this._delegate,e,n||void 0)}async setPersistence(e){Yj(this._delegate,e);let n;switch(e){case Ht.SESSION:n=fs;break;case Ht.LOCAL:n=await Yt(Xl)._isAvailable()?Xl:Yy;break;case Ht.NONE:n=Mo;break;default:return ft("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Mt(this._delegate,hM(this._delegate))}signInWithCredential(e){return Mt(this._delegate,Id(this._delegate,e))}signInWithCustomToken(e){return Mt(this._delegate,pM(this._delegate,e))}signInWithEmailAndPassword(e,n){return Mt(this._delegate,wM(this._delegate,e,n))}signInWithEmailLink(e,n){return Mt(this._delegate,TM(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Am(this._delegate,yF(this._delegate,e,n))}async signInWithPopup(e){return Oa(zf(),this._delegate,"operation-not-supported-in-this-environment"),Mt(this._delegate,AF(this._delegate,e,$r))}async signInWithRedirect(e){return Oa(zf(),this._delegate,"operation-not-supported-in-this-environment"),await Sm(this._delegate),NF(this._delegate,e,$r)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return _M(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Pm.Persistence=Ht;function mE(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&ir.getOrCreate(o)),error:e,complete:n}}function rU(t,e){const n=Jj(t,e);if(typeof self<"u"&&!n.includes(Xl)&&n.push(Xl),typeof window<"u")for(const r of[Yy,fs])n.includes(r)||n.push(r);return n.includes(Mo)||n.push(Mo),n}/**
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
 */class i_{constructor(){this.providerId="phone",this._delegate=new ps(MR(an.auth()))}static credential(e,n){return ps.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}i_.PHONE_SIGN_IN_METHOD=ps.PHONE_SIGN_IN_METHOD;i_.PROVIDER_ID=ps.PROVIDER_ID;/**
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
 */const iU=W;class sU{constructor(e,n,r=an.app()){var i;iU((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new mF(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const oU="auth-compat";function aU(t){t.INTERNAL.registerComponent(new zn(oU,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Pm(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ms.EMAIL_SIGNIN,PASSWORD_RESET:Ms.PASSWORD_RESET,RECOVER_EMAIL:Ms.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ms.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ms.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ms.VERIFY_EMAIL}},EmailAuthProvider:Si,FacebookAuthProvider:bn,GithubAuthProvider:Dn,GoogleAuthProvider:Nn,OAuthProvider:fo,SAMLAuthProvider:Ph,PhoneAuthProvider:i_,PhoneMultiFactorGenerator:bR,RecaptchaVerifier:sU,TwitterAuthProvider:Vn,Auth:Pm,AuthCredential:ea,Error:xt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(Uj,Bj)}aU(an);const jR=an,lU="4r@admin.com";let dc=null;function UR(){if(dc)return dc;const t=window.FIREBASE_CONFIG;if(!t)throw new Error("firebase-config.js missing hai");return dc=an.apps&&an.apps.length?an.app():an.initializeApp(t),dc}let $f=null;function BR(){return $f||($f=an.firestore(UR())),$f}let qf=null;function s_(){return qf||(qf=an.auth(UR())),qf}let Rm="";function uU(t){const e=t&&t.code||"",n=t&&t.message||String(t);return e==="permission-denied"||/permission/i.test(n)?"Firestore rules me allowed nahi hai (firestore.rules update karein)":e==="unavailable"||/network|offline|fetch/i.test(n)?"Internet nahi hai. Connection check karein.":/exceed|too large|1 ?MiB|1048576/i.test(n)?"Document 1MB se bada ho gaya":n}function nn(t){return Rm=uU(t),Rm}function Wf(){return Rm}function gE(t,e){switch(t){case"auth/configuration-not-found":case"auth/operation-not-allowed":return'Login abhi band hai. Firebase Console > Authentication > Sign-in method me "Email/Password" ON karke wapas aayein.';case"auth/user-not-found":case"auth/wrong-password":case"auth/invalid-credential":case"auth/invalid-login-credentials":return"Email ya password galat hai.";case"auth/email-already-in-use":return"Ye email pehle se registered hai. Apna password daalein.";case"auth/invalid-email":return"Email sahi nahi hai.";case"auth/weak-password":return"Password kam se kam 6 characters ka rakhein.";case"auth/too-many-requests":return"Bahut zyada try kiye gaye. Thodi der baad koshish karein.";case"auth/network-request-failed":return"Internet nahi hai. Connection check karein.";case"auth/api-key-not-valid":return"Firebase API key sahi nahi hai (firebase-config.js dekhein)."}return e||"Login nahi hua. Dobara koshish karein."}function zR(t){try{return t.setPersistence(jR.auth.Auth.Persistence.LOCAL).then(()=>!0).catch(()=>!1)}catch{return Promise.resolve(!1)}}function cU(t,e){const n=s_();return zR(n).then(()=>n.signInWithEmailAndPassword(t,e)).catch(r=>{const i=r&&r.code,s=r&&r.message?" ("+r.message+")":"";if(i==="auth/user-not-found"||i==="auth/invalid-credential"||i==="auth/wrong-password")return n.createUserWithEmailAndPassword(t,e).then(o=>({user:o.user,created:!0})).catch(o=>{throw new Error(gE(o&&o.code,o&&o.message)+(o&&o.code?" ["+o.code+"]":""))});throw new Error(gE(i,r&&r.message)+s)})}function hU(){return s_().signOut()}function dU(t){const e=s_();return zR(e),e.onAuthStateChanged(t)}const $R=V.createContext({user:null,ready:!1,error:""});function fU({children:t}){const[e,n]=V.useState(null),[r,i]=V.useState(!1),[s,o]=V.useState("");return V.useEffect(()=>{let a=!0,l=()=>{};try{l=dU(c=>{a&&(n(c||null),i(!0))})}catch(c){o(c&&c.message?c.message:String(c)),i(!0)}return()=>{a=!1,l&&l()}},[]),m.jsx($R.Provider,{value:{user:e,ready:r,error:s},children:t})}function qR(){return V.useContext($R)}const WR=V.createContext(()=>{});function Rd(){return V.useContext(WR)}function pU({children:t}){const[e,n]=V.useState(""),[r,i]=V.useState(!1),[s,o]=V.useState(!1),a=V.useRef(null),l=V.useCallback((c,d)=>{n(c),i(!!d),o(!0),clearTimeout(a.current),a.current=setTimeout(()=>o(!1),2200)},[]);return m.jsxs(WR.Provider,{value:l,children:[t,m.jsx("div",{className:"adm-toast"+(r?" adm-toast--err":"")+(s?" is-show":""),"aria-live":"polite",children:e})]})}const GR="4rbet_ui",kd={pending:"Pending",previewing:"Previewing",successful:"Successful"},Gf="4R Support";function Ui(){try{const t=localStorage.getItem(GR),e=t?JSON.parse(t):{};return{splash:e.splash!==!1,showPassword:e.showPassword===!0}}catch{return{splash:!0,showPassword:!1}}}function yE(t){const e={splash:t.splash!==void 0?!!t.splash:Ui().splash,showPassword:t.showPassword!==void 0?!!t.showPassword:Ui().showPassword};try{return localStorage.setItem(GR,JSON.stringify(e)),!0}catch{return!1}}function La(){try{let t=0;return["4rbet_complaints","4rbet_telegram","4rbet_ui","4rbet_tg_queue"].forEach(e=>{const n=localStorage.getItem(e);n&&(t+=n.length+e.length)}),(t/1024).toFixed(1)}catch{return"0"}}function dl(t){return kd[t&&t.status]?t.status:"pending"}function mU(t){const e=new Date(t);if(isNaN(e))return!1;const n=new Date;return e.getFullYear()===n.getFullYear()&&e.getMonth()===n.getMonth()&&e.getDate()===n.getDate()}function gU(t){return{total:t.length,today:t.filter(e=>mU(e.submittedAt)).length,pending:t.filter(e=>dl(e)==="pending").length,preview:t.filter(e=>dl(e)==="previewing").length,success:t.filter(e=>dl(e)==="successful").length}}function xh(t){return t<10?"0"+t:""+t}function KR(t){const e=new Date(t);if(isNaN(e))return"-";const n=e.getHours(),r=n%12||12;return e.getDate()+"/"+xh(e.getMonth()+1)+"/"+e.getFullYear()+", "+r+":"+xh(e.getMinutes())+" "+(n>=12?"PM":"AM")}function o_(t){const e=new Date(t);if(isNaN(e))return"-";const n=e.getHours(),r=n%12||12;return e.getDate()+"/"+xh(e.getMonth()+1)+"/"+e.getFullYear()+" · "+r+":"+xh(e.getMinutes())+" "+(n>=12?"PM":"AM")}function yU(t){return"Guest #"+String(t||"").slice(0,4).toUpperCase()}function HR(t){return t&&t.userName?t.userName:yU(t&&t.id)}const _U=[{key:"userName",label:"User Name"},{key:"mobile",label:"Mobile Number"},{key:"email",label:"Email ID"},{key:"password",label:"Game Account Password",secret:!0},{key:"problem",label:"Select Your Problem"},{key:"amount",label:"Amount"},{key:"verifyEmail",label:"Email To Verify"},{key:"docType",label:"Document Type"},{key:"docNo",label:"Document No."},{key:"accountNo",label:"Account Number"},{key:"utr",label:"Transaction / UTR"},{key:"detail",label:"Detail"}],QR="4rbet_complaints",Su=window.FIREBASE_COLLECTION||"complaints";function pr(){try{const t=localStorage.getItem(QR);return t?JSON.parse(t):[]}catch{return[]}}function gs(t){try{return localStorage.setItem(QR,JSON.stringify(t)),!0}catch{return!1}}function vU(t,e){const n=pr();return n.forEach(r=>{r.id===t&&Object.assign(r,e)}),gs(n),n}function wU(t){const e=pr().filter(n=>n.id!==t);return gs(e),e}function Zl(){try{window.dispatchEvent(new CustomEvent("4r-sync"))}catch{}}function na(){try{return BR()}catch(t){return nn(t),null}}function IU(){return!!na()}function km(){const t=na();return t?t.collection(Su).orderBy("submittedAt","desc").get().then(e=>{const n=e.docs.map(r=>{const i=r.data()||{};return i.id=i.id||r.id,i});return gs(n),Zl(),n}).catch(e=>(nn(e),pr())):Promise.resolve(pr())}function EU(t,e,n){const r=new Date().toISOString();vU(t,{status:e,statusAt:r}),Zl();const i=na();return i?i.collection(Su).doc(t).update({status:e,statusAt:r}).then(()=>({ok:!0,offline:!1})).catch(s=>(nn(s),{ok:!1,offline:!0,error:s.message})):Promise.resolve({ok:!1,offline:!0})}function TU(t){wU(t),Zl();const e=na();return e?e.collection(Su).doc(t).delete().then(()=>({ok:!0,offline:!1})).catch(n=>(nn(n),{ok:!1,offline:!0,error:n.message})):Promise.resolve({ok:!1,offline:!0})}function SU(){const t=na();return t?t.collection(Su).get().then(e=>{const n=t.batch();return e.docs.forEach(r=>n.delete(r.ref)),n.commit()}).then(()=>(gs([]),Zl(),{ok:!0,offline:!1})).catch(e=>(nn(e),{ok:!1,offline:!0,error:e.message})):(gs([]),Zl(),Promise.resolve({ok:!1,offline:!0}))}function AU(t){const e=na();if(!e)return()=>{};try{return e.collection(Su).orderBy("submittedAt","desc").onSnapshot(n=>{const r=n.docs.map(i=>{const s=i.data()||{};return s.id=s.id||i.id,s});gs(r),t(r,!0)},n=>{nn(n),t(pr(),!1)})}catch{return()=>{}}}function a_(){const[t,e]=V.useState(pr),[n,r]=V.useState(!1),i=V.useCallback(()=>km().then(s=>(e(s),r(!0),s)),[]);return V.useEffect(()=>{let s=!0;const o=AU(c=>{s&&e(c)});i();const a=()=>{s&&e(pr())},l=()=>{i()};return window.addEventListener("4r-sync",a),window.addEventListener("focus",l),()=>{s=!1,o&&o(),window.removeEventListener("4r-sync",a),window.removeEventListener("focus",l)}},[i]),{list:t,ready:n,refresh:i}}const PU=window.FIREBASE_CHAT_COLLECTION||"chats",RU="messages",_E=700*1024,kU=350*1024;function Cd(){try{return BR()}catch(t){return nn(t),null}}function YR(){return!!Cd()}function JR(){const t=Cd();return t?t.collection(PU):null}function ra(t){const e=JR();return e?e.doc(t):null}function l_(t){const e=ra(t);return e?e.collection(RU):null}function CU(t){const e=ra(t);return e?e.get().then(n=>{if(!n.exists)return{ok:!0,offline:!1,chat:null};const r=n.data()||{};return r.id=r.id||n.id,{ok:!0,offline:!1,chat:r}}).catch(n=>(nn(ia(n)),{ok:!1,offline:!0,chat:null})):Promise.resolve({ok:!1,offline:!0,chat:null})}function xU(t,e){const n=ra(t);return n?n.onSnapshot(r=>{if(!r.exists){e(null,!0);return}const i=r.data()||{};i.id=i.id||r.id,e(i,!0)},r=>{nn(ia(r)),e(null,!1,ys())}):(e(null,!1,ys()),()=>{})}function XR(t){const e=JR();return e?e.orderBy("updatedAt","desc").limit(200).onSnapshot(n=>{const r=n.docs.map(i=>{const s=i.data()||{};return s.id=s.id||i.id,s});t(r,!0)},n=>{nn(ia(n)),t([],!1,ys())}):(t([],!1,ys()),()=>{})}function bU(t,e){const n=l_(t);return n?n.orderBy("at","asc").limit(500).onSnapshot(r=>{const i=r.docs.map(s=>{const o=s.data()||{};return o.id=s.id,o});e(i,!0)},r=>{nn(ia(r)),e([],!1,ys())}):(e([],!1,ys()),()=>{})}function NU(t){return t.text?String(t.text).slice(0,90):t.image?"Photo":t.fileName?"File: "+t.fileName:""}function DU(t,e){const n=Cd(),r=ra(t),i=l_(t);if(!n||!r||!i)return Promise.resolve({ok:!1,offline:!0});const s=e.who==="admin"?"admin":"user",o=new Date().toISOString(),a={who:s,text:String(e.text||"").slice(0,4e3),at:o,name:e.name||(s==="admin"?"4R Support":"")};e.image&&(a.image=e.image),e.fileName&&(a.fileName=String(e.fileName).slice(0,120)),e.fileData&&(a.fileData=e.fileData);const l={id:t,updatedAt:o,lastText:NU(a),lastWho:s};try{const d=jR.firestore.FieldValue.increment(1);s==="user"?l.unreadAdmin=d:l.unreadUser=d}catch{s==="user"?l.unreadAdmin=1:l.unreadUser=1}const c=n.batch();return c.set(i.doc(),a),c.set(r,l,{merge:!0}),c.commit().then(()=>({ok:!0,offline:!1})).catch(d=>(nn(ia(d)),{ok:!1,offline:!0,error:d.message}))}function VU(t,e){const n=ra(t);if(!n)return Promise.resolve(!1);const r={};return r.unreadAdmin=0,n.set(r,{merge:!0}).then(()=>!0).catch(()=>!1)}function OU(t){const e=Cd(),n=ra(t),r=l_(t);return!e||!n||!r?Promise.resolve({ok:!1,offline:!0}):r.limit(400).get().then(i=>{const s=e.batch();return i.docs.forEach(o=>s.delete(o.ref)),s.delete(n),s.commit()}).then(()=>({ok:!0})).catch(i=>(nn(ia(i)),{ok:!1,error:i.message}))}function LU(t){return new Promise((e,n)=>{if(!t||!/^image\//.test(t.type||"")){n(new Error("Sirf image file chunein."));return}const r=new FileReader;r.onerror=()=>n(new Error("File padhi nahi ja saki.")),r.onload=()=>{const i=String(r.result||""),s=new Image;s.onerror=()=>e({dataUrl:i,name:t.name}),s.onload=()=>{const a=Math.min(1,1e3/Math.max(s.width,s.height)),l=Math.max(1,Math.round(s.width*a)),c=Math.max(1,Math.round(s.height*a)),d=document.createElement("canvas");d.width=l,d.height=c,d.getContext("2d").drawImage(s,0,0,l,c);let f=i;try{f=d.toDataURL("image/jpeg",.72)}catch{f=i}if(f.length>_E)try{f=d.toDataURL("image/jpeg",.5)}catch{}if(f.length>_E){n(new Error("Image bahut badi hai, chhoti image chunein."));return}e({dataUrl:f,name:t.name})},s.src=i},r.readAsDataURL(t)})}function MU(){return typeof navigator>"u"?!0:navigator.onLine!==!1}const vE={OK:"Connection theek hai.",SDK:"Firebase SDK load nahi hua. Internet / CDN check karein.",CONFIG:"js/firebase-config.js me projectId ya apiKey galat hai.",DATABASE:"Firebase Console > Firestore Database > Create Database (Native mode) se database banayein.",RULES:"Repo ki firestore.rules ko Firebase Console > Firestore Database > Rules me paste karke PUBLISH dabayein.",NETWORK:"Device offline hai, ya page file:// se khula hai (http(s) server zaroori hai), ya network Firebase ko block kar raha hai.",SIZE:"Attachment chhota karein.",OTHER:"Error code check karein."};let kn="";function ia(t){const e=t&&t.code||"",n=t&&t.message||String(t),r=String(n).toLowerCase();return/api key not valid|api key not enabled|invalid api key|api_key/.test(r)?(kn="CONFIG","Firebase API key valid nahi hai — js/firebase-config.js check karein"):/does not exist|not found|no such project/.test(r)&&/project|firebase/.test(r)?(kn="CONFIG","Firebase project exist nahi karta (projectId galat ya project delete ho gaya)"):/firestore api.*(not enabled|has not been enabled)|cloud firestore api/.test(r)?(kn="DATABASE","Project me Cloud Firestore API enable nahi hai"):e==="failed-precondition"||/failed-precondition|has not been created/.test(r)?(kn="DATABASE","Firestore database create nahi hua — Firebase Console > Firestore Database > Create Database"):e==="permission-denied"||/permission/i.test(n)||/missing or insufficient/.test(r)?(kn="RULES","Firestore rules chat ko allow nahi kar rahi — firestore.rules publish karein"):MU()?e==="unavailable"||/network|offline|failed to fetch|load failed|net::|cors|timeout/.test(r)?(kn="NETWORK","Firebase server tak request nahi pahunchi — internet / firewall / file:// protocol"):/exceed|too large|1 ?MiB|1048576/.test(r)?(kn="SIZE","Message bahut bada hai."):(kn="OTHER",n):(kn="NETWORK","Internet band hai (device offline hai)")}function FU(){return kn||(YR()?"OK":"SDK")}function ys(){return vE[FU()]||vE.OTHER}function jU(t){return new Promise((e,n)=>{if(!t){n(new Error("File chunein."));return}if(t.size>kU){n(new Error("File 350KB se badi hai. Chhoti file bhejein."));return}const r=new FileReader;r.onerror=()=>n(new Error("File padhi nahi ja saki.")),r.onload=()=>{e({dataUrl:String(r.result||""),name:t.name})},r.readAsDataURL(t)})}const Cm=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||22,height:t.size||22,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M22 12h-6l-2 3h-4l-2-3H2"}),m.jsx("path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z"})]}),UU=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||22,height:t.size||22,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M12 2v10l3 2"}),m.jsx("circle",{cx:"12",cy:"12",r:"9.5"})]}),wE=t=>m.jsx("svg",{viewBox:"0 0 24 24",width:t.size||22,height:t.size||22,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:m.jsx("path",{d:"M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.6-.8L3 21l1.9-5.2a8.4 8.4 0 0 1-.9-3.8 8.4 8.4 0 0 1 8.5-8.4 8.4 8.4 0 0 1 8.5 7.9Z"})}),BU=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||22,height:t.size||22,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"}),m.jsx("path",{d:"M13.7 21a2 2 0 0 1-3.4 0"})]}),ZR=t=>m.jsx("svg",{viewBox:"0 0 24 24",width:t.size||17,height:t.size||17,fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:m.jsx("path",{d:"M9 18l6-6-6-6"})}),u_=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||16,height:t.size||16,fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M19 12H5"}),m.jsx("path",{d:"m12 19-7-7 7-7"})]}),ek=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||16,height:t.size||16,fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"}),m.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),zU=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||16,height:t.size||16,fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("rect",{x:"4",y:"10.5",width:"16",height:"10.5",rx:"2"}),m.jsx("path",{d:"M8 10.5V7a4 4 0 0 1 8 0v3.5"})]}),$U=t=>m.jsx("svg",{viewBox:"0 0 24 24",width:t.size||18,height:t.size||18,fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:m.jsx("path",{d:"M20 6 9 17l-5-5"})}),qU=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||26,height:t.size||26,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M12 9v4"}),m.jsx("path",{d:"M12 17h.01"}),m.jsx("path",{d:"M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"})]}),c_=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||18,height:t.size||18,fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),m.jsx("path",{d:"M7 10l5 5 5-5"}),m.jsx("path",{d:"M12 15V3"})]}),tk=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||18,height:t.size||18,fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",children:[m.jsx("path",{d:"M18 6 6 18"}),m.jsx("path",{d:"m6 6 12 12"})]}),WU=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||17,height:t.size||17,fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M3 6h18"}),m.jsx("path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),m.jsx("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),m.jsx("path",{d:"M10 11v6"}),m.jsx("path",{d:"M14 11v6"})]}),GU=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||17,height:t.size||17,fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2.5"}),m.jsx("circle",{cx:"8.5",cy:"9.5",r:"1.6"}),m.jsx("path",{d:"M21 16l-5-5-6.5 6.5"})]}),IE=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||17,height:t.size||17,fill:"none",stroke:"currentColor",strokeWidth:"1.9",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z"}),m.jsx("path",{d:"M14 2.5V7a.5.5 0 0 0 .5.5H19"})]}),KU=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||20,height:t.size||20,fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M12 5v14"}),m.jsx("path",{d:"m19 12-7 7-7-7"})]}),HU=t=>m.jsxs("svg",{viewBox:"0 0 24 24",width:t.size||16,height:t.size||16,fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("rect",{x:"6",y:"2",width:"12",height:"20",rx:"2.5"}),m.jsx("path",{d:"M11 18h2"})]}),QU="./";function YU(){return m.jsxs("div",{className:"adm-desktop-note",children:[m.jsx(HU,{}),"Admin Panel mobile ke liye design kiya gaya hai — best result ke liye phone par kholein."]})}function JU(){return m.jsx("footer",{className:"site-footer",children:m.jsxs("p",{children:["© ",new Date().getFullYear()," 4R BET — All Rights Reserved"]})})}function XU({simple:t}){const[e,n]=V.useState(!1),[r,i]=V.useState(0),s=V.useRef(null),o=_i(),a=yr(),l=o.pathname;V.useEffect(()=>{const f=XR(g=>{let w=0;g.forEach(R=>{w+=Number(R.unreadAdmin||0)}),i(w)});return()=>f&&f()},[]),V.useEffect(()=>{if(!e)return;const f=w=>{s.current&&!s.current.contains(w.target)&&n(!1)},g=w=>{w.key==="Escape"&&n(!1)};return document.addEventListener("click",f),document.addEventListener("keydown",g),()=>{document.removeEventListener("click",f),document.removeEventListener("keydown",g)}},[e]),V.useEffect(()=>{n(!1)},[l]);const c=f=>f==="/"?l==="/":l===f||l.startsWith(f+"/"),d=async f=>{if(f.preventDefault(),n(!1),!!window.confirm("Logout karein?")){try{await hU()}catch{}a("/login",{replace:!0})}};return m.jsx("header",{className:"site-header",children:m.jsxs("div",{className:"header-inner adm-header",children:[m.jsxs("div",{className:"menu-wrap",ref:s,children:[m.jsxs("button",{type:"button",className:"menu-btn"+(e?" is-open":""),"aria-label":"Open menu","aria-expanded":e,"aria-controls":"menuDrop",onClick:f=>{f.stopPropagation(),n(g=>!g)},children:[m.jsx("span",{}),m.jsx("span",{}),m.jsx("span",{})]}),m.jsx("nav",{className:"menu-drop"+(e?" is-open":""),id:"menuDrop",children:t?m.jsx("a",{className:"menu-item",href:"../index.html",children:"User Panel"}):m.jsxs(m.Fragment,{children:[m.jsx(Br,{className:"menu-item"+(c("/")?" is-active":""),to:"/",children:"Home"}),m.jsxs(Br,{className:"menu-item"+(c("/chats")?" is-active":""),to:"/chats",children:["Chats",r>0&&m.jsx("span",{className:"menu-badge",children:r>99?"99+":r})]}),m.jsx(Br,{className:"menu-item"+(c("/settings")?" is-active":""),to:"/settings",children:"Settings"}),m.jsx("a",{className:"menu-item",href:"../index.html",children:"User Panel"}),m.jsx("a",{className:"menu-item",href:"#","data-install":!0,style:{display:"none"},children:"Install App"}),m.jsx("a",{className:"menu-item",href:"#",onClick:d,children:"Logout"})]})})]}),m.jsx(Br,{className:"logo",to:t?"/login":"/",children:m.jsx("img",{className:"logo-img adm-logo",src:QU+"FAVICON/admin-logo-photo_2026-10-01_23-26-57.jpg",alt:"4R-ADMIN"})})]})})}function sa({children:t,simple:e,footer:n=!0}){return m.jsxs(m.Fragment,{children:[m.jsx(YU,{}),m.jsx(XU,{simple:e}),t,n&&m.jsx(JU,{})]})}const ZU="./",e4=ZU+"USER-ICON/2288510.png";function xd({className:t="adm-ava"}){const[e,n]=V.useState(!1);return m.jsx("span",{className:t,children:e?m.jsx("span",{className:"adm-ava-fb",children:m.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),m.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}):m.jsx("img",{src:e4,alt:"",onError:()=>n(!0)})})}function t4(){const{list:t}=a_(),e=yr(),n=gU(t);return m.jsx(sa,{children:m.jsxs("main",{className:"adm",children:[m.jsxs("div",{className:"adm-head",children:[m.jsx("h1",{children:"Admin Home"}),m.jsx("p",{children:"Saari complaints yahan dekhein aur status update karein."})]}),m.jsxs("section",{className:"adm-stats",children:[m.jsxs("div",{className:"adm-stat",children:[m.jsx("span",{className:"adm-stat-ico",children:m.jsx(Cm,{})}),m.jsx("b",{children:n.total}),m.jsx("small",{children:"Total Complaints"})]}),m.jsxs("div",{className:"adm-stat adm-stat--today",children:[m.jsx("span",{className:"adm-stat-ico",children:m.jsx(UU,{})}),m.jsx("b",{children:n.today}),m.jsx("small",{children:"Today Complaints"})]})]}),m.jsxs("section",{className:"adm-box",children:[m.jsxs("div",{className:"adm-box-head",children:[m.jsx("h2",{children:"All Complain"}),m.jsx("span",{children:n.total})]}),m.jsx("div",{className:"adm-box-body",children:t.length?t.map(r=>{const i=dl(r),s=r.data||{};return m.jsxs("button",{type:"button",className:"adm-card",onClick:()=>e("/complaint/"+encodeURIComponent(r.id)),children:[m.jsx(xd,{}),m.jsxs("span",{className:"adm-cmid",children:[m.jsx("span",{className:"adm-cname",children:s.userName||"Unknown User"}),m.jsx("span",{className:"adm-cat",children:r.category||"Complaint"}),m.jsx("span",{className:"adm-cwhen",children:o_(r.submittedAt)})]}),m.jsxs("span",{className:"adm-cright",children:[m.jsx("span",{className:"adm-status adm-status--"+i,children:kd[i]}),m.jsx("span",{className:"adm-chev",children:m.jsx(ZR,{})})]})]},r.id)}):m.jsxs("div",{className:"adm-empty",children:[m.jsx("div",{className:"adm-empty-ico",children:m.jsx(Cm,{size:26})}),m.jsx("h3",{children:"Koi complaint nahi mili"}),m.jsx("p",{children:"Jab user complaint bhejega wo yahan dikhegi."}),m.jsx("a",{className:"btn",href:"../index.html",children:"Open User Panel"})]})})]})]})})}const n4="./";function r4(){const{user:t}=qR(),e=yr(),n=Rd(),[r]=cN(),i=r.get("next")||"/",s=i.startsWith("/")?i:"/",[o,a]=V.useState(lU),[l,c]=V.useState(""),[d,f]=V.useState(!1),[g,w]=V.useState(r.get("err")==="sdk"?"Firebase load nahi hua. Internet check karein.":""),[R,k]=V.useState(!1),[x,E]=V.useState(""),[v,T]=V.useState(!1);V.useEffect(()=>{t&&e(s,{replace:!0})},[t,s,e]),V.useEffect(()=>{const j=window.FourRPwa;if(!j)return;j.init();const F=()=>T(!0);window.addEventListener("beforeinstallprompt",F);const I=setTimeout(()=>{j.installed()||(j.canInstall()?E("Install karne ke liye upar wala button dabahein."):j.isIOS()?E("iPhone par: Share → Add to Home Screen."):location.protocol!=="file:"&&E("Ya Chrome menu (3 dot) → Install app."))},2e3);return()=>{clearTimeout(I),window.removeEventListener("beforeinstallprompt",F)}},[]);const O=j=>{j.preventDefault(),w("");const F=o.trim();if(!F){w("Email daalein.");return}if(!l){w("Password daalein.");return}if(l.length<6){w("Password kam se kam 6 characters ka rakhein.");return}k(!0),cU(F,l).then(()=>{n("Login Successful"),setTimeout(()=>e(s,{replace:!0}),400)}).catch(I=>{k(!1),w(I&&I.message?I.message:"Login nahi hua.")})};return m.jsx(sa,{simple:!0,children:m.jsxs("main",{className:"adm-login",children:[m.jsx("img",{className:"adm-login-logo",src:n4+"FAVICON/admin-logo-photo_2026-10-01_23-26-57.jpg",alt:"4R-ADMIN"}),m.jsxs("h1",{children:["4R",m.jsx("small",{children:"ADMIN"})]}),m.jsx("p",{className:"sub",children:"Panel me login karein"}),m.jsxs("div",{className:"panel",children:[m.jsx("h2",{className:"panel-title",children:"Admin Login"}),m.jsxs("form",{className:"form",onSubmit:O,noValidate:!0,children:[m.jsx("div",{className:"adm-err"+(g?" is-show":""),children:g}),m.jsxs("label",{className:"field",children:[m.jsx("span",{className:"label",children:"Email ID"}),m.jsx("input",{type:"email",placeholder:"4r@admin.com",autoComplete:"username",value:o,onChange:j=>{a(j.target.value),w("")}})]}),m.jsxs("label",{className:"field",children:[m.jsx("span",{className:"label",children:"Password"}),m.jsxs("span",{className:"pwd-wrap",children:[m.jsx("input",{type:d?"text":"password",placeholder:"Apna password daalein",autoComplete:"current-password",value:l,onChange:j=>{c(j.target.value),w("")}}),m.jsx("button",{type:"button",className:"pwd-eye","aria-label":d?"Hide password":"Show password",onClick:()=>f(j=>!j),children:m.jsx(ek,{size:19})})]})]}),m.jsx("button",{type:"submit",className:"btn btn--block"+(R?" is-loading":""),disabled:R,children:m.jsx("span",{className:"btn-text",children:"Login"})})]})]}),m.jsx("p",{className:"adm-login-foot",children:"Sirf admin email hi login kar sakti hai."}),m.jsxs("button",{type:"button",className:"btn btn--block",style:{display:v?"flex":"none",maxWidth:400},onClick:()=>{const j=window.FourRPwa;j&&j.promptInstall()},children:[m.jsx(c_,{}),"Install App on Phone"]}),x&&m.jsx("p",{className:"adm-login-foot",style:{maxWidth:400},children:x})]})})}const i4=[{key:"pending",label:"Pending"},{key:"previewing",label:"Previewing"},{key:"successful",label:"Successful"}];function s4({open:t,current:e,onClose:n,onUpdate:r}){const[i,s]=V.useState(e||null);return V.useEffect(()=>{t&&s(e||null)},[t,e]),V.useEffect(()=>{if(!t)return;const o=a=>{a.key==="Escape"&&n()};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[t,n]),t?m.jsx("div",{className:"adm-pop is-open",onClick:o=>{o.target===o.currentTarget&&n()},children:m.jsxs("div",{className:"adm-pop-box",role:"dialog","aria-modal":"true",children:[m.jsxs("div",{className:"adm-pop-head",children:[m.jsx("h3",{children:"Update Status"}),m.jsx("p",{children:"Ek status choose karein, phir Update dabayein."})]}),m.jsxs("div",{className:"adm-pop-body",children:[i4.map(o=>m.jsxs("button",{type:"button",className:"adm-opt adm-opt--"+o.key+(i===o.key?" is-on":""),onClick:()=>s(o.key),children:[m.jsx("i",{}),kd[o.key]]},o.key)),m.jsx("button",{type:"button",className:"btn btn--block",disabled:!i,style:{opacity:i?1:.45},onClick:()=>{i&&(n(),r(i))},children:"Update"}),m.jsx("button",{type:"button",className:"adm-pop-close",onClick:n,children:"Cancel"})]})]})}):null}function o4({image:t,onClose:e}){if(V.useEffect(()=>{if(!t)return;const r=i=>{i.key==="Escape"&&e()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[t,e]),!t)return null;const n=()=>{let r=(t.name||"image").replace(/[^\w.\- ]+/g,"_");/\.[a-z0-9]{2,4}$/i.test(r)||(r+=".jpg");const i=document.createElement("a");i.href=t.src,i.download=r,document.body.appendChild(i),i.click(),i.remove()};return m.jsxs("div",{className:"adm-viewer is-open",role:"dialog","aria-modal":"true",children:[m.jsx("div",{className:"adm-viewer-img-wrap",children:m.jsx("img",{alt:"Complaint image",src:t.src})}),m.jsx("p",{className:"adm-viewer-name",children:t.name||""}),m.jsxs("div",{className:"adm-viewer-acts",children:[m.jsxs("button",{type:"button",className:"adm-vact adm-vact--close",onClick:e,children:[m.jsx(tk,{}),"Close"]}),m.jsxs("button",{type:"button",className:"adm-vact adm-vact--down",onClick:n,children:[m.jsx(c_,{}),"Download"]})]})]})}function a4(){const{id:t}=B0(),e=yr(),n=Rd(),{list:r,ready:i}=a_(),[s,o]=V.useState(null),[a,l]=V.useState(!1),[c,d]=V.useState(!1),[f,g]=V.useState(null),w=r.find(F=>F.id===t)||null;V.useEffect(()=>{w&&o(w)},[w]);const R=!s&&!i,k=!s&&i,x=(s&&s.images||[]).filter(F=>F&&F.dataUrl),E=s&&s.data||{},v=dl(s),T=x.length>=2,O=F=>{EU(s.id,F).then(I=>{I.ok?(o(_=>_&&{..._,status:F,statusAt:new Date().toISOString()}),n("Update Successful")):n("Update nahi hua — "+(I.error||"storage full"),!0)})},j=()=>{window.confirm("Ye complaint permanently delete karein?")&&TU(s.id).then(F=>{F.ok?e("/",{replace:!0}):n("Delete nahi hua — "+(F.error||"storage full"),!0)})};return m.jsxs(sa,{children:[m.jsxs("main",{className:"adm",children:[m.jsx("div",{className:"adm-top",children:m.jsxs(Br,{className:"adm-back",to:"/",children:[m.jsx(u_,{}),"Home"]})}),(R||k)&&m.jsx("div",{className:"adm-box",children:m.jsxs("div",{className:"adm-empty",style:{padding:"44px 20px"},children:[m.jsx("div",{className:"adm-empty-ico",children:k?m.jsx(qU,{size:26}):m.jsx(Cm,{size:26})}),m.jsx("h3",{children:k?"Complaint nahi mili":"Loading complaint..."}),m.jsx("p",{children:k?"Ye complaint delete ho chuki hai ya link galat hai.":"Cloud se data aa raha hai."}),k&&m.jsx(Br,{className:"btn",to:"/",children:"Back to Home"})]})}),s&&m.jsxs(m.Fragment,{children:[m.jsxs("section",{className:"adm-detail-head",children:[m.jsx(xd,{className:"adm-ava adm-detail-ava"}),m.jsxs("div",{className:"adm-detail-who",children:[m.jsx("h1",{children:E.userName||"Unknown User"}),m.jsxs("p",{children:[KR(s.submittedAt)," · ",s.id||""]})]}),m.jsx("span",{className:"adm-status adm-status--"+v,children:kd[v]})]}),m.jsxs("section",{className:"adm-box",style:{marginBottom:14},children:[m.jsxs("div",{className:"adm-box-head",children:[m.jsx("h2",{children:"Status"}),m.jsx("span",{children:"User panel me bhi dikhega"})]}),m.jsx("div",{className:"adm-statusbtn-wrap",children:m.jsxs("button",{type:"button",className:"btn adm-status-btn",onClick:()=>d(!0),children:[m.jsx($U,{}),"Status Update"]})})]}),m.jsxs("section",{className:"adm-box",style:{marginBottom:14},children:[m.jsxs("div",{className:"adm-box-head",children:[m.jsx("h2",{children:"Complaint Details"}),m.jsx("span",{children:s.category||"Complaint"})]}),m.jsx("div",{className:"adm-rows",children:_U.map(F=>{const I=E[F.key];return I==null||String(I).trim()===""?null:F.secret?m.jsxs("div",{className:"adm-row",children:[m.jsx("span",{className:"adm-row-k",children:F.label}),m.jsx("span",{className:"adm-row-v is-secret",children:a?String(I):"•".repeat(String(I).length)})]},F.key):m.jsxs("div",{className:"adm-row",children:[m.jsx("span",{className:"adm-row-k",children:F.label}),m.jsx("span",{className:"adm-row-v"+(F.key==="detail"?" is-plain":""),children:String(I)})]},F.key)})}),m.jsx("div",{className:"adm-acts",children:!E.password&&!x.length?m.jsx("p",{className:"adm-none",children:"Is complaint me password aur image kuch nahi hai."}):m.jsxs(m.Fragment,{children:[E.password&&m.jsxs("button",{type:"button",className:"adm-act adm-act--soft",onClick:()=>l(F=>!F),children:[!T&&m.jsx(zU,{}),m.jsx("span",{children:T?a?"Hide":"Password":a?"Hide Password":"Show Password"})]}),x.map((F,I)=>m.jsxs("button",{type:"button",className:"adm-act",onClick:()=>g({src:F.dataUrl,name:F.name}),children:[m.jsx(ek,{}),"Image ",I+1]},I))]})})]}),m.jsxs("section",{className:"adm-box adm-danger",children:[m.jsx("div",{className:"adm-note",children:"Complaint delete karne se wo user ke mailbox se bhi hat jayegi."}),m.jsx("div",{className:"adm-form",children:m.jsx("button",{type:"button",className:"btn btn--block",onClick:j,children:"Delete This Complaint"})})]})]})]}),m.jsx(s4,{open:c,current:v,onClose:()=>d(!1),onUpdate:O}),m.jsx(o4,{image:f,onClose:()=>g(null)})]})}function l4(){const[t,e]=V.useState([]),[n,r]=V.useState(""),i=yr();V.useEffect(()=>{const o=XR((a,l,c)=>{e(a),r(l?"":c||"")});return()=>o&&o()},[]);let s=0;return t.forEach(o=>{s+=Number(o.unreadAdmin||0)}),V.useEffect(()=>(document.title=(s?"("+s+") ":"")+"Chats — 4R-ADMIN",()=>{document.title="4R-ADMIN"}),[s]),m.jsx(sa,{children:m.jsxs("main",{className:"adm",children:[m.jsxs("div",{className:"adm-head",children:[m.jsx("h1",{children:"Chats"}),m.jsx("p",{children:"Jis user se baat karni ho us par tap karein."})]}),m.jsxs("section",{className:"adm-stats",children:[m.jsxs("div",{className:"adm-stat",children:[m.jsx("span",{className:"adm-stat-ico",children:m.jsx(wE,{})}),m.jsx("b",{children:t.length}),m.jsx("small",{children:"Total Chats"})]}),m.jsxs("div",{className:"adm-stat adm-stat--today",children:[m.jsx("span",{className:"adm-stat-ico",children:m.jsx(BU,{})}),m.jsx("b",{children:s}),m.jsx("small",{children:"Unread"})]})]}),m.jsxs("section",{className:"adm-box",children:[m.jsxs("div",{className:"adm-box-head",children:[m.jsx("h2",{children:"Users"}),m.jsx("span",{children:t.length})]}),m.jsx("div",{className:"adm-box-body",children:t.length?t.map(o=>{const a=Number(o.unreadAdmin||0),l=o.lastText||"Chat shuru karein",c=o.lastWho==="admin"?"You: ":"";return m.jsxs("button",{type:"button",className:"adm-card adm-chat",onClick:()=>i("/chats/"+encodeURIComponent(o.id)),children:[m.jsx(xd,{}),m.jsxs("span",{className:"adm-cmid",children:[m.jsx("span",{className:"adm-cname",children:HR(o)}),m.jsx("span",{className:"adm-chat-last",children:c+l}),m.jsx("span",{className:"adm-cwhen",children:o_(o.updatedAt||o.createdAt)})]}),m.jsxs("span",{className:"adm-cright",children:[a>0&&m.jsx("span",{className:"adm-unread",children:a>99?"99+":a}),m.jsx("span",{className:"adm-chev",children:m.jsx(ZR,{})})]})]},o.id)}):m.jsxs("div",{className:"adm-empty",children:[m.jsx("div",{className:"adm-empty-ico",children:m.jsx(wE,{size:26})}),m.jsx("h3",{children:n?"Chat load nahi hui":"Abhi koi chat nahi hai"}),m.jsx("p",{children:n||"Jab user Online Chat page se message bhejega, wo yahan dikhega."}),m.jsx("a",{className:"btn",href:"../online-chat.html",children:"Open User Chat"})]})})]})]})})}function u4(){const{id:t}=B0(),e=yr(),n=Rd(),[r,i]=V.useState(null),[s,o]=V.useState([]),[a,l]=V.useState(""),[c,d]=V.useState(!1),[f,g]=V.useState(!1),[w,R]=V.useState(""),[k,x]=V.useState(null),[E,v]=V.useState(!1),T=V.useRef(null),O=V.useRef(!0),j=V.useRef(!0),F=V.useRef(null),I=V.useRef(null);V.useEffect(()=>(document.body.classList.add("adm-room-page"),()=>document.body.classList.remove("adm-room-page")),[]),V.useEffect(()=>{let U=!0;CU(t).then(se=>{U&&se.chat&&i(se.chat)});const K=xU(t,se=>{!U||!se||(i(se),Number(se.unreadAdmin||0)>0&&VU(t))}),te=bU(t,(se,ge,Tt)=>{U&&(g(!ge),R(ge?"":Tt||""),ge&&o(se))});return()=>{U=!1,K&&K(),te&&te()}},[t]);const _=()=>{const U=T.current;return U?U.scrollHeight-U.scrollTop-U.clientHeight<90:!0},S=U=>{const K=T.current;if(K)try{K.scrollTo({top:K.scrollHeight,behavior:U?"smooth":"auto"})}catch{K.scrollTop=K.scrollHeight}},A=()=>{const U=_();O.current=U,v(!U)};V.useEffect(()=>{s.length&&O.current&&(S(!j.current),j.current=!1)},[s]),V.useEffect(()=>{if(!window.visualViewport)return;const U=()=>{setTimeout(()=>{O.current&&S(!1)},80)};return window.visualViewport.addEventListener("resize",U),()=>window.visualViewport.removeEventListener("resize",U)},[]);const C=U=>(d(!0),DU(t,U).then(K=>(d(!1),K.ok||n(K.error||"Message nahi gaya",!0),K))),b=U=>{U.preventDefault();const K=a.trim();if(K){if(!YR()){n(ys());return}l(""),C({who:"admin",text:K,name:Gf})}},P=U=>{const K=U.target.files&&U.target.files[0];U.target.value="",K&&LU(K).then(te=>C({who:"admin",image:te.dataUrl,fileName:te.name,name:Gf})).catch(te=>n(te.message||"Image nahi gayi"))},pt=U=>{const K=U.target.files&&U.target.files[0];U.target.value="",K&&jU(K).then(te=>C({who:"admin",fileName:te.name,fileData:te.dataUrl,name:Gf})).catch(te=>n(te.message||"File nahi gayi"))},pn=()=>{window.confirm("Is user ki poori chat delete karein?")&&OU(t).then(U=>{U.ok?e("/chats",{replace:!0}):n(U.error||"Delete nahi hua")})},mn=U=>{x({m:U,time:KR(U.at)})},X=r?HR(r):"Loading...",$=r?"Chat ID: "+String(r.id||t).slice(0,6).toUpperCase()+" · "+o_(r.updatedAt||r.createdAt):f?w||"Offline — internet check karein":"Chat khul rahi hai";return m.jsx(sa,{footer:!1,children:m.jsxs("main",{className:"adm-room",children:[m.jsxs("div",{className:"adm-room-bar",children:[m.jsx(Br,{className:"adm-back adm-back--ico",to:"/chats","aria-label":"Back to chats",children:m.jsx(u_,{})}),m.jsx(xd,{className:"adm-ava adm-ava--sm"}),m.jsxs("div",{className:"adm-room-who",children:[m.jsx("strong",{children:X}),m.jsx("small",{children:$})]}),m.jsx("button",{type:"button",className:"adm-room-del",title:"Delete chat","aria-label":"Delete chat",onClick:pn,children:m.jsx(WU,{})})]}),m.jsx("div",{className:"chat-messages adm-room-msgs",ref:T,onScroll:A,children:s.length?s.map(U=>{const K=U.who==="admin";return m.jsxs("div",{className:"msg "+(K?"msg--user":"msg--agent")+(U.image||U.fileName?" msg--file":""),role:"button",tabIndex:0,onClick:()=>mn(U),onKeyDown:te=>{(te.key==="Enter"||te.key===" ")&&(te.preventDefault(),mn(U))},children:[m.jsx("span",{className:"msg-name",children:K?"You (Support)":X}),U.image?m.jsxs(m.Fragment,{children:[m.jsx("img",{className:"msg-image",src:U.image,alt:U.fileName||"image"}),m.jsx("span",{className:"msg-file-cap",children:U.fileName||"Photo"})]}):U.fileName?m.jsxs(m.Fragment,{children:[m.jsx("span",{className:"msg-file-ico",children:m.jsx(IE,{size:20})}),U.fileData?m.jsx("a",{className:"msg-file-name",href:U.fileData,download:U.fileName,onClick:te=>te.stopPropagation(),children:U.fileName}):m.jsx("span",{className:"msg-file-name",children:U.fileName})]}):m.jsxs(m.Fragment,{children:[m.jsx("p",{className:"msg-text",children:U.text||""}),U.editedAt&&m.jsx("span",{className:"msg-edited",children:"edited"})]})]},U.id)}):m.jsxs("div",{className:"adm-room-empty",children:[m.jsx("p",{children:"Abhi koi message nahi hai."}),m.jsx("small",{children:"Neeche se reply bhejein."})]})}),m.jsx("button",{type:"button",className:"chat-latest"+(E?" is-show":""),"aria-label":"Latest messages",onClick:()=>{S(!0),O.current=!0,v(!1)},children:m.jsx(KU,{})}),m.jsxs("div",{className:"chat-actions",children:[m.jsxs("button",{type:"button",className:"chat-act",title:"Send image",onClick:()=>F.current&&F.current.click(),children:[m.jsx(GU,{}),m.jsx("span",{children:"Image"})]}),m.jsxs("button",{type:"button",className:"chat-act",title:"Send file or PDF",onClick:()=>I.current&&I.current.click(),children:[m.jsx(IE,{}),m.jsx("span",{children:"File / PDF"})]}),m.jsx("input",{ref:F,type:"file",accept:"image/*",hidden:!0,onChange:P}),m.jsx("input",{ref:I,type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.txt,.zip",hidden:!0,onChange:pt})]}),m.jsxs("form",{className:"chat-input",onSubmit:b,children:[m.jsx("input",{type:"text",placeholder:"Reply likhiye...",autoComplete:"off",value:a,onChange:U=>l(U.target.value)}),m.jsx("button",{type:"submit",className:"btn btn--send",disabled:c,children:"Send"})]}),k&&m.jsx("div",{className:"modal-backdrop is-open",onClick:U=>{U.target===U.currentTarget&&x(null)},children:m.jsxs("div",{className:"modal chat-popup",children:[m.jsx("button",{type:"button",className:"popup-x","aria-label":"Close",onClick:()=>x(null),children:m.jsx(tk,{})}),m.jsx("h3",{className:"modal-title chat-popup-title",children:k.m.who==="admin"?"Your Message":X}),m.jsxs("p",{className:"chat-popup-when",children:[m.jsx("strong",{children:"Sent:"})," ",k.time]}),m.jsx("div",{className:"chat-popup-body",children:k.m.image?m.jsxs(m.Fragment,{children:[m.jsx("img",{className:"popup-img",src:k.m.image,alt:k.m.fileName||"image"}),m.jsx("p",{className:"popup-file-name",children:k.m.fileName||""})]}):m.jsx("p",{className:"popup-text",children:k.m.text||k.m.fileName||""})}),m.jsx("button",{type:"button",className:"btn btn--block popup-close",onClick:()=>x(null),children:"Close"})]})})]})})}function xi(){return window.FourRTelegram}function c4(){const t=Rd(),{list:e,refresh:n}=a_(),[r,i]=V.useState(e.length);V.useEffect(()=>{i(e.length)},[e]);const[s,o]=V.useState({state:"CHECKING",color:"#6b7280",note:"",canInstall:!1}),a=()=>{const X=window.FourRPwa;if(X){if(X.installed()){X.showInstallButtons(!1),o({state:"INSTALLED",color:"#157a4d",note:"App phone par install ho chuka hai. Ab ise app icon se kholein &mdash; login apne aap ho jayega.",canInstall:!1});return}X.canInstall()?o({state:"READY",color:"#4f6bed",note:"Neeche <b>Install App on Phone</b> dabaein, phir apne phone ka logo par <b>Install</b> / <b>Add</b> chunein.",canInstall:!0}):X.isIOS()?o({state:"MANUAL",color:"#c2740a",note:"iPhone par: Chrome me <b>Share</b> button dabayein, phir <b>Add to Home Screen</b> chunein.",canInstall:!1}):location.protocol==="file:"?o({state:"NEEDS HTTPS",color:"#e5484d",note:"Install sirf <b>https://</b> ya live server par hota hai. Project ko hosting par daalein (jaise GitHub Pages) phir kholein.",canInstall:!1}):o({state:"NOT AVAILABLE",color:"#c2740a",note:"Chrome ka menu (3 dot) kholein aur <b>Install app</b> ya <b>Add to Home screen</b> chunein.",canInstall:!1})}};V.useEffect(()=>{const X=window.FourRPwa;if(!X)return;X.init(),a();const $=setTimeout(a,2e3);return()=>clearTimeout($)},[]);const[l,c]=V.useState({online:!1,error:"",count:0}),d=X=>{c({online:IU(),error:Wf(),count:(X||pr()).length})};V.useEffect(()=>{d(),km().then($=>d($));const X=()=>d();return window.addEventListener("4r-sync",X),()=>window.removeEventListener("4r-sync",X)},[]);const f=async X=>{const $=X.currentTarget;$.classList.add("is-loading");const U=await km();d(U),$.classList.remove("is-loading"),t(Wf()?"Cloud error — rules check karein":"Sync Done · "+U.length+" complaints",!!Wf())},[g,w]=V.useState({botToken:"",chatId:"",enabled:!0}),[R,k]=V.useState(0),[x,E]=V.useState(!1),v=()=>{const X=xi();if(!X)return;const $=X.getSettings();w($),k(X.queueSize())};V.useEffect(()=>{v()},[]);const T=X=>{X.preventDefault();const $=xi();if(!$)return;if(!$.saveSettings({botToken:g.botToken.trim(),chatId:g.chatId.trim()})){t("Save nahi hua — storage full hai",!0);return}v(),t("Update Successful"),$.flushQueue()},O=()=>{const X=xi();if(X){if(!X.isReady()){t("Pehle Bot Token aur Chat ID update karein",!0);return}E(!0),X.sendText(`✅ <b>4R-ADMIN</b> connection test
━━━━━━━━━━
Telegram alerts <b>ON</b> hai.
Ab har nayi complaint yahan aa jayegi.`).then(()=>t("Test Message Sent")).catch($=>t("Fail: "+$.message,!0)).then(()=>E(!1))}},j=()=>{const X=xi();if(!X)return;const $=X.getSettings();X.saveSettings({enabled:!$.enabled}),v(),$.enabled||X.flushQueue()},F=()=>{const X=xi();if(X){if(!X.queueSize()){t("Koi pending message nahi hai");return}E(!0),X.flushQueue().then($=>t($?$+" Message Sent":"Abhi bhi nahi gaya — settings check karein",!$)).then(()=>{E(!1),v()})}},[I,_]=V.useState(Ui()),[S,A]=V.useState(La());V.useEffect(()=>{A(La())},[e]);const C=()=>{yE({showPassword:!Ui().showPassword}),_(Ui()),A(La()),t("Update Successful")},b=V.useRef(null),P=()=>{const X=xi(),$={app:"4R-ADMIN",version:1,exportedAt:new Date().toISOString(),complaints:pr(),telegram:X?X.getSettings():{},ui:Ui()},U=new Blob([JSON.stringify($,null,2)],{type:"application/json"}),K=URL.createObjectURL(U),te=document.createElement("a"),se=new Date,ge=Tt=>Tt<10?"0"+Tt:""+Tt;te.href=K,te.download="4r-admin-backup-"+se.getFullYear()+ge(se.getMonth()+1)+ge(se.getDate())+".json",document.body.appendChild(te),te.click(),te.remove(),setTimeout(()=>URL.revokeObjectURL(K),1e3)},pt=X=>{const $=X.target.files&&X.target.files[0];if(!$)return;const U=new FileReader;U.onload=()=>{try{const K=JSON.parse(U.result);if(!K||!Array.isArray(K.complaints))throw new Error("bad file");gs(K.complaints);const te=xi();K.telegram&&te&&te.saveSettings(K.telegram),K.ui&&yE(K.ui),v(),_(Ui()),A(La()),i(K.complaints.length),n&&n(),t("Update Successful")}catch{t("File sahi nahi hai",!0)}X.target.value=""},U.readAsText($)},pn=()=>{window.confirm("SAARI complaints permanently delete ho jayengi (Firestore + browser dono se). Pakka?")&&SU().then(()=>{n&&n(),d([]),A(La()),t("All Complaints Deleted")})},mn=g.enabled&&g.botToken&&g.chatId;return m.jsx(sa,{children:m.jsxs("main",{className:"adm",children:[m.jsx("div",{className:"adm-top",children:m.jsxs(Br,{className:"adm-back",to:"/",children:[m.jsx(u_,{}),"Home"]})}),m.jsxs("div",{className:"adm-head",children:[m.jsx("h1",{children:"Settings"}),m.jsx("p",{children:"Telegram alerts aur panel ki basic settings yahan se update karein."})]}),m.jsxs("section",{className:"adm-box",style:{marginBottom:14},children:[m.jsxs("div",{className:"adm-box-head",children:[m.jsx("h2",{children:"Install App"}),m.jsx("span",{style:{color:s.color},children:s.state})]}),m.jsx("div",{className:"adm-hint",children:"Phone par app install karne se 4R-ADMIN apna hi icon khulta hai — browser ka bar nahi dikhta, aur full screen me chalta hai."}),m.jsxs("div",{className:"adm-form",children:[s.canInstall&&m.jsxs("button",{type:"button",className:"btn btn--block",onClick:()=>{const X=window.FourRPwa;X&&X.promptInstall().then(a)},children:[m.jsx(c_,{}),"Install App on Phone"]}),m.jsx("p",{className:"adm-note",style:{border:"1px solid var(--line)",borderRadius:8},dangerouslySetInnerHTML:{__html:s.note}})]})]}),m.jsxs("section",{className:"adm-box",style:{marginBottom:14},children:[m.jsxs("div",{className:"adm-box-head",children:[m.jsx("h2",{children:"Cloud Database"}),m.jsx("span",{style:{color:l.error?"#e5484d":l.online?"#157a4d":"#c2740a"},children:l.error?"RULES ERROR":l.online?"ONLINE":"OFFLINE"})]}),m.jsxs("div",{className:"adm-set-row",children:[m.jsxs("span",{className:"adm-row-k",children:["Firebase (Firestore)",m.jsx("small",{children:l.error?l.error:l.online?"Connected · collection: complaints":"SDK load nahi hua (internet check karein)"})]}),m.jsx("span",{className:"adm-set-val",children:r})]}),m.jsx("div",{className:"adm-form",children:m.jsx("button",{type:"button",className:"btn btn--ghost",style:{width:"100%"},onClick:f,children:"Sync Now"})}),m.jsx("div",{className:"adm-note",style:{borderTop:"1px solid var(--line)"},children:l.error?m.jsxs(m.Fragment,{children:[m.jsx("b",{style:{color:"#e5484d"},children:"Cloud save nahi ho raha."}),m.jsx("br",{}),"Project ",m.jsx("b",{children:"rbet-6770a"})," ke liye rules publish nahi hui. Firebase Console > Firestore Database > Rules me project ki ",m.jsx("b",{children:"firestore.rules"})," paste karke"," ",m.jsx("b",{children:"Publish"})," dabayein. Tab tak complaint browser me hi save hoti rahegi."]}):m.jsx(m.Fragment,{children:"Complaint ab Firebase me save hoti hai, isliye admin panel kisi bhi device par sabhi complaints dekh sakta hai. Internet na ho to data browser me hi rehta hai."})})]}),m.jsxs("section",{className:"adm-box",style:{marginBottom:14},children:[m.jsxs("div",{className:"adm-box-head",children:[m.jsx("h2",{children:"Telegram Alerts"}),m.jsx("span",{style:{color:mn?"#157a4d":"#c2740a"},children:mn?"ON":"OFF"})]}),m.jsxs("div",{className:"adm-hint",children:[m.jsx("b",{children:"Kaise set karein:"}),m.jsx("br",{}),"1. Telegram me ",m.jsx("b",{children:"@BotFather"})," kholein aur ",m.jsx("b",{children:"/newbot"})," se bot banayein.",m.jsx("br",{}),"2. Bot token copy karke neeche paste karein.",m.jsx("br",{}),"3. Apni notification group banayein, bot ko us group me add karein.",m.jsx("br",{}),"4. Group ka ",m.jsx("b",{children:"chat ID"})," neeche daalein."]}),m.jsxs("form",{className:"adm-form",onSubmit:T,children:[m.jsxs("div",{className:"field",children:[m.jsx("label",{className:"label",htmlFor:"botToken",children:"Bot Token"}),m.jsx("input",{type:"text",id:"botToken",placeholder:"1234567890:AAExxxxxxxxxxxxxxxxxxxxx",autoComplete:"off",spellCheck:"false",value:g.botToken,onChange:X=>w({...g,botToken:X.target.value})})]}),m.jsxs("div",{className:"field",children:[m.jsx("label",{className:"label",htmlFor:"chatId",children:"Chat ID"}),m.jsx("input",{type:"text",id:"chatId",placeholder:"-1001234567890",autoComplete:"off",spellCheck:"false",value:g.chatId,onChange:X=>w({...g,chatId:X.target.value})})]}),m.jsxs("div",{className:"adm-btn-row",children:[m.jsx("button",{type:"submit",className:"btn btn--block",children:m.jsx("span",{className:"btn-text",children:"Update"})}),m.jsx("button",{type:"button",className:"btn btn--ghost"+(x?" is-loading":""),onClick:O,disabled:x,children:"Test"})]})]}),m.jsxs("div",{className:"adm-set-row",children:[m.jsxs("span",{className:"adm-row-k",children:["Telegram Alerts",m.jsx("small",{children:"Har nayi complaint par message bhejein"})]}),m.jsx("button",{type:"button",className:"adm-switch"+(g.enabled?" is-on":""),role:"switch","aria-checked":g.enabled,onClick:j})]}),m.jsxs("div",{className:"adm-set-row",children:[m.jsxs("span",{className:"adm-row-k",children:["Pending Messages",m.jsx("small",{children:R?R+" message waiting":"Bheje ja chuke hain"})]}),m.jsx("button",{type:"button",className:"btn btn--ghost"+(x?" is-loading":""),style:{margin:0,padding:"9px 14px",fontSize:13.5,flex:"0 0 auto"},onClick:F,disabled:x,children:"Retry"})]})]}),m.jsxs("section",{className:"adm-box",style:{marginBottom:14},children:[m.jsxs("div",{className:"adm-box-head",children:[m.jsx("h2",{children:"Panel Preferences"}),m.jsx("span",{children:"Working"})]}),m.jsxs("div",{className:"adm-set-row",children:[m.jsxs("span",{className:"adm-row-k",children:["Show Password in User Mailbox",m.jsx("small",{children:"Band rahe to password chhupa hua dikhega"})]}),m.jsx("button",{type:"button",className:"adm-switch"+(I.showPassword?" is-on":""),role:"switch","aria-checked":I.showPassword,onClick:C})]}),m.jsxs("div",{className:"adm-set-row",children:[m.jsxs("span",{className:"adm-row-k",children:["Storage Used",m.jsx("small",{children:"Browser me saved data"})]}),m.jsxs("span",{className:"adm-set-val",children:[S," KB"]})]}),m.jsxs("div",{className:"adm-set-row",children:[m.jsxs("span",{className:"adm-row-k",children:["Total Complaints",m.jsx("small",{children:"Panel me saved"})]}),m.jsx("span",{className:"adm-set-val",children:r})]})]}),m.jsxs("section",{className:"adm-box",style:{marginBottom:14},children:[m.jsxs("div",{className:"adm-box-head",children:[m.jsx("h2",{children:"Backup & Restore"}),m.jsx("span",{children:"JSON"})]}),m.jsxs("div",{className:"adm-form",children:[m.jsxs("div",{className:"adm-btn-row",children:[m.jsx("button",{type:"button",className:"btn btn--block",onClick:P,children:m.jsx("span",{className:"btn-text",children:"Export Backup"})}),m.jsx("button",{type:"button",className:"btn btn--ghost",onClick:()=>b.current&&b.current.click(),children:"Import"})]}),m.jsx("input",{ref:b,type:"file",accept:".json,application/json",hidden:!0,onChange:pt}),m.jsx("p",{className:"adm-note",style:{border:"1px solid var(--line)",borderRadius:8},children:"Export se saari complaints ke data aur images ek file me mil jayenge."})]})]}),m.jsxs("section",{className:"adm-box adm-danger",children:[m.jsxs("div",{className:"adm-box-head",children:[m.jsx("h2",{children:"Danger Zone"}),m.jsx("span",{children:"Careful"})]}),m.jsx("div",{className:"adm-form",children:m.jsx("button",{type:"button",className:"btn btn--block",onClick:pn,children:"Delete All Complaints"})})]})]})})}function Ma({children:t}){const{user:e,ready:n}=qR(),r=_i();return n?e?t:m.jsx(G0,{to:"/login?next="+encodeURIComponent(r.pathname),replace:!0}):null}function h4(){return m.jsx(oN,{children:m.jsx(fU,{children:m.jsx(pU,{children:m.jsxs(Xb,{children:[m.jsx(br,{path:"/login",element:m.jsx(r4,{})}),m.jsx(br,{path:"/",element:m.jsx(Ma,{children:m.jsx(t4,{})})}),m.jsx(br,{path:"/complaint/:id",element:m.jsx(Ma,{children:m.jsx(a4,{})})}),m.jsx(br,{path:"/chats",element:m.jsx(Ma,{children:m.jsx(l4,{})})}),m.jsx(br,{path:"/chats/:id",element:m.jsx(Ma,{children:m.jsx(u4,{})})}),m.jsx(br,{path:"/settings",element:m.jsx(Ma,{children:m.jsx(c4,{})})}),m.jsx(br,{path:"*",element:m.jsx(G0,{to:"/",replace:!0})})]})})})})}V0(document.getElementById("root")).render(m.jsx(V.StrictMode,{children:m.jsx(h4,{})}));
