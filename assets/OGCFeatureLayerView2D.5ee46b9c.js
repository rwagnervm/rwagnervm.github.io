import{a6 as r,a7 as o,a8 as p}from"./index.221827cd.js";import s from"./FeatureLayerView2D.7c1a650d.js";import"./utils.0160becb.js";import"./Utils.2136650a.js";import"./enums.0295eb81.js";import"./enums.2d9e6f64.js";import"./Texture.940076b2.js";import"./VertexElementDescriptor.1fdca6da.js";import"./MaterialKey.0cadabc1.js";import"./LayerView.ce6e0535.js";import"./schemaUtils.d20994fa.js";import"./visualVariablesUtils.62efda9d.js";import"./createSymbolSchema.827eb617.js";import"./ExpandedCIM.a372ce74.js";import"./BidiEngine.d8bba3fc.js";import"./Rect.95b0fd2e.js";import"./quantizationUtils.7ff797cc.js";import"./GeometryUtils.4f19e772.js";import"./floatRGBA.3f71f8e9.js";import"./util.520a352e.js";import"./floorFilterUtils.05eb8c6a.js";import"./popupUtils.c6371f3a.js";import"./RefreshableLayerView.887ed8c3.js";const m=t=>{let e=class extends t{get availableFields(){return this.layer.fieldsIndex.fields.map(a=>a.name)}};return r([o()],e.prototype,"layer",void 0),r([o({readOnly:!0})],e.prototype,"availableFields",null),e=r([p("esri.views.layers.OGCFeatureLayerView")],e),e};let i=class extends m(s){supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}};i=r([p("esri.views.2d.layers.OGCFeatureLayerView2D")],i);const I=i;export{I as default};
