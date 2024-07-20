import{aa as t,ab as r,ac as I,d$ as _,dx as E,cz as R,s as U,iL as h,dl as J,e1 as k,d as W,n as Y,bm as X,e4 as D,e5 as H,bz as C,e8 as O,ec as L,ei as T,e6 as Q,cI as z,c1 as y,f9 as G,dY as V,dX as f,ef as Z,dJ as A}from"./index.7eb0daf2.js";import"./UniqueValueRenderer.8069ab57.js";import{m as B,u as M}from"./jsonUtils.93554317.js";import{S as K}from"./MultiOriginJSONSupport.b5976a45.js";import{l as ee,o as te}from"./clientSideDefaults.e011af70.js";import{v as re,W as ie,z as oe,Y as se,S as ae}from"./wfsUtils.4653566f.js";import{d as ne}from"./FeatureSet.78257171.js";import{e as pe}from"./CustomParametersMixin.b4d39f07.js";import{c as le}from"./FeatureEffectLayer.11729363.js";import{c as de}from"./FeatureReductionLayer.8358918b.js";import{b as ue}from"./OperationalLayer.33897364.js";import{p as me}from"./OrderedLayer.7fae9ad1.js";import{j as ye}from"./PortalLayer.5cf51695.js";import{f as ce}from"./RefreshableLayer.908b9ff1.js";import{l as fe}from"./TemporalLayer.859e579f.js";import{d as he,l as ge,y as we,f as ve,s as Fe,t as xe,p as be}from"./commonProperties.a37169f8.js";import{s as Oe}from"./fieldProperties.80f53b4c.js";import{C as Se,l as Ie}from"./labelingInfo.41bbc735.js";import{p as Re}from"./popupUtils.f17e95f0.js";import"./ColorStop.aa8650af.js";import"./diffUtils.080c04bc.js";import"./colorRamps.272b71a1.js";import"./sizeVariableUtils.34255976.js";import"./visualVariableUtils.12ee1cdb.js";import"./jsonUtils.185b82ae.js";import"./defaults.e5a1167a.js";import"./defaultsJSON.ba72df2f.js";import"./styleUtils.7f2b22b0.js";import"./LRUCache.6f8863ed.js";import"./Version.856e86b2.js";import"./FieldsIndex.333d0734.js";import"./UnknownTimeZone.4756be49.js";import"./OverrideHelper.b5d99b26.js";import"./colorUtils.085072a2.js";import"./vec42.faaf2b1c.js";import"./vec4f64.7b667e97.js";import"./utils.dbb84a38.js";import"./quantizationUtils.fe6b1e6e.js";import"./heatmapUtils.b763e953.js";import"./QueryEngineCapabilities.a12653c7.js";import"./geojson.10d37f4c.js";import"./date.9883f6ae.js";import"./OptimizedFeature.32c00f5f.js";import"./xmlUtils.41bbbcaa.js";import"./FeatureEffect.00e4e7d7.js";import"./FeatureReductionSelection.49649196.js";import"./featureLayerUtils.1828d741.js";import"./RelationshipQuery.a9d69ee6.js";import"./MD5.f6d873db.js";import"./OrderByInfo.b53e85dd.js";import"./portalItemUtils.761d02ba.js";import"./TimeInfo.d882fe8e.js";import"./labelUtils.37b9d8d8.js";let d=class extends _{constructor(){super(...arguments),this._connection=null,this._workerHandler=null,this.capabilities=ee(!1,!1),this.type="wfs",this.refresh=E(async()=>{await this.load();const e={customParameters:this.layer.customParameters,maxRecordCount:this.layer.maxRecordCount,maxTotalRecordCount:this.layer.maxTotalRecordCount,maxPageCount:this.layer.maxPageCount},{extent:o}=await this._workerHandler.refresh(e);return o&&(this.sourceJSON.extent=o),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}})}load(e){const o=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:o})),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null,this._workerHandler=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,o={}){const s=await this.queryFeaturesJSON(e,o);return ne.fromJSON(s)}async queryFeaturesJSON(e,o={}){return await this.load(o),this._workerHandler.queryFeatures(e?e.toJSON():void 0,o)}async queryFeatureCount(e,o={}){return await this.load(o),this._workerHandler.queryFeatureCount(e?e.toJSON():void 0,o)}async queryObjectIds(e,o={}){return await this.load(o),this._workerHandler.queryObjectIds(e?e.toJSON():void 0,o)}async queryExtent(e,o={}){await this.load(o);const s=await this._workerHandler.queryExtent(e?e.toJSON():void 0,o);return{count:s.count,extent:R.fromJSON(s.extent)}}async querySnapping(e,o={}){return await this.load(o),this._workerHandler.querySnapping(e,o)}async _createLoadOptions(e){const{url:o,customParameters:s,name:n,namespaceUri:p,fields:a,geometryType:u,maxRecordCount:m,maxPageCount:g,maxTotalRecordCount:w,swapXY:v}=this.layer,c=this.layer.originOf("spatialReference")==="defaults"?void 0:this.layer.spatialReference;if(!o)throw new U("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await re(o,{customParameters:s,...e}));const P=["fields","geometryType","name","namespaceUri","swapXY"].some(F=>this.layer[F]==null),l=P?await ie(this.wfsCapabilities,n,p,{spatialReference:c,customParameters:s,signal:e?.signal}):{...oe(a??[]),geometryType:u,name:n,namespaceUri:p,spatialReference:c,swapXY:v},j=se(this.wfsCapabilities.readFeatureTypes(),l.name,l.namespaceUri),$=h.toJSON(l.geometryType),{operations:b}=this.wfsCapabilities,q=b.GetFeature.url,N=b.GetFeature.outputFormat;return{customParameters:s,featureType:j,fields:l.fields?.map(F=>F.toJSON())??[],geometryField:l.geometryField,geometryType:$,getFeatureUrl:q,getFeatureOutputFormat:N,maxRecordCount:m,maxPageCount:g,maxTotalRecordCount:w,objectIdField:l.objectIdField,spatialReference:l.spatialReference?.toJSON(),swapXY:!!l.swapXY}}async _startWorker(e){const[o,s]=await J([this._createLoadOptions(e),k("WFSSourceWorker",{...e,strategy:W("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),n=o.error||s.error||null,p=s.value||null;if(n)throw p&&p.close(),n;const a=o.value;this._connection=s.value,this._workerHandler=this._connection.createInvokeProxy();const u=await this._workerHandler.load(a,e);for(const m of u.warnings)Y.getLogger(this.layer).warn("#load()",`${m.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:m});this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:X},extent:u.extent,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:te(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:a.maxRecordCount,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}}}};t([r()],d.prototype,"capabilities",void 0),t([r({constructOnly:!0})],d.prototype,"layer",void 0),t([r()],d.prototype,"sourceJSON",void 0),t([r()],d.prototype,"type",void 0),t([r()],d.prototype,"wfsCapabilities",void 0),d=t([I("esri.layers.graphics.sources.WFSSource")],d);var x;const S=Oe();let i=x=class extends me(pe(de(le(D(fe(ce(H(ue(ye(K(A))))))))))){static fromWFSLayerInfo(e){const{customParameters:o,fields:s,geometryField:n,geometryType:p,name:a,namespaceUri:u,objectIdField:m,spatialReference:g,swapXY:w,url:v,wfsCapabilities:c}=e;return new x({customParameters:o,fields:s,geometryField:n,geometryType:p,name:a,namespaceUri:u,objectIdField:m,spatialReference:g,swapXY:w,url:v,wfsCapabilities:c})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxRecordCount=3e3,this.maxPageCount=10,this.maxTotalRecordCount=2e5,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=C.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),O(this.renderer,this.fieldsIndex),L(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){return this.source?.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,o,s){const n=e.filter(p=>p.name!==ae);this.geometryField&&n.unshift(new T({name:this.geometryField,alias:this.geometryField,type:"geometry"})),Q(s,n.map(p=>p.toJSON()),o)}get parsedUrl(){return z(this.url)}set renderer(e){O(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){return this.source?.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return Re(this,e)}createQuery(){const e=new y({returnGeometry:!0,outFields:["*"],where:this.definitionExpression||"1=1"}),{timeOffset:o,timeExtent:s}=this;return e.timeExtent=o!=null&&s!=null?s.offset(-o.value,o.unit):s||null,e}getFieldDomain(e,o){return this.getField(e)?.domain}getField(e){return this.fieldsIndex?.get(e)}queryFeatures(e,o){return this.load().then(()=>this.source.queryFeatures(y.from(e)||this.createQuery(),o)).then(s=>{if(s?.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(e,o){return this.load().then(()=>this.source.queryObjectIds(y.from(e)||this.createQuery(),o))}queryFeatureCount(e,o){return this.load().then(()=>this.source.queryFeatureCount(y.from(e)||this.createQuery(),o))}queryExtent(e,o){return this.load().then(()=>this.source.queryExtent(y.from(e)||this.createQuery(),o))}async hasDataChanged(){try{const{dataChanged:e,updates:o}=await this.source.refresh();return o!=null&&this.read(o,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};t([r({readOnly:!0})],i.prototype,"capabilities",null),t([r({type:String})],i.prototype,"copyright",void 0),t([r({readOnly:!0})],i.prototype,"createQueryVersion",null),t([r({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],i.prototype,"customParameters",void 0),t([r(G("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),t([r({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),t([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([r({type:String})],i.prototype,"displayField",void 0),t([r(he)],i.prototype,"elevationInfo",void 0),t([r({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],i.prototype,"featureUrl",void 0),t([r({type:[T],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],i.prototype,"fields",void 0),t([V("fields")],i.prototype,"writeFields",null),t([r(S.fieldsIndex)],i.prototype,"fieldsIndex",void 0),t([r({type:R,json:{name:"extent"}})],i.prototype,"fullExtent",void 0),t([r()],i.prototype,"geometryField",void 0),t([r({type:String,json:{read:{source:"layerDefinition.geometryType",reader:h.read},write:{target:"layerDefinition.geometryType",writer:h.write,ignoreOrigin:!0},origins:{service:{read:h.read}}}})],i.prototype,"geometryType",void 0),t([r({type:String})],i.prototype,"id",void 0),t([r(ge)],i.prototype,"labelsVisible",void 0),t([r({type:[Se],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Ie},write:!0}})],i.prototype,"labelingInfo",void 0),t([r(we)],i.prototype,"legendEnabled",void 0),t([r({type:["show","hide"]})],i.prototype,"listMode",void 0),t([r({type:String})],i.prototype,"objectIdField",void 0),t([r({type:["WFS"]})],i.prototype,"operationalLayerType",void 0),t([r({type:f,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],i.prototype,"maxRecordCount",void 0),t([r({type:f})],i.prototype,"maxPageCount",void 0),t([r({type:f})],i.prototype,"maxTotalRecordCount",void 0),t([r({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],i.prototype,"mode",void 0),t([r({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],i.prototype,"name",void 0),t([r({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],i.prototype,"namespaceUri",void 0),t([r(ve)],i.prototype,"opacity",void 0),t([r(S.outFields)],i.prototype,"outFields",void 0),t([r({readOnly:!0})],i.prototype,"parsedUrl",null),t([r(Fe)],i.prototype,"popupEnabled",void 0),t([r({type:Z,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),t([r({types:B,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:M,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],i.prototype,"renderer",null),t([r(xe)],i.prototype,"screenSizePerspectiveEnabled",void 0),t([r({readOnly:!0})],i.prototype,"source",void 0),t([r({type:C,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],i.prototype,"spatialReference",void 0),t([r({readOnly:!0,type:[f],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],i.prototype,"spatialReferences",void 0),t([r({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],i.prototype,"swapXY",void 0),t([r({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],i.prototype,"title",void 0),t([r({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),t([r(be)],i.prototype,"url",void 0),t([r({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],i.prototype,"version",void 0),t([r()],i.prototype,"wfsCapabilities",null),i=x=t([I("esri.layers.WFSLayer")],i);const Rt=i;export{Rt as default};
