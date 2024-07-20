import{$ as u,bf as m,bg as w,U as f,G as p,s as y}from"./index.7eb0daf2.js";let r=null,s=!0;function T(e,a,t){if(!e||!a)throw new Error("Cannot construct image data without dimensions");if(s)try{return new ImageData(e,a)}catch{s=!1}return d(e,a,t)}function b(e,a,t,n){if(!a||!t)throw new Error("Cannot construct image data without dimensions");if(s)try{return new ImageData(e,a,t)}catch{s=!1}const i=d(a,t,n);return i.data.set(e,0),i}function g(){return r||(r=document.createElement("canvas"),r.width=1,r.height=1),r}function d(e,a,t){return t||(t=g()),t.getContext("2d").createImageData(e,a)}async function h(e,a){const t=window.URL.createObjectURL(e);try{const{data:n}=await f(t,{...a,responseType:"image"});return n}catch(n){throw p(n)?n:new y("invalid-image",`Could not fetch requested image at ${t}`)}finally{window.URL.revokeObjectURL(t)}}async function E(e,a){const{arrayBuffer:t,mediaType:n}=await _(e,a),i=n==="image/png";if(n==="image/gif"){const{isAnimatedGIF:o,parseGif:c}=await u(()=>import("./gif.6dd2d4b0.js"),["assets/gif.6dd2d4b0.js","assets/index.7eb0daf2.js","assets/index.d3b4073e.css"]);if(o(t))return c(t,a)}if(i){const{isAnimatedPNG:o,parseApng:c}=await u(()=>import("./apng.b8434d8d.js"),["assets/apng.b8434d8d.js","assets/index.7eb0daf2.js","assets/index.d3b4073e.css"]);if(o(t))return c(t,a)}return h(new Blob([t],{type:n}),a)}async function _(e,a){const t=m(e);if(t?.isBase64)return{arrayBuffer:w(t.data),mediaType:t.mediaType};const n=await f(e,{responseType:"array-buffer",...a});return{arrayBuffer:n.data,mediaType:n.getHeader?.("Content-Type")??""}}export{b as c,E as p,T as s};