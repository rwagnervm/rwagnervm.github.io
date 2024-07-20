import{co as K,hi as L,hj as V,K as M,hk as Y,hl as D,hm as b,hn as y,ho as B,hp as T,hq as I,hr as Q,hs as W,n as X,hd as Z,ht as _}from"./index.7eb0daf2.js";import{e as nn}from"./mat3f64.4564d6a3.js";import{o as tn,e as E}from"./mat4f64.a89cc140.js";import{a as $}from"./spatialReferenceEllipsoidUtils.54dfd023.js";import{u as R}from"./computeTranslationToOriginAndRotation.4860e3ef.js";import{m as rn}from"./meshVertexSpaceUtils.5f97af5a.js";import{i as F,e as S,f as z}from"./vec3.5fc4e8fc.js";import{logProjectionError as h,transformNormal as k,transformTangent as q,projectFromPCPF as on,projectNormalFromPCPF as en,projectTangentFromPCPF as an,projectToPCPF as ln,projectNormalToPCPF as sn,projectTangentToPCPF as cn}from"./projection.6ad549e2.js";function U(n,t,r,e){if(K(n.spatialReference,r)){v[0]=n.x,v[1]=n.y;const a=n.z;return v[2]=a??e??0,L(v,n.spatialReference,0,t,r,0,1)}const o=V(n,r);return!!o&&(t[0]=o?.x,t[1]=o?.y,t[2]=o?.z??e??0,!0)}const v=M(),p=()=>X.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function Nn(n,t,{vertexSpace:r,spatialReference:e}){if(r.type==="georeferenced"){const u=n;if(!U(t,u,e))return!1;const{origin:c}=r;return Z(n,u,c),!0}const o=$(e),a=n;if(!U(t,a,o))return!1;const{origin:i}=r,l=d;if(!R(e,i,l,o))return!1;const s=T(d,l);return s!=null&&(_(n,a,s),!0)}function On(n,t,r){const{vertexSpace:e,transform:o,vertexAttributes:a}=n,i=w(n.spatialReference,r,g.SOURCE|g.TARGET);if(rn(e,t)&&(!o||Y(o.localMatrix,tn))&&D(i,1)){const{position:l,normal:s,tangent:u}=a,c=r?.allowBufferReuse;return{position:c?l:l.slice(),normal:c?s:s?.slice(),tangent:c?u:u?.slice()}}switch(n.vertexSpace.type){case"local":return t.type==="local"?mn(n,n.vertexSpace,t.origin,r):fn(n,n.vertexSpace,t.origin,r);case"georeferenced":return t.type==="local"?pn(n,n.vertexSpace,t.origin,r):un(n,n.vertexSpace,t.origin,r)}}function un({vertexAttributes:n,transform:t,spatialReference:r},{origin:e},o,a){const{position:i,normal:l,tangent:s}=t?P(n,t.localMatrix):n,u=new Float64Array(i.length);let c=i;if(e&&(c=F(u,c,e)),o){const A=b(J,o);c=F(u,c,A)}w(r,a,g.NONE);const m=a?.allowBufferReuse;return{position:c!==n.position||m?c:c.slice(),normal:l!==n.normal||m?l:l?.slice(),tangent:s!==n.tangent||m?s:s?.slice()}}function fn({spatialReference:n,vertexAttributes:t,transform:r},{origin:e},o,a){const i=$(n);if(!R(n,e,f,i))return h(p(),n,i),null;r&&y(f,f,r.localMatrix),H(f,n,a,g.SOURCE);const l=new Float64Array(t.position.length),s=hn(t.position,f,n,l);if(!s)return null;const u=$n(s,l,t.normal,f,n);if(t.normal&&!u)return null;const c=An(s,l,t.tangent,f,n);if(t.tangent&&!c)return null;if(o){const m=b(J,o);F(s,s,m)}return{position:s,normal:u,tangent:c}}function pn({vertexAttributes:n,spatialReference:t,transform:r},{origin:e},o,a){const i=$(t);if(!R(t,o,f,i))return h(p(),t,i),null;const l=1/w(t,a,g.TARGET);B(f,f,[l,l,l]);const s=T(x,f),{position:u,normal:c,tangent:m}=gn(n,e,r),A=new Float64Array(u.length),C=xn(u,t,s,A);if(!C)return null;const j=I(vn,s),N=Rn(c,u,A,t,j,c!==n.normal?c:void 0);if(!N&&c)return null;const O=Fn(m,u,A,t,j,m!==n.tangent?m:void 0);return!O&&m?null:{position:C,normal:N,tangent:O}}function gn(n,t,r){if(!t)return n;if(!r){const{position:o,normal:a,tangent:i}=n;return{position:F(new Float64Array(o.length),o,t),tangent:i,normal:a}}const e=P(n,r.localMatrix);return F(e.position,e.position,t),e}function mn({vertexAttributes:n,spatialReference:t,transform:r},{origin:e},o,a){const i=$(t);if(!R(t,e,f,i))return h(p(),t,i),null;if(r&&y(f,f,r.localMatrix),!R(t,o,x,i))return h(p(),i,t),null;T(x,x);const l=y(f,x,f);return H(l,t,a,g.SOURCE|g.TARGET),P(n,l)}function P(n,t){const r=new Float64Array(n.position.length);S(r,n.position,t);const e=n.normal?new Float32Array(n.normal.length):null,o=n.tangent?new Float32Array(n.tangent.length):null;return e&&n.normal&&k(n.normal,e,t),o&&n.tangent&&q(n.tangent,o,t),{position:r,normal:e,tangent:o}}function hn(n,t,r,e){S(e,n,t);const o=new Float64Array(n.length);return on(e,o,r)?o:(h(p(),$(r),r),null)}function $n(n,t,r,e,o){if(r==null)return null;const a=new Float32Array(r.length);return k(r,a,e),en(a,n,t,o,a)?a:(h(p(),$(o),o),null)}function An(n,t,r,e,o){if(r==null)return null;const a=new Float32Array(r.length);return q(r,a,e),an(a,n,t,o,a)?a:(h(p(),$(o),o),null)}function H(n,t,r,e){const o=w(t,r,e);o!==1&&B(n,n,[o,o,o])}function w(n,t,r){const e=!!(r&g.SOURCE),o=!!(r&g.TARGET),a=t?.sourceUnit,i=t?.targetUnit;if(!a&&!i)return 1;let l=G(a,n);!e&&a&&l!==1&&(p().warn("source unit conversion not supported"),l=1);let s=1/G(i,n);return!o&&i&&s!==1&&(p().warn("target unit conversion not supported"),s=1),l*s}function xn(n,t,r,e){const o=ln(n,t,e);if(!o)return h(p(),t,$(t)),null;const a=new Float64Array(o.length);return S(a,o,r),a}function Rn(n,t,r,e,o,a){if(n==null)return null;const i=a??new Float32Array(n.length);return sn(n,t,r,e,i)?(z(i,i,o),i):(h(p(),e,$(e)),null)}function Fn(n,t,r,e,o,a){if(n==null)return null;const i=a??new Float32Array(n.length);return cn(n,t,r,e,i)?(z(i,i,o,4),i):(h(p(),e,$(e)),null)}function G(n,t){if(n==null)return 1;const r=Q(t);return 1/W(r,"meters",n)}const f=E(),x=E(),vn=nn(),J=M(),d=E();var g;(function(n){n[n.NONE=0]="NONE",n[n.SOURCE=1]="SOURCE",n[n.TARGET=2]="TARGET"})(g||(g={}));export{On as M,Nn as N,G as X,U as c};