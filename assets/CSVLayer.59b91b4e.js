import{aa as i,ab as r,ac as d,d$ as v,dx as w,cz as S,e1 as O,d as F,ed as b,j1 as I,e$ as q,bz as N,cM as _,cI as J,c1 as l,s as c}from"./index.7eb0daf2.js";import j from"./FeatureLayer.aed98d1b.js";import{d as x}from"./FeatureSet.78257171.js";import{l as C}from"./clientSideDefaults.e011af70.js";import"./UniqueValueRenderer.8069ab57.js";import"./ColorStop.aa8650af.js";import"./diffUtils.080c04bc.js";import"./colorRamps.272b71a1.js";import"./sizeVariableUtils.34255976.js";import"./visualVariableUtils.12ee1cdb.js";import"./jsonUtils.185b82ae.js";import"./defaults.e5a1167a.js";import"./defaultsJSON.ba72df2f.js";import"./styleUtils.7f2b22b0.js";import"./jsonUtils.93554317.js";import"./LRUCache.6f8863ed.js";import"./Version.856e86b2.js";import"./FieldsIndex.333d0734.js";import"./UnknownTimeZone.4756be49.js";import"./OverrideHelper.b5d99b26.js";import"./colorUtils.085072a2.js";import"./vec42.faaf2b1c.js";import"./vec4f64.7b667e97.js";import"./utils.dbb84a38.js";import"./quantizationUtils.fe6b1e6e.js";import"./heatmapUtils.b763e953.js";import"./MultiOriginJSONSupport.b5976a45.js";import"./commonProperties.a37169f8.js";import"./FeatureLayerBase.dd6763e4.js";import"./featureLayerUtils.1828d741.js";import"./RelationshipQuery.a9d69ee6.js";import"./LayerFloorInfo.164b006f.js";import"./Relationship.ee67ec43.js";import"./serviceCapabilitiesUtils.21de2819.js";import"./editsZScale.3b0b1c90.js";import"./queryZScale.835a340e.js";import"./APIKeyMixin.a389fc6d.js";import"./ArcGISService.c7559039.js";import"./CustomParametersMixin.b4d39f07.js";import"./EditBusLayer.979b288a.js";import"./FeatureEffectLayer.11729363.js";import"./FeatureEffect.00e4e7d7.js";import"./FeatureReductionLayer.8358918b.js";import"./FeatureReductionSelection.49649196.js";import"./labelingInfo.41bbc735.js";import"./labelUtils.37b9d8d8.js";import"./MD5.f6d873db.js";import"./OperationalLayer.33897364.js";import"./OrderedLayer.7fae9ad1.js";import"./OrderByInfo.b53e85dd.js";import"./PortalLayer.5cf51695.js";import"./portalItemUtils.761d02ba.js";import"./RefreshableLayer.908b9ff1.js";import"./TemporalLayer.859e579f.js";import"./TimeInfo.d882fe8e.js";import"./FeatureTemplate.7907b31e.js";import"./FeatureType.f4c0cb30.js";import"./fieldProperties.80f53b4c.js";import"./versionUtils.9e2a095a.js";import"./styleUtils.f0558e3a.js";import"./TopFeaturesQuery.0af13513.js";import"./popupUtils.f17e95f0.js";import"./interfaces.c34ab3ac.js";import"./QueryEngineCapabilities.a12653c7.js";let a=class extends v{constructor(t){super(t),this.type="csv",this.refresh=w(async e=>{await this.load();const{extent:s,timeExtent:n}=await this._connection.invoke("refresh",e);return s&&(this.sourceJSON.extent=s),n&&(this.sourceJSON.timeInfo.timeExtent=[n.start,n.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(t){const e=t!=null?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(t,e={}){await this.load(e);const s=await this._connection.invoke("queryFeatures",t?t.toJSON():null,e);return x.fromJSON(s)}async queryFeaturesJSON(t,e={}){return await this.load(e),this._connection.invoke("queryFeatures",t?t.toJSON():null,e)}async queryFeatureCount(t,e={}){return await this.load(e),this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)}async queryObjectIds(t,e={}){return await this.load(e),this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)}async queryExtent(t,e={}){await this.load(e);const s=await this._connection.invoke("queryExtent",t?t.toJSON():null,e);return{count:s.count,extent:S.fromJSON(s.extent)}}async querySnapping(t,e={}){return await this.load(e),this._connection.invoke("querySnapping",t,e)}async _startWorker(t){this._connection=await O("CSVSourceWorker",{strategy:F("feature-layers-workers")?"dedicated":"local",signal:t,registryTarget:this});const{url:e,delimiter:s,fields:n,latitudeField:m,longitudeField:h,spatialReference:y,timeInfo:f}=this.loadOptions,p=await this._connection.invoke("load",{url:e,customParameters:this.customParameters,parsingOptions:{delimiter:s,fields:n?.map(g=>g.toJSON()),latitudeField:m,longitudeField:h,spatialReference:y?.toJSON(),timeInfo:f?.toJSON()}},{signal:t});this.locationInfo=p.locationInfo,this.sourceJSON=p.layerDefinition,this.delimiter=p.delimiter}};i([r()],a.prototype,"type",void 0),i([r()],a.prototype,"loadOptions",void 0),i([r()],a.prototype,"customParameters",void 0),i([r()],a.prototype,"locationInfo",void 0),i([r()],a.prototype,"sourceJSON",void 0),i([r()],a.prototype,"delimiter",void 0),a=i([d("esri.layers.graphics.sources.CSVSource")],a);function u(t,e){throw new c(e,`CSVLayer (title: ${t.title}, id: ${t.id}) cannot be saved to a portal item`)}let o=class extends j{constructor(...t){super(...t),this.geometryType="point",this.capabilities=C(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=N.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(t,e){return typeof t=="string"?{url:t,...e}:t}load(t){const e=t!=null?t.signal:null,s=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},t).catch(_).then(async()=>this.initLayerProperties(await this.createGraphicsSource(e)));return this.addResolvingPromise(s),Promise.resolve(this)}get isTable(){return this.loaded&&this.geometryType==null}readWebMapLabelsVisible(t,e){return e.showLabels!=null?e.showLabels:!!e.layerDefinition?.drawingInfo?.labelingInfo}set url(t){if(!t)return void this._set("url",t);const e=J(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async createGraphicsSource(t){const e=new a({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField??void 0,longitudeField:this.longitudeField??void 0,spatialReference:this.spatialReference??void 0,timeInfo:this.timeInfo??void 0,url:this.url},customParameters:this.customParameters??void 0});return this._set("source",e),await e.load({signal:t}),this.read({locationInfo:e.locationInfo,columnDelimiter:e.delimiter},{origin:"service",url:this.parsedUrl}),e}queryFeatures(t,e){return this.load().then(()=>this.source.queryFeatures(l.from(t)||this.createQuery())).then(s=>{if(s?.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(t,e){return this.load().then(()=>this.source.queryObjectIds(l.from(t)||this.createQuery()))}queryFeatureCount(t,e){return this.load().then(()=>this.source.queryFeatureCount(l.from(t)||this.createQuery()))}queryExtent(t,e){return this.load().then(()=>this.source.queryExtent(l.from(t)||this.createQuery()))}read(t,e){super.read(t,e),e&&e.origin==="service"&&this.revert(["latitudeField","longitudeField"],"service")}write(t,e){return super.write(t,{...e,writeLayerSchema:!0})}clone(){throw new c("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(t){return u(this,"csv-layer:save")}async saveAs(t,e){return u(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return e!=null&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};i([r({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"capabilities",void 0),i([r({type:[","," ",";","|","	"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],o.prototype,"delimiter",void 0),i([r({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"editingEnabled",void 0),i([r({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],o.prototype,"fields",void 0),i([r({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),i([b("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],o.prototype,"readWebMapLabelsVisible",null),i([r({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],o.prototype,"latitudeField",void 0),i([r({type:["show","hide"]})],o.prototype,"listMode",void 0),i([r({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"locationType",void 0),i([r({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],o.prototype,"longitudeField",void 0),i([r({type:["CSV"]})],o.prototype,"operationalLayerType",void 0),i([r()],o.prototype,"outFields",void 0),i([r({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],o.prototype,"path",void 0),i([r({json:{read:!1},cast:null,type:a,readOnly:!0})],o.prototype,"source",void 0),i([r({json:{read:!1},value:"csv",readOnly:!0})],o.prototype,"type",void 0),i([r({json:{read:I,write:{isRequired:!0,ignoreOrigin:!0,writer:q}}})],o.prototype,"url",null),o=i([d("esri.layers.CSVLayer")],o);const Mt=o;export{Mt as default};
