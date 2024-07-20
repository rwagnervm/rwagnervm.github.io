import{c as o,d1 as f,cE as w,_ as p,$ as n,c$ as y,j as _,a6 as V,a8 as v}from"./index.221827cd.js";import{i as C}from"./utils.0160becb.js";import{r as b}from"./GroupContainer.f412d859.js";import{y as H,u as T}from"./LayerView.ce6e0535.js";import{i as g}from"./GraphicContainer.b0be80ad.js";import{o as d}from"./BaseGraphicContainer.7704bbc1.js";import"./Utils.2136650a.js";import"./enums.0295eb81.js";import"./enums.2d9e6f64.js";import"./Texture.940076b2.js";import"./VertexElementDescriptor.1fdca6da.js";import"./MaterialKey.0cadabc1.js";import"./WGLContainer.347cc5cd.js";import"./pixelUtils.9c6f8dae.js";import"./VertexArrayObject.53cf1857.js";import"./ProgramTemplate.cf9dd4e8.js";import"./StyleDefinition.d56936e4.js";import"./config.82550349.js";import"./GeometryUtils.51c4032a.js";import"./earcut.afc1d357.js";import"./ExpandedCIM.a372ce74.js";import"./BidiEngine.d8bba3fc.js";import"./Rect.95b0fd2e.js";import"./quantizationUtils.7ff797cc.js";import"./GeometryUtils.4f19e772.js";import"./floatRGBA.3f71f8e9.js";import"./normalizeUtilsSync.4d52fbd0.js";import"./projectionSupport.4f5da4af.js";import"./json.879c9adc.js";import"./FeatureContainer.b427dd87.js";import"./TileContainer.5aeb32d6.js";import"./visualVariablesUtils.061b7a4e.js";import"./visualVariablesUtils.62efda9d.js";import"./Matcher.6586928a.js";import"./tileUtils.332711ed.js";import"./TileClipper.77103a2e.js";import"./Geometry.d049a63c.js";import"./devEnvironmentUtils.d8d0484c.js";import"./schemaUtils.d20994fa.js";import"./createSymbolSchema.827eb617.js";import"./util.520a352e.js";import"./ComputedAttributeStorage.29767acd.js";import"./centroid.06db4b74.js";import"./vec3f32.1121a836.js";const m="sublayers",l="layerView",I=Object.freeze({remove(){},pause(){},resume(){}});let c=class extends H(T){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new b}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(e=>!!e.popupTemplate)).flat()}*graphicsViews(){o(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():o(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const r=e.hitTest(i);if(o(this._graphicsViewsFeatureCollectionMap)){const h=this._graphicsViewsFeatureCollectionMap.get(e);for(const s of r)!s.popupTemplate&&h.popupTemplate&&(s.popupTemplate=h.popupTemplate),s.sourceLayer=s.layer=this.layer}return r}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;return typeof i=="number"?t=[i]:i instanceof f?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(e=>e&&e.uid):w.isCollection(i)&&(t=i.map(e=>e&&e.uid).toArray()),t=t.filter(e=>e!=null),t.length?(this._addHighlight(t),{remove:()=>{this._removeHighlight(t)}}):I}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(o(e)&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const r of e){const h=new g(this.view.featuresTilingScheme),s=new d({view:i,graphics:r.source,renderer:r.renderer,requestUpdateCallback:t,container:h});this._graphicsViewsFeatureCollectionMap.set(s,r),this.container.addChild(s.container),this.handles.add([p(()=>r.visible,a=>s.container.visible=a,n),p(()=>s.updating,()=>this.notifyChange("updating"),n)],l)}this._updateHighlight()}else o(this.layer.sublayers)&&this.handles.add(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),m)}detach(){this._destroyGraphicsViews(),this.handles.remove(m)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(l);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),_(this.layer.sublayers))return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const r of this.layer.sublayers){const h=new C,s=new g(this.view.featuresTilingScheme);s.fadeTransitionEnabled=!0;const a=new d({view:t,graphics:r.graphics,requestUpdateCallback:e,container:s});this.handles.add([r.on("graphic-update",a.graphicUpdateHandler),p(()=>r.visible,u=>a.container.visible=u,n),p(()=>a.updating,()=>this.notifyChange("updating"),n)],l),h.addChild(a.container),this.container.addChild(h),i.push(a)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};c=V([v("esri.views.2d.layers.MapNotesLayerView2D")],c);const wi=c;export{wi as default};
