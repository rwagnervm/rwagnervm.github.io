import{_ as l,$ as h,d3 as g,cE as w,dv as d,dw as f,dx as n,a6 as u,a8 as b}from"./index.221827cd.js";import{y as S,u as V}from"./LayerView.ce6e0535.js";import{i as v}from"./GraphicContainer.b0be80ad.js";import{o as _}from"./BaseGraphicContainer.7704bbc1.js";import"./utils.0160becb.js";import"./Utils.2136650a.js";import"./enums.0295eb81.js";import"./enums.2d9e6f64.js";import"./Texture.940076b2.js";import"./VertexElementDescriptor.1fdca6da.js";import"./MaterialKey.0cadabc1.js";import"./ExpandedCIM.a372ce74.js";import"./BidiEngine.d8bba3fc.js";import"./Rect.95b0fd2e.js";import"./quantizationUtils.7ff797cc.js";import"./GeometryUtils.4f19e772.js";import"./floatRGBA.3f71f8e9.js";import"./normalizeUtilsSync.4d52fbd0.js";import"./projectionSupport.4f5da4af.js";import"./json.879c9adc.js";import"./VertexArrayObject.53cf1857.js";import"./FeatureContainer.b427dd87.js";import"./TileContainer.5aeb32d6.js";import"./WGLContainer.347cc5cd.js";import"./pixelUtils.9c6f8dae.js";import"./ProgramTemplate.cf9dd4e8.js";import"./StyleDefinition.d56936e4.js";import"./config.82550349.js";import"./GeometryUtils.51c4032a.js";import"./earcut.afc1d357.js";import"./visualVariablesUtils.061b7a4e.js";import"./visualVariablesUtils.62efda9d.js";import"./Matcher.6586928a.js";import"./tileUtils.332711ed.js";import"./TileClipper.77103a2e.js";import"./Geometry.d049a63c.js";import"./devEnvironmentUtils.d8d0484c.js";import"./schemaUtils.d20994fa.js";import"./createSymbolSchema.827eb617.js";import"./util.520a352e.js";import"./ComputedAttributeStorage.29767acd.js";import"./centroid.06db4b74.js";import"./vec3f32.1121a836.js";let y=class extends S(V){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().map(t=>{const i=this._popupTemplates.get(t),p=t.hitTest(e);for(const s of p)s.layer=o,s.sourceLayer=o,s.popupTemplate=i;return p}).flat().map(t=>({type:"graphic",graphic:t,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.handles.add([l(()=>{var e;return(e=this.layer)==null?void 0:e.featureCollections},e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:t}of e){const i=g.fromJSON(o),p=new w(i.features),s=t.drawingInfo,c=r?d.fromJSON(r):null,a=f(s.renderer),m=new _({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:a,container:new v(this.view.featuresTilingScheme)});this._graphicsViewMap[i.geometryType]=m,this._popupTemplates.set(m,c),i.geometryType!=="polygon"||this.layer.polygonSymbol?i.geometryType!=="polyline"||this.layer.lineSymbol?i.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.polygonSymbol},e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.lineSymbol},e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.pointSymbol},e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},h)],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([b("esri.views.2d.layers.GeoRSSLayerView2D")],y);const ce=y;export{ce as default};