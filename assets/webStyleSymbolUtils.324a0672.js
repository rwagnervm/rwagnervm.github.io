import{bS as W,ba as F,n as N,c as U,bW as D,bX as u,bY as $,bZ as M,hu as j,bU as O,bV as P,hv as v,hw as R,hx as g,hy as w,bT as V}from"./index.9560fde2.js";import{c as X,a as S}from"./devEnvironmentUtils.d8d0484c.js";function z(e,t,a,s){return e.name?e.styleName&&e.styleName==="Esri2DPointSymbolsStyle"?Z(e,t,s):W(e,t,s).then(r=>Y(F(r),e.name,t,a,s)):Promise.reject(new N("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function Y(e,t,a,s,r){var h,f,d;const y=e.data,m=a&&U(a.portal)?a.portal:D.getDefault(),c={portal:m,url:u(e.baseUrl),origin:"portal-item"},o=y.items.find(n=>n.name===t);if(!o){const n=`The symbol name '${t}' could not be found`;return Promise.reject(new N("symbolstyleutils:symbol-name-not-found",n,{symbolName:t}))}let i=$(M(o,s),c),b=(f=(h=o.thumbnail)==null?void 0:h.href)!=null?f:null;const p=o.thumbnail&&o.thumbnail.imageData;X()&&(i=(d=S(i))!=null?d:"",b=S(b));const x={portal:m,url:u(j(i)),origin:"portal-item"};return O(i,r).then(n=>{const E=s==="cimRef"?P(n.data):n.data,l=v(E,x);if(l&&R(l)){if(b){const T=$(b,c);l.thumbnail=new g({url:T})}else p&&(l.thumbnail=new g({url:`data:image/png;base64,${p}`}));e.styleUrl?l.styleOrigin=new w({portal:a.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(l.styleOrigin=new w({portal:a.portal,styleName:e.styleName,name:t}))}return l})}function Z(e,t,a){const s=V.replace(/\{SymbolName\}/gi,e.name),r=U(t.portal)?t.portal:D.getDefault();return O(s,a).then(y=>{const m=P(y.data);return v(m,{portal:r,url:u(j(s)),origin:"portal-item"})})}export{Y as fetchSymbolFromStyle,z as resolveWebStyleSymbol};