import{aa as r,ab as a,ac as s}from"./index.7eb0daf2.js";function p(i){return"portalItem"in i}const y=i=>{let e=class extends i{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):p(this)?this.portalItem?.apiKey:null}set apiKey(t){t!=null?this._override("apiKey",t):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return r([a({type:String})],e.prototype,"apiKey",null),e=r([s("esri.layers.mixins.APIKeyMixin")],e),e};export{y as i};