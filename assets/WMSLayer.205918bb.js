import{aJ as Ue,da as C,dH as N,a4 as J,dZ as Me,c7 as K,aa as a,ab as u,cz as R,ed as O,d6 as je,ac as xe,s as Te,aK as U,bz as F,cI as we,cx as _e,bo as Ce,aT as qe,e4 as Ve,e5 as Be,gu as We,cM as ke,gk as se,U as k,kf as De,cg as Xe,kg as Ge,ef as He,d7 as Je,gH as ze,I as Ze,e as Ke,dY as D,dX as Qe,dJ as Ye,fj as et}from"./index.7eb0daf2.js";import{m as tt,S as rt}from"./MultiOriginJSONSupport.b5976a45.js";import{i as ie}from"./scaleUtils.24a7f96d.js";import{b as nt}from"./OperationalLayer.33897364.js";import{j as st}from"./PortalLayer.5cf51695.js";import{f as it}from"./RefreshableLayer.908b9ff1.js";import{l as at}from"./TemporalLayer.859e579f.js";import{o as z}from"./crsUtils.431e3c9c.js";import{y as ot,p as lt}from"./commonProperties.a37169f8.js";import{a as ae}from"./ExportWMSImageParameters.f0adca82.js";import{t as ut}from"./imageBitmapUtils.630b294f.js";import"./portalItemUtils.761d02ba.js";import"./TimeInfo.d882fe8e.js";var j;let pt=0,y=j=class extends Ue(tt){constructor(e){super(e),this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.legendUrl=null,this.legendEnabled=!0,this.layer=null,this.maxScale=0,this.minScale=0,this.name=null,this.parent=null,this.popupEnabled=!1,this.queryable=!1,this.sublayers=null,this.spatialReferences=null,this.title=null,this.addHandles([C(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},N),C(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},N),J(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=this,n.layer=this.layer},N),J(()=>this.layer,t=>{if(this.sublayers)for(const r of this.sublayers)r.layer=t},N)])}get id(){return this._get("id")??pt++}set id(e){this._set("id",e)}readLegendUrl(e,t){return t.legendUrl??t.legendURL??null}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}castSublayers(e){return Me(K.ofType(j),e)}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new j;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents?.map(t=>t.clone())??null),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers?.map(t=>t.clone())),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences?.map(t=>t)),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};a([u()],y.prototype,"description",void 0),a([u({readOnly:!0})],y.prototype,"dimensions",void 0),a([u({type:R,json:{name:"extent"}})],y.prototype,"fullExtent",void 0),a([u()],y.prototype,"fullExtents",void 0),a([u({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],y.prototype,"id",null),a([u({type:String,json:{name:"legendUrl",write:{ignoreOrigin:!0}}})],y.prototype,"legendUrl",void 0),a([O("legendUrl",["legendUrl","legendURL"])],y.prototype,"readLegendUrl",null),a([u({type:Boolean,json:{name:"showLegend",origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],y.prototype,"legendEnabled",void 0),a([u()],y.prototype,"layer",void 0),a([u()],y.prototype,"maxScale",void 0),a([u()],y.prototype,"minScale",void 0),a([u({readOnly:!0})],y.prototype,"effectiveScaleRange",null),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],y.prototype,"name",void 0),a([u()],y.prototype,"parent",void 0),a([u({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],y.prototype,"popupEnabled",void 0),a([u({type:Boolean,json:{write:{ignoreOrigin:!0}}})],y.prototype,"queryable",void 0),a([u()],y.prototype,"sublayers",void 0),a([je("sublayers")],y.prototype,"castSublayers",null),a([u({type:[Number],json:{read:{source:"spatialReferences"}}})],y.prototype,"spatialReferences",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],y.prototype,"title",void 0),a([u({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],y.prototype,"visible",null),y=j=a([xe("esri.layers.support.WMSSublayer")],y);const Z=y,oe={84:4326,83:4269,27:4267};function ct(e){if(!e)return null;const t={idCounter:-1};typeof e=="string"&&(e=new DOMParser().parseFromString(e,"text/xml"));const r=e.documentElement;if(r.nodeName==="ServiceExceptionReport"){const g=Array.prototype.slice.call(r.childNodes).map(P=>P.textContent).join(`\r
`);throw new Te("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",g)}const n=b("Capability",r),s=b("Service",r),l=n&&b("Request",n);if(!n||!s||!l)return null;const i=b("Layer",n);if(!i)return null;const d=r.nodeName==="WMS_Capabilities"||r.nodeName==="WMT_MS_Capabilities"?r.getAttribute("version"):"1.3.0",o=w("Title",s,"")||w("Name",s,""),p=w("AccessConstraints",s,""),f=/^none$/i.test(p)?"":p,m=w("Abstract",s,""),x=parseInt(w("MaxWidth",s,"5000"),10),v=parseInt(w("MaxHeight",s,"5000"),10),S=ue(l,"GetMap"),I=le(l,"GetMap"),h=L(i,d,t);if(!h)return null;let Q,q=0;const Fe=Array.prototype.slice.call(n.childNodes),Ee=h.sublayers??[],V=g=>{g!=null&&Ee.push(g)};Fe.forEach(g=>{g.nodeName==="Layer"&&(q===0?Q=g:(q===1&&h.name&&(h.name="",V(L(Q,d,t))),V(L(g,d,t))),q++)});let E=h.sublayers,B=h.extent;const $e=h.fullExtents??[];if(E||(E=[]),E.length===0&&E.push(h),!B){const g=new R(E[0].extent);h.extent=g.toJSON(),B=h.extent}const Oe=h.spatialReferences.length>0?h.spatialReferences:ve(h),Y=le(l,"GetFeatureInfo"),Re=Y?ue(l,"GetFeatureInfo"):null,ee=Se(E),Pe=h.minScale||0,Ae=h.maxScale||0,te=h.dimensions??[],Le=ee.reduce((g,P)=>g.concat(P.dimensions??[]),[]),re=te.concat(Le).filter(Ne);let ne=null;if(re.length){const g=re.map(P=>{const{extent:W}=P;return ft(W)?W.map(M=>M.getTime()):W?.map(M=>[M.min.getTime(),M.max.getTime()])}).flat(2).filter(U);ne={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[Math.min(...g),Math.max(...g)]}}return{copyright:f,description:m,dimensions:te,extent:B,fullExtents:$e,featureInfoFormats:Re,featureInfoUrl:Y,mapUrl:I,maxWidth:x,maxHeight:v,maxScale:Ae,minScale:Pe,layers:ee,spatialReferences:Oe,supportedImageFormatTypes:S,timeInfo:ne,title:o,version:d}}function dt(e){const t=e.filter(r=>r.popupEnabled&&r.name&&r.queryable);return t.length?t.map(({name:r})=>r).join():null}function ve(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const r=ve(t);if(r.length>0)return r}return[]}function Se(e){let t=[];for(const r of e)t.push(r),r.sublayers?.length&&(t=t.concat(Se(r.sublayers)),delete r.sublayers);return t}function T(e,t,r){return t.getAttribute(e)??r}function mt(e,t,r,n){const s=b(e,r);return s?T(t,s,n):n}function b(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(Ie(n)&&n.nodeName===e)return n}return null}function _(e,t){if(t==null)return[];const r=[];for(let n=0;n<t.childNodes.length;n++){const s=t.childNodes[n];Ie(s)&&s.nodeName===e&&r.push(s)}return r}function w(e,t,r){return b(e,t)?.textContent??r}function A(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),l=parseFloat(e.getAttribute("maxx")),i=parseFloat(e.getAttribute("maxy"));let d,o,p,f;r?(d=isNaN(s)?-Number.MAX_VALUE:s,o=isNaN(n)?-Number.MAX_VALUE:n,p=isNaN(i)?Number.MAX_VALUE:i,f=isNaN(l)?Number.MAX_VALUE:l):(d=isNaN(n)?-Number.MAX_VALUE:n,o=isNaN(s)?-Number.MAX_VALUE:s,p=isNaN(l)?Number.MAX_VALUE:l,f=isNaN(i)?Number.MAX_VALUE:i);const m=new F({wkid:t});return new R({xmin:d,ymin:o,xmax:p,ymax:f,spatialReference:m})}function le(e,t){const r=b(t,e);if(r){const n=b("DCPType",r);if(n){const s=b("HTTP",n);if(s){const l=b("Get",s);if(l){let i=mt("OnlineResource","xlink:href",l,null);if(i)return i.indexOf("&")===i.length-1&&(i=i.substring(0,i.length-1)),ht(i,["service","request"])}}}}return null}function ue(e,t){const r=_("Operation",e);if(!r.length)return _("Format",b(t,e)).map(({textContent:s})=>s).filter(U);const n=[];for(const s of r)if(s.getAttribute("name")===t){const l=_("Format",s);for(const{textContent:i}of l)i!=null&&n.push(i)}return n}function pe(e,t,r){const n=b(t,e);if(!n)return r;const{textContent:s}=n;if(s==null||s==="")return r;const l=Number(s);return isNaN(l)?r:l}function L(e,t,r){if(!e)return null;const n={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:e.getAttribute("queryable")==="1",spatialReferences:[],sublayers:null},s=b("LatLonBoundingBox",e),l=b("EX_GeographicBoundingBox",e);let i=null;s&&(i=A(s,4326)),l&&(i=new R(0,0,0,0,new F({wkid:4326})),i.xmin=parseFloat(w("westBoundLongitude",l,"0")),i.ymin=parseFloat(w("southBoundLatitude",l,"0")),i.xmax=parseFloat(w("eastBoundLongitude",l,"0")),i.ymax=parseFloat(w("northBoundLatitude",l,"0"))),s||l||(i=new R(-180,-90,180,90,new F({wkid:4326}))),n.minScale=pe(e,"MaxScaleDenominator",0),n.maxScale=pe(e,"MinScaleDenominator",0);const d=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(o=>{if(o.nodeName==="Name")n.name=o.textContent||"";else if(o.nodeName==="Title")n.title=o.textContent||"";else if(o.nodeName==="Abstract")n.description=o.textContent||"";else if(o.nodeName==="BoundingBox"){const p=o.getAttribute(d);if(p&&p.indexOf("EPSG:")===0){const m=parseInt(p.substring(5),10);m===0||isNaN(m)||i||(i=t==="1.3.0"?A(o,m,z(m)):A(o,m))}const f=p?.indexOf(":");if(f&&f>-1){let m=parseInt(p.substring(f+1,p.length),10);m===0||isNaN(m)||(m=oe[m]??m);const x=t==="1.3.0"?A(o,m,z(m)):A(o,m);x&&n.fullExtents&&n.fullExtents.push(x)}}else if(o.nodeName===d)(o.textContent?.split(" ")??[]).forEach(p=>{const f=p.includes(":")?parseInt(p.split(":")[1],10):parseInt(p,10);if(f!==0&&!isNaN(f)){const m=oe[f]??f;n.spatialReferences.includes(m)||n.spatialReferences.push(m)}});else if(o.nodeName!=="Style"||n.legendUrl){if(o.nodeName==="Layer"){const p=L(o,t,r);p&&(p.parentLayerId=n.id,n.sublayers||(n.sublayers=[]),n.sublayers.push(p))}}else{const p=b("LegendURL",o);if(p){const f=b("OnlineResource",p);f&&(n.legendUrl=f.getAttribute("xlink:href"))}}}),n.extent=i?.toJSON(),n.dimensions=_("Dimension",e).filter(o=>o.getAttribute("name")&&o.getAttribute("units")&&o.textContent).map(o=>{const p=o.getAttribute("name"),f=o.getAttribute("units"),m=o.textContent,x=o.getAttribute("unitSymbol")??void 0,v=o.getAttribute("default")??void 0,S=T("default",o,"0")!=="0",I=T("nearestValue",o,"0")!=="0",h=T("current",o,"0")!=="0";return Ne({name:p,units:f})?{name:"time",units:"ISO8601",extent:me(m),default:me(v),multipleValues:S,nearestValue:I,current:h}:yt({name:p,units:f})?{name:"elevation",units:f,extent:ce(m),unitSymbol:x,default:ce(v),multipleValues:S,nearestValue:I}:{name:p,units:f,extent:de(m),unitSymbol:x,default:de(v),multipleValues:S,nearestValue:I}}),n}function ft(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}function Ie(e){return e.nodeType===Node.ELEMENT_NODE}function yt(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function Ne(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function ht(e,t){const r=[],n=we(e);for(const s in n.query)n.query.hasOwnProperty(s)&&(t.includes(s.toLowerCase())||r.push(s+"="+n.query[s]));return n.path+(r.length?"?"+r.join("&"):"")}function ce(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:parseFloat(s[0]),max:parseFloat(s[1]),resolution:s.length>=3&&s[2]!=="0"?parseFloat(s[2]):void 0}}).filter(U):r.map(n=>parseFloat(n))}function de(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:s[0],max:s[1],resolution:s.length>=3&&s[2]!=="0"?s[2]:void 0}}).filter(U):r}function me(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:X(s[0]),max:X(s[1]),resolution:s.length>=3&&s[2]!=="0"?gt(s[2]):void 0}}).filter(U):r.map(n=>X(n))}function X(e){return _e.fromISO(e,{zone:Ce.utcInstance}).toJSDate()}function gt(e){const t=/(?:p(\d+y|\d+(?:\.|,)\d+y)?(\d+m|\d+(?:\.|,)\d+m)?(\d+d|\d+(?:\.|,)\d+d)?)?(?:t(\d+h|\d+(?:\.|,)\d+h)?(\d+m|\d+(?:\.|,)\d+m)?(\d+s|\d+(?:\.|,)\d+s)?)?/i,r=e.match(t);return r?{years:$(r[1]),months:$(r[2]),days:$(r[3]),hours:$(r[4]),minutes:$(r[5]),seconds:$(r[6])}:null}function $(e){if(!e)return 0;const t=/(?:\d+(?:\.|,)\d+|\d+)/,r=e.match(t);if(!r)return 0;const n=r[0].replace(",",".");return Number(n)}function G(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const bt="0000-01-01T00:00:00Z",xt="9999-12-31T23:59:59Z";function fe(e){if(!e||e.isAllTime||e.isEmpty)return;const{start:t,end:r}=e;return t&&r&&t.getTime()===r.getTime()?`${G(t)}`:`${t?G(t):bt}/${r?G(r):xt}`}const ye=new Set([102100,3857,102113,900913]),wt=new Set([3395,54004]);function vt(e,t){let r=e.wkid;return t==null?r:(r!=null&&t.includes(r)||!e.latestWkid||(r=e.latestWkid),r!=null&&ye.has(r)?t.find(n=>ye.has(n))||t.find(n=>wt.has(n))||102100:r)}const H=new qe({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function he(e){return e==="text/html"}function ge(e){return e==="text/plain"}let c=class extends Ve(at(it(Be(nt(st(rt(Ye))))))){constructor(...e){super(...e),this.allSublayers=new We({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormats=null,this.featureInfoUrl=null,this.fetchFeatureInfoFunction=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.version=null,this.addHandles([C(()=>this.sublayers,"after-add",({item:t})=>{t.parent=t.layer=this},N),C(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},N),J(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=n.layer=this},N)])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this.allSublayers.destroy()}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(ke).then(()=>this._fetchService(t))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return r?new R({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]}):null}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}get featureInfoFormat(){return this.featureInfoFormats==null?null:this.featureInfoFormats.find(he)??this.featureInfoFormats.find(ge)??null}set featureInfoFormat(e){e==null?(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat")):(he(e)||ge(e))&&this._override("featureInfoFormat",e)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new F(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference?.wkid;e&&r?(t.spatialReferences=e.filter(n=>n!==r),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return be(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return be(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const s=new Map,l=e.flatten(({sublayers:i})=>i??[]);for(const i of l)if(typeof i.parent?.id=="number"){const d=s.get(i.parent.id);d!=null?d.push(i.id):s.set(i.parent.id,[i.id])}for(const i of l){const d={sublayer:i,...n},o=i.write({parentLayerId:typeof i.parent?.id=="number"?i.parent.id:-1},d);if(s.has(i.id)&&(o.sublayerIds=s.get(i.id)),!i.sublayers&&i.name){const p=i.write({},d);delete p.id,t.layers.push(p)}}t.visibleLayers=l.filter(({visible:i,sublayers:d})=>i&&!d).map(({name:i})=>i).toArray()}set url(e){if(!e)return void this._set("url",e);const{path:t,query:r}=we(e);for(const s in r)/^(request|service)$/i.test(s)&&delete r[s];const n=se(t,r??{});this._set("url",n)}createExportImageParameters(e,t,r,n){const s=n?.pixelRatio??1,l=ie({extent:e,width:t})*s,i=new ae({layer:this,scale:l}),{xmin:d,ymin:o,xmax:p,ymax:f,spatialReference:m}=e,x=vt(m,this.spatialReferences),v=this.version==="1.3.0"&&z(x)?`${o},${d},${f},${p}`:`${d},${o},${p},${f}`,S=i.toJSON(),I=this.version==="1.3.0"?"crs":"srs";return{bbox:v,[I]:x==null||isNaN(x)?void 0:"EPSG:"+x,...S}}async fetchImage(e,t,r,n){const s=this.mapUrl,l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const o=document.createElement("canvas");return o.width=t,o.height=r,o}const i=fe(n?.timeExtent),d={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...l,time:i,...this.refreshParameters}),signal:n?.signal};return k(s??"",d).then(o=>o.data)}async fetchImageBitmap(e,t,r,n){const s=this.mapUrl??"",l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const p=document.createElement("canvas");return p.width=t,p.height=r,p}const i=fe(n?.timeExtent),d={responseType:"blob",query:this._mixCustomParameters({width:t,height:r,...l,time:i,...this.refreshParameters}),signal:n?.signal},{data:o}=await k(s,d);return ut(o,s,n?.signal)}fetchFeatureInfo(e,t,r,n,s){const l=ie({extent:e,width:t}),i=new ae({layer:this,scale:l}),d=dt(i.visibleSublayers);if(this.featureInfoUrl==null||d==null)return Promise.resolve([]);if(this.fetchFeatureInfoFunction==null&&this.featureInfoFormat==null)return Promise.resolve([]);const o=this.version==="1.3.0"?{I:n,J:s}:{x:n,y:s},p={query_layers:d,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...o},f={...this.createExportImageParameters(e,t,r),...p},m=this._mixCustomParameters(f);return this.fetchFeatureInfoFunction!=null?this.fetchFeatureInfoFunction(m):this._defaultFetchFeatureInfoFunction(se(this.featureInfoUrl,m))}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}findSublayerByName(e){return this.allSublayers.find(t=>t.name===e)}serviceSupportsSpatialReference(e){return De(this.url)||this.spatialReferences!=null&&this.spatialReferences.some(t=>{const r=t===900913?F.WebMercator:new F({wkid:t});return Xe(r,e)})}_defaultFetchFeatureInfoFunction(e){const t=document.createElement("iframe");t.src=Ge(e),t.style.border="none",t.style.margin="0",t.style.width="100%",t.setAttribute("sandbox","");const r=new He({title:this.title,content:t}),n=new Je({sourceLayer:this,popupTemplate:r});return Promise.resolve([n])}async _fetchService(e){if(!this.resourceInfo&&this.parsedUrl?.path){const{path:t,query:r}=this.parsedUrl,{data:n}=await k(t,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...r,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=ct(n)}if(this.parsedUrl){const t=new ze(this.parsedUrl.path),{httpsDomains:r}=Ze.request;t.scheme!=="https"||t.port&&t.port!=="443"||!t.host||r.includes(t.host)||r.push(t.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function St(e,t){return e.some(r=>{for(const n in r)if(et(r,n,null,t))return!0;return!1})}function be(e,t,r){e=e??[];const n=new Map;e.every(l=>l.id==null)&&(e=Ke(e)).forEach((l,i)=>l.id=i);for(const l of e){const i=new Z;i.read(l,t),r&&!r.includes(i.name)&&(i.visible=!1),n.set(i.id,i)}const s=[];for(const l of e){const i=l.id!=null?n.get(l.id):null;if(i)if(l.parentLayerId!=null&&l.parentLayerId>=0){const d=n.get(l.parentLayerId);if(!d)continue;d.sublayers||(d.sublayers=new K),d.sublayers.push(i)}else s.push(i)}return s}a([u({readOnly:!0})],c.prototype,"allSublayers",void 0),a([u({json:{type:Object,write:!0}})],c.prototype,"customParameters",void 0),a([u({json:{type:Object,write:!0}})],c.prototype,"customLayerParameters",void 0),a([u({type:String,json:{write:!0}})],c.prototype,"copyright",void 0),a([u()],c.prototype,"description",void 0),a([u({readOnly:!0})],c.prototype,"dimensions",void 0),a([u({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],c.prototype,"fullExtent",void 0),a([O(["web-document","portal-item"],"fullExtent",["extent"])],c.prototype,"readFullExtentFromItemOrMap",null),a([D(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],c.prototype,"writeFullExtent",null),a([u()],c.prototype,"fullExtents",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"featureInfoFormat",null),a([u({type:[String],readOnly:!0})],c.prototype,"featureInfoFormats",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"featureInfoUrl",void 0),a([u()],c.prototype,"fetchFeatureInfoFunction",void 0),a([u({type:String,json:{origins:{"web-document":{default:"image/png",type:H.jsonValues,read:{reader:H.read,source:"format"},write:{writer:H.write,target:"format"}}}}})],c.prototype,"imageFormat",void 0),a([O("imageFormat",["supportedImageFormatTypes"])],c.prototype,"readImageFormat",null),a([u({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],c.prototype,"imageMaxHeight",void 0),a([u({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],c.prototype,"imageMaxWidth",void 0),a([u()],c.prototype,"imageTransparency",void 0),a([u(ot)],c.prototype,"legendEnabled",void 0),a([u({type:["show","hide","hide-children"]})],c.prototype,"listMode",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"mapUrl",void 0),a([u({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],c.prototype,"isReference",void 0),a([u({type:["WMS"]})],c.prototype,"operationalLayerType",void 0),a([u()],c.prototype,"resourceInfo",void 0),a([u({type:F,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],c.prototype,"spatialReference",void 0),a([O(["web-document","portal-item"],"spatialReference",["spatialReferences"])],c.prototype,"readSpatialReferenceFromItemOrDocument",null),a([u({type:[Qe],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],c.prototype,"spatialReferences",void 0),a([D(["web-document","portal-item"],"spatialReferences")],c.prototype,"writeSpatialReferences",null),a([u({type:K.ofType(Z),json:{write:{target:"layers",overridePolicy(e,t,r){if(St(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],c.prototype,"sublayers",void 0),a([O(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],c.prototype,"readSublayersFromItemOrMap",null),a([O("service","sublayers",["layers"])],c.prototype,"readSublayers",null),a([D("sublayers",{layers:{type:[Z]},visibleLayers:{type:[String]}})],c.prototype,"writeSublayers",null),a([u({json:{read:!1},readOnly:!0,value:"wms"})],c.prototype,"type",void 0),a([u(lt)],c.prototype,"url",null),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"version",void 0),c=a([xe("esri.layers.WMSLayer")],c);const Tt=c;export{Tt as default};