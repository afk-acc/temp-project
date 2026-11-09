import{r as ph,G as Bn,c as Xt,y as ha,d as He,u as k,o as j,b as et,e as R,F as $t,k as Se,t as tt,i as Zt,_ as Ve,h as Gt,f as pi,l as xn,n as Ie,C as pn,w as mi,m as go,v as mr,a as Ln,B as xc,H as mh,j as _o,S as gh,x as Rn,A as Dr,z as _h,q as as,p as vh,T as xh,E as Mh}from"./client-CPGRzABB.js";import{m as Sr,d as yh,b as en,e as gi,r as Sh,c as Ss,a as xs,g as Mc,f as bh,p as Eh,S as wh}from"./theme-BMOrZybK.js";const C=ph({loading:!0,progress:0,error:"",mode:"building",floor:null,unitId:null,hoverFloor:null,hoverUnit:null,tip:{x:0,y:0},filter:{rooms:[],onlyAvailable:!1},sun:{day:Ah(),hour:15},xrSupported:!1,xrActive:!1,touched:!1,showData:!1,showLead:!1,sunMinutes:null,blockId:null,hoverBlock:null,blockFloor:1,viewSide:0,blockSun:null,places:{on:!0,all:!1,cats:["metro","shop","bank","food","edu","health","sport","auto"]}}),Ct={project:Bn(null),units:Bn([]),context:Bn(null),types:Bn(new Map),observedAt:Bn(""),projects:Bn([]),blockLayouts:Bn(new Map),aptTypes:Bn(new Map)},qe=Xt(()=>Ct.project.value?.building.mode==="massing"),bs=Xt(()=>qe.value&&C.blockId?Ct.blockLayouts.value.get(C.blockId)??null:null),jn=Xt(()=>bs.value?.floors??(qe.value?[]:Ct.project.value?.building.floors??[])),Lr=Xt(()=>bs.value?.azimuth_deg??Ct.project.value?.building.azimuth_deg??0);function ua(i){return bs.value?bs.value.floor_types[i]:Ct.types.value.get(i)}const gn=Xt(()=>qe.value?Ct.units.value.filter(i=>i.block===C.blockId):Ct.units.value),yc=Xt(()=>Ct.units.value.some(i=>i.test)),Es=Xt(()=>Ct.units.value.some(i=>i.source==="crm")),Me=Xt(()=>Ct.project.value?.building.blocks?.find(i=>i.id===C.blockId)??null),vo=Xt(()=>{const i=jn.value;if(!i.length)return[];const t=new Map;for(const e of gn.value)t.has(e.floor)||t.set(e.floor,[]),t.get(e.floor).push(e);return[...i].reverse().map(e=>{const n=(t.get(e.n)??[]).sort((s,r)=>s.number-r.number);return{n:e.n,residential:n.length>0,total:n.length,available:n.filter(s=>s.status==="available").length,matching:n.filter(s=>Sr(s,C.filter)).length,statuses:n.map(s=>s.status)}})}),ke=Xt(()=>gn.value.find(i=>i.id===C.unitId)??null),Th=Xt(()=>gn.value.find(i=>i.id===C.hoverUnit)??null),zn=Xt(()=>{const i=Ct.units.value,t={available:0,booked:0,sold:0,unavailable:0};for(const e of i)t[e.status]++;return{total:i.length,by:t,matching:i.filter(e=>Sr(e,C.filter)).length}});function Ah(){const i=new Date;return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`}const Sc=Math.PI/180;function gr(i,t,e){const n=e*Sc;return[i*Math.cos(n)+t*Math.sin(n),-i*Math.sin(n)+t*Math.cos(n)]}function Rh(i,t,e){const[n,s]=gr(i,t,e);return(Math.atan2(n,s)/Sc+360)%360}const Ch=["север","северо-восток","восток","юго-восток","юг","юго-запад","запад","северо-запад"],Ph=["С","СВ","В","ЮВ","Ю","ЮЗ","З","СЗ"];function Ha(i,t=!1){const e=Math.round((i%360+360)%360/45)%8;return t?Ph[e]:Ch[e]}function Va(i,t){const e=((i-t)%360+540)%360-180;return Math.abs(e)}function Dh(i,t,e){const n=[];for(const s of i.outline)for(const r of Ih(s,1.5)){const[o,a,l,c,h,u]=r,d=(o+l)/2,p=(a+c)/2;yh(d-h*.3,p-u*.3,t)>.8&&!Lh(d-h*.6,p-u*.6,t)||n.push({mid:[d,p],normal:[h,u],azimuth:Rh(h,u,e),length:Math.hypot(l-o,c-a)})}return n}function Lh(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++)e[s][1]>t!=e[r][1]>t&&i<(e[r][0]-e[s][0])*(t-e[s][1])/(e[r][1]-e[s][1]+1e-12)+e[s][0]&&(n=!n);return n}function Ih(i,t){const[e,n,s,r,o,a]=i,l=Math.hypot(s-e,r-n),c=Math.max(1,Math.round(l/t)),h=[];for(let u=0;u<c;u++){const d=u/c,p=(u+1)/c;h.push([e+(s-e)*d,n+(r-n)*d,e+(s-e)*p,n+(r-n)*p,o,a])}return h}function Uh(i,t,e,n,s=[0,0]){const r=new Map;for(const _ of i){const m=Ha(_.azimuth);r.set(m,(r.get(m)??0)+_.length)}const o=[...r.entries()].filter(([,_])=>_>=1.2).sort((_,m)=>m[1]-_[1]).map(([_])=>_),a=Fh(i.map(_=>Math.round(_.azimuth/15)*15)),l=new Map;for(const _ of t.pois){const m=Math.hypot(_.x-s[0],_.y-s[1]);if(m>1500)continue;const f=(Math.atan2(_.x-s[0],_.y-s[1])*180/Math.PI+360)%360,M=Math.atan2(_.r,m)*180/Math.PI;if(a.some(x=>Va(x,f)<=35+M)){const x=Nh(_),v=Math.max(0,m-_.r*.5);(!l.has(x)||l.get(x)>v)&&l.set(x,v)}}const c=[...l.entries()].sort((_,m)=>_[1]-m[1]).slice(0,3).map(([_,m])=>`${_} — ${m<1e3?`${Math.round(m/10)*10} м`:`${(m/1e3).toFixed(1).replace(".",",")} км`}`);let h=1/0,u=!1;const d=i.length?gr(i[0].mid[0],i[0].mid[1],e):[0,0],p=[d[0]+s[0],d[1]+s[1]];for(const _ of t.buildings){const m=_.p.reduce((x,v)=>[x[0]+v[0]/_.p.length,x[1]+v[1]/_.p.length],[0,0]),f=Math.hypot(m[0]-p[0],m[1]-p[1]);if(f>250)continue;const M=(Math.atan2(m[0]-p[0],m[1]-p[1])*180/Math.PI+360)%360;a.some(x=>Va(x,M)<=40)&&_.h>=n-1&&(u=!0,h=Math.min(h,f))}const g=u?`напротив дом выше уровня окон, ~${Math.round(h/10)*10} м`:`окна выше соседних домов (${Math.round(n)} м над землёй)`;return{sides:o,sidesShort:o.map(_=>Ha(Oh(_),!0)),highlights:c,openness:g}}function Nh(i){return i.kind==="water"?i.name:i.name==="парк"?"парк":`парк «${i.name}»`}function Fh(i){return[...new Set(i)]}function Oh(i){return["север","северо-восток","восток","юго-восток","юг","юго-запад","запад","северо-запад"].indexOf(i)*45}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="170",Gi={ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kh=0,Ga=1,Bh=2,bc=1,Ec=2,Cn=3,Jn=0,ze=1,je=2,Zn=0,Wi=1,Wa=2,Xa=3,$a=4,zh=5,hi=100,Hh=101,Vh=102,Gh=103,Wh=104,Xh=200,$h=201,Yh=202,qh=203,xo=204,Mo=205,jh=206,Zh=207,Kh=208,Jh=209,Qh=210,tu=211,eu=212,nu=213,iu=214,yo=0,So=1,bo=2,Yi=3,Eo=4,wo=5,To=6,Ao=7,wc=0,su=1,ru=2,Kn=0,ou=1,au=2,lu=3,Tc=4,cu=5,hu=6,uu=7,Ac=300,qi=301,ji=302,Ro=303,Co=304,br=306,_r=1e3,di=1001,Po=1002,Ze=1003,du=1004,Ns=1005,_n=1006,Ir=1007,fi=1008,Nn=1009,Rc=1010,Cc=1011,ws=1012,fa=1013,_i=1014,vn=1015,Ds=1016,pa=1017,ma=1018,Zi=1020,Pc=35902,Dc=1021,Lc=1022,hn=1023,Ic=1024,Uc=1025,Xi=1026,Ki=1027,ga=1028,_a=1029,Nc=1030,va=1031,xa=1033,cr=33776,hr=33777,ur=33778,dr=33779,Do=35840,Lo=35841,Io=35842,Uo=35843,No=36196,Fo=37492,Oo=37496,ko=37808,Bo=37809,zo=37810,Ho=37811,Vo=37812,Go=37813,Wo=37814,Xo=37815,$o=37816,Yo=37817,qo=37818,jo=37819,Zo=37820,Ko=37821,fr=36492,Jo=36494,Qo=36495,Fc=36283,ta=36284,ea=36285,na=36286,fu=3200,pu=3201,Oc=0,mu=1,Yn="",Oe="srgb",Qi="srgb-linear",Er="linear",oe="srgb",bi=7680,Ya=519,gu=512,_u=513,vu=514,kc=515,xu=516,Mu=517,yu=518,Su=519,qa=35044,ja="300 es",In=2e3,vr=2001;class Mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Za=1234567;const Ms=Math.PI/180,Ts=180/Math.PI;function ts(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function Ma(i,t){return(i%t+t)%t}function bu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Eu(i,t,e){return i!==t?(e-i)/(t-i):0}function ys(i,t,e){return(1-e)*i+e*t}function wu(i,t,e,n){return ys(i,t,1-Math.exp(-e*n))}function Tu(i,t=1){return t-Math.abs(Ma(i,t*2)-t)}function Au(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ru(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Cu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Pu(i,t){return i+Math.random()*(t-i)}function Du(i){return i*(.5-Math.random())}function Lu(i){i!==void 0&&(Za=i);let t=Za+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Iu(i){return i*Ms}function Uu(i){return i*Ts}function Nu(i){return(i&i-1)===0&&i!==0}function Fu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ou(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ku(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const qn={DEG2RAD:Ms,RAD2DEG:Ts,generateUUID:ts,clamp:Ce,euclideanModulo:Ma,mapLinear:bu,inverseLerp:Eu,lerp:ys,damp:wu,pingpong:Tu,smoothstep:Au,smootherstep:Ru,randInt:Cu,randFloat:Pu,randFloatSpread:Du,seededRandom:Lu,degToRad:Iu,radToDeg:Uu,isPowerOfTwo:Nu,ceilPowerOfTwo:Fu,floorPowerOfTwo:Ou,setQuaternionFromProperEuler:ku,normalize:Ne,denormalize:Bi};class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,s,r,o,a,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],M=s[1],x=s[4],v=s[7],U=s[2],A=s[5],T=s[8];return r[0]=o*_+a*M+l*U,r[3]=o*m+a*x+l*A,r[6]=o*f+a*v+l*T,r[1]=c*_+h*M+u*U,r[4]=c*m+h*x+u*A,r[7]=c*f+h*v+u*T,r[2]=d*_+p*M+g*U,r[5]=d*m+p*x+g*A,r[8]=d*f+p*v+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ur.makeScale(t,e)),this}rotate(t){return this.premultiply(Ur.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ur.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ur=new Bt;function Bc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bu(){const i=xr("canvas");return i.style.display="block",i}const Ka={};function gs(i){i in Ka||(Ka[i]=!0,console.warn(i))}function zu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Hu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Vu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(i.r=Un(i.r),i.g=Un(i.g),i.b=Un(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Yn?Er:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ja=[.64,.33,.3,.6,.15,.06],Qa=[.2126,.7152,.0722],tl=[.3127,.329],el=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nl=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[Qi]:{primaries:Ja,whitePoint:tl,transfer:Er,toXYZ:el,fromXYZ:nl,luminanceCoefficients:Qa,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:Ja,whitePoint:tl,transfer:oe,toXYZ:el,fromXYZ:nl,luminanceCoefficients:Qa,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}});let Ei;class Gu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ei===void 0&&(Ei=xr("canvas")),Ei.width=t.width,Ei.height=t.height;const n=Ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Un(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wu=0;class zc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Nr(s[o].image)):r.push(Nr(s[o]))}else r=Nr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Nr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xu=0;class Ue extends Mi{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=di,s=di,r=_n,o=fi,a=hn,l=Nn,c=Ue.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=ts(),this.name="",this.source=new zc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ac)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _r:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case Po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _r:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case Po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Ac;Ue.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(p+1)/2,U=(f+1)/2,A=(h+d)/4,T=(u+_)/4,P=(g+m)/4;return x>v&&x>U?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=T/n):v>U?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=P/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=T/r,s=P/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $u extends Mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ue(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new zc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends $u{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Hc extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yu extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*_,M=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const U=Math.sqrt(x),A=Math.atan2(U,f*M);m=Math.sin(m*A)/U,a=Math.sin(a*A)/U}const v=a*M;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(il.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fr.copy(this).projectOnVector(t),this.sub(Fr)}reflect(t){return this.sub(Fr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fr=new D,il=new Qn;class yi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(t.matrixWorld),this.union(Fs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),Os.subVectors(this.max,ls),wi.subVectors(t.a,ls),Ti.subVectors(t.b,ls),Ai.subVectors(t.c,ls),Hn.subVectors(Ti,wi),Vn.subVectors(Ai,Ti),ni.subVectors(wi,Ai);let e=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-ni.z,ni.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,ni.z,0,-ni.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-ni.y,ni.x,0];return!Or(e,wi,Ti,Ai,Os)||(e=[1,0,0,0,1,0,0,0,1],!Or(e,wi,Ti,Ai,Os))?!1:(ks.crossVectors(Hn,Vn),e=[ks.x,ks.y,ks.z],Or(e,wi,Ti,Ai,Os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bn=[new D,new D,new D,new D,new D,new D,new D,new D],rn=new D,Fs=new yi,wi=new D,Ti=new D,Ai=new D,Hn=new D,Vn=new D,ni=new D,ls=new D,Os=new D,ks=new D,ii=new D;function Or(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ii.fromArray(i,r);const a=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),l=t.dot(ii),c=e.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const qu=new yi,cs=new D,kr=new D;class es{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):qu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);const e=cs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(kr)),this.expandByPoint(cs.copy(t.center).sub(kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new D,Br=new D,Bs=new D,Gn=new D,zr=new D,zs=new D,Hr=new D;class wr{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Br.copy(t).add(e).multiplyScalar(.5),Bs.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(Br);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Bs),a=Gn.dot(this.direction),l=-Gn.dot(Bs),c=Gn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Br).addScaledVector(Bs,d),p}intersectSphere(t,e){En.subVectors(t.center,this.origin);const n=En.dot(this.direction),s=En.dot(En)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,s,r){zr.subVectors(e,t),zs.subVectors(n,t),Hr.crossVectors(zr,zs);let o=this.direction.dot(Hr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gn.subVectors(this.origin,t);const l=a*this.direction.dot(zs.crossVectors(Gn,zs));if(l<0)return null;const c=a*this.direction.dot(zr.cross(Gn));if(c<0||l+c>o)return null;const h=-a*Gn.dot(Hr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ri.setFromMatrixColumn(t,0).length(),r=1/Ri.setFromMatrixColumn(t,1).length(),o=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ju,t,Zu)}lookAt(t,e,n){const s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Wn.crossVectors(n,$e),Wn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Wn.crossVectors(n,$e)),Wn.normalize(),Hs.crossVectors($e,Wn),s[0]=Wn.x,s[4]=Hs.x,s[8]=$e.x,s[1]=Wn.y,s[5]=Hs.y,s[9]=$e.y,s[2]=Wn.z,s[6]=Hs.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],M=n[3],x=n[7],v=n[11],U=n[15],A=s[0],T=s[4],P=s[8],E=s[12],y=s[1],L=s[5],$=s[9],G=s[13],I=s[2],z=s[6],H=s[10],nt=s[14],Y=s[3],at=s[7],mt=s[11],gt=s[15];return r[0]=o*A+a*y+l*I+c*Y,r[4]=o*T+a*L+l*z+c*at,r[8]=o*P+a*$+l*H+c*mt,r[12]=o*E+a*G+l*nt+c*gt,r[1]=h*A+u*y+d*I+p*Y,r[5]=h*T+u*L+d*z+p*at,r[9]=h*P+u*$+d*H+p*mt,r[13]=h*E+u*G+d*nt+p*gt,r[2]=g*A+_*y+m*I+f*Y,r[6]=g*T+_*L+m*z+f*at,r[10]=g*P+_*$+m*H+f*mt,r[14]=g*E+_*G+m*nt+f*gt,r[3]=M*A+x*y+v*I+U*Y,r[7]=M*T+x*L+v*z+U*at,r[11]=M*P+x*$+v*H+U*mt,r[15]=M*E+x*G+v*nt+U*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+_*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],M=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,x=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,v=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,U=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,A=e*M+n*x+s*v+r*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=M*T,t[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*T,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*f+n*l*f)*T,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*T,t[4]=x*T,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*T,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*T,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*T,t[8]=v*T,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*T,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*T,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*T,t[12]=U*T,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*T,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*T,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,M=l*c,x=l*h,v=l*u,U=n.x,A=n.y,T=n.z;return s[0]=(1-(_+f))*U,s[1]=(p+v)*U,s[2]=(g-x)*U,s[3]=0,s[4]=(p-v)*A,s[5]=(1-(d+f))*A,s[6]=(m+M)*A,s[7]=0,s[8]=(g+x)*T,s[9]=(m-M)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ri.set(s[0],s[1],s[2]).length();const o=Ri.set(s[4],s[5],s[6]).length(),a=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);const c=1/r,h=1/o,u=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,e.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=In){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(a===In)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===vr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=In){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,p=(n+s)*h;let g,_;if(a===In)g=(o+r)*u,_=-2*u;else if(a===vr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ri=new D,on=new ie,ju=new D(0,0,0),Zu=new D(1,1,1),Wn=new D,Hs=new D,$e=new D,sl=new ie,rl=new Qn;class Mn{constructor(t=0,e=0,n=0,s=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rl.setFromEuler(this),this.setFromQuaternion(rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class ya{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ku=0;const ol=new D,Ci=new Qn,wn=new ie,Vs=new D,hs=new D,Ju=new D,Qu=new Qn,al=new D(1,0,0),ll=new D(0,1,0),cl=new D(0,0,1),hl={type:"added"},td={type:"removed"},Pi={type:"childadded",child:null},Vr={type:"childremoved",child:null};class Ee extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new D,e=new Mn,n=new Qn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Bt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(al,t)}rotateY(t){return this.rotateOnAxis(ll,t)}rotateZ(t){return this.rotateOnAxis(cl,t)}translateOnAxis(t,e){return ol.copy(t).applyQuaternion(this.quaternion),this.position.add(ol.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(al,t)}translateY(t){return this.translateOnAxis(ll,t)}translateZ(t){return this.translateOnAxis(cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vs.copy(t):Vs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(hs,Vs,this.up):wn.lookAt(Vs,hs,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(wn),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hl),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(td),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hl),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,Ju),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,Qu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ee.DEFAULT_UP=new D(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new D,Tn=new D,Gr=new D,An=new D,Di=new D,Li=new D,ul=new D,Wr=new D,Xr=new D,$r=new D,Yr=new _e,qr=new _e,jr=new _e;class cn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),Tn.subVectors(n,e),Gr.subVectors(t,e);const o=an.dot(an),a=an.dot(Tn),l=an.dot(Gr),c=Tn.dot(Tn),h=Tn.dot(Gr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(o,An.y),l.addScaledVector(a,An.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Yr.setScalar(0),qr.setScalar(0),jr.setScalar(0),Yr.fromBufferAttribute(t,e),qr.fromBufferAttribute(t,n),jr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Yr,r.x),o.addScaledVector(qr,r.y),o.addScaledVector(jr,r.z),o}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),Tn.subVectors(t,e),an.cross(Tn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),an.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Di.subVectors(s,n),Li.subVectors(r,n),Wr.subVectors(t,n);const l=Di.dot(Wr),c=Li.dot(Wr);if(l<=0&&c<=0)return e.copy(n);Xr.subVectors(t,s);const h=Di.dot(Xr),u=Li.dot(Xr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Di,o);$r.subVectors(t,r);const p=Di.dot($r),g=Li.dot($r);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Li,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return ul.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(ul,a);const f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(Di,o).addScaledVector(Li,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function Zr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Ma(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Zr(o,r,t+1/3),this.g=Zr(o,r,t),this.b=Zr(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=Vc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return Qt.fromWorkingColorSpace(Le.copy(this),t),Math.round(Ce(Le.r*255,0,255))*65536+Math.round(Ce(Le.g*255,0,255))*256+Math.round(Ce(Le.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,s=Le.g,r=Le.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Oe){Qt.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,s=Le.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(Gs);const n=ys(Xn.h,Gs.h,e),s=ys(Xn.s,Gs.s,e),r=ys(Xn.l,Gs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new Ut;Ut.NAMES=Vc;let ed=0;class ns extends Mi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=ts(),this.name="",this.blending=Wi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xo,this.blendDst=Mo,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ya,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xo&&(n.blendSrc=this.blendSrc),this.blendDst!==Mo&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ya&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class is extends ns{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new D,Ws=new Tt;class un{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qa,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ws.fromBufferAttribute(this,e),Ws.applyMatrix3(t),this.setXY(e,Ws.x,Ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qa&&(t.usage=this.usage),t}}class Gc extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Wc extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}}let nd=0;const Qe=new ie,Kr=new Ee,Ii=new D,Ye=new yi,us=new yi,Ae=new D;class Re extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bc(t)?Wc:Gc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return Kr.lookAt(t),Kr.updateMatrix(),this.applyMatrix4(Kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new re(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];us.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(Ye.min,us.min),Ye.expandByPoint(Ae),Ae.addVectors(Ye.max,us.max),Ye.expandByPoint(Ae)):(Ye.expandByPoint(us.min),Ye.expandByPoint(us.max))}Ye.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ae.fromBufferAttribute(a,c),l&&(Ii.fromBufferAttribute(t,c),Ae.add(Ii)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new D,l[P]=new D;const c=new D,h=new D,u=new D,d=new Tt,p=new Tt,g=new Tt,_=new D,m=new D;function f(P,E,y){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),a[P].add(_),a[E].add(_),a[y].add(_),l[P].add(m),l[E].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,E=M.length;P<E;++P){const y=M[P],L=y.start,$=y.count;for(let G=L,I=L+$;G<I;G+=3)f(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const x=new D,v=new D,U=new D,A=new D;function T(P){U.fromBufferAttribute(s,P),A.copy(U);const E=a[P];x.copy(E),x.sub(U.multiplyScalar(U.dot(E))).normalize(),v.crossVectors(A,E);const L=v.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,L)}for(let P=0,E=M.length;P<E;++P){const y=M[P],L=y.start,$=y.count;for(let G=L,I=L+$;G<I;G+=3)T(t.getX(G+0)),T(t.getX(G+1)),T(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new un(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dl=new ie,si=new wr,Xs=new es,fl=new D,$s=new D,Ys=new D,qs=new D,Jr=new D,js=new D,pl=new D,Zs=new D;class kt extends Ee{constructor(t=new Re,e=new is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){js.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Jr.fromBufferAttribute(u,t),o?js.addScaledVector(Jr,h):js.addScaledVector(Jr.sub(e),h))}e.add(js)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(r),si.copy(t.ray).recast(t.near),!(Xs.containsPoint(si.origin)===!1&&(si.intersectSphere(Xs,fl)===null||si.origin.distanceToSquared(fl)>(t.far-t.near)**2))&&(dl.copy(r).invert(),si.copy(t.ray).applyMatrix4(dl),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,U=x;v<U;v+=3){const A=a.getX(v),T=a.getX(v+1),P=a.getX(v+2);s=Ks(this,f,t,n,c,h,u,A,T,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=Ks(this,o,t,n,c,h,u,M,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,U=x;v<U;v+=3){const A=v,T=v+1,P=v+2;s=Ks(this,f,t,n,c,h,u,A,T,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=m,x=m+1,v=m+2;s=Ks(this,o,t,n,c,h,u,M,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function id(i,t,e,n,s,r,o,a){let l;if(t.side===ze?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Jn,a),l===null)return null;Zs.copy(a),Zs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Zs);return c<e.near||c>e.far?null:{distance:c,point:Zs.clone(),object:i}}function Ks(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,$s),i.getVertexPosition(l,Ys),i.getVertexPosition(c,qs);const h=id(i,t,e,n,$s,Ys,qs,pl);if(h){const u=new D;cn.getBarycoord(pl,$s,Ys,qs,u),s&&(h.uv=cn.getInterpolatedAttribute(s,a,l,c,u,new Tt)),r&&(h.uv1=cn.getInterpolatedAttribute(r,a,l,c,u,new Tt)),o&&(h.normal=cn.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};cn.getNormal($s,Ys,qs,d.normal),h.face=d,h.barycoord=u}return h}class ti extends Re{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function g(_,m,f,M,x,v,U,A,T,P,E){const y=v/T,L=U/P,$=v/2,G=U/2,I=A/2,z=T+1,H=P+1;let nt=0,Y=0;const at=new D;for(let mt=0;mt<H;mt++){const gt=mt*L-G;for(let zt=0;zt<z;zt++){const le=zt*y-$;at[_]=le*M,at[m]=gt*x,at[f]=I,c.push(at.x,at.y,at.z),at[_]=0,at[m]=0,at[f]=A>0?1:-1,h.push(at.x,at.y,at.z),u.push(zt/T),u.push(1-mt/P),nt+=1}}for(let mt=0;mt<P;mt++)for(let gt=0;gt<T;gt++){const zt=d+gt+z*mt,le=d+gt+z*(mt+1),K=d+(gt+1)+z*(mt+1),ot=d+(gt+1)+z*mt;l.push(zt,le,ot),l.push(le,K,ot),Y+=6}a.addGroup(p,Y,E),p+=Y,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ji(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Fe(i){const t={};for(let e=0;e<i.length;e++){const n=Ji(i[e]);for(const s in n)t[s]=n[s]}return t}function sd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const $c={clone:Ji,merge:Fe};var rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends ns{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rd,this.fragmentShader=od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Yc extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new D,ml=new Tt,gl=new Tt;class tn extends Yc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ts*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,ml,gl),e.subVectors(gl,ml)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ui=-90,Ni=1;class ad extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(Ui,Ni,t,e);s.layers=this.layers,this.add(s);const r=new tn(Ui,Ni,t,e);r.layers=this.layers,this.add(r);const o=new tn(Ui,Ni,t,e);o.layers=this.layers,this.add(o);const a=new tn(Ui,Ni,t,e);a.layers=this.layers,this.add(a);const l=new tn(Ui,Ni,t,e);l.layers=this.layers,this.add(l);const c=new tn(Ui,Ni,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class qc extends Ue{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:qi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ld extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new qc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ti(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Zn});r.uniforms.tEquirect.value=e;const o=new kt(s,r),a=e.minFilter;return e.minFilter===fi&&(e.minFilter=_n),new ad(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Qr=new D,cd=new D,hd=new Bt;class Dn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Qr.subVectors(n,e).cross(cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||hd.getNormalMatrix(t),s=this.coplanarPoint(Qr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new es,Js=new D;class Sa{constructor(t=new Dn,e=new Dn,n=new Dn,s=new Dn,r=new Dn,o=new Dn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],M=s[13],x=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,m-p,v-f).normalize(),n[1].setComponents(l+r,d+c,m+p,v+f).normalize(),n[2].setComponents(l+o,d+h,m+g,v+M).normalize(),n[3].setComponents(l-o,d-h,m-g,v-M).normalize(),n[4].setComponents(l-a,d-u,m-_,v-x).normalize(),e===In)n[5].setComponents(l+a,d+u,m+_,v+x).normalize();else if(e===vr)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Js.x=s.normal.x>0?t.max.x:t.min.x,Js.y=s.normal.y>0?t.max.y:t.min.y,Js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ud(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ls extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const M=f*d-o;for(let x=0;x<c;x++){const v=x*u-r;g.push(v,-M,0),_.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){const x=M+c*f,v=M+c*(f+1),U=M+1+c*(f+1),A=M+1+c*f;p.push(x,v,A),p.push(v,U,A)}this.setIndex(p),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.width,t.height,t.widthSegments,t.heightSegments)}}var dd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fd=`#ifdef USE_ALPHAHASH
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
#endif`,pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vd=`#ifdef USE_AOMAP
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
#endif`,xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Md=`#ifdef USE_BATCHING
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
#endif`,yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ed=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wd=`#ifdef USE_IRIDESCENCE
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
#endif`,Td=`#ifdef USE_BUMPMAP
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
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nd=`#define PI 3.141592653589793
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
} // validated`,Fd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Od=`vec3 transformedNormal = objectNormal;
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
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qd=`#ifdef USE_GRADIENTMAP
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
}`,tf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sf=`uniform bool receiveShadow;
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
#endif`,rf=`#ifdef USE_ENVMAP
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
#endif`,of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hf=`PhysicalMaterial material;
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
#endif`,uf=`struct PhysicalMaterial {
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
}`,df=`
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
#endif`,ff=`#if defined( RE_IndirectDiffuse )
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
#endif`,pf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_f=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sf=`#if defined( USE_POINTS_UV )
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
#endif`,bf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Af=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rf=`#ifdef USE_MORPHTARGETS
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
#endif`,Cf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Df=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nf=`#ifdef USE_NORMALMAP
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
#endif`,Ff=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kf=`float getShadowMask() {
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
}`,Jf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qf=`#ifdef USE_SKINNING
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
#endif`,tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ep=`#ifdef USE_SKINNING
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
#endif`,np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ip=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,op=`#ifdef USE_TRANSMISSION
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
#endif`,ap=`#ifdef USE_TRANSMISSION
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fp=`uniform sampler2D t2D;
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
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_p=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`#include <common>
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
}`,xp=`#if DEPTH_PACKING == 3200
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
}`,Mp=`#define DISTANCE
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
}`,yp=`#define DISTANCE
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`uniform float scale;
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
}`,wp=`uniform vec3 diffuse;
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
}`,Tp=`#include <common>
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
}`,Ap=`uniform vec3 diffuse;
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
}`,Rp=`#define LAMBERT
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
}`,Cp=`#define LAMBERT
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
}`,Pp=`#define MATCAP
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
}`,Dp=`#define MATCAP
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
}`,Lp=`#define NORMAL
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
}`,Ip=`#define NORMAL
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
}`,Up=`#define PHONG
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
}`,Np=`#define PHONG
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
}`,Fp=`#define STANDARD
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
}`,Op=`#define STANDARD
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
}`,kp=`#define TOON
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
}`,Bp=`#define TOON
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
}`,zp=`uniform float size;
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
}`,Hp=`uniform vec3 diffuse;
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
}`,Vp=`#include <common>
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
}`,Gp=`uniform vec3 color;
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
}`,Wp=`uniform float rotation;
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
}`,Xp=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:dd,alphahash_pars_fragment:fd,alphamap_fragment:pd,alphamap_pars_fragment:md,alphatest_fragment:gd,alphatest_pars_fragment:_d,aomap_fragment:vd,aomap_pars_fragment:xd,batching_pars_vertex:Md,batching_vertex:yd,begin_vertex:Sd,beginnormal_vertex:bd,bsdfs:Ed,iridescence_fragment:wd,bumpmap_pars_fragment:Td,clipping_planes_fragment:Ad,clipping_planes_pars_fragment:Rd,clipping_planes_pars_vertex:Cd,clipping_planes_vertex:Pd,color_fragment:Dd,color_pars_fragment:Ld,color_pars_vertex:Id,color_vertex:Ud,common:Nd,cube_uv_reflection_fragment:Fd,defaultnormal_vertex:Od,displacementmap_pars_vertex:kd,displacementmap_vertex:Bd,emissivemap_fragment:zd,emissivemap_pars_fragment:Hd,colorspace_fragment:Vd,colorspace_pars_fragment:Gd,envmap_fragment:Wd,envmap_common_pars_fragment:Xd,envmap_pars_fragment:$d,envmap_pars_vertex:Yd,envmap_physical_pars_fragment:rf,envmap_vertex:qd,fog_vertex:jd,fog_pars_vertex:Zd,fog_fragment:Kd,fog_pars_fragment:Jd,gradientmap_pars_fragment:Qd,lightmap_pars_fragment:tf,lights_lambert_fragment:ef,lights_lambert_pars_fragment:nf,lights_pars_begin:sf,lights_toon_fragment:of,lights_toon_pars_fragment:af,lights_phong_fragment:lf,lights_phong_pars_fragment:cf,lights_physical_fragment:hf,lights_physical_pars_fragment:uf,lights_fragment_begin:df,lights_fragment_maps:ff,lights_fragment_end:pf,logdepthbuf_fragment:mf,logdepthbuf_pars_fragment:gf,logdepthbuf_pars_vertex:_f,logdepthbuf_vertex:vf,map_fragment:xf,map_pars_fragment:Mf,map_particle_fragment:yf,map_particle_pars_fragment:Sf,metalnessmap_fragment:bf,metalnessmap_pars_fragment:Ef,morphinstance_vertex:wf,morphcolor_vertex:Tf,morphnormal_vertex:Af,morphtarget_pars_vertex:Rf,morphtarget_vertex:Cf,normal_fragment_begin:Pf,normal_fragment_maps:Df,normal_pars_fragment:Lf,normal_pars_vertex:If,normal_vertex:Uf,normalmap_pars_fragment:Nf,clearcoat_normal_fragment_begin:Ff,clearcoat_normal_fragment_maps:Of,clearcoat_pars_fragment:kf,iridescence_pars_fragment:Bf,opaque_fragment:zf,packing:Hf,premultiplied_alpha_fragment:Vf,project_vertex:Gf,dithering_fragment:Wf,dithering_pars_fragment:Xf,roughnessmap_fragment:$f,roughnessmap_pars_fragment:Yf,shadowmap_pars_fragment:qf,shadowmap_pars_vertex:jf,shadowmap_vertex:Zf,shadowmask_pars_fragment:Kf,skinbase_vertex:Jf,skinning_pars_vertex:Qf,skinning_vertex:tp,skinnormal_vertex:ep,specularmap_fragment:np,specularmap_pars_fragment:ip,tonemapping_fragment:sp,tonemapping_pars_fragment:rp,transmission_fragment:op,transmission_pars_fragment:ap,uv_pars_fragment:lp,uv_pars_vertex:cp,uv_vertex:hp,worldpos_vertex:up,background_vert:dp,background_frag:fp,backgroundCube_vert:pp,backgroundCube_frag:mp,cube_vert:gp,cube_frag:_p,depth_vert:vp,depth_frag:xp,distanceRGBA_vert:Mp,distanceRGBA_frag:yp,equirect_vert:Sp,equirect_frag:bp,linedashed_vert:Ep,linedashed_frag:wp,meshbasic_vert:Tp,meshbasic_frag:Ap,meshlambert_vert:Rp,meshlambert_frag:Cp,meshmatcap_vert:Pp,meshmatcap_frag:Dp,meshnormal_vert:Lp,meshnormal_frag:Ip,meshphong_vert:Up,meshphong_frag:Np,meshphysical_vert:Fp,meshphysical_frag:Op,meshtoon_vert:kp,meshtoon_frag:Bp,points_vert:zp,points_frag:Hp,shadow_vert:Vp,shadow_frag:Gp,sprite_vert:Wp,sprite_frag:Xp},lt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},mn={basic:{uniforms:Fe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Fe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Fe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Fe([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Fe([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Fe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Fe([lt.points,lt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Fe([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Fe([lt.common,lt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Fe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Fe([lt.sprite,lt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Fe([lt.common,lt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Fe([lt.lights,lt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};mn.physical={uniforms:Fe([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Qs={r:0,b:0,g:0},oi=new Mn,$p=new ie;function Yp(i,t,e,n,s,r,o){const a=new Ut(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1;const v=g(M);v===null?f(a,l):v&&v.isColor&&(f(v,1),x=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===br)?(h===void 0&&(h=new kt(new ti(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Ji(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),oi.copy(x.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($p.makeRotationFromEuler(oi)),h.material.toneMapped=Qt.getTransfer(v.colorSpace)!==oe,(u!==v||d!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new kt(new Ls(2,2),new Fn({name:"BackgroundMaterial",uniforms:Ji(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(v.colorSpace)!==oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,x){M.getRGB(Qs,Xc(i)),n.buffers.color.setClear(Qs.r,Qs.g,Qs.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(a,l)},render:_,addToRenderList:m}}function qp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,L,$,G,I){let z=!1;const H=u(G,$,L);r!==H&&(r=H,c(r.object)),z=p(y,G,$,I),z&&g(y,G,$,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(y,L,$,G),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,L,$){const G=$.wireframe===!0;let I=n[y.id];I===void 0&&(I={},n[y.id]=I);let z=I[L.id];z===void 0&&(z={},I[L.id]=z);let H=z[G];return H===void 0&&(H=d(l()),z[G]=H),H}function d(y){const L=[],$=[],G=[];for(let I=0;I<e;I++)L[I]=0,$[I]=0,G[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:$,attributeDivisors:G,object:y,attributes:{},index:null}}function p(y,L,$,G){const I=r.attributes,z=L.attributes;let H=0;const nt=$.getAttributes();for(const Y in nt)if(nt[Y].location>=0){const mt=I[Y];let gt=z[Y];if(gt===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor)),mt===void 0||mt.attribute!==gt||gt&&mt.data!==gt.data)return!0;H++}return r.attributesNum!==H||r.index!==G}function g(y,L,$,G){const I={},z=L.attributes;let H=0;const nt=$.getAttributes();for(const Y in nt)if(nt[Y].location>=0){let mt=z[Y];mt===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor));const gt={};gt.attribute=mt,mt&&mt.data&&(gt.data=mt.data),I[Y]=gt,H++}r.attributes=I,r.attributesNum=H,r.index=G}function _(){const y=r.newAttributes;for(let L=0,$=y.length;L<$;L++)y[L]=0}function m(y){f(y,0)}function f(y,L){const $=r.newAttributes,G=r.enabledAttributes,I=r.attributeDivisors;$[y]=1,G[y]===0&&(i.enableVertexAttribArray(y),G[y]=1),I[y]!==L&&(i.vertexAttribDivisor(y,L),I[y]=L)}function M(){const y=r.newAttributes,L=r.enabledAttributes;for(let $=0,G=L.length;$<G;$++)L[$]!==y[$]&&(i.disableVertexAttribArray($),L[$]=0)}function x(y,L,$,G,I,z,H){H===!0?i.vertexAttribIPointer(y,L,$,I,z):i.vertexAttribPointer(y,L,$,G,I,z)}function v(y,L,$,G){_();const I=G.attributes,z=$.getAttributes(),H=L.defaultAttributeValues;for(const nt in z){const Y=z[nt];if(Y.location>=0){let at=I[nt];if(at===void 0&&(nt==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),nt==="instanceColor"&&y.instanceColor&&(at=y.instanceColor)),at!==void 0){const mt=at.normalized,gt=at.itemSize,zt=t.get(at);if(zt===void 0)continue;const le=zt.buffer,K=zt.type,ot=zt.bytesPerElement,bt=K===i.INT||K===i.UNSIGNED_INT||at.gpuType===fa;if(at.isInterleavedBufferAttribute){const ht=at.data,Dt=ht.stride,Nt=at.offset;if(ht.isInstancedInterleavedBuffer){for(let Wt=0;Wt<Y.locationSize;Wt++)f(Y.location+Wt,ht.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Wt=0;Wt<Y.locationSize;Wt++)m(Y.location+Wt);i.bindBuffer(i.ARRAY_BUFFER,le);for(let Wt=0;Wt<Y.locationSize;Wt++)x(Y.location+Wt,gt/Y.locationSize,K,mt,Dt*ot,(Nt+gt/Y.locationSize*Wt)*ot,bt)}else{if(at.isInstancedBufferAttribute){for(let ht=0;ht<Y.locationSize;ht++)f(Y.location+ht,at.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ht=0;ht<Y.locationSize;ht++)m(Y.location+ht);i.bindBuffer(i.ARRAY_BUFFER,le);for(let ht=0;ht<Y.locationSize;ht++)x(Y.location+ht,gt/Y.locationSize,K,mt,gt*ot,gt/Y.locationSize*ht*ot,bt)}}else if(H!==void 0){const mt=H[nt];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(Y.location,mt);break;case 3:i.vertexAttrib3fv(Y.location,mt);break;case 4:i.vertexAttrib4fv(Y.location,mt);break;default:i.vertexAttrib1fv(Y.location,mt)}}}}M()}function U(){P();for(const y in n){const L=n[y];for(const $ in L){const G=L[$];for(const I in G)h(G[I].object),delete G[I];delete L[$]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const $ in L){const G=L[$];for(const I in G)h(G[I].object),delete G[I];delete L[$]}delete n[y.id]}function T(y){for(const L in n){const $=n[L];if($[y.id]===void 0)continue;const G=$[y.id];for(const I in G)h(G[I].object),delete G[I];delete $[y.id]}}function P(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function jp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==hn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===Ds&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Nn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==vn&&!P)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:U,maxSamples:A}}function Kp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Dn,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,x=M*4;let v=f.clippingState||null;l.value=v,v=h(g,d,x,p);for(let U=0;U!==x;++U)v[U]=e[U];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,v=p;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Jp(i){let t=new WeakMap;function e(o,a){return a===Ro?o.mapping=qi:a===Co&&(o.mapping=ji),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ro||a===Co)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ld(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Zc extends Yc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Hi=4,_l=[.125,.215,.35,.446,.526,.582],ui=20,to=new Zc,vl=new Ut;let eo=null,no=0,io=0,so=!1;const ci=(1+Math.sqrt(5))/2,Fi=1/ci,xl=[new D(-ci,Fi,0),new D(ci,Fi,0),new D(-Fi,0,ci),new D(Fi,0,ci),new D(0,ci,-Fi),new D(0,ci,Fi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class ia{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){eo=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(eo,no,io),this._renderer.xr.enabled=so,t.scissorTest=!1,tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),eo=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Ds,format:hn,colorSpace:Qi,depthBuffer:!1},s=Ml(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ml(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qp(r)),this._blurMaterial=tm(r,t,e)}return s}_compileMaterial(t){const e=new kt(this._lodPlanes[0],t);this._renderer.compile(e,to)}_sceneToCubeUV(t,e,n,s){const a=new tn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(vl),h.toneMapping=Kn,h.autoClear=!1;const p=new is({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new kt(new ti,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(vl),_=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):M===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;tr(s,M*x,f>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===qi||t.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;tr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,to)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xl[(s-r-1)%xl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new kt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ui-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ui;m>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);const f=[];let M=0;for(let T=0;T<ui;++T){const P=T/_,E=Math.exp(-P*P/2);f.push(E),T===0?M+=E:T<m&&(M+=2*E)}for(let T=0;T<f.length;T++)f[T]=f[T]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[s],U=3*v*(s>x-Hi?s-x+Hi:0),A=4*(this._cubeSize-v);tr(e,U,A,3*v,2*v),l.setRenderTarget(e),l.render(u,to)}}function Qp(i){const t=[],e=[],n=[];let s=i;const r=i-Hi+1+_l.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Hi?l=_l[o-i+Hi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,M=new Float32Array(_*g*p),x=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,P=A>2?0:-1,E=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];M.set(E,_*g*A),x.set(d,m*g*A);const y=[A,A,A,A,A,A];v.set(y,f*g*A)}const U=new Re;U.setAttribute("position",new un(M,_)),U.setAttribute("uv",new un(x,m)),U.setAttribute("faceIndex",new un(v,f)),t.push(U),s>Hi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ml(i,t,e){const n=new vi(i,t,e);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function tm(i,t,e){const n=new Float32Array(ui),s=new D(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ba(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function yl(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ba(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Sl(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function ba(){return`

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
	`}function em(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ro||l===Co,h=l===qi||l===ji;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ia(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new ia(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function nm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&gs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function im(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let x=0,v=M.length;x<v;x+=3){const U=M[x+0],A=M[x+1],T=M[x+2];d.push(U,A,A,T,T,U)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const U=x+0,A=x+1,T=x+2;d.push(U,A,A,T,T,U)}}else return;const m=new(Bc(d)?Wc:Gc)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function sm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M]*_[M];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function rm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function om(i,t,e){const n=new WeakMap,s=new _e;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let E=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,U=1;v>t.maxTextureSize&&(U=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const A=new Float32Array(v*U*4*u),T=new Hc(A,v,U,u);T.type=vn,T.needsUpdate=!0;const P=x*4;for(let y=0;y<u;y++){const L=m[y],$=f[y],G=M[y],I=v*U*4*y;for(let z=0;z<L.count;z++){const H=z*P;p===!0&&(s.fromBufferAttribute(L,z),A[I+H+0]=s.x,A[I+H+1]=s.y,A[I+H+2]=s.z,A[I+H+3]=0),g===!0&&(s.fromBufferAttribute($,z),A[I+H+4]=s.x,A[I+H+5]=s.y,A[I+H+6]=s.z,A[I+H+7]=0),_===!0&&(s.fromBufferAttribute(G,z),A[I+H+8]=s.x,A[I+H+9]=s.y,A[I+H+10]=s.z,A[I+H+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new Tt(v,U)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function am(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Kc extends Ue{constructor(t,e,n,s,r,o,a,l,c,h=Xi){if(h!==Xi&&h!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xi&&(n=_i),n===void 0&&h===Ki&&(n=Zi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ze,this.minFilter=l!==void 0?l:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Jc=new Ue,bl=new Kc(1,1),Qc=new Hc,th=new Yu,eh=new qc,El=[],wl=[],Tl=new Float32Array(16),Al=new Float32Array(9),Rl=new Float32Array(4);function ss(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=El[s];if(r===void 0&&(r=new Float32Array(s),El[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Tr(i,t){let e=wl[t];e===void 0&&(e=new Int32Array(t),wl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function dm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;Rl.set(n),i.uniformMatrix2fv(this.addr,!1,Rl),Te(e,n)}}function fm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;Al.set(n),i.uniformMatrix3fv(this.addr,!1,Al),Te(e,n)}}function pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;Tl.set(n),i.uniformMatrix4fv(this.addr,!1,Tl),Te(e,n)}}function mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function xm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bl.compareFunction=kc,r=bl):r=Jc,e.setTexture2D(t||r,s)}function Em(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||th,s)}function wm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||eh,s)}function Tm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qc,s)}function Am(i){switch(i){case 5126:return lm;case 35664:return cm;case 35665:return hm;case 35666:return um;case 35674:return dm;case 35675:return fm;case 35676:return pm;case 5124:case 35670:return mm;case 35667:case 35671:return gm;case 35668:case 35672:return _m;case 35669:case 35673:return vm;case 5125:return xm;case 36294:return Mm;case 36295:return ym;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return wm;case 36289:case 36303:case 36311:case 36292:return Tm}}function Rm(i,t){i.uniform1fv(this.addr,t)}function Cm(i,t){const e=ss(t,this.size,2);i.uniform2fv(this.addr,e)}function Pm(i,t){const e=ss(t,this.size,3);i.uniform3fv(this.addr,e)}function Dm(i,t){const e=ss(t,this.size,4);i.uniform4fv(this.addr,e)}function Lm(i,t){const e=ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Im(i,t){const e=ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Um(i,t){const e=ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Nm(i,t){i.uniform1iv(this.addr,t)}function Fm(i,t){i.uniform2iv(this.addr,t)}function Om(i,t){i.uniform3iv(this.addr,t)}function km(i,t){i.uniform4iv(this.addr,t)}function Bm(i,t){i.uniform1uiv(this.addr,t)}function zm(i,t){i.uniform2uiv(this.addr,t)}function Hm(i,t){i.uniform3uiv(this.addr,t)}function Vm(i,t){i.uniform4uiv(this.addr,t)}function Gm(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Jc,r[o])}function Wm(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||th,r[o])}function Xm(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||eh,r[o])}function $m(i,t,e){const n=this.cache,s=t.length,r=Tr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Qc,r[o])}function Ym(i){switch(i){case 5126:return Rm;case 35664:return Cm;case 35665:return Pm;case 35666:return Dm;case 35674:return Lm;case 35675:return Im;case 35676:return Um;case 5124:case 35670:return Nm;case 35667:case 35671:return Fm;case 35668:case 35672:return Om;case 35669:case 35673:return km;case 5125:return Bm;case 36294:return zm;case 36295:return Hm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return $m}}class qm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Am(e.type)}}class jm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ym(e.type)}}class Zm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ro=/(\w+)(\])?(\[|\.)?/g;function Cl(i,t){i.seq.push(t),i.map[t.id]=t}function Km(i,t,e){const n=i.name,s=n.length;for(ro.lastIndex=0;;){const r=ro.exec(n),o=ro.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cl(e,c===void 0?new qm(a,i,t):new jm(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Zm(a),Cl(e,u)),e=u}}}class pr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Km(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Pl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Jm=37297;let Qm=0;function tg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Dl=new Bt;function eg(i){Qt._getMatrix(Dl,Qt.workingColorSpace,i);const t=`mat3( ${Dl.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Er:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ll(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+tg(i.getShaderSource(t),o)}else return s}function ng(i,t){const e=eg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ig(i,t){let e;switch(t){case ou:e="Linear";break;case au:e="Reinhard";break;case lu:e="Cineon";break;case Tc:e="ACESFilmic";break;case hu:e="AgX";break;case uu:e="Neutral";break;case cu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const er=new D;function sg(){Qt.getLuminanceCoefficients(er);const i=er.x.toFixed(4),t=er.y.toFixed(4),e=er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function og(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ag(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function _s(i){return i!==""}function Il(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ul(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function sa(i){return i.replace(lg,hg)}const cg=new Map;function hg(i,t){let e=Vt[t];if(e===void 0){const n=cg.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sa(e)}const ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nl(i){return i.replace(ug,dg)}function dg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function fg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ec?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function pg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case ji:t="ENVMAP_TYPE_CUBE";break;case br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ji:t="ENVMAP_MODE_REFRACTION";break}return t}function gg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wc:t="ENVMAP_BLENDING_MULTIPLY";break;case su:t="ENVMAP_BLENDING_MIX";break;case ru:t="ENVMAP_BLENDING_ADD";break}return t}function _g(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function vg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=fg(e),c=pg(e),h=mg(e),u=gg(e),d=_g(e),p=rg(e),g=og(r),_=s.createProgram();let m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_s).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_s).join(`
`),f.length>0&&(f+=`
`)):(m=[Fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),f=[Fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Kn?ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,ng("linearToOutputTexel",e.outputColorSpace),sg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_s).join(`
`)),o=sa(o),o=Il(o,e),o=Ul(o,e),a=sa(a),a=Il(a,e),a=Ul(a,e),o=Nl(o),a=Nl(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=M+m+o,v=M+f+a,U=Pl(s,s.VERTEX_SHADER,x),A=Pl(s,s.FRAGMENT_SHADER,v);s.attachShader(_,U),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(L){if(i.debug.checkShaderErrors){const $=s.getProgramInfoLog(_).trim(),G=s.getShaderInfoLog(U).trim(),I=s.getShaderInfoLog(A).trim();let z=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,U,A);else{const nt=Ll(s,U,"vertex"),Y=Ll(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+$+`
`+nt+`
`+Y)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(G===""||I==="")&&(H=!1);H&&(L.diagnostics={runnable:z,programLog:$,vertexShader:{log:G,prefix:m},fragmentShader:{log:I,prefix:f}})}s.deleteShader(U),s.deleteShader(A),P=new pr(s,_),E=ag(s,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Jm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=A,this}let xg=0;class Mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new yg(t),e.set(t,n)),n}}class yg{constructor(t){this.id=xg++,this.code=t,this.usedTimes=0}}function Sg(i,t,e,n,s,r,o){const a=new ya,l=new Mg,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,L,$,G){const I=$.fog,z=G.geometry,H=E.isMeshStandardMaterial?$.environment:null,nt=(E.isMeshStandardMaterial?e:t).get(E.envMap||H),Y=nt&&nt.mapping===br?nt.image.height:null,at=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const mt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,gt=mt!==void 0?mt.length:0;let zt=0;z.morphAttributes.position!==void 0&&(zt=1),z.morphAttributes.normal!==void 0&&(zt=2),z.morphAttributes.color!==void 0&&(zt=3);let le,K,ot,bt;if(at){const se=mn[at];le=se.vertexShader,K=se.fragmentShader}else le=E.vertexShader,K=E.fragmentShader,l.update(E),ot=l.getVertexShaderID(E),bt=l.getFragmentShaderID(E);const ht=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),Nt=G.isInstancedMesh===!0,Wt=G.isBatchedMesh===!0,pe=!!E.map,Kt=!!E.matcap,ve=!!nt,B=!!E.aoMap,Ke=!!E.lightMap,Yt=!!E.bumpMap,qt=!!E.normalMap,Rt=!!E.displacementMap,ue=!!E.emissiveMap,At=!!E.metalnessMap,w=!!E.roughnessMap,S=E.anisotropy>0,V=E.clearcoat>0,J=E.dispersion>0,it=E.iridescence>0,Z=E.sheen>0,Et=E.transmission>0,ut=S&&!!E.anisotropyMap,_t=V&&!!E.clearcoatMap,Jt=V&&!!E.clearcoatNormalMap,st=V&&!!E.clearcoatRoughnessMap,vt=it&&!!E.iridescenceMap,Pt=it&&!!E.iridescenceThicknessMap,Lt=Z&&!!E.sheenColorMap,xt=Z&&!!E.sheenRoughnessMap,jt=!!E.specularMap,Ht=!!E.specularColorMap,ce=!!E.specularIntensityMap,N=Et&&!!E.transmissionMap,ct=Et&&!!E.thicknessMap,q=!!E.gradientMap,Q=!!E.alphaMap,pt=E.alphaTest>0,dt=!!E.alphaHash,Ft=!!E.extensions;let ge=Kn;E.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ge=i.toneMapping);const Pe={shaderID:at,shaderType:E.type,shaderName:E.name,vertexShader:le,fragmentShader:K,defines:E.defines,customVertexShaderID:ot,customFragmentShaderID:bt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Wt,batchingColor:Wt&&G._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&G.instanceColor!==null,instancingMorph:Nt&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Qi,alphaToCoverage:!!E.alphaToCoverage,map:pe,matcap:Kt,envMap:ve,envMapMode:ve&&nt.mapping,envMapCubeUVHeight:Y,aoMap:B,lightMap:Ke,bumpMap:Yt,normalMap:qt,displacementMap:d&&Rt,emissiveMap:ue,normalMapObjectSpace:qt&&E.normalMapType===mu,normalMapTangentSpace:qt&&E.normalMapType===Oc,metalnessMap:At,roughnessMap:w,anisotropy:S,anisotropyMap:ut,clearcoat:V,clearcoatMap:_t,clearcoatNormalMap:Jt,clearcoatRoughnessMap:st,dispersion:J,iridescence:it,iridescenceMap:vt,iridescenceThicknessMap:Pt,sheen:Z,sheenColorMap:Lt,sheenRoughnessMap:xt,specularMap:jt,specularColorMap:Ht,specularIntensityMap:ce,transmission:Et,transmissionMap:N,thicknessMap:ct,gradientMap:q,opaque:E.transparent===!1&&E.blending===Wi&&E.alphaToCoverage===!1,alphaMap:Q,alphaTest:pt,alphaHash:dt,combine:E.combine,mapUv:pe&&_(E.map.channel),aoMapUv:B&&_(E.aoMap.channel),lightMapUv:Ke&&_(E.lightMap.channel),bumpMapUv:Yt&&_(E.bumpMap.channel),normalMapUv:qt&&_(E.normalMap.channel),displacementMapUv:Rt&&_(E.displacementMap.channel),emissiveMapUv:ue&&_(E.emissiveMap.channel),metalnessMapUv:At&&_(E.metalnessMap.channel),roughnessMapUv:w&&_(E.roughnessMap.channel),anisotropyMapUv:ut&&_(E.anisotropyMap.channel),clearcoatMapUv:_t&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(E.sheenRoughnessMap.channel),specularMapUv:jt&&_(E.specularMap.channel),specularColorMapUv:Ht&&_(E.specularColorMap.channel),specularIntensityMapUv:ce&&_(E.specularIntensityMap.channel),transmissionMapUv:N&&_(E.transmissionMap.channel),thicknessMapUv:ct&&_(E.thicknessMap.channel),alphaMapUv:Q&&_(E.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(qt||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!z.attributes.uv&&(pe||Q),fog:!!I,useFog:E.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Dt,skinning:G.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:zt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:pe&&E.map.isVideoTexture===!0&&Qt.getTransfer(E.map.colorSpace)===oe,decodeVideoTextureEmissive:ue&&E.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(E.emissiveMap.colorSpace)===oe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===je,flipSided:E.side===ze,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ft&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&E.extensions.multiDraw===!0||Wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function f(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)y.push(L),y.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(M(y,E),x(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function M(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function x(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const y=g[E.type];let L;if(y){const $=mn[y];L=$c.clone($.uniforms)}else L=E.uniforms;return L}function U(E,y){let L;for(let $=0,G=h.length;$<G;$++){const I=h[$];if(I.cacheKey===y){L=I,++L.usedTimes;break}}return L===void 0&&(L=new vg(i,y,E,r),h.push(L)),L}function A(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function T(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:U,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:P}}function bg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Eg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ol(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function kl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Eg),n.length>1&&n.sort(d||Ol),s.length>1&&s.sort(d||Ol)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function wg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new kl,i.set(n,[o])):s>=r.length?(o=new kl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Tg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ut};break;case"SpotLight":e={position:new D,direction:new D,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Ag(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Rg=0;function Cg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Pg(i){const t=new Tg,e=Ag(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new ie,o=new ie;function a(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,M=0,x=0,v=0,U=0,A=0,T=0;c.sort(Cg);for(let E=0,y=c.length;E<y;E++){const L=c[E],$=L.color,G=L.intensity,I=L.distance,z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=$.r*G,u+=$.g*G,d+=$.b*G;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],G);T++}else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const nt=L.shadow,Y=e.get(L);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=z,n.directionalShadowMatrix[p]=L.shadow.matrix,M++}n.directional[p]=H,p++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy($).multiplyScalar(G),H.distance=I,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[_]=H;const nt=L.shadow;if(L.map&&(n.spotLightMap[U]=L.map,U++,nt.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[_]=nt.matrix,L.castShadow){const Y=e.get(L);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=z,v++}_++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy($).multiplyScalar(G),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=H,m++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const nt=L.shadow,Y=e.get(L);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,Y.shadowCameraNear=nt.camera.near,Y.shadowCameraFar=nt.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=H,g++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(G),H.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[f]=H,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==M||P.numPointShadows!==x||P.numSpotShadows!==v||P.numSpotMaps!==U||P.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+U-A,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=M,P.numPointShadows=x,P.numSpotShadows=v,P.numSpotMaps=U,P.numLightProbes=T,n.version=Rg++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){const x=c[f];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Bl(i){const t=new Pg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Dg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Bl(i),t.set(s,[a])):r>=o.length?(a=new Bl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Lg extends ns{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ig extends ns{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ng=`uniform sampler2D shadow_pass;
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
}`;function Fg(i,t,e){let n=new Sa;const s=new Tt,r=new Tt,o=new _e,a=new Lg({depthPacking:pu}),l=new Ig,c={},h=e.maxTextureSize,u={[Jn]:ze,[ze]:Jn,[je]:je},d=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Ug,fragmentShader:Ng}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Re;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new kt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bc;let f=this.type;this.render=function(A,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),$=i.state;$.setBlending(Zn),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const G=f!==Cn&&this.type===Cn,I=f===Cn&&this.type!==Cn;for(let z=0,H=A.length;z<H;z++){const nt=A[z],Y=nt.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const at=Y.getFrameExtents();if(s.multiply(at),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,Y.mapSize.y=r.y)),Y.map===null||G===!0||I===!0){const gt=this.type!==Cn?{minFilter:Ze,magFilter:Ze}:{};Y.map!==null&&Y.map.dispose(),Y.map=new vi(s.x,s.y,gt),Y.map.texture.name=nt.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const mt=Y.getViewportCount();for(let gt=0;gt<mt;gt++){const zt=Y.getViewport(gt);o.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),$.viewport(o),Y.updateMatrices(nt,gt),n=Y.getFrustum(),v(T,P,Y.camera,nt,this.type)}Y.isPointLightShadow!==!0&&this.type===Cn&&M(Y,P),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,L)};function M(A,T){const P=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new vi(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,P,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,P,p,_,null)}function x(A,T,P,E){let y=null;const L=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)y=L;else if(y=P.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const $=y.uuid,G=T.uuid;let I=c[$];I===void 0&&(I={},c[$]=I);let z=I[G];z===void 0&&(z=y.clone(),I[G]=z,T.addEventListener("dispose",U)),y=z}if(y.visible=T.visible,y.wireframe=T.wireframe,E===Cn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const $=i.properties.get(y);$.light=P}return y}function v(A,T,P,E,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Cn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const G=t.update(A),I=A.material;if(Array.isArray(I)){const z=G.groups;for(let H=0,nt=z.length;H<nt;H++){const Y=z[H],at=I[Y.materialIndex];if(at&&at.visible){const mt=x(A,at,E,y);A.onBeforeShadow(i,A,T,P,G,mt,Y),i.renderBufferDirect(P,null,G,mt,A,Y),A.onAfterShadow(i,A,T,P,G,mt,Y)}}}else if(I.visible){const z=x(A,I,E,y);A.onBeforeShadow(i,A,T,P,G,z,null),i.renderBufferDirect(P,null,G,z,A,null),A.onAfterShadow(i,A,T,P,G,z,null)}}const $=A.children;for(let G=0,I=$.length;G<I;G++)v($[G],T,P,E,y)}function U(A){A.target.removeEventListener("dispose",U);for(const P in c){const E=c[P],y=A.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const Og={[yo]:So,[bo]:To,[Eo]:Ao,[Yi]:wo,[So]:yo,[To]:bo,[Ao]:Eo,[wo]:Yi};function kg(i,t){function e(){let N=!1;const ct=new _e;let q=null;const Q=new _e(0,0,0,0);return{setMask:function(pt){q!==pt&&!N&&(i.colorMask(pt,pt,pt,pt),q=pt)},setLocked:function(pt){N=pt},setClear:function(pt,dt,Ft,ge,Pe){Pe===!0&&(pt*=ge,dt*=ge,Ft*=ge),ct.set(pt,dt,Ft,ge),Q.equals(ct)===!1&&(i.clearColor(pt,dt,Ft,ge),Q.copy(ct))},reset:function(){N=!1,q=null,Q.set(-1,0,0,0)}}}function n(){let N=!1,ct=!1,q=null,Q=null,pt=null;return{setReversed:function(dt){if(ct!==dt){const Ft=t.get("EXT_clip_control");ct?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);const ge=pt;pt=null,this.setClear(ge)}ct=dt},getReversed:function(){return ct},setTest:function(dt){dt?ht(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(dt){q!==dt&&!N&&(i.depthMask(dt),q=dt)},setFunc:function(dt){if(ct&&(dt=Og[dt]),Q!==dt){switch(dt){case yo:i.depthFunc(i.NEVER);break;case So:i.depthFunc(i.ALWAYS);break;case bo:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case Eo:i.depthFunc(i.EQUAL);break;case wo:i.depthFunc(i.GEQUAL);break;case To:i.depthFunc(i.GREATER);break;case Ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=dt}},setLocked:function(dt){N=dt},setClear:function(dt){pt!==dt&&(ct&&(dt=1-dt),i.clearDepth(dt),pt=dt)},reset:function(){N=!1,q=null,Q=null,pt=null,ct=!1}}}function s(){let N=!1,ct=null,q=null,Q=null,pt=null,dt=null,Ft=null,ge=null,Pe=null;return{setTest:function(se){N||(se?ht(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(se){ct!==se&&!N&&(i.stencilMask(se),ct=se)},setFunc:function(se,nn,yn){(q!==se||Q!==nn||pt!==yn)&&(i.stencilFunc(se,nn,yn),q=se,Q=nn,pt=yn)},setOp:function(se,nn,yn){(dt!==se||Ft!==nn||ge!==yn)&&(i.stencilOp(se,nn,yn),dt=se,Ft=nn,ge=yn)},setLocked:function(se){N=se},setClear:function(se){Pe!==se&&(i.clearStencil(se),Pe=se)},reset:function(){N=!1,ct=null,q=null,Q=null,pt=null,dt=null,Ft=null,ge=null,Pe=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,M=null,x=null,v=null,U=null,A=null,T=new Ut(0,0,0),P=0,E=!1,y=null,L=null,$=null,G=null,I=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,nt=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=nt>=1):Y.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=nt>=2);let at=null,mt={};const gt=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),le=new _e().fromArray(gt),K=new _e().fromArray(zt);function ot(N,ct,q,Q){const pt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(N,dt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<q;Ft++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ct+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return dt}const bt={};bt[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(i.DEPTH_TEST),o.setFunc(Yi),Yt(!1),qt(Ga),ht(i.CULL_FACE),B(Zn);function ht(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Dt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Nt(N,ct){return u[N]!==ct?(i.bindFramebuffer(N,ct),u[N]=ct,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Wt(N,ct){let q=p,Q=!1;if(N){q=d.get(ct),q===void 0&&(q=[],d.set(ct,q));const pt=N.textures;if(q.length!==pt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Ft=pt.length;dt<Ft;dt++)q[dt]=i.COLOR_ATTACHMENT0+dt;q.length=pt.length,Q=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,Q=!0);Q&&i.drawBuffers(q)}function pe(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const Kt={[hi]:i.FUNC_ADD,[Hh]:i.FUNC_SUBTRACT,[Vh]:i.FUNC_REVERSE_SUBTRACT};Kt[Gh]=i.MIN,Kt[Wh]=i.MAX;const ve={[Xh]:i.ZERO,[$h]:i.ONE,[Yh]:i.SRC_COLOR,[xo]:i.SRC_ALPHA,[Qh]:i.SRC_ALPHA_SATURATE,[Kh]:i.DST_COLOR,[jh]:i.DST_ALPHA,[qh]:i.ONE_MINUS_SRC_COLOR,[Mo]:i.ONE_MINUS_SRC_ALPHA,[Jh]:i.ONE_MINUS_DST_COLOR,[Zh]:i.ONE_MINUS_DST_ALPHA,[tu]:i.CONSTANT_COLOR,[eu]:i.ONE_MINUS_CONSTANT_COLOR,[nu]:i.CONSTANT_ALPHA,[iu]:i.ONE_MINUS_CONSTANT_ALPHA};function B(N,ct,q,Q,pt,dt,Ft,ge,Pe,se){if(N===Zn){_===!0&&(Dt(i.BLEND),_=!1);return}if(_===!1&&(ht(i.BLEND),_=!0),N!==zh){if(N!==m||se!==E){if((f!==hi||v!==hi)&&(i.blendEquation(i.FUNC_ADD),f=hi,v=hi),se)switch(N){case Wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wa:i.blendFunc(i.ONE,i.ONE);break;case Xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $a:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $a:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,x=null,U=null,A=null,T.set(0,0,0),P=0,m=N,E=se}return}pt=pt||ct,dt=dt||q,Ft=Ft||Q,(ct!==f||pt!==v)&&(i.blendEquationSeparate(Kt[ct],Kt[pt]),f=ct,v=pt),(q!==M||Q!==x||dt!==U||Ft!==A)&&(i.blendFuncSeparate(ve[q],ve[Q],ve[dt],ve[Ft]),M=q,x=Q,U=dt,A=Ft),(ge.equals(T)===!1||Pe!==P)&&(i.blendColor(ge.r,ge.g,ge.b,Pe),T.copy(ge),P=Pe),m=N,E=!1}function Ke(N,ct){N.side===je?Dt(i.CULL_FACE):ht(i.CULL_FACE);let q=N.side===ze;ct&&(q=!q),Yt(q),N.blending===Wi&&N.transparent===!1?B(Zn):B(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const Q=N.stencilWrite;a.setTest(Q),Q&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ue(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(N){y!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),y=N)}function qt(N){N!==kh?(ht(i.CULL_FACE),N!==L&&(N===Ga?i.cullFace(i.BACK):N===Bh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),L=N}function Rt(N){N!==$&&(H&&i.lineWidth(N),$=N)}function ue(N,ct,q){N?(ht(i.POLYGON_OFFSET_FILL),(G!==ct||I!==q)&&(i.polygonOffset(ct,q),G=ct,I=q)):Dt(i.POLYGON_OFFSET_FILL)}function At(N){N?ht(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function w(N){N===void 0&&(N=i.TEXTURE0+z-1),at!==N&&(i.activeTexture(N),at=N)}function S(N,ct,q){q===void 0&&(at===null?q=i.TEXTURE0+z-1:q=at);let Q=mt[q];Q===void 0&&(Q={type:void 0,texture:void 0},mt[q]=Q),(Q.type!==N||Q.texture!==ct)&&(at!==q&&(i.activeTexture(q),at=q),i.bindTexture(N,ct||bt[N]),Q.type=N,Q.texture=ct)}function V(){const N=mt[at];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(N){le.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),le.copy(N))}function xt(N){K.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),K.copy(N))}function jt(N,ct){let q=c.get(ct);q===void 0&&(q=new WeakMap,c.set(ct,q));let Q=q.get(N);Q===void 0&&(Q=i.getUniformBlockIndex(ct,N.name),q.set(N,Q))}function Ht(N,ct){const Q=c.get(ct).get(N);l.get(ct)!==Q&&(i.uniformBlockBinding(ct,Q,N.__bindingPointIndex),l.set(ct,Q))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},at=null,mt={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,M=null,x=null,v=null,U=null,A=null,T=new Ut(0,0,0),P=0,E=!1,y=null,L=null,$=null,G=null,I=null,le.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Dt,bindFramebuffer:Nt,drawBuffers:Wt,useProgram:pe,setBlending:B,setMaterial:Ke,setFlipSided:Yt,setCullFace:qt,setLineWidth:Rt,setPolygonOffset:ue,setScissorTest:At,activeTexture:w,bindTexture:S,unbindTexture:V,compressedTexImage2D:J,compressedTexImage3D:it,texImage2D:vt,texImage3D:Pt,updateUBOMapping:jt,uniformBlockBinding:Ht,texStorage2D:Jt,texStorage3D:st,texSubImage2D:Z,texSubImage3D:Et,compressedTexSubImage2D:ut,compressedTexSubImage3D:_t,scissor:Lt,viewport:xt,reset:ce}}function zl(i,t,e,n){const s=Bg(n);switch(e){case Dc:return i*t;case Ic:return i*t;case Uc:return i*t*2;case ga:return i*t/s.components*s.byteLength;case _a:return i*t/s.components*s.byteLength;case Nc:return i*t*2/s.components*s.byteLength;case va:return i*t*2/s.components*s.byteLength;case Lc:return i*t*3/s.components*s.byteLength;case hn:return i*t*4/s.components*s.byteLength;case xa:return i*t*4/s.components*s.byteLength;case cr:case hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ur:case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lo:case Uo:return Math.max(i,16)*Math.max(t,8)/4;case Do:case Io:return Math.max(i,8)*Math.max(t,8)/2;case No:case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case zo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $o:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case jo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ko:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fr:case Jo:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Fc:case ta:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ea:case na:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bg(i){switch(i){case Nn:case Rc:return{byteLength:1,components:1};case ws:case Cc:case Ds:return{byteLength:2,components:1};case pa:case ma:return{byteLength:2,components:4};case _i:case fa:case vn:return{byteLength:4,components:1};case Pc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function zg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return p?new OffscreenCanvas(w,S):xr("canvas")}function _(w,S,V){let J=1;const it=At(w);if((it.width>V||it.height>V)&&(J=V/Math.max(it.width,it.height)),J<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Z=Math.floor(J*it.width),Et=Math.floor(J*it.height);u===void 0&&(u=g(Z,Et));const ut=S?g(Z,Et):u;return ut.width=Z,ut.height=Et,ut.getContext("2d").drawImage(w,0,0,Z,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Z+"x"+Et+")."),ut}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function M(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(w,S,V,J,it=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=S;if(S===i.RED&&(V===i.FLOAT&&(Z=i.R32F),V===i.HALF_FLOAT&&(Z=i.R16F),V===i.UNSIGNED_BYTE&&(Z=i.R8)),S===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.R8UI),V===i.UNSIGNED_SHORT&&(Z=i.R16UI),V===i.UNSIGNED_INT&&(Z=i.R32UI),V===i.BYTE&&(Z=i.R8I),V===i.SHORT&&(Z=i.R16I),V===i.INT&&(Z=i.R32I)),S===i.RG&&(V===i.FLOAT&&(Z=i.RG32F),V===i.HALF_FLOAT&&(Z=i.RG16F),V===i.UNSIGNED_BYTE&&(Z=i.RG8)),S===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RG8UI),V===i.UNSIGNED_SHORT&&(Z=i.RG16UI),V===i.UNSIGNED_INT&&(Z=i.RG32UI),V===i.BYTE&&(Z=i.RG8I),V===i.SHORT&&(Z=i.RG16I),V===i.INT&&(Z=i.RG32I)),S===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),V===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),V===i.UNSIGNED_INT&&(Z=i.RGB32UI),V===i.BYTE&&(Z=i.RGB8I),V===i.SHORT&&(Z=i.RGB16I),V===i.INT&&(Z=i.RGB32I)),S===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),V===i.UNSIGNED_INT&&(Z=i.RGBA32UI),V===i.BYTE&&(Z=i.RGBA8I),V===i.SHORT&&(Z=i.RGBA16I),V===i.INT&&(Z=i.RGBA32I)),S===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),S===i.RGBA){const Et=it?Er:Qt.getTransfer(J);V===i.FLOAT&&(Z=i.RGBA32F),V===i.HALF_FLOAT&&(Z=i.RGBA16F),V===i.UNSIGNED_BYTE&&(Z=Et===oe?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(w,S){let V;return w?S===null||S===_i||S===Zi?V=i.DEPTH24_STENCIL8:S===vn?V=i.DEPTH32F_STENCIL8:S===ws&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===_i||S===Zi?V=i.DEPTH_COMPONENT24:S===vn?V=i.DEPTH_COMPONENT32F:S===ws&&(V=i.DEPTH_COMPONENT16),V}function U(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ze&&w.minFilter!==_n?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function A(w){const S=w.target;S.removeEventListener("dispose",A),P(S),S.isVideoTexture&&h.delete(S)}function T(w){const S=w.target;S.removeEventListener("dispose",T),y(S)}function P(w){const S=n.get(w);if(S.__webglInit===void 0)return;const V=w.source,J=d.get(V);if(J){const it=J[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&E(w),Object.keys(J).length===0&&d.delete(V)}n.remove(w)}function E(w){const S=n.get(w);i.deleteTexture(S.__webglTexture);const V=w.source,J=d.get(V);delete J[S.__cacheKey],o.memory.textures--}function y(w){const S=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let it=0;it<S.__webglFramebuffer[J].length;it++)i.deleteFramebuffer(S.__webglFramebuffer[J][it]);else i.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)i.deleteFramebuffer(S.__webglFramebuffer[J]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=w.textures;for(let J=0,it=V.length;J<it;J++){const Z=n.get(V[J]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(V[J])}n.remove(w)}let L=0;function $(){L=0}function G(){const w=L;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),L+=1,w}function I(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function z(w,S){const V=n.get(w);if(w.isVideoTexture&&Rt(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){const J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(V,w,S);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+S)}function H(w,S){const V=n.get(w);if(w.version>0&&V.__version!==w.version){K(V,w,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+S)}function nt(w,S){const V=n.get(w);if(w.version>0&&V.__version!==w.version){K(V,w,S);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+S)}function Y(w,S){const V=n.get(w);if(w.version>0&&V.__version!==w.version){ot(V,w,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+S)}const at={[_r]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[Po]:i.MIRRORED_REPEAT},mt={[Ze]:i.NEAREST,[du]:i.NEAREST_MIPMAP_NEAREST,[Ns]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[Ir]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},gt={[gu]:i.NEVER,[Su]:i.ALWAYS,[_u]:i.LESS,[kc]:i.LEQUAL,[vu]:i.EQUAL,[yu]:i.GEQUAL,[xu]:i.GREATER,[Mu]:i.NOTEQUAL};function zt(w,S){if(S.type===vn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===_n||S.magFilter===Ir||S.magFilter===Ns||S.magFilter===fi||S.minFilter===_n||S.minFilter===Ir||S.minFilter===Ns||S.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,at[S.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,at[S.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,at[S.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,mt[S.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,mt[S.minFilter]),S.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,gt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ze||S.minFilter!==Ns&&S.minFilter!==fi||S.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function le(w,S){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",A));const J=S.source;let it=d.get(J);it===void 0&&(it={},d.set(J,it));const Z=I(S);if(Z!==w.__cacheKey){it[Z]===void 0&&(it[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),it[Z].usedTimes++;const Et=it[w.__cacheKey];Et!==void 0&&(it[w.__cacheKey].usedTimes--,Et.usedTimes===0&&E(S)),w.__cacheKey=Z,w.__webglTexture=it[Z].texture}return V}function K(w,S,V){let J=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=i.TEXTURE_3D);const it=le(w,S),Z=S.source;e.bindTexture(J,w.__webglTexture,i.TEXTURE0+V);const Et=n.get(Z);if(Z.version!==Et.__version||it===!0){e.activeTexture(i.TEXTURE0+V);const ut=Qt.getPrimaries(Qt.workingColorSpace),_t=S.colorSpace===Yn?null:Qt.getPrimaries(S.colorSpace),Jt=S.colorSpace===Yn||ut===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let st=_(S.image,!1,s.maxTextureSize);st=ue(S,st);const vt=r.convert(S.format,S.colorSpace),Pt=r.convert(S.type);let Lt=x(S.internalFormat,vt,Pt,S.colorSpace,S.isVideoTexture);zt(J,S);let xt;const jt=S.mipmaps,Ht=S.isVideoTexture!==!0,ce=Et.__version===void 0||it===!0,N=Z.dataReady,ct=U(S,st);if(S.isDepthTexture)Lt=v(S.format===Ki,S.type),ce&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Lt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Lt,st.width,st.height,0,vt,Pt,null));else if(S.isDataTexture)if(jt.length>0){Ht&&ce&&e.texStorage2D(i.TEXTURE_2D,ct,Lt,jt[0].width,jt[0].height);for(let q=0,Q=jt.length;q<Q;q++)xt=jt[q],Ht?N&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,xt.width,xt.height,vt,Pt,xt.data):e.texImage2D(i.TEXTURE_2D,q,Lt,xt.width,xt.height,0,vt,Pt,xt.data);S.generateMipmaps=!1}else Ht?(ce&&e.texStorage2D(i.TEXTURE_2D,ct,Lt,st.width,st.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,vt,Pt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,st.width,st.height,0,vt,Pt,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ht&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Lt,jt[0].width,jt[0].height,st.depth);for(let q=0,Q=jt.length;q<Q;q++)if(xt=jt[q],S.format!==hn)if(vt!==null)if(Ht){if(N)if(S.layerUpdates.size>0){const pt=zl(xt.width,xt.height,S.format,S.type);for(const dt of S.layerUpdates){const Ft=xt.data.subarray(dt*pt/xt.data.BYTES_PER_ELEMENT,(dt+1)*pt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,dt,xt.width,xt.height,1,vt,Ft)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,xt.width,xt.height,st.depth,vt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Lt,xt.width,xt.height,st.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,xt.width,xt.height,st.depth,vt,Pt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Lt,xt.width,xt.height,st.depth,0,vt,Pt,xt.data)}else{Ht&&ce&&e.texStorage2D(i.TEXTURE_2D,ct,Lt,jt[0].width,jt[0].height);for(let q=0,Q=jt.length;q<Q;q++)xt=jt[q],S.format!==hn?vt!==null?Ht?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,xt.width,xt.height,vt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Lt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?N&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,xt.width,xt.height,vt,Pt,xt.data):e.texImage2D(i.TEXTURE_2D,q,Lt,xt.width,xt.height,0,vt,Pt,xt.data)}else if(S.isDataArrayTexture)if(Ht){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Lt,st.width,st.height,st.depth),N)if(S.layerUpdates.size>0){const q=zl(st.width,st.height,S.format,S.type);for(const Q of S.layerUpdates){const pt=st.data.subarray(Q*q/st.data.BYTES_PER_ELEMENT,(Q+1)*q/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,vt,Pt,pt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,vt,Pt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,st.width,st.height,st.depth,0,vt,Pt,st.data);else if(S.isData3DTexture)Ht?(ce&&e.texStorage3D(i.TEXTURE_3D,ct,Lt,st.width,st.height,st.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,vt,Pt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,st.width,st.height,st.depth,0,vt,Pt,st.data);else if(S.isFramebufferTexture){if(ce)if(Ht)e.texStorage2D(i.TEXTURE_2D,ct,Lt,st.width,st.height);else{let q=st.width,Q=st.height;for(let pt=0;pt<ct;pt++)e.texImage2D(i.TEXTURE_2D,pt,Lt,q,Q,0,vt,Pt,null),q>>=1,Q>>=1}}else if(jt.length>0){if(Ht&&ce){const q=At(jt[0]);e.texStorage2D(i.TEXTURE_2D,ct,Lt,q.width,q.height)}for(let q=0,Q=jt.length;q<Q;q++)xt=jt[q],Ht?N&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,vt,Pt,xt):e.texImage2D(i.TEXTURE_2D,q,Lt,vt,Pt,xt);S.generateMipmaps=!1}else if(Ht){if(ce){const q=At(st);e.texStorage2D(i.TEXTURE_2D,ct,Lt,q.width,q.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Pt,st)}else e.texImage2D(i.TEXTURE_2D,0,Lt,vt,Pt,st);m(S)&&f(J),Et.__version=Z.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ot(w,S,V){if(S.image.length!==6)return;const J=le(w,S),it=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+V);const Z=n.get(it);if(it.version!==Z.__version||J===!0){e.activeTexture(i.TEXTURE0+V);const Et=Qt.getPrimaries(Qt.workingColorSpace),ut=S.colorSpace===Yn?null:Qt.getPrimaries(S.colorSpace),_t=S.colorSpace===Yn||Et===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Jt=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,vt=[];for(let Q=0;Q<6;Q++)!Jt&&!st?vt[Q]=_(S.image[Q],!0,s.maxCubemapSize):vt[Q]=st?S.image[Q].image:S.image[Q],vt[Q]=ue(S,vt[Q]);const Pt=vt[0],Lt=r.convert(S.format,S.colorSpace),xt=r.convert(S.type),jt=x(S.internalFormat,Lt,xt,S.colorSpace),Ht=S.isVideoTexture!==!0,ce=Z.__version===void 0||J===!0,N=it.dataReady;let ct=U(S,Pt);zt(i.TEXTURE_CUBE_MAP,S);let q;if(Jt){Ht&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,jt,Pt.width,Pt.height);for(let Q=0;Q<6;Q++){q=vt[Q].mipmaps;for(let pt=0;pt<q.length;pt++){const dt=q[pt];S.format!==hn?Lt!==null?Ht?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,0,0,dt.width,dt.height,Lt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,jt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,0,0,dt.width,dt.height,Lt,xt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,jt,dt.width,dt.height,0,Lt,xt,dt.data)}}}else{if(q=S.mipmaps,Ht&&ce){q.length>0&&ct++;const Q=At(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,jt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,vt[Q].width,vt[Q].height,Lt,xt,vt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,jt,vt[Q].width,vt[Q].height,0,Lt,xt,vt[Q].data);for(let pt=0;pt<q.length;pt++){const Ft=q[pt].image[Q].image;Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,0,0,Ft.width,Ft.height,Lt,xt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,jt,Ft.width,Ft.height,0,Lt,xt,Ft.data)}}else{Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Lt,xt,vt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,jt,Lt,xt,vt[Q]);for(let pt=0;pt<q.length;pt++){const dt=q[pt];Ht?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,0,0,Lt,xt,dt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,jt,Lt,xt,dt.image[Q])}}}m(S)&&f(i.TEXTURE_CUBE_MAP),Z.__version=it.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function bt(w,S,V,J,it,Z){const Et=r.convert(V.format,V.colorSpace),ut=r.convert(V.type),_t=x(V.internalFormat,Et,ut,V.colorSpace),Jt=n.get(S),st=n.get(V);if(st.__renderTarget=S,!Jt.__hasExternalTextures){const vt=Math.max(1,S.width>>Z),Pt=Math.max(1,S.height>>Z);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,Z,_t,vt,Pt,S.depth,0,Et,ut,null):e.texImage2D(it,Z,_t,vt,Pt,0,Et,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),qt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,it,st.__webglTexture,0,Yt(S)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,it,st.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(w,S,V){if(i.bindRenderbuffer(i.RENDERBUFFER,w),S.depthBuffer){const J=S.depthTexture,it=J&&J.isDepthTexture?J.type:null,Z=v(S.stencilBuffer,it),Et=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Yt(S);qt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,Z,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,Z,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Z,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,w)}else{const J=S.textures;for(let it=0;it<J.length;it++){const Z=J[it],Et=r.convert(Z.format,Z.colorSpace),ut=r.convert(Z.type),_t=x(Z.internalFormat,Et,ut,Z.colorSpace),Jt=Yt(S);V&&qt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,_t,S.width,S.height):qt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,_t,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,_t,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);const it=J.__webglTexture,Z=Yt(S);if(S.depthTexture.format===Xi)qt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(S.depthTexture.format===Ki)qt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Nt(w){const S=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const J=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",it)};J.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=J}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Dt(S.__webglFramebuffer,w)}else if(V){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=i.createRenderbuffer(),ht(S.__webglDepthbuffer[J],w,!1);else{const it=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ht(S.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(w,S,V){const J=n.get(w);S!==void 0&&bt(J.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Nt(w)}function pe(w){const S=w.texture,V=n.get(w),J=n.get(S);w.addEventListener("dispose",T);const it=w.textures,Z=w.isWebGLCubeRenderTarget===!0,Et=it.length>1;if(Et||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=S.version,o.memory.textures++),Z){V.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[ut]=[];for(let _t=0;_t<S.mipmaps.length;_t++)V.__webglFramebuffer[ut][_t]=i.createFramebuffer()}else V.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let ut=0;ut<S.mipmaps.length;ut++)V.__webglFramebuffer[ut]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ut=0,_t=it.length;ut<_t;ut++){const Jt=n.get(it[ut]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&qt(w)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ut=0;ut<it.length;ut++){const _t=it[ut];V.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ut]);const Jt=r.convert(_t.format,_t.colorSpace),st=r.convert(_t.type),vt=x(_t.internalFormat,Jt,st,_t.colorSpace,w.isXRRenderTarget===!0),Pt=Yt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,vt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,V.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(V.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),zt(i.TEXTURE_CUBE_MAP,S);for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)bt(V.__webglFramebuffer[ut][_t],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,_t);else bt(V.__webglFramebuffer[ut],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(S)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ut=0,_t=it.length;ut<_t;ut++){const Jt=it[ut],st=n.get(Jt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),zt(i.TEXTURE_2D,Jt),bt(V.__webglFramebuffer,w,Jt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(Jt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ut=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,J.__webglTexture),zt(ut,S),S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)bt(V.__webglFramebuffer[_t],w,S,i.COLOR_ATTACHMENT0,ut,_t);else bt(V.__webglFramebuffer,w,S,i.COLOR_ATTACHMENT0,ut,0);m(S)&&f(ut),e.unbindTexture()}w.depthBuffer&&Nt(w)}function Kt(w){const S=w.textures;for(let V=0,J=S.length;V<J;V++){const it=S[V];if(m(it)){const Z=M(w),Et=n.get(it).__webglTexture;e.bindTexture(Z,Et),f(Z),e.unbindTexture()}}}const ve=[],B=[];function Ke(w){if(w.samples>0){if(qt(w)===!1){const S=w.textures,V=w.width,J=w.height;let it=i.COLOR_BUFFER_BIT;const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(w),ut=S.length>1;if(ut)for(let _t=0;_t<S.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let _t=0;_t<S.length;_t++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);const Jt=n.get(S[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,V,J,0,0,V,J,it,i.NEAREST),l===!0&&(ve.length=0,B.length=0,ve.push(i.COLOR_ATTACHMENT0+_t),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ve.push(Z),B.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ve))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let _t=0;_t<S.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);const Jt=n.get(S[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Yt(w){return Math.min(s.maxSamples,w.samples)}function qt(w){const S=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Rt(w){const S=o.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function ue(w,S){const V=w.colorSpace,J=w.format,it=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==Qi&&V!==Yn&&(Qt.getTransfer(V)===oe?(J!==hn||it!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function At(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=$,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=nt,this.setTextureCube=Y,this.rebindTextures=Wt,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=qt}function Hg(i,t){function e(n,s=Yn){let r;const o=Qt.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ma)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rc)return i.BYTE;if(n===Cc)return i.SHORT;if(n===ws)return i.UNSIGNED_SHORT;if(n===fa)return i.INT;if(n===_i)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===Ds)return i.HALF_FLOAT;if(n===Dc)return i.ALPHA;if(n===Lc)return i.RGB;if(n===hn)return i.RGBA;if(n===Ic)return i.LUMINANCE;if(n===Uc)return i.LUMINANCE_ALPHA;if(n===Xi)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===ga)return i.RED;if(n===_a)return i.RED_INTEGER;if(n===Nc)return i.RG;if(n===va)return i.RG_INTEGER;if(n===xa)return i.RGBA_INTEGER;if(n===cr||n===hr||n===ur||n===dr)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Do||n===Lo||n===Io||n===Uo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===No||n===Fo||n===Oo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===No||n===Fo)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ko||n===Bo||n===zo||n===Ho||n===Vo||n===Go||n===Wo||n===Xo||n===$o||n===Yo||n===qo||n===jo||n===Zo||n===Ko)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ko)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ho)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Go)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$o)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ko)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fr||n===Jo||n===Qo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fr)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fc||n===ta||n===ea||n===na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Vg extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Be extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gg={type:"move"};class oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xg=`
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

}`;class $g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ue,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Fn({vertexShader:Wg,fragmentShader:Xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kt(new Ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yg extends Mi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new $g,m=e.getContextAttributes();let f=null,M=null;const x=[],v=[],U=new Tt;let A=null;const T=new tn;T.viewport=new _e;const P=new tn;P.viewport=new _e;const E=[T,P],y=new Vg;let L=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ot=x[K];return ot===void 0&&(ot=new oo,x[K]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(K){let ot=x[K];return ot===void 0&&(ot=new oo,x[K]=ot),ot.getGripSpace()},this.getHand=function(K){let ot=x[K];return ot===void 0&&(ot=new oo,x[K]=ot),ot.getHandSpace()};function G(K){const ot=v.indexOf(K.inputSource);if(ot===-1)return;const bt=x[ot];bt!==void 0&&(bt.update(K.inputSource,K.frame,c||o),bt.dispatchEvent({type:K.type,data:K.inputSource}))}function I(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",z);for(let K=0;K<x.length;K++){const ot=v[K];ot!==null&&(v[K]=null,x[K].disconnect(ot))}L=null,$=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,M=null,le.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",I),s.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new vi(p.framebufferWidth,p.framebufferHeight,{format:hn,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ot=null,bt=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?Ki:Xi,bt=m.stencil?Zi:_i);const Dt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new vi(d.textureWidth,d.textureHeight,{format:hn,type:Nn,depthTexture:new Kc(d.textureWidth,d.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(K){for(let ot=0;ot<K.removed.length;ot++){const bt=K.removed[ot],ht=v.indexOf(bt);ht>=0&&(v[ht]=null,x[ht].disconnect(bt))}for(let ot=0;ot<K.added.length;ot++){const bt=K.added[ot];let ht=v.indexOf(bt);if(ht===-1){for(let Nt=0;Nt<x.length;Nt++)if(Nt>=v.length){v.push(bt),ht=Nt;break}else if(v[Nt]===null){v[Nt]=bt,ht=Nt;break}if(ht===-1)break}const Dt=x[ht];Dt&&Dt.connect(bt)}}const H=new D,nt=new D;function Y(K,ot,bt){H.setFromMatrixPosition(ot.matrixWorld),nt.setFromMatrixPosition(bt.matrixWorld);const ht=H.distanceTo(nt),Dt=ot.projectionMatrix.elements,Nt=bt.projectionMatrix.elements,Wt=Dt[14]/(Dt[10]-1),pe=Dt[14]/(Dt[10]+1),Kt=(Dt[9]+1)/Dt[5],ve=(Dt[9]-1)/Dt[5],B=(Dt[8]-1)/Dt[0],Ke=(Nt[8]+1)/Nt[0],Yt=Wt*B,qt=Wt*Ke,Rt=ht/(-B+Ke),ue=Rt*-B;if(ot.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ue),K.translateZ(Rt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Dt[10]===-1)K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const At=Wt+Rt,w=pe+Rt,S=Yt-ue,V=qt+(ht-ue),J=Kt*pe/w*At,it=ve*pe/w*At;K.projectionMatrix.makePerspective(S,V,J,it,At,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function at(K,ot){ot===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ot.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ot=K.near,bt=K.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(bt=_.depthFar)),y.near=P.near=T.near=ot,y.far=P.far=T.far=bt,(L!==y.near||$!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,$=y.far),T.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,y.layers.mask=T.layers.mask|P.layers.mask;const ht=K.parent,Dt=y.cameras;at(y,ht);for(let Nt=0;Nt<Dt.length;Nt++)at(Dt[Nt],ht);Dt.length===2?Y(y,T,P):y.projectionMatrix.copy(T.projectionMatrix),mt(K,y,ht)};function mt(K,ot,bt){bt===null?K.matrix.copy(ot.matrixWorld):(K.matrix.copy(bt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ot.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ts*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let gt=null;function zt(K,ot){if(h=ot.getViewerPose(c||o),g=ot,h!==null){const bt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let ht=!1;bt.length!==y.cameras.length&&(y.cameras.length=0,ht=!0);for(let Nt=0;Nt<bt.length;Nt++){const Wt=bt[Nt];let pe=null;if(p!==null)pe=p.getViewport(Wt);else{const ve=u.getViewSubImage(d,Wt);pe=ve.viewport,Nt===0&&(t.setRenderTargetTextures(M,ve.colorTexture,d.ignoreDepthValues?void 0:ve.depthStencilTexture),t.setRenderTarget(M))}let Kt=E[Nt];Kt===void 0&&(Kt=new tn,Kt.layers.enable(Nt),Kt.viewport=new _e,E[Nt]=Kt),Kt.matrix.fromArray(Wt.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(Wt.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(pe.x,pe.y,pe.width,pe.height),Nt===0&&(y.matrix.copy(Kt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ht===!0&&y.cameras.push(Kt)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Nt=u.getDepthInformation(bt[0]);Nt&&Nt.isValid&&Nt.texture&&_.init(t,Nt,s.renderState)}}for(let bt=0;bt<x.length;bt++){const ht=v[bt],Dt=x[bt];ht!==null&&Dt!==void 0&&Dt.update(ht,ot,c||o)}gt&&gt(K,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}const le=new jc;le.setAnimationLoop(zt),this.setAnimationLoop=function(K){gt=K},this.dispose=function(){}}}const ai=new Mn,qg=new ie;function jg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Xc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,x,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ze&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ze&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=t.get(f),x=M.envMap,v=M.envMapRotation;x&&(m.envMap.value=x,ai.copy(v),ai.x*=-1,ai.y*=-1,ai.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),m.envMapRotation.value.setFromMatrix4(qg.makeRotationFromEuler(ai)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ze&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function c(M,x){let v=s[M.id];v===void 0&&(g(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",m));const U=x.program;n.updateUBOMapping(M,U);const A=t.render.frame;r[M.id]!==A&&(d(M),r[M.id]=A)}function h(M){const x=u();M.__bindingPointIndex=x;const v=i.createBuffer(),U=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,U,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=s[M.id],v=M.uniforms,U=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,T=v.length;A<T;A++){const P=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,y=P.length;E<y;E++){const L=P[E];if(p(L,A,E,U)===!0){const $=L.__offset,G=Array.isArray(L.value)?L.value:[L.value];let I=0;for(let z=0;z<G.length;z++){const H=G[z],nt=_(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,$+I,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,I),I+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,x,v,U){const A=M.value,T=x+"_"+v;if(U[T]===void 0)return typeof A=="number"||typeof A=="boolean"?U[T]=A:U[T]=A.clone(),!0;{const P=U[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return U[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(M){const x=M.uniforms;let v=0;const U=16;for(let T=0,P=x.length;T<P;T++){const E=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,L=E.length;y<L;y++){const $=E[y],G=Array.isArray($.value)?$.value:[$.value];for(let I=0,z=G.length;I<z;I++){const H=G[I],nt=_(H),Y=v%U,at=Y%nt.boundary,mt=Y+at;v+=at,mt!==0&&U-mt<nt.storage&&(v+=U-mt),$.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=v,v+=nt.storage}}}const A=v%U;return A>0&&(v+=U-A),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Kg{constructor(t={}){const{canvas:e=Bu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=Kn,this.toneMappingExposure=1;const v=this;let U=!1,A=0,T=0,P=null,E=-1,y=null;const L=new _e,$=new _e;let G=null;const I=new Ut(0);let z=0,H=e.width,nt=e.height,Y=1,at=null,mt=null;const gt=new _e(0,0,H,nt),zt=new _e(0,0,H,nt);let le=!1;const K=new Sa;let ot=!1,bt=!1;const ht=new ie,Dt=new ie,Nt=new D,Wt=new _e,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function ve(){return P===null?Y:1}let B=n;function Ke(b,F){return e.getContext(b,F)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${da}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),B===null){const F="webgl2";if(B=Ke(F,b),B===null)throw Ke(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Yt,qt,Rt,ue,At,w,S,V,J,it,Z,Et,ut,_t,Jt,st,vt,Pt,Lt,xt,jt,Ht,ce,N;function ct(){Yt=new nm(B),Yt.init(),Ht=new Hg(B,Yt),qt=new Zp(B,Yt,t,Ht),Rt=new kg(B,Yt),qt.reverseDepthBuffer&&d&&Rt.buffers.depth.setReversed(!0),ue=new rm(B),At=new bg,w=new zg(B,Yt,Rt,At,qt,Ht,ue),S=new Jp(v),V=new em(v),J=new ud(B),ce=new qp(B,J),it=new im(B,J,ue,ce),Z=new am(B,it,J,ue),Lt=new om(B,qt,w),st=new Kp(At),Et=new Sg(v,S,V,Yt,qt,ce,st),ut=new jg(v,At),_t=new wg,Jt=new Dg(Yt),Pt=new Yp(v,S,V,Rt,Z,p,l),vt=new Fg(v,Z,qt),N=new Zg(B,ue,qt,Rt),xt=new jp(B,Yt,ue),jt=new sm(B,Yt,ue),ue.programs=Et.programs,v.capabilities=qt,v.extensions=Yt,v.properties=At,v.renderLists=_t,v.shadowMap=vt,v.state=Rt,v.info=ue}ct();const q=new Yg(v,B);this.xr=q,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=Yt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Yt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(H,nt,!1))},this.getSize=function(b){return b.set(H,nt)},this.setSize=function(b,F,W=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,nt=F,e.width=Math.floor(b*Y),e.height=Math.floor(F*Y),W===!0&&(e.style.width=b+"px",e.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(H*Y,nt*Y).floor()},this.setDrawingBufferSize=function(b,F,W){H=b,nt=F,Y=W,e.width=Math.floor(b*W),e.height=Math.floor(F*W),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(gt)},this.setViewport=function(b,F,W,X){b.isVector4?gt.set(b.x,b.y,b.z,b.w):gt.set(b,F,W,X),Rt.viewport(L.copy(gt).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(zt)},this.setScissor=function(b,F,W,X){b.isVector4?zt.set(b.x,b.y,b.z,b.w):zt.set(b,F,W,X),Rt.scissor($.copy(zt).multiplyScalar(Y).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(b){Rt.setScissorTest(le=b)},this.setOpaqueSort=function(b){at=b},this.setTransparentSort=function(b){mt=b},this.getClearColor=function(b){return b.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(b=!0,F=!0,W=!0){let X=0;if(b){let O=!1;if(P!==null){const rt=P.texture.format;O=rt===xa||rt===va||rt===_a}if(O){const rt=P.texture.type,ft=rt===Nn||rt===_i||rt===ws||rt===Zi||rt===pa||rt===ma,Mt=Pt.getClearColor(),yt=Pt.getClearAlpha(),It=Mt.r,Ot=Mt.g,St=Mt.b;ft?(g[0]=It,g[1]=Ot,g[2]=St,g[3]=yt,B.clearBufferuiv(B.COLOR,0,g)):(_[0]=It,_[1]=Ot,_[2]=St,_[3]=yt,B.clearBufferiv(B.COLOR,0,_))}else X|=B.COLOR_BUFFER_BIT}F&&(X|=B.DEPTH_BUFFER_BIT),W&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),_t.dispose(),Jt.dispose(),At.dispose(),S.dispose(),V.dispose(),Z.dispose(),ce.dispose(),N.dispose(),Et.dispose(),q.dispose(),q.removeEventListener("sessionstart",Ia),q.removeEventListener("sessionend",Ua),ei.stop()};function Q(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const b=ue.autoReset,F=vt.enabled,W=vt.autoUpdate,X=vt.needsUpdate,O=vt.type;ct(),ue.autoReset=b,vt.enabled=F,vt.autoUpdate=W,vt.needsUpdate=X,vt.type=O}function dt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ft(b){const F=b.target;F.removeEventListener("dispose",Ft),ge(F)}function ge(b){Pe(b),At.remove(b)}function Pe(b){const F=At.get(b).programs;F!==void 0&&(F.forEach(function(W){Et.releaseProgram(W)}),b.isShaderMaterial&&Et.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,W,X,O,rt){F===null&&(F=pe);const ft=O.isMesh&&O.matrixWorld.determinant()<0,Mt=uh(b,F,W,X,O);Rt.setMaterial(X,ft);let yt=W.index,It=1;if(X.wireframe===!0){if(yt=it.getWireframeAttribute(W),yt===void 0)return;It=2}const Ot=W.drawRange,St=W.attributes.position;let te=Ot.start*It,he=(Ot.start+Ot.count)*It;rt!==null&&(te=Math.max(te,rt.start*It),he=Math.min(he,(rt.start+rt.count)*It)),yt!==null?(te=Math.max(te,0),he=Math.min(he,yt.count)):St!=null&&(te=Math.max(te,0),he=Math.min(he,St.count));const de=he-te;if(de<0||de===1/0)return;ce.setup(O,X,Mt,W,yt);let Ge,ee=xt;if(yt!==null&&(Ge=J.get(yt),ee=jt,ee.setIndex(Ge)),O.isMesh)X.wireframe===!0?(Rt.setLineWidth(X.wireframeLinewidth*ve()),ee.setMode(B.LINES)):ee.setMode(B.TRIANGLES);else if(O.isLine){let wt=X.linewidth;wt===void 0&&(wt=1),Rt.setLineWidth(wt*ve()),O.isLineSegments?ee.setMode(B.LINES):O.isLineLoop?ee.setMode(B.LINE_LOOP):ee.setMode(B.LINE_STRIP)}else O.isPoints?ee.setMode(B.POINTS):O.isSprite&&ee.setMode(B.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ee.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))ee.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const wt=O._multiDrawStarts,Sn=O._multiDrawCounts,ne=O._multiDrawCount,sn=yt?J.get(yt).bytesPerElement:1,Si=At.get(X).currentProgram.getUniforms();for(let Xe=0;Xe<ne;Xe++)Si.setValue(B,"_gl_DrawID",Xe),ee.render(wt[Xe]/sn,Sn[Xe])}else if(O.isInstancedMesh)ee.renderInstances(te,de,O.count);else if(W.isInstancedBufferGeometry){const wt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Sn=Math.min(W.instanceCount,wt);ee.renderInstances(te,de,Sn)}else ee.render(te,de)};function se(b,F,W){b.transparent===!0&&b.side===je&&b.forceSinglePass===!1?(b.side=ze,b.needsUpdate=!0,Us(b,F,W),b.side=Jn,b.needsUpdate=!0,Us(b,F,W),b.side=je):Us(b,F,W)}this.compile=function(b,F,W=null){W===null&&(W=b),f=Jt.get(W),f.init(F),x.push(f),W.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),b!==W&&b.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const X=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const rt=O.material;if(rt)if(Array.isArray(rt))for(let ft=0;ft<rt.length;ft++){const Mt=rt[ft];se(Mt,W,O),X.add(Mt)}else se(rt,W,O),X.add(rt)}),x.pop(),f=null,X},this.compileAsync=function(b,F,W=null){const X=this.compile(b,F,W);return new Promise(O=>{function rt(){if(X.forEach(function(ft){At.get(ft).currentProgram.isReady()&&X.delete(ft)}),X.size===0){O(b);return}setTimeout(rt,10)}Yt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let nn=null;function yn(b){nn&&nn(b)}function Ia(){ei.stop()}function Ua(){ei.start()}const ei=new jc;ei.setAnimationLoop(yn),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(b){nn=b,q.setAnimationLoop(b),b===null?ei.stop():ei.start()},q.addEventListener("sessionstart",Ia),q.addEventListener("sessionend",Ua),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,F,P),f=Jt.get(b,x.length),f.init(F),x.push(f),Dt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),K.setFromProjectionMatrix(Dt),bt=this.localClippingEnabled,ot=st.init(this.clippingPlanes,bt),m=_t.get(b,M.length),m.init(),M.push(m),q.enabled===!0&&q.isPresenting===!0){const rt=v.xr.getDepthSensingMesh();rt!==null&&Pr(rt,F,-1/0,v.sortObjects)}Pr(b,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(at,mt),Kt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Kt&&Pt.addToRenderList(m,b),this.info.render.frame++,ot===!0&&st.beginShadows();const W=f.state.shadowsArray;vt.render(W,b,F),ot===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,O=m.transmissive;if(f.setupLights(),F.isArrayCamera){const rt=F.cameras;if(O.length>0)for(let ft=0,Mt=rt.length;ft<Mt;ft++){const yt=rt[ft];Fa(X,O,b,yt)}Kt&&Pt.render(b);for(let ft=0,Mt=rt.length;ft<Mt;ft++){const yt=rt[ft];Na(m,b,yt,yt.viewport)}}else O.length>0&&Fa(X,O,b,F),Kt&&Pt.render(b),Na(m,b,F);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(v,b,F),ce.resetDefaultState(),E=-1,y=null,x.pop(),x.length>0?(f=x[x.length-1],ot===!0&&st.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Pr(b,F,W,X){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||K.intersectsSprite(b)){X&&Wt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Dt);const ft=Z.update(b),Mt=b.material;Mt.visible&&m.push(b,ft,Mt,W,Wt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||K.intersectsObject(b))){const ft=Z.update(b),Mt=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Wt.copy(b.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Wt.copy(ft.boundingSphere.center)),Wt.applyMatrix4(b.matrixWorld).applyMatrix4(Dt)),Array.isArray(Mt)){const yt=ft.groups;for(let It=0,Ot=yt.length;It<Ot;It++){const St=yt[It],te=Mt[St.materialIndex];te&&te.visible&&m.push(b,ft,te,W,Wt.z,St)}}else Mt.visible&&m.push(b,ft,Mt,W,Wt.z,null)}}const rt=b.children;for(let ft=0,Mt=rt.length;ft<Mt;ft++)Pr(rt[ft],F,W,X)}function Na(b,F,W,X){const O=b.opaque,rt=b.transmissive,ft=b.transparent;f.setupLightsView(W),ot===!0&&st.setGlobalState(v.clippingPlanes,W),X&&Rt.viewport(L.copy(X)),O.length>0&&Is(O,F,W),rt.length>0&&Is(rt,F,W),ft.length>0&&Is(ft,F,W),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Fa(b,F,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new vi(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?Ds:Nn,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const rt=f.state.transmissionRenderTarget[X.id],ft=X.viewport||L;rt.setSize(ft.z,ft.w);const Mt=v.getRenderTarget();v.setRenderTarget(rt),v.getClearColor(I),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),Kt&&Pt.render(W);const yt=v.toneMapping;v.toneMapping=Kn;const It=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),ot===!0&&st.setGlobalState(v.clippingPlanes,X),Is(b,W,X),w.updateMultisampleRenderTarget(rt),w.updateRenderTargetMipmap(rt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let St=0,te=F.length;St<te;St++){const he=F[St],de=he.object,Ge=he.geometry,ee=he.material,wt=he.group;if(ee.side===je&&de.layers.test(X.layers)){const Sn=ee.side;ee.side=ze,ee.needsUpdate=!0,Oa(de,W,X,Ge,ee,wt),ee.side=Sn,ee.needsUpdate=!0,Ot=!0}}Ot===!0&&(w.updateMultisampleRenderTarget(rt),w.updateRenderTargetMipmap(rt))}v.setRenderTarget(Mt),v.setClearColor(I,z),It!==void 0&&(X.viewport=It),v.toneMapping=yt}function Is(b,F,W){const X=F.isScene===!0?F.overrideMaterial:null;for(let O=0,rt=b.length;O<rt;O++){const ft=b[O],Mt=ft.object,yt=ft.geometry,It=X===null?ft.material:X,Ot=ft.group;Mt.layers.test(W.layers)&&Oa(Mt,F,W,yt,It,Ot)}}function Oa(b,F,W,X,O,rt){b.onBeforeRender(v,F,W,X,O,rt),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(v,F,W,X,b,rt),O.transparent===!0&&O.side===je&&O.forceSinglePass===!1?(O.side=ze,O.needsUpdate=!0,v.renderBufferDirect(W,F,X,O,b,rt),O.side=Jn,O.needsUpdate=!0,v.renderBufferDirect(W,F,X,O,b,rt),O.side=je):v.renderBufferDirect(W,F,X,O,b,rt),b.onAfterRender(v,F,W,X,O,rt)}function Us(b,F,W){F.isScene!==!0&&(F=pe);const X=At.get(b),O=f.state.lights,rt=f.state.shadowsArray,ft=O.state.version,Mt=Et.getParameters(b,O.state,rt,F,W),yt=Et.getProgramCacheKey(Mt);let It=X.programs;X.environment=b.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(b.isMeshStandardMaterial?V:S).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,It===void 0&&(b.addEventListener("dispose",Ft),It=new Map,X.programs=It);let Ot=It.get(yt);if(Ot!==void 0){if(X.currentProgram===Ot&&X.lightsStateVersion===ft)return Ba(b,Mt),Ot}else Mt.uniforms=Et.getUniforms(b),b.onBeforeCompile(Mt,v),Ot=Et.acquireProgram(Mt,yt),It.set(yt,Ot),X.uniforms=Mt.uniforms;const St=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(St.clippingPlanes=st.uniform),Ba(b,Mt),X.needsLights=fh(b),X.lightsStateVersion=ft,X.needsLights&&(St.ambientLightColor.value=O.state.ambient,St.lightProbe.value=O.state.probe,St.directionalLights.value=O.state.directional,St.directionalLightShadows.value=O.state.directionalShadow,St.spotLights.value=O.state.spot,St.spotLightShadows.value=O.state.spotShadow,St.rectAreaLights.value=O.state.rectArea,St.ltc_1.value=O.state.rectAreaLTC1,St.ltc_2.value=O.state.rectAreaLTC2,St.pointLights.value=O.state.point,St.pointLightShadows.value=O.state.pointShadow,St.hemisphereLights.value=O.state.hemi,St.directionalShadowMap.value=O.state.directionalShadowMap,St.directionalShadowMatrix.value=O.state.directionalShadowMatrix,St.spotShadowMap.value=O.state.spotShadowMap,St.spotLightMatrix.value=O.state.spotLightMatrix,St.spotLightMap.value=O.state.spotLightMap,St.pointShadowMap.value=O.state.pointShadowMap,St.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=Ot,X.uniformsList=null,Ot}function ka(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=pr.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Ba(b,F){const W=At.get(b);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function uh(b,F,W,X,O){F.isScene!==!0&&(F=pe),w.resetTextureUnits();const rt=F.fog,ft=X.isMeshStandardMaterial?F.environment:null,Mt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Qi,yt=(X.isMeshStandardMaterial?V:S).get(X.envMap||ft),It=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ot=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),St=!!W.morphAttributes.position,te=!!W.morphAttributes.normal,he=!!W.morphAttributes.color;let de=Kn;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(de=v.toneMapping);const Ge=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ee=Ge!==void 0?Ge.length:0,wt=At.get(X),Sn=f.state.lights;if(ot===!0&&(bt===!0||b!==y)){const Je=b===y&&X.id===E;st.setState(X,b,Je)}let ne=!1;X.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Sn.state.version||wt.outputColorSpace!==Mt||O.isBatchedMesh&&wt.batching===!1||!O.isBatchedMesh&&wt.batching===!0||O.isBatchedMesh&&wt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&wt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&wt.instancing===!1||!O.isInstancedMesh&&wt.instancing===!0||O.isSkinnedMesh&&wt.skinning===!1||!O.isSkinnedMesh&&wt.skinning===!0||O.isInstancedMesh&&wt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&wt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&wt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&wt.instancingMorph===!1&&O.morphTexture!==null||wt.envMap!==yt||X.fog===!0&&wt.fog!==rt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==st.numPlanes||wt.numIntersection!==st.numIntersection)||wt.vertexAlphas!==It||wt.vertexTangents!==Ot||wt.morphTargets!==St||wt.morphNormals!==te||wt.morphColors!==he||wt.toneMapping!==de||wt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,wt.__version=X.version);let sn=wt.currentProgram;ne===!0&&(sn=Us(X,F,O));let Si=!1,Xe=!1,rs=!1;const fe=sn.getUniforms(),dn=wt.uniforms;if(Rt.useProgram(sn.program)&&(Si=!0,Xe=!0,rs=!0),X.id!==E&&(E=X.id,Xe=!0),Si||y!==b){Rt.buffers.depth.getReversed()?(ht.copy(b.projectionMatrix),Hu(ht),Vu(ht),fe.setValue(B,"projectionMatrix",ht)):fe.setValue(B,"projectionMatrix",b.projectionMatrix),fe.setValue(B,"viewMatrix",b.matrixWorldInverse);const On=fe.map.cameraPosition;On!==void 0&&On.setValue(B,Nt.setFromMatrixPosition(b.matrixWorld)),qt.logarithmicDepthBuffer&&fe.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&fe.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Xe=!0,rs=!0)}if(O.isSkinnedMesh){fe.setOptional(B,O,"bindMatrix"),fe.setOptional(B,O,"bindMatrixInverse");const Je=O.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),fe.setValue(B,"boneTexture",Je.boneTexture,w))}O.isBatchedMesh&&(fe.setOptional(B,O,"batchingTexture"),fe.setValue(B,"batchingTexture",O._matricesTexture,w),fe.setOptional(B,O,"batchingIdTexture"),fe.setValue(B,"batchingIdTexture",O._indirectTexture,w),fe.setOptional(B,O,"batchingColorTexture"),O._colorsTexture!==null&&fe.setValue(B,"batchingColorTexture",O._colorsTexture,w));const os=W.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0)&&Lt.update(O,W,sn),(Xe||wt.receiveShadow!==O.receiveShadow)&&(wt.receiveShadow=O.receiveShadow,fe.setValue(B,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(dn.envMap.value=yt,dn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(dn.envMapIntensity.value=F.environmentIntensity),Xe&&(fe.setValue(B,"toneMappingExposure",v.toneMappingExposure),wt.needsLights&&dh(dn,rs),rt&&X.fog===!0&&ut.refreshFogUniforms(dn,rt),ut.refreshMaterialUniforms(dn,X,Y,nt,f.state.transmissionRenderTarget[b.id]),pr.upload(B,ka(wt),dn,w)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(pr.upload(B,ka(wt),dn,w),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&fe.setValue(B,"center",O.center),fe.setValue(B,"modelViewMatrix",O.modelViewMatrix),fe.setValue(B,"normalMatrix",O.normalMatrix),fe.setValue(B,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Je=X.uniformsGroups;for(let On=0,kn=Je.length;On<kn;On++){const za=Je[On];N.update(za,sn),N.bind(za,sn)}}return sn}function dh(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function fh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,F,W){At.get(b.texture).__webglTexture=F,At.get(b.depthTexture).__webglTexture=W;const X=At.get(b);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){const W=At.get(b);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,W=0){P=b,A=F,T=W;let X=!0,O=null,rt=!1,ft=!1;if(b){const yt=At.get(b);if(yt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(B.FRAMEBUFFER,null),X=!1;else if(yt.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(yt.__hasExternalTextures)w.rebindTextures(b,At.get(b.texture).__webglTexture,At.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const St=b.depthTexture;if(yt.__boundDepthTexture!==St){if(St!==null&&At.has(St)&&(b.width!==St.image.width||b.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const It=b.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ft=!0);const Ot=At.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ot[F])?O=Ot[F][W]:O=Ot[F],rt=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?O=At.get(b).__webglMultisampledFramebuffer:Array.isArray(Ot)?O=Ot[W]:O=Ot,L.copy(b.viewport),$.copy(b.scissor),G=b.scissorTest}else L.copy(gt).multiplyScalar(Y).floor(),$.copy(zt).multiplyScalar(Y).floor(),G=le;if(Rt.bindFramebuffer(B.FRAMEBUFFER,O)&&X&&Rt.drawBuffers(b,O),Rt.viewport(L),Rt.scissor($),Rt.setScissorTest(G),rt){const yt=At.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,yt.__webglTexture,W)}else if(ft){const yt=At.get(b.texture),It=F||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,yt.__webglTexture,W||0,It)}E=-1},this.readRenderTargetPixels=function(b,F,W,X,O,rt,ft){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=At.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){Rt.bindFramebuffer(B.FRAMEBUFFER,Mt);try{const yt=b.texture,It=yt.format,Ot=yt.type;if(!qt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-X&&W>=0&&W<=b.height-O&&B.readPixels(F,W,X,O,Ht.convert(It),Ht.convert(Ot),rt)}finally{const yt=P!==null?At.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(B.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(b,F,W,X,O,rt,ft){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=At.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){const yt=b.texture,It=yt.format,Ot=yt.type;if(!qt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=b.width-X&&W>=0&&W<=b.height-O){Rt.bindFramebuffer(B.FRAMEBUFFER,Mt);const St=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,St),B.bufferData(B.PIXEL_PACK_BUFFER,rt.byteLength,B.STREAM_READ),B.readPixels(F,W,X,O,Ht.convert(It),Ht.convert(Ot),0);const te=P!==null?At.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(B.FRAMEBUFFER,te);const he=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await zu(B,he,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,St),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,rt),B.deleteBuffer(St),B.deleteSync(he),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,F=null,W=0){b.isTexture!==!0&&(gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,b=arguments[1]);const X=Math.pow(2,-W),O=Math.floor(b.image.width*X),rt=Math.floor(b.image.height*X),ft=F!==null?F.x:0,Mt=F!==null?F.y:0;w.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,W,0,0,ft,Mt,O,rt),Rt.unbindTexture()},this.copyTextureToTexture=function(b,F,W=null,X=null,O=0){b.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1],F=arguments[2],O=arguments[3]||0,W=null);let rt,ft,Mt,yt,It,Ot,St,te,he;const de=b.isCompressedTexture?b.mipmaps[O]:b.image;W!==null?(rt=W.max.x-W.min.x,ft=W.max.y-W.min.y,Mt=W.isBox3?W.max.z-W.min.z:1,yt=W.min.x,It=W.min.y,Ot=W.isBox3?W.min.z:0):(rt=de.width,ft=de.height,Mt=de.depth||1,yt=0,It=0,Ot=0),X!==null?(St=X.x,te=X.y,he=X.z):(St=0,te=0,he=0);const Ge=Ht.convert(F.format),ee=Ht.convert(F.type);let wt;F.isData3DTexture?(w.setTexture3D(F,0),wt=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(w.setTexture2DArray(F,0),wt=B.TEXTURE_2D_ARRAY):(w.setTexture2D(F,0),wt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);const Sn=B.getParameter(B.UNPACK_ROW_LENGTH),ne=B.getParameter(B.UNPACK_IMAGE_HEIGHT),sn=B.getParameter(B.UNPACK_SKIP_PIXELS),Si=B.getParameter(B.UNPACK_SKIP_ROWS),Xe=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,de.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,de.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,yt),B.pixelStorei(B.UNPACK_SKIP_ROWS,It),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ot);const rs=b.isDataArrayTexture||b.isData3DTexture,fe=F.isDataArrayTexture||F.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const dn=At.get(b),os=At.get(F),Je=At.get(dn.__renderTarget),On=At.get(os.__renderTarget);Rt.bindFramebuffer(B.READ_FRAMEBUFFER,Je.__webglFramebuffer),Rt.bindFramebuffer(B.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let kn=0;kn<Mt;kn++)rs&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,At.get(b).__webglTexture,O,Ot+kn),b.isDepthTexture?(fe&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,At.get(F).__webglTexture,O,he+kn),B.blitFramebuffer(yt,It,rt,ft,St,te,rt,ft,B.DEPTH_BUFFER_BIT,B.NEAREST)):fe?B.copyTexSubImage3D(wt,O,St,te,he+kn,yt,It,rt,ft):B.copyTexSubImage2D(wt,O,St,te,he+kn,yt,It,rt,ft);Rt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else fe?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(wt,O,St,te,he,rt,ft,Mt,Ge,ee,de.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(wt,O,St,te,he,rt,ft,Mt,Ge,de.data):B.texSubImage3D(wt,O,St,te,he,rt,ft,Mt,Ge,ee,de):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,O,St,te,rt,ft,Ge,ee,de.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,O,St,te,de.width,de.height,Ge,de.data):B.texSubImage2D(B.TEXTURE_2D,O,St,te,rt,ft,Ge,ee,de);B.pixelStorei(B.UNPACK_ROW_LENGTH,Sn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ne),B.pixelStorei(B.UNPACK_SKIP_PIXELS,sn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Si),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xe),O===0&&F.generateMipmaps&&B.generateMipmap(wt),Rt.unbindTexture()},this.copyTextureToTexture3D=function(b,F,W=null,X=null,O=0){return b.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,b=arguments[2],F=arguments[3],O=arguments[4]||0),gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,F,W,X,O)},this.initRenderTarget=function(b){At.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),Rt.unbindTexture()},this.resetState=function(){A=0,T=0,P=null,Rt.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class Ea{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new Ea(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Hl extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Jg extends Ue{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ze,h=Ze,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vl extends un{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Oi=new ie,Gl=new ie,nr=[],Wl=new yi,Qg=new ie,ds=new kt,fs=new es;class Xl extends kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Qg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Oi),Wl.copy(t.boundingBox).applyMatrix4(Oi),this.boundingBox.union(Wl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new es),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Oi),fs.copy(t.boundingSphere).applyMatrix4(Oi),this.boundingSphere.union(fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ds.geometry=this.geometry,ds.material=this.material,ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fs.copy(this.boundingSphere),fs.applyMatrix4(n),t.ray.intersectsSphere(fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Oi),Gl.multiplyMatrices(n,Oi),ds.matrixWorld=Gl,ds.raycast(t,nr);for(let o=0,a=nr.length;o<a;o++){const l=nr[o];l.instanceId=r,l.object=this,e.push(l)}nr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Vl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Jg(new Float32Array(s*this.count),s,this.count,ga,vn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class wa extends ns{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Mr=new D,yr=new D,$l=new ie,ps=new wr,ir=new es,ao=new D,Yl=new D;class nh extends Ee{constructor(t=new Re,e=new wa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Mr.fromBufferAttribute(e,s-1),yr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Mr.distanceTo(yr);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(s),ir.radius+=r,t.ray.intersectsSphere(ir)===!1)return;$l.copy(s).invert(),ps.copy(t.ray).applyMatrix4($l);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=h.getX(_),M=h.getX(_+1),x=sr(this,t,ps,l,f,M);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=sr(this,t,ps,l,_,m);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=sr(this,t,ps,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=sr(this,t,ps,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function sr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Mr.fromBufferAttribute(o,s),yr.fromBufferAttribute(o,r),e.distanceSqToSegment(Mr,yr,ao,Yl)>n)return;ao.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ao);if(!(l<t.near||l>t.far))return{distance:l,point:Yl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const ql=new D,jl=new D;class t_ extends nh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ql.fromBufferAttribute(e,s),jl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ql.distanceTo(jl);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ih extends Ue{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ta extends Re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new D,h=new Tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(a,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Aa extends Re{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(p,2));function M(){const v=new D,U=new D;let A=0;const T=(e-t)/n;for(let P=0;P<=r;P++){const E=[],y=P/r,L=y*(e-t)+t;for(let $=0;$<=s;$++){const G=$/s,I=G*l+a,z=Math.sin(I),H=Math.cos(I);U.x=L*z,U.y=-y*n+m,U.z=L*H,u.push(U.x,U.y,U.z),v.set(z,T,H).normalize(),d.push(v.x,v.y,v.z),p.push(G,1-y),E.push(g++)}_.push(E)}for(let P=0;P<s;P++)for(let E=0;E<r;E++){const y=_[E][P],L=_[E+1][P],$=_[E+1][P+1],G=_[E][P+1];(t>0||E!==0)&&(h.push(y,L,G),A+=3),(e>0||E!==r-1)&&(h.push(L,$,G),A+=3)}c.addGroup(f,A,0),f+=A}function x(v){const U=g,A=new Tt,T=new D;let P=0;const E=v===!0?t:e,y=v===!0?1:-1;for(let $=1;$<=s;$++)u.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;const L=g;for(let $=0;$<=s;$++){const I=$/s*l+a,z=Math.cos(I),H=Math.sin(I);T.x=E*H,T.y=m*y,T.z=E*z,u.push(T.x,T.y,T.z),d.push(0,y,0),A.x=z*.5+.5,A.y=H*.5*y+.5,p.push(A.x,A.y),g++}for(let $=0;$<s;$++){const G=U+$,I=L+$;v===!0?h.push(I,I+1,G):h.push(I+1,I,G),P+=3}c.addGroup(f,P,v===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Aa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ra extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new D,v=new D,U=new D;for(let A=0;A<e.length;A+=3)p(e[A+0],x),p(e[A+1],v),p(e[A+2],U),l(x,v,U,M)}function l(M,x,v,U){const A=U+1,T=[];for(let P=0;P<=A;P++){T[P]=[];const E=M.clone().lerp(v,P/A),y=x.clone().lerp(v,P/A),L=A-P;for(let $=0;$<=L;$++)$===0&&P===A?T[P][$]=E:T[P][$]=E.clone().lerp(y,$/L)}for(let P=0;P<A;P++)for(let E=0;E<2*(A-P)-1;E++){const y=Math.floor(E/2);E%2===0?(d(T[P][y+1]),d(T[P+1][y]),d(T[P][y])):(d(T[P][y+1]),d(T[P+1][y+1]),d(T[P+1][y]))}}function c(M){const x=new D;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(M),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const M=new D;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const v=m(M)/2/Math.PI+.5,U=f(M)/Math.PI+.5;o.push(v,1-U)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){const x=o[M+0],v=o[M+2],U=o[M+4],A=Math.max(x,v,U),T=Math.min(x,v,U);A>.9&&T<.1&&(x<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),U<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,x){const v=M*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const M=new D,x=new D,v=new D,U=new D,A=new Tt,T=new Tt,P=new Tt;for(let E=0,y=0;E<r.length;E+=9,y+=6){M.set(r[E+0],r[E+1],r[E+2]),x.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),A.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),U.copy(M).add(x).add(v).divideScalar(3);const L=m(U);_(A,y+0,M,L),_(T,y+2,x,L),_(P,y+4,v,L)}}function _(M,x,v,U){U<0&&M.x===1&&(o[x]=M.x-1),v.x===0&&v.z===0&&(o[x]=U/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.vertices,t.indices,t.radius,t.details)}}const e_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=sh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,p;if(n&&(r=o_(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return As(r,o,e,a,l,p,0),o}};function sh(i,t,e,n,s){let r,o;if(s===__(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Zl(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Zl(r,i[r],i[r+1],o);return o&&Ar(o,o.next)&&(Cs(o),o=o.next),o}function xi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ar(e,e.next)||me(e.prev,e,e.next)===0)){if(Cs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function As(i,t,e,n,s,r,o){if(!i)return;!o&&r&&u_(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?i_(i,n,s,r):n_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Cs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=s_(xi(i),t,e),As(i,t,e,n,s,r,2)):o===2&&r_(i,t,e,n,s,r):As(xi(i),t,e,n,s,r,1);break}}}function n_(i){const t=i.prev,e=i,n=i.next;if(me(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Vi(s,a,r,l,o,c,g.x,g.y)&&me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function i_(i,t,e,n){const s=i.prev,r=i,o=i.next;if(me(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=ra(p,g,t,e,n),M=ra(_,m,t,e,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=f&&v&&v.z<=M;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Vi(a,h,l,u,c,d,x.x,x.y)&&me(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Vi(a,h,l,u,c,d,v.x,v.y)&&me(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Vi(a,h,l,u,c,d,x.x,x.y)&&me(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Vi(a,h,l,u,c,d,v.x,v.y)&&me(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function s_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Ar(s,r)&&rh(s,n,n.next,r)&&Rs(s,r)&&Rs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Cs(n),Cs(n.next),n=i=r),n=n.next}while(n!==i);return xi(n)}function r_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&p_(o,a)){let l=oh(o,a);o=xi(o,o.next),l=xi(l,l.next),As(o,t,e,n,s,r,0),As(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function o_(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=sh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(f_(c));for(s.sort(a_),r=0;r<s.length;r++)e=l_(s[r],e);return e}function a_(i,t){return i.x-t.x}function l_(i,t){const e=c_(i,t);if(!e)return t;const n=oh(e,i);return xi(n,n.next),xi(e,e.next)}function c_(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Vi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Rs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&h_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function h_(i,t){return me(i.prev,i,t.prev)<0&&me(t.next,i,i.next)<0}function u_(i,t,e,n){let s=i;do s.z===0&&(s.z=ra(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,d_(s)}function d_(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function ra(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function f_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Vi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function p_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!m_(i,t)&&(Rs(i,t)&&Rs(t,i)&&g_(i,t)&&(me(i.prev,i,t.prev)||me(i,t.prev,t))||Ar(i,t)&&me(i.prev,i,i.next)>0&&me(t.prev,t,t.next)>0)}function me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ar(i,t){return i.x===t.x&&i.y===t.y}function rh(i,t,e,n){const s=or(me(i,t,e)),r=or(me(i,t,n)),o=or(me(e,n,i)),a=or(me(e,n,t));return!!(s!==r&&o!==a||s===0&&rr(i,e,t)||r===0&&rr(i,n,t)||o===0&&rr(e,i,n)||a===0&&rr(e,t,n))}function rr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function or(i){return i>0?1:i<0?-1:0}function m_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&rh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Rs(i,t){return me(i.prev,i,i.next)<0?me(i,t,i.next)>=0&&me(i,i.prev,t)>=0:me(i,t,i.prev)<0||me(i,i.next,t)<0}function g_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function oh(i,t){const e=new oa(i.i,i.x,i.y),n=new oa(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Zl(i,t,e,n){const s=new oa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Cs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function oa(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function __(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Rr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Rr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Kl(t),Jl(n,t);let o=t.length;e.forEach(Kl);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Jl(n,e[l]);const a=e_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Kl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Jl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ca extends Ra{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ca(t.radius,t.detail)}}class Pa extends Re{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,p=new D,g=new Tt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const M=f+m,x=M,v=M+n+1,U=M+n+2,A=M+1;a.push(x,v,A),a.push(v,U,A)}}this.setIndex(a),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class xe extends ns{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oc,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lo extends xe{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ah extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class v_ extends ah{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const co=new ie,Ql=new D,tc=new D;class x_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ql.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ql),tc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tc),e.updateMatrixWorld(),co.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(co),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(co)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class M_ extends x_{constructor(){super(new Zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class y_ extends ah{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new M_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class S_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ec(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ec();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ec(){return performance.now()}const nc=new ie;class aa{constructor(t,e,n=0,s=1/0){this.ray=new wr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ya,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nc),this}intersectObject(t,e=!0,n=[]){return la(t,this,n,e),n.sort(ic),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)la(t[s],this,n,e);return n.sort(ic),n}}function ic(i,t){return i.distance-t.distance}function la(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)la(r[o],t,e,!0)}}class sc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class b_ extends Mi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);const rc={type:"change"},Da={type:"start"},lh={type:"end"},ar=new wr,oc=new Dn,E_=Math.cos(70*qn.DEG2RAD),be=new D,We=2*Math.PI,ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ho=1e-6;class w_ extends b_{constructor(t,e=null){super(t,e),this.state=ae.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Qn,this._lastTargetPosition=new D,this._quat=new Qn().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sc,this._sphericalDelta=new sc,this._scale=1,this._panOffset=new D,this._rotateStart=new Tt,this._rotateEnd=new Tt,this._rotateDelta=new Tt,this._panStart=new Tt,this._panEnd=new Tt,this._panDelta=new Tt,this._dollyStart=new Tt,this._dollyEnd=new Tt,this._dollyDelta=new Tt,this._dollyDirection=new D,this._mouse=new Tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=A_.bind(this),this._onPointerDown=T_.bind(this),this._onPointerUp=R_.bind(this),this._onContextMenu=N_.bind(this),this._onMouseWheel=D_.bind(this),this._onKeyDown=L_.bind(this),this._onTouchStart=I_.bind(this),this._onTouchMove=U_.bind(this),this._onMouseDown=C_.bind(this),this._onMouseMove=P_.bind(this),this._interceptControlDown=F_.bind(this),this._interceptControlUp=O_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rc),this.update(),this.state=ae.NONE}update(t=null){const e=this.object.position;be.copy(e).sub(this.target),be.applyQuaternion(this._quat),this._spherical.setFromVector3(be),this.autoRotate&&this.state===ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=We:n>Math.PI&&(n-=We),s<-Math.PI?s+=We:s>Math.PI&&(s-=We),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(be.setFromSpherical(this._spherical),be.applyQuaternion(this._quatInverse),e.copy(this.target).add(be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=be.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ar.origin.copy(this.object.position),ar.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ar.direction))<E_?this.object.lookAt(this.target):(oc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ar.intersectPlane(oc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ho||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ho||this._lastTargetPosition.distanceToSquared(this.target)>ho?(this.dispatchEvent(rc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?We/60*this.autoRotateSpeed*t:We/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){be.setFromMatrixColumn(e,0),be.multiplyScalar(-t),this._panOffset.add(be)}_panUp(t,e){this.screenSpacePanning===!0?be.setFromMatrixColumn(e,1):(be.setFromMatrixColumn(e,0),be.crossVectors(this.object.up,be)),be.multiplyScalar(t),this._panOffset.add(be)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;be.copy(s).sub(this.target);let r=be.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(We*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-We*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(We*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-We*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Tt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function T_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function A_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function R_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lh),this.state=ae.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function C_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Gi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ae.DOLLY;break;case Gi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}break;case Gi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(Da)}function P_(i){switch(this.state){case ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function D_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ae.NONE||(i.preventDefault(),this.dispatchEvent(Da),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(lh))}function L_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function I_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case zi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ae.TOUCH_ROTATE;break;case zi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ae.TOUCH_PAN;break;default:this.state=ae.NONE}break;case 2:switch(this.touches.TWO){case zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ae.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ae.TOUCH_DOLLY_ROTATE;break;default:this.state=ae.NONE}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(Da)}function U_(i){switch(this._trackPointer(i),this.state){case ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ae.NONE}}function N_(i){this.enabled!==!1&&i.preventDefault()}function F_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function O_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Ps extends kt{constructor(){const t=Ps.SkyShader,e=new Fn({name:t.name,uniforms:$c.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:ze,depthWrite:!1});super(new ti(1,1,1),e),this.isSky=!0}}Ps.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},up:{value:new D(0,1,0)}},vertexShader:`
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

		}`};class k_ extends Ee{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Tt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const ki=new D,ac=new ie,lc=new ie,cc=new D,hc=new D;class B_{constructor(t={}){const e=this;let n,s,r,o;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(g,_){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),ac.copy(_.matrixWorldInverse),lc.multiplyMatrices(_.projectionMatrix,ac),h(g,g,_),p(g)},this.setSize=function(g,_){n=g,s=_,r=n/2,o=s/2,l.style.width=g+"px",l.style.height=_+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let _=0,m=g.children.length;_<m;_++)c(g.children[_])}function h(g,_,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){ki.setFromMatrixPosition(g.matrixWorld),ki.applyMatrix4(lc);const f=ki.z>=-1&&ki.z<=1&&g.layers.test(m.layers)===!0,M=g.element;M.style.display=f===!0?"":"none",f===!0&&(g.onBeforeRender(e,_,m),M.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(ki.x*r+r)+"px,"+(-ki.y*o+o)+"px)",M.parentNode!==l&&l.appendChild(M),g.onAfterRender(e,_,m));const x={distanceToCameraSquared:u(m,g)};a.objects.set(g,x)}for(let f=0,M=g.children.length;f<M;f++)h(g.children[f],_,m)}function u(g,_){return cc.setFromMatrixPosition(g.matrixWorld),hc.setFromMatrixPosition(_.matrixWorld),cc.distanceToSquared(hc)}function d(g){const _=[];return g.traverseVisible(function(m){m.isCSS2DObject&&_.push(m)}),_}function p(g){const _=d(g).sort(function(f,M){if(f.renderOrder!==M.renderOrder)return M.renderOrder-f.renderOrder;const x=a.objects.get(f).distanceToCameraSquared,v=a.objects.get(M).distanceToCameraSquared;return x-v}),m=_.length;for(let f=0,M=_.length;f<M;f++)_[f].element.style.zIndex=m-f}}}const vs={metro:{label:"Метро",color:"#f2c79e",glyph:"M"},shop:{label:"Магазины и рынки",color:"#4ade80",glyph:"🛒"},bank:{label:"Банки",color:"#60a5fa",glyph:"₸"},food:{label:"Кафе и рестораны",color:"#fb923c",glyph:"☕"},edu:{label:"Школы, сады, вузы",color:"#c084fc",glyph:"🎓"},health:{label:"Здоровье",color:"#f87171",glyph:"✚"},sport:{label:"Спорт",color:"#2dd4bf",glyph:"●"},auto:{label:"Авто",color:"#94a3b8",glyph:"⛽"}};function ch(i,t){return`${i} мин · ${t<1e3?`${Math.round(t/10)*10} м`:`${(t/1e3).toFixed(1).replace(".",",")} км`}`}const Pn=Math.PI/180;function uc(i,t,e){const s=i.getTime()/864e5+24405875e-1-2451545,r=(280.46+.9856474*s)%360,o=(357.528+.9856003*s)%360*Pn,a=(r+1.915*Math.sin(o)+.02*Math.sin(2*o))*Pn,l=(23.439-4e-7*s)*Pn,c=Math.atan2(Math.cos(l)*Math.sin(a),Math.cos(a)),h=Math.asin(Math.sin(l)*Math.sin(a)),p=((18.697374558+24.06570982441908*s)%24*15+e)*Pn-c,g=t*Pn,_=Math.asin(Math.sin(g)*Math.sin(h)+Math.cos(g)*Math.cos(h)*Math.cos(p));return{azimuth:(Math.atan2(-Math.sin(p),Math.tan(h)*Math.cos(g)-Math.sin(g)*Math.cos(p))/Pn+360)%360,altitude:_/Pn}}const z_=5;function dc(i,t){const[e,n,s]=i.split("-").map(Number),r=Math.floor(t),o=Math.round((t-r)*60);return new Date(Date.UTC(e,n-1,s,r-z_,o))}function fc(i){const t=i.azimuth*Pn,e=i.altitude*Pn;return[Math.cos(e)*Math.sin(t),Math.cos(e)*Math.cos(t),Math.sin(e)]}class ln{constructor(){this.pos=[],this.nor=[],this.uv=[]}quad(t,e,n,s,r,o=1){const a=[t,e,n,t,n,s],l=[[0,0],[1,0],[1,1],[0,0],[1,1],[0,1]],c=Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2])*o,h=Math.hypot(s[0]-t[0],s[1]-t[1],s[2]-t[2])*o;a.forEach((u,d)=>{this.pos.push(u[0],u[1],u[2]),this.nor.push(r[0],r[1],r[2]),this.uv.push(l[d][0]*c,l[d][1]*h)})}quadAuto(t,e,n,s,r){const o=e[0]-t[0],a=e[1]-t[1],l=e[2]-t[2],c=n[0]-t[0],h=n[1]-t[1],u=n[2]-t[2],d=a*u-l*h,p=l*c-o*u,g=o*h-a*c;d*r[0]+p*r[1]+g*r[2]>=0?this.quad(t,e,n,s,r):this.quad(s,n,e,t,r)}tri(t,e,n,s,r=1){for(const o of[t,e,n])this.pos.push(o[0],o[1],o[2]),this.nor.push(s[0],s[1],s[2]),this.uv.push(o[0]*r,o[2]*r)}box(t,e,n,s={top:!0,bottom:!0}){const[r,o,a,l]=t,c=-l,h=-o;s.top&&this.quad([r,n,h],[a,n,h],[a,n,c],[r,n,c],[0,1,0]),s.bottom&&this.quad([r,e,c],[a,e,c],[a,e,h],[r,e,h],[0,-1,0]),this.quad([r,e,h],[a,e,h],[a,n,h],[r,n,h],[0,0,1]),this.quad([a,e,c],[r,e,c],[r,n,c],[a,n,c],[0,0,-1]),this.quad([a,e,h],[a,e,c],[a,n,c],[a,n,h],[1,0,0]),this.quad([r,e,c],[r,e,h],[r,n,h],[r,n,c],[-1,0,0])}geometry(){const t=new Re;return t.setAttribute("position",new re(this.pos,3)),t.setAttribute("normal",new re(this.nor,3)),t.setAttribute("uv",new re(this.uv,2)),t.computeBoundingBox(),t.computeBoundingSphere(),t}}function fn(i,t,e,n={}){const s=new ln;for(const r of i)s.box(r,t,e,{top:n.top??!0,bottom:n.bottom??!0});return s.geometry()}function H_(i,t,e,n){const s=new ln;for(const[r,o,a,l,c,h]of i){const u=r-c*n,d=o-h*n,p=a-c*n,g=l-h*n,_=[c,0,-h],m=c*(g-d)-h*(p-u)<0,f=[u,t,-d],M=[p,t,-g],x=[p,e,-g],v=[u,e,-d];m?s.quad(M,f,v,x,_):s.quad(f,M,x,v,_)}return s.geometry()}function uo(i,t,e,n,s){const r=new ln;for(const[o,a,l,c,h,u]of i){const d=Math.min(o,l)-0,p=Math.max(o,l),g=Math.min(a,c),_=Math.max(a,c);let m;if(h!==0){const f=o-h*s,M=o+h*n;m=[Math.min(f,M),g-n,Math.max(f,M),_+n]}else{const f=a-u*s,M=a+u*n;m=[d-n,Math.min(f,M),p+n,Math.max(f,M)]}r.box(m,t,e)}return r.geometry()}function V_(i,t,e,n){const s=new ln,r=new Set,o=.16,a=.32;for(const l of i){const[c,h,u,d]=l;if(!(Math.max(u-c,d-h)<.25))for(const[g,_,m,f,M,x]of t)if(M!==0){const v=M>0?u:c;if(Math.abs(v-g)>.12)continue;const U=Math.max(h,Math.min(_,f)),A=Math.min(d,Math.max(_,f));if(A-U<.2)continue;const T=(U+A)/2,P=`x${Math.round(g*2)}:${Math.round(T*2)}`;if(r.has(P))continue;r.add(P);const E=g,y=g+M*a;s.box([Math.min(E,y),T-o/2,Math.max(E,y),T+o/2],e,n)}else{const v=x>0?d:h;if(Math.abs(v-_)>.12)continue;const U=Math.max(c,Math.min(g,m)),A=Math.min(u,Math.max(g,m));if(A-U<.2)continue;const T=(U+A)/2,P=`y${Math.round(_*2)}:${Math.round(T*2)}`;if(r.has(P))continue;r.add(P);const E=_,y=_+x*a;s.box([T-o/2,Math.min(E,y),T+o/2,Math.max(E,y)],e,n)}}return s.geometry()}function G_(i,t){const e=La(i),n=[];for(const r of Cr(e))for(const o of r)n.push(e[o][0],t,-e[o][1]);const s=new Re;return s.setAttribute("position",new re(n,3)),s.computeVertexNormals(),s}function W_(i,t){const e=[];for(let s=0;s<i.length;s++){const r=i[s],o=i[(s+1)%i.length];e.push(r[0],t,-r[1],o[0],t,-o[1])}const n=new Re;return n.setAttribute("position",new re(e,3)),n}function fo(i,t){const e=[],n=[];for(const{p:r,w:o}of i){const a=o/2;for(let l=0;l<r.length-1;l++){const[c,h]=r[l],[u,d]=r[l+1],p=Math.hypot(u-c,d-h);if(p<.01)continue;const g=-(d-h)/p*a,_=(u-c)/p*a,m=(u-c)/p*a*.5,f=(d-h)/p*a*.5,M=[c-m+g,h-f+_],x=[u+m+g,d+f+_],v=[u+m-g,d+f-_],U=[c-m-g,h-f-_];for(const A of[M,U,v,M,v,x])e.push(A[0],t,-A[1]),n.push(0,1,0)}}const s=new Re;return s.setAttribute("position",new re(e,3)),s.setAttribute("normal",new re(n,3)),s}function lr(i,t){const e=[];for(const s of i){const r=La(s);if(!(r.length<3))for(const o of Cr(r))for(const a of o)e.push(r[a][0],t,-r[a][1])}const n=new Re;return n.setAttribute("position",new re(e,3)),n.computeVertexNormals(),n}function X_(i){const t=new ln;for(const{p:e,h:n}of i){const s=La(e);if(s.length<3)continue;const r=s.map(([l,c])=>new Tt(l,c)),a=Rr.isClockWise(r)?[...s].reverse():s;for(let l=0;l<a.length;l++){const[c,h]=a[l],[u,d]=a[(l+1)%a.length],p=Math.hypot(u-c,d-h);if(p<.01)continue;const g=[(d-h)/p,0,(u-c)/p];t.quad([c,0,-h],[u,0,-d],[u,n,-d],[c,n,-h],g,.25)}for(const[l,c,h]of Cr(a))t.tri([a[l][0],n,-a[l][1]],[a[c][0],n,-a[c][1]],[a[h][0],n,-a[h][1]],[0,1,0],.1)}return t.geometry()}function Cr(i){return Rr.triangulateShape(i.map(([e,n])=>new Tt(e,n)),[]).map(([e,n,s])=>(i[n][0]-i[e][0])*(i[s][1]-i[e][1])-(i[n][1]-i[e][1])*(i[s][0]-i[e][0])>=0?[e,n,s]:[e,s,n])}function La(i){const t=[];for(const e of i){const n=t[t.length-1];(!n||Math.hypot(n[0]-e[0],n[1]-e[1])>.05)&&t.push(e)}if(t.length>2){const e=t[0],n=t[t.length-1];Math.hypot(e[0]-n[0],e[1]-n[1])<.05&&t.pop()}return t}const $_=1.4;class pc{constructor(t,e,n){this.project=t,this.types=e,this.mat=n,this.root=new Be,this.floors=[],this.typeGeo=new Map,this.overlay=null,this.interior=null,this.unitMeshes=new Map,this.hoverFloor=null,this.cutFloor=null,this.walkFloor=null,this.crown=new Be,this.podiumRoof=null,this.podiumParapet=null;const s=t.building;this.slab=s.slab,this.root.name="building",this.root.rotation.y=-qn.degToRad(s.azimuth_deg);for(const r of s.floors)this.addFloor(r);this.addRoofs()}geoFor(t){let e=this.typeGeo.get(t.id);return e||(e={slab:fn(t.slab,0,this.slab),walls:fn(t.walls_ext,0,1,{top:!1,bottom:!1}),glass:H_(t.outline,0,1,.14),fins:t.kind==="podium"||this.project.building.style==="plain"?null:V_(t.walls_ext,t.outline,0,1),band:uo(t.outline,-.02,this.slab+.12,.06,.25)},this.typeGeo.set(t.id,e)),e}addFloor(t){const e=this.types.get(t.type),n=this.geoFor(e),s=new Be;s.name=`floor-${t.n}`;const r=t.height-this.slab,o=new kt(n.slab,this.mat.slab);o.position.y=t.elevation;const a=new kt(n.band,this.mat.band);a.position.y=t.elevation;const l=new kt(n.walls,e.kind==="podium"?this.mat.band:this.mat.stone);l.position.y=t.elevation+this.slab,l.scale.y=r;const c=new kt(n.glass,this.mat.glass);c.position.y=t.elevation+this.slab,c.scale.y=r,c.renderOrder=2;let h=null;n.fins&&(h=new kt(n.fins,this.mat.bronze),h.position.y=t.elevation+this.slab,h.scale.y=r,h.castShadow=!0,s.add(h));for(const m of[o,a,l])m.castShadow=!0,m.receiveShadow=!0;s.add(o,a,l,c);const[u,d,p,g]=e.bbox,_=new kt(new ti(p-u,t.height,g-d),this.mat.pick);_.position.set((u+p)/2,t.elevation+t.height/2,-(d+g)/2),_.userData.floor=t.n,s.add(_),this.root.add(s),this.floors.push({info:t,type:e,group:s,walls:l,glass:c,fins:h,pick:_})}addRoofs(){const t=this.project.building,e=t.floors[t.floors.length-1],n=this.types.get(e.type),s=e.elevation+e.height,r=new kt(fn(n.slab,0,this.slab),this.mat.slab);r.position.y=s;const o=t.style==="plain",a=new kt(uo(n.outline,0,t.crown_height,.08,.35),o?this.mat.stone:this.mat.bronze);a.position.y=s;const l=new kt(new ti(o?6:9,o?2.6:3.2,o?5:7),this.mat.band);l.position.set(0,s+1.6+this.slab,0);for(const u of[r,a,l])u.castShadow=!0,u.receiveShadow=!0;this.crown.add(r,a,l);const c=t.floors.find(u=>u.n===6),h=t.floors.find(u=>u.n===5);if(h&&c&&this.types.get(h.type).kind!=="tower"){const u=this.types.get(h.type),d=new kt(fn(u.slab,0,.15),this.mat.plaza);d.position.y=c.elevation,d.receiveShadow=!0,d.castShadow=!0;const p=new kt(uo(u.outline,0,1.1,.04,.2),this.mat.band);p.position.y=c.elevation,p.castShadow=!0,this.crown.add(d,p),this.podiumRoof=d,this.podiumParapet=p}this.root.add(this.crown)}planToWorld(t,e,n){return this.root.updateMatrixWorld(),this.root.localToWorld(new D(t,n,-e))}worldToPlan(t){this.root.updateMatrixWorld();const e=this.root.worldToLocal(t.clone());return[e.x,-e.z]}floor(t){return this.floors.find(e=>e.info.n===t)}floorCenterWorld(t){const e=this.floor(t),[n,s,r,o]=e.type.kind==="podium"?e.type.bbox:this.towerBox(e.type);return this.planToWorld((n+r)/2,(s+o)/2,e.info.elevation)}towerBox(t){return t.bbox}get slabThickness(){return this.slab}get height(){return this.project.building.height}pickables(){return this.floors.filter(t=>t.group.visible).map(t=>t.pick)}unitPickables(){return[...this.unitMeshes.values()].map(t=>t.fill)}setHoverFloor(t){if(this.hoverFloor!==t){if(this.hoverFloor!==null){const e=this.floor(this.hoverFloor);e&&this.walkFloor!==e.info.n&&(e.glass.material=this.mat.glass)}if(this.hoverFloor=t,t!==null&&this.cutFloor===null&&this.walkFloor===null){const e=this.floor(t);e&&(e.glass.material=this.mat.glassHover)}}}showAll(){this.clearInterior(),this.cutFloor=null,this.walkFloor=null;for(const t of this.floors)t.group.visible=!0,t.walls.material=t.type.kind==="podium"?this.mat.band:this.mat.stone,t.glass.visible=!0,t.glass.material=this.mat.glass,t.fins&&(t.fins.visible=!0);this.crown.visible=!0}setVisibleUpTo(t){for(const n of this.floors)n.group.visible=n.info.n<=t,n.walls.material=n.type.kind==="podium"?this.mat.band:this.mat.stone,n.glass.visible=!0,n.glass.material=this.mat.glass,n.fins&&(n.fins.visible=!0);this.crown.visible=!1;const e=this.project.building.floors.find(n=>n.n===6);this.podiumRoof&&e&&(this.podiumRoof.visible=t>=6,this.podiumParapet.visible=t>=6,t>=6&&(this.crown.visible=!0),this.crown.children.forEach(n=>{n!==this.podiumRoof&&n!==this.podiumParapet&&(n.visible=!1)}))}restoreCrownChildren(){this.crown.children.forEach(t=>t.visible=!0)}cutAt(t,e,n){this.clearInterior(),this.restoreCrownChildren(),this.cutFloor=t,this.walkFloor=null,this.setVisibleUpTo(t);const s=this.floor(t);s.glass.visible=!1,s.fins&&(s.fins.visible=!1);const r=new Be,o=Math.min($_,s.info.height-this.slab),a=s.info.elevation+this.slab,l=new kt(fn(s.type.walls_int,a,a+o,{bottom:!1}),this.mat.wallInt);l.castShadow=!0,l.receiveShadow=!0;const c=new kt(fn(s.type.slab,a,a+.01,{bottom:!1}),this.mat.floorCut);c.receiveShadow=!0,r.add(l,c),this.overlay=new Be;for(const h of e.filter(u=>u.floor===t&&u.polygon)){const u=new Ut(en[h.status]),d=new kt(G_(h.polygon,a+.05),new is({color:u,transparent:!0,opacity:.42,depthWrite:!1}));d.renderOrder=3,d.userData.unitId=h.id;const p=new t_(W_(h.polygon,a+.07),new wa({color:u,transparent:!0,opacity:.95}));p.renderOrder=4,this.overlay.add(d,p),this.unitMeshes.set(h.id,{fill:d,line:p,unit:h})}r.add(this.overlay),this.interior=r,this.root.add(r),this.styleUnits(n,null,null)}updateUnits(t){const e=new Map(t.map(n=>[n.id,n]));for(const n of this.unitMeshes.values())n.unit=e.get(n.unit.id)??n.unit}styleUnits(t,e,n){for(const{fill:s,line:r,unit:o}of this.unitMeshes.values()){const a=Sr(o,t),l=s.material,c=r.material,h=new Ut(en[o.status]),u=o.id===n||o.id===e;l.color.copy(a?h:new Ut("#9aa0a6")),l.opacity=a?o.id===n?.78:o.id===e?.62:.4:.12,c.color.copy(u?new Ut("#ffffff"):a?h:new Ut("#9aa0a6")),c.opacity=a?1:.3,s.visible=!0}}walkIn(t,e){this.clearInterior(),this.restoreCrownChildren(),this.cutFloor=null,this.walkFloor=t,this.setVisibleUpTo(t);const n=this.floor(t);n.glass.material=this.mat.glassInside,n.glass.visible=!0;const s=new Be,r=n.info.elevation+this.slab,o=n.info.elevation+n.info.height,a=new kt(fn(n.type.walls_int,r,o,{top:!1,bottom:!1}),this.mat.wallInt);a.receiveShadow=!0,a.castShadow=!0,n.walls.material=this.mat.wallInt;const l=new kt(fn(n.type.door_heads,r+2.1,o),this.mat.wallInt);l.receiveShadow=!0;const c=new kt(fn(n.type.slab,r,r+.012,{bottom:!1}),this.mat.floorWood);c.receiveShadow=!0;const h=new kt(fn(n.type.slab,o,o+this.slab),this.mat.ceiling);h.castShadow=!0,s.add(a,l,c,h);const u=e.filter(d=>d.floor===t&&d.polygon);for(const d of n.type.rooms)d.area<1.5||d.area>38||u.some(p=>Y_(d.x,d.y,p.polygon))&&s.add(q_(`${d.area.toFixed(1).replace(".",",")} м²`,d.x,d.y,r+.02));this.interior=s,this.root.add(s)}collisionRects(t){const e=this.floor(t),n=[...e.type.walls_int,...e.type.walls_ext];for(const[s,r,o,a,l,c]of e.type.outline)l!==0?n.push([Math.min(s,s-l*.15),Math.min(r,a),Math.max(s,s-l*.15),Math.max(r,a)]):n.push([Math.min(s,o),Math.min(r,r-c*.15),Math.max(s,o),Math.max(r,r-c*.15)]);return n}clearInterior(){this.interior&&(this.root.remove(this.interior),this.interior.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose();const n=e.material;n&&!Array.isArray(n)&&!Object.values(this.mat).includes(n)&&(n.map?.dispose(),n.dispose())})),this.interior=null,this.overlay=null,this.unitMeshes.clear()}}function Y_(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++)e[s][1]>t!=e[r][1]>t&&i<(e[r][0]-e[s][0])*(t-e[s][1])/(e[r][1]-e[s][1]+1e-12)+e[s][0]&&(n=!n);return n}function q_(i,t,e,n){const s=document.createElement("canvas");s.width=256,s.height=96;const r=s.getContext("2d");r.font="600 46px Manrope, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle="rgba(40, 32, 24, 0.55)",r.fillText(i,128,50);const o=new ih(s);o.colorSpace=Oe,o.anisotropy=4;const a=new kt(new Ls(1.4,.525),new is({map:o,transparent:!0,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.position.set(t,n,-e),a.renderOrder=5,a}function j_(i,t,e){const n=new Be;n.name="context";const s=new kt(new Ta(2400,64),t.ground);s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s);const r=i.green.filter(h=>h.k!=="pitch"&&h.k!=="playground"),o=i.green.filter(h=>h.k==="pitch"||h.k==="playground");li(n,lr(r.map(h=>h.p),.02),t.green),li(n,lr(o.map(h=>h.p),.03),t.pitch),li(n,lr(i.water_areas.map(h=>h.p),.04),t.water),li(n,fo(i.water_lines,.05),t.water);const a=new Set(["footway","path","cycleway","steps","pedestrian"]);li(n,fo(i.roads.filter(h=>a.has(h.k??"")),.06),t.path),li(n,fo(i.roads.filter(h=>!a.has(h.k??"")),.08),t.road);const l=lr([hh(e,9)],.1);li(n,l,t.plaza);const c=new kt(X_(i.buildings),t.context);return c.castShadow=!0,c.receiveShadow=!0,n.add(c),n.add(K_(i,t,e)),{group:n,occluders:c}}function li(i,t,e){const n=new kt(t,e);n.receiveShadow=!0,i.add(n)}function hh(i,t){const e=i.reduce((s,r)=>s+r[0],0)/i.length,n=i.reduce((s,r)=>s+r[1],0)/i.length;return i.map(([s,r])=>{const o=Math.hypot(s-e,r-n)||1;return[s+(s-e)/o*t,r+(r-n)/o*t]})}function Z_(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function po(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++)e[s][1]>t!=e[r][1]>t&&i<(e[r][0]-e[s][0])*(t-e[s][1])/(e[r][1]-e[s][1]+1e-12)+e[s][0]&&(n=!n);return n}function mc(i){let t=1/0,e=1/0,n=-1/0,s=-1/0;for(const[r,o]of i)t=Math.min(t,r),e=Math.min(e,o),n=Math.max(n,r),s=Math.max(s,o);return{x0:t,y0:e,x1:n,y1:s}}function K_(i,t,e){const n=Z_(20261104),s=[],r=i.buildings.map(f=>({p:f.p,bb:mc(f.p)})),o=hh(e,6),a=(f,M)=>{if(Math.hypot(f,M)>1300||po(f,M,o))return!0;for(const x of r)if(!(f<x.bb.x0-2||f>x.bb.x1+2||M<x.bb.y0-2||M>x.bb.y1+2)&&po(f,M,x.p))return!0;return!1};for(const f of i.green){if(f.k==="pitch"||f.k==="playground")continue;const M=mc(f.p),x=(M.x1-M.x0)*(M.y1-M.y0),v=Math.min(600,Math.round(x/(f.k==="park"||f.k==="forest"?90:220)));for(let U=0;U<v;U++){const A=M.x0+n()*(M.x1-M.x0),T=M.y0+n()*(M.y1-M.y0);po(A,T,f.p)&&!a(A,T)&&s.push({x:A,y:T,s:.8+n()*.6})}}const l=new Set(["primary","secondary","tertiary","trunk","residential"]);for(const f of i.roads)if(l.has(f.k??""))for(let M=0;M<f.p.length-1;M++){const[x,v]=f.p[M],[U,A]=f.p[M+1],T=Math.hypot(U-x,A-v),P=-(A-v)/(T||1),E=(U-x)/(T||1);for(let y=4;y<T;y+=11)for(const L of[-1,1]){const $=f.w/2+2.5,G=x+(U-x)*y/T+P*$*L,I=v+(A-v)*y/T+E*$*L;a(G,I)||s.push({x:G,y:I,s:.75+n()*.4})}}const c=new Ca(1,1),h=new Aa(.12,.18,1,6),u=new Xl(c,t.treeCrown,s.length),d=new Xl(h,t.treeTrunk,s.length),p=new ie,g=new Qn,_=new Ut;s.forEach((f,M)=>{const x=6*f.s,v=2.4*f.s;p.compose(new D(f.x,x*.62,-f.y),g,new D(v,v*1.15,v)),u.setMatrixAt(M,p),_.setHSL(.24+n()*.05,.32+n()*.12,.34+n()*.1),u.setColorAt(M,_),p.compose(new D(f.x,x*.25,-f.y),g,new D(1,x*.5,1)),d.setMatrixAt(M,p)}),u.castShadow=!0,d.castShadow=!0;const m=new Be;return m.add(u,d),m}function J_(){const i=document.createElement("canvas");i.width=512,i.height=512;const t=i.getContext("2d"),e=64;for(let s=0;s<512;s+=e){let r=-(s/e%3)*120;for(;r<512;){const o=260+(r*7+s*13)%140,a=168+(r*31+s*17)%26;t.fillStyle=`rgb(${a+28}, ${a-14}, ${a-62})`,t.fillRect(r,s,o,e);for(let l=0;l<9;l++){t.strokeStyle=`rgba(90, 60, 30, ${.05+(l*13+r)%7/100})`,t.beginPath();const c=s+6+l*6.5;t.moveTo(r,c),t.bezierCurveTo(r+o/3,c+2,r+2*o/3,c-2,r+o,c),t.stroke()}t.fillStyle="rgba(60, 40, 20, 0.35)",t.fillRect(r,s,2,e),r+=o}t.fillStyle="rgba(60, 40, 20, 0.4)",t.fillRect(0,s,512,2)}const n=new ih(i);return n.wrapS=n.wrapT=_r,n.colorSpace=Oe,n.anisotropy=8,n}function Q_(){const i=J_();return i.repeat.set(.5,.5),{stone:new xe({color:14074790,roughness:.82,metalness:0}),band:new xe({color:13219223,roughness:.7,metalness:.05}),bronze:new xe({color:10251078,roughness:.38,metalness:.65}),slab:new xe({color:12564136,roughness:.9}),glass:new lo({color:4150371,roughness:.05,metalness:.2,transparent:!0,opacity:.78,envMapIntensity:1.4,side:je,depthWrite:!1}),glassHover:new lo({color:14260834,emissive:13141850,emissiveIntensity:.55,roughness:.1,metalness:.1,transparent:!0,opacity:.8,side:je,depthWrite:!1}),glassInside:new lo({color:14674415,roughness:.02,metalness:0,transparent:!0,opacity:.12,side:je,depthWrite:!1}),wallInt:new xe({color:15460062,roughness:.92}),wallCut:new xe({color:2764083,roughness:.85}),floorWood:new xe({map:i,color:16773344,roughness:.55,metalness:0}),floorCut:new xe({color:15328476,roughness:.95}),ceiling:new xe({color:16184560,roughness:.95,side:je}),ground:new xe({color:13222580,roughness:1}),plaza:new xe({color:14275010,roughness:.9}),road:new xe({color:4869458,roughness:.95}),path:new xe({color:13090478,roughness:1}),water:new xe({color:4157318,roughness:.12,metalness:.35}),green:new xe({color:9086570,roughness:1}),pitch:new xe({color:7314026,roughness:1}),context:new xe({color:14867924,roughness:.9}),treeCrown:new xe({color:7311182,roughness:.95,flatShading:!0}),treeTrunk:new xe({color:7033922,roughness:1}),pick:new is({visible:!1})}}class t0{constructor(t,e){this.camera=t,this.dom=e,this.enabled=!1,this.yaw=0,this.pitch=0,this.pos=new D,this.keys=new Set,this.stick=new Tt,this.drag=null,this.resolve=n=>n,this.onKey=n=>{this.enabled&&n.target?.tagName!=="INPUT"&&(n.type==="keydown"?this.keys.add(n.code):this.keys.delete(n.code),(n.code.startsWith("Arrow")||n.code==="Space")&&n.preventDefault())},this.onDown=n=>{this.enabled&&(this.drag={id:n.pointerId,x:n.clientX,y:n.clientY})},this.onMove=n=>{!this.enabled||!this.drag||n.pointerId!==this.drag.id||(this.look(n.clientX-this.drag.x,n.clientY-this.drag.y),this.drag.x=n.clientX,this.drag.y=n.clientY)},this.onUp=n=>{this.drag&&n.pointerId===this.drag.id&&(this.drag=null)},window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onKey),e.addEventListener("pointerdown",this.onDown),window.addEventListener("pointermove",this.onMove),window.addEventListener("pointerup",this.onUp),window.addEventListener("pointercancel",this.onUp)}start(t,e,n){this.enabled=!0,this.pos.copy(t),this.yaw=e,this.pitch=-.04,this.resolve=n,this.keys.clear(),this.stick.set(0,0),this.apply()}stop(){this.enabled=!1,this.keys.clear(),this.drag=null}setStick(t,e){this.stick.set(t,e)}look(t,e){this.yaw-=t*.0042,this.pitch=qn.clamp(this.pitch-e*.0036,-1.25,1.1)}update(t){if(!this.enabled)return;let e=0,n=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(e+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(e-=1),this.keys.has("KeyA")&&(n-=1),this.keys.has("KeyD")&&(n+=1),this.keys.has("ArrowLeft")&&(this.yaw+=1.8*t),this.keys.has("ArrowRight")&&(this.yaw-=1.8*t),e+=-this.stick.y,n+=this.stick.x;const s=Math.hypot(e,n);if(s>1&&(e/=s,n/=s),s>.01){const r=(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")?3.2:1.7)*t,o=new D(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),a=new D(Math.cos(this.yaw),0,-Math.sin(this.yaw)),l=o.multiplyScalar(e*r).add(a.multiplyScalar(n*r)),c=this.resolve(this.pos.clone().add(new D(l.x,0,0)));this.pos.copy(c);const h=this.resolve(this.pos.clone().add(new D(0,0,l.z)));this.pos.copy(h)}this.apply()}apply(){this.camera.position.copy(this.pos),this.camera.rotation.order="YXZ",this.camera.rotation.set(this.pitch,this.yaw,0)}dispose(){window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onKey),this.dom.removeEventListener("pointerdown",this.onDown),window.removeEventListener("pointermove",this.onMove),window.removeEventListener("pointerup",this.onUp),window.removeEventListener("pointercancel",this.onUp)}}function gc(i,t,e,n){for(let s=0;s<3;s++){let r=!1;for(const[o,a,l,c]of n){const h=Math.max(o,Math.min(i,l)),u=Math.max(a,Math.min(t,c)),d=i-h,p=t-u,g=d*d+p*p;if(!(g>=e*e)){if(g>1e-10){const _=Math.sqrt(g);i=h+d/_*e,t=u+p/_*e}else{const _=[[o-e,t,i-o],[l+e,t,l-i],[i,a-e,t-a],[i,c+e,c-t]];_.sort((m,f)=>m[2]-f[2]),i=_[0][0],t=_[0][1]}r=!0}}if(!r)break}return[i,t]}class e0{constructor(t,e,n){this.renderer=t,this.rig=e,this.camera=n,this.supported=!1,this.active=!1,this.controllers=[],this.aiming=new Map,this.target=null,this.floorY=0,this.walkable=()=>!0,this.turnCooldown=0,this.onEnd=()=>{},this.marker=new kt(new Pa(.22,.3,40).rotateX(-Math.PI/2),new is({color:4054167,transparent:!0,opacity:.9,depthTest:!1})),this.marker.visible=!1,this.marker.renderOrder=10;for(let s=0;s<2;s++){const r=t.xr.getController(s),o=new nh(new Re().setFromPoints([new D(0,0,0),new D(0,0,-1)]),new wa({color:16777215,transparent:!0,opacity:.7}));o.scale.z=8,r.add(o),r.addEventListener("selectstart",()=>this.aiming.set(r,!0)),r.addEventListener("selectend",()=>{this.aiming.set(r,!1),this.teleport()}),e.add(r),this.controllers.push(r)}}async checkSupport(){const t=navigator.xr;try{this.supported=!!t&&await t.isSessionSupported("immersive-vr")}catch{this.supported=!1}return this.supported}async enter(t,e,n,s){const r=navigator.xr;if(!r)return;const o=await r.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor"]});this.renderer.xr.setReferenceSpaceType("local-floor"),await this.renderer.xr.setSession(o),this.active=!0,this.floorY=e.y,this.walkable=s,this.rig.position.copy(e),this.rig.rotation.set(0,n,0),this.marker.parent||t.add(this.marker),o.addEventListener("end",()=>{this.active=!1,this.marker.visible=!1,this.rig.position.set(0,0,0),this.rig.rotation.set(0,0,0),this.onEnd()})}update(t){if(!this.active)return;this.target=null;const e=new aa,n=new Dn(new D(0,1,0),-this.floorY);for(const r of this.controllers){if(!this.aiming.get(r))continue;const o=r.matrixWorld;e.ray.origin.setFromMatrixPosition(o),e.ray.direction.set(0,0,-1).transformDirection(o);const a=new D;e.ray.intersectPlane(n,a)&&a.distanceTo(e.ray.origin)<12&&(this.target=a)}if(this.target){const r=this.walkable(this.target);this.marker.visible=!0,this.marker.position.copy(this.target).setY(this.floorY+.02),this.marker.material.color.set(r?4054167:15026253),r||(this.target=null)}else this.marker.visible=!1;this.turnCooldown-=t;const s=this.renderer.xr.getSession();if(s&&this.turnCooldown<=0)for(const r of s.inputSources){const o=r.gamepad?.axes?.[2]??0;if(Math.abs(o)>.7){this.snapTurn(o>0?-Math.PI/6:Math.PI/6),this.turnCooldown=.35;break}}}teleport(){if(!this.target)return;const t=new D;this.camera.getWorldPosition(t),this.rig.position.x+=this.target.x-t.x,this.rig.position.z+=this.target.z-t.z,this.marker.visible=!1}snapTurn(t){const e=new D;this.camera.getWorldPosition(e);const n=this.rig.position.clone().sub(e);n.applyAxisAngle(new D(0,1,0),t),this.rig.position.copy(e).add(n),this.rig.rotation.y+=t}}const n0=["север","северо-восток","восток","юго-восток","юг","юго-запад","запад","северо-запад"],i0=["С","СВ","В","ЮВ","Ю","ЮЗ","З","СЗ"];class s0{constructor(t,e){this.project=t,this.mat=e,this.root=new Be,this.items=[],this.hover=null,this.selected=null,this.ringMat=new xe({color:13867624,emissive:13141850,emissiveIntensity:.9,transparent:!0,opacity:.85}),this.root.name="massing";for(const n of t.building.blocks??[])this.addBlock(n)}addBlock(t){const e=_c(t.footprint),n=t.height,s=t.first_floor,r=new ln,o=new ln,a=new ln,l=new ln,c=new ln;for(let m=0;m<e.length;m++){const f=e[m],M=e[(m+1)%e.length],x=Math.hypot(M[0]-f[0],M[1]-f[1]);if(x<.3)continue;const v=[(M[0]-f[0])/x,(M[1]-f[1])/x],U=[v[1],-v[0]];vc(r,f,v,U,0,x,-.12,0,n);const A=Math.max(2,Math.round(x/1.9));for(let T=0;T<=A;T++){const P=x*T/A,E=T===0||T===A?.7:.48;ms(o,f,v,U,P-E/2,P+E/2,.1,.3,t.retail_ground?s:0,n)}for(let T=2;T<=t.levels;T++){const P=s+(T-2)*t.floor_height;ms(a,f,v,U,-.14,x+.14,.14,.3,P-.12,P+.26)}t.retail_ground&&ms(o,f,v,U,-.2,x+.2,.22,.3,s-.25,s+.35),ms(o,f,v,U,-.16,x+.16,.16,.35,n,n+t.parapet),vc(c,f,v,U,0,x,0,0,n+t.parapet)}for(const[m,f,M]of Cr(e))l.tri([e[m][0],n+.02,-e[m][1]],[e[f][0],n+.02,-e[f][1]],[e[M][0],n+.02,-e[M][1]],[0,1,0],.2),c.tri([e[m][0],n+t.parapet,-e[m][1]],[e[f][0],n+t.parapet,-e[f][1]],[e[M][0],n+t.parapet,-e[M][1]],[0,1,0]);const h=new Be;h.name=`block-${t.id}`;const u=new kt(r.geometry(),this.mat.glass);u.renderOrder=2;const d=new kt(o.geometry(),this.mat.stone),p=new kt(a.geometry(),this.mat.band),g=new kt(l.geometry(),this.mat.slab);for(const m of[d,p,g])m.castShadow=!0,m.receiveShadow=!0;const _=new kt(c.geometry(),this.mat.pick);_.userData.block=t.id,h.add(u,d,p,g,_),this.root.add(h),this.items.push({block:t,group:h,glass:u,pick:_,sides:o0(e),ring:null})}get blocks(){return this.items.map(t=>t.block)}item(t){return this.items.find(e=>e.block.id===t)}pickables(){return this.items.map(t=>t.pick)}occluders(){return this.items.map(t=>t.pick)}setBlockVisible(t,e){const n=this.item(t);n&&(n.group.visible=e)}setHover(t){this.hover!==t&&(this.hover=t,this.restyle())}select(t,e){this.selected=t;for(const s of this.items)s.ring&&(s.group.remove(s.ring),s.ring.geometry.dispose(),s.ring=null);const n=t?this.item(t):void 0;if(n&&e){const s=n.block,r=ca(s,e),o=e===1?s.first_floor:s.floor_height,a=new ln,l=_c(s.footprint);for(let c=0;c<l.length;c++){const h=l[c],u=l[(c+1)%l.length],d=Math.hypot(u[0]-h[0],u[1]-h[1]);if(d<.3)continue;const p=[(u[0]-h[0])/d,(u[1]-h[1])/d],g=[p[1],-p[0]];ms(a,h,p,g,-.3,d+.3,.32,.05,r+.1,r+o-.1)}n.ring=new kt(a.geometry(),this.ringMat),n.ring.renderOrder=3,n.group.add(n.ring)}this.restyle()}restyle(){for(const t of this.items){const e=t.block.id===this.hover||t.block.id===this.selected;t.glass.material=e?this.mat.glassHover:this.mat.glass}}center(t){if(t){const n=this.item(t).block,[s,r]=r0(n.footprint);return new D(s,n.height/2,-r)}const e=this.project.building.center??[0,0];return new D(e[0],14,-e[1])}viewPoint(t,e,n){const s=this.item(t),r=s.sides[Math.min(n,s.sides.length-1)],o=ca(s.block,e)+1.55,a=new D(r.mid[0]+r.normal[0]*.45,o,-(r.mid[1]+r.normal[1]*.45)),l=Math.atan2(-r.normal[0],r.normal[1]);return{pos:a,yaw:l}}}function ca(i,t){return t<=1?0:i.first_floor+(t-2)*i.floor_height}function _c(i){let t=0;for(let e=0;e<i.length;e++){const[n,s]=i[e],[r,o]=i[(e+1)%i.length];t+=n*o-r*s}return t>=0?i:[...i].reverse()}function r0(i){return[i.reduce((t,e)=>t+e[0],0)/i.length,i.reduce((t,e)=>t+e[1],0)/i.length]}function o0(i){const t=new Map;for(let e=0;e<i.length;e++){const n=i[e],s=i[(e+1)%i.length],r=Math.hypot(s[0]-n[0],s[1]-n[1]);if(r<3)continue;const o=[(s[1]-n[1])/r,-(s[0]-n[0])/r],a=(Math.atan2(o[0],o[1])*180/Math.PI+360)%360,l=Math.round(a/45)%8,c=t.get(l);(!c||c.length<r)&&t.set(l,{name:n0[l],short:i0[l],azimuth:a,mid:[(n[0]+s[0])/2,(n[1]+s[1])/2],normal:o,length:r})}return[...t.values()].sort((e,n)=>n.length-e.length).slice(0,4).sort((e,n)=>e.azimuth-n.azimuth)}function vc(i,t,e,n,s,r,o,a,l){const c=[t[0]+e[0]*s+n[0]*o,t[1]+e[1]*s+n[1]*o],h=[t[0]+e[0]*r+n[0]*o,t[1]+e[1]*r+n[1]*o];i.quadAuto([c[0],a,-c[1]],[h[0],a,-h[1]],[h[0],l,-h[1]],[c[0],l,-c[1]],[n[0],0,-n[1]])}function ms(i,t,e,n,s,r,o,a,l,c){const h=(M,x)=>[t[0]+e[0]*M+n[0]*x,t[1]+e[1]*M+n[1]*x],u=h(s,-a),d=h(r,-a),p=h(r,o),g=h(s,o),_=(M,x)=>[M[0],x,-M[1]],m=[n[0],0,-n[1]],f=[e[0],0,-e[1]];i.quadAuto(_(g,l),_(p,l),_(p,c),_(g,c),m),i.quadAuto(_(d,l),_(u,l),_(u,c),_(d,c),[-m[0],0,-m[2]]),i.quadAuto(_(p,l),_(d,l),_(d,c),_(p,c),f),i.quadAuto(_(u,l),_(g,l),_(g,c),_(u,c),[-f[0],0,-f[2]]),i.quadAuto(_(u,c),_(d,c),_(p,c),_(g,c),[0,1,0]),i.quadAuto(_(g,l),_(p,l),_(d,l),_(u,l),[0,-1,0])}const mo=1.6;class a0{constructor(t,e){this.canvasHost=t,this.events=e,this.scene=new Hl,this.rig=new Be,this.sky=new Ps,this.sun=new y_(16774112,3),this.hemi=new v_(14674421,12102031,.9),this.envRT=null,this.skyScene=new Hl,this.building=null,this.massing=null,this.labels=new B_,this.placeObjs=[],this.lastHoverBlock=null,this.blockViews=new Map,this.openBlockId=null,this.occluders=null,this.mode="building",this.clock=new S_,this.pointer=new Tt,this.pointerScreen={x:0,y:0},this.pointerDirty=!1,this.pointerInside=!1,this.down=null,this.tween=null,this.raycaster=new aa,this.lastHoverFloor=null,this.lastHoverUnit=null,this.walkFloorN=null,this.lat=41.3,this.lon=69.29,this.envTimer=0,this.mobile=matchMedia("(pointer: coarse)").matches,this.onPointerMove=a=>{const l=this.renderer.domElement.getBoundingClientRect();this.pointer.set((a.clientX-l.left)/l.width*2-1,-((a.clientY-l.top)/l.height)*2+1),this.pointerScreen={x:a.clientX-l.left,y:a.clientY-l.top},this.pointerInside=a.pointerType==="mouse",this.pointerDirty=!0},this.onPointerDown=a=>{this.down={x:a.clientX,y:a.clientY,t:performance.now()}},this.onPointerUp=a=>{if(!this.down)return;const l=Math.hypot(a.clientX-this.down.x,a.clientY-this.down.y),c=performance.now()-this.down.t;if(this.down=null,l>6||c>600||this.mode==="walk"||this.mode==="view")return;if(this.onPointerMove(a),this.massing&&(this.mode==="building"||this.mode==="block")){const u=this.pickBlock();u&&this.events.clickBlock(u);return}const h=this.pick();this.mode==="building"&&h.floor!==null?this.events.clickFloor(h.floor):this.mode==="floor"&&h.unit!==null&&this.events.clickUnit(h.unit)},this.loop=()=>{const a=Math.min(this.clock.getDelta(),.1);if(this.tween){this.tween.t+=a/this.tween.d;const c=this.tween.t>=1?1:1-Math.pow(1-this.tween.t,3);this.camera.position.lerpVectors(this.tween.from[0],this.tween.to[0],c),this.controls.target.lerpVectors(this.tween.from[1],this.tween.to[1],c),this.tween.t>=1&&(this.tween=null)}this.xr.active?this.xr.update(a):this.mode==="walk"||this.mode==="view"?this.walk.update(a):this.controls.update(),this.xr.active||this.processHover();const l=this.mode==="walk"&&this.walkFloorN!==null&&this.building?this.building.floorCenterWorld(this.walkFloorN):this.controls.target;this.sun.target.position.set(l.x,this.mode==="building"?0:l.y,l.z),this.sun.position.copy(this.sun.target.position).addScaledVector(this.sunDir,650),this.renderer.render(this.scene,this.camera),this.labels.domElement.style.display=this.mode==="walk"?"none":"",this.mode!=="walk"&&this.labels.render(this.scene,this.camera)},this.sunDir=new D(.3,.8,.5).normalize(),this.resize=()=>{const a=this.canvasHost.clientWidth,l=this.canvasHost.clientHeight;this.renderer.setSize(a,l),this.labels.setSize(a,l),this.camera.aspect=a/l,this.applyViewShift()},this.renderer=new Kg({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.mobile?1.6:2)),this.renderer.outputColorSpace=Oe,this.renderer.toneMapping=Tc,this.renderer.toneMappingExposure=.92,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ec,this.renderer.xr.enabled=!0,t.appendChild(this.renderer.domElement),this.labels.domElement.className="labels-layer",t.appendChild(this.labels.domElement),this.renderer.domElement.style.touchAction="none",this.camera=new tn(38,1,.1,6e3),this.rig.add(this.camera),this.scene.add(this.rig),this.mat=Q_(),this.sky.scale.setScalar(1e4);const n=this.sky.material.uniforms;n.turbidity.value=5.5,n.rayleigh.value=1.1,n.mieCoefficient.value=.004,n.mieDirectionalG.value=.82,this.scene.add(this.sky);const s=new Ps;s.scale.setScalar(1e3),Object.assign(s.material.uniforms.turbidity,{value:5.5}),Object.assign(s.material.uniforms.rayleigh,{value:1.1}),Object.assign(s.material.uniforms.mieCoefficient,{value:.004}),this.skyScene.add(s),this.pmrem=new ia(this.renderer),this.sun.castShadow=!0;const r=this.sun.shadow;r.mapSize.set(this.mobile?2048:4096,this.mobile?2048:4096),r.camera.left=-190,r.camera.right=190,r.camera.top=190,r.camera.bottom=-190,r.camera.near=10,r.camera.far=1400,r.bias=-3e-4,r.normalBias=.25,r.camera.updateProjectionMatrix(),this.scene.add(this.sun,this.sun.target,this.hemi),this.scene.fog=new Ea(14212578,900,3200),this.controls=new w_(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=qn.degToRad(86),this.controls.minDistance=12,this.controls.maxDistance=900,this.controls.autoRotateSpeed=.35,this.controls.addEventListener("start",()=>{this.controls.autoRotate=!1,this.tween=null,this.events.interacted()}),this.walk=new t0(this.camera,this.renderer.domElement),this.xr=new e0(this.renderer,this.rig,this.camera),this.xr.onEnd=()=>{this.camera.position.copy(this.walk.pos),this.events.xrEnded()};const o=this.renderer.domElement;o.addEventListener("pointermove",this.onPointerMove),o.addEventListener("pointerdown",this.onPointerDown),o.addEventListener("pointerup",this.onPointerUp),o.addEventListener("pointerleave",()=>{this.pointerInside=!1,this.pointerDirty=!0}),window.addEventListener("resize",this.resize),this.resize(),this.renderer.setAnimationLoop(this.loop)}load(t,e,n){this.lat=t.location.lat,this.lon=t.location.lon;const s=t.building.palette;s?.stone&&this.mat.stone.color.set(s.stone),s?.band&&this.mat.band.color.set(s.band),s?.glass&&this.mat.glass.color.set(s.glass);let r;if(t.building.mode==="massing")this.massing=new s0(t,this.mat),this.scene.add(this.massing.root),r=l0(this.massing.blocks.flatMap(l=>l.footprint));else{this.building=new pc(t,n,this.mat),this.scene.add(this.building.root);const l=n.get(t.building.floors[0].type).bbox,c=t.building.azimuth_deg;r=[[l[0],l[1]],[l[2],l[1]],[l[2],l[3]],[l[0],l[3]]].map(([h,u])=>gr(h,u,c))}const{group:o,occluders:a}=j_(e,this.mat,r);this.occluders=a,this.scene.add(o),this.buildPlaces(e.places??[]),this.flyToBuilding(!0),this.controls.autoRotate=!0}setSun(t,e){const n=uc(dc(t,e),this.lat,this.lon),[s,r,o]=fc(n),a=new D(s,o,-r).normalize(),l=qn.smoothstep(n.altitude,-4,8);this.sunDir.copy(a),this.sun.intensity=3.6*qn.smoothstep(n.altitude,-1,12),this.sun.color.setHSL(.09,.6,.62+.3*qn.smoothstep(n.altitude,0,35)),this.hemi.intensity=.12+.38*l,this.scene.environmentIntensity=.18+.32*l;const c=n.altitude<-3?new D(s,-.06,-r).normalize():a;this.sky.material.uniforms.sunPosition.value.copy(c),this.skyScene.children[0].material.uniforms.sunPosition.value.copy(c),this.renderer.toneMappingExposure=.5+.32*l,this.scene.fog.color.setHSL(.58,.15,.25+.6*l),clearTimeout(this.envTimer),this.envTimer=window.setTimeout(()=>this.updateEnv(),120)}updateEnv(){const t=this.pmrem.fromScene(this.skyScene,0,.1,2e3);this.envRT?.dispose(),this.envRT=t,this.scene.environment=t.texture}sunMinutes(t,e,n,s){if(!this.building||!this.occluders||!t.length)return 0;const r=new Map;for(const a of t){const l=Math.round(a.azimuth/10);(!r.has(l)||r.get(l).length<a.length)&&r.set(l,a)}const o=[...r.values()].map(a=>{const l=this.building.planToWorld(a.mid[0]+a.normal[0]*.6,a.mid[1]+a.normal[1]*.6,e+1.4),[c,h]=gr(a.normal[0],a.normal[1],s);return{p:l,e:c,n:h}});return this.sunMinutesFor(o,n)}sunMinutesFor(t,e){if(!this.occluders)return 0;const n=[this.occluders,...this.massing?.occluders()??[]],s=new aa;s.far=700;let r=0;const o=10;for(let a=4*60;a<=21*60;a+=o){const l=uc(dc(e,a/60),this.lat,this.lon);if(l.altitude<2)continue;const[c,h,u]=fc(l),d=Math.hypot(c,h),p=new D(c,u,-h).normalize();let g=!1;for(const _ of t)if(!((_.e*c+_.n*h)/(d||1)<.12)&&(s.set(_.p,p),s.intersectObjects(n,!1).length===0)){g=!0;break}g&&(r+=o)}return r}get currentMode(){return this.mode}flyToBuilding(t=!1){if(this.massing){this.leaveWalk(),this.closeBlockBuilding(),this.mode="building",this.setShadowRange("building"),this.applyViewShift(),this.massing.select(null,null);const o=this.massing.center(),a=this.canvasHost.clientWidth<this.canvasHost.clientHeight,l=Math.max(...this.massing.blocks.flatMap(u=>u.footprint.map(([d,p])=>Math.hypot(d-o.x,-p-o.z)))),c=(a?1.6:1)*Math.max(l*3.2,430),h=o.clone().add(new D(.38*c,.62*c,.72*c));this.moveCamera(h,o,t?0:1.1),this.controls.minDistance=25;return}if(!this.building)return;this.leaveWalk(),this.mode="building",this.setShadowRange("building"),this.applyViewShift(),this.building.showAll();const e=this.building.height,n=this.canvasHost.clientWidth<this.canvasHost.clientHeight,s=new D(0,e*(n?.5:.36),0),r=new D(95,e*1,245);n&&r.multiplyScalar(1.75).setY(e*1.15),this.moveCamera(r,s,t?0:1.1),this.controls.minDistance=30}showFloor(t,e,n){if(!this.building)return;const s=this.mode;this.leaveWalk(),this.mode="floor",this.setShadowRange("floor"),this.applyViewShift(),this.controls.autoRotate=!1,this.building.cutAt(t,e,n);const r=this.building.floorCenterWorld(t),o=this.building.floor(t),a=Math.max(o.type.bbox[2]-o.type.bbox[0],o.type.bbox[3]-o.type.bbox[1]),l=this.camera.position.clone().sub(this.controls.target).setY(0);(l.lengthSq()<.001||s==="walk")&&l.set(.36,0,.93),l.normalize();const c=qn.degToRad(38),h=2*Math.atan(Math.tan(c/2)*this.camera.aspect),u=a*.62/Math.tan(Math.min(c,h)/2),d=Math.max(a*2.2,u),p=r.clone().add(l.multiplyScalar(d*.5)).setY(r.y+d*.87);this.moveCamera(p,r,.9),this.controls.minDistance=12}updateUnits(t,e,n,s){this.building?.updateUnits(t),this.building?.styleUnits(e,n,s)}styleUnits(t,e,n){this.building?.styleUnits(t,e,n)}enterWalk(t,e,n){if(!this.building||!t.polygon)return;const s=this.building.floor(t.floor);this.mode="walk",this.setShadowRange("walk"),this.applyViewShift(),this.walkFloorN=t.floor,this.controls.enabled=!1,this.controls.autoRotate=!1,this.tween=null,this.building.walkIn(t.floor,e);const r=this.building.collisionRects(t.floor),o=s.info.elevation+this.building.slabThickness,a=this.startPoint(t,s.type,r),l=this.building.planToWorld(a[0],a[1],o+mo),c=this.bestYaw(a,r,n,o+mo),h=this.building,u=o+mo;this.walk.start(l,c,d=>{const[p,g]=h.worldToPlan(d),[_,m]=gc(p,g,.24,r);return h.planToWorld(_,m,u)}),this.camera.near=.05,this.camera.fov=this.mobile?72:66,this.camera.updateProjectionMatrix()}bestYaw(t,e,n,s){let r=-1/0,o=[0,1];for(let c=0;c<24;c++){const h=c/24*Math.PI*2,u=Math.cos(h),d=Math.sin(h);let p=15;for(const[m,f,M,x]of e){const v=(m-t[0])/(u||1e-9),U=(M-t[0])/(u||1e-9),A=(f-t[1])/(d||1e-9),T=(x-t[1])/(d||1e-9),P=Math.max(Math.min(v,U),Math.min(A,T));Math.min(Math.max(v,U),Math.max(A,T))>=Math.max(P,0)&&P<p&&(p=Math.max(P,0))}const g=n.some(m=>m.normal[0]*u+m.normal[1]*d>.7)?2.5:0,_=Math.min(p,9)+g;_>r&&(r=_,o=[u,d])}const a=this.building.planToWorld(t[0],t[1],s),l=this.building.planToWorld(t[0]+o[0],t[1]+o[1],s);return Math.atan2(-(l.x-a.x),-(l.z-a.z))}startPoint(t,e,n){const s=t.polygon,r=(p,g)=>{let _=!1;for(let m=0,f=s.length-1;m<s.length;f=m++)s[m][1]>g!=s[f][1]>g&&p<(s[f][0]-s[m][0])*(g-s[m][1])/(s[f][1]-s[m][1]+1e-12)+s[m][0]&&(_=!_);return _};let o=1/0,a=1/0,l=-1/0,c=-1/0;for(const[p,g]of s)o=Math.min(o,p),a=Math.min(a,g),l=Math.max(l,p),c=Math.max(c,g);const h=n.filter(([p,g,_,m])=>_>o-3&&p<l+3&&m>a-3&&g<c+3);let u=[(o+l)/2,(a+c)/2],d=-1;for(let p=o+.3;p<l;p+=.3)for(let g=a+.3;g<c;g+=.3){if(!r(p,g))continue;let _=1/0;for(const[m,f,M,x]of h){const v=Math.max(m-p,0,p-M),U=Math.max(f-g,0,g-x);if(_=Math.min(_,Math.hypot(v,U)),_<=d)break}_>d&&(d=_,u=[p,g])}return u}selectBlock(t,e){if(!this.massing)return;const n=this.mode==="view"||this.mode==="floor"||this.mode==="walk";this.leaveWalk(),this.closeBlockBuilding(),this.mode="block",this.setShadowRange("building"),this.applyViewShift(),this.controls.autoRotate=!1,this.massing.select(t,e);const s=this.massing.center(t),r=this.massing.item(t).block,o=this.camera.position.clone().sub(this.controls.target).setY(0);(o.lengthSq()<.001||n)&&o.set(.5,0,.86),o.normalize();const a=Math.max(70,r.height*2.4),l=s.clone().add(o.multiplyScalar(a)).setY(s.y+a*.55);this.moveCamera(l,s,.9)}openBlockFloor(t,e,n,s){if(this.massing){if(this.openBlockId!==t.id){this.closeBlockBuilding();let r=this.blockViews.get(t.id);if(!r){const o={building:{mode:"plans",style:"plain",azimuth_deg:t.azimuth_deg,slab:t.slab,crown_height:t.crown_height,height:t.height,floors:t.floors,assumed:[]}};r=new pc(o,new Map(Object.entries(t.floor_types)),this.mat),r.root.position.set(t.origin[0],0,-t.origin[1]),this.blockViews.set(t.id,r)}this.scene.add(r.root),this.massing.setBlockVisible(t.id,!1),this.building=r,this.openBlockId=t.id}this.showFloor(e,n,s)}}closeBlockBuilding(){if(!this.openBlockId||!this.massing)return;const t=this.blockViews.get(this.openBlockId);t&&this.scene.remove(t.root),this.massing.setBlockVisible(this.openBlockId,!0),this.openBlockId=null,this.building=null}setBlockFloor(t,e){this.massing?.select(t,e)}blockSides(t){return this.massing?.item(t)?.sides??[]}showView(t,e,n){if(!this.massing)return;const{pos:s,yaw:r}=this.massing.viewPoint(t,e,n);this.mode="view",this.setShadowRange("building"),this.applyViewShift(),this.controls.enabled=!1,this.controls.autoRotate=!1,this.tween=null,this.walk.start(s,r,()=>s.clone()),this.camera.near=.3,this.camera.fov=this.mobile?70:62,this.camera.updateProjectionMatrix()}blockSunMinutes(t,e,n){if(!this.massing)return[];const s=this.massing.item(t),r=ca(s.block,e)+1.4;return s.sides.map(o=>{const a=new D(o.mid[0]+o.normal[0]*.7,r,-(o.mid[1]+o.normal[1]*.7));return this.sunMinutesFor([{p:a,e:o.normal[0],n:o.normal[1]}],n)})}buildPlaces(t){for(const e of t){const n=document.createElement("div"),s=vs[e.category];if(n.className=`pin${e.known?" known":""} cat-${e.category}`,n.style.setProperty("--c",s.color),n.innerHTML=`<i>${s.glyph}</i><b></b><span>${ch(e.walk_min,e.dist)}</span>`,n.querySelector("b").textContent=e.name,e.logo){const o=document.createElement("img");o.alt="",o.decoding="async",o.src=ha(e.logo),o.onload=()=>{const a=document.createElement("i");a.className="lg",a.appendChild(o),n.querySelector("i").replaceWith(a),n.classList.add("has-logo")}}const r=new k_(n);r.position.set(e.x,e.category==="metro"?4:10,-e.y),r.center.set(.5,1),this.scene.add(r),this.placeObjs.push({obj:r,place:e})}}flyToPlaces(){const t=this.placeObjs.filter(c=>c.obj.visible);if(!t.length||this.mode==="view"||this.mode==="walk")return;const e=this.massing?this.massing.center():this.controls.target.clone(),n=t.filter(c=>c.place.dist<=700),s=(n.length?n:t).map(c=>new D(c.place.x,0,-c.place.y)).concat([e.clone().setY(0)]),r=s.reduce((c,h)=>c.add(h),new D).multiplyScalar(1/s.length),o=Math.max(...s.map(c=>c.distanceTo(r)),200),a=this.canvasHost.clientWidth<this.canvasHost.clientHeight,l=o*(a?3.4:2.3);this.controls.autoRotate=!1,this.moveCamera(r.clone().add(new D(.18*l,1*l,.42*l)),r.clone(),1.2)}setPlaceFilter(t,e,n){for(const{obj:s,place:r}of this.placeObjs)s.visible=n&&t.includes(r.category)&&(e||r.known)}setStick(t,e){this.walk.setStick(t,e)}leaveWalk(){this.mode!=="walk"&&this.mode!=="view"||(this.walk.stop(),this.walkFloorN=null,this.controls.enabled=!0,this.camera.near=.1,this.camera.fov=38,this.camera.rotation.order="XYZ",this.camera.updateProjectionMatrix())}async enterVR(t){if(!this.building||this.mode!=="walk")return;const e=this.building.floor(t),n=e.info.elevation+this.building.slabThickness,s=this.building.collisionRects(t),r=this.building,o=this.walk.pos.clone().setY(n);this.walk.stop(),this.camera.position.set(0,0,0),this.camera.rotation.set(0,0,0),await this.xr.enter(this.scene,o,this.walk.yaw,a=>{const[l,c]=r.worldToPlan(a);if(!e.type.slab.some(([p,g,_,m])=>l>p&&l<_&&c>g&&c<m))return!1;const[u,d]=gc(l,c,.2,s);return Math.hypot(u-l,d-c)<.01})}setShadowRange(t){const e=t==="walk"?22:t==="floor"?70:190,n=this.sun.shadow;n.camera.left=-e,n.camera.right=e,n.camera.top=e,n.camera.bottom=-e,n.normalBias=t==="walk"?.02:t==="floor"?.08:.25,n.bias=t==="walk"?-1e-4:-3e-4,n.camera.updateProjectionMatrix()}moveCamera(t,e,n){if(n<=0){this.camera.position.copy(t),this.controls.target.copy(e),this.controls.update();return}this.tween={from:[this.camera.position.clone(),this.controls.target.clone()],to:[t.clone(),e.clone()],t:0,d:n}}pickBlock(){if(!this.massing)return null;this.raycaster.setFromCamera(this.pointer,this.camera);const t=this.raycaster.intersectObjects(this.massing.pickables(),!1);return t.length?t[0].object.userData.block:null}pick(){if(!this.building)return{floor:null,unit:null};if(this.raycaster.setFromCamera(this.pointer,this.camera),this.mode==="building"){const t=this.raycaster.intersectObjects(this.building.pickables(),!1);return{floor:t.length?t[0].object.userData.floor:null,unit:null}}if(this.mode==="floor"){const t=this.raycaster.intersectObjects(this.building.unitPickables(),!1);return{floor:null,unit:t.length?t[0].object.userData.unitId:null}}return{floor:null,unit:null}}processHover(){if(!this.pointerDirty)return;if(this.pointerDirty=!1,this.massing&&(this.mode==="building"||this.mode==="block")){const e=this.pointerInside?this.pickBlock():null;e!==this.lastHoverBlock&&(this.lastHoverBlock=e,this.massing.setHover(e),this.renderer.domElement.style.cursor=e?"pointer":""),this.events.hoverBlock(e,this.pointerScreen.x,this.pointerScreen.y);return}const t=this.pointerInside?this.pick():{floor:null,unit:null};t.floor!==this.lastHoverFloor&&(this.lastHoverFloor=t.floor,this.building?.setHoverFloor(t.floor),this.renderer.domElement.style.cursor=t.floor!==null?"pointer":""),this.mode==="building"&&this.events.hoverFloor(t.floor,this.pointerScreen.x,this.pointerScreen.y),t.unit!==this.lastHoverUnit&&(this.lastHoverUnit=t.unit,this.renderer.domElement.style.cursor=t.unit!==null?"pointer":""),this.mode==="floor"&&this.events.hoverUnit(t.unit,this.pointerScreen.x,this.pointerScreen.y)}hoverFloorFromUI(t){this.mode==="building"&&this.building?.setHoverFloor(t)}applyViewShift(){const t=this.canvasHost.clientWidth,e=this.canvasHost.clientHeight,n=t<760?this.mode==="floor"?.2:this.mode==="building"?.08:0:0;n>0?this.camera.setViewOffset(t,e,0,e*n,t,e):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix()}dispose(){this.renderer.setAnimationLoop(null),window.removeEventListener("resize",this.resize),this.walk.dispose(),this.controls.dispose(),this.renderer.dispose()}}function l0(i){const t=[...i].sort((r,o)=>r[0]-o[0]||r[1]-o[1]);if(t.length<3)return t;const e=(r,o,a)=>(o[0]-r[0])*(a[1]-r[1])-(o[1]-r[1])*(a[0]-r[0]),n=[];for(const r of t){for(;n.length>=2&&e(n[n.length-2],n[n.length-1],r)<=0;)n.pop();n.push(r)}const s=[];for(const r of[...t].reverse()){for(;s.length>=2&&e(s[s.length-2],s[s.length-1],r)<=0;)s.pop();s.push(r)}return n.slice(0,-1).concat(s.slice(0,-1))}const c0={key:0,class:"sw"},h0=["value"],u0=["value"],d0=He({__name:"ProjectSwitch",props:{current:{}},setup(i){function t(e){const n=new URL(location.href);n.searchParams.set("p",e),location.href=n.toString()}return(e,n)=>k(Ct).projects.value.length>1?(j(),et("label",c0,[R("select",{value:e.current,"aria-label":"Жилой комплекс",onChange:n[0]||(n[0]=s=>t(s.target.value))},[(j(!0),et($t,null,Se(k(Ct).projects.value,s=>(j(),et("option",{key:s.slug,value:s.slug},"ЖК "+tt(s.name)+" · "+tt(s.developer),9,u0))),128))],40,h0)])):Zt("",!0)}}),f0=Ve(d0,[["__scopeId","data-v-d0afc9c0"]]),p0={class:"top"},m0={class:"brand glass"},g0={class:"titles"},_0={class:"name"},v0={class:"dev"},x0={class:"addr"},M0=["title"],y0={class:"actions"},S0=He({__name:"TopBar",props:{project:{},mode:{}},emits:["back","data"],setup(i){return(t,e)=>(j(),et("header",p0,[R("div",m0,[e[3]||(e[3]=R("div",{class:"mark","aria-hidden":"true"},[R("span"),R("span"),R("span")],-1)),R("div",g0,[R("div",_0,[Gt("ЖК "+tt(t.project.name)+" ",1),R("span",v0,"· "+tt(t.project.developer.brand),1)]),R("div",x0,tt(t.project.address.replace("Ташкент, ","")),1)]),e[4]||(e[4]=R("div",{class:"sep"},null,-1)),R("div",{class:"gov",title:`Госреестр строек, объект ${t.project.gov_registry.object_id}, данные на ${k(gi)(t.project.gov_registry.observed_at)}`},[e[2]||(e[2]=R("span",{class:"pulse"},null,-1)),R("span",null,tt(t.project.gov_registry.status_ru)+tt(t.project.gov_registry.deadline?` · срок ${k(gi)(t.project.gov_registry.deadline)}`:" · госреестр"),1)],8,M0)]),R("div",y0,[pi(f0,{current:t.project.slug},null,8,["current"]),t.mode!=="building"?(j(),et("button",{key:0,class:"btn glass-btn",onClick:e[0]||(e[0]=n=>t.$emit("back"))},e[5]||(e[5]=[R("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none"},[R("path",{d:"M4 21V9l8-6 8 6v12h-5v-7H9v7H4z",stroke:"currentColor","stroke-width":"1.8","stroke-linejoin":"round"})],-1),R("span",{class:"lbl"},"Весь дом",-1)]))):Zt("",!0),R("button",{class:"btn glass-btn",onClick:e[1]||(e[1]=n=>t.$emit("data"))},e[6]||(e[6]=[R("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none"},[R("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor","stroke-width":"1.8"}),R("path",{d:"M12 11v6M12 7.5v.5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1),R("span",{class:"lbl"},"О данных",-1)]))])]))}}),b0=Ve(S0,[["__scopeId","data-v-88ec8d23"]]),E0={class:"rail glass","aria-label":"Этажи"},w0={class:"list scroll-thin"},T0=["onClick","onMouseenter"],A0={class:"n num"},R0={key:0,class:"dots"},C0={key:1,class:"tag"},P0={class:"legend"},D0=He({__name:"FloorRail",props:{floors:{},current:{},count:{}},emits:["select","hover"],setup(i){return(t,e)=>(j(),et("nav",E0,[e[4]||(e[4]=R("div",{class:"head eyebrow"},"Этажи",-1)),R("ul",w0,[(j(!0),et($t,null,Se(t.floors,n=>(j(),et("li",{key:n.n,class:xn({active:n.n===t.current,dim:n.residential&&n.matching===0}),onClick:s=>t.$emit("select",n.n),onMouseenter:s=>t.$emit("hover",n.n),onMouseleave:e[0]||(e[0]=s=>t.$emit("hover",null))},[R("span",A0,tt(n.n),1),n.residential?(j(),et("span",R0,[(j(!0),et($t,null,Se(n.statuses,(s,r)=>(j(),et("i",{key:r,style:Ie({background:k(en)[s]})},null,4))),128))])):(j(),et("span",C0,tt(n.n===1&&!k(qe)?"лобби":"коммерция"),1)),n.residential?(j(),et("span",{key:2,class:xn(["free num",{zero:n.available===0}])},tt(n.available||"—"),3)):Zt("",!0)],42,T0))),128))]),R("div",P0,[R("span",null,[R("i",{style:Ie({background:k(en).available})},null,4),e[1]||(e[1]=Gt("в продаже"))]),R("span",null,[R("i",{style:Ie({background:k(en).booked})},null,4),e[2]||(e[2]=Gt("бронь"))]),R("span",null,[R("i",{style:Ie({background:k(en).sold})},null,4),e[3]||(e[3]=Gt("продана"))])])]))}}),L0=Ve(D0,[["__scopeId","data-v-39f7fd30"]]),I0=["viewBox"],U0=["x","y","width","height"],N0=["points"],F0=["points"],O0=["x","y","width","height"],k0=["points"],B0=He({__name:"MiniPlan",props:{unit:{}},setup(i){const t=i,e=Xt(()=>{const n=jn.value.find(p=>p.n===t.unit.floor),s=ua(n.type),r=gn.value.filter(p=>p.floor===t.unit.floor&&p.id!==t.unit.id&&p.polygon),[o,a,l,c]=s.bbox,h=1,u=`${o-h} ${-(c+h)} ${l-o+h*2} ${c-a+h*2}`,d=p=>p.map(([g,_])=>`${g},${-_}`).join(" ");return{vb:u,slab:s.slab,walls:[...s.walls_ext,...s.walls_int],me:d(t.unit.polygon??[]),others:r.map(p=>d(p.polygon))}});return(n,s)=>(j(),et("svg",{class:"mini",viewBox:e.value.vb,preserveAspectRatio:"xMidYMid meet","aria-label":"Положение квартиры на этаже"},[(j(!0),et($t,null,Se(e.value.slab,(r,o)=>(j(),et("rect",{key:"s"+o,x:r[0],y:-r[3],width:r[2]-r[0],height:r[3]-r[1],class:"slab"},null,8,U0))),128)),(j(!0),et($t,null,Se(e.value.others,(r,o)=>(j(),et("polygon",{key:"o"+o,points:r,class:"other"},null,8,N0))),128)),R("polygon",{points:e.value.me,class:"me",style:Ie({fill:k(en)[n.unit.status]})},null,12,F0),(j(!0),et($t,null,Se(e.value.walls,(r,o)=>(j(),et("rect",{key:"w"+o,x:r[0],y:-r[3],width:r[2]-r[0],height:r[3]-r[1],class:"wall"},null,8,O0))),128)),R("polygon",{points:e.value.me,class:"me-line"},null,8,k0)],8,I0))}}),z0=Ve(B0,[["__scopeId","data-v-c07382a7"]]),H0={class:"card"},V0={class:"head"},G0={class:"eyebrow"},W0={class:"num"},X0={key:0,class:"test"},$0={key:1,class:"plan"},Y0=["src","alt"],q0={class:"grid"},j0={class:"num"},Z0={class:"num"},K0={class:"num"},J0={key:2,class:"rooms"},Q0={class:"num"},tv={key:3,class:"views"},ev={class:"muted"},nv={class:"price"},iv={key:0},sv={class:"actions"},rv={key:4,class:"src"},ov={key:5,class:"src"},av={key:6,class:"src"},lv={key:7,class:"src"},cv=He({__name:"UnitCard",props:{unit:{},view:{}},emits:["close","walk","lead"],setup(i){const t=i,e=Xt(()=>jn.value.find(l=>l.n===t.unit.floor)),n=Xt(()=>jn.value.length),s=Xt(()=>Math.round(e.value.elevation+1.5)),r=Xt(()=>t.unit.type_code?Ct.aptTypes.value.get(t.unit.type_code)??null:null),o={"03-21":"21 марта","06-21":"21 июня","12-21":"21 декабря"},a=Xt(()=>o[C.sun.day.slice(5)]??gi(C.sun.day));return(l,c)=>(j(),et("div",H0,[R("div",V0,[R("div",null,[R("div",G0,tt(k(qe)&&k(Me)?`${k(Me).label} · `:"")+"Квартира № "+tt(l.unit.number)+" · "+tt(l.unit.floor)+" этаж",1),R("h2",null,[Gt(tt(k(Sh)(l.unit.rooms))+" · ",1),R("span",W0,tt(k(Ss)(l.unit.area,!0)),1)])]),R("button",{class:"btn ghost icon","aria-label":"Закрыть",onClick:c[0]||(c[0]=h=>l.$emit("close"))},c[3]||(c[3]=[R("svg",{width:"18",height:"18",viewBox:"0 0 24 24"},[R("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1)]))]),R("div",{class:"status",style:Ie({"--c":k(en)[l.unit.status]})},[c[4]||(c[4]=R("i",null,null,-1)),Gt(tt(k(xs)[l.unit.status]),1)],4),l.unit.test?(j(),et("span",X0,"тестовые данные")):Zt("",!0),r.value?(j(),et("figure",$0,[R("img",{src:k(ha)(r.value.image),alt:`Планировка ${r.value.code}`,loading:"lazy"},null,8,Y0),R("figcaption",null,[R("b",null,tt(r.value.title),1),Gt(" · тип "+tt(r.value.code)+" · чертёж из каталога застройщика",1)])])):Zt("",!0),pi(z0,{unit:l.unit},null,8,["unit"]),R("div",q0,[R("div",null,[c[5]||(c[5]=R("span",null,"Этаж",-1)),R("b",j0,tt(l.unit.floor)+" из "+tt(n.value),1)]),R("div",null,[c[6]||(c[6]=R("span",null,"Окна на высоте",-1)),R("b",Z0,"≈ "+tt(s.value)+" м",1)]),R("div",null,[c[7]||(c[7]=R("span",null,"Стороны света",-1)),R("b",null,tt(l.view?.sidesShort.join(", ")||"—"),1)]),R("div",null,[R("span",null,"Солнце, "+tt(a.value),1),R("b",K0,tt(k(C).sunMinutes===null?"считаем…":k(C).sunMinutes?k(Mc)(k(C).sunMinutes):"нет прямого"),1)])]),l.unit.room_list?.length?(j(),et("div",J0,[c[8]||(c[8]=R("div",{class:"eyebrow"},"Помещения",-1)),R("ul",null,[(j(!0),et($t,null,Se(l.unit.room_list,(h,u)=>(j(),et("li",{key:u},[R("span",null,tt(h.name),1),R("b",Q0,tt(k(Ss)(h.area)),1)]))),128))])])):Zt("",!0),l.view?(j(),et("div",tv,[c[9]||(c[9]=R("div",{class:"eyebrow"},"Что видно из окон",-1)),R("ul",null,[R("li",null,[R("b",null,tt(l.view.sides.join(" и ")),1)]),(j(!0),et($t,null,Se(l.view.highlights,h=>(j(),et("li",{key:h},tt(h),1))),128)),R("li",ev,tt(l.view.openness),1)])])):Zt("",!0),R("div",nv,[R("div",null,[c[10]||(c[10]=R("span",{class:"muted"},"Стоимость",-1)),R("b",null,[Gt(tt(l.unit.status==="sold"?"продана":l.unit.status==="unavailable"?"не продаётся":k(bh)(l.unit.price)),1),l.unit.test&&l.unit.price!==null&&(l.unit.status==="available"||l.unit.status==="booked")?(j(),et("em",iv," · тест")):Zt("",!0)])]),R("button",{class:"btn small",onClick:c[1]||(c[1]=h=>l.$emit("lead"))},"Узнать цену")]),R("div",sv,[R("button",{class:"btn primary",onClick:c[2]||(c[2]=h=>l.$emit("walk"))},c[11]||(c[11]=[R("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},[R("circle",{cx:"13",cy:"4",r:"2",fill:"currentColor"}),R("path",{d:"M10 21l2-6 3 3v3M8 12l2-4 4 1 2 4 3 1M12 15l-1-6",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Gt(" Пройти по квартире ")]))]),l.unit.test&&r.value?(j(),et("p",rv,[c[12]||(c[12]=Gt("Планировка и площади комнат — каталог застройщика; расстановка квартир на этаже условная. Статус и цена — тестовая стартовая шахматка")),k(Es)?(j(),et($t,{key:0},[Gt(", дальше их ведёт CRM")],64)):Zt("",!0),c[13]||(c[13]=Gt("."))])):l.unit.test?(j(),et("p",ov,"Тестовые данные для показа возможностей: планировка сгенерирована по реальному контуру корпуса, статус и цена случайные.")):k(Es)?(j(),et("p",av,"Статус и цена — из CRM отдела продаж, обновляются на странице автоматически.")):(j(),et("p",lv,"Статус — каталог застройщика на "+tt(k(gi)(l.unit.observed_at))+". Площадь по каталогу, стены — по плану этажа.",1))]))}}),hv=Ve(cv,[["__scopeId","data-v-e804edd8"]]),uv={class:"eyebrow"},dv={key:0,class:"test-chip"},fv={class:"big num"},pv={class:"bar"},mv=["title"],gv={class:"stats"},_v={class:"num"},vv={key:0,class:"note"},xv={key:1,class:"note"},Mv={class:"floor-sub muted"},yv={key:0,class:"units"},Sv=["onClick","onMouseenter"],bv={class:"no num"},Ev={class:"rm"},wv={class:"ar num"},Tv={class:"st"},Av={key:1,class:"note"},Rv={class:"filters"},Cv={class:"row"},Pv=["onClick"],Dv={class:"switch"},Lv={key:0,class:"found muted"},Iv={class:"num"},Uv=He({__name:"SidePanel",props:{view:{}},emits:["select-unit","walk","lead","back"],setup(i,{emit:t}){const e=t,n=[1,2,3,4,5];function s(l){const c=C.filter.rooms.indexOf(l);c>=0?C.filter.rooms.splice(c,1):C.filter.rooms.push(l)}const r=Xt(()=>C.floor===null?[]:gn.value.filter(l=>l.floor===C.floor).sort((l,c)=>l.number-c.number)),o=Xt(()=>jn.value.find(l=>l.n===C.floor)??null),a=Xt(()=>{const l=o.value;return l?ua(l.type)?.label??Ct.project.value?.floor_types[l.type]?.label??"":""});return(l,c)=>(j(),et("aside",{class:xn(["panel glass scroll-thin",{card:!!k(ke)}])},[k(ke)?(j(),pn(hv,{key:0,unit:k(ke),view:l.view,onClose:c[0]||(c[0]=h=>e("select-unit",null)),onWalk:c[1]||(c[1]=h=>e("walk")),onLead:c[2]||(c[2]=h=>e("lead"))},null,8,["unit","view"])):(j(),et($t,{key:1},[R("div",uv,tt(k(C).floor===null?"Квартиры в доме":`${k(qe)&&k(Me)?k(Me).label+" · ":""}${k(C).floor} этаж`),1),k(yc)?(j(),et("div",dv,tt(k(Ct).aptTypes.value.size?"Тестовые статусы и цены; планировки — из каталога застройщика":"Тестовые данные: планировки, статусы и цены условные"),1)):Zt("",!0),k(C).floor===null?(j(),et($t,{key:1},[R("div",fv,[Gt(tt(k(zn).by.available)+" ",1),R("span",null,tt(k(Eh)(k(zn).by.available,"квартира","квартиры","квартир"))+" в продаже",1)]),R("div",pv,[(j(),et($t,null,Se(["available","booked","sold","unavailable"],h=>R("i",{key:h,style:Ie({flex:k(zn).by[h],background:k(en)[h]}),title:`${k(xs)[h]}: ${k(zn).by[h]}`},null,12,mv)),64))]),R("div",gv,[(j(),et($t,null,Se(["available","booked","sold"],h=>R("div",{key:h},[R("i",{style:Ie({background:k(en)[h]})},null,4),Gt(tt(k(xs)[h])+" ",1),R("b",_v,tt(k(zn).by[h]),1)])),64))]),k(Es)?(j(),et("p",vv,"Всего "+tt(k(zn).total)+" квартир. Статусы ведёт отдел продаж в CRM, страница обновляет их сама.",1)):(j(),et("p",xv,"Всего "+tt(k(zn).total)+" квартир в каталоге застройщика. Статусы на "+tt(k(gi)(k(Ct).observedAt.value))+".",1))],64)):(j(),et($t,{key:2},[R("div",Mv,tt(a.value),1),r.value.length?(j(),et("ul",yv,[(j(!0),et($t,null,Se(r.value,h=>(j(),et("li",{key:h.id,class:xn({off:!k(Sr)(h,k(C).filter),hover:k(C).hoverUnit===h.id}),onClick:u=>e("select-unit",h.id),onMouseenter:u=>k(C).hoverUnit=h.id,onMouseleave:c[3]||(c[3]=u=>k(C).hoverUnit=null)},[R("span",bv,"№ "+tt(h.number),1),R("span",Ev,tt(h.rooms)+"-комн.",1),R("span",wv,tt(k(Ss)(h.area)),1),R("span",Tv,[R("i",{style:Ie({background:k(en)[h.status]})},null,4),Gt(tt(k(xs)[h.status]),1)])],42,Sv))),128))])):(j(),et("p",Av,"На этом этаже квартир нет — коммерческие помещения и лобби. Стены показаны по плану застройщика."))],64)),R("div",Rv,[c[8]||(c[8]=R("div",{class:"eyebrow"},"Комнат",-1)),R("div",Cv,[(j(),et($t,null,Se(n,h=>R("button",{key:h,class:xn(["seg",{on:k(C).filter.rooms.includes(h)}]),onClick:u=>s(h)},tt(h===5?"5+":h),11,Pv)),64))]),R("label",Dv,[mi(R("input",{"onUpdate:modelValue":c[4]||(c[4]=h=>k(C).filter.onlyAvailable=h),type:"checkbox"},null,512),[[go,k(C).filter.onlyAvailable]]),c[5]||(c[5]=R("span",{class:"knob"},null,-1)),c[6]||(c[6]=Gt(" Только в продаже "))]),k(C).filter.rooms.length||k(C).filter.onlyAvailable?(j(),et("div",Lv,[c[7]||(c[7]=Gt(" Подходит: ")),R("b",Iv,tt(k(zn).matching),1)])):Zt("",!0)])],64))],2))}}),Nv=Ve(Uv,[["__scopeId","data-v-8ff6522b"]]),Fv={class:"sun glass"},Ov={class:"days"},kv=["onClick"],Bv={class:"t num"},zv=He({__name:"SunBar",setup(i){const t=new Date().getFullYear(),e=Xt(()=>[{label:"Сегодня",day:s()},{label:"21 марта",day:`${t}-03-21`},{label:"21 июня",day:`${t}-06-21`},{label:"21 дек",day:`${t}-12-21`}]),n=Xt(()=>{const r=Math.floor(C.sun.hour),o=Math.round((C.sun.hour-r)*60);return`${String(r).padStart(2,"0")}:${String(o).padStart(2,"0")}`});function s(){const r=new Date;return`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`}return(r,o)=>(j(),et("div",Fv,[o[1]||(o[1]=R("svg",{class:"ico",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},[R("circle",{cx:"12",cy:"12",r:"4.5",fill:"currentColor"}),R("path",{d:"M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round"})],-1)),R("div",Ov,[(j(!0),et($t,null,Se(e.value,a=>(j(),et("button",{key:a.label,class:xn({on:k(C).sun.day===a.day}),onClick:l=>k(C).sun.day=a.day},tt(a.label),11,kv))),128))]),mi(R("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>k(C).sun.hour=a),type:"range",min:"5",max:"21",step:"0.25","aria-label":"Время суток"},null,512),[[mr,k(C).sun.hour,void 0,{number:!0}]]),R("span",Bv,tt(n.value),1)]))}}),Hv=Ve(zv,[["__scopeId","data-v-1d7ba8d5"]]),Vv={class:"hud"},Gv={class:"info glass"},Wv={key:0,class:"what"},Xv={key:0,class:"keys glass"},$v={key:2,class:"look-hint"},Yv=He({__name:"WalkHud",props:{xrSupported:{type:Boolean}},emits:["exit","vr","stick"],setup(i,{emit:t}){const e=t,n=matchMedia("(pointer: coarse)").matches,s=Ln(),r=Ln({x:0,y:0});let o=null;function a(h){o=h.pointerId,h.target.setPointerCapture(h.pointerId),l(h)}function l(h){if(o!==h.pointerId||!s.value)return;const u=s.value.getBoundingClientRect(),d=u.width/2;let p=(h.clientX-(u.left+d))/d,g=(h.clientY-(u.top+d))/d;const _=Math.hypot(p,g);_>1&&(p/=_,g/=_),r.value={x:p,y:g},e("stick",p,g)}function c(h){o===h.pointerId&&(o=null,r.value={x:0,y:0},e("stick",0,0))}return xc(()=>e("stick",0,0)),(h,u)=>(j(),et("div",Vv,[R("div",Gv,[R("button",{class:"btn small",onClick:u[0]||(u[0]=d=>h.$emit("exit"))},u[2]||(u[2]=[R("svg",{width:"14",height:"14",viewBox:"0 0 24 24"},[R("path",{d:"M15 6l-6 6 6 6",stroke:"currentColor","stroke-width":"2.2",fill:"none","stroke-linecap":"round"})],-1),Gt(" Выйти ")])),k(ke)?(j(),et("div",Wv,[R("b",null,"№ "+tt(k(ke).number),1),Gt(" · "+tt(k(ke).rooms)+"-комн. · "+tt(k(Ss)(k(ke).area)),1)])):Zt("",!0),h.xrSupported?(j(),et("button",{key:1,class:"btn small primary",onClick:u[1]||(u[1]=d=>h.$emit("vr"))},"Войти в VR")):Zt("",!0)]),k(n)?(j(),et("div",{key:1,ref_key:"base",ref:s,class:"stick",onPointerdown:a,onPointermove:l,onPointerup:c,onPointercancel:c},[R("div",{class:"knob",style:Ie({transform:`translate(${r.value.x*34}px, ${r.value.y*34}px)`})},null,4)],544)):(j(),et("div",Xv,u[3]||(u[3]=[mh("<span data-v-3f71aa54><kbd data-v-3f71aa54>W</kbd><kbd data-v-3f71aa54>A</kbd><kbd data-v-3f71aa54>S</kbd><kbd data-v-3f71aa54>D</kbd> ходьба</span><span data-v-3f71aa54><kbd data-v-3f71aa54>Shift</kbd> быстрее</span><span data-v-3f71aa54>мышь — обзор</span><span data-v-3f71aa54><kbd data-v-3f71aa54>Esc</kbd> выйти</span>",4)]))),k(n)?(j(),et("div",$v,"Ведите пальцем по экрану, чтобы осмотреться")):Zt("",!0)]))}}),qv=Ve(Yv,[["__scopeId","data-v-3f71aa54"]]),jv={key:0},Zv={key:1},Kv=He({__name:"HoverTip",setup(i){const t=Xt(()=>C.mode==="building"&&C.hoverFloor!==null?vo.value.find(s=>s.n===C.hoverFloor):null),e=Xt(()=>C.hoverBlock?Ct.project.value?.building.blocks?.find(s=>s.id===C.hoverBlock)??null:null),n=Xt(()=>C.mode==="floor"&&C.unitId!==C.hoverUnit?Th.value:null);return(s,r)=>t.value||n.value||e.value?(j(),et("div",{key:0,class:"tip glass",style:Ie({left:`${k(C).tip.x+16}px`,top:`${k(C).tip.y+16}px`})},[t.value?(j(),et($t,{key:0},[R("b",null,tt(t.value.n)+" этаж",1),t.value.residential?(j(),et("span",jv,"в продаже "+tt(t.value.available)+" из "+tt(t.value.total),1)):(j(),et("span",Zv,tt(t.value.n===1&&!k(qe)?"лобби и коммерция":"коммерция"),1))],64)):e.value?(j(),et($t,{key:1},[R("b",null,tt(e.value.label),1),R("span",null,tt(e.value.levels)+" этажей · "+tt(e.value.address),1)],64)):n.value?(j(),et($t,{key:2},[R("b",null,"№ "+tt(n.value.number)+" · "+tt(n.value.rooms)+"-комн. · "+tt(k(Ss)(n.value.area)),1),R("span",{style:Ie({color:k(en)[n.value.status]})},tt(k(xs)[n.value.status]),5)],64)):Zt("",!0)],4)):Zt("",!0)}}),Jv=Ve(Kv,[["__scopeId","data-v-691f07c4"]]),Qv={class:"sheet glass scroll-thin",role:"dialog","aria-label":"О данных"},tx={class:"head"},ex={key:0,class:"how"},nx={class:"muted"},ix={class:"asm"},sx={class:"disc"},rx={class:"made"},ox=He({__name:"DataSheet",emits:["close"],setup(i){return(t,e)=>(j(),et("div",{class:"veil",onClick:e[1]||(e[1]=_o(n=>t.$emit("close"),["self"]))},[R("div",Qv,[R("div",tx,[e[3]||(e[3]=R("div",null,[R("div",{class:"eyebrow"},"О данных"),R("h2",null,"Как собран этот макет")],-1)),R("button",{class:"btn ghost icon","aria-label":"Закрыть",onClick:e[0]||(e[0]=n=>t.$emit("close"))},e[2]||(e[2]=[R("svg",{width:"18",height:"18",viewBox:"0 0 24 24"},[R("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1)]))]),k(Ct).project.value.about?.length?(j(),et("ol",ex,[(j(!0),et($t,null,Se(k(Ct).project.value.about,n=>(j(),et("li",{key:n.title},[R("b",null,tt(n.title),1),Gt(" — "+tt(n.text),1)]))),128))])):Zt("",!0),e[6]||(e[6]=R("div",{class:"eyebrow"},"Источники",-1)),R("table",null,[(j(!0),et($t,null,Se(k(Ct).project.value.sources,n=>(j(),et("tr",{key:n.what},[R("td",null,tt(n.what),1),R("td",null,[Gt(tt(n.source),1),e[4]||(e[4]=R("br",null,null,-1)),R("span",nx,"на "+tt(k(gi)(n.date)),1)])]))),128))]),e[7]||(e[7]=R("div",{class:"eyebrow"},"Условности демо",-1)),R("ul",ix,[(j(!0),et($t,null,Se(k(Ct).project.value.assumptions,n=>(j(),et("li",{key:n},tt(n),1))),128))]),R("p",sx,tt(k(Ct).project.value.disclaimer)+" "+tt(k(Ct).context.value?.attribution),1),R("div",rx,[pi(gh,{height:16}),e[5]||(e[5]=R("span",null,"3D-модель, шахматка и CRM",-1))])])]))}}),ax=Ve(ox,[["__scopeId","data-v-b441d087"]]),lx={class:"eyebrow"},cx={key:0,class:"err"},hx=["disabled"],ux=He({__name:"LeadDialog",emits:["close"],setup(i){const t=Ln("form"),e=Ln(""),n=Ln("+998 "),s=Ln(""),r=Ln(!1),o=Xt(()=>{const l=ke.value;return l?`${Me.value?`${Me.value.label} · `:""}${l.floor} этаж · квартира № ${l.number}`:""});async function a(){const l=Ct.project.value;if(l){s.value="",r.value=!0;try{await Rn.lead({project:l.slug,unit_id:ke.value?.id??null,name:e.value.trim(),phone:n.value}),t.value="sent"}catch(c){c instanceof Dr&&c.status===422?s.value=c.firstMessage:c instanceof Dr&&(c.status===404||c.status===405)?t.value="demo":s.value=c instanceof Dr&&c.status===429?"Слишком много заявок подряд. Попробуйте через минуту.":"Не удалось отправить. Проверьте интернет и попробуйте ещё раз."}finally{r.value=!1}}}return(l,c)=>(j(),et("div",{class:"veil",onClick:c[4]||(c[4]=_o(h=>l.$emit("close"),["self"]))},[R("form",{class:"dlg glass",onSubmit:_o(a,["prevent"])},[t.value==="form"?(j(),et($t,{key:0},[R("div",lx,tt(o.value),1),c[7]||(c[7]=R("h2",null,"Узнать цену и записаться на показ",-1)),R("label",null,[c[5]||(c[5]=Gt("Имя")),mi(R("input",{"onUpdate:modelValue":c[0]||(c[0]=h=>e.value=h),required:"",maxlength:"80",autocomplete:"name"},null,512),[[mr,e.value]])]),R("label",null,[c[6]||(c[6]=Gt("Телефон")),mi(R("input",{"onUpdate:modelValue":c[1]||(c[1]=h=>n.value=h),required:"",inputmode:"tel",autocomplete:"tel"},null,512),[[mr,n.value]])]),s.value?(j(),et("div",cx,tt(s.value),1)):Zt("",!0),R("button",{class:"btn primary",type:"submit",disabled:r.value},tt(r.value?"Отправляем…":"Отправить"),9,hx),c[8]||(c[8]=R("p",{class:"note"},"Имя и телефон получит только отдел продаж — чтобы перезвонить по этой квартире.",-1))],64)):t.value==="sent"?(j(),et($t,{key:1},[c[9]||(c[9]=R("h2",null,"Заявка отправлена",-1)),c[10]||(c[10]=R("p",{class:"txt"},"Менеджер получил её вместе с номером квартиры и этажом и перезвонит вам.",-1)),R("button",{class:"btn",type:"button",onClick:c[2]||(c[2]=h=>l.$emit("close"))},"Хорошо")],64)):(j(),et($t,{key:2},[c[11]||(c[11]=R("h2",null,"Так это работает в рабочей версии",-1)),c[12]||(c[12]=R("p",{class:"txt"},"Заявка с номером квартиры, этажом и тем, что человек смотрел, за секунды попадает в CRM застройщика и менеджеру в Telegram. В этой демо-версии сервера заявок нет — ничего не сохранено.",-1)),R("button",{class:"btn",type:"button",onClick:c[3]||(c[3]=h=>l.$emit("close"))},"Понятно")],64))],32)]))}}),dx=Ve(ux,[["__scopeId","data-v-6d794ff3"]]),fx={class:"loader"},px={class:"box"},mx={class:"mark"},gx={class:"bar"},_x={key:0,class:"err"},vx=He({__name:"LoaderScreen",props:{progress:{},error:{}},setup(i){return(t,e)=>(j(),et("div",fx,[R("div",px,[R("div",mx,[pi(wh,{size:40,animated:""})]),e[0]||(e[0]=R("div",{class:"t"},"Собираем дом из открытых данных",-1)),e[1]||(e[1]=R("div",{class:"steps muted"},"госреестр · поэтажные планы · OpenStreetMap",-1)),R("div",gx,[R("i",{style:Ie({width:`${Math.round(t.progress*100)}%`})},null,4)]),t.error?(j(),et("div",_x,"Не удалось загрузить: "+tt(t.error),1)):Zt("",!0)])]))}}),xx=Ve(vx,[["__scopeId","data-v-6c11f762"]]),Mx={class:"rail glass","aria-label":"Корпуса"},yx={class:"list scroll-thin"},Sx=["onClick","onMouseenter"],bx={class:"n num"},Ex={class:"bar"},wx={class:"lv num"},Tx=He({__name:"BlockRail",props:{blocks:{},current:{}},emits:["select","hover"],setup(i){const t=i,e=Xt(()=>Math.max(1,...t.blocks.map(s=>s.levels))),n=s=>s.label.replace(/^(Дом|Корпус|Блок)\s*/i,"");return(s,r)=>(j(),et("nav",Mx,[r[1]||(r[1]=R("div",{class:"head eyebrow"},"Корпуса",-1)),R("ul",yx,[(j(!0),et($t,null,Se(s.blocks,o=>(j(),et("li",{key:o.id,class:xn({active:o.id===s.current}),onClick:a=>s.$emit("select",o.id),onMouseenter:a=>s.$emit("hover",o.id),onMouseleave:r[0]||(r[0]=a=>s.$emit("hover",null))},[R("span",bx,tt(n(o)),1),R("span",Ex,[R("i",{style:Ie({width:`${o.levels/e.value*100}%`})},null,4)]),R("span",wx,tt(o.levels)+" эт.",1)],42,Sx))),128))])]))}}),Ax=Ve(Tx,[["__scopeId","data-v-eb241c8e"]]),Rx={class:"panel glass scroll-thin"},Cx={class:"head"},Px={class:"eyebrow"},Dx={class:"grid"},Lx={class:"num"},Ix={class:"floor-row"},Ux=["max"],Nx={class:"num"},Fx={class:"muted small"},Ox={class:"eyebrow mt"},kx={class:"sides"},Bx=["onClick"],zx={class:"num"},Hx=["disabled"],Vx={class:"big num"},Gx={class:"note"},Wx={key:0,class:"note"},Xx={key:1,class:"note"},$x={class:"near"},Yx={class:"near-head"},qx={class:"eyebrow"},jx={class:"switch"},Zx={class:"cats"},Kx=["onClick"],Jx={key:0,class:"lg"},Qx=["src"],tM={class:"nm"},eM={class:"wk num"},nM={class:"switch small"},iM=He({__name:"BlockPanel",props:{sides:{}},emits:["close","view","floor","places","open-floor"],setup(i,{emit:t}){const e=t,n=Xt(()=>Ct.project.value),s=Xt(()=>n.value.building.blocks??[]),r=Xt(()=>Ct.context.value?.places??[]),o=Object.keys(vs);function a(d){const p=C.places.cats.indexOf(d);p>=0?C.places.cats.splice(p,1):C.places.cats.push(d)}const l=Xt(()=>{const d=Me.value,p=d?[d.footprint.reduce((g,_)=>g+_[0],0)/d.footprint.length,d.footprint.reduce((g,_)=>g+_[1],0)/d.footprint.length]:Ct.context.value?.center??[0,0];return r.value.filter(g=>C.places.cats.includes(g.category)&&(C.places.all||g.known)).map(g=>{const _=Math.hypot(g.x-p[0],g.y-p[1]);return{...g,d:_,w:Math.max(1,Math.round(_*1.25/80))}}).sort((g,_)=>g.d-_.d).slice(0,12)}),c=Xt(()=>{const d=Me.value;return d?Math.round((C.blockFloor<=1?0:d.first_floor+(C.blockFloor-2)*d.floor_height)+1.5):0}),h={"03-21":"21 марта","06-21":"21 июня","12-21":"21 декабря"},u=Xt(()=>h[C.sun.day.slice(5)]??gi(C.sun.day));return(d,p)=>(j(),et("aside",Rx,[k(Me)?(j(),et($t,{key:0},[R("div",Cx,[R("div",null,[R("div",Px,tt(n.value.name)+" · "+tt(k(Me).address),1),R("h2",null,tt(k(Me).label)+" · "+tt(k(Me).levels)+" этажей",1)]),R("button",{class:"btn ghost icon","aria-label":"Закрыть",onClick:p[0]||(p[0]=g=>e("close"))},p[8]||(p[8]=[R("svg",{width:"18",height:"18",viewBox:"0 0 24 24"},[R("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1)]))]),R("div",Dx,[R("div",null,[p[9]||(p[9]=R("span",null,"Высота",-1)),R("b",Lx,"≈ "+tt(Math.round(k(Me).height))+" м",1)]),R("div",null,[p[10]||(p[10]=R("span",null,"Первый этаж",-1)),R("b",null,tt(k(Me).retail_ground?"коммерция":"жильё"),1)])]),p[13]||(p[13]=R("div",{class:"eyebrow"},"Этаж",-1)),R("div",Ix,[mi(R("input",{"onUpdate:modelValue":p[1]||(p[1]=g=>k(C).blockFloor=g),type:"range",min:"1",max:k(Me).levels,step:"1","aria-label":"Этаж",onInput:p[2]||(p[2]=g=>e("floor",k(C).blockFloor))},null,40,Ux),[[mr,k(C).blockFloor,void 0,{number:!0}]]),R("b",Nx,tt(k(C).blockFloor),1)]),R("div",Fx,"Окна на высоте ≈ "+tt(c.value)+" м",1),R("div",Ox,"Стороны и солнце, "+tt(u.value),1),R("div",kx,[(j(!0),et($t,null,Se(d.sides,(g,_)=>(j(),et("button",{key:_,class:xn(["side",{on:k(C).viewSide===_}]),onClick:m=>k(C).viewSide=_},[R("b",null,tt(g.short),1),R("span",zx,tt(k(C).blockSun===null?"…":k(C).blockSun[_]?k(Mc)(k(C).blockSun[_]):"нет солнца"),1)],10,Bx))),128))]),R("button",{class:"btn primary wide",disabled:k(Me).retail_ground&&k(C).blockFloor===1,onClick:p[3]||(p[3]=g=>e("open-floor"))},[p[11]||(p[11]=R("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},[R("path",{d:"M3 9l9-6 9 6v11H3z M3 9h18M9 20v-6h6v6",stroke:"currentColor","stroke-width":"1.7","stroke-linejoin":"round"})],-1)),Gt(" "+tt(k(Me).retail_ground&&k(C).blockFloor===1?"1 этаж — коммерция":`Квартиры ${k(C).blockFloor} этажа`),1)],8,Hx),R("button",{class:"btn wide mt8",onClick:p[4]||(p[4]=g=>e("view"))},[p[12]||(p[12]=R("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},[R("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2",stroke:"currentColor","stroke-width":"1.8"}),R("path",{d:"M12 4v16M3 12h18",stroke:"currentColor","stroke-width":"1.8"})],-1)),Gt(" Вид из окна: "+tt(k(C).blockFloor)+" этаж, "+tt(d.sides[k(C).viewSide]?.name??""),1)])],64)):(j(),et($t,{key:1},[p[20]||(p[20]=R("div",{class:"eyebrow"},"Жилой комплекс",-1)),R("div",Vx,[Gt(tt(s.value.length)+" ",1),R("span",null,"корпусов · "+tt(n.value.building.floors_total)+" этажей всего",1)]),R("p",Gx,[p[14]||(p[14]=Gt("Статус по госреестру: ")),R("b",null,tt(n.value.gov_registry.status_ru),1),Gt(". Заказчик — "+tt(n.value.developer.legal_name)+", подрядчик — "+tt(n.value.gov_registry.contractor)+".",1)]),k(Ct).aptTypes.value.size?(j(),et("p",Wx,[p[15]||(p[15]=Gt("Выберите корпус и этаж — откроется план с квартирами, их статусом и прогулкой внутри. Планировки квартир — из каталога застройщика, ")),p[16]||(p[16]=R("b",{class:"warn"},"расстановка на этаже условная",-1)),p[17]||(p[17]=Gt("; статусы и цены ведёт отдел продаж")),k(Es)?(j(),et($t,{key:0},[Gt(" в CRM — они обновляются на странице сами")],64)):Zt("",!0),k(yc)?(j(),et($t,{key:1},[Gt(", стартовые значения тестовые")],64)):Zt("",!0),p[18]||(p[18]=Gt("."))])):(j(),et("p",Xx,p[19]||(p[19]=[Gt("Выберите корпус и этаж — откроется план с квартирами, их статусом и прогулкой внутри. "),R("b",{class:"warn"},"Планировки, статусы и цены — тестовые",-1),Gt(": настоящих планов застройщика в открытом доступе нет.")])))],64)),R("div",$x,[R("div",Yx,[R("div",qx,"Рядом"+tt(k(Me)?` с корпусом ${k(Me).n}`:""),1),R("label",jx,[mi(R("input",{"onUpdate:modelValue":p[5]||(p[5]=g=>k(C).places.on=g),type:"checkbox"},null,512),[[go,k(C).places.on]]),p[21]||(p[21]=R("span",{class:"knob"},null,-1)),p[22]||(p[22]=Gt("на карте"))])]),R("div",Zx,[(j(!0),et($t,null,Se(k(o),g=>(j(),et("button",{key:g,class:xn(["cat",{on:k(C).places.cats.includes(g)}]),style:Ie({"--c":k(vs)[g].color}),onClick:_=>a(g)},tt(k(vs)[g].label),15,Kx))),128))]),R("ul",null,[(j(!0),et($t,null,Se(l.value,g=>(j(),et("li",{key:g.osm},[g.logo?(j(),et("span",Jx,[R("img",{src:k(ha)(g.logo),alt:"",loading:"lazy"},null,8,Qx)])):(j(),et("i",{key:1,style:Ie({background:k(vs)[g.category].color})},null,4)),R("span",tM,tt(g.name),1),R("span",eM,tt(k(ch)(g.w,g.d)),1)]))),128))]),R("label",nM,[mi(R("input",{"onUpdate:modelValue":p[6]||(p[6]=g=>k(C).places.all=g),type:"checkbox"},null,512),[[go,k(C).places.all]]),p[23]||(p[23]=R("span",{class:"knob"},null,-1)),p[24]||(p[24]=Gt("показывать не только известные места"))]),R("button",{class:"btn small wide2",onClick:p[7]||(p[7]=g=>e("places"))},"Показать места вокруг на карте")])]))}}),sM=Ve(iM,[["__scopeId","data-v-abf03509"]]),rM={key:2,class:"view-hud glass"},oM={key:0,class:"hint glass"},aM=2e4,lM=He({__name:"App",setup(i){let t=new URLSearchParams(location.search).get("p")||"";const e=Ln();let n=null;_h(async()=>{n=new a0(e.value,{hoverFloor:(I,z,H)=>{C.hoverFloor=I,C.tip={x:z,y:H}},clickFloor:I=>l(I),hoverUnit:(I,z,H)=>{C.hoverUnit=I,C.tip={x:z,y:H}},clickUnit:I=>c(I),interacted:()=>C.touched=!0,xrEnded:()=>C.xrActive=!1,hoverBlock:(I,z,H)=>{C.hoverBlock=I,C.tip={x:z,y:H}},clickBlock:I=>u(I)});try{C.progress=.05;const I=await Rn.projects();Ct.projects.value=I.items,I.items.some(gt=>gt.slug===t)||(t=I.items[0].slug);const[z,H,nt]=await Promise.all([Rn.project(t),Rn.units(t),Rn.context(t)]);document.title=`ЖК ${z.name} — 3D · Spliti`,C.progress=.35;const Y=[...new Set(z.building.floors.map(gt=>gt.type))],at=new Map;let mt=0;await Promise.all(Y.map(async gt=>{at.set(gt,await Rn.floorType(t,gt)),mt++,C.progress=.35+.5*(mt/Y.length)})),Ct.project.value=z,Ct.units.value=H.items,Ct.context.value=nt,Ct.types.value=at,Ct.observedAt.value=H.observed_at,H.items.some(gt=>gt.type_code)&&Rn.apartmentTypes(t).then(gt=>Ct.aptTypes.value=new Map(gt.items.map(zt=>[zt.code,zt]))).catch(()=>{}),n.load(z,nt,at),n.setSun(C.sun.day,C.sun.hour),n.setPlaceFilter(C.places.cats,C.places.all,C.places.on),C.progress=1,C.xrSupported=await n.xr.checkSupport(),setTimeout(()=>C.loading=!1,250)}catch(I){C.error=I instanceof Error?I.message:String(I)}window.addEventListener("keydown",A),s=window.setInterval(()=>void o(),aM),document.addEventListener("visibilitychange",a)}),xc(()=>{window.removeEventListener("keydown",A),clearInterval(s),document.removeEventListener("visibilitychange",a),n?.dispose()});let s=0,r=!1;async function o(){if(!(!Es.value||r||document.hidden||C.loading)){r=!0;try{const I=(await Rn.units(t)).items,z=new Map(Ct.units.value.map(nt=>[nt.id,nt]));if(!I.some(nt=>{const Y=z.get(nt.id);return!Y||Y.status!==nt.status||Y.price!==nt.price}))return;Ct.units.value=I,n?.updateUnits(gn.value,C.filter,C.hoverUnit,C.unitId)}catch{}finally{r=!1}}}function a(){document.hidden||o()}async function l(I){if(n){if(qe.value){if(!C.blockId)return;let z=Ct.blockLayouts.value.get(C.blockId);if(!z){z=await Rn.block(t,C.blockId);const H=new Map(Ct.blockLayouts.value);H.set(z.id,z),Ct.blockLayouts.value=H}C.floor=I,C.blockFloor=I,C.unitId=null,C.hoverUnit=null,C.mode="floor",n.openBlockFloor(z,I,gn.value,C.filter);return}C.floor=I,C.unitId=null,C.hoverUnit=null,C.hoverFloor=null,C.mode="floor",n.showFloor(I,Ct.units.value,C.filter)}}function c(I){if(I===null){C.unitId=null;return}const z=gn.value.find(H=>H.id===I);z&&((C.floor!==z.floor||C.mode!=="floor")&&l(z.floor),C.unitId=I)}const h=Ln([]);function u(I){n&&(C.blockId!==I&&(C.blockFloor=Math.min(Math.max(C.blockFloor||5,2),d(I))),C.blockId=I,C.mode="block",C.viewSide=0,n.selectBlock(I,C.blockFloor),h.value=n.blockSides(I),m())}function d(I){return Ct.project.value?.building.blocks?.find(z=>z.id===I)?.levels??1}function p(I){!n||!C.blockId||(n.setBlockFloor(C.blockId,I),m())}function g(){!n||!C.blockId||(C.mode="view",n.showView(C.blockId,C.blockFloor,C.viewSide))}let _=0;function m(){clearTimeout(_),C.blockSun=null,_=window.setTimeout(()=>{n&&C.blockId&&(C.blockSun=n.blockSunMinutes(C.blockId,C.blockFloor,C.sun.day))},60)}function f(){qe.value&&C.blockId?(C.floor=null,C.unitId=null,u(C.blockId)):M()}function M(){C.floor=null,C.blockId=null,C.mode="building",C.floor=null,C.unitId=null,C.hoverUnit=null,n?.flyToBuilding()}function x(){const I=ke.value;!n||!I||(C.mode="walk",n.enterWalk(I,gn.value,T.value))}function v(){const I=ke.value;if(n){if(C.mode==="view"&&C.blockId){u(C.blockId);return}C.xrActive||(I?(C.mode="floor",n.showFloor(I.floor,gn.value,C.filter),n.styleUnits(C.filter,null,I.id)):M())}}async function U(){const I=ke.value;if(!(!n||!I))try{C.xrActive=!0,await n.enterVR(I.floor)}catch{C.xrActive=!1}}function A(I){I.key==="Escape"&&(C.showLead||C.showData?(C.showLead=!1,C.showData=!1):C.mode==="walk"||C.mode==="view"?v():C.mode==="block"?M():C.unitId!==null?C.unitId=null:C.mode==="floor"&&f())}const T=Xt(()=>{const I=ke.value;if(!I?.polygon)return[];const z=jn.value.find(nt=>nt.n===I.floor),H=z&&ua(z.type);return H?Dh(H,I.polygon,Lr.value):[]}),P=Xt(()=>{const I=ke.value,z=Ct.project.value,H=Ct.context.value;if(!I||!z||!H||!T.value.length)return null;const nt=jn.value.find(Y=>Y.n===I.floor);return Uh(T.value,H,Lr.value,nt.elevation+1.5,bs.value?.origin)});let E=0;function y(){clearTimeout(E),C.sunMinutes=null;const I=ke.value,z=Ct.project.value;!I||!z||!n||(E=window.setTimeout(()=>{const H=jn.value.find(nt=>nt.n===I.floor);C.sunMinutes=n.sunMinutes(T.value,H.elevation,C.sun.day,Lr.value)},60))}as(()=>[C.filter.rooms.slice(),C.filter.onlyAvailable,C.hoverUnit,C.unitId],()=>{n?.styleUnits(C.filter,C.hoverUnit,C.unitId)}),as(()=>C.unitId,y),as(()=>C.sun.day,()=>{y(),C.blockId&&m()}),as(()=>[C.places.cats.slice(),C.places.all,C.places.on],()=>{n?.setPlaceFilter(C.places.cats,C.places.all,C.places.on)}),as(()=>[C.sun.day,C.sun.hour],([I,z])=>n?.setSun(I,z));function L(I){n?.hoverFloorFromUI(I)}function $(I,z){n?.setStick(I,z)}const G=Xt(()=>vo.value.length);return(I,z)=>(j(),et("div",{class:xn(["app",`mode-${k(C).mode}`])},[R("div",{ref_key:"host",ref:e,class:"stage"},null,512),!k(C).loading&&k(Ct).project.value?(j(),et($t,{key:0},[pi(b0,{project:k(Ct).project.value,mode:k(C).mode,onBack:M,onData:z[0]||(z[0]=H=>k(C).showData=!0)},null,8,["project","mode"]),k(qe)?(j(),et($t,{key:0},[k(C).mode==="building"||k(C).mode==="block"?(j(),pn(Ax,{key:0,blocks:k(Ct).project.value.building.blocks??[],current:k(C).blockId,onSelect:u,onHover:z[1]||(z[1]=H=>k(C).hoverBlock=H)},null,8,["blocks","current"])):Zt("",!0),k(C).mode==="building"||k(C).mode==="block"?(j(),pn(sM,{key:1,sides:h.value,onClose:M,onView:g,onFloor:p,onOpenFloor:z[2]||(z[2]=H=>l(k(C).blockFloor)),onPlaces:z[3]||(z[3]=H=>k(n)?.flyToPlaces())},null,8,["sides"])):Zt("",!0),k(C).mode==="view"&&k(Me)?(j(),et("div",rM,[R("button",{class:"btn small",onClick:v},z[7]||(z[7]=[R("svg",{width:"14",height:"14",viewBox:"0 0 24 24"},[R("path",{d:"M15 6l-6 6 6 6",stroke:"currentColor","stroke-width":"2.2",fill:"none","stroke-linecap":"round"})],-1),Gt(" Назад ")])),R("span",null,[R("b",null,tt(k(Me).label),1),Gt(" · "+tt(k(C).blockFloor)+" этаж · "+tt(h.value[k(C).viewSide]?.name),1)]),z[8]||(z[8]=R("span",{class:"muted"},"тяните, чтобы осмотреться",-1))])):Zt("",!0)],64)):Zt("",!0),(!k(qe)||k(C).mode==="floor")&&k(C).mode!=="walk"?(j(),pn(L0,{key:1,floors:k(vo),current:k(C).floor,count:G.value,onSelect:l,onHover:L},null,8,["floors","current","count"])):Zt("",!0),(!k(qe)||k(C).mode==="floor")&&k(C).mode!=="walk"?(j(),pn(Nv,{key:2,view:P.value,onSelectUnit:c,onWalk:x,onLead:z[4]||(z[4]=H=>k(C).showLead=!0),onBack:f},null,8,["view"])):Zt("",!0),k(C).xrActive?Zt("",!0):(j(),pn(Hv,{key:3})),k(C).mode==="walk"?(j(),pn(qv,{key:4,"xr-supported":k(C).xrSupported,onExit:v,onVr:U,onStick:$},null,8,["xr-supported"])):Zt("",!0),pi(Jv),pi(xh,{name:"fade"},{default:vh(()=>[k(C).mode==="building"&&!k(C).touched?(j(),et("div",oM,tt(k(qe)?"Нажмите на корпус — покажем вид с любого этажа и солнце по сторонам":"Наведите на этаж и нажмите — откроется план с квартирами"),1)):Zt("",!0)]),_:1}),k(C).showData?(j(),pn(ax,{key:5,onClose:z[5]||(z[5]=H=>k(C).showData=!1)})):Zt("",!0),k(C).showLead?(j(),pn(dx,{key:6,onClose:z[6]||(z[6]=H=>k(C).showLead=!1)})):Zt("",!0)],64)):Zt("",!0),k(C).loading?(j(),pn(xx,{key:1,progress:k(C).progress,error:k(C).error},null,8,["progress","error"])):Zt("",!0)],2))}}),cM=Ve(lM,[["__scopeId","data-v-c5708e73"]]);Mh(cM).mount("#app");
