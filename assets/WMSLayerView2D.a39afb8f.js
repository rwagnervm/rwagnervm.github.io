import{aa as a,ab as h,ac as F,a2 as M,s as f,F as S,G as C,n as R,a4 as $,cz as q}from"./index.7eb0daf2.js";import{a as E}from"./BitmapContainer.a917eaff.js";import{f as U,y as V}from"./LayerView.649e11dc.js";import{_ as L}from"./ExportStrategy.9a603dd1.js";import{i as W}from"./RefreshableLayerView.6a9401d3.js";import{a as z}from"./ExportWMSImageParameters.f0adca82.js";import{i as A}from"./timeSupport.a600eb47.js";import"./WGLContainer.a2728de7.js";import"./definitions.a3a54ed1.js";import"./LabelMetric.267a8b18.js";import"./enums.abef80de.js";import"./Texture.7423fe29.js";import"./enums.8929356b.js";import"./Program.9a92c5ff.js";import"./VertexElementDescriptor.c76e1b24.js";import"./ProgramTemplate.7599c672.js";import"./vec3f32.788be850.js";import"./Container.461c0161.js";import"./highlightReasons.c3e7cabb.js";import"./StyleDefinition.e031dcf6.js";import"./config.8224a140.js";import"./earcut.dc9d94eb.js";import"./featureConversionUtils.c6dfa488.js";import"./OptimizedFeature.32c00f5f.js";import"./OptimizedFeatureSet.6fd3bcb1.js";import"./layerViewUtils.8a0a28d0.js";import"./Bitmap.62f36779.js";const H=e=>{let t=class extends e{initialize(){this.exportImageParameters=new z({layer:this.layer})}destroy(){this.exportImageParameters=M(this.exportImageParameters)}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){return A(this.layer,this.view?.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(i,o){const{layer:s}=this;if(!i)throw new f("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:d}=s;if(!d)throw new f("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:d});const r=this.createFetchPopupFeaturesQuery(i);if(!r)return[];const{extent:p,width:n,height:m,x:c,y}=r;if(!(p&&n&&m))throw new f("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:n,height:m});const g=await s.fetchFeatureInfo(p,n,m,c,y);return S(o),g}};return a([h()],t.prototype,"exportImageParameters",void 0),a([h({readOnly:!0})],t.prototype,"exportImageVersion",null),a([h()],t.prototype,"layer",void 0),a([h({readOnly:!0})],t.prototype,"timeExtent",null),t=a([F("esri.views.layers.WMSLayerView")],t),t};let u=class extends H(W(U(V))){constructor(){super(...arguments),this.bitmapContainer=new E}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{C(t)||R.getLogger(this).error(t)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:i}=e;this.bitmapContainer=new E,this.container.addChild(this.bitmapContainer),this.strategy=new L({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles($(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=M(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:i}=this,{x:o,y:s}=e,{spatialReference:d}=t;let r,p=0,n=0;if(i.children.some(g=>{const{width:w,height:v,resolution:b,x:l,y:x}=g,I=l+b*w,P=x-b*v;return o>=l&&o<=I&&s<=x&&s>=P&&(r=new q({xmin:l,ymin:P,xmax:I,ymax:x,spatialReference:d}),p=w,n=v,!0)}),!r)return null;const m=r.width/p,c=Math.round((o-r.xmin)/m),y=Math.round((r.ymax-s)/m);return{extent:r,width:p,height:n,x:c,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,i,o){return this.layer.fetchImageBitmap(e,t,i,{timeExtent:this.timeExtent,...o})}};a([h()],u.prototype,"strategy",void 0),a([h()],u.prototype,"updating",void 0),u=a([F("esri.views.2d.layers.WMSLayerView2D")],u);const dt=u;export{dt as default};