import{aj as p,hI as u,n as l,hJ as s}from"./index.7eb0daf2.js";import{a as f,i as d}from"./MeshLocalVertexSpace.82c9e8da.js";function a(){return l.getLogger("esri.geometry.Mesh")}function c(e){return e.origin!=null}function w(e){return c(e.vertexSpace)}function y(e,n){if(!c(e))return null;const[r,i,o]=e.origin;return new p({x:r,y:i,z:o,spatialReference:n})}function S(e,n){const{x:r,y:i,z:o,spatialReference:g}=e,t=[r,i,o??0];return n?.geographic!==void 0&&(u(a(),"option: geographic",{replacement:"Use the `vertexSpace` option instead.",version:"4.29",warnOnce:!0}),n.vertexSpace&&a().warn("Deprecated geographic flag ignored since vertexSpace option is provided.")),(n?.vertexSpace??v(n?.geographic)??h(g))==="local"?new f({origin:t}):new d({origin:t})}function h(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}function v(e){return e==null?void 0:e?"local":"georeferenced"}function z(e,n){return e.type===n.type&&(e.origin===n.origin||e.origin!=null&&n.origin!=null&&s(e.origin,n.origin))}export{c as a,w as g,z as m,S as s,y as u};