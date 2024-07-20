import{fd as p,n as i,c,U as d,hG as b,hH as w,ba as v,at as z,dU as g,hI as j}from"./index.9560fde2.js";let s=y();function y(){return new p(50)}function x(){s=y()}function P(e,r){if(e.type==="icon")return f(e,r);if(e.type==="object")return l(e,r);throw new i("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function O(e,r){if(e.type==="icon")return L(e,r);if(e.type==="object")return B(e,r);throw new i("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function f(e,r){var t,o;if((t=e.resource)!=null&&t.href)return _(e.resource.href).then(n=>[n.width,n.height]);if((o=e.resource)!=null&&o.primitive)return c(r)?[r,r]:[256,256];throw new i("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function L(e,r){return f(e,r).then(t=>{if(e.size==null)return t;const o=t[0]/t[1];return o>1?[e.size,e.size/o]:[e.size*o,e.size]})}function _(e){return d(e,{responseType:"image"}).then(r=>r.data)}function l(e,r){return I(e,r).then(t=>b(t))}async function B(e,r){const t=await l(e,r);return w(t,e)}async function I(e,r){var o;if(!e.isPrimitive){const n=v((o=e.resource)==null?void 0:o.href),u=s.get(n);if(u!==void 0)return u;const m=await z(()=>import("./objectResourceUtils.9bad1d3a.js").then(function(h){return h.o}),["assets/objectResourceUtils.9bad1d3a.js","assets/devEnvironmentUtils.d8d0484c.js","assets/index.9560fde2.js","assets/index.8182be3e.css","assets/mat3f64.6d32a1d7.js","assets/mat4f64.ff2a477c.js","assets/BufferView.3bfbdde5.js","assets/vec33.20700abe.js","assets/DefaultMaterial_COLOR_GAMMA.be614b1a.js","assets/types.44c7402c.js","assets/enums.2d9e6f64.js","assets/Version.9da9ef94.js","assets/quat.3445987b.js","assets/quatf64.4ae3e6f1.js","assets/requestImageUtils.91aed7c5.js","assets/OrderIndependentTransparency.4d1575c0.js","assets/Util.b805d21a.js","assets/sphere.04e2448b.js","assets/VertexAttribute.42396f25.js","assets/Texture.3e8fb115.js","assets/VertexArrayObject.8703dade.js","assets/VertexElementDescriptor.1fdca6da.js","assets/InterleavedLayout.b4e3de14.js","assets/vec3f32.1121a836.js","assets/symbolColorUtils.2df39073.js"]),a=await m.fetch(n,{disableTextures:!0});return s.put(n,a.referenceBoundingBox),a.referenceBoundingBox}let t=null;if(e.resource&&e.resource.primitive&&(t=g(j(e.resource.primitive)),c(r)))for(let n=0;n<t.length;n++)t[n]*=r;return t?Promise.resolve(t):Promise.reject(new i("symbol:invalid-resource","The symbol does not have a valid resource"))}export{x as clearBoundingBoxCache,f as computeIconLayerResourceSize,P as computeLayerResourceSize,O as computeLayerSize,l as computeObjectLayerResourceSize};