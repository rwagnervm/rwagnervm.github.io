import{x as o,s as p,a6 as r,a7 as a,a8 as m}from"./index.9560fde2.js";import{a as n}from"./BitmapContainer.ab6b3948.js";import{y as h,u as d}from"./LayerView.770adab6.js";import{v as c}from"./ExportStrategy.5f6352ac.js";import{i as u}from"./RefreshableLayerView.52db5f44.js";import"./WGLContainer.f64bd4a7.js";import"./enums.2d9e6f64.js";import"./pixelUtils.b6bf04c5.js";import"./utils.b6577580.js";import"./Utils.49470533.js";import"./enums.0295eb81.js";import"./Texture.3e8fb115.js";import"./VertexElementDescriptor.1fdca6da.js";import"./MaterialKey.7be31df0.js";import"./VertexArrayObject.8703dade.js";import"./ProgramTemplate.d5dcedd6.js";import"./StyleDefinition.d56936e4.js";import"./config.82550349.js";import"./GeometryUtils.51c4032a.js";import"./earcut.afc1d357.js";import"./Bitmap.f9d2d055.js";let t=class extends u(h(d)){update(e){this._strategy.update(e).catch(i=>{o(i)||p.getLogger(this.declaredClass).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,s){return this.layer.fetchImage(e,i,s)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};r([a()],t.prototype,"_strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const V=t;export{V as default};