import{fg as $,U as L,$ as E,k as R,aa as w,ab as k,ac as T,L as x,e as m}from"./index.7eb0daf2.js";const D=$(),j=new Map,V=new Map;async function B(e,r,d){if(!e||!d)return!1;if(!r)return!0;const i=new URL(e).host;let s=j.get(i);if(!s){const t=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,"");s=(await L(t,{responseType:"json",query:{f:"json"}})).data.defaultVersionName}return s===r}async function N(e,r,d=!1){if(!e||!r)return!0;const i=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),s=V.get(i)?.entries();if(s){for(const[t,a]of s)if(a.name===r){const o=!a.stack?.hasForwardEdits();if(!o&&d){const[{deleteForwardEdits:h},{default:u}]=await Promise.all([E(()=>import("./deleteForwardEdits.d0eb20c9.js"),["assets/deleteForwardEdits.d0eb20c9.js","assets/index.7eb0daf2.js","assets/index.d3b4073e.css"]),E(()=>import("./DeleteForwardEditsParameters.6e3fef45.js"),["assets/DeleteForwardEditsParameters.6e3fef45.js","assets/index.7eb0daf2.js","assets/index.d3b4073e.css"])]),c=await h(i,t,new u({sessionId:D,moment:a.moment}));return c.success&&a.stack?.clearForwardEdits(),c.success}return o}}return!0}function P(e,r){if(!e)return!1;const d=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),i=V.get(d)?.entries();if(i){for(const[s,t]of i)if(t.name===r)return t.lockType==="edit"}return!1}const I=new R.EventEmitter;function O(e){return I.on("apply-edits",new WeakRef(e))}function W(e){return I.on("update-moment",new WeakRef(e))}function z(e,r,d=null,i=!1){const s=x();return i=r==null||i,I.emit("apply-edits",{serviceUrl:e,layerId:r,gdbVersion:d,mayReceiveServiceEdits:i,result:s.promise}),s}const A=Symbol();function C(e){return e!=null&&typeof e=="object"&&A in e}function p(e){return e!=null&&typeof e=="object"&&"gdbVersion"in e}function g(e,r,d){const i=new URL(e).host,s=j.get(i),t=a=>!a||a===s;return t(r)&&t(d)||r===d}const G=e=>{var r;let d=class extends e{constructor(...i){super(...i),this[r]=!0,this._applyEditsHandler=s=>{const{serviceUrl:t,layerId:a,gdbVersion:o,mayReceiveServiceEdits:h,result:u}=s,c=t===this.url,f=a!=null&&this.layerId!=null&&a===this.layerId,H=p(this),S=p(this)&&g(t,o,this.gdbVersion);if(!c||H&&!S||!f&&!h)return;const U=u.then(n=>{if(this.lastEditsEventDate=new Date,f&&(n.addedFeatures.length||n.updatedFeatures.length||n.deletedFeatures.length||n.addedAttachments.length||n.updatedAttachments.length||n.deletedAttachments.length))return this.emit("edits",m(n)),n;const M=n.editedFeatures?.find(({layerId:F})=>F===this.layerId);if(M){const{adds:F,updates:y,deletes:v}=M.editedFeatures,_={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:F?F.map(({attributes:l})=>({objectId:this.objectIdField&&l[this.objectIdField],globalId:this.globalIdField&&l[this.globalIdField]})):[],deletedFeatures:v?v.map(({attributes:l})=>({objectId:this.objectIdField&&l[this.objectIdField],globalId:this.globalIdField&&l[this.globalIdField]})):[],updatedFeatures:y?y.map(({current:{attributes:l}})=>({objectId:this.objectIdField&&l[this.objectIdField],globalId:this.globalIdField&&l[this.globalIdField]})):[],editedFeatures:m(n.editedFeatures),exceededTransferLimit:!1,historicMoment:m(n.historicMoment)};return this.emit("edits",_),_}const b={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:m(n.editedFeatures),exceededTransferLimit:!1,historicMoment:m(n.historicMoment)};return"historicMoment"in this&&this._shouldUpdateHistoricMoment(t,o,b.historicMoment)&&this.emit("edits",b),b}).then(n=>("historicMoment"in this&&this._shouldUpdateHistoricMoment(t,o,n.historicMoment)&&(this.historicMoment=n.historicMoment),n));this.emit("apply-edits",{result:U})},this._updateMomentHandler=s=>{const{serviceUrl:t,gdbVersion:a,moment:o}=s,h=t===this.url,u=p(this),c=p(this)&&g(t,a,this.gdbVersion),f=p(this)&&!g(t,this.gdbVersion,null);h&&u&&c&&f&&"historicMoment"in this&&this.historicMoment!==o&&(this.historicMoment=o)},this.when().then(()=>{this.addHandles(O(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(W(this._updateMomentHandler))},()=>{})}_shouldUpdateHistoricMoment(i,s,t){return"historicMoment"in this&&this.historicMoment!==t&&P(i,s)}};return r=A,w([k()],d.prototype,"lastEditsEventDate",void 0),d=w([T("esri.layers.mixins.EditBusLayer")],d),d};export{G as F,z as a,P as c,N as i,B as o,C as p,D as t};