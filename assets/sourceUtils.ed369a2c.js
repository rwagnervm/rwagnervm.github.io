import{gB as p,gC as y,gA as w,fe as I,gD as b,bJ as h,j as g,at as _}from"./index.221827cd.js";class v{constructor(){this.code=null,this.description=null}}class q{constructor(t){this.error=new v,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function d(e){return new q(e)}class P{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function A(e){return new P(e)}const l=new Set;function D(e,t,i,m=!1,u){var c;l.clear();for(const r in i){const n=e.get(r);if(!n)continue;const a=i[r],s=j(n,a);if(s!==a&&u&&u.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:n,originalValue:a,sanitizedValue:s}}),l.add(n.name),n&&(m||n.editable)){const f=p(n,s);if(f)return d(y(f,n,s));t[n.name]=s}}for(const r of(c=e==null?void 0:e.requiredFields)!=null?c:[])if(!l.has(r.name))return d(`missing required field "${r.name}"`);return null}function j(e,t){let i=t;return typeof t=="string"&&w(e)?i=parseFloat(t):t!=null&&I(e)&&typeof t!="string"&&(i=String(t)),b(i)}let o;function F(e,t){if(!e||!h(t))return e;if("rings"in e||"paths"in e){if(g(o))throw new TypeError("geometry engine not loaded");return o.simplify(t,e)}return e}async function E(){return g(o)&&(o=await _(()=>import("./geometryEngineJSON.3d6e7890.js"),["assets/geometryEngineJSON.3d6e7890.js","assets/geometryEngineBase.82b25ca5.js","assets/geometryEngineJSON.f9e9a36f.js","assets/json.879c9adc.js"])),o}async function G(e,t){!h(e)||t!=="esriGeometryPolygon"&&t!=="esriGeometryPolyline"||await E()}export{d as a,A as f,F as g,D as m,G as w};
