import{s as g,e as j,d3 as G,cL as P,d7 as I}from"./index.7eb0daf2.js";import{n as T,a as F,m as $}from"./TimeOnly.5d28261e.js";import{t as J}from"./ImmutableArray.28227007.js";import M from"./FeatureLayer.aed98d1b.js";import{d as z}from"./FeatureSet.78257171.js";import"./UnknownTimeZone.4756be49.js";import"./UniqueValueRenderer.8069ab57.js";import"./ColorStop.aa8650af.js";import"./diffUtils.080c04bc.js";import"./colorRamps.272b71a1.js";import"./sizeVariableUtils.34255976.js";import"./visualVariableUtils.12ee1cdb.js";import"./jsonUtils.185b82ae.js";import"./defaults.e5a1167a.js";import"./defaultsJSON.ba72df2f.js";import"./styleUtils.7f2b22b0.js";import"./jsonUtils.93554317.js";import"./LRUCache.6f8863ed.js";import"./Version.856e86b2.js";import"./FieldsIndex.333d0734.js";import"./OverrideHelper.b5d99b26.js";import"./colorUtils.085072a2.js";import"./vec42.faaf2b1c.js";import"./vec4f64.7b667e97.js";import"./utils.dbb84a38.js";import"./quantizationUtils.fe6b1e6e.js";import"./heatmapUtils.b763e953.js";import"./MultiOriginJSONSupport.b5976a45.js";import"./commonProperties.a37169f8.js";import"./FeatureLayerBase.dd6763e4.js";import"./featureLayerUtils.1828d741.js";import"./RelationshipQuery.a9d69ee6.js";import"./LayerFloorInfo.164b006f.js";import"./Relationship.ee67ec43.js";import"./serviceCapabilitiesUtils.21de2819.js";import"./editsZScale.3b0b1c90.js";import"./queryZScale.835a340e.js";import"./APIKeyMixin.a389fc6d.js";import"./ArcGISService.c7559039.js";import"./CustomParametersMixin.b4d39f07.js";import"./EditBusLayer.979b288a.js";import"./FeatureEffectLayer.11729363.js";import"./FeatureEffect.00e4e7d7.js";import"./FeatureReductionLayer.8358918b.js";import"./FeatureReductionSelection.49649196.js";import"./labelingInfo.41bbc735.js";import"./labelUtils.37b9d8d8.js";import"./MD5.f6d873db.js";import"./OperationalLayer.33897364.js";import"./OrderedLayer.7fae9ad1.js";import"./OrderByInfo.b53e85dd.js";import"./PortalLayer.5cf51695.js";import"./portalItemUtils.761d02ba.js";import"./RefreshableLayer.908b9ff1.js";import"./TemporalLayer.859e579f.js";import"./TimeInfo.d882fe8e.js";import"./FeatureTemplate.7907b31e.js";import"./FeatureType.f4c0cb30.js";import"./fieldProperties.80f53b4c.js";import"./versionUtils.9e2a095a.js";import"./styleUtils.f0558e3a.js";import"./TopFeaturesQuery.0af13513.js";import"./popupUtils.f17e95f0.js";import"./interfaces.c34ab3ac.js";let b=null;function E(e,n,r,o={}){const a=n.elementType,i="value",c=a.type==="array"?[{name:i,type:a.type,elementType:a.elementType}]:a.type==="dictionary"?[{name:i,type:a.type,properties:a.properties}]:[{name:i,type:a.type}];return new J(e.map(p=>{const t={};return w(t,c,{[i]:p},r,o),t[i]}))}function N(e,n,r={}){const o=e instanceof z?new M({source:e.features,geometryType:e.geometryType,fields:e.fields,spatialReference:e.spatialReference}):e;return n.constructFeatureSet(o,r.spatialReference,null,!0,r.lruCache,r.interceptor)}function Y(e,n,r={}){const{spatialReference:o,interceptor:a,lruCache:i}=r;return typeof e=="string"?n.createFeatureSetCollectionFromService(e,o,i,a):n.createFeatureSetCollectionFromMap(e,o,i,a)}function q(e,n,r,o={}){const a={};return w(a,n.properties,e,r,o),new b.Dictionary(a)}function w(e,n,r,o,a={}){const i={};for(const c of Object.keys(r))i[c.toLowerCase()]=r[c];for(const c of n){const p=c.name.toLowerCase();if(a.variablesPreProcessed)e[p]=i[p];else switch(c.type){case"array":{const t=i[p];e[p]=t==null?null:E(t,c,o,a);break}case"feature":{const t=i[p];e[p]=t==null?null:b.Feature.createFromGraphic(t,a?.timeZone);break}case"featureSet":{const t=i[p];e[p]=t==null?null:o?N(t,o,a):null;break}case"featureSetCollection":{const t=i[p];e[p]=t==null?null:o?Y(t,o,a):null;break}case"dictionary":{const t=i[p];e[p]=t==null?null:q(t,c,o,a);break}case"date":{const t=i[p];e[p]=t?t instanceof $?t:a?.timeZone?$.dateJSAndZoneToArcadeDate(t,a?.timeZone):$.dateJSToArcadeDate(t):null;break}case"dateOnly":{const t=i[p];e[p]=t?t instanceof F?t:F.fromReader(t):null;break}case"time":{const t=i[p];e[p]=t?t instanceof T?t:T.fromReader(t):null;break}case"knowledgeGraph":case"geometry":case"boolean":case"text":case"number":e[p]=i[p]}}}function U(e,n){for(const r of e)n.push(r),r.type==="dictionary"&&U(r.properties,n);return n}function R(e,n,r,o,a){const{spatialReference:i,interceptor:c,lruCache:p,console:t,abortSignal:u,timeZone:m,services:S={portal:P.getDefault()}}=r,f={vars:{},spatialReference:i,interceptor:c,timeZone:m,lrucache:p,useAsync:a,services:S,console:t,abortSignal:u};return n&&w(f.vars,e.variables,n,o,r),f}function v(e,n){switch(n.getArcadeType(e)){case"number":case"text":case"boolean":case"point":case"polygon":case"polyline":case"multipoint":case"extent":return e;case"date":return e.toJSDate();case"time":case"dateOnly":return e.toString();case"feature":{const r=(e.type,e),o="geometry"in r?r.geometry():null,a="readAttributes"in r?r.readAttributes():r.attributes;return new I({geometry:o,attributes:a})}case"dictionary":{const r=e,o=r.attributes,a={};for(const i of Object.keys(o))a[i]=v(r.field(i),n);return a}case"array":return("toArray"in e?e.toArray():e).map(r=>v(r,n))}return e}const Z={variables:[{name:"$feature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$userInput",type:"geometry"},{name:"$graph",type:"knowledgeGraph"}]},D={variables:[{name:"$feature",type:"feature"},{name:"$aggregatedFeatures",type:"featureSet"}]},O=new Map([["aggregate-field",{variables:[{name:"$feature",type:"feature"}]}],["form-constraint",{variables:[{name:"$feature",type:"feature"}]}],["feature-z",{variables:[{name:"$feature",type:"feature"}]}],["field-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$datastore",type:"featureSetCollection"}]}],["form-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$originalFeature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$featureSet",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$editContext",type:"dictionary",properties:[{name:"editType",type:"text"}]}]}],["labeling",{variables:[{name:"$feature",type:"feature"}]}],["popup",Z],["popup-element",Z],["feature-reduction-popup",D],["feature-reduction-popup-element",D],["visualization",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"}]}]}]]);function rt(e){const n=O.get(e);if(!n){const r=Array.from(O.keys()).map(o=>`'${o}'`).join(", ");throw new g("createArcadeProfile:invalid-profile-name",`Invalid profile name '${e}'. You must specify one of the following values: ${r}`)}return j(n)}async function at(e,n,r={}){b||(b=await G());const{arcade:o,arcadeUtils:a}=b,{loadScriptDependencies:i,referencesMember:c,scriptIsAsync:p}=o,t=U(n.variables,[]),u=t.filter(s=>s.type==="featureSet"||s.type==="featureSetCollection").map(s=>s.name.toLowerCase()),m=o.parseScript(e,u);if(!m)throw new g("arcade:invalid-script","Unable to create SyntaxTree");const S=a.extractFieldNames(m),f=o.scriptTouchesGeometry(m),C=t.map(s=>s.name.toLowerCase()).filter(s=>c(m,s)),l=p(m,u);await i(m,l,u);const h={vars:{},spatialReference:null,useAsync:l};for(const s of C)h.vars[s]="any";const{lruCache:A}=r,x=o.compileScript(m,h),k=o.featureSetUtils(),{services:L}=r;return{execute:(s,y={})=>{if(l)throw new g("arcade:invalid-execution-mode","Cannot execute the script in synchronous mode");const d=x(R(n,s,{lruCache:A,...y},k,l));return y.rawOutput?d:v(d,a)},executeAsync:async(s,y={})=>{const d=await x(R(n,s,{lruCache:A,services:L,...y},k,l));return y.rawOutput?d:v(d,a)},isAsync:l,variablesUsed:C,fieldsUsed:S,geometryUsed:f,syntaxTree:m}}export{at as createArcadeExecutor,rt as createArcadeProfile};
