import{$ as I,cF as g,s as m,cG as L,cH as P,cI as O,cJ as v}from"./index.7eb0daf2.js";import{s as T}from"./associatedFeatureServiceUtils.f808dfcb.js";import{t as f,i as d,a as $,b as U}from"./fetchService.e99559bf.js";const C={FeatureLayer:!0,SceneLayer:!0};async function D(a){const{properties:t,url:e}=a,s={...t,url:e},l=await J(e,t?.customParameters),{Constructor:r,layerId:o,sourceJSON:c,parsedUrl:i,layers:u,tables:n}=l;if(u.length+n.length===0)return o!=null&&(s.layerId=o),c!=null&&(s.sourceJSON=c),new r(s);const y=new(await I(()=>import("./GroupLayer.9e6e3834.js"),["assets/GroupLayer.9e6e3834.js","assets/index.7eb0daf2.js","assets/index.d3b4073e.css","assets/MultiOriginJSONSupport.b5976a45.js","assets/OperationalLayer.33897364.js","assets/commonProperties.a37169f8.js","assets/PortalLayer.5cf51695.js","assets/portalItemUtils.761d02ba.js","assets/fetchService.e99559bf.js","assets/interfaces.c34ab3ac.js","assets/saveUtils.056b2dea.js"])).default({title:i.title});return await F(y,l,s),y}function S(a,t){return a?a.find(({id:e})=>e===t):null}function b(a,t,e,s,l){const r={...l,layerId:t};return a!=null&&(r.url=a),e!=null&&(r.sourceJSON=e),"sublayerTitleMode"in s.prototype&&(r.sublayerTitleMode="service-name"),new s(r)}async function F(a,t,e){const s=t.sublayerConstructorProvider;for(const{id:l,serverUrl:r}of t.layers){const o=S(t.sublayerInfos,l),c=b(r,l,o,(o&&s?.(o))??t.Constructor,e);a.add(c)}if(t.tables.length){const l=await w("FeatureLayer");t.tables.forEach(({id:r,serverUrl:o})=>{const c=b(o,r,S(t.tableInfos,r),l,e);a.tables.add(c)})}}async function J(a,t){let e=g(a);if(e==null&&(e=await N(a,t)),e==null)throw new m("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:a});const{serverType:s,sublayer:l}=e;let r;const o={FeatureServer:"FeatureLayer",KnowledgeGraphServer:"KnowledgeGraphLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer",VideoServer:"VideoLayer"},c=s==="FeatureServer",i=s==="SceneServer",u={parsedUrl:e,Constructor:null,layerId:c||i?l??void 0:void 0,layers:[],tables:[]};switch(s){case"MapServer":if(l!=null){const{type:n}=await f(a,{customParameters:t});switch(r="FeatureLayer",n){case"Catalog Layer":r="CatalogLayer";break;case"Catalog Dynamic Group Layer":throw new m("arcgis-layers:unsupported",`fromUrl() not supported for "${n}" layers`)}}else r=await _(a,t)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const n=await f(a,{customParameters:t}),{tileInfo:y,cacheType:p}=n;r=y?y?.format?.toUpperCase()!=="LERC"||p&&p.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const n=await f(e.url.path,{customParameters:t});if(r="SceneLayer",n){const y=n?.layers;if(n?.layerType==="Voxel")r="VoxelLayer";else if(y?.length){const p=y[0]?.layerType;p!=null&&v[p]!=null&&(r=v[p])}}break}case"3DTilesServer":throw new m("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(r="FeatureLayer",l!=null){const n=await f(a,{customParameters:t});u.sourceJSON=n,r=d(n.type)}break;default:r=o[s]}if(C[r]&&l==null){const n=await V(a,s,t);if(c&&(u.sublayerInfos=n.layerInfos,u.tableInfos=n.tableInfos),n.layers.length+n.tables.length!==1)u.layers=n.layers,u.tables=n.tables,c&&n.layerInfos?.length&&(u.sublayerConstructorProvider=await x(n.layerInfos));else if(c||i){const y=n.layerInfos?.[0]??n.tableInfos?.[0];if(u.layerId=n.layers[0]?.id??n.tables[0]?.id,u.sourceJSON=y,c){const p=y?.type;r=d(p)}}}return u.Constructor=await w(r),u}async function N(a,t){const e=await f(a,{customParameters:t});let s=null,l=null;const r=e.type;if(r==="Feature Layer"||r==="Table"?(s="FeatureServer",l=e.id??null):r==="indexedVector"?s="VectorTileServer":e.hasOwnProperty("mapName")?s="MapServer":e.hasOwnProperty("bandCount")&&e.hasOwnProperty("pixelSizeX")?s="ImageServer":e.hasOwnProperty("maxRecordCount")&&e.hasOwnProperty("allowGeometryUpdates")?s="FeatureServer":e.hasOwnProperty("streamUrls")?s="StreamServer":h(e)?(s="SceneServer",l=e.id):e.hasOwnProperty("layers")&&h(e.layers?.[0])&&(s="SceneServer"),!s)return null;const o=l!=null?L(a):null;return{title:o!=null&&e.name||P(a),serverType:s,sublayer:l,url:{path:o!=null?o.serviceUrl:O(a).path}}}function h(a){return a!=null&&a.hasOwnProperty("store")&&a.hasOwnProperty("id")&&typeof a.id=="number"}async function V(a,t,e){let s,l,r=!1;switch(t){case"FeatureServer":{const i=await $(a,{customParameters:e});r=!!i.layersJSON,s=i.layersJSON||i.serviceJSON;break}case"SceneServer":{const i=await k(a,e);s=i.serviceInfo,l=i.tableServerUrl;break}default:s=await f(a,{customParameters:e})}const o=s?.layers,c=s?.tables;return{layers:o?.map(i=>({id:i.id})).reverse()||[],tables:c?.map(i=>({serverUrl:l,id:i.id})).reverse()||[],layerInfos:r?o:[],tableInfos:r?c:[]}}async function k(a,t){const e=await f(a,{customParameters:t});if(!e.layers?.[0])return{serviceInfo:e};try{const{serverUrl:l}=await T(a),r=await f(l,{customParameters:t}).catch(()=>null);return r&&(e.tables=r.tables),{serviceInfo:e,tableServerUrl:l}}catch{return{serviceInfo:e}}}async function w(a){return(0,U[a])()}async function _(a,t){return(await f(a,{customParameters:t})).tileInfo}async function x(a){if(!a.length)return;const t=new Set,e=[];for(const{type:r}of a)t.has(r)||(t.add(r),e.push(w(d(r))));const s=await Promise.all(e),l=new Map;return Array.from(t).forEach((r,o)=>{l.set(r,s[o])}),r=>l.get(r.type)}export{D as fromUrl};