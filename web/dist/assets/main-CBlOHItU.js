import{r as nf,G as Kn,c as Yt,y as ql,d as Ye,u as B,o as Q,b as st,e as P,F as Qt,k as Se,t as it,i as Jt,_ as qe,h as jt,f as wi,l as $e,n as De,C as Cn,w as Ei,m as Tr,q as On,B as jl,v as Ar,a as ai,H as sf,j as Wa,S as of,x as Rn,A as Yr,z as rf,p as af,T as lf,E as cf}from"./client-24TZGoJl.js";import{m as kr,g as Wu,b as Je,s as Ss,h as hf,l as co,i as Yi,j as Cr,r as uf,c as Ls,a as ho,f as xo,p as Rr,K as Xa,d as $a,S as df,n as ff,k as pf,e as mf}from"./theme-bkqPVC5k.js";const Ya=[{id:"winter",label:"Зима",md:"12-21",dateLabel:"21 дек",hint:"Солнце на 21 декабря — самый короткий день года"},{id:"spring",label:"Весна",md:"03-21",dateLabel:"21 мар",hint:"Солнце на 21 марта — весеннее равноденствие"},{id:"summer",label:"Лето",md:"06-21",dateLabel:"21 июн",hint:"Солнце на 21 июня — самый длинный день года"},{id:"autumn",label:"Осень",md:"09-23",dateLabel:"23 сен",hint:"Солнце на 23 сентября — осеннее равноденствие"}],gf=[{id:"clear",label:"Ясно"},{id:"cloudy",label:"Облачно"},{id:"rain",label:"Дождь"},{id:"snow",label:"Снег"}];function Xu(i,t=new Date().getFullYear()){return`${t}-${Ya.find(e=>e.id===i).md}`}function vf(i){const t=i.getMonth()+1;return t===12||t<=2?"winter":t<=5?"spring":t<=8?"summer":"autumn"}const _f={clear:0,cloudy:.6,rain:1,snow:.92},Io=[[0,.34],[1,.2],[3,.1],[5,.14],[6.5,.42],[8,.3],[12,.22],[17,.55],[19,.78],[21.5,.8],[23,.55],[24,.34]];function xf(i){const t=(i%24+24)%24;for(let e=1;e<Io.length;e++){const[n,s]=Io[e],[o,r]=Io[e-1];if(t<=n)return r+(s-r)*(t-o)/(n-o)}return Io[0][1]}const Oc=vf(new Date),D=nf({loading:!0,progress:0,error:"",mode:"building",floor:null,unitId:null,hoverFloor:null,hoverUnit:null,tip:{x:0,y:0},filter:{rooms:[],onlyAvailable:!1},sun:{day:Xu(Oc),hour:15},atmo:{season:Oc,weather:"clear",playing:!1,sunPath:!1},interior:"scandi",xrSupported:!1,xrActive:!1,touched:!1,showData:!1,showLead:!1,sunHours:null,blockId:null,hoverBlock:null,blockFloor:1,viewSide:0,blockSun:null,places:{on:!0,all:!1,cats:["metro","shop","bank","food","edu","health","sport","auto"]},parking:{level:null,spotId:null,hoverSpot:null,filter:{kinds:[],onlyAvailable:!1}}}),Ot={project:Kn(null),units:Kn([]),context:Kn(null),types:Kn(new Map),observedAt:Kn(""),projects:Kn([]),blockLayouts:Kn(new Map),aptTypes:Kn(new Map),parking:Kn(null)},pn=Yt(()=>Ot.project.value?.building.mode==="massing"),yo=Yt(()=>pn.value&&D.blockId?Ot.blockLayouts.value.get(D.blockId)??null:null),Ti=Yt(()=>yo.value?.floors??(pn.value?[]:Ot.project.value?.building.floors??[])),qr=Yt(()=>yo.value?.azimuth_deg??Ot.project.value?.building.azimuth_deg??0);function Zl(i){return yo.value?yo.value.floor_types[i]:Ot.types.value.get(i)}const Hn=Yt(()=>pn.value?Ot.units.value.filter(i=>i.block===D.blockId):Ot.units.value),$u=Yt(()=>Ot.units.value.some(i=>i.test)),Mo=Yt(()=>Ot.units.value.some(i=>i.source==="crm")),qa=Yt(()=>(Ot.parking.value?.levels.length??0)>0),kc=Yt(()=>Ot.parking.value?.levels.find(i=>i.level===D.parking.level)??null),Ge=Yt(()=>Ot.parking.value?.spots.find(i=>i.id===D.parking.spotId)??null),yf=Yt(()=>Ot.parking.value?.spots.find(i=>i.id===D.parking.hoverSpot)??null),Pe=Yt(()=>Ot.project.value?.building.blocks?.find(i=>i.id===D.blockId)??null),ja=Yt(()=>{const i=Ti.value;if(!i.length)return[];const t=new Map;for(const e of Hn.value)t.has(e.floor)||t.set(e.floor,[]),t.get(e.floor).push(e);return[...i].reverse().map(e=>{const n=(t.get(e.n)??[]).sort((s,o)=>s.number-o.number);return{n:e.n,residential:n.length>0,total:n.length,available:n.filter(s=>s.status==="available").length,matching:n.filter(s=>kr(s,D.filter)).length,statuses:n.map(s=>s.status)}})}),sn=Yt(()=>Hn.value.find(i=>i.id===D.unitId)??null),Mf=Yt(()=>Hn.value.find(i=>i.id===D.hoverUnit)??null),pi=Yt(()=>{const i=Ot.units.value,t={available:0,booked:0,sold:0,unavailable:0};for(const e of i)t[e.status]++;return{total:i.length,by:t,matching:i.filter(e=>kr(e,D.filter)).length}}),Yu=Math.PI/180;function Pr(i,t,e){const n=e*Yu;return[i*Math.cos(n)+t*Math.sin(n),-i*Math.sin(n)+t*Math.cos(n)]}function Sf(i,t,e){const[n,s]=Pr(i,t,e);return(Math.atan2(n,s)/Yu+360)%360}const bf=["север","северо-восток","восток","юго-восток","юг","юго-запад","запад","северо-запад"],wf=["С","СВ","В","ЮВ","Ю","ЮЗ","З","СЗ"];function Bc(i,t=!1){const e=Math.round((i%360+360)%360/45)%8;return t?wf[e]:bf[e]}function zc(i,t){const e=((i-t)%360+540)%360-180;return Math.abs(e)}function Ef(i,t,e){const n=[];for(const s of i.outline)for(const o of Af(s,1.5)){const[r,a,l,c,h,u]=o,d=(r+l)/2,f=(a+c)/2;Wu(d-h*.3,f-u*.3,t)>.8&&!Tf(d-h*.6,f-u*.6,t)||n.push({mid:[d,f],normal:[h,u],azimuth:Sf(h,u,e),length:Math.hypot(l-r,c-a)})}return n}function Tf(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++)e[s][1]>t!=e[o][1]>t&&i<(e[o][0]-e[s][0])*(t-e[s][1])/(e[o][1]-e[s][1]+1e-12)+e[s][0]&&(n=!n);return n}function Af(i,t){const[e,n,s,o,r,a]=i,l=Math.hypot(s-e,o-n),c=Math.max(1,Math.round(l/t)),h=[];for(let u=0;u<c;u++){const d=u/c,f=(u+1)/c;h.push([e+(s-e)*d,n+(o-n)*d,e+(s-e)*f,n+(o-n)*f,r,a])}return h}function Cf(i,t,e,n,s=[0,0]){const o=new Map;for(const v of i){const g=Bc(v.azimuth);o.set(g,(o.get(g)??0)+v.length)}const r=[...o.entries()].filter(([,v])=>v>=1.2).sort((v,g)=>g[1]-v[1]).map(([v])=>v),a=Pf(i.map(v=>Math.round(v.azimuth/15)*15)),l=new Map;for(const v of t.pois){const g=Math.hypot(v.x-s[0],v.y-s[1]);if(g>1500)continue;const m=(Math.atan2(v.x-s[0],v.y-s[1])*180/Math.PI+360)%360,M=Math.atan2(v.r,g)*180/Math.PI;if(a.some(x=>zc(x,m)<=35+M)){const x=Rf(v),_=Math.max(0,g-v.r*.5);(!l.has(x)||l.get(x)>_)&&l.set(x,_)}}const c=[...l.entries()].sort((v,g)=>v[1]-g[1]).slice(0,3).map(([v,g])=>`${v} — ${g<1e3?`${Math.round(g/10)*10} м`:`${(g/1e3).toFixed(1).replace(".",",")} км`}`);let h=1/0,u=!1;const d=i.length?Pr(i[0].mid[0],i[0].mid[1],e):[0,0],f=[d[0]+s[0],d[1]+s[1]];for(const v of t.buildings){const g=v.p.reduce((x,_)=>[x[0]+_[0]/v.p.length,x[1]+_[1]/v.p.length],[0,0]),m=Math.hypot(g[0]-f[0],g[1]-f[1]);if(m>250)continue;const M=(Math.atan2(g[0]-f[0],g[1]-f[1])*180/Math.PI+360)%360;a.some(x=>zc(x,M)<=40)&&v.h>=n-1&&(u=!0,h=Math.min(h,m))}const p=u?`напротив дом выше уровня окон, ~${Math.round(h/10)*10} м`:`окна выше соседних домов (${Math.round(n)} м над землёй)`;return{sides:r,sidesShort:r.map(v=>Bc(Df(v),!0)),highlights:c,openness:p}}function Rf(i){return i.kind==="water"?i.name:i.name==="парк"?"парк":`парк «${i.name}»`}function Pf(i){return[...new Set(i)]}function Df(i){return["север","северо-восток","восток","юго-восток","юг","юго-запад","запад","северо-запад"].indexOf(i)*45}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kl="170",As={ROTATE:0,DOLLY:1,PAN:2},bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lf=0,Hc=1,If=2,qu=1,ju=2,oi=3,Ci=0,Qe=1,we=2,We=0,Cs=1,Dr=2,Vc=3,Gc=4,Zu=5,Dn=100,Uf=101,Nf=102,Ff=103,Of=104,so=200,kf=201,Bf=202,zf=203,Za=204,Ka=205,Ja=206,Hf=207,Qa=208,Vf=209,Gf=210,Wf=211,Xf=212,$f=213,Yf=214,tl=0,el=1,nl=2,Is=3,il=4,sl=5,ol=6,rl=7,Ku=0,qf=1,jf=2,Ai=0,Ju=1,Qu=2,td=3,Jl=4,Zf=5,ed=6,nd=7,id=300,Us=301,Ns=302,al=303,ll=304,Br=306,Wn=1e3,Vi=1001,cl=1002,rn=1003,Kf=1004,Uo=1005,Vn=1006,jr=1007,Gi=1008,Xn=1009,sd=1010,od=1011,So=1012,Ql=1013,qi=1014,Gn=1015,Mn=1016,tc=1017,ec=1018,ji=1020,rd=35902,ad=1021,ld=1022,yn=1023,cd=1024,hd=1025,Rs=1026,Zi=1027,nc=1028,ic=1029,ud=1030,sc=1031,oc=1033,vr=33776,_r=33777,xr=33778,yr=33779,hl=35840,ul=35841,dl=35842,fl=35843,pl=36196,ml=37492,gl=37496,vl=37808,_l=37809,xl=37810,yl=37811,Ml=37812,Sl=37813,bl=37814,wl=37815,El=37816,Tl=37817,Al=37818,Cl=37819,Rl=37820,Pl=37821,Mr=36492,Dl=36494,Ll=36495,dd=36283,Il=36284,Ul=36285,Nl=36286,Jf=3200,Qf=3201,rc=0,tp=1,Si="",Xe="srgb",ks="srgb-linear",zr="linear",xe="srgb",os=7680,Wc=519,ep=512,np=513,ip=514,fd=515,sp=516,op=517,rp=518,ap=519,Xc=35044,$c="300 es",li=2e3,Lr=2001;class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yc=1234567;const uo=Math.PI/180,bo=180/Math.PI;function Qi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function Fe(i,t,e){return Math.max(t,Math.min(e,i))}function ac(i,t){return(i%t+t)%t}function lp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function cp(i,t,e){return i!==t?(e-i)/(t-i):0}function fo(i,t,e){return(1-e)*i+e*t}function hp(i,t,e,n){return fo(i,t,1-Math.exp(-e*n))}function up(i,t=1){return t-Math.abs(ac(i,t*2)-t)}function dp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function fp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function pp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function mp(i,t){return i+Math.random()*(t-i)}function gp(i){return i*(.5-Math.random())}function vp(i){i!==void 0&&(Yc=i);let t=Yc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _p(i){return i*uo}function xp(i){return i*bo}function yp(i){return(i&i-1)===0&&i!==0}function Mp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Sp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bp(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),u=o((t-n)/2),d=r((t-n)/2),f=o((n-t)/2),p=r((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ms(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const xn={DEG2RAD:uo,RAD2DEG:bo,generateUUID:Qi,clamp:Fe,euclideanModulo:ac,mapLinear:lp,inverseLerp:cp,lerp:fo,damp:hp,pingpong:up,smoothstep:dp,smootherstep:fp,randInt:pp,randFloat:mp,randFloatSpread:gp,seededRandom:vp,degToRad:_p,radToDeg:xp,isPowerOfTwo:yp,ceilPowerOfTwo:Mp,floorPowerOfTwo:Sp,setQuaternionFromProperEuler:bp,normalize:en,denormalize:Ms};class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class re{constructor(t,e,n,s,o,r,a,l,c){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],v=s[0],g=s[3],m=s[6],M=s[1],x=s[4],_=s[7],U=s[2],R=s[5],E=s[8];return o[0]=r*v+a*M+l*U,o[3]=r*g+a*x+l*R,o[6]=r*m+a*_+l*E,o[1]=c*v+h*M+u*U,o[4]=c*g+h*x+u*R,o[7]=c*m+h*_+u*E,o[2]=d*v+f*M+p*U,o[5]=d*g+f*x+p*R,o[8]=d*m+f*_+p*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,d=a*l-h*o,f=c*o-r*l,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*r)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*o-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(r*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Zr.makeScale(t,e)),this}rotate(t){return this.premultiply(Zr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zr=new re;function pd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wp(){const i=Ir("canvas");return i.style.display="block",i}const qc={};function oo(i){i in qc||(qc[i]=!0,console.warn(i))}function Ep(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Tp(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ap(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const de={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===xe&&(i.r=ci(i.r),i.g=ci(i.g),i.b=ci(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===xe&&(i.r=Ps(i.r),i.g=Ps(i.g),i.b=Ps(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Si?zr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const jc=[.64,.33,.3,.6,.15,.06],Zc=[.2126,.7152,.0722],Kc=[.3127,.329],Jc=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qc=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);de.define({[ks]:{primaries:jc,whitePoint:Kc,transfer:zr,toXYZ:Jc,fromXYZ:Qc,luminanceCoefficients:Zc,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:jc,whitePoint:Kc,transfer:xe,toXYZ:Jc,fromXYZ:Qc,luminanceCoefficients:Zc,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}});let rs;class Cp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{rs===void 0&&(rs=Ir("canvas")),rs.width=t.width,rs.height=t.height;const n=rs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ir("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=ci(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rp=0;class md{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Qi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Kr(s[r].image)):o.push(Kr(s[r]))}else o=Kr(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pp=0;class tn extends Ji{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,n=Vi,s=Vi,o=Vn,r=Gi,a=yn,l=Xn,c=tn.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Qi(),this.name="",this.source=new md(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==id)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wn:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case cl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wn:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case cl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=id;tn.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,s=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,_=(f+1)/2,U=(m+1)/2,R=(h+d)/4,E=(u+v)/4,A=(p+g)/4;return x>_&&x>U?x<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(x),s=R/n,o=E/n):_>U?_<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(_),n=R/s,o=A/s):U<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(U),n=E/o,s=A/o),this.set(n,s,o,e),this}let M=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dp extends Ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new md(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hn extends Dp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class gd extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lp extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=o[r+0],f=o[r+1],p=o[r+2],v=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==p){let g=1-a;const m=l*d+c*f+h*p+u*v,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const U=Math.sqrt(x),R=Math.atan2(U,m*M);g=Math.sin(g*R)/U,a=Math.sin(a*R)/U}const _=a*M;if(l=l*g+d*_,c=c*g+f*_,h=h*g+p*_,u=u*g+v*_,g===1-a){const U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=o[r],d=o[r+1],f=o[r+2],p=o[r+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(o/2),d=l(n/2),f=l(s/2),p=l(o/2);switch(r){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(r-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(o-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(r-s)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(th.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(th.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),u=2*(o*n-r*e);return this.x=e+l*c+r*u-a*h,this.y=n+l*h+a*c-o*u,this.z=s+l*u+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jr.copy(this).projectOnVector(t),this.sub(Jr)}reflect(t){return this.sub(Jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jr=new L,th=new Un;class ts{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,wn):wn.fromBufferAttribute(o,r),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),No.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),No.copy(n.boundingBox)),No.applyMatrix4(t.matrixWorld),this.union(No)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Fo.subVectors(this.max,Gs),as.subVectors(t.a,Gs),ls.subVectors(t.b,Gs),cs.subVectors(t.c,Gs),mi.subVectors(ls,as),gi.subVectors(cs,ls),Li.subVectors(as,cs);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Li.z,Li.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Li.z,0,-Li.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Li.y,Li.x,0];return!Qr(e,as,ls,cs,Fo)||(e=[1,0,0,0,1,0,0,0,1],!Qr(e,as,ls,cs,Fo))?!1:(Oo.crossVectors(mi,gi),e=[Oo.x,Oo.y,Oo.z],Qr(e,as,ls,cs,Fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Jn=[new L,new L,new L,new L,new L,new L,new L,new L],wn=new L,No=new ts,as=new L,ls=new L,cs=new L,mi=new L,gi=new L,Li=new L,Gs=new L,Fo=new L,Oo=new L,Ii=new L;function Qr(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Ii.fromArray(i,o);const a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=t.dot(Ii),c=e.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ip=new ts,Ws=new L,ta=new L;class es{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ip.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);const e=Ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(ta)),this.expandByPoint(Ws.copy(t.center).sub(ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new L,ea=new L,ko=new L,vi=new L,na=new L,Bo=new L,ia=new L;class Ro{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ea.copy(t).add(e).multiplyScalar(.5),ko.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(ea);const o=t.distanceTo(e)*.5,r=-this.direction.dot(ko),a=vi.dot(this.direction),l=-vi.dot(ko),c=vi.lengthSq(),h=Math.abs(1-r*r);let u,d,f,p;if(h>0)if(u=r*l-a,d=r*a-l,p=o*h,u>=0)if(d>=-p)if(d<=p){const v=1/h;u*=v,d*=v,f=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-o,-l),o),f=d*(d+2*l)+c):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ea).addScaledVector(ko,d),f}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);const n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,o){na.subVectors(e,t),Bo.subVectors(n,t),ia.crossVectors(na,Bo);let r=this.direction.dot(ia),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;vi.subVectors(this.origin,t);const l=a*this.direction.dot(Bo.crossVectors(vi,Bo));if(l<0)return null;const c=a*this.direction.dot(na.cross(vi));if(c<0||l+c>r)return null;const h=-a*vi.dot(ia);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,o,r,a,l,c,h,u,d,f,p,v,g){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,u,d,f,p,v,g)}set(t,e,n,s,o,r,a,l,c,h,u,d,f,p,v,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/hs.setFromMatrixColumn(t,0).length(),o=1/hs.setFromMatrixColumn(t,1).length(),r=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,f=r*u,p=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=p+f*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,p=c*h,v=c*u;e[0]=d+v*a,e[4]=p*a-f,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-p,e[6]=v+d*a,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,p=c*h,v=c*u;e[0]=d-v*a,e[4]=-r*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=r*h,e[9]=v-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,f=r*u,p=a*h,v=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,f=r*c,p=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=p*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-v*u}else if(t.order==="XZY"){const d=r*l,f=r*c,p=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=r*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Up,t,Np)}lookAt(t,e,n){const s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),_i.crossVectors(n,dn),_i.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),_i.crossVectors(n,dn)),_i.normalize(),zo.crossVectors(dn,_i),s[0]=_i.x,s[4]=zo.x,s[8]=dn.x,s[1]=_i.y,s[5]=zo.y,s[9]=dn.y,s[2]=_i.z,s[6]=zo.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],M=n[3],x=n[7],_=n[11],U=n[15],R=s[0],E=s[4],A=s[8],S=s[12],y=s[1],N=s[5],H=s[9],W=s[13],K=s[2],at=s[6],F=s[10],w=s[14],T=s[3],O=s[7],X=s[11],V=s[15];return o[0]=r*R+a*y+l*K+c*T,o[4]=r*E+a*N+l*at+c*O,o[8]=r*A+a*H+l*F+c*X,o[12]=r*S+a*W+l*w+c*V,o[1]=h*R+u*y+d*K+f*T,o[5]=h*E+u*N+d*at+f*O,o[9]=h*A+u*H+d*F+f*X,o[13]=h*S+u*W+d*w+f*V,o[2]=p*R+v*y+g*K+m*T,o[6]=p*E+v*N+g*at+m*O,o[10]=p*A+v*H+g*F+m*X,o[14]=p*S+v*W+g*w+m*V,o[3]=M*R+x*y+_*K+U*T,o[7]=M*E+x*N+_*at+U*O,o[11]=M*A+x*H+_*F+U*X,o[15]=M*S+x*W+_*w+U*V,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],v=t[7],g=t[11],m=t[15];return p*(+o*l*u-s*c*u-o*a*d+n*c*d+s*a*f-n*l*f)+v*(+e*l*f-e*c*d+o*r*d-s*r*f+s*c*h-o*l*h)+g*(+e*c*u-e*a*f-o*r*u+n*r*f+o*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*r*u-n*r*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],v=t[13],g=t[14],m=t[15],M=u*g*c-v*d*c+v*l*f-a*g*f-u*l*m+a*d*m,x=p*d*c-h*g*c-p*l*f+r*g*f+h*l*m-r*d*m,_=h*v*c-p*u*c+p*a*f-r*v*f-h*a*m+r*u*m,U=p*u*l-h*v*l-p*a*d+r*v*d+h*a*g-r*u*g,R=e*M+n*x+s*_+o*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/R;return t[0]=M*E,t[1]=(v*d*o-u*g*o-v*s*f+n*g*f+u*s*m-n*d*m)*E,t[2]=(a*g*o-v*l*o+v*s*c-n*g*c-a*s*m+n*l*m)*E,t[3]=(u*l*o-a*d*o-u*s*c+n*d*c+a*s*f-n*l*f)*E,t[4]=x*E,t[5]=(h*g*o-p*d*o+p*s*f-e*g*f-h*s*m+e*d*m)*E,t[6]=(p*l*o-r*g*o-p*s*c+e*g*c+r*s*m-e*l*m)*E,t[7]=(r*d*o-h*l*o+h*s*c-e*d*c-r*s*f+e*l*f)*E,t[8]=_*E,t[9]=(p*u*o-h*v*o-p*n*f+e*v*f+h*n*m-e*u*m)*E,t[10]=(r*v*o-p*a*o+p*n*c-e*v*c-r*n*m+e*a*m)*E,t[11]=(h*a*o-r*u*o-h*n*c+e*u*c+r*n*f-e*a*f)*E,t[12]=U*E,t[13]=(h*v*s-p*u*s+p*n*d-e*v*d-h*n*g+e*u*g)*E,t[14]=(p*a*s-r*v*s-p*n*l+e*v*l+r*n*g-e*a*g)*E,t[15]=(r*u*s-h*a*s+h*n*l-e*u*l-r*n*d+e*a*d)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,u=a+a,d=o*c,f=o*h,p=o*u,v=r*h,g=r*u,m=a*u,M=l*c,x=l*h,_=l*u,U=n.x,R=n.y,E=n.z;return s[0]=(1-(v+m))*U,s[1]=(f+_)*U,s[2]=(p-x)*U,s[3]=0,s[4]=(f-_)*R,s[5]=(1-(d+m))*R,s[6]=(g+M)*R,s[7]=0,s[8]=(p+x)*E,s[9]=(g-M)*E,s[10]=(1-(d+v))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=hs.set(s[0],s[1],s[2]).length();const r=hs.set(s[4],s[5],s[6]).length(),a=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],En.copy(this);const c=1/o,h=1/r,u=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=li){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,p;if(a===li)f=-(r+o)/(r-o),p=-2*r*o/(r-o);else if(a===Lr)f=-r/(r-o),p=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=li){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(r-o),d=(e+t)*c,f=(n+s)*h;let p,v;if(a===li)p=(r+o)*u,v=-2*u;else if(a===Lr)p=o*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const hs=new L,En=new le,Up=new L(0,0,0),Np=new L(1,1,1),_i=new L,zo=new L,dn=new L,eh=new le,nh=new Un;class $n{constructor(t=0,e=0,n=0,s=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Fe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nh.setFromEuler(this),this.setFromQuaternion(nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class lc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fp=0;const ih=new L,us=new Un,ti=new le,Ho=new L,Xs=new L,Op=new L,kp=new Un,sh=new L(1,0,0),oh=new L(0,1,0),rh=new L(0,0,1),ah={type:"added"},Bp={type:"removed"},ds={type:"childadded",child:null},sa={type:"childremoved",child:null};class Ue extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new L,e=new $n,n=new Un,s=new L(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new re}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(sh,t)}rotateY(t){return this.rotateOnAxis(oh,t)}rotateZ(t){return this.rotateOnAxis(rh,t)}translateOnAxis(t,e){return ih.copy(t).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sh,t)}translateY(t){return this.translateOnAxis(oh,t)}translateZ(t){return this.translateOnAxis(rh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ho.copy(t):Ho.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Xs,Ho,this.up):ti.lookAt(Ho,Xs,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),us.setFromRotationMatrix(ti),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ah),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bp),sa.child=t,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ah),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,Op),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,kp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),p=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ue.DEFAULT_UP=new L(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new L,ei=new L,oa=new L,ni=new L,fs=new L,ps=new L,lh=new L,ra=new L,aa=new L,la=new L,ca=new ye,ha=new ye,ua=new ye;class Ln{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Tn.subVectors(s,e),ei.subVectors(n,e),oa.subVectors(t,e);const r=Tn.dot(Tn),a=Tn.dot(ei),l=Tn.dot(oa),c=ei.dot(ei),h=ei.dot(oa),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,p=(r*h-a*l)*d;return o.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,ni.x),l.addScaledVector(r,ni.y),l.addScaledVector(a,ni.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return ca.setScalar(0),ha.setScalar(0),ua.setScalar(0),ca.fromBufferAttribute(t,e),ha.fromBufferAttribute(t,n),ua.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(ca,o.x),r.addScaledVector(ha,o.y),r.addScaledVector(ua,o.z),r}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),ei.subVectors(t,e),Tn.cross(ei).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Tn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return Ln.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return Ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;fs.subVectors(s,n),ps.subVectors(o,n),ra.subVectors(t,n);const l=fs.dot(ra),c=ps.dot(ra);if(l<=0&&c<=0)return e.copy(n);aa.subVectors(t,s);const h=fs.dot(aa),u=ps.dot(aa);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(fs,r);la.subVectors(t,o);const f=fs.dot(la),p=ps.dot(la);if(p>=0&&f<=p)return e.copy(o);const v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(ps,a);const g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return lh.subVectors(o,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(lh,a);const m=1/(g+v+d);return r=v*m,a=d*m,e.copy(n).addScaledVector(fs,r).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=ac(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=da(r,o,t+1/3),this.g=da(r,o,t),this.b=da(r,o,t-1/3)}return de.toWorkingColorSpace(this,s),this}setStyle(t,e=Xe){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const n=vd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return de.fromWorkingColorSpace(Ke.copy(this),t),Math.round(Fe(Ke.r*255,0,255))*65536+Math.round(Fe(Ke.g*255,0,255))*256+Math.round(Fe(Ke.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(Ke.copy(this),e);const n=Ke.r,s=Ke.g,o=Ke.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-n)/u+2;break;case o:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Xe){de.fromWorkingColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,s=Ke.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(Vo);const n=fo(xi.h,Vo.h,e),s=fo(xi.s,Vo.s,e),o=fo(xi.l,Vo.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new Ft;Ft.NAMES=vd;let zp=0;class Ri extends Ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Qi(),this.name="",this.blending=Cs,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=Ka,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Za&&(n.blendSrc=this.blendSrc),this.blendDst!==Ka&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class on extends Ri{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Ku,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new L,Go=new mt;class Oe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xc,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Go.fromBufferAttribute(this,e),Go.applyMatrix3(t),this.setXY(e,Go.x,Go.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array),o=en(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xc&&(t.usage=this.usage),t}}class _d extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class xd extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Vt extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hp=0;const vn=new le,fa=new Ue,ms=new L,fn=new ts,$s=new ts,He=new L;class ce extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pd(t)?xd:_d)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new re().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return fa.lookAt(t),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Vt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];fn.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(fn.min,$s.min),fn.expandByPoint(He),He.addVectors(fn.max,$s.max),fn.expandByPoint(He)):(fn.expandByPoint($s.min),fn.expandByPoint($s.max))}fn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)He.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(He));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)He.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(t,c),He.add(ms)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new L,l[A]=new L;const c=new L,h=new L,u=new L,d=new mt,f=new mt,p=new mt,v=new L,g=new L;function m(A,S,y){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),d.fromBufferAttribute(o,A),f.fromBufferAttribute(o,S),p.fromBufferAttribute(o,y),h.sub(c),u.sub(c),f.sub(d),p.sub(d);const N=1/(f.x*p.y-p.x*f.y);isFinite(N)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(N),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(N),a[A].add(v),a[S].add(v),a[y].add(v),l[A].add(g),l[S].add(g),l[y].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let A=0,S=M.length;A<S;++A){const y=M[A],N=y.start,H=y.count;for(let W=N,K=N+H;W<K;W+=3)m(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const x=new L,_=new L,U=new L,R=new L;function E(A){U.fromBufferAttribute(s,A),R.copy(U);const S=a[A];x.copy(S),x.sub(U.multiplyScalar(U.dot(S))).normalize(),_.crossVectors(R,S);const N=_.dot(l[A])<0?-1:1;r.setXYZW(A,x.x,x.y,x.z,N)}for(let A=0,S=M.length;A<S;++A){const y=M[A],N=y.start,H=y.count;for(let W=N,K=N+H;W<K;W+=3)E(t.getX(W+0)),E(t.getX(W+1)),E(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new L,o=new L,r=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new Oe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ce,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ch=new le,Ui=new Ro,Wo=new es,hh=new L,Xo=new L,$o=new L,Yo=new L,pa=new L,qo=new L,uh=new L,jo=new L;class Dt extends Ue{constructor(t=new ce,e=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){qo.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],u=o[l];h!==0&&(pa.fromBufferAttribute(u,t),r?qo.addScaledVector(pa,h):qo.addScaledVector(pa.sub(e),h))}e.add(qo)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(o),Ui.copy(t.ray).recast(t.near),!(Wo.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Wo,hh)===null||Ui.origin.distanceToSquared(hh)>(t.far-t.near)**2))&&(ch.copy(o).invert(),Ui.copy(t.ray).applyMatrix4(ch),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=r[g.materialIndex],M=Math.max(g.start,f.start),x=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,U=x;_<U;_+=3){const R=a.getX(_),E=a.getX(_+1),A=a.getX(_+2);s=Zo(this,m,t,n,c,h,u,R,E,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const M=a.getX(g),x=a.getX(g+1),_=a.getX(g+2);s=Zo(this,r,t,n,c,h,u,M,x,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=r[g.materialIndex],M=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,U=x;_<U;_+=3){const R=_,E=_+1,A=_+2;s=Zo(this,m,t,n,c,h,u,R,E,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const M=g,x=g+1,_=g+2;s=Zo(this,r,t,n,c,h,u,M,x,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Vp(i,t,e,n,s,o,r,a){let l;if(t.side===Qe?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===Ci,a),l===null)return null;jo.copy(a),jo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(jo);return c<e.near||c>e.far?null:{distance:c,point:jo.clone(),object:i}}function Zo(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,Xo),i.getVertexPosition(l,$o),i.getVertexPosition(c,Yo);const h=Vp(i,t,e,n,Xo,$o,Yo,uh);if(h){const u=new L;Ln.getBarycoord(uh,Xo,$o,Yo,u),s&&(h.uv=Ln.getInterpolatedAttribute(s,a,l,c,u,new mt)),o&&(h.uv1=Ln.getInterpolatedAttribute(o,a,l,c,u,new mt)),r&&(h.normal=Ln.getInterpolatedAttribute(r,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};Ln.getNormal(Xo,$o,Yo,d.normal),h.face=d,h.barycoord=u}return h}class an extends ce{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,e,t,r,o,0),p("z","y","x",1,-1,n,e,-t,r,o,1),p("x","z","y",1,1,t,n,e,s,r,2),p("x","z","y",1,-1,t,n,-e,s,r,3),p("x","y","z",1,-1,t,e,n,s,o,4),p("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(u,2));function p(v,g,m,M,x,_,U,R,E,A,S){const y=_/E,N=U/A,H=_/2,W=U/2,K=R/2,at=E+1,F=A+1;let w=0,T=0;const O=new L;for(let X=0;X<F;X++){const V=X*N-W;for(let Z=0;Z<at;Z++){const pt=Z*y-H;O[v]=pt*M,O[g]=V*x,O[m]=K,c.push(O.x,O.y,O.z),O[v]=0,O[g]=0,O[m]=R>0?1:-1,h.push(O.x,O.y,O.z),u.push(Z/E),u.push(1-X/A),w+=1}}for(let X=0;X<A;X++)for(let V=0;V<E;V++){const Z=d+V+at*X,pt=d+V+at*(X+1),z=d+(V+1)+at*(X+1),G=d+(V+1)+at*X;l.push(Z,pt,G),l.push(pt,z,G),T+=6}a.addGroup(f,T,S),f+=T,d+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function nn(i){const t={};for(let e=0;e<i.length;e++){const n=Fs(i[e]);for(const s in n)t[s]=n[s]}return t}function Gp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function yd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const In={clone:Fs,merge:nn};var Wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ee extends Ri{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wp,this.fragmentShader=Xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=Gp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Md extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new L,dh=new mt,fh=new mt;class mn extends Md{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=bo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,dh,fh),e.subVectors(fh,dh)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(uo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gs=-90,vs=1;class $p extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(gs,vs,t,e);s.layers=this.layers,this.add(s);const o=new mn(gs,vs,t,e);o.layers=this.layers,this.add(o);const r=new mn(gs,vs,t,e);r.layers=this.layers,this.add(r);const a=new mn(gs,vs,t,e);a.layers=this.layers,this.add(a);const l=new mn(gs,vs,t,e);l.layers=this.layers,this.add(l);const c=new mn(gs,vs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Sd extends tn{constructor(t,e,n,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Us,super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yp extends hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Sd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new an(5,5,5),o=new Ee({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:We});o.uniforms.tEquirect.value=e;const r=new Dt(s,o),a=e.minFilter;return e.minFilter===Gi&&(e.minFilter=Vn),new $p(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const ma=new L,qp=new L,jp=new re;class ri{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ma.subVectors(n,e).cross(qp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ma),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||jp.getNormalMatrix(t),s=this.coplanarPoint(ma).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new es,Ko=new L;class cc{constructor(t=new ri,e=new ri,n=new ri,s=new ri,o=new ri,r=new ri){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],p=s[9],v=s[10],g=s[11],m=s[12],M=s[13],x=s[14],_=s[15];if(n[0].setComponents(l-o,d-c,g-f,_-m).normalize(),n[1].setComponents(l+o,d+c,g+f,_+m).normalize(),n[2].setComponents(l+r,d+h,g+p,_+M).normalize(),n[3].setComponents(l-r,d-h,g-p,_-M).normalize(),n[4].setComponents(l-a,d-u,g-v,_-x).normalize(),e===li)n[5].setComponents(l+a,d+u,g+v,_+x).normalize();else if(e===Lr)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ko.x=s.normal.x>0?t.max.x:t.min.x,Ko.y=s.normal.y>0?t.max.y:t.min.y,Ko.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bd(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Zp(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class Pi extends ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],v=[],g=[];for(let m=0;m<h;m++){const M=m*d-r;for(let x=0;x<c;x++){const _=x*u-o;p.push(_,-M,0),v.push(0,0,1),g.push(x/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const x=M+c*m,_=M+c*(m+1),U=M+1+c*(m+1),R=M+1+c*m;f.push(x,_,R),f.push(_,U,R)}this.setIndex(f),this.setAttribute("position",new Vt(p,3)),this.setAttribute("normal",new Vt(v,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jp=`#ifdef USE_ALPHAHASH
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
#endif`,Qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,im=`#ifdef USE_AOMAP
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
#endif`,sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,om=`#ifdef USE_BATCHING
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
#endif`,rm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hm=`#ifdef USE_IRIDESCENCE
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
#endif`,um=`#ifdef USE_BUMPMAP
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
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ym=`#define PI 3.141592653589793
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
} // validated`,Mm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sm=`vec3 transformedNormal = objectNormal;
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
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Am="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,km=`#ifdef USE_GRADIENTMAP
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
}`,Bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vm=`uniform bool receiveShadow;
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
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qm=`PhysicalMaterial material;
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
#endif`,jm=`struct PhysicalMaterial {
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
}`,Zm=`
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
#endif`,Km=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,r0=`#if defined( USE_POINTS_UV )
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
#endif`,a0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
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
#endif`,f0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,x0=`#ifdef USE_NORMALMAP
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
#endif`,y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,T0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,N0=`float getShadowMask() {
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
}`,F0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O0=`#ifdef USE_SKINNING
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
#endif`,k0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B0=`#ifdef USE_SKINNING
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
#endif`,z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,X0=`#ifdef USE_TRANSMISSION
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K0=`uniform sampler2D t2D;
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
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
}`,ig=`#if DEPTH_PACKING == 3200
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
}`,sg=`#define DISTANCE
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
}`,og=`#define DISTANCE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`uniform float scale;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 diffuse;
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
}`,dg=`#define LAMBERT
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
}`,fg=`#define LAMBERT
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
}`,pg=`#define MATCAP
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
}`,mg=`#define MATCAP
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
}`,gg=`#define NORMAL
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
}`,vg=`#define NORMAL
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
}`,_g=`#define PHONG
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
}`,xg=`#define PHONG
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
}`,yg=`#define STANDARD
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
}`,Mg=`#define STANDARD
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
}`,Sg=`#define TOON
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
}`,bg=`#define TOON
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
}`,wg=`uniform float size;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,Tg=`#include <common>
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
}`,Ag=`uniform vec3 color;
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
}`,Cg=`uniform float rotation;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:Kp,alphahash_pars_fragment:Jp,alphamap_fragment:Qp,alphamap_pars_fragment:tm,alphatest_fragment:em,alphatest_pars_fragment:nm,aomap_fragment:im,aomap_pars_fragment:sm,batching_pars_vertex:om,batching_vertex:rm,begin_vertex:am,beginnormal_vertex:lm,bsdfs:cm,iridescence_fragment:hm,bumpmap_pars_fragment:um,clipping_planes_fragment:dm,clipping_planes_pars_fragment:fm,clipping_planes_pars_vertex:pm,clipping_planes_vertex:mm,color_fragment:gm,color_pars_fragment:vm,color_pars_vertex:_m,color_vertex:xm,common:ym,cube_uv_reflection_fragment:Mm,defaultnormal_vertex:Sm,displacementmap_pars_vertex:bm,displacementmap_vertex:wm,emissivemap_fragment:Em,emissivemap_pars_fragment:Tm,colorspace_fragment:Am,colorspace_pars_fragment:Cm,envmap_fragment:Rm,envmap_common_pars_fragment:Pm,envmap_pars_fragment:Dm,envmap_pars_vertex:Lm,envmap_physical_pars_fragment:Gm,envmap_vertex:Im,fog_vertex:Um,fog_pars_vertex:Nm,fog_fragment:Fm,fog_pars_fragment:Om,gradientmap_pars_fragment:km,lightmap_pars_fragment:Bm,lights_lambert_fragment:zm,lights_lambert_pars_fragment:Hm,lights_pars_begin:Vm,lights_toon_fragment:Wm,lights_toon_pars_fragment:Xm,lights_phong_fragment:$m,lights_phong_pars_fragment:Ym,lights_physical_fragment:qm,lights_physical_pars_fragment:jm,lights_fragment_begin:Zm,lights_fragment_maps:Km,lights_fragment_end:Jm,logdepthbuf_fragment:Qm,logdepthbuf_pars_fragment:t0,logdepthbuf_pars_vertex:e0,logdepthbuf_vertex:n0,map_fragment:i0,map_pars_fragment:s0,map_particle_fragment:o0,map_particle_pars_fragment:r0,metalnessmap_fragment:a0,metalnessmap_pars_fragment:l0,morphinstance_vertex:c0,morphcolor_vertex:h0,morphnormal_vertex:u0,morphtarget_pars_vertex:d0,morphtarget_vertex:f0,normal_fragment_begin:p0,normal_fragment_maps:m0,normal_pars_fragment:g0,normal_pars_vertex:v0,normal_vertex:_0,normalmap_pars_fragment:x0,clearcoat_normal_fragment_begin:y0,clearcoat_normal_fragment_maps:M0,clearcoat_pars_fragment:S0,iridescence_pars_fragment:b0,opaque_fragment:w0,packing:E0,premultiplied_alpha_fragment:T0,project_vertex:A0,dithering_fragment:C0,dithering_pars_fragment:R0,roughnessmap_fragment:P0,roughnessmap_pars_fragment:D0,shadowmap_pars_fragment:L0,shadowmap_pars_vertex:I0,shadowmap_vertex:U0,shadowmask_pars_fragment:N0,skinbase_vertex:F0,skinning_pars_vertex:O0,skinning_vertex:k0,skinnormal_vertex:B0,specularmap_fragment:z0,specularmap_pars_fragment:H0,tonemapping_fragment:V0,tonemapping_pars_fragment:G0,transmission_fragment:W0,transmission_pars_fragment:X0,uv_pars_fragment:$0,uv_pars_vertex:Y0,uv_vertex:q0,worldpos_vertex:j0,background_vert:Z0,background_frag:K0,backgroundCube_vert:J0,backgroundCube_frag:Q0,cube_vert:tg,cube_frag:eg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:sg,distanceRGBA_frag:og,equirect_vert:rg,equirect_frag:ag,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:hg,meshbasic_frag:ug,meshlambert_vert:dg,meshlambert_frag:fg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:vg,meshphong_vert:_g,meshphong_frag:xg,meshphysical_vert:yg,meshphysical_frag:Mg,meshtoon_vert:Sg,meshtoon_frag:bg,points_vert:wg,points_frag:Eg,shadow_vert:Tg,shadow_frag:Ag,sprite_vert:Cg,sprite_frag:Rg},Rt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},zn={basic:{uniforms:nn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:nn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:nn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:nn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:nn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:nn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:nn([Rt.points,Rt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:nn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:nn([Rt.common,Rt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:nn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:nn([Rt.sprite,Rt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:nn([Rt.common,Rt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:nn([Rt.lights,Rt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};zn.physical={uniforms:nn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const Jo={r:0,b:0,g:0},Fi=new $n,Pg=new le;function Dg(i,t,e,n,s,o,r){const a=new Ft(0);let l=o===!0?0:1,c,h,u=null,d=0,f=null;function p(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function v(M){let x=!1;const _=p(M);_===null?m(a,l):_&&_.isColor&&(m(_,1),x=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,r):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,x){const _=p(x);_&&(_.isCubeTexture||_.mapping===Br)?(h===void 0&&(h=new Dt(new an(1,1,1),new Ee({name:"BackgroundCubeMaterial",uniforms:Fs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,R,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Fi.copy(x.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(Fi)),h.material.toneMapped=de.getTransfer(_.colorSpace)!==xe,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Dt(new Pi(2,2),new Ee({name:"BackgroundMaterial",uniforms:Fs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=de.getTransfer(_.colorSpace)!==xe,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,x){M.getRGB(Jo,yd(i)),n.buffers.color.setClear(Jo.r,Jo.g,Jo.b,x,r)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:v,addToRenderList:g}}function Lg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(y,N,H,W,K){let at=!1;const F=u(W,H,N);o!==F&&(o=F,c(o.object)),at=f(y,W,H,K),at&&p(y,W,H,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(at||r)&&(r=!1,_(y,N,H,W),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,N,H){const W=H.wireframe===!0;let K=n[y.id];K===void 0&&(K={},n[y.id]=K);let at=K[N.id];at===void 0&&(at={},K[N.id]=at);let F=at[W];return F===void 0&&(F=d(l()),at[W]=F),F}function d(y){const N=[],H=[],W=[];for(let K=0;K<e;K++)N[K]=0,H[K]=0,W[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:W,object:y,attributes:{},index:null}}function f(y,N,H,W){const K=o.attributes,at=N.attributes;let F=0;const w=H.getAttributes();for(const T in w)if(w[T].location>=0){const X=K[T];let V=at[T];if(V===void 0&&(T==="instanceMatrix"&&y.instanceMatrix&&(V=y.instanceMatrix),T==="instanceColor"&&y.instanceColor&&(V=y.instanceColor)),X===void 0||X.attribute!==V||V&&X.data!==V.data)return!0;F++}return o.attributesNum!==F||o.index!==W}function p(y,N,H,W){const K={},at=N.attributes;let F=0;const w=H.getAttributes();for(const T in w)if(w[T].location>=0){let X=at[T];X===void 0&&(T==="instanceMatrix"&&y.instanceMatrix&&(X=y.instanceMatrix),T==="instanceColor"&&y.instanceColor&&(X=y.instanceColor));const V={};V.attribute=X,X&&X.data&&(V.data=X.data),K[T]=V,F++}o.attributes=K,o.attributesNum=F,o.index=W}function v(){const y=o.newAttributes;for(let N=0,H=y.length;N<H;N++)y[N]=0}function g(y){m(y,0)}function m(y,N){const H=o.newAttributes,W=o.enabledAttributes,K=o.attributeDivisors;H[y]=1,W[y]===0&&(i.enableVertexAttribArray(y),W[y]=1),K[y]!==N&&(i.vertexAttribDivisor(y,N),K[y]=N)}function M(){const y=o.newAttributes,N=o.enabledAttributes;for(let H=0,W=N.length;H<W;H++)N[H]!==y[H]&&(i.disableVertexAttribArray(H),N[H]=0)}function x(y,N,H,W,K,at,F){F===!0?i.vertexAttribIPointer(y,N,H,K,at):i.vertexAttribPointer(y,N,H,W,K,at)}function _(y,N,H,W){v();const K=W.attributes,at=H.getAttributes(),F=N.defaultAttributeValues;for(const w in at){const T=at[w];if(T.location>=0){let O=K[w];if(O===void 0&&(w==="instanceMatrix"&&y.instanceMatrix&&(O=y.instanceMatrix),w==="instanceColor"&&y.instanceColor&&(O=y.instanceColor)),O!==void 0){const X=O.normalized,V=O.itemSize,Z=t.get(O);if(Z===void 0)continue;const pt=Z.buffer,z=Z.type,G=Z.bytesPerElement,nt=z===i.INT||z===i.UNSIGNED_INT||O.gpuType===Ql;if(O.isInterleavedBufferAttribute){const $=O.data,tt=$.stride,ct=O.offset;if($.isInstancedInterleavedBuffer){for(let gt=0;gt<T.locationSize;gt++)m(T.location+gt,$.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let gt=0;gt<T.locationSize;gt++)g(T.location+gt);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let gt=0;gt<T.locationSize;gt++)x(T.location+gt,V/T.locationSize,z,X,tt*G,(ct+V/T.locationSize*gt)*G,nt)}else{if(O.isInstancedBufferAttribute){for(let $=0;$<T.locationSize;$++)m(T.location+$,O.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let $=0;$<T.locationSize;$++)g(T.location+$);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let $=0;$<T.locationSize;$++)x(T.location+$,V/T.locationSize,z,X,V*G,V/T.locationSize*$*G,nt)}}else if(F!==void 0){const X=F[w];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(T.location,X);break;case 3:i.vertexAttrib3fv(T.location,X);break;case 4:i.vertexAttrib4fv(T.location,X);break;default:i.vertexAttrib1fv(T.location,X)}}}}M()}function U(){A();for(const y in n){const N=n[y];for(const H in N){const W=N[H];for(const K in W)h(W[K].object),delete W[K];delete N[H]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const N=n[y.id];for(const H in N){const W=N[H];for(const K in W)h(W[K].object),delete W[K];delete N[H]}delete n[y.id]}function E(y){for(const N in n){const H=n[N];if(H[y.id]===void 0)continue;const W=H[y.id];for(const K in W)h(W[K].object),delete W[K];delete H[y.id]}}function A(){S(),r=!0,o!==s&&(o=s,c(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function Ig(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)r(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v]*d[v];e.update(p,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ug(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(E){return!(E!==yn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const A=E===Mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Xn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Gn&&!A)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=p>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:U,maxSamples:R}}function Ng(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new ri,a=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||o&&!g)o?h(null):c();else{const M=o?0:n,x=M*4;let _=m.clippingState||null;l.value=_,_=h(p,d,x,f);for(let U=0;U!==x;++U)_[U]=e[U];m.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,p!==!0||g===null){const m=f+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,_=f;x!==v;++x,_+=4)r.copy(u[x]).applyMatrix4(M,a),r.normal.toArray(g,_),g[_+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function Fg(i){let t=new WeakMap;function e(r,a){return a===al?r.mapping=Us:a===ll&&(r.mapping=Ns),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===al||a===ll)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Yp(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class hc extends Md{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ws=4,ph=[.125,.215,.35,.446,.526,.582],Hi=20,ga=new hc,mh=new Ft;let va=null,_a=0,xa=0,ya=!1;const zi=(1+Math.sqrt(5))/2,_s=1/zi,gh=[new L(-zi,_s,0),new L(zi,_s,0),new L(-_s,0,zi),new L(_s,0,zi),new L(0,zi,-_s),new L(0,zi,_s),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Fl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){va=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(va,_a,xa),this._renderer.xr.enabled=ya,t.scissorTest=!1,Qo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Us||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),va=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Mn,format:yn,colorSpace:ks,depthBuffer:!1},s=vh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Og(o)),this._blurMaterial=kg(o,t,e)}return s}_compileMaterial(t){const e=new Dt(this._lodPlanes[0],t);this._renderer.compile(e,ga)}_sceneToCubeUV(t,e,n,s){const a=new mn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(mh),h.toneMapping=Ai,h.autoClear=!1;const f=new on({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),p=new Dt(new an,f);let v=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(mh),v=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;Qo(s,M*x,m>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Us||t.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Dt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Qo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,ga)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=gh[(s-o-1)%gh.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Dt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),v=o/p,g=isFinite(o)?1+Math.floor(h*v):Hi;g>Hi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Hi}`);const m=[];let M=0;for(let E=0;E<Hi;++E){const A=E/v,S=Math.exp(-A*A/2);m.push(S),E===0?M+=S:E<g&&(M+=2*S)}for(let E=0;E<m.length;E++)m[E]=m[E]/M;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-n;const _=this._sizeLods[s],U=3*_*(s>x-ws?s-x+ws:0),R=4*(this._cubeSize-_);Qo(e,U,R,3*_,2*_),l.setRenderTarget(e),l.render(u,ga)}}function Og(i){const t=[],e=[],n=[];let s=i;const o=i-ws+1+ph.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>i-ws?l=ph[r-i+ws-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,v=3,g=2,m=1,M=new Float32Array(v*p*f),x=new Float32Array(g*p*f),_=new Float32Array(m*p*f);for(let R=0;R<f;R++){const E=R%3*2/3-1,A=R>2?0:-1,S=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];M.set(S,v*p*R),x.set(d,g*p*R);const y=[R,R,R,R,R,R];_.set(y,m*p*R)}const U=new ce;U.setAttribute("position",new Oe(M,v)),U.setAttribute("uv",new Oe(x,g)),U.setAttribute("faceIndex",new Oe(_,m)),t.push(U),s>ws&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vh(i,t,e){const n=new hn(i,t,e);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function kg(i,t,e){const n=new Float32Array(Hi),s=new L(0,1,0);return new Ee({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uc(),fragmentShader:`

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
		`,blending:We,depthTest:!1,depthWrite:!1})}function _h(){return new Ee({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:We,depthTest:!1,depthWrite:!1})}function xh(){return new Ee({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:We,depthTest:!1,depthWrite:!1})}function uc(){return`

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
	`}function Bg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===al||l===ll,h=l===Us||l===Ns;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Fl(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Fl(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function zg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&oo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hg(i,t,e,n){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);for(const p in d.morphAttributes){const v=d.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)t.remove(v[g])}d.removeEventListener("dispose",r),delete s[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const p in f){const v=f[p];for(let g=0,m=v.length;g<m;g++)t.update(v[g],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,p=u.attributes.position;let v=0;if(f!==null){const M=f.array;v=f.version;for(let x=0,_=M.length;x<_;x+=3){const U=M[x+0],R=M[x+1],E=M[x+2];d.push(U,R,R,E,E,U)}}else if(p!==void 0){const M=p.array;v=p.version;for(let x=0,_=M.length/3-1;x<_;x+=3){const U=x+0,R=x+1,E=x+2;d.push(U,R,R,E,E,U)}}else return;const g=new(pd(d)?xd:_d)(d,1);g.version=v;const m=o.get(u);m&&t.remove(m),o.set(u,g)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Vg(i,t,e){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function l(d,f){i.drawElements(n,f,o,d*r),e.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,o,d*r,p),e.update(f,n,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,n,1)}function u(d,f,p,v){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/r,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,v,0,p);let m=0;for(let M=0;M<p;M++)m+=f[M]*v[M];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Gg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Wg(i,t,e){const n=new WeakMap,s=new ye;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),p===!0&&(x=2),v===!0&&(x=3);let _=a.attributes.position.count*x,U=1;_>t.maxTextureSize&&(U=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const R=new Float32Array(_*U*4*u),E=new gd(R,_,U,u);E.type=Gn,E.needsUpdate=!0;const A=x*4;for(let y=0;y<u;y++){const N=g[y],H=m[y],W=M[y],K=_*U*4*y;for(let at=0;at<N.count;at++){const F=at*A;f===!0&&(s.fromBufferAttribute(N,at),R[K+F+0]=s.x,R[K+F+1]=s.y,R[K+F+2]=s.z,R[K+F+3]=0),p===!0&&(s.fromBufferAttribute(H,at),R[K+F+4]=s.x,R[K+F+5]=s.y,R[K+F+6]=s.z,R[K+F+7]=0),v===!0&&(s.fromBufferAttribute(W,at),R[K+F+8]=s.x,R[K+F+9]=s.y,R[K+F+10]=s.z,R[K+F+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new mt(_,U)},n.set(a,d),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function Xg(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class dc extends tn{constructor(t,e,n,s,o,r,a,l,c,h=Rs){if(h!==Rs&&h!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Rs&&(n=qi),n===void 0&&h===Zi&&(n=ji),super(null,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const wd=new tn,yh=new dc(1,1),Ed=new gd,Td=new Lp,Ad=new Sd,Mh=[],Sh=[],bh=new Float32Array(16),wh=new Float32Array(9),Eh=new Float32Array(4);function Bs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Mh[s];if(o===void 0&&(o=new Float32Array(s),Mh[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Hr(i,t){let e=Sh[t];e===void 0&&(e=new Int32Array(t),Sh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $g(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function Zg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Eh.set(n),i.uniformMatrix2fv(this.addr,!1,Eh),ze(e,n)}}function Kg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;wh.set(n),i.uniformMatrix3fv(this.addr,!1,wh),ze(e,n)}}function Jg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;bh.set(n),i.uniformMatrix4fv(this.addr,!1,bh),ze(e,n)}}function Qg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function ev(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function nv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function iv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function ov(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function rv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function av(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(yh.compareFunction=fd,o=yh):o=wd,e.setTexture2D(t||o,s)}function lv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Td,s)}function cv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ad,s)}function hv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ed,s)}function uv(i){switch(i){case 5126:return $g;case 35664:return Yg;case 35665:return qg;case 35666:return jg;case 35674:return Zg;case 35675:return Kg;case 35676:return Jg;case 5124:case 35670:return Qg;case 35667:case 35671:return tv;case 35668:case 35672:return ev;case 35669:case 35673:return nv;case 5125:return iv;case 36294:return sv;case 36295:return ov;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return cv;case 36289:case 36303:case 36311:case 36292:return hv}}function dv(i,t){i.uniform1fv(this.addr,t)}function fv(i,t){const e=Bs(t,this.size,2);i.uniform2fv(this.addr,e)}function pv(i,t){const e=Bs(t,this.size,3);i.uniform3fv(this.addr,e)}function mv(i,t){const e=Bs(t,this.size,4);i.uniform4fv(this.addr,e)}function gv(i,t){const e=Bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function vv(i,t){const e=Bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _v(i,t){const e=Bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xv(i,t){i.uniform1iv(this.addr,t)}function yv(i,t){i.uniform2iv(this.addr,t)}function Mv(i,t){i.uniform3iv(this.addr,t)}function Sv(i,t){i.uniform4iv(this.addr,t)}function bv(i,t){i.uniform1uiv(this.addr,t)}function wv(i,t){i.uniform2uiv(this.addr,t)}function Ev(i,t){i.uniform3uiv(this.addr,t)}function Tv(i,t){i.uniform4uiv(this.addr,t)}function Av(i,t,e){const n=this.cache,s=t.length,o=Hr(e,s);Be(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||wd,o[r])}function Cv(i,t,e){const n=this.cache,s=t.length,o=Hr(e,s);Be(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Td,o[r])}function Rv(i,t,e){const n=this.cache,s=t.length,o=Hr(e,s);Be(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Ad,o[r])}function Pv(i,t,e){const n=this.cache,s=t.length,o=Hr(e,s);Be(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Ed,o[r])}function Dv(i){switch(i){case 5126:return dv;case 35664:return fv;case 35665:return pv;case 35666:return mv;case 35674:return gv;case 35675:return vv;case 35676:return _v;case 5124:case 35670:return xv;case 35667:case 35671:return yv;case 35668:case 35672:return Mv;case 35669:case 35673:return Sv;case 5125:return bv;case 36294:return wv;case 36295:return Ev;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Pv}}class Lv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=uv(e.type)}}class Iv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dv(e.type)}}class Uv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function Th(i,t){i.seq.push(t),i.map[t.id]=t}function Nv(i,t,e){const n=i.name,s=n.length;for(Ma.lastIndex=0;;){const o=Ma.exec(n),r=Ma.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){Th(e,c===void 0?new Lv(a,i,t):new Iv(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Uv(a),Th(e,u)),e=u}}}class Sr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Nv(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Ah(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Fv=37297;let Ov=0;function kv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Ch=new re;function Bv(i){de._getMatrix(Ch,de.workingColorSpace,i);const t=`mat3( ${Ch.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case zr:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Rh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+kv(i.getShaderSource(t),r)}else return s}function zv(i,t){const e=Bv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Hv(i,t){let e;switch(t){case Ju:e="Linear";break;case Qu:e="Reinhard";break;case td:e="Cineon";break;case Jl:e="ACESFilmic";break;case ed:e="AgX";break;case nd:e="Neutral";break;case Zf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const tr=new L;function Vv(){de.getLuminanceCoefficients(tr);const i=tr.x.toFixed(4),t=tr.y.toFixed(4),e=tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function Wv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function ro(i){return i!==""}function Ph(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $v=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(i){return i.replace($v,qv)}const Yv=new Map;function qv(i,t){let e=ae[t];if(e===void 0){const n=Yv.get(t);if(n!==void 0)e=ae[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ol(e)}const jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lh(i){return i.replace(jv,Zv)}function Zv(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Ih(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Kv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===qu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ju?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===oi&&(t="SHADOWMAP_TYPE_VSM"),t}function Jv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Us:case Ns:t="ENVMAP_TYPE_CUBE";break;case Br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ns:t="ENVMAP_MODE_REFRACTION";break}return t}function t_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ku:t="ENVMAP_BLENDING_MULTIPLY";break;case qf:t="ENVMAP_BLENDING_MIX";break;case jf:t="ENVMAP_BLENDING_ADD";break}return t}function e_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function n_(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=Kv(e),c=Jv(e),h=Qv(e),u=t_(e),d=e_(e),f=Gv(e),p=Wv(o),v=s.createProgram();let g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ro).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ro).join(`
`),m.length>0&&(m+=`
`)):(g=[Ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),m=[Ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?ae.tonemapping_pars_fragment:"",e.toneMapping!==Ai?Hv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,zv("linearToOutputTexel",e.outputColorSpace),Vv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ro).join(`
`)),r=Ol(r),r=Ph(r,e),r=Dh(r,e),a=Ol(a),a=Ph(a,e),a=Dh(a,e),r=Lh(r),a=Lh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===$c?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=M+g+r,_=M+m+a,U=Ah(s,s.VERTEX_SHADER,x),R=Ah(s,s.FRAGMENT_SHADER,_);s.attachShader(v,U),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(N){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(v).trim(),W=s.getShaderInfoLog(U).trim(),K=s.getShaderInfoLog(R).trim();let at=!0,F=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,U,R);else{const w=Rh(s,U,"vertex"),T=Rh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+H+`
`+w+`
`+T)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(W===""||K==="")&&(F=!1);F&&(N.diagnostics={runnable:at,programLog:H,vertexShader:{log:W,prefix:g},fragmentShader:{log:K,prefix:m}})}s.deleteShader(U),s.deleteShader(R),A=new Sr(s,v),S=Xv(s,v)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Fv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ov++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=R,this}let i_=0;class s_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new o_(t),e.set(t,n)),n}}class o_{constructor(t){this.id=i_++,this.code=t,this.usedTimes=0}}function r_(i,t,e,n,s,o,r){const a=new lc,l=new s_,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,y,N,H,W){const K=H.fog,at=W.geometry,F=S.isMeshStandardMaterial?H.environment:null,w=(S.isMeshStandardMaterial?e:t).get(S.envMap||F),T=w&&w.mapping===Br?w.image.height:null,O=p[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const X=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,V=X!==void 0?X.length:0;let Z=0;at.morphAttributes.position!==void 0&&(Z=1),at.morphAttributes.normal!==void 0&&(Z=2),at.morphAttributes.color!==void 0&&(Z=3);let pt,z,G,nt;if(O){const _e=zn[O];pt=_e.vertexShader,z=_e.fragmentShader}else pt=S.vertexShader,z=S.fragmentShader,l.update(S),G=l.getVertexShaderID(S),nt=l.getFragmentShaderID(S);const $=i.getRenderTarget(),tt=i.state.buffers.depth.getReversed(),ct=W.isInstancedMesh===!0,gt=W.isBatchedMesh===!0,Ut=!!S.map,et=!!S.matcap,ht=!!w,k=!!S.aoMap,wt=!!S.lightMap,ft=!!S.bumpMap,yt=!!S.normalMap,St=!!S.displacementMap,Ht=!!S.emissiveMap,bt=!!S.metalnessMap,I=!!S.roughnessMap,b=S.anisotropy>0,J=S.clearcoat>0,ut=S.dispersion>0,_t=S.iridescence>0,dt=S.sheen>0,zt=S.transmission>0,Tt=b&&!!S.anisotropyMap,Pt=J&&!!S.clearcoatMap,ne=J&&!!S.clearcoatNormalMap,Mt=J&&!!S.clearcoatRoughnessMap,kt=_t&&!!S.iridescenceMap,qt=_t&&!!S.iridescenceThicknessMap,Kt=dt&&!!S.sheenColorMap,Bt=dt&&!!S.sheenRoughnessMap,he=!!S.specularMap,te=!!S.specularColorMap,fe=!!S.specularIntensityMap,Y=zt&&!!S.transmissionMap,Ct=zt&&!!S.thicknessMap,lt=!!S.gradientMap,vt=!!S.alphaMap,Nt=S.alphaTest>0,Lt=!!S.alphaHash,ie=!!S.extensions;let Re=Ai;S.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Re=i.toneMapping);const je={shaderID:O,shaderType:S.type,shaderName:S.name,vertexShader:pt,fragmentShader:z,defines:S.defines,customVertexShaderID:G,customFragmentShaderID:nt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:gt,batchingColor:gt&&W._colorsTexture!==null,instancing:ct,instancingColor:ct&&W.instanceColor!==null,instancingMorph:ct&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ks,alphaToCoverage:!!S.alphaToCoverage,map:Ut,matcap:et,envMap:ht,envMapMode:ht&&w.mapping,envMapCubeUVHeight:T,aoMap:k,lightMap:wt,bumpMap:ft,normalMap:yt,displacementMap:d&&St,emissiveMap:Ht,normalMapObjectSpace:yt&&S.normalMapType===tp,normalMapTangentSpace:yt&&S.normalMapType===rc,metalnessMap:bt,roughnessMap:I,anisotropy:b,anisotropyMap:Tt,clearcoat:J,clearcoatMap:Pt,clearcoatNormalMap:ne,clearcoatRoughnessMap:Mt,dispersion:ut,iridescence:_t,iridescenceMap:kt,iridescenceThicknessMap:qt,sheen:dt,sheenColorMap:Kt,sheenRoughnessMap:Bt,specularMap:he,specularColorMap:te,specularIntensityMap:fe,transmission:zt,transmissionMap:Y,thicknessMap:Ct,gradientMap:lt,opaque:S.transparent===!1&&S.blending===Cs&&S.alphaToCoverage===!1,alphaMap:vt,alphaTest:Nt,alphaHash:Lt,combine:S.combine,mapUv:Ut&&v(S.map.channel),aoMapUv:k&&v(S.aoMap.channel),lightMapUv:wt&&v(S.lightMap.channel),bumpMapUv:ft&&v(S.bumpMap.channel),normalMapUv:yt&&v(S.normalMap.channel),displacementMapUv:St&&v(S.displacementMap.channel),emissiveMapUv:Ht&&v(S.emissiveMap.channel),metalnessMapUv:bt&&v(S.metalnessMap.channel),roughnessMapUv:I&&v(S.roughnessMap.channel),anisotropyMapUv:Tt&&v(S.anisotropyMap.channel),clearcoatMapUv:Pt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&v(S.sheenRoughnessMap.channel),specularMapUv:he&&v(S.specularMap.channel),specularColorMapUv:te&&v(S.specularColorMap.channel),specularIntensityMapUv:fe&&v(S.specularIntensityMap.channel),transmissionMapUv:Y&&v(S.transmissionMap.channel),thicknessMapUv:Ct&&v(S.thicknessMap.channel),alphaMapUv:vt&&v(S.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(yt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!at.attributes.uv&&(Ut||vt),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:tt,skinning:W.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:Z,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:Ut&&S.map.isVideoTexture===!0&&de.getTransfer(S.map.colorSpace)===xe,decodeVideoTextureEmissive:Ht&&S.emissiveMap.isVideoTexture===!0&&de.getTransfer(S.emissiveMap.colorSpace)===xe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===we,flipSided:S.side===Qe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ie&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&S.extensions.multiDraw===!0||gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function m(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)y.push(N),y.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(M(y,S),x(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function x(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const y=p[S.type];let N;if(y){const H=zn[y];N=In.clone(H.uniforms)}else N=S.uniforms;return N}function U(S,y){let N;for(let H=0,W=h.length;H<W;H++){const K=h[H];if(K.cacheKey===y){N=K,++N.usedTimes;break}}return N===void 0&&(N=new n_(i,y,S,o),h.push(N)),N}function R(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function E(S){l.remove(S)}function A(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:U,releaseProgram:R,releaseShaderCache:E,programs:h,dispose:A}}function a_(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function l_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Uh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nh(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u,d,f,p,v,g){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:v,group:g},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=v,m.group=g),t++,m}function a(u,d,f,p,v,g){const m=r(u,d,f,p,v,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,p,v,g){const m=r(u,d,f,p,v,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||l_),n.length>1&&n.sort(d||Uh),s.length>1&&s.sort(d||Uh)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function c_(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Nh,i.set(n,[r])):s>=o.length?(r=new Nh,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function h_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ft};break;case"SpotLight":e={position:new L,direction:new L,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function u_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let d_=0;function f_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function p_(i){const t=new h_,e=u_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,o=new le,r=new le;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,M=0,x=0,_=0,U=0,R=0,E=0;c.sort(f_);for(let S=0,y=c.length;S<y;S++){const N=c[S],H=N.color,W=N.intensity,K=N.distance,at=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=H.r*W,u+=H.g*W,d+=H.b*W;else if(N.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(N.sh.coefficients[F],W);E++}else if(N.isDirectionalLight){const F=t.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const w=N.shadow,T=e.get(N);T.shadowIntensity=w.intensity,T.shadowBias=w.bias,T.shadowNormalBias=w.normalBias,T.shadowRadius=w.radius,T.shadowMapSize=w.mapSize,n.directionalShadow[f]=T,n.directionalShadowMap[f]=at,n.directionalShadowMatrix[f]=N.shadow.matrix,M++}n.directional[f]=F,f++}else if(N.isSpotLight){const F=t.get(N);F.position.setFromMatrixPosition(N.matrixWorld),F.color.copy(H).multiplyScalar(W),F.distance=K,F.coneCos=Math.cos(N.angle),F.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),F.decay=N.decay,n.spot[v]=F;const w=N.shadow;if(N.map&&(n.spotLightMap[U]=N.map,U++,w.updateMatrices(N),N.castShadow&&R++),n.spotLightMatrix[v]=w.matrix,N.castShadow){const T=e.get(N);T.shadowIntensity=w.intensity,T.shadowBias=w.bias,T.shadowNormalBias=w.normalBias,T.shadowRadius=w.radius,T.shadowMapSize=w.mapSize,n.spotShadow[v]=T,n.spotShadowMap[v]=at,_++}v++}else if(N.isRectAreaLight){const F=t.get(N);F.color.copy(H).multiplyScalar(W),F.halfWidth.set(N.width*.5,0,0),F.halfHeight.set(0,N.height*.5,0),n.rectArea[g]=F,g++}else if(N.isPointLight){const F=t.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity),F.distance=N.distance,F.decay=N.decay,N.castShadow){const w=N.shadow,T=e.get(N);T.shadowIntensity=w.intensity,T.shadowBias=w.bias,T.shadowNormalBias=w.normalBias,T.shadowRadius=w.radius,T.shadowMapSize=w.mapSize,T.shadowCameraNear=w.camera.near,T.shadowCameraFar=w.camera.far,n.pointShadow[p]=T,n.pointShadowMap[p]=at,n.pointShadowMatrix[p]=N.shadow.matrix,x++}n.point[p]=F,p++}else if(N.isHemisphereLight){const F=t.get(N);F.skyColor.copy(N.color).multiplyScalar(W),F.groundColor.copy(N.groundColor).multiplyScalar(W),n.hemi[m]=F,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==f||A.pointLength!==p||A.spotLength!==v||A.rectAreaLength!==g||A.hemiLength!==m||A.numDirectionalShadows!==M||A.numPointShadows!==x||A.numSpotShadows!==_||A.numSpotMaps!==U||A.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+U-R,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=E,A.directionalLength=f,A.pointLength=p,A.spotLength=v,A.rectAreaLength=g,A.hemiLength=m,A.numDirectionalShadows=M,A.numPointShadows=x,A.numSpotShadows=_,A.numSpotMaps=U,A.numLightProbes=E,n.version=d_++)}function l(c,h){let u=0,d=0,f=0,p=0,v=0;const g=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const x=c[m];if(x.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(x.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const _=n.rectArea[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),r.identity(),o.copy(x.matrixWorld),o.premultiply(g),r.extractRotation(o),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),p++}else if(x.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function Fh(i){const t=new p_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function m_(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Fh(i),t.set(s,[a])):o>=r.length?(a=new Fh(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class g_ extends Ri{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class v_ extends Ri{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const __=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
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
}`;function y_(i,t,e){let n=new cc;const s=new mt,o=new mt,r=new ye,a=new g_({depthPacking:Qf}),l=new v_,c={},h=e.maxTextureSize,u={[Ci]:Qe,[Qe]:Ci,[we]:we},d=new Ee({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:__,fragmentShader:x_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new ce;p.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Dt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qu;let m=this.type;this.render=function(R,E,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),H=i.state;H.setBlending(We),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const W=m!==oi&&this.type===oi,K=m===oi&&this.type!==oi;for(let at=0,F=R.length;at<F;at++){const w=R[at],T=w.shadow;if(T===void 0){console.warn("THREE.WebGLShadowMap:",w,"has no shadow.");continue}if(T.autoUpdate===!1&&T.needsUpdate===!1)continue;s.copy(T.mapSize);const O=T.getFrameExtents();if(s.multiply(O),o.copy(T.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/O.x),s.x=o.x*O.x,T.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/O.y),s.y=o.y*O.y,T.mapSize.y=o.y)),T.map===null||W===!0||K===!0){const V=this.type!==oi?{minFilter:rn,magFilter:rn}:{};T.map!==null&&T.map.dispose(),T.map=new hn(s.x,s.y,V),T.map.texture.name=w.name+".shadowMap",T.camera.updateProjectionMatrix()}i.setRenderTarget(T.map),i.clear();const X=T.getViewportCount();for(let V=0;V<X;V++){const Z=T.getViewport(V);r.set(o.x*Z.x,o.y*Z.y,o.x*Z.z,o.y*Z.w),H.viewport(r),T.updateMatrices(w,V),n=T.getFrustum(),_(E,A,T.camera,w,this.type)}T.isPointLightShadow!==!0&&this.type===oi&&M(T,A),T.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(S,y,N)};function M(R,E){const A=t.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new hn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(E,null,A,d,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(E,null,A,f,v,null)}function x(R,E,A,S){let y=null;const N=A.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)y=N;else if(y=A.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const H=y.uuid,W=E.uuid;let K=c[H];K===void 0&&(K={},c[H]=K);let at=K[W];at===void 0&&(at=y.clone(),K[W]=at,E.addEventListener("dispose",U)),y=at}if(y.visible=E.visible,y.wireframe=E.wireframe,S===oi?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:u[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=i.properties.get(y);H.light=A}return y}function _(R,E,A,S,y){if(R.visible===!1)return;if(R.layers.test(E.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===oi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,R.matrixWorld);const W=t.update(R),K=R.material;if(Array.isArray(K)){const at=W.groups;for(let F=0,w=at.length;F<w;F++){const T=at[F],O=K[T.materialIndex];if(O&&O.visible){const X=x(R,O,S,y);R.onBeforeShadow(i,R,E,A,W,X,T),i.renderBufferDirect(A,null,W,X,R,T),R.onAfterShadow(i,R,E,A,W,X,T)}}}else if(K.visible){const at=x(R,K,S,y);R.onBeforeShadow(i,R,E,A,W,at,null),i.renderBufferDirect(A,null,W,at,R,null),R.onAfterShadow(i,R,E,A,W,at,null)}}const H=R.children;for(let W=0,K=H.length;W<K;W++)_(H[W],E,A,S,y)}function U(R){R.target.removeEventListener("dispose",U);for(const A in c){const S=c[A],y=R.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const M_={[tl]:el,[nl]:ol,[il]:rl,[Is]:sl,[el]:tl,[ol]:nl,[rl]:il,[sl]:Is};function S_(i,t){function e(){let Y=!1;const Ct=new ye;let lt=null;const vt=new ye(0,0,0,0);return{setMask:function(Nt){lt!==Nt&&!Y&&(i.colorMask(Nt,Nt,Nt,Nt),lt=Nt)},setLocked:function(Nt){Y=Nt},setClear:function(Nt,Lt,ie,Re,je){je===!0&&(Nt*=Re,Lt*=Re,ie*=Re),Ct.set(Nt,Lt,ie,Re),vt.equals(Ct)===!1&&(i.clearColor(Nt,Lt,ie,Re),vt.copy(Ct))},reset:function(){Y=!1,lt=null,vt.set(-1,0,0,0)}}}function n(){let Y=!1,Ct=!1,lt=null,vt=null,Nt=null;return{setReversed:function(Lt){if(Ct!==Lt){const ie=t.get("EXT_clip_control");Ct?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT);const Re=Nt;Nt=null,this.setClear(Re)}Ct=Lt},getReversed:function(){return Ct},setTest:function(Lt){Lt?$(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(Lt){lt!==Lt&&!Y&&(i.depthMask(Lt),lt=Lt)},setFunc:function(Lt){if(Ct&&(Lt=M_[Lt]),vt!==Lt){switch(Lt){case tl:i.depthFunc(i.NEVER);break;case el:i.depthFunc(i.ALWAYS);break;case nl:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case il:i.depthFunc(i.EQUAL);break;case sl:i.depthFunc(i.GEQUAL);break;case ol:i.depthFunc(i.GREATER);break;case rl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=Lt}},setLocked:function(Lt){Y=Lt},setClear:function(Lt){Nt!==Lt&&(Ct&&(Lt=1-Lt),i.clearDepth(Lt),Nt=Lt)},reset:function(){Y=!1,lt=null,vt=null,Nt=null,Ct=!1}}}function s(){let Y=!1,Ct=null,lt=null,vt=null,Nt=null,Lt=null,ie=null,Re=null,je=null;return{setTest:function(_e){Y||(_e?$(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(_e){Ct!==_e&&!Y&&(i.stencilMask(_e),Ct=_e)},setFunc:function(_e,Sn,jn){(lt!==_e||vt!==Sn||Nt!==jn)&&(i.stencilFunc(_e,Sn,jn),lt=_e,vt=Sn,Nt=jn)},setOp:function(_e,Sn,jn){(Lt!==_e||ie!==Sn||Re!==jn)&&(i.stencilOp(_e,Sn,jn),Lt=_e,ie=Sn,Re=jn)},setLocked:function(_e){Y=_e},setClear:function(_e){je!==_e&&(i.clearStencil(_e),je=_e)},reset:function(){Y=!1,Ct=null,lt=null,vt=null,Nt=null,Lt=null,ie=null,Re=null,je=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,M=null,x=null,_=null,U=null,R=null,E=new Ft(0,0,0),A=0,S=!1,y=null,N=null,H=null,W=null,K=null;const at=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,w=0;const T=i.getParameter(i.VERSION);T.indexOf("WebGL")!==-1?(w=parseFloat(/^WebGL (\d)/.exec(T)[1]),F=w>=1):T.indexOf("OpenGL ES")!==-1&&(w=parseFloat(/^OpenGL ES (\d)/.exec(T)[1]),F=w>=2);let O=null,X={};const V=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),pt=new ye().fromArray(V),z=new ye().fromArray(Z);function G(Y,Ct,lt,vt){const Nt=new Uint8Array(4),Lt=i.createTexture();i.bindTexture(Y,Lt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ie=0;ie<lt;ie++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Nt):i.texImage2D(Ct+ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Nt);return Lt}const nt={};nt[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),$(i.DEPTH_TEST),r.setFunc(Is),ft(!1),yt(Hc),$(i.CULL_FACE),k(We);function $(Y){h[Y]!==!0&&(i.enable(Y),h[Y]=!0)}function tt(Y){h[Y]!==!1&&(i.disable(Y),h[Y]=!1)}function ct(Y,Ct){return u[Y]!==Ct?(i.bindFramebuffer(Y,Ct),u[Y]=Ct,Y===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ct),Y===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function gt(Y,Ct){let lt=f,vt=!1;if(Y){lt=d.get(Ct),lt===void 0&&(lt=[],d.set(Ct,lt));const Nt=Y.textures;if(lt.length!==Nt.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let Lt=0,ie=Nt.length;Lt<ie;Lt++)lt[Lt]=i.COLOR_ATTACHMENT0+Lt;lt.length=Nt.length,vt=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,vt=!0);vt&&i.drawBuffers(lt)}function Ut(Y){return p!==Y?(i.useProgram(Y),p=Y,!0):!1}const et={[Dn]:i.FUNC_ADD,[Uf]:i.FUNC_SUBTRACT,[Nf]:i.FUNC_REVERSE_SUBTRACT};et[Ff]=i.MIN,et[Of]=i.MAX;const ht={[so]:i.ZERO,[kf]:i.ONE,[Bf]:i.SRC_COLOR,[Za]:i.SRC_ALPHA,[Gf]:i.SRC_ALPHA_SATURATE,[Qa]:i.DST_COLOR,[Ja]:i.DST_ALPHA,[zf]:i.ONE_MINUS_SRC_COLOR,[Ka]:i.ONE_MINUS_SRC_ALPHA,[Vf]:i.ONE_MINUS_DST_COLOR,[Hf]:i.ONE_MINUS_DST_ALPHA,[Wf]:i.CONSTANT_COLOR,[Xf]:i.ONE_MINUS_CONSTANT_COLOR,[$f]:i.CONSTANT_ALPHA,[Yf]:i.ONE_MINUS_CONSTANT_ALPHA};function k(Y,Ct,lt,vt,Nt,Lt,ie,Re,je,_e){if(Y===We){v===!0&&(tt(i.BLEND),v=!1);return}if(v===!1&&($(i.BLEND),v=!0),Y!==Zu){if(Y!==g||_e!==S){if((m!==Dn||_!==Dn)&&(i.blendEquation(i.FUNC_ADD),m=Dn,_=Dn),_e)switch(Y){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dr:i.blendFunc(i.ONE,i.ONE);break;case Vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}M=null,x=null,U=null,R=null,E.set(0,0,0),A=0,g=Y,S=_e}return}Nt=Nt||Ct,Lt=Lt||lt,ie=ie||vt,(Ct!==m||Nt!==_)&&(i.blendEquationSeparate(et[Ct],et[Nt]),m=Ct,_=Nt),(lt!==M||vt!==x||Lt!==U||ie!==R)&&(i.blendFuncSeparate(ht[lt],ht[vt],ht[Lt],ht[ie]),M=lt,x=vt,U=Lt,R=ie),(Re.equals(E)===!1||je!==A)&&(i.blendColor(Re.r,Re.g,Re.b,je),E.copy(Re),A=je),g=Y,S=!1}function wt(Y,Ct){Y.side===we?tt(i.CULL_FACE):$(i.CULL_FACE);let lt=Y.side===Qe;Ct&&(lt=!lt),ft(lt),Y.blending===Cs&&Y.transparent===!1?k(We):k(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),r.setFunc(Y.depthFunc),r.setTest(Y.depthTest),r.setMask(Y.depthWrite),o.setMask(Y.colorWrite);const vt=Y.stencilWrite;a.setTest(vt),vt&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Ht(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(Y){y!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),y=Y)}function yt(Y){Y!==Lf?($(i.CULL_FACE),Y!==N&&(Y===Hc?i.cullFace(i.BACK):Y===If?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),N=Y}function St(Y){Y!==H&&(F&&i.lineWidth(Y),H=Y)}function Ht(Y,Ct,lt){Y?($(i.POLYGON_OFFSET_FILL),(W!==Ct||K!==lt)&&(i.polygonOffset(Ct,lt),W=Ct,K=lt)):tt(i.POLYGON_OFFSET_FILL)}function bt(Y){Y?$(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function I(Y){Y===void 0&&(Y=i.TEXTURE0+at-1),O!==Y&&(i.activeTexture(Y),O=Y)}function b(Y,Ct,lt){lt===void 0&&(O===null?lt=i.TEXTURE0+at-1:lt=O);let vt=X[lt];vt===void 0&&(vt={type:void 0,texture:void 0},X[lt]=vt),(vt.type!==Y||vt.texture!==Ct)&&(O!==lt&&(i.activeTexture(lt),O=lt),i.bindTexture(Y,Ct||nt[Y]),vt.type=Y,vt.texture=Ct)}function J(){const Y=X[O];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ut(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _t(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function dt(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function zt(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Tt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ne(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Mt(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function kt(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function qt(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Kt(Y){pt.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),pt.copy(Y))}function Bt(Y){z.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),z.copy(Y))}function he(Y,Ct){let lt=c.get(Ct);lt===void 0&&(lt=new WeakMap,c.set(Ct,lt));let vt=lt.get(Y);vt===void 0&&(vt=i.getUniformBlockIndex(Ct,Y.name),lt.set(Y,vt))}function te(Y,Ct){const vt=c.get(Ct).get(Y);l.get(Ct)!==vt&&(i.uniformBlockBinding(Ct,vt,Y.__bindingPointIndex),l.set(Ct,vt))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},O=null,X={},u={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,M=null,x=null,_=null,U=null,R=null,E=new Ft(0,0,0),A=0,S=!1,y=null,N=null,H=null,W=null,K=null,pt.set(0,0,i.canvas.width,i.canvas.height),z.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:$,disable:tt,bindFramebuffer:ct,drawBuffers:gt,useProgram:Ut,setBlending:k,setMaterial:wt,setFlipSided:ft,setCullFace:yt,setLineWidth:St,setPolygonOffset:Ht,setScissorTest:bt,activeTexture:I,bindTexture:b,unbindTexture:J,compressedTexImage2D:ut,compressedTexImage3D:_t,texImage2D:kt,texImage3D:qt,updateUBOMapping:he,uniformBlockBinding:te,texStorage2D:ne,texStorage3D:Mt,texSubImage2D:dt,texSubImage3D:zt,compressedTexSubImage2D:Tt,compressedTexSubImage3D:Pt,scissor:Kt,viewport:Bt,reset:fe}}function Oh(i,t,e,n){const s=b_(n);switch(e){case ad:return i*t;case cd:return i*t;case hd:return i*t*2;case nc:return i*t/s.components*s.byteLength;case ic:return i*t/s.components*s.byteLength;case ud:return i*t*2/s.components*s.byteLength;case sc:return i*t*2/s.components*s.byteLength;case ld:return i*t*3/s.components*s.byteLength;case yn:return i*t*4/s.components*s.byteLength;case oc:return i*t*4/s.components*s.byteLength;case vr:case _r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xr:case yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ul:case fl:return Math.max(i,16)*Math.max(t,8)/4;case hl:case dl:return Math.max(i,8)*Math.max(t,8)/2;case pl:case ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case gl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _l:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case yl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case bl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Al:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Rl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Pl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Mr:case Dl:case Ll:return Math.ceil(i/4)*Math.ceil(t/4)*16;case dd:case Il:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ul:case Nl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function b_(i){switch(i){case Xn:case sd:return{byteLength:1,components:1};case So:case od:case Mn:return{byteLength:2,components:1};case tc:case ec:return{byteLength:2,components:4};case qi:case Ql:case Gn:return{byteLength:4,components:1};case rd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function w_(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,b){return f?new OffscreenCanvas(I,b):Ir("canvas")}function v(I,b,J){let ut=1;const _t=bt(I);if((_t.width>J||_t.height>J)&&(ut=J/Math.max(_t.width,_t.height)),ut<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const dt=Math.floor(ut*_t.width),zt=Math.floor(ut*_t.height);u===void 0&&(u=p(dt,zt));const Tt=b?p(dt,zt):u;return Tt.width=dt,Tt.height=zt,Tt.getContext("2d").drawImage(I,0,0,dt,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+dt+"x"+zt+")."),Tt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),I;return I}function g(I){return I.generateMipmaps}function m(I){i.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(I,b,J,ut,_t=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let dt=b;if(b===i.RED&&(J===i.FLOAT&&(dt=i.R32F),J===i.HALF_FLOAT&&(dt=i.R16F),J===i.UNSIGNED_BYTE&&(dt=i.R8)),b===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(dt=i.R8UI),J===i.UNSIGNED_SHORT&&(dt=i.R16UI),J===i.UNSIGNED_INT&&(dt=i.R32UI),J===i.BYTE&&(dt=i.R8I),J===i.SHORT&&(dt=i.R16I),J===i.INT&&(dt=i.R32I)),b===i.RG&&(J===i.FLOAT&&(dt=i.RG32F),J===i.HALF_FLOAT&&(dt=i.RG16F),J===i.UNSIGNED_BYTE&&(dt=i.RG8)),b===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(dt=i.RG8UI),J===i.UNSIGNED_SHORT&&(dt=i.RG16UI),J===i.UNSIGNED_INT&&(dt=i.RG32UI),J===i.BYTE&&(dt=i.RG8I),J===i.SHORT&&(dt=i.RG16I),J===i.INT&&(dt=i.RG32I)),b===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(dt=i.RGB8UI),J===i.UNSIGNED_SHORT&&(dt=i.RGB16UI),J===i.UNSIGNED_INT&&(dt=i.RGB32UI),J===i.BYTE&&(dt=i.RGB8I),J===i.SHORT&&(dt=i.RGB16I),J===i.INT&&(dt=i.RGB32I)),b===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(dt=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(dt=i.RGBA16UI),J===i.UNSIGNED_INT&&(dt=i.RGBA32UI),J===i.BYTE&&(dt=i.RGBA8I),J===i.SHORT&&(dt=i.RGBA16I),J===i.INT&&(dt=i.RGBA32I)),b===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(dt=i.RGB9_E5),b===i.RGBA){const zt=_t?zr:de.getTransfer(ut);J===i.FLOAT&&(dt=i.RGBA32F),J===i.HALF_FLOAT&&(dt=i.RGBA16F),J===i.UNSIGNED_BYTE&&(dt=zt===xe?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(dt=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(dt=i.RGB5_A1)}return(dt===i.R16F||dt===i.R32F||dt===i.RG16F||dt===i.RG32F||dt===i.RGBA16F||dt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function _(I,b){let J;return I?b===null||b===qi||b===ji?J=i.DEPTH24_STENCIL8:b===Gn?J=i.DEPTH32F_STENCIL8:b===So&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===qi||b===ji?J=i.DEPTH_COMPONENT24:b===Gn?J=i.DEPTH_COMPONENT32F:b===So&&(J=i.DEPTH_COMPONENT16),J}function U(I,b){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==rn&&I.minFilter!==Vn?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function R(I){const b=I.target;b.removeEventListener("dispose",R),A(b),b.isVideoTexture&&h.delete(b)}function E(I){const b=I.target;b.removeEventListener("dispose",E),y(b)}function A(I){const b=n.get(I);if(b.__webglInit===void 0)return;const J=I.source,ut=d.get(J);if(ut){const _t=ut[b.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&S(I),Object.keys(ut).length===0&&d.delete(J)}n.remove(I)}function S(I){const b=n.get(I);i.deleteTexture(b.__webglTexture);const J=I.source,ut=d.get(J);delete ut[b.__cacheKey],r.memory.textures--}function y(I){const b=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(b.__webglFramebuffer[ut]))for(let _t=0;_t<b.__webglFramebuffer[ut].length;_t++)i.deleteFramebuffer(b.__webglFramebuffer[ut][_t]);else i.deleteFramebuffer(b.__webglFramebuffer[ut]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ut])}else{if(Array.isArray(b.__webglFramebuffer))for(let ut=0;ut<b.__webglFramebuffer.length;ut++)i.deleteFramebuffer(b.__webglFramebuffer[ut]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ut=0;ut<b.__webglColorRenderbuffer.length;ut++)b.__webglColorRenderbuffer[ut]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ut]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=I.textures;for(let ut=0,_t=J.length;ut<_t;ut++){const dt=n.get(J[ut]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),r.memory.textures--),n.remove(J[ut])}n.remove(I)}let N=0;function H(){N=0}function W(){const I=N;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),N+=1,I}function K(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function at(I,b){const J=n.get(I);if(I.isVideoTexture&&St(I),I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){const ut=I.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(J,I,b);return}}e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+b)}function F(I,b){const J=n.get(I);if(I.version>0&&J.__version!==I.version){z(J,I,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+b)}function w(I,b){const J=n.get(I);if(I.version>0&&J.__version!==I.version){z(J,I,b);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+b)}function T(I,b){const J=n.get(I);if(I.version>0&&J.__version!==I.version){G(J,I,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+b)}const O={[Wn]:i.REPEAT,[Vi]:i.CLAMP_TO_EDGE,[cl]:i.MIRRORED_REPEAT},X={[rn]:i.NEAREST,[Kf]:i.NEAREST_MIPMAP_NEAREST,[Uo]:i.NEAREST_MIPMAP_LINEAR,[Vn]:i.LINEAR,[jr]:i.LINEAR_MIPMAP_NEAREST,[Gi]:i.LINEAR_MIPMAP_LINEAR},V={[ep]:i.NEVER,[ap]:i.ALWAYS,[np]:i.LESS,[fd]:i.LEQUAL,[ip]:i.EQUAL,[rp]:i.GEQUAL,[sp]:i.GREATER,[op]:i.NOTEQUAL};function Z(I,b){if(b.type===Gn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Vn||b.magFilter===jr||b.magFilter===Uo||b.magFilter===Gi||b.minFilter===Vn||b.minFilter===jr||b.minFilter===Uo||b.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,O[b.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,O[b.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,O[b.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,X[b.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,X[b.minFilter]),b.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,V[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===rn||b.minFilter!==Uo&&b.minFilter!==Gi||b.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function pt(I,b){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",R));const ut=b.source;let _t=d.get(ut);_t===void 0&&(_t={},d.set(ut,_t));const dt=K(b);if(dt!==I.__cacheKey){_t[dt]===void 0&&(_t[dt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,J=!0),_t[dt].usedTimes++;const zt=_t[I.__cacheKey];zt!==void 0&&(_t[I.__cacheKey].usedTimes--,zt.usedTimes===0&&S(b)),I.__cacheKey=dt,I.__webglTexture=_t[dt].texture}return J}function z(I,b,J){let ut=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ut=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ut=i.TEXTURE_3D);const _t=pt(I,b),dt=b.source;e.bindTexture(ut,I.__webglTexture,i.TEXTURE0+J);const zt=n.get(dt);if(dt.version!==zt.__version||_t===!0){e.activeTexture(i.TEXTURE0+J);const Tt=de.getPrimaries(de.workingColorSpace),Pt=b.colorSpace===Si?null:de.getPrimaries(b.colorSpace),ne=b.colorSpace===Si||Tt===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Mt=v(b.image,!1,s.maxTextureSize);Mt=Ht(b,Mt);const kt=o.convert(b.format,b.colorSpace),qt=o.convert(b.type);let Kt=x(b.internalFormat,kt,qt,b.colorSpace,b.isVideoTexture);Z(ut,b);let Bt;const he=b.mipmaps,te=b.isVideoTexture!==!0,fe=zt.__version===void 0||_t===!0,Y=dt.dataReady,Ct=U(b,Mt);if(b.isDepthTexture)Kt=_(b.format===Zi,b.type),fe&&(te?e.texStorage2D(i.TEXTURE_2D,1,Kt,Mt.width,Mt.height):e.texImage2D(i.TEXTURE_2D,0,Kt,Mt.width,Mt.height,0,kt,qt,null));else if(b.isDataTexture)if(he.length>0){te&&fe&&e.texStorage2D(i.TEXTURE_2D,Ct,Kt,he[0].width,he[0].height);for(let lt=0,vt=he.length;lt<vt;lt++)Bt=he[lt],te?Y&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Bt.width,Bt.height,kt,qt,Bt.data):e.texImage2D(i.TEXTURE_2D,lt,Kt,Bt.width,Bt.height,0,kt,qt,Bt.data);b.generateMipmaps=!1}else te?(fe&&e.texStorage2D(i.TEXTURE_2D,Ct,Kt,Mt.width,Mt.height),Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt.width,Mt.height,kt,qt,Mt.data)):e.texImage2D(i.TEXTURE_2D,0,Kt,Mt.width,Mt.height,0,kt,qt,Mt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){te&&fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Kt,he[0].width,he[0].height,Mt.depth);for(let lt=0,vt=he.length;lt<vt;lt++)if(Bt=he[lt],b.format!==yn)if(kt!==null)if(te){if(Y)if(b.layerUpdates.size>0){const Nt=Oh(Bt.width,Bt.height,b.format,b.type);for(const Lt of b.layerUpdates){const ie=Bt.data.subarray(Lt*Nt/Bt.data.BYTES_PER_ELEMENT,(Lt+1)*Nt/Bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,Lt,Bt.width,Bt.height,1,kt,ie)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Bt.width,Bt.height,Mt.depth,kt,Bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,Kt,Bt.width,Bt.height,Mt.depth,0,Bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?Y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Bt.width,Bt.height,Mt.depth,kt,qt,Bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,Kt,Bt.width,Bt.height,Mt.depth,0,kt,qt,Bt.data)}else{te&&fe&&e.texStorage2D(i.TEXTURE_2D,Ct,Kt,he[0].width,he[0].height);for(let lt=0,vt=he.length;lt<vt;lt++)Bt=he[lt],b.format!==yn?kt!==null?te?Y&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,Bt.width,Bt.height,kt,Bt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,Kt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?Y&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Bt.width,Bt.height,kt,qt,Bt.data):e.texImage2D(i.TEXTURE_2D,lt,Kt,Bt.width,Bt.height,0,kt,qt,Bt.data)}else if(b.isDataArrayTexture)if(te){if(fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Kt,Mt.width,Mt.height,Mt.depth),Y)if(b.layerUpdates.size>0){const lt=Oh(Mt.width,Mt.height,b.format,b.type);for(const vt of b.layerUpdates){const Nt=Mt.data.subarray(vt*lt/Mt.data.BYTES_PER_ELEMENT,(vt+1)*lt/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,Mt.width,Mt.height,1,kt,qt,Nt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,kt,qt,Mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Kt,Mt.width,Mt.height,Mt.depth,0,kt,qt,Mt.data);else if(b.isData3DTexture)te?(fe&&e.texStorage3D(i.TEXTURE_3D,Ct,Kt,Mt.width,Mt.height,Mt.depth),Y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,kt,qt,Mt.data)):e.texImage3D(i.TEXTURE_3D,0,Kt,Mt.width,Mt.height,Mt.depth,0,kt,qt,Mt.data);else if(b.isFramebufferTexture){if(fe)if(te)e.texStorage2D(i.TEXTURE_2D,Ct,Kt,Mt.width,Mt.height);else{let lt=Mt.width,vt=Mt.height;for(let Nt=0;Nt<Ct;Nt++)e.texImage2D(i.TEXTURE_2D,Nt,Kt,lt,vt,0,kt,qt,null),lt>>=1,vt>>=1}}else if(he.length>0){if(te&&fe){const lt=bt(he[0]);e.texStorage2D(i.TEXTURE_2D,Ct,Kt,lt.width,lt.height)}for(let lt=0,vt=he.length;lt<vt;lt++)Bt=he[lt],te?Y&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,kt,qt,Bt):e.texImage2D(i.TEXTURE_2D,lt,Kt,kt,qt,Bt);b.generateMipmaps=!1}else if(te){if(fe){const lt=bt(Mt);e.texStorage2D(i.TEXTURE_2D,Ct,Kt,lt.width,lt.height)}Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,qt,Mt)}else e.texImage2D(i.TEXTURE_2D,0,Kt,kt,qt,Mt);g(b)&&m(ut),zt.__version=dt.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function G(I,b,J){if(b.image.length!==6)return;const ut=pt(I,b),_t=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+J);const dt=n.get(_t);if(_t.version!==dt.__version||ut===!0){e.activeTexture(i.TEXTURE0+J);const zt=de.getPrimaries(de.workingColorSpace),Tt=b.colorSpace===Si?null:de.getPrimaries(b.colorSpace),Pt=b.colorSpace===Si||zt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const ne=b.isCompressedTexture||b.image[0].isCompressedTexture,Mt=b.image[0]&&b.image[0].isDataTexture,kt=[];for(let vt=0;vt<6;vt++)!ne&&!Mt?kt[vt]=v(b.image[vt],!0,s.maxCubemapSize):kt[vt]=Mt?b.image[vt].image:b.image[vt],kt[vt]=Ht(b,kt[vt]);const qt=kt[0],Kt=o.convert(b.format,b.colorSpace),Bt=o.convert(b.type),he=x(b.internalFormat,Kt,Bt,b.colorSpace),te=b.isVideoTexture!==!0,fe=dt.__version===void 0||ut===!0,Y=_t.dataReady;let Ct=U(b,qt);Z(i.TEXTURE_CUBE_MAP,b);let lt;if(ne){te&&fe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,he,qt.width,qt.height);for(let vt=0;vt<6;vt++){lt=kt[vt].mipmaps;for(let Nt=0;Nt<lt.length;Nt++){const Lt=lt[Nt];b.format!==yn?Kt!==null?te?Y&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt,0,0,Lt.width,Lt.height,Kt,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt,he,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt,0,0,Lt.width,Lt.height,Kt,Bt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt,he,Lt.width,Lt.height,0,Kt,Bt,Lt.data)}}}else{if(lt=b.mipmaps,te&&fe){lt.length>0&&Ct++;const vt=bt(kt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,he,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Mt){te?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,kt[vt].width,kt[vt].height,Kt,Bt,kt[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,he,kt[vt].width,kt[vt].height,0,Kt,Bt,kt[vt].data);for(let Nt=0;Nt<lt.length;Nt++){const ie=lt[Nt].image[vt].image;te?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt+1,0,0,ie.width,ie.height,Kt,Bt,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt+1,he,ie.width,ie.height,0,Kt,Bt,ie.data)}}else{te?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Kt,Bt,kt[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,he,Kt,Bt,kt[vt]);for(let Nt=0;Nt<lt.length;Nt++){const Lt=lt[Nt];te?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt+1,0,0,Kt,Bt,Lt.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt+1,he,Kt,Bt,Lt.image[vt])}}}g(b)&&m(i.TEXTURE_CUBE_MAP),dt.__version=_t.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function nt(I,b,J,ut,_t,dt){const zt=o.convert(J.format,J.colorSpace),Tt=o.convert(J.type),Pt=x(J.internalFormat,zt,Tt,J.colorSpace),ne=n.get(b),Mt=n.get(J);if(Mt.__renderTarget=b,!ne.__hasExternalTextures){const kt=Math.max(1,b.width>>dt),qt=Math.max(1,b.height>>dt);_t===i.TEXTURE_3D||_t===i.TEXTURE_2D_ARRAY?e.texImage3D(_t,dt,Pt,kt,qt,b.depth,0,zt,Tt,null):e.texImage2D(_t,dt,Pt,kt,qt,0,zt,Tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),yt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,_t,Mt.__webglTexture,0,ft(b)):(_t===i.TEXTURE_2D||_t>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ut,_t,Mt.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function $(I,b,J){if(i.bindRenderbuffer(i.RENDERBUFFER,I),b.depthBuffer){const ut=b.depthTexture,_t=ut&&ut.isDepthTexture?ut.type:null,dt=_(b.stencilBuffer,_t),zt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=ft(b);yt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,dt,b.width,b.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,dt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,dt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,zt,i.RENDERBUFFER,I)}else{const ut=b.textures;for(let _t=0;_t<ut.length;_t++){const dt=ut[_t],zt=o.convert(dt.format,dt.colorSpace),Tt=o.convert(dt.type),Pt=x(dt.internalFormat,zt,Tt,dt.colorSpace),ne=ft(b);J&&yt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,Pt,b.width,b.height):yt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,Pt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function tt(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=n.get(b.depthTexture);ut.__renderTarget=b,(!ut.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),at(b.depthTexture,0);const _t=ut.__webglTexture,dt=ft(b);if(b.depthTexture.format===Rs)yt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_t,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_t,0);else if(b.depthTexture.format===Zi)yt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_t,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function ct(I){const b=n.get(I),J=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const ut=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ut){const _t=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ut.removeEventListener("dispose",_t)};ut.addEventListener("dispose",_t),b.__depthDisposeCallback=_t}b.__boundDepthTexture=ut}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");tt(b.__webglFramebuffer,I)}else if(J){b.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ut]),b.__webglDepthbuffer[ut]===void 0)b.__webglDepthbuffer[ut]=i.createRenderbuffer(),$(b.__webglDepthbuffer[ut],I,!1);else{const _t=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer[ut];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,dt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),$(b.__webglDepthbuffer,I,!1);else{const ut=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,_t)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(I,b,J){const ut=n.get(I);b!==void 0&&nt(ut.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&ct(I)}function Ut(I){const b=I.texture,J=n.get(I),ut=n.get(b);I.addEventListener("dispose",E);const _t=I.textures,dt=I.isWebGLCubeRenderTarget===!0,zt=_t.length>1;if(zt||(ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture()),ut.__version=b.version,r.memory.textures++),dt){J.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[Tt]=[];for(let Pt=0;Pt<b.mipmaps.length;Pt++)J.__webglFramebuffer[Tt][Pt]=i.createFramebuffer()}else J.__webglFramebuffer[Tt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let Tt=0;Tt<b.mipmaps.length;Tt++)J.__webglFramebuffer[Tt]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(zt)for(let Tt=0,Pt=_t.length;Tt<Pt;Tt++){const ne=n.get(_t[Tt]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),r.memory.textures++)}if(I.samples>0&&yt(I)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Tt=0;Tt<_t.length;Tt++){const Pt=_t[Tt];J.__webglColorRenderbuffer[Tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Tt]);const ne=o.convert(Pt.format,Pt.colorSpace),Mt=o.convert(Pt.type),kt=x(Pt.internalFormat,ne,Mt,Pt.colorSpace,I.isXRRenderTarget===!0),qt=ft(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,kt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,J.__webglColorRenderbuffer[Tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),$(J.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),Z(i.TEXTURE_CUBE_MAP,b);for(let Tt=0;Tt<6;Tt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Pt=0;Pt<b.mipmaps.length;Pt++)nt(J.__webglFramebuffer[Tt][Pt],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Pt);else nt(J.__webglFramebuffer[Tt],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);g(b)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let Tt=0,Pt=_t.length;Tt<Pt;Tt++){const ne=_t[Tt],Mt=n.get(ne);e.bindTexture(i.TEXTURE_2D,Mt.__webglTexture),Z(i.TEXTURE_2D,ne),nt(J.__webglFramebuffer,I,ne,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,0),g(ne)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let Tt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Tt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,ut.__webglTexture),Z(Tt,b),b.mipmaps&&b.mipmaps.length>0)for(let Pt=0;Pt<b.mipmaps.length;Pt++)nt(J.__webglFramebuffer[Pt],I,b,i.COLOR_ATTACHMENT0,Tt,Pt);else nt(J.__webglFramebuffer,I,b,i.COLOR_ATTACHMENT0,Tt,0);g(b)&&m(Tt),e.unbindTexture()}I.depthBuffer&&ct(I)}function et(I){const b=I.textures;for(let J=0,ut=b.length;J<ut;J++){const _t=b[J];if(g(_t)){const dt=M(I),zt=n.get(_t).__webglTexture;e.bindTexture(dt,zt),m(dt),e.unbindTexture()}}}const ht=[],k=[];function wt(I){if(I.samples>0){if(yt(I)===!1){const b=I.textures,J=I.width,ut=I.height;let _t=i.COLOR_BUFFER_BIT;const dt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,zt=n.get(I),Tt=b.length>1;if(Tt)for(let Pt=0;Pt<b.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Pt=0;Pt<b.length;Pt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(_t|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(_t|=i.STENCIL_BUFFER_BIT)),Tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,zt.__webglColorRenderbuffer[Pt]);const ne=n.get(b[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,J,ut,0,0,J,ut,_t,i.NEAREST),l===!0&&(ht.length=0,k.length=0,ht.push(i.COLOR_ATTACHMENT0+Pt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ht.push(dt),k.push(dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Tt)for(let Pt=0;Pt<b.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,zt.__webglColorRenderbuffer[Pt]);const ne=n.get(b[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,ne,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const b=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ft(I){return Math.min(s.maxSamples,I.samples)}function yt(I){const b=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function St(I){const b=r.render.frame;h.get(I)!==b&&(h.set(I,b),I.update())}function Ht(I,b){const J=I.colorSpace,ut=I.format,_t=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||J!==ks&&J!==Si&&(de.getTransfer(J)===xe?(ut!==yn||_t!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),b}function bt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=H,this.setTexture2D=at,this.setTexture2DArray=F,this.setTexture3D=w,this.setTextureCube=T,this.rebindTextures=gt,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=yt}function E_(i,t){function e(n,s=Si){let o;const r=de.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===tc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ec)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sd)return i.BYTE;if(n===od)return i.SHORT;if(n===So)return i.UNSIGNED_SHORT;if(n===Ql)return i.INT;if(n===qi)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===ad)return i.ALPHA;if(n===ld)return i.RGB;if(n===yn)return i.RGBA;if(n===cd)return i.LUMINANCE;if(n===hd)return i.LUMINANCE_ALPHA;if(n===Rs)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===nc)return i.RED;if(n===ic)return i.RED_INTEGER;if(n===ud)return i.RG;if(n===sc)return i.RG_INTEGER;if(n===oc)return i.RGBA_INTEGER;if(n===vr||n===_r||n===xr||n===yr)if(r===xe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===vr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===vr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hl||n===ul||n===dl||n===fl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===hl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ul)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pl||n===ml||n===gl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===pl||n===ml)return r===xe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===gl)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vl||n===_l||n===xl||n===yl||n===Ml||n===Sl||n===bl||n===wl||n===El||n===Tl||n===Al||n===Cl||n===Rl||n===Pl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===vl)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_l)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xl)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yl)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ml)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sl)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bl)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wl)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===El)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tl)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Al)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cl)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rl)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pl)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mr||n===Dl||n===Ll)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Mr)return r===xe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ll)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dd||n===Il||n===Ul||n===Nl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Mr)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Il)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ul)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class T_ extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Zt extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A_={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(A_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const C_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R_=`
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

}`;class P_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new tn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ee({vertexShader:C_,fragmentShader:R_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dt(new Pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D_ extends Ji{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const v=new P_,g=e.getContextAttributes();let m=null,M=null;const x=[],_=[],U=new mt;let R=null;const E=new mn;E.viewport=new ye;const A=new mn;A.viewport=new ye;const S=[E,A],y=new T_;let N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let G=x[z];return G===void 0&&(G=new Sa,x[z]=G),G.getTargetRaySpace()},this.getControllerGrip=function(z){let G=x[z];return G===void 0&&(G=new Sa,x[z]=G),G.getGripSpace()},this.getHand=function(z){let G=x[z];return G===void 0&&(G=new Sa,x[z]=G),G.getHandSpace()};function W(z){const G=_.indexOf(z.inputSource);if(G===-1)return;const nt=x[G];nt!==void 0&&(nt.update(z.inputSource,z.frame,c||r),nt.dispatchEvent({type:z.type,data:z.inputSource}))}function K(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",at);for(let z=0;z<x.length;z++){const G=_[z];G!==null&&(_[z]=null,x[z].disconnect(G))}N=null,H=null,v.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,M=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",K),s.addEventListener("inputsourceschange",at),g.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const G={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,G),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new hn(f.framebufferWidth,f.framebufferHeight,{format:yn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let G=null,nt=null,$=null;g.depth&&($=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,G=g.stencil?Zi:Rs,nt=g.stencil?ji:qi);const tt={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(tt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new hn(d.textureWidth,d.textureHeight,{format:yn,type:Xn,depthTexture:new dc(d.textureWidth,d.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),pt.setContext(s),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function at(z){for(let G=0;G<z.removed.length;G++){const nt=z.removed[G],$=_.indexOf(nt);$>=0&&(_[$]=null,x[$].disconnect(nt))}for(let G=0;G<z.added.length;G++){const nt=z.added[G];let $=_.indexOf(nt);if($===-1){for(let ct=0;ct<x.length;ct++)if(ct>=_.length){_.push(nt),$=ct;break}else if(_[ct]===null){_[ct]=nt,$=ct;break}if($===-1)break}const tt=x[$];tt&&tt.connect(nt)}}const F=new L,w=new L;function T(z,G,nt){F.setFromMatrixPosition(G.matrixWorld),w.setFromMatrixPosition(nt.matrixWorld);const $=F.distanceTo(w),tt=G.projectionMatrix.elements,ct=nt.projectionMatrix.elements,gt=tt[14]/(tt[10]-1),Ut=tt[14]/(tt[10]+1),et=(tt[9]+1)/tt[5],ht=(tt[9]-1)/tt[5],k=(tt[8]-1)/tt[0],wt=(ct[8]+1)/ct[0],ft=gt*k,yt=gt*wt,St=$/(-k+wt),Ht=St*-k;if(G.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ht),z.translateZ(St),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),tt[10]===-1)z.projectionMatrix.copy(G.projectionMatrix),z.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const bt=gt+St,I=Ut+St,b=ft-Ht,J=yt+($-Ht),ut=et*Ut/I*bt,_t=ht*Ut/I*bt;z.projectionMatrix.makePerspective(b,J,ut,_t,bt,I),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function O(z,G){G===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(G.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let G=z.near,nt=z.far;v.texture!==null&&(v.depthNear>0&&(G=v.depthNear),v.depthFar>0&&(nt=v.depthFar)),y.near=A.near=E.near=G,y.far=A.far=E.far=nt,(N!==y.near||H!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),N=y.near,H=y.far),E.layers.mask=z.layers.mask|2,A.layers.mask=z.layers.mask|4,y.layers.mask=E.layers.mask|A.layers.mask;const $=z.parent,tt=y.cameras;O(y,$);for(let ct=0;ct<tt.length;ct++)O(tt[ct],$);tt.length===2?T(y,E,A):y.projectionMatrix.copy(E.projectionMatrix),X(z,y,$)};function X(z,G,nt){nt===null?z.matrix.copy(G.matrixWorld):(z.matrix.copy(nt.matrixWorld),z.matrix.invert(),z.matrix.multiply(G.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(G.projectionMatrix),z.projectionMatrixInverse.copy(G.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=bo*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let V=null;function Z(z,G){if(h=G.getViewerPose(c||r),p=G,h!==null){const nt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let $=!1;nt.length!==y.cameras.length&&(y.cameras.length=0,$=!0);for(let ct=0;ct<nt.length;ct++){const gt=nt[ct];let Ut=null;if(f!==null)Ut=f.getViewport(gt);else{const ht=u.getViewSubImage(d,gt);Ut=ht.viewport,ct===0&&(t.setRenderTargetTextures(M,ht.colorTexture,d.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(M))}let et=S[ct];et===void 0&&(et=new mn,et.layers.enable(ct),et.viewport=new ye,S[ct]=et),et.matrix.fromArray(gt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(gt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),ct===0&&(y.matrix.copy(et.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),$===!0&&y.cameras.push(et)}const tt=s.enabledFeatures;if(tt&&tt.includes("depth-sensing")){const ct=u.getDepthInformation(nt[0]);ct&&ct.isValid&&ct.texture&&v.init(t,ct,s.renderState)}}for(let nt=0;nt<x.length;nt++){const $=_[nt],tt=x[nt];$!==null&&tt!==void 0&&tt.update($,G,c||r)}V&&V(z,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),p=null}const pt=new bd;pt.setAnimationLoop(Z),this.setAnimationLoop=function(z){V=z},this.dispose=function(){}}}const Oi=new $n,L_=new le;function I_(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,yd(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,x,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(g,m):m.isMeshToonMaterial?(o(g,m),u(g,m)):m.isMeshPhongMaterial?(o(g,m),h(g,m)):m.isMeshStandardMaterial?(o(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(o(g,m),p(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),v(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,M,x):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Qe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Qe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const M=t.get(m),x=M.envMap,_=M.envMapRotation;x&&(g.envMap.value=x,Oi.copy(_),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),g.envMapRotation.value.setFromMatrix4(L_.makeRotationFromEuler(Oi)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=x*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qe&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function U_(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const _=x.program;n.uniformBlockBinding(M,_)}function c(M,x){let _=s[M.id];_===void 0&&(p(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",g));const U=x.program;n.updateUBOMapping(M,U);const R=t.render.frame;o[M.id]!==R&&(d(M),o[M.id]=R)}function h(M){const x=u();M.__bindingPointIndex=x;const _=i.createBuffer(),U=M.__size,R=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,U,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function u(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=s[M.id],_=M.uniforms,U=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,E=_.length;R<E;R++){const A=Array.isArray(_[R])?_[R]:[_[R]];for(let S=0,y=A.length;S<y;S++){const N=A[S];if(f(N,R,S,U)===!0){const H=N.__offset,W=Array.isArray(N.value)?N.value:[N.value];let K=0;for(let at=0;at<W.length;at++){const F=W[at],w=v(F);typeof F=="number"||typeof F=="boolean"?(N.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,H+K,N.__data)):F.isMatrix3?(N.__data[0]=F.elements[0],N.__data[1]=F.elements[1],N.__data[2]=F.elements[2],N.__data[3]=0,N.__data[4]=F.elements[3],N.__data[5]=F.elements[4],N.__data[6]=F.elements[5],N.__data[7]=0,N.__data[8]=F.elements[6],N.__data[9]=F.elements[7],N.__data[10]=F.elements[8],N.__data[11]=0):(F.toArray(N.__data,K),K+=w.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,x,_,U){const R=M.value,E=x+"_"+_;if(U[E]===void 0)return typeof R=="number"||typeof R=="boolean"?U[E]=R:U[E]=R.clone(),!0;{const A=U[E];if(typeof R=="number"||typeof R=="boolean"){if(A!==R)return U[E]=R,!0}else if(A.equals(R)===!1)return A.copy(R),!0}return!1}function p(M){const x=M.uniforms;let _=0;const U=16;for(let E=0,A=x.length;E<A;E++){const S=Array.isArray(x[E])?x[E]:[x[E]];for(let y=0,N=S.length;y<N;y++){const H=S[y],W=Array.isArray(H.value)?H.value:[H.value];for(let K=0,at=W.length;K<at;K++){const F=W[K],w=v(F),T=_%U,O=T%w.boundary,X=T+O;_+=O,X!==0&&U-X<w.storage&&(_+=U-X),H.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=w.storage}}}const R=_%U;return R>0&&(_+=U-R),M.__size=_,M.__cache={},this}function v(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function g(M){const x=M.target;x.removeEventListener("dispose",g);const _=r.indexOf(x.__bindingPointIndex);r.splice(_,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete o[x.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);r=[],s={},o={}}return{bind:l,update:c,dispose:m}}class N_{constructor(t={}){const{canvas:e=wp(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this.toneMapping=Ai,this.toneMappingExposure=1;const _=this;let U=!1,R=0,E=0,A=null,S=-1,y=null;const N=new ye,H=new ye;let W=null;const K=new Ft(0);let at=0,F=e.width,w=e.height,T=1,O=null,X=null;const V=new ye(0,0,F,w),Z=new ye(0,0,F,w);let pt=!1;const z=new cc;let G=!1,nt=!1;const $=new le,tt=new le,ct=new L,gt=new ye,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function ht(){return A===null?T:1}let k=n;function wt(C,q){return e.getContext(C,q)}try{const C={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kl}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",Nt,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),k===null){const q="webgl2";if(k=wt(q,C),k===null)throw wt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ft,yt,St,Ht,bt,I,b,J,ut,_t,dt,zt,Tt,Pt,ne,Mt,kt,qt,Kt,Bt,he,te,fe,Y;function Ct(){ft=new zg(k),ft.init(),te=new E_(k,ft),yt=new Ug(k,ft,t,te),St=new S_(k,ft),yt.reverseDepthBuffer&&d&&St.buffers.depth.setReversed(!0),Ht=new Gg(k),bt=new a_,I=new w_(k,ft,St,bt,yt,te,Ht),b=new Fg(_),J=new Bg(_),ut=new Zp(k),fe=new Lg(k,ut),_t=new Hg(k,ut,Ht,fe),dt=new Xg(k,_t,ut,Ht),Kt=new Wg(k,yt,I),Mt=new Ng(bt),zt=new r_(_,b,J,ft,yt,fe,Mt),Tt=new I_(_,bt),Pt=new c_,ne=new m_(ft),qt=new Dg(_,b,J,St,dt,f,l),kt=new y_(_,dt,yt),Y=new U_(k,Ht,yt,St),Bt=new Ig(k,ft,Ht),he=new Vg(k,ft,Ht),Ht.programs=zt.programs,_.capabilities=yt,_.extensions=ft,_.properties=bt,_.renderLists=Pt,_.shadowMap=kt,_.state=St,_.info=Ht}Ct();const lt=new D_(_,k);this.xr=lt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=ft.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ft.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return T},this.setPixelRatio=function(C){C!==void 0&&(T=C,this.setSize(F,w,!1))},this.getSize=function(C){return C.set(F,w)},this.setSize=function(C,q,ot=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,w=q,e.width=Math.floor(C*T),e.height=Math.floor(q*T),ot===!0&&(e.style.width=C+"px",e.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(F*T,w*T).floor()},this.setDrawingBufferSize=function(C,q,ot){F=C,w=q,T=ot,e.width=Math.floor(C*ot),e.height=Math.floor(q*ot),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(N)},this.getViewport=function(C){return C.copy(V)},this.setViewport=function(C,q,ot,rt){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,q,ot,rt),St.viewport(N.copy(V).multiplyScalar(T).round())},this.getScissor=function(C){return C.copy(Z)},this.setScissor=function(C,q,ot,rt){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,q,ot,rt),St.scissor(H.copy(Z).multiplyScalar(T).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(C){St.setScissorTest(pt=C)},this.setOpaqueSort=function(C){O=C},this.setTransparentSort=function(C){X=C},this.getClearColor=function(C){return C.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(C=!0,q=!0,ot=!0){let rt=0;if(C){let j=!1;if(A!==null){const Et=A.texture.format;j=Et===oc||Et===sc||Et===ic}if(j){const Et=A.texture.type,It=Et===Xn||Et===qi||Et===So||Et===ji||Et===tc||Et===ec,Gt=qt.getClearColor(),Wt=qt.getClearAlpha(),ee=Gt.r,se=Gt.g,Xt=Gt.b;It?(p[0]=ee,p[1]=se,p[2]=Xt,p[3]=Wt,k.clearBufferuiv(k.COLOR,0,p)):(v[0]=ee,v[1]=se,v[2]=Xt,v[3]=Wt,k.clearBufferiv(k.COLOR,0,v))}else rt|=k.COLOR_BUFFER_BIT}q&&(rt|=k.DEPTH_BUFFER_BIT),ot&&(rt|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),Pt.dispose(),ne.dispose(),bt.dispose(),b.dispose(),J.dispose(),dt.dispose(),fe.dispose(),Y.dispose(),zt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Rc),lt.removeEventListener("sessionend",Pc),Di.stop()};function vt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const C=Ht.autoReset,q=kt.enabled,ot=kt.autoUpdate,rt=kt.needsUpdate,j=kt.type;Ct(),Ht.autoReset=C,kt.enabled=q,kt.autoUpdate=ot,kt.needsUpdate=rt,kt.type=j}function Lt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ie(C){const q=C.target;q.removeEventListener("dispose",ie),Re(q)}function Re(C){je(C),bt.remove(C)}function je(C){const q=bt.get(C).programs;q!==void 0&&(q.forEach(function(ot){zt.releaseProgram(ot)}),C.isShaderMaterial&&zt.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,ot,rt,j,Et){q===null&&(q=Ut);const It=j.isMesh&&j.matrixWorld.determinant()<0,Gt=Qd(C,q,ot,rt,j);St.setMaterial(rt,It);let Wt=ot.index,ee=1;if(rt.wireframe===!0){if(Wt=_t.getWireframeAttribute(ot),Wt===void 0)return;ee=2}const se=ot.drawRange,Xt=ot.attributes.position;let pe=se.start*ee,be=(se.start+se.count)*ee;Et!==null&&(pe=Math.max(pe,Et.start*ee),be=Math.min(be,(Et.start+Et.count)*ee)),Wt!==null?(pe=Math.max(pe,0),be=Math.min(be,Wt.count)):Xt!=null&&(pe=Math.max(pe,0),be=Math.min(be,Xt.count));const Te=be-pe;if(Te<0||Te===1/0)return;fe.setup(j,rt,Gt,ot,Wt);let ln,me=Bt;if(Wt!==null&&(ln=ut.get(Wt),me=he,me.setIndex(ln)),j.isMesh)rt.wireframe===!0?(St.setLineWidth(rt.wireframeLinewidth*ht()),me.setMode(k.LINES)):me.setMode(k.TRIANGLES);else if(j.isLine){let $t=rt.linewidth;$t===void 0&&($t=1),St.setLineWidth($t*ht()),j.isLineSegments?me.setMode(k.LINES):j.isLineLoop?me.setMode(k.LINE_LOOP):me.setMode(k.LINE_STRIP)}else j.isPoints?me.setMode(k.POINTS):j.isSprite&&me.setMode(k.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)me.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))me.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const $t=j._multiDrawStarts,Zn=j._multiDrawCounts,ge=j._multiDrawCount,bn=Wt?ut.get(Wt).bytesPerElement:1,ss=bt.get(rt).currentProgram.getUniforms();for(let un=0;un<ge;un++)ss.setValue(k,"_gl_DrawID",un),me.render($t[un]/bn,Zn[un])}else if(j.isInstancedMesh)me.renderInstances(pe,Te,j.count);else if(ot.isInstancedBufferGeometry){const $t=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Zn=Math.min(ot.instanceCount,$t);me.renderInstances(pe,Te,Zn)}else me.render(pe,Te)};function _e(C,q,ot){C.transparent===!0&&C.side===we&&C.forceSinglePass===!1?(C.side=Qe,C.needsUpdate=!0,Lo(C,q,ot),C.side=Ci,C.needsUpdate=!0,Lo(C,q,ot),C.side=we):Lo(C,q,ot)}this.compile=function(C,q,ot=null){ot===null&&(ot=C),m=ne.get(ot),m.init(q),x.push(m),ot.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),C!==ot&&C.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights();const rt=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Et=j.material;if(Et)if(Array.isArray(Et))for(let It=0;It<Et.length;It++){const Gt=Et[It];_e(Gt,ot,j),rt.add(Gt)}else _e(Et,ot,j),rt.add(Et)}),x.pop(),m=null,rt},this.compileAsync=function(C,q,ot=null){const rt=this.compile(C,q,ot);return new Promise(j=>{function Et(){if(rt.forEach(function(It){bt.get(It).currentProgram.isReady()&&rt.delete(It)}),rt.size===0){j(C);return}setTimeout(Et,10)}ft.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Sn=null;function jn(C){Sn&&Sn(C)}function Rc(){Di.stop()}function Pc(){Di.start()}const Di=new bd;Di.setAnimationLoop(jn),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(C){Sn=C,lt.setAnimationLoop(C),C===null?Di.stop():Di.start()},lt.addEventListener("sessionstart",Rc),lt.addEventListener("sessionend",Pc),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(q),q=lt.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,q,A),m=ne.get(C,x.length),m.init(q),x.push(m),tt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),z.setFromProjectionMatrix(tt),nt=this.localClippingEnabled,G=Mt.init(this.clippingPlanes,nt),g=Pt.get(C,M.length),g.init(),M.push(g),lt.enabled===!0&&lt.isPresenting===!0){const Et=_.xr.getDepthSensingMesh();Et!==null&&$r(Et,q,-1/0,_.sortObjects)}$r(C,q,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(O,X),et=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,et&&qt.addToRenderList(g,C),this.info.render.frame++,G===!0&&Mt.beginShadows();const ot=m.state.shadowsArray;kt.render(ot,C,q),G===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=g.opaque,j=g.transmissive;if(m.setupLights(),q.isArrayCamera){const Et=q.cameras;if(j.length>0)for(let It=0,Gt=Et.length;It<Gt;It++){const Wt=Et[It];Lc(rt,j,C,Wt)}et&&qt.render(C);for(let It=0,Gt=Et.length;It<Gt;It++){const Wt=Et[It];Dc(g,C,Wt,Wt.viewport)}}else j.length>0&&Lc(rt,j,C,q),et&&qt.render(C),Dc(g,C,q);A!==null&&(I.updateMultisampleRenderTarget(A),I.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(_,C,q),fe.resetDefaultState(),S=-1,y=null,x.pop(),x.length>0?(m=x[x.length-1],G===!0&&Mt.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function $r(C,q,ot,rt){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)ot=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||z.intersectsSprite(C)){rt&&gt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(tt);const It=dt.update(C),Gt=C.material;Gt.visible&&g.push(C,It,Gt,ot,gt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||z.intersectsObject(C))){const It=dt.update(C),Gt=C.material;if(rt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),gt.copy(C.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),gt.copy(It.boundingSphere.center)),gt.applyMatrix4(C.matrixWorld).applyMatrix4(tt)),Array.isArray(Gt)){const Wt=It.groups;for(let ee=0,se=Wt.length;ee<se;ee++){const Xt=Wt[ee],pe=Gt[Xt.materialIndex];pe&&pe.visible&&g.push(C,It,pe,ot,gt.z,Xt)}}else Gt.visible&&g.push(C,It,Gt,ot,gt.z,null)}}const Et=C.children;for(let It=0,Gt=Et.length;It<Gt;It++)$r(Et[It],q,ot,rt)}function Dc(C,q,ot,rt){const j=C.opaque,Et=C.transmissive,It=C.transparent;m.setupLightsView(ot),G===!0&&Mt.setGlobalState(_.clippingPlanes,ot),rt&&St.viewport(N.copy(rt)),j.length>0&&Do(j,q,ot),Et.length>0&&Do(Et,q,ot),It.length>0&&Do(It,q,ot),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Lc(C,q,ot,rt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[rt.id]===void 0&&(m.state.transmissionRenderTarget[rt.id]=new hn(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Mn:Xn,minFilter:Gi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));const Et=m.state.transmissionRenderTarget[rt.id],It=rt.viewport||N;Et.setSize(It.z,It.w);const Gt=_.getRenderTarget();_.setRenderTarget(Et),_.getClearColor(K),at=_.getClearAlpha(),at<1&&_.setClearColor(16777215,.5),_.clear(),et&&qt.render(ot);const Wt=_.toneMapping;_.toneMapping=Ai;const ee=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),m.setupLightsView(rt),G===!0&&Mt.setGlobalState(_.clippingPlanes,rt),Do(C,ot,rt),I.updateMultisampleRenderTarget(Et),I.updateRenderTargetMipmap(Et),ft.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let Xt=0,pe=q.length;Xt<pe;Xt++){const be=q[Xt],Te=be.object,ln=be.geometry,me=be.material,$t=be.group;if(me.side===we&&Te.layers.test(rt.layers)){const Zn=me.side;me.side=Qe,me.needsUpdate=!0,Ic(Te,ot,rt,ln,me,$t),me.side=Zn,me.needsUpdate=!0,se=!0}}se===!0&&(I.updateMultisampleRenderTarget(Et),I.updateRenderTargetMipmap(Et))}_.setRenderTarget(Gt),_.setClearColor(K,at),ee!==void 0&&(rt.viewport=ee),_.toneMapping=Wt}function Do(C,q,ot){const rt=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Et=C.length;j<Et;j++){const It=C[j],Gt=It.object,Wt=It.geometry,ee=rt===null?It.material:rt,se=It.group;Gt.layers.test(ot.layers)&&Ic(Gt,q,ot,Wt,ee,se)}}function Ic(C,q,ot,rt,j,Et){C.onBeforeRender(_,q,ot,rt,j,Et),C.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(_,q,ot,rt,C,Et),j.transparent===!0&&j.side===we&&j.forceSinglePass===!1?(j.side=Qe,j.needsUpdate=!0,_.renderBufferDirect(ot,q,rt,j,C,Et),j.side=Ci,j.needsUpdate=!0,_.renderBufferDirect(ot,q,rt,j,C,Et),j.side=we):_.renderBufferDirect(ot,q,rt,j,C,Et),C.onAfterRender(_,q,ot,rt,j,Et)}function Lo(C,q,ot){q.isScene!==!0&&(q=Ut);const rt=bt.get(C),j=m.state.lights,Et=m.state.shadowsArray,It=j.state.version,Gt=zt.getParameters(C,j.state,Et,q,ot),Wt=zt.getProgramCacheKey(Gt);let ee=rt.programs;rt.environment=C.isMeshStandardMaterial?q.environment:null,rt.fog=q.fog,rt.envMap=(C.isMeshStandardMaterial?J:b).get(C.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,ee===void 0&&(C.addEventListener("dispose",ie),ee=new Map,rt.programs=ee);let se=ee.get(Wt);if(se!==void 0){if(rt.currentProgram===se&&rt.lightsStateVersion===It)return Nc(C,Gt),se}else Gt.uniforms=zt.getUniforms(C),C.onBeforeCompile(Gt,_),se=zt.acquireProgram(Gt,Wt),ee.set(Wt,se),rt.uniforms=Gt.uniforms;const Xt=rt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xt.clippingPlanes=Mt.uniform),Nc(C,Gt),rt.needsLights=ef(C),rt.lightsStateVersion=It,rt.needsLights&&(Xt.ambientLightColor.value=j.state.ambient,Xt.lightProbe.value=j.state.probe,Xt.directionalLights.value=j.state.directional,Xt.directionalLightShadows.value=j.state.directionalShadow,Xt.spotLights.value=j.state.spot,Xt.spotLightShadows.value=j.state.spotShadow,Xt.rectAreaLights.value=j.state.rectArea,Xt.ltc_1.value=j.state.rectAreaLTC1,Xt.ltc_2.value=j.state.rectAreaLTC2,Xt.pointLights.value=j.state.point,Xt.pointLightShadows.value=j.state.pointShadow,Xt.hemisphereLights.value=j.state.hemi,Xt.directionalShadowMap.value=j.state.directionalShadowMap,Xt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xt.spotShadowMap.value=j.state.spotShadowMap,Xt.spotLightMatrix.value=j.state.spotLightMatrix,Xt.spotLightMap.value=j.state.spotLightMap,Xt.pointShadowMap.value=j.state.pointShadowMap,Xt.pointShadowMatrix.value=j.state.pointShadowMatrix),rt.currentProgram=se,rt.uniformsList=null,se}function Uc(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Sr.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function Nc(C,q){const ot=bt.get(C);ot.outputColorSpace=q.outputColorSpace,ot.batching=q.batching,ot.batchingColor=q.batchingColor,ot.instancing=q.instancing,ot.instancingColor=q.instancingColor,ot.instancingMorph=q.instancingMorph,ot.skinning=q.skinning,ot.morphTargets=q.morphTargets,ot.morphNormals=q.morphNormals,ot.morphColors=q.morphColors,ot.morphTargetsCount=q.morphTargetsCount,ot.numClippingPlanes=q.numClippingPlanes,ot.numIntersection=q.numClipIntersection,ot.vertexAlphas=q.vertexAlphas,ot.vertexTangents=q.vertexTangents,ot.toneMapping=q.toneMapping}function Qd(C,q,ot,rt,j){q.isScene!==!0&&(q=Ut),I.resetTextureUnits();const Et=q.fog,It=rt.isMeshStandardMaterial?q.environment:null,Gt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ks,Wt=(rt.isMeshStandardMaterial?J:b).get(rt.envMap||It),ee=rt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,se=!!ot.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Xt=!!ot.morphAttributes.position,pe=!!ot.morphAttributes.normal,be=!!ot.morphAttributes.color;let Te=Ai;rt.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Te=_.toneMapping);const ln=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,me=ln!==void 0?ln.length:0,$t=bt.get(rt),Zn=m.state.lights;if(G===!0&&(nt===!0||C!==y)){const gn=C===y&&rt.id===S;Mt.setState(rt,C,gn)}let ge=!1;rt.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Zn.state.version||$t.outputColorSpace!==Gt||j.isBatchedMesh&&$t.batching===!1||!j.isBatchedMesh&&$t.batching===!0||j.isBatchedMesh&&$t.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&$t.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&$t.instancing===!1||!j.isInstancedMesh&&$t.instancing===!0||j.isSkinnedMesh&&$t.skinning===!1||!j.isSkinnedMesh&&$t.skinning===!0||j.isInstancedMesh&&$t.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&$t.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&$t.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&$t.instancingMorph===!1&&j.morphTexture!==null||$t.envMap!==Wt||rt.fog===!0&&$t.fog!==Et||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Mt.numPlanes||$t.numIntersection!==Mt.numIntersection)||$t.vertexAlphas!==ee||$t.vertexTangents!==se||$t.morphTargets!==Xt||$t.morphNormals!==pe||$t.morphColors!==be||$t.toneMapping!==Te||$t.morphTargetsCount!==me)&&(ge=!0):(ge=!0,$t.__version=rt.version);let bn=$t.currentProgram;ge===!0&&(bn=Lo(rt,q,j));let ss=!1,un=!1,Hs=!1;const Ae=bn.getUniforms(),Nn=$t.uniforms;if(St.useProgram(bn.program)&&(ss=!0,un=!0,Hs=!0),rt.id!==S&&(S=rt.id,un=!0),ss||y!==C){St.buffers.depth.getReversed()?($.copy(C.projectionMatrix),Tp($),Ap($),Ae.setValue(k,"projectionMatrix",$)):Ae.setValue(k,"projectionMatrix",C.projectionMatrix),Ae.setValue(k,"viewMatrix",C.matrixWorldInverse);const di=Ae.map.cameraPosition;di!==void 0&&di.setValue(k,ct.setFromMatrixPosition(C.matrixWorld)),yt.logarithmicDepthBuffer&&Ae.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ae.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,un=!0,Hs=!0)}if(j.isSkinnedMesh){Ae.setOptional(k,j,"bindMatrix"),Ae.setOptional(k,j,"bindMatrixInverse");const gn=j.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Ae.setValue(k,"boneTexture",gn.boneTexture,I))}j.isBatchedMesh&&(Ae.setOptional(k,j,"batchingTexture"),Ae.setValue(k,"batchingTexture",j._matricesTexture,I),Ae.setOptional(k,j,"batchingIdTexture"),Ae.setValue(k,"batchingIdTexture",j._indirectTexture,I),Ae.setOptional(k,j,"batchingColorTexture"),j._colorsTexture!==null&&Ae.setValue(k,"batchingColorTexture",j._colorsTexture,I));const Vs=ot.morphAttributes;if((Vs.position!==void 0||Vs.normal!==void 0||Vs.color!==void 0)&&Kt.update(j,ot,bn),(un||$t.receiveShadow!==j.receiveShadow)&&($t.receiveShadow=j.receiveShadow,Ae.setValue(k,"receiveShadow",j.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Nn.envMap.value=Wt,Nn.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&q.environment!==null&&(Nn.envMapIntensity.value=q.environmentIntensity),un&&(Ae.setValue(k,"toneMappingExposure",_.toneMappingExposure),$t.needsLights&&tf(Nn,Hs),Et&&rt.fog===!0&&Tt.refreshFogUniforms(Nn,Et),Tt.refreshMaterialUniforms(Nn,rt,T,w,m.state.transmissionRenderTarget[C.id]),Sr.upload(k,Uc($t),Nn,I)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Sr.upload(k,Uc($t),Nn,I),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ae.setValue(k,"center",j.center),Ae.setValue(k,"modelViewMatrix",j.modelViewMatrix),Ae.setValue(k,"normalMatrix",j.normalMatrix),Ae.setValue(k,"modelMatrix",j.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const gn=rt.uniformsGroups;for(let di=0,fi=gn.length;di<fi;di++){const Fc=gn[di];Y.update(Fc,bn),Y.bind(Fc,bn)}}return bn}function tf(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function ef(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,q,ot){bt.get(C.texture).__webglTexture=q,bt.get(C.depthTexture).__webglTexture=ot;const rt=bt.get(C);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=ot===void 0,rt.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,q){const ot=bt.get(C);ot.__webglFramebuffer=q,ot.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,ot=0){A=C,R=q,E=ot;let rt=!0,j=null,Et=!1,It=!1;if(C){const Wt=bt.get(C);if(Wt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(k.FRAMEBUFFER,null),rt=!1;else if(Wt.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(Wt.__hasExternalTextures)I.rebindTextures(C,bt.get(C.texture).__webglTexture,bt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Xt=C.depthTexture;if(Wt.__boundDepthTexture!==Xt){if(Xt!==null&&bt.has(Xt)&&(C.width!==Xt.image.width||C.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}const ee=C.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(It=!0);const se=bt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(se[q])?j=se[q][ot]:j=se[q],Et=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?j=bt.get(C).__webglMultisampledFramebuffer:Array.isArray(se)?j=se[ot]:j=se,N.copy(C.viewport),H.copy(C.scissor),W=C.scissorTest}else N.copy(V).multiplyScalar(T).floor(),H.copy(Z).multiplyScalar(T).floor(),W=pt;if(St.bindFramebuffer(k.FRAMEBUFFER,j)&&rt&&St.drawBuffers(C,j),St.viewport(N),St.scissor(H),St.setScissorTest(W),Et){const Wt=bt.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+q,Wt.__webglTexture,ot)}else if(It){const Wt=bt.get(C.texture),ee=q||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Wt.__webglTexture,ot||0,ee)}S=-1},this.readRenderTargetPixels=function(C,q,ot,rt,j,Et,It){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=bt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(Gt=Gt[It]),Gt){St.bindFramebuffer(k.FRAMEBUFFER,Gt);try{const Wt=C.texture,ee=Wt.format,se=Wt.type;if(!yt.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-rt&&ot>=0&&ot<=C.height-j&&k.readPixels(q,ot,rt,j,te.convert(ee),te.convert(se),Et)}finally{const Wt=A!==null?bt.get(A).__webglFramebuffer:null;St.bindFramebuffer(k.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(C,q,ot,rt,j,Et,It){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=bt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(Gt=Gt[It]),Gt){const Wt=C.texture,ee=Wt.format,se=Wt.type;if(!yt.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=C.width-rt&&ot>=0&&ot<=C.height-j){St.bindFramebuffer(k.FRAMEBUFFER,Gt);const Xt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Xt),k.bufferData(k.PIXEL_PACK_BUFFER,Et.byteLength,k.STREAM_READ),k.readPixels(q,ot,rt,j,te.convert(ee),te.convert(se),0);const pe=A!==null?bt.get(A).__webglFramebuffer:null;St.bindFramebuffer(k.FRAMEBUFFER,pe);const be=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Ep(k,be,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Xt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Et),k.deleteBuffer(Xt),k.deleteSync(be),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,q=null,ot=0){C.isTexture!==!0&&(oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,C=arguments[1]);const rt=Math.pow(2,-ot),j=Math.floor(C.image.width*rt),Et=Math.floor(C.image.height*rt),It=q!==null?q.x:0,Gt=q!==null?q.y:0;I.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ot,0,0,It,Gt,j,Et),St.unbindTexture()},this.copyTextureToTexture=function(C,q,ot=null,rt=null,j=0){C.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,C=arguments[1],q=arguments[2],j=arguments[3]||0,ot=null);let Et,It,Gt,Wt,ee,se,Xt,pe,be;const Te=C.isCompressedTexture?C.mipmaps[j]:C.image;ot!==null?(Et=ot.max.x-ot.min.x,It=ot.max.y-ot.min.y,Gt=ot.isBox3?ot.max.z-ot.min.z:1,Wt=ot.min.x,ee=ot.min.y,se=ot.isBox3?ot.min.z:0):(Et=Te.width,It=Te.height,Gt=Te.depth||1,Wt=0,ee=0,se=0),rt!==null?(Xt=rt.x,pe=rt.y,be=rt.z):(Xt=0,pe=0,be=0);const ln=te.convert(q.format),me=te.convert(q.type);let $t;q.isData3DTexture?(I.setTexture3D(q,0),$t=k.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(I.setTexture2DArray(q,0),$t=k.TEXTURE_2D_ARRAY):(I.setTexture2D(q,0),$t=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const Zn=k.getParameter(k.UNPACK_ROW_LENGTH),ge=k.getParameter(k.UNPACK_IMAGE_HEIGHT),bn=k.getParameter(k.UNPACK_SKIP_PIXELS),ss=k.getParameter(k.UNPACK_SKIP_ROWS),un=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Te.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Te.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Wt),k.pixelStorei(k.UNPACK_SKIP_ROWS,ee),k.pixelStorei(k.UNPACK_SKIP_IMAGES,se);const Hs=C.isDataArrayTexture||C.isData3DTexture,Ae=q.isDataArrayTexture||q.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Nn=bt.get(C),Vs=bt.get(q),gn=bt.get(Nn.__renderTarget),di=bt.get(Vs.__renderTarget);St.bindFramebuffer(k.READ_FRAMEBUFFER,gn.__webglFramebuffer),St.bindFramebuffer(k.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let fi=0;fi<Gt;fi++)Hs&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,bt.get(C).__webglTexture,j,se+fi),C.isDepthTexture?(Ae&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,bt.get(q).__webglTexture,j,be+fi),k.blitFramebuffer(Wt,ee,Et,It,Xt,pe,Et,It,k.DEPTH_BUFFER_BIT,k.NEAREST)):Ae?k.copyTexSubImage3D($t,j,Xt,pe,be+fi,Wt,ee,Et,It):k.copyTexSubImage2D($t,j,Xt,pe,be+fi,Wt,ee,Et,It);St.bindFramebuffer(k.READ_FRAMEBUFFER,null),St.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ae?C.isDataTexture||C.isData3DTexture?k.texSubImage3D($t,j,Xt,pe,be,Et,It,Gt,ln,me,Te.data):q.isCompressedArrayTexture?k.compressedTexSubImage3D($t,j,Xt,pe,be,Et,It,Gt,ln,Te.data):k.texSubImage3D($t,j,Xt,pe,be,Et,It,Gt,ln,me,Te):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,j,Xt,pe,Et,It,ln,me,Te.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,j,Xt,pe,Te.width,Te.height,ln,Te.data):k.texSubImage2D(k.TEXTURE_2D,j,Xt,pe,Et,It,ln,me,Te);k.pixelStorei(k.UNPACK_ROW_LENGTH,Zn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ge),k.pixelStorei(k.UNPACK_SKIP_PIXELS,bn),k.pixelStorei(k.UNPACK_SKIP_ROWS,ss),k.pixelStorei(k.UNPACK_SKIP_IMAGES,un),j===0&&q.generateMipmaps&&k.generateMipmap($t),St.unbindTexture()},this.copyTextureToTexture3D=function(C,q,ot=null,rt=null,j=0){return C.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ot=arguments[0]||null,rt=arguments[1]||null,C=arguments[2],q=arguments[3],j=arguments[4]||0),oo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,q,ot,rt,j)},this.initRenderTarget=function(C){bt.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),St.unbindTexture()},this.resetState=function(){R=0,E=0,A=null,St.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}}class fc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new fc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class kh extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class pc extends tn{constructor(t=null,e=1,n=1,s,o,r,a,l,c=rn,h=rn,u,d){super(null,r,a,l,c,h,s,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bh extends Oe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const xs=new le,zh=new le,er=[],Hh=new ts,F_=new le,Ys=new Dt,qs=new es;class Xi extends Dt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Bh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,F_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ts),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),Hh.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union(Hh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new es),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),qs.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),t.ray.intersectsSphere(qs)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,xs),zh.multiplyMatrices(n,xs),Ys.matrixWorld=zh,Ys.raycast(t,er);for(let r=0,a=er.length;r<a;r++){const l=er[r];l.instanceId=o,l.object=this,e.push(l)}er.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Bh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new pc(new Float32Array(s*this.count),s,this.count,nc,Gn));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Po extends Ri{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ur=new L,Nr=new L,Vh=new le,js=new Ro,nr=new es,ba=new L,Gh=new L;class Vr extends Ue{constructor(t=new ce,e=new Po){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)Ur.fromBufferAttribute(e,s-1),Nr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ur.distanceTo(Nr);t.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(s),nr.radius+=o,t.ray.intersectsSphere(nr)===!1)return;Vh.copy(s).invert(),js.copy(t.ray).applyMatrix4(Vh);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let v=f,g=p-1;v<g;v+=c){const m=h.getX(v),M=h.getX(v+1),x=ir(this,t,js,l,m,M);x&&e.push(x)}if(this.isLineLoop){const v=h.getX(p-1),g=h.getX(f),m=ir(this,t,js,l,v,g);m&&e.push(m)}}else{const f=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let v=f,g=p-1;v<g;v+=c){const m=ir(this,t,js,l,v,v+1);m&&e.push(m)}if(this.isLineLoop){const v=ir(this,t,js,l,p-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function ir(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(Ur.fromBufferAttribute(r,s),Nr.fromBufferAttribute(r,o),e.distanceSqToSegment(Ur,Nr,ba,Gh)>n)return;ba.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ba);if(!(l<t.near||l>t.far))return{distance:l,point:Gh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Wh=new L,Xh=new L;class Cd extends Vr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)Wh.fromBufferAttribute(e,s),Xh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Wh.distanceTo(Xh);t.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class O_ extends Vr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class k_ extends Ri{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $h=new le,kl=new Ro,sr=new es,or=new L;class Rd extends Ue{constructor(t=new ce,e=new k_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(s),sr.radius+=o,t.ray.intersectsSphere(sr)===!1)return;$h.copy(s).invert(),kl.copy(t.ray).applyMatrix4($h);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let p=d,v=f;p<v;p++){const g=c.getX(p);or.fromBufferAttribute(u,g),Yh(or,g,l,s,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let p=d,v=f;p<v;p++)or.fromBufferAttribute(u,p),Yh(or,p,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Yh(i,t,e,n,s,o,r){const a=kl.distanceSqToPoint(i);if(a<e){const l=new L;kl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Gr extends tn{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const h=n[s],d=n[s+1]-h,f=(r-h)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new mt:new L);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],o=[],r=[],a=new L,l=new le;for(let f=0;f<=t;f++){const p=f/t;s[f]=this.getTangentAt(p,new L)}o[0]=new L,r[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Fe(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,p))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(Fe(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let p=1;p<=t;p++)o[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),r[p].crossVectors(s[p],o[p])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class mc extends qn{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class B_ extends mc{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function gc(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,u){let d=(r-o)/c-(a-o)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+u)+(l-a)/u;d*=h,f*=h,s(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const rr=new L,wa=new gc,Ea=new gc,Ta=new gc;class Pd extends qn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(rr.subVectors(s[0],s[1]).add(s[0]),c=rr);const u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(rr.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=rr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),wa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,v,g),Ea.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,v,g),Ta.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,v,g)}else this.curveType==="catmullrom"&&(wa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ea.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ta.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(wa.calc(l),Ea.calc(l),Ta.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function qh(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function z_(i,t){const e=1-i;return e*e*t}function H_(i,t){return 2*(1-i)*i*t}function V_(i,t){return i*i*t}function po(i,t,e,n){return z_(i,t)+H_(i,e)+V_(i,n)}function G_(i,t){const e=1-i;return e*e*e*t}function W_(i,t){const e=1-i;return 3*e*e*i*t}function X_(i,t){return 3*(1-i)*i*i*t}function $_(i,t){return i*i*i*t}function mo(i,t,e,n,s){return G_(i,t)+W_(i,e)+X_(i,n)+$_(i,s)}class Dd extends qn{constructor(t=new mt,e=new mt,n=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new mt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(mo(t,s.x,o.x,r.x,a.x),mo(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Y_ extends qn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(mo(t,s.x,o.x,r.x,a.x),mo(t,s.y,o.y,r.y,a.y),mo(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ld extends qn{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class q_ extends qn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Id extends qn{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(po(t,s.x,o.x,r.x),po(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ud extends qn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(po(t,s.x,o.x,r.x),po(t,s.y,o.y,r.y),po(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nd extends qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(qh(a,l.x,c.x,h.x,u.x),qh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new mt().fromArray(s))}return this}}var Fr=Object.freeze({__proto__:null,ArcCurve:B_,CatmullRomCurve3:Pd,CubicBezierCurve:Dd,CubicBezierCurve3:Y_,EllipseCurve:mc,LineCurve:Ld,LineCurve3:q_,QuadraticBezierCurve:Id,QuadraticBezierCurve3:Ud,SplineCurve:Nd});class j_ extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Fr[s.type]().fromJSON(s))}return this}}class jh extends j_{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ld(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new Id(this.currentPoint.clone(),new mt(t,e),new mt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new Dd(this.currentPoint.clone(),new mt(t,e),new mt(n,s),new mt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Nd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new mc(t,e,n,s,o,r,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class vc extends ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new L,h=new mt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ns extends ce{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],f=[];let p=0;const v=[],g=n/2;let m=0;M(),r===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(f,2));function M(){const _=new L,U=new L;let R=0;const E=(e-t)/n;for(let A=0;A<=o;A++){const S=[],y=A/o,N=y*(e-t)+t;for(let H=0;H<=s;H++){const W=H/s,K=W*l+a,at=Math.sin(K),F=Math.cos(K);U.x=N*at,U.y=-y*n+g,U.z=N*F,u.push(U.x,U.y,U.z),_.set(at,E,F).normalize(),d.push(_.x,_.y,_.z),f.push(W,1-y),S.push(p++)}v.push(S)}for(let A=0;A<s;A++)for(let S=0;S<o;S++){const y=v[S][A],N=v[S+1][A],H=v[S+1][A+1],W=v[S][A+1];(t>0||S!==0)&&(h.push(y,N,W),R+=3),(e>0||S!==o-1)&&(h.push(N,H,W),R+=3)}c.addGroup(m,R,0),m+=R}function x(_){const U=p,R=new mt,E=new L;let A=0;const S=_===!0?t:e,y=_===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,g*y,0),d.push(0,y,0),f.push(.5,.5),p++;const N=p;for(let H=0;H<=s;H++){const K=H/s*l+a,at=Math.cos(K),F=Math.sin(K);E.x=S*F,E.y=g*y,E.z=S*at,u.push(E.x,E.y,E.z),d.push(0,y,0),R.x=at*.5+.5,R.y=F*.5*y+.5,f.push(R.x,R.y),p++}for(let H=0;H<s;H++){const W=U+H,K=N+H;_===!0?h.push(K,K+1,W):h.push(K+1,K,W),A+=3}c.addGroup(m,A,_===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ns(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _c extends ns{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new _c(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xc extends ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),h(),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(o.slice(),3)),this.setAttribute("uv",new Vt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new L,_=new L,U=new L;for(let R=0;R<e.length;R+=3)f(e[R+0],x),f(e[R+1],_),f(e[R+2],U),l(x,_,U,M)}function l(M,x,_,U){const R=U+1,E=[];for(let A=0;A<=R;A++){E[A]=[];const S=M.clone().lerp(_,A/R),y=x.clone().lerp(_,A/R),N=R-A;for(let H=0;H<=N;H++)H===0&&A===R?E[A][H]=S:E[A][H]=S.clone().lerp(y,H/N)}for(let A=0;A<R;A++)for(let S=0;S<2*(R-A)-1;S++){const y=Math.floor(S/2);S%2===0?(d(E[A][y+1]),d(E[A+1][y]),d(E[A][y])):(d(E[A][y+1]),d(E[A+1][y+1]),d(E[A+1][y]))}}function c(M){const x=new L;for(let _=0;_<o.length;_+=3)x.x=o[_+0],x.y=o[_+1],x.z=o[_+2],x.normalize().multiplyScalar(M),o[_+0]=x.x,o[_+1]=x.y,o[_+2]=x.z}function h(){const M=new L;for(let x=0;x<o.length;x+=3){M.x=o[x+0],M.y=o[x+1],M.z=o[x+2];const _=g(M)/2/Math.PI+.5,U=m(M)/Math.PI+.5;r.push(_,1-U)}p(),u()}function u(){for(let M=0;M<r.length;M+=6){const x=r[M+0],_=r[M+2],U=r[M+4],R=Math.max(x,_,U),E=Math.min(x,_,U);R>.9&&E<.1&&(x<.2&&(r[M+0]+=1),_<.2&&(r[M+2]+=1),U<.2&&(r[M+4]+=1))}}function d(M){o.push(M.x,M.y,M.z)}function f(M,x){const _=M*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function p(){const M=new L,x=new L,_=new L,U=new L,R=new mt,E=new mt,A=new mt;for(let S=0,y=0;S<o.length;S+=9,y+=6){M.set(o[S+0],o[S+1],o[S+2]),x.set(o[S+3],o[S+4],o[S+5]),_.set(o[S+6],o[S+7],o[S+8]),R.set(r[y+0],r[y+1]),E.set(r[y+2],r[y+3]),A.set(r[y+4],r[y+5]),U.copy(M).add(x).add(_).divideScalar(3);const N=g(U);v(R,y+0,M,N),v(E,y+2,x,N),v(A,y+4,_,N)}}function v(M,x,_,U){U<0&&M.x===1&&(r[x]=M.x-1),_.x===0&&_.z===0&&(r[x]=U/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xc(t.vertices,t.indices,t.radius,t.details)}}class Fd extends jh{constructor(t){super(t),this.uuid=Qi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new jh().fromJSON(s))}return this}}const Z_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=Od(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,u,d,f;if(n&&(o=e1(i,t,o,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let p=e;p<s;p+=e)u=i[p],d=i[p+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return wo(o,r,e,a,l,f,0),r}};function Od(i,t,e,n,s){let o,r;if(s===d1(i,t,e,n)>0)for(o=t;o<e;o+=n)r=Zh(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=Zh(o,i[o],i[o+1],r);return r&&Wr(r,r.next)&&(To(r),r=r.next),r}function Ki(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Wr(e,e.next)||Ce(e.prev,e,e.next)===0)){if(To(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function wo(i,t,e,n,s,o,r){if(!i)return;!r&&o&&r1(i,n,s,o);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,o?J_(i,n,s,o):K_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),To(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=Q_(Ki(i),t,e),wo(i,t,e,n,s,o,2)):r===2&&t1(i,t,e,n,s,o):wo(Ki(i),t,e,n,s,o,1);break}}}function K_(i){const t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=s<o?s<r?s:r:o<r?o:r,u=a<l?a<c?a:c:l<c?l:c,d=s>o?s>r?s:r:o>r?o:r,f=a>l?a>c?a:c:l>c?l:c;let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Es(s,a,o,l,r,c,p.x,p.y)&&Ce(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function J_(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Ce(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,u=o.y,d=r.y,f=a<l?a<c?a:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,v=a>l?a>c?a:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=Bl(f,p,t,e,n),M=Bl(v,g,t,e,n);let x=i.prevZ,_=i.nextZ;for(;x&&x.z>=m&&_&&_.z<=M;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==s&&x!==r&&Es(a,h,l,u,c,d,x.x,x.y)&&Ce(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==s&&_!==r&&Es(a,h,l,u,c,d,_.x,_.y)&&Ce(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==s&&x!==r&&Es(a,h,l,u,c,d,x.x,x.y)&&Ce(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==s&&_!==r&&Es(a,h,l,u,c,d,_.x,_.y)&&Ce(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Q_(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!Wr(s,o)&&kd(s,n,n.next,o)&&Eo(s,o)&&Eo(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),To(n),To(n.next),n=i=o),n=n.next}while(n!==i);return Ki(n)}function t1(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&c1(r,a)){let l=Bd(r,a);r=Ki(r,r.next),l=Ki(l,l.next),wo(r,t,e,n,s,o,0),wo(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function e1(i,t,e,n){const s=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=Od(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(l1(c));for(s.sort(n1),o=0;o<s.length;o++)e=i1(s[o],e);return e}function n1(i,t){return i.x-t.x}function i1(i,t){const e=s1(i,t);if(!e)return t;const n=Bd(e,i);return Ki(n,n.next),Ki(e,e.next)}function s1(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&Es(r<c?o:n,r,l,c,r<c?n:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),Eo(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&o1(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function o1(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function r1(i,t,e,n){let s=i;do s.z===0&&(s.z=Bl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,a1(s)}function a1(i){let t,e,n,s,o,r,a,l,c=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,c*=2}while(r>1);return i}function Bl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function l1(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Es(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function c1(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!h1(i,t)&&(Eo(i,t)&&Eo(t,i)&&u1(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||Wr(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Wr(i,t){return i.x===t.x&&i.y===t.y}function kd(i,t,e,n){const s=lr(Ce(i,t,e)),o=lr(Ce(i,t,n)),r=lr(Ce(e,n,i)),a=lr(Ce(e,n,t));return!!(s!==o&&r!==a||s===0&&ar(i,e,t)||o===0&&ar(i,n,t)||r===0&&ar(e,i,n)||a===0&&ar(e,t,n))}function ar(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function lr(i){return i>0?1:i<0?-1:0}function h1(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&kd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Eo(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function u1(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Bd(i,t){const e=new zl(i.i,i.x,i.y),n=new zl(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Zh(i,t,e,n){const s=new zl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function To(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function zl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function d1(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class $i{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return $i.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];Kh(t),Jh(n,t);let r=t.length;e.forEach(Kh);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,Jh(n,e[l]);const a=Z_.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Kh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Jh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class yc extends ce{constructor(t=new Fd([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new Vt(s,3)),this.setAttribute("uv",new Vt(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:f1;let x,_=!1,U,R,E,A;m&&(x=m.getSpacedPoints(h),_=!0,d=!1,U=m.computeFrenetFrames(h,!1),R=new L,E=new L,A=new L),d||(g=0,f=0,p=0,v=0);const S=a.extractPoints(c);let y=S.shape;const N=S.holes;if(!$i.isClockWise(y)){y=y.reverse();for(let et=0,ht=N.length;et<ht;et++){const k=N[et];$i.isClockWise(k)&&(N[et]=k.reverse())}}const W=$i.triangulateShape(y,N),K=y;for(let et=0,ht=N.length;et<ht;et++){const k=N[et];y=y.concat(k)}function at(et,ht,k){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(ht,k)}const F=y.length,w=W.length;function T(et,ht,k){let wt,ft,yt;const St=et.x-ht.x,Ht=et.y-ht.y,bt=k.x-et.x,I=k.y-et.y,b=St*St+Ht*Ht,J=St*I-Ht*bt;if(Math.abs(J)>Number.EPSILON){const ut=Math.sqrt(b),_t=Math.sqrt(bt*bt+I*I),dt=ht.x-Ht/ut,zt=ht.y+St/ut,Tt=k.x-I/_t,Pt=k.y+bt/_t,ne=((Tt-dt)*I-(Pt-zt)*bt)/(St*I-Ht*bt);wt=dt+St*ne-et.x,ft=zt+Ht*ne-et.y;const Mt=wt*wt+ft*ft;if(Mt<=2)return new mt(wt,ft);yt=Math.sqrt(Mt/2)}else{let ut=!1;St>Number.EPSILON?bt>Number.EPSILON&&(ut=!0):St<-Number.EPSILON?bt<-Number.EPSILON&&(ut=!0):Math.sign(Ht)===Math.sign(I)&&(ut=!0),ut?(wt=-Ht,ft=St,yt=Math.sqrt(b)):(wt=St,ft=Ht,yt=Math.sqrt(b/2))}return new mt(wt/yt,ft/yt)}const O=[];for(let et=0,ht=K.length,k=ht-1,wt=et+1;et<ht;et++,k++,wt++)k===ht&&(k=0),wt===ht&&(wt=0),O[et]=T(K[et],K[k],K[wt]);const X=[];let V,Z=O.concat();for(let et=0,ht=N.length;et<ht;et++){const k=N[et];V=[];for(let wt=0,ft=k.length,yt=ft-1,St=wt+1;wt<ft;wt++,yt++,St++)yt===ft&&(yt=0),St===ft&&(St=0),V[wt]=T(k[wt],k[yt],k[St]);X.push(V),Z=Z.concat(V)}for(let et=0;et<g;et++){const ht=et/g,k=f*Math.cos(ht*Math.PI/2),wt=p*Math.sin(ht*Math.PI/2)+v;for(let ft=0,yt=K.length;ft<yt;ft++){const St=at(K[ft],O[ft],wt);$(St.x,St.y,-k)}for(let ft=0,yt=N.length;ft<yt;ft++){const St=N[ft];V=X[ft];for(let Ht=0,bt=St.length;Ht<bt;Ht++){const I=at(St[Ht],V[Ht],wt);$(I.x,I.y,-k)}}}const pt=p+v;for(let et=0;et<F;et++){const ht=d?at(y[et],Z[et],pt):y[et];_?(E.copy(U.normals[0]).multiplyScalar(ht.x),R.copy(U.binormals[0]).multiplyScalar(ht.y),A.copy(x[0]).add(E).add(R),$(A.x,A.y,A.z)):$(ht.x,ht.y,0)}for(let et=1;et<=h;et++)for(let ht=0;ht<F;ht++){const k=d?at(y[ht],Z[ht],pt):y[ht];_?(E.copy(U.normals[et]).multiplyScalar(k.x),R.copy(U.binormals[et]).multiplyScalar(k.y),A.copy(x[et]).add(E).add(R),$(A.x,A.y,A.z)):$(k.x,k.y,u/h*et)}for(let et=g-1;et>=0;et--){const ht=et/g,k=f*Math.cos(ht*Math.PI/2),wt=p*Math.sin(ht*Math.PI/2)+v;for(let ft=0,yt=K.length;ft<yt;ft++){const St=at(K[ft],O[ft],wt);$(St.x,St.y,u+k)}for(let ft=0,yt=N.length;ft<yt;ft++){const St=N[ft];V=X[ft];for(let Ht=0,bt=St.length;Ht<bt;Ht++){const I=at(St[Ht],V[Ht],wt);_?$(I.x,I.y+x[h-1].y,x[h-1].x+k):$(I.x,I.y,u+k)}}}z(),G();function z(){const et=s.length/3;if(d){let ht=0,k=F*ht;for(let wt=0;wt<w;wt++){const ft=W[wt];tt(ft[2]+k,ft[1]+k,ft[0]+k)}ht=h+g*2,k=F*ht;for(let wt=0;wt<w;wt++){const ft=W[wt];tt(ft[0]+k,ft[1]+k,ft[2]+k)}}else{for(let ht=0;ht<w;ht++){const k=W[ht];tt(k[2],k[1],k[0])}for(let ht=0;ht<w;ht++){const k=W[ht];tt(k[0]+F*h,k[1]+F*h,k[2]+F*h)}}n.addGroup(et,s.length/3-et,0)}function G(){const et=s.length/3;let ht=0;nt(K,ht),ht+=K.length;for(let k=0,wt=N.length;k<wt;k++){const ft=N[k];nt(ft,ht),ht+=ft.length}n.addGroup(et,s.length/3-et,1)}function nt(et,ht){let k=et.length;for(;--k>=0;){const wt=k;let ft=k-1;ft<0&&(ft=et.length-1);for(let yt=0,St=h+g*2;yt<St;yt++){const Ht=F*yt,bt=F*(yt+1),I=ht+wt+Ht,b=ht+ft+Ht,J=ht+ft+bt,ut=ht+wt+bt;ct(I,b,J,ut)}}}function $(et,ht,k){l.push(et),l.push(ht),l.push(k)}function tt(et,ht,k){gt(et),gt(ht),gt(k);const wt=s.length/3,ft=M.generateTopUV(n,s,wt-3,wt-2,wt-1);Ut(ft[0]),Ut(ft[1]),Ut(ft[2])}function ct(et,ht,k,wt){gt(et),gt(ht),gt(wt),gt(ht),gt(k),gt(wt);const ft=s.length/3,yt=M.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);Ut(yt[0]),Ut(yt[1]),Ut(yt[3]),Ut(yt[1]),Ut(yt[2]),Ut(yt[3])}function gt(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function Ut(et){o.push(et.x),o.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return p1(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Fr[s.type]().fromJSON(s)),new yc(n,t.options)}}const f1={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new mt(o,r),new mt(a,l),new mt(c,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],v=t[o*3],g=t[o*3+1],m=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new mt(r,1-l),new mt(c,1-u),new mt(d,1-p),new mt(v,1-m)]:[new mt(a,1-l),new mt(h,1-u),new mt(f,1-p),new mt(g,1-m)]}};function p1(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Mc extends xc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Mc(t.radius,t.detail)}}class Sc extends ce{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,f=new L,p=new mt;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){const m=o+g/n*r;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let v=0;v<s;v++){const g=v*(n+1);for(let m=0;m<n;m++){const M=m+g,x=M,_=M+n+1,U=M+n+2,R=M+1;a.push(x,_,R),a.push(_,U,R)}}this.setIndex(a),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Yn extends ce{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new L,d=new L,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){const M=[],x=m/n;let _=0;m===0&&r===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let U=0;U<=e;U++){const R=U/e;u.x=-t*Math.cos(s+R*o)*Math.sin(r+x*a),u.y=t*Math.cos(r+x*a),u.z=t*Math.sin(s+R*o)*Math.sin(r+x*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(R+_,1-x),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){const x=h[m][M+1],_=h[m][M],U=h[m+1][M],R=h[m+1][M+1];(m!==0||r>0)&&f.push(x,_,R),(m!==n-1||l<Math.PI)&&f.push(_,U,R)}this.setIndex(f),this.setAttribute("position",new Vt(p,3)),this.setAttribute("normal",new Vt(v,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class bc extends ce{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){const v=p/s*o,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(v),u.y=(t+e*Math.cos(g))*Math.sin(v),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){const v=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,M=(s+1)*f+p;r.push(v,g,M),r.push(g,m,M)}this.setIndex(r),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class wc extends ce{constructor(t=new Ud(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new L,l=new L,c=new mt;let h=new L;const u=[],d=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(f,2));function v(){for(let x=0;x<e;x++)g(x);g(o===!1?e:0),M(),m()}function g(x){h=t.getPointAt(x/e,h);const _=r.normals[x],U=r.binormals[x];for(let R=0;R<=s;R++){const E=R/s*Math.PI*2,A=Math.sin(E),S=-Math.cos(E);l.x=S*_.x+A*U.x,l.y=S*_.y+A*U.y,l.z=S*_.z+A*U.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=e;x++)for(let _=1;_<=s;_++){const U=(s+1)*(x-1)+(_-1),R=(s+1)*x+(_-1),E=(s+1)*x+_,A=(s+1)*(x-1)+_;p.push(U,R,A),p.push(R,E,A)}}function M(){for(let x=0;x<=e;x++)for(let _=0;_<=s;_++)c.x=x/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new wc(new Fr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class m1 extends Ee{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class ue extends Ri{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rc,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class br extends ue{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class g1 extends Ri{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rc,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Ec extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class v1 extends Ec{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Aa=new le,Qh=new L,tu=new L;class zd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cc,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Qh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qh),tu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tu),e.updateMatrixWorld(),Aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const eu=new le,Zs=new L,Ca=new L;class _1 extends zd{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new mt(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Zs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Zs),Ca.copy(n.position),Ca.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ca),n.updateMatrixWorld(),s.makeTranslation(-Zs.x,-Zs.y,-Zs.z),eu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eu)}}class x1 extends Ec{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class y1 extends zd{constructor(){super(new hc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class M1 extends Ec{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new y1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Hd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=nu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function nu(){return performance.now()}const iu=new le;class Hl{constructor(t,e,n=0,s=1/0){this.ray=new Ro(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new lc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return iu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(iu),this}intersectObject(t,e=!0,n=[]){return Vl(t,this,n,e),n.sort(su),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)Vl(t[s],this,n,e);return n.sort(su),n}}function su(i,t){return i.distance-t.distance}function Vl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let r=0,a=o.length;r<a;r++)Vl(o[r],t,e,!0)}}class ou{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class S1 extends Ji{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kl);const ru={type:"change"},Tc={type:"start"},Vd={type:"end"},cr=new Ro,au=new ri,b1=Math.cos(70*xn.DEG2RAD),Ne=new L,cn=2*Math.PI,Me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ra=1e-6;class w1 extends S1{constructor(t,e=null){super(t,e),this.state=Me.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:As.ROTATE,MIDDLE:As.DOLLY,RIGHT:As.PAN},this.touches={ONE:bs.ROTATE,TWO:bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Un,this._lastTargetPosition=new L,this._quat=new Un().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ou,this._sphericalDelta=new ou,this._scale=1,this._panOffset=new L,this._rotateStart=new mt,this._rotateEnd=new mt,this._rotateDelta=new mt,this._panStart=new mt,this._panEnd=new mt,this._panDelta=new mt,this._dollyStart=new mt,this._dollyEnd=new mt,this._dollyDelta=new mt,this._dollyDirection=new L,this._mouse=new mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=T1.bind(this),this._onPointerDown=E1.bind(this),this._onPointerUp=A1.bind(this),this._onContextMenu=U1.bind(this),this._onMouseWheel=P1.bind(this),this._onKeyDown=D1.bind(this),this._onTouchStart=L1.bind(this),this._onTouchMove=I1.bind(this),this._onMouseDown=C1.bind(this),this._onMouseMove=R1.bind(this),this._interceptControlDown=N1.bind(this),this._interceptControlUp=F1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ru),this.update(),this.state=Me.NONE}update(t=null){const e=this.object.position;Ne.copy(e).sub(this.target),Ne.applyQuaternion(this._quat),this._spherical.setFromVector3(Ne),this.autoRotate&&this.state===Me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=cn:n>Math.PI&&(n-=cn),s<-Math.PI?s+=cn:s>Math.PI&&(s-=cn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Ne.setFromSpherical(this._spherical),Ne.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ne),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Ne.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=Ne.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(cr.origin.copy(this.object.position),cr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(cr.direction))<b1?this.object.lookAt(this.target):(au.setFromNormalAndCoplanarPoint(this.object.up,this.target),cr.intersectPlane(au,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Ra||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ra||this._lastTargetPosition.distanceToSquared(this.target)>Ra?(this.dispatchEvent(ru),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?cn/60*this.autoRotateSpeed*t:cn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ne.setFromMatrixColumn(e,0),Ne.multiplyScalar(-t),this._panOffset.add(Ne)}_panUp(t,e){this.screenSpacePanning===!0?Ne.setFromMatrixColumn(e,1):(Ne.setFromMatrixColumn(e,0),Ne.crossVectors(this.object.up,Ne)),Ne.multiplyScalar(t),this._panOffset.add(Ne)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ne.copy(s).sub(this.target);let o=Ne.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function E1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function T1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function A1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vd),this.state=Me.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function C1(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case As.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Me.DOLLY;break;case As.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Me.ROTATE}break;case As.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Me.PAN}break;default:this.state=Me.NONE}this.state!==Me.NONE&&this.dispatchEvent(Tc)}function R1(i){switch(this.state){case Me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function P1(i){this.enabled===!1||this.enableZoom===!1||this.state!==Me.NONE||(i.preventDefault(),this.dispatchEvent(Tc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Vd))}function D1(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function L1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case bs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Me.TOUCH_ROTATE;break;case bs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Me.TOUCH_PAN;break;default:this.state=Me.NONE}break;case 2:switch(this.touches.TWO){case bs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Me.TOUCH_DOLLY_PAN;break;case bs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Me.TOUCH_DOLLY_ROTATE;break;default:this.state=Me.NONE}break;default:this.state=Me.NONE}this.state!==Me.NONE&&this.dispatchEvent(Tc)}function I1(i){switch(this._trackPointer(i),this.state){case Me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Me.NONE}}function U1(i){this.enabled!==!1&&i.preventDefault()}function N1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function F1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Ao extends Dt{constructor(){const t=Ao.SkyShader,e=new Ee({name:t.name,uniforms:In.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Qe,depthWrite:!1});super(new an(1,1,1),e),this.isSky=!0}}Ao.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new L},up:{value:new L(0,1,0)}},vertexShader:`
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

		}`};class go extends Ue{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new mt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const ys=new L,lu=new le,cu=new le,hu=new L,uu=new L;class O1{constructor(t={}){const e=this;let n,s,o,r;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(p,v){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),lu.copy(v.matrixWorldInverse),cu.multiplyMatrices(v.projectionMatrix,lu),h(p,p,v),f(p)},this.setSize=function(p,v){n=p,s=v,o=n/2,r=s/2,l.style.width=p+"px",l.style.height=v+"px"};function c(p){p.isCSS2DObject&&(p.element.style.display="none");for(let v=0,g=p.children.length;v<g;v++)c(p.children[v])}function h(p,v,g){if(p.visible===!1){c(p);return}if(p.isCSS2DObject){ys.setFromMatrixPosition(p.matrixWorld),ys.applyMatrix4(cu);const m=ys.z>=-1&&ys.z<=1&&p.layers.test(g.layers)===!0,M=p.element;M.style.display=m===!0?"":"none",m===!0&&(p.onBeforeRender(e,v,g),M.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(ys.x*o+o)+"px,"+(-ys.y*r+r)+"px)",M.parentNode!==l&&l.appendChild(M),p.onAfterRender(e,v,g));const x={distanceToCameraSquared:u(g,p)};a.objects.set(p,x)}for(let m=0,M=p.children.length;m<M;m++)h(p.children[m],v,g)}function u(p,v){return hu.setFromMatrixPosition(p.matrixWorld),uu.setFromMatrixPosition(v.matrixWorld),hu.distanceToSquared(uu)}function d(p){const v=[];return p.traverseVisible(function(g){g.isCSS2DObject&&v.push(g)}),v}function f(p){const v=d(p).sort(function(m,M){if(m.renderOrder!==M.renderOrder)return M.renderOrder-m.renderOrder;const x=a.objects.get(m).distanceToCameraSquared,_=a.objects.get(M).distanceToCameraSquared;return x-_}),g=v.length;for(let m=0,M=v.length;m<M;m++)v[m].element.style.zIndex=g-m}}}const vo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class is{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const k1=new hc(-1,1,1,-1,0,1);class B1 extends ce{constructor(){super(),this.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Vt([0,2,0,0,2,0],2))}}const z1=new B1;class Xr{constructor(t){this._mesh=new Dt(z1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,k1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class H1 extends is{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ee?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=In.clone(t.uniforms),this.material=new Ee({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Xr(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class du extends is{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class V1 extends is{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class G1{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new mt);this._width=n.width,this._height=n.height,e=new hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new H1(vo),this.copyPass.material.blending=We,this.clock=new Hd}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}du!==void 0&&(r instanceof du?n=!0:r instanceof V1&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class W1 extends is{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ft}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const X1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ft(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Os extends is{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new mt(t.x,t.y):new mt(256,256),this.clearColor=new Ft(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new hn(o,r,{type:Mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new hn(o,r,{type:Mn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new hn(o,r,{type:Mn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),r=Math.round(r/2)}const a=X1;this.highPassUniforms=In.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ee({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new mt(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=vo;this.copyUniforms=In.clone(h.uniforms),this.blendMaterial=new Ee({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Dr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ft,this.oldClearAlpha=1,this.basic=new on,this.fsQuad=new Xr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new mt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Os.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Os.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ee({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new mt(.5,.5)},direction:{value:new mt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ee({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Os.BlurDirectionX=new mt(1,0);Os.BlurDirectionY=new mt(0,1);const $1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Y1 extends is{constructor(){super();const t=$1;this.uniforms=In.clone(t.uniforms),this.material=new m1({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Xr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},de.getTransfer(this._outputColorSpace)===xe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ju?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Qu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===td?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Jl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ed?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===nd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const bi={uSnow:{value:0},uWet:{value:0},uNight:{value:0},uLit:{value:0},uTime:{value:0}},Gd=`
float atmoHash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float atmoNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(atmoHash(i), atmoHash(i + vec2(1.0, 0.0)), f.x),
             mix(atmoHash(i + vec2(0.0, 1.0)), atmoHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
`,hr=i=>i.toFixed(3);function Ie(i,t){const e=t.snow??0,n=t.wet??0,s=`atmo-${hr(e)}-${hr(n)}-${t.windows??""}-${t.uplight?"u":""}`;return i.customProgramCacheKey=()=>s,i.onBeforeCompile=o=>{Object.assign(o.uniforms,bi);const r=t.windows==="glass";o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vAtmoW;
${r?`attribute float aLevel;
varying vec3 vAtmoM;
varying vec3 vAtmoMN;
varying float vAtmoLvl;`:""}`).replace("#include <project_vertex>",`#include <project_vertex>
vec4 atmoP = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
  atmoP = instanceMatrix * atmoP;
#endif
vAtmoW = (modelMatrix * atmoP).xyz;
${r?"vAtmoM = position; vAtmoMN = normal; vAtmoLvl = aLevel * 7.0 + floor(modelMatrix[3].y * 2.0);":""}`);let a=`
vec3 atmoN = normalize((vec4(normal, 0.0) * viewMatrix).xyz);
float atmoUp = clamp(atmoN.y, 0.0, 1.0);
vec3 atmoEm = vec3(0.0);
`;n>0&&(a+=`
{
  float w = uWet * ${hr(n)};
  float puddle = smoothstep(0.5, 0.78, atmoNoise(vAtmoW.xz * 0.11)) * smoothstep(0.6, 0.95, atmoUp);
  diffuseColor.rgb *= 1.0 - 0.42 * w;
  roughnessFactor = mix(roughnessFactor, 0.06, w * clamp(0.5 * atmoUp + 0.5 * puddle, 0.0, 1.0));
  metalnessFactor = mix(metalnessFactor, max(metalnessFactor, 0.15), w * puddle);
}`),e>0&&(a+=`
{
  float n = atmoNoise(vAtmoW.xz * 0.35) * 0.6 + atmoNoise(vAtmoW.xz * 2.1) * 0.4;
  float cover = uSnow * ${hr(e)};
  float s = smoothstep(0.42, 0.8, atmoUp) * clamp(cover * (0.72 + 0.6 * n), 0.0, 1.0);
  diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.93, 0.97), s);
  roughnessFactor = mix(roughnessFactor, 0.8, s);
  metalnessFactor = mix(metalnessFactor, 0.0, s);
}`),t.uplight&&(a+=`
{
  float vert = 1.0 - abs(atmoN.y);
  atmoEm += vec3(1.0, 0.74, 0.5) * uNight * vert * (0.16 * exp(-vAtmoW.y / 9.0) + 0.012);
}`),t.windows==="glass"?a+=`
{
  vec2 t = normalize(vec2(-vAtmoMN.z, vAtmoMN.x) + 1e-5);
  float along = dot(vAtmoM.xz, t) / 1.55;
  float cell = floor(along);
  float h = atmoHash(vec2(cell * 1.31 + vAtmoLvl * 0.17, vAtmoLvl * 3.7 + 11.0));
  float h2 = atmoHash(vec2(cell + 17.0, vAtmoLvl * 1.3 + 5.0));
  float lit = step(h, uLit);
  vec3 c = mix(vec3(1.0, 0.56, 0.24), vec3(1.0, 0.82, 0.58), h2);
  c = mix(c, vec3(0.62, 0.78, 1.0), step(0.9, h2));
  float fr = fract(along);
  float mull = smoothstep(0.0, 0.07, fr) * smoothstep(1.0, 0.93, fr);
  atmoEm = c * lit * mull * (0.32 + 0.75 * h2) * uNight;
}`:t.windows==="context"&&(a+=`
{
  float vert = step(0.85, 1.0 - abs(atmoN.y));
  vec2 t = normalize(vec2(-atmoN.z, atmoN.x) + 1e-5);
  float along = dot(vAtmoW.xz, t) / 3.2;
  float up = vAtmoW.y / 3.0;
  vec2 fr = vec2(fract(along), fract(up));
  float win = step(0.24, fr.x) * step(fr.x, 0.76) * step(0.3, fr.y) * step(fr.y, 0.82) * vert * step(1.0, up);
  float h = atmoHash(vec2(floor(along) * 1.7 + floor(up) * 13.1, floor(up) + 3.0));
  float h2 = atmoHash(vec2(floor(along) + 41.0, floor(up) * 2.3));
  float lit = step(h, uLit * 0.6);
  diffuseColor.rgb *= 1.0 - 0.45 * win * uNight;
  vec3 c = mix(vec3(1.0, 0.6, 0.28), vec3(1.0, 0.84, 0.62), h2);
  atmoEm = c * win * lit * (0.22 + 0.45 * h2) * uNight;
}`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
uniform float uSnow;
uniform float uWet;
uniform float uNight;
uniform float uLit;
uniform float uTime;
varying vec3 vAtmoW;
${r?`varying vec3 vAtmoM;
varying vec3 vAtmoMN;
varying float vAtmoLvl;`:""}
${Gd}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
${a}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += atmoEm;`)},i}const fu=`
uniform float uTime;
uniform vec3 uCenter;
uniform vec3 uBox;
uniform vec2 uWind;
uniform float uSpeed;
uniform vec4 uExcl;     // центр x, z и полуразмеры прямоугольника, внутри которого осадков нет (квартира при прогулке)
uniform vec2 uExclRot;  // cos, sin поворота прямоугольника
uniform float uExclOn;

vec3 precipPos(vec3 seed) {
  vec3 p = seed * uBox;
  float sp = uSpeed * (0.8 + 0.4 * fract(seed.x * 91.7));
  p.y -= uTime * sp;
  p.xz += uWind * uTime * (sp / max(uSpeed, 0.001));
  vec3 lo = uCenter - uBox * 0.5;
  return mod(p - lo, uBox) + lo;
}

bool precipExcluded(vec3 wp) {
  if (uExclOn < 0.5) return false;
  vec2 d = wp.xz - uExcl.xy;
  vec2 l = vec2(d.x * uExclRot.x + d.y * uExclRot.y, -d.x * uExclRot.y + d.y * uExclRot.x);
  return abs(l.x) < uExcl.z && abs(l.y) < uExcl.w;
}
`;class q1{constructor(){this.group=new Zt,this.shared={uTime:{value:0},uCenter:{value:new L},uExcl:{value:new ye},uExclRot:{value:new mt(1,0)},uExclOn:{value:0}},this.group.name="precipitation";const t=18e3,e=new Float32Array(t*2*4);for(let a=0;a<t;a++){const l=Math.random(),c=Math.random(),h=Math.random();e.set([l,c,h,0,l,c,h,1],a*8)}const n=new ce;n.setAttribute("seed",new Oe(e,4)),n.setAttribute("position",new Oe(new Float32Array(t*2*3),3)),this.rainMat=new Ee({uniforms:{...this.shared,uBox:{value:new L(90,60,90)},uWind:{value:new mt(1.6,.6)},uSpeed:{value:9},uLen:{value:.9},uOpacity:{value:0},uColor:{value:new Ft(.75,.8,.86)}},vertexShader:`
        attribute vec4 seed;
        uniform float uLen;
        varying float vA;
        ${fu}
        void main() {
          vec3 wp = precipPos(seed.xyz);
          vec3 vel = normalize(vec3(uWind.x, -uSpeed, -uWind.y));
          wp += vel * seed.w * uLen * (0.7 + 0.6 * fract(seed.z * 37.1));
          vec4 mv = viewMatrix * vec4(wp, 1.0);
          gl_Position = projectionMatrix * mv;
          if (precipExcluded(wp)) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
          float d = -mv.z;
          vA = (1.0 - 0.7 * seed.w) * smoothstep(0.4, 3.0, d) * (1.0 - smoothstep(30.0, 55.0, d));
        }`,fragmentShader:`
        uniform float uOpacity;
        uniform vec3 uColor;
        varying float vA;
        void main() { gl_FragColor = vec4(uColor, vA * uOpacity); }`,transparent:!0,depthWrite:!1,fog:!1}),this.rain=new Cd(n,this.rainMat),this.rain.frustumCulled=!1,this.rain.renderOrder=10;const s=22e3,o=new Float32Array(s*3);for(let a=0;a<o.length;a++)o[a]=Math.random();const r=new ce;r.setAttribute("seed",new Oe(o,3)),r.setAttribute("position",new Oe(new Float32Array(s*3),3)),this.snowMat=new Ee({uniforms:{...this.shared,uBox:{value:new L(70,45,70)},uWind:{value:new mt(.5,.2)},uSpeed:{value:1.1},uSize:{value:70},uOpacity:{value:0},uColor:{value:new Ft(1,1,1)}},vertexShader:`
        attribute vec3 seed;
        uniform float uSize;
        varying float vA;
        ${fu}
        void main() {
          vec3 wp = precipPos(seed);
          wp.x += sin(uTime * 0.7 + seed.y * 40.0) * 0.6;
          wp.z += cos(uTime * 0.55 + seed.z * 40.0) * 0.6;
          vec4 mv = viewMatrix * vec4(wp, 1.0);
          gl_Position = projectionMatrix * mv;
          if (precipExcluded(wp)) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
          float d = -mv.z;
          gl_PointSize = clamp(uSize * (0.6 + 0.8 * fract(seed.x * 13.3)) / max(d, 0.5), 1.0, 26.0);
          vA = smoothstep(0.3, 1.5, d) * (1.0 - smoothstep(26.0, 40.0, d));
        }`,fragmentShader:`
        uniform float uOpacity;
        uniform vec3 uColor;
        varying float vA;
        void main() {
          float r = length(gl_PointCoord - 0.5);
          float a = smoothstep(0.5, 0.12, r);
          gl_FragColor = vec4(uColor, a * vA * uOpacity);
        }`,transparent:!0,depthWrite:!1,fog:!1}),this.snow=new Rd(r,this.snowMat),this.snow.frustumCulled=!1,this.snow.renderOrder=10,this.group.add(this.rain,this.snow)}update(t,e,n,s,o,r){this.shared.uTime.value+=t;const a=new L;e.getWorldDirection(a);const l=new L().setFromMatrixPosition(e.matrixWorld);this.shared.uCenter.value.copy(l).addScaledVector(a,22),this.rainMat.uniforms.uOpacity.value=.55*n,this.snowMat.uniforms.uOpacity.value=.95*s,this.rainMat.uniforms.uColor.value.setRGB(.32+.45*o,.35+.47*o,.4+.48*o);const c=.35+.65*o;this.snowMat.uniforms.uColor.value.setRGB(c,c,c*1.02),this.snowMat.uniforms.uSize.value=120*r,this.rain.visible=n>.01,this.snow.visible=s>.01}setExclusion(t){this.shared.uExclOn.value=t?1:0,t&&(this.shared.uExcl.value.set(t.cx,t.cz,t.hx,t.hz),this.shared.uExclRot.value.set(Math.cos(t.rot),Math.sin(t.rot)))}}class j1{constructor(){this.uniforms={uTime:bi.uTime,uCover:{value:0},uLight:{value:new Ft(1,1,1)},uShade:{value:new Ft(.6,.63,.68)},uHorizon:{value:new Ft(.8,.82,.85)},uSunDir:{value:new L(0,1,0)}};const t=new Ee({uniforms:this.uniforms,vertexShader:`
        varying vec3 vDir;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vDir = wp.xyz - cameraPosition;
          gl_Position = projectionMatrix * viewMatrix * wp;
          gl_Position.z = gl_Position.w;
        }`,fragmentShader:`
        uniform float uTime;
        uniform float uCover;
        uniform vec3 uLight;
        uniform vec3 uShade;
        uniform vec3 uHorizon;
        uniform vec3 uSunDir;
        varying vec3 vDir;
        ${Gd}
        float fbm(vec2 p) {
          float a = 0.5, s = 0.0;
          for (int i = 0; i < 6; i++) { s += a * atmoNoise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; }
          return s;
        }
        void main() {
          vec3 d = normalize(vDir);
          float h = max(d.y, 0.0);
          vec2 uv = d.xz / (h + 0.1) * 1.2 + vec2(uTime * 0.006, uTime * 0.0025);
          float n = fbm(uv);
          float th = 0.78 - 0.48 * uCover;
          float cov = max(smoothstep(th - 0.09, th + 0.09, n), smoothstep(0.85, 1.0, uCover));
          float sunAmt = pow(max(dot(d, uSunDir), 0.0), 5.0);
          float thick = smoothstep(0.35, 0.85, n);
          vec3 col = mix(uLight, uShade, thick * (0.4 + 0.5 * uCover));
          col += uLight * sunAmt * 0.35 * (1.0 - uCover);
          float horizon = 1.0 - smoothstep(0.0, 0.22, h);
          col = mix(col, uHorizon, horizon * (0.5 + 0.5 * uCover));
          float a = clamp(cov * smoothstep(-0.02, 0.06, d.y) + horizon * uCover * 0.95, 0.0, 1.0);
          gl_FragColor = vec4(col, a);
        }`,side:Qe,transparent:!0,depthWrite:!1,fog:!1}),e=new Yn(1,48,24);this.clouds=new Dt(e,t),this.clouds.scale.setScalar(4500),this.clouds.renderOrder=-1,this.clouds.frustumCulled=!1,this.cloudsEnv=new Dt(e,t),this.cloudsEnv.scale.setScalar(900);const n=2600,s=new Float32Array(n*3),o=new Float32Array(n);for(let a=0;a<n;a++){const l=Math.random(),c=Math.random()*Math.PI*2,h=.04+.96*Math.sqrt(l),u=Math.sqrt(1-h*h);s.set([u*Math.cos(c),h,u*Math.sin(c)],a*3),o[a]=Math.random()}const r=new ce;r.setAttribute("position",new Oe(s,3)),r.setAttribute("seed",new Oe(o,1)),this.starMat=new Ee({uniforms:{uTime:bi.uTime,uOpacity:{value:0},uPixel:{value:1}},vertexShader:`
        attribute float seed;
        uniform float uTime;
        uniform float uPixel;
        varying float vA;
        void main() {
          vec4 wp = vec4(cameraPosition + position * 4000.0, 1.0);
          gl_Position = projectionMatrix * viewMatrix * wp;
          gl_Position.z = gl_Position.w;
          float big = step(0.93, seed);
          gl_PointSize = (1.2 + 1.6 * big) * uPixel;
          vA = (0.35 + 0.65 * seed) * (0.75 + 0.25 * sin(uTime * (1.5 + seed * 3.0) + seed * 60.0)) * smoothstep(0.04, 0.2, position.y);
        }`,fragmentShader:`
        uniform float uOpacity;
        varying float vA;
        void main() {
          float r = length(gl_PointCoord - 0.5);
          gl_FragColor = vec4(vec3(0.85, 0.9, 1.0), smoothstep(0.5, 0.1, r) * vA * uOpacity);
        }`,transparent:!0,depthWrite:!1,fog:!1}),this.stars=new Rd(r,this.starMat),this.stars.frustumCulled=!1,this.stars.renderOrder=-2}setStars(t,e){this.starMat.uniforms.uOpacity.value=t,this.starMat.uniforms.uPixel.value=e,this.stars.visible=t>.01}}const Ts=class Ts{constructor(t,e,n,s){this.group=new Zt,this.headMat=new on({color:7829367,toneMapped:!0}),this.group.name="lamps";const o=[],r=new Set(["primary","secondary","tertiary","trunk","residential","living_street","service"]);for(const g of t.roads){if(!r.has(g.k??""))continue;const m=g.k==="service"||g.k==="living_street",M=m?26:34;let x=M*.5,_=1;for(let U=0;U<g.p.length-1;U++){const[R,E]=g.p[U],[A,S]=g.p[U+1],y=Math.hypot(A-R,S-E);if(y<.1)continue;const N=-(S-E)/y,H=(A-R)/y;let W=x;for(;W<y;){const K=g.w/2+1,at=R+(A-R)*W/y+N*K*_,F=E+(S-E)*W/y+H*K*_,w=!s||!s.inYard(at,F)&&!s.onRoad(at,F);Math.hypot(at,F)<900&&w&&o.push({x:at,y:F,h:m?5:8,r:m?9:13}),_=-_,W+=M}x=W-y}}const a=Z1(e,7);for(let g=0;g<a.length;g++){const[m,M]=a[g],[x,_]=a[(g+1)%a.length],U=Math.hypot(x-m,_-M);for(let R=4;R<U;R+=11){const E=m+(x-m)*R/U,A=M+(_-M)*R/U;s?.onRoad(E,A)||o.push({x:E,y:A,h:3.2,r:6.5})}}const l=new ns(.07,.11,1,6),c=new an(.55,.14,.3),h=new Pi(2,2).rotateX(-Math.PI/2),u=new Xi(l,n,o.length),d=new Xi(c,this.headMat,o.length);this.poolMat=new Ee({uniforms:{uOn:{value:0},uColor:{value:new Ft(1,.68,.38)}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = position.xz;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        uniform float uOn;
        uniform vec3 uColor;
        varying vec2 vUv;
        void main() {
          float r = length(vUv);
          float a = pow(max(1.0 - r, 0.0), 2.2);
          gl_FragColor = vec4(uColor * a * uOn * 0.6, 1.0);
        }`,transparent:!0,blending:Dr,depthWrite:!1,fog:!1,polygonOffset:!0,polygonOffsetUnits:-24});const f=new Xi(h,this.poolMat,o.length);f.renderOrder=1;const p=new le,v=new Un;o.forEach((g,m)=>{p.compose(new L(g.x,g.h/2,-g.y),v,new L(1,g.h,1)),u.setMatrixAt(m,p),p.compose(new L(g.x,g.h+.05,-g.y),v,new L(1,1,1)),d.setMatrixAt(m,p),p.compose(new L(g.x,.2,-g.y),v,new L(g.r,1,g.r)),f.setMatrixAt(m,p)}),u.castShadow=!0,this.group.add(u,d,f)}setOn(t){this.headMat.color.copy(Ts.HEAD_OFF).lerp(Ts.HEAD_ON,t),this.poolMat.uniforms.uOn.value=t}};Ts.HEAD_ON=new Ft(1,.72,.42).multiplyScalar(4),Ts.HEAD_OFF=new Ft(9079430);let Gl=Ts;function Z1(i,t){const e=i.reduce((s,o)=>s+o[0],0)/i.length,n=i.reduce((s,o)=>s+o[1],0)/i.length;return i.map(([s,o])=>{const r=Math.hypot(s-e,o-n)||1;return[s+(s-e)/r*t,o+(o-n)/r*t]})}const ur={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new mt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new le},cameraProjectionMatrixInverse:{value:new le},cameraWorldMatrix:{value:new le},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},dr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Pa={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function K1(i=5){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=J1(t),n=e.length,s=new Uint8Array(n*4);for(let r=0;r<n;++r){const a=e[r],l=2*Math.PI*a/n,c=new L(Math.cos(l),Math.sin(l),0).normalize();s[r*4]=(c.x*.5+.5)*255,s[r*4+1]=(c.y*.5+.5)*255,s[r*4+2]=127,s[r*4+3]=255}const o=new pc(s,t,t);return o.wrapS=Wn,o.wrapT=Wn,o.needsUpdate=!0,o}function J1(i){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0);let s=Math.floor(t/2),o=t-1;for(let r=1;r<=e;){if(s===-1&&o===t?(o=t-2,s=0):(o===t&&(o=0),s<0&&(s=t-1)),n[s*t+o]!==0){o-=2,s++;continue}else n[s*t+o]=r++;o++,s--}return n}const fr={defines:{SAMPLES:16,SAMPLE_VECTORS:Wd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new mt},cameraProjectionMatrixInverse:{value:new le},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Wd(i,t,e){const n=Q1(i,t,e);let s="vec3[SAMPLES](";for(let o=0;o<i;o++){const r=n[o];s+=`vec3(${r.x}, ${r.y}, ${r.z})${o<i-1?",":")"}`}return s}function Q1(i,t,e){const n=[];for(let s=0;s<i;s++){const o=2*Math.PI*t*s/i,r=Math.pow(s/(i-1),e);n.push(new L(Math.cos(o),Math.sin(o),r))}return n}class tx{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,o){return t[0]*e+t[1]*n+t[2]*s+t[3]*o}noise(t,e){let n,s,o;const r=.5*(Math.sqrt(3)-1),a=(t+e)*r,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,p=t-d,v=e-f;let g,m;p>v?(g=1,m=0):(g=0,m=1);const M=p-g+h,x=v-m+h,_=p-1+2*h,U=v-1+2*h,R=l&255,E=c&255,A=this.perm[R+this.perm[E]]%12,S=this.perm[R+g+this.perm[E+m]]%12,y=this.perm[R+1+this.perm[E+1]]%12;let N=.5-p*p-v*v;N<0?n=0:(N*=N,n=N*N*this.dot(this.grad3[A],p,v));let H=.5-M*M-x*x;H<0?s=0:(H*=H,s=H*H*this.dot(this.grad3[S],M,x));let W=.5-_*_-U*U;return W<0?o=0:(W*=W,o=W*W*this.dot(this.grad3[y],_,U)),70*(n+s+o)}noise3d(t,e,n){let s,o,r,a;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),d=Math.floor(n+c),f=1/6,p=(h+u+d)*f,v=h-p,g=u-p,m=d-p,M=t-v,x=e-g,_=n-m;let U,R,E,A,S,y;M>=x?x>=_?(U=1,R=0,E=0,A=1,S=1,y=0):M>=_?(U=1,R=0,E=0,A=1,S=0,y=1):(U=0,R=0,E=1,A=1,S=0,y=1):x<_?(U=0,R=0,E=1,A=0,S=1,y=1):M<_?(U=0,R=1,E=0,A=0,S=1,y=1):(U=0,R=1,E=0,A=1,S=1,y=0);const N=M-U+f,H=x-R+f,W=_-E+f,K=M-A+2*f,at=x-S+2*f,F=_-y+2*f,w=M-1+3*f,T=x-1+3*f,O=_-1+3*f,X=h&255,V=u&255,Z=d&255,pt=this.perm[X+this.perm[V+this.perm[Z]]]%12,z=this.perm[X+U+this.perm[V+R+this.perm[Z+E]]]%12,G=this.perm[X+A+this.perm[V+S+this.perm[Z+y]]]%12,nt=this.perm[X+1+this.perm[V+1+this.perm[Z+1]]]%12;let $=.6-M*M-x*x-_*_;$<0?s=0:($*=$,s=$*$*this.dot3(this.grad3[pt],M,x,_));let tt=.6-N*N-H*H-W*W;tt<0?o=0:(tt*=tt,o=tt*tt*this.dot3(this.grad3[z],N,H,W));let ct=.6-K*K-at*at-F*F;ct<0?r=0:(ct*=ct,r=ct*ct*this.dot3(this.grad3[G],K,at,F));let gt=.6-w*w-T*T-O*O;return gt<0?a=0:(gt*=gt,a=gt*gt*this.dot3(this.grad3[nt],w,T,O)),32*(s+o+r+a)}noise4d(t,e,n,s){const o=this.grad4,r=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,d,f,p;const v=(t+e+n+s)*l,g=Math.floor(t+v),m=Math.floor(e+v),M=Math.floor(n+v),x=Math.floor(s+v),_=(g+m+M+x)*c,U=g-_,R=m-_,E=M-_,A=x-_,S=t-U,y=e-R,N=n-E,H=s-A,W=S>y?32:0,K=S>N?16:0,at=y>N?8:0,F=S>H?4:0,w=y>H?2:0,T=N>H?1:0,O=W+K+at+F+w+T,X=r[O][0]>=3?1:0,V=r[O][1]>=3?1:0,Z=r[O][2]>=3?1:0,pt=r[O][3]>=3?1:0,z=r[O][0]>=2?1:0,G=r[O][1]>=2?1:0,nt=r[O][2]>=2?1:0,$=r[O][3]>=2?1:0,tt=r[O][0]>=1?1:0,ct=r[O][1]>=1?1:0,gt=r[O][2]>=1?1:0,Ut=r[O][3]>=1?1:0,et=S-X+c,ht=y-V+c,k=N-Z+c,wt=H-pt+c,ft=S-z+2*c,yt=y-G+2*c,St=N-nt+2*c,Ht=H-$+2*c,bt=S-tt+3*c,I=y-ct+3*c,b=N-gt+3*c,J=H-Ut+3*c,ut=S-1+4*c,_t=y-1+4*c,dt=N-1+4*c,zt=H-1+4*c,Tt=g&255,Pt=m&255,ne=M&255,Mt=x&255,kt=a[Tt+a[Pt+a[ne+a[Mt]]]]%32,qt=a[Tt+X+a[Pt+V+a[ne+Z+a[Mt+pt]]]]%32,Kt=a[Tt+z+a[Pt+G+a[ne+nt+a[Mt+$]]]]%32,Bt=a[Tt+tt+a[Pt+ct+a[ne+gt+a[Mt+Ut]]]]%32,he=a[Tt+1+a[Pt+1+a[ne+1+a[Mt+1]]]]%32;let te=.6-S*S-y*y-N*N-H*H;te<0?h=0:(te*=te,h=te*te*this.dot4(o[kt],S,y,N,H));let fe=.6-et*et-ht*ht-k*k-wt*wt;fe<0?u=0:(fe*=fe,u=fe*fe*this.dot4(o[qt],et,ht,k,wt));let Y=.6-ft*ft-yt*yt-St*St-Ht*Ht;Y<0?d=0:(Y*=Y,d=Y*Y*this.dot4(o[Kt],ft,yt,St,Ht));let Ct=.6-bt*bt-I*I-b*b-J*J;Ct<0?f=0:(Ct*=Ct,f=Ct*Ct*this.dot4(o[Bt],bt,I,b,J));let lt=.6-ut*ut-_t*_t-dt*dt-zt*zt;return lt<0?p=0:(lt*=lt,p=lt*lt*this.dot4(o[he],ut,_t,dt,zt)),27*(h+u+d+f+p)}}class kn extends is{constructor(t,e,n,s,o,r,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=K1(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new hn(this.width,this.height,{type:Mn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ee({defines:Object.assign({},ur.defines),uniforms:In.clone(ur.uniforms),vertexShader:ur.vertexShader,fragmentShader:ur.fragmentShader,blending:We,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new g1,this.normalMaterial.blending=We,this.pdMaterial=new Ee({defines:Object.assign({},fr.defines),uniforms:In.clone(fr.uniforms),vertexShader:fr.vertexShader,fragmentShader:fr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ee({defines:Object.assign({},dr.defines),uniforms:In.clone(dr.uniforms),vertexShader:dr.vertexShader,fragmentShader:dr.fragmentShader,blending:We}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ee({uniforms:In.clone(vo.uniforms),vertexShader:vo.vertexShader,fragmentShader:vo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Qa,blendDst:so,blendEquation:Dn,blendSrcAlpha:Ja,blendDstAlpha:so,blendEquationAlpha:Dn}),this.blendMaterial=new Ee({uniforms:In.clone(Pa.uniforms),vertexShader:Pa.vertexShader,fragmentShader:Pa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Zu,blendSrc:Qa,blendDst:so,blendEquation:Dn,blendSrcAlpha:Ja,blendDstAlpha:so,blendEquationAlpha:Dn}),this.fsQuad=new Xr(null),this.originalClearColor=new Ft,this.setGBuffer(o?o.depthTexture:void 0,o?o.normalTexture:void 0),r!==void 0&&this.updateGtaoMaterial(r),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new dc,this.depthTexture.format=Zi,this.depthTexture.type=ji,this.normalRenderTarget=new hn(this.width,this.height,{minFilter:rn,magFilter:rn,type:Mn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Wd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case kn.OUTPUT.Off:break;case kn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=We,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case kn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=We,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case kn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=We,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case kn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case kn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=We,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case kn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=We,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,o){t.getClearColor(this.originalClearColor);const r=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(o||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(r)}renderOverride(t,e,n,s,o){t.getClearColor(this.originalClearColor);const r=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,o=e.clearAlpha||o,s!=null&&(t.setClearColor(s),t.setClearAlpha(o||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(r)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){const e=new tx,n=t*t*4,s=new Uint8Array(n);for(let r=0;r<t;r++)for(let a=0;a<t;a++){const l=r,c=a;s[(r*t+a)*4]=(e.noise(l,c)*.5+.5)*255,s[(r*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(r*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(r*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}const o=new pc(s,t,t,yn,Xn);return o.wrapS=Wn,o.wrapT=Wn,o.needsUpdate=!0,o}}kn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const oe=.1,Ks=0,pu=1,Js=2,Da=3,Qs=4;function ex(i,t){const e=t.polygon;let n=1/0,s=1/0,o=-1/0,r=-1/0;for(const[E,A]of e)n=Math.min(n,E),s=Math.min(s,A),o=Math.max(o,E),r=Math.max(r,A);n-=.6,s-=.6,o+=.6,r+=.6;const a=Math.ceil((o-n)/oe),l=Math.ceil((r-s)/oe),c=new Uint8Array(a*l),h=E=>n+(E+.5)*oe,u=E=>s+(E+.5)*oe,d=(E,A)=>A*a+E,f=(E,A)=>E>=0&&A>=0&&E<a&&A<l;for(let E=0;E<l;E++)for(let A=0;A<a;A++)c[d(A,E)]=nx(h(A),u(E),e)?Ks:Qs;const p=(E,A,S)=>{for(const[y,N,H,W]of E){if(H<n||y>o||W<s||N>r)continue;const K=Math.max(0,Math.floor((y-S-n)/oe)),at=Math.min(a-1,Math.floor((H+S-n)/oe)),F=Math.max(0,Math.floor((N-S-s)/oe)),w=Math.min(l-1,Math.floor((W+S-s)/oe));for(let T=F;T<=w;T++)for(let O=K;O<=at;O++){const X=h(O),V=u(T);if(X>=y-S&&X<=H+S&&V>=N-S&&V<=W+S){const Z=d(O,T);if(c[Z]===Qs&&A!==Js)continue;c[Z]=A}}}};p(i.walls_int,pu,.03),p(i.walls_ext,pu,.03),p(i.glass,Da,.03),p(i.door_heads,Js,.02);const v=new Uint8Array(a*l);for(let E=0;E<l;E++)for(let A=0;A<a;A++){const S=h(A),y=u(E);v[d(A,E)]=i.slab.some(([N,H,W,K])=>S>=N&&S<=W&&y>=H&&y<=K)?0:1}const g=new Int32Array(a*l).fill(-1),m=[];for(let E=0;E<c.length;E++){if(c[E]!==Ks||g[E]>=0)continue;const A=m.length,S=[],y=[E];for(g[E]=A;y.length;){const N=y.pop();S.push(N);const H=N%a,W=(N-H)/a;for(const[K,at]of mu){const F=H+K,w=W+at;if(!f(F,w))continue;const T=d(F,w);c[T]===Ks&&g[T]<0&&(g[T]=A,y.push(T))}}m.push(S)}const M=m.map(E=>E.length*oe*oe>=1),x=new Map;m.forEach((E,A)=>M[A]&&x.set(A,x.size));for(let E=0;E<g.length;E++)g[E]=g[E]>=0&&M[g[E]]?x.get(g[E]):-1;const _=[];m.forEach((E,A)=>{if(!M[A])return;const S=x.get(A),y=($,tt)=>f($,tt)&&g[d($,tt)]===S;let N=a,H=0,W=l,K=0;for(const $ of E){const tt=$%a,ct=($-tt)/a;N=Math.min(N,tt),H=Math.max(H,tt),W=Math.min(W,ct),K=Math.max(K,ct)}const at=new Set,F=[];for(let $=0;$<3;$++){const tt=(ft,yt)=>y(ft,yt)&&!at.has(d(ft,yt)),ct=gu(tt,N,H,W,K,Math.round(1.6/oe))??($===0?gu(tt,N,H,W,K):null);if(!ct)break;const[gt,Ut,et,ht]=ct,k=(et-gt+1)*oe,wt=(ht-Ut+1)*oe;if($>0&&(k*wt<6||Math.min(k,wt)<1.8))break;F.push([n+gt*oe,s+Ut*oe,n+(et+1)*oe,s+(ht+1)*oe]);for(let ft=Ut;ft<=ht;ft++)for(let yt=gt;yt<=et;yt++)at.add(d(yt,ft))}const w=F[0],T=[];for(let $=W;$<=K;$++){let tt=N;for(;tt<=H;){if(!y(tt,$)){tt++;continue}let ct=tt;for(;ct+1<=H&&y(ct+1,$);)ct++;T.push([n+tt*oe,s+$*oe,n+(ct+1)*oe,s+($+1)*oe]),tt=ct+1}}const O=[],X={N:0,S:0,E:0,W:0},V=[],Z=[["N",0,1],["S",0,-1],["E",1,0],["W",-1,0]],pt=[...E].sort(($,tt)=>$-tt),z=[...E].sort(($,tt)=>$%a-tt%a||$-tt);for(const[$,tt,ct]of Z){const gt=new Map;for(const Ut of ct!==0?pt:z){const et=Ut%a,ht=(Ut-et)/a;if(y(et+tt,ht+ct))continue;const k=f(et+tt,ht+ct)?c[d(et+tt,ht+ct)]:Qs;let wt=k===Js?"door":k===Da?"window":"wall";if(wt==="wall")for(let bt=1;bt<=5;bt++){const I=et+tt*bt,b=ht+ct*bt;if(!f(I,b))break;if(v[d(I,b)]||c[d(I,b)]===Da){wt="window";break}if(c[d(I,b)]===Ks&&g[d(I,b)]!==S)break}wt==="window"&&X[$]++;const ft=ct!==0?ht+(ct>0?1:0):et+(tt>0?1:0),yt=ct!==0?et:ht,St=`${ft}:${wt}`,Ht=gt.get(St);Ht&&Ht.b===yt?Ht.b=yt+1:(Ht&&G(Ht,$,ct!==0),gt.set(St,{a:yt,b:yt+1,fixed:ft,kind:wt}))}for(const Ut of gt.values())G(Ut,$,ct!==0)}function G($,tt,ct){const gt=ct?[n+$.a*oe,s+$.fixed*oe,n+$.b*oe,s+$.fixed*oe]:[n+$.fixed*oe,s+$.a*oe,n+$.fixed*oe,s+$.b*oe];O.push([...gt,tt,$.kind]),$.kind==="window"&&($.b-$.a)*oe>=.5&&V.push([...gt,tt])}const nt=["N","S","E","W"].filter($=>X[$]*oe>=.6);_.push({index:S,kind:"living",area:E.length*oe*oe,rect:w,zones:F,facade:nt,cells:T,edges:O,doors:[],windows:V})});const U=[],R=new Uint8Array(a*l);for(let E=0;E<c.length;E++){if(c[E]!==Js||R[E])continue;const A=[E];R[E]=1;let S=a,y=l,N=0,H=0;for(;A.length;){const X=A.pop(),V=X%a,Z=(X-V)/a;S=Math.min(S,V),y=Math.min(y,Z),N=Math.max(N,V),H=Math.max(H,Z);for(const[pt,z]of mu){const G=V+pt,nt=Z+z;f(G,nt)&&c[d(G,nt)]===Js&&!R[d(G,nt)]&&(R[d(G,nt)]=1,A.push(d(G,nt)))}}const W=N-S>=H-y,K=Math.round((S+N)/2),at=Math.round((y+H)/2),F=X=>{for(let V=1;V<=4;V++){const Z=W?K:X<0?S-V:N+V,pt=W?X<0?y-V:H+V:at;if(!f(Z,pt))return-2;const z=c[d(Z,pt)];if(z===Ks)return g[d(Z,pt)];if(z===Qs)return-1}return-2},w=F(-1),T=F(1);if(w<0&&T<0||w===-2||T===-2)continue;const O=U.length;U.push({rect:[n+S*oe,s+y*oe,n+(N+1)*oe,s+(H+1)*oe],alongX:W,rooms:[w,T],entrance:w===-1||T===-1});for(const X of[w,T])X>=0&&_[X].doors.push(O)}return sx(_,U,t),{rooms:_,doors:U,kindAt(E,A){const S=Math.floor((E-n)/oe),y=Math.floor((A-s)/oe);return f(S,y)?c[d(S,y)]:Qs},roomAt(E,A){const S=Math.floor((E-n)/oe),y=Math.floor((A-s)/oe);return f(S,y)?g[d(S,y)]:-1}}}const mu=[[1,0],[-1,0],[0,1],[0,-1]];function gu(i,t,e,n,s,o=0){const r=e-t+1,a=new Int32Array(r);let l=0,c=null;for(let h=n;h<=s;h++){for(let d=0;d<r;d++)a[d]=i(t+d,h)?a[d]+1:0;const u=[];for(let d=0;d<=r;d++){const f=d<r?a[d]:0;for(;u.length&&a[u.at(-1)]>=f;){const p=a[u.pop()],v=u.length?u.at(-1)+1:0,g=p*(d-v);g>l&&p>=o&&d-v>=o&&(l=g,c=[t+v,h-p+1,t+d-1,h])}u.push(d)}}return c}function nx(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++)e[s][1]>t!=e[o][1]>t&&i<(e[o][0]-e[s][0])*(t-e[s][1])/(e[o][1]-e[s][1]+1e-12)+e[s][0]&&(n=!n);return n}const ix=[[/кухня.?гостин|кухня.?столов/i,"kitchen_living"],[/кухн/i,"kitchen"],[/гостин|зал/i,"living"],[/спальн|детск|кабинет/i,"bedroom"],[/с\/у|сану|ванн|туалет|душ/i,"bath"],[/прихож|коридор|холл/i,"hall"],[/гардер|кладов/i,"closet"],[/лодж|балк/i,"loggia"]];function sx(i,t,e){const n=h=>{const u=h.rect[2]-h.rect[0],d=h.rect[3]-h.rect[1];return{min:Math.min(u,d),max:Math.max(u,d)}},s=h=>h.doors.some(u=>t[u].entrance);if(e.room_list?.length){const h=e.room_list.map(m=>({...m,kind:ix.find(([M])=>M.test(m.name))?.[1]??"living"})),u=new Set(i.map(m=>m.index)),d=[];h.forEach((m,M)=>i.forEach(x=>d.push([Math.abs(x.area-m.area)/Math.max(m.area,1),M,x.index]))),d.sort((m,M)=>m[0]-M[0]);const f=new Set,p=m=>m.zones.some(M=>Math.min(M[2]-M[0],M[3]-M[1])>=1.6),v=new Set(["living","kitchen_living","bedroom","kitchen","studio"]);for(const[m,M,x]of d)m>.45||f.has(M)||!u.has(x)||v.has(h[M].kind)&&!p(i[x])||(f.add(M),u.delete(x),i[x].kind=h[M].kind,i[x].name=h[M].name);const g=i.filter(m=>u.has(m.index));for(const m of g)m.kind=o(m)??(p(m)?"living":"hall");for(const m of i)m.kind==="living"&&!i.some(M=>M.kind==="kitchen"||M.kind==="kitchen_living")&&m.area>18&&(m.kind="kitchen_living");return}function o(h){const{min:u,max:d}=n(h);return h.facade.length&&h.area<3.2?"loggia":h.facade.length?null:s(h)?"hall":h.area<1.8?"closet":d/Math.max(u,.1)>2.4&&u<1.6?"hall":h.area<=8.5?"bath":"hall"}for(const h of i){const u=o(h);u&&(h.kind=u)}const r=i.filter(h=>h.facade.length&&h.kind!=="loggia").sort((h,u)=>u.area-h.area);if(!r.length)return;const a=Math.max(1,e.rooms);let l=null;r.length>a&&(l=[...r].reverse().find(h=>h.area>=5&&h.area<=18)??null,l&&(l.kind="kitchen"));const c=r.filter(h=>h!==l);if(a===1||c.length===1){c[0].kind=l?"living_bed":"studio";for(const h of c.slice(1))h.kind="bedroom";return}c[0].kind=l?"living":"kitchen_living";for(const h of c.slice(1))h.kind="bedroom"}const vu=new Map;function ox(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function hi(i,t,e,n,s=!0){const o=vu.get(i);if(o)return o;const r=document.createElement("canvas");r.width=r.height=t;const a=r.getContext("2d");n(a,ox(i.length*7919+t));const l=new Gr(r);return l.wrapS=l.wrapT=Wn,s&&(l.colorSpace=Xe),l.anisotropy=8,l.repeat.set(1/e,1/e),vu.set(i,l),l}const ke=([i,t,e],n=1,s=1)=>`rgba(${Math.round(i*n)},${Math.round(t*n)},${Math.round(e*n)},${s})`;function Xd(i,t,e,n,s,o,r,a){const l=Math.round(o/3);for(let c=0;c<l;c++){i.strokeStyle=ke(r,.78+t()*.12,.06+t()*.1),i.lineWidth=.6+t()*1.2,i.beginPath();{const h=n+c/l*o+t()*2;i.moveTo(e,h),i.bezierCurveTo(e+s*.33,h+(t()-.5)*4,e+s*.66,h+(t()-.5)*4,e+s,h+(t()-.5)*2)}i.stroke()}if(t()<.35){const c=e+t()*s,h=n+t()*o,u=i.createRadialGradient(c,h,0,c,h,5+t()*6);u.addColorStop(0,ke(r,.55,.5)),u.addColorStop(1,ke(r,.8,0)),i.fillStyle=u,i.fillRect(c-12,h-12,24,24)}}function Mi(i,t=.19,e=1.4,n=.1){return hi(`planks-${i}-${t}-${e}`,1024,2,(o,r)=>{const l=t*512;for(let c=0,h=0;c<1024;c+=l,h++){let u=-r()*e*512;for(;u<1024;){const d=e*512*(.6+r()*.5),f=1-n/2+r()*n;o.fillStyle=ke(i,f),o.fillRect(u,c,d,l),Xd(o,r,u,c,d,l,i),o.fillStyle="rgba(30,20,10,0.35)",o.fillRect(u,c,1.5,l),u+=d}o.fillStyle="rgba(30,20,10,0.3)",o.fillRect(0,c,1024,1.2)}})}function rx(i){return hi(`herring-${i}`,1024,1.2,(e,n)=>{const s=853.3333333333334,o=.08*s,r=.48*s;e.fillStyle=ke(i,.9),e.fillRect(0,0,1024,1024);const a=r/Math.SQRT2;for(let l=-4;l<1024/(o*Math.SQRT2)+8;l++)for(let c=-2;c<1024/a+4;c++){const h=c*a*2,u=l*o*Math.SQRT2*2+c*0;for(const d of[0,1]){e.save(),e.translate(h+d*a,u+(d?a:0)),e.rotate(d?-Math.PI/4:Math.PI/4);const f=.9+n()*.18;e.fillStyle=ke(i,f),e.fillRect(0,0,r,o),Xd(e,n,0,0,r,o,i),e.strokeStyle="rgba(40,25,10,0.35)",e.lineWidth=1.2,e.strokeRect(0,0,r,o),e.restore()}}})}function to(i,t,e,n,s=!1,o=.04,r=0){const a=Math.max(e,n)*4>2.4?Math.max(e,n)*2:1.2;return hi(`tiles-${i}-${t}-${e}-${n}-${s}-${r}`,1024,a,(l,c)=>{const h=1024/a;l.fillStyle=ke(t),l.fillRect(0,0,1024,1024);const u=Math.max(1.5,.003*h);for(let d=0,f=0;d<1024;d+=n*h,f++){const p=s&&f%2?-e*h/2:0;for(let v=p;v<1024;v+=e*h){l.fillStyle=ke(i,1-o/2+c()*o),l.fillRect(v+u/2,d+u/2,e*h-u,n*h-u);for(let g=0;g<r;g++)l.fillStyle=ke(i,.6+c()*.6,.5),l.fillRect(v+c()*e*h,d+c()*n*h,1+c()*3,1+c()*3);l.fillStyle="rgba(255,255,255,0.05)",l.fillRect(v+u/2,d+u/2,e*h-u,3)}}})}function ax(i,t){return hi(`marble-${i}-${t}`,1024,1.6,(e,n)=>{e.fillStyle=ke(i),e.fillRect(0,0,1024,1024);for(let s=0;s<2600;s++){e.fillStyle=ke(i,.94+n()*.08,.25);const o=20+n()*80;e.beginPath(),e.arc(n()*1024,n()*1024,o,0,Math.PI*2),e.fill()}for(let s=0;s<9;s++){let o=n()*1024,r=n()*1024;const a=n()*Math.PI;e.strokeStyle=ke(t,1,.18+n()*.3),e.lineWidth=.6+n()*2.2,e.beginPath(),e.moveTo(o,r);for(let l=0;l<40;l++)o+=Math.cos(a+(n()-.5)*1.4)*30,r+=Math.sin(a+(n()-.5)*1.4)*30,e.lineTo(o,r);e.stroke()}})}function _u(i){return hi(`concrete-${i}`,1024,2.4,(t,e)=>{t.fillStyle=ke(i),t.fillRect(0,0,1024,1024);for(let n=0;n<9e3;n++){t.fillStyle=ke(i,.86+e()*.24,.12);const s=2+e()*40;t.fillRect(e()*1024,e()*1024,s,s*(.4+e()))}for(let n=0;n<400;n++)t.fillStyle=ke(i,.6,.35),t.fillRect(e()*1024,e()*1024,1.5,1.5)})}function lx(){return hi("brick",1024,1.3,(i,t)=>{const e=787.6923076923076,n=.25*e,s=.065*e,o=.01*e;i.fillStyle="rgb(176,168,156)",i.fillRect(0,0,1024,1024);for(let r=0,a=0;r<1024;r+=s+o,a++)for(let l=a%2?-n/2:0;l<1024;l+=n+o){const c=.75+t()*.35;i.fillStyle=`rgb(${Math.round(150*c)},${Math.round(78*c)},${Math.round(56*c)})`,i.fillRect(l,r,n,s);for(let h=0;h<30;h++)i.fillStyle=`rgba(${t()<.5?40:210},${t()<.5?30:190},${t()<.5?25:170},0.12)`,i.fillRect(l+t()*n,r+t()*s,2+t()*8,1+t()*3)}})}function Ve(i,t=1){return hi(`fabric-${i}-${t}`,512,.5,(e,n)=>{e.fillStyle=ke(i),e.fillRect(0,0,512,512);const s=3*t;for(let o=0;o<512;o+=s)e.fillStyle=ke(i,.9+n()*.06,.5),e.fillRect(0,o,512,1);for(let o=0;o<512;o+=s)e.fillStyle=ke(i,1.04+n()*.05,.35),e.fillRect(o,0,1,512);for(let o=0;o<3e3;o++)e.fillStyle=ke(i,.85+n()*.3,.15),e.fillRect(n()*512,n()*512,1,1)})}function La(i){return hi(`rug-${i}`,1024,1,(t,e)=>{if(i==="scandi"){t.fillStyle="rgb(232,226,214)",t.fillRect(0,0,1024,1024),t.strokeStyle="rgba(60,60,60,0.55)",t.lineWidth=5;for(let s=0;s<9;s++){t.beginPath();for(let o=0;o<=1024;o+=64)t.lineTo(o,80+s*110+o/64%2*40);t.stroke()}}else if(i==="neoclassic"){t.fillStyle="rgb(198,180,150)",t.fillRect(0,0,1024,1024),t.strokeStyle="rgb(120,92,62)",t.lineWidth=18,t.strokeRect(50,50,924,924),t.lineWidth=5,t.strokeRect(95,95,834,834),t.fillStyle="rgba(120,92,62,0.6)",t.beginPath(),t.ellipse(1024/2,1024/2,210,150,0,0,Math.PI*2),t.fill(),t.fillStyle="rgb(214,198,168)",t.beginPath(),t.ellipse(1024/2,1024/2,150,100,0,0,Math.PI*2),t.fill();for(let s=0;s<4;s++)t.fillStyle="rgba(120,92,62,0.5)",t.beginPath(),t.arc(s%2?190:834,s<2?190:834,55,0,Math.PI*2),t.fill()}else{t.fillStyle="rgb(92,90,88)",t.fillRect(0,0,1024,1024);for(let s=0;s<1800;s++)t.fillStyle=`rgba(${e()<.5?150:50},${e()<.5?120:48},${e()<.5?100:46},0.25)`,t.fillRect(e()*1024,e()*1024,6+e()*60,2+e()*6);t.strokeStyle="rgba(160,110,80,0.5)",t.lineWidth=14,t.strokeRect(40,40,944,944)}for(let s=0;s<2e4;s++)t.fillStyle=`rgba(${e()<.5?0:255},${e()<.5?0:255},${e()<.5?0:255},0.05)`,t.fillRect(e()*1024,e()*1024,2,2)})}function cx(i,t){return hi(`art-${i}-${t}`,512,1,(e,n)=>{const o={scandi:["#e9e4da","#c9b79c","#8a9a86","#d8a47f","#2f3a40"],neoclassic:["#efe6d6","#b49a72","#6d7f74","#2e3b4e","#d9c8a6"],loft:["#1e1f22","#b5653c","#d9d4c7","#6b6f73","#e0b25b"]}[i];e.fillStyle=o[0],e.fillRect(0,0,512,512);for(let r=0;r<6;r++)e.fillStyle=o[1+Math.floor(n()*(o.length-1))],e.globalAlpha=.75,e.beginPath(),(r+t)%2?e.arc(80+n()*350,80+n()*350,40+n()*140,0,Math.PI*2):e.rect(n()*380,n()*380,60+n()*220,30+n()*200),e.fill();e.globalAlpha=1})}const hx=[{id:"none",label:"Без отделки",hint:"Белая коробка — как сдаёт застройщик"},{id:"scandi",label:"Сканди",hint:"Светлый дуб, белые стены, лён и мягкие серые ткани"},{id:"neoclassic",label:"Неоклассика",hint:"Паркет ёлочкой, тёплый беж, мрамор и латунь"},{id:"loft",label:"Лофт",hint:"Тёмный дуб, бетон и кирпич, чёрный металл и кожа"}],At=i=>new ue(i),Ia=i=>new br(i),xu=new Map;function $d(i){const t=xu.get(i);if(t)return t;const e={ceramic:Ia({color:16250869,roughness:.12,clearcoat:.8,clearcoatRoughness:.08}),chrome:At({color:14606046,roughness:.12,metalness:1}),glass:Ia({color:15266034,roughness:.02,transmission:.9,thickness:.01,transparent:!0,opacity:.25}),mirror:At({color:14673642,roughness:.02,metalness:1}),screen:Ia({color:723982,roughness:.15,clearcoat:1,clearcoatRoughness:.05}),plantLeaf:At({color:4156218,roughness:.7,side:we,flatShading:!0}),bulb:At({color:16773590,emissive:16767392,emissiveIntensity:.4,roughness:.3})};let n;if(i==="scandi"){const s=Mi([214,182,140],.2,1.6,.08);n={id:i,...e,wallColor:15855594,floorLiving:At({map:s,roughness:.48}),floorWet:At({map:to([196,194,188],[168,166,160],.6,.6,!1,.03,60),roughness:.35}),wallWet:At({map:to([240,240,236],[214,212,206],.3,.6,!1,.02),roughness:.15}),accentWall:null,skirting:At({color:15987439,roughness:.5}),ceilingTrim:!1,upholstery:At({map:Ve([178,176,170]),roughness:.95}),upholsteryAlt:At({map:Ve([212,196,168]),roughness:.95}),cushion:At({map:Ve([196,160,92]),roughness:.9}),linen:At({map:Ve([244,242,236],.6),roughness:.92}),duvet:At({map:Ve([168,180,168]),roughness:.95}),woodFurniture:At({map:Mi([222,196,156],.6,2,.05),roughness:.55}),woodDark:At({color:9202250,roughness:.6}),metal:At({color:1907999,roughness:.45,metalness:.7}),kitchenFront:At({color:16053232,roughness:.45}),countertop:At({map:Mi([206,172,128],.6,2,.04),roughness:.4}),backsplash:At({map:to([242,242,238],[200,198,192],.075,.3,!0,.03),roughness:.1}),rug:At({map:La("scandi"),roughness:1}),curtain:At({map:Ve([236,232,222],.8),roughness:.95,side:we}),sheer:At({color:16777215,roughness:.9,transparent:!0,opacity:.45,side:we,depthWrite:!1}),lampShade:At({color:16184559,roughness:.8,emissive:16769720,emissiveIntensity:0,side:we}),pot:At({color:15328991,roughness:.6}),doorLeaf:At({color:15921646,roughness:.4}),doorFrame:At({color:15921646,roughness:.4}),frontDoor:At({color:5593180,roughness:.5,metalness:.4}),handle:At({color:1907999,roughness:.4,metalness:.8}),frame:At({color:14272422,roughness:.6}),lights:"spots",sofaLegs:"wood"}}else if(i==="neoclassic"){const s=rx([170,122,78]),o=ax([238,234,228],[150,140,128]),r=At({color:13148517,roughness:.28,metalness:1});n={id:i,...e,chrome:r,wallColor:15129803,floorLiving:At({map:s,roughness:.42}),floorWet:At({map:o,roughness:.18}),wallWet:At({map:o,roughness:.15}),accentWall:null,skirting:At({color:16118250,roughness:.4}),ceilingTrim:!0,upholstery:At({map:Ve([226,216,198],.7),roughness:.85}),upholsteryAlt:At({map:Ve([92,112,104],.7),roughness:.75}),cushion:At({map:Ve([46,66,92],.7),roughness:.7}),linen:At({map:Ve([246,242,234],.6),roughness:.9}),duvet:At({map:Ve([214,200,178],.7),roughness:.9}),woodFurniture:At({color:15854560,roughness:.35}),woodDark:At({map:Mi([110,74,48],.6,2,.06),roughness:.4}),metal:r,kitchenFront:At({color:9346188,roughness:.4}),countertop:At({map:o,roughness:.12}),backsplash:At({map:o,roughness:.12}),rug:At({map:La("neoclassic"),roughness:1}),curtain:At({map:Ve([196,176,148],.8),roughness:.85,side:we}),sheer:At({color:16775920,roughness:.9,transparent:!0,opacity:.5,side:we,depthWrite:!1}),lampShade:At({color:15985110,roughness:.8,emissive:16766880,emissiveIntensity:0,side:we}),pot:At({color:15525594,roughness:.3}),doorLeaf:At({color:16052198,roughness:.35}),doorFrame:At({color:16052198,roughness:.35}),frontDoor:At({color:5981750,roughness:.45}),handle:r,frame:r,lights:"chandelier",sofaLegs:"wood"}}else{const s=Mi([96,74,56],.24,2,.14);n={id:i,...e,chrome:At({color:1842206,roughness:.35,metalness:.8}),wallColor:12433842,floorLiving:At({map:s,roughness:.55}),floorWet:At({map:to([92,92,94],[70,70,72],.6,1.2,!1,.05,20),roughness:.4}),wallWet:At({map:_u([150,148,144]),roughness:.6}),accentWall:At({map:lx(),roughness:.9}),skirting:At({color:2763308,roughness:.5}),ceilingTrim:!1,upholstery:At({color:8013095,roughness:.45,map:Ve([200,140,100],.3)}),upholsteryAlt:At({map:Ve([70,72,74]),roughness:.95}),cushion:At({map:Ve([160,150,132]),roughness:.95}),linen:At({map:Ve([210,206,198],.7),roughness:.95}),duvet:At({map:Ve([62,66,70]),roughness:.95}),woodFurniture:At({map:Mi([120,90,62],.5,2,.12),roughness:.6}),woodDark:At({map:Mi([82,60,42],.5,2,.12),roughness:.6}),metal:At({color:1710620,roughness:.5,metalness:.75}),kitchenFront:At({color:3816769,roughness:.55}),countertop:At({map:Mi([124,92,64],.6,2,.08),roughness:.45}),backsplash:At({map:to([28,30,32],[80,80,80],.075,.15,!0,.06),roughness:.2}),rug:At({map:La("loft"),roughness:1}),curtain:At({map:Ve([86,88,90]),roughness:.95,side:we}),sheer:null,lampShade:At({color:1710620,roughness:.4,metalness:.6,emissive:16757611,emissiveIntensity:0,side:we}),pot:At({map:_u([130,128,124]),roughness:.8}),doorLeaf:At({color:2763565,roughness:.5}),doorFrame:At({color:2763565,roughness:.5}),frontDoor:At({color:2039842,roughness:.45,metalness:.5}),handle:At({color:10526880,roughness:.3,metalness:1}),frame:At({color:1710620,roughness:.5}),lights:"edison",sofaLegs:"block",bulb:At({color:16767392,emissive:16752704,emissiveIntensity:.6,roughness:.2})}}return xu.set(i,n),n}const eo=new L;function _n(i,t,e,n,s,o){const r=2*Math.PI*s/4,a=Math.max(o-2*s,0),l=Math.PI/4;eo.copy(t),eo[n]=0,eo.normalize();const c=.5*r/(r+a),h=1-eo.angleTo(i)/l;return Math.sign(eo[e])===1?h*c:a/(r+a)+c+c*(1-h)}class ux extends an{constructor(t=1,e=1,n=1,s=2,o=.1){if(s=s*2+1,o=Math.min(t/2,e/2,n/2,o),super(1,1,1,s,s,s),s===1)return;const r=this.toNonIndexed();this.index=null,this.attributes.position=r.attributes.position,this.attributes.normal=r.attributes.normal,this.attributes.uv=r.attributes.uv;const a=new L,l=new L,c=new L(t,e,n).divideScalar(2).subScalar(o),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,p=new L,v=.5/s;for(let g=0,m=0;g<h.length;g+=3,m+=2)switch(a.fromArray(h,g),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[g+0]=c.x*Math.sign(a.x)+l.x*o,h[g+1]=c.y*Math.sign(a.y)+l.y*o,h[g+2]=c.z*Math.sign(a.z)+l.z*o,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/f)){case 0:p.set(1,0,0),d[m+0]=_n(p,l,"z","y",o,n),d[m+1]=1-_n(p,l,"y","z",o,e);break;case 1:p.set(-1,0,0),d[m+0]=1-_n(p,l,"z","y",o,n),d[m+1]=1-_n(p,l,"y","z",o,e);break;case 2:p.set(0,1,0),d[m+0]=1-_n(p,l,"x","z",o,t),d[m+1]=_n(p,l,"z","x",o,n);break;case 3:p.set(0,-1,0),d[m+0]=1-_n(p,l,"x","z",o,t),d[m+1]=1-_n(p,l,"z","x",o,n);break;case 4:p.set(0,0,1),d[m+0]=1-_n(p,l,"x","y",o,t),d[m+1]=1-_n(p,l,"y","x",o,e);break;case 5:p.set(0,0,-1),d[m+0]=_n(p,l,"x","y",o,t),d[m+1]=1-_n(p,l,"y","x",o,e);break}}}function Ac(i,t,e,n,s){const o=new Dt(i,t);return o.position.set(e,n,s),o.castShadow=!0,o.receiveShadow=!0,o}function xt(i,t,e,n,s,o,r,a,l=0){const c=l>0?new ux(e,n,s,3,Math.min(l,e/2,n/2,s/2)):new an(e,n,s),h=Ac(c,t,o,r+n/2,a);return i.add(h),h}function ve(i,t,e,n,s,o,r,a,l=16){const c=Ac(new ns(e,n,s,l),t,o,r+s/2,a);return i.add(c),c}function ui(i,t,e,n,s,o=.06){for(const r of[-1,1])for(const a of[-1,1]){const l=r*(e/2-o),c=a*(n/2-o);t.sofaLegs==="metal"||t.id==="loft"?ve(i,t.metal,.012,.012,s,l,0,c,8):ve(i,t.id==="neoclassic"?t.metal:t.woodFurniture,.022,.014,s,l,0,c,10)}}function yu(i,t,e=.95){const n=new Zt;n.name="sofa";const s=i.sofaLegs==="block"?0:.12,o=i.id==="loft"?.22:.16;s&&ui(n,i,t-.1,e-.1,s),xt(n,i.upholstery,t,.24,e,0,s,0,.04);const r=t>2?3:2,a=(t-o*2)/r;for(let l=0;l<r;l++){const c=-t/2+o+a*(l+.5);xt(n,i.upholstery,a-.01,.16,e-.26,c,s+.24,.1,.06),xt(n,i.upholstery,a-.01,.44,.24,c,s+.26,-e/2+.16,.08)}for(const l of[-1,1])xt(n,i.upholstery,o,.36,e,l*(t/2-o/2),s+.24,0,.06);for(const l of[-1,1])xt(n,i.cushion,.44,.42,.13,l*(t/2-o-.3),s+.42,-e/2+.36,.06).rotation.set(-.25,l*.2,l*.08);return n}function dx(i){const t=new Zt;t.name="armchair";const e=.82,n=.84;ui(t,i,e-.1,n-.1,.16);const s=i.id==="neoclassic"?i.upholsteryAlt:i.id==="loft"?i.upholstery:i.upholsteryAlt;xt(t,s,e,.2,n,0,.16,0,.04),xt(t,s,e-.3,.14,n-.24,0,.36,.08,.05),xt(t,s,e-.04,.5,.18,0,.36,-n/2+.11,.07);for(const o of[-1,1])xt(t,s,.14,.28,n,o*(e/2-.07),.36,0,.05);return t}function fx(i,t=1.1,e=.6){const n=new Zt;if(n.name="coffeeTable",i.id==="neoclassic"){xt(n,i.countertop,t,.03,e,0,.4,0,.01);for(const s of[-1,1])xt(n,i.metal,.03,.4,e-.1,s*(t/2-.08),0,0)}else if(i.id==="loft"){xt(n,i.woodDark,t,.06,e,0,.36,0,.005);for(const s of[-1,1])xt(n,i.metal,.04,.36,.04,s*(t/2-.08),0,-e/2+.06),xt(n,i.metal,.04,.36,.04,s*(t/2-.08),0,e/2-.06),xt(n,i.metal,.04,.04,e-.08,s*(t/2-.08),.02,0)}else xt(n,i.woodFurniture,t,.035,e,0,.38,0,.015),ui(n,i,t,e,.38,.08);return xt(n,i.upholsteryAlt,.26,.04,.2,-t*.22,.42,0),xt(n,i.cushion,.24,.03,.18,-t*.22,.46,.01),ve(n,i.pot,.05,.04,.16,t*.25,.41,.05),n}function px(i,t){const e=new Zt;e.name="tvUnit";const n=.4,s=i.id==="loft"?i.woodDark:(i.id==="neoclassic",i.woodFurniture);xt(e,s,t,.42,n,0,.12,0,.01),i.id!=="loft"?ui(e,i,t-.1,n-.1,.12):xt(e,i.metal,t-.1,.12,n-.1,0,0,0);for(let r=1;r<3;r++)xt(e,i.metal,.005,.36,.005,-t/2+t*r/3,.15,n/2);const o=Math.min(1.45,t-.2);return xt(e,i.screen,o,o*.565,.035,0,.9,-n/2+.03,.005),e}function Mu(i,t,e){const n=new an(t,.012,e);n.attributes.uv;const s=Ac(n,i.rug,0,.025,0);return s.castShadow=!1,s}function mx(i){const t=new Zt;t.name="floorLamp",ve(t,i.metal,.14,.15,.025,0,0,0,24),ve(t,i.metal,.012,.012,1.45,0,.02,0,8);const e=ve(t,i.lampShade,.17,.23,.3,0,1.4,0,28);e.castShadow=!1;const n=new Dt(new Yn(.04,12,8),i.bulb);return n.position.set(0,1.5,0),t.add(n),t}function Ua(i,t=1.2){const e=new Zt;e.name="plant",ve(e,i.pot,.17,.13,.36,0,0,0,20);const n=Cx(Math.round(t*1e3));for(let s=0;s<26;s++){const o=new Dt(new _c(.07,.45,4,1,!0),i.plantLeaf),r=n()*Math.PI*2,a=.25+n()*.75;o.position.set(Math.cos(r)*.12*a,.36+a*(t-.45),Math.sin(r)*.12*a),o.rotation.set(Math.cos(r)*(.5+n()*.6),0,-Math.sin(r)*(.5+n()*.6)),o.scale.set(1,1,.25),o.castShadow=!0,e.add(o)}return e}function Su(i,t,e,n){const s=new Zt;s.name="artwork",xt(s,i.frame,t,e,.035,0,0,.0175);const o=new Dt(new Pi(t-.06,e-.06),new ue({map:cx(i.id,n),roughness:.85}));return o.position.set(0,e/2,.036),s.add(o),s}function gx(i,t,e=2.05){const n=new Zt;n.name="bed";const s=i.id==="loft"?i.woodDark:i.id==="neoclassic"?i.upholstery:i.upholsteryAlt;xt(n,s,t+.08,.28,e,0,.06,0,.03),ui(n,i,t,e-.1,.06),xt(n,i.linen,t-.04,.22,e-.12,0,.32,.02,.06),xt(n,i.duvet,t+.04,.07,e*.66,0,.5,e/2-e*.33-.02,.035),xt(n,i.duvet,t+.06,.2,.03,0,.32,e/2-.035,.012);for(const a of[-1,1])xt(n,i.duvet,.03,.2,e*.66,a*(t/2+.035),.32,e/2-e*.33-.02,.012);xt(n,i.linen,t+.02,.05,.3,0,.52,e/2-e*.66-.02,.025);const o=t>=1.3?2:1;for(let a=0;a<o;a++){const l=o===1?0:(a-.5)*(t/2);xt(n,i.linen,t/o-.12,.15,.42,l,.52,-e/2+.3,.07);const c=xt(n,i.cushion,t/o-.3,.3,.12,l,.58,-e/2+.52,.05);c.rotation.x=-.3}const r=i.id==="neoclassic"?1.25:1.05;if(xt(n,i.id==="loft"?i.woodDark:s,t+.2,r,.09,0,0,-e/2-.045,i.id==="loft"?.01:.04),i.id==="neoclassic")for(let a=-2;a<=2;a++)xt(n,i.upholstery,.012,r-.35,.02,a*(t+.2)/5.5,.45,-e/2+.005);return n}function vx(i,t=!0){const e=new Zt;e.name="nightstand";const n=i.id==="loft"?i.woodDark:i.woodFurniture;if(xt(e,n,.46,.42,.4,0,.12,0,.01),i.id==="loft"?xt(e,i.metal,.42,.12,.36,0,0,0):ui(e,i,.46,.4,.12),xt(e,i.handle,.12,.012,.012,0,.42,.205),t){ve(e,i.id==="neoclassic"?i.metal:i.pot,.06,.07,.26,0,.54,-.04,20);const s=ve(e,i.lampShade,.1,.14,.18,0,.78,-.04,24);s.castShadow=!1;const o=new Dt(new Yn(.03,10,8),i.bulb);o.position.set(0,.84,-.04),e.add(o)}return e}function Na(i,t,e=2.35,n=.6){const s=new Zt;s.name="wardrobe";const o=i.id==="loft"?i.woodDark:i.id==="neoclassic"?i.woodFurniture:i.kitchenFront;xt(s,o,t,e-.08,n,0,.08,0),xt(s,i.skirting,t-.04,.08,n-.06,0,0,-.03);const r=Math.max(2,Math.round(t/.5));for(let a=1;a<r;a++)xt(s,i.metal,.004,e-.12,.004,-t/2+t*a/r,.1,n/2);for(let a=0;a<r;a++){const l=-t/2+t*(a+.5)/r+(a%2?-1:1)*(t/r/2-.05);xt(s,i.handle,.014,.32,.02,l,1,n/2+.01)}if(i.id==="neoclassic")for(let a=0;a<r;a++){const l=-t/2+t*(a+.5)/r;xt(s,i.skirting,t/r-.14,.012,.01,l,.4,n/2+.002),xt(s,i.skirting,t/r-.14,.012,.01,l,e-.4,n/2+.002)}return s}function _x(i,t=1.2){const e=new Zt;e.name="desk",xt(e,i.id==="loft"?i.woodDark:i.woodFurniture,t,.03,.6,0,.72,0,.008),ui(e,i,t,.6,.72,.04),xt(e,i.metal,.33,.012,.23,-.1,.75,.05);const n=xt(e,i.screen,.33,.22,.008,-.1,.76,-.06);n.rotation.x=-.25,ve(e,i.metal,.06,.07,.02,t/2-.15,.75,-.15,16),ve(e,i.metal,.008,.008,.38,t/2-.15,.77,-.15,6);const s=ve(e,i.lampShade,.05,.08,.1,t/2-.15,1.12,-.1,16);return s.castShadow=!1,e.add(Yd(i).translateZ(.42).rotateY(Math.PI)),e}function Yd(i){const t=new Zt;t.name="chair";const e=i.id==="neoclassic"||i.id==="loft"?i.upholstery:i.upholsteryAlt;return ui(t,i,.44,.44,.45,.03),xt(t,e,.46,.06,.46,0,.44,0,.025),xt(t,i.id==="scandi"?i.woodFurniture:e,.44,.42,.05,0,.5,-.21,.02),t}function xx(i,t,e){const n=new Zt;n.name="kitchenRun";const s=.62;let o=-t/2,r=t/2;if(e.fridge!=="none"&&t>=1.8){const d=e.fridge==="right"?t/2-.32:-t/2+.32,f=i.id==="loft"?i.chrome:i.kitchenFront;xt(n,f,.62,2.05,.66,d,0,.02,.01),xt(n,i.metal,.6,.004,.004,d,1.2,.36),xt(n,i.handle,.015,.4,.02,d+(e.fridge==="right"?-.26:.26),1.3,.37),xt(n,i.handle,.015,.3,.02,d+(e.fridge==="right"?-.26:.26),.85,.37),e.fridge==="right"?r-=.64:o+=.64}const a=r-o,l=(o+r)/2;xt(n,i.skirting,a,.1,s-.08,l,0,-.04),xt(n,i.kitchenFront,a,.76,s-.02,l,.1,0);const c=Math.max(2,Math.round(a/.6));for(let d=1;d<c;d++)xt(n,i.metal,.004,.74,.004,o+a*d/c,.11,s/2-.01);xt(n,i.metal,a,.004,.004,l,.62,s/2-.01);for(let d=0;d<c;d++)xt(n,i.handle,.16,.012,.02,o+a*(d+.5)/c,.78,s/2);xt(n,i.countertop,a+.02,.04,s+.02,l,.86,.01,.004);const h=o+a*.3;xt(n,i.chrome,.5,.005,.4,h,.9,.03),xt(n,i.screen,.44,.004,.34,h,.902,.03),ve(n,i.chrome,.018,.022,.3,h,.9,-.22,12),xt(n,i.chrome,.02,.02,.2,h,1.18,-.13);const u=o+a*.72;xt(n,i.screen,.58,.006,.5,u,.9,.02,.003),xt(n,i.screen,.58,.5,.01,u,.2,s/2+.002);{xt(n,i.backsplash,a,.58,.012,l,.9,-s/2+.006),xt(n,i.kitchenFront,a,.72,.34,l,1.48,-s/2+.17);for(let d=1;d<c;d++)xt(n,i.metal,.004,.7,.004,o+a*d/c,1.49,-s/2+.345);xt(n,i.bulb,a-.1,.01,.02,l,1.47,-s/2+.3),xt(n,i.id==="loft"?i.metal:i.chrome,.6,.06,.32,u,1.42,-s/2+.16)}return n}function bu(i,t){const e=new Zt;e.name="diningSet";const n=t===6?1.8:t===4?1.3:.8,s=t===2?.7:.85,o=i.id==="neoclassic"?i.countertop:i.id==="loft"?i.woodDark:i.woodFurniture;if(xt(e,o,n,.04,s,0,.73,0,i.id==="scandi"?.02:.006),i.id==="loft")for(const a of[-1,1])xt(e,i.metal,.05,.73,.05,a*(n/2-.1),0,-s/2+.08),xt(e,i.metal,.05,.73,.05,a*(n/2-.1),0,s/2-.08),xt(e,i.metal,.05,.05,s-.1,a*(n/2-.1),.05,0);else ui(e,i,n,s,.73,.07);const r=t/2;for(const a of[-1,1])for(let l=0;l<r;l++){const c=r===1?0:-n/2+n*(l+.5)/r,h=Yd(i);h.position.set(c,0,a*(s/2+.12)),h.rotation.y=a>0?Math.PI:0,e.add(h)}return ve(e,i.pot,.12,.08,.08,0,.77,0,24),e}function yx(i,t=1.7,e=.75){const n=new Zt;n.name="bathtub";const s=.56,o=.07;return xt(n,i.ceramic,t,.06,e,0,0,0),xt(n,i.ceramic,t,s,o,0,0,-e/2+o/2,.02),xt(n,i.ceramic,t,s,o,0,0,e/2-o/2,.02),xt(n,i.ceramic,o,s,e,-t/2+o/2,0,0,.02),xt(n,i.ceramic,o,s,e,t/2-o/2,0,0,.02),xt(n,i.chrome,.2,.05,.08,t/2-.4,.75,-e/2-.02,.01),n}function wu(i,t=.9,e=.9){const n=new Zt;return n.name="shower",xt(n,i.ceramic,t,.05,e,0,0,0,.01),xt(n,i.glass,.01,1.95,e,t/2,.05,0),xt(n,i.chrome,.012,.012,.012,t/2,2,0),ve(n,i.chrome,.012,.012,.35,0,1.75,-e/2+.05,8),ve(n,i.chrome,.12,.12,.015,0,2.08,-e/2+.2,24),xt(n,i.chrome,.012,.012,.16,0,2.09,-e/2+.12),n}function Mx(i){const t=new Zt;return t.name="toilet",xt(t,i.ceramic,.36,.34,.54,0,.32,.05,.12),xt(t,i.ceramic,.37,.025,.5,0,.66,.06,.1),xt(t,i.ceramic,.22,.15,.01,0,1,-.2),t}function Sx(i,t=.8){const e=new Zt;e.name="vanity";const n=i.id==="loft"?i.woodDark:(i.id==="neoclassic",i.woodFurniture);return xt(e,n,t,.45,.46,0,.38,0,.01),xt(e,i.ceramic,t,.06,.48,0,.83,.01,.02),xt(e,i.screen,t*.55,.004,.3,0,.885,.03),ve(e,i.chrome,.016,.02,.22,0,.89,-.17,12),xt(e,i.chrome,.02,.02,.14,0,1.09,-.12),xt(e,i.mirror,t,.9,.02,0,1.05,-.22),xt(e,i.bulb,t-.06,.02,.02,0,1.97,-.2),e}function bx(i){const t=new Zt;t.name="washer",xt(t,i.ceramic,.6,.85,.55,0,0,0,.02);const e=ve(t,i.screen,.17,.17,.02,0,0,0,32);return e.rotation.x=Math.PI/2,e.position.set(0,.42,.28),t}function wx(i,t=1){const e=new Zt;e.name="hallUnit";const n=i.id==="loft"?i.woodDark:i.woodFurniture;xt(e,n,t,.45,.35,0,.1,0,.01),xt(e,i.skirting,t-.04,.1,.3,0,0,-.02),xt(e,i.mirror,Math.min(.6,t-.2),1,.015,0,.95,-.165),xt(e,i.frame,Math.min(.64,t-.16),1.04,.012,0,.93,-.172);for(let s=0;s<4;s++)ve(e,i.handle,.012,.012,.06,-t/2+.15+s*.2,1.72,-.15,8).rotateX(Math.PI/2);return e}function Ex(i,t,e){const n=new Zt;if(n.name="curtains",!i.curtain)return n;const s=(r,a,l,c)=>{const h=new Pi(r,e,Math.max(8,l*6),1),u=h.attributes.position;for(let f=0;f<u.count;f++)u.setZ(f,Math.sin(u.getX(f)/r*l*Math.PI*2)*c);h.computeVertexNormals();const d=new Dt(h,a);return d.castShadow=!0,d.receiveShadow=!0,d};if(i.sheer){const r=s(t,i.sheer,Math.round(t*4),.02);r.position.set(0,e/2,.06),r.castShadow=!1,n.add(r)}const o=Math.min(.45,t*.22);for(const r of[-1,1]){const a=s(o,i.curtain,3,.035);a.position.set(r*(t/2-o/2+.08),e/2,.14),n.add(a)}return ve(n,i.metal,.012,.012,t+.3,0,e+.02,.12,8).rotateZ(Math.PI/2),n}function Tx(i,t,e){const n=new Zt;if(n.name="ceilingLight",i.lights==="chandelier"&&e){ve(n,i.metal,.08,.08,.04,0,t-.04,0,20),ve(n,i.metal,.006,.006,.45,0,t-.48,0,6);const s=new Dt(new bc(.32,.012,8,40),i.metal);s.rotation.x=Math.PI/2,s.position.set(0,t-.5,0),n.add(s);for(let o=0;o<8;o++){const r=o/8*Math.PI*2,a=Math.cos(r)*.32,l=Math.sin(r)*.32;ve(n,i.ceramic,.018,.018,.08,a,t-.5,l,10);const c=new Dt(new Yn(.025,10,8),i.bulb);c.scale.y=1.6,c.position.set(a,t-.38,l),n.add(c)}}else if(i.lights==="edison"){const s=e?3:1;for(let o=0;o<s;o++){const r=(o-(s-1)/2)*.35,a=.7+o%2*.15;ve(n,i.metal,.003,.003,a,r,t-a,0,4);const l=ve(n,i.lampShade,.04,.14,.16,r,t-a-.16,0,20);l.castShadow=!1;const c=new Dt(new Yn(.05,12,10),i.bulb);c.scale.y=1.3,c.position.set(r,t-a-.2,0),n.add(c)}}else{const s=e?1.2:.8;for(const o of[-s/2,s/2])for(const r of[-s/2,s/2])ve(n,i.metal,.045,.045,.012,o,t-.012,r,16),ve(n,i.bulb,.03,.03,.004,o,t-.016,r,16)}return n}function Eu(i,t,e=.9){const n=new Zt;n.name="pendant",ve(n,i.metal,.003,.003,e,0,t-e,0,4);const s=i.lights==="chandelier"?ve(n,i.metal,.06,.22,.2,0,t-e-.2,0,28):ve(n,i.lampShade,.05,.2,.18,0,t-e-.18,0,28);s.castShadow=!1;const o=new Dt(new Yn(.045,12,10),i.bulb);return o.position.set(0,t-e-.17,0),n.add(o),n}function Ax(i,t,e,n,s=!1){const o=new Zt;o.name="interiorDoor";const r=2.08,a=s?i.frontDoor:i.doorFrame;for(const h of[-1,1]){xt(o,a,.05,r,e+.02,h*(t/2-.025),0,0);for(const u of[-1,1])xt(o,a,.07,r+.07,.012,h*(t/2+.02),0,u*(e/2+.006))}xt(o,a,t,.05,e+.02,0,r,0);for(const h of[-1,1])xt(o,a,t+.2,.07,.012,0,r+0,h*(e/2+.006));const l=t-.1,c=new Zt;if(c.position.set(-t/2+.05,0,0),xt(c,s?i.frontDoor:i.doorLeaf,l,r-.02,.04,l/2,.01,0,.004),xt(c,i.handle,.12,.02,.05,l-.1,1,0,.005),i.id==="neoclassic"&&!s)for(const h of[.25,1.2])xt(c,i.doorFrame,l-.18,.7,.05,l/2,h,0,.01);return c.rotation.y=n,o.add(c),o}function Cx(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const Rx=1,Px=2,Tu=3,Dx=4,ki={N:0,S:Math.PI,E:-Math.PI/2,W:Math.PI/2},Lx={N:"S",S:"N",E:"W",W:"E"},Co={N:[0,-1],S:[0,1],E:[-1,0],W:[1,0]};function Bi(i,t,e=0){return i[0]<t[2]-e&&i[2]>t[0]+e&&i[1]<t[3]-e&&i[3]>t[1]+e}function Ix(i,t,e){const n=$d(t),s=new Zt;s.name="interior-furnishing";const o=[],r=[],a=(F,w,T,O,X=0)=>(F.position.set(w,F.position.y+X,-T),F.rotation.y+=O,s.add(F),F),l=new Map,c=(F,w)=>{const T=Nx(F[0]-.05,F[1]-.05,F[2]+.05,F[3]+.05,.004,.018);l.has(w)||l.set(w,[]),l.get(w).push(T)},h=F=>F.kind==="bath"||F.kind==="loggia"||n.id==="neoclassic"&&(F.kind==="kitchen"||F.kind==="hall")?n.floorWet:n.floorLiving;for(const F of i.rooms)for(const w of F.cells)c(w,h(F));for(const F of i.doors){const w=F.rooms.find(T=>T>=0);w!==void 0&&c(F.rect,h(i.rooms[w]))}for(const[F,w]of l){const T=Fx(w);r.push(T);const O=new Dt(T,F);O.receiveShadow=!0,s.add(O)}const u=n.id==="neoclassic"?.12:.08,d=new mr,f=new mr,p=new mr;for(const F of i.rooms)for(const[w,T,O,X,V,Z]of F.edges)if(!(Z==="door"||Math.hypot(O-w,X-T)<.15)){if(F.kind==="bath"&&Z==="wall"){d.wall(w,T,O,X,V,0,e,.008);continue}Z==="wall"&&p.band(w,T,O,X,V,0,u,.015),n.ceilingTrim&&F.kind!=="loggia"&&f.band(w,T,O,X,V,e-.09,e,.07)}for(const[F,w]of[[d,n.wallWet],[p,n.skirting],[f,n.skirting]]){if(!F.count)continue;const T=F.geometry();r.push(T);const O=new Dt(T,w);O.receiveShadow=!0,s.add(O)}for(const F of i.doors){const[w,T,O,X]=F.rect,V=F.alongX?O-w:X-T,Z=F.alongX?X-T:O-w;if(V<.55||V>1.3)continue;const[pt,z]=F.rooms,G=tt=>tt>=0?i.rooms[tt].area:-1,nt=F.entrance?0:G(z)>=G(pt)?1:-1,$=Ax(n,V,Z,nt===0?0:F.alongX?nt*1.45:-nt*1.45,F.entrance);a($,(w+O)/2,(T+X)/2,F.alongX?0:Math.PI/2)}for(const F of i.rooms)v(F);function v(F){const w=F.zones.length?F.zones:[F.rect],T=[],O=F.kind==="bath"||F.kind==="closet"?.55:.9;for(const z of F.doors){const G=i.doors[z],[nt,$,tt,ct]=G.rect;T.push(G.alongX?[nt-.05,$-O,tt+.05,ct+O]:[nt-O,$-.05,tt+O,ct+.05])}const X={room:F,used:T,layout:i},V=w[0],Z=w[1],pt=F.kind;switch(pt){case"living":g(X,V,!0);break;case"kitchen_living":Z?(m(X,Z,!0),g(X,V,!0)):(m(X,V,!1),g(X,V,!1),M(X,V));break;case"studio":Z?(m(X,Z,!0),_(X,V,!1),g(X,V,!1)):(m(X,V,!1),_(X,V,!1),g(X,V,!1,!0));break;case"living_bed":_(X,V,!0),g(X,Z??V,!1,!0);break;case"kitchen":m(X,V,!0);break;case"bedroom":_(X,V,!0);break;case"bath":U(X,V);break;case"hall":R(X,V);break;case"closet":A(X,V,z=>Na(n,z,2.3,.55),{w:[.8,2.4],d:.55,clear:.5,tall:!0});break;case"loggia":H(X,V,()=>Ua(n,.9),.4);break}if(pt!=="loggia"&&pt!=="closet"){const z=V,G=["living","kitchen_living","studio","living_bed","bedroom"].includes(pt);a(Tx(n,e,G),(z[0]+z[2])/2,(z[1]+z[3])/2,0)}if(["living","kitchen_living","studio","living_bed","bedroom","kitchen"].includes(pt)&&n.curtain)for(const[z,G,nt,$,tt]of F.windows){const ct=Math.hypot(nt-z,$-G);ct<.8||a(Ex(n,ct,e-.08),(z+nt)/2,(G+$)/2,ki[tt])}}function g(F,w,T,O=!1){const X=Math.max(w[2]-w[0],w[3]-w[1]),V=O?1.7:Math.min(2.6,Math.max(1.8,X*.55)),Z=A(F,w,bt=>yu(n,bt,.95),{w:[O?1.5:1.8,V],d:.95,clear:.3,noWindow:!0,prefer:"long"})??A(F,w,bt=>yu(n,bt,.95),{w:[1.5,V],d:.95,clear:.3,prefer:"long"});if(!Z?.side)return;const pt=Lx[Z.side],z=Math.min(1.8,V);A(F,w,bt=>px(n,bt),{w:[1.2,z],d:.42,clear:.3,sides:[pt],align:Z});const[G,nt]=Co[Z.side],$=Z.cx+G*(.95/2+.45+.3),tt=Z.cy+nt*(.95/2+.45+.3),ct=Z.side==="N"||Z.side==="S",gt=1.1,Ut=.6,et=ct?[$-gt/2,tt-Ut/2,$+gt/2,tt+Ut/2]:[$-Ut/2,tt-gt/2,$+Ut/2,tt+gt/2],ht=Math.min(V+.5,2.6),k=1.8,wt=Z.cx+G*(.95/2+.75),ft=Z.cy+nt*(.95/2+.75);let yt=ct?[wt-ht/2,ft-k/2,wt+ht/2,ft+k/2]:[wt-k/2,ft-ht/2,wt+k/2,ft+ht/2];if(yt=[Math.max(yt[0],w[0]+.1),Math.max(yt[1],w[1]+.1),Math.min(yt[2],w[2]-.1),Math.min(yt[3],w[3]-.1)],yt[2]-yt[0]>1&&yt[3]-yt[1]>1){const bt=Mu(n,yt[2]-yt[0],yt[3]-yt[1]);a(bt,(yt[0]+yt[2])/2,(yt[1]+yt[3])/2,0)}pr(et,w)&&!F.used.some(bt=>Bi(bt,et,.02))&&(a(fx(n,gt,Ut),$,tt,ki[Z.side]),o.push(et)),F.used.push(Au(Z.fp,Z.side,1.6,0));const St=ct?[1,0]:[0,1];for(const bt of[1,-1]){const I=Z.cx+St[0]*bt*(V/2+.25),b=Z.cy+St[1]*bt*(V/2+.25),J=[I-.18,b-.18,I+.18,b+.18];if(pr(J,w)&&!F.used.some(ut=>Bi(ut,J))){a(mx(n),I,b,0),F.used.push(J),o.push(J);break}}const Ht=Su(n,Math.min(1.2,V*.5),.8,1);if(a(Ht,Z.cx-G*.47,Z.cy-nt*.47,ki[Z.side],1.3),n.accentWall&&Z.side&&E(F.room,Z.side,Z,V+1),T){const bt=$+St[0]*(gt/2+.75)-G*.05,I=tt+St[1]*(gt/2+.75)-nt*.05,b=[bt-.45,I-.45,bt+.45,I+.45];if(pr(b,w)&&!F.used.some(J=>Bi(J,b))){const J=ct?St[0]>0?"E":"W":St[1]>0?"N":"S";a(dx(n),bt,I,ki[J]),F.used.push(b),o.push(b)}H(F,w,()=>Ua(n,1.3),.45,!0)}}function m(F,w,T){const O=w[2]-w[0],X=w[3]-w[1],V=Math.max(O,X),Z=Math.min(3.4,V-.1),pt=A(F,w,(z,G)=>xx(n,z,{fridge:x(F,w,G)}),{w:[1.6,Z],d:.62,clear:.9,noWindow:!0,prefer:"long",kitchen:!0});if(T){const G=Math.min(O,X)>2.6&&V>3?4:2,nt=G===4?1.3:.8,$=G===4?.85:.7,tt=nt+.1,ct=$+.9,gt=N(F,w,tt,ct,pt);if(gt){const Ut=Math.abs(gt[2]-gt[0]-tt)<1e-6,et=(gt[0]+gt[2])/2,ht=(gt[1]+gt[3])/2;a(bu(n,G),et,ht,Ut?0:Math.PI/2),o.push(Ut?[et-nt/2,ht-$/2,et+nt/2,ht+$/2]:[et-$/2,ht-nt/2,et+$/2,ht+nt/2]),a(Eu(n,e,.9),et,ht,0)}}}function M(F,w){for(const[X,V,Z]of[[1.3+.1,.85+.9,4],[.9,1.6,2]]){const pt=N(F,w,X,V,null);if(!pt)continue;const z=Math.abs(pt[2]-pt[0]-X)<1e-6,G=(pt[0]+pt[2])/2,nt=(pt[1]+pt[3])/2,$=Z===4?1.3:.8,tt=Z===4?.85:.7;a(bu(n,Z),G,nt,z?0:Math.PI/2),o.push(z?[G-$/2,nt-tt/2,G+$/2,nt+tt/2]:[G-tt/2,nt-$/2,G+tt/2,nt+$/2]),a(Eu(n,e,.9),G,nt,0);return}}function x(F,w,T){const O=F.room.facade;if(T==="N"||T==="S"){const z=O.includes("E"),G=O.includes("W"),nt=T==="N"?"right":"left";return z&&!G?nt==="right"?"left":"right":nt==="right"?"right":"left"}const V=O.includes("N"),Z=O.includes("S"),pt=T==="E";return V&&!Z?pt?"left":"right":pt?"right":"left"}function _(F,w,T){const O=Math.min(w[2]-w[0],w[3]-w[1]),X=O>=3?1.8:O>=2.6?1.6:O>=2.2?1.4:1.2,V=2.05;let Z=null,pt=X;for(const[ht,k]of[[X,.5],[X,.2],[Math.max(1.4,X-.2),.2],[1.2,0]])if(Z=A(F,w,wt=>gx(n,wt,V),{w:[ht,ht],d:V,clear:.5,prefer:"short",sideClear:k,headboard:!0}),Z){pt=ht;break}if(!Z?.side)return;const z=Z.side==="N"||Z.side==="S",G=z?[1,0]:[0,1],[nt,$]=Co[Z.side];for(const ht of[-1,1]){const k=Z.cx+G[0]*ht*(pt/2+.33)+nt*(-V/2+.22),wt=Z.cy+G[1]*ht*(pt/2+.33)+$*(-V/2+.22),ft=z?[k-.23,wt-.2,k+.23,wt+.2]:[k-.2,wt-.23,k+.2,wt+.23];pr(ft,w)&&!F.used.some(yt=>Bi(yt,ft))&&(a(vx(n),k,wt,ki[Z.side]),F.used.push(ft),o.push(ft))}const tt=Z.cx+nt*.35,ct=Z.cy+$*.35,gt=pt+1,Ut=1.7;let et=z?[tt-gt/2,ct-Ut/2,tt+gt/2,ct+Ut/2]:[tt-Ut/2,ct-gt/2,tt+Ut/2,ct+gt/2];et=[Math.max(et[0],w[0]+.05),Math.max(et[1],w[1]+.05),Math.min(et[2],w[2]-.05),Math.min(et[3],w[3]-.05)],a(Mu(n,et[2]-et[0],et[3]-et[1]),(et[0]+et[2])/2,(et[1]+et[3])/2,0),a(Su(n,Math.min(1.4,pt),.6,2),Z.cx-nt*(V/2+.05),Z.cy-$*(V/2+.05),ki[Z.side],n.id==="neoclassic"?1.45:1.3),T&&(A(F,w,k=>Na(n,k),{w:[1,2.2],d:.6,clear:.6,noWindow:!0,tall:!0}),(w[2]-w[0])*(w[3]-w[1])>=11&&A(F,w,()=>_x(n,1.1),{w:[1.1,1.1],d:.6,clear:.7,windowOnly:!0}),H(F,w,()=>Ua(n,1),.4,!0))}function U(F,w){const T=w[2]-w[0],O=w[3]-w[1],X=Math.max(T,O),V=Math.min(T,O);if(X>=1.6&&V>=1.3){const Z=Math.min(1.8,V>=1.65&&X>=2.2?X:V);A(F,w,z=>yx(n,z,.72),{w:[1.4,Math.min(1.8,Z-.02)],d:.72,clear:.05,prefer:"short",fitWall:!0})||W(F,w,()=>wu(n,.9,.9),.9,.9)}else V>=.85&&W(F,w,()=>wu(n,.85,.85),.85,.85);A(F,w,()=>Mx(n),{w:[.42,.42],d:.6,clear:.45}),A(F,w,Z=>Sx(n,Z),{w:[.5,.9],d:.48,clear:.5}),A(F,w,()=>bx(n),{w:[.6,.6],d:.56,clear:.6})}function R(F,w){Math.min(w[2]-w[0],w[3]-w[1])>=1.7&&A(F,w,O=>Na(n,O,2.4,.6),{w:[1,2],d:.6,clear:.9,tall:!0,noWindow:!0}),A(F,w,O=>wx(n,O),{w:[.8,1.2],d:.35,clear:.8})}function E(F,w,T,O){const X=new mr;for(const[pt,z,G,nt,$,tt]of F.edges){if($!==w||tt!=="wall")continue;const ct=$==="N"||$==="S",gt=ct?Math.max(pt,T.cx-O/2):Math.max(z,T.cy-O/2),Ut=ct?Math.min(G,T.cx+O/2):Math.min(nt,T.cy+O/2);Ut-gt<.3||(ct?X.wall(gt,z,Ut,nt,$,0,e,.01):X.wall(pt,gt,G,Ut,$,0,e,.01))}if(!X.count)return;const V=X.geometry();r.push(V);const Z=new Dt(V,n.accentWall);Z.receiveShadow=!0,s.add(Z)}function A(F,w,T,O){const X=O.sides??["N","S","E","W"],V=z=>z==="N"||z==="S"?w[2]-w[0]:w[3]-w[1],Z=z=>z==="N"||z==="S"?w[3]-w[1]:w[2]-w[0],pt=[...X].sort((z,G)=>{const nt=F.room.facade.includes(z)?1:0,$=F.room.facade.includes(G)?1:0;return O.windowOnly?$-nt:nt!==$?nt-$:O.prefer==="short"?V(z)-V(G):V(G)-V(z)});for(const z of pt){if(Z(z)<O.d+Math.min(O.clear,.6))continue;const G=F.room.facade.includes(z);if(O.windowOnly&&!G)continue;const nt=Math.min(O.w[1],V(z)-(O.sideClear?O.sideClear*2:.05));for(let $=nt;$>=O.w[0]-1e-6;$-=.2){const tt=S(F,w,z,$,O.d,O,G);if(!tt)continue;const ct=T($,z);return a(ct,tt.cx,tt.cy,tt.rot),F.used.push(Au(tt.fp,z,O.clear,0)),o.push(tt.fp),tt}}return null}function S(F,w,T,O,X,V,Z){const pt=T==="N"||T==="S",z=(pt?w[0]:w[1])+O/2+(V.sideClear??0),G=(pt?w[2]:w[3])-O/2-(V.sideClear??0);if(G<z-1e-6)return null;const nt=V.align?pt?V.align.cx:V.align.cy:(z+G)/2,$=[];for(let ct=0;ct<=G-z+.001;ct+=.1)$.push(ct);const tt=[Math.min(G,Math.max(z,nt))];for(const ct of $)tt.push(nt+ct,nt-ct);V.fitWall&&tt.unshift(z,G);for(const ct of tt){if(ct<z-1e-6||ct>G+1e-6)continue;const gt=T==="N"?[ct-O/2,w[3]-X,ct+O/2,w[3]]:T==="S"?[ct-O/2,w[1],ct+O/2,w[1]+X]:T==="E"?[w[2]-X,ct-O/2,w[2],ct+O/2]:[w[0],ct-O/2,w[0]+X,ct+O/2];if(F.used.some(wt=>Bi(wt,gt,.01)))continue;const Ut=y(F,gt,T);if(Ut.door||Ut.solid<.75)continue;const et=Ut.glass>.15||Z&&Ux(F.room,gt,T);if((V.noWindow||V.tall||V.headboard||V.kitchen)&&et)continue;const ht=(gt[0]+gt[2])/2,k=(gt[1]+gt[3])/2;return{fp:gt,side:T,cx:ht,cy:k,rot:ki[T]}}return null}function y(F,w,T){const O=T==="N"||T==="S",X=8;let V=0,Z=0,pt=!1;for(let z=0;z<X;z++){const G=(z+.5)/X,nt=O?w[0]+(w[2]-w[0])*G:T==="E"?w[2]+.15:w[0]-.15,$=O?T==="N"?w[3]+.15:w[1]-.15:w[1]+(w[3]-w[1])*G,tt=F.layout.kindAt(nt,$);tt===Px&&(pt=!0),(tt===Rx||tt===Tu||tt===Dx)&&V++,tt===Tu&&Z++}return{solid:V/X,glass:Z/X,door:pt}}function N(F,w,T,O,X,V){const Z=[];for(const[G,nt]of[[T,O],[O,T]])for(let $=w[0]+G/2;$<=w[2]-G/2+1e-6;$+=.1)for(let tt=w[1]+nt/2;tt<=w[3]-nt/2+1e-6;tt+=.1)Z.push([$-G/2,tt-nt/2,$+G/2,tt+nt/2]);let pt=null,z=-1/0;for(const G of Z){if(F.used.some(ct=>Bi(ct,G,.01)))continue;const nt=(G[0]+G[2])/2,$=(G[1]+G[3])/2;let tt=0;for(const ct of F.room.facade){const gt=ct==="N"?w[3]-$:ct==="S"?$-w[1]:ct==="E"?w[2]-nt:nt-w[0];tt-=gt}X&&(tt+=Math.hypot(nt-X.cx,$-X.cy)*.3),tt>z&&(z=tt,pt=G)}return pt&&F.used.push(pt),pt}function H(F,w,T,O,X=!1){const V=[[w[0]+O/2+.05,w[1]+O/2+.05,"S","W"],[w[2]-O/2-.05,w[1]+O/2+.05,"S","E"],[w[0]+O/2+.05,w[3]-O/2-.05,"N","W"],[w[2]-O/2-.05,w[3]-O/2-.05,"N","E"]];V.sort((Z,pt)=>{const z=(F.room.facade.includes(Z[2])?1:0)+(F.room.facade.includes(Z[3])?1:0),G=(F.room.facade.includes(pt[2])?1:0)+(F.room.facade.includes(pt[3])?1:0);return X?G-z:z-G});for(const[Z,pt]of V){const z=[Z-O/2,pt-O/2,Z+O/2,pt+O/2];if(!F.used.some(G=>Bi(G,z,.01)))return a(T(),Z,pt,0),F.used.push(z),o.push(z),!0}return!1}function W(F,w,T,O,X){for(const V of["N","S","E","W"]){const Z=S(F,w,V,O,X,{fitWall:!0},!1);if(Z)return a(T(),Z.cx,Z.cy,Z.rot),F.used.push(Z.fp),o.push(Z.fp),Z}return null}const K=new Set([n.lampShade]),at=new Set([n.bulb]);return{group:s,colliders:o,setLight(F){for(const w of at)w.emissiveIntensity=.08+7*F;for(const w of K)w.emissiveIntensity=.9*F},dispose(){for(const F of r)F.dispose();s.traverse(F=>{const w=F;w.isMesh&&!r.includes(w.geometry)&&w.geometry.dispose()})}}}function pr(i,t){return i[0]>=t[0]-1e-6&&i[1]>=t[1]-1e-6&&i[2]<=t[2]+1e-6&&i[3]<=t[3]+1e-6}function Au(i,t,e,n){const[s,o]=Co[t],r=[...i];return s>0&&(r[2]+=e),s<0&&(r[0]-=e),o>0&&(r[3]+=e),o<0&&(r[1]-=e),s===0?(r[0]-=n,r[2]+=n):(r[1]-=n,r[3]+=n),r}function Ux(i,t,e){const n=e==="N"||e==="S";for(const[s,o,r,a,l]of i.windows)if(l===e&&(n&&Math.min(r,t[2])-Math.max(s,t[0])>.2||!n&&Math.min(a,t[3])-Math.max(o,t[1])>.2))return!0;return!1}function Nx(i,t,e,n,s,o){const r=new an(e-i,o-s,n-t),a=r.attributes.position,l=r.attributes.uv,c=r.attributes.normal;r.translate((i+e)/2,(s+o)/2,-(t+n)/2);for(let h=0;h<a.count;h++)Math.abs(c.getY(h))>.5&&l.setXY(h,a.getX(h),-a.getZ(h));return r}function Fx(i){const t=[],e=[],n=[];for(const o of i){const r=o.index?o.toNonIndexed():o;t.push(...r.attributes.position.array),e.push(...r.attributes.normal.array),n.push(...r.attributes.uv.array),o.dispose(),r!==o&&r.dispose()}const s=new ce;return s.setAttribute("position",new Vt(t,3)),s.setAttribute("normal",new Vt(e,3)),s.setAttribute("uv",new Vt(n,2)),s}class mr{constructor(){this.pos=[],this.nor=[],this.uv=[],this.count=0}wall(t,e,n,s,o,r,a,l){const[c,h]=Co[o],u=t+c*l,d=e+h*l,f=n+c*l,p=s+h*l,v=Math.hypot(f-u,p-d),g=(N,H,W)=>[N,W,-H];let m=g(u,d,r),M=g(f,p,r),x=g(f,p,a),_=g(u,d,a);M[0]-m[0],M[2]-m[2];const U=[c,0,-h],R=[M[0]-m[0],M[1]-m[1],M[2]-m[2]],E=[_[0]-m[0],_[1]-m[1],_[2]-m[2]],A=[R[1]*E[2]-R[2]*E[1],R[2]*E[0]-R[0]*E[2],R[0]*E[1]-R[1]*E[0]];A[0]*U[0]+A[1]*U[1]+A[2]*U[2]<0&&([m,M]=[M,m],[_,x]=[x,_]);const S=[m,M,x,m,x,_],y=[[0,r],[v,r],[v,a],[0,r],[v,a],[0,a]];S.forEach((N,H)=>{this.pos.push(N[0],N[1],N[2]),this.nor.push(U[0],U[1],U[2]),this.uv.push(y[H][0],y[H][1])}),this.count++}band(t,e,n,s,o,r,a,l){this.wall(t,e,n,s,o,r,a,l);const[c,h]=Co[o],u=[[t,a,-e],[n,a,-s],[n+c*l,a,-(s+h*l)],[t,a,-e],[n+c*l,a,-(s+h*l)],[t+c*l,a,-(e+h*l)]],d=[u[1][0]-u[0][0],u[1][2]-u[0][2]],f=[u[2][0]-u[0][0],u[2][2]-u[0][2]],v=d[1]*f[0]-d[0]*f[1]>=0?u:[u[0],u[2],u[1],u[3],u[5],u[4]];for(const g of v)this.pos.push(g[0],g[1],g[2]),this.nor.push(0,1,0),this.uv.push(g[0],g[2])}geometry(){const t=new ce;return t.setAttribute("position",new Vt(this.pos,3)),t.setAttribute("normal",new Vt(this.nor,3)),t.setAttribute("uv",new Vt(this.uv,2)),t}}const ao={metro:{label:"Метро",color:"#f2c79e",glyph:"M"},shop:{label:"Магазины и рынки",color:"#4ade80",glyph:"🛒"},bank:{label:"Банки",color:"#60a5fa",glyph:"₸"},food:{label:"Кафе и рестораны",color:"#fb923c",glyph:"☕"},edu:{label:"Школы, сады, вузы",color:"#c084fc",glyph:"🎓"},health:{label:"Здоровье",color:"#f87171",glyph:"✚"},sport:{label:"Спорт",color:"#2dd4bf",glyph:"●"},auto:{label:"Авто",color:"#94a3b8",glyph:"⛽"}};function qd(i,t){return`${i} мин · ${t<1e3?`${Math.round(t/10)*10} м`:`${(t/1e3).toFixed(1).replace(".",",")} км`}`}const Bn=Math.PI/180;function jd(i,t,e){const s=i.getTime()/864e5+24405875e-1-2451545,o=(280.46+.9856474*s)%360,r=(357.528+.9856003*s)%360*Bn,a=(o+1.915*Math.sin(r)+.02*Math.sin(2*r))*Bn,l=(23.439-4e-7*s)*Bn,c=Math.atan2(Math.cos(l)*Math.sin(a),Math.cos(a)),h=Math.asin(Math.sin(l)*Math.sin(a)),f=((18.697374558+24.06570982441908*s)%24*15+e)*Bn-c,p=t*Bn,v=Math.asin(Math.sin(p)*Math.sin(h)+Math.cos(p)*Math.cos(h)*Math.cos(f));return{azimuth:(Math.atan2(-Math.sin(f),Math.tan(h)*Math.cos(p)-Math.sin(p)*Math.cos(f))/Bn+360)%360,altitude:v/Bn}}function Zd(i){const t=i;return t<-1?0:1.02/Math.tan((t+10.3/(t+5.11))*Bn)/60}function Fa(i,t,e){const n=jd(i,t,e);return{azimuth:n.azimuth,altitude:n.altitude+Zd(n.altitude)}}const Ox=5;function wr(i,t){const[e,n,s]=i.split("-").map(Number);return new Date(Date.UTC(e,n-1,s)+(t-Ox)*36e5)}function Oa(i){const t=i.azimuth*Bn,e=i.altitude*Bn;return[Math.cos(e)*Math.sin(t),Math.cos(e)*Math.cos(t),Math.sin(e)]}function Wl(i,t,e){const n=d=>jd(wr(i,d),t,e).altitude;let s=6,o=18;const r=(Math.sqrt(5)-1)/2;for(let d=0;d<60;d++){const f=o-r*(o-s),p=s+r*(o-s);n(f)>n(p)?o=p:s=f}const a=(s+o)/2,l=-.833,c=(d,f,p)=>{const v=g=>n(g)-l;if(v(d)>0==v(f)>0)return null;for(let g=0;g<40;g++){const m=(d+f)/2;v(m)>0===p?f=m:d=m}return(d+f)/2},h=c(a-12,a,!0),u=c(a,a+12,!1);return{sunrise:h,sunset:u,noon:a,noonAltitude:n(a)+Zd(n(a)),dayLength:h!==null&&u!==null?u-h:n(a)>0?24:0}}function Wi(i){const t=Math.round(i*60),e=Math.floor(t/60)%24,n=t%60;return`${e}:${String(n).padStart(2,"0")}`}class Pn{constructor(){this.pos=[],this.nor=[],this.uv=[],this.lvl=[],this.level=0}quad(t,e,n,s,o,r=1){const a=[t,e,n,t,n,s],l=[[0,0],[1,0],[1,1],[0,0],[1,1],[0,1]],c=Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2])*r,h=Math.hypot(s[0]-t[0],s[1]-t[1],s[2]-t[2])*r;a.forEach((u,d)=>{this.pos.push(u[0],u[1],u[2]),this.nor.push(o[0],o[1],o[2]),this.uv.push(l[d][0]*c,l[d][1]*h),this.lvl.push(this.level)})}quadAuto(t,e,n,s,o){const r=e[0]-t[0],a=e[1]-t[1],l=e[2]-t[2],c=n[0]-t[0],h=n[1]-t[1],u=n[2]-t[2],d=a*u-l*h,f=l*c-r*u,p=r*h-a*c;d*o[0]+f*o[1]+p*o[2]>=0?this.quad(t,e,n,s,o):this.quad(s,n,e,t,o)}tri(t,e,n,s,o=1){for(const r of[t,e,n])this.pos.push(r[0],r[1],r[2]),this.nor.push(s[0],s[1],s[2]),this.uv.push(r[0]*o,r[2]*o),this.lvl.push(this.level)}box(t,e,n,s={top:!0,bottom:!0}){const[o,r,a,l]=t,c=-l,h=-r;s.top&&this.quad([o,n,h],[a,n,h],[a,n,c],[o,n,c],[0,1,0]),s.bottom&&this.quad([o,e,c],[a,e,c],[a,e,h],[o,e,h],[0,-1,0]),this.quad([o,e,h],[a,e,h],[a,n,h],[o,n,h],[0,0,1]),this.quad([a,e,c],[o,e,c],[o,n,c],[a,n,c],[0,0,-1]),this.quad([a,e,h],[a,e,c],[a,n,c],[a,n,h],[1,0,0]),this.quad([o,e,c],[o,e,h],[o,n,h],[o,n,c],[-1,0,0])}geometry(){const t=new ce;return t.setAttribute("position",new Vt(this.pos,3)),t.setAttribute("normal",new Vt(this.nor,3)),t.setAttribute("uv",new Vt(this.uv,2)),t.setAttribute("aLevel",new Vt(this.lvl,1)),t.computeBoundingBox(),t.computeBoundingSphere(),t}}function Fn(i,t,e,n={}){const s=new Pn;for(const o of i)s.box(o,t,e,{top:n.top??!0,bottom:n.bottom??!0});return s.geometry()}function kx(i,t,e,n){const s=new Pn;for(const[o,r,a,l,c,h]of i){const u=o-c*n,d=r-h*n,f=a-c*n,p=l-h*n,v=[c,0,-h],g=c*(p-d)-h*(f-u)<0,m=[u,t,-d],M=[f,t,-p],x=[f,e,-p],_=[u,e,-d];g?s.quad(M,m,_,x,v):s.quad(m,M,x,_,v)}return s.geometry()}function ka(i,t,e,n,s){const o=new Pn;for(const[r,a,l,c,h,u]of i){const d=Math.min(r,l)-0,f=Math.max(r,l),p=Math.min(a,c),v=Math.max(a,c);let g;if(h!==0){const m=r-h*s,M=r+h*n;g=[Math.min(m,M),p-n,Math.max(m,M),v+n]}else{const m=a-u*s,M=a+u*n;g=[d-n,Math.min(m,M),f+n,Math.max(m,M)]}o.box(g,t,e)}return o.geometry()}function Bx(i,t,e,n){const s=new Pn,o=new Set,r=.16,a=.32;for(const l of i){const[c,h,u,d]=l;if(!(Math.max(u-c,d-h)<.25))for(const[p,v,g,m,M,x]of t)if(M!==0){const _=M>0?u:c;if(Math.abs(_-p)>.12)continue;const U=Math.max(h,Math.min(v,m)),R=Math.min(d,Math.max(v,m));if(R-U<.2)continue;const E=(U+R)/2,A=`x${Math.round(p*2)}:${Math.round(E*2)}`;if(o.has(A))continue;o.add(A);const S=p,y=p+M*a;s.box([Math.min(S,y),E-r/2,Math.max(S,y),E+r/2],e,n)}else{const _=x>0?d:h;if(Math.abs(_-v)>.12)continue;const U=Math.max(c,Math.min(p,g)),R=Math.min(u,Math.max(p,g));if(R-U<.2)continue;const E=(U+R)/2,A=`y${Math.round(v*2)}:${Math.round(E*2)}`;if(o.has(A))continue;o.add(A);const S=v,y=v+x*a;s.box([E-r/2,Math.min(S,y),E+r/2,Math.max(S,y)],e,n)}}return s.geometry()}function zx(i,t){const e=Cc(i),n=[];for(const o of zs(e))for(const r of o)n.push(e[r][0],t,-e[r][1]);const s=new ce;return s.setAttribute("position",new Vt(n,3)),s.computeVertexNormals(),s}function Hx(i,t){const e=[];for(let s=0;s<i.length;s++){const o=i[s],r=i[(s+1)%i.length];e.push(o[0],t,-o[1],r[0],t,-r[1])}const n=new ce;return n.setAttribute("position",new Vt(e,3)),n}function no(i,t){const e=[],n=[];for(const{p:o,w:r}of i){const a=r/2;for(let l=0;l<o.length-1;l++){const[c,h]=o[l],[u,d]=o[l+1],f=Math.hypot(u-c,d-h);if(f<.01)continue;const p=-(d-h)/f*a,v=(u-c)/f*a,g=(u-c)/f*a*.5,m=(d-h)/f*a*.5,M=[c-g+p,h-m+v],x=[u+g+p,d+m+v],_=[u+g-p,d+m-v],U=[c-g-p,h-m-v];for(const R of[M,U,_,M,_,x])e.push(R[0],t,-R[1]),n.push(0,1,0)}}const s=new ce;return s.setAttribute("position",new Vt(e,3)),s.setAttribute("normal",new Vt(n,3)),s}function gr(i,t){const e=[];for(const s of i){const o=Cc(s);if(!(o.length<3))for(const r of zs(o))for(const a of r)e.push(o[a][0],t,-o[a][1])}const n=new ce;return n.setAttribute("position",new Vt(e,3)),n.computeVertexNormals(),n}function Cu(i,t){const e=i.getAttribute("position"),n=new Float32Array(e.count*2);for(let s=0;s<e.count;s++)n[s*2]=e.getX(s)/t,n[s*2+1]=-e.getZ(s)/t;return i.setAttribute("uv",new Oe(n,2)),i}function Vx(i){const t=new Pn;for(const{p:e,h:n}of i){const s=Cc(e);if(s.length<3)continue;const o=s.map(([l,c])=>new mt(l,c)),a=$i.isClockWise(o)?[...s].reverse():s;for(let l=0;l<a.length;l++){const[c,h]=a[l],[u,d]=a[(l+1)%a.length],f=Math.hypot(u-c,d-h);if(f<.01)continue;const p=[(d-h)/f,0,(u-c)/f];t.quad([c,0,-h],[u,0,-d],[u,n,-d],[c,n,-h],p,.25)}for(const[l,c,h]of zs(a))t.tri([a[l][0],n,-a[l][1]],[a[c][0],n,-a[c][1]],[a[h][0],n,-a[h][1]],[0,1,0],.1)}return t.geometry()}function zs(i){return $i.triangulateShape(i.map(([e,n])=>new mt(e,n)),[]).map(([e,n,s])=>(i[n][0]-i[e][0])*(i[s][1]-i[e][1])-(i[n][1]-i[e][1])*(i[s][0]-i[e][0])>=0?[e,n,s]:[e,s,n])}function Cc(i){const t=[];for(const e of i){const n=t[t.length-1];(!n||Math.hypot(n[0]-e[0],n[1]-e[1])>.05)&&t.push(e)}if(t.length>2){const e=t[0],n=t[t.length-1];Math.hypot(e[0]-n[0],e[1]-n[1])<.05&&t.pop()}return t}const Gx=1.4;class Ru{constructor(t,e,n){this.project=t,this.types=e,this.mat=n,this.root=new Zt,this.floors=[],this.typeGeo=new Map,this.overlay=null,this.interior=null,this.unitMeshes=new Map,this.hoverFloor=null,this.cutFloor=null,this.walkFloor=null,this.crown=new Zt,this.podiumRoof=null,this.podiumParapet=null;const s=t.building;this.slab=s.slab,this.root.name="building",this.root.rotation.y=-xn.degToRad(s.azimuth_deg);for(const o of s.floors)this.addFloor(o);this.addRoofs()}geoFor(t){let e=this.typeGeo.get(t.id);return e||(e={slab:Fn(t.slab,0,this.slab),walls:Fn(t.walls_ext,0,1,{top:!1,bottom:!1}),glass:kx(t.outline,0,1,.14),fins:t.kind==="podium"||this.project.building.style==="plain"?null:Bx(t.walls_ext,t.outline,0,1),band:ka(t.outline,-.02,this.slab+.12,.06,.25)},this.typeGeo.set(t.id,e)),e}addFloor(t){const e=this.types.get(t.type),n=this.geoFor(e),s=new Zt;s.name=`floor-${t.n}`;const o=t.height-this.slab,r=new Dt(n.slab,this.mat.slab);r.position.y=t.elevation;const a=new Dt(n.band,this.mat.band);a.position.y=t.elevation;const l=new Dt(n.walls,e.kind==="podium"?this.mat.band:this.mat.stone);l.position.y=t.elevation+this.slab,l.scale.y=o;const c=new Dt(n.glass,this.mat.glass);c.position.y=t.elevation+this.slab,c.scale.y=o,c.renderOrder=2;let h=null;n.fins&&(h=new Dt(n.fins,this.mat.bronze),h.position.y=t.elevation+this.slab,h.scale.y=o,h.castShadow=!0,s.add(h));for(const g of[r,a,l])g.castShadow=!0,g.receiveShadow=!0;s.add(r,a,l,c);const[u,d,f,p]=e.bbox,v=new Dt(new an(f-u,t.height,p-d),this.mat.pick);v.position.set((u+f)/2,t.elevation+t.height/2,-(d+p)/2),v.userData.floor=t.n,s.add(v),this.root.add(s),this.floors.push({info:t,type:e,group:s,walls:l,glass:c,fins:h,pick:v})}addRoofs(){const t=this.project.building,e=t.floors[t.floors.length-1],n=this.types.get(e.type),s=e.elevation+e.height,o=new Dt(Fn(n.slab,0,this.slab),this.mat.slab);o.position.y=s;const r=t.style==="plain",a=new Dt(ka(n.outline,0,t.crown_height,.08,.35),r?this.mat.stone:this.mat.bronze);a.position.y=s;const l=new Dt(new an(r?6:9,r?2.6:3.2,r?5:7),this.mat.band);l.position.set(0,s+1.6+this.slab,0);for(const u of[o,a,l])u.castShadow=!0,u.receiveShadow=!0;this.crown.add(o,a,l);const c=t.floors.find(u=>u.n===6),h=t.floors.find(u=>u.n===5);if(h&&c&&this.types.get(h.type).kind!=="tower"){const u=this.types.get(h.type),d=new Dt(Fn(u.slab,0,.15),this.mat.plaza);d.position.y=c.elevation,d.receiveShadow=!0,d.castShadow=!0;const f=new Dt(ka(u.outline,0,1.1,.04,.2),this.mat.band);f.position.y=c.elevation,f.castShadow=!0,this.crown.add(d,f),this.podiumRoof=d,this.podiumParapet=f}this.root.add(this.crown)}planToWorld(t,e,n){return this.root.updateMatrixWorld(),this.root.localToWorld(new L(t,n,-e))}worldToPlan(t){this.root.updateMatrixWorld();const e=this.root.worldToLocal(t.clone());return[e.x,-e.z]}floor(t){return this.floors.find(e=>e.info.n===t)}floorCenterWorld(t){const e=this.floor(t),[n,s,o,r]=e.type.kind==="podium"?e.type.bbox:this.towerBox(e.type);return this.planToWorld((n+o)/2,(s+r)/2,e.info.elevation)}towerBox(t){return t.bbox}get slabThickness(){return this.slab}get height(){return this.project.building.height}occluders(){const t=[];for(const e of this.floors)t.push(e.walls),e.fins&&t.push(e.fins);return this.crown.traverse(e=>{e.isMesh&&t.push(e)}),this.root.updateMatrixWorld(),t}pickables(){return this.floors.filter(t=>t.group.visible).map(t=>t.pick)}unitPickables(){return[...this.unitMeshes.values()].map(t=>t.fill)}setHoverFloor(t){if(this.hoverFloor!==t){if(this.hoverFloor!==null){const e=this.floor(this.hoverFloor);e&&this.walkFloor!==e.info.n&&(e.glass.material=this.mat.glass)}if(this.hoverFloor=t,t!==null&&this.cutFloor===null&&this.walkFloor===null){const e=this.floor(t);e&&(e.glass.material=this.mat.glassHover)}}}showAll(){this.clearInterior(),this.cutFloor=null,this.walkFloor=null;for(const t of this.floors)t.group.visible=!0,t.walls.material=t.type.kind==="podium"?this.mat.band:this.mat.stone,t.glass.visible=!0,t.glass.material=this.mat.glass,t.fins&&(t.fins.visible=!0);this.crown.visible=!0}setVisibleUpTo(t){for(const n of this.floors)n.group.visible=n.info.n<=t,n.walls.material=n.type.kind==="podium"?this.mat.band:this.mat.stone,n.glass.visible=!0,n.glass.material=this.mat.glass,n.fins&&(n.fins.visible=!0);this.crown.visible=!1;const e=this.project.building.floors.find(n=>n.n===6);this.podiumRoof&&e&&(this.podiumRoof.visible=t>=6,this.podiumParapet.visible=t>=6,t>=6&&(this.crown.visible=!0),this.crown.children.forEach(n=>{n!==this.podiumRoof&&n!==this.podiumParapet&&(n.visible=!1)}))}restoreCrownChildren(){this.crown.children.forEach(t=>t.visible=!0)}cutAt(t,e,n){this.clearInterior(),this.restoreCrownChildren(),this.cutFloor=t,this.walkFloor=null,this.setVisibleUpTo(t);const s=this.floor(t);s.glass.visible=!1,s.fins&&(s.fins.visible=!1);const o=new Zt,r=Math.min(Gx,s.info.height-this.slab),a=s.info.elevation+this.slab,l=new Dt(Fn(s.type.walls_int,a,a+r,{bottom:!1}),this.mat.wallInt);l.castShadow=!0,l.receiveShadow=!0;const c=new Dt(Fn(s.type.slab,a,a+.01,{bottom:!1}),this.mat.floorCut);c.receiveShadow=!0,o.add(l,c),this.overlay=new Zt;for(const h of e.filter(u=>u.floor===t&&u.polygon)){const u=new Ft(Je[h.status]),d=new Dt(zx(h.polygon,a+.05),new on({color:u,transparent:!0,opacity:.42,depthWrite:!1}));d.renderOrder=3,d.userData.unitId=h.id;const f=new Cd(Hx(h.polygon,a+.07),new Po({color:u,transparent:!0,opacity:.95}));f.renderOrder=4,this.overlay.add(d,f),this.unitMeshes.set(h.id,{fill:d,line:f,unit:h})}o.add(this.overlay),this.interior=o,this.root.add(o),this.styleUnits(n,null,null)}updateUnits(t){const e=new Map(t.map(n=>[n.id,n]));for(const n of this.unitMeshes.values())n.unit=e.get(n.unit.id)??n.unit}styleUnits(t,e,n){for(const{fill:s,line:o,unit:r}of this.unitMeshes.values()){const a=kr(r,t),l=s.material,c=o.material,h=new Ft(Je[r.status]),u=r.id===n||r.id===e;l.color.copy(a?h:new Ft("#9aa0a6")),l.opacity=a?r.id===n?.78:r.id===e?.62:.4:.12,c.color.copy(u?new Ft("#ffffff"):a?h:new Ft("#9aa0a6")),c.opacity=a?1:.3,s.visible=!0}}walkIn(t,e){this.clearInterior(),this.restoreCrownChildren(),this.cutFloor=null,this.walkFloor=t,this.setVisibleUpTo(t);const n=this.floor(t);n.glass.material=this.mat.glassInside,n.glass.visible=!0;const s=new Zt,o=n.info.elevation+this.slab,r=n.info.elevation+n.info.height,a=new Dt(Fn(n.type.walls_int,o,r,{top:!1,bottom:!1}),this.mat.wallInt);a.receiveShadow=!0,a.castShadow=!0,n.walls.material=this.mat.wallInt;const l=new Dt(Fn(n.type.door_heads,o+2.1,r),this.mat.wallInt);l.receiveShadow=!0;const c=new Dt(Fn(n.type.slab,o,o+.012,{bottom:!1}),this.mat.floorWood);c.receiveShadow=!0;const h=new Dt(Fn(n.type.slab,r,r+this.slab),this.mat.ceiling);h.castShadow=!0,s.add(a,l,c,h);const u=e.filter(d=>d.floor===t&&d.polygon);for(const d of n.type.rooms)d.area<1.5||d.area>38||u.some(f=>Wx(d.x,d.y,f.polygon))&&s.add(Xx(`${d.area.toFixed(1).replace(".",",")} м²`,d.x,d.y,o+.02));this.interior=s,this.root.add(s)}setRoomLabelsVisible(t){this.interior?.traverse(e=>{e.name==="room-label"&&(e.visible=t)})}collisionRects(t){const e=this.floor(t),n=[...e.type.walls_int,...e.type.walls_ext];for(const[s,o,r,a,l,c]of e.type.outline)l!==0?n.push([Math.min(s,s-l*.15),Math.min(o,a),Math.max(s,s-l*.15),Math.max(o,a)]):n.push([Math.min(s,r),Math.min(o,o-c*.15),Math.max(s,r),Math.max(o,o-c*.15)]);return n}clearInterior(){this.interior&&(this.root.remove(this.interior),this.interior.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose();const n=e.material;n&&!Array.isArray(n)&&!Object.values(this.mat).includes(n)&&(n.map?.dispose(),n.dispose())})),this.interior=null,this.overlay=null,this.unitMeshes.clear()}}function Wx(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++)e[s][1]>t!=e[o][1]>t&&i<(e[o][0]-e[s][0])*(t-e[s][1])/(e[o][1]-e[s][1]+1e-12)+e[s][0]&&(n=!n);return n}function Xx(i,t,e,n){const s=document.createElement("canvas");s.width=256,s.height=96;const o=s.getContext("2d");o.font="600 46px Manrope, system-ui, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillStyle="rgba(40, 32, 24, 0.55)",o.fillText(i,128,50);const r=new Gr(s);r.colorSpace=Xe,r.anisotropy=4;const a=new Dt(new Pi(1.4,.525),new on({map:r,transparent:!0,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.position.set(t,n,-e),a.renderOrder=5,a.name="room-label",a}const An=1,$x=5,Yx=2,qx=3,jx=5,Zx=24,Ds=.16;function Kx(i,t,e,n){const s=new Zt;s.name="gardens";const o=Jd(n),r={group:s,trees:[],bushes:[],lawns:0};if(i.length<3)return r;const a=ty(t.length?t:[i]),l=Math.cos(a),c=Math.sin(a),h=([T,O])=>[T*l+O*c,-T*c+O*l],u=(T,O)=>[T*l-O*c,T*c+O*l],d=i.map(h),f=t.map(T=>T.map(h));let p=1/0,v=1/0,g=-1/0,m=-1/0;for(const[T,O]of d)p=Math.min(p,T),v=Math.min(v,O),g=Math.max(g,T),m=Math.max(m,O);const M=Math.ceil((g-p)/An),x=Math.ceil((m-v)/An);if(M<=0||x<=0||M*x>4e5)return r;const _=new Uint8Array(M*x);for(let T=0;T<x;T++)for(let O=0;O<M;O++){const X=p+(O+.5)*An,V=v+(T+.5)*An;if(!Pu(X,V,d)||Du(X,V,d)<Yx)continue;let Z=!0;for(const pt of f)if(Pu(X,V,pt)||Du(X,V,pt)<$x){Z=!1;break}Z&&(_[T*M+O]=1)}const U=[],R=Math.ceil(jx/An),E=Math.floor(Zx/An),A=Math.ceil(qx/An);for(let T=0;T<80;T++){const O=ey(_,M,x);if(!O||O.w<R||O.h<R)break;const X=Math.min(O.w,E),V=Math.min(O.h,E),Z=O.i+(O.w>E?Math.floor((O.w-X)/2):0),pt=O.j+(O.h>E?Math.floor((O.h-V)/2):0);U.push({a:p+Z*An,b:v+pt*An,c:p+(Z+X)*An,d:v+(pt+V)*An});for(let z=Math.max(0,pt-A);z<Math.min(x,pt+V+A);z++)for(let G=Math.max(0,Z-A);G<Math.min(M,Z+X+A);G++)_[z*M+G]=0}if(!U.length)return r;const S=[],y=[],N=[],H=[],W=[];for(const T of U){const O=T.c-T.a,X=T.d-T.b,V=Qx(T.a,T.b,T.c,T.d,Math.min(2.2,O/4,X/4)).map(([G,nt])=>u(G,nt));for(const G of zs(V))for(const nt of G)S.push(V[nt][0],Ds,-V[nt][1]);Jx(V,y,N);const Z=Math.max(1,Math.round((O-3)/7.5)),pt=Math.max(1,Math.round((X-3)/7.5));for(let G=0;G<Z;G++)for(let nt=0;nt<pt;nt++){if(Z*pt>1&&o()<.15)continue;const $=T.a+1.8+(G+.5)/Z*(O-3.6)+(o()-.5)*1.6,tt=T.b+1.8+(nt+.5)/pt*(X-3.6)+(o()-.5)*1.6,[ct,gt]=u($,tt);H.push({x:ct,y:gt,s:.75+o()*.45,base:Ds})}const z=[[T.a+1.3,T.b+1.3],[T.c-1.3,T.b+1.3],[T.c-1.3,T.d-1.3],[T.a+1.3,T.d-1.3]];for(const[G,nt]of z){if(o()<.45)continue;const $=2+Math.floor(o()*2);for(let tt=0;tt<$;tt++){const ct=(G<(T.a+T.c)/2?1:-1)*o()*2.2,gt=(nt<(T.b+T.d)/2?1:-1)*o()*2.2,[Ut,et]=u(G+ct,nt+gt);W.push({x:Ut,y:et,s:.6+o()*.45,base:Ds})}}}const K=new ce;K.setAttribute("position",new Vt(S,3)),K.computeVertexNormals();const at=new Dt(K,e.lawn);at.receiveShadow=!0;const F=new ce;F.setAttribute("position",new Vt(y,3)),F.setAttribute("normal",new Vt(N,3));const w=new Dt(F,e.curb);return w.receiveShadow=!0,s.add(at,w),{group:s,trees:H,bushes:W,lawns:U.length}}function Jx(i,t,e){const n=ny(i)>0;for(let s=0;s<i.length;s++){const o=i[s],r=i[(s+1)%i.length],a=Math.hypot(r[0]-o[0],r[1]-o[1]);if(a<.001)continue;let l=(r[1]-o[1])/a,c=-(r[0]-o[0])/a;n||(l=-l,c=-c);const[h,u]=n?[o,r]:[r,o],d=[[h[0],0,-h[1]],[u[0],0,-u[1]],[u[0],Ds,-u[1]],[h[0],0,-h[1]],[u[0],Ds,-u[1]],[h[0],Ds,-h[1]]];for(const f of d)t.push(...f),e.push(l,0,-c)}}function Qx(i,t,e,n,s){const o=[],r=(a,l,c)=>{for(let h=0;h<=4;h++){const u=c+h/4*(Math.PI/2);o.push([a+Math.cos(u)*s,l+Math.sin(u)*s])}};return r(e-s,t+s,-Math.PI/2),r(e-s,n-s,0),r(i+s,n-s,Math.PI/2),r(i+s,t+s,Math.PI),o}function ty(i){const t=new Float64Array(90);for(const n of i)for(let s=0;s<n.length;s++){const[o,r]=n[s],[a,l]=n[(s+1)%n.length],c=Math.hypot(a-o,l-r);if(c<.5)continue;let h=Math.atan2(l-r,a-o)*180/Math.PI;h=(h%90+90)%90,t[Math.floor(h)%90]+=c}let e=0;for(let n=1;n<90;n++)t[n]>t[e]&&(e=n);return(e+.5)*Math.PI/180}function ey(i,t,e){const n=new Int32Array(t);let s=null,o=0;const r=[];for(let a=0;a<e;a++){for(let l=0;l<t;l++)n[l]=i[a*t+l]?n[l]+1:0;r.length=0;for(let l=0;l<=t;l++){const c=l<t?n[l]:0;for(;r.length&&n[r[r.length-1]]>=c;){const h=n[r.pop()],u=r.length?r[r.length-1]+1:0,d=l-u,f=Math.min(d,h*4)*Math.min(h,d*4);h>0&&f>o&&(o=f,s={i:u,j:a-h+1,w:d,h})}r.push(l)}}return s}function ny(i){let t=0;for(let e=0;e<i.length;e++){const[n,s]=i[e],[o,r]=i[(e+1)%i.length];t+=n*r-o*s}return t/2}function Pu(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++)e[s][1]>t!=e[o][1]>t&&i<(e[o][0]-e[s][0])*(t-e[s][1])/(e[o][1]-e[s][1]+1e-12)+e[s][0]&&(n=!n);return n}function Du(i,t,e){let n=1/0;for(let s=0;s<e.length;s++){const[o,r]=e[s],[a,l]=e[(s+1)%e.length];n=Math.min(n,Kd(i,t,o,r,a,l))}return n}function Kd(i,t,e,n,s,o){const r=s-e,a=o-n,l=r*r+a*a,c=l?Math.max(0,Math.min(1,((i-e)*r+(t-n)*a)/l)):0;return Math.hypot(i-(e+c*r),t-(n+c*a))}function Jd(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}const Lu=new Set(["footway","path","cycleway","steps","pedestrian","track","bridleway"]),Iu=new Set(["service","living_street"]),Xl={trunk:5,primary:4.5,secondary:4,tertiary:3.5,residential:3,unclassified:2.5},Uu=8,iy=6;function sy(i,t,e,n){const s=new Zt;s.name="context";const o=new Dt(new vc(2400,64),t.ground);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,s.add(o);const r=i.green.filter(x=>x.k!=="pitch"&&x.k!=="playground"),a=i.green.filter(x=>x.k==="pitch"||x.k==="playground");ii(s,gr(r.map(x=>x.p),.02),t.green),ii(s,gr(a.map(x=>x.p),.03),t.pitch),ii(s,gr(i.water_areas.map(x=>x.p),.04),t.water),ii(s,no(i.water_lines,.04),t.water);const l=x=>x.k??"",c=i.roads.filter(x=>Lu.has(l(x))),h=i.roads.filter(x=>Iu.has(l(x))),u=i.roads.filter(x=>!Lu.has(l(x))&&!Iu.has(l(x)));ii(s,no(c,.06),t.path),ii(s,no(h,.07),t.lane);const d=oy(e,iy);ii(s,Cu(gr([d],.08),Uu),t.paving);const f=u.filter(x=>(Xl[l(x)]??0)>0).map(x=>({p:x.p,w:x.w+2*Xl[l(x)]}));ii(s,Cu(no(f,.09),Uu),t.sidewalk),ii(s,no(u,.1),t.road);const p=new Dt(Vx(i.buildings),t.context);p.castShadow=!0,p.receiveShadow=!0,s.add(p);const v=Kx(e,n,t,20261112);s.add(v.group);const g=new $l([...u,...h]),m=ay(i,t,d,g,u,v);return s.add(m.group),{group:s,occluders:p,trees:m,ground:{onRoad:(x,_,U=.3)=>g.hits(x,_,U),inYard:(x,_)=>Er(x,_,d)}}}function ii(i,t,e){const n=new Dt(t,e);n.receiveShadow=!0,i.add(n)}function oy(i,t){const e=ry(i)<0?[...i].reverse():i,n=e.length;if(n<3)return e;const s=e.map((o,r)=>{const a=e[(r+1)%n],l=Math.hypot(a[0]-o[0],a[1]-o[1])||1,c=(a[1]-o[1])/l,h=-(a[0]-o[0])/l;return{ax:o[0]+c*t,ay:o[1]+h*t,dx:(a[0]-o[0])/l,dy:(a[1]-o[1])/l,nx:c,ny:h}});return e.map((o,r)=>{const a=s[(r-1+n)%n],l=s[r],c=a.dx*l.dy-a.dy*l.dx;if(Math.abs(c)<.001){const u=a.nx+l.nx,d=a.ny+l.ny,f=Math.hypot(u,d)||1;return[o[0]+u/f*t,o[1]+d/f*t]}const h=((l.ax-a.ax)*l.dy-(l.ay-a.ay)*l.dx)/c;return[a.ax+a.dx*h,a.ay+a.dy*h]})}function ry(i){let t=0;for(let e=0;e<i.length;e++){const[n,s]=i[e],[o,r]=i[(e+1)%i.length];t+=n*r-o*s}return t/2}const _o=class _o{constructor(t){this.cells=new Map;const e=_o.CELL;for(const n of t){const s=n.w/2;for(let o=0;o<n.p.length-1;o++){const[r,a]=n.p[o],[l,c]=n.p[o+1],h={ax:r,ay:a,bx:l,by:c,hw:s},u=s+2;for(let d=Math.floor((Math.min(r,l)-u)/e);d<=Math.floor((Math.max(r,l)+u)/e);d++)for(let f=Math.floor((Math.min(a,c)-u)/e);f<=Math.floor((Math.max(a,c)+u)/e);f++){const p=`${d}:${f}`,v=this.cells.get(p);v?v.push(h):this.cells.set(p,[h])}}}}hits(t,e,n){const s=_o.CELL,o=this.cells.get(`${Math.floor(t/s)}:${Math.floor(e/s)}`);if(!o)return!1;for(const r of o)if(Kd(t,e,r.ax,r.ay,r.bx,r.by)<r.hw+n)return!0;return!1}};_o.CELL=24;let $l=_o;function Er(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++)e[s][1]>t!=e[o][1]>t&&i<(e[o][0]-e[s][0])*(t-e[s][1])/(e[o][1]-e[s][1]+1e-12)+e[s][0]&&(n=!n);return n}function Nu(i){let t=1/0,e=1/0,n=-1/0,s=-1/0;for(const[o,r]of i)t=Math.min(t,o),e=Math.min(e,r),n=Math.max(n,o),s=Math.max(s,r);return{x0:t,y0:e,x1:n,y1:s}}function ay(i,t,e,n,s,o){const r=Jd(20261104),a=[],l=i.buildings.map(_=>({p:_.p,bb:Nu(_.p)})),c=(_,U)=>{if(Math.hypot(_,U)>1300||Er(_,U,e)||n.hits(_,U,.8))return!0;for(const R of l)if(!(_<R.bb.x0-2||_>R.bb.x1+2||U<R.bb.y0-2||U>R.bb.y1+2)&&Er(_,U,R.p))return!0;return!1};for(const _ of i.green){if(_.k==="pitch"||_.k==="playground")continue;const U=Nu(_.p),R=(U.x1-U.x0)*(U.y1-U.y0),E=Math.min(600,Math.round(R/(_.k==="park"||_.k==="forest"?90:220)));for(let A=0;A<E;A++){const S=U.x0+r()*(U.x1-U.x0),y=U.y0+r()*(U.y1-U.y0);Er(S,y,_.p)&&!c(S,y)&&a.push({x:S,y,s:.8+r()*.6,base:0})}}for(const _ of s){if((Xl[_.k??""]??0)<3)continue;const R=_.w/2+1.3;for(let E=0;E<_.p.length-1;E++){const[A,S]=_.p[E],[y,N]=_.p[E+1],H=Math.hypot(y-A,N-S);if(H<1)continue;const W=-(N-S)/H,K=(y-A)/H;for(let at=5;at<H-2;at+=10)for(const F of[-1,1]){const w=at+(r()-.5)*2,T=A+(y-A)*w/H+W*R*F,O=S+(N-S)*w/H+K*R*F;c(T,O)||a.push({x:T,y:O,s:.75+r()*.4,base:0})}}}a.push(...o.trees);const h=new Mc(1,1),u=new ns(.12,.18,1,6),d=new Xi(h,t.treeCrown,a.length),f=new Xi(u,t.treeTrunk,a.length),p=new Xi(h,t.bush,o.bushes.length),v=new le,g=new Un;a.forEach((_,U)=>{const R=6*_.s;v.compose(new L(_.x,_.base+R*.25,-_.y),g,new L(1,R*.5,1)),f.setMatrixAt(U,v)}),d.castShadow=!0,f.castShadow=!0,p.castShadow=!0;const m=new Zt;m.add(d,f,p);const M=_=>Array.from({length:_},()=>[r(),r(),r(),r()]),x=new ly(m,{mesh:d,spots:a,seeds:M(a.length)},{mesh:p,spots:o.bushes,seeds:M(o.bushes.length)});return x.setSeason("summer"),x}class ly{constructor(t,e,n){this.group=t,this.crowns=e,this.bushes=n}setSeason(t){const e=new le,n=new Un,s=new Ft;this.crowns.spots.forEach((o,r)=>{const[a,l,c,h]=this.crowns.seeds[r],u=6*o.s,d=2.4*o.s*(t==="winter"?.72:t==="spring"?.92:1);e.compose(new L(o.x,o.base+u*.62,-o.y),n,new L(d,d*1.15,d)),this.crowns.mesh.setMatrixAt(r,e),t==="summer"?s.setHSL(.24+a*.05,.32+l*.12,.3+c*.1):t==="spring"?h<.14?s.setHSL(.93+a*.04,.45,.8+l*.08):h<.22?s.setHSL(.12,.15,.88):s.setHSL(.25+a*.04,.45+l*.15,.42+c*.08):t==="autumn"?h<.2?s.setHSL(.22+a*.04,.3,.32+l*.06):h<.38?s.setHSL(.02+a*.03,.62,.38+l*.08):s.setHSL(.07+a*.06,.68+l*.15,.42+c*.1):s.setHSL(.07+a*.03,.1+l*.06,.25+c*.06),this.crowns.mesh.setColorAt(r,s)}),Fu(this.crowns.mesh),this.bushes.spots.forEach((o,r)=>{const[a,l,c,h]=this.bushes.seeds[r],u=t==="winter"?.9:1;e.compose(new L(o.x,o.base+.45*o.s*u,-o.y),n,new L(1.1*o.s*u,.75*o.s*u,1.1*o.s*u)),this.bushes.mesh.setMatrixAt(r,e),t==="spring"&&h<.3?s.setHSL(.92+a*.05,.5,.74+l*.08):t==="autumn"&&h<.45?s.setHSL(.02+a*.05,.55,.36+l*.08):t==="winter"?s.setHSL(.3+a*.03,.16+l*.06,.22+c*.05):s.setHSL(.25+a*.04,.32+l*.1,.28+c*.07),this.bushes.mesh.setColorAt(r,s)}),Fu(this.bushes.mesh)}}function Fu(i){i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.computeBoundingSphere()}function cy(){const i=document.createElement("canvas");i.width=512,i.height=512;const t=i.getContext("2d"),e=64;for(let s=0;s<512;s+=e){let o=-(s/e%3)*120;for(;o<512;){const r=260+(o*7+s*13)%140,a=168+(o*31+s*17)%26;t.fillStyle=`rgb(${a+28}, ${a-14}, ${a-62})`,t.fillRect(o,s,r,e);for(let l=0;l<9;l++){t.strokeStyle=`rgba(90, 60, 30, ${.05+(l*13+o)%7/100})`,t.beginPath();const c=s+6+l*6.5;t.moveTo(o,c),t.bezierCurveTo(o+r/3,c+2,o+2*r/3,c-2,o+r,c),t.stroke()}t.fillStyle="rgba(60, 40, 20, 0.35)",t.fillRect(o,s,2,e),o+=r}t.fillStyle="rgba(60, 40, 20, 0.4)",t.fillRect(0,s,512,2)}const n=new Gr(i);return n.wrapS=n.wrapT=Wn,n.colorSpace=Xe,n.anisotropy=8,n}function hy(){const i=document.createElement("canvas");i.width=512,i.height=512;const t=i.getContext("2d"),e=128,n=64;for(let o=0;o<512/n;o++){const r=o%2*(e/2);for(let a=-r;a<512;a+=e){const l=232+(((a+128)*37+o*59)%17-8);t.fillStyle=`rgb(${l}, ${l-3}, ${l-9})`,t.fillRect(a,o*n,e,n),t.fillStyle="rgba(70, 64, 56, 0.26)",t.fillRect(a,o*n,3,n)}t.fillStyle="rgba(70, 64, 56, 0.26)",t.fillRect(0,o*n,512,3)}const s=new Gr(i);return s.wrapS=s.wrapT=Wn,s.colorSpace=Xe,s.anisotropy=8,s}function si(i,t){return i.polygonOffset=t>0,i.polygonOffsetFactor=0,i.polygonOffsetUnits=-t*2,i}const uy={ground:0,green:1,pitch:2,water:3,path:4,lane:5,paving:6,sidewalk:7,road:8};function dy(){const i=cy();i.repeat.set(.5,.5);const t=hy(),e=uy;return{stone:Ie(new ue({color:14074790,roughness:.82,metalness:0}),{snow:1,wet:.35,uplight:!0}),band:Ie(new ue({color:13219223,roughness:.7,metalness:.05}),{snow:1,wet:.35,uplight:!0}),bronze:Ie(new ue({color:10251078,roughness:.38,metalness:.65}),{snow:.7,wet:.2}),slab:Ie(new ue({color:12564136,roughness:.9}),{snow:1,wet:.6}),glass:Ie(new br({color:4150371,roughness:.05,metalness:.2,transparent:!0,opacity:.78,envMapIntensity:1.4,side:we,depthWrite:!1}),{windows:"glass"}),glassHover:new br({color:14260834,emissive:13141850,emissiveIntensity:.55,roughness:.1,metalness:.1,transparent:!0,opacity:.8,side:we,depthWrite:!1}),glassInside:new br({color:14674415,roughness:.02,metalness:0,transparent:!0,opacity:.12,side:we,depthWrite:!1}),wallInt:new ue({color:15460062,roughness:.92}),wallCut:new ue({color:2764083,roughness:.85}),floorWood:new ue({map:i,color:16773344,roughness:.55,metalness:0}),floorCut:new ue({color:15328476,roughness:.95}),ceiling:new ue({color:16184560,roughness:.95,side:we}),plaza:Ie(new ue({color:14275010,roughness:.9}),{snow:.9,wet:1}),ground:si(Ie(new ue({color:13222580,roughness:1}),{snow:1,wet:.7}),e.ground),green:si(Ie(new ue({color:9086570,roughness:1}),{snow:1,wet:.35}),e.green),pitch:si(Ie(new ue({color:7314026,roughness:1}),{snow:1,wet:.4}),e.pitch),water:si(new ue({color:4157318,roughness:.12,metalness:.35}),e.water),path:si(Ie(new ue({color:13090478,roughness:1}),{snow:.85,wet:.9}),e.path),lane:si(Ie(new ue({color:5593181,roughness:.95}),{snow:.5,wet:1}),e.lane),paving:si(Ie(new ue({map:t,color:15129803,roughness:.92}),{snow:.9,wet:1}),e.paving),sidewalk:si(Ie(new ue({map:t,color:13815236,roughness:.95}),{snow:.9,wet:1}),e.sidewalk),road:si(Ie(new ue({color:4869458,roughness:.95}),{snow:.5,wet:1}),e.road),lawn:Ie(new ue({color:9681002,roughness:1}),{snow:1,wet:.35}),curb:Ie(new ue({color:15328216,roughness:.85}),{snow:1,wet:.6}),context:Ie(new ue({color:14867924,roughness:.9}),{snow:1,wet:.45,windows:"context"}),treeCrown:Ie(new ue({color:16777215,roughness:.95,flatShading:!0}),{snow:1,wet:.2}),bush:Ie(new ue({color:16777215,roughness:.95,flatShading:!0}),{snow:1,wet:.2}),treeTrunk:new ue({color:7033922,roughness:1}),lampPole:Ie(new ue({color:3816770,roughness:.5,metalness:.6}),{snow:.6,wet:.3}),pick:new on({visible:!1})}}class fy{constructor(t,e){this.camera=t,this.dom=e,this.enabled=!1,this.yaw=0,this.pitch=0,this.pos=new L,this.keys=new Set,this.stick=new mt,this.drag=null,this.resolve=n=>n,this.onKey=n=>{this.enabled&&n.target?.tagName!=="INPUT"&&(n.type==="keydown"?this.keys.add(n.code):this.keys.delete(n.code),(n.code.startsWith("Arrow")||n.code==="Space")&&n.preventDefault())},this.onDown=n=>{this.enabled&&(this.drag={id:n.pointerId,x:n.clientX,y:n.clientY})},this.onMove=n=>{!this.enabled||!this.drag||n.pointerId!==this.drag.id||(this.look(n.clientX-this.drag.x,n.clientY-this.drag.y),this.drag.x=n.clientX,this.drag.y=n.clientY)},this.onUp=n=>{this.drag&&n.pointerId===this.drag.id&&(this.drag=null)},window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onKey),e.addEventListener("pointerdown",this.onDown),window.addEventListener("pointermove",this.onMove),window.addEventListener("pointerup",this.onUp),window.addEventListener("pointercancel",this.onUp)}start(t,e,n){this.enabled=!0,this.pos.copy(t),this.yaw=e,this.pitch=-.04,this.resolve=n,this.keys.clear(),this.stick.set(0,0),this.apply()}stop(){this.enabled=!1,this.keys.clear(),this.drag=null}setStick(t,e){this.stick.set(t,e)}look(t,e){this.yaw-=t*.0042,this.pitch=xn.clamp(this.pitch-e*.0036,-1.25,1.1)}update(t){if(!this.enabled)return;let e=0,n=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(e+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(e-=1),this.keys.has("KeyA")&&(n-=1),this.keys.has("KeyD")&&(n+=1),this.keys.has("ArrowLeft")&&(this.yaw+=1.8*t),this.keys.has("ArrowRight")&&(this.yaw-=1.8*t),e+=-this.stick.y,n+=this.stick.x;const s=Math.hypot(e,n);if(s>1&&(e/=s,n/=s),s>.01){const o=(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")?3.2:1.7)*t,r=new L(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),a=new L(Math.cos(this.yaw),0,-Math.sin(this.yaw)),l=r.multiplyScalar(e*o).add(a.multiplyScalar(n*o)),c=this.resolve(this.pos.clone().add(new L(l.x,0,0)));this.pos.copy(c);const h=this.resolve(this.pos.clone().add(new L(0,0,l.z)));this.pos.copy(h)}this.apply()}apply(){this.camera.position.copy(this.pos),this.camera.rotation.order="YXZ",this.camera.rotation.set(this.pitch,this.yaw,0)}dispose(){window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onKey),this.dom.removeEventListener("pointerdown",this.onDown),window.removeEventListener("pointermove",this.onMove),window.removeEventListener("pointerup",this.onUp),window.removeEventListener("pointercancel",this.onUp)}}function Ba(i,t,e,n){for(let s=0;s<3;s++){let o=!1;for(const[r,a,l,c]of n){const h=Math.max(r,Math.min(i,l)),u=Math.max(a,Math.min(t,c)),d=i-h,f=t-u,p=d*d+f*f;if(!(p>=e*e)){if(p>1e-10){const v=Math.sqrt(p);i=h+d/v*e,t=u+f/v*e}else{const v=[[r-e,t,i-r],[l+e,t,l-i],[i,a-e,t-a],[i,c+e,c-t]];v.sort((g,m)=>g[2]-m[2]),i=v[0][0],t=v[0][1]}o=!0}}if(!o)break}return[i,t]}class py{constructor(t,e,n){this.renderer=t,this.rig=e,this.camera=n,this.supported=!1,this.active=!1,this.controllers=[],this.aiming=new Map,this.target=null,this.floorY=0,this.walkable=()=>!0,this.turnCooldown=0,this.onEnd=()=>{},this.marker=new Dt(new Sc(.22,.3,40).rotateX(-Math.PI/2),new on({color:4054167,transparent:!0,opacity:.9,depthTest:!1})),this.marker.visible=!1,this.marker.renderOrder=10;for(let s=0;s<2;s++){const o=t.xr.getController(s),r=new Vr(new ce().setFromPoints([new L(0,0,0),new L(0,0,-1)]),new Po({color:16777215,transparent:!0,opacity:.7}));r.scale.z=8,o.add(r),o.addEventListener("selectstart",()=>this.aiming.set(o,!0)),o.addEventListener("selectend",()=>{this.aiming.set(o,!1),this.teleport()}),e.add(o),this.controllers.push(o)}}async checkSupport(){const t=navigator.xr;try{this.supported=!!t&&await t.isSessionSupported("immersive-vr")}catch{this.supported=!1}return this.supported}async enter(t,e,n,s){const o=navigator.xr;if(!o)return;const r=await o.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor"]});this.renderer.xr.setReferenceSpaceType("local-floor"),await this.renderer.xr.setSession(r),this.active=!0,this.floorY=e.y,this.walkable=s,this.rig.position.copy(e),this.rig.rotation.set(0,n,0),this.marker.parent||t.add(this.marker),r.addEventListener("end",()=>{this.active=!1,this.marker.visible=!1,this.rig.position.set(0,0,0),this.rig.rotation.set(0,0,0),this.onEnd()})}update(t){if(!this.active)return;this.target=null;const e=new Hl,n=new ri(new L(0,1,0),-this.floorY);for(const o of this.controllers){if(!this.aiming.get(o))continue;const r=o.matrixWorld;e.ray.origin.setFromMatrixPosition(r),e.ray.direction.set(0,0,-1).transformDirection(r);const a=new L;e.ray.intersectPlane(n,a)&&a.distanceTo(e.ray.origin)<12&&(this.target=a)}if(this.target){const o=this.walkable(this.target);this.marker.visible=!0,this.marker.position.copy(this.target).setY(this.floorY+.02),this.marker.material.color.set(o?4054167:15026253),o||(this.target=null)}else this.marker.visible=!1;this.turnCooldown-=t;const s=this.renderer.xr.getSession();if(s&&this.turnCooldown<=0)for(const o of s.inputSources){const r=o.gamepad?.axes?.[2]??0;if(Math.abs(r)>.7){this.snapTurn(r>0?-Math.PI/6:Math.PI/6),this.turnCooldown=.35;break}}}teleport(){if(!this.target)return;const t=new L;this.camera.getWorldPosition(t),this.rig.position.x+=this.target.x-t.x,this.rig.position.z+=this.target.z-t.z,this.marker.visible=!1}snapTurn(t){const e=new L;this.camera.getWorldPosition(e);const n=this.rig.position.clone().sub(e);n.applyAxisAngle(new L(0,1,0),t),this.rig.position.copy(e).add(n),this.rig.rotation.y+=t}}const my=["север","северо-восток","восток","юго-восток","юг","юго-запад","запад","северо-запад"],gy=["С","СВ","В","ЮВ","Ю","ЮЗ","З","СЗ"];class vy{constructor(t,e){this.project=t,this.mat=e,this.root=new Zt,this.items=[],this.hover=null,this.selected=null,this.ringMat=new ue({color:13867624,emissive:13141850,emissiveIntensity:.9,transparent:!0,opacity:.85}),this.root.name="massing";for(const n of t.building.blocks??[])this.addBlock(n)}addBlock(t){const e=Ou(t.footprint),n=t.height,s=t.first_floor,o=new Pn,r=new Pn,a=new Pn,l=new Pn,c=new Pn;for(let g=0;g<e.length;g++){const m=e[g],M=e[(g+1)%e.length],x=Math.hypot(M[0]-m[0],M[1]-m[1]);if(x<.3)continue;const _=[(M[0]-m[0])/x,(M[1]-m[1])/x],U=[_[1],-_[0]];for(let E=1;E<=t.levels;E++){const A=lo(t,E),S=E===t.levels?n:lo(t,E+1);o.level=E,ku(o,m,_,U,0,x,-.12,A,S)}o.level=0;const R=Math.max(2,Math.round(x/1.9));for(let E=0;E<=R;E++){const A=x*E/R,S=E===0||E===R?.7:.48;io(r,m,_,U,A-S/2,A+S/2,.1,.3,t.retail_ground?s:0,n)}for(let E=2;E<=t.levels;E++){const A=s+(E-2)*t.floor_height;io(a,m,_,U,-.14,x+.14,.14,.3,A-.12,A+.26)}t.retail_ground&&io(r,m,_,U,-.2,x+.2,.22,.3,s-.25,s+.35),io(r,m,_,U,-.16,x+.16,.16,.35,n,n+t.parapet),ku(c,m,_,U,0,x,0,0,n+t.parapet)}for(const[g,m,M]of zs(e))l.tri([e[g][0],n+.02,-e[g][1]],[e[m][0],n+.02,-e[m][1]],[e[M][0],n+.02,-e[M][1]],[0,1,0],.2),c.tri([e[g][0],n+t.parapet,-e[g][1]],[e[m][0],n+t.parapet,-e[m][1]],[e[M][0],n+t.parapet,-e[M][1]],[0,1,0]);const h=new Zt;h.name=`block-${t.id}`;const u=new Dt(o.geometry(),this.mat.glass);u.renderOrder=2;const d=new Dt(r.geometry(),this.mat.stone),f=new Dt(a.geometry(),this.mat.band),p=new Dt(l.geometry(),this.mat.slab);for(const g of[d,f,p])g.castShadow=!0,g.receiveShadow=!0;const v=new Dt(c.geometry(),this.mat.pick);v.userData.block=t.id,h.add(u,d,f,p,v),this.root.add(h),this.items.push({block:t,group:h,glass:u,pick:v,sides:xy(e),ring:null})}get blocks(){return this.items.map(t=>t.block)}item(t){return this.items.find(e=>e.block.id===t)}pickables(){return this.items.map(t=>t.pick)}occluders(){return this.items.map(t=>t.pick)}setBlockVisible(t,e){const n=this.item(t);n&&(n.group.visible=e)}setHover(t){this.hover!==t&&(this.hover=t,this.restyle())}select(t,e){this.selected=t;for(const s of this.items)s.ring&&(s.group.remove(s.ring),s.ring.geometry.dispose(),s.ring=null);const n=t?this.item(t):void 0;if(n&&e){const s=n.block,o=lo(s,e),r=e===1?s.first_floor:s.floor_height,a=new Pn,l=Ou(s.footprint);for(let c=0;c<l.length;c++){const h=l[c],u=l[(c+1)%l.length],d=Math.hypot(u[0]-h[0],u[1]-h[1]);if(d<.3)continue;const f=[(u[0]-h[0])/d,(u[1]-h[1])/d],p=[f[1],-f[0]];io(a,h,f,p,-.3,d+.3,.32,.05,o+.1,o+r-.1)}n.ring=new Dt(a.geometry(),this.ringMat),n.ring.renderOrder=3,n.group.add(n.ring)}this.restyle()}restyle(){for(const t of this.items){const e=t.block.id===this.hover||t.block.id===this.selected;t.glass.material=e?this.mat.glassHover:this.mat.glass}}center(t){if(t){const n=this.item(t).block,[s,o]=_y(n.footprint);return new L(s,n.height/2,-o)}const e=this.project.building.center??[0,0];return new L(e[0],14,-e[1])}viewPoint(t,e,n){const s=this.item(t),o=s.sides[Math.min(n,s.sides.length-1)],r=lo(s.block,e)+1.55,a=new L(o.mid[0]+o.normal[0]*.45,r,-(o.mid[1]+o.normal[1]*.45)),l=Math.atan2(-o.normal[0],o.normal[1]);return{pos:a,yaw:l}}}function lo(i,t){return t<=1?0:i.first_floor+(t-2)*i.floor_height}function Ou(i){let t=0;for(let e=0;e<i.length;e++){const[n,s]=i[e],[o,r]=i[(e+1)%i.length];t+=n*r-o*s}return t>=0?i:[...i].reverse()}function _y(i){return[i.reduce((t,e)=>t+e[0],0)/i.length,i.reduce((t,e)=>t+e[1],0)/i.length]}function xy(i){const t=new Map;for(let e=0;e<i.length;e++){const n=i[e],s=i[(e+1)%i.length],o=Math.hypot(s[0]-n[0],s[1]-n[1]);if(o<3)continue;const r=[(s[1]-n[1])/o,-(s[0]-n[0])/o],a=(Math.atan2(r[0],r[1])*180/Math.PI+360)%360,l=Math.round(a/45)%8,c=t.get(l);(!c||c.length<o)&&t.set(l,{name:my[l],short:gy[l],azimuth:a,mid:[(n[0]+s[0])/2,(n[1]+s[1])/2],normal:r,length:o})}return[...t.values()].sort((e,n)=>n.length-e.length).slice(0,4).sort((e,n)=>e.azimuth-n.azimuth)}function ku(i,t,e,n,s,o,r,a,l){const c=[t[0]+e[0]*s+n[0]*r,t[1]+e[1]*s+n[1]*r],h=[t[0]+e[0]*o+n[0]*r,t[1]+e[1]*o+n[1]*r];i.quadAuto([c[0],a,-c[1]],[h[0],a,-h[1]],[h[0],l,-h[1]],[c[0],l,-c[1]],[n[0],0,-n[1]])}function io(i,t,e,n,s,o,r,a,l,c){const h=(M,x)=>[t[0]+e[0]*M+n[0]*x,t[1]+e[1]*M+n[1]*x],u=h(s,-a),d=h(o,-a),f=h(o,r),p=h(s,r),v=(M,x)=>[M[0],x,-M[1]],g=[n[0],0,-n[1]],m=[e[0],0,-e[1]];i.quadAuto(v(p,l),v(f,l),v(f,c),v(p,c),g),i.quadAuto(v(d,l),v(u,l),v(u,c),v(d,c),[-g[0],0,-g[2]]),i.quadAuto(v(f,l),v(d,l),v(d,c),v(f,c),m),i.quadAuto(v(u,l),v(p,l),v(p,c),v(u,c),[-m[0],0,-m[2]]),i.quadAuto(v(u,c),v(d,c),v(f,c),v(p,c),[0,1,0]),i.quadAuto(v(p,l),v(f,l),v(d,l),v(u,l),[0,-1,0])}function Or(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new ce;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in o){const u=Bu(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in r){const u=r[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<r[h].length;++v)f.push(r[h][v][d]);const p=Bu(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function Bu(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new Oe(r,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){const v=h.getComponent(d,p);a.setComponent(d+u,p,v)}}else r.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const zu=.25,za=1.2,yy=.09,My=new Ft(7304056),Ha=[[15921903,44],[12172480,15],[1908515,12],[5988198,10],[2308443,7],[8003364,6],[13220250,6]];class Sy{constructor(t,e){this.root=new Zt,this.marker=null,this.levels=new Map,this.byId=new Map,this.current=null,this.carGeo=wy(),this.slabMat=new ue({color:8225158,roughness:.92}),this.wallMat=new ue({color:12170669,roughness:.9,side:we}),this.columnMat=new ue({color:13617857,roughness:.85}),this.coreMat=new ue({color:2895928,roughness:.8}),this.rampMat=new ue({color:6247496,roughness:.9,side:we}),this.spotMat=new on({vertexColors:!0,side:we,polygonOffset:!0,polygonOffsetUnits:-4}),this.carMat=new ue({vertexColors:!0,roughness:.38,metalness:.3}),this.chargerMat=new on({vertexColors:!0}),this.lineMat=new Po({color:14212580,transparent:!0,opacity:.55}),this.root.name="parking",this.root.visible=!1;for(const o of t.spots)this.byId.set(o.id,o);for(const o of t.levels)this.levels.set(o.level,this.buildLevel(o,t.spots.filter(r=>r.level===o.level)));for(const o of this.levels.values())this.rebuildCars(o);const n=()=>new Dt(new ce,new on({color:16777215,side:we,depthTest:!1,transparent:!0}));this.hoverFrame=n(),this.hoverFrame.material.opacity=.55,this.selectFrame=n(),this.hoverFrame.renderOrder=this.selectFrame.renderOrder=6,this.root.add(this.hoverFrame,this.selectFrame);const s=t.levels.find(o=>o.level===-1)?.ramps.find(o=>o.entry)?.entry;if(s){const o=document.createElement("button");o.className="pk-entry",o.type="button",o.innerHTML="<i>P</i><span>Паркинг</span>",o.title=`Подземный паркинг: ${t.summary.levels} ур., ${t.summary.total} мест`,o.addEventListener("click",a=>{a.stopPropagation(),e()});const r=new go(o);r.position.set(s[0],3,-s[1]),r.center.set(.5,1),this.marker=r}}get levelNumbers(){return[...this.levels.keys()].sort((t,e)=>e-t)}show(t){this.current=t,this.root.visible=!0;for(const[e,n]of this.levels){n.group.visible=e===t;for(const s of n.labels)s.visible=e===t}this.hoverFrame.visible=!1,this.selectFrame.visible=!1}hide(){this.root.visible=!1;for(const t of this.levels.values())for(const e of t.labels)e.visible=!1}frame(t){const e=this.levels.get(t),[n,s]=Ss(e.info.outline),o=Math.max(...e.info.outline.map(([r,a])=>Math.hypot(r-n,a-s)));return{center:new L(n,e.y,-s),radius:o}}pickables(){const t=this.current===null?null:this.levels.get(this.current);return t?[t.spots]:[]}spotAt(t){const e=this.current===null?null:this.levels.get(this.current);return!e||t.object!==e.spots||t.faceIndex==null?null:e.spotIds[Math.floor(t.faceIndex/2)]??null}update(t){for(const e of t)this.byId.set(e.id,e);for(const e of this.levels.values())this.rebuildCars(e)}style(t,e,n){const s=new Ft;for(const o of this.levels.values()){const r=o.spots.geometry.getAttribute("color");o.spotIds.forEach((a,l)=>{const c=this.byId.get(a);if(c){s.set(Je[c.status]),hf(c,t)||s.lerp(My,.9);for(let h=0;h<6;h++)r.setXYZ(l*6+h,s.r,s.g,s.b)}}),r.needsUpdate=!0}this.placeFrame(this.hoverFrame,e!==n?e:null,.18),this.placeFrame(this.selectFrame,n,.32)}placeFrame(t,e,n){const s=e===null?null:this.byId.get(e),o=s?this.levels.get(s.level):null;if(!s||!o||s.level!==this.current){t.visible=!1;return}t.geometry.dispose(),t.geometry=Ty(s.polygon,n,o.y+.06),t.visible=!0}buildLevel(t,e){const n=t.level*t.height,s=new Zt;s.visible=!1;const o=t.height-.3,r=new Dt(Va(t.outline,zu),this.slabMat);r.position.y=n-zu,r.receiveShadow=!0;const a=t.outline.map(([x,_])=>new L(x,n+.02,-_));s.add(r,new O_(new ce().setFromPoints(a),this.lineMat));const l=[],c=t.outline;for(let x=0;x<c.length;x++){const[_,U]=c[x],[R,E]=c[(x+1)%c.length];l.push(_,n,-U,R,n,-E,R,n+za,-E,_,n,-U,R,n+za,-E,_,n+za,-U)}const h=new ce;h.setAttribute("position",new Vt(l,3)),h.computeVertexNormals(),s.add(new Dt(h,this.wallMat));const u=t.columns??[];if(u.length){const x=new Dt(Or(u.map(_=>Va(_,o))),this.columnMat);x.position.y=n,x.castShadow=!0,x.receiveShadow=!0,s.add(x)}const d=[];for(const x of t.cores){const _=new Dt(Va(x.p,o),this.coreMat);_.position.y=n,_.castShadow=!0,s.add(_);const U=x.label.split("·").pop().replace(/^\s*Блок\s*/,"").trim();d.push(this.label(`<i>↕</i><b>${U}</b>`,x.label,Ss(x.p),n+t.height,"pk-core"))}for(const x of t.ramps){const _=x.entry??this.entryOf(),U=_?x.p.map(([y,N])=>Math.hypot(y-_[0],N-_[1])):x.p.map((y,N)=>N),R=[...U].sort((y,N)=>y-N),E=y=>U[y]<=R[1],A=[];for(const y of zs(x.p))for(const N of y)A.push(x.p[N][0],E(N)?n+t.height-.05:n+.02,-x.p[N][1]);const S=new ce;S.setAttribute("position",new Vt(A,3)),S.computeVertexNormals(),s.add(new Dt(S,this.rampMat)),d.push(this.label(`<i>↗</i><b>${x.label}</b>`,x.label,Ss(x.p),n+t.height*.6,"pk-ramp"))}const f=[],p=[],v=[];for(const x of e){const _=Yl(x.polygon,yy);for(const U of[[0,1,2],[0,2,3]])for(const R of U)f.push(_[R][0],n+.03,-_[R][1]),p.push(1,1,1);v.push(x.id)}const g=new ce;g.setAttribute("position",new Vt(f,3)),g.setAttribute("color",new Vt(p,3)),g.computeBoundingSphere();const m=new Dt(g,this.spotMat);m.renderOrder=2,s.add(m);const M=e.filter(x=>x.kind==="ev").map(x=>Ey(x.polygon,u,n));return M.length&&s.add(new Dt(Or(M),this.chargerMat)),d.push(this.label(`<b>Уровень ${co(t.level)}</b>`,t.name,t.outline.reduce((x,_)=>_[1]>x[1]?_:x),n+t.height,"pk-level")),s.add(...d),this.root.add(s),{info:t,y:n,group:s,spots:m,spotIds:v,cars:null,labels:d}}rebuildCars(t){t.cars&&(t.group.remove(t.cars),t.cars.dispose(),t.cars=null);const e=t.spotIds.map(l=>this.byId.get(l)).filter(l=>l?.status==="sold");if(!e.length)return;const n=new Xi(this.carGeo,this.carMat,e.length),s=new le,o=new Un,r=new L(0,1,0),a=new Ft;e.forEach((l,c)=>{const h=Hu(l.id),[u,d]=Ss(l.polygon),[f,p]=by(l.polygon),v=Math.atan2(f,p)+(h<.5?0:Math.PI);o.setFromAxisAngle(r,v),s.compose(new L(u,t.y+.02,-d),o,new L(1,1,1)),n.setMatrixAt(c,s),n.setColorAt(c,a.set(Ay(Hu(l.id*7+3))))}),n.castShadow=!0,n.receiveShadow=!0,t.cars=n,t.group.add(n)}entryOf(){for(const t of this.levels.values())for(const e of t.info.ramps)if(e.entry)return e.entry;return null}label(t,e,n,s,o){const r=document.createElement("div");r.className=`pk-pin ${o}`,r.innerHTML=t,r.title=e;const a=new go(r);return a.position.set(n[0],s,-n[1]),a.center.set(.5,1),a.visible=!1,a}}function Va(i,t){return new yc(new Fd(i.map(([e,n])=>new mt(e,n))),{depth:t,bevelEnabled:!1}).rotateX(-Math.PI/2)}function by(i){const t=[i[1][0]-i[0][0],i[1][1]-i[0][1]],e=[i[3][0]-i[0][0],i[3][1]-i[0][1]],[n,s]=Math.hypot(...t)>Math.hypot(...e)?t:e;return[n,-s]}function wy(){const i=[],t=(e,n,s,o,r,a,l)=>{const c=new an(e,n,s).translate(o,r,a),h=c.getAttribute("position").count;c.setAttribute("color",new Vt(new Array(h*3).fill(l),3)),i.push(c)};t(1.78,.6,4.4,0,.6,0,1),t(1.62,.52,2.35,0,1.15,-.2,.12),t(1.64,.07,2.15,0,1.44,-.2,1);for(const e of[-.8,.8])for(const n of[-1.42,1.38])t(.26,.62,.62,e,.31,n,.04);return Or(i)}function Ey(i,t,e){const n=[(i[0][0]+i[1][0])/2,(i[0][1]+i[1][1])/2],s=[(i[2][0]+i[3][0])/2,(i[2][1]+i[3][1])/2],o=p=>Math.min(1/0,...t.map(v=>Math.hypot(Ss(v)[0]-p[0],Ss(v)[1]-p[1]))),[r,a]=o(n)>=o(s)?[n,s]:[s,n],l=Math.hypot(a[0]-r[0],a[1]-r[1])||1,c=[(a[0]-r[0])/l,(a[1]-r[1])/l],h=[r[0]+c[0]*.25,r[1]+c[1]*.25],u=Math.atan2(c[0],-c[1]),d=(p,v,g,m,M,x)=>{const _=new an(p,v,g).translate(0,m,M),U=_.getAttribute("position").count;return _.setAttribute("color",new Vt(Array.from({length:U},()=>x).flat(),3)),_};return Or([d(.42,1.35,.22,.675,0,[.16,.17,.19]),d(.3,.32,.03,1,.125,[.29,.64,1])]).rotateY(u).translate(h[0],e,-h[1])}function Yl(i,t){const e=i[1][0]-i[0][0],n=i[1][1]-i[0][1],s=i[3][0]-i[0][0],o=i[3][1]-i[0][1],r=Math.hypot(e,n)||1,a=Math.hypot(s,o)||1,l=[e/r*t,n/r*t],c=[s/a*t,o/a*t];return[[i[0][0]+l[0]+c[0],i[0][1]+l[1]+c[1]],[i[1][0]-l[0]+c[0],i[1][1]-l[1]+c[1]],[i[2][0]-l[0]-c[0],i[2][1]-l[1]-c[1]],[i[3][0]+l[0]-c[0],i[3][1]+l[1]-c[1]]]}function Ty(i,t,e){const n=Yl(i,-t*.5),s=Yl(i,t*.5),o=[];for(let a=0;a<4;a++){const l=(a+1)%4,c=[n[a],n[l],s[l],s[a]];for(const h of[0,1,2,0,2,3])o.push(c[h][0],e,-c[h][1])}const r=new ce;return r.setAttribute("position",new Vt(o,3)),r}function Hu(i){let t=(i^2654435769)>>>0;return t=Math.imul(t^t>>>16,2246822507)>>>0,t=Math.imul(t^t>>>13,3266489909)>>>0,((t^t>>>16)>>>0)/4294967296}function Ay(i){const t=Ha.reduce((n,[,s])=>n+s,0);let e=0;for(const[n,s]of Ha)if(e+=s/t,i<e)return n;return Ha[0][0]}const Ga=1.6;class Cy{constructor(t,e){this.canvasHost=t,this.events=e,this.scene=new kh,this.rig=new Zt,this.sky=new Ao,this.sun=new M1(16774112,3),this.hemi=new v1(14674421,12102031,.9),this.envRT=null,this.skyScene=new kh,this.building=null,this.massing=null,this.labels=new O1,this.placeObjs=[],this.lastHoverBlock=null,this.lastHoverSpot=null,this.parking=null,this.contextGroup=null,this.parkingBg=new Ft(1382429),this.placeFilter=null,this.blockViews=new Map,this.openBlockId=null,this.occluders=null,this.mode="building",this.clock=new Hd,this.pointer=new mt,this.pointerScreen={x:0,y:0},this.pointerDirty=!1,this.pointerInside=!1,this.down=null,this.tween=null,this.raycaster=new Hl,this.lastHoverFloor=null,this.lastHoverUnit=null,this.walkFloorN=null,this.lat=41.3,this.lon=69.29,this.mobile=matchMedia("(pointer: coarse)").matches,this.skyLayers=new j1,this.precip=new q1,this.lamps=null,this.trees=null,this.sunAlt=30,this.hour=15,this.atmo={cover:0,rain:0,snow:0,snowCover:0,wet:0},this.atmoTarget={cover:0,rain:0,snow:0,snowCover:0,wet:0},this.lightsOn=0,this.envDirty=!1,this.envAt=0,this.roomLights=[],this.roomLamps=new Zt,this.roomLampMat=new on({color:16777215}),this.interiorStyle="scandi",this.furnished=null,this.walkLayout=null,this.walkUnit=null,this.walkRects=[],this.sunPath=new Zt,this.sunPathDay="",this.sunBall=null,this.sunPathOn=!1,this.onPointerMove=l=>{const c=this.renderer.domElement.getBoundingClientRect();this.pointer.set((l.clientX-c.left)/c.width*2-1,-((l.clientY-c.top)/c.height)*2+1),this.pointerScreen={x:l.clientX-c.left,y:l.clientY-c.top},this.pointerInside=l.pointerType==="mouse",this.pointerDirty=!0},this.onPointerDown=l=>{this.down={x:l.clientX,y:l.clientY,t:performance.now()}},this.onPointerUp=l=>{if(!this.down)return;const c=Math.hypot(l.clientX-this.down.x,l.clientY-this.down.y),h=performance.now()-this.down.t;if(this.down=null,c>6||h>600||this.mode==="walk"||this.mode==="view")return;if(this.onPointerMove(l),this.mode==="parking"){const d=this.pickSpot();d!==null&&this.events.clickSpot(d);return}if(this.massing&&(this.mode==="building"||this.mode==="block")){const d=this.pickBlock();d&&this.events.clickBlock(d);return}const u=this.pick();this.mode==="building"&&u.floor!==null?this.events.clickFloor(u.floor):this.mode==="floor"&&u.unit!==null&&this.events.clickUnit(u.unit)},this.loop=()=>{const l=Math.min(this.clock.getDelta(),.1);if(this.tween){this.tween.t+=l/this.tween.d;const h=this.tween.t>=1?1:1-Math.pow(1-this.tween.t,3);this.camera.position.lerpVectors(this.tween.from[0],this.tween.to[0],h),this.controls.target.lerpVectors(this.tween.from[1],this.tween.to[1],h),this.tween.t>=1&&(this.tween=null)}this.xr.active?this.xr.update(l):this.mode==="walk"||this.mode==="view"?this.walk.update(l):this.controls.update(),this.xr.active||this.processHover();const c=this.mode==="walk"&&this.walkFloorN!==null&&this.building?this.building.floorCenterWorld(this.walkFloorN):this.controls.target;this.sun.target.position.set(c.x,this.mode==="building"?0:c.y,c.z),this.sun.position.copy(this.sun.target.position).addScaledVector(this.mode==="parking"?Ry:this.sunDir,650),this.stepAtmosphere(l),this.updateSunPathVisibility(),this.parking?.marker&&(this.parking.marker.visible=this.mode==="building"||this.mode==="block"),this.renderer.xr.isPresenting?this.renderer.render(this.scene,this.camera):this.composer.render(l),this.labels.domElement.style.display=this.mode==="walk"?"none":"",this.mode!=="walk"&&this.labels.render(this.scene,this.camera)},this.sunDir=new L(.3,.8,.5).normalize(),this.resize=()=>{const l=this.canvasHost.clientWidth,c=this.canvasHost.clientHeight;this.renderer.setSize(l,c),this.composer?.setPixelRatio(this.renderer.getPixelRatio()),this.composer?.setSize(l,c),this.labels.setSize(l,c),this.camera.aspect=l/c,this.applyViewShift()},this.renderer=new N_({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.mobile?1.6:2)),this.renderer.outputColorSpace=Xe,this.renderer.toneMapping=Jl,this.renderer.toneMappingExposure=.92,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ju,this.renderer.xr.enabled=!0,t.appendChild(this.renderer.domElement),this.labels.domElement.className="labels-layer",t.appendChild(this.labels.domElement),this.renderer.domElement.style.touchAction="none",this.camera=new mn(38,1,Vu,6e3),this.rig.add(this.camera),this.scene.add(this.rig),this.mat=dy(),this.sky.scale.setScalar(1e4);const n=this.sky.material.uniforms;n.turbidity.value=5.5,n.rayleigh.value=1.1,n.mieCoefficient.value=.004,n.mieDirectionalG.value=.82,this.scene.add(this.sky);const s=new Ao;s.scale.setScalar(1e3),Object.assign(s.material.uniforms.turbidity,{value:5.5}),Object.assign(s.material.uniforms.rayleigh,{value:1.1}),Object.assign(s.material.uniforms.mieCoefficient,{value:.004}),this.skyScene.add(s),this.pmrem=new Fl(this.renderer),this.sun.castShadow=!0;const o=this.sun.shadow;o.mapSize.set(this.mobile?2048:4096,this.mobile?2048:4096),o.camera.left=-190,o.camera.right=190,o.camera.top=190,o.camera.bottom=-190,o.camera.near=10,o.camera.far=1400,o.bias=-3e-4,o.normalBias=.25,o.camera.updateProjectionMatrix(),this.scene.add(this.sun,this.sun.target,this.hemi),this.scene.fog=new fc(14212578,900,3200),this.sky.renderOrder=-3,this.scene.add(this.skyLayers.stars,this.skyLayers.clouds,this.precip.group),this.skyScene.add(this.skyLayers.cloudsEnv);for(let l=0;l<3;l++){const c=new x1(16763279,0,8,2);this.roomLights.push(c),this.scene.add(c)}this.roomLamps.visible=!1,this.scene.add(this.roomLamps);const r=new hn(1,1,{type:Mn,samples:this.mobile?0:4});this.composer=new G1(this.renderer,r),this.composer.addPass(new W1(this.scene,this.camera)),this.gtao=new kn(this.scene,this.camera,256,256),this.gtao.enabled=!1,this.gtao.blendIntensity=.9,this.gtao.updateGtaoMaterial({radius:.45,distanceExponent:1.4,thickness:1,scale:1,samples:16}),this.gtao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}),this.composer.addPass(this.gtao),this.bloom=new Os(new mt(256,256),.15,.35,1.5),this.composer.addPass(this.bloom),this.composer.addPass(new Y1),this.controls=new w1(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=xn.degToRad(86),this.controls.minDistance=12,this.controls.maxDistance=900,this.controls.autoRotateSpeed=.35,this.controls.addEventListener("start",()=>{this.controls.autoRotate=!1,this.tween=null,this.events.interacted()}),this.walk=new fy(this.camera,this.renderer.domElement),this.xr=new py(this.renderer,this.rig,this.camera),this.xr.onEnd=()=>{this.camera.position.copy(this.walk.pos),this.events.xrEnded()};const a=this.renderer.domElement;a.addEventListener("pointermove",this.onPointerMove),a.addEventListener("pointerdown",this.onPointerDown),a.addEventListener("pointerup",this.onPointerUp),a.addEventListener("pointerleave",()=>{this.pointerInside=!1,this.pointerDirty=!0}),window.addEventListener("resize",this.resize),this.resize(),this.renderer.setAnimationLoop(this.loop)}load(t,e,n){this.lat=t.location.lat,this.lon=t.location.lon;const s=t.building.palette;s?.stone&&this.mat.stone.color.set(s.stone),s?.band&&this.mat.band.color.set(s.band),s?.glass&&this.mat.glass.color.set(s.glass);let o,r;if(t.building.mode==="massing")this.massing=new vy(t,this.mat),this.scene.add(this.massing.root),r=this.massing.blocks.map(u=>u.footprint),o=Py(r.flat());else{this.building=new Ru(t,n,this.mat),this.scene.add(this.building.root);const u=n.get(t.building.floors[0].type).bbox,d=t.building.azimuth_deg;o=[[u[0],u[1]],[u[2],u[1]],[u[2],u[3]],[u[0],u[3]]].map(([f,p])=>Pr(f,p,d)),r=[o]}const{group:a,occluders:l,trees:c,ground:h}=sy(e,this.mat,o,r);this.occluders=l,this.trees=c,this.contextGroup=a,this.scene.add(a),this.lamps=new Gl(e,o,this.mat.lampPole,h),this.scene.add(this.lamps.group),this.scene.add(this.sunPath),this.sunPathDay="",this.buildPlaces(e.places??[]),this.flyToBuilding(!0),this.controls.autoRotate=!0}setSun(t,e){const n=Fa(wr(t,e),this.lat,this.lon),[s,o,r]=Oa(n);this.sunDir.set(s,r,-o).normalize(),this.sunAlt=n.altitude,this.hour=e,this.buildSunPath(t),this.placeSunBall();const a=n.altitude<-3?new L(s,-.06,-o).normalize():this.sunDir;this.sky.material.uniforms.sunPosition.value.copy(a),this.skyScene.children[0].material.uniforms.sunPosition.value.copy(a),this.applyLighting(),this.envDirty=!0}setAtmosphere(t,e){const n=this.atmoTarget;n.cover=_f[e],n.rain=e==="rain"?1:0,n.snow=e==="snow"?1:0,n.snowCover=t==="winter"||e==="snow"?e==="rain"?.35:1:0,n.wet=e==="rain"?1:t==="winter"&&e!=="snow"?.2:0,this.trees?.setSeason(t);const s={winter:[12104358,9276012,8226666,9605231],spring:[12433824,8827740,7315552,9420640],summer:[13222580,9086570,7314026,9681002],autumn:[13023648,10852958,8819038,10986853]},[o,r,a,l]=s[t];this.mat.ground.color.set(o),this.mat.green.color.set(r),this.mat.pitch.color.set(a),this.mat.lawn.color.set(l)}applyLighting(){const t=xn.smoothstep,e=this.sunAlt,{cover:n,rain:s,snow:o}=this.atmo,r=t(e,-4,8),a=1-r;this.sun.intensity=3.6*t(e,-1,12)*(1-.88*n),this.sun.color.setHSL(.09,.6*(1-.6*n),.62+.3*t(e,0,35)),this.hemi.intensity=(.12+.38*r)*(1+.8*n*r)+(.16+.22*this.atmo.snowCover)*a,this.hemi.color.setRGB(.87,.91,.96).lerp(new Ft(.42,.5,.72),a),this.scene.environmentIntensity=(.18+.32*r)*(1-.3*n),this.renderer.toneMappingExposure=(.6+.22*r)*(1+.18*n*r)*(1-.14*this.atmo.snowCover*r);const l=this.sky.material.uniforms,c=this.skyScene.children[0].material.uniforms;for(const m of[l,c])m.turbidity.value=5.5+9*n,m.rayleigh.value=1.1*(1-.7*n);const h=Math.max(s*.75,o,n*.25),u=this.scene.fog;u.near=xn.lerp(900,70,h),u.far=xn.lerp(3200,950,h);const d=(.1+.62*r)*(1-.22*s);u.color.setHSL(.58,.15,.25+.6*r).lerp(new Ft(.03,.045,.085),a*(1-n)),u.color.lerp(new Ft(d*.97,d,d*1.04),n);const f=.04+.96*r,p=t(e,-3,2)*(1-t(e,4,14)),v=this.skyLayers.uniforms;v.uCover.value=n,v.uLight.value.setRGB(1,.98,.95).lerp(new Ft(1,.62,.42),p*(1-n)).multiplyScalar(f*(1-.35*s-.15*o)),v.uShade.value.copy(v.uLight.value).multiplyScalar(.5-.15*s),v.uHorizon.value.copy(u.color),v.uSunDir.value.copy(this.sunDir),this.skyLayers.setStars(this.mode==="parking"?0:(1-t(e,-14,-3))*(1-n)**2,this.renderer.getPixelRatio()),this.lightsOn=xn.clamp(1-t(e,-3,7)+.2*n*r,0,1),bi.uNight.value=this.lightsOn,bi.uLit.value=xf(this.hour),this.lamps?.setOn(xn.clamp(1-t(e,-2,5)+.35*s,0,1)),this.bloom.strength=.1+.38*this.lightsOn,this.bloom.threshold=xn.lerp(1.5,this.mode==="walk"?1.3:.9,this.lightsOn),this.mode==="parking"&&(this.sun.intensity=1.9,this.sun.color.setRGB(1,.98,.95),this.hemi.intensity=1.55,this.hemi.color.setRGB(.93,.95,.98),this.scene.environmentIntensity=0,this.renderer.toneMappingExposure=.85,u.near=1e5,u.far=2e5,this.bloom.strength=.08,this.bloom.threshold=1.4);const g=this.mode==="walk"?this.lightsOn:0;for(const m of this.roomLights)m.intensity=9*g;this.furnished?.setLight(g),this.roomLampMat.color.setRGB(1,.85,.65).multiplyScalar(.8+2.5*g)}stepAtmosphere(t){const e=this.atmo,n=this.atmoTarget;let s=!1;for(const a of Object.keys(e)){const l=a==="snowCover"||a==="wet"?.9:1.6,c=n[a]-e[a];if(Math.abs(c)<.001){e[a]!==n[a]&&(s=!0),e[a]=n[a];continue}e[a]+=c*(1-Math.exp(-t*l)),s=!0}bi.uSnow.value=e.snowCover,bi.uWet.value=e.wet,bi.uTime.value+=t,s&&(this.envDirty=!0),this.applyLighting();const o=.15+.85*xn.smoothstep(this.sunAlt,-4,8);this.precip.update(t,this.camera,e.rain,e.snow,o,this.renderer.getPixelRatio());const r=performance.now();this.envDirty&&r-this.envAt>250&&(this.envDirty=!1,this.envAt=r,this.updateEnv())}updateEnv(){const t=this.pmrem.fromScene(this.skyScene,0,.1,2e3);this.envRT?.dispose(),this.envRT=t,this.scene.environment=t.texture}sunMinutes(t,e,n,s){if(!this.building||!t.length)return Dy(n,this.lat,this.lon);const o=new Map;for(const a of t){const l=Math.round(a.azimuth/10);o.has(l)||o.set(l,[]),o.get(l).push(a)}const r=[];for(const a of o.values()){const l=[...new Set([0,Math.floor(a.length/2),a.length-1])].map(c=>a.at(c));for(const c of l){const h=this.building.planToWorld(c.mid[0]+c.normal[0]*.6,c.mid[1]+c.normal[1]*.6,e+1.4),[u,d]=Pr(c.normal[0],c.normal[1],s);r.push({p:h,e:u,n:d})}}return this.sunHoursFor(r,n)}sunOccluders(){const t=[];return this.occluders&&t.push(this.occluders),this.massing&&t.push(...this.massing.occluders()),this.building&&t.push(...this.building.occluders()),t}sunHoursFor(t,e){const n=Wl(e,this.lat,this.lon),s={minutes:0,intervals:[],sunrise:n.sunrise,sunset:n.sunset,dayMinutes:n.dayLength*60};if(n.sunrise===null||n.sunset===null||!t.length)return s;const o=this.sunOccluders(),r=new Hl;r.far=800;const a=new L,l=p=>{const v=Fa(wr(e,p),this.lat,this.lon);if(v.altitude<1)return!1;const[g,m,M]=Oa(v),x=Math.hypot(g,m)||1;a.set(g,M,-m).normalize();for(const _ of t)if(!((_.e*g+_.n*m)/x<.12)&&(r.set(_.p,a),r.intersectObjects(o,!1).length===0))return!0;return!1},c=5/60,h=(p,v,g)=>{for(let m=0;m<4;m++){const M=(p+v)/2;l(M)===g?p=M:v=M}return(p+v)/2};let u=n.sunrise,d=l(u),f=d?u:null;for(;u<n.sunset;){const p=Math.min(u+c,n.sunset),v=l(p);if(v!==d){const g=h(u,p,d);v?f=g:f!==null&&(s.intervals.push([f,g]),f=null)}d=v,u=p}return f!==null&&s.intervals.push([f,n.sunset]),s.minutes=Math.round(s.intervals.reduce((p,[v,g])=>p+(g-v)*60,0)),s}setSunPathVisible(t){if(this.sunPathOn=t,this.updateSunPathVisibility(),t&&(this.mode==="building"||this.mode==="block")){const{center:e,radius:n}=this.sunPathFrame(),s=new L(e.x,n*.38,e.z),o=this.camera.position.clone().sub(this.controls.target).setY(0);o.lengthSq()<.001&&o.set(.36,0,.93),o.normalize();const r=this.canvasHost.clientWidth<this.canvasHost.clientHeight,a=n*(r?4.2:2.9);this.controls.autoRotate=!1,this.moveCamera(s.clone().addScaledVector(o,a).setY(n*.95),s,1.1)}}updateSunPathVisibility(){this.sunPath.visible=this.sunPathOn&&(this.mode==="building"||this.mode==="block"||this.mode==="floor")}buildSunPath(t){if(this.sunPathDay===t&&this.sunPath.children.length)return;this.sunPathDay=t;for(const p of[...this.sunPath.children])this.sunPath.remove(p),p instanceof go&&p.element.remove(),p.geometry?.dispose();const e=Wl(t,this.lat,this.lon);if(e.sunrise===null||e.sunset===null)return;const{center:n,radius:s}=this.sunPathFrame(),o=p=>{const[v,g,m]=Oa(Fa(wr(t,p),this.lat,this.lon));return new L(n.x+v*s,Math.max(m,0)*s,n.z-g*s)},r=[];for(let p=e.sunrise;p<=e.sunset;p+=1/30)r.push(o(p));r.push(o(e.sunset));const a=Math.max(s*.006,.45),l=new Dt(new wc(new Pd(r),240,a,8),new on({color:new Ft(1,.8,.55).multiplyScalar(1.3),transparent:!0,opacity:.85,fog:!1}));l.renderOrder=6,this.sunPath.add(l);const c=new Yn(a*2.6,12,8),h=new on({color:15910814,fog:!1}),u=(p,v,g)=>{const m=document.createElement("div");m.className=`sun-tick ${g}`,m.textContent=p;const M=new go(m);M.position.copy(v),M.center.set(.5,1.4),this.sunPath.add(M)};for(let p=Math.ceil(e.sunrise);p<=Math.floor(e.sunset);p++){const v=o(p),g=new Dt(c,h);g.position.copy(v),this.sunPath.add(g),p%2===0&&Math.abs(p-e.noon)>.6&&u(`${p}:00`,v,"")}u(`восход ${Wi(e.sunrise)}`,o(e.sunrise),"edge"),u(`закат ${Wi(e.sunset)}`,o(e.sunset),"edge");const d=o(e.noon),f=new Vr(new ce().setFromPoints([new L(n.x,0,n.z),d]),new Po({color:15910814,transparent:!0,opacity:.25,fog:!1}));this.sunPath.add(f),u(`полдень ${Wi(e.noon)} · ${Math.round(e.noonAltitude)}°`,d,"noon"),this.sunBall=new Dt(new Yn(a*7,24,16),new on({color:new Ft(1,.85,.55).multiplyScalar(3),fog:!1})),this.sunPath.add(this.sunBall),this.placeSunBall()}sunPathFrame(){if(this.massing){const e=this.massing.center(),n=Math.max(...this.massing.blocks.flatMap(s=>s.footprint.map(([o,r])=>Math.hypot(o-e.x,-r-e.z))));return{center:new L(e.x,0,e.z),radius:Math.max(n*1.25,120)}}const t=this.building?.height??80;return{center:new L(0,0,0),radius:Math.max(t*1.15,90)}}placeSunBall(){if(!this.sunBall)return;const{center:t,radius:e}=this.sunPathFrame();this.sunBall.position.set(t.x,0,t.z).addScaledVector(this.sunDir,e),this.sunBall.visible=this.sunAlt>-.5}get currentMode(){return this.mode}flyToBuilding(t=!1){if(this.leaveParking(),this.massing){this.leaveWalk(),this.closeBlockBuilding(),this.mode="building",this.setShadowRange("building"),this.applyViewShift(),this.massing.select(null,null);const r=this.massing.center(),a=this.canvasHost.clientWidth<this.canvasHost.clientHeight,l=Math.max(...this.massing.blocks.flatMap(u=>u.footprint.map(([d,f])=>Math.hypot(d-r.x,-f-r.z)))),c=(a?1.6:1)*Math.max(l*3.2,430),h=r.clone().add(new L(.38*c,.62*c,.72*c));this.moveCamera(h,r,t?0:1.1),this.controls.minDistance=25;return}if(!this.building)return;this.leaveWalk(),this.mode="building",this.setShadowRange("building"),this.applyViewShift(),this.building.showAll();const e=this.building.height,n=this.canvasHost.clientWidth<this.canvasHost.clientHeight,s=new L(0,e*(n?.5:.36),0),o=new L(95,e*1,245);n&&o.multiplyScalar(1.75).setY(e*1.15),this.moveCamera(o,s,t?0:1.1),this.controls.minDistance=30}showFloor(t,e,n){if(!this.building)return;const s=this.mode;this.leaveWalk(),this.mode="floor",this.setShadowRange("floor"),this.applyViewShift(),this.controls.autoRotate=!1,this.building.cutAt(t,e,n);const o=this.building.floorCenterWorld(t),r=this.building.floor(t),a=Math.max(r.type.bbox[2]-r.type.bbox[0],r.type.bbox[3]-r.type.bbox[1]),l=this.camera.position.clone().sub(this.controls.target).setY(0);(l.lengthSq()<.001||s==="walk")&&l.set(.36,0,.93),l.normalize();const c=xn.degToRad(38),h=2*Math.atan(Math.tan(c/2)*this.camera.aspect),u=a*.62/Math.tan(Math.min(c,h)/2),d=Math.max(a*2.2,u),f=o.clone().add(l.multiplyScalar(d*.5)).setY(o.y+d*.87);this.moveCamera(f,o,.9),this.controls.minDistance=12}updateUnits(t,e,n,s){this.building?.updateUnits(t),this.building?.styleUnits(e,n,s)}styleUnits(t,e,n){this.building?.styleUnits(t,e,n)}enterWalk(t,e,n){if(!this.building||!t.polygon)return;const s=this.building.floor(t.floor);this.mode="walk",this.setShadowRange("walk"),this.applyViewShift(),this.walkFloorN=t.floor,this.controls.enabled=!1,this.controls.autoRotate=!1,this.tween=null,this.building.walkIn(t.floor,e);const o=s.info.elevation+this.building.slabThickness;this.walkUnit=t,this.walkLayout=ex(s.type,t),this.buildFurnishing(),this.gtao.enabled=!0;const r=this.walkRects,a=this.startPoint(t,s.type,r),l=this.building.planToWorld(a[0],a[1],o+Ga),c=this.bestYaw(a,r,n,o+Ga),h=this.building,u=o+Ga,d=t.polygon,f=(_,U)=>Gu(_,U,d)&&Wu(_,U,d)>.15;let p=a;this.walk.start(l,c,_=>{const[U,R]=h.worldToPlan(_),[E,A]=Ba(U,R,.24,this.walkRects);return f(E,A)&&(p=[E,A]),h.planToWorld(p[0],p[1],u)}),this.camera.near=.05,this.camera.fov=this.mobile?72:66,this.camera.updateProjectionMatrix(),this.placeRoomLights(t,s.type,o,s.info.elevation+s.info.height),this.roomLamps.visible=this.interiorStyle==="none";const[v,g,m,M]=s.type.bbox,x=this.building.planToWorld((v+m)/2,(g+M)/2,0);this.precip.setExclusion({cx:x.x,cz:x.z,hx:(m-v)/2+.3,hz:(M-g)/2+.3,rot:-this.building.root.rotation.y})}setInteriorStyle(t){if(this.interiorStyle=t,this.mode!=="walk"||!this.building)return;this.buildFurnishing(),this.roomLamps.visible=t==="none";const[e,n]=this.building.worldToPlan(this.walk.pos),[s,o]=Ba(e,n,.24,this.walkRects);this.walk.pos.copy(this.building.planToWorld(s,o,this.walk.pos.y))}get unitRooms(){return this.walkLayout?.rooms??[]}buildFurnishing(){if(!this.building||!this.walkUnit||!this.walkLayout||this.walkFloorN===null)return;this.clearFurnishing();const t=this.building.floor(this.walkFloorN),e=t.info.elevation+this.building.slabThickness,n=t.info.height-this.building.slabThickness,s=this.building.collisionRects(this.walkFloorN),o=this.interiorStyle;o!=="none"?(this.furnished=Ix(this.walkLayout,o,n),this.furnished.group.position.y=e,this.building.root.add(this.furnished.group),this.mat.wallInt.color.set($d(o).wallColor)):this.mat.wallInt.color.set(15460062),this.building.setRoomLabelsVisible(o==="none"),this.walkRects=[...s,...this.furnished?.colliders??[]]}clearFurnishing(){this.furnished&&(this.furnished.group.parent?.remove(this.furnished.group),this.furnished.dispose(),this.furnished=null),this.mat.wallInt.color.set(15460062)}placeRoomLights(t,e,n,s){for(const l of[...this.roomLamps.children])this.roomLamps.remove(l),l.geometry.dispose();const o=t.polygon,r=(l,c)=>{let h=!1;for(let u=0,d=o.length-1;u<o.length;d=u++)o[u][1]>c!=o[d][1]>c&&l<(o[d][0]-o[u][0])*(c-o[u][1])/(o[d][1]-o[u][1]+1e-12)+o[u][0]&&(h=!h);return h},a=e.rooms.filter(l=>l.area>=4&&r(l.x,l.y)).sort((l,c)=>c.area-l.area).slice(0,3);this.roomLights.forEach((l,c)=>{const h=a[c];if(!h||!this.building){l.position.set(0,-1e3,0);return}l.position.copy(this.building.planToWorld(h.x,h.y,s-.45));const u=new Dt(new ns(.22,.26,.06,20),this.roomLampMat);u.position.copy(this.building.planToWorld(h.x,h.y,s-.06)),this.roomLamps.add(u)}),this.roomLamps.visible=!0}bestYaw(t,e,n,s){let o=-1/0,r=[0,1];for(let c=0;c<24;c++){const h=c/24*Math.PI*2,u=Math.cos(h),d=Math.sin(h);let f=15;for(const[g,m,M,x]of e){const _=(g-t[0])/(u||1e-9),U=(M-t[0])/(u||1e-9),R=(m-t[1])/(d||1e-9),E=(x-t[1])/(d||1e-9),A=Math.max(Math.min(_,U),Math.min(R,E));Math.min(Math.max(_,U),Math.max(R,E))>=Math.max(A,0)&&A<f&&(f=Math.max(A,0))}const p=n.some(g=>g.normal[0]*u+g.normal[1]*d>.7)?2.5:0,v=Math.min(f,9)+p;v>o&&(o=v,r=[u,d])}const a=this.building.planToWorld(t[0],t[1],s),l=this.building.planToWorld(t[0]+r[0],t[1]+r[1],s);return Math.atan2(-(l.x-a.x),-(l.z-a.z))}startPoint(t,e,n){const s=t.polygon,o=(f,p)=>{let v=!1;for(let g=0,m=s.length-1;g<s.length;m=g++)s[g][1]>p!=s[m][1]>p&&f<(s[m][0]-s[g][0])*(p-s[g][1])/(s[m][1]-s[g][1]+1e-12)+s[g][0]&&(v=!v);return v};let r=1/0,a=1/0,l=-1/0,c=-1/0;for(const[f,p]of s)r=Math.min(r,f),a=Math.min(a,p),l=Math.max(l,f),c=Math.max(c,p);const h=n.filter(([f,p,v,g])=>v>r-3&&f<l+3&&g>a-3&&p<c+3);let u=[(r+l)/2,(a+c)/2],d=-1;for(let f=r+.3;f<l;f+=.3)for(let p=a+.3;p<c;p+=.3){if(!o(f,p))continue;let v=1/0;for(const[g,m,M,x]of h){const _=Math.max(g-f,0,f-M),U=Math.max(m-p,0,p-x);if(v=Math.min(v,Math.hypot(_,U)),v<=d)break}v>d&&(d=v,u=[f,p])}return u}selectBlock(t,e){if(!this.massing)return;const n=this.mode==="view"||this.mode==="floor"||this.mode==="walk"||this.mode==="parking";this.leaveParking(),this.leaveWalk(),this.closeBlockBuilding(),this.mode="block",this.setShadowRange("building"),this.applyViewShift(),this.controls.autoRotate=!1,this.massing.select(t,e);const s=this.massing.center(t),o=this.massing.item(t).block,r=this.camera.position.clone().sub(this.controls.target).setY(0);(r.lengthSq()<.001||n)&&r.set(.5,0,.86),r.normalize();const a=Math.max(70,o.height*2.4),l=s.clone().add(r.multiplyScalar(a)).setY(s.y+a*.55);this.moveCamera(l,s,.9)}openBlockFloor(t,e,n,s){if(this.massing){if(this.openBlockId!==t.id){this.closeBlockBuilding();let o=this.blockViews.get(t.id);if(!o){const r={building:{mode:"plans",style:"plain",azimuth_deg:t.azimuth_deg,slab:t.slab,crown_height:t.crown_height,height:t.height,floors:t.floors,assumed:[]}};o=new Ru(r,new Map(Object.entries(t.floor_types)),this.mat),o.root.position.set(t.origin[0],0,-t.origin[1]),this.blockViews.set(t.id,o)}this.scene.add(o.root),this.massing.setBlockVisible(t.id,!1),this.building=o,this.openBlockId=t.id}this.showFloor(e,n,s)}}closeBlockBuilding(){if(!this.openBlockId||!this.massing)return;const t=this.blockViews.get(this.openBlockId);t&&this.scene.remove(t.root),this.massing.setBlockVisible(this.openBlockId,!0),this.openBlockId=null,this.building=null}setBlockFloor(t,e){this.massing?.select(t,e)}blockSides(t){return this.massing?.item(t)?.sides??[]}showView(t,e,n){if(!this.massing)return;const{pos:s,yaw:o}=this.massing.viewPoint(t,e,n);this.mode="view",this.setShadowRange("building"),this.applyViewShift(),this.controls.enabled=!1,this.controls.autoRotate=!1,this.tween=null,this.walk.start(s,o,()=>s.clone()),this.camera.near=.3,this.camera.fov=this.mobile?70:62,this.camera.updateProjectionMatrix()}blockSunMinutes(t,e,n){if(!this.massing)return[];const s=this.massing.item(t),o=lo(s.block,e)+1.4;return s.sides.map(r=>{const a=[-r.normal[1],r.normal[0]],l=[-.35,0,.35].map(c=>({p:new L(r.mid[0]+r.normal[0]*.7+a[0]*r.length*c,o,-(r.mid[1]+r.normal[1]*.7+a[1]*r.length*c)),e:r.normal[0],n:r.normal[1]}));return this.sunHoursFor(l,n)})}buildPlaces(t){for(const e of t){const n=document.createElement("div"),s=ao[e.category];if(n.className=`pin${e.known?" known":""} cat-${e.category}`,n.style.setProperty("--c",s.color),n.innerHTML=`<i>${s.glyph}</i><b></b><span>${qd(e.walk_min,e.dist)}</span>`,n.querySelector("b").textContent=e.name,e.logo){const r=document.createElement("img");r.alt="",r.decoding="async",r.src=ql(e.logo),r.onload=()=>{const a=document.createElement("i");a.className="lg",a.appendChild(r),n.querySelector("i").replaceWith(a),n.classList.add("has-logo")}}const o=new go(n);o.position.set(e.x,e.category==="metro"?4:10,-e.y),o.center.set(.5,1),this.scene.add(o),this.placeObjs.push({obj:o,place:e})}}flyToPlaces(){const t=this.placeObjs.filter(c=>c.obj.visible);if(!t.length||this.mode==="view"||this.mode==="walk")return;const e=this.massing?this.massing.center():this.controls.target.clone(),n=t.filter(c=>c.place.dist<=700),s=(n.length?n:t).map(c=>new L(c.place.x,0,-c.place.y)).concat([e.clone().setY(0)]),o=s.reduce((c,h)=>c.add(h),new L).multiplyScalar(1/s.length),r=Math.max(...s.map(c=>c.distanceTo(o)),200),a=this.canvasHost.clientWidth<this.canvasHost.clientHeight,l=r*(a?3.4:2.3);this.controls.autoRotate=!1,this.moveCamera(o.clone().add(new L(.18*l,1*l,.42*l)),o.clone(),1.2)}setPlaceFilter(t,e,n){this.placeFilter=[t,e,n];const s=n&&this.mode!=="parking";for(const{obj:o,place:r}of this.placeObjs)o.visible=s&&t.includes(r.category)&&(e||r.known)}loadParking(t){t.levels.length&&(this.parking=new Sy(t,()=>this.events.clickParking()),this.scene.add(this.parking.root),this.parking.marker&&this.scene.add(this.parking.marker))}get parkingLevels(){return this.parking?.levelNumbers??[]}showParking(t){if(!this.parking)return;const e=this.mode==="parking",n=e?this.controls.target.y:0;this.leaveWalk(),this.closeBlockBuilding(),this.massing?.select(null,null),this.mode="parking",this.setShadowRange("building"),this.applyViewShift(),this.controls.autoRotate=!1,this.setXray(!0),this.parking.show(t);const{center:s,radius:o}=this.parking.frame(t);if(e){const r=s.y-n;this.moveCamera(this.camera.position.clone().setY(this.camera.position.y+r),this.controls.target.clone().setY(s.y),.6)}else{const r=this.canvasHost.clientWidth<this.canvasHost.clientHeight,a=Math.max(o*2.6,100)*(r?2.1:1),l=s.clone().add(new L(.3*a,.78*a,.55*a));if(!r){const c=new L().subVectors(s,l).cross(this.camera.up).setY(0).normalize().multiplyScalar(o*.32);l.add(c),s.add(c)}this.moveCamera(l,s,1)}this.controls.minDistance=12}updateParking(t){this.parking?.update(t)}styleParking(t,e,n){this.parking?.style(t,e,n)}leaveParking(){this.mode==="parking"&&(this.parking?.hide(),this.setXray(!1))}setXray(t){if(this.contextGroup&&(this.contextGroup.visible=!t),this.lamps&&(this.lamps.group.visible=!t),this.massing&&(this.massing.root.visible=!t),this.precip.group.visible=!t,this.sky.visible=!t,this.skyLayers.stars.visible=!t,this.skyLayers.clouds.visible=!t,this.scene.background=t?this.parkingBg:null,t)for(const e of this.placeObjs)e.obj.visible=!1;else if(this.placeFilter){const[e,n,s]=this.placeFilter;for(const{obj:o,place:r}of this.placeObjs)o.visible=s&&e.includes(r.category)&&(n||r.known)}}setStick(t,e){this.walk.setStick(t,e)}leaveWalk(){if(!(this.mode!=="walk"&&this.mode!=="view")){this.walk.stop(),this.walkFloorN=null,this.clearFurnishing(),this.walkLayout=null,this.walkUnit=null,this.gtao.enabled=!1,this.precip.setExclusion(null),this.roomLamps.visible=!1;for(const t of this.roomLights)t.intensity=0;this.controls.enabled=!0,this.camera.near=Vu,this.camera.fov=38,this.camera.rotation.order="XYZ",this.camera.updateProjectionMatrix()}}async enterVR(t){if(!this.building||this.mode!=="walk")return;const e=this.building.floor(t),n=e.info.elevation+this.building.slabThickness,s=this.building.collisionRects(t),o=this.building,r=this.walk.pos.clone().setY(n);this.walk.stop(),this.camera.position.set(0,0,0),this.camera.rotation.set(0,0,0);const a=this.walkUnit?.polygon,l=[...s,...this.furnished?.colliders??[]];await this.xr.enter(this.scene,r,this.walk.yaw,c=>{const[h,u]=o.worldToPlan(c);if(!e.type.slab.some(([v,g,m,M])=>h>v&&h<m&&u>g&&u<M)||a&&!Gu(h,u,a))return!1;const[f,p]=Ba(h,u,.2,l);return Math.hypot(f-h,p-u)<.01})}setShadowRange(t){const e=t==="walk"?22:t==="floor"?70:190,n=this.sun.shadow;n.camera.left=-e,n.camera.right=e,n.camera.top=e,n.camera.bottom=-e,n.normalBias=t==="walk"?.02:t==="floor"?.08:.25,n.bias=t==="walk"?-1e-4:-3e-4,n.camera.updateProjectionMatrix()}moveCamera(t,e,n){if(n<=0){this.camera.position.copy(t),this.controls.target.copy(e),this.controls.update();return}this.tween={from:[this.camera.position.clone(),this.controls.target.clone()],to:[t.clone(),e.clone()],t:0,d:n}}pickSpot(){if(!this.parking)return null;this.raycaster.setFromCamera(this.pointer,this.camera);const t=this.raycaster.intersectObjects(this.parking.pickables(),!1)[0];return t?this.parking.spotAt(t):null}pickBlock(){if(!this.massing)return null;this.raycaster.setFromCamera(this.pointer,this.camera);const t=this.raycaster.intersectObjects(this.massing.pickables(),!1);return t.length?t[0].object.userData.block:null}pick(){if(!this.building)return{floor:null,unit:null};if(this.raycaster.setFromCamera(this.pointer,this.camera),this.mode==="building"){const t=this.raycaster.intersectObjects(this.building.pickables(),!1);return{floor:t.length?t[0].object.userData.floor:null,unit:null}}if(this.mode==="floor"){const t=this.raycaster.intersectObjects(this.building.unitPickables(),!1);return{floor:null,unit:t.length?t[0].object.userData.unitId:null}}return{floor:null,unit:null}}processHover(){if(!this.pointerDirty)return;if(this.pointerDirty=!1,this.mode==="parking"){const e=this.pointerInside?this.pickSpot():null;e!==this.lastHoverSpot&&(this.lastHoverSpot=e,this.renderer.domElement.style.cursor=e!==null?"pointer":""),this.events.hoverSpot(e,this.pointerScreen.x,this.pointerScreen.y);return}if(this.massing&&(this.mode==="building"||this.mode==="block")){const e=this.pointerInside?this.pickBlock():null;e!==this.lastHoverBlock&&(this.lastHoverBlock=e,this.massing.setHover(e),this.renderer.domElement.style.cursor=e?"pointer":""),this.events.hoverBlock(e,this.pointerScreen.x,this.pointerScreen.y);return}const t=this.pointerInside?this.pick():{floor:null,unit:null};t.floor!==this.lastHoverFloor&&(this.lastHoverFloor=t.floor,this.building?.setHoverFloor(t.floor),this.renderer.domElement.style.cursor=t.floor!==null?"pointer":""),this.mode==="building"&&this.events.hoverFloor(t.floor,this.pointerScreen.x,this.pointerScreen.y),t.unit!==this.lastHoverUnit&&(this.lastHoverUnit=t.unit,this.renderer.domElement.style.cursor=t.unit!==null?"pointer":""),this.mode==="floor"&&this.events.hoverUnit(t.unit,this.pointerScreen.x,this.pointerScreen.y)}hoverFloorFromUI(t){this.mode==="building"&&this.building?.setHoverFloor(t)}applyViewShift(){const t=this.canvasHost.clientWidth,e=this.canvasHost.clientHeight,n=t<760?this.mode==="floor"?.2:this.mode==="parking"?.26:this.mode==="building"?.08:0:0;n>0?this.camera.setViewOffset(t,e,0,e*n,t,e):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix()}dispose(){this.renderer.setAnimationLoop(null),window.removeEventListener("resize",this.resize),this.walk.dispose(),this.controls.dispose(),this.renderer.dispose()}}const Vu=1,Ry=new L(.25,1,.35).normalize();function Py(i){const t=[...i].sort((o,r)=>o[0]-r[0]||o[1]-r[1]);if(t.length<3)return t;const e=(o,r,a)=>(r[0]-o[0])*(a[1]-o[1])-(r[1]-o[1])*(a[0]-o[0]),n=[];for(const o of t){for(;n.length>=2&&e(n[n.length-2],n[n.length-1],o)<=0;)n.pop();n.push(o)}const s=[];for(const o of[...t].reverse()){for(;s.length>=2&&e(s[s.length-2],s[s.length-1],o)<=0;)s.pop();s.push(o)}return n.slice(0,-1).concat(s.slice(0,-1))}function Dy(i,t,e){const n=Wl(i,t,e);return{minutes:0,intervals:[],sunrise:n.sunrise,sunset:n.sunset,dayMinutes:n.dayLength*60}}function Gu(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++)e[s][1]>t!=e[o][1]>t&&i<(e[o][0]-e[s][0])*(t-e[s][1])/(e[o][1]-e[s][1]+1e-12)+e[s][0]&&(n=!n);return n}const Ly={key:0,class:"sw"},Iy=["value"],Uy=["value"],Ny=Ye({__name:"ProjectSwitch",props:{current:{}},setup(i){function t(e){const n=new URL(location.href);n.searchParams.set("p",e),location.href=n.toString()}return(e,n)=>B(Ot).projects.value.length>1?(Q(),st("label",Ly,[P("select",{value:e.current,"aria-label":"Жилой комплекс",onChange:n[0]||(n[0]=s=>t(s.target.value))},[(Q(!0),st(Qt,null,Se(B(Ot).projects.value,s=>(Q(),st("option",{key:s.slug,value:s.slug},"ЖК "+it(s.name)+" · "+it(s.developer),9,Uy))),128))],40,Iy)])):Jt("",!0)}}),Fy=qe(Ny,[["__scopeId","data-v-d0afc9c0"]]),Oy={class:"top"},ky={class:"brand glass"},By={class:"titles"},zy={class:"name"},Hy={class:"dev"},Vy={class:"addr"},Gy=["title"],Wy={class:"actions"},Xy=Ye({__name:"TopBar",props:{project:{},mode:{}},emits:["back","data"],setup(i){return(t,e)=>(Q(),st("header",Oy,[P("div",ky,[e[3]||(e[3]=P("div",{class:"mark","aria-hidden":"true"},[P("span"),P("span"),P("span")],-1)),P("div",By,[P("div",zy,[jt("ЖК "+it(t.project.name)+" ",1),P("span",Hy,"· "+it(t.project.developer.brand),1)]),P("div",Vy,it(t.project.address.replace("Ташкент, ","")),1)]),e[4]||(e[4]=P("div",{class:"sep"},null,-1)),P("div",{class:"gov",title:`Госреестр строек, объект ${t.project.gov_registry.object_id}, данные на ${B(Yi)(t.project.gov_registry.observed_at)}`},[e[2]||(e[2]=P("span",{class:"pulse"},null,-1)),P("span",null,it(t.project.gov_registry.status_ru)+it(t.project.gov_registry.deadline?` · срок ${B(Yi)(t.project.gov_registry.deadline)}`:" · госреестр"),1)],8,Gy)]),P("div",Wy,[wi(Fy,{current:t.project.slug},null,8,["current"]),t.mode!=="building"?(Q(),st("button",{key:0,class:"btn glass-btn",onClick:e[0]||(e[0]=n=>t.$emit("back"))},e[5]||(e[5]=[P("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none"},[P("path",{d:"M4 21V9l8-6 8 6v12h-5v-7H9v7H4z",stroke:"currentColor","stroke-width":"1.8","stroke-linejoin":"round"})],-1),P("span",{class:"lbl"},"Весь дом",-1)]))):Jt("",!0),P("button",{class:"btn glass-btn",onClick:e[1]||(e[1]=n=>t.$emit("data"))},e[6]||(e[6]=[P("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none"},[P("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor","stroke-width":"1.8"}),P("path",{d:"M12 11v6M12 7.5v.5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1),P("span",{class:"lbl"},"О данных",-1)]))])]))}}),$y=qe(Xy,[["__scopeId","data-v-88ec8d23"]]),Yy={class:"rail glass","aria-label":"Этажи"},qy={class:"list scroll-thin"},jy=["onClick","onMouseenter"],Zy={class:"n num"},Ky={key:0,class:"dots"},Jy={key:1,class:"tag"},Qy={class:"legend"},tM=Ye({__name:"FloorRail",props:{floors:{},current:{},count:{}},emits:["select","hover"],setup(i){return(t,e)=>(Q(),st("nav",Yy,[e[4]||(e[4]=P("div",{class:"head eyebrow"},"Этажи",-1)),P("ul",qy,[(Q(!0),st(Qt,null,Se(t.floors,n=>(Q(),st("li",{key:n.n,class:$e({active:n.n===t.current,dim:n.residential&&n.matching===0}),onClick:s=>t.$emit("select",n.n),onMouseenter:s=>t.$emit("hover",n.n),onMouseleave:e[0]||(e[0]=s=>t.$emit("hover",null))},[P("span",Zy,it(n.n),1),n.residential?(Q(),st("span",Ky,[(Q(!0),st(Qt,null,Se(n.statuses,(s,o)=>(Q(),st("i",{key:o,style:De({background:B(Je)[s]})},null,4))),128))])):(Q(),st("span",Jy,it(n.n===1&&!B(pn)?"лобби":"коммерция"),1)),n.residential?(Q(),st("span",{key:2,class:$e(["free num",{zero:n.available===0}])},it(n.available||"—"),3)):Jt("",!0)],42,jy))),128))]),P("div",Qy,[P("span",null,[P("i",{style:De({background:B(Je).available})},null,4),e[1]||(e[1]=jt("в продаже"))]),P("span",null,[P("i",{style:De({background:B(Je).booked})},null,4),e[2]||(e[2]=jt("бронь"))]),P("span",null,[P("i",{style:De({background:B(Je).sold})},null,4),e[3]||(e[3]=jt("продана"))])])]))}}),eM=qe(tM,[["__scopeId","data-v-39f7fd30"]]),nM=["viewBox"],iM=["x","y","width","height"],sM=["points"],oM=["points"],rM=["x","y","width","height"],aM=["points"],lM=Ye({__name:"MiniPlan",props:{unit:{}},setup(i){const t=i,e=Yt(()=>{const n=Ti.value.find(f=>f.n===t.unit.floor),s=Zl(n.type),o=Hn.value.filter(f=>f.floor===t.unit.floor&&f.id!==t.unit.id&&f.polygon),[r,a,l,c]=s.bbox,h=1,u=`${r-h} ${-(c+h)} ${l-r+h*2} ${c-a+h*2}`,d=f=>f.map(([p,v])=>`${p},${-v}`).join(" ");return{vb:u,slab:s.slab,walls:[...s.walls_ext,...s.walls_int],me:d(t.unit.polygon??[]),others:o.map(f=>d(f.polygon))}});return(n,s)=>(Q(),st("svg",{class:"mini",viewBox:e.value.vb,preserveAspectRatio:"xMidYMid meet","aria-label":"Положение квартиры на этаже"},[(Q(!0),st(Qt,null,Se(e.value.slab,(o,r)=>(Q(),st("rect",{key:"s"+r,x:o[0],y:-o[3],width:o[2]-o[0],height:o[3]-o[1],class:"slab"},null,8,iM))),128)),(Q(!0),st(Qt,null,Se(e.value.others,(o,r)=>(Q(),st("polygon",{key:"o"+r,points:o,class:"other"},null,8,sM))),128)),P("polygon",{points:e.value.me,class:"me",style:De({fill:B(Je)[n.unit.status]})},null,12,oM),(Q(!0),st(Qt,null,Se(e.value.walls,(o,r)=>(Q(),st("rect",{key:"w"+r,x:o[0],y:-o[3],width:o[2]-o[0],height:o[3]-o[1],class:"wall"},null,8,rM))),128)),P("polygon",{points:e.value.me,class:"me-line"},null,8,aM)],8,nM))}}),cM=qe(lM,[["__scopeId","data-v-c07382a7"]]),hM={class:"sunstrip"},uM={class:"top"},dM={class:"eyebrow"},fM={key:0,class:"day muted"},pM={class:"value"},mM={class:"num"},gM={key:0,class:"muted num"},vM=["aria-label"],_M={key:1,class:"ends num"},xM=Ye({__name:"SunStrip",props:{hours:{},dayLabel:{}},setup(i){const t=i,e=Yt(()=>{const s=t.hours;if(!s||s.sunrise===null||s.sunset===null)return null;const o=s.sunrise,r=s.sunset-o;return{pos:a=>`${(a-o)/r*100}%`,width:(a,l)=>`${(l-a)/r*100}%`,sunrise:Wi(s.sunrise),sunset:Wi(s.sunset),noon:(12-o)/r}}),n=Yt(()=>t.hours?.intervals.map(([s,o])=>`${Wi(s)}–${Wi(o)}`).join(", ")??"");return(s,o)=>(Q(),st("div",hM,[P("div",uM,[P("span",dM,"Солнце в окнах · "+it(s.dayLabel),1),s.hours?(Q(),st("span",fM,"световой день "+it(B(Cr)(s.hours.dayMinutes)),1)):Jt("",!0)]),P("div",pM,[P("b",mM,it(s.hours===null?"считаем…":s.hours.minutes?B(Cr)(s.hours.minutes):"нет прямого солнца"),1),s.hours?.minutes?(Q(),st("span",gM,it(n.value),1)):Jt("",!0)]),e.value&&s.hours?(Q(),st("div",{key:0,class:"bar",role:"img","aria-label":`Солнце в окнах: ${n.value||"нет"}`},[(Q(!0),st(Qt,null,Se(s.hours.intervals,(r,a)=>(Q(),st("i",{key:a,style:De({left:e.value.pos(r[0]),width:e.value.width(r[0],r[1])})},null,4))),128))],8,vM)):Jt("",!0),e.value?(Q(),st("div",_M,[P("span",null,"восход "+it(e.value.sunrise),1),P("span",null,"закат "+it(e.value.sunset),1)])):Jt("",!0)]))}}),yM=qe(xM,[["__scopeId","data-v-eae2e6bd"]]),MM={class:"card"},SM={class:"head"},bM={class:"eyebrow"},wM={class:"num"},EM={key:0,class:"test"},TM={key:1,class:"plan"},AM=["src","alt"],CM={class:"grid"},RM={class:"num"},PM={class:"num"},DM={class:"num"},LM={key:2,class:"rooms"},IM={class:"num"},UM={key:3,class:"views"},NM={class:"muted"},FM={class:"price"},OM={key:0},kM={class:"actions"},BM={key:4,class:"src"},zM={key:5,class:"src"},HM={key:6,class:"src"},VM={key:7,class:"src"},GM=Ye({__name:"UnitCard",props:{unit:{},view:{}},emits:["close","walk","lead"],setup(i){const t=i,e=Yt(()=>Ti.value.find(l=>l.n===t.unit.floor)),n=Yt(()=>Ti.value.length),s=Yt(()=>Math.round(e.value.elevation+1.5)),o=Yt(()=>t.unit.type_code?Ot.aptTypes.value.get(t.unit.type_code)??null:null),r={"03-21":"21 марта","06-21":"21 июня","09-23":"23 сентября","12-21":"21 декабря"},a=Yt(()=>r[D.sun.day.slice(5)]??Yi(D.sun.day));return(l,c)=>(Q(),st("div",MM,[P("div",SM,[P("div",null,[P("div",bM,it(B(pn)&&B(Pe)?`${B(Pe).label} · `:"")+"Квартира № "+it(l.unit.number)+" · "+it(l.unit.floor)+" этаж",1),P("h2",null,[jt(it(B(uf)(l.unit.rooms))+" · ",1),P("span",wM,it(B(Ls)(l.unit.area,!0)),1)])]),P("button",{class:"btn ghost icon","aria-label":"Закрыть",onClick:c[0]||(c[0]=h=>l.$emit("close"))},c[3]||(c[3]=[P("svg",{width:"18",height:"18",viewBox:"0 0 24 24"},[P("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1)]))]),P("div",{class:"status",style:De({"--c":B(Je)[l.unit.status]})},[c[4]||(c[4]=P("i",null,null,-1)),jt(it(B(ho)[l.unit.status]),1)],4),l.unit.test?(Q(),st("span",EM,"тестовые данные")):Jt("",!0),o.value?(Q(),st("figure",TM,[P("img",{src:B(ql)(o.value.image),alt:`Планировка ${o.value.code}`,loading:"lazy"},null,8,AM),P("figcaption",null,[P("b",null,it(o.value.title),1),jt(" · тип "+it(o.value.code)+" · чертёж из каталога застройщика",1)])])):Jt("",!0),wi(cM,{unit:l.unit},null,8,["unit"]),P("div",CM,[P("div",null,[c[5]||(c[5]=P("span",null,"Этаж",-1)),P("b",RM,it(l.unit.floor)+" из "+it(n.value),1)]),P("div",null,[c[6]||(c[6]=P("span",null,"Окна на высоте",-1)),P("b",PM,"≈ "+it(s.value)+" м",1)]),P("div",null,[c[7]||(c[7]=P("span",null,"Стороны света",-1)),P("b",null,it(l.view?.sidesShort.join(", ")||"—"),1)]),P("div",null,[P("span",null,"Солнце, "+it(a.value),1),P("b",DM,it(B(D).sunHours===null?"считаем…":B(D).sunHours.minutes?B(Cr)(B(D).sunHours.minutes):"нет прямого"),1)])]),wi(yM,{hours:B(D).sunHours,"day-label":a.value},null,8,["hours","day-label"]),l.unit.room_list?.length?(Q(),st("div",LM,[c[8]||(c[8]=P("div",{class:"eyebrow"},"Помещения",-1)),P("ul",null,[(Q(!0),st(Qt,null,Se(l.unit.room_list,(h,u)=>(Q(),st("li",{key:u},[P("span",null,it(h.name),1),P("b",IM,it(B(Ls)(h.area)),1)]))),128))])])):Jt("",!0),l.view?(Q(),st("div",UM,[c[9]||(c[9]=P("div",{class:"eyebrow"},"Что видно из окон",-1)),P("ul",null,[P("li",null,[P("b",null,it(l.view.sides.join(" и ")),1)]),(Q(!0),st(Qt,null,Se(l.view.highlights,h=>(Q(),st("li",{key:h},it(h),1))),128)),P("li",NM,it(l.view.openness),1)])])):Jt("",!0),P("div",FM,[P("div",null,[c[10]||(c[10]=P("span",{class:"muted"},"Стоимость",-1)),P("b",null,[jt(it(l.unit.status==="sold"?"продана":l.unit.status==="unavailable"?"не продаётся":B(xo)(l.unit.price)),1),l.unit.test&&l.unit.price!==null&&(l.unit.status==="available"||l.unit.status==="booked")?(Q(),st("em",OM," · тест")):Jt("",!0)])]),P("button",{class:"btn small",onClick:c[1]||(c[1]=h=>l.$emit("lead"))},"Узнать цену")]),P("div",kM,[P("button",{class:"btn primary",onClick:c[2]||(c[2]=h=>l.$emit("walk"))},c[11]||(c[11]=[P("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},[P("circle",{cx:"13",cy:"4",r:"2",fill:"currentColor"}),P("path",{d:"M10 21l2-6 3 3v3M8 12l2-4 4 1 2 4 3 1M12 15l-1-6",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"})],-1),jt(" Пройти по квартире ")]))]),l.unit.test&&o.value?(Q(),st("p",BM,[c[12]||(c[12]=jt("Планировка и площади комнат — каталог застройщика; расстановка квартир на этаже условная. Статус и цена — тестовая стартовая шахматка")),B(Mo)?(Q(),st(Qt,{key:0},[jt(", дальше их ведёт CRM")],64)):Jt("",!0),c[13]||(c[13]=jt("."))])):l.unit.test?(Q(),st("p",zM,"Тестовые данные для показа возможностей: планировка сгенерирована по реальному контуру корпуса, статус и цена случайные.")):B(Mo)?(Q(),st("p",HM,"Статус и цена — из CRM отдела продаж, обновляются на странице автоматически.")):(Q(),st("p",VM,"Статус — каталог застройщика на "+it(B(Yi)(l.unit.observed_at))+". Площадь по каталогу, стены — по плану этажа.",1))]))}}),WM=qe(GM,[["__scopeId","data-v-879d3c95"]]),XM={class:"eyebrow"},$M={key:0,class:"test-chip"},YM={class:"big num"},qM={class:"bar"},jM=["title"],ZM={class:"stats"},KM={class:"num"},JM={key:0,class:"note"},QM={key:1,class:"note"},tS={class:"floor-sub muted"},eS={key:0,class:"units"},nS=["onClick","onMouseenter"],iS={class:"no num"},sS={class:"rm"},oS={class:"ar num"},rS={class:"st"},aS={key:1,class:"note"},lS={class:"filters"},cS={class:"row"},hS=["onClick"],uS={class:"switch"},dS={key:0,class:"found muted"},fS={class:"num"},pS=Ye({__name:"SidePanel",props:{view:{}},emits:["select-unit","walk","lead","back"],setup(i,{emit:t}){const e=t,n=[1,2,3,4,5];function s(l){const c=D.filter.rooms.indexOf(l);c>=0?D.filter.rooms.splice(c,1):D.filter.rooms.push(l)}const o=Yt(()=>D.floor===null?[]:Hn.value.filter(l=>l.floor===D.floor).sort((l,c)=>l.number-c.number)),r=Yt(()=>Ti.value.find(l=>l.n===D.floor)??null),a=Yt(()=>{const l=r.value;return l?Zl(l.type)?.label??Ot.project.value?.floor_types[l.type]?.label??"":""});return(l,c)=>(Q(),st("aside",{class:$e(["panel glass scroll-thin",{card:!!B(sn)}])},[B(sn)?(Q(),Cn(WM,{key:0,unit:B(sn),view:l.view,onClose:c[0]||(c[0]=h=>e("select-unit",null)),onWalk:c[1]||(c[1]=h=>e("walk")),onLead:c[2]||(c[2]=h=>e("lead"))},null,8,["unit","view"])):(Q(),st(Qt,{key:1},[P("div",XM,it(B(D).floor===null?"Квартиры в доме":`${B(pn)&&B(Pe)?B(Pe).label+" · ":""}${B(D).floor} этаж`),1),B($u)?(Q(),st("div",$M,it(B(Ot).aptTypes.value.size?"Тестовые статусы и цены; планировки — из каталога застройщика":"Тестовые данные: планировки, статусы и цены условные"),1)):Jt("",!0),B(D).floor===null?(Q(),st(Qt,{key:1},[P("div",YM,[jt(it(B(pi).by.available)+" ",1),P("span",null,it(B(Rr)(B(pi).by.available,"квартира","квартиры","квартир"))+" в продаже",1)]),P("div",qM,[(Q(),st(Qt,null,Se(["available","booked","sold","unavailable"],h=>P("i",{key:h,style:De({flex:B(pi).by[h],background:B(Je)[h]}),title:`${B(ho)[h]}: ${B(pi).by[h]}`},null,12,jM)),64))]),P("div",ZM,[(Q(),st(Qt,null,Se(["available","booked","sold"],h=>P("div",{key:h},[P("i",{style:De({background:B(Je)[h]})},null,4),jt(it(B(ho)[h])+" ",1),P("b",KM,it(B(pi).by[h]),1)])),64))]),B(Mo)?(Q(),st("p",JM,"Всего "+it(B(pi).total)+" квартир. Статусы ведёт отдел продаж в CRM, страница обновляет их сама.",1)):(Q(),st("p",QM,"Всего "+it(B(pi).total)+" квартир в каталоге застройщика. Статусы на "+it(B(Yi)(B(Ot).observedAt.value))+".",1))],64)):(Q(),st(Qt,{key:2},[P("div",tS,it(a.value),1),o.value.length?(Q(),st("ul",eS,[(Q(!0),st(Qt,null,Se(o.value,h=>(Q(),st("li",{key:h.id,class:$e({off:!B(kr)(h,B(D).filter),hover:B(D).hoverUnit===h.id}),onClick:u=>e("select-unit",h.id),onMouseenter:u=>B(D).hoverUnit=h.id,onMouseleave:c[3]||(c[3]=u=>B(D).hoverUnit=null)},[P("span",iS,"№ "+it(h.number),1),P("span",sS,it(h.rooms)+"-комн.",1),P("span",oS,it(B(Ls)(h.area)),1),P("span",rS,[P("i",{style:De({background:B(Je)[h.status]})},null,4),jt(it(B(ho)[h.status]),1)])],42,nS))),128))])):(Q(),st("p",aS,"На этом этаже квартир нет — коммерческие помещения и лобби. Стены показаны по плану застройщика."))],64)),P("div",lS,[c[8]||(c[8]=P("div",{class:"eyebrow"},"Комнат",-1)),P("div",cS,[(Q(),st(Qt,null,Se(n,h=>P("button",{key:h,class:$e(["seg",{on:B(D).filter.rooms.includes(h)}]),onClick:u=>s(h)},it(h===5?"5+":h),11,hS)),64))]),P("label",uS,[Ei(P("input",{"onUpdate:modelValue":c[4]||(c[4]=h=>B(D).filter.onlyAvailable=h),type:"checkbox"},null,512),[[Tr,B(D).filter.onlyAvailable]]),c[5]||(c[5]=P("span",{class:"knob"},null,-1)),c[6]||(c[6]=jt(" Только в продаже "))]),B(D).filter.rooms.length||B(D).filter.onlyAvailable?(Q(),st("div",dS,[c[7]||(c[7]=jt(" Подходит: ")),P("b",fS,it(B(pi).matching),1)])):Jt("",!0)])],64))],2))}}),mS=qe(pS,[["__scopeId","data-v-8ff6522b"]]),gS={class:"atmo glass"},vS={class:"seg seasons",role:"group","aria-label":"Сезон"},_S=["title","onClick"],xS={key:0,viewBox:"0 0 24 24"},yS={key:1,viewBox:"0 0 24 24"},MS={key:2,viewBox:"0 0 24 24"},SS={key:3,viewBox:"0 0 24 24"},bS={class:"seg weather",role:"group","aria-label":"Погода"},wS=["title","onClick"],ES={key:0,viewBox:"0 0 24 24"},TS={key:1,viewBox:"0 0 24 24"},AS={key:2,viewBox:"0 0 24 24"},CS={key:3,viewBox:"0 0 24 24"},RS={class:"clock"},PS=["title"],DS={key:0,viewBox:"0 0 24 24"},LS={key:1,viewBox:"0 0 24 24"},IS={class:"t"},US={key:0,viewBox:"0 0 24 24",class:"moon"},NS={key:1,viewBox:"0 0 24 24",class:"sunico"},FS={class:"num"},OS={class:"d"},kS=Ye({__name:"AtmosphereBar",setup(i){const t=Yt(()=>Ya.find(h=>h.id===D.atmo.season)),e=Yt(()=>{const h=Math.floor(D.sun.hour)%24,u=Math.round((D.sun.hour-Math.floor(D.sun.hour))*60)%60;return`${String(h).padStart(2,"0")}:${String(u).padStart(2,"0")}`}),n=Yt(()=>D.sun.hour<6||D.sun.hour>=19.5);function s(h){D.atmo.season=h,D.sun.day=Xu(h),h!=="winter"&&D.atmo.weather==="snow"&&(D.atmo.weather="clear")}function o(h){D.atmo.weather=h,h==="snow"&&D.atmo.season!=="winter"&&s("winter")}let r=0,a=0;function l(h){const u=Math.min((h-a)/1e3,.1);a=h,D.sun.hour=(D.sun.hour+u*1.5)%24,r=requestAnimationFrame(l)}On(()=>D.atmo.playing,h=>{cancelAnimationFrame(r),h&&(a=performance.now(),r=requestAnimationFrame(l))}),jl(()=>cancelAnimationFrame(r));function c(){D.atmo.playing=!1}return(h,u)=>(Q(),st("div",gS,[P("div",vS,[(Q(!0),st(Qt,null,Se(B(Ya),d=>(Q(),st("button",{key:d.id,class:$e({on:B(D).atmo.season===d.id}),title:d.hint,onClick:f=>s(d.id)},[d.id==="winter"?(Q(),st("svg",xS,u[3]||(u[3]=[P("path",{d:"M12 2v20M4.2 6.5l15.6 11M4.2 17.5l15.6-11M9.5 3.8 12 6l2.5-2.2M9.5 20.2 12 18l2.5 2.2"},null,-1)]))):d.id==="spring"?(Q(),st("svg",yS,u[4]||(u[4]=[P("circle",{cx:"12",cy:"10",r:"2.6"},null,-1),P("path",{d:"M12 7.4C11 4.5 13 3 12 3s1 1.5 0 4.4M14.4 9.2c2.6-1.6 3.6.6 4.2-.2s-1.8-1.2-4.2.2M14 12.4c1.6 2.6-.4 3.8.4 4.2s1-1.8-.4-4.2M10 12.4c-1.6 2.6.4 3.8-.4 4.2s-1-1.8.4-4.2M9.6 9.2C7 7.6 6 9.8 5.4 9s1.8-1.2 4.2.2M12 13v8"},null,-1)]))):d.id==="summer"?(Q(),st("svg",MS,u[5]||(u[5]=[P("circle",{cx:"12",cy:"12",r:"4"},null,-1),P("path",{d:"M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"},null,-1)]))):(Q(),st("svg",SS,u[6]||(u[6]=[P("path",{d:"M5 19c0-8 5-14 15-15-1 10-7 15-15 15ZM5 19l8-8"},null,-1)]))),P("span",null,it(d.label),1)],10,_S))),128))]),P("div",bS,[(Q(!0),st(Qt,null,Se(B(gf),d=>(Q(),st("button",{key:d.id,class:$e({on:B(D).atmo.weather===d.id}),title:d.label,onClick:f=>o(d.id)},[d.id==="clear"?(Q(),st("svg",ES,u[7]||(u[7]=[P("circle",{cx:"12",cy:"12",r:"4"},null,-1),P("path",{d:"M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"},null,-1)]))):d.id==="cloudy"?(Q(),st("svg",TS,u[8]||(u[8]=[P("path",{d:"M7 18h10.5a4 4 0 0 0 .4-8 6 6 0 0 0-11.4 1.6A3.3 3.3 0 0 0 7 18Z"},null,-1)]))):d.id==="rain"?(Q(),st("svg",AS,u[9]||(u[9]=[P("path",{d:"M7 14h10.5a3.6 3.6 0 0 0 .4-7.2A5.6 5.6 0 0 0 7.2 8.3 2.9 2.9 0 0 0 7 14ZM8 17l-1 3M12 17l-1 3M16 17l-1 3"},null,-1)]))):(Q(),st("svg",CS,u[10]||(u[10]=[P("path",{d:"M7 13h10.5a3.6 3.6 0 0 0 .4-7.2A5.6 5.6 0 0 0 7.2 7.3 2.9 2.9 0 0 0 7 13Z"},null,-1),P("circle",{cx:"8",cy:"17",r:".9"},null,-1),P("circle",{cx:"12",cy:"19.5",r:".9"},null,-1),P("circle",{cx:"16",cy:"17",r:".9"},null,-1)]))),P("span",null,it(d.label),1)],10,wS))),128))]),P("div",RS,[P("button",{class:$e(["play",{on:B(D).atmo.playing}]),title:B(D).atmo.playing?"Остановить":"Прокрутить сутки",onClick:u[0]||(u[0]=d=>B(D).atmo.playing=!B(D).atmo.playing)},[B(D).atmo.playing?(Q(),st("svg",LS,u[12]||(u[12]=[P("path",{d:"M8 5.5v13M16 5.5v13"},null,-1)]))):(Q(),st("svg",DS,u[11]||(u[11]=[P("path",{d:"M8 5.5v13l10.5-6.5Z",class:"fill"},null,-1)])))],10,PS),P("button",{class:$e(["play",{on:B(D).atmo.sunPath}]),title:"Путь солнца над домом",onClick:u[1]||(u[1]=d=>B(D).atmo.sunPath=!B(D).atmo.sunPath)},u[13]||(u[13]=[P("svg",{viewBox:"0 0 24 24"},[P("path",{d:"M3 19a9 9 0 0 1 18 0","stroke-dasharray":"2.2 2.4"}),P("circle",{cx:"15.5",cy:"11.6",r:"2.4",class:"fill"}),P("path",{d:"M2 19h20"})],-1)]),2),Ei(P("input",{"onUpdate:modelValue":u[2]||(u[2]=d=>B(D).sun.hour=d),class:"slider",type:"range",min:"0",max:"23.75",step:"0.25","aria-label":"Время суток",onInput:c},null,544),[[Ar,B(D).sun.hour,void 0,{number:!0}]]),P("div",IS,[n.value?(Q(),st("svg",US,u[14]||(u[14]=[P("path",{d:"M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z",class:"fill"},null,-1)]))):(Q(),st("svg",NS,u[15]||(u[15]=[P("circle",{cx:"12",cy:"12",r:"4.5",class:"fill"},null,-1)]))),P("b",FS,it(e.value),1),P("span",OS,it(t.value.dateLabel),1)])])]))}}),BS=qe(kS,[["__scopeId","data-v-64192f1a"]]),zS={class:"hud"},HS={class:"info glass"},VS={key:0,class:"what"},GS={class:"styles glass",role:"group","aria-label":"Ремонт"},WS=["title","onClick"],XS={key:0,class:"keys glass"},$S={key:2,class:"look-hint"},YS=Ye({__name:"WalkHud",props:{xrSupported:{type:Boolean}},emits:["exit","vr","stick"],setup(i,{emit:t}){const e=t,n=matchMedia("(pointer: coarse)").matches,s=ai(),o=ai({x:0,y:0});let r=null;function a(h){r=h.pointerId,h.target.setPointerCapture(h.pointerId),l(h)}function l(h){if(r!==h.pointerId||!s.value)return;const u=s.value.getBoundingClientRect(),d=u.width/2;let f=(h.clientX-(u.left+d))/d,p=(h.clientY-(u.top+d))/d;const v=Math.hypot(f,p);v>1&&(f/=v,p/=v),o.value={x:f,y:p},e("stick",f,p)}function c(h){r===h.pointerId&&(r=null,o.value={x:0,y:0},e("stick",0,0))}return jl(()=>e("stick",0,0)),(h,u)=>(Q(),st("div",zS,[P("div",HS,[P("button",{class:"btn small",onClick:u[0]||(u[0]=d=>h.$emit("exit"))},u[2]||(u[2]=[P("svg",{width:"14",height:"14",viewBox:"0 0 24 24"},[P("path",{d:"M15 6l-6 6 6 6",stroke:"currentColor","stroke-width":"2.2",fill:"none","stroke-linecap":"round"})],-1),jt(" Выйти ")])),B(sn)?(Q(),st("div",VS,[P("b",null,"№ "+it(B(sn).number),1),jt(" · "+it(B(sn).rooms)+"-комн. · "+it(B(Ls)(B(sn).area)),1)])):Jt("",!0),h.xrSupported?(Q(),st("button",{key:1,class:"btn small primary",onClick:u[1]||(u[1]=d=>h.$emit("vr"))},"Войти в VR")):Jt("",!0)]),P("div",GS,[u[3]||(u[3]=P("span",{class:"lbl"},"Ремонт",-1)),(Q(!0),st(Qt,null,Se(B(hx),d=>(Q(),st("button",{key:d.id,class:$e({on:B(D).interior===d.id}),title:d.hint,onClick:f=>B(D).interior=d.id},it(d.label),11,WS))),128))]),B(n)?(Q(),st("div",{key:1,ref_key:"base",ref:s,class:"stick",onPointerdown:a,onPointermove:l,onPointerup:c,onPointercancel:c},[P("div",{class:"knob",style:De({transform:`translate(${o.value.x*34}px, ${o.value.y*34}px)`})},null,4)],544)):(Q(),st("div",XS,u[4]||(u[4]=[sf("<span data-v-39eaec08><kbd data-v-39eaec08>W</kbd><kbd data-v-39eaec08>A</kbd><kbd data-v-39eaec08>S</kbd><kbd data-v-39eaec08>D</kbd> ходьба</span><span data-v-39eaec08><kbd data-v-39eaec08>Shift</kbd> быстрее</span><span data-v-39eaec08>мышь — обзор</span><span data-v-39eaec08><kbd data-v-39eaec08>Esc</kbd> выйти</span>",4)]))),B(n)?(Q(),st("div",$S,"Ведите пальцем по экрану, чтобы осмотреться")):Jt("",!0)]))}}),qS=qe(YS,[["__scopeId","data-v-39eaec08"]]),jS={key:0},ZS={key:1},KS=Ye({__name:"HoverTip",setup(i){const t=Yt(()=>D.mode==="building"&&D.hoverFloor!==null?ja.value.find(o=>o.n===D.hoverFloor):null),e=Yt(()=>D.hoverBlock?Ot.project.value?.building.blocks?.find(o=>o.id===D.hoverBlock)??null:null),n=Yt(()=>D.mode==="floor"&&D.unitId!==D.hoverUnit?Mf.value:null),s=Yt(()=>D.mode==="parking"&&D.parking.spotId!==D.parking.hoverSpot?yf.value:null);return(o,r)=>t.value||n.value||e.value||s.value?(Q(),st("div",{key:0,class:"tip glass",style:De({left:`${B(D).tip.x+16}px`,top:`${B(D).tip.y+16}px`})},[t.value?(Q(),st(Qt,{key:0},[P("b",null,it(t.value.n)+" этаж",1),t.value.residential?(Q(),st("span",jS,"в продаже "+it(t.value.available)+" из "+it(t.value.total),1)):(Q(),st("span",ZS,it(t.value.n===1&&!B(pn)?"лобби и коммерция":"коммерция"),1))],64)):e.value?(Q(),st(Qt,{key:1},[P("b",null,it(e.value.label),1),P("span",null,it(e.value.levels)+" этажей · "+it(e.value.address),1)],64)):s.value?(Q(),st(Qt,{key:2},[P("b",null,"Место "+it(s.value.code)+" · "+it(B(Xa)[s.value.kind].toLowerCase()),1),P("span",{style:De({color:B(Je)[s.value.status]})},[jt(it(B($a)[s.value.status]),1),s.value.price?(Q(),st(Qt,{key:0},[jt(" · "+it(B(xo)(s.value.price)),1)],64)):Jt("",!0)],4)],64)):n.value?(Q(),st(Qt,{key:3},[P("b",null,"№ "+it(n.value.number)+" · "+it(n.value.rooms)+"-комн. · "+it(B(Ls)(n.value.area)),1),P("span",{style:De({color:B(Je)[n.value.status]})},it(B(ho)[n.value.status]),5)],64)):Jt("",!0)],4)):Jt("",!0)}}),JS=qe(KS,[["__scopeId","data-v-1cdf11d2"]]),QS={class:"sheet glass scroll-thin",role:"dialog","aria-label":"О данных"},tb={class:"head"},eb={key:0,class:"how"},nb={class:"muted"},ib={class:"asm"},sb={class:"disc"},ob={class:"made"},rb=Ye({__name:"DataSheet",emits:["close"],setup(i){return(t,e)=>(Q(),st("div",{class:"veil",onClick:e[1]||(e[1]=Wa(n=>t.$emit("close"),["self"]))},[P("div",QS,[P("div",tb,[e[3]||(e[3]=P("div",null,[P("div",{class:"eyebrow"},"О данных"),P("h2",null,"Как собран этот макет")],-1)),P("button",{class:"btn ghost icon","aria-label":"Закрыть",onClick:e[0]||(e[0]=n=>t.$emit("close"))},e[2]||(e[2]=[P("svg",{width:"18",height:"18",viewBox:"0 0 24 24"},[P("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1)]))]),B(Ot).project.value.about?.length?(Q(),st("ol",eb,[(Q(!0),st(Qt,null,Se(B(Ot).project.value.about,n=>(Q(),st("li",{key:n.title},[P("b",null,it(n.title),1),jt(" — "+it(n.text),1)]))),128))])):Jt("",!0),e[6]||(e[6]=P("div",{class:"eyebrow"},"Источники",-1)),P("table",null,[(Q(!0),st(Qt,null,Se(B(Ot).project.value.sources,n=>(Q(),st("tr",{key:n.what},[P("td",null,it(n.what),1),P("td",null,[jt(it(n.source),1),e[4]||(e[4]=P("br",null,null,-1)),P("span",nb,"на "+it(B(Yi)(n.date)),1)])]))),128))]),e[7]||(e[7]=P("div",{class:"eyebrow"},"Условности демо",-1)),P("ul",ib,[(Q(!0),st(Qt,null,Se(B(Ot).project.value.assumptions,n=>(Q(),st("li",{key:n},it(n),1))),128))]),P("p",sb,it(B(Ot).project.value.disclaimer)+" "+it(B(Ot).context.value?.attribution),1),P("div",ob,[wi(of,{height:16}),e[5]||(e[5]=P("span",null,"3D-модель, шахматка и CRM",-1))])])]))}}),ab=qe(rb,[["__scopeId","data-v-b441d087"]]),lb={class:"eyebrow"},cb={key:0,class:"err"},hb=["disabled"],ub={class:"note"},db={class:"txt"},fb=Ye({__name:"LeadDialog",emits:["close"],setup(i){const t=ai("form"),e=ai(""),n=ai("+998 "),s=ai(""),o=ai(!1),r=Yt(()=>D.mode==="parking"?Ge.value:null),a=Yt(()=>{if(r.value)return`Паркинг · уровень ${co(r.value.level)} · место ${r.value.code}`;const c=sn.value;return c?`${Pe.value?`${Pe.value.label} · `:""}${c.floor} этаж · квартира № ${c.number}`:""});async function l(){const c=Ot.project.value;if(c){s.value="",o.value=!0;try{await Rn.lead({project:c.slug,name:e.value.trim(),phone:n.value,...r.value?{parking_spot_id:r.value.id}:{unit_id:sn.value?.id??null}}),t.value="sent"}catch(h){h instanceof Yr&&h.status===422?s.value=h.firstMessage:h instanceof Yr&&(h.status===404||h.status===405)?t.value="demo":s.value=h instanceof Yr&&h.status===429?"Слишком много заявок подряд. Попробуйте через минуту.":"Не удалось отправить. Проверьте интернет и попробуйте ещё раз."}finally{o.value=!1}}}return(c,h)=>(Q(),st("div",{class:"veil",onClick:h[4]||(h[4]=Wa(u=>c.$emit("close"),["self"]))},[P("form",{class:"dlg glass",onSubmit:Wa(l,["prevent"])},[t.value==="form"?(Q(),st(Qt,{key:0},[P("div",lb,it(a.value),1),h[7]||(h[7]=P("h2",null,"Узнать цену и записаться на показ",-1)),P("label",null,[h[5]||(h[5]=jt("Имя")),Ei(P("input",{"onUpdate:modelValue":h[0]||(h[0]=u=>e.value=u),required:"",maxlength:"80",autocomplete:"name"},null,512),[[Ar,e.value]])]),P("label",null,[h[6]||(h[6]=jt("Телефон")),Ei(P("input",{"onUpdate:modelValue":h[1]||(h[1]=u=>n.value=u),required:"",inputmode:"tel",autocomplete:"tel"},null,512),[[Ar,n.value]])]),s.value?(Q(),st("div",cb,it(s.value),1)):Jt("",!0),P("button",{class:"btn primary",type:"submit",disabled:o.value},it(o.value?"Отправляем…":"Отправить"),9,hb),P("p",ub,"Имя и телефон получит только отдел продаж — чтобы перезвонить по "+it(r.value?"этому месту":"этой квартире")+".",1)],64)):t.value==="sent"?(Q(),st(Qt,{key:1},[h[8]||(h[8]=P("h2",null,"Заявка отправлена",-1)),P("p",db,"Менеджер получил её вместе с "+it(r.value?"номером места и уровнем паркинга":"номером квартиры и этажом")+" и перезвонит вам.",1),P("button",{class:"btn",type:"button",onClick:h[2]||(h[2]=u=>c.$emit("close"))},"Хорошо")],64)):(Q(),st(Qt,{key:2},[h[9]||(h[9]=P("h2",null,"Так это работает в рабочей версии",-1)),h[10]||(h[10]=P("p",{class:"txt"},"Заявка с номером квартиры, этажом и тем, что человек смотрел, за секунды попадает в CRM застройщика и менеджеру в Telegram. В этой демо-версии сервера заявок нет — ничего не сохранено.",-1)),P("button",{class:"btn",type:"button",onClick:h[3]||(h[3]=u=>c.$emit("close"))},"Понятно")],64))],32)]))}}),pb=qe(fb,[["__scopeId","data-v-25c4a9a0"]]),mb={class:"loader"},gb={class:"box"},vb={class:"mark"},_b={class:"bar"},xb={key:0,class:"err"},yb=Ye({__name:"LoaderScreen",props:{progress:{},error:{}},setup(i){return(t,e)=>(Q(),st("div",mb,[P("div",gb,[P("div",vb,[wi(df,{size:40,animated:""})]),e[0]||(e[0]=P("div",{class:"t"},"Собираем дом из открытых данных",-1)),e[1]||(e[1]=P("div",{class:"steps muted"},"госреестр · поэтажные планы · OpenStreetMap",-1)),P("div",_b,[P("i",{style:De({width:`${Math.round(t.progress*100)}%`})},null,4)]),t.error?(Q(),st("div",xb,"Не удалось загрузить: "+it(t.error),1)):Jt("",!0)])]))}}),Mb=qe(yb,[["__scopeId","data-v-6c11f762"]]),Sb={class:"rail glass","aria-label":"Корпуса"},bb={class:"list scroll-thin"},wb=["onClick","onMouseenter"],Eb={class:"n num"},Tb={class:"bar"},Ab={class:"lv num"},Cb=Ye({__name:"BlockRail",props:{blocks:{},current:{}},emits:["select","hover"],setup(i){const t=i,e=Yt(()=>Math.max(1,...t.blocks.map(s=>s.levels))),n=s=>s.label.replace(/^(Дом|Корпус|Блок)\s*/i,"");return(s,o)=>(Q(),st("nav",Sb,[o[1]||(o[1]=P("div",{class:"head eyebrow"},"Корпуса",-1)),P("ul",bb,[(Q(!0),st(Qt,null,Se(s.blocks,r=>(Q(),st("li",{key:r.id,class:$e({active:r.id===s.current}),onClick:a=>s.$emit("select",r.id),onMouseenter:a=>s.$emit("hover",r.id),onMouseleave:o[0]||(o[0]=a=>s.$emit("hover",null))},[P("span",Eb,it(n(r)),1),P("span",Tb,[P("i",{style:De({width:`${r.levels/e.value*100}%`})},null,4)]),P("span",Ab,it(r.levels)+" эт.",1)],42,wb))),128))])]))}}),Rb=qe(Cb,[["__scopeId","data-v-eb241c8e"]]),Pb={class:"panel glass scroll-thin"},Db={class:"head"},Lb={class:"eyebrow"},Ib={class:"grid"},Ub={class:"num"},Nb={class:"floor-row"},Fb=["max"],Ob={class:"num"},kb={class:"muted small"},Bb={class:"eyebrow mt"},zb={class:"sides"},Hb=["onClick"],Vb={class:"num"},Gb=["disabled"],Wb={class:"big num"},Xb={class:"note"},$b={key:0,class:"note"},Yb={key:1,class:"note"},qb={class:"pk-t"},jb={class:"near"},Zb={class:"near-head"},Kb={class:"eyebrow"},Jb={class:"switch"},Qb={class:"cats"},tw=["onClick"],ew={key:0,class:"lg"},nw=["src"],iw={class:"nm"},sw={class:"wk num"},ow={class:"switch small"},rw=Ye({__name:"BlockPanel",props:{sides:{}},emits:["close","view","floor","places","open-floor","parking"],setup(i,{emit:t}){const e=t,n=Yt(()=>Ot.parking.value?.summary??null),s=Yt(()=>Ot.project.value),o=Yt(()=>s.value.building.blocks??[]),r=Yt(()=>Ot.context.value?.places??[]),a=Object.keys(ao);function l(f){const p=D.places.cats.indexOf(f);p>=0?D.places.cats.splice(p,1):D.places.cats.push(f)}const c=Yt(()=>{const f=Pe.value,p=f?[f.footprint.reduce((v,g)=>v+g[0],0)/f.footprint.length,f.footprint.reduce((v,g)=>v+g[1],0)/f.footprint.length]:Ot.context.value?.center??[0,0];return r.value.filter(v=>D.places.cats.includes(v.category)&&(D.places.all||v.known)).map(v=>{const g=Math.hypot(v.x-p[0],v.y-p[1]);return{...v,d:g,w:Math.max(1,Math.round(g*1.25/80))}}).sort((v,g)=>v.d-g.d).slice(0,12)}),h=Yt(()=>{const f=Pe.value;return f?Math.round((D.blockFloor<=1?0:f.first_floor+(D.blockFloor-2)*f.floor_height)+1.5):0}),u={"03-21":"21 марта","06-21":"21 июня","09-23":"23 сентября","12-21":"21 декабря"},d=Yt(()=>u[D.sun.day.slice(5)]??Yi(D.sun.day));return(f,p)=>(Q(),st("aside",Pb,[B(Pe)?(Q(),st(Qt,{key:0},[P("div",Db,[P("div",null,[P("div",Lb,it(s.value.name)+" · "+it(B(Pe).address),1),P("h2",null,it(B(Pe).label)+" · "+it(B(Pe).levels)+" этажей",1)]),P("button",{class:"btn ghost icon","aria-label":"Закрыть",onClick:p[0]||(p[0]=v=>e("close"))},p[9]||(p[9]=[P("svg",{width:"18",height:"18",viewBox:"0 0 24 24"},[P("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1)]))]),P("div",Ib,[P("div",null,[p[10]||(p[10]=P("span",null,"Высота",-1)),P("b",Ub,"≈ "+it(Math.round(B(Pe).height))+" м",1)]),P("div",null,[p[11]||(p[11]=P("span",null,"Первый этаж",-1)),P("b",null,it(B(Pe).retail_ground?"коммерция":"жильё"),1)])]),p[14]||(p[14]=P("div",{class:"eyebrow"},"Этаж",-1)),P("div",Nb,[Ei(P("input",{"onUpdate:modelValue":p[1]||(p[1]=v=>B(D).blockFloor=v),type:"range",min:"1",max:B(Pe).levels,step:"1","aria-label":"Этаж",onInput:p[2]||(p[2]=v=>e("floor",B(D).blockFloor))},null,40,Fb),[[Ar,B(D).blockFloor,void 0,{number:!0}]]),P("b",Ob,it(B(D).blockFloor),1)]),P("div",kb,"Окна на высоте ≈ "+it(h.value)+" м",1),P("div",Bb,"Стороны и солнце, "+it(d.value),1),P("div",zb,[(Q(!0),st(Qt,null,Se(f.sides,(v,g)=>(Q(),st("button",{key:g,class:$e(["side",{on:B(D).viewSide===g}]),onClick:m=>B(D).viewSide=g},[P("b",null,it(v.short),1),P("span",Vb,it(B(D).blockSun===null?"…":B(D).blockSun[g]?.minutes?B(Cr)(B(D).blockSun[g].minutes):"нет солнца"),1)],10,Hb))),128))]),P("button",{class:"btn primary wide",disabled:B(Pe).retail_ground&&B(D).blockFloor===1,onClick:p[3]||(p[3]=v=>e("open-floor"))},[p[12]||(p[12]=P("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},[P("path",{d:"M3 9l9-6 9 6v11H3z M3 9h18M9 20v-6h6v6",stroke:"currentColor","stroke-width":"1.7","stroke-linejoin":"round"})],-1)),jt(" "+it(B(Pe).retail_ground&&B(D).blockFloor===1?"1 этаж — коммерция":`Квартиры ${B(D).blockFloor} этажа`),1)],8,Gb),P("button",{class:"btn wide mt8",onClick:p[4]||(p[4]=v=>e("view"))},[p[13]||(p[13]=P("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},[P("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2",stroke:"currentColor","stroke-width":"1.8"}),P("path",{d:"M12 4v16M3 12h18",stroke:"currentColor","stroke-width":"1.8"})],-1)),jt(" Вид из окна: "+it(B(D).blockFloor)+" этаж, "+it(f.sides[B(D).viewSide]?.name??""),1)])],64)):(Q(),st(Qt,{key:1},[p[21]||(p[21]=P("div",{class:"eyebrow"},"Жилой комплекс",-1)),P("div",Wb,[jt(it(o.value.length)+" ",1),P("span",null,"корпусов · "+it(s.value.building.floors_total)+" этажей всего",1)]),P("p",Xb,[p[15]||(p[15]=jt("Статус по госреестру: ")),P("b",null,it(s.value.gov_registry.status_ru),1),jt(". Заказчик — "+it(s.value.developer.legal_name)+", подрядчик — "+it(s.value.gov_registry.contractor)+".",1)]),B(Ot).aptTypes.value.size?(Q(),st("p",$b,[p[16]||(p[16]=jt("Выберите корпус и этаж — откроется план с квартирами, их статусом и прогулкой внутри. Планировки квартир — из каталога застройщика, ")),p[17]||(p[17]=P("b",{class:"warn"},"расстановка на этаже условная",-1)),p[18]||(p[18]=jt("; статусы и цены ведёт отдел продаж")),B(Mo)?(Q(),st(Qt,{key:0},[jt(" в CRM — они обновляются на странице сами")],64)):Jt("",!0),B($u)?(Q(),st(Qt,{key:1},[jt(", стартовые значения тестовые")],64)):Jt("",!0),p[19]||(p[19]=jt("."))])):(Q(),st("p",Yb,p[20]||(p[20]=[jt("Выберите корпус и этаж — откроется план с квартирами, их статусом и прогулкой внутри. "),P("b",{class:"warn"},"Планировки, статусы и цены — тестовые",-1),jt(": настоящих планов застройщика в открытом доступе нет.")])))],64)),B(qa)&&n.value?(Q(),st("button",{key:2,class:"pk-card",onClick:p[5]||(p[5]=v=>e("parking"))},[p[22]||(p[22]=P("span",{class:"pk-ico","aria-hidden":"true"},"P",-1)),P("span",qb,[P("b",null,"Паркинг · "+it(n.value.levels)+" "+it(B(Rr)(n.value.levels,"уровень","уровня","уровней"))+" под домами",1),P("small",null,[jt(it(n.value.by_status.available)+" свободно из "+it(n.value.total),1),n.value.price_from?(Q(),st(Qt,{key:0},[jt(" · от "+it(B(xo)(n.value.price_from)),1)],64)):Jt("",!0)])]),p[23]||(p[23]=P("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},[P("path",{d:"M9 6l6 6-6 6",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1))])):Jt("",!0),P("div",jb,[P("div",Zb,[P("div",Kb,"Рядом"+it(B(Pe)?` с корпусом ${B(Pe).n}`:""),1),P("label",Jb,[Ei(P("input",{"onUpdate:modelValue":p[6]||(p[6]=v=>B(D).places.on=v),type:"checkbox"},null,512),[[Tr,B(D).places.on]]),p[24]||(p[24]=P("span",{class:"knob"},null,-1)),p[25]||(p[25]=jt("на карте"))])]),P("div",Qb,[(Q(!0),st(Qt,null,Se(B(a),v=>(Q(),st("button",{key:v,class:$e(["cat",{on:B(D).places.cats.includes(v)}]),style:De({"--c":B(ao)[v].color}),onClick:g=>l(v)},it(B(ao)[v].label),15,tw))),128))]),P("ul",null,[(Q(!0),st(Qt,null,Se(c.value,v=>(Q(),st("li",{key:v.osm},[v.logo?(Q(),st("span",ew,[P("img",{src:B(ql)(v.logo),alt:"",loading:"lazy"},null,8,nw)])):(Q(),st("i",{key:1,style:De({background:B(ao)[v.category].color})},null,4)),P("span",iw,it(v.name),1),P("span",sw,it(B(qd)(v.w,v.d)),1)]))),128))]),P("label",ow,[Ei(P("input",{"onUpdate:modelValue":p[7]||(p[7]=v=>B(D).places.all=v),type:"checkbox"},null,512),[[Tr,B(D).places.all]]),p[26]||(p[26]=P("span",{class:"knob"},null,-1)),p[27]||(p[27]=jt("показывать не только известные места"))]),P("button",{class:"btn small wide2",onClick:p[8]||(p[8]=v=>e("places"))},"Показать места вокруг на карте")])]))}}),aw=qe(rw,[["__scopeId","data-v-8cd91f3d"]]),lw={class:"panel glass scroll-thin"},cw={class:"head"},hw={class:"eyebrow"},uw={key:0,class:"note"},dw={class:"stat"},fw={class:"num"},pw={key:1,class:"from"},mw={class:"levels"},gw=["onClick"],vw={class:"sect","aria-hidden":"true"},_w={class:"t"},xw={class:"bar"},yw={class:"cats"},Mw=["onClick"],Sw={class:"switch"},bw={key:2,class:"card"},ww={class:"card-head"},Ew={class:"eyebrow"},Tw={class:"grid"},Aw={class:"num"},Cw={class:"num"},Rw={class:"num"},Pw={key:0,class:"note"},Dw={key:3,class:"note mt"},Lw=Ye({__name:"ParkingPanel",emits:["close","level","select","lead"],setup(i,{emit:t}){const e=t,n=Yt(()=>Ot.parking.value),s=Yt(()=>Ot.project.value),o=Yt(()=>n.value.summary),r=Yt(()=>Ge.value?ff(Ge.value,Ot.parking.value?.levels.find(h=>h.level===Ge.value.level)):null),a=h=>s.value.building.blocks?.find(u=>u.id===h)?.label??h,l=Yt(()=>pf.filter(h=>n.value.spots.some(u=>u.kind===h)));function c(h){const u=D.parking.filter.kinds.indexOf(h);u>=0?D.parking.filter.kinds.splice(u,1):D.parking.filter.kinds.push(h)}return(h,u)=>(Q(),st("aside",lw,[P("div",cw,[P("div",null,[P("div",hw,"Подземный паркинг · ЖК "+it(s.value.name),1),P("h2",null,it(o.value.levels)+" "+it(B(Rr)(o.value.levels,"уровень","уровня","уровней"))+" · "+it(o.value.total)+" "+it(B(Rr)(o.value.total,"место","места","мест")),1)]),P("button",{class:"btn ghost icon","aria-label":"Закрыть",onClick:u[0]||(u[0]=d=>e("close"))},u[4]||(u[4]=[P("svg",{width:"18",height:"18",viewBox:"0 0 24 24"},[P("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1)]))]),n.value.test?(Q(),st("p",uw,u[5]||(u[5]=[P("b",{class:"warn"},"Паркинг тестовый",-1),jt(": планов застройщика в открытом доступе нет — раскладка, статусы и цены условные; статусы ведёт отдел продаж в CRM.")]))):Jt("",!0),P("div",dw,[(Q(),st(Qt,null,Se(["available","booked","sold"],d=>P("span",{key:d,style:De({"--c":B(Je)[d]})},[u[6]||(u[6]=P("i",null,null,-1)),jt(it(B($a)[d])+" ",1),P("b",fw,it(o.value.by_status[d]),1)],4)),64))]),o.value.price_from?(Q(),st("div",pw,[u[7]||(u[7]=jt("Свободные — от ")),P("b",null,it(B(xo)(o.value.price_from)),1)])):Jt("",!0),u[15]||(u[15]=P("div",{class:"eyebrow mt"},"Уровни",-1)),P("div",mw,[(Q(!0),st(Qt,null,Se(n.value.levels,d=>(Q(),st("button",{key:d.level,class:$e(["lvl",{on:B(D).parking.level===d.level}]),onClick:f=>e("level",d.level)},[P("span",vw,[(Q(!0),st(Qt,null,Se(n.value.levels,f=>(Q(),st("i",{key:f.level,class:$e({on:f.level===d.level})},null,2))),128))]),P("span",_w,[P("b",null,"Уровень "+it(B(co)(d.level)),1),P("small",null,it(d.available)+" свободно из "+it(d.total),1)]),P("span",xw,[P("i",{style:De({width:`${d.total?d.available/d.total*100:0}%`})},null,4)])],10,gw))),128))]),u[16]||(u[16]=P("div",{class:"eyebrow mt"},"Какое место",-1)),P("div",yw,[(Q(!0),st(Qt,null,Se(l.value,d=>(Q(),st("button",{key:d,class:$e(["cat",{on:B(D).parking.filter.kinds.includes(d)}]),onClick:f=>c(d)},it(B(Xa)[d]),11,Mw))),128))]),P("label",Sw,[Ei(P("input",{"onUpdate:modelValue":u[1]||(u[1]=d=>B(D).parking.filter.onlyAvailable=d),type:"checkbox"},null,512),[[Tr,B(D).parking.filter.onlyAvailable]]),u[8]||(u[8]=P("span",{class:"knob"},null,-1)),u[9]||(u[9]=jt("только свободные"))]),B(Ge)?(Q(),st("div",bw,[P("div",ww,[P("div",null,[P("div",Ew,"Уровень "+it(B(co)(B(Ge).level)),1),P("h3",null,"Место "+it(B(Ge).code),1)]),P("span",{class:"pill",style:De({"--c":B(Je)[B(Ge).status]})},it(B($a)[B(Ge).status]),5)]),P("div",Tw,[P("div",null,[u[10]||(u[10]=P("span",null,"Тип",-1)),P("b",null,it(B(Xa)[B(Ge).kind]),1)]),P("div",null,[u[11]||(u[11]=P("span",null,"Размер",-1)),P("b",Aw,it(B(mf)(B(Ge).polygon)),1)]),P("div",null,[u[12]||(u[12]=P("span",null,"Площадь",-1)),P("b",Cw,it(B(Ls)(B(Ge).area)),1)]),P("div",null,[u[13]||(u[13]=P("span",null,"Цена",-1)),P("b",Rw,it(B(Ge).price?B(xo)(B(Ge).price):B(Ge).status==="sold"?"продано":"по запросу"),1)])]),r.value?(Q(),st("p",Pw,"Ближайший лифт — в "+it(a(r.value.block).toLowerCase())+", ≈ "+it(r.value.meters)+" м.",1)):Jt("",!0),B(Ge).status==="available"||B(Ge).status==="booked"?(Q(),st("button",{key:1,class:"btn primary wide",onClick:u[2]||(u[2]=d=>e("lead"))},"Узнать цену и записаться")):Jt("",!0),P("button",{class:"btn wide mt8",onClick:u[3]||(u[3]=d=>e("select",null))},"Снять выбор")])):(Q(),st("p",Dw,[u[14]||(u[14]=jt("Нажмите на место на уровне — покажем тип, размер, цену и ближайший лифт в корпус.")),B(kc)?(Q(),st(Qt,{key:0},[jt(" Сейчас открыт уровень "+it(B(co)(B(kc).level))+".",1)],64)):Jt("",!0)]))]))}}),Iw=qe(Lw,[["__scopeId","data-v-960c3bb9"]]),Uw={key:3,class:"view-hud glass"},Nw={key:0,class:"hint glass"},Fw=2e4,Ow=Ye({__name:"App",setup(i){let t=new URLSearchParams(location.search).get("p")||"";const e=ai();let n=null;rf(async()=>{n=new Cy(e.value,{hoverFloor:(w,T,O)=>{D.hoverFloor=w,D.tip={x:T,y:O}},clickFloor:w=>c(w),hoverUnit:(w,T,O)=>{D.hoverUnit=w,D.tip={x:T,y:O}},clickUnit:w=>h(w),interacted:()=>D.touched=!0,xrEnded:()=>D.xrActive=!1,hoverBlock:(w,T,O)=>{D.hoverBlock=w,D.tip={x:T,y:O}},clickBlock:w=>p(w),hoverSpot:(w,T,O)=>{D.parking.hoverSpot=w,D.tip={x:T,y:O}},clickSpot:w=>f(w),clickParking:()=>d()});try{D.progress=.05;const w=await Rn.projects();Ot.projects.value=w.items,w.items.some(G=>G.slug===t)||(t=w.items[0].slug);const[T,O,X,V]=await Promise.all([Rn.project(t),Rn.units(t),Rn.context(t),Rn.parking(t).catch(()=>null)]);document.title=`ЖК ${T.name} — 3D · Spliti`,D.progress=.35;const Z=[...new Set(T.building.floors.map(G=>G.type))],pt=new Map;let z=0;await Promise.all(Z.map(async G=>{pt.set(G,await Rn.floorType(t,G)),z++,D.progress=.35+.5*(z/Z.length)})),Ot.project.value=T,Ot.units.value=O.items,Ot.context.value=X,Ot.types.value=pt,Ot.observedAt.value=O.observed_at,Ot.parking.value=V?.levels.length?V:null,O.items.some(G=>G.type_code)&&Rn.apartmentTypes(t).then(G=>Ot.aptTypes.value=new Map(G.items.map(nt=>[nt.code,nt]))).catch(()=>{}),n.load(T,X,pt),Ot.parking.value&&(n.loadParking(Ot.parking.value),n.styleParking(D.parking.filter,null,null)),n.setSun(D.sun.day,D.sun.hour),n.setAtmosphere(D.atmo.season,D.atmo.weather),n.setPlaceFilter(D.places.cats,D.places.all,D.places.on),D.progress=1,D.xrSupported=await n.xr.checkSupport(),setTimeout(()=>D.loading=!1,250)}catch(w){D.error=w instanceof Error?w.message:String(w)}window.addEventListener("keydown",S),s=window.setInterval(()=>void r(),Fw),document.addEventListener("visibilitychange",l)}),jl(()=>{window.removeEventListener("keydown",S),clearInterval(s),document.removeEventListener("visibilitychange",l),n?.dispose()});let s=0,o=!1;async function r(){if(!(!Mo.value||o||document.hidden||D.loading)){o=!0;try{const w=(await Rn.units(t)).items,T=new Map(Ot.units.value.map(X=>[X.id,X]));w.some(X=>{const V=T.get(X.id);return!V||V.status!==X.status||V.price!==X.price})&&(Ot.units.value=w,n?.updateUnits(Hn.value,D.filter,D.hoverUnit,D.unitId)),await a()}catch{}finally{o=!1}}}async function a(){if(!qa.value)return;const w=await Rn.parking(t),T=new Map(Ot.parking.value.spots.map(O=>[O.id,O]));w.spots.some(O=>T.get(O.id)?.status!==O.status||T.get(O.id)?.price!==O.price)&&(Ot.parking.value=w,n?.updateParking(w.spots),n?.styleParking(D.parking.filter,D.parking.hoverSpot,D.parking.spotId))}function l(){document.hidden||r()}async function c(w){if(n){if(pn.value){if(!D.blockId)return;let T=Ot.blockLayouts.value.get(D.blockId);if(!T){T=await Rn.block(t,D.blockId);const O=new Map(Ot.blockLayouts.value);O.set(T.id,T),Ot.blockLayouts.value=O}D.floor=w,D.blockFloor=w,D.unitId=null,D.hoverUnit=null,D.mode="floor",n.openBlockFloor(T,w,Hn.value,D.filter);return}D.floor=w,D.unitId=null,D.hoverUnit=null,D.hoverFloor=null,D.mode="floor",n.showFloor(w,Ot.units.value,D.filter)}}function h(w){if(w===null){D.unitId=null;return}const T=Hn.value.find(O=>O.id===w);T&&((D.floor!==T.floor||D.mode!=="floor")&&c(T.floor),D.unitId=w)}const u=ai([]);function d(w){if(!n||!Ot.parking.value)return;const T=w??D.parking.level??Ot.parking.value.levels[0].level;Ot.parking.value.spots.find(O=>O.id===D.parking.spotId)?.level!==T&&(D.parking.spotId=null),D.parking.level=T,D.mode="parking",D.blockId=null,D.floor=null,D.unitId=null,D.hoverBlock=null,n.showParking(T),n.styleParking(D.parking.filter,D.parking.hoverSpot,D.parking.spotId)}function f(w){if(w===null){D.parking.spotId=null;return}const T=Ot.parking.value?.spots.find(O=>O.id===w);T&&((D.mode!=="parking"||D.parking.level!==T.level)&&d(T.level),D.parking.spotId=w)}function p(w){n&&(D.blockId!==w&&(D.blockFloor=Math.min(Math.max(D.blockFloor||5,2),v(w))),D.blockId=w,D.mode="block",D.viewSide=0,n.selectBlock(w,D.blockFloor),u.value=n.blockSides(w),x())}function v(w){return Ot.project.value?.building.blocks?.find(T=>T.id===w)?.levels??1}function g(w){!n||!D.blockId||(n.setBlockFloor(D.blockId,w),x())}function m(){!n||!D.blockId||(D.mode="view",n.showView(D.blockId,D.blockFloor,D.viewSide))}let M=0;function x(){clearTimeout(M),D.blockSun=null,M=window.setTimeout(()=>{n&&D.blockId&&(D.blockSun=n.blockSunMinutes(D.blockId,D.blockFloor,D.sun.day))},60)}function _(){pn.value&&D.blockId?(D.floor=null,D.unitId=null,p(D.blockId)):U()}function U(){D.parking.spotId=null,D.parking.hoverSpot=null,D.floor=null,D.blockId=null,D.mode="building",D.floor=null,D.unitId=null,D.hoverUnit=null,n?.flyToBuilding()}function R(){const w=sn.value;!n||!w||(D.mode="walk",n.setInteriorStyle(D.interior),n.enterWalk(w,Hn.value,y.value))}function E(){const w=sn.value;if(n){if(D.mode==="view"&&D.blockId){p(D.blockId);return}D.xrActive||(w?(D.mode="floor",n.showFloor(w.floor,Hn.value,D.filter),n.styleUnits(D.filter,null,w.id)):U())}}async function A(){const w=sn.value;if(!(!n||!w))try{D.xrActive=!0,await n.enterVR(w.floor)}catch{D.xrActive=!1}}function S(w){w.key==="Escape"&&(D.showLead||D.showData?(D.showLead=!1,D.showData=!1):D.mode==="walk"||D.mode==="view"?E():D.mode==="parking"?D.parking.spotId!==null?D.parking.spotId=null:U():D.mode==="block"?U():D.unitId!==null?D.unitId=null:D.mode==="floor"&&_())}const y=Yt(()=>{const w=sn.value;if(!w?.polygon)return[];const T=Ti.value.find(X=>X.n===w.floor),O=T&&Zl(T.type);return O?Ef(O,w.polygon,qr.value):[]}),N=Yt(()=>{const w=sn.value,T=Ot.project.value,O=Ot.context.value;if(!w||!T||!O||!y.value.length)return null;const X=Ti.value.find(V=>V.n===w.floor);return Cf(y.value,O,qr.value,X.elevation+1.5,yo.value?.origin)});let H=0;function W(){clearTimeout(H),D.sunHours=null;const w=sn.value,T=Ot.project.value;!w||!T||!n||(H=window.setTimeout(()=>{const O=Ti.value.find(X=>X.n===w.floor);D.sunHours=n.sunMinutes(y.value,O.elevation,D.sun.day,qr.value)},60))}On(()=>[D.filter.rooms.slice(),D.filter.onlyAvailable,D.hoverUnit,D.unitId],()=>{n?.styleUnits(D.filter,D.hoverUnit,D.unitId)}),On(()=>[D.parking.filter.kinds.slice(),D.parking.filter.onlyAvailable,D.parking.hoverSpot,D.parking.spotId],()=>{n?.styleParking(D.parking.filter,D.parking.hoverSpot,D.parking.spotId)}),On(()=>D.unitId,W),On(()=>D.sun.day,()=>{W(),D.blockId&&x()}),On(()=>[D.places.cats.slice(),D.places.all,D.places.on],()=>{n?.setPlaceFilter(D.places.cats,D.places.all,D.places.on)}),On(()=>[D.sun.day,D.sun.hour],([w,T])=>n?.setSun(w,T)),On(()=>[D.atmo.season,D.atmo.weather],([w,T])=>n?.setAtmosphere(w,T)),On(()=>D.atmo.sunPath,w=>n?.setSunPathVisible(w)),On(()=>D.interior,w=>n?.setInteriorStyle(w));function K(w){n?.hoverFloorFromUI(w)}function at(w,T){n?.setStick(w,T)}const F=Yt(()=>ja.value.length);return(w,T)=>(Q(),st("div",{class:$e(["app",`mode-${B(D).mode}`])},[P("div",{ref_key:"host",ref:e,class:"stage"},null,512),!B(D).loading&&B(Ot).project.value?(Q(),st(Qt,{key:0},[wi($y,{project:B(Ot).project.value,mode:B(D).mode,onBack:U,onData:T[0]||(T[0]=O=>B(D).showData=!0)},null,8,["project","mode"]),B(pn)?(Q(),st(Qt,{key:0},[B(D).mode==="building"||B(D).mode==="block"?(Q(),Cn(Rb,{key:0,blocks:B(Ot).project.value.building.blocks??[],current:B(D).blockId,onSelect:p,onHover:T[1]||(T[1]=O=>B(D).hoverBlock=O)},null,8,["blocks","current"])):Jt("",!0),B(D).mode==="building"||B(D).mode==="block"?(Q(),Cn(aw,{key:1,sides:u.value,onClose:U,onView:m,onFloor:g,onOpenFloor:T[2]||(T[2]=O=>c(B(D).blockFloor)),onPlaces:T[3]||(T[3]=O=>B(n)?.flyToPlaces()),onParking:T[4]||(T[4]=O=>d())},null,8,["sides"])):Jt("",!0),B(D).mode==="parking"&&B(qa)?(Q(),Cn(Iw,{key:2,onClose:U,onLevel:d,onSelect:f,onLead:T[5]||(T[5]=O=>B(D).showLead=!0)})):Jt("",!0),B(D).mode==="view"&&B(Pe)?(Q(),st("div",Uw,[P("button",{class:"btn small",onClick:E},T[9]||(T[9]=[P("svg",{width:"14",height:"14",viewBox:"0 0 24 24"},[P("path",{d:"M15 6l-6 6 6 6",stroke:"currentColor","stroke-width":"2.2",fill:"none","stroke-linecap":"round"})],-1),jt(" Назад ")])),P("span",null,[P("b",null,it(B(Pe).label),1),jt(" · "+it(B(D).blockFloor)+" этаж · "+it(u.value[B(D).viewSide]?.name),1)]),T[10]||(T[10]=P("span",{class:"muted"},"тяните, чтобы осмотреться",-1))])):Jt("",!0)],64)):Jt("",!0),(!B(pn)||B(D).mode==="floor")&&B(D).mode!=="walk"?(Q(),Cn(eM,{key:1,floors:B(ja),current:B(D).floor,count:F.value,onSelect:c,onHover:K},null,8,["floors","current","count"])):Jt("",!0),(!B(pn)||B(D).mode==="floor")&&B(D).mode!=="walk"?(Q(),Cn(mS,{key:2,view:N.value,onSelectUnit:h,onWalk:R,onLead:T[6]||(T[6]=O=>B(D).showLead=!0),onBack:_},null,8,["view"])):Jt("",!0),B(D).xrActive?Jt("",!0):(Q(),Cn(BS,{key:3})),B(D).mode==="walk"?(Q(),Cn(qS,{key:4,"xr-supported":B(D).xrSupported,onExit:E,onVr:A,onStick:at},null,8,["xr-supported"])):Jt("",!0),wi(JS),wi(lf,{name:"fade"},{default:af(()=>[B(D).mode==="building"&&!B(D).touched?(Q(),st("div",Nw,it(B(pn)?"Нажмите на корпус — покажем вид с любого этажа и солнце по сторонам":"Наведите на этаж и нажмите — откроется план с квартирами"),1)):Jt("",!0)]),_:1}),B(D).showData?(Q(),Cn(ab,{key:5,onClose:T[7]||(T[7]=O=>B(D).showData=!1)})):Jt("",!0),B(D).showLead?(Q(),Cn(pb,{key:6,onClose:T[8]||(T[8]=O=>B(D).showLead=!1)})):Jt("",!0)],64)):Jt("",!0),B(D).loading?(Q(),Cn(Mb,{key:1,progress:B(D).progress,error:B(D).error},null,8,["progress","error"])):Jt("",!0)],2))}}),kw=qe(Ow,[["__scopeId","data-v-c8edfc8c"]]);cf(kw).mount("#app");
