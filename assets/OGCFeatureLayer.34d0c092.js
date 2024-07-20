import{aa as t,ab as o,ac as $,d$ as L,h6 as w,bz as g,e2 as N,s as R,e4 as z,e5 as J,e8 as b,c1 as x,ec as H,ei as U,cz as Z,iL as F,ef as k,dJ as V}from"./index.7eb0daf2.js";import"./UniqueValueRenderer.8069ab57.js";import{m as W,u as K}from"./jsonUtils.93554317.js";import{S as X}from"./MultiOriginJSONSupport.b5976a45.js";import{R as Y,x as I,C as O,P as ee,O as te,N as re,q as oe,v as ie,k as se}from"./ogcFeatureUtils.01021563.js";import{d as pe}from"./FeatureSet.78257171.js";import{i as ne}from"./APIKeyMixin.a389fc6d.js";import{e as ae}from"./CustomParametersMixin.b4d39f07.js";import{c as le}from"./FeatureEffectLayer.11729363.js";import{c as ue}from"./FeatureReductionLayer.8358918b.js";import{b as de}from"./OperationalLayer.33897364.js";import{p as ce}from"./OrderedLayer.7fae9ad1.js";import{j as ye}from"./PortalLayer.5cf51695.js";import{f as me}from"./RefreshableLayer.908b9ff1.js";import{l as fe}from"./TemporalLayer.859e579f.js";import{d as he,l as ge,y as ve,s as Se,t as Ce,p as we}from"./commonProperties.a37169f8.js";import{n as Re}from"./FeatureType.f4c0cb30.js";import{s as be}from"./fieldProperties.80f53b4c.js";import{C as xe,l as Fe}from"./labelingInfo.41bbc735.js";import{p as Ie}from"./popupUtils.f17e95f0.js";import"./ColorStop.aa8650af.js";import"./diffUtils.080c04bc.js";import"./colorRamps.272b71a1.js";import"./sizeVariableUtils.34255976.js";import"./visualVariableUtils.12ee1cdb.js";import"./jsonUtils.185b82ae.js";import"./defaults.e5a1167a.js";import"./defaultsJSON.ba72df2f.js";import"./styleUtils.7f2b22b0.js";import"./LRUCache.6f8863ed.js";import"./Version.856e86b2.js";import"./FieldsIndex.333d0734.js";import"./UnknownTimeZone.4756be49.js";import"./OverrideHelper.b5d99b26.js";import"./colorUtils.085072a2.js";import"./vec42.faaf2b1c.js";import"./vec4f64.7b667e97.js";import"./utils.dbb84a38.js";import"./quantizationUtils.fe6b1e6e.js";import"./heatmapUtils.b763e953.js";import"./featureConversionUtils.c6dfa488.js";import"./OptimizedFeature.32c00f5f.js";import"./OptimizedFeatureSet.6fd3bcb1.js";import"./geojson.10d37f4c.js";import"./date.9883f6ae.js";import"./clientSideDefaults.e011af70.js";import"./QueryEngineCapabilities.a12653c7.js";import"./sourceUtils.62033bd7.js";import"./FeatureEffect.00e4e7d7.js";import"./FeatureReductionSelection.49649196.js";import"./featureLayerUtils.1828d741.js";import"./RelationshipQuery.a9d69ee6.js";import"./MD5.f6d873db.js";import"./OrderByInfo.b53e85dd.js";import"./portalItemUtils.761d02ba.js";import"./TimeInfo.d882fe8e.js";import"./FeatureTemplate.7907b31e.js";import"./labelUtils.37b9d8d8.js";let d=class extends L{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:i,spatialReference:s,supportedCrs:p},layer:{apiKey:l,customParameters:a,effectiveMaxRecordCount:n}}=this;return{type:"ogc-source",collection:e,layerDefinition:i,maxRecordCount:n,queryParameters:{apiKey:l,customParameters:a},spatialReference:s,supportedCrs:p}}queryExtent(e,i={}){return null}queryFeatureCount(e,i={}){return null}queryFeatures(e,i={}){return this.queryFeaturesJSON(e,i).then(s=>pe.fromJSON(s))}queryFeaturesJSON(e,i={}){const s=this.getSource();return this.load(i).then(()=>Y(s,e,i))}queryObjectIds(e,i={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,i){const s=new RegExp(`^${w(i)}$`,"i");return e.conformsTo.some(p=>s.test(p))??!1}_getCapabilities(e,i){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:i,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(e){const i=e?.components?.parameters;return i?.limit?.schema?.maximum??i?.limitFeatures?.schema?.maximum}_getStorageSpatialReference(e){const i=e.storageCrs??I,s=O(i);return s==null?g.WGS84:new g({wkid:s})}_getSupportedSpatialReferences(e,i){const s="#/crs",p=e.crs??[I],l=p.includes(s)?p.filter(n=>n!==s).concat(i.crs??[]):p,a=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return l.filter(n=>!a.test(n))}async _loadOGCServices(e,i){const s=i!=null?i.signal:null,{apiKey:p,collectionId:l,customParameters:a,fields:n,geometryType:D,hasZ:T,objectIdField:j,timeInfo:P,url:E}=e,_={fields:n?.map(u=>u.toJSON()),geometryType:N.toJSON(D),hasZ:T??!1,objectIdField:j,timeInfo:P?.toJSON()},c={apiKey:p,customParameters:a,signal:s},m=await ee(E,c),[v,S]=await Promise.all([te(m,c),re(m,c)]);if(!this._conformsToType(v,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new R("ogc-feature-layer:no-geojson-support","Server does not support geojson");const y=S.collections.find(({id:u})=>u===l);if(!y)throw new R("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const q=this._conformsToType(v,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await oe(m,c):null,C=await ie(y,_,c),A=this._getMaxRecordCount(q),G=this._getCapabilities(C.hasZ,A),M=this._getStorageSpatialReference(y).toJSON(),Q=this._getSupportedSpatialReferences(y,S),B=new RegExp(`^${w(se)}`,"i"),f={};for(const u of Q){const h=O(u);h!=null&&(f[h]||(f[h]=u.replace(B,"")))}this.featureDefinition={capabilities:G,collection:y,layerDefinition:C,spatialReference:M,supportedCrs:f}}};t([o()],d.prototype,"featureDefinition",void 0),t([o({constructOnly:!0})],d.prototype,"layer",void 0),t([o()],d.prototype,"type",void 0),d=t([$("esri.layers.graphics.sources.OGCFeatureSource")],d);const Oe=be();let r=class extends ne(ae(ue(le(z(ce(fe(J(de(ye(me(X(V)))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){return this.maxRecordCount??this.capabilities?.query.maxRecordCount??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){b(e,this.fieldsIndex),this._set("renderer",e)}on(e,i){return super.on(e,i)}createPopupTemplate(e){return Ie(this,e)}createQuery(){return new x}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,i){let s,p=!1;const l=i?.feature?.attributes,a=this.typeIdField&&l?.[this.typeIdField];return a!=null&&this.types&&(p=this.types.some(n=>n.id==a&&(s=n.domains?.[e],s?.type==="inherited"&&(s=this._getLayerDomain(e)),!0))),p||s||(s=this._getLayerDomain(e)),s}queryFeatures(e,i){return this.load().then(()=>this.source.queryFeatures(x.from(e)||this.createQuery(),i)).then(s=>(s?.features?.forEach(p=>{p.layer=p.sourceLayer=this}),s))}serviceSupportsSpatialReference(e){return this.source?.serviceSupportsSpatialReference(e)??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),b(this.renderer,this.fieldsIndex),H(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const i of this.fields)if(i.name===e&&i.domain)return i.domain;return null}};t([o({readOnly:!0,json:{origins:{service:{read:!0}}}})],r.prototype,"capabilities",void 0),t([o({type:String,json:{write:!0}})],r.prototype,"collectionId",void 0),t([o({type:String})],r.prototype,"copyright",void 0),t([o({readOnly:!0})],r.prototype,"defaultPopupTemplate",null),t([o({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],r.prototype,"description",void 0),t([o({type:String})],r.prototype,"displayField",void 0),t([o({type:Number})],r.prototype,"effectiveMaxRecordCount",null),t([o(he)],r.prototype,"elevationInfo",void 0),t([o({type:[U],json:{origins:{service:{name:"layerDefinition.fields"}}}})],r.prototype,"fields",void 0),t([o(Oe.fieldsIndex)],r.prototype,"fieldsIndex",void 0),t([o({readOnly:!0,type:Z,json:{origins:{service:{name:"layerDefinition.extent"}}}})],r.prototype,"fullExtent",void 0),t([o({type:F.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:F.read}}}}})],r.prototype,"geometryType",void 0),t([o({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],r.prototype,"hasZ",void 0),t([o({type:Boolean,readOnly:!0})],r.prototype,"isTable",null),t([o({type:[xe],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Fe},write:!0}}}})],r.prototype,"labelingInfo",void 0),t([o(ge)],r.prototype,"labelsVisible",void 0),t([o(ve)],r.prototype,"legendEnabled",void 0),t([o({type:Number})],r.prototype,"maxRecordCount",void 0),t([o({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],r.prototype,"objectIdField",void 0),t([o({type:["OGCFeatureLayer"]})],r.prototype,"operationalLayerType",void 0),t([o(Se)],r.prototype,"popupEnabled",void 0),t([o({type:k,json:{name:"popupInfo",write:!0}})],r.prototype,"popupTemplate",void 0),t([o({types:W,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:K,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],r.prototype,"renderer",null),t([o(Ce)],r.prototype,"screenSizePerspectiveEnabled",void 0),t([o({readOnly:!0})],r.prototype,"source",void 0),t([o({readOnly:!0,type:g,json:{origins:{service:{read:!0}}}})],r.prototype,"spatialReference",void 0),t([o({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],r.prototype,"title",void 0),t([o({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),t([o({type:String,readOnly:!0})],r.prototype,"typeIdField",void 0),t([o({type:[Re]})],r.prototype,"types",void 0),t([o(we)],r.prototype,"url",void 0),r=t([$("esri.layers.OGCFeatureLayer")],r);const Pt=r;export{Pt as default};
