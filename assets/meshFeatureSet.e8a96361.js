import{a6 as p,a7 as d,ix as mt,e0 as dt,d2 as yt,a8 as ee,cx as xe,jf as He,d$ as Te,b9 as Ke,c,s as $,cw as k,b4 as _,hE as xt,kS as N,M,cO as De,at as he,af as E,hu as wt,kT as vt,gQ as $t,c1 as bt,v as At,j as se,n as Me,fG as Ee,fO as et,fN as Ie,fV as tt,eb as fe,fE as Tt,O as nt,fD as ge,he as Mt,fM as Ft,kJ as rt,ad as ot,a4 as Rt,hT as Lt,d0 as Ct,cY as Ot,_ as _t,cU as Fe,az as Dt,aj as ve,d3 as Et,d1 as It}from"./index.33db000a.js";import{r as we,b as Pt,x as St,M as Pe,j as Se,a as je,O as Ne,h as ze,L as ke,_ as jt,c as ae,v as Re,g as Le,d as Nt,e as ue,f as me}from"./georeference.92599a11.js";import{r as zt}from"./imageUtils.753f41b1.js";import{x as kt}from"./earcut.afc1d357.js";import{n as Wt}from"./deduplicate.d52b1538.js";import{e as We}from"./mat3f64.6d32a1d7.js";import{e as st}from"./mat4f64.ff2a477c.js";var Z;const $e=new WeakMap;let Ut=0,D=Z=class extends xe{constructor(e){super(e),this.wrap="repeat"}get url(){return this._get("url")||null}set url(e){this._set("url",e),e&&this._set("data",null)}get data(){return this._get("data")||null}set data(e){this._set("data",e),e&&this._set("url",null)}writeData(e,t,n,r){if(e instanceof HTMLImageElement){const o={type:"image-element",src:He(e.src,r),crossOrigin:e.crossOrigin};t[n]=o}else if(e instanceof HTMLCanvasElement){const o=e.getContext("2d").getImageData(0,0,e.width,e.height),a={type:"canvas-element",imageData:this._encodeImageData(o)};t[n]=a}else if(e instanceof HTMLVideoElement){const o={type:"video-element",src:He(e.src,r),autoplay:e.autoplay,loop:e.loop,muted:e.muted,crossOrigin:e.crossOrigin,preload:e.preload};t[n]=o}else{const o={type:"image-data",imageData:this._encodeImageData(e)};t[n]=o}}readData(e){switch(e.type){case"image-element":{const t=new Image;return t.src=e.src,t.crossOrigin=e.crossOrigin,t}case"canvas-element":{const t=this._decodeImageData(e.imageData),n=document.createElement("canvas");return n.width=t.width,n.height=t.height,n.getContext("2d").putImageData(t,0,0),n}case"image-data":return this._decodeImageData(e.imageData);case"video-element":{const t=document.createElement("video");return t.src=e.src,t.crossOrigin=e.crossOrigin,t.autoplay=e.autoplay,t.loop=e.loop,t.muted=e.muted,t.preload=e.preload,t}default:return}}get transparent(){const e=this.data,t=this.url;if(e instanceof HTMLCanvasElement)return this._imageDataContainsTransparent(e.getContext("2d").getImageData(0,0,e.width,e.height));if(e instanceof ImageData)return this._imageDataContainsTransparent(e);if(t){const n=t.substr(t.length-4,4).toLowerCase(),r=t.substr(0,15).toLocaleLowerCase();if(n===".png"||r==="data:image/png;")return!0}return!1}set transparent(e){this._overrideIfSome("transparent",e)}get contentHash(){const e=typeof this.wrap=="string"?this.wrap:typeof this.wrap=="object"?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",t=(n="")=>`d:${n},t:${this.transparent},w:${e}`;return this.url!=null?t(this.url):this.data!=null?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?t(this.data.src):($e.has(this.data)||$e.set(this.data,++Ut),t($e.get(this.data))):t()}clone(){const e={url:this.url,data:this.data,wrap:this._cloneWrap()};return new Z(e)}cloneWithDeduplication(e){const t=e.get(this);if(t)return t;const n=this.clone();return e.set(this,n),n}_cloneWrap(){return typeof this.wrap=="string"?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}_encodeImageData(e){let t="";for(let n=0;n<e.data.length;n++)t+=String.fromCharCode(e.data[n]);return{data:btoa(t),width:e.width,height:e.height}}_decodeImageData(e){const t=atob(e.data),n=new Uint8ClampedArray(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return zt(n,e.width,e.height)}_imageDataContainsTransparent(e){for(let t=3;t<e.data.length;t+=4)if(e.data[t]!==255)return!0;return!1}static from(e){return typeof e=="string"?new Z({url:e}):e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData||e instanceof HTMLVideoElement?new Z({data:e}):Te(Z,e)}};p([d({type:String,json:{write:mt}})],D.prototype,"url",null),p([d({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),d()],D.prototype,"data",null),p([dt("data")],D.prototype,"writeData",null),p([yt("data")],D.prototype,"readData",null),p([d({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],D.prototype,"transparent",null),p([d({json:{write:!0}})],D.prototype,"wrap",void 0),p([d({readOnly:!0})],D.prototype,"contentHash",null),D=Z=p([ee("esri.geometry.support.MeshTexture")],D);const oe=D;var Ce;let C=Ce=class extends xe{constructor(e){super(e),this.color=null,this.colorTexture=null,this.normalTexture=null,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const n=c(e)?e.get(this):null;if(n)return n;const r=new Ce(this.clonePropertiesWithDeduplication(t));return c(e)&&e.set(this,r),r}clonePropertiesWithDeduplication(e){return{color:c(this.color)?this.color.clone():null,colorTexture:c(this.colorTexture)?this.colorTexture.cloneWithDeduplication(e):null,normalTexture:c(this.normalTexture)?this.normalTexture.cloneWithDeduplication(e):null,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:c(this.colorTextureTransform)?this.colorTextureTransform:null,normalTextureTransform:c(this.normalTextureTransform)?this.normalTextureTransform:null}}};p([d({type:Ke,json:{write:!0}})],C.prototype,"color",void 0),p([d({type:oe,json:{write:!0}})],C.prototype,"colorTexture",void 0),p([d({type:oe,json:{write:!0}})],C.prototype,"normalTexture",void 0),p([d({nonNullable:!0,json:{write:!0}})],C.prototype,"alphaMode",void 0),p([d({nonNullable:!0,json:{write:!0}})],C.prototype,"alphaCutoff",void 0),p([d({nonNullable:!0,json:{write:!0}})],C.prototype,"doubleSided",void 0),p([d()],C.prototype,"colorTextureTransform",void 0),p([d()],C.prototype,"normalTextureTransform",void 0),C=Ce=p([ee("esri.geometry.support.MeshMaterial")],C);const Ue=C;var Oe;let L=Oe=class extends Ue{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.occlusionTexture=null,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const n=c(e)?e.get(this):null;if(n)return n;const r=new Oe(this.clonePropertiesWithDeduplication(t));return c(e)&&e.set(this,r),r}clonePropertiesWithDeduplication(e){return{...super.clonePropertiesWithDeduplication(e),emissiveColor:c(this.emissiveColor)?this.emissiveColor.clone():null,emissiveTexture:c(this.emissiveTexture)?this.emissiveTexture.cloneWithDeduplication(e):null,occlusionTexture:c(this.occlusionTexture)?this.occlusionTexture.cloneWithDeduplication(e):null,metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:c(this.metallicRoughnessTexture)?this.metallicRoughnessTexture.cloneWithDeduplication(e):null,occlusionTextureTransform:c(this.occlusionTextureTransform)?this.occlusionTextureTransform:null,emissiveTextureTransform:c(this.emissiveTextureTransform)?this.emissiveTextureTransform:null,metallicRoughnessTextureTransform:c(this.metallicRoughnessTextureTransform)?this.metallicRoughnessTextureTransform:null}}};p([d({type:Ke,json:{write:!0}})],L.prototype,"emissiveColor",void 0),p([d({type:oe,json:{write:!0}})],L.prototype,"emissiveTexture",void 0),p([d({type:oe,json:{write:!0}})],L.prototype,"occlusionTexture",void 0),p([d({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],L.prototype,"metallic",void 0),p([d({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],L.prototype,"roughness",void 0),p([d({type:oe,json:{write:!0}})],L.prototype,"metallicRoughnessTexture",void 0),p([d()],L.prototype,"occlusionTextureTransform",void 0),p([d()],L.prototype,"emissiveTextureTransform",void 0),p([d()],L.prototype,"metallicRoughnessTextureTransform",void 0),L=Oe=p([ee("esri.geometry.support.MeshMaterialMetallicRoughness")],L);const Ht=L;var pe;const at="esri.geometry.support.MeshVertexAttributes",U=$.getLogger(at);let T=pe=class extends xe{constructor(e){super(e),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(e){return Y(e,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},U)}castPosition(e){return e&&e instanceof Float32Array&&U.warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"),Y(e,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},U)}castUv(e){return Y(e,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},U)}castNormal(e){return Y(e,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},U)}castTangent(e){return Y(e,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},U)}clone(){const e={position:_(this.position),uv:_(this.uv),normal:_(this.normal),tangent:_(this.tangent),color:_(this.color)};return new pe(e)}clonePositional(){const e={position:_(this.position),normal:_(this.normal),tangent:_(this.tangent),uv:this.uv,color:this.color};return new pe(e)}};function be(e,t,n,r){const{loggerTag:o,stride:a}=t;return e.length%a!=0?(r.error(o,`Invalid array length, expected a multiple of ${a}`),new n([])):e}function Y(e,t,n,r,o){if(!e)return e;if(e instanceof t)return be(e,r,t,o);for(const a of n)if(e instanceof a)return be(new t(e),r,t,o);if(Array.isArray(e))return be(new t(e),r,t,o);{const a=n.map(s=>`'${s.name}'`);return o.error(`Failed to set property, expected one of ${a}, but got ${e.constructor.name}`),new t([])}}function te(e,t,n){t[n]=Bt(e)}function Bt(e){const t=new Array(e.length);for(let n=0;n<e.length;n++)t[n]=e[n];return t}p([d({json:{write:te}})],T.prototype,"color",void 0),p([k("color")],T.prototype,"castColor",null),p([d({nonNullable:!0,json:{write:te}})],T.prototype,"position",void 0),p([k("position")],T.prototype,"castPosition",null),p([d({json:{write:te}})],T.prototype,"uv",void 0),p([k("uv")],T.prototype,"castUv",null),p([d({json:{write:te}})],T.prototype,"normal",void 0),p([k("normal")],T.prototype,"castNormal",null),p([d({json:{write:te}})],T.prototype,"tangent",void 0),p([k("tangent")],T.prototype,"castTangent",null),T=pe=p([ee(at)],T);var re;const it="esri.geometry.support.MeshComponent",Gt=$.getLogger(it);let I=re=class extends xe{constructor(e){super(e),this.faces=null,this.material=null,this.shading="source",this.trustSourceNormals=!1}static from(e){return Te(re,e)}castFaces(e){return Y(e,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},Gt)}castMaterial(e){return Te(e&&typeof e=="object"&&("metallic"in e||"roughness"in e||"metallicRoughnessTexture"in e)?Ht:Ue,e)}clone(){return new re({faces:_(this.faces),shading:this.shading,material:_(this.material),trustSourceNormals:this.trustSourceNormals})}cloneWithDeduplication(e,t){const n={faces:_(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(e,t):null,trustSourceNormals:this.trustSourceNormals};return new re(n)}};p([d({json:{write:!0}})],I.prototype,"faces",void 0),p([k("faces")],I.prototype,"castFaces",null),p([d({type:Ue,json:{write:!0}})],I.prototype,"material",void 0),p([k("material")],I.prototype,"castMaterial",null),p([d({type:String,json:{write:!0}})],I.prototype,"shading",void 0),p([d({type:Boolean})],I.prototype,"trustSourceNormals",void 0),I=re=p([ee(it)],I);const q=I;function Vt(e){const t=Yt(e.rings,e.hasZ,de.CCW_IS_HOLE),n=new Array;let r=0,o=0;for(const i of t.polygons){const l=i.count,u=i.index,h=new Float64Array(t.position.buffer,3*u*t.position.BYTES_PER_ELEMENT,3*l),m=i.holeIndices.map(g=>g-u),f=new Uint32Array(kt(h,m,3));n.push({position:h,faces:f}),r+=h.length,o+=f.length}const a=Zt(n,r,o),s=Wt(a.position.buffer,6,{originalIndices:a.faces});return a.position=new Float64Array(s.buffer),a.faces=s.indices,a}function Zt(e,t,n){if(e.length===1)return e[0];const r=new Float64Array(t),o=new Uint32Array(n);let a=0,s=0,i=0;for(const l of e){for(let u=0;u<l.position.length;u++)r[a++]=l.position[u];for(let u=0;u<l.faces.length;u++)o[s++]=l.faces[u]+i;i=a/3}return{position:r,faces:o}}function Yt(e,t,n){const r=e.length,o=new Array(r),a=new Array(r),s=new Array(r);let i=0,l=0,u=0,h=0;for(let g=0;g<r;++g)h+=e[g].length;const m=new Float64Array(3*h);let f=0;for(let g=r-1;g>=0;g--){const y=e[g],R=n===de.CCW_IS_HOLE&&Jt(y);if(R&&r!==1)o[i++]=y;else{let v=y.length;for(let x=0;x<i;++x)v+=o[x].length;const b={index:f,pathLengths:new Array(i+1),count:v,holeIndices:new Array(i)};b.pathLengths[0]=y.length,y.length>0&&(s[u++]={index:f,count:y.length}),f=R?ie(y,y.length-1,-1,m,f,y.length,t):ie(y,0,1,m,f,y.length,t);for(let x=0;x<i;++x){const A=o[x];b.holeIndices[x]=f,b.pathLengths[x+1]=A.length,A.length>0&&(s[u++]={index:f,count:A.length}),f=ie(A,0,1,m,f,A.length,t)}i=0,b.count>0&&(a[l++]=b)}}for(let g=0;g<i;++g){const y=o[g];y.length>0&&(s[u++]={index:f,count:y.length}),f=ie(y,0,1,m,f,y.length,t)}return a.length=l,s.length=u,{position:m,polygons:a,outlines:s}}function ie(e,t,n,r,o,a,s){o*=3;for(let i=0;i<a;++i){const l=e[t];r[o++]=l[0],r[o++]=l[1],r[o++]=s?l[2]:0,t+=n}return o/3}function Jt(e){return!xt(e,!1,!1)}var de;(function(e){e[e.NONE=0]="NONE",e[e.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(de||(de={}));const _e=$.getLogger("esri.geometry.support.meshUtils.centerAt");function Xt(e,t,n){var o;if(!e.vertexAttributes||!e.vertexAttributes.position)return;const r=(o=n==null?void 0:n.origin)!=null?o:e.origin;c(e.transform)?((n==null?void 0:n.geographic)!=null&&n.geographic!==e.transform.geographic&&_e.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`),Qt(e.transform,t,r)):we(e.spatialReference,n)?qt(e,t,r):Kt(e,t,r)}function Qt(e,t,n){const r=t.x-n.x,o=t.y-n.y,a=t.hasZ&&n.hasZ?t.z-n.z:0,s=e.origin;e.origin=[s[0]+r,s[1]+o,s[2]+a]}function qt(e,t,n){const r=Pt(e.vertexAttributes,n,{geographic:!0}),{position:o,normal:a,tangent:s}=St(r,t,{geographic:!0});e.vertexAttributes.position=o,e.vertexAttributes.normal=a,e.vertexAttributes.tangent=s,e.vertexAttributesChanged()}function Kt(e,t,n){const r=nn,o=tn;if(N(t,o,e.spatialReference)){if(!N(n,r,e.spatialReference)){const a=e.origin;r[0]=a.x,r[1]=a.y,r[2]=a.z,_e.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}en(e.vertexAttributes.position,o,r),e.vertexAttributesChanged()}else _e.error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid})`)}function en(e,t,n){if(e)for(let r=0;r<e.length;r+=3)for(let o=0;o<3;o++)e[r+o]+=t[o]-n[o]}const tn=M(),nn=M();async function rn(e,t,n){const{loadGLTFMesh:r}=await De(he(()=>import("./loadGLTFMesh.dcb3c05c.js"),["assets/loadGLTFMesh.dcb3c05c.js","assets/index.33db000a.js","assets/index.f5419ca5.css","assets/mat3f64.6d32a1d7.js","assets/BufferView.81fd3640.js","assets/vec33.e8596f0c.js","assets/DefaultMaterial_COLOR_GAMMA.7081fdd9.js","assets/types.44c7402c.js","assets/mat4f64.ff2a477c.js","assets/enums.2d9e6f64.js","assets/Version.5fa3bdb2.js","assets/quat.b43a126a.js","assets/quatf64.4ae3e6f1.js","assets/georeference.92599a11.js","assets/imageUtils.753f41b1.js","assets/earcut.afc1d357.js","assets/deduplicate.d52b1538.js"]),n),o=await lt(t,n),a=r(new E({x:0,y:0,z:0,spatialReference:e.spatialReference}),o.url,{resolveFile:on(o),useTransform:!0,signal:c(n)?n.signal:null});a.then(()=>o.dispose(),()=>o.dispose());const{vertexAttributes:s,components:i}=await a;e.vertexAttributes=s,e.components=i}function on(e){const t=wt(e.url);return n=>{var a;const r=vt(n,t,t),o=r?r.replace(/^ *\.\//,""):null;return(a=o?e.files.get(o):null)!=null?a:n}}async function lt(e,t){return e instanceof Blob?K.fromBlob(e):typeof e=="string"?new K(e):Array.isArray(e)?sn(e,t):an(e,t)}async function sn(e,t){const n=new Map;let r=null;const o=await $t(e.map(async s=>({name:s.name,source:await lt(s instanceof Blob?s:s.source,t)}))),a=[];for(const s of o)s&&(bt(t)?s.source.dispose():a.push(s));At(t);for(const{name:s,source:i}of a)(se(r)||/\.(gltf|glb)/i.test(s))&&(r=i.url),n.set(s,i.url),i.files&&i.files.forEach((l,u)=>n.set(u,l));if(se(r))throw new Me("mesh-load-external:missing-files","Missing files to load external mesh source");return new K(r,()=>a.forEach(({source:s})=>s.dispose()),n)}async function an(e,t){const{default:n}=await De(he(()=>import("./index.33db000a.js").then(function(o){return o.kX}),["assets/index.33db000a.js","assets/index.f5419ca5.css"]),t),r=typeof e.multipart[0]=="string"?await Promise.all(e.multipart.map(async o=>(await n(o,{responseType:"array-buffer"})).data)):e.multipart;return K.fromBlob(new Blob(r))}class K{constructor(t,n=()=>{},r=new Map){this.url=t,this.dispose=n,this.files=r}static fromBlob(t){const n=URL.createObjectURL(t);return new K(n,()=>URL.revokeObjectURL(n))}}function ln(e,t,n){e.vertexAttributes&&e.vertexAttributes.position&&(c(e.transform)?((n==null?void 0:n.geographic)!=null&&n.geographic!==e.transform.geographic&&$.getLogger("esri.geometry.support.meshUtils.offset").warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`),cn(e.transform,t)):we(e.spatialReference,n)?un(e,t):pn(e,t))}function cn(e,t){const n=e.origin;e.origin=Ee(M(),n,t)}function un(e,t){const n=e.spatialReference,r=e.vertexAttributes.position,o=e.vertexAttributes.normal,a=e.vertexAttributes.tangent,s=new Float64Array(r.length),i=c(o)?new Float32Array(o.length):null,l=c(a)?new Float32Array(a.length):null,u=e.extent.center,h=hn;et(n,[u.x,u.y,u.z],Be,Ie(n)),tt(Ge,Be),fe(h,t,Ge),Pe(r,n,s),c(o)&&c(i)&&Se(o,r,s,n,i),c(a)&&c(l)&&je(a,r,s,n,l),ct(s,h),Ne(s,r,n),c(o)&&c(i)&&ze(i,r,s,n,o),c(a)&&c(l)&&ke(l,r,s,n,a),e.vertexAttributesChanged()}function pn(e,t){ct(e.vertexAttributes.position,t),e.vertexAttributesChanged()}function ct(e,t){if(e)for(let n=0;n<e.length;n+=3)for(let r=0;r<3;r++)e[n+r]+=t[r]}const hn=M(),Be=st(),Ge=We();function fn(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:n}=$n,r=4*e.length,o=new Float64Array(3*r),a=new Float32Array(3*r),s=new Float32Array(2*r),i=new Uint32Array(2*e.length*3);let l=0,u=0,h=0,m=0;for(let f=0;f<e.length;f++){const g=e[f],y=l/3;for(const v of t)i[m++]=y+v;const R=g.corners;for(let v=0;v<4;v++){const b=R[v];let x=0;s[h++]=.25*n[v][0]+g.uvOrigin[0],s[h++]=g.uvOrigin[1]-.25*n[v][1];for(let A=0;A<3;A++)g.axis[A]!==0?(o[l++]=.5*g.axis[A],a[u++]=g.axis[A]):(o[l++]=.5*b[x++],a[u++]=0)}}return{position:o,normal:a,uv:s,faces:i}}function gn(e,t){const n=e.components[0],r=n.faces,o=bn[t],a=6*o,s=new Array(6),i=new Array(r.length-6);let l=0,u=0;for(let h=0;h<r.length;h++)h>=a&&h<a+6?s[l++]=r[h]:i[u++]=r[h];if(c(e.vertexAttributes.uv)){const h=new Float32Array(e.vertexAttributes.uv),m=4*o*2,f=[0,1,1,1,1,0,0,0];for(let g=0;g<f.length;g++)h[m+g]=f[g];e.vertexAttributes.uv=h}return e.components=[new q({faces:s,material:n.material}),new q({faces:i})],e}function mn(e=0){const t=Math.round(8*2**e),n=2*t,r=(t-1)*(n+1)+2*n,o=new Float64Array(3*r),a=new Float32Array(3*r),s=new Float32Array(2*r),i=new Uint32Array(3*((t-1)*n*2));let l=0,u=0,h=0,m=0;for(let f=0;f<=t;f++){const g=f/t*Math.PI+.5*Math.PI,y=Math.cos(g),R=Math.sin(g);w[2]=R;const v=f===0||f===t,b=v?n-1:n;for(let x=0;x<=b;x++){const A=x/b*2*Math.PI;w[0]=-Math.sin(A)*y,w[1]=Math.cos(A)*y;for(let P=0;P<3;P++)o[l]=.5*w[P],a[l]=w[P],++l;s[u++]=(x+(v?.5:0))/n,s[u++]=f/t,f!==0&&x!==n&&(f!==t&&(i[h++]=m,i[h++]=m+1,i[h++]=m-n),f!==1&&(i[h++]=m,i[h++]=m-n,i[h++]=m-n-1)),m++}}return{position:o,normal:a,uv:s,faces:i}}function dn(e=0){const n=Math.round(16*2**e),r=(5-1)*(n+1)+2*n,o=new Float64Array(3*r),a=new Float32Array(3*r),s=new Float32Array(2*r),i=new Uint32Array(3*(4*n));let l=0,u=0,h=0,m=0,f=0;for(let g=0;g<=5;g++){const y=g===0||g===5,R=g<=1||g>=5-1,v=g===2||g===4,b=y?n-1:n;for(let x=0;x<=b;x++){const A=x/b*2*Math.PI,P=y?0:.5;w[0]=P*Math.sin(A),w[1]=P*-Math.cos(A),w[2]=g<=2?.5:-.5;for(let W=0;W<3;W++)o[l++]=w[W],a[u++]=R?W===2?g<=1?1:-1:0:W===2?0:w[W]/P;s[h++]=(x+(y?.5:0))/n,s[h++]=g<=1?1*g/3:g<=3?1*(g-2)/3+1/3:1*(g-4)/3+2/3,v||g===0||x===n||(g!==5&&(i[m++]=f,i[m++]=f+1,i[m++]=f-n),g!==1&&(i[m++]=f,i[m++]=f-n,i[m++]=f-n-1)),f++}}return{position:o,normal:a,uv:s,faces:i}}function yn(e,t){const n=typeof t=="number"?t:t!=null?t.width:1,r=typeof t=="number"?t:t!=null?t.height:1;switch(e){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function xn(e){const t=ne.facingAxisOrderSwap[e],n=ne.position,r=ne.normal,o=new Float64Array(n.length),a=new Float32Array(r.length);let s=0;for(let i=0;i<4;i++){const l=s;for(let u=0;u<3;u++){const h=t[u],m=Math.abs(h)-1,f=h>=0?1:-1;o[s]=n[l+m]*f,a[s]=r[l+m]*f,s++}}return{position:o,normal:a,uv:new Float32Array(ne.uv),faces:new Uint32Array(ne.faces),isPlane:!0}}const H=1,B=2,G=3,ne={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[G,H,B],west:[-G,-H,B],north:[-H,G,B],south:[H,-G,B],up:[H,B,G],down:[H,-B,-G]}};function le(e,t,n){e.isPlane||wn(e),vn(e,n==null?void 0:n.size);const{vertexAttributes:r,transform:o}=jt(e,t,n);return{vertexAttributes:new T({...r,uv:e.uv}),transform:o,components:[new q({faces:e.faces,material:n&&n.material||null})],spatialReference:t.spatialReference}}function wn(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}function vn(e,t){if(t==null)return;const n=typeof t=="number"?[t,t,t]:[t.width!=null?t.width:1,t.depth!=null?t.depth:1,t.height!=null?t.height:1];S[0]=n[0],S[4]=n[1],S[8]=n[2];for(let r=0;r<e.position.length;r+=3){for(let o=0;o<3;o++)w[o]=e.position[r+o];fe(w,w,S);for(let o=0;o<3;o++)e.position[r+o]=w[o]}if(n[0]!==n[1]||n[1]!==n[2]){S[0]=1/n[0],S[4]=1/n[1],S[8]=1/n[2];for(let r=0;r<e.normal.length;r+=3){for(let o=0;o<3;o++)w[o]=e.normal[r+o];fe(w,w,S),Tt(w,w);for(let o=0;o<3;o++)e.normal[r+o]=w[o]}}}const $n={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},bn={south:0,east:1,north:2,west:3,up:4,down:5},w=M(),S=We(),ut=$.getLogger("esri.geometry.support.meshUtils.rotate");function An(e,t,n){var o,a;if(!e.vertexAttributes||!e.vertexAttributes.position||t[3]===0)return;const r=e.spatialReference;if(c(e.transform)){(n==null?void 0:n.geographic)!=null&&n.geographic!==e.transform.geographic&&ut.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`);const s=(o=n==null?void 0:n.origin)!=null?o:e.transform.getOriginPoint(r);Tn(e.transform,t,s)}else{const s=(a=n==null?void 0:n.origin)!=null?a:e.origin;we(e.spatialReference,n)?Mn(e,t,s):Fn(e,t,s)}}function Tn(e,t,n){const r=nt(J,n.x,n.y,n.z),o=ge(J,r,e.origin);e.applyLocalInverse(o,Ve),e.rotation=Re(e.rotation,t,ae()),e.applyLocalInverse(o,o),ge(o,o,Ve),e.translation=Ee(M(),e.translation,o)}function Mn(e,t,n){const r=e.spatialReference,o=Ie(r),a=pt;N(n,a,o)||N(e.origin,a,o);const s=e.vertexAttributes.position,i=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,u=new Float64Array(s.length),h=c(i)?new Float32Array(i.length):null,m=c(l)?new Float32Array(l.length):null;et(o,a,ye,o),tt(Ye,ye);const f=Ze;fe(Le(Ze),Le(t),Ye),f[3]=t[3],Pe(s,r,u),c(i)&&c(h)&&Se(i,s,u,r,h),c(l)&&c(m)&&je(l,s,u,r,m),Q(u,f,3,a),Ne(u,s,r),c(i)&&c(h)&&(Q(h,f,3),ze(h,s,u,r,i)),c(l)&&c(m)&&(Q(m,f,4),ke(m,s,u,r,l)),e.vertexAttributesChanged()}function Fn(e,t,n){const r=pt;if(!N(n,r,e.spatialReference)){const o=e.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,ut.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}Q(e.vertexAttributes.position,t,3,r),Q(e.vertexAttributes.normal,t,3),Q(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}function Q(e,t,n,r=rt){if(!se(e)){Mt(ye,Nt(t),Le(t));for(let o=0;o<e.length;o+=n){for(let a=0;a<3;a++)J[a]=e[o+a]-r[a];Ft(J,J,ye);for(let a=0;a<3;a++)e[o+a]=J[a]+r[a]}}}const J=M(),Ve=M(),Ze=ae(),ye=st(),Ye=We(),pt=M(),ht=$.getLogger("esri.geometry.support.meshUtils.scale");function Rn(e,t,n){var o;if(!e.vertexAttributes||!e.vertexAttributes.position)return;const r=e.spatialReference;if(c(e.transform)){(n==null?void 0:n.geographic)!=null&&n.geographic!==e.transform.geographic&&ht.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`);const a=(o=n==null?void 0:n.origin)!=null?o:e.transform.getOriginPoint(r);Ln(e.transform,t,a)}else{const a=we(e.spatialReference,n),s=n&&n.origin||e.origin;a?Cn(e,t,s):On(e,t,s)}}function Ln(e,t,n){const r=nt(X,n.x,n.y,n.z),o=ge(X,r,e.origin);e.applyLocalInverse(o,Je);const a=ot(M(),e.scale,t);e.scale=a,e.applyLocalInverse(o,o),ge(o,o,Je),e.translation=Ee(M(),e.translation,o)}function Cn(e,t,n){const r=e.spatialReference,o=Ie(r),a=gt;N(n,a,o)||N(e.origin,a,o);const s=e.vertexAttributes.position,i=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,u=new Float64Array(s.length),h=c(i)?new Float32Array(i.length):null,m=c(l)?new Float32Array(l.length):null;Pe(s,r,u),c(i)&&c(h)&&Se(i,s,u,r,h),c(l)&&c(m)&&je(l,s,u,r,m),ft(u,t,a),Ne(u,s,r),c(i)&&c(h)&&ze(h,s,u,r,i),c(l)&&c(m)&&ke(m,s,u,r,l),e.vertexAttributesChanged()}function On(e,t,n){const r=gt;if(!N(n,r,e.spatialReference)){const o=e.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,ht.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}ft(e.vertexAttributes.position,t,r),e.vertexAttributesChanged()}function ft(e,t,n=rt){if(e)for(let r=0;r<e.length;r+=3){for(let o=0;o<3;o++)X[o]=e[r+o]-n[o];ot(X,X,t);for(let o=0;o<3;o++)e[r+o]=X[o]+n[o]}}const X=M(),Je=M(),gt=M();var O;const z="esri.geometry.Mesh";let F=O=class extends Rt(Lt.LoadableMixin(Ct(Ot))){constructor(e){super(e),this.components=null,this.transform=null,this.external=null,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new T,this.type="mesh"}initialize(){(se(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.handles.add(_t(()=>{var e;return{vertexAttributes:this.vertexAttributes,components:(e=this.components)==null?void 0:e.map(t=>t.clone())}},()=>this._set("external",null),{once:!0,sync:!0}))})}get hasExtent(){return!this.loaded&&c(this.external)&&c(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}get _boundingInfo(){const e=this.vertexAttributes.position,t=this.spatialReference;if(e.length===0||this.components&&this.components.length===0)return{extent:new Fe({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t}),center:new E({x:0,y:0,z:0,spatialReference:t})};const n=c(this.transform)?this.transform.project(e,t):e;let r=1/0,o=1/0,a=1/0,s=-1/0,i=-1/0,l=-1/0,u=0,h=0,m=0;const f=n.length,g=1/(f/3);let y=0;for(;y<f;){const R=n[y++],v=n[y++],b=n[y++];r=Math.min(r,R),o=Math.min(o,v),a=Math.min(a,b),s=Math.max(s,R),i=Math.max(i,v),l=Math.max(l,b),u+=g*R,h+=g*v,m+=g*b}return{extent:new Fe({xmin:r,ymin:o,zmin:a,xmax:s,ymax:i,zmax:l,spatialReference:t}),center:new E({x:u,y:h,z:m,spatialReference:t})}}get anchor(){if(c(this.transform))return this.transform.getOriginPoint(this.spatialReference);const e=this._boundingInfo;return new E({x:e.center.x,y:e.center.y,z:e.extent.zmin,spatialReference:this.spatialReference})}get origin(){return c(this.transform)?this.transform.getOriginPoint(this.spatialReference):this._boundingInfo.center}get extent(){return!this.loaded&&c(this.external)&&c(this.external.extent)?this.external.extent.clone():this._boundingInfo.extent}addComponent(e){this.loaded?(this.components||(this.components=[]),this.components.push(q.from(e)),this.notifyChange("components")):$.getLogger(this.declaredClass).error("addComponent()","Mesh must be loaded before applying operations")}removeComponent(e){if(this.loaded){if(this.components){const t=this.components.indexOf(e);if(t!==-1)return this.components.splice(t,1),void this.notifyChange("components")}$.getLogger(this.declaredClass).error("removeComponent()","Provided component is not part of the list of components")}else $.getLogger(this.declaredClass).error("removeComponent()","Mesh must be loaded before applying operations")}rotate(e,t,n,r){return ue(Ae.x,e,V),ue(Ae.y,t,Xe),ue(Ae.z,n,Qe),Re(V,Xe,V),Re(V,Qe,V),An(this,V,r),this}offset(e,t,n,r){return this.loaded?(ce[0]=e,ce[1]=t,ce[2]=n,ln(this,ce,r),this):($.getLogger(this.declaredClass).error("offset()","Mesh must be loaded before applying operations"),this)}scale(e,t){return this.loaded?(Rn(this,e,t),this):($.getLogger(this.declaredClass).error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(e,t){return this.loaded?(Xt(this,e,t),this):($.getLogger(this.declaredClass).error("centerAt()","Mesh must be loaded before applying operations"),this)}load(e){return c(this.external)&&this.addResolvingPromise(rn(this,this.external.source,e)),Promise.resolve(this)}updateExternalSource(e){this._set("external",e)}clone(){let e=null;if(this.components){const n=new Map,r=new Map;e=this.components.map(o=>o.cloneWithDeduplication(n,r))}const t={components:e,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:c(this.transform)?this.transform.clone():null,external:c(this.external)?{source:this.external.source,extent:c(this.external.extent)?this.external.extent.clone():null}:null};return new O(t)}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const t=he(()=>import("./gltfexport.88b767f5.js"),["assets/gltfexport.88b767f5.js","assets/index.33db000a.js","assets/index.f5419ca5.css","assets/quat.b43a126a.js","assets/mat3f64.6d32a1d7.js","assets/quatf64.4ae3e6f1.js","assets/georeference.92599a11.js","assets/mat4f64.ff2a477c.js","assets/BufferView.81fd3640.js","assets/vec33.e8596f0c.js","assets/enums.2d9e6f64.js","assets/imageutils.edd507e9.js","assets/imageUtils.753f41b1.js","assets/earcut.afc1d357.js","assets/deduplicate.d52b1538.js"]),n=this.load(),r=await Promise.all([t,n]),{toBinaryGLTF:o}=r[0];return o(this,e)}static createBox(e,t){if(!(e instanceof E))return $.getLogger(z).error(".createBox()","expected location to be a Point instance"),null;const n=new O(le(fn(),e,t));return t&&t.imageFace&&t.imageFace!=="all"?gn(n,t.imageFace):n}static createSphere(e,t){return e instanceof E?new O(le(mn(t&&t.densificationFactor||0),e,t)):($.getLogger(z).error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(e,t){return e instanceof E?new O(le(dn(t&&t.densificationFactor||0),e,t)):($.getLogger(z).error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(e,t){var o;if(!(e instanceof E))return $.getLogger(z).error(".createPlane()","expected location to be a Point instance"),null;const n=(o=t==null?void 0:t.facing)!=null?o:"up",r=yn(n,t==null?void 0:t.size);return new O(le(xn(n),e,{...t,size:r}))}static createFromPolygon(e,t){var r;if(!(e instanceof Dt))return $.getLogger(z).error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const n=Vt(e);return new O({vertexAttributes:new T({position:n.position}),components:[new q({faces:n.faces,shading:"flat",material:(r=t==null?void 0:t.material)!=null?r:null})],spatialReference:e.spatialReference})}static async createFromGLTF(e,t,n){if(!(e instanceof E))throw $.getLogger(z).error(".createfromGLTF()","expected location to be a Point instance"),new Me("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:r}=await De(he(()=>import("./loadGLTFMesh.dcb3c05c.js"),["assets/loadGLTFMesh.dcb3c05c.js","assets/index.33db000a.js","assets/index.f5419ca5.css","assets/mat3f64.6d32a1d7.js","assets/BufferView.81fd3640.js","assets/vec33.e8596f0c.js","assets/DefaultMaterial_COLOR_GAMMA.7081fdd9.js","assets/types.44c7402c.js","assets/mat4f64.ff2a477c.js","assets/enums.2d9e6f64.js","assets/Version.5fa3bdb2.js","assets/quat.b43a126a.js","assets/quatf64.4ae3e6f1.js","assets/georeference.92599a11.js","assets/imageUtils.753f41b1.js","assets/earcut.afc1d357.js","assets/deduplicate.d52b1538.js"]),n);return new O(await r(e,t,n))}static createWithExternalSource(e,t,n){var s,i,l,u;const r=(s=n==null?void 0:n.extent)!=null?s:null,o=(l=(i=n==null?void 0:n.transform)==null?void 0:i.clone())!=null?l:new me;o.origin=[e.x,e.y,(u=e.z)!=null?u:0];const a=e.spatialReference;return new O({external:{source:t,extent:r},transform:o,spatialReference:a})}static createIncomplete(e,t){var a,s,i;const n=(s=(a=t==null?void 0:t.transform)==null?void 0:a.clone())!=null?s:new me;n.origin=[e.x,e.y,(i=e.z)!=null?i:0];const r=e.spatialReference,o=new O({transform:n,spatialReference:r});return o.addResolvingPromise(Promise.reject(new Me("mesh-incomplete","Mesh resources are not complete"))),o}};p([d({type:[q],json:{write:!0}})],F.prototype,"components",void 0),p([d({type:me,json:{write:!0}})],F.prototype,"transform",void 0),p([d({constructOnly:!0})],F.prototype,"external",void 0),p([d({readOnly:!0})],F.prototype,"hasExtent",null),p([d({readOnly:!0})],F.prototype,"_boundingInfo",null),p([d({readOnly:!0})],F.prototype,"anchor",null),p([d({readOnly:!0})],F.prototype,"origin",null),p([d({readOnly:!0,json:{read:!1}})],F.prototype,"extent",null),p([d({readOnly:!0,json:{read:!1,write:!0,default:!0}})],F.prototype,"hasZ",void 0),p([d({readOnly:!0,json:{read:!1,write:!0,default:!1}})],F.prototype,"hasM",void 0),p([d({type:T,nonNullable:!0,json:{write:!0}})],F.prototype,"vertexAttributes",void 0),F=O=p([ee(z)],F);const Ae={x:ve(1,0,0),y:ve(0,1,0),z:ve(0,0,1)},V=ae(),Xe=ae(),Qe=ae(),ce=M(),qe=F;function _n(e,t,n){const r=n.features;n.features=[],delete n.geometryType;const o=Et.fromJSON(n);if(o.geometryType="mesh",!n.assetMaps)return o;const a=Sn(t,n.assetMaps),s=o.spatialReference,i=n.globalIdFieldName,l=se(e.outFields)||!e.outFields.length?()=>({}):Dn(e.outFields.includes("*")?null:new Set(e.outFields));for(const u of r){const h=En(u,i,s,t,a);c(h)&&o.features.push(new It({geometry:h,attributes:l(u)}))}return o}function Dn(e){return({attributes:t})=>{if(!t)return{};if(!e)return t;for(const n in t)e.has(n)||delete t[n];return t}}function En(e,t,n,r,o){const a=e.attributes[t],s=o.get(a);if(s==null||s.status===j.FAILED||s.url==null)return null;const i=In(e,n,r),l=Fe.fromJSON(e.geometry);l.spatialReference=n;const u=Pn(e.attributes,r,s.geographic);return s.status===j.PENDING?qe.createIncomplete(i,{extent:l,transform:u}):qe.createWithExternalSource(i,[{name:s.name,source:s.url}],{extent:l,transform:u})}function In({attributes:e},t,{transformFieldRoles:n}){return new E({x:e[n.originX],y:e[n.originY],z:e[n.originZ],spatialReference:t})}function Pn(e,{transformFieldRoles:t},n){return new me({translation:[e[t.translationX],e[t.translationY],e[t.translationZ]],rotation:ue([e[t.rotationX],e[t.rotationY],e[t.rotationZ]],e[t.rotationDeg]),scale:[e[t.scaleX],e[t.scaleY],e[t.scaleZ]],geographic:n})}var j;function Sn(e,t){const n=new Map;for(const r of t){const o=r.parentGlobalId;if(o==null)continue;const a=r.assetName,s=r.assetURL,i=r.conversionStatus;let l=n.get(o);if(l!=null)throw new Error("multiple asset parts not expected.");switch(l={name:a,status:j.FAILED,url:s,geographic:jn(r.flags).projectVertices},n.set(o,l),i){case"COMPLETED":case"SUBMITTED":l.status=j.COMPLETED;break;case"INPROGRESS":l.status=j.PENDING;break;default:l.status=j.FAILED}}return n}function jn(e){return{projectVertices:e.includes("PROJECT_VERTICES")}}(function(e){e[e.FAILED=0]="FAILED",e[e.PENDING=1]="PENDING",e[e.COMPLETED=2]="COMPLETED"})(j||(j={}));var Gn=Object.freeze(Object.defineProperty({__proto__:null,meshFeatureSetFromJSON:_n},Symbol.toStringTag,{value:"Module"}));export{Gn as a,Ht as c,q as g,oe as m,T as p};