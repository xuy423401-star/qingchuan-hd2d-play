(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Nl="180",lp=0,Tu=1,up=2,Ad=1,Rd=2,si=3,ui=0,sn=1,Ht=2,Ti=0,Ns=1,bu=2,Au=3,Ru=4,hp=5,Vi=100,dp=101,fp=102,pp=103,mp=104,gp=200,_p=201,xp=202,vp=203,Ac=204,Rc=205,yp=206,Mp=207,Sp=208,wp=209,Ep=210,Tp=211,bp=212,Ap=213,Rp=214,Cc=0,Ic=1,Pc=2,zs=3,Lc=4,Dc=5,Nc=6,Uc=7,Cd=0,Cp=1,Ip=2,bi=0,Pp=1,Lp=2,Dp=3,Id=4,Np=5,Up=6,Fp=7,Cu="attached",Op="detached",Pd=300,ks=301,Hs=302,Fc=303,Oc=304,_a=306,Dn=1e3,wi=1001,na=1002,bt=1003,Ld=1004,Mr=1005,Ct=1006,Yo=1007,dn=1008,Yn=1009,Dd=1010,Nd=1011,Ur=1012,Ul=1013,Ki=1014,Nn=1015,to=1016,Fl=1017,Ol=1018,Fr=1020,Ud=35902,Fd=35899,Od=1021,Bd=1022,wn=1023,Or=1026,Br=1027,Bl=1028,zl=1029,zd=1030,kl=1031,Hl=1033,Ko=33776,$o=33777,Zo=33778,Jo=33779,Bc=35840,zc=35841,kc=35842,Hc=35843,Vc=36196,Gc=37492,Wc=37496,Xc=37808,qc=37809,Yc=37810,Kc=37811,$c=37812,Zc=37813,Jc=37814,jc=37815,Qc=37816,el=37817,tl=37818,nl=37819,il=37820,sl=37821,rl=36492,ol=36494,al=36495,cl=36283,ll=36284,ul=36285,hl=36286,Bp=2200,zp=2201,kp=2202,zr=2300,kr=2301,Ra=2302,bs=2400,As=2401,ia=2402,Vl=2500,Hp=2501,Vp=0,kd=1,dl=2,Gp=3200,Wp=3201,Hd=0,Xp=1,Si="",at="srgb",Qt="srgb-linear",sa="linear",dt="srgb",ts=7680,Iu=519,qp=512,Yp=513,Kp=514,Vd=515,$p=516,Zp=517,Jp=518,jp=519,fl=35044,Pu="300 es",Wn=2e3,ra=2001;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lu=1234567;const Tr=Math.PI/180,Vs=180/Math.PI;function En(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function Gl(i,e){return(i%e+e)%e}function Qp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function em(i,e,t){return i!==e?(t-i)/(e-i):0}function br(i,e,t){return(1-t)*i+t*e}function tm(i,e,t,n){return br(i,e,1-Math.exp(-t*n))}function nm(i,e=1){return e-Math.abs(Gl(i,e*2)-e)}function im(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function sm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function om(i,e){return i+Math.random()*(e-i)}function am(i){return i*(.5-Math.random())}function cm(i){i!==void 0&&(Lu=i);let e=Lu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lm(i){return i*Tr}function um(i){return i*Vs}function hm(i){return(i&i-1)===0&&i!==0}function dm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pm(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ot={DEG2RAD:Tr,RAD2DEG:Vs,generateUUID:En,clamp:Ye,euclideanModulo:Gl,mapLinear:Qp,inverseLerp:em,lerp:br,damp:tm,pingpong:nm,smoothstep:im,smootherstep:sm,randInt:rm,randFloat:om,randFloatSpread:am,seededRandom:cm,degToRad:lm,radToDeg:um,isPowerOfTwo:hm,ceilPowerOfTwo:dm,floorPowerOfTwo:fm,setQuaternionFromProperEuler:pm,normalize:ot,denormalize:Ln};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Un{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*_,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const T=Math.sqrt(v),b=Math.atan2(T,p*M);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}const x=a*M;if(c=c*m+d*x,l=l*m+f*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const T=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=T,l*=T,u*=T,h*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Du.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ca.copy(this).projectOnVector(e),this.sub(Ca)}reflect(e){return this.sub(Ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new A,Du=new Un;class Ve{constructor(e,t,n,s,r,o,a,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],v=s[4],x=s[7],T=s[2],b=s[5],C=s[8];return r[0]=o*_+a*M+c*T,r[3]=o*m+a*v+c*b,r[6]=o*p+a*x+c*C,r[1]=l*_+u*M+h*T,r[4]=l*m+u*v+h*b,r[7]=l*p+u*x+h*C,r[2]=d*_+f*M+g*T,r[5]=d*m+f*v+g*b,r[8]=d*p+f*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ia=new Ve;function Gd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mm(){const i=Hr("canvas");return i.style.display="block",i}const Nu={};function Vr(i){i in Nu||(Nu[i]=!0,console.warn(i))}function gm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Uu=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fu=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _m(){const i={enabled:!0,workingColorSpace:Qt,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dt&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(s.r=Us(s.r),s.g=Us(s.g),s.b=Us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Si?sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qt]:{primaries:e,whitePoint:n,transfer:sa,toXYZ:Uu,fromXYZ:Fu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:at},outputColorSpaceConfig:{drawingBufferColorSpace:at}},[at]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:Uu,fromXYZ:Fu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:at}}}),i}const Qe=_m();function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ns;class xm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ns===void 0&&(ns=Hr("canvas")),ns.width=e.width,ns.height=e.height;const s=ns.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ns}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vm=0;class Wl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=En(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pa(s[o].image)):r.push(Pa(s[o]))}else r=Pa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ym=0;const La=new A;class ft extends ji{constructor(e=ft.DEFAULT_IMAGE,t=ft.DEFAULT_MAPPING,n=wi,s=wi,r=Ct,o=dn,a=wn,c=Yn,l=ft.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=En(),this.name="",this.source=new Wl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(La).x}get height(){return this.source.getSize(La).y}get depth(){return this.source.getSize(La).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dn:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dn:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ft.DEFAULT_IMAGE=null;ft.DEFAULT_MAPPING=Pd;ft.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,s=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,x=(f+1)/2,T=(p+1)/2,b=(u+d)/4,C=(h+_)/4,D=(g+m)/4;return v>x&&v>T?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=b/n,r=C/n):x>T?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=D/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=D/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mm extends ji{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new ft(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Wl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends Mm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wd extends ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sm extends ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Et{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lo.copy(n.boundingBox)),lo.applyMatrix4(e.matrixWorld),this.union(lo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),uo.subVectors(this.max,lr),is.subVectors(e.a,lr),ss.subVectors(e.b,lr),rs.subVectors(e.c,lr),di.subVectors(ss,is),fi.subVectors(rs,ss),Pi.subVectors(is,rs);let t=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Pi.z,Pi.y,di.z,0,-di.x,fi.z,0,-fi.x,Pi.z,0,-Pi.x,-di.y,di.x,0,-fi.y,fi.x,0,-Pi.y,Pi.x,0];return!Da(t,is,ss,rs,uo)||(t=[1,0,0,0,1,0,0,0,1],!Da(t,is,ss,rs,uo))?!1:(ho.crossVectors(di,fi),t=[ho.x,ho.y,ho.z],Da(t,is,ss,rs,uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const jn=[new A,new A,new A,new A,new A,new A,new A,new A],Rn=new A,lo=new Et,is=new A,ss=new A,rs=new A,di=new A,fi=new A,Pi=new A,lr=new A,uo=new A,ho=new A,Li=new A;function Da(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Li.fromArray(i,r);const a=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),c=e.dot(Li),l=t.dot(Li),u=n.dot(Li);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const wm=new Et,ur=new A,Na=new A;class Bn{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);const t=ur.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ur,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(Na)),this.expandByPoint(ur.copy(e.center).sub(Na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Qn=new A,Ua=new A,fo=new A,pi=new A,Fa=new A,po=new A,Oa=new A;class Qs{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ua.copy(e).add(t).multiplyScalar(.5),fo.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(Ua);const r=e.distanceTo(t)*.5,o=-this.direction.dot(fo),a=pi.dot(this.direction),c=-pi.dot(fo),l=pi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ua).addScaledVector(fo,d),f}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,s,r){Fa.subVectors(t,e),po.subVectors(n,e),Oa.crossVectors(Fa,po);let o=this.direction.dot(Oa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,e);const c=a*this.direction.dot(po.crossVectors(pi,po));if(c<0)return null;const l=a*this.direction.dot(Fa.cross(pi));if(l<0||c+l>o)return null;const u=-a*pi.dot(Oa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,m){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,m)}set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/os.setFromMatrixColumn(e,0).length(),r=1/os.setFromMatrixColumn(e,1).length(),o=1/os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Em,e,Tm)}lookAt(e,t,n){const s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),mi.crossVectors(n,cn),mi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),mi.crossVectors(n,cn)),mi.normalize(),mo.crossVectors(cn,mi),s[0]=mi.x,s[4]=mo.x,s[8]=cn.x,s[1]=mi.y,s[5]=mo.y,s[9]=cn.y,s[2]=mi.z,s[6]=mo.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],v=n[7],x=n[11],T=n[15],b=s[0],C=s[4],D=s[8],w=s[12],E=s[1],N=s[5],B=s[9],V=s[13],Y=s[2],W=s[6],q=s[10],Z=s[14],I=s[3],ie=s[7],de=s[11],be=s[15];return r[0]=o*b+a*E+c*Y+l*I,r[4]=o*C+a*N+c*W+l*ie,r[8]=o*D+a*B+c*q+l*de,r[12]=o*w+a*V+c*Z+l*be,r[1]=u*b+h*E+d*Y+f*I,r[5]=u*C+h*N+d*W+f*ie,r[9]=u*D+h*B+d*q+f*de,r[13]=u*w+h*V+d*Z+f*be,r[2]=g*b+_*E+m*Y+p*I,r[6]=g*C+_*N+m*W+p*ie,r[10]=g*D+_*B+m*q+p*de,r[14]=g*w+_*V+m*Z+p*be,r[3]=M*b+v*E+x*Y+T*I,r[7]=M*C+v*N+x*W+T*ie,r[11]=M*D+v*B+x*q+T*de,r[15]=M*w+v*V+x*Z+T*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+m*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=h*m*l-_*d*l+_*c*f-a*m*f-h*c*p+a*d*p,v=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,x=u*_*l-g*h*l+g*a*f-o*_*f-u*a*p+o*h*p,T=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,b=t*M+n*v+s*x+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=M*C,e[1]=(_*d*r-h*m*r-_*s*f+n*m*f+h*s*p-n*d*p)*C,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*C,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*f-n*c*f)*C,e[4]=v*C,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*C,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*C,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*f+t*c*f)*C,e[8]=x*C,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*C,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*C,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*C,e[12]=T*C,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*m+t*h*m)*C,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*C,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,M=c*l,v=c*u,x=c*h,T=n.x,b=n.y,C=n.z;return s[0]=(1-(_+p))*T,s[1]=(f+x)*T,s[2]=(g-v)*T,s[3]=0,s[4]=(f-x)*b,s[5]=(1-(d+p))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+v)*C,s[9]=(m-M)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=os.set(s[0],s[1],s[2]).length();const o=os.set(s[4],s[5],s[6]).length(),a=os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);const l=1/r,u=1/o,h=1/a;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,t.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Wn,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===Wn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ra)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Wn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===Wn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===ra)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const os=new A,Cn=new Be,Em=new A(0,0,0),Tm=new A(1,1,1),mi=new A,mo=new A,cn=new A,Ou=new Be,Bu=new Un;class Kn{constructor(e=0,t=0,n=0,s=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ou,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class Xl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bm=0;const zu=new A,as=new Un,ei=new Be,go=new A,hr=new A,Am=new A,Rm=new Un,ku=new A(1,0,0),Hu=new A(0,1,0),Vu=new A(0,0,1),Gu={type:"added"},Cm={type:"removed"},cs={type:"childadded",child:null},Ba={type:"childremoved",child:null};class ct extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new A,t=new Kn,n=new Un,s=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new Ve}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(ku,e)}rotateY(e){return this.rotateOnAxis(Hu,e)}rotateZ(e){return this.rotateOnAxis(Vu,e)}translateOnAxis(e,t){return zu.copy(e).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ku,e)}translateY(e){return this.translateOnAxis(Hu,e)}translateZ(e){return this.translateOnAxis(Vu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?go.copy(e):go.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(hr,go,this.up):ei.lookAt(go,hr,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),as.setFromRotationMatrix(ei),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gu),cs.child=e,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cm),Ba.child=e,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gu),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,Am),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Rm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ct.DEFAULT_UP=new A(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new A,ti=new A,za=new A,ni=new A,ls=new A,us=new A,Wu=new A,ka=new A,Ha=new A,Va=new A,Ga=new tt,Wa=new tt,Xa=new tt;class Mn{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),In.subVectors(e,t),s.cross(In);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){In.subVectors(s,t),ti.subVectors(n,t),za.subVectors(e,t);const o=In.dot(In),a=In.dot(ti),c=In.dot(za),l=ti.dot(ti),u=ti.dot(za),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ni.x),c.addScaledVector(o,ni.y),c.addScaledVector(a,ni.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ga.setScalar(0),Wa.setScalar(0),Xa.setScalar(0),Ga.fromBufferAttribute(e,t),Wa.fromBufferAttribute(e,n),Xa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ga,r.x),o.addScaledVector(Wa,r.y),o.addScaledVector(Xa,r.z),o}static isFrontFacing(e,t,n,s){return In.subVectors(n,t),ti.subVectors(e,t),In.cross(ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),In.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ls.subVectors(s,n),us.subVectors(r,n),ka.subVectors(e,n);const c=ls.dot(ka),l=us.dot(ka);if(c<=0&&l<=0)return t.copy(n);Ha.subVectors(e,s);const u=ls.dot(Ha),h=us.dot(Ha);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(ls,o);Va.subVectors(e,r);const f=ls.dot(Va),g=us.dot(Va);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(us,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Wu.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Wu,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(ls,o).addScaledVector(us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},_o={h:0,s:0,l:0};function qa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class me{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=Gl(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=qa(o,r,e+1/3),this.g=qa(o,r,e),this.b=qa(o,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=at){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){const n=Xd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return Qe.workingToColorSpace(Wt.copy(this),e),Math.round(Ye(Wt.r*255,0,255))*65536+Math.round(Ye(Wt.g*255,0,255))*256+Math.round(Ye(Wt.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Wt.copy(this),t);const n=Wt.r,s=Wt.g,r=Wt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=at){Qe.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,s=Wt.b;return e!==at?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(_o);const n=br(gi.h,_o.h,t),s=br(gi.s,_o.s,t),r=br(gi.l,_o.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new me;me.NAMES=Xd;let Im=0;class Fn extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=En(),this.name="",this.type="Material",this.blending=Ns,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=Rc,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ac&&(n.blendSrc=this.blendSrc),this.blendDst!==Rc&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Iu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qt extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Cd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new A,xo=new re;let Pm=0;class jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fl,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xo.fromBufferAttribute(this,t),xo.applyMatrix3(e),this.setXY(t,xo.x,xo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fl&&(e.usage=this.usage),e}}class qd extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yd extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lt extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Lm=0;const xn=new Be,Ya=new ct,hs=new A,ln=new Et,dr=new Et,Ut=new A;class kt extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gd(e)?Yd:qd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Et);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(ln.min,dr.min),ln.expandByPoint(Ut),Ut.addVectors(ln.max,dr.max),ln.expandByPoint(Ut)):(ln.expandByPoint(dr.min),ln.expandByPoint(dr.max))}ln.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ut));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ut.fromBufferAttribute(a,l),c&&(hs.fromBufferAttribute(e,l),Ut.add(hs)),s=Math.max(s,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new A,c[D]=new A;const l=new A,u=new A,h=new A,d=new re,f=new re,g=new re,_=new A,m=new A;function p(D,w,E){l.fromBufferAttribute(n,D),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,E),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,E),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(N),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(N),a[D].add(_),a[w].add(_),a[E].add(_),c[D].add(m),c[w].add(m),c[E].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,w=M.length;D<w;++D){const E=M[D],N=E.start,B=E.count;for(let V=N,Y=N+B;V<Y;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const v=new A,x=new A,T=new A,b=new A;function C(D){T.fromBufferAttribute(s,D),b.copy(T);const w=a[D];v.copy(w),v.sub(T.multiplyScalar(T.dot(w))).normalize(),x.crossVectors(b,w);const N=x.dot(c[D])<0?-1:1;o.setXYZW(D,v.x,v.y,v.z,N)}for(let D=0,w=M.length;D<w;++D){const E=M[D],N=E.start,B=E.count;for(let V=N,Y=N+B;V<Y;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new A,r=new A,o=new A,a=new A,c=new A,l=new A,u=new A,h=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new jt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xu=new Be,Di=new Qs,vo=new Bn,qu=new A,yo=new A,Mo=new A,So=new A,Ka=new A,wo=new A,Yu=new A,Eo=new A;class Pe extends ct{constructor(e=new kt,t=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){wo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Ka.fromBufferAttribute(h,e),o?wo.addScaledVector(Ka,u):wo.addScaledVector(Ka.sub(t),u))}t.add(wo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(r),Di.copy(e.ray).recast(e.near),!(vo.containsPoint(Di.origin)===!1&&(Di.intersectSphere(vo,qu)===null||Di.origin.distanceToSquared(qu)>(e.far-e.near)**2))&&(Xu.copy(r).invert(),Di.copy(e.ray).applyMatrix4(Xu),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,T=v;x<T;x+=3){const b=a.getX(x),C=a.getX(x+1),D=a.getX(x+2);s=To(this,p,e,n,l,u,h,b,C,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);s=To(this,o,e,n,l,u,h,M,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,T=v;x<T;x+=3){const b=x,C=x+1,D=x+2;s=To(this,p,e,n,l,u,h,b,C,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,v=m+1,x=m+2;s=To(this,o,e,n,l,u,h,M,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Dm(i,e,t,n,s,r,o,a){let c;if(e.side===sn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===ui,a),c===null)return null;Eo.copy(a),Eo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Eo);return l<t.near||l>t.far?null:{distance:l,point:Eo.clone(),object:i}}function To(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,yo),i.getVertexPosition(c,Mo),i.getVertexPosition(l,So);const u=Dm(i,e,t,n,yo,Mo,So,Yu);if(u){const h=new A;Mn.getBarycoord(Yu,yo,Mo,So,h),s&&(u.uv=Mn.getInterpolatedAttribute(s,a,c,l,h,new re)),r&&(u.uv1=Mn.getInterpolatedAttribute(r,a,c,l,h,new re)),o&&(u.normal=Mn.getInterpolatedAttribute(o,a,c,l,h,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new A,materialIndex:0};Mn.getNormal(yo,Mo,So,d.normal),u.face=d,u.barycoord=h}return u}class nn extends kt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(h,2));function g(_,m,p,M,v,x,T,b,C,D,w){const E=x/C,N=T/D,B=x/2,V=T/2,Y=b/2,W=C+1,q=D+1;let Z=0,I=0;const ie=new A;for(let de=0;de<q;de++){const be=de*N-V;for(let qe=0;qe<W;qe++){const Je=qe*E-B;ie[_]=Je*M,ie[m]=be*v,ie[p]=Y,l.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[p]=b>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(qe/C),h.push(1-de/D),Z+=1}}for(let de=0;de<D;de++)for(let be=0;be<C;be++){const qe=d+be+W*de,Je=d+be+W*(de+1),ut=d+(be+1)+W*(de+1),je=d+(be+1)+W*de;c.push(qe,Je,je),c.push(Je,ut,je),I+=6}a.addGroup(f,I,w),f+=I,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Zt(i){const e={};for(let t=0;t<i.length;t++){const n=Gs(i[t]);for(const s in n)e[s]=n[s]}return e}function Nm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Um={clone:Gs,merge:Zt};var Fm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Om=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fm,this.fragmentShader=Om,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=Nm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $d extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new A,Ku=new re,$u=new re;class Jt extends $d{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,Ku,$u),t.subVectors($u,Ku)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ds=-90,fs=1;class Bm extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Jt(ds,fs,e,t);s.layers=this.layers,this.add(s);const r=new Jt(ds,fs,e,t);r.layers=this.layers,this.add(r);const o=new Jt(ds,fs,e,t);o.layers=this.layers,this.add(o);const a=new Jt(ds,fs,e,t);a.layers=this.layers,this.add(a);const c=new Jt(ds,fs,e,t);c.layers=this.layers,this.add(c);const l=new Jt(ds,fs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Zd extends ft{constructor(e=[],t=ks,n,s,r,o,a,c,l,u){super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zm extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zd(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new nn(5,5,5),r=new hi({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Ti});r.uniforms.tEquirect.value=t;const o=new Pe(s,r),a=t.minFilter;return t.minFilter===dn&&(t.minFilter=Ct),new Bm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class mt extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const km={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(km)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class no{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new me(e),this.density=t}clone(){return new no(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Hm extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Jd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fl,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new A;class Gr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ql extends Fn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ps;const fr=new A,ms=new A,gs=new A,_s=new re,pr=new re,jd=new Be,bo=new A,mr=new A,Ao=new A,Zu=new re,Za=new re,Ju=new re;class xa extends ct{constructor(e=new ql){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new kt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Jd(t,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new Gr(n,3,0,!1)),ps.setAttribute("uv",new Gr(n,2,3,!1))}this.geometry=ps,this.material=e,this.center=new re(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),jd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Ro(bo.set(-.5,-.5,0),gs,o,ms,s,r),Ro(mr.set(.5,-.5,0),gs,o,ms,s,r),Ro(Ao.set(.5,.5,0),gs,o,ms,s,r),Zu.set(0,0),Za.set(1,0),Ju.set(1,1);let a=e.ray.intersectTriangle(bo,mr,Ao,!1,fr);if(a===null&&(Ro(mr.set(-.5,.5,0),gs,o,ms,s,r),Za.set(0,1),a=e.ray.intersectTriangle(bo,Ao,mr,!1,fr),a===null))return;const c=e.ray.origin.distanceTo(fr);c<e.near||c>e.far||t.push({distance:c,point:fr.clone(),uv:Mn.getInterpolation(fr,bo,mr,Ao,Zu,Za,Ju,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ro(i,e,t,n,s,r){_s.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(pr.x=r*_s.x-s*_s.y,pr.y=s*_s.x+r*_s.y):pr.copy(_s),i.copy(e),i.x+=pr.x,i.y+=pr.y,i.applyMatrix4(jd)}const ju=new A,Qu=new tt,eh=new tt,Vm=new A,th=new Be,Co=new A,Ja=new Bn,nh=new Be,ja=new Qs;class Gm extends Pe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cu,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Et),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Co),this.boundingBox.expandByPoint(Co)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Co),this.boundingSphere.expandByPoint(Co)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ja.copy(this.boundingSphere),Ja.applyMatrix4(s),e.ray.intersectsSphere(Ja)!==!1&&(nh.copy(s).invert(),ja.copy(e.ray).applyMatrix4(nh),!(this.boundingBox!==null&&ja.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ja)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Cu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Op?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Qu.fromBufferAttribute(s.attributes.skinIndex,e),eh.fromBufferAttribute(s.attributes.skinWeight,e),ju.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=eh.getComponent(r);if(o!==0){const a=Qu.getComponent(r);th.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Vm.copy(ju).applyMatrix4(th),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Wr extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qd extends ft{constructor(e=null,t=1,n=1,s,r,o,a,c,l=bt,u=bt,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ih=new Be,Wm=new Be;class Yl{constructor(e=[],t=[]){this.uuid=En(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Wm;ih.multiplyMatrices(a,t[r]),ih.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Yl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Qd(t,e,e,wn,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Wr),this.bones.push(o),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class pl extends jt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xs=new Be,sh=new Be,Io=[],rh=new Et,Xm=new Be,gr=new Pe,_r=new Bn;class ci extends Pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Xm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Et),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),rh.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(rh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),_r.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(_r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(n),e.ray.intersectsSphere(_r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xs),sh.multiplyMatrices(n,xs),gr.matrixWorld=sh,gr.raycast(e,Io);for(let o=0,a=Io.length;o<a;o++){const c=Io[o];c.instanceId=r,c.object=this,t.push(c)}Io.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new pl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qd(new Float32Array(s*this.count),s,this.count,Bl,Nn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Qa=new A,qm=new A,Ym=new Ve;class zi{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Qa.subVectors(n,t).cross(qm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ym.getNormalMatrix(e),s=this.coplanarPoint(Qa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Bn,Km=new re(.5,.5),Po=new A;class Kl{constructor(e=new zi,t=new zi,n=new zi,s=new zi,r=new zi,o=new zi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],M=r[12],v=r[13],x=r[14],T=r[15];if(s[0].setComponents(l-o,f-u,p-g,T-M).normalize(),s[1].setComponents(l+o,f+u,p+g,T+M).normalize(),s[2].setComponents(l+a,f+h,p+_,T+v).normalize(),s[3].setComponents(l-a,f-h,p-_,T-v).normalize(),n)s[4].setComponents(c,d,m,x).normalize(),s[5].setComponents(l-c,f-d,p-m,T-x).normalize();else if(s[4].setComponents(l-c,f-d,p-m,T-x).normalize(),t===Wn)s[5].setComponents(l+c,f+d,p+m,T+x).normalize();else if(t===ra)s[5].setComponents(c,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){Ni.center.set(0,0,0);const t=Km.distanceTo(e.center);return Ni.radius=.7071067811865476+t,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Po.x=s.normal.x>0?e.max.x:e.min.x,Po.y=s.normal.y>0?e.max.y:e.min.y,Po.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ef extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oa=new A,aa=new A,oh=new Be,xr=new Qs,Lo=new Bn,ec=new A,ah=new A;class $l extends ct{constructor(e=new kt,t=new ef){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)oa.fromBufferAttribute(t,s-1),aa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=oa.distanceTo(aa);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(s),Lo.radius+=r,e.ray.intersectsSphere(Lo)===!1)return;oh.copy(s).invert(),xr.copy(e.ray).applyMatrix4(oh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=u.getX(_),M=u.getX(_+1),v=Do(this,e,xr,c,p,M,_);v&&t.push(v)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Do(this,e,xr,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=Do(this,e,xr,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Do(this,e,xr,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Do(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(oa.fromBufferAttribute(a,s),aa.fromBufferAttribute(a,r),t.distanceSqToSegment(oa,aa,ec,ah)>n)return;ec.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ec);if(!(l<e.near||l>e.far))return{distance:l,point:ah.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const ch=new A,lh=new A;class $m extends $l{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ch.fromBufferAttribute(t,s),lh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ch.distanceTo(lh);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zm extends $l{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class tf extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const uh=new Be,ml=new Qs,No=new Bn,Uo=new A;class Jm extends ct{constructor(e=new kt,t=new tf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(s),No.radius+=r,e.ray.intersectsSphere(No)===!1)return;uh.copy(s).invert(),ml.copy(e.ray).applyMatrix4(uh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Uo.fromBufferAttribute(h,m),hh(Uo,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Uo.fromBufferAttribute(h,g),hh(Uo,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function hh(i,e,t,n,s,r,o){const a=ml.distanceSqToPoint(i);if(a<t){const c=new A;ml.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Qi extends ft{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nf extends ft{constructor(e,t,n=Ki,s,r,o,a=bt,c=bt,l,u=Or,h=1){if(u!==Or&&u!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class sf extends ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zi extends kt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;M(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new lt(h,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(f,2));function M(){const x=new A,T=new A;let b=0;const C=(t-e)/n;for(let D=0;D<=r;D++){const w=[],E=D/r,N=E*(t-e)+e;for(let B=0;B<=s;B++){const V=B/s,Y=V*c+a,W=Math.sin(Y),q=Math.cos(Y);T.x=N*W,T.y=-E*n+m,T.z=N*q,h.push(T.x,T.y,T.z),x.set(W,C,q).normalize(),d.push(x.x,x.y,x.z),f.push(V,1-E),w.push(g++)}_.push(w)}for(let D=0;D<s;D++)for(let w=0;w<r;w++){const E=_[w][D],N=_[w+1][D],B=_[w+1][D+1],V=_[w][D+1];(e>0||w!==0)&&(u.push(E,N,V),b+=3),(t>0||w!==r-1)&&(u.push(N,B,V),b+=3)}l.addGroup(p,b,0),p+=b}function v(x){const T=g,b=new re,C=new A;let D=0;const w=x===!0?e:t,E=x===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),g++;const N=g;for(let B=0;B<=s;B++){const Y=B/s*c+a,W=Math.cos(Y),q=Math.sin(Y);C.x=w*q,C.y=m*E,C.z=w*W,h.push(C.x,C.y,C.z),d.push(0,E,0),b.x=W*.5+.5,b.y=q*.5*E+.5,f.push(b.x,b.y),g++}for(let B=0;B<s;B++){const V=T+B,Y=N+B;x===!0?u.push(Y,Y+1,V):u.push(Y+1,Y,V),D+=3}l.addGroup(p,D,x===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zl extends kt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new A,x=new A,T=new A;for(let b=0;b<t.length;b+=3)f(t[b+0],v),f(t[b+1],x),f(t[b+2],T),c(v,x,T,M)}function c(M,v,x,T){const b=T+1,C=[];for(let D=0;D<=b;D++){C[D]=[];const w=M.clone().lerp(x,D/b),E=v.clone().lerp(x,D/b),N=b-D;for(let B=0;B<=N;B++)B===0&&D===b?C[D][B]=w:C[D][B]=w.clone().lerp(E,B/N)}for(let D=0;D<b;D++)for(let w=0;w<2*(b-D)-1;w++){const E=Math.floor(w/2);w%2===0?(d(C[D][E+1]),d(C[D+1][E]),d(C[D][E])):(d(C[D][E+1]),d(C[D+1][E+1]),d(C[D+1][E]))}}function l(M){const v=new A;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(M),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function u(){const M=new A;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];const x=m(M)/2/Math.PI+.5,T=p(M)/Math.PI+.5;o.push(x,1-T)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const v=o[M+0],x=o[M+2],T=o[M+4],b=Math.max(v,x,T),C=Math.min(v,x,T);b>.9&&C<.1&&(v<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,v){const x=M*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function g(){const M=new A,v=new A,x=new A,T=new A,b=new re,C=new re,D=new re;for(let w=0,E=0;w<r.length;w+=9,E+=6){M.set(r[w+0],r[w+1],r[w+2]),v.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),b.set(o[E+0],o[E+1]),C.set(o[E+2],o[E+3]),D.set(o[E+4],o[E+5]),T.copy(M).add(v).add(x).divideScalar(3);const N=m(T);_(b,E+0,M,N),_(C,E+2,v,N),_(D,E+4,x,N)}}function _(M,v,x,T){T<0&&M.x===1&&(o[v]=M.x-1),x.x===0&&x.z===0&&(o[v]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.vertices,e.indices,e.radius,e.details)}}class $n{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new re:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new A,s=[],r=[],o=[],a=new A,c=new Be;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ye(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ye(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jl extends $n{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new re){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class jm extends Jl{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function jl(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Fo=new A,tc=new jl,nc=new jl,ic=new jl;class Qm extends $n{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new A){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Fo.subVectors(s[0],s[1]).add(s[0]),l=Fo);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Fo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Fo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),tc.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,_,m),nc.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,_,m),ic.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(tc.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),nc.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),ic.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(tc.calc(c),nc.calc(c),ic.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function dh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function e0(i,e){const t=1-i;return t*t*e}function t0(i,e){return 2*(1-i)*i*e}function n0(i,e){return i*i*e}function Ar(i,e,t,n){return e0(i,e)+t0(i,t)+n0(i,n)}function i0(i,e){const t=1-i;return t*t*t*e}function s0(i,e){const t=1-i;return 3*t*t*i*e}function r0(i,e){return 3*(1-i)*i*i*e}function o0(i,e){return i*i*i*e}function Rr(i,e,t,n,s){return i0(i,e)+s0(i,t)+r0(i,n)+o0(i,s)}class rf extends $n{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Rr(e,s.x,r.x,o.x,a.x),Rr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class a0 extends $n{constructor(e=new A,t=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new A){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Rr(e,s.x,r.x,o.x,a.x),Rr(e,s.y,r.y,o.y,a.y),Rr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class of extends $n{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class c0 extends $n{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class af extends $n{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ar(e,s.x,r.x,o.x),Ar(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class l0 extends $n{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ar(e,s.x,r.x,o.x),Ar(e,s.y,r.y,o.y),Ar(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cf extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(dh(a,c.x,l.x,u.x,h.x),dh(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new re().fromArray(s))}return this}}var fh=Object.freeze({__proto__:null,ArcCurve:jm,CatmullRomCurve3:Qm,CubicBezierCurve:rf,CubicBezierCurve3:a0,EllipseCurve:Jl,LineCurve:of,LineCurve3:c0,QuadraticBezierCurve:af,QuadraticBezierCurve3:l0,SplineCurve:cf});class u0 extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new fh[s.type]().fromJSON(s))}return this}}class ph extends u0{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new of(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new af(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new rf(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new cf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Jl(e,t,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class lf extends ph{constructor(e){super(e),this.uuid=En(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new ph().fromJSON(s))}return this}}function h0(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=uf(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=g0(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let u=-1/0,h=-1/0;for(let d=t;d<s;d+=t){const f=i[d],g=i[d+1];f<a&&(a=f),g<c&&(c=g),f>u&&(u=f),g>h&&(h=g)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return Xr(r,o,t,a,c,l,0),o}function uf(i,e,t,n,s){let r;if(s===A0(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=mh(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=mh(o/n|0,i[o],i[o+1],r);return r&&Ws(r,r.next)&&(Yr(r),r=r.next),r}function Ji(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ws(t,t.next)||wt(t.prev,t,t.next)===0)){if(Yr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Xr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&M0(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?f0(i,n,s,r):d0(i)){e.push(c.i,i.i,l.i),Yr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=p0(Ji(i),e),Xr(i,e,t,n,s,r,2)):o===2&&m0(i,e,t,n,s,r):Xr(Ji(i),e,t,n,s,r,1);break}}}function d0(i){const e=i.prev,t=i,n=i.next;if(wt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(s,r,o),h=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l);let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Sr(s,a,r,c,o,l,g.x,g.y)&&wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function f0(i,e,t,n){const s=i.prev,r=i,o=i.next;if(wt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,c,l),g=Math.min(u,h,d),_=Math.max(a,c,l),m=Math.max(u,h,d),p=gl(f,g,e,t,n),M=gl(_,m,e,t,n);let v=i.prevZ,x=i.nextZ;for(;v&&v.z>=p&&x&&x.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Sr(a,u,c,h,l,d,v.x,v.y)&&wt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Sr(a,u,c,h,l,d,x.x,x.y)&&wt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Sr(a,u,c,h,l,d,v.x,v.y)&&wt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Sr(a,u,c,h,l,d,x.x,x.y)&&wt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function p0(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Ws(n,s)&&df(n,t,t.next,s)&&qr(n,s)&&qr(s,n)&&(e.push(n.i,t.i,s.i),Yr(t),Yr(t.next),t=i=s),t=t.next}while(t!==i);return Ji(t)}function m0(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&E0(o,a)){let c=ff(o,a);o=Ji(o,o.next),c=Ji(c,c.next),Xr(o,e,t,n,s,r,0),Xr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function g0(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=uf(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(w0(l))}s.sort(_0);for(let r=0;r<s.length;r++)t=x0(s[r],t);return t}function _0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function x0(i,e){const t=v0(i,e);if(!t)return e;const n=ff(t,i);return Ji(n,n.next),Ji(t,t.next)}function v0(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(Ws(i,t))return t;do{if(Ws(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&hf(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const h=Math.abs(s-t.y)/(n-t.x);qr(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&y0(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function y0(i,e){return wt(i.prev,i,e.prev)<0&&wt(e.next,i,i.next)<0}function M0(i,e,t,n){let s=i;do s.z===0&&(s.z=gl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,S0(s)}function S0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function gl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function w0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function hf(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Sr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&hf(i,e,t,n,s,r,o,a)}function E0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!T0(i,e)&&(qr(i,e)&&qr(e,i)&&b0(i,e)&&(wt(i.prev,i,e.prev)||wt(i,e.prev,e))||Ws(i,e)&&wt(i.prev,i,i.next)>0&&wt(e.prev,e,e.next)>0)}function wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ws(i,e){return i.x===e.x&&i.y===e.y}function df(i,e,t,n){const s=Bo(wt(i,e,t)),r=Bo(wt(i,e,n)),o=Bo(wt(t,n,i)),a=Bo(wt(t,n,e));return!!(s!==r&&o!==a||s===0&&Oo(i,t,e)||r===0&&Oo(i,n,e)||o===0&&Oo(t,i,n)||a===0&&Oo(t,e,n))}function Oo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Bo(i){return i>0?1:i<0?-1:0}function T0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&df(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function qr(i,e){return wt(i.prev,i,i.next)<0?wt(i,e,i.next)>=0&&wt(i,i.prev,e)>=0:wt(i,e,i.prev)<0||wt(i,i.next,e)<0}function b0(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ff(i,e){const t=_l(i.i,i.x,i.y),n=_l(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function mh(i,e,t,n){const s=_l(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Yr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function _l(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function A0(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class R0{static triangulate(e,t,n=2){return h0(e,t,n)}}class Cr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Cr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];gh(e),_h(n,e);let o=e.length;t.forEach(gh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,_h(n,t[c]);const a=R0.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function gh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function _h(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Ql extends Zl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ql(e.radius,e.detail)}}class mn extends kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let v=0;v<l;v++){const x=v*h-r;g.push(x,-M,0),_.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const v=M+l*p,x=M+l*(p+1),T=M+1+l*(p+1),b=M+1+l*p;f.push(v,x,b),f.push(x,T,b)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.width,e.height,e.widthSegments,e.heightSegments)}}class eu extends kt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=e;const d=(t-e)/s,f=new A,g=new re;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const M=p+m,v=M,x=M+n+1,T=M+n+2,b=M+1;a.push(v,x,b),a.push(x,T,b)}}this.setIndex(a),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class tu extends kt{constructor(e=new lf([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new lt(s,3)),this.setAttribute("normal",new lt(r,3)),this.setAttribute("uv",new lt(o,2));function l(u){const h=s.length/3,d=u.extractPoints(t);let f=d.shape;const g=d.holes;Cr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const M=g[m];Cr.isClockWise(M)===!0&&(g[m]=M.reverse())}const _=Cr.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){const M=f[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=_.length;m<p;m++){const M=_[m],v=M[0]+h,x=M[1]+h,T=M[2]+h;n.push(v,x,T),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return C0(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new tu(n,e.curveSegments)}}function C0(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class ca extends kt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new A,d=new A,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],v=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){const b=T/t;h.x=-e*Math.cos(s+b*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(s+b*r)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(b+x,1-v),M.push(l++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const v=u[p][M+1],x=u[p][M],T=u[p+1][M],b=u[p+1][M+1];(p!==0||o>0)&&f.push(v,x,b),(p!==n-1||c<Math.PI)&&f.push(x,T,b)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nu extends kt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new A,h=new A,d=new A;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,M=(s+1)*f+g;o.push(_,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class I0 extends hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fn extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hd,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zn extends fn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class P0 extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class L0 extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function zo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function D0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function N0(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function xh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function pf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class io{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class U0 extends io{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bs,endingEnd:bs}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case As:r=e,a=2*t-n;break;case ia:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case As:o=e,c=2*n-t;break;case ia:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let T=0;T!==a;++T)r[T]=p*o[u+T]+M*o[l+T]+v*o[c+T]+x*o[h+T];return r}}class mf extends io{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class F0 extends io{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class zn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zo(t,this.TimeBufferType),this.values=zo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zo(e.times,Array),values:zo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new F0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new U0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zr:t=this.InterpolantFactoryMethodDiscrete;break;case kr:t=this.InterpolantFactoryMethodLinear;break;case Ra:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return kr;case this.InterpolantFactoryMethodSmooth:return Ra}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&D0(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ra,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=kr;class er extends zn{constructor(e,t,n){super(e,t,n)}}er.prototype.ValueTypeName="bool";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=zr;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;class gf extends zn{constructor(e,t,n,s){super(e,t,n,s)}}gf.prototype.ValueTypeName="color";class Xs extends zn{constructor(e,t,n,s){super(e,t,n,s)}}Xs.prototype.ValueTypeName="number";class O0 extends io{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Un.slerpFlat(r,0,o,l-a,o,l,c);return r}}class qs extends zn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new O0(this.times,this.values,this.getValueSize(),e)}}qs.prototype.ValueTypeName="quaternion";qs.prototype.InterpolantFactoryMethodSmooth=void 0;class tr extends zn{constructor(e,t,n){super(e,t,n)}}tr.prototype.ValueTypeName="string";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=zr;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ys extends zn{constructor(e,t,n,s){super(e,t,n,s)}}Ys.prototype.ValueTypeName="vector";class xl{constructor(e="",t=-1,n=[],s=Vl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=En(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(z0(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(zn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=N0(c);c=xh(c,1,u),l=xh(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Xs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];pf(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const v=d[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}s.push(new Xs(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(Ys,f+".position",d,"pos",s),n(qs,f+".quaternion",d,"rot",s),n(Ys,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function B0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xs;case"vector":case"vector2":case"vector3":case"vector4":return Ys;case"color":return gf;case"quaternion":return qs;case"bool":case"boolean":return er;case"string":return tr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function z0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=B0(i.type);if(i.times===void 0){const t=[],n=[];pf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ri={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class k0{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const H0=new k0;class nr{constructor(e){this.manager=e!==void 0?e:H0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}nr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ii={};class V0 extends Error{constructor(e,t){super(e),this.response=t}}class _f extends nr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ri.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ii[e]!==void 0){ii[e].push({onLoad:t,onProgress:n,onError:s});return}ii[e]=[],ii[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ii[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){h.read().then(({done:v,value:x})=>{if(v)p.close();else{_+=x.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let b=0,C=u.length;b<C;b++){const D=u[b];D.onProgress&&D.onProgress(T)}p.enqueue(x),M()}},v=>{p.error(v)})}}});return new Response(m)}else throw new V0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ri.add(`file:${e}`,l);const u=ii[e];delete ii[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=ii[e];if(u===void 0)throw this.manager.itemError(e),l;delete ii[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const vs=new WeakMap;class G0 extends nr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ri.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=vs.get(o);h===void 0&&(h=[],vs.set(o,h)),h.push({onLoad:t,onError:s})}return o}const a=Hr("img");function c(){u(),t&&t(this);const h=vs.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}vs.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),ri.remove(`image:${e}`);const d=vs.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}vs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ri.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class W0 extends nr{constructor(e){super(e)}load(e,t,n,s){const r=new ft,o=new G0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class va extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class X0 extends va{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const sc=new Be,vh=new A,yh=new A;class iu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kl,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vh.setFromMatrixPosition(e.matrixWorld),t.position.copy(vh),yh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yh),t.updateMatrixWorld(),sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class q0 extends iu{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Vs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Y0 extends va{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new q0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Mh=new Be,vr=new A,rc=new A;class K0 extends iu{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),vr.setFromMatrixPosition(e.matrixWorld),n.position.copy(vr),rc.copy(n.position),rc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(rc),n.updateMatrixWorld(),s.makeTranslation(-vr.x,-vr.y,-vr.z),Mh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mh,n.coordinateSystem,n.reversedDepth)}}class Ks extends va{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new K0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class su extends $d{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $0 extends iu{constructor(){super(new su(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xf extends va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new $0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ir{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const oc=new WeakMap;class Z0 extends nr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ri.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{if(oc.has(o)===!0)s&&s(oc.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ri.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),oc.set(c,l),ri.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ri.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class J0 extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class j0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Q0{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Un.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;Un.multiplyQuaternionsFlat(e,o,e,t,e,n),Un.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const ru="\\[\\]\\.:\\/",eg=new RegExp("["+ru+"]","g"),ou="[^"+ru+"]",tg="[^"+ru.replace("\\.","")+"]",ng=/((?:WC+[\/:])*)/.source.replace("WC",ou),ig=/(WCOD+)?/.source.replace("WCOD",tg),sg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ou),rg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ou),og=new RegExp("^"+ng+ig+sg+rg+"$"),ag=["material","materials","bones","map"];class cg{constructor(e,t,n){const s=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,n):new it(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(eg,"")}static parseTrackName(e){const t=og.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);ag.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=cg;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class lg{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:bs,endingEnd:bs};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=zp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Hp:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case Vl:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===kp;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Bp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=As,s.endingEnd=As):(e?s.endingStart=this.zeroSlopeAtStart?As:bs:s.endingStart=ia,t?s.endingEnd=this.zeroSlopeAtEnd?As:bs:s.endingEnd=ia)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const ug=new Float32Array(1);class hg extends ji{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=s[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;g=new Q0(it.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new mf(new Float32Array(2),new Float32Array(2),1,ug),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?xl.findByName(s,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Vl),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new lg(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?xl.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Sh=new Be;class dg{constructor(e,t,n=0,s=1/0){this.ray=new Qs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Xl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sh),this}intersectObject(e,t=!0,n=[]){return vl(e,this,n,t),n.sort(wh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)vl(e[s],this,n,t);return n.sort(wh),n}}function wh(i,e){return i.distance-e.distance}function vl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)vl(r[o],e,t,!0)}}const Eh=new re;class fg{constructor(e=new re(1/0,1/0),t=new re(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Eh.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Eh).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}function Th(i,e,t,n){const s=pg(n);switch(t){case Od:return i*e;case Bl:return i*e/s.components*s.byteLength;case zl:return i*e/s.components*s.byteLength;case zd:return i*e*2/s.components*s.byteLength;case kl:return i*e*2/s.components*s.byteLength;case Bd:return i*e*3/s.components*s.byteLength;case wn:return i*e*4/s.components*s.byteLength;case Hl:return i*e*4/s.components*s.byteLength;case Ko:case $o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zo:case Jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zc:case Hc:return Math.max(i,16)*Math.max(e,8)/4;case Bc:case kc:return Math.max(i,8)*Math.max(e,8)/2;case Vc:case Gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $c:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Qc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case el:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case tl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case rl:case ol:case al:return Math.ceil(i/4)*Math.ceil(e/4)*16;case cl:case ll:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ul:case hl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pg(i){switch(i){case Yn:case Dd:return{byteLength:1,components:1};case Ur:case Nd:case to:return{byteLength:2,components:1};case Fl:case Ol:return{byteLength:2,components:4};case Ki:case Ul:case Nn:return{byteLength:4,components:1};case Ud:case Fd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nl);function vf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function mg(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var gg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_g=`#ifdef USE_ALPHAHASH
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
#endif`,xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sg=`#ifdef USE_AOMAP
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
#endif`,wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eg=`#ifdef USE_BATCHING
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
#endif`,Tg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cg=`#ifdef USE_IRIDESCENCE
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
#endif`,Ig=`#ifdef USE_BUMPMAP
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
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zg=`#define PI 3.141592653589793
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
} // validated`,kg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hg=`vec3 transformedNormal = objectNormal;
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
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kg=`#ifdef USE_ENVMAP
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
#endif`,$g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
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
#endif`,Qg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i_=`#ifdef USE_GRADIENTMAP
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
}`,s_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a_=`uniform bool receiveShadow;
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
#endif`,c_=`#ifdef USE_ENVMAP
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
#endif`,l_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f_=`PhysicalMaterial material;
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
#endif`,p_=`struct PhysicalMaterial {
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
}`,m_=`
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
#endif`,g_=`#if defined( RE_IndirectDiffuse )
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
#endif`,__=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T_=`#if defined( USE_POINTS_UV )
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
#endif`,b_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P_=`#ifdef USE_MORPHTARGETS
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
#endif`,L_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,N_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B_=`#ifdef USE_NORMALMAP
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
#endif`,z_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,X_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ex=`float getShadowMask() {
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
}`,tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nx=`#ifdef USE_SKINNING
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
#endif`,ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sx=`#ifdef USE_SKINNING
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
#endif`,rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lx=`#ifdef USE_TRANSMISSION
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
#endif`,ux=`#ifdef USE_TRANSMISSION
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gx=`uniform sampler2D t2D;
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`#include <common>
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
}`,Sx=`#if DEPTH_PACKING == 3200
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
}`,wx=`#define DISTANCE
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
}`,Ex=`#define DISTANCE
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
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`uniform float scale;
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Cx=`#include <common>
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
}`,Ix=`uniform vec3 diffuse;
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
}`,Px=`#define LAMBERT
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
}`,Lx=`#define LAMBERT
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
}`,Dx=`#define MATCAP
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
}`,Nx=`#define MATCAP
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
}`,Ux=`#define NORMAL
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
}`,Fx=`#define NORMAL
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
}`,Ox=`#define PHONG
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
}`,Bx=`#define PHONG
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
}`,zx=`#define STANDARD
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
}`,kx=`#define STANDARD
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
}`,Hx=`#define TOON
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
}`,Vx=`#define TOON
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
}`,Gx=`uniform float size;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,Xx=`#include <common>
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
}`,qx=`uniform vec3 color;
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
}`,Yx=`uniform float rotation;
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
}`,Kx=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:gg,alphahash_pars_fragment:_g,alphamap_fragment:xg,alphamap_pars_fragment:vg,alphatest_fragment:yg,alphatest_pars_fragment:Mg,aomap_fragment:Sg,aomap_pars_fragment:wg,batching_pars_vertex:Eg,batching_vertex:Tg,begin_vertex:bg,beginnormal_vertex:Ag,bsdfs:Rg,iridescence_fragment:Cg,bumpmap_pars_fragment:Ig,clipping_planes_fragment:Pg,clipping_planes_pars_fragment:Lg,clipping_planes_pars_vertex:Dg,clipping_planes_vertex:Ng,color_fragment:Ug,color_pars_fragment:Fg,color_pars_vertex:Og,color_vertex:Bg,common:zg,cube_uv_reflection_fragment:kg,defaultnormal_vertex:Hg,displacementmap_pars_vertex:Vg,displacementmap_vertex:Gg,emissivemap_fragment:Wg,emissivemap_pars_fragment:Xg,colorspace_fragment:qg,colorspace_pars_fragment:Yg,envmap_fragment:Kg,envmap_common_pars_fragment:$g,envmap_pars_fragment:Zg,envmap_pars_vertex:Jg,envmap_physical_pars_fragment:c_,envmap_vertex:jg,fog_vertex:Qg,fog_pars_vertex:e_,fog_fragment:t_,fog_pars_fragment:n_,gradientmap_pars_fragment:i_,lightmap_pars_fragment:s_,lights_lambert_fragment:r_,lights_lambert_pars_fragment:o_,lights_pars_begin:a_,lights_toon_fragment:l_,lights_toon_pars_fragment:u_,lights_phong_fragment:h_,lights_phong_pars_fragment:d_,lights_physical_fragment:f_,lights_physical_pars_fragment:p_,lights_fragment_begin:m_,lights_fragment_maps:g_,lights_fragment_end:__,logdepthbuf_fragment:x_,logdepthbuf_pars_fragment:v_,logdepthbuf_pars_vertex:y_,logdepthbuf_vertex:M_,map_fragment:S_,map_pars_fragment:w_,map_particle_fragment:E_,map_particle_pars_fragment:T_,metalnessmap_fragment:b_,metalnessmap_pars_fragment:A_,morphinstance_vertex:R_,morphcolor_vertex:C_,morphnormal_vertex:I_,morphtarget_pars_vertex:P_,morphtarget_vertex:L_,normal_fragment_begin:D_,normal_fragment_maps:N_,normal_pars_fragment:U_,normal_pars_vertex:F_,normal_vertex:O_,normalmap_pars_fragment:B_,clearcoat_normal_fragment_begin:z_,clearcoat_normal_fragment_maps:k_,clearcoat_pars_fragment:H_,iridescence_pars_fragment:V_,opaque_fragment:G_,packing:W_,premultiplied_alpha_fragment:X_,project_vertex:q_,dithering_fragment:Y_,dithering_pars_fragment:K_,roughnessmap_fragment:$_,roughnessmap_pars_fragment:Z_,shadowmap_pars_fragment:J_,shadowmap_pars_vertex:j_,shadowmap_vertex:Q_,shadowmask_pars_fragment:ex,skinbase_vertex:tx,skinning_pars_vertex:nx,skinning_vertex:ix,skinnormal_vertex:sx,specularmap_fragment:rx,specularmap_pars_fragment:ox,tonemapping_fragment:ax,tonemapping_pars_fragment:cx,transmission_fragment:lx,transmission_pars_fragment:ux,uv_pars_fragment:hx,uv_pars_vertex:dx,uv_vertex:fx,worldpos_vertex:px,background_vert:mx,background_frag:gx,backgroundCube_vert:_x,backgroundCube_frag:xx,cube_vert:vx,cube_frag:yx,depth_vert:Mx,depth_frag:Sx,distanceRGBA_vert:wx,distanceRGBA_frag:Ex,equirect_vert:Tx,equirect_frag:bx,linedashed_vert:Ax,linedashed_frag:Rx,meshbasic_vert:Cx,meshbasic_frag:Ix,meshlambert_vert:Px,meshlambert_frag:Lx,meshmatcap_vert:Dx,meshmatcap_frag:Nx,meshnormal_vert:Ux,meshnormal_frag:Fx,meshphong_vert:Ox,meshphong_frag:Bx,meshphysical_vert:zx,meshphysical_frag:kx,meshtoon_vert:Hx,meshtoon_frag:Vx,points_vert:Gx,points_frag:Wx,shadow_vert:Xx,shadow_frag:qx,sprite_vert:Yx,sprite_frag:Kx},ae={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Gn={basic:{uniforms:Zt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Zt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new me(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Zt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Zt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Zt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new me(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Zt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Zt([ae.points,ae.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Zt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Zt([ae.common,ae.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Zt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Zt([ae.sprite,ae.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Zt([ae.common,ae.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Zt([ae.lights,ae.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Gn.physical={uniforms:Zt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ko={r:0,b:0,g:0},Ui=new Kn,$x=new Be;function Zx(i,e,t,n,s,r,o){const a=new me(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const T=g(v);T===null?p(a,c):T&&T.isColor&&(p(T,1),x=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,x){const T=g(x);T&&(T.isCubeTexture||T.mapping===_a)?(u===void 0&&(u=new Pe(new nn(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Gs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ui.copy(x.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($x.makeRotationFromEuler(Ui)),u.material.toneMapped=Qe.getTransfer(T.colorSpace)!==dt,(h!==T||d!==T.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Pe(new mn(2,2),new hi({name:"BackgroundMaterial",uniforms:Gs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(T.colorSpace)!==dt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=T,d=T.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,x){v.getRGB(ko,Kd(i)),n.buffers.color.setClear(ko.r,ko.g,ko.b,x,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:m,dispose:M}}function Jx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(E,N,B,V,Y){let W=!1;const q=h(V,B,N);r!==q&&(r=q,l(r.object)),W=f(E,V,B,Y),W&&g(E,V,B,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(E,N,B,V),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function h(E,N,B){const V=B.wireframe===!0;let Y=n[E.id];Y===void 0&&(Y={},n[E.id]=Y);let W=Y[N.id];W===void 0&&(W={},Y[N.id]=W);let q=W[V];return q===void 0&&(q=d(c()),W[V]=q),q}function d(E){const N=[],B=[],V=[];for(let Y=0;Y<t;Y++)N[Y]=0,B[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:V,object:E,attributes:{},index:null}}function f(E,N,B,V){const Y=r.attributes,W=N.attributes;let q=0;const Z=B.getAttributes();for(const I in Z)if(Z[I].location>=0){const de=Y[I];let be=W[I];if(be===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(be=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(be=E.instanceColor)),de===void 0||de.attribute!==be||be&&de.data!==be.data)return!0;q++}return r.attributesNum!==q||r.index!==V}function g(E,N,B,V){const Y={},W=N.attributes;let q=0;const Z=B.getAttributes();for(const I in Z)if(Z[I].location>=0){let de=W[I];de===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(de=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(de=E.instanceColor));const be={};be.attribute=de,de&&de.data&&(be.data=de.data),Y[I]=be,q++}r.attributes=Y,r.attributesNum=q,r.index=V}function _(){const E=r.newAttributes;for(let N=0,B=E.length;N<B;N++)E[N]=0}function m(E){p(E,0)}function p(E,N){const B=r.newAttributes,V=r.enabledAttributes,Y=r.attributeDivisors;B[E]=1,V[E]===0&&(i.enableVertexAttribArray(E),V[E]=1),Y[E]!==N&&(i.vertexAttribDivisor(E,N),Y[E]=N)}function M(){const E=r.newAttributes,N=r.enabledAttributes;for(let B=0,V=N.length;B<V;B++)N[B]!==E[B]&&(i.disableVertexAttribArray(B),N[B]=0)}function v(E,N,B,V,Y,W,q){q===!0?i.vertexAttribIPointer(E,N,B,Y,W):i.vertexAttribPointer(E,N,B,V,Y,W)}function x(E,N,B,V){_();const Y=V.attributes,W=B.getAttributes(),q=N.defaultAttributeValues;for(const Z in W){const I=W[Z];if(I.location>=0){let ie=Y[Z];if(ie===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(ie=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(ie=E.instanceColor)),ie!==void 0){const de=ie.normalized,be=ie.itemSize,qe=e.get(ie);if(qe===void 0)continue;const Je=qe.buffer,ut=qe.type,je=qe.bytesPerElement,K=ut===i.INT||ut===i.UNSIGNED_INT||ie.gpuType===Ul;if(ie.isInterleavedBufferAttribute){const J=ie.data,pe=J.stride,Ne=ie.offset;if(J.isInstancedInterleavedBuffer){for(let Ee=0;Ee<I.locationSize;Ee++)p(I.location+Ee,J.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ee=0;Ee<I.locationSize;Ee++)m(I.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let Ee=0;Ee<I.locationSize;Ee++)v(I.location+Ee,be/I.locationSize,ut,de,pe*je,(Ne+be/I.locationSize*Ee)*je,K)}else{if(ie.isInstancedBufferAttribute){for(let J=0;J<I.locationSize;J++)p(I.location+J,ie.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let J=0;J<I.locationSize;J++)m(I.location+J);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let J=0;J<I.locationSize;J++)v(I.location+J,be/I.locationSize,ut,de,be*je,be/I.locationSize*J*je,K)}}else if(q!==void 0){const de=q[Z];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(I.location,de);break;case 3:i.vertexAttrib3fv(I.location,de);break;case 4:i.vertexAttrib4fv(I.location,de);break;default:i.vertexAttrib1fv(I.location,de)}}}}M()}function T(){D();for(const E in n){const N=n[E];for(const B in N){const V=N[B];for(const Y in V)u(V[Y].object),delete V[Y];delete N[B]}delete n[E]}}function b(E){if(n[E.id]===void 0)return;const N=n[E.id];for(const B in N){const V=N[B];for(const Y in V)u(V[Y].object),delete V[Y];delete N[B]}delete n[E.id]}function C(E){for(const N in n){const B=n[N];if(B[E.id]===void 0)continue;const V=B[E.id];for(const Y in V)u(V[Y].object),delete V[Y];delete B[E.id]}}function D(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function jx(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Qx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==wn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const D=C===to&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Yn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Nn&&!D)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:T,maxSamples:b}}function ev(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new zi,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const M=r?0:n,v=M*4;let x=p.clippingState||null;c.value=x,x=u(g,d,v,f);for(let T=0;T!==v;++T)x[T]=t[T];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==_;++v,x+=4)o.copy(h[v]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function tv(i){let e=new WeakMap;function t(o,a){return a===Fc?o.mapping=ks:a===Oc&&(o.mapping=Hs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fc||a===Oc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new zm(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Rs=4,bh=[.125,.215,.35,.446,.526,.582],Gi=20,ac=new su,Ah=new me;let cc=null,lc=0,uc=0,hc=!1;const ki=(1+Math.sqrt(5))/2,ys=1/ki,Rh=[new A(-ki,ys,0),new A(ki,ys,0),new A(-ys,0,ki),new A(ys,0,ki),new A(0,ki,-ys),new A(0,ki,ys),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],nv=new A;class Ch{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=nv}=r;cc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cc,lc,uc),this._renderer.xr.enabled=hc,e.scissorTest=!1,Ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ks||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:to,format:wn,colorSpace:Qt,depthBuffer:!1},s=Ih(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ih(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iv(r)),this._blurMaterial=sv(r,e,t)}return s}_compileMaterial(e){const t=new Pe(this._lodPlanes[0],e);this._renderer.compile(t,ac)}_sceneToCubeUV(e,t,n,s,r){const c=new Jt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ah),h.toneMapping=bi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new qt({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),m=new Pe(new nn,_);let p=!1;const M=e.background;M?M.isColor&&(_.color.copy(M),e.background=null,p=!0):(_.color.copy(Ah),p=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[v],r.y,r.z)):x===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[v]));const T=this._cubeSize;Ho(s,x*T,v>2?T:0,T,T),h.setRenderTarget(s),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ks||e.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ph());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Ho(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ac)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Rh[(s-r-1)%Rh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Pe(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Gi;m>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const p=[];let M=0;for(let C=0;C<Gi;++C){const D=C/_,w=Math.exp(-D*D/2);p.push(w),C===0?M+=w:C<m&&(M+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const x=this._sizeLods[s],T=3*x*(s>v-Rs?s-v+Rs:0),b=4*(this._cubeSize-x);Ho(t,T,b,3*x,2*x),c.setRenderTarget(t),c.render(h,ac)}}function iv(i){const e=[],t=[],n=[];let s=i;const r=i-Rs+1+bh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Rs?c=bh[o-i+Rs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),v=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let b=0;b<f;b++){const C=b%3*2/3-1,D=b>2?0:-1,w=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];M.set(w,_*g*b),v.set(d,m*g*b);const E=[b,b,b,b,b,b];x.set(E,p*g*b)}const T=new kt;T.setAttribute("position",new jt(M,_)),T.setAttribute("uv",new jt(v,m)),T.setAttribute("faceIndex",new jt(x,p)),e.push(T),s>Rs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ih(i,e,t){const n=new $i(i,e,t);return n.texture.mapping=_a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ho(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function sv(i,e,t){const n=new Float32Array(Gi),s=new A(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:au(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Ph(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Lh(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function au(){return`

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
	`}function rv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Fc||c===Oc,u=c===ks||c===Hs;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ch(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Ch(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ov(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Vr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function av(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let v=0,x=M.length;v<x;v+=3){const T=M[v+0],b=M[v+1],C=M[v+2];d.push(T,b,b,C,C,T)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,x=M.length/3-1;v<x;v+=3){const T=v+0,b=v+1,C=v+2;d.push(T,b,b,C,C,T)}}else return;const m=new(Gd(d)?Yd:qd)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function cv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function lv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function uv(i,e,t){const n=new WeakMap,s=new tt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let E=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var f=E;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let T=a.attributes.position.count*x,b=1;T>e.maxTextureSize&&(b=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*b*4*h),D=new Wd(C,T,b,h);D.type=Nn,D.needsUpdate=!0;const w=x*4;for(let N=0;N<h;N++){const B=p[N],V=M[N],Y=v[N],W=T*b*4*N;for(let q=0;q<B.count;q++){const Z=q*w;g===!0&&(s.fromBufferAttribute(B,q),C[W+Z+0]=s.x,C[W+Z+1]=s.y,C[W+Z+2]=s.z,C[W+Z+3]=0),_===!0&&(s.fromBufferAttribute(V,q),C[W+Z+4]=s.x,C[W+Z+5]=s.y,C[W+Z+6]=s.z,C[W+Z+7]=0),m===!0&&(s.fromBufferAttribute(Y,q),C[W+Z+8]=s.x,C[W+Z+9]=s.y,C[W+Z+10]=s.z,C[W+Z+11]=Y.itemSize===4?s.w:1)}}d={count:h,texture:D,size:new re(T,b)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function hv(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const yf=new ft,Dh=new nf(1,1),Mf=new Wd,Sf=new Sm,wf=new Zd,Nh=[],Uh=[],Fh=new Float32Array(16),Oh=new Float32Array(9),Bh=new Float32Array(4);function ir(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Nh[s];if(r===void 0&&(r=new Float32Array(s),Nh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ya(i,e){let t=Uh[e];t===void 0&&(t=new Int32Array(e),Uh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function pv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function mv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function gv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;Bh.set(n),i.uniformMatrix2fv(this.addr,!1,Bh),Dt(t,n)}}function _v(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;Oh.set(n),i.uniformMatrix3fv(this.addr,!1,Oh),Dt(t,n)}}function xv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;Fh.set(n),i.uniformMatrix4fv(this.addr,!1,Fh),Dt(t,n)}}function vv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function yv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function Mv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function Sv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function wv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function Tv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function Av(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Dh.compareFunction=Vd,r=Dh):r=yf,t.setTexture2D(e||r,s)}function Rv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Sf,s)}function Cv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||wf,s)}function Iv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Mf,s)}function Pv(i){switch(i){case 5126:return dv;case 35664:return fv;case 35665:return pv;case 35666:return mv;case 35674:return gv;case 35675:return _v;case 35676:return xv;case 5124:case 35670:return vv;case 35667:case 35671:return yv;case 35668:case 35672:return Mv;case 35669:case 35673:return Sv;case 5125:return wv;case 36294:return Ev;case 36295:return Tv;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Rv;case 35680:case 36300:case 36308:case 36293:return Cv;case 36289:case 36303:case 36311:case 36292:return Iv}}function Lv(i,e){i.uniform1fv(this.addr,e)}function Dv(i,e){const t=ir(e,this.size,2);i.uniform2fv(this.addr,t)}function Nv(i,e){const t=ir(e,this.size,3);i.uniform3fv(this.addr,t)}function Uv(i,e){const t=ir(e,this.size,4);i.uniform4fv(this.addr,t)}function Fv(i,e){const t=ir(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ov(i,e){const t=ir(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Bv(i,e){const t=ir(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zv(i,e){i.uniform1iv(this.addr,e)}function kv(i,e){i.uniform2iv(this.addr,e)}function Hv(i,e){i.uniform3iv(this.addr,e)}function Vv(i,e){i.uniform4iv(this.addr,e)}function Gv(i,e){i.uniform1uiv(this.addr,e)}function Wv(i,e){i.uniform2uiv(this.addr,e)}function Xv(i,e){i.uniform3uiv(this.addr,e)}function qv(i,e){i.uniform4uiv(this.addr,e)}function Yv(i,e,t){const n=this.cache,s=e.length,r=ya(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||yf,r[o])}function Kv(i,e,t){const n=this.cache,s=e.length,r=ya(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Sf,r[o])}function $v(i,e,t){const n=this.cache,s=e.length,r=ya(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||wf,r[o])}function Zv(i,e,t){const n=this.cache,s=e.length,r=ya(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Mf,r[o])}function Jv(i){switch(i){case 5126:return Lv;case 35664:return Dv;case 35665:return Nv;case 35666:return Uv;case 35674:return Fv;case 35675:return Ov;case 35676:return Bv;case 5124:case 35670:return zv;case 35667:case 35671:return kv;case 35668:case 35672:return Hv;case 35669:case 35673:return Vv;case 5125:return Gv;case 36294:return Wv;case 36295:return Xv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return Kv;case 35680:case 36300:case 36308:case 36293:return $v;case 36289:case 36303:case 36311:case 36292:return Zv}}class jv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pv(t.type)}}class Qv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jv(t.type)}}class ey{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const dc=/(\w+)(\])?(\[|\.)?/g;function zh(i,e){i.seq.push(e),i.map[e.id]=e}function ty(i,e,t){const n=i.name,s=n.length;for(dc.lastIndex=0;;){const r=dc.exec(n),o=dc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){zh(t,l===void 0?new jv(a,i,e):new Qv(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new ey(a),zh(t,h)),t=h}}}class jo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);ty(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function kh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ny=37297;let iy=0;function sy(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Hh=new Ve;function ry(i){Qe._getMatrix(Hh,Qe.workingColorSpace,i);const e=`mat3( ${Hh.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case sa:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+sy(i.getShaderSource(e),a)}else return r}function oy(i,e){const t=ry(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ay(i,e){let t;switch(e){case Pp:t="Linear";break;case Lp:t="Reinhard";break;case Dp:t="Cineon";break;case Id:t="ACESFilmic";break;case Up:t="AgX";break;case Fp:t="Neutral";break;case Np:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vo=new A;function cy(){Qe.getLuminanceCoefficients(Vo);const i=Vo.x.toFixed(4),e=Vo.y.toFixed(4),t=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ly(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function uy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function wr(i){return i!==""}function Gh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(i){return i.replace(dy,py)}const fy=new Map;function py(i,e){let t=Xe[e];if(t===void 0){const n=fy.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yl(t)}const my=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(i){return i.replace(my,gy)}function gy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function _y(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ad?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function xy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ks:case Hs:e="ENVMAP_TYPE_CUBE";break;case _a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vy(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Hs&&(e="ENVMAP_MODE_REFRACTION"),e}function yy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Cd:e="ENVMAP_BLENDING_MULTIPLY";break;case Cp:e="ENVMAP_BLENDING_MIX";break;case Ip:e="ENVMAP_BLENDING_ADD";break}return e}function My(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Sy(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=_y(t),l=xy(t),u=vy(t),h=yy(t),d=My(t),f=ly(t),g=uy(r),_=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),p.length>0&&(p+=`
`)):(m=[qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),p=[qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==bi?ay("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,oy("linearToOutputTexel",t.outputColorSpace),cy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),o=yl(o),o=Gh(o,t),o=Wh(o,t),a=yl(a),a=Gh(a,t),a=Wh(a,t),o=Xh(o),a=Xh(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+m+o,x=M+p+a,T=kh(s,s.VERTEX_SHADER,v),b=kh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,T),s.attachShader(_,b),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(N){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(T)||"",Y=s.getShaderInfoLog(b)||"",W=B.trim(),q=V.trim(),Z=Y.trim();let I=!0,ie=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,b);else{const de=Vh(s,T,"vertex"),be=Vh(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+W+`
`+de+`
`+be)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(q===""||Z==="")&&(ie=!1);ie&&(N.diagnostics={runnable:I,programLog:W,vertexShader:{log:q,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(T),s.deleteShader(b),D=new jo(s,_),w=hy(s,_)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,ny)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=b,this}let wy=0;class Ey{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ty(e),t.set(e,n)),n}}class Ty{constructor(e){this.id=wy++,this.code=e,this.usedTimes=0}}function by(i,e,t,n,s,r,o){const a=new Xl,c=new Ey,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,E,N,B,V){const Y=B.fog,W=V.geometry,q=w.isMeshStandardMaterial?B.environment:null,Z=(w.isMeshStandardMaterial?t:e).get(w.envMap||q),I=Z&&Z.mapping===_a?Z.image.height:null,ie=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const de=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,be=de!==void 0?de.length:0;let qe=0;W.morphAttributes.position!==void 0&&(qe=1),W.morphAttributes.normal!==void 0&&(qe=2),W.morphAttributes.color!==void 0&&(qe=3);let Je,ut,je,K;if(ie){const nt=Gn[ie];Je=nt.vertexShader,ut=nt.fragmentShader}else Je=w.vertexShader,ut=w.fragmentShader,c.update(w),je=c.getVertexShaderID(w),K=c.getFragmentShaderID(w);const J=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Ne=V.isInstancedMesh===!0,Ee=V.isBatchedMesh===!0,Ke=!!w.map,Vt=!!w.matcap,P=!!Z,xt=!!w.aoMap,ke=!!w.lightMap,Fe=!!w.bumpMap,Se=!!w.normalMap,vt=!!w.displacementMap,we=!!w.emissiveMap,We=!!w.metalnessMap,Nt=!!w.roughnessMap,At=w.anisotropy>0,R=w.clearcoat>0,y=w.dispersion>0,z=w.iridescence>0,X=w.sheen>0,j=w.transmission>0,G=At&&!!w.anisotropyMap,Ce=R&&!!w.clearcoatMap,se=R&&!!w.clearcoatNormalMap,Te=R&&!!w.clearcoatRoughnessMap,Ae=z&&!!w.iridescenceMap,te=z&&!!w.iridescenceThicknessMap,ue=X&&!!w.sheenColorMap,Ue=X&&!!w.sheenRoughnessMap,Re=!!w.specularMap,ce=!!w.specularColorMap,He=!!w.specularIntensityMap,U=j&&!!w.transmissionMap,ne=j&&!!w.thicknessMap,oe=!!w.gradientMap,ve=!!w.alphaMap,Q=w.alphaTest>0,$=!!w.alphaHash,Me=!!w.extensions;let ze=bi;w.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ze=i.toneMapping);const gt={shaderID:ie,shaderType:w.type,shaderName:w.name,vertexShader:Je,fragmentShader:ut,defines:w.defines,customVertexShaderID:je,customFragmentShaderID:K,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&V._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&V.instanceColor!==null,instancingMorph:Ne&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Qt,alphaToCoverage:!!w.alphaToCoverage,map:Ke,matcap:Vt,envMap:P,envMapMode:P&&Z.mapping,envMapCubeUVHeight:I,aoMap:xt,lightMap:ke,bumpMap:Fe,normalMap:Se,displacementMap:d&&vt,emissiveMap:we,normalMapObjectSpace:Se&&w.normalMapType===Xp,normalMapTangentSpace:Se&&w.normalMapType===Hd,metalnessMap:We,roughnessMap:Nt,anisotropy:At,anisotropyMap:G,clearcoat:R,clearcoatMap:Ce,clearcoatNormalMap:se,clearcoatRoughnessMap:Te,dispersion:y,iridescence:z,iridescenceMap:Ae,iridescenceThicknessMap:te,sheen:X,sheenColorMap:ue,sheenRoughnessMap:Ue,specularMap:Re,specularColorMap:ce,specularIntensityMap:He,transmission:j,transmissionMap:U,thicknessMap:ne,gradientMap:oe,opaque:w.transparent===!1&&w.blending===Ns&&w.alphaToCoverage===!1,alphaMap:ve,alphaTest:Q,alphaHash:$,combine:w.combine,mapUv:Ke&&_(w.map.channel),aoMapUv:xt&&_(w.aoMap.channel),lightMapUv:ke&&_(w.lightMap.channel),bumpMapUv:Fe&&_(w.bumpMap.channel),normalMapUv:Se&&_(w.normalMap.channel),displacementMapUv:vt&&_(w.displacementMap.channel),emissiveMapUv:we&&_(w.emissiveMap.channel),metalnessMapUv:We&&_(w.metalnessMap.channel),roughnessMapUv:Nt&&_(w.roughnessMap.channel),anisotropyMapUv:G&&_(w.anisotropyMap.channel),clearcoatMapUv:Ce&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&_(w.sheenRoughnessMap.channel),specularMapUv:Re&&_(w.specularMap.channel),specularColorMapUv:ce&&_(w.specularColorMap.channel),specularIntensityMapUv:He&&_(w.specularIntensityMap.channel),transmissionMapUv:U&&_(w.transmissionMap.channel),thicknessMapUv:ne&&_(w.thicknessMap.channel),alphaMapUv:ve&&_(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Se||At),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!W.attributes.uv&&(Ke||ve),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pe,skinning:V.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:qe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:Ke&&w.map.isVideoTexture===!0&&Qe.getTransfer(w.map.colorSpace)===dt,decodeVideoTextureEmissive:we&&w.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(w.emissiveMap.colorSpace)===dt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ht,flipSided:w.side===sn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Me&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&w.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function p(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const N in w.defines)E.push(N),E.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(M(E,w),v(E,w),E.push(i.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function M(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function v(w,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const E=g[w.type];let N;if(E){const B=Gn[E];N=Um.clone(B.uniforms)}else N=w.uniforms;return N}function T(w,E){let N;for(let B=0,V=u.length;B<V;B++){const Y=u[B];if(Y.cacheKey===E){N=Y,++N.usedTimes;break}}return N===void 0&&(N=new Sy(i,E,w,r),u.push(N)),N}function b(w){if(--w.usedTimes===0){const E=u.indexOf(w);u[E]=u[u.length-1],u.pop(),w.destroy()}}function C(w){c.remove(w)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:b,releaseShaderCache:C,programs:u,dispose:D}}function Ay(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ry(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Yh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Kh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||Ry),n.length>1&&n.sort(d||Yh),s.length>1&&s.sort(d||Yh)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Cy(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Kh,i.set(n,[o])):s>=r.length?(o=new Kh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Iy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new me};break;case"SpotLight":t={position:new A,direction:new A,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function Py(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ly=0;function Dy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ny(i){const e=new Iy,t=Py(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const s=new A,r=new Be,o=new Be;function a(l){let u=0,h=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,v=0,x=0,T=0,b=0,C=0;l.sort(Dy);for(let w=0,E=l.length;w<E;w++){const N=l[w],B=N.color,V=N.intensity,Y=N.distance,W=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=B.r*V,h+=B.g*V,d+=B.b*V;else if(N.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(N.sh.coefficients[q],V);C++}else if(N.isDirectionalLight){const q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Z=N.shadow,I=t.get(N);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,n.directionalShadow[f]=I,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=N.shadow.matrix,M++}n.directional[f]=q,f++}else if(N.isSpotLight){const q=e.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(B).multiplyScalar(V),q.distance=Y,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,n.spot[_]=q;const Z=N.shadow;if(N.map&&(n.spotLightMap[T]=N.map,T++,Z.updateMatrices(N),N.castShadow&&b++),n.spotLightMatrix[_]=Z.matrix,N.castShadow){const I=t.get(N);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,n.spotShadow[_]=I,n.spotShadowMap[_]=W,x++}_++}else if(N.isRectAreaLight){const q=e.get(N);q.color.copy(B).multiplyScalar(V),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=q,m++}else if(N.isPointLight){const q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){const Z=N.shadow,I=t.get(N);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,I.shadowCameraNear=Z.camera.near,I.shadowCameraFar=Z.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=N.shadow.matrix,v++}n.point[g]=q,g++}else if(N.isHemisphereLight){const q=e.get(N);q.skyColor.copy(N.color).multiplyScalar(V),q.groundColor.copy(N.groundColor).multiplyScalar(V),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==M||D.numPointShadows!==v||D.numSpotShadows!==x||D.numSpotMaps!==T||D.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=M,D.numPointShadows=v,D.numSpotShadows=x,D.numSpotMaps=T,D.numLightProbes=C,n.version=Ly++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const v=l[p];if(v.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(v.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function $h(i){const e=new Ny(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Uy(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new $h(i),e.set(s,[a])):r>=o.length?(a=new $h(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Fy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Oy=`uniform sampler2D shadow_pass;
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
}`;function By(i,e,t){let n=new Kl;const s=new re,r=new re,o=new tt,a=new P0({depthPacking:Wp}),c=new L0,l={},u=t.maxTextureSize,h={[ui]:sn,[sn]:ui,[Ht]:Ht},d=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Fy,fragmentShader:Oy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ad;let p=this.type;this.render=function(b,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const w=i.getRenderTarget(),E=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Ti),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=p!==si&&this.type===si,Y=p===si&&this.type!==si;for(let W=0,q=b.length;W<q;W++){const Z=b[W],I=Z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const ie=I.getFrameExtents();if(s.multiply(ie),r.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,I.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,I.mapSize.y=r.y)),I.map===null||V===!0||Y===!0){const be=this.type!==si?{minFilter:bt,magFilter:bt}:{};I.map!==null&&I.map.dispose(),I.map=new $i(s.x,s.y,be),I.map.texture.name=Z.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const de=I.getViewportCount();for(let be=0;be<de;be++){const qe=I.getViewport(be);o.set(r.x*qe.x,r.y*qe.y,r.x*qe.z,r.y*qe.w),B.viewport(o),I.updateMatrices(Z,be),n=I.getFrustum(),x(C,D,I.camera,Z,this.type)}I.isPointLightShadow!==!0&&this.type===si&&M(I,D),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,E,N)};function M(b,C){const D=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new $i(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(C,null,D,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(C,null,D,f,_,null)}function v(b,C,D,w){let E=null;const N=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)E=N;else if(E=D.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=E.uuid,V=C.uuid;let Y=l[B];Y===void 0&&(Y={},l[B]=Y);let W=Y[V];W===void 0&&(W=E.clone(),Y[V]=W,C.addEventListener("dispose",T)),E=W}if(E.visible=C.visible,E.wireframe=C.wireframe,w===si?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:h[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const B=i.properties.get(E);B.light=D}return E}function x(b,C,D,w,E){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===si)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const V=e.update(b),Y=b.material;if(Array.isArray(Y)){const W=V.groups;for(let q=0,Z=W.length;q<Z;q++){const I=W[q],ie=Y[I.materialIndex];if(ie&&ie.visible){const de=v(b,ie,w,E);b.onBeforeShadow(i,b,C,D,V,de,I),i.renderBufferDirect(D,null,V,de,b,I),b.onAfterShadow(i,b,C,D,V,de,I)}}}else if(Y.visible){const W=v(b,Y,w,E);b.onBeforeShadow(i,b,C,D,V,W,null),i.renderBufferDirect(D,null,V,W,b,null),b.onAfterShadow(i,b,C,D,V,W,null)}}const B=b.children;for(let V=0,Y=B.length;V<Y;V++)x(B[V],C,D,w,E)}function T(b){b.target.removeEventListener("dispose",T);for(const D in l){const w=l[D],E=b.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}const zy={[Cc]:Ic,[Pc]:Nc,[Lc]:Uc,[zs]:Dc,[Ic]:Cc,[Nc]:Pc,[Uc]:Lc,[Dc]:zs};function ky(i,e){function t(){let U=!1;const ne=new tt;let oe=null;const ve=new tt(0,0,0,0);return{setMask:function(Q){oe!==Q&&!U&&(i.colorMask(Q,Q,Q,Q),oe=Q)},setLocked:function(Q){U=Q},setClear:function(Q,$,Me,ze,gt){gt===!0&&(Q*=ze,$*=ze,Me*=ze),ne.set(Q,$,Me,ze),ve.equals(ne)===!1&&(i.clearColor(Q,$,Me,ze),ve.copy(ne))},reset:function(){U=!1,oe=null,ve.set(-1,0,0,0)}}}function n(){let U=!1,ne=!1,oe=null,ve=null,Q=null;return{setReversed:function($){if(ne!==$){const Me=e.get("EXT_clip_control");$?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),ne=$;const ze=Q;Q=null,this.setClear(ze)}},getReversed:function(){return ne},setTest:function($){$?J(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function($){oe!==$&&!U&&(i.depthMask($),oe=$)},setFunc:function($){if(ne&&($=zy[$]),ve!==$){switch($){case Cc:i.depthFunc(i.NEVER);break;case Ic:i.depthFunc(i.ALWAYS);break;case Pc:i.depthFunc(i.LESS);break;case zs:i.depthFunc(i.LEQUAL);break;case Lc:i.depthFunc(i.EQUAL);break;case Dc:i.depthFunc(i.GEQUAL);break;case Nc:i.depthFunc(i.GREATER);break;case Uc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=$}},setLocked:function($){U=$},setClear:function($){Q!==$&&(ne&&($=1-$),i.clearDepth($),Q=$)},reset:function(){U=!1,oe=null,ve=null,Q=null,ne=!1}}}function s(){let U=!1,ne=null,oe=null,ve=null,Q=null,$=null,Me=null,ze=null,gt=null;return{setTest:function(nt){U||(nt?J(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(nt){ne!==nt&&!U&&(i.stencilMask(nt),ne=nt)},setFunc:function(nt,Jn,kn){(oe!==nt||ve!==Jn||Q!==kn)&&(i.stencilFunc(nt,Jn,kn),oe=nt,ve=Jn,Q=kn)},setOp:function(nt,Jn,kn){($!==nt||Me!==Jn||ze!==kn)&&(i.stencilOp(nt,Jn,kn),$=nt,Me=Jn,ze=kn)},setLocked:function(nt){U=nt},setClear:function(nt){gt!==nt&&(i.clearStencil(nt),gt=nt)},reset:function(){U=!1,ne=null,oe=null,ve=null,Q=null,$=null,Me=null,ze=null,gt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,v=null,x=null,T=null,b=null,C=new me(0,0,0),D=0,w=!1,E=null,N=null,B=null,V=null,Y=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Z=0;const I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(I)[1]),q=Z>=1):I.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),q=Z>=2);let ie=null,de={};const be=i.getParameter(i.SCISSOR_BOX),qe=i.getParameter(i.VIEWPORT),Je=new tt().fromArray(be),ut=new tt().fromArray(qe);function je(U,ne,oe,ve){const Q=new Uint8Array(4),$=i.createTexture();i.bindTexture(U,$),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Me=0;Me<oe;Me++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(ne+Me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return $}const K={};K[i.TEXTURE_2D]=je(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(zs),Fe(!1),Se(Tu),J(i.CULL_FACE),xt(Ti);function J(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function pe(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Ne(U,ne){return h[U]!==ne?(i.bindFramebuffer(U,ne),h[U]=ne,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ne),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ee(U,ne){let oe=f,ve=!1;if(U){oe=d.get(ne),oe===void 0&&(oe=[],d.set(ne,oe));const Q=U.textures;if(oe.length!==Q.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let $=0,Me=Q.length;$<Me;$++)oe[$]=i.COLOR_ATTACHMENT0+$;oe.length=Q.length,ve=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,ve=!0);ve&&i.drawBuffers(oe)}function Ke(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const Vt={[Vi]:i.FUNC_ADD,[dp]:i.FUNC_SUBTRACT,[fp]:i.FUNC_REVERSE_SUBTRACT};Vt[pp]=i.MIN,Vt[mp]=i.MAX;const P={[gp]:i.ZERO,[_p]:i.ONE,[xp]:i.SRC_COLOR,[Ac]:i.SRC_ALPHA,[Ep]:i.SRC_ALPHA_SATURATE,[Sp]:i.DST_COLOR,[yp]:i.DST_ALPHA,[vp]:i.ONE_MINUS_SRC_COLOR,[Rc]:i.ONE_MINUS_SRC_ALPHA,[wp]:i.ONE_MINUS_DST_COLOR,[Mp]:i.ONE_MINUS_DST_ALPHA,[Tp]:i.CONSTANT_COLOR,[bp]:i.ONE_MINUS_CONSTANT_COLOR,[Ap]:i.CONSTANT_ALPHA,[Rp]:i.ONE_MINUS_CONSTANT_ALPHA};function xt(U,ne,oe,ve,Q,$,Me,ze,gt,nt){if(U===Ti){_===!0&&(pe(i.BLEND),_=!1);return}if(_===!1&&(J(i.BLEND),_=!0),U!==hp){if(U!==m||nt!==w){if((p!==Vi||x!==Vi)&&(i.blendEquation(i.FUNC_ADD),p=Vi,x=Vi),nt)switch(U){case Ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bu:i.blendFunc(i.ONE,i.ONE);break;case Au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ru:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Au:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ru:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,v=null,T=null,b=null,C.set(0,0,0),D=0,m=U,w=nt}return}Q=Q||ne,$=$||oe,Me=Me||ve,(ne!==p||Q!==x)&&(i.blendEquationSeparate(Vt[ne],Vt[Q]),p=ne,x=Q),(oe!==M||ve!==v||$!==T||Me!==b)&&(i.blendFuncSeparate(P[oe],P[ve],P[$],P[Me]),M=oe,v=ve,T=$,b=Me),(ze.equals(C)===!1||gt!==D)&&(i.blendColor(ze.r,ze.g,ze.b,gt),C.copy(ze),D=gt),m=U,w=!1}function ke(U,ne){U.side===Ht?pe(i.CULL_FACE):J(i.CULL_FACE);let oe=U.side===sn;ne&&(oe=!oe),Fe(oe),U.blending===Ns&&U.transparent===!1?xt(Ti):xt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const ve=U.stencilWrite;a.setTest(ve),ve&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),we(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(U){E!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),E=U)}function Se(U){U!==lp?(J(i.CULL_FACE),U!==N&&(U===Tu?i.cullFace(i.BACK):U===up?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),N=U}function vt(U){U!==B&&(q&&i.lineWidth(U),B=U)}function we(U,ne,oe){U?(J(i.POLYGON_OFFSET_FILL),(V!==ne||Y!==oe)&&(i.polygonOffset(ne,oe),V=ne,Y=oe)):pe(i.POLYGON_OFFSET_FILL)}function We(U){U?J(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function Nt(U){U===void 0&&(U=i.TEXTURE0+W-1),ie!==U&&(i.activeTexture(U),ie=U)}function At(U,ne,oe){oe===void 0&&(ie===null?oe=i.TEXTURE0+W-1:oe=ie);let ve=de[oe];ve===void 0&&(ve={type:void 0,texture:void 0},de[oe]=ve),(ve.type!==U||ve.texture!==ne)&&(ie!==oe&&(i.activeTexture(oe),ie=oe),i.bindTexture(U,ne||K[U]),ve.type=U,ve.texture=ne)}function R(){const U=de[ie];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(U){Je.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Je.copy(U))}function Ue(U){ut.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ut.copy(U))}function Re(U,ne){let oe=l.get(ne);oe===void 0&&(oe=new WeakMap,l.set(ne,oe));let ve=oe.get(U);ve===void 0&&(ve=i.getUniformBlockIndex(ne,U.name),oe.set(U,ve))}function ce(U,ne){const ve=l.get(ne).get(U);c.get(ne)!==ve&&(i.uniformBlockBinding(ne,ve,U.__bindingPointIndex),c.set(ne,ve))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ie=null,de={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,v=null,x=null,T=null,b=null,C=new me(0,0,0),D=0,w=!1,E=null,N=null,B=null,V=null,Y=null,Je.set(0,0,i.canvas.width,i.canvas.height),ut.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:pe,bindFramebuffer:Ne,drawBuffers:Ee,useProgram:Ke,setBlending:xt,setMaterial:ke,setFlipSided:Fe,setCullFace:Se,setLineWidth:vt,setPolygonOffset:we,setScissorTest:We,activeTexture:Nt,bindTexture:At,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:z,texImage2D:Ae,texImage3D:te,updateUBOMapping:Re,uniformBlockBinding:ce,texStorage2D:se,texStorage3D:Te,texSubImage2D:X,texSubImage3D:j,compressedTexSubImage2D:G,compressedTexSubImage3D:Ce,scissor:ue,viewport:Ue,reset:He}}function Hy(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new re,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,y){return f?new OffscreenCanvas(R,y):Hr("canvas")}function _(R,y,z){let X=1;const j=At(R);if((j.width>z||j.height>z)&&(X=z/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const G=Math.floor(X*j.width),Ce=Math.floor(X*j.height);h===void 0&&(h=g(G,Ce));const se=y?g(G,Ce):h;return se.width=G,se.height=Ce,se.getContext("2d").drawImage(R,0,0,G,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+G+"x"+Ce+")."),se}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(R,y,z,X,j=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let G=y;if(y===i.RED&&(z===i.FLOAT&&(G=i.R32F),z===i.HALF_FLOAT&&(G=i.R16F),z===i.UNSIGNED_BYTE&&(G=i.R8)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(G=i.R8UI),z===i.UNSIGNED_SHORT&&(G=i.R16UI),z===i.UNSIGNED_INT&&(G=i.R32UI),z===i.BYTE&&(G=i.R8I),z===i.SHORT&&(G=i.R16I),z===i.INT&&(G=i.R32I)),y===i.RG&&(z===i.FLOAT&&(G=i.RG32F),z===i.HALF_FLOAT&&(G=i.RG16F),z===i.UNSIGNED_BYTE&&(G=i.RG8)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(G=i.RG8UI),z===i.UNSIGNED_SHORT&&(G=i.RG16UI),z===i.UNSIGNED_INT&&(G=i.RG32UI),z===i.BYTE&&(G=i.RG8I),z===i.SHORT&&(G=i.RG16I),z===i.INT&&(G=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(G=i.RGB8UI),z===i.UNSIGNED_SHORT&&(G=i.RGB16UI),z===i.UNSIGNED_INT&&(G=i.RGB32UI),z===i.BYTE&&(G=i.RGB8I),z===i.SHORT&&(G=i.RGB16I),z===i.INT&&(G=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),z===i.UNSIGNED_INT&&(G=i.RGBA32UI),z===i.BYTE&&(G=i.RGBA8I),z===i.SHORT&&(G=i.RGBA16I),z===i.INT&&(G=i.RGBA32I)),y===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),y===i.RGBA){const Ce=j?sa:Qe.getTransfer(X);z===i.FLOAT&&(G=i.RGBA32F),z===i.HALF_FLOAT&&(G=i.RGBA16F),z===i.UNSIGNED_BYTE&&(G=Ce===dt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function x(R,y){let z;return R?y===null||y===Ki||y===Fr?z=i.DEPTH24_STENCIL8:y===Nn?z=i.DEPTH32F_STENCIL8:y===Ur&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ki||y===Fr?z=i.DEPTH_COMPONENT24:y===Nn?z=i.DEPTH_COMPONENT32F:y===Ur&&(z=i.DEPTH_COMPONENT16),z}function T(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==bt&&R.minFilter!==Ct?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function b(R){const y=R.target;y.removeEventListener("dispose",b),D(y),y.isVideoTexture&&u.delete(y)}function C(R){const y=R.target;y.removeEventListener("dispose",C),E(y)}function D(R){const y=n.get(R);if(y.__webglInit===void 0)return;const z=R.source,X=d.get(z);if(X){const j=X[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(R),Object.keys(X).length===0&&d.delete(z)}n.remove(R)}function w(R){const y=n.get(R);i.deleteTexture(y.__webglTexture);const z=R.source,X=d.get(z);delete X[y.__cacheKey],o.memory.textures--}function E(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let j=0;j<y.__webglFramebuffer[X].length;j++)i.deleteFramebuffer(y.__webglFramebuffer[X][j]);else i.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)i.deleteFramebuffer(y.__webglFramebuffer[X]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=R.textures;for(let X=0,j=z.length;X<j;X++){const G=n.get(z[X]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove(z[X])}n.remove(R)}let N=0;function B(){N=0}function V(){const R=N;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),N+=1,R}function Y(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function W(R,y){const z=n.get(R);if(R.isVideoTexture&&We(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const X=R.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,R,y);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function q(R,y){const z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){K(z,R,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function Z(R,y){const z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){K(z,R,y);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function I(R,y){const z=n.get(R);if(R.version>0&&z.__version!==R.version){J(z,R,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}const ie={[Dn]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},de={[bt]:i.NEAREST,[Ld]:i.NEAREST_MIPMAP_NEAREST,[Mr]:i.NEAREST_MIPMAP_LINEAR,[Ct]:i.LINEAR,[Yo]:i.LINEAR_MIPMAP_NEAREST,[dn]:i.LINEAR_MIPMAP_LINEAR},be={[qp]:i.NEVER,[jp]:i.ALWAYS,[Yp]:i.LESS,[Vd]:i.LEQUAL,[Kp]:i.EQUAL,[Jp]:i.GEQUAL,[$p]:i.GREATER,[Zp]:i.NOTEQUAL};function qe(R,y){if(y.type===Nn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ct||y.magFilter===Yo||y.magFilter===Mr||y.magFilter===dn||y.minFilter===Ct||y.minFilter===Yo||y.minFilter===Mr||y.minFilter===dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ie[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ie[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ie[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,de[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,de[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,be[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===bt||y.minFilter!==Mr&&y.minFilter!==dn||y.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Je(R,y){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",b));const X=y.source;let j=d.get(X);j===void 0&&(j={},d.set(X,j));const G=Y(y);if(G!==R.__cacheKey){j[G]===void 0&&(j[G]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),j[G].usedTimes++;const Ce=j[R.__cacheKey];Ce!==void 0&&(j[R.__cacheKey].usedTimes--,Ce.usedTimes===0&&w(y)),R.__cacheKey=G,R.__webglTexture=j[G].texture}return z}function ut(R,y,z){return Math.floor(Math.floor(R/z)/y)}function je(R,y,z,X){const G=R.updateRanges;if(G.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,z,X,y.data);else{G.sort((te,ue)=>te.start-ue.start);let Ce=0;for(let te=1;te<G.length;te++){const ue=G[Ce],Ue=G[te],Re=ue.start+ue.count,ce=ut(Ue.start,y.width,4),He=ut(ue.start,y.width,4);Ue.start<=Re+1&&ce===He&&ut(Ue.start+Ue.count-1,y.width,4)===ce?ue.count=Math.max(ue.count,Ue.start+Ue.count-ue.start):(++Ce,G[Ce]=Ue)}G.length=Ce+1;const se=i.getParameter(i.UNPACK_ROW_LENGTH),Te=i.getParameter(i.UNPACK_SKIP_PIXELS),Ae=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let te=0,ue=G.length;te<ue;te++){const Ue=G[te],Re=Math.floor(Ue.start/4),ce=Math.ceil(Ue.count/4),He=Re%y.width,U=Math.floor(Re/y.width),ne=ce,oe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,He),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,He,U,ne,oe,z,X,y.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function K(R,y,z){let X=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=i.TEXTURE_3D);const j=Je(R,y),G=y.source;t.bindTexture(X,R.__webglTexture,i.TEXTURE0+z);const Ce=n.get(G);if(G.version!==Ce.__version||j===!0){t.activeTexture(i.TEXTURE0+z);const se=Qe.getPrimaries(Qe.workingColorSpace),Te=y.colorSpace===Si?null:Qe.getPrimaries(y.colorSpace),Ae=y.colorSpace===Si||se===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let te=_(y.image,!1,s.maxTextureSize);te=Nt(y,te);const ue=r.convert(y.format,y.colorSpace),Ue=r.convert(y.type);let Re=v(y.internalFormat,ue,Ue,y.colorSpace,y.isVideoTexture);qe(X,y);let ce;const He=y.mipmaps,U=y.isVideoTexture!==!0,ne=Ce.__version===void 0||j===!0,oe=G.dataReady,ve=T(y,te);if(y.isDepthTexture)Re=x(y.format===Br,y.type),ne&&(U?t.texStorage2D(i.TEXTURE_2D,1,Re,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Re,te.width,te.height,0,ue,Ue,null));else if(y.isDataTexture)if(He.length>0){U&&ne&&t.texStorage2D(i.TEXTURE_2D,ve,Re,He[0].width,He[0].height);for(let Q=0,$=He.length;Q<$;Q++)ce=He[Q],U?oe&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ce.width,ce.height,ue,Ue,ce.data):t.texImage2D(i.TEXTURE_2D,Q,Re,ce.width,ce.height,0,ue,Ue,ce.data);y.generateMipmaps=!1}else U?(ne&&t.texStorage2D(i.TEXTURE_2D,ve,Re,te.width,te.height),oe&&je(y,te,ue,Ue)):t.texImage2D(i.TEXTURE_2D,0,Re,te.width,te.height,0,ue,Ue,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){U&&ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Re,He[0].width,He[0].height,te.depth);for(let Q=0,$=He.length;Q<$;Q++)if(ce=He[Q],y.format!==wn)if(ue!==null)if(U){if(oe)if(y.layerUpdates.size>0){const Me=Th(ce.width,ce.height,y.format,y.type);for(const ze of y.layerUpdates){const gt=ce.data.subarray(ze*Me/ce.data.BYTES_PER_ELEMENT,(ze+1)*Me/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,ze,ce.width,ce.height,1,ue,gt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,te.depth,ue,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Re,ce.width,ce.height,te.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,te.depth,ue,Ue,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Re,ce.width,ce.height,te.depth,0,ue,Ue,ce.data)}else{U&&ne&&t.texStorage2D(i.TEXTURE_2D,ve,Re,He[0].width,He[0].height);for(let Q=0,$=He.length;Q<$;Q++)ce=He[Q],y.format!==wn?ue!==null?U?oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ce.width,ce.height,ue,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Re,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?oe&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ce.width,ce.height,ue,Ue,ce.data):t.texImage2D(i.TEXTURE_2D,Q,Re,ce.width,ce.height,0,ue,Ue,ce.data)}else if(y.isDataArrayTexture)if(U){if(ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Re,te.width,te.height,te.depth),oe)if(y.layerUpdates.size>0){const Q=Th(te.width,te.height,y.format,y.type);for(const $ of y.layerUpdates){const Me=te.data.subarray($*Q/te.data.BYTES_PER_ELEMENT,($+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,te.width,te.height,1,ue,Ue,Me)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ue,Ue,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,te.width,te.height,te.depth,0,ue,Ue,te.data);else if(y.isData3DTexture)U?(ne&&t.texStorage3D(i.TEXTURE_3D,ve,Re,te.width,te.height,te.depth),oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ue,Ue,te.data)):t.texImage3D(i.TEXTURE_3D,0,Re,te.width,te.height,te.depth,0,ue,Ue,te.data);else if(y.isFramebufferTexture){if(ne)if(U)t.texStorage2D(i.TEXTURE_2D,ve,Re,te.width,te.height);else{let Q=te.width,$=te.height;for(let Me=0;Me<ve;Me++)t.texImage2D(i.TEXTURE_2D,Me,Re,Q,$,0,ue,Ue,null),Q>>=1,$>>=1}}else if(He.length>0){if(U&&ne){const Q=At(He[0]);t.texStorage2D(i.TEXTURE_2D,ve,Re,Q.width,Q.height)}for(let Q=0,$=He.length;Q<$;Q++)ce=He[Q],U?oe&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ue,Ue,ce):t.texImage2D(i.TEXTURE_2D,Q,Re,ue,Ue,ce);y.generateMipmaps=!1}else if(U){if(ne){const Q=At(te);t.texStorage2D(i.TEXTURE_2D,ve,Re,Q.width,Q.height)}oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Ue,te)}else t.texImage2D(i.TEXTURE_2D,0,Re,ue,Ue,te);m(y)&&p(X),Ce.__version=G.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function J(R,y,z){if(y.image.length!==6)return;const X=Je(R,y),j=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);const G=n.get(j);if(j.version!==G.__version||X===!0){t.activeTexture(i.TEXTURE0+z);const Ce=Qe.getPrimaries(Qe.workingColorSpace),se=y.colorSpace===Si?null:Qe.getPrimaries(y.colorSpace),Te=y.colorSpace===Si||Ce===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ae=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,ue=[];for(let $=0;$<6;$++)!Ae&&!te?ue[$]=_(y.image[$],!0,s.maxCubemapSize):ue[$]=te?y.image[$].image:y.image[$],ue[$]=Nt(y,ue[$]);const Ue=ue[0],Re=r.convert(y.format,y.colorSpace),ce=r.convert(y.type),He=v(y.internalFormat,Re,ce,y.colorSpace),U=y.isVideoTexture!==!0,ne=G.__version===void 0||X===!0,oe=j.dataReady;let ve=T(y,Ue);qe(i.TEXTURE_CUBE_MAP,y);let Q;if(Ae){U&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,He,Ue.width,Ue.height);for(let $=0;$<6;$++){Q=ue[$].mipmaps;for(let Me=0;Me<Q.length;Me++){const ze=Q[Me];y.format!==wn?Re!==null?U?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,0,0,ze.width,ze.height,Re,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,He,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,0,0,ze.width,ze.height,Re,ce,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,He,ze.width,ze.height,0,Re,ce,ze.data)}}}else{if(Q=y.mipmaps,U&&ne){Q.length>0&&ve++;const $=At(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,He,$.width,$.height)}for(let $=0;$<6;$++)if(te){U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ue[$].width,ue[$].height,Re,ce,ue[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,He,ue[$].width,ue[$].height,0,Re,ce,ue[$].data);for(let Me=0;Me<Q.length;Me++){const gt=Q[Me].image[$].image;U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,0,0,gt.width,gt.height,Re,ce,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,He,gt.width,gt.height,0,Re,ce,gt.data)}}else{U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Re,ce,ue[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,He,Re,ce,ue[$]);for(let Me=0;Me<Q.length;Me++){const ze=Q[Me];U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,0,0,Re,ce,ze.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,He,Re,ce,ze.image[$])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),G.__version=j.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function pe(R,y,z,X,j,G){const Ce=r.convert(z.format,z.colorSpace),se=r.convert(z.type),Te=v(z.internalFormat,Ce,se,z.colorSpace),Ae=n.get(y),te=n.get(z);if(te.__renderTarget=y,!Ae.__hasExternalTextures){const ue=Math.max(1,y.width>>G),Ue=Math.max(1,y.height>>G);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,G,Te,ue,Ue,y.depth,0,Ce,se,null):t.texImage2D(j,G,Te,ue,Ue,0,Ce,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),we(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,j,te.__webglTexture,0,vt(y)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,j,te.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(R,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){const X=y.depthTexture,j=X&&X.isDepthTexture?X.type:null,G=x(y.stencilBuffer,j),Ce=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=vt(y);we(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,G,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,G,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,G,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,R)}else{const X=y.textures;for(let j=0;j<X.length;j++){const G=X[j],Ce=r.convert(G.format,G.colorSpace),se=r.convert(G.type),Te=v(G.internalFormat,Ce,se,G.colorSpace),Ae=vt(y);z&&we(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,Te,y.width,y.height):we(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,Te,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Te,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(y.depthTexture);X.__renderTarget=y,(!X.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);const j=X.__webglTexture,G=vt(y);if(y.depthTexture.format===Or)we(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(y.depthTexture.format===Br)we(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ke(R){const y=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const X=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){const j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=X}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const X=R.texture.mipmaps;X&&X.length>0?Ee(y.__webglFramebuffer[0],R):Ee(y.__webglFramebuffer,R)}else if(z){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=i.createRenderbuffer(),Ne(y.__webglDepthbuffer[X],R,!1);else{const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=y.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,G)}}else{const X=R.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ne(y.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,G)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(R,y,z){const X=n.get(R);y!==void 0&&pe(X.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ke(R)}function P(R){const y=R.texture,z=n.get(R),X=n.get(y);R.addEventListener("dispose",C);const j=R.textures,G=R.isWebGLCubeRenderTarget===!0,Ce=j.length>1;if(Ce||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=y.version,o.memory.textures++),G){z.__webglFramebuffer=[];for(let se=0;se<6;se++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[se]=[];for(let Te=0;Te<y.mipmaps.length;Te++)z.__webglFramebuffer[se][Te]=i.createFramebuffer()}else z.__webglFramebuffer[se]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let se=0;se<y.mipmaps.length;se++)z.__webglFramebuffer[se]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let se=0,Te=j.length;se<Te;se++){const Ae=n.get(j[se]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&we(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let se=0;se<j.length;se++){const Te=j[se];z.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[se]);const Ae=r.convert(Te.format,Te.colorSpace),te=r.convert(Te.type),ue=v(Te.internalFormat,Ae,te,Te.colorSpace,R.isXRRenderTarget===!0),Ue=vt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,ue,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,z.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),qe(i.TEXTURE_CUBE_MAP,y);for(let se=0;se<6;se++)if(y.mipmaps&&y.mipmaps.length>0)for(let Te=0;Te<y.mipmaps.length;Te++)pe(z.__webglFramebuffer[se][Te],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te);else pe(z.__webglFramebuffer[se],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let se=0,Te=j.length;se<Te;se++){const Ae=j[se],te=n.get(Ae);let ue=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,te.__webglTexture),qe(ue,Ae),pe(z.__webglFramebuffer,R,Ae,i.COLOR_ATTACHMENT0+se,ue,0),m(Ae)&&p(ue)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,X.__webglTexture),qe(se,y),y.mipmaps&&y.mipmaps.length>0)for(let Te=0;Te<y.mipmaps.length;Te++)pe(z.__webglFramebuffer[Te],R,y,i.COLOR_ATTACHMENT0,se,Te);else pe(z.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,se,0);m(y)&&p(se),t.unbindTexture()}R.depthBuffer&&Ke(R)}function xt(R){const y=R.textures;for(let z=0,X=y.length;z<X;z++){const j=y[z];if(m(j)){const G=M(R),Ce=n.get(j).__webglTexture;t.bindTexture(G,Ce),p(G),t.unbindTexture()}}}const ke=[],Fe=[];function Se(R){if(R.samples>0){if(we(R)===!1){const y=R.textures,z=R.width,X=R.height;let j=i.COLOR_BUFFER_BIT;const G=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(R),se=y.length>1;if(se)for(let Ae=0;Ae<y.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Te=R.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ae=0;Ae<y.length;Ae++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ae]);const te=n.get(y[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,z,X,0,0,z,X,j,i.NEAREST),c===!0&&(ke.length=0,Fe.length=0,ke.push(i.COLOR_ATTACHMENT0+Ae),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ke.push(G),Fe.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let Ae=0;Ae<y.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ae]);const te=n.get(y[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function vt(R){return Math.min(s.maxSamples,R.samples)}function we(R){const y=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function We(R){const y=o.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function Nt(R,y){const z=R.colorSpace,X=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Qt&&z!==Si&&(Qe.getTransfer(z)===dt?(X!==wn||j!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function At(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=I,this.rebindTextures=Vt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=we}function Vy(i,e){function t(n,s=Si){let r;const o=Qe.getTransfer(s);if(n===Yn)return i.UNSIGNED_BYTE;if(n===Fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ol)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ud)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dd)return i.BYTE;if(n===Nd)return i.SHORT;if(n===Ur)return i.UNSIGNED_SHORT;if(n===Ul)return i.INT;if(n===Ki)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===to)return i.HALF_FLOAT;if(n===Od)return i.ALPHA;if(n===Bd)return i.RGB;if(n===wn)return i.RGBA;if(n===Or)return i.DEPTH_COMPONENT;if(n===Br)return i.DEPTH_STENCIL;if(n===Bl)return i.RED;if(n===zl)return i.RED_INTEGER;if(n===zd)return i.RG;if(n===kl)return i.RG_INTEGER;if(n===Hl)return i.RGBA_INTEGER;if(n===Ko||n===$o||n===Zo||n===Jo)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bc||n===zc||n===kc||n===Hc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vc||n===Gc||n===Wc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vc||n===Gc)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xc||n===qc||n===Yc||n===Kc||n===$c||n===Zc||n===Jc||n===jc||n===Qc||n===el||n===tl||n===nl||n===il||n===sl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$c)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===el)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rl||n===ol||n===al)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===rl)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cl||n===ll||n===ul||n===hl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===cl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ul)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wy=`
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

}`;class Xy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new sf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hi({vertexShader:Gy,fragmentShader:Wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pe(new mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qy extends ji{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Xy,p={},M=t.getContextAttributes();let v=null,x=null;const T=[],b=[],C=new re;let D=null;const w=new Jt;w.viewport=new tt;const E=new Jt;E.viewport=new tt;const N=[w,E],B=new J0;let V=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=T[K];return J===void 0&&(J=new $a,T[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=T[K];return J===void 0&&(J=new $a,T[K]=J),J.getGripSpace()},this.getHand=function(K){let J=T[K];return J===void 0&&(J=new $a,T[K]=J),J.getHandSpace()};function W(K){const J=b.indexOf(K.inputSource);if(J===-1)return;const pe=T[J];pe!==void 0&&(pe.update(K.inputSource,K.frame,l||o),pe.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",Z);for(let K=0;K<T.length;K++){const J=b[K];J!==null&&(b[K]=null,T[K].disconnect(J))}V=null,Y=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(v),f=null,d=null,h=null,s=null,x=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",q),s.addEventListener("inputsourceschange",Z),M.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ne=null,Ee=null;M.depth&&(Ee=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=M.stencil?Br:Or,Ne=M.stencil?Fr:Ki);const Ke={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ke),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new $i(d.textureWidth,d.textureHeight,{format:wn,type:Yn,depthTexture:new nf(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new $i(f.framebufferWidth,f.framebufferHeight,{format:wn,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(K){for(let J=0;J<K.removed.length;J++){const pe=K.removed[J],Ne=b.indexOf(pe);Ne>=0&&(b[Ne]=null,T[Ne].disconnect(pe))}for(let J=0;J<K.added.length;J++){const pe=K.added[J];let Ne=b.indexOf(pe);if(Ne===-1){for(let Ke=0;Ke<T.length;Ke++)if(Ke>=b.length){b.push(pe),Ne=Ke;break}else if(b[Ke]===null){b[Ke]=pe,Ne=Ke;break}if(Ne===-1)break}const Ee=T[Ne];Ee&&Ee.connect(pe)}}const I=new A,ie=new A;function de(K,J,pe){I.setFromMatrixPosition(J.matrixWorld),ie.setFromMatrixPosition(pe.matrixWorld);const Ne=I.distanceTo(ie),Ee=J.projectionMatrix.elements,Ke=pe.projectionMatrix.elements,Vt=Ee[14]/(Ee[10]-1),P=Ee[14]/(Ee[10]+1),xt=(Ee[9]+1)/Ee[5],ke=(Ee[9]-1)/Ee[5],Fe=(Ee[8]-1)/Ee[0],Se=(Ke[8]+1)/Ke[0],vt=Vt*Fe,we=Vt*Se,We=Ne/(-Fe+Se),Nt=We*-Fe;if(J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Nt),K.translateZ(We),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ee[10]===-1)K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const At=Vt+We,R=P+We,y=vt-Nt,z=we+(Ne-Nt),X=xt*P/R*At,j=ke*P/R*At;K.projectionMatrix.makePerspective(y,z,X,j,At,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function be(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let J=K.near,pe=K.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),B.near=E.near=w.near=J,B.far=E.far=w.far=pe,(V!==B.near||Y!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),V=B.near,Y=B.far),B.layers.mask=K.layers.mask|6,w.layers.mask=B.layers.mask&3,E.layers.mask=B.layers.mask&5;const Ne=K.parent,Ee=B.cameras;be(B,Ne);for(let Ke=0;Ke<Ee.length;Ke++)be(Ee[Ke],Ne);Ee.length===2?de(B,w,E):B.projectionMatrix.copy(w.projectionMatrix),qe(K,B,Ne)};function qe(K,J,pe){pe===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(pe.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Vs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(K){return p[K]};let Je=null;function ut(K,J){if(u=J.getViewerPose(l||o),g=J,u!==null){const pe=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ne=!1;pe.length!==B.cameras.length&&(B.cameras.length=0,Ne=!0);for(let P=0;P<pe.length;P++){const xt=pe[P];let ke=null;if(f!==null)ke=f.getViewport(xt);else{const Se=h.getViewSubImage(d,xt);ke=Se.viewport,P===0&&(e.setRenderTargetTextures(x,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(x))}let Fe=N[P];Fe===void 0&&(Fe=new Jt,Fe.layers.enable(P),Fe.viewport=new tt,N[P]=Fe),Fe.matrix.fromArray(xt.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(xt.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(ke.x,ke.y,ke.width,ke.height),P===0&&(B.matrix.copy(Fe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ne===!0&&B.cameras.push(Fe)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const P=h.getDepthInformation(pe[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(Ee&&Ee.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let P=0;P<pe.length;P++){const xt=pe[P].camera;if(xt){let ke=p[xt];ke||(ke=new sf,p[xt]=ke);const Fe=h.getCameraImage(xt);ke.sourceTexture=Fe}}}}for(let pe=0;pe<T.length;pe++){const Ne=b[pe],Ee=T[pe];Ne!==null&&Ee!==void 0&&Ee.update(Ne,J,l||o)}Je&&Je(K,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const je=new vf;je.setAnimationLoop(ut),this.setAnimationLoop=function(K){Je=K},this.dispose=function(){}}}const Fi=new Kn,Yy=new Be;function Ky(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Kd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),v=M.envMap,x=M.envMapRotation;v&&(m.envMap.value=v,Fi.copy(x),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(Fi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $y(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){const x=v.program;n.uniformBlockBinding(M,x)}function l(M,v){let x=s[M.id];x===void 0&&(g(M),x=u(M),s[M.id]=x,M.addEventListener("dispose",m));const T=v.program;n.updateUBOMapping(M,T);const b=e.render.frame;r[M.id]!==b&&(d(M),r[M.id]=b)}function u(M){const v=h();M.__bindingPointIndex=v;const x=i.createBuffer(),T=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=s[M.id],x=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,C=x.length;b<C;b++){const D=Array.isArray(x[b])?x[b]:[x[b]];for(let w=0,E=D.length;w<E;w++){const N=D[w];if(f(N,b,w,T)===!0){const B=N.__offset,V=Array.isArray(N.value)?N.value:[N.value];let Y=0;for(let W=0;W<V.length;W++){const q=V[W],Z=_(q);typeof q=="number"||typeof q=="boolean"?(N.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,B+Y,N.__data)):q.isMatrix3?(N.__data[0]=q.elements[0],N.__data[1]=q.elements[1],N.__data[2]=q.elements[2],N.__data[3]=0,N.__data[4]=q.elements[3],N.__data[5]=q.elements[4],N.__data[6]=q.elements[5],N.__data[7]=0,N.__data[8]=q.elements[6],N.__data[9]=q.elements[7],N.__data[10]=q.elements[8],N.__data[11]=0):(q.toArray(N.__data,Y),Y+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,v,x,T){const b=M.value,C=v+"_"+x;if(T[C]===void 0)return typeof b=="number"||typeof b=="boolean"?T[C]=b:T[C]=b.clone(),!0;{const D=T[C];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return T[C]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function g(M){const v=M.uniforms;let x=0;const T=16;for(let C=0,D=v.length;C<D;C++){const w=Array.isArray(v[C])?v[C]:[v[C]];for(let E=0,N=w.length;E<N;E++){const B=w[E],V=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,W=V.length;Y<W;Y++){const q=V[Y],Z=_(q),I=x%T,ie=I%Z.boundary,de=I+ie;x+=ie,de!==0&&T-de<Z.storage&&(x+=T-de),B.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=Z.storage}}}const b=x%T;return b>0&&(x+=T-b),M.__size=x,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Zy{constructor(e={}){const{canvas:t=mm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let T=!1;this._outputColorSpace=at;let b=0,C=0,D=null,w=-1,E=null;const N=new tt,B=new tt;let V=null;const Y=new me(0);let W=0,q=t.width,Z=t.height,I=1,ie=null,de=null;const be=new tt(0,0,q,Z),qe=new tt(0,0,q,Z);let Je=!1;const ut=new Kl;let je=!1,K=!1;const J=new Be,pe=new A,Ne=new tt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function Vt(){return D===null?I:1}let P=n;function xt(S,F){return t.getContext(S,F)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nl}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",Q,!1),P===null){const F="webgl2";if(P=xt(F,S),P===null)throw xt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ke,Fe,Se,vt,we,We,Nt,At,R,y,z,X,j,G,Ce,se,Te,Ae,te,ue,Ue,Re,ce,He;function U(){ke=new ov(P),ke.init(),Re=new Vy(P,ke),Fe=new Qx(P,ke,e,Re),Se=new ky(P,ke),Fe.reversedDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),vt=new lv(P),we=new Ay,We=new Hy(P,ke,Se,we,Fe,Re,vt),Nt=new tv(x),At=new rv(x),R=new mg(P),ce=new Jx(P,R),y=new av(P,R,vt,ce),z=new hv(P,y,R,vt),te=new uv(P,Fe,We),se=new ev(we),X=new by(x,Nt,At,ke,Fe,ce,se),j=new Ky(x,we),G=new Cy,Ce=new Uy(ke),Ae=new Zx(x,Nt,At,Se,z,f,c),Te=new By(x,z,Fe),He=new $y(P,vt,Fe,Se),ue=new jx(P,ke,vt),Ue=new cv(P,ke,vt),vt.programs=X.programs,x.capabilities=Fe,x.extensions=ke,x.properties=we,x.renderLists=G,x.shadowMap=Te,x.state=Se,x.info=vt}U();const ne=new qy(x,P);this.xr=ne,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=ke.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ke.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(S){S!==void 0&&(I=S,this.setSize(q,Z,!1))},this.getSize=function(S){return S.set(q,Z)},this.setSize=function(S,F,k=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,Z=F,t.width=Math.floor(S*I),t.height=Math.floor(F*I),k===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(q*I,Z*I).floor()},this.setDrawingBufferSize=function(S,F,k){q=S,Z=F,I=k,t.width=Math.floor(S*k),t.height=Math.floor(F*k),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(N)},this.getViewport=function(S){return S.copy(be)},this.setViewport=function(S,F,k,H){S.isVector4?be.set(S.x,S.y,S.z,S.w):be.set(S,F,k,H),Se.viewport(N.copy(be).multiplyScalar(I).round())},this.getScissor=function(S){return S.copy(qe)},this.setScissor=function(S,F,k,H){S.isVector4?qe.set(S.x,S.y,S.z,S.w):qe.set(S,F,k,H),Se.scissor(B.copy(qe).multiplyScalar(I).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(S){Se.setScissorTest(Je=S)},this.setOpaqueSort=function(S){ie=S},this.setTransparentSort=function(S){de=S},this.getClearColor=function(S){return S.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,k=!0){let H=0;if(S){let O=!1;if(D!==null){const ee=D.texture.format;O=ee===Hl||ee===kl||ee===zl}if(O){const ee=D.texture.type,le=ee===Yn||ee===Ki||ee===Ur||ee===Fr||ee===Fl||ee===Ol,ye=Ae.getClearColor(),_e=Ae.getClearAlpha(),De=ye.r,Oe=ye.g,Ie=ye.b;le?(g[0]=De,g[1]=Oe,g[2]=Ie,g[3]=_e,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=De,_[1]=Oe,_[2]=Ie,_[3]=_e,P.clearBufferiv(P.COLOR,0,_))}else H|=P.COLOR_BUFFER_BIT}F&&(H|=P.DEPTH_BUFFER_BIT),k&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Ae.dispose(),G.dispose(),Ce.dispose(),we.dispose(),Nt.dispose(),At.dispose(),z.dispose(),ce.dispose(),He.dispose(),X.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",kn),ne.removeEventListener("sessionend",vu),Ci.stop()};function oe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=vt.autoReset,F=Te.enabled,k=Te.autoUpdate,H=Te.needsUpdate,O=Te.type;U(),vt.autoReset=S,Te.enabled=F,Te.autoUpdate=k,Te.needsUpdate=H,Te.type=O}function Q(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function $(S){const F=S.target;F.removeEventListener("dispose",$),Me(F)}function Me(S){ze(S),we.remove(S)}function ze(S){const F=we.get(S).programs;F!==void 0&&(F.forEach(function(k){X.releaseProgram(k)}),S.isShaderMaterial&&X.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,k,H,O,ee){F===null&&(F=Ee);const le=O.isMesh&&O.matrixWorld.determinant()<0,ye=ip(S,F,k,H,O);Se.setMaterial(H,le);let _e=k.index,De=1;if(H.wireframe===!0){if(_e=y.getWireframeAttribute(k),_e===void 0)return;De=2}const Oe=k.drawRange,Ie=k.attributes.position;let Ze=Oe.start*De,ht=(Oe.start+Oe.count)*De;ee!==null&&(Ze=Math.max(Ze,ee.start*De),ht=Math.min(ht,(ee.start+ee.count)*De)),_e!==null?(Ze=Math.max(Ze,0),ht=Math.min(ht,_e.count)):Ie!=null&&(Ze=Math.max(Ze,0),ht=Math.min(ht,Ie.count));const Tt=ht-Ze;if(Tt<0||Tt===1/0)return;ce.setup(O,H,ye,k,_e);let _t,pt=ue;if(_e!==null&&(_t=R.get(_e),pt=Ue,pt.setIndex(_t)),O.isMesh)H.wireframe===!0?(Se.setLineWidth(H.wireframeLinewidth*Vt()),pt.setMode(P.LINES)):pt.setMode(P.TRIANGLES);else if(O.isLine){let Le=H.linewidth;Le===void 0&&(Le=1),Se.setLineWidth(Le*Vt()),O.isLineSegments?pt.setMode(P.LINES):O.isLineLoop?pt.setMode(P.LINE_LOOP):pt.setMode(P.LINE_STRIP)}else O.isPoints?pt.setMode(P.POINTS):O.isSprite&&pt.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Vr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))pt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Le=O._multiDrawStarts,yt=O._multiDrawCounts,et=O._multiDrawCount,on=_e?R.get(_e).bytesPerElement:1,es=we.get(H).currentProgram.getUniforms();for(let an=0;an<et;an++)es.setValue(P,"_gl_DrawID",an),pt.render(Le[an]/on,yt[an])}else if(O.isInstancedMesh)pt.renderInstances(Ze,Tt,O.count);else if(k.isInstancedBufferGeometry){const Le=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,yt=Math.min(k.instanceCount,Le);pt.renderInstances(Ze,Tt,yt)}else pt.render(Ze,Tt)};function gt(S,F,k){S.transparent===!0&&S.side===Ht&&S.forceSinglePass===!1?(S.side=sn,S.needsUpdate=!0,co(S,F,k),S.side=ui,S.needsUpdate=!0,co(S,F,k),S.side=Ht):co(S,F,k)}this.compile=function(S,F,k=null){k===null&&(k=S),p=Ce.get(k),p.init(F),v.push(p),k.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),S!==k&&S.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const H=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ee=O.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){const ye=ee[le];gt(ye,k,O),H.add(ye)}else gt(ee,k,O),H.add(ee)}),p=v.pop(),H},this.compileAsync=function(S,F,k=null){const H=this.compile(S,F,k);return new Promise(O=>{function ee(){if(H.forEach(function(le){we.get(le).currentProgram.isReady()&&H.delete(le)}),H.size===0){O(S);return}setTimeout(ee,10)}ke.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let nt=null;function Jn(S){nt&&nt(S)}function kn(){Ci.stop()}function vu(){Ci.start()}const Ci=new vf;Ci.setAnimationLoop(Jn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(S){nt=S,ne.setAnimationLoop(S),S===null?Ci.stop():Ci.start()},ne.addEventListener("sessionstart",kn),ne.addEventListener("sessionend",vu),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(F),F=ne.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,F,D),p=Ce.get(S,v.length),p.init(F),v.push(p),J.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ut.setFromProjectionMatrix(J,Wn,F.reversedDepth),K=this.localClippingEnabled,je=se.init(this.clippingPlanes,K),m=G.get(S,M.length),m.init(),M.push(m),ne.enabled===!0&&ne.isPresenting===!0){const ee=x.xr.getDepthSensingMesh();ee!==null&&ba(ee,F,-1/0,x.sortObjects)}ba(S,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ie,de),Ke=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Ke&&Ae.addToRenderList(m,S),this.info.render.frame++,je===!0&&se.beginShadows();const k=p.state.shadowsArray;Te.render(k,S,F),je===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ee=F.cameras;if(O.length>0)for(let le=0,ye=ee.length;le<ye;le++){const _e=ee[le];Mu(H,O,S,_e)}Ke&&Ae.render(S);for(let le=0,ye=ee.length;le<ye;le++){const _e=ee[le];yu(m,S,_e,_e.viewport)}}else O.length>0&&Mu(H,O,S,F),Ke&&Ae.render(S),yu(m,S,F);D!==null&&C===0&&(We.updateMultisampleRenderTarget(D),We.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(x,S,F),ce.resetDefaultState(),w=-1,E=null,v.pop(),v.length>0?(p=v[v.length-1],je===!0&&se.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function ba(S,F,k,H){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ut.intersectsSprite(S)){H&&Ne.setFromMatrixPosition(S.matrixWorld).applyMatrix4(J);const le=z.update(S),ye=S.material;ye.visible&&m.push(S,le,ye,k,Ne.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ut.intersectsObject(S))){const le=z.update(S),ye=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ne.copy(S.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ne.copy(le.boundingSphere.center)),Ne.applyMatrix4(S.matrixWorld).applyMatrix4(J)),Array.isArray(ye)){const _e=le.groups;for(let De=0,Oe=_e.length;De<Oe;De++){const Ie=_e[De],Ze=ye[Ie.materialIndex];Ze&&Ze.visible&&m.push(S,le,Ze,k,Ne.z,Ie)}}else ye.visible&&m.push(S,le,ye,k,Ne.z,null)}}const ee=S.children;for(let le=0,ye=ee.length;le<ye;le++)ba(ee[le],F,k,H)}function yu(S,F,k,H){const O=S.opaque,ee=S.transmissive,le=S.transparent;p.setupLightsView(k),je===!0&&se.setGlobalState(x.clippingPlanes,k),H&&Se.viewport(N.copy(H)),O.length>0&&ao(O,F,k),ee.length>0&&ao(ee,F,k),le.length>0&&ao(le,F,k),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Mu(S,F,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new $i(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?to:Yn,minFilter:dn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ee=p.state.transmissionRenderTarget[H.id],le=H.viewport||N;ee.setSize(le.z*x.transmissionResolutionScale,le.w*x.transmissionResolutionScale);const ye=x.getRenderTarget(),_e=x.getActiveCubeFace(),De=x.getActiveMipmapLevel();x.setRenderTarget(ee),x.getClearColor(Y),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Ke&&Ae.render(k);const Oe=x.toneMapping;x.toneMapping=bi;const Ie=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),je===!0&&se.setGlobalState(x.clippingPlanes,H),ao(S,k,H),We.updateMultisampleRenderTarget(ee),We.updateRenderTargetMipmap(ee),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let ht=0,Tt=F.length;ht<Tt;ht++){const _t=F[ht],pt=_t.object,Le=_t.geometry,yt=_t.material,et=_t.group;if(yt.side===Ht&&pt.layers.test(H.layers)){const on=yt.side;yt.side=sn,yt.needsUpdate=!0,Su(pt,k,H,Le,yt,et),yt.side=on,yt.needsUpdate=!0,Ze=!0}}Ze===!0&&(We.updateMultisampleRenderTarget(ee),We.updateRenderTargetMipmap(ee))}x.setRenderTarget(ye,_e,De),x.setClearColor(Y,W),Ie!==void 0&&(H.viewport=Ie),x.toneMapping=Oe}function ao(S,F,k){const H=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ee=S.length;O<ee;O++){const le=S[O],ye=le.object,_e=le.geometry,De=le.group;let Oe=le.material;Oe.allowOverride===!0&&H!==null&&(Oe=H),ye.layers.test(k.layers)&&Su(ye,F,k,_e,Oe,De)}}function Su(S,F,k,H,O,ee){S.onBeforeRender(x,F,k,H,O,ee),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(x,F,k,H,S,ee),O.transparent===!0&&O.side===Ht&&O.forceSinglePass===!1?(O.side=sn,O.needsUpdate=!0,x.renderBufferDirect(k,F,H,O,S,ee),O.side=ui,O.needsUpdate=!0,x.renderBufferDirect(k,F,H,O,S,ee),O.side=Ht):x.renderBufferDirect(k,F,H,O,S,ee),S.onAfterRender(x,F,k,H,O,ee)}function co(S,F,k){F.isScene!==!0&&(F=Ee);const H=we.get(S),O=p.state.lights,ee=p.state.shadowsArray,le=O.state.version,ye=X.getParameters(S,O.state,ee,F,k),_e=X.getProgramCacheKey(ye);let De=H.programs;H.environment=S.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(S.isMeshStandardMaterial?At:Nt).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,De===void 0&&(S.addEventListener("dispose",$),De=new Map,H.programs=De);let Oe=De.get(_e);if(Oe!==void 0){if(H.currentProgram===Oe&&H.lightsStateVersion===le)return Eu(S,ye),Oe}else ye.uniforms=X.getUniforms(S),S.onBeforeCompile(ye,x),Oe=X.acquireProgram(ye,_e),De.set(_e,Oe),H.uniforms=ye.uniforms;const Ie=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ie.clippingPlanes=se.uniform),Eu(S,ye),H.needsLights=rp(S),H.lightsStateVersion=le,H.needsLights&&(Ie.ambientLightColor.value=O.state.ambient,Ie.lightProbe.value=O.state.probe,Ie.directionalLights.value=O.state.directional,Ie.directionalLightShadows.value=O.state.directionalShadow,Ie.spotLights.value=O.state.spot,Ie.spotLightShadows.value=O.state.spotShadow,Ie.rectAreaLights.value=O.state.rectArea,Ie.ltc_1.value=O.state.rectAreaLTC1,Ie.ltc_2.value=O.state.rectAreaLTC2,Ie.pointLights.value=O.state.point,Ie.pointLightShadows.value=O.state.pointShadow,Ie.hemisphereLights.value=O.state.hemi,Ie.directionalShadowMap.value=O.state.directionalShadowMap,Ie.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ie.spotShadowMap.value=O.state.spotShadowMap,Ie.spotLightMatrix.value=O.state.spotLightMatrix,Ie.spotLightMap.value=O.state.spotLightMap,Ie.pointShadowMap.value=O.state.pointShadowMap,Ie.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Oe,H.uniformsList=null,Oe}function wu(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=jo.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Eu(S,F){const k=we.get(S);k.outputColorSpace=F.outputColorSpace,k.batching=F.batching,k.batchingColor=F.batchingColor,k.instancing=F.instancing,k.instancingColor=F.instancingColor,k.instancingMorph=F.instancingMorph,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function ip(S,F,k,H,O){F.isScene!==!0&&(F=Ee),We.resetTextureUnits();const ee=F.fog,le=H.isMeshStandardMaterial?F.environment:null,ye=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Qt,_e=(H.isMeshStandardMaterial?At:Nt).get(H.envMap||le),De=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Oe=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ie=!!k.morphAttributes.position,Ze=!!k.morphAttributes.normal,ht=!!k.morphAttributes.color;let Tt=bi;H.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Tt=x.toneMapping);const _t=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,pt=_t!==void 0?_t.length:0,Le=we.get(H),yt=p.state.lights;if(je===!0&&(K===!0||S!==E)){const Kt=S===E&&H.id===w;se.setState(H,S,Kt)}let et=!1;H.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==yt.state.version||Le.outputColorSpace!==ye||O.isBatchedMesh&&Le.batching===!1||!O.isBatchedMesh&&Le.batching===!0||O.isBatchedMesh&&Le.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Le.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Le.instancing===!1||!O.isInstancedMesh&&Le.instancing===!0||O.isSkinnedMesh&&Le.skinning===!1||!O.isSkinnedMesh&&Le.skinning===!0||O.isInstancedMesh&&Le.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Le.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Le.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Le.instancingMorph===!1&&O.morphTexture!==null||Le.envMap!==_e||H.fog===!0&&Le.fog!==ee||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==se.numPlanes||Le.numIntersection!==se.numIntersection)||Le.vertexAlphas!==De||Le.vertexTangents!==Oe||Le.morphTargets!==Ie||Le.morphNormals!==Ze||Le.morphColors!==ht||Le.toneMapping!==Tt||Le.morphTargetsCount!==pt)&&(et=!0):(et=!0,Le.__version=H.version);let on=Le.currentProgram;et===!0&&(on=co(H,F,O));let es=!1,an=!1,cr=!1;const Mt=on.getUniforms(),gn=Le.uniforms;if(Se.useProgram(on.program)&&(es=!0,an=!0,cr=!0),H.id!==w&&(w=H.id,an=!0),es||E!==S){Se.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Mt.setValue(P,"projectionMatrix",S.projectionMatrix),Mt.setValue(P,"viewMatrix",S.matrixWorldInverse);const en=Mt.map.cameraPosition;en!==void 0&&en.setValue(P,pe.setFromMatrixPosition(S.matrixWorld)),Fe.logarithmicDepthBuffer&&Mt.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Mt.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,an=!0,cr=!0)}if(O.isSkinnedMesh){Mt.setOptional(P,O,"bindMatrix"),Mt.setOptional(P,O,"bindMatrixInverse");const Kt=O.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Mt.setValue(P,"boneTexture",Kt.boneTexture,We))}O.isBatchedMesh&&(Mt.setOptional(P,O,"batchingTexture"),Mt.setValue(P,"batchingTexture",O._matricesTexture,We),Mt.setOptional(P,O,"batchingIdTexture"),Mt.setValue(P,"batchingIdTexture",O._indirectTexture,We),Mt.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&Mt.setValue(P,"batchingColorTexture",O._colorsTexture,We));const _n=k.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&te.update(O,k,on),(an||Le.receiveShadow!==O.receiveShadow)&&(Le.receiveShadow=O.receiveShadow,Mt.setValue(P,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(gn.envMap.value=_e,gn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(gn.envMapIntensity.value=F.environmentIntensity),an&&(Mt.setValue(P,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&sp(gn,cr),ee&&H.fog===!0&&j.refreshFogUniforms(gn,ee),j.refreshMaterialUniforms(gn,H,I,Z,p.state.transmissionRenderTarget[S.id]),jo.upload(P,wu(Le),gn,We)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(jo.upload(P,wu(Le),gn,We),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Mt.setValue(P,"center",O.center),Mt.setValue(P,"modelViewMatrix",O.modelViewMatrix),Mt.setValue(P,"normalMatrix",O.normalMatrix),Mt.setValue(P,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Kt=H.uniformsGroups;for(let en=0,Aa=Kt.length;en<Aa;en++){const Ii=Kt[en];He.update(Ii,on),He.bind(Ii,on)}}return on}function sp(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function rp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,F,k){const H=we.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),we.get(S.texture).__webglTexture=F,we.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:k,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const k=we.get(S);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0};const op=P.createFramebuffer();this.setRenderTarget=function(S,F=0,k=0){D=S,b=F,C=k;let H=!0,O=null,ee=!1,le=!1;if(S){const _e=we.get(S);if(_e.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(_e.__webglFramebuffer===void 0)We.setupRenderTarget(S);else if(_e.__hasExternalTextures)We.rebindTextures(S,we.get(S.texture).__webglTexture,we.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ie=S.depthTexture;if(_e.__boundDepthTexture!==Ie){if(Ie!==null&&we.has(Ie)&&(S.width!==Ie.image.width||S.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(S)}}const De=S.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(le=!0);const Oe=we.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Oe[F])?O=Oe[F][k]:O=Oe[F],ee=!0):S.samples>0&&We.useMultisampledRTT(S)===!1?O=we.get(S).__webglMultisampledFramebuffer:Array.isArray(Oe)?O=Oe[k]:O=Oe,N.copy(S.viewport),B.copy(S.scissor),V=S.scissorTest}else N.copy(be).multiplyScalar(I).floor(),B.copy(qe).multiplyScalar(I).floor(),V=Je;if(k!==0&&(O=op),Se.bindFramebuffer(P.FRAMEBUFFER,O)&&H&&Se.drawBuffers(S,O),Se.viewport(N),Se.scissor(B),Se.setScissorTest(V),ee){const _e=we.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,_e.__webglTexture,k)}else if(le){const _e=F;for(let De=0;De<S.textures.length;De++){const Oe=we.get(S.textures[De]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+De,Oe.__webglTexture,k,_e)}}else if(S!==null&&k!==0){const _e=we.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,_e.__webglTexture,k)}w=-1},this.readRenderTargetPixels=function(S,F,k,H,O,ee,le,ye=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=we.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&le!==void 0&&(_e=_e[le]),_e){Se.bindFramebuffer(P.FRAMEBUFFER,_e);try{const De=S.textures[ye],Oe=De.format,Ie=De.type;if(!Fe.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-H&&k>=0&&k<=S.height-O&&(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ye),P.readPixels(F,k,H,O,Re.convert(Oe),Re.convert(Ie),ee))}finally{const De=D!==null?we.get(D).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(S,F,k,H,O,ee,le,ye=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=we.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&le!==void 0&&(_e=_e[le]),_e)if(F>=0&&F<=S.width-H&&k>=0&&k<=S.height-O){Se.bindFramebuffer(P.FRAMEBUFFER,_e);const De=S.textures[ye],Oe=De.format,Ie=De.type;if(!Fe.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ze),P.bufferData(P.PIXEL_PACK_BUFFER,ee.byteLength,P.STREAM_READ),S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ye),P.readPixels(F,k,H,O,Re.convert(Oe),Re.convert(Ie),0);const ht=D!==null?we.get(D).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,ht);const Tt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await gm(P,Tt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ze),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ee),P.deleteBuffer(Ze),P.deleteSync(Tt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,k=0){const H=Math.pow(2,-k),O=Math.floor(S.image.width*H),ee=Math.floor(S.image.height*H),le=F!==null?F.x:0,ye=F!==null?F.y:0;We.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,le,ye,O,ee),Se.unbindTexture()};const ap=P.createFramebuffer(),cp=P.createFramebuffer();this.copyTextureToTexture=function(S,F,k=null,H=null,O=0,ee=null){ee===null&&(O!==0?(Vr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=O,O=0):ee=0);let le,ye,_e,De,Oe,Ie,Ze,ht,Tt;const _t=S.isCompressedTexture?S.mipmaps[ee]:S.image;if(k!==null)le=k.max.x-k.min.x,ye=k.max.y-k.min.y,_e=k.isBox3?k.max.z-k.min.z:1,De=k.min.x,Oe=k.min.y,Ie=k.isBox3?k.min.z:0;else{const _n=Math.pow(2,-O);le=Math.floor(_t.width*_n),ye=Math.floor(_t.height*_n),S.isDataArrayTexture?_e=_t.depth:S.isData3DTexture?_e=Math.floor(_t.depth*_n):_e=1,De=0,Oe=0,Ie=0}H!==null?(Ze=H.x,ht=H.y,Tt=H.z):(Ze=0,ht=0,Tt=0);const pt=Re.convert(F.format),Le=Re.convert(F.type);let yt;F.isData3DTexture?(We.setTexture3D(F,0),yt=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(We.setTexture2DArray(F,0),yt=P.TEXTURE_2D_ARRAY):(We.setTexture2D(F,0),yt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const et=P.getParameter(P.UNPACK_ROW_LENGTH),on=P.getParameter(P.UNPACK_IMAGE_HEIGHT),es=P.getParameter(P.UNPACK_SKIP_PIXELS),an=P.getParameter(P.UNPACK_SKIP_ROWS),cr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,_t.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_t.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,De),P.pixelStorei(P.UNPACK_SKIP_ROWS,Oe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ie);const Mt=S.isDataArrayTexture||S.isData3DTexture,gn=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const _n=we.get(S),Kt=we.get(F),en=we.get(_n.__renderTarget),Aa=we.get(Kt.__renderTarget);Se.bindFramebuffer(P.READ_FRAMEBUFFER,en.__webglFramebuffer),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,Aa.__webglFramebuffer);for(let Ii=0;Ii<_e;Ii++)Mt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,we.get(S).__webglTexture,O,Ie+Ii),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,we.get(F).__webglTexture,ee,Tt+Ii)),P.blitFramebuffer(De,Oe,le,ye,Ze,ht,le,ye,P.DEPTH_BUFFER_BIT,P.NEAREST);Se.bindFramebuffer(P.READ_FRAMEBUFFER,null),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||S.isRenderTargetTexture||we.has(S)){const _n=we.get(S),Kt=we.get(F);Se.bindFramebuffer(P.READ_FRAMEBUFFER,ap),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,cp);for(let en=0;en<_e;en++)Mt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_n.__webglTexture,O,Ie+en):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,_n.__webglTexture,O),gn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Kt.__webglTexture,ee,Tt+en):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Kt.__webglTexture,ee),O!==0?P.blitFramebuffer(De,Oe,le,ye,Ze,ht,le,ye,P.COLOR_BUFFER_BIT,P.NEAREST):gn?P.copyTexSubImage3D(yt,ee,Ze,ht,Tt+en,De,Oe,le,ye):P.copyTexSubImage2D(yt,ee,Ze,ht,De,Oe,le,ye);Se.bindFramebuffer(P.READ_FRAMEBUFFER,null),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else gn?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(yt,ee,Ze,ht,Tt,le,ye,_e,pt,Le,_t.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(yt,ee,Ze,ht,Tt,le,ye,_e,pt,_t.data):P.texSubImage3D(yt,ee,Ze,ht,Tt,le,ye,_e,pt,Le,_t):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ee,Ze,ht,le,ye,pt,Le,_t.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ee,Ze,ht,_t.width,_t.height,pt,_t.data):P.texSubImage2D(P.TEXTURE_2D,ee,Ze,ht,le,ye,pt,Le,_t);P.pixelStorei(P.UNPACK_ROW_LENGTH,et),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,on),P.pixelStorei(P.UNPACK_SKIP_PIXELS,es),P.pixelStorei(P.UNPACK_SKIP_ROWS,an),P.pixelStorei(P.UNPACK_SKIP_IMAGES,cr),ee===0&&F.generateMipmaps&&P.generateMipmap(yt),Se.unbindTexture()},this.initRenderTarget=function(S){we.get(S).__webglFramebuffer===void 0&&We.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?We.setTextureCube(S,0):S.isData3DTexture?We.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?We.setTexture2DArray(S,0):We.setTexture2D(S,0),Se.unbindTexture()},this.resetState=function(){b=0,C=0,D=null,Se.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function Zh(i,e){if(e===Vp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===dl||e===kd){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===dl)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Jy extends nr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new n1(t)}),this.register(function(t){return new i1(t)}),this.register(function(t){return new d1(t)}),this.register(function(t){return new f1(t)}),this.register(function(t){return new p1(t)}),this.register(function(t){return new r1(t)}),this.register(function(t){return new o1(t)}),this.register(function(t){return new a1(t)}),this.register(function(t){return new c1(t)}),this.register(function(t){return new t1(t)}),this.register(function(t){return new l1(t)}),this.register(function(t){return new s1(t)}),this.register(function(t){return new h1(t)}),this.register(function(t){return new u1(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new m1(t)}),this.register(function(t){return new g1(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Ir.extractUrlBase(e);o=Ir.resolveURL(l,this.path)}else o=Ir.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new _f(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ef){try{o[$e.KHR_BINARY_GLTF]=new _1(e)}catch(h){s&&s(h);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new I1(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case $e.KHR_MATERIALS_UNLIT:o[h]=new e1;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[h]=new x1(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[h]=new v1;break;case $e.KHR_MESH_QUANTIZATION:o[h]=new y1;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function jy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Qy{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new me(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Qt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new xf(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ks(u),l.distance=h;break;case"spot":l=new Y0(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Hn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class e1{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return qt}extendParams(e,t,n){const s=[];e.color=new me(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Qt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,at))}return Promise.all(s)}}class t1{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class n1{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(a,a)}return Promise.all(r)}}class i1{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class s1{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class r1{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new me(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,at)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class o1{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class a1{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new me().setRGB(a[0],a[1],a[2],Qt),Promise.all(r)}}class c1{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class l1{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new me().setRGB(a[0],a[1],a[2],Qt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,at)),Promise.all(r)}}class u1{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class h1{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class d1{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class f1{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class p1{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class m1{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class g1{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==yn.TRIANGLES&&l.mode!==yn.TRIANGLE_STRIP&&l.mode!==yn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const _=new Be,m=new A,p=new Un,M=new A(1,1,1),v=new ci(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&M.fromBufferAttribute(c.SCALE,x),v.setMatrixAt(x,_.compose(m,p,M));for(const x in c)if(x==="_COLOR_0"){const T=c[x];v.instanceColor=new pl(T.array,T.itemSize,T.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);ct.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Ef="glTF",yr=12,Jh={JSON:1313821514,BIN:5130562};class _1{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,yr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ef)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-yr,r=new DataView(e,yr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Jh.JSON){const l=new Uint8Array(e,yr+o,a);this.content=n.decode(l)}else if(c===Jh.BIN){const l=yr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class x1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Ml[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Ml[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Fs[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(f)},a,l,Qt,d)})})}}class v1{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class y1{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class Tf extends io{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,M=1-m,v=p-d+h;for(let x=0;x!==a;x++){const T=o[_+x+a],b=o[_+x+c]*u,C=o[g+x+a],D=o[g+x]*u;r[x]=M*T+v*b+m*C+p*D}return r}}const M1=new Un;class S1 extends Tf{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return M1.fromArray(r).normalize().toArray(r),r}}const yn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jh={9728:bt,9729:Ct,9984:Ld,9985:Yo,9986:Mr,9987:dn},Qh={33071:wi,33648:na,10497:Dn},fc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ml={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},w1={CUBICSPLINE:void 0,LINEAR:kr,STEP:zr},pc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function E1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new fn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ui})),i.DefaultMaterial}function Oi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function T1(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function b1(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function A1(i){let e;const t=i.extensions&&i.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+mc(t.attributes):e=i.indices+":"+mc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+mc(i.targets[n]);return e}function mc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Sl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function R1(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const C1=new Be;class I1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new jy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new W0(this.options.manager):this.textureLoader=new Z0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _f(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Oi(r,a,s),Hn(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Ir.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=fc[s.type],a=Fs[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new jt(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=fc[s.type],l=Fs[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let v=t.cache.get(M);v||(_=new l(a,p*f,s.count*f/u),v=new Jd(_,f/u),t.cache.add(M,v)),m=new Gr(v,c,d%f/u,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),m=new jt(_,c,g);if(s.sparse!==void 0){const p=fc.SCALAR,M=Fs[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,T=new M(o[1],v,s.sparse.count*p),b=new l(o[2],x,s.sparse.count*c);a!==null&&(m=new jt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,D=T.length;C<D;C++){const w=T[C];if(m.setX(w,b[C*c]),c>=2&&m.setY(w,b[C*c+1]),c>=3&&m.setZ(w,b[C*c+2]),c>=4&&m.setW(w,b[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=jh[d.magFilter]||Ct,u.minFilter=jh[d.minFilter]||dn,u.wrapS=Qh[d.wrapS]||Dn,u.wrapT=Qh[d.wrapT]||Dn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==bt&&u.minFilter!==Ct,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new ft(_);m.needsUpdate=!0,d(m)}),t.load(Ir.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Hn(h,o),h.userData.mimeType=o.mimeType||R1(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new tf,Fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ef,Fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return fn}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){const h=s[$e.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new me(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Qt),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,at)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ht);const u=r.alphaMode||pc.OPAQUE;if(u===pc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===pc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==qt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==qt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==qt){const h=r.emissiveFactor;a.emissive=new me().setRGB(h[0],h[1],h[2],Qt)}return r.emissiveTexture!==void 0&&o!==qt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,at)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Hn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Oi(s,h,r),h})}createUniqueName(e){const t=it.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return ed(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=A1(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=ed(new kt,l,t),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?E1(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const M=l[f];if(m.mode===yn.TRIANGLES||m.mode===yn.TRIANGLE_STRIP||m.mode===yn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Gm(_,M):new Pe(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===yn.TRIANGLE_STRIP?p.geometry=Zh(p.geometry,kd):m.mode===yn.TRIANGLE_FAN&&(p.geometry=Zh(p.geometry,dl));else if(m.mode===yn.LINES)p=new $m(_,M);else if(m.mode===yn.LINE_STRIP)p=new $l(_,M);else if(m.mode===yn.LINE_LOOP)p=new Zm(_,M);else if(m.mode===yn.POINTS)p=new Jm(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&b1(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Hn(p,r),m.extensions&&Oi(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Oi(s,h[0],r),h[0];const d=new mt;r.extensions&&Oi(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Jt(Ot.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new su(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new Be;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Yl(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let v=0,x=d.length;v<x;v++){const T=d[v],b=f[v],C=g[v],D=_[v],w=m[v];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const E=n._createAnimationTracks(T,b,C,D,w);if(E)for(let N=0;N<E.length;N++)p.push(E[N])}const M=new xl(r,void 0,p);return Hn(M,s),M})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,C1)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Wr:l.length>1?u=new mt:l.length===1?u=l[0]:u=new ct,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Hn(u,r),r.extensions&&Oi(n,u,r),r.matrix!==void 0){const h=new Be;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new mt;n.name&&(r.name=s.createUniqueName(n.name)),Hn(r,n),n.extensions&&Oi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof Fn||d instanceof ft)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];xi[r.path]===xi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(xi[r.path]){case xi.weights:l=Xs;break;case xi.rotation:l=qs;break;case xi.translation:case xi.scale:l=Ys;break;default:n.itemSize===1?l=Xs:l=Ys;break}const u=s.interpolation!==void 0?w1[s.interpolation]:kr,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+xi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Sl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof qs?S1:Tf;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function P1(i,e,t){const n=e.attributes,s=new Et;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new A(c[0],c[1],c[2]),new A(l[0],l[1],l[2])),a.normalized){const u=Sl(Fs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new A,c=new A;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Sl(Fs[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Bn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function ed(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Ml[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Qe.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),Hn(i,e),P1(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?T1(i,e.targets,t):i})}function bf(i){const e=new Map,t=new Map,n=i.clone();return Af(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Af(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Af(i.children[n],e.children[n],t)}const sr={qingchuan:{id:"qingchuan",name:"晴川街区",size:{x:48,z:42},spawn:{x:-2,z:1},buildings:[{id:"cafe",name:"白鸟咖啡",x:-14,z:10,w:11,d:8,h:5.4,color:14200195,trim:7425098,roof:5260884,sign:"WHITE BIRD  /  CAFE",line:"欢迎来到白鸟咖啡。以后这里可以点饮品、休息，和朋友碰面。",enter:"cafe_inside"},{id:"market",name:"街角便利店",x:14,z:10,w:11,d:8,h:5.8,color:9546402,trim:3234144,roof:4218215,sign:"MART  /  24H",line:"货架正在布置。以后可以在这里购买和出售物品。"},{id:"library",name:"城市图书馆",x:14,z:-11,w:13,d:9,h:7.5,color:13153945,trim:5464948,roof:4540507,sign:"QINGCHUAN LIBRARY",line:"走进书架之间，看看这座城市的故事。",enter:"library_inside"},{id:"homes",name:"河畔公寓",x:-14,z:-11,w:12,d:9,h:8.8,color:10792627,trim:6513275,roof:5395559,sign:"RIVERSIDE  /  A",line:"门厅里有信箱和电梯，楼上有一间可休息的住处。",enter:"apartment_lobby"}],npcs:[{id:"mika",name:"米卡",x:-5.3,z:8.4,skin:"mika",line:"我每天从公寓走到咖啡馆。隔壁住宅区也很值得逛逛。",route:[{x:-5.3,z:8.4},{x:-5.3,z:-4.8},{x:-14,z:-4.8},{x:-5.3,z:-4.8},{x:-5.3,z:16.5},{x:-14,z:16.5},{x:-5.3,z:16.5}],pace:.8},{id:"chen",name:"陈叔",x:5.5,z:-6.8,skin:"chen",line:"图书馆今天开门了，进去坐坐吧。",route:[{x:5.5,z:-6.8},{x:5.5,z:-4.8},{x:14,z:-4.8},{x:20.8,z:-4.8},{x:5.5,z:-4.8},{x:5.5,z:-17.5}],pace:.65},{id:"yuan",name:"阿远",x:4.8,z:13.6,skin:"yuan",line:"沿着东边的路走，就能到河畔生活区。",route:[{x:4.8,z:13.6},{x:4.8,z:4.8},{x:20,z:4.8},{x:20,z:0},{x:4.8,z:4.8},{x:4.8,z:17},{x:14,z:17}],pace:.9}]},riverside:{id:"riverside",name:"河畔生活区",size:{x:48,z:42},spawn:{x:-19,z:0},buildings:[{id:"residence_b",name:"河畔公寓 B 座",x:-14,z:-11,w:11,d:8,h:8.4,color:11121832,trim:6386791,roof:4875869,sign:"RIVERSIDE  /  B",line:"这栋楼与中央街的公寓共用一个温暖的门厅。",enter:"apartment_lobby"},{id:"clinic",name:"社区诊所",x:14,z:-11,w:10,d:8,h:5.2,color:13687239,trim:6523271,roof:6586493,sign:"NEIGHBORHOOD CLINIC",line:"诊所今天正常营业。医生说，多在街区散散步也有好处。",enter:"clinic_inside"},{id:"laundry",name:"自助洗衣房",x:14,z:10,w:10,d:8,h:4.7,color:13813425,trim:6585479,roof:5860728,sign:"LAUNDRY  /  24H",line:"洗衣机正轻轻转着。附近居民常在这里聊天。",enter:"laundry_inside"},{id:"community",name:"社区活动室",x:-14,z:10,w:10,d:8,h:5.1,color:13090214,trim:8942687,roof:6973016,sign:"COMMUNITY HALL",line:"公告栏上贴着本周的邻里活动安排。",enter:"community_inside"}],npcs:[{id:"guard",name:"门卫 周叔",x:-5.5,z:-7.2,skin:"chen",tint:14215155,line:"新搬来的？沿着这条路走，有诊所、洗衣房和活动室。",route:[{x:-5.5,z:-7.2},{x:-5.5,z:-4.8},{x:-14,z:-4.8},{x:-20,z:0},{x:-5.5,z:4.8},{x:-5.5,z:-17}],pace:.7},{id:"neighbor",name:"邻居 小林",x:6.8,z:-2.5,skin:"mika",tint:16770005,line:"傍晚的河畔最好看。活动室也经常有人。",route:[{x:6.8,z:-2.5},{x:6.8,z:4.8},{x:6.8,z:16.5},{x:14,z:16.5},{x:6.8,z:4.8},{x:-5.8,z:4.8},{x:-5.8,z:-4.8},{x:6.8,z:-4.8}],pace:.85},{id:"courier",name:"快递员 阿哲",x:-2.5,z:6.5,skin:"yuan",tint:16771514,line:"今天要送好几栋楼。路口的公交站很方便。",route:[{x:-2.5,z:6.5},{x:-14,z:16.5},{x:14,z:-4.8},{x:-14,z:-4.8},{x:14,z:16.5}],pace:1.15},{id:"nurse",name:"诊所 小安",x:18.3,z:-4.7,skin:"barista",tint:14221300,line:"诊所就在身后。路过时欢迎来看看社区公告。",route:[{x:18.3,z:-4.7},{x:10,z:-4.7},{x:6.5,z:-4.7},{x:6.5,z:3.5},{x:18.3,z:3.5}],pace:.8}]},cafe_inside:{id:"cafe_inside",name:"白鸟咖啡",size:{x:19,z:15},spawn:{x:0,z:4.8},buildings:[],npcs:[{id:"barista",name:"店员 小许",x:2.2,z:-1.7,skin:"barista",line:"欢迎光临！今天先随便看看，菜单很快就会有了。"}]},apartment_lobby:{id:"apartment_lobby",name:"河畔公寓门厅",size:{x:19,z:15},spawn:{x:0,z:4.8},buildings:[],npcs:[{id:"manager",name:"公寓管家 方姨",x:-3.8,z:-1.4,skin:"barista",tint:16768971,line:"欢迎回家。你的房间在楼上，信箱里暂时没有新信。"}]},apartment_unit:{id:"apartment_unit",name:"我的公寓",size:{x:17,z:13},spawn:{x:0,z:3.8},buildings:[],npcs:[]},library_inside:{id:"library_inside",name:"城市图书馆",size:{x:19,z:15},spawn:{x:0,z:4.8},buildings:[],npcs:[{id:"librarian",name:"馆员 许岚",x:.5,z:-1.5,skin:"barista",line:"欢迎来阅读。河畔生活区的旧照片也收藏在这里。"},{id:"reader",name:"读者 小遥",x:-6.1,z:.5,skin:"mika",line:"这座城市的地图越画越大了。下一站想去哪里？"}]},clinic_inside:{id:"clinic_inside",name:"社区诊所",size:{x:17,z:13},spawn:{x:0,z:3.8},buildings:[],npcs:[{id:"doctor",name:"值班医生 林医生",x:-6.4,z:-.5,skin:"barista",tint:14483444,line:"记得规律作息。公寓里有一张床，累了就回家休息。"}]},laundry_inside:{id:"laundry_inside",name:"自助洗衣房",size:{x:17,z:13},spawn:{x:0,z:3.8},buildings:[],npcs:[{id:"laundry_neighbor",name:"邻居 小夏",x:-3,z:.2,skin:"mika",tint:16770005,line:"等衣服洗好的时间，正好可以坐下来聊聊天。"}]},community_inside:{id:"community_inside",name:"社区活动室",size:{x:17,z:13},spawn:{x:0,z:3.8},buildings:[],npcs:[{id:"volunteer",name:"志愿者 阿禾",x:0,z:-.8,skin:"yuan",tint:16770754,line:"欢迎参加邻里活动。以后大家可以在这里一起玩小游戏。"}]}},gc=sr.qingchuan,td=sr.riverside;sr.qingchuan={...gc,size:{x:240,z:60},bounds:{minX:-40,maxX:120,minZ:-30,maxZ:30},buildings:[...gc.buildings,...td.buildings.map(i=>({...i,x:i.x+48})),{id:"riverside_homes_c",name:"河畔住宅 C 座",x:77,z:-11,w:10,d:8,h:8.3,color:12174522,trim:6519410,roof:5402216,sign:"RIVERSIDE / C",line:"从这里可以望见整片河畔社区。"},{id:"community_services",name:"社区服务站",x:77,z:11,w:10,d:8,h:5.2,color:13812910,trim:8615778,roof:6843233,sign:"COMMUNITY SERVICES",line:"这里提供街区活动和生活指引。"},{id:"riverside_homes_d",name:"河畔住宅 D 座",x:111,z:-11,w:11,d:9,h:10,color:11977661,trim:5730669,roof:5269347,sign:"RIVERSIDE / D",line:"这栋住宅面向河畔的新街道。"},{id:"community_workshop",name:"社区工坊",x:111,z:11,w:11,d:8,h:5.8,color:14074282,trim:8546133,roof:6707799,sign:"COMMUNITY WORKSHOP",line:"橱窗里陈列着居民制作的小物件。"}],npcs:[...gc.npcs,...td.npcs.map(i=>({...i,x:i.x+48,route:i.route?.map(e=>({x:e.x+48,z:e.z}))}))]};const nd=i=>["clear","cloudy","rain"].includes(i),Go=(i,e)=>typeof i=="number"&&Number.isFinite(i)?i:e,id=(i,e,t)=>{const n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)};class Rf{state;constructor(e,t=!1,n){this.state={day:Math.max(1,Math.floor(Go(e?.day,1))),minute:Math.max(0,Math.min(1439.999,Go(e?.minute,t?1230:510))),weather:nd(e?.weather)?e.weather:nd(n)?n:"clear",weatherRemaining:Math.max(1,Math.min(360,Go(e?.weatherRemaining,150))),seed:Go(e?.seed,20261101)>>>0}}get day(){return this.state.day}get minute(){return this.state.minute}get hour(){return this.minute/60}get weather(){return this.state.weather}get night(){return this.hour<6||this.hour>=19}get daylight(){return id(5,7.5,this.hour)*(1-id(17,20,this.hour))}get dusk(){return Math.max(0,1-Math.abs(this.hour-18)/2)+Math.max(0,1-Math.abs(this.hour-6)/1.5)}get label(){const e=Math.floor(this.minute);return`第 ${this.day} 天 · ${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}get forecast(){return`约 ${Math.ceil(this.state.weatherRemaining)} 游戏分钟后天气变化`}snapshot(){return{...this.state}}advance(e){if(!(!Number.isFinite(e)||e<=0))for(this.state.minute+=e,this.state.day+=Math.floor(this.state.minute/1440),this.state.minute%=1440,this.state.weatherRemaining-=e;this.state.weatherRemaining<=0;)this.state.weather=this.weather==="clear"||this.weather==="rain"?"cloudy":this.random()<.48?"rain":"clear",this.state.weatherRemaining+=120+Math.floor(this.random()*181)}cycleWeather(){const e=["clear","cloudy","rain"];this.state.weather=e[(e.indexOf(this.weather)+1)%e.length],this.state.weatherRemaining=150}skipPhase(){this.skipTo(this.night?510:1230)}rest(){this.state.day++,this.state.minute=480,this.advanceWeatherAfterRest()}skipTo(e){this.advance((e-this.minute+1440)%1440)}advanceWeatherAfterRest(){this.state.weatherRemaining=120+Math.floor(this.random()*181),this.state.weather=this.random()<.65?"clear":"cloudy"}random(){return this.state.seed=Math.imul(this.state.seed,1664525)+1013904223>>>0,this.state.seed/4294967296}}const vn=(i,e,t,n,s)=>({district:i,x:e,z:t,label:n,npcId:s}),Os=[{id:"street-story-1",title:"初来晴川",reward:{coins:8,seeds:2},steps:[{title:"认识一位居民",detail:"向街上的居民问好，了解晴川",target:vn("qingchuan",-5.3,8.4,"米卡","mika"),done:i=>i.talkedNpcIds.length>0},{title:"去白鸟咖啡坐坐",detail:"从中央街西南侧入口进入咖啡馆",target:vn("cafe_inside",0,4.8,"白鸟咖啡"),done:i=>i.visitedLocations.includes("cafe_inside")},{title:"种下一粒花种",detail:"到街区最西侧社区花园按 E 播种",target:vn("qingchuan",-33,-3,"社区花园"),done:i=>i.planted>0},{title:"收获一朵鲜花",detail:"花约 30 秒成熟；等待时可逛图书馆",target:vn("qingchuan",-33,-3,"社区花园"),done:i=>i.harvested>0},{title:"完成第一笔交易",detail:"在中央街东南侧便利店出售一朵鲜花",target:vn("qingchuan",14,15.7,"街角便利店"),done:i=>i.sold>0}]},{id:"street-story-2",title:"邻里的邀约",reward:{coins:12,seeds:2},steps:[{title:"听听街区往事",detail:"进入中央街东北侧图书馆，与馆员交谈",target:vn("library_inside",.5,-1.5,"馆员 许岚","librarian"),done:i=>i.talkedNpcIds.includes("librarian")},{title:"看看社区公告",detail:"到东侧诊所内，阅读右侧健康公告",target:vn("clinic_inside",6.1,-2.9,"社区健康公告"),done:i=>i.inspected.includes("clinic-health")},{title:"认识洗衣房的邻居",detail:"到诊所南面的洗衣房，与小夏聊天",target:vn("laundry_inside",-3,.2,"邻居 小夏","laundry_neighbor"),done:i=>i.talkedNpcIds.includes("laundry_neighbor")},{title:"接下聚会准备",detail:"到河畔活动室，与志愿者阿禾交谈",target:vn("community_inside",0,-.8,"志愿者 阿禾","volunteer"),done:i=>i.talkedNpcIds.includes("volunteer")}]},{id:"street-story-3",title:"一束花的心意",reward:{coins:20,seeds:3},steps:[{title:"为聚会送一朵花",detail:"带一朵鲜花回活动室，与阿禾交谈后选择送花",target:vn("community_inside",0,-.8,"志愿者 阿禾","volunteer"),done:i=>i.delivered>0},{title:"把好消息带回咖啡馆",detail:"送花后和白鸟咖啡店员小许交谈",target:vn("cafe_inside",2.2,-1.7,"店员 小许","barista"),done:i=>i.inspected.includes("cafe-finale")},{title:"安心住下来",detail:"到公寓门厅乘电梯，在自己房间的床边休息",target:vn("apartment_unit",-5,-.75,"自己的床"),done:i=>i.inspected.includes("cafe-finale")&&i.rested>0}]}];Os[0];function L1(){return{version:2,talkedNpcIds:[],talkCounts:{},visitedLocations:[],inspected:[],planted:0,harvested:0,sold:0,delivered:0,rested:0,welcomeSeeds:!1,completed:[]}}function Wo(i){return Array.isArray(i)?[...new Set(i.filter(e=>typeof e=="string"))].slice(0,100):[]}function Hi(i){return typeof i=="number"&&Number.isFinite(i)?Math.max(0,Math.min(9999,Math.floor(i))):0}function D1(i){const e=i&&typeof i=="object"?i:{},t={};if(e.talkCounts&&typeof e.talkCounts=="object")for(const[n,s]of Object.entries(e.talkCounts).slice(0,100))/^[a-z_]+$/.test(n)&&(t[n]=Hi(s));return{version:2,talkedNpcIds:Wo(e.talkedNpcIds),talkCounts:t,visitedLocations:Wo(e.visitedLocations),inspected:Wo(e.inspected),planted:Hi(e.planted),harvested:Hi(e.harvested),sold:Hi(e.sold),delivered:Hi(e.delivered),rested:Hi(e.rested),welcomeSeeds:e.welcomeSeeds===!0,completed:Wo(e.completed)}}function N1(i,e){const t=(s,r)=>{s.includes(r)||s.push(r)};e.type==="talk"&&e.npcId&&(t(i.talkedNpcIds,e.npcId),i.talkCounts[e.npcId]=Hi(i.talkCounts[e.npcId])+1,e.npcId==="barista"&&i.delivered>0&&t(i.inspected,"cafe-finale")),e.type==="visit"&&t(i.visitedLocations,e.location),e.type==="inspect"&&t(i.inspected,e.id),e.type==="plant"&&i.planted++,e.type==="harvest"&&i.harvested++,e.type==="sell"&&i.sold++,e.type==="deliver"&&i.completed.includes("street-story-2")&&i.delivered===0&&(i.delivered=1),e.type==="rest"&&i.inspected.includes("cafe-finale")&&i.rested++,e.type==="welcome-seeds"&&(i.welcomeSeeds=!0);const n=[];for(const s of Os)if(!i.completed.includes(s.id)){if(!s.steps.every(r=>r.done(i)))break;i.completed.push(s.id),n.push({title:s.title,...s.reward})}return{completedNow:n.length>0,rewards:n}}function cu(i){const e=Os.findIndex(r=>!i.completed.includes(r.id));if(e<0)return{complete:!0,chapterIndex:2,chapter:Os[2],index:3,step:void 0,text:"晴川故事完成 · 继续种花、交易与拜访邻里"};const t=Os[e],n=Math.max(0,t.steps.findIndex(r=>!r.done(i))),s=t.steps[n];return{complete:!1,chapterIndex:e,chapter:t,index:n,step:s,text:`${s.title}：${s.detail}`}}const wl=5,sd=12,Cf=3e4,El=4,If="qingchuan-life-v3";function Xo(i,e){return typeof i=="number"&&Number.isFinite(i)?Math.max(0,Math.min(9999,Math.floor(i))):e}function U1(){const i=()=>({coins:20,seeds:2,flowers:0,sold:0,plantedAt:Array(El).fill(0),progress:L1(),location:null,npcStates:{}});try{const e=localStorage.getItem(If)??localStorage.getItem("qingchuan-life-v2")??localStorage.getItem("qingchuan-life-v1");if(!e)return i();const t=JSON.parse(e);if(!t||typeof t!="object")return i();const n=Date.now();return{coins:Xo(t.coins,20),seeds:Xo(t.seeds,2),flowers:Xo(t.flowers,0),sold:Xo(t.sold,0),plantedAt:Array.from({length:El},(s,r)=>{const o=t.plantedAt?.[r];return typeof o=="number"&&Number.isFinite(o)&&o>0?Math.min(n,Math.floor(o)):0}),progress:D1(t.progress),location:O1(t.location),npcStates:F1(t.npcStates)}}catch{return i()}}function F1(i){if(!i||typeof i!="object")return{};const e={},t=new Set(["north","northEast","east","southEast","south","southWest","west","northWest"]),n=s=>typeof s=="number"&&Number.isFinite(s)?s:null;for(const[s,r]of Object.entries(i)){if(!r||typeof r!="object")continue;const o=r,a=n(o.x),c=n(o.z),l=n(o.waitRemaining),u=n(o.walkDistance);if(typeof o.districtId!="string"||a===null||c===null)continue;const h=n(o.routeIndex),d=t.has(o.direction)?o.direction:"south",f=o.districtId==="riverside";e[s]={districtId:f?"qingchuan":o.districtId,x:f?a+48:a,z:c,routeIndex:h===null?0:Math.max(0,Math.floor(h)),waitRemaining:l===null?0:Math.max(0,Math.min(120,l)),direction:d,routineKey:typeof o.routineKey=="string"?o.routineKey.slice(0,80):void 0,activityLabel:typeof o.activityLabel=="string"?o.activityLabel.slice(0,80):void 0,activity:o.activity==="walking"?"walking":"waiting",walkDistance:u===null?0:Math.max(0,u)}}return e}function O1(i){if(!i||typeof i!="object")return null;const e=i,t=c=>typeof c=="number"&&Number.isFinite(c)?c:null,n=t(e.x),s=t(e.z);if(typeof e.districtId!="string"||n===null||s===null)return null;const r=Array.isArray(e.returnStack)?e.returnStack.slice(0,8).flatMap(c=>{if(!c||typeof c!="object"||typeof c.id!="string")return[];const l=c.spawn;if(!l||typeof l!="object")return[];const u=t(l.x),h=t(l.z);return u===null||h===null?[]:[{id:c.id==="riverside"?"qingchuan":c.id,spawn:{x:c.id==="riverside"?u+48:u,z:h}}]}):[],o=e.weather==="rain"||e.weather==="cloudy"||e.weather==="clear"?e.weather:void 0,a=e.districtId==="riverside";return{districtId:a?"qingchuan":e.districtId,x:a?n+48:n,z:s,returnStack:r,night:e.night===!0,weather:o,worldTime:new Rf(e.worldTime,e.night===!0,o).snapshot()}}function so(i){try{localStorage.setItem(If,JSON.stringify(i))}catch{}}function Bs(i,e=Date.now()){if(!i)return 0;const t=Math.max(0,e-i)/Cf;return t>=1?3:t>=.55?2:1}function lu(i,e=Date.now()){return Math.max(0,Math.ceil((i+Cf-e)/1e3))}function B1(i,e,t,n){const s=(v,x)=>{const T=Math.max(1,Math.ceil(Math.hypot(x.x-v.x,x.z-v.z)/.03));for(let b=0;b<=T;b++)if(n(v.x+(x.x-v.x)*b/T,v.z+(x.z-v.z)*b/T))return!1;return!0};if(s(i,e))return[{...e}];const r=[],o=new Map,a=Math.max(Math.ceil(-t.x/2+1),Math.floor(Math.min(i.x,e.x)-12)),c=Math.min(Math.floor(t.x/2-1),Math.ceil(Math.max(i.x,e.x)+12)),l=Math.max(Math.ceil(-t.z/2+1),Math.floor(Math.min(i.z,e.z)-12)),u=Math.min(Math.floor(t.z/2-1),Math.ceil(Math.max(i.z,e.z)+12));for(let v=a;v<=c;v++)for(let x=l;x<=u;x++)n(v,x)||(o.set(`${v},${x}`,r.length),r.push({x:v,z:x}));const h=v=>{let x=-1,T=1/0;return r.forEach((b,C)=>{const D=Math.hypot(b.x-v.x,b.z-v.z);D<T&&s(v,b)&&(x=C,T=D)}),x},d=h(i),f=h(e);if(d<0||f<0)return[];const g=new Map([[d,-1]]),_=[d];for(let v=0;v<_.length&&!g.has(f);v++){const x=_[v],T=r[x];for(const[b,C]of[[1,0],[-1,0],[0,1],[0,-1]]){const D=o.get(`${T.x+b},${T.z+C}`);D===void 0||g.has(D)||!s(T,r[D])||(g.set(D,x),_.push(D))}}if(!g.has(f))return[];const m=[{...e}];for(let v=f;v!==-1;v=g.get(v))m.push(r[v]);m.reverse();const p=[];let M=i;for(let v=0;v<m.length;){let x=v;for(;x+1<m.length&&s(M,m[x+1]);)x++;p.push(m[x]),M=m[x],v=x+1}return p}class z1{cells=new Map;count=0;rebuild(e){this.cells.clear(),this.count=0,e.updateMatrixWorld(!0),e.traverse(t=>{if(!(t instanceof Pe)||t instanceof ci)return;let n=t;for(;n&&n!==e;){if(n.userData.noStaticCollision||n.userData.sharedAssetGeometry)return;n=n.parent}if(!["BoxGeometry","CylinderGeometry","SphereGeometry","TorusGeometry"].includes(t.geometry.type))return;const s=new Et().setFromObject(t),r=s.getSize(new A);s.max.y<.22||s.min.y>1.35||r.y<.1||Math.max(r.x,r.z)<.1||this.add({minX:s.min.x-.22,maxX:s.max.x+.22,minZ:s.min.z-.22,maxZ:s.max.z+.22})})}add(e){this.count++;for(let t=Math.floor(e.minX/2);t<=Math.floor(e.maxX/2);t++)for(let n=Math.floor(e.minZ/2);n<=Math.floor(e.maxZ/2);n++){const s=`${t},${n}`,r=this.cells.get(s)??[];r.push(e),this.cells.set(s,r)}}blocked(e,t){return this.cells.get(`${Math.floor(e/2)},${Math.floor(t/2)}`)?.some(n=>e>n.minX&&e<n.maxX&&t>n.minZ&&t<n.maxZ)??!1}}function Qo(i,e,t){if(!t(i,e))return{x:i,z:e};for(let n=.25;n<=5;n+=.25){const s=Math.ceil(n*24);for(let r=0;r<s;r++){const o=r/s*Math.PI*2,a={x:i+Math.cos(o)*n,z:e+Math.sin(o)*n};if(!t(a.x,a.z))return a}}return{x:i,z:e}}const k1=["wood","plaster","stone","metal","fabric","roof"];class H1{constructor(e){this.sources=e}sources;maps=new Map;apply(e){let t=0;return e.traverse(n=>{if(!(n instanceof Pe)||n instanceof ci||n.userData.sharedAssetGeometry||n.userData.noModelTexture)return;let s;for(let c=n;c;c=c.parent){if(c.userData.noModelTexture||c.userData.sharedAssetGeometry)return;s??=c.userData.materialKind}const r=n.geometry;if(!["BoxGeometry","CylinderGeometry","SphereGeometry","TorusGeometry"].includes(r.type))return;r.computeBoundingBox();const o=r.boundingBox.getSize(new A),a=Array.isArray(n.material)?n.material:[n.material];for(const c of a){if(!(c instanceof fn)||c.map||c.transparent||c.roughness<.5||c.emissiveIntensity>.1&&c.emissive.getHex()!==0)continue;const l=c.color;if(l.g>l.r*1.05&&l.g>l.b*1.04&&(!s||s==="stone"))continue;const h=s??(l.r>l.b*1.18&&l.r>l.g*1.08?"wood":Math.max(l.r,l.g,l.b)<.32?"metal":"stone"),d=this.sources.get(`model-${h}`);if(!d)continue;const f=Math.max(.25,Math.round(Math.max(o.x,o.z)/2*4)/4),g=Math.max(.25,Math.round((o.y<.3?Math.min(o.x,o.z):o.y)/2*4)/4),_=`${h}:${f}:${g}`;let m=this.maps.get(_);m||(m=d.clone(),m.repeat.set(f,g),m.needsUpdate=!0,this.maps.set(_,m)),c.map=m,c.roughness=h==="metal"?.6:h==="fabric"?1:.9,c.metalness=h==="metal"?.22:0,c.needsUpdate=!0,n.userData.sharedAssetMap=!0,t++}}),t}}const V1=["north","northEast","east","southEast","south","southWest","west","northWest"];async function Tl(i,e){let t;for(let n=0;n<3;n++)try{const s=await fetch(i,{signal:AbortSignal.timeout(25e3),cache:n?"reload":"default"});if(!s.ok)throw new Error(`Character resource HTTP ${s.status}: ${i}`);return await e(s)}catch(s){t=s,n<2&&await new Promise(r=>setTimeout(r,800*(n+1)))}throw t}async function Pf(i,e={directions:V1,motions:["idle","walk"]},t){const n=await Tl(i,h=>h.json());if(n.schemaVersion!==2)throw new Error("Unsupported drawn character catalog");if(!e.directions.length||!e.motions.includes("idle"))throw new Error("Invalid drawn character requirements");const s=e.directions.flatMap(h=>e.motions.map(d=>{const f=n.directions?.[h]?.[d];if(!f||!Number.isInteger(f.frameCount)||(d==="walk"?f.frameCount<16||f.frameCount>32:f.frameCount!==24)||f.cellSize!==512||!Number.isFinite(f.durationMs)||f.durationMs<=0||f.gaitCycles!=null&&(!Number.isInteger(f.gaitCycles)||f.gaitCycles<1||f.gaitCycles>4)||f.anchor?.[0]!==256||Math.abs(f.anchor?.[1]-457.333333)>.01||!Array.isArray(f.contentBounds)||f.contentBounds.length!==4||!/^[a-zA-Z0-9-]+\.(?:png|webp)$/.test(f.file))throw new Error(`Incomplete drawn character: ${h}/${d}`);return{direction:h,motion:d,animation:f}})),r=s.length+1;let o=1;t?.(o,r);const a=Math.max(...s.map(({animation:h})=>Math.max(h.anchor[0]-h.contentBounds[0],h.contentBounds[2]-h.anchor[0]))),c=Math.max(...s.map(({animation:h})=>h.anchor[1]-h.contentBounds[1])),l=Math.min(88/a,236/c),u=new Map;try{const h=await Promise.all(s.map(({animation:d})=>Tl(new URL(d.file,new URL(i,window.location.href)),f=>f.blob())));for(const[d,{direction:f,motion:g,animation:_}]of s.entries()){const m=await createImageBitmap(h[d]);try{if(m.width!==_.columns*_.cellSize||m.height!==_.rows*_.cellSize)throw new Error("Drawn atlas size mismatch");const p=[];u.set(`${f}:${g}`,p);for(let M=0;M<_.frameCount;M++){const v=document.createElement("canvas");v.width=192,v.height=256,v.getContext("2d").drawImage(m,M%_.columns*_.cellSize,Math.floor(M/_.columns)*_.cellSize,_.cellSize,_.cellSize,96-_.anchor[0]*l,252-_.anchor[1]*l,_.cellSize*l,_.cellSize*l);const T=new Qi(v);T.colorSpace=at,T.minFilter=Ct,T.magFilter=Ct,T.generateMipmaps=!1,p.push(T)}}finally{m.close()}t?.(++o,r)}}catch(h){for(const d of u.values())d.forEach(f=>f.dispose());throw h}return{direction(h){if(e.directions.includes(h))return h;if(e.directions.length===1)return e.directions[0];const d=h.endsWith("East")?"east":h.endsWith("West")?"west":h;if(!e.directions.includes(d))throw new Error(`Missing drawn direction: ${h}`);return d},texture(h,d,f){const g=u.get(`${h}:${d}`);return g[(f%g.length+g.length)%g.length]},idleFrame(h,d){const f=n.directions[h].idle;return Math.floor(d*1e3/f.durationMs*f.frameCount)%f.frameCount},walkFrame(h,d,f){const g=n.directions[h].walk,_=1e3*32/24,m=Math.max(.5,g.durationMs/_);return(Math.floor(d/(f*(g.gaitCycles??1)*m)*g.frameCount)%g.frameCount+g.frameCount)%g.frameCount}}}const Pr={mika:{role:"插画爱好者",home:"中央街西侧",morning:[[-5.3,8.4,"画街角速写",12],[-5.3,-4.8,"去公寓取画本",7],[-14,-4.8,"整理画具",12],[-5.3,4.8,"观察街景",8]],afternoon:[[-5.3,4.8,"去花园写生",6],[-23,4.8,"画花园速写",20],[-5.3,16.5,"去咖啡馆",5],[-14,16.5,"等一杯咖啡",18]],evening:[[-14,16.5,"看咖啡馆灯光",18],[-5.3,16.5,"散步回家",8],[-5.3,-4.8,"收好画本",18]],rain:[[-5.3,16.5,"去咖啡馆避雨",6],[-14,15.8,"在檐下整理速写",25]],lines:["我在画每天路过的人。你若在这里住久了，也会出现在画里。","花园今天的颜色很好看。我画得慢，倒正好听见风吹草叶。","夜里的窗灯像一张新地图。走累了，去公寓睡一觉吧。"]},chen:{role:"街区旧事讲述人",home:"图书馆附近",morning:[[5.5,-4.8,"沿街晨走",8],[14,-4.8,"看图书馆新书",22],[20.8,-4.8,"歇脚看报",14]],afternoon:[[20.8,-4.8,"带旧书去馆里",10],[14,-4.8,"等馆员收书",20],[5.5,-4.8,"街口散步",10]],evening:[[14,-4.8,"聊聊旧街区",20],[5.5,-4.8,"慢慢回家",12]],rain:[[14,-4.9,"在图书馆檐下看报",30],[20.8,-4.8,"听雨歇脚",20]],lines:["以前这里只有一条临河小路。馆员许岚把旧照片都收好了，有空去听她讲讲。","种花不能急。我年轻时也总想一夜就把院子种满。","今天走得够远了。明天还是这条街，却总会碰到新故事。"]},yuan:{role:"便利店帮手",home:"中央街东南侧",morning:[[4.8,13.6,"清点早间货品",12],[4.8,4.8,"沿街送货",6],[20,4.8,"检查街角",8],[20,16.5,"把货送回店边",18]],afternoon:[[20,16.5,"整理花种",18],[14,16.5,"替店里照看花束",15],[4.8,16.5,"稍作休息",10]],evening:[[14,16.5,"收拾店前货箱",20],[4.8,16.5,"晚间散步",10]],rain:[[14,15.8,"把货箱移到檐下",30],[20,16.5,"看顾货品",15]],lines:["店里收鲜花，也卖花种。先卖一朵试试，赚来的钱够买下一轮花种。","活动室阿禾正在布置聚会。要送花的话，留一朵在背包里就好。","店里一直亮着灯，需要花种随时来。别把自己累着了。"]},guard:{role:"公寓巡查员",home:"河畔公寓 B 座",morning:[[42.5,-4.8,"检查公寓门前",18],[34,-4.8,"巡视住户信箱",12],[28,0,"巡查街角",8]],afternoon:[[28,0,"巡视公共通道",10],[42.5,4.8,"检查街灯",14],[42.5,-4.8,"回门前值班",20]],evening:[[42.5,4.8,"夜间巡查",15],[34,-4.8,"检查楼门",20],[42.5,-4.8,"守候晚归居民",20]],rain:[[34,-4.9,"在公寓檐下值班",30],[42.5,-4.8,"提醒路面湿滑",20]],lines:["东边诊所、洗衣房和活动室都开着。认认门，以后日子就方便了。","年轻人搬来以后，街上热闹多了。活动室需要帮忙可以去问阿禾。","夜里路灯都查过了。放心走，累了就回公寓休息。"]},neighbor:{role:"河畔园艺爱好者",home:"河畔南侧步道",morning:[[54.8,4.8,"看看沿街绿植",14],[54.8,16.5,"晨间散步",12],[62,16.5,"等邻居洗衣",16]],afternoon:[[62,16.5,"聊聊种花",18],[54.8,16.5,"去活动室看看",6],[41,16.5,"帮聚会挑花色",20]],evening:[[54.8,18.9,"沿河看晚霞",24],[62,16.5,"晚间散步",12]],rain:[[62,15.8,"在洗衣房檐下等雨停",30],[54.8,16.5,"照看门前绿植",14]],lines:["我叫小林，喜欢种花。西边社区花园的土松，第一次去可以从一粒种子开始。","洗衣房的小夏总能把等待的时间过得很有趣。你们应该聊得来。","不一定每天都忙。看看河水，听听街上的声音，也算好好过一天。"]},courier:{role:"街区快递员",home:"河畔站与各楼入口",morning:[[45.5,6.5,"整理待送包裹",10],[34,16.5,"给活动室送件",10],[62,-4.8,"给诊所送件",10],[34,-4.8,"给住户送件",10]],afternoon:[[34,-4.8,"核对门牌",10],[62,16.5,"给洗衣房送件",12],[41.6,19.1,"在河畔站歇脚",20]],evening:[[41.6,19.1,"清点最后一批包裹",24],[45.5,6.5,"收好配送单",18]],rain:[[41.6,19.1,"在公交站边护好包裹",30],[34,15.8,"送完最后一件",15]],lines:["叫我阿哲就行。门牌多，路也多，不过总能送到。你按手账里的路标走就不会迷路。","今天活动室收了不少东西，就差一朵摆在桌上的花了。","最后一件也送好了。终于能慢慢走回家，不用再赶路。"]},nurse:{role:"社区护理员",home:"诊所门前",morning:[[66.3,-4.7,"整理义诊资料",16],[62,-4.7,"提醒居民看公告",22],[54.5,-4.7,"短程巡访",12]],afternoon:[[54.5,3.5,"午间散步",12],[66.3,3.5,"向邻居问好",12],[66.3,-4.7,"返回诊所",22]],evening:[[62,-4.7,"收好健康宣传单",25],[66.3,-4.7,"等换班同事",18]],rain:[[62,-5,"在诊所檐下值守",30],[66.3,-4.7,"提醒居民小心台阶",20]],lines:["我是小安，负责社区护理。诊所右侧公告可以进去看看，别忘了规律休息。","聚会热闹，也记得留出休息时间。公寓的床可比硬撑着走路舒服。","忙完就回家吧。明天还有花要看，还有朋友要见。"]}},Ma={barista:{role:"白鸟咖啡店员",activity:"整理杯具，招呼客人",lines:["我是小许。新面孔先坐坐吧。西侧花园能种花，便利店也收自己种出的鲜花。","阿禾提过你，聚会的花就拜托你了。送完花，回来告诉我一声。","花已经摆好了？太好了。等大家都来，这里又能多认识几个朋友。今天好好休息，明天见。"]},manager:{role:"公寓管家",activity:"整理住户来信",lines:["我姓方，大家叫我方姨。电梯在门厅右后方，你的房间里有床，随时可以休息。","不用急着把整条街一天走完。你的房间一直在，出门也记得回来。","街坊都记住你了吧？欢迎在晴川住下来。"]},librarian:{role:"街区档案馆员",activity:"整理旧地图与照片",lines:["我叫许岚。这张旧地图上，河畔还只是一条小路。如今诊所、洗衣房和活动室都在了，你可以沿东边走一圈。","陈叔常来补充老故事。我把今天的新街区也留了一页，等你来写。","你为聚会送的花，也算街区新故事的一笔。地图不只画路，也留住相遇。"]},reader:{role:"旅行读者",activity:"翻阅城市游记",lines:["我是小遥。每到一个地方，我会先看地图，再找一家能坐下来的小店。","这里的居民都愿意说说自己的故事。你可以打开手账看看认识了谁。","有时候旅程的终点，就是愿意多住一天。"]},doctor:{role:"值班医生",activity:"整理健康记录",lines:["我是林医生。身体不舒服就来坐坐。右侧健康公告写着作息建议，回家睡一觉也很有用。","从花园走到河畔，已经是不错的运动量了。休息和散步一样重要。","邻里能互相照看，日子就安心多了。"]},laundry_neighbor:{role:"手作爱好者",activity:"等衣服洗好，折叠布料",lines:["叫我小夏吧。我等衣服的时候常去隔壁活动室，阿禾正准备邻里聚会，你也来吗？","准备花束时留一朵就够。别把种出来的花全卖掉啦。","下回见面，我带自己做的小桌布来。你的花和它一定很配。"]},volunteer:{role:"邻里活动志愿者",activity:"布置聚会桌面",lines:["我是阿禾。许岚和小夏说起过你，我们正缺一朵桌花。先熟悉街区，再带一朵自己种的鲜花来就好。","带来鲜花了吗？我会把它放在大家都能看到的桌上。你可以选择送花，也可以先留着。","花已经收到了，谢谢你！去白鸟咖啡告诉小许吧，他一直盼着这次聚会。"]}},G1=Object.fromEntries([...Object.entries(Pr).map(([i,e])=>[i,e.role]),...Object.entries(Ma).map(([i,e])=>[i,e.role])]);function Lf(i,e,t){const n=Pr[i];if(!n)return;const s=t?"rain":e<6?"evening":e<11?"morning":e<17?"afternoon":"evening",r={morning:"早间日常",afternoon:"午后日常",evening:"晚间日常",rain:"雨天安排"};return{key:`${i}:${s}`,label:r[s],stops:n[s].map(([o,a,c,l])=>({x:o,z:a,activity:c,wait:l??12}))}}function W1(i,e,t,n,s){const r=Pr[i]??Ma[i];if(!r)return"";const o=e.delivered>0?2:e.completed.includes("street-story-1")?1:0,a=(e.talkCounts[i]??0)===0,c=a?"你好，很高兴认识你。":"又见面了。",l=n&&Pr[i]?"下雨了，我把事情挪到有遮挡的地方慢慢做。":t>=19&&Pr[i]?"天黑了，脚步也该慢一点。":"",u=s?`我正${s}。`:"";return`${c}${u}${l}${a&&o>0?r.lines[0]:""}${r.lines[o]}`}const X1={clear:"☀ 晴朗",cloudy:"☁ 多云",rain:"☂ 小雨"};class q1{scene;hemi;sun;effectRoot=new mt;rain;wetPatches=[];rainSplashes=[];rainPositions=[];swayEntries=[];windDirection=new re;windState={directionX:.88,directionZ:.48,strength:.85,rain:0};waveEntries=[];animatedLights=[];weather="clear";daylight=1;cloud=0;rainfall=0;moisture=0;indoors=!1;overview=!1;hour=8.5;dusk=0;tint=new me;daySky=new me(13228244);duskSky=new me(14000523);rainSky=new me(9414573);rainNightSky=new me(1911612);dayHemi=new me(15005951);dayGround=new me(8226429);daySun=new me(16771265);duskSun=new me(16756856);elapsed=0;rainDummy=new ct;weatherOrigin=new A;weatherOriginTarget=new A;weatherOriginDelta=new A;weatherOriginReady=!1;weatherCellSize=8;weatherHalfWidth=19;weatherHalfDepth=17;constructor(e,t,n){this.scene=e,this.hemi=t,this.sun=n,this.effectRoot.name="atmosphere-effects",this.scene.add(this.effectRoot);const s=new qt({color:12113890,transparent:!0,opacity:.64,depthWrite:!1});this.rain=new ci(new nn(.018,.62,.018),s,260),this.rain.frustumCulled=!1,this.rain.name="procedural-rain",this.effectRoot.add(this.rain);for(let a=0;a<260;a++){const c=new A;this.rainPositions.push(c),this.resetRain(c,a)}const r=new qt({color:12179669,transparent:!0,opacity:0,depthWrite:!1,side:Ht});for(let a=0;a<42;a++){const c=new Pe(new eu(.035,.11,10),r.clone());c.rotation.x=-Math.PI/2,c.visible=!1,c.userData.splashPhase=a*.71%1,c.userData.splashIndex=a,this.effectRoot.add(c),this.rainSplashes.push(c)}const o=[[-18.2,16.9,.44,1.55],[-15.8,17.7,.32,1.1],[-12.2,16.5,.38,1.35],[-7.4,16.8,.28,1.2],[-3.8,15.6,.3,1.5],[2.6,15.8,.32,1.25],[8.5,5.1,.36,1.45],[14.8,4.8,.28,1.2],[-14.5,-4.8,.34,1.35],[0,-4.7,.3,1.4],[14.2,-4.5,.32,1.25]];for(const[a,c,l,u]of o){const h=new Pe(new mn(l,u),new qt({color:11981780,transparent:!0,opacity:0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.rotation.z=(a*.31+c*.17)%.2,h.position.set(a,.086,c),h.renderOrder=1,h.visible=!1,this.effectRoot.add(h),this.wetPatches.push(h)}this.rain.visible=!1}get mode(){return this.weather}get label(){return X1[this.weather]}get rainAmount(){return this.rainfall}get wetness(){return this.moisture}get lightLevel(){return this.daylight}get wind(){return this.windState}sync(e,t,n){this.weather=e.weather,this.daylight=e.daylight,this.dusk=e.dusk,this.hour=e.hour,this.indoors=t,this.overview=n}clearWorldAnimations(){this.swayEntries.length=0,this.waveEntries.length=0,this.animatedLights.length=0}registerSway(e,t=.025,n=1.4,s=0){this.swayEntries.push({object:e,baseRotation:e.rotation.clone(),amount:t,speed:n,phase:s})}registerWave(e,t=.025,n=1.2,s=0){this.waveEntries.push({object:e,baseY:e.position.y,amount:t,speed:n,phase:s})}registerLight(e){this.animatedLights.push({light:e,baseIntensity:e.intensity})}update(e,t,n){this.elapsed+=e;const s=this.weather==="clear"?0:this.weather==="cloudy"?.55:1;this.cloud=Ot.damp(this.cloud,s,.12,e),this.rainfall=Ot.damp(this.rainfall,this.weather==="rain"?1:0,.22,e),this.moisture=Ot.damp(this.moisture,this.rainfall,this.rainfall>this.moisture?.08:.012,e);const r=this.windDirection.set(.88+Math.sin(this.elapsed*.09)*.06,.48+Math.cos(this.elapsed*.11)*.06).normalize();this.windState.directionX=r.x,this.windState.directionZ=r.y,this.windState.strength=.82+this.cloud*.37+Math.sin(this.elapsed*.27)*.075,this.windState.rain=this.rainfall,this.effectRoot.visible=!this.indoors,this.applyLighting();const o=n?.x??t.position.x,a=n?.z??t.position.z;this.updateWeatherOrigin(o,a),this.rain.visible=this.rainfall>.015,this.rain.material.opacity=this.rainfall*.64;const c=this.moisture>.01;for(const[l,u]of this.wetPatches.entries())u.visible=c,u.material.opacity=c?this.moisture*(.07+Math.sin(this.elapsed*.7+l*.8)*.018):0;if(this.rain.visible){for(let l=0;l<this.rainPositions.length;l++){const u=this.rainPositions[l];u.y-=e*(8+l%7*.5),u.x+=e*(.18+this.cloud*.65+l%5*.015),u.z+=e*.045,u.y<.15&&this.resetRain(u,l),this.wrapHorizontal(u,l),this.rainDummy.position.set(this.weatherOrigin.x+u.x,u.y,this.weatherOrigin.z+u.z),this.rainDummy.rotation.z=-.12,this.rainDummy.updateMatrix(),this.rain.setMatrixAt(l,this.rainDummy.matrix)}this.rain.instanceMatrix.needsUpdate=!0;for(const l of this.rainSplashes){const u=l.userData.splashIndex,h=((this.elapsed*(.42+u%5*.035)+l.userData.splashPhase)%1+1)%1;if(l.visible=h<.72,!l.visible)continue;const d=this.weatherOrigin.x+u*13%35-17,f=this.weatherOrigin.z+u*19%31-15;l.position.set(d,.092,f);const g=.35+h*.7;l.scale.setScalar(g),l.material.opacity=(1-h/.72)*.22*this.rainfall}}else for(const l of this.rainSplashes)l.visible=!1;for(const l of this.swayEntries)l.object.rotation.copy(l.baseRotation),l.object.rotation.z+=Math.sin(this.elapsed*l.speed+l.phase)*l.amount*this.windState.strength*this.windState.directionX,l.object.rotation.x+=Math.cos(this.elapsed*l.speed*.73+l.phase)*l.amount*.35*this.windState.strength*this.windState.directionZ;for(const l of this.waveEntries)l.object.position.y=l.baseY+Math.sin(this.elapsed*l.speed+l.phase)*l.amount*(1+this.cloud*.7);for(const[l,u]of this.animatedLights.entries())u.light.intensity=(u.light.userData.streetLight?Ot.lerp(.8,5,1-this.daylight):u.baseIntensity)*(.96+Math.sin(this.elapsed*2.2+l*1.7)*.025)}applyLighting(){const e=this.daylight,t=this.tint.set(2438475).lerp(this.daySky,e);t.lerp(this.duskSky,this.dusk*.24*(1-this.cloud)),t.lerp(this.rainSky.set(9414573).lerp(this.rainNightSky,1-e),this.cloud*.65),this.scene.background.copy(t);const n=this.scene.fog;n.color.copy(t),n.density=this.overview?.0014:Ot.lerp(.009,.0055,e)+this.cloud*.0035,this.hemi.color.set(10205136).lerp(this.dayHemi,e),this.hemi.groundColor.set(3424330).lerp(this.dayGround,e),this.hemi.intensity=this.indoors?1.5:Ot.lerp(.95,1.65-this.cloud*.4,e),this.sun.color.set(9415121).lerp(this.daySun,e),this.sun.color.lerp(this.duskSun,this.dusk*.45*(1-this.cloud)),this.sun.intensity=Ot.lerp(.42,2.7-this.cloud*1.15,e);const s=(this.hour-12)/12*Math.PI;this.sun.position.set(40+Math.sin(s)*28,28+Math.cos(s)*8,25)}resetRain(e,t){e.set(t*17%31-15.5,7+t%11*.35,t*23%31-15.5)}updateWeatherOrigin(e,t){if(this.weatherOriginTarget.set(Math.floor(e/this.weatherCellSize)*this.weatherCellSize,0,Math.floor(t/this.weatherCellSize)*this.weatherCellSize),!this.weatherOriginReady){this.weatherOrigin.copy(this.weatherOriginTarget),this.weatherOriginReady=!0;return}if(this.weatherOriginDelta.subVectors(this.weatherOriginTarget,this.weatherOrigin),!(this.weatherOriginDelta.x===0&&this.weatherOriginDelta.z===0)){for(const n of this.rainPositions)n.x-=this.weatherOriginDelta.x,n.z-=this.weatherOriginDelta.z;this.weatherOrigin.copy(this.weatherOriginTarget)}}wrapHorizontal(e,t){e.x<-this.weatherHalfWidth?e.x=this.weatherHalfWidth-t*7%4:e.x>this.weatherHalfWidth&&(e.x=-this.weatherHalfWidth+t*11%4),e.z<-this.weatherHalfDepth?e.z=this.weatherHalfDepth-t*5%3:e.z>this.weatherHalfDepth&&(e.z=-this.weatherHalfDepth+t*9%3)}}function bl(i){return new fn({color:i,roughness:1,metalness:0,flatShading:!0})}function _c(i,e,t,n,s,r,o,a){const c=new Pe(new nn(e,t,n),bl(s));return c.position.set(r,o,a),c.castShadow=!0,c.receiveShadow=!0,i.add(c),c}class Y1{root=new mt;clusters=[];glints=[];wetPatches=[];porchLight;dummy=new ct;elapsed=0;constructor(e,t=!1){this.root.name="white-bird-corner-style-sample",e.add(this.root),t&&this.makeTree();const n=[[-18.1,17.5,.035,.45,.031],[-16.6,15.6,.045,.57,.031],[-15.4,17.8,.035,.37,.031],[-12.3,17.1,.05,.48,.031],[-10,15.9,.04,.52,.031],[-8.6,17.7,.03,.42,.031],[-3.55,15.2,.12,1.05,.083],[-3.04,17.1,.09,.72,.083],[-2.5,18.5,.11,1.2,.083],[-1.7,16.3,.08,.84,.083],[-.9,19.1,.1,.94,.083],[-19.2,23.2,.1,.8,.078],[-16.6,22.1,.07,.66,.078],[-14.7,24.3,.12,.95,.078],[-11.9,22.9,.09,.72,.078],[-9.8,24.5,.1,.82,.078]];for(const[r,[o,a,c,l,u]]of n.entries()){const h=new Pe(new mn(c,l),new qt({color:r<6?14083293:15255957,transparent:!0,opacity:0,depthWrite:!1,side:Ht}));h.rotation.x=-Math.PI/2,h.rotation.z=(r%3-1)*.13,h.position.set(o,u,a),h.visible=!1,h.renderOrder=1,this.root.add(h),this.glints.push(h)}const s=[[[-22.4,21.55],[-19.8,21.32],[-18.2,21.88],[-19.5,22.55],[-22,22.45]],[[-16,23.1],[-14.2,22.65],[-11.8,23.05],[-10.9,24.05],[-13.4,24.35],[-15.7,23.8]],[[-8.9,21.9],[-6.7,21.58],[-5.8,22.1],[-7.4,22.77],[-9,22.55]],[[-3,24.3],[-1.2,23.75],[1.4,24],[2.3,24.9],[.4,25.3],[-2.6,25]]];for(const r of s){const o=new lf;o.moveTo(r[0][0],-r[0][1]);for(const[c,l]of r.slice(1))o.lineTo(c,-l);o.closePath();const a=new Pe(new tu(o),new qt({color:1975849,transparent:!0,opacity:.075,depthWrite:!1,side:Ht}));a.rotation.x=-Math.PI/2,a.position.y=.077,a.name="subtle-asphalt-damp-patch",this.root.add(a),this.wetPatches.push(a)}this.porchLight=new Ks(16762507,0,8.5,2),this.porchLight.position.set(-14,2.35,14.8),this.root.add(this.porchLight)}makeTree(){const e=new mt;e.name="cafe-corner-layered-tree",e.position.set(-21,0,18),e.scale.setScalar(1.04),this.root.add(e),_c(e,.29,1.63,.31,7428681,0,.815,0),_c(e,.12,.74,.13,8546377,-.36,1.59,.02).rotation.z=-.76,_c(e,.12,.76,.13,8546377,.33,1.62,0).rotation.z=.72;const t=[[-.49,1.99,.1,.64,6524276],[.48,2.03,.04,.63,5210220],[0,2.37,-.11,.77,7576443],[.07,2.78,0,.42,8890491]];for(const[n,[s,r,o,a,c]]of t.entries()){const l=new mt;l.position.set(s,r,o),e.add(l);const u=new Pe(new Ql(a,1),bl(c));u.scale.set(1,.7,.75),u.castShadow=!0,u.receiveShadow=!0,l.add(u);const h=new ci(new nn(.18,.12,.14),bl(16777215),24),d=[10269322,7904377,5406317,11648145];for(let f=0;f<24;f++){const g=f*2.39996+n,_=f*11%23/23*1.6-.8,m=Math.sqrt(Math.max(0,1-_*_));this.dummy.position.set(Math.cos(g)*a*m*.95,_*a*.69,Math.sin(g)*a*m*.72),this.dummy.rotation.set(0,g,0),this.dummy.scale.setScalar(.72+f%4*.12),this.dummy.updateMatrix(),h.setMatrixAt(f,this.dummy.matrix),h.setColorAt(f,new me(d[(f+n)%d.length]))}h.castShadow=!0,h.receiveShadow=!0,l.add(h),this.clusters.push({group:l,phase:s*2.1+o+n*.73,speed:.84+n*.11})}}update(e,t,n,s){this.elapsed+=e;for(const a of this.clusters){const c=Math.sin(this.elapsed*.48+a.phase*.35);a.group.rotation.z=Math.sin(this.elapsed*a.speed+a.phase)*.025+c*.012,a.group.rotation.x=Math.cos(this.elapsed*a.speed*.71+a.phase)*.012}const r=t>.02,o=s<.3;this.porchLight.intensity=(1-s)*(4.7+t*1.8);for(const[a,c]of this.glints.entries()){const l=!r&&!o&&a>=11;c.visible=r||l,c.material.opacity=r?t*(o?.32:.12)*(.82+Math.sin(this.elapsed*.65+a*1.6)*.18):l?.035:0}for(const a of this.wetPatches)a.material.opacity=.035+n*.145}}function K1(i,e){e(3.9,6.9,-22.05,17.35,.022,"terrain-turf",6.4),e(15.45,2.55,-12.375,19.525,.022,"terrain-paving",3.6),e(11,.62,-14,14.37,.031,"terrain-terracotta",3.2);const t=new fn({color:16777215,roughness:.9}),n=new ci(new nn(.93,.11,.24),t,20),s=new ci(new nn(.93,.025,.26),t.clone(),20),r=new ct;for(let u=0;u<20;u++){const h=-23.53+u*.95;r.position.set(h,.064,20.65),r.updateMatrix(),n.setMatrixAt(u,r.matrix),n.setColorAt(u,new me(u%3?14010804:13221287)),r.position.y=.131,r.updateMatrix(),s.setMatrixAt(u,r.matrix),s.setColorAt(u,new me(u%4?14800576:14274488))}n.instanceMatrix.needsUpdate=s.instanceMatrix.needsUpdate=!0,n.name="terrain-foreground-curb-body",s.name="terrain-foreground-curb-cap",n.castShadow=s.castShadow=!0,n.receiveShadow=s.receiveShadow=!0,i.add(n,s);const o=new mt;o.name="terrain-storm-drain",o.position.set(-5.25,0,21.19);const a=new Pe(new nn(.83,.016,.36),new fn({color:4868935,metalness:.12,roughness:.72}));a.position.y=.087,o.add(a);const c=new Pe(new nn(.69,.019,.23),new fn({color:1975847,metalness:.08,roughness:.88}));c.position.y=.099,o.add(c);const l=new ci(new nn(.045,.015,.22),new fn({color:7828074,metalness:.18,roughness:.68}),10);for(let u=0;u<10;u++)r.position.set(-.3+u*.067,.113,0),r.updateMatrix(),l.setMatrixAt(u,r.matrix);l.instanceMatrix.needsUpdate=!0,o.add(l),i.add(o)}function $1(){const i=document.querySelector("#orientation-gate"),e=document.querySelector("#landscape-title"),t=document.querySelector("#landscape-help"),n=document.querySelector("#landscape-button"),s=document.querySelector("#mobile-fullscreen"),r=document.querySelector("#continue-windowed"),o=document.documentElement,a=document,c=()=>{try{screen.orientation?.unlock?.()}catch{}},l=matchMedia("(pointer:coarse), (max-width:600px), (max-width:900px) and (max-height:600px)");let u=!1;const h=()=>!!(document.fullscreenElement||a.webkitFullscreenElement),d=()=>matchMedia("(display-mode:standalone)").matches||!!navigator.standalone;function f(){e.textContent="进入全屏游玩",s.textContent=h()?"退出全屏":"全屏",s.setAttribute("aria-label",s.textContent)}async function g(){if(u)return;u=!0,n.disabled=!0;let _=h()||d();try{if(!_){const m=o.requestFullscreen||o.webkitRequestFullscreen;if(!m)throw Error("unsupported");await m.call(o),_=!0}}catch{t.textContent="此浏览器未允许网页全屏。iPhone/iPad 可在 Safari 分享菜单选择“添加到主屏幕”，从桌面打开后横置手机；微信内请先用系统浏览器打开。也可点下方继续。",i.classList.add("display-gate-open")}c(),_&&i.classList.remove("display-gate-open"),u=!1,n.disabled=!1,f(),window.dispatchEvent(new Event("resize"))}n.addEventListener("click",g),r.addEventListener("click",()=>{i.classList.remove("display-gate-open"),f()}),s.addEventListener("click",async()=>{if(h())try{await(document.exitFullscreen||a.webkitExitFullscreen)?.call(document)}catch{}else await g()});for(const _ of["fullscreenchange","webkitfullscreenchange"])document.addEventListener(_,()=>{c(),f(),window.dispatchEvent(new Event("resize"))});window.addEventListener("resize",f),window.visualViewport?.addEventListener("resize",()=>window.dispatchEvent(new Event("resize"))),l.addEventListener("change",f),c(),f()}function rd(){return matchMedia("(orientation:portrait) and (pointer:coarse), (orientation:portrait) and (max-width:600px)").matches}function Z1(){const i=document.querySelector("#scene");return{width:i.clientWidth,height:i.clientHeight}}const vi=8,od={off:{density:0,near:0,far:0,farFraction:0},low:{density:.42,near:12,far:24,farFraction:.38},medium:{density:.78,near:19,far:35,farFraction:.53},high:{density:1.15,near:26,far:52,farFraction:.68}};function ad(i,e){const t=[],n=[],s=[];for(let o=0;o<i;o++){const a=o*Math.PI/i,c=Math.cos(a),l=Math.sin(a),u=t.length/3;for(let h=0;h<=e;h++){const d=h/e,f=.115*(1-d*.94),g=d*d*(o%2?-.045:.045);for(const _ of[-1,1]){const m=_*f+g;t.push(c*m,d*(.58+o*.035),l*m),n.push(_<0?0:1,d)}}for(let h=0;h<e;h++){const d=u+h*2;s.push(d,d+1,d+2,d+1,d+3,d+2)}}const r=new kt;return r.setAttribute("position",new lt(t,3)),r.setAttribute("uv",new lt(n,2)),r.setIndex(s),r.computeBoundingSphere(),r}function J1(){return new I0({uniforms:{uTime:{value:0},uWind:{value:.9},uWindDirection:{value:new re(.88,.48)},uPlayerFoot:{value:new A(0,0,0)},uPlayerActive:{value:0},uRadius:{value:1.45},uPush:{value:1},uRain:{value:0},uLight:{value:1},uFogColor:{value:new me(13228244)},uFogDensity:{value:.0055}},vertexShader:`
      precision highp float;
      attribute vec3 position;
      attribute vec2 uv;
      attribute vec3 instanceColor;
      attribute mat4 instanceMatrix;
      uniform mat4 modelMatrix;
      uniform mat4 viewMatrix;
      uniform mat4 projectionMatrix;
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
      }
    `,fragmentShader:`
      precision highp float;
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
        color = mix(color, color * vec3(0.73, 0.87, 0.91), uRain * 0.23);
        float fog = 1.0 - exp(-pow(uFogDensity * vDepth, 2.0));
        gl_FragColor = vec4(mix(color, uFogColor, clamp(fog, 0.0, 1.0)), 1.0);
      }
    `,side:Ht,depthWrite:!0})}function j1(i){let e=i>>>0;return()=>(e=Math.imul(1664525,e)+1013904223>>>0,e/4294967296)}function Q1(i,e,t){let n=(Math.imul(i,73856093)^Math.imul(e,19349663))>>>0;for(let s=0;s<t.length;s++)n=Math.imul(n^t.charCodeAt(s),16777619)>>>0;return n}class eM{constructor(e,t,n){this.parent=e,this.placement=t,this.settings={...n},this.root.name="dynamic-grass",this.root.userData.noStaticCollision=!0,e.add(this.root),this.rebuild()}parent;placement;root=new mt;nearGeometry=ad(3,3);farGeometry=ad(2,1);material=J1();chunks=[];dummy=new ct;color=new me;settings;visibleChunks=0;nearChunks=0;visibleInstances=0;setSettings(e){const t=this.settings;this.settings={...t,...e},(t.quality!==this.settings.quality||t.density!==this.settings.density)&&this.rebuild()}rebuild(){for(const t of this.chunks)this.root.remove(t.mesh),t.mesh.dispose();this.chunks.length=0,this.visibleChunks=0,this.nearChunks=0,this.visibleInstances=0;const e=od[this.settings.quality];if(!(e.density<=0||this.settings.density<=0))for(const t of this.placement.zones)for(let n=Math.floor(t.minX/vi);n<=Math.floor(t.maxX/vi);n++)for(let s=Math.floor(t.minZ/vi);s<=Math.floor(t.maxZ/vi);s++){const r=Math.max(t.minX,n*vi),o=Math.min(t.maxX,(n+1)*vi),a=Math.max(t.minZ,s*vi),c=Math.min(t.maxZ,(s+1)*vi),l=Math.floor((o-r)*(c-a)*t.density*e.density*this.settings.density);if(l<=0)continue;const u=j1(Q1(n,s,t.id)),h=new ci(this.nearGeometry,this.material,l);h.name=`grass-${t.id}-${n}-${s}`,h.userData.noStaticCollision=!0,h.castShadow=!1,h.receiveShadow=!1;let d=0;for(let _=0;d<l&&_<l*9;_++){const m=r+u()*(o-r),p=a+u()*(c-a);if(!this.placement.allowed(m,p))continue;this.dummy.position.set(m,this.placement.heightAt(m,p)+.004,p),this.dummy.rotation.set(0,u()*Math.PI*2,0);const M=.72+u()*.42;this.dummy.scale.set(M,M*(.75+u()*.45),M),this.dummy.updateMatrix(),h.setMatrixAt(d,this.dummy.matrix),this.color.setHex(t.colors[Math.floor(u()*t.colors.length)]),this.color.multiplyScalar(.87+u()*.26),h.setColorAt(d,this.color),d++}if(d===0){h.dispose();continue}h.count=d,h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0);const f=(r+o)/2,g=(a+c)/2;h.boundingSphere=new Bn(new A(f,this.placement.heightAt(f,g)+.4,g),Math.hypot(o-r,c-a)/2+1.6),h.frustumCulled=!0,this.root.add(h),this.chunks.push({mesh:h,x:f,z:g,count:d,visibleCount:0,near:!0})}}update(e,t,n,s,r,o,a){const c=this.material.uniforms;c.uTime.value=e,c.uWind.value=this.settings.wind*r.strength,c.uWindDirection.value.set(r.directionX,r.directionZ),c.uRain.value=r.rain,c.uLight.value=.72+Math.max(0,Math.min(1,o))*.28,a&&(c.uFogColor.value.copy(a.color),c.uFogDensity.value=a.density),c.uPlayerActive.value=t&&!s?1:0,t&&c.uPlayerFoot.value.copy(t),c.uRadius.value=this.settings.radius,c.uPush.value=this.settings.push,this.visibleChunks=0,this.nearChunks=0,this.visibleInstances=0;const l=od[this.settings.quality];for(const u of this.chunks){const h=Math.hypot(u.x-n.x,u.z-n.z),d=!s&&h<l.far;if(u.mesh.visible=d,!d){u.visibleCount=0;continue}const f=h<l.near;f!==u.near&&(u.mesh.geometry=f?this.nearGeometry:this.farGeometry,u.near=f),u.visibleCount=f?u.count:Math.max(1,Math.floor(u.count*l.farFraction)),u.mesh.count=u.visibleCount,this.visibleChunks++,this.visibleInstances+=u.visibleCount,f&&this.nearChunks++}}stats(){const e=[this.nearGeometry,this.farGeometry].reduce((n,s)=>n+Object.values(s.attributes).reduce((r,o)=>r+o.array.byteLength,0)+(s.index?.array.byteLength??0),0),t=this.chunks.reduce((n,s)=>n+s.mesh.instanceMatrix.array.byteLength+(s.mesh.instanceColor?.array.byteLength??0),0);return{...this.settings,chunks:this.chunks.length,visibleChunks:this.visibleChunks,nearChunks:this.nearChunks,instances:this.chunks.reduce((n,s)=>n+s.count,0),visibleInstances:this.visibleInstances,estimatedBufferBytes:e+t}}auditPlacement(){const e=new Be,t=new A;let n=0,s=0,r=0;for(const o of this.chunks)for(let a=0;a<o.count;a++)o.mesh.getMatrixAt(a,e),t.setFromMatrixPosition(e),r++,this.placement.allowed(t.x,t.z)||n++,s=Math.max(s,Math.abs(t.y-this.placement.heightAt(t.x,t.z)-.004));return{checked:r,outsideMask:n,maxHeightError:s}}dispose(){for(const e of this.chunks)this.root.remove(e.mesh),e.mesh.dispose();this.chunks.length=0,this.parent.remove(this.root),this.nearGeometry.dispose(),this.farGeometry.dispose(),this.material.dispose()}}const Ms=[6457947,7905124,9942650,5341022,10993017],cd=[{id:"garden-north",minX:-38.8,maxX:-24.2,minZ:-10.3,maxZ:-7.4,density:20,colors:Ms},{id:"garden-south",minX:-38.8,maxX:-24.2,minZ:5.3,maxZ:9.7,density:22,colors:Ms},{id:"garden-west-north",minX:-39.1,maxX:-37.1,minZ:-7.3,maxZ:-2.8,density:20,colors:Ms},{id:"garden-west-south",minX:-39.1,maxX:-37.1,minZ:2.8,maxZ:5.2,density:20,colors:Ms},{id:"garden-east-north",minX:-25.9,maxX:-24.1,minZ:-7.3,maxZ:-2.8,density:20,colors:Ms},{id:"garden-east-south",minX:-25.9,maxX:-24.1,minZ:2.8,maxZ:5.2,density:20,colors:Ms}];function tM(i,e,t){if(i<=-39.2||i>=-24||e<=-10.4||e>=9.8||Math.abs(e)<2.8||i>-36.9&&i<-26.1&&e>-6.9&&e<4.9||e>4.9&&Math.abs(i+31.5)<1.15)return!1;for(const n of t)if(Math.abs(i-n.x)<n.w/2+1&&Math.abs(e-n.z)<n.d/2+1)return!1;return!0}function nM(i,e){return .002}const iM=["north","northEast","east","southEast","south","southWest","west","northWest"],fe={scene:document.querySelector("#scene"),loading:document.querySelector("#loading"),hint:document.querySelector("#hint"),interaction:document.querySelector("#interaction"),dialogue:document.querySelector("#dialogue"),dialogueName:document.querySelector("#dialogue-name"),dialogueText:document.querySelector("#dialogue-text"),location:document.querySelector("#location-name"),time:document.querySelector("#time"),weather:document.querySelector("#weather"),inventory:document.querySelector("#inventory"),goal:document.querySelector("#goal"),shop:document.querySelector("#shop"),shopStock:document.querySelector("#shop-stock"),buySeed:document.querySelector("#buy-seed"),sellFlower:document.querySelector("#sell-flower"),toast:document.querySelector("#toast"),journal:document.querySelector("#journal"),journalContent:document.querySelector("#journal-content"),dialogueChoices:document.querySelector("#dialogue-choices"),guide:document.querySelector("#quest-guide")},zt=new Zy({antialias:!0,powerPreference:"high-performance"});zt.setPixelRatio(Math.min(window.devicePixelRatio,1.75));zt.setSize(window.innerWidth,window.innerHeight);zt.shadowMap.enabled=!0;zt.shadowMap.type=Rd;zt.outputColorSpace=at;zt.toneMapping=Id;zt.toneMappingExposure=1.34;fe.scene.appendChild(zt.domElement);const Tn=new Hm;Tn.background=new me(13228244);Tn.fog=new no(13228244,.0055);const Bt=new Jt(20,window.innerWidth/window.innerHeight,.1,450),Ri=new A(0,12.8,48),Df=new A(0,320,112);let Xt=!1;const Vn=new A;Bt.position.copy(Ri);Bt.lookAt(0,0,0);const Nf=new X0(15005951,8226429,2.1);Tn.add(Nf);const Yt=new xf(16771265,3.2);Yt.position.set(-18,25,22);Yt.castShadow=!0;Yt.shadow.mapSize.set(2048,2048);Yt.shadow.camera.left=-56;Yt.shadow.camera.right=136;Yt.shadow.camera.top=42;Yt.shadow.camera.bottom=-42;Yt.shadow.camera.near=.1;Yt.shadow.camera.far=125;Yt.shadow.bias=-5e-5;Yt.shadow.normalBias=.035;Yt.shadow.radius=3;Yt.target.position.set(40,0,0);Tn.add(Yt);Tn.add(Yt.target);const Pt=new q1(Tn,Nf,Yt),ge=new mt;Tn.add(ge);const Al=new j0,Ft=new Set,qn=new Map,ld=new Map,ud=new Map;let Mi;const uu=new Map,Lr=new Map,hu=new Map,sM=new H1(Lr),Uf=new z1;let ea;const du=new Map,xc=new Map;let Cs,Kr=16;const Rl=4;let Ss=0,ws=0,la=[],Xi=null,$r=null;const Is={x:-7.9,z:18.8};let ua=null;const fu=new Map;let Zr=null,ha=null,qi=null,pu=null;const Ps={x:-6.4,z:17};let Ls=null;const Ff=new Map,vc=new Map,da=new Map;let fa={},Ge=sr.qingchuan,rn=[],he,st=[],Sa=[],un=null;const Dr=new A,wa=new URLSearchParams(window.location.search);function qo(i,e,t,n){const s=wa.get(i),r=s===null?e:Number(s);return Number.isFinite(r)?Ot.clamp(r,t,n):e}const hd=wa.get("grassQuality"),tn={quality:["off","low","medium","high"].includes(hd??"")?hd:"medium",density:qo("grassDensity",1,.1,2),wind:qo("grassWind",1,0,2.5),radius:qo("grassRadius",1.45,.3,3.5),push:qo("grassPush",1,0,2)},Es={setWind(i){tn.wind=Ot.clamp(i,0,2.5),un?.setSettings({wind:tn.wind})},setRadius(i){tn.radius=Ot.clamp(i,.3,3.5),un?.setSettings({radius:tn.radius})},setDensity(i){tn.density=Ot.clamp(i,.1,2),un?.setSettings({density:tn.density})},setPush(i){tn.push=Ot.clamp(i,0,2),un?.setSettings({push:tn.push})},setQuality(i){["off","low","medium","high"].includes(i)&&(tn.quality=i,un?.setSettings({quality:i}))},auditPlacement(){return un?.auditPlacement()??null},stats(){return{grass:un?.stats()??null,render:{...zt.info.render},memory:{...zt.info.memory},foot:un?{x:Dr.x,y:Dr.y,z:Dr.z}:null}}};window.__qingchuanGrass=Es;if(wa.has("grassDebug")){const i=document.createElement("aside");i.setAttribute("aria-label","动态草地调试"),i.style.cssText="position:absolute;left:36px;top:315px;z-index:12;width:230px;padding:11px 13px;border:1px solid #b8cfad;border-radius:9px;background:#203b39e8;color:#e5f3de;font:12px/1.55 system-ui;box-shadow:0 9px 22px #152a2866",i.innerHTML=`<strong>动态草地 · 调试</strong>
    <label style="display:block">风力 <input data-grass="wind" type="range" min="0" max="2.5" step="0.05" value="${tn.wind}"></label>
    <label style="display:block">推草半径 <input data-grass="radius" type="range" min="0.3" max="3.5" step="0.05" value="${tn.radius}"></label>
    <label style="display:block">密度 <input data-grass="density" type="range" min="0.1" max="2" step="0.05" value="${tn.density}"></label>
    <label style="display:block">档位 <select data-grass="quality"><option>off</option><option>low</option><option>medium</option><option>high</option></select></label>
    <div data-grass-stats style="font-variant-numeric:tabular-nums;margin-top:5px"></div>`,i.querySelector("select").value=tn.quality;for(const s of i.querySelectorAll("input[data-grass]"))s.addEventListener("input",()=>{const r=Number(s.value);s.dataset.grass==="wind"&&Es.setWind(r),s.dataset.grass==="radius"&&Es.setRadius(r),s.dataset.grass==="density"&&Es.setDensity(r)});i.querySelector("select").addEventListener("change",s=>Es.setQuality(s.target.value)),fe.scene.parentElement?.append(i);let e=0,t=performance.now();const n=s=>{if(e++,s-t>=1e3){const r=Es.stats();i.querySelector("[data-grass-stats]").textContent=`${Math.round(e*1e3/(s-t))} FPS · ${r.grass?.visibleInstances??0} 簇 · ${r.grass?.visibleChunks??0} 块 · ${Math.round((r.grass?.estimatedBufferBytes??0)/1024)} KiB 草地缓冲`,e=0,t=s}requestAnimationFrame(n)};requestAnimationFrame(n)}let Jr=[];const Ea=new Map;let An=[];const Nr=[];let rt=null,Cl=!1,Wi,yc=0,dd="",Il=!1,hn=0;const xe=U1(),Rt=new Rf(xe.location?.worldTime,xe.location?.night,xe.location?.weather),rM=[[-33,-3],[-30,-3],[-33,1],[-30,1]];let Mc=0,ta=0,Sc=0;const bn=(i,e={})=>new fn({color:i,roughness:.88,...e});function L(i,e,t,n,s,r,o,a=ge,c={}){const l=new Pe(new nn(i,e,t),bn(n,c));return l.position.set(s,r,o),l.castShadow=e>.16,l.receiveShadow=!0,a.add(l),l}function Ds(i,e,t,n,s,r=.01){const o=new Pe(new mn(i,e),bn(t));return o.rotation.x=-Math.PI/2,o.position.set(n,r,s),o.receiveShadow=!0,ge.add(o),o}function Pl(i,e,t,n=0,s=0,r=!1){const o=(r?hu:Lr).get(i).clone();return o.wrapS=o.wrapT=Dn,o.repeat.set(e,t),o.offset.set(n,s),o.needsUpdate=!0,o}function St(i,e,t,n,s,r,o,a=16777215){const c=hu.has(r),l=i/o,u=e/o,h=(t-i/2)/o,d=-(n+e/2)/o,f=a!==16777215?a:r==="terrain-asphalt"?11579310:r==="terrain-paving"?15327960:16777215,g=new Pe(new mn(i,e),bn(f,{map:Pl(r,l,u,h,d),roughness:r==="terrain-asphalt"?.89:r==="terrain-paving"?.92:.98,...c?{normalMap:Pl(r,l,u,h,d,!0),normalScale:new re(.25,.25),roughness:r==="asphalt"?.95:.98}:{}}));return g.rotation.x=-Math.PI/2,g.position.set(t,s,n),g.receiveShadow=!0,ge.add(g),g}function oM(i,e="#273646",t="#f7e9cd",n=384){const s=document.createElement("canvas");s.width=n,s.height=96;const r=s.getContext("2d");r.fillStyle=e,r.fillRect(0,8,n,80),r.fillStyle=t,r.textAlign="center",r.textBaseline="middle",r.font=`bold ${i.length>18?28:34}px system-ui, sans-serif`,r.fillText(i,n/2,48,n-24);const o=new Qi(s);return o.colorSpace=at,o.magFilter=bt,o}function pn(i,e,t,n,s,r){const o=new Pe(new mn(s,s/4),new qt({map:oM(i,r),transparent:!0,side:Ht}));return o.position.set(e,t,n),ge.add(o),o}function Of(i,e,t,n,s){const r=`${i}-${e}-${t}`,o=ld.get(r);if(o)return o;const a=uu.get(i),c=document.createElement("canvas");c.width=n,c.height=s;const l=c.getContext("2d");l.imageSmoothingEnabled=!1,l.drawImage(a,t*n,e*s,n,s,0,0,n,s);const u=l.getImageData(0,0,c.width,c.height).data;let h=c.width,d=c.height,f=0,g=0;for(let m=0;m<c.height;m++)for(let p=0;p<c.width;p++)u[(m*c.width+p)*4+3]<24||(h=Math.min(h,p),d=Math.min(d,m),f=Math.max(f,p),g=Math.max(g,m));const _={minX:h,minY:d,width:Math.max(1,f-h+1),height:Math.max(1,g-d+1)};return ld.set(r,_),_}function aM(i,e,t){const n=ud.get(i);if(n)return n;let s=1,r=1;for(let a=0;a<4;a++)for(let c=0;c<3;c++){const l=Of(i,a,c,e,t);s=Math.max(s,l.width),r=Math.max(r,l.height)}const o={maxWidth:s,maxHeight:r};return ud.set(i,o),o}function Bf(i,e,t){const n={front:0,left:1,right:2,back:3}[e],s=i+"-"+n+"-"+t;if(qn.has(s))return qn.get(s);const r=uu.get(i),o=r.width/3,a=r.height/4,c=Of(i,n,t,o,a),l=aM(i,o,a),u=document.createElement("canvas");u.width=96,u.height=128;const h=u.getContext("2d");h.imageSmoothingEnabled=!1;const d=Math.min(88/l.maxWidth,118/l.maxHeight),f=Math.round(c.width*d),g=Math.round(c.height*d);h.drawImage(r,t*o+c.minX,n*a+c.minY,c.width,c.height,Math.round((96-f)/2),126-g,f,g);const _=new Qi(u);return _.magFilter=bt,_.minFilter=bt,_.generateMipmaps=!1,_.colorSpace=at,qn.set(s,_),_}function cM(i){return{front:0,left:1,right:2,back:3}[i]}function zf(){if(Cs){Ss=Cs.width/Kr,ws=Cs.height/Rl,la=[];for(let i=0;i<Rl;i++){let e=Ss,t=ws,n=0,s=0;for(let r=0;r<Kr;r++){const o=document.createElement("canvas");o.width=Math.ceil(Ss),o.height=Math.ceil(ws);const a=o.getContext("2d");a.imageSmoothingEnabled=!1,a.drawImage(Cs,r*Ss,i*ws,Ss,ws,0,0,o.width,o.height);const c=a.getImageData(0,0,o.width,o.height).data;for(let l=0;l<o.height;l++)for(let u=0;u<o.width;u++)c[(l*o.width+u)*4+3]<24||(e=Math.min(e,u),t=Math.min(t,l),n=Math.max(n,u),s=Math.max(s,l))}la[i]={minX:e,minY:t,width:Math.max(1,n-e+1),height:Math.max(1,s-t+1)}}}}function kf(i,e="front"){const t=Math.max(0,Math.min(Kr-1,i)),n=cM(e),s=`provided-4dir-${n}-${t}`;if(qn.has(s))return qn.get(s);la.length||zf();const r=Cs,o=Ss||r.width/Kr,a=ws||r.height/Rl,c=la[n]??{minX:0,minY:0,width:o,height:a},l=document.createElement("canvas");l.width=96,l.height=128;const u=l.getContext("2d");u.imageSmoothingEnabled=!1;const h=Math.min(88/c.width,118/c.height),d=Math.round(c.width*h),f=Math.round(c.height*h);u.drawImage(r,t*o+c.minX,n*a+c.minY,c.width,c.height,Math.round((96-d)/2),126-f,d,f);const g=new Qi(l);return g.magFilter=bt,g.minFilter=bt,g.generateMipmaps=!1,g.colorSpace=at,qn.set(s,g),g}function lM(){if(Mi)return Mi;const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d"),t=e.createRadialGradient(64,64,8,64,64,62);return t.addColorStop(0,"rgba(20, 31, 35, 0.56)"),t.addColorStop(.55,"rgba(20, 31, 35, 0.25)"),t.addColorStop(1,"rgba(20, 31, 35, 0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Mi=new Qi(i),Mi.colorSpace=at,Mi.minFilter=Ct,Mi.magFilter=Ct,Mi}function $s(i,e,t,n,s=.72){const r=new Pe(new mn(1,1),new qt({map:lM(),color:2373178,transparent:!0,opacity:s,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.position.set(i,.046,e),r.scale.set(t,n,1),r.renderOrder=1,ge.add(r),r}function uM(i){const e=Hf(["cafe-table","cafe-board","cafe-planter"][i]);if(e)return e;const t=`cafe-prop-${i}`;if(qn.has(t))return qn.get(t);const n=[[0,825],[825,1340],[1340,ea.width]],[s,r]=n[i],o=document.createElement("canvas");o.width=r-s,o.height=ea.height;const a=o.getContext("2d");a.drawImage(ea,s,0,o.width,o.height,0,0,o.width,o.height);const c=a.getImageData(0,0,o.width,o.height).data;let l=o.width,u=o.height,h=0,d=0;for(let T=0;T<o.height;T++)for(let b=0;b<o.width;b++)c[(T*o.width+b)*4+3]<24||(l=Math.min(l,b),u=Math.min(u,T),h=Math.max(h,b),d=Math.max(d,T));const f=document.createElement("canvas");f.width=f.height=128;const g=f.getContext("2d");g.imageSmoothingEnabled=!1;const _=h-l+1,m=d-u+1,p=Math.min(116/_,116/m),M=_*p,v=m*p;g.drawImage(o,l,u,_,m,(128-M)/2,126-v,M,v);const x=new Qi(f);return x.magFilter=x.minFilter=bt,x.generateMipmaps=!1,x.colorSpace=at,qn.set(t,x),x}function Hf(i){if(xc.has(i))return xc.get(i);const e=du.get(i);if(!e)return;const t=new ft(e);return t.colorSpace=at,t.magFilter=Ct,t.minFilter=dn,t.needsUpdate=!0,xc.set(i,t),t}function hM(i,e,t){const n=Hf(i),s=du.get(i);if(!n||!s)return;const r=new xa(new ql({map:n,transparent:!0,alphaTest:.16,depthWrite:!0,toneMapped:!1})),o=Math.min(e/s.width,t/s.height);return r.scale.set(s.width*o,s.height*o,1),r.center.set(.5,0),r}function dM(i,e){if(!Xi)return;const t=bf(Xi.scene);t.traverse(a=>{if(!(a instanceof Pe))return;a.userData.sharedAssetGeometry=!0,a.userData.sharedAssetMap=!0,a.castShadow=!0,a.receiveShadow=!0,a.frustumCulled=!1;const c=Array.isArray(a.material)?a.material:[a.material];for(const l of c){const u=l.clone();"color"in u&&u.color instanceof me&&u.color.setHex(9404784),"roughness"in u&&(u.roughness=.94),"metalness"in u&&(u.metalness=.08),Array.isArray(a.material)?a.material[c.indexOf(l)]=u:a.material=u}});const s=new Et().setFromObject(t).getSize(new A);t.scale.setScalar(1.7/Math.max(s.y,.001)),t.position.set(i,0,e),t.rotation.y=Math.atan2(-Ri.z,Ri.x),t.renderOrder=0,ge.add(t),t.updateMatrixWorld(!0);const r=[];t.traverse(a=>{a instanceof Wr&&/^(L|R)_ToeBase$/.test(a.name)&&r.push(a)});const o=r.length?Math.min(...r.map(a=>a.getWorldPosition(new A).y)):new Et().setFromObject(t).min.y;t.position.y+=.48-o,L(1.8,.34,1.8,7037533,i,.17,e),L(1.5,.12,1.5,11772557,i,.4,e),$s(i,e,1.45,.7,.5)}function fM(i,e){if(!$r)return!1;const t=$r.clone(!0);t.updateMatrixWorld(!0);const n=new Et().setFromObject(t),s=n.getSize(new A);if(s.y<.001)return!1;const r=n.getCenter(new A),o=2.5/s.y;return t.scale.setScalar(o),t.position.set(i-r.x*o,.1-n.min.y*o,e-r.z*o),t.traverse(a=>{a instanceof Pe&&(a.userData.sharedAssetGeometry=!0,a.userData.sharedAssetMaterial=!0,a.userData.sharedAssetMap=!0,a.castShadow=!0,a.receiveShadow=!0)}),ge.add(t),!0}function fd(i,e){if(!Zr)return!1;const t=Zr.clone(!0);t.userData.foregroundOccluder=!1,t.updateMatrixWorld(!0);const n=new Et().setFromObject(t),s=n.getSize(new A);if(s.y<.001)return!1;const r=n.getCenter(new A),o=3.1/s.y;return t.scale.setScalar(o),t.position.set(i-r.x*o,.08-n.min.y*o,e-r.z*o),t.traverse(a=>{a instanceof Pe&&(a.userData.sharedAssetGeometry=!0,a.userData.sharedAssetMaterial=!0,a.userData.sharedAssetMap=!0,a.castShadow=!0,a.receiveShadow=!0)}),ge.add(t),$s(i,e,2,.75,.42),!0}function Vf(i,e,t,n,s,r){const o=fu.get(i);if(!o)return null;const a=o.clone(!0);i==="cafe-menu"&&(a.rotation.y=Math.PI);const c=new Et().setFromObject(a),l=c.getSize(new A);if(Math.min(l.x,l.y,l.z)<.001)return null;const u=c.getCenter(new A);return a.scale.set(n/l.x,s/l.y,r/l.z),a.position.set(e-u.x*a.scale.x,.035-c.min.y*a.scale.y,t-u.z*a.scale.z),a.traverse(h=>{h instanceof Pe&&(h.userData.sharedAssetGeometry=!0,h.userData.sharedAssetMaterial=!0,h.userData.sharedAssetMap=!0,h.castShadow=!0,h.receiveShadow=!0)}),ge.add(a),a}function pM(i,e){if(!ha)return!1;const t=ha.clone(!0);t.updateMatrixWorld(!0);const n=new Et().setFromObject(t),s=n.getSize(new A);if(Math.min(s.x,s.y,s.z)<.001)return!1;const r=n.getCenter(new A);return t.scale.set(2.8/s.x,2.55/s.y,.78/s.z),t.position.set(i-r.x*t.scale.x,.035-n.min.y*t.scale.y,e-r.z*t.scale.z),t.userData.foregroundOccluder=!1,t.traverse(o=>{o instanceof Pe&&(o.userData.sharedAssetGeometry=!0,o.userData.sharedAssetMaterial=!0,o.castShadow=!0,o.receiveShadow=!0)}),ge.add(t),$s(i,e,2.25,.55,.42),!0}function Sn(i,e,t,n,s){const r=[.66,.58,.65][i];n*=r,s*=r;const o=["cafe-table","cafe-menu","cafe-planter"][i],a=[1.8,.62,.9][i]*r,c=Vf(o,e,t,n,s,a);if(c)return c;const l=hM(["cafe-table","cafe-board","cafe-planter"][i],n,s);if(l)return l.position.set(e,.03,t),ge.add(l),$s(e,t,n*.76,n*.34,.52),l;const u=new xa(new ql({map:uM(i),transparent:!0,alphaTest:.16,depthWrite:!0}));return u.scale.set(n,s,1),u.position.set(e,s/2,t),u.renderOrder=0,ge.add(u),$s(e,t,n*.76,n*.34,.52),u}async function Gf(i){if(!i.id||i.drawn||!fa[i.id])return;const e=i.id;try{let t=vc.get(e);if(!t){const a=!!(i.route&&i.route.length>1);t=Pf(`./assets/characters/drawn/${fa[e]}/character.json`,{directions:a?["south","west","north","east"]:["south"],motions:a?["idle","walk"]:["idle"]}),vc.set(e,t)}const n=await t;if(!n||(Ff.set(e,n),da.delete(e),bd(),!rn.includes(i)))return;i.drawn=n;const s=i.sprite.material;s.color.setHex(16777215),s.toneMapped=!0,s.needsUpdate=!0;const r=n.direction(i.direction),o=i.walking?n.walkFrame(r,i.walkDistance,.88):n.idleFrame(r,i.animClock);Ll(i,i.facing,o)}catch(t){console.warn(`居民 ${e} 的二维素材未能完整加载，将重试下载。`,t),vc.delete(e),da.set(e,`居民「${i.name??e}」新版动画下载失败，正在重试。`),bd(),window.setTimeout(()=>{rn.includes(i)&&!i.drawn&&Gf(i)},15e3)}finally{rn.includes(i)&&(i.sprite.visible=!!i.drawn,i.shadow.visible=!!i.drawn)}}function pd(i,e,t,n,s,r){const o=i==="protagonist-provided"?Ls:r?Ff.get(r):null,a=!!o,c=i==="protagonist-provided"&&!!Xi&&!a,l=o?o.texture("south","idle",0):c?new ft:i==="protagonist-provided"?kf(0,"front"):Bf(i,"front",0),u=new Pe(new mn(1,1),new fn({map:l,transparent:!0,alphaTest:.16,depthWrite:!0,depthTest:!0,opacity:c?0:1,color:a?16777215:14801352,toneMapped:!0,roughness:1,metalness:0,side:Ht,shadowSide:Ht}));u.castShadow=!c,u.receiveShadow=!0,u.userData.sharedAssetMap=!0,u.scale.set(1.48,2.08,1),u.position.set(e,.045+u.scale.y/2,t),u.rotation.y=0,u.renderOrder=2,ge.add(u);const h=$s(e,t,c?.72:.78,c?.28:.34,c?.52:.68);h.renderOrder=1;const d={sprite:u,shadow:h,skin:i,drawn:o??void 0,facing:"front",direction:"south",frame:0,x:e,z:t,baseY:1.085,animClock:0,walkDistance:0,velocityX:0,velocityZ:0,walking:!1,name:n,line:s,id:r};if(c){const f=bf(Xi.scene),_=new Et().setFromObject(f).getSize(new A);f.scale.setScalar(2.12/Math.max(_.y,.001)),f.position.set(e,0,t),f.rotation.y=Math.atan2(-Ri.z,Ri.x),f.renderOrder=2,f.traverse(x=>{if(!(x instanceof Pe))return;x.userData.sharedAssetGeometry=!0,x.userData.sharedAssetMaterial=i==="protagonist-provided",x.userData.sharedAssetMap=!0,x.castShadow=!0,x.receiveShadow=!0,x.frustumCulled=!1;const T=Array.isArray(x.material)?x.material:[x.material],b={mika:13143935,chen:10267319,yuan:10399628,barista:13221282},C=T.map(D=>{const w=i==="protagonist-provided"?D:D.clone();return i!=="protagonist-provided"&&"color"in w&&w.color instanceof me&&w.color.setHex(b[i]??16777215),w.transparent=!1,w.depthWrite=!0,w.needsUpdate=!0,w});x.material=Array.isArray(x.material)?C:C[0]}),ge.add(f);const m=new hg(f),p={};for(const x of Xi.animations){const T=x.name.toLowerCase();(T==="idle"||T==="walk"||T==="run")&&(p[T]=m.clipAction(x))}p.idle?.play(),m.update(0),f.updateMatrixWorld(!0);const M=[];if(f.traverse(x=>{x instanceof Wr&&/^(L|R)_ToeBase$/.test(x.name)&&M.push(x)}),M.length>0){const x=Math.min(...M.map(T=>T.getWorldPosition(new A).y));f.position.y+=.1-x}else{const x=new Et().setFromObject(f);f.position.y+=.1-x.min.y}f.updateMatrixWorld(!0),d.model=f,d.mixer=m,d.actions=p,d.motion="idle",d.modelBaseY=f.position.y;const v=f.getObjectByName("Hip");v instanceof Wr&&(d.hipBone=v,d.hipAnchor=f.worldToLocal(v.getWorldPosition(new A))),d.headingYaw=f.rotation.y}return d}const wc=new A,Ec=new A;function md(i,e,t,n,s,r){if(!i.model||!i.mixer||!i.actions)return;i.model.position.x=i.x,i.model.position.z=i.z;const o=e&&t?s&&r>2.8?"run":"walk":"idle";if(i.motion!==o){const l=i.motion?i.actions[i.motion]:void 0,u=i.actions[o];u?.reset().play(),l&&o==="idle"&&(l.paused=!0),l&&u&&l.crossFadeTo(u,.16,!1),i.motion=o}i.actions.walk&&(i.actions.walk.timeScale=Ot.clamp(r*.75,.5,2)),i.actions.run&&(i.actions.run.timeScale=Ot.clamp(r*.28,.65,1.35)),i.mixer.update(n);const a=i.headingYaw??Math.PI,c=Math.atan2(Math.sin(a-i.model.rotation.y),Math.cos(a-i.model.rotation.y));i.model.rotation.y+=c*(1-Math.exp(-n*14)),i.hipBone&&i.hipAnchor&&(i.model.updateMatrixWorld(!0),i.hipBone.getWorldPosition(wc),i.model.localToWorld(Ec.copy(i.hipAnchor)),i.model.position.x+=Ec.x-wc.x,i.model.position.z+=Ec.z-wc.z)}function Ll(i,e,t,n=i.direction){const s=i.drawn,r=s?.direction(n),o=i.walking?"walk":"idle",a=i.facing!==e||i.frame!==t||i.direction!==n||!!(s&&(i.drawnMotion!==o||i.drawnDirection!==r));i.facing=e,i.frame=t,i.direction=n,i.model||(s&&a?(i.sprite.material.map=s.texture(r,o,t),i.sprite.scale.x=Math.abs(i.sprite.scale.x),i.drawnMotion=o,i.drawnDirection=r):i.skin==="protagonist-provided"&&a?(i.sprite.material.map=kf(t,e),i.sprite.scale.x=Math.abs(i.sprite.scale.x),i.sprite.material.needsUpdate=!0):a&&(i.sprite.material.map=Bf(i.skin,e,t),i.sprite.material.needsUpdate=!0))}function gd(i,e){const t=Math.atan2(i,-e),n=Math.round(t/(Math.PI/4))+8&7;return iM[n]}function _d(i){return i==="north"?"back":i==="south"?"front":i==="east"||i==="northEast"||i==="southEast"?"right":"left"}function xd(i,e,t){i.x=e,i.z=t,i.sprite.position.x=e,i.sprite.position.z=t,i.model&&(i.model.position.x=e,i.model.position.z=t),i.shadow.position.x=e,i.shadow.position.z=t}function vd(i,e,t){const n=Math.hypot(e,t);if(n<1e-6)return 0;const s=Math.max(1,Math.ceil(n/.12)),r=e/s,o=t/s,a=i.x,c=i.z;for(let l=0;l<s;l++)Ei(i.x+r,i.z)||xd(i,i.x+r,i.z),Ei(i.x,i.z+o)||xd(i,i.x,i.z+o);return Math.hypot(i.x-a,i.z-c)}function yd(i,e,t,n){return i+(e-i)*(1-Math.exp(-t*n))}function pa(i,e,t=!1){const n=L(t?1.65:.09,.012,t?.09:1.65,16116419,i,.037,e);n.castShadow=!1}function mM(){L(160,.18,60,7903362,40,-.11,0),St(160,60,40,0,.001,"terrain-turf",6.4);const i=21,e=-30,t=i-e,n=(i+e)/2;for(const s of[0,48,96]){St(12.5,t,s,n,.019,"terrain-paving",3.6),L(8.4,.09,t,4279891,s,.01,n),St(8.3,t,s,n,.073,"terrain-asphalt",5.8);for(let r=-27;r+.825<i;r+=3.4)Math.abs(r)>5.7&&pa(s,r)}St(120,12.5,60,0,.02,"terrain-paving",3.6),L(120,.09,8.4,4279891,60,.02,0),St(120,8.3,60,0,.074,"terrain-asphalt",5.8);for(let s=7;s<118;s+=3.4)[48,96].every(r=>Math.abs(s-r)>5.7)&&pa(s,0,!0);St(36,5.2,-22,0,.024,"terrain-paving",3.6),St(10.8,11.8,-31.5,-1,.026,"terrain-turf",6.4);for(const s of[0,48,96])for(const r of[-5.45,5.45])for(let o=-3;o<=3;o++)L(.52,.013,1.5,15853261,s+o*1.05,.083,r).castShadow=!1}function gM(){const i=document.createElement("canvas");i.width=1024,i.height=256;const e=i.getContext("2d");e.filter="blur(15px)",e.fillStyle="rgba(101,133,130,.22)",e.beginPath(),e.moveTo(0,256),e.bezierCurveTo(135,205,210,222,320,202),e.bezierCurveTo(465,181,553,221,686,194),e.bezierCurveTo(830,210,909,177,1024,209),e.lineTo(1024,256),e.closePath(),e.fill(),e.fillStyle="rgba(111,137,137,.17)";for(const[s,r,o]of[[85,68,71],[237,84,91],[401,77,80],[578,91,101],[764,86,73],[926,72,87]])e.fillRect(s,256-o,r,o);const t=new Qi(i);t.colorSpace=at;const n=new Pe(new mn(235,22),new qt({map:t,transparent:!0,depthWrite:!1,fog:!1}));n.position.set(40,8,-46),n.name="blurred-distant-skyline",ge.add(n)}function _M(i){if(i.id==="qingchuan"){mM(),gM();return}L(i.size.x,.18,i.size.z,7903362,0,-.11,0),St(i.size.x,i.size.z,0,0,.001,"grass",5.2);for(const n of[-6.5,6.5])St(3.7,i.size.z,n,0,.02,"terrain-paving",3.6),St(i.size.x,3.7,0,n,.021,"terrain-paving",3.6);i.id==="qingchuan"&&St(19.35,8.3,-14.325,0,.006,"terrain-turf",6.4),L(8.4,.09,i.size.z,4279891,0,.01,0);const e=i.id==="qingchuan"?i.size.x/2+4.2:i.size.x,t=i.id==="qingchuan"?(i.size.x/2-4.2)/2:0;L(e,.09,8.4,4279891,t,.02,0),St(8.3,i.size.z,0,0,.073,"terrain-asphalt",5.8),St(e-.1,8.3,t,0,.074,"terrain-asphalt",5.8);for(let n=-19;n<20;n+=3.4)Math.abs(n)>5.7&&pa(0,n);for(let n=-22;n<23;n+=3.4)Math.abs(n)>5.7&&(i.id!=="qingchuan"||n>0)&&pa(n,0,!0);for(let n=-3;n<=3;n++)L(.52,.013,1.5,15853261,n*1.05,.083,-5.45).castShadow=!1,i.id!=="qingchuan"&&(L(1.5,.013,.52,15853261,-5.45,.084,n*1.05).castShadow=!1);for(const n of[-22,-6.1,6.1,22])for(const s of[-19,-6.1,6.1,19])L(.32,.05,.32,12171688,n,.05,s)}function xM(){St(8.4,6.7,-15.4,.3,.025,"terrain-turf",6.4),St(7.8,.55,-15.4,.3,.038,"terrain-soil",3.1),St(.55,6.2,-15.4,.3,.039,"terrain-soil",3.1);for(const[i,e]of[[-18.5,-2],[-12.7,-2.1],[-18.5,2.5],[-12.7,2.5]])Ai(i,e,.85);L(2,.33,.65,8739912,-13.5,.31,1.85),L(.16,.52,.16,4213577,-14.35,.26,1.85),L(.16,.52,.16,4213577,-12.65,.26,1.85);for(const[i,e]of[[8,-18],[19,-18],[8,18],[19,18]]){L(1.25,.34,1.25,11037797,i,.25,e),L(1.12,.06,1.12,8166774,i,.46,e);for(const t of[-.33,.31])for(const n of[-.31,.29])Xf(i+t,e+n)}Md(-2.7,-8.2,"mailbox"),Md(7.2,6.9,"bins"),Wf("central")}function Md(i,e,t){const n=new mt;if(n.userData.materialKind="metal",n.position.set(i,0,e),ge.add(n),t==="mailbox")L(.12,1.15,.12,4941414,0,.58,0,n),L(.62,.48,.42,6193808,0,1.05,0,n),L(.48,.07,.44,13096142,0,1.13,.01,n),st.push({x:i,z:e+.45,range:1.35,name:"街角邮筒",line:"邮筒里有新的城市通知。"});else for(const[s,r]of[[-.24,5799282],[.24,7306600]])L(.36,.72,.42,r,s,.36,0,n),L(.38,.06,.44,4414811,s,.75,0,n)}function Wf(i){const t=(s,r,o=0)=>{const a=new mt;a.userData.materialKind="metal",a.position.set(s+0,0,r),a.rotation.y=o,ge.add(a);for(const c of[-.42,.42]){const l=new Pe(new nu(.25,.035,6,12),bn(3689810));l.rotation.y=Math.PI/2,l.position.set(c,.28,0),l.castShadow=!0,a.add(l)}L(.06,.06,.72,10120269,0,.55,0,a).rotation.z=.08,L(.06,.42,.06,3689810,-.1,.47,0,a).rotation.z=-.2,L(.28,.045,.06,3689810,.16,.78,0,a).rotation.z=-.15},n=(s,r,o=7047056)=>{const a=new mt;a.userData.materialKind="metal",a.position.set(s+0,0,r),ge.add(a),L(.72,1.55,.42,o,0,.78,0,a),L(.53,.78,.035,10470075,0,.93,.23,a,{roughness:.32,emissive:2636604,emissiveIntensity:.18});for(let c=0;c<3;c++)L(.42,.045,.02,[15188346,15047545,10471074][c],0,.66+c*.18,.255,a);L(.11,.16,.03,3952720,.23,.22,.22,a)};if(i==="central"){t(10.4,6.1,-.18),n(19.4,6.25,7045777);for(const[s,r]of[[-20.2,-5.1],[-19.3,-5],[-18.4,-5.1],[-11.4,-5]]){const o=new Pe(new ca(.36,7,5),bn(6129259));o.scale.y=.62,o.position.set(s,.28,r),o.castShadow=!0,o.receiveShadow=!0,ge.add(o),Pt.registerSway(o,.018,.85,s+r)}}else{n(18.2,-4.1,7902358),t(-8.2,5.8,.22);for(const[s,r]of[[-10.8,19.3],[-9.8,19.1],[-8.8,19.3]]){const o=new Pe(new ca(.4,7,5),bn(6719852));o.scale.y=.58,o.position.set(s+0,.3,r),o.castShadow=!0,ge.add(o),Pt.registerSway(o,.02,.78,s*.4)}}}function Ai(i,e,t=1){if(qi){const s=qi.clone(!0);s.updateMatrixWorld(!0);const r=new Et().setFromObject(s),o=r.getSize(new A);if(o.y>.001){const a=4.05*t/o.y,c=r.getCenter(new A);s.scale.setScalar(a),s.name="community-rounded-tree",s.position.set(i-c.x*a,.02-r.min.y*a,e-c.z*a),s.traverse(u=>{u instanceof Pe&&(u.userData.sharedAssetGeometry=!0,u.userData.sharedAssetMaterial=!0,u.userData.sharedAssetMap=!0,u.userData.noStaticCollision=!0,u.castShadow=!0,u.receiveShadow=!0)}),ge.add(s);const l=L(.37*t,1.5*t,.37*t,7362372,i,.75*t,e);l.name="community-tree-trunk-collider",l.visible=!1,Pt.registerSway(s,.012/Math.max(t,.5),.82,i*.4+e*.2);return}}const n=new mt;n.position.set(i,0,e),n.scale.setScalar(t),ge.add(n),L(.37,1.5,.37,7362372,0,.75,0,n);for(const[s,r,o,a,c]of[[0,2,0,1.5,5212526],[-.55,1.7,.16,1.1,6396024],[.52,1.62,0,1.05,4226409],[.08,2.63,-.1,.96,6988155]])L(a,a*.76,a,c,s,r,o,n).userData.noStaticCollision=!0;Pt.registerSway(n,.018/Math.max(t,.5),1.05,i*.4+e*.2)}function Xf(i,e){L(.08,.22,.08,4685657,i,.58,e),L(.15,.12,.15,Math.floor(i*73+e*39)&1?16174471:15902366,i,.72,e)}function vM(i){const e=xe.plantedAt[i],t=Bs(e);return t===0?"空花圃 · 播种":t===3?"鲜花成熟 · 收获":`花苗生长中 · ${lu(e)} 秒`}function yM(i){for(const e of[...i.children])i.remove(e),e instanceof Pe?(e.geometry.dispose(),e.material.dispose()):e instanceof xa&&e.material.dispose()}function mu(i){const e=Sa[i];if(!e)return;const t=Bs(xe.plantedAt[i]);if(t!==e.stage&&(yM(e.plant),e.stage=t,t>0)){const s=t===1?.16:t===2?.32:.46;for(const r of[-.4,0,.4])for(const o of[-.3,.3]){L(.045,s,.045,5079381,r,.055+s/2,o,e.plant);for(const a of[-1,1]){const c=L(.19,.035,.09,a<0?7906923:5868642,r+a*.11,.08+s*.68,o,e.plant);c.rotation.z=a*.28}if(t>=2&&L(.105,.085,.105,t===3?15905956:13023357,r,.08+s,o,e.plant),t===3)for(const a of[-1,1])L(.11,.045,.09,a<0?16767146:15976893,r+a*.095,.12+s,o,e.plant)}}t>0&&(e.plant.userData.growthPhase=e.phase);const n=st.find(s=>s.plotIndex===i);n&&(n.name=vM(i))}function MM(){St(10.2,10.8,-31.5,-1,.03,"terrain-soil",3.1),St(1.05,10.8,-31.5,-1,.037,"terrain-soil",2.4,13285528),pn("社区花园 / COMMUNITY GARDEN",-35.5,1.35,-6.9,4.2,"#4d6b58");for(const i of[-37.7,-33.3])L(.11,1.3,.11,7240027,i,.65,-6.9);for(const i of[-36.7,-26.3])for(const e of[-5.5,-2.5,.5,3.5])L(.1,.45,.1,9346169,i,.23,e);for(const[i,[e,t]]of rM.entries()){const n=new mt;n.position.set(e,0,t),ge.add(n),St(1.9,1.8,e,t,.041,"terrain-soil",2.8,13214076);for(const r of[-.43,0,.43])L(1.52,.013,.045,8414280,0,.05,r,n).castShadow=!1;const s=new mt;s.userData.noStaticCollision=!0,s.userData.noModelTexture=!0,n.add(s),Sa.push({plant:s,stage:-1,phase:i*1.37}),st.push({x:e,z:t,range:1.75,name:"",line:"",action:"plot",plotIndex:i}),mu(i)}pM(-31.5,5.2)}function Sd(i,e){if(Ge.id==="qingchuan"&&i===-6.6&&e===17&&Vf("cafe-lamp",i,e,.65,3.2,.65)){const n=new Ks(16766875,.8,7,2);n.position.set(i,2.85,e),n.userData.streetLight=!0,ge.add(n),Pt.registerLight(n);return}L(.14,3.2,.14,3492692,i,1.6,e).userData.materialKind="metal",L(.72,.12,.14,3492692,i+.3,3.14,e),L(.32,.25,.32,16770991,i+.59,2.99,e,ge,{emissive:16765563,emissiveIntensity:1.2});const t=new Ks(16766875,.8,7,2);t.position.set(i+.59,2.85,e),ge.add(t),t.userData.streetLight=!0,Pt.registerLight(t)}function Bi(i,e,t,n=!0){const s=new mt;s.userData.materialKind="metal",s.position.set(i,0,e),n||(s.rotation.y=Math.PI/2),ge.add(s),L(1.55,.54,2.8,t,0,.55,0,s),L(1.29,.48,1.37,t,0,1.03,-.19,s),L(1.13,.36,.04,9877179,0,1.05,.52,s,{metalness:.2,roughness:.35}).userData.noModelTexture=!0;for(const r of[-.78,.78])for(const o of[-.86,.86])L(.23,.4,.48,2503740,r,.35,o,s);for(const r of[-.51,.51])L(.28,.16,.05,16769449,r,.59,1.43,s,{emissive:16762747,emissiveIntensity:.8})}function Tc(i,e,t,n,s,r,o=!1){L(n+.24,s+.24,.18,r,i,e,t+.08),L(n,s,.035,2506051,i,e,t+.19),L(n-.18,s-.18,.025,o?11772284:6653322,i,e,t+.215,ge,{roughness:.48,emissive:o?9066283:2637641,emissiveIntensity:.16});for(const a of[-n/2,n/2])L(.1,s+.17,.22,12893093,i+a,e,t+.25);L(n+.28,.13,.46,11840148,i,e-s/2-.08,t+.32),L(n+.18,.1,.25,13747886,i,e+s/2+.06,t+.24),L(.07,s,.13,r,i,e,t+.29),L(n,.06,.13,r,i,e+.12,t+.29)}function SM(i){const e=ge.children.length,t=i.z+i.d/2+.012,n=i.id==="homes"||i.id==="residence_b"||i.id.startsWith("riverside_homes"),s=i.h+.15;L(i.w+.55,.16,i.d+.55,10197126,i.x,.08,i.z),L(i.w,i.h,i.d,i.color,i.x,i.h/2+.15,i.z).userData.materialKind="plaster",L(i.w+.05,.5,i.d+.05,i.trim,i.x,.4,i.z);for(const d of[-i.w/2+.16,i.w/2-.16]){L(.34,i.h-.25,.22,13024680,i.x+d,i.h/2+.22,t+.1);for(let f=.85;f<i.h;f+=.62)L(.4,.045,.25,i.trim,i.x+d,f,t+.13)}for(let d=3.8;d<i.h-.6;d+=2.05)L(i.w,.12,.24,i.trim,i.x,d,t+.1);for(const d of[-1,1])for(const f of[-i.d*.26,i.d*.13]){const g=i.x+d*(i.w/2+.04);for(const _ of n?[2,4.55,6.65]:[2])L(.12,1.58,1.44,i.trim,g,_,i.z+f),L(.04,1.3,1.17,6125949,g+d*.08,_,i.z+f),L(.28,.12,1.58,11840148,g+d*.1,_-.8,i.z+f),L(.09,1.35,.07,12893093,g+d*.13,_,i.z+f)}if(i.id==="cafe"){St(i.w+1.2,4.25,i.x,t+2.18,.023,"terrain-paving",3.6);const d=new Pe(new mn(i.w-.7,i.h-.65),bn(12951946,{map:Pl("brick",3.4,1.9)}));d.position.set(i.x,i.h/2+.28,t+.025),d.receiveShadow=!0,ge.add(d)}L(i.w+.38,.18,i.d+.38,i.trim,i.x,s+.06,i.z),L(i.w+.58,.1,i.d+.58,12629148,i.x,s+.2,i.z),L(i.w-.28,.08,i.d-.28,i.roof,i.x,s+.27,i.z).userData.materialKind="roof";for(const d of[-i.d/2,i.d/2])L(i.w+.16,.3,.18,i.trim,i.x,s+.37,i.z+d);for(const d of[-i.w/2,i.w/2])L(.18,.3,i.d,i.trim,i.x+d,s+.37,i.z);L(1.1,.65,.9,9145733,i.x+i.w*.25,s+.57,i.z-1.3);for(let d=0;d<5;d++)L(.78,.035,.035,4937301,i.x+i.w*.25,s+.36+d*.1,i.z-.83);const r=n?i.h>9.3?[4.55,6.65,8.75]:[4.55,6.65]:i.h>6?[4.9]:[];if(!n&&i.h<=6)for(const d of[-i.w*.3,0,i.w*.3])Tc(i.x+d,4.55,t,1.55,.65,i.trim);for(const d of r)for(const f of[-i.w*.3,0,i.w*.3])if(Tc(i.x+f,d,t,1.38,1.45,i.trim,f===0),n){L(1.85,.13,.78,10001548,i.x+f,d-.92,t+.42),L(1.85,.07,.08,i.trim,i.x+f,d-.33,t+.8);for(let g=0;g<7;g++)L(.045,.52,.055,i.trim,i.x+f-.86+g*.287,d-.59,t+.8);L(.6,.24,.26,9988944,i.x+f+.45,d-.77,t+.62),L(.57,.15,.25,6125916,i.x+f+.45,d-.58,t+.62)}L(2,2.8,.18,i.trim,i.x,1.55,t+.12),L(1.65,2.56,.08,2637635,i.x,1.53,t+.24);for(const d of[-.88,.88])L(.13,2.75,.32,12893093,i.x+d,1.55,t+.29);L(1.38,1.55,.03,6915977,i.x,1.84,t+.3),L(.08,2.5,.1,i.trim,i.x,1.54,t+.35),L(.08,.4,.12,14268537,i.x+.56,1.4,t+.4),L(2.25,.12,.8,11972505,i.x,.2,t+.4);for(const d of[-i.w*.31,i.w*.31])if(Tc(i.x+d,1.78,t,2.6,2.1,i.trim,!0),n){for(const f of[-1,1])L(.36,1.58,.025,13288111,i.x+d+f*.94,1.78,t+.34);L(1.7,.11,.32,9271647,i.x+d,.82,t+.46)}else for(const f of[1.25,1.9]){L(2.25,.07,.12,6708816,i.x+d,f,t+.3);for(let g=0;g<4;g++)L(.25,.24+g%2*.08,.05,[9201235,12165487,7440503,10126708][g],i.x+d-.85+g*.55,f+.17,t+.33)}const o=Math.min(i.w-1.3,7.8);if(L(o+.24,.82,.3,i.trim,i.x,3.42,t+.25),pn(i.sign,i.x,3.42,t+.42,o,i.id==="cafe"?"#54403d":"#344947").scale.y=.36,i.id!=="cafe"){for(const d of[-i.w*.38,i.w*.38])L(.72,.1,.34,10190948,i.x+d,.92,t+.38),L(.58,.08,.22,5998187,i.x+d,1.03,t+.46);L(.56,.22,.42,7965066,i.x+i.w*.33,s+.52,i.z-i.d*.22);for(let d=0;d<3;d++)L(.05,.16,.28,5069918,i.x+i.w*.33-.14+d*.14,s+.52,i.z-i.d*.44)}const a=L(i.w*.76,.12,1.3,i.trim,i.x,2.99,t+.84);a.userData.materialKind="fabric",a.rotation.x=.13;const c=i.id==="cafe"?12:1;for(let d=0;d<c;d++){const f=i.w*.76/c,g=i.id==="cafe"?d%2?14075558:8871506:i.trim;L(f-.015,.25,.1,g,i.x-i.w*.38+(d+.5)*f,2.78,t+1.47)}for(const d of[-1,1])L(.08,.55,.08,i.trim,i.x+d*i.w*.34,2.59,t+1.13),L(.26,.38,.27,3754314,i.x+d*1.48,2.25,t+.38),L(.15,.24,.05,15056248,i.x+d*1.48,2.25,t+.54,ge,{emissive:13077830,emissiveIntensity:.35});if(L(.1,i.h-.2,.13,i.trim,i.x+i.w/2-.55,i.h/2+.2,t+.24),i.x>=70){for(const d of[-1,1])L(.16,i.h-.5,.23,14274491,i.x+d*(i.w/2-.5),i.h/2+.2,t+.13),L(.38,.23,.35,7108983,i.x+d*1.35,3.78,t+.42),L(.2,.13,.12,16768938,i.x+d*1.35,3.75,t+.64,ge,{emissive:11897679,emissiveIntensity:.36});for(let d=.72;d<i.h-.4;d+=1.02)L(i.w-.9,.025,.065,12958376,i.x,d,t+.15).castShadow=!1;for(const d of[-i.d*.27,i.d*.18]){const f=L(.32,.37,.62,11581101,i.x+i.w/2+.19,2.36,i.z+d);f.castShadow=!0;for(let g=0;g<3;g++)L(.055,.28,.05,6649460,i.x+i.w/2+.37,2.36,i.z+d-.18+g*.18)}L(2.65,.11,.92,12891806,i.x,.13,t+.92),L(2.3,.08,.56,13944751,i.x,.075,t+1.45);for(const d of[-1,1])L(.56,.37,.46,9009504,i.x+d*2.03,.2,t+.8),L(.48,.2,.37,6719842,i.x+d*2.03,.44,t+.8)}const l=t+1.6;st.push({x:i.x,z:l,range:2.35,name:i.name,line:i.line,enter:i.enter,action:i.id==="market"?"shop":void 0});const u=ge.children.slice(e);for(const d of u)d.userData.materialKind??="stone",d.userData.noStaticCollision=!0,d.userData.foregroundOccluder=!0,d.userData.occlusionBuildingId=i.id;i.id==="cafe"&&(Sn(0,i.x-3.5,t+2.3,2.4,1.8),Sn(0,i.x+3.5,t+2.3,2.4,1.8),Sn(1,i.x-4.9,t+1.8,1.4,2.1),Sn(1,i.x+4.9,t+1.8,1.4,2.1),Sn(2,i.x+1.65,t+2.6,1.15,1.6));const h=u.flatMap(d=>d instanceof Pe?(Array.isArray(d.material)?d.material:[d.material]).map(g=>({material:g,opacity:g.opacity,transparent:g.transparent,depthWrite:g.depthWrite})):[]);Jr.push({buildingId:i.id,bounds:new Et(new A(i.x-i.w/2-.35,.15,i.z-i.d/2-.35),new A(i.x+i.w/2+.35,i.h+.6,i.z+i.d/2+.35)),materials:h,faded:!1})}function wM(i){if(!ua)return!1;const e=ua.clone(!0);e.userData.foregroundOccluder=!0,e.userData.occlusionBuildingId=i.id;const t=new Et().setFromObject(e),n=t.getSize(new A);if(Math.min(n.x,n.y,n.z)<.001)return!1;const s=t.getCenter(new A);e.scale.set(i.w/n.x,i.h/n.y,i.d/n.z),e.position.set(i.x-s.x*e.scale.x,.015-t.min.y*e.scale.y,i.z-s.z*e.scale.z);const r=[];e.traverse(u=>{if(!(u instanceof Pe))return;u.userData.sharedAssetGeometry=!0;const h=d=>{const f=d.clone();if(f instanceof fn){for(const g of[f.map,f.metalnessMap,f.roughnessMap])g&&(g.anisotropy=Math.min(8,zt.capabilities.getMaxAnisotropy()));f.roughness=Math.max(f.roughness,.9),f.metalness=Math.min(f.metalness,.06),f.color.multiply(new me(16051941))}return r.push({material:f,opacity:f.opacity,transparent:f.transparent,depthWrite:f.depthWrite}),f};u.material=Array.isArray(u.material)?u.material.map(h):h(u.material),u.castShadow=!0,u.receiveShadow=!0,u.userData.sharedAssetMap=!0}),ge.add(e),e.updateMatrixWorld(!0);const o=new fg,a=new A,c=new re;e.traverse(u=>{if(!(u instanceof Pe))return;const h=u.geometry.getAttribute("position");for(let d=0;d<h.count;d++)a.fromBufferAttribute(h,d).applyMatrix4(u.matrixWorld),a.y>=.65&&a.y<=1.65&&o.expandByPoint(c.set(a.x,a.z))}),o.isEmpty()||Ea.set(i.id,o);const l=i.z+i.d/2+.012;return St(i.w+1.2,4.25,i.x,l+2.18,.023,"terrain-paving",3.6),st.push({x:i.x,z:l+1.6,range:2.35,name:i.name,line:i.line,enter:i.enter}),Sn(0,i.x-3.5,l+2.3,2.4,1.8),Sn(0,i.x+3.5,l+2.3,2.4,1.8),Sn(1,i.x-4.9,l+1.8,1.4,2.1),Sn(1,i.x+4.9,l+1.8,1.4,2.1),Sn(2,i.x+1.65,l+2.6,1.15,1.6),Jr.push({buildingId:i.id,bounds:new Et().setFromObject(e),materials:r,faded:!1}),!0}const Pn=new Qs,Er=new A;let gu=[];const Ts=new Set,bc=new dg;function qf(i){const e=Ge.buildings.find(o=>o.id===i);if(!e)return!1;const t=Ea.get(i),n=t?.min.x??e.x-e.w/2,s=t?.max.x??e.x+e.w/2,r=t?.min.y??e.z-e.d/2;return he.x>n-.6&&he.x<s+.6&&he.z<r-.08}function EM(){for(const i of Ts)i.visible=!0;Ts.clear();for(const i of[.65,1.25,1.85]){Er.set(he.x,i,he.z);const e=Er.distanceTo(Bt.position);Pn.origin.copy(Bt.position),Pn.direction.copy(Er).sub(Bt.position).normalize(),bc.set(Pn.origin,Pn.direction),bc.far=e;for(const t of gu){const n=t.object.userData.occlusionBuildingId;if(n){if(!qf(n))continue}else if(he.x<=t.bounds.min.x||he.x>=t.bounds.max.x||he.z>=t.bounds.min.z-.08)continue;Pn.intersectBox(t.bounds,Er)&&(Ts.has(t.object)||bc.intersectObject(t.object,!0).length&&Ts.add(t.object))}}for(const i of Ts)i.visible=!1}function Yf(){Pn.origin.set(he.x,1.15,he.z),Pn.direction.copy(Bt.position).sub(Pn.origin).normalize();for(const e of Jr){const t=Pn.intersectBox(e.bounds,Er),n=qf(e.buildingId)&&t!==null&&t.distanceToSquared(Pn.origin)<Bt.position.distanceToSquared(Pn.origin);if(n!==e.faded){e.faded=n;for(const s of e.materials)s.material.opacity=n?.24:s.opacity,s.material.transparent=n||s.transparent,s.material.depthWrite=n?!1:s.depthWrite,s.material.needsUpdate=!0}}const i=Jr.some(e=>e.faded);if(i!==Cl&&(Cl=i,!he.model)){const e=he.sprite.material;e.depthTest=!0,e.color.setHex(16777215),e.needsUpdate=!0}}function Yi(i,e,t=9136976){const n=new mt;n.userData.materialKind="wood",n.position.set(i,0,e),ge.add(n),L(2.15,.18,.64,t,0,.6,0,n),L(2.15,.72,.16,t,0,1.05,-.32,n);for(const s of[-.82,.82])L(.14,.56,.14,5134160,s,.28,0,n).userData.materialKind="metal"}function wd(i,e){const t=new Set(ge.children),n=st.length;e();for(const s of ge.children)t.has(s)||(s.position.x+=i);for(const s of st.slice(n))s.x+=i}function Ed(){Ds(9.4,7.2,9022083,-15,-22,.026),Ds(7.9,.66,13813671,-15,-22,.039),Ds(.66,6.4,13813671,-15,-22,.04);for(const[n,s]of[[-19.1,-24.9],[-11.2,-24.8],[-19.1,-19.2],[-11.2,-19.2]])Ai(n,s,.77);Yi(-16.7,-19.5),Yi(-13.2,-24.5);const i=new Pe(new Zi(1.15,1.25,.4,12),bn(10135972));i.position.set(-15.1,.27,-22),i.castShadow=!0,i.receiveShadow=!0,ge.add(i);const e=new Pe(new Zi(.88,.88,.045,12),bn(7057582,{metalness:.16,roughness:.34}));e.position.set(-15.1,.49,-22),ge.add(e),Pt.registerWave(e,.018,1.7,.6),L(.18,.85,.18,9281428,-15.1,.84,-22),st.push({x:-15.1,z:-20.3,range:2,name:"社区小广场",line:"水声和树影让这里慢了下来。傍晚常有邻居在长椅上聊天。"}),L(3.4,.16,1.65,4611684,-18.2,2.48,-5.5).userData.materialKind="metal";for(const n of[-19.7,-16.7])for(const s of[-6.15,-4.85])L(.12,2.4,.12,5400937,n,1.2,s).userData.materialKind="metal";Yi(-18.2,-5.4,6519923),pn("BUS STOP  /  河畔站",-18.2,2.2,-4.56,3.1,"#355761"),st.push({x:-18.2,z:-3.7,range:2.1,name:"河畔公交站",line:"这里连接着更多街区。现在可以沿街道步行往返晴川街区。"}),L(2.8,1.8,.18,10256734,-7.1,1.05,8.5),pn("社区公告栏",-7.1,1.55,8.64,2.5,"#665a4c"),st.push({x:-7.1,z:9.5,range:1.8,name:"社区公告栏",line:"公告：周末在活动室举办邻里聚会。河畔生活区欢迎新朋友。"}),Ds(8.6,5.2,13220752,-14.3,17.4,.028);for(const n of[-16.5,-12.1])L(.15,2.1,.15,5142895,n,1.05,17.3);L(4.55,.18,.18,5142895,-14.3,2.13,17.3);for(const n of[-15.5,-13.1])L(.045,1.25,.045,11052953,n,1.48,17.3),L(.85,.11,.42,14064240,n,.84,17.3);L(1.55,.42,1.55,6986376,-18.2,.27,17.6);const t=L(1.6,.13,2.3,15053163,-18.2,.85,18);t.rotation.x=-.38,st.push({x:-14.3,z:19.2,range:2.2,name:"社区游乐场",line:"秋千轻轻晃着。这里是邻里最热闹的一角。"});for(const[n,s]of[[8,-18],[19,-18],[8,18],[19,18]]){L(1.4,.32,1.4,9269593,n,.24,s),L(1.2,.06,1.2,6655342,n,.45,s);for(const r of[-.28,.28])Xf(n+r,s)}for(const[n,s]of[[-21,17],[21,17],[21,-17]])Ai(n,s,.88);TM(),Wf("riverside")}function TM(){const i=new mt;i.userData.materialKind="metal",i.position.set(15.8,0,17.9),ge.add(i);for(let e=0;e<9;e++){const t=-3.2+e*.8;L(.08,.82,.08,6651257,t,.41,0,i),e<8&&L(.08,.08,.08,9086619,t+.4,.75,0,i)}L(7.2,.14,.1,7902090,0,.78,0,i),st.push({x:15.8,z:18.9,range:1.8,name:"河岸栏杆",line:"栏杆外是缓慢流动的河水，风里带着湿润的草木香。"})}function bM(){for(const[e,t,n]of[[72,-23,.82],[84,-23,.9],[105,-23,.83],[117,-23,.88],[72,23,.8],[84,23,.84],[105,23,.88],[117,23,.83]]){const s=new Pe(new Zi(1.22,1.32,.065,12),bn(10257764));s.position.set(e,.045,t),s.receiveShadow=!0,ge.add(s),Ai(e,t,n);for(const[r,o]of[[-1,.5],[.92,-.3],[.3,1]])L(.36,.35,.35,5800802,e+r,.19,t+o),L(.18,.12,.17,14269560,e+r,.41,t+o)}for(const[e,t]of[[76,-20],[109,20]])St(5.4,1.35,e,t,.036,"terrain-paving",3.6),Yi(e,t);const i=(e,t,n)=>{const s=new mt;s.position.set(e,0,t),ge.add(s),L(1.1,.72,.45,n,0,.36,0,s);for(const r of[-.34,0,.34])L(.22,.28,.035,12044222,r,.42,.235,s,{roughness:.36}),L(.14,.025,.02,6190964,r,.25,.255,s);L(1.18,.08,.52,8028536,0,.76,0,s)};i(70,-5,7504522),i(104,5,8096388),pn("诊所  /  CLINIC",62,1.8,-5.15,3,"#567c75"),L(2.6,.08,.12,15069156,62,1.05,-5.06),L(.12,.48,.12,7113859,60.82,.86,-5.06),L(.12,.48,.12,7113859,63.18,.86,-5.06),pn("洗衣房  /  LAUNDRY",62,1.8,16.9,3.2,"#587887"),pn("活动室公告",110,1.55,16.9,2.8,"#775f4c"),L(2.8,1.45,.12,10256734,110,.85,17),L(2.35,1.02,.035,14931381,110,.86,17.08);for(let e=0;e<4;e++)L(1.65-e%2*.34,.045,.02,[12876902,7180150,9206691,13674591][e],109.65,.51+e*.18,17.12)}function AM(i){_M(i),i.id==="qingchuan"?(K1(ge,St),xM(),MM(),wd(48,Ed),bM(),dM(77,22)):Ed();for(const e of i.buildings)e.id==="cafe"&&wM(e)||SM(e);for(const[e,t]of[[-6.6,-8],[6.6,-8],[-6.6,8],[6.6,8],[-6.6,17],[6.6,17],[-20,0],[20,0]])Sd(e,t);for(const[e,t,n]of[[-21,-18,.9],[-21,18,.85],[21,-18,.95],[21,18,.95],[-7,-18,.8],[7,18,.8]])i.id==="qingchuan"&&e===-21&&t===18&&!qi||Ai(e,t,n);if(i.id==="qingchuan"){pu=new Y1(ge,!qi),qi?Ai(Is.x,Is.z,.78):fM(Is.x,Is.z),Bi(-2.8,-13,10313306),Bi(2.9,16,12756582),Bi(16,2.5,5669514,!1),Bi(48,16,10124393),Bi(46.2,-14,8493472),fd(Ps.x+48,Ps.z),wd(48,()=>Td("riverside"));for(const[e,t]of[[42,-8],[54,-8],[42,8],[54,8],[42,17],[54,17],[90,-8],[102,-8],[90,8],[102,8],[90,17],[102,17]])Sd(e,t);for(const[e,t,n]of[[27,-18,.9],[27,18,.85],[69,-18,.95],[69,18,.95]])Ai(e,t,n);st.push({x:115,z:0,range:2.2,name:"远方街道",line:"这里是当前连续社区的边界。更远的街区以后会从这里接上。"})}else Bi(0,16,10124393),Bi(-1.8,-14,8493472),fd(Ps.x,Ps.z);Td(i.id)}function Td(i){const e=new mt;e.position.set(i==="riverside"?-7.1:-13.5,0,i==="riverside"?8.5:1.85),ge.add(e),L(.08,2.25,.08,5465188,0,1.12,0,e);const t=L(.92,.48,.035,14255976,.48,1.93,0,e);if(Pt.registerSway(t,.08,2.1,i.length),i==="riverside"){const n=new mt;n.position.set(18.6,.05,16.4),ge.add(n),L(1.7,.12,.18,6654859,0,1.32,0,n);for(let r=0;r<7;r++){const o=L(.11+r%2*.04,1.25+r%3*.18,.04,7980737,-.72+r*.24,.65,0,n,{transparent:!0,opacity:.68,depthWrite:!1,emissive:3435890,emissiveIntensity:.16});Pt.registerWave(o,.08,2+r*.08,r*.4)}const s=new Pe(new Zi(1.1,1.25,.05,16),bn(5740957,{transparent:!0,opacity:.8,metalness:.16,roughness:.24}));s.position.set(18.6,.06,16.8),ge.add(s),Pt.registerWave(s,.022,1.4,.8)}}function RM(){const i=L(19,.22,15,9138011,0,-.1,0);i.receiveShadow=!0,i.userData.materialKind="wood";for(let e=-9;e<10;e+=1)L(.025,.01,15,7692625,e,.02,0).castShadow=!1;for(const[e,t,n,s]of[[19,.3,0,-7.5],[.3,15,-9.5,0],[.3,15,9.5,0]])L(e,5,t,13087124,n,2.5,s).userData.materialKind="plaster";L(8,1.3,1.5,7754816,0,.68,-3.7),L(8.4,.18,1.72,12029798,0,1.4,-3.7);for(const e of[-5.6,5.6])for(const t of[-1.3,2.3]){L(1.8,.15,1.45,11831391,e,.86,t),L(.16,.8,.15,5917765,e,.42,t);for(const n of[-1.45,1.45])L(.55,.66,.58,6839382,e+n,.35,t)}for(const e of[-6.5,-3.8,3.8,6.5])L(1.5,2.1,.08,7364180,e,2.7,-7.28),L(1.29,1.88,.09,8431523,e,2.7,-7.22,ge,{emissive:5008747,emissiveIntensity:.25});pn("WHITE BIRD  /  CAFE",0,4,-7.05,5.2,"#6d4d4b"),Sn(1,-7.5,-5.7,1.7,2.35),Sn(1,7.5,-5.7,1.7,2.35);for(const e of[-3,0,3]){const t=new Ks(16768424,1.7,8);t.position.set(e,3.9,-2.5),ge.add(t),L(.46,.23,.46,16767905,e,3.85,-2.5,ge,{emissive:16765334,emissiveIntensity:1})}st.push({x:0,z:6.25,range:1.7,name:"回到中央街",line:"推门回到街上。",action:"exit"}),L(2.1,.05,.65,14401435,0,.035,6.5)}function rr(i,e,t,n){const s=L(i,.22,e,t,0,-.1,0);s.receiveShadow=!0,s.userData.materialKind=["clinic_inside","laundry_inside"].includes(Ge.id)?"stone":"wood";for(let r=-i/2;r<=i/2;r+=.9)L(.025,.01,e,7238762,r,.022,0).castShadow=!1;L(i,5,.28,n,0,2.5,-e/2).userData.materialKind="plaster";for(const r of[-i/2,i/2])L(.28,5,e,n,r,2.5,0).userData.materialKind="plaster";for(const r of[-i*.28,i*.28])L(2.4,2.1,.08,5206126,r,2.65,-e/2+.18),L(2.06,1.76,.09,10471101,r,2.65,-e/2+.24,ge,{emissive:4549739,emissiveIntensity:.12});for(const r of[-3.2,3.2]){const o=new Ks(16768435,1.5,9);o.position.set(r,4.15,-1),ge.add(o),L(.44,.18,.44,16767917,r,4.15,-1,ge,{emissive:16765327,emissiveIntensity:.9})}}function or(i,e){L(2.3,.05,.72,13677195,0,.034,e+.25),st.push({x:0,z:e,range:1.75,name:i,line:"推门回到外面。",action:"exit"})}function CM(){rr(19,15,9273968,12174006),Ds(6.4,4.2,10267031,0,1.8,.025);for(let i=0;i<3;i++)for(let e=0;e<4;e++)L(.85,.46,.16,9928544,-7.4+e*.95,1.42+i*.53,-7.13),L(.42,.035,.18,14206366,-7.4+e*.95,1.36+i*.53,-7.01);st.push({x:-5.9,z:-5.1,range:2.1,name:"住户信箱",line:"信箱整齐排着。以后朋友来访，也许会有一封新信。"}),L(3.4,1.18,1.1,7234132,-3.8,.59,-2.8),L(3.7,.17,1.32,12098678,-3.8,1.22,-2.8),An.push({x:-3.8,z:-2.8,w:3.6,d:1.3}),L(2.35,3.45,.12,4741977,4.9,1.85,-7.28),L(1.95,3.15,.13,10333609,4.9,1.76,-7.18,ge,{metalness:.34,roughness:.48}),L(.06,3.15,.15,5860974,4.9,1.76,-7.06),pn("电梯  /  我的房间",4.9,4.12,-7.02,3.3,"#425e5c"),st.push({x:4.9,z:-4.55,range:2,name:"前往我的房间",line:"电梯门缓缓打开。",enter:"apartment_unit"}),Yi(3.1,1.4,8743769),L(.7,1.25,.7,9204055,7.5,.63,1.2),Ai(7.5,1.2,.48),or("走出公寓",6.22)}function IM(){rr(17,13,9992031,13092016),Ds(5.3,3.9,11968908,.8,.7,.025),L(3.2,.62,3,6838601,-5,.36,-3.3),L(3,.32,2.65,14997697,-5,.78,-3.3).userData.materialKind="fabric",L(2.9,.22,.65,10333602,-5,1.03,-4.1).userData.materialKind="fabric",An.push({x:-5,z:-3.3,w:3.4,d:3.2}),st.push({x:-5,z:-.75,range:1.9,name:"床 · 睡到早晨",line:"好好休息，迎接新一天。",action:"rest"}),L(3.1,.75,1.2,7178623,1.5,.48,1).userData.materialKind="fabric",L(3.1,.95,.25,5730919,1.5,1.05,.35).userData.materialKind="fabric",L(1.55,.42,.9,10322015,1.5,.27,-1.1),An.push({x:1.5,z:.95,w:3.3,d:1.4}),L(5.4,1,.85,8156514,4.25,.52,-5.45),L(5.4,.16,.99,12825754,4.25,1.1,-5.45),L(1.65,2.1,.13,5926512,5.7,2.9,-6.32),L(1.45,1.9,.14,9550263,5.7,2.9,-6.2),L(1.7,2.4,.75,8875864,-7.2,1.2,1.1);for(let i=.55;i<2.4;i+=.56)L(1.72,.07,.82,12624763,-7.2,i,1.1);st.push({x:-5.6,z:2.1,range:1.7,name:"书架和相框",line:"房间还空着不少位置，未来可以摆上自己的收藏。"}),or("离开房间",5.28)}function PM(){rr(19,15,9010019,11909031);for(const i of[-7.3,-4.5,4.6,7.3]){L(1.55,3.35,.8,7100739,i,1.72,-4.8);for(let e=.75;e<3.4;e+=.6){L(1.62,.08,.9,10583638,i,e,-4.8);for(const t of[-.48,-.17,.19,.5])L(.2,.42,.55,[8166286,12291439,11117706,7830932][Math.round((t+.48)*3)],i+t,e+.25,-4.8)}An.push({x:i,z:-4.8,w:1.8,d:1})}for(const i of[-3.4,3.2]){L(2.2,.15,1.45,10453341,i,.81,1.1);for(const e of[-.85,.85])L(.13,.72,.13,7428936,i+e,.38,1.1);L(1.2,.54,.5,6323317,i,.34,2.3).userData.materialKind="fabric",An.push({x:i,z:1.1,w:2.35,d:1.55})}pn("城市图书馆  /  CITY LIBRARY",0,4.12,-7.02,5.2,"#506766"),st.push({x:-6.2,z:-3.1,range:1.9,inspectId:"old-map",name:"城市旧地图",line:"书页里夹着旧地图。晴川街区曾经只有一条临河的小路。"}),st.push({x:2.1,z:-3,range:1.9,name:"社区故事书",line:"书里写着每个普通人的日常：上班、散步、回家，和新的相遇。"}),or("走出图书馆",6.22)}function LM(){rr(17,13,12175805,14278353),pn("社区诊所  /  CLINIC",0,4.1,-6.03,4.5,"#567c75"),L(3.4,1,1.15,8100750,-4.2,.55,-2.7),L(3.55,.14,1.3,14867660,-4.2,1.12,-2.7),An.push({x:-4.2,z:-2.7,w:3.6,d:1.3});for(const i of[1.4,4.1])L(1.85,.38,.85,7576203,i,.37,-3.8).userData.materialKind="fabric",L(1.85,.8,.13,5997945,i,.8,-4.27).userData.materialKind="fabric",An.push({x:i,z:-3.8,w:2,d:1});L(2.6,2.2,.16,15065553,6.1,2.5,-6.1),L(1.4,1.1,.18,9418925,6.1,2.5,-5.97),st.push({x:6.1,z:-2.9,range:1.9,inspectId:"clinic-health",name:"社区健康公告",line:"公告：多运动、规律睡眠。河畔步道适合晨间散步。"}),Yi(2.8,1.4,8231564),or("离开诊所",5.2)}function DM(){rr(17,13,10991790,12964042),pn("自助洗衣  /  LAUNDRY",0,4.1,-6.03,4.7,"#4e7380");for(const i of[-5.6,-3.3,2.7,5]){L(1.66,1.65,1.05,15067616,i,.86,-4.7).userData.materialKind="metal";const e=new Pe(new Zi(.45,.45,.05,24),bn(6391962,{metalness:.3,roughness:.33}));e.rotation.x=Math.PI/2,e.position.set(i,.87,-4.11),ge.add(e),L(1.25,.1,.1,7771278,i,1.53,-4.08),An.push({x:i,z:-4.7,w:1.75,d:1.2})}L(2.6,.12,1.2,11636328,0,.85,.2);for(const i of[-1,1])L(.12,.78,.12,7432797,i,.42,.2);An.push({x:0,z:.2,w:2.7,d:1.4}),st.push({x:4,z:-2.9,range:2,name:"滚筒洗衣机",line:"衣服在透明圆窗后缓缓转动。"}),st.push({x:0,z:2.2,range:1.8,name:"折衣桌",line:"桌面干净整齐，放着一篮刚洗好的衣服。"}),or("离开洗衣房",5.2)}function NM(){rr(17,13,11377273,13878953),pn("社区活动室  /  COMMUNITY",0,4.1,-6.03,5,"#775f4c");for(const i of[-3.3,3.3]){L(2.9,.14,1.5,11965806,i,.8,-2.7);for(const e of[-1.15,1.15])L(.12,.72,.12,7757641,i+e,.4,-2.7);An.push({x:i,z:-2.7,w:3.1,d:1.65});for(const e of[-.8,0,.8])L(.6,.04,.43,[9217690,14137752,10194330][Math.round(e+.8)],i+e,.91,-2.7)}L(3.2,2.2,.15,9138515,-5.9,2.35,-6.06),L(2.9,1.85,.17,14470056,-5.9,2.35,-5.95),st.push({x:-5.9,z:-4.3,range:2.1,inspectId:"community-board",name:"活动安排",line:"本周活动：周五下棋，周六读书，周日一起整理花园。"}),L(1.65,2.7,.7,9205337,7,1.35,-2.5);for(const i of[.7,1.5,2.3])L(1.7,.09,.78,11901040,7,i,-2.5);Yi(0,2.2,9270619),Kf(),or("离开活动室",5.2)}function Kf(){if(Ge.id!=="community_inside"||!xe.progress.delivered||ge.getObjectByName("community-gift-flower"))return;const i=new mt;i.name="community-gift-flower",i.userData.noStaticCollision=!0,i.userData.noModelTexture=!0,ge.add(i),L(.18,.22,.18,11059634,-3.3,1,-2.7,i),L(.035,.31,.035,5079381,-3.3,1.22,-2.7,i);for(let e=0;e<5;e++){const t=e/5*Math.PI*2;L(.12,.08,.12,15905956,-3.3+Math.cos(t)*.09,1.39,-2.7+Math.sin(t)*.09,i)}L(.09,.09,.09,16767146,-3.3,1.41,-2.7,i)}function UM(){un?.dispose(),un=null,pu=null,Ts.clear(),gu=[],Ea.clear(),ge.traverse(i=>{if(i instanceof Pe){i.userData.sharedAssetGeometry||i.geometry.dispose();const e=Array.isArray(i.material)?i.material:[i.material];for(const t of e)!i.userData.sharedAssetMap&&"map"in t&&t.map instanceof ft&&![...qn.values()].includes(t.map)&&t.map!==Mi&&t.map.dispose(),"normalMap"in t&&t.normalMap instanceof ft&&t.normalMap.dispose(),"bumpMap"in t&&t.bumpMap instanceof ft&&t.bumpMap.dispose(),i.userData.sharedAssetMaterial||t.dispose()}else i instanceof xa&&i.material.dispose()});for(const i of[...ge.children])ge.remove(i);Pt.clearWorldAnimations(),ro(),rn=[],st=[],Sa=[],Jr=[],An=[],rt=null,Cl=!1,fe.interaction.classList.remove("show")}function jr(i){return i!=="qingchuan"&&i!=="riverside"}function $f(i,e){return i-(jr(e)?1.8:6.2)}function ma(i){Xt=i&&Ge.id==="qingchuan",Tn.fog instanceof no&&(Tn.fog.density=Xt?.0014:.0055);const e=document.querySelector("#overview-toggle");e.hidden=Ge.id!=="qingchuan",e.setAttribute("aria-pressed",String(Xt)),e.textContent=Xt?"返回游玩 · V":"社区总览 · V",xu(),Ft.clear(),oo()}function Dl(i,e){UM(),Ge=sr[i],fe.location.textContent=Ge.name,ma(!1),li({type:"visit",location:i}),i==="cafe_inside"?RM():i==="apartment_lobby"?CM():i==="apartment_unit"?IM():i==="library_inside"?PM():i==="clinic_inside"?LM():i==="laundry_inside"?DM():i==="community_inside"?NM():AM(Ge),sM.apply(ge),Uf.rebuild(ge),i==="qingchuan"&&(un=new eM(ge,{zones:wa.has("grassSample")?cd.slice(0,1):cd,allowed:(r,o)=>tM(r,o,Ge.buildings)&&!Ei(r,o),heightAt:nM},tn));for(const r of Ge.npcs){const o=xe.npcStates[r.id],a=o?.districtId===i?o:void 0,c=Qo(a?.x??r.x,a?.z??r.z,Ei),l=pd(r.skin,c.x,c.z,r.name,r.line,r.id);rn.push(l),l.route=r.route?.map(u=>Qo(u.x,u.z,Ei)),l.routeIndex=r.route&&r.route.length>1?1:0,Zf(l),l.activity??=Ma[r.id]?.activity,l.pace=r.pace??.75,l.routeIndex=a&&a.routineKey===l.routineKey?Math.max(0,Math.min((l.route?.length??1)-1,a.routeIndex)):l.routeIndex,l.direction=a?.direction??l.direction,l.walkDistance=a?.walkDistance??0,l.waitUntil=hn+(a?.routineKey===l.routineKey?a?.waitRemaining??.5:.5),a?.routineKey===l.routineKey&&a?.activityLabel&&(l.activity=a.activityLabel),l.walking=a?.activity==="walking",l.model&&r.tint&&l.model.traverse(u=>{if(u instanceof Pe)for(const h of Array.isArray(u.material)?u.material:[u.material])"color"in h&&h.color instanceof me&&h.color.multiply(new me(r.tint))}),r.tint&&!l.drawn&&l.sprite.material.color.setHex(r.tint),!l.drawn&&fa[r.id]&&(l.sprite.visible=!1,l.shadow.visible=!1),Gf(l),st.push({x:l.x,z:l.z,range:2,name:r.name,line:r.line,actor:l})}const t=e??Ge.spawn,n=Qo(t.x,t.z,Ei);he=pd("protagonist-provided",n.x,n.z),rn.push(he),ge.updateMatrixWorld(!0),gu=ge.children.filter(r=>r.userData.foregroundOccluder===!0).map(r=>({object:r,bounds:new Et().setFromObject(r)})).filter(r=>r.bounds.max.y>.45&&!r.bounds.isEmpty());const s=new A(he.x,0,$f(he.z,i));Vn.copy(s),Bt.position.copy(Vn).add(Ri),Bt.lookAt(Vn),Yf(),ar(),fe.hint.textContent=i==="qingchuan"?"沿连续街道步行可到河畔社区；西侧独立花园能在土地上播种。按 V 查看社区总览。":i==="riverside"?"河畔生活区 · 逛广场、公交站、游乐场，和邻居聊聊。":`${Ge.name} · 靠近物品或人物，按 E 互动。`,On()}function oi(){if(!he||!Ge)return;const i={districtId:Ge.id,x:Number(he.x.toFixed(3)),z:Number(he.z.toFixed(3)),returnStack:Nr.map(t=>({id:t.id,spawn:{x:Number(t.spawn.x.toFixed(3)),z:Number(t.spawn.z.toFixed(3))}})),night:Il,weather:Rt.weather,worldTime:Rt.snapshot()},e={...xe.npcStates};for(const t of rn)!t.id||t===he||(e[t.id]={districtId:Ge.id,x:Number(t.x.toFixed(3)),z:Number(t.z.toFixed(3)),routeIndex:t.routeIndex??0,waitRemaining:Number(Math.max(0,(t.waitUntil??hn)-hn).toFixed(3)),direction:t.direction,activity:t.walking?"walking":"waiting",walkDistance:Number(t.walkDistance.toFixed(3)),routineKey:t.routineKey,activityLabel:t.activity});xe.location=i,xe.npcStates=e,so(xe)}function Ei(i,e){const t=Ge.bounds;if((t?i<t.minX+.75||i>t.maxX-.75||e<t.minZ+.75||e>t.maxZ-.75:Math.abs(i)>Ge.size.x/2-.75||Math.abs(e)>Ge.size.z/2-.75)||Uf.blocked(i,e))return!0;if(Ge.id==="cafe_inside")return e<-2.45&&Math.abs(i)<4.4||e<-7;if(jr(Ge.id))return An.some(n=>Math.abs(i-n.x)<n.w/2+.35&&Math.abs(e-n.z)<n.d/2+.35);for(const n of Ge.buildings){const s=Ea.get(n.id);if(s){if(i>s.min.x-.22&&i<s.max.x+.22&&e>s.min.y-.22&&e<s.max.y+.22)return!0}else if(Math.abs(i-n.x)<n.w/2+.28&&Math.abs(e-n.z)<n.d/2+.28)return!0}if(Ge.id==="qingchuan"&&$r&&Math.hypot(i-Is.x,e-Is.z)<.78||Ge.id==="qingchuan"&&fu.has("cafe-lamp")&&Math.hypot(i+6.6,e-17)<.38||Ge.id==="qingchuan"&&Zr&&Math.abs(i-Ps.x-48)<1.45&&Math.abs(e-Ps.z)<1.15)return!0;if(Ge.id==="qingchuan"){const s=[[-17.5,16.3,.89,.63],[-10.5,16.3,.89,.63],[-18.9,15.8,.49,.36],[-9.1,15.8,.49,.36],[-12.35,16.6,.47,.4]];for(const[r,o,a,c]of s)if(Math.abs(i-r)<a+.28&&Math.abs(e-o)<c+.28)return!0}return!1}function Zf(i){if(Ge.id!=="qingchuan"||!i.id)return;const e=Lf(i.id,Rt.hour,Rt.weather==="rain");!e||e.key===i.routineKey||(i.routineKey=e.key,i.routineStops=e.stops,i.route=e.stops.map(t=>Qo(t.x,t.z,Ei)),i.routeIndex=i.route.reduce((t,n,s)=>Math.hypot(n.x-i.x,n.z-i.z)<Math.hypot(i.route[t].x-i.x,i.route[t].z-i.z)?s:t,0),i.path=void 0,i.pathGoal=void 0,i.stuckTime=0,i.waitUntil=hn+.5,i.activity=`准备${e.stops[i.routeIndex].activity}`)}function ro(){fe.dialogue.classList.add("hidden"),fe.dialogueChoices.replaceChildren(),Wi&&(Wi.waitUntil=Math.max(Wi.waitUntil??0,hn+1)),Wi=void 0}function FM(i){const e=(t,n)=>{const s=document.createElement("button");s.type="button",s.textContent=t,s.addEventListener("click",r=>{r.stopPropagation(),n()}),fe.dialogueChoices.append(s)};e("我接下来可以做什么？",()=>{fe.dialogueText.textContent=cu(xe.progress).text}),i.id==="barista"&&!xe.progress.welcomeSeeds&&e("领取新邻居花种 · 2 粒",()=>{xe.progress.welcomeSeeds||(xe.seeds+=2,li({type:"welcome-seeds"}),ga(i.name,"这是给新邻居的两粒花种。去西边社区花园种下吧，等花开时回来告诉我。"),On())}),i.id==="volunteer"&&xe.progress.completed.includes("street-story-2")&&!xe.progress.delivered&&e(xe.flowers>0?"送出一朵鲜花":"还没有鲜花 · 查看种植办法",()=>{if(xe.flowers<1){fe.dialogueText.textContent="到西侧社区花园播种，约 30 秒后收获。需要花种时可以去便利店买。给聚会留一朵，回来和我聊聊吧。";return}xe.progress.delivered||(xe.flowers--,li({type:"deliver"}),Kf(),ga(i.name,"这朵花真好看，谢谢你！我把它摆在聚会桌上。请去白鸟咖啡告诉小许，桌面已经准备好了。"),On())}),e("先聊到这里",ro)}function OM(i){if(i.district===Ge.id){const t=i.npcId&&rn.find(n=>n.id===i.npcId);return t?{...i,x:t.x,z:t.z}:i}if(Ge.id==="qingchuan"){const t=i.district==="apartment_unit"?"apartment_lobby":i.district,n=Ge.buildings.find(s=>s.enter===t);if(n)return{district:Ge.id,x:n.x,z:n.z+n.d/2+1.6,label:n.name}}if(Ge.id==="apartment_lobby"&&i.district==="apartment_unit")return{district:Ge.id,x:4.9,z:-4.55,label:"前往房间的电梯"};const e=st.find(t=>t.action==="exit");return e?{district:Ge.id,x:e.x,z:e.z,label:e.name}:i}function BM(){const i=cu(xe.progress);if(document.querySelector(".chapter").textContent=i.complete?"晴川 · 在这里住下来":`街区故事 ${i.chapterIndex+1} · ${i.chapter.title}`,!i.step||!he){fe.guide.textContent="故事已完成，打开手账回看旅程";return}const e=OM(i.step.target),t=e.x-he.x,n=e.z-he.z,r=["↑","↗","→","↘","↓","↙","←","↖"][(Math.round(Math.atan2(t,-n)/(Math.PI/4))+8)%8];fe.guide.textContent=`${r} ${e.label} · ${Math.hypot(t,n)<2?"就在附近，按 E 互动":`约 ${Math.round(Math.hypot(t,n))} 步行单位`}`}function Jf(){const i=JSON.stringify([xe.progress,rn.filter(t=>t.id).map(t=>[t.id,t.activity]),Math.floor(Rt.hour),Rt.weather,Ge.id]);if(i===dd)return;dd=i,fe.journalContent.replaceChildren();const e=(t,n)=>{const s=document.createElement("h3");s.textContent=t;const r=document.createElement("p");r.textContent=n,fe.journalContent.append(s,r)};for(const t of Os){const n=xe.progress.completed.includes(t.id);e(`${n?"✓ ":""}${t.title}`,`完成奖励：${t.reward.coins} 金币、${t.reward.seeds} 粒花种${n?"（已领取）":""}`);for(const s of t.steps){const r=document.createElement("p");r.className=s.done(xe.progress)?"journal-done":"",r.textContent=`${s.done(xe.progress)?"✓":"○"} ${s.title} · ${s.detail}`,fe.journalContent.append(r)}}e("认识的邻居",`${xe.progress.talkedNpcIds.length}/14 位 · 时钟和天气会改变室外居民的去处；室内工作人员随时可拜访。`);for(const[t,n]of Object.entries(G1)){const s=Object.values(sr).flatMap(c=>c.npcs).find(c=>c.id===t),r=rn.find(c=>c.id===t),o=Lf(t,Rt.hour,Rt.weather==="rain"),a=document.createElement("p");a.textContent=`${xe.progress.talkedNpcIds.includes(t)?"✓":"○"} ${s.name} · ${n} · ${r?.activity??o?.label??Ma[t]?.activity}`,fe.journalContent.append(a)}}function Qr(i=fe.journal.classList.contains("hidden")){fe.journal.classList.toggle("hidden",!i),Ft.clear(),oo(),i?(ro(),Zs(),Jf(),document.querySelector("#close-journal").focus()):Ta()}function ga(i,e){fe.dialogueChoices.replaceChildren(),fe.dialogueName.textContent=i,fe.dialogueText.textContent=e,fe.dialogue.classList.remove("hidden"),fe.interaction.classList.remove("show"),Ft.clear()}function li(i,e="街区委托完成！"){const t=N1(xe.progress,i);for(const n of t.rewards)xe.coins+=n.coins,xe.seeds+=n.seeds;return t.completedNow&&Xn(`${e} 获得 ${t.rewards.reduce((n,s)=>n+s.coins,0)} 金币与花种。`),so(xe),t}function On(){fe.inventory.innerHTML=`<span class="coin">● ${xe.coins} 金币</span><span>✦ 花种 ×${xe.seeds}</span><span>✿ 鲜花 ×${xe.flowers}</span>`;const i=xe.plantedAt.some(o=>Bs(o)===3),e=xe.plantedAt.filter(o=>Bs(o)===1||Bs(o)===2),t=xe.flowers>0?"带鲜花去便利店出售":i?"花开了！回花圃收获":e.length?`花苗生长中 · 约 ${Math.min(...e.map(o=>lu(o)))} 秒`:xe.seeds>0?xe.sold>0?"第一笔生意完成 · 再种一朵":"前往街区西侧花圃播种":"前往便利店购买花种",n=cu(xe.progress),s=n.complete?t:n.text,r=n.complete?"晴川故事已完成 · 手账 J":`${n.chapter.title} · ${n.index+1}/${n.chapter.steps.length} · 手账 J`;fe.goal.innerHTML=`<small>${r}</small><strong>${s}</strong>`,BM(),fe.journal.classList.contains("hidden")||Jf(),fe.shopStock.textContent=`钱包 ${xe.coins} 金币  ·  花种 ${xe.seeds} 粒  ·  鲜花 ${xe.flowers} 朵`,fe.buySeed.disabled=xe.coins<wl,fe.sellFlower.disabled=xe.flowers<1}function Xn(i){fe.toast.textContent=i,fe.toast.classList.add("show"),ta=2.7}function zM(){Ft.clear(),On(),fe.shop.classList.remove("hidden"),fe.interaction.classList.remove("show"),fe.buySeed.focus({preventScroll:!0})}function Zs(){fe.shop.classList.add("hidden"),Ta()}function kM(i){const e=xe.plantedAt[i],t=Bs(e);if(t===0){if(xe.seeds<1){Xn("花种用完了，去便利店购买。");return}xe.seeds--,xe.plantedAt[i]=Date.now(),li({type:"plant"}),Xn("花种种好了。等花开后回来收获！")}else if(t===3)xe.flowers++,xe.plantedAt[i]=0,li({type:"harvest"}),Xn("收获了一朵鲜花，去便利店出售吧。");else{Xn(`花苗正在生长，还需约 ${lu(e)} 秒。`);return}so(xe),mu(i),On()}function _u(){if(!fe.shop.classList.contains("hidden")){Zs();return}if(fe.journal.classList.contains("hidden")){if(!fe.dialogue.classList.contains("hidden")){ro();return}if(rt){if(rt.action==="plot"&&rt.plotIndex!==void 0){kM(rt.plotIndex);return}if(rt.action==="shop"){zM();return}if(rt.action==="rest"){Rt.rest();const i=li({type:"rest"},"晴川故事完成！");ar(),oi(),i.completedNow||Xn("一夜好眠。新的一天开始了。"),On();return}if(rt.action==="exit"){const i=Nr.pop();i&&(oi(),Dl(i.id,i.spawn));return}if(rt.enter){oi(),jr(rt.enter)?Nr.push({id:Ge.id,spawn:jr(Ge.id)?{x:rt.x,z:rt.z+1.25}:{x:rt.x,z:rt.z+.85}}):Nr.length=0,Dl(rt.enter,rt.targetSpawn),oi();return}if(rt.actor){const i=rt.actor;i.waitUntil=Math.max(i.waitUntil??0,hn+4);const e=W1(i.id??"",xe.progress,Rt.hour,Rt.weather==="rain",i.activity)||rt.line;li({type:"talk",npcId:i.id}),Wi=i,ga(i.name??rt.name,e),FM(i)}else rt.inspectId&&li({type:"inspect",id:rt.inspectId}),ga(rt.name,rt.line);On()}}}function ar(){Il=Rt.night,Pt.sync(Rt,jr(Ge.id),Xt),zt.toneMappingExposure=Ot.lerp(1.2,1.16,Rt.daylight);for(const t of rn)t.shadow.material instanceof qt&&(t.shadow.material.opacity=Ot.lerp(.44,.68,Rt.daylight));const i=Rt.label;fe.time.textContent!==i&&(fe.time.textContent=i);const e=`${Il?"☾ ":""}${Pt.label}`;fe.weather.textContent!==e&&(fe.weather.textContent=e),fe.weather.title=`${Rt.forecast}；M 手动切换后仍继续自动演变`}function jf(){Rt.skipPhase(),ar(),oi(),Xn(`时间已推进到${Rt.label}`)}function Qf(){Rt.cycleWeather(),ar(),oi(),Xn(`天气逐渐转为${Pt.label.slice(2)}，之后继续自动演变`)}function HM(i,e=i){if(document.hidden)return;hn+=i,Rt.advance(e),ar();for(const I of Sa){if(I.stage<=0)continue;const ie=Math.sin(hn*(.9+I.stage*.08)+I.phase)*.018;I.plant.rotation.z=ie,I.plant.rotation.x=Math.cos(hn*.63+I.phase)*.008}if(Sc+=i,Sc>=1&&(Sc=0,oi()),ta>0&&(ta-=i,ta<=0&&fe.toast.classList.remove("show")),Mc+=i,Mc>=.5){if(Mc=0,Ge.id==="qingchuan")for(let I=0;I<El;I++)mu(I);On()}if(yc+=i,yc>=1){yc=0;for(const I of rn)I!==he&&I!==Wi&&Zf(I)}const t=!Xt&&fe.journal.classList.contains("hidden")&&fe.dialogue.classList.contains("hidden")&&fe.shop.classList.contains("hidden");let n=0,s=0;t&&((Ft.has("KeyW")||Ft.has("ArrowUp"))&&(s-=1),(Ft.has("KeyS")||Ft.has("ArrowDown"))&&(s+=1),(Ft.has("KeyA")||Ft.has("ArrowLeft"))&&(n-=1),(Ft.has("KeyD")||Ft.has("ArrowRight"))&&(n+=1),n+=Js.x,s+=Js.z);const r=n,o=s,a=new A(1,0,0).applyQuaternion(Bt.quaternion).setY(0).normalize(),c=new A(0,1,0).applyQuaternion(Bt.quaternion).setY(0).normalize();n=a.x*r-c.x*o,s=a.z*r-c.z*o;const l=Math.hypot(n,s);l>1&&(n/=l,s/=l);const u=Ft.has("ShiftLeft")||Ft.has("ShiftRight"),h=u?4.5:2.6,d=n*h,f=s*h,g=l>0?26:34;he.velocityX=yd(he.velocityX,d,g,i),he.velocityZ=yd(he.velocityZ,f,g,i),l===0&&Math.abs(he.velocityX)<.025&&(he.velocityX=0),l===0&&Math.abs(he.velocityZ)<.025&&(he.velocityZ=0);const _=he.x,m=he.z,p=vd(he,he.velocityX*i,he.velocityZ*i),M=p/Math.max(i,1e-4),v=p>12e-5&&M>.035,x=he.walking;he.walking=v;const T=v?he.x-_:n,b=v?he.z-m:s;Math.hypot(T,b)>1e-4&&(he.direction=gd(T,b)),Math.hypot(T,b)>1e-4&&(he.headingYaw=Math.atan2(-b,T)),v&&(he.walkDistance+=p),he.animClock=x!==v?0:he.animClock+i;const C=[3,4,5,4],D=C[Math.floor(he.animClock/.24)%C.length],w=u?2.6:1.8,E=he.direction==="east"?w*1.18:w,N=Ls?v?Ls.walkFrame(he.direction,he.walkDistance,E):Ls.idleFrame(he.direction,he.animClock):v?Math.floor(he.walkDistance/(u?.3:.42))%Kr:D,B=he.walkDistance/(u?.3:.42)*Math.PI,V=v?Math.max(0,Math.sin(B)):0;he.sprite.position.y=he.baseY+(Ls?0:V*.022),he.shadow.scale.x=(he.model?.72:.78)+V*.035,he.shadow.scale.y=(he.model?.28:.34)-V*.014,Ll(he,_d(he.direction),N,he.direction),md(he,v,l>0,i,u,M);for(const I of rn)if(I!==he){I.animClock+=i;let ie=0;const de=!fe.dialogue.classList.contains("hidden")&&Wi===I;if(I.route&&I.route.length>1&&!de&&hn>=(I.waitUntil??0)){const Je=I.routeIndex??0,ut=I.route[Je];if(Math.hypot(ut.x-I.x,ut.z-I.z)<.18)I.activity=I.routineStops?.[Je]?.activity??"在街边歇脚",I.routeIndex=(Je+1)%I.route.length,I.path=void 0,I.pathGoal=void 0,I.waitUntil=hn+(I.routineStops?.[Je]?.wait??6);else{I.activity=`正在赶路 · ${I.routineStops?.[Je]?.activity??"下一处街角"}`,(I.pathGoal!==Je||!I.path)&&(I.path=B1({x:I.x,z:I.z},ut,Ge.size,Ei),I.pathGoal=Je);const je=I.path[0];if(je){const K=je.x-I.x,J=je.z-I.z,pe=Math.hypot(K,J);if(pe<.1)I.path.shift();else{const Ne=I.x,Ee=I.z,Ke=Math.min(pe,(I.pace??.75)*i);ie=vd(I,K/pe*Ke,J/pe*Ke),ie>1e-4&&(I.direction=gd(I.x-Ne,I.z-Ee),I.headingYaw=Math.atan2(-(I.z-Ee),I.x-Ne))}}I.stuckTime=ie>1e-4?0:(I.stuckTime??0)+i,I.stuckTime>2&&(I.path=void 0,I.pathGoal=void 0,I.stuckTime=0,I.routeIndex=(Je+1)%I.route.length,I.waitUntil=hn+.5)}}I.walking=ie>1e-4,I.walking&&(I.walkDistance+=ie),I.sprite.position.y=I.baseY;const be=I.drawn?.direction(I.direction),qe=I.drawn?I.walking?I.drawn.walkFrame(be,I.walkDistance,.88):I.drawn.idleFrame(be,I.animClock):I.walking?[0,1,0,2][Math.floor(I.walkDistance/.22)%4]:0;Ll(I,_d(I.direction),qe),md(I,I.walking,I.walking,i,!1,ie/Math.max(i,1e-4))}for(const I of st)I.actor&&(I.x=I.actor.x,I.z=I.actor.z);for(const I of rn)I.sprite.renderOrder=2,I.sprite.material.depthTest=!0,I.shadow.renderOrder=1;Pt.update(i,Bt,he),pu?.update(i,Pt.rainAmount,Pt.wetness,Pt.lightLevel),rt=null;let Y=1/0;for(const I of st){const ie=Math.hypot(he.x-I.x,he.z-I.z);ie<I.range&&ie<Y&&(rt=I,Y=ie)}rt&&t?(fe.interaction.innerHTML='<span class="key">E</span><span>'+rt.name+"</span><small>"+(rt.actor?.activity??"互动")+"</small>",fe.interaction.classList.add("show")):fe.interaction.classList.remove("show");const W=Xt?40:he.x,q=Xt?0:$f(he.z,Ge.id),Z=1-Math.exp(-i*9);Vn.x+=(W-Vn.x)*Z,Vn.z+=(q-Vn.z)*Z,Bt.position.copy(Vn).add(Xt?Df:Ri),Bt.lookAt(Vn),un&&(he.shadow.getWorldPosition(Dr),un.update(hn,Dr,Vn,Xt,Pt.wind,Pt.lightLevel,Tn.fog instanceof no?Tn.fog:null)),Yf(),EM(),zt.render(Tn,Bt)}function xu(){const{width:i,height:e}=Z1(),t=e<680?15.5:17,n=i/e;Bt.aspect=n;const s=Xt?Math.max(112,178/n):t;Bt.fov=Ot.radToDeg(2*Math.atan(s/(2*(Xt?Df.length():Ri.length())))),Bt.updateProjectionMatrix(),zt.setSize(i,e)}window.addEventListener("resize",xu);xu();const ep=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","KeyE","KeyN","KeyM","KeyV","KeyJ","Space","Escape"]);function Ta(){fe.scene.focus({preventScroll:!0})}window.addEventListener("keydown",i=>{if(ep.has(i.code)){if(i.preventDefault(),i.stopPropagation(),i.code==="KeyJ"){i.repeat||Qr();return}if(i.code==="Escape"){if(!fe.journal.classList.contains("hidden")){Qr(!1);return}if(Xt){ma(!1);return}fe.shop.classList.contains("hidden")?ro():Zs();return}if(fe.journal.classList.contains("hidden")){if(!fe.shop.classList.contains("hidden")){(i.code==="KeyE"||i.code==="Space")&&Zs();return}if(i.code==="KeyV"){i.repeat||ma(!Xt);return}Xt||i.repeat&&["KeyE","KeyN","KeyM","Space"].includes(i.code)||(i.code==="KeyE"||i.code==="Space"?_u():i.code==="KeyN"?jf():i.code==="KeyM"?Qf():Ft.add(i.code))}}},!0);window.addEventListener("keyup",i=>{ep.has(i.code)&&(i.preventDefault(),i.stopPropagation(),Ft.delete(i.code))},!0);window.addEventListener("blur",()=>Ft.clear());document.addEventListener("visibilitychange",()=>{Ft.clear(),Al.getDelta(),document.hidden&&oi()});window.addEventListener("pagehide",oi);fe.scene.addEventListener("pointerdown",Ta);fe.scene.addEventListener("contextmenu",i=>i.preventDefault());fe.dialogue.addEventListener("click",_u);const Js={x:0,z:0},js=document.querySelector("#mobile-joystick"),tp=js.querySelector(".joystick-thumb");let eo=null;function np(i,e){const t=js.getBoundingClientRect(),n=Math.min(t.width,t.height)*.32,s=i-(t.left+t.width/2),r=e-(t.top+t.height/2),o=rd()?r:s,a=rd()?-s:r,c=Math.hypot(o,a),l=c>n?n/c:1,u=o*l/n,h=a*l/n;tp.style.transform=`translate(${u*n}px, ${h*n}px)`;const d=Math.hypot(u,h);Js.x=d<.16?0:u,Js.z=d<.16?0:h}function oo(){eo=null,Js.x=Js.z=0,tp.style.transform="translate(0, 0)"}js.addEventListener("pointerdown",i=>{eo===null&&(i.preventDefault(),eo=i.pointerId,js.setPointerCapture(i.pointerId),np(i.clientX,i.clientY))});js.addEventListener("pointermove",i=>{eo===i.pointerId&&np(i.clientX,i.clientY)});for(const i of["pointerup","pointercancel","lostpointercapture"])js.addEventListener(i,e=>{eo===e.pointerId&&oo()});window.addEventListener("blur",oo);window.addEventListener("resize",oo);document.querySelector("#mobile-night").addEventListener("click",()=>{jf()});document.querySelector("#overview-toggle").addEventListener("click",()=>ma(!Xt));document.querySelector("#mobile-weather").addEventListener("click",Qf);document.querySelector("#journal-toggle").addEventListener("click",()=>Qr());document.querySelector("#close-journal").addEventListener("click",()=>Qr(!1));fe.journal.addEventListener("click",i=>{i.target===fe.journal&&Qr(!1)});$1();document.querySelector("#mobile-action").addEventListener("click",_u);document.querySelector("#close-shop").addEventListener("click",Zs);fe.shop.addEventListener("pointerdown",i=>{i.target===fe.shop&&Zs()});fe.buySeed.addEventListener("click",()=>{xe.coins<wl||(xe.coins-=wl,xe.seeds++,so(xe),On(),Xn("买到一粒花种。"))});fe.sellFlower.addEventListener("click",()=>{if(xe.flowers<1)return;xe.flowers--,xe.coins+=sd,xe.sold++;const i=li({type:"sell"});so(xe),On(),i.completedNow||Xn(`鲜花卖出了，获得 ${sd} 金币。`)});function yi(i){return new Promise((e,t)=>{const n=new Image;n.onload=()=>e(n),n.onerror=()=>t(new Error(`无法加载 ${i}`)),n.src=`./assets/${i}`})}function bd(){let i=document.querySelector("#character-load-notice");if(!da.size){i?.remove();return}i||(i=document.createElement("div"),i.id="character-load-notice",i.setAttribute("role","status"),document.querySelector("#app").append(i)),i.textContent=[...da.values()].join(" ")}async function VM(){try{let i=function(_,m=1){const p=a.get(_);if(!p)throw new Error(`Unknown loading task: ${_}`);p.fraction=Math.max(p.fraction,Math.min(1,Math.max(0,m)));const M=[...a.values()].reduce((x,T)=>x+T.weight*T.fraction,0),v=Math.floor(100*M/c);l.setAttribute("aria-valuenow",String(v)),u.style.width=`${v}%`,h.textContent=`${v}%`},e=function(){requestAnimationFrame(e);const _=Al.getDelta();HM(Math.min(_,.05),Math.min(_,1))};const t=matchMedia("(pointer:coarse), (max-width:600px), (max-width:900px) and (max-height:600px)").matches,n=["mika","chen","yuan","barista"],s=["asphalt","sidewalk","grass","brick"],r=["paving","asphalt","soil","turf","terracotta"],o=t?["cafe-building","cafe-tree-pit","cafe-table","cafe-menu","cafe-lamp","cafe-planter","community-garden-gate","community-tree"]:["statue","cafe-building","cafe-tree-pit","cafe-bus-stop","cafe-table","cafe-menu","cafe-lamp","cafe-planter","community-garden-gate","community-tree"],a=new Map;for(const _ of n)a.set(`character:${_}`,{weight:1,fraction:0});for(const _ of s)a.set(`surface:${_}`,{weight:1,fraction:0}),_!=="brick"&&a.set(`normal:${_}`,{weight:1,fraction:0});for(const _ of r)a.set(`terrain:${_}`,{weight:1,fraction:0});for(const _ of["cafe-props","provided-strip","npc-index","street-props","scene"])a.set(_,{weight:1,fraction:0});for(const _ of o)a.set(`model:${_}`,{weight:1,fraction:0});a.set("drawn-protagonist",{weight:17,fraction:0});const c=[...a.values()].reduce((_,m)=>_+m.weight,0),l=document.querySelector("#loading-progress"),u=document.querySelector("#loading-progress-fill"),h=document.querySelector("#loading-percent"),d=document.querySelector("#loading-message");async function f(_,m){try{return await new Jy().loadAsync(`./assets/${m}`,p=>{p.lengthComputable&&p.total>0&&i(`model:${_}`,Math.min(.95,p.loaded/p.total*.95))})}finally{i(`model:${_}`)}}d.textContent="正在加载基础贴图…",await Promise.all([...n.map(async _=>{uu.set(_,await yi(`characters/${_}.webp`)),i(`character:${_}`)}),...s.map(async _=>{const m=_==="brick"?"cafe-brick":`${_}-ground`,p=new ft(await yi(`surfaces/${m}.webp`));if(i(`surface:${_}`),p.colorSpace=at,p.wrapS=p.wrapT=Dn,p.magFilter=_==="brick"?bt:Ct,p.minFilter=dn,p.anisotropy=Math.min(8,zt.capabilities.getMaxAnisotropy()),p.needsUpdate=!0,Lr.set(_,p),_!=="brick"){const M=new ft(await yi(`surfaces/${_}-normal.webp`));i(`normal:${_}`),M.wrapS=M.wrapT=Dn,M.magFilter=Ct,M.minFilter=dn,M.anisotropy=p.anisotropy,M.needsUpdate=!0,hu.set(_,M)}}),...k1.map(async _=>{const m=new ft(await yi(`surfaces/models-v1/${_}.webp`));m.colorSpace=at,m.wrapS=m.wrapT=Dn,m.anisotropy=Math.min(8,zt.capabilities.getMaxAnisotropy()),m.needsUpdate=!0,Lr.set(`model-${_}`,m)}),...r.map(async _=>{const m=new ft(await yi(_==="turf"?"surfaces/terrain-v2-turf.webp":`surfaces/terrain-v1/${_}.webp`));m.colorSpace=at,m.wrapS=m.wrapT=Dn,m.magFilter=Ct,m.minFilter=dn,m.anisotropy=Math.min(8,zt.capabilities.getMaxAnisotropy()),m.needsUpdate=!0,Lr.set(`terrain-${_}`,m),i(`terrain:${_}`)}),(async()=>{ea=await yi("props/cafe-props.webp"),i("cafe-props")})(),(async()=>{Cs=await yi("characters/protagonist-4dir-16frame.webp"),zf(),i("provided-strip")})()]),d.textContent="正在加载角色与街区模型，首次打开请稍候…",await Promise.all([(async()=>{if(!t)try{const _=await f("statue","characters/protagonist.glb");Xi={scene:_.scene,animations:_.animations}}catch{Xi=null}})(),(async()=>{try{ua=(await f("cafe-building","environment/cafe-building.glb")).scene}catch(_){console.warn("白鸟咖啡馆候选模型未能加载，使用程序建筑。",_),ua=null}})(),(async()=>{try{$r=(await f("cafe-tree-pit","environment/cafe-tree-pit.glb")).scene}catch(_){console.warn("街角树池模型未能加载，使用原有街树。",_),$r=null}})(),(async()=>{try{if(t)return;Zr=(await f("cafe-bus-stop","environment/cafe-bus-stop.glb")).scene}catch(_){console.warn("公交站模型未能加载，使用代码场景。",_),Zr=null}})(),(async()=>{await Promise.all(["cafe-table","cafe-menu","cafe-lamp","cafe-planter"].map(async _=>{try{const m=await f(_,`environment/${_}.glb`);m.scene.traverse(p=>{if(!(p instanceof Pe))return;const M=Array.isArray(p.material)?p.material:[p.material];for(const v of M)if(v instanceof fn)for(const x of[v.map,v.roughnessMap,v.metalnessMap])x&&(x.anisotropy=Math.min(8,zt.capabilities.getMaxAnisotropy()))}),fu.set(_,m.scene)}catch(m){console.warn(`街角素材 ${_} 未能加载，使用原有素材。`,m)}}))})(),(async()=>{try{ha=(await f("community-garden-gate","environment/community-garden-gate.glb")).scene}catch(_){console.warn("社区花园入口模型未能加载，使用原有围栏。",_),ha=null}})(),(async()=>{try{qi=(await f("community-tree","environment/community-tree.glb")).scene}catch(_){console.warn("新版树模型未能加载，使用程序树。",_),qi=null}})(),(async()=>{try{Ls=await Pf("./assets/characters/drawn/protagonist/character.json",void 0,(_,m)=>i("drawn-protagonist",_/m))}catch(_){throw console.error("新版主角动画未下载完整，请重试。",_),_}finally{i("drawn-protagonist")}})(),(async()=>{try{fa=await Tl("./assets/characters/drawn/npcs.json",_=>_.json())}catch(_){throw new Error("新版居民素材索引未下载完整，请刷新重试。",{cause:_})}finally{i("npc-index")}})(),(async()=>{try{const _=await fetch("./assets/props/street-renewal/catalog.json");if(_.ok){const m=await _.json();await Promise.all(Object.entries(m).map(async([p,M])=>{if(!["garden-bed","garden-sprouts","garden-buds","garden-flowers"].includes(p))try{du.set(p,await yi(`props/street-renewal/${M}`))}catch(v){console.warn(`街区素材 ${p} 未能加载，保留已有画面。`,v)}}))}}catch(_){console.warn("街区素材索引暂不可用，保留已有画面。",_)}finally{i("street-props")}})()]),d.textContent="正在布置街区…";const g=xe.location;Nr.push(...g?.returnStack??[]),Dl(g?.districtId??"qingchuan",g?{x:g.x,z:g.z}:void 0),ar(),Al.getDelta(),On(),i("scene"),fe.loading.classList.add("hidden"),Ta(),e()}catch(i){console.error(i),fe.loading.innerHTML='<span>资源加载未完成</span><small>请检查网络后刷新；较慢网络可稍后重试。</small><button type="button" onclick="location.reload()">重新加载</button>'}}VM();
