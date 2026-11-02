(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const jl="180",Hp=0,Wu=1,Vp=2,$d=1,Zd=2,hi=3,_i=0,sn=1,Vt=2,Li=0,Ws=1,Xu=2,qu=3,Yu=4,Gp=5,Ji=100,Wp=101,Xp=102,qp=103,Yp=104,Kp=200,$p=201,Zp=202,Jp=203,Wc=204,Xc=205,jp=206,Qp=207,em=208,tm=209,nm=210,im=211,sm=212,rm=213,om=214,qc=0,Yc=1,Kc=2,Zs=3,$c=4,Zc=5,Jc=6,jc=7,Jd=0,am=1,cm=2,Di=0,lm=1,um=2,hm=3,jd=4,dm=5,fm=6,pm=7,Ku="attached",mm="detached",Qd=300,Js=301,js=302,Qc=303,el=304,Da=306,Fn=1e3,Pi=1001,va=1002,bt=1003,ef=1004,Ir=1005,It=1006,ca=1007,pn=1008,ei=1009,tf=1010,nf=1011,qr=1012,Ql=1013,is=1014,On=1015,po=1016,eu=1017,tu=1018,Yr=1020,sf=35902,rf=35899,of=1021,af=1022,En=1023,Kr=1026,$r=1027,nu=1028,iu=1029,cf=1030,su=1031,ru=1033,la=33776,ua=33777,ha=33778,da=33779,tl=35840,nl=35841,il=35842,sl=35843,rl=36196,ol=37492,al=37496,cl=37808,ll=37809,ul=37810,hl=37811,dl=37812,fl=37813,pl=37814,ml=37815,gl=37816,_l=37817,xl=37818,vl=37819,yl=37820,Ml=37821,Sl=36492,wl=36494,El=36495,Tl=36283,bl=36284,Al=36285,Rl=36286,gm=2200,_m=2201,xm=2202,Zr=2300,Jr=2301,Wa=2302,zs=2400,Bs=2401,ya=2402,ou=2500,vm=2501,ym=0,lf=1,Cl=2,Mm=3200,Sm=3201,uf=0,wm=1,Ii="",ut="srgb",en="srgb-linear",Ma="linear",ft="srgb",ds=7680,$u=519,Em=512,Tm=513,bm=514,hf=515,Am=516,Rm=517,Cm=518,Im=519,Il=35044,Zu="300 es",Jn=2e3,Sa=2001;class cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ju=1234567;const Nr=Math.PI/180,Qs=180/Math.PI;function Tn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function au(i,e){return(i%e+e)%e}function Pm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Lm(i,e,t){return i!==e?(t-i)/(e-i):0}function Ur(i,e,t){return(1-t)*i+t*e}function Dm(i,e,t,n){return Ur(i,e,1-Math.exp(-t*n))}function Nm(i,e=1){return e-Math.abs(au(i,e*2)-e)}function Um(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Fm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Om(i,e){return i+Math.floor(Math.random()*(e-i+1))}function zm(i,e){return i+Math.random()*(e-i)}function Bm(i){return i*(.5-Math.random())}function km(i){i!==void 0&&(Ju=i);let e=Ju+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hm(i){return i*Nr}function Vm(i){return i*Qs}function Gm(i){return(i&i-1)===0&&i!==0}function Wm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Xm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qm(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const kt={DEG2RAD:Nr,RAD2DEG:Qs,generateUUID:Tn,clamp:Ye,euclideanModulo:au,mapLinear:Pm,inverseLerp:Lm,lerp:Ur,damp:Dm,pingpong:Nm,smoothstep:Um,smootherstep:Fm,randInt:Om,randFloat:zm,randFloatSpread:Bm,seededRandom:km,degToRad:Hm,radToDeg:Vm,isPowerOfTwo:Gm,ceilPowerOfTwo:Wm,floorPowerOfTwo:Xm,setQuaternionFromProperEuler:qm,normalize:lt,denormalize:Nn};class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let p=1-a;const m=l*d+c*f+u*g+h*_,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const T=Math.sqrt(y),A=Math.atan2(T,m*v);p=Math.sin(p*A)/T,a=Math.sin(a*A)/T}const x=a*v;if(l=l*p+d*x,c=c*p+f*x,u=u*p+g*x,h=h*p+_*x,p===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,n=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ju.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xa.copy(this).projectOnVector(e),this.sub(Xa)}reflect(e){return this.sub(Xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xa=new b,ju=new zn;class Ge{constructor(e,t,n,s,r,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],v=s[1],y=s[4],x=s[7],T=s[2],A=s[5],C=s[8];return r[0]=o*_+a*v+l*T,r[3]=o*p+a*y+l*A,r[6]=o*m+a*x+l*C,r[1]=c*_+u*v+h*T,r[4]=c*p+u*y+h*A,r[7]=c*m+u*x+h*C,r[2]=d*_+f*v+g*T,r[5]=d*p+f*y+g*A,r[8]=d*m+f*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qa.makeScale(e,t)),this}rotate(e){return this.premultiply(qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new Ge;function df(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ym(){const i=jr("canvas");return i.style.display="block",i}const Qu={};function Qr(i){i in Qu||(Qu[i]=!0,console.warn(i))}function Km(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const eh=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),th=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $m(){const i={enabled:!0,workingColorSpace:en,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ft&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(s.r=Xs(s.r),s.g=Xs(s.g),s.b=Xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?Ma:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Qr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Qr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[en]:{primaries:e,whitePoint:n,transfer:Ma,toXYZ:eh,fromXYZ:th,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ut},outputColorSpaceConfig:{drawingBufferColorSpace:ut}},[ut]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:eh,fromXYZ:th,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ut}}}),i}const Qe=$m();function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let fs;class Zm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fs===void 0&&(fs=jr("canvas")),fs.width=e.width,fs.height=e.height;const s=fs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=fs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=pi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pi(t[n]/255)*255):t[n]=pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jm=0;class cu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Tn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ya(s[o].image)):r.push(Ya(s[o]))}else r=Ya(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jm=0;const Ka=new b;class pt extends cs{constructor(e=pt.DEFAULT_IMAGE,t=pt.DEFAULT_MAPPING,n=Pi,s=Pi,r=It,o=pn,a=En,l=ei,c=pt.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=Tn(),this.name="",this.source=new cu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ka).x}get height(){return this.source.getSize(Ka).y}get depth(){return this.source.getSize(Ka).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fn:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fn:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pt.DEFAULT_IMAGE=null;pt.DEFAULT_MAPPING=Qd;pt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,s=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(f+1)/2,T=(m+1)/2,A=(u+d)/4,C=(h+_)/4,P=(g+p)/4;return y>x&&y>T?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=C/n):x>T?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=P/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=P/r),this.set(n,s,r,t),this}let v=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qm extends cs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new pt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new cu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends Qm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ff extends pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class e0 extends pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gt{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(e.matrixWorld),this.union(Eo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),To.subVectors(this.max,_r),ps.subVectors(e.a,_r),ms.subVectors(e.b,_r),gs.subVectors(e.c,_r),vi.subVectors(ms,ps),yi.subVectors(gs,ms),ki.subVectors(ps,gs);let t=[0,-vi.z,vi.y,0,-yi.z,yi.y,0,-ki.z,ki.y,vi.z,0,-vi.x,yi.z,0,-yi.x,ki.z,0,-ki.x,-vi.y,vi.x,0,-yi.y,yi.x,0,-ki.y,ki.x,0];return!$a(t,ps,ms,gs,To)||(t=[1,0,0,0,1,0,0,0,1],!$a(t,ps,ms,gs,To))?!1:(bo.crossVectors(vi,yi),t=[bo.x,bo.y,bo.z],$a(t,ps,ms,gs,To))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ri=[new b,new b,new b,new b,new b,new b,new b,new b],In=new b,Eo=new gt,ps=new b,ms=new b,gs=new b,vi=new b,yi=new b,ki=new b,_r=new b,To=new b,bo=new b,Hi=new b;function $a(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hi.fromArray(i,r);const a=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=e.dot(Hi),c=t.dot(Hi),u=n.dot(Hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const t0=new gt,xr=new b,Za=new b;class Vn{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):t0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);const t=xr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(xr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(Za)),this.expandByPoint(xr.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const oi=new b,Ja=new b,Ao=new b,Mi=new b,ja=new b,Ro=new b,Qa=new b;class cr{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ja.copy(e).add(t).multiplyScalar(.5),Ao.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(Ja);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ao),a=Mi.dot(this.direction),l=-Mi.dot(Ao),c=Mi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ja).addScaledVector(Ao,d),f}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const n=oi.dot(this.direction),s=oi.dot(oi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,n,s,r){ja.subVectors(t,e),Ro.subVectors(n,e),Qa.crossVectors(ja,Ro);let o=this.direction.dot(Qa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const l=a*this.direction.dot(Ro.crossVectors(Mi,Ro));if(l<0)return null;const c=a*this.direction.dot(ja.cross(Mi));if(c<0||l+c>o)return null;const u=-a*Mi.dot(Qa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,g,_,p){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,_,p)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(n0,e,i0)}lookAt(e,t,n){const s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Si.crossVectors(n,ln),Si.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Si.crossVectors(n,ln)),Si.normalize(),Co.crossVectors(ln,Si),s[0]=Si.x,s[4]=Co.x,s[8]=ln.x,s[1]=Si.y,s[5]=Co.y,s[9]=ln.y,s[2]=Si.z,s[6]=Co.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],v=n[3],y=n[7],x=n[11],T=n[15],A=s[0],C=s[4],P=s[8],S=s[12],w=s[1],L=s[5],O=s[9],H=s[13],X=s[2],G=s[6],q=s[10],Z=s[14],I=s[3],ie=s[7],fe=s[11],Ae=s[15];return r[0]=o*A+a*w+l*X+c*I,r[4]=o*C+a*L+l*G+c*ie,r[8]=o*P+a*O+l*q+c*fe,r[12]=o*S+a*H+l*Z+c*Ae,r[1]=u*A+h*w+d*X+f*I,r[5]=u*C+h*L+d*G+f*ie,r[9]=u*P+h*O+d*q+f*fe,r[13]=u*S+h*H+d*Z+f*Ae,r[2]=g*A+_*w+p*X+m*I,r[6]=g*C+_*L+p*G+m*ie,r[10]=g*P+_*O+p*q+m*fe,r[14]=g*S+_*H+p*Z+m*Ae,r[3]=v*A+y*w+x*X+T*I,r[7]=v*C+y*L+x*G+T*ie,r[11]=v*P+y*O+x*q+T*fe,r[15]=v*S+y*H+x*Z+T*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+p*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+m*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],v=h*p*c-_*d*c+_*l*f-a*p*f-h*l*m+a*d*m,y=g*d*c-u*p*c-g*l*f+o*p*f+u*l*m-o*d*m,x=u*_*c-g*h*c+g*a*f-o*_*f-u*a*m+o*h*m,T=g*h*l-u*_*l-g*a*d+o*_*d+u*a*p-o*h*p,A=t*v+n*y+s*x+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=v*C,e[1]=(_*d*r-h*p*r-_*s*f+n*p*f+h*s*m-n*d*m)*C,e[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*m+n*l*m)*C,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*C,e[4]=y*C,e[5]=(u*p*r-g*d*r+g*s*f-t*p*f-u*s*m+t*d*m)*C,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*m-t*l*m)*C,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*C,e[8]=x*C,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*m-t*h*m)*C,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*m+t*a*m)*C,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*C,e[12]=T*C,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*p+t*h*p)*C,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*p-t*a*p)*C,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,_=o*u,p=o*h,m=a*h,v=l*c,y=l*u,x=l*h,T=n.x,A=n.y,C=n.z;return s[0]=(1-(_+m))*T,s[1]=(f+x)*T,s[2]=(g-y)*T,s[3]=0,s[4]=(f-x)*A,s[5]=(1-(d+m))*A,s[6]=(p+v)*A,s[7]=0,s[8]=(g+y)*C,s[9]=(p-v)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=_s.set(s[0],s[1],s[2]).length();const o=_s.set(s[4],s[5],s[6]).length(),a=_s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Pn.copy(this);const c=1/r,u=1/o,h=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,t.setFromRotationMatrix(Pn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Jn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Jn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Sa)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Jn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Jn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Sa)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _s=new b,Pn=new Be,n0=new b(0,0,0),i0=new b(1,1,1),Si=new b,Co=new b,ln=new b,nh=new Be,ih=new zn;class ti{constructor(e=0,t=0,n=0,s=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ih.setFromEuler(this),this.setFromQuaternion(ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class lu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let s0=0;const sh=new b,xs=new zn,ai=new Be,Io=new b,vr=new b,r0=new b,o0=new zn,rh=new b(1,0,0),oh=new b(0,1,0),ah=new b(0,0,1),ch={type:"added"},a0={type:"removed"},vs={type:"childadded",child:null},ec={type:"childremoved",child:null};class ot extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DEFAULT_UP.clone();const e=new b,t=new ti,n=new zn,s=new b(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new Ge}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(rh,e)}rotateY(e){return this.rotateOnAxis(oh,e)}rotateZ(e){return this.rotateOnAxis(ah,e)}translateOnAxis(e,t){return sh.copy(e).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rh,e)}translateY(e){return this.translateOnAxis(oh,e)}translateZ(e){return this.translateOnAxis(ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Io.copy(e):Io.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(vr,Io,this.up):ai.lookAt(Io,vr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(ai),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ch),vs.child=e,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(a0),ec.child=e,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ch),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,r0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,o0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ot.DEFAULT_UP=new b(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new b,ci=new b,tc=new b,li=new b,ys=new b,Ms=new b,lh=new b,nc=new b,ic=new b,sc=new b,rc=new nt,oc=new nt,ac=new nt;class Sn{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ln.subVectors(e,t),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ln.subVectors(s,t),ci.subVectors(n,t),tc.subVectors(e,t);const o=Ln.dot(Ln),a=Ln.dot(ci),l=Ln.dot(tc),c=ci.dot(ci),u=ci.dot(tc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return rc.setScalar(0),oc.setScalar(0),ac.setScalar(0),rc.fromBufferAttribute(e,t),oc.fromBufferAttribute(e,n),ac.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(rc,r.x),o.addScaledVector(oc,r.y),o.addScaledVector(ac,r.z),o}static isFrontFacing(e,t,n,s){return Ln.subVectors(n,t),ci.subVectors(e,t),Ln.cross(ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Ln.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Sn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ys.subVectors(s,n),Ms.subVectors(r,n),nc.subVectors(e,n);const l=ys.dot(nc),c=Ms.dot(nc);if(l<=0&&c<=0)return t.copy(n);ic.subVectors(e,s);const u=ys.dot(ic),h=Ms.dot(ic);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ys,o);sc.subVectors(e,r);const f=ys.dot(sc),g=Ms.dot(sc);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ms,a);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return lh.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(lh,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(ys,o).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Po={h:0,s:0,l:0};function cc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=au(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=cc(o,r,e+1/3),this.g=cc(o,r,e),this.b=cc(o,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){const n=pf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return Qe.workingToColorSpace(qt.copy(this),e),Math.round(Ye(qt.r*255,0,255))*65536+Math.round(Ye(qt.g*255,0,255))*256+Math.round(Ye(qt.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(qt.copy(this),t);const n=qt.r,s=qt.g,r=qt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=ut){Qe.workingToColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,s=qt.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(Po);const n=Ur(wi.h,Po.h,t),s=Ur(wi.s,Po.s,t),r=Ur(wi.l,Po.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new pe;pe.NAMES=pf;let c0=0;class Bn extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Tn(),this.name="",this.type="Material",this.blending=Ws,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wc,this.blendDst=Xc,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Xc&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$u&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gt extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new b,Lo=new se;let l0=0;class Qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:l0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Il,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lo.fromBufferAttribute(this,t),Lo.applyMatrix3(e),this.setXY(t,Lo.x,Lo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Il&&(e.usage=this.usage),e}}class mf extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gf extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tt extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let u0=0;const xn=new Be,lc=new ot,Ss=new b,un=new gt,yr=new gt,zt=new b;class Ft extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Tn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(df(e)?gf:mf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return lc.lookAt(e),lc.updateMatrix(),this.applyMatrix4(lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(un.min,yr.min),un.expandByPoint(zt),zt.addVectors(un.max,yr.max),un.expandByPoint(zt)):(un.expandByPoint(yr.min),un.expandByPoint(yr.max))}un.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(e,c),zt.add(Ss)),s=Math.max(s,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new b,l[P]=new b;const c=new b,u=new b,h=new b,d=new se,f=new se,g=new se,_=new b,p=new b;function m(P,S,w){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,w),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,w),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(L),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),a[P].add(_),a[S].add(_),a[w].add(_),l[P].add(p),l[S].add(p),l[w].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,S=v.length;P<S;++P){const w=v[P],L=w.start,O=w.count;for(let H=L,X=L+O;H<X;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new b,x=new b,T=new b,A=new b;function C(P){T.fromBufferAttribute(s,P),A.copy(T);const S=a[P];y.copy(S),y.sub(T.multiplyScalar(T.dot(S))).normalize(),x.crossVectors(A,S);const L=x.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,S=v.length;P<S;++P){const w=v[P],L=w.start,O=w.count;for(let H=L,X=L+O;H<X;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new b,r=new b,o=new b,a=new b,l=new b,c=new b,u=new b,h=new b;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let m=0;m<u;m++)d[g++]=c[f++]}return new Qt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uh=new Be,Vi=new cr,Do=new Vn,hh=new b,No=new b,Uo=new b,Fo=new b,uc=new b,Oo=new b,dh=new b,zo=new b;class Ee extends ot{constructor(e=new Ft,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Oo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(uc.fromBufferAttribute(h,e),o?Oo.addScaledVector(uc,u):Oo.addScaledVector(uc.sub(t),u))}t.add(Oo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(r),Vi.copy(e.ray).recast(e.near),!(Do.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Do,hh)===null||Vi.origin.distanceToSquared(hh)>(e.far-e.near)**2))&&(uh.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(uh),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let x=v,T=y;x<T;x+=3){const A=a.getX(x),C=a.getX(x+1),P=a.getX(x+2);s=Bo(this,m,e,n,c,u,h,A,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=a.getX(p),y=a.getX(p+1),x=a.getX(p+2);s=Bo(this,o,e,n,c,u,h,v,y,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=v,T=y;x<T;x+=3){const A=x,C=x+1,P=x+2;s=Bo(this,m,e,n,c,u,h,A,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=p,y=p+1,x=p+2;s=Bo(this,o,e,n,c,u,h,v,y,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function h0(i,e,t,n,s,r,o,a){let l;if(e.side===sn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===_i,a),l===null)return null;zo.copy(a),zo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(zo);return c<t.near||c>t.far?null:{distance:c,point:zo.clone(),object:i}}function Bo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,No),i.getVertexPosition(l,Uo),i.getVertexPosition(c,Fo);const u=h0(i,e,t,n,No,Uo,Fo,dh);if(u){const h=new b;Sn.getBarycoord(dh,No,Uo,Fo,h),s&&(u.uv=Sn.getInterpolatedAttribute(s,a,l,c,h,new se)),r&&(u.uv1=Sn.getInterpolatedAttribute(r,a,l,c,h,new se)),o&&(u.normal=Sn.getInterpolatedAttribute(o,a,l,c,h,new b),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new b,materialIndex:0};Sn.getNormal(No,Uo,Fo,d.normal),u.face=d,u.barycoord=h}return u}class bn extends Ft{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(h,2));function g(_,p,m,v,y,x,T,A,C,P,S){const w=x/C,L=T/P,O=x/2,H=T/2,X=A/2,G=C+1,q=P+1;let Z=0,I=0;const ie=new b;for(let fe=0;fe<q;fe++){const Ae=fe*L-H;for(let qe=0;qe<G;qe++){const Je=qe*w-O;ie[_]=Je*v,ie[p]=Ae*y,ie[m]=X,c.push(ie.x,ie.y,ie.z),ie[_]=0,ie[p]=0,ie[m]=A>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(qe/C),h.push(1-fe/P),Z+=1}}for(let fe=0;fe<P;fe++)for(let Ae=0;Ae<C;Ae++){const qe=d+Ae+G*fe,Je=d+Ae+G*(fe+1),ht=d+(Ae+1)+G*(fe+1),je=d+(Ae+1)+G*fe;l.push(qe,Je,je),l.push(Je,ht,je),I+=6}a.addGroup(f,I,S),f+=I,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function er(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Zt(i){const e={};for(let t=0;t<i.length;t++){const n=er(i[t]);for(const s in n)e[s]=n[s]}return e}function d0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _f(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const xf={clone:er,merge:Zt};var f0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f0,this.fragmentShader=p0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=d0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class vf extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new b,fh=new se,ph=new se;class Jt extends vf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,fh,ph),t.subVectors(ph,fh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ws=-90,Es=1;class m0 extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Jt(ws,Es,e,t);s.layers=this.layers,this.add(s);const r=new Jt(ws,Es,e,t);r.layers=this.layers,this.add(r);const o=new Jt(ws,Es,e,t);o.layers=this.layers,this.add(o);const a=new Jt(ws,Es,e,t);a.layers=this.layers,this.add(a);const l=new Jt(ws,Es,e,t);l.layers=this.layers,this.add(l);const c=new Jt(ws,Es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class yf extends pt{constructor(e=[],t=Js,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class g0 extends ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new yf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bn(5,5,5),r=new xi({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Li});r.uniforms.tEquirect.value=t;const o=new Ee(s,r),a=t.minFilter;return t.minFilter===pn&&(t.minFilter=It),new m0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class it extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _0={type:"move"};class hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new it;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class mo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new pe(e),this.density=t}clone(){return new mo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class x0 extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Mf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Il,this.updateRanges=[],this.version=0,this.uuid=Tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new b;class eo{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new eo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class uu extends Bn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ts;const Mr=new b,bs=new b,As=new b,Rs=new se,Sr=new se,Sf=new Be,ko=new b,wr=new b,Ho=new b,mh=new se,dc=new se,gh=new se;class Na extends ot{constructor(e=new uu){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new Ft;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Mf(t,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new eo(n,3,0,!1)),Ts.setAttribute("uv",new eo(n,2,3,!1))}this.geometry=Ts,this.material=e,this.center=new se(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bs.setFromMatrixScale(this.matrixWorld),Sf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bs.multiplyScalar(-As.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Vo(ko.set(-.5,-.5,0),As,o,bs,s,r),Vo(wr.set(.5,-.5,0),As,o,bs,s,r),Vo(Ho.set(.5,.5,0),As,o,bs,s,r),mh.set(0,0),dc.set(1,0),gh.set(1,1);let a=e.ray.intersectTriangle(ko,wr,Ho,!1,Mr);if(a===null&&(Vo(wr.set(-.5,.5,0),As,o,bs,s,r),dc.set(0,1),a=e.ray.intersectTriangle(ko,Ho,wr,!1,Mr),a===null))return;const l=e.ray.origin.distanceTo(Mr);l<e.near||l>e.far||t.push({distance:l,point:Mr.clone(),uv:Sn.getInterpolation(Mr,ko,wr,Ho,mh,dc,gh,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Vo(i,e,t,n,s,r){Rs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Sr.x=r*Rs.x-s*Rs.y,Sr.y=s*Rs.x+r*Rs.y):Sr.copy(Rs),i.copy(e),i.x+=Sr.x,i.y+=Sr.y,i.applyMatrix4(Sf)}const _h=new b,xh=new nt,vh=new nt,v0=new b,yh=new Be,Go=new b,fc=new Vn,Mh=new Be,pc=new cr;class y0 extends Ee{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ku,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Go),this.boundingBox.expandByPoint(Go)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Go),this.boundingSphere.expandByPoint(Go)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fc.copy(this.boundingSphere),fc.applyMatrix4(s),e.ray.intersectsSphere(fc)!==!1&&(Mh.copy(s).invert(),pc.copy(e.ray).applyMatrix4(Mh),!(this.boundingBox!==null&&pc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ku?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===mm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;xh.fromBufferAttribute(s.attributes.skinIndex,e),vh.fromBufferAttribute(s.attributes.skinWeight,e),_h.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=vh.getComponent(r);if(o!==0){const a=xh.getComponent(r);yh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(v0.copy(_h).applyMatrix4(yh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class to extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wf extends pt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=bt,u=bt,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sh=new Be,M0=new Be;class hu{constructor(e=[],t=[]){this.uuid=Tn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:M0;Sh.multiplyMatrices(a,t[r]),Sh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new hu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new wf(t,e,e,En,On);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new to),this.bones.push(o),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Pl extends Qt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Cs=new Be,wh=new Be,Wo=[],Eh=new gt,S0=new Be,Er=new Ee,Tr=new Vn;class kn extends Ee{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,S0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),Eh.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Eh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),Tr.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(Tr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(n),e.ray.intersectsSphere(Tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),wh.multiplyMatrices(n,Cs),Er.matrixWorld=wh,Er.raycast(e,Wo);for(let o=0,a=Wo.length;o<a;o++){const l=Wo[o];l.instanceId=r,l.object=this,t.push(l)}Wo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wf(new Float32Array(s*this.count),s,this.count,nu,On));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const mc=new b,w0=new b,E0=new Ge;class Ki{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=mc.subVectors(n,t).cross(w0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(mc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||E0.getNormalMatrix(e),s=this.coplanarPoint(mc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new Vn,T0=new se(.5,.5),Xo=new b;class du{constructor(e=new Ki,t=new Ki,n=new Ki,s=new Ki,r=new Ki,o=new Ki){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],p=r[10],m=r[11],v=r[12],y=r[13],x=r[14],T=r[15];if(s[0].setComponents(c-o,f-u,m-g,T-v).normalize(),s[1].setComponents(c+o,f+u,m+g,T+v).normalize(),s[2].setComponents(c+a,f+h,m+_,T+y).normalize(),s[3].setComponents(c-a,f-h,m-_,T-y).normalize(),n)s[4].setComponents(l,d,p,x).normalize(),s[5].setComponents(c-l,f-d,m-p,T-x).normalize();else if(s[4].setComponents(c-l,f-d,m-p,T-x).normalize(),t===Jn)s[5].setComponents(c+l,f+d,m+p,T+x).normalize();else if(t===Sa)s[5].setComponents(l,d,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){Gi.center.set(0,0,0);const t=T0.distanceTo(e.center);return Gi.radius=.7071067811865476+t,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Xo.x=s.normal.x>0?e.max.x:e.min.x,Xo.y=s.normal.y>0?e.max.y:e.min.y,Xo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ef extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wa=new b,Ea=new b,Th=new Be,br=new cr,qo=new Vn,gc=new b,bh=new b;class fu extends ot{constructor(e=new Ft,t=new Ef){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)wa.fromBufferAttribute(t,s-1),Ea.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=wa.distanceTo(Ea);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(s),qo.radius+=r,e.ray.intersectsSphere(qo)===!1)return;Th.copy(s).invert(),br.copy(e.ray).applyMatrix4(Th);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){const m=u.getX(_),v=u.getX(_+1),y=Yo(this,e,br,l,m,v,_);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(f),m=Yo(this,e,br,l,_,p,g-1);m&&t.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){const m=Yo(this,e,br,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=Yo(this,e,br,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Yo(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(wa.fromBufferAttribute(a,s),Ea.fromBufferAttribute(a,r),t.distanceSqToSegment(wa,Ea,gc,bh)>n)return;gc.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(gc);if(!(c<e.near||c>e.far))return{distance:c,point:bh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Ah=new b,Rh=new b;class b0 extends fu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ah.fromBufferAttribute(t,s),Rh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ah.distanceTo(Rh);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class A0 extends fu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Tf extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ch=new Be,Ll=new cr,Ko=new Vn,$o=new b;class R0 extends ot{constructor(e=new Ft,t=new Tf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(s),Ko.radius+=r,e.ray.intersectsSphere(Ko)===!1)return;Ch.copy(s).invert(),Ll.copy(e.ray).applyMatrix4(Ch);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const p=c.getX(g);$o.fromBufferAttribute(h,p),Ih($o,p,l,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)$o.fromBufferAttribute(h,g),Ih($o,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ih(i,e,t,n,s,r,o){const a=Ll.distanceSqToPoint(i);if(a<t){const l=new b;Ll.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ls extends pt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bf extends pt{constructor(e,t,n=is,s,r,o,a=bt,l=bt,c,u=Kr,h=1){if(u!==Kr&&u!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Af extends pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fi extends Ft{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],p=n/2;let m=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(f,2));function v(){const x=new b,T=new b;let A=0;const C=(t-e)/n;for(let P=0;P<=r;P++){const S=[],w=P/r,L=w*(t-e)+e;for(let O=0;O<=s;O++){const H=O/s,X=H*l+a,G=Math.sin(X),q=Math.cos(X);T.x=L*G,T.y=-w*n+p,T.z=L*q,h.push(T.x,T.y,T.z),x.set(G,C,q).normalize(),d.push(x.x,x.y,x.z),f.push(H,1-w),S.push(g++)}_.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){const w=_[S][P],L=_[S+1][P],O=_[S+1][P+1],H=_[S][P+1];(e>0||S!==0)&&(u.push(w,L,H),A+=3),(t>0||S!==r-1)&&(u.push(L,O,H),A+=3)}c.addGroup(m,A,0),m+=A}function y(x){const T=g,A=new se,C=new b;let P=0;const S=x===!0?e:t,w=x===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,p*w,0),d.push(0,w,0),f.push(.5,.5),g++;const L=g;for(let O=0;O<=s;O++){const X=O/s*l+a,G=Math.cos(X),q=Math.sin(X);C.x=S*q,C.y=p*w,C.z=S*G,h.push(C.x,C.y,C.z),d.push(0,w,0),A.x=G*.5+.5,A.y=q*.5*w+.5,f.push(A.x,A.y),g++}for(let O=0;O<s;O++){const H=T+O,X=L+O;x===!0?u.push(X,X+1,H):u.push(X+1,X,H),P+=3}c.addGroup(m,P,x===!0?1:2),m+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ua extends Ft{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new b,x=new b,T=new b;for(let A=0;A<t.length;A+=3)f(t[A+0],y),f(t[A+1],x),f(t[A+2],T),l(y,x,T,v)}function l(v,y,x,T){const A=T+1,C=[];for(let P=0;P<=A;P++){C[P]=[];const S=v.clone().lerp(x,P/A),w=y.clone().lerp(x,P/A),L=A-P;for(let O=0;O<=L;O++)O===0&&P===A?C[P][O]=S:C[P][O]=S.clone().lerp(w,O/L)}for(let P=0;P<A;P++)for(let S=0;S<2*(A-P)-1;S++){const w=Math.floor(S/2);S%2===0?(d(C[P][w+1]),d(C[P+1][w]),d(C[P][w])):(d(C[P][w+1]),d(C[P+1][w+1]),d(C[P+1][w]))}}function c(v){const y=new b;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function u(){const v=new b;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const x=p(v)/2/Math.PI+.5,T=m(v)/Math.PI+.5;o.push(x,1-T)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){const y=o[v+0],x=o[v+2],T=o[v+4],A=Math.max(y,x,T),C=Math.min(y,x,T);A>.9&&C<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,y){const x=v*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const v=new b,y=new b,x=new b,T=new b,A=new se,C=new se,P=new se;for(let S=0,w=0;S<r.length;S+=9,w+=6){v.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),A.set(o[w+0],o[w+1]),C.set(o[w+2],o[w+3]),P.set(o[w+4],o[w+5]),T.copy(v).add(y).add(x).divideScalar(3);const L=p(T);_(A,w+0,v,L),_(C,w+2,y,L),_(P,w+4,x,L)}}function _(v,y,x,T){T<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=T/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.vertices,e.indices,e.radius,e.details)}}class pu extends Ua{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new pu(e.radius,e.detail)}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new se:new b);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new b,s=[],r=[],o=[],a=new b,l=new Be;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new b)}r[0]=new b,o[0]=new b;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ye(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ye(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class mu extends ni{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new se){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class C0 extends mu{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function gu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Zo=new b,_c=new gu,xc=new gu,vc=new gu;class I0 extends ni{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new b){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Zo.subVectors(s[0],s[1]).add(s[0]),c=Zo);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Zo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Zo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),_c.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,p),xc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,p),vc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(_c.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),xc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),vc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(_c.calc(l),xc.calc(l),vc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new b().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ph(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function P0(i,e){const t=1-i;return t*t*e}function L0(i,e){return 2*(1-i)*i*e}function D0(i,e){return i*i*e}function Fr(i,e,t,n){return P0(i,e)+L0(i,t)+D0(i,n)}function N0(i,e){const t=1-i;return t*t*t*e}function U0(i,e){const t=1-i;return 3*t*t*i*e}function F0(i,e){return 3*(1-i)*i*i*e}function O0(i,e){return i*i*i*e}function Or(i,e,t,n,s){return N0(i,e)+U0(i,t)+F0(i,n)+O0(i,s)}class Rf extends ni{constructor(e=new se,t=new se,n=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new se){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Or(e,s.x,r.x,o.x,a.x),Or(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class z0 extends ni{constructor(e=new b,t=new b,n=new b,s=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new b){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Or(e,s.x,r.x,o.x,a.x),Or(e,s.y,r.y,o.y,a.y),Or(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cf extends ni{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class B0 extends ni{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class If extends ni{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Fr(e,s.x,r.x,o.x),Fr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class k0 extends ni{constructor(e=new b,t=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Fr(e,s.x,r.x,o.x),Fr(e,s.y,r.y,o.y),Fr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pf extends ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Ph(a,l.x,c.x,u.x,h.x),Ph(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new se().fromArray(s))}return this}}var Lh=Object.freeze({__proto__:null,ArcCurve:C0,CatmullRomCurve3:I0,CubicBezierCurve:Rf,CubicBezierCurve3:z0,EllipseCurve:mu,LineCurve:Cf,LineCurve3:B0,QuadraticBezierCurve:If,QuadraticBezierCurve3:k0,SplineCurve:Pf});class H0 extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Lh[s.type]().fromJSON(s))}return this}}class Dh extends H0{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Cf(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new If(this.currentPoint.clone(),new se(e,t),new se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Rf(this.currentPoint.clone(),new se(e,t),new se(n,s),new se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Pf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new mu(e,t,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class _u extends Dh{constructor(e){super(e),this.uuid=Tn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Dh().fromJSON(s))}return this}}function V0(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Lf(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Y0(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=t;d<s;d+=t){const f=i[d],g=i[d+1];f<a&&(a=f),g<l&&(l=g),f>u&&(u=f),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return no(r,o,t,a,l,c,0),o}function Lf(i,e,t,n,s){let r;if(s===sg(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Nh(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Nh(o/n|0,i[o],i[o+1],r);return r&&tr(r,r.next)&&(so(r),r=r.next),r}function rs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(tr(t,t.next)||wt(t.prev,t,t.next)===0)){if(so(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function no(i,e,t,n,s,r,o){if(!i)return;!o&&r&&j0(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?W0(i,n,s,r):G0(i)){e.push(l.i,i.i,c.i),so(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=X0(rs(i),e),no(i,e,t,n,s,r,2)):o===2&&q0(i,e,t,n,s,r):no(rs(i),e,t,n,s,r,1);break}}}function G0(i){const e=i.prev,t=i,n=i.next;if(wt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(s,r,o),h=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Pr(s,a,r,l,o,c,g.x,g.y)&&wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function W0(i,e,t,n){const s=i.prev,r=i,o=i.next;if(wt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(u,h,d),_=Math.max(a,l,c),p=Math.max(u,h,d),m=Dl(f,g,e,t,n),v=Dl(_,p,e,t,n);let y=i.prevZ,x=i.nextZ;for(;y&&y.z>=m&&x&&x.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&Pr(a,u,l,h,c,d,y.x,y.y)&&wt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&Pr(a,u,l,h,c,d,x.x,x.y)&&wt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&Pr(a,u,l,h,c,d,y.x,y.y)&&wt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&Pr(a,u,l,h,c,d,x.x,x.y)&&wt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function X0(i,e){let t=i;do{const n=t.prev,s=t.next.next;!tr(n,s)&&Nf(n,t,t.next,s)&&io(n,s)&&io(s,n)&&(e.push(n.i,t.i,s.i),so(t),so(t.next),t=i=s),t=t.next}while(t!==i);return rs(t)}function q0(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tg(o,a)){let l=Uf(o,a);o=rs(o,o.next),l=rs(l,l.next),no(o,e,t,n,s,r,0),no(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Y0(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Lf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(eg(c))}s.sort(K0);for(let r=0;r<s.length;r++)t=$0(s[r],t);return t}function K0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function $0(i,e){const t=Z0(i,e);if(!t)return e;const n=Uf(t,i);return rs(n,n.next),rs(t,t.next)}function Z0(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(tr(i,t))return t;do{if(tr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Df(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const h=Math.abs(s-t.y)/(n-t.x);io(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&J0(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function J0(i,e){return wt(i.prev,i,e.prev)<0&&wt(e.next,i,i.next)<0}function j0(i,e,t,n){let s=i;do s.z===0&&(s.z=Dl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Q0(s)}function Q0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Dl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function eg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Df(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Pr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Df(i,e,t,n,s,r,o,a)}function tg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ng(i,e)&&(io(i,e)&&io(e,i)&&ig(i,e)&&(wt(i.prev,i,e.prev)||wt(i,e.prev,e))||tr(i,e)&&wt(i.prev,i,i.next)>0&&wt(e.prev,e,e.next)>0)}function wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function tr(i,e){return i.x===e.x&&i.y===e.y}function Nf(i,e,t,n){const s=jo(wt(i,e,t)),r=jo(wt(i,e,n)),o=jo(wt(t,n,i)),a=jo(wt(t,n,e));return!!(s!==r&&o!==a||s===0&&Jo(i,t,e)||r===0&&Jo(i,n,e)||o===0&&Jo(t,i,n)||a===0&&Jo(t,e,n))}function Jo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function jo(i){return i>0?1:i<0?-1:0}function ng(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Nf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function io(i,e){return wt(i.prev,i,i.next)<0?wt(i,e,i.next)>=0&&wt(i,i.prev,e)>=0:wt(i,e,i.prev)<0||wt(i,i.next,e)<0}function ig(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Uf(i,e){const t=Nl(i.i,i.x,i.y),n=Nl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Nh(i,e,t,n){const s=Nl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function so(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sg(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class rg{static triangulate(e,t,n=2){return V0(e,t,n)}}class zr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return zr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Uh(e),Fh(n,e);let o=e.length;t.forEach(Uh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Fh(n,t[l]);const a=rg.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Uh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Fh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ro extends Ua{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ro(e.radius,e.detail)}}class mn extends Ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const v=m*d-o;for(let y=0;y<c;y++){const x=y*h-r;g.push(x,-v,0),_.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const y=v+c*m,x=v+c*(m+1),T=v+1+c*(m+1),A=v+1+c*m;f.push(y,x,A),f.push(x,T,A)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.width,e.height,e.widthSegments,e.heightSegments)}}class xu extends Ft{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/s,f=new b,g=new se;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){const m=r+p/n*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const p=_*(n+1);for(let m=0;m<n;m++){const v=m+p,y=v,x=v+n+1,T=v+n+2,A=v+1;a.push(y,x,A),a.push(x,T,A)}}this.setIndex(a),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Fa extends Ft{constructor(e=new _u([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(r,3)),this.setAttribute("uv",new tt(o,2));function c(u){const h=s.length/3,d=u.extractPoints(t);let f=d.shape;const g=d.holes;zr.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){const v=g[p];zr.isClockWise(v)===!0&&(g[p]=v.reverse())}const _=zr.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){const v=g[p];f=f.concat(v)}for(let p=0,m=f.length;p<m;p++){const v=f[p];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let p=0,m=_.length;p<m;p++){const v=_[p],y=v[0]+h,x=v[1]+h,T=v[2]+h;n.push(y,x,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return og(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new Fa(n,e.curveSegments)}}function og(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Ta extends Ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new b,d=new b,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const v=[],y=m/n;let x=0;m===0&&o===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){const A=T/t;h.x=-e*Math.cos(s+A*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(s+A*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),p.push(A+x,1-y),v.push(c++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){const y=u[m][v+1],x=u[m][v],T=u[m+1][v],A=u[m+1][v+1];(m!==0||o>0)&&f.push(y,x,A),(m!==n-1||l<Math.PI)&&f.push(x,T,A)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vu extends Ft{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new b,h=new b,d=new b;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,p=f/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(_),h.y=(e+t*Math.cos(p))*Math.sin(_),h.z=t*Math.sin(p),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(_,p,v),o.push(p,m,v)}this.setIndex(o),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class jt extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uf,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ii extends jt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ag extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cg extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Qo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function lg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ug(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Oh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Ff(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class go{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class hg extends go{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zs,endingEnd:zs}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bs:r=e,a=2*t-n;break;case ya:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bs:o=e,l=2*n-t;break;case ya:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,v=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*p+(1.5+f)*_+.5*g,x=f*p-f*_;for(let T=0;T!==a;++T)r[T]=m*o[u+T]+v*o[c+T]+y*o[l+T]+x*o[h+T];return r}}class Of extends go{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class dg extends go{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Gn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qo(t,this.TimeBufferType),this.values=Qo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qo(e.times,Array),values:Qo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new dg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Of(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zr:t=this.InterpolantFactoryMethodDiscrete;break;case Jr:t=this.InterpolantFactoryMethodLinear;break;case Wa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return Jr;case this.InterpolantFactoryMethodSmooth:return Wa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&lg(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Jr;class lr extends Gn{constructor(e,t,n){super(e,t,n)}}lr.prototype.ValueTypeName="bool";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=Zr;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;class zf extends Gn{constructor(e,t,n,s){super(e,t,n,s)}}zf.prototype.ValueTypeName="color";class nr extends Gn{constructor(e,t,n,s){super(e,t,n,s)}}nr.prototype.ValueTypeName="number";class fg extends go{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)zn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ir extends Gn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new fg(this.times,this.values,this.getValueSize(),e)}}ir.prototype.ValueTypeName="quaternion";ir.prototype.InterpolantFactoryMethodSmooth=void 0;class ur extends Gn{constructor(e,t,n){super(e,t,n)}}ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=Zr;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;class sr extends Gn{constructor(e,t,n,s){super(e,t,n,s)}}sr.prototype.ValueTypeName="vector";class Ul{constructor(e="",t=-1,n=[],s=ou){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Tn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(mg(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Gn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=ug(l);l=Oh(l,1,u),c=Oh(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new nr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const p=[],m=[];Ff(f,p,m,g),p.length!==0&&_.push(new h(d,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const p=[],m=[];for(let v=0;v!==d[g].morphTargets.length;++v){const y=d[g];p.push(y.time),m.push(y.morphTarget===_?1:0)}s.push(new nr(".morphTargetInfluence["+_+"]",p,m))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(sr,f+".position",d,"pos",s),n(ir,f+".quaternion",d,"rot",s),n(sr,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function pg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return nr;case"vector":case"vector2":case"vector3":case"vector4":return sr;case"color":return zf;case"quaternion":return ir;case"bool":case"boolean":return lr;case"string":return ur}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function mg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=pg(i.type);if(i.times===void 0){const t=[],n=[];Ff(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const di={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class gg{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const _g=new gg;class hr{constructor(e){this.manager=e!==void 0?e:_g,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}hr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ui={};class xg extends Error{constructor(e,t){super(e),this.response=t}}class Bf extends hr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=di.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:n,onError:s});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ui[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){v();function v(){h.read().then(({done:y,value:x})=>{if(y)m.close();else{_+=x.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,C=u.length;A<C;A++){const P=u[A];P.onProgress&&P.onProgress(T)}m.enqueue(x),v()}},y=>{m.error(y)})}}});return new Response(p)}else throw new xg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{di.add(`file:${e}`,c);const u=ui[e];delete ui[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=ui[e];if(u===void 0)throw this.manager.itemError(e),c;delete ui[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Is=new WeakMap;class vg extends hr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=di.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Is.get(o);h===void 0&&(h=[],Is.set(o,h)),h.push({onLoad:t,onError:s})}return o}const a=jr("img");function l(){u(),t&&t(this);const h=Is.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Is.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),di.remove(`image:${e}`);const d=Is.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}Is.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),di.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class yg extends hr{constructor(e){super(e)}load(e,t,n,s){const r=new pt,o=new vg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Oa extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Mg extends Oa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const yc=new Be,zh=new b,Bh=new b;class yu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new du,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(zh),Bh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bh),t.updateMatrixWorld(),yc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sg extends yu{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Qs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class wg extends Oa{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Sg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const kh=new Be,Ar=new b,Mc=new b;class Eg extends yu{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ar.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ar),Mc.copy(n.position),Mc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Mc),n.updateMatrixWorld(),s.makeTranslation(-Ar.x,-Ar.y,-Ar.z),kh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh,n.coordinateSystem,n.reversedDepth)}}class _o extends Oa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Eg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Mu extends vf{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Tg extends yu{constructor(){super(new Mu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kf extends Oa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new Tg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Br{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Sc=new WeakMap;class bg extends hr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=di.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Sc.has(o)===!0)s&&s(Sc.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return di.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Sc.set(l,c),di.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});di.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Ag extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Rg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Cg{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){zn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;zn.multiplyQuaternionsFlat(e,o,e,t,e,n),zn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const Su="\\[\\]\\.:\\/",Ig=new RegExp("["+Su+"]","g"),wu="[^"+Su+"]",Pg="[^"+Su.replace("\\.","")+"]",Lg=/((?:WC+[\/:])*)/.source.replace("WC",wu),Dg=/(WCOD+)?/.source.replace("WCOD",Pg),Ng=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wu),Ug=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wu),Fg=new RegExp("^"+Lg+Dg+Ng+Ug+"$"),Og=["material","materials","bones","map"];class zg{constructor(e,t,n){const s=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ig,"")}static parseTrackName(e){const t=Fg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Og.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=zg;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Bg{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:zs,endingEnd:zs};for(let c=0;c!==o;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=_m,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case vm:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case ou:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===xm;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===gm){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=Bs,s.endingEnd=Bs):(e?s.endingStart=this.zeroSlopeAtStart?Bs:zs:s.endingStart=ya,t?s.endingEnd=this.zeroSlopeAtEnd?Bs:zs:s.endingEnd=ya)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const kg=new Float32Array(1);class Hg extends cs{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const d=s[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;g=new Cg(rt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Of(new Float32Array(2),new Float32Array(2),1,kg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?Ul.findByName(s,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ou),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new Bg(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?Ul.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Hh=new Be;class Hf{constructor(e,t,n=0,s=1/0){this.ray=new cr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new lu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hh),this}intersectObject(e,t=!0,n=[]){return Fl(e,this,n,t),n.sort(Vh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Fl(e[s],this,n,t);return n.sort(Vh),n}}function Vh(i,e){return i.distance-e.distance}function Fl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Fl(r[o],e,t,!0)}}const Gh=new se;class Wh{constructor(e=new se(1/0,1/0),t=new se(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gh.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gh).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}function Xh(i,e,t,n){const s=Vg(n);switch(t){case of:return i*e;case nu:return i*e/s.components*s.byteLength;case iu:return i*e/s.components*s.byteLength;case cf:return i*e*2/s.components*s.byteLength;case su:return i*e*2/s.components*s.byteLength;case af:return i*e*3/s.components*s.byteLength;case En:return i*e*4/s.components*s.byteLength;case ru:return i*e*4/s.components*s.byteLength;case la:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:case da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nl:case sl:return Math.max(i,16)*Math.max(e,8)/4;case tl:case il:return Math.max(i,8)*Math.max(e,8)/2;case rl:case ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ul:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case pl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ml:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case xl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Sl:case wl:case El:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Tl:case bl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Al:case Rl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vg(i){switch(i){case ei:case tf:return{byteLength:1,components:1};case qr:case nf:case po:return{byteLength:2,components:1};case eu:case tu:return{byteLength:2,components:4};case is:case Ql:case On:return{byteLength:4,components:1};case sf:case rf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jl);function Vf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Gg(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Wg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xg=`#ifdef USE_ALPHAHASH
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
#endif`,qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zg=`#ifdef USE_AOMAP
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
#endif`,Jg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jg=`#ifdef USE_BATCHING
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
#endif`,Qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,i_=`#ifdef USE_IRIDESCENCE
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
#endif`,s_=`#ifdef USE_BUMPMAP
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
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,f_=`#define PI 3.141592653589793
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
} // validated`,p_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,m_=`vec3 transformedNormal = objectNormal;
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
#endif`,g_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,x_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y_="gl_FragColor = linearToOutputTexel( gl_FragColor );",M_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S_=`#ifdef USE_ENVMAP
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
#endif`,w_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,E_=`#ifdef USE_ENVMAP
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
#endif`,T_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b_=`#ifdef USE_ENVMAP
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
#endif`,A_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P_=`#ifdef USE_GRADIENTMAP
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
}`,L_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U_=`uniform bool receiveShadow;
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
#endif`,F_=`#ifdef USE_ENVMAP
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
#endif`,O_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H_=`PhysicalMaterial material;
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
#endif`,V_=`struct PhysicalMaterial {
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
}`,G_=`
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
#endif`,W_=`#if defined( RE_IndirectDiffuse )
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
#endif`,X_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Q_=`#if defined( USE_POINTS_UV )
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
#endif`,ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ix=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rx=`#ifdef USE_MORPHTARGETS
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
#endif`,ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ax=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dx=`#ifdef USE_NORMALMAP
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
#endif`,fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,px=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ex=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rx=`float getShadowMask() {
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
}`,Cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ix=`#ifdef USE_SKINNING
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
#endif`,Px=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lx=`#ifdef USE_SKINNING
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
#endif`,Dx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ux=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ox=`#ifdef USE_TRANSMISSION
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
#endif`,zx=`#ifdef USE_TRANSMISSION
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wx=`uniform sampler2D t2D;
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`#include <common>
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
}`,Zx=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jx=`#define DISTANCE
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
}`,jx=`#define DISTANCE
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
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tv=`uniform float scale;
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
}`,nv=`uniform vec3 diffuse;
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
}`,iv=`#include <common>
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
}`,sv=`uniform vec3 diffuse;
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
}`,rv=`#define LAMBERT
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
}`,ov=`#define LAMBERT
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
}`,av=`#define MATCAP
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
}`,cv=`#define MATCAP
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
}`,lv=`#define NORMAL
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
}`,uv=`#define NORMAL
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
}`,hv=`#define PHONG
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
}`,dv=`#define PHONG
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
}`,fv=`#define STANDARD
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
}`,pv=`#define STANDARD
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
}`,mv=`#define TOON
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
}`,gv=`#define TOON
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
}`,_v=`uniform float size;
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
}`,xv=`uniform vec3 diffuse;
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
}`,vv=`#include <common>
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
}`,yv=`uniform vec3 color;
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
}`,Mv=`uniform float rotation;
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
}`,Sv=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Wg,alphahash_pars_fragment:Xg,alphamap_fragment:qg,alphamap_pars_fragment:Yg,alphatest_fragment:Kg,alphatest_pars_fragment:$g,aomap_fragment:Zg,aomap_pars_fragment:Jg,batching_pars_vertex:jg,batching_vertex:Qg,begin_vertex:e_,beginnormal_vertex:t_,bsdfs:n_,iridescence_fragment:i_,bumpmap_pars_fragment:s_,clipping_planes_fragment:r_,clipping_planes_pars_fragment:o_,clipping_planes_pars_vertex:a_,clipping_planes_vertex:c_,color_fragment:l_,color_pars_fragment:u_,color_pars_vertex:h_,color_vertex:d_,common:f_,cube_uv_reflection_fragment:p_,defaultnormal_vertex:m_,displacementmap_pars_vertex:g_,displacementmap_vertex:__,emissivemap_fragment:x_,emissivemap_pars_fragment:v_,colorspace_fragment:y_,colorspace_pars_fragment:M_,envmap_fragment:S_,envmap_common_pars_fragment:w_,envmap_pars_fragment:E_,envmap_pars_vertex:T_,envmap_physical_pars_fragment:F_,envmap_vertex:b_,fog_vertex:A_,fog_pars_vertex:R_,fog_fragment:C_,fog_pars_fragment:I_,gradientmap_pars_fragment:P_,lightmap_pars_fragment:L_,lights_lambert_fragment:D_,lights_lambert_pars_fragment:N_,lights_pars_begin:U_,lights_toon_fragment:O_,lights_toon_pars_fragment:z_,lights_phong_fragment:B_,lights_phong_pars_fragment:k_,lights_physical_fragment:H_,lights_physical_pars_fragment:V_,lights_fragment_begin:G_,lights_fragment_maps:W_,lights_fragment_end:X_,logdepthbuf_fragment:q_,logdepthbuf_pars_fragment:Y_,logdepthbuf_pars_vertex:K_,logdepthbuf_vertex:$_,map_fragment:Z_,map_pars_fragment:J_,map_particle_fragment:j_,map_particle_pars_fragment:Q_,metalnessmap_fragment:ex,metalnessmap_pars_fragment:tx,morphinstance_vertex:nx,morphcolor_vertex:ix,morphnormal_vertex:sx,morphtarget_pars_vertex:rx,morphtarget_vertex:ox,normal_fragment_begin:ax,normal_fragment_maps:cx,normal_pars_fragment:lx,normal_pars_vertex:ux,normal_vertex:hx,normalmap_pars_fragment:dx,clearcoat_normal_fragment_begin:fx,clearcoat_normal_fragment_maps:px,clearcoat_pars_fragment:mx,iridescence_pars_fragment:gx,opaque_fragment:_x,packing:xx,premultiplied_alpha_fragment:vx,project_vertex:yx,dithering_fragment:Mx,dithering_pars_fragment:Sx,roughnessmap_fragment:wx,roughnessmap_pars_fragment:Ex,shadowmap_pars_fragment:Tx,shadowmap_pars_vertex:bx,shadowmap_vertex:Ax,shadowmask_pars_fragment:Rx,skinbase_vertex:Cx,skinning_pars_vertex:Ix,skinning_vertex:Px,skinnormal_vertex:Lx,specularmap_fragment:Dx,specularmap_pars_fragment:Nx,tonemapping_fragment:Ux,tonemapping_pars_fragment:Fx,transmission_fragment:Ox,transmission_pars_fragment:zx,uv_pars_fragment:Bx,uv_pars_vertex:kx,uv_vertex:Hx,worldpos_vertex:Vx,background_vert:Gx,background_frag:Wx,backgroundCube_vert:Xx,backgroundCube_frag:qx,cube_vert:Yx,cube_frag:Kx,depth_vert:$x,depth_frag:Zx,distanceRGBA_vert:Jx,distanceRGBA_frag:jx,equirect_vert:Qx,equirect_frag:ev,linedashed_vert:tv,linedashed_frag:nv,meshbasic_vert:iv,meshbasic_frag:sv,meshlambert_vert:rv,meshlambert_frag:ov,meshmatcap_vert:av,meshmatcap_frag:cv,meshnormal_vert:lv,meshnormal_frag:uv,meshphong_vert:hv,meshphong_frag:dv,meshphysical_vert:fv,meshphysical_frag:pv,meshtoon_vert:mv,meshtoon_frag:gv,points_vert:_v,points_frag:xv,shadow_vert:vv,shadow_frag:yv,sprite_vert:Mv,sprite_frag:Sv},ce={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Kn={basic:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new pe(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Zt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Zt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new pe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Zt([ce.points,ce.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Zt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Zt([ce.common,ce.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Zt([ce.sprite,ce.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Zt([ce.common,ce.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Zt([ce.lights,ce.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Kn.physical={uniforms:Zt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ea={r:0,b:0,g:0},Wi=new ti,wv=new Be;function Ev(i,e,t,n,s,r,o){const a=new pe(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const T=g(y);T===null?m(a,l):T&&T.isColor&&(m(T,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,x){const T=g(x);T&&(T.isCubeTexture||T.mapping===Da)?(u===void 0&&(u=new Ee(new bn(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:er(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Wi.copy(x.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wv.makeRotationFromEuler(Wi)),u.material.toneMapped=Qe.getTransfer(T.colorSpace)!==ft,(h!==T||d!==T.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Ee(new mn(2,2),new xi({name:"BackgroundMaterial",uniforms:er(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(T.colorSpace)!==ft,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(ea,_f(i)),n.buffers.color.setClear(ea.r,ea.g,ea.b,x,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:_,addToRenderList:p,dispose:v}}function Tv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(w,L,O,H,X){let G=!1;const q=h(H,O,L);r!==q&&(r=q,c(r.object)),G=f(w,H,O,X),G&&g(w,H,O,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,x(w,L,O,H),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function u(w){return i.deleteVertexArray(w)}function h(w,L,O){const H=O.wireframe===!0;let X=n[w.id];X===void 0&&(X={},n[w.id]=X);let G=X[L.id];G===void 0&&(G={},X[L.id]=G);let q=G[H];return q===void 0&&(q=d(l()),G[H]=q),q}function d(w){const L=[],O=[],H=[];for(let X=0;X<t;X++)L[X]=0,O[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:H,object:w,attributes:{},index:null}}function f(w,L,O,H){const X=r.attributes,G=L.attributes;let q=0;const Z=O.getAttributes();for(const I in Z)if(Z[I].location>=0){const fe=X[I];let Ae=G[I];if(Ae===void 0&&(I==="instanceMatrix"&&w.instanceMatrix&&(Ae=w.instanceMatrix),I==="instanceColor"&&w.instanceColor&&(Ae=w.instanceColor)),fe===void 0||fe.attribute!==Ae||Ae&&fe.data!==Ae.data)return!0;q++}return r.attributesNum!==q||r.index!==H}function g(w,L,O,H){const X={},G=L.attributes;let q=0;const Z=O.getAttributes();for(const I in Z)if(Z[I].location>=0){let fe=G[I];fe===void 0&&(I==="instanceMatrix"&&w.instanceMatrix&&(fe=w.instanceMatrix),I==="instanceColor"&&w.instanceColor&&(fe=w.instanceColor));const Ae={};Ae.attribute=fe,fe&&fe.data&&(Ae.data=fe.data),X[I]=Ae,q++}r.attributes=X,r.attributesNum=q,r.index=H}function _(){const w=r.newAttributes;for(let L=0,O=w.length;L<O;L++)w[L]=0}function p(w){m(w,0)}function m(w,L){const O=r.newAttributes,H=r.enabledAttributes,X=r.attributeDivisors;O[w]=1,H[w]===0&&(i.enableVertexAttribArray(w),H[w]=1),X[w]!==L&&(i.vertexAttribDivisor(w,L),X[w]=L)}function v(){const w=r.newAttributes,L=r.enabledAttributes;for(let O=0,H=L.length;O<H;O++)L[O]!==w[O]&&(i.disableVertexAttribArray(O),L[O]=0)}function y(w,L,O,H,X,G,q){q===!0?i.vertexAttribIPointer(w,L,O,X,G):i.vertexAttribPointer(w,L,O,H,X,G)}function x(w,L,O,H){_();const X=H.attributes,G=O.getAttributes(),q=L.defaultAttributeValues;for(const Z in G){const I=G[Z];if(I.location>=0){let ie=X[Z];if(ie===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(ie=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(ie=w.instanceColor)),ie!==void 0){const fe=ie.normalized,Ae=ie.itemSize,qe=e.get(ie);if(qe===void 0)continue;const Je=qe.buffer,ht=qe.type,je=qe.bytesPerElement,K=ht===i.INT||ht===i.UNSIGNED_INT||ie.gpuType===Ql;if(ie.isInterleavedBufferAttribute){const J=ie.data,ge=J.stride,Ne=ie.offset;if(J.isInstancedInterleavedBuffer){for(let Te=0;Te<I.locationSize;Te++)m(I.location+Te,J.meshPerAttribute);w.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Te=0;Te<I.locationSize;Te++)p(I.location+Te);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let Te=0;Te<I.locationSize;Te++)y(I.location+Te,Ae/I.locationSize,ht,fe,ge*je,(Ne+Ae/I.locationSize*Te)*je,K)}else{if(ie.isInstancedBufferAttribute){for(let J=0;J<I.locationSize;J++)m(I.location+J,ie.meshPerAttribute);w.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let J=0;J<I.locationSize;J++)p(I.location+J);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let J=0;J<I.locationSize;J++)y(I.location+J,Ae/I.locationSize,ht,fe,Ae*je,Ae/I.locationSize*J*je,K)}}else if(q!==void 0){const fe=q[Z];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(I.location,fe);break;case 3:i.vertexAttrib3fv(I.location,fe);break;case 4:i.vertexAttrib4fv(I.location,fe);break;default:i.vertexAttrib1fv(I.location,fe)}}}}v()}function T(){P();for(const w in n){const L=n[w];for(const O in L){const H=L[O];for(const X in H)u(H[X].object),delete H[X];delete L[O]}delete n[w]}}function A(w){if(n[w.id]===void 0)return;const L=n[w.id];for(const O in L){const H=L[O];for(const X in H)u(H[X].object),delete H[X];delete L[O]}delete n[w.id]}function C(w){for(const L in n){const O=n[L];if(O[w.id]===void 0)continue;const H=O[w.id];for(const X in H)u(H[X].object),delete H[X];delete O[w.id]}}function P(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function bv(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Av(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==En&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===po&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ei&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==On&&!P)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:T,maxSamples:A}}function Rv(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ki,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const v=r?0:n,y=v*4;let x=m.clippingState||null;l.value=x,x=u(g,d,y,f);for(let T=0;T!==y;++T)x[T]=t[T];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Cv(i){let e=new WeakMap;function t(o,a){return a===Qc?o.mapping=Js:a===el&&(o.mapping=js),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qc||a===el)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new g0(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ks=4,qh=[.125,.215,.35,.446,.526,.582],ji=20,wc=new Mu,Yh=new pe;let Ec=null,Tc=0,bc=0,Ac=!1;const $i=(1+Math.sqrt(5))/2,Ps=1/$i,Kh=[new b(-$i,Ps,0),new b($i,Ps,0),new b(-Ps,0,$i),new b(Ps,0,$i),new b(0,$i,-Ps),new b(0,$i,Ps),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],Iv=new b;class $h{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=Iv}=r;Ec=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ec,Tc,bc),this._renderer.xr.enabled=Ac,e.scissorTest=!1,ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ec=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:po,format:En,colorSpace:en,depthBuffer:!1},s=Zh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pv(r)),this._blurMaterial=Lv(r,e,t)}return s}_compileMaterial(e){const t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,wc)}_sceneToCubeUV(e,t,n,s,r){const l=new Jt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Yh),h.toneMapping=Di,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new Gt({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),p=new Ee(new bn,_);let m=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,m=!0):(_.color.copy(Yh),m=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));const T=this._cubeSize;ta(s,x*T,y>2?T:0,T,T),h.setRenderTarget(s),m&&h.render(p,l),h.render(e,l)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Js||e.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ta(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,wc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Kh[(s-r-1)%Kh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ee(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ji-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):ji;p>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ji}`);const m=[];let v=0;for(let C=0;C<ji;++C){const P=C/_,S=Math.exp(-P*P/2);m.push(S),C===0?v+=S:C<p&&(v+=2*S)}for(let C=0;C<m.length;C++)m[C]=m[C]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[s],T=3*x*(s>y-ks?s-y+ks:0),A=4*(this._cubeSize-x);ta(t,T,A,3*x,2*x),l.setRenderTarget(t),l.render(h,wc)}}function Pv(i){const e=[],t=[],n=[];let s=i;const r=i-ks+1+qh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-ks?l=qh[o-i+ks-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,p=2,m=1,v=new Float32Array(_*g*f),y=new Float32Array(p*g*f),x=new Float32Array(m*g*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,P=A>2?0:-1,S=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];v.set(S,_*g*A),y.set(d,p*g*A);const w=[A,A,A,A,A,A];x.set(w,m*g*A)}const T=new Ft;T.setAttribute("position",new Qt(v,_)),T.setAttribute("uv",new Qt(y,p)),T.setAttribute("faceIndex",new Qt(x,m)),e.push(T),s>ks&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zh(i,e,t){const n=new ss(i,e,t);return n.texture.mapping=Da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ta(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Lv(i,e,t){const n=new Float32Array(ji),s=new b(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Jh(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function jh(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Eu(){return`

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
	`}function Dv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qc||l===el,u=l===Js||l===js;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new $h(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new $h(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Nv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Qr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Uv(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){const T=v[y+0],A=v[y+1],C=v[y+2];d.push(T,A,A,C,C,T)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const T=y+0,A=y+1,C=y+2;d.push(T,A,A,C,C,T)}}else return;const p=new(df(d)?gf:mf)(d,1);p.version=_;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Fv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function h(d,f,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let m=0;for(let v=0;v<g;v++)m+=f[v]*_[v];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ov(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function zv(i,e,t){const n=new WeakMap,s=new nt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let w=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",w)};var f=w;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),p===!0&&(x=3);let T=a.attributes.position.count*x,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*A*4*h),P=new ff(C,T,A,h);P.type=On,P.needsUpdate=!0;const S=x*4;for(let L=0;L<h;L++){const O=m[L],H=v[L],X=y[L],G=T*A*4*L;for(let q=0;q<O.count;q++){const Z=q*S;g===!0&&(s.fromBufferAttribute(O,q),C[G+Z+0]=s.x,C[G+Z+1]=s.y,C[G+Z+2]=s.z,C[G+Z+3]=0),_===!0&&(s.fromBufferAttribute(H,q),C[G+Z+4]=s.x,C[G+Z+5]=s.y,C[G+Z+6]=s.z,C[G+Z+7]=0),p===!0&&(s.fromBufferAttribute(X,q),C[G+Z+8]=s.x,C[G+Z+9]=s.y,C[G+Z+10]=s.z,C[G+Z+11]=X.itemSize===4?s.w:1)}}d={count:h,texture:P,size:new se(T,A)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Bv(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Gf=new pt,Qh=new bf(1,1),Wf=new ff,Xf=new e0,qf=new yf,ed=[],td=[],nd=new Float32Array(16),id=new Float32Array(9),sd=new Float32Array(4);function dr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ed[s];if(r===void 0&&(r=new Float32Array(s),ed[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function za(i,e){let t=td[e];t===void 0&&(t=new Int32Array(e),td[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function kv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function Vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function Gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function Wv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;sd.set(n),i.uniformMatrix2fv(this.addr,!1,sd),Ut(t,n)}}function Xv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;id.set(n),i.uniformMatrix3fv(this.addr,!1,id),Ut(t,n)}}function qv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;nd.set(n),i.uniformMatrix4fv(this.addr,!1,nd),Ut(t,n)}}function Yv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Kv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function $v(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function Zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function Jv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function Qv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function ey(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function ty(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qh.compareFunction=hf,r=Qh):r=Gf,t.setTexture2D(e||r,s)}function ny(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Xf,s)}function iy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||qf,s)}function sy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Wf,s)}function ry(i){switch(i){case 5126:return kv;case 35664:return Hv;case 35665:return Vv;case 35666:return Gv;case 35674:return Wv;case 35675:return Xv;case 35676:return qv;case 5124:case 35670:return Yv;case 35667:case 35671:return Kv;case 35668:case 35672:return $v;case 35669:case 35673:return Zv;case 5125:return Jv;case 36294:return jv;case 36295:return Qv;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ny;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return sy}}function oy(i,e){i.uniform1fv(this.addr,e)}function ay(i,e){const t=dr(e,this.size,2);i.uniform2fv(this.addr,t)}function cy(i,e){const t=dr(e,this.size,3);i.uniform3fv(this.addr,t)}function ly(i,e){const t=dr(e,this.size,4);i.uniform4fv(this.addr,t)}function uy(i,e){const t=dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hy(i,e){const t=dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function dy(i,e){const t=dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fy(i,e){i.uniform1iv(this.addr,e)}function py(i,e){i.uniform2iv(this.addr,e)}function my(i,e){i.uniform3iv(this.addr,e)}function gy(i,e){i.uniform4iv(this.addr,e)}function _y(i,e){i.uniform1uiv(this.addr,e)}function xy(i,e){i.uniform2uiv(this.addr,e)}function vy(i,e){i.uniform3uiv(this.addr,e)}function yy(i,e){i.uniform4uiv(this.addr,e)}function My(i,e,t){const n=this.cache,s=e.length,r=za(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Gf,r[o])}function Sy(i,e,t){const n=this.cache,s=e.length,r=za(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Xf,r[o])}function wy(i,e,t){const n=this.cache,s=e.length,r=za(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||qf,r[o])}function Ey(i,e,t){const n=this.cache,s=e.length,r=za(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Wf,r[o])}function Ty(i){switch(i){case 5126:return oy;case 35664:return ay;case 35665:return cy;case 35666:return ly;case 35674:return uy;case 35675:return hy;case 35676:return dy;case 5124:case 35670:return fy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return gy;case 5125:return _y;case 36294:return xy;case 36295:return vy;case 36296:return yy;case 35678:case 36198:case 36298:case 36306:case 35682:return My;case 35679:case 36299:case 36307:return Sy;case 35680:case 36300:case 36308:case 36293:return wy;case 36289:case 36303:case 36311:case 36292:return Ey}}class by{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ry(t.type)}}class Ay{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ty(t.type)}}class Ry{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Rc=/(\w+)(\])?(\[|\.)?/g;function rd(i,e){i.seq.push(e),i.map[e.id]=e}function Cy(i,e,t){const n=i.name,s=n.length;for(Rc.lastIndex=0;;){const r=Rc.exec(n),o=Rc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){rd(t,c===void 0?new by(a,i,e):new Ay(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Ry(a),rd(t,h)),t=h}}}class fa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Cy(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function od(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Iy=37297;let Py=0;function Ly(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ad=new Ge;function Dy(i){Qe._getMatrix(ad,Qe.workingColorSpace,i);const e=`mat3( ${ad.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Ma:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function cd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Ly(i.getShaderSource(e),a)}else return r}function Ny(i,e){const t=Dy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Uy(i,e){let t;switch(e){case lm:t="Linear";break;case um:t="Reinhard";break;case hm:t="Cineon";break;case jd:t="ACESFilmic";break;case fm:t="AgX";break;case pm:t="Neutral";break;case dm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const na=new b;function Fy(){Qe.getLuminanceCoefficients(na);const i=na.x.toFixed(4),e=na.y.toFixed(4),t=na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Oy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function zy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function By(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Lr(i){return i!==""}function ld(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ud(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ky=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(i){return i.replace(ky,Vy)}const Hy=new Map;function Vy(i,e){let t=Xe[e];if(t===void 0){const n=Hy.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ol(t)}const Gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(i){return i.replace(Gy,Wy)}function Wy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dd(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$d?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function qy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Js:case js:e="ENVMAP_TYPE_CUBE";break;case Da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yy(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===js&&(e="ENVMAP_MODE_REFRACTION"),e}function Ky(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jd:e="ENVMAP_BLENDING_MULTIPLY";break;case am:e="ENVMAP_BLENDING_MIX";break;case cm:e="ENVMAP_BLENDING_ADD";break}return e}function $y(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Zy(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Xy(t),c=qy(t),u=Yy(t),h=Ky(t),d=$y(t),f=Oy(t),g=zy(r),_=s.createProgram();let p,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Lr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Lr).join(`
`),m.length>0&&(m+=`
`)):(p=[dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),m=[dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Di?Uy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Ny("linearToOutputTexel",t.outputColorSpace),Fy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lr).join(`
`)),o=Ol(o),o=ld(o,t),o=ud(o,t),a=Ol(a),a=ld(a,t),a=ud(a,t),o=hd(o),a=hd(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=v+p+o,x=v+m+a,T=od(s,s.VERTEX_SHADER,y),A=od(s,s.FRAGMENT_SHADER,x);s.attachShader(_,T),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(L){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(T)||"",X=s.getShaderInfoLog(A)||"",G=O.trim(),q=H.trim(),Z=X.trim();let I=!0,ie=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,A);else{const fe=cd(s,T,"vertex"),Ae=cd(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+fe+`
`+Ae)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(q===""||Z==="")&&(ie=!1);ie&&(L.diagnostics={runnable:I,programLog:G,vertexShader:{log:q,prefix:p},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(T),s.deleteShader(A),P=new fa(s,_),S=By(s,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(_,Iy)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Py++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let Jy=0;class jy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Qy(e),t.set(e,n)),n}}class Qy{constructor(e){this.id=Jy++,this.code=e,this.usedTimes=0}}function e1(i,e,t,n,s,r,o){const a=new lu,l=new jy,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,w,L,O,H){const X=O.fog,G=H.geometry,q=S.isMeshStandardMaterial?O.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),I=Z&&Z.mapping===Da?Z.image.height:null,ie=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const fe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ae=fe!==void 0?fe.length:0;let qe=0;G.morphAttributes.position!==void 0&&(qe=1),G.morphAttributes.normal!==void 0&&(qe=2),G.morphAttributes.color!==void 0&&(qe=3);let Je,ht,je,K;if(ie){const st=Kn[ie];Je=st.vertexShader,ht=st.fragmentShader}else Je=S.vertexShader,ht=S.fragmentShader,l.update(S),je=l.getVertexShaderID(S),K=l.getFragmentShaderID(S);const J=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Ne=H.isInstancedMesh===!0,Te=H.isBatchedMesh===!0,Ke=!!S.map,Wt=!!S.matcap,D=!!Z,vt=!!S.aoMap,He=!!S.lightMap,Fe=!!S.bumpMap,Se=!!S.normalMap,yt=!!S.displacementMap,we=!!S.emissiveMap,We=!!S.metalnessMap,Ot=!!S.roughnessMap,At=S.anisotropy>0,R=S.clearcoat>0,M=S.dispersion>0,B=S.iridescence>0,Y=S.sheen>0,j=S.transmission>0,W=At&&!!S.anisotropyMap,Ie=R&&!!S.clearcoatMap,re=R&&!!S.clearcoatNormalMap,be=R&&!!S.clearcoatRoughnessMap,Re=B&&!!S.iridescenceMap,te=B&&!!S.iridescenceThicknessMap,de=Y&&!!S.sheenColorMap,Ue=Y&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,ue=!!S.specularColorMap,Ve=!!S.specularIntensityMap,U=j&&!!S.transmissionMap,ne=j&&!!S.thicknessMap,ae=!!S.gradientMap,ve=!!S.alphaMap,Q=S.alphaTest>0,$=!!S.alphaHash,Me=!!S.extensions;let ke=Di;S.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ke=i.toneMapping);const _t={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:Je,fragmentShader:ht,defines:S.defines,customVertexShaderID:je,customFragmentShaderID:K,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Te,batchingColor:Te&&H._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&H.instanceColor!==null,instancingMorph:Ne&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:en,alphaToCoverage:!!S.alphaToCoverage,map:Ke,matcap:Wt,envMap:D,envMapMode:D&&Z.mapping,envMapCubeUVHeight:I,aoMap:vt,lightMap:He,bumpMap:Fe,normalMap:Se,displacementMap:d&&yt,emissiveMap:we,normalMapObjectSpace:Se&&S.normalMapType===wm,normalMapTangentSpace:Se&&S.normalMapType===uf,metalnessMap:We,roughnessMap:Ot,anisotropy:At,anisotropyMap:W,clearcoat:R,clearcoatMap:Ie,clearcoatNormalMap:re,clearcoatRoughnessMap:be,dispersion:M,iridescence:B,iridescenceMap:Re,iridescenceThicknessMap:te,sheen:Y,sheenColorMap:de,sheenRoughnessMap:Ue,specularMap:Ce,specularColorMap:ue,specularIntensityMap:Ve,transmission:j,transmissionMap:U,thicknessMap:ne,gradientMap:ae,opaque:S.transparent===!1&&S.blending===Ws&&S.alphaToCoverage===!1,alphaMap:ve,alphaTest:Q,alphaHash:$,combine:S.combine,mapUv:Ke&&_(S.map.channel),aoMapUv:vt&&_(S.aoMap.channel),lightMapUv:He&&_(S.lightMap.channel),bumpMapUv:Fe&&_(S.bumpMap.channel),normalMapUv:Se&&_(S.normalMap.channel),displacementMapUv:yt&&_(S.displacementMap.channel),emissiveMapUv:we&&_(S.emissiveMap.channel),metalnessMapUv:We&&_(S.metalnessMap.channel),roughnessMapUv:Ot&&_(S.roughnessMap.channel),anisotropyMapUv:W&&_(S.anisotropyMap.channel),clearcoatMapUv:Ie&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&_(S.sheenRoughnessMap.channel),specularMapUv:Ce&&_(S.specularMap.channel),specularColorMapUv:ue&&_(S.specularColorMap.channel),specularIntensityMapUv:Ve&&_(S.specularIntensityMap.channel),transmissionMapUv:U&&_(S.transmissionMap.channel),thicknessMapUv:ne&&_(S.thicknessMap.channel),alphaMapUv:ve&&_(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Se||At),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!G.attributes.uv&&(Ke||ve),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:H.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:qe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ke&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===ft,decodeVideoTextureEmissive:we&&S.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(S.emissiveMap.colorSpace)===ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Vt,flipSided:S.side===sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Me&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&S.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function m(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)w.push(L),w.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(v(w,S),y(w,S),w.push(i.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function v(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function y(S,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const w=g[S.type];let L;if(w){const O=Kn[w];L=xf.clone(O.uniforms)}else L=S.uniforms;return L}function T(S,w){let L;for(let O=0,H=u.length;O<H;O++){const X=u[O];if(X.cacheKey===w){L=X,++L.usedTimes;break}}return L===void 0&&(L=new Zy(i,w,S,r),u.push(L)),L}function A(S){if(--S.usedTimes===0){const w=u.indexOf(S);u[w]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:T,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:P}}function t1(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function n1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function fd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pd(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,_,p){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},i[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function a(h,d,f,g,_,p){const m=o(h,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(h,d,f,g,_,p){const m=o(h,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||n1),n.length>1&&n.sort(d||fd),s.length>1&&s.sort(d||fd)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function i1(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new pd,i.set(n,[o])):s>=r.length?(o=new pd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function s1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new pe};break;case"SpotLight":t={position:new b,direction:new b,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new b,halfWidth:new b,halfHeight:new b};break}return i[e.id]=t,t}}}function r1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let o1=0;function a1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function c1(i){const e=new s1,t=r1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new b);const s=new b,r=new Be,o=new Be;function a(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,v=0,y=0,x=0,T=0,A=0,C=0;c.sort(a1);for(let S=0,w=c.length;S<w;S++){const L=c[S],O=L.color,H=L.intensity,X=L.distance,G=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=O.r*H,h+=O.g*H,d+=O.b*H;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],H);C++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,I=t.get(L);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,n.directionalShadow[f]=I,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=L.shadow.matrix,v++}n.directional[f]=q,f++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(O).multiplyScalar(H),q.distance=X,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[_]=q;const Z=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,Z.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[_]=Z.matrix,L.castShadow){const I=t.get(L);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,n.spotShadow[_]=I,n.spotShadowMap[_]=G,x++}_++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(O).multiplyScalar(H),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=q,p++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const Z=L.shadow,I=t.get(L);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,I.shadowCameraNear=Z.camera.near,I.shadowCameraFar=Z.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=q,g++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(H),q.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[m]=q,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==v||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==T||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=T,P.numLightProbes=C,n.version=o1++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const y=c[m];if(y.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),h++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function md(i){const e=new c1(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function l1(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new md(i),e.set(s,[a])):r>=o.length?(a=new md(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const u1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h1=`uniform sampler2D shadow_pass;
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
}`;function d1(i,e,t){let n=new du;const s=new se,r=new se,o=new nt,a=new ag({depthPacking:Sm}),l=new cg,c={},u=t.maxTextureSize,h={[_i]:sn,[sn]:_i,[Vt]:Vt},d=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:u1,fragmentShader:h1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ft;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ee(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$d;let m=this.type;this.render=function(A,C,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),w=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Li),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const H=m!==hi&&this.type===hi,X=m===hi&&this.type!==hi;for(let G=0,q=A.length;G<q;G++){const Z=A[G],I=Z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const ie=I.getFrameExtents();if(s.multiply(ie),r.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,I.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,I.mapSize.y=r.y)),I.map===null||H===!0||X===!0){const Ae=this.type!==hi?{minFilter:bt,magFilter:bt}:{};I.map!==null&&I.map.dispose(),I.map=new ss(s.x,s.y,Ae),I.map.texture.name=Z.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const fe=I.getViewportCount();for(let Ae=0;Ae<fe;Ae++){const qe=I.getViewport(Ae);o.set(r.x*qe.x,r.y*qe.y,r.x*qe.z,r.y*qe.w),O.viewport(o),I.updateMatrices(Z,Ae),n=I.getFrustum(),x(C,P,I.camera,Z,this.type)}I.isPointLightShadow!==!0&&this.type===hi&&v(I,P),I.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(S,w,L)};function v(A,C){const P=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ss(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,P,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,P,f,_,null)}function y(A,C,P,S){let w=null;const L=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)w=L;else if(w=P.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=w.uuid,H=C.uuid;let X=c[O];X===void 0&&(X={},c[O]=X);let G=X[H];G===void 0&&(G=w.clone(),X[H]=G,C.addEventListener("dispose",T)),w=G}if(w.visible=C.visible,w.wireframe=C.wireframe,S===hi?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:h[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,P.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const O=i.properties.get(w);O.light=P}return w}function x(A,C,P,S,w){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===hi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const H=e.update(A),X=A.material;if(Array.isArray(X)){const G=H.groups;for(let q=0,Z=G.length;q<Z;q++){const I=G[q],ie=X[I.materialIndex];if(ie&&ie.visible){const fe=y(A,ie,S,w);A.onBeforeShadow(i,A,C,P,H,fe,I),i.renderBufferDirect(P,null,H,fe,A,I),A.onAfterShadow(i,A,C,P,H,fe,I)}}}else if(X.visible){const G=y(A,X,S,w);A.onBeforeShadow(i,A,C,P,H,G,null),i.renderBufferDirect(P,null,H,G,A,null),A.onAfterShadow(i,A,C,P,H,G,null)}}const O=A.children;for(let H=0,X=O.length;H<X;H++)x(O[H],C,P,S,w)}function T(A){A.target.removeEventListener("dispose",T);for(const P in c){const S=c[P],w=A.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}const f1={[qc]:Yc,[Kc]:Jc,[$c]:jc,[Zs]:Zc,[Yc]:qc,[Jc]:Kc,[jc]:$c,[Zc]:Zs};function p1(i,e){function t(){let U=!1;const ne=new nt;let ae=null;const ve=new nt(0,0,0,0);return{setMask:function(Q){ae!==Q&&!U&&(i.colorMask(Q,Q,Q,Q),ae=Q)},setLocked:function(Q){U=Q},setClear:function(Q,$,Me,ke,_t){_t===!0&&(Q*=ke,$*=ke,Me*=ke),ne.set(Q,$,Me,ke),ve.equals(ne)===!1&&(i.clearColor(Q,$,Me,ke),ve.copy(ne))},reset:function(){U=!1,ae=null,ve.set(-1,0,0,0)}}}function n(){let U=!1,ne=!1,ae=null,ve=null,Q=null;return{setReversed:function($){if(ne!==$){const Me=e.get("EXT_clip_control");$?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),ne=$;const ke=Q;Q=null,this.setClear(ke)}},getReversed:function(){return ne},setTest:function($){$?J(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function($){ae!==$&&!U&&(i.depthMask($),ae=$)},setFunc:function($){if(ne&&($=f1[$]),ve!==$){switch($){case qc:i.depthFunc(i.NEVER);break;case Yc:i.depthFunc(i.ALWAYS);break;case Kc:i.depthFunc(i.LESS);break;case Zs:i.depthFunc(i.LEQUAL);break;case $c:i.depthFunc(i.EQUAL);break;case Zc:i.depthFunc(i.GEQUAL);break;case Jc:i.depthFunc(i.GREATER);break;case jc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=$}},setLocked:function($){U=$},setClear:function($){Q!==$&&(ne&&($=1-$),i.clearDepth($),Q=$)},reset:function(){U=!1,ae=null,ve=null,Q=null,ne=!1}}}function s(){let U=!1,ne=null,ae=null,ve=null,Q=null,$=null,Me=null,ke=null,_t=null;return{setTest:function(st){U||(st?J(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(st){ne!==st&&!U&&(i.stencilMask(st),ne=st)},setFunc:function(st,si,Wn){(ae!==st||ve!==si||Q!==Wn)&&(i.stencilFunc(st,si,Wn),ae=st,ve=si,Q=Wn)},setOp:function(st,si,Wn){($!==st||Me!==si||ke!==Wn)&&(i.stencilOp(st,si,Wn),$=st,Me=si,ke=Wn)},setLocked:function(st){U=st},setClear:function(st){_t!==st&&(i.clearStencil(st),_t=st)},reset:function(){U=!1,ne=null,ae=null,ve=null,Q=null,$=null,Me=null,ke=null,_t=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,p=null,m=null,v=null,y=null,x=null,T=null,A=null,C=new pe(0,0,0),P=0,S=!1,w=null,L=null,O=null,H=null,X=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Z=0;const I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(I)[1]),q=Z>=1):I.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),q=Z>=2);let ie=null,fe={};const Ae=i.getParameter(i.SCISSOR_BOX),qe=i.getParameter(i.VIEWPORT),Je=new nt().fromArray(Ae),ht=new nt().fromArray(qe);function je(U,ne,ae,ve){const Q=new Uint8Array(4),$=i.createTexture();i.bindTexture(U,$),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Me=0;Me<ae;Me++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(ne+Me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return $}const K={};K[i.TEXTURE_2D]=je(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(Zs),Fe(!1),Se(Wu),J(i.CULL_FACE),vt(Li);function J(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function ge(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Ne(U,ne){return h[U]!==ne?(i.bindFramebuffer(U,ne),h[U]=ne,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ne),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Te(U,ne){let ae=f,ve=!1;if(U){ae=d.get(ne),ae===void 0&&(ae=[],d.set(ne,ae));const Q=U.textures;if(ae.length!==Q.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let $=0,Me=Q.length;$<Me;$++)ae[$]=i.COLOR_ATTACHMENT0+$;ae.length=Q.length,ve=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,ve=!0);ve&&i.drawBuffers(ae)}function Ke(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const Wt={[Ji]:i.FUNC_ADD,[Wp]:i.FUNC_SUBTRACT,[Xp]:i.FUNC_REVERSE_SUBTRACT};Wt[qp]=i.MIN,Wt[Yp]=i.MAX;const D={[Kp]:i.ZERO,[$p]:i.ONE,[Zp]:i.SRC_COLOR,[Wc]:i.SRC_ALPHA,[nm]:i.SRC_ALPHA_SATURATE,[em]:i.DST_COLOR,[jp]:i.DST_ALPHA,[Jp]:i.ONE_MINUS_SRC_COLOR,[Xc]:i.ONE_MINUS_SRC_ALPHA,[tm]:i.ONE_MINUS_DST_COLOR,[Qp]:i.ONE_MINUS_DST_ALPHA,[im]:i.CONSTANT_COLOR,[sm]:i.ONE_MINUS_CONSTANT_COLOR,[rm]:i.CONSTANT_ALPHA,[om]:i.ONE_MINUS_CONSTANT_ALPHA};function vt(U,ne,ae,ve,Q,$,Me,ke,_t,st){if(U===Li){_===!0&&(ge(i.BLEND),_=!1);return}if(_===!1&&(J(i.BLEND),_=!0),U!==Gp){if(U!==p||st!==S){if((m!==Ji||x!==Ji)&&(i.blendEquation(i.FUNC_ADD),m=Ji,x=Ji),st)switch(U){case Ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xu:i.blendFunc(i.ONE,i.ONE);break;case qu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case qu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,y=null,T=null,A=null,C.set(0,0,0),P=0,p=U,S=st}return}Q=Q||ne,$=$||ae,Me=Me||ve,(ne!==m||Q!==x)&&(i.blendEquationSeparate(Wt[ne],Wt[Q]),m=ne,x=Q),(ae!==v||ve!==y||$!==T||Me!==A)&&(i.blendFuncSeparate(D[ae],D[ve],D[$],D[Me]),v=ae,y=ve,T=$,A=Me),(ke.equals(C)===!1||_t!==P)&&(i.blendColor(ke.r,ke.g,ke.b,_t),C.copy(ke),P=_t),p=U,S=!1}function He(U,ne){U.side===Vt?ge(i.CULL_FACE):J(i.CULL_FACE);let ae=U.side===sn;ne&&(ae=!ae),Fe(ae),U.blending===Ws&&U.transparent===!1?vt(Li):vt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const ve=U.stencilWrite;a.setTest(ve),ve&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),we(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(U){w!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),w=U)}function Se(U){U!==Hp?(J(i.CULL_FACE),U!==L&&(U===Wu?i.cullFace(i.BACK):U===Vp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),L=U}function yt(U){U!==O&&(q&&i.lineWidth(U),O=U)}function we(U,ne,ae){U?(J(i.POLYGON_OFFSET_FILL),(H!==ne||X!==ae)&&(i.polygonOffset(ne,ae),H=ne,X=ae)):ge(i.POLYGON_OFFSET_FILL)}function We(U){U?J(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function Ot(U){U===void 0&&(U=i.TEXTURE0+G-1),ie!==U&&(i.activeTexture(U),ie=U)}function At(U,ne,ae){ae===void 0&&(ie===null?ae=i.TEXTURE0+G-1:ae=ie);let ve=fe[ae];ve===void 0&&(ve={type:void 0,texture:void 0},fe[ae]=ve),(ve.type!==U||ve.texture!==ne)&&(ie!==ae&&(i.activeTexture(ae),ie=ae),i.bindTexture(U,ne||K[U]),ve.type=U,ve.texture=ne)}function R(){const U=fe[ie];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(U){Je.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Je.copy(U))}function Ue(U){ht.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ht.copy(U))}function Ce(U,ne){let ae=c.get(ne);ae===void 0&&(ae=new WeakMap,c.set(ne,ae));let ve=ae.get(U);ve===void 0&&(ve=i.getUniformBlockIndex(ne,U.name),ae.set(U,ve))}function ue(U,ne){const ve=c.get(ne).get(U);l.get(ne)!==ve&&(i.uniformBlockBinding(ne,ve,U.__bindingPointIndex),l.set(ne,ve))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ie=null,fe={},h={},d=new WeakMap,f=[],g=null,_=!1,p=null,m=null,v=null,y=null,x=null,T=null,A=null,C=new pe(0,0,0),P=0,S=!1,w=null,L=null,O=null,H=null,X=null,Je.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:ge,bindFramebuffer:Ne,drawBuffers:Te,useProgram:Ke,setBlending:vt,setMaterial:He,setFlipSided:Fe,setCullFace:Se,setLineWidth:yt,setPolygonOffset:we,setScissorTest:We,activeTexture:Ot,bindTexture:At,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:B,texImage2D:Re,texImage3D:te,updateUBOMapping:Ce,uniformBlockBinding:ue,texStorage2D:re,texStorage3D:be,texSubImage2D:Y,texSubImage3D:j,compressedTexSubImage2D:W,compressedTexSubImage3D:Ie,scissor:de,viewport:Ue,reset:Ve}}function m1(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return f?new OffscreenCanvas(R,M):jr("canvas")}function _(R,M,B){let Y=1;const j=At(R);if((j.width>B||j.height>B)&&(Y=B/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const W=Math.floor(Y*j.width),Ie=Math.floor(Y*j.height);h===void 0&&(h=g(W,Ie));const re=M?g(W,Ie):h;return re.width=W,re.height=Ie,re.getContext("2d").drawImage(R,0,0,W,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+W+"x"+Ie+")."),re}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){i.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,M,B,Y,j=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let W=M;if(M===i.RED&&(B===i.FLOAT&&(W=i.R32F),B===i.HALF_FLOAT&&(W=i.R16F),B===i.UNSIGNED_BYTE&&(W=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.R8UI),B===i.UNSIGNED_SHORT&&(W=i.R16UI),B===i.UNSIGNED_INT&&(W=i.R32UI),B===i.BYTE&&(W=i.R8I),B===i.SHORT&&(W=i.R16I),B===i.INT&&(W=i.R32I)),M===i.RG&&(B===i.FLOAT&&(W=i.RG32F),B===i.HALF_FLOAT&&(W=i.RG16F),B===i.UNSIGNED_BYTE&&(W=i.RG8)),M===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.RG8UI),B===i.UNSIGNED_SHORT&&(W=i.RG16UI),B===i.UNSIGNED_INT&&(W=i.RG32UI),B===i.BYTE&&(W=i.RG8I),B===i.SHORT&&(W=i.RG16I),B===i.INT&&(W=i.RG32I)),M===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.RGB8UI),B===i.UNSIGNED_SHORT&&(W=i.RGB16UI),B===i.UNSIGNED_INT&&(W=i.RGB32UI),B===i.BYTE&&(W=i.RGB8I),B===i.SHORT&&(W=i.RGB16I),B===i.INT&&(W=i.RGB32I)),M===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),B===i.UNSIGNED_INT&&(W=i.RGBA32UI),B===i.BYTE&&(W=i.RGBA8I),B===i.SHORT&&(W=i.RGBA16I),B===i.INT&&(W=i.RGBA32I)),M===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),M===i.RGBA){const Ie=j?Ma:Qe.getTransfer(Y);B===i.FLOAT&&(W=i.RGBA32F),B===i.HALF_FLOAT&&(W=i.RGBA16F),B===i.UNSIGNED_BYTE&&(W=Ie===ft?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function x(R,M){let B;return R?M===null||M===is||M===Yr?B=i.DEPTH24_STENCIL8:M===On?B=i.DEPTH32F_STENCIL8:M===qr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===is||M===Yr?B=i.DEPTH_COMPONENT24:M===On?B=i.DEPTH_COMPONENT32F:M===qr&&(B=i.DEPTH_COMPONENT16),B}function T(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==bt&&R.minFilter!==It?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){const M=R.target;M.removeEventListener("dispose",A),P(M),M.isVideoTexture&&u.delete(M)}function C(R){const M=R.target;M.removeEventListener("dispose",C),w(M)}function P(R){const M=n.get(R);if(M.__webglInit===void 0)return;const B=R.source,Y=d.get(B);if(Y){const j=Y[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(R),Object.keys(Y).length===0&&d.delete(B)}n.remove(R)}function S(R){const M=n.get(R);i.deleteTexture(M.__webglTexture);const B=R.source,Y=d.get(B);delete Y[M.__cacheKey],o.memory.textures--}function w(R){const M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let j=0;j<M.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(M.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)i.deleteFramebuffer(M.__webglFramebuffer[Y]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=R.textures;for(let Y=0,j=B.length;Y<j;Y++){const W=n.get(B[Y]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(B[Y])}n.remove(R)}let L=0;function O(){L=0}function H(){const R=L;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function X(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function G(R,M){const B=n.get(R);if(R.isVideoTexture&&We(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,R,M);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function q(R,M){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){K(B,R,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function Z(R,M){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){K(B,R,M);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function I(R,M){const B=n.get(R);if(R.version>0&&B.__version!==R.version){J(B,R,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}const ie={[Fn]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},fe={[bt]:i.NEAREST,[ef]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[ca]:i.LINEAR_MIPMAP_NEAREST,[pn]:i.LINEAR_MIPMAP_LINEAR},Ae={[Em]:i.NEVER,[Im]:i.ALWAYS,[Tm]:i.LESS,[hf]:i.LEQUAL,[bm]:i.EQUAL,[Cm]:i.GEQUAL,[Am]:i.GREATER,[Rm]:i.NOTEQUAL};function qe(R,M){if(M.type===On&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===It||M.magFilter===ca||M.magFilter===Ir||M.magFilter===pn||M.minFilter===It||M.minFilter===ca||M.minFilter===Ir||M.minFilter===pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ie[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ie[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ie[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,fe[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,fe[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===bt||M.minFilter!==Ir&&M.minFilter!==pn||M.type===On&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Je(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));const Y=M.source;let j=d.get(Y);j===void 0&&(j={},d.set(Y,j));const W=X(M);if(W!==R.__cacheKey){j[W]===void 0&&(j[W]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),j[W].usedTimes++;const Ie=j[R.__cacheKey];Ie!==void 0&&(j[R.__cacheKey].usedTimes--,Ie.usedTimes===0&&S(M)),R.__cacheKey=W,R.__webglTexture=j[W].texture}return B}function ht(R,M,B){return Math.floor(Math.floor(R/B)/M)}function je(R,M,B,Y){const W=R.updateRanges;if(W.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,B,Y,M.data);else{W.sort((te,de)=>te.start-de.start);let Ie=0;for(let te=1;te<W.length;te++){const de=W[Ie],Ue=W[te],Ce=de.start+de.count,ue=ht(Ue.start,M.width,4),Ve=ht(de.start,M.width,4);Ue.start<=Ce+1&&ue===Ve&&ht(Ue.start+Ue.count-1,M.width,4)===ue?de.count=Math.max(de.count,Ue.start+Ue.count-de.start):(++Ie,W[Ie]=Ue)}W.length=Ie+1;const re=i.getParameter(i.UNPACK_ROW_LENGTH),be=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let te=0,de=W.length;te<de;te++){const Ue=W[te],Ce=Math.floor(Ue.start/4),ue=Math.ceil(Ue.count/4),Ve=Ce%M.width,U=Math.floor(Ce/M.width),ne=ue,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Ve,U,ne,ae,B,Y,M.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,be),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function K(R,M,B){let Y=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=i.TEXTURE_3D);const j=Je(R,M),W=M.source;t.bindTexture(Y,R.__webglTexture,i.TEXTURE0+B);const Ie=n.get(W);if(W.version!==Ie.__version||j===!0){t.activeTexture(i.TEXTURE0+B);const re=Qe.getPrimaries(Qe.workingColorSpace),be=M.colorSpace===Ii?null:Qe.getPrimaries(M.colorSpace),Re=M.colorSpace===Ii||re===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let te=_(M.image,!1,s.maxTextureSize);te=Ot(M,te);const de=r.convert(M.format,M.colorSpace),Ue=r.convert(M.type);let Ce=y(M.internalFormat,de,Ue,M.colorSpace,M.isVideoTexture);qe(Y,M);let ue;const Ve=M.mipmaps,U=M.isVideoTexture!==!0,ne=Ie.__version===void 0||j===!0,ae=W.dataReady,ve=T(M,te);if(M.isDepthTexture)Ce=x(M.format===$r,M.type),ne&&(U?t.texStorage2D(i.TEXTURE_2D,1,Ce,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Ce,te.width,te.height,0,de,Ue,null));else if(M.isDataTexture)if(Ve.length>0){U&&ne&&t.texStorage2D(i.TEXTURE_2D,ve,Ce,Ve[0].width,Ve[0].height);for(let Q=0,$=Ve.length;Q<$;Q++)ue=Ve[Q],U?ae&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ue.width,ue.height,de,Ue,ue.data):t.texImage2D(i.TEXTURE_2D,Q,Ce,ue.width,ue.height,0,de,Ue,ue.data);M.generateMipmaps=!1}else U?(ne&&t.texStorage2D(i.TEXTURE_2D,ve,Ce,te.width,te.height),ae&&je(M,te,de,Ue)):t.texImage2D(i.TEXTURE_2D,0,Ce,te.width,te.height,0,de,Ue,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){U&&ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ce,Ve[0].width,Ve[0].height,te.depth);for(let Q=0,$=Ve.length;Q<$;Q++)if(ue=Ve[Q],M.format!==En)if(de!==null)if(U){if(ae)if(M.layerUpdates.size>0){const Me=Xh(ue.width,ue.height,M.format,M.type);for(const ke of M.layerUpdates){const _t=ue.data.subarray(ke*Me/ue.data.BYTES_PER_ELEMENT,(ke+1)*Me/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,ke,ue.width,ue.height,1,de,_t)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ue.width,ue.height,te.depth,de,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Ce,ue.width,ue.height,te.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ue.width,ue.height,te.depth,de,Ue,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Ce,ue.width,ue.height,te.depth,0,de,Ue,ue.data)}else{U&&ne&&t.texStorage2D(i.TEXTURE_2D,ve,Ce,Ve[0].width,Ve[0].height);for(let Q=0,$=Ve.length;Q<$;Q++)ue=Ve[Q],M.format!==En?de!==null?U?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ue.width,ue.height,de,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Ce,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ae&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ue.width,ue.height,de,Ue,ue.data):t.texImage2D(i.TEXTURE_2D,Q,Ce,ue.width,ue.height,0,de,Ue,ue.data)}else if(M.isDataArrayTexture)if(U){if(ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ce,te.width,te.height,te.depth),ae)if(M.layerUpdates.size>0){const Q=Xh(te.width,te.height,M.format,M.type);for(const $ of M.layerUpdates){const Me=te.data.subarray($*Q/te.data.BYTES_PER_ELEMENT,($+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,te.width,te.height,1,de,Ue,Me)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,de,Ue,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,te.width,te.height,te.depth,0,de,Ue,te.data);else if(M.isData3DTexture)U?(ne&&t.texStorage3D(i.TEXTURE_3D,ve,Ce,te.width,te.height,te.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,de,Ue,te.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,te.width,te.height,te.depth,0,de,Ue,te.data);else if(M.isFramebufferTexture){if(ne)if(U)t.texStorage2D(i.TEXTURE_2D,ve,Ce,te.width,te.height);else{let Q=te.width,$=te.height;for(let Me=0;Me<ve;Me++)t.texImage2D(i.TEXTURE_2D,Me,Ce,Q,$,0,de,Ue,null),Q>>=1,$>>=1}}else if(Ve.length>0){if(U&&ne){const Q=At(Ve[0]);t.texStorage2D(i.TEXTURE_2D,ve,Ce,Q.width,Q.height)}for(let Q=0,$=Ve.length;Q<$;Q++)ue=Ve[Q],U?ae&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,de,Ue,ue):t.texImage2D(i.TEXTURE_2D,Q,Ce,de,Ue,ue);M.generateMipmaps=!1}else if(U){if(ne){const Q=At(te);t.texStorage2D(i.TEXTURE_2D,ve,Ce,Q.width,Q.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Ue,te)}else t.texImage2D(i.TEXTURE_2D,0,Ce,de,Ue,te);p(M)&&m(Y),Ie.__version=W.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function J(R,M,B){if(M.image.length!==6)return;const Y=Je(R,M),j=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);const W=n.get(j);if(j.version!==W.__version||Y===!0){t.activeTexture(i.TEXTURE0+B);const Ie=Qe.getPrimaries(Qe.workingColorSpace),re=M.colorSpace===Ii?null:Qe.getPrimaries(M.colorSpace),be=M.colorSpace===Ii||Ie===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Re=M.isCompressedTexture||M.image[0].isCompressedTexture,te=M.image[0]&&M.image[0].isDataTexture,de=[];for(let $=0;$<6;$++)!Re&&!te?de[$]=_(M.image[$],!0,s.maxCubemapSize):de[$]=te?M.image[$].image:M.image[$],de[$]=Ot(M,de[$]);const Ue=de[0],Ce=r.convert(M.format,M.colorSpace),ue=r.convert(M.type),Ve=y(M.internalFormat,Ce,ue,M.colorSpace),U=M.isVideoTexture!==!0,ne=W.__version===void 0||Y===!0,ae=j.dataReady;let ve=T(M,Ue);qe(i.TEXTURE_CUBE_MAP,M);let Q;if(Re){U&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Ve,Ue.width,Ue.height);for(let $=0;$<6;$++){Q=de[$].mipmaps;for(let Me=0;Me<Q.length;Me++){const ke=Q[Me];M.format!==En?Ce!==null?U?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,0,0,ke.width,ke.height,Ce,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,Ve,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,0,0,ke.width,ke.height,Ce,ue,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,Ve,ke.width,ke.height,0,Ce,ue,ke.data)}}}else{if(Q=M.mipmaps,U&&ne){Q.length>0&&ve++;const $=At(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Ve,$.width,$.height)}for(let $=0;$<6;$++)if(te){U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,de[$].width,de[$].height,Ce,ue,de[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ve,de[$].width,de[$].height,0,Ce,ue,de[$].data);for(let Me=0;Me<Q.length;Me++){const _t=Q[Me].image[$].image;U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,0,0,_t.width,_t.height,Ce,ue,_t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,Ve,_t.width,_t.height,0,Ce,ue,_t.data)}}else{U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ce,ue,de[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ve,Ce,ue,de[$]);for(let Me=0;Me<Q.length;Me++){const ke=Q[Me];U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,0,0,Ce,ue,ke.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,Ve,Ce,ue,ke.image[$])}}}p(M)&&m(i.TEXTURE_CUBE_MAP),W.__version=j.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ge(R,M,B,Y,j,W){const Ie=r.convert(B.format,B.colorSpace),re=r.convert(B.type),be=y(B.internalFormat,Ie,re,B.colorSpace),Re=n.get(M),te=n.get(B);if(te.__renderTarget=M,!Re.__hasExternalTextures){const de=Math.max(1,M.width>>W),Ue=Math.max(1,M.height>>W);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,W,be,de,Ue,M.depth,0,Ie,re,null):t.texImage2D(j,W,be,de,Ue,0,Ie,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),we(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,te.__webglTexture,0,yt(M)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,te.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(R,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){const Y=M.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,W=x(M.stencilBuffer,j),Ie=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=yt(M);we(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,W,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,W,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,W,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,R)}else{const Y=M.textures;for(let j=0;j<Y.length;j++){const W=Y[j],Ie=r.convert(W.format,W.colorSpace),re=r.convert(W.type),be=y(W.internalFormat,Ie,re,W.colorSpace),Re=yt(M);B&&we(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,be,M.width,M.height):we(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,be,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,be,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const j=Y.__webglTexture,W=yt(M);if(M.depthTexture.format===Kr)we(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(M.depthTexture.format===$r)we(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ke(R){const M=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=Y}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Y=R.texture.mipmaps;Y&&Y.length>0?Te(M.__webglFramebuffer[0],R):Te(M.__webglFramebuffer,R)}else if(B){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=i.createRenderbuffer(),Ne(M.__webglDepthbuffer[Y],R,!1);else{const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=M.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,W)}}else{const Y=R.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Ne(M.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,W)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(R,M,B){const Y=n.get(R);M!==void 0&&ge(Y.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ke(R)}function D(R){const M=R.texture,B=n.get(R),Y=n.get(M);R.addEventListener("dispose",C);const j=R.textures,W=R.isWebGLCubeRenderTarget===!0,Ie=j.length>1;if(Ie||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=M.version,o.memory.textures++),W){B.__webglFramebuffer=[];for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[re]=[];for(let be=0;be<M.mipmaps.length;be++)B.__webglFramebuffer[re][be]=i.createFramebuffer()}else B.__webglFramebuffer[re]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let re=0;re<M.mipmaps.length;re++)B.__webglFramebuffer[re]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let re=0,be=j.length;re<be;re++){const Re=n.get(j[re]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&we(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let re=0;re<j.length;re++){const be=j[re];B.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[re]);const Re=r.convert(be.format,be.colorSpace),te=r.convert(be.type),de=y(be.internalFormat,Re,te,be.colorSpace,R.isXRRenderTarget===!0),Ue=yt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,de,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,B.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),qe(i.TEXTURE_CUBE_MAP,M);for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)ge(B.__webglFramebuffer[re][be],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,be);else ge(B.__webglFramebuffer[re],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(M)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let re=0,be=j.length;re<be;re++){const Re=j[re],te=n.get(Re);let de=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,te.__webglTexture),qe(de,Re),ge(B.__webglFramebuffer,R,Re,i.COLOR_ATTACHMENT0+re,de,0),p(Re)&&m(de)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,Y.__webglTexture),qe(re,M),M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)ge(B.__webglFramebuffer[be],R,M,i.COLOR_ATTACHMENT0,re,be);else ge(B.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,re,0);p(M)&&m(re),t.unbindTexture()}R.depthBuffer&&Ke(R)}function vt(R){const M=R.textures;for(let B=0,Y=M.length;B<Y;B++){const j=M[B];if(p(j)){const W=v(R),Ie=n.get(j).__webglTexture;t.bindTexture(W,Ie),m(W),t.unbindTexture()}}}const He=[],Fe=[];function Se(R){if(R.samples>0){if(we(R)===!1){const M=R.textures,B=R.width,Y=R.height;let j=i.COLOR_BUFFER_BIT;const W=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(R),re=M.length>1;if(re)for(let Re=0;Re<M.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const be=R.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Re]);const te=n.get(M[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,B,Y,0,0,B,Y,j,i.NEAREST),l===!0&&(He.length=0,Fe.length=0,He.push(i.COLOR_ATTACHMENT0+Re),R.depthBuffer&&R.resolveDepthBuffer===!1&&(He.push(W),Fe.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let Re=0;Re<M.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Re]);const te=n.get(M[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function yt(R){return Math.min(s.maxSamples,R.samples)}function we(R){const M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function We(R){const M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function Ot(R,M){const B=R.colorSpace,Y=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==en&&B!==Ii&&(Qe.getTransfer(B)===ft?(Y!==En||j!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function At(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=I,this.rebindTextures=Wt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=we}function g1(i,e){function t(n,s=Ii){let r;const o=Qe.getTransfer(s);if(n===ei)return i.UNSIGNED_BYTE;if(n===eu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===tf)return i.BYTE;if(n===nf)return i.SHORT;if(n===qr)return i.UNSIGNED_SHORT;if(n===Ql)return i.INT;if(n===is)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===po)return i.HALF_FLOAT;if(n===of)return i.ALPHA;if(n===af)return i.RGB;if(n===En)return i.RGBA;if(n===Kr)return i.DEPTH_COMPONENT;if(n===$r)return i.DEPTH_STENCIL;if(n===nu)return i.RED;if(n===iu)return i.RED_INTEGER;if(n===cf)return i.RG;if(n===su)return i.RG_INTEGER;if(n===ru)return i.RGBA_INTEGER;if(n===la||n===ua||n===ha||n===da)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tl||n===nl||n===il||n===sl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rl||n===ol||n===al)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rl||n===ol)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===al)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cl||n===ll||n===ul||n===hl||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===yl||n===Ml)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ul)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ml)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_l)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ml)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sl||n===wl||n===El)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Sl)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===El)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tl||n===bl||n===Al||n===Rl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Al)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const _1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x1=`
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

}`;class v1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Af(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xi({vertexShader:_1,fragmentShader:x1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y1 extends cs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",p=new v1,m={},v=t.getContextAttributes();let y=null,x=null;const T=[],A=[],C=new se;let P=null;const S=new Jt;S.viewport=new nt;const w=new Jt;w.viewport=new nt;const L=[S,w],O=new Ag;let H=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=T[K];return J===void 0&&(J=new hc,T[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=T[K];return J===void 0&&(J=new hc,T[K]=J),J.getGripSpace()},this.getHand=function(K){let J=T[K];return J===void 0&&(J=new hc,T[K]=J),J.getHandSpace()};function G(K){const J=A.indexOf(K.inputSource);if(J===-1)return;const ge=T[J];ge!==void 0&&(ge.update(K.inputSource,K.frame,c||o),ge.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",Z);for(let K=0;K<T.length;K++){const J=A[K];J!==null&&(A[K]=null,T[K].disconnect(J))}H=null,X=null,p.reset();for(const K in m)delete m[K];e.setRenderTarget(y),f=null,d=null,h=null,s=null,x=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",q),s.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Ne=null,Te=null;v.depth&&(Te=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=v.stencil?$r:Kr,Ne=v.stencil?Yr:is);const Ke={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ke),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new ss(d.textureWidth,d.textureHeight,{format:En,type:ei,depthTexture:new bf(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ge={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ss(f.framebufferWidth,f.framebufferHeight,{format:En,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Z(K){for(let J=0;J<K.removed.length;J++){const ge=K.removed[J],Ne=A.indexOf(ge);Ne>=0&&(A[Ne]=null,T[Ne].disconnect(ge))}for(let J=0;J<K.added.length;J++){const ge=K.added[J];let Ne=A.indexOf(ge);if(Ne===-1){for(let Ke=0;Ke<T.length;Ke++)if(Ke>=A.length){A.push(ge),Ne=Ke;break}else if(A[Ke]===null){A[Ke]=ge,Ne=Ke;break}if(Ne===-1)break}const Te=T[Ne];Te&&Te.connect(ge)}}const I=new b,ie=new b;function fe(K,J,ge){I.setFromMatrixPosition(J.matrixWorld),ie.setFromMatrixPosition(ge.matrixWorld);const Ne=I.distanceTo(ie),Te=J.projectionMatrix.elements,Ke=ge.projectionMatrix.elements,Wt=Te[14]/(Te[10]-1),D=Te[14]/(Te[10]+1),vt=(Te[9]+1)/Te[5],He=(Te[9]-1)/Te[5],Fe=(Te[8]-1)/Te[0],Se=(Ke[8]+1)/Ke[0],yt=Wt*Fe,we=Wt*Se,We=Ne/(-Fe+Se),Ot=We*-Fe;if(J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ot),K.translateZ(We),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Te[10]===-1)K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const At=Wt+We,R=D+We,M=yt-Ot,B=we+(Ne-Ot),Y=vt*D/R*At,j=He*D/R*At;K.projectionMatrix.makePerspective(M,B,Y,j,At,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ae(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let J=K.near,ge=K.far;p.texture!==null&&(p.depthNear>0&&(J=p.depthNear),p.depthFar>0&&(ge=p.depthFar)),O.near=w.near=S.near=J,O.far=w.far=S.far=ge,(H!==O.near||X!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),H=O.near,X=O.far),O.layers.mask=K.layers.mask|6,S.layers.mask=O.layers.mask&3,w.layers.mask=O.layers.mask&5;const Ne=K.parent,Te=O.cameras;Ae(O,Ne);for(let Ke=0;Ke<Te.length;Ke++)Ae(Te[Ke],Ne);Te.length===2?fe(O,S,w):O.projectionMatrix.copy(S.projectionMatrix),qe(K,O,Ne)};function qe(K,J,ge){ge===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(ge.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Qs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(K){return m[K]};let Je=null;function ht(K,J){if(u=J.getViewerPose(c||o),g=J,u!==null){const ge=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ne=!1;ge.length!==O.cameras.length&&(O.cameras.length=0,Ne=!0);for(let D=0;D<ge.length;D++){const vt=ge[D];let He=null;if(f!==null)He=f.getViewport(vt);else{const Se=h.getViewSubImage(d,vt);He=Se.viewport,D===0&&(e.setRenderTargetTextures(x,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(x))}let Fe=L[D];Fe===void 0&&(Fe=new Jt,Fe.layers.enable(D),Fe.viewport=new nt,L[D]=Fe),Fe.matrix.fromArray(vt.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(vt.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(He.x,He.y,He.width,He.height),D===0&&(O.matrix.copy(Fe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ne===!0&&O.cameras.push(Fe)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const D=h.getDepthInformation(ge[0]);D&&D.isValid&&D.texture&&p.init(D,s.renderState)}if(Te&&Te.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let D=0;D<ge.length;D++){const vt=ge[D].camera;if(vt){let He=m[vt];He||(He=new Af,m[vt]=He);const Fe=h.getCameraImage(vt);He.sourceTexture=Fe}}}}for(let ge=0;ge<T.length;ge++){const Ne=A[ge],Te=T[ge];Ne!==null&&Te!==void 0&&Te.update(Ne,J,c||o)}Je&&Je(K,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const je=new Vf;je.setAnimationLoop(ht),this.setAnimationLoop=function(K){Je=K},this.dispose=function(){}}}const Xi=new ti,M1=new Be;function S1(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,_f(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,y,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===sn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===sn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m),y=v.envMap,x=v.envMapRotation;y&&(p.envMap.value=y,Xi.copy(x),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),p.envMapRotation.value.setFromMatrix4(M1.makeRotationFromEuler(Xi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function w1(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function c(v,y){let x=s[v.id];x===void 0&&(g(v),x=u(v),s[v.id]=x,v.addEventListener("dispose",p));const T=y.program;n.updateUBOMapping(v,T);const A=e.render.frame;r[v.id]!==A&&(d(v),r[v.id]=A)}function u(v){const y=h();v.__bindingPointIndex=y;const x=i.createBuffer(),T=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=s[v.id],x=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,C=x.length;A<C;A++){const P=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,w=P.length;S<w;S++){const L=P[S];if(f(L,A,S,T)===!0){const O=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let G=0;G<H.length;G++){const q=H[G],Z=_(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,O+X,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,X),X+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,x,T){const A=v.value,C=y+"_"+x;if(T[C]===void 0)return typeof A=="number"||typeof A=="boolean"?T[C]=A:T[C]=A.clone(),!0;{const P=T[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return T[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(v){const y=v.uniforms;let x=0;const T=16;for(let C=0,P=y.length;C<P;C++){const S=Array.isArray(y[C])?y[C]:[y[C]];for(let w=0,L=S.length;w<L;w++){const O=S[w],H=Array.isArray(O.value)?O.value:[O.value];for(let X=0,G=H.length;X<G;X++){const q=H[X],Z=_(q),I=x%T,ie=I%Z.boundary,fe=I+ie;x+=ie,fe!==0&&T-fe<Z.storage&&(x+=T-fe),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=Z.storage}}}const A=x%T;return A>0&&(x+=T-A),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function p(v){const y=v.target;y.removeEventListener("dispose",p);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class E1{constructor(e={}){const{canvas:t=Ym(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,m=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let T=!1;this._outputColorSpace=ut;let A=0,C=0,P=null,S=-1,w=null;const L=new nt,O=new nt;let H=null;const X=new pe(0);let G=0,q=t.width,Z=t.height,I=1,ie=null,fe=null;const Ae=new nt(0,0,q,Z),qe=new nt(0,0,q,Z);let Je=!1;const ht=new du;let je=!1,K=!1;const J=new Be,ge=new b,Ne=new nt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function Wt(){return P===null?I:1}let D=n;function vt(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jl}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",Q,!1),D===null){const F="webgl2";if(D=vt(F,E),D===null)throw vt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let He,Fe,Se,yt,we,We,Ot,At,R,M,B,Y,j,W,Ie,re,be,Re,te,de,Ue,Ce,ue,Ve;function U(){He=new Nv(D),He.init(),Ce=new g1(D,He),Fe=new Av(D,He,e,Ce),Se=new p1(D,He),Fe.reversedDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),yt=new Ov(D),we=new t1,We=new m1(D,He,Se,we,Fe,Ce,yt),Ot=new Cv(x),At=new Dv(x),R=new Gg(D),ue=new Tv(D,R),M=new Uv(D,R,yt,ue),B=new Bv(D,M,R,yt),te=new zv(D,Fe,We),re=new Rv(we),Y=new e1(x,Ot,At,He,Fe,ue,re),j=new S1(x,we),W=new i1,Ie=new l1(He),Re=new Ev(x,Ot,At,Se,B,f,l),be=new d1(x,B,Fe),Ve=new w1(D,yt,Fe,Se),de=new bv(D,He,yt),Ue=new Fv(D,He,yt),yt.programs=Y.programs,x.capabilities=Fe,x.extensions=He,x.properties=we,x.renderLists=W,x.shadowMap=be,x.state=Se,x.info=yt}U();const ne=new y1(x,D);this.xr=ne,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=He.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=He.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(E){E!==void 0&&(I=E,this.setSize(q,Z,!1))},this.getSize=function(E){return E.set(q,Z)},this.setSize=function(E,F,k=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,Z=F,t.width=Math.floor(E*I),t.height=Math.floor(F*I),k===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(q*I,Z*I).floor()},this.setDrawingBufferSize=function(E,F,k){q=E,Z=F,I=k,t.width=Math.floor(E*k),t.height=Math.floor(F*k),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(Ae)},this.setViewport=function(E,F,k,V){E.isVector4?Ae.set(E.x,E.y,E.z,E.w):Ae.set(E,F,k,V),Se.viewport(L.copy(Ae).multiplyScalar(I).round())},this.getScissor=function(E){return E.copy(qe)},this.setScissor=function(E,F,k,V){E.isVector4?qe.set(E.x,E.y,E.z,E.w):qe.set(E,F,k,V),Se.scissor(O.copy(qe).multiplyScalar(I).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(E){Se.setScissorTest(Je=E)},this.setOpaqueSort=function(E){ie=E},this.setTransparentSort=function(E){fe=E},this.getClearColor=function(E){return E.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,k=!0){let V=0;if(E){let z=!1;if(P!==null){const ee=P.texture.format;z=ee===ru||ee===su||ee===iu}if(z){const ee=P.texture.type,he=ee===ei||ee===is||ee===qr||ee===Yr||ee===eu||ee===tu,ye=Re.getClearColor(),_e=Re.getClearAlpha(),De=ye.r,Oe=ye.g,Pe=ye.b;he?(g[0]=De,g[1]=Oe,g[2]=Pe,g[3]=_e,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=De,_[1]=Oe,_[2]=Pe,_[3]=_e,D.clearBufferiv(D.COLOR,0,_))}else V|=D.COLOR_BUFFER_BIT}F&&(V|=D.DEPTH_BUFFER_BIT),k&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Re.dispose(),W.dispose(),Ie.dispose(),we.dispose(),Ot.dispose(),At.dispose(),B.dispose(),ue.dispose(),Ve.dispose(),Y.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Wn),ne.removeEventListener("sessionend",zu),zi.stop()};function ae(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=yt.autoReset,F=be.enabled,k=be.autoUpdate,V=be.needsUpdate,z=be.type;U(),yt.autoReset=E,be.enabled=F,be.autoUpdate=k,be.needsUpdate=V,be.type=z}function Q(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $(E){const F=E.target;F.removeEventListener("dispose",$),Me(F)}function Me(E){ke(E),we.remove(E)}function ke(E){const F=we.get(E).programs;F!==void 0&&(F.forEach(function(k){Y.releaseProgram(k)}),E.isShaderMaterial&&Y.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,k,V,z,ee){F===null&&(F=Te);const he=z.isMesh&&z.matrixWorld.determinant()<0,ye=Up(E,F,k,V,z);Se.setMaterial(V,he);let _e=k.index,De=1;if(V.wireframe===!0){if(_e=M.getWireframeAttribute(k),_e===void 0)return;De=2}const Oe=k.drawRange,Pe=k.attributes.position;let Ze=Oe.start*De,dt=(Oe.start+Oe.count)*De;ee!==null&&(Ze=Math.max(Ze,ee.start*De),dt=Math.min(dt,(ee.start+ee.count)*De)),_e!==null?(Ze=Math.max(Ze,0),dt=Math.min(dt,_e.count)):Pe!=null&&(Ze=Math.max(Ze,0),dt=Math.min(dt,Pe.count));const Et=dt-Ze;if(Et<0||Et===1/0)return;ue.setup(z,V,ye,k,_e);let xt,mt=de;if(_e!==null&&(xt=R.get(_e),mt=Ue,mt.setIndex(xt)),z.isMesh)V.wireframe===!0?(Se.setLineWidth(V.wireframeLinewidth*Wt()),mt.setMode(D.LINES)):mt.setMode(D.TRIANGLES);else if(z.isLine){let Le=V.linewidth;Le===void 0&&(Le=1),Se.setLineWidth(Le*Wt()),z.isLineSegments?mt.setMode(D.LINES):z.isLineLoop?mt.setMode(D.LINE_LOOP):mt.setMode(D.LINE_STRIP)}else z.isPoints?mt.setMode(D.POINTS):z.isSprite&&mt.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Qr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))mt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Le=z._multiDrawStarts,Mt=z._multiDrawCounts,et=z._multiDrawCount,an=_e?R.get(_e).bytesPerElement:1,hs=we.get(V).currentProgram.getUniforms();for(let cn=0;cn<et;cn++)hs.setValue(D,"_gl_DrawID",cn),mt.render(Le[cn]/an,Mt[cn])}else if(z.isInstancedMesh)mt.renderInstances(Ze,Et,z.count);else if(k.isInstancedBufferGeometry){const Le=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Mt=Math.min(k.instanceCount,Le);mt.renderInstances(Ze,Et,Mt)}else mt.render(Ze,Et)};function _t(E,F,k){E.transparent===!0&&E.side===Vt&&E.forceSinglePass===!1?(E.side=sn,E.needsUpdate=!0,wo(E,F,k),E.side=_i,E.needsUpdate=!0,wo(E,F,k),E.side=Vt):wo(E,F,k)}this.compile=function(E,F,k=null){k===null&&(k=E),m=Ie.get(k),m.init(F),y.push(m),k.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),E!==k&&E.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const V=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ee=z.material;if(ee)if(Array.isArray(ee))for(let he=0;he<ee.length;he++){const ye=ee[he];_t(ye,k,z),V.add(ye)}else _t(ee,k,z),V.add(ee)}),m=y.pop(),V},this.compileAsync=function(E,F,k=null){const V=this.compile(E,F,k);return new Promise(z=>{function ee(){if(V.forEach(function(he){we.get(he).currentProgram.isReady()&&V.delete(he)}),V.size===0){z(E);return}setTimeout(ee,10)}He.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let st=null;function si(E){st&&st(E)}function Wn(){zi.stop()}function zu(){zi.start()}const zi=new Vf;zi.setAnimationLoop(si),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(E){st=E,ne.setAnimationLoop(E),E===null?zi.stop():zi.start()},ne.addEventListener("sessionstart",Wn),ne.addEventListener("sessionend",zu),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(F),F=ne.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,F,P),m=Ie.get(E,y.length),m.init(F),y.push(m),J.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ht.setFromProjectionMatrix(J,Jn,F.reversedDepth),K=this.localClippingEnabled,je=re.init(this.clippingPlanes,K),p=W.get(E,v.length),p.init(),v.push(p),ne.enabled===!0&&ne.isPresenting===!0){const ee=x.xr.getDepthSensingMesh();ee!==null&&Va(ee,F,-1/0,x.sortObjects)}Va(E,F,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(ie,fe),Ke=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Ke&&Re.addToRenderList(p,E),this.info.render.frame++,je===!0&&re.beginShadows();const k=m.state.shadowsArray;be.render(k,E,F),je===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,z=p.transmissive;if(m.setupLights(),F.isArrayCamera){const ee=F.cameras;if(z.length>0)for(let he=0,ye=ee.length;he<ye;he++){const _e=ee[he];ku(V,z,E,_e)}Ke&&Re.render(E);for(let he=0,ye=ee.length;he<ye;he++){const _e=ee[he];Bu(p,E,_e,_e.viewport)}}else z.length>0&&ku(V,z,E,F),Ke&&Re.render(E),Bu(p,E,F);P!==null&&C===0&&(We.updateMultisampleRenderTarget(P),We.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(x,E,F),ue.resetDefaultState(),S=-1,w=null,y.pop(),y.length>0?(m=y[y.length-1],je===!0&&re.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function Va(E,F,k,V){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ht.intersectsSprite(E)){V&&Ne.setFromMatrixPosition(E.matrixWorld).applyMatrix4(J);const he=B.update(E),ye=E.material;ye.visible&&p.push(E,he,ye,k,Ne.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ht.intersectsObject(E))){const he=B.update(E),ye=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ne.copy(E.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ne.copy(he.boundingSphere.center)),Ne.applyMatrix4(E.matrixWorld).applyMatrix4(J)),Array.isArray(ye)){const _e=he.groups;for(let De=0,Oe=_e.length;De<Oe;De++){const Pe=_e[De],Ze=ye[Pe.materialIndex];Ze&&Ze.visible&&p.push(E,he,Ze,k,Ne.z,Pe)}}else ye.visible&&p.push(E,he,ye,k,Ne.z,null)}}const ee=E.children;for(let he=0,ye=ee.length;he<ye;he++)Va(ee[he],F,k,V)}function Bu(E,F,k,V){const z=E.opaque,ee=E.transmissive,he=E.transparent;m.setupLightsView(k),je===!0&&re.setGlobalState(x.clippingPlanes,k),V&&Se.viewport(L.copy(V)),z.length>0&&So(z,F,k),ee.length>0&&So(ee,F,k),he.length>0&&So(he,F,k),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ku(E,F,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new ss(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?po:ei,minFilter:pn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ee=m.state.transmissionRenderTarget[V.id],he=V.viewport||L;ee.setSize(he.z*x.transmissionResolutionScale,he.w*x.transmissionResolutionScale);const ye=x.getRenderTarget(),_e=x.getActiveCubeFace(),De=x.getActiveMipmapLevel();x.setRenderTarget(ee),x.getClearColor(X),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),Ke&&Re.render(k);const Oe=x.toneMapping;x.toneMapping=Di;const Pe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),je===!0&&re.setGlobalState(x.clippingPlanes,V),So(E,k,V),We.updateMultisampleRenderTarget(ee),We.updateRenderTargetMipmap(ee),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let dt=0,Et=F.length;dt<Et;dt++){const xt=F[dt],mt=xt.object,Le=xt.geometry,Mt=xt.material,et=xt.group;if(Mt.side===Vt&&mt.layers.test(V.layers)){const an=Mt.side;Mt.side=sn,Mt.needsUpdate=!0,Hu(mt,k,V,Le,Mt,et),Mt.side=an,Mt.needsUpdate=!0,Ze=!0}}Ze===!0&&(We.updateMultisampleRenderTarget(ee),We.updateRenderTargetMipmap(ee))}x.setRenderTarget(ye,_e,De),x.setClearColor(X,G),Pe!==void 0&&(V.viewport=Pe),x.toneMapping=Oe}function So(E,F,k){const V=F.isScene===!0?F.overrideMaterial:null;for(let z=0,ee=E.length;z<ee;z++){const he=E[z],ye=he.object,_e=he.geometry,De=he.group;let Oe=he.material;Oe.allowOverride===!0&&V!==null&&(Oe=V),ye.layers.test(k.layers)&&Hu(ye,F,k,_e,Oe,De)}}function Hu(E,F,k,V,z,ee){E.onBeforeRender(x,F,k,V,z,ee),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(x,F,k,V,E,ee),z.transparent===!0&&z.side===Vt&&z.forceSinglePass===!1?(z.side=sn,z.needsUpdate=!0,x.renderBufferDirect(k,F,V,z,E,ee),z.side=_i,z.needsUpdate=!0,x.renderBufferDirect(k,F,V,z,E,ee),z.side=Vt):x.renderBufferDirect(k,F,V,z,E,ee),E.onAfterRender(x,F,k,V,z,ee)}function wo(E,F,k){F.isScene!==!0&&(F=Te);const V=we.get(E),z=m.state.lights,ee=m.state.shadowsArray,he=z.state.version,ye=Y.getParameters(E,z.state,ee,F,k),_e=Y.getProgramCacheKey(ye);let De=V.programs;V.environment=E.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(E.isMeshStandardMaterial?At:Ot).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,De===void 0&&(E.addEventListener("dispose",$),De=new Map,V.programs=De);let Oe=De.get(_e);if(Oe!==void 0){if(V.currentProgram===Oe&&V.lightsStateVersion===he)return Gu(E,ye),Oe}else ye.uniforms=Y.getUniforms(E),E.onBeforeCompile(ye,x),Oe=Y.acquireProgram(ye,_e),De.set(_e,Oe),V.uniforms=ye.uniforms;const Pe=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=re.uniform),Gu(E,ye),V.needsLights=Op(E),V.lightsStateVersion=he,V.needsLights&&(Pe.ambientLightColor.value=z.state.ambient,Pe.lightProbe.value=z.state.probe,Pe.directionalLights.value=z.state.directional,Pe.directionalLightShadows.value=z.state.directionalShadow,Pe.spotLights.value=z.state.spot,Pe.spotLightShadows.value=z.state.spotShadow,Pe.rectAreaLights.value=z.state.rectArea,Pe.ltc_1.value=z.state.rectAreaLTC1,Pe.ltc_2.value=z.state.rectAreaLTC2,Pe.pointLights.value=z.state.point,Pe.pointLightShadows.value=z.state.pointShadow,Pe.hemisphereLights.value=z.state.hemi,Pe.directionalShadowMap.value=z.state.directionalShadowMap,Pe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pe.spotShadowMap.value=z.state.spotShadowMap,Pe.spotLightMatrix.value=z.state.spotLightMatrix,Pe.spotLightMap.value=z.state.spotLightMap,Pe.pointShadowMap.value=z.state.pointShadowMap,Pe.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=Oe,V.uniformsList=null,Oe}function Vu(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=fa.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Gu(E,F){const k=we.get(E);k.outputColorSpace=F.outputColorSpace,k.batching=F.batching,k.batchingColor=F.batchingColor,k.instancing=F.instancing,k.instancingColor=F.instancingColor,k.instancingMorph=F.instancingMorph,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function Up(E,F,k,V,z){F.isScene!==!0&&(F=Te),We.resetTextureUnits();const ee=F.fog,he=V.isMeshStandardMaterial?F.environment:null,ye=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:en,_e=(V.isMeshStandardMaterial?At:Ot).get(V.envMap||he),De=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Oe=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Pe=!!k.morphAttributes.position,Ze=!!k.morphAttributes.normal,dt=!!k.morphAttributes.color;let Et=Di;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Et=x.toneMapping);const xt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,mt=xt!==void 0?xt.length:0,Le=we.get(V),Mt=m.state.lights;if(je===!0&&(K===!0||E!==w)){const Kt=E===w&&V.id===S;re.setState(V,E,Kt)}let et=!1;V.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Mt.state.version||Le.outputColorSpace!==ye||z.isBatchedMesh&&Le.batching===!1||!z.isBatchedMesh&&Le.batching===!0||z.isBatchedMesh&&Le.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Le.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Le.instancing===!1||!z.isInstancedMesh&&Le.instancing===!0||z.isSkinnedMesh&&Le.skinning===!1||!z.isSkinnedMesh&&Le.skinning===!0||z.isInstancedMesh&&Le.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Le.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Le.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Le.instancingMorph===!1&&z.morphTexture!==null||Le.envMap!==_e||V.fog===!0&&Le.fog!==ee||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==re.numPlanes||Le.numIntersection!==re.numIntersection)||Le.vertexAlphas!==De||Le.vertexTangents!==Oe||Le.morphTargets!==Pe||Le.morphNormals!==Ze||Le.morphColors!==dt||Le.toneMapping!==Et||Le.morphTargetsCount!==mt)&&(et=!0):(et=!0,Le.__version=V.version);let an=Le.currentProgram;et===!0&&(an=wo(V,F,z));let hs=!1,cn=!1,gr=!1;const St=an.getUniforms(),gn=Le.uniforms;if(Se.useProgram(an.program)&&(hs=!0,cn=!0,gr=!0),V.id!==S&&(S=V.id,cn=!0),hs||w!==E){Se.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),St.setValue(D,"projectionMatrix",E.projectionMatrix),St.setValue(D,"viewMatrix",E.matrixWorldInverse);const tn=St.map.cameraPosition;tn!==void 0&&tn.setValue(D,ge.setFromMatrixPosition(E.matrixWorld)),Fe.logarithmicDepthBuffer&&St.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&St.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,cn=!0,gr=!0)}if(z.isSkinnedMesh){St.setOptional(D,z,"bindMatrix"),St.setOptional(D,z,"bindMatrixInverse");const Kt=z.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),St.setValue(D,"boneTexture",Kt.boneTexture,We))}z.isBatchedMesh&&(St.setOptional(D,z,"batchingTexture"),St.setValue(D,"batchingTexture",z._matricesTexture,We),St.setOptional(D,z,"batchingIdTexture"),St.setValue(D,"batchingIdTexture",z._indirectTexture,We),St.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&St.setValue(D,"batchingColorTexture",z._colorsTexture,We));const _n=k.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&te.update(z,k,an),(cn||Le.receiveShadow!==z.receiveShadow)&&(Le.receiveShadow=z.receiveShadow,St.setValue(D,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(gn.envMap.value=_e,gn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(gn.envMapIntensity.value=F.environmentIntensity),cn&&(St.setValue(D,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&Fp(gn,gr),ee&&V.fog===!0&&j.refreshFogUniforms(gn,ee),j.refreshMaterialUniforms(gn,V,I,Z,m.state.transmissionRenderTarget[E.id]),fa.upload(D,Vu(Le),gn,We)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(fa.upload(D,Vu(Le),gn,We),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&St.setValue(D,"center",z.center),St.setValue(D,"modelViewMatrix",z.modelViewMatrix),St.setValue(D,"normalMatrix",z.normalMatrix),St.setValue(D,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Kt=V.uniformsGroups;for(let tn=0,Ga=Kt.length;tn<Ga;tn++){const Bi=Kt[tn];Ve.update(Bi,an),Ve.bind(Bi,an)}}return an}function Fp(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Op(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,F,k){const V=we.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),we.get(E.texture).__webglTexture=F,we.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:k,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const k=we.get(E);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0};const zp=D.createFramebuffer();this.setRenderTarget=function(E,F=0,k=0){P=E,A=F,C=k;let V=!0,z=null,ee=!1,he=!1;if(E){const _e=we.get(E);if(_e.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(_e.__webglFramebuffer===void 0)We.setupRenderTarget(E);else if(_e.__hasExternalTextures)We.rebindTextures(E,we.get(E.texture).__webglTexture,we.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Pe=E.depthTexture;if(_e.__boundDepthTexture!==Pe){if(Pe!==null&&we.has(Pe)&&(E.width!==Pe.image.width||E.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(E)}}const De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(he=!0);const Oe=we.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[F])?z=Oe[F][k]:z=Oe[F],ee=!0):E.samples>0&&We.useMultisampledRTT(E)===!1?z=we.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?z=Oe[k]:z=Oe,L.copy(E.viewport),O.copy(E.scissor),H=E.scissorTest}else L.copy(Ae).multiplyScalar(I).floor(),O.copy(qe).multiplyScalar(I).floor(),H=Je;if(k!==0&&(z=zp),Se.bindFramebuffer(D.FRAMEBUFFER,z)&&V&&Se.drawBuffers(E,z),Se.viewport(L),Se.scissor(O),Se.setScissorTest(H),ee){const _e=we.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,_e.__webglTexture,k)}else if(he){const _e=F;for(let De=0;De<E.textures.length;De++){const Oe=we.get(E.textures[De]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+De,Oe.__webglTexture,k,_e)}}else if(E!==null&&k!==0){const _e=we.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_e.__webglTexture,k)}S=-1},this.readRenderTargetPixels=function(E,F,k,V,z,ee,he,ye=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){Se.bindFramebuffer(D.FRAMEBUFFER,_e);try{const De=E.textures[ye],Oe=De.format,Pe=De.type;if(!Fe.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-V&&k>=0&&k<=E.height-z&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ye),D.readPixels(F,k,V,z,Ce.convert(Oe),Ce.convert(Pe),ee))}finally{const De=P!==null?we.get(P).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(E,F,k,V,z,ee,he,ye=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e)if(F>=0&&F<=E.width-V&&k>=0&&k<=E.height-z){Se.bindFramebuffer(D.FRAMEBUFFER,_e);const De=E.textures[ye],Oe=De.format,Pe=De.type;if(!Fe.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.bufferData(D.PIXEL_PACK_BUFFER,ee.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ye),D.readPixels(F,k,V,z,Ce.convert(Oe),Ce.convert(Pe),0);const dt=P!==null?we.get(P).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,dt);const Et=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Km(D,Et,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ee),D.deleteBuffer(Ze),D.deleteSync(Et),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,k=0){const V=Math.pow(2,-k),z=Math.floor(E.image.width*V),ee=Math.floor(E.image.height*V),he=F!==null?F.x:0,ye=F!==null?F.y:0;We.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,he,ye,z,ee),Se.unbindTexture()};const Bp=D.createFramebuffer(),kp=D.createFramebuffer();this.copyTextureToTexture=function(E,F,k=null,V=null,z=0,ee=null){ee===null&&(z!==0?(Qr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=z,z=0):ee=0);let he,ye,_e,De,Oe,Pe,Ze,dt,Et;const xt=E.isCompressedTexture?E.mipmaps[ee]:E.image;if(k!==null)he=k.max.x-k.min.x,ye=k.max.y-k.min.y,_e=k.isBox3?k.max.z-k.min.z:1,De=k.min.x,Oe=k.min.y,Pe=k.isBox3?k.min.z:0;else{const _n=Math.pow(2,-z);he=Math.floor(xt.width*_n),ye=Math.floor(xt.height*_n),E.isDataArrayTexture?_e=xt.depth:E.isData3DTexture?_e=Math.floor(xt.depth*_n):_e=1,De=0,Oe=0,Pe=0}V!==null?(Ze=V.x,dt=V.y,Et=V.z):(Ze=0,dt=0,Et=0);const mt=Ce.convert(F.format),Le=Ce.convert(F.type);let Mt;F.isData3DTexture?(We.setTexture3D(F,0),Mt=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(We.setTexture2DArray(F,0),Mt=D.TEXTURE_2D_ARRAY):(We.setTexture2D(F,0),Mt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const et=D.getParameter(D.UNPACK_ROW_LENGTH),an=D.getParameter(D.UNPACK_IMAGE_HEIGHT),hs=D.getParameter(D.UNPACK_SKIP_PIXELS),cn=D.getParameter(D.UNPACK_SKIP_ROWS),gr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,xt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,De),D.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pe);const St=E.isDataArrayTexture||E.isData3DTexture,gn=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const _n=we.get(E),Kt=we.get(F),tn=we.get(_n.__renderTarget),Ga=we.get(Kt.__renderTarget);Se.bindFramebuffer(D.READ_FRAMEBUFFER,tn.__webglFramebuffer),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ga.__webglFramebuffer);for(let Bi=0;Bi<_e;Bi++)St&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,we.get(E).__webglTexture,z,Pe+Bi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,we.get(F).__webglTexture,ee,Et+Bi)),D.blitFramebuffer(De,Oe,he,ye,Ze,dt,he,ye,D.DEPTH_BUFFER_BIT,D.NEAREST);Se.bindFramebuffer(D.READ_FRAMEBUFFER,null),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||we.has(E)){const _n=we.get(E),Kt=we.get(F);Se.bindFramebuffer(D.READ_FRAMEBUFFER,Bp),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,kp);for(let tn=0;tn<_e;tn++)St?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_n.__webglTexture,z,Pe+tn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_n.__webglTexture,z),gn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Kt.__webglTexture,ee,Et+tn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Kt.__webglTexture,ee),z!==0?D.blitFramebuffer(De,Oe,he,ye,Ze,dt,he,ye,D.COLOR_BUFFER_BIT,D.NEAREST):gn?D.copyTexSubImage3D(Mt,ee,Ze,dt,Et+tn,De,Oe,he,ye):D.copyTexSubImage2D(Mt,ee,Ze,dt,De,Oe,he,ye);Se.bindFramebuffer(D.READ_FRAMEBUFFER,null),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else gn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Mt,ee,Ze,dt,Et,he,ye,_e,mt,Le,xt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Mt,ee,Ze,dt,Et,he,ye,_e,mt,xt.data):D.texSubImage3D(Mt,ee,Ze,dt,Et,he,ye,_e,mt,Le,xt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ee,Ze,dt,he,ye,mt,Le,xt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ee,Ze,dt,xt.width,xt.height,mt,xt.data):D.texSubImage2D(D.TEXTURE_2D,ee,Ze,dt,he,ye,mt,Le,xt);D.pixelStorei(D.UNPACK_ROW_LENGTH,et),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,an),D.pixelStorei(D.UNPACK_SKIP_PIXELS,hs),D.pixelStorei(D.UNPACK_SKIP_ROWS,cn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,gr),ee===0&&F.generateMipmaps&&D.generateMipmap(Mt),Se.unbindTexture()},this.initRenderTarget=function(E){we.get(E).__webglFramebuffer===void 0&&We.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?We.setTextureCube(E,0):E.isData3DTexture?We.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?We.setTexture2DArray(E,0):We.setTexture2D(E,0),Se.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,Se.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function gd(i,e){if(e===ym)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Cl||e===lf){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Cl)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class T1 extends hr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new I1(t)}),this.register(function(t){return new P1(t)}),this.register(function(t){return new k1(t)}),this.register(function(t){return new H1(t)}),this.register(function(t){return new V1(t)}),this.register(function(t){return new D1(t)}),this.register(function(t){return new N1(t)}),this.register(function(t){return new U1(t)}),this.register(function(t){return new F1(t)}),this.register(function(t){return new C1(t)}),this.register(function(t){return new O1(t)}),this.register(function(t){return new L1(t)}),this.register(function(t){return new B1(t)}),this.register(function(t){return new z1(t)}),this.register(function(t){return new A1(t)}),this.register(function(t){return new G1(t)}),this.register(function(t){return new W1(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Br.extractUrlBase(e);o=Br.resolveURL(c,this.path)}else o=Br.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Bf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Yf){try{o[$e.KHR_BINARY_GLTF]=new X1(e)}catch(h){s&&s(h);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new sM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case $e.KHR_MATERIALS_UNLIT:o[h]=new R1;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[h]=new q1(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[h]=new Y1;break;case $e.KHR_MESH_QUANTIZATION:o[h]=new K1;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function b1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class A1{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new pe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],en);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new kf(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new _o(u),c.distance=h;break;case"spot":c=new wg(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),qn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class R1{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Gt}extendParams(e,t,n){const s=[];e.color=new pe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],en),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,ut))}return Promise.all(s)}}class C1{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class I1{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(a,a)}return Promise.all(r)}}class P1{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class L1{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class D1{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],en)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ut)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class N1{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class U1{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new pe().setRGB(a[0],a[1],a[2],en),Promise.all(r)}}class F1{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class O1{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new pe().setRGB(a[0],a[1],a[2],en),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ut)),Promise.all(r)}}class z1{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class B1{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class k1{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class H1{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class V1{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class G1{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class W1{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Mn.TRIANGLES&&c.mode!==Mn.TRIANGLE_STRIP&&c.mode!==Mn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const _=new Be,p=new b,m=new zn,v=new b(1,1,1),y=new kn(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,_.compose(p,m,v));for(const x in l)if(x==="_COLOR_0"){const T=l[x];y.instanceColor=new Pl(T.array,T.itemSize,T.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);ot.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Yf="glTF",Rr=12,_d={JSON:1313821514,BIN:5130562};class X1{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Rr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Yf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Rr,r=new DataView(e,Rr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===_d.JSON){const c=new Uint8Array(e,Rr+o,a);this.content=n.decode(c)}else if(l===_d.BIN){const c=Rr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class q1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=zl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=zl[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=qs[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}h(f)},a,c,en,d)})})}}class Y1{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class K1{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class Kf extends go{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,_=g-c,p=-2*f+3*d,m=f-d,v=1-p,y=m-d+h;for(let x=0;x!==a;x++){const T=o[_+x+a],A=o[_+x+l]*u,C=o[g+x+a],P=o[g+x]*u;r[x]=v*T+y*A+p*C+m*P}return r}}const $1=new zn;class Z1 extends Kf{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return $1.fromArray(r).normalize().toArray(r),r}}const Mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xd={9728:bt,9729:It,9984:ef,9985:ca,9986:Ir,9987:pn},vd={33071:Pi,33648:va,10497:Fn},Cc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ti={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},J1={CUBICSPLINE:void 0,LINEAR:Jr,STEP:Zr},Ic={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function j1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new jt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_i})),i.DefaultMaterial}function qi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function qn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Q1(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function eM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function tM(i){let e;const t=i.extensions&&i.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Pc(t.attributes):e=i.indices+":"+Pc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Pc(i.targets[n]);return e}function Pc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Bl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const iM=new Be;class sM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new b1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new yg(this.options.manager):this.textureLoader=new bg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Bf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return qi(r,a,s),qn(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Br.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Cc[s.type],a=qs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Qt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Cc[s.type],c=qs[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,p;if(f&&f!==h){const m=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let y=t.cache.get(v);y||(_=new c(a,m*f,s.count*f/u),y=new Mf(_,f/u),t.cache.add(v,y)),p=new eo(y,l,d%f/u,g)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),p=new Qt(_,l,g);if(s.sparse!==void 0){const m=Cc.SCALAR,v=qs[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,T=new v(o[1],y,s.sparse.count*m),A=new c(o[2],x,s.sparse.count*l);a!==null&&(p=new Qt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let C=0,P=T.length;C<P;C++){const S=T[C];if(p.setX(S,A[C*l]),l>=2&&p.setY(S,A[C*l+1]),l>=3&&p.setZ(S,A[C*l+2]),l>=4&&p.setW(S,A[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=xd[d.magFilter]||It,u.minFilter=xd[d.minFilter]||pn,u.wrapS=vd[d.wrapS]||Fn,u.wrapT=vd[d.wrapT]||Fn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==bt&&u.minFilter!==It,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const p=new pt(_);p.needsUpdate=!0,d(p)}),t.load(Br.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),qn(h,o),h.userData.mimeType=o.mimeType||nM(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Tf,Bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ef,Bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return jt}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const h=s[$e.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new pe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],en),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,ut)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Vt);const u=r.alphaMode||Ic.OPAQUE;if(u===Ic.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ic.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Gt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new se(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Gt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Gt){const h=r.emissiveFactor;a.emissive=new pe().setRGB(h[0],h[1],h[2],en)}return r.emissiveTexture!==void 0&&o!==Gt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ut)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),qn(h,r),t.associations.set(h,{materials:e}),r.extensions&&qi(s,h,r),h})}createUniqueName(e){const t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return yd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=tM(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=yd(new Ft,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?j1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],p=o[f];let m;const v=c[f];if(p.mode===Mn.TRIANGLES||p.mode===Mn.TRIANGLE_STRIP||p.mode===Mn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new y0(_,v):new Ee(_,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Mn.TRIANGLE_STRIP?m.geometry=gd(m.geometry,lf):p.mode===Mn.TRIANGLE_FAN&&(m.geometry=gd(m.geometry,Cl));else if(p.mode===Mn.LINES)m=new b0(_,v);else if(p.mode===Mn.LINE_STRIP)m=new fu(_,v);else if(p.mode===Mn.LINE_LOOP)m=new A0(_,v);else if(p.mode===Mn.POINTS)m=new R0(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&eM(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),qn(m,r),p.extensions&&qi(s,m,p),t.assignFinalMaterial(m),h.push(m)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&qi(s,h[0],r),h[0];const d=new it;r.extensions&&qi(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Jt(kt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Mu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),qn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new Be;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new hu(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],_=f.target,p=_.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],p=h[4],m=[];for(let y=0,x=d.length;y<x;y++){const T=d[y],A=f[y],C=g[y],P=_[y],S=p[y];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const w=n._createAnimationTracks(T,A,C,P,S);if(w)for(let L=0;L<w.length;L++)m.push(w[L])}const v=new Ul(r,void 0,m);return qn(v,s),v})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,iM)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new to:c.length>1?u=new it:c.length===1?u=c[0]:u=new ot,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),qn(u,r),r.extensions&&qi(n,u,r),r.matrix!==void 0){const h=new Be;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new it;n.name&&(r.name=s.createUniqueName(n.name)),qn(r,n),n.extensions&&qi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof Bn||d instanceof pt)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Ti[r.path]===Ti.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Ti[r.path]){case Ti.weights:c=nr;break;case Ti.rotation:c=ir;break;case Ti.translation:case Ti.scale:c=sr;break;default:n.itemSize===1?c=nr:c=sr;break}const u=s.interpolation!==void 0?J1[s.interpolation]:Jr,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Ti[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Bl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof ir?Z1:Kf;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function rM(i,e,t){const n=e.attributes,s=new gt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new b(l[0],l[1],l[2]),new b(c[0],c[1],c[2])),a.normalized){const u=Bl(qs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new b,l=new b;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Bl(qs[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Vn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function yd(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=zl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Qe.workingColorSpace!==en&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),qn(i,e),rM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Q1(i,e.targets,t):i})}function $f(i){const e=new Map,t=new Map,n=i.clone();return Zf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Zf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Zf(i.children[n],e.children[n],t)}const us={qingchuan:{id:"qingchuan",name:"晴川街区",size:{x:48,z:42},spawn:{x:-2,z:1},buildings:[{id:"cafe",name:"白鸟咖啡",x:-14,z:10,w:11,d:8,h:5.4,color:14200195,trim:7425098,roof:5260884,sign:"WHITE BIRD  /  CAFE",line:"欢迎来到白鸟咖啡。以后这里可以点饮品、休息，和朋友碰面。",enter:"cafe_inside"},{id:"market",name:"街角便利店",x:14,z:10,w:11,d:8,h:5.8,color:9546402,trim:3234144,roof:4218215,sign:"MART  /  24H",line:"货架正在布置。以后可以在这里购买和出售物品。"},{id:"library",name:"城市图书馆",x:14,z:-11,w:13,d:9,h:7.5,color:13153945,trim:5464948,roof:4540507,sign:"QINGCHUAN LIBRARY",line:"走进书架之间，看看这座城市的故事。",enter:"library_inside"},{id:"homes",name:"河畔公寓",x:-14,z:-11,w:12,d:9,h:8.8,color:10792627,trim:6513275,roof:5395559,sign:"RIVERSIDE  /  A",line:"门厅里有信箱和电梯，楼上有一间可休息的住处。",enter:"apartment_lobby"}],npcs:[{id:"mika",name:"米卡",x:-5.3,z:8.4,skin:"mika",line:"我每天从公寓走到咖啡馆。隔壁住宅区也很值得逛逛。",route:[{x:-5.3,z:8.4},{x:-5.3,z:-4.8},{x:-14,z:-4.8},{x:-5.3,z:-4.8},{x:-5.3,z:16.5},{x:-14,z:16.5},{x:-5.3,z:16.5}],pace:.8},{id:"chen",name:"陈叔",x:5.5,z:-6.8,skin:"chen",line:"图书馆今天开门了，进去坐坐吧。",route:[{x:5.5,z:-6.8},{x:5.5,z:-4.8},{x:14,z:-4.8},{x:20.8,z:-4.8},{x:5.5,z:-4.8},{x:5.5,z:-17.5}],pace:.65},{id:"yuan",name:"阿远",x:4.8,z:13.6,skin:"yuan",line:"沿着东边的路走，就能到河畔生活区。",route:[{x:4.8,z:13.6},{x:4.8,z:4.8},{x:20,z:4.8},{x:20,z:0},{x:4.8,z:4.8},{x:4.8,z:17},{x:14,z:17}],pace:.9}]},riverside:{id:"riverside",name:"河畔生活区",size:{x:48,z:42},spawn:{x:-19,z:0},buildings:[{id:"residence_b",name:"河畔公寓 B 座",x:-14,z:-11,w:11,d:8,h:8.4,color:11121832,trim:6386791,roof:4875869,sign:"RIVERSIDE  /  B",line:"这栋楼与中央街的公寓共用一个温暖的门厅。",enter:"apartment_lobby"},{id:"clinic",name:"社区诊所",x:14,z:-11,w:10,d:8,h:5.2,color:13687239,trim:6523271,roof:6586493,sign:"NEIGHBORHOOD CLINIC",line:"诊所今天正常营业。医生说，多在街区散散步也有好处。",enter:"clinic_inside"},{id:"laundry",name:"自助洗衣房",x:14,z:10,w:10,d:8,h:4.7,color:13813425,trim:6585479,roof:5860728,sign:"LAUNDRY  /  24H",line:"洗衣机正轻轻转着。附近居民常在这里聊天。",enter:"laundry_inside"},{id:"community",name:"社区活动室",x:-14,z:10,w:10,d:8,h:5.1,color:13090214,trim:8942687,roof:6973016,sign:"COMMUNITY HALL",line:"公告栏上贴着本周的邻里活动安排。",enter:"community_inside"}],npcs:[{id:"guard",name:"门卫 周叔",x:-5.5,z:-7.2,skin:"chen",tint:14215155,line:"新搬来的？沿着这条路走，有诊所、洗衣房和活动室。",route:[{x:-5.5,z:-7.2},{x:-5.5,z:-4.8},{x:-14,z:-4.8},{x:-20,z:0},{x:-5.5,z:4.8},{x:-5.5,z:-17}],pace:.7},{id:"neighbor",name:"邻居 小林",x:6.8,z:-2.5,skin:"mika",tint:16770005,line:"傍晚的河畔最好看。活动室也经常有人。",route:[{x:6.8,z:-2.5},{x:6.8,z:4.8},{x:6.8,z:16.5},{x:14,z:16.5},{x:6.8,z:4.8},{x:-5.8,z:4.8},{x:-5.8,z:-4.8},{x:6.8,z:-4.8}],pace:.85},{id:"courier",name:"快递员 阿哲",x:-2.5,z:6.5,skin:"yuan",tint:16771514,line:"今天要送好几栋楼。路口的公交站很方便。",route:[{x:-2.5,z:6.5},{x:-14,z:16.5},{x:14,z:-4.8},{x:-14,z:-4.8},{x:14,z:16.5}],pace:1.15},{id:"nurse",name:"诊所 小安",x:18.3,z:-4.7,skin:"barista",tint:14221300,line:"诊所就在身后。路过时欢迎来看看社区公告。",route:[{x:18.3,z:-4.7},{x:10,z:-4.7},{x:6.5,z:-4.7},{x:6.5,z:3.5},{x:18.3,z:3.5}],pace:.8}]},cafe_inside:{id:"cafe_inside",name:"白鸟咖啡",size:{x:19,z:15},spawn:{x:0,z:4.8},buildings:[],npcs:[{id:"barista",name:"店员 小许",x:2.2,z:-1.7,skin:"barista",line:"欢迎光临！今天先随便看看，菜单很快就会有了。"}]},apartment_lobby:{id:"apartment_lobby",name:"河畔公寓门厅",size:{x:19,z:15},spawn:{x:0,z:4.8},buildings:[],npcs:[{id:"manager",name:"公寓管家 方姨",x:-3.8,z:-1.4,skin:"barista",tint:16768971,line:"欢迎回家。你的房间在楼上，信箱里暂时没有新信。"}]},apartment_unit:{id:"apartment_unit",name:"我的公寓",size:{x:17,z:13},spawn:{x:0,z:3.8},buildings:[],npcs:[]},library_inside:{id:"library_inside",name:"城市图书馆",size:{x:19,z:15},spawn:{x:0,z:4.8},buildings:[],npcs:[{id:"librarian",name:"馆员 许岚",x:.5,z:-1.5,skin:"barista",line:"欢迎来阅读。河畔生活区的旧照片也收藏在这里。"},{id:"reader",name:"读者 小遥",x:-6.1,z:.5,skin:"mika",line:"这座城市的地图越画越大了。下一站想去哪里？"}]},clinic_inside:{id:"clinic_inside",name:"社区诊所",size:{x:17,z:13},spawn:{x:0,z:3.8},buildings:[],npcs:[{id:"doctor",name:"值班医生 林医生",x:-6.4,z:-.5,skin:"barista",tint:14483444,line:"记得规律作息。公寓里有一张床，累了就回家休息。"}]},laundry_inside:{id:"laundry_inside",name:"自助洗衣房",size:{x:17,z:13},spawn:{x:0,z:3.8},buildings:[],npcs:[{id:"laundry_neighbor",name:"邻居 小夏",x:-3,z:.2,skin:"mika",tint:16770005,line:"等衣服洗好的时间，正好可以坐下来聊聊天。"}]},community_inside:{id:"community_inside",name:"社区活动室",size:{x:17,z:13},spawn:{x:0,z:3.8},buildings:[],npcs:[{id:"volunteer",name:"志愿者 阿禾",x:0,z:-.8,skin:"yuan",tint:16770754,line:"欢迎参加邻里活动。以后大家可以在这里一起玩小游戏。"}]}},Lc=us.qingchuan,Md=us.riverside;us.qingchuan={...Lc,size:{x:240,z:106},bounds:{minX:-40,maxX:120,minZ:-52,maxZ:30},buildings:[...Lc.buildings,{id:"north_bakery",name:"麦穗面包店",x:-14,z:-39,w:12,d:10,h:10,color:13214331,trim:7889741,roof:5398876,sign:"麦穗面包",line:"橱窗里摆着刚出炉的面包，条纹雨棚下飘着麦香。店内暂未开放。"},{id:"north_books",name:"时光旧书屋",x:14,z:-39,w:12,d:10,h:11.4,color:11058608,trim:5663840,roof:5398876,sign:"时光旧书",line:"旧书和手写书签摆满了橱窗，二楼阳台是店主的阅读角。店内暂未开放。"},{id:"north_florist",name:"青枝花店",x:34,z:-39,w:10,d:9,h:9.5,color:12952730,trim:7108707,roof:5398876,sign:"青枝花店",line:"窗台上的花束正迎着阳光。西侧社区花园仍可种花；花店内暂未开放。"},{id:"north_atelier",name:"晴窗画室",x:62,z:-39,w:11,d:10,h:11,color:11647173,trim:6450298,roof:5398876,sign:"晴窗画室",line:"大窗把北街的光带进画室，橱窗里陈列着画册。店内暂未开放。"},{id:"north_homes_e",name:"北街公寓 E 座",x:77,z:-39,w:11,d:10,h:13,color:12172450,trim:6845526,roof:5398876,sign:"北街公寓 / E",line:"新公寓的阳台面向北街，门厅与原河畔公寓共用。",enter:"apartment_lobby"},{id:"north_post",name:"晴川邮局",x:111,z:-39,w:12,d:10,h:10.8,color:13877402,trim:5402205,roof:5398876,sign:"晴川邮局",line:"投信口上方挂着一面老钟。北街新通了路，信件也将从这里出发。局内暂未开放。"},...Md.buildings.map(i=>({...i,x:i.x+48})),{id:"riverside_homes_c",name:"河畔住宅 C 座",x:77,z:-11,w:10,d:8,h:8.3,color:12174522,trim:6519410,roof:5402216,sign:"RIVERSIDE / C",line:"从这里可以望见整片河畔社区。"},{id:"community_services",name:"社区服务站",x:77,z:11,w:10,d:8,h:5.2,color:13812910,trim:8615778,roof:6843233,sign:"COMMUNITY SERVICES",line:"这里提供街区活动和生活指引。"},{id:"riverside_homes_d",name:"河畔住宅 D 座",x:111,z:-11,w:11,d:9,h:10,color:11977661,trim:5730669,roof:5269347,sign:"RIVERSIDE / D",line:"这栋住宅面向河畔的新街道。"},{id:"community_workshop",name:"社区工坊",x:111,z:11,w:11,d:8,h:5.8,color:14074282,trim:8546133,roof:6707799,sign:"COMMUNITY WORKSHOP",line:"橱窗里陈列着居民制作的小物件。"}],npcs:[...Lc.npcs,...Md.npcs.map(i=>({...i,x:i.x+48,route:i.route?.map(e=>({x:e.x+48,z:e.z}))}))]};const Sd=i=>["clear","cloudy","rain"].includes(i),ia=(i,e)=>typeof i=="number"&&Number.isFinite(i)?i:e,wd=(i,e,t)=>{const n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)};class Jf{state;constructor(e,t=!1,n){this.state={day:Math.max(1,Math.floor(ia(e?.day,1))),minute:Math.max(0,Math.min(1439.999,ia(e?.minute,t?1230:510))),weather:Sd(e?.weather)?e.weather:Sd(n)?n:"clear",weatherRemaining:Math.max(1,Math.min(360,ia(e?.weatherRemaining,150))),seed:ia(e?.seed,20261101)>>>0}}get day(){return this.state.day}get minute(){return this.state.minute}get hour(){return this.minute/60}get weather(){return this.state.weather}get night(){return this.hour<6||this.hour>=19}get daylight(){return wd(5,7.5,this.hour)*(1-wd(17,20,this.hour))}get dusk(){return Math.max(0,1-Math.abs(this.hour-18)/2)+Math.max(0,1-Math.abs(this.hour-6)/1.5)}get label(){const e=Math.floor(this.minute);return`第 ${this.day} 天 · ${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}get forecast(){return`约 ${Math.ceil(this.state.weatherRemaining)} 游戏分钟后天气变化`}snapshot(){return{...this.state}}advance(e){if(!(!Number.isFinite(e)||e<=0))for(this.state.minute+=e,this.state.day+=Math.floor(this.state.minute/1440),this.state.minute%=1440,this.state.weatherRemaining-=e;this.state.weatherRemaining<=0;)this.state.weather=this.weather==="clear"||this.weather==="rain"?"cloudy":this.random()<.48?"rain":"clear",this.state.weatherRemaining+=120+Math.floor(this.random()*181)}cycleWeather(){const e=["clear","cloudy","rain"];this.state.weather=e[(e.indexOf(this.weather)+1)%e.length],this.state.weatherRemaining=150}skipPhase(){this.skipTo(this.night?510:1230)}rest(){this.state.day++,this.state.minute=480,this.advanceWeatherAfterRest()}skipTo(e){this.advance((e-this.minute+1440)%1440)}advanceWeatherAfterRest(){this.state.weatherRemaining=120+Math.floor(this.random()*181),this.state.weather=this.random()<.65?"clear":"cloudy"}random(){return this.state.seed=Math.imul(this.state.seed,1664525)+1013904223>>>0,this.state.seed/4294967296}}const vn=(i,e,t,n,s)=>({district:i,x:e,z:t,label:n,npcId:s}),Ys=[{id:"street-story-1",title:"初来晴川",reward:{coins:8,seeds:2},steps:[{title:"认识一位居民",detail:"向街上的居民问好，了解晴川",target:vn("qingchuan",-5.3,8.4,"米卡","mika"),done:i=>i.talkedNpcIds.length>0},{title:"去白鸟咖啡坐坐",detail:"从中央街西南侧入口进入咖啡馆",target:vn("cafe_inside",0,4.8,"白鸟咖啡"),done:i=>i.visitedLocations.includes("cafe_inside")},{title:"种下一粒花种",detail:"到街区最西侧社区花园按 E 播种",target:vn("qingchuan",-33,-3,"社区花园"),done:i=>i.planted>0},{title:"收获一朵鲜花",detail:"花约 30 秒成熟；等待时可逛图书馆",target:vn("qingchuan",-33,-3,"社区花园"),done:i=>i.harvested>0},{title:"完成第一笔交易",detail:"在中央街东南侧便利店出售一朵鲜花",target:vn("qingchuan",14,15.7,"街角便利店"),done:i=>i.sold>0}]},{id:"street-story-2",title:"邻里的邀约",reward:{coins:12,seeds:2},steps:[{title:"听听街区往事",detail:"进入中央街东北侧图书馆，与馆员交谈",target:vn("library_inside",.5,-1.5,"馆员 许岚","librarian"),done:i=>i.talkedNpcIds.includes("librarian")},{title:"看看社区公告",detail:"到东侧诊所内，阅读右侧健康公告",target:vn("clinic_inside",6.1,-2.9,"社区健康公告"),done:i=>i.inspected.includes("clinic-health")},{title:"认识洗衣房的邻居",detail:"到诊所南面的洗衣房，与小夏聊天",target:vn("laundry_inside",-3,.2,"邻居 小夏","laundry_neighbor"),done:i=>i.talkedNpcIds.includes("laundry_neighbor")},{title:"接下聚会准备",detail:"到河畔活动室，与志愿者阿禾交谈",target:vn("community_inside",0,-.8,"志愿者 阿禾","volunteer"),done:i=>i.talkedNpcIds.includes("volunteer")}]},{id:"street-story-3",title:"一束花的心意",reward:{coins:20,seeds:3},steps:[{title:"为聚会送一朵花",detail:"带一朵鲜花回活动室，与阿禾交谈后选择送花",target:vn("community_inside",0,-.8,"志愿者 阿禾","volunteer"),done:i=>i.delivered>0},{title:"把好消息带回咖啡馆",detail:"送花后和白鸟咖啡店员小许交谈",target:vn("cafe_inside",2.2,-1.7,"店员 小许","barista"),done:i=>i.inspected.includes("cafe-finale")},{title:"安心住下来",detail:"到公寓门厅乘电梯，在自己房间的床边休息",target:vn("apartment_unit",-5,-.75,"自己的床"),done:i=>i.inspected.includes("cafe-finale")&&i.rested>0}]}];Ys[0];function oM(){return{version:2,talkedNpcIds:[],talkCounts:{},visitedLocations:[],inspected:[],planted:0,harvested:0,sold:0,delivered:0,rested:0,welcomeSeeds:!1,completed:[]}}function sa(i){return Array.isArray(i)?[...new Set(i.filter(e=>typeof e=="string"))].slice(0,100):[]}function Zi(i){return typeof i=="number"&&Number.isFinite(i)?Math.max(0,Math.min(9999,Math.floor(i))):0}function aM(i){const e=i&&typeof i=="object"?i:{},t={};if(e.talkCounts&&typeof e.talkCounts=="object")for(const[n,s]of Object.entries(e.talkCounts).slice(0,100))/^[a-z_]+$/.test(n)&&(t[n]=Zi(s));return{version:2,talkedNpcIds:sa(e.talkedNpcIds),talkCounts:t,visitedLocations:sa(e.visitedLocations),inspected:sa(e.inspected),planted:Zi(e.planted),harvested:Zi(e.harvested),sold:Zi(e.sold),delivered:Zi(e.delivered),rested:Zi(e.rested),welcomeSeeds:e.welcomeSeeds===!0,completed:sa(e.completed)}}function cM(i,e){const t=(s,r)=>{s.includes(r)||s.push(r)};e.type==="talk"&&e.npcId&&(t(i.talkedNpcIds,e.npcId),i.talkCounts[e.npcId]=Zi(i.talkCounts[e.npcId])+1,e.npcId==="barista"&&i.delivered>0&&t(i.inspected,"cafe-finale")),e.type==="visit"&&t(i.visitedLocations,e.location),e.type==="inspect"&&t(i.inspected,e.id),e.type==="plant"&&i.planted++,e.type==="harvest"&&i.harvested++,e.type==="sell"&&i.sold++,e.type==="deliver"&&i.completed.includes("street-story-2")&&i.delivered===0&&(i.delivered=1),e.type==="rest"&&i.inspected.includes("cafe-finale")&&i.rested++,e.type==="welcome-seeds"&&(i.welcomeSeeds=!0);const n=[];for(const s of Ys)if(!i.completed.includes(s.id)){if(!s.steps.every(r=>r.done(i)))break;i.completed.push(s.id),n.push({title:s.title,...s.reward})}return{completedNow:n.length>0,rewards:n}}function Tu(i){const e=Ys.findIndex(r=>!i.completed.includes(r.id));if(e<0)return{complete:!0,chapterIndex:2,chapter:Ys[2],index:3,step:void 0,text:"晴川故事完成 · 继续种花、交易与拜访邻里"};const t=Ys[e],n=Math.max(0,t.steps.findIndex(r=>!r.done(i))),s=t.steps[n];return{complete:!1,chapterIndex:e,chapter:t,index:n,step:s,text:`${s.title}：${s.detail}`}}const kl=5,Ed=12,jf=3e4,Hl=4,Qf="qingchuan-life-v3";function ra(i,e){return typeof i=="number"&&Number.isFinite(i)?Math.max(0,Math.min(9999,Math.floor(i))):e}function lM(){const i=()=>({coins:20,seeds:2,flowers:0,sold:0,plantedAt:Array(Hl).fill(0),progress:oM(),location:null,npcStates:{}});try{const e=localStorage.getItem(Qf)??localStorage.getItem("qingchuan-life-v2")??localStorage.getItem("qingchuan-life-v1");if(!e)return i();const t=JSON.parse(e);if(!t||typeof t!="object")return i();const n=Date.now();return{coins:ra(t.coins,20),seeds:ra(t.seeds,2),flowers:ra(t.flowers,0),sold:ra(t.sold,0),plantedAt:Array.from({length:Hl},(s,r)=>{const o=t.plantedAt?.[r];return typeof o=="number"&&Number.isFinite(o)&&o>0?Math.min(n,Math.floor(o)):0}),progress:aM(t.progress),location:hM(t.location),npcStates:uM(t.npcStates)}}catch{return i()}}function uM(i){if(!i||typeof i!="object")return{};const e={},t=new Set(["north","northEast","east","southEast","south","southWest","west","northWest"]),n=s=>typeof s=="number"&&Number.isFinite(s)?s:null;for(const[s,r]of Object.entries(i)){if(!r||typeof r!="object")continue;const o=r,a=n(o.x),l=n(o.z),c=n(o.waitRemaining),u=n(o.walkDistance);if(typeof o.districtId!="string"||a===null||l===null)continue;const h=n(o.routeIndex),d=t.has(o.direction)?o.direction:"south",f=o.districtId==="riverside";e[s]={districtId:f?"qingchuan":o.districtId,x:f?a+48:a,z:l,routeIndex:h===null?0:Math.max(0,Math.floor(h)),waitRemaining:c===null?0:Math.max(0,Math.min(120,c)),direction:d,routineKey:typeof o.routineKey=="string"?o.routineKey.slice(0,80):void 0,activityLabel:typeof o.activityLabel=="string"?o.activityLabel.slice(0,80):void 0,activity:o.activity==="walking"?"walking":"waiting",walkDistance:u===null?0:Math.max(0,u)}}return e}function hM(i){if(!i||typeof i!="object")return null;const e=i,t=l=>typeof l=="number"&&Number.isFinite(l)?l:null,n=t(e.x),s=t(e.z);if(typeof e.districtId!="string"||n===null||s===null)return null;const r=Array.isArray(e.returnStack)?e.returnStack.slice(0,8).flatMap(l=>{if(!l||typeof l!="object"||typeof l.id!="string")return[];const c=l.spawn;if(!c||typeof c!="object")return[];const u=t(c.x),h=t(c.z);return u===null||h===null?[]:[{id:l.id==="riverside"?"qingchuan":l.id,spawn:{x:l.id==="riverside"?u+48:u,z:h}}]}):[],o=e.weather==="rain"||e.weather==="cloudy"||e.weather==="clear"?e.weather:void 0,a=e.districtId==="riverside";return{districtId:a?"qingchuan":e.districtId,x:a?n+48:n,z:s,returnStack:r,night:e.night===!0,weather:o,worldTime:new Jf(e.worldTime,e.night===!0,o).snapshot()}}function xo(i){try{localStorage.setItem(Qf,JSON.stringify(i))}catch{}}function Ks(i,e=Date.now()){if(!i)return 0;const t=Math.max(0,e-i)/jf;return t>=1?3:t>=.55?2:1}function bu(i,e=Date.now()){return Math.max(0,Math.ceil((i+jf-e)/1e3))}function Au(i,e,t,n,s=1){const r=()=>s===1?Au(i,e,t,n,.5):[],o=(T,A)=>{const C=Math.max(1,Math.ceil(Math.hypot(A.x-T.x,A.z-T.z)/.03));for(let P=0;P<=C;P++)if(n(T.x+(A.x-T.x)*P/C,T.z+(A.z-T.z)*P/C))return!1;return!0};if(o(i,e))return[{...e}];const a=[],l=new Map,c=Math.max(Math.ceil(-t.x/2+1),Math.floor(Math.min(i.x,e.x)-12)),u=Math.min(Math.floor(t.x/2-1),Math.ceil(Math.max(i.x,e.x)+12)),h=Math.max(Math.ceil(-t.z/2+1),Math.floor(Math.min(i.z,e.z)-12)),d=Math.min(Math.floor(t.z/2-1),Math.ceil(Math.max(i.z,e.z)+12));for(let T=c;T<=u;T+=s)for(let A=h;A<=d;A+=s)n(T,A)||(l.set(`${T},${A}`,a.length),a.push({x:T,z:A}));const f=T=>{let A=-1,C=1/0;return a.forEach((P,S)=>{const w=Math.hypot(P.x-T.x,P.z-T.z);w<C&&o(T,P)&&(A=S,C=w)}),A},g=f(i),_=f(e);if(g<0||_<0)return r();const p=new Map([[g,-1]]),m=[g];for(let T=0;T<m.length&&!p.has(_);T++){const A=m[T],C=a[A];for(const[P,S]of[[1,0],[-1,0],[0,1],[0,-1]]){const w=l.get(`${C.x+P*s},${C.z+S*s}`);w===void 0||p.has(w)||!o(C,a[w])||(p.set(w,A),m.push(w))}}if(!p.has(_))return r();const v=[{...e}];for(let T=_;T!==-1;T=p.get(T))v.push(a[T]);v.reverse();const y=[];let x=i;for(let T=0;T<v.length;){let A=T;for(;A+1<v.length&&o(x,v[A+1]);)A++;y.push(v[A]),x=v[A],T=A+1}return y}class dM{cells=new Map;steps=new Map;stepCount=0;count=0;rebuild(e){this.cells.clear(),this.steps.clear(),this.count=0,this.stepCount=0,e.updateMatrixWorld(!0),e.traverse(t=>{if(!(t instanceof Ee))return;let n=t;for(;n&&n!==e&&!n.userData.collisionGeometry;)n=n.parent;if(n?.userData.collisionGeometry==="curb"&&t instanceof kn){t.geometry.computeBoundingBox();const a=new Be,l=new Be,c=new gt,u=new b;for(let h=0;h<t.count;h++){if(t.getMatrixAt(h,a),l.multiplyMatrices(t.matrixWorld,a),c.copy(t.geometry.boundingBox).applyMatrix4(l),c.getSize(u),u.y<=.4){const d={minX:c.min.x,maxX:c.max.x,minZ:c.min.z,maxZ:c.max.z,top:c.max.y};this.stepCount++;for(let f=Math.floor((d.minX-.09)/2);f<=Math.floor((d.maxX+.09)/2);f++)for(let g=Math.floor((d.minZ-.09)/2);g<=Math.floor((d.maxZ+.09)/2);g++){const _=`${f},${g}`,p=this.steps.get(_)??[];p.push(d),this.steps.set(_,p)}continue}this.add({minX:c.min.x-.22,maxX:c.max.x+.22,minZ:c.min.z-.22,maxZ:c.max.z+.22})}return}if(t instanceof kn)return;if(n?.userData.collisionGeometry==="architecture"){this.addArchitecture(t);return}let s=t;for(;s&&s!==e;){if(s.userData.noStaticCollision||s.userData.sharedAssetGeometry)return;s=s.parent}if(!["BoxGeometry","CylinderGeometry","SphereGeometry","TorusGeometry"].includes(t.geometry.type))return;const r=new gt().setFromObject(t),o=r.getSize(new b);r.max.y<.22||r.min.y>1.35||o.y<.1||Math.max(o.x,o.z)<.1||this.add({minX:r.min.x-.22,maxX:r.max.x+.22,minZ:r.min.z-.22,maxZ:r.max.z+.22})})}addArchitecture(e){const t=e.geometry,n=t.getAttribute("position");if(!n)return;const s=new Map,r=.12,o=t.index,a=o?.count??n.count,l=(h,d,f)=>{const g=[];for(let _=0;_<h.length;_++){const p=h[_],m=h[(_+1)%h.length],v=f?p.y>=d:p.y<=d,y=f?m.y>=d:m.y<=d;v&&g.push(p),v!==y&&g.push(p.clone().lerp(m,(d-p.y)/(m.y-p.y)))}return g},c=.34+.18,u=.34+2.1;for(let h=0;h+2<a;h+=3){let d=[0,1,2].map(m=>new b().fromBufferAttribute(n,o?o.getX(h+m):h+m).applyMatrix4(e.matrixWorld));if(d=l(l(d,c,!0),u,!1),!d.length)continue;const f=Math.min(...d.map(m=>m.x)),g=Math.max(...d.map(m=>m.x)),_=Math.min(...d.map(m=>m.z)),p=Math.max(...d.map(m=>m.z));for(let m=Math.floor(_/r);m<=Math.floor(p/r);m++){const v=s.get(m)??new Set;for(let y=Math.floor(f/r);y<=Math.floor(g/r);y++)v.add(y);s.set(m,v)}}for(const[h,d]of s){const f=[...d].sort((g,_)=>g-_);for(let g=0;g<f.length;){const _=f[g];let p=_;for(;++g<f.length&&f[g]===p+1;)p=f[g];this.add({minX:_*r-.22,maxX:(p+1)*r+.22,minZ:h*r-.22,maxZ:(h+1)*r+.22})}}}add(e){this.count++;for(let t=Math.floor(e.minX/2);t<=Math.floor(e.maxX/2);t++)for(let n=Math.floor(e.minZ/2);n<=Math.floor(e.maxZ/2);n++){const s=`${t},${n}`,r=this.cells.get(s)??[];r.push(e),this.cells.set(s,r)}}blocked(e,t){return this.cells.get(`${Math.floor(e/2)},${Math.floor(t/2)}`)?.some(n=>e>n.minX&&e<n.maxX&&t>n.minZ&&t<n.maxZ)??!1}surfaceHeight(e,t,n){let s=n;for(const r of this.steps.get(`${Math.floor(e/2)},${Math.floor(t/2)}`)??[]){const o=Math.max(r.minX-e,e-r.maxX,r.minZ-t,t-r.maxZ,0),a=Math.max(0,1-o/.09),l=a*a*(3-2*a);s=Math.max(s,n+(r.top-n)*l)}return s}}function pa(i,e,t){if(!t(i,e))return{x:i,z:e};for(let n=.25;n<=5;n+=.25){const s=Math.ceil(n*24);for(let r=0;r<s;r++){const o=r/s*Math.PI*2,a={x:i+Math.cos(o)*n,z:e+Math.sin(o)*n};if(!t(a.x,a.z))return a}}return{x:i,z:e}}const fM=["wood","plaster","stone","metal","fabric","roof"];class pM{constructor(e){this.sources=e}sources;maps=new Map;apply(e){let t=0;return e.traverse(n=>{if(!(n instanceof Ee)||n instanceof kn||n.userData.sharedAssetGeometry||n.userData.noModelTexture)return;let s;for(let l=n;l;l=l.parent){if(l.userData.noModelTexture||l.userData.sharedAssetGeometry)return;s??=l.userData.materialKind}const r=n.geometry;if(!["BoxGeometry","CylinderGeometry","SphereGeometry","TorusGeometry"].includes(r.type))return;r.computeBoundingBox();const o=r.boundingBox.getSize(new b),a=Array.isArray(n.material)?n.material:[n.material];for(const l of a){if(!(l instanceof jt)||l.map||l.transparent||l.roughness<.5||l.emissiveIntensity>.1&&l.emissive.getHex()!==0)continue;const c=l.color;if(c.g>c.r*1.05&&c.g>c.b*1.04&&(!s||s==="stone"))continue;const h=s??(c.r>c.b*1.18&&c.r>c.g*1.08?"wood":Math.max(c.r,c.g,c.b)<.32?"metal":"stone"),d=this.sources.get(`model-${h}`);if(!d)continue;const f=Math.max(.25,Math.round(Math.max(o.x,o.z)/2*4)/4),g=Math.max(.25,Math.round((o.y<.3?Math.min(o.x,o.z):o.y)/2*4)/4),_=`${h}:${f}:${g}`;let p=this.maps.get(_);p||(p=d.clone(),p.repeat.set(f,g),p.needsUpdate=!0,this.maps.set(_,p)),l.map=p,l.roughness=h==="metal"?.6:h==="fabric"?1:.9,l.metalness=h==="metal"?.22:0,l.needsUpdate=!0,n.userData.sharedAssetMap=!0,t++}}),t}}const mM=["north","northEast","east","southEast","south","southWest","west","northWest"];async function Vl(i,e){let t;for(let n=0;n<3;n++)try{const s=await fetch(i,{signal:AbortSignal.timeout(25e3),cache:n?"reload":"default"});if(!s.ok)throw new Error(`Character resource HTTP ${s.status}: ${i}`);return await e(s)}catch(s){t=s,n<2&&await new Promise(r=>setTimeout(r,800*(n+1)))}throw t}async function ep(i,e={directions:mM,motions:["idle","walk"]},t){const n=await Vl(i,h=>h.json());if(n.schemaVersion!==2)throw new Error("Unsupported drawn character catalog");if(!e.directions.length||!e.motions.includes("idle"))throw new Error("Invalid drawn character requirements");const s=e.directions.flatMap(h=>e.motions.map(d=>{const f=n.directions?.[h]?.[d];if(!f||!Number.isInteger(f.frameCount)||(d==="walk"?f.frameCount<16||f.frameCount>32:f.frameCount!==24)||f.cellSize!==512||!Number.isFinite(f.durationMs)||f.durationMs<=0||f.gaitCycles!=null&&(!Number.isInteger(f.gaitCycles)||f.gaitCycles<1||f.gaitCycles>4)||f.anchor?.[0]!==256||Math.abs(f.anchor?.[1]-457.333333)>.01||!Array.isArray(f.contentBounds)||f.contentBounds.length!==4||!/^[a-zA-Z0-9-]+\.(?:png|webp)$/.test(f.file))throw new Error(`Incomplete drawn character: ${h}/${d}`);return{direction:h,motion:d,animation:f}})),r=s.length+1;let o=1;t?.(o,r);const a=Math.max(...s.map(({animation:h})=>Math.max(h.anchor[0]-h.contentBounds[0],h.contentBounds[2]-h.anchor[0]))),l=Math.max(...s.map(({animation:h})=>h.anchor[1]-h.contentBounds[1])),c=Math.min(88/a,236/l),u=new Map;try{const h=await Promise.all(s.map(({animation:d})=>Vl(new URL(d.file,new URL(i,window.location.href)),f=>f.blob())));for(const[d,{direction:f,motion:g,animation:_}]of s.entries()){const p=await createImageBitmap(h[d]);try{if(p.width!==_.columns*_.cellSize||p.height!==_.rows*_.cellSize)throw new Error("Drawn atlas size mismatch");const m=[];u.set(`${f}:${g}`,m);for(let v=0;v<_.frameCount;v++){const y=document.createElement("canvas");y.width=192,y.height=256,y.getContext("2d").drawImage(p,v%_.columns*_.cellSize,Math.floor(v/_.columns)*_.cellSize,_.cellSize,_.cellSize,96-_.anchor[0]*c,252-_.anchor[1]*c,_.cellSize*c,_.cellSize*c);const T=new ls(y);T.colorSpace=ut,T.minFilter=It,T.magFilter=It,T.generateMipmaps=!1,m.push(T)}}finally{p.close()}t?.(++o,r)}}catch(h){for(const d of u.values())d.forEach(f=>f.dispose());throw h}return{direction(h){if(e.directions.includes(h))return h;if(e.directions.length===1)return e.directions[0];const d=h.endsWith("East")?"east":h.endsWith("West")?"west":h;if(!e.directions.includes(d))throw new Error(`Missing drawn direction: ${h}`);return d},texture(h,d,f){const g=u.get(`${h}:${d}`);return g[(f%g.length+g.length)%g.length]},idleFrame(h,d){const f=n.directions[h].idle;return Math.floor(d*1e3/f.durationMs*f.frameCount)%f.frameCount},walkFrame(h,d,f){const g=n.directions[h].walk,_=1e3*32/24,p=Math.max(.5,g.durationMs/_);return(Math.floor(d/(f*(g.gaitCycles??1)*p)*g.frameCount)%g.frameCount+g.frameCount)%g.frameCount}}}const kr={mika:{role:"插画爱好者",home:"中央街西侧",morning:[[-5.3,8.4,"画街角速写",12],[-5.3,-4.8,"去公寓取画本",7],[-14,-4.8,"整理画具",12],[-5.3,4.8,"观察街景",8]],afternoon:[[-5.3,4.8,"去花园写生",6],[-23,4.8,"画花园速写",20],[-5.3,16.5,"去咖啡馆",5],[-14,16.5,"等一杯咖啡",18]],evening:[[-14,16.5,"看咖啡馆灯光",18],[-5.3,16.5,"散步回家",8],[-5.3,-4.8,"收好画本",18]],rain:[[-5.3,16.5,"去咖啡馆避雨",6],[-14,15.8,"在檐下整理速写",25]],lines:["我在画每天路过的人。你若在这里住久了，也会出现在画里。","花园今天的颜色很好看。我画得慢，倒正好听见风吹草叶。","夜里的窗灯像一张新地图。走累了，去公寓睡一觉吧。"]},chen:{role:"街区旧事讲述人",home:"图书馆附近",morning:[[5.5,-4.8,"沿街晨走",8],[14,-4.8,"看图书馆新书",22],[20.8,-4.8,"歇脚看报",14]],afternoon:[[20.8,-4.8,"带旧书去馆里",10],[14,-4.8,"等馆员收书",20],[5.5,-4.8,"街口散步",10]],evening:[[14,-4.8,"聊聊旧街区",20],[5.5,-4.8,"慢慢回家",12]],rain:[[14,-4.9,"在图书馆檐下看报",30],[20.8,-4.8,"听雨歇脚",20]],lines:["以前这里只有一条临河小路。馆员许岚把旧照片都收好了，有空去听她讲讲。","种花不能急。我年轻时也总想一夜就把院子种满。","今天走得够远了。明天还是这条街，却总会碰到新故事。"]},yuan:{role:"便利店帮手",home:"中央街东南侧",morning:[[4.8,13.6,"清点早间货品",12],[4.8,4.8,"沿街送货",6],[20,4.8,"检查街角",8],[20,16.5,"把货送回店边",18]],afternoon:[[20,16.5,"整理花种",18],[14,16.5,"替店里照看花束",15],[4.8,16.5,"稍作休息",10]],evening:[[14,16.5,"收拾店前货箱",20],[4.8,16.5,"晚间散步",10]],rain:[[14,15.8,"把货箱移到檐下",30],[20,16.5,"看顾货品",15]],lines:["店里收鲜花，也卖花种。先卖一朵试试，赚来的钱够买下一轮花种。","活动室阿禾正在布置聚会。要送花的话，留一朵在背包里就好。","店里一直亮着灯，需要花种随时来。别把自己累着了。"]},guard:{role:"公寓巡查员",home:"河畔公寓 B 座",morning:[[42.5,-4.8,"检查公寓门前",18],[34,-4.8,"巡视住户信箱",12],[28,0,"巡查街角",8]],afternoon:[[28,0,"巡视公共通道",10],[42.5,4.8,"检查街灯",14],[42.5,-4.8,"回门前值班",20]],evening:[[42.5,4.8,"夜间巡查",15],[34,-4.8,"检查楼门",20],[42.5,-4.8,"守候晚归居民",20]],rain:[[34,-4.9,"在公寓檐下值班",30],[42.5,-4.8,"提醒路面湿滑",20]],lines:["东边诊所、洗衣房和活动室都开着。认认门，以后日子就方便了。","年轻人搬来以后，街上热闹多了。活动室需要帮忙可以去问阿禾。","夜里路灯都查过了。放心走，累了就回公寓休息。"]},neighbor:{role:"河畔园艺爱好者",home:"河畔南侧步道",morning:[[54.8,4.8,"看看沿街绿植",14],[54.8,16.5,"晨间散步",12],[62,16.5,"等邻居洗衣",16]],afternoon:[[62,16.5,"聊聊种花",18],[54.8,16.5,"去活动室看看",6],[41,16.5,"帮聚会挑花色",20]],evening:[[54.8,18.9,"沿河看晚霞",24],[62,16.5,"晚间散步",12]],rain:[[62,15.8,"在洗衣房檐下等雨停",30],[54.8,16.5,"照看门前绿植",14]],lines:["我叫小林，喜欢种花。西边社区花园的土松，第一次去可以从一粒种子开始。","洗衣房的小夏总能把等待的时间过得很有趣。你们应该聊得来。","不一定每天都忙。看看河水，听听街上的声音，也算好好过一天。"]},courier:{role:"街区快递员",home:"河畔站与各楼入口",morning:[[45.5,6.5,"整理待送包裹",10],[34,16.5,"给活动室送件",10],[62,-4.8,"给诊所送件",10],[34,-4.8,"给住户送件",10]],afternoon:[[34,-4.8,"核对门牌",10],[62,16.5,"给洗衣房送件",12],[41.6,19.1,"在河畔站歇脚",20]],evening:[[41.6,19.1,"清点最后一批包裹",24],[45.5,6.5,"收好配送单",18]],rain:[[41.6,19.1,"在公交站边护好包裹",30],[34,15.8,"送完最后一件",15]],lines:["叫我阿哲就行。门牌多，路也多，不过总能送到。你按手账里的路标走就不会迷路。","今天活动室收了不少东西，就差一朵摆在桌上的花了。","最后一件也送好了。终于能慢慢走回家，不用再赶路。"]},nurse:{role:"社区护理员",home:"诊所门前",morning:[[66.3,-4.7,"整理义诊资料",16],[62,-4.7,"提醒居民看公告",22],[54.5,-4.7,"短程巡访",12]],afternoon:[[54.5,3.5,"午间散步",12],[66.3,3.5,"向邻居问好",12],[66.3,-4.7,"返回诊所",22]],evening:[[62,-4.7,"收好健康宣传单",25],[66.3,-4.7,"等换班同事",18]],rain:[[62,-5,"在诊所檐下值守",30],[66.3,-4.7,"提醒居民小心台阶",20]],lines:["我是小安，负责社区护理。诊所右侧公告可以进去看看，别忘了规律休息。","聚会热闹，也记得留出休息时间。公寓的床可比硬撑着走路舒服。","忙完就回家吧。明天还有花要看，还有朋友要见。"]}},Ba={barista:{role:"白鸟咖啡店员",activity:"整理杯具，招呼客人",lines:["我是小许。新面孔先坐坐吧。西侧花园能种花，便利店也收自己种出的鲜花。","阿禾提过你，聚会的花就拜托你了。送完花，回来告诉我一声。","花已经摆好了？太好了。等大家都来，这里又能多认识几个朋友。今天好好休息，明天见。"]},manager:{role:"公寓管家",activity:"整理住户来信",lines:["我姓方，大家叫我方姨。电梯在门厅右后方，你的房间里有床，随时可以休息。","不用急着把整条街一天走完。你的房间一直在，出门也记得回来。","街坊都记住你了吧？欢迎在晴川住下来。"]},librarian:{role:"街区档案馆员",activity:"整理旧地图与照片",lines:["我叫许岚。这张旧地图上，河畔还只是一条小路。如今诊所、洗衣房和活动室都在了，你可以沿东边走一圈。","陈叔常来补充老故事。我把今天的新街区也留了一页，等你来写。","你为聚会送的花，也算街区新故事的一笔。地图不只画路，也留住相遇。"]},reader:{role:"旅行读者",activity:"翻阅城市游记",lines:["我是小遥。每到一个地方，我会先看地图，再找一家能坐下来的小店。","这里的居民都愿意说说自己的故事。你可以打开手账看看认识了谁。","有时候旅程的终点，就是愿意多住一天。"]},doctor:{role:"值班医生",activity:"整理健康记录",lines:["我是林医生。身体不舒服就来坐坐。右侧健康公告写着作息建议，回家睡一觉也很有用。","从花园走到河畔，已经是不错的运动量了。休息和散步一样重要。","邻里能互相照看，日子就安心多了。"]},laundry_neighbor:{role:"手作爱好者",activity:"等衣服洗好，折叠布料",lines:["叫我小夏吧。我等衣服的时候常去隔壁活动室，阿禾正准备邻里聚会，你也来吗？","准备花束时留一朵就够。别把种出来的花全卖掉啦。","下回见面，我带自己做的小桌布来。你的花和它一定很配。"]},volunteer:{role:"邻里活动志愿者",activity:"布置聚会桌面",lines:["我是阿禾。许岚和小夏说起过你，我们正缺一朵桌花。先熟悉街区，再带一朵自己种的鲜花来就好。","带来鲜花了吗？我会把它放在大家都能看到的桌上。你可以选择送花，也可以先留着。","花已经收到了，谢谢你！去白鸟咖啡告诉小许吧，他一直盼着这次聚会。"]}},gM=Object.fromEntries([...Object.entries(kr).map(([i,e])=>[i,e.role]),...Object.entries(Ba).map(([i,e])=>[i,e.role])]);function tp(i,e,t){const n=kr[i];if(!n)return;const s=t?"rain":e<6?"evening":e<11?"morning":e<17?"afternoon":"evening",r={morning:"早间日常",afternoon:"午后日常",evening:"晚间日常",rain:"雨天安排"};return{key:`${i}:${s}`,label:r[s],stops:n[s].map(([o,a,l,c])=>({x:o,z:a,activity:l,wait:c??12}))}}function _M(i,e,t,n,s){const r=kr[i]??Ba[i];if(!r)return"";const o=e.delivered>0?2:e.completed.includes("street-story-1")?1:0,a=(e.talkCounts[i]??0)===0,l=a?"你好，很高兴认识你。":"又见面了。",c=n&&kr[i]?"下雨了，我把事情挪到有遮挡的地方慢慢做。":t>=19&&kr[i]?"天黑了，脚步也该慢一点。":"",u=s?`我正${s}。`:"";return`${l}${u}${c}${a&&o>0?r.lines[0]:""}${r.lines[o]}`}class xM{constructor(e=360,t=Math.random){this.random=t,this.drops=Array.from({length:e},()=>{const n={};return this.refill(n),n.y=.4+this.random()*(this.top-.4),n})}random;halfWidth=23;halfDepth=21;top=13;drops;originX=0;originZ=0;ready=!1;anchor(e,t){const n=Math.floor(e/8)*8,s=Math.floor(t/8)*8;if(!(this.ready&&n===this.originX&&s===this.originZ)){if(this.ready)for(const r of this.drops)r.x=this.wrap(r.x+this.originX-n,this.halfWidth),r.z=this.wrap(r.z+this.originZ-s,this.halfDepth);this.originX=n,this.originZ=s,this.ready=!0}}advance(e,t){for(const n of this.drops)n.x=this.wrap(n.x+n.driftX*e,this.halfWidth),n.z=this.wrap(n.z+n.driftZ*e,this.halfDepth),n.y-=n.speed*e,n.y-n.length/2<=t(this.originX+n.x,this.originZ+n.z)&&(this.refill(n),n.y-=this.random()*Math.min(e,.1)*n.speed)}edgeScale(e){const t=Math.max(0,Math.min(1,Math.min(this.halfWidth-Math.abs(e.x),this.halfDepth-Math.abs(e.z))/3));return t*t*(3-2*t)}refill(e){e.x=(this.random()*2-1)*this.halfWidth,e.z=(this.random()*2-1)*this.halfDepth,e.y=this.top,e.speed=8.8+this.random()*3.4,e.length=.28+this.random()*.28,e.width=.01+this.random()*.005,e.driftX=.025+this.random()*.065,e.driftZ=(this.random()-.5)*.045}wrap(e,t){return((e+t)%(t*2)+t*2)%(t*2)-t}}const ma=4.25,Hr=.34,np=[[-33,-3],[-30,-3],[-33,1],[-30,1]];let Ds=[];const vM=i=>Math.max(0,Math.min(1,i)),$n=i=>{const e=vM(i);return e*e*(3-2*e)};function ga(i,e,t,n,s,r){const o=Math.abs(i-t)-s,a=Math.abs(e-n)-r;return Math.hypot(Math.max(o,0),Math.max(a,0))+Math.min(Math.max(o,a),0)}function Dc(i,e){const t=Math.max(.95-Math.abs(i-e),0)/.95;return Math.min(i,e)-t*t*.95*.25}function fn(i,e){let t=1e4;for(const n of[0,48,96])t=Dc(t,ga(i,e,n,-13.5,ma,34.5));return t=Dc(t,ga(i,e,40,-25,80,ma)),Dc(t,ga(i,e,60,0,60,ma))}function yM(i){Ds=[{id:"south-promenade",x:40,z:16.6,w:160,d:2.4},{id:"garden-approach",x:-22,z:-1,w:36,d:1.35},{id:"garden-gate",x:-31.5,z:2.1,w:1.25,d:8.8},{id:"west-apartment-approach",x:-12.6,z:-5.25,w:15.2,d:1.6}];for(const e of i){Ds.push({id:`${e.id}-foundation`,x:e.x,z:e.z,w:e.w+.7,d:e.d+.7});const t=e.z+e.d/2,n=e.z<-30?-30.3:e.z<0?-5.3:16.6;Ds.push({id:e.id,x:e.x,z:(t+n)/2,w:2.4,d:Math.abs(n-t)+.6}),Ds.push({id:`${e.id}-landing`,x:e.x,z:t+.75,w:e.w+.8,d:1.5})}return Ds}function es(i,e){let t=fn(i,e)-2;for(const n of Ds)t=Math.min(t,ga(i,e,n.x,n.z,n.w/2,n.d/2));return t}function oo(i,e){const t=Math.abs((i+31.5)/5.15),n=Math.abs((e+1)/5.5);return(Math.pow(Math.pow(t,5)+Math.pow(n,5),1/5)-1)*5.15+.12*Math.sin(i*3.1+e*1.8)+.08*Math.sin(e*4.2)}function MM(i,e){let t=.105+.022*Math.sin(i*3.2+e)*Math.cos(e*2.7);for(const[n,s]of np){const r=i-n,o=e-s,a=$n((1.12-Math.abs(r))/.35)*$n((1.06-Math.abs(o))/.38),l=.11+.15*Math.pow(.5+.5*Math.cos((o-.3)*Math.PI/.3),3);t+=a*l}return t}function ip(i,e){let t=1;for(const n of[0,48,96])for(const s of[-30.45,-19.55,-5.45,5.45])Math.abs(i-n)<6.4&&(t=Math.min(t,$n((Math.abs(e-s)-.86)/.65)));for(const n of[-25,0])for(const s of[0,48,96])for(const r of[-1,1])n===0&&s===0&&r===-1||Math.abs(e-n)<6.4&&(t=Math.min(t,$n((Math.abs(i-(s+r*5.45))-.86)/.65)));return t}function Ct(i,e){const t=fn(i,e);if(t<=0)return .065+.055*$n(-t/ma);const n=es(i,e),s=.07+.055*Math.sin(i*.43+e*.22)*Math.cos(e*.48)+.025*Math.sin(i*1.2-e*.61),r=oo(i,e),o=MM(i,e),a=s*$n(r/.6)+o*(1-$n(r/.6)),l=.075+(Hr-.075)*ip(i,e),c=l+(Hr-l)*$n((t-.18)/1.55),u=t<2.1?c:Hr;return n<=0?u:u*(1-$n(n/.12))+a*$n(n/.12)}function sp(i,e){return fn(i,e)<0?"road":es(i,e)<=0?"walk":oo(i,e)<0?"soil":"grass"}const SM={clear:"☀ 晴朗",cloudy:"☁ 多云",rain:"☂ 小雨"};class wM{scene;hemi;sun;effectRoot=new it;rain;wetPatches=[];rainSplashes=[];rainField=new xM;rainUp=new b(0,1,0);rainAxis=new b;swayEntries=[];windDirection=new se;windState={directionX:.88,directionZ:.48,strength:.85,rain:0};waveEntries=[];animatedLights=[];weather="clear";daylight=1;cloud=0;rainfall=0;moisture=0;indoors=!1;overview=!1;hour=8.5;dusk=0;tint=new pe;daySky=new pe(13228244);duskSky=new pe(14000523);rainSky=new pe(9414573);rainNightSky=new pe(1911612);dayHemi=new pe(15005951);dayGround=new pe(8226429);daySun=new pe(16771265);duskSun=new pe(16756856);elapsed=0;rainDummy=new ot;constructor(e,t,n){this.scene=e,this.hemi=t,this.sun=n,this.effectRoot.name="atmosphere-effects",this.scene.add(this.effectRoot);const s=new Gt({color:12113890,transparent:!0,opacity:.64,depthWrite:!1});this.rain=new kn(new bn(1,1,1),s,this.rainField.drops.length),this.rain.frustumCulled=!1,this.rain.name="procedural-rain",this.effectRoot.add(this.rain);const r=new Gt({color:12179669,transparent:!0,opacity:0,depthWrite:!1,side:Vt});for(let a=0;a<42;a++){const l=new Ee(new xu(.035,.11,10),r.clone());l.rotation.x=-Math.PI/2,l.visible=!1,l.userData.remaining=Math.random(),l.userData.duration=.7+Math.random()*.6,this.effectRoot.add(l),this.rainSplashes.push(l)}const o=[[-18.2,16.9,.44,1.55],[-15.8,17.7,.32,1.1],[-12.2,16.5,.38,1.35],[-7.4,16.8,.28,1.2],[-3.8,15.6,.3,1.5],[2.6,15.8,.32,1.25],[8.5,5.1,.36,1.45],[14.8,4.8,.28,1.2],[-14.5,-4.8,.34,1.35],[0,-4.7,.3,1.4],[14.2,-4.5,.32,1.25]];for(const[a,l,c,u]of o){const h=new Ee(new mn(c,u),new Gt({color:11981780,transparent:!0,opacity:0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.rotation.z=(a*.31+l*.17)%.2,h.position.set(a,Ct(a,l)+.012,l),h.renderOrder=1,h.visible=!1,this.effectRoot.add(h),this.wetPatches.push(h)}this.rain.visible=!1}get mode(){return this.weather}get label(){return SM[this.weather]}get rainAmount(){return this.rainfall}get wetness(){return this.moisture}get lightLevel(){return this.daylight}get wind(){return this.windState}inspectRain(){return{visible:this.effectRoot.visible&&this.rain.visible,amount:this.rainfall,count:this.rainField.drops.length,origin:[this.rainField.originX,this.rainField.originZ],drops:this.rainField.drops.map(e=>({...e})),splashes:this.rainSplashes.filter(e=>e.visible).map(e=>e.position.toArray())}}sync(e,t,n){this.weather=e.weather,this.daylight=e.daylight,this.dusk=e.dusk,this.hour=e.hour,this.indoors=t,this.overview=n}clearWorldAnimations(){this.swayEntries.length=0,this.waveEntries.length=0,this.animatedLights.length=0}registerSway(e,t=.025,n=1.4,s=0){this.swayEntries.push({object:e,baseRotation:e.rotation.clone(),amount:t,speed:n,phase:s})}registerWave(e,t=.025,n=1.2,s=0){this.waveEntries.push({object:e,baseY:e.position.y,amount:t,speed:n,phase:s})}registerLight(e){this.animatedLights.push({light:e,baseIntensity:e.intensity})}update(e,t,n){this.elapsed+=e;const s=this.weather==="clear"?0:this.weather==="cloudy"?.55:1;this.cloud=kt.damp(this.cloud,s,.12,e),this.rainfall=kt.damp(this.rainfall,this.weather==="rain"?1:0,.22,e),this.moisture=kt.damp(this.moisture,this.rainfall,this.rainfall>this.moisture?.08:.012,e);const r=this.windDirection.set(.88+Math.sin(this.elapsed*.09)*.06,.48+Math.cos(this.elapsed*.11)*.06).normalize();this.windState.directionX=r.x,this.windState.directionZ=r.y,this.windState.strength=.82+this.cloud*.37+Math.sin(this.elapsed*.27)*.075,this.windState.rain=this.rainfall,this.effectRoot.visible=!this.indoors,this.applyLighting();const o=n?.x??t.position.x,a=n?.z??t.position.z;this.rainField.anchor(o,a),this.rain.visible=this.rainfall>.015,this.rain.material.opacity=this.rainfall*.64;const l=this.moisture>.01;for(const[c,u]of this.wetPatches.entries())u.visible=l,u.material.opacity=l?this.moisture*(.07+Math.sin(this.elapsed*.7+c*.8)*.018):0;if(this.rain.visible){this.rainField.advance(e,Ct);for(let c=0;c<this.rainField.drops.length;c++){const u=this.rainField.drops[c],h=this.rainField.edgeScale(u);this.rainDummy.position.set(this.rainField.originX+u.x,u.y,this.rainField.originZ+u.z),this.rainDummy.quaternion.setFromUnitVectors(this.rainUp,this.rainAxis.set(-u.driftX,u.speed,-u.driftZ).normalize()),this.rainDummy.scale.set(u.width*h,u.length*h,u.width*h),this.rainDummy.updateMatrix(),this.rain.setMatrixAt(c,this.rainDummy.matrix)}this.rain.instanceMatrix.needsUpdate=!0;for(const c of this.rainSplashes){if(c.userData.remaining-=e,c.userData.remaining<=0){c.userData.duration=.7+Math.random()*.6,c.userData.remaining=c.userData.duration;const d=o+(Math.random()*2-1)*18,f=a+(Math.random()*2-1)*16;c.position.set(d,Ct(d,f)+.016,f),c.userData.placed=!0}const u=1-c.userData.remaining/c.userData.duration;if(c.visible=!!c.userData.placed&&u<.72,!c.visible)continue;const h=.35+u*.7;c.scale.setScalar(h),c.material.opacity=(1-u/.72)*.22*this.rainfall}}else for(const c of this.rainSplashes)c.visible=!1;for(const c of this.swayEntries)c.object.rotation.copy(c.baseRotation),c.object.rotation.z+=Math.sin(this.elapsed*c.speed+c.phase)*c.amount*this.windState.strength*this.windState.directionX,c.object.rotation.x+=Math.cos(this.elapsed*c.speed*.73+c.phase)*c.amount*.35*this.windState.strength*this.windState.directionZ;for(const c of this.waveEntries)c.object.position.y=c.baseY+Math.sin(this.elapsed*c.speed+c.phase)*c.amount*(1+this.cloud*.7);for(const[c,u]of this.animatedLights.entries())u.light.intensity=(u.light.userData.streetLight?kt.lerp(.8,5,1-this.daylight):u.baseIntensity)*(.96+Math.sin(this.elapsed*2.2+c*1.7)*.025)}applyLighting(){const e=this.daylight,t=this.tint.set(2438475).lerp(this.daySky,e);t.lerp(this.duskSky,this.dusk*.24*(1-this.cloud)),t.lerp(this.rainSky.set(9414573).lerp(this.rainNightSky,1-e),this.cloud*.65),this.scene.background.copy(t);const n=this.scene.fog;n.color.copy(t),n.density=this.overview?.0014:kt.lerp(.009,.0055,e)+this.cloud*.0035,this.hemi.color.set(10205136).lerp(this.dayHemi,e),this.hemi.groundColor.set(3424330).lerp(this.dayGround,e),this.hemi.intensity=this.indoors?1.5:kt.lerp(.95,1.65-this.cloud*.4,e),this.sun.color.set(9415121).lerp(this.daySun,e),this.sun.color.lerp(this.duskSun,this.dusk*.45*(1-this.cloud)),this.sun.intensity=kt.lerp(.42,2.7-this.cloud*1.15,e);const s=(this.hour-12)/12*Math.PI;this.sun.position.set(40+Math.sin(s)*28,28+Math.cos(s)*8,25)}}function rp(){const i=new it;i.name="organic-tree-fallback";const e=new jt({color:7955020,roughness:.96}),t=(n,s,r,o)=>{const a=s.clone().sub(n),l=new Ee(new Fi(o,r,a.length(),12),e);l.position.copy(n).add(s).multiplyScalar(.5),l.quaternion.setFromUnitVectors(new b(0,1,0),a.normalize()),l.name="ascending-round-limb",i.add(l)};t(new b(0,0,0),new b(-.05,1.2,.02),.21,.15),t(new b(-.05,1.15,.02),new b(.01,2.7,-.04),.15,.035),t(new b(-.04,1.35,.02),new b(-.67,2.63,.02),.13,.025),t(new b(-.01,1.68,0),new b(.61,2.85,.08),.105,.02);for(const[n,s,r,o,a]of[[-.6,2.61,.08,.82,5471571],[.58,2.76,.04,.83,6654042],[-.12,3.05,-.12,.94,6062164],[.12,3.61,.03,.65,7639905]]){const l=new Ee(new ro(o,2),new jt({color:a,roughness:1,flatShading:!0}));l.position.set(n,s,r),l.scale.set(1,.78,.86),i.add(l)}return i.traverse(n=>{n instanceof Ee&&(n.userData.noStaticCollision=!0,n.castShadow=!0,n.receiveShadow=!0)}),i}class EM{root=new it;clusters=[];glints=[];wetPatches=[];porchLight;elapsed=0;constructor(e,t=!1){this.root.name="white-bird-corner-style-sample",e.add(this.root),t&&this.makeTree();const n=[[-18.1,17.5,.035,.45,.031],[-16.6,15.6,.045,.57,.031],[-15.4,17.8,.035,.37,.031],[-12.3,17.1,.05,.48,.031],[-10,15.9,.04,.52,.031],[-8.6,17.7,.03,.42,.031],[-3.55,15.2,.12,1.05,.083],[-3.04,17.1,.09,.72,.083],[-2.5,18.5,.11,1.2,.083],[-1.7,16.3,.08,.84,.083],[-.9,19.1,.1,.94,.083],[-19.2,23.2,.1,.8,.078],[-16.6,22.1,.07,.66,.078],[-14.7,24.3,.12,.95,.078],[-11.9,22.9,.09,.72,.078],[-9.8,24.5,.1,.82,.078]];for(const[r,[o,a,l,c]]of n.entries()){const u=new Ee(new mn(l,c),new Gt({color:r<6?14083293:15255957,transparent:!0,opacity:0,depthWrite:!1,side:Vt}));u.rotation.x=-Math.PI/2,u.rotation.z=(r%3-1)*.13,u.position.set(o,Ct(o,a)+.012,a),u.visible=!1,u.renderOrder=1,this.root.add(u),this.glints.push(u)}const s=[[[-22.4,21.55],[-19.8,21.32],[-18.2,21.88],[-19.5,22.55],[-22,22.45]],[[-16,23.1],[-14.2,22.65],[-11.8,23.05],[-10.9,24.05],[-13.4,24.35],[-15.7,23.8]],[[-8.9,21.9],[-6.7,21.58],[-5.8,22.1],[-7.4,22.77],[-9,22.55]],[[-3,24.3],[-1.2,23.75],[1.4,24],[2.3,24.9],[.4,25.3],[-2.6,25]]];for(const r of s){const o=new _u;o.moveTo(r[0][0],-r[0][1]);for(const[c,u]of r.slice(1))o.lineTo(c,-u);o.closePath();const a=new Ee(new Fa(o),new Gt({color:1975849,transparent:!0,opacity:.075,depthWrite:!1,side:Vt}));a.rotation.x=-Math.PI/2;const l=a.geometry.getAttribute("position");for(let c=0;c<l.count;c++)l.setZ(c,Ct(l.getX(c),-l.getY(c))+.009);a.name="subtle-asphalt-damp-patch",this.root.add(a),this.wetPatches.push(a)}this.porchLight=new _o(16762507,0,8.5,2),this.porchLight.position.set(-14,2.35,14.8),this.root.add(this.porchLight)}makeTree(){const e=rp();e.name="cafe-corner-layered-tree",e.position.set(-21,0,18),e.scale.setScalar(.84),this.root.add(e),this.clusters.push({group:e,phase:.73,speed:.84})}update(e,t,n,s){this.elapsed+=e;for(const a of this.clusters){const l=Math.sin(this.elapsed*.48+a.phase*.35);a.group.rotation.z=Math.sin(this.elapsed*a.speed+a.phase)*.025+l*.012,a.group.rotation.x=Math.cos(this.elapsed*a.speed*.71+a.phase)*.012}const r=t>.02,o=s<.3;this.porchLight.intensity=(1-s)*(4.7+t*1.8);for(const[a,l]of this.glints.entries()){const c=!r&&!o&&a>=11;l.visible=r||c,l.material.opacity=r?t*(o?.32:.12)*(.82+Math.sin(this.elapsed*.65+a*1.6)*.18):c?.035:0}for(const a of this.wetPatches)a.material.opacity=.035+n*.145}}const Cr=new b;function yn(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Cr.copy(e),Cr[n]=0,Cr.normalize();const c=.5*o/(o+a),u=1-Cr.angleTo(i)/l;return Math.sign(Cr[t])===1?u*c:a/(o+a)+c+c*(1-u)}class ao extends bn{constructor(e=1,t=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new b,c=new b,u=new b(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=h.length/6,_=new b,p=.5/o;for(let m=0,v=0;m<h.length;m+=3,v+=2)switch(l.fromArray(h,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),h[m+0]=u.x*Math.sign(l.x)+c.x*r,h[m+1]=u.y*Math.sign(l.y)+c.y*r,h[m+2]=u.z*Math.sign(l.z)+c.z*r,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/g)){case 0:_.set(1,0,0),f[v+0]=yn(_,c,"z","y",r,n),f[v+1]=1-yn(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),f[v+0]=1-yn(_,c,"z","y",r,n),f[v+1]=1-yn(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),f[v+0]=1-yn(_,c,"x","z",r,e),f[v+1]=yn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[v+0]=1-yn(_,c,"x","z",r,e),f[v+1]=1-yn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[v+0]=1-yn(_,c,"x","y",r,e),f[v+1]=1-yn(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),f[v+0]=yn(_,c,"x","y",r,e),f[v+1]=1-yn(_,c,"y","x",r,t);break}}static fromJSON(e){return new ao(e.width,e.height,e.depth,e.segments,e.radius)}}const oa=new pe;function Xn(i,e,t){const n=[];for(let s=0;s<i.length;s++){const r=i[s],o=i[(s+1)%i.length],a=e(r.x,r.z),l=e(o.x,o.z),c=t?a<=0:a>=0,u=t?l<=0:l>=0;if(c&&n.push(r),c!==u){const h=a/(a-l);n.push({x:r.x+(o.x-r.x)*h,z:r.z+(o.z-r.z)*h})}}return n}function TM(i,e){const t=new it;t.name="street-relief",t.userData.noStaticCollision=!0,t.userData.noModelTexture=!0,i.add(t);const n=Array.from({length:6},()=>({positions:[],uvs:[],colors:[]})),s=(c,u)=>{const h=n[u];for(let d=1;d+1<c.length;d++)for(const f of[c[0],c[d+1],c[d]]){h.positions.push(f.x,Ct(f.x,f.z),f.z),h.uvs.push(f.x,-f.z);const g=Math.sin(f.x*12.8+f.z*9.7)*Math.sin(f.z*19.3);oa.setRGB(1,1,1).multiplyScalar(u===3?.88+g*.1:.97+g*.025),h.colors.push(oa.r,oa.g,oa.b)}},r=400,o=205,a=.4;for(let c=0;c<o;c++)for(let u=0;u<r;u++){const h=-40+u*a,d=-52+c*a,f=h>-38&&h<-25&&d>-8&&d<6?4:1,g=a/f;for(let _=0;_<f;_++)for(let p=0;p<f;p++){const m=h+p*g,v=d+_*g,y={x:m,z:v},x={x:m+g,z:v},T={x:m+g,z:v+g},A={x:m,z:v+g};for(const C of[[y,x,T],[y,T,A]]){const P=Xn(C,fn,!0),S=(X,G)=>fn(X,G)+.22;s(Xn(P,S,!0),0),s(Xn(P,S,!1),5);const w=Xn(C,fn,!1);s(Xn(w,es,!0),1);const L=Xn(w,es,!1),O=(X,G)=>es(X,G)-.12;s(Xn(L,O,!0),2);const H=Xn(L,O,!1);s(Xn(H,oo,!0),3),s(Xn(H,oo,!1),4)}}}return[["terrain-asphalt",5.8,11579310],["terrain-paving",3.6,15327960],["terrain-paving",2.7,11184283],["terrain-soil",3.1,13216390],["terrain-turf",6.4,16777215],["terrain-asphalt",2.2,7568248]].forEach(([c,u,h],d)=>{const f=e(1,1,0,0,-10,c,u,h);i.remove(f),f.geometry.dispose();const g=f.material;g.map.repeat.set(1/u,1/u),g.map.offset.set(0,0),g.vertexColors=!0;const _=n[d],p=new Ft;p.setAttribute("position",new tt(_.positions,3)),p.setAttribute("uv",new tt(_.uvs,2)),p.setAttribute("color",new tt(_.colors,3)),p.computeVertexNormals();const m=new Ee(p,g);m.receiveShadow=!0,m.name=`relief-${c}-${d}`,t.add(m)}),bM(t),AM(t),RM(t),t}function Vr(i,e,t,n,s){const r=new kn(t,new jt({color:n,roughness:.92}),s.length),o=new ot;return s.forEach((a,l)=>{o.position.set(a.x,a.y,a.z),o.rotation.set(0,a.angle??0,0),o.scale.set(a.length??a.scale??1,a.height??a.scale??1,a.scale??1),o.updateMatrix(),r.setMatrixAt(l,o.matrix),r.setColorAt(l,new pe().setScalar(.91+l%7*.024))}),r.name=e,r.castShadow=r.receiveShadow=!0,i.add(r),r}function bM(i){const e=[];for(let s=-51.6;s<29.6;s+=.8)for(let r=-39.6;r<119.6;r+=.8){const o=[{x:r,z:s},{x:r+.8,z:s},{x:r+.8,z:s+.8},{x:r,z:s+.8}],a=[];for(let p=0;p<4;p++){const m=o[p],v=o[(p+1)%4],y=fn(m.x,m.z),x=fn(v.x,v.z);if(y<0!=x<0){const T=y/(y-x);a.push({x:m.x+(v.x-m.x)*T,z:m.z+(v.z-m.z)*T})}}if(a.length!==2)continue;const l=(a[0].x+a[1].x)/2,c=(a[0].z+a[1].z)/2,u=Math.hypot(a[0].x-a[1].x,a[0].z-a[1].z);if(u<.08)continue;const h=fn(l+.02,c)-fn(l-.02,c),d=fn(l,c+.02)-fn(l,c-.02),f=Math.hypot(h,d)||1,g=.02+.25*ip(l,c),_={x:l+h/f*.09,y:.07+g/2,z:c+d/f*.09,angle:Math.atan2(-(a[1].z-a[0].z),a[1].x-a[0].x),length:Math.max(.04,u-.024)/.73,height:g/.27};e.push(_)}const n=Vr(i,"jointed-bevelled-curbstones",new ao(.73,.27,.22,2,.035),14275003,e);n.userData.collisionGeometry="curb"}function AM(i){const e=[],t=[],n=[];for(const s of[0,48,96]){for(let r=-45;r<20;r+=3.4)Math.abs(r)>7&&Math.abs(r+25)>7&&e.push({x:s,y:Ct(s,r)+.012,z:r,angle:Math.PI/2});for(const r of[-30.45,-19.55,-5.45,5.45])for(let o=-3;o<=3;o++)t.push({x:s+o*1.05,y:Ct(s+o*1.05,r)+.014,z:r});for(const r of[-39,-12,12])for(const o of[-1,1])for(let a=0;a<8;a++)n.push({x:s+o*4.02,y:Ct(s+o*4.02,r)+.012,z:r-.29+a*.083})}for(const s of[-25,0])for(let r=s===0?8:-37;r<119;r+=3.4)[0,48,96].every(o=>Math.abs(r-o)>7)&&e.push({x:r,y:Ct(r,s)+.012,z:s});for(const s of[-25,0])for(const r of[0,48,96])for(const o of[-1,1]){if(s===0&&r===0&&o===-1)continue;const a=r+o*5.45;for(let l=-3;l<=3;l++){const c=s+l*1.05;t.push({x:a,z:c,y:Ct(a,c)+.014,angle:Math.PI/2})}}Vr(i,"road-centre-dashes",new bn(1.65,.012,.085),15326390,e).castShadow=!1,Vr(i,"crosswalk-painted-strips",new bn(.52,.012,1.5),15853261,t).castShadow=!1,Vr(i,"inset-drain-grate-bars",new bn(.3,.02,.033),4806231,n)}function RM(i){const e=[];for(let t=0;t<220;t++){const n=-36.6+t*1.618%1*10.2,s=-6.4+t*2.414%1*10.8;oo(n,s)>-.15||es(n,s)<.1||e.push({x:n,y:Ct(n,s)+.014,z:s,scale:.04+t%6*.014,angle:t*2.4})}Vr(i,"garden-loose-soil-clods",new pu(1,0),8547411,e)}function CM(i,e){const t=[],n=(o,a)=>sp(o,a)!=="grass"||es(o,a)<.1||e(o,a)?!1:!i.some(l=>Math.abs(o-l.x)<l.w/2+.4&&Math.abs(a-l.z)<l.d/2+.4),s=(o,a,l,c,u=!1,h=!1)=>{for(let d=-l/2;d<=l/2+.001;d+=Math.min(.25,l/2))for(let f=-c/2;f<=c/2+.001;f+=Math.min(.25,c/2))if(!n(o+d,a+f))return;for(const d of[-l/2,l/2])for(const f of[-c/2,c/2])if(!n(o+d,a+f))return;t.some(d=>Math.abs(o-d.x)<(l+d.w)/2+.25&&Math.abs(a-d.z)<(c+d.d)/2+.25)||t.push({id:`street-bed-${o.toFixed(2)}-${a.toFixed(2)}`,x:o,z:a,w:l,d:c,tree:u,frontage:h})},r=(o,a,l,c,u,h=!1)=>{let d;const f=g=>{if(d!==void 0&&g-d>1.1){const _=g-d-.12,p=(g+d)/2;s(u?p:l,u?l:p,u?_:c,u?c:_,!1,h)}d=void 0};for(let g=o;g<=a+.001;g+=.2)[-c/2,0,c/2].every(p=>{const m=u?g:l+p,v=u?l+p:g;return n(m,v)&&!t.some(y=>Math.abs(m-y.x)<y.w/2+.23&&Math.abs(v-y.z)<y.d/2+.23)})?d??=g:f(g-.2);f(a)};r(-38,118,-31.875,.9,!0,!0);for(const o of i.filter(a=>a.z<-30))for(const a of[0,48,96])for(const l of[-1,1]){const c=a+l*6.25,u=o.x-Math.sign(o.x-a)*(o.w/2+.35),h=Math.abs(u-c);if(h>.8&&h<2.7){const d=(u+c)/2;r(o.z-o.d/2+.35,-32.5,d,Math.min(1.1,h-.28),!1,!0)}}r(-38,118,-17.5,1.1,!0);for(const o of[0,48,96])for(const a of[-1,1])for(const l of[-44,-38,-13,12]){const c=o+a*7.35;c<-38||c>118||Math.abs(l+25)<9||Math.abs(l)<9||s(c,l,1.15,3.6,!1)}for(const o of[-29,25,87])s(o,-46.5,2.1,2.1,!0);return t}function IM(i,e,t){const n=new it;n.name="urban-street-planting",n.userData.noModelTexture=!0,i.add(n);const s=new jt({color:12039847,roughness:1}),r=new jt({color:6706752,roughness:1}),o=new jt({color:6455642,roughness:1}),a=[],l=[];e.forEach((f,g)=>{const _=Ct(f.x,f.z),p=Hr+.025,m=new it;m.name=f.id,n.add(m);const v=new _u,y=f.w/2,x=f.d/2,T=.19;v.moveTo(-y+T,-x),v.lineTo(y-T,-x),v.quadraticCurveTo(y,-x,y,-x+T),v.lineTo(y,x-T),v.quadraticCurveTo(y,x,y-T,x),v.lineTo(-y+T,x),v.quadraticCurveTo(-y,x,-y,x-T),v.lineTo(-y,-x+T),v.quadraticCurveTo(-y,-x,-y+T,-x);const A=new Ee(new Fa(v),r);A.rotation.x=-Math.PI/2,A.position.set(f.x,p,f.z),A.receiveShadow=!0,A.userData.noStaticCollision=!0,m.add(A);for(const P of[-1,1]){const S=p-_+.085,w=_+S/2,L=new Ee(new ao(f.w,S,.12,2,.035),s);L.position.set(f.x,w,f.z+P*f.d/2),m.add(L);const O=new Ee(new ao(.12,S,f.d,2,.035),s);O.position.set(f.x+P*f.w/2,w,f.z),m.add(O)}const C=new Ee(new bn(f.w,.75,f.d),new Gt({visible:!1}));if(C.position.set(f.x,p+.25,f.z),m.add(C),f.tree)t(f.x,f.z,.72);else{const P=Math.max(3,Math.ceil(Math.max(f.w,f.d)/.38)),S=Math.min(f.w,f.d),w=Math.min(.39,S*.41);for(let L=0;L<P;L++)for(const O of[-1,1]){const H=(L+.5)/P-.5,X=f.w>f.d,G=f.x+(X?H*(f.w-.35):O*S*.17),q=f.z+(X?O*S*.17:H*(f.d-.35)),Z=p+.18;for(let I=0;I<3;I++)a.push({x:G+Math.sin(L*2.3+I*2.1)*w*.22,y:Z+w*.68+I%2*.075,z:q+Math.cos(L+I*2.1)*w*.19,scale:w*(.85+L%4*.065)});f.frontage&&L%3===1&&O===1&&l.push({x:G,y:Z+w*1.5,z:q,scale:.055})}}m.userData.bedIndex=g});const c=new ro(1,1),u=new kn(c,o,a.length),h=new ot;a.forEach((f,g)=>{h.position.set(f.x,f.y,f.z),h.rotation.set(g*.71,g*.43,g*.13),h.scale.set(f.scale*1.1,f.scale*.78,f.scale),h.updateMatrix(),u.setMatrixAt(g,h.matrix),u.setColorAt(g,new pe([7771239,6128219,9215855,6588512][g%4]))}),u.name="low-shrub-clusters",u.castShadow=u.receiveShadow=!0,u.userData.noStaticCollision=!0,n.add(u);const d=new kn(new ro(1,0),new jt({color:16777215,roughness:1}),l.length);l.forEach((f,g)=>{h.position.set(f.x,f.y,f.z),h.scale.set(f.scale*1.4,f.scale*.6,f.scale*1.4),h.updateMatrix(),d.setMatrixAt(g,h.matrix),d.setColorAt(g,new pe(g%3===0?13678030:14403986))}),d.name="frontage-seasonal-flowers",d.userData.noStaticCollision=!0,n.add(d),n.userData.beds=e}const Td=[[-6.6,-8],[6.6,-8],[-6.6,8],[6.6,8],[-6.6,17],[6.6,17],[-20,0],[23,5.9],...[-29,-6.7,6.7,41.3,54.7,89.3,102.7,118].map(i=>[i,-31.4]),[42,-8],[54,-8],[42,8],[54,8],[42,17],[54,17],[90,-8],[102,-8],[90,8],[102,8],[90,17],[102,17]],ba={centralMailbox:{x:-6.8,z:-12},riversideVending:{x:18.2,z:-5.6}};function PM(i,e){const t=(l,c,u)=>Math.max(c,Math.min(u,l)),s=[...[0,48,96].map(l=>({x:l,z:t(e,-48,21)})),{x:t(i,-40,120),z:-25},{x:t(i,0,120),z:0}].filter(l=>Math.hypot(l.x-i,l.z-e)>1e-6).sort((l,c)=>Math.hypot(l.x-i,l.z-e)-Math.hypot(c.x-i,c.z-e))[0],r=Math.hypot(s.x-i,s.z-e),o=(s.x-i)/r,a=(s.z-e)/r;return{dx:o,dz:a,yaw:Math.atan2(-a,o)}}function LM(i){const e=[];return i.updateMatrixWorld(!0),i.traverse(t=>{if(!(t instanceof Ee)||t instanceof kn)return;let n=t;for(;n&&n!==i;){if(n.userData.noStaticCollision||n.userData.trafficVehicle||n.userData.actor)return;n=n.parent}const s=new gt().setFromObject(t),r=s.getSize(new b);if(r.y<.12||Math.max(r.x,r.z)<.1)return;const o=s.getCenter(new b),a=Ct(o.x,o.z);if(s.max.y<a+.18||s.min.y>a+1.35)return;const l=Math.max(1,Math.ceil(r.x/.2)),c=Math.max(1,Math.ceil(r.z/.2));for(let u=0;u<=l;u++)for(let h=0;h<=c;h++){const d=s.min.x+r.x*u/l,f=s.min.z+r.z*h/c;if(!(fn(d,f)>=-.12)){e.push({name:t.name||t.parent?.name||t.geometry.type,min:s.min.toArray(),max:s.max.toArray(),roadPoint:[d,f]});return}}}),e}const bd=new b,DM=new b,bi=new gt;function NM(i,e){bd.subVectors(i.position,i.target.position).normalize(),i.position.copy(i.target.position).addScaledVector(bd,180),i.updateMatrixWorld(!0),i.target.updateMatrixWorld(!0);const t=i.shadow.camera;t.position.copy(i.position),t.lookAt(i.target.position),t.updateMatrixWorld(!0),bi.makeEmpty();for(const n of[e.min.x,e.max.x])for(const s of[e.min.y,e.max.y])for(const r of[e.min.z,e.max.z])bi.expandByPoint(DM.set(n,s,r).applyMatrix4(t.matrixWorldInverse));t.left=bi.min.x-3,t.right=bi.max.x+3,t.bottom=bi.min.y-3,t.top=bi.max.y+3,t.near=Math.max(.1,-bi.max.z-5),t.far=-bi.min.z+5,t.updateProjectionMatrix()}function op(i,e){const t=i.geometry.getAttribute("position"),n=e(i.position.x,i.position.z)+.012;i.position.y=n;for(let s=0;s<t.count;s++){const r=i.position.x+t.getX(s)*i.scale.x,o=i.position.z-t.getY(s)*i.scale.y;t.setZ(s,(e(r,o)+.012-n)/i.scale.z)}t.needsUpdate=!0,i.geometry.computeBoundingSphere()}function UM(){const i=document.querySelector("#orientation-gate"),e=document.querySelector("#landscape-title"),t=document.querySelector("#landscape-help"),n=document.querySelector("#landscape-button"),s=document.querySelector("#mobile-fullscreen"),r=document.querySelector("#continue-windowed"),o=document.documentElement,a=document,l=()=>{try{screen.orientation?.unlock?.()}catch{}},c=matchMedia("(pointer:coarse), (max-width:600px), (max-width:900px) and (max-height:600px)");let u=!1;const h=()=>!!(document.fullscreenElement||a.webkitFullscreenElement),d=()=>matchMedia("(display-mode:standalone)").matches||!!navigator.standalone;function f(){e.textContent="进入全屏游玩",s.textContent=h()?"退出全屏":"全屏",s.setAttribute("aria-label",s.textContent)}async function g(){if(u)return;u=!0,n.disabled=!0;let _=h()||d();try{if(!_){const p=o.requestFullscreen||o.webkitRequestFullscreen;if(!p)throw Error("unsupported");await p.call(o),_=!0}}catch{t.textContent="此浏览器未允许网页全屏。iPhone/iPad 可在 Safari 分享菜单选择“添加到主屏幕”，从桌面打开后横置手机；微信内请先用系统浏览器打开。也可点下方继续。",i.classList.add("display-gate-open")}l(),_&&i.classList.remove("display-gate-open"),u=!1,n.disabled=!1,f(),window.dispatchEvent(new Event("resize"))}n.addEventListener("click",g),r.addEventListener("click",()=>{i.classList.remove("display-gate-open"),f()}),s.addEventListener("click",async()=>{if(h())try{await(document.exitFullscreen||a.webkitExitFullscreen)?.call(document)}catch{}else await g()});for(const _ of["fullscreenchange","webkitfullscreenchange"])document.addEventListener(_,()=>{l(),f(),window.dispatchEvent(new Event("resize"))});window.addEventListener("resize",f),window.visualViewport?.addEventListener("resize",()=>window.dispatchEvent(new Event("resize"))),c.addEventListener("change",f),l(),f()}function Ad(){return matchMedia("(orientation:portrait) and (pointer:coarse), (orientation:portrait) and (max-width:600px)").matches}function ap(){const i=document.querySelector("#scene");return{width:i.clientWidth,height:i.clientHeight}}const Ai=8,Rd={off:{density:0,near:0,far:0,farFraction:0},low:{density:.42,near:12,far:24,farFraction:.38},medium:{density:.78,near:19,far:35,farFraction:.53},high:{density:1.15,near:26,far:52,farFraction:.68}};function Cd(i,e){const t=[],n=[],s=[];for(let o=0;o<i;o++){const a=o*Math.PI/i,l=Math.cos(a),c=Math.sin(a),u=t.length/3;for(let h=0;h<=e;h++){const d=h/e,f=.115*(1-d*.94),g=d*d*(o%2?-.045:.045);for(const _ of[-1,1]){const p=_*f+g;t.push(l*p,d*(.58+o*.035),c*p),n.push(_<0?0:1,d)}}for(let h=0;h<e;h++){const d=u+h*2;s.push(d,d+1,d+2,d+1,d+3,d+2)}}const r=new Ft;return r.setAttribute("position",new tt(t,3)),r.setAttribute("uv",new tt(n,2)),r.setIndex(s),r.computeBoundingSphere(),r}function FM(){return new xi({lights:!0,uniforms:xf.merge([ce.lights,{uTime:{value:0},uWind:{value:.9},uWindDirection:{value:new se(.88,.48)},uPlayerFoot:{value:new b(0,0,0)},uPlayerActive:{value:0},uRadius:{value:1.45},uPush:{value:1},uRain:{value:0},uLight:{value:1},uFogColor:{value:new pe(13228244)},uFogDensity:{value:.0055}}]),vertexShader:`
      precision highp float;
      #include <common>
      #include <shadowmap_pars_vertex>
      uniform float uTime;
      uniform float uWind;
      uniform vec2 uWindDirection;
      uniform vec3 uPlayerFoot;
      uniform float uPlayerActive;
      uniform float uRadius;
      uniform float uPush;
      varying vec3 vColor;
      varying float vHeight;
      varying float vDepth;
      void main() {
        vec3 root = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        vec3 p = (modelMatrix * instanceMatrix * vec4(position, 1.0)).xyz;
        float h = clamp(uv.y, 0.0, 1.0);
        float flex = h * h * (3.0 - 2.0 * h);
        // The long wavelength is shared across a patch; the shorter wave and
        // rooted coordinate phase stop neighboring tufts from moving in lockstep.
        float broad = sin(dot(root.xz, vec2(0.43, 0.24)) - uTime * 1.42);
        float local = sin(dot(root.xz, vec2(1.27, -0.91)) + uTime * 2.08);
        float variation = sin(root.x * 6.17 + root.z * 8.43);
        float gust = 0.78 + 0.22 * sin(uTime * 0.53 + dot(root.xz, vec2(0.13, 0.08)));
        p.xz += uWindDirection * (broad * 0.22 + local * 0.065 + variation * 0.035)
          * uWind * gust * flex;
        vec2 away = root.xz - uPlayerFoot.xz;
        float distance = length(away);
        float influence = (1.0 - smoothstep(0.12, max(0.18, uRadius), distance)) * uPlayerActive;
        p.xz += (away + vec2(0.0001, 0.0002)) / max(distance, 0.0003)
          * influence * uPush * 0.62 * flex;
        vColor = instanceColor;
        vHeight = h;
        vec4 viewPosition = viewMatrix * vec4(p, 1.0);
        vDepth = length(viewPosition.xyz);
        gl_Position = projectionMatrix * viewPosition;
        vec4 worldPosition = vec4(p, 1.0);
        vec3 transformedNormal = mat3(viewMatrix) * vec3(0.0, 1.0, 0.0);
        #include <shadowmap_vertex>
      }
    `,fragmentShader:`
      precision highp float;
      #include <common>
      #include <packing>
      #include <lights_pars_begin>
      #include <shadowmap_pars_fragment>
      #include <shadowmask_pars_fragment>
      uniform float uRain;
      uniform float uLight;
      uniform vec3 uFogColor;
      uniform float uFogDensity;
      varying vec3 vColor;
      varying float vHeight;
      varying float vDepth;
      void main() {
        // Dark roots and a painted light band at the tip read as simple anime
        // brush strokes without a texture or transparent sorting.
        float shade = mix(0.66, 1.12, smoothstep(0.0, 0.9, vHeight));
        shade += 0.06 * smoothstep(0.60, 0.68, vHeight);
        vec3 color = vColor * shade * uLight;
        color *= mix(0.52, 1.0, getShadowMask());
        color = mix(color, color * vec3(0.73, 0.87, 0.91), uRain * 0.23);
        float fog = 1.0 - exp(-pow(uFogDensity * vDepth, 2.0));
        gl_FragColor = vec4(mix(color, uFogColor, clamp(fog, 0.0, 1.0)), 1.0);
      }
    `,side:Vt,depthWrite:!0})}function OM(i){let e=i>>>0;return()=>(e=Math.imul(1664525,e)+1013904223>>>0,e/4294967296)}function zM(i,e,t){let n=(Math.imul(i,73856093)^Math.imul(e,19349663))>>>0;for(let s=0;s<t.length;s++)n=Math.imul(n^t.charCodeAt(s),16777619)>>>0;return n}class BM{constructor(e,t,n){this.parent=e,this.placement=t,this.settings={...n},this.root.name="dynamic-grass",this.root.userData.noStaticCollision=!0,e.add(this.root),this.rebuild()}parent;placement;root=new it;nearGeometry=Cd(3,3);farGeometry=Cd(2,1);material=FM();chunks=[];dummy=new ot;color=new pe;settings;visibleChunks=0;nearChunks=0;visibleInstances=0;setSettings(e){const t=this.settings;this.settings={...t,...e},(t.quality!==this.settings.quality||t.density!==this.settings.density)&&this.rebuild()}rebuild(){for(const t of this.chunks)this.root.remove(t.mesh),t.mesh.dispose();this.chunks.length=0,this.visibleChunks=0,this.nearChunks=0,this.visibleInstances=0;const e=Rd[this.settings.quality];if(!(e.density<=0||this.settings.density<=0))for(const t of this.placement.zones)for(let n=Math.floor(t.minX/Ai);n<=Math.floor(t.maxX/Ai);n++)for(let s=Math.floor(t.minZ/Ai);s<=Math.floor(t.maxZ/Ai);s++){const r=Math.max(t.minX,n*Ai),o=Math.min(t.maxX,(n+1)*Ai),a=Math.max(t.minZ,s*Ai),l=Math.min(t.maxZ,(s+1)*Ai),c=Math.floor((o-r)*(l-a)*t.density*e.density*this.settings.density);if(c<=0)continue;const u=OM(zM(n,s,t.id)),h=new kn(this.nearGeometry,this.material,c);h.name=`grass-${t.id}-${n}-${s}`,h.userData.noStaticCollision=!0,h.castShadow=!1,h.receiveShadow=!0;let d=0;for(let _=0;d<c&&_<c*9;_++){const p=r+u()*(o-r),m=a+u()*(l-a);if(!this.placement.allowed(p,m))continue;this.dummy.position.set(p,this.placement.heightAt(p,m)+.004,m),this.dummy.rotation.set(0,u()*Math.PI*2,0);const v=.72+u()*.42;this.dummy.scale.set(v,v*(.75+u()*.45),v),this.dummy.updateMatrix(),h.setMatrixAt(d,this.dummy.matrix),this.color.setHex(t.colors[Math.floor(u()*t.colors.length)]),this.color.multiplyScalar(.87+u()*.26),h.setColorAt(d,this.color),d++}if(d===0){h.dispose();continue}h.count=d,h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0);const f=(r+o)/2,g=(a+l)/2;h.boundingSphere=new Vn(new b(f,this.placement.heightAt(f,g)+.4,g),Math.hypot(o-r,l-a)/2+1.6),h.frustumCulled=!0,this.root.add(h),this.chunks.push({mesh:h,x:f,z:g,count:d,visibleCount:0,near:!0})}}update(e,t,n,s,r,o,a){const l=this.material.uniforms;l.uTime.value=e,l.uWind.value=this.settings.wind*r.strength,l.uWindDirection.value.set(r.directionX,r.directionZ),l.uRain.value=r.rain,l.uLight.value=.72+Math.max(0,Math.min(1,o))*.28,a&&(l.uFogColor.value.copy(a.color),l.uFogDensity.value=a.density),l.uPlayerActive.value=t&&!s?1:0,t&&l.uPlayerFoot.value.copy(t),l.uRadius.value=this.settings.radius,l.uPush.value=this.settings.push,this.visibleChunks=0,this.nearChunks=0,this.visibleInstances=0;const c=Rd[this.settings.quality];for(const u of this.chunks){const h=Math.hypot(u.x-n.x,u.z-n.z),d=!s&&h<c.far;if(u.mesh.visible=d,!d){u.visibleCount=0;continue}const f=h<c.near;f!==u.near&&(u.mesh.geometry=f?this.nearGeometry:this.farGeometry,u.near=f),u.visibleCount=f?u.count:Math.max(1,Math.floor(u.count*c.farFraction)),u.mesh.count=u.visibleCount,this.visibleChunks++,this.visibleInstances+=u.visibleCount,f&&this.nearChunks++}}stats(){const e=[this.nearGeometry,this.farGeometry].reduce((n,s)=>n+Object.values(s.attributes).reduce((r,o)=>r+o.array.byteLength,0)+(s.index?.array.byteLength??0),0),t=this.chunks.reduce((n,s)=>n+s.mesh.instanceMatrix.array.byteLength+(s.mesh.instanceColor?.array.byteLength??0),0);return{...this.settings,chunks:this.chunks.length,visibleChunks:this.visibleChunks,nearChunks:this.nearChunks,instances:this.chunks.reduce((n,s)=>n+s.count,0),visibleInstances:this.visibleInstances,estimatedBufferBytes:e+t}}auditPlacement(){const e=new Be,t=new b;let n=0,s=0,r=0;for(const o of this.chunks)for(let a=0;a<o.count;a++)o.mesh.getMatrixAt(a,e),t.setFromMatrixPosition(e),r++,this.placement.allowed(t.x,t.z)||n++,s=Math.max(s,Math.abs(t.y-this.placement.heightAt(t.x,t.z)-.004));return{checked:r,outsideMask:n,maxHeightError:s}}dispose(){for(const e of this.chunks)this.root.remove(e.mesh),e.mesh.dispose();this.chunks.length=0,this.parent.remove(this.root),this.nearGeometry.dispose(),this.farGeometry.dispose(),this.material.dispose()}}const Ls=[6457947,7905124,9942650,5341022,10993017],Id=[{id:"garden-north",minX:-38.8,maxX:-24.2,minZ:-10.3,maxZ:-7.4,density:20,colors:Ls},{id:"garden-south",minX:-38.8,maxX:-24.2,minZ:5.3,maxZ:9.7,density:22,colors:Ls},{id:"garden-west-north",minX:-39.1,maxX:-37.1,minZ:-7.3,maxZ:-2.8,density:20,colors:Ls},{id:"garden-west-south",minX:-39.1,maxX:-37.1,minZ:2.8,maxZ:5.2,density:20,colors:Ls},{id:"garden-east-north",minX:-25.9,maxX:-24.1,minZ:-7.3,maxZ:-2.8,density:20,colors:Ls},{id:"garden-east-south",minX:-25.9,maxX:-24.1,minZ:2.8,maxZ:5.2,density:20,colors:Ls}];function kM(i,e,t){if(i<=-39.2||i>=-24||e<=-10.4||e>=9.8||Math.abs(e)<2.8||i>-36.9&&i<-26.1&&e>-6.9&&e<4.9||e>4.9&&Math.abs(i+31.5)<1.15)return!1;for(const n of t)if(Math.abs(i-n.x)<n.w/2+1&&Math.abs(e-n.z)<n.d/2+1)return!1;return!0}function HM(i,e){return Ct(i,e)+.002}const VM=["north","northEast","east","southEast","south","southWest","west","northWest"],me={scene:document.querySelector("#scene"),loading:document.querySelector("#loading"),hint:document.querySelector("#hint"),interaction:document.querySelector("#interaction"),dialogue:document.querySelector("#dialogue"),dialogueName:document.querySelector("#dialogue-name"),dialogueText:document.querySelector("#dialogue-text"),location:document.querySelector("#location-name"),time:document.querySelector("#time"),weather:document.querySelector("#weather"),inventory:document.querySelector("#inventory"),goal:document.querySelector("#goal"),shop:document.querySelector("#shop"),shopStock:document.querySelector("#shop-stock"),buySeed:document.querySelector("#buy-seed"),sellFlower:document.querySelector("#sell-flower"),toast:document.querySelector("#toast"),journal:document.querySelector("#journal"),journalContent:document.querySelector("#journal-content"),dialogueChoices:document.querySelector("#dialogue-choices"),guide:document.querySelector("#quest-guide")},Dt=new E1({antialias:!0,powerPreference:"high-performance"});Dt.setPixelRatio(Math.min(window.devicePixelRatio,1.75));Dt.setSize(window.innerWidth,window.innerHeight);Dt.shadowMap.enabled=!0;Dt.shadowMap.type=Zd;Dt.outputColorSpace=ut;Dt.toneMapping=jd;Dt.toneMappingExposure=1.34;me.scene.appendChild(Dt.domElement);const An=new x0;An.background=new pe(13228244);An.fog=new mo(13228244,.0055);const Tt=new Jt(20,window.innerWidth/window.innerHeight,.1,450),Oi=new b(0,12.8,48),cp=new b(0,320,112);let Ht=!1;const Yn=new b;Tt.position.copy(Oi);Tt.lookAt(0,0,0);const lp=new Mg(15005951,8226429,2.1);An.add(lp);const rn=new kf(16771265,3.2);rn.position.set(-18,25,22);rn.castShadow=!0;rn.shadow.mapSize.set(2048,2048);const GM=new gt(new b(-42,-1,-54),new b(122,22,32)),WM=new gt(new b(-18,-1,-15),new b(18,12,15));rn.shadow.bias=-5e-5;rn.shadow.normalBias=.035;rn.shadow.radius=3;rn.target.position.set(40,0,0);An.add(rn);An.add(rn.target);const Lt=new wM(An,lp,rn),le=new it;An.add(le);const Gl=new Rg,Bt=new Set,Qn=new Map,Pd=new Map,Ld=new Map;let Ci;const Ru=new Map,Gr=new Map,Cu=new Map,XM=new pM(Gr),Ni=new dM;let _a;const Iu=new Map,Nc=new Map;let Hs,co=16;const Wl=4;let Ns=0,Us=0,Aa=[],ts=null,lo=null;const Vs={x:-7.9,z:18.8};let Xl=null;const Pu=new Map,Lu=new Map;let ns=null,Du=null,Gs=null;const up=new Map,Uc=new Map,Ra=new Map;let Ca={},ze=us.qingchuan,Yt=[],oe,at=[],vo=[],hn=null;const Wr=new b,ka=new URLSearchParams(window.location.search);function aa(i,e,t,n){const s=ka.get(i),r=s===null?e:Number(s);return Number.isFinite(r)?kt.clamp(r,t,n):e}const Dd=ka.get("grassQuality"),nn={quality:["off","low","medium","high"].includes(Dd??"")?Dd:"medium",density:aa("grassDensity",1,.1,2),wind:aa("grassWind",1,0,2.5),radius:aa("grassRadius",1.45,.3,3.5),push:aa("grassPush",1,0,2)},Fs={setWind(i){nn.wind=kt.clamp(i,0,2.5),hn?.setSettings({wind:nn.wind})},setRadius(i){nn.radius=kt.clamp(i,.3,3.5),hn?.setSettings({radius:nn.radius})},setDensity(i){nn.density=kt.clamp(i,.1,2),hn?.setSettings({density:nn.density})},setPush(i){nn.push=kt.clamp(i,0,2),hn?.setSettings({push:nn.push})},setQuality(i){["off","low","medium","high"].includes(i)&&(nn.quality=i,hn?.setSettings({quality:i}))},auditPlacement(){return hn?.auditPlacement()??null},stats(){return{grass:hn?.stats()??null,render:{...Dt.info.render},memory:{...Dt.info.memory},foot:hn?{x:Wr.x,y:Wr.y,z:Wr.z}:null}}};window.__qingchuanGrass=Fs;if(new URLSearchParams(location.search).has("sceneDebug")){const i={snapshot(){const e=new b(oe.x,0,oe.z).project(Tt),t=new b(oe.x,2.1,oe.z).project(Tt);return{district:ze.id,player:{x:oe.x,z:oe.z,footY:oe.sprite.position.y-oe.baseY+.045,surfaceY:Zl(oe),shadowY:oe.shadow.position.y},overview:Ht,actorGrounding:Yt.map(n=>({id:n.id??"player",surfaceY:Zl(n),footY:n.sprite.position.y-n.baseY+.045})),planting:le.getObjectByName("urban-street-planting")?.userData.beds??[],fov:Tt.fov,actorReferencePixels:Math.abs(e.y-t.y)*ap().height/2,buildings:os.map(n=>({id:n.buildingId,faded:n.faded,footprint:Ui.has(n.buildingId)?{min:Ui.get(n.buildingId).min.toArray(),max:Ui.get(n.buildingId).max.toArray()}:null,opacity:n.materials[0]?.material.opacity})),models:[...Pu.keys()]}},rain(){return Lt.inspectRain()},roadOccupancy(){return LM(le)},collision(){return{count:Ni.count,steps:Ni.stepCount}},shadows(){const e=new Be().multiplyMatrices(rn.shadow.camera.projectionMatrix,rn.shadow.camera.matrixWorldInverse),t=n=>{const s=n.clone().applyMatrix4(e);return Math.max(Math.abs(s.x),Math.abs(s.y),Math.abs(s.z))<=1};return{enabled:Dt.shadowMap.enabled,map:rn.shadow.mapSize.toArray(),coverage:[[-40,-52],[120,-52],[-40,30],[120,30]].map(([n,s])=>({x:n,z:s,inside:t(new b(n,0,s))})),actors:Yt.map(n=>({id:n.id??"player",inside:t(new b(n.x,1,n.z)),casts:n.sprite.castShadow,receives:n.sprite.receiveShadow})),contacts:le.children.filter(n=>n.userData.contactShadow).map(n=>({x:n.position.x,y:n.position.y,z:n.position.z,vertices:n.geometry.getAttribute("position").count})),receivers:le.getObjectByName("street-relief")?.children.filter(n=>n instanceof Ee).map(n=>({name:n.name,receives:n.receiveShadow}))}},lamps(){return le.children.filter(e=>e.name==="street-lamp").map(e=>({base:e.position.toArray(),yaw:e.rotation.y,head:e.getObjectByName("lamp-head").getWorldPosition(new b).toArray(),light:e.getObjectByName("lamp-light").getWorldPosition(new b).toArray(),model:!!e.getObjectByName("cafe-lamp-model")}))},blocked(e,t){return Un(e,t)},walkingPath(e,t){return Au(e,t,ze.size,Un)},surface(e,t){const n=new Hf(new b(e,3,t),new b(0,-1,0)),s=le.getObjectByName("street-relief"),r=s?n.intersectObjects(s.children.filter(o=>o instanceof Ee&&!(o instanceof kn)),!1)[0]:void 0;return{height:Ct(e,t),supportHeight:Ni.surfaceHeight(e,t,Ct(e,t)),kind:sp(e,t),renderedHeight:r?.point.y}}};window.__qingchuanScene=i}if(ka.has("grassDebug")){const i=document.createElement("aside");i.setAttribute("aria-label","动态草地调试"),i.style.cssText="position:absolute;left:36px;top:315px;z-index:12;width:230px;padding:11px 13px;border:1px solid #b8cfad;border-radius:9px;background:#203b39e8;color:#e5f3de;font:12px/1.55 system-ui;box-shadow:0 9px 22px #152a2866",i.innerHTML=`<strong>动态草地 · 调试</strong>
    <label style="display:block">风力 <input data-grass="wind" type="range" min="0" max="2.5" step="0.05" value="${nn.wind}"></label>
    <label style="display:block">推草半径 <input data-grass="radius" type="range" min="0.3" max="3.5" step="0.05" value="${nn.radius}"></label>
    <label style="display:block">密度 <input data-grass="density" type="range" min="0.1" max="2" step="0.05" value="${nn.density}"></label>
    <label style="display:block">档位 <select data-grass="quality"><option>off</option><option>low</option><option>medium</option><option>high</option></select></label>
    <div data-grass-stats style="font-variant-numeric:tabular-nums;margin-top:5px"></div>`,i.querySelector("select").value=nn.quality;for(const s of i.querySelectorAll("input[data-grass]"))s.addEventListener("input",()=>{const r=Number(s.value);s.dataset.grass==="wind"&&Fs.setWind(r),s.dataset.grass==="radius"&&Fs.setRadius(r),s.dataset.grass==="density"&&Fs.setDensity(r)});i.querySelector("select").addEventListener("change",s=>Fs.setQuality(s.target.value)),me.scene.parentElement?.append(i);let e=0,t=performance.now();const n=s=>{if(e++,s-t>=1e3){const r=Fs.stats();i.querySelector("[data-grass-stats]").textContent=`${Math.round(e*1e3/(s-t))} FPS · ${r.grass?.visibleInstances??0} 簇 · ${r.grass?.visibleChunks??0} 块 · ${Math.round((r.grass?.estimatedBufferBytes??0)/1024)} KiB 草地缓冲`,e=0,t=s}requestAnimationFrame(n)};requestAnimationFrame(n)}let os=[];const Ui=new Map;let Cn=[];const Xr=[];let ct=null,ql=!1,Qi,Fc=0,Nd="",Yl=!1,dn=0;const xe=lM(),Rt=new Jf(xe.location?.worldTime,xe.location?.night,xe.location?.weather),hp=np;let Oc=0,xa=0,zc=0;const Rn=(i,e={})=>new jt({color:i,roughness:.88,...e});function N(i,e,t,n,s,r,o,a=le,l={}){const c=new Ee(new bn(i,e,t),Rn(n,l));return c.position.set(s,r,o),c.castShadow=e>.16,c.receiveShadow=!0,a.add(c),c}function $s(i,e,t,n,s,r=.01){const o=new Ee(new mn(i,e),Rn(t));return o.rotation.x=-Math.PI/2,o.position.set(n,r,s),o.receiveShadow=!0,le.add(o),o}function Kl(i,e,t,n=0,s=0,r=!1){const o=(r?Cu:Gr).get(i).clone();return o.wrapS=o.wrapT=Fn,o.repeat.set(e,t),o.offset.set(n,s),o.needsUpdate=!0,o}function Zn(i,e,t,n,s,r,o,a=16777215){const l=Cu.has(r),c=i/o,u=e/o,h=(t-i/2)/o,d=-(n+e/2)/o,f=a!==16777215?a:r==="terrain-asphalt"?11579310:r==="terrain-paving"?15327960:16777215,g=new Ee(new mn(i,e),Rn(f,{map:Kl(r,c,u,h,d),roughness:r==="terrain-asphalt"?.89:r==="terrain-paving"?.92:.98,...l?{normalMap:Kl(r,c,u,h,d,!0),normalScale:new se(.25,.25),roughness:r==="asphalt"?.95:.98}:{}}));return g.rotation.x=-Math.PI/2,g.position.set(t,s,n),g.receiveShadow=!0,le.add(g),g}function dp(i,e="#273646",t="#f7e9cd",n=384,s){const r=document.createElement("canvas");r.width=n,r.height=96;const o=r.getContext("2d");o.fillStyle=e,o.fillRect(0,8,n,80),o.fillStyle=t,o.textAlign="center",o.textBaseline="middle",o.font=`bold ${s??(i.length>18?28:34)}px system-ui, sans-serif`,o.fillText(i,n/2,48,n-24);const a=new ls(r);return a.colorSpace=ut,a.magFilter=bt,a}function on(i,e,t,n,s,r){const o=new Ee(new mn(s,s/4),new Gt({map:dp(i,r),transparent:!0,side:Vt}));return o.position.set(e,t,n),le.add(o),o}function fp(i,e,t,n,s){const r=`${i}-${e}-${t}`,o=Pd.get(r);if(o)return o;const a=Ru.get(i),l=document.createElement("canvas");l.width=n,l.height=s;const c=l.getContext("2d");c.imageSmoothingEnabled=!1,c.drawImage(a,t*n,e*s,n,s,0,0,n,s);const u=c.getImageData(0,0,l.width,l.height).data;let h=l.width,d=l.height,f=0,g=0;for(let p=0;p<l.height;p++)for(let m=0;m<l.width;m++)u[(p*l.width+m)*4+3]<24||(h=Math.min(h,m),d=Math.min(d,p),f=Math.max(f,m),g=Math.max(g,p));const _={minX:h,minY:d,width:Math.max(1,f-h+1),height:Math.max(1,g-d+1)};return Pd.set(r,_),_}function qM(i,e,t){const n=Ld.get(i);if(n)return n;let s=1,r=1;for(let a=0;a<4;a++)for(let l=0;l<3;l++){const c=fp(i,a,l,e,t);s=Math.max(s,c.width),r=Math.max(r,c.height)}const o={maxWidth:s,maxHeight:r};return Ld.set(i,o),o}function pp(i,e,t){const n={front:0,left:1,right:2,back:3}[e],s=i+"-"+n+"-"+t;if(Qn.has(s))return Qn.get(s);const r=Ru.get(i),o=r.width/3,a=r.height/4,l=fp(i,n,t,o,a),c=qM(i,o,a),u=document.createElement("canvas");u.width=96,u.height=128;const h=u.getContext("2d");h.imageSmoothingEnabled=!1;const d=Math.min(88/c.maxWidth,118/c.maxHeight),f=Math.round(l.width*d),g=Math.round(l.height*d);h.drawImage(r,t*o+l.minX,n*a+l.minY,l.width,l.height,Math.round((96-f)/2),126-g,f,g);const _=new ls(u);return _.magFilter=bt,_.minFilter=bt,_.generateMipmaps=!1,_.colorSpace=ut,Qn.set(s,_),_}function YM(i){return{front:0,left:1,right:2,back:3}[i]}function mp(){if(Hs){Ns=Hs.width/co,Us=Hs.height/Wl,Aa=[];for(let i=0;i<Wl;i++){let e=Ns,t=Us,n=0,s=0;for(let r=0;r<co;r++){const o=document.createElement("canvas");o.width=Math.ceil(Ns),o.height=Math.ceil(Us);const a=o.getContext("2d");a.imageSmoothingEnabled=!1,a.drawImage(Hs,r*Ns,i*Us,Ns,Us,0,0,o.width,o.height);const l=a.getImageData(0,0,o.width,o.height).data;for(let c=0;c<o.height;c++)for(let u=0;u<o.width;u++)l[(c*o.width+u)*4+3]<24||(e=Math.min(e,u),t=Math.min(t,c),n=Math.max(n,u),s=Math.max(s,c))}Aa[i]={minX:e,minY:t,width:Math.max(1,n-e+1),height:Math.max(1,s-t+1)}}}}function gp(i,e="front"){const t=Math.max(0,Math.min(co-1,i)),n=YM(e),s=`provided-4dir-${n}-${t}`;if(Qn.has(s))return Qn.get(s);Aa.length||mp();const r=Hs,o=Ns||r.width/co,a=Us||r.height/Wl,l=Aa[n]??{minX:0,minY:0,width:o,height:a},c=document.createElement("canvas");c.width=96,c.height=128;const u=c.getContext("2d");u.imageSmoothingEnabled=!1;const h=Math.min(88/l.width,118/l.height),d=Math.round(l.width*h),f=Math.round(l.height*h);u.drawImage(r,t*o+l.minX,n*a+l.minY,l.width,l.height,Math.round((96-d)/2),126-f,d,f);const g=new ls(c);return g.magFilter=bt,g.minFilter=bt,g.generateMipmaps=!1,g.colorSpace=ut,Qn.set(s,g),g}function KM(){if(Ci)return Ci;const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d"),t=e.createRadialGradient(64,64,8,64,64,62);return t.addColorStop(0,"rgba(20, 31, 35, 0.56)"),t.addColorStop(.55,"rgba(20, 31, 35, 0.25)"),t.addColorStop(1,"rgba(20, 31, 35, 0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Ci=new ls(i),Ci.colorSpace=ut,Ci.minFilter=It,Ci.magFilter=It,Ci}function Ia(i,e,t,n,s=.72){const r=new Ee(new mn(1,1,12,8),new Gt({map:KM(),color:2373178,transparent:!0,opacity:s,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.position.set(i,.046,e),r.scale.set(t,n,1),r.renderOrder=1,le.add(r),r.userData.contactShadow=!0,r.userData.noStaticCollision=!0,r.userData.noModelTexture=!0,r}function $M(i){const e=_p(["cafe-table","cafe-board","cafe-planter"][i]);if(e)return e;const t=`cafe-prop-${i}`;if(Qn.has(t))return Qn.get(t);const n=[[0,825],[825,1340],[1340,_a.width]],[s,r]=n[i],o=document.createElement("canvas");o.width=r-s,o.height=_a.height;const a=o.getContext("2d");a.drawImage(_a,s,0,o.width,o.height,0,0,o.width,o.height);const l=a.getImageData(0,0,o.width,o.height).data;let c=o.width,u=o.height,h=0,d=0;for(let T=0;T<o.height;T++)for(let A=0;A<o.width;A++)l[(T*o.width+A)*4+3]<24||(c=Math.min(c,A),u=Math.min(u,T),h=Math.max(h,A),d=Math.max(d,T));const f=document.createElement("canvas");f.width=f.height=128;const g=f.getContext("2d");g.imageSmoothingEnabled=!1;const _=h-c+1,p=d-u+1,m=Math.min(116/_,116/p),v=_*m,y=p*m;g.drawImage(o,c,u,_,p,(128-v)/2,126-y,v,y);const x=new ls(f);return x.magFilter=x.minFilter=bt,x.generateMipmaps=!1,x.colorSpace=ut,Qn.set(t,x),x}function _p(i){if(Nc.has(i))return Nc.get(i);const e=Iu.get(i);if(!e)return;const t=new pt(e);return t.colorSpace=ut,t.magFilter=It,t.minFilter=pn,t.needsUpdate=!0,Nc.set(i,t),t}function ZM(i,e,t){const n=_p(i),s=Iu.get(i);if(!n||!s)return;const r=new Na(new uu({map:n,transparent:!0,alphaTest:.16,depthWrite:!0,toneMapped:!1})),o=Math.min(e/s.width,t/s.height);return r.scale.set(s.width*o,s.height*o,1),r.center.set(.5,0),r}function JM(i,e){if(!ts)return;const t=$f(ts.scene);t.traverse(a=>{if(!(a instanceof Ee))return;a.userData.sharedAssetGeometry=!0,a.userData.sharedAssetMap=!0,a.castShadow=!0,a.receiveShadow=!0,a.frustumCulled=!1;const l=Array.isArray(a.material)?a.material:[a.material];for(const c of l){const u=c.clone();"color"in u&&u.color instanceof pe&&u.color.setHex(9404784),"roughness"in u&&(u.roughness=.94),"metalness"in u&&(u.metalness=.08),Array.isArray(a.material)?a.material[l.indexOf(c)]=u:a.material=u}});const s=new gt().setFromObject(t).getSize(new b);t.scale.setScalar(1.7/Math.max(s.y,.001)),t.position.set(i,0,e),t.rotation.y=Math.atan2(-Oi.z,Oi.x),t.renderOrder=0,le.add(t),t.updateMatrixWorld(!0);const r=[];t.traverse(a=>{a instanceof to&&/^(L|R)_ToeBase$/.test(a.name)&&r.push(a)});const o=r.length?Math.min(...r.map(a=>a.getWorldPosition(new b).y)):new gt().setFromObject(t).min.y;t.position.y+=.48-o,N(1.8,.34,1.8,7037533,i,.17,e),N(1.5,.12,1.5,11772557,i,.4,e),Ia(i,e,1.45,.7,.5)}function jM(i,e){if(!lo)return!1;const t=lo.clone(!0);t.updateMatrixWorld(!0);const n=new gt().setFromObject(t),s=n.getSize(new b);if(s.y<.001)return!1;const r=n.getCenter(new b),o=2.5/s.y;return t.scale.setScalar(o),t.position.set(i-r.x*o,.1-n.min.y*o,e-r.z*o),t.traverse(a=>{a instanceof Ee&&(a.userData.sharedAssetGeometry=!0,a.userData.sharedAssetMaterial=!0,a.userData.sharedAssetMap=!0,a.castShadow=!0,a.receiveShadow=!0)}),le.add(t),!0}function xp(i,e,t,n,s,r){const o=Lu.get(i);if(!o)return null;const a=o.clone(!0);i==="cafe-menu"&&(a.rotation.y=Math.PI);const l=new gt().setFromObject(a),c=l.getSize(new b);if(Math.min(c.x,c.y,c.z)<.001)return null;const u=l.getCenter(new b);return a.scale.set(n/c.x,s/c.y,r/c.z),a.position.set(e-u.x*a.scale.x,.035-l.min.y*a.scale.y,t-u.z*a.scale.z),a.traverse(h=>{h instanceof Ee&&(h.userData.sharedAssetGeometry=!0,h.userData.sharedAssetMaterial=!0,h.userData.sharedAssetMap=!0,h.castShadow=!0,h.receiveShadow=!0)}),le.add(a),a}function wn(i,e,t,n,s){const r=[.66,.58,.65][i];n*=r,s*=r;const o=["cafe-table","cafe-menu","cafe-planter"][i],a=[1.8,.62,.9][i]*r,l=xp(o,e,t,n,s,a);if(l)return l;const c=ZM(["cafe-table","cafe-board","cafe-planter"][i],n,s);if(c)return c.position.set(e,.03,t),le.add(c),Ia(e,t,n*.76,n*.34,.52),c;const u=new Na(new uu({map:$M(i),transparent:!0,alphaTest:.16,depthWrite:!0}));return u.scale.set(n,s,1),u.position.set(e,s/2,t),u.renderOrder=0,le.add(u),Ia(e,t,n*.76,n*.34,.52),u}async function vp(i){if(!i.id||i.drawn||!Ca[i.id])return;const e=i.id;try{let t=Uc.get(e);if(!t){const a=!!(i.route&&i.route.length>1);t=ep(`./assets/characters/drawn/${Ca[e]}/character.json`,{directions:a?["south","west","north","east"]:["south"],motions:a?["idle","walk"]:["idle"]}),Uc.set(e,t)}const n=await t;if(!n||(up.set(e,n),Ra.delete(e),Kd(),!Yt.includes(i)))return;i.drawn=n;const s=i.sprite.material;s.color.setHex(16777215),s.toneMapped=!0,s.needsUpdate=!0;const r=n.direction(i.direction),o=i.walking?n.walkFrame(r,i.walkDistance,.88):n.idleFrame(r,i.animClock);$l(i,i.facing,o)}catch(t){console.warn(`居民 ${e} 的二维素材未能完整加载，将重试下载。`,t),Uc.delete(e),Ra.set(e,`居民「${i.name??e}」新版动画下载失败，正在重试。`),Kd(),window.setTimeout(()=>{Yt.includes(i)&&!i.drawn&&vp(i)},15e3)}finally{Yt.includes(i)&&(i.sprite.visible=!!i.drawn,i.shadow.visible=!!i.drawn)}}function Ud(i,e,t,n,s,r){const o=i==="protagonist-provided"?Gs:r?up.get(r):null,a=!!o,l=i==="protagonist-provided"&&!!ts&&!a,c=o?o.texture("south","idle",0):l?new pt:i==="protagonist-provided"?gp(0,"front"):pp(i,"front",0),u=new Ee(new mn(1,1),new jt({map:c,transparent:!0,alphaTest:.16,depthWrite:!0,depthTest:!0,opacity:l?0:1,color:a?16777215:14801352,toneMapped:!0,roughness:1,metalness:0,side:Vt,shadowSide:Vt}));u.userData.actor=!0,u.castShadow=!l,u.receiveShadow=!0,u.userData.sharedAssetMap=!0,u.scale.set(1.48,2.08,1),u.position.set(e,.045+u.scale.y/2,t),u.rotation.y=0,u.renderOrder=2,le.add(u);const h=Ia(e,t,l?.72:.78,l?.28:.34,l?.52:.68);h.renderOrder=1;const d={sprite:u,shadow:h,skin:i,drawn:o??void 0,facing:"front",direction:"south",frame:0,x:e,z:t,baseY:1.085,animClock:0,walkDistance:0,velocityX:0,velocityZ:0,walking:!1,name:n,line:s,id:r};if(l){const f=$f(ts.scene),_=new gt().setFromObject(f).getSize(new b);f.scale.setScalar(2.12/Math.max(_.y,.001)),f.position.set(e,0,t),f.rotation.y=Math.atan2(-Oi.z,Oi.x),f.renderOrder=2,f.traverse(x=>{if(!(x instanceof Ee))return;x.userData.sharedAssetGeometry=!0,x.userData.sharedAssetMaterial=i==="protagonist-provided",x.userData.sharedAssetMap=!0,x.castShadow=!0,x.receiveShadow=!0,x.frustumCulled=!1;const T=Array.isArray(x.material)?x.material:[x.material],A={mika:13143935,chen:10267319,yuan:10399628,barista:13221282},C=T.map(P=>{const S=i==="protagonist-provided"?P:P.clone();return i!=="protagonist-provided"&&"color"in S&&S.color instanceof pe&&S.color.setHex(A[i]??16777215),S.transparent=!1,S.depthWrite=!0,S.needsUpdate=!0,S});x.material=Array.isArray(x.material)?C:C[0]}),le.add(f);const p=new Hg(f),m={};for(const x of ts.animations){const T=x.name.toLowerCase();(T==="idle"||T==="walk"||T==="run")&&(m[T]=p.clipAction(x))}m.idle?.play(),p.update(0),f.updateMatrixWorld(!0);const v=[];if(f.traverse(x=>{x instanceof to&&/^(L|R)_ToeBase$/.test(x.name)&&v.push(x)}),v.length>0){const x=Math.min(...v.map(T=>T.getWorldPosition(new b).y));f.position.y+=.1-x}else{const x=new gt().setFromObject(f);f.position.y+=.1-x.min.y}f.updateMatrixWorld(!0),d.model=f,d.mixer=p,d.actions=m,d.motion="idle",d.modelBaseY=f.position.y;const y=f.getObjectByName("Hip");y instanceof to&&(d.hipBone=y,d.hipAnchor=f.worldToLocal(y.getWorldPosition(new b))),d.headingYaw=f.rotation.y}return d}const Bc=new b,kc=new b;function Fd(i,e,t,n,s,r){if(!i.model||!i.mixer||!i.actions)return;i.model.position.x=i.x,i.model.position.z=i.z;const o=e&&t?s&&r>2.8?"run":"walk":"idle";if(i.motion!==o){const c=i.motion?i.actions[i.motion]:void 0,u=i.actions[o];u?.reset().play(),c&&o==="idle"&&(c.paused=!0),c&&u&&c.crossFadeTo(u,.16,!1),i.motion=o}i.actions.walk&&(i.actions.walk.timeScale=kt.clamp(r*.75,.5,2)),i.actions.run&&(i.actions.run.timeScale=kt.clamp(r*.28,.65,1.35)),i.mixer.update(n);const a=i.headingYaw??Math.PI,l=Math.atan2(Math.sin(a-i.model.rotation.y),Math.cos(a-i.model.rotation.y));i.model.rotation.y+=l*(1-Math.exp(-n*14)),i.hipBone&&i.hipAnchor&&(i.model.updateMatrixWorld(!0),i.hipBone.getWorldPosition(Bc),i.model.localToWorld(kc.copy(i.hipAnchor)),i.model.position.x+=kc.x-Bc.x,i.model.position.z+=kc.z-Bc.z)}function $l(i,e,t,n=i.direction){const s=i.drawn,r=s?.direction(n),o=i.walking?"walk":"idle",a=i.facing!==e||i.frame!==t||i.direction!==n||!!(s&&(i.drawnMotion!==o||i.drawnDirection!==r));i.facing=e,i.frame=t,i.direction=n,i.model||(s&&a?(i.sprite.material.map=s.texture(r,o,t),i.sprite.scale.x=Math.abs(i.sprite.scale.x),i.drawnMotion=o,i.drawnDirection=r):i.skin==="protagonist-provided"&&a?(i.sprite.material.map=gp(t,e),i.sprite.scale.x=Math.abs(i.sprite.scale.x),i.sprite.material.needsUpdate=!0):a&&(i.sprite.material.map=pp(i.skin,e,t),i.sprite.material.needsUpdate=!0))}function Od(i,e){const t=Math.atan2(i,-e),n=Math.round(t/(Math.PI/4))+8&7;return VM[n]}function zd(i){return i==="north"?"back":i==="south"?"front":i==="east"||i==="northEast"||i==="southEast"?"right":"left"}function Bd(i,e,t){i.x=e,i.z=t,i.sprite.position.x=e,i.sprite.position.z=t,i.model&&(i.model.position.x=e,i.model.position.z=t),i.shadow.position.x=e,i.shadow.position.z=t}function Zl(i){return ze.id==="qingchuan"?Ni.surfaceHeight(i.x,i.z,Ct(i.x,i.z))+.006:.045}function kd(i){const e=Zl(i)-.045;i.sprite.position.y+=e,op(i.shadow,yp),i.model&&(i.model.position.y=(i.modelBaseY??0)+e)}function yp(i,e){return ze.id==="qingchuan"?Ni.surfaceHeight(i,e,Ct(i,e)):.045}function Hd(i,e,t){const n=Math.hypot(e,t);if(n<1e-6)return 0;const s=Math.max(1,Math.ceil(n/.12)),r=e/s,o=t/s,a=i.x,l=i.z;for(let c=0;c<s;c++)Un(i.x+r,i.z)||Bd(i,i.x+r,i.z),Un(i.x,i.z+o)||Bd(i,i.x,i.z+o);return Math.hypot(i.x-a,i.z-l)}function Vd(i,e,t,n){return i+(e-i)*(1-Math.exp(-t*n))}function Gd(i,e,t=!1){const n=N(t?1.65:.09,.012,t?.09:1.65,16116419,i,.037,e);n.castShadow=!1}function QM(){yM(ze.buildings),TM(le,Zn)}function eS(){const i=document.createElement("canvas");i.width=1024,i.height=256;const e=i.getContext("2d");e.filter="blur(15px)",e.fillStyle="rgba(101,133,130,.22)",e.beginPath(),e.moveTo(0,256),e.bezierCurveTo(135,205,210,222,320,202),e.bezierCurveTo(465,181,553,221,686,194),e.bezierCurveTo(830,210,909,177,1024,209),e.lineTo(1024,256),e.closePath(),e.fill(),e.fillStyle="rgba(111,137,137,.17)";for(const[s,r,o]of[[85,68,71],[237,84,91],[401,77,80],[578,91,101],[764,86,73],[926,72,87]])e.fillRect(s,256-o,r,o);const t=new ls(i);t.colorSpace=ut;const n=new Ee(new mn(235,22),new Gt({map:t,transparent:!0,depthWrite:!1,fog:!1}));n.position.set(40,8,-70),n.name="blurred-distant-skyline",le.add(n)}function tS(i){if(i.id==="qingchuan"){QM(),eS();return}N(i.size.x,.18,i.size.z,7903362,0,-.11,0),Zn(i.size.x,i.size.z,0,0,.001,"grass",5.2);for(const n of[-6.5,6.5])Zn(3.7,i.size.z,n,0,.02,"terrain-paving",3.6),Zn(i.size.x,3.7,0,n,.021,"terrain-paving",3.6);i.id==="qingchuan"&&Zn(19.35,8.3,-14.325,0,.006,"terrain-turf",6.4),N(8.4,.09,i.size.z,4279891,0,.01,0);const e=i.id==="qingchuan"?i.size.x/2+4.2:i.size.x,t=i.id==="qingchuan"?(i.size.x/2-4.2)/2:0;N(e,.09,8.4,4279891,t,.02,0),Zn(8.3,i.size.z,0,0,.073,"terrain-asphalt",5.8),Zn(e-.1,8.3,t,0,.074,"terrain-asphalt",5.8);for(let n=-19;n<20;n+=3.4)Math.abs(n)>5.7&&Gd(0,n);for(let n=-22;n<23;n+=3.4)Math.abs(n)>5.7&&(i.id!=="qingchuan"||n>0)&&Gd(n,0,!0);for(let n=-3;n<=3;n++)N(.52,.013,1.5,15853261,n*1.05,.083,-5.45).castShadow=!1,i.id!=="qingchuan"&&(N(1.5,.013,.52,15853261,-5.45,.084,n*1.05).castShadow=!1);for(const n of[-22,-6.1,6.1,22])for(const s of[-19,-6.1,6.1,19])N(.32,.05,.32,12171688,n,.05,s)}function nS(){for(const[i,e]of[[-18.5,-2],[-12.7,-2.1],[-18.5,2.5],[-12.7,2.5]])mi(i,e,.85);N(2,.33,.65,8739912,-13.5,.31,1.85),N(.16,.52,.16,4213577,-14.35,.26,1.85),N(.16,.52,.16,4213577,-12.65,.26,1.85);for(const[i,e]of[[8,-18],[19,-18],[8,18],[19,18]]){N(1.25,.34,1.25,11037797,i,.25,e),N(1.12,.06,1.12,8166774,i,.46,e);for(const t of[-.33,.31])for(const n of[-.31,.29])Sp(i+t,e+n)}Wd(ba.centralMailbox.x,ba.centralMailbox.z,"mailbox"),Wd(7.2,6.9,"bins"),Mp("central")}function Wd(i,e,t){const n=new it;if(n.name=t,n.userData.materialKind="metal",n.position.set(i,0,e),le.add(n),t==="mailbox")N(.12,1.15,.12,4941414,0,.58,0,n),N(.62,.48,.42,6193808,0,1.05,0,n),N(.48,.07,.44,13096142,0,1.13,.01,n),at.push({x:i,z:e+.45,range:1.35,name:"街角邮筒",line:"邮筒里有新的城市通知。"});else for(const[s,r]of[[-.24,5799282],[.24,7306600]])N(.36,.72,.42,r,s,.36,0,n),N(.38,.06,.44,4414811,s,.75,0,n)}function Mp(i){const t=(s,r,o=0)=>{const a=new it;a.userData.materialKind="metal",a.position.set(s+0,0,r),a.rotation.y=o,le.add(a);for(const l of[-.42,.42]){const c=new Ee(new vu(.25,.035,6,12),Rn(3689810));c.rotation.y=Math.PI/2,c.position.set(l,.28,0),c.castShadow=!0,a.add(c)}N(.06,.06,.72,10120269,0,.55,0,a).rotation.z=.08,N(.06,.42,.06,3689810,-.1,.47,0,a).rotation.z=-.2,N(.28,.045,.06,3689810,.16,.78,0,a).rotation.z=-.15},n=(s,r,o=7047056)=>{const a=new it;a.userData.materialKind="metal",a.position.set(s+0,0,r),le.add(a),N(.72,1.55,.42,o,0,.78,0,a),N(.53,.78,.035,10470075,0,.93,.23,a,{roughness:.32,emissive:2636604,emissiveIntensity:.18});for(let l=0;l<3;l++)N(.42,.045,.02,[15188346,15047545,10471074][l],0,.66+l*.18,.255,a);N(.11,.16,.03,3952720,.23,.22,.22,a)};if(i==="central"){t(10.4,6.1,-.18),n(19.4,6.25,7045777);for(const[s,r]of[[-20.2,-5.1],[-19.3,-5],[-18.4,-5.1],[-11.4,-5]]){const o=new Ee(new Ta(.36,7,5),Rn(6129259));o.scale.y=.62,o.position.set(s,.28,r),o.castShadow=!0,o.receiveShadow=!0,le.add(o),Lt.registerSway(o,.018,.85,s+r)}}else{n(ba.riversideVending.x,ba.riversideVending.z,7902358),t(-8.2,5.8,.22);for(const[s,r]of[[-10.8,19.3],[-9.8,19.1],[-8.8,19.3]]){const o=new Ee(new Ta(.4,7,5),Rn(6719852));o.scale.y=.58,o.position.set(s+0,.3,r),o.castShadow=!0,le.add(o),Lt.registerSway(o,.02,.78,s*.4)}}}function mi(i,e,t=1){if(ns){const r=ns.clone(!0);r.updateMatrixWorld(!0);const o=new gt().setFromObject(r),a=o.getSize(new b);if(a.y>.001){const l=4.05*t/a.y,c=o.getCenter(new b);r.scale.setScalar(l),r.name="community-rounded-tree",r.position.set(i-c.x*l,.02-o.min.y*l,e-c.z*l),r.traverse(h=>{h instanceof Ee&&(h.userData.sharedAssetGeometry=!0,h.userData.sharedAssetMaterial=!0,h.userData.sharedAssetMap=!0,h.userData.noStaticCollision=!0,h.castShadow=!0,h.receiveShadow=!0)}),le.add(r);const u=N(.37*t,1.5*t,.37*t,7362372,i,.75*t,e);u.name="community-tree-trunk-collider",u.visible=!1,Lt.registerSway(r,.012/Math.max(t,.5),.82,i*.4+e*.2);return}}const n=rp();n.position.set(i,0,e),n.scale.setScalar(t),le.add(n);const s=N(.37,1.5,.37,7362372,0,.75,0,n);s.visible=!1,s.name="community-tree-trunk-collider",Lt.registerSway(n,.018/Math.max(t,.5),1.05,i*.4+e*.2)}function Sp(i,e){N(.08,.22,.08,4685657,i,.58,e),N(.15,.12,.15,Math.floor(i*73+e*39)&1?16174471:15902366,i,.72,e)}function iS(i){const e=xe.plantedAt[i],t=Ks(e);return t===0?"空花圃 · 播种":t===3?"鲜花成熟 · 收获":`花苗生长中 · ${bu(e)} 秒`}function wp(i){for(const e of[...i.children]){if(i.remove(e),e instanceof it){wp(e);continue}e instanceof Ee?(e.geometry.dispose(),e.material.dispose()):e instanceof Na&&e.material.dispose()}}function Nu(i){const e=vo[i];if(!e)return;const t=Ks(xe.plantedAt[i]);if(t!==e.stage&&(wp(e.plant),e.stage=t,t>0)){const s=t===1?.16:t===2?.32:.46;for(const r of[-.4,0,.4])for(const o of[-.3,.3]){const[a,l]=hp[i],c=Ct(a+r,l+o)-.055,u=new it;u.position.y=c,e.plant.add(u),N(.045,s,.045,5079381,r,.055+s/2,o,u);for(const h of[-1,1]){const d=N(.19,.035,.09,h<0?7906923:5868642,r+h*.11,.08+s*.68,o,u);d.rotation.z=h*.28}if(t>=2&&N(.105,.085,.105,t===3?15905956:13023357,r,.08+s,o,u),t===3)for(const h of[-1,1])N(.11,.045,.09,h<0?16767146:15976893,r+h*.095,.12+s,o,u)}}t>0&&(e.plant.userData.growthPhase=e.phase);const n=at.find(s=>s.plotIndex===i);n&&(n.name=iS(i))}function sS(){on("社区花园 / COMMUNITY GARDEN",-35.5,1.35,-6.9,4.2,"#4d6b58");for(const i of[-37.7,-33.3])N(.11,1.3,.11,7240027,i,.65,-6.9);for(const i of[-36.7,-26.3])for(const e of[-5.5,-2.5,.5,3.5])N(.1,.45,.1,9346169,i,.23,e);for(const[i,[e,t]]of hp.entries()){const n=new it;n.position.set(e,0,t),le.add(n);const s=new it;s.userData.noStaticCollision=!0,s.userData.noModelTexture=!0,n.add(s),vo.push({plant:s,stage:-1,phase:i*1.37}),at.push({x:e,z:t,range:1.75,name:"",line:"",action:"plot",plotIndex:i}),Nu(i)}}function rS(i,e){const t=new it;t.name="street-lamp";const n=PM(i,e);t.position.set(i,0,e),t.rotation.y=n.yaw,le.add(t);const s=ze.id==="qingchuan"&&i===-6.6&&e===17?xp("cafe-lamp",0,0,.65,3.2,.65):null;let r;s?(t.add(s),s.name="cafe-lamp-model",s.rotation.y=-Math.PI/2,r=new ot,r.position.set(0,2.99,0),t.add(r)):(N(.14,3.2,.14,3492692,0,1.6,0,t).userData.materialKind="metal",N(.72,.12,.14,3492692,.3,3.14,0,t),r=N(.32,.25,.32,16770991,.59,2.99,0,t,{emissive:16765563,emissiveIntensity:1.2})),r.name="lamp-head";const o=new _o(16766875,.8,7,2);o.name="lamp-light",o.position.set(r.position.x,2.85,r.position.z),o.userData.streetLight=!0,t.add(o),Lt.registerLight(o)}function Yi(i,e,t,n=!0){const s=new it;s.userData.materialKind="metal",s.position.set(i,0,e),n||(s.rotation.y=Math.PI/2),le.add(s),s.name="parked-car",s.userData.trafficVehicle=!0,N(1.55,.54,2.8,t,0,.55,0,s),N(1.29,.48,1.37,t,0,1.03,-.19,s),N(1.13,.36,.04,9877179,0,1.05,.52,s,{metalness:.2,roughness:.35}).userData.noModelTexture=!0;for(const r of[-.78,.78])for(const o of[-.86,.86])N(.23,.4,.48,2503740,r,.35,o,s);for(const r of[-.51,.51])N(.28,.16,.05,16769449,r,.59,1.43,s,{emissive:16762747,emissiveIntensity:.8})}function Hc(i,e,t,n,s,r,o=!1){N(n+.24,s+.24,.18,r,i,e,t+.08),N(n,s,.035,2506051,i,e,t+.19),N(n-.18,s-.18,.025,o?11772284:6653322,i,e,t+.215,le,{roughness:.48,emissive:o?9066283:2637641,emissiveIntensity:.16});for(const a of[-n/2,n/2])N(.1,s+.17,.22,12893093,i+a,e,t+.25);N(n+.28,.13,.46,11840148,i,e-s/2-.08,t+.32),N(n+.18,.1,.25,13747886,i,e+s/2+.06,t+.24),N(.07,s,.13,r,i,e,t+.29),N(n,.06,.13,r,i,e+.12,t+.29)}function oS(i){const e=le.children.length,t=i.z+i.d/2+.012,n=i.id==="homes"||i.id==="residence_b"||i.id.startsWith("riverside_homes"),s=i.h+.15;N(i.w+.55,.16,i.d+.55,10197126,i.x,.08,i.z),N(i.w,i.h,i.d,i.color,i.x,i.h/2+.15,i.z).userData.materialKind="plaster",N(i.w+.05,.5,i.d+.05,i.trim,i.x,.4,i.z);for(const d of[-i.w/2+.16,i.w/2-.16]){N(.34,i.h-.25,.22,13024680,i.x+d,i.h/2+.22,t+.1);for(let f=.85;f<i.h;f+=.62)N(.4,.045,.25,i.trim,i.x+d,f,t+.13)}for(let d=3.8;d<i.h-.6;d+=2.05)N(i.w,.12,.24,i.trim,i.x,d,t+.1);for(const d of[-1,1])for(const f of[-i.d*.26,i.d*.13]){const g=i.x+d*(i.w/2+.04);for(const _ of n?[2,4.55,6.65]:[2])N(.12,1.58,1.44,i.trim,g,_,i.z+f),N(.04,1.3,1.17,6125949,g+d*.08,_,i.z+f),N(.28,.12,1.58,11840148,g+d*.1,_-.8,i.z+f),N(.09,1.35,.07,12893093,g+d*.13,_,i.z+f)}if(i.id==="cafe"){Zn(i.w+1.2,4.25,i.x,t+2.18,.023,"terrain-paving",3.6);const d=new Ee(new mn(i.w-.7,i.h-.65),Rn(12951946,{map:Kl("brick",3.4,1.9)}));d.position.set(i.x,i.h/2+.28,t+.025),d.receiveShadow=!0,le.add(d)}N(i.w+.38,.18,i.d+.38,i.trim,i.x,s+.06,i.z),N(i.w+.58,.1,i.d+.58,12629148,i.x,s+.2,i.z),N(i.w-.28,.08,i.d-.28,i.roof,i.x,s+.27,i.z).userData.materialKind="roof";for(const d of[-i.d/2,i.d/2])N(i.w+.16,.3,.18,i.trim,i.x,s+.37,i.z+d);for(const d of[-i.w/2,i.w/2])N(.18,.3,i.d,i.trim,i.x+d,s+.37,i.z);N(1.1,.65,.9,9145733,i.x+i.w*.25,s+.57,i.z-1.3);for(let d=0;d<5;d++)N(.78,.035,.035,4937301,i.x+i.w*.25,s+.36+d*.1,i.z-.83);const r=n?i.h>9.3?[4.55,6.65,8.75]:[4.55,6.65]:i.h>6?[4.9]:[];if(!n&&i.h<=6)for(const d of[-i.w*.3,0,i.w*.3])Hc(i.x+d,4.55,t,1.55,.65,i.trim);for(const d of r)for(const f of[-i.w*.3,0,i.w*.3])if(Hc(i.x+f,d,t,1.38,1.45,i.trim,f===0),n){N(1.85,.13,.78,10001548,i.x+f,d-.92,t+.42),N(1.85,.07,.08,i.trim,i.x+f,d-.33,t+.8);for(let g=0;g<7;g++)N(.045,.52,.055,i.trim,i.x+f-.86+g*.287,d-.59,t+.8);N(.6,.24,.26,9988944,i.x+f+.45,d-.77,t+.62),N(.57,.15,.25,6125916,i.x+f+.45,d-.58,t+.62)}N(2,2.8,.18,i.trim,i.x,1.55,t+.12),N(1.65,2.56,.08,2637635,i.x,1.53,t+.24);for(const d of[-.88,.88])N(.13,2.75,.32,12893093,i.x+d,1.55,t+.29);N(1.38,1.55,.03,6915977,i.x,1.84,t+.3),N(.08,2.5,.1,i.trim,i.x,1.54,t+.35),N(.08,.4,.12,14268537,i.x+.56,1.4,t+.4),N(2.25,.12,.8,11972505,i.x,.2,t+.4);for(const d of[-i.w*.31,i.w*.31])if(Hc(i.x+d,1.78,t,2.6,2.1,i.trim,!0),n){for(const f of[-1,1])N(.36,1.58,.025,13288111,i.x+d+f*.94,1.78,t+.34);N(1.7,.11,.32,9271647,i.x+d,.82,t+.46)}else for(const f of[1.25,1.9]){N(2.25,.07,.12,6708816,i.x+d,f,t+.3);for(let g=0;g<4;g++)N(.25,.24+g%2*.08,.05,[9201235,12165487,7440503,10126708][g],i.x+d-.85+g*.55,f+.17,t+.33)}const o=Math.min(i.w-1.3,7.8);if(N(o+.24,.82,.3,i.trim,i.x,3.42,t+.25),on(i.sign,i.x,3.42,t+.42,o,i.id==="cafe"?"#54403d":"#344947").scale.y=.36,i.id!=="cafe"){for(const d of[-i.w*.38,i.w*.38])N(.72,.1,.34,10190948,i.x+d,.92,t+.38),N(.58,.08,.22,5998187,i.x+d,1.03,t+.46);N(.56,.22,.42,7965066,i.x+i.w*.33,s+.52,i.z-i.d*.22);for(let d=0;d<3;d++)N(.05,.16,.28,5069918,i.x+i.w*.33-.14+d*.14,s+.52,i.z-i.d*.44)}const a=N(i.w*.76,.12,1.3,i.trim,i.x,2.99,t+.84);a.userData.materialKind="fabric",a.rotation.x=.13;const l=i.id==="cafe"?12:1;for(let d=0;d<l;d++){const f=i.w*.76/l,g=i.id==="cafe"?d%2?14075558:8871506:i.trim;N(f-.015,.25,.1,g,i.x-i.w*.38+(d+.5)*f,2.78,t+1.47)}for(const d of[-1,1])N(.08,.55,.08,i.trim,i.x+d*i.w*.34,2.59,t+1.13),N(.26,.38,.27,3754314,i.x+d*1.48,2.25,t+.38),N(.15,.24,.05,15056248,i.x+d*1.48,2.25,t+.54,le,{emissive:13077830,emissiveIntensity:.35});if(N(.1,i.h-.2,.13,i.trim,i.x+i.w/2-.55,i.h/2+.2,t+.24),i.x>=70){for(const d of[-1,1])N(.16,i.h-.5,.23,14274491,i.x+d*(i.w/2-.5),i.h/2+.2,t+.13),N(.38,.23,.35,7108983,i.x+d*1.35,3.78,t+.42),N(.2,.13,.12,16768938,i.x+d*1.35,3.75,t+.64,le,{emissive:11897679,emissiveIntensity:.36});for(let d=.72;d<i.h-.4;d+=1.02)N(i.w-.9,.025,.065,12958376,i.x,d,t+.15).castShadow=!1;for(const d of[-i.d*.27,i.d*.18]){const f=N(.32,.37,.62,11581101,i.x+i.w/2+.19,2.36,i.z+d);f.castShadow=!0;for(let g=0;g<3;g++)N(.055,.28,.05,6649460,i.x+i.w/2+.37,2.36,i.z+d-.18+g*.18)}N(2.65,.11,.92,12891806,i.x,.13,t+.92),N(2.3,.08,.56,13944751,i.x,.075,t+1.45);for(const d of[-1,1])N(.56,.37,.46,9009504,i.x+d*2.03,.2,t+.8),N(.48,.2,.37,6719842,i.x+d*2.03,.44,t+.8)}const c=t+1.6;at.push({x:i.x,z:c,range:2.35,name:i.name,line:i.line,enter:i.enter,action:i.id==="market"?"shop":void 0});const u=le.children.slice(e);for(const d of u)d.userData.materialKind??="stone",d.userData.noStaticCollision=!0,d.userData.collisionGeometry="architecture",d.userData.foregroundOccluder=!0,d.userData.occlusionBuildingId=i.id;i.id==="cafe"&&(wn(0,i.x-3.5,t+2.3,2.4,1.8),wn(0,i.x+3.5,t+2.3,2.4,1.8),wn(1,i.x-4.9,t+1.8,1.4,2.1),wn(1,i.x+4.9,t+1.8,1.4,2.1),wn(2,i.x+1.65,t+2.6,1.15,1.6));const h=u.flatMap(d=>d instanceof Ee?(Array.isArray(d.material)?d.material:[d.material]).map(g=>({material:g,opacity:g.opacity,transparent:g.transparent,depthWrite:g.depthWrite})):[]);os.push({buildingId:i.id,bounds:new gt(new b(i.x-i.w/2-.35,.15,i.z-i.d/2-.35),new b(i.x+i.w/2+.35,i.h+.6,i.z+i.d/2+.35)),materials:h,faded:!1})}function Xd(i,e=Xl){if(!e)return!1;const t=i.id.startsWith("north_"),n=e.clone(!0);n.userData.foregroundOccluder=!0,n.userData.occlusionBuildingId=i.id,n.userData.collisionGeometry="architecture";const s=new gt().setFromObject(n),r=s.getSize(new b);if(Math.min(r.x,r.y,r.z)<.001)return!1;const o=s.getCenter(new b);n.scale.set(i.w/r.x,i.h/r.y,i.d/r.z),n.position.set(i.x-o.x*n.scale.x,.015-s.min.y*n.scale.y,i.z-o.z*n.scale.z);const a=[];n.traverse(d=>{if(!(d instanceof Ee))return;d.userData.sharedAssetGeometry=!0;const f=g=>{const _=g.clone();if(_ instanceof jt){for(const p of[_.map,_.metalnessMap,_.roughnessMap])p&&(p.anisotropy=Math.min(8,Dt.capabilities.getMaxAnisotropy()));_.roughness=Math.max(_.roughness,.9),_.metalness=Math.min(_.metalness,.06),_.color.multiply(new pe(16051941))}return a.push({material:_,opacity:_.opacity,transparent:_.transparent,depthWrite:_.depthWrite}),_};d.material=Array.isArray(d.material)?d.material.map(f):f(d.material),d.castShadow=!0,d.receiveShadow=!0,d.userData.sharedAssetMap=!0}),le.add(n),n.updateMatrixWorld(!0);const l=new Wh,c=new b,u=new se;if(n.traverse(d=>{if(!(d instanceof Ee))return;const f=d.geometry.getAttribute("position");for(let g=0;g<f.count;g++)c.fromBufferAttribute(f,g).applyMatrix4(d.matrixWorld),c.y>=.65&&c.y<=1.65&&l.expandByPoint(u.set(c.x,c.z))}),t){const d=(i.w-.8)*n.scale.x,f=(i.d-1)*n.scale.z;Ui.set(i.id,new Wh(new se(n.position.x-d/2,n.position.z-f/2),new se(n.position.x+d/2,n.position.z+f/2)))}else l.isEmpty()||Ui.set(i.id,l);const h=i.z+i.d/2+.012;if(Zn(i.w+1.2,4.25,i.x,h+2.18,.023,"terrain-paving",3.6),at.push({x:i.x,z:h+1.6,range:2.35,name:i.name,line:i.line,enter:i.enter}),t){const d=new b(0,3.92,(i.d-1)/2+.34).multiply(n.scale).add(n.position),f=on(i.sign,d.x,d.y,d.z,(i.w-.8)*.69*n.scale.x,"#435c4f");f.scale.y=.52*n.scale.y/((i.w-.8)*.69*n.scale.x/4),f.material.map?.dispose(),f.material.map=dp(i.sign,"#435c4f","#f7e9cd",384,68),a.push({material:f.material,opacity:f.material.opacity,transparent:f.material.transparent,depthWrite:f.material.depthWrite})}else wn(0,i.x-3.5,h+2.3,2.4,1.8),wn(0,i.x+3.5,h+2.3,2.4,1.8),wn(1,i.x-4.9,h+1.8,1.4,2.1),wn(1,i.x+4.9,h+1.8,1.4,2.1),wn(2,i.x+1.65,h+2.6,1.15,1.6);return os.push({buildingId:i.id,bounds:new gt().setFromObject(n),materials:a,faded:!1}),!0}const Dn=new cr,Dr=new b;let Uu=[];const Os=new Set,Vc=new Hf;function Ep(i){const e=ze.buildings.find(o=>o.id===i);if(!e)return!1;const t=Ui.get(i),n=t?.min.x??e.x-e.w/2,s=t?.max.x??e.x+e.w/2,r=t?.min.y??e.z-e.d/2;return oe.x>n-.6&&oe.x<s+.6&&oe.z<r-.08}function aS(){for(const i of Os)i.visible=!0;Os.clear();for(const i of[.65,1.25,1.85]){Dr.set(oe.x,i,oe.z);const e=Dr.distanceTo(Tt.position);Dn.origin.copy(Tt.position),Dn.direction.copy(Dr).sub(Tt.position).normalize(),Vc.set(Dn.origin,Dn.direction),Vc.far=e;for(const t of Uu){const n=t.object.userData.occlusionBuildingId;if(n){if(!Ep(n))continue}else if(oe.x<=t.bounds.min.x||oe.x>=t.bounds.max.x||oe.z>=t.bounds.min.z-.08)continue;Dn.intersectBox(t.bounds,Dr)&&(Os.has(t.object)||Vc.intersectObject(t.object,!0).length&&Os.add(t.object))}}for(const i of Os)i.visible=!1}function Tp(){Dn.origin.set(oe.x,1.15,oe.z),Dn.direction.copy(Tt.position).sub(Dn.origin).normalize();for(const e of os){const t=Dn.intersectBox(e.bounds,Dr),n=Ep(e.buildingId)&&t!==null&&t.distanceToSquared(Dn.origin)<Tt.position.distanceToSquared(Dn.origin);if(n!==e.faded){e.faded=n;for(const s of e.materials)s.material.opacity=n?.24:s.opacity,s.material.transparent=n||s.transparent,s.material.depthWrite=n?!1:s.depthWrite,s.material.needsUpdate=!0}}const i=os.some(e=>e.faded);if(i!==ql&&(ql=i,!oe.model)){const e=oe.sprite.material;e.depthTest=!0,e.color.setHex(16777215),e.needsUpdate=!0}}function as(i,e,t=9136976){const n=new it;n.userData.materialKind="wood",n.position.set(i,0,e),le.add(n),N(2.15,.18,.64,t,0,.6,0,n),N(2.15,.72,.16,t,0,1.05,-.32,n);for(const s of[-.82,.82])N(.14,.56,.14,5134160,s,.28,0,n).userData.materialKind="metal"}function Gc(i,e,t=0){const n=new Set(le.children),s=at.length;e();for(const r of le.children)n.has(r)||(r.position.x+=i,r.position.z+=t);for(const r of at.slice(s))r.x+=i,r.z+=t}function cS(){$s(9.4,7.2,9022083,-15,-22,.026),$s(7.9,.66,13813671,-15,-22,.039),$s(.66,6.4,13813671,-15,-22,.04);for(const[t,n]of[[-19.1,-24.9],[-11.2,-24.8],[-19.1,-19.2],[-11.2,-19.2]])mi(t,n,.77);as(-16.7,-19.5),as(-13.2,-24.5);const i=new Ee(new Fi(1.15,1.25,.4,12),Rn(10135972));i.position.set(-15.1,.27,-22),i.castShadow=!0,i.receiveShadow=!0,le.add(i);const e=new Ee(new Fi(.88,.88,.045,12),Rn(7057582,{metalness:.16,roughness:.34}));e.position.set(-15.1,.49,-22),le.add(e),Lt.registerWave(e,.018,1.7,.6),N(.18,.85,.18,9281428,-15.1,.84,-22),at.push({x:-15.1,z:-20.3,range:2,name:"社区小广场",line:"水声和树影让这里慢了下来。傍晚常有邻居在长椅上聊天。"})}function qd(){N(3.4,.16,1.65,4611684,-18.2,2.48,-5.5).userData.materialKind="metal";for(const e of[-19.7,-16.7])for(const t of[-6.15,-4.85])N(.12,2.4,.12,5400937,e,1.2,t).userData.materialKind="metal";as(-18.2,-5.4,6519923),on("BUS STOP  /  河畔站",-18.2,2.2,-4.56,3.1,"#355761"),at.push({x:-18.2,z:-3.7,range:2.1,name:"河畔公交站",line:"这里连接着更多街区。现在可以沿街道步行往返晴川街区。"}),N(2.8,1.8,.18,10256734,-7.1,1.05,8.5),on("社区公告栏",-7.1,1.55,8.64,2.5,"#665a4c"),at.push({x:-7.1,z:9.5,range:1.8,name:"社区公告栏",line:"公告：周末在活动室举办邻里聚会。河畔生活区欢迎新朋友。"}),$s(8.6,5.2,13220752,-14.3,17.4,.028);for(const e of[-16.5,-12.1])N(.15,2.1,.15,5142895,e,1.05,17.3);N(4.55,.18,.18,5142895,-14.3,2.13,17.3);for(const e of[-15.5,-13.1])N(.045,1.25,.045,11052953,e,1.48,17.3),N(.85,.11,.42,14064240,e,.84,17.3);N(1.55,.42,1.55,6986376,-18.2,.27,17.6);const i=N(1.6,.13,2.3,15053163,-18.2,.85,18);i.rotation.x=-.38,at.push({x:-14.3,z:19.2,range:2.2,name:"社区游乐场",line:"秋千轻轻晃着。这里是邻里最热闹的一角。"});for(const[e,t]of[[8,-18],[19,-18],[8,18],[19,18]]){N(1.4,.32,1.4,9269593,e,.24,t),N(1.2,.06,1.2,6655342,e,.45,t);for(const n of[-.28,.28])Sp(e+n,t)}for(const[e,t]of[[-21,17],[21,17],[21,-17]])mi(e,t,.88);lS(),Mp("riverside")}function lS(){const i=new it;i.userData.materialKind="metal",i.position.set(15.8,0,17.9),le.add(i);for(let e=0;e<9;e++){const t=-3.2+e*.8;N(.08,.82,.08,6651257,t,.41,0,i),e<8&&N(.08,.08,.08,9086619,t+.4,.75,0,i)}N(7.2,.14,.1,7902090,0,.78,0,i),at.push({x:15.8,z:18.9,range:1.8,name:"河岸栏杆",line:"栏杆外是缓慢流动的河水，风里带着湿润的草木香。"})}function uS(){for(const[e,t,n]of[[72,-48,.82],[84,-48,.9],[105,-48,.83],[117,-48,.88],[72,23,.8],[84,23,.84],[105,23,.88],[117,23,.83]]){const s=new Ee(new Fi(1.22,1.32,.065,12),Rn(10257764));s.position.set(e,.045,t),s.receiveShadow=!0,le.add(s),mi(e,t,n);for(const[r,o]of[[-1,.5],[.92,-.3],[.3,1]])N(.36,.35,.35,5800802,e+r,.19,t+o),N(.18,.12,.17,14269560,e+r,.41,t+o)}for(const[e,t]of[[76,-20],[109,20]])Zn(5.4,1.35,e,t,.036,"terrain-paving",3.6),as(e,t);const i=(e,t,n)=>{const s=new it;s.position.set(e,0,t),le.add(s),N(1.1,.72,.45,n,0,.36,0,s);for(const r of[-.34,0,.34])N(.22,.28,.035,12044222,r,.42,.235,s,{roughness:.36}),N(.14,.025,.02,6190964,r,.25,.255,s);N(1.18,.08,.52,8028536,0,.76,0,s)};i(70,-5,7504522),i(104,5,8096388),on("诊所  /  CLINIC",62,1.8,-5.15,3,"#567c75"),N(2.6,.08,.12,15069156,62,1.05,-5.06),N(.12,.48,.12,7113859,60.82,.86,-5.06),N(.12,.48,.12,7113859,63.18,.86,-5.06),on("洗衣房  /  LAUNDRY",62,1.8,16.9,3.2,"#587887"),on("活动室公告",110,1.55,16.9,2.8,"#775f4c"),N(2.8,1.45,.12,10256734,110,.85,17),N(2.35,1.02,.035,14931381,110,.86,17.08);for(let e=0;e<4;e++)N(1.65-e%2*.34,.045,.02,[12876902,7180150,9206691,13674591][e],109.65,.51+e*.18,17.12)}function hS(i){tS(i),i.id==="qingchuan"?(nS(),sS(),Gc(-16,cS,-20),Gc(48,qd),uS(),JM(77,22)):qd();for(const e of i.buildings)e.id.startsWith("north_")&&Xd(e,Pu.get(e.id)??null)||e.id==="cafe"&&Xd(e)||oS(e);for(const[e,t]of i.id==="qingchuan"?Td:Td.slice(0,8))rS(e,t);for(const[e,t,n]of[[-21,-18,.9],[-21,18,.85],[21,-18,.95],[21,18,.95],[-7,-18,.8],[7,18,.8]])i.id==="qingchuan"&&e===-21&&t===18&&!ns||mi(e,t,n);if(i.id==="qingchuan"){Du=new EM(le,!ns),ns?mi(Vs.x,Vs.z,.78):jM(Vs.x,Vs.z),Yi(-2.8,-13,10313306),Yi(2.9,16,12756582),Yi(16,2.5,5669514,!1),Yi(48,16,10124393),Yi(46.2,-14,8493472),Gc(48,()=>Yd("riverside"));for(const[e,t,n]of[[27,-18,.9],[27,18,.85],[69,-18,.95],[69,18,.95]])mi(e,t,n);at.push({x:115,z:0,range:2.2,name:"远方街道",line:"这里是当前连续社区的边界。更远的街区以后会从这里接上。"})}else Yi(0,16,10124393),Yi(-1.8,-14,8493472);Yd(i.id)}function Yd(i){const e=new it;e.position.set(i==="riverside"?-7.1:-13.5,0,i==="riverside"?8.5:1.85),le.add(e),N(.08,2.25,.08,5465188,0,1.12,0,e);const t=N(.92,.48,.035,14255976,.48,1.93,0,e);if(Lt.registerSway(t,.08,2.1,i.length),i==="riverside"){const n=new it;n.position.set(18.6,.05,16.4),le.add(n),N(1.7,.12,.18,6654859,0,1.32,0,n);for(let r=0;r<7;r++){const o=N(.11+r%2*.04,1.25+r%3*.18,.04,7980737,-.72+r*.24,.65,0,n,{transparent:!0,opacity:.68,depthWrite:!1,emissive:3435890,emissiveIntensity:.16});Lt.registerWave(o,.08,2+r*.08,r*.4)}const s=new Ee(new Fi(1.1,1.25,.05,16),Rn(5740957,{transparent:!0,opacity:.8,metalness:.16,roughness:.24}));s.position.set(18.6,.06,16.8),le.add(s),Lt.registerWave(s,.022,1.4,.8)}}function dS(){const i=N(19,.22,15,9138011,0,-.1,0);i.receiveShadow=!0,i.userData.materialKind="wood";for(let e=-9;e<10;e+=1)N(.025,.01,15,7692625,e,.02,0).castShadow=!1;for(const[e,t,n,s]of[[19,.3,0,-7.5],[.3,15,-9.5,0],[.3,15,9.5,0]])N(e,5,t,13087124,n,2.5,s).userData.materialKind="plaster";N(8,1.3,1.5,7754816,0,.68,-3.7),N(8.4,.18,1.72,12029798,0,1.4,-3.7);for(const e of[-5.6,5.6])for(const t of[-1.3,2.3]){N(1.8,.15,1.45,11831391,e,.86,t),N(.16,.8,.15,5917765,e,.42,t);for(const n of[-1.45,1.45])N(.55,.66,.58,6839382,e+n,.35,t)}for(const e of[-6.5,-3.8,3.8,6.5])N(1.5,2.1,.08,7364180,e,2.7,-7.28),N(1.29,1.88,.09,8431523,e,2.7,-7.22,le,{emissive:5008747,emissiveIntensity:.25});on("WHITE BIRD  /  CAFE",0,4,-7.05,5.2,"#6d4d4b"),wn(1,-7.5,-5.7,1.7,2.35),wn(1,7.5,-5.7,1.7,2.35);for(const e of[-3,0,3]){const t=new _o(16768424,1.7,8);t.position.set(e,3.9,-2.5),le.add(t),N(.46,.23,.46,16767905,e,3.85,-2.5,le,{emissive:16765334,emissiveIntensity:1})}at.push({x:0,z:6.25,range:1.7,name:"回到中央街",line:"推门回到街上。",action:"exit"}),N(2.1,.05,.65,14401435,0,.035,6.5)}function fr(i,e,t,n){const s=N(i,.22,e,t,0,-.1,0);s.receiveShadow=!0,s.userData.materialKind=["clinic_inside","laundry_inside"].includes(ze.id)?"stone":"wood";for(let r=-i/2;r<=i/2;r+=.9)N(.025,.01,e,7238762,r,.022,0).castShadow=!1;N(i,5,.28,n,0,2.5,-e/2).userData.materialKind="plaster";for(const r of[-i/2,i/2])N(.28,5,e,n,r,2.5,0).userData.materialKind="plaster";for(const r of[-i*.28,i*.28])N(2.4,2.1,.08,5206126,r,2.65,-e/2+.18),N(2.06,1.76,.09,10471101,r,2.65,-e/2+.24,le,{emissive:4549739,emissiveIntensity:.12});for(const r of[-3.2,3.2]){const o=new _o(16768435,1.5,9);o.position.set(r,4.15,-1),le.add(o),N(.44,.18,.44,16767917,r,4.15,-1,le,{emissive:16765327,emissiveIntensity:.9})}}function pr(i,e){N(2.3,.05,.72,13677195,0,.034,e+.25),at.push({x:0,z:e,range:1.75,name:i,line:"推门回到外面。",action:"exit"})}function fS(){fr(19,15,9273968,12174006),$s(6.4,4.2,10267031,0,1.8,.025);for(let i=0;i<3;i++)for(let e=0;e<4;e++)N(.85,.46,.16,9928544,-7.4+e*.95,1.42+i*.53,-7.13),N(.42,.035,.18,14206366,-7.4+e*.95,1.36+i*.53,-7.01);at.push({x:-5.9,z:-5.1,range:2.1,name:"住户信箱",line:"信箱整齐排着。以后朋友来访，也许会有一封新信。"}),N(3.4,1.18,1.1,7234132,-3.8,.59,-2.8),N(3.7,.17,1.32,12098678,-3.8,1.22,-2.8),Cn.push({x:-3.8,z:-2.8,w:3.6,d:1.3}),N(2.35,3.45,.12,4741977,4.9,1.85,-7.28),N(1.95,3.15,.13,10333609,4.9,1.76,-7.18,le,{metalness:.34,roughness:.48}),N(.06,3.15,.15,5860974,4.9,1.76,-7.06),on("电梯  /  我的房间",4.9,4.12,-7.02,3.3,"#425e5c"),at.push({x:4.9,z:-4.55,range:2,name:"前往我的房间",line:"电梯门缓缓打开。",enter:"apartment_unit"}),as(3.1,1.4,8743769),N(.7,1.25,.7,9204055,7.5,.63,1.2),mi(7.5,1.2,.48),pr("走出公寓",6.22)}function pS(){fr(17,13,9992031,13092016),$s(5.3,3.9,11968908,.8,.7,.025),N(3.2,.62,3,6838601,-5,.36,-3.3),N(3,.32,2.65,14997697,-5,.78,-3.3).userData.materialKind="fabric",N(2.9,.22,.65,10333602,-5,1.03,-4.1).userData.materialKind="fabric",Cn.push({x:-5,z:-3.3,w:3.4,d:3.2}),at.push({x:-5,z:-.75,range:1.9,name:"床 · 睡到早晨",line:"好好休息，迎接新一天。",action:"rest"}),N(3.1,.75,1.2,7178623,1.5,.48,1).userData.materialKind="fabric",N(3.1,.95,.25,5730919,1.5,1.05,.35).userData.materialKind="fabric",N(1.55,.42,.9,10322015,1.5,.27,-1.1),Cn.push({x:1.5,z:.95,w:3.3,d:1.4}),N(5.4,1,.85,8156514,4.25,.52,-5.45),N(5.4,.16,.99,12825754,4.25,1.1,-5.45),N(1.65,2.1,.13,5926512,5.7,2.9,-6.32),N(1.45,1.9,.14,9550263,5.7,2.9,-6.2),N(1.7,2.4,.75,8875864,-7.2,1.2,1.1);for(let i=.55;i<2.4;i+=.56)N(1.72,.07,.82,12624763,-7.2,i,1.1);at.push({x:-5.6,z:2.1,range:1.7,name:"书架和相框",line:"房间还空着不少位置，未来可以摆上自己的收藏。"}),pr("离开房间",5.28)}function mS(){fr(19,15,9010019,11909031);for(const i of[-7.3,-4.5,4.6,7.3]){N(1.55,3.35,.8,7100739,i,1.72,-4.8);for(let e=.75;e<3.4;e+=.6){N(1.62,.08,.9,10583638,i,e,-4.8);for(const t of[-.48,-.17,.19,.5])N(.2,.42,.55,[8166286,12291439,11117706,7830932][Math.round((t+.48)*3)],i+t,e+.25,-4.8)}Cn.push({x:i,z:-4.8,w:1.8,d:1})}for(const i of[-3.4,3.2]){N(2.2,.15,1.45,10453341,i,.81,1.1);for(const e of[-.85,.85])N(.13,.72,.13,7428936,i+e,.38,1.1);N(1.2,.54,.5,6323317,i,.34,2.3).userData.materialKind="fabric",Cn.push({x:i,z:1.1,w:2.35,d:1.55})}on("城市图书馆  /  CITY LIBRARY",0,4.12,-7.02,5.2,"#506766"),at.push({x:-6.2,z:-3.1,range:1.9,inspectId:"old-map",name:"城市旧地图",line:"书页里夹着旧地图。晴川街区曾经只有一条临河的小路。"}),at.push({x:2.1,z:-3,range:1.9,name:"社区故事书",line:"书里写着每个普通人的日常：上班、散步、回家，和新的相遇。"}),pr("走出图书馆",6.22)}function gS(){fr(17,13,12175805,14278353),on("社区诊所  /  CLINIC",0,4.1,-6.03,4.5,"#567c75"),N(3.4,1,1.15,8100750,-4.2,.55,-2.7),N(3.55,.14,1.3,14867660,-4.2,1.12,-2.7),Cn.push({x:-4.2,z:-2.7,w:3.6,d:1.3});for(const i of[1.4,4.1])N(1.85,.38,.85,7576203,i,.37,-3.8).userData.materialKind="fabric",N(1.85,.8,.13,5997945,i,.8,-4.27).userData.materialKind="fabric",Cn.push({x:i,z:-3.8,w:2,d:1});N(2.6,2.2,.16,15065553,6.1,2.5,-6.1),N(1.4,1.1,.18,9418925,6.1,2.5,-5.97),at.push({x:6.1,z:-2.9,range:1.9,inspectId:"clinic-health",name:"社区健康公告",line:"公告：多运动、规律睡眠。河畔步道适合晨间散步。"}),as(2.8,1.4,8231564),pr("离开诊所",5.2)}function _S(){fr(17,13,10991790,12964042),on("自助洗衣  /  LAUNDRY",0,4.1,-6.03,4.7,"#4e7380");for(const i of[-5.6,-3.3,2.7,5]){N(1.66,1.65,1.05,15067616,i,.86,-4.7).userData.materialKind="metal";const e=new Ee(new Fi(.45,.45,.05,24),Rn(6391962,{metalness:.3,roughness:.33}));e.rotation.x=Math.PI/2,e.position.set(i,.87,-4.11),le.add(e),N(1.25,.1,.1,7771278,i,1.53,-4.08),Cn.push({x:i,z:-4.7,w:1.75,d:1.2})}N(2.6,.12,1.2,11636328,0,.85,.2);for(const i of[-1,1])N(.12,.78,.12,7432797,i,.42,.2);Cn.push({x:0,z:.2,w:2.7,d:1.4}),at.push({x:4,z:-2.9,range:2,name:"滚筒洗衣机",line:"衣服在透明圆窗后缓缓转动。"}),at.push({x:0,z:2.2,range:1.8,name:"折衣桌",line:"桌面干净整齐，放着一篮刚洗好的衣服。"}),pr("离开洗衣房",5.2)}function xS(){fr(17,13,11377273,13878953),on("社区活动室  /  COMMUNITY",0,4.1,-6.03,5,"#775f4c");for(const i of[-3.3,3.3]){N(2.9,.14,1.5,11965806,i,.8,-2.7);for(const e of[-1.15,1.15])N(.12,.72,.12,7757641,i+e,.4,-2.7);Cn.push({x:i,z:-2.7,w:3.1,d:1.65});for(const e of[-.8,0,.8])N(.6,.04,.43,[9217690,14137752,10194330][Math.round(e+.8)],i+e,.91,-2.7)}N(3.2,2.2,.15,9138515,-5.9,2.35,-6.06),N(2.9,1.85,.17,14470056,-5.9,2.35,-5.95),at.push({x:-5.9,z:-4.3,range:2.1,inspectId:"community-board",name:"活动安排",line:"本周活动：周五下棋，周六读书，周日一起整理花园。"}),N(1.65,2.7,.7,9205337,7,1.35,-2.5);for(const i of[.7,1.5,2.3])N(1.7,.09,.78,11901040,7,i,-2.5);as(0,2.2,9270619),bp(),pr("离开活动室",5.2)}function bp(){if(ze.id!=="community_inside"||!xe.progress.delivered||le.getObjectByName("community-gift-flower"))return;const i=new it;i.name="community-gift-flower",i.userData.noStaticCollision=!0,i.userData.noModelTexture=!0,le.add(i),N(.18,.22,.18,11059634,-3.3,1,-2.7,i),N(.035,.31,.035,5079381,-3.3,1.22,-2.7,i);for(let e=0;e<5;e++){const t=e/5*Math.PI*2;N(.12,.08,.12,15905956,-3.3+Math.cos(t)*.09,1.39,-2.7+Math.sin(t)*.09,i)}N(.09,.09,.09,16767146,-3.3,1.41,-2.7,i)}function vS(){hn?.dispose(),hn=null,Du=null,Os.clear(),Uu=[],Ui.clear(),le.traverse(i=>{if(i instanceof Ee){i.userData.sharedAssetGeometry||i.geometry.dispose();const e=Array.isArray(i.material)?i.material:[i.material];for(const t of e)!i.userData.sharedAssetMap&&"map"in t&&t.map instanceof pt&&![...Qn.values()].includes(t.map)&&t.map!==Ci&&t.map.dispose(),"normalMap"in t&&t.normalMap instanceof pt&&t.normalMap.dispose(),"bumpMap"in t&&t.bumpMap instanceof pt&&t.bumpMap.dispose(),i.userData.sharedAssetMaterial||t.dispose()}else i instanceof Na&&i.material.dispose()});for(const i of[...le.children])le.remove(i);Lt.clearWorldAnimations(),yo(),Yt=[],at=[],vo=[],os=[],Cn=[],ct=null,ql=!1,me.interaction.classList.remove("show")}function uo(i){return i!=="qingchuan"&&i!=="riverside"}function Ap(i,e){return i-(uo(e)?1.5:4.7)}function Pa(i){Ht=i&&ze.id==="qingchuan",An.fog instanceof mo&&(An.fog.density=Ht?.0014:.0055);const e=document.querySelector("#overview-toggle");e.hidden=ze.id!=="qingchuan",e.setAttribute("aria-pressed",String(Ht)),e.textContent=Ht?"返回游玩 · V":"社区总览 · V",Ou(),Bt.clear(),Mo()}function Jl(i,e){if(vS(),ze=us[i],me.location.textContent=ze.name,Pa(!1),gi({type:"visit",location:i}),i==="cafe_inside"?dS():i==="apartment_lobby"?fS():i==="apartment_unit"?pS():i==="library_inside"?mS():i==="clinic_inside"?gS():i==="laundry_inside"?_S():i==="community_inside"?xS():hS(ze),i==="qingchuan"&&yS(),XM.apply(le),Ni.rebuild(le),i==="qingchuan"){const r=CM(ze.buildings,Un);IM(le,r,(o,a,l)=>{const c=le.children.length;mi(o,a,l);for(const u of le.children.slice(c))u.position.y+=Hr+.025}),Ni.rebuild(le)}i==="qingchuan"&&(hn=new BM(le,{zones:ka.has("grassSample")?Id.slice(0,1):Id,allowed:(r,o)=>kM(r,o,ze.buildings)&&!Un(r,o),heightAt:HM},nn));for(const r of ze.npcs){const o=xe.npcStates[r.id],a=o?.districtId===i?o:void 0,l=pa(a?.x??r.x,a?.z??r.z,Un),c=Ud(r.skin,l.x,l.z,r.name,r.line,r.id);Yt.push(c),c.route=r.route?.map(u=>pa(u.x,u.z,Un)),c.routeIndex=r.route&&r.route.length>1?1:0,Rp(c),c.activity??=Ba[r.id]?.activity,c.pace=r.pace??.75,c.routeIndex=a&&a.routineKey===c.routineKey?Math.max(0,Math.min((c.route?.length??1)-1,a.routeIndex)):c.routeIndex,c.direction=a?.direction??c.direction,c.walkDistance=a?.walkDistance??0,c.waitUntil=dn+(a?.routineKey===c.routineKey?a?.waitRemaining??.5:.5),a?.routineKey===c.routineKey&&a?.activityLabel&&(c.activity=a.activityLabel),c.walking=a?.activity==="walking",c.model&&r.tint&&c.model.traverse(u=>{if(u instanceof Ee)for(const h of Array.isArray(u.material)?u.material:[u.material])"color"in h&&h.color instanceof pe&&h.color.multiply(new pe(r.tint))}),r.tint&&!c.drawn&&c.sprite.material.color.setHex(r.tint),!c.drawn&&Ca[r.id]&&(c.sprite.visible=!1,c.shadow.visible=!1),vp(c),at.push({x:c.x,z:c.z,range:2,name:r.name,line:r.line,actor:c})}const t=e??ze.spawn,n=pa(t.x,t.z,Un);oe=Ud("protagonist-provided",n.x,n.z),Yt.push(oe);for(const r of le.children)r.userData.contactShadow&&op(r,yp);le.updateMatrixWorld(!0),Uu=le.children.filter(r=>r.userData.foregroundOccluder===!0).map(r=>({object:r,bounds:new gt().setFromObject(r)})).filter(r=>r.bounds.max.y>.45&&!r.bounds.isEmpty());const s=new b(oe.x,0,Ap(oe.z,i));Yn.copy(s),Tt.position.copy(Yn).add(Oi),Tt.lookAt(Yn),Tp(),mr(),me.hint.textContent=i==="qingchuan"?"沿连续街道步行可到河畔社区；西侧独立花园能在土地上播种。按 V 查看社区总览。":i==="riverside"?"河畔生活区 · 逛广场、公交站、游乐场，和邻居聊聊。":`${ze.name} · 靠近物品或人物，按 E 互动。`,Hn()}function yS(){for(const i of[...le.children]){if(i.userData.contactShadow||i.name==="street-relief"||i.name==="blurred-distant-skyline")continue;if(i instanceof Ee&&i.geometry.type==="PlaneGeometry"&&Math.abs(i.rotation.x+Math.PI/2)<.01&&i.position.y<.09){le.remove(i),i.geometry.dispose();for(const n of Array.isArray(i.material)?i.material:[i.material])n.dispose();continue}if(i.userData.occlusionBuildingId){i.position.y+=.325;continue}const t=new gt().setFromObject(i);if(!t.isEmpty()&&t.min.y<.22&&t.max.y>.22){const n=t.getCenter(new b);if(i instanceof it&&i.children.some(s=>s.userData.growthPhase!==void 0||vo.some(r=>r.plant===s)))continue;i.position.y+=Ct(n.x,n.z)}}for(const i of os)i.bounds.translate(new b(0,.325,0));le.updateMatrixWorld(!0)}function fi(){if(!oe||!ze)return;const i={districtId:ze.id,x:Number(oe.x.toFixed(3)),z:Number(oe.z.toFixed(3)),returnStack:Xr.map(t=>({id:t.id,spawn:{x:Number(t.spawn.x.toFixed(3)),z:Number(t.spawn.z.toFixed(3))}})),night:Yl,weather:Rt.weather,worldTime:Rt.snapshot()},e={...xe.npcStates};for(const t of Yt)!t.id||t===oe||(e[t.id]={districtId:ze.id,x:Number(t.x.toFixed(3)),z:Number(t.z.toFixed(3)),routeIndex:t.routeIndex??0,waitRemaining:Number(Math.max(0,(t.waitUntil??dn)-dn).toFixed(3)),direction:t.direction,activity:t.walking?"walking":"waiting",walkDistance:Number(t.walkDistance.toFixed(3)),routineKey:t.routineKey,activityLabel:t.activity});xe.location=i,xe.npcStates=e,xo(xe)}function Un(i,e){const t=ze.bounds;if((t?i<t.minX+.75||i>t.maxX-.75||e<t.minZ+.75||e>t.maxZ-.75:Math.abs(i)>ze.size.x/2-.75||Math.abs(e)>ze.size.z/2-.75)||Ni.blocked(i,e))return!0;if(ze.id==="cafe_inside")return e<-2.45&&Math.abs(i)<4.4||e<-7;if(uo(ze.id))return Cn.some(n=>Math.abs(i-n.x)<n.w/2+.35&&Math.abs(e-n.z)<n.d/2+.35);for(const n of ze.buildings){const s=Ui.get(n.id);if(s){if(i>s.min.x-.22&&i<s.max.x+.22&&e>s.min.y-.22&&e<s.max.y+.22)return!0}else if(Math.abs(i-n.x)<n.w/2+.28&&Math.abs(e-n.z)<n.d/2+.28)return!0}if(ze.id==="qingchuan"&&lo&&Math.hypot(i-Vs.x,e-Vs.z)<.78||ze.id==="qingchuan"&&Lu.has("cafe-lamp")&&Math.hypot(i+6.6,e-17)<.38)return!0;if(ze.id==="qingchuan"){const s=[[-17.5,16.3,.89,.63],[-10.5,16.3,.89,.63],[-18.9,15.8,.49,.36],[-9.1,15.8,.49,.36],[-12.35,16.6,.47,.4]];for(const[r,o,a,l]of s)if(Math.abs(i-r)<a+.28&&Math.abs(e-o)<l+.28)return!0}return!1}function Rp(i){if(ze.id!=="qingchuan"||!i.id)return;const e=tp(i.id,Rt.hour,Rt.weather==="rain");!e||e.key===i.routineKey||(i.routineKey=e.key,i.routineStops=e.stops,i.route=e.stops.map(t=>pa(t.x,t.z,Un)),i.routeIndex=i.route.reduce((t,n,s)=>Math.hypot(n.x-i.x,n.z-i.z)<Math.hypot(i.route[t].x-i.x,i.route[t].z-i.z)?s:t,0),i.path=void 0,i.pathGoal=void 0,i.stuckTime=0,i.waitUntil=dn+.5,i.activity=`准备${e.stops[i.routeIndex].activity}`)}function yo(){me.dialogue.classList.add("hidden"),me.dialogueChoices.replaceChildren(),Qi&&(Qi.waitUntil=Math.max(Qi.waitUntil??0,dn+1)),Qi=void 0}function MS(i){const e=(t,n)=>{const s=document.createElement("button");s.type="button",s.textContent=t,s.addEventListener("click",r=>{r.stopPropagation(),n()}),me.dialogueChoices.append(s)};e("我接下来可以做什么？",()=>{me.dialogueText.textContent=Tu(xe.progress).text}),i.id==="barista"&&!xe.progress.welcomeSeeds&&e("领取新邻居花种 · 2 粒",()=>{xe.progress.welcomeSeeds||(xe.seeds+=2,gi({type:"welcome-seeds"}),La(i.name,"这是给新邻居的两粒花种。去西边社区花园种下吧，等花开时回来告诉我。"),Hn())}),i.id==="volunteer"&&xe.progress.completed.includes("street-story-2")&&!xe.progress.delivered&&e(xe.flowers>0?"送出一朵鲜花":"还没有鲜花 · 查看种植办法",()=>{if(xe.flowers<1){me.dialogueText.textContent="到西侧社区花园播种，约 30 秒后收获。需要花种时可以去便利店买。给聚会留一朵，回来和我聊聊吧。";return}xe.progress.delivered||(xe.flowers--,gi({type:"deliver"}),bp(),La(i.name,"这朵花真好看，谢谢你！我把它摆在聚会桌上。请去白鸟咖啡告诉小许，桌面已经准备好了。"),Hn())}),e("先聊到这里",yo)}function SS(i){if(i.district===ze.id){const t=i.npcId&&Yt.find(n=>n.id===i.npcId);return t?{...i,x:t.x,z:t.z}:i}if(ze.id==="qingchuan"){const t=i.district==="apartment_unit"?"apartment_lobby":i.district,n=ze.buildings.find(s=>s.enter===t);if(n)return{district:ze.id,x:n.x,z:n.z+n.d/2+1.6,label:n.name}}if(ze.id==="apartment_lobby"&&i.district==="apartment_unit")return{district:ze.id,x:4.9,z:-4.55,label:"前往房间的电梯"};const e=at.find(t=>t.action==="exit");return e?{district:ze.id,x:e.x,z:e.z,label:e.name}:i}function wS(){const i=Tu(xe.progress);if(document.querySelector(".chapter").textContent=i.complete?"晴川 · 在这里住下来":`街区故事 ${i.chapterIndex+1} · ${i.chapter.title}`,!i.step||!oe){me.guide.textContent="故事已完成，打开手账回看旅程";return}const e=SS(i.step.target),t=e.x-oe.x,n=e.z-oe.z,r=["↑","↗","→","↘","↓","↙","←","↖"][(Math.round(Math.atan2(t,-n)/(Math.PI/4))+8)%8];me.guide.textContent=`${r} ${e.label} · ${Math.hypot(t,n)<2?"就在附近，按 E 互动":`约 ${Math.round(Math.hypot(t,n))} 步行单位`}`}function Cp(){const i=JSON.stringify([xe.progress,Yt.filter(t=>t.id).map(t=>[t.id,t.activity]),Math.floor(Rt.hour),Rt.weather,ze.id]);if(i===Nd)return;Nd=i,me.journalContent.replaceChildren();const e=(t,n)=>{const s=document.createElement("h3");s.textContent=t;const r=document.createElement("p");r.textContent=n,me.journalContent.append(s,r)};for(const t of Ys){const n=xe.progress.completed.includes(t.id);e(`${n?"✓ ":""}${t.title}`,`完成奖励：${t.reward.coins} 金币、${t.reward.seeds} 粒花种${n?"（已领取）":""}`);for(const s of t.steps){const r=document.createElement("p");r.className=s.done(xe.progress)?"journal-done":"",r.textContent=`${s.done(xe.progress)?"✓":"○"} ${s.title} · ${s.detail}`,me.journalContent.append(r)}}e("认识的邻居",`${xe.progress.talkedNpcIds.length}/14 位 · 时钟和天气会改变室外居民的去处；室内工作人员随时可拜访。`);for(const[t,n]of Object.entries(gM)){const s=Object.values(us).flatMap(l=>l.npcs).find(l=>l.id===t),r=Yt.find(l=>l.id===t),o=tp(t,Rt.hour,Rt.weather==="rain"),a=document.createElement("p");a.textContent=`${xe.progress.talkedNpcIds.includes(t)?"✓":"○"} ${s.name} · ${n} · ${r?.activity??o?.label??Ba[t]?.activity}`,me.journalContent.append(a)}}function ho(i=me.journal.classList.contains("hidden")){me.journal.classList.toggle("hidden",!i),Bt.clear(),Mo(),i?(yo(),rr(),Cp(),document.querySelector("#close-journal").focus()):Ha()}function La(i,e){me.dialogueChoices.replaceChildren(),me.dialogueName.textContent=i,me.dialogueText.textContent=e,me.dialogue.classList.remove("hidden"),me.interaction.classList.remove("show"),Bt.clear()}function gi(i,e="街区委托完成！"){const t=cM(xe.progress,i);for(const n of t.rewards)xe.coins+=n.coins,xe.seeds+=n.seeds;return t.completedNow&&jn(`${e} 获得 ${t.rewards.reduce((n,s)=>n+s.coins,0)} 金币与花种。`),xo(xe),t}function Hn(){me.inventory.innerHTML=`<span class="coin">● ${xe.coins} 金币</span><span>✦ 花种 ×${xe.seeds}</span><span>✿ 鲜花 ×${xe.flowers}</span>`;const i=xe.plantedAt.some(o=>Ks(o)===3),e=xe.plantedAt.filter(o=>Ks(o)===1||Ks(o)===2),t=xe.flowers>0?"带鲜花去便利店出售":i?"花开了！回花圃收获":e.length?`花苗生长中 · 约 ${Math.min(...e.map(o=>bu(o)))} 秒`:xe.seeds>0?xe.sold>0?"第一笔生意完成 · 再种一朵":"前往街区西侧花圃播种":"前往便利店购买花种",n=Tu(xe.progress),s=n.complete?t:n.text,r=n.complete?"晴川故事已完成 · 手账 J":`${n.chapter.title} · ${n.index+1}/${n.chapter.steps.length} · 手账 J`;me.goal.innerHTML=`<small>${r}</small><strong>${s}</strong>`,wS(),me.journal.classList.contains("hidden")||Cp(),me.shopStock.textContent=`钱包 ${xe.coins} 金币  ·  花种 ${xe.seeds} 粒  ·  鲜花 ${xe.flowers} 朵`,me.buySeed.disabled=xe.coins<kl,me.sellFlower.disabled=xe.flowers<1}function jn(i){me.toast.textContent=i,me.toast.classList.add("show"),xa=2.7}function ES(){Bt.clear(),Hn(),me.shop.classList.remove("hidden"),me.interaction.classList.remove("show"),me.buySeed.focus({preventScroll:!0})}function rr(){me.shop.classList.add("hidden"),Ha()}function TS(i){const e=xe.plantedAt[i],t=Ks(e);if(t===0){if(xe.seeds<1){jn("花种用完了，去便利店购买。");return}xe.seeds--,xe.plantedAt[i]=Date.now(),gi({type:"plant"}),jn("花种种好了。等花开后回来收获！")}else if(t===3)xe.flowers++,xe.plantedAt[i]=0,gi({type:"harvest"}),jn("收获了一朵鲜花，去便利店出售吧。");else{jn(`花苗正在生长，还需约 ${bu(e)} 秒。`);return}xo(xe),Nu(i),Hn()}function Fu(){if(!me.shop.classList.contains("hidden")){rr();return}if(me.journal.classList.contains("hidden")){if(!me.dialogue.classList.contains("hidden")){yo();return}if(ct){if(ct.action==="plot"&&ct.plotIndex!==void 0){TS(ct.plotIndex);return}if(ct.action==="shop"){ES();return}if(ct.action==="rest"){Rt.rest();const i=gi({type:"rest"},"晴川故事完成！");mr(),fi(),i.completedNow||jn("一夜好眠。新的一天开始了。"),Hn();return}if(ct.action==="exit"){const i=Xr.pop();i&&(fi(),Jl(i.id,i.spawn));return}if(ct.enter){fi(),uo(ct.enter)?Xr.push({id:ze.id,spawn:uo(ze.id)?{x:ct.x,z:ct.z+1.25}:{x:ct.x,z:ct.z+.85}}):Xr.length=0,Jl(ct.enter,ct.targetSpawn),fi();return}if(ct.actor){const i=ct.actor;i.waitUntil=Math.max(i.waitUntil??0,dn+4);const e=_M(i.id??"",xe.progress,Rt.hour,Rt.weather==="rain",i.activity)||ct.line;gi({type:"talk",npcId:i.id}),Qi=i,La(i.name??ct.name,e),MS(i)}else ct.inspectId&&gi({type:"inspect",id:ct.inspectId}),La(ct.name,ct.line);Hn()}}}function mr(){Yl=Rt.night,Lt.sync(Rt,uo(ze.id),Ht),Dt.toneMappingExposure=kt.lerp(1.2,1.16,Rt.daylight);for(const t of Yt)t.shadow.material instanceof Gt&&(t.shadow.material.opacity=kt.lerp(.44,.68,Rt.daylight));const i=Rt.label;me.time.textContent!==i&&(me.time.textContent=i);const e=`${Yl?"☾ ":""}${Lt.label}`;me.weather.textContent!==e&&(me.weather.textContent=e),me.weather.title=`${Rt.forecast}；M 手动切换后仍继续自动演变`}function Ip(){Rt.skipPhase(),mr(),fi(),jn(`时间已推进到${Rt.label}`)}function Pp(){Rt.cycleWeather(),mr(),fi(),jn(`天气逐渐转为${Lt.label.slice(2)}，之后继续自动演变`)}function bS(i,e=i){if(document.hidden)return;dn+=i,Rt.advance(e),mr();for(const I of vo){if(I.stage<=0)continue;const ie=Math.sin(dn*(.9+I.stage*.08)+I.phase)*.018;I.plant.rotation.z=ie,I.plant.rotation.x=Math.cos(dn*.63+I.phase)*.008}if(zc+=i,zc>=1&&(zc=0,fi()),xa>0&&(xa-=i,xa<=0&&me.toast.classList.remove("show")),Oc+=i,Oc>=.5){if(Oc=0,ze.id==="qingchuan")for(let I=0;I<Hl;I++)Nu(I);Hn()}if(Fc+=i,Fc>=1){Fc=0;for(const I of Yt)I!==oe&&I!==Qi&&Rp(I)}const t=!Ht&&me.journal.classList.contains("hidden")&&me.dialogue.classList.contains("hidden")&&me.shop.classList.contains("hidden");let n=0,s=0;t&&((Bt.has("KeyW")||Bt.has("ArrowUp"))&&(s-=1),(Bt.has("KeyS")||Bt.has("ArrowDown"))&&(s+=1),(Bt.has("KeyA")||Bt.has("ArrowLeft"))&&(n-=1),(Bt.has("KeyD")||Bt.has("ArrowRight"))&&(n+=1),n+=or.x,s+=or.z);const r=n,o=s,a=new b(1,0,0).applyQuaternion(Tt.quaternion).setY(0).normalize(),l=new b(0,1,0).applyQuaternion(Tt.quaternion).setY(0).normalize();n=a.x*r-l.x*o,s=a.z*r-l.z*o;const c=Math.hypot(n,s);c>1&&(n/=c,s/=c);const u=Bt.has("ShiftLeft")||Bt.has("ShiftRight"),h=u?4.5:2.6,d=n*h,f=s*h,g=c>0?26:34;oe.velocityX=Vd(oe.velocityX,d,g,i),oe.velocityZ=Vd(oe.velocityZ,f,g,i),c===0&&Math.abs(oe.velocityX)<.025&&(oe.velocityX=0),c===0&&Math.abs(oe.velocityZ)<.025&&(oe.velocityZ=0);const _=oe.x,p=oe.z,m=Hd(oe,oe.velocityX*i,oe.velocityZ*i),v=m/Math.max(i,1e-4),y=m>12e-5&&v>.035,x=oe.walking;oe.walking=y;const T=y?oe.x-_:n,A=y?oe.z-p:s;Math.hypot(T,A)>1e-4&&(oe.direction=Od(T,A)),Math.hypot(T,A)>1e-4&&(oe.headingYaw=Math.atan2(-A,T)),y&&(oe.walkDistance+=m),oe.animClock=x!==y?0:oe.animClock+i;const C=[3,4,5,4],P=C[Math.floor(oe.animClock/.24)%C.length],S=u?2.6:1.8,w=oe.direction==="east"?S*1.18:S,L=Gs?y?Gs.walkFrame(oe.direction,oe.walkDistance,w):Gs.idleFrame(oe.direction,oe.animClock):y?Math.floor(oe.walkDistance/(u?.3:.42))%co:P,O=oe.walkDistance/(u?.3:.42)*Math.PI,H=y?Math.max(0,Math.sin(O)):0;oe.sprite.position.y=oe.baseY+(Gs?0:H*.022),oe.shadow.scale.x=(oe.model?.72:.78)+H*.035,oe.shadow.scale.y=(oe.model?.28:.34)-H*.014,$l(oe,zd(oe.direction),L,oe.direction),Fd(oe,y,c>0,i,u,v),kd(oe);for(const I of Yt)if(I!==oe){I.animClock+=i;let ie=0;const fe=!me.dialogue.classList.contains("hidden")&&Qi===I;if(I.route&&I.route.length>1&&!fe&&dn>=(I.waitUntil??0)){const Je=I.routeIndex??0,ht=I.route[Je];if(Math.hypot(ht.x-I.x,ht.z-I.z)<.18)I.activity=I.routineStops?.[Je]?.activity??"在街边歇脚",I.routeIndex=(Je+1)%I.route.length,I.path=void 0,I.pathGoal=void 0,I.waitUntil=dn+(I.routineStops?.[Je]?.wait??6);else{I.activity=`正在赶路 · ${I.routineStops?.[Je]?.activity??"下一处街角"}`,(I.pathGoal!==Je||!I.path)&&(I.path=Au({x:I.x,z:I.z},ht,ze.size,Un),I.pathGoal=Je);const je=I.path[0];if(je){const K=je.x-I.x,J=je.z-I.z,ge=Math.hypot(K,J);if(ge<.1)I.path.shift();else{const Ne=I.x,Te=I.z,Ke=Math.min(ge,(I.pace??.75)*i);ie=Hd(I,K/ge*Ke,J/ge*Ke),ie>1e-4&&(I.direction=Od(I.x-Ne,I.z-Te),I.headingYaw=Math.atan2(-(I.z-Te),I.x-Ne))}}I.stuckTime=ie>1e-4?0:(I.stuckTime??0)+i,I.stuckTime>2&&(I.path=void 0,I.pathGoal=void 0,I.stuckTime=0,I.routeIndex=(Je+1)%I.route.length,I.waitUntil=dn+.5)}}I.walking=ie>1e-4,I.walking&&(I.walkDistance+=ie),I.sprite.position.y=I.baseY;const Ae=I.drawn?.direction(I.direction),qe=I.drawn?I.walking?I.drawn.walkFrame(Ae,I.walkDistance,.88):I.drawn.idleFrame(Ae,I.animClock):I.walking?[0,1,0,2][Math.floor(I.walkDistance/.22)%4]:0;$l(I,zd(I.direction),qe),Fd(I,I.walking,I.walking,i,!1,ie/Math.max(i,1e-4)),kd(I)}for(const I of at)I.actor&&(I.x=I.actor.x,I.z=I.actor.z);for(const I of Yt)I.sprite.renderOrder=2,I.sprite.material.depthTest=!0,I.shadow.renderOrder=1;Lt.update(i,Tt,oe),NM(rn,ze.id==="qingchuan"?GM:WM),Du?.update(i,Lt.rainAmount,Lt.wetness,Lt.lightLevel),ct=null;let X=1/0;for(const I of at){const ie=Math.hypot(oe.x-I.x,oe.z-I.z);ie<I.range&&ie<X&&(ct=I,X=ie)}ct&&t?(me.interaction.innerHTML='<span class="key">E</span><span>'+ct.name+"</span><small>"+(ct.actor?.activity??"互动")+"</small>",me.interaction.classList.add("show")):me.interaction.classList.remove("show");const G=Ht?40:oe.x,q=Ht?-11:Ap(oe.z,ze.id),Z=1-Math.exp(-i*9);Yn.x+=(G-Yn.x)*Z,Yn.z+=(q-Yn.z)*Z,Tt.position.copy(Yn).add(Ht?cp:Oi),Tt.lookAt(Yn),hn&&(oe.shadow.getWorldPosition(Wr),hn.update(dn,Wr,Yn,Ht,Lt.wind,Lt.lightLevel,An.fog instanceof mo?An.fog:null)),Tp(),aS(),Dt.render(An,Tt)}function Ou(){const{width:i,height:e}=ap(),t=e<680?12.4:13.6,n=i/e;Tt.aspect=n,Tt.near=Ht?10:1;const s=Ht?Math.max(119,178/n):t;Tt.fov=kt.radToDeg(2*Math.atan(s/(2*(Ht?cp.length():Oi.length())))),Tt.updateProjectionMatrix(),Dt.setSize(i,e)}window.addEventListener("resize",Ou);Ou();const Lp=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","KeyE","KeyN","KeyM","KeyV","KeyJ","Space","Escape"]);function Ha(){me.scene.focus({preventScroll:!0})}window.addEventListener("keydown",i=>{if(Lp.has(i.code)){if(i.preventDefault(),i.stopPropagation(),i.code==="KeyJ"){i.repeat||ho();return}if(i.code==="Escape"){if(!me.journal.classList.contains("hidden")){ho(!1);return}if(Ht){Pa(!1);return}me.shop.classList.contains("hidden")?yo():rr();return}if(me.journal.classList.contains("hidden")){if(!me.shop.classList.contains("hidden")){(i.code==="KeyE"||i.code==="Space")&&rr();return}if(i.code==="KeyV"){i.repeat||Pa(!Ht);return}Ht||i.repeat&&["KeyE","KeyN","KeyM","Space"].includes(i.code)||(i.code==="KeyE"||i.code==="Space"?Fu():i.code==="KeyN"?Ip():i.code==="KeyM"?Pp():Bt.add(i.code))}}},!0);window.addEventListener("keyup",i=>{Lp.has(i.code)&&(i.preventDefault(),i.stopPropagation(),Bt.delete(i.code))},!0);window.addEventListener("blur",()=>Bt.clear());document.addEventListener("visibilitychange",()=>{Bt.clear(),Gl.getDelta(),document.hidden&&fi()});window.addEventListener("pagehide",fi);me.scene.addEventListener("pointerdown",Ha);me.scene.addEventListener("contextmenu",i=>i.preventDefault());me.dialogue.addEventListener("click",Fu);const or={x:0,z:0},ar=document.querySelector("#mobile-joystick"),Dp=ar.querySelector(".joystick-thumb");let fo=null;function Np(i,e){const t=ar.getBoundingClientRect(),n=Math.min(t.width,t.height)*.32,s=i-(t.left+t.width/2),r=e-(t.top+t.height/2),o=Ad()?r:s,a=Ad()?-s:r,l=Math.hypot(o,a),c=l>n?n/l:1,u=o*c/n,h=a*c/n;Dp.style.transform=`translate(${u*n}px, ${h*n}px)`;const d=Math.hypot(u,h);or.x=d<.16?0:u,or.z=d<.16?0:h}function Mo(){fo=null,or.x=or.z=0,Dp.style.transform="translate(0, 0)"}ar.addEventListener("pointerdown",i=>{fo===null&&(i.preventDefault(),fo=i.pointerId,ar.setPointerCapture(i.pointerId),Np(i.clientX,i.clientY))});ar.addEventListener("pointermove",i=>{fo===i.pointerId&&Np(i.clientX,i.clientY)});for(const i of["pointerup","pointercancel","lostpointercapture"])ar.addEventListener(i,e=>{fo===e.pointerId&&Mo()});window.addEventListener("blur",Mo);window.addEventListener("resize",Mo);document.querySelector("#mobile-night").addEventListener("click",()=>{Ip()});document.querySelector("#overview-toggle").addEventListener("click",()=>Pa(!Ht));document.querySelector("#mobile-weather").addEventListener("click",Pp);document.querySelector("#journal-toggle").addEventListener("click",()=>ho());document.querySelector("#close-journal").addEventListener("click",()=>ho(!1));me.journal.addEventListener("click",i=>{i.target===me.journal&&ho(!1)});UM();document.querySelector("#mobile-action").addEventListener("click",Fu);document.querySelector("#close-shop").addEventListener("click",rr);me.shop.addEventListener("pointerdown",i=>{i.target===me.shop&&rr()});me.buySeed.addEventListener("click",()=>{xe.coins<kl||(xe.coins-=kl,xe.seeds++,xo(xe),Hn(),jn("买到一粒花种。"))});me.sellFlower.addEventListener("click",()=>{if(xe.flowers<1)return;xe.flowers--,xe.coins+=Ed,xe.sold++;const i=gi({type:"sell"});xo(xe),Hn(),i.completedNow||jn(`鲜花卖出了，获得 ${Ed} 金币。`)});function Ri(i){return new Promise((e,t)=>{const n=new Image;n.onload=()=>e(n),n.onerror=()=>t(new Error(`无法加载 ${i}`)),n.src=`./assets/${i}`})}function Kd(){let i=document.querySelector("#character-load-notice");if(!Ra.size){i?.remove();return}i||(i=document.createElement("div"),i.id="character-load-notice",i.setAttribute("role","status"),document.querySelector("#app").append(i)),i.textContent=[...Ra.values()].join(" ")}async function AS(){try{let i=function(p,m=1){const v=a.get(p);if(!v)throw new Error(`Unknown loading task: ${p}`);v.fraction=Math.max(v.fraction,Math.min(1,Math.max(0,m)));const y=[...a.values()].reduce((T,A)=>T+A.weight*A.fraction,0),x=Math.floor(100*y/c);u.setAttribute("aria-valuenow",String(x)),h.style.width=`${x}%`,d.textContent=`${x}%`},e=function(){requestAnimationFrame(e);const p=Gl.getDelta();bS(Math.min(p,.05),Math.min(p,1))};const t=matchMedia("(pointer:coarse), (max-width:600px), (max-width:900px) and (max-height:600px)").matches,n=["mika","chen","yuan","barista"],s=["asphalt","sidewalk","grass","brick"],r=["paving","asphalt","soil","turf","terracotta"],o=t?["cafe-building","cafe-tree-pit","cafe-table","cafe-menu","cafe-lamp","cafe-planter","community-tree"]:["statue","cafe-building","cafe-tree-pit","cafe-table","cafe-menu","cafe-lamp","cafe-planter","community-tree"],a=new Map,l=us.qingchuan.buildings.filter(p=>p.id.startsWith("north_")).map(p=>p.id);o.push(...l);for(const p of n)a.set(`character:${p}`,{weight:1,fraction:0});for(const p of s)a.set(`surface:${p}`,{weight:1,fraction:0}),p!=="brick"&&a.set(`normal:${p}`,{weight:1,fraction:0});for(const p of r)a.set(`terrain:${p}`,{weight:1,fraction:0});for(const p of["cafe-props","provided-strip","npc-index","street-props","scene"])a.set(p,{weight:1,fraction:0});for(const p of o)a.set(`model:${p}`,{weight:1,fraction:0});a.set("drawn-protagonist",{weight:17,fraction:0});const c=[...a.values()].reduce((p,m)=>p+m.weight,0),u=document.querySelector("#loading-progress"),h=document.querySelector("#loading-progress-fill"),d=document.querySelector("#loading-percent"),f=document.querySelector("#loading-message");async function g(p,m){try{return await new T1().loadAsync(`./assets/${m}`,v=>{v.lengthComputable&&v.total>0&&i(`model:${p}`,Math.min(.95,v.loaded/v.total*.95))})}finally{i(`model:${p}`)}}f.textContent="正在加载基础贴图…",await Promise.all([...n.map(async p=>{Ru.set(p,await Ri(`characters/${p}.webp`)),i(`character:${p}`)}),...s.map(async p=>{const m=p==="brick"?"cafe-brick":`${p}-ground`,v=new pt(await Ri(`surfaces/${m}.webp`));if(i(`surface:${p}`),v.colorSpace=ut,v.wrapS=v.wrapT=Fn,v.magFilter=p==="brick"?bt:It,v.minFilter=pn,v.anisotropy=Math.min(8,Dt.capabilities.getMaxAnisotropy()),v.needsUpdate=!0,Gr.set(p,v),p!=="brick"){const y=new pt(await Ri(`surfaces/${p}-normal.webp`));i(`normal:${p}`),y.wrapS=y.wrapT=Fn,y.magFilter=It,y.minFilter=pn,y.anisotropy=v.anisotropy,y.needsUpdate=!0,Cu.set(p,y)}}),...fM.map(async p=>{const m=new pt(await Ri(`surfaces/models-v1/${p}.webp`));m.colorSpace=ut,m.wrapS=m.wrapT=Fn,m.anisotropy=Math.min(8,Dt.capabilities.getMaxAnisotropy()),m.needsUpdate=!0,Gr.set(`model-${p}`,m)}),...r.map(async p=>{const m=new pt(await Ri(p==="turf"?"surfaces/terrain-v2-turf.webp":`surfaces/terrain-v1/${p}.webp`));m.colorSpace=ut,m.wrapS=m.wrapT=Fn,m.magFilter=It,m.minFilter=pn,m.anisotropy=Math.min(8,Dt.capabilities.getMaxAnisotropy()),m.needsUpdate=!0,Gr.set(`terrain-${p}`,m),i(`terrain:${p}`)}),(async()=>{_a=await Ri("props/cafe-props.webp"),i("cafe-props")})(),(async()=>{Hs=await Ri("characters/protagonist-4dir-16frame.webp"),mp(),i("provided-strip")})()]),f.textContent="正在加载角色与街区模型，首次打开请稍候…",await Promise.all([(async()=>{await Promise.all(l.map(async p=>{try{Pu.set(p,(await g(p,`environment/${p}.glb`)).scene)}catch(m){console.warn(`北街建筑 ${p} 加载失败，保留程序建筑。`,m)}}))})(),(async()=>{if(!t)try{const p=await g("statue","characters/protagonist.glb");ts={scene:p.scene,animations:p.animations}}catch{ts=null}})(),(async()=>{try{Xl=(await g("cafe-building","environment/cafe-building.glb")).scene}catch(p){console.warn("白鸟咖啡馆候选模型未能加载，使用程序建筑。",p),Xl=null}})(),(async()=>{try{lo=(await g("cafe-tree-pit","environment/cafe-tree-pit.glb")).scene}catch(p){console.warn("街角树池模型未能加载，使用原有街树。",p),lo=null}})(),(async()=>{await Promise.all(["cafe-table","cafe-menu","cafe-lamp","cafe-planter"].map(async p=>{try{const m=await g(p,`environment/${p}.glb`);m.scene.traverse(v=>{if(!(v instanceof Ee))return;const y=Array.isArray(v.material)?v.material:[v.material];for(const x of y)if(x instanceof jt)for(const T of[x.map,x.roughnessMap,x.metalnessMap])T&&(T.anisotropy=Math.min(8,Dt.capabilities.getMaxAnisotropy()))}),Lu.set(p,m.scene)}catch(m){console.warn(`街角素材 ${p} 未能加载，使用原有素材。`,m)}}))})(),(async()=>{try{ns=(await g("community-tree","environment/community-tree.glb")).scene}catch(p){console.warn("新版树模型未能加载，使用程序树。",p),ns=null}})(),(async()=>{try{Gs=await ep("./assets/characters/drawn/protagonist/character.json",void 0,(p,m)=>i("drawn-protagonist",p/m))}catch(p){throw console.error("新版主角动画未下载完整，请重试。",p),p}finally{i("drawn-protagonist")}})(),(async()=>{try{Ca=await Vl("./assets/characters/drawn/npcs.json",p=>p.json())}catch(p){throw new Error("新版居民素材索引未下载完整，请刷新重试。",{cause:p})}finally{i("npc-index")}})(),(async()=>{try{const p=await fetch("./assets/props/street-renewal/catalog.json");if(p.ok){const m=await p.json();await Promise.all(Object.entries(m).map(async([v,y])=>{if(!["garden-bed","garden-sprouts","garden-buds","garden-flowers"].includes(v))try{Iu.set(v,await Ri(`props/street-renewal/${y}`))}catch(x){console.warn(`街区素材 ${v} 未能加载，保留已有画面。`,x)}}))}}catch(p){console.warn("街区素材索引暂不可用，保留已有画面。",p)}finally{i("street-props")}})()]),f.textContent="正在布置街区…";const _=xe.location;Xr.push(..._?.returnStack??[]),Jl(_?.districtId??"qingchuan",_?{x:_.x,z:_.z}:void 0),mr(),Gl.getDelta(),Hn(),i("scene"),me.loading.classList.add("hidden"),Ha(),e()}catch(i){console.error(i),me.loading.innerHTML='<span>资源加载未完成</span><small>请检查网络后刷新；较慢网络可稍后重试。</small><button type="button" onclick="location.reload()">重新加载</button>'}}AS();
