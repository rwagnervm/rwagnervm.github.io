import{bz as d,aB as l,U as h,iF as C,iG as g}from"./index.7eb0daf2.js";import"./mat4f64.a89cc140.js";import"./spatialReferenceEllipsoidUtils.54dfd023.js";import"./sphere.701721ad.js";import{I as P}from"./I3SBinaryReader.79100f56.js";import{r as m}from"./vec4f64.7b667e97.js";import"./floatRGBA.133c49be.js";import"./NormalAttribute.glsl.519bff8e.js";import"./interfaces.98cd2ad6.js";import"./BindType.597c7f67.js";import"./VertexAttribute.53a8dea2.js";import{I as x}from"./orientedBoundingBox.ee8aaba9.js";function D(n,o,t,s){return{x:n,y:o,z:t,hasZ:t!=null,hasM:!1,spatialReference:s,type:"point"}}D(0,0,0,d.WGS84);var a;(function(n){n[n.INVISIBLE=0]="INVISIBLE",n[n.TRANSPARENT=1]="TRANSPARENT",n[n.OPAQUE=2]="OPAQUE"})(a||(a={}));var T;(function(n){n[n.Uniform=0]="Uniform",n[n.Varying=1]="Varying",n[n.COUNT=2]="COUNT"})(T||(T={}));var E,I;(function(n){n[n.Solid=0]="Solid",n[n.Sketch=1]="Sketch",n[n.Mixed=2]="Mixed",n[n.COUNT=3]="COUNT"})(E||(E={})),function(n){n[n.REGULAR=0]="REGULAR",n[n.SILHOUETTE=1]="SILHOUETTE"}(I||(I={}));function L(n){return{..._,...n,type:E.Solid}}const _={color:m(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:a.OPAQUE,hasSlicePlane:!1};m(0,0,0,.2),a.OPAQUE;l();var p;async function q(n,o,t,s,N,U,R,y){const c=[];for(const r of o)if(r&&N.includes(r.name)){const i=`${n}/nodes/${t}/attributes/${r.key}/0`;c.push({url:i,storageInfo:r})}const f=await Promise.allSettled(c.map(r=>h(r.url,{responseType:"array-buffer",query:{...R,token:U},signal:y?.signal}).then(i=>P(r.storageInfo,i.data)))),u=[];for(const r of s){const i={};for(let e=0;e<f.length;e++){const S=f[e];if(S.status==="fulfilled"){const O=S.value;i[c[e].storageInfo.name]=z(O,r)}}u.push(i)}return u}(function(n){n[n.OUTSIDE=0]="OUTSIDE",n[n.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",n[n.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",n[n.INSIDE=3]="INSIDE"})(p||(p={}));const A=-32768,v=-(2**31);function z(n,o){if(!n)return null;const t=n[o];return C(n)?t===A?null:t:g(n)?t===v?null:t:t!=t?null:t}L({color:[0,0,0,0],opacity:0});l();l();new x;new Array(72);export{q as $};