import{aa as s,ab as d,ac as c,e6 as l}from"./index.7eb0daf2.js";import{a}from"./OrderByInfo.b53e85dd.js";function u(r,e,t){if(!r)return null;const i=r.find(o=>!!o.field);if(!i)return null;const n=new a;return n.read(i,t),[n]}function f(r,e,t,i){const n=r.find(o=>!!o.field);n&&l(t,[n.toJSON()],e)}const y={type:[a],json:{origins:{"web-scene":{write:!1,read:!1}},name:"layerDefinition.orderBy",read:{reader:u},write:{writer:f}}},w=r=>{let e=class extends r{constructor(){super(...arguments),this.orderBy=null}};return s([d(y)],e.prototype,"orderBy",void 0),e=s([c("esri.layers.mixins.OrderedLayer")],e),e};export{y as c,w as p};