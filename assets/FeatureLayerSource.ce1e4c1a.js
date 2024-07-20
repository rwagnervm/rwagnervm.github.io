import{cg as k,j3 as U,co as P,j4 as Q,hr as $,j5 as G,n as v,s as S,d7 as V,c2 as z,aT as j,aa as E,ab as O,ac as H,d$ as W,dx as X,a4 as Y,d as M,U as f,aK as x,cz as Z,ek as B,fv as K,e7 as T,$ as N,I as J,gO as tt,be as et,e6 as at,cM as st,j6 as rt,bz as it,c1 as nt}from"./index.7eb0daf2.js";import{i as ot}from"./MeshLocalVertexSpace.82c9e8da.js";import{a as ut}from"./meshVertexSpaceUtils.5f97af5a.js";import{N as lt,v as dt}from"./MeshTransform.97c24ed3.js";import{isFeatureIdentifierArrayWithGlobalId as ct,isFeatureIdentifierArrayWithObjectId as pt}from"./editingSupport.b9997e05.js";import{o as ht}from"./clientSideDefaults.e011af70.js";import{x as yt}from"./QueryTask.20e8c8fd.js";import{T as F}from"./featureLayerUtils.1828d741.js";import{F as mt}from"./infoFor3D.8ecd2df8.js";import{s as ft}from"./executeQueryJSON.b781982b.js";import{i as gt}from"./editsZScale.3b0b1c90.js";import{i as wt,c as bt,o as It,t as Rt}from"./EditBusLayer.979b288a.js";import"./mat4f64.a89cc140.js";import"./quat.2c7c64ba.js";import"./mat3f64.4564d6a3.js";import"./quatf64.bcd5b590.js";import"./vec42.faaf2b1c.js";import"./vec4f64.7b667e97.js";import"./QueryEngineCapabilities.a12653c7.js";import"./defaultsJSON.ba72df2f.js";import"./executeForIds.dd0800ec.js";import"./query.702fc5fe.js";import"./pbfQueryUtils.52d7ad7f.js";import"./pbf.72af564e.js";import"./OptimizedFeature.32c00f5f.js";import"./OptimizedFeatureSet.6fd3bcb1.js";import"./queryZScale.835a340e.js";import"./executeQueryPBF.76577f66.js";import"./featureConversionUtils.c6dfa488.js";import"./FeatureSet.78257171.js";import"./jsonUtils.93554317.js";import"./UniqueValueRenderer.8069ab57.js";import"./ColorStop.aa8650af.js";import"./diffUtils.080c04bc.js";import"./colorRamps.272b71a1.js";import"./sizeVariableUtils.34255976.js";import"./visualVariableUtils.12ee1cdb.js";import"./jsonUtils.185b82ae.js";import"./defaults.e5a1167a.js";import"./styleUtils.7f2b22b0.js";import"./LRUCache.6f8863ed.js";import"./Version.856e86b2.js";import"./FieldsIndex.333d0734.js";import"./UnknownTimeZone.4756be49.js";import"./OverrideHelper.b5d99b26.js";import"./colorUtils.085072a2.js";import"./utils.dbb84a38.js";import"./quantizationUtils.fe6b1e6e.js";import"./heatmapUtils.b763e953.js";import"./RelationshipQuery.a9d69ee6.js";async function D(e,t,a){const{geometry:r}=t,s={...t.attributes};if(a!=null&&r?.type==="mesh"){const{transformFieldRoles:i}=a,{origin:n,spatialReference:o,vertexSpace:u}=r,d=r.transform??new lt,l=u.type==="local",m=e.spatialReference,I=m.isGeographic,R=k(m,o),p=U(o,m)&&P(o,m);if(!(l&&I&&p||!l&&!I&&R))return null;const c=Q(n,o,m);if(c==null)return null;if(s[i.originX]=c.x,s[i.originY]=c.y,s[i.originZ]=c.z??0,d!=null){const{translation:q,scale:h,rotation:g}=d,y=l?1:$(o)/$(m);s[i.translationX]=q[0]*y,s[i.translationY]=q[2]*y,s[i.translationZ]=-q[1]*y,s[i.scaleX]=h[0],s[i.scaleY]=h[2],s[i.scaleZ]=h[1],s[i.rotationX]=g[0],s[i.rotationY]=g[2],s[i.rotationZ]=-g[1],s[i.rotationDeg]=g[3]}return{attributes:s}}return r==null?{attributes:s}:r.type==="mesh"||r.type==="extent"?null:{geometry:r.toJSON(),attributes:s}}async function qt(e,t){const a=await Promise.all((t.addAttachments??[]).map(i=>L(e,i))),r=await Promise.all((t.updateAttachments??[]).map(i=>L(e,i))),s=t.deleteAttachments??[];return a.length||r.length||s.length?{adds:a,updates:r,deletes:[...s]}:null}async function L(e,t){const{feature:a,attachment:r}=t,{globalId:s,name:i,contentType:n,data:o,uploadId:u}=r,d={globalId:s};if(a&&("attributes"in a?d.parentGlobalId=a.attributes?.[e.globalIdField]:a.globalId&&(d.parentGlobalId=a.globalId)),u)d.uploadId=u;else if(o){const l=await G(o);l&&(d.contentType=l.mediaType,d.data=l.data),o instanceof File&&(d.name=o.name)}return i&&(d.name=i),n&&(d.contentType=n),d}function St(e,t,a){if(!t||t.length===0)return[];if(a&&ct(t))return t.map(s=>s.globalId);if(pt(t))return t.map(s=>s.objectId);const r=a?e.globalIdField:e.objectIdField;return r?t.map(s=>s.getAttribute(r)):[]}function _t(e){const t=e?.assetMaps;if(t){for(const s of t.addResults)s.success||v.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${s.globalId}.`);for(const s of t.updateResults)s.success||v.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${s.globalId}.`)}const a=e?.attachments,r={addFeatureResults:e?.addResults?.map(b)??[],updateFeatureResults:e?.updateResults?.map(b)??[],deleteFeatureResults:e?.deleteResults?.map(b)??[],addAttachmentResults:a?.addResults?a.addResults.map(b):[],updateAttachmentResults:a?.updateResults?a.updateResults.map(b):[],deleteAttachmentResults:a?.deleteResults?a.deleteResults.map(b):[]};return e?.editMoment&&(r.editMoment=e.editMoment),r}function b(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new S("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}function A(e,t){return new V({attributes:e.attributes,geometry:z({...e.geometry,spatialReference:t})})}function Et(e,t){return{adds:e?.adds?.map(a=>A(a,t))||[],updates:e?.updates?.map(a=>({original:A(a[0],t),current:A(a[1],t)}))||[],deletes:e?.deletes?.map(a=>A(a,t))||[],spatialReference:t}}function Ot(e){const t=e.details.raw,a=+t.code,r=+t.extendedCode;return a===500&&(r===-2147217144||r===-2147467261)}const Ft=new j({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),At=new j({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let _=class extends W{constructor(e){super(e),this.type="feature-layer",this.supportedSourceTypes=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),this.refresh=X(async()=>{await this.load();const t=this.sourceJSON.editingInfo?.lastEditDate;if(t==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const a=t!==this.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:a,updates:a?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}),this._ongoingAssetUploads=new Map}load(e){const t=this.layer.sourceJSON,a=this._fetchService(t,{...e}).then(()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,e)).then(()=>this._ensureLatestMetadata(e));return this.addResolvingPromise(a),Promise.resolve(this)}initialize(){this.addHandles([Y(()=>{const e=this.layer;return e&&"lastEditsEventDate"in e?e.lastEditsEventDate:null},e=>this._handleLastEditsEventChange(e))])}destroy(){this._removeEditInterceptor()}get queryTask(){const{capabilities:e,parsedUrl:t,gdbVersion:a,spatialReference:r,fieldsIndex:s}=this.layer,i="infoFor3D"in this.layer?this.layer.infoFor3D:null,n="dynamicDataSource"in this.layer?this.layer.dynamicDataSource:null,o=M("featurelayer-pbf")&&e?.query.supportsFormatPBF&&i==null,u=e?.operations?.supportsQueryAttachments??!1;return new yt({url:t.path,pbfSupported:o,fieldsIndex:s,infoFor3D:i,dynamicDataSource:n,gdbVersion:a,sourceSpatialReference:r,queryAttachmentsSupported:u})}async addAttachment(e,t){await this.load();const{layer:a}=this;await F(a,"editing");const r=e.attributes[a.objectIdField],s=a.parsedUrl.path+"/"+r+"/addAttachment",i=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(t,i.query);try{const o=await f(s,{body:n});return b(o.data.addAttachmentResult)}catch(o){throw this._createAttachmentErrorResult(r,o)}}async updateAttachment(e,t,a){await this.load();const{layer:r}=this;await F(r,"editing");const s=e.attributes[r.objectIdField],i=r.parsedUrl.path+"/"+s+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:t}}),o=this._getFormDataForAttachment(a,n.query);try{const u=await f(i,{body:o});return b(u.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(s,u)}}async applyEdits(e,t){await this.load();const{layer:a}=this;await F(a,"editing");const r="infoFor3D"in a?a.infoFor3D:null,s=r!=null,i=s||(t?.globalIdUsed??!1),n=s?await this._uploadMeshesAndGetAssetMapEditsJSON(e):null,o=e.addFeatures?.map(w=>D(this.layer,w,r))??[],u=(await Promise.all(o)).filter(x),d=e.updateFeatures?.map(w=>D(this.layer,w,r))??[],l=(await Promise.all(d)).filter(x),m=St(this.layer,e.deleteFeatures,i);gt(u,l,a.spatialReference);const I=await qt(this.layer,e),R=a.capabilities.editing.supportsAsyncApplyEdits&&s,p=t?.gdbVersion||a.gdbVersion,c={gdbVersion:p,rollbackOnFailure:t?.rollbackOnFailureEnabled,useGlobalIds:i,returnEditMoment:t?.returnEditMoment,usePreviousEditMoment:t?.usePreviousEditMoment,async:R};await wt(this.layer.url,p,!0);const q=bt(this.layer.url,p||null);if(await It(a.url,p,a.historicMoment))throw new S("feature-layer-source:historic-version","Editing a historic version is not allowed");t?.returnServiceEditsOption?(c.edits=JSON.stringify([{id:a.layerId,adds:u.length?u:null,updates:l.length?l:null,deletes:m.length?m:null,attachments:I,assetMaps:n}]),c.returnServiceEditsOption=Ft.toJSON(t?.returnServiceEditsOption),c.returnServiceEditsInSourceSR=t?.returnServiceEditsInSourceSR):(c.adds=u.length?JSON.stringify(u):null,c.updates=l.length?JSON.stringify(l):null,c.deletes=m.length?i?JSON.stringify(m):m.join(","):null,c.attachments=I&&JSON.stringify(I),c.assetMaps=n!=null?JSON.stringify(n):void 0);const h=this._getLayerRequestOptions({method:"post",query:c});q&&(h.authMode="immediate",h.query.returnEditMoment=!0,h.query.sessionId=Rt);const g=t?.returnServiceEditsOption?a.url:a.parsedUrl.path;let y;try{y=R?await this._asyncApplyEdits(g+"/applyEdits",h):await f(g+"/applyEdits",h)}catch(w){if(!Ot(w))throw w;h.authMode="immediate",y=R?await this._asyncApplyEdits(g+"/applyEdits",h):await f(g+"/applyEdits",h)}return this._createEditsResult(y)}async deleteAttachments(e,t){await this.load();const{layer:a}=this;await F(a,"editing");const r=e.attributes[a.objectIdField],s=a.parsedUrl.path+"/"+r+"/deleteAttachments";try{return(await f(s,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(b)}catch(i){throw this._createAttachmentErrorResult(r,i)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then(async()=>{const a=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:r,url:s}=this.layer,{data:i}=await f(`${s}/${r}`,a),{id:n,extent:o,fullExtent:u,timeExtent:d}=i,l=o||u;return{id:n,fullExtent:l&&Z.fromJSON(l),timeExtent:d&&B.fromJSON({start:d[0],end:d[1]})}})}async queryAttachments(e,t={}){await this.load();const a=this._getLayerRequestOptions(t);return this.queryTask.executeAttachmentQuery(e,a)}async queryFeatures(e,t){await this.load();const a=await this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)});return e.outStatistics?.length&&a.features.length&&a.features.forEach(r=>{const s=r.attributes;e.outStatistics?.forEach(({outStatisticFieldName:i})=>{if(i){const n=i.toLowerCase();n&&n in s&&i!==n&&(s[i]=s[n],delete s[n])}})}),a}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}async fetchPublishingStatus(){if(!K(this.layer.url))return"unavailable";const e=T(this.layer.url,"status"),t=await f(e,{query:{f:"json"}});return At.fromJSON(t.data.status)}async uploadAssets(e,t){const{uploadAssets:a}=await N(()=>import("./uploadAssets.7183c025.js"),["assets/uploadAssets.7183c025.js","assets/index.7eb0daf2.js","assets/index.d3b4073e.css","assets/MeshTransform.97c24ed3.js","assets/infoFor3D.8ecd2df8.js","assets/mat4f64.a89cc140.js","assets/quat.2c7c64ba.js","assets/mat3f64.4564d6a3.js","assets/quatf64.bcd5b590.js","assets/vec42.faaf2b1c.js","assets/vec4f64.7b667e97.js","assets/uploadAssetErrors.3a5c68ef.js"]);return a(e,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},t)}_handleLastEditsEventChange(e){const t=this.layer;if(e==null||!("capabilities"in t)||!("effectiveCapabilities"in t)||!(!t.capabilities?.operations?.supportsEditing&&t.effectiveCapabilities?.operations?.supportsEditing))return;const a=t.url;a!=null&&("layerId"in t&&T(a,t.layerId.toString()),this._getOrCreateEditInterceptor(a).before=r=>{const s=r.requestOptions.method??"auto";if(s==="auto"||s==="head"){const i=r.requestOptions.query??{};i._ts=e.getTime(),r.requestOptions.query=i}})}_getOrCreateEditInterceptor(e){return this._editInterceptor==null&&(this._editInterceptor={urls:e},J.request.internalInterceptors.push(this._editInterceptor)),this._editInterceptor}_removeEditInterceptor(){this._editInterceptor!=null&&(tt(J.request.internalInterceptors,this._editInterceptor),this._editInterceptor=null)}async _asyncApplyEdits(e,t){const a=(await f(e,t)).data.statusUrl;for(;;){const r=(await f(a,{query:{f:"json"},responseType:"json"})).data;switch(r.status){case"Completed":return f(r.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new S("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new S("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await et(vt)}}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...e?.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const r={};M("featurelayer-advanced-symbols")&&(r.returnAdvancedSymbols=!0),t?.cacheBust&&(r._ts=Date.now());const{data:s}=await f(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:r,signal:t?.signal}));e=s}this.sourceJSON=await this._patchServiceJSON(e,t?.signal);const a=e.type;if(!this.supportedSourceTypes.has(a))throw new S("feature-layer-source:unsupported-type",`Source type "${a}" is not supported`)}async _patchServiceJSON(e,t){if(e.type!=="Table"&&e.geometryType&&!e?.drawingInfo?.renderer&&!e.defaultSymbol){const a=ht(e.geometryType).renderer;at("drawingInfo.renderer",a,e)}if(e.geometryType==="esriGeometryMultiPatch"&&e.infoFor3D&&(e.geometryType="mesh"),e.extent==null)try{const{data:a}=await f(this.layer.url,this._getLayerRequestOptions({signal:t}));a.spatialReference&&(e.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:a.spatialReference})}catch(a){st(a)}return e}async _ensureLatestMetadata(e){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...e,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(e){const{addAssetFeatures:t}=e;if(!t?.length||await this._areAllAssetsAlreadyMapped(t))return null;const a=e.addFeatures.filter(i=>i.geometry);if(t.length!==a.length+e.updateFeatures.length)throw new S("feature-layer-source:unsupported-mesh-edits","Mixing attribute only edits with mesh geometry edits is not currently supported");const r=new Array,s=new Map;for(const i of t){const{geometry:n}=i,{vertexSpace:o}=n;if(ut(o))r.push(n);else{const u=n.anchor,{convertMeshVertexSpace:d}=await N(()=>import("./convertMeshVertexSpace.67d8d4d6.js"),["assets/convertMeshVertexSpace.67d8d4d6.js","assets/index.7eb0daf2.js","assets/index.d3b4073e.css","assets/MeshVertexAttributes.611e9740.js","assets/vertexSpaceConversion.8ec27d21.js","assets/mat3f64.4564d6a3.js","assets/mat4f64.a89cc140.js","assets/spatialReferenceEllipsoidUtils.54dfd023.js","assets/computeTranslationToOriginAndRotation.4860e3ef.js","assets/meshVertexSpaceUtils.5f97af5a.js","assets/MeshLocalVertexSpace.82c9e8da.js","assets/vec3.5fc4e8fc.js","assets/projection.6ad549e2.js","assets/DoubleArray.2bb33e3e.js","assets/BufferView.80717d85.js","assets/vec42.faaf2b1c.js","assets/vec4.2d53fcda.js"]),l=await d(n,new ot({origin:[u.x,u.y,u.z??0]}));s.set(l,n),i.geometry=l,r.push(l)}}await this.uploadAssets(r);for(const[i,n]of s)n.addExternalSources(i.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(t),updates:[],deletes:[]}}_getAssetMapEditsJSON(e){const t=new Array,a=this.layer.globalIdField,r=this.layer.parsedUrl;for(const s of e){const i=s.geometry,{metadata:n}=i,o=n.getExternalSourcesOnService(r),u=s.getAttribute(a);if(o.length===0){v.getLogger(this).error(`Skipping feature ${u}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:d}=o.find(dt)??o[0];for(const l of d)l.parts.length===1?t.push({globalId:rt(),parentGlobalId:u,assetName:l.assetName,assetHash:l.parts[0].partHash,flags:[]}):v.getLogger(this).error(`Skipping asset ${l.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return t}_createEditsResult(e){const t=e.data,{layerId:a}=this.layer,r=[];let s=null;if(Array.isArray(t))for(const n of t)r.push({id:n.id,editedFeatures:n.editedFeatures}),n.id===a&&(s={addResults:n.addResults??[],updateResults:n.updateResults??[],deleteResults:n.deleteResults??[],attachments:n.attachments,editMoment:n.editMoment});else s=t;const i=_t(s);if(r.length>0){i.editedFeatureResults=[];for(const n of r){const{editedFeatures:o}=n,u=o?.spatialReference?new it(o.spatialReference):null;i.editedFeatureResults.push({layerId:n.id,editedFeatures:Et(o,u)})}}return i}_createAttachmentErrorResult(e,t){const a=t.details.messages?.[0]||t.message,r=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new S("feature-layer-source:attachment-failure",a,{code:r})}}_getFormDataForAttachment(e,t){const a=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(a)for(const r in t){const s=t[r];s!=null&&(a.set?a.set(r,s):a.append(r,s))}return a}_getLayerRequestOptions(e={}){const{layer:t,layer:{parsedUrl:a,gdbVersion:r}}=this;return{...e,query:{gdbVersion:r,layer:"dynamicDataSource"in t&&t.dynamicDataSource?JSON.stringify({source:t.dynamicDataSource}):void 0,...a.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}async _areAllAssetsAlreadyMapped(e){const{layer:t}=this,{globalIdField:a,parsedUrl:r}=t,s="infoFor3D"in t?t.infoFor3D:null;if(s==null||a==null)return!1;const i=mt(s);if(i==null)return!1;const n=T(r.path,`../${i.id}`),o=new Array;for(const p of e){if(!(p.geometry.metadata.getExternalSourcesOnService(r).length>0))return!1;o.push(p)}const u=o.map(p=>p.getAttribute(a)).filter(x);if(u.length===0)return!1;const{assetMapFieldRoles:{parentGlobalId:d,assetHash:l}}=s,m=new nt({where:`${d} IN (${u.map(p=>`'${p}'`)})`,outFields:[l,d],returnGeometry:!1}),I=await ft(n,m),{features:R}=I;return R.length!==0&&!o.some(p=>{const c=p.getAttribute(a);if(!c)return!0;const{metadata:q}=p.geometry,h=R.filter(y=>y.getAttribute(d)===c);if(h.length===0)return!0;const g=h.map(y=>y.getAttribute(l));return q.getExternalSourcesOnService(r).flatMap(({source:y})=>y.flatMap(w=>w.parts.map(C=>C.partHash))).some(y=>g.every(w=>y!==w))})}};E([O()],_.prototype,"type",void 0),E([O({constructOnly:!0})],_.prototype,"layer",void 0),E([O({constructOnly:!0})],_.prototype,"supportedSourceTypes",void 0),E([O({readOnly:!0})],_.prototype,"queryTask",null),_=E([H("esri.layers.graphics.sources.FeatureLayerSource")],_);const vt=1e3,Oe=_;export{Oe as default};