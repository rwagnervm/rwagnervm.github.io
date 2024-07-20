import{i2 as d,i3 as h,bi as g,gZ as m,bh as p,i4 as y,cl as a,$ as w}from"./index.7eb0daf2.js";import{n as _}from"./date.9883f6ae.js";class b{constructor(){this.code=null,this.description=null}}class I{constructor(t){this.error=new b,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function c(n){return new I(n)}class q{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function A(n){return new q(n)}const l=new Set;function F(n,t,i,f=!1){l.clear();for(const e in i){const r=n.get(e);if(!r)continue;const o=P(r,i[e]);if(l.add(r.name),r&&(f||r.editable)){const u=d(r,o);if(u)return c(h(u,r,o));t[r.name]=o}}for(const e of n?.requiredFields??[])if(!l.has(e.name))return c(`missing required field "${e.name}"`);return null}function P(n,t){let i=t;return g(n)&&typeof t=="string"?i=parseFloat(t):m(n)&&t!=null&&typeof t!="string"?i=String(t):p(n)&&typeof t=="string"&&(i=_(t)),y(i)}let s;function G(n,t){if(!n||!a(t))return n;if("rings"in n||"paths"in n){if(s==null)throw new TypeError("geometry engine not loaded");return s.simplify(t,n)}return n}async function j(){return s==null&&(s=await w(()=>import("./geometryEngineJSON.01a4d20d.js"),["assets/geometryEngineJSON.01a4d20d.js","assets/geometryEngineBase.99ab4263.js","assets/index.7eb0daf2.js","assets/index.d3b4073e.css","assets/geometryEngineJSON.ca151196.js","assets/json.20588c22.js"])),s}async function S(n,t){!a(n)||t!=="esriGeometryPolygon"&&t!=="esriGeometryPolyline"||await j()}export{A as d,c as f,S as j,F as p,G as y};
