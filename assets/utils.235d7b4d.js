import{gU as C,aH as z,aj as G,gV as E,br as V,d3 as O,bz as U,u as _}from"./index.7eb0daf2.js";import{j as A}from"./quantizationUtils.fe6b1e6e.js";import{l as D,u as L}from"./heatmapUtils.b763e953.js";import{Z as P}from"./utils.26a12d83.js";import{c as T,B as R}from"./utils.f2d50388.js";let c=null;const Y=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function Z(t,e,o){return t.x<0?t.x+=e:t.x>o&&(t.x-=e),t}function J(t,e,o,a){const r=C(o)?z(o):null,m=r?Math.round((r.valid[1]-r.valid[0])/e.scale[0]):null;return t.map(i=>{const s=new G(i.geometry);return A(e,s,s),i.geometry=r?Z(s,m??0,a[0]):s,i})}function K(t,e=18,o,a,r){const m=new Float64Array(a*r);e=Math.round(_(e));let i=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;const w=L(o);for(const{geometry:p,attributes:N}of t){const{x:b,y:u}=p,I=Math.max(0,b-e),M=Math.max(0,u-e),F=Math.min(r,u+e),$=Math.min(a,b+e),h=+w(N);for(let f=M;f<F;f++)for(let d=I;d<$;d++){const y=f*a+d,g=D(d-b,f-u,e)*h,l=m[y]+=g;i=Math.min(i,l),s=Math.max(s,l)}}return{min:i,max:s}}function B(t){const e=Y.exec(t);if(!e)return null;const{hh:o,mm:a,ss:r,ms:m}=e.groups;return Number(o)*E.hours+Number(a)*E.minutes+Number(r)*E.seconds+Number(m||0)}async function Q(t,e,o=!0){if(!e)return[];const{field:a,field2:r,field3:m,fieldDelimiter:i,fieldInfos:s,timeZone:w}=t,p=a&&s?.find(l=>l.name.toLowerCase()===a.toLowerCase()),N=!!p&&V(p),b=!!p&&P(p),u=t.valueExpression,I=t.normalizationType,M=t.normalizationField,F=t.normalizationTotal,$=[],h=t.viewInfoParams;let f=null,d=null;if(u){if(!c){const{arcadeUtils:l}=await O();c=l}c.hasGeometryOperations(u)&&await c.enableGeometryOperations(),f=c.createFunction(u),d=h?c.getViewInfo({viewingMode:h.viewingMode,scale:h.scale,spatialReference:new U(h.spatialReference)}):null}const y=t.fieldInfos,g=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&y?{fields:y}:null;return e.forEach(l=>{const x=l.attributes;let n;if(u){const v=g?{...l,layer:g}:l,j=c.createExecContext(v,d,w);n=c.executeFunction(f,j)}else x&&(n=x[a],r?(n=`${T(n)}${i}${T(x[r])}`,m&&(n=`${n}${i}${T(x[m])}`)):typeof n=="string"&&o&&(b?n=n?new Date(n).getTime():null:N&&(n=n?B(n):null)));if(I&&typeof n=="number"&&isFinite(n)){const v=x&&parseFloat(x[M]);n=R(n,I,v,F)}$.push(n)}),$}export{Q as b,J as j,B as w,K as x};
