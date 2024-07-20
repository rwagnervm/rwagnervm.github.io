import{at as L,cy as O,j as h,n as P,cz as T,c as m,cA as g,bX as C}from"./index.221827cd.js";import{a as i,r as F}from"./fetchService.88193309.js";import{a as N}from"./lazyLayerLoader.4d2df2af.js";async function k(e){var s;const l=(s=e.properties)==null?void 0:s.customParameters,r=await J(e.url,l),a={...e.properties,url:e.url};if(!r.sublayerIds)return r.layerOrTableId!=null&&(a.layerId=r.layerOrTableId,a.sourceJSON=r.sourceJSON),new r.Constructor(a);const n=new(await L(()=>import("./GroupLayer.d2d54b11.js"),["assets/GroupLayer.d2d54b11.js","assets/index.221827cd.js","assets/index.f5419ca5.css","assets/lazyLayerLoader.4d2df2af.js"])).default({title:r.parsedUrl.title});return U(n,r,a),n}function v(e,l){return e?e.find(r=>r.id===l):null}function U(e,l,r){function a(n,s){const o={...r,layerId:n,sublayerTitleMode:"service-name"};return m(s)&&(o.sourceJSON=s),new l.Constructor(o)}l.sublayerIds.forEach(n=>{const s=a(n,v(l.sublayerInfos,n));e.add(s)}),l.tableIds.forEach(n=>{const s=a(n,v(l.tableInfos,n));e.tables.add(s)})}async function J(e,l){var I,p;let r=O(e);if(h(r)&&(r=await V(e,l)),h(r))throw new P("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:a,sublayer:n}=r;let s;const o={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(a){case"MapServer":s=n!=null?"FeatureLayer":E(e,l).then(t=>t?"TileLayer":"MapImageLayer");break;case"ImageServer":s=i(e,{customParameters:l}).then(t=>{const y=t.tileInfo&&t.tileInfo.format;return t.tileInfo?(y==null?void 0:y.toUpperCase())!=="LERC"||t.cacheType&&t.cacheType.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"});break;case"SceneServer":s=i(r.url.path,{customParameters:l}).then(t=>{var y;if(t){if((t==null?void 0:t.layerType)==="Voxel")return"VoxelLayer";if((t==null?void 0:t.layers)&&Array.isArray(t.layers)&&t.layers.length>0){const b={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},S=(y=t.layers[0])==null?void 0:y.layerType;if(b[S]!=null)return b[S]}}return"SceneLayer"});break;default:s=o[a]}const u={FeatureLayer:!0,SceneLayer:!0},d=a==="FeatureServer",c={parsedUrl:r,Constructor:null,layerOrTableId:d?n:null,sublayerIds:null,tableIds:null},f=await s;if(u[f]&&n==null){const t=await _(e,a,l);d&&(c.sublayerInfos=t.layerInfos,c.tableInfos=t.tableInfos),t.layerIds.length+t.tableIds.length!==1?(c.sublayerIds=t.layerIds,c.tableIds=t.tableIds):d&&(c.layerOrTableId=(I=t.layerIds[0])!=null?I:t.tableIds[0],c.sourceJSON=(p=t.layerInfos[0])!=null?p:t.tableInfos[0])}return c.Constructor=await x(f),c}async function V(e,l){var u;const r=await i(e,{customParameters:l});let a=null,n=null;const s=r.type;if(s==="Feature Layer"||s==="Table"?(a="FeatureServer",n=r.id):s==="indexedVector"?a="VectorTileServer":r.hasOwnProperty("mapName")?a="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?a="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?a="FeatureServer":r.hasOwnProperty("streamUrls")?a="StreamServer":w(r)?(a="SceneServer",n=r.id):r.hasOwnProperty("layers")&&w((u=r.layers)==null?void 0:u[0])&&(a="SceneServer"),!a)return null;const o=n!=null?T(e):null;return{title:m(o)&&r.name||g(e),serverType:a,sublayer:n,url:{path:m(o)?o.serviceUrl:C(e).path}}}function w(e){return(e==null?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&typeof e.id=="number"}async function _(e,l,r){let a,n=!1;if(l==="FeatureServer"){const u=await F(e,{customParameters:r});n=!!u.layersJSON,a=u.layersJSON||u.serviceJSON}else a=await i(e,{customParameters:r});const s=a==null?void 0:a.layers,o=a==null?void 0:a.tables;return{layerIds:(s==null?void 0:s.map(u=>u.id).reverse())||[],tableIds:(o==null?void 0:o.map(u=>u.id).reverse())||[],layerInfos:n?s:[],tableInfos:n?o:[]}}async function x(e){return(0,N[e])()}async function E(e,l){return(await i(e,{customParameters:l})).tileInfo}export{k as fromUrl};