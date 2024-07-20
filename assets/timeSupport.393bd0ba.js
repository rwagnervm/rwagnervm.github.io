import{ce as se,cf as oe,cg as O,L as le,ch as B,ci as V,cj as K,aK as ae,ck as ue,cl as b,aT as ce,cm as fe,cn as me,c2 as pe,aD as $,aN as G,aM as he,co as ye,cp as ge,cq as Ie,cr as Z,$ as L,cs as Re,ct as Se,cu as Ne,cv as de,s as w,ay as $e}from"./index.7eb0daf2.js";import{h as _e,a as v,I as xe,x as F,$ as Te,H as be,U as Ge,K as z}from"./featureConversionUtils.c6dfa488.js";import{e as _}from"./OptimizedFeature.32c00f5f.js";import{t as k}from"./json.20588c22.js";const C=new _,we=new _,A=new _,E={esriGeometryPoint:F,esriGeometryPolyline:Te,esriGeometryPolygon:be,esriGeometryMultipoint:Ge};function st(e,t,n,r=e.hasZ,i=e.hasM){if(t==null)return null;const s=e.hasZ&&r,o=e.hasM&&i;if(n){const l=v(A,t,e.hasZ,e.hasM,"esriGeometryPoint",n,r,i);return F(l,s,o)}return F(t,s,o)}function T(e,t,n,r,i,s,o=t,l=n){const a=t&&o,u=n&&l,f=r!=null?"coords"in r?r:r.geometry:null;if(f==null)return null;if(i){let c=_e(we,f,t,n,e,i,o,l);return s&&(c=v(A,c,a,u,e,s)),E[e]?.(c,a,u)??null}if(s){const c=v(A,f,t,n,e,s,o,l);return E[e]?.(c,a,u)??null}return xe(C,f,t,n,o,l),E[e]?.(C,a,u)??null}function ot(e){return e&&W in e?JSON.parse(JSON.stringify(e,Ee)):e}const W="_geVersion",Ee=(e,t)=>e!==W?t:void 0;function j(e,t){return e?t?4:3:t?3:2}function lt(e,t,n,r){if(!t?.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const i=e.coords,s=[],o=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:l,coords:a}=t,u=j(n,r);let f=0;for(const c of l){const m=Me(o,a,f,c,n,r);m&&s.push(m),f+=c*u}if(s.sort((c,m)=>{let p=c[2]-m[2];return p===0&&n&&(p=c[4]-m[4]),p}),s.length){let c=6*s[0][2];i[0]=s[0][0]/c,i[1]=s[0][1]/c,n&&(c=6*s[0][4],i[2]=c!==0?s[0][3]/c:0),(i[0]<o[0]||i[0]>o[1]||i[1]<o[2]||i[1]>o[3]||n&&(i[2]<o[4]||i[2]>o[5]))&&(i.length=0)}if(!i.length){const c=t.lengths[0]?Pe(a,0,l[0],n,r):null;if(!c)return null;i[0]=c[0],i[1]=c[1],n&&c.length>2&&(i[2]=c[2])}return e}function Me(e,t,n,r,i,s){const o=j(i,s);let l=n,a=n+o,u=0,f=0,c=0,m=0,p=0;for(let N=0,x=r-1;N<x;N++,l+=o,a+=o){const y=t[l],g=t[l+1],R=t[l+2],I=t[a],S=t[a+1],Y=t[a+2];let d=y*S-I*g;m+=d,u+=(y+I)*d,f+=(g+S)*d,i&&(d=y*Y-I*R,c+=(R+Y)*d,p+=d),y<e[0]&&(e[0]=y),y>e[1]&&(e[1]=y),g<e[2]&&(e[2]=g),g>e[3]&&(e[3]=g),i&&(R<e[4]&&(e[4]=R),R>e[5]&&(e[5]=R))}if(m>0&&(m*=-1),p>0&&(p*=-1),!m)return null;const h=[u,f,.5*m];return i&&(h[3]=c,h[4]=.5*p),h}function Pe(e,t,n,r,i){const s=j(r,i);let o=t,l=t+s,a=0,u=0,f=0,c=0;for(let m=0,p=n-1;m<p;m++,o+=s,l+=s){const h=e[o],N=e[o+1],x=e[o+2],y=e[l],g=e[l+1],R=e[l+2],I=r?Fe(h,N,x,y,g,R):ve(h,N,y,g);if(I)if(a+=I,r){const S=Oe(h,N,x,y,g,R);u+=I*S[0],f+=I*S[1],c+=I*S[2]}else{const S=Ae(h,N,y,g);u+=I*S[0],f+=I*S[1]}}return a>0?r?[u/a,f/a,c/a]:[u/a,f/a]:n>0?r?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function ve(e,t,n,r){const i=n-e,s=r-t;return Math.sqrt(i*i+s*s)}function Fe(e,t,n,r,i,s){const o=r-e,l=i-t,a=s-n;return Math.sqrt(o*o+l*l+a*a)}function Ae(e,t,n,r){return[e+.5*(n-e),t+.5*(r-t)]}function Oe(e,t,n,r,i,s){return[e+.5*(r-e),t+.5*(i-t),n+.5*(s-n)]}const M=[0,0];function H(e,t){if(!t)return null;if("x"in t){const n={x:0,y:0};return[n.x,n.y]=e(t.x,t.y,M),t.z!=null&&(n.z=t.z),t.m!=null&&(n.m=t.m),n}if("xmin"in t){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=e(t.xmin,t.ymin,M),[n.xmax,n.ymax]=e(t.xmax,t.ymax,M),t.hasZ&&(n.zmin=t.zmin,n.zmax=t.zmax,n.hasZ=!0),t.hasM&&(n.mmin=t.mmin,n.mmax=t.mmax,n.hasM=!0),n}return"rings"in t?{rings:D(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:D(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:X(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:null}function D(e,t){const n=[];for(const r of e)n.push(X(r,t));return n}function X(e,t){const n=[];for(const r of e){const i=t(r[0],r[1],[0,0]);n.push(i),r.length>2&&i.push(r[2]),r.length>3&&i.push(r[3])}return n}async function q(e,t){if(!e||!t)return;const n=Array.isArray(e)?e.map(r=>r.geometry!=null?r.geometry.spatialReference:null).filter(ae):[e];await ue(n.map(r=>({source:r,dest:t})))}const Q=H.bind(null,se),ee=H.bind(null,oe);function te(e,t,n,r){if(!e||(n||(n=t,t=e.spatialReference),!b(t)||!b(n)||O(t,n)))return e;if(B(t,n)){const i=V(n)?Q(e):ee(e);return i.spatialReference=n,i}return K(k,[e],t,n,null,r)[0]}class Ve{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,n,r,i){if(!t?.length||!n||!r||O(n,r))return t;const s={geometries:t,inSpatialReference:n,outSpatialReference:r,geographicTransformation:i,resolve:le()};return this._jobs.push(s),this._timer??=setTimeout(this._process,10),s.resolve.promise}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:n,inSpatialReference:r,outSpatialReference:i,resolve:s,geographicTransformation:o}=t;B(r,i)?V(i)?s(n.map(Q)):s(n.map(ee)):s(K(k,n,r,i,o,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const je=new Ve;function at(e,t,n,r){return je.push(e,t,n,r)}const qe=new ce({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),J=Object.freeze({});async function ut(e,t,n){const{outFields:r,orderByFields:i,groupByFieldsForStatistics:s,outStatistics:o}=e;if(r)for(let l=0;l<r.length;l++)r[l]=r[l].trim();if(i)for(let l=0;l<i.length;l++)i[l]=i[l].trim();if(s)for(let l=0;l<s.length;l++)s[l]=s[l].trim();if(o)for(let l=0;l<o.length;l++)o[l].onStatisticField&&(o[l].onStatisticField=o[l].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),Ue(e,t,n)}async function Ue(e,t,n){if(!e)return null;let{where:r}=e;if(e.where=r=r?.trim(),(!r||/^1 *= *1$/.test(r)||t&&t===r)&&(e.where=null),!e.geometry)return e;let i=await Ze(e);if(e.distance=0,e.units=null,e.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:s}=e.geometry;i=fe(i),i.spatialReference=s}if(i){await q(i.spatialReference,n),i=Ye(i,n);const s=(await me(pe(i)))[0];if(s==null)throw J;const o="quantizationParameters"in e&&e.quantizationParameters?.tolerance||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,l=o&&ne(i,n)?{densificationStep:8*o}:void 0,a=s.toJSON(),u=te(a,a.spatialReference,n,l);if(!u)throw J;u.spatialReference=n,e.geometry=u}return e}function ne(e,t){if(!e)return!1;const n=e.spatialReference;return($(e)||G(e)||he(e))&&!O(n,t)&&!ye(n,t)}function Ye(e,t){const n=e.spatialReference;return ne(e,t)&&$(e)?{spatialReference:n,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}async function Ze(e){const{distance:t,units:n}=e,r=e.geometry;if(t==null||"vertexAttributes"in r)return r;const i=r.spatialReference,s=n?qe.fromJSON(n):ge(i),o=i&&(Ie(i)||V(i))?r:await q(i,Z).then(()=>te(r,Z));return(await ze())(o.spatialReference,o,t,s)}async function ze(){return(await L(()=>import("./geometryEngineJSON.01a4d20d.js"),["assets/geometryEngineJSON.01a4d20d.js","assets/geometryEngineBase.99ab4263.js","assets/index.7eb0daf2.js","assets/index.d3b4073e.css","assets/geometryEngineJSON.ca151196.js","assets/json.20588c22.js"])).geodesicBuffer}function Ce(e){return e==="mesh"?Re:Se(e)}function re(e,t){return e?t?4:3:t?3:2}function De(e,t,n,r){return ie(e,t,n,r.coords[0],r.coords[1])}function Je(e,t,n,r,i,s){const o=re(i,s),{coords:l,lengths:a}=r;if(!a)return!1;for(let u=0,f=0;u<a.length;u++,f+=o)if(!ie(e,t,n,l[f],l[f+1]))return!1;return!0}function ie(e,t,n,r,i){if(!e)return!1;const s=re(t,n),{coords:o,lengths:l}=e;let a=!1,u=0;for(const f of l)a=Be(a,o,s,u,f,r,i),u+=f*s;return a}function Be(e,t,n,r,i,s,o){let l=e,a=r;for(let u=r,f=r+i*n;u<f;u+=n){a=u+n,a===f&&(a=r);const c=t[u],m=t[u+1],p=t[a],h=t[a+1];(m<o&&h>=o||h<o&&m>=o)&&c+(o-m)/(h-m)*(p-c)<s&&(l=!l)}return l}const P="unsupported-query",Ke={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},U={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function Le(e){return e!=null&&U.spatialRelationship[e]===!0}function ke(e){return e!=null&&U.queryGeometry[$e(e)]===!0}function We(e){return e!=null&&U.layerGeometry[e]===!0}function He(){return L(()=>import("./geometryEngineJSON.01a4d20d.js"),["assets/geometryEngineJSON.01a4d20d.js","assets/geometryEngineBase.99ab4263.js","assets/index.7eb0daf2.js","assets/index.d3b4073e.css","assets/geometryEngineJSON.ca151196.js","assets/json.20588c22.js"])}function ct(e,t,n,r,i){if(G(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const s=z(new _,t,!1,!1);return Promise.resolve(o=>De(s,!1,!1,o))}if(G(t)&&n==="esriGeometryMultipoint"){const s=z(new _,t,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(o=>Je(s,!1,!1,o,r,i))}if($(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(s=>Ne(t,T(n,r,i,s)));if($(t)&&n==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(s=>de(t,T(n,r,i,s)));if($(t)&&e==="esriSpatialRelIntersects"){const s=Ce(n);return Promise.resolve(o=>s(t,T(n,r,i,o)))}return He().then(s=>{const o=s[Ke[e]].bind(null,t.spatialReference,t);return l=>o(T(n,r,i,l))})}async function ft(e,t,n){const{spatialRel:r,geometry:i}=e;if(i){if(!Le(r))throw new w(P,"Unsupported query spatial relationship",{query:e});if(b(i.spatialReference)&&b(n)){if(!ke(i))throw new w(P,"Unsupported query geometry type",{query:e});if(!We(t))throw new w(P,"Unsupported layer geometry type",{query:e});if(e.outSR)return q(e.geometry?.spatialReference,e.outSR)}}}function mt(e){if($(e))return!0;if(G(e)){for(const t of e.rings)if(t.length!==5||t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1;return!0}return!1}async function pt(e,t){if(!e)return null;const n=t.featureAdapter,{startTimeField:r,endTimeField:i}=e;let s=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY;if(r&&i)await t.forEach(l=>{const a=n.getAttribute(l,r),u=n.getAttribute(l,i);a==null||isNaN(a)||(s=Math.min(s,a)),u==null||isNaN(u)||(o=Math.max(o,u))});else{const l=r||i;await t.forEach(a=>{const u=n.getAttribute(a,l);u==null||isNaN(u)||(s=Math.min(s,u),o=Math.max(o,u))})}return{start:s,end:o}}function ht(e,t,n){if(!t||!e)return null;const{startTimeField:r,endTimeField:i}=e;if(!r&&!i)return null;const{start:s,end:o}=t;if(s===null&&o===null)return null;if(s===void 0&&o===void 0)return et();const l=n.getAttributeAsTimestamp?.bind(n)??n.getAttribute.bind(n);return r&&i?Xe(l,r,i,s,o):Qe(l,r||i,s,o)}function Xe(e,t,n,r,i){return r!=null&&i!=null?s=>{const o=e(s,t),l=e(s,n);return(o==null||o<=i)&&(l==null||l>=r)}:r!=null?s=>{const o=e(s,n);return o==null||o>=r}:i!=null?s=>{const o=e(s,t);return o==null||o<=i}:void 0}function Qe(e,t,n,r){return n!=null&&r!=null&&n===r?i=>e(i,t)===n:n!=null&&r!=null?i=>{const s=e(i,t);return s!=null&&s>=n&&s<=r}:n!=null?i=>{const s=e(i,t);return s!=null&&s>=n}:r!=null?i=>{const s=e(i,t);return s!=null&&s<=r}:void 0}function et(){return()=>!1}export{mt as I,ft as P,ut as S,Ue as a,T as b,pt as c,at as d,J as g,ot as h,te as j,lt as n,ht as t,ct as v,q as x,st as y};
