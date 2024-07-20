import{d7 as u,c7 as f,aK as w,cE as c,a4 as h,a5 as o,da as y,aa as _,ac as V}from"./index.7eb0daf2.js";import{t as v}from"./highlightReasons.c3e7cabb.js";import{f as C,y as H}from"./LayerView.649e11dc.js";import{t as g}from"./GraphicContainer.abe27126.js";import{V as d}from"./GraphicsView2D.73f18369.js";import"./Container.461c0161.js";import"./definitions.a3a54ed1.js";import"./enums.8929356b.js";import"./Texture.7423fe29.js";import"./layerViewUtils.8a0a28d0.js";import"./AGraphicContainer.c019acec.js";import"./TechniqueInstance.254dd815.js";import"./UpdateTracking2D.571bdffb.js";import"./BidiEngine.5f10619c.js";import"./OptimizedFeature.32c00f5f.js";import"./GeometryUtils.c6f9b045.js";import"./enums.abef80de.js";import"./utils.dbb84a38.js";import"./Rect.ab45bd96.js";import"./LabelMetric.267a8b18.js";import"./Program.9a92c5ff.js";import"./VertexElementDescriptor.c76e1b24.js";import"./defaults.e5a1167a.js";import"./defaultsJSON.ba72df2f.js";import"./BindType.597c7f67.js";import"./Util.00c6201e.js";import"./vec42.faaf2b1c.js";import"./vec4f64.7b667e97.js";import"./TileContainer.419fd15d.js";import"./WGLContainer.a2728de7.js";import"./ProgramTemplate.7599c672.js";import"./vec3f32.788be850.js";import"./StyleDefinition.e031dcf6.js";import"./config.8224a140.js";import"./earcut.dc9d94eb.js";import"./featureConversionUtils.c6dfa488.js";import"./OptimizedFeatureSet.6fd3bcb1.js";import"./FeatureCommandQueue.f16cbaa3.js";import"./constants.344a1358.js";import"./FieldsIndex.333d0734.js";import"./UnknownTimeZone.4756be49.js";import"./OverrideHelper.b5d99b26.js";import"./colorUtils.085072a2.js";import"./quantizationUtils.fe6b1e6e.js";import"./AttributeStore.38266bd6.js";import"./labelUtils.37b9d8d8.js";import"./TimeOnly.5d28261e.js";import"./timeSupport.393bd0ba.js";import"./json.20588c22.js";import"./diffUtils.080c04bc.js";import"./normalizeUtilsSync.71a1cb90.js";const m="sublayers",l="layerView";let n=class extends C(H){constructor(){super(...arguments),this._highlightIds=new Map}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const a=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&a.popupTemplate&&(r.popupTemplate=a.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):f.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t?.filter(w);return e?.length?(this._addHighlight(e),c(()=>this._removeHighlight(e))):c()}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const a=new g(this.view.featuresTilingScheme),r=new d({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:a});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([h(()=>s.visible,p=>r.container.visible=p,o),h(()=>r.updating,()=>this.notifyChange("updating"),o)],l)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),m)}detach(){this._destroyGraphicsViews(),this.removeHandles(m)}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(l);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const a=new g(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const r=new d({view:t,graphics:s.graphics,requestUpdateCallback:e,container:a});this.addHandles([s.on("graphic-update",r.graphicUpdateHandler),h(()=>s.visible,p=>r.container.visible=p,o),h(()=>r.updating,()=>this.notifyChange("updating"),o)],l),this.container.addChild(r.container),i.push(r)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys()),t=v("highlight");for(const e of this.graphicsViews())e.setHighlight(i.map(s=>({objectId:s,highlightFlags:t})))}};n=_([V("esri.views.2d.layers.MapNotesLayerView2D")],n);const vi=n;export{vi as default};