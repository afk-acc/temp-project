(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Bc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ge={},Ys=[],Yn=()=>{},Qp=()=>!1,da=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),zc=n=>n.startsWith("onUpdate:"),Be=Object.assign,Hc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},tm=Object.prototype.hasOwnProperty,ce=(n,t)=>tm.call(n,t),Ft=Array.isArray,js=n=>eo(n)==="[object Map]",pa=n=>eo(n)==="[object Set]",Pu=n=>eo(n)==="[object Date]",$t=n=>typeof n=="function",Ce=n=>typeof n=="string",jn=n=>typeof n=="symbol",_e=n=>n!==null&&typeof n=="object",$f=n=>(_e(n)||$t(n))&&$t(n.then)&&$t(n.catch),Yf=Object.prototype.toString,eo=n=>Yf.call(n),em=n=>eo(n).slice(8,-1),jf=n=>eo(n)==="[object Object]",Vc=n=>Ce(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Dr=Bc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ma=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},nm=/-(\w)/g,Fi=ma(n=>n.replace(nm,(t,e)=>e?e.toUpperCase():"")),im=/\B([A-Z])/g,xs=ma(n=>n.replace(im,"-$1").toLowerCase()),qf=ma(n=>n.charAt(0).toUpperCase()+n.slice(1)),Fa=ma(n=>n?`on${qf(n)}`:""),Li=(n,t)=>!Object.is(n,t),Ho=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Kf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Dl=n=>{const t=parseFloat(n);return isNaN(t)?n:t},sm=n=>{const t=Ce(n)?Number(n):NaN;return isNaN(t)?n:t};let Du;const ga=()=>Du||(Du=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Le(n){if(Ft(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Ce(i)?lm(i):Le(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Ce(n)||_e(n))return n}const rm=/;(?![^(]*\))/g,om=/:([^]+)/,am=/\/\*[^]*?\*\//g;function lm(n){const t={};return n.replace(am,"").split(rm).forEach(e=>{if(e){const i=e.split(om);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function xn(n){let t="";if(Ce(n))t=n;else if(Ft(n))for(let e=0;e<n.length;e++){const i=xn(n[e]);i&&(t+=i+" ")}else if(_e(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const cm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",um=Bc(cm);function Zf(n){return!!n||n===""}function hm(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=_a(n[i],t[i]);return e}function _a(n,t){if(n===t)return!0;let e=Pu(n),i=Pu(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=jn(n),i=jn(t),e||i)return n===t;if(e=Ft(n),i=Ft(t),e||i)return e&&i?hm(n,t):!1;if(e=_e(n),i=_e(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!_a(n[o],t[o]))return!1}}return String(n)===String(t)}function Jf(n,t){return n.findIndex(e=>_a(e,t))}const Qf=n=>!!(n&&n.__v_isRef===!0),ft=n=>Ce(n)?n:n==null?"":Ft(n)||_e(n)&&(n.toString===Yf||!$t(n.toString))?Qf(n)?ft(n.value):JSON.stringify(n,td,2):String(n),td=(n,t)=>Qf(t)?td(n,t.value):js(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Oa(i,r)+" =>"]=s,e),{})}:pa(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Oa(e))}:jn(t)?Oa(t):_e(t)&&!Ft(t)&&!jf(t)?String(t):t,Oa=(n,t="")=>{var e;return jn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mn;class fm{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=mn,!t&&mn&&(this.index=(mn.scopes||(mn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=mn;try{return mn=this,t()}finally{mn=e}}}on(){mn=this}off(){mn=this.parent}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function dm(){return mn}let Me;const ka=new WeakSet;class ed{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,mn&&mn.active&&mn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ka.has(this)&&(ka.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||id(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Lu(this),sd(this);const t=Me,e=Fn;Me=this,Fn=!0;try{return this.fn()}finally{rd(this),Me=t,Fn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Xc(t);this.deps=this.depsTail=void 0,Lu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ka.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ll(this)&&this.run()}get dirty(){return Ll(this)}}let nd=0,Lr,Ir;function id(n,t=!1){if(n.flags|=8,t){n.next=Ir,Ir=n;return}n.next=Lr,Lr=n}function Gc(){nd++}function Wc(){if(--nd>0)return;if(Ir){let t=Ir;for(Ir=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Lr;){let t=Lr;for(Lr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function sd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function rd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Xc(i),pm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Ll(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(od(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function od(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===zr))return;n.globalVersion=zr;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!Ll(n)){n.flags&=-3;return}const e=Me,i=Fn;Me=n,Fn=!0;try{sd(n);const s=n.fn(n._value);(t.version===0||Li(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{Me=e,Fn=i,rd(n),n.flags&=-3}}function Xc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Xc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function pm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Fn=!0;const ad=[];function Hi(){ad.push(Fn),Fn=!1}function Vi(){const n=ad.pop();Fn=n===void 0?!0:n}function Lu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Me;Me=void 0;try{t()}finally{Me=e}}}let zr=0;class mm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $c{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Me||!Fn||Me===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Me)e=this.activeLink=new mm(Me,this),Me.deps?(e.prevDep=Me.depsTail,Me.depsTail.nextDep=e,Me.depsTail=e):Me.deps=Me.depsTail=e,ld(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Me.depsTail,e.nextDep=void 0,Me.depsTail.nextDep=e,Me.depsTail=e,Me.deps===e&&(Me.deps=i)}return e}trigger(t){this.version++,zr++,this.notify(t)}notify(t){Gc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Wc()}}}function ld(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)ld(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Il=new WeakMap,hs=Symbol(""),Ul=Symbol(""),Hr=Symbol("");function Xe(n,t,e){if(Fn&&Me){let i=Il.get(n);i||Il.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new $c),s.map=i,s.key=e),s.track()}}function ci(n,t,e,i,s,r){const o=Il.get(n);if(!o){zr++;return}const a=l=>{l&&l.trigger()};if(Gc(),t==="clear")o.forEach(a);else{const l=Ft(n),c=l&&Vc(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Hr||!jn(f)&&f>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Hr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(hs)),js(n)&&a(o.get(Ul)));break;case"delete":l||(a(o.get(hs)),js(n)&&a(o.get(Ul)));break;case"set":js(n)&&a(o.get(hs));break}}Wc()}function bs(n){const t=re(n);return t===n?t:(Xe(t,"iterate",Hr),Tn(n)?t:t.map($e))}function va(n){return Xe(n=re(n),"iterate",Hr),n}const gm={__proto__:null,[Symbol.iterator](){return Ba(this,Symbol.iterator,$e)},concat(...n){return bs(this).concat(...n.map(t=>Ft(t)?bs(t):t))},entries(){return Ba(this,"entries",n=>(n[1]=$e(n[1]),n))},every(n,t){return Jn(this,"every",n,t,void 0,arguments)},filter(n,t){return Jn(this,"filter",n,t,e=>e.map($e),arguments)},find(n,t){return Jn(this,"find",n,t,$e,arguments)},findIndex(n,t){return Jn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Jn(this,"findLast",n,t,$e,arguments)},findLastIndex(n,t){return Jn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Jn(this,"forEach",n,t,void 0,arguments)},includes(...n){return za(this,"includes",n)},indexOf(...n){return za(this,"indexOf",n)},join(n){return bs(this).join(n)},lastIndexOf(...n){return za(this,"lastIndexOf",n)},map(n,t){return Jn(this,"map",n,t,void 0,arguments)},pop(){return _r(this,"pop")},push(...n){return _r(this,"push",n)},reduce(n,...t){return Iu(this,"reduce",n,t)},reduceRight(n,...t){return Iu(this,"reduceRight",n,t)},shift(){return _r(this,"shift")},some(n,t){return Jn(this,"some",n,t,void 0,arguments)},splice(...n){return _r(this,"splice",n)},toReversed(){return bs(this).toReversed()},toSorted(n){return bs(this).toSorted(n)},toSpliced(...n){return bs(this).toSpliced(...n)},unshift(...n){return _r(this,"unshift",n)},values(){return Ba(this,"values",$e)}};function Ba(n,t,e){const i=va(n),s=i[t]();return i!==n&&!Tn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=e(r.value)),r}),s}const _m=Array.prototype;function Jn(n,t,e,i,s,r){const o=va(n),a=o!==n&&!Tn(n),l=o[t];if(l!==_m[t]){const h=l.apply(n,r);return a?$e(h):h}let c=e;o!==n&&(a?c=function(h,f){return e.call(this,$e(h),f,n)}:e.length>2&&(c=function(h,f){return e.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Iu(n,t,e,i){const s=va(n);let r=e;return s!==n&&(Tn(n)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,n)}):r=function(o,a,l){return e.call(this,o,$e(a),l,n)}),s[t](r,...i)}function za(n,t,e){const i=re(n);Xe(i,"iterate",Hr);const s=i[t](...e);return(s===-1||s===!1)&&qc(e[0])?(e[0]=re(e[0]),i[t](...e)):s}function _r(n,t,e=[]){Hi(),Gc();const i=re(n)[t].apply(n,e);return Wc(),Vi(),i}const vm=Bc("__proto__,__v_isRef,__isVue"),cd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(jn));function xm(n){jn(n)||(n=String(n));const t=re(this);return Xe(t,"has",n),t.hasOwnProperty(n)}class ud{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Rm:pd:r?dd:fd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Ft(t);if(!s){let l;if(o&&(l=gm[e]))return l;if(e==="hasOwnProperty")return xm}const a=Reflect.get(t,e,je(t)?t:i);return(jn(e)?cd.has(e):vm(e))||(s||Xe(t,"get",e),r)?a:je(a)?o&&Vc(e)?a:a.value:_e(a)?s?md(a):xa(a):a}}class hd extends ud{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];if(!this._isShallow){const l=ps(r);if(!Tn(i)&&!ps(i)&&(r=re(r),i=re(i)),!Ft(t)&&je(r)&&!je(i))return l?!1:(r.value=i,!0)}const o=Ft(t)&&Vc(e)?Number(e)<t.length:ce(t,e),a=Reflect.set(t,e,i,je(t)?t:s);return t===re(s)&&(o?Li(i,r)&&ci(t,"set",e,i):ci(t,"add",e,i)),a}deleteProperty(t,e){const i=ce(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&ci(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!jn(e)||!cd.has(e))&&Xe(t,"has",e),i}ownKeys(t){return Xe(t,"iterate",Ft(t)?"length":hs),Reflect.ownKeys(t)}}class Mm extends ud{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const ym=new hd,Sm=new Mm,bm=new hd(!0);const Nl=n=>n,lo=n=>Reflect.getPrototypeOf(n);function Em(n,t,e){return function(...i){const s=this.__v_raw,r=re(s),o=js(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Nl:t?Fl:$e;return!t&&Xe(r,"iterate",l?Ul:hs),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function co(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function wm(n,t){const e={get(s){const r=this.__v_raw,o=re(r),a=re(s);n||(Li(s,a)&&Xe(o,"get",s),Xe(o,"get",a));const{has:l}=lo(o),c=t?Nl:n?Fl:$e;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Xe(re(s),"iterate",hs),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=re(r),a=re(s);return n||(Li(s,a)&&Xe(o,"has",s),Xe(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=re(a),c=t?Nl:n?Fl:$e;return!n&&Xe(l,"iterate",hs),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Be(e,n?{add:co("add"),set:co("set"),delete:co("delete"),clear:co("clear")}:{add(s){!t&&!Tn(s)&&!ps(s)&&(s=re(s));const r=re(this);return lo(r).has.call(r,s)||(r.add(s),ci(r,"add",s,s)),this},set(s,r){!t&&!Tn(r)&&!ps(r)&&(r=re(r));const o=re(this),{has:a,get:l}=lo(o);let c=a.call(o,s);c||(s=re(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Li(r,u)&&ci(o,"set",s,r):ci(o,"add",s,r),this},delete(s){const r=re(this),{has:o,get:a}=lo(r);let l=o.call(r,s);l||(s=re(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ci(r,"delete",s,void 0),c},clear(){const s=re(this),r=s.size!==0,o=s.clear();return r&&ci(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Em(s,n,t)}),e}function Yc(n,t){const e=wm(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ce(e,s)&&s in i?e:i,s,r)}const Tm={get:Yc(!1,!1)},Am={get:Yc(!1,!0)},Cm={get:Yc(!0,!1)};const fd=new WeakMap,dd=new WeakMap,pd=new WeakMap,Rm=new WeakMap;function Pm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dm(n){return n.__v_skip||!Object.isExtensible(n)?0:Pm(em(n))}function xa(n){return ps(n)?n:jc(n,!1,ym,Tm,fd)}function Lm(n){return jc(n,!1,bm,Am,dd)}function md(n){return jc(n,!0,Sm,Cm,pd)}function jc(n,t,e,i,s){if(!_e(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=Dm(n);if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function qs(n){return ps(n)?qs(n.__v_raw):!!(n&&n.__v_isReactive)}function ps(n){return!!(n&&n.__v_isReadonly)}function Tn(n){return!!(n&&n.__v_isShallow)}function qc(n){return n?!!n.__v_raw:!1}function re(n){const t=n&&n.__v_raw;return t?re(t):n}function Im(n){return!ce(n,"__v_skip")&&Object.isExtensible(n)&&Kf(n,"__v_skip",!0),n}const $e=n=>_e(n)?xa(n):n,Fl=n=>_e(n)?md(n):n;function je(n){return n?n.__v_isRef===!0:!1}function fs(n){return gd(n,!1)}function Wi(n){return gd(n,!0)}function gd(n,t){return je(n)?n:new Um(n,t)}class Um{constructor(t,e){this.dep=new $c,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:re(t),this._value=e?t:$e(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Tn(t)||ps(t);t=i?t:re(t),Li(t,e)&&(this._rawValue=t,this._value=i?t:$e(t),this.dep.trigger())}}function G(n){return je(n)?n.value:n}const Nm={get:(n,t,e)=>t==="__v_raw"?n:G(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return je(s)&&!je(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function _d(n){return qs(n)?n:new Proxy(n,Nm)}class Fm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new $c(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return id(this,!0),!0}get value(){const t=this.dep.track();return od(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Om(n,t,e=!1){let i,s;return $t(n)?i=n:(i=n.get,s=n.set),new Fm(i,s,e)}const uo={},Jo=new WeakMap;let is;function km(n,t=!1,e=is){if(e){let i=Jo.get(e);i||Jo.set(e,i=[]),i.push(n)}}function Bm(n,t,e=ge){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=x=>s?x:Tn(x)||s===!1||s===0?ui(x,1):ui(x);let u,h,f,d,m=!1,_=!1;if(je(n)?(h=()=>n.value,m=Tn(n)):qs(n)?(h=()=>c(n),m=!0):Ft(n)?(_=!0,m=n.some(x=>qs(x)||Tn(x)),h=()=>n.map(x=>{if(je(x))return x.value;if(qs(x))return c(x);if($t(x))return l?l(x,2):x()})):$t(n)?t?h=l?()=>l(n,2):n:h=()=>{if(f){Hi();try{f()}finally{Vi()}}const x=is;is=u;try{return l?l(n,3,[d]):n(d)}finally{is=x}}:h=Yn,t&&s){const x=h,F=s===!0?1/0:s;h=()=>ui(x(),F)}const g=dm(),p=()=>{u.stop(),g&&g.active&&Hc(g.effects,u)};if(r&&t){const x=t;t=(...F)=>{x(...F),p()}}let S=_?new Array(n.length).fill(uo):uo;const y=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(t){const F=u.run();if(s||m||(_?F.some((R,C)=>Li(R,S[C])):Li(F,S))){f&&f();const R=is;is=u;try{const C=[F,S===uo?void 0:_&&S[0]===uo?[]:S,d];l?l(t,3,C):t(...C),S=F}finally{is=R}}}else u.run()};return a&&a(y),u=new ed(h),u.scheduler=o?()=>o(y,!1):y,d=x=>km(x,!1,u),f=u.onStop=()=>{const x=Jo.get(u);if(x){if(l)l(x,4);else for(const F of x)F();Jo.delete(u)}},t?i?y(!0):S=u.run():o?o(y.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ui(n,t=1/0,e){if(t<=0||!_e(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,je(n))ui(n.value,t,e);else if(Ft(n))for(let i=0;i<n.length;i++)ui(n[i],t,e);else if(pa(n)||js(n))n.forEach(i=>{ui(i,t,e)});else if(jf(n)){for(const i in n)ui(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ui(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function no(n,t,e,i){try{return i?n(...i):n()}catch(s){Ma(s,t,e)}}function kn(n,t,e,i){if($t(n)){const s=no(n,t,e,i);return s&&$f(s)&&s.catch(r=>{Ma(r,t,e)}),s}if(Ft(n)){const s=[];for(let r=0;r<n.length;r++)s.push(kn(n[r],t,e,i));return s}}function Ma(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ge;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){Hi(),no(r,null,10,[n,l,c]),Vi();return}}zm(n,e,s,i,o)}function zm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const tn=[];let Vn=-1;const Ks=[];let Ti=null,Vs=0;const vd=Promise.resolve();let Qo=null;function Hm(n){const t=Qo||vd;return n?t.then(this?n.bind(this):n):t}function Vm(n){let t=Vn+1,e=tn.length;for(;t<e;){const i=t+e>>>1,s=tn[i],r=Vr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Kc(n){if(!(n.flags&1)){const t=Vr(n),e=tn[tn.length-1];!e||!(n.flags&2)&&t>=Vr(e)?tn.push(n):tn.splice(Vm(t),0,n),n.flags|=1,xd()}}function xd(){Qo||(Qo=vd.then(yd))}function Gm(n){Ft(n)?Ks.push(...n):Ti&&n.id===-1?Ti.splice(Vs+1,0,n):n.flags&1||(Ks.push(n),n.flags|=1),xd()}function Uu(n,t,e=Vn+1){for(;e<tn.length;e++){const i=tn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;tn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Md(n){if(Ks.length){const t=[...new Set(Ks)].sort((e,i)=>Vr(e)-Vr(i));if(Ks.length=0,Ti){Ti.push(...t);return}for(Ti=t,Vs=0;Vs<Ti.length;Vs++){const e=Ti[Vs];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Ti=null,Vs=0}}const Vr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function yd(n){try{for(Vn=0;Vn<tn.length;Vn++){const t=tn[Vn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),no(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Vn<tn.length;Vn++){const t=tn[Vn];t&&(t.flags&=-2)}Vn=-1,tn.length=0,Md(),Qo=null,(tn.length||Ks.length)&&yd()}}let _n=null,Sd=null;function ta(n){const t=_n;return _n=n,Sd=n&&n.type.__scopeId||null,t}function bd(n,t=_n,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Wu(-1);const r=ta(t);let o;try{o=n(...s)}finally{ta(r),i._d&&Wu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ds(n,t){if(_n===null)return n;const e=Ta(_n),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=ge]=t[s];r&&($t(r)&&(r={mounted:r,updated:r}),r.deep&&ui(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Xi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Hi(),kn(l,e,8,[n.el,a,n,t]),Vi())}}const Wm=Symbol("_vte"),Ed=n=>n.__isTeleport,Ai=Symbol("_leaveCb"),ho=Symbol("_enterCb");function Xm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Zc(()=>{n.isMounted=!0}),ba(()=>{n.isUnmounting=!0}),n}const Sn=[Function,Array],wd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Sn,onEnter:Sn,onAfterEnter:Sn,onEnterCancelled:Sn,onBeforeLeave:Sn,onLeave:Sn,onAfterLeave:Sn,onLeaveCancelled:Sn,onBeforeAppear:Sn,onAppear:Sn,onAfterAppear:Sn,onAppearCancelled:Sn},Td=n=>{const t=n.subTree;return t.component?Td(t.component):t},$m={name:"BaseTransition",props:wd,setup(n,{slots:t}){const e=Vg(),i=Xm();return()=>{const s=t.default&&Rd(t.default(),!0);if(!s||!s.length)return;const r=Ad(s),o=re(n),{mode:a}=o;if(i.isLeaving)return Ha(r);const l=Nu(r);if(!l)return Ha(r);let c=Ol(l,o,i,e,h=>c=h);l.type!==un&&Gr(l,c);let u=e.subTree&&Nu(e.subTree);if(u&&u.type!==un&&!rs(l,u)&&Td(e).type!==un){let h=Ol(u,o,i,e);if(Gr(u,h),a==="out-in"&&l.type!==un)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete h.afterLeave,u=void 0},Ha(r);a==="in-out"&&l.type!==un?h.delayLeave=(f,d,m)=>{const _=Cd(i,u);_[String(u.key)]=u,f[Ai]=()=>{d(),f[Ai]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{m(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Ad(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==un){t=e;break}}return t}const Ym=$m;function Cd(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function Ol(n,t,e,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:g,onAppear:p,onAfterAppear:S,onAppearCancelled:y}=t,x=String(n.key),F=Cd(e,n),R=(E,v)=>{E&&kn(E,i,9,v)},C=(E,v)=>{const A=v[1];R(E,v),Ft(E)?E.every(L=>L.length<=1)&&A():E.length<=1&&A()},I={mode:o,persisted:a,beforeEnter(E){let v=l;if(!e.isMounted)if(r)v=g||l;else return;E[Ai]&&E[Ai](!0);const A=F[x];A&&rs(n,A)&&A.el[Ai]&&A.el[Ai](),R(v,[E])},enter(E){let v=c,A=u,L=h;if(!e.isMounted)if(r)v=p||c,A=S||u,L=y||h;else return;let z=!1;const K=E[ho]=st=>{z||(z=!0,st?R(L,[E]):R(A,[E]),I.delayedLeave&&I.delayedLeave(),E[ho]=void 0)};v?C(v,[E,K]):K()},leave(E,v){const A=String(n.key);if(E[ho]&&E[ho](!0),e.isUnmounting)return v();R(f,[E]);let L=!1;const z=E[Ai]=K=>{L||(L=!0,v(),K?R(_,[E]):R(m,[E]),E[Ai]=void 0,F[A]===n&&delete F[A])};F[A]=n,d?C(d,[E,z]):z()},clone(E){const v=Ol(E,t,e,i,s);return s&&s(v),v}};return I}function Ha(n){if(ya(n))return n=Oi(n),n.children=null,n}function Nu(n){if(!ya(n))return Ed(n.type)&&n.children?Ad(n.children):n;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&$t(e.default))return e.default()}}function Gr(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Gr(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Rd(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:r);o.type===Jt?(o.patchFlag&128&&s++,i=i.concat(Rd(o.children,t,a))):(t||o.type!==un)&&i.push(a!=null?Oi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function sn(n,t){return $t(n)?Be({name:n.name},t,{setup:n}):n}function Pd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ea(n,t,e,i,s=!1){if(Ft(n)){n.forEach((m,_)=>ea(m,t&&(Ft(t)?t[_]:t),e,i,s));return}if(Ur(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ea(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Ta(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===ge?a.refs={}:a.refs,h=a.setupState,f=re(h),d=h===ge?()=>!1:m=>ce(f,m);if(c!=null&&c!==l&&(Ce(c)?(u[c]=null,d(c)&&(h[c]=null)):je(c)&&(c.value=null)),$t(l))no(l,a,12,[o,u]);else{const m=Ce(l),_=je(l);if(m||_){const g=()=>{if(n.f){const p=m?d(l)?h[l]:u[l]:l.value;s?Ft(p)&&Hc(p,r):Ft(p)?p.includes(r)||p.push(r):m?(u[l]=[r],d(l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else m?(u[l]=o,d(l)&&(h[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,pn(g,e)):g()}}}ga().requestIdleCallback;ga().cancelIdleCallback;const Ur=n=>!!n.type.__asyncLoader,ya=n=>n.type.__isKeepAlive;function jm(n,t){Dd(n,"a",t)}function qm(n,t){Dd(n,"da",t)}function Dd(n,t,e=Ye){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Sa(t,i,e),e){let s=e.parent;for(;s&&s.parent;)ya(s.parent.vnode)&&Km(i,t,e,s),s=s.parent}}function Km(n,t,e,i){const s=Sa(t,n,i,!0);Ld(()=>{Hc(i[t],s)},e)}function Sa(n,t,e=Ye,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Hi();const a=io(e),l=kn(t,e,n,o);return a(),Vi(),l});return i?s.unshift(r):s.push(r),r}}const gi=n=>(t,e=Ye)=>{(!Xr||n==="sp")&&Sa(n,(...i)=>t(...i),e)},Zm=gi("bm"),Zc=gi("m"),Jm=gi("bu"),Qm=gi("u"),ba=gi("bum"),Ld=gi("um"),tg=gi("sp"),eg=gi("rtg"),ng=gi("rtc");function ig(n,t=Ye){Sa("ec",n,t)}const sg=Symbol.for("v-ndc");function Ie(n,t,e,i){let s;const r=e,o=Ft(n);if(o||Ce(n)){const a=o&&qs(n);let l=!1;a&&(l=!Tn(n),n=va(n)),s=new Array(n.length);for(let c=0,u=n.length;c<u;c++)s[c]=t(l?$e(n[c]):n[c],c,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(_e(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const kl=n=>n?Qd(n)?Ta(n):kl(n.parent):null,Nr=Be(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>kl(n.parent),$root:n=>kl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ud(n),$forceUpdate:n=>n.f||(n.f=()=>{Kc(n.update)}),$nextTick:n=>n.n||(n.n=Hm.bind(n.proxy)),$watch:n=>Tg.bind(n)}),Va=(n,t)=>n!==ge&&!n.__isScriptSetup&&ce(n,t),rg={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Va(i,t))return o[t]=1,i[t];if(s!==ge&&ce(s,t))return o[t]=2,s[t];if((c=n.propsOptions[0])&&ce(c,t))return o[t]=3,r[t];if(e!==ge&&ce(e,t))return o[t]=4,e[t];Bl&&(o[t]=0)}}const u=Nr[t];let h,f;if(u)return t==="$attrs"&&Xe(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==ge&&ce(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,ce(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Va(s,t)?(s[t]=e,!0):i!==ge&&ce(i,t)?(i[t]=e,!0):ce(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!e[o]||n!==ge&&ce(n,o)||Va(t,o)||(a=r[0])&&ce(a,o)||ce(i,o)||ce(Nr,o)||ce(s.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ce(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Fu(n){return Ft(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Bl=!0;function og(n){const t=Ud(n),e=n.proxy,i=n.ctx;Bl=!1,t.beforeCreate&&Ou(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:m,activated:_,deactivated:g,beforeDestroy:p,beforeUnmount:S,destroyed:y,unmounted:x,render:F,renderTracked:R,renderTriggered:C,errorCaptured:I,serverPrefetch:E,expose:v,inheritAttrs:A,components:L,directives:z,filters:K}=t;if(c&&ag(c,i,null),o)for(const et in o){const X=o[et];$t(X)&&(i[et]=X.bind(e))}if(s){const et=s.call(e,e);_e(et)&&(n.data=xa(et))}if(Bl=!0,r)for(const et in r){const X=r[et],_t=$t(X)?X.bind(e,e):$t(X.get)?X.get.bind(e,e):Yn,Tt=!$t(X)&&$t(X.set)?X.set.bind(e):Yn,Rt=ne({get:_t,set:Tt});Object.defineProperty(i,et,{enumerable:!0,configurable:!0,get:()=>Rt.value,set:kt=>Rt.value=kt})}if(a)for(const et in a)Id(a[et],i,e,et);if(l){const et=$t(l)?l.call(e):l;Reflect.ownKeys(et).forEach(X=>{dg(X,et[X])})}u&&Ou(u,n,"c");function Z(et,X){Ft(X)?X.forEach(_t=>et(_t.bind(e))):X&&et(X.bind(e))}if(Z(Zm,h),Z(Zc,f),Z(Jm,d),Z(Qm,m),Z(jm,_),Z(qm,g),Z(ig,I),Z(ng,R),Z(eg,C),Z(ba,S),Z(Ld,x),Z(tg,E),Ft(v))if(v.length){const et=n.exposed||(n.exposed={});v.forEach(X=>{Object.defineProperty(et,X,{get:()=>e[X],set:_t=>e[X]=_t})})}else n.exposed||(n.exposed={});F&&n.render===Yn&&(n.render=F),A!=null&&(n.inheritAttrs=A),L&&(n.components=L),z&&(n.directives=z),E&&Pd(n)}function ag(n,t,e=Yn){Ft(n)&&(n=zl(n));for(const i in n){const s=n[i];let r;_e(s)?"default"in s?r=Vo(s.from||i,s.default,!0):r=Vo(s.from||i):r=Vo(s),je(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Ou(n,t,e){kn(Ft(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Id(n,t,e,i){let s=i.includes(".")?jd(e,i):()=>e[i];if(Ce(n)){const r=t[n];$t(r)&&Ri(s,r)}else if($t(n))Ri(s,n.bind(e));else if(_e(n))if(Ft(n))n.forEach(r=>Id(r,t,e,i));else{const r=$t(n.handler)?n.handler.bind(e):t[n.handler];$t(r)&&Ri(s,r,n)}}function Ud(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>na(l,c,o,!0)),na(l,t,o)),_e(t)&&r.set(t,l),l}function na(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&na(n,r,e,!0),s&&s.forEach(o=>na(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=lg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const lg={data:ku,props:Bu,emits:Bu,methods:Ar,computed:Ar,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:Ar,directives:Ar,watch:ug,provide:ku,inject:cg};function ku(n,t){return t?n?function(){return Be($t(n)?n.call(this,this):n,$t(t)?t.call(this,this):t)}:t:n}function cg(n,t){return Ar(zl(n),zl(t))}function zl(n){if(Ft(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ke(n,t){return n?[...new Set([].concat(n,t))]:t}function Ar(n,t){return n?Be(Object.create(null),n,t):t}function Bu(n,t){return n?Ft(n)&&Ft(t)?[...new Set([...n,...t])]:Be(Object.create(null),Fu(n),Fu(t??{})):t}function ug(n,t){if(!n)return t;if(!t)return n;const e=Be(Object.create(null),n);for(const i in t)e[i]=Ke(n[i],t[i]);return e}function Nd(){return{app:null,config:{isNativeTag:Qp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hg=0;function fg(n,t){return function(i,s=null){$t(i)||(i=Be({},i)),s!=null&&!_e(s)&&(s=null);const r=Nd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:hg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:qg,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&$t(u.install)?(o.add(u),u.install(c,...h)):$t(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||Ue(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Ta(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(kn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Zs;Zs=c;try{return u()}finally{Zs=h}}};return c}}let Zs=null;function dg(n,t){if(Ye){let e=Ye.provides;const i=Ye.parent&&Ye.parent.provides;i===e&&(e=Ye.provides=Object.create(i)),e[n]=t}}function Vo(n,t,e=!1){const i=Ye||_n;if(i||Zs){const s=Zs?Zs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&$t(t)?t.call(i&&i.proxy):t}}const Fd={},Od=()=>Object.create(Fd),kd=n=>Object.getPrototypeOf(n)===Fd;function pg(n,t,e,i=!1){const s={},r=Od();n.propsDefaults=Object.create(null),Bd(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:Lm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function mg(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=re(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ea(n.emitsOptions,f))continue;const d=t[f];if(l)if(ce(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const m=Fi(f);s[m]=Hl(l,a,m,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{Bd(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!ce(t,h)&&((u=xs(h))===h||!ce(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=Hl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!ce(t,h))&&(delete r[h],c=!0)}c&&ci(n.attrs,"set","")}function Bd(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Dr(l))continue;const c=t[l];let u;s&&ce(s,u=Fi(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Ea(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=re(e),c=a||ge;for(let u=0;u<r.length;u++){const h=r[u];e[h]=Hl(s,l,h,c[h],n,!ce(c,h))}}return o}function Hl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=ce(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$t(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=io(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===xs(e))&&(i=!0))}return i}const gg=new WeakMap;function zd(n,t,e=!1){const i=e?gg:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!$t(n)){const u=h=>{l=!0;const[f,d]=zd(h,t,!0);Be(o,f),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return _e(n)&&i.set(n,Ys),Ys;if(Ft(r))for(let u=0;u<r.length;u++){const h=Fi(r[u]);zu(h)&&(o[h]=ge)}else if(r)for(const u in r){const h=Fi(u);if(zu(h)){const f=r[u],d=o[h]=Ft(f)||$t(f)?{type:f}:Be({},f),m=d.type;let _=!1,g=!0;if(Ft(m))for(let p=0;p<m.length;++p){const S=m[p],y=$t(S)&&S.name;if(y==="Boolean"){_=!0;break}else y==="String"&&(g=!1)}else _=$t(m)&&m.name==="Boolean";d[0]=_,d[1]=g,(_||ce(d,"default"))&&a.push(h)}}const c=[o,a];return _e(n)&&i.set(n,c),c}function zu(n){return n[0]!=="$"&&!Dr(n)}const Hd=n=>n[0]==="_"||n==="$stable",Jc=n=>Ft(n)?n.map(Gn):[Gn(n)],_g=(n,t,e)=>{if(t._n)return t;const i=bd((...s)=>Jc(t(...s)),e);return i._c=!1,i},Vd=(n,t,e)=>{const i=n._ctx;for(const s in n){if(Hd(s))continue;const r=n[s];if($t(r))t[s]=_g(s,r,i);else if(r!=null){const o=Jc(r);t[s]=()=>o}}},Gd=(n,t)=>{const e=Jc(t);n.slots.default=()=>e},Wd=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},vg=(n,t,e)=>{const i=n.slots=Od();if(n.vnode.shapeFlag&32){const s=t._;s?(Wd(i,t,e),e&&Kf(i,"_",s,!0)):Vd(t,i)}else t&&Gd(n,t)},xg=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=ge;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Wd(s,t,e):(r=!t.$stable,Vd(t,s)),o=t}else t&&(Gd(n,t),o={default:1});if(r)for(const a in s)!Hd(a)&&o[a]==null&&delete s[a]},pn=Ig;function Mg(n){return yg(n)}function yg(n,t){const e=ga();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Yn,insertStaticContent:m}=n,_=(P,O,T,at=null,J=null,tt=null,it=void 0,lt=null,Q=!!O.dynamicChildren)=>{if(P===O)return;P&&!rs(P,O)&&(at=Mt(P),kt(P,J,tt,!0),P=null),O.patchFlag===-2&&(Q=!1,O.dynamicChildren=null);const{type:b,ref:M,shapeFlag:U}=O;switch(b){case wa:g(P,O,T,at);break;case un:p(P,O,T,at);break;case Go:P==null&&S(O,T,at,it);break;case Jt:L(P,O,T,at,J,tt,it,lt,Q);break;default:U&1?F(P,O,T,at,J,tt,it,lt,Q):U&6?z(P,O,T,at,J,tt,it,lt,Q):(U&64||U&128)&&b.process(P,O,T,at,J,tt,it,lt,Q,Wt)}M!=null&&J&&ea(M,P&&P.ref,tt,O||P,!O)},g=(P,O,T,at)=>{if(P==null)i(O.el=a(O.children),T,at);else{const J=O.el=P.el;O.children!==P.children&&c(J,O.children)}},p=(P,O,T,at)=>{P==null?i(O.el=l(O.children||""),T,at):O.el=P.el},S=(P,O,T,at)=>{[P.el,P.anchor]=m(P.children,O,T,at,P.el,P.anchor)},y=({el:P,anchor:O},T,at)=>{let J;for(;P&&P!==O;)J=f(P),i(P,T,at),P=J;i(O,T,at)},x=({el:P,anchor:O})=>{let T;for(;P&&P!==O;)T=f(P),s(P),P=T;s(O)},F=(P,O,T,at,J,tt,it,lt,Q)=>{O.type==="svg"?it="svg":O.type==="math"&&(it="mathml"),P==null?R(O,T,at,J,tt,it,lt,Q):E(P,O,J,tt,it,lt,Q)},R=(P,O,T,at,J,tt,it,lt)=>{let Q,b;const{props:M,shapeFlag:U,transition:W,dirs:Y}=P;if(Q=P.el=o(P.type,tt,M&&M.is,M),U&8?u(Q,P.children):U&16&&I(P.children,Q,null,at,J,Ga(P,tt),it,lt),Y&&Xi(P,null,at,"created"),C(Q,P,P.scopeId,it,at),M){for(const gt in M)gt!=="value"&&!Dr(gt)&&r(Q,gt,null,M[gt],tt,at);"value"in M&&r(Q,"value",null,M.value,tt),(b=M.onVnodeBeforeMount)&&zn(b,at,P)}Y&&Xi(P,null,at,"beforeMount");const $=Sg(J,W);$&&W.beforeEnter(Q),i(Q,O,T),((b=M&&M.onVnodeMounted)||$||Y)&&pn(()=>{b&&zn(b,at,P),$&&W.enter(Q),Y&&Xi(P,null,at,"mounted")},J)},C=(P,O,T,at,J)=>{if(T&&d(P,T),at)for(let tt=0;tt<at.length;tt++)d(P,at[tt]);if(J){let tt=J.subTree;if(O===tt||Kd(tt.type)&&(tt.ssContent===O||tt.ssFallback===O)){const it=J.vnode;C(P,it,it.scopeId,it.slotScopeIds,J.parent)}}},I=(P,O,T,at,J,tt,it,lt,Q=0)=>{for(let b=Q;b<P.length;b++){const M=P[b]=lt?Ci(P[b]):Gn(P[b]);_(null,M,O,T,at,J,tt,it,lt)}},E=(P,O,T,at,J,tt,it)=>{const lt=O.el=P.el;let{patchFlag:Q,dynamicChildren:b,dirs:M}=O;Q|=P.patchFlag&16;const U=P.props||ge,W=O.props||ge;let Y;if(T&&$i(T,!1),(Y=W.onVnodeBeforeUpdate)&&zn(Y,T,O,P),M&&Xi(O,P,T,"beforeUpdate"),T&&$i(T,!0),(U.innerHTML&&W.innerHTML==null||U.textContent&&W.textContent==null)&&u(lt,""),b?v(P.dynamicChildren,b,lt,T,at,Ga(O,J),tt):it||X(P,O,lt,null,T,at,Ga(O,J),tt,!1),Q>0){if(Q&16)A(lt,U,W,T,J);else if(Q&2&&U.class!==W.class&&r(lt,"class",null,W.class,J),Q&4&&r(lt,"style",U.style,W.style,J),Q&8){const $=O.dynamicProps;for(let gt=0;gt<$.length;gt++){const ct=$[gt],vt=U[ct],Bt=W[ct];(Bt!==vt||ct==="value")&&r(lt,ct,vt,Bt,J,T)}}Q&1&&P.children!==O.children&&u(lt,O.children)}else!it&&b==null&&A(lt,U,W,T,J);((Y=W.onVnodeUpdated)||M)&&pn(()=>{Y&&zn(Y,T,O,P),M&&Xi(O,P,T,"updated")},at)},v=(P,O,T,at,J,tt,it)=>{for(let lt=0;lt<O.length;lt++){const Q=P[lt],b=O[lt],M=Q.el&&(Q.type===Jt||!rs(Q,b)||Q.shapeFlag&70)?h(Q.el):T;_(Q,b,M,null,at,J,tt,it,!0)}},A=(P,O,T,at,J)=>{if(O!==T){if(O!==ge)for(const tt in O)!Dr(tt)&&!(tt in T)&&r(P,tt,O[tt],null,J,at);for(const tt in T){if(Dr(tt))continue;const it=T[tt],lt=O[tt];it!==lt&&tt!=="value"&&r(P,tt,lt,it,J,at)}"value"in T&&r(P,"value",O.value,T.value,J)}},L=(P,O,T,at,J,tt,it,lt,Q)=>{const b=O.el=P?P.el:a(""),M=O.anchor=P?P.anchor:a("");let{patchFlag:U,dynamicChildren:W,slotScopeIds:Y}=O;Y&&(lt=lt?lt.concat(Y):Y),P==null?(i(b,T,at),i(M,T,at),I(O.children||[],T,M,J,tt,it,lt,Q)):U>0&&U&64&&W&&P.dynamicChildren?(v(P.dynamicChildren,W,T,J,tt,it,lt),(O.key!=null||J&&O===J.subTree)&&Xd(P,O,!0)):X(P,O,T,M,J,tt,it,lt,Q)},z=(P,O,T,at,J,tt,it,lt,Q)=>{O.slotScopeIds=lt,P==null?O.shapeFlag&512?J.ctx.activate(O,T,at,it,Q):K(O,T,at,J,tt,it,Q):st(P,O,Q)},K=(P,O,T,at,J,tt,it)=>{const lt=P.component=Hg(P,at,J);if(ya(P)&&(lt.ctx.renderer=Wt),Gg(lt,!1,it),lt.asyncDep){if(J&&J.registerDep(lt,Z,it),!P.el){const Q=lt.subTree=Ue(un);p(null,Q,O,T)}}else Z(lt,P,O,T,J,tt,it)},st=(P,O,T)=>{const at=O.component=P.component;if(Dg(P,O,T))if(at.asyncDep&&!at.asyncResolved){et(at,O,T);return}else at.next=O,at.update();else O.el=P.el,at.vnode=O},Z=(P,O,T,at,J,tt,it)=>{const lt=()=>{if(P.isMounted){let{next:U,bu:W,u:Y,parent:$,vnode:gt}=P;{const St=$d(P);if(St){U&&(U.el=gt.el,et(P,U,it)),St.asyncDep.then(()=>{P.isUnmounted||lt()});return}}let ct=U,vt;$i(P,!1),U?(U.el=gt.el,et(P,U,it)):U=gt,W&&Ho(W),(vt=U.props&&U.props.onVnodeBeforeUpdate)&&zn(vt,$,U,gt),$i(P,!0);const Bt=Vu(P),ht=P.subTree;P.subTree=Bt,_(ht,Bt,h(ht.el),Mt(ht),P,J,tt),U.el=Bt.el,ct===null&&Lg(P,Bt.el),Y&&pn(Y,J),(vt=U.props&&U.props.onVnodeUpdated)&&pn(()=>zn(vt,$,U,gt),J)}else{let U;const{el:W,props:Y}=O,{bm:$,m:gt,parent:ct,root:vt,type:Bt}=P,ht=Ur(O);$i(P,!1),$&&Ho($),!ht&&(U=Y&&Y.onVnodeBeforeMount)&&zn(U,ct,O),$i(P,!0);{vt.ce&&vt.ce._injectChildStyle(Bt);const St=P.subTree=Vu(P);_(null,St,T,at,P,J,tt),O.el=St.el}if(gt&&pn(gt,J),!ht&&(U=Y&&Y.onVnodeMounted)){const St=O;pn(()=>zn(U,ct,St),J)}(O.shapeFlag&256||ct&&Ur(ct.vnode)&&ct.vnode.shapeFlag&256)&&P.a&&pn(P.a,J),P.isMounted=!0,O=T=at=null}};P.scope.on();const Q=P.effect=new ed(lt);P.scope.off();const b=P.update=Q.run.bind(Q),M=P.job=Q.runIfDirty.bind(Q);M.i=P,M.id=P.uid,Q.scheduler=()=>Kc(M),$i(P,!0),b()},et=(P,O,T)=>{O.component=P;const at=P.vnode.props;P.vnode=O,P.next=null,mg(P,O.props,at,T),xg(P,O.children,T),Hi(),Uu(P),Vi()},X=(P,O,T,at,J,tt,it,lt,Q=!1)=>{const b=P&&P.children,M=P?P.shapeFlag:0,U=O.children,{patchFlag:W,shapeFlag:Y}=O;if(W>0){if(W&128){Tt(b,U,T,at,J,tt,it,lt,Q);return}else if(W&256){_t(b,U,T,at,J,tt,it,lt,Q);return}}Y&8?(M&16&&Ct(b,J,tt),U!==b&&u(T,U)):M&16?Y&16?Tt(b,U,T,at,J,tt,it,lt,Q):Ct(b,J,tt,!0):(M&8&&u(T,""),Y&16&&I(U,T,at,J,tt,it,lt,Q))},_t=(P,O,T,at,J,tt,it,lt,Q)=>{P=P||Ys,O=O||Ys;const b=P.length,M=O.length,U=Math.min(b,M);let W;for(W=0;W<U;W++){const Y=O[W]=Q?Ci(O[W]):Gn(O[W]);_(P[W],Y,T,null,J,tt,it,lt,Q)}b>M?Ct(P,J,tt,!0,!1,U):I(O,T,at,J,tt,it,lt,Q,U)},Tt=(P,O,T,at,J,tt,it,lt,Q)=>{let b=0;const M=O.length;let U=P.length-1,W=M-1;for(;b<=U&&b<=W;){const Y=P[b],$=O[b]=Q?Ci(O[b]):Gn(O[b]);if(rs(Y,$))_(Y,$,T,null,J,tt,it,lt,Q);else break;b++}for(;b<=U&&b<=W;){const Y=P[U],$=O[W]=Q?Ci(O[W]):Gn(O[W]);if(rs(Y,$))_(Y,$,T,null,J,tt,it,lt,Q);else break;U--,W--}if(b>U){if(b<=W){const Y=W+1,$=Y<M?O[Y].el:at;for(;b<=W;)_(null,O[b]=Q?Ci(O[b]):Gn(O[b]),T,$,J,tt,it,lt,Q),b++}}else if(b>W)for(;b<=U;)kt(P[b],J,tt,!0),b++;else{const Y=b,$=b,gt=new Map;for(b=$;b<=W;b++){const xt=O[b]=Q?Ci(O[b]):Gn(O[b]);xt.key!=null&&gt.set(xt.key,b)}let ct,vt=0;const Bt=W-$+1;let ht=!1,St=0;const Ut=new Array(Bt);for(b=0;b<Bt;b++)Ut[b]=0;for(b=Y;b<=U;b++){const xt=P[b];if(vt>=Bt){kt(xt,J,tt,!0);continue}let Vt;if(xt.key!=null)Vt=gt.get(xt.key);else for(ct=$;ct<=W;ct++)if(Ut[ct-$]===0&&rs(xt,O[ct])){Vt=ct;break}Vt===void 0?kt(xt,J,tt,!0):(Ut[Vt-$]=b+1,Vt>=St?St=Vt:ht=!0,_(xt,O[Vt],T,null,J,tt,it,lt,Q),vt++)}const zt=ht?bg(Ut):Ys;for(ct=zt.length-1,b=Bt-1;b>=0;b--){const xt=$+b,Vt=O[xt],Xt=xt+1<M?O[xt+1].el:at;Ut[b]===0?_(null,Vt,T,Xt,J,tt,it,lt,Q):ht&&(ct<0||b!==zt[ct]?Rt(Vt,T,Xt,2):ct--)}}},Rt=(P,O,T,at,J=null)=>{const{el:tt,type:it,transition:lt,children:Q,shapeFlag:b}=P;if(b&6){Rt(P.component.subTree,O,T,at);return}if(b&128){P.suspense.move(O,T,at);return}if(b&64){it.move(P,O,T,Wt);return}if(it===Jt){i(tt,O,T);for(let U=0;U<Q.length;U++)Rt(Q[U],O,T,at);i(P.anchor,O,T);return}if(it===Go){y(P,O,T);return}if(at!==2&&b&1&&lt)if(at===0)lt.beforeEnter(tt),i(tt,O,T),pn(()=>lt.enter(tt),J);else{const{leave:U,delayLeave:W,afterLeave:Y}=lt,$=()=>i(tt,O,T),gt=()=>{U(tt,()=>{$(),Y&&Y()})};W?W(tt,$,gt):gt()}else i(tt,O,T)},kt=(P,O,T,at=!1,J=!1)=>{const{type:tt,props:it,ref:lt,children:Q,dynamicChildren:b,shapeFlag:M,patchFlag:U,dirs:W,cacheIndex:Y}=P;if(U===-2&&(J=!1),lt!=null&&ea(lt,null,T,P,!0),Y!=null&&(O.renderCache[Y]=void 0),M&256){O.ctx.deactivate(P);return}const $=M&1&&W,gt=!Ur(P);let ct;if(gt&&(ct=it&&it.onVnodeBeforeUnmount)&&zn(ct,O,P),M&6)pt(P.component,T,at);else{if(M&128){P.suspense.unmount(T,at);return}$&&Xi(P,null,O,"beforeUnmount"),M&64?P.type.remove(P,O,T,Wt,at):b&&!b.hasOnce&&(tt!==Jt||U>0&&U&64)?Ct(b,O,T,!1,!0):(tt===Jt&&U&384||!J&&M&16)&&Ct(Q,O,T),at&&oe(P)}(gt&&(ct=it&&it.onVnodeUnmounted)||$)&&pn(()=>{ct&&zn(ct,O,P),$&&Xi(P,null,O,"unmounted")},T)},oe=P=>{const{type:O,el:T,anchor:at,transition:J}=P;if(O===Jt){rt(T,at);return}if(O===Go){x(P);return}const tt=()=>{s(T),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(P.shapeFlag&1&&J&&!J.persisted){const{leave:it,delayLeave:lt}=J,Q=()=>it(T,tt);lt?lt(P.el,tt,Q):Q()}else tt()},rt=(P,O)=>{let T;for(;P!==O;)T=f(P),s(P),P=T;s(O)},pt=(P,O,T)=>{const{bum:at,scope:J,job:tt,subTree:it,um:lt,m:Q,a:b}=P;Hu(Q),Hu(b),at&&Ho(at),J.stop(),tt&&(tt.flags|=8,kt(it,P,O,T)),lt&&pn(lt,O),pn(()=>{P.isUnmounted=!0},O),O&&O.pendingBranch&&!O.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===O.pendingId&&(O.deps--,O.deps===0&&O.resolve())},Ct=(P,O,T,at=!1,J=!1,tt=0)=>{for(let it=tt;it<P.length;it++)kt(P[it],O,T,at,J)},Mt=P=>{if(P.shapeFlag&6)return Mt(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const O=f(P.anchor||P.el),T=O&&O[Wm];return T?f(T):O};let Ot=!1;const Ht=(P,O,T)=>{P==null?O._vnode&&kt(O._vnode,null,null,!0):_(O._vnode||null,P,O,null,null,null,T),O._vnode=P,Ot||(Ot=!0,Uu(),Md(),Ot=!1)},Wt={p:_,um:kt,m:Rt,r:oe,mt:K,mc:I,pc:X,pbc:v,n:Mt,o:n};return{render:Ht,hydrate:void 0,createApp:fg(Ht)}}function Ga({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function $i({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Sg(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Xd(n,t,e=!1){const i=n.children,s=t.children;if(Ft(i)&&Ft(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ci(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Xd(o,a)),a.type===wa&&(a.el=o.el)}}function bg(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function $d(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:$d(t)}function Hu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const Eg=Symbol.for("v-scx"),wg=()=>Vo(Eg);function Ri(n,t,e){return Yd(n,t,e)}function Yd(n,t,e=ge){const{immediate:i,deep:s,flush:r,once:o}=e,a=Be({},e),l=t&&i||!t&&r!=="post";let c;if(Xr){if(r==="sync"){const d=wg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Yn,d.resume=Yn,d.pause=Yn,d}}const u=Ye;a.call=(d,m,_)=>kn(d,u,m,_);let h=!1;r==="post"?a.scheduler=d=>{pn(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,m)=>{m?d():Kc(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=Bm(n,t,a);return Xr&&(c?c.push(f):l&&f()),f}function Tg(n,t,e){const i=this.proxy,s=Ce(n)?n.includes(".")?jd(i,n):()=>i[n]:n.bind(i,i);let r;$t(t)?r=t:(r=t.handler,e=t);const o=io(this),a=Yd(s,r.bind(i),e);return o(),a}function jd(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Ag=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Fi(t)}Modifiers`]||n[`${xs(t)}Modifiers`];function Cg(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ge;let s=e;const r=t.startsWith("update:"),o=r&&Ag(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>Ce(u)?u.trim():u)),o.number&&(s=e.map(Dl)));let a,l=i[a=Fa(t)]||i[a=Fa(Fi(t))];!l&&r&&(l=i[a=Fa(xs(t))]),l&&kn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,kn(c,n,6,s)}}function qd(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!$t(n)){const l=c=>{const u=qd(c,t,!0);u&&(a=!0,Be(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(_e(n)&&i.set(n,null),null):(Ft(r)?r.forEach(l=>o[l]=null):Be(o,r),_e(n)&&i.set(n,o),o)}function Ea(n,t){return!n||!da(t)?!1:(t=t.slice(2).replace(/Once$/,""),ce(n,t[0].toLowerCase()+t.slice(1))||ce(n,xs(t))||ce(n,t))}function Vu(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:m,inheritAttrs:_}=n,g=ta(n);let p,S;try{if(e.shapeFlag&4){const x=s||i,F=x;p=Gn(c.call(F,x,u,h,d,f,m)),S=a}else{const x=t;p=Gn(x.length>1?x(h,{attrs:a,slots:o,emit:l}):x(h,null)),S=t.props?a:Rg(a)}}catch(x){Fr.length=0,Ma(x,n,1),p=Ue(un)}let y=p;if(S&&_!==!1){const x=Object.keys(S),{shapeFlag:F}=y;x.length&&F&7&&(r&&x.some(zc)&&(S=Pg(S,r)),y=Oi(y,S,!1,!0))}return e.dirs&&(y=Oi(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(e.dirs):e.dirs),e.transition&&Gr(y,e.transition),p=y,ta(g),p}const Rg=n=>{let t;for(const e in n)(e==="class"||e==="style"||da(e))&&((t||(t={}))[e]=n[e]);return t},Pg=(n,t)=>{const e={};for(const i in n)(!zc(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Dg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Gu(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Ea(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Gu(i,o,c):!0:!!o;return!1}function Gu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==n[r]&&!Ea(e,r))return!0}return!1}function Lg({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const Kd=n=>n.__isSuspense;function Ig(n,t){t&&t.pendingBranch?Ft(n)?t.effects.push(...n):t.effects.push(n):Gm(n)}const Jt=Symbol.for("v-fgt"),wa=Symbol.for("v-txt"),un=Symbol.for("v-cmt"),Go=Symbol.for("v-stc"),Fr=[];let vn=null;function ut(n=!1){Fr.push(vn=n?null:[])}function Ug(){Fr.pop(),vn=Fr[Fr.length-1]||null}let Wr=1;function Wu(n,t=!1){Wr+=n,n<0&&vn&&t&&(vn.hasOnce=!0)}function Zd(n){return n.dynamicChildren=Wr>0?vn||Ys:null,Ug(),Wr>0&&vn&&vn.push(n),n}function dt(n,t,e,i,s,r){return Zd(D(n,t,e,i,s,r,!0))}function Ln(n,t,e,i,s){return Zd(Ue(n,t,e,i,s,!0))}function ia(n){return n?n.__v_isVNode===!0:!1}function rs(n,t){return n.type===t.type&&n.key===t.key}const Jd=({key:n})=>n??null,Wo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Ce(n)||je(n)||$t(n)?{i:_n,r:n,k:t,f:!!e}:n:null);function D(n,t=null,e=null,i=0,s=null,r=n===Jt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Jd(t),ref:t&&Wo(t),scopeId:Sd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_n};return a?(Qc(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Ce(e)?8:16),Wr>0&&!o&&vn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&vn.push(l),l}const Ue=Ng;function Ng(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===sg)&&(n=un),ia(n)){const a=Oi(n,t,!0);return e&&Qc(a,e),Wr>0&&!r&&vn&&(a.shapeFlag&6?vn[vn.indexOf(n)]=a:vn.push(a)),a.patchFlag=-2,a}if(Yg(n)&&(n=n.__vccOpts),t){t=Fg(t);let{class:a,style:l}=t;a&&!Ce(a)&&(t.class=xn(a)),_e(l)&&(qc(l)&&!Ft(l)&&(l=Be({},l)),t.style=Le(l))}const o=Ce(n)?1:Kd(n)?128:Ed(n)?64:_e(n)?4:$t(n)?2:0;return D(n,t,e,i,s,o,r,!0)}function Fg(n){return n?qc(n)||kd(n)?Be({},n):n:null}function Oi(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?kg(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Jd(c),ref:t&&t.ref?e&&r?Ft(r)?r.concat(Wo(t)):[r,Wo(t)]:Wo(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Jt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Oi(n.ssContent),ssFallback:n.ssFallback&&Oi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Gr(u,l.clone(u)),u}function ee(n=" ",t=0){return Ue(wa,null,n,t)}function Og(n,t){const e=Ue(Go,null,n);return e.staticCount=t,e}function pe(n="",t=!1){return t?(ut(),Ln(un,null,n)):Ue(un,null,n)}function Gn(n){return n==null||typeof n=="boolean"?Ue(un):Ft(n)?Ue(Jt,null,n.slice()):ia(n)?Ci(n):Ue(wa,null,String(n))}function Ci(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Oi(n)}function Qc(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ft(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Qc(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!kd(t)?t._ctx=_n:s===3&&_n&&(_n.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else $t(t)?(t={default:t,_ctx:_n},e=32):(t=String(t),i&64?(e=16,t=[ee(t)]):e=8);n.children=t,n.shapeFlag|=e}function kg(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=xn([t.class,i.class]));else if(s==="style")t.style=Le([t.style,i.style]);else if(da(s)){const r=t[s],o=i[s];o&&r!==o&&!(Ft(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function zn(n,t,e,i=null){kn(n,t,7,[e,i])}const Bg=Nd();let zg=0;function Hg(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Bg,r={uid:zg++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new fm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zd(i,s),emitsOptions:qd(i,s),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:i.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Cg.bind(null,r),n.ce&&n.ce(r),r}let Ye=null;const Vg=()=>Ye||_n;let sa,Vl;{const n=ga(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};sa=t("__VUE_INSTANCE_SETTERS__",e=>Ye=e),Vl=t("__VUE_SSR_SETTERS__",e=>Xr=e)}const io=n=>{const t=Ye;return sa(n),n.scope.on(),()=>{n.scope.off(),sa(t)}},Xu=()=>{Ye&&Ye.scope.off(),sa(null)};function Qd(n){return n.vnode.shapeFlag&4}let Xr=!1;function Gg(n,t=!1,e=!1){t&&Vl(t);const{props:i,children:s}=n.vnode,r=Qd(n);pg(n,i,r,t),vg(n,s,e);const o=r?Wg(n,t):void 0;return t&&Vl(!1),o}function Wg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,rg);const{setup:i}=e;if(i){Hi();const s=n.setupContext=i.length>1?$g(n):null,r=io(n),o=no(i,n,0,[n.props,s]),a=$f(o);if(Vi(),r(),(a||n.sp)&&!Ur(n)&&Pd(n),a){if(o.then(Xu,Xu),t)return o.then(l=>{$u(n,l)}).catch(l=>{Ma(l,n,0)});n.asyncDep=o}else $u(n,o)}else tp(n)}function $u(n,t,e){$t(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:_e(t)&&(n.setupState=_d(t)),tp(n)}function tp(n,t,e){const i=n.type;n.render||(n.render=i.render||Yn);{const s=io(n);Hi();try{og(n)}finally{Vi(),s()}}}const Xg={get(n,t){return Xe(n,"get",""),n[t]}};function $g(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Xg),slots:n.slots,emit:n.emit,expose:t}}function Ta(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(_d(Im(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Nr)return Nr[e](n)},has(t,e){return e in t||e in Nr}})):n.proxy}function Yg(n){return $t(n)&&"__vccOpts"in n}const ne=(n,t)=>Om(n,t,Xr);function jg(n,t,e){const i=arguments.length;return i===2?_e(t)&&!Ft(t)?ia(t)?Ue(n,null,[t]):Ue(n,t):Ue(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&ia(e)&&(e=[e]),Ue(n,t,e))}const qg="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gl;const Yu=typeof window<"u"&&window.trustedTypes;if(Yu)try{Gl=Yu.createPolicy("vue",{createHTML:n=>n})}catch{}const ep=Gl?n=>Gl.createHTML(n):n=>n,Kg="http://www.w3.org/2000/svg",Zg="http://www.w3.org/1998/Math/MathML",oi=typeof document<"u"?document:null,ju=oi&&oi.createElement("template"),Jg={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?oi.createElementNS(Kg,n):t==="mathml"?oi.createElementNS(Zg,n):e?oi.createElement(n,{is:e}):oi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>oi.createTextNode(n),createComment:n=>oi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>oi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{ju.innerHTML=ep(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=ju.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},xi="transition",vr="animation",$r=Symbol("_vtc"),np={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Qg=Be({},wd,np),t_=n=>(n.displayName="Transition",n.props=Qg,n),e_=t_((n,{slots:t})=>jg(Ym,n_(n),t)),Yi=(n,t=[])=>{Ft(n)?n.forEach(e=>e(...t)):n&&n(...t)},qu=n=>n?Ft(n)?n.some(t=>t.length>1):n.length>1:!1;function n_(n){const t={};for(const L in n)L in np||(t[L]=n[L]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${e}-leave-from`,leaveActiveClass:f=`${e}-leave-active`,leaveToClass:d=`${e}-leave-to`}=n,m=i_(s),_=m&&m[0],g=m&&m[1],{onBeforeEnter:p,onEnter:S,onEnterCancelled:y,onLeave:x,onLeaveCancelled:F,onBeforeAppear:R=p,onAppear:C=S,onAppearCancelled:I=y}=t,E=(L,z,K,st)=>{L._enterCancelled=st,ji(L,z?u:a),ji(L,z?c:o),K&&K()},v=(L,z)=>{L._isLeaving=!1,ji(L,h),ji(L,d),ji(L,f),z&&z()},A=L=>(z,K)=>{const st=L?C:S,Z=()=>E(z,L,K);Yi(st,[z,Z]),Ku(()=>{ji(z,L?l:r),Qn(z,L?u:a),qu(st)||Zu(z,i,_,Z)})};return Be(t,{onBeforeEnter(L){Yi(p,[L]),Qn(L,r),Qn(L,o)},onBeforeAppear(L){Yi(R,[L]),Qn(L,l),Qn(L,c)},onEnter:A(!1),onAppear:A(!0),onLeave(L,z){L._isLeaving=!0;const K=()=>v(L,z);Qn(L,h),L._enterCancelled?(Qn(L,f),th()):(th(),Qn(L,f)),Ku(()=>{L._isLeaving&&(ji(L,h),Qn(L,d),qu(x)||Zu(L,i,g,K))}),Yi(x,[L,K])},onEnterCancelled(L){E(L,!1,void 0,!0),Yi(y,[L])},onAppearCancelled(L){E(L,!0,void 0,!0),Yi(I,[L])},onLeaveCancelled(L){v(L),Yi(F,[L])}})}function i_(n){if(n==null)return null;if(_e(n))return[Wa(n.enter),Wa(n.leave)];{const t=Wa(n);return[t,t]}}function Wa(n){return sm(n)}function Qn(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[$r]||(n[$r]=new Set)).add(t)}function ji(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[$r];e&&(e.delete(t),e.size||(n[$r]=void 0))}function Ku(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let s_=0;function Zu(n,t,e,i){const s=n._endId=++s_,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:o,timeout:a,propCount:l}=r_(n,t);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,f),r()},f=d=>{d.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,f)}function r_(n,t){const e=window.getComputedStyle(n),i=m=>(e[m]||"").split(", "),s=i(`${xi}Delay`),r=i(`${xi}Duration`),o=Ju(s,r),a=i(`${vr}Delay`),l=i(`${vr}Duration`),c=Ju(a,l);let u=null,h=0,f=0;t===xi?o>0&&(u=xi,h=o,f=r.length):t===vr?c>0&&(u=vr,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?xi:vr:null,f=u?u===xi?r.length:l.length:0);const d=u===xi&&/\b(transform|all)(,|$)/.test(i(`${xi}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function Ju(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>Qu(e)+Qu(n[i])))}function Qu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function th(){return document.body.offsetHeight}function o_(n,t,e){const i=n[$r];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const eh=Symbol("_vod"),a_=Symbol("_vsh"),l_=Symbol(""),c_=/(^|;)\s*display\s*:/;function u_(n,t,e){const i=n.style,s=Ce(e);let r=!1;if(e&&!s){if(t)if(Ce(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Xo(i,a,"")}else for(const o in t)e[o]==null&&Xo(i,o,"");for(const o in e)o==="display"&&(r=!0),Xo(i,o,e[o])}else if(s){if(t!==e){const o=i[l_];o&&(e+=";"+o),i.cssText=e,r=c_.test(e)}}else t&&n.removeAttribute("style");eh in n&&(n[eh]=r?i.display:"",n[a_]&&(i.display="none"))}const nh=/\s*!important$/;function Xo(n,t,e){if(Ft(e))e.forEach(i=>Xo(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=h_(n,t);nh.test(e)?n.setProperty(xs(i),e.replace(nh,""),"important"):n[i]=e}}const ih=["Webkit","Moz","ms"],Xa={};function h_(n,t){const e=Xa[t];if(e)return e;let i=Fi(t);if(i!=="filter"&&i in n)return Xa[t]=i;i=qf(i);for(let s=0;s<ih.length;s++){const r=ih[s]+i;if(r in n)return Xa[t]=r}return t}const sh="http://www.w3.org/1999/xlink";function rh(n,t,e,i,s,r=um(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(sh,t.slice(6,t.length)):n.setAttributeNS(sh,t,e):e==null||r&&!Zf(e)?n.removeAttribute(t):n.setAttribute(t,r?"":jn(e)?String(e):e)}function oh(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?ep(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Zf(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function os(n,t,e,i){n.addEventListener(t,e,i)}function f_(n,t,e,i){n.removeEventListener(t,e,i)}const ah=Symbol("_vei");function d_(n,t,e,i,s=null){const r=n[ah]||(n[ah]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=p_(t);if(i){const c=r[t]=__(i,s);os(n,a,c,l)}else o&&(f_(n,a,o,l),r[t]=void 0)}}const lh=/(?:Once|Passive|Capture)$/;function p_(n){let t;if(lh.test(n)){t={};let i;for(;i=n.match(lh);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):xs(n.slice(2)),t]}let $a=0;const m_=Promise.resolve(),g_=()=>$a||(m_.then(()=>$a=0),$a=Date.now());function __(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;kn(v_(i,e.value),t,5,[i])};return e.value=n,e.attached=g_(),e}function v_(n,t){if(Ft(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const ch=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,x_=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?o_(n,i,o):t==="style"?u_(n,e,i):da(t)?zc(t)||d_(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):M_(n,t,i,o))?(oh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&rh(n,t,i,o,r,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!Ce(i))?oh(n,Fi(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),rh(n,t,i,o))};function M_(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&ch(t)&&$t(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ch(t)&&Ce(e)?!1:t in n}const ra=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Ft(t)?e=>Ho(t,e):t};function y_(n){n.target.composing=!0}function uh(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Js=Symbol("_assign"),oa={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n[Js]=ra(s);const r=i||s.props&&s.props.type==="number";os(n,t?"change":"input",o=>{if(o.target.composing)return;let a=n.value;e&&(a=a.trim()),r&&(a=Dl(a)),n[Js](a)}),e&&os(n,"change",()=>{n.value=n.value.trim()}),t||(os(n,"compositionstart",y_),os(n,"compositionend",uh),os(n,"change",uh))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Js]=ra(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Dl(n.value):n.value,l=t??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l))}},Wl={deep:!0,created(n,t,e){n[Js]=ra(e),os(n,"change",()=>{const i=n._modelValue,s=S_(n),r=n.checked,o=n[Js];if(Ft(i)){const a=Jf(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(pa(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(ip(n,r))})},mounted:hh,beforeUpdate(n,t,e){n[Js]=ra(e),hh(n,t,e)}};function hh(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if(Ft(t))s=Jf(t,i.props.value)>-1;else if(pa(t))s=t.has(i.props.value);else{if(t===e)return;s=_a(t,ip(n,!0))}n.checked!==s&&(n.checked=s)}function S_(n){return"_value"in n?n._value:n.value}function ip(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const b_=["ctrl","shift","alt","meta"],E_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>b_.some(e=>n[`${e}Key`]&&!t.includes(e))},Xl=(n,t)=>{const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=E_[t[o]];if(a&&a(s,t))return}return n(s,...r)})},w_=Be({patchProp:x_},Jg);let fh;function T_(){return fh||(fh=Mg(w_))}const A_=(...n)=>{const t=T_().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=R_(i);if(!s)return;const r=t._component;!$t(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,C_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function C_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function R_(n){return Ce(n)?document.querySelector(n):n}const sp="/nrg-bi/api";function rp(n){return n.startsWith("/api/")?`${sp}${n.slice(4)}`:n}async function Es(n){const t=await fetch(`${sp}${n}`,{headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`API ${n}: ${t.status}`);return await t.json()}const Ya=new Map,ws={projects:()=>Es("/projects/index"),project:n=>Es(`/projects/${n}`),units:n=>Es(`/projects/${n}/units`),context:n=>Es(`/projects/${n}/context`),block:(n,t)=>Es(`/projects/${n}/blocks/${t}`),floorType(n,t){const e=`${n}/${t}`;return Ya.has(e)||Ya.set(e,Es(`/projects/${n}/floor-types/${t}`)),Ya.get(e)}},Or={available:"В продаже",booked:"Бронь",sold:"Продана",unavailable:"Снята с продажи"},wn={available:"#3ddc97",booked:"#f5b841",sold:"#e5484d",unavailable:"#6b7280"};function Aa(n,t){return!(t.onlyAvailable&&n.status!=="available"||t.rooms.length&&!t.rooms.some(e=>e>=5?n.rooms>=5:n.rooms===e))}function P_(n){return n===1?"1-комнатная":`${n}-комнатная`}function D_(n,t,e){let i=1/0;for(let s=0,r=e.length-1;s<e.length;r=s++){const[o,a]=e[r],[l,c]=e[s],u=l-o,h=c-a,f=Math.max(0,Math.min(1,((n-o)*u+(t-a)*h)/(u*u+h*h||1)));i=Math.min(i,Math.hypot(n-(o+f*u),t-(a+f*h)))}return i}const N=xa({loading:!0,progress:0,error:"",mode:"building",floor:null,unitId:null,hoverFloor:null,hoverUnit:null,tip:{x:0,y:0},filter:{rooms:[],onlyAvailable:!1},sun:{day:U_(),hour:15},xrSupported:!1,xrActive:!1,touched:!1,showData:!1,showLead:!1,sunMinutes:null,blockId:null,hoverBlock:null,blockFloor:1,viewSide:0,blockSun:null,places:{on:!0,all:!1,cats:["metro","shop","bank","food","edu","health","sport","auto"]}}),te={project:Wi(null),units:Wi([]),context:Wi(null),types:Wi(new Map),observedAt:Wi(""),projects:Wi([]),blockLayouts:Wi(new Map)},ln=ne(()=>te.project.value?.building.mode==="massing"),Yr=ne(()=>ln.value&&N.blockId?te.blockLayouts.value.get(N.blockId)??null:null),Ii=ne(()=>Yr.value?.floors??(ln.value?[]:te.project.value?.building.floors??[])),ja=ne(()=>Yr.value?.azimuth_deg??te.project.value?.building.azimuth_deg??0);function tu(n){return Yr.value?Yr.value.floor_types[n]:te.types.value.get(n)}const hi=ne(()=>ln.value?te.units.value.filter(n=>n.block===N.blockId):te.units.value),L_=ne(()=>te.units.value.some(n=>n.test)),De=ne(()=>te.project.value?.building.blocks?.find(n=>n.id===N.blockId)??null),$l=ne(()=>{const n=Ii.value;if(!n.length)return[];const t=new Map;for(const e of hi.value)t.has(e.floor)||t.set(e.floor,[]),t.get(e.floor).push(e);return[...n].reverse().map(e=>{const i=(t.get(e.n)??[]).sort((s,r)=>s.number-r.number);return{n:e.n,residential:i.length>0,total:i.length,available:i.filter(s=>s.status==="available").length,matching:i.filter(s=>Aa(s,N.filter)).length,statuses:i.map(s=>s.status)}})}),cn=ne(()=>hi.value.find(n=>n.id===N.unitId)??null),I_=ne(()=>hi.value.find(n=>n.id===N.hoverUnit)??null),qi=ne(()=>{const n=te.units.value,t={available:0,booked:0,sold:0,unavailable:0};for(const e of n)t[e.status]++;return{total:n.length,by:t,matching:n.filter(e=>Aa(e,N.filter)).length}});function U_(){const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}const op=Math.PI/180;function aa(n,t,e){const i=e*op;return[n*Math.cos(i)+t*Math.sin(i),-n*Math.sin(i)+t*Math.cos(i)]}function N_(n,t,e){const[i,s]=aa(n,t,e);return(Math.atan2(i,s)/op+360)%360}const F_=["север","северо-восток","восток","юго-восток","юг","юго-запад","запад","северо-запад"],O_=["С","СВ","В","ЮВ","Ю","ЮЗ","З","СЗ"];function dh(n,t=!1){const e=Math.round((n%360+360)%360/45)%8;return t?O_[e]:F_[e]}function ph(n,t){const e=((n-t)%360+540)%360-180;return Math.abs(e)}function k_(n,t,e){const i=[];for(const s of n.outline)for(const r of z_(s,1.5)){const[o,a,l,c,u,h]=r,f=(o+l)/2,d=(a+c)/2;D_(f-u*.3,d-h*.3,t)>.8&&!B_(f-u*.6,d-h*.6,t)||i.push({mid:[f,d],normal:[u,h],azimuth:N_(u,h,e),length:Math.hypot(l-o,c-a)})}return i}function B_(n,t,e){let i=!1;for(let s=0,r=e.length-1;s<e.length;r=s++)e[s][1]>t!=e[r][1]>t&&n<(e[r][0]-e[s][0])*(t-e[s][1])/(e[r][1]-e[s][1]+1e-12)+e[s][0]&&(i=!i);return i}function z_(n,t){const[e,i,s,r,o,a]=n,l=Math.hypot(s-e,r-i),c=Math.max(1,Math.round(l/t)),u=[];for(let h=0;h<c;h++){const f=h/c,d=(h+1)/c;u.push([e+(s-e)*f,i+(r-i)*f,e+(s-e)*d,i+(r-i)*d,o,a])}return u}function H_(n,t,e,i,s=[0,0]){const r=new Map;for(const _ of n){const g=dh(_.azimuth);r.set(g,(r.get(g)??0)+_.length)}const o=[...r.entries()].filter(([,_])=>_>=1.2).sort((_,g)=>g[1]-_[1]).map(([_])=>_),a=G_(n.map(_=>Math.round(_.azimuth/15)*15)),l=new Map;for(const _ of t.pois){const g=Math.hypot(_.x-s[0],_.y-s[1]);if(g>1500)continue;const p=(Math.atan2(_.x-s[0],_.y-s[1])*180/Math.PI+360)%360,S=Math.atan2(_.r,g)*180/Math.PI;if(a.some(y=>ph(y,p)<=35+S)){const y=V_(_),x=Math.max(0,g-_.r*.5);(!l.has(y)||l.get(y)>x)&&l.set(y,x)}}const c=[...l.entries()].sort((_,g)=>_[1]-g[1]).slice(0,3).map(([_,g])=>`${_} — ${g<1e3?`${Math.round(g/10)*10} м`:`${(g/1e3).toFixed(1).replace(".",",")} км`}`);let u=1/0,h=!1;const f=n.length?aa(n[0].mid[0],n[0].mid[1],e):[0,0],d=[f[0]+s[0],f[1]+s[1]];for(const _ of t.buildings){const g=_.p.reduce((y,x)=>[y[0]+x[0]/_.p.length,y[1]+x[1]/_.p.length],[0,0]),p=Math.hypot(g[0]-d[0],g[1]-d[1]);if(p>250)continue;const S=(Math.atan2(g[0]-d[0],g[1]-d[1])*180/Math.PI+360)%360;a.some(y=>ph(y,S)<=40)&&_.h>=i-1&&(h=!0,u=Math.min(u,p))}const m=h?`напротив дом выше уровня окон, ~${Math.round(u/10)*10} м`:`окна выше соседних домов (${Math.round(i)} м над землёй)`;return{sides:o,sidesShort:o.map(_=>dh(W_(_),!0)),highlights:c,openness:m}}function V_(n){return n.kind==="water"?n.name:n.name==="парк"?"парк":`парк «${n.name}»`}function G_(n){return[...new Set(n)]}function W_(n){return["север","северо-восток","восток","юго-восток","юг","юго-запад","запад","северо-запад"].indexOf(n)*45}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eu="170",Qs={ROTATE:0,DOLLY:1,PAN:2},Ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},X_=0,mh=1,$_=2,ap=1,lp=2,ri=3,ki=0,nn=1,gn=2,Ui=0,tr=1,gh=2,_h=3,vh=4,Y_=5,as=100,j_=101,q_=102,K_=103,Z_=104,J_=200,Q_=201,t0=202,e0=203,Yl=204,jl=205,n0=206,i0=207,s0=208,r0=209,o0=210,a0=211,l0=212,c0=213,u0=214,ql=0,Kl=1,Zl=2,ir=3,Jl=4,Ql=5,tc=6,ec=7,cp=0,h0=1,f0=2,Ni=0,d0=1,p0=2,m0=3,up=4,g0=5,_0=6,v0=7,hp=300,sr=301,rr=302,nc=303,ic=304,Ca=306,la=1e3,cs=1001,sc=1002,Mn=1003,x0=1004,fo=1005,Xn=1006,qa=1007,us=1008,pi=1009,fp=1010,dp=1011,jr=1012,nu=1013,ms=1014,$n=1015,so=1016,iu=1017,su=1018,or=1020,pp=35902,mp=1021,gp=1022,Nn=1023,_p=1024,vp=1025,er=1026,ar=1027,ru=1028,ou=1029,xp=1030,au=1031,lu=1033,$o=33776,Yo=33777,jo=33778,qo=33779,rc=35840,oc=35841,ac=35842,lc=35843,cc=36196,uc=37492,hc=37496,fc=37808,dc=37809,pc=37810,mc=37811,gc=37812,_c=37813,vc=37814,xc=37815,Mc=37816,yc=37817,Sc=37818,bc=37819,Ec=37820,wc=37821,Ko=36492,Tc=36494,Ac=36495,Mp=36283,Cc=36284,Rc=36285,Pc=36286,M0=3200,y0=3201,yp=0,S0=1,Pi="",Qe="srgb",cr="srgb-linear",Ra="linear",de="srgb",Ts=7680,xh=519,b0=512,E0=513,w0=514,Sp=515,T0=516,A0=517,C0=518,R0=519,Mh=35044,yh="300 es",fi=2e3,ca=2001;class Ms{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sh=1234567;const kr=Math.PI/180,qr=180/Math.PI;function ur(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]).toLowerCase()}function He(n,t,e){return Math.max(t,Math.min(e,n))}function cu(n,t){return(n%t+t)%t}function P0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function D0(n,t,e){return n!==t?(e-n)/(t-n):0}function Br(n,t,e){return(1-e)*n+e*t}function L0(n,t,e,i){return Br(n,t,1-Math.exp(-e*i))}function I0(n,t=1){return t-Math.abs(cu(n,t*2)-t)}function U0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function N0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function F0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function O0(n,t){return n+Math.random()*(t-n)}function k0(n){return n*(.5-Math.random())}function B0(n){n!==void 0&&(Sh=n);let t=Sh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function z0(n){return n*kr}function H0(n){return n*qr}function V0(n){return(n&n-1)===0&&n!==0}function G0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function W0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function X0(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),h=r((t-i)/2),f=o((t-i)/2),d=r((i-t)/2),m=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*m,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*m,a*c);break;case"ZYZ":n.set(l*m,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ze(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Di={DEG2RAD:kr,RAD2DEG:qr,generateUUID:ur,clamp:He,euclideanModulo:cu,mapLinear:P0,inverseLerp:D0,lerp:Br,damp:L0,pingpong:I0,smoothstep:U0,smootherstep:N0,randInt:F0,randFloat:O0,randFloatSpread:k0,seededRandom:B0,degToRad:z0,radToDeg:H0,isPowerOfTwo:V0,ceilPowerOfTwo:G0,floorPowerOfTwo:W0,setQuaternionFromProperEuler:X0,normalize:Ze,denormalize:Gs};class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(He(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,i,s,r,o,a,l,c){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],m=i[8],_=s[0],g=s[3],p=s[6],S=s[1],y=s[4],x=s[7],F=s[2],R=s[5],C=s[8];return r[0]=o*_+a*S+l*F,r[3]=o*g+a*y+l*R,r[6]=o*p+a*x+l*C,r[1]=c*_+u*S+h*F,r[4]=c*g+u*y+h*R,r[7]=c*p+u*x+h*C,r[2]=f*_+d*S+m*F,r[5]=f*g+d*y+m*R,r[8]=f*p+d*x+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,m=e*h+i*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=h*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ka.makeScale(t,e)),this}rotate(t){return this.premultiply(Ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ka=new Zt;function bp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ua(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $0(){const n=ua("canvas");return n.style.display="block",n}const bh={};function Cr(n){n in bh||(bh[n]=!0,console.warn(n))}function Y0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function j0(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function q0(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(n.r=di(n.r),n.g=di(n.g),n.b=di(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(n.r=nr(n.r),n.g=nr(n.g),n.b=nr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Pi?Ra:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Eh=[.64,.33,.3,.6,.15,.06],wh=[.2126,.7152,.0722],Th=[.3127,.329],Ah=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ch=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[cr]:{primaries:Eh,whitePoint:Th,transfer:Ra,toXYZ:Ah,fromXYZ:Ch,luminanceCoefficients:wh,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:Eh,whitePoint:Th,transfer:de,toXYZ:Ah,fromXYZ:Ch,luminanceCoefficients:wh,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}});let As;class K0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{As===void 0&&(As=ua("canvas")),As.width=t.width,As.height=t.height;const i=As.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=As}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ua("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(di(e[i]/255)*255):e[i]=di(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Z0=0;class Ep{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=ur(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Za(s[o].image)):r.push(Za(s[o]))}else r=Za(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Za(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?K0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let J0=0;class qe extends Ms{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,i=cs,s=cs,r=Xn,o=us,a=Nn,l=pi,c=qe.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=ur(),this.name="",this.source=new Ep(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case la:t.x=t.x-Math.floor(t.x);break;case cs:t.x=t.x<0?0:1;break;case sc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case la:t.y=t.y-Math.floor(t.y);break;case cs:t.y=t.y<0?0:1;break;case sc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=hp;qe.DEFAULT_ANISOTROPY=1;class Te{constructor(t=0,e=0,i=0,s=1){Te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(d+1)/2,F=(p+1)/2,R=(u+f)/4,C=(h+_)/4,I=(m+g)/4;return y>x&&y>F?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=R/i,r=C/i):x>F?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=R/s,r=I/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=C/r,s=I/r),this.set(i,s,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Q0 extends Ms{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new qe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ep(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends Q0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class wp extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class tv extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==m){let g=1-a;const p=l*f+c*d+u*m+h*_,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const F=Math.sqrt(y),R=Math.atan2(F,p*S);g=Math.sin(g*R)/F,a=Math.sin(a*R)/F}const x=a*S;if(l=l*g+f*x,c=c*g+d*x,u=u*g+m*x,h=h*g+_*x,g===1-a){const F=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=F,c*=F,u*=F,h*=F}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+u*h+l*d-c*f,t[e+1]=l*m+u*f+c*h-a*d,t[e+2]=c*m+u*d+a*f-l*h,t[e+3]=u*m-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,i=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ja.copy(this).projectOnVector(t),this.sub(Ja)}reflect(t){return this.sub(Ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(He(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new k,Rh=new Bi;class ys{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),po.copy(i.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xr),mo.subVectors(this.max,xr),Cs.subVectors(t.a,xr),Rs.subVectors(t.b,xr),Ps.subVectors(t.c,xr),Mi.subVectors(Rs,Cs),yi.subVectors(Ps,Rs),Ki.subVectors(Cs,Ps);let e=[0,-Mi.z,Mi.y,0,-yi.z,yi.y,0,-Ki.z,Ki.y,Mi.z,0,-Mi.x,yi.z,0,-yi.x,Ki.z,0,-Ki.x,-Mi.y,Mi.x,0,-yi.y,yi.x,0,-Ki.y,Ki.x,0];return!Qa(e,Cs,Rs,Ps,mo)||(e=[1,0,0,0,1,0,0,0,1],!Qa(e,Cs,Rs,Ps,mo))?!1:(go.crossVectors(Mi,yi),e=[go.x,go.y,go.z],Qa(e,Cs,Rs,Ps,mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ti=[new k,new k,new k,new k,new k,new k,new k,new k],Rn=new k,po=new ys,Cs=new k,Rs=new k,Ps=new k,Mi=new k,yi=new k,Ki=new k,xr=new k,mo=new k,go=new k,Zi=new k;function Qa(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Zi.fromArray(n,r);const a=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=t.dot(Zi),c=e.dot(Zi),u=i.dot(Zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ev=new ys,Mr=new k,tl=new k;class hr{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ev.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mr.subVectors(t,this.center);const e=Mr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Mr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mr.copy(t.center).add(tl)),this.expandByPoint(Mr.copy(t.center).sub(tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new k,el=new k,_o=new k,Si=new k,nl=new k,vo=new k,il=new k;class Pa{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){el.copy(t).add(e).multiplyScalar(.5),_o.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(el);const r=t.distanceTo(e)*.5,o=-this.direction.dot(_o),a=Si.dot(this.direction),l=-Si.dot(_o),c=Si.lengthSq(),u=Math.abs(1-o*o);let h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=r*u,h>=0)if(f>=-m)if(f<=m){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(el).addScaledVector(_o,f),d}intersectSphere(t,e){ei.subVectors(t.center,this.origin);const i=ei.dot(this.direction),s=ei.dot(ei)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,i,s,r){nl.subVectors(e,t),vo.subVectors(i,t),il.crossVectors(nl,vo);let o=this.direction.dot(il),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,t);const l=a*this.direction.dot(vo.crossVectors(Si,vo));if(l<0)return null;const c=a*this.direction.dot(nl.cross(Si));if(c<0||l+c>o)return null;const u=-a*Si.dot(il);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,i,s,r,o,a,l,c,u,h,f,d,m,_,g){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,d,m,_,g)}set(t,e,i,s,r,o,a,l,c,u,h,f,d,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ds.setFromMatrixColumn(t,0).length(),r=1/Ds.setFromMatrixColumn(t,1).length(),o=1/Ds.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,m=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+m*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,m=c*u,_=c*h;e[0]=f+_*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,m=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,m=a*u,_=a*h;e[0]=l*u,e[4]=m*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=m*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+m,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-m,e[2]=m*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nv,t,iv)}lookAt(t,e,i){const s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),bi.crossVectors(i,fn),bi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),bi.crossVectors(i,fn)),bi.normalize(),xo.crossVectors(fn,bi),s[0]=bi.x,s[4]=xo.x,s[8]=fn.x,s[1]=bi.y,s[5]=xo.y,s[9]=fn.y,s[2]=bi.z,s[6]=xo.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],m=i[2],_=i[6],g=i[10],p=i[14],S=i[3],y=i[7],x=i[11],F=i[15],R=s[0],C=s[4],I=s[8],E=s[12],v=s[1],A=s[5],L=s[9],z=s[13],K=s[2],st=s[6],Z=s[10],et=s[14],X=s[3],_t=s[7],Tt=s[11],Rt=s[15];return r[0]=o*R+a*v+l*K+c*X,r[4]=o*C+a*A+l*st+c*_t,r[8]=o*I+a*L+l*Z+c*Tt,r[12]=o*E+a*z+l*et+c*Rt,r[1]=u*R+h*v+f*K+d*X,r[5]=u*C+h*A+f*st+d*_t,r[9]=u*I+h*L+f*Z+d*Tt,r[13]=u*E+h*z+f*et+d*Rt,r[2]=m*R+_*v+g*K+p*X,r[6]=m*C+_*A+g*st+p*_t,r[10]=m*I+_*L+g*Z+p*Tt,r[14]=m*E+_*z+g*et+p*Rt,r[3]=S*R+y*v+x*K+F*X,r[7]=S*C+y*A+x*st+F*_t,r[11]=S*I+y*L+x*Z+F*Tt,r[15]=S*E+y*z+x*et+F*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+_*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+g*(+e*c*h-e*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],m=t[12],_=t[13],g=t[14],p=t[15],S=h*g*c-_*f*c+_*l*d-a*g*d-h*l*p+a*f*p,y=m*f*c-u*g*c-m*l*d+o*g*d+u*l*p-o*f*p,x=u*_*c-m*h*c+m*a*d-o*_*d-u*a*p+o*h*p,F=m*h*l-u*_*l-m*a*f+o*_*f+u*a*g-o*h*g,R=e*S+i*y+s*x+r*F;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=S*C,t[1]=(_*f*r-h*g*r-_*s*d+i*g*d+h*s*p-i*f*p)*C,t[2]=(a*g*r-_*l*r+_*s*c-i*g*c-a*s*p+i*l*p)*C,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*C,t[4]=y*C,t[5]=(u*g*r-m*f*r+m*s*d-e*g*d-u*s*p+e*f*p)*C,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*p-e*l*p)*C,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*d+e*l*d)*C,t[8]=x*C,t[9]=(m*h*r-u*_*r-m*i*d+e*_*d+u*i*p-e*h*p)*C,t[10]=(o*_*r-m*a*r+m*i*c-e*_*c-o*i*p+e*a*p)*C,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*d-e*a*d)*C,t[12]=F*C,t[13]=(u*_*s-m*h*s+m*i*f-e*_*f-u*i*g+e*h*g)*C,t[14]=(m*a*s-o*_*s-m*i*l+e*_*l+o*i*g-e*a*g)*C,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,m=r*h,_=o*u,g=o*h,p=a*h,S=l*c,y=l*u,x=l*h,F=i.x,R=i.y,C=i.z;return s[0]=(1-(_+p))*F,s[1]=(d+x)*F,s[2]=(m-y)*F,s[3]=0,s[4]=(d-x)*R,s[5]=(1-(f+p))*R,s[6]=(g+S)*R,s[7]=0,s[8]=(m+y)*C,s[9]=(g-S)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ds.set(s[0],s[1],s[2]).length();const o=Ds.set(s[4],s[5],s[6]).length(),a=Ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Pn.copy(this);const c=1/r,u=1/o,h=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,e.setFromRotationMatrix(Pn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=fi){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let d,m;if(a===fi)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===ca)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=fi){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*c,d=(i+s)*u;let m,_;if(a===fi)m=(o+r)*h,_=-2*h;else if(a===ca)m=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ds=new k,Pn=new ue,nv=new k(0,0,0),iv=new k(1,1,1),bi=new k,xo=new k,fn=new k,Ph=new ue,Dh=new Bi;class qn{constructor(t=0,e=0,i=0,s=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ph,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class uu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sv=0;const Lh=new k,Ls=new Bi,ni=new ue,Mo=new k,yr=new k,rv=new k,ov=new Bi,Ih=new k(1,0,0),Uh=new k(0,1,0),Nh=new k(0,0,1),Fh={type:"added"},av={type:"removed"},Is={type:"childadded",child:null},sl={type:"childremoved",child:null};class Ne extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new k,e=new qn,i=new Bi,s=new k(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Zt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.premultiply(Ls),this}rotateX(t){return this.rotateOnAxis(Ih,t)}rotateY(t){return this.rotateOnAxis(Uh,t)}rotateZ(t){return this.rotateOnAxis(Nh,t)}translateOnAxis(t,e){return Lh.copy(t).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ih,t)}translateY(t){return this.translateOnAxis(Uh,t)}translateZ(t){return this.translateOnAxis(Nh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Mo.copy(t):Mo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(yr,Mo,this.up):ni.lookAt(Mo,yr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(ni),this.quaternion.premultiply(Ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fh),Is.child=t,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(av),sl.child=t,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fh),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,t,rv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,ov,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new k(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new k,ii=new k,rl=new k,si=new k,Us=new k,Ns=new k,Oh=new k,ol=new k,al=new k,ll=new k,cl=new Te,ul=new Te,hl=new Te;class Un{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Dn.subVectors(t,e),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Dn.subVectors(s,e),ii.subVectors(i,e),rl.subVectors(t,e);const o=Dn.dot(Dn),a=Dn.dot(ii),l=Dn.dot(rl),c=ii.dot(ii),u=ii.dot(rl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return cl.setScalar(0),ul.setScalar(0),hl.setScalar(0),cl.fromBufferAttribute(t,e),ul.fromBufferAttribute(t,i),hl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(cl,r.x),o.addScaledVector(ul,r.y),o.addScaledVector(hl,r.z),o}static isFrontFacing(t,e,i,s){return Dn.subVectors(i,e),ii.subVectors(t,e),Dn.cross(ii).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Dn.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Un.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Us.subVectors(s,i),Ns.subVectors(r,i),ol.subVectors(t,i);const l=Us.dot(ol),c=Ns.dot(ol);if(l<=0&&c<=0)return e.copy(i);al.subVectors(t,s);const u=Us.dot(al),h=Ns.dot(al);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Us,o);ll.subVectors(t,r);const d=Us.dot(ll),m=Ns.dot(ll);if(m>=0&&d<=m)return e.copy(r);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(Ns,a);const g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return Oh.subVectors(r,s),a=(h-u)/(h-u+(d-m)),e.copy(s).addScaledVector(Oh,a);const p=1/(g+_+f);return o=_*p,a=f*p,e.copy(i).addScaledVector(Us,o).addScaledVector(Ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},yo={h:0,s:0,l:0};function fl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Yt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ie.workingColorSpace){if(t=cu(t,1),e=He(e,0,1),i=He(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=fl(o,r,t+1/3),this.g=fl(o,r,t),this.b=fl(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=Qe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const i=Tp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=nr(t.r),this.g=nr(t.g),this.b=nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return ie.fromWorkingColorSpace(We.copy(this),t),Math.round(He(We.r*255,0,255))*65536+Math.round(He(We.g*255,0,255))*256+Math.round(He(We.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(We.copy(this),e);const i=We.r,s=We.g,r=We.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Qe){ie.fromWorkingColorSpace(We.copy(this),t);const e=We.r,i=We.g,s=We.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(yo);const i=Br(Ei.h,yo.h,e),s=Br(Ei.s,yo.s,e),r=Br(Ei.l,yo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Yt;Yt.NAMES=Tp;let lv=0;class fr extends Ms{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=ur(),this.name="",this.blending=tr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yl,this.blendDst=jl,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yl&&(i.blendSrc=this.blendSrc),this.blendDst!==jl&&(i.blendDst=this.blendDst),this.blendEquation!==as&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class dr extends fr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=cp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new k,So=new Nt;class On{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Mh,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)So.fromBufferAttribute(this,e),So.applyMatrix3(t),this.setXY(e,So.x,So.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Gs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ze(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),i=Ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),i=Ze(i,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mh&&(t.usage=this.usage),t}}class Ap extends On{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Cp extends On{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class fe extends On{constructor(t,e,i){super(new Float32Array(t),e,i)}}let cv=0;const bn=new ue,dl=new Ne,Fs=new k,dn=new ys,Sr=new ys,ke=new k;class ze extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bp(t)?Cp:Ap)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,i){return bn.makeTranslation(t,e,i),this.applyMatrix4(bn),this}scale(t,e,i){return bn.makeScale(t,e,i),this.applyMatrix4(bn),this}lookAt(t){return dl.lookAt(t),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Sr.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(dn.min,Sr.min),dn.expandByPoint(ke),ke.addVectors(dn.max,Sr.max),dn.expandByPoint(ke)):(dn.expandByPoint(Sr.min),dn.expandByPoint(Sr.max))}dn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ke.fromBufferAttribute(a,c),l&&(Fs.fromBufferAttribute(t,c),ke.add(Fs)),s=Math.max(s,i.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new k,l[I]=new k;const c=new k,u=new k,h=new k,f=new Nt,d=new Nt,m=new Nt,_=new k,g=new k;function p(I,E,v){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,v),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,v),u.sub(c),h.sub(c),d.sub(f),m.sub(f);const A=1/(d.x*m.y-m.x*d.y);isFinite(A)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(A),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(A),a[I].add(_),a[E].add(_),a[v].add(_),l[I].add(g),l[E].add(g),l[v].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let I=0,E=S.length;I<E;++I){const v=S[I],A=v.start,L=v.count;for(let z=A,K=A+L;z<K;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const y=new k,x=new k,F=new k,R=new k;function C(I){F.fromBufferAttribute(s,I),R.copy(F);const E=a[I];y.copy(E),y.sub(F.multiplyScalar(F.dot(E))).normalize(),x.crossVectors(R,E);const A=x.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,A)}for(let I=0,E=S.length;I<E;++I){const v=S[I],A=v.start,L=v.count;for(let z=A,K=A+L;z<K;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new On(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kh=new ue,Ji=new Pa,bo=new hr,Bh=new k,Eo=new k,wo=new k,To=new k,pl=new k,Ao=new k,zh=new k,Co=new k;class Kt extends Ne{constructor(t=new ze,e=new dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ao.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(pl.fromBufferAttribute(h,t),o?Ao.addScaledVector(pl,u):Ao.addScaledVector(pl.sub(e),u))}e.add(Ao)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(r),Ji.copy(t.ray).recast(t.near),!(bo.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(bo,Bh)===null||Ji.origin.distanceToSquared(Bh)>(t.far-t.near)**2))&&(kh.copy(r).invert(),Ji.copy(t.ray).applyMatrix4(kh),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ji)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],S=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=S,F=y;x<F;x+=3){const R=a.getX(x),C=a.getX(x+1),I=a.getX(x+2);s=Ro(this,p,t,i,c,u,h,R,C,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const S=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);s=Ro(this,o,t,i,c,u,h,S,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],S=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=S,F=y;x<F;x+=3){const R=x,C=x+1,I=x+2;s=Ro(this,p,t,i,c,u,h,R,C,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const S=g,y=g+1,x=g+2;s=Ro(this,o,t,i,c,u,h,S,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function uv(n,t,e,i,s,r,o,a){let l;if(t.side===nn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ki,a),l===null)return null;Co.copy(a),Co.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Co);return c<e.near||c>e.far?null:{distance:c,point:Co.clone(),object:n}}function Ro(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Eo),n.getVertexPosition(l,wo),n.getVertexPosition(c,To);const u=uv(n,t,e,i,Eo,wo,To,zh);if(u){const h=new k;Un.getBarycoord(zh,Eo,wo,To,h),s&&(u.uv=Un.getInterpolatedAttribute(s,a,l,c,h,new Nt)),r&&(u.uv1=Un.getInterpolatedAttribute(r,a,l,c,h,new Nt)),o&&(u.normal=Un.getInterpolatedAttribute(o,a,l,c,h,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};Un.getNormal(Eo,wo,To,f.normal),u.face=f,u.barycoord=h}return u}class zi extends ze{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(h,2));function m(_,g,p,S,y,x,F,R,C,I,E){const v=x/C,A=F/I,L=x/2,z=F/2,K=R/2,st=C+1,Z=I+1;let et=0,X=0;const _t=new k;for(let Tt=0;Tt<Z;Tt++){const Rt=Tt*A-z;for(let kt=0;kt<st;kt++){const oe=kt*v-L;_t[_]=oe*S,_t[g]=Rt*y,_t[p]=K,c.push(_t.x,_t.y,_t.z),_t[_]=0,_t[g]=0,_t[p]=R>0?1:-1,u.push(_t.x,_t.y,_t.z),h.push(kt/C),h.push(1-Tt/I),et+=1}}for(let Tt=0;Tt<I;Tt++)for(let Rt=0;Rt<C;Rt++){const kt=f+Rt+st*Tt,oe=f+Rt+st*(Tt+1),rt=f+(Rt+1)+st*(Tt+1),pt=f+(Rt+1)+st*Tt;l.push(kt,oe,pt),l.push(oe,rt,pt),X+=6}a.addGroup(d,X,E),d+=X,f+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function lr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Je(n){const t={};for(let e=0;e<n.length;e++){const i=lr(n[e]);for(const s in i)t[s]=i[s]}return t}function hv(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Rp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Pp={clone:lr,merge:Je};var fv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends fr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fv,this.fragmentShader=dv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lr(t.uniforms),this.uniformsGroups=hv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Dp extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new k,Hh=new Nt,Vh=new Nt;class En extends Dp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,e){return this.getViewBounds(t,Hh,Vh),e.subVectors(Vh,Hh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(kr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Os=-90,ks=1;class pv extends Ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(Os,ks,t,e);s.layers=this.layers,this.add(s);const r=new En(Os,ks,t,e);r.layers=this.layers,this.add(r);const o=new En(Os,ks,t,e);o.layers=this.layers,this.add(o);const a=new En(Os,ks,t,e);a.layers=this.layers,this.add(a);const l=new En(Os,ks,t,e);l.layers=this.layers,this.add(l);const c=new En(Os,ks,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Lp extends qe{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:sr,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mv extends gs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Lp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new zi(5,5,5),r=new mi({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Ui});r.uniforms.tEquirect.value=e;const o=new Kt(s,r),a=e.minFilter;return e.minFilter===us&&(e.minFilter=Xn),new pv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const ml=new k,gv=new k,_v=new Zt;class li{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ml.subVectors(i,e).cross(gv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ml),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||_v.getNormalMatrix(t),s=this.coplanarPoint(ml).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new hr,Po=new k;class hu{constructor(t=new li,e=new li,i=new li,s=new li,r=new li,o=new li){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=fi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],m=s[9],_=s[10],g=s[11],p=s[12],S=s[13],y=s[14],x=s[15];if(i[0].setComponents(l-r,f-c,g-d,x-p).normalize(),i[1].setComponents(l+r,f+c,g+d,x+p).normalize(),i[2].setComponents(l+o,f+u,g+m,x+S).normalize(),i[3].setComponents(l-o,f-u,g-m,x-S).normalize(),i[4].setComponents(l-a,f-h,g-_,x-y).normalize(),e===fi)i[5].setComponents(l+a,f+h,g+_,x+y).normalize();else if(e===ca)i[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Po.x=s.normal.x>0?t.max.x:t.min.x,Po.y=s.normal.y>0?t.max.y:t.min.y,Po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Po)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ip(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function vv(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],_=h[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const _=h[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ro extends ze{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,d=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const S=p*f-o;for(let y=0;y<c;y++){const x=y*h-r;m.push(x,-S,0),_.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const y=S+c*p,x=S+c*(p+1),F=S+1+c*(p+1),R=S+1+c*p;d.push(y,x,R),d.push(x,F,R)}this.setIndex(d),this.setAttribute("position",new fe(m,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.width,t.height,t.widthSegments,t.heightSegments)}}var xv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ev=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Av=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Iv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ox=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ux=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_x=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ix=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,eM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_M=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,OM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,BM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,YM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,KM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:xv,alphahash_pars_fragment:Mv,alphamap_fragment:yv,alphamap_pars_fragment:Sv,alphatest_fragment:bv,alphatest_pars_fragment:Ev,aomap_fragment:wv,aomap_pars_fragment:Tv,batching_pars_vertex:Av,batching_vertex:Cv,begin_vertex:Rv,beginnormal_vertex:Pv,bsdfs:Dv,iridescence_fragment:Lv,bumpmap_pars_fragment:Iv,clipping_planes_fragment:Uv,clipping_planes_pars_fragment:Nv,clipping_planes_pars_vertex:Fv,clipping_planes_vertex:Ov,color_fragment:kv,color_pars_fragment:Bv,color_pars_vertex:zv,color_vertex:Hv,common:Vv,cube_uv_reflection_fragment:Gv,defaultnormal_vertex:Wv,displacementmap_pars_vertex:Xv,displacementmap_vertex:$v,emissivemap_fragment:Yv,emissivemap_pars_fragment:jv,colorspace_fragment:qv,colorspace_pars_fragment:Kv,envmap_fragment:Zv,envmap_common_pars_fragment:Jv,envmap_pars_fragment:Qv,envmap_pars_vertex:tx,envmap_physical_pars_fragment:hx,envmap_vertex:ex,fog_vertex:nx,fog_pars_vertex:ix,fog_fragment:sx,fog_pars_fragment:rx,gradientmap_pars_fragment:ox,lightmap_pars_fragment:ax,lights_lambert_fragment:lx,lights_lambert_pars_fragment:cx,lights_pars_begin:ux,lights_toon_fragment:fx,lights_toon_pars_fragment:dx,lights_phong_fragment:px,lights_phong_pars_fragment:mx,lights_physical_fragment:gx,lights_physical_pars_fragment:_x,lights_fragment_begin:vx,lights_fragment_maps:xx,lights_fragment_end:Mx,logdepthbuf_fragment:yx,logdepthbuf_pars_fragment:Sx,logdepthbuf_pars_vertex:bx,logdepthbuf_vertex:Ex,map_fragment:wx,map_pars_fragment:Tx,map_particle_fragment:Ax,map_particle_pars_fragment:Cx,metalnessmap_fragment:Rx,metalnessmap_pars_fragment:Px,morphinstance_vertex:Dx,morphcolor_vertex:Lx,morphnormal_vertex:Ix,morphtarget_pars_vertex:Ux,morphtarget_vertex:Nx,normal_fragment_begin:Fx,normal_fragment_maps:Ox,normal_pars_fragment:kx,normal_pars_vertex:Bx,normal_vertex:zx,normalmap_pars_fragment:Hx,clearcoat_normal_fragment_begin:Vx,clearcoat_normal_fragment_maps:Gx,clearcoat_pars_fragment:Wx,iridescence_pars_fragment:Xx,opaque_fragment:$x,packing:Yx,premultiplied_alpha_fragment:jx,project_vertex:qx,dithering_fragment:Kx,dithering_pars_fragment:Zx,roughnessmap_fragment:Jx,roughnessmap_pars_fragment:Qx,shadowmap_pars_fragment:tM,shadowmap_pars_vertex:eM,shadowmap_vertex:nM,shadowmask_pars_fragment:iM,skinbase_vertex:sM,skinning_pars_vertex:rM,skinning_vertex:oM,skinnormal_vertex:aM,specularmap_fragment:lM,specularmap_pars_fragment:cM,tonemapping_fragment:uM,tonemapping_pars_fragment:hM,transmission_fragment:fM,transmission_pars_fragment:dM,uv_pars_fragment:pM,uv_pars_vertex:mM,uv_vertex:gM,worldpos_vertex:_M,background_vert:vM,background_frag:xM,backgroundCube_vert:MM,backgroundCube_frag:yM,cube_vert:SM,cube_frag:bM,depth_vert:EM,depth_frag:wM,distanceRGBA_vert:TM,distanceRGBA_frag:AM,equirect_vert:CM,equirect_frag:RM,linedashed_vert:PM,linedashed_frag:DM,meshbasic_vert:LM,meshbasic_frag:IM,meshlambert_vert:UM,meshlambert_frag:NM,meshmatcap_vert:FM,meshmatcap_frag:OM,meshnormal_vert:kM,meshnormal_frag:BM,meshphong_vert:zM,meshphong_frag:HM,meshphysical_vert:VM,meshphysical_frag:GM,meshtoon_vert:WM,meshtoon_frag:XM,points_vert:$M,points_frag:YM,shadow_vert:jM,shadow_frag:qM,sprite_vert:KM,sprite_frag:ZM},yt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Wn={basic:{uniforms:Je([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Je([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Je([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Je([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Je([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Je([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Je([yt.points,yt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Je([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Je([yt.common,yt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Je([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Je([yt.sprite,yt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Je([yt.common,yt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Je([yt.lights,yt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Wn.physical={uniforms:Je([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Do={r:0,b:0,g:0},ts=new qn,JM=new ue;function QM(n,t,e,i,s,r,o){const a=new Yt(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function m(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function _(S){let y=!1;const x=m(S);x===null?p(a,l):x&&x.isColor&&(p(x,1),y=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(S,y){const x=m(y);x&&(x.isCubeTexture||x.mapping===Ca)?(u===void 0&&(u=new Kt(new zi(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:lr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ts.copy(y.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(JM.makeRotationFromEuler(ts)),u.material.toneMapped=ie.getTransfer(x.colorSpace)!==de,(h!==x||f!==x.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Kt(new ro(2,2),new mi({name:"BackgroundMaterial",uniforms:lr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ie.getTransfer(x.colorSpace)!==de,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,y){S.getRGB(Do,Rp(n)),i.buffers.color.setClear(Do.r,Do.g,Do.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:g}}function ty(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(v,A,L,z,K){let st=!1;const Z=h(z,L,A);r!==Z&&(r=Z,c(r.object)),st=d(v,z,L,K),st&&m(v,z,L,K),K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),(st||o)&&(o=!1,x(v,A,L,z),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function h(v,A,L){const z=L.wireframe===!0;let K=i[v.id];K===void 0&&(K={},i[v.id]=K);let st=K[A.id];st===void 0&&(st={},K[A.id]=st);let Z=st[z];return Z===void 0&&(Z=f(l()),st[z]=Z),Z}function f(v){const A=[],L=[],z=[];for(let K=0;K<e;K++)A[K]=0,L[K]=0,z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:L,attributeDivisors:z,object:v,attributes:{},index:null}}function d(v,A,L,z){const K=r.attributes,st=A.attributes;let Z=0;const et=L.getAttributes();for(const X in et)if(et[X].location>=0){const Tt=K[X];let Rt=st[X];if(Rt===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(Rt=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(Rt=v.instanceColor)),Tt===void 0||Tt.attribute!==Rt||Rt&&Tt.data!==Rt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==z}function m(v,A,L,z){const K={},st=A.attributes;let Z=0;const et=L.getAttributes();for(const X in et)if(et[X].location>=0){let Tt=st[X];Tt===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(Tt=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(Tt=v.instanceColor));const Rt={};Rt.attribute=Tt,Tt&&Tt.data&&(Rt.data=Tt.data),K[X]=Rt,Z++}r.attributes=K,r.attributesNum=Z,r.index=z}function _(){const v=r.newAttributes;for(let A=0,L=v.length;A<L;A++)v[A]=0}function g(v){p(v,0)}function p(v,A){const L=r.newAttributes,z=r.enabledAttributes,K=r.attributeDivisors;L[v]=1,z[v]===0&&(n.enableVertexAttribArray(v),z[v]=1),K[v]!==A&&(n.vertexAttribDivisor(v,A),K[v]=A)}function S(){const v=r.newAttributes,A=r.enabledAttributes;for(let L=0,z=A.length;L<z;L++)A[L]!==v[L]&&(n.disableVertexAttribArray(L),A[L]=0)}function y(v,A,L,z,K,st,Z){Z===!0?n.vertexAttribIPointer(v,A,L,K,st):n.vertexAttribPointer(v,A,L,z,K,st)}function x(v,A,L,z){_();const K=z.attributes,st=L.getAttributes(),Z=A.defaultAttributeValues;for(const et in st){const X=st[et];if(X.location>=0){let _t=K[et];if(_t===void 0&&(et==="instanceMatrix"&&v.instanceMatrix&&(_t=v.instanceMatrix),et==="instanceColor"&&v.instanceColor&&(_t=v.instanceColor)),_t!==void 0){const Tt=_t.normalized,Rt=_t.itemSize,kt=t.get(_t);if(kt===void 0)continue;const oe=kt.buffer,rt=kt.type,pt=kt.bytesPerElement,Ct=rt===n.INT||rt===n.UNSIGNED_INT||_t.gpuType===nu;if(_t.isInterleavedBufferAttribute){const Mt=_t.data,Ot=Mt.stride,Ht=_t.offset;if(Mt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<X.locationSize;Wt++)p(X.location+Wt,Mt.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Wt=0;Wt<X.locationSize;Wt++)g(X.location+Wt);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let Wt=0;Wt<X.locationSize;Wt++)y(X.location+Wt,Rt/X.locationSize,rt,Tt,Ot*pt,(Ht+Rt/X.locationSize*Wt)*pt,Ct)}else{if(_t.isInstancedBufferAttribute){for(let Mt=0;Mt<X.locationSize;Mt++)p(X.location+Mt,_t.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Mt=0;Mt<X.locationSize;Mt++)g(X.location+Mt);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let Mt=0;Mt<X.locationSize;Mt++)y(X.location+Mt,Rt/X.locationSize,rt,Tt,Rt*pt,Rt/X.locationSize*Mt*pt,Ct)}}else if(Z!==void 0){const Tt=Z[et];if(Tt!==void 0)switch(Tt.length){case 2:n.vertexAttrib2fv(X.location,Tt);break;case 3:n.vertexAttrib3fv(X.location,Tt);break;case 4:n.vertexAttrib4fv(X.location,Tt);break;default:n.vertexAttrib1fv(X.location,Tt)}}}}S()}function F(){I();for(const v in i){const A=i[v];for(const L in A){const z=A[L];for(const K in z)u(z[K].object),delete z[K];delete A[L]}delete i[v]}}function R(v){if(i[v.id]===void 0)return;const A=i[v.id];for(const L in A){const z=A[L];for(const K in z)u(z[K].object),delete z[K];delete A[L]}delete i[v.id]}function C(v){for(const A in i){const L=i[A];if(L[v.id]===void 0)continue;const z=L[v.id];for(const K in z)u(z[K].object),delete z[K];delete L[v.id]}}function I(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:F,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function ey(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];e.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*f[_];e.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ny(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Nn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const I=C===so&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==pi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==$n&&!I)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=m>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:F,maxSamples:R}}function iy(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new li,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{const S=r?0:i,y=S*4;let x=p.clippingState||null;l.value=x,x=u(m,f,y,d);for(let F=0;F!==y;++F)x[F]=e[F];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=d;y!==_;++y,x+=4)o.copy(h[y]).applyMatrix4(S,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function sy(n){let t=new WeakMap;function e(o,a){return a===nc?o.mapping=sr:a===ic&&(o.mapping=rr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===nc||a===ic)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new mv(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Up extends Dp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Xs=4,Gh=[.125,.215,.35,.446,.526,.582],ls=20,gl=new Up,Wh=new Yt;let _l=null,vl=0,xl=0,Ml=!1;const ss=(1+Math.sqrt(5))/2,Bs=1/ss,Xh=[new k(-ss,Bs,0),new k(ss,Bs,0),new k(-Bs,0,ss),new k(Bs,0,ss),new k(0,ss,-Bs),new k(0,ss,Bs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Dc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_l,vl,xl),this._renderer.xr.enabled=Ml,t.scissorTest=!1,Lo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===sr||t.mapping===rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:so,format:Nn,colorSpace:cr,depthBuffer:!1},s=$h(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ry(r)),this._blurMaterial=oy(r,t,e)}return s}_compileMaterial(t){const e=new Kt(this._lodPlanes[0],t);this._renderer.compile(e,gl)}_sceneToCubeUV(t,e,i,s){const a=new En(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Wh),u.toneMapping=Ni,u.autoClear=!1;const d=new dr({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),m=new Kt(new zi,d);let _=!1;const g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,_=!0):(d.color.copy(Wh),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Lo(s,S*y,p>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(m,a),u.render(t,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===sr||t.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Lo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,gl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xh[(s-r-1)%Xh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Kt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ls-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):ls;g>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ls}`);const p=[];let S=0;for(let C=0;C<ls;++C){const I=C/_,E=Math.exp(-I*I/2);p.push(E),C===0?S+=E:C<g&&(S+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-i;const x=this._sizeLods[s],F=3*x*(s>y-Xs?s-y+Xs:0),R=4*(this._cubeSize-x);Lo(e,F,R,3*x,2*x),l.setRenderTarget(e),l.render(h,gl)}}function ry(n){const t=[],e=[],i=[];let s=n;const r=n-Xs+1+Gh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Xs?l=Gh[o-n+Xs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,_=3,g=2,p=1,S=new Float32Array(_*m*d),y=new Float32Array(g*m*d),x=new Float32Array(p*m*d);for(let R=0;R<d;R++){const C=R%3*2/3-1,I=R>2?0:-1,E=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];S.set(E,_*m*R),y.set(f,g*m*R);const v=[R,R,R,R,R,R];x.set(v,p*m*R)}const F=new ze;F.setAttribute("position",new On(S,_)),F.setAttribute("uv",new On(y,g)),F.setAttribute("faceIndex",new On(x,p)),t.push(F),s>Xs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function $h(n,t,e){const i=new gs(n,t,e);return i.texture.mapping=Ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function oy(n,t,e){const i=new Float32Array(ls),s=new k(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Yh(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function jh(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function fu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ay(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===nc||l===ic,u=l===sr||l===rr;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Dc(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Dc(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function ly(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Cr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function cy(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);for(const m in f.morphAttributes){const _=f.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)t.update(f[m],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const m in d){const _=d[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,m=h.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let y=0,x=S.length;y<x;y+=3){const F=S[y+0],R=S[y+1],C=S[y+2];f.push(F,R,R,C,C,F)}}else if(m!==void 0){const S=m.array;_=m.version;for(let y=0,x=S.length/3-1;y<x;y+=3){const F=y+0,R=y+1,C=y+2;f.push(F,R,R,C,C,F)}}else return;const g=new(bp(f)?Cp:Ap)(f,1);g.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,g)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function uy(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,m){m!==0&&(n.drawElementsInstanced(i,d,r,f*o,m),e.update(d,i,m))}function u(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,i,1)}function h(f,d,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,m);let p=0;for(let S=0;S<m;S++)p+=d[S]*_[S];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function hy(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function fy(n,t,e){const i=new WeakMap,s=new Te;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let v=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let F=a.attributes.position.count*x,R=1;F>t.maxTextureSize&&(R=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const C=new Float32Array(F*R*4*h),I=new wp(C,F,R,h);I.type=$n,I.needsUpdate=!0;const E=x*4;for(let A=0;A<h;A++){const L=p[A],z=S[A],K=y[A],st=F*R*4*A;for(let Z=0;Z<L.count;Z++){const et=Z*E;m===!0&&(s.fromBufferAttribute(L,Z),C[st+et+0]=s.x,C[st+et+1]=s.y,C[st+et+2]=s.z,C[st+et+3]=0),_===!0&&(s.fromBufferAttribute(z,Z),C[st+et+4]=s.x,C[st+et+5]=s.y,C[st+et+6]=s.z,C[st+et+7]=0),g===!0&&(s.fromBufferAttribute(K,Z),C[st+et+8]=s.x,C[st+et+9]=s.y,C[st+et+10]=s.z,C[st+et+11]=K.itemSize===4?s.w:1)}}f={count:h,texture:I,size:new Nt(F,R)},i.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function dy(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Np extends qe{constructor(t,e,i,s,r,o,a,l,c,u=er){if(u!==er&&u!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===er&&(i=ms),i===void 0&&u===ar&&(i=or),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Mn,this.minFilter=l!==void 0?l:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Fp=new qe,qh=new Np(1,1),Op=new wp,kp=new tv,Bp=new Lp,Kh=[],Zh=[],Jh=new Float32Array(16),Qh=new Float32Array(9),tf=new Float32Array(4);function pr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Kh[s];if(r===void 0&&(r=new Float32Array(s),Kh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Oe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Da(n,t){let e=Zh[t];e===void 0&&(e=new Int32Array(t),Zh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function py(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function my(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2fv(this.addr,t),Oe(e,t)}}function gy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;n.uniform3fv(this.addr,t),Oe(e,t)}}function _y(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4fv(this.addr,t),Oe(e,t)}}function vy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;tf.set(i),n.uniformMatrix2fv(this.addr,!1,tf),Oe(e,i)}}function xy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Qh.set(i),n.uniformMatrix3fv(this.addr,!1,Qh),Oe(e,i)}}function My(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Jh.set(i),n.uniformMatrix4fv(this.addr,!1,Jh),Oe(e,i)}}function yy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Sy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2iv(this.addr,t),Oe(e,t)}}function by(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3iv(this.addr,t),Oe(e,t)}}function Ey(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4iv(this.addr,t),Oe(e,t)}}function wy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ty(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2uiv(this.addr,t),Oe(e,t)}}function Ay(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3uiv(this.addr,t),Oe(e,t)}}function Cy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4uiv(this.addr,t),Oe(e,t)}}function Ry(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(qh.compareFunction=Sp,r=qh):r=Fp,e.setTexture2D(t||r,s)}function Py(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||kp,s)}function Dy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Bp,s)}function Ly(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Op,s)}function Iy(n){switch(n){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return _y;case 35674:return vy;case 35675:return xy;case 35676:return My;case 5124:case 35670:return yy;case 35667:case 35671:return Sy;case 35668:case 35672:return by;case 35669:case 35673:return Ey;case 5125:return wy;case 36294:return Ty;case 36295:return Ay;case 36296:return Cy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ry;case 35679:case 36299:case 36307:return Py;case 35680:case 36300:case 36308:case 36293:return Dy;case 36289:case 36303:case 36311:case 36292:return Ly}}function Uy(n,t){n.uniform1fv(this.addr,t)}function Ny(n,t){const e=pr(t,this.size,2);n.uniform2fv(this.addr,e)}function Fy(n,t){const e=pr(t,this.size,3);n.uniform3fv(this.addr,e)}function Oy(n,t){const e=pr(t,this.size,4);n.uniform4fv(this.addr,e)}function ky(n,t){const e=pr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function By(n,t){const e=pr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function zy(n,t){const e=pr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Hy(n,t){n.uniform1iv(this.addr,t)}function Vy(n,t){n.uniform2iv(this.addr,t)}function Gy(n,t){n.uniform3iv(this.addr,t)}function Wy(n,t){n.uniform4iv(this.addr,t)}function Xy(n,t){n.uniform1uiv(this.addr,t)}function $y(n,t){n.uniform2uiv(this.addr,t)}function Yy(n,t){n.uniform3uiv(this.addr,t)}function jy(n,t){n.uniform4uiv(this.addr,t)}function qy(n,t,e){const i=this.cache,s=t.length,r=Da(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Fp,r[o])}function Ky(n,t,e){const i=this.cache,s=t.length,r=Da(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||kp,r[o])}function Zy(n,t,e){const i=this.cache,s=t.length,r=Da(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Bp,r[o])}function Jy(n,t,e){const i=this.cache,s=t.length,r=Da(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Op,r[o])}function Qy(n){switch(n){case 5126:return Uy;case 35664:return Ny;case 35665:return Fy;case 35666:return Oy;case 35674:return ky;case 35675:return By;case 35676:return zy;case 5124:case 35670:return Hy;case 35667:case 35671:return Vy;case 35668:case 35672:return Gy;case 35669:case 35673:return Wy;case 5125:return Xy;case 36294:return $y;case 36295:return Yy;case 36296:return jy;case 35678:case 36198:case 36298:case 36306:case 35682:return qy;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return Zy;case 36289:case 36303:case 36311:case 36292:return Jy}}class tS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Iy(e.type)}}class eS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qy(e.type)}}class nS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const yl=/(\w+)(\])?(\[|\.)?/g;function ef(n,t){n.seq.push(t),n.map[t.id]=t}function iS(n,t,e){const i=n.name,s=i.length;for(yl.lastIndex=0;;){const r=yl.exec(i),o=yl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ef(e,c===void 0?new tS(a,n,t):new eS(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new nS(a),ef(e,h)),e=h}}}class Zo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);iS(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function nf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const sS=37297;let rS=0;function oS(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const sf=new Zt;function aS(n){ie._getMatrix(sf,ie.workingColorSpace,n);const t=`mat3( ${sf.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(n)){case Ra:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function rf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+oS(n.getShaderSource(t),o)}else return s}function lS(n,t){const e=aS(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cS(n,t){let e;switch(t){case d0:e="Linear";break;case p0:e="Reinhard";break;case m0:e="Cineon";break;case up:e="ACESFilmic";break;case _0:e="AgX";break;case v0:e="Neutral";break;case g0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Io=new k;function uS(){ie.getLuminanceCoefficients(Io);const n=Io.x.toFixed(4),t=Io.y.toFixed(4),e=Io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function fS(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function dS(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Rr(n){return n!==""}function of(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function af(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(n){return n.replace(pS,gS)}const mS=new Map;function gS(n,t){let e=Qt[t];if(e===void 0){const i=mS.get(t);if(i!==void 0)e=Qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Lc(e)}const _S=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lf(n){return n.replace(_S,vS)}function vS(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cf(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xS(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ap?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===lp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function MS(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case sr:case rr:t="ENVMAP_TYPE_CUBE";break;case Ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yS(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case rr:t="ENVMAP_MODE_REFRACTION";break}return t}function SS(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cp:t="ENVMAP_BLENDING_MULTIPLY";break;case h0:t="ENVMAP_BLENDING_MIX";break;case f0:t="ENVMAP_BLENDING_ADD";break}return t}function bS(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function ES(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=xS(e),c=MS(e),u=yS(e),h=SS(e),f=bS(e),d=hS(e),m=fS(r),_=s.createProgram();let g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Rr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Rr).join(`
`),p.length>0&&(p+=`
`)):(g=[cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),p=[cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Ni?cS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,lS("linearToOutputTexel",e.outputColorSpace),uS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rr).join(`
`)),o=Lc(o),o=of(o,e),o=af(o,e),a=Lc(a),a=of(a,e),a=af(a,e),o=lf(o),a=lf(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+g+o,x=S+p+a,F=nf(s,s.VERTEX_SHADER,y),R=nf(s,s.FRAGMENT_SHADER,x);s.attachShader(_,F),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(A){if(n.debug.checkShaderErrors){const L=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(F).trim(),K=s.getShaderInfoLog(R).trim();let st=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(st=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,F,R);else{const et=rf(s,F,"vertex"),X=rf(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+et+`
`+X)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(z===""||K==="")&&(Z=!1);Z&&(A.diagnostics={runnable:st,programLog:L,vertexShader:{log:z,prefix:g},fragmentShader:{log:K,prefix:p}})}s.deleteShader(F),s.deleteShader(R),I=new Zo(s,_),E=dS(s,_)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,sS)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=R,this}let wS=0;class TS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new AS(t),e.set(t,i)),i}}class AS{constructor(t){this.id=wS++,this.code=t,this.usedTimes=0}}function CS(n,t,e,i,s,r,o){const a=new uu,l=new TS,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,v,A,L,z){const K=L.fog,st=z.geometry,Z=E.isMeshStandardMaterial?L.environment:null,et=(E.isMeshStandardMaterial?e:t).get(E.envMap||Z),X=et&&et.mapping===Ca?et.image.height:null,_t=m[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const Tt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Rt=Tt!==void 0?Tt.length:0;let kt=0;st.morphAttributes.position!==void 0&&(kt=1),st.morphAttributes.normal!==void 0&&(kt=2),st.morphAttributes.color!==void 0&&(kt=3);let oe,rt,pt,Ct;if(_t){const he=Wn[_t];oe=he.vertexShader,rt=he.fragmentShader}else oe=E.vertexShader,rt=E.fragmentShader,l.update(E),pt=l.getVertexShaderID(E),Ct=l.getFragmentShaderID(E);const Mt=n.getRenderTarget(),Ot=n.state.buffers.depth.getReversed(),Ht=z.isInstancedMesh===!0,Wt=z.isBatchedMesh===!0,be=!!E.map,P=!!E.matcap,O=!!et,T=!!E.aoMap,at=!!E.lightMap,J=!!E.bumpMap,tt=!!E.normalMap,it=!!E.displacementMap,lt=!!E.emissiveMap,Q=!!E.metalnessMap,b=!!E.roughnessMap,M=E.anisotropy>0,U=E.clearcoat>0,W=E.dispersion>0,Y=E.iridescence>0,$=E.sheen>0,gt=E.transmission>0,ct=M&&!!E.anisotropyMap,vt=U&&!!E.clearcoatMap,Bt=U&&!!E.clearcoatNormalMap,ht=U&&!!E.clearcoatRoughnessMap,St=Y&&!!E.iridescenceMap,Ut=Y&&!!E.iridescenceThicknessMap,zt=$&&!!E.sheenColorMap,xt=$&&!!E.sheenRoughnessMap,Vt=!!E.specularMap,Xt=!!E.specularColorMap,ve=!!E.specularIntensityMap,B=gt&&!!E.transmissionMap,bt=gt&&!!E.thicknessMap,nt=!!E.gradientMap,ot=!!E.alphaMap,At=E.alphaTest>0,Et=!!E.alphaHash,jt=!!E.extensions;let we=Ni;E.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(we=n.toneMapping);const Ve={shaderID:_t,shaderType:E.type,shaderName:E.name,vertexShader:oe,fragmentShader:rt,defines:E.defines,customVertexShaderID:pt,customFragmentShaderID:Ct,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Wt,batchingColor:Wt&&z._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&z.instanceColor!==null,instancingMorph:Ht&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Mt===null?n.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:cr,alphaToCoverage:!!E.alphaToCoverage,map:be,matcap:P,envMap:O,envMapMode:O&&et.mapping,envMapCubeUVHeight:X,aoMap:T,lightMap:at,bumpMap:J,normalMap:tt,displacementMap:f&&it,emissiveMap:lt,normalMapObjectSpace:tt&&E.normalMapType===S0,normalMapTangentSpace:tt&&E.normalMapType===yp,metalnessMap:Q,roughnessMap:b,anisotropy:M,anisotropyMap:ct,clearcoat:U,clearcoatMap:vt,clearcoatNormalMap:Bt,clearcoatRoughnessMap:ht,dispersion:W,iridescence:Y,iridescenceMap:St,iridescenceThicknessMap:Ut,sheen:$,sheenColorMap:zt,sheenRoughnessMap:xt,specularMap:Vt,specularColorMap:Xt,specularIntensityMap:ve,transmission:gt,transmissionMap:B,thicknessMap:bt,gradientMap:nt,opaque:E.transparent===!1&&E.blending===tr&&E.alphaToCoverage===!1,alphaMap:ot,alphaTest:At,alphaHash:Et,combine:E.combine,mapUv:be&&_(E.map.channel),aoMapUv:T&&_(E.aoMap.channel),lightMapUv:at&&_(E.lightMap.channel),bumpMapUv:J&&_(E.bumpMap.channel),normalMapUv:tt&&_(E.normalMap.channel),displacementMapUv:it&&_(E.displacementMap.channel),emissiveMapUv:lt&&_(E.emissiveMap.channel),metalnessMapUv:Q&&_(E.metalnessMap.channel),roughnessMapUv:b&&_(E.roughnessMap.channel),anisotropyMapUv:ct&&_(E.anisotropyMap.channel),clearcoatMapUv:vt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(E.sheenRoughnessMap.channel),specularMapUv:Vt&&_(E.specularMap.channel),specularColorMapUv:Xt&&_(E.specularColorMap.channel),specularIntensityMapUv:ve&&_(E.specularIntensityMap.channel),transmissionMapUv:B&&_(E.transmissionMap.channel),thicknessMapUv:bt&&_(E.thicknessMap.channel),alphaMapUv:ot&&_(E.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(tt||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!st.attributes.uv&&(be||ot),fog:!!K,useFog:E.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ot,skinning:z.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:kt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:we,decodeVideoTexture:be&&E.map.isVideoTexture===!0&&ie.getTransfer(E.map.colorSpace)===de,decodeVideoTextureEmissive:lt&&E.emissiveMap.isVideoTexture===!0&&ie.getTransfer(E.emissiveMap.colorSpace)===de,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===gn,flipSided:E.side===nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:jt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&E.extensions.multiDraw===!0||Wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function p(E){const v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(const A in E.defines)v.push(A),v.push(E.defines[A]);return E.isRawShaderMaterial===!1&&(S(v,E),y(v,E),v.push(n.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function S(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function y(E,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const v=m[E.type];let A;if(v){const L=Wn[v];A=Pp.clone(L.uniforms)}else A=E.uniforms;return A}function F(E,v){let A;for(let L=0,z=u.length;L<z;L++){const K=u[L];if(K.cacheKey===v){A=K,++A.usedTimes;break}}return A===void 0&&(A=new ES(n,v,E,r),u.push(A)),A}function R(E){if(--E.usedTimes===0){const v=u.indexOf(E);u[v]=u[u.length-1],u.pop(),E.destroy()}}function C(E){l.remove(E)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:F,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:I}}function RS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function PS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function uf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function hf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,d,m,_,g){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),t++,p}function a(h,f,d,m,_,g){const p=o(h,f,d,m,_,g);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(h,f,d,m,_,g){const p=o(h,f,d,m,_,g);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||PS),i.length>1&&i.sort(f||uf),s.length>1&&s.sort(f||uf)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function DS(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new hf,n.set(i,[o])):s>=r.length?(o=new hf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function LS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Yt};break;case"SpotLight":e={position:new k,direction:new k,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[t.id]=e,e}}}function IS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let US=0;function NS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function FS(n){const t=new LS,e=IS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const s=new k,r=new ue,o=new ue;function a(c){let u=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,S=0,y=0,x=0,F=0,R=0,C=0;c.sort(NS);for(let E=0,v=c.length;E<v;E++){const A=c[E],L=A.color,z=A.intensity,K=A.distance,st=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=L.r*z,h+=L.g*z,f+=L.b*z;else if(A.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(A.sh.coefficients[Z],z);C++}else if(A.isDirectionalLight){const Z=t.get(A);if(Z.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const et=A.shadow,X=e.get(A);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=st,i.directionalShadowMatrix[d]=A.shadow.matrix,S++}i.directional[d]=Z,d++}else if(A.isSpotLight){const Z=t.get(A);Z.position.setFromMatrixPosition(A.matrixWorld),Z.color.copy(L).multiplyScalar(z),Z.distance=K,Z.coneCos=Math.cos(A.angle),Z.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),Z.decay=A.decay,i.spot[_]=Z;const et=A.shadow;if(A.map&&(i.spotLightMap[F]=A.map,F++,et.updateMatrices(A),A.castShadow&&R++),i.spotLightMatrix[_]=et.matrix,A.castShadow){const X=e.get(A);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=st,x++}_++}else if(A.isRectAreaLight){const Z=t.get(A);Z.color.copy(L).multiplyScalar(z),Z.halfWidth.set(A.width*.5,0,0),Z.halfHeight.set(0,A.height*.5,0),i.rectArea[g]=Z,g++}else if(A.isPointLight){const Z=t.get(A);if(Z.color.copy(A.color).multiplyScalar(A.intensity),Z.distance=A.distance,Z.decay=A.decay,A.castShadow){const et=A.shadow,X=e.get(A);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,X.shadowCameraNear=et.camera.near,X.shadowCameraFar=et.camera.far,i.pointShadow[m]=X,i.pointShadowMap[m]=st,i.pointShadowMatrix[m]=A.shadow.matrix,y++}i.point[m]=Z,m++}else if(A.isHemisphereLight){const Z=t.get(A);Z.skyColor.copy(A.color).multiplyScalar(z),Z.groundColor.copy(A.groundColor).multiplyScalar(z),i.hemi[p]=Z,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==d||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==S||I.numPointShadows!==y||I.numSpotShadows!==x||I.numSpotMaps!==F||I.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+F-R,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,I.directionalLength=d,I.pointLength=m,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=S,I.numPointShadows=y,I.numSpotShadows=x,I.numSpotMaps=F,I.numLightProbes=C,i.version=US++)}function l(c,u){let h=0,f=0,d=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const y=c[p];if(y.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),h++}else if(y.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const x=i.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function ff(n){const t=new FS(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function OS(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ff(n),t.set(s,[a])):r>=o.length?(a=new ff(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class kS extends fr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=M0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class BS extends fr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const zS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function VS(n,t,e){let i=new hu;const s=new Nt,r=new Nt,o=new Te,a=new kS({depthPacking:y0}),l=new BS,c={},u=e.maxTextureSize,h={[ki]:nn,[nn]:ki,[gn]:gn},f=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:zS,fragmentShader:HS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new ze;m.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Kt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ap;let p=this.type;this.render=function(R,C,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const E=n.getRenderTarget(),v=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Ui),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const z=p!==ri&&this.type===ri,K=p===ri&&this.type!==ri;for(let st=0,Z=R.length;st<Z;st++){const et=R[st],X=et.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const _t=X.getFrameExtents();if(s.multiply(_t),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/_t.x),s.x=r.x*_t.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/_t.y),s.y=r.y*_t.y,X.mapSize.y=r.y)),X.map===null||z===!0||K===!0){const Rt=this.type!==ri?{minFilter:Mn,magFilter:Mn}:{};X.map!==null&&X.map.dispose(),X.map=new gs(s.x,s.y,Rt),X.map.texture.name=et.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const Tt=X.getViewportCount();for(let Rt=0;Rt<Tt;Rt++){const kt=X.getViewport(Rt);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),L.viewport(o),X.updateMatrices(et,Rt),i=X.getFrustum(),x(C,I,X.camera,et,this.type)}X.isPointLightShadow!==!0&&this.type===ri&&S(X,I),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(E,v,A)};function S(R,C){const I=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new gs(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,I,f,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,I,d,_,null)}function y(R,C,I,E){let v=null;const A=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)v=A;else if(v=I.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const L=v.uuid,z=C.uuid;let K=c[L];K===void 0&&(K={},c[L]=K);let st=K[z];st===void 0&&(st=v.clone(),K[z]=st,C.addEventListener("dispose",F)),v=st}if(v.visible=C.visible,v.wireframe=C.wireframe,E===ri?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:h[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const L=n.properties.get(v);L.light=I}return v}function x(R,C,I,E,v){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===ri)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const z=t.update(R),K=R.material;if(Array.isArray(K)){const st=z.groups;for(let Z=0,et=st.length;Z<et;Z++){const X=st[Z],_t=K[X.materialIndex];if(_t&&_t.visible){const Tt=y(R,_t,E,v);R.onBeforeShadow(n,R,C,I,z,Tt,X),n.renderBufferDirect(I,null,z,Tt,R,X),R.onAfterShadow(n,R,C,I,z,Tt,X)}}}else if(K.visible){const st=y(R,K,E,v);R.onBeforeShadow(n,R,C,I,z,st,null),n.renderBufferDirect(I,null,z,st,R,null),R.onAfterShadow(n,R,C,I,z,st,null)}}const L=R.children;for(let z=0,K=L.length;z<K;z++)x(L[z],C,I,E,v)}function F(R){R.target.removeEventListener("dispose",F);for(const I in c){const E=c[I],v=R.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}const GS={[ql]:Kl,[Zl]:tc,[Jl]:ec,[ir]:Ql,[Kl]:ql,[tc]:Zl,[ec]:Jl,[Ql]:ir};function WS(n,t){function e(){let B=!1;const bt=new Te;let nt=null;const ot=new Te(0,0,0,0);return{setMask:function(At){nt!==At&&!B&&(n.colorMask(At,At,At,At),nt=At)},setLocked:function(At){B=At},setClear:function(At,Et,jt,we,Ve){Ve===!0&&(At*=we,Et*=we,jt*=we),bt.set(At,Et,jt,we),ot.equals(bt)===!1&&(n.clearColor(At,Et,jt,we),ot.copy(bt))},reset:function(){B=!1,nt=null,ot.set(-1,0,0,0)}}}function i(){let B=!1,bt=!1,nt=null,ot=null,At=null;return{setReversed:function(Et){if(bt!==Et){const jt=t.get("EXT_clip_control");bt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);const we=At;At=null,this.setClear(we)}bt=Et},getReversed:function(){return bt},setTest:function(Et){Et?Mt(n.DEPTH_TEST):Ot(n.DEPTH_TEST)},setMask:function(Et){nt!==Et&&!B&&(n.depthMask(Et),nt=Et)},setFunc:function(Et){if(bt&&(Et=GS[Et]),ot!==Et){switch(Et){case ql:n.depthFunc(n.NEVER);break;case Kl:n.depthFunc(n.ALWAYS);break;case Zl:n.depthFunc(n.LESS);break;case ir:n.depthFunc(n.LEQUAL);break;case Jl:n.depthFunc(n.EQUAL);break;case Ql:n.depthFunc(n.GEQUAL);break;case tc:n.depthFunc(n.GREATER);break;case ec:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ot=Et}},setLocked:function(Et){B=Et},setClear:function(Et){At!==Et&&(bt&&(Et=1-Et),n.clearDepth(Et),At=Et)},reset:function(){B=!1,nt=null,ot=null,At=null,bt=!1}}}function s(){let B=!1,bt=null,nt=null,ot=null,At=null,Et=null,jt=null,we=null,Ve=null;return{setTest:function(he){B||(he?Mt(n.STENCIL_TEST):Ot(n.STENCIL_TEST))},setMask:function(he){bt!==he&&!B&&(n.stencilMask(he),bt=he)},setFunc:function(he,An,Kn){(nt!==he||ot!==An||At!==Kn)&&(n.stencilFunc(he,An,Kn),nt=he,ot=An,At=Kn)},setOp:function(he,An,Kn){(Et!==he||jt!==An||we!==Kn)&&(n.stencilOp(he,An,Kn),Et=he,jt=An,we=Kn)},setLocked:function(he){B=he},setClear:function(he){Ve!==he&&(n.clearStencil(he),Ve=he)},reset:function(){B=!1,bt=null,nt=null,ot=null,At=null,Et=null,jt=null,we=null,Ve=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,S=null,y=null,x=null,F=null,R=null,C=new Yt(0,0,0),I=0,E=!1,v=null,A=null,L=null,z=null,K=null;const st=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,et=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=et>=1):X.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=et>=2);let _t=null,Tt={};const Rt=n.getParameter(n.SCISSOR_BOX),kt=n.getParameter(n.VIEWPORT),oe=new Te().fromArray(Rt),rt=new Te().fromArray(kt);function pt(B,bt,nt,ot){const At=new Uint8Array(4),Et=n.createTexture();n.bindTexture(B,Et),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let jt=0;jt<nt;jt++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(bt,0,n.RGBA,1,1,ot,0,n.RGBA,n.UNSIGNED_BYTE,At):n.texImage2D(bt+jt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,At);return Et}const Ct={};Ct[n.TEXTURE_2D]=pt(n.TEXTURE_2D,n.TEXTURE_2D,1),Ct[n.TEXTURE_CUBE_MAP]=pt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[n.TEXTURE_2D_ARRAY]=pt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ct[n.TEXTURE_3D]=pt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Mt(n.DEPTH_TEST),o.setFunc(ir),J(!1),tt(mh),Mt(n.CULL_FACE),T(Ui);function Mt(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Ot(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function Ht(B,bt){return h[B]!==bt?(n.bindFramebuffer(B,bt),h[B]=bt,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=bt),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=bt),!0):!1}function Wt(B,bt){let nt=d,ot=!1;if(B){nt=f.get(bt),nt===void 0&&(nt=[],f.set(bt,nt));const At=B.textures;if(nt.length!==At.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let Et=0,jt=At.length;Et<jt;Et++)nt[Et]=n.COLOR_ATTACHMENT0+Et;nt.length=At.length,ot=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,ot=!0);ot&&n.drawBuffers(nt)}function be(B){return m!==B?(n.useProgram(B),m=B,!0):!1}const P={[as]:n.FUNC_ADD,[j_]:n.FUNC_SUBTRACT,[q_]:n.FUNC_REVERSE_SUBTRACT};P[K_]=n.MIN,P[Z_]=n.MAX;const O={[J_]:n.ZERO,[Q_]:n.ONE,[t0]:n.SRC_COLOR,[Yl]:n.SRC_ALPHA,[o0]:n.SRC_ALPHA_SATURATE,[s0]:n.DST_COLOR,[n0]:n.DST_ALPHA,[e0]:n.ONE_MINUS_SRC_COLOR,[jl]:n.ONE_MINUS_SRC_ALPHA,[r0]:n.ONE_MINUS_DST_COLOR,[i0]:n.ONE_MINUS_DST_ALPHA,[a0]:n.CONSTANT_COLOR,[l0]:n.ONE_MINUS_CONSTANT_COLOR,[c0]:n.CONSTANT_ALPHA,[u0]:n.ONE_MINUS_CONSTANT_ALPHA};function T(B,bt,nt,ot,At,Et,jt,we,Ve,he){if(B===Ui){_===!0&&(Ot(n.BLEND),_=!1);return}if(_===!1&&(Mt(n.BLEND),_=!0),B!==Y_){if(B!==g||he!==E){if((p!==as||x!==as)&&(n.blendEquation(n.FUNC_ADD),p=as,x=as),he)switch(B){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gh:n.blendFunc(n.ONE,n.ONE);break;case _h:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case _h:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}S=null,y=null,F=null,R=null,C.set(0,0,0),I=0,g=B,E=he}return}At=At||bt,Et=Et||nt,jt=jt||ot,(bt!==p||At!==x)&&(n.blendEquationSeparate(P[bt],P[At]),p=bt,x=At),(nt!==S||ot!==y||Et!==F||jt!==R)&&(n.blendFuncSeparate(O[nt],O[ot],O[Et],O[jt]),S=nt,y=ot,F=Et,R=jt),(we.equals(C)===!1||Ve!==I)&&(n.blendColor(we.r,we.g,we.b,Ve),C.copy(we),I=Ve),g=B,E=!1}function at(B,bt){B.side===gn?Ot(n.CULL_FACE):Mt(n.CULL_FACE);let nt=B.side===nn;bt&&(nt=!nt),J(nt),B.blending===tr&&B.transparent===!1?T(Ui):T(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const ot=B.stencilWrite;a.setTest(ot),ot&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),lt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Mt(n.SAMPLE_ALPHA_TO_COVERAGE):Ot(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(B){v!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),v=B)}function tt(B){B!==X_?(Mt(n.CULL_FACE),B!==A&&(B===mh?n.cullFace(n.BACK):B===$_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ot(n.CULL_FACE),A=B}function it(B){B!==L&&(Z&&n.lineWidth(B),L=B)}function lt(B,bt,nt){B?(Mt(n.POLYGON_OFFSET_FILL),(z!==bt||K!==nt)&&(n.polygonOffset(bt,nt),z=bt,K=nt)):Ot(n.POLYGON_OFFSET_FILL)}function Q(B){B?Mt(n.SCISSOR_TEST):Ot(n.SCISSOR_TEST)}function b(B){B===void 0&&(B=n.TEXTURE0+st-1),_t!==B&&(n.activeTexture(B),_t=B)}function M(B,bt,nt){nt===void 0&&(_t===null?nt=n.TEXTURE0+st-1:nt=_t);let ot=Tt[nt];ot===void 0&&(ot={type:void 0,texture:void 0},Tt[nt]=ot),(ot.type!==B||ot.texture!==bt)&&(_t!==nt&&(n.activeTexture(nt),_t=nt),n.bindTexture(B,bt||Ct[B]),ot.type=B,ot.texture=bt)}function U(){const B=Tt[_t];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function W(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function vt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Bt(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function St(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ut(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function zt(B){oe.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),oe.copy(B))}function xt(B){rt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),rt.copy(B))}function Vt(B,bt){let nt=c.get(bt);nt===void 0&&(nt=new WeakMap,c.set(bt,nt));let ot=nt.get(B);ot===void 0&&(ot=n.getUniformBlockIndex(bt,B.name),nt.set(B,ot))}function Xt(B,bt){const ot=c.get(bt).get(B);l.get(bt)!==ot&&(n.uniformBlockBinding(bt,ot,B.__bindingPointIndex),l.set(bt,ot))}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},_t=null,Tt={},h={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,S=null,y=null,x=null,F=null,R=null,C=new Yt(0,0,0),I=0,E=!1,v=null,A=null,L=null,z=null,K=null,oe.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Mt,disable:Ot,bindFramebuffer:Ht,drawBuffers:Wt,useProgram:be,setBlending:T,setMaterial:at,setFlipSided:J,setCullFace:tt,setLineWidth:it,setPolygonOffset:lt,setScissorTest:Q,activeTexture:b,bindTexture:M,unbindTexture:U,compressedTexImage2D:W,compressedTexImage3D:Y,texImage2D:St,texImage3D:Ut,updateUBOMapping:Vt,uniformBlockBinding:Xt,texStorage2D:Bt,texStorage3D:ht,texSubImage2D:$,texSubImage3D:gt,compressedTexSubImage2D:ct,compressedTexSubImage3D:vt,scissor:zt,viewport:xt,reset:ve}}function df(n,t,e,i){const s=XS(i);switch(e){case mp:return n*t;case _p:return n*t;case vp:return n*t*2;case ru:return n*t/s.components*s.byteLength;case ou:return n*t/s.components*s.byteLength;case xp:return n*t*2/s.components*s.byteLength;case au:return n*t*2/s.components*s.byteLength;case gp:return n*t*3/s.components*s.byteLength;case Nn:return n*t*4/s.components*s.byteLength;case lu:return n*t*4/s.components*s.byteLength;case $o:case Yo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case jo:case qo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case oc:case lc:return Math.max(n,16)*Math.max(t,8)/4;case rc:case ac:return Math.max(n,8)*Math.max(t,8)/2;case cc:case uc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case hc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case dc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case pc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case mc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case gc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case _c:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case vc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case xc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case yc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case bc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ec:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case wc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ko:case Tc:case Ac:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Mp:case Cc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Rc:case Pc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function XS(n){switch(n){case pi:case fp:return{byteLength:1,components:1};case jr:case dp:case so:return{byteLength:2,components:1};case iu:case su:return{byteLength:2,components:4};case ms:case nu:case $n:return{byteLength:4,components:1};case pp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function $S(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,M){return d?new OffscreenCanvas(b,M):ua("canvas")}function _(b,M,U){let W=1;const Y=Q(b);if((Y.width>U||Y.height>U)&&(W=U/Math.max(Y.width,Y.height)),W<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const $=Math.floor(W*Y.width),gt=Math.floor(W*Y.height);h===void 0&&(h=m($,gt));const ct=M?m($,gt):h;return ct.width=$,ct.height=gt,ct.getContext("2d").drawImage(b,0,0,$,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+$+"x"+gt+")."),ct}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),b;return b}function g(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function S(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(b,M,U,W,Y=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let $=M;if(M===n.RED&&(U===n.FLOAT&&($=n.R32F),U===n.HALF_FLOAT&&($=n.R16F),U===n.UNSIGNED_BYTE&&($=n.R8)),M===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&($=n.R8UI),U===n.UNSIGNED_SHORT&&($=n.R16UI),U===n.UNSIGNED_INT&&($=n.R32UI),U===n.BYTE&&($=n.R8I),U===n.SHORT&&($=n.R16I),U===n.INT&&($=n.R32I)),M===n.RG&&(U===n.FLOAT&&($=n.RG32F),U===n.HALF_FLOAT&&($=n.RG16F),U===n.UNSIGNED_BYTE&&($=n.RG8)),M===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&($=n.RG8UI),U===n.UNSIGNED_SHORT&&($=n.RG16UI),U===n.UNSIGNED_INT&&($=n.RG32UI),U===n.BYTE&&($=n.RG8I),U===n.SHORT&&($=n.RG16I),U===n.INT&&($=n.RG32I)),M===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&($=n.RGB8UI),U===n.UNSIGNED_SHORT&&($=n.RGB16UI),U===n.UNSIGNED_INT&&($=n.RGB32UI),U===n.BYTE&&($=n.RGB8I),U===n.SHORT&&($=n.RGB16I),U===n.INT&&($=n.RGB32I)),M===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&($=n.RGBA8UI),U===n.UNSIGNED_SHORT&&($=n.RGBA16UI),U===n.UNSIGNED_INT&&($=n.RGBA32UI),U===n.BYTE&&($=n.RGBA8I),U===n.SHORT&&($=n.RGBA16I),U===n.INT&&($=n.RGBA32I)),M===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),M===n.RGBA){const gt=Y?Ra:ie.getTransfer(W);U===n.FLOAT&&($=n.RGBA32F),U===n.HALF_FLOAT&&($=n.RGBA16F),U===n.UNSIGNED_BYTE&&($=gt===de?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(b,M){let U;return b?M===null||M===ms||M===or?U=n.DEPTH24_STENCIL8:M===$n?U=n.DEPTH32F_STENCIL8:M===jr&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ms||M===or?U=n.DEPTH_COMPONENT24:M===$n?U=n.DEPTH_COMPONENT32F:M===jr&&(U=n.DEPTH_COMPONENT16),U}function F(b,M){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==Mn&&b.minFilter!==Xn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function R(b){const M=b.target;M.removeEventListener("dispose",R),I(M),M.isVideoTexture&&u.delete(M)}function C(b){const M=b.target;M.removeEventListener("dispose",C),v(M)}function I(b){const M=i.get(b);if(M.__webglInit===void 0)return;const U=b.source,W=f.get(U);if(W){const Y=W[M.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&E(b),Object.keys(W).length===0&&f.delete(U)}i.remove(b)}function E(b){const M=i.get(b);n.deleteTexture(M.__webglTexture);const U=b.source,W=f.get(U);delete W[M.__cacheKey],o.memory.textures--}function v(b){const M=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(M.__webglFramebuffer[W]))for(let Y=0;Y<M.__webglFramebuffer[W].length;Y++)n.deleteFramebuffer(M.__webglFramebuffer[W][Y]);else n.deleteFramebuffer(M.__webglFramebuffer[W]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[W])}else{if(Array.isArray(M.__webglFramebuffer))for(let W=0;W<M.__webglFramebuffer.length;W++)n.deleteFramebuffer(M.__webglFramebuffer[W]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let W=0;W<M.__webglColorRenderbuffer.length;W++)M.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[W]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const U=b.textures;for(let W=0,Y=U.length;W<Y;W++){const $=i.get(U[W]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(U[W])}i.remove(b)}let A=0;function L(){A=0}function z(){const b=A;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),A+=1,b}function K(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function st(b,M){const U=i.get(b);if(b.isVideoTexture&&it(b),b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){const W=b.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(U,b,M);return}}e.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+M)}function Z(b,M){const U=i.get(b);if(b.version>0&&U.__version!==b.version){rt(U,b,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+M)}function et(b,M){const U=i.get(b);if(b.version>0&&U.__version!==b.version){rt(U,b,M);return}e.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+M)}function X(b,M){const U=i.get(b);if(b.version>0&&U.__version!==b.version){pt(U,b,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+M)}const _t={[la]:n.REPEAT,[cs]:n.CLAMP_TO_EDGE,[sc]:n.MIRRORED_REPEAT},Tt={[Mn]:n.NEAREST,[x0]:n.NEAREST_MIPMAP_NEAREST,[fo]:n.NEAREST_MIPMAP_LINEAR,[Xn]:n.LINEAR,[qa]:n.LINEAR_MIPMAP_NEAREST,[us]:n.LINEAR_MIPMAP_LINEAR},Rt={[b0]:n.NEVER,[R0]:n.ALWAYS,[E0]:n.LESS,[Sp]:n.LEQUAL,[w0]:n.EQUAL,[C0]:n.GEQUAL,[T0]:n.GREATER,[A0]:n.NOTEQUAL};function kt(b,M){if(M.type===$n&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Xn||M.magFilter===qa||M.magFilter===fo||M.magFilter===us||M.minFilter===Xn||M.minFilter===qa||M.minFilter===fo||M.minFilter===us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,_t[M.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,_t[M.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,_t[M.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,Tt[M.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,Tt[M.minFilter]),M.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Rt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Mn||M.minFilter!==fo&&M.minFilter!==us||M.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function oe(b,M){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",R));const W=M.source;let Y=f.get(W);Y===void 0&&(Y={},f.set(W,Y));const $=K(M);if($!==b.__cacheKey){Y[$]===void 0&&(Y[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Y[$].usedTimes++;const gt=Y[b.__cacheKey];gt!==void 0&&(Y[b.__cacheKey].usedTimes--,gt.usedTimes===0&&E(M)),b.__cacheKey=$,b.__webglTexture=Y[$].texture}return U}function rt(b,M,U){let W=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(W=n.TEXTURE_3D);const Y=oe(b,M),$=M.source;e.bindTexture(W,b.__webglTexture,n.TEXTURE0+U);const gt=i.get($);if($.version!==gt.__version||Y===!0){e.activeTexture(n.TEXTURE0+U);const ct=ie.getPrimaries(ie.workingColorSpace),vt=M.colorSpace===Pi?null:ie.getPrimaries(M.colorSpace),Bt=M.colorSpace===Pi||ct===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let ht=_(M.image,!1,s.maxTextureSize);ht=lt(M,ht);const St=r.convert(M.format,M.colorSpace),Ut=r.convert(M.type);let zt=y(M.internalFormat,St,Ut,M.colorSpace,M.isVideoTexture);kt(W,M);let xt;const Vt=M.mipmaps,Xt=M.isVideoTexture!==!0,ve=gt.__version===void 0||Y===!0,B=$.dataReady,bt=F(M,ht);if(M.isDepthTexture)zt=x(M.format===ar,M.type),ve&&(Xt?e.texStorage2D(n.TEXTURE_2D,1,zt,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,zt,ht.width,ht.height,0,St,Ut,null));else if(M.isDataTexture)if(Vt.length>0){Xt&&ve&&e.texStorage2D(n.TEXTURE_2D,bt,zt,Vt[0].width,Vt[0].height);for(let nt=0,ot=Vt.length;nt<ot;nt++)xt=Vt[nt],Xt?B&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,xt.width,xt.height,St,Ut,xt.data):e.texImage2D(n.TEXTURE_2D,nt,zt,xt.width,xt.height,0,St,Ut,xt.data);M.generateMipmaps=!1}else Xt?(ve&&e.texStorage2D(n.TEXTURE_2D,bt,zt,ht.width,ht.height),B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht.width,ht.height,St,Ut,ht.data)):e.texImage2D(n.TEXTURE_2D,0,zt,ht.width,ht.height,0,St,Ut,ht.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xt&&ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,zt,Vt[0].width,Vt[0].height,ht.depth);for(let nt=0,ot=Vt.length;nt<ot;nt++)if(xt=Vt[nt],M.format!==Nn)if(St!==null)if(Xt){if(B)if(M.layerUpdates.size>0){const At=df(xt.width,xt.height,M.format,M.type);for(const Et of M.layerUpdates){const jt=xt.data.subarray(Et*At/xt.data.BYTES_PER_ELEMENT,(Et+1)*At/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,Et,xt.width,xt.height,1,St,jt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,xt.width,xt.height,ht.depth,St,xt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,zt,xt.width,xt.height,ht.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,xt.width,xt.height,ht.depth,St,Ut,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,zt,xt.width,xt.height,ht.depth,0,St,Ut,xt.data)}else{Xt&&ve&&e.texStorage2D(n.TEXTURE_2D,bt,zt,Vt[0].width,Vt[0].height);for(let nt=0,ot=Vt.length;nt<ot;nt++)xt=Vt[nt],M.format!==Nn?St!==null?Xt?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,xt.width,xt.height,St,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,zt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?B&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,xt.width,xt.height,St,Ut,xt.data):e.texImage2D(n.TEXTURE_2D,nt,zt,xt.width,xt.height,0,St,Ut,xt.data)}else if(M.isDataArrayTexture)if(Xt){if(ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,zt,ht.width,ht.height,ht.depth),B)if(M.layerUpdates.size>0){const nt=df(ht.width,ht.height,M.format,M.type);for(const ot of M.layerUpdates){const At=ht.data.subarray(ot*nt/ht.data.BYTES_PER_ELEMENT,(ot+1)*nt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ot,ht.width,ht.height,1,St,Ut,At)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,St,Ut,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,zt,ht.width,ht.height,ht.depth,0,St,Ut,ht.data);else if(M.isData3DTexture)Xt?(ve&&e.texStorage3D(n.TEXTURE_3D,bt,zt,ht.width,ht.height,ht.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,St,Ut,ht.data)):e.texImage3D(n.TEXTURE_3D,0,zt,ht.width,ht.height,ht.depth,0,St,Ut,ht.data);else if(M.isFramebufferTexture){if(ve)if(Xt)e.texStorage2D(n.TEXTURE_2D,bt,zt,ht.width,ht.height);else{let nt=ht.width,ot=ht.height;for(let At=0;At<bt;At++)e.texImage2D(n.TEXTURE_2D,At,zt,nt,ot,0,St,Ut,null),nt>>=1,ot>>=1}}else if(Vt.length>0){if(Xt&&ve){const nt=Q(Vt[0]);e.texStorage2D(n.TEXTURE_2D,bt,zt,nt.width,nt.height)}for(let nt=0,ot=Vt.length;nt<ot;nt++)xt=Vt[nt],Xt?B&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,St,Ut,xt):e.texImage2D(n.TEXTURE_2D,nt,zt,St,Ut,xt);M.generateMipmaps=!1}else if(Xt){if(ve){const nt=Q(ht);e.texStorage2D(n.TEXTURE_2D,bt,zt,nt.width,nt.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,Ut,ht)}else e.texImage2D(n.TEXTURE_2D,0,zt,St,Ut,ht);g(M)&&p(W),gt.__version=$.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function pt(b,M,U){if(M.image.length!==6)return;const W=oe(b,M),Y=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+U);const $=i.get(Y);if(Y.version!==$.__version||W===!0){e.activeTexture(n.TEXTURE0+U);const gt=ie.getPrimaries(ie.workingColorSpace),ct=M.colorSpace===Pi?null:ie.getPrimaries(M.colorSpace),vt=M.colorSpace===Pi||gt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Bt=M.isCompressedTexture||M.image[0].isCompressedTexture,ht=M.image[0]&&M.image[0].isDataTexture,St=[];for(let ot=0;ot<6;ot++)!Bt&&!ht?St[ot]=_(M.image[ot],!0,s.maxCubemapSize):St[ot]=ht?M.image[ot].image:M.image[ot],St[ot]=lt(M,St[ot]);const Ut=St[0],zt=r.convert(M.format,M.colorSpace),xt=r.convert(M.type),Vt=y(M.internalFormat,zt,xt,M.colorSpace),Xt=M.isVideoTexture!==!0,ve=$.__version===void 0||W===!0,B=Y.dataReady;let bt=F(M,Ut);kt(n.TEXTURE_CUBE_MAP,M);let nt;if(Bt){Xt&&ve&&e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,Vt,Ut.width,Ut.height);for(let ot=0;ot<6;ot++){nt=St[ot].mipmaps;for(let At=0;At<nt.length;At++){const Et=nt[At];M.format!==Nn?zt!==null?Xt?B&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,0,0,Et.width,Et.height,zt,Et.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,Vt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,0,0,Et.width,Et.height,zt,xt,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,Vt,Et.width,Et.height,0,zt,xt,Et.data)}}}else{if(nt=M.mipmaps,Xt&&ve){nt.length>0&&bt++;const ot=Q(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,Vt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(ht){Xt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,St[ot].width,St[ot].height,zt,xt,St[ot].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Vt,St[ot].width,St[ot].height,0,zt,xt,St[ot].data);for(let At=0;At<nt.length;At++){const jt=nt[At].image[ot].image;Xt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,0,0,jt.width,jt.height,zt,xt,jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,Vt,jt.width,jt.height,0,zt,xt,jt.data)}}else{Xt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,zt,xt,St[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Vt,zt,xt,St[ot]);for(let At=0;At<nt.length;At++){const Et=nt[At];Xt?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,0,0,zt,xt,Et.image[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,Vt,zt,xt,Et.image[ot])}}}g(M)&&p(n.TEXTURE_CUBE_MAP),$.__version=Y.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Ct(b,M,U,W,Y,$){const gt=r.convert(U.format,U.colorSpace),ct=r.convert(U.type),vt=y(U.internalFormat,gt,ct,U.colorSpace),Bt=i.get(M),ht=i.get(U);if(ht.__renderTarget=M,!Bt.__hasExternalTextures){const St=Math.max(1,M.width>>$),Ut=Math.max(1,M.height>>$);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?e.texImage3D(Y,$,vt,St,Ut,M.depth,0,gt,ct,null):e.texImage2D(Y,$,vt,St,Ut,0,gt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),tt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Y,ht.__webglTexture,0,J(M)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Y,ht.__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Mt(b,M,U){if(n.bindRenderbuffer(n.RENDERBUFFER,b),M.depthBuffer){const W=M.depthTexture,Y=W&&W.isDepthTexture?W.type:null,$=x(M.stencilBuffer,Y),gt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=J(M);tt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,$,M.width,M.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,$,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,$,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,b)}else{const W=M.textures;for(let Y=0;Y<W.length;Y++){const $=W[Y],gt=r.convert($.format,$.colorSpace),ct=r.convert($.type),vt=y($.internalFormat,gt,ct,$.colorSpace),Bt=J(M);U&&tt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,vt,M.width,M.height):tt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Bt,vt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,vt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ot(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(M.depthTexture);W.__renderTarget=M,(!W.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),st(M.depthTexture,0);const Y=W.__webglTexture,$=J(M);if(M.depthTexture.format===er)tt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(M.depthTexture.format===ar)tt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ht(b){const M=i.get(b),U=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const W=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),W){const Y=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,W.removeEventListener("dispose",Y)};W.addEventListener("dispose",Y),M.__depthDisposeCallback=Y}M.__boundDepthTexture=W}if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Ot(M.__webglFramebuffer,b)}else if(U){M.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[W]),M.__webglDepthbuffer[W]===void 0)M.__webglDepthbuffer[W]=n.createRenderbuffer(),Mt(M.__webglDepthbuffer[W],b,!1);else{const Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,$)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Mt(M.__webglDepthbuffer,b,!1);else{const W=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,Y)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(b,M,U){const W=i.get(b);M!==void 0&&Ct(W.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Ht(b)}function be(b){const M=b.texture,U=i.get(b),W=i.get(M);b.addEventListener("dispose",C);const Y=b.textures,$=b.isWebGLCubeRenderTarget===!0,gt=Y.length>1;if(gt||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=M.version,o.memory.textures++),$){U.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer[ct]=[];for(let vt=0;vt<M.mipmaps.length;vt++)U.__webglFramebuffer[ct][vt]=n.createFramebuffer()}else U.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer=[];for(let ct=0;ct<M.mipmaps.length;ct++)U.__webglFramebuffer[ct]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(gt)for(let ct=0,vt=Y.length;ct<vt;ct++){const Bt=i.get(Y[ct]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&tt(b)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ct=0;ct<Y.length;ct++){const vt=Y[ct];U.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ct]);const Bt=r.convert(vt.format,vt.colorSpace),ht=r.convert(vt.type),St=y(vt.internalFormat,Bt,ht,vt.colorSpace,b.isXRRenderTarget===!0),Ut=J(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,St,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,U.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Mt(U.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),kt(n.TEXTURE_CUBE_MAP,M);for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)Ct(U.__webglFramebuffer[ct][vt],b,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,vt);else Ct(U.__webglFramebuffer[ct],b,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);g(M)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let ct=0,vt=Y.length;ct<vt;ct++){const Bt=Y[ct],ht=i.get(Bt);e.bindTexture(n.TEXTURE_2D,ht.__webglTexture),kt(n.TEXTURE_2D,Bt),Ct(U.__webglFramebuffer,b,Bt,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),g(Bt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ct=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,W.__webglTexture),kt(ct,M),M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)Ct(U.__webglFramebuffer[vt],b,M,n.COLOR_ATTACHMENT0,ct,vt);else Ct(U.__webglFramebuffer,b,M,n.COLOR_ATTACHMENT0,ct,0);g(M)&&p(ct),e.unbindTexture()}b.depthBuffer&&Ht(b)}function P(b){const M=b.textures;for(let U=0,W=M.length;U<W;U++){const Y=M[U];if(g(Y)){const $=S(b),gt=i.get(Y).__webglTexture;e.bindTexture($,gt),p($),e.unbindTexture()}}}const O=[],T=[];function at(b){if(b.samples>0){if(tt(b)===!1){const M=b.textures,U=b.width,W=b.height;let Y=n.COLOR_BUFFER_BIT;const $=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(b),ct=M.length>1;if(ct)for(let vt=0;vt<M.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let vt=0;vt<M.length;vt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[vt]);const Bt=i.get(M[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Bt,0)}n.blitFramebuffer(0,0,U,W,0,0,U,W,Y,n.NEAREST),l===!0&&(O.length=0,T.length=0,O.push(n.COLOR_ATTACHMENT0+vt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(O.push($),T.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,O))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let vt=0;vt<M.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,gt.__webglColorRenderbuffer[vt]);const Bt=i.get(M[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,Bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const M=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function J(b){return Math.min(s.maxSamples,b.samples)}function tt(b){const M=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function it(b){const M=o.render.frame;u.get(b)!==M&&(u.set(b,M),b.update())}function lt(b,M){const U=b.colorSpace,W=b.format,Y=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==cr&&U!==Pi&&(ie.getTransfer(U)===de?(W!==Nn||Y!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),M}function Q(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=L,this.setTexture2D=st,this.setTexture2DArray=Z,this.setTexture3D=et,this.setTextureCube=X,this.rebindTextures=Wt,this.setupRenderTarget=be,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=tt}function YS(n,t){function e(i,s=Pi){let r;const o=ie.getTransfer(s);if(i===pi)return n.UNSIGNED_BYTE;if(i===iu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===su)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fp)return n.BYTE;if(i===dp)return n.SHORT;if(i===jr)return n.UNSIGNED_SHORT;if(i===nu)return n.INT;if(i===ms)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===so)return n.HALF_FLOAT;if(i===mp)return n.ALPHA;if(i===gp)return n.RGB;if(i===Nn)return n.RGBA;if(i===_p)return n.LUMINANCE;if(i===vp)return n.LUMINANCE_ALPHA;if(i===er)return n.DEPTH_COMPONENT;if(i===ar)return n.DEPTH_STENCIL;if(i===ru)return n.RED;if(i===ou)return n.RED_INTEGER;if(i===xp)return n.RG;if(i===au)return n.RG_INTEGER;if(i===lu)return n.RGBA_INTEGER;if(i===$o||i===Yo||i===jo||i===qo)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rc||i===oc||i===ac||i===lc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===oc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cc||i===uc||i===hc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===cc||i===uc)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===hc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fc||i===dc||i===pc||i===mc||i===gc||i===_c||i===vc||i===xc||i===Mc||i===yc||i===Sc||i===bc||i===Ec||i===wc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_c)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ec)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ko||i===Tc||i===Ac)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ko)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mp||i===Cc||i===Rc||i===Pc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ko)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class jS extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class en extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qS={type:"move"};class Sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new en;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const KS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class JS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new mi({vertexShader:KS,fragmentShader:ZS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new ro(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QS extends Ms{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null;const _=new JS,g=e.getContextAttributes();let p=null,S=null;const y=[],x=[],F=new Nt;let R=null;const C=new En;C.viewport=new Te;const I=new En;I.viewport=new Te;const E=[C,I],v=new jS;let A=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let pt=y[rt];return pt===void 0&&(pt=new Sl,y[rt]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(rt){let pt=y[rt];return pt===void 0&&(pt=new Sl,y[rt]=pt),pt.getGripSpace()},this.getHand=function(rt){let pt=y[rt];return pt===void 0&&(pt=new Sl,y[rt]=pt),pt.getHandSpace()};function z(rt){const pt=x.indexOf(rt.inputSource);if(pt===-1)return;const Ct=y[pt];Ct!==void 0&&(Ct.update(rt.inputSource,rt.frame,c||o),Ct.dispatchEvent({type:rt.type,data:rt.inputSource}))}function K(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",st);for(let rt=0;rt<y.length;rt++){const pt=x[rt];pt!==null&&(x[rt]=null,y[rt].disconnect(pt))}A=null,L=null,_.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,S=null,oe.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){r=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(rt){c=rt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(rt){if(s=rt,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",K),s.addEventListener("inputsourceschange",st),g.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){const pt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new gs(d.framebufferWidth,d.framebufferHeight,{format:Nn,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let pt=null,Ct=null,Mt=null;g.depth&&(Mt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=g.stencil?ar:er,Ct=g.stencil?or:ms);const Ot={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Ot),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new gs(f.textureWidth,f.textureHeight,{format:Nn,type:pi,depthTexture:new Np(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function st(rt){for(let pt=0;pt<rt.removed.length;pt++){const Ct=rt.removed[pt],Mt=x.indexOf(Ct);Mt>=0&&(x[Mt]=null,y[Mt].disconnect(Ct))}for(let pt=0;pt<rt.added.length;pt++){const Ct=rt.added[pt];let Mt=x.indexOf(Ct);if(Mt===-1){for(let Ht=0;Ht<y.length;Ht++)if(Ht>=x.length){x.push(Ct),Mt=Ht;break}else if(x[Ht]===null){x[Ht]=Ct,Mt=Ht;break}if(Mt===-1)break}const Ot=y[Mt];Ot&&Ot.connect(Ct)}}const Z=new k,et=new k;function X(rt,pt,Ct){Z.setFromMatrixPosition(pt.matrixWorld),et.setFromMatrixPosition(Ct.matrixWorld);const Mt=Z.distanceTo(et),Ot=pt.projectionMatrix.elements,Ht=Ct.projectionMatrix.elements,Wt=Ot[14]/(Ot[10]-1),be=Ot[14]/(Ot[10]+1),P=(Ot[9]+1)/Ot[5],O=(Ot[9]-1)/Ot[5],T=(Ot[8]-1)/Ot[0],at=(Ht[8]+1)/Ht[0],J=Wt*T,tt=Wt*at,it=Mt/(-T+at),lt=it*-T;if(pt.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(lt),rt.translateZ(it),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),Ot[10]===-1)rt.projectionMatrix.copy(pt.projectionMatrix),rt.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Q=Wt+it,b=be+it,M=J-lt,U=tt+(Mt-lt),W=P*be/b*Q,Y=O*be/b*Q;rt.projectionMatrix.makePerspective(M,U,W,Y,Q,b),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function _t(rt,pt){pt===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(pt.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(s===null)return;let pt=rt.near,Ct=rt.far;_.texture!==null&&(_.depthNear>0&&(pt=_.depthNear),_.depthFar>0&&(Ct=_.depthFar)),v.near=I.near=C.near=pt,v.far=I.far=C.far=Ct,(A!==v.near||L!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,L=v.far),C.layers.mask=rt.layers.mask|2,I.layers.mask=rt.layers.mask|4,v.layers.mask=C.layers.mask|I.layers.mask;const Mt=rt.parent,Ot=v.cameras;_t(v,Mt);for(let Ht=0;Ht<Ot.length;Ht++)_t(Ot[Ht],Mt);Ot.length===2?X(v,C,I):v.projectionMatrix.copy(C.projectionMatrix),Tt(rt,v,Mt)};function Tt(rt,pt,Ct){Ct===null?rt.matrix.copy(pt.matrixWorld):(rt.matrix.copy(Ct.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(pt.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(pt.projectionMatrix),rt.projectionMatrixInverse.copy(pt.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=qr*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(rt){l=rt,f!==null&&(f.fixedFoveation=rt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=rt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let Rt=null;function kt(rt,pt){if(u=pt.getViewerPose(c||o),m=pt,u!==null){const Ct=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Mt=!1;Ct.length!==v.cameras.length&&(v.cameras.length=0,Mt=!0);for(let Ht=0;Ht<Ct.length;Ht++){const Wt=Ct[Ht];let be=null;if(d!==null)be=d.getViewport(Wt);else{const O=h.getViewSubImage(f,Wt);be=O.viewport,Ht===0&&(t.setRenderTargetTextures(S,O.colorTexture,f.ignoreDepthValues?void 0:O.depthStencilTexture),t.setRenderTarget(S))}let P=E[Ht];P===void 0&&(P=new En,P.layers.enable(Ht),P.viewport=new Te,E[Ht]=P),P.matrix.fromArray(Wt.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(Wt.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(be.x,be.y,be.width,be.height),Ht===0&&(v.matrix.copy(P.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Mt===!0&&v.cameras.push(P)}const Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const Ht=h.getDepthInformation(Ct[0]);Ht&&Ht.isValid&&Ht.texture&&_.init(t,Ht,s.renderState)}}for(let Ct=0;Ct<y.length;Ct++){const Mt=x[Ct],Ot=y[Ct];Mt!==null&&Ot!==void 0&&Ot.update(Mt,pt,c||o)}Rt&&Rt(rt,pt),pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pt}),m=null}const oe=new Ip;oe.setAnimationLoop(kt),this.setAnimationLoop=function(rt){Rt=rt},this.dispose=function(){}}}const es=new qn,tb=new ue;function eb(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Rp(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,S,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===nn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===nn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const S=t.get(p),y=S.envMap,x=S.envMapRotation;y&&(g.envMap.value=y,es.copy(x),es.x*=-1,es.y*=-1,es.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),g.envMapRotation.value.setFromMatrix4(tb.makeRotationFromEuler(es)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,S,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function nb(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const x=y.program;i.uniformBlockBinding(S,x)}function c(S,y){let x=s[S.id];x===void 0&&(m(S),x=u(S),s[S.id]=x,S.addEventListener("dispose",g));const F=y.program;i.updateUBOMapping(S,F);const R=t.render.frame;r[S.id]!==R&&(f(S),r[S.id]=R)}function u(S){const y=h();S.__bindingPointIndex=y;const x=n.createBuffer(),F=S.__size,R=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,F,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=s[S.id],x=S.uniforms,F=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let R=0,C=x.length;R<C;R++){const I=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,v=I.length;E<v;E++){const A=I[E];if(d(A,R,E,F)===!0){const L=A.__offset,z=Array.isArray(A.value)?A.value:[A.value];let K=0;for(let st=0;st<z.length;st++){const Z=z[st],et=_(Z);typeof Z=="number"||typeof Z=="boolean"?(A.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,L+K,A.__data)):Z.isMatrix3?(A.__data[0]=Z.elements[0],A.__data[1]=Z.elements[1],A.__data[2]=Z.elements[2],A.__data[3]=0,A.__data[4]=Z.elements[3],A.__data[5]=Z.elements[4],A.__data[6]=Z.elements[5],A.__data[7]=0,A.__data[8]=Z.elements[6],A.__data[9]=Z.elements[7],A.__data[10]=Z.elements[8],A.__data[11]=0):(Z.toArray(A.__data,K),K+=et.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,y,x,F){const R=S.value,C=y+"_"+x;if(F[C]===void 0)return typeof R=="number"||typeof R=="boolean"?F[C]=R:F[C]=R.clone(),!0;{const I=F[C];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return F[C]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function m(S){const y=S.uniforms;let x=0;const F=16;for(let C=0,I=y.length;C<I;C++){const E=Array.isArray(y[C])?y[C]:[y[C]];for(let v=0,A=E.length;v<A;v++){const L=E[v],z=Array.isArray(L.value)?L.value:[L.value];for(let K=0,st=z.length;K<st;K++){const Z=z[K],et=_(Z),X=x%F,_t=X%et.boundary,Tt=X+_t;x+=_t,Tt!==0&&F-Tt<et.storage&&(x+=F-Tt),L.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=et.storage}}}const R=x%F;return R>0&&(x+=F-R),S.__size=x,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function g(S){const y=S.target;y.removeEventListener("dispose",g);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class ib{constructor(t={}){const{canvas:e=$0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=Ni,this.toneMappingExposure=1;const x=this;let F=!1,R=0,C=0,I=null,E=-1,v=null;const A=new Te,L=new Te;let z=null;const K=new Yt(0);let st=0,Z=e.width,et=e.height,X=1,_t=null,Tt=null;const Rt=new Te(0,0,Z,et),kt=new Te(0,0,Z,et);let oe=!1;const rt=new hu;let pt=!1,Ct=!1;const Mt=new ue,Ot=new ue,Ht=new k,Wt=new Te,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let P=!1;function O(){return I===null?X:1}let T=i;function at(w,H){return e.getContext(w,H)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${eu}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",Et,!1),T===null){const H="webgl2";if(T=at(H,w),T===null)throw at(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let J,tt,it,lt,Q,b,M,U,W,Y,$,gt,ct,vt,Bt,ht,St,Ut,zt,xt,Vt,Xt,ve,B;function bt(){J=new ly(T),J.init(),Xt=new YS(T,J),tt=new ny(T,J,t,Xt),it=new WS(T,J),tt.reverseDepthBuffer&&f&&it.buffers.depth.setReversed(!0),lt=new hy(T),Q=new RS,b=new $S(T,J,it,Q,tt,Xt,lt),M=new sy(x),U=new ay(x),W=new vv(T),ve=new ty(T,W),Y=new cy(T,W,lt,ve),$=new dy(T,Y,W,lt),zt=new fy(T,tt,b),ht=new iy(Q),gt=new CS(x,M,U,J,tt,ve,ht),ct=new eb(x,Q),vt=new DS,Bt=new OS(J),Ut=new QM(x,M,U,it,$,d,l),St=new VS(x,$,tt),B=new nb(T,lt,tt,it),xt=new ey(T,J,lt),Vt=new uy(T,J,lt),lt.programs=gt.programs,x.capabilities=tt,x.extensions=J,x.properties=Q,x.renderLists=vt,x.shadowMap=St,x.state=it,x.info=lt}bt();const nt=new QS(x,T);this.xr=nt,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const w=J.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=J.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(Z,et,!1))},this.getSize=function(w){return w.set(Z,et)},this.setSize=function(w,H,j=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,et=H,e.width=Math.floor(w*X),e.height=Math.floor(H*X),j===!0&&(e.style.width=w+"px",e.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(Z*X,et*X).floor()},this.setDrawingBufferSize=function(w,H,j){Z=w,et=H,X=j,e.width=Math.floor(w*j),e.height=Math.floor(H*j),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(Rt)},this.setViewport=function(w,H,j,q){w.isVector4?Rt.set(w.x,w.y,w.z,w.w):Rt.set(w,H,j,q),it.viewport(A.copy(Rt).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(kt)},this.setScissor=function(w,H,j,q){w.isVector4?kt.set(w.x,w.y,w.z,w.w):kt.set(w,H,j,q),it.scissor(L.copy(kt).multiplyScalar(X).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(w){it.setScissorTest(oe=w)},this.setOpaqueSort=function(w){_t=w},this.setTransparentSort=function(w){Tt=w},this.getClearColor=function(w){return w.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(w=!0,H=!0,j=!0){let q=0;if(w){let V=!1;if(I!==null){const mt=I.texture.format;V=mt===lu||mt===au||mt===ou}if(V){const mt=I.texture.type,wt=mt===pi||mt===ms||mt===jr||mt===or||mt===iu||mt===su,Pt=Ut.getClearColor(),Dt=Ut.getClearAlpha(),Gt=Pt.r,qt=Pt.g,Lt=Pt.b;wt?(m[0]=Gt,m[1]=qt,m[2]=Lt,m[3]=Dt,T.clearBufferuiv(T.COLOR,0,m)):(_[0]=Gt,_[1]=qt,_[2]=Lt,_[3]=Dt,T.clearBufferiv(T.COLOR,0,_))}else q|=T.COLOR_BUFFER_BIT}H&&(q|=T.DEPTH_BUFFER_BIT),j&&(q|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),vt.dispose(),Bt.dispose(),Q.dispose(),M.dispose(),U.dispose(),$.dispose(),ve.dispose(),B.dispose(),gt.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Su),nt.removeEventListener("sessionend",bu),Gi.stop()};function ot(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const w=lt.autoReset,H=St.enabled,j=St.autoUpdate,q=St.needsUpdate,V=St.type;bt(),lt.autoReset=w,St.enabled=H,St.autoUpdate=j,St.needsUpdate=q,St.type=V}function Et(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function jt(w){const H=w.target;H.removeEventListener("dispose",jt),we(H)}function we(w){Ve(w),Q.remove(w)}function Ve(w){const H=Q.get(w).programs;H!==void 0&&(H.forEach(function(j){gt.releaseProgram(j)}),w.isShaderMaterial&&gt.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,j,q,V,mt){H===null&&(H=be);const wt=V.isMesh&&V.matrixWorld.determinant()<0,Pt=Kp(w,H,j,q,V);it.setMaterial(q,wt);let Dt=j.index,Gt=1;if(q.wireframe===!0){if(Dt=Y.getWireframeAttribute(j),Dt===void 0)return;Gt=2}const qt=j.drawRange,Lt=j.attributes.position;let se=qt.start*Gt,xe=(qt.start+qt.count)*Gt;mt!==null&&(se=Math.max(se,mt.start*Gt),xe=Math.min(xe,(mt.start+mt.count)*Gt)),Dt!==null?(se=Math.max(se,0),xe=Math.min(xe,Dt.count)):Lt!=null&&(se=Math.max(se,0),xe=Math.min(xe,Lt.count));const ye=xe-se;if(ye<0||ye===1/0)return;ve.setup(V,q,Pt,j,Dt);let on,ae=xt;if(Dt!==null&&(on=W.get(Dt),ae=Vt,ae.setIndex(on)),V.isMesh)q.wireframe===!0?(it.setLineWidth(q.wireframeLinewidth*O()),ae.setMode(T.LINES)):ae.setMode(T.TRIANGLES);else if(V.isLine){let It=q.linewidth;It===void 0&&(It=1),it.setLineWidth(It*O()),V.isLineSegments?ae.setMode(T.LINES):V.isLineLoop?ae.setMode(T.LINE_LOOP):ae.setMode(T.LINE_STRIP)}else V.isPoints?ae.setMode(T.POINTS):V.isSprite&&ae.setMode(T.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ae.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))ae.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const It=V._multiDrawStarts,Zn=V._multiDrawCounts,le=V._multiDrawCount,Cn=Dt?W.get(Dt).bytesPerElement:1,Ss=Q.get(q).currentProgram.getUniforms();for(let hn=0;hn<le;hn++)Ss.setValue(T,"_gl_DrawID",hn),ae.render(It[hn]/Cn,Zn[hn])}else if(V.isInstancedMesh)ae.renderInstances(se,ye,V.count);else if(j.isInstancedBufferGeometry){const It=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Zn=Math.min(j.instanceCount,It);ae.renderInstances(se,ye,Zn)}else ae.render(se,ye)};function he(w,H,j){w.transparent===!0&&w.side===gn&&w.forceSinglePass===!1?(w.side=nn,w.needsUpdate=!0,ao(w,H,j),w.side=ki,w.needsUpdate=!0,ao(w,H,j),w.side=gn):ao(w,H,j)}this.compile=function(w,H,j=null){j===null&&(j=w),p=Bt.get(j),p.init(H),y.push(p),j.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),w!==j&&w.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const q=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const mt=V.material;if(mt)if(Array.isArray(mt))for(let wt=0;wt<mt.length;wt++){const Pt=mt[wt];he(Pt,j,V),q.add(Pt)}else he(mt,j,V),q.add(mt)}),y.pop(),p=null,q},this.compileAsync=function(w,H,j=null){const q=this.compile(w,H,j);return new Promise(V=>{function mt(){if(q.forEach(function(wt){Q.get(wt).currentProgram.isReady()&&q.delete(wt)}),q.size===0){V(w);return}setTimeout(mt,10)}J.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let An=null;function Kn(w){An&&An(w)}function Su(){Gi.stop()}function bu(){Gi.start()}const Gi=new Ip;Gi.setAnimationLoop(Kn),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(w){An=w,nt.setAnimationLoop(w),w===null?Gi.stop():Gi.start()},nt.addEventListener("sessionstart",Su),nt.addEventListener("sessionend",bu),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(H),H=nt.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,H,I),p=Bt.get(w,y.length),p.init(H),y.push(p),Ot.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),rt.setFromProjectionMatrix(Ot),Ct=this.localClippingEnabled,pt=ht.init(this.clippingPlanes,Ct),g=vt.get(w,S.length),g.init(),S.push(g),nt.enabled===!0&&nt.isPresenting===!0){const mt=x.xr.getDepthSensingMesh();mt!==null&&Na(mt,H,-1/0,x.sortObjects)}Na(w,H,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(_t,Tt),P=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,P&&Ut.addToRenderList(g,w),this.info.render.frame++,pt===!0&&ht.beginShadows();const j=p.state.shadowsArray;St.render(j,w,H),pt===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=g.opaque,V=g.transmissive;if(p.setupLights(),H.isArrayCamera){const mt=H.cameras;if(V.length>0)for(let wt=0,Pt=mt.length;wt<Pt;wt++){const Dt=mt[wt];wu(q,V,w,Dt)}P&&Ut.render(w);for(let wt=0,Pt=mt.length;wt<Pt;wt++){const Dt=mt[wt];Eu(g,w,Dt,Dt.viewport)}}else V.length>0&&wu(q,V,w,H),P&&Ut.render(w),Eu(g,w,H);I!==null&&(b.updateMultisampleRenderTarget(I),b.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(x,w,H),ve.resetDefaultState(),E=-1,v=null,y.pop(),y.length>0?(p=y[y.length-1],pt===!0&&ht.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function Na(w,H,j,q){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||rt.intersectsSprite(w)){q&&Wt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ot);const wt=$.update(w),Pt=w.material;Pt.visible&&g.push(w,wt,Pt,j,Wt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||rt.intersectsObject(w))){const wt=$.update(w),Pt=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Wt.copy(w.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Wt.copy(wt.boundingSphere.center)),Wt.applyMatrix4(w.matrixWorld).applyMatrix4(Ot)),Array.isArray(Pt)){const Dt=wt.groups;for(let Gt=0,qt=Dt.length;Gt<qt;Gt++){const Lt=Dt[Gt],se=Pt[Lt.materialIndex];se&&se.visible&&g.push(w,wt,se,j,Wt.z,Lt)}}else Pt.visible&&g.push(w,wt,Pt,j,Wt.z,null)}}const mt=w.children;for(let wt=0,Pt=mt.length;wt<Pt;wt++)Na(mt[wt],H,j,q)}function Eu(w,H,j,q){const V=w.opaque,mt=w.transmissive,wt=w.transparent;p.setupLightsView(j),pt===!0&&ht.setGlobalState(x.clippingPlanes,j),q&&it.viewport(A.copy(q)),V.length>0&&oo(V,H,j),mt.length>0&&oo(mt,H,j),wt.length>0&&oo(wt,H,j),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function wu(w,H,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new gs(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?so:pi,minFilter:us,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const mt=p.state.transmissionRenderTarget[q.id],wt=q.viewport||A;mt.setSize(wt.z,wt.w);const Pt=x.getRenderTarget();x.setRenderTarget(mt),x.getClearColor(K),st=x.getClearAlpha(),st<1&&x.setClearColor(16777215,.5),x.clear(),P&&Ut.render(j);const Dt=x.toneMapping;x.toneMapping=Ni;const Gt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),pt===!0&&ht.setGlobalState(x.clippingPlanes,q),oo(w,j,q),b.updateMultisampleRenderTarget(mt),b.updateRenderTargetMipmap(mt),J.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Lt=0,se=H.length;Lt<se;Lt++){const xe=H[Lt],ye=xe.object,on=xe.geometry,ae=xe.material,It=xe.group;if(ae.side===gn&&ye.layers.test(q.layers)){const Zn=ae.side;ae.side=nn,ae.needsUpdate=!0,Tu(ye,j,q,on,ae,It),ae.side=Zn,ae.needsUpdate=!0,qt=!0}}qt===!0&&(b.updateMultisampleRenderTarget(mt),b.updateRenderTargetMipmap(mt))}x.setRenderTarget(Pt),x.setClearColor(K,st),Gt!==void 0&&(q.viewport=Gt),x.toneMapping=Dt}function oo(w,H,j){const q=H.isScene===!0?H.overrideMaterial:null;for(let V=0,mt=w.length;V<mt;V++){const wt=w[V],Pt=wt.object,Dt=wt.geometry,Gt=q===null?wt.material:q,qt=wt.group;Pt.layers.test(j.layers)&&Tu(Pt,H,j,Dt,Gt,qt)}}function Tu(w,H,j,q,V,mt){w.onBeforeRender(x,H,j,q,V,mt),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(x,H,j,q,w,mt),V.transparent===!0&&V.side===gn&&V.forceSinglePass===!1?(V.side=nn,V.needsUpdate=!0,x.renderBufferDirect(j,H,q,V,w,mt),V.side=ki,V.needsUpdate=!0,x.renderBufferDirect(j,H,q,V,w,mt),V.side=gn):x.renderBufferDirect(j,H,q,V,w,mt),w.onAfterRender(x,H,j,q,V,mt)}function ao(w,H,j){H.isScene!==!0&&(H=be);const q=Q.get(w),V=p.state.lights,mt=p.state.shadowsArray,wt=V.state.version,Pt=gt.getParameters(w,V.state,mt,H,j),Dt=gt.getProgramCacheKey(Pt);let Gt=q.programs;q.environment=w.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(w.isMeshStandardMaterial?U:M).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,Gt===void 0&&(w.addEventListener("dispose",jt),Gt=new Map,q.programs=Gt);let qt=Gt.get(Dt);if(qt!==void 0){if(q.currentProgram===qt&&q.lightsStateVersion===wt)return Cu(w,Pt),qt}else Pt.uniforms=gt.getUniforms(w),w.onBeforeCompile(Pt,x),qt=gt.acquireProgram(Pt,Dt),Gt.set(Dt,qt),q.uniforms=Pt.uniforms;const Lt=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Lt.clippingPlanes=ht.uniform),Cu(w,Pt),q.needsLights=Jp(w),q.lightsStateVersion=wt,q.needsLights&&(Lt.ambientLightColor.value=V.state.ambient,Lt.lightProbe.value=V.state.probe,Lt.directionalLights.value=V.state.directional,Lt.directionalLightShadows.value=V.state.directionalShadow,Lt.spotLights.value=V.state.spot,Lt.spotLightShadows.value=V.state.spotShadow,Lt.rectAreaLights.value=V.state.rectArea,Lt.ltc_1.value=V.state.rectAreaLTC1,Lt.ltc_2.value=V.state.rectAreaLTC2,Lt.pointLights.value=V.state.point,Lt.pointLightShadows.value=V.state.pointShadow,Lt.hemisphereLights.value=V.state.hemi,Lt.directionalShadowMap.value=V.state.directionalShadowMap,Lt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Lt.spotShadowMap.value=V.state.spotShadowMap,Lt.spotLightMatrix.value=V.state.spotLightMatrix,Lt.spotLightMap.value=V.state.spotLightMap,Lt.pointShadowMap.value=V.state.pointShadowMap,Lt.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=qt,q.uniformsList=null,qt}function Au(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=Zo.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function Cu(w,H){const j=Q.get(w);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function Kp(w,H,j,q,V){H.isScene!==!0&&(H=be),b.resetTextureUnits();const mt=H.fog,wt=q.isMeshStandardMaterial?H.environment:null,Pt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:cr,Dt=(q.isMeshStandardMaterial?U:M).get(q.envMap||wt),Gt=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,qt=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Lt=!!j.morphAttributes.position,se=!!j.morphAttributes.normal,xe=!!j.morphAttributes.color;let ye=Ni;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ye=x.toneMapping);const on=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ae=on!==void 0?on.length:0,It=Q.get(q),Zn=p.state.lights;if(pt===!0&&(Ct===!0||w!==v)){const yn=w===v&&q.id===E;ht.setState(q,w,yn)}let le=!1;q.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Zn.state.version||It.outputColorSpace!==Pt||V.isBatchedMesh&&It.batching===!1||!V.isBatchedMesh&&It.batching===!0||V.isBatchedMesh&&It.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&It.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&It.instancing===!1||!V.isInstancedMesh&&It.instancing===!0||V.isSkinnedMesh&&It.skinning===!1||!V.isSkinnedMesh&&It.skinning===!0||V.isInstancedMesh&&It.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&It.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&It.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&It.instancingMorph===!1&&V.morphTexture!==null||It.envMap!==Dt||q.fog===!0&&It.fog!==mt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==ht.numPlanes||It.numIntersection!==ht.numIntersection)||It.vertexAlphas!==Gt||It.vertexTangents!==qt||It.morphTargets!==Lt||It.morphNormals!==se||It.morphColors!==xe||It.toneMapping!==ye||It.morphTargetsCount!==ae)&&(le=!0):(le=!0,It.__version=q.version);let Cn=It.currentProgram;le===!0&&(Cn=ao(q,H,V));let Ss=!1,hn=!1,mr=!1;const Se=Cn.getUniforms(),Bn=It.uniforms;if(it.useProgram(Cn.program)&&(Ss=!0,hn=!0,mr=!0),q.id!==E&&(E=q.id,hn=!0),Ss||v!==w){it.buffers.depth.getReversed()?(Mt.copy(w.projectionMatrix),j0(Mt),q0(Mt),Se.setValue(T,"projectionMatrix",Mt)):Se.setValue(T,"projectionMatrix",w.projectionMatrix),Se.setValue(T,"viewMatrix",w.matrixWorldInverse);const _i=Se.map.cameraPosition;_i!==void 0&&_i.setValue(T,Ht.setFromMatrixPosition(w.matrixWorld)),tt.logarithmicDepthBuffer&&Se.setValue(T,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Se.setValue(T,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,hn=!0,mr=!0)}if(V.isSkinnedMesh){Se.setOptional(T,V,"bindMatrix"),Se.setOptional(T,V,"bindMatrixInverse");const yn=V.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Se.setValue(T,"boneTexture",yn.boneTexture,b))}V.isBatchedMesh&&(Se.setOptional(T,V,"batchingTexture"),Se.setValue(T,"batchingTexture",V._matricesTexture,b),Se.setOptional(T,V,"batchingIdTexture"),Se.setValue(T,"batchingIdTexture",V._indirectTexture,b),Se.setOptional(T,V,"batchingColorTexture"),V._colorsTexture!==null&&Se.setValue(T,"batchingColorTexture",V._colorsTexture,b));const gr=j.morphAttributes;if((gr.position!==void 0||gr.normal!==void 0||gr.color!==void 0)&&zt.update(V,j,Cn),(hn||It.receiveShadow!==V.receiveShadow)&&(It.receiveShadow=V.receiveShadow,Se.setValue(T,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Bn.envMap.value=Dt,Bn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&H.environment!==null&&(Bn.envMapIntensity.value=H.environmentIntensity),hn&&(Se.setValue(T,"toneMappingExposure",x.toneMappingExposure),It.needsLights&&Zp(Bn,mr),mt&&q.fog===!0&&ct.refreshFogUniforms(Bn,mt),ct.refreshMaterialUniforms(Bn,q,X,et,p.state.transmissionRenderTarget[w.id]),Zo.upload(T,Au(It),Bn,b)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Zo.upload(T,Au(It),Bn,b),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Se.setValue(T,"center",V.center),Se.setValue(T,"modelViewMatrix",V.modelViewMatrix),Se.setValue(T,"normalMatrix",V.normalMatrix),Se.setValue(T,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const yn=q.uniformsGroups;for(let _i=0,vi=yn.length;_i<vi;_i++){const Ru=yn[_i];B.update(Ru,Cn),B.bind(Ru,Cn)}}return Cn}function Zp(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Jp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,H,j){Q.get(w.texture).__webglTexture=H,Q.get(w.depthTexture).__webglTexture=j;const q=Q.get(w);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=j===void 0,q.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,H){const j=Q.get(w);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(w,H=0,j=0){I=w,R=H,C=j;let q=!0,V=null,mt=!1,wt=!1;if(w){const Dt=Q.get(w);if(Dt.__useDefaultFramebuffer!==void 0)it.bindFramebuffer(T.FRAMEBUFFER,null),q=!1;else if(Dt.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(Dt.__hasExternalTextures)b.rebindTextures(w,Q.get(w.texture).__webglTexture,Q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Lt=w.depthTexture;if(Dt.__boundDepthTexture!==Lt){if(Lt!==null&&Q.has(Lt)&&(w.width!==Lt.image.width||w.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const Gt=w.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(wt=!0);const qt=Q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qt[H])?V=qt[H][j]:V=qt[H],mt=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?V=Q.get(w).__webglMultisampledFramebuffer:Array.isArray(qt)?V=qt[j]:V=qt,A.copy(w.viewport),L.copy(w.scissor),z=w.scissorTest}else A.copy(Rt).multiplyScalar(X).floor(),L.copy(kt).multiplyScalar(X).floor(),z=oe;if(it.bindFramebuffer(T.FRAMEBUFFER,V)&&q&&it.drawBuffers(w,V),it.viewport(A),it.scissor(L),it.setScissorTest(z),mt){const Dt=Q.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+H,Dt.__webglTexture,j)}else if(wt){const Dt=Q.get(w.texture),Gt=H||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Dt.__webglTexture,j||0,Gt)}E=-1},this.readRenderTargetPixels=function(w,H,j,q,V,mt,wt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&wt!==void 0&&(Pt=Pt[wt]),Pt){it.bindFramebuffer(T.FRAMEBUFFER,Pt);try{const Dt=w.texture,Gt=Dt.format,qt=Dt.type;if(!tt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-q&&j>=0&&j<=w.height-V&&T.readPixels(H,j,q,V,Xt.convert(Gt),Xt.convert(qt),mt)}finally{const Dt=I!==null?Q.get(I).__webglFramebuffer:null;it.bindFramebuffer(T.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(w,H,j,q,V,mt,wt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&wt!==void 0&&(Pt=Pt[wt]),Pt){const Dt=w.texture,Gt=Dt.format,qt=Dt.type;if(!tt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=w.width-q&&j>=0&&j<=w.height-V){it.bindFramebuffer(T.FRAMEBUFFER,Pt);const Lt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Lt),T.bufferData(T.PIXEL_PACK_BUFFER,mt.byteLength,T.STREAM_READ),T.readPixels(H,j,q,V,Xt.convert(Gt),Xt.convert(qt),0);const se=I!==null?Q.get(I).__webglFramebuffer:null;it.bindFramebuffer(T.FRAMEBUFFER,se);const xe=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Y0(T,xe,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Lt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,mt),T.deleteBuffer(Lt),T.deleteSync(xe),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,H=null,j=0){w.isTexture!==!0&&(Cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1]);const q=Math.pow(2,-j),V=Math.floor(w.image.width*q),mt=Math.floor(w.image.height*q),wt=H!==null?H.x:0,Pt=H!==null?H.y:0;b.setTexture2D(w,0),T.copyTexSubImage2D(T.TEXTURE_2D,j,0,0,wt,Pt,V,mt),it.unbindTexture()},this.copyTextureToTexture=function(w,H,j=null,q=null,V=0){w.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1],H=arguments[2],V=arguments[3]||0,j=null);let mt,wt,Pt,Dt,Gt,qt,Lt,se,xe;const ye=w.isCompressedTexture?w.mipmaps[V]:w.image;j!==null?(mt=j.max.x-j.min.x,wt=j.max.y-j.min.y,Pt=j.isBox3?j.max.z-j.min.z:1,Dt=j.min.x,Gt=j.min.y,qt=j.isBox3?j.min.z:0):(mt=ye.width,wt=ye.height,Pt=ye.depth||1,Dt=0,Gt=0,qt=0),q!==null?(Lt=q.x,se=q.y,xe=q.z):(Lt=0,se=0,xe=0);const on=Xt.convert(H.format),ae=Xt.convert(H.type);let It;H.isData3DTexture?(b.setTexture3D(H,0),It=T.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(b.setTexture2DArray(H,0),It=T.TEXTURE_2D_ARRAY):(b.setTexture2D(H,0),It=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,H.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,H.unpackAlignment);const Zn=T.getParameter(T.UNPACK_ROW_LENGTH),le=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Cn=T.getParameter(T.UNPACK_SKIP_PIXELS),Ss=T.getParameter(T.UNPACK_SKIP_ROWS),hn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ye.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ye.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Dt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Gt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,qt);const mr=w.isDataArrayTexture||w.isData3DTexture,Se=H.isDataArrayTexture||H.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Bn=Q.get(w),gr=Q.get(H),yn=Q.get(Bn.__renderTarget),_i=Q.get(gr.__renderTarget);it.bindFramebuffer(T.READ_FRAMEBUFFER,yn.__webglFramebuffer),it.bindFramebuffer(T.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let vi=0;vi<Pt;vi++)mr&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Q.get(w).__webglTexture,V,qt+vi),w.isDepthTexture?(Se&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Q.get(H).__webglTexture,V,xe+vi),T.blitFramebuffer(Dt,Gt,mt,wt,Lt,se,mt,wt,T.DEPTH_BUFFER_BIT,T.NEAREST)):Se?T.copyTexSubImage3D(It,V,Lt,se,xe+vi,Dt,Gt,mt,wt):T.copyTexSubImage2D(It,V,Lt,se,xe+vi,Dt,Gt,mt,wt);it.bindFramebuffer(T.READ_FRAMEBUFFER,null),it.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Se?w.isDataTexture||w.isData3DTexture?T.texSubImage3D(It,V,Lt,se,xe,mt,wt,Pt,on,ae,ye.data):H.isCompressedArrayTexture?T.compressedTexSubImage3D(It,V,Lt,se,xe,mt,wt,Pt,on,ye.data):T.texSubImage3D(It,V,Lt,se,xe,mt,wt,Pt,on,ae,ye):w.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,V,Lt,se,mt,wt,on,ae,ye.data):w.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,V,Lt,se,ye.width,ye.height,on,ye.data):T.texSubImage2D(T.TEXTURE_2D,V,Lt,se,mt,wt,on,ae,ye);T.pixelStorei(T.UNPACK_ROW_LENGTH,Zn),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,le),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Cn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ss),T.pixelStorei(T.UNPACK_SKIP_IMAGES,hn),V===0&&H.generateMipmaps&&T.generateMipmap(It),it.unbindTexture()},this.copyTextureToTexture3D=function(w,H,j=null,q=null,V=0){return w.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,q=arguments[1]||null,w=arguments[2],H=arguments[3],V=arguments[4]||0),Cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,H,j,q,V)},this.initRenderTarget=function(w){Q.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),it.unbindTexture()},this.resetState=function(){R=0,C=0,I=null,it.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class du{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=i}clone(){return new du(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pf extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class sb extends qe{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Mn,u=Mn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mf extends On{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const zs=new ue,gf=new ue,Uo=[],_f=new ys,rb=new ue,br=new Kt,Er=new hr;class vf extends Kt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new mf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,rb)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ys),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,zs),_f.copy(t.boundingBox).applyMatrix4(zs),this.boundingBox.union(_f)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,zs),Er.copy(t.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(Er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(i),t.ray.intersectsSphere(Er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zs),gf.multiplyMatrices(i,zs),br.matrixWorld=gf,br.raycast(t,Uo);for(let o=0,a=Uo.length;o<a;o++){const l=Uo[o];l.instanceId=r,l.object=this,e.push(l)}Uo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new mf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new sb(new Float32Array(s*this.count),s,this.count,ru,$n));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class pu extends fr{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ha=new k,fa=new k,xf=new ue,wr=new Pa,No=new hr,bl=new k,Mf=new k;class zp extends Ne{constructor(t=new ze,e=new pu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ha.fromBufferAttribute(e,s-1),fa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ha.distanceTo(fa);t.setAttribute("lineDistance",new fe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),No.radius+=r,t.ray.intersectsSphere(No)===!1)return;xf.copy(s).invert(),wr.copy(t.ray).applyMatrix4(xf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=c){const p=u.getX(_),S=u.getX(_+1),y=Fo(this,t,wr,l,p,S);y&&e.push(y)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(d),p=Fo(this,t,wr,l,_,g);p&&e.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=c){const p=Fo(this,t,wr,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Fo(this,t,wr,l,m-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fo(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(ha.fromBufferAttribute(o,s),fa.fromBufferAttribute(o,r),e.distanceSqToSegment(ha,fa,bl,Mf)>i)return;bl.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(bl);if(!(l<t.near||l>t.far))return{distance:l,point:Mf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const yf=new k,Sf=new k;class ob extends zp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)yf.fromBufferAttribute(e,s),Sf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+yf.distanceTo(Sf);t.setAttribute("lineDistance",new fe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hp extends qe{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mu extends ze{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new k,u=new Nt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=i+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mu(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class gu extends ze{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let m=0;const _=[],g=i/2;let p=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new fe(h,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(d,2));function S(){const x=new k,F=new k;let R=0;const C=(e-t)/i;for(let I=0;I<=r;I++){const E=[],v=I/r,A=v*(e-t)+t;for(let L=0;L<=s;L++){const z=L/s,K=z*l+a,st=Math.sin(K),Z=Math.cos(K);F.x=A*st,F.y=-v*i+g,F.z=A*Z,h.push(F.x,F.y,F.z),x.set(st,C,Z).normalize(),f.push(x.x,x.y,x.z),d.push(z,1-v),E.push(m++)}_.push(E)}for(let I=0;I<s;I++)for(let E=0;E<r;E++){const v=_[E][I],A=_[E+1][I],L=_[E+1][I+1],z=_[E][I+1];(t>0||E!==0)&&(u.push(v,A,z),R+=3),(e>0||E!==r-1)&&(u.push(A,L,z),R+=3)}c.addGroup(p,R,0),p+=R}function y(x){const F=m,R=new Nt,C=new k;let I=0;const E=x===!0?t:e,v=x===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,g*v,0),f.push(0,v,0),d.push(.5,.5),m++;const A=m;for(let L=0;L<=s;L++){const K=L/s*l+a,st=Math.cos(K),Z=Math.sin(K);C.x=E*Z,C.y=g*v,C.z=E*st,h.push(C.x,C.y,C.z),f.push(0,v,0),R.x=st*.5+.5,R.y=Z*.5*v+.5,d.push(R.x,R.y),m++}for(let L=0;L<s;L++){const z=F+L,K=A+L;x===!0?u.push(K,K+1,z):u.push(K+1,K,z),I+=3}c.addGroup(p,I,x===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _u extends ze{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const y=new k,x=new k,F=new k;for(let R=0;R<e.length;R+=3)d(e[R+0],y),d(e[R+1],x),d(e[R+2],F),l(y,x,F,S)}function l(S,y,x,F){const R=F+1,C=[];for(let I=0;I<=R;I++){C[I]=[];const E=S.clone().lerp(x,I/R),v=y.clone().lerp(x,I/R),A=R-I;for(let L=0;L<=A;L++)L===0&&I===R?C[I][L]=E:C[I][L]=E.clone().lerp(v,L/A)}for(let I=0;I<R;I++)for(let E=0;E<2*(R-I)-1;E++){const v=Math.floor(E/2);E%2===0?(f(C[I][v+1]),f(C[I+1][v]),f(C[I][v])):(f(C[I][v+1]),f(C[I+1][v+1]),f(C[I+1][v]))}}function c(S){const y=new k;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(S),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function u(){const S=new k;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];const x=g(S)/2/Math.PI+.5,F=p(S)/Math.PI+.5;o.push(x,1-F)}m(),h()}function h(){for(let S=0;S<o.length;S+=6){const y=o[S+0],x=o[S+2],F=o[S+4],R=Math.max(y,x,F),C=Math.min(y,x,F);R>.9&&C<.1&&(y<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),F<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,y){const x=S*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function m(){const S=new k,y=new k,x=new k,F=new k,R=new Nt,C=new Nt,I=new Nt;for(let E=0,v=0;E<r.length;E+=9,v+=6){S.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),R.set(o[v+0],o[v+1]),C.set(o[v+2],o[v+3]),I.set(o[v+4],o[v+5]),F.copy(S).add(y).add(x).divideScalar(3);const A=g(F);_(R,v+0,S,A),_(C,v+2,y,A),_(I,v+4,x,A)}}function _(S,y,x,F){F<0&&S.x===1&&(o[y]=S.x-1),x.x===0&&x.z===0&&(o[y]=F/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _u(t.vertices,t.indices,t.radius,t.details)}}const ab={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Vp(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(i&&(r=fb(n,t,r,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(let m=e;m<s;m+=e)h=n[m],f=n[m+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Kr(r,o,e,a,l,d,0),o}};function Vp(n,t,e,i,s){let r,o;if(s===bb(n,t,e,i)>0)for(r=t;r<e;r+=i)o=bf(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=bf(r,n[r],n[r+1],o);return o&&La(o,o.next)&&(Jr(o),o=o.next),o}function _s(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(La(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Jr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Kr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&_b(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?cb(n,i,s,r):lb(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Jr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=ub(_s(n),t,e),Kr(n,t,e,i,s,r,2)):o===2&&hb(n,t,e,i,s,r):Kr(_s(n),t,e,i,s,r,1);break}}}function lb(n){const t=n.prev,e=n,i=n.next;if(Ee(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let m=i.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&$s(s,a,r,l,o,c,m.x,m.y)&&Ee(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function cb(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Ee(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,g=u>h?u>f?u:f:h>f?h:f,p=Ic(d,m,t,e,i),S=Ic(_,g,t,e,i);let y=n.prevZ,x=n.nextZ;for(;y&&y.z>=p&&x&&x.z<=S;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&$s(a,u,l,h,c,f,y.x,y.y)&&Ee(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&$s(a,u,l,h,c,f,x.x,x.y)&&Ee(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&$s(a,u,l,h,c,f,y.x,y.y)&&Ee(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=S;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&$s(a,u,l,h,c,f,x.x,x.y)&&Ee(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function ub(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!La(s,r)&&Gp(s,i,i.next,r)&&Zr(s,r)&&Zr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Jr(i),Jr(i.next),i=n=r),i=i.next}while(i!==n);return _s(i)}function hb(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Mb(o,a)){let l=Wp(o,a);o=_s(o,o.next),l=_s(l,l.next),Kr(o,t,e,i,s,r,0),Kr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function fb(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Vp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(xb(c));for(s.sort(db),r=0;r<s.length;r++)e=pb(s[r],e);return e}function db(n,t){return n.x-t.x}function pb(n,t){const e=mb(n,t);if(!e)return t;const i=Wp(e,n);return _s(i,i.next),_s(e,e.next)}function mb(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&$s(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Zr(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&gb(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function gb(n,t){return Ee(n.prev,n,t.prev)<0&&Ee(t.next,n,n.next)<0}function _b(n,t,e,i){let s=n;do s.z===0&&(s.z=Ic(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,vb(s)}function vb(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Ic(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function xb(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function $s(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Mb(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!yb(n,t)&&(Zr(n,t)&&Zr(t,n)&&Sb(n,t)&&(Ee(n.prev,n,t.prev)||Ee(n,t.prev,t))||La(n,t)&&Ee(n.prev,n,n.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function La(n,t){return n.x===t.x&&n.y===t.y}function Gp(n,t,e,i){const s=ko(Ee(n,t,e)),r=ko(Ee(n,t,i)),o=ko(Ee(e,i,n)),a=ko(Ee(e,i,t));return!!(s!==r&&o!==a||s===0&&Oo(n,e,t)||r===0&&Oo(n,i,t)||o===0&&Oo(e,n,i)||a===0&&Oo(e,t,i))}function Oo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ko(n){return n>0?1:n<0?-1:0}function yb(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Gp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Zr(n,t){return Ee(n.prev,n,n.next)<0?Ee(n,t,n.next)>=0&&Ee(n,n.prev,t)>=0:Ee(n,t,n.prev)<0||Ee(n,n.next,t)<0}function Sb(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Wp(n,t){const e=new Uc(n.i,n.x,n.y),i=new Uc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function bf(n,t,e,i){const s=new Uc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Jr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Uc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function bb(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Ia{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Ia.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Ef(t),wf(i,t);let o=t.length;e.forEach(Ef);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,wf(i,e[l]);const a=ab.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ef(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function wf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class vu extends _u{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vu(t.radius,t.detail)}}class xu extends ze{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=t;const f=(e-t)/s,d=new k,m=new Nt;for(let _=0;_<=s;_++){for(let g=0;g<=i;g++){const p=r+g/i*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,u.push(m.x,m.y)}h+=f}for(let _=0;_<s;_++){const g=_*(i+1);for(let p=0;p<i;p++){const S=p+g,y=S,x=S+i+1,F=S+i+2,R=S+1;a.push(y,x,R),a.push(x,F,R)}}this.setIndex(a),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ae extends fr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yp,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class El extends Ae{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Xp extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Eb extends Xp{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const wl=new ue,Tf=new k,Af=new k;class wb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hu,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Tf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tf),Af.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Af),e.updateMatrixWorld(),wl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Tb extends wb{constructor(){super(new Up(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ab extends Xp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Tb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Cb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Cf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Cf(){return performance.now()}const Rf=new ue;class Nc{constructor(t,e,i=0,s=1/0){this.ray=new Pa(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new uu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Rf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rf),this}intersectObject(t,e=!0,i=[]){return Fc(t,this,i,e),i.sort(Pf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Fc(t[s],this,i,e);return i.sort(Pf),i}}function Pf(n,t){return n.distance-t.distance}function Fc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Fc(r[o],t,e,!0)}}class Df{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(He(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Rb extends Ms{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eu);const Lf={type:"change"},Mu={type:"start"},$p={type:"end"},Bo=new Pa,If=new li,Pb=Math.cos(70*Di.DEG2RAD),Pe=new k,an=2*Math.PI,me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tl=1e-6;class Db extends Rb{constructor(t,e=null){super(t,e),this.state=me.NONE,this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qs.ROTATE,MIDDLE:Qs.DOLLY,RIGHT:Qs.PAN},this.touches={ONE:Ws.ROTATE,TWO:Ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new Bi,this._lastTargetPosition=new k,this._quat=new Bi().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Df,this._sphericalDelta=new Df,this._scale=1,this._panOffset=new k,this._rotateStart=new Nt,this._rotateEnd=new Nt,this._rotateDelta=new Nt,this._panStart=new Nt,this._panEnd=new Nt,this._panDelta=new Nt,this._dollyStart=new Nt,this._dollyEnd=new Nt,this._dollyDelta=new Nt,this._dollyDirection=new k,this._mouse=new Nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ib.bind(this),this._onPointerDown=Lb.bind(this),this._onPointerUp=Ub.bind(this),this._onContextMenu=Hb.bind(this),this._onMouseWheel=Ob.bind(this),this._onKeyDown=kb.bind(this),this._onTouchStart=Bb.bind(this),this._onTouchMove=zb.bind(this),this._onMouseDown=Nb.bind(this),this._onMouseMove=Fb.bind(this),this._interceptControlDown=Vb.bind(this),this._interceptControlUp=Gb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lf),this.update(),this.state=me.NONE}update(t=null){const e=this.object.position;Pe.copy(e).sub(this.target),Pe.applyQuaternion(this._quat),this._spherical.setFromVector3(Pe),this.autoRotate&&this.state===me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=an:i>Math.PI&&(i-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Pe.setFromSpherical(this._spherical),Pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Pe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Bo.origin.copy(this.object.position),Bo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bo.direction))<Pb?this.object.lookAt(this.target):(If.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bo.intersectPlane(If,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Tl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tl||this._lastTargetPosition.distanceToSquared(this.target)>Tl?(this.dispatchEvent(Lf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?an/60*this.autoRotateSpeed*t:an/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Pe.setFromMatrixColumn(e,0),Pe.multiplyScalar(-t),this._panOffset.add(Pe)}_panUp(t,e){this.screenSpacePanning===!0?Pe.setFromMatrixColumn(e,1):(Pe.setFromMatrixColumn(e,0),Pe.crossVectors(this.object.up,Pe)),Pe.multiplyScalar(t),this._panOffset.add(Pe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Pe.copy(s).sub(this.target);let r=Pe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(an*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-an*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(an*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-an*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Nt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Lb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Ib(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Ub(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($p),this.state=me.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Nb(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Qs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=me.DOLLY;break;case Qs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}break;case Qs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(Mu)}function Fb(n){switch(this.state){case me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Ob(n){this.enabled===!1||this.enableZoom===!1||this.state!==me.NONE||(n.preventDefault(),this.dispatchEvent(Mu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent($p))}function kb(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Bb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=me.TOUCH_ROTATE;break;case Ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=me.TOUCH_PAN;break;default:this.state=me.NONE}break;case 2:switch(this.touches.TWO){case Ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=me.TOUCH_DOLLY_PAN;break;case Ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=me.TOUCH_DOLLY_ROTATE;break;default:this.state=me.NONE}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(Mu)}function zb(n){switch(this._trackPointer(n),this.state){case me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=me.NONE}}function Hb(n){this.enabled!==!1&&n.preventDefault()}function Vb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Gb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Qr extends Kt{constructor(){const t=Qr.SkyShader,e=new mi({name:t.name,uniforms:Pp.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:nn,depthWrite:!1});super(new zi(1,1,1),e),this.isSky=!0}}Qr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new k},up:{value:new k(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class Wb extends Ne{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Nt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const Hs=new k,Uf=new ue,Nf=new ue,Ff=new k,Of=new k;class Xb{constructor(t={}){const e=this;let i,s,r,o;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:s}},this.render=function(m,_){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Uf.copy(_.matrixWorldInverse),Nf.multiplyMatrices(_.projectionMatrix,Uf),u(m,m,_),d(m)},this.setSize=function(m,_){i=m,s=_,r=i/2,o=s/2,l.style.width=m+"px",l.style.height=_+"px"};function c(m){m.isCSS2DObject&&(m.element.style.display="none");for(let _=0,g=m.children.length;_<g;_++)c(m.children[_])}function u(m,_,g){if(m.visible===!1){c(m);return}if(m.isCSS2DObject){Hs.setFromMatrixPosition(m.matrixWorld),Hs.applyMatrix4(Nf);const p=Hs.z>=-1&&Hs.z<=1&&m.layers.test(g.layers)===!0,S=m.element;S.style.display=p===!0?"":"none",p===!0&&(m.onBeforeRender(e,_,g),S.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(Hs.x*r+r)+"px,"+(-Hs.y*o+o)+"px)",S.parentNode!==l&&l.appendChild(S),m.onAfterRender(e,_,g));const y={distanceToCameraSquared:h(g,m)};a.objects.set(m,y)}for(let p=0,S=m.children.length;p<S;p++)u(m.children[p],_,g)}function h(m,_){return Ff.setFromMatrixPosition(m.matrixWorld),Of.setFromMatrixPosition(_.matrixWorld),Ff.distanceToSquared(Of)}function f(m){const _=[];return m.traverseVisible(function(g){g.isCSS2DObject&&_.push(g)}),_}function d(m){const _=f(m).sort(function(p,S){if(p.renderOrder!==S.renderOrder)return S.renderOrder-p.renderOrder;const y=a.objects.get(p).distanceToCameraSquared,x=a.objects.get(S).distanceToCameraSquared;return y-x}),g=_.length;for(let p=0,S=_.length;p<S;p++)_[p].element.style.zIndex=g-p}}}const Pr={metro:{label:"Метро",color:"#f2c79e",glyph:"M"},shop:{label:"Магазины и рынки",color:"#4ade80",glyph:"🛒"},bank:{label:"Банки",color:"#60a5fa",glyph:"₸"},food:{label:"Кафе и рестораны",color:"#fb923c",glyph:"☕"},edu:{label:"Школы, сады, вузы",color:"#c084fc",glyph:"🎓"},health:{label:"Здоровье",color:"#f87171",glyph:"✚"},sport:{label:"Спорт",color:"#2dd4bf",glyph:"●"},auto:{label:"Авто",color:"#94a3b8",glyph:"⛽"}};function Yp(n,t){return`${n} мин · ${t<1e3?`${Math.round(t/10)*10} м`:`${(t/1e3).toFixed(1).replace(".",",")} км`}`}const ai=Math.PI/180;function kf(n,t,e){const s=n.getTime()/864e5+24405875e-1-2451545,r=(280.46+.9856474*s)%360,o=(357.528+.9856003*s)%360*ai,a=(r+1.915*Math.sin(o)+.02*Math.sin(2*o))*ai,l=(23.439-4e-7*s)*ai,c=Math.atan2(Math.cos(l)*Math.sin(a),Math.cos(a)),u=Math.asin(Math.sin(l)*Math.sin(a)),d=((18.697374558+24.06570982441908*s)%24*15+e)*ai-c,m=t*ai,_=Math.asin(Math.sin(m)*Math.sin(u)+Math.cos(m)*Math.cos(u)*Math.cos(d));return{azimuth:(Math.atan2(-Math.sin(d),Math.tan(u)*Math.cos(m)-Math.sin(m)*Math.cos(d))/ai+360)%360,altitude:_/ai}}const $b=5;function Bf(n,t){const[e,i,s]=n.split("-").map(Number),r=Math.floor(t),o=Math.round((t-r)*60);return new Date(Date.UTC(e,i-1,s,r-$b,o))}function zf(n){const t=n.azimuth*ai,e=n.altitude*ai;return[Math.cos(e)*Math.sin(t),Math.cos(e)*Math.cos(t),Math.sin(e)]}class In{constructor(){this.pos=[],this.nor=[],this.uv=[]}quad(t,e,i,s,r,o=1){const a=[t,e,i,t,i,s],l=[[0,0],[1,0],[1,1],[0,0],[1,1],[0,1]],c=Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2])*o,u=Math.hypot(s[0]-t[0],s[1]-t[1],s[2]-t[2])*o;a.forEach((h,f)=>{this.pos.push(h[0],h[1],h[2]),this.nor.push(r[0],r[1],r[2]),this.uv.push(l[f][0]*c,l[f][1]*u)})}quadAuto(t,e,i,s,r){const o=e[0]-t[0],a=e[1]-t[1],l=e[2]-t[2],c=i[0]-t[0],u=i[1]-t[1],h=i[2]-t[2],f=a*h-l*u,d=l*c-o*h,m=o*u-a*c;f*r[0]+d*r[1]+m*r[2]>=0?this.quad(t,e,i,s,r):this.quad(s,i,e,t,r)}tri(t,e,i,s,r=1){for(const o of[t,e,i])this.pos.push(o[0],o[1],o[2]),this.nor.push(s[0],s[1],s[2]),this.uv.push(o[0]*r,o[2]*r)}box(t,e,i,s={top:!0,bottom:!0}){const[r,o,a,l]=t,c=-l,u=-o;s.top&&this.quad([r,i,u],[a,i,u],[a,i,c],[r,i,c],[0,1,0]),s.bottom&&this.quad([r,e,c],[a,e,c],[a,e,u],[r,e,u],[0,-1,0]),this.quad([r,e,u],[a,e,u],[a,i,u],[r,i,u],[0,0,1]),this.quad([a,e,c],[r,e,c],[r,i,c],[a,i,c],[0,0,-1]),this.quad([a,e,u],[a,e,c],[a,i,c],[a,i,u],[1,0,0]),this.quad([r,e,c],[r,e,u],[r,i,u],[r,i,c],[-1,0,0])}geometry(){const t=new ze;return t.setAttribute("position",new fe(this.pos,3)),t.setAttribute("normal",new fe(this.nor,3)),t.setAttribute("uv",new fe(this.uv,2)),t.computeBoundingBox(),t.computeBoundingSphere(),t}}function Hn(n,t,e,i={}){const s=new In;for(const r of n)s.box(r,t,e,{top:i.top??!0,bottom:i.bottom??!0});return s.geometry()}function Yb(n,t,e,i){const s=new In;for(const[r,o,a,l,c,u]of n){const h=r-c*i,f=o-u*i,d=a-c*i,m=l-u*i,_=[c,0,-u],g=c*(m-f)-u*(d-h)<0,p=[h,t,-f],S=[d,t,-m],y=[d,e,-m],x=[h,e,-f];g?s.quad(S,p,x,y,_):s.quad(p,S,y,x,_)}return s.geometry()}function Al(n,t,e,i,s){const r=new In;for(const[o,a,l,c,u,h]of n){const f=Math.min(o,l)-0,d=Math.max(o,l),m=Math.min(a,c),_=Math.max(a,c);let g;if(u!==0){const p=o-u*s,S=o+u*i;g=[Math.min(p,S),m-i,Math.max(p,S),_+i]}else{const p=a-h*s,S=a+h*i;g=[f-i,Math.min(p,S),d+i,Math.max(p,S)]}r.box(g,t,e)}return r.geometry()}function jb(n,t,e,i){const s=new In,r=new Set,o=.16,a=.32;for(const l of n){const[c,u,h,f]=l;if(!(Math.max(h-c,f-u)<.25))for(const[m,_,g,p,S,y]of t)if(S!==0){const x=S>0?h:c;if(Math.abs(x-m)>.12)continue;const F=Math.max(u,Math.min(_,p)),R=Math.min(f,Math.max(_,p));if(R-F<.2)continue;const C=(F+R)/2,I=`x${Math.round(m*2)}:${Math.round(C*2)}`;if(r.has(I))continue;r.add(I);const E=m,v=m+S*a;s.box([Math.min(E,v),C-o/2,Math.max(E,v),C+o/2],e,i)}else{const x=y>0?f:u;if(Math.abs(x-_)>.12)continue;const F=Math.max(c,Math.min(m,g)),R=Math.min(h,Math.max(m,g));if(R-F<.2)continue;const C=(F+R)/2,I=`y${Math.round(_*2)}:${Math.round(C*2)}`;if(r.has(I))continue;r.add(I);const E=_,v=_+y*a;s.box([C-o/2,Math.min(E,v),C+o/2,Math.max(E,v)],e,i)}}return s.geometry()}function qb(n,t){const e=yu(n),i=[];for(const r of Ua(e))for(const o of r)i.push(e[o][0],t,-e[o][1]);const s=new ze;return s.setAttribute("position",new fe(i,3)),s.computeVertexNormals(),s}function Kb(n,t){const e=[];for(let s=0;s<n.length;s++){const r=n[s],o=n[(s+1)%n.length];e.push(r[0],t,-r[1],o[0],t,-o[1])}const i=new ze;return i.setAttribute("position",new fe(e,3)),i}function Cl(n,t){const e=[],i=[];for(const{p:r,w:o}of n){const a=o/2;for(let l=0;l<r.length-1;l++){const[c,u]=r[l],[h,f]=r[l+1],d=Math.hypot(h-c,f-u);if(d<.01)continue;const m=-(f-u)/d*a,_=(h-c)/d*a,g=(h-c)/d*a*.5,p=(f-u)/d*a*.5,S=[c-g+m,u-p+_],y=[h+g+m,f+p+_],x=[h+g-m,f+p-_],F=[c-g-m,u-p-_];for(const R of[S,F,x,S,x,y])e.push(R[0],t,-R[1]),i.push(0,1,0)}}const s=new ze;return s.setAttribute("position",new fe(e,3)),s.setAttribute("normal",new fe(i,3)),s}function zo(n,t){const e=[];for(const s of n){const r=yu(s);if(!(r.length<3))for(const o of Ua(r))for(const a of o)e.push(r[a][0],t,-r[a][1])}const i=new ze;return i.setAttribute("position",new fe(e,3)),i.computeVertexNormals(),i}function Zb(n){const t=new In;for(const{p:e,h:i}of n){const s=yu(e);if(s.length<3)continue;const r=s.map(([l,c])=>new Nt(l,c)),a=Ia.isClockWise(r)?[...s].reverse():s;for(let l=0;l<a.length;l++){const[c,u]=a[l],[h,f]=a[(l+1)%a.length],d=Math.hypot(h-c,f-u);if(d<.01)continue;const m=[(f-u)/d,0,(h-c)/d];t.quad([c,0,-u],[h,0,-f],[h,i,-f],[c,i,-u],m,.25)}for(const[l,c,u]of Ua(a))t.tri([a[l][0],i,-a[l][1]],[a[c][0],i,-a[c][1]],[a[u][0],i,-a[u][1]],[0,1,0],.1)}return t.geometry()}function Ua(n){return Ia.triangulateShape(n.map(([e,i])=>new Nt(e,i)),[]).map(([e,i,s])=>(n[i][0]-n[e][0])*(n[s][1]-n[e][1])-(n[i][1]-n[e][1])*(n[s][0]-n[e][0])>=0?[e,i,s]:[e,s,i])}function yu(n){const t=[];for(const e of n){const i=t[t.length-1];(!i||Math.hypot(i[0]-e[0],i[1]-e[1])>.05)&&t.push(e)}if(t.length>2){const e=t[0],i=t[t.length-1];Math.hypot(e[0]-i[0],e[1]-i[1])<.05&&t.pop()}return t}const Jb=1.4;class Hf{constructor(t,e,i){this.project=t,this.types=e,this.mat=i,this.root=new en,this.floors=[],this.typeGeo=new Map,this.overlay=null,this.interior=null,this.unitMeshes=new Map,this.hoverFloor=null,this.cutFloor=null,this.walkFloor=null,this.crown=new en,this.podiumRoof=null,this.podiumParapet=null;const s=t.building;this.slab=s.slab,this.root.name="building",this.root.rotation.y=-Di.degToRad(s.azimuth_deg);for(const r of s.floors)this.addFloor(r);this.addRoofs()}geoFor(t){let e=this.typeGeo.get(t.id);return e||(e={slab:Hn(t.slab,0,this.slab),walls:Hn(t.walls_ext,0,1,{top:!1,bottom:!1}),glass:Yb(t.outline,0,1,.14),fins:t.kind==="podium"||this.project.building.style==="plain"?null:jb(t.walls_ext,t.outline,0,1),band:Al(t.outline,-.02,this.slab+.12,.06,.25)},this.typeGeo.set(t.id,e)),e}addFloor(t){const e=this.types.get(t.type),i=this.geoFor(e),s=new en;s.name=`floor-${t.n}`;const r=t.height-this.slab,o=new Kt(i.slab,this.mat.slab);o.position.y=t.elevation;const a=new Kt(i.band,this.mat.band);a.position.y=t.elevation;const l=new Kt(i.walls,e.kind==="podium"?this.mat.band:this.mat.stone);l.position.y=t.elevation+this.slab,l.scale.y=r;const c=new Kt(i.glass,this.mat.glass);c.position.y=t.elevation+this.slab,c.scale.y=r,c.renderOrder=2;let u=null;i.fins&&(u=new Kt(i.fins,this.mat.bronze),u.position.y=t.elevation+this.slab,u.scale.y=r,u.castShadow=!0,s.add(u));for(const g of[o,a,l])g.castShadow=!0,g.receiveShadow=!0;s.add(o,a,l,c);const[h,f,d,m]=e.bbox,_=new Kt(new zi(d-h,t.height,m-f),this.mat.pick);_.position.set((h+d)/2,t.elevation+t.height/2,-(f+m)/2),_.userData.floor=t.n,s.add(_),this.root.add(s),this.floors.push({info:t,type:e,group:s,walls:l,glass:c,fins:u,pick:_})}addRoofs(){const t=this.project.building,e=t.floors[t.floors.length-1],i=this.types.get(e.type),s=e.elevation+e.height,r=new Kt(Hn(i.slab,0,this.slab),this.mat.slab);r.position.y=s;const o=t.style==="plain",a=new Kt(Al(i.outline,0,t.crown_height,.08,.35),o?this.mat.stone:this.mat.bronze);a.position.y=s;const l=new Kt(new zi(o?6:9,o?2.6:3.2,o?5:7),this.mat.band);l.position.set(0,s+1.6+this.slab,0);for(const h of[r,a,l])h.castShadow=!0,h.receiveShadow=!0;this.crown.add(r,a,l);const c=t.floors.find(h=>h.n===6),u=t.floors.find(h=>h.n===5);if(u&&c&&this.types.get(u.type).kind!=="tower"){const h=this.types.get(u.type),f=new Kt(Hn(h.slab,0,.15),this.mat.plaza);f.position.y=c.elevation,f.receiveShadow=!0,f.castShadow=!0;const d=new Kt(Al(h.outline,0,1.1,.04,.2),this.mat.band);d.position.y=c.elevation,d.castShadow=!0,this.crown.add(f,d),this.podiumRoof=f,this.podiumParapet=d}this.root.add(this.crown)}planToWorld(t,e,i){return this.root.updateMatrixWorld(),this.root.localToWorld(new k(t,i,-e))}worldToPlan(t){this.root.updateMatrixWorld();const e=this.root.worldToLocal(t.clone());return[e.x,-e.z]}floor(t){return this.floors.find(e=>e.info.n===t)}floorCenterWorld(t){const e=this.floor(t),[i,s,r,o]=e.type.kind==="podium"?e.type.bbox:this.towerBox(e.type);return this.planToWorld((i+r)/2,(s+o)/2,e.info.elevation)}towerBox(t){return t.bbox}get slabThickness(){return this.slab}get height(){return this.project.building.height}pickables(){return this.floors.filter(t=>t.group.visible).map(t=>t.pick)}unitPickables(){return[...this.unitMeshes.values()].map(t=>t.fill)}setHoverFloor(t){if(this.hoverFloor!==t){if(this.hoverFloor!==null){const e=this.floor(this.hoverFloor);e&&this.walkFloor!==e.info.n&&(e.glass.material=this.mat.glass)}if(this.hoverFloor=t,t!==null&&this.cutFloor===null&&this.walkFloor===null){const e=this.floor(t);e&&(e.glass.material=this.mat.glassHover)}}}showAll(){this.clearInterior(),this.cutFloor=null,this.walkFloor=null;for(const t of this.floors)t.group.visible=!0,t.walls.material=t.type.kind==="podium"?this.mat.band:this.mat.stone,t.glass.visible=!0,t.glass.material=this.mat.glass,t.fins&&(t.fins.visible=!0);this.crown.visible=!0}setVisibleUpTo(t){for(const i of this.floors)i.group.visible=i.info.n<=t,i.walls.material=i.type.kind==="podium"?this.mat.band:this.mat.stone,i.glass.visible=!0,i.glass.material=this.mat.glass,i.fins&&(i.fins.visible=!0);this.crown.visible=!1;const e=this.project.building.floors.find(i=>i.n===6);this.podiumRoof&&e&&(this.podiumRoof.visible=t>=6,this.podiumParapet.visible=t>=6,t>=6&&(this.crown.visible=!0),this.crown.children.forEach(i=>{i!==this.podiumRoof&&i!==this.podiumParapet&&(i.visible=!1)}))}restoreCrownChildren(){this.crown.children.forEach(t=>t.visible=!0)}cutAt(t,e,i){this.clearInterior(),this.restoreCrownChildren(),this.cutFloor=t,this.walkFloor=null,this.setVisibleUpTo(t);const s=this.floor(t);s.glass.visible=!1,s.fins&&(s.fins.visible=!1);const r=new en,o=Math.min(Jb,s.info.height-this.slab),a=s.info.elevation+this.slab,l=new Kt(Hn(s.type.walls_int,a,a+o,{bottom:!1}),this.mat.wallInt);l.castShadow=!0,l.receiveShadow=!0;const c=new Kt(Hn(s.type.slab,a,a+.01,{bottom:!1}),this.mat.floorCut);c.receiveShadow=!0,r.add(l,c),this.overlay=new en;for(const u of e.filter(h=>h.floor===t&&h.polygon)){const h=new Yt(wn[u.status]),f=new Kt(qb(u.polygon,a+.05),new dr({color:h,transparent:!0,opacity:.42,depthWrite:!1}));f.renderOrder=3,f.userData.unitId=u.id;const d=new ob(Kb(u.polygon,a+.07),new pu({color:h,transparent:!0,opacity:.95}));d.renderOrder=4,this.overlay.add(f,d),this.unitMeshes.set(u.id,{fill:f,line:d,unit:u})}r.add(this.overlay),this.interior=r,this.root.add(r),this.styleUnits(i,null,null)}styleUnits(t,e,i){for(const{fill:s,line:r,unit:o}of this.unitMeshes.values()){const a=Aa(o,t),l=s.material,c=r.material,u=new Yt(wn[o.status]),h=o.id===i||o.id===e;l.color.copy(a?u:new Yt("#9aa0a6")),l.opacity=a?o.id===i?.78:o.id===e?.62:.4:.12,c.color.copy(h?new Yt("#ffffff"):a?u:new Yt("#9aa0a6")),c.opacity=a?1:.3,s.visible=!0}}walkIn(t,e){this.clearInterior(),this.restoreCrownChildren(),this.cutFloor=null,this.walkFloor=t,this.setVisibleUpTo(t);const i=this.floor(t);i.glass.material=this.mat.glassInside,i.glass.visible=!0;const s=new en,r=i.info.elevation+this.slab,o=i.info.elevation+i.info.height,a=new Kt(Hn(i.type.walls_int,r,o,{top:!1,bottom:!1}),this.mat.wallInt);a.receiveShadow=!0,a.castShadow=!0,i.walls.material=this.mat.wallInt;const l=new Kt(Hn(i.type.door_heads,r+2.1,o),this.mat.wallInt);l.receiveShadow=!0;const c=new Kt(Hn(i.type.slab,r,r+.012,{bottom:!1}),this.mat.floorWood);c.receiveShadow=!0;const u=new Kt(Hn(i.type.slab,o,o+this.slab),this.mat.ceiling);u.castShadow=!0,s.add(a,l,c,u);const h=e.filter(f=>f.floor===t&&f.polygon);for(const f of i.type.rooms)f.area<1.5||f.area>38||h.some(d=>Qb(f.x,f.y,d.polygon))&&s.add(tE(`${f.area.toFixed(1).replace(".",",")} м²`,f.x,f.y,r+.02));this.interior=s,this.root.add(s)}collisionRects(t){const e=this.floor(t),i=[...e.type.walls_int,...e.type.walls_ext];for(const[s,r,o,a,l,c]of e.type.outline)l!==0?i.push([Math.min(s,s-l*.15),Math.min(r,a),Math.max(s,s-l*.15),Math.max(r,a)]):i.push([Math.min(s,o),Math.min(r,r-c*.15),Math.max(s,o),Math.max(r,r-c*.15)]);return i}clearInterior(){this.interior&&(this.root.remove(this.interior),this.interior.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose();const i=e.material;i&&!Array.isArray(i)&&!Object.values(this.mat).includes(i)&&(i.map?.dispose(),i.dispose())})),this.interior=null,this.overlay=null,this.unitMeshes.clear()}}function Qb(n,t,e){let i=!1;for(let s=0,r=e.length-1;s<e.length;r=s++)e[s][1]>t!=e[r][1]>t&&n<(e[r][0]-e[s][0])*(t-e[s][1])/(e[r][1]-e[s][1]+1e-12)+e[s][0]&&(i=!i);return i}function tE(n,t,e,i){const s=document.createElement("canvas");s.width=256,s.height=96;const r=s.getContext("2d");r.font="600 46px Manrope, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle="rgba(40, 32, 24, 0.55)",r.fillText(n,128,50);const o=new Hp(s);o.colorSpace=Qe,o.anisotropy=4;const a=new Kt(new ro(1.4,.525),new dr({map:o,transparent:!0,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.position.set(t,i,-e),a.renderOrder=5,a}function eE(n,t,e){const i=new en;i.name="context";const s=new Kt(new mu(2400,64),t.ground);s.rotation.x=-Math.PI/2,s.receiveShadow=!0,i.add(s);const r=n.green.filter(u=>u.k!=="pitch"&&u.k!=="playground"),o=n.green.filter(u=>u.k==="pitch"||u.k==="playground");ns(i,zo(r.map(u=>u.p),.02),t.green),ns(i,zo(o.map(u=>u.p),.03),t.pitch),ns(i,zo(n.water_areas.map(u=>u.p),.04),t.water),ns(i,Cl(n.water_lines,.05),t.water);const a=new Set(["footway","path","cycleway","steps","pedestrian"]);ns(i,Cl(n.roads.filter(u=>a.has(u.k??"")),.06),t.path),ns(i,Cl(n.roads.filter(u=>!a.has(u.k??"")),.08),t.road);const l=zo([jp(e,9)],.1);ns(i,l,t.plaza);const c=new Kt(Zb(n.buildings),t.context);return c.castShadow=!0,c.receiveShadow=!0,i.add(c),i.add(iE(n,t,e)),{group:i,occluders:c}}function ns(n,t,e){const i=new Kt(t,e);i.receiveShadow=!0,n.add(i)}function jp(n,t){const e=n.reduce((s,r)=>s+r[0],0)/n.length,i=n.reduce((s,r)=>s+r[1],0)/n.length;return n.map(([s,r])=>{const o=Math.hypot(s-e,r-i)||1;return[s+(s-e)/o*t,r+(r-i)/o*t]})}function nE(n){let t=n>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Rl(n,t,e){let i=!1;for(let s=0,r=e.length-1;s<e.length;r=s++)e[s][1]>t!=e[r][1]>t&&n<(e[r][0]-e[s][0])*(t-e[s][1])/(e[r][1]-e[s][1]+1e-12)+e[s][0]&&(i=!i);return i}function Vf(n){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(const[r,o]of n)t=Math.min(t,r),e=Math.min(e,o),i=Math.max(i,r),s=Math.max(s,o);return{x0:t,y0:e,x1:i,y1:s}}function iE(n,t,e){const i=nE(20261104),s=[],r=n.buildings.map(p=>({p:p.p,bb:Vf(p.p)})),o=jp(e,6),a=(p,S)=>{if(Math.hypot(p,S)>1300||Rl(p,S,o))return!0;for(const y of r)if(!(p<y.bb.x0-2||p>y.bb.x1+2||S<y.bb.y0-2||S>y.bb.y1+2)&&Rl(p,S,y.p))return!0;return!1};for(const p of n.green){if(p.k==="pitch"||p.k==="playground")continue;const S=Vf(p.p),y=(S.x1-S.x0)*(S.y1-S.y0),x=Math.min(600,Math.round(y/(p.k==="park"||p.k==="forest"?90:220)));for(let F=0;F<x;F++){const R=S.x0+i()*(S.x1-S.x0),C=S.y0+i()*(S.y1-S.y0);Rl(R,C,p.p)&&!a(R,C)&&s.push({x:R,y:C,s:.8+i()*.6})}}const l=new Set(["primary","secondary","tertiary","trunk","residential"]);for(const p of n.roads)if(l.has(p.k??""))for(let S=0;S<p.p.length-1;S++){const[y,x]=p.p[S],[F,R]=p.p[S+1],C=Math.hypot(F-y,R-x),I=-(R-x)/(C||1),E=(F-y)/(C||1);for(let v=4;v<C;v+=11)for(const A of[-1,1]){const L=p.w/2+2.5,z=y+(F-y)*v/C+I*L*A,K=x+(R-x)*v/C+E*L*A;a(z,K)||s.push({x:z,y:K,s:.75+i()*.4})}}const c=new vu(1,1),u=new gu(.12,.18,1,6),h=new vf(c,t.treeCrown,s.length),f=new vf(u,t.treeTrunk,s.length),d=new ue,m=new Bi,_=new Yt;s.forEach((p,S)=>{const y=6*p.s,x=2.4*p.s;d.compose(new k(p.x,y*.62,-p.y),m,new k(x,x*1.15,x)),h.setMatrixAt(S,d),_.setHSL(.24+i()*.05,.32+i()*.12,.34+i()*.1),h.setColorAt(S,_),d.compose(new k(p.x,y*.25,-p.y),m,new k(1,y*.5,1)),f.setMatrixAt(S,d)}),h.castShadow=!0,f.castShadow=!0;const g=new en;return g.add(h,f),g}function sE(){const n=document.createElement("canvas");n.width=512,n.height=512;const t=n.getContext("2d"),e=64;for(let s=0;s<512;s+=e){let r=-(s/e%3)*120;for(;r<512;){const o=260+(r*7+s*13)%140,a=168+(r*31+s*17)%26;t.fillStyle=`rgb(${a+28}, ${a-14}, ${a-62})`,t.fillRect(r,s,o,e);for(let l=0;l<9;l++){t.strokeStyle=`rgba(90, 60, 30, ${.05+(l*13+r)%7/100})`,t.beginPath();const c=s+6+l*6.5;t.moveTo(r,c),t.bezierCurveTo(r+o/3,c+2,r+2*o/3,c-2,r+o,c),t.stroke()}t.fillStyle="rgba(60, 40, 20, 0.35)",t.fillRect(r,s,2,e),r+=o}t.fillStyle="rgba(60, 40, 20, 0.4)",t.fillRect(0,s,512,2)}const i=new Hp(n);return i.wrapS=i.wrapT=la,i.colorSpace=Qe,i.anisotropy=8,i}function rE(){const n=sE();return n.repeat.set(.5,.5),{stone:new Ae({color:14074790,roughness:.82,metalness:0}),band:new Ae({color:13219223,roughness:.7,metalness:.05}),bronze:new Ae({color:10251078,roughness:.38,metalness:.65}),slab:new Ae({color:12564136,roughness:.9}),glass:new El({color:4150371,roughness:.05,metalness:.2,transparent:!0,opacity:.78,envMapIntensity:1.4,side:gn,depthWrite:!1}),glassHover:new El({color:14260834,emissive:13141850,emissiveIntensity:.55,roughness:.1,metalness:.1,transparent:!0,opacity:.8,side:gn,depthWrite:!1}),glassInside:new El({color:14674415,roughness:.02,metalness:0,transparent:!0,opacity:.12,side:gn,depthWrite:!1}),wallInt:new Ae({color:15460062,roughness:.92}),wallCut:new Ae({color:2764083,roughness:.85}),floorWood:new Ae({map:n,color:16773344,roughness:.55,metalness:0}),floorCut:new Ae({color:15328476,roughness:.95}),ceiling:new Ae({color:16184560,roughness:.95,side:gn}),ground:new Ae({color:13222580,roughness:1}),plaza:new Ae({color:14275010,roughness:.9}),road:new Ae({color:4869458,roughness:.95}),path:new Ae({color:13090478,roughness:1}),water:new Ae({color:4157318,roughness:.12,metalness:.35}),green:new Ae({color:9086570,roughness:1}),pitch:new Ae({color:7314026,roughness:1}),context:new Ae({color:14867924,roughness:.9}),treeCrown:new Ae({color:7311182,roughness:.95,flatShading:!0}),treeTrunk:new Ae({color:7033922,roughness:1}),pick:new dr({visible:!1})}}class oE{constructor(t,e){this.camera=t,this.dom=e,this.enabled=!1,this.yaw=0,this.pitch=0,this.pos=new k,this.keys=new Set,this.stick=new Nt,this.drag=null,this.resolve=i=>i,this.onKey=i=>{this.enabled&&i.target?.tagName!=="INPUT"&&(i.type==="keydown"?this.keys.add(i.code):this.keys.delete(i.code),(i.code.startsWith("Arrow")||i.code==="Space")&&i.preventDefault())},this.onDown=i=>{this.enabled&&(this.drag={id:i.pointerId,x:i.clientX,y:i.clientY})},this.onMove=i=>{!this.enabled||!this.drag||i.pointerId!==this.drag.id||(this.look(i.clientX-this.drag.x,i.clientY-this.drag.y),this.drag.x=i.clientX,this.drag.y=i.clientY)},this.onUp=i=>{this.drag&&i.pointerId===this.drag.id&&(this.drag=null)},window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onKey),e.addEventListener("pointerdown",this.onDown),window.addEventListener("pointermove",this.onMove),window.addEventListener("pointerup",this.onUp),window.addEventListener("pointercancel",this.onUp)}start(t,e,i){this.enabled=!0,this.pos.copy(t),this.yaw=e,this.pitch=-.04,this.resolve=i,this.keys.clear(),this.stick.set(0,0),this.apply()}stop(){this.enabled=!1,this.keys.clear(),this.drag=null}setStick(t,e){this.stick.set(t,e)}look(t,e){this.yaw-=t*.0042,this.pitch=Di.clamp(this.pitch-e*.0036,-1.25,1.1)}update(t){if(!this.enabled)return;let e=0,i=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(e+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(e-=1),this.keys.has("KeyA")&&(i-=1),this.keys.has("KeyD")&&(i+=1),this.keys.has("ArrowLeft")&&(this.yaw+=1.8*t),this.keys.has("ArrowRight")&&(this.yaw-=1.8*t),e+=-this.stick.y,i+=this.stick.x;const s=Math.hypot(e,i);if(s>1&&(e/=s,i/=s),s>.01){const r=(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")?3.2:1.7)*t,o=new k(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),a=new k(Math.cos(this.yaw),0,-Math.sin(this.yaw)),l=o.multiplyScalar(e*r).add(a.multiplyScalar(i*r)),c=this.resolve(this.pos.clone().add(new k(l.x,0,0)));this.pos.copy(c);const u=this.resolve(this.pos.clone().add(new k(0,0,l.z)));this.pos.copy(u)}this.apply()}apply(){this.camera.position.copy(this.pos),this.camera.rotation.order="YXZ",this.camera.rotation.set(this.pitch,this.yaw,0)}dispose(){window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onKey),this.dom.removeEventListener("pointerdown",this.onDown),window.removeEventListener("pointermove",this.onMove),window.removeEventListener("pointerup",this.onUp),window.removeEventListener("pointercancel",this.onUp)}}function Gf(n,t,e,i){for(let s=0;s<3;s++){let r=!1;for(const[o,a,l,c]of i){const u=Math.max(o,Math.min(n,l)),h=Math.max(a,Math.min(t,c)),f=n-u,d=t-h,m=f*f+d*d;if(!(m>=e*e)){if(m>1e-10){const _=Math.sqrt(m);n=u+f/_*e,t=h+d/_*e}else{const _=[[o-e,t,n-o],[l+e,t,l-n],[n,a-e,t-a],[n,c+e,c-t]];_.sort((g,p)=>g[2]-p[2]),n=_[0][0],t=_[0][1]}r=!0}}if(!r)break}return[n,t]}class aE{constructor(t,e,i){this.renderer=t,this.rig=e,this.camera=i,this.supported=!1,this.active=!1,this.controllers=[],this.aiming=new Map,this.target=null,this.floorY=0,this.walkable=()=>!0,this.turnCooldown=0,this.onEnd=()=>{},this.marker=new Kt(new xu(.22,.3,40).rotateX(-Math.PI/2),new dr({color:4054167,transparent:!0,opacity:.9,depthTest:!1})),this.marker.visible=!1,this.marker.renderOrder=10;for(let s=0;s<2;s++){const r=t.xr.getController(s),o=new zp(new ze().setFromPoints([new k(0,0,0),new k(0,0,-1)]),new pu({color:16777215,transparent:!0,opacity:.7}));o.scale.z=8,r.add(o),r.addEventListener("selectstart",()=>this.aiming.set(r,!0)),r.addEventListener("selectend",()=>{this.aiming.set(r,!1),this.teleport()}),e.add(r),this.controllers.push(r)}}async checkSupport(){const t=navigator.xr;try{this.supported=!!t&&await t.isSessionSupported("immersive-vr")}catch{this.supported=!1}return this.supported}async enter(t,e,i,s){const r=navigator.xr;if(!r)return;const o=await r.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor"]});this.renderer.xr.setReferenceSpaceType("local-floor"),await this.renderer.xr.setSession(o),this.active=!0,this.floorY=e.y,this.walkable=s,this.rig.position.copy(e),this.rig.rotation.set(0,i,0),this.marker.parent||t.add(this.marker),o.addEventListener("end",()=>{this.active=!1,this.marker.visible=!1,this.rig.position.set(0,0,0),this.rig.rotation.set(0,0,0),this.onEnd()})}update(t){if(!this.active)return;this.target=null;const e=new Nc,i=new li(new k(0,1,0),-this.floorY);for(const r of this.controllers){if(!this.aiming.get(r))continue;const o=r.matrixWorld;e.ray.origin.setFromMatrixPosition(o),e.ray.direction.set(0,0,-1).transformDirection(o);const a=new k;e.ray.intersectPlane(i,a)&&a.distanceTo(e.ray.origin)<12&&(this.target=a)}if(this.target){const r=this.walkable(this.target);this.marker.visible=!0,this.marker.position.copy(this.target).setY(this.floorY+.02),this.marker.material.color.set(r?4054167:15026253),r||(this.target=null)}else this.marker.visible=!1;this.turnCooldown-=t;const s=this.renderer.xr.getSession();if(s&&this.turnCooldown<=0)for(const r of s.inputSources){const o=r.gamepad?.axes?.[2]??0;if(Math.abs(o)>.7){this.snapTurn(o>0?-Math.PI/6:Math.PI/6),this.turnCooldown=.35;break}}}teleport(){if(!this.target)return;const t=new k;this.camera.getWorldPosition(t),this.rig.position.x+=this.target.x-t.x,this.rig.position.z+=this.target.z-t.z,this.marker.visible=!1}snapTurn(t){const e=new k;this.camera.getWorldPosition(e);const i=this.rig.position.clone().sub(e);i.applyAxisAngle(new k(0,1,0),t),this.rig.position.copy(e).add(i),this.rig.rotation.y+=t}}const lE=["север","северо-восток","восток","юго-восток","юг","юго-запад","запад","северо-запад"],cE=["С","СВ","В","ЮВ","Ю","ЮЗ","З","СЗ"];class uE{constructor(t,e){this.project=t,this.mat=e,this.root=new en,this.items=[],this.hover=null,this.selected=null,this.ringMat=new Ae({color:13867624,emissive:13141850,emissiveIntensity:.9,transparent:!0,opacity:.85}),this.root.name="massing";for(const i of t.building.blocks??[])this.addBlock(i)}addBlock(t){const e=Wf(t.footprint),i=t.height,s=t.first_floor,r=new In,o=new In,a=new In,l=new In,c=new In;for(let g=0;g<e.length;g++){const p=e[g],S=e[(g+1)%e.length],y=Math.hypot(S[0]-p[0],S[1]-p[1]);if(y<.3)continue;const x=[(S[0]-p[0])/y,(S[1]-p[1])/y],F=[x[1],-x[0]];Xf(r,p,x,F,0,y,-.12,0,i);const R=Math.max(2,Math.round(y/1.9));for(let C=0;C<=R;C++){const I=y*C/R,E=C===0||C===R?.7:.48;Tr(o,p,x,F,I-E/2,I+E/2,.1,.3,t.retail_ground?s:0,i)}for(let C=2;C<=t.levels;C++){const I=s+(C-2)*t.floor_height;Tr(a,p,x,F,-.14,y+.14,.14,.3,I-.12,I+.26)}t.retail_ground&&Tr(o,p,x,F,-.2,y+.2,.22,.3,s-.25,s+.35),Tr(o,p,x,F,-.16,y+.16,.16,.35,i,i+t.parapet),Xf(c,p,x,F,0,y,0,0,i+t.parapet)}for(const[g,p,S]of Ua(e))l.tri([e[g][0],i+.02,-e[g][1]],[e[p][0],i+.02,-e[p][1]],[e[S][0],i+.02,-e[S][1]],[0,1,0],.2),c.tri([e[g][0],i+t.parapet,-e[g][1]],[e[p][0],i+t.parapet,-e[p][1]],[e[S][0],i+t.parapet,-e[S][1]],[0,1,0]);const u=new en;u.name=`block-${t.id}`;const h=new Kt(r.geometry(),this.mat.glass);h.renderOrder=2;const f=new Kt(o.geometry(),this.mat.stone),d=new Kt(a.geometry(),this.mat.band),m=new Kt(l.geometry(),this.mat.slab);for(const g of[f,d,m])g.castShadow=!0,g.receiveShadow=!0;const _=new Kt(c.geometry(),this.mat.pick);_.userData.block=t.id,u.add(h,f,d,m,_),this.root.add(u),this.items.push({block:t,group:u,glass:h,pick:_,sides:fE(e),ring:null})}get blocks(){return this.items.map(t=>t.block)}item(t){return this.items.find(e=>e.block.id===t)}pickables(){return this.items.map(t=>t.pick)}occluders(){return this.items.map(t=>t.pick)}setBlockVisible(t,e){const i=this.item(t);i&&(i.group.visible=e)}setHover(t){this.hover!==t&&(this.hover=t,this.restyle())}select(t,e){this.selected=t;for(const s of this.items)s.ring&&(s.group.remove(s.ring),s.ring.geometry.dispose(),s.ring=null);const i=t?this.item(t):void 0;if(i&&e){const s=i.block,r=Oc(s,e),o=e===1?s.first_floor:s.floor_height,a=new In,l=Wf(s.footprint);for(let c=0;c<l.length;c++){const u=l[c],h=l[(c+1)%l.length],f=Math.hypot(h[0]-u[0],h[1]-u[1]);if(f<.3)continue;const d=[(h[0]-u[0])/f,(h[1]-u[1])/f],m=[d[1],-d[0]];Tr(a,u,d,m,-.3,f+.3,.32,.05,r+.1,r+o-.1)}i.ring=new Kt(a.geometry(),this.ringMat),i.ring.renderOrder=3,i.group.add(i.ring)}this.restyle()}restyle(){for(const t of this.items){const e=t.block.id===this.hover||t.block.id===this.selected;t.glass.material=e?this.mat.glassHover:this.mat.glass}}center(t){if(t){const i=this.item(t).block,[s,r]=hE(i.footprint);return new k(s,i.height/2,-r)}const e=this.project.building.center??[0,0];return new k(e[0],14,-e[1])}viewPoint(t,e,i){const s=this.item(t),r=s.sides[Math.min(i,s.sides.length-1)],o=Oc(s.block,e)+1.55,a=new k(r.mid[0]+r.normal[0]*.45,o,-(r.mid[1]+r.normal[1]*.45)),l=Math.atan2(-r.normal[0],r.normal[1]);return{pos:a,yaw:l}}}function Oc(n,t){return t<=1?0:n.first_floor+(t-2)*n.floor_height}function Wf(n){let t=0;for(let e=0;e<n.length;e++){const[i,s]=n[e],[r,o]=n[(e+1)%n.length];t+=i*o-r*s}return t>=0?n:[...n].reverse()}function hE(n){return[n.reduce((t,e)=>t+e[0],0)/n.length,n.reduce((t,e)=>t+e[1],0)/n.length]}function fE(n){const t=new Map;for(let e=0;e<n.length;e++){const i=n[e],s=n[(e+1)%n.length],r=Math.hypot(s[0]-i[0],s[1]-i[1]);if(r<3)continue;const o=[(s[1]-i[1])/r,-(s[0]-i[0])/r],a=(Math.atan2(o[0],o[1])*180/Math.PI+360)%360,l=Math.round(a/45)%8,c=t.get(l);(!c||c.length<r)&&t.set(l,{name:lE[l],short:cE[l],azimuth:a,mid:[(i[0]+s[0])/2,(i[1]+s[1])/2],normal:o,length:r})}return[...t.values()].sort((e,i)=>i.length-e.length).slice(0,4).sort((e,i)=>e.azimuth-i.azimuth)}function Xf(n,t,e,i,s,r,o,a,l){const c=[t[0]+e[0]*s+i[0]*o,t[1]+e[1]*s+i[1]*o],u=[t[0]+e[0]*r+i[0]*o,t[1]+e[1]*r+i[1]*o];n.quadAuto([c[0],a,-c[1]],[u[0],a,-u[1]],[u[0],l,-u[1]],[c[0],l,-c[1]],[i[0],0,-i[1]])}function Tr(n,t,e,i,s,r,o,a,l,c){const u=(S,y)=>[t[0]+e[0]*S+i[0]*y,t[1]+e[1]*S+i[1]*y],h=u(s,-a),f=u(r,-a),d=u(r,o),m=u(s,o),_=(S,y)=>[S[0],y,-S[1]],g=[i[0],0,-i[1]],p=[e[0],0,-e[1]];n.quadAuto(_(m,l),_(d,l),_(d,c),_(m,c),g),n.quadAuto(_(f,l),_(h,l),_(h,c),_(f,c),[-g[0],0,-g[2]]),n.quadAuto(_(d,l),_(f,l),_(f,c),_(d,c),p),n.quadAuto(_(h,l),_(m,l),_(m,c),_(h,c),[-p[0],0,-p[2]]),n.quadAuto(_(h,c),_(f,c),_(d,c),_(m,c),[0,1,0]),n.quadAuto(_(m,l),_(d,l),_(f,l),_(h,l),[0,-1,0])}const Pl=1.6;class dE{constructor(t,e){this.canvasHost=t,this.events=e,this.scene=new pf,this.rig=new en,this.sky=new Qr,this.sun=new Ab(16774112,3),this.hemi=new Eb(14674421,12102031,.9),this.envRT=null,this.skyScene=new pf,this.building=null,this.massing=null,this.labels=new Xb,this.placeObjs=[],this.lastHoverBlock=null,this.blockViews=new Map,this.openBlockId=null,this.occluders=null,this.mode="building",this.clock=new Cb,this.pointer=new Nt,this.pointerScreen={x:0,y:0},this.pointerDirty=!1,this.pointerInside=!1,this.down=null,this.tween=null,this.raycaster=new Nc,this.lastHoverFloor=null,this.lastHoverUnit=null,this.walkFloorN=null,this.lat=41.3,this.lon=69.29,this.envTimer=0,this.mobile=matchMedia("(pointer: coarse)").matches,this.onPointerMove=a=>{const l=this.renderer.domElement.getBoundingClientRect();this.pointer.set((a.clientX-l.left)/l.width*2-1,-((a.clientY-l.top)/l.height)*2+1),this.pointerScreen={x:a.clientX-l.left,y:a.clientY-l.top},this.pointerInside=a.pointerType==="mouse",this.pointerDirty=!0},this.onPointerDown=a=>{this.down={x:a.clientX,y:a.clientY,t:performance.now()}},this.onPointerUp=a=>{if(!this.down)return;const l=Math.hypot(a.clientX-this.down.x,a.clientY-this.down.y),c=performance.now()-this.down.t;if(this.down=null,l>6||c>600||this.mode==="walk"||this.mode==="view")return;if(this.onPointerMove(a),this.massing&&(this.mode==="building"||this.mode==="block")){const h=this.pickBlock();h&&this.events.clickBlock(h);return}const u=this.pick();this.mode==="building"&&u.floor!==null?this.events.clickFloor(u.floor):this.mode==="floor"&&u.unit!==null&&this.events.clickUnit(u.unit)},this.loop=()=>{const a=Math.min(this.clock.getDelta(),.1);if(this.tween){this.tween.t+=a/this.tween.d;const c=this.tween.t>=1?1:1-Math.pow(1-this.tween.t,3);this.camera.position.lerpVectors(this.tween.from[0],this.tween.to[0],c),this.controls.target.lerpVectors(this.tween.from[1],this.tween.to[1],c),this.tween.t>=1&&(this.tween=null)}this.xr.active?this.xr.update(a):this.mode==="walk"||this.mode==="view"?this.walk.update(a):this.controls.update(),this.xr.active||this.processHover();const l=this.mode==="walk"&&this.walkFloorN!==null&&this.building?this.building.floorCenterWorld(this.walkFloorN):this.controls.target;this.sun.target.position.set(l.x,this.mode==="building"?0:l.y,l.z),this.sun.position.copy(this.sun.target.position).addScaledVector(this.sunDir,650),this.renderer.render(this.scene,this.camera),this.labels.domElement.style.display=this.mode==="walk"?"none":"",this.mode!=="walk"&&this.labels.render(this.scene,this.camera)},this.sunDir=new k(.3,.8,.5).normalize(),this.resize=()=>{const a=this.canvasHost.clientWidth,l=this.canvasHost.clientHeight;this.renderer.setSize(a,l),this.labels.setSize(a,l),this.camera.aspect=a/l,this.applyViewShift()},this.renderer=new ib({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.mobile?1.6:2)),this.renderer.outputColorSpace=Qe,this.renderer.toneMapping=up,this.renderer.toneMappingExposure=.92,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=lp,this.renderer.xr.enabled=!0,t.appendChild(this.renderer.domElement),this.labels.domElement.className="labels-layer",t.appendChild(this.labels.domElement),this.renderer.domElement.style.touchAction="none",this.camera=new En(38,1,.1,6e3),this.rig.add(this.camera),this.scene.add(this.rig),this.mat=rE(),this.sky.scale.setScalar(1e4);const i=this.sky.material.uniforms;i.turbidity.value=5.5,i.rayleigh.value=1.1,i.mieCoefficient.value=.004,i.mieDirectionalG.value=.82,this.scene.add(this.sky);const s=new Qr;s.scale.setScalar(1e3),Object.assign(s.material.uniforms.turbidity,{value:5.5}),Object.assign(s.material.uniforms.rayleigh,{value:1.1}),Object.assign(s.material.uniforms.mieCoefficient,{value:.004}),this.skyScene.add(s),this.pmrem=new Dc(this.renderer),this.sun.castShadow=!0;const r=this.sun.shadow;r.mapSize.set(this.mobile?2048:4096,this.mobile?2048:4096),r.camera.left=-190,r.camera.right=190,r.camera.top=190,r.camera.bottom=-190,r.camera.near=10,r.camera.far=1400,r.bias=-3e-4,r.normalBias=.25,r.camera.updateProjectionMatrix(),this.scene.add(this.sun,this.sun.target,this.hemi),this.scene.fog=new du(14212578,900,3200),this.controls=new Db(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Di.degToRad(86),this.controls.minDistance=12,this.controls.maxDistance=900,this.controls.autoRotateSpeed=.35,this.controls.addEventListener("start",()=>{this.controls.autoRotate=!1,this.tween=null,this.events.interacted()}),this.walk=new oE(this.camera,this.renderer.domElement),this.xr=new aE(this.renderer,this.rig,this.camera),this.xr.onEnd=()=>{this.camera.position.copy(this.walk.pos),this.events.xrEnded()};const o=this.renderer.domElement;o.addEventListener("pointermove",this.onPointerMove),o.addEventListener("pointerdown",this.onPointerDown),o.addEventListener("pointerup",this.onPointerUp),o.addEventListener("pointerleave",()=>{this.pointerInside=!1,this.pointerDirty=!0}),window.addEventListener("resize",this.resize),this.resize(),this.renderer.setAnimationLoop(this.loop)}load(t,e,i){this.lat=t.location.lat,this.lon=t.location.lon;let s;if(t.building.mode==="massing")this.massing=new uE(t,this.mat),this.scene.add(this.massing.root),s=pE(this.massing.blocks.flatMap(a=>a.footprint));else{this.building=new Hf(t,i,this.mat),this.scene.add(this.building.root);const a=i.get("POD2").bbox,l=t.building.azimuth_deg;s=[[a[0],a[1]],[a[2],a[1]],[a[2],a[3]],[a[0],a[3]]].map(([c,u])=>aa(c,u,l))}const{group:r,occluders:o}=eE(e,this.mat,s);this.occluders=o,this.scene.add(r),this.buildPlaces(e.places??[]),this.flyToBuilding(!0),this.controls.autoRotate=!0}setSun(t,e){const i=kf(Bf(t,e),this.lat,this.lon),[s,r,o]=zf(i),a=new k(s,o,-r).normalize(),l=Di.smoothstep(i.altitude,-4,8);this.sunDir.copy(a),this.sun.intensity=3.6*Di.smoothstep(i.altitude,-1,12),this.sun.color.setHSL(.09,.6,.62+.3*Di.smoothstep(i.altitude,0,35)),this.hemi.intensity=.12+.38*l,this.scene.environmentIntensity=.18+.32*l;const c=i.altitude<-3?new k(s,-.06,-r).normalize():a;this.sky.material.uniforms.sunPosition.value.copy(c),this.skyScene.children[0].material.uniforms.sunPosition.value.copy(c),this.renderer.toneMappingExposure=.5+.32*l,this.scene.fog.color.setHSL(.58,.15,.25+.6*l),clearTimeout(this.envTimer),this.envTimer=window.setTimeout(()=>this.updateEnv(),120)}updateEnv(){const t=this.pmrem.fromScene(this.skyScene,0,.1,2e3);this.envRT?.dispose(),this.envRT=t,this.scene.environment=t.texture}sunMinutes(t,e,i,s){if(!this.building||!this.occluders||!t.length)return 0;const r=new Map;for(const a of t){const l=Math.round(a.azimuth/10);(!r.has(l)||r.get(l).length<a.length)&&r.set(l,a)}const o=[...r.values()].map(a=>{const l=this.building.planToWorld(a.mid[0]+a.normal[0]*.6,a.mid[1]+a.normal[1]*.6,e+1.4),[c,u]=aa(a.normal[0],a.normal[1],s);return{p:l,e:c,n:u}});return this.sunMinutesFor(o,i)}sunMinutesFor(t,e){if(!this.occluders)return 0;const i=[this.occluders,...this.massing?.occluders()??[]],s=new Nc;s.far=700;let r=0;const o=10;for(let a=4*60;a<=21*60;a+=o){const l=kf(Bf(e,a/60),this.lat,this.lon);if(l.altitude<2)continue;const[c,u,h]=zf(l),f=Math.hypot(c,u),d=new k(c,h,-u).normalize();let m=!1;for(const _ of t)if(!((_.e*c+_.n*u)/(f||1)<.12)&&(s.set(_.p,d),s.intersectObjects(i,!1).length===0)){m=!0;break}m&&(r+=o)}return r}get currentMode(){return this.mode}flyToBuilding(t=!1){if(this.massing){this.leaveWalk(),this.closeBlockBuilding(),this.mode="building",this.setShadowRange("building"),this.applyViewShift(),this.massing.select(null,null);const o=this.massing.center(),a=this.canvasHost.clientWidth<this.canvasHost.clientHeight,l=Math.max(...this.massing.blocks.flatMap(h=>h.footprint.map(([f,d])=>Math.hypot(f-o.x,-d-o.z)))),c=(a?1.6:1)*Math.max(l*3.2,430),u=o.clone().add(new k(.38*c,.62*c,.72*c));this.moveCamera(u,o,t?0:1.1),this.controls.minDistance=25;return}if(!this.building)return;this.leaveWalk(),this.mode="building",this.setShadowRange("building"),this.applyViewShift(),this.building.showAll();const e=this.building.height,i=this.canvasHost.clientWidth<this.canvasHost.clientHeight,s=new k(0,e*(i?.5:.36),0),r=new k(95,e*1,245);i&&r.multiplyScalar(1.75).setY(e*1.15),this.moveCamera(r,s,t?0:1.1),this.controls.minDistance=30}showFloor(t,e,i){if(!this.building)return;const s=this.mode;this.leaveWalk(),this.mode="floor",this.setShadowRange("floor"),this.applyViewShift(),this.controls.autoRotate=!1,this.building.cutAt(t,e,i);const r=this.building.floorCenterWorld(t),o=this.building.floor(t),a=Math.max(o.type.bbox[2]-o.type.bbox[0],o.type.bbox[3]-o.type.bbox[1]),l=this.camera.position.clone().sub(this.controls.target).setY(0);(l.lengthSq()<.001||s==="walk")&&l.set(.36,0,.93),l.normalize();const c=Di.degToRad(38),u=2*Math.atan(Math.tan(c/2)*this.camera.aspect),h=a*.62/Math.tan(Math.min(c,u)/2),f=Math.max(a*2.2,h),d=r.clone().add(l.multiplyScalar(f*.5)).setY(r.y+f*.87);this.moveCamera(d,r,.9),this.controls.minDistance=12}styleUnits(t,e,i){this.building?.styleUnits(t,e,i)}enterWalk(t,e,i){if(!this.building||!t.polygon)return;const s=this.building.floor(t.floor);this.mode="walk",this.setShadowRange("walk"),this.applyViewShift(),this.walkFloorN=t.floor,this.controls.enabled=!1,this.controls.autoRotate=!1,this.tween=null,this.building.walkIn(t.floor,e);const r=this.building.collisionRects(t.floor),o=s.info.elevation+this.building.slabThickness,a=this.startPoint(t,s.type,r),l=this.building.planToWorld(a[0],a[1],o+Pl),c=this.bestYaw(a,r,i,o+Pl),u=this.building,h=o+Pl;this.walk.start(l,c,f=>{const[d,m]=u.worldToPlan(f),[_,g]=Gf(d,m,.24,r);return u.planToWorld(_,g,h)}),this.camera.near=.05,this.camera.fov=this.mobile?72:66,this.camera.updateProjectionMatrix()}bestYaw(t,e,i,s){let r=-1/0,o=[0,1];for(let c=0;c<24;c++){const u=c/24*Math.PI*2,h=Math.cos(u),f=Math.sin(u);let d=15;for(const[g,p,S,y]of e){const x=(g-t[0])/(h||1e-9),F=(S-t[0])/(h||1e-9),R=(p-t[1])/(f||1e-9),C=(y-t[1])/(f||1e-9),I=Math.max(Math.min(x,F),Math.min(R,C));Math.min(Math.max(x,F),Math.max(R,C))>=Math.max(I,0)&&I<d&&(d=Math.max(I,0))}const m=i.some(g=>g.normal[0]*h+g.normal[1]*f>.7)?2.5:0,_=Math.min(d,9)+m;_>r&&(r=_,o=[h,f])}const a=this.building.planToWorld(t[0],t[1],s),l=this.building.planToWorld(t[0]+o[0],t[1]+o[1],s);return Math.atan2(-(l.x-a.x),-(l.z-a.z))}startPoint(t,e,i){const s=t.polygon,r=(d,m)=>{let _=!1;for(let g=0,p=s.length-1;g<s.length;p=g++)s[g][1]>m!=s[p][1]>m&&d<(s[p][0]-s[g][0])*(m-s[g][1])/(s[p][1]-s[g][1]+1e-12)+s[g][0]&&(_=!_);return _};let o=1/0,a=1/0,l=-1/0,c=-1/0;for(const[d,m]of s)o=Math.min(o,d),a=Math.min(a,m),l=Math.max(l,d),c=Math.max(c,m);const u=i.filter(([d,m,_,g])=>_>o-3&&d<l+3&&g>a-3&&m<c+3);let h=[(o+l)/2,(a+c)/2],f=-1;for(let d=o+.3;d<l;d+=.3)for(let m=a+.3;m<c;m+=.3){if(!r(d,m))continue;let _=1/0;for(const[g,p,S,y]of u){const x=Math.max(g-d,0,d-S),F=Math.max(p-m,0,m-y);if(_=Math.min(_,Math.hypot(x,F)),_<=f)break}_>f&&(f=_,h=[d,m])}return h}selectBlock(t,e){if(!this.massing)return;const i=this.mode==="view"||this.mode==="floor"||this.mode==="walk";this.leaveWalk(),this.closeBlockBuilding(),this.mode="block",this.setShadowRange("building"),this.applyViewShift(),this.controls.autoRotate=!1,this.massing.select(t,e);const s=this.massing.center(t),r=this.massing.item(t).block,o=this.camera.position.clone().sub(this.controls.target).setY(0);(o.lengthSq()<.001||i)&&o.set(.5,0,.86),o.normalize();const a=Math.max(70,r.height*2.4),l=s.clone().add(o.multiplyScalar(a)).setY(s.y+a*.55);this.moveCamera(l,s,.9)}openBlockFloor(t,e,i,s){if(this.massing){if(this.openBlockId!==t.id){this.closeBlockBuilding();let r=this.blockViews.get(t.id);if(!r){const o={building:{mode:"plans",style:"plain",azimuth_deg:t.azimuth_deg,slab:t.slab,crown_height:t.crown_height,height:t.height,floors:t.floors,assumed:[]}};r=new Hf(o,new Map(Object.entries(t.floor_types)),this.mat),r.root.position.set(t.origin[0],0,-t.origin[1]),this.blockViews.set(t.id,r)}this.scene.add(r.root),this.massing.setBlockVisible(t.id,!1),this.building=r,this.openBlockId=t.id}this.showFloor(e,i,s)}}closeBlockBuilding(){if(!this.openBlockId||!this.massing)return;const t=this.blockViews.get(this.openBlockId);t&&this.scene.remove(t.root),this.massing.setBlockVisible(this.openBlockId,!0),this.openBlockId=null,this.building=null}setBlockFloor(t,e){this.massing?.select(t,e)}blockSides(t){return this.massing?.item(t)?.sides??[]}showView(t,e,i){if(!this.massing)return;const{pos:s,yaw:r}=this.massing.viewPoint(t,e,i);this.mode="view",this.setShadowRange("building"),this.applyViewShift(),this.controls.enabled=!1,this.controls.autoRotate=!1,this.tween=null,this.walk.start(s,r,()=>s.clone()),this.camera.near=.3,this.camera.fov=this.mobile?70:62,this.camera.updateProjectionMatrix()}blockSunMinutes(t,e,i){if(!this.massing)return[];const s=this.massing.item(t),r=Oc(s.block,e)+1.4;return s.sides.map(o=>{const a=new k(o.mid[0]+o.normal[0]*.7,r,-(o.mid[1]+o.normal[1]*.7));return this.sunMinutesFor([{p:a,e:o.normal[0],n:o.normal[1]}],i)})}buildPlaces(t){for(const e of t){const i=document.createElement("div"),s=Pr[e.category];if(i.className=`pin${e.known?" known":""} cat-${e.category}`,i.style.setProperty("--c",s.color),i.innerHTML=`<i>${s.glyph}</i><b></b><span>${Yp(e.walk_min,e.dist)}</span>`,i.querySelector("b").textContent=e.name,e.logo){const o=document.createElement("img");o.alt="",o.decoding="async",o.src=rp(e.logo),o.onload=()=>{const a=document.createElement("i");a.className="lg",a.appendChild(o),i.querySelector("i").replaceWith(a),i.classList.add("has-logo")}}const r=new Wb(i);r.position.set(e.x,e.category==="metro"?4:10,-e.y),r.center.set(.5,1),this.scene.add(r),this.placeObjs.push({obj:r,place:e})}}flyToPlaces(){const t=this.placeObjs.filter(c=>c.obj.visible);if(!t.length||this.mode==="view"||this.mode==="walk")return;const e=this.massing?this.massing.center():this.controls.target.clone(),i=t.filter(c=>c.place.dist<=700),s=(i.length?i:t).map(c=>new k(c.place.x,0,-c.place.y)).concat([e.clone().setY(0)]),r=s.reduce((c,u)=>c.add(u),new k).multiplyScalar(1/s.length),o=Math.max(...s.map(c=>c.distanceTo(r)),200),a=this.canvasHost.clientWidth<this.canvasHost.clientHeight,l=o*(a?3.4:2.3);this.controls.autoRotate=!1,this.moveCamera(r.clone().add(new k(.18*l,1*l,.42*l)),r.clone(),1.2)}setPlaceFilter(t,e,i){for(const{obj:s,place:r}of this.placeObjs)s.visible=i&&t.includes(r.category)&&(e||r.known)}setStick(t,e){this.walk.setStick(t,e)}leaveWalk(){this.mode!=="walk"&&this.mode!=="view"||(this.walk.stop(),this.walkFloorN=null,this.controls.enabled=!0,this.camera.near=.1,this.camera.fov=38,this.camera.rotation.order="XYZ",this.camera.updateProjectionMatrix())}async enterVR(t){if(!this.building||this.mode!=="walk")return;const e=this.building.floor(t),i=e.info.elevation+this.building.slabThickness,s=this.building.collisionRects(t),r=this.building,o=this.walk.pos.clone().setY(i);this.walk.stop(),this.camera.position.set(0,0,0),this.camera.rotation.set(0,0,0),await this.xr.enter(this.scene,o,this.walk.yaw,a=>{const[l,c]=r.worldToPlan(a);if(!e.type.slab.some(([d,m,_,g])=>l>d&&l<_&&c>m&&c<g))return!1;const[h,f]=Gf(l,c,.2,s);return Math.hypot(h-l,f-c)<.01})}setShadowRange(t){const e=t==="walk"?22:t==="floor"?70:190,i=this.sun.shadow;i.camera.left=-e,i.camera.right=e,i.camera.top=e,i.camera.bottom=-e,i.normalBias=t==="walk"?.02:t==="floor"?.08:.25,i.bias=t==="walk"?-1e-4:-3e-4,i.camera.updateProjectionMatrix()}moveCamera(t,e,i){if(i<=0){this.camera.position.copy(t),this.controls.target.copy(e),this.controls.update();return}this.tween={from:[this.camera.position.clone(),this.controls.target.clone()],to:[t.clone(),e.clone()],t:0,d:i}}pickBlock(){if(!this.massing)return null;this.raycaster.setFromCamera(this.pointer,this.camera);const t=this.raycaster.intersectObjects(this.massing.pickables(),!1);return t.length?t[0].object.userData.block:null}pick(){if(!this.building)return{floor:null,unit:null};if(this.raycaster.setFromCamera(this.pointer,this.camera),this.mode==="building"){const t=this.raycaster.intersectObjects(this.building.pickables(),!1);return{floor:t.length?t[0].object.userData.floor:null,unit:null}}if(this.mode==="floor"){const t=this.raycaster.intersectObjects(this.building.unitPickables(),!1);return{floor:null,unit:t.length?t[0].object.userData.unitId:null}}return{floor:null,unit:null}}processHover(){if(!this.pointerDirty)return;if(this.pointerDirty=!1,this.massing&&(this.mode==="building"||this.mode==="block")){const e=this.pointerInside?this.pickBlock():null;e!==this.lastHoverBlock&&(this.lastHoverBlock=e,this.massing.setHover(e),this.renderer.domElement.style.cursor=e?"pointer":""),this.events.hoverBlock(e,this.pointerScreen.x,this.pointerScreen.y);return}const t=this.pointerInside?this.pick():{floor:null,unit:null};t.floor!==this.lastHoverFloor&&(this.lastHoverFloor=t.floor,this.building?.setHoverFloor(t.floor),this.renderer.domElement.style.cursor=t.floor!==null?"pointer":""),this.mode==="building"&&this.events.hoverFloor(t.floor,this.pointerScreen.x,this.pointerScreen.y),t.unit!==this.lastHoverUnit&&(this.lastHoverUnit=t.unit,this.renderer.domElement.style.cursor=t.unit!==null?"pointer":""),this.mode==="floor"&&this.events.hoverUnit(t.unit,this.pointerScreen.x,this.pointerScreen.y)}hoverFloorFromUI(t){this.mode==="building"&&this.building?.setHoverFloor(t)}applyViewShift(){const t=this.canvasHost.clientWidth,e=this.canvasHost.clientHeight,i=t<760?this.mode==="floor"?.2:this.mode==="building"?.08:0:0;i>0?this.camera.setViewOffset(t,e,0,e*i,t,e):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix()}dispose(){this.renderer.setAnimationLoop(null),window.removeEventListener("resize",this.resize),this.walk.dispose(),this.controls.dispose(),this.renderer.dispose()}}function pE(n){const t=[...n].sort((r,o)=>r[0]-o[0]||r[1]-o[1]);if(t.length<3)return t;const e=(r,o,a)=>(o[0]-r[0])*(a[1]-r[1])-(o[1]-r[1])*(a[0]-r[0]),i=[];for(const r of t){for(;i.length>=2&&e(i[i.length-2],i[i.length-1],r)<=0;)i.pop();i.push(r)}const s=[];for(const r of[...t].reverse()){for(;s.length>=2&&e(s[s.length-2],s[s.length-1],r)<=0;)s.pop();s.push(r)}return i.slice(0,-1).concat(s.slice(0,-1))}const kc=new Intl.NumberFormat("ru-RU",{maximumFractionDigits:1,minimumFractionDigits:0}),mE=new Intl.NumberFormat("ru-RU",{maximumFractionDigits:2,minimumFractionDigits:2}),gE=new Intl.NumberFormat("ru-RU",{maximumFractionDigits:0});function to(n,t=!1){return`${(t?mE:kc).format(n)} м²`}function _E(n){return n===null?"по запросу":n>=1e9?`${kc.format(n/1e9)} млрд сум`:n>=1e6?`${kc.format(n/1e6)} млн сум`:`${gE.format(n)} сум`}function qp(n){const t=Math.floor(n/60),e=Math.round(n%60);return t===0?`${e} мин`:e===0?`${t} ч`:`${t} ч ${e} мин`}function vs(n){if(!n)return"—";const[t,e,i]=n.split("-");return`${i}.${e}.${t}`}function vE(n,t,e,i){const s=Math.abs(n)%100,r=s%10;return s>10&&s<20?i:r>1&&r<5?e:r===1?t:i}const xE={key:0,class:"sw"},ME=["value"],yE=["value"],SE=sn({__name:"ProjectSwitch",props:{current:{}},setup(n){function t(e){const i=new URL(location.href);i.searchParams.set("p",e),location.href=i.toString()}return(e,i)=>G(te).projects.value.length>1?(ut(),dt("label",xE,[D("select",{value:e.current,"aria-label":"Жилой комплекс",onChange:i[0]||(i[0]=s=>t(s.target.value))},[(ut(!0),dt(Jt,null,Ie(G(te).projects.value,s=>(ut(),dt("option",{key:s.slug,value:s.slug},"ЖК "+ft(s.name)+" · "+ft(s.developer),9,yE))),128))],40,ME)])):pe("",!0)}}),rn=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},bE=rn(SE,[["__scopeId","data-v-d0afc9c0"]]),EE={class:"top"},wE={class:"brand glass"},TE={class:"titles"},AE={class:"name"},CE={class:"dev"},RE={class:"addr"},PE=["title"],DE={class:"actions"},LE=sn({__name:"TopBar",props:{project:{},mode:{}},emits:["back","data"],setup(n){return(t,e)=>(ut(),dt("header",EE,[D("div",wE,[e[3]||(e[3]=D("div",{class:"mark","aria-hidden":"true"},[D("span"),D("span"),D("span")],-1)),D("div",TE,[D("div",AE,[ee("ЖК "+ft(t.project.name)+" ",1),D("span",CE,"· "+ft(t.project.developer.brand),1)]),D("div",RE,ft(t.project.address.replace("Ташкент, ","")),1)]),e[4]||(e[4]=D("div",{class:"sep"},null,-1)),D("div",{class:"gov",title:`Госреестр строек, объект ${t.project.gov_registry.object_id}, данные на ${G(vs)(t.project.gov_registry.observed_at)}`},[e[2]||(e[2]=D("span",{class:"pulse"},null,-1)),D("span",null,ft(t.project.gov_registry.status_ru)+ft(t.project.gov_registry.deadline?` · срок ${G(vs)(t.project.gov_registry.deadline)}`:" · госреестр"),1)],8,PE)]),D("div",DE,[Ue(bE,{current:t.project.slug},null,8,["current"]),t.mode!=="building"?(ut(),dt("button",{key:0,class:"btn glass-btn",onClick:e[0]||(e[0]=i=>t.$emit("back"))},e[5]||(e[5]=[D("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none"},[D("path",{d:"M4 21V9l8-6 8 6v12h-5v-7H9v7H4z",stroke:"currentColor","stroke-width":"1.8","stroke-linejoin":"round"})],-1),D("span",{class:"lbl"},"Весь дом",-1)]))):pe("",!0),D("button",{class:"btn glass-btn",onClick:e[1]||(e[1]=i=>t.$emit("data"))},e[6]||(e[6]=[D("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none"},[D("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor","stroke-width":"1.8"}),D("path",{d:"M12 11v6M12 7.5v.5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1),D("span",{class:"lbl"},"О данных",-1)]))])]))}}),IE=rn(LE,[["__scopeId","data-v-88ec8d23"]]),UE={class:"rail glass","aria-label":"Этажи"},NE={class:"list scroll-thin"},FE=["onClick","onMouseenter"],OE={class:"n num"},kE={key:0,class:"dots"},BE={key:1,class:"tag"},zE={class:"legend"},HE=sn({__name:"FloorRail",props:{floors:{},current:{},count:{}},emits:["select","hover"],setup(n){return(t,e)=>(ut(),dt("nav",UE,[e[4]||(e[4]=D("div",{class:"head eyebrow"},"Этажи",-1)),D("ul",NE,[(ut(!0),dt(Jt,null,Ie(t.floors,i=>(ut(),dt("li",{key:i.n,class:xn({active:i.n===t.current,dim:i.residential&&i.matching===0}),onClick:s=>t.$emit("select",i.n),onMouseenter:s=>t.$emit("hover",i.n),onMouseleave:e[0]||(e[0]=s=>t.$emit("hover",null))},[D("span",OE,ft(i.n),1),i.residential?(ut(),dt("span",kE,[(ut(!0),dt(Jt,null,Ie(i.statuses,(s,r)=>(ut(),dt("i",{key:r,style:Le({background:G(wn)[s]})},null,4))),128))])):(ut(),dt("span",BE,ft(i.n===1&&!G(ln)?"лобби":"коммерция"),1)),i.residential?(ut(),dt("span",{key:2,class:xn(["free num",{zero:i.available===0}])},ft(i.available||"—"),3)):pe("",!0)],42,FE))),128))]),D("div",zE,[D("span",null,[D("i",{style:Le({background:G(wn).available})},null,4),e[1]||(e[1]=ee("в продаже"))]),D("span",null,[D("i",{style:Le({background:G(wn).booked})},null,4),e[2]||(e[2]=ee("бронь"))]),D("span",null,[D("i",{style:Le({background:G(wn).sold})},null,4),e[3]||(e[3]=ee("продана"))])])]))}}),VE=rn(HE,[["__scopeId","data-v-39f7fd30"]]),GE=["viewBox"],WE=["x","y","width","height"],XE=["points"],$E=["points"],YE=["x","y","width","height"],jE=["points"],qE=sn({__name:"MiniPlan",props:{unit:{}},setup(n){const t=n,e=ne(()=>{const i=Ii.value.find(d=>d.n===t.unit.floor),s=tu(i.type),r=hi.value.filter(d=>d.floor===t.unit.floor&&d.id!==t.unit.id&&d.polygon),[o,a,l,c]=s.bbox,u=1,h=`${o-u} ${-(c+u)} ${l-o+u*2} ${c-a+u*2}`,f=d=>d.map(([m,_])=>`${m},${-_}`).join(" ");return{vb:h,slab:s.slab,walls:[...s.walls_ext,...s.walls_int],me:f(t.unit.polygon??[]),others:r.map(d=>f(d.polygon))}});return(i,s)=>(ut(),dt("svg",{class:"mini",viewBox:e.value.vb,preserveAspectRatio:"xMidYMid meet","aria-label":"Положение квартиры на этаже"},[(ut(!0),dt(Jt,null,Ie(e.value.slab,(r,o)=>(ut(),dt("rect",{key:"s"+o,x:r[0],y:-r[3],width:r[2]-r[0],height:r[3]-r[1],class:"slab"},null,8,WE))),128)),(ut(!0),dt(Jt,null,Ie(e.value.others,(r,o)=>(ut(),dt("polygon",{key:"o"+o,points:r,class:"other"},null,8,XE))),128)),D("polygon",{points:e.value.me,class:"me",style:Le({fill:G(wn)[i.unit.status]})},null,12,$E),(ut(!0),dt(Jt,null,Ie(e.value.walls,(r,o)=>(ut(),dt("rect",{key:"w"+o,x:r[0],y:-r[3],width:r[2]-r[0],height:r[3]-r[1],class:"wall"},null,8,YE))),128)),D("polygon",{points:e.value.me,class:"me-line"},null,8,jE)],8,GE))}}),KE=rn(qE,[["__scopeId","data-v-c07382a7"]]),ZE={class:"card"},JE={class:"head"},QE={class:"eyebrow"},t1={class:"num"},e1={key:0,class:"test"},n1={class:"grid"},i1={class:"num"},s1={class:"num"},r1={class:"num"},o1={key:1,class:"rooms"},a1={class:"num"},l1={key:2,class:"views"},c1={class:"muted"},u1={class:"price"},h1={key:0},f1={class:"actions"},d1={key:3,class:"src"},p1={key:4,class:"src"},m1=sn({__name:"UnitCard",props:{unit:{},view:{}},emits:["close","walk","lead"],setup(n){const t=n,e=ne(()=>Ii.value.find(a=>a.n===t.unit.floor)),i=ne(()=>Ii.value.length),s=ne(()=>Math.round(e.value.elevation+1.5)),r={"03-21":"21 марта","06-21":"21 июня","12-21":"21 декабря"},o=ne(()=>r[N.sun.day.slice(5)]??vs(N.sun.day));return(a,l)=>(ut(),dt("div",ZE,[D("div",JE,[D("div",null,[D("div",QE,ft(G(ln)&&G(De)?`${G(De).label} · `:"")+"Квартира № "+ft(a.unit.number)+" · "+ft(a.unit.floor)+" этаж",1),D("h2",null,[ee(ft(G(P_)(a.unit.rooms))+" · ",1),D("span",t1,ft(G(to)(a.unit.area,!0)),1)])]),D("button",{class:"btn ghost icon","aria-label":"Закрыть",onClick:l[0]||(l[0]=c=>a.$emit("close"))},l[3]||(l[3]=[D("svg",{width:"18",height:"18",viewBox:"0 0 24 24"},[D("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1)]))]),D("div",{class:"status",style:Le({"--c":G(wn)[a.unit.status]})},[l[4]||(l[4]=D("i",null,null,-1)),ee(ft(G(Or)[a.unit.status]),1)],4),a.unit.test?(ut(),dt("span",e1,"тестовые данные")):pe("",!0),Ue(KE,{unit:a.unit},null,8,["unit"]),D("div",n1,[D("div",null,[l[5]||(l[5]=D("span",null,"Этаж",-1)),D("b",i1,ft(a.unit.floor)+" из "+ft(i.value),1)]),D("div",null,[l[6]||(l[6]=D("span",null,"Окна на высоте",-1)),D("b",s1,"≈ "+ft(s.value)+" м",1)]),D("div",null,[l[7]||(l[7]=D("span",null,"Стороны света",-1)),D("b",null,ft(a.view?.sidesShort.join(", ")||"—"),1)]),D("div",null,[D("span",null,"Солнце, "+ft(o.value),1),D("b",r1,ft(G(N).sunMinutes===null?"считаем…":G(N).sunMinutes?G(qp)(G(N).sunMinutes):"нет прямого"),1)])]),a.unit.room_list?.length?(ut(),dt("div",o1,[l[8]||(l[8]=D("div",{class:"eyebrow"},"Помещения",-1)),D("ul",null,[(ut(!0),dt(Jt,null,Ie(a.unit.room_list,(c,u)=>(ut(),dt("li",{key:u},[D("span",null,ft(c.name),1),D("b",a1,ft(G(to)(c.area)),1)]))),128))])])):pe("",!0),a.view?(ut(),dt("div",l1,[l[9]||(l[9]=D("div",{class:"eyebrow"},"Что видно из окон",-1)),D("ul",null,[D("li",null,[D("b",null,ft(a.view.sides.join(" и ")),1)]),(ut(!0),dt(Jt,null,Ie(a.view.highlights,c=>(ut(),dt("li",{key:c},ft(c),1))),128)),D("li",c1,ft(a.view.openness),1)])])):pe("",!0),D("div",u1,[D("div",null,[l[10]||(l[10]=D("span",{class:"muted"},"Стоимость",-1)),D("b",null,[ee(ft(a.unit.price===null&&a.unit.test?a.unit.status==="sold"?"продана":"—":G(_E)(a.unit.price)),1),a.unit.test&&a.unit.price!==null?(ut(),dt("em",h1," · тест")):pe("",!0)])]),D("button",{class:"btn small",onClick:l[1]||(l[1]=c=>a.$emit("lead"))},"Узнать цену")]),D("div",f1,[D("button",{class:"btn primary",onClick:l[2]||(l[2]=c=>a.$emit("walk"))},l[11]||(l[11]=[D("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},[D("circle",{cx:"13",cy:"4",r:"2",fill:"currentColor"}),D("path",{d:"M10 21l2-6 3 3v3M8 12l2-4 4 1 2 4 3 1M12 15l-1-6",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"})],-1),ee(" Пройти по квартире ")]))]),a.unit.test?(ut(),dt("p",d1,"Тестовые данные для показа возможностей: планировка сгенерирована по реальному контуру корпуса, статус и цена случайные.")):(ut(),dt("p",p1,"Статус — каталог застройщика на "+ft(G(vs)(a.unit.observed_at))+". Площадь по каталогу, стены — по плану этажа.",1))]))}}),g1=rn(m1,[["__scopeId","data-v-6e8607c3"]]),_1={class:"eyebrow"},v1={key:0,class:"test-chip"},x1={class:"big num"},M1={class:"bar"},y1=["title"],S1={class:"stats"},b1={class:"num"},E1={class:"note"},w1={class:"floor-sub muted"},T1={key:0,class:"units"},A1=["onClick","onMouseenter"],C1={class:"no num"},R1={class:"rm"},P1={class:"ar num"},D1={class:"st"},L1={key:1,class:"note"},I1={class:"filters"},U1={class:"row"},N1=["onClick"],F1={class:"switch"},O1={key:0,class:"found muted"},k1={class:"num"},B1=sn({__name:"SidePanel",props:{view:{}},emits:["select-unit","walk","lead","back"],setup(n,{emit:t}){const e=t,i=[1,2,3,4,5];function s(l){const c=N.filter.rooms.indexOf(l);c>=0?N.filter.rooms.splice(c,1):N.filter.rooms.push(l)}const r=ne(()=>N.floor===null?[]:hi.value.filter(l=>l.floor===N.floor).sort((l,c)=>l.number-c.number)),o=ne(()=>Ii.value.find(l=>l.n===N.floor)??null),a=ne(()=>{const l=o.value;return l?tu(l.type)?.label??te.project.value?.floor_types[l.type]?.label??"":""});return(l,c)=>(ut(),dt("aside",{class:xn(["panel glass scroll-thin",{card:!!G(cn)}])},[G(cn)?(ut(),Ln(g1,{key:0,unit:G(cn),view:l.view,onClose:c[0]||(c[0]=u=>e("select-unit",null)),onWalk:c[1]||(c[1]=u=>e("walk")),onLead:c[2]||(c[2]=u=>e("lead"))},null,8,["unit","view"])):(ut(),dt(Jt,{key:1},[D("div",_1,ft(G(N).floor===null?"Квартиры в доме":`${G(ln)&&G(De)?G(De).label+" · ":""}${G(N).floor} этаж`),1),G(L_)?(ut(),dt("div",v1,"Тестовые данные: планировки, статусы и цены условные")):pe("",!0),G(N).floor===null?(ut(),dt(Jt,{key:1},[D("div",x1,[ee(ft(G(qi).by.available)+" ",1),D("span",null,ft(G(vE)(G(qi).by.available,"квартира","квартиры","квартир"))+" в продаже",1)]),D("div",M1,[(ut(),dt(Jt,null,Ie(["available","booked","sold","unavailable"],u=>D("i",{key:u,style:Le({flex:G(qi).by[u],background:G(wn)[u]}),title:`${G(Or)[u]}: ${G(qi).by[u]}`},null,12,y1)),64))]),D("div",S1,[(ut(),dt(Jt,null,Ie(["available","booked","sold"],u=>D("div",{key:u},[D("i",{style:Le({background:G(wn)[u]})},null,4),ee(ft(G(Or)[u])+" ",1),D("b",b1,ft(G(qi).by[u]),1)])),64))]),D("p",E1,"Всего "+ft(G(qi).total)+" квартир в каталоге застройщика. Статусы на "+ft(G(vs)(G(te).observedAt.value))+".",1)],64)):(ut(),dt(Jt,{key:2},[D("div",w1,ft(a.value),1),r.value.length?(ut(),dt("ul",T1,[(ut(!0),dt(Jt,null,Ie(r.value,u=>(ut(),dt("li",{key:u.id,class:xn({off:!G(Aa)(u,G(N).filter),hover:G(N).hoverUnit===u.id}),onClick:h=>e("select-unit",u.id),onMouseenter:h=>G(N).hoverUnit=u.id,onMouseleave:c[3]||(c[3]=h=>G(N).hoverUnit=null)},[D("span",C1,"№ "+ft(u.number),1),D("span",R1,ft(u.rooms)+"-комн.",1),D("span",P1,ft(G(to)(u.area)),1),D("span",D1,[D("i",{style:Le({background:G(wn)[u.status]})},null,4),ee(ft(G(Or)[u.status]),1)])],42,A1))),128))])):(ut(),dt("p",L1,"На этом этаже квартир нет — коммерческие помещения и лобби. Стены показаны по плану застройщика."))],64)),D("div",I1,[c[8]||(c[8]=D("div",{class:"eyebrow"},"Комнат",-1)),D("div",U1,[(ut(),dt(Jt,null,Ie(i,u=>D("button",{key:u,class:xn(["seg",{on:G(N).filter.rooms.includes(u)}]),onClick:h=>s(u)},ft(u===5?"5+":u),11,N1)),64))]),D("label",F1,[ds(D("input",{"onUpdate:modelValue":c[4]||(c[4]=u=>G(N).filter.onlyAvailable=u),type:"checkbox"},null,512),[[Wl,G(N).filter.onlyAvailable]]),c[5]||(c[5]=D("span",{class:"knob"},null,-1)),c[6]||(c[6]=ee(" Только в продаже "))]),G(N).filter.rooms.length||G(N).filter.onlyAvailable?(ut(),dt("div",O1,[c[7]||(c[7]=ee(" Подходит: ")),D("b",k1,ft(G(qi).matching),1)])):pe("",!0)])],64))],2))}}),z1=rn(B1,[["__scopeId","data-v-c77d9b89"]]),H1={class:"sun glass"},V1={class:"days"},G1=["onClick"],W1={class:"t num"},X1=sn({__name:"SunBar",setup(n){const t=new Date().getFullYear(),e=ne(()=>[{label:"Сегодня",day:s()},{label:"21 марта",day:`${t}-03-21`},{label:"21 июня",day:`${t}-06-21`},{label:"21 дек",day:`${t}-12-21`}]),i=ne(()=>{const r=Math.floor(N.sun.hour),o=Math.round((N.sun.hour-r)*60);return`${String(r).padStart(2,"0")}:${String(o).padStart(2,"0")}`});function s(){const r=new Date;return`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`}return(r,o)=>(ut(),dt("div",H1,[o[1]||(o[1]=D("svg",{class:"ico",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},[D("circle",{cx:"12",cy:"12",r:"4.5",fill:"currentColor"}),D("path",{d:"M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round"})],-1)),D("div",V1,[(ut(!0),dt(Jt,null,Ie(e.value,a=>(ut(),dt("button",{key:a.label,class:xn({on:G(N).sun.day===a.day}),onClick:l=>G(N).sun.day=a.day},ft(a.label),11,G1))),128))]),ds(D("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>G(N).sun.hour=a),type:"range",min:"5",max:"21",step:"0.25","aria-label":"Время суток"},null,512),[[oa,G(N).sun.hour,void 0,{number:!0}]]),D("span",W1,ft(i.value),1)]))}}),$1=rn(X1,[["__scopeId","data-v-1d7ba8d5"]]),Y1={class:"hud"},j1={class:"info glass"},q1={key:0,class:"what"},K1={key:0,class:"keys glass"},Z1={key:2,class:"look-hint"},J1=sn({__name:"WalkHud",props:{xrSupported:{type:Boolean}},emits:["exit","vr","stick"],setup(n,{emit:t}){const e=t,i=matchMedia("(pointer: coarse)").matches,s=fs(),r=fs({x:0,y:0});let o=null;function a(u){o=u.pointerId,u.target.setPointerCapture(u.pointerId),l(u)}function l(u){if(o!==u.pointerId||!s.value)return;const h=s.value.getBoundingClientRect(),f=h.width/2;let d=(u.clientX-(h.left+f))/f,m=(u.clientY-(h.top+f))/f;const _=Math.hypot(d,m);_>1&&(d/=_,m/=_),r.value={x:d,y:m},e("stick",d,m)}function c(u){o===u.pointerId&&(o=null,r.value={x:0,y:0},e("stick",0,0))}return ba(()=>e("stick",0,0)),(u,h)=>(ut(),dt("div",Y1,[D("div",j1,[D("button",{class:"btn small",onClick:h[0]||(h[0]=f=>u.$emit("exit"))},h[2]||(h[2]=[D("svg",{width:"14",height:"14",viewBox:"0 0 24 24"},[D("path",{d:"M15 6l-6 6 6 6",stroke:"currentColor","stroke-width":"2.2",fill:"none","stroke-linecap":"round"})],-1),ee(" Выйти ")])),G(cn)?(ut(),dt("div",q1,[D("b",null,"№ "+ft(G(cn).number),1),ee(" · "+ft(G(cn).rooms)+"-комн. · "+ft(G(to)(G(cn).area)),1)])):pe("",!0),u.xrSupported?(ut(),dt("button",{key:1,class:"btn small primary",onClick:h[1]||(h[1]=f=>u.$emit("vr"))},"Войти в VR")):pe("",!0)]),G(i)?(ut(),dt("div",{key:1,ref_key:"base",ref:s,class:"stick",onPointerdown:a,onPointermove:l,onPointerup:c,onPointercancel:c},[D("div",{class:"knob",style:Le({transform:`translate(${r.value.x*34}px, ${r.value.y*34}px)`})},null,4)],544)):(ut(),dt("div",K1,h[3]||(h[3]=[Og("<span data-v-3f71aa54><kbd data-v-3f71aa54>W</kbd><kbd data-v-3f71aa54>A</kbd><kbd data-v-3f71aa54>S</kbd><kbd data-v-3f71aa54>D</kbd> ходьба</span><span data-v-3f71aa54><kbd data-v-3f71aa54>Shift</kbd> быстрее</span><span data-v-3f71aa54>мышь — обзор</span><span data-v-3f71aa54><kbd data-v-3f71aa54>Esc</kbd> выйти</span>",4)]))),G(i)?(ut(),dt("div",Z1,"Ведите пальцем по экрану, чтобы осмотреться")):pe("",!0)]))}}),Q1=rn(J1,[["__scopeId","data-v-3f71aa54"]]),tw={key:0},ew={key:1},nw=sn({__name:"HoverTip",setup(n){const t=ne(()=>N.mode==="building"&&N.hoverFloor!==null?$l.value.find(s=>s.n===N.hoverFloor):null),e=ne(()=>N.hoverBlock?te.project.value?.building.blocks?.find(s=>s.id===N.hoverBlock)??null:null),i=ne(()=>N.mode==="floor"&&N.unitId!==N.hoverUnit?I_.value:null);return(s,r)=>t.value||i.value||e.value?(ut(),dt("div",{key:0,class:"tip glass",style:Le({left:`${G(N).tip.x+16}px`,top:`${G(N).tip.y+16}px`})},[t.value?(ut(),dt(Jt,{key:0},[D("b",null,ft(t.value.n)+" этаж",1),t.value.residential?(ut(),dt("span",tw,"в продаже "+ft(t.value.available)+" из "+ft(t.value.total),1)):(ut(),dt("span",ew,ft(t.value.n===1&&!G(ln)?"лобби и коммерция":"коммерция"),1))],64)):e.value?(ut(),dt(Jt,{key:1},[D("b",null,ft(e.value.label),1),D("span",null,ft(e.value.levels)+" этажей · "+ft(e.value.address),1)],64)):i.value?(ut(),dt(Jt,{key:2},[D("b",null,"№ "+ft(i.value.number)+" · "+ft(i.value.rooms)+"-комн. · "+ft(G(to)(i.value.area)),1),D("span",{style:Le({color:G(wn)[i.value.status]})},ft(G(Or)[i.value.status]),5)],64)):pe("",!0)],4)):pe("",!0)}}),iw=rn(nw,[["__scopeId","data-v-691f07c4"]]),sw={class:"sheet glass scroll-thin",role:"dialog","aria-label":"О данных"},rw={class:"head"},ow={key:0,class:"how"},aw={key:1,class:"how"},lw={class:"muted"},cw={class:"asm"},uw={class:"disc"},hw=sn({__name:"DataSheet",emits:["close"],setup(n){return(t,e)=>(ut(),dt("div",{class:"veil",onClick:e[1]||(e[1]=Xl(i=>t.$emit("close"),["self"]))},[D("div",sw,[D("div",rw,[e[3]||(e[3]=D("div",null,[D("div",{class:"eyebrow"},"О данных"),D("h2",null,"Как собран этот макет")],-1)),D("button",{class:"btn ghost icon","aria-label":"Закрыть",onClick:e[0]||(e[0]=i=>t.$emit("close"))},e[2]||(e[2]=[D("svg",{width:"18",height:"18",viewBox:"0 0 24 24"},[D("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1)]))]),G(ln)?(ut(),dt("ol",ow,e[4]||(e[4]=[D("li",null,[D("b",null,"Корпуса"),ee(" — контуры, адреса и этажность из OpenStreetMap: точное положение каждого дома.")],-1),D("li",null,[D("b",null,"Статус и участники"),ee(" — госпортал строек Shaffof qurilish: заказчик, проектировщик, подрядчик.")],-1),D("li",null,[D("b",null,"Места рядом"),ee(" — магазины, банки, школы, метро из OpenStreetMap; время пешком — по расстоянию с поправкой на улицы.")],-1),D("li",null,[D("b",null,"Вид из окна и солнце"),ee(" — считаются по реальному окружению для любого этажа и стороны.")],-1)]))):(ut(),dt("ol",aw,e[5]||(e[5]=[D("li",null,[D("b",null,"Место и этажность"),ee(" — госпортал строек Shaffof qurilish: координаты, 30 этажей, заказчик, срок.")],-1),D("li",null,[D("b",null,"Стены и окна"),ee(" — извлечены программой из поэтажных планов застройщика, без ручной отрисовки. Каждая квартира — объект с номером из каталога.")],-1),D("li",null,[D("b",null,"Статусы"),ee(" — каталог застройщика. В рабочей версии обновляются сами из CRM.")],-1),D("li",null,[D("b",null,"Окружение и вид из окон"),ee(" — OpenStreetMap; солнце считается по координатам и дате.")],-1)]))),e[7]||(e[7]=D("div",{class:"eyebrow"},"Источники",-1)),D("table",null,[(ut(!0),dt(Jt,null,Ie(G(te).project.value.sources,i=>(ut(),dt("tr",{key:i.what},[D("td",null,ft(i.what),1),D("td",null,[ee(ft(i.source),1),e[6]||(e[6]=D("br",null,null,-1)),D("span",lw,"на "+ft(G(vs)(i.date)),1)])]))),128))]),e[8]||(e[8]=D("div",{class:"eyebrow"},"Условности демо",-1)),D("ul",cw,[(ut(!0),dt(Jt,null,Ie(G(te).project.value.assumptions,i=>(ut(),dt("li",{key:i},ft(i),1))),128))]),D("p",uw,ft(G(te).project.value.disclaimer)+" "+ft(G(te).context.value?.attribution),1)])]))}}),fw=rn(hw,[["__scopeId","data-v-428c0f4e"]]),dw={class:"eyebrow"},pw=sn({__name:"LeadDialog",emits:["close"],setup(n){const t=fs(!1),e=fs(""),i=fs("+998 ");return(s,r)=>(ut(),dt("div",{class:"veil",onClick:r[4]||(r[4]=Xl(o=>s.$emit("close"),["self"]))},[D("form",{class:"dlg glass",onSubmit:r[3]||(r[3]=Xl(o=>t.value=!0,["prevent"]))},[t.value?(ut(),dt(Jt,{key:1},[r[10]||(r[10]=D("h2",null,"Так это работает в рабочей версии",-1)),r[11]||(r[11]=D("p",{class:"txt"},"Заявка с номером квартиры, этажом и тем, что человек смотрел, за секунды попадает в CRM застройщика (amoCRM, Bitrix24, Uysot) и менеджеру в Telegram.",-1)),D("button",{class:"btn",type:"button",onClick:r[2]||(r[2]=o=>s.$emit("close"))},"Понятно")],64)):(ut(),dt(Jt,{key:0},[D("div",dw,"Квартира № "+ft(G(cn)?.number),1),r[7]||(r[7]=D("h2",null,"Узнать цену и записаться на показ",-1)),D("label",null,[r[5]||(r[5]=ee("Имя")),ds(D("input",{"onUpdate:modelValue":r[0]||(r[0]=o=>e.value=o),required:"",autocomplete:"name"},null,512),[[oa,e.value]])]),D("label",null,[r[6]||(r[6]=ee("Телефон")),ds(D("input",{"onUpdate:modelValue":r[1]||(r[1]=o=>i.value=o),required:"",inputmode:"tel",autocomplete:"tel"},null,512),[[oa,i.value]])]),r[8]||(r[8]=D("button",{class:"btn primary",type:"submit"},"Отправить",-1)),r[9]||(r[9]=D("p",{class:"note"},"Демо: заявка никуда не уходит и не сохраняется.",-1))],64))],32)]))}}),mw=rn(pw,[["__scopeId","data-v-1ec83682"]]),gw={class:"loader"},_w={class:"box"},vw={class:"bar"},xw={key:0,class:"err"},Mw=sn({__name:"LoaderScreen",props:{progress:{},error:{}},setup(n){return(t,e)=>(ut(),dt("div",gw,[D("div",_w,[e[0]||(e[0]=D("div",{class:"mark"},[D("span"),D("span"),D("span")],-1)),e[1]||(e[1]=D("div",{class:"t"},"Собираем дом из открытых данных",-1)),e[2]||(e[2]=D("div",{class:"steps muted"},"госреестр · поэтажные планы · OpenStreetMap",-1)),D("div",vw,[D("i",{style:Le({width:`${Math.round(t.progress*100)}%`})},null,4)]),t.error?(ut(),dt("div",xw,"Не удалось загрузить: "+ft(t.error),1)):pe("",!0)])]))}}),yw=rn(Mw,[["__scopeId","data-v-8895895e"]]),Sw={class:"rail glass","aria-label":"Корпуса"},bw={class:"list scroll-thin"},Ew=["onClick","onMouseenter"],ww={class:"n num"},Tw={class:"bar"},Aw={class:"lv num"},Cw=sn({__name:"BlockRail",props:{blocks:{},current:{}},emits:["select","hover"],setup(n){return(t,e)=>(ut(),dt("nav",Sw,[e[1]||(e[1]=D("div",{class:"head eyebrow"},"Корпуса",-1)),D("ul",bw,[(ut(!0),dt(Jt,null,Ie(t.blocks,i=>(ut(),dt("li",{key:i.id,class:xn({active:i.id===t.current}),onClick:s=>t.$emit("select",i.id),onMouseenter:s=>t.$emit("hover",i.id),onMouseleave:e[0]||(e[0]=s=>t.$emit("hover",null))},[D("span",ww,"26/"+ft(i.n),1),D("span",Tw,[D("i",{style:Le({width:`${i.levels/12*100}%`})},null,4)]),D("span",Aw,ft(i.levels)+" эт.",1)],42,Ew))),128))])]))}}),Rw=rn(Cw,[["__scopeId","data-v-b3cdbf53"]]),Pw={class:"panel glass scroll-thin"},Dw={class:"head"},Lw={class:"eyebrow"},Iw={class:"grid"},Uw={class:"num"},Nw={class:"floor-row"},Fw=["max"],Ow={class:"num"},kw={class:"muted small"},Bw={class:"eyebrow mt"},zw={class:"sides"},Hw=["onClick"],Vw={class:"num"},Gw=["disabled"],Ww={class:"big num"},Xw={class:"note"},$w={class:"near"},Yw={class:"near-head"},jw={class:"eyebrow"},qw={class:"switch"},Kw={class:"cats"},Zw=["onClick"],Jw={key:0,class:"lg"},Qw=["src"],tT={class:"nm"},eT={class:"wk num"},nT={class:"switch small"},iT=sn({__name:"BlockPanel",props:{sides:{}},emits:["close","view","floor","places","open-floor"],setup(n,{emit:t}){const e=t,i=ne(()=>te.project.value),s=ne(()=>i.value.building.blocks??[]),r=ne(()=>te.context.value?.places??[]),o=Object.keys(Pr);function a(f){const d=N.places.cats.indexOf(f);d>=0?N.places.cats.splice(d,1):N.places.cats.push(f)}const l=ne(()=>{const f=De.value,d=f?[f.footprint.reduce((m,_)=>m+_[0],0)/f.footprint.length,f.footprint.reduce((m,_)=>m+_[1],0)/f.footprint.length]:te.context.value?.center??[0,0];return r.value.filter(m=>N.places.cats.includes(m.category)&&(N.places.all||m.known)).map(m=>{const _=Math.hypot(m.x-d[0],m.y-d[1]);return{...m,d:_,w:Math.max(1,Math.round(_*1.25/80))}}).sort((m,_)=>m.d-_.d).slice(0,12)}),c=ne(()=>{const f=De.value;return f?Math.round((N.blockFloor<=1?0:f.first_floor+(N.blockFloor-2)*f.floor_height)+1.5):0}),u={"03-21":"21 марта","06-21":"21 июня","12-21":"21 декабря"},h=ne(()=>u[N.sun.day.slice(5)]??vs(N.sun.day));return(f,d)=>(ut(),dt("aside",Pw,[G(De)?(ut(),dt(Jt,{key:0},[D("div",Dw,[D("div",null,[D("div",Lw,ft(i.value.name)+" · "+ft(G(De).address),1),D("h2",null,ft(G(De).label)+" · "+ft(G(De).levels)+" этажей",1)]),D("button",{class:"btn ghost icon","aria-label":"Закрыть",onClick:d[0]||(d[0]=m=>e("close"))},d[8]||(d[8]=[D("svg",{width:"18",height:"18",viewBox:"0 0 24 24"},[D("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1)]))]),D("div",Iw,[D("div",null,[d[9]||(d[9]=D("span",null,"Высота",-1)),D("b",Uw,"≈ "+ft(Math.round(G(De).height))+" м",1)]),D("div",null,[d[10]||(d[10]=D("span",null,"Первый этаж",-1)),D("b",null,ft(G(De).retail_ground?"коммерция":"жильё"),1)])]),d[13]||(d[13]=D("div",{class:"eyebrow"},"Этаж",-1)),D("div",Nw,[ds(D("input",{"onUpdate:modelValue":d[1]||(d[1]=m=>G(N).blockFloor=m),type:"range",min:"1",max:G(De).levels,step:"1","aria-label":"Этаж",onInput:d[2]||(d[2]=m=>e("floor",G(N).blockFloor))},null,40,Fw),[[oa,G(N).blockFloor,void 0,{number:!0}]]),D("b",Ow,ft(G(N).blockFloor),1)]),D("div",kw,"Окна на высоте ≈ "+ft(c.value)+" м",1),D("div",Bw,"Стороны и солнце, "+ft(h.value),1),D("div",zw,[(ut(!0),dt(Jt,null,Ie(f.sides,(m,_)=>(ut(),dt("button",{key:_,class:xn(["side",{on:G(N).viewSide===_}]),onClick:g=>G(N).viewSide=_},[D("b",null,ft(m.short),1),D("span",Vw,ft(G(N).blockSun===null?"…":G(N).blockSun[_]?G(qp)(G(N).blockSun[_]):"нет солнца"),1)],10,Hw))),128))]),D("button",{class:"btn primary wide",disabled:G(De).retail_ground&&G(N).blockFloor===1,onClick:d[3]||(d[3]=m=>e("open-floor"))},[d[11]||(d[11]=D("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},[D("path",{d:"M3 9l9-6 9 6v11H3z M3 9h18M9 20v-6h6v6",stroke:"currentColor","stroke-width":"1.7","stroke-linejoin":"round"})],-1)),ee(" "+ft(G(De).retail_ground&&G(N).blockFloor===1?"1 этаж — коммерция":`Квартиры ${G(N).blockFloor} этажа`),1)],8,Gw),D("button",{class:"btn wide mt8",onClick:d[4]||(d[4]=m=>e("view"))},[d[12]||(d[12]=D("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},[D("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2",stroke:"currentColor","stroke-width":"1.8"}),D("path",{d:"M12 4v16M3 12h18",stroke:"currentColor","stroke-width":"1.8"})],-1)),ee(" Вид из окна: "+ft(G(N).blockFloor)+" этаж, "+ft(f.sides[G(N).viewSide]?.name??""),1)])],64)):(ut(),dt(Jt,{key:1},[d[15]||(d[15]=D("div",{class:"eyebrow"},"Жилой комплекс",-1)),D("div",Ww,[ee(ft(s.value.length)+" ",1),D("span",null,"корпусов · "+ft(i.value.building.floors_total)+" этажей всего",1)]),D("p",Xw,[d[14]||(d[14]=ee("Статус по госреестру: ")),D("b",null,ft(i.value.gov_registry.status_ru),1),ee(". Заказчик — "+ft(i.value.developer.legal_name)+", подрядчик — "+ft(i.value.gov_registry.contractor)+".",1)]),d[16]||(d[16]=D("p",{class:"note"},[ee("Выберите корпус и этаж — откроется план с квартирами, их статусом и прогулкой внутри. "),D("b",{class:"warn"},"Планировки, статусы и цены — тестовые"),ee(": настоящих планов застройщика в открытом доступе нет.")],-1))],64)),D("div",$w,[D("div",Yw,[D("div",jw,"Рядом"+ft(G(De)?` с корпусом ${G(De).n}`:""),1),D("label",qw,[ds(D("input",{"onUpdate:modelValue":d[5]||(d[5]=m=>G(N).places.on=m),type:"checkbox"},null,512),[[Wl,G(N).places.on]]),d[17]||(d[17]=D("span",{class:"knob"},null,-1)),d[18]||(d[18]=ee("на карте"))])]),D("div",Kw,[(ut(!0),dt(Jt,null,Ie(G(o),m=>(ut(),dt("button",{key:m,class:xn(["cat",{on:G(N).places.cats.includes(m)}]),style:Le({"--c":G(Pr)[m].color}),onClick:_=>a(m)},ft(G(Pr)[m].label),15,Zw))),128))]),D("ul",null,[(ut(!0),dt(Jt,null,Ie(l.value,m=>(ut(),dt("li",{key:m.osm},[m.logo?(ut(),dt("span",Jw,[D("img",{src:G(rp)(m.logo),alt:"",loading:"lazy"},null,8,Qw)])):(ut(),dt("i",{key:1,style:Le({background:G(Pr)[m.category].color})},null,4)),D("span",tT,ft(m.name),1),D("span",eT,ft(G(Yp)(m.w,m.d)),1)]))),128))]),D("label",nT,[ds(D("input",{"onUpdate:modelValue":d[6]||(d[6]=m=>G(N).places.all=m),type:"checkbox"},null,512),[[Wl,G(N).places.all]]),d[19]||(d[19]=D("span",{class:"knob"},null,-1)),d[20]||(d[20]=ee("показывать не только известные места"))]),D("button",{class:"btn small wide2",onClick:d[7]||(d[7]=m=>e("places"))},"Показать места вокруг на карте")])]))}}),sT=rn(iT,[["__scopeId","data-v-10bef0b7"]]),rT={key:2,class:"view-hud glass"},oT={key:0,class:"hint glass"},aT=sn({__name:"App",setup(n){let t=new URLSearchParams(location.search).get("p")||"";const e=fs();let i=null;Zc(async()=>{i=new dE(e.value,{hoverFloor:(v,A,L)=>{N.hoverFloor=v,N.tip={x:A,y:L}},clickFloor:v=>s(v),hoverUnit:(v,A,L)=>{N.hoverUnit=v,N.tip={x:A,y:L}},clickUnit:v=>r(v),interacted:()=>N.touched=!0,xrEnded:()=>N.xrActive=!1,hoverBlock:(v,A,L)=>{N.hoverBlock=v,N.tip={x:A,y:L}},clickBlock:v=>a(v)});try{N.progress=.05;const v=await ws.projects();te.projects.value=v.items,v.items.some(et=>et.slug===t)||(t=v.items[0].slug);const[A,L,z]=await Promise.all([ws.project(t),ws.units(t),ws.context(t)]);document.title=`ЖК ${A.name} — 3D-демо`,N.progress=.35;const K=[...new Set(A.building.floors.map(et=>et.type))],st=new Map;let Z=0;await Promise.all(K.map(async et=>{st.set(et,await ws.floorType(t,et)),Z++,N.progress=.35+.5*(Z/K.length)})),te.project.value=A,te.units.value=L.items,te.context.value=z,te.types.value=st,te.observedAt.value=L.observed_at,i.load(A,z,st),i.setSun(N.sun.day,N.sun.hour),i.setPlaceFilter(N.places.cats,N.places.all,N.places.on),N.progress=1,N.xrSupported=await i.xr.checkSupport(),setTimeout(()=>N.loading=!1,250)}catch(v){N.error=v instanceof Error?v.message:String(v)}window.addEventListener("keydown",S)}),ba(()=>{window.removeEventListener("keydown",S),i?.dispose()});async function s(v){if(i){if(ln.value){if(!N.blockId)return;let A=te.blockLayouts.value.get(N.blockId);if(!A){A=await ws.block(t,N.blockId);const L=new Map(te.blockLayouts.value);L.set(A.id,A),te.blockLayouts.value=L}N.floor=v,N.blockFloor=v,N.unitId=null,N.hoverUnit=null,N.mode="floor",i.openBlockFloor(A,v,hi.value,N.filter);return}N.floor=v,N.unitId=null,N.hoverUnit=null,N.hoverFloor=null,N.mode="floor",i.showFloor(v,te.units.value,N.filter)}}function r(v){if(v===null){N.unitId=null;return}const A=hi.value.find(L=>L.id===v);A&&((N.floor!==A.floor||N.mode!=="floor")&&s(A.floor),N.unitId=v)}const o=fs([]);function a(v){i&&(N.blockId!==v&&(N.blockFloor=Math.min(Math.max(N.blockFloor||5,2),l(v))),N.blockId=v,N.mode="block",N.viewSide=0,i.selectBlock(v,N.blockFloor),o.value=i.blockSides(v),f())}function l(v){return te.project.value?.building.blocks?.find(A=>A.id===v)?.levels??1}function c(v){!i||!N.blockId||(i.setBlockFloor(N.blockId,v),f())}function u(){!i||!N.blockId||(N.mode="view",i.showView(N.blockId,N.blockFloor,N.viewSide))}let h=0;function f(){clearTimeout(h),N.blockSun=null,h=window.setTimeout(()=>{i&&N.blockId&&(N.blockSun=i.blockSunMinutes(N.blockId,N.blockFloor,N.sun.day))},60)}function d(){ln.value&&N.blockId?(N.floor=null,N.unitId=null,a(N.blockId)):m()}function m(){N.floor=null,N.blockId=null,N.mode="building",N.floor=null,N.unitId=null,N.hoverUnit=null,i?.flyToBuilding()}function _(){const v=cn.value;!i||!v||(N.mode="walk",i.enterWalk(v,hi.value,y.value))}function g(){const v=cn.value;if(i){if(N.mode==="view"&&N.blockId){a(N.blockId);return}N.xrActive||(v?(N.mode="floor",i.showFloor(v.floor,hi.value,N.filter),i.styleUnits(N.filter,null,v.id)):m())}}async function p(){const v=cn.value;if(!(!i||!v))try{N.xrActive=!0,await i.enterVR(v.floor)}catch{N.xrActive=!1}}function S(v){v.key==="Escape"&&(N.showLead||N.showData?(N.showLead=!1,N.showData=!1):N.mode==="walk"||N.mode==="view"?g():N.mode==="block"?m():N.unitId!==null?N.unitId=null:N.mode==="floor"&&d())}const y=ne(()=>{const v=cn.value;if(!v?.polygon)return[];const A=Ii.value.find(z=>z.n===v.floor),L=A&&tu(A.type);return L?k_(L,v.polygon,ja.value):[]}),x=ne(()=>{const v=cn.value,A=te.project.value,L=te.context.value;if(!v||!A||!L||!y.value.length)return null;const z=Ii.value.find(K=>K.n===v.floor);return H_(y.value,L,ja.value,z.elevation+1.5,Yr.value?.origin)});let F=0;function R(){clearTimeout(F),N.sunMinutes=null;const v=cn.value,A=te.project.value;!v||!A||!i||(F=window.setTimeout(()=>{const L=Ii.value.find(z=>z.n===v.floor);N.sunMinutes=i.sunMinutes(y.value,L.elevation,N.sun.day,ja.value)},60))}Ri(()=>[N.filter.rooms.slice(),N.filter.onlyAvailable,N.hoverUnit,N.unitId],()=>{i?.styleUnits(N.filter,N.hoverUnit,N.unitId)}),Ri(()=>N.unitId,R),Ri(()=>N.sun.day,()=>{R(),N.blockId&&f()}),Ri(()=>[N.places.cats.slice(),N.places.all,N.places.on],()=>{i?.setPlaceFilter(N.places.cats,N.places.all,N.places.on)}),Ri(()=>[N.sun.day,N.sun.hour],([v,A])=>i?.setSun(v,A));function C(v){i?.hoverFloorFromUI(v)}function I(v,A){i?.setStick(v,A)}const E=ne(()=>$l.value.length);return(v,A)=>(ut(),dt("div",{class:xn(["app",`mode-${G(N).mode}`])},[D("div",{ref_key:"host",ref:e,class:"stage"},null,512),!G(N).loading&&G(te).project.value?(ut(),dt(Jt,{key:0},[Ue(IE,{project:G(te).project.value,mode:G(N).mode,onBack:m,onData:A[0]||(A[0]=L=>G(N).showData=!0)},null,8,["project","mode"]),G(ln)?(ut(),dt(Jt,{key:0},[G(N).mode==="building"||G(N).mode==="block"?(ut(),Ln(Rw,{key:0,blocks:G(te).project.value.building.blocks??[],current:G(N).blockId,onSelect:a,onHover:A[1]||(A[1]=L=>G(N).hoverBlock=L)},null,8,["blocks","current"])):pe("",!0),G(N).mode==="building"||G(N).mode==="block"?(ut(),Ln(sT,{key:1,sides:o.value,onClose:m,onView:u,onFloor:c,onOpenFloor:A[2]||(A[2]=L=>s(G(N).blockFloor)),onPlaces:A[3]||(A[3]=L=>G(i)?.flyToPlaces())},null,8,["sides"])):pe("",!0),G(N).mode==="view"&&G(De)?(ut(),dt("div",rT,[D("button",{class:"btn small",onClick:g},A[7]||(A[7]=[D("svg",{width:"14",height:"14",viewBox:"0 0 24 24"},[D("path",{d:"M15 6l-6 6 6 6",stroke:"currentColor","stroke-width":"2.2",fill:"none","stroke-linecap":"round"})],-1),ee(" Назад ")])),D("span",null,[D("b",null,ft(G(De).label),1),ee(" · "+ft(G(N).blockFloor)+" этаж · "+ft(o.value[G(N).viewSide]?.name),1)]),A[8]||(A[8]=D("span",{class:"muted"},"тяните, чтобы осмотреться",-1))])):pe("",!0)],64)):pe("",!0),(!G(ln)||G(N).mode==="floor")&&G(N).mode!=="walk"?(ut(),Ln(VE,{key:1,floors:G($l),current:G(N).floor,count:E.value,onSelect:s,onHover:C},null,8,["floors","current","count"])):pe("",!0),(!G(ln)||G(N).mode==="floor")&&G(N).mode!=="walk"?(ut(),Ln(z1,{key:2,view:x.value,onSelectUnit:r,onWalk:_,onLead:A[4]||(A[4]=L=>G(N).showLead=!0),onBack:d},null,8,["view"])):pe("",!0),G(N).xrActive?pe("",!0):(ut(),Ln($1,{key:3})),G(N).mode==="walk"?(ut(),Ln(Q1,{key:4,"xr-supported":G(N).xrSupported,onExit:g,onVr:p,onStick:I},null,8,["xr-supported"])):pe("",!0),Ue(iw),Ue(e_,{name:"fade"},{default:bd(()=>[G(N).mode==="building"&&!G(N).touched?(ut(),dt("div",oT,ft(G(ln)?"Нажмите на корпус — покажем вид с любого этажа и солнце по сторонам":"Наведите на этаж и нажмите — откроется план с квартирами"),1)):pe("",!0)]),_:1}),G(N).showData?(ut(),Ln(fw,{key:5,onClose:A[5]||(A[5]=L=>G(N).showData=!1)})):pe("",!0),G(N).showLead?(ut(),Ln(mw,{key:6,onClose:A[6]||(A[6]=L=>G(N).showLead=!1)})):pe("",!0)],64)):pe("",!0),G(N).loading?(ut(),Ln(yw,{key:1,progress:G(N).progress,error:G(N).error},null,8,["progress","error"])):pe("",!0)],2))}}),lT=rn(aT,[["__scopeId","data-v-1666a6b3"]]);A_(lT).mount("#app");
