import{cI as m,cn as p,U as F,e7 as f,ay as E,fD as d}from"./index.7eb0daf2.js";import{t as x}from"./query.702fc5fe.js";import{t as j}from"./queryZScale.835a340e.js";const a="Layer does not support extent calculation.";function O(o,n){const r=o.geometry,t=o.toJSON(),e=t;if(r!=null&&(e.geometry=JSON.stringify(r),e.geometryType=E(r),e.inSR=d(r.spatialReference)),t.topFilter?.groupByFields&&(e.topFilter.groupByFields=t.topFilter.groupByFields.join(",")),t.topFilter?.orderByFields&&(e.topFilter.orderByFields=t.topFilter.orderByFields.join(",")),t.topFilter&&(e.topFilter=JSON.stringify(e.topFilter)),t.objectIds&&(e.objectIds=t.objectIds.join(",")),t.orderByFields&&(e.orderByFields=t.orderByFields.join(",")),t.outFields&&!(n?.returnCountOnly||n?.returnExtentOnly||n?.returnIdsOnly)?t.outFields.includes("*")?e.outFields="*":e.outFields=t.outFields.join(","):delete e.outFields,t.outSR?e.outSR=d(t.outSR):r&&t.returnGeometry&&(e.outSR=e.inSR),t.returnGeometry&&delete t.returnGeometry,t.timeExtent){const l=t.timeExtent,{start:s,end:i}=l;s==null&&i==null||(e.time=s===i?s:`${s??"null"},${i??"null"}`),delete t.timeExtent}return e}async function S(o,n,r,t){const e=await u(o,n,"json",t);return j(n,r,e.data),e}async function R(o,n,r){return n.timeExtent!=null&&n.timeExtent.isEmpty?{data:{objectIds:[]}}:u(o,n,"json",r,{returnIdsOnly:!0})}async function h(o,n,r){return n.timeExtent!=null&&n.timeExtent.isEmpty?{data:{count:0,extent:null}}:u(o,n,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(a);if(e.hasOwnProperty("count"))throw new Error(a);return t})}function w(o,n,r){return n.timeExtent!=null&&n.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):u(o,n,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function u(o,n,r,t={},e={}){const l=typeof o=="string"?m(o):o,s=n.geometry?[n.geometry]:[];return t.responseType="json",p(s,null,t).then(i=>{const y=i?.[0];y!=null&&((n=n.clone()).geometry=y);const c=x({...l.query,f:r,...e,...O(n,e)});return F(f(l.path,"queryTopFeatures"),{...t,query:{...c,...t.query}})})}export{w as c,h as d,R as m,S as p};
