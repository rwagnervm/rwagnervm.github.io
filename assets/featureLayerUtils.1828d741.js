import{c1 as p,aT as q,eJ as A,eL as O,s as i,$ as g,b$ as P,fr as j,cN as m,fm as x}from"./index.7eb0daf2.js";import{p as E}from"./jsonUtils.93554317.js";import{A as R}from"./UniqueValueRenderer.8069ab57.js";import{c as C,d as I}from"./RelationshipQuery.a9d69ee6.js";async function L(e,t,r){t=t.clone(),e.capabilities.query.supportsMaxRecordCountFactor&&(t.maxRecordCountFactor=F(e));const n=S(e),a=e.capabilities.query.supportsPagination;t.start=0,t.num=n;let o=null;for(;;){const l=await e.source.queryFeaturesJSON(t,r);if(o==null?o=l:o.features=o.features.concat(l.features),o.exceededTransferLimit=l.exceededTransferLimit,!a||!l.exceededTransferLimit)break;t.start+=n}return o}function S(e){return F(e)*T(e)}function T(e){return e.capabilities.query.maxRecordCount||2e3}function F(e){return e.capabilities.query.supportsMaxRecordCountFactor?p.MAX_MAX_RECORD_COUNT_FACTOR:1}const J=new q({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});async function Q(e,t,r,n){const a=await d(e);if(await w(e,t,n),!a.addAttachment)throw new i(n,"Layer source does not support addAttachment capability");return a.addAttachment(t,r)}function w(e,t,r){const{attributes:n}=t,{objectIdField:a}=e;return e.capabilities?.data?.supportsAttachment?t?n?a&&n[a]?Promise.resolve():Promise.reject(new i(r,`feature is missing the identifying attribute ${a}`)):Promise.reject(new i(r,"'attributes' are required on a feature to query attachments")):Promise.reject(new i(r,"A feature is required to add/delete/update attachments")):Promise.reject(new i(r,"this layer doesn't support attachments"))}async function U(e,t,r,n,a){const o=await d(e);if(await w(e,t,a),!o.updateAttachment)throw new i(a,"Layer source does not support updateAttachment capability");return o.updateAttachment(t,r,n)}async function Z(e,t,r){const{applyEdits:n}=await g(()=>import("./editingSupport.b9997e05.js"),["assets/editingSupport.b9997e05.js","assets/index.7eb0daf2.js","assets/index.d3b4073e.css","assets/EditBusLayer.979b288a.js","assets/infoFor3D.8ecd2df8.js"]),a=await e.load();let o=r;return a.type==="feature"&&a.infoFor3D&&t.deleteFeatures!=null&&a.globalIdField!=null&&(o={...o,globalIdToObjectId:await M(a,t.deleteFeatures,a.globalIdField)}),n(a,a.source,t,r)}async function k(e,t,r){const{uploadAssets:n}=await g(()=>import("./editingSupport.b9997e05.js"),["assets/editingSupport.b9997e05.js","assets/index.7eb0daf2.js","assets/index.d3b4073e.css","assets/EditBusLayer.979b288a.js","assets/infoFor3D.8ecd2df8.js"]),a=await e.load();return n(a,a.source,t,r)}async function H(e,t,r,n){const a=await d(e);if(await w(e,t,n),!a.deleteAttachments)throw new i(n,"Layer source does not support deleteAttachments capability");return a.deleteAttachments(t,r)}async function X(e,t,r){const n=(await e.load({signal:t?.signal})).source;if(!n.fetchRecomputedExtents)throw new i(r,"Layer source does not support fetchUpdates capability");return n.fetchRecomputedExtents(t)}async function z(e,t,r,n){t=C.from(t),await e.load();const a=e.source,o=e.capabilities;if(!o?.data?.supportsAttachment)throw new i(n,"this layer doesn't support attachments");const{attachmentTypes:l,objectIds:f,globalIds:y,num:s,size:u,start:c,where:b}=t;if(!o?.operations?.supportsQueryAttachments&&(l?.length>0||y?.length>0||u?.length>0||s||c||b))throw new i(n,"when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",t);if(!(f?.length||y?.length||b))throw new i(n,"'objectIds', 'globalIds', or 'where' are required to perform attachment query",t);if(!a.queryAttachments)throw new i(n,"Layer source does not support queryAttachments capability",t);return a.queryAttachments(t)}async function B(e,t,r,n){const a=await d(e);if(!a.queryObjectIds)throw new i(n,"Layer source does not support queryObjectIds capability");return a.queryObjectIds(p.from(t)??e.createQuery(),r)}async function K(e,t,r,n){const a=await d(e);if(!a.queryFeatureCount)throw new i(n,"Layer source does not support queryFeatureCount capability");return a.queryFeatureCount(p.from(t)??e.createQuery(),r)}async function W(e,t,r,n){const a=await d(e);if(!a.queryExtent)throw new i(n,"Layer source does not support queryExtent capability");return a.queryExtent(p.from(t)??e.createQuery(),r)}async function Y(e,t,r,n){const a=await d(e);if(!a.queryRelatedFeatures)throw new i(n,"Layer source does not support queryRelatedFeatures capability");return a.queryRelatedFeatures(I.from(t),r)}async function ee(e,t,r,n){const a=await d(e);if(!a.queryRelatedFeaturesCount)throw new i(n,"Layer source does not support queryRelatedFeaturesCount capability");return a.queryRelatedFeaturesCount(I.from(t),r)}async function te(e){const t=e.source;if(t?.refresh)try{const{dataChanged:r,updates:n}=await t.refresh();if(n!=null&&(e.sourceJSON={...e.sourceJSON,...n},e.read(n,{origin:"service",url:e.parsedUrl})),r)return!0}catch{}if(e.definitionExpression)try{return(await P(e.definitionExpression,e.fieldsIndex)).hasDateFunctions}catch{}return!1}function ne(e){const t=new p,r=e.capabilities?.data,n=e.capabilities?.query;t.historicMoment=e.historicMoment,t.gdbVersion=e.gdbVersion,t.returnGeometry=!0,n&&(t.compactGeometryEnabled=n.supportsCompactGeometry,t.defaultSpatialReferenceEnabled=n.supportsDefaultSpatialReference),r&&(r.supportsZ&&e.returnZ!=null&&(t.returnZ=e.returnZ),r.supportsM&&e.returnM!=null&&(t.returnM=e.returnM)),t.outFields=["*"];const{timeOffset:a,timeExtent:o}=e;return t.timeExtent=a!=null&&o!=null?o.offset(-a.value,a.unit):o||null,t.multipatchOption=e.geometryType==="multipatch"?"xyFootprint":null,t}function re(e){const{globalIdField:t,fields:r}=e;if(t)return t;if(r){for(const n of r)if(n.type==="esriFieldTypeGlobalID")return n.name}}function ae(e){const{objectIdField:t,fields:r}=e;if(t)return t;if(r){for(const n of r)if(n.type==="esriFieldTypeOID")return n.name}}function oe(e){return e.currentVersion?e.currentVersion:e.hasOwnProperty("capabilities")||e.hasOwnProperty("drawingInfo")||e.hasOwnProperty("hasAttachments")||e.hasOwnProperty("htmlPopupType")||e.hasOwnProperty("relationships")||e.hasOwnProperty("timeInfo")||e.hasOwnProperty("typeIdField")||e.hasOwnProperty("types")?10:9.3}function ie(e,t){const{subtypes:r,subtypeField:n}=e;if(!t||!r?.length||!n)return null;const a=t.attributes[n];return a==null?null:r.find(o=>o.code===a)}async function d(e){return(await e.load()).source}async function $(e,t){if(!m||m.findCredential(e))return;let r;try{const n=await x(e,t);n&&(r=await m.checkSignInStatus(`${n}/sharing`))}catch{}if(r)try{const n=t!=null?t.signal:null;await m.getCredential(e,{signal:n})}catch{}}async function se(e,t,r){const n=e.parsedUrl?.path;n&&e.authenticationTriggerEvent===t&&await $(n,r)}function ue(e){return!_(e)&&(e.userHasUpdateItemPrivileges||e.editingEnabled)}const h=A({types:O});function ce(e,t){if(e.defaultSymbol)return e.types?.length?new R({defaultSymbol:h(e.defaultSymbol,e,t),field:e.typeIdField,uniqueValueInfos:e.types.map(r=>({id:r.id,symbol:h(r.symbol,r,t)}))}):new E({symbol:h(e.defaultSymbol,e,t)})}function le(e){let t=e.sourceJSON?.cacheMaxAge;if(!t)return!1;const r=e.editingInfo?.lastEditDate?.getTime();return r==null||(t*=1e3,Date.now()-r<t)}async function M(e,t,r){if(t==null)return null;const n=[],{objectIdField:a}=e;if(t.forEach(s=>{let u=null;if("attributes"in s){const{attributes:c}=s;u={globalId:c[r],objectId:c[a]!=null&&c[a]!==-1?c[a]:null}}else u={globalId:s.globalId,objectId:s.objectId!=null&&s.objectId!==-1?s.objectId:null};u.globalId!=null&&(u.objectId!=null&&u.objectId!==-1||n.push(u.globalId))}),n.length===0)return null;const o=e.createQuery();o.where=n.map(s=>`${r}='${s}'`).join(" OR "),o.returnGeometry=!1,o.outFields=[a,r],o.cacheHint=!1;const l=await j(L(e,o));if(!l.ok)return null;const f=new Map,y=l.value.features;for(const s of y){const u=s.attributes[r],c=s.attributes[a];u!=null&&c!=null&&c!==-1&&f.set(u,c)}return f}function de(e,t,r){if(!t||!r||!e)return null;const n=r.getAttribute(t);return n==null?null:e.find(a=>{const{id:o}=a;return o!=null&&o.toString()===n.toString()})??null}function _(e){return e.sourceJSON?.isMultiServicesView||v(e)}function v(e){return!!e.sourceJSON?.capabilities?.toLowerCase().split(",").map(t=>t.trim()).includes("map")}export{K as A,oe as C,te as E,B as F,X as I,M as J,ie as L,ae as M,de as N,W as O,Y as P,re as R,ee as S,se as T,ce as U,le as V,_ as Z,Z as b,k as g,H as j,Q as m,z as q,ue as v,U as w,ne as x,J as y};
