import{s as t,U as d,$ as v,kp as u,gl as p,kq as y,K as c}from"./index.7eb0daf2.js";import{e as w}from"./LRUCache.6f8863ed.js";let n=l();function l(){return new w(50)}function T(){n=l()}async function x(e,r){if(e.resource?.href)return b(e.resource.href).then(i=>[i.width,i.height]);if(e.resource?.primitive)return r!=null?[r,r]:[256,256];throw new t("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function b(e){return d(e,{responseType:"image"}).then(r=>r.data)}async function B(e,r=null){if(!e.isPrimitive){const o=e.resource?.href;if(!o)throw new t("symbol:invalid-resource","The symbol does not have a valid resource");const s=n.get(o);if(s!==void 0)return s;const{fetch:f}=await v(()=>import("./objectResourceUtils.617a4820.js").then(function(m){return m.o}),["assets/objectResourceUtils.617a4820.js","assets/devEnvironmentUtils.307ef2af.js","assets/index.7eb0daf2.js","assets/index.d3b4073e.css","assets/mat3f64.4564d6a3.js","assets/mat4f64.a89cc140.js","assets/BufferView.80717d85.js","assets/vec42.faaf2b1c.js","assets/vec3.5fc4e8fc.js","assets/vec4.2d53fcda.js","assets/DefaultMaterial_COLOR_GAMMA.91f6dbac.js","assets/enums.8929356b.js","assets/Version.856e86b2.js","assets/quat.2c7c64ba.js","assets/quatf64.bcd5b590.js","assets/resourceUtils.e6aba6e1.js","assets/basicInterfaces.0f925dcd.js","assets/Indices.5bfd2621.js","assets/NestedMap.9ff460b9.js","assets/requestImageUtils.d1967f3c.js","assets/orientedBoundingBox.ee8aaba9.js","assets/vec4f64.7b667e97.js","assets/spatialReferenceEllipsoidUtils.54dfd023.js","assets/computeTranslationToOriginAndRotation.4860e3ef.js","assets/plane.23059d6d.js","assets/Util.00c6201e.js","assets/sphere.701721ad.js","assets/lineSegment.e18ce047.js","assets/VertexAttribute.53a8dea2.js","assets/Texture.7423fe29.js","assets/InterleavedLayout.1531e330.js","assets/types.d0a70996.js","assets/NormalAttribute.glsl.519bff8e.js","assets/interfaces.98cd2ad6.js","assets/BindType.597c7f67.js","assets/renderState.19e0eaae.js","assets/doublePrecisionUtils.4e9c06b3.js"]),h=await f(o,{disableTextures:!0}),a=u(h.referenceBoundingBox,c());return n.put(o,a),a}if(!e.resource?.primitive)throw new t("symbol:invalid-resource","The symbol does not have a valid resource");const i=p(y(e.resource.primitive));if(r!=null)for(let o=0;o<i.length;o++)i[o]*=r;return u(i,c())}export{T as clearBoundingBoxCache,x as computeIconLayerResourceSize,B as computeObjectLayerResourceSize};