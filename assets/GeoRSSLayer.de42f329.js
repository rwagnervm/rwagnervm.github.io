import{e4 as n,e5 as y,cH as p,cM as u,U as d,i1 as c,I as h,aa as o,ab as s,ed as m,cz as S,ac as f,eO as a,bU as g,eu as v,bT as b,bV as C,dJ as G}from"./index.7eb0daf2.js";import{S as w}from"./MultiOriginJSONSupport.b5976a45.js";import{b as P}from"./OperationalLayer.33897364.js";import{j as _}from"./PortalLayer.5cf51695.js";import{f as x}from"./RefreshableLayer.908b9ff1.js";import{g as R,y as k,p as $}from"./commonProperties.a37169f8.js";import"./portalItemUtils.761d02ba.js";const j=["atom","xml"],F={base:a,key:"type",typeMap:{"simple-line":g},errorContext:"symbol"},E={base:a,key:"type",typeMap:{"picture-marker":v,"simple-marker":b},errorContext:"symbol"},M={base:a,key:"type",typeMap:{"simple-fill":C},errorContext:"symbol"};let t=class extends n(x(P(_(y(w(G)))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}readFeatureCollections(e,r){return r.featureCollection.layers.forEach(i=>{const l=i.layerDefinition.drawingInfo.renderer.symbol;l&&l.type==="esriSFS"&&l.outline?.style.includes("esriSFS")&&(l.outline.style="esriSLSSolid")}),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?p(this.url,j)||"GeoRSS":e}set title(e){this._set("title",e)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(u).then(()=>this._fetchService(r)).then(i=>{this.read(i,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const r=this.spatialReference,{data:i}=await d(h.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:c(r)?void 0:r.wkid??JSON.stringify(r)},signal:e});return i}_hasGeometry(e){return this.featureCollections?.some(r=>r.featureSet?.geometryType===e&&r.featureSet.features?.length>0)??!1}};o([s()],t.prototype,"description",void 0),o([s()],t.prototype,"featureCollections",void 0),o([m("service","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollections",null),o([s({type:S,json:{name:"lookAtExtent"}})],t.prototype,"fullExtent",void 0),o([s(R)],t.prototype,"id",void 0),o([s(k)],t.prototype,"legendEnabled",void 0),o([s({types:F,json:{write:!0}})],t.prototype,"lineSymbol",void 0),o([s({type:["show","hide"]})],t.prototype,"listMode",void 0),o([s({types:E,json:{write:!0}})],t.prototype,"pointSymbol",void 0),o([s({types:M,json:{write:!0}})],t.prototype,"polygonSymbol",void 0),o([s({type:["GeoRSS"]})],t.prototype,"operationalLayerType",void 0),o([s($)],t.prototype,"url",void 0),o([s({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],t.prototype,"title",null),o([s({readOnly:!0,json:{read:!1},value:"geo-rss"})],t.prototype,"type",void 0),t=o([f("esri.layers.GeoRSSLayer")],t);const I=t;export{I as default};