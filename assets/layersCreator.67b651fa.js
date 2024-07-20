import{cB as g,cC as f,cD as G,cE as m}from"./index.221827cd.js";import{a as L}from"./lazyLayerLoader.4d2df2af.js";import{selectLayerClassPath as M}from"./portalLayers.72750f56.js";import"./layersLoader.afdddce2.js";import"./jsonContext.fe51f9bd.js";import"./portalItemUtils.92eef7f6.js";function A(e){return p(e,"notes")}function v(e){return p(e,"markup")}function w(e){return p(e,"route")}function p(e,r){return!(!e.layerType||e.layerType!=="ArcGISFeatureLayer")&&e.featureCollectionType===r}async function b(e,r,a){if(!r)return;const y=[];for(const t of r){const i=h(t,a);t.layerType==="GroupLayer"?y.push(E(i,t,a)):y.push(i)}const n=await g(y);for(const t of n)!t.value||a.filter&&!a.filter(t.value)||e.add(t.value)}const W={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},F={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},C={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},O={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},V={ArcGISFeatureLayer:"FeatureLayer"},B={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function h(e,r){return D(await U(e,r),e,r)}async function D(e,r,a){const y=new e;return y.read(r,a.context),y.type==="group"&&d(r)&&await k(y,r,a.context),await f(y,a.context),y}async function U(e,r){const a=r.context,y=x(a);let n=e.layerType||e.type;!n&&r&&r.defaultLayerType&&(n=r.defaultLayerType);const t=y[n];let i=t?L[t]:L.UnknownLayer;if(T(e)){const s=a==null?void 0:a.portal;if(e.itemId){const o=new G({id:e.itemId,portal:s});await o.load();const c=(await M(o)).className||"UnknownLayer";i=L[c]}}else n==="ArcGISFeatureLayer"?A(e)||v(e)?i=L.MapNotesLayer:w(e)?i=L.RouteLayer:d(e)&&(i=L.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?i=L.WMTSLayer:n==="WFS"&&e.wfsInfo.version!=="2.0.0"&&(i=L.UnsupportedLayer);return i()}function d(e){var r,a,y;return e.layerType!=="ArcGISFeatureLayer"||T(e)?!1:((y=(a=(r=e.featureCollection)==null?void 0:r.layers)==null?void 0:a.length)!=null?y:0)>1}function T(e){return e.type==="Feature Collection"}function x(e){let r;if(e.origin==="web-scene")switch(e.layerContainerType){case"basemap":r=C;break;case"ground":r=F;break;default:r=W}else switch(e.layerContainerType){case"basemap":r=B;break;case"tables":r=V;break;default:r=O}return r}async function E(e,r,a){const y=new m,n=b(y,Array.isArray(r.layers)?r.layers:[],a),t=await e;if(await n,t.type==="group")return t.layers.addMany(y),t}async function k(e,r,a){const y=L.FeatureLayer,n=await y(),t=r.featureCollection,i=t.showLegend,s=t.layers.map((o,c)=>{var S,I;const l=new n;l.read(o,a);const u={...a,ignoreDefaults:!0};return l.read({id:`${e.id}-sublayer-${c}`,visibility:(I=(S=r.visibleLayers)==null?void 0:S.includes(c))!=null?I:!0},u),i!=null&&l.read({showLegend:i},u),l});e.layers.addMany(s)}export{b as populateOperationalLayers};
