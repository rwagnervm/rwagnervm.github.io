import{eR as w,jd as _,je as z,iw as S,jf as x,jg as $,jh as k,ji as F,jj as A,jk as U,jl as B,i1 as E,eP as J,at as K,jm as T}from"./index.9560fde2.js";import{i as V}from"./multiOriginJSONSupportUtils.38b69b9c.js";function g(e){return y[D(e)]||L}function D(e){return e instanceof Blob?e.type:G(e.url)}function G(e){const t=w(e);return d[t]||I}const y={},I="text/plain",L=y[I],d={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const e in d)y[d[e]]=e;function ee(e){var o;const t=(o=e==null?void 0:e.origins)!=null?o:[void 0];return(i,n)=>{const s=X(e,i,n);for(const a of t){const r=_(i,a,n);for(const c in s)r[c]=s[c]}}}function X(e,t,o){var i;if((e==null?void 0:e.type)==="resource")return q(e,t,o);switch((i=e==null?void 0:e.type)!=null?i:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:s}=T;return{read:n,write:s}}}}function q(e,t,o){const i=z(t,o);return{type:String,read:(n,s,a)=>{const r=S(n,s,a);return i.type===String?r:typeof i.type=="function"?new i.type({url:r}):void 0},write:{writer(n,s,a,r){if(!r||!r.resources)return typeof n=="string"?void(s[a]=x(n,r)):void(s[a]=n.write({},r));const c=Q(n),p=x(c,{...r,verifyItemRelativeUrls:r&&r.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},$.NO),l=i.type!==String&&(!V(this)||r&&r.origin&&this.originIdOf(o)>k(r.origin)),u={object:this,propertyName:o,value:n,targetUrl:p,dest:s,targetPropertyName:a,context:r,params:e};r&&r.portalItem&&p&&!F(p)?l?C(u):H(u):r&&r.portalItem&&(p==null||A(p)!=null||U(p)||l)?P(u):s[a]=p}}}}function P(e){var v,h,j;const{targetUrl:t,params:o,value:i,context:n,dest:s,targetPropertyName:a}=e;if(!n.portalItem)return;const r=B(t),c=(v=r==null?void 0:r.filename)!=null?v:E(),p=(h=o==null?void 0:o.prefix)!=null?h:r==null?void 0:r.prefix,l=N(i,t,n),u=J(p,c),m=`${u}.${g(l)}`,f=n.portalItem.resourceFromPath(m);U(t)&&n.resources&&n.resources.pendingOperations.push(M(t).then(O=>{f.path=`${u}.${g(O)}`,s[a]=f.itemRelativeUrl}).catch(()=>{}));const R=(j=o==null?void 0:o.compress)!=null?j:!1;n.resources&&b({...e,resource:f,content:l,compress:R,updates:n.resources.toAdd}),s[a]=f.itemRelativeUrl}function C(e){var m;const{context:t,targetUrl:o,params:i,value:n,dest:s,targetPropertyName:a}=e;if(!t.portalItem)return;const r=t.portalItem.resourceFromPath(o),c=N(n,o,t),p=g(c),l=w(r.path),u=(m=i==null?void 0:i.compress)!=null?m:!1;p===l?(t.resources&&b({...e,resource:r,content:c,compress:u,updates:t.resources.toUpdate}),s[a]=o):P(e)}function H({context:e,targetUrl:t,dest:o,targetPropertyName:i}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(t),compress:!1}),o[i]=t)}function b({object:e,propertyName:t,updates:o,resource:i,content:n,compress:s}){o.push({resource:i,content:n,compress:s,finish:a=>{W(e,t,a)}})}function N(e,t,o){return typeof e=="string"?{url:t}:new Blob([JSON.stringify(e.toJSON(o))],{type:"application/json"})}async function M(e){const t=(await K(()=>import("./index.9560fde2.js").then(function(i){return i.kX}),["assets/index.9560fde2.js","assets/index.8182be3e.css"])).default,{data:o}=await t(e,{responseType:"blob"});return o}function Q(e){return e==null?null:typeof e=="string"?e:e.url}function W(e,t,o){typeof e[t]=="string"?e[t]=o.url:e[t].url=o.url}export{ee as g};