import{bz as a,hu as k,hv as u,hw as h,hx as m,hy as l,hz as r}from"./index.7eb0daf2.js";const C=new a(k),n=new a(u),e=new a(h),z=new a(m);function $(t){const p=c.get(t);if(p)return p;let s=C;if(t)if(t===n)s=n;else if(t===e)s=e;else{const o=t.wkid,w=t.latestWkid;if(o!=null||w!=null)l(o)||l(w)?s=n:(r(o)||r(w))&&(s=e);else{const f=t.wkt2??t.wkt;if(f){const i=f.toUpperCase();i===U?s=n:i===d&&(s=e)}}}return c.set(t,s),s}const c=new Map,U=n.wkt.toUpperCase(),d=e.wkt.toUpperCase();export{$ as a,z as w};
