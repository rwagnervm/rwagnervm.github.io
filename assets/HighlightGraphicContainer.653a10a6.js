import{aa as t,ac as i}from"./index.7eb0daf2.js";import{E as s,a as h,R as n}from"./Container.461c0161.js";import{i as o}from"./AGraphicContainer.c019acec.js";let r=class extends o{get hasHighlight(){return this.children.some(e=>e.hasData)}renderChildren(e){this.attributeView.update(),e.drawPhase===s.HIGHLIGHT&&this.children.some(a=>a.hasData)&&(super.renderChildren(e),e.context.setColorMask(!0,!0,!0,!0),h(e,!0,a=>{this._renderChildren(a,n.All)}))}};r=t([i("esri.views.2d.layers.graphics.HighlightGraphicContainer")],r);const m=r;export{m as h};
