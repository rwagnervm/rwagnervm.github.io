import{fE as a,cg as c}from"./index.7eb0daf2.js";function t(n,o,s){if(n.hasM==null||n.hasZ)for(const f of o)for(const e of f)e.length>2&&(e[2]*=s)}function p(n,o,s){if(!n&&!o||!s)return;const f=a(s);r(n,s,f),r(o,s,f)}function r(n,o,s){if(n)for(const f of n)l(f.geometry,o,s)}function l(n,o,s){if(!n?.spatialReference||c(n.spatialReference,o))return;const f=a(n.spatialReference)/s;if(f!==1){if("x"in n)n.z!=null&&(n.z*=f);else if("rings"in n)t(n,n.rings,f);else if("paths"in n)t(n,n.paths,f);else if("points"in n&&(n.hasM==null||n.hasZ))for(const e of n.points)e.length>2&&(e[2]*=f)}}export{p as i};