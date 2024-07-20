/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.1
 */const c="calcite-list",a="calcite-list-item-group",r="calcite-list-item";function u(s){return Array.from(s.assignedElements({flatten:!0}).filter(e=>e.matches(c)))}function m(s){const e=s.assignedElements({flatten:!0}),l=e.filter(t=>t?.matches(a)).map(t=>Array.from(t.querySelectorAll(r))).reduce((t,i)=>[...t,...i],[]),n=e.filter(t=>t?.matches(r));return[...e.filter(t=>t?.matches(c)).map(t=>Array.from(t.querySelectorAll(r))).reduce((t,i)=>[...t,...i],[]),...l,...n]}function f(s){s.forEach(e=>{e.setPosition=s.indexOf(e)+1,e.setSize=s.length})}function h(s,e=!1){const l=e?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";return document.evaluate(l,s,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}export{h as a,u as b,m as g,f as u};
