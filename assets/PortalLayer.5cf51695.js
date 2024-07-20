import{aa as l,ab as d,cK as m,ed as w,dY as _,ac as E,a2 as U,$,F as b,G as H,n as F,cM as n,I as L,fm as O,fn as T,cN as f,cL as y,ez as I,cO as M,U as S,fo as D,fp as R,s as k}from"./index.7eb0daf2.js";import{p as v}from"./portalItemUtils.761d02ba.js";const C=P=>{let i=class extends P{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=U(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(r){r!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",r))}readPortalItem(r,e,t){if(e.itemId)return new m({id:e.itemId,portal:t?.portal})}writePortalItem(r,e){r?.id&&(e.itemId=r.id)}async loadFromPortal(r,e){if(this.portalItem?.id)try{const{load:t}=await $(()=>import("./layersLoader.f5c9260a.js"),["assets/layersLoader.f5c9260a.js","assets/index.7eb0daf2.js","assets/index.d3b4073e.css","assets/fetchService.e99559bf.js","assets/portalLayers.6c8950b8.js","assets/associatedFeatureServiceUtils.f808dfcb.js","assets/portalItemUtils.761d02ba.js","assets/layersCreator.44f6b1c8.js","assets/styleUtils.f0558e3a.js","assets/jsonContext.a8ec6dbb.js"]);return b(e),await t({instance:this,supportedTypes:r.supportedTypes,validateItem:r.validateItem,supportsData:r.supportsData,layerModuleTypeMap:r.layerModuleTypeMap},e)}catch(t){throw H(t)||F.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})
  ${t}`),t}}async finishLoadEditablePortalLayer(r){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(r).catch(e=>(n(e),!0)))}async setUserPrivileges(r,e){if(!L.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(e);if(this.url)try{const{features:{edit:t,fullEdit:a},content:{updateItem:s}}=await this._fetchUserPrivileges(r,e);this._set("userHasEditingPrivileges",t),this._set("userHasFullEditingPrivileges",a),this._set("userHasUpdateItemPrivileges",s)}catch(t){n(t)}}async _fetchUserPrivileges(r,e){let t=this.portalItem;if(!r||!t||!t.loaded||t.sourceUrl)return this._fetchFallbackUserPrivileges(e);const a=r===t.id;if(a&&t.portal.user)return v(t);let s,p;if(a)s=t.portal.url;else try{s=await O(this.url,e)}catch(o){n(o)}if(!s||!T(s,t.portal.url))return this._fetchFallbackUserPrivileges(e);try{const o=e!=null?e.signal:null;p=await f?.getCredential(`${s}/sharing`,{prompt:!1,signal:o})}catch(o){n(o)}const c=!0,u=!1,g=!1;if(!p)return{features:{edit:c,fullEdit:u},content:{updateItem:g}};try{if(a?await t.reload():(t=new m({id:r,portal:{url:s}}),await t.load(e)),t.portal.user)return v(t)}catch(o){n(o)}return{features:{edit:c,fullEdit:u},content:{updateItem:g}}}async _fetchFallbackUserPrivileges(r){let e=!0;try{e=await this._fetchUserHasEditingPrivileges(r)}catch(t){n(t)}return{features:{edit:e,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(r){const e=this.url?f?.findCredential(this.url):null;if(!e)return!0;const t=h.credential===e?h.user:await this._fetchEditingUser(r);return h.credential=e,h.user=t,t?.privileges==null||t.privileges.includes("features:user:edit")}async _fetchEditingUser(r){const e=this.portalItem?.portal?.user;if(e)return e;const t=f?.findServerInfo(this.url??"");if(!t?.owningSystemUrl)return null;const a=`${t.owningSystemUrl}/sharing/rest`,s=y.getDefault();if(s&&s.loaded&&I(s.restUrl)===I(a))return s.user;const p=`${a}/community/self`,c=r!=null?r.signal:null,u=await M(S(p,{authMode:"no-prompt",query:{f:"json"},signal:c}));return u.ok?D.fromJSON(u.value.data):null}read(r,e){e&&(e.layer=this),super.read(r,e)}write(r,e){const t=e?.portal,a=this.portalItem?.id&&(this.portalItem.portal||y.getDefault());return t&&a&&!R(a.restUrl,t.restUrl)?(e.messages&&e.messages.push(new k("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(r,{...e,layer:this})}};return l([d({type:m})],i.prototype,"portalItem",null),l([w("web-document","portalItem",["itemId"])],i.prototype,"readPortalItem",null),l([_("web-document","portalItem",{itemId:{type:String}})],i.prototype,"writePortalItem",null),l([d({clonable:!1})],i.prototype,"resourceReferences",void 0),l([d({type:Boolean,readOnly:!0})],i.prototype,"userHasEditingPrivileges",void 0),l([d({type:Boolean,readOnly:!0})],i.prototype,"userHasFullEditingPrivileges",void 0),l([d({type:Boolean,readOnly:!0})],i.prototype,"userHasUpdateItemPrivileges",void 0),i=l([E("esri.layers.mixins.PortalLayer")],i),i},h={credential:null,user:null};export{C as j};
