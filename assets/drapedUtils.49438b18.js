import{ay as ee,fD as te,eb as k,aa as a,ab as p,ej as re,c2 as se,dY as B,cz as j,bz as ie,ek as oe,ac as _,dW as D,fQ as ne,d7 as G,ed as ae,e2 as le,eh as ue,cn as pe,fR as ye,fS as ce,U as fe,a9 as he,dx as de,da as me,s as U,cE as I,c7 as ge,aK as H,bT as z,$ as be,bp as we,aS as V,d as xe,F as Q,f5 as ve,d3 as $e}from"./index.7eb0daf2.js";import{i as Se,o as Re}from"./scaleUtils.24a7f96d.js";import{n as T}from"./floorFilterUtils.1e9a5f1e.js";import{n as Fe}from"./sublayerUtils.9912a6d8.js";import{n as Ee,p as Oe}from"./popupUtils.c8d8e4fb.js";function M(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function je(t){let e=0,s=0;for(let i=0;i<t.length;i++){const r=t[i].size;typeof r=="number"&&(e+=r,s++)}return e/s}function J(t,e){return typeof t=="number"?t:t?.stops?.length?je(t.stops):e}function Ie(t,e){if(!e)return t;const s=e.filter(o=>o.type==="size").map(o=>{const{maxSize:c,minSize:u}=o;return(J(c,t)+J(u,t))/2});let i=0;const r=s.length;if(r===0)return t;for(let o=0;o<r;o++)i+=s[o];const n=Math.floor(i/r);return Math.max(n,t)}function q(t){const e=t?.renderer,s=t?.pointerType,i=s==="touch"?9:6;if(!e)return i;const r="visualVariables"in e?Ie(i,e.visualVariables):i;if(e.type==="simple")return M(r,e.symbol);if(e.type==="unique-value"){let n=r;return e.uniqueValueInfos?.forEach(o=>{n=M(n,o.symbol)}),n}if(e.type==="class-breaks"){let n=r;return e.classBreakInfos.forEach(o=>{n=M(n,o.symbol)}),n}return e.type==="dot-density"||e.type,r}function Me(t,e){const{dpi:s,gdbVersion:i,geometry:r,geometryPrecision:n,height:o,historicMoment:c,layerOption:u,mapExtent:l,maxAllowableOffset:f,returnFieldName:y,returnGeometry:m,returnUnformattedValues:v,returnZ:d,spatialReference:S,timeExtent:b,tolerance:g,width:w}=t.toJSON(),{dynamicLayers:F,layerDefs:E,layerIds:A}=Pe(t),W=e?.geometry!=null?e.geometry:null,x={historicMoment:c,geometryPrecision:n,maxAllowableOffset:f,returnFieldName:y,returnGeometry:m,returnUnformattedValues:v,returnZ:d,tolerance:g},O=W?.toJSON()||r;x.imageDisplay=`${w},${o},${s}`,i&&(x.gdbVersion=i),O&&(delete O.spatialReference,x.geometry=JSON.stringify(O),x.geometryType=ee(O));const L=S??O?.spatialReference??l?.spatialReference;if(L&&(x.sr=te(L)),x.time=b?[b.start,b.end].join(","):null,l){const{xmin:C,ymin:K,xmax:Y,ymax:X}=l;x.mapExtent=`${C},${K},${Y},${X}`}return E&&(x.layerDefs=E),F&&!E&&(x.dynamicLayers=F),x.layers=u==="popup"?"visible":u,A&&!F&&(x.layers+=`:${A.join(",")}`),x}function Pe(t){const{mapExtent:e,floors:s,width:i,sublayers:r,layerIds:n,layerOption:o,gdbVersion:c}=t,u=r?.find(d=>d.layer!=null)?.layer?.serviceSublayers,l=o==="popup",f={},y=Se({extent:e,width:i,spatialReference:e?.spatialReference}),m=[],v=d=>{const S=y===0,b=d.minScale===0||y<=d.minScale,g=d.maxScale===0||y>=d.maxScale;if(d.visible&&(S||b&&g))if(d.sublayers)d.sublayers.forEach(v);else{if(n?.includes(d.id)===!1||l&&(!d.popupTemplate||!d.popupEnabled))return;m.unshift(d)}};if(r?.forEach(v),r&&!m.length)f.layerIds=[];else{const d=Fe(m,u,c),S=m.map(b=>{const g=T(s,b);return b.toExportImageJSON(g)});if(d)f.dynamicLayers=JSON.stringify(S);else{if(r){let g=m.map(({id:w})=>w);n&&(g=g.filter(w=>n.includes(w))),f.layerIds=g}else n?.length&&(f.layerIds=n);const b=Ve(s,m);if(b!=null&&b.length){const g={};for(const w of b)w.definitionExpression&&(g[w.id]=w.definitionExpression);Object.keys(g).length&&(f.layerDefs=JSON.stringify(g))}}}return f}function Ve(t,e){const s=!!t?.length,i=e.filter(r=>r.definitionExpression!=null||s&&r.floorInfo!=null);return i.length?i.map(r=>{const n=T(t,r),o=k(n,r.definitionExpression);return{id:r.id,definitionExpression:o??void 0}}):null}var N;let h=N=class extends D{static from(t){return ne(N,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}};a([p({type:Number,json:{write:!0}})],h.prototype,"dpi",void 0),a([p()],h.prototype,"floors",void 0),a([p({type:String,json:{write:!0}})],h.prototype,"gdbVersion",void 0),a([p({types:re,json:{read:se,write:!0}})],h.prototype,"geometry",void 0),a([p({type:Number,json:{write:!0}})],h.prototype,"geometryPrecision",void 0),a([p({type:Number,json:{write:!0}})],h.prototype,"height",void 0),a([p({type:Date})],h.prototype,"historicMoment",void 0),a([B("historicMoment")],h.prototype,"writeHistoricMoment",null),a([p({type:[Number],json:{write:!0}})],h.prototype,"layerIds",void 0),a([p({type:["top","visible","all","popup"],json:{write:!0}})],h.prototype,"layerOption",void 0),a([p({type:j,json:{write:!0}})],h.prototype,"mapExtent",void 0),a([p({type:Number,json:{write:!0}})],h.prototype,"maxAllowableOffset",void 0),a([p({type:Boolean,json:{write:!0}})],h.prototype,"returnFieldName",void 0),a([p({type:Boolean,json:{write:!0}})],h.prototype,"returnGeometry",void 0),a([p({type:Boolean,json:{write:!0}})],h.prototype,"returnM",void 0),a([p({type:Boolean,json:{write:!0}})],h.prototype,"returnUnformattedValues",void 0),a([p({type:Boolean,json:{write:!0}})],h.prototype,"returnZ",void 0),a([p({type:ie,json:{write:!0}})],h.prototype,"spatialReference",void 0),a([p()],h.prototype,"sublayers",void 0),a([p({type:oe,json:{write:!0}})],h.prototype,"timeExtent",void 0),a([p({type:Number,json:{write:!0}})],h.prototype,"tolerance",void 0),a([p({type:Number,json:{write:!0}})],h.prototype,"width",void 0),h=N=a([_("esri.rest.support.IdentifyParameters")],h);const Z=h;let $=class extends D{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return G.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:s,geometry:i}=t;s&&(e.attributes={...s}),i!=null&&(e.geometry=i.toJSON(),e.geometryType=le.toJSON(i.type))}};a([p({type:String,json:{write:!0}})],$.prototype,"displayFieldName",void 0),a([p({type:G})],$.prototype,"feature",void 0),a([ae("feature",["attributes","geometry"])],$.prototype,"readFeature",null),a([B("feature")],$.prototype,"writeFeature",null),a([p({type:Number,json:{write:!0}})],$.prototype,"layerId",void 0),a([p({type:String,json:{write:!0}})],$.prototype,"layerName",void 0),$=a([_("esri.rest.support.IdentifyResult")],$);const Ne=$;async function _e(t,e,s){const i=(e=Te(e)).geometry?[e.geometry]:[],r=ue(t);return r.path+="/identify",pe(i).then(n=>{const o=Me(e,{geometry:n?.[0]}),c=ye({...r.query,f:"json",...o}),u=ce(c,s);return fe(r.path,u).then(Ge).then(l=>Ae(l,e.sublayers))})}function Ge(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=Boolean(e.exceededTransferLimit),e.results=e.results.map(s=>Ne.fromJSON(s)),e}function Te(t){return t=Z.from(t)}function Ae(t,e){if(!e?.length)return t;const s=new Map;function i(r){s.set(r.id,r),r.sublayers&&r.sublayers.forEach(i)}e.forEach(i);for(const r of t.results)r.feature.sourceLayer=s.get(r.layerId);return t}let P=null;function De(t,e){return e.type==="tile"||e.type==="map-image"}let R=class extends he{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=de(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([me(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeaturesAtLocation(t,e){const{layerView:{layer:s,view:{scale:i}}}=this;if(!t)throw new U("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:s});const r=Le(s.sublayers,i,e);if(!r.length)return[];const n=await He(s,r);if(!((s.capabilities?.operations?.supportsIdentify??!0)&&s.version>=10.5)&&!n)throw new U("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:s});return n?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){this.highlightGraphics?.removeAll()}highlight(t){const e=this.highlightGraphics;if(!e)return I();let s=null;if(t instanceof G?s=[t]:ge.isCollection(t)&&t.length>0?s=t.toArray():Array.isArray(t)&&t.length>0&&(s=t),s=s?.filter(H),!s?.length)return I();for(const i of s){const r=i.sourceLayer;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(i.visible=!1)}return e.addMany(s),I(()=>e.removeMany(s??[]))}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:s,highlightGraphicUpdated:i}=this;if(s&&i)for(const r of t){const n=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&n&&"getSymbolAsync"in n&&n.getSymbolAsync(r).then(async o=>{o||=new z;let c=null;const u="visualVariables"in n?n.visualVariables?.find(l=>l.type==="size"):void 0;u&&(P||(P=(await be(()=>import("./visualVariableUtils.12ee1cdb.js"),["assets/visualVariableUtils.12ee1cdb.js","assets/index.7eb0daf2.js","assets/index.d3b4073e.css","assets/sizeVariableUtils.34255976.js"])).getSize),c=P(u,r,{view:e.type,scale:e.scale,shape:o.type==="simple-marker"?o.style:null})),c||="width"in o&&"height"in o&&o.width!=null&&o.height!=null?Math.max(o.width,o.height):"size"in o?o.size:16,s.includes(r)&&(r.symbol=new z({style:"square",size:c,xoffset:"xoffset"in o?o.xoffset:0,yoffset:"yoffset"in o?o.yoffset:0}),i(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:s},highlightGraphics:i,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!i?.length||!e.capabilities.operations.supportsQuery)return;const n=this._getTargetResolution(t),o=new Map;for(const l of i)if(!this._featuresResolutions.has(l)||this._featuresResolutions.get(l)>n){const f=l.sourceLayer;we(o,f,()=>new Map).set(l.getObjectId(),l)}const c=Array.from(o,([l,f])=>{const y=l.createQuery();return y.objectIds=[...f.keys()],y.outFields=[l.objectIdField],y.returnGeometry=!0,y.maxAllowableOffset=n,y.outSpatialReference=s.spatialReference,l.queryFeatures(y)}),u=await Promise.all(c);if(!this.destroyed)for(const{features:l}of u)for(const f of l){const y=f.sourceLayer,m=o.get(y).get(f.getObjectId());m&&i.includes(m)&&(m.geometry=f.geometry,r(m,"geometry"),this._featuresResolutions.set(m,n))}}_getTargetResolution(t){const e=t*V(this.layerView.view.spatialReference),s=e/16;return s<=10?0:t/e*s}async _fetchPopupFeaturesUsingIdentify(t,e,s){const i=await this._createIdentifyParameters(t,e,s);if(i==null)return[];const{results:r}=await _e(this.layerView.layer.parsedUrl,i,s);return r.map(n=>n.feature)}async _createIdentifyParameters(t,e,s){const{floors:i,layer:r,timeExtent:n,view:{spatialReference:o,scale:c}}=this.layerView;if(!e.length)return null;await Promise.all(e.map(({sublayer:v})=>v.load(s).catch(()=>{})));const u=Math.min(xe("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((v,d)=>d.renderer?q({renderer:d.renderer,pointerType:s?.pointerType}):v,2)),l=this.createFetchPopupFeaturesQueryGeometry(t,u),f=Re(c,o),y=Math.round(l.width/f),m=new j({xmin:l.center.x-f*y,ymin:l.center.y-f*y,xmax:l.center.x+f*y,ymax:l.center.y+f*y,spatialReference:l.spatialReference});return new Z({floors:i,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:y,layerOption:"popup",mapExtent:m,returnGeometry:!0,spatialReference:o,sublayers:r.sublayers,timeExtent:n,tolerance:u,width:y})}async _fetchPopupFeaturesUsingQueries(t,e,s){const{layerView:{floors:i,timeExtent:r}}=this,n=e.map(async({sublayer:o,popupTemplate:c})=>{if(await o.load(s).catch(()=>{}),o.capabilities&&!o.capabilities.operations.supportsQuery)return[];const u=o.createQuery(),l=q({renderer:o.renderer,pointerType:s?.pointerType}),f=this.createFetchPopupFeaturesQueryGeometry(t,l),y=new Set,[m]=await Promise.all([Ee(o,c),o.renderer?.collectRequiredFields(y,o.fieldsIndex)]);Q(s),ve(y,o.fieldsIndex,m);const v=Array.from(y).sort();u.geometry=f,u.outFields=v,u.timeExtent=r;const d=T(i,o);u.where=k(u.where,d);const S=this._getTargetResolution(f.width/l),b=await Ue(c);Q(s);const g=o.geometryType==="point"||b&&b.arcadeUtils.hasGeometryOperations(c);g||(u.maxAllowableOffset=S);let{features:w}=await o.queryFeatures(u,s);const F=g?0:S;w=await ze(o,w,s);for(const E of w)this._featuresResolutions.set(E,F);return w});return(await Promise.allSettled(n)).reduce((o,c)=>c.status==="fulfilled"?[...o,...c.value]:o,[]).filter(H)}};function Le(t,e,s){const i=[];if(!t)return i;const r=n=>{const o=n.minScale===0||e<=n.minScale,c=n.maxScale===0||e>=n.maxScale;if(n.visible&&o&&c){if(n.sublayers)n.sublayers.forEach(r);else if(n.popupEnabled){const u=Oe(n,{...s,defaultPopupTemplateEnabled:!1});u!=null&&i.unshift({sublayer:n,popupTemplate:u})}}};return t.map(r),i}function Ue(t){return t.expressionInfos?.length||Array.isArray(t.content)&&t.content.some(e=>e.type==="expression")?$e():Promise.resolve()}async function He(t,e){if(t.capabilities?.operations?.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:s})=>s.load().then(()=>s.capabilities.operations.supportsQuery)))}catch{return!1}}async function ze(t,e,s){const i=t.renderer;return i&&"defaultSymbol"in i&&!i.defaultSymbol&&(e=i.valueExpression?await Promise.all(e.map(r=>i.getSymbolAsync(r,s).then(n=>n?r:null))).then(r=>r.filter(n=>n!=null)):e.filter(r=>i.getSymbol(r)!=null)),e}a([p({constructOnly:!0})],R.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),a([p({constructOnly:!0})],R.prototype,"layerView",void 0),a([p({constructOnly:!0})],R.prototype,"highlightGraphics",void 0),a([p({constructOnly:!0})],R.prototype,"highlightGraphicUpdated",void 0),a([p({constructOnly:!0})],R.prototype,"updatingHandles",void 0),R=a([_("esri.views.layers.support.MapServiceLayerViewHelper")],R);function Ze(t,e,s,i=new j){let r=0;if(s.type==="2d")r=e*(s.resolution??0);else if(s.type==="3d"){const f=s.overlayPixelSizeInMapUnits(t),y=s.basemapSpatialReference;r=y==null||y.equals(s.spatialReference)?e*f:V(y)/V(s.spatialReference)}const n=t.x-r,o=t.y-r,c=t.x+r,u=t.y+r,{spatialReference:l}=s;return i.xmin=Math.min(n,c),i.ymin=Math.min(o,u),i.xmax=Math.max(n,c),i.ymax=Math.max(o,u),i.spatialReference=l,i}new j;export{De as U,R as _,Ze as r};
