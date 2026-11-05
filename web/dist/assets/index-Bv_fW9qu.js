(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Rc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const de={},Ns=[],Vn=()=>{},Dp=()=>!1,sa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Cc=n=>n.startsWith("onUpdate:"),Fe=Object.assign,Pc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Lp=Object.prototype.hasOwnProperty,ae=(n,t)=>Lp.call(n,t),Ft=Array.isArray,Fs=n=>Vr(n)==="[object Map]",ra=n=>Vr(n)==="[object Set]",xu=n=>Vr(n)==="[object Date]",$t=n=>typeof n=="function",Te=n=>typeof n=="string",Wn=n=>typeof n=="symbol",pe=n=>n!==null&&typeof n=="object",Rf=n=>(pe(n)||$t(n))&&$t(n.then)&&$t(n.catch),Cf=Object.prototype.toString,Vr=n=>Cf.call(n),Ip=n=>Vr(n).slice(8,-1),Pf=n=>Vr(n)==="[object Object]",Dc=n=>Te(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Mr=Rc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oa=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Up=/-(\w)/g,Pi=oa(n=>n.replace(Up,(t,e)=>e?e.toUpperCase():"")),Np=/\B([A-Z])/g,us=oa(n=>n.replace(Np,"-$1").toLowerCase()),Df=oa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Aa=oa(n=>n?`on${Df(n)}`:""),Ai=(n,t)=>!Object.is(n,t),Lo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Lf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},yl=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Fp=n=>{const t=Te(n)?Number(n):NaN;return isNaN(t)?n:t};let Mu;const aa=()=>Mu||(Mu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xe(n){if(Ft(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Te(i)?zp(i):Xe(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Te(n)||pe(n))return n}const Op=/;(?![^(]*\))/g,Bp=/:([^]+)/,kp=/\/\*[^]*?\*\//g;function zp(n){const t={};return n.replace(kp,"").split(Op).forEach(e=>{if(e){const i=e.split(Bp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Gn(n){let t="";if(Te(n))t=n;else if(Ft(n))for(let e=0;e<n.length;e++){const i=Gn(n[e]);i&&(t+=i+" ")}else if(pe(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Hp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vp=Rc(Hp);function If(n){return!!n||n===""}function Gp(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=la(n[i],t[i]);return e}function la(n,t){if(n===t)return!0;let e=xu(n),i=xu(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=Wn(n),i=Wn(t),e||i)return n===t;if(e=Ft(n),i=Ft(t),e||i)return e&&i?Gp(n,t):!1;if(e=pe(n),i=pe(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!la(n[o],t[o]))return!1}}return String(n)===String(t)}function Uf(n,t){return n.findIndex(e=>la(e,t))}const Nf=n=>!!(n&&n.__v_isRef===!0),Rt=n=>Te(n)?n:n==null?"":Ft(n)||pe(n)&&(n.toString===Cf||!$t(n.toString))?Nf(n)?Rt(n.value):JSON.stringify(n,Ff,2):String(n),Ff=(n,t)=>Nf(t)?Ff(n,t.value):Fs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Ra(i,r)+" =>"]=s,e),{})}:ra(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ra(e))}:Wn(t)?Ra(t):pe(t)&&!Ft(t)&&!Pf(t)?String(t):t,Ra=(n,t="")=>{var e;return Wn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cn;class Wp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=cn,!t&&cn&&(this.index=(cn.scopes||(cn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=cn;try{return cn=this,t()}finally{cn=e}}}on(){cn=this}off(){cn=this.parent}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Xp(){return cn}let _e;const Ca=new WeakSet;class Of{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,cn&&cn.active&&cn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ca.has(this)&&(Ca.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||kf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yu(this),zf(this);const t=_e,e=Dn;_e=this,Dn=!0;try{return this.fn()}finally{Hf(this),_e=t,Dn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Uc(t);this.deps=this.depsTail=void 0,yu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ca.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Sl(this)&&this.run()}get dirty(){return Sl(this)}}let Bf=0,yr,Sr;function kf(n,t=!1){if(n.flags|=8,t){n.next=Sr,Sr=n;return}n.next=yr,yr=n}function Lc(){Bf++}function Ic(){if(--Bf>0)return;if(Sr){let t=Sr;for(Sr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;yr;){let t=yr;for(yr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function zf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Hf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Uc(i),$p(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Sl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Vf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Vf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Cr))return;n.globalVersion=Cr;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!Sl(n)){n.flags&=-3;return}const e=_e,i=Dn;_e=n,Dn=!0;try{zf(n);const s=n.fn(n._value);(t.version===0||Ai(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{_e=e,Dn=i,Hf(n),n.flags&=-3}}function Uc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Uc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function $p(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Dn=!0;const Gf=[];function Ni(){Gf.push(Dn),Dn=!1}function Fi(){const n=Gf.pop();Dn=n===void 0?!0:n}function yu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=_e;_e=void 0;try{t()}finally{_e=e}}}let Cr=0;class Yp{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!_e||!Dn||_e===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==_e)e=this.activeLink=new Yp(_e,this),_e.deps?(e.prevDep=_e.depsTail,_e.depsTail.nextDep=e,_e.depsTail=e):_e.deps=_e.depsTail=e,Wf(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=_e.depsTail,e.nextDep=void 0,_e.depsTail.nextDep=e,_e.depsTail=e,_e.deps===e&&(_e.deps=i)}return e}trigger(t){this.version++,Cr++,this.notify(t)}notify(t){Lc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ic()}}}function Wf(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Wf(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const bl=new WeakMap,rs=Symbol(""),El=Symbol(""),Pr=Symbol("");function Ve(n,t,e){if(Dn&&_e){let i=bl.get(n);i||bl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Nc),s.map=i,s.key=e),s.track()}}function oi(n,t,e,i,s,r){const o=bl.get(n);if(!o){Cr++;return}const a=l=>{l&&l.trigger()};if(Lc(),t==="clear")o.forEach(a);else{const l=Ft(n),c=l&&Dc(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,d)=>{(d==="length"||d===Pr||!Wn(d)&&d>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Pr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(rs)),Fs(n)&&a(o.get(El)));break;case"delete":l||(a(o.get(rs)),Fs(n)&&a(o.get(El)));break;case"set":Fs(n)&&a(o.get(rs));break}}Ic()}function ps(n){const t=ne(n);return t===n?t:(Ve(t,"iterate",Pr),yn(n)?t:t.map(Ge))}function ca(n){return Ve(n=ne(n),"iterate",Pr),n}const jp={__proto__:null,[Symbol.iterator](){return Pa(this,Symbol.iterator,Ge)},concat(...n){return ps(this).concat(...n.map(t=>Ft(t)?ps(t):t))},entries(){return Pa(this,"entries",n=>(n[1]=Ge(n[1]),n))},every(n,t){return jn(this,"every",n,t,void 0,arguments)},filter(n,t){return jn(this,"filter",n,t,e=>e.map(Ge),arguments)},find(n,t){return jn(this,"find",n,t,Ge,arguments)},findIndex(n,t){return jn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return jn(this,"findLast",n,t,Ge,arguments)},findLastIndex(n,t){return jn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return jn(this,"forEach",n,t,void 0,arguments)},includes(...n){return Da(this,"includes",n)},indexOf(...n){return Da(this,"indexOf",n)},join(n){return ps(this).join(n)},lastIndexOf(...n){return Da(this,"lastIndexOf",n)},map(n,t){return jn(this,"map",n,t,void 0,arguments)},pop(){return ar(this,"pop")},push(...n){return ar(this,"push",n)},reduce(n,...t){return Su(this,"reduce",n,t)},reduceRight(n,...t){return Su(this,"reduceRight",n,t)},shift(){return ar(this,"shift")},some(n,t){return jn(this,"some",n,t,void 0,arguments)},splice(...n){return ar(this,"splice",n)},toReversed(){return ps(this).toReversed()},toSorted(n){return ps(this).toSorted(n)},toSpliced(...n){return ps(this).toSpliced(...n)},unshift(...n){return ar(this,"unshift",n)},values(){return Pa(this,"values",Ge)}};function Pa(n,t,e){const i=ca(n),s=i[t]();return i!==n&&!yn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=e(r.value)),r}),s}const qp=Array.prototype;function jn(n,t,e,i,s,r){const o=ca(n),a=o!==n&&!yn(n),l=o[t];if(l!==qp[t]){const h=l.apply(n,r);return a?Ge(h):h}let c=e;o!==n&&(a?c=function(h,d){return e.call(this,Ge(h),d,n)}:e.length>2&&(c=function(h,d){return e.call(this,h,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Su(n,t,e,i){const s=ca(n);let r=e;return s!==n&&(yn(n)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,n)}):r=function(o,a,l){return e.call(this,o,Ge(a),l,n)}),s[t](r,...i)}function Da(n,t,e){const i=ne(n);Ve(i,"iterate",Pr);const s=i[t](...e);return(s===-1||s===!1)&&Bc(e[0])?(e[0]=ne(e[0]),i[t](...e)):s}function ar(n,t,e=[]){Ni(),Lc();const i=ne(n)[t].apply(n,e);return Ic(),Fi(),i}const Kp=Rc("__proto__,__v_isRef,__isVue"),Xf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Wn));function Zp(n){Wn(n)||(n=String(n));const t=ne(this);return Ve(t,"has",n),t.hasOwnProperty(n)}class $f{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?am:Kf:r?qf:jf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Ft(t);if(!s){let l;if(o&&(l=jp[e]))return l;if(e==="hasOwnProperty")return Zp}const a=Reflect.get(t,e,$e(t)?t:i);return(Wn(e)?Xf.has(e):Kp(e))||(s||Ve(t,"get",e),r)?a:$e(a)?o&&Dc(e)?a:a.value:pe(a)?s?Zf(a):ua(a):a}}class Yf extends $f{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];if(!this._isShallow){const l=os(r);if(!yn(i)&&!os(i)&&(r=ne(r),i=ne(i)),!Ft(t)&&$e(r)&&!$e(i))return l?!1:(r.value=i,!0)}const o=Ft(t)&&Dc(e)?Number(e)<t.length:ae(t,e),a=Reflect.set(t,e,i,$e(t)?t:s);return t===ne(s)&&(o?Ai(i,r)&&oi(t,"set",e,i):oi(t,"add",e,i)),a}deleteProperty(t,e){const i=ae(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&oi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Wn(e)||!Xf.has(e))&&Ve(t,"has",e),i}ownKeys(t){return Ve(t,"iterate",Ft(t)?"length":rs),Reflect.ownKeys(t)}}class Jp extends $f{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Qp=new Yf,tm=new Jp,em=new Yf(!0);const Tl=n=>n,Kr=n=>Reflect.getPrototypeOf(n);function nm(n,t,e){return function(...i){const s=this.__v_raw,r=ne(s),o=Fs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Tl:t?wl:Ge;return!t&&Ve(r,"iterate",l?El:rs),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Zr(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function im(n,t){const e={get(s){const r=this.__v_raw,o=ne(r),a=ne(s);n||(Ai(s,a)&&Ve(o,"get",s),Ve(o,"get",a));const{has:l}=Kr(o),c=t?Tl:n?wl:Ge;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ve(ne(s),"iterate",rs),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=ne(r),a=ne(s);return n||(Ai(s,a)&&Ve(o,"has",s),Ve(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ne(a),c=t?Tl:n?wl:Ge;return!n&&Ve(l,"iterate",rs),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Fe(e,n?{add:Zr("add"),set:Zr("set"),delete:Zr("delete"),clear:Zr("clear")}:{add(s){!t&&!yn(s)&&!os(s)&&(s=ne(s));const r=ne(this);return Kr(r).has.call(r,s)||(r.add(s),oi(r,"add",s,s)),this},set(s,r){!t&&!yn(r)&&!os(r)&&(r=ne(r));const o=ne(this),{has:a,get:l}=Kr(o);let c=a.call(o,s);c||(s=ne(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Ai(r,u)&&oi(o,"set",s,r):oi(o,"add",s,r),this},delete(s){const r=ne(this),{has:o,get:a}=Kr(r);let l=o.call(r,s);l||(s=ne(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&oi(r,"delete",s,void 0),c},clear(){const s=ne(this),r=s.size!==0,o=s.clear();return r&&oi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=nm(s,n,t)}),e}function Fc(n,t){const e=im(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ae(e,s)&&s in i?e:i,s,r)}const sm={get:Fc(!1,!1)},rm={get:Fc(!1,!0)},om={get:Fc(!0,!1)};const jf=new WeakMap,qf=new WeakMap,Kf=new WeakMap,am=new WeakMap;function lm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cm(n){return n.__v_skip||!Object.isExtensible(n)?0:lm(Ip(n))}function ua(n){return os(n)?n:Oc(n,!1,Qp,sm,jf)}function um(n){return Oc(n,!1,em,rm,qf)}function Zf(n){return Oc(n,!0,tm,om,Kf)}function Oc(n,t,e,i,s){if(!pe(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=cm(n);if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Os(n){return os(n)?Os(n.__v_raw):!!(n&&n.__v_isReactive)}function os(n){return!!(n&&n.__v_isReadonly)}function yn(n){return!!(n&&n.__v_isShallow)}function Bc(n){return n?!!n.__v_raw:!1}function ne(n){const t=n&&n.__v_raw;return t?ne(t):n}function hm(n){return!ae(n,"__v_skip")&&Object.isExtensible(n)&&Lf(n,"__v_skip",!0),n}const Ge=n=>pe(n)?ua(n):n,wl=n=>pe(n)?Zf(n):n;function $e(n){return n?n.__v_isRef===!0:!1}function Bs(n){return Jf(n,!1)}function lr(n){return Jf(n,!0)}function Jf(n,t){return $e(n)?n:new fm(n,t)}class fm{constructor(t,e){this.dep=new Nc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:ne(t),this._value=e?t:Ge(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||yn(t)||os(t);t=i?t:ne(t),Ai(t,e)&&(this._rawValue=t,this._value=i?t:Ge(t),this.dep.trigger())}}function ut(n){return $e(n)?n.value:n}const dm={get:(n,t,e)=>t==="__v_raw"?n:ut(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return $e(s)&&!$e(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Qf(n){return Os(n)?n:new Proxy(n,dm)}class pm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Nc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Cr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&_e!==this)return kf(this,!0),!0}get value(){const t=this.dep.track();return Vf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function mm(n,t,e=!1){let i,s;return $t(n)?i=n:(i=n.get,s=n.set),new pm(i,s,e)}const Jr={},Go=new WeakMap;let Ki;function gm(n,t=!1,e=Ki){if(e){let i=Go.get(e);i||Go.set(e,i=[]),i.push(n)}}function _m(n,t,e=de){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=v=>s?v:yn(v)||s===!1||s===0?ai(v,1):ai(v);let u,h,d,p,g=!1,_=!1;if($e(n)?(h=()=>n.value,g=yn(n)):Os(n)?(h=()=>c(n),g=!0):Ft(n)?(_=!0,g=n.some(v=>Os(v)||yn(v)),h=()=>n.map(v=>{if($e(v))return v.value;if(Os(v))return c(v);if($t(v))return l?l(v,2):v()})):$t(n)?t?h=l?()=>l(n,2):n:h=()=>{if(d){Ni();try{d()}finally{Fi()}}const v=Ki;Ki=u;try{return l?l(n,3,[p]):n(p)}finally{Ki=v}}:h=Vn,t&&s){const v=h,I=s===!0?1/0:s;h=()=>ai(v(),I)}const m=Xp(),f=()=>{u.stop(),m&&m.active&&Pc(m.effects,u)};if(r&&t){const v=t;t=(...I)=>{v(...I),f()}}let M=_?new Array(n.length).fill(Jr):Jr;const y=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(t){const I=u.run();if(s||g||(_?I.some((C,A)=>Ai(C,M[A])):Ai(I,M))){d&&d();const C=Ki;Ki=u;try{const A=[I,M===Jr?void 0:_&&M[0]===Jr?[]:M,p];l?l(t,3,A):t(...A),M=I}finally{Ki=C}}}else u.run()};return a&&a(y),u=new Of(h),u.scheduler=o?()=>o(y,!1):y,p=v=>gm(v,!1,u),d=u.onStop=()=>{const v=Go.get(u);if(v){if(l)l(v,4);else for(const I of v)I();Go.delete(u)}},t?i?y(!0):M=u.run():o?o(y.bind(null,!0),!0):u.run(),f.pause=u.pause.bind(u),f.resume=u.resume.bind(u),f.stop=f,f}function ai(n,t=1/0,e){if(t<=0||!pe(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,$e(n))ai(n.value,t,e);else if(Ft(n))for(let i=0;i<n.length;i++)ai(n[i],t,e);else if(ra(n)||Fs(n))n.forEach(i=>{ai(i,t,e)});else if(Pf(n)){for(const i in n)ai(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ai(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gr(n,t,e,i){try{return i?n(...i):n()}catch(s){ha(s,t,e)}}function In(n,t,e,i){if($t(n)){const s=Gr(n,t,e,i);return s&&Rf(s)&&s.catch(r=>{ha(r,t,e)}),s}if(Ft(n)){const s=[];for(let r=0;r<n.length;r++)s.push(In(n[r],t,e,i));return s}}function ha(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||de;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){Ni(),Gr(r,null,10,[n,l,c]),Fi();return}}vm(n,e,s,i,o)}function vm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Je=[];let On=-1;const ks=[];let Si=null,Ps=0;const td=Promise.resolve();let Wo=null;function xm(n){const t=Wo||td;return n?t.then(this?n.bind(this):n):t}function Mm(n){let t=On+1,e=Je.length;for(;t<e;){const i=t+e>>>1,s=Je[i],r=Dr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function kc(n){if(!(n.flags&1)){const t=Dr(n),e=Je[Je.length-1];!e||!(n.flags&2)&&t>=Dr(e)?Je.push(n):Je.splice(Mm(t),0,n),n.flags|=1,ed()}}function ed(){Wo||(Wo=td.then(id))}function ym(n){Ft(n)?ks.push(...n):Si&&n.id===-1?Si.splice(Ps+1,0,n):n.flags&1||(ks.push(n),n.flags|=1),ed()}function bu(n,t,e=On+1){for(;e<Je.length;e++){const i=Je[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Je.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function nd(n){if(ks.length){const t=[...new Set(ks)].sort((e,i)=>Dr(e)-Dr(i));if(ks.length=0,Si){Si.push(...t);return}for(Si=t,Ps=0;Ps<Si.length;Ps++){const e=Si[Ps];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Si=null,Ps=0}}const Dr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function id(n){try{for(On=0;On<Je.length;On++){const t=Je[On];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Gr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;On<Je.length;On++){const t=Je[On];t&&(t.flags&=-2)}On=-1,Je.length=0,nd(),Wo=null,(Je.length||ks.length)&&id()}}let fn=null,sd=null;function Xo(n){const t=fn;return fn=n,sd=n&&n.type.__scopeId||null,t}function rd(n,t=fn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Iu(-1);const r=Xo(t);let o;try{o=n(...s)}finally{Xo(r),i._d&&Iu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function $o(n,t){if(fn===null)return n;const e=_a(fn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=de]=t[s];r&&($t(r)&&(r={mounted:r,updated:r}),r.deep&&ai(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Bi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ni(),In(l,e,8,[n.el,a,n,t]),Fi())}}const Sm=Symbol("_vte"),od=n=>n.__isTeleport,bi=Symbol("_leaveCb"),Qr=Symbol("_enterCb");function bm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return zc(()=>{n.isMounted=!0}),pa(()=>{n.isUnmounting=!0}),n}const _n=[Function,Array],ad={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_n,onEnter:_n,onAfterEnter:_n,onEnterCancelled:_n,onBeforeLeave:_n,onLeave:_n,onAfterLeave:_n,onLeaveCancelled:_n,onBeforeAppear:_n,onAppear:_n,onAfterAppear:_n,onAppearCancelled:_n},ld=n=>{const t=n.subTree;return t.component?ld(t.component):t},Em={name:"BaseTransition",props:ad,setup(n,{slots:t}){const e=Mg(),i=bm();return()=>{const s=t.default&&hd(t.default(),!0);if(!s||!s.length)return;const r=cd(s),o=ne(n),{mode:a}=o;if(i.isLeaving)return La(r);const l=Eu(r);if(!l)return La(r);let c=Al(l,o,i,e,h=>c=h);l.type!==sn&&Lr(l,c);let u=e.subTree&&Eu(e.subTree);if(u&&u.type!==sn&&!Ji(l,u)&&ld(e).type!==sn){let h=Al(u,o,i,e);if(Lr(u,h),a==="out-in"&&l.type!==sn)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete h.afterLeave,u=void 0},La(r);a==="in-out"&&l.type!==sn?h.delayLeave=(d,p,g)=>{const _=ud(i,u);_[String(u.key)]=u,d[bi]=()=>{p(),d[bi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function cd(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==sn){t=e;break}}return t}const Tm=Em;function ud(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function Al(n,t,e,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:p,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:f,onAfterAppear:M,onAppearCancelled:y}=t,v=String(n.key),I=ud(e,n),C=(E,S)=>{E&&In(E,i,9,S)},A=(E,S)=>{const P=S[1];C(E,S),Ft(E)?E.every(N=>N.length<=1)&&P():E.length<=1&&P()},L={mode:o,persisted:a,beforeEnter(E){let S=l;if(!e.isMounted)if(r)S=m||l;else return;E[bi]&&E[bi](!0);const P=I[v];P&&Ji(n,P)&&P.el[bi]&&P.el[bi](),C(S,[E])},enter(E){let S=c,P=u,N=h;if(!e.isMounted)if(r)S=f||c,P=M||u,N=y||h;else return;let z=!1;const K=E[Qr]=it=>{z||(z=!0,it?C(N,[E]):C(P,[E]),L.delayedLeave&&L.delayedLeave(),E[Qr]=void 0)};S?A(S,[E,K]):K()},leave(E,S){const P=String(n.key);if(E[Qr]&&E[Qr](!0),e.isUnmounting)return S();C(d,[E]);let N=!1;const z=E[bi]=K=>{N||(N=!0,S(),K?C(_,[E]):C(g,[E]),E[bi]=void 0,I[P]===n&&delete I[P])};I[P]=n,p?A(p,[E,z]):z()},clone(E){const S=Al(E,t,e,i,s);return s&&s(S),S}};return L}function La(n){if(fa(n))return n=Di(n),n.children=null,n}function Eu(n){if(!fa(n))return od(n.type)&&n.children?cd(n.children):n;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&$t(e.default))return e.default()}}function Lr(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Lr(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function hd(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:r);o.type===ie?(o.patchFlag&128&&s++,i=i.concat(hd(o.children,t,a))):(t||o.type!==sn)&&i.push(a!=null?Di(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Sn(n,t){return $t(n)?Fe({name:n.name},t,{setup:n}):n}function fd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Yo(n,t,e,i,s=!1){if(Ft(n)){n.forEach((g,_)=>Yo(g,t&&(Ft(t)?t[_]:t),e,i,s));return}if(br(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Yo(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?_a(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===de?a.refs={}:a.refs,h=a.setupState,d=ne(h),p=h===de?()=>!1:g=>ae(d,g);if(c!=null&&c!==l&&(Te(c)?(u[c]=null,p(c)&&(h[c]=null)):$e(c)&&(c.value=null)),$t(l))Gr(l,a,12,[o,u]);else{const g=Te(l),_=$e(l);if(g||_){const m=()=>{if(n.f){const f=g?p(l)?h[l]:u[l]:l.value;s?Ft(f)&&Pc(f,r):Ft(f)?f.includes(r)||f.push(r):g?(u[l]=[r],p(l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,p(l)&&(h[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,ln(m,e)):m()}}}aa().requestIdleCallback;aa().cancelIdleCallback;const br=n=>!!n.type.__asyncLoader,fa=n=>n.type.__isKeepAlive;function wm(n,t){dd(n,"a",t)}function Am(n,t){dd(n,"da",t)}function dd(n,t,e=We){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(da(t,i,e),e){let s=e.parent;for(;s&&s.parent;)fa(s.parent.vnode)&&Rm(i,t,e,s),s=s.parent}}function Rm(n,t,e,i){const s=da(t,n,i,!0);pd(()=>{Pc(i[t],s)},e)}function da(n,t,e=We,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Ni();const a=Wr(e),l=In(t,e,n,o);return a(),Fi(),l});return i?s.unshift(r):s.push(r),r}}const fi=n=>(t,e=We)=>{(!Ur||n==="sp")&&da(n,(...i)=>t(...i),e)},Cm=fi("bm"),zc=fi("m"),Pm=fi("bu"),Dm=fi("u"),pa=fi("bum"),pd=fi("um"),Lm=fi("sp"),Im=fi("rtg"),Um=fi("rtc");function Nm(n,t=We){da("ec",n,t)}const Fm=Symbol.for("v-ndc");function dn(n,t,e,i){let s;const r=e,o=Ft(n);if(o||Te(n)){const a=o&&Os(n);let l=!1;a&&(l=!yn(n),n=ca(n)),s=new Array(n.length);for(let c=0,u=n.length;c<u;c++)s[c]=t(l?Ge(n[c]):n[c],c,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(pe(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Rl=n=>n?Nd(n)?_a(n):Rl(n.parent):null,Er=Fe(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Rl(n.parent),$root:n=>Rl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>gd(n),$forceUpdate:n=>n.f||(n.f=()=>{kc(n.update)}),$nextTick:n=>n.n||(n.n=xm.bind(n.proxy)),$watch:n=>sg.bind(n)}),Ia=(n,t)=>n!==de&&!n.__isScriptSetup&&ae(n,t),Om={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Ia(i,t))return o[t]=1,i[t];if(s!==de&&ae(s,t))return o[t]=2,s[t];if((c=n.propsOptions[0])&&ae(c,t))return o[t]=3,r[t];if(e!==de&&ae(e,t))return o[t]=4,e[t];Cl&&(o[t]=0)}}const u=Er[t];let h,d;if(u)return t==="$attrs"&&Ve(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==de&&ae(e,t))return o[t]=4,e[t];if(d=l.config.globalProperties,ae(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Ia(s,t)?(s[t]=e,!0):i!==de&&ae(i,t)?(i[t]=e,!0):ae(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!e[o]||n!==de&&ae(n,o)||Ia(t,o)||(a=r[0])&&ae(a,o)||ae(i,o)||ae(Er,o)||ae(s.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ae(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Tu(n){return Ft(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Cl=!0;function Bm(n){const t=gd(n),e=n.proxy,i=n.ctx;Cl=!1,t.beforeCreate&&wu(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:f,beforeUnmount:M,destroyed:y,unmounted:v,render:I,renderTracked:C,renderTriggered:A,errorCaptured:L,serverPrefetch:E,expose:S,inheritAttrs:P,components:N,directives:z,filters:K}=t;if(c&&km(c,i,null),o)for(const et in o){const G=o[et];$t(G)&&(i[et]=G.bind(e))}if(s){const et=s.call(e,e);pe(et)&&(n.data=ua(et))}if(Cl=!0,r)for(const et in r){const G=r[et],pt=$t(G)?G.bind(e,e):$t(G.get)?G.get.bind(e,e):Vn,bt=!$t(G)&&$t(G.set)?G.set.bind(e):Vn,At=Re({get:pt,set:bt});Object.defineProperty(i,et,{enumerable:!0,configurable:!0,get:()=>At.value,set:Bt=>At.value=Bt})}if(a)for(const et in a)md(a[et],i,e,et);if(l){const et=$t(l)?l.call(e):l;Reflect.ownKeys(et).forEach(G=>{Xm(G,et[G])})}u&&wu(u,n,"c");function q(et,G){Ft(G)?G.forEach(pt=>et(pt.bind(e))):G&&et(G.bind(e))}if(q(Cm,h),q(zc,d),q(Pm,p),q(Dm,g),q(wm,_),q(Am,m),q(Nm,L),q(Um,C),q(Im,A),q(pa,M),q(pd,v),q(Lm,E),Ft(S))if(S.length){const et=n.exposed||(n.exposed={});S.forEach(G=>{Object.defineProperty(et,G,{get:()=>e[G],set:pt=>e[G]=pt})})}else n.exposed||(n.exposed={});I&&n.render===Vn&&(n.render=I),P!=null&&(n.inheritAttrs=P),N&&(n.components=N),z&&(n.directives=z),E&&fd(n)}function km(n,t,e=Vn){Ft(n)&&(n=Pl(n));for(const i in n){const s=n[i];let r;pe(s)?"default"in s?r=Io(s.from||i,s.default,!0):r=Io(s.from||i):r=Io(s),$e(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function wu(n,t,e){In(Ft(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function md(n,t,e,i){let s=i.includes(".")?Pd(e,i):()=>e[i];if(Te(n)){const r=t[n];$t(r)&&ns(s,r)}else if($t(n))ns(s,n.bind(e));else if(pe(n))if(Ft(n))n.forEach(r=>md(r,t,e,i));else{const r=$t(n.handler)?n.handler.bind(e):t[n.handler];$t(r)&&ns(s,r,n)}}function gd(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>jo(l,c,o,!0)),jo(l,t,o)),pe(t)&&r.set(t,l),l}function jo(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&jo(n,r,e,!0),s&&s.forEach(o=>jo(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=zm[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const zm={data:Au,props:Ru,emits:Ru,methods:_r,computed:_r,beforeCreate:je,created:je,beforeMount:je,mounted:je,beforeUpdate:je,updated:je,beforeDestroy:je,beforeUnmount:je,destroyed:je,unmounted:je,activated:je,deactivated:je,errorCaptured:je,serverPrefetch:je,components:_r,directives:_r,watch:Vm,provide:Au,inject:Hm};function Au(n,t){return t?n?function(){return Fe($t(n)?n.call(this,this):n,$t(t)?t.call(this,this):t)}:t:n}function Hm(n,t){return _r(Pl(n),Pl(t))}function Pl(n){if(Ft(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function je(n,t){return n?[...new Set([].concat(n,t))]:t}function _r(n,t){return n?Fe(Object.create(null),n,t):t}function Ru(n,t){return n?Ft(n)&&Ft(t)?[...new Set([...n,...t])]:Fe(Object.create(null),Tu(n),Tu(t??{})):t}function Vm(n,t){if(!n)return t;if(!t)return n;const e=Fe(Object.create(null),n);for(const i in t)e[i]=je(n[i],t[i]);return e}function _d(){return{app:null,config:{isNativeTag:Dp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gm=0;function Wm(n,t){return function(i,s=null){$t(i)||(i=Fe({},i)),s!=null&&!pe(s)&&(s=null);const r=_d(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Gm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Ag,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&$t(u.install)?(o.add(u),u.install(c,...h)):$t(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const p=c._ceVNode||Ue(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,_a(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(In(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=zs;zs=c;try{return u()}finally{zs=h}}};return c}}let zs=null;function Xm(n,t){if(We){let e=We.provides;const i=We.parent&&We.parent.provides;i===e&&(e=We.provides=Object.create(i)),e[n]=t}}function Io(n,t,e=!1){const i=We||fn;if(i||zs){const s=zs?zs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&$t(t)?t.call(i&&i.proxy):t}}const vd={},xd=()=>Object.create(vd),Md=n=>Object.getPrototypeOf(n)===vd;function $m(n,t,e,i=!1){const s={},r=xd();n.propsDefaults=Object.create(null),yd(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:um(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Ym(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ne(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ma(n.emitsOptions,d))continue;const p=t[d];if(l)if(ae(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=Pi(d);s[g]=Dl(l,a,g,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{yd(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!ae(t,h)&&((u=us(h))===h||!ae(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=Dl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!ae(t,h))&&(delete r[h],c=!0)}c&&oi(n.attrs,"set","")}function yd(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Mr(l))continue;const c=t[l];let u;s&&ae(s,u=Pi(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:ma(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ne(e),c=a||de;for(let u=0;u<r.length;u++){const h=r[u];e[h]=Dl(s,l,h,c[h],n,!ae(c,h))}}return o}function Dl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=ae(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$t(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Wr(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===us(e))&&(i=!0))}return i}const jm=new WeakMap;function Sd(n,t,e=!1){const i=e?jm:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!$t(n)){const u=h=>{l=!0;const[d,p]=Sd(h,t,!0);Fe(o,d),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return pe(n)&&i.set(n,Ns),Ns;if(Ft(r))for(let u=0;u<r.length;u++){const h=Pi(r[u]);Cu(h)&&(o[h]=de)}else if(r)for(const u in r){const h=Pi(u);if(Cu(h)){const d=r[u],p=o[h]=Ft(d)||$t(d)?{type:d}:Fe({},d),g=p.type;let _=!1,m=!0;if(Ft(g))for(let f=0;f<g.length;++f){const M=g[f],y=$t(M)&&M.name;if(y==="Boolean"){_=!0;break}else y==="String"&&(m=!1)}else _=$t(g)&&g.name==="Boolean";p[0]=_,p[1]=m,(_||ae(p,"default"))&&a.push(h)}}const c=[o,a];return pe(n)&&i.set(n,c),c}function Cu(n){return n[0]!=="$"&&!Mr(n)}const bd=n=>n[0]==="_"||n==="$stable",Hc=n=>Ft(n)?n.map(Bn):[Bn(n)],qm=(n,t,e)=>{if(t._n)return t;const i=rd((...s)=>Hc(t(...s)),e);return i._c=!1,i},Ed=(n,t,e)=>{const i=n._ctx;for(const s in n){if(bd(s))continue;const r=n[s];if($t(r))t[s]=qm(s,r,i);else if(r!=null){const o=Hc(r);t[s]=()=>o}}},Td=(n,t)=>{const e=Hc(t);n.slots.default=()=>e},wd=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},Km=(n,t,e)=>{const i=n.slots=xd();if(n.vnode.shapeFlag&32){const s=t._;s?(wd(i,t,e),e&&Lf(i,"_",s,!0)):Ed(t,i)}else t&&Td(n,t)},Zm=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=de;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:wd(s,t,e):(r=!t.$stable,Ed(t,s)),o=t}else t&&(Td(n,t),o={default:1});if(r)for(const a in s)!bd(a)&&o[a]==null&&delete s[a]},ln=hg;function Jm(n){return Qm(n)}function Qm(n,t){const e=aa();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Vn,insertStaticContent:g}=n,_=(R,U,w,ot=null,j=null,J=null,tt=void 0,at=null,Z=!!U.dynamicChildren)=>{if(R===U)return;R&&!Ji(R,U)&&(ot=_t(R),Bt(R,j,J,!0),R=null),U.patchFlag===-2&&(Z=!1,U.dynamicChildren=null);const{type:b,ref:x,shapeFlag:D}=U;switch(b){case ga:m(R,U,w,ot);break;case sn:f(R,U,w,ot);break;case Uo:R==null&&M(U,w,ot,tt);break;case ie:N(R,U,w,ot,j,J,tt,at,Z);break;default:D&1?I(R,U,w,ot,j,J,tt,at,Z):D&6?z(R,U,w,ot,j,J,tt,at,Z):(D&64||D&128)&&b.process(R,U,w,ot,j,J,tt,at,Z,Wt)}x!=null&&j&&Yo(x,R&&R.ref,J,U||R,!U)},m=(R,U,w,ot)=>{if(R==null)i(U.el=a(U.children),w,ot);else{const j=U.el=R.el;U.children!==R.children&&c(j,U.children)}},f=(R,U,w,ot)=>{R==null?i(U.el=l(U.children||""),w,ot):U.el=R.el},M=(R,U,w,ot)=>{[R.el,R.anchor]=g(R.children,U,w,ot,R.el,R.anchor)},y=({el:R,anchor:U},w,ot)=>{let j;for(;R&&R!==U;)j=d(R),i(R,w,ot),R=j;i(U,w,ot)},v=({el:R,anchor:U})=>{let w;for(;R&&R!==U;)w=d(R),s(R),R=w;s(U)},I=(R,U,w,ot,j,J,tt,at,Z)=>{U.type==="svg"?tt="svg":U.type==="math"&&(tt="mathml"),R==null?C(U,w,ot,j,J,tt,at,Z):E(R,U,j,J,tt,at,Z)},C=(R,U,w,ot,j,J,tt,at)=>{let Z,b;const{props:x,shapeFlag:D,transition:V,dirs:X}=R;if(Z=R.el=o(R.type,J,x&&x.is,x),D&8?u(Z,R.children):D&16&&L(R.children,Z,null,ot,j,Ua(R,J),tt,at),X&&Bi(R,null,ot,"created"),A(Z,R,R.scopeId,tt,ot),x){for(const dt in x)dt!=="value"&&!Mr(dt)&&r(Z,dt,null,x[dt],J,ot);"value"in x&&r(Z,"value",null,x.value,J),(b=x.onVnodeBeforeMount)&&Nn(b,ot,R)}X&&Bi(R,null,ot,"beforeMount");const W=tg(j,V);W&&V.beforeEnter(Z),i(Z,U,w),((b=x&&x.onVnodeMounted)||W||X)&&ln(()=>{b&&Nn(b,ot,R),W&&V.enter(Z),X&&Bi(R,null,ot,"mounted")},j)},A=(R,U,w,ot,j)=>{if(w&&p(R,w),ot)for(let J=0;J<ot.length;J++)p(R,ot[J]);if(j){let J=j.subTree;if(U===J||Ld(J.type)&&(J.ssContent===U||J.ssFallback===U)){const tt=j.vnode;A(R,tt,tt.scopeId,tt.slotScopeIds,j.parent)}}},L=(R,U,w,ot,j,J,tt,at,Z=0)=>{for(let b=Z;b<R.length;b++){const x=R[b]=at?Ei(R[b]):Bn(R[b]);_(null,x,U,w,ot,j,J,tt,at)}},E=(R,U,w,ot,j,J,tt)=>{const at=U.el=R.el;let{patchFlag:Z,dynamicChildren:b,dirs:x}=U;Z|=R.patchFlag&16;const D=R.props||de,V=U.props||de;let X;if(w&&ki(w,!1),(X=V.onVnodeBeforeUpdate)&&Nn(X,w,U,R),x&&Bi(U,R,w,"beforeUpdate"),w&&ki(w,!0),(D.innerHTML&&V.innerHTML==null||D.textContent&&V.textContent==null)&&u(at,""),b?S(R.dynamicChildren,b,at,w,ot,Ua(U,j),J):tt||G(R,U,at,null,w,ot,Ua(U,j),J,!1),Z>0){if(Z&16)P(at,D,V,w,j);else if(Z&2&&D.class!==V.class&&r(at,"class",null,V.class,j),Z&4&&r(at,"style",D.style,V.style,j),Z&8){const W=U.dynamicProps;for(let dt=0;dt<W.length;dt++){const lt=W[dt],mt=D[lt],kt=V[lt];(kt!==mt||lt==="value")&&r(at,lt,mt,kt,j,w)}}Z&1&&R.children!==U.children&&u(at,U.children)}else!tt&&b==null&&P(at,D,V,w,j);((X=V.onVnodeUpdated)||x)&&ln(()=>{X&&Nn(X,w,U,R),x&&Bi(U,R,w,"updated")},ot)},S=(R,U,w,ot,j,J,tt)=>{for(let at=0;at<U.length;at++){const Z=R[at],b=U[at],x=Z.el&&(Z.type===ie||!Ji(Z,b)||Z.shapeFlag&70)?h(Z.el):w;_(Z,b,x,null,ot,j,J,tt,!0)}},P=(R,U,w,ot,j)=>{if(U!==w){if(U!==de)for(const J in U)!Mr(J)&&!(J in w)&&r(R,J,U[J],null,j,ot);for(const J in w){if(Mr(J))continue;const tt=w[J],at=U[J];tt!==at&&J!=="value"&&r(R,J,at,tt,j,ot)}"value"in w&&r(R,"value",U.value,w.value,j)}},N=(R,U,w,ot,j,J,tt,at,Z)=>{const b=U.el=R?R.el:a(""),x=U.anchor=R?R.anchor:a("");let{patchFlag:D,dynamicChildren:V,slotScopeIds:X}=U;X&&(at=at?at.concat(X):X),R==null?(i(b,w,ot),i(x,w,ot),L(U.children||[],w,x,j,J,tt,at,Z)):D>0&&D&64&&V&&R.dynamicChildren?(S(R.dynamicChildren,V,w,j,J,tt,at),(U.key!=null||j&&U===j.subTree)&&Ad(R,U,!0)):G(R,U,w,x,j,J,tt,at,Z)},z=(R,U,w,ot,j,J,tt,at,Z)=>{U.slotScopeIds=at,R==null?U.shapeFlag&512?j.ctx.activate(U,w,ot,tt,Z):K(U,w,ot,j,J,tt,Z):it(R,U,Z)},K=(R,U,w,ot,j,J,tt)=>{const at=R.component=xg(R,ot,j);if(fa(R)&&(at.ctx.renderer=Wt),yg(at,!1,tt),at.asyncDep){if(j&&j.registerDep(at,q,tt),!R.el){const Z=at.subTree=Ue(sn);f(null,Z,U,w)}}else q(at,R,U,w,j,J,tt)},it=(R,U,w)=>{const ot=U.component=R.component;if(cg(R,U,w))if(ot.asyncDep&&!ot.asyncResolved){et(ot,U,w);return}else ot.next=U,ot.update();else U.el=R.el,ot.vnode=U},q=(R,U,w,ot,j,J,tt)=>{const at=()=>{if(R.isMounted){let{next:D,bu:V,u:X,parent:W,vnode:dt}=R;{const xt=Rd(R);if(xt){D&&(D.el=dt.el,et(R,D,tt)),xt.asyncDep.then(()=>{R.isUnmounted||at()});return}}let lt=D,mt;ki(R,!1),D?(D.el=dt.el,et(R,D,tt)):D=dt,V&&Lo(V),(mt=D.props&&D.props.onVnodeBeforeUpdate)&&Nn(mt,W,D,dt),ki(R,!0);const kt=Du(R),ct=R.subTree;R.subTree=kt,_(ct,kt,h(ct.el),_t(ct),R,j,J),D.el=kt.el,lt===null&&ug(R,kt.el),X&&ln(X,j),(mt=D.props&&D.props.onVnodeUpdated)&&ln(()=>Nn(mt,W,D,dt),j)}else{let D;const{el:V,props:X}=U,{bm:W,m:dt,parent:lt,root:mt,type:kt}=R,ct=br(U);ki(R,!1),W&&Lo(W),!ct&&(D=X&&X.onVnodeBeforeMount)&&Nn(D,lt,U),ki(R,!0);{mt.ce&&mt.ce._injectChildStyle(kt);const xt=R.subTree=Du(R);_(null,xt,w,ot,R,j,J),U.el=xt.el}if(dt&&ln(dt,j),!ct&&(D=X&&X.onVnodeMounted)){const xt=U;ln(()=>Nn(D,lt,xt),j)}(U.shapeFlag&256||lt&&br(lt.vnode)&&lt.vnode.shapeFlag&256)&&R.a&&ln(R.a,j),R.isMounted=!0,U=w=ot=null}};R.scope.on();const Z=R.effect=new Of(at);R.scope.off();const b=R.update=Z.run.bind(Z),x=R.job=Z.runIfDirty.bind(Z);x.i=R,x.id=R.uid,Z.scheduler=()=>kc(x),ki(R,!0),b()},et=(R,U,w)=>{U.component=R;const ot=R.vnode.props;R.vnode=U,R.next=null,Ym(R,U.props,ot,w),Zm(R,U.children,w),Ni(),bu(R),Fi()},G=(R,U,w,ot,j,J,tt,at,Z=!1)=>{const b=R&&R.children,x=R?R.shapeFlag:0,D=U.children,{patchFlag:V,shapeFlag:X}=U;if(V>0){if(V&128){bt(b,D,w,ot,j,J,tt,at,Z);return}else if(V&256){pt(b,D,w,ot,j,J,tt,at,Z);return}}X&8?(x&16&&wt(b,j,J),D!==b&&u(w,D)):x&16?X&16?bt(b,D,w,ot,j,J,tt,at,Z):wt(b,j,J,!0):(x&8&&u(w,""),X&16&&L(D,w,ot,j,J,tt,at,Z))},pt=(R,U,w,ot,j,J,tt,at,Z)=>{R=R||Ns,U=U||Ns;const b=R.length,x=U.length,D=Math.min(b,x);let V;for(V=0;V<D;V++){const X=U[V]=Z?Ei(U[V]):Bn(U[V]);_(R[V],X,w,null,j,J,tt,at,Z)}b>x?wt(R,j,J,!0,!1,D):L(U,w,ot,j,J,tt,at,Z,D)},bt=(R,U,w,ot,j,J,tt,at,Z)=>{let b=0;const x=U.length;let D=R.length-1,V=x-1;for(;b<=D&&b<=V;){const X=R[b],W=U[b]=Z?Ei(U[b]):Bn(U[b]);if(Ji(X,W))_(X,W,w,null,j,J,tt,at,Z);else break;b++}for(;b<=D&&b<=V;){const X=R[D],W=U[V]=Z?Ei(U[V]):Bn(U[V]);if(Ji(X,W))_(X,W,w,null,j,J,tt,at,Z);else break;D--,V--}if(b>D){if(b<=V){const X=V+1,W=X<x?U[X].el:ot;for(;b<=V;)_(null,U[b]=Z?Ei(U[b]):Bn(U[b]),w,W,j,J,tt,at,Z),b++}}else if(b>V)for(;b<=D;)Bt(R[b],j,J,!0),b++;else{const X=b,W=b,dt=new Map;for(b=W;b<=V;b++){const gt=U[b]=Z?Ei(U[b]):Bn(U[b]);gt.key!=null&&dt.set(gt.key,b)}let lt,mt=0;const kt=V-W+1;let ct=!1,xt=0;const Ut=new Array(kt);for(b=0;b<kt;b++)Ut[b]=0;for(b=X;b<=D;b++){const gt=R[b];if(mt>=kt){Bt(gt,j,J,!0);continue}let Vt;if(gt.key!=null)Vt=dt.get(gt.key);else for(lt=W;lt<=V;lt++)if(Ut[lt-W]===0&&Ji(gt,U[lt])){Vt=lt;break}Vt===void 0?Bt(gt,j,J,!0):(Ut[Vt-W]=b+1,Vt>=xt?xt=Vt:ct=!0,_(gt,U[Vt],w,null,j,J,tt,at,Z),mt++)}const zt=ct?eg(Ut):Ns;for(lt=zt.length-1,b=kt-1;b>=0;b--){const gt=W+b,Vt=U[gt],Xt=gt+1<x?U[gt+1].el:ot;Ut[b]===0?_(null,Vt,w,Xt,j,J,tt,at,Z):ct&&(lt<0||b!==zt[lt]?At(Vt,w,Xt,2):lt--)}}},At=(R,U,w,ot,j=null)=>{const{el:J,type:tt,transition:at,children:Z,shapeFlag:b}=R;if(b&6){At(R.component.subTree,U,w,ot);return}if(b&128){R.suspense.move(U,w,ot);return}if(b&64){tt.move(R,U,w,Wt);return}if(tt===ie){i(J,U,w);for(let D=0;D<Z.length;D++)At(Z[D],U,w,ot);i(R.anchor,U,w);return}if(tt===Uo){y(R,U,w);return}if(ot!==2&&b&1&&at)if(ot===0)at.beforeEnter(J),i(J,U,w),ln(()=>at.enter(J),j);else{const{leave:D,delayLeave:V,afterLeave:X}=at,W=()=>i(J,U,w),dt=()=>{D(J,()=>{W(),X&&X()})};V?V(J,W,dt):dt()}else i(J,U,w)},Bt=(R,U,w,ot=!1,j=!1)=>{const{type:J,props:tt,ref:at,children:Z,dynamicChildren:b,shapeFlag:x,patchFlag:D,dirs:V,cacheIndex:X}=R;if(D===-2&&(j=!1),at!=null&&Yo(at,null,w,R,!0),X!=null&&(U.renderCache[X]=void 0),x&256){U.ctx.deactivate(R);return}const W=x&1&&V,dt=!br(R);let lt;if(dt&&(lt=tt&&tt.onVnodeBeforeUnmount)&&Nn(lt,U,R),x&6)ht(R.component,w,ot);else{if(x&128){R.suspense.unmount(w,ot);return}W&&Bi(R,null,U,"beforeUnmount"),x&64?R.type.remove(R,U,w,Wt,ot):b&&!b.hasOnce&&(J!==ie||D>0&&D&64)?wt(b,U,w,!1,!0):(J===ie&&D&384||!j&&x&16)&&wt(Z,U,w),ot&&se(R)}(dt&&(lt=tt&&tt.onVnodeUnmounted)||W)&&ln(()=>{lt&&Nn(lt,U,R),W&&Bi(R,null,U,"unmounted")},w)},se=R=>{const{type:U,el:w,anchor:ot,transition:j}=R;if(U===ie){st(w,ot);return}if(U===Uo){v(R);return}const J=()=>{s(w),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(R.shapeFlag&1&&j&&!j.persisted){const{leave:tt,delayLeave:at}=j,Z=()=>tt(w,J);at?at(R.el,J,Z):Z()}else J()},st=(R,U)=>{let w;for(;R!==U;)w=d(R),s(R),R=w;s(U)},ht=(R,U,w)=>{const{bum:ot,scope:j,job:J,subTree:tt,um:at,m:Z,a:b}=R;Pu(Z),Pu(b),ot&&Lo(ot),j.stop(),J&&(J.flags|=8,Bt(tt,R,U,w)),at&&ln(at,U),ln(()=>{R.isUnmounted=!0},U),U&&U.pendingBranch&&!U.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===U.pendingId&&(U.deps--,U.deps===0&&U.resolve())},wt=(R,U,w,ot=!1,j=!1,J=0)=>{for(let tt=J;tt<R.length;tt++)Bt(R[tt],U,w,ot,j)},_t=R=>{if(R.shapeFlag&6)return _t(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const U=d(R.anchor||R.el),w=U&&U[Sm];return w?d(w):U};let Ot=!1;const Ht=(R,U,w)=>{R==null?U._vnode&&Bt(U._vnode,null,null,!0):_(U._vnode||null,R,U,null,null,null,w),U._vnode=R,Ot||(Ot=!0,bu(),nd(),Ot=!1)},Wt={p:_,um:Bt,m:At,r:se,mt:K,mc:L,pc:G,pbc:S,n:_t,o:n};return{render:Ht,hydrate:void 0,createApp:Wm(Ht)}}function Ua({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function ki({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function tg(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Ad(n,t,e=!1){const i=n.children,s=t.children;if(Ft(i)&&Ft(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ei(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Ad(o,a)),a.type===ga&&(a.el=o.el)}}function eg(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Rd(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Rd(t)}function Pu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const ng=Symbol.for("v-scx"),ig=()=>Io(ng);function ns(n,t,e){return Cd(n,t,e)}function Cd(n,t,e=de){const{immediate:i,deep:s,flush:r,once:o}=e,a=Fe({},e),l=t&&i||!t&&r!=="post";let c;if(Ur){if(r==="sync"){const p=ig();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Vn,p.resume=Vn,p.pause=Vn,p}}const u=We;a.call=(p,g,_)=>In(p,u,g,_);let h=!1;r==="post"?a.scheduler=p=>{ln(p,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,g)=>{g?p():kc(p)}),a.augmentJob=p=>{t&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=_m(n,t,a);return Ur&&(c?c.push(d):l&&d()),d}function sg(n,t,e){const i=this.proxy,s=Te(n)?n.includes(".")?Pd(i,n):()=>i[n]:n.bind(i,i);let r;$t(t)?r=t:(r=t.handler,e=t);const o=Wr(this),a=Cd(s,r.bind(i),e);return o(),a}function Pd(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const rg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Pi(t)}Modifiers`]||n[`${us(t)}Modifiers`];function og(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||de;let s=e;const r=t.startsWith("update:"),o=r&&rg(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>Te(u)?u.trim():u)),o.number&&(s=e.map(yl)));let a,l=i[a=Aa(t)]||i[a=Aa(Pi(t))];!l&&r&&(l=i[a=Aa(us(t))]),l&&In(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,In(c,n,6,s)}}function Dd(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!$t(n)){const l=c=>{const u=Dd(c,t,!0);u&&(a=!0,Fe(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(pe(n)&&i.set(n,null),null):(Ft(r)?r.forEach(l=>o[l]=null):Fe(o,r),pe(n)&&i.set(n,o),o)}function ma(n,t){return!n||!sa(t)?!1:(t=t.slice(2).replace(/Once$/,""),ae(n,t[0].toLowerCase()+t.slice(1))||ae(n,us(t))||ae(n,t))}function Du(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:p,ctx:g,inheritAttrs:_}=n,m=Xo(n);let f,M;try{if(e.shapeFlag&4){const v=s||i,I=v;f=Bn(c.call(I,v,u,h,p,d,g)),M=a}else{const v=t;f=Bn(v.length>1?v(h,{attrs:a,slots:o,emit:l}):v(h,null)),M=t.props?a:ag(a)}}catch(v){Tr.length=0,ha(v,n,1),f=Ue(sn)}let y=f;if(M&&_!==!1){const v=Object.keys(M),{shapeFlag:I}=y;v.length&&I&7&&(r&&v.some(Cc)&&(M=lg(M,r)),y=Di(y,M,!1,!0))}return e.dirs&&(y=Di(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(e.dirs):e.dirs),e.transition&&Lr(y,e.transition),f=y,Xo(m),f}const ag=n=>{let t;for(const e in n)(e==="class"||e==="style"||sa(e))&&((t||(t={}))[e]=n[e]);return t},lg=(n,t)=>{const e={};for(const i in n)(!Cc(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function cg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Lu(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!ma(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Lu(i,o,c):!0:!!o;return!1}function Lu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==n[r]&&!ma(e,r))return!0}return!1}function ug({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const Ld=n=>n.__isSuspense;function hg(n,t){t&&t.pendingBranch?Ft(n)?t.effects.push(...n):t.effects.push(n):ym(n)}const ie=Symbol.for("v-fgt"),ga=Symbol.for("v-txt"),sn=Symbol.for("v-cmt"),Uo=Symbol.for("v-stc"),Tr=[];let pn=null;function Tt(n=!1){Tr.push(pn=n?null:[])}function fg(){Tr.pop(),pn=Tr[Tr.length-1]||null}let Ir=1;function Iu(n,t=!1){Ir+=n,n<0&&pn&&t&&(pn.hasOnce=!0)}function Id(n){return n.dynamicChildren=Ir>0?pn||Ns:null,fg(),Ir>0&&pn&&pn.push(n),n}function Ct(n,t,e,i,s,r){return Id(H(n,t,e,i,s,r,!0))}function ni(n,t,e,i,s){return Id(Ue(n,t,e,i,s,!0))}function qo(n){return n?n.__v_isVNode===!0:!1}function Ji(n,t){return n.type===t.type&&n.key===t.key}const Ud=({key:n})=>n??null,No=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Te(n)||$e(n)||$t(n)?{i:fn,r:n,k:t,f:!!e}:n:null);function H(n,t=null,e=null,i=0,s=null,r=n===ie?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Ud(t),ref:t&&No(t),scopeId:sd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:fn};return a?(Vc(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Te(e)?8:16),Ir>0&&!o&&pn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&pn.push(l),l}const Ue=dg;function dg(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Fm)&&(n=sn),qo(n)){const a=Di(n,t,!0);return e&&Vc(a,e),Ir>0&&!r&&pn&&(a.shapeFlag&6?pn[pn.indexOf(n)]=a:pn.push(a)),a.patchFlag=-2,a}if(Tg(n)&&(n=n.__vccOpts),t){t=pg(t);let{class:a,style:l}=t;a&&!Te(a)&&(t.class=Gn(a)),pe(l)&&(Bc(l)&&!Ft(l)&&(l=Fe({},l)),t.style=Xe(l))}const o=Te(n)?1:Ld(n)?128:od(n)?64:pe(n)?4:$t(n)?2:0;return H(n,t,e,i,s,o,r,!0)}function pg(n){return n?Bc(n)||Md(n)?Fe({},n):n:null}function Di(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?gg(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Ud(c),ref:t&&t.ref?e&&r?Ft(r)?r.concat(No(t)):[r,No(t)]:No(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==ie?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Di(n.ssContent),ssFallback:n.ssFallback&&Di(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Lr(u,l.clone(u)),u}function be(n=" ",t=0){return Ue(ga,null,n,t)}function mg(n,t){const e=Ue(Uo,null,n);return e.staticCount=t,e}function Pe(n="",t=!1){return t?(Tt(),ni(sn,null,n)):Ue(sn,null,n)}function Bn(n){return n==null||typeof n=="boolean"?Ue(sn):Ft(n)?Ue(ie,null,n.slice()):qo(n)?Ei(n):Ue(ga,null,String(n))}function Ei(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Di(n)}function Vc(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ft(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Vc(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Md(t)?t._ctx=fn:s===3&&fn&&(fn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else $t(t)?(t={default:t,_ctx:fn},e=32):(t=String(t),i&64?(e=16,t=[be(t)]):e=8);n.children=t,n.shapeFlag|=e}function gg(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Gn([t.class,i.class]));else if(s==="style")t.style=Xe([t.style,i.style]);else if(sa(s)){const r=t[s],o=i[s];o&&r!==o&&!(Ft(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function Nn(n,t,e,i=null){In(n,t,7,[e,i])}const _g=_d();let vg=0;function xg(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||_g,r={uid:vg++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sd(i,s),emitsOptions:Dd(i,s),emit:null,emitted:null,propsDefaults:de,inheritAttrs:i.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=og.bind(null,r),n.ce&&n.ce(r),r}let We=null;const Mg=()=>We||fn;let Ko,Ll;{const n=aa(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ko=t("__VUE_INSTANCE_SETTERS__",e=>We=e),Ll=t("__VUE_SSR_SETTERS__",e=>Ur=e)}const Wr=n=>{const t=We;return Ko(n),n.scope.on(),()=>{n.scope.off(),Ko(t)}},Uu=()=>{We&&We.scope.off(),Ko(null)};function Nd(n){return n.vnode.shapeFlag&4}let Ur=!1;function yg(n,t=!1,e=!1){t&&Ll(t);const{props:i,children:s}=n.vnode,r=Nd(n);$m(n,i,r,t),Km(n,s,e);const o=r?Sg(n,t):void 0;return t&&Ll(!1),o}function Sg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Om);const{setup:i}=e;if(i){Ni();const s=n.setupContext=i.length>1?Eg(n):null,r=Wr(n),o=Gr(i,n,0,[n.props,s]),a=Rf(o);if(Fi(),r(),(a||n.sp)&&!br(n)&&fd(n),a){if(o.then(Uu,Uu),t)return o.then(l=>{Nu(n,l)}).catch(l=>{ha(l,n,0)});n.asyncDep=o}else Nu(n,o)}else Fd(n)}function Nu(n,t,e){$t(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:pe(t)&&(n.setupState=Qf(t)),Fd(n)}function Fd(n,t,e){const i=n.type;n.render||(n.render=i.render||Vn);{const s=Wr(n);Ni();try{Bm(n)}finally{Fi(),s()}}}const bg={get(n,t){return Ve(n,"get",""),n[t]}};function Eg(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,bg),slots:n.slots,emit:n.emit,expose:t}}function _a(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Qf(hm(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Er)return Er[e](n)},has(t,e){return e in t||e in Er}})):n.proxy}function Tg(n){return $t(n)&&"__vccOpts"in n}const Re=(n,t)=>mm(n,t,Ur);function wg(n,t,e){const i=arguments.length;return i===2?pe(t)&&!Ft(t)?qo(t)?Ue(n,null,[t]):Ue(n,t):Ue(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&qo(e)&&(e=[e]),Ue(n,t,e))}const Ag="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Il;const Fu=typeof window<"u"&&window.trustedTypes;if(Fu)try{Il=Fu.createPolicy("vue",{createHTML:n=>n})}catch{}const Od=Il?n=>Il.createHTML(n):n=>n,Rg="http://www.w3.org/2000/svg",Cg="http://www.w3.org/1998/Math/MathML",ii=typeof document<"u"?document:null,Ou=ii&&ii.createElement("template"),Pg={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?ii.createElementNS(Rg,n):t==="mathml"?ii.createElementNS(Cg,n):e?ii.createElement(n,{is:e}):ii.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ii.createTextNode(n),createComment:n=>ii.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ii.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Ou.innerHTML=Od(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Ou.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},mi="transition",cr="animation",Nr=Symbol("_vtc"),Bd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Dg=Fe({},ad,Bd),Lg=n=>(n.displayName="Transition",n.props=Dg,n),Ig=Lg((n,{slots:t})=>wg(Tm,Ug(n),t)),zi=(n,t=[])=>{Ft(n)?n.forEach(e=>e(...t)):n&&n(...t)},Bu=n=>n?Ft(n)?n.some(t=>t.length>1):n.length>1:!1;function Ug(n){const t={};for(const N in n)N in Bd||(t[N]=n[N]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${e}-leave-from`,leaveActiveClass:d=`${e}-leave-active`,leaveToClass:p=`${e}-leave-to`}=n,g=Ng(s),_=g&&g[0],m=g&&g[1],{onBeforeEnter:f,onEnter:M,onEnterCancelled:y,onLeave:v,onLeaveCancelled:I,onBeforeAppear:C=f,onAppear:A=M,onAppearCancelled:L=y}=t,E=(N,z,K,it)=>{N._enterCancelled=it,Hi(N,z?u:a),Hi(N,z?c:o),K&&K()},S=(N,z)=>{N._isLeaving=!1,Hi(N,h),Hi(N,p),Hi(N,d),z&&z()},P=N=>(z,K)=>{const it=N?A:M,q=()=>E(z,N,K);zi(it,[z,q]),ku(()=>{Hi(z,N?l:r),qn(z,N?u:a),Bu(it)||zu(z,i,_,q)})};return Fe(t,{onBeforeEnter(N){zi(f,[N]),qn(N,r),qn(N,o)},onBeforeAppear(N){zi(C,[N]),qn(N,l),qn(N,c)},onEnter:P(!1),onAppear:P(!0),onLeave(N,z){N._isLeaving=!0;const K=()=>S(N,z);qn(N,h),N._enterCancelled?(qn(N,d),Gu()):(Gu(),qn(N,d)),ku(()=>{N._isLeaving&&(Hi(N,h),qn(N,p),Bu(v)||zu(N,i,m,K))}),zi(v,[N,K])},onEnterCancelled(N){E(N,!1,void 0,!0),zi(y,[N])},onAppearCancelled(N){E(N,!0,void 0,!0),zi(L,[N])},onLeaveCancelled(N){S(N),zi(I,[N])}})}function Ng(n){if(n==null)return null;if(pe(n))return[Na(n.enter),Na(n.leave)];{const t=Na(n);return[t,t]}}function Na(n){return Fp(n)}function qn(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[Nr]||(n[Nr]=new Set)).add(t)}function Hi(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[Nr];e&&(e.delete(t),e.size||(n[Nr]=void 0))}function ku(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Fg=0;function zu(n,t,e,i){const s=n._endId=++Fg,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:o,timeout:a,propCount:l}=Og(n,t);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,d),r()},d=p=>{p.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,d)}function Og(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),s=i(`${mi}Delay`),r=i(`${mi}Duration`),o=Hu(s,r),a=i(`${cr}Delay`),l=i(`${cr}Duration`),c=Hu(a,l);let u=null,h=0,d=0;t===mi?o>0&&(u=mi,h=o,d=r.length):t===cr?c>0&&(u=cr,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?mi:cr:null,d=u?u===mi?r.length:l.length:0);const p=u===mi&&/\b(transform|all)(,|$)/.test(i(`${mi}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:p}}function Hu(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>Vu(e)+Vu(n[i])))}function Vu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Gu(){return document.body.offsetHeight}function Bg(n,t,e){const i=n[Nr];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Wu=Symbol("_vod"),kg=Symbol("_vsh"),zg=Symbol(""),Hg=/(^|;)\s*display\s*:/;function Vg(n,t,e){const i=n.style,s=Te(e);let r=!1;if(e&&!s){if(t)if(Te(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Fo(i,a,"")}else for(const o in t)e[o]==null&&Fo(i,o,"");for(const o in e)o==="display"&&(r=!0),Fo(i,o,e[o])}else if(s){if(t!==e){const o=i[zg];o&&(e+=";"+o),i.cssText=e,r=Hg.test(e)}}else t&&n.removeAttribute("style");Wu in n&&(n[Wu]=r?i.display:"",n[kg]&&(i.display="none"))}const Xu=/\s*!important$/;function Fo(n,t,e){if(Ft(e))e.forEach(i=>Fo(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Gg(n,t);Xu.test(e)?n.setProperty(us(i),e.replace(Xu,""),"important"):n[i]=e}}const $u=["Webkit","Moz","ms"],Fa={};function Gg(n,t){const e=Fa[t];if(e)return e;let i=Pi(t);if(i!=="filter"&&i in n)return Fa[t]=i;i=Df(i);for(let s=0;s<$u.length;s++){const r=$u[s]+i;if(r in n)return Fa[t]=r}return t}const Yu="http://www.w3.org/1999/xlink";function ju(n,t,e,i,s,r=Vp(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Yu,t.slice(6,t.length)):n.setAttributeNS(Yu,t,e):e==null||r&&!If(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Wn(e)?String(e):e)}function qu(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Od(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=If(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function Qi(n,t,e,i){n.addEventListener(t,e,i)}function Wg(n,t,e,i){n.removeEventListener(t,e,i)}const Ku=Symbol("_vei");function Xg(n,t,e,i,s=null){const r=n[Ku]||(n[Ku]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=$g(t);if(i){const c=r[t]=qg(i,s);Qi(n,a,c,l)}else o&&(Wg(n,a,o,l),r[t]=void 0)}}const Zu=/(?:Once|Passive|Capture)$/;function $g(n){let t;if(Zu.test(n)){t={};let i;for(;i=n.match(Zu);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):us(n.slice(2)),t]}let Oa=0;const Yg=Promise.resolve(),jg=()=>Oa||(Yg.then(()=>Oa=0),Oa=Date.now());function qg(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;In(Kg(i,e.value),t,5,[i])};return e.value=n,e.attached=jg(),e}function Kg(n,t){if(Ft(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const Ju=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Zg=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?Bg(n,i,o):t==="style"?Vg(n,e,i):sa(t)?Cc(t)||Xg(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Jg(n,t,i,o))?(qu(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ju(n,t,i,o,r,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!Te(i))?qu(n,Pi(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),ju(n,t,i,o))};function Jg(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Ju(t)&&$t(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ju(t)&&Te(e)?!1:t in n}const Zo=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Ft(t)?e=>Lo(t,e):t};function Qg(n){n.target.composing=!0}function Qu(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Hs=Symbol("_assign"),Ul={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n[Hs]=Zo(s);const r=i||s.props&&s.props.type==="number";Qi(n,t?"change":"input",o=>{if(o.target.composing)return;let a=n.value;e&&(a=a.trim()),r&&(a=yl(a)),n[Hs](a)}),e&&Qi(n,"change",()=>{n.value=n.value.trim()}),t||(Qi(n,"compositionstart",Qg),Qi(n,"compositionend",Qu),Qi(n,"change",Qu))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Hs]=Zo(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?yl(n.value):n.value,l=t??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l))}},t_={deep:!0,created(n,t,e){n[Hs]=Zo(e),Qi(n,"change",()=>{const i=n._modelValue,s=e_(n),r=n.checked,o=n[Hs];if(Ft(i)){const a=Uf(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(ra(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(kd(n,r))})},mounted:th,beforeUpdate(n,t,e){n[Hs]=Zo(e),th(n,t,e)}};function th(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if(Ft(t))s=Uf(t,i.props.value)>-1;else if(ra(t))s=t.has(i.props.value);else{if(t===e)return;s=la(t,kd(n,!0))}n.checked!==s&&(n.checked=s)}function e_(n){return"_value"in n?n._value:n.value}function kd(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const n_=["ctrl","shift","alt","meta"],i_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>n_.some(e=>n[`${e}Key`]&&!t.includes(e))},Nl=(n,t)=>{const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=i_[t[o]];if(a&&a(s,t))return}return n(s,...r)})},s_=Fe({patchProp:Zg},Pg);let eh;function r_(){return eh||(eh=Jm(s_))}const o_=(...n)=>{const t=r_().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=l_(i);if(!s)return;const r=t._component;!$t(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,a_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function a_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function l_(n){return Te(n)?document.querySelector(n):n}const c_="/api";async function to(n){const t=await fetch(`${c_}${n}`,{headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`API ${n}: ${t.status}`);return await t.json()}const Ba=new Map,eo={project:n=>to(`/projects/${n}`),units:n=>to(`/projects/${n}/units`),context:n=>to(`/projects/${n}/context`),floorType(n,t){const e=`${n}/${t}`;return Ba.has(e)||Ba.set(e,to(`/projects/${n}/floor-types/${t}`)),Ba.get(e)}},wr={available:"В продаже",booked:"Бронь",sold:"Продана",unavailable:"Снята с продажи"},Mn={available:"#3ddc97",booked:"#f5b841",sold:"#e5484d",unavailable:"#6b7280"};function va(n,t){return!(t.onlyAvailable&&n.status!=="available"||t.rooms.length&&!t.rooms.some(e=>e>=5?n.rooms>=5:n.rooms===e))}function u_(n){return n===1?"1-комнатная":`${n}-комнатная`}function h_(n,t,e){let i=1/0;for(let s=0,r=e.length-1;s<e.length;r=s++){const[o,a]=e[r],[l,c]=e[s],u=l-o,h=c-a,d=Math.max(0,Math.min(1,((n-o)*u+(t-a)*h)/(u*u+h*h||1)));i=Math.min(i,Math.hypot(n-(o+d*u),t-(a+d*h)))}return i}const nt=ua({loading:!0,progress:0,error:"",mode:"building",floor:null,unitId:null,hoverFloor:null,hoverUnit:null,tip:{x:0,y:0},filter:{rooms:[],onlyAvailable:!1},sun:{day:d_(),hour:15},xrSupported:!1,xrActive:!1,touched:!1,showData:!1,showLead:!1,sunMinutes:null}),Qt={project:lr(null),units:lr([]),context:lr(null),types:lr(new Map),observedAt:lr("")},Fl=Re(()=>{const n=Qt.project.value;if(!n)return[];const t=new Map;for(const e of Qt.units.value)t.has(e.floor)||t.set(e.floor,[]),t.get(e.floor).push(e);return[...n.building.floors].reverse().map(e=>{const i=(t.get(e.n)??[]).sort((s,r)=>s.number-r.number);return{n:e.n,residential:i.length>0,total:i.length,available:i.filter(s=>s.status==="available").length,matching:i.filter(s=>va(s,nt.filter)).length,statuses:i.map(s=>s.status)}})}),nn=Re(()=>Qt.units.value.find(n=>n.id===nt.unitId)??null),f_=Re(()=>Qt.units.value.find(n=>n.id===nt.hoverUnit)??null),Vi=Re(()=>{const n=Qt.units.value,t={available:0,booked:0,sold:0,unavailable:0};for(const e of n)t[e.status]++;return{total:n.length,by:t,matching:n.filter(e=>va(e,nt.filter)).length}});function d_(){const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}const zd=Math.PI/180;function Jo(n,t,e){const i=e*zd;return[n*Math.cos(i)+t*Math.sin(i),-n*Math.sin(i)+t*Math.cos(i)]}function p_(n,t,e){const[i,s]=Jo(n,t,e);return(Math.atan2(i,s)/zd+360)%360}const m_=["север","северо-восток","восток","юго-восток","юг","юго-запад","запад","северо-запад"],g_=["С","СВ","В","ЮВ","Ю","ЮЗ","З","СЗ"];function nh(n,t=!1){const e=Math.round((n%360+360)%360/45)%8;return t?g_[e]:m_[e]}function ih(n,t){const e=((n-t)%360+540)%360-180;return Math.abs(e)}function __(n,t,e){const i=[];for(const s of n.outline)for(const r of x_(s,1.5)){const[o,a,l,c,u,h]=r,d=(o+l)/2,p=(a+c)/2;h_(d-u*.3,p-h*.3,t)>.8&&!v_(d-u*.6,p-h*.6,t)||i.push({mid:[d,p],normal:[u,h],azimuth:p_(u,h,e),length:Math.hypot(l-o,c-a)})}return i}function v_(n,t,e){let i=!1;for(let s=0,r=e.length-1;s<e.length;r=s++)e[s][1]>t!=e[r][1]>t&&n<(e[r][0]-e[s][0])*(t-e[s][1])/(e[r][1]-e[s][1]+1e-12)+e[s][0]&&(i=!i);return i}function x_(n,t){const[e,i,s,r,o,a]=n,l=Math.hypot(s-e,r-i),c=Math.max(1,Math.round(l/t)),u=[];for(let h=0;h<c;h++){const d=h/c,p=(h+1)/c;u.push([e+(s-e)*d,i+(r-i)*d,e+(s-e)*p,i+(r-i)*p,o,a])}return u}function M_(n,t,e,i){const s=new Map;for(const p of n){const g=nh(p.azimuth);s.set(g,(s.get(g)??0)+p.length)}const r=[...s.entries()].filter(([,p])=>p>=1.2).sort((p,g)=>g[1]-p[1]).map(([p])=>p),o=S_(n.map(p=>Math.round(p.azimuth/15)*15)),a=new Map;for(const p of t.pois){const g=Math.hypot(p.x,p.y);if(g>1500)continue;const _=(Math.atan2(p.x,p.y)*180/Math.PI+360)%360,m=Math.atan2(p.r,g)*180/Math.PI;if(o.some(f=>ih(f,_)<=35+m)){const f=y_(p),M=Math.max(0,g-p.r*.5);(!a.has(f)||a.get(f)>M)&&a.set(f,M)}}const l=[...a.entries()].sort((p,g)=>p[1]-g[1]).slice(0,3).map(([p,g])=>`${p} — ${g<1e3?`${Math.round(g/10)*10} м`:`${(g/1e3).toFixed(1).replace(".",",")} км`}`);let c=1/0,u=!1;const h=n.length?Jo(n[0].mid[0],n[0].mid[1],e):[0,0];for(const p of t.buildings){const g=p.p.reduce((f,M)=>[f[0]+M[0]/p.p.length,f[1]+M[1]/p.p.length],[0,0]),_=Math.hypot(g[0]-h[0],g[1]-h[1]);if(_>250)continue;const m=(Math.atan2(g[0]-h[0],g[1]-h[1])*180/Math.PI+360)%360;o.some(f=>ih(f,m)<=40)&&p.h>=i-1&&(u=!0,c=Math.min(c,_))}const d=u?`напротив дом выше уровня окон, ~${Math.round(c/10)*10} м`:`окна выше соседних домов (${Math.round(i)} м над землёй)`;return{sides:r,sidesShort:r.map(p=>nh(b_(p),!0)),highlights:l,openness:d}}function y_(n){return n.kind==="water"?n.name:n.name==="парк"?"парк":`парк «${n.name}»`}function S_(n){return[...new Set(n)]}function b_(n){return["север","северо-восток","восток","юго-восток","юг","юго-запад","запад","северо-запад"].indexOf(n)*45}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gc="170",Vs={ROTATE:0,DOLLY:1,PAN:2},Ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},E_=0,sh=1,T_=2,Hd=1,Vd=2,ei=3,Li=0,Qe=1,hn=2,Ri=0,Gs=1,rh=2,oh=3,ah=4,w_=5,ts=100,A_=101,R_=102,C_=103,P_=104,D_=200,L_=201,I_=202,U_=203,Ol=204,Bl=205,N_=206,F_=207,O_=208,B_=209,k_=210,z_=211,H_=212,V_=213,G_=214,kl=0,zl=1,Hl=2,$s=3,Vl=4,Gl=5,Wl=6,Xl=7,Gd=0,W_=1,X_=2,Ci=0,$_=1,Y_=2,j_=3,Wd=4,q_=5,K_=6,Z_=7,Xd=300,Ys=301,js=302,$l=303,Yl=304,xa=306,Qo=1e3,is=1001,jl=1002,mn=1003,J_=1004,no=1005,zn=1006,ka=1007,ss=1008,ui=1009,$d=1010,Yd=1011,Fr=1012,Wc=1013,as=1014,Hn=1015,Xr=1016,Xc=1017,$c=1018,qs=1020,jd=35902,qd=1021,Kd=1022,Pn=1023,Zd=1024,Jd=1025,Ws=1026,Ks=1027,Yc=1028,jc=1029,Qd=1030,qc=1031,Kc=1033,Oo=33776,Bo=33777,ko=33778,zo=33779,ql=35840,Kl=35841,Zl=35842,Jl=35843,Ql=36196,tc=37492,ec=37496,nc=37808,ic=37809,sc=37810,rc=37811,oc=37812,ac=37813,lc=37814,cc=37815,uc=37816,hc=37817,fc=37818,dc=37819,pc=37820,mc=37821,Ho=36492,gc=36494,_c=36495,tp=36283,vc=36284,xc=36285,Mc=36286,Q_=3200,t0=3201,ep=0,e0=1,Ti="",Ze="srgb",Qs="srgb-linear",Ma="linear",ue="srgb",ms=7680,lh=519,n0=512,i0=513,s0=514,np=515,r0=516,o0=517,a0=518,l0=519,ch=35044,uh="300 es",li=2e3,ta=2001;class hs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hh=1234567;const Ar=Math.PI/180,Or=180/Math.PI;function tr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]).toLowerCase()}function Be(n,t,e){return Math.max(t,Math.min(e,n))}function Zc(n,t){return(n%t+t)%t}function c0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function u0(n,t,e){return n!==t?(e-n)/(t-n):0}function Rr(n,t,e){return(1-e)*n+e*t}function h0(n,t,e,i){return Rr(n,t,1-Math.exp(-e*i))}function f0(n,t=1){return t-Math.abs(Zc(n,t*2)-t)}function d0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function p0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function m0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function g0(n,t){return n+Math.random()*(t-n)}function _0(n){return n*(.5-Math.random())}function v0(n){n!==void 0&&(hh=n);let t=hh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function x0(n){return n*Ar}function M0(n){return n*Or}function y0(n){return(n&n-1)===0&&n!==0}function S0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function b0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function E0(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),h=r((t-i)/2),d=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ds(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const wi={DEG2RAD:Ar,RAD2DEG:Or,generateUUID:tr,clamp:Be,euclideanModulo:Zc,mapLinear:c0,inverseLerp:u0,lerp:Rr,damp:h0,pingpong:f0,smoothstep:d0,smootherstep:p0,randInt:m0,randFloat:g0,randFloatSpread:_0,seededRandom:v0,degToRad:x0,radToDeg:M0,isPowerOfTwo:y0,ceilPowerOfTwo:S0,floorPowerOfTwo:b0,setQuaternionFromProperEuler:E0,normalize:qe,denormalize:Ds};class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,i,s,r,o,a,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],_=s[0],m=s[3],f=s[6],M=s[1],y=s[4],v=s[7],I=s[2],C=s[5],A=s[8];return r[0]=o*_+a*M+l*I,r[3]=o*m+a*y+l*C,r[6]=o*f+a*v+l*A,r[1]=c*_+u*M+h*I,r[4]=c*m+u*y+h*C,r[7]=c*f+u*v+h*A,r[2]=d*_+p*M+g*I,r[5]=d*m+p*y+g*C,r[8]=d*f+p*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=e*h+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(za.makeScale(t,e)),this}rotate(t){return this.premultiply(za.makeRotation(-t)),this}translate(t,e){return this.premultiply(za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const za=new Kt;function ip(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function T0(){const n=ea("canvas");return n.style.display="block",n}const fh={};function vr(n){n in fh||(fh[n]=!0,console.warn(n))}function w0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function A0(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function R0(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(n.r=ci(n.r),n.g=ci(n.g),n.b=ci(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(n.r=Xs(n.r),n.g=Xs(n.g),n.b=Xs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ti?Ma:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const dh=[.64,.33,.3,.6,.15,.06],ph=[.2126,.7152,.0722],mh=[.3127,.329],gh=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_h=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Qs]:{primaries:dh,whitePoint:mh,transfer:Ma,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:ph,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:dh,whitePoint:mh,transfer:ue,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:ph,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}});let gs;class C0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gs===void 0&&(gs=ea("canvas")),gs.width=t.width,gs.height=t.height;const i=gs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=gs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ea("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ci(e[i]/255)*255):e[i]=ci(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let P0=0;class sp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=tr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ha(s[o].image)):r.push(Ha(s[o]))}else r=Ha(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ha(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?C0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let D0=0;class Ye extends hs{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,i=is,s=is,r=zn,o=ss,a=Pn,l=ui,c=Ye.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=tr(),this.name="",this.source=new sp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qo:t.x=t.x-Math.floor(t.x);break;case is:t.x=t.x<0?0:1;break;case jl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qo:t.y=t.y-Math.floor(t.y);break;case is:t.y=t.y<0?0:1;break;case jl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Xd;Ye.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,i=0,s=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(p+1)/2,I=(f+1)/2,C=(u+d)/4,A=(h+_)/4,L=(g+m)/4;return y>v&&y>I?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=C/i,r=A/i):v>I?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=C/s,r=L/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=A/r,s=L/r),this.set(i,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class L0 extends hs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ye(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new sp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends L0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class rp extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class I0 extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==p||u!==g){let m=1-a;const f=l*d+c*p+u*g+h*_,M=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const I=Math.sqrt(y),C=Math.atan2(I,f*M);m=Math.sin(m*C)/I,a=Math.sin(a*C)/I}const v=a*M;if(l=l*m+d*v,c=c*m+p*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*p-c*d,t[e+1]=l*g+u*d+c*h-a*p,t[e+2]=c*g+u*p+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,i=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Va.copy(this).projectOnVector(t),this.sub(Va)}reflect(t){return this.sub(Va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Va=new F,vh=new Ii;class fs{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),io.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),io.copy(i.boundingBox)),io.applyMatrix4(t.matrixWorld),this.union(io)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),so.subVectors(this.max,ur),_s.subVectors(t.a,ur),vs.subVectors(t.b,ur),xs.subVectors(t.c,ur),gi.subVectors(vs,_s),_i.subVectors(xs,vs),Gi.subVectors(_s,xs);let e=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Gi.z,Gi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Gi.z,0,-Gi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Gi.y,Gi.x,0];return!Ga(e,_s,vs,xs,so)||(e=[1,0,0,0,1,0,0,0,1],!Ga(e,_s,vs,xs,so))?!1:(ro.crossVectors(gi,_i),e=[ro.x,ro.y,ro.z],Ga(e,_s,vs,xs,so))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Kn=[new F,new F,new F,new F,new F,new F,new F,new F],wn=new F,io=new fs,_s=new F,vs=new F,xs=new F,gi=new F,_i=new F,Gi=new F,ur=new F,so=new F,ro=new F,Wi=new F;function Ga(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Wi.fromArray(n,r);const a=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=t.dot(Wi),c=e.dot(Wi),u=i.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const U0=new fs,hr=new F,Wa=new F;class er{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):U0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hr.subVectors(t,this.center);const e=hr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(hr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hr.copy(t.center).add(Wa)),this.expandByPoint(hr.copy(t.center).sub(Wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new F,Xa=new F,oo=new F,vi=new F,$a=new F,ao=new F,Ya=new F;class ya{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Xa.copy(t).add(e).multiplyScalar(.5),oo.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(Xa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(oo),a=vi.dot(this.direction),l=-vi.dot(oo),c=vi.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Xa).addScaledVector(oo,d),p}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);const i=Zn.dot(this.direction),s=Zn.dot(Zn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,i,s,r){$a.subVectors(e,t),ao.subVectors(i,t),Ya.crossVectors($a,ao);let o=this.direction.dot(Ya),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,t);const l=a*this.direction.dot(ao.crossVectors(vi,ao));if(l<0)return null;const c=a*this.direction.dot($a.cross(vi));if(c<0||l+c>o)return null;const u=-a*vi.dot(Ya);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,i,s,r,o,a,l,c,u,h,d,p,g,_,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,d,p,g,_,m)}set(t,e,i,s,r,o,a,l,c,u,h,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ms.setFromMatrixColumn(t,0).length(),r=1/Ms.setFromMatrixColumn(t,1).length(),o=1/Ms.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,p=l*h,g=c*u,_=c*h;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,p=l*h,g=c*u,_=c*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(N0,t,F0)}lookAt(t,e,i){const s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),xi.crossVectors(i,on),xi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),xi.crossVectors(i,on)),xi.normalize(),lo.crossVectors(on,xi),s[0]=xi.x,s[4]=lo.x,s[8]=on.x,s[1]=xi.y,s[5]=lo.y,s[9]=on.y,s[2]=xi.z,s[6]=lo.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],M=i[3],y=i[7],v=i[11],I=i[15],C=s[0],A=s[4],L=s[8],E=s[12],S=s[1],P=s[5],N=s[9],z=s[13],K=s[2],it=s[6],q=s[10],et=s[14],G=s[3],pt=s[7],bt=s[11],At=s[15];return r[0]=o*C+a*S+l*K+c*G,r[4]=o*A+a*P+l*it+c*pt,r[8]=o*L+a*N+l*q+c*bt,r[12]=o*E+a*z+l*et+c*At,r[1]=u*C+h*S+d*K+p*G,r[5]=u*A+h*P+d*it+p*pt,r[9]=u*L+h*N+d*q+p*bt,r[13]=u*E+h*z+d*et+p*At,r[2]=g*C+_*S+m*K+f*G,r[6]=g*A+_*P+m*it+f*pt,r[10]=g*L+_*N+m*q+f*bt,r[14]=g*E+_*z+m*et+f*At,r[3]=M*C+y*S+v*K+I*G,r[7]=M*A+y*P+v*it+I*pt,r[11]=M*L+y*N+v*q+I*bt,r[15]=M*E+y*z+v*et+I*At,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*p-i*l*p)+_*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+e*c*h-e*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+f*(-s*a*u-e*l*h+e*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],M=h*m*c-_*d*c+_*l*p-a*m*p-h*l*f+a*d*f,y=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,v=u*_*c-g*h*c+g*a*p-o*_*p-u*a*f+o*h*f,I=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,C=e*M+i*y+s*v+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=M*A,t[1]=(_*d*r-h*m*r-_*s*p+i*m*p+h*s*f-i*d*f)*A,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*f+i*l*f)*A,t[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*p-i*l*p)*A,t[4]=y*A,t[5]=(u*m*r-g*d*r+g*s*p-e*m*p-u*s*f+e*d*f)*A,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*A,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*p+e*l*p)*A,t[8]=v*A,t[9]=(g*h*r-u*_*r-g*i*p+e*_*p+u*i*f-e*h*f)*A,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*f+e*a*f)*A,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*p-e*a*p)*A,t[12]=I*A,t[13]=(u*_*s-g*h*s+g*i*d-e*_*d-u*i*m+e*h*m)*A,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*A,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*d+e*a*d)*A,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,g=r*h,_=o*u,m=o*h,f=a*h,M=l*c,y=l*u,v=l*h,I=i.x,C=i.y,A=i.z;return s[0]=(1-(_+f))*I,s[1]=(p+v)*I,s[2]=(g-y)*I,s[3]=0,s[4]=(p-v)*C,s[5]=(1-(d+f))*C,s[6]=(m+M)*C,s[7]=0,s[8]=(g+y)*A,s[9]=(m-M)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ms.set(s[0],s[1],s[2]).length();const o=Ms.set(s[4],s[5],s[6]).length(),a=Ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],An.copy(this);const c=1/r,u=1/o,h=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,e.setFromRotationMatrix(An),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=li){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s);let p,g;if(a===li)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ta)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=li){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),d=(e+t)*c,p=(i+s)*u;let g,_;if(a===li)g=(o+r)*h,_=-2*h;else if(a===ta)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ms=new F,An=new fe,N0=new F(0,0,0),F0=new F(1,1,1),xi=new F,lo=new F,on=new F,xh=new fe,Mh=new Ii;class Xn{constructor(t=0,e=0,i=0,s=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return xh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mh.setFromEuler(this),this.setFromQuaternion(Mh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Jc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let O0=0;const yh=new F,ys=new Ii,Jn=new fe,co=new F,fr=new F,B0=new F,k0=new Ii,Sh=new F(1,0,0),bh=new F(0,1,0),Eh=new F(0,0,1),Th={type:"added"},z0={type:"removed"},Ss={type:"childadded",child:null},ja={type:"childremoved",child:null};class Ne extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new F,e=new Xn,i=new Ii,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Kt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(Sh,t)}rotateY(t){return this.rotateOnAxis(bh,t)}rotateZ(t){return this.rotateOnAxis(Eh,t)}translateOnAxis(t,e){return yh.copy(t).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sh,t)}translateY(t){return this.translateOnAxis(bh,t)}translateZ(t){return this.translateOnAxis(Eh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?co.copy(t):co.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(fr,co,this.up):Jn.lookAt(co,fr,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(Jn),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Th),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(z0),ja.child=t,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Th),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,t,B0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,k0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new F(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new F,Qn=new F,qa=new F,ti=new F,bs=new F,Es=new F,wh=new F,Ka=new F,Za=new F,Ja=new F,Qa=new Ee,tl=new Ee,el=new Ee;class Cn{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Rn.subVectors(t,e),s.cross(Rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Rn.subVectors(s,e),Qn.subVectors(i,e),qa.subVectors(t,e);const o=Rn.dot(Rn),a=Rn.dot(Qn),l=Rn.dot(qa),c=Qn.dot(Qn),u=Qn.dot(qa),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Qa.setScalar(0),tl.setScalar(0),el.setScalar(0),Qa.fromBufferAttribute(t,e),tl.fromBufferAttribute(t,i),el.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Qa,r.x),o.addScaledVector(tl,r.y),o.addScaledVector(el,r.z),o}static isFrontFacing(t,e,i,s){return Rn.subVectors(i,e),Qn.subVectors(t,e),Rn.cross(Qn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Rn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Cn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;bs.subVectors(s,i),Es.subVectors(r,i),Ka.subVectors(t,i);const l=bs.dot(Ka),c=Es.dot(Ka);if(l<=0&&c<=0)return e.copy(i);Za.subVectors(t,s);const u=bs.dot(Za),h=Es.dot(Za);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(bs,o);Ja.subVectors(t,r);const p=bs.dot(Ja),g=Es.dot(Ja);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Es,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return wh.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(wh,a);const f=1/(m+_+d);return o=_*f,a=d*f,e.copy(i).addScaledVector(bs,o).addScaledVector(Es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},uo={h:0,s:0,l:0};function nl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Yt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=Zc(t,1),e=Be(e,0,1),i=Be(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=nl(o,r,t+1/3),this.g=nl(o,r,t),this.b=nl(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=Ze){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const i=op[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return te.fromWorkingColorSpace(He.copy(this),t),Math.round(Be(He.r*255,0,255))*65536+Math.round(Be(He.g*255,0,255))*256+Math.round(Be(He.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(He.copy(this),e);const i=He.r,s=He.g,r=He.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Ze){te.fromWorkingColorSpace(He.copy(this),t);const e=He.r,i=He.g,s=He.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(uo);const i=Rr(Mi.h,uo.h,e),s=Rr(Mi.s,uo.s,e),r=Rr(Mi.l,uo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Yt;Yt.NAMES=op;let H0=0;class nr extends hs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=tr(),this.name="",this.blending=Gs,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ol,this.blendDst=Bl,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ol&&(i.blendSrc=this.blendSrc),this.blendDst!==Bl&&(i.blendDst=this.blendDst),this.blendEquation!==ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ir extends nr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Gd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new F,ho=new Nt;class Ln{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ch,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ho.fromBufferAttribute(this,e),ho.applyMatrix3(t),this.setXY(e,ho.x,ho.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ds(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),i=qe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),i=qe(i,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),i=qe(i,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ch&&(t.usage=this.usage),t}}class ap extends Ln{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class lp extends Ln{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ce extends Ln{constructor(t,e,i){super(new Float32Array(t),e,i)}}let V0=0;const vn=new fe,il=new Ne,Ts=new F,an=new fs,dr=new fs,Ie=new F;class Oe extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ip(t)?lp:ap)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,i){return vn.makeTranslation(t,e,i),this.applyMatrix4(vn),this}scale(t,e,i){return vn.makeScale(t,e,i),this.applyMatrix4(vn),this}lookAt(t){return il.lookAt(t),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ie.addVectors(an.min,dr.min),an.expandByPoint(Ie),Ie.addVectors(an.max,dr.max),an.expandByPoint(Ie)):(an.expandByPoint(dr.min),an.expandByPoint(dr.max))}an.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ie));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ie.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(t,c),Ie.add(Ts)),s=Math.max(s,i.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new F,l[L]=new F;const c=new F,u=new F,h=new F,d=new Nt,p=new Nt,g=new Nt,_=new F,m=new F;function f(L,E,S){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),a[L].add(_),a[E].add(_),a[S].add(_),l[L].add(m),l[E].add(m),l[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let L=0,E=M.length;L<E;++L){const S=M[L],P=S.start,N=S.count;for(let z=P,K=P+N;z<K;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const y=new F,v=new F,I=new F,C=new F;function A(L){I.fromBufferAttribute(s,L),C.copy(I);const E=a[L];y.copy(E),y.sub(I.multiplyScalar(I.dot(E))).normalize(),v.crossVectors(C,E);const P=v.dot(l[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,P)}for(let L=0,E=M.length;L<E;++L){const S=M[L],P=S.start,N=S.count;for(let z=P,K=P+N;z<K;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ln(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new Ln(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=t(d,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ah=new fe,Xi=new ya,fo=new er,Rh=new F,po=new F,mo=new F,go=new F,sl=new F,_o=new F,Ch=new F,vo=new F;class Jt extends Ne{constructor(t=new Oe,e=new ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){_o.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(sl.fromBufferAttribute(h,t),o?_o.addScaledVector(sl,u):_o.addScaledVector(sl.sub(e),u))}e.add(_o)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(r),Xi.copy(t.ray).recast(t.near),!(fo.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(fo,Rh)===null||Xi.origin.distanceToSquared(Rh)>(t.far-t.near)**2))&&(Ah.copy(r).invert(),Xi.copy(t.ray).applyMatrix4(Ah),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,I=y;v<I;v+=3){const C=a.getX(v),A=a.getX(v+1),L=a.getX(v+2);s=xo(this,f,t,i,c,u,h,C,A,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=xo(this,o,t,i,c,u,h,M,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,I=y;v<I;v+=3){const C=v,A=v+1,L=v+2;s=xo(this,f,t,i,c,u,h,C,A,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=m,y=m+1,v=m+2;s=xo(this,o,t,i,c,u,h,M,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function G0(n,t,e,i,s,r,o,a){let l;if(t.side===Qe?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Li,a),l===null)return null;vo.copy(a),vo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(vo);return c<e.near||c>e.far?null:{distance:c,point:vo.clone(),object:n}}function xo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,po),n.getVertexPosition(l,mo),n.getVertexPosition(c,go);const u=G0(n,t,e,i,po,mo,go,Ch);if(u){const h=new F;Cn.getBarycoord(Ch,po,mo,go,h),s&&(u.uv=Cn.getInterpolatedAttribute(s,a,l,c,h,new Nt)),r&&(u.uv1=Cn.getInterpolatedAttribute(r,a,l,c,h,new Nt)),o&&(u.normal=Cn.getInterpolatedAttribute(o,a,l,c,h,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new F,materialIndex:0};Cn.getNormal(po,mo,go,d.normal),u.face=d,u.barycoord=h}return u}class Ui extends Oe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(h,2));function g(_,m,f,M,y,v,I,C,A,L,E){const S=v/A,P=I/L,N=v/2,z=I/2,K=C/2,it=A+1,q=L+1;let et=0,G=0;const pt=new F;for(let bt=0;bt<q;bt++){const At=bt*P-z;for(let Bt=0;Bt<it;Bt++){const se=Bt*S-N;pt[_]=se*M,pt[m]=At*y,pt[f]=K,c.push(pt.x,pt.y,pt.z),pt[_]=0,pt[m]=0,pt[f]=C>0?1:-1,u.push(pt.x,pt.y,pt.z),h.push(Bt/A),h.push(1-bt/L),et+=1}}for(let bt=0;bt<L;bt++)for(let At=0;At<A;At++){const Bt=d+At+it*bt,se=d+At+it*(bt+1),st=d+(At+1)+it*(bt+1),ht=d+(At+1)+it*bt;l.push(Bt,se,ht),l.push(se,st,ht),G+=6}a.addGroup(p,G,E),p+=G,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ke(n){const t={};for(let e=0;e<n.length;e++){const i=Zs(n[e]);for(const s in i)t[s]=i[s]}return t}function W0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function cp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const up={clone:Zs,merge:Ke};var X0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends nr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X0,this.fragmentShader=$0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=W0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class hp extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new F,Ph=new Nt,Dh=new Nt;class xn extends hp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,Ph,Dh),e.subVectors(Dh,Ph)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ar*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ws=-90,As=1;class Y0 extends Ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xn(ws,As,t,e);s.layers=this.layers,this.add(s);const r=new xn(ws,As,t,e);r.layers=this.layers,this.add(r);const o=new xn(ws,As,t,e);o.layers=this.layers,this.add(o);const a=new xn(ws,As,t,e);a.layers=this.layers,this.add(a);const l=new xn(ws,As,t,e);l.layers=this.layers,this.add(l);const c=new xn(ws,As,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class fp extends Ye{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ys,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class j0 extends ls{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new fp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ui(5,5,5),r=new hi({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qe,blending:Ri});r.uniforms.tEquirect.value=e;const o=new Jt(s,r),a=e.minFilter;return e.minFilter===ss&&(e.minFilter=zn),new Y0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const rl=new F,q0=new F,K0=new Kt;class ri{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=rl.subVectors(i,e).cross(q0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(rl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||K0.getNormalMatrix(t),s=this.coplanarPoint(rl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new er,Mo=new F;class Qc{constructor(t=new ri,e=new ri,i=new ri,s=new ri,r=new ri,o=new ri){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=li){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],M=s[13],y=s[14],v=s[15];if(i[0].setComponents(l-r,d-c,m-p,v-f).normalize(),i[1].setComponents(l+r,d+c,m+p,v+f).normalize(),i[2].setComponents(l+o,d+u,m+g,v+M).normalize(),i[3].setComponents(l-o,d-u,m-g,v-M).normalize(),i[4].setComponents(l-a,d-h,m-_,v-y).normalize(),e===li)i[5].setComponents(l+a,d+h,m+_,v+y).normalize();else if(e===ta)i[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(t){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Mo.x=s.normal.x>0?t.max.x:t.min.x,Mo.y=s.normal.y>0?t.max.y:t.min.y,Mo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Z0(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class $r extends Oe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const M=f*d-o;for(let y=0;y<c;y++){const v=y*h-r;g.push(v,-M,0),_.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){const y=M+c*f,v=M+c*(f+1),I=M+1+c*(f+1),C=M+1+c*f;p.push(y,v,C),p.push(v,I,C)}this.setIndex(p),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $r(t.width,t.height,t.widthSegments,t.heightSegments)}}var J0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q0=`#ifdef USE_ALPHAHASH
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
#endif`,tv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ev=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sv=`#ifdef USE_AOMAP
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
#endif`,rv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ov=`#ifdef USE_BATCHING
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
#endif`,av=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hv=`#ifdef USE_IRIDESCENCE
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
#endif`,fv=`#ifdef USE_BUMPMAP
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
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_v=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yv=`#define PI 3.141592653589793
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
} // validated`,Sv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bv=`vec3 transformedNormal = objectNormal;
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
#endif`,Ev=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Av=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pv=`#ifdef USE_ENVMAP
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
#endif`,Dv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lv=`#ifdef USE_ENVMAP
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
#endif`,Iv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ov=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kv=`#ifdef USE_GRADIENTMAP
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
}`,zv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gv=`uniform bool receiveShadow;
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
#endif`,Wv=`#ifdef USE_ENVMAP
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
#endif`,Xv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qv=`PhysicalMaterial material;
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
#endif`,Kv=`struct PhysicalMaterial {
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
}`,Zv=`
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
#endif`,Jv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ex=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ix=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ax=`#if defined( USE_POINTS_UV )
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
#endif`,lx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ux=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dx=`#ifdef USE_MORPHTARGETS
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
#endif`,px=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mx=`#ifdef USE_NORMALMAP
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
#endif`,yx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Px=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fx=`float getShadowMask() {
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
}`,Ox=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bx=`#ifdef USE_SKINNING
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
#endif`,kx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zx=`#ifdef USE_SKINNING
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
#endif`,Hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xx=`#ifdef USE_TRANSMISSION
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
#endif`,$x=`#ifdef USE_TRANSMISSION
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
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jx=`uniform sampler2D t2D;
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
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iM=`#include <common>
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
}`,sM=`#if DEPTH_PACKING == 3200
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
}`,rM=`#define DISTANCE
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
}`,oM=`#define DISTANCE
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
}`,aM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`uniform float scale;
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
}`,uM=`uniform vec3 diffuse;
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
}`,hM=`#include <common>
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
}`,fM=`uniform vec3 diffuse;
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
}`,dM=`#define LAMBERT
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
}`,pM=`#define LAMBERT
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
}`,mM=`#define MATCAP
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
}`,gM=`#define MATCAP
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
}`,_M=`#define NORMAL
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
}`,vM=`#define NORMAL
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
}`,xM=`#define PHONG
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
}`,MM=`#define PHONG
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
}`,yM=`#define STANDARD
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
}`,SM=`#define STANDARD
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
}`,bM=`#define TOON
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
}`,EM=`#define TOON
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
}`,TM=`uniform float size;
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
}`,wM=`uniform vec3 diffuse;
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
}`,AM=`#include <common>
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
}`,RM=`uniform vec3 color;
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
}`,CM=`uniform float rotation;
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
}`,PM=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:J0,alphahash_pars_fragment:Q0,alphamap_fragment:tv,alphamap_pars_fragment:ev,alphatest_fragment:nv,alphatest_pars_fragment:iv,aomap_fragment:sv,aomap_pars_fragment:rv,batching_pars_vertex:ov,batching_vertex:av,begin_vertex:lv,beginnormal_vertex:cv,bsdfs:uv,iridescence_fragment:hv,bumpmap_pars_fragment:fv,clipping_planes_fragment:dv,clipping_planes_pars_fragment:pv,clipping_planes_pars_vertex:mv,clipping_planes_vertex:gv,color_fragment:_v,color_pars_fragment:vv,color_pars_vertex:xv,color_vertex:Mv,common:yv,cube_uv_reflection_fragment:Sv,defaultnormal_vertex:bv,displacementmap_pars_vertex:Ev,displacementmap_vertex:Tv,emissivemap_fragment:wv,emissivemap_pars_fragment:Av,colorspace_fragment:Rv,colorspace_pars_fragment:Cv,envmap_fragment:Pv,envmap_common_pars_fragment:Dv,envmap_pars_fragment:Lv,envmap_pars_vertex:Iv,envmap_physical_pars_fragment:Wv,envmap_vertex:Uv,fog_vertex:Nv,fog_pars_vertex:Fv,fog_fragment:Ov,fog_pars_fragment:Bv,gradientmap_pars_fragment:kv,lightmap_pars_fragment:zv,lights_lambert_fragment:Hv,lights_lambert_pars_fragment:Vv,lights_pars_begin:Gv,lights_toon_fragment:Xv,lights_toon_pars_fragment:$v,lights_phong_fragment:Yv,lights_phong_pars_fragment:jv,lights_physical_fragment:qv,lights_physical_pars_fragment:Kv,lights_fragment_begin:Zv,lights_fragment_maps:Jv,lights_fragment_end:Qv,logdepthbuf_fragment:tx,logdepthbuf_pars_fragment:ex,logdepthbuf_pars_vertex:nx,logdepthbuf_vertex:ix,map_fragment:sx,map_pars_fragment:rx,map_particle_fragment:ox,map_particle_pars_fragment:ax,metalnessmap_fragment:lx,metalnessmap_pars_fragment:cx,morphinstance_vertex:ux,morphcolor_vertex:hx,morphnormal_vertex:fx,morphtarget_pars_vertex:dx,morphtarget_vertex:px,normal_fragment_begin:mx,normal_fragment_maps:gx,normal_pars_fragment:_x,normal_pars_vertex:vx,normal_vertex:xx,normalmap_pars_fragment:Mx,clearcoat_normal_fragment_begin:yx,clearcoat_normal_fragment_maps:Sx,clearcoat_pars_fragment:bx,iridescence_pars_fragment:Ex,opaque_fragment:Tx,packing:wx,premultiplied_alpha_fragment:Ax,project_vertex:Rx,dithering_fragment:Cx,dithering_pars_fragment:Px,roughnessmap_fragment:Dx,roughnessmap_pars_fragment:Lx,shadowmap_pars_fragment:Ix,shadowmap_pars_vertex:Ux,shadowmap_vertex:Nx,shadowmask_pars_fragment:Fx,skinbase_vertex:Ox,skinning_pars_vertex:Bx,skinning_vertex:kx,skinnormal_vertex:zx,specularmap_fragment:Hx,specularmap_pars_fragment:Vx,tonemapping_fragment:Gx,tonemapping_pars_fragment:Wx,transmission_fragment:Xx,transmission_pars_fragment:$x,uv_pars_fragment:Yx,uv_pars_vertex:jx,uv_vertex:qx,worldpos_vertex:Kx,background_vert:Zx,background_frag:Jx,backgroundCube_vert:Qx,backgroundCube_frag:tM,cube_vert:eM,cube_frag:nM,depth_vert:iM,depth_frag:sM,distanceRGBA_vert:rM,distanceRGBA_frag:oM,equirect_vert:aM,equirect_frag:lM,linedashed_vert:cM,linedashed_frag:uM,meshbasic_vert:hM,meshbasic_frag:fM,meshlambert_vert:dM,meshlambert_frag:pM,meshmatcap_vert:mM,meshmatcap_frag:gM,meshnormal_vert:_M,meshnormal_frag:vM,meshphong_vert:xM,meshphong_frag:MM,meshphysical_vert:yM,meshphysical_frag:SM,meshtoon_vert:bM,meshtoon_frag:EM,points_vert:TM,points_frag:wM,shadow_vert:AM,shadow_frag:RM,sprite_vert:CM,sprite_frag:PM},vt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},kn={basic:{uniforms:Ke([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Ke([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Ke([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Ke([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Ke([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Ke([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Ke([vt.points,vt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Ke([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Ke([vt.common,vt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Ke([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Ke([vt.sprite,vt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Ke([vt.common,vt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Ke([vt.lights,vt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};kn.physical={uniforms:Ke([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const yo={r:0,b:0,g:0},Yi=new Xn,DM=new fe;function LM(n,t,e,i,s,r,o){const a=new Yt(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function _(M){let y=!1;const v=g(M);v===null?f(a,l):v&&v.isColor&&(f(v,1),y=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===xa)?(u===void 0&&(u=new Jt(new Ui(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Zs(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Yi.copy(y.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(DM.makeRotationFromEuler(Yi)),u.material.toneMapped=te.getTransfer(v.colorSpace)!==ue,(h!==v||d!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,p=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Jt(new $r(2,2),new hi({name:"BackgroundMaterial",uniforms:Zs(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=te.getTransfer(v.colorSpace)!==ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,p=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,y){M.getRGB(yo,cp(n)),i.buffers.color.setClear(yo.r,yo.g,yo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(a,l)},render:_,addToRenderList:m}}function IM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(S,P,N,z,K){let it=!1;const q=h(z,N,P);r!==q&&(r=q,c(r.object)),it=p(S,z,N,K),it&&g(S,z,N,K),K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),(it||o)&&(o=!1,v(S,P,N,z),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,P,N){const z=N.wireframe===!0;let K=i[S.id];K===void 0&&(K={},i[S.id]=K);let it=K[P.id];it===void 0&&(it={},K[P.id]=it);let q=it[z];return q===void 0&&(q=d(l()),it[z]=q),q}function d(S){const P=[],N=[],z=[];for(let K=0;K<e;K++)P[K]=0,N[K]=0,z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,P,N,z){const K=r.attributes,it=P.attributes;let q=0;const et=N.getAttributes();for(const G in et)if(et[G].location>=0){const bt=K[G];let At=it[G];if(At===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(At=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(At=S.instanceColor)),bt===void 0||bt.attribute!==At||At&&bt.data!==At.data)return!0;q++}return r.attributesNum!==q||r.index!==z}function g(S,P,N,z){const K={},it=P.attributes;let q=0;const et=N.getAttributes();for(const G in et)if(et[G].location>=0){let bt=it[G];bt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(bt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(bt=S.instanceColor));const At={};At.attribute=bt,bt&&bt.data&&(At.data=bt.data),K[G]=At,q++}r.attributes=K,r.attributesNum=q,r.index=z}function _(){const S=r.newAttributes;for(let P=0,N=S.length;P<N;P++)S[P]=0}function m(S){f(S,0)}function f(S,P){const N=r.newAttributes,z=r.enabledAttributes,K=r.attributeDivisors;N[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),K[S]!==P&&(n.vertexAttribDivisor(S,P),K[S]=P)}function M(){const S=r.newAttributes,P=r.enabledAttributes;for(let N=0,z=P.length;N<z;N++)P[N]!==S[N]&&(n.disableVertexAttribArray(N),P[N]=0)}function y(S,P,N,z,K,it,q){q===!0?n.vertexAttribIPointer(S,P,N,K,it):n.vertexAttribPointer(S,P,N,z,K,it)}function v(S,P,N,z){_();const K=z.attributes,it=N.getAttributes(),q=P.defaultAttributeValues;for(const et in it){const G=it[et];if(G.location>=0){let pt=K[et];if(pt===void 0&&(et==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),et==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor)),pt!==void 0){const bt=pt.normalized,At=pt.itemSize,Bt=t.get(pt);if(Bt===void 0)continue;const se=Bt.buffer,st=Bt.type,ht=Bt.bytesPerElement,wt=st===n.INT||st===n.UNSIGNED_INT||pt.gpuType===Wc;if(pt.isInterleavedBufferAttribute){const _t=pt.data,Ot=_t.stride,Ht=pt.offset;if(_t.isInstancedInterleavedBuffer){for(let Wt=0;Wt<G.locationSize;Wt++)f(G.location+Wt,_t.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Wt=0;Wt<G.locationSize;Wt++)m(G.location+Wt);n.bindBuffer(n.ARRAY_BUFFER,se);for(let Wt=0;Wt<G.locationSize;Wt++)y(G.location+Wt,At/G.locationSize,st,bt,Ot*ht,(Ht+At/G.locationSize*Wt)*ht,wt)}else{if(pt.isInstancedBufferAttribute){for(let _t=0;_t<G.locationSize;_t++)f(G.location+_t,pt.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let _t=0;_t<G.locationSize;_t++)m(G.location+_t);n.bindBuffer(n.ARRAY_BUFFER,se);for(let _t=0;_t<G.locationSize;_t++)y(G.location+_t,At/G.locationSize,st,bt,At*ht,At/G.locationSize*_t*ht,wt)}}else if(q!==void 0){const bt=q[et];if(bt!==void 0)switch(bt.length){case 2:n.vertexAttrib2fv(G.location,bt);break;case 3:n.vertexAttrib3fv(G.location,bt);break;case 4:n.vertexAttrib4fv(G.location,bt);break;default:n.vertexAttrib1fv(G.location,bt)}}}}M()}function I(){L();for(const S in i){const P=i[S];for(const N in P){const z=P[N];for(const K in z)u(z[K].object),delete z[K];delete P[N]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const N in P){const z=P[N];for(const K in z)u(z[K].object),delete z[K];delete P[N]}delete i[S.id]}function A(S){for(const P in i){const N=i[P];if(N[S.id]===void 0)continue;const z=N[S.id];for(const K in z)u(z[K].object),delete z[K];delete N[S.id]}}function L(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function UM(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function NM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Pn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const L=A===Xr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ui&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Hn&&!L)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:I,maxSamples:C}}function FM(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new ri,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:i,y=M*4;let v=f.clippingState||null;l.value=v,v=u(g,d,y,p);for(let I=0;I!==y;++I)v[I]=e[I];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,v=p;y!==_;++y,v+=4)o.copy(h[y]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function OM(n){let t=new WeakMap;function e(o,a){return a===$l?o.mapping=Ys:a===Yl&&(o.mapping=js),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===$l||a===Yl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new j0(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class pp extends hp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Is=4,Lh=[.125,.215,.35,.446,.526,.582],es=20,ol=new pp,Ih=new Yt;let al=null,ll=0,cl=0,ul=!1;const Zi=(1+Math.sqrt(5))/2,Rs=1/Zi,Uh=[new F(-Zi,Rs,0),new F(Zi,Rs,0),new F(-Rs,0,Zi),new F(Rs,0,Zi),new F(0,Zi,-Rs),new F(0,Zi,Rs),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class yc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){al=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(al,ll,cl),this._renderer.xr.enabled=ul,t.scissorTest=!1,So(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ys||t.mapping===js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),al=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Xr,format:Pn,colorSpace:Qs,depthBuffer:!1},s=Nh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BM(r)),this._blurMaterial=kM(r,t,e)}return s}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,ol)}_sceneToCubeUV(t,e,i,s){const a=new xn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Ih),u.toneMapping=Ci,u.autoClear=!1;const p=new ir({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),g=new Jt(new Ui,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Ih),_=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):M===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const y=this._cubeSize;So(s,M*y,f>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ys||t.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;So(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ol)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Uh[(s-r-1)%Uh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Jt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*es-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):es;m>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${es}`);const f=[];let M=0;for(let A=0;A<es;++A){const L=A/_,E=Math.exp(-L*L/2);f.push(E),A===0?M+=E:A<m&&(M+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const v=this._sizeLods[s],I=3*v*(s>y-Is?s-y+Is:0),C=4*(this._cubeSize-v);So(e,I,C,3*v,2*v),l.setRenderTarget(e),l.render(h,ol)}}function BM(n){const t=[],e=[],i=[];let s=n;const r=n-Is+1+Lh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Is?l=Lh[o-n+Is-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,M=new Float32Array(_*g*p),y=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,L=C>2?0:-1,E=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];M.set(E,_*g*C),y.set(d,m*g*C);const S=[C,C,C,C,C,C];v.set(S,f*g*C)}const I=new Oe;I.setAttribute("position",new Ln(M,_)),I.setAttribute("uv",new Ln(y,m)),I.setAttribute("faceIndex",new Ln(v,f)),t.push(I),s>Is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Nh(n,t,e){const i=new ls(n,t,e);return i.texture.mapping=xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function So(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function kM(n,t,e){const i=new Float32Array(es),s=new F(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Fh(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Oh(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function tu(){return`

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
	`}function zM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===$l||l===Yl,u=l===Ys||l===js;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new yc(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new yc(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function HM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&vr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function VM(n,t,e,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let y=0,v=M.length;y<v;y+=3){const I=M[y+0],C=M[y+1],A=M[y+2];d.push(I,C,C,A,A,I)}}else if(g!==void 0){const M=g.array;_=g.version;for(let y=0,v=M.length/3-1;y<v;y+=3){const I=y+0,C=y+1,A=y+2;d.push(I,C,C,A,A,I)}}else return;const m=new(ip(d)?lp:ap)(d,1);m.version=_;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function GM(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),e.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),e.update(p,i,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function h(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,_,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M]*_[M];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function WM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function XM(n,t,e){const i=new WeakMap,s=new Ee;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let S=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let I=a.attributes.position.count*v,C=1;I>t.maxTextureSize&&(C=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const A=new Float32Array(I*C*4*h),L=new rp(A,I,C,h);L.type=Hn,L.needsUpdate=!0;const E=v*4;for(let P=0;P<h;P++){const N=f[P],z=M[P],K=y[P],it=I*C*4*P;for(let q=0;q<N.count;q++){const et=q*E;g===!0&&(s.fromBufferAttribute(N,q),A[it+et+0]=s.x,A[it+et+1]=s.y,A[it+et+2]=s.z,A[it+et+3]=0),_===!0&&(s.fromBufferAttribute(z,q),A[it+et+4]=s.x,A[it+et+5]=s.y,A[it+et+6]=s.z,A[it+et+7]=0),m===!0&&(s.fromBufferAttribute(K,q),A[it+et+8]=s.x,A[it+et+9]=s.y,A[it+et+10]=s.z,A[it+et+11]=K.itemSize===4?s.w:1)}}d={count:h,texture:L,size:new Nt(I,C)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function $M(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class mp extends Ye{constructor(t,e,i,s,r,o,a,l,c,u=Ws){if(u!==Ws&&u!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ws&&(i=as),i===void 0&&u===Ks&&(i=qs),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const gp=new Ye,Bh=new mp(1,1),_p=new rp,vp=new I0,xp=new fp,kh=[],zh=[],Hh=new Float32Array(16),Vh=new Float32Array(9),Gh=new Float32Array(4);function sr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=kh[s];if(r===void 0&&(r=new Float32Array(s),kh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function De(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Le(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Sa(n,t){let e=zh[t];e===void 0&&(e=new Int32Array(t),zh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function YM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function jM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2fv(this.addr,t),Le(e,t)}}function qM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;n.uniform3fv(this.addr,t),Le(e,t)}}function KM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4fv(this.addr,t),Le(e,t)}}function ZM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;Gh.set(i),n.uniformMatrix2fv(this.addr,!1,Gh),Le(e,i)}}function JM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;Vh.set(i),n.uniformMatrix3fv(this.addr,!1,Vh),Le(e,i)}}function QM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;Hh.set(i),n.uniformMatrix4fv(this.addr,!1,Hh),Le(e,i)}}function ty(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ey(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2iv(this.addr,t),Le(e,t)}}function ny(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3iv(this.addr,t),Le(e,t)}}function iy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4iv(this.addr,t),Le(e,t)}}function sy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function ry(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2uiv(this.addr,t),Le(e,t)}}function oy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3uiv(this.addr,t),Le(e,t)}}function ay(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4uiv(this.addr,t),Le(e,t)}}function ly(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Bh.compareFunction=np,r=Bh):r=gp,e.setTexture2D(t||r,s)}function cy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||vp,s)}function uy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||xp,s)}function hy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||_p,s)}function fy(n){switch(n){case 5126:return YM;case 35664:return jM;case 35665:return qM;case 35666:return KM;case 35674:return ZM;case 35675:return JM;case 35676:return QM;case 5124:case 35670:return ty;case 35667:case 35671:return ey;case 35668:case 35672:return ny;case 35669:case 35673:return iy;case 5125:return sy;case 36294:return ry;case 36295:return oy;case 36296:return ay;case 35678:case 36198:case 36298:case 36306:case 35682:return ly;case 35679:case 36299:case 36307:return cy;case 35680:case 36300:case 36308:case 36293:return uy;case 36289:case 36303:case 36311:case 36292:return hy}}function dy(n,t){n.uniform1fv(this.addr,t)}function py(n,t){const e=sr(t,this.size,2);n.uniform2fv(this.addr,e)}function my(n,t){const e=sr(t,this.size,3);n.uniform3fv(this.addr,e)}function gy(n,t){const e=sr(t,this.size,4);n.uniform4fv(this.addr,e)}function _y(n,t){const e=sr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function vy(n,t){const e=sr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function xy(n,t){const e=sr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function My(n,t){n.uniform1iv(this.addr,t)}function yy(n,t){n.uniform2iv(this.addr,t)}function Sy(n,t){n.uniform3iv(this.addr,t)}function by(n,t){n.uniform4iv(this.addr,t)}function Ey(n,t){n.uniform1uiv(this.addr,t)}function Ty(n,t){n.uniform2uiv(this.addr,t)}function wy(n,t){n.uniform3uiv(this.addr,t)}function Ay(n,t){n.uniform4uiv(this.addr,t)}function Ry(n,t,e){const i=this.cache,s=t.length,r=Sa(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||gp,r[o])}function Cy(n,t,e){const i=this.cache,s=t.length,r=Sa(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||vp,r[o])}function Py(n,t,e){const i=this.cache,s=t.length,r=Sa(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||xp,r[o])}function Dy(n,t,e){const i=this.cache,s=t.length,r=Sa(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||_p,r[o])}function Ly(n){switch(n){case 5126:return dy;case 35664:return py;case 35665:return my;case 35666:return gy;case 35674:return _y;case 35675:return vy;case 35676:return xy;case 5124:case 35670:return My;case 35667:case 35671:return yy;case 35668:case 35672:return Sy;case 35669:case 35673:return by;case 5125:return Ey;case 36294:return Ty;case 36295:return wy;case 36296:return Ay;case 35678:case 36198:case 36298:case 36306:case 35682:return Ry;case 35679:case 36299:case 36307:return Cy;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Dy}}class Iy{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=fy(e.type)}}class Uy{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ly(e.type)}}class Ny{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const hl=/(\w+)(\])?(\[|\.)?/g;function Wh(n,t){n.seq.push(t),n.map[t.id]=t}function Fy(n,t,e){const i=n.name,s=i.length;for(hl.lastIndex=0;;){const r=hl.exec(i),o=hl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Wh(e,c===void 0?new Iy(a,n,t):new Uy(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Ny(a),Wh(e,h)),e=h}}}class Vo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Fy(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Xh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Oy=37297;let By=0;function ky(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const $h=new Kt;function zy(n){te._getMatrix($h,te.workingColorSpace,n);const t=`mat3( ${$h.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case Ma:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Yh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ky(n.getShaderSource(t),o)}else return s}function Hy(n,t){const e=zy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Vy(n,t){let e;switch(t){case $_:e="Linear";break;case Y_:e="Reinhard";break;case j_:e="Cineon";break;case Wd:e="ACESFilmic";break;case K_:e="AgX";break;case Z_:e="Neutral";break;case q_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const bo=new F;function Gy(){te.getLuminanceCoefficients(bo);const n=bo.x.toFixed(4),t=bo.y.toFixed(4),e=bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function Xy(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function $y(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function xr(n){return n!==""}function jh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Yy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(n){return n.replace(Yy,qy)}const jy=new Map;function qy(n,t){let e=Zt[t];if(e===void 0){const i=jy.get(t);if(i!==void 0)e=Zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Sc(e)}const Ky=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kh(n){return n.replace(Ky,Zy)}function Zy(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Jy(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Vd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function Qy(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ys:case js:t="ENVMAP_TYPE_CUBE";break;case xa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tS(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case js:t="ENVMAP_MODE_REFRACTION";break}return t}function eS(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Gd:t="ENVMAP_BLENDING_MULTIPLY";break;case W_:t="ENVMAP_BLENDING_MIX";break;case X_:t="ENVMAP_BLENDING_ADD";break}return t}function nS(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function iS(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Jy(e),c=Qy(e),u=tS(e),h=eS(e),d=nS(e),p=Wy(e),g=Xy(r),_=s.createProgram();let m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),f.length>0&&(f+=`
`)):(m=[Zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),f=[Zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ci?"#define TONE_MAPPING":"",e.toneMapping!==Ci?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Ci?Vy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Hy("linearToOutputTexel",e.outputColorSpace),Gy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xr).join(`
`)),o=Sc(o),o=jh(o,e),o=qh(o,e),a=Sc(a),a=jh(a,e),a=qh(a,e),o=Kh(o),a=Kh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=M+m+o,v=M+f+a,I=Xh(s,s.VERTEX_SHADER,y),C=Xh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,I),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(I).trim(),K=s.getShaderInfoLog(C).trim();let it=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(it=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,I,C);else{const et=Yh(s,I,"vertex"),G=Yh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+et+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(z===""||K==="")&&(q=!1);q&&(P.diagnostics={runnable:it,programLog:N,vertexShader:{log:z,prefix:m},fragmentShader:{log:K,prefix:f}})}s.deleteShader(I),s.deleteShader(C),L=new Vo(s,_),E=$y(s,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,Oy)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=By++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=C,this}let sS=0;class rS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new oS(t),e.set(t,i)),i}}class oS{constructor(t){this.id=sS++,this.code=t,this.usedTimes=0}}function aS(n,t,e,i,s,r,o){const a=new Jc,l=new rS,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,P,N,z){const K=N.fog,it=z.geometry,q=E.isMeshStandardMaterial?N.environment:null,et=(E.isMeshStandardMaterial?e:t).get(E.envMap||q),G=et&&et.mapping===xa?et.image.height:null,pt=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const bt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,At=bt!==void 0?bt.length:0;let Bt=0;it.morphAttributes.position!==void 0&&(Bt=1),it.morphAttributes.normal!==void 0&&(Bt=2),it.morphAttributes.color!==void 0&&(Bt=3);let se,st,ht,wt;if(pt){const le=kn[pt];se=le.vertexShader,st=le.fragmentShader}else se=E.vertexShader,st=E.fragmentShader,l.update(E),ht=l.getVertexShaderID(E),wt=l.getFragmentShaderID(E);const _t=n.getRenderTarget(),Ot=n.state.buffers.depth.getReversed(),Ht=z.isInstancedMesh===!0,Wt=z.isBatchedMesh===!0,Me=!!E.map,R=!!E.matcap,U=!!et,w=!!E.aoMap,ot=!!E.lightMap,j=!!E.bumpMap,J=!!E.normalMap,tt=!!E.displacementMap,at=!!E.emissiveMap,Z=!!E.metalnessMap,b=!!E.roughnessMap,x=E.anisotropy>0,D=E.clearcoat>0,V=E.dispersion>0,X=E.iridescence>0,W=E.sheen>0,dt=E.transmission>0,lt=x&&!!E.anisotropyMap,mt=D&&!!E.clearcoatMap,kt=D&&!!E.clearcoatNormalMap,ct=D&&!!E.clearcoatRoughnessMap,xt=X&&!!E.iridescenceMap,Ut=X&&!!E.iridescenceThicknessMap,zt=W&&!!E.sheenColorMap,gt=W&&!!E.sheenRoughnessMap,Vt=!!E.specularMap,Xt=!!E.specularColorMap,me=!!E.specularIntensityMap,O=dt&&!!E.transmissionMap,Mt=dt&&!!E.thicknessMap,Q=!!E.gradientMap,rt=!!E.alphaMap,Et=E.alphaTest>0,yt=!!E.alphaHash,jt=!!E.extensions;let Se=Ci;E.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Se=n.toneMapping);const ke={shaderID:pt,shaderType:E.type,shaderName:E.name,vertexShader:se,fragmentShader:st,defines:E.defines,customVertexShaderID:ht,customFragmentShaderID:wt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Wt,batchingColor:Wt&&z._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&z.instanceColor!==null,instancingMorph:Ht&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:_t===null?n.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Qs,alphaToCoverage:!!E.alphaToCoverage,map:Me,matcap:R,envMap:U,envMapMode:U&&et.mapping,envMapCubeUVHeight:G,aoMap:w,lightMap:ot,bumpMap:j,normalMap:J,displacementMap:d&&tt,emissiveMap:at,normalMapObjectSpace:J&&E.normalMapType===e0,normalMapTangentSpace:J&&E.normalMapType===ep,metalnessMap:Z,roughnessMap:b,anisotropy:x,anisotropyMap:lt,clearcoat:D,clearcoatMap:mt,clearcoatNormalMap:kt,clearcoatRoughnessMap:ct,dispersion:V,iridescence:X,iridescenceMap:xt,iridescenceThicknessMap:Ut,sheen:W,sheenColorMap:zt,sheenRoughnessMap:gt,specularMap:Vt,specularColorMap:Xt,specularIntensityMap:me,transmission:dt,transmissionMap:O,thicknessMap:Mt,gradientMap:Q,opaque:E.transparent===!1&&E.blending===Gs&&E.alphaToCoverage===!1,alphaMap:rt,alphaTest:Et,alphaHash:yt,combine:E.combine,mapUv:Me&&_(E.map.channel),aoMapUv:w&&_(E.aoMap.channel),lightMapUv:ot&&_(E.lightMap.channel),bumpMapUv:j&&_(E.bumpMap.channel),normalMapUv:J&&_(E.normalMap.channel),displacementMapUv:tt&&_(E.displacementMap.channel),emissiveMapUv:at&&_(E.emissiveMap.channel),metalnessMapUv:Z&&_(E.metalnessMap.channel),roughnessMapUv:b&&_(E.roughnessMap.channel),anisotropyMapUv:lt&&_(E.anisotropyMap.channel),clearcoatMapUv:mt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:kt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:gt&&_(E.sheenRoughnessMap.channel),specularMapUv:Vt&&_(E.specularMap.channel),specularColorMapUv:Xt&&_(E.specularColorMap.channel),specularIntensityMapUv:me&&_(E.specularIntensityMap.channel),transmissionMapUv:O&&_(E.transmissionMap.channel),thicknessMapUv:Mt&&_(E.thicknessMap.channel),alphaMapUv:rt&&_(E.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(J||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!it.attributes.uv&&(Me||rt),fog:!!K,useFog:E.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ot,skinning:z.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Bt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Se,decodeVideoTexture:Me&&E.map.isVideoTexture===!0&&te.getTransfer(E.map.colorSpace)===ue,decodeVideoTextureEmissive:at&&E.emissiveMap.isVideoTexture===!0&&te.getTransfer(E.emissiveMap.colorSpace)===ue,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===hn,flipSided:E.side===Qe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:jt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&E.extensions.multiDraw===!0||Wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function f(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)S.push(P),S.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(M(S,E),y(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function M(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const S=g[E.type];let P;if(S){const N=kn[S];P=up.clone(N.uniforms)}else P=E.uniforms;return P}function I(E,S){let P;for(let N=0,z=u.length;N<z;N++){const K=u[N];if(K.cacheKey===S){P=K,++P.usedTimes;break}}return P===void 0&&(P=new iS(n,S,E,r),u.push(P)),P}function C(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:I,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:L}}function lS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function cS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Jh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Qh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,d,p,g,_,m){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),t++,f}function a(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||cS),i.length>1&&i.sort(d||Jh),s.length>1&&s.sort(d||Jh)}function u(){for(let h=t,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function uS(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Qh,n.set(i,[o])):s>=r.length?(o=new Qh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function hS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Yt};break;case"SpotLight":e={position:new F,direction:new F,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function fS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let dS=0;function pS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function mS(n){const t=new hS,e=fS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const s=new F,r=new fe,o=new fe;function a(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,M=0,y=0,v=0,I=0,C=0,A=0;c.sort(pS);for(let E=0,S=c.length;E<S;E++){const P=c[E],N=P.color,z=P.intensity,K=P.distance,it=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=N.r*z,h+=N.g*z,d+=N.b*z;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],z);A++}else if(P.isDirectionalLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const et=P.shadow,G=e.get(P);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=it,i.directionalShadowMatrix[p]=P.shadow.matrix,M++}i.directional[p]=q,p++}else if(P.isSpotLight){const q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(N).multiplyScalar(z),q.distance=K,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[_]=q;const et=P.shadow;if(P.map&&(i.spotLightMap[I]=P.map,I++,et.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[_]=et.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=it,v++}_++}else if(P.isRectAreaLight){const q=t.get(P);q.color.copy(N).multiplyScalar(z),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=q,m++}else if(P.isPointLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const et=P.shadow,G=e.get(P);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,G.shadowCameraNear=et.camera.near,G.shadowCameraFar=et.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=it,i.pointShadowMatrix[g]=P.shadow.matrix,y++}i.point[g]=q,g++}else if(P.isHemisphereLight){const q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(z),q.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[f]=q,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==M||L.numPointShadows!==y||L.numSpotShadows!==v||L.numSpotMaps!==I||L.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=M,L.numPointShadows=y,L.numSpotShadows=v,L.numSpotMaps=I,L.numLightProbes=A,i.version=dS++)}function l(c,u){let h=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){const y=c[f];if(y.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(y.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function tf(n){const t=new mS(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function gS(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new tf(n),t.set(s,[a])):r>=o.length?(a=new tf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class _S extends nr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Q_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vS extends nr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const xS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MS=`uniform sampler2D shadow_pass;
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
}`;function yS(n,t,e){let i=new Qc;const s=new Nt,r=new Nt,o=new Ee,a=new _S({depthPacking:t0}),l=new vS,c={},u=e.maxTextureSize,h={[Li]:Qe,[Qe]:Li,[hn]:hn},d=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:xS,fragmentShader:MS}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Oe;g.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hd;let f=this.type;this.render=function(C,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Ri),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=f!==ei&&this.type===ei,K=f===ei&&this.type!==ei;for(let it=0,q=C.length;it<q;it++){const et=C[it],G=et.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const pt=G.getFrameExtents();if(s.multiply(pt),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/pt.x),s.x=r.x*pt.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/pt.y),s.y=r.y*pt.y,G.mapSize.y=r.y)),G.map===null||z===!0||K===!0){const At=this.type!==ei?{minFilter:mn,magFilter:mn}:{};G.map!==null&&G.map.dispose(),G.map=new ls(s.x,s.y,At),G.map.texture.name=et.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const bt=G.getViewportCount();for(let At=0;At<bt;At++){const Bt=G.getViewport(At);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),N.viewport(o),G.updateMatrices(et,At),i=G.getFrustum(),v(A,L,G.camera,et,this.type)}G.isPointLightShadow!==!0&&this.type===ei&&M(G,L),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(E,S,P)};function M(C,A){const L=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ls(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(A,null,L,d,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(A,null,L,p,_,null)}function y(C,A,L,E){let S=null;const P=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)S=P;else if(S=L.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=S.uuid,z=A.uuid;let K=c[N];K===void 0&&(K={},c[N]=K);let it=K[z];it===void 0&&(it=S.clone(),K[z]=it,A.addEventListener("dispose",I)),S=it}if(S.visible=A.visible,S.wireframe=A.wireframe,E===ei?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=n.properties.get(S);N.light=L}return S}function v(C,A,L,E,S){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===ei)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const z=t.update(C),K=C.material;if(Array.isArray(K)){const it=z.groups;for(let q=0,et=it.length;q<et;q++){const G=it[q],pt=K[G.materialIndex];if(pt&&pt.visible){const bt=y(C,pt,E,S);C.onBeforeShadow(n,C,A,L,z,bt,G),n.renderBufferDirect(L,null,z,bt,C,G),C.onAfterShadow(n,C,A,L,z,bt,G)}}}else if(K.visible){const it=y(C,K,E,S);C.onBeforeShadow(n,C,A,L,z,it,null),n.renderBufferDirect(L,null,z,it,C,null),C.onAfterShadow(n,C,A,L,z,it,null)}}const N=C.children;for(let z=0,K=N.length;z<K;z++)v(N[z],A,L,E,S)}function I(C){C.target.removeEventListener("dispose",I);for(const L in c){const E=c[L],S=C.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const SS={[kl]:zl,[Hl]:Wl,[Vl]:Xl,[$s]:Gl,[zl]:kl,[Wl]:Hl,[Xl]:Vl,[Gl]:$s};function bS(n,t){function e(){let O=!1;const Mt=new Ee;let Q=null;const rt=new Ee(0,0,0,0);return{setMask:function(Et){Q!==Et&&!O&&(n.colorMask(Et,Et,Et,Et),Q=Et)},setLocked:function(Et){O=Et},setClear:function(Et,yt,jt,Se,ke){ke===!0&&(Et*=Se,yt*=Se,jt*=Se),Mt.set(Et,yt,jt,Se),rt.equals(Mt)===!1&&(n.clearColor(Et,yt,jt,Se),rt.copy(Mt))},reset:function(){O=!1,Q=null,rt.set(-1,0,0,0)}}}function i(){let O=!1,Mt=!1,Q=null,rt=null,Et=null;return{setReversed:function(yt){if(Mt!==yt){const jt=t.get("EXT_clip_control");Mt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);const Se=Et;Et=null,this.setClear(Se)}Mt=yt},getReversed:function(){return Mt},setTest:function(yt){yt?_t(n.DEPTH_TEST):Ot(n.DEPTH_TEST)},setMask:function(yt){Q!==yt&&!O&&(n.depthMask(yt),Q=yt)},setFunc:function(yt){if(Mt&&(yt=SS[yt]),rt!==yt){switch(yt){case kl:n.depthFunc(n.NEVER);break;case zl:n.depthFunc(n.ALWAYS);break;case Hl:n.depthFunc(n.LESS);break;case $s:n.depthFunc(n.LEQUAL);break;case Vl:n.depthFunc(n.EQUAL);break;case Gl:n.depthFunc(n.GEQUAL);break;case Wl:n.depthFunc(n.GREATER);break;case Xl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}rt=yt}},setLocked:function(yt){O=yt},setClear:function(yt){Et!==yt&&(Mt&&(yt=1-yt),n.clearDepth(yt),Et=yt)},reset:function(){O=!1,Q=null,rt=null,Et=null,Mt=!1}}}function s(){let O=!1,Mt=null,Q=null,rt=null,Et=null,yt=null,jt=null,Se=null,ke=null;return{setTest:function(le){O||(le?_t(n.STENCIL_TEST):Ot(n.STENCIL_TEST))},setMask:function(le){Mt!==le&&!O&&(n.stencilMask(le),Mt=le)},setFunc:function(le,En,$n){(Q!==le||rt!==En||Et!==$n)&&(n.stencilFunc(le,En,$n),Q=le,rt=En,Et=$n)},setOp:function(le,En,$n){(yt!==le||jt!==En||Se!==$n)&&(n.stencilOp(le,En,$n),yt=le,jt=En,Se=$n)},setLocked:function(le){O=le},setClear:function(le){ke!==le&&(n.clearStencil(le),ke=le)},reset:function(){O=!1,Mt=null,Q=null,rt=null,Et=null,yt=null,jt=null,Se=null,ke=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,M=null,y=null,v=null,I=null,C=null,A=new Yt(0,0,0),L=0,E=!1,S=null,P=null,N=null,z=null,K=null;const it=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,et=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=et>=1):G.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=et>=2);let pt=null,bt={};const At=n.getParameter(n.SCISSOR_BOX),Bt=n.getParameter(n.VIEWPORT),se=new Ee().fromArray(At),st=new Ee().fromArray(Bt);function ht(O,Mt,Q,rt){const Et=new Uint8Array(4),yt=n.createTexture();n.bindTexture(O,yt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let jt=0;jt<Q;jt++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,rt,0,n.RGBA,n.UNSIGNED_BYTE,Et):n.texImage2D(Mt+jt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Et);return yt}const wt={};wt[n.TEXTURE_2D]=ht(n.TEXTURE_2D,n.TEXTURE_2D,1),wt[n.TEXTURE_CUBE_MAP]=ht(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[n.TEXTURE_2D_ARRAY]=ht(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),wt[n.TEXTURE_3D]=ht(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_t(n.DEPTH_TEST),o.setFunc($s),j(!1),J(sh),_t(n.CULL_FACE),w(Ri);function _t(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function Ot(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function Ht(O,Mt){return h[O]!==Mt?(n.bindFramebuffer(O,Mt),h[O]=Mt,O===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Mt),O===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Wt(O,Mt){let Q=p,rt=!1;if(O){Q=d.get(Mt),Q===void 0&&(Q=[],d.set(Mt,Q));const Et=O.textures;if(Q.length!==Et.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let yt=0,jt=Et.length;yt<jt;yt++)Q[yt]=n.COLOR_ATTACHMENT0+yt;Q.length=Et.length,rt=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,rt=!0);rt&&n.drawBuffers(Q)}function Me(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const R={[ts]:n.FUNC_ADD,[A_]:n.FUNC_SUBTRACT,[R_]:n.FUNC_REVERSE_SUBTRACT};R[C_]=n.MIN,R[P_]=n.MAX;const U={[D_]:n.ZERO,[L_]:n.ONE,[I_]:n.SRC_COLOR,[Ol]:n.SRC_ALPHA,[k_]:n.SRC_ALPHA_SATURATE,[O_]:n.DST_COLOR,[N_]:n.DST_ALPHA,[U_]:n.ONE_MINUS_SRC_COLOR,[Bl]:n.ONE_MINUS_SRC_ALPHA,[B_]:n.ONE_MINUS_DST_COLOR,[F_]:n.ONE_MINUS_DST_ALPHA,[z_]:n.CONSTANT_COLOR,[H_]:n.ONE_MINUS_CONSTANT_COLOR,[V_]:n.CONSTANT_ALPHA,[G_]:n.ONE_MINUS_CONSTANT_ALPHA};function w(O,Mt,Q,rt,Et,yt,jt,Se,ke,le){if(O===Ri){_===!0&&(Ot(n.BLEND),_=!1);return}if(_===!1&&(_t(n.BLEND),_=!0),O!==w_){if(O!==m||le!==E){if((f!==ts||v!==ts)&&(n.blendEquation(n.FUNC_ADD),f=ts,v=ts),le)switch(O){case Gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rh:n.blendFunc(n.ONE,n.ONE);break;case oh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ah:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case oh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ah:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,y=null,I=null,C=null,A.set(0,0,0),L=0,m=O,E=le}return}Et=Et||Mt,yt=yt||Q,jt=jt||rt,(Mt!==f||Et!==v)&&(n.blendEquationSeparate(R[Mt],R[Et]),f=Mt,v=Et),(Q!==M||rt!==y||yt!==I||jt!==C)&&(n.blendFuncSeparate(U[Q],U[rt],U[yt],U[jt]),M=Q,y=rt,I=yt,C=jt),(Se.equals(A)===!1||ke!==L)&&(n.blendColor(Se.r,Se.g,Se.b,ke),A.copy(Se),L=ke),m=O,E=!1}function ot(O,Mt){O.side===hn?Ot(n.CULL_FACE):_t(n.CULL_FACE);let Q=O.side===Qe;Mt&&(Q=!Q),j(Q),O.blending===Gs&&O.transparent===!1?w(Ri):w(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const rt=O.stencilWrite;a.setTest(rt),rt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),at(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?_t(n.SAMPLE_ALPHA_TO_COVERAGE):Ot(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(O){S!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),S=O)}function J(O){O!==E_?(_t(n.CULL_FACE),O!==P&&(O===sh?n.cullFace(n.BACK):O===T_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ot(n.CULL_FACE),P=O}function tt(O){O!==N&&(q&&n.lineWidth(O),N=O)}function at(O,Mt,Q){O?(_t(n.POLYGON_OFFSET_FILL),(z!==Mt||K!==Q)&&(n.polygonOffset(Mt,Q),z=Mt,K=Q)):Ot(n.POLYGON_OFFSET_FILL)}function Z(O){O?_t(n.SCISSOR_TEST):Ot(n.SCISSOR_TEST)}function b(O){O===void 0&&(O=n.TEXTURE0+it-1),pt!==O&&(n.activeTexture(O),pt=O)}function x(O,Mt,Q){Q===void 0&&(pt===null?Q=n.TEXTURE0+it-1:Q=pt);let rt=bt[Q];rt===void 0&&(rt={type:void 0,texture:void 0},bt[Q]=rt),(rt.type!==O||rt.texture!==Mt)&&(pt!==Q&&(n.activeTexture(Q),pt=Q),n.bindTexture(O,Mt||wt[O]),rt.type=O,rt.texture=Mt)}function D(){const O=bt[pt];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function X(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function kt(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function zt(O){se.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),se.copy(O))}function gt(O){st.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),st.copy(O))}function Vt(O,Mt){let Q=c.get(Mt);Q===void 0&&(Q=new WeakMap,c.set(Mt,Q));let rt=Q.get(O);rt===void 0&&(rt=n.getUniformBlockIndex(Mt,O.name),Q.set(O,rt))}function Xt(O,Mt){const rt=c.get(Mt).get(O);l.get(Mt)!==rt&&(n.uniformBlockBinding(Mt,rt,O.__bindingPointIndex),l.set(Mt,rt))}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},pt=null,bt={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,M=null,y=null,v=null,I=null,C=null,A=new Yt(0,0,0),L=0,E=!1,S=null,P=null,N=null,z=null,K=null,se.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_t,disable:Ot,bindFramebuffer:Ht,drawBuffers:Wt,useProgram:Me,setBlending:w,setMaterial:ot,setFlipSided:j,setCullFace:J,setLineWidth:tt,setPolygonOffset:at,setScissorTest:Z,activeTexture:b,bindTexture:x,unbindTexture:D,compressedTexImage2D:V,compressedTexImage3D:X,texImage2D:xt,texImage3D:Ut,updateUBOMapping:Vt,uniformBlockBinding:Xt,texStorage2D:kt,texStorage3D:ct,texSubImage2D:W,texSubImage3D:dt,compressedTexSubImage2D:lt,compressedTexSubImage3D:mt,scissor:zt,viewport:gt,reset:me}}function ef(n,t,e,i){const s=ES(i);switch(e){case qd:return n*t;case Zd:return n*t;case Jd:return n*t*2;case Yc:return n*t/s.components*s.byteLength;case jc:return n*t/s.components*s.byteLength;case Qd:return n*t*2/s.components*s.byteLength;case qc:return n*t*2/s.components*s.byteLength;case Kd:return n*t*3/s.components*s.byteLength;case Pn:return n*t*4/s.components*s.byteLength;case Kc:return n*t*4/s.components*s.byteLength;case Oo:case Bo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ko:case zo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Kl:case Jl:return Math.max(n,16)*Math.max(t,8)/4;case ql:case Zl:return Math.max(n,8)*Math.max(t,8)/2;case Ql:case tc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ec:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case sc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case rc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ac:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case lc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case cc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case uc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case hc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case fc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case dc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case pc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ho:case gc:case _c:return Math.ceil(n/4)*Math.ceil(t/4)*16;case tp:case vc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case xc:case Mc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ES(n){switch(n){case ui:case $d:return{byteLength:1,components:1};case Fr:case Yd:case Xr:return{byteLength:2,components:1};case Xc:case $c:return{byteLength:2,components:4};case as:case Wc:case Hn:return{byteLength:4,components:1};case jd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function TS(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return p?new OffscreenCanvas(b,x):ea("canvas")}function _(b,x,D){let V=1;const X=Z(b);if((X.width>D||X.height>D)&&(V=D/Math.max(X.width,X.height)),V<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const W=Math.floor(V*X.width),dt=Math.floor(V*X.height);h===void 0&&(h=g(W,dt));const lt=x?g(W,dt):h;return lt.width=W,lt.height=dt,lt.getContext("2d").drawImage(b,0,0,W,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+W+"x"+dt+")."),lt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){n.generateMipmap(b)}function M(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(b,x,D,V,X=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let W=x;if(x===n.RED&&(D===n.FLOAT&&(W=n.R32F),D===n.HALF_FLOAT&&(W=n.R16F),D===n.UNSIGNED_BYTE&&(W=n.R8)),x===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(W=n.R8UI),D===n.UNSIGNED_SHORT&&(W=n.R16UI),D===n.UNSIGNED_INT&&(W=n.R32UI),D===n.BYTE&&(W=n.R8I),D===n.SHORT&&(W=n.R16I),D===n.INT&&(W=n.R32I)),x===n.RG&&(D===n.FLOAT&&(W=n.RG32F),D===n.HALF_FLOAT&&(W=n.RG16F),D===n.UNSIGNED_BYTE&&(W=n.RG8)),x===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(W=n.RG8UI),D===n.UNSIGNED_SHORT&&(W=n.RG16UI),D===n.UNSIGNED_INT&&(W=n.RG32UI),D===n.BYTE&&(W=n.RG8I),D===n.SHORT&&(W=n.RG16I),D===n.INT&&(W=n.RG32I)),x===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(W=n.RGB8UI),D===n.UNSIGNED_SHORT&&(W=n.RGB16UI),D===n.UNSIGNED_INT&&(W=n.RGB32UI),D===n.BYTE&&(W=n.RGB8I),D===n.SHORT&&(W=n.RGB16I),D===n.INT&&(W=n.RGB32I)),x===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),D===n.UNSIGNED_INT&&(W=n.RGBA32UI),D===n.BYTE&&(W=n.RGBA8I),D===n.SHORT&&(W=n.RGBA16I),D===n.INT&&(W=n.RGBA32I)),x===n.RGB&&D===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),x===n.RGBA){const dt=X?Ma:te.getTransfer(V);D===n.FLOAT&&(W=n.RGBA32F),D===n.HALF_FLOAT&&(W=n.RGBA16F),D===n.UNSIGNED_BYTE&&(W=dt===ue?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function v(b,x){let D;return b?x===null||x===as||x===qs?D=n.DEPTH24_STENCIL8:x===Hn?D=n.DEPTH32F_STENCIL8:x===Fr&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===as||x===qs?D=n.DEPTH_COMPONENT24:x===Hn?D=n.DEPTH_COMPONENT32F:x===Fr&&(D=n.DEPTH_COMPONENT16),D}function I(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==mn&&b.minFilter!==zn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function C(b){const x=b.target;x.removeEventListener("dispose",C),L(x),x.isVideoTexture&&u.delete(x)}function A(b){const x=b.target;x.removeEventListener("dispose",A),S(x)}function L(b){const x=i.get(b);if(x.__webglInit===void 0)return;const D=b.source,V=d.get(D);if(V){const X=V[x.__cacheKey];X.usedTimes--,X.usedTimes===0&&E(b),Object.keys(V).length===0&&d.delete(D)}i.remove(b)}function E(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const D=b.source,V=d.get(D);delete V[x.__cacheKey],o.memory.textures--}function S(b){const x=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let X=0;X<x.__webglFramebuffer[V].length;X++)n.deleteFramebuffer(x.__webglFramebuffer[V][X]);else n.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)n.deleteFramebuffer(x.__webglFramebuffer[V]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const D=b.textures;for(let V=0,X=D.length;V<X;V++){const W=i.get(D[V]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(D[V])}i.remove(b)}let P=0;function N(){P=0}function z(){const b=P;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),P+=1,b}function K(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function it(b,x){const D=i.get(b);if(b.isVideoTexture&&tt(b),b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){const V=b.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(D,b,x);return}}e.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+x)}function q(b,x){const D=i.get(b);if(b.version>0&&D.__version!==b.version){st(D,b,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+x)}function et(b,x){const D=i.get(b);if(b.version>0&&D.__version!==b.version){st(D,b,x);return}e.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+x)}function G(b,x){const D=i.get(b);if(b.version>0&&D.__version!==b.version){ht(D,b,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+x)}const pt={[Qo]:n.REPEAT,[is]:n.CLAMP_TO_EDGE,[jl]:n.MIRRORED_REPEAT},bt={[mn]:n.NEAREST,[J_]:n.NEAREST_MIPMAP_NEAREST,[no]:n.NEAREST_MIPMAP_LINEAR,[zn]:n.LINEAR,[ka]:n.LINEAR_MIPMAP_NEAREST,[ss]:n.LINEAR_MIPMAP_LINEAR},At={[n0]:n.NEVER,[l0]:n.ALWAYS,[i0]:n.LESS,[np]:n.LEQUAL,[s0]:n.EQUAL,[a0]:n.GEQUAL,[r0]:n.GREATER,[o0]:n.NOTEQUAL};function Bt(b,x){if(x.type===Hn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===zn||x.magFilter===ka||x.magFilter===no||x.magFilter===ss||x.minFilter===zn||x.minFilter===ka||x.minFilter===no||x.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,pt[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,pt[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,pt[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,bt[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,bt[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,At[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===mn||x.minFilter!==no&&x.minFilter!==ss||x.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function se(b,x){let D=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",C));const V=x.source;let X=d.get(V);X===void 0&&(X={},d.set(V,X));const W=K(x);if(W!==b.__cacheKey){X[W]===void 0&&(X[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),X[W].usedTimes++;const dt=X[b.__cacheKey];dt!==void 0&&(X[b.__cacheKey].usedTimes--,dt.usedTimes===0&&E(x)),b.__cacheKey=W,b.__webglTexture=X[W].texture}return D}function st(b,x,D){let V=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=n.TEXTURE_3D);const X=se(b,x),W=x.source;e.bindTexture(V,b.__webglTexture,n.TEXTURE0+D);const dt=i.get(W);if(W.version!==dt.__version||X===!0){e.activeTexture(n.TEXTURE0+D);const lt=te.getPrimaries(te.workingColorSpace),mt=x.colorSpace===Ti?null:te.getPrimaries(x.colorSpace),kt=x.colorSpace===Ti||lt===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let ct=_(x.image,!1,s.maxTextureSize);ct=at(x,ct);const xt=r.convert(x.format,x.colorSpace),Ut=r.convert(x.type);let zt=y(x.internalFormat,xt,Ut,x.colorSpace,x.isVideoTexture);Bt(V,x);let gt;const Vt=x.mipmaps,Xt=x.isVideoTexture!==!0,me=dt.__version===void 0||X===!0,O=W.dataReady,Mt=I(x,ct);if(x.isDepthTexture)zt=v(x.format===Ks,x.type),me&&(Xt?e.texStorage2D(n.TEXTURE_2D,1,zt,ct.width,ct.height):e.texImage2D(n.TEXTURE_2D,0,zt,ct.width,ct.height,0,xt,Ut,null));else if(x.isDataTexture)if(Vt.length>0){Xt&&me&&e.texStorage2D(n.TEXTURE_2D,Mt,zt,Vt[0].width,Vt[0].height);for(let Q=0,rt=Vt.length;Q<rt;Q++)gt=Vt[Q],Xt?O&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,gt.width,gt.height,xt,Ut,gt.data):e.texImage2D(n.TEXTURE_2D,Q,zt,gt.width,gt.height,0,xt,Ut,gt.data);x.generateMipmaps=!1}else Xt?(me&&e.texStorage2D(n.TEXTURE_2D,Mt,zt,ct.width,ct.height),O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct.width,ct.height,xt,Ut,ct.data)):e.texImage2D(n.TEXTURE_2D,0,zt,ct.width,ct.height,0,xt,Ut,ct.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Xt&&me&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,zt,Vt[0].width,Vt[0].height,ct.depth);for(let Q=0,rt=Vt.length;Q<rt;Q++)if(gt=Vt[Q],x.format!==Pn)if(xt!==null)if(Xt){if(O)if(x.layerUpdates.size>0){const Et=ef(gt.width,gt.height,x.format,x.type);for(const yt of x.layerUpdates){const jt=gt.data.subarray(yt*Et/gt.data.BYTES_PER_ELEMENT,(yt+1)*Et/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,yt,gt.width,gt.height,1,xt,jt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,gt.width,gt.height,ct.depth,xt,gt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,zt,gt.width,gt.height,ct.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?O&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,gt.width,gt.height,ct.depth,xt,Ut,gt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,zt,gt.width,gt.height,ct.depth,0,xt,Ut,gt.data)}else{Xt&&me&&e.texStorage2D(n.TEXTURE_2D,Mt,zt,Vt[0].width,Vt[0].height);for(let Q=0,rt=Vt.length;Q<rt;Q++)gt=Vt[Q],x.format!==Pn?xt!==null?Xt?O&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,gt.width,gt.height,xt,gt.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,zt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?O&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,gt.width,gt.height,xt,Ut,gt.data):e.texImage2D(n.TEXTURE_2D,Q,zt,gt.width,gt.height,0,xt,Ut,gt.data)}else if(x.isDataArrayTexture)if(Xt){if(me&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,zt,ct.width,ct.height,ct.depth),O)if(x.layerUpdates.size>0){const Q=ef(ct.width,ct.height,x.format,x.type);for(const rt of x.layerUpdates){const Et=ct.data.subarray(rt*Q/ct.data.BYTES_PER_ELEMENT,(rt+1)*Q/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,rt,ct.width,ct.height,1,xt,Ut,Et)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,xt,Ut,ct.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,zt,ct.width,ct.height,ct.depth,0,xt,Ut,ct.data);else if(x.isData3DTexture)Xt?(me&&e.texStorage3D(n.TEXTURE_3D,Mt,zt,ct.width,ct.height,ct.depth),O&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,xt,Ut,ct.data)):e.texImage3D(n.TEXTURE_3D,0,zt,ct.width,ct.height,ct.depth,0,xt,Ut,ct.data);else if(x.isFramebufferTexture){if(me)if(Xt)e.texStorage2D(n.TEXTURE_2D,Mt,zt,ct.width,ct.height);else{let Q=ct.width,rt=ct.height;for(let Et=0;Et<Mt;Et++)e.texImage2D(n.TEXTURE_2D,Et,zt,Q,rt,0,xt,Ut,null),Q>>=1,rt>>=1}}else if(Vt.length>0){if(Xt&&me){const Q=Z(Vt[0]);e.texStorage2D(n.TEXTURE_2D,Mt,zt,Q.width,Q.height)}for(let Q=0,rt=Vt.length;Q<rt;Q++)gt=Vt[Q],Xt?O&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,xt,Ut,gt):e.texImage2D(n.TEXTURE_2D,Q,zt,xt,Ut,gt);x.generateMipmaps=!1}else if(Xt){if(me){const Q=Z(ct);e.texStorage2D(n.TEXTURE_2D,Mt,zt,Q.width,Q.height)}O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Ut,ct)}else e.texImage2D(n.TEXTURE_2D,0,zt,xt,Ut,ct);m(x)&&f(V),dt.__version=W.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ht(b,x,D){if(x.image.length!==6)return;const V=se(b,x),X=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+D);const W=i.get(X);if(X.version!==W.__version||V===!0){e.activeTexture(n.TEXTURE0+D);const dt=te.getPrimaries(te.workingColorSpace),lt=x.colorSpace===Ti?null:te.getPrimaries(x.colorSpace),mt=x.colorSpace===Ti||dt===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const kt=x.isCompressedTexture||x.image[0].isCompressedTexture,ct=x.image[0]&&x.image[0].isDataTexture,xt=[];for(let rt=0;rt<6;rt++)!kt&&!ct?xt[rt]=_(x.image[rt],!0,s.maxCubemapSize):xt[rt]=ct?x.image[rt].image:x.image[rt],xt[rt]=at(x,xt[rt]);const Ut=xt[0],zt=r.convert(x.format,x.colorSpace),gt=r.convert(x.type),Vt=y(x.internalFormat,zt,gt,x.colorSpace),Xt=x.isVideoTexture!==!0,me=W.__version===void 0||V===!0,O=X.dataReady;let Mt=I(x,Ut);Bt(n.TEXTURE_CUBE_MAP,x);let Q;if(kt){Xt&&me&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Vt,Ut.width,Ut.height);for(let rt=0;rt<6;rt++){Q=xt[rt].mipmaps;for(let Et=0;Et<Q.length;Et++){const yt=Q[Et];x.format!==Pn?zt!==null?Xt?O&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et,0,0,yt.width,yt.height,zt,yt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et,Vt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et,0,0,yt.width,yt.height,zt,gt,yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et,Vt,yt.width,yt.height,0,zt,gt,yt.data)}}}else{if(Q=x.mipmaps,Xt&&me){Q.length>0&&Mt++;const rt=Z(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Vt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ct){Xt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,xt[rt].width,xt[rt].height,zt,gt,xt[rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Vt,xt[rt].width,xt[rt].height,0,zt,gt,xt[rt].data);for(let Et=0;Et<Q.length;Et++){const jt=Q[Et].image[rt].image;Xt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et+1,0,0,jt.width,jt.height,zt,gt,jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et+1,Vt,jt.width,jt.height,0,zt,gt,jt.data)}}else{Xt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,zt,gt,xt[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Vt,zt,gt,xt[rt]);for(let Et=0;Et<Q.length;Et++){const yt=Q[Et];Xt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et+1,0,0,zt,gt,yt.image[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et+1,Vt,zt,gt,yt.image[rt])}}}m(x)&&f(n.TEXTURE_CUBE_MAP),W.__version=X.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function wt(b,x,D,V,X,W){const dt=r.convert(D.format,D.colorSpace),lt=r.convert(D.type),mt=y(D.internalFormat,dt,lt,D.colorSpace),kt=i.get(x),ct=i.get(D);if(ct.__renderTarget=x,!kt.__hasExternalTextures){const xt=Math.max(1,x.width>>W),Ut=Math.max(1,x.height>>W);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?e.texImage3D(X,W,mt,xt,Ut,x.depth,0,dt,lt,null):e.texImage2D(X,W,mt,xt,Ut,0,dt,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),J(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,X,ct.__webglTexture,0,j(x)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,X,ct.__webglTexture,W),e.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(b,x,D){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer){const V=x.depthTexture,X=V&&V.isDepthTexture?V.type:null,W=v(x.stencilBuffer,X),dt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=j(x);J(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,W,x.width,x.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,W,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,W,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,b)}else{const V=x.textures;for(let X=0;X<V.length;X++){const W=V[X],dt=r.convert(W.format,W.colorSpace),lt=r.convert(W.type),mt=y(W.internalFormat,dt,lt,W.colorSpace),kt=j(x);D&&J(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,kt,mt,x.width,x.height):J(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,kt,mt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,mt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ot(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(x.depthTexture);V.__renderTarget=x,(!V.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),it(x.depthTexture,0);const X=V.__webglTexture,W=j(x);if(x.depthTexture.format===Ws)J(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0);else if(x.depthTexture.format===Ks)J(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Ht(b){const x=i.get(b),D=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const V=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),V){const X=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",X)};V.addEventListener("dispose",X),x.__depthDisposeCallback=X}x.__boundDepthTexture=V}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Ot(x.__webglFramebuffer,b)}else if(D){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=n.createRenderbuffer(),_t(x.__webglDepthbuffer[V],b,!1);else{const X=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,W)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),_t(x.__webglDepthbuffer,b,!1);else{const V=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,X)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(b,x,D){const V=i.get(b);x!==void 0&&wt(V.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Ht(b)}function Me(b){const x=b.texture,D=i.get(b),V=i.get(x);b.addEventListener("dispose",A);const X=b.textures,W=b.isWebGLCubeRenderTarget===!0,dt=X.length>1;if(dt||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=x.version,o.memory.textures++),W){D.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[lt]=[];for(let mt=0;mt<x.mipmaps.length;mt++)D.__webglFramebuffer[lt][mt]=n.createFramebuffer()}else D.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let lt=0;lt<x.mipmaps.length;lt++)D.__webglFramebuffer[lt]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(dt)for(let lt=0,mt=X.length;lt<mt;lt++){const kt=i.get(X[lt]);kt.__webglTexture===void 0&&(kt.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&J(b)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let lt=0;lt<X.length;lt++){const mt=X[lt];D.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[lt]);const kt=r.convert(mt.format,mt.colorSpace),ct=r.convert(mt.type),xt=y(mt.internalFormat,kt,ct,mt.colorSpace,b.isXRRenderTarget===!0),Ut=j(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,xt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,D.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),_t(D.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Bt(n.TEXTURE_CUBE_MAP,x);for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)wt(D.__webglFramebuffer[lt][mt],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,mt);else wt(D.__webglFramebuffer[lt],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(x)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let lt=0,mt=X.length;lt<mt;lt++){const kt=X[lt],ct=i.get(kt);e.bindTexture(n.TEXTURE_2D,ct.__webglTexture),Bt(n.TEXTURE_2D,kt),wt(D.__webglFramebuffer,b,kt,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,0),m(kt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(lt=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,V.__webglTexture),Bt(lt,x),x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)wt(D.__webglFramebuffer[mt],b,x,n.COLOR_ATTACHMENT0,lt,mt);else wt(D.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,lt,0);m(x)&&f(lt),e.unbindTexture()}b.depthBuffer&&Ht(b)}function R(b){const x=b.textures;for(let D=0,V=x.length;D<V;D++){const X=x[D];if(m(X)){const W=M(b),dt=i.get(X).__webglTexture;e.bindTexture(W,dt),f(W),e.unbindTexture()}}}const U=[],w=[];function ot(b){if(b.samples>0){if(J(b)===!1){const x=b.textures,D=b.width,V=b.height;let X=n.COLOR_BUFFER_BIT;const W=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=i.get(b),lt=x.length>1;if(lt)for(let mt=0;mt<x.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let mt=0;mt<x.length;mt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,dt.__webglColorRenderbuffer[mt]);const kt=i.get(x[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,kt,0)}n.blitFramebuffer(0,0,D,V,0,0,D,V,X,n.NEAREST),l===!0&&(U.length=0,w.length=0,U.push(n.COLOR_ATTACHMENT0+mt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(U.push(W),w.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,w)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,U))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let mt=0;mt<x.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,dt.__webglColorRenderbuffer[mt]);const kt=i.get(x[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,kt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function j(b){return Math.min(s.maxSamples,b.samples)}function J(b){const x=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function tt(b){const x=o.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function at(b,x){const D=b.colorSpace,V=b.format,X=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||D!==Qs&&D!==Ti&&(te.getTransfer(D)===ue?(V!==Pn||X!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),x}function Z(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=it,this.setTexture2DArray=q,this.setTexture3D=et,this.setTextureCube=G,this.rebindTextures=Wt,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=J}function wS(n,t){function e(i,s=Ti){let r;const o=te.getTransfer(s);if(i===ui)return n.UNSIGNED_BYTE;if(i===Xc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$c)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$d)return n.BYTE;if(i===Yd)return n.SHORT;if(i===Fr)return n.UNSIGNED_SHORT;if(i===Wc)return n.INT;if(i===as)return n.UNSIGNED_INT;if(i===Hn)return n.FLOAT;if(i===Xr)return n.HALF_FLOAT;if(i===qd)return n.ALPHA;if(i===Kd)return n.RGB;if(i===Pn)return n.RGBA;if(i===Zd)return n.LUMINANCE;if(i===Jd)return n.LUMINANCE_ALPHA;if(i===Ws)return n.DEPTH_COMPONENT;if(i===Ks)return n.DEPTH_STENCIL;if(i===Yc)return n.RED;if(i===jc)return n.RED_INTEGER;if(i===Qd)return n.RG;if(i===qc)return n.RG_INTEGER;if(i===Kc)return n.RGBA_INTEGER;if(i===Oo||i===Bo||i===ko||i===zo)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ql||i===Kl||i===Zl||i===Jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ql||i===tc||i===ec)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ql||i===tc)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ec)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===uc||i===hc||i===fc||i===dc||i===pc||i===mc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===nc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ic)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ac)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ho||i===gc||i===_c)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ho)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tp||i===vc||i===xc||i===Mc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ho)return r.COMPRESSED_RED_RGTC1_EXT;if(i===vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class AS extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class un extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RS={type:"move"};class fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(RS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new un;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const CS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PS=`
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

}`;class DS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new hi({vertexShader:CS,fragmentShader:PS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new $r(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LS extends hs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const _=new DS,m=e.getContextAttributes();let f=null,M=null;const y=[],v=[],I=new Nt;let C=null;const A=new xn;A.viewport=new Ee;const L=new xn;L.viewport=new Ee;const E=[A,L],S=new AS;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let ht=y[st];return ht===void 0&&(ht=new fl,y[st]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(st){let ht=y[st];return ht===void 0&&(ht=new fl,y[st]=ht),ht.getGripSpace()},this.getHand=function(st){let ht=y[st];return ht===void 0&&(ht=new fl,y[st]=ht),ht.getHandSpace()};function z(st){const ht=v.indexOf(st.inputSource);if(ht===-1)return;const wt=y[ht];wt!==void 0&&(wt.update(st.inputSource,st.frame,c||o),wt.dispatchEvent({type:st.type,data:st.inputSource}))}function K(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",it);for(let st=0;st<y.length;st++){const ht=v[st];ht!==null&&(v[st]=null,y[st].disconnect(ht))}P=null,N=null,_.reset(),t.setRenderTarget(f),p=null,d=null,h=null,s=null,M=null,se.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(st){c=st},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",K),s.addEventListener("inputsourceschange",it),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const ht={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ls(p.framebufferWidth,p.framebufferHeight,{format:Pn,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ht=null,wt=null,_t=null;m.depth&&(_t=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=m.stencil?Ks:Ws,wt=m.stencil?qs:as);const Ot={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Ot),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new ls(d.textureWidth,d.textureHeight,{format:Pn,type:ui,depthTexture:new mp(d.textureWidth,d.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),se.setContext(s),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function it(st){for(let ht=0;ht<st.removed.length;ht++){const wt=st.removed[ht],_t=v.indexOf(wt);_t>=0&&(v[_t]=null,y[_t].disconnect(wt))}for(let ht=0;ht<st.added.length;ht++){const wt=st.added[ht];let _t=v.indexOf(wt);if(_t===-1){for(let Ht=0;Ht<y.length;Ht++)if(Ht>=v.length){v.push(wt),_t=Ht;break}else if(v[Ht]===null){v[Ht]=wt,_t=Ht;break}if(_t===-1)break}const Ot=y[_t];Ot&&Ot.connect(wt)}}const q=new F,et=new F;function G(st,ht,wt){q.setFromMatrixPosition(ht.matrixWorld),et.setFromMatrixPosition(wt.matrixWorld);const _t=q.distanceTo(et),Ot=ht.projectionMatrix.elements,Ht=wt.projectionMatrix.elements,Wt=Ot[14]/(Ot[10]-1),Me=Ot[14]/(Ot[10]+1),R=(Ot[9]+1)/Ot[5],U=(Ot[9]-1)/Ot[5],w=(Ot[8]-1)/Ot[0],ot=(Ht[8]+1)/Ht[0],j=Wt*w,J=Wt*ot,tt=_t/(-w+ot),at=tt*-w;if(ht.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(at),st.translateZ(tt),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Ot[10]===-1)st.projectionMatrix.copy(ht.projectionMatrix),st.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Z=Wt+tt,b=Me+tt,x=j-at,D=J+(_t-at),V=R*Me/b*Z,X=U*Me/b*Z;st.projectionMatrix.makePerspective(x,D,V,X,Z,b),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function pt(st,ht){ht===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(ht.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let ht=st.near,wt=st.far;_.texture!==null&&(_.depthNear>0&&(ht=_.depthNear),_.depthFar>0&&(wt=_.depthFar)),S.near=L.near=A.near=ht,S.far=L.far=A.far=wt,(P!==S.near||N!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,N=S.far),A.layers.mask=st.layers.mask|2,L.layers.mask=st.layers.mask|4,S.layers.mask=A.layers.mask|L.layers.mask;const _t=st.parent,Ot=S.cameras;pt(S,_t);for(let Ht=0;Ht<Ot.length;Ht++)pt(Ot[Ht],_t);Ot.length===2?G(S,A,L):S.projectionMatrix.copy(A.projectionMatrix),bt(st,S,_t)};function bt(st,ht,wt){wt===null?st.matrix.copy(ht.matrixWorld):(st.matrix.copy(wt.matrixWorld),st.matrix.invert(),st.matrix.multiply(ht.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(ht.projectionMatrix),st.projectionMatrixInverse.copy(ht.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Or*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(st){l=st,d!==null&&(d.fixedFoveation=st),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=st)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let At=null;function Bt(st,ht){if(u=ht.getViewerPose(c||o),g=ht,u!==null){const wt=u.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let _t=!1;wt.length!==S.cameras.length&&(S.cameras.length=0,_t=!0);for(let Ht=0;Ht<wt.length;Ht++){const Wt=wt[Ht];let Me=null;if(p!==null)Me=p.getViewport(Wt);else{const U=h.getViewSubImage(d,Wt);Me=U.viewport,Ht===0&&(t.setRenderTargetTextures(M,U.colorTexture,d.ignoreDepthValues?void 0:U.depthStencilTexture),t.setRenderTarget(M))}let R=E[Ht];R===void 0&&(R=new xn,R.layers.enable(Ht),R.viewport=new Ee,E[Ht]=R),R.matrix.fromArray(Wt.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Wt.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(Me.x,Me.y,Me.width,Me.height),Ht===0&&(S.matrix.copy(R.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),_t===!0&&S.cameras.push(R)}const Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const Ht=h.getDepthInformation(wt[0]);Ht&&Ht.isValid&&Ht.texture&&_.init(t,Ht,s.renderState)}}for(let wt=0;wt<y.length;wt++){const _t=v[wt],Ot=y[wt];_t!==null&&Ot!==void 0&&Ot.update(_t,ht,c||o)}At&&At(st,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),g=null}const se=new dp;se.setAnimationLoop(Bt),this.setAnimationLoop=function(st){At=st},this.dispose=function(){}}}const ji=new Xn,IS=new fe;function US(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,cp(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Qe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Qe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=t.get(f),y=M.envMap,v=M.envMapRotation;y&&(m.envMap.value=y,ji.copy(v),ji.x*=-1,ji.y*=-1,ji.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),m.envMapRotation.value.setFromMatrix4(IS.makeRotationFromEuler(ji)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Qe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function NS(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const v=y.program;i.uniformBlockBinding(M,v)}function c(M,y){let v=s[M.id];v===void 0&&(g(M),v=u(M),s[M.id]=v,M.addEventListener("dispose",m));const I=y.program;i.updateUBOMapping(M,I);const C=t.render.frame;r[M.id]!==C&&(d(M),r[M.id]=C)}function u(M){const y=h();M.__bindingPointIndex=y;const v=n.createBuffer(),I=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const y=s[M.id],v=M.uniforms,I=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,A=v.length;C<A;C++){const L=Array.isArray(v[C])?v[C]:[v[C]];for(let E=0,S=L.length;E<S;E++){const P=L[E];if(p(P,C,E,I)===!0){const N=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let it=0;it<z.length;it++){const q=z[it],et=_(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,N+K,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,K),K+=et.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,y,v,I){const C=M.value,A=y+"_"+v;if(I[A]===void 0)return typeof C=="number"||typeof C=="boolean"?I[A]=C:I[A]=C.clone(),!0;{const L=I[A];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return I[A]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function g(M){const y=M.uniforms;let v=0;const I=16;for(let A=0,L=y.length;A<L;A++){const E=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,P=E.length;S<P;S++){const N=E[S],z=Array.isArray(N.value)?N.value:[N.value];for(let K=0,it=z.length;K<it;K++){const q=z[K],et=_(q),G=v%I,pt=G%et.boundary,bt=G+pt;v+=pt,bt!==0&&I-bt<et.storage&&(v+=I-bt),N.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=et.storage}}}const C=v%I;return C>0&&(v+=I-C),M.__size=v,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class FS{constructor(t={}){const{canvas:e=T0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const M=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this.toneMapping=Ci,this.toneMappingExposure=1;const v=this;let I=!1,C=0,A=0,L=null,E=-1,S=null;const P=new Ee,N=new Ee;let z=null;const K=new Yt(0);let it=0,q=e.width,et=e.height,G=1,pt=null,bt=null;const At=new Ee(0,0,q,et),Bt=new Ee(0,0,q,et);let se=!1;const st=new Qc;let ht=!1,wt=!1;const _t=new fe,Ot=new fe,Ht=new F,Wt=new Ee,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let R=!1;function U(){return L===null?G:1}let w=i;function ot(T,B){return e.getContext(T,B)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gc}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",yt,!1),w===null){const B="webgl2";if(w=ot(B,T),w===null)throw ot(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let j,J,tt,at,Z,b,x,D,V,X,W,dt,lt,mt,kt,ct,xt,Ut,zt,gt,Vt,Xt,me,O;function Mt(){j=new HM(w),j.init(),Xt=new wS(w,j),J=new NM(w,j,t,Xt),tt=new bS(w,j),J.reverseDepthBuffer&&d&&tt.buffers.depth.setReversed(!0),at=new WM(w),Z=new lS,b=new TS(w,j,tt,Z,J,Xt,at),x=new OM(v),D=new zM(v),V=new Z0(w),me=new IM(w,V),X=new VM(w,V,at,me),W=new $M(w,X,V,at),zt=new XM(w,J,b),ct=new FM(Z),dt=new aS(v,x,D,j,J,me,ct),lt=new US(v,Z),mt=new uS,kt=new gS(j),Ut=new LM(v,x,D,tt,W,p,l),xt=new yS(v,W,J),O=new NS(w,at,J,tt),gt=new UM(w,j,at),Vt=new GM(w,j,at),at.programs=dt.programs,v.capabilities=J,v.extensions=j,v.properties=Z,v.renderLists=mt,v.shadowMap=xt,v.state=tt,v.info=at}Mt();const Q=new LS(v,w);this.xr=Q,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const T=j.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=j.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(q,et,!1))},this.getSize=function(T){return T.set(q,et)},this.setSize=function(T,B,$=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,et=B,e.width=Math.floor(T*G),e.height=Math.floor(B*G),$===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(q*G,et*G).floor()},this.setDrawingBufferSize=function(T,B,$){q=T,et=B,G=$,e.width=Math.floor(T*$),e.height=Math.floor(B*$),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(At)},this.setViewport=function(T,B,$,Y){T.isVector4?At.set(T.x,T.y,T.z,T.w):At.set(T,B,$,Y),tt.viewport(P.copy(At).multiplyScalar(G).round())},this.getScissor=function(T){return T.copy(Bt)},this.setScissor=function(T,B,$,Y){T.isVector4?Bt.set(T.x,T.y,T.z,T.w):Bt.set(T,B,$,Y),tt.scissor(N.copy(Bt).multiplyScalar(G).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(T){tt.setScissorTest(se=T)},this.setOpaqueSort=function(T){pt=T},this.setTransparentSort=function(T){bt=T},this.getClearColor=function(T){return T.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(T=!0,B=!0,$=!0){let Y=0;if(T){let k=!1;if(L!==null){const ft=L.texture.format;k=ft===Kc||ft===qc||ft===jc}if(k){const ft=L.texture.type,St=ft===ui||ft===as||ft===Fr||ft===qs||ft===Xc||ft===$c,Pt=Ut.getClearColor(),Dt=Ut.getClearAlpha(),Gt=Pt.r,qt=Pt.g,Lt=Pt.b;St?(g[0]=Gt,g[1]=qt,g[2]=Lt,g[3]=Dt,w.clearBufferuiv(w.COLOR,0,g)):(_[0]=Gt,_[1]=qt,_[2]=Lt,_[3]=Dt,w.clearBufferiv(w.COLOR,0,_))}else Y|=w.COLOR_BUFFER_BIT}B&&(Y|=w.DEPTH_BUFFER_BIT),$&&(Y|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),mt.dispose(),kt.dispose(),Z.dispose(),x.dispose(),D.dispose(),W.dispose(),me.dispose(),O.dispose(),dt.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",hu),Q.removeEventListener("sessionend",fu),Oi.stop()};function rt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const T=at.autoReset,B=xt.enabled,$=xt.autoUpdate,Y=xt.needsUpdate,k=xt.type;Mt(),at.autoReset=T,xt.enabled=B,xt.autoUpdate=$,xt.needsUpdate=Y,xt.type=k}function yt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function jt(T){const B=T.target;B.removeEventListener("dispose",jt),Se(B)}function Se(T){ke(T),Z.remove(T)}function ke(T){const B=Z.get(T).programs;B!==void 0&&(B.forEach(function($){dt.releaseProgram($)}),T.isShaderMaterial&&dt.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,$,Y,k,ft){B===null&&(B=Me);const St=k.isMesh&&k.matrixWorld.determinant()<0,Pt=Rp(T,B,$,Y,k);tt.setMaterial(Y,St);let Dt=$.index,Gt=1;if(Y.wireframe===!0){if(Dt=X.getWireframeAttribute($),Dt===void 0)return;Gt=2}const qt=$.drawRange,Lt=$.attributes.position;let ee=qt.start*Gt,ge=(qt.start+qt.count)*Gt;ft!==null&&(ee=Math.max(ee,ft.start*Gt),ge=Math.min(ge,(ft.start+ft.count)*Gt)),Dt!==null?(ee=Math.max(ee,0),ge=Math.min(ge,Dt.count)):Lt!=null&&(ee=Math.max(ee,0),ge=Math.min(ge,Lt.count));const ve=ge-ee;if(ve<0||ve===1/0)return;me.setup(k,Y,Pt,$,Dt);let tn,re=gt;if(Dt!==null&&(tn=V.get(Dt),re=Vt,re.setIndex(tn)),k.isMesh)Y.wireframe===!0?(tt.setLineWidth(Y.wireframeLinewidth*U()),re.setMode(w.LINES)):re.setMode(w.TRIANGLES);else if(k.isLine){let It=Y.linewidth;It===void 0&&(It=1),tt.setLineWidth(It*U()),k.isLineSegments?re.setMode(w.LINES):k.isLineLoop?re.setMode(w.LINE_LOOP):re.setMode(w.LINE_STRIP)}else k.isPoints?re.setMode(w.POINTS):k.isSprite&&re.setMode(w.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)re.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))re.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const It=k._multiDrawStarts,Yn=k._multiDrawCounts,oe=k._multiDrawCount,Tn=Dt?V.get(Dt).bytesPerElement:1,ds=Z.get(Y).currentProgram.getUniforms();for(let rn=0;rn<oe;rn++)ds.setValue(w,"_gl_DrawID",rn),re.render(It[rn]/Tn,Yn[rn])}else if(k.isInstancedMesh)re.renderInstances(ee,ve,k.count);else if($.isInstancedBufferGeometry){const It=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Yn=Math.min($.instanceCount,It);re.renderInstances(ee,ve,Yn)}else re.render(ee,ve)};function le(T,B,$){T.transparent===!0&&T.side===hn&&T.forceSinglePass===!1?(T.side=Qe,T.needsUpdate=!0,qr(T,B,$),T.side=Li,T.needsUpdate=!0,qr(T,B,$),T.side=hn):qr(T,B,$)}this.compile=function(T,B,$=null){$===null&&($=T),f=kt.get($),f.init(B),y.push(f),$.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),T!==$&&T.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();const Y=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ft=k.material;if(ft)if(Array.isArray(ft))for(let St=0;St<ft.length;St++){const Pt=ft[St];le(Pt,$,k),Y.add(Pt)}else le(ft,$,k),Y.add(ft)}),y.pop(),f=null,Y},this.compileAsync=function(T,B,$=null){const Y=this.compile(T,B,$);return new Promise(k=>{function ft(){if(Y.forEach(function(St){Z.get(St).currentProgram.isReady()&&Y.delete(St)}),Y.size===0){k(T);return}setTimeout(ft,10)}j.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let En=null;function $n(T){En&&En(T)}function hu(){Oi.stop()}function fu(){Oi.start()}const Oi=new dp;Oi.setAnimationLoop($n),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(T){En=T,Q.setAnimationLoop(T),T===null?Oi.stop():Oi.start()},Q.addEventListener("sessionstart",hu),Q.addEventListener("sessionend",fu),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(B),B=Q.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,B,L),f=kt.get(T,y.length),f.init(B),y.push(f),Ot.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),st.setFromProjectionMatrix(Ot),wt=this.localClippingEnabled,ht=ct.init(this.clippingPlanes,wt),m=mt.get(T,M.length),m.init(),M.push(m),Q.enabled===!0&&Q.isPresenting===!0){const ft=v.xr.getDepthSensingMesh();ft!==null&&wa(ft,B,-1/0,v.sortObjects)}wa(T,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(pt,bt),R=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,R&&Ut.addToRenderList(m,T),this.info.render.frame++,ht===!0&&ct.beginShadows();const $=f.state.shadowsArray;xt.render($,T,B),ht===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,k=m.transmissive;if(f.setupLights(),B.isArrayCamera){const ft=B.cameras;if(k.length>0)for(let St=0,Pt=ft.length;St<Pt;St++){const Dt=ft[St];pu(Y,k,T,Dt)}R&&Ut.render(T);for(let St=0,Pt=ft.length;St<Pt;St++){const Dt=ft[St];du(m,T,Dt,Dt.viewport)}}else k.length>0&&pu(Y,k,T,B),R&&Ut.render(T),du(m,T,B);L!==null&&(b.updateMultisampleRenderTarget(L),b.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(v,T,B),me.resetDefaultState(),E=-1,S=null,y.pop(),y.length>0?(f=y[y.length-1],ht===!0&&ct.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function wa(T,B,$,Y){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||st.intersectsSprite(T)){Y&&Wt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ot);const St=W.update(T),Pt=T.material;Pt.visible&&m.push(T,St,Pt,$,Wt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||st.intersectsObject(T))){const St=W.update(T),Pt=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Wt.copy(T.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Wt.copy(St.boundingSphere.center)),Wt.applyMatrix4(T.matrixWorld).applyMatrix4(Ot)),Array.isArray(Pt)){const Dt=St.groups;for(let Gt=0,qt=Dt.length;Gt<qt;Gt++){const Lt=Dt[Gt],ee=Pt[Lt.materialIndex];ee&&ee.visible&&m.push(T,St,ee,$,Wt.z,Lt)}}else Pt.visible&&m.push(T,St,Pt,$,Wt.z,null)}}const ft=T.children;for(let St=0,Pt=ft.length;St<Pt;St++)wa(ft[St],B,$,Y)}function du(T,B,$,Y){const k=T.opaque,ft=T.transmissive,St=T.transparent;f.setupLightsView($),ht===!0&&ct.setGlobalState(v.clippingPlanes,$),Y&&tt.viewport(P.copy(Y)),k.length>0&&jr(k,B,$),ft.length>0&&jr(ft,B,$),St.length>0&&jr(St,B,$),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function pu(T,B,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new ls(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?Xr:ui,minFilter:ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const ft=f.state.transmissionRenderTarget[Y.id],St=Y.viewport||P;ft.setSize(St.z,St.w);const Pt=v.getRenderTarget();v.setRenderTarget(ft),v.getClearColor(K),it=v.getClearAlpha(),it<1&&v.setClearColor(16777215,.5),v.clear(),R&&Ut.render($);const Dt=v.toneMapping;v.toneMapping=Ci;const Gt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),ht===!0&&ct.setGlobalState(v.clippingPlanes,Y),jr(T,$,Y),b.updateMultisampleRenderTarget(ft),b.updateRenderTargetMipmap(ft),j.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Lt=0,ee=B.length;Lt<ee;Lt++){const ge=B[Lt],ve=ge.object,tn=ge.geometry,re=ge.material,It=ge.group;if(re.side===hn&&ve.layers.test(Y.layers)){const Yn=re.side;re.side=Qe,re.needsUpdate=!0,mu(ve,$,Y,tn,re,It),re.side=Yn,re.needsUpdate=!0,qt=!0}}qt===!0&&(b.updateMultisampleRenderTarget(ft),b.updateRenderTargetMipmap(ft))}v.setRenderTarget(Pt),v.setClearColor(K,it),Gt!==void 0&&(Y.viewport=Gt),v.toneMapping=Dt}function jr(T,B,$){const Y=B.isScene===!0?B.overrideMaterial:null;for(let k=0,ft=T.length;k<ft;k++){const St=T[k],Pt=St.object,Dt=St.geometry,Gt=Y===null?St.material:Y,qt=St.group;Pt.layers.test($.layers)&&mu(Pt,B,$,Dt,Gt,qt)}}function mu(T,B,$,Y,k,ft){T.onBeforeRender(v,B,$,Y,k,ft),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(v,B,$,Y,T,ft),k.transparent===!0&&k.side===hn&&k.forceSinglePass===!1?(k.side=Qe,k.needsUpdate=!0,v.renderBufferDirect($,B,Y,k,T,ft),k.side=Li,k.needsUpdate=!0,v.renderBufferDirect($,B,Y,k,T,ft),k.side=hn):v.renderBufferDirect($,B,Y,k,T,ft),T.onAfterRender(v,B,$,Y,k,ft)}function qr(T,B,$){B.isScene!==!0&&(B=Me);const Y=Z.get(T),k=f.state.lights,ft=f.state.shadowsArray,St=k.state.version,Pt=dt.getParameters(T,k.state,ft,B,$),Dt=dt.getProgramCacheKey(Pt);let Gt=Y.programs;Y.environment=T.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(T.isMeshStandardMaterial?D:x).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Gt===void 0&&(T.addEventListener("dispose",jt),Gt=new Map,Y.programs=Gt);let qt=Gt.get(Dt);if(qt!==void 0){if(Y.currentProgram===qt&&Y.lightsStateVersion===St)return _u(T,Pt),qt}else Pt.uniforms=dt.getUniforms(T),T.onBeforeCompile(Pt,v),qt=dt.acquireProgram(Pt,Dt),Gt.set(Dt,qt),Y.uniforms=Pt.uniforms;const Lt=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Lt.clippingPlanes=ct.uniform),_u(T,Pt),Y.needsLights=Pp(T),Y.lightsStateVersion=St,Y.needsLights&&(Lt.ambientLightColor.value=k.state.ambient,Lt.lightProbe.value=k.state.probe,Lt.directionalLights.value=k.state.directional,Lt.directionalLightShadows.value=k.state.directionalShadow,Lt.spotLights.value=k.state.spot,Lt.spotLightShadows.value=k.state.spotShadow,Lt.rectAreaLights.value=k.state.rectArea,Lt.ltc_1.value=k.state.rectAreaLTC1,Lt.ltc_2.value=k.state.rectAreaLTC2,Lt.pointLights.value=k.state.point,Lt.pointLightShadows.value=k.state.pointShadow,Lt.hemisphereLights.value=k.state.hemi,Lt.directionalShadowMap.value=k.state.directionalShadowMap,Lt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Lt.spotShadowMap.value=k.state.spotShadowMap,Lt.spotLightMatrix.value=k.state.spotLightMatrix,Lt.spotLightMap.value=k.state.spotLightMap,Lt.pointShadowMap.value=k.state.pointShadowMap,Lt.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=qt,Y.uniformsList=null,qt}function gu(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Vo.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function _u(T,B){const $=Z.get(T);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function Rp(T,B,$,Y,k){B.isScene!==!0&&(B=Me),b.resetTextureUnits();const ft=B.fog,St=Y.isMeshStandardMaterial?B.environment:null,Pt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Qs,Dt=(Y.isMeshStandardMaterial?D:x).get(Y.envMap||St),Gt=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,qt=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Lt=!!$.morphAttributes.position,ee=!!$.morphAttributes.normal,ge=!!$.morphAttributes.color;let ve=Ci;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ve=v.toneMapping);const tn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,re=tn!==void 0?tn.length:0,It=Z.get(Y),Yn=f.state.lights;if(ht===!0&&(wt===!0||T!==S)){const gn=T===S&&Y.id===E;ct.setState(Y,T,gn)}let oe=!1;Y.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Yn.state.version||It.outputColorSpace!==Pt||k.isBatchedMesh&&It.batching===!1||!k.isBatchedMesh&&It.batching===!0||k.isBatchedMesh&&It.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&It.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&It.instancing===!1||!k.isInstancedMesh&&It.instancing===!0||k.isSkinnedMesh&&It.skinning===!1||!k.isSkinnedMesh&&It.skinning===!0||k.isInstancedMesh&&It.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&It.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&It.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&It.instancingMorph===!1&&k.morphTexture!==null||It.envMap!==Dt||Y.fog===!0&&It.fog!==ft||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==ct.numPlanes||It.numIntersection!==ct.numIntersection)||It.vertexAlphas!==Gt||It.vertexTangents!==qt||It.morphTargets!==Lt||It.morphNormals!==ee||It.morphColors!==ge||It.toneMapping!==ve||It.morphTargetsCount!==re)&&(oe=!0):(oe=!0,It.__version=Y.version);let Tn=It.currentProgram;oe===!0&&(Tn=qr(Y,B,k));let ds=!1,rn=!1,rr=!1;const xe=Tn.getUniforms(),Un=It.uniforms;if(tt.useProgram(Tn.program)&&(ds=!0,rn=!0,rr=!0),Y.id!==E&&(E=Y.id,rn=!0),ds||S!==T){tt.buffers.depth.getReversed()?(_t.copy(T.projectionMatrix),A0(_t),R0(_t),xe.setValue(w,"projectionMatrix",_t)):xe.setValue(w,"projectionMatrix",T.projectionMatrix),xe.setValue(w,"viewMatrix",T.matrixWorldInverse);const di=xe.map.cameraPosition;di!==void 0&&di.setValue(w,Ht.setFromMatrixPosition(T.matrixWorld)),J.logarithmicDepthBuffer&&xe.setValue(w,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&xe.setValue(w,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,rn=!0,rr=!0)}if(k.isSkinnedMesh){xe.setOptional(w,k,"bindMatrix"),xe.setOptional(w,k,"bindMatrixInverse");const gn=k.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),xe.setValue(w,"boneTexture",gn.boneTexture,b))}k.isBatchedMesh&&(xe.setOptional(w,k,"batchingTexture"),xe.setValue(w,"batchingTexture",k._matricesTexture,b),xe.setOptional(w,k,"batchingIdTexture"),xe.setValue(w,"batchingIdTexture",k._indirectTexture,b),xe.setOptional(w,k,"batchingColorTexture"),k._colorsTexture!==null&&xe.setValue(w,"batchingColorTexture",k._colorsTexture,b));const or=$.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0)&&zt.update(k,$,Tn),(rn||It.receiveShadow!==k.receiveShadow)&&(It.receiveShadow=k.receiveShadow,xe.setValue(w,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Un.envMap.value=Dt,Un.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(Un.envMapIntensity.value=B.environmentIntensity),rn&&(xe.setValue(w,"toneMappingExposure",v.toneMappingExposure),It.needsLights&&Cp(Un,rr),ft&&Y.fog===!0&&lt.refreshFogUniforms(Un,ft),lt.refreshMaterialUniforms(Un,Y,G,et,f.state.transmissionRenderTarget[T.id]),Vo.upload(w,gu(It),Un,b)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Vo.upload(w,gu(It),Un,b),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&xe.setValue(w,"center",k.center),xe.setValue(w,"modelViewMatrix",k.modelViewMatrix),xe.setValue(w,"normalMatrix",k.normalMatrix),xe.setValue(w,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const gn=Y.uniformsGroups;for(let di=0,pi=gn.length;di<pi;di++){const vu=gn[di];O.update(vu,Tn),O.bind(vu,Tn)}}return Tn}function Cp(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Pp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,B,$){Z.get(T.texture).__webglTexture=B,Z.get(T.depthTexture).__webglTexture=$;const Y=Z.get(T);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=$===void 0,Y.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const $=Z.get(T);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,$=0){L=T,C=B,A=$;let Y=!0,k=null,ft=!1,St=!1;if(T){const Dt=Z.get(T);if(Dt.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(w.FRAMEBUFFER,null),Y=!1;else if(Dt.__webglFramebuffer===void 0)b.setupRenderTarget(T);else if(Dt.__hasExternalTextures)b.rebindTextures(T,Z.get(T.texture).__webglTexture,Z.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Lt=T.depthTexture;if(Dt.__boundDepthTexture!==Lt){if(Lt!==null&&Z.has(Lt)&&(T.width!==Lt.image.width||T.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(T)}}const Gt=T.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(St=!0);const qt=Z.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(qt[B])?k=qt[B][$]:k=qt[B],ft=!0):T.samples>0&&b.useMultisampledRTT(T)===!1?k=Z.get(T).__webglMultisampledFramebuffer:Array.isArray(qt)?k=qt[$]:k=qt,P.copy(T.viewport),N.copy(T.scissor),z=T.scissorTest}else P.copy(At).multiplyScalar(G).floor(),N.copy(Bt).multiplyScalar(G).floor(),z=se;if(tt.bindFramebuffer(w.FRAMEBUFFER,k)&&Y&&tt.drawBuffers(T,k),tt.viewport(P),tt.scissor(N),tt.setScissorTest(z),ft){const Dt=Z.get(T.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+B,Dt.__webglTexture,$)}else if(St){const Dt=Z.get(T.texture),Gt=B||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Dt.__webglTexture,$||0,Gt)}E=-1},this.readRenderTargetPixels=function(T,B,$,Y,k,ft,St){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(Pt=Pt[St]),Pt){tt.bindFramebuffer(w.FRAMEBUFFER,Pt);try{const Dt=T.texture,Gt=Dt.format,qt=Dt.type;if(!J.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Y&&$>=0&&$<=T.height-k&&w.readPixels(B,$,Y,k,Xt.convert(Gt),Xt.convert(qt),ft)}finally{const Dt=L!==null?Z.get(L).__webglFramebuffer:null;tt.bindFramebuffer(w.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(T,B,$,Y,k,ft,St){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(Pt=Pt[St]),Pt){const Dt=T.texture,Gt=Dt.format,qt=Dt.type;if(!J.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-Y&&$>=0&&$<=T.height-k){tt.bindFramebuffer(w.FRAMEBUFFER,Pt);const Lt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Lt),w.bufferData(w.PIXEL_PACK_BUFFER,ft.byteLength,w.STREAM_READ),w.readPixels(B,$,Y,k,Xt.convert(Gt),Xt.convert(qt),0);const ee=L!==null?Z.get(L).__webglFramebuffer:null;tt.bindFramebuffer(w.FRAMEBUFFER,ee);const ge=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await w0(w,ge,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Lt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ft),w.deleteBuffer(Lt),w.deleteSync(ge),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,$=0){T.isTexture!==!0&&(vr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const Y=Math.pow(2,-$),k=Math.floor(T.image.width*Y),ft=Math.floor(T.image.height*Y),St=B!==null?B.x:0,Pt=B!==null?B.y:0;b.setTexture2D(T,0),w.copyTexSubImage2D(w.TEXTURE_2D,$,0,0,St,Pt,k,ft),tt.unbindTexture()},this.copyTextureToTexture=function(T,B,$=null,Y=null,k=0){T.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,T=arguments[1],B=arguments[2],k=arguments[3]||0,$=null);let ft,St,Pt,Dt,Gt,qt,Lt,ee,ge;const ve=T.isCompressedTexture?T.mipmaps[k]:T.image;$!==null?(ft=$.max.x-$.min.x,St=$.max.y-$.min.y,Pt=$.isBox3?$.max.z-$.min.z:1,Dt=$.min.x,Gt=$.min.y,qt=$.isBox3?$.min.z:0):(ft=ve.width,St=ve.height,Pt=ve.depth||1,Dt=0,Gt=0,qt=0),Y!==null?(Lt=Y.x,ee=Y.y,ge=Y.z):(Lt=0,ee=0,ge=0);const tn=Xt.convert(B.format),re=Xt.convert(B.type);let It;B.isData3DTexture?(b.setTexture3D(B,0),It=w.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(b.setTexture2DArray(B,0),It=w.TEXTURE_2D_ARRAY):(b.setTexture2D(B,0),It=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,B.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,B.unpackAlignment);const Yn=w.getParameter(w.UNPACK_ROW_LENGTH),oe=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Tn=w.getParameter(w.UNPACK_SKIP_PIXELS),ds=w.getParameter(w.UNPACK_SKIP_ROWS),rn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ve.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ve.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Dt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Gt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,qt);const rr=T.isDataArrayTexture||T.isData3DTexture,xe=B.isDataArrayTexture||B.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Un=Z.get(T),or=Z.get(B),gn=Z.get(Un.__renderTarget),di=Z.get(or.__renderTarget);tt.bindFramebuffer(w.READ_FRAMEBUFFER,gn.__webglFramebuffer),tt.bindFramebuffer(w.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let pi=0;pi<Pt;pi++)rr&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Z.get(T).__webglTexture,k,qt+pi),T.isDepthTexture?(xe&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Z.get(B).__webglTexture,k,ge+pi),w.blitFramebuffer(Dt,Gt,ft,St,Lt,ee,ft,St,w.DEPTH_BUFFER_BIT,w.NEAREST)):xe?w.copyTexSubImage3D(It,k,Lt,ee,ge+pi,Dt,Gt,ft,St):w.copyTexSubImage2D(It,k,Lt,ee,ge+pi,Dt,Gt,ft,St);tt.bindFramebuffer(w.READ_FRAMEBUFFER,null),tt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else xe?T.isDataTexture||T.isData3DTexture?w.texSubImage3D(It,k,Lt,ee,ge,ft,St,Pt,tn,re,ve.data):B.isCompressedArrayTexture?w.compressedTexSubImage3D(It,k,Lt,ee,ge,ft,St,Pt,tn,ve.data):w.texSubImage3D(It,k,Lt,ee,ge,ft,St,Pt,tn,re,ve):T.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,k,Lt,ee,ft,St,tn,re,ve.data):T.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,k,Lt,ee,ve.width,ve.height,tn,ve.data):w.texSubImage2D(w.TEXTURE_2D,k,Lt,ee,ft,St,tn,re,ve);w.pixelStorei(w.UNPACK_ROW_LENGTH,Yn),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,oe),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Tn),w.pixelStorei(w.UNPACK_SKIP_ROWS,ds),w.pixelStorei(w.UNPACK_SKIP_IMAGES,rn),k===0&&B.generateMipmaps&&w.generateMipmap(It),tt.unbindTexture()},this.copyTextureToTexture3D=function(T,B,$=null,Y=null,k=0){return T.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Y=arguments[1]||null,T=arguments[2],B=arguments[3],k=arguments[4]||0),vr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,B,$,Y,k)},this.initRenderTarget=function(T){Z.get(T).__webglFramebuffer===void 0&&b.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),tt.unbindTexture()},this.resetState=function(){C=0,A=0,L=null,tt.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class eu{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=i}clone(){return new eu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nf extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class OS extends Ye{constructor(t=null,e=1,i=1,s,r,o,a,l,c=mn,u=mn,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sf extends Ln{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Cs=new fe,rf=new fe,Eo=[],of=new fs,BS=new fe,pr=new Jt,mr=new er;class af extends Jt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new sf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,BS)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new fs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Cs),of.copy(t.boundingBox).applyMatrix4(Cs),this.boundingBox.union(of)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new er),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Cs),mr.copy(t.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(mr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mr.copy(this.boundingSphere),mr.applyMatrix4(i),t.ray.intersectsSphere(mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),rf.multiplyMatrices(i,Cs),pr.matrixWorld=rf,pr.raycast(t,Eo);for(let o=0,a=Eo.length;o<a;o++){const l=Eo[o];l.instanceId=r,l.object=this,e.push(l)}Eo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new sf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new OS(new Float32Array(s*this.count),s,this.count,Yc,Hn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class nu extends nr{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const na=new F,ia=new F,lf=new fe,gr=new ya,To=new er,dl=new F,cf=new F;class Mp extends Ne{constructor(t=new Oe,e=new nu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)na.fromBufferAttribute(e,s-1),ia.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=na.distanceTo(ia);t.setAttribute("lineDistance",new ce(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(s),To.radius+=r,t.ray.intersectsSphere(To)===!1)return;lf.copy(s).invert(),gr.copy(t.ray).applyMatrix4(lf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=u.getX(_),M=u.getX(_+1),y=wo(this,t,gr,l,f,M);y&&e.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),f=wo(this,t,gr,l,_,m);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=wo(this,t,gr,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=wo(this,t,gr,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function wo(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(na.fromBufferAttribute(o,s),ia.fromBufferAttribute(o,r),e.distanceSqToSegment(na,ia,dl,cf)>i)return;dl.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(dl);if(!(l<t.near||l>t.far))return{distance:l,point:cf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const uf=new F,hf=new F;class kS extends Mp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)uf.fromBufferAttribute(e,s),hf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+uf.distanceTo(hf);t.setAttribute("lineDistance",new ce(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yp extends Ye{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class iu extends Oe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new F,u=new Nt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const p=i+h/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(a,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new iu(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class su extends Oe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let g=0;const _=[],m=i/2;let f=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ce(h,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(p,2));function M(){const v=new F,I=new F;let C=0;const A=(e-t)/i;for(let L=0;L<=r;L++){const E=[],S=L/r,P=S*(e-t)+t;for(let N=0;N<=s;N++){const z=N/s,K=z*l+a,it=Math.sin(K),q=Math.cos(K);I.x=P*it,I.y=-S*i+m,I.z=P*q,h.push(I.x,I.y,I.z),v.set(it,A,q).normalize(),d.push(v.x,v.y,v.z),p.push(z,1-S),E.push(g++)}_.push(E)}for(let L=0;L<s;L++)for(let E=0;E<r;E++){const S=_[E][L],P=_[E+1][L],N=_[E+1][L+1],z=_[E][L+1];(t>0||E!==0)&&(u.push(S,P,z),C+=3),(e>0||E!==r-1)&&(u.push(P,N,z),C+=3)}c.addGroup(f,C,0),f+=C}function y(v){const I=g,C=new Nt,A=new F;let L=0;const E=v===!0?t:e,S=v===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;const P=g;for(let N=0;N<=s;N++){const K=N/s*l+a,it=Math.cos(K),q=Math.sin(K);A.x=E*q,A.y=m*S,A.z=E*it,h.push(A.x,A.y,A.z),d.push(0,S,0),C.x=it*.5+.5,C.y=q*.5*S+.5,p.push(C.x,C.y),g++}for(let N=0;N<s;N++){const z=I+N,K=P+N;v===!0?u.push(K,K+1,z):u.push(K+1,K,z),L+=3}c.addGroup(f,L,v===!0?1:2),f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new su(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ru extends Oe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new F,v=new F,I=new F;for(let C=0;C<e.length;C+=3)p(e[C+0],y),p(e[C+1],v),p(e[C+2],I),l(y,v,I,M)}function l(M,y,v,I){const C=I+1,A=[];for(let L=0;L<=C;L++){A[L]=[];const E=M.clone().lerp(v,L/C),S=y.clone().lerp(v,L/C),P=C-L;for(let N=0;N<=P;N++)N===0&&L===C?A[L][N]=E:A[L][N]=E.clone().lerp(S,N/P)}for(let L=0;L<C;L++)for(let E=0;E<2*(C-L)-1;E++){const S=Math.floor(E/2);E%2===0?(d(A[L][S+1]),d(A[L+1][S]),d(A[L][S])):(d(A[L][S+1]),d(A[L+1][S+1]),d(A[L+1][S]))}}function c(M){const y=new F;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(M),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function u(){const M=new F;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const v=m(M)/2/Math.PI+.5,I=f(M)/Math.PI+.5;o.push(v,1-I)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const y=o[M+0],v=o[M+2],I=o[M+4],C=Math.max(y,v,I),A=Math.min(y,v,I);C>.9&&A<.1&&(y<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),I<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,y){const v=M*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const M=new F,y=new F,v=new F,I=new F,C=new Nt,A=new Nt,L=new Nt;for(let E=0,S=0;E<r.length;E+=9,S+=6){M.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),C.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),L.set(o[S+4],o[S+5]),I.copy(M).add(y).add(v).divideScalar(3);const P=m(I);_(C,S+0,M,P),_(A,S+2,y,P),_(L,S+4,v,P)}}function _(M,y,v,I){I<0&&M.x===1&&(o[y]=M.x-1),v.x===0&&v.z===0&&(o[y]=I/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ru(t.vertices,t.indices,t.radius,t.details)}}const zS={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Sp(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,p;if(i&&(r=XS(n,t,r,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(let g=e;g<s;g+=e)h=n[g],d=n[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Br(r,o,e,a,l,p,0),o}};function Sp(n,t,e,i,s){let r,o;if(s===nb(n,t,e,i)>0)for(r=t;r<e;r+=i)o=ff(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=ff(r,n[r],n[r+1],o);return o&&ba(o,o.next)&&(zr(o),o=o.next),o}function cs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ba(e,e.next)||ye(e.prev,e,e.next)===0)){if(zr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Br(n,t,e,i,s,r,o){if(!n)return;!o&&r&&KS(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?VS(n,i,s,r):HS(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),zr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=GS(cs(n),t,e),Br(n,t,e,i,s,r,2)):o===2&&WS(n,t,e,i,s,r):Br(cs(n),t,e,i,s,r,1);break}}}function HS(n){const t=n.prev,e=n,i=n.next;if(ye(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&Us(s,a,r,l,o,c,g.x,g.y)&&ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function VS(n,t,e,i){const s=n.prev,r=n,o=n.next;if(ye(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,_=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,f=bc(p,g,t,e,i),M=bc(_,m,t,e,i);let y=n.prevZ,v=n.nextZ;for(;y&&y.z>=f&&v&&v.z<=M;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Us(a,u,l,h,c,d,y.x,y.y)&&ye(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Us(a,u,l,h,c,d,v.x,v.y)&&ye(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Us(a,u,l,h,c,d,y.x,y.y)&&ye(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=M;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Us(a,u,l,h,c,d,v.x,v.y)&&ye(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function GS(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!ba(s,r)&&bp(s,i,i.next,r)&&kr(s,r)&&kr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),zr(i),zr(i.next),i=n=r),i=i.next}while(i!==n);return cs(i)}function WS(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&QS(o,a)){let l=Ep(o,a);o=cs(o,o.next),l=cs(l,l.next),Br(o,t,e,i,s,r,0),Br(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function XS(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Sp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(JS(c));for(s.sort($S),r=0;r<s.length;r++)e=YS(s[r],e);return e}function $S(n,t){return n.x-t.x}function YS(n,t){const e=jS(n,t);if(!e)return t;const i=Ep(e,n);return cs(i,i.next),cs(e,e.next)}function jS(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Us(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),kr(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&qS(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function qS(n,t){return ye(n.prev,n,t.prev)<0&&ye(t.next,n,n.next)<0}function KS(n,t,e,i){let s=n;do s.z===0&&(s.z=bc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ZS(s)}function ZS(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function bc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function JS(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Us(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function QS(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!tb(n,t)&&(kr(n,t)&&kr(t,n)&&eb(n,t)&&(ye(n.prev,n,t.prev)||ye(n,t.prev,t))||ba(n,t)&&ye(n.prev,n,n.next)>0&&ye(t.prev,t,t.next)>0)}function ye(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ba(n,t){return n.x===t.x&&n.y===t.y}function bp(n,t,e,i){const s=Ro(ye(n,t,e)),r=Ro(ye(n,t,i)),o=Ro(ye(e,i,n)),a=Ro(ye(e,i,t));return!!(s!==r&&o!==a||s===0&&Ao(n,e,t)||r===0&&Ao(n,i,t)||o===0&&Ao(e,n,i)||a===0&&Ao(e,t,i))}function Ao(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ro(n){return n>0?1:n<0?-1:0}function tb(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&bp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function kr(n,t){return ye(n.prev,n,n.next)<0?ye(n,t,n.next)>=0&&ye(n,n.prev,t)>=0:ye(n,t,n.prev)<0||ye(n,n.next,t)<0}function eb(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Ep(n,t){const e=new Ec(n.i,n.x,n.y),i=new Ec(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function ff(n,t,e,i){const s=new Ec(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function zr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ec(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function nb(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Ea{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Ea.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];df(t),pf(i,t);let o=t.length;e.forEach(df);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,pf(i,e[l]);const a=zS.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function df(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function pf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class ou extends ru{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ou(t.radius,t.detail)}}class au extends Oe{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=t;const d=(e-t)/s,p=new F,g=new Nt;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const f=r+m/i*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(i+1);for(let f=0;f<i;f++){const M=f+m,y=M,v=M+i+1,I=M+i+2,C=M+1;a.push(y,v,C),a.push(v,I,C)}}this.setIndex(a),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new au(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ae extends nr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ep,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pl extends Ae{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Tp extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ib extends Tp{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ml=new fe,mf=new F,gf=new F;class sb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qc,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;mf.setFromMatrixPosition(t.matrixWorld),e.position.copy(mf),gf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gf),e.updateMatrixWorld(),ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class rb extends sb{constructor(){super(new pp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ob extends Tp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new rb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ab{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_f(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=_f();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function _f(){return performance.now()}const vf=new fe;class Tc{constructor(t,e,i=0,s=1/0){this.ray=new ya(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Jc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vf),this}intersectObject(t,e=!0,i=[]){return wc(t,this,i,e),i.sort(xf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)wc(t[s],this,i,e);return i.sort(xf),i}}function xf(n,t){return n.distance-t.distance}function wc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)wc(r[o],t,e,!0)}}class Mf{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lb extends hs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);const yf={type:"change"},lu={type:"start"},wp={type:"end"},Co=new ya,Sf=new ri,cb=Math.cos(70*wi.DEG2RAD),Ce=new F,en=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gl=1e-6;class ub extends lb{constructor(t,e=null){super(t,e),this.state=he.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vs.ROTATE,MIDDLE:Vs.DOLLY,RIGHT:Vs.PAN},this.touches={ONE:Ls.ROTATE,TWO:Ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Ii,this._lastTargetPosition=new F,this._quat=new Ii().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mf,this._sphericalDelta=new Mf,this._scale=1,this._panOffset=new F,this._rotateStart=new Nt,this._rotateEnd=new Nt,this._rotateDelta=new Nt,this._panStart=new Nt,this._panEnd=new Nt,this._panDelta=new Nt,this._dollyStart=new Nt,this._dollyEnd=new Nt,this._dollyDelta=new Nt,this._dollyDirection=new F,this._mouse=new Nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fb.bind(this),this._onPointerDown=hb.bind(this),this._onPointerUp=db.bind(this),this._onContextMenu=Mb.bind(this),this._onMouseWheel=gb.bind(this),this._onKeyDown=_b.bind(this),this._onTouchStart=vb.bind(this),this._onTouchMove=xb.bind(this),this._onMouseDown=pb.bind(this),this._onMouseMove=mb.bind(this),this._interceptControlDown=yb.bind(this),this._interceptControlUp=Sb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yf),this.update(),this.state=he.NONE}update(t=null){const e=this.object.position;Ce.copy(e).sub(this.target),Ce.applyQuaternion(this._quat),this._spherical.setFromVector3(Ce),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=en:i>Math.PI&&(i-=en),s<-Math.PI?s+=en:s>Math.PI&&(s-=en),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ce.setFromSpherical(this._spherical),Ce.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ce),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ce.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ce.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Co.origin.copy(this.object.position),Co.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Co.direction))<cb?this.object.lookAt(this.target):(Sf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Co.intersectPlane(Sf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>gl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gl||this._lastTargetPosition.distanceToSquared(this.target)>gl?(this.dispatchEvent(yf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?en/60*this.autoRotateSpeed*t:en/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ce.setFromMatrixColumn(e,0),Ce.multiplyScalar(-t),this._panOffset.add(Ce)}_panUp(t,e){this.screenSpacePanning===!0?Ce.setFromMatrixColumn(e,1):(Ce.setFromMatrixColumn(e,0),Ce.crossVectors(this.object.up,Ce)),Ce.multiplyScalar(t),this._panOffset.add(Ce)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ce.copy(s).sub(this.target);let r=Ce.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(en*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-en*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(en*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-en*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Nt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function hb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function fb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function db(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wp),this.state=he.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function pb(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Vs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=he.DOLLY;break;case Vs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=he.ROTATE}break;case Vs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(lu)}function mb(n){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function gb(n){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(n.preventDefault(),this.dispatchEvent(lu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(wp))}function _b(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function vb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=he.TOUCH_ROTATE;break;case Ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case Ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=he.TOUCH_DOLLY_PAN;break;case Ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(lu)}function xb(n){switch(this._trackPointer(n),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=he.NONE}}function Mb(n){this.enabled!==!1&&n.preventDefault()}function yb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Sb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Hr extends Jt{constructor(){const t=Hr.SkyShader,e=new hi({name:t.name,uniforms:up.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Qe,depthWrite:!1});super(new Ui(1,1,1),e),this.isSky=!0}}Hr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new F},up:{value:new F(0,1,0)}},vertexShader:`
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

		}`};const si=Math.PI/180;function bf(n,t,e){const s=n.getTime()/864e5+24405875e-1-2451545,r=(280.46+.9856474*s)%360,o=(357.528+.9856003*s)%360*si,a=(r+1.915*Math.sin(o)+.02*Math.sin(2*o))*si,l=(23.439-4e-7*s)*si,c=Math.atan2(Math.cos(l)*Math.sin(a),Math.cos(a)),u=Math.asin(Math.sin(l)*Math.sin(a)),p=((18.697374558+24.06570982441908*s)%24*15+e)*si-c,g=t*si,_=Math.asin(Math.sin(g)*Math.sin(u)+Math.cos(g)*Math.cos(u)*Math.cos(p));return{azimuth:(Math.atan2(-Math.sin(p),Math.tan(u)*Math.cos(g)-Math.sin(g)*Math.cos(p))/si+360)%360,altitude:_/si}}const bb=5;function Ef(n,t){const[e,i,s]=n.split("-").map(Number),r=Math.floor(t),o=Math.round((t-r)*60);return new Date(Date.UTC(e,i-1,s,r-bb,o))}function Tf(n){const t=n.azimuth*si,e=n.altitude*si;return[Math.cos(e)*Math.sin(t),Math.cos(e)*Math.cos(t),Math.sin(e)]}class Yr{constructor(){this.pos=[],this.nor=[],this.uv=[]}quad(t,e,i,s,r,o=1){const a=[t,e,i,t,i,s],l=[[0,0],[1,0],[1,1],[0,0],[1,1],[0,1]],c=Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2])*o,u=Math.hypot(s[0]-t[0],s[1]-t[1],s[2]-t[2])*o;a.forEach((h,d)=>{this.pos.push(h[0],h[1],h[2]),this.nor.push(r[0],r[1],r[2]),this.uv.push(l[d][0]*c,l[d][1]*u)})}tri(t,e,i,s,r=1){for(const o of[t,e,i])this.pos.push(o[0],o[1],o[2]),this.nor.push(s[0],s[1],s[2]),this.uv.push(o[0]*r,o[2]*r)}box(t,e,i,s={top:!0,bottom:!0}){const[r,o,a,l]=t,c=-l,u=-o;s.top&&this.quad([r,i,u],[a,i,u],[a,i,c],[r,i,c],[0,1,0]),s.bottom&&this.quad([r,e,c],[a,e,c],[a,e,u],[r,e,u],[0,-1,0]),this.quad([r,e,u],[a,e,u],[a,i,u],[r,i,u],[0,0,1]),this.quad([a,e,c],[r,e,c],[r,i,c],[a,i,c],[0,0,-1]),this.quad([a,e,u],[a,e,c],[a,i,c],[a,i,u],[1,0,0]),this.quad([r,e,c],[r,e,u],[r,i,u],[r,i,c],[-1,0,0])}geometry(){const t=new Oe;return t.setAttribute("position",new ce(this.pos,3)),t.setAttribute("normal",new ce(this.nor,3)),t.setAttribute("uv",new ce(this.uv,2)),t.computeBoundingBox(),t.computeBoundingSphere(),t}}function Fn(n,t,e,i={}){const s=new Yr;for(const r of n)s.box(r,t,e,{top:i.top??!0,bottom:i.bottom??!0});return s.geometry()}function Eb(n,t,e,i){const s=new Yr;for(const[r,o,a,l,c,u]of n){const h=r-c*i,d=o-u*i,p=a-c*i,g=l-u*i,_=[c,0,-u],m=c*(g-d)-u*(p-h)<0,f=[h,t,-d],M=[p,t,-g],y=[p,e,-g],v=[h,e,-d];m?s.quad(M,f,v,y,_):s.quad(f,M,y,v,_)}return s.geometry()}function _l(n,t,e,i,s){const r=new Yr;for(const[o,a,l,c,u,h]of n){const d=Math.min(o,l)-0,p=Math.max(o,l),g=Math.min(a,c),_=Math.max(a,c);let m;if(u!==0){const f=o-u*s,M=o+u*i;m=[Math.min(f,M),g-i,Math.max(f,M),_+i]}else{const f=a-h*s,M=a+h*i;m=[d-i,Math.min(f,M),p+i,Math.max(f,M)]}r.box(m,t,e)}return r.geometry()}function Tb(n,t,e,i){const s=new Yr,r=new Set,o=.16,a=.32;for(const l of n){const[c,u,h,d]=l;if(!(Math.max(h-c,d-u)<.25))for(const[g,_,m,f,M,y]of t)if(M!==0){const v=M>0?h:c;if(Math.abs(v-g)>.12)continue;const I=Math.max(u,Math.min(_,f)),C=Math.min(d,Math.max(_,f));if(C-I<.2)continue;const A=(I+C)/2,L=`x${Math.round(g*2)}:${Math.round(A*2)}`;if(r.has(L))continue;r.add(L);const E=g,S=g+M*a;s.box([Math.min(E,S),A-o/2,Math.max(E,S),A+o/2],e,i)}else{const v=y>0?d:u;if(Math.abs(v-_)>.12)continue;const I=Math.max(c,Math.min(g,m)),C=Math.min(h,Math.max(g,m));if(C-I<.2)continue;const A=(I+C)/2,L=`y${Math.round(_*2)}:${Math.round(A*2)}`;if(r.has(L))continue;r.add(L);const E=_,S=_+y*a;s.box([A-o/2,Math.min(E,S),A+o/2,Math.max(E,S)],e,i)}}return s.geometry()}function wb(n,t){const e=uu(n),i=[];for(const r of cu(e))for(const o of r)i.push(e[o][0],t,-e[o][1]);const s=new Oe;return s.setAttribute("position",new ce(i,3)),s.computeVertexNormals(),s}function Ab(n,t){const e=[];for(let s=0;s<n.length;s++){const r=n[s],o=n[(s+1)%n.length];e.push(r[0],t,-r[1],o[0],t,-o[1])}const i=new Oe;return i.setAttribute("position",new ce(e,3)),i}function vl(n,t){const e=[],i=[];for(const{p:r,w:o}of n){const a=o/2;for(let l=0;l<r.length-1;l++){const[c,u]=r[l],[h,d]=r[l+1],p=Math.hypot(h-c,d-u);if(p<.01)continue;const g=-(d-u)/p*a,_=(h-c)/p*a,m=(h-c)/p*a*.5,f=(d-u)/p*a*.5,M=[c-m+g,u-f+_],y=[h+m+g,d+f+_],v=[h+m-g,d+f-_],I=[c-m-g,u-f-_];for(const C of[M,I,v,M,v,y])e.push(C[0],t,-C[1]),i.push(0,1,0)}}const s=new Oe;return s.setAttribute("position",new ce(e,3)),s.setAttribute("normal",new ce(i,3)),s}function Po(n,t){const e=[];for(const s of n){const r=uu(s);if(!(r.length<3))for(const o of cu(r))for(const a of o)e.push(r[a][0],t,-r[a][1])}const i=new Oe;return i.setAttribute("position",new ce(e,3)),i.computeVertexNormals(),i}function Rb(n){const t=new Yr;for(const{p:e,h:i}of n){const s=uu(e);if(s.length<3)continue;const r=s.map(([l,c])=>new Nt(l,c)),a=Ea.isClockWise(r)?[...s].reverse():s;for(let l=0;l<a.length;l++){const[c,u]=a[l],[h,d]=a[(l+1)%a.length],p=Math.hypot(h-c,d-u);if(p<.01)continue;const g=[(d-u)/p,0,(h-c)/p];t.quad([c,0,-u],[h,0,-d],[h,i,-d],[c,i,-u],g,.25)}for(const[l,c,u]of cu(a))t.tri([a[l][0],i,-a[l][1]],[a[c][0],i,-a[c][1]],[a[u][0],i,-a[u][1]],[0,1,0],.1)}return t.geometry()}function cu(n){return Ea.triangulateShape(n.map(([e,i])=>new Nt(e,i)),[]).map(([e,i,s])=>(n[i][0]-n[e][0])*(n[s][1]-n[e][1])-(n[i][1]-n[e][1])*(n[s][0]-n[e][0])>=0?[e,i,s]:[e,s,i])}function uu(n){const t=[];for(const e of n){const i=t[t.length-1];(!i||Math.hypot(i[0]-e[0],i[1]-e[1])>.05)&&t.push(e)}if(t.length>2){const e=t[0],i=t[t.length-1];Math.hypot(e[0]-i[0],e[1]-i[1])<.05&&t.pop()}return t}const Cb=1.4;class Pb{constructor(t,e,i){this.project=t,this.types=e,this.mat=i,this.root=new un,this.floors=[],this.typeGeo=new Map,this.overlay=null,this.interior=null,this.unitMeshes=new Map,this.hoverFloor=null,this.cutFloor=null,this.walkFloor=null,this.crown=new un,this.podiumRoof=null,this.podiumParapet=null;const s=t.building;this.slab=s.slab,this.root.name="building",this.root.rotation.y=-wi.degToRad(s.azimuth_deg);for(const r of s.floors)this.addFloor(r);this.addRoofs()}geoFor(t){let e=this.typeGeo.get(t.id);return e||(e={slab:Fn(t.slab,0,this.slab),walls:Fn(t.walls_ext,0,1,{top:!1,bottom:!1}),glass:Eb(t.outline,0,1,.14),fins:t.kind==="podium"?null:Tb(t.walls_ext,t.outline,0,1),band:_l(t.outline,-.02,this.slab+.12,.06,.25)},this.typeGeo.set(t.id,e)),e}addFloor(t){const e=this.types.get(t.type),i=this.geoFor(e),s=new un;s.name=`floor-${t.n}`;const r=t.height-this.slab,o=new Jt(i.slab,this.mat.slab);o.position.y=t.elevation;const a=new Jt(i.band,this.mat.band);a.position.y=t.elevation;const l=new Jt(i.walls,e.kind==="podium"?this.mat.band:this.mat.stone);l.position.y=t.elevation+this.slab,l.scale.y=r;const c=new Jt(i.glass,this.mat.glass);c.position.y=t.elevation+this.slab,c.scale.y=r,c.renderOrder=2;let u=null;i.fins&&(u=new Jt(i.fins,this.mat.bronze),u.position.y=t.elevation+this.slab,u.scale.y=r,u.castShadow=!0,s.add(u));for(const m of[o,a,l])m.castShadow=!0,m.receiveShadow=!0;s.add(o,a,l,c);const[h,d,p,g]=e.bbox,_=new Jt(new Ui(p-h,t.height,g-d),this.mat.pick);_.position.set((h+p)/2,t.elevation+t.height/2,-(d+g)/2),_.userData.floor=t.n,s.add(_),this.root.add(s),this.floors.push({info:t,type:e,group:s,walls:l,glass:c,fins:u,pick:_})}addRoofs(){const t=this.project.building,e=t.floors[t.floors.length-1],i=this.types.get(e.type),s=e.elevation+e.height,r=new Jt(Fn(i.slab,0,this.slab),this.mat.slab);r.position.y=s;const o=new Jt(_l(i.outline,0,t.crown_height,.08,.35),this.mat.bronze);o.position.y=s;const a=new Jt(new Ui(9,3.2,7),this.mat.band);a.position.set(0,s+1.6+this.slab,0);for(const u of[r,o,a])u.castShadow=!0,u.receiveShadow=!0;this.crown.add(r,o,a);const l=t.floors.find(u=>u.n===6),c=t.floors.find(u=>u.n===5);if(c&&l){const u=this.types.get(c.type),h=new Jt(Fn(u.slab,0,.15),this.mat.plaza);h.position.y=l.elevation,h.receiveShadow=!0,h.castShadow=!0;const d=new Jt(_l(u.outline,0,1.1,.04,.2),this.mat.band);d.position.y=l.elevation,d.castShadow=!0,this.crown.add(h,d),this.podiumRoof=h,this.podiumParapet=d}this.root.add(this.crown)}planToWorld(t,e,i){return this.root.updateMatrixWorld(),this.root.localToWorld(new F(t,i,-e))}worldToPlan(t){this.root.updateMatrixWorld();const e=this.root.worldToLocal(t.clone());return[e.x,-e.z]}floor(t){return this.floors.find(e=>e.info.n===t)}floorCenterWorld(t){const e=this.floor(t),[i,s,r,o]=e.type.kind==="podium"?e.type.bbox:this.towerBox(e.type);return this.planToWorld((i+r)/2,(s+o)/2,e.info.elevation)}towerBox(t){return t.bbox}get slabThickness(){return this.slab}get height(){return this.project.building.height}pickables(){return this.floors.filter(t=>t.group.visible).map(t=>t.pick)}unitPickables(){return[...this.unitMeshes.values()].map(t=>t.fill)}setHoverFloor(t){if(this.hoverFloor!==t){if(this.hoverFloor!==null){const e=this.floor(this.hoverFloor);e&&this.walkFloor!==e.info.n&&(e.glass.material=this.mat.glass)}if(this.hoverFloor=t,t!==null&&this.cutFloor===null&&this.walkFloor===null){const e=this.floor(t);e&&(e.glass.material=this.mat.glassHover)}}}showAll(){this.clearInterior(),this.cutFloor=null,this.walkFloor=null;for(const t of this.floors)t.group.visible=!0,t.walls.material=t.type.kind==="podium"?this.mat.band:this.mat.stone,t.glass.visible=!0,t.glass.material=this.mat.glass,t.fins&&(t.fins.visible=!0);this.crown.visible=!0}setVisibleUpTo(t){for(const i of this.floors)i.group.visible=i.info.n<=t,i.walls.material=i.type.kind==="podium"?this.mat.band:this.mat.stone,i.glass.visible=!0,i.glass.material=this.mat.glass,i.fins&&(i.fins.visible=!0);this.crown.visible=!1;const e=this.project.building.floors.find(i=>i.n===6);this.podiumRoof&&e&&(this.podiumRoof.visible=t>=6,this.podiumParapet.visible=t>=6,t>=6&&(this.crown.visible=!0),this.crown.children.forEach(i=>{i!==this.podiumRoof&&i!==this.podiumParapet&&(i.visible=!1)}))}restoreCrownChildren(){this.crown.children.forEach(t=>t.visible=!0)}cutAt(t,e,i){this.clearInterior(),this.restoreCrownChildren(),this.cutFloor=t,this.walkFloor=null,this.setVisibleUpTo(t);const s=this.floor(t);s.glass.visible=!1,s.fins&&(s.fins.visible=!1);const r=new un,o=Math.min(Cb,s.info.height-this.slab),a=s.info.elevation+this.slab,l=new Jt(Fn(s.type.walls_int,a,a+o,{bottom:!1}),this.mat.wallInt);l.castShadow=!0,l.receiveShadow=!0;const c=new Jt(Fn(s.type.slab,a,a+.01,{bottom:!1}),this.mat.floorCut);c.receiveShadow=!0,r.add(l,c),this.overlay=new un;for(const u of e.filter(h=>h.floor===t&&h.polygon)){const h=new Yt(Mn[u.status]),d=new Jt(wb(u.polygon,a+.05),new ir({color:h,transparent:!0,opacity:.42,depthWrite:!1}));d.renderOrder=3,d.userData.unitId=u.id;const p=new kS(Ab(u.polygon,a+.07),new nu({color:h,transparent:!0,opacity:.95}));p.renderOrder=4,this.overlay.add(d,p),this.unitMeshes.set(u.id,{fill:d,line:p,unit:u})}r.add(this.overlay),this.interior=r,this.root.add(r),this.styleUnits(i,null,null)}styleUnits(t,e,i){for(const{fill:s,line:r,unit:o}of this.unitMeshes.values()){const a=va(o,t),l=s.material,c=r.material,u=new Yt(Mn[o.status]),h=o.id===i||o.id===e;l.color.copy(a?u:new Yt("#9aa0a6")),l.opacity=a?o.id===i?.78:o.id===e?.62:.4:.12,c.color.copy(h?new Yt("#ffffff"):a?u:new Yt("#9aa0a6")),c.opacity=a?1:.3,s.visible=!0}}walkIn(t,e){this.clearInterior(),this.restoreCrownChildren(),this.cutFloor=null,this.walkFloor=t,this.setVisibleUpTo(t);const i=this.floor(t);i.glass.material=this.mat.glassInside,i.glass.visible=!0;const s=new un,r=i.info.elevation+this.slab,o=i.info.elevation+i.info.height,a=new Jt(Fn(i.type.walls_int,r,o,{top:!1,bottom:!1}),this.mat.wallInt);a.receiveShadow=!0,a.castShadow=!0,i.walls.material=this.mat.wallInt;const l=new Jt(Fn(i.type.door_heads,r+2.1,o),this.mat.wallInt);l.receiveShadow=!0;const c=new Jt(Fn(i.type.slab,r,r+.012,{bottom:!1}),this.mat.floorWood);c.receiveShadow=!0;const u=new Jt(Fn(i.type.slab,o,o+this.slab),this.mat.ceiling);u.castShadow=!0,s.add(a,l,c,u);const h=e.filter(d=>d.floor===t&&d.polygon);for(const d of i.type.rooms)d.area<1.5||d.area>38||h.some(p=>Db(d.x,d.y,p.polygon))&&s.add(Lb(`${d.area.toFixed(1).replace(".",",")} м²`,d.x,d.y,r+.02));this.interior=s,this.root.add(s)}collisionRects(t){const e=this.floor(t),i=[...e.type.walls_int,...e.type.walls_ext];for(const[s,r,o,a,l,c]of e.type.outline)l!==0?i.push([Math.min(s,s-l*.15),Math.min(r,a),Math.max(s,s-l*.15),Math.max(r,a)]):i.push([Math.min(s,o),Math.min(r,r-c*.15),Math.max(s,o),Math.max(r,r-c*.15)]);return i}clearInterior(){this.interior&&(this.root.remove(this.interior),this.interior.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose();const i=e.material;i&&!Array.isArray(i)&&!Object.values(this.mat).includes(i)&&(i.map?.dispose(),i.dispose())})),this.interior=null,this.overlay=null,this.unitMeshes.clear()}}function Db(n,t,e){let i=!1;for(let s=0,r=e.length-1;s<e.length;r=s++)e[s][1]>t!=e[r][1]>t&&n<(e[r][0]-e[s][0])*(t-e[s][1])/(e[r][1]-e[s][1]+1e-12)+e[s][0]&&(i=!i);return i}function Lb(n,t,e,i){const s=document.createElement("canvas");s.width=256,s.height=96;const r=s.getContext("2d");r.font="600 46px Manrope, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle="rgba(40, 32, 24, 0.55)",r.fillText(n,128,50);const o=new yp(s);o.colorSpace=Ze,o.anisotropy=4;const a=new Jt(new $r(1.4,.525),new ir({map:o,transparent:!0,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.position.set(t,i,-e),a.renderOrder=5,a}function Ib(n,t,e){const i=new un;i.name="context";const s=new Jt(new iu(2400,64),t.ground);s.rotation.x=-Math.PI/2,s.receiveShadow=!0,i.add(s);const r=n.green.filter(u=>u.k!=="pitch"&&u.k!=="playground"),o=n.green.filter(u=>u.k==="pitch"||u.k==="playground");qi(i,Po(r.map(u=>u.p),.02),t.green),qi(i,Po(o.map(u=>u.p),.03),t.pitch),qi(i,Po(n.water_areas.map(u=>u.p),.04),t.water),qi(i,vl(n.water_lines,.05),t.water);const a=new Set(["footway","path","cycleway","steps","pedestrian"]);qi(i,vl(n.roads.filter(u=>a.has(u.k??"")),.06),t.path),qi(i,vl(n.roads.filter(u=>!a.has(u.k??"")),.08),t.road);const l=Po([Ap(e,9)],.1);qi(i,l,t.plaza);const c=new Jt(Rb(n.buildings),t.context);return c.castShadow=!0,c.receiveShadow=!0,i.add(c),i.add(Nb(n,t,e)),{group:i,occluders:c}}function qi(n,t,e){const i=new Jt(t,e);i.receiveShadow=!0,n.add(i)}function Ap(n,t){const e=n.reduce((s,r)=>s+r[0],0)/n.length,i=n.reduce((s,r)=>s+r[1],0)/n.length;return n.map(([s,r])=>{const o=Math.hypot(s-e,r-i)||1;return[s+(s-e)/o*t,r+(r-i)/o*t]})}function Ub(n){let t=n>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function xl(n,t,e){let i=!1;for(let s=0,r=e.length-1;s<e.length;r=s++)e[s][1]>t!=e[r][1]>t&&n<(e[r][0]-e[s][0])*(t-e[s][1])/(e[r][1]-e[s][1]+1e-12)+e[s][0]&&(i=!i);return i}function wf(n){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(const[r,o]of n)t=Math.min(t,r),e=Math.min(e,o),i=Math.max(i,r),s=Math.max(s,o);return{x0:t,y0:e,x1:i,y1:s}}function Nb(n,t,e){const i=Ub(20261104),s=[],r=n.buildings.map(f=>({p:f.p,bb:wf(f.p)})),o=Ap(e,6),a=(f,M)=>{if(Math.hypot(f,M)>1300||xl(f,M,o))return!0;for(const y of r)if(!(f<y.bb.x0-2||f>y.bb.x1+2||M<y.bb.y0-2||M>y.bb.y1+2)&&xl(f,M,y.p))return!0;return!1};for(const f of n.green){if(f.k==="pitch"||f.k==="playground")continue;const M=wf(f.p),y=(M.x1-M.x0)*(M.y1-M.y0),v=Math.min(600,Math.round(y/(f.k==="park"||f.k==="forest"?90:220)));for(let I=0;I<v;I++){const C=M.x0+i()*(M.x1-M.x0),A=M.y0+i()*(M.y1-M.y0);xl(C,A,f.p)&&!a(C,A)&&s.push({x:C,y:A,s:.8+i()*.6})}}const l=new Set(["primary","secondary","tertiary","trunk","residential"]);for(const f of n.roads)if(l.has(f.k??""))for(let M=0;M<f.p.length-1;M++){const[y,v]=f.p[M],[I,C]=f.p[M+1],A=Math.hypot(I-y,C-v),L=-(C-v)/(A||1),E=(I-y)/(A||1);for(let S=4;S<A;S+=11)for(const P of[-1,1]){const N=f.w/2+2.5,z=y+(I-y)*S/A+L*N*P,K=v+(C-v)*S/A+E*N*P;a(z,K)||s.push({x:z,y:K,s:.75+i()*.4})}}const c=new ou(1,1),u=new su(.12,.18,1,6),h=new af(c,t.treeCrown,s.length),d=new af(u,t.treeTrunk,s.length),p=new fe,g=new Ii,_=new Yt;s.forEach((f,M)=>{const y=6*f.s,v=2.4*f.s;p.compose(new F(f.x,y*.62,-f.y),g,new F(v,v*1.15,v)),h.setMatrixAt(M,p),_.setHSL(.24+i()*.05,.32+i()*.12,.34+i()*.1),h.setColorAt(M,_),p.compose(new F(f.x,y*.25,-f.y),g,new F(1,y*.5,1)),d.setMatrixAt(M,p)}),h.castShadow=!0,d.castShadow=!0;const m=new un;return m.add(h,d),m}function Fb(){const n=document.createElement("canvas");n.width=512,n.height=512;const t=n.getContext("2d"),e=64;for(let s=0;s<512;s+=e){let r=-(s/e%3)*120;for(;r<512;){const o=260+(r*7+s*13)%140,a=168+(r*31+s*17)%26;t.fillStyle=`rgb(${a+28}, ${a-14}, ${a-62})`,t.fillRect(r,s,o,e);for(let l=0;l<9;l++){t.strokeStyle=`rgba(90, 60, 30, ${.05+(l*13+r)%7/100})`,t.beginPath();const c=s+6+l*6.5;t.moveTo(r,c),t.bezierCurveTo(r+o/3,c+2,r+2*o/3,c-2,r+o,c),t.stroke()}t.fillStyle="rgba(60, 40, 20, 0.35)",t.fillRect(r,s,2,e),r+=o}t.fillStyle="rgba(60, 40, 20, 0.4)",t.fillRect(0,s,512,2)}const i=new yp(n);return i.wrapS=i.wrapT=Qo,i.colorSpace=Ze,i.anisotropy=8,i}function Ob(){const n=Fb();return n.repeat.set(.5,.5),{stone:new Ae({color:14074790,roughness:.82,metalness:0}),band:new Ae({color:13219223,roughness:.7,metalness:.05}),bronze:new Ae({color:10251078,roughness:.38,metalness:.65}),slab:new Ae({color:12564136,roughness:.9}),glass:new pl({color:4150371,roughness:.05,metalness:.2,transparent:!0,opacity:.78,envMapIntensity:1.4,side:hn,depthWrite:!1}),glassHover:new pl({color:14260834,emissive:13141850,emissiveIntensity:.55,roughness:.1,metalness:.1,transparent:!0,opacity:.8,side:hn,depthWrite:!1}),glassInside:new pl({color:14674415,roughness:.02,metalness:0,transparent:!0,opacity:.12,side:hn,depthWrite:!1}),wallInt:new Ae({color:15460062,roughness:.92}),wallCut:new Ae({color:2764083,roughness:.85}),floorWood:new Ae({map:n,color:16773344,roughness:.55,metalness:0}),floorCut:new Ae({color:15328476,roughness:.95}),ceiling:new Ae({color:16184560,roughness:.95,side:hn}),ground:new Ae({color:13222580,roughness:1}),plaza:new Ae({color:14275010,roughness:.9}),road:new Ae({color:4869458,roughness:.95}),path:new Ae({color:13090478,roughness:1}),water:new Ae({color:4157318,roughness:.12,metalness:.35}),green:new Ae({color:9086570,roughness:1}),pitch:new Ae({color:7314026,roughness:1}),context:new Ae({color:14867924,roughness:.9}),treeCrown:new Ae({color:7311182,roughness:.95,flatShading:!0}),treeTrunk:new Ae({color:7033922,roughness:1}),pick:new ir({visible:!1})}}class Bb{constructor(t,e){this.camera=t,this.dom=e,this.enabled=!1,this.yaw=0,this.pitch=0,this.pos=new F,this.keys=new Set,this.stick=new Nt,this.drag=null,this.resolve=i=>i,this.onKey=i=>{this.enabled&&i.target?.tagName!=="INPUT"&&(i.type==="keydown"?this.keys.add(i.code):this.keys.delete(i.code),(i.code.startsWith("Arrow")||i.code==="Space")&&i.preventDefault())},this.onDown=i=>{this.enabled&&(this.drag={id:i.pointerId,x:i.clientX,y:i.clientY})},this.onMove=i=>{!this.enabled||!this.drag||i.pointerId!==this.drag.id||(this.look(i.clientX-this.drag.x,i.clientY-this.drag.y),this.drag.x=i.clientX,this.drag.y=i.clientY)},this.onUp=i=>{this.drag&&i.pointerId===this.drag.id&&(this.drag=null)},window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onKey),e.addEventListener("pointerdown",this.onDown),window.addEventListener("pointermove",this.onMove),window.addEventListener("pointerup",this.onUp),window.addEventListener("pointercancel",this.onUp)}start(t,e,i){this.enabled=!0,this.pos.copy(t),this.yaw=e,this.pitch=-.04,this.resolve=i,this.keys.clear(),this.stick.set(0,0),this.apply()}stop(){this.enabled=!1,this.keys.clear(),this.drag=null}setStick(t,e){this.stick.set(t,e)}look(t,e){this.yaw-=t*.0042,this.pitch=wi.clamp(this.pitch-e*.0036,-1.25,1.1)}update(t){if(!this.enabled)return;let e=0,i=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(e+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(e-=1),this.keys.has("KeyA")&&(i-=1),this.keys.has("KeyD")&&(i+=1),this.keys.has("ArrowLeft")&&(this.yaw+=1.8*t),this.keys.has("ArrowRight")&&(this.yaw-=1.8*t),e+=-this.stick.y,i+=this.stick.x;const s=Math.hypot(e,i);if(s>1&&(e/=s,i/=s),s>.01){const r=(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")?3.2:1.7)*t,o=new F(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),a=new F(Math.cos(this.yaw),0,-Math.sin(this.yaw)),l=o.multiplyScalar(e*r).add(a.multiplyScalar(i*r)),c=this.resolve(this.pos.clone().add(new F(l.x,0,0)));this.pos.copy(c);const u=this.resolve(this.pos.clone().add(new F(0,0,l.z)));this.pos.copy(u)}this.apply()}apply(){this.camera.position.copy(this.pos),this.camera.rotation.order="YXZ",this.camera.rotation.set(this.pitch,this.yaw,0)}dispose(){window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onKey),this.dom.removeEventListener("pointerdown",this.onDown),window.removeEventListener("pointermove",this.onMove),window.removeEventListener("pointerup",this.onUp),window.removeEventListener("pointercancel",this.onUp)}}function Af(n,t,e,i){for(let s=0;s<3;s++){let r=!1;for(const[o,a,l,c]of i){const u=Math.max(o,Math.min(n,l)),h=Math.max(a,Math.min(t,c)),d=n-u,p=t-h,g=d*d+p*p;if(!(g>=e*e)){if(g>1e-10){const _=Math.sqrt(g);n=u+d/_*e,t=h+p/_*e}else{const _=[[o-e,t,n-o],[l+e,t,l-n],[n,a-e,t-a],[n,c+e,c-t]];_.sort((m,f)=>m[2]-f[2]),n=_[0][0],t=_[0][1]}r=!0}}if(!r)break}return[n,t]}class kb{constructor(t,e,i){this.renderer=t,this.rig=e,this.camera=i,this.supported=!1,this.active=!1,this.controllers=[],this.aiming=new Map,this.target=null,this.floorY=0,this.walkable=()=>!0,this.turnCooldown=0,this.onEnd=()=>{},this.marker=new Jt(new au(.22,.3,40).rotateX(-Math.PI/2),new ir({color:4054167,transparent:!0,opacity:.9,depthTest:!1})),this.marker.visible=!1,this.marker.renderOrder=10;for(let s=0;s<2;s++){const r=t.xr.getController(s),o=new Mp(new Oe().setFromPoints([new F(0,0,0),new F(0,0,-1)]),new nu({color:16777215,transparent:!0,opacity:.7}));o.scale.z=8,r.add(o),r.addEventListener("selectstart",()=>this.aiming.set(r,!0)),r.addEventListener("selectend",()=>{this.aiming.set(r,!1),this.teleport()}),e.add(r),this.controllers.push(r)}}async checkSupport(){const t=navigator.xr;try{this.supported=!!t&&await t.isSessionSupported("immersive-vr")}catch{this.supported=!1}return this.supported}async enter(t,e,i,s){const r=navigator.xr;if(!r)return;const o=await r.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor"]});this.renderer.xr.setReferenceSpaceType("local-floor"),await this.renderer.xr.setSession(o),this.active=!0,this.floorY=e.y,this.walkable=s,this.rig.position.copy(e),this.rig.rotation.set(0,i,0),this.marker.parent||t.add(this.marker),o.addEventListener("end",()=>{this.active=!1,this.marker.visible=!1,this.rig.position.set(0,0,0),this.rig.rotation.set(0,0,0),this.onEnd()})}update(t){if(!this.active)return;this.target=null;const e=new Tc,i=new ri(new F(0,1,0),-this.floorY);for(const r of this.controllers){if(!this.aiming.get(r))continue;const o=r.matrixWorld;e.ray.origin.setFromMatrixPosition(o),e.ray.direction.set(0,0,-1).transformDirection(o);const a=new F;e.ray.intersectPlane(i,a)&&a.distanceTo(e.ray.origin)<12&&(this.target=a)}if(this.target){const r=this.walkable(this.target);this.marker.visible=!0,this.marker.position.copy(this.target).setY(this.floorY+.02),this.marker.material.color.set(r?4054167:15026253),r||(this.target=null)}else this.marker.visible=!1;this.turnCooldown-=t;const s=this.renderer.xr.getSession();if(s&&this.turnCooldown<=0)for(const r of s.inputSources){const o=r.gamepad?.axes?.[2]??0;if(Math.abs(o)>.7){this.snapTurn(o>0?-Math.PI/6:Math.PI/6),this.turnCooldown=.35;break}}}teleport(){if(!this.target)return;const t=new F;this.camera.getWorldPosition(t),this.rig.position.x+=this.target.x-t.x,this.rig.position.z+=this.target.z-t.z,this.marker.visible=!1}snapTurn(t){const e=new F;this.camera.getWorldPosition(e);const i=this.rig.position.clone().sub(e);i.applyAxisAngle(new F(0,1,0),t),this.rig.position.copy(e).add(i),this.rig.rotation.y+=t}}const Ml=1.6;class zb{constructor(t,e){this.canvasHost=t,this.events=e,this.scene=new nf,this.rig=new un,this.sky=new Hr,this.sun=new ob(16774112,3),this.hemi=new ib(14674421,12102031,.9),this.envRT=null,this.skyScene=new nf,this.building=null,this.occluders=null,this.mode="building",this.clock=new ab,this.pointer=new Nt,this.pointerScreen={x:0,y:0},this.pointerDirty=!1,this.pointerInside=!1,this.down=null,this.tween=null,this.raycaster=new Tc,this.lastHoverFloor=null,this.lastHoverUnit=null,this.walkFloorN=null,this.lat=41.3,this.lon=69.29,this.envTimer=0,this.mobile=matchMedia("(pointer: coarse)").matches,this.onPointerMove=a=>{const l=this.renderer.domElement.getBoundingClientRect();this.pointer.set((a.clientX-l.left)/l.width*2-1,-((a.clientY-l.top)/l.height)*2+1),this.pointerScreen={x:a.clientX-l.left,y:a.clientY-l.top},this.pointerInside=a.pointerType==="mouse",this.pointerDirty=!0},this.onPointerDown=a=>{this.down={x:a.clientX,y:a.clientY,t:performance.now()}},this.onPointerUp=a=>{if(!this.down)return;const l=Math.hypot(a.clientX-this.down.x,a.clientY-this.down.y),c=performance.now()-this.down.t;if(this.down=null,l>6||c>600||this.mode==="walk")return;this.onPointerMove(a);const u=this.pick();this.mode==="building"&&u.floor!==null?this.events.clickFloor(u.floor):this.mode==="floor"&&u.unit!==null&&this.events.clickUnit(u.unit)},this.loop=()=>{const a=Math.min(this.clock.getDelta(),.1);if(this.tween){this.tween.t+=a/this.tween.d;const c=this.tween.t>=1?1:1-Math.pow(1-this.tween.t,3);this.camera.position.lerpVectors(this.tween.from[0],this.tween.to[0],c),this.controls.target.lerpVectors(this.tween.from[1],this.tween.to[1],c),this.tween.t>=1&&(this.tween=null)}this.xr.active?this.xr.update(a):this.mode==="walk"?this.walk.update(a):this.controls.update(),this.xr.active||this.processHover();const l=this.mode==="walk"&&this.walkFloorN!==null&&this.building?this.building.floorCenterWorld(this.walkFloorN):this.controls.target;this.sun.target.position.set(l.x,this.mode==="building"?0:l.y,l.z),this.sun.position.copy(this.sun.target.position).addScaledVector(this.sunDir,650),this.renderer.render(this.scene,this.camera)},this.sunDir=new F(.3,.8,.5).normalize(),this.resize=()=>{const a=this.canvasHost.clientWidth,l=this.canvasHost.clientHeight;this.renderer.setSize(a,l),this.camera.aspect=a/l,this.applyViewShift()},this.renderer=new FS({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.mobile?1.6:2)),this.renderer.outputColorSpace=Ze,this.renderer.toneMapping=Wd,this.renderer.toneMappingExposure=.92,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Vd,this.renderer.xr.enabled=!0,t.appendChild(this.renderer.domElement),this.renderer.domElement.style.touchAction="none",this.camera=new xn(38,1,.1,6e3),this.rig.add(this.camera),this.scene.add(this.rig),this.mat=Ob(),this.sky.scale.setScalar(1e4);const i=this.sky.material.uniforms;i.turbidity.value=5.5,i.rayleigh.value=1.1,i.mieCoefficient.value=.004,i.mieDirectionalG.value=.82,this.scene.add(this.sky);const s=new Hr;s.scale.setScalar(1e3),Object.assign(s.material.uniforms.turbidity,{value:5.5}),Object.assign(s.material.uniforms.rayleigh,{value:1.1}),Object.assign(s.material.uniforms.mieCoefficient,{value:.004}),this.skyScene.add(s),this.pmrem=new yc(this.renderer),this.sun.castShadow=!0;const r=this.sun.shadow;r.mapSize.set(this.mobile?2048:4096,this.mobile?2048:4096),r.camera.left=-190,r.camera.right=190,r.camera.top=190,r.camera.bottom=-190,r.camera.near=10,r.camera.far=1400,r.bias=-3e-4,r.normalBias=.25,r.camera.updateProjectionMatrix(),this.scene.add(this.sun,this.sun.target,this.hemi),this.scene.fog=new eu(14212578,900,3200),this.controls=new ub(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=wi.degToRad(86),this.controls.minDistance=12,this.controls.maxDistance=900,this.controls.autoRotateSpeed=.35,this.controls.addEventListener("start",()=>{this.controls.autoRotate=!1,this.tween=null,this.events.interacted()}),this.walk=new Bb(this.camera,this.renderer.domElement),this.xr=new kb(this.renderer,this.rig,this.camera),this.xr.onEnd=()=>{this.camera.position.copy(this.walk.pos),this.events.xrEnded()};const o=this.renderer.domElement;o.addEventListener("pointermove",this.onPointerMove),o.addEventListener("pointerdown",this.onPointerDown),o.addEventListener("pointerup",this.onPointerUp),o.addEventListener("pointerleave",()=>{this.pointerInside=!1,this.pointerDirty=!0}),window.addEventListener("resize",this.resize),this.resize(),this.renderer.setAnimationLoop(this.loop)}load(t,e,i){this.lat=t.location.lat,this.lon=t.location.lon,this.building=new Pb(t,i,this.mat),this.scene.add(this.building.root);const s=i.get("POD2").bbox,r=t.building.azimuth_deg,o=[[s[0],s[1]],[s[2],s[1]],[s[2],s[3]],[s[0],s[3]]].map(([c,u])=>Jo(c,u,r)),{group:a,occluders:l}=Ib(e,this.mat,o);this.occluders=l,this.scene.add(a),this.flyToBuilding(!0),this.controls.autoRotate=!0}setSun(t,e){const i=bf(Ef(t,e),this.lat,this.lon),[s,r,o]=Tf(i),a=new F(s,o,-r).normalize(),l=wi.smoothstep(i.altitude,-4,8);this.sunDir.copy(a),this.sun.intensity=3.6*wi.smoothstep(i.altitude,-1,12),this.sun.color.setHSL(.09,.6,.62+.3*wi.smoothstep(i.altitude,0,35)),this.hemi.intensity=.12+.38*l,this.scene.environmentIntensity=.18+.32*l;const c=i.altitude<-3?new F(s,-.06,-r).normalize():a;this.sky.material.uniforms.sunPosition.value.copy(c),this.skyScene.children[0].material.uniforms.sunPosition.value.copy(c),this.renderer.toneMappingExposure=.5+.32*l,this.scene.fog.color.setHSL(.58,.15,.25+.6*l),clearTimeout(this.envTimer),this.envTimer=window.setTimeout(()=>this.updateEnv(),120)}updateEnv(){const t=this.pmrem.fromScene(this.skyScene,0,.1,2e3);this.envRT?.dispose(),this.envRT=t,this.scene.environment=t.texture}sunMinutes(t,e,i,s){if(!this.building||!this.occluders||!t.length)return 0;const r=new Map;for(const u of t){const h=Math.round(u.azimuth/10);(!r.has(h)||r.get(h).length<u.length)&&r.set(h,u)}const o=[...r.values()].map(u=>{const h=this.building.planToWorld(u.mid[0]+u.normal[0]*.6,u.mid[1]+u.normal[1]*.6,e+1.4),[d,p]=Jo(u.normal[0],u.normal[1],s);return{p:h,e:d,n:p}}),a=new Tc;a.far=700;let l=0;const c=10;for(let u=4*60;u<=21*60;u+=c){const h=bf(Ef(i,u/60),this.lat,this.lon);if(h.altitude<2)continue;const[d,p,g]=Tf(h),_=Math.hypot(d,p),m=new F(d,g,-p).normalize();let f=!1;for(const M of o)if(!((M.e*d+M.n*p)/(_||1)<.12)&&(a.set(M.p,m),a.intersectObject(this.occluders,!1).length===0)){f=!0;break}f&&(l+=c)}return l}get currentMode(){return this.mode}flyToBuilding(t=!1){if(!this.building)return;this.leaveWalk(),this.mode="building",this.setShadowRange("building"),this.applyViewShift(),this.building.showAll();const e=this.building.height,i=this.canvasHost.clientWidth<this.canvasHost.clientHeight,s=new F(0,e*(i?.5:.36),0),r=new F(95,e*1,245);i&&r.multiplyScalar(1.75).setY(e*1.15),this.moveCamera(r,s,t?0:1.1),this.controls.minDistance=30}showFloor(t,e,i){if(!this.building)return;const s=this.mode;this.leaveWalk(),this.mode="floor",this.setShadowRange("floor"),this.applyViewShift(),this.controls.autoRotate=!1,this.building.cutAt(t,e,i);const r=this.building.floorCenterWorld(t),o=this.building.floor(t),a=Math.max(o.type.bbox[2]-o.type.bbox[0],o.type.bbox[3]-o.type.bbox[1]),l=this.camera.position.clone().sub(this.controls.target).setY(0);(l.lengthSq()<.001||s==="walk")&&l.set(.36,0,.93),l.normalize();const c=wi.degToRad(38),u=2*Math.atan(Math.tan(c/2)*this.camera.aspect),h=a*.62/Math.tan(Math.min(c,u)/2),d=Math.max(a*2.2,h),p=r.clone().add(l.multiplyScalar(d*.5)).setY(r.y+d*.87);this.moveCamera(p,r,.9),this.controls.minDistance=12}styleUnits(t,e,i){this.building?.styleUnits(t,e,i)}enterWalk(t,e,i){if(!this.building||!t.polygon)return;const s=this.building.floor(t.floor);this.mode="walk",this.setShadowRange("walk"),this.applyViewShift(),this.walkFloorN=t.floor,this.controls.enabled=!1,this.controls.autoRotate=!1,this.tween=null,this.building.walkIn(t.floor,e);const r=this.building.collisionRects(t.floor),o=s.info.elevation+this.building.slabThickness,a=this.startPoint(t,s.type,r),l=this.building.planToWorld(a[0],a[1],o+Ml),c=this.bestYaw(a,r,i,o+Ml),u=this.building,h=o+Ml;this.walk.start(l,c,d=>{const[p,g]=u.worldToPlan(d),[_,m]=Af(p,g,.24,r);return u.planToWorld(_,m,h)}),this.camera.near=.05,this.camera.fov=this.mobile?72:66,this.camera.updateProjectionMatrix()}bestYaw(t,e,i,s){let r=-1/0,o=[0,1];for(let c=0;c<24;c++){const u=c/24*Math.PI*2,h=Math.cos(u),d=Math.sin(u);let p=15;for(const[m,f,M,y]of e){const v=(m-t[0])/(h||1e-9),I=(M-t[0])/(h||1e-9),C=(f-t[1])/(d||1e-9),A=(y-t[1])/(d||1e-9),L=Math.max(Math.min(v,I),Math.min(C,A));Math.min(Math.max(v,I),Math.max(C,A))>=Math.max(L,0)&&L<p&&(p=Math.max(L,0))}const g=i.some(m=>m.normal[0]*h+m.normal[1]*d>.7)?2.5:0,_=Math.min(p,9)+g;_>r&&(r=_,o=[h,d])}const a=this.building.planToWorld(t[0],t[1],s),l=this.building.planToWorld(t[0]+o[0],t[1]+o[1],s);return Math.atan2(-(l.x-a.x),-(l.z-a.z))}startPoint(t,e,i){const s=t.polygon,r=(p,g)=>{let _=!1;for(let m=0,f=s.length-1;m<s.length;f=m++)s[m][1]>g!=s[f][1]>g&&p<(s[f][0]-s[m][0])*(g-s[m][1])/(s[f][1]-s[m][1]+1e-12)+s[m][0]&&(_=!_);return _};let o=1/0,a=1/0,l=-1/0,c=-1/0;for(const[p,g]of s)o=Math.min(o,p),a=Math.min(a,g),l=Math.max(l,p),c=Math.max(c,g);const u=i.filter(([p,g,_,m])=>_>o-3&&p<l+3&&m>a-3&&g<c+3);let h=[(o+l)/2,(a+c)/2],d=-1;for(let p=o+.3;p<l;p+=.3)for(let g=a+.3;g<c;g+=.3){if(!r(p,g))continue;let _=1/0;for(const[m,f,M,y]of u){const v=Math.max(m-p,0,p-M),I=Math.max(f-g,0,g-y);if(_=Math.min(_,Math.hypot(v,I)),_<=d)break}_>d&&(d=_,h=[p,g])}return h}setStick(t,e){this.walk.setStick(t,e)}leaveWalk(){this.mode==="walk"&&(this.walk.stop(),this.walkFloorN=null,this.controls.enabled=!0,this.camera.near=.1,this.camera.fov=38,this.camera.rotation.order="XYZ",this.camera.updateProjectionMatrix())}async enterVR(t){if(!this.building||this.mode!=="walk")return;const e=this.building.floor(t),i=e.info.elevation+this.building.slabThickness,s=this.building.collisionRects(t),r=this.building,o=this.walk.pos.clone().setY(i);this.walk.stop(),this.camera.position.set(0,0,0),this.camera.rotation.set(0,0,0),await this.xr.enter(this.scene,o,this.walk.yaw,a=>{const[l,c]=r.worldToPlan(a);if(!e.type.slab.some(([p,g,_,m])=>l>p&&l<_&&c>g&&c<m))return!1;const[h,d]=Af(l,c,.2,s);return Math.hypot(h-l,d-c)<.01})}setShadowRange(t){const e=t==="walk"?22:t==="floor"?70:190,i=this.sun.shadow;i.camera.left=-e,i.camera.right=e,i.camera.top=e,i.camera.bottom=-e,i.normalBias=t==="walk"?.02:t==="floor"?.08:.25,i.bias=t==="walk"?-1e-4:-3e-4,i.camera.updateProjectionMatrix()}moveCamera(t,e,i){if(i<=0){this.camera.position.copy(t),this.controls.target.copy(e),this.controls.update();return}this.tween={from:[this.camera.position.clone(),this.controls.target.clone()],to:[t.clone(),e.clone()],t:0,d:i}}pick(){if(!this.building)return{floor:null,unit:null};if(this.raycaster.setFromCamera(this.pointer,this.camera),this.mode==="building"){const t=this.raycaster.intersectObjects(this.building.pickables(),!1);return{floor:t.length?t[0].object.userData.floor:null,unit:null}}if(this.mode==="floor"){const t=this.raycaster.intersectObjects(this.building.unitPickables(),!1);return{floor:null,unit:t.length?t[0].object.userData.unitId:null}}return{floor:null,unit:null}}processHover(){if(!this.pointerDirty)return;this.pointerDirty=!1;const t=this.pointerInside?this.pick():{floor:null,unit:null};t.floor!==this.lastHoverFloor&&(this.lastHoverFloor=t.floor,this.building?.setHoverFloor(t.floor),this.renderer.domElement.style.cursor=t.floor!==null?"pointer":""),this.mode==="building"&&this.events.hoverFloor(t.floor,this.pointerScreen.x,this.pointerScreen.y),t.unit!==this.lastHoverUnit&&(this.lastHoverUnit=t.unit,this.renderer.domElement.style.cursor=t.unit!==null?"pointer":""),this.mode==="floor"&&this.events.hoverUnit(t.unit,this.pointerScreen.x,this.pointerScreen.y)}hoverFloorFromUI(t){this.mode==="building"&&this.building?.setHoverFloor(t)}applyViewShift(){const t=this.canvasHost.clientWidth,e=this.canvasHost.clientHeight,i=t<760?this.mode==="floor"?.2:this.mode==="building"?.08:0:0;i>0?this.camera.setViewOffset(t,e,0,e*i,t,e):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix()}dispose(){this.renderer.setAnimationLoop(null),window.removeEventListener("resize",this.resize),this.walk.dispose(),this.controls.dispose(),this.renderer.dispose()}}const Ac=new Intl.NumberFormat("ru-RU",{maximumFractionDigits:1,minimumFractionDigits:0}),Hb=new Intl.NumberFormat("ru-RU",{maximumFractionDigits:2,minimumFractionDigits:2}),Vb=new Intl.NumberFormat("ru-RU",{maximumFractionDigits:0});function Ta(n,t=!1){return`${(t?Hb:Ac).format(n)} м²`}function Gb(n){return n===null?"по запросу":n>=1e9?`${Ac.format(n/1e9)} млрд сум`:n>=1e6?`${Ac.format(n/1e6)} млн сум`:`${Vb.format(n)} сум`}function Wb(n){const t=Math.floor(n/60),e=Math.round(n%60);return t===0?`${e} мин`:e===0?`${t} ч`:`${t} ч ${e} мин`}function Js(n){if(!n)return"—";const[t,e,i]=n.split("-");return`${i}.${e}.${t}`}function Xb(n,t,e,i){const s=Math.abs(n)%100,r=s%10;return s>10&&s<20?i:r>1&&r<5?e:r===1?t:i}const $b={class:"top"},Yb={class:"brand glass"},jb={class:"titles"},qb={class:"name"},Kb={class:"dev"},Zb={class:"addr"},Jb=["title"],Qb={class:"actions"},tE=Sn({__name:"TopBar",props:{project:{},mode:{}},emits:["back","data"],setup(n){return(t,e)=>(Tt(),Ct("header",$b,[H("div",Yb,[e[3]||(e[3]=H("div",{class:"mark","aria-hidden":"true"},[H("span"),H("span"),H("span")],-1)),H("div",jb,[H("div",qb,[be("ЖК "+Rt(t.project.name)+" ",1),H("span",Kb,"· "+Rt(t.project.developer.brand),1)]),H("div",Zb,Rt(t.project.district)+" район · ул. Содик Азимова",1)]),e[4]||(e[4]=H("div",{class:"sep"},null,-1)),H("div",{class:"gov",title:`Госреестр строек, объект ${t.project.gov_registry.object_id}, данные на ${ut(Js)(t.project.gov_registry.observed_at)}`},[e[2]||(e[2]=H("span",{class:"pulse"},null,-1)),H("span",null,Rt(t.project.gov_registry.status_ru)+" · срок "+Rt(ut(Js)(t.project.gov_registry.deadline)),1)],8,Jb)]),H("div",Qb,[t.mode!=="building"?(Tt(),Ct("button",{key:0,class:"btn glass-btn",onClick:e[0]||(e[0]=i=>t.$emit("back"))},e[5]||(e[5]=[H("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none"},[H("path",{d:"M4 21V9l8-6 8 6v12h-5v-7H9v7H4z",stroke:"currentColor","stroke-width":"1.8","stroke-linejoin":"round"})],-1),H("span",{class:"lbl"},"Весь дом",-1)]))):Pe("",!0),H("button",{class:"btn glass-btn",onClick:e[1]||(e[1]=i=>t.$emit("data"))},e[6]||(e[6]=[H("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none"},[H("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor","stroke-width":"1.8"}),H("path",{d:"M12 11v6M12 7.5v.5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1),H("span",{class:"lbl"},"О данных",-1)]))])]))}}),bn=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},eE=bn(tE,[["__scopeId","data-v-fb8b886a"]]),nE={class:"rail glass","aria-label":"Этажи"},iE={class:"list scroll-thin"},sE=["onClick","onMouseenter"],rE={class:"n num"},oE={key:0,class:"dots"},aE={key:1,class:"tag"},lE={class:"legend"},cE=Sn({__name:"FloorRail",props:{floors:{},current:{},count:{}},emits:["select","hover"],setup(n){return(t,e)=>(Tt(),Ct("nav",nE,[e[4]||(e[4]=H("div",{class:"head eyebrow"},"Этажи",-1)),H("ul",iE,[(Tt(!0),Ct(ie,null,dn(t.floors,i=>(Tt(),Ct("li",{key:i.n,class:Gn({active:i.n===t.current,dim:i.residential&&i.matching===0}),onClick:s=>t.$emit("select",i.n),onMouseenter:s=>t.$emit("hover",i.n),onMouseleave:e[0]||(e[0]=s=>t.$emit("hover",null))},[H("span",rE,Rt(i.n),1),i.residential?(Tt(),Ct("span",oE,[(Tt(!0),Ct(ie,null,dn(i.statuses,(s,r)=>(Tt(),Ct("i",{key:r,style:Xe({background:ut(Mn)[s]})},null,4))),128))])):(Tt(),Ct("span",aE,Rt(i.n===1?"лобби":"коммерция"),1)),i.residential?(Tt(),Ct("span",{key:2,class:Gn(["free num",{zero:i.available===0}])},Rt(i.available||"—"),3)):Pe("",!0)],42,sE))),128))]),H("div",lE,[H("span",null,[H("i",{style:Xe({background:ut(Mn).available})},null,4),e[1]||(e[1]=be("в продаже"))]),H("span",null,[H("i",{style:Xe({background:ut(Mn).booked})},null,4),e[2]||(e[2]=be("бронь"))]),H("span",null,[H("i",{style:Xe({background:ut(Mn).sold})},null,4),e[3]||(e[3]=be("продана"))])])]))}}),uE=bn(cE,[["__scopeId","data-v-c6145e75"]]),hE=["viewBox"],fE=["x","y","width","height"],dE=["points"],pE=["points"],mE=["x","y","width","height"],gE=["points"],_E=Sn({__name:"MiniPlan",props:{unit:{}},setup(n){const t=n,e=Re(()=>{const s=Qt.project.value.building.floors.find(g=>g.n===t.unit.floor),r=Qt.types.value.get(s.type),o=Qt.units.value.filter(g=>g.floor===t.unit.floor&&g.id!==t.unit.id&&g.polygon),[a,l,c,u]=r.bbox,h=1,d=`${a-h} ${-(u+h)} ${c-a+h*2} ${u-l+h*2}`,p=g=>g.map(([_,m])=>`${_},${-m}`).join(" ");return{vb:d,slab:r.slab,walls:[...r.walls_ext,...r.walls_int],me:p(t.unit.polygon??[]),others:o.map(g=>p(g.polygon))}});return(i,s)=>(Tt(),Ct("svg",{class:"mini",viewBox:e.value.vb,preserveAspectRatio:"xMidYMid meet","aria-label":"Положение квартиры на этаже"},[(Tt(!0),Ct(ie,null,dn(e.value.slab,(r,o)=>(Tt(),Ct("rect",{key:"s"+o,x:r[0],y:-r[3],width:r[2]-r[0],height:r[3]-r[1],class:"slab"},null,8,fE))),128)),(Tt(!0),Ct(ie,null,dn(e.value.others,(r,o)=>(Tt(),Ct("polygon",{key:"o"+o,points:r,class:"other"},null,8,dE))),128)),H("polygon",{points:e.value.me,class:"me",style:Xe({fill:ut(Mn)[i.unit.status]})},null,12,pE),(Tt(!0),Ct(ie,null,dn(e.value.walls,(r,o)=>(Tt(),Ct("rect",{key:"w"+o,x:r[0],y:-r[3],width:r[2]-r[0],height:r[3]-r[1],class:"wall"},null,8,mE))),128)),H("polygon",{points:e.value.me,class:"me-line"},null,8,gE)],8,hE))}}),vE=bn(_E,[["__scopeId","data-v-2cc51240"]]),xE={class:"card"},ME={class:"head"},yE={class:"eyebrow"},SE={class:"num"},bE={class:"grid"},EE={class:"num"},TE={class:"num"},wE={class:"num"},AE={key:0,class:"views"},RE={class:"muted"},CE={class:"price"},PE={class:"actions"},DE={class:"src"},LE=Sn({__name:"UnitCard",props:{unit:{},view:{}},emits:["close","walk","lead"],setup(n){const t=n,e=Re(()=>Qt.project.value.building.floors.find(a=>a.n===t.unit.floor)),i=Re(()=>Qt.project.value.building.floors.length),s=Re(()=>Math.round(e.value.elevation+1.5)),r={"03-21":"21 марта","06-21":"21 июня","12-21":"21 декабря"},o=Re(()=>r[nt.sun.day.slice(5)]??Js(nt.sun.day));return(a,l)=>(Tt(),Ct("div",xE,[H("div",ME,[H("div",null,[H("div",yE,"Квартира № "+Rt(a.unit.number)+" · "+Rt(a.unit.floor)+" этаж",1),H("h2",null,[be(Rt(ut(u_)(a.unit.rooms))+" · ",1),H("span",SE,Rt(ut(Ta)(a.unit.area,!0)),1)])]),H("button",{class:"btn ghost icon","aria-label":"Закрыть",onClick:l[0]||(l[0]=c=>a.$emit("close"))},l[3]||(l[3]=[H("svg",{width:"18",height:"18",viewBox:"0 0 24 24"},[H("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1)]))]),H("div",{class:"status",style:Xe({"--c":ut(Mn)[a.unit.status]})},[l[4]||(l[4]=H("i",null,null,-1)),be(Rt(ut(wr)[a.unit.status]),1)],4),Ue(vE,{unit:a.unit},null,8,["unit"]),H("div",bE,[H("div",null,[l[5]||(l[5]=H("span",null,"Этаж",-1)),H("b",EE,Rt(a.unit.floor)+" из "+Rt(i.value),1)]),H("div",null,[l[6]||(l[6]=H("span",null,"Окна на высоте",-1)),H("b",TE,"≈ "+Rt(s.value)+" м",1)]),H("div",null,[l[7]||(l[7]=H("span",null,"Стороны света",-1)),H("b",null,Rt(a.view?.sidesShort.join(", ")||"—"),1)]),H("div",null,[H("span",null,"Солнце, "+Rt(o.value),1),H("b",wE,Rt(ut(nt).sunMinutes===null?"считаем…":ut(nt).sunMinutes?ut(Wb)(ut(nt).sunMinutes):"нет прямого"),1)])]),a.view?(Tt(),Ct("div",AE,[l[8]||(l[8]=H("div",{class:"eyebrow"},"Что видно из окон",-1)),H("ul",null,[H("li",null,[H("b",null,Rt(a.view.sides.join(" и ")),1)]),(Tt(!0),Ct(ie,null,dn(a.view.highlights,c=>(Tt(),Ct("li",{key:c},Rt(c),1))),128)),H("li",RE,Rt(a.view.openness),1)])])):Pe("",!0),H("div",CE,[H("div",null,[l[9]||(l[9]=H("span",{class:"muted"},"Стоимость",-1)),H("b",null,Rt(ut(Gb)(a.unit.price)),1)]),H("button",{class:"btn small",onClick:l[1]||(l[1]=c=>a.$emit("lead"))},"Узнать цену")]),H("div",PE,[H("button",{class:"btn primary",onClick:l[2]||(l[2]=c=>a.$emit("walk"))},l[10]||(l[10]=[H("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},[H("circle",{cx:"13",cy:"4",r:"2",fill:"currentColor"}),H("path",{d:"M10 21l2-6 3 3v3M8 12l2-4 4 1 2 4 3 1M12 15l-1-6",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"})],-1),be(" Пройти по квартире ")]))]),H("p",DE,"Статус — каталог застройщика на "+Rt(ut(Js)(a.unit.observed_at))+". Площадь по каталогу, стены — по плану этажа.",1)]))}}),IE=bn(LE,[["__scopeId","data-v-f43b5eb6"]]),UE={class:"eyebrow"},NE={class:"big num"},FE={class:"bar"},OE=["title"],BE={class:"stats"},kE={class:"num"},zE={class:"note"},HE={class:"floor-sub muted"},VE={key:0,class:"units"},GE=["onClick","onMouseenter"],WE={class:"no num"},XE={class:"rm"},$E={class:"ar num"},YE={class:"st"},jE={key:1,class:"note"},qE={class:"filters"},KE={class:"row"},ZE=["onClick"],JE={class:"switch"},QE={key:0,class:"found muted"},tT={class:"num"},eT=Sn({__name:"SidePanel",props:{view:{}},emits:["select-unit","walk","lead","back"],setup(n,{emit:t}){const e=t,i=[1,2,3,4,5];function s(l){const c=nt.filter.rooms.indexOf(l);c>=0?nt.filter.rooms.splice(c,1):nt.filter.rooms.push(l)}const r=Re(()=>nt.floor===null?[]:Qt.units.value.filter(l=>l.floor===nt.floor).sort((l,c)=>l.number-c.number)),o=Re(()=>Qt.project.value?.building.floors.find(l=>l.n===nt.floor)??null),a=Re(()=>{const l=o.value;return l?Qt.project.value?.floor_types[l.type]?.label??"":""});return(l,c)=>(Tt(),Ct("aside",{class:Gn(["panel glass scroll-thin",{card:!!ut(nn)}])},[ut(nn)?(Tt(),ni(IE,{key:0,unit:ut(nn),view:l.view,onClose:c[0]||(c[0]=u=>e("select-unit",null)),onWalk:c[1]||(c[1]=u=>e("walk")),onLead:c[2]||(c[2]=u=>e("lead"))},null,8,["unit","view"])):(Tt(),Ct(ie,{key:1},[H("div",UE,Rt(ut(nt).floor===null?"Квартиры в доме":`${ut(nt).floor} этаж`),1),ut(nt).floor===null?(Tt(),Ct(ie,{key:0},[H("div",NE,[be(Rt(ut(Vi).by.available)+" ",1),H("span",null,Rt(ut(Xb)(ut(Vi).by.available,"квартира","квартиры","квартир"))+" в продаже",1)]),H("div",FE,[(Tt(),Ct(ie,null,dn(["available","booked","sold","unavailable"],u=>H("i",{key:u,style:Xe({flex:ut(Vi).by[u],background:ut(Mn)[u]}),title:`${ut(wr)[u]}: ${ut(Vi).by[u]}`},null,12,OE)),64))]),H("div",BE,[(Tt(),Ct(ie,null,dn(["available","booked","sold"],u=>H("div",{key:u},[H("i",{style:Xe({background:ut(Mn)[u]})},null,4),be(Rt(ut(wr)[u])+" ",1),H("b",kE,Rt(ut(Vi).by[u]),1)])),64))]),H("p",zE,"Всего "+Rt(ut(Vi).total)+" квартир в каталоге застройщика. Статусы на "+Rt(ut(Js)(ut(Qt).observedAt.value))+".",1)],64)):(Tt(),Ct(ie,{key:1},[H("div",HE,Rt(a.value),1),r.value.length?(Tt(),Ct("ul",VE,[(Tt(!0),Ct(ie,null,dn(r.value,u=>(Tt(),Ct("li",{key:u.id,class:Gn({off:!ut(va)(u,ut(nt).filter),hover:ut(nt).hoverUnit===u.id}),onClick:h=>e("select-unit",u.id),onMouseenter:h=>ut(nt).hoverUnit=u.id,onMouseleave:c[3]||(c[3]=h=>ut(nt).hoverUnit=null)},[H("span",WE,"№ "+Rt(u.number),1),H("span",XE,Rt(u.rooms)+"-комн.",1),H("span",$E,Rt(ut(Ta)(u.area)),1),H("span",YE,[H("i",{style:Xe({background:ut(Mn)[u.status]})},null,4),be(Rt(ut(wr)[u.status]),1)])],42,GE))),128))])):(Tt(),Ct("p",jE,"На этом этаже квартир нет — коммерческие помещения и лобби. Стены показаны по плану застройщика."))],64)),H("div",qE,[c[8]||(c[8]=H("div",{class:"eyebrow"},"Комнат",-1)),H("div",KE,[(Tt(),Ct(ie,null,dn(i,u=>H("button",{key:u,class:Gn(["seg",{on:ut(nt).filter.rooms.includes(u)}]),onClick:h=>s(u)},Rt(u===5?"5+":u),11,ZE)),64))]),H("label",JE,[$o(H("input",{"onUpdate:modelValue":c[4]||(c[4]=u=>ut(nt).filter.onlyAvailable=u),type:"checkbox"},null,512),[[t_,ut(nt).filter.onlyAvailable]]),c[5]||(c[5]=H("span",{class:"knob"},null,-1)),c[6]||(c[6]=be(" Только в продаже "))]),ut(nt).filter.rooms.length||ut(nt).filter.onlyAvailable?(Tt(),Ct("div",QE,[c[7]||(c[7]=be(" Подходит: ")),H("b",tT,Rt(ut(Vi).matching),1)])):Pe("",!0)])],64))],2))}}),nT=bn(eT,[["__scopeId","data-v-5e218a81"]]),iT={class:"sun glass"},sT={class:"days"},rT=["onClick"],oT={class:"t num"},aT=Sn({__name:"SunBar",setup(n){const t=new Date().getFullYear(),e=Re(()=>[{label:"Сегодня",day:s()},{label:"21 марта",day:`${t}-03-21`},{label:"21 июня",day:`${t}-06-21`},{label:"21 дек",day:`${t}-12-21`}]),i=Re(()=>{const r=Math.floor(nt.sun.hour),o=Math.round((nt.sun.hour-r)*60);return`${String(r).padStart(2,"0")}:${String(o).padStart(2,"0")}`});function s(){const r=new Date;return`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`}return(r,o)=>(Tt(),Ct("div",iT,[o[1]||(o[1]=H("svg",{class:"ico",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},[H("circle",{cx:"12",cy:"12",r:"4.5",fill:"currentColor"}),H("path",{d:"M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round"})],-1)),H("div",sT,[(Tt(!0),Ct(ie,null,dn(e.value,a=>(Tt(),Ct("button",{key:a.label,class:Gn({on:ut(nt).sun.day===a.day}),onClick:l=>ut(nt).sun.day=a.day},Rt(a.label),11,rT))),128))]),$o(H("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>ut(nt).sun.hour=a),type:"range",min:"5",max:"21",step:"0.25","aria-label":"Время суток"},null,512),[[Ul,ut(nt).sun.hour,void 0,{number:!0}]]),H("span",oT,Rt(i.value),1)]))}}),lT=bn(aT,[["__scopeId","data-v-1d7ba8d5"]]),cT={class:"hud"},uT={class:"info glass"},hT={key:0,class:"what"},fT={key:0,class:"keys glass"},dT={key:2,class:"look-hint"},pT=Sn({__name:"WalkHud",props:{xrSupported:{type:Boolean}},emits:["exit","vr","stick"],setup(n,{emit:t}){const e=t,i=matchMedia("(pointer: coarse)").matches,s=Bs(),r=Bs({x:0,y:0});let o=null;function a(u){o=u.pointerId,u.target.setPointerCapture(u.pointerId),l(u)}function l(u){if(o!==u.pointerId||!s.value)return;const h=s.value.getBoundingClientRect(),d=h.width/2;let p=(u.clientX-(h.left+d))/d,g=(u.clientY-(h.top+d))/d;const _=Math.hypot(p,g);_>1&&(p/=_,g/=_),r.value={x:p,y:g},e("stick",p,g)}function c(u){o===u.pointerId&&(o=null,r.value={x:0,y:0},e("stick",0,0))}return pa(()=>e("stick",0,0)),(u,h)=>(Tt(),Ct("div",cT,[H("div",uT,[H("button",{class:"btn small",onClick:h[0]||(h[0]=d=>u.$emit("exit"))},h[2]||(h[2]=[H("svg",{width:"14",height:"14",viewBox:"0 0 24 24"},[H("path",{d:"M15 6l-6 6 6 6",stroke:"currentColor","stroke-width":"2.2",fill:"none","stroke-linecap":"round"})],-1),be(" Выйти ")])),ut(nn)?(Tt(),Ct("div",hT,[H("b",null,"№ "+Rt(ut(nn).number),1),be(" · "+Rt(ut(nn).rooms)+"-комн. · "+Rt(ut(Ta)(ut(nn).area)),1)])):Pe("",!0),u.xrSupported?(Tt(),Ct("button",{key:1,class:"btn small primary",onClick:h[1]||(h[1]=d=>u.$emit("vr"))},"Войти в VR")):Pe("",!0)]),ut(i)?(Tt(),Ct("div",{key:1,ref_key:"base",ref:s,class:"stick",onPointerdown:a,onPointermove:l,onPointerup:c,onPointercancel:c},[H("div",{class:"knob",style:Xe({transform:`translate(${r.value.x*34}px, ${r.value.y*34}px)`})},null,4)],544)):(Tt(),Ct("div",fT,h[3]||(h[3]=[mg("<span data-v-3f71aa54><kbd data-v-3f71aa54>W</kbd><kbd data-v-3f71aa54>A</kbd><kbd data-v-3f71aa54>S</kbd><kbd data-v-3f71aa54>D</kbd> ходьба</span><span data-v-3f71aa54><kbd data-v-3f71aa54>Shift</kbd> быстрее</span><span data-v-3f71aa54>мышь — обзор</span><span data-v-3f71aa54><kbd data-v-3f71aa54>Esc</kbd> выйти</span>",4)]))),ut(i)?(Tt(),Ct("div",dT,"Ведите пальцем по экрану, чтобы осмотреться")):Pe("",!0)]))}}),mT=bn(pT,[["__scopeId","data-v-3f71aa54"]]),gT={key:0},_T={key:1},vT=Sn({__name:"HoverTip",setup(n){const t=Re(()=>nt.mode==="building"&&nt.hoverFloor!==null?Fl.value.find(i=>i.n===nt.hoverFloor):null),e=Re(()=>nt.mode==="floor"&&nt.unitId!==nt.hoverUnit?f_.value:null);return(i,s)=>t.value||e.value?(Tt(),Ct("div",{key:0,class:"tip glass",style:Xe({left:`${ut(nt).tip.x+16}px`,top:`${ut(nt).tip.y+16}px`})},[t.value?(Tt(),Ct(ie,{key:0},[H("b",null,Rt(t.value.n)+" этаж",1),t.value.residential?(Tt(),Ct("span",gT,"в продаже "+Rt(t.value.available)+" из "+Rt(t.value.total),1)):(Tt(),Ct("span",_T,Rt(t.value.n===1?"лобби и коммерция":"коммерция"),1))],64)):e.value?(Tt(),Ct(ie,{key:1},[H("b",null,"№ "+Rt(e.value.number)+" · "+Rt(e.value.rooms)+"-комн. · "+Rt(ut(Ta)(e.value.area)),1),H("span",{style:Xe({color:ut(Mn)[e.value.status]})},Rt(ut(wr)[e.value.status]),5)],64)):Pe("",!0)],4)):Pe("",!0)}}),xT=bn(vT,[["__scopeId","data-v-d46b0105"]]),MT={class:"sheet glass scroll-thin",role:"dialog","aria-label":"О данных"},yT={class:"head"},ST={class:"muted"},bT={class:"asm"},ET={class:"disc"},TT=Sn({__name:"DataSheet",emits:["close"],setup(n){return(t,e)=>(Tt(),Ct("div",{class:"veil",onClick:e[1]||(e[1]=Nl(i=>t.$emit("close"),["self"]))},[H("div",MT,[H("div",yT,[e[3]||(e[3]=H("div",null,[H("div",{class:"eyebrow"},"О данных"),H("h2",null,"Как собран этот макет")],-1)),H("button",{class:"btn ghost icon","aria-label":"Закрыть",onClick:e[0]||(e[0]=i=>t.$emit("close"))},e[2]||(e[2]=[H("svg",{width:"18",height:"18",viewBox:"0 0 24 24"},[H("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1)]))]),e[5]||(e[5]=H("ol",{class:"how"},[H("li",null,[H("b",null,"Место и этажность"),be(" — госпортал строек Shaffof qurilish: координаты, 30 этажей, заказчик, срок.")]),H("li",null,[H("b",null,"Стены и окна"),be(" — извлечены программой из поэтажных планов застройщика, без ручной отрисовки. Каждая квартира — объект с номером из каталога.")]),H("li",null,[H("b",null,"Статусы"),be(" — каталог застройщика. В рабочей версии обновляются сами из CRM.")]),H("li",null,[H("b",null,"Окружение и вид из окон"),be(" — OpenStreetMap; солнце считается по координатам и дате.")])],-1)),e[6]||(e[6]=H("div",{class:"eyebrow"},"Источники",-1)),H("table",null,[(Tt(!0),Ct(ie,null,dn(ut(Qt).project.value.sources,i=>(Tt(),Ct("tr",{key:i.what},[H("td",null,Rt(i.what),1),H("td",null,[be(Rt(i.source),1),e[4]||(e[4]=H("br",null,null,-1)),H("span",ST,"на "+Rt(ut(Js)(i.date)),1)])]))),128))]),e[7]||(e[7]=H("div",{class:"eyebrow"},"Условности демо",-1)),H("ul",bT,[(Tt(!0),Ct(ie,null,dn(ut(Qt).project.value.assumptions,i=>(Tt(),Ct("li",{key:i},Rt(i),1))),128))]),H("p",ET,Rt(ut(Qt).project.value.disclaimer)+" "+Rt(ut(Qt).context.value?.attribution),1)])]))}}),wT=bn(TT,[["__scopeId","data-v-263439c4"]]),AT={class:"eyebrow"},RT=Sn({__name:"LeadDialog",emits:["close"],setup(n){const t=Bs(!1),e=Bs(""),i=Bs("+998 ");return(s,r)=>(Tt(),Ct("div",{class:"veil",onClick:r[4]||(r[4]=Nl(o=>s.$emit("close"),["self"]))},[H("form",{class:"dlg glass",onSubmit:r[3]||(r[3]=Nl(o=>t.value=!0,["prevent"]))},[t.value?(Tt(),Ct(ie,{key:1},[r[10]||(r[10]=H("h2",null,"Так это работает в рабочей версии",-1)),r[11]||(r[11]=H("p",{class:"txt"},"Заявка с номером квартиры, этажом и тем, что человек смотрел, за секунды попадает в CRM застройщика (amoCRM, Bitrix24, Uysot) и менеджеру в Telegram.",-1)),H("button",{class:"btn",type:"button",onClick:r[2]||(r[2]=o=>s.$emit("close"))},"Понятно")],64)):(Tt(),Ct(ie,{key:0},[H("div",AT,"Квартира № "+Rt(ut(nn)?.number),1),r[7]||(r[7]=H("h2",null,"Узнать цену и записаться на показ",-1)),H("label",null,[r[5]||(r[5]=be("Имя")),$o(H("input",{"onUpdate:modelValue":r[0]||(r[0]=o=>e.value=o),required:"",autocomplete:"name"},null,512),[[Ul,e.value]])]),H("label",null,[r[6]||(r[6]=be("Телефон")),$o(H("input",{"onUpdate:modelValue":r[1]||(r[1]=o=>i.value=o),required:"",inputmode:"tel",autocomplete:"tel"},null,512),[[Ul,i.value]])]),r[8]||(r[8]=H("button",{class:"btn primary",type:"submit"},"Отправить",-1)),r[9]||(r[9]=H("p",{class:"note"},"Демо: заявка никуда не уходит и не сохраняется.",-1))],64))],32)]))}}),CT=bn(RT,[["__scopeId","data-v-1ec83682"]]),PT={class:"loader"},DT={class:"box"},LT={class:"bar"},IT={key:0,class:"err"},UT=Sn({__name:"LoaderScreen",props:{progress:{},error:{}},setup(n){return(t,e)=>(Tt(),Ct("div",PT,[H("div",DT,[e[0]||(e[0]=H("div",{class:"mark"},[H("span"),H("span"),H("span")],-1)),e[1]||(e[1]=H("div",{class:"t"},"Собираем дом из открытых данных",-1)),e[2]||(e[2]=H("div",{class:"steps muted"},"госреестр · поэтажные планы · OpenStreetMap",-1)),H("div",LT,[H("i",{style:Xe({width:`${Math.round(t.progress*100)}%`})},null,4)]),t.error?(Tt(),Ct("div",IT,"Не удалось загрузить: "+Rt(t.error),1)):Pe("",!0)])]))}}),NT=bn(UT,[["__scopeId","data-v-8895895e"]]),FT={key:0,class:"hint glass"},Do="c1",OT=Sn({__name:"App",setup(n){const t=Bs();let e=null;zc(async()=>{e=new zb(t.value,{hoverFloor:(f,M,y)=>{nt.hoverFloor=f,nt.tip={x:M,y}},clickFloor:f=>i(f),hoverUnit:(f,M,y)=>{nt.hoverUnit=f,nt.tip={x:M,y}},clickUnit:f=>s(f),interacted:()=>nt.touched=!0,xrEnded:()=>nt.xrActive=!1});try{nt.progress=.05;const[f,M,y]=await Promise.all([eo.project(Do),eo.units(Do),eo.context(Do)]);nt.progress=.35;const v=[...new Set(f.building.floors.map(A=>A.type))],I=new Map;let C=0;await Promise.all(v.map(async A=>{I.set(A,await eo.floorType(Do,A)),C++,nt.progress=.35+.5*(C/v.length)})),Qt.project.value=f,Qt.units.value=M.items,Qt.context.value=y,Qt.types.value=I,Qt.observedAt.value=M.observed_at,e.load(f,y,I),e.setSun(nt.sun.day,nt.sun.hour),nt.progress=1,nt.xrSupported=await e.xr.checkSupport(),setTimeout(()=>nt.loading=!1,250)}catch(f){nt.error=f instanceof Error?f.message:String(f)}window.addEventListener("keydown",c)}),pa(()=>{window.removeEventListener("keydown",c),e?.dispose()});function i(f){e&&(nt.floor=f,nt.unitId=null,nt.hoverUnit=null,nt.hoverFloor=null,nt.mode="floor",e.showFloor(f,Qt.units.value,nt.filter))}function s(f){if(f===null){nt.unitId=null;return}const M=Qt.units.value.find(y=>y.id===f);M&&((nt.floor!==M.floor||nt.mode!=="floor")&&i(M.floor),nt.unitId=f)}function r(){nt.mode="building",nt.floor=null,nt.unitId=null,nt.hoverUnit=null,e?.flyToBuilding()}function o(){const f=nn.value;!e||!f||(nt.mode="walk",e.enterWalk(f,Qt.units.value,u.value))}function a(){const f=nn.value;e&&(nt.xrActive||(f?(nt.mode="floor",e.showFloor(f.floor,Qt.units.value,nt.filter),e.styleUnits(nt.filter,null,f.id)):r()))}async function l(){const f=nn.value;if(!(!e||!f))try{nt.xrActive=!0,await e.enterVR(f.floor)}catch{nt.xrActive=!1}}function c(f){f.key==="Escape"&&(nt.showLead||nt.showData?(nt.showLead=!1,nt.showData=!1):nt.mode==="walk"?a():nt.unitId!==null?nt.unitId=null:nt.mode==="floor"&&r())}const u=Re(()=>{const f=nn.value,M=Qt.project.value;if(!f?.polygon||!M)return[];const y=M.building.floors.find(I=>I.n===f.floor),v=y&&Qt.types.value.get(y.type);return v?__(v,f.polygon,M.building.azimuth_deg):[]}),h=Re(()=>{const f=nn.value,M=Qt.project.value,y=Qt.context.value;if(!f||!M||!y||!u.value.length)return null;const v=M.building.floors.find(I=>I.n===f.floor);return M_(u.value,y,M.building.azimuth_deg,v.elevation+1.5)});let d=0;function p(){clearTimeout(d),nt.sunMinutes=null;const f=nn.value,M=Qt.project.value;!f||!M||!e||(d=window.setTimeout(()=>{const y=M.building.floors.find(v=>v.n===f.floor);nt.sunMinutes=e.sunMinutes(u.value,y.elevation,nt.sun.day,M.building.azimuth_deg)},60))}ns(()=>[nt.filter.rooms.slice(),nt.filter.onlyAvailable,nt.hoverUnit,nt.unitId],()=>{e?.styleUnits(nt.filter,nt.hoverUnit,nt.unitId)}),ns(()=>nt.unitId,p),ns(()=>nt.sun.day,p),ns(()=>[nt.sun.day,nt.sun.hour],([f,M])=>e?.setSun(f,M));function g(f){e?.hoverFloorFromUI(f)}function _(f,M){e?.setStick(f,M)}const m=Re(()=>Fl.value.length);return(f,M)=>(Tt(),Ct("div",{class:Gn(["app",`mode-${ut(nt).mode}`])},[H("div",{ref_key:"host",ref:t,class:"stage"},null,512),!ut(nt).loading&&ut(Qt).project.value?(Tt(),Ct(ie,{key:0},[Ue(eE,{project:ut(Qt).project.value,mode:ut(nt).mode,onBack:r,onData:M[0]||(M[0]=y=>ut(nt).showData=!0)},null,8,["project","mode"]),ut(nt).mode!=="walk"?(Tt(),ni(uE,{key:0,floors:ut(Fl),current:ut(nt).floor,count:m.value,onSelect:i,onHover:g},null,8,["floors","current","count"])):Pe("",!0),ut(nt).mode!=="walk"?(Tt(),ni(nT,{key:1,view:h.value,onSelectUnit:s,onWalk:o,onLead:M[1]||(M[1]=y=>ut(nt).showLead=!0),onBack:r},null,8,["view"])):Pe("",!0),ut(nt).xrActive?Pe("",!0):(Tt(),ni(lT,{key:2})),ut(nt).mode==="walk"?(Tt(),ni(mT,{key:3,"xr-supported":ut(nt).xrSupported,onExit:a,onVr:l,onStick:_},null,8,["xr-supported"])):Pe("",!0),Ue(xT),Ue(Ig,{name:"fade"},{default:rd(()=>[ut(nt).mode==="building"&&!ut(nt).touched?(Tt(),Ct("div",FT," Наведите на этаж и нажмите — откроется план с квартирами ")):Pe("",!0)]),_:1}),ut(nt).showData?(Tt(),ni(wT,{key:4,onClose:M[2]||(M[2]=y=>ut(nt).showData=!1)})):Pe("",!0),ut(nt).showLead?(Tt(),ni(CT,{key:5,onClose:M[3]||(M[3]=y=>ut(nt).showLead=!1)})):Pe("",!0)],64)):Pe("",!0),ut(nt).loading?(Tt(),ni(NT,{key:1,progress:ut(nt).progress,error:ut(nt).error},null,8,["progress","error"])):Pe("",!0)],2))}}),BT=bn(OT,[["__scopeId","data-v-261a245e"]]);o_(BT).mount("#app");
